import sys
import re
import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext
import threading
from datetime import datetime
from field_mappings import SOURCE_TO_TARGET_PROJECT
from settings import (
    AVAILABLE_FIELDS, AVAILABLE_PREFIXES, DEFAULT_PREFIX, SOURCE_OPTIONS,
    TARGET_JIRA_PROJECTS, TARGET_OPTIONS,
)

# Импортируем логику из нашего основного файла jrf.py
try:
    import jrf
except ImportError:
    messagebox.showerror(
        "Ошибка импорта", 
        "Не найден файл jrf.py! Убедитесь, что файл GUI находится в той же папке."
    )
    sys.exit(1)

class MigrationGUI(tk.Tk):
    def __init__(self):
        super().__init__()
        
        self.title("Универсальный мигратор задач (Jira Mos Social)")
        self.geometry("700x830")
        self.minsize(650, 700)
        
        self.style = ttk.Style()
        self.style.theme_use('clam')
        
        # Настраиваем крупный стиль для главной кнопки запуска
        self.style.configure(
            "Action.TButton",
            font=("Arial", 14, "bold"),
            background="#2e7d32",
            foreground="white",
            padding=15
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
        self.field_vars = {}
        self.source_sys_var.trace_add("write", self.on_source_changed)
        
        self.create_widgets()
        
    def create_widgets(self):
        main_frame = ttk.Frame(self, padding="15")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
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
        
        # --- БЛОК 2: ВЫБОР ПОЛЕЙ ДЛЯ ПЕРЕНОСА ---
        fields_lf = ttk.LabelFrame(main_frame, text=" 2. Настройка переносимых полей ", padding="10")
        fields_lf.pack(fill=tk.X, pady=10)
        
        btn_frame = ttk.Frame(fields_lf)
        btn_frame.pack(fill=tk.X, pady=(0, 5))
        ttk.Button(btn_frame, text="Выбрать все", command=self.select_all_fields).pack(side=tk.LEFT, padx=2)
        ttk.Button(btn_frame, text="Снять все", command=self.clear_all_fields).pack(side=tk.LEFT, padx=2)
        
        chk_frame = ttk.Frame(fields_lf)
        chk_frame.pack(fill=tk.X, pady=5)
        
        for idx, (field_key, field_label) in enumerate(AVAILABLE_FIELDS.items()):
            var = tk.BooleanVar(value=True)  
            self.field_vars[field_key] = var
            cb = ttk.Checkbutton(chk_frame, text=field_label, variable=var)
            cb.grid(row=idx, column=0, sticky=tk.W, padx=5, pady=3)
            
        # --- БЛОК 3: ПАРАМЕТРЫ ЗАДАЧИ ---
        task_lf = ttk.LabelFrame(main_frame, text=" 3. Идентификатор задачи ", padding="10")
        task_lf.pack(fill=tk.X, pady=10)
        
        ttk.Label(task_lf, text="Номер или ключ задачи:", font=("Arial", 10, "bold")).pack(side=tk.LEFT, padx=5)
        task_entry = ttk.Entry(task_lf, textvariable=self.task_input_var, width=25, font=("Arial", 11))
        task_entry.pack(side=tk.LEFT, padx=5)
        task_entry.focus()
        
        ttk.Label(task_lf, text="(например: 15738)", font=("Arial", 9, "italic")).pack(side=tk.LEFT, padx=5)
        
        # --- БЛОК 4: КОНСОЛЬ / ЛОГ ---
        log_lf = ttk.LabelFrame(main_frame, text=" Лог выполнения ", padding="5")
        log_lf.pack(fill=tk.BOTH, expand=True, pady=10)
        
        self.log_area = scrolledtext.ScrolledText(log_lf, height=10, font=("Courier New", 9))
        self.log_area.pack(fill=tk.BOTH, expand=True)
        self.log_area.config(state=tk.DISABLED)
        
        # --- КНОПКА ЗАПУСКА ---
        self.run_btn = ttk.Button(
            main_frame, 
            text="🚀 ЗАПУСТИТЬ МИГРАЦИЮ ЗАДАЧИ", 
            style="Action.TButton", 
            command=self.start_migration_thread
        )
        self.run_btn.pack(fill=tk.X, ipady=12, pady=(10, 5))

    def select_all_fields(self):
        for var in self.field_vars.values():
            var.set(True)
            
    def clear_all_fields(self):
        for var in self.field_vars.values():
            var.set(False)

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
            
        selected_fields = {field: var.get() for field, var in self.field_vars.items()}
        if not any(selected_fields.values()):
            messagebox.showwarning("Внимание", "Не выбрано ни одно поле для переноса!")
            return

        target_selection = self.target_sys_var.get()
        target_sys = "jira" if "Jira" in target_selection else "redmine"
        target_project = self.target_project_var.get().strip()
        if target_sys == "jira" and not target_project:
            messagebox.showwarning("Внимание", "Выберите или введите проект целевой Jira!")
            return
        
        self.run_btn.config(state=tk.DISABLED)
        
        self.log_area.config(state=tk.NORMAL)
        self.log_area.delete(1.0, tk.END)
        self.log_area.config(state=tk.DISABLED)
        
        migration_thread = threading.Thread(
            target=self.execute_migration_process, 
            args=(prefix, task_id, target_sys, target_project, selected_fields),
            daemon=True
        )
        migration_thread.start()

    def execute_migration_process(self, prefix, task_id, target_sys, target_project, selected_fields):
        try:
            self.log(f"Старт процесса миграции задачи {prefix}{task_id}")
            self.log(f"Проект-источник: {prefix}")
            self.log(f"Целевая система: {target_sys.upper()}")
            if target_sys == "jira":
                self.log(f"Проект целевой Jira: {target_project}")

            with jrf.get_browser_page() as page:
                self.log(f"[Playwright] Подключение к источнику jira.mos.social/browse/{prefix}...")
                source_page = jrf.JiraSourcePage(page)
                raw_data = source_page.parse_issue(prefix, task_id)
                
                filtered_data = {}
                for field, is_checked in selected_fields.items():
                    if is_checked:
                        filtered_data[field] = raw_data.get(field, "")
                        self.log(f"[ОК] Поле '{AVAILABLE_FIELDS[field]}' подготовлено к переносу.")
                    else:
                        filtered_data[field] = ""
                        self.log(f"[Пропуск] Поле '{AVAILABLE_FIELDS[field]}' исключено пользователем.")
                
                self.log(f"[Playwright] Открытие целевой формы на {target_sys.upper()}...")
                if target_sys == "jira":
                    dest_page = jrf.JiraDestPage(page)
                    dest_page.create_issue(filtered_data, task_id, target_project)
                else:
                    dest_page = jrf.RedmineDestPage(page)
                    dest_page.create_issue(filtered_data, task_id)

                self.log("[УСПЕХ] Автозаполнение формы успешно завершено.")
                messagebox.showinfo("Успех", "Автозаполнение формы завершено! Проверьте данные на сайте вручную.")
                
        except Exception as err:
            self.log(f"[КРИТИЧЕСКАЯ ОШИБКА]: {str(err)}")
            messagebox.showerror("Критическая ошибка", f"Произошел сбой: {str(err)}")
        finally:
            self.run_btn.config(state=tk.NORMAL)
