import threading
import tkinter as tk
from tkinter import ttk, messagebox
from tkinter.scrolledtext import ScrolledText
from release_dates import load_release_dates, save_release_dates, sync_release_dates, version_key
from google_sheets_export import load_settings
from error_logging import error_logger


def open_release_settings(app):
    try:
        mapping = load_release_dates()
    except Exception as error:
        messagebox.showerror('Даты релизов', str(error), parent=app)
        return
    window = tk.Toplevel(app)
    window.title('Релизы и даты')
    window.geometry('600x430')
    ttk.Label(window, text='Одна строка: версия = дата. Например: 5.4.0 = 18.09.2026\n'
              'Кнопка синхронизации запишет дату в колонку «Срок» по колонке «Версия».\n'
              'Строки «Закрыт», «В релиз», «Пилот» пропускаются.', padding=12).pack(fill='x')
    editor = ScrolledText(window, wrap='word')
    editor.pack(fill='both', expand=True, padx=12)
    editor.insert('1.0', '\n'.join(f'{k} = {v}' for k, v in mapping.items()))
    def save():
        try:
            result = {}
            for line in editor.get('1.0', 'end').splitlines():
                if not line.strip():
                    continue
                key, separator, value = line.partition('=')
                key = version_key(key)
                if not separator or key in result:
                    raise ValueError('Нужна уникальная версия и дата через знак =')
                result[key] = value.strip()
            save_release_dates(result)
        except Exception as error:
            messagebox.showerror('Даты релизов', str(error), parent=window)
            return
        window.destroy()
    ttk.Button(window, text='Сохранить', command=save).pack(anchor='e', padx=12, pady=12)


def start_release_sync(app):
    if str(app.run_btn['state']) == 'disabled':
        messagebox.showinfo('Даты релизов', 'Дождитесь завершения текущей операции.', parent=app)
        return
    try:
        mapping, settings = load_release_dates(), load_settings()
        if not mapping:
            open_release_settings(app)
            return
    except Exception as error:
        messagebox.showerror('Даты релизов', str(error), parent=app)
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
    def worker():
        try:
            result = sync_release_dates(settings, mapping)
            text = f'Даты релизов: обновлено строк — {result["updated"]}, пропущено — {result["skipped"]}.'
            app.after(0, app.log, text)
            app.after(0, lambda: messagebox.showinfo('Даты релизов', text, parent=app))
        except Exception as error:
            error_logger.exception('Ошибка синхронизации дат релизов')
            text = str(error)
            app.after(0, app.log, text)
            app.after(0, lambda: messagebox.showerror('Даты релизов', text, parent=app))
        finally:
            app.after(0, restore)
    threading.Thread(target=worker, daemon=True).start()
