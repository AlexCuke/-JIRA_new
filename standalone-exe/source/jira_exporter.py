import json
import os
from datetime import datetime

from dotenv import load_dotenv

from jrf import JiraSourcePage, get_browser_page
from settings import CONFIG
from playwright_selectors import SOURCE_JIRA as SJ

load_dotenv()
OUTPUT_FILE = "my_jira_issues.json"


def main() -> None:
    credentials = CONFIG["src_jira"]
    if not credentials["user"] or not credentials["pass"]:
        print("[ОШИБКА] Проверьте SOURCE_LOGIN и SOURCE_PASSWORD в .env")
        return

    result = []
    with get_browser_page() as page:
        source = JiraSourcePage(page)
        page.goto(f"{credentials['url']}/issues/", wait_until="domcontentloaded")
        source.login_if_needed()
        jql = "assignee%20%3D%20currentUser()%20AND%20resolution%20%3D%20Unresolved"
        page.goto(f"{credentials['url']}/issues/?jql={jql}", wait_until="domcontentloaded")
        page.locator(SJ["issue_link"]).first.wait_for(state="visible")
        issues = {}
        for link in page.locator(SJ["issue_link"]).all():
            key, url = link.get_attribute("data-issue-key"), link.get_attribute("href")
            if key and url:
                issues[key] = url
        for index, (key, url) in enumerate(issues.items(), 1):
            print(f"[{index}/{len(issues)}] {key}")
            prefix, number = key.rsplit("-", 1)
            data = source.parse_issue(f"{prefix}-", number)
            result.append({"key": key, "url": url, "parsed_at": datetime.now().isoformat(), **data})

    if result:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
            json.dump(result, file, ensure_ascii=False, indent=2)
        print(f"[УСПЕХ] Сохранено: {os.path.abspath(OUTPUT_FILE)}")


if __name__ == "__main__":
    main()
