from playwright.sync_api import Page, TimeoutError as PlaywrightTimeoutError

from auth_script import login_to_jira
from jrf import get_browser_page
from settings import CONFIG
from playwright_selectors import LOGIN_SELECTORS, SOURCE_JIRA as SJ

JQL_MY_TASKS = "/secure/IssueNavigator.jspa?jql=assignee+%3D+currentUser()+AND+resolution+%3D+Unresolved"


def get_user_tasks(page: Page, base_url, wait_timeout=20):
    domain = base_url.split("/login.jsp")[0].split("/secure/")[0]
    page.set_default_timeout(wait_timeout * 1_000)
    page.goto(f"{domain}{JQL_MY_TASKS}", wait_until="domcontentloaded")
    if page.locator(SJ["empty_results"]).count():
        return []
    try:
        table = page.locator(SJ["issues_table"])
        table.wait_for(state="visible")
        tasks = []
        for row in table.locator(SJ["issue_row"]).all():
            try:
                tasks.append({
                    "key": row.locator(SJ["issue_key"]).inner_text().strip(),
                    "summary": row.locator(SJ["issue_summary"]).inner_text().strip(),
                    "status": row.locator(SJ["issue_status"]).inner_text().strip(),
                })
            except PlaywrightTimeoutError:
                continue
        return tasks
    except PlaywrightTimeoutError as error:
        print(f"[ОШИБКА] Не удалось получить список задач: {error}")
        return None


def main():
    credentials = CONFIG["src_jira"]
    with get_browser_page() as page:
        if not login_to_jira(page, credentials["login_url"], credentials["user"], credentials["pass"], LOGIN_SELECTORS["src_jira"]):
            return
        tasks = get_user_tasks(page, credentials["url"])
        for index, task in enumerate(tasks or [], 1):
            print(f"{index}. [{task['key']}] ({task['status']}) — {task['summary']}")
        input("Нажмите Enter, чтобы закрыть браузер...")


if __name__ == "__main__":
    main()
