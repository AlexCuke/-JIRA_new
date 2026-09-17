"""Settings and batch runner for existing issue synchronization."""
import threading
import tkinter as tk
from tkinter import ttk, messagebox

from task_sync import (ROUTES, available_fields, field_id, load_sync_settings,
                       save_sync_settings, read_pairs, sync_pair)
from google_sheets_export import load_settings
from error_logging import error_logger
from comment_sync import LAST_COMMENT_FIELD


def open_sync_settings(app, update_now=False):
    if update_now and str(app.run_btn['state']) == 'disabled':
        messagebox.showinfo('Синхронизация', 'Дождитесь завершения текущей операции.', parent=app)
        return
    try:
        saved = load_sync_settings()
        fields = {route: available_fields(route) for route in ROUTES}
    except Exception as error:
        messagebox.showerror('Синхронизация задач', str(error), parent=app)
        return
    window = tk.Toplevel(app)
    window.title('Обновить данные Jira(глобальная) -> Jira(внутр)/Redmine' if update_now
                 else 'Поля синхронизации Jira → локальная Jira / Redmine')
    window.transient(app)
    window.geometry('760x560')
    ttk.Label(window, text='Отметьте поля, которые нужно обновлять в существующих задачах.\n'
              'Пустые значения пропускаются. Изменения сохраняются автоматически.\n'
              'Статусы «Закрыт», «В релиз», «Пилот» в таблице исключаются.\n'
              'Состав полей и соответствия значений задаются в едином маппинге.',
              padding=12).pack(fill='x')
    notebook = ttk.Notebook(window)
    notebook.pack(fill='both', expand=True, padx=12)
    variables = {}
    for route, (_, project) in ROUTES.items():
        frame = ttk.Frame(notebook)
        notebook.add(frame, text=project or 'Redmine')
        canvas = tk.Canvas(frame, highlightthickness=0)
        scroll = ttk.Scrollbar(frame, orient='vertical', command=canvas.yview)
        canvas.configure(yscrollcommand=scroll.set)
        scroll.pack(side='right', fill='y')
        canvas.pack(side='left', fill='both', expand=True)
        content = ttk.Frame(canvas, padding=10)
        canvas.create_window((0, 0), window=content, anchor='nw')
        content.bind('<Configure>', lambda event, c=canvas: c.configure(scrollregion=c.bbox('all')))
        variables[route] = []
        for field in fields[route]:
            identity = field_id(field)
            value = tk.BooleanVar(value=identity in saved.get(route, []))
            variables[route].append((identity, value))
            ttk.Checkbutton(content, text=f'{field["label"]} → {field.get("target_label", field["label"])}',
                            variable=value).pack(anchor='w', pady=3)
        if not fields[route]:
            ttk.Label(content, text='Сначала настройте маппинг для этого направления.').pack()
        ttk.Separator(content, orient='horizontal').pack(fill='x', pady=8)
        reverse = tk.BooleanVar(value=LAST_COMMENT_FIELD in saved.get(route, []))
        variables[route].append((LAST_COMMENT_FIELD, reverse))
        ttk.Checkbutton(content, text='Перенести последний комментарий из локальной задачи в глобальную Jira',
                        variable=reverse).pack(anchor='w', pady=3)
    def save():
        selected = {r: [key for key, value in items if value.get()]
                    for r, items in variables.items()}
        if update_now:
            if not any(selected.values()):
                messagebox.showwarning('Обновление задач', 'Выберите хотя бы одно поле.', parent=window)
                return
            window.destroy()
            start_sync(app, selected_fields=selected)
            return
        try:
            save_sync_settings(selected)
        except Exception as error:
            messagebox.showerror('Синхронизация', str(error), parent=window)
            return
        window.destroy()
    footer = ttk.Frame(window)
    footer.pack(fill='x', padx=12, pady=12)
    ttk.Button(footer, text='Обновить' if update_now else 'Сохранить', command=save).pack(side='right')
    ttk.Button(footer, text='Отмена', command=window.destroy).pack(side='right', padx=(0, 8))


def open_status_mapping(app):
    import json
    from task_status_sync import load_mapping, MAPPING_FILE, normalized
    try:
        saved = load_mapping()
    except Exception as error:
        messagebox.showerror('Соответствия статусов', str(error), parent=app)
        return
    window = tk.Toplevel(app)
    window.title('Соответствия статусов глобальной и локальных систем')
    window.geometry('700x500')
    ttk.Label(window, text='Одна строка: исходный статус = целевой статус.\n'
              'Без соответствия используется исходное название.\n'
              'Пример формата: В работе = В разработке', padding=12).pack(fill='x')
    notebook = ttk.Notebook(window)
    notebook.pack(fill='both', expand=True, padx=12)
    editors = {}
    from tkinter.scrolledtext import ScrolledText
    for system, label in [('jira', 'Локальная Jira'), ('redmine', 'Redmine')]:
        text = ScrolledText(notebook, wrap='word')
        notebook.add(text, text=label)
        text.insert('1.0', '\n'.join(f'{k} = {v}' for k, v in saved.get(system, {}).items()))
        editors[system] = text
    def save():
        try:
            result = {}
            for system, editor in editors.items():
                result[system] = {}
                seen = set()
                for line in editor.get('1.0', 'end').splitlines():
                    if not line.strip():
                        continue
                    source, separator, destination = line.partition('=')
                    if not separator or not source.strip() or not destination.strip():
                        raise ValueError('Укажите исходный и целевой статус через знак =')
                    if normalized(source) in seen:
                        raise ValueError('Повторное соответствие: ' + source.strip())
                    seen.add(normalized(source))
                    result[system][source.strip()] = destination.strip()
            temporary = MAPPING_FILE.with_suffix('.tmp')
            temporary.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
            temporary.replace(MAPPING_FILE)
        except Exception as error:
            messagebox.showerror('Соответствия статусов', str(error), parent=window)
            return
        window.destroy()
    ttk.Button(window, text='Сохранить', command=save).pack(anchor='e', padx=12, pady=12)


def start_sync(app, statuses_only=False, selected_fields=None):
    # Existing operations disable the migration button; respect that busy state.
    if str(app.run_btn['state']) == 'disabled':
        messagebox.showinfo('Синхронизация', 'Дождитесь завершения текущей операции.', parent=app)
        return
    try:
        from task_status_sync import load_mapping
        selected = (load_mapping() if statuses_only else
                    selected_fields if selected_fields is not None else load_sync_settings())
        if not statuses_only and not any(selected.values()):
            open_sync_settings(app)
            return
        settings = load_settings()
    except Exception as error:
        messagebox.showerror('Синхронизация', str(error), parent=app)
        return
    controls = []
    def disable(widget):
        for child in widget.winfo_children():
            if isinstance(child, ttk.Button):
                controls.append((child, child['state']))
                child.configure(state='disabled')
            disable(child)
    disable(app)
    def restore():
        for widget, state in controls:
            if widget.winfo_exists():
                widget.configure(state=state)
    def log(text):
        app.after(0, app.log, text)
    def worker():
        try:
            import jrf
            pairs, skipped = read_pairs(settings)
            for message in skipped:
                log(message)
            log(f'Найдено пар задач: {len(pairs)}. Режим: ' + ('обновление статусов' if statuses_only else 'выбранные поля'))
            updated = failed = untouched = 0
            if pairs:
                with jrf.get_browser_page() as page:
                    page.set_default_navigation_timeout(60000)
                    for pair in pairs:
                        try:
                            from task_status_sync import sync_status_pair
                            operation = sync_status_pair if statuses_only else sync_pair
                            if operation(page, pair, selected, log):
                                updated += 1
                            else:
                                untouched += 1
                        except Exception as error:
                            failed += 1
                            error_logger.exception('Ошибка синхронизации %s → %s', pair[0], pair[1])
                            log(f'{pair[0]} → {pair[1]}: {error}')
                            if page.is_closed():
                                raise RuntimeError('Браузер закрыт; оставшиеся задачи не обработаны') from error
            message = (f'Сохранено: {updated}; без изменений: {untouched}; '
                       f'ошибок: {failed}; пропущено строк: {len(skipped)}.')
            log(message)
            app.after(0, lambda: messagebox.showinfo('Синхронизация завершена', message, parent=app))
        except Exception as error:
            error_logger.exception('Ошибка синхронизации задач из Google Таблицы')
            text = str(error)
            log(text)
            app.after(0, lambda: messagebox.showerror('Синхронизация', text, parent=app))
        finally:
            app.after(0, restore)
    threading.Thread(target=worker, daemon=True).start()
