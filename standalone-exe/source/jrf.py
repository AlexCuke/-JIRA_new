import sys
from html import escape
from contextlib import contextmanager
from datetime import datetime
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import re

from playwright.sync_api import Error as PlaywrightError, Locator, Page, TimeoutError as PlaywrightTimeoutError, sync_playwright
from auth_logging import login_logger
from field_mappings import FIELD_MAPPINGS, map_field_value
from settings import AVAILABLE_PREFIXES, CONFIG, DEFAULT_ASSIGNEE, DEFAULT_PREFIX, DEFAULT_TIMEOUT_MS, NAVIGATION_TIMEOUT_MS
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

    def set_person_if_present(
        self, label: str, selectors: tuple[str, ...], person: str = DEFAULT_ASSIGNEE,
    ) -> bool:
        """Устанавливает пользователя в поле формы, если такое поле существует."""
        field = None
        candidates = [self.page.locator(selector).first for selector in selectors]
        candidates.append(self.page.get_by_label(label, exact=True).first)
        for candidate in candidates:
            try:
                if candidate.count() and candidate.is_visible():
                    field = candidate
                    break
            except Exception:
                continue
        if field is None:
            return False
        try:
            if field.evaluate("el => el.tagName.toLowerCase()") == "select":
                field.select_option(label=person)
                return True
            field.fill(person)
            option = self.page.get_by_role(
                "option", name=person, exact=True
            ).filter(visible=True).first
            try:
                option.wait_for(state="visible", timeout=3_000)
                option.click()
            except PlaywrightTimeoutError:
                self.page.get_by_text(person, exact=True).filter(visible=True).last.click(timeout=3_000)
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
    def open_issue(self, project_prefix, issue_number):
        url = f"{CONFIG['src_jira']['url']}/browse/{project_prefix}{issue_number}"
        try:
            try:
                self.page.goto(url, wait_until='domcontentloaded', timeout=NAVIGATION_TIMEOUT_MS)
            except PlaywrightTimeoutError as error:
                raise RuntimeError(
                    f"Исходная Jira не загрузилась за {NAVIGATION_TIMEOUT_MS // 1000} секунд. "
                    "Проверьте доступ к jira.mos.social через браузер и подключение к рабочей сети/VPN, "
                    "затем повторите операцию."
                ) from error
            self.login_if_needed()
            self.page.locator(SJ['summary']).wait_for(state='visible', timeout=NAVIGATION_TIMEOUT_MS)
        except PlaywrightError as error:
            if self.page.is_closed():
                raise RuntimeError(
                    "Окно Playwright было закрыто во время открытия исходной Jira-задачи. "
                    "Не закрывайте окно браузера до завершения операции."
                ) from error
            if isinstance(error, PlaywrightTimeoutError):
                raise RuntimeError(self.issue_load_error()) from error
            raise
        return url

    def login_if_needed(self):
        system = "source_jira"
        login_logger.info("system=%s event=login_check url=%s", system, self.page.url)
        if not self.wait_for_login_form(SJ["login"], SJ["summary"]):
            if "/login" in self.page.url.lower():
                login_logger.error("system=%s event=login_form_missing url=%s", system, self.page.url)
                raise RuntimeError("Страница входа Jira открылась, но поле логина #username-field не найдено")
            login_logger.info("system=%s event=session_active url=%s", system, self.page.url)
            return
        try:
            login, password = self.ensure_credentials("src_jira")
        except RuntimeError:
            login_logger.error("system=%s event=credentials_missing", system)
            raise
        login_logger.info("system=%s event=login_submit url=%s", system, self.page.url)
        login_field = self.page.locator(SJ["login"]).first
        password_field = self.page.locator(SJ["password"]).first
        login_field.wait_for(state="visible", timeout=10_000)
        password_field.wait_for(state="visible", timeout=10_000)
        login_field.fill(login)
        password_field.fill(password)
        # Jira may rebuild the form after filling the login. Verify the password
        # is in the active input before submitting; never write it to the log.
        if password_field.input_value() != password:
            password_field.click()
            password_field.press("Control+A")
            password_field.press_sequentially(password)
        if password_field.input_value() != password:
            login_logger.error("system=%s event=password_not_filled url=%s", system, self.page.url)
            raise RuntimeError("Не удалось заполнить поле пароля исходной Jira")
        login_logger.info("system=%s event=password_filled url=%s", system, self.page.url)
        self.page.locator(SJ["login_button"]).first.click()
        try:
            # Disappearance of a form is not proof of authentication: Jira can
            # redraw it after a failed submission. The requested issue must load.
            self.page.locator(SJ["summary"]).first.wait_for(state="visible", timeout=NAVIGATION_TIMEOUT_MS)
        except PlaywrightError as error:
            if self.page.is_closed():
                raise RuntimeError(
                    "Окно Playwright было закрыто во время входа в исходную Jira. "
                    "Не закрывайте окно браузера до завершения операции."
                ) from error
            message = self.issue_load_error()
            login_logger.error("system=%s event=issue_load_failed url=%s reason=%s", system, self.page.url, message)
            raise RuntimeError(message) from error
        login_logger.info("system=%s event=login_success url=%s", system, self.page.url)

    def issue_load_error(self):
        """Distinguish unavailable issues from rejected credentials."""
        current_url = self.page.url
        message = self.text_or_empty(SJ["login_error"])
        if "/login" in urlparse(current_url).path.lower():
            return message or (
                "Jira осталась на странице входа. Проверьте сообщение на странице, "
                "учётные данные и необходимость CAPTCHA."
            )
        match = re.search(r"/browse/([A-Za-z][A-Za-z0-9_]*-\d+)", current_url)
        if match:
            key = match.group(1)
            try:
                response = self.page.context.request.get(
                    f"{CONFIG['src_jira']['url'].rstrip('/')}/rest/api/2/issue/{key}",
                    params={"fields": "summary"}, timeout=10_000,
                )
                status = response.status
                if status in (403, 404):
                    return (f"Задача {key} не найдена или недоступна (HTTP {status}). "
                            "Проверьте полный ключ и исходный проект (KISEMIAS2019 / KISEMIAS2025), "
                            "а также права на просмотр задачи.")
                if status == 401:
                    return "Jira требует авторизацию для чтения задачи. Проверьте вход в браузере."
                if status == 200:
                    return (f"Задача {key} доступна через API, но её содержимое не появилось "
                            f"на странице за {NAVIGATION_TIMEOUT_MS // 1000} секунд. "
                            "Повторите операцию; возможно, страница загружается медленно или её разметка изменилась.")
            except PlaywrightError:
                pass
        return message or (
            f"Содержимое исходной задачи не появилось за {NAVIGATION_TIMEOUT_MS // 1000} секунд. "
            "Проверьте доступность Jira, ключ задачи и права просмотра. "
            "По этой ошибке нельзя определить, неверен ли пароль."
        )

    def parse_issue(self, project_prefix, issue_number):
        url = self.open_issue(project_prefix, issue_number)
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

    def collect_comments(self):
        """Возвращает все комментарии задачи с автором, датой и HTML."""
        # REST API надёжнее ленивого блока «Активность» и возвращает все
        # комментарии, а не только видимые на экране.
        parsed_url = urlparse(self.page.url)
        issue_key = parsed_url.path.rstrip("/").split("/")[-1]
        if issue_key:
            try:
                api_url = f"{parsed_url.scheme}://{parsed_url.netloc}/rest/api/2/issue/{issue_key}/comment?maxResults=1000"
                response = self.page.context.request.get(api_url)
                if response.ok:
                    payload = response.json()
                    result = []
                    for comment in payload.get("comments", []):
                        text = str(comment.get("body") or "").strip()
                        if text:
                            result.append({
                                "text": text,
                                "html": escape(text).replace("\n", "<br>"),
                                "author": str(comment.get("author", {}).get("displayName") or "").strip(),
                                "date": str(comment.get("created") or "").strip(),
                            })
                    return result
            except Exception:
                pass
        # В этой версии Jira история грузится только после раскрытия блока
        # «Активность»; до этого в DOM есть лишь пустой placeholder.
        if self.page.locator("#activitymodule").count() and self.page.locator(".activity-comment").count() == 0:
            try:
                self.page.locator("#activitymodule-label").evaluate("element => element.click()")
                # The activity request is started by Jira after the click; its
                # placeholder is already in the DOM, so selector waiting is not
                # reliable here.
                self.page.wait_for_timeout(2_500)
            except Exception:
                pass
        comment_nodes = self.page.locator("#issue_actions .activity-comment")
        if comment_nodes.count() == 0:
            comment_nodes = self.page.locator("#activitymodule .activity-comment")
        if comment_nodes.count() == 0:
            # Старые темы Jira могут не иметь класса activity-comment.
            comment_nodes = self.page.locator("#issue_actions .action.comment")
        try:
            comments = comment_nodes.evaluate_all("""nodes => nodes.map(node => {
                const body = node.querySelector('.action-body');
                const author = node.querySelector('.user-avatar, .action-details .user-hover');
                const date = node.querySelector('time, .action-details time');
                return {
                    html: body ? body.innerHTML.trim() : '',
                    text: body ? body.innerText.trim() : '',
                    author: (author?.getAttribute('data-username') || author?.textContent || '').trim(),
                    date: (date?.getAttribute('datetime') || date?.textContent || '').trim()
                };
            }).filter(comment => comment.text);""")
        except Exception:
            return []
        return comments

    def download_attachments(self, destination: Path):
        """Скачивает все файлы задачи с авторизованной сессией Playwright."""
        destination.mkdir(parents=True, exist_ok=True)
        links = self.page.locator(SJ["attachment_links"])
        attachment_data = links.evaluate_all(
            "nodes => nodes.map(node => ({href: node.href, name: node.textContent.trim()}))"
        ) if links.count() else []
        downloaded = []
        used_names = set()
        for item in attachment_data:
            url = item.get("href", "")
            if not url:
                continue
            try:
                response = self.page.context.request.get(urljoin(self.page.url, url))
                if not response.ok:
                    continue
                raw_name = item.get("name") or unquote(Path(urlparse(url).path).name) or "attachment"
                name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", raw_name).strip(" .") or "attachment"
                candidate = name
                number = 2
                while candidate.casefold() in used_names or (destination / candidate).exists():
                    stem, suffix = Path(name).stem, Path(name).suffix
                    candidate = f"{stem} ({number}){suffix}"
                    number += 1
                used_names.add(candidate.casefold())
                path = destination / candidate
                path.write_bytes(response.body())
                downloaded.append(path)
            except Exception:
                continue
        return downloaded

    def download_linked_pages(self, destination: Path) -> list[Path]:
        """Сохраняет веб-страницы, на которые ссылается описание, в формате MHTML."""
        destination.mkdir(parents=True, exist_ok=True)
        description = self.page.locator(SJ["description"]).first
        if not description.count():
            return []
        links = description.evaluate(
            """element => {
                const anchors = [...element.querySelectorAll('a[href]')]
                    .map(link => link.href)
                    .filter(href => /^https?:/i.test(href));
                const textUrls = element.innerText.match(/https?:\\/\\/[^\\s<>"']+/gi) || [];
                return [...anchors, ...textUrls];
            }"""
        )
        unique_links = list(dict.fromkeys(str(link).strip() for link in links if str(link).strip()))
        saved = []
        for index, url in enumerate(unique_links, start=1):
            linked_page = self.page.context.new_page()
            try:
                linked_page.goto(url, wait_until="domcontentloaded", timeout=30_000)
                cdp = self.page.context.new_cdp_session(linked_page)
                snapshot = cdp.send("Page.captureSnapshot", {"format": "mhtml"})
                host = re.sub(r"[^A-Za-z0-9._-]", "_", urlparse(url).netloc) or "page"
                path = destination / f"web-page-{index:02d}-{host}.mhtml"
                path.write_text(snapshot["data"], encoding="utf-8")
                saved.append(path)
            except Exception as error:
                login_logger.warning("system=source_jira event=linked_page_not_saved url=%s reason=%s", url, error)
            finally:
                linked_page.close()
        return saved


def append_comments_to_target(page: Page, target_system: str, comments: list[dict]):
    """Добавляет собранные комментарии к описанию новой задачи без создания её."""
    if not comments:
        return
    html_parts = ["<hr><h3>Комментарии из глобальной JIRA</h3>"]
    text_parts = ["\n\nКомментарии из глобальной JIRA"]
    for comment in comments:
        author = escape(comment.get("author") or "Не указан")
        date = escape(comment.get("date") or "Дата не указана")
        body_html = comment.get("html") or escape(comment.get("text") or "")
        body_text = comment.get("text") or ""
        html_parts.append(f"<p><b>{author}</b> — {date}</p><div>{body_html}</div>")
        text_parts.append(f"\n{comment.get('author') or 'Не указан'} — {comment.get('date') or 'Дата не указана'}\n{body_text}")
    comments_html = "".join(html_parts)
    comments_text = "".join(text_parts)
    if target_system == "jira" and page.locator("#mce_0_ifr").count():
        body = page.frame_locator("#mce_0_ifr").locator("#tinymce")
        body.evaluate(
            """(element, html) => {
                element.insertAdjacentHTML('beforeend', html);
                element.dispatchEvent(new InputEvent('input', {bubbles: true}));
                element.dispatchEvent(new Event('change', {bubbles: true}));
            }""",
            comments_html,
        )
        return
    selector = "#description" if target_system == "jira" else "#issue_description"
    description = page.locator(selector).first
    description.fill(description.input_value().rstrip() + comments_text)


def comments_to_plain_text(comments: list[dict]) -> str:
    """Формат для отдельного копирования комментариев в буфер обмена."""
    if not comments:
        return ""
    blocks = ["Комментарии из глобальной JIRA"]
    for comment in comments:
        blocks.append(
            f"{comment.get('author') or 'Не указан'} — {comment.get('date') or 'Дата не указана'}\n"
            f"{comment.get('text') or ''}"
        )
    return "\n\n".join(blocks)


def upload_attachments_to_target(page: Page, target_system: str, attachments: list[Path]):
    """Прикрепляет скачанные файлы к ещё не сохранённой форме Jira или Redmine."""
    if not attachments:
        return 0
    selector = DJ["attachment_input"] if target_system == "jira" else RM["attachment_input"]
    inputs = page.locator(selector)
    if inputs.count() == 0 and target_system == "jira":
        # В просмотре уже созданной задачи input появляется после открытия
        # диалога прикрепления файла.
        trigger = page.locator("#attach-file, #attachmentmodule [data-operation='attach'], #attachmentmodule a[href*='attach']").first
        try:
            if trigger.is_visible():
                trigger.click()
                page.wait_for_timeout(500)
                inputs = page.locator(selector)
        except Exception:
            pass
    if inputs.count() == 0:
        return 0
    file_input = inputs.first
    paths = [str(path) for path in attachments]
    try:
        file_input.set_input_files(paths)
        return len(paths)
    except Exception:
        # Формы без атрибута multiple иногда создают новый input после выбора файла.
        uploaded = 0
        for path in paths:
            try:
                current_inputs = page.locator(selector)
                current_inputs.last.set_input_files(path)
                uploaded += 1
            except Exception:
                continue
        return uploaded


class JiraDestPage(BasePage):
    def open_existing_issue(self, issue_key: str):
        """Открывает уже созданную задачу, чтобы прикрепить к ней файлы."""
        self.page.goto(CONFIG["dest_jira"]["dashboard"], wait_until="domcontentloaded")
        self.login_if_needed()
        key = issue_key.strip().upper()
        self.page.goto(f"{CONFIG['dest_jira']['url'].rstrip('/')}/browse/{key}", wait_until="domcontentloaded")
        self.page.wait_for_timeout(500)
        if "login" in self.page.url.lower():
            raise RuntimeError(f"Не удалось открыть целевую Jira-задачу {key}: требуется вход")

    def set_issue_status(self, issue_key: str, desired_status: str) -> str:
        """Переводит существующую Jira-задачу через доступный workflow-переход."""
        key = (issue_key or "").strip().upper()
        if not re.fullmatch(r"[A-Z][A-Z0-9_]*-\d+", key):
            raise ValueError("Укажите ключ целевой Jira-задачи, например KIS-1383.")
        self.open_existing_issue(key)
        base_url = CONFIG["dest_jira"]["url"].rstrip("/")
        def normalized(value):
            return re.sub(r"\s+", " ", str(value).strip().lower())

        def get_current_status():
            response = self.page.context.request.get(
                f"{base_url}/rest/api/2/issue/{key}", params={"fields": "status"}
            )
            if not response.ok:
                raise RuntimeError(f"Не удалось прочитать текущий статус {key}: HTTP {response.status}.")
            return str((response.json().get("fields", {}).get("status") or {}).get("name") or "")

        def get_transitions():
            response = self.page.context.request.get(f"{base_url}/rest/api/2/issue/{key}/transitions")
            if not response.ok:
                raise RuntimeError(
                    f"Не удалось получить доступные переходы Jira для {key}: HTTP {response.status}."
                )
            return response.json().get("transitions", [])

        def perform(transition):
            # Execute from the open Jira page rather than APIRequestContext.
            # This Jira installation validates the browser XSRF session on
            # workflow transitions and rejects an otherwise authenticated API call.
            response = self.page.evaluate(
                """async ({url, transitionId}) => {
                    const result = await fetch(url, {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Atlassian-Token': 'no-check'
                        },
                        body: JSON.stringify({transition: {id: transitionId}})
                    });
                    return {ok: result.ok, status: result.status, text: await result.text()};
                }""",
                {"url": f"{base_url}/rest/api/2/issue/{key}/transitions", "transitionId": transition["id"]},
            )
            if not response["ok"]:
                details = response["text"].strip()
                raise RuntimeError(
                    f"Jira не выполнила переход «{transition.get('name')}» для {key}: "
                    f"HTTP {response['status']}{(': ' + details) if details else ''}"
                )

        desired = normalized(desired_status)
        current_status = get_current_status()
        if normalized(current_status) == desired:
            return current_status

        # The local Jira exposes workflow *transition* names, not the names
        # of status columns. To close an open issue, first move it to
        # «Взята в анализ», then follow its actual transition sequence.
        close_steps = (
            ("Взята в анализ",),
            ("Отправить в разработку",),
            ("Тестирование",),
            ("Решить задачу",),
            ("Закрыть задачу", "Закрыть"),
        )
        steps = close_steps if desired == "закрыт" else ((desired_status,),)
        completed = []
        for step_names in steps:
            current_status = get_current_status()
            if desired == "закрыт" and "закры" in normalized(current_status):
                break
            transitions = get_transitions()
            accepted_names = {normalized(name) for name in step_names}
            candidates = [item for item in transitions if normalized(item.get("name")) in accepted_names]
            if not candidates and desired != "закрыт":
                available = ", ".join(str(item.get("name", "")) for item in transitions) or "нет"
                raise RuntimeError(
                    f"Для {key} недоступен переход «{desired_status}». Доступные переходы: {available}."
                )
            # When the task is already further in the workflow, the earlier
            # transition is absent. Continue to the next available step.
            if not candidates:
                continue
            perform(candidates[0])
            completed.append(str(candidates[0].get("name", step_names[0])))
        final_status = get_current_status()
        if desired == "закрыт" and "закры" not in normalized(final_status):
            raise RuntimeError(
                f"Цепочка переходов выполнена не полностью. Текущий статус {key}: {final_status}. "
                f"Выполнено: {', '.join(completed) or 'нет'}."
            )
        return final_status or desired_status

    def set_existing_issue_assignee(self, issue_key: str, assignee_name: str):
        """Открывает форму редактирования существующей Jira-задачи и сохраняет исполнителя."""
        key = (issue_key or "").strip().upper()
        if not re.fullmatch(r"[A-Z][A-Z0-9_]*-\d+", key):
            raise ValueError("Укажите ключ целевой Jira-задачи, например KIS-1383.")
        if not assignee_name.strip():
            raise ValueError("Не выбран исполнитель.")
        self.open_existing_issue(key)
        base_url = CONFIG["dest_jira"]["url"].rstrip("/")
        issue_response = self.page.context.request.get(
            f"{base_url}/rest/api/2/issue/{key}", params={"fields": "id"}
        )
        if not issue_response.ok:
            raise RuntimeError(f"Не удалось получить идентификатор Jira-задачи {key}: HTTP {issue_response.status}.")
        issue_id = str(issue_response.json().get("id", ""))
        if not issue_id:
            raise RuntimeError(f"Jira не вернула идентификатор задачи {key}.")
        self.page.goto(
            f"{base_url}/secure/EditIssue!default.jspa?id={issue_id}", wait_until="domcontentloaded"
        )
        assignee = self.page.locator(DJ["assignee"]).first
        assignee.wait_for(state="visible", timeout=15_000)
        if not self.set_person_if_present("Исполнитель", (DJ["assignee"],), assignee_name):
            raise RuntimeError(f"Не удалось выбрать исполнителя «{assignee_name}» в форме Jira.")
        save_button = self.page.locator(
            "#edit-issue-submit, input[type='submit'][value='Обновить'], input[type='submit'][value='Update']"
        ).first
        save_button.wait_for(state="visible", timeout=10_000)
        save_button.click()
        self.page.wait_for_timeout(500)
        login_logger.info("system=destination_jira event=existing_assignee_set issue=%s name=%s", key, assignee_name)

    def set_selected_developer(self, developer: str, copy_to_assignee: bool):
        if not developer:
            return
        if self.set_person_if_present("Разработчик", ("#developer-field",), developer):
            login_logger.info("system=destination_jira event=developer_set name=%s", developer)
        else:
            login_logger.warning("system=destination_jira event=developer_not_set")
        if copy_to_assignee:
            if self.set_person_if_present("Исполнитель", (DJ["assignee"],), developer):
                login_logger.info("system=destination_jira event=assignee_set_from_developer name=%s", developer)
            else:
                login_logger.warning("system=destination_jira event=assignee_not_set_from_developer")

    def set_default_assignee(self):
        """Выбирает исполнителя в AUI/Select2-поле старой Jira."""
        if not DEFAULT_ASSIGNEE:
            return
        try:
            assignee = self.page.locator(DJ["assignee"]).first
            assignee.wait_for(state="visible", timeout=5_000)
            if assignee.evaluate("el => el.tagName.toLowerCase()") == "select":
                assignee.select_option(label=DEFAULT_ASSIGNEE)
            else:
                assignee.fill(DEFAULT_ASSIGNEE)
                option = self.page.get_by_role(
                    "option", name=DEFAULT_ASSIGNEE, exact=True
                ).filter(visible=True).first
                try:
                    option.wait_for(state="visible", timeout=3_000)
                    option.click()
                except PlaywrightTimeoutError:
                    # В некоторых версиях Jira Select2 не назначает роль option.
                    self.page.get_by_text(DEFAULT_ASSIGNEE, exact=True).filter(visible=True).last.click(timeout=3_000)
            login_logger.info("system=destination_jira event=assignee_set name=%s", DEFAULT_ASSIGNEE)
        except Exception:
            # Неназначаемый исполнитель не должен останавливать перенос задачи.
            from error_logging import error_logger
            error_logger.exception("Не удалось автоматически назначить исполнителя '%s'", DEFAULT_ASSIGNEE)
            login_logger.warning("system=destination_jira event=assignee_not_set")

    def set_default_people(self):
        """Заполняет дополнительные поля роли, когда они выведены в форме Jira."""
        for label, selectors in (
            ("Ответственный", ("#responsible-field",)),
            ("Тестировщик", (DJ["tester"],)),
        ):
            if self.set_person_if_present(label, selectors):
                login_logger.info("system=destination_jira event=person_field_set field=%s name=%s", label, DEFAULT_ASSIGNEE)

    def login_if_needed(self):
        system = "destination_jira"
        login_logger.info("system=%s event=login_check url=%s", system, self.page.url)
        username = self.page.locator(DJ["login"])
        if not self.wait_for_login_form(DJ["login"], DJ["create_button"]):
            if "login" in self.page.url.lower():
                login_logger.error("system=%s event=login_form_missing url=%s", system, self.page.url)
                raise RuntimeError("Форма входа целевой Jira не загрузилась")
            login_logger.error("system=%s event=authentication_state_unknown url=%s", system, self.page.url)
            raise RuntimeError("Целевая Jira не показала ни форму входа, ни авторизованную панель")

        if not username.is_visible():
            login_logger.info("system=%s event=session_active url=%s", system, self.page.url)
            return
        try:
            login, password = self.ensure_credentials("dest_jira")
        except RuntimeError:
            login_logger.error("system=%s event=credentials_missing", system)
            raise
        login_logger.info("system=%s event=login_submit url=%s", system, self.page.url)
        self.fill(DJ["login"], login)
        self.fill(DJ["password"], password)
        self.page.locator(DJ["login_button"]).click()
        try:
            username.wait_for(state="detached", timeout=30_000)
        except PlaywrightTimeoutError as error:
            message = self.text_or_empty(DJ["login_error"])
            login_logger.error("system=%s event=login_failed url=%s reason=%s", system, self.page.url, message or "timeout")
            raise RuntimeError(message or "Целевая Jira не приняла логин или пароль") from error
        login_logger.info("system=%s event=login_success url=%s", system, self.page.url)

    def select_project(self, project_name):
        project = self.page.get_by_role("combobox", name=DJ["project_combobox_name"])
        project.wait_for(state="visible")
        project.click()
        try:
            project.fill(project_name)
        except Exception:
            project.press("Control+A")
            project.press_sequentially(project_name)

        # Один проект может присутствовать в группах «Недавние» и «Все».
        option = self.page.get_by_role("option", name=project_name, exact=True).filter(visible=True).first
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

    def create_issue(self, data, issue_number, project_name, issue_type=None):
        # Прямой CreateIssue URL не показывает форму входа анонимному пользователю.
        # Поэтому сначала авторизуемся через Dashboard, затем открываем форму.
        self.page.goto(CONFIG["dest_jira"]["dashboard"], wait_until="domcontentloaded")
        self.login_if_needed()
        login_logger.info("system=destination_jira event=open_create_issue url=%s", CONFIG["dest_jira"]["create_issue_url"])
        self.page.goto(CONFIG["dest_jira"]["create_issue_url"], wait_until="domcontentloaded")
        self.select_project(project_name)
        if issue_type:
            from field_picker import fill_mapped_fields
            self.issue_type_skipped = False
            try:
                fill_mapped_fields(self.page, [({'target_selector': '#issuetype-field'}, issue_type)])
            except Exception:
                from error_logging import error_logger
                error_logger.exception('Тип задачи не сопоставлен; сохранён исходный выбор формы')
                self.issue_type_skipped = True
        # Старая Jira сначала запрашивает проект и тип задачи.
        # «Далее» открывает поля; финальную кнопку создания не нажимаем.
        next_button = self.page.locator(DJ["next_button"])
        if next_button.is_visible():
            login_logger.info("system=destination_jira event=open_issue_fields")
            next_button.click()
        target = lambda field: DJ[FIELD_MAPPINGS[field]["target_jira"]]
        self.page.locator(target("summary")).wait_for(state="visible")
        self.set_default_people()
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
    def open_existing_issue(self, issue_reference: str):
        """Открывает форму редактирования существующей задачи Redmine."""
        match = re.search(r"(?:issues/)?(\d+)$", issue_reference.strip())
        if not match:
            raise RuntimeError("Для Redmine укажите номер задачи или ссылку вида .../issues/123")
        issue_id = match.group(1)
        base_url = CONFIG["dest_redmine"]["url"].split("/projects/", 1)[0].rstrip("/")
        edit_url = f"{base_url}/issues/{issue_id}/edit"
        self.page.goto(edit_url, wait_until="domcontentloaded")
        self.login_if_needed()
        if f"/issues/{issue_id}/edit" not in self.page.url:
            self.page.goto(edit_url, wait_until="domcontentloaded")
        self.page.locator(RM["subject"]).wait_for(state="visible", timeout=20_000)
    def set_selected_developer(self, developer: str, copy_to_assignee: bool):
        if not developer:
            return
        if self.set_person_if_present("Разработчик", ("#developer-field",), developer):
            login_logger.info("system=redmine event=developer_set name=%s", developer)
        else:
            login_logger.warning("system=redmine event=developer_not_set")
        if copy_to_assignee:
            if self.set_person_if_present("Исполнитель", (RM["assignee"],), developer):
                login_logger.info("system=redmine event=assignee_set_from_developer name=%s", developer)
            else:
                login_logger.warning("system=redmine event=assignee_not_set_from_developer")

    def set_default_assignee(self):
        if not DEFAULT_ASSIGNEE:
            return
        if self.select_by_text(RM["assignee"], DEFAULT_ASSIGNEE):
            login_logger.info("system=redmine event=assignee_set name=%s", DEFAULT_ASSIGNEE)
        else:
            login_logger.warning("system=redmine event=assignee_not_set")

    def set_default_requester(self):
        if self.set_person_if_present("Постановщик задачи", (RM["requester"],)):
            login_logger.info("system=redmine event=requester_set name=%s", DEFAULT_ASSIGNEE)

    def login_if_needed(self):
        system = "redmine"
        login_logger.info("system=%s event=login_check url=%s", system, self.page.url)
        if self.page.locator(RM["login"]).count() == 0:
            login_logger.info("system=%s event=session_active url=%s", system, self.page.url)
            return
        try:
            login, password = self.ensure_credentials("dest_redmine")
        except RuntimeError:
            login_logger.error("system=%s event=credentials_missing", system)
            raise
        login_logger.info("system=%s event=login_submit url=%s", system, self.page.url)
        try:
            self.fill(RM["login"], login)
            self.fill(RM["password"], password)
            self.page.locator(RM["login_button"]).click()
            self.page.locator(RM["subject"]).wait_for(state="visible")
        except PlaywrightTimeoutError:
            login_logger.error("system=%s event=login_failed url=%s reason=timeout", system, self.page.url)
            raise
        login_logger.info("system=%s event=login_success url=%s", system, self.page.url)

    def create_issue(self, data, issue_number):
        self.page.goto(CONFIG["dest_redmine"]["url"], wait_until="domcontentloaded")
        self.login_if_needed()
        if "issues/new" not in self.page.url:
            self.page.goto(CONFIG["dest_redmine"]["url"], wait_until="domcontentloaded")
        target = lambda field: RM[FIELD_MAPPINGS[field]["redmine"]]
        self.page.locator(target("summary")).wait_for(state="visible")
        self.set_default_requester()
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
        page.set_default_navigation_timeout(NAVIGATION_TIMEOUT_MS)
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
