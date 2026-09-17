"""Обновление выбранных колонок существующих строк из глобальной Jira."""
import re
from urllib.parse import urlparse

from google_sheets_export import validate_settings, format_due_date, _center_columns
from settings import CONFIG
from task_sync import column_index, parse_pair

COLUMNS = ('Наименование', 'Срок', 'Версия', 'Статус', 'Jira- Москва', 'Jira- Внутр. /redmine', 'Исполнитель')


def update_sheet_data(page, settings, selected, log):
    import gspread
    from gspread.utils import rowcol_to_a1
    import jrf
    if not selected or set(selected) - set(COLUMNS):
        raise ValueError('Выберите столбцы для обновления.')
    validate_settings(settings)
    sheet = gspread.service_account(filename=settings['credentials_file']).open_by_url(
        settings['spreadsheet_url']).worksheet(settings['worksheet_name'])
    rows = sheet.get_all_values()
    header_row = max(1, int(settings.get('header_row', 2)))
    if len(rows) < header_row:
        raise ValueError('В таблице нет строки заголовков.')
    headers = rows[header_row - 1]
    mapping = settings.get('column_mapping', {})
    names = {'Наименование': mapping.get('Название', 'Наименование'),
             'Срок': mapping.get('Срок_Исполнения', 'Срок'),
             'Версия': mapping.get('Версия', 'Версия'), 'Статус': mapping.get('Статус', 'Статус'),
             'Jira- Москва': mapping.get('__source_url', 'Jira- Москва'),
             'Jira- Внутр. /redmine': mapping.get('__destination_url', 'Jira- Внутр. /redmine'),
             'Исполнитель': mapping.get('__assignee', 'Исполнитель')}
    indexes = {name: column_index(headers, names[name]) for name in selected}
    source_index = column_index(headers, names['Jira- Москва'])
    base = CONFIG['src_jira']['url'].rstrip('/')
    cache, text_updates, date_updates, changed_rows = {}, [], [], set()
    skipped = unavailable = 0
    authenticated = False
    for number, row in enumerate(rows[header_row:], header_row + 1):
        url = row[source_index].strip() if source_index < len(row) else ''
        parsed = urlparse(url)
        match = re.fullmatch(r'/browse/([A-Za-z][A-Za-z0-9_]*-\d+)/?', parsed.path)
        if not match or parsed.netloc.casefold() != urlparse(base).netloc.casefold():
            skipped += 1
            continue
        key = match[1].upper()
        if not authenticated:
            prefix, issue_number = key.rsplit('-', 1)
            jrf.JiraSourcePage(page).open_issue(prefix + '-', issue_number)
            authenticated = True
        if key not in cache:
            response = page.context.request.get(f'{base}/rest/api/2/issue/{key}',
                                               params={'fields': 'summary,duedate,fixVersions,status,assignee'})
            if not response.ok:
                cache[key] = None
                log(f'{key}: не удалось прочитать Jira, HTTP {response.status}.')
            else:
                cache[key] = response.json()['fields']
        fields = cache[key]
        if fields is None:
            skipped += 1
            continue
        values = {'Наименование': fields.get('summary') or '', 'Срок': format_due_date(fields.get('duedate')),
                  'Версия': ', '.join(v['name'] for v in fields.get('fixVersions') or []),
                  'Статус': (fields.get('status') or {}).get('name', ''),
                  'Исполнитель': (fields.get('assignee') or {}).get('displayName', ''),
                  'Jira- Москва': f'{base}/browse/{key}'}
        if 'Jira- Внутр. /redmine' in selected:
            index = indexes['Jira- Внутр. /redmine']
            target_url = row[index].strip() if index < len(row) else ''
            try:
                _, target, route = parse_pair(url, target_url)
                target_base = (CONFIG['dest_jira']['url'].rstrip('/') if route.startswith('jira_')
                               else CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/'))
                values['Jira- Внутр. /redmine'] = f'{target_base}/' + (f'browse/{target}' if route.startswith('jira_') else f'issues/{target}')
            except ValueError:
                unavailable += 1
                log(f'Строка {number}: целевая ссылка отсутствует или некорректна; сохранено исходное значение.')
        for name, index in indexes.items():
            if name not in values:
                continue
            old = row[index] if index < len(row) else ''
            if str(old) == str(values[name]):
                continue
            update = {'range': rowcol_to_a1(number, index + 1), 'values': [[values[name]]]}
            (date_updates if name == 'Срок' else text_updates).append(update)
            changed_rows.add(number)
    if text_updates:
        sheet.batch_update(text_updates, value_input_option='RAW')
    if date_updates:
        sheet.batch_update(date_updates, value_input_option='USER_ENTERED')
        _center_columns(sheet, headers, min(changed_rows), max(changed_rows), column_names=(names['Срок'],))
    return {'updated': len(changed_rows), 'skipped': skipped, 'unavailable_links': unavailable}
