"""Полная выборка задач, когда-либо назначенных текущему пользователю."""
from urllib.parse import quote

HISTORY_JQL = "assignee WAS currentUser()\nORDER BY updated DESC"


def fetch_history_issues(page, base_url):
    """Использует авторизованную сессию браузера и обходит все страницы REST."""
    base_url = base_url.rstrip("/")
    page.goto(f"{base_url}/issues/?jql={quote(HISTORY_JQL)}", wait_until="domcontentloaded")
    issues, seen = [], set()
    start = 0
    while True:
        response = page.context.request.get(
            f"{base_url}/rest/api/2/search",
            params={"jql": HISTORY_JQL, "startAt": start, "maxResults": 100,
                    "fields": "assignee"},
        )
        if not response.ok:
            raise RuntimeError(f"Поиск Jira завершился с HTTP {response.status}. Выгрузка отменена.")
        payload = response.json()
        batch = payload.get("issues")
        total = payload.get("total")
        if not isinstance(batch, list) or not isinstance(total, int):
            raise RuntimeError("Jira вернула некорректный ответ поиска.")
        if payload.get("startAt", start) != start:
            raise RuntimeError("Jira вернула неверную страницу результатов.")
        for issue in batch:
            key = issue["key"]
            if key in seen:
                raise RuntimeError("Выдача Jira изменилась во время поиска. Повторите выгрузку.")
            seen.add(key)
            issues.append(issue)
        start += len(batch)
        if start >= total:
            return issues
        if not batch:
            raise RuntimeError("Jira вернула неполный список задач. Выгрузка отменена.")


def fetch_issue_statuses(page, base_url, issue_keys):
    """Читает статус и срок исполнения через авторизованную REST-сессию Jira."""
    results, failures = {}, {}
    base_url = base_url.rstrip("/")
    for key in issue_keys:
        response = page.context.request.get(
            f"{base_url}/rest/api/2/issue/{key}", params={"fields": "status,duedate,fixVersions"}
        )
        if not response.ok:
            failures[key] = f"HTTP {response.status}"
            continue
        fields = response.json().get("fields", {})
        status = fields.get("status") or {}
        fix_versions = fields.get("fixVersions") or []
        results[key] = {
            "status": str(status.get("name", "")),
            "duedate": str(fields.get("duedate") or ""),
            "fix_versions": ", ".join(
                str(version.get("name", "")).strip() for version in fix_versions
                if str(version.get("name", "")).strip()
            ),
        }
    return results, failures
