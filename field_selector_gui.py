"""Standalone browser field selector. Run: python field_selector_gui.py."""
import json
import threading
import tkinter as tk
from datetime import datetime, timezone
from pathlib import Path
from queue import Queue, Empty
from tkinter import ttk, filedialog, messagebox
from urllib.parse import urlsplit

from auth_logging import LOG_FILE
from error_logging import error_logger
from field_picker import PICKER_SCRIPT, SOURCE_STAGE, wait_picker
from jrf import get_browser_page, JiraSourcePage, JiraDestPage, RedmineDestPage
from settings import CONFIG
from clipboard_support import install_clipboard


def origin(url):
    parsed = urlsplit(url)
    return parsed.scheme.lower(), parsed.hostname, parsed.port or (443 if parsed.scheme == 'https' else 80)


def open_with_login(page, url):
    """Use credentials only on the exact configured origin."""
    system = next((key for key in ('src_jira', 'dest_jira', 'dest_redmine')
                   if origin(url) == origin(CONFIG[key]['url'])), None)
    if system is None:
        page.goto(url, wait_until='domcontentloaded')
        return 'Для этого сайта автовход не настроен. Войдите вручную.'
    entry = CONFIG[system]['dashboard'] if system == 'dest_jira' else CONFIG[system]['url'] if system == 'dest_redmine' else url
    page.goto(entry, wait_until='domcontentloaded')
    if origin(page.url) != origin(CONFIG[system]['url']):
        return 'Страница перенаправлена на другой сайт. Выполните вход вручную.'
    if not CONFIG[system].get('user') or not CONFIG[system].get('pass'):
        return 'В .env отсутствуют логин или пароль для этой системы. Выполните вход вручную.'
    adapter = {'src_jira': JiraSourcePage, 'dest_jira': JiraDestPage, 'dest_redmine': RedmineDestPage}[system]
    try:
        adapter(page).login_if_needed()
    except Exception:
        error_logger.exception('Автовход при выборе полей: %s', system)
        return 'Автовход не завершён. Войдите вручную; подробности в logs/errors.log.'
    if page.url != url:
        page.goto(url, wait_until='domcontentloaded')
    return 'Автовход выполнен. Страница открыта для выбора полей.'


def save_selection(path, url, fields):
    payload = {
        'version': 1,
        'url': url,
        'saved_at': datetime.now(timezone.utc).isoformat(),
        'fields': [{'label': f['label'], 'selector': f['selector']} for f in fields],
    }
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
    temporary.replace(path)


class FieldSelectorWindow(tk.Toplevel):
    def __init__(self, parent):
        super().__init__(parent)
        self.title('Выбор полей в браузере')
        self.geometry('740x300')
        self.events = Queue()
        self.start_selection = threading.Event()
        self.cancel = threading.Event()
        self.url = tk.StringVar(value='https://jira.mos.social/browse/KISEMIAS2019-21469')
        self.status = tk.StringVar(value='Укажите страницу и откройте браузер.')
        frame = ttk.Frame(self, padding=16)
        frame.pack(fill='both', expand=True)
        ttk.Label(frame, text='Адрес страницы:').pack(anchor='w')
        ttk.Entry(frame, textvariable=self.url).pack(fill='x', pady=8)
        self.open_button = ttk.Button(frame, text='Открыть браузер', command=self.open_browser)
        self.open_button.pack(anchor='w')
        def open_mapping():
            from unified_mapping_gui import UnifiedMappingWindow
            UnifiedMappingWindow(self)
        ttk.Button(frame, text='Сопоставить файлы Jira → Jira / Redmine', command=open_mapping).pack(anchor='w', pady=4)
        self.pick_button = ttk.Button(frame, text='Начать выбор полей', command=self.select, state='disabled')
        self.pick_button.pack(anchor='w', pady=8)
        ttk.Label(frame, text='Вход в Jira и Redmine выполняется автоматически из .env.\nПосле открытия страницы нажмите «Начать выбор полей».').pack(anchor='w')
        ttk.Label(frame, textvariable=self.status, wraplength=690).pack(anchor='w', pady=12)
        self.protocol('WM_DELETE_WINDOW', self.close)
        self.after(100, self.poll)
        install_clipboard(self)

    def open_browser(self):
        url = self.url.get().strip()
        if urlsplit(url).scheme not in ('http', 'https') or not urlsplit(url).hostname:
            messagebox.showerror('Адрес страницы', 'Введите полный адрес http:// или https://', parent=self)
            return
        filename = filedialog.asksaveasfilename(
            parent=self, title='Куда сохранить поля', defaultextension='.json',
            initialdir=str(LOG_FILE.parent.parent), initialfile='selected_fields.json',
            filetypes=[('JSON', '*.json')],
        )
        if not filename:
            return
        self.open_button.config(state='disabled')
        self.start_selection.clear()
        self.cancel.clear()
        self.status.set('Открывается браузер…')
        def worker():
            try:
                with get_browser_page() as page:
                    status = open_with_login(page, url)
                    self.events.put(('ready', status))
                    while not self.start_selection.is_set():
                        if self.cancel.is_set() or page.is_closed():
                            self.events.put(('done', 'Браузер закрыт. Файл не изменён.'))
                            return
                        page.wait_for_timeout(200)
                    if self.cancel.is_set():
                        return
                    page.evaluate(PICKER_SCRIPT, [])
                    page.evaluate(SOURCE_STAGE)
                    page.evaluate("""() => {
                        const p=document.querySelector('#migration-field-picker');
                        p.querySelector('b').textContent='Выбор полей';
                        p.querySelector('[data-save]').textContent='Сохранить в файл';
                    }""")
                    # Pump Playwright events while allowing the window to cancel.
                    while not page.is_closed() and not self.cancel.is_set():
                        state = page.evaluate('window.__migrationPicker')
                        if not state:
                            raise RuntimeError('Страница обновилась во время выбора. Откройте её и повторите выбор.')
                        if state['done']:
                            if not state['cancelled']:
                                save_selection(Path(filename), page.url, state['fields'])
                                self.events.put(('done', f"Сохранено полей: {len(state['fields'])}. Файл: {filename}"))
                            else:
                                self.events.put(('done', 'Выбор отменён. Файл не изменён.'))
                            return
                        page.wait_for_timeout(200)
                    self.events.put(('done', 'Браузер закрыт. Файл не изменён.'))
            except Exception:
                error_logger.exception('Ошибка отдельного выбора полей')
                self.events.put(('done', 'Не удалось завершить выбор. Подробности в logs/errors.log.'))
        threading.Thread(target=worker, daemon=True).start()

    def select(self):
        self.pick_button.config(state='disabled')
        self.status.set('Выбирайте значения на странице и добавляйте их в список. Затем нажмите «Сохранить в файл».')
        self.start_selection.set()

    def poll(self):
        try:
            kind, text = self.events.get_nowait()
            if kind == 'ready':
                self.pick_button.config(state='normal')
                self.status.set(text)
            else:
                self.status.set(text)
                self.open_button.config(state='normal')
                self.pick_button.config(state='disabled')
        except Empty:
            pass
        self.after(100, self.poll)

    def close(self):
        self.cancel.set()
        self.destroy()


def main():
    root = tk.Tk()
    root.withdraw()
    window = FieldSelectorWindow(root)
    root.wait_window(window)
    root.destroy()


if __name__ == '__main__':
    main()
