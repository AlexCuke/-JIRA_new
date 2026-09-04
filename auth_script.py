from playwright.sync_api import Page, TimeoutError as PlaywrightTimeoutError

from jrf import get_browser_page
from settings import CONFIG
from playwright_selectors import LOGIN_SELECTORS, SOURCE_JIRA


def login_to_jira(page: Page, target_url, username, password, selectors, wait_timeout=15):
    """Авторизуется в Jira, если на странице есть форма входа."""
    page.set_default_timeout(wait_timeout * 1_000)
    page.goto(target_url, wait_until="domcontentloaded")
    user_field = page.locator(selectors["user"])
    if user_field.count() == 0:
        return True
    if not username or not password:
        print("[ОШИБКА] Не заданы логин или пароль.")
        return False
    try:
        user_field.fill(username)
        page.locator(selectors["password"]).fill(password)
        page.locator(selectors["button"]).click()
        user_field.wait_for(state="detached")
        if page.locator(SOURCE_JIRA["login_error"]).count():
            print(f"[ОШИБКА АВТОРИЗАЦИИ] Проверьте логин и пароль для {target_url}")
            return False
        return True
    except PlaywrightTimeoutError as error:
        print(f"[ОШИБКА АВТОРИЗАЦИИ] {error}")
        return False


get_chrome_driver = get_browser_page


def main():
    credentials = CONFIG["src_jira"]
    with get_browser_page() as page:
        success = login_to_jira(page, credentials["login_url"], credentials["user"], credentials["pass"], LOGIN_SELECTORS["src_jira"])
        print("Авторизация выполнена." if success else "Авторизация не выполнена.")
        input("Нажмите Enter, чтобы закрыть браузер...")


if __name__ == "__main__":
    main()
