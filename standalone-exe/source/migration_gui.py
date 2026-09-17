import sys
import re
import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext, filedialog
import threading
import shutil
import tempfile
import webbrowser
from pathlib import Path
from datetime import datetime
from field_picker import load_route_mapping, read_field, fill_mapped_fields, add_source_reference, mapped_value
from error_logging import error_logger
from field_mappings import SOURCE_TO_TARGET_PROJECT
from settings import (
    AVAILABLE_PREFIXES, DEFAULT_ASSIGNEE, DEFAULT_PREFIX, SOURCE_OPTIONS,
    TARGET_JIRA_PROJECTS, TARGET_OPTIONS,
)
from google_sheets_export import (
    GoogleSheetsExportError, append_issue_row, append_issue_rows, update_issue_statuses, get_issue_keys_to_sync, load_settings,
    save_settings, validate_settings, TASK_SHEET_COLUMNS,
)
from jira_history_export import fetch_history_issues, fetch_issue_statuses
from developer_profiles import load_developers, save_developers

# Импортируем логику из нашего основного файла jrf.py
try:
    import jrf
except ImportError:
    error_logger.exception("Не удалось загрузить модуль миграции jrf")
    messagebox.showerror(
        "Ошибка импорта", 
        "Не найден файл jrf.py! Убедитесь, что файл GUI находится в той же папке."
    )
    sys.exit(1)

class MigrationGUI(tk.Tk):
    def report_callback_exception(self, exc_type, exc_value, traceback):
        error_logger.error(
            "Ошибка обработчика интерфейса",
            exc_info=(exc_type, exc_value, traceback),
        )
        super().report_callback_exception(exc_type, exc_value, traceback)

    def __init__(self):
        super().__init__()
        
        self.title("Универсальный мигратор задач (Jira Mos Social)")
        self.geometry("820x840")
        self.minsize(720, 700)
        self.create_help_menu()
        
        self.style = ttk.Style()
        self.style.theme_use('clam')
        
        self.style.configure("Header.TLabel", font=("Arial", 18, "bold"))
        self.style.configure("Muted.TLabel", font=("Arial", 9))
        self.style.configure("Secondary.TButton", font=("Arial", 10), padding=(10, 7))
        self.style.configure(
            "Action.TButton",
            font=("Arial", 12, "bold"),
            background="#2e7d32",
            foreground="white",
            padding=10,
        )
        self.style.map(
            "Action.TButton",
            background=[("active", "#1b5e20"), ("disabled", "#d1d1d1")],
            foreground=[("disabled", "#a1a1a1")]
        )
        
        self.source_sys_var = tk.StringVar(value="jira_mos")
        self.target_sys_var = tk.StringVar(value="jira_new")
        self.target_project_var = tk.StringVar(value=TARGET_JIRA_PROJECTS[0])
        self.task_input_var = tk.StringVar()
        self.target_task_input_var = tk.StringVar()
        self.developer_var = tk.StringVar(value=DEFAULT_ASSIGNEE)
        self.copy_developer_to_assignee_var = tk.BooleanVar(value=True)
        self.source_sys_var.trace_add("write", self.on_source_changed)
        
        self.create_widgets()

    def create_help_menu(self):
        menu = tk.Menu(self)
        help_menu = tk.Menu(menu, tearoff=False)
        help_menu.add_command(label="Описание функций", command=self.open_help)
        menu.add_cascade(label="Help", menu=help_menu)
        self.config(menu=menu)
        
    def create_widgets(self):
        main_frame = ttk.Frame(self, padding="15")
        main_frame.pack(fill=tk.BOTH, expand=True)

        header = ttk.Frame(main_frame)
        header.pack(fill=tk.X, pady=(0, 12))
        header_title = ttk.Frame(header)
        header_title.pack(side=tk.LEFT, fill=tk.X, expand=True)
        ttk.Label(header_title, text="Мигратор задач", style="Header.TLabel").pack(anchor=tk.W)
        ttk.Label(
            header_title, text="Jira Mos Social → локальная Jira / Redmine / Google Таблицы", style="Muted.TLabel"
        ).pack(anchor=tk.W, pady=(2, 0))
        self.settings_button = ttk.Button(
            header, text="⚙ Настройки", command=self.open_settings_window
        )
        self.settings_button.pack(side=tk.RIGHT, padx=(12, 0), pady=4)
        # Existing background-operation guards use these collections.
        self.mapping_buttons = [self.settings_button]
        self.google_settings_button = self.settings_button
        
        # --- БЛОК 1: НАПРАВЛЕНИЕ ПЕРЕНОСА ---
        route_lf = ttk.LabelFrame(main_frame, text=" 1. Направление миграции ", padding="10")
        route_lf.pack(fill=tk.X, pady=(0, 10))
        
        ttk.Label(route_lf, text="Откуда (Источник):").grid(row=0, column=0, sticky=tk.W, padx=5, pady=5)
        src_combo = ttk.Combobox(route_lf, textvariable=self.source_sys_var, state="readonly", width=55)
        src_combo['values'] = SOURCE_OPTIONS
        src_combo.current(0)
        src_combo.grid(row=0, column=1, sticky=tk.W, padx=5, pady=5)

        ttk.Label(route_lf, text="Куда (Целевая система):").grid(row=1, column=0, sticky=tk.W, padx=5, pady=5)
        dst_combo = ttk.Combobox(route_lf, textvariable=self.target_sys_var, state="readonly", width=35)
        dst_combo['values'] = TARGET_OPTIONS
        dst_combo.current(0)
        dst_combo.grid(row=1, column=1, sticky=tk.W, padx=5, pady=5)

        ttk.Label(route_lf, text="Проект в целевой Jira:").grid(row=2, column=0, sticky=tk.W, padx=5, pady=5)
        self.target_project_combo = ttk.Combobox(
            route_lf,
            textvariable=self.target_project_var,
            values=TARGET_JIRA_PROJECTS,
            state="readonly",
            width=35,
        )
        self.target_project_combo.grid(row=2, column=1, sticky=tk.W, padx=5, pady=5)

        ttk.Label(route_lf, text="Разработчик:").grid(row=3, column=0, sticky=tk.W, padx=5, pady=5)
        self.developer_combo = ttk.Combobox(
            route_lf, textvariable=self.developer_var, values=load_developers(), width=35,
        )
        self.developer_combo.grid(row=3, column=1, sticky=tk.W, padx=5, pady=5)
        ttk.Checkbutton(
            route_lf, text="Также проставить в поле «Исполнитель»",
            variable=self.copy_developer_to_assignee_var,
        ).grid(row=4, column=1, sticky=tk.W, padx=5, pady=(0, 5))
        
        # --- БЛОК 2: ПАРАМЕТРЫ ЗАДАЧИ ---
        task_lf = ttk.LabelFrame(main_frame, text=" 2. Идентификатор задачи ", padding="10")
        task_lf.pack(fill=tk.X, pady=10)
        
        ttk.Label(task_lf, text="Номер или ключ задачи:", font=("Arial", 10, "bold")).grid(row=0, column=0, sticky=tk.W, padx=5, pady=3)
        task_entry = ttk.Entry(task_lf, textvariable=self.task_input_var, width=25, font=("Arial", 11))
        task_entry.grid(row=0, column=1, sticky=tk.W, padx=5, pady=3)
        task_entry.focus()
        
        ttk.Label(task_lf, text="(например: 15738)", font=("Arial", 9, "italic")).grid(row=0, column=2, sticky=tk.W, padx=5, pady=3)
        ttk.Label(task_lf, text="Целевая задача для файлов:", font=("Arial", 10, "bold")).grid(row=1, column=0, sticky=tk.W, padx=5, pady=3)
        ttk.Entry(task_lf, textvariable=self.target_task_input_var, width=25, font=("Arial", 11)).grid(row=1, column=1, sticky=tk.W, padx=5, pady=3)
        ttk.Label(task_lf, text="(Jira: KIS-123; Redmine: 123)", font=("Arial", 9, "italic")).grid(row=1, column=2, sticky=tk.W, padx=5, pady=3)
        
        # Панель действий закреплена снизу, чтобы кнопки не скрывались логом.
        action_frame = ttk.LabelFrame(main_frame, text=" Действия ", padding=8)
        action_frame.pack(side=tk.BOTTOM, fill=tk.X, pady=(8, 0))
        action_frame.columnconfigure(0, weight=1)
        action_frame.columnconfigure(1, weight=1)

        # --- БЛОК 4: КОНСОЛЬ / ЛОГ ---
        log_lf = ttk.LabelFrame(main_frame, text=" Лог выполнения ", padding="5")
        log_lf.pack(fill=tk.BOTH, expand=True, pady=10)
        
        self.log_area = scrolledtext.ScrolledText(log_lf, height=10, font=("Courier New", 9))
        self.log_area.pack(fill=tk.BOTH, expand=True)
        self.log_area.config(state=tk.DISABLED)
        
        # --- КНОПКА ЗАПУСКА ---
        self.run_btn = ttk.Button(
            action_frame,
            text="🚀 ЗАПУСТИТЬ МИГРАЦИЮ ЗАДАЧИ", 
            style="Action.TButton", 
            command=self.start_migration_thread
        )
        self.run_btn.grid(row=0, column=0, columnspan=2, sticky=tk.EW, pady=(0, 7))

        self.google_export_btn = ttk.Button(
            action_frame,
            text="📊 ПЕРЕНЕСТИ ЗАДАЧУ В GOOGLE ТАБЛИЦУ",
            command=self.start_google_export_thread,
        )
        self.google_export_btn.grid(row=1, column=0, sticky=tk.EW, padx=(0, 4), pady=3)

        self.history_export_btn = ttk.Button(
            action_frame,
            text="📊 ВСЕ НАЗНАЧЕННЫЕ МНЕ КОГДА-ЛИБО → GOOGLE",
            command=self.start_history_export_thread,
        )
        self.history_export_btn.grid(row=1, column=1, sticky=tk.EW, padx=(4, 0), pady=3)

        self.status_update_btn = ttk.Button(
            action_frame,
            text="🔄 УТОЧНИТЬ СТАТУСЫ И СРОКИ В GOOGLE",
            command=self.open_status_update_window,
        )
        self.status_update_btn.grid(row=2, column=0, sticky=tk.EW, padx=(0, 4), pady=3)

        self.status_change_btn = ttk.Button(
            action_frame,
            text="✅ УСТАНОВИТЬ СТАТУС ЦЕЛЕВОЙ JIRA",
            command=self.open_status_change_window,
        )
        self.status_change_btn.grid(row=2, column=1, sticky=tk.EW, padx=(4, 0), pady=3)

        self.assignee_change_btn = ttk.Button(
            action_frame,
            text="👤 УСТАНОВИТЬ ИСПОЛНИТЕЛЯ В ЦЕЛЕВОЙ JIRA",
            command=self.start_assignee_change_thread,
        )
        self.assignee_change_btn.grid(row=3, column=0, sticky=tk.EW, padx=(0, 4), pady=3)

        self.comment_copy_btn = ttk.Button(
            action_frame,
            text="📋 КОПИРОВАТЬ КОММЕНТАРИИ В БУФЕР",
            command=self.start_copy_comments_thread,
        )
        self.comment_copy_btn.grid(row=3, column=1, sticky=tk.EW, padx=(4, 0), pady=3)

        self.file_copy_btn = ttk.Button(
            action_frame,
            text="📎 ПЕРЕНЕСТИ ТОЛЬКО ФАЙЛЫ",
            command=self.start_copy_files_thread,
        )
        self.file_copy_btn.grid(row=4, column=0, sticky=tk.EW, padx=(0, 4), pady=3)

        self.open_table_btn = ttk.Button(
            action_frame,
            text="↗ ОТКРЫТЬ ТАБЛИЦУ ЗАДАЧ",
            style="Secondary.TButton",
            command=self.open_tasks_table,
        )
        self.open_table_btn.grid(row=4, column=1, sticky=tk.EW, padx=(4, 0), pady=3)

        self.table_sync_btn = ttk.Button(
            action_frame,
            text="🔃 СИНХРОНИЗИРОВАТЬ ТАБЛИЦУ ЗАДАЧ",
            command=self.start_table_sync_thread,
        )
        self.table_sync_btn.grid(row=5, column=0, columnspan=2, sticky=tk.EW, pady=(5, 0))

        from task_sync_gui import start_sync
        self.issue_sync_btn = ttk.Button(
            action_frame, text="Синхронизировать задачи в Jira -> локальная JIRA/Redmine",
            command=lambda: start_sync(self),
        )
        self.issue_sync_btn.grid(row=6, column=0, columnspan=2, sticky=tk.EW, pady=(5, 0))

        self.issue_status_sync_btn = ttk.Button(
            action_frame, text="Обновить статус задач",
            command=lambda: start_sync(self, statuses_only=True),
        )
        self.issue_status_sync_btn.grid(row=7, column=0, columnspan=2, sticky=tk.EW, pady=(5, 0))

        from release_dates_gui import start_release_sync
        self.release_dates_btn = ttk.Button(
            action_frame, text="Синхронизировать даты релизов в таблице",
            command=lambda: start_release_sync(self),
        )
        self.release_dates_btn.grid(row=8, column=0, columnspan=2, sticky=tk.EW, pady=(5, 0))

    def open_mapping(self):
        from unified_mapping_gui import UnifiedMappingWindow
        UnifiedMappingWindow(self)

    def open_settings_window(self):
        """Собирает настройки маппинга и Google Таблиц вне главного экрана."""
        window = tk.Toplevel(self)
        window.title("Настройки")
        window.transient(self)
        window.resizable(False, False)
        frame = ttk.Frame(window, padding=16)
        frame.pack(fill=tk.BOTH, expand=True)
        ttk.Label(frame, text="Настройка переноса и Google Таблиц", font=("Arial", 11, "bold")).pack(anchor=tk.W, pady=(0, 10))
        ttk.Button(
            frame, text="Единый маппинг полей", command=self.open_mapping
        ).pack(fill=tk.X, pady=3)
        ttk.Button(
            frame, text="Экспорт в Google Таблицы", command=self.open_google_settings
        ).pack(fill=tk.X, pady=3)
        ttk.Button(
            frame, text="Список разработчиков", command=self.open_developer_list
        ).pack(fill=tk.X, pady=3)
        from task_sync_gui import open_sync_settings
        sync_frame = ttk.LabelFrame(frame, text="Синхронизация задач", padding=8)
        sync_frame.pack(fill=tk.X, pady=(10, 0))
        ttk.Label(sync_frame, text="Пары задач — из Google Таблицы.\nВыбранные поля сохраняются в целевых задачах.").pack(anchor=tk.W)
        ttk.Button(sync_frame, text="Поля для синхронизации",
                   command=lambda: open_sync_settings(self)).pack(fill=tk.X, pady=5)
        from task_sync_gui import open_status_mapping
        ttk.Button(sync_frame, text="Соответствия статусов",
                   command=lambda: open_status_mapping(self)).pack(fill=tk.X, pady=5)
        from release_dates_gui import open_release_settings
        release_frame = ttk.LabelFrame(frame, text="Даты релизов", padding=8)
        release_frame.pack(fill=tk.X, pady=(10, 0))
        ttk.Button(release_frame, text="Соответствие релиза и даты",
                   command=lambda: open_release_settings(self)).pack(fill=tk.X)
        ttk.Button(frame, text="Закрыть", command=window.destroy).pack(anchor=tk.E, pady=(12, 0))

    def open_tasks_table(self):
        """Открывает текущую настроенную Google Таблицу в новом окне браузера."""
        url = load_settings().get("spreadsheet_url", "").strip()
        if not url:
            messagebox.showwarning(
                "Таблица задач", "Сначала укажите ссылку в Настройки → Экспорт в Google Таблицы."
            )
            return
        try:
            webbrowser.open(url, new=1)
            self.log("Открыта таблица задач в браузере.")
        except Exception as error:
            error_logger.exception("Не удалось открыть Google Таблицу в браузере")
            messagebox.showerror("Таблица задач", f"Не удалось открыть браузер: {error}")

    def open_help(self):
        window = tk.Toplevel(self)
        window.title("Help — справка по программе и EXE")
        window.transient(self)
        window.geometry("680x590")
        frame = ttk.Frame(window, padding=14)
        frame.pack(fill=tk.BOTH, expand=True)
        text = scrolledtext.ScrolledText(frame, wrap=tk.WORD, font=("Arial", 10), padx=8, pady=8)
        text.pack(fill=tk.BOTH, expand=True)
        text.insert(tk.END, (
            "Универсальный мигратор задач\n\n"
            "Синхронизировать даты релизов в таблице\n"
            "В Настройки → Даты релизов задайте пары версия = дата, например 5.4.0 = 18.09.2026. Кнопка читает колонку Версия текущей Google Таблицы и обновляет Срок настоящей датой в формате ДД.ММ.ГГГГ. Неизвестные версии и строки Закрыт, В релиз, Пилот пропускаются. Несколько версий в ячейке обрабатываются только если для всех задана одна дата. Уже совпадающие сроки не перезаписываются. Jira и Redmine эта кнопка не изменяет.\n\n"
            "Обновить статус задач\n"
            "Читает пары ссылок из настроенной Google Таблицы и актуальный статус каждой исходной задачи из глобальной Jira. Строки таблицы со статусами Закрыт, В релиз и Пилот пропускаются. Статус целевой задачи сохраняется автоматически и проверяется. По умолчанию используется такое же название статуса; разные названия задаются в Настройки → Синхронизация задач → Соответствия статусов. Если прямой переход недоступен или неоднозначен, задача пропускается с ошибкой в журнале. Промежуточные переходы автоматически не выполняются.\n\n"
            "Синхронизация Jira → локальная Jira / Redmine\n"
            "Кнопка синхронизации читает пары из колонок исходной и целевой ссылок Google Таблицы, заданных в настройках экспорта. В Настройки → Синхронизация задач → Поля для синхронизации отметьте поля отдельно для KIS, KIS 2.0 и Redmine. Соответствия берутся из единого маппинга. Изменения автоматически сохраняются в существующих задачах. Пустые значения пропускаются. Повторные пары обрабатываются один раз; конфликтующие ссылки на одну целевую задачу останавливают запуск. Статусы, типы задач и вложения этим действием не синхронизируются. Строки со статусами «Закрыт», «В релиз» и «Пилот» в колонке «Статус» Google Таблицы пропускаются. Регистр и лишние пробелы не учитываются.\n\n"
            "Запуск EXE\n"
            "Запустите Task_Migrator.exe. Python устанавливать не нужно. При переносе программы копируйте всю папку release, включая browsers. Папка программы должна быть доступна для записи настроек и журналов.\n\n"
            "Учётные данные\n"
            "Рядом с EXE должен находиться файл .env. При первом запуске скопируйте .env.example в .env и заполните SOURCE_LOGIN и SOURCE_PASSWORD для исходной Jira; DEST_LOGIN и DEST_PASSWORD для целевой Jira; REDMINE_LOGIN и REDMINE_PASSWORD для Redmine. Можно скопировать заполненный .env из исходного проекта. После изменения .env закройте программу и запустите её заново. Не передавайте этот файл вместе с общедоступной копией программы: он содержит пароли.\n\n"
            "Быстрый старт\n"
            "Выберите направление и разработчика, проверьте маппинг, введите номер исходной задачи и запустите миграцию. Не закрывайте открывшийся браузер до завершения операции. Проверьте заполненную целевую задачу и сохраните её вручную.\n\n"
            "1. Направление миграции\n"
            "Выберите исходный проект, целевую систему и проект Jira.\n\n"
            "2. Разработчик\n"
            "Выберите разработчика из списка. Галочка «Также проставить в поле Исполнитель» переносит выбранного человека в поле исполнителя. Управление списком находится в окне «Настройки».\n\n"
            "3. Единые настройки маппинга\n"
            "Настраивают соответствие исходных и целевых полей, значения по умолчанию и маппинг отдельных значений для Jira и Redmine.\n\n"
            "4. Миграция задачи\n"
            "Открывает исходную задачу, переносит выбранные в маппинге поля, комментарии и вложения в форму целевой задачи. После проверки сохраните задачу вручную в браузере.\n\n"
            "5. Google Таблицы\n"
            "В настройке задаются ссылка на таблицу, сервисный JSON-ключ и соответствие колонок. После ручного сохранения целевой задачи запись добавляется в Google Таблицу автоматически. Кнопка «Открыть таблицу задач» открывает текущую таблицу в новом окне браузера.\n\n"
            "6. Все назначенные мне когда-либо → Google\n"
            "Находит в глобальной Jira задачи по запросу assignee WAS currentUser() и добавляет их в Google Таблицу без целевой ссылки.\n\n"
            "7. Уточнить статусы и сроки в Google\n"
            "Вставьте ключи или ссылки исходных Jira-задач. Программа прочитает «Статус», «Срок исполнения» и «Исправить в версиях» и обновит колонки «Статус», «Срок» и «Версия» в уже существующих строках Google Таблицы. Если срок отсутствует, в колонке «Срок» будет «А». Кнопка «Вставить из буфера» принимает ссылки прямо из таблиц и Markdown.\n\n"
            "8. Синхронизировать таблицу задач\n"
            "Берёт список исходных Jira-задач из колонки «Jira- Москва» Google Таблицы и обновляет для них «Статус», «Срок» и «Версия». Строки, в которых статус уже «В релиз», «Закрыт» или «Решенные», не обрабатываются.\n\n"
            "9. Установить статус целевой Jira\n"
            "Укажите ключ локальной Jira-задачи, выберите «Закрыт» или «Взята в анализ». Для закрытия программа последовательно выполняет переходы: «Взята в анализ → Отправить в разработку → Тестирование → Решить задачу → Закрыть задачу».\n\n"
            "10. Установить исполнителя в целевой Jira\n"
            "Введите ключ созданной локальной Jira-задачи в поле «Целевая задача для файлов», выберите человека в списке «Разработчик» и нажмите эту кнопку. Исполнитель будет сохранён в задаче.\n\n"
            "11. Копировать комментарии в буфер\n"
            "Собирает комментарии исходной Jira и помещает их в буфер обмена для ручной вставки.\n\n"
            "12. Перенести только файлы\n"
            "Введите ключ уже созданной целевой задачи в поле под исходной задачей. Программа скачает вложения исходной Jira и прикрепит их к указанной задаче Jira или Redmine. Затем сохраните изменения вручную.\n\n"
            "Настройки Google Таблиц\n"
            "Для экспорта укажите таблицу и JSON-ключ сервисного аккаунта в настройках. Предоставьте этому аккаунту доступ на редактирование таблицы. При переносе на другой компьютер заново выберите файл ключа. Настройки сохраняются в google_sheets_settings.json рядом с EXE, список разработчиков — в developers.json.\n\n"
            "Если возникла ошибка\n"
            "• «Не заданы логин или пароль»: проверьте .env рядом с запускаемым EXE, заполнение нужной пары логин/пароль и перезапустите программу. Файл .env.example сам по себе не используется.\n"
            "• Jira не загрузилась за 60 секунд: проверьте доступ к jira.mos.social в обычном браузере, подключение к рабочей сети или VPN и повторите операцию. На открытие исходной задачи отводится 60 секунд; это не общий лимит всей миграции.\n"
            "• Браузер не найден: восстановите папку browsers из полного комплекта программы рядом с EXE.\n"
            "• Окно браузера закрыто: повторите операцию и оставьте браузер открытым до завершения.\n\n"
            "Журналы и диагностика\n"
            "Папка logs находится рядом с EXE: errors.log — ошибки со временем и подробностями, login.log — этапы входа в системы. Старые ошибки сохраняются; смотрите последние записи и время операции.\n"
            "Для проверки без подключения к Jira откройте PowerShell в папке программы и выполните: .\\Task_Migrator.exe --self-test. Проверка открывает и закрывает окно, запускает Chromium и при успехе записывает self-test.json. Она не проверяет пароли и доступ к Jira или Google."
        ))
        text.config(state=tk.DISABLED)
        ttk.Button(frame, text="Закрыть", command=window.destroy).pack(anchor=tk.E, pady=(8, 0))

    def open_status_change_window(self):
        """Окно смены статуса уже созданной задачи локальной Jira."""
        window = tk.Toplevel(self)
        window.title("Установить статус целевой Jira")
        window.transient(self)
        window.resizable(False, False)
        frame = ttk.Frame(window, padding=14)
        frame.pack(fill=tk.BOTH, expand=True)
        ttk.Label(frame, text="Ключ целевой Jira-задачи:").grid(row=0, column=0, sticky=tk.W, pady=4)
        issue_var = tk.StringVar(value=self.target_task_input_var.get().strip())
        issue_entry = ttk.Entry(frame, textvariable=issue_var, width=34)
        issue_entry.grid(row=0, column=1, sticky=tk.EW, pady=4)
        ttk.Label(frame, text="Новый статус:").grid(row=1, column=0, sticky=tk.W, pady=4)
        status_var = tk.StringVar(value="Закрыт")
        ttk.Combobox(
            frame, textvariable=status_var, state="readonly", width=31,
            values=("Закрыт", "Взята в анализ"),
        ).grid(row=1, column=1, sticky=tk.EW, pady=4)
        message_var = tk.StringVar(value="")
        ttk.Label(frame, textvariable=message_var, wraplength=410).grid(
            row=2, column=0, columnspan=2, sticky=tk.W, pady=(8, 0)
        )

        def start():
            key = issue_var.get().strip().upper()
            if not re.fullmatch(r"[A-Z][A-Z0-9_]*-\d+", key):
                messagebox.showwarning("Установить статус", "Укажите ключ, например KIS-1383.", parent=window)
                return
            self.target_task_input_var.set(key)
            apply_button.config(state=tk.DISABLED)
            issue_entry.config(state=tk.DISABLED)
            message_var.set(f"Выполняется переход «{status_var.get()}» для {key}…")
            self._set_status_change_busy(True)
            threading.Thread(
                target=self.execute_status_change, args=(key, status_var.get()), daemon=True
            ).start()

        footer = ttk.Frame(frame)
        footer.grid(row=3, column=0, columnspan=2, sticky=tk.EW, pady=(12, 0))
        apply_button = ttk.Button(footer, text="Установить", command=start)
        apply_button.pack(side=tk.RIGHT)
        ttk.Button(footer, text="Отмена", command=window.destroy).pack(side=tk.RIGHT, padx=(0, 6))
        frame.columnconfigure(1, weight=1)
        issue_entry.focus()

    def _set_status_change_busy(self, busy):
        for button in [self.run_btn, self.google_export_btn, self.history_export_btn,
                       self.status_update_btn, self.status_change_btn,
                       self.assignee_change_btn, self.comment_copy_btn, self.file_copy_btn,
                       self.table_sync_btn, self.google_settings_button, *self.mapping_buttons]:
            button.config(state=tk.DISABLED if busy else tk.NORMAL)

    def start_assignee_change_thread(self):
        issue_key = self.target_task_input_var.get().strip().upper()
        developer = self.developer_var.get().strip()
        if not re.fullmatch(r"[A-Z][A-Z0-9_]*-\d+", issue_key):
            messagebox.showwarning(
                "Установить исполнителя", "Укажите ключ целевой Jira-задачи, например KIS-1383."
            )
            return
        if not developer:
            messagebox.showwarning("Установить исполнителя", "Выберите исполнителя из списка разработчиков.")
            return
        self._set_assignee_change_busy(True)
        self.log(f"Установка исполнителя «{developer}» в задаче {issue_key}.")
        threading.Thread(
            target=self.execute_assignee_change, args=(issue_key, developer), daemon=True
        ).start()

    def _set_assignee_change_busy(self, busy):
        for button in [self.run_btn, self.google_export_btn, self.history_export_btn,
                       self.status_update_btn, self.status_change_btn, self.assignee_change_btn,
                       self.comment_copy_btn, self.file_copy_btn,
                       self.table_sync_btn, self.google_settings_button, *self.mapping_buttons]:
            button.config(state=tk.DISABLED if busy else tk.NORMAL)

    def execute_assignee_change(self, issue_key, developer):
        try:
            with jrf.get_browser_page() as page:
                destination = jrf.JiraDestPage(page)
                destination.set_existing_issue_assignee(issue_key, developer)
            message = f"В задаче {issue_key} установлен исполнитель: {developer}."
            self.after(0, self.log, message)
            self.after(0, lambda text=message: messagebox.showinfo("Установить исполнителя", text, parent=self))
        except Exception as error:
            error_logger.exception("Не удалось установить исполнителя %s в задаче %s", developer, issue_key)
            text = str(error)
            self.after(0, self.log, f"Ошибка установки исполнителя: {text}")
            self.after(0, lambda text=text: messagebox.showerror("Установить исполнителя", text, parent=self))
        finally:
            self.after(0, self._set_assignee_change_busy, False)

    def execute_status_change(self, issue_key, desired_status):
        try:
            with jrf.get_browser_page() as page:
                destination = jrf.JiraDestPage(page)
                actual_status = destination.set_issue_status(issue_key, desired_status)
            message = f"Для {issue_key} установлен статус: {actual_status}."
            self.after(0, self.log, message)
            self.after(0, lambda text=message: messagebox.showinfo("Установить статус", text, parent=self))
        except Exception as error:
            error_logger.exception("Не удалось изменить статус целевой Jira-задачи %s", issue_key)
            text = str(error)
            self.after(0, self.log, f"Ошибка смены статуса: {text}")
            self.after(0, lambda text=text: messagebox.showerror("Установить статус", text, parent=self))
        finally:
            self.after(0, self._set_status_change_busy, False)

    def open_status_update_window(self):
        """Окно вставки ключей для обновления строк уже существующей таблицы."""
        window = tk.Toplevel(self)
        window.title("Уточнить статусы и сроки")
        window.transient(self)
        window.geometry("620x430")
        frame = ttk.Frame(window, padding=14)
        frame.pack(fill=tk.BOTH, expand=True)
        ttk.Label(
            frame,
            text=(
                "Вставьте ключи или полные ссылки задач глобальной Jira — по одному в строке, "
                "через пробел, запятую или прямо из таблицы. Повторяющиеся задачи будут обработаны один раз."
            ),
            wraplength=570,
        ).pack(anchor=tk.W)
        keys_text = scrolledtext.ScrolledText(frame, height=13, font=("Consolas", 10))
        keys_text.pack(fill=tk.BOTH, expand=True, pady=(8, 10))
        status_var = tk.StringVar(value="")
        ttk.Label(frame, textvariable=status_var).pack(anchor=tk.W)

        def extract_keys():
            return list(dict.fromkeys(
                match.upper() for match in re.findall(
                    r"\b[A-Za-z][A-Za-z0-9_]*-\d+\b", keys_text.get("1.0", tk.END)
                )
            ))

        def paste_from_clipboard():
            try:
                copied = self.clipboard_get()
            except tk.TclError:
                messagebox.showwarning("Уточнить статус", "Буфер обмена пуст или содержит не текст.", parent=window)
                return
            keys_text.insert(tk.END, str(copied))
            status_var.set(f"Распознано задач: {len(extract_keys())}")

        def update_count(_event=None):
            keys = extract_keys()
            status_var.set(f"Распознано задач: {len(keys)}" if keys else "")

        keys_text.bind("<KeyRelease>", update_count)

        def start():
            keys = extract_keys()
            if not keys:
                messagebox.showwarning(
                    "Уточнить статус", "Вставьте хотя бы один ключ или ссылку, например https://jira.mos.social/browse/REFACT-7808.", parent=window
                )
                return
            try:
                validate_settings(load_settings())
            except GoogleSheetsExportError as error:
                messagebox.showerror("Уточнить статус", str(error), parent=window)
                return
            status_var.set(f"Будет обработано задач: {len(keys)}")
            keys_text.config(state=tk.DISABLED)
            start_button.config(state=tk.DISABLED)
            self._set_status_update_busy(True)
            threading.Thread(target=self.execute_status_update, args=(keys,), daemon=True).start()

        footer = ttk.Frame(frame)
        footer.pack(fill=tk.X, pady=(8, 0))
        start_button = ttk.Button(footer, text="Уточнить в Google Таблице", command=start)
        start_button.pack(side=tk.RIGHT)
        ttk.Button(footer, text="Закрыть", command=window.destroy).pack(side=tk.RIGHT, padx=(0, 6))
        ttk.Button(footer, text="Вставить из буфера", command=paste_from_clipboard).pack(side=tk.LEFT)

    def _set_status_update_busy(self, busy):
        for button in [self.run_btn, self.google_export_btn, self.history_export_btn,
                       self.status_update_btn, self.status_change_btn,
                       self.assignee_change_btn, self.comment_copy_btn, self.file_copy_btn, self.table_sync_btn,
                       self.google_settings_button, *self.mapping_buttons]:
            button.config(state=tk.DISABLED if busy else tk.NORMAL)

    def start_table_sync_thread(self):
        self._set_status_update_busy(True)
        self.log("Чтение списка задач для синхронизации из Google Таблицы…")
        threading.Thread(target=self.execute_table_sync, daemon=True).start()

    def execute_table_sync(self):
        try:
            selection = get_issue_keys_to_sync(load_settings())
            keys = selection["keys"]
            if not keys:
                message = "Нет задач для синхронизации: все строки имеют исключаемый статус либо не содержат ссылку Jira."
                self.after(0, self.log, message)
                self.after(0, lambda text=message: messagebox.showinfo("Синхронизация таблицы", text, parent=self))
                return
            self.after(
                0, self.log,
                f"Синхронизация: найдено задач {len(keys)}, пропущено по исключаемым статусам: {selection['skipped']}."
            )
            first_prefix, first_number = keys[0].rsplit("-", 1)
            # Синхронизация использует REST API после входа и не требует действий
            # пользователя в браузере. Скрытый режим исключает случайное закрытие
            # окна Playwright во время авторизации.
            with jrf.get_browser_page(headless=True) as page:
                source = jrf.JiraSourcePage(page)
                source.open_issue(first_prefix + "-", first_number)
                values, failures = fetch_issue_statuses(page, jrf.CONFIG["src_jira"]["url"], keys)
            result = update_issue_statuses(load_settings(), values)
            parts = [f"Синхронизировано строк: {result['updated']}."]
            if result["not_found"]:
                parts.append("Не найдены в таблице: " + ", ".join(result["not_found"]))
            if failures:
                parts.append("Не прочитаны в Jira: " + ", ".join(failures))
            message = "\n".join(parts)
            self.after(0, self.log, message)
            self.after(0, lambda text=message: messagebox.showinfo("Синхронизация таблицы", text, parent=self))
        except Exception as error:
            error_logger.exception("Ошибка синхронизации таблицы задач")
            text = str(error)
            self.after(0, self.log, f"Ошибка синхронизации: {text}")
            self.after(0, lambda text=text: messagebox.showerror("Синхронизация таблицы", text, parent=self))
        finally:
            self.after(0, self._set_status_update_busy, False)

    def execute_status_update(self, keys):
        try:
            first_prefix, first_number = keys[0].rsplit("-", 1)
            with jrf.get_browser_page() as page:
                source = jrf.JiraSourcePage(page)
                source.open_issue(first_prefix + "-", first_number)
                self.after(0, self.log, f"Чтение статусов и сроков: {len(keys)} задач.")
                values, failures = fetch_issue_statuses(
                    page, jrf.CONFIG["src_jira"]["url"], keys
                )
            result = update_issue_statuses(load_settings(), values)
            parts = [f"Обновлено строк: {result['updated']}."]
            if result["not_found"]:
                parts.append("Не найдены в таблице: " + ", ".join(result["not_found"]))
            if failures:
                parts.append("Не прочитаны в Jira: " + ", ".join(failures))
            message = "\n".join(parts)
            self.after(0, self.log, message)
            self.after(0, lambda text=message: messagebox.showinfo("Уточнить статус", text, parent=self))
        except Exception as error:
            error_logger.exception("Ошибка уточнения статусов Jira в Google Таблице")
            text = str(error)
            self.after(0, self.log, f"Ошибка уточнения статусов: {text}")
            self.after(0, lambda text=text: messagebox.showerror("Уточнить статус", text, parent=self))
        finally:
            self.after(0, self._set_status_update_busy, False)

    def open_developer_list(self):
        window = tk.Toplevel(self)
        window.title("Список разработчиков")
        window.transient(self)
        window.grab_set()
        frame = ttk.Frame(window, padding=12)
        frame.pack(fill=tk.BOTH, expand=True)
        names = load_developers()
        listbox = tk.Listbox(frame, height=8, width=42)
        for name in names:
            listbox.insert(tk.END, name)
        listbox.grid(row=0, column=0, columnspan=2, sticky=tk.NSEW)
        name_var = tk.StringVar()
        ttk.Entry(frame, textvariable=name_var, width=34).grid(row=1, column=0, sticky=tk.EW, pady=(8, 0))

        def add_name():
            name = name_var.get().strip()
            if name and name not in listbox.get(0, tk.END):
                listbox.insert(tk.END, name)
            name_var.set("")

        def remove_name():
            for index in reversed(listbox.curselection()):
                listbox.delete(index)

        def save():
            updated = list(listbox.get(0, tk.END))
            save_developers(updated)
            self.developer_combo["values"] = load_developers()
            if self.developer_var.get() not in self.developer_combo["values"]:
                self.developer_var.set(self.developer_combo["values"][0])
            window.destroy()

        ttk.Button(frame, text="Добавить", command=add_name).grid(row=1, column=1, padx=(5, 0), pady=(8, 0))
        ttk.Button(frame, text="Удалить", command=remove_name).grid(row=2, column=0, sticky=tk.W, pady=(8, 0))
        ttk.Button(frame, text="Сохранить", command=save).grid(row=2, column=1, sticky=tk.E, pady=(8, 0))
        frame.columnconfigure(0, weight=1)

    def open_google_settings(self):
        settings = load_settings()
        window = tk.Toplevel(self)
        window.title("Настройка Google Таблиц")
        window.transient(self)
        window.grab_set()
        window.resizable(False, False)
        frame = ttk.Frame(window, padding=15)
        frame.pack(fill=tk.BOTH, expand=True)
        ttk.Label(frame, text=(
            "Укажите таблицу и JSON-ключ сервисного аккаунта.\n"
            "Предоставьте этому аккаунту доступ «Редактор» к таблице."
        )).grid(row=0, column=0, columnspan=3, sticky=tk.W, pady=(0, 10))
        url_var = tk.StringVar(value=settings["spreadsheet_url"])
        sheet_var = tk.StringVar(value=settings["worksheet_name"])
        credentials_var = tk.StringVar(value=settings["credentials_file"])
        ttk.Label(frame, text="Ссылка на таблицу:").grid(row=1, column=0, sticky=tk.W, pady=4)
        ttk.Entry(frame, textvariable=url_var, width=58).grid(row=1, column=1, columnspan=2, sticky=tk.EW, pady=4)
        ttk.Label(frame, text="Имя листа:").grid(row=2, column=0, sticky=tk.W, pady=4)
        ttk.Entry(frame, textvariable=sheet_var, width=58).grid(row=2, column=1, columnspan=2, sticky=tk.EW, pady=4)
        ttk.Label(frame, text="JSON-ключ:").grid(row=3, column=0, sticky=tk.W, pady=4)
        ttk.Entry(frame, textvariable=credentials_var, width=45).grid(row=3, column=1, sticky=tk.EW, pady=4)

        def browse_credentials():
            selected = filedialog.askopenfilename(
                parent=window, title="Выберите JSON-ключ сервисного аккаунта",
                filetypes=[("JSON-файл", "*.json"), ("Все файлы", "*.*")],
            )
            if selected:
                credentials_var.set(selected)

        def save():
            new_settings = {
                "spreadsheet_url": url_var.get().strip(),
                "worksheet_name": sheet_var.get().strip() or "Задачи (копия)",
                "credentials_file": credentials_var.get().strip(),
                "header_row": settings.get("header_row", 2),
                "column_mapping": settings.get("column_mapping", {}),
            }
            try:
                validate_settings(new_settings)
            except GoogleSheetsExportError as error:
                messagebox.showerror("Настройка Google Таблиц", str(error), parent=window)
                return
            save_settings(new_settings)
            window.destroy()
            messagebox.showinfo("Google Таблицы", "Настройки сохранены.", parent=self)

        ttk.Button(frame, text="Обзор…", command=browse_credentials).grid(row=3, column=2, padx=(5, 0))
        ttk.Button(frame, text="Настроить маппинг колонок", command=lambda: self.open_google_column_mapping(window)).grid(row=4, column=0, columnspan=3, sticky=tk.W, pady=(12, 0))
        ttk.Button(frame, text="Сохранить", command=save).grid(row=5, column=1, sticky=tk.E, pady=(8, 0))
        ttk.Button(frame, text="Отмена", command=window.destroy).grid(row=5, column=2, sticky=tk.E, pady=(8, 0))
        frame.columnconfigure(1, weight=1)

    def open_google_column_mapping(self, parent):
        """Настраивает, куда записывать значения исходной задачи в листе."""
        settings = load_settings()
        target_sys = "jira" if "Jira" in self.target_sys_var.get() else "redmine"
        target_project = self.target_project_var.get().strip()
        try:
            route_mapping = load_route_mapping(target_sys, target_project)
        except (ValueError, OSError) as error:
            messagebox.showerror("Маппинг Google Таблиц", str(error), parent=parent)
            return
        fields = [
            ("__issue_number", "Номер исходной задачи"),
            ("__source_url", "Ссылка на исходную Jira"),
            ("__destination_url", "Ссылка на целевую Jira / Redmine"),
            ("__assignee", "Исполнитель по умолчанию"),
        ]
        labels = {key for key, _ in fields}
        for field in route_mapping:
            if not field.get("default_only") and field["label"] not in labels:
                fields.append((field["label"], field["label"]))
                labels.add(field["label"])
        window = tk.Toplevel(self)
        window.title("Маппинг колонок Google Таблиц")
        window.transient(parent)
        window.grab_set()
        frame = ttk.Frame(window, padding=15)
        frame.pack(fill=tk.BOTH, expand=True)
        ttk.Label(frame, text="Поле исходной задачи").grid(row=0, column=0, sticky=tk.W, padx=(0, 12))
        ttk.Label(frame, text="Колонка листа «Задачи (копия)»").grid(row=0, column=1, sticky=tk.W)
        mapping = settings.get("column_mapping", {})
        variables = {}
        column_options = ("Не переносить",) + TASK_SHEET_COLUMNS
        for row, (key, label) in enumerate(fields, start=1):
            ttk.Label(frame, text=label).grid(row=row, column=0, sticky=tk.W, pady=3)
            variable = tk.StringVar(value=mapping.get(key, "Не переносить"))
            ttk.Combobox(frame, textvariable=variable, values=column_options, width=34).grid(
                row=row, column=1, sticky=tk.EW, pady=3
            )
            variables[key] = variable

        def save():
            selected_mapping = {
                key: variable.get().strip() for key, variable in variables.items()
                if variable.get().strip() and variable.get().strip() != "Не переносить"
            }
            columns = list(selected_mapping.values())
            duplicates = sorted({column for column in columns if columns.count(column) > 1})
            if duplicates:
                messagebox.showerror(
                    "Маппинг Google Таблиц",
                    "Колонка назначена нескольким полям: " + ", ".join(duplicates),
                    parent=window,
                )
                return
            settings["column_mapping"] = selected_mapping
            settings["header_row"] = 2
            save_settings(settings)
            window.destroy()
            messagebox.showinfo("Маппинг Google Таблиц", "Соответствие колонок сохранено.", parent=parent)

        footer = ttk.Frame(frame)
        footer.grid(row=len(fields) + 1, column=0, columnspan=2, sticky=tk.EW, pady=(12, 0))
        ttk.Label(footer, text="Шапка таблицы: строка 2").pack(side=tk.LEFT)
        ttk.Button(footer, text="Сохранить", command=save).pack(side=tk.RIGHT)
        ttk.Button(footer, text="Отмена", command=window.destroy).pack(side=tk.RIGHT, padx=5)
        frame.columnconfigure(1, weight=1)

    def get_selected_prefix(self):
        """Возвращает префикс проекта по выбранной строке в комбобоксе «Откуда»."""
        selection = self.source_sys_var.get()
        for prefix in AVAILABLE_PREFIXES:
            if prefix.rstrip("-") in selection:
                return prefix
        return DEFAULT_PREFIX

    def on_source_changed(self, *_args):
        """Автоматически выбирает проект целевой Jira по проекту-источнику."""
        prefix = self.get_selected_prefix()
        project = SOURCE_TO_TARGET_PROJECT[prefix]
        self.target_project_var.set(project)
        if hasattr(self, "target_project_combo"):
            self.target_project_combo.current(TARGET_JIRA_PROJECTS.index(project))

    def log(self, message):
        """Безопасное добавление логов без f-string синтаксических ошибок"""
        self.log_area.config(state=tk.NORMAL)
        time_str = datetime.now().strftime('%H:%M:%S')
        log_line = "[" + time_str + "] " + str(message) + "\n"
        self.log_area.insert(tk.END, log_line)
        self.log_area.see(tk.END)
        self.log_area.config(state=tk.DISABLED)
        self.update_idletasks()

    def start_migration_thread(self):
        user_input = self.task_input_var.get().strip()
        if not user_input:
            messagebox.showwarning("Внимание", "Пожалуйста, введите номер или ключ задачи!")
            return

        prefix = self.get_selected_prefix()
        task_id = ""
        match = re.match(r"^([A-Za-z0-9]+-)(\d+)$", user_input)
        if match:
            prefix_from_input = match.group(1).upper()
            task_id = match.group(2)
            if prefix_from_input != prefix:
                self.log(f"⚠ Введённый ключ '{prefix_from_input}' не совпадает с выбранным проектом '{prefix}'. Использую '{prefix_from_input}'.")
                prefix = prefix_from_input
        else:
            task_id = user_input
            
        if not task_id.isdigit():
            messagebox.showerror("Ошибка", "Некорректный формат ID задачи. Должны быть цифры.")
            return
            
        target_selection = self.target_sys_var.get()
        target_sys = "jira" if "Jira" in target_selection else "redmine"
        target_project = self.target_project_var.get().strip()
        developer = self.developer_var.get().strip()
        try:
            has_mapping = bool(load_route_mapping(target_sys, target_project))
        except (ValueError, OSError) as error:
            messagebox.showerror('Ошибка маппинга', str(error))
            return
        if not has_mapping:
            messagebox.showwarning('Внимание', 'Для выбранного направления нет маппинга. Откройте программу сопоставления и сохраните пары.')
            return
        if target_sys == "jira" and not target_project:
            messagebox.showwarning("Внимание", "Выберите или введите проект целевой Jira!")
            return
        
        self.run_btn.config(state=tk.DISABLED)
        self.google_export_btn.config(state=tk.DISABLED)
        self.history_export_btn.config(state=tk.DISABLED)
        self.comment_copy_btn.config(state=tk.DISABLED)
        self.file_copy_btn.config(state=tk.DISABLED)
        self.google_settings_button.config(state=tk.DISABLED)
        for button in self.mapping_buttons:
            button.config(state=tk.DISABLED)
        
        self.log_area.config(state=tk.NORMAL)
        self.log_area.delete(1.0, tk.END)
        self.log_area.config(state=tk.DISABLED)
        
        migration_thread = threading.Thread(
            target=self.execute_migration_process, 
            args=(prefix, task_id, target_sys, target_project, developer, self.copy_developer_to_assignee_var.get()),
            daemon=True
        )
        migration_thread.start()

    def start_copy_comments_thread(self):
        user_input = self.task_input_var.get().strip()
        if not user_input:
            messagebox.showwarning("Внимание", "Введите номер или ключ исходной задачи.")
            return
        prefix = self.get_selected_prefix()
        match = re.match(r"^([A-Za-z0-9]+-)(\d+)$", user_input)
        if match:
            prefix, task_id = match.group(1).upper(), match.group(2)
        else:
            task_id = user_input
        if not task_id.isdigit():
            messagebox.showerror("Ошибка", "Некорректный формат ID задачи. Должны быть цифры.")
            return
        self.run_btn.config(state=tk.DISABLED)
        self.google_export_btn.config(state=tk.DISABLED)
        self.history_export_btn.config(state=tk.DISABLED)
        self.comment_copy_btn.config(state=tk.DISABLED)
        self.google_settings_button.config(state=tk.DISABLED)
        for button in self.mapping_buttons:
            button.config(state=tk.DISABLED)
        threading.Thread(target=self.execute_copy_comments, args=(prefix, task_id), daemon=True).start()

    def execute_copy_comments(self, prefix, task_id):
        try:
            with jrf.get_browser_page() as page:
                source_page = jrf.JiraSourcePage(page)
                source_page.open_issue(prefix, task_id)
                comments = source_page.collect_comments()
            text = jrf.comments_to_plain_text(comments)
            self.clipboard_clear()
            self.clipboard_append(text)
            self.update()
            self.log(f"Скопировано комментариев в буфер: {len(comments)}.")
            messagebox.showinfo("Комментарии", f"В буфер обмена скопировано комментариев: {len(comments)}.")
        except Exception as error:
            error_logger.exception("Не удалось скопировать комментарии задачи %s%s", prefix, task_id)
            self.log(f"[КРИТИЧЕСКАЯ ОШИБКА]: {error}")
            messagebox.showerror("Комментарии", str(error))
        finally:
            self.run_btn.config(state=tk.NORMAL)
            self.google_export_btn.config(state=tk.NORMAL)
            self.history_export_btn.config(state=tk.NORMAL)
            self.comment_copy_btn.config(state=tk.NORMAL)
            self.file_copy_btn.config(state=tk.NORMAL)
            self.google_settings_button.config(state=tk.NORMAL)
            for button in self.mapping_buttons:
                button.config(state=tk.NORMAL)

    def start_copy_files_thread(self):
        user_input = self.task_input_var.get().strip()
        if not user_input:
            messagebox.showwarning("Внимание", "Введите номер или ключ исходной задачи.")
            return
        prefix = self.get_selected_prefix()
        match = re.match(r"^([A-Za-z0-9]+-)(\d+)$", user_input)
        if match:
            prefix, task_id = match.group(1).upper(), match.group(2)
        else:
            task_id = user_input
        if not task_id.isdigit():
            messagebox.showerror("Ошибка", "Некорректный формат ID задачи. Должны быть цифры.")
            return
        target_sys = "jira" if "Jira" in self.target_sys_var.get() else "redmine"
        target_project = self.target_project_var.get().strip()
        target_issue = self.target_task_input_var.get().strip()
        if not target_issue:
            messagebox.showwarning("Внимание", "Укажите ключ или номер уже созданной целевой задачи.")
            return
        self.run_btn.config(state=tk.DISABLED)
        self.google_export_btn.config(state=tk.DISABLED)
        self.history_export_btn.config(state=tk.DISABLED)
        self.comment_copy_btn.config(state=tk.DISABLED)
        self.file_copy_btn.config(state=tk.DISABLED)
        self.google_settings_button.config(state=tk.DISABLED)
        for button in self.mapping_buttons:
            button.config(state=tk.DISABLED)
        threading.Thread(
            target=self.execute_copy_files,
            args=(prefix, task_id, target_sys, target_issue),
            daemon=True,
        ).start()

    def execute_copy_files(self, prefix, task_id, target_sys, target_issue):
        attachment_dir = None
        try:
            with jrf.get_browser_page() as page:
                source = jrf.JiraSourcePage(page)
                source.open_issue(prefix, task_id)
                attachment_dir = tempfile.mkdtemp(prefix="jira_files_")
                attachments = source.download_attachments(Path(attachment_dir))
                if target_sys == "jira":
                    destination = jrf.JiraDestPage(page)
                    destination.open_existing_issue(target_issue)
                else:
                    destination = jrf.RedmineDestPage(page)
                    destination.open_existing_issue(target_issue)
                uploaded = jrf.upload_attachments_to_target(page, target_sys, attachments)
                self.log(f"Добавлено вложений в целевую форму: {uploaded} из {len(attachments)}.")
                messagebox.showinfo(
                    "Файлы перенесены",
                    "Вложения добавлены в форму уже созданной целевой задачи. Проверьте их и сохраните изменения вручную.",
                )
        except Exception as error:
            error_logger.exception("Не удалось перенести файлы задачи %s%s", prefix, task_id)
            self.log(f"[КРИТИЧЕСКАЯ ОШИБКА]: {error}")
            messagebox.showerror("Перенос файлов", str(error))
        finally:
            if attachment_dir:
                shutil.rmtree(attachment_dir, ignore_errors=True)
            self.run_btn.config(state=tk.NORMAL)
            self.google_export_btn.config(state=tk.NORMAL)
            self.history_export_btn.config(state=tk.NORMAL)
            self.comment_copy_btn.config(state=tk.NORMAL)
            self.file_copy_btn.config(state=tk.NORMAL)
            self.google_settings_button.config(state=tk.NORMAL)
            for button in self.mapping_buttons:
                button.config(state=tk.NORMAL)

    def start_history_export_thread(self):
        try:
            settings = load_settings()
            validate_settings(settings)
            settings["column_mapping"] = {
                source: column for source, column in settings["column_mapping"].items()
                if source != "__destination_url"
            }
            target_sys = "jira" if "Jira" in self.target_sys_var.get() else "redmine"
            source_fields = [field for field in load_route_mapping(
                target_sys, self.target_project_var.get().strip()
            ) if not field.get("default_only")]
            if not source_fields:
                raise ValueError("В текущем маппинге нет исходных полей для выгрузки.")
        except (GoogleSheetsExportError, ValueError, OSError) as error:
            messagebox.showerror("Экспорт истории Jira", str(error), parent=self)
            return
        self._set_history_busy(True)
        self.log("Поиск всех задач: assignee WAS currentUser() ORDER BY updated DESC")
        threading.Thread(target=self.execute_history_export,
                         args=(source_fields, settings), daemon=True).start()

    def _set_history_busy(self, busy):
        for button in [self.run_btn, self.google_export_btn, self.history_export_btn,
                       self.status_update_btn, self.status_change_btn,
                       self.assignee_change_btn, self.comment_copy_btn, self.file_copy_btn,
                       self.table_sync_btn, self.google_settings_button, *self.mapping_buttons]:
            button.config(state=tk.DISABLED if busy else tk.NORMAL)

    def execute_history_export(self, source_fields, settings):
        try:
            rows = []
            with jrf.get_browser_page() as page:
                source = jrf.JiraSourcePage(page)
                # Existing login flow waits for an issue after authentication.
                source.open_issue("REFACT-", "7808")
                base_url = jrf.CONFIG["src_jira"]["url"].rstrip("/")
                issues = fetch_history_issues(page, base_url)
                self.after(0, self.log, f"Найдено задач: {len(issues)}")
                for index, issue in enumerate(issues, 1):
                    key = issue["key"]
                    prefix, number = key.rsplit("-", 1)
                    self.after(0, self.log, f"[{index}/{len(issues)}] Чтение {key}")
                    source.open_issue(prefix + "-", number)
                    values = {}
                    for field in source_fields:
                        label = field["label"]
                        unique_label, suffix = label, 2
                        while unique_label in values:
                            unique_label = f"{label} ({suffix})"
                            suffix += 1
                        values[unique_label] = read_field(page, field)
                    assignee = issue.get("fields", {}).get("assignee") or {}
                    rows.append({"issue_key": key, "issue_number": number,
                                 "source_url": f"{base_url}/browse/{key}",
                                 "field_values": values,
                                 "assignee": assignee.get("displayName", "")})
            if rows:
                self.after(0, self.log, f"Запись {len(rows)} задач в Google Таблицу…")
                append_issue_rows(settings, rows)
            message = f"Добавлено задач: {len(rows)}. Целевая ссылка не заполнялась."
            self.after(0, self.log, message)
            self.after(0, lambda text=message: messagebox.showinfo("Экспорт истории Jira", text, parent=self))
        except Exception as error:
            error_logger.exception("Ошибка выгрузки истории Jira")
            text = str(error)
            self.after(0, self.log, f"Ошибка выгрузки: {text}")
            self.after(0, lambda text=text: messagebox.showerror("Экспорт истории Jira", text, parent=self))
        finally:
            self.after(0, self._set_history_busy, False)

    def start_google_export_thread(self):
        """Открывает исходную задачу и добавляет её поля как строку Google Таблицы."""
        user_input = self.task_input_var.get().strip()
        if not user_input:
            messagebox.showwarning("Внимание", "Пожалуйста, введите номер или ключ задачи!")
            return
        prefix = self.get_selected_prefix()
        match = re.match(r"^([A-Za-z0-9]+-)(\d+)$", user_input)
        if match:
            prefix, task_id = match.group(1).upper(), match.group(2)
        else:
            task_id = user_input
        if not task_id.isdigit():
            messagebox.showerror("Ошибка", "Некорректный формат ID задачи. Должны быть цифры.")
            return
        target_sys = "jira" if "Jira" in self.target_sys_var.get() else "redmine"
        target_project = self.target_project_var.get().strip()
        try:
            settings = load_settings()
            validate_settings(settings)
            route_mapping = load_route_mapping(target_sys, target_project)
        except (GoogleSheetsExportError, ValueError, OSError) as error:
            messagebox.showerror("Экспорт в Google Таблицы", str(error))
            return
        source_fields = [field for field in route_mapping if not field.get("default_only")]
        if not source_fields:
            messagebox.showwarning(
                "Экспорт в Google Таблицы",
                "В текущем маппинге нет полей исходной задачи для выгрузки.",
            )
            return
        self.run_btn.config(state=tk.DISABLED)
        self.google_export_btn.config(state=tk.DISABLED)
        self.history_export_btn.config(state=tk.DISABLED)
        self.comment_copy_btn.config(state=tk.DISABLED)
        self.file_copy_btn.config(state=tk.DISABLED)
        self.google_settings_button.config(state=tk.DISABLED)
        for button in self.mapping_buttons:
            button.config(state=tk.DISABLED)
        self.log("Старт экспорта задачи " + prefix + task_id + " в Google Таблицы")
        threading.Thread(
            target=self.execute_google_export,
            args=(prefix, task_id, source_fields, settings), daemon=True,
        ).start()

    def execute_google_export(self, prefix, task_id, source_fields, settings):
        try:
            with jrf.get_browser_page() as page:
                source_page = jrf.JiraSourcePage(page)
                source_page.open_issue(prefix, task_id)
                field_values = {}
                labels = set()
                for field in source_fields:
                    label = field["label"]
                    unique_label = label
                    index = 2
                    while unique_label in labels:
                        unique_label = f"{label} ({index})"
                        index += 1
                    labels.add(unique_label)
                    try:
                        field_values[unique_label] = read_field(page, field)
                    except Exception:
                        error_logger.exception("Не удалось прочитать поле %s для Google Таблиц", label)
                        field_values[unique_label] = ""
                        self.log(f"[Пропуск] {label}: поле недоступно.")
                source_url = jrf.CONFIG["src_jira"]["url"].rstrip("/") + f"/browse/{prefix}{task_id}"
                append_issue_row(
                    settings, prefix + task_id, task_id, source_url,
                    field_values, DEFAULT_ASSIGNEE,
                )
            self.log("Задача добавлена в Google Таблицу.")
            messagebox.showinfo("Google Таблицы", "Задача успешно добавлена в таблицу.")
        except Exception as error:
            error_logger.exception("Ошибка экспорта задачи %s%s в Google Таблицы", prefix, task_id)
            self.log(f"[КРИТИЧЕСКАЯ ОШИБКА]: {error}")
            messagebox.showerror("Экспорт в Google Таблицы", str(error))
        finally:
            self.run_btn.config(state=tk.NORMAL)
            self.google_export_btn.config(state=tk.NORMAL)
            self.history_export_btn.config(state=tk.NORMAL)
            self.comment_copy_btn.config(state=tk.NORMAL)
            self.file_copy_btn.config(state=tk.NORMAL)
            self.google_settings_button.config(state=tk.NORMAL)
            for button in self.mapping_buttons:
                button.config(state=tk.NORMAL)

    def export_migrated_issue_to_google(self, prefix, task_id, target_sys, source_values, assignee):
        """Записывает строку только после ручного сохранения целевой задачи."""
        try:
            settings = load_settings()
            validate_settings(settings)
        except GoogleSheetsExportError as error:
            self.log(f"[Google Таблицы] Экспорт пропущен: {error}")
            return
        destination_url = self._current_page.url if hasattr(self, "_current_page") else ""
        is_saved = (
            (target_sys == "jira" and "/browse/" in destination_url)
            or (target_sys == "redmine" and bool(re.search(r"/issues/\d+", destination_url)))
        )
        if not is_saved:
            self.log("[Google Таблицы] Экспорт не выполнен: целевая задача не была сохранена.")
            return
        source_url = jrf.CONFIG["src_jira"]["url"].rstrip("/") + f"/browse/{prefix}{task_id}"
        try:
            append_issue_row(
                settings, prefix + task_id, task_id, source_url, source_values,
                assignee, destination_url=destination_url,
            )
            self.log("[Google Таблицы] Созданная задача добавлена в таблицу.")
        except GoogleSheetsExportError as error:
            error_logger.exception("Не удалось автоматически выгрузить задачу в Google Таблицы")
            self.log(f"[Google Таблицы] Ошибка экспорта: {error}")

    def execute_migration_process(self, prefix, task_id, target_sys, target_project, developer, copy_to_assignee):
        attachment_dir = None
        try:
            route_mapping = load_route_mapping(target_sys, target_project)
            if not route_mapping:
                raise ValueError('Для выбранного направления отсутствует маппинг.')
            self.log(f"Старт процесса миграции задачи {prefix}{task_id}")
            self.log(f"Проект-источник: {prefix}")
            self.log(f"Целевая система: {target_sys.upper()}")
            if target_sys == "jira":
                self.log(f"Проект целевой Jira: {target_project}")

            with jrf.get_browser_page() as page:
                self._current_page = page
                self.log(f"[Playwright] Подключение к источнику jira.mos.social/browse/{prefix}...")
                source_page = jrf.JiraSourcePage(page)
                if route_mapping:
                    self.log(f"Применяется маппинг выбранного направления: {len(route_mapping)} пар.")
                    source_page.open_issue(prefix, task_id)
                    comments = source_page.collect_comments()
                    self.log(f"Собрано комментариев из глобальной Jira: {len(comments)}.")
                    attachment_dir = tempfile.mkdtemp(prefix="jira_migration_")
                    attachments = source_page.download_attachments(Path(attachment_dir))
                    linked_pages = source_page.download_linked_pages(Path(attachment_dir))
                    attachments.extend(linked_pages)
                    self.log(
                        f"Скачано вложений из глобальной Jira: {len(attachments) - len(linked_pages)}. "
                        f"Сохранено веб-страниц по ссылкам из описания: {len(linked_pages)}."
                    )
                    skipped = []
                    pairs = []
                    google_source_values = {}
                    for field in route_mapping:
                        field = dict(field)
                        if (field['selector'] == '#description-val' and target_sys == 'jira'
                                and field['target_selector'] in ('#mce_0', '#description')):
                            field['copy_html'] = True
                        try:
                            source_value = read_field(page, field)
                            pairs.append((field, source_value))
                            if not field.get("default_only"):
                                google_source_values.setdefault(field["label"], source_value)
                        except Exception:
                            error_logger.exception('Пропущено исходное поле %s', field['label'])
                            if field.get('default_value', '').strip():
                                pairs.append((field, None))
                                continue
                            skipped.append(field['label'])
                            self.log(f"[Пропуск] {field['label']}: исходное поле недоступно.")
                    prepared = []
                    for field, value in pairs:
                        if field.get('copy_html'):
                            if not value or not value.get('html'):
                                skipped.append(field['label'])
                                self.log(f"[Пропуск] {field['label']}: описание пустое.")
                            else:
                                prepared.append((field, value))
                            continue
                        source_empty = not value or not value.strip()
                        value = mapped_value(field, value)
                        if value is None:
                            skipped.append(field['label'])
                            self.log(f"[Пропуск] {field['label']}: нет пары для исходного значения.")
                            continue
                        if source_empty:
                            if value:
                                self.log(f"[По умолчанию] {field['label']}")
                        if not value or field['target_selector'] in ('#attachment-browse-button', '#attachments_form'):
                            skipped.append(field['label'])
                            self.log(f"[Пропуск] {field['label']}: нет значения или поле требует загрузки файла.")
                        else:
                            if field['target_selector'] in ('#duedate', '#issue_due_date'):
                                value = jrf.convert_date(value, target_sys)
                            prepared.append((field, value))
                    pairs = prepared
                    if target_sys == 'jira':
                        issue_type = next((value for field, value in pairs if field['target_selector'] == '#issuetype-field'), None)
                        destination = jrf.JiraDestPage(page)
                        destination.create_issue({}, task_id, target_project, issue_type=issue_type)
                        if developer:
                            destination.set_selected_developer(developer, copy_to_assignee)
                        if getattr(destination, 'issue_type_skipped', False):
                            skipped.append('Тип задачи')
                            self.log('[Пропуск] Тип задачи: нет соответствующего варианта.')
                        pairs = [(field, value) for field, value in pairs if field['target_selector'] != '#issuetype-field']
                    else:
                        destination = jrf.RedmineDestPage(page)
                        destination.create_issue({}, task_id)
                        if developer:
                            destination.set_selected_developer(developer, copy_to_assignee)
                    try:
                        uploaded = jrf.upload_attachments_to_target(page, target_sys, attachments)
                        self.log(f"Добавлено вложений в целевую форму: {uploaded} из {len(attachments)}.")
                    except Exception:
                        error_logger.exception("Не удалось добавить вложения в целевую задачу")
                        self.log("[Пропуск] Не удалось добавить вложения в целевую форму.")
                    for field, value in pairs:
                        try:
                            filled = fill_mapped_fields(page, [(field, value)])
                        except Exception as error:
                            error_logger.exception('Пропущено целевое поле %s → %s', field['label'], field['target_selector'])
                            skipped.append(field['label'])
                            self.log(f"[Пропуск] {field['label']}: целевое поле или подходящее значение недоступно.")
                            continue
                        if filled is False:
                            skipped.append(field['label'])
                            self.log(f"[Пропуск] {field['label']}: в целевой системе нет сопоставленного значения.")
                            continue
                        self.log(f"[Маппинг] {field['label']} → {field.get('target_label', field['target_selector'])}")
                    try:
                        jrf.append_comments_to_target(page, target_sys, comments)
                        if comments:
                            self.log(f"Комментарии добавлены в описание целевой задачи: {len(comments)}.")
                    except Exception:
                        error_logger.exception("Не удалось добавить комментарии в целевую задачу")
                        self.log("[Пропуск] Комментарии не удалось добавить в описание.")
                    source_url = jrf.CONFIG['src_jira']['url'].rstrip('/') + f'/browse/{prefix}{task_id}'
                    add_source_reference(page, target_sys, task_id, source_url)
                    self.log('К теме добавлен номер задачи, к описанию — ссылка на исходную Jira.')
                    self.log('Заполнение по маппингу завершено.')
                    note = ('\nПропущены поля: ' + ', '.join(skipped)) if skipped else ''
                    messagebox.showinfo('Готово', 'Поля заполнены по сохранённому маппингу.' + note + '\nСохраните задачу в браузере, затем закройте это сообщение — она будет добавлена в Google Таблицу автоматически.')
                    self.export_migrated_issue_to_google(
                        prefix, task_id, target_sys, google_source_values,
                        developer if copy_to_assignee else "",
                    )
                    return
        except Exception as err:
            error_logger.exception(
                "Ошибка миграции: задача=%s%s система=%s проект=%s",
                prefix, task_id, target_sys, target_project,
            )
            self.log(f"[КРИТИЧЕСКАЯ ОШИБКА]: {str(err)}")
            messagebox.showerror("Критическая ошибка", f"Произошел сбой: {str(err)}")
        finally:
            self._current_page = None
            if attachment_dir:
                shutil.rmtree(attachment_dir, ignore_errors=True)
            self.run_btn.config(state=tk.NORMAL)
            self.google_export_btn.config(state=tk.NORMAL)
            self.history_export_btn.config(state=tk.NORMAL)
            self.comment_copy_btn.config(state=tk.NORMAL)
            self.file_copy_btn.config(state=tk.NORMAL)
            self.google_settings_button.config(state=tk.NORMAL)
            for button in self.mapping_buttons:
                button.config(state=tk.NORMAL)


def main():
    app = MigrationGUI()
    app.mainloop()


if __name__ == "__main__":
    main()
