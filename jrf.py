import sys
from contextlib import contextmanager
from datetime import datetime

from playwright.sync_api import Locator, Page, TimeoutError as PlaywrightTimeoutError, sync_playwright
from settings import AVAILABLE_PREFIXES, CONFIG, DEFAULT_PREFIX, DEFAULT_TIMEOUT_MS
from playwright_selectors import DESTINATION_JIRA as DJ, REDMINE as RM, SOURCE_JIRA as SJ


def convert_date(date_str, target_format):
    """Преобразует дату из Jira в формат целевой системы."""
    if not date_str:
        return ""
    months_ru = {"янв": 1, "фев": 2, "мар": 3, "апр": 4, "май": 5, "июн": 6, "июл": 7, "авг": 8, "сен": 9, "окт": 10, "ноя": 11, "дек": 12}
    date_obj = None
    for fmt in ("%Y-%m-%d", "%d.%m.%y", "%d.%m.%Y"):
        try:
            date_obj = datetime.strptime(date_str, fmt)
            break
        except ValueError:
            continue
    if date_obj is None and "/" in date_str:
        try:
            day, month_name, year_text = date_str.split("/")
            month = months_ru.get(month_name.lower()[:3])
            year = int(year_text) + 2000 if len(year_text) == 2 else int(year_text)
            if month:
                date_obj = datetime(year, month, int(day))
        except (TypeError, ValueError):
            pass
    if date_obj is None:
        return date_str
    if target_format == "jira":
        month_name = {value: key for key, value in months_ru.items()}[date_obj.month]
        return f"{date_obj.day:02d}/{month_name}/{date_obj:%y}"
    if target_format == "redmine":
        return date_obj.strftime("%Y-%m-%d")
    return date_str


class BasePage:
    def __init__(self, page: Page):
        self.page = page

    def text_or_empty(self, selector: str) -> str:
        try:
            return self.page.locator(selector).first.inner_text(timeout=2_000).strip()
        except PlaywrightTimeoutError:
            return ""

    def attribute_or_empty(self, selector: str, name: str) -> str:
        try:
            return (self.page.locator(selector).first.get_attribute(name, timeout=2_000) or "").strip()
        except PlaywrightTimeoutError:
            return ""

    def fill(self, selector: str, value: str) -> Locator:
        locator = self.page.locator(selector).first
        locator.fill(value or "")
        return locator

    def select_by_text(self, selector: str, text_value: str) -> bool:
        if not text_value:
            return False
        try:
            self.page.locator(selector).first.select_option(label=text_value.strip())
            return True
        except Exception:
            return False

    def wait_for_login_form(self, selector: str, ready_selector: str, timeout: int = 30_000) -> bool:
        """Wait until either the login form or the requested authenticated page is ready."""
        try:
            self.page.locator(f"{selector}, {ready_selector}").first.wait_for(state="visible", timeout=timeout)
            return self.page.locator(selector).first.is_visible()
        except PlaywrightTimeoutError:
            return False

    def ensure_credentials(self, system: str) -> tuple[str, str]:
        username = CONFIG[system].get("user")
        password = CONFIG[system].get("pass")
        if not username or not password:
            raise RuntimeError(f"Для {system} не заданы логин или пароль в файле .env")
        return username, password


class JiraSourcePage(BasePage):
    def login_if_needed(self):
        username = self.page.locator(SJ["login"])
        if not self.wait_for_login_form(SJ["login"], SJ["summary"]):
            if "/login" in self.page.url.lower():
                raise RuntimeError("Страница входа Jira открылась, но поле логина #username-field не найдено")
            return
        login, password = self.ensure_credentials("src_jira")
        self.fill(SJ["login"], login)
        self.fill(SJ["password"], password)
        self.page.locator(SJ["login_button"]).click()
        try:
            username.wait_for(state="detached", timeout=30_000)
        except PlaywrightTimeoutError as error:
            message = self.text_or_empty(SJ["login_error"])
            raise RuntimeError(message or "Jira не приняла логин или пароль") from error

    def parse_issue(self, project_prefix, issue_number):
        url = f"{CONFIG['src_jira']['url']}/browse/{project_prefix}{issue_number}"
        self.page.goto(url, wait_until="domcontentloaded")
        self.login_if_needed()
        try:
            self.page.locator(SJ["summary"]).wait_for(state="visible", timeout=30_000)
        except PlaywrightTimeoutError as error:
            raise RuntimeError(
                f"Задача {project_prefix}{issue_number} не открылась после входа. Текущий URL: {self.page.url}"
            ) from error
        description = self.text_or_empty(SJ["description"])
        raw_date = self.text_or_empty(SJ["due_date"]) or self.attribute_or_empty(SJ["due_date"], "datetime")
        if not raw_date:
            aria = self.attribute_or_empty(SJ["due_date_by_label"], "aria-label")
            raw_date = aria.split(":", 1)[0].strip() if aria else ""
        return {
            "summary": self.text_or_empty(SJ["summary"]),
            "description": f"{description}\n\nСсылка на Московскую Jira - {url}",
            "duedate": raw_date,
            "cf_15608": self.text_or_empty(SJ["custom_field_15608"]),
            "cf_22106": self.text_or_empty(SJ["custom_field_22106"]),
        }


class JiraDestPage(BasePage):
    def login_if_needed(self):
        username = self.page.locator(DJ["login"])
        if not self.wait_for_login_form(DJ["login"], DJ["project_combobox"]):
            if "login" in self.page.url.lower():
                raise RuntimeError("Форма входа целевой Jira не загрузилась")
            return
        login, password = self.ensure_credentials("dest_jira")
        self.fill(DJ["login"], login)
        self.fill(DJ["password"], password)
        self.page.locator(DJ["login_button"]).click()
        try:
            username.wait_for(state="detached", timeout=30_000)
        except PlaywrightTimeoutError as error:
            message = self.text_or_empty(DJ["login_error"])
            raise RuntimeError(message or "Целевая Jira не приняла логин или пароль") from error

    def select_project(self, project_name):
        project = self.page.get_by_role("combobox", name=DJ["project_combobox_name"])
        project.wait_for(state="visible")
        project.click()
        try:
            project.select_option(label=project_name, timeout=3_000)
        except Exception:
            project.fill(project_name)
            self.page.get_by_role("option", name=project_name, exact=True).click()

    def create_issue(self, data, issue_number, project_name):
        self.page.goto(CONFIG["dest_jira"]["create_issue_url"], wait_until="domcontentloaded")
        self.login_if_needed()
        self.select_project(project_name)
        self.page.locator(DJ["summary"]).wait_for(state="visible")
        if data.get("summary"):
            self.fill(DJ["summary"], f"{data['summary']} [{issue_number}]")
        if data.get("duedate"):
            self.fill(DJ["due_date"], convert_date(data["duedate"], "jira"))
        if data.get("description"):
            if self.page.locator(DJ["description_iframe"]).count():
                self.page.frame_locator(DJ["description_iframe"]).locator(DJ["description_iframe_body"]).fill(data["description"])
            elif self.page.locator(DJ["description"]).count():
                self.fill(DJ["description"], data["description"])
        if data.get("cf_15608"):
            self.select_by_text(DJ["custom_field_10402"], data["cf_15608"])
        if data.get("cf_22106"):
            self.select_by_text(DJ["custom_field_10403"], data["cf_22106"])


class RedmineDestPage(BasePage):
    def login_if_needed(self):
        if self.page.locator(RM["login"]).count() == 0:
            return
        self.fill(RM["login"], CONFIG["dest_redmine"]["user"])
        self.fill(RM["password"], CONFIG["dest_redmine"]["pass"])
        self.page.locator(RM["login_button"]).click()
        self.page.locator(RM["subject"]).wait_for(state="visible")

    def create_issue(self, data, issue_number):
        self.page.goto(CONFIG["dest_redmine"]["url"], wait_until="domcontentloaded")
        self.login_if_needed()
        if "issues/new" not in self.page.url:
            self.page.goto(CONFIG["dest_redmine"]["url"], wait_until="domcontentloaded")
        self.page.locator(RM["subject"]).wait_for(state="visible")
        if data.get("summary"):
            self.fill(RM["subject"], f"{data['summary']} [{issue_number}]")
        if data.get("duedate"):
            self.fill(RM["due_date"], convert_date(data["duedate"], "redmine"))
        if data.get("description"):
            self.fill(RM["description"], data["description"])
        if data.get("cf_15608"):
            self.select_by_text(RM["custom_field_10402"], data["cf_15608"])
        if data.get("cf_22106"):
            self.select_by_text(RM["custom_field_10403"], data["cf_22106"])


@contextmanager
def get_browser_page(headless=False):
    """Запускает Chromium и корректно освобождает ресурсы Playwright."""
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=headless, args=["--start-maximized"])
        context = browser.new_context(no_viewport=True, ignore_https_errors=True)
        page = context.new_page()
        page.set_default_timeout(DEFAULT_TIMEOUT_MS)
        try:
            yield page
        finally:
            context.close()
            browser.close()


get_chrome_driver = get_browser_page


def main():
    if not all((CONFIG["src_jira"]["user"], CONFIG["src_jira"]["pass"])):
        print("[ОШИБКА] Проверьте SOURCE_LOGIN и SOURCE_PASSWORD в .env")
        sys.exit(1)


if __name__ == "__main__":
    main()
