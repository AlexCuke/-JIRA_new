"""Synchronize selected mapped fields in existing destination issues."""
import json
import re
from urllib.parse import urlparse

from auth_logging import _application_dir
from field_picker import load_route_mapping, read_field, mapped_value, fill_mapped_fields
from settings import CONFIG

SETTINGS_FILE = _application_dir() / 'task_sync_settings.json'
ROUTES = {'jira_kis': ('jira', 'КИС ЕМИАС (KIS)'),
          'jira_refact': ('jira', 'КИС 2.0 (REFACT)'), 'redmine': ('redmine', None)}
EXCLUDED = {'#attachment-browse-button', '#attachments_form', '#issuetype-field',
            '#issue_tracker_id', '#status', '#issue_status_id'}


def available_fields(route):
    return [f for f in load_route_mapping(*ROUTES[route])
            if not f.get('default_only') and f['target_selector'] not in EXCLUDED]


def field_id(field):
    return field['selector'] + ' -> ' + field['target_selector']


def load_sync_settings():
    if not SETTINGS_FILE.exists():
        return {}
    data = json.loads(SETTINGS_FILE.read_text(encoding='utf-8'))
    if not isinstance(data, dict) or any(not isinstance(v, list) or
            any(not isinstance(x, str) for x in v) for v in data.values()):
        raise ValueError('Некорректный файл настроек синхронизации')
    return data


def save_sync_settings(data):
    temporary = SETTINGS_FILE.with_suffix('.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    temporary.replace(SETTINGS_FILE)


def parse_pair(source, destination):
    src, dst = urlparse(source.strip()), urlparse(destination.strip())
    if src.netloc.lower() != urlparse(CONFIG['src_jira']['url']).netloc.lower():
        raise ValueError('Ссылка источника не относится к настроенной Jira')
    match = re.fullmatch(r'/browse/([A-Za-z][A-Za-z0-9_]*-\d+)/?', src.path)
    if not match:
        raise ValueError('Некорректная ссылка исходной задачи')
    key = match[1].upper()
    jira = urlparse(CONFIG['dest_jira']['url'])
    redmine_base = CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/')
    redmine = urlparse(redmine_base)
    if dst.netloc.lower() == jira.netloc.lower():
        target = re.fullmatch(r'/browse/((KIS|REFACT)-\d+)/?', dst.path, re.I)
        if target:
            return key, target[1].upper(), 'jira_kis' if target[2].upper() == 'KIS' else 'jira_refact'
    if dst.netloc.lower() == redmine.netloc.lower():
        target = re.fullmatch(re.escape(redmine.path) + r'/issues/(\d+)/?', dst.path)
        if target:
            return key, target[1], 'redmine'
    raise ValueError('Целевая ссылка не относится к локальной Jira KIS/REFACT или Redmine')


def column_index(headers, name):
    def normalize(value):
        return re.sub(r'\s+', '', value.casefold()).replace('/remine', '/redmine')
    matches = [index for index, header in enumerate(headers) if normalize(header) == normalize(name)]
    if len(matches) != 1:
        raise ValueError(f'Колонка «{name}» отсутствует или повторяется. '
                         'Проверьте названия колонок в настройках Google Таблицы.')
    return matches[0]


def pairs_from_rows(rows, settings):
    header_row = max(1, int(settings.get('header_row', 2)))
    if len(rows) < header_row:
        raise ValueError('В таблице отсутствует строка заголовков')
    headers = rows[header_row - 1]
    mapping = settings.get('column_mapping', {})
    names = [mapping.get('__source_url', 'Jira- Москва'),
             mapping.get('__destination_url', 'Jira- Внутр. /remine')]
    indexes = [column_index(headers, name) for name in names]
    status_index = column_index(headers, 'Статус')
    pairs, skipped, owners = [], [], {}
    for number, row in enumerate(rows[header_row:], header_row + 1):
        status = row[status_index] if status_index < len(row) else ''
        if re.sub(r'\s+', ' ', status.strip().casefold()) in {'закрыт', 'в релиз', 'пилот'}:
            skipped.append(f'Строка {number}: исключённый статус «{status.strip()}»')
            continue
        values = [row[i].strip() if i < len(row) else '' for i in indexes]
        if not all(values):
            skipped.append(f'Строка {number}: отсутствует одна из ссылок')
            continue
        try:
            pair = parse_pair(*values)
        except ValueError as error:
            skipped.append(f'Строка {number}: {error}')
            continue
        target = pair[2], pair[1]
        if target in owners and owners[target] != pair[0]:
            raise ValueError(f'Разные исходные задачи ссылаются на одну целевую: {pair[1]}')
        owners[target] = pair[0]
        if pair not in pairs:
            pairs.append(pair)
    return pairs, skipped


def read_pairs(settings):
    from google_sheets_export import validate_settings
    import gspread
    validate_settings(settings)
    client = gspread.service_account(filename=settings['credentials_file'])
    sheet = client.open_by_url(settings['spreadsheet_url']).worksheet(settings['worksheet_name'])
    return pairs_from_rows(sheet.get_all_values(), settings)


def sync_pair(page, pair, selected, log):
    import jrf
    from comment_sync import LAST_COMMENT_FIELD, copy_last_local_comment
    key, target, route = pair
    reverse_comment = LAST_COMMENT_FIELD in selected.get(route, [])
    def transfer_comment():
        if not reverse_comment:
            return False
        changed = copy_last_local_comment(page, key, target, ROUTES[route][0])
        log(f'{target} → {key}: ' + ('последний комментарий сохранён' if changed else 'нового комментария нет'))
        return changed
    fields = [dict(f) for f in available_fields(route) if field_id(f) in selected.get(route, [])]
    if not fields:
        if reverse_comment:
            return transfer_comment()
        log(f'{key} → {target}: поля не выбраны, пропуск')
        return False
    prefix, number = key.rsplit('-', 1)
    jrf.JiraSourcePage(page).open_issue(prefix + '-', number)
    values = []
    system, _ = ROUTES[route]
    for field in fields:
        value = read_field(page, field)
        if not value or not value.strip():
            log(f'{key}: пустое поле «{field["label"]}» пропущено')
            continue
        value = mapped_value(field, value)
        if value is None:
            raise ValueError(f'Нет соответствия значения для поля «{field["label"]}»')
        if field['target_selector'] in ('#duedate', '#issue_due_date'):
            value = jrf.convert_date(value, system)
        if field['target_selector'] in ('#summary', '#issue_subject'):
            value = value.removesuffix(f' [{number}]') + f' [{number}]'
        if field['target_selector'] in ('#description', '#mce_0', '#issue_description'):
            value += f'\n\nСсылка на глобальную JIRA - {CONFIG["src_jira"]["url"]}/browse/{key}'
        values.append((field, value))
    if not values:
        return transfer_comment()
    if system == 'jira':
        jrf.JiraDestPage(page).open_existing_issue(target)
        base = CONFIG['dest_jira']['url'].rstrip('/')
        response = page.context.request.get(f'{base}/rest/api/2/issue/{target}', params={'fields': 'project'})
        if not response.ok:
            raise RuntimeError(f'Не удалось прочитать {target}: HTTP {response.status}')
        issue_id = response.json().get('id')
        if not issue_id or not str(issue_id).isdigit():
            raise ValueError('Jira не вернула идентификатор задачи')
        page.goto(f'{base}/secure/EditIssue!default.jspa?id={issue_id}', wait_until='domcontentloaded')
        submit = '#edit-issue-submit'
        expected = f'{base}/browse/{target}'
    else:
        jrf.RedmineDestPage(page).open_existing_issue(target)
        base = CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/')
        submit = '#issue-form input[type="submit"]'
        expected = f'{base}/issues/{target}'
    # Save only after every selected nonempty field has been filled successfully.
    for field, value in values:
        if fill_mapped_fields(page, [(field, value)]) is False:
            raise ValueError(f'Не удалось заполнить «{field["label"]}»; задача не сохранена')
    page.locator(submit).first.click()
    page.wait_for_url(lambda url: str(url).split('?', 1)[0].split('#', 1)[0].rstrip('/') == expected,
                      timeout=60000)
    log(f'{key} → {target}: сохранено полей — {len(values)}')
    transfer_comment()
    return True
