import sys
from contextlib import contextmanager
from datetime import datetime

from playwright.sync_api import Locator, Page, TimeoutError as PlaywrightTimeoutError, sync_playwright
from field_mappings import FIELD_MAPPINGS, map_field_value
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
        source = lambda field: SJ[FIELD_MAPPINGS[field]["source_jira"]]
        description = self.text_or_empty(source("description"))
        raw_date = self.text_or_empty(source("duedate")) or self.attribute_or_empty(source("duedate"), "datetime")
        if not raw_date:
            aria = self.attribute_or_empty(SJ["due_date_by_label"], "aria-label")
            raw_date = aria.split(":", 1)[0].strip() if aria else ""
        return {
            "summary": self.text_or_empty(source("summary")),
            "description": f"{description}\n\nСсылка на Московскую Jira - {url}",
            "duedate": raw_date,
            "cf_15608": self.text_or_empty(source("cf_15608")),
            "cf_22106": self.text_or_empty(source("cf_22106")),
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
            project.fill(project_name)
        except Exception:
            project.press("Control+A")
            project.press_sequentially(project_name)

        option = self.page.get_by_role("option", name=project_name, exact=True)
        try:
            option.wait_for(state="visible", timeout=10_000)
            option.click()
        except PlaywrightTimeoutError:
            # В старых версиях Jira пункты Select2 не имеют роли option.
            self.page.get_by_text(project_name, exact=True).last.click(timeout=10_000)

        # Поле должно содержать выбранное значение, иначе не продолжаем с неверным проектом.
        selected = project.input_value(timeout=5_000).strip()
        if project_name.casefold() not in selected.casefold():
            raise RuntimeError(
                f"Целевая Jira не выбрала проект '{project_name}'. "
                f"В поле осталось: '{selected}'"
            )

    def create_issue(self, data, issue_number, project_name):
        self.page.goto(CONFIG["dest_jira"]["create_issue_url"], wait_until="domcontentloaded")
        self.login_if_needed()
        self.select_project(project_name)
        target = lambda field: DJ[FIELD_MAPPINGS[field]["target_jira"]]
        self.page.locator(target("summary")).wait_for(state="visible")
        if data.get("summary"):
            summary = map_field_value("summary", "target_jira", data["summary"])
            self.fill(target("summary"), f"{summary} [{issue_number}]")
        if data.get("duedate"):
            due_date = map_field_value("duedate", "target_jira", data["duedate"])
            self.fill(target("duedate"), convert_date(due_date, "jira"))
        if data.get("description"):
            description = map_field_value("description", "target_jira", data["description"])
            if self.page.locator(DJ["description_iframe"]).count():
                self.page.frame_locator(DJ["description_iframe"]).locator(DJ["description_iframe_body"]).fill(description)
            elif self.page.locator(target("description")).count():
                self.fill(target("description"), description)
        if data.get("cf_15608"):
            self.select_by_text(target("cf_15608"), map_field_value("cf_15608", "target_jira", data["cf_15608"]))
        if data.get("cf_22106"):
            self.select_by_text(target("cf_22106"), map_field_value("cf_22106", "target_jira", data["cf_22106"]))


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
        target = lambda field: RM[FIELD_MAPPINGS[field]["redmine"]]
        self.page.locator(target("summary")).wait_for(state="visible")
        if data.get("summary"):
            summary = map_field_value("summary", "redmine", data["summary"])
            self.fill(target("summary"), f"{summary} [{issue_number}]")
        if data.get("duedate"):
            due_date = map_field_value("duedate", "redmine", data["duedate"])
            self.fill(target("duedate"), convert_date(due_date, "redmine"))
        if data.get("description"):
            self.fill(target("description"), map_field_value("description", "redmine", data["description"]))
        if data.get("cf_15608"):
            self.select_by_text(target("cf_15608"), map_field_value("cf_15608", "redmine", data["cf_15608"]))
        if data.get("cf_22106"):
            self.select_by_text(target("cf_22106"), map_field_value("cf_22106", "redmine", data["cf_22106"]))


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
