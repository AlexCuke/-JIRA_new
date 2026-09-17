"""Перенос новых комментариев исходной Jira в комментарий локальной Jira."""
import re
from datetime import datetime
from urllib.parse import urlparse

from settings import CONFIG


LAST_COMMENT_FIELD = '__last_local_comment_to_global'


def sources_from_rows(rows, settings, target_key):
    from task_sync import column_index, parse_pair
    header_row = max(1, int(settings.get('header_row', 2)))
    if len(rows) < header_row:
        raise ValueError('В таблице отсутствует строка заголовков.')
    mapping = settings.get('column_mapping', {})
    headers = rows[header_row - 1]
    src = column_index(headers, mapping.get('__source_url', 'Jira- Москва'))
    dst = column_index(headers, mapping.get('__destination_url', 'Jira- Внутр. /redmine'))
    system = 'redmine' if target_key.isdigit() else 'jira'
    base = (CONFIG['dest_jira']['url'] if system == 'jira'
            else CONFIG['dest_redmine']['url'].split('/projects/', 1)[0])
    expected_path = ('/browse/' if system == 'jira' else urlparse(base).path.rstrip('/') + '/issues/') + target_key
    sources = set()
    for row in rows[header_row:]:
        url = row[dst].strip() if dst < len(row) else ''
        parsed = urlparse(url)
        if parsed.netloc.casefold() != urlparse(base).netloc.casefold() or parsed.path.rstrip('/').upper() != expected_path.upper():
            continue
        source_url = row[src].strip() if src < len(row) else ''
        if not source_url:
            continue
        key, target, route = parse_pair(source_url, url)
        if target == target_key:
            sources.add(key)
    return sources


def find_source_issue(settings, target_key):
    """По локальному ключу/номеру находит единственную глобальную задачу."""
    from google_sheets_export import validate_settings
    import gspread
    target_key = target_key.strip().upper()
    if not re.fullmatch(r'(?:[A-Z][A-Z0-9_]*-\d+|\d+)', target_key):
        raise ValueError('Введите ключ локальной Jira или номер Redmine.')
    validate_settings(settings)
    spreadsheet = gspread.service_account(filename=settings['credentials_file']).open_by_url(settings['spreadsheet_url'])
    sheets = list(dict.fromkeys(['Лист', 'КИС_2_0', settings.get('worksheet_name', 'Лист')]))
    sources = set()
    for name in sheets:
        try:
            sheet = spreadsheet.worksheet(name)
        except gspread.WorksheetNotFound:
            continue
        sources.update(sources_from_rows(sheet.get_all_values(), settings, target_key))
    if not sources:
        raise ValueError(f'Для локальной задачи {target_key} не найдена глобальная Jira-задача в таблице. Проверьте обе ссылки в строке.')
    if len(sources) > 1:
        raise ValueError(f"Локальной задаче {target_key} соответствуют разные глобальные задачи: {', '.join(sorted(sources))}. Уточните таблицу.")
    return next(iter(sources)), 'redmine' if target_key.isdigit() else 'jira'


def copy_last_local_comment(page, source_key, target_key, system):
    """Переносит последний непустой комментарий локальной задачи в глобальную."""
    import jrf
    if system == 'jira':
        jrf.JiraDestPage(page).open_existing_issue(target_key)
        base = CONFIG['dest_jira']['url'].rstrip('/')
        comments = read_comments(page, base, target_key)
        local_url = f'{base}/browse/{target_key}'
    elif system == 'redmine':
        jrf.RedmineDestPage(page).open_existing_issue(target_key)
        base = CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/')
        response = page.context.request.get(f'{base}/issues/{target_key}.json', params={'include': 'journals'})
        if not response.ok:
            raise RuntimeError(f'Не удалось прочитать комментарии Redmine {target_key}: HTTP {response.status}.')
        comments = [{'id': str(j['id']), 'body': j.get('notes') or '',
                     'author': {'displayName': (j.get('user') or {}).get('name', '')},
                     'created': j.get('created_on', '')} for j in response.json()['issue'].get('journals', [])]
        local_url = f'{base}/issues/{target_key}'
    else:
        raise ValueError('Неизвестная локальная система.')
    comments = [c for c in comments if str(c.get('body') or '').strip()]
    if not comments:
        return False
    def order(comment):
        return datetime.fromisoformat(comment['created'].replace('Z', '+00:00')).timestamp(), int(comment['id'])
    latest = max(comments, key=order)
    tag = f"[local-comment-sync:{system}:{target_key}:{latest['id']}]"
    prefix, number = source_key.rsplit('-', 1)
    jrf.JiraSourcePage(page).open_issue(prefix + '-', number)
    global_base = CONFIG['src_jira']['url'].rstrip('/')
    existing = read_comments(page, global_base, source_key)
    if any(tag in str(c.get('body') or '') for c in existing):
        return False
    author = (latest.get('author') or {}).get('displayName') or 'Автор не указан'
    body = f"Последний комментарий из {target_key}\n{local_url}\n\n{author} — {latest['created']}\n{latest['body']}\n\n{tag}"
    result = page.evaluate("""async ({url, body}) => {
        const response = await fetch(url, {method: 'POST', credentials: 'same-origin',
            headers: {'Content-Type': 'application/json', 'X-Atlassian-Token': 'no-check'},
            body: JSON.stringify({body})});
        return {ok: response.ok, status: response.status};
    }""", {'url': f'{global_base}/rest/api/2/issue/{source_key}/comment', 'body': body})
    if not result['ok']:
        raise RuntimeError(f"Не удалось сохранить комментарий в {source_key}: HTTP {result['status']}.")
    if not any(tag in str(c.get('body') or '') for c in read_comments(page, global_base, source_key)):
        raise RuntimeError('Сохранение комментария в глобальной Jira не подтверждено.')
    return True


def target_from_rows(rows, settings, source_key, include_redmine=False):
    """Находит локальные Jira-ссылки только в строках указанной исходной задачи."""
    from task_sync import column_index, parse_pair
    header_row = max(1, int(settings.get("header_row", 2)))
    if len(rows) < header_row:
        raise ValueError("В таблице отсутствует строка заголовков.")
    mapping = settings.get("column_mapping", {})
    headers = rows[header_row - 1]
    source_index = column_index(headers, mapping.get("__source_url", "Jira- Москва"))
    target_index = column_index(headers, mapping.get("__destination_url", "Jira- Внутр. /remine"))
    targets = set()
    for row in rows[header_row:]:
        source_url = row[source_index].strip() if source_index < len(row) else ""
        match = re.search(r"/browse/([A-Za-z][A-Za-z0-9_]*-\d+)(?:[/?#]|$)", source_url)
        if not match or match[1].upper() != source_key.upper():
            continue
        target_url = row[target_index].strip() if target_index < len(row) else ""
        if not target_url:
            continue
        key, target, route = parse_pair(source_url, target_url)
        if key == source_key.upper():
            if include_redmine:
                targets.add((target, 'jira' if route.startswith('jira_') else 'redmine'))
            elif route.startswith("jira_"):
                targets.add(target)
    return targets


def find_target_issue(settings, source_key, include_redmine=False):
    """Ищет единственную связанную локальную Jira-задачу на листах проекта."""
    from google_sheets_export import validate_settings
    import gspread
    validate_settings(settings)
    project = source_key.upper().rsplit("-", 1)[0]
    sheets = {"KISEMIAS2019": ["Лист"], "KISEMIAS2025": ["Лист", "КИС_2_0"],
              "REFACT": ["КИС_2_0"]}.get(project, [settings.get("worksheet_name", "Лист")])
    client = gspread.service_account(filename=settings["credentials_file"])
    spreadsheet = client.open_by_url(settings["spreadsheet_url"])
    targets = set()
    for name in sheets:
        try:
            sheet = spreadsheet.worksheet(name)
        except gspread.WorksheetNotFound:
            continue
        if include_redmine:
            targets.update(target_from_rows(sheet.get_all_values(), settings, source_key, include_redmine=True))
        else:
            targets.update(target_from_rows(sheet.get_all_values(), settings, source_key))
    if not targets:
        system_name = 'локальную Jira/Redmine' if include_redmine else 'локальную Jira'
        raise ValueError(f"Для {source_key} в Google Таблице не найдена ссылка на {system_name}. Заполните целевую ссылку в строке задачи.")
    if len(targets) > 1:
        descriptions = [f'{system}:{key}' for key, system in targets] if include_redmine else list(targets)
        raise ValueError(f"Для {source_key} найдены разные локальные задачи: {', '.join(sorted(descriptions))}. Уточните ссылки в таблице.")
    return next(iter(targets))


def read_comments(page, base_url, key):
    """Читает все страницы; ошибка не допускает выгрузку неполного списка."""
    comments, start = [], 0
    while True:
        response = page.context.request.get(
            f"{base_url.rstrip('/')}/rest/api/2/issue/{key}/comment",
            params={"startAt": start, "maxResults": 100},
        )
        if not response.ok:
            raise RuntimeError(f"Не удалось прочитать комментарии {key}: HTTP {response.status}.")
        payload = response.json()
        batch = payload.get("comments", [])
        if not isinstance(batch, list) or int(payload.get("startAt", start)) != start:
            raise RuntimeError(f"Некорректная страница комментариев {key}.")
        comments.extend(batch)
        start += len(batch)
        if start >= int(payload.get("total", start)):
            return comments
        if not batch:
            raise RuntimeError(f"Получен неполный список комментариев {key}.")


def marker(source_key, comment_id):
    return f"[jira-comment-sync:{source_key}:{comment_id}]"


def copy_new_comments(page, source_key, target_key):
    """Сохраняет один новый комментарий с ещё не перенесёнными записями."""
    import jrf
    source_key, target_key = source_key.strip().upper(), target_key.strip().upper()
    for key in (source_key, target_key):
        if not re.fullmatch(r"[A-Z][A-Z0-9_]*-\d+", key):
            raise ValueError("Укажите полный ключ исходной и целевой Jira-задачи.")
    prefix, number = source_key.rsplit("-", 1)
    jrf.JiraSourcePage(page).open_issue(prefix + "-", number)
    source = read_comments(page, CONFIG["src_jira"]["url"], source_key)
    jrf.JiraDestPage(page).open_existing_issue(target_key)
    base_url = CONFIG["dest_jira"]["url"].rstrip("/")
    existing = read_comments(page, base_url, target_key)
    copied = "\n".join(str(comment.get("body") or "") for comment in existing)
    new, seen = [], set()
    for comment in source:
        body = str(comment.get("body") or "").strip()
        if not body:
            continue
        comment_id = str(comment.get("id") or "")
        if not comment_id.isdigit():
            raise RuntimeError("У исходного комментария отсутствует корректный ID.")
        tag = marker(source_key, comment_id)
        if tag not in copied and tag not in seen:
            new.append((comment, tag))
            seen.add(tag)
    if not new:
        return 0
    source_url = f"{CONFIG['src_jira']['url'].rstrip('/')}/browse/{source_key}"
    parts = [f"Новые комментарии из {source_key}\n{source_url}"]
    for comment, tag in new:
        author = (comment.get("author") or {}).get("displayName") or "Автор не указан"
        parts.append(f"{author} — {comment.get('created') or 'Дата не указана'}\n{comment['body']}\n{tag}")
    result = page.evaluate(
        """async ({url, body}) => {
            const response = await fetch(url, {
                method: 'POST', credentials: 'same-origin',
                headers: {'Content-Type': 'application/json', 'X-Atlassian-Token': 'no-check'},
                body: JSON.stringify({body})
            });
            return {ok: response.ok, status: response.status};
        }""",
        {"url": f"{base_url}/rest/api/2/issue/{target_key}/comment", "body": "\n\n".join(parts)},
    )
    if not result["ok"]:
        raise RuntimeError(f"Не удалось добавить комментарий в {target_key}: HTTP {result['status']}.")
    verified = "\n".join(str(c.get("body") or "") for c in read_comments(page, base_url, target_key))
    if any(tag not in verified for _, tag in new):
        raise RuntimeError("Jira приняла запрос, но сохранение комментария не подтверждено. Повторите проверку.")
    return len(new)
