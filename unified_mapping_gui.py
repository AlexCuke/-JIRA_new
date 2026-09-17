"""One-table mapping: source Jira to Redmine, Jira KIS, and Jira KIS 2.0."""
import json
import tkinter as tk
from pathlib import Path
from tkinter import ttk, filedialog, messagebox

from clipboard_support import install_clipboard
from field_picker import PROFILE_FILE
from mapping_gui import ROUTES, build_pairs, read_export


TARGETS = (
    ("Поле Redmine", "redmine", None, "jira_to_redmine_mapping.json"),
    ("Поле Jira KIS", "jira", "КИС ЕМИАС (KIS)", "jira_to_jira_obl_KIS_mapping.json"),
    ("Поле Jira KIS 2.0", "jira", "КИС 2.0 (REFACT)", "jira_to_jira_obl_KIS_2_0_mapping.json"),
)


def write_json(path: Path, data):
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    temporary.replace(path)


class UnifiedMappingWindow(tk.Toplevel):
    def __init__(self, parent):
        super().__init__(parent)
        self.title("Единый маппинг: Jira → Redmine / Jira KIS / Jira KIS 2.0")
        self.geometry("1450x760")
        self.source, self.destinations, self.combos = [], [], []
        self.default_vars = []
        self.value_maps = []
        folder = PROFILE_FILE.parent
        self.paths = [tk.StringVar(value=str(folder / name)) for name in (
            "selected_fields.json", "selected_fields_to_rm.json", "selected_fields_jira.json", "selected_fields_jira.json"
        )]
        top = ttk.Frame(self, padding=12)
        top.pack(fill="x")
        for index, label in enumerate(("Файл исходной Jira", "Файл Redmine", "Файл Jira KIS", "Файл Jira KIS 2.0")):
            ttk.Label(top, text=label).grid(row=index, column=0, sticky="w")
            ttk.Entry(top, textvariable=self.paths[index], width=100).grid(row=index, column=1, padx=8, pady=3)
            ttk.Button(top, text="Обзор", command=lambda i=index: self.browse(i)).grid(row=index, column=2)
        ttk.Button(top, text="Загрузить все поля", command=self.load).grid(row=4, column=1, sticky="w", pady=8)
        ttk.Button(top, text="Сопоставить одинаковые названия", command=self.match_names).grid(row=4, column=1, padx=180, sticky="w", pady=8)
        ttk.Label(top, text="Одна строка — поле исходной Jira. В каждом целевом столбце выберите нужное поле или «Не переносить».").grid(row=5, column=0, columnspan=3, sticky="w")

        holder = ttk.Frame(self)
        holder.pack(fill="both", expand=True)
        canvas = tk.Canvas(holder, highlightthickness=0)
        scroll = ttk.Scrollbar(holder, orient="vertical", command=canvas.yview)
        canvas.configure(yscrollcommand=scroll.set)
        scroll.pack(side="right", fill="y")
        canvas.pack(side="left", fill="both", expand=True)
        self.rows = ttk.Frame(canvas, padding=12)
        canvas.create_window((0, 0), window=self.rows, anchor="nw")
        self.rows.bind("<Configure>", lambda event: canvas.configure(scrollregion=canvas.bbox("all")))

        bottom = ttk.Frame(self, padding=12)
        bottom.pack(fill="x")
        ttk.Button(bottom, text="💾 Сохранить три маппинга", command=self.save).pack(side="left")
        self.status = tk.StringVar(value="Загрузите четыре файла полей.")
        ttk.Label(bottom, textvariable=self.status).pack(side="left", padx=12)
        install_clipboard(self)
        if all(Path(value.get()).exists() for value in self.paths):
            self.load()

    def browse(self, index):
        path = filedialog.askopenfilename(parent=self, filetypes=[("JSON / JS", "*.json *.js"), ("Все файлы", "*.*")])
        if path:
            self.paths[index].set(path)

    def load(self):
        try:
            records = [read_export(value.get()) for value in self.paths]
        except (OSError, ValueError) as error:
            messagebox.showerror("Загрузка файлов", str(error), parent=self)
            return
        self.source, self.destinations = records[0], records[1:]
        self.default_vars = [[tk.StringVar() for _ in destination] for destination in self.destinations]
        self.value_maps = [[{} for _ in self.destinations] for _ in self.source]
        self.combos = []
        for widget in self.rows.winfo_children():
            widget.destroy()
        headings = ("Поле исходной Jira",) + tuple(item[0] for item in TARGETS)
        for col, heading in enumerate(headings):
            ttk.Label(self.rows, text=heading, font=("Arial", 10, "bold")).grid(row=0, column=col, sticky="w", padx=4, pady=4)
        for row, field in enumerate(self.source, 1):
            ttk.Label(self.rows, text=f"{field['label']}\n{field['selector']}", width=38).grid(row=row, column=0, sticky="w", padx=4, pady=4)
            fields_row = []
            for col, destination in enumerate(self.destinations, 1):
                combo = ttk.Combobox(self.rows, state="readonly", width=43,
                                     values=["Не переносить"] + [f["label"] for f in destination])
                combo.current(0)
                combo.grid(row=row, column=col, padx=4, pady=4)
                fields_row.append(combo)
                ttk.Button(self.rows, text="Значения…", command=lambda source_row=row - 1, target_col=col - 1: self.edit_values(source_row, target_col)).grid(
                    row=row, column=col, sticky="se", padx=7, pady=(28, 3)
                )
            self.combos.append(fields_row)
        offset = len(self.source) + 2
        ttk.Label(self.rows, text="Значения по умолчанию для целевых полей", font=("Arial", 10, "bold")).grid(
            row=offset, column=0, columnspan=4, sticky="w", pady=(16, 6)
        )
        ttk.Label(self.rows, text="Редактируйте значение в нужном столбце. Оно заполнится даже без исходного поля.").grid(
            row=offset + 1, column=0, columnspan=4, sticky="w", pady=(0, 6)
        )
        maximum = max(map(len, self.destinations), default=0)
        for row in range(maximum):
            ttk.Label(self.rows, text=str(row + 1)).grid(row=offset + 2 + row, column=0, sticky="nw", padx=4, pady=3)
            for col, destination in enumerate(self.destinations, 1):
                if row >= len(destination):
                    continue
                field = destination[row]
                cell = ttk.Frame(self.rows)
                cell.grid(row=offset + 2 + row, column=col, sticky="ew", padx=4, pady=3)
                ttk.Label(cell, text=field["label"], width=28).pack(anchor="w")
                ttk.Entry(cell, textvariable=self.default_vars[col - 1][row], width=42).pack(fill="x")
        loaded = self.load_current_mappings()
        self.status.set(
            f"Загружено исходных полей: {len(self.source)}. "
            + (f"Восстановлено сохранённых маппингов: {loaded}." if loaded else "Сохранённые маппинги не найдены.")
        )

    def load_current_mappings(self):
        """Restore selections, default values, and value maps from route files."""
        restored = 0
        source_index = {field["selector"]: index for index, field in enumerate(self.source)}
        for col, (_title, system, project, filename) in enumerate(TARGETS):
            path = PROFILE_FILE.parent / filename
            if not path.exists():
                continue
            try:
                pairs = json.loads(path.read_text(encoding="utf-8-sig"))
            except (OSError, json.JSONDecodeError):
                continue
            if not isinstance(pairs, list):
                continue
            target_index = {field["selector"]: index for index, field in enumerate(self.destinations[col])}
            for pair in pairs:
                if not isinstance(pair, dict) or pair.get("target_system") != system:
                    continue
                if project and pair.get("target_project") != project:
                    continue
                target = target_index.get(pair.get("target_selector"))
                if target is None:
                    continue
                default = pair.get("default_value")
                if isinstance(default, str):
                    self.default_vars[col][target].set(default)
                if pair.get("default_only"):
                    restored += 1
                    continue
                source = source_index.get(pair.get("selector"))
                if source is None:
                    continue
                self.combos[source][col].current(target + 1)
                values = pair.get("value_mapping", {})
                if isinstance(values, dict) and all(isinstance(key, str) and isinstance(value, str) for key, value in values.items()):
                    self.value_maps[source][col] = dict(values)
                restored += 1
        return restored

    def edit_values(self, source_row, target_col):
        combo = self.combos[source_row][target_col]
        selected = combo.current() - 1
        if selected < 0:
            messagebox.showwarning("Сопоставление значений", "Сначала выберите целевое поле в этой ячейке.", parent=self)
            return
        source = self.source[source_row]
        target = self.destinations[target_col][selected]
        dialog = tk.Toplevel(self)
        dialog.title(f"Значения: {source['label']} → {target['label']}")
        dialog.geometry("720x430")
        dialog.transient(self)
        dialog.grab_set()
        frame = ttk.Frame(dialog, padding=12)
        frame.pack(fill="both", expand=True)
        ttk.Label(frame, text="Добавьте пары: значение исходной Jira → значение целевой системы.").pack(anchor="w")
        table = ttk.Treeview(frame, columns=("source", "target"), show="headings", selectmode="browse")
        table.heading("source", text="Исходная Jira")
        table.heading("target", text=TARGETS[target_col][0])
        table.pack(fill="both", expand=True, pady=8)
        for source_value, target_value in self.value_maps[source_row][target_col].items():
            table.insert("", "end", values=(source_value, target_value))
        source_var, target_var = tk.StringVar(), tk.StringVar()
        form = ttk.Frame(frame)
        form.pack(fill="x")
        ttk.Label(form, text="Исходное значение").grid(row=0, column=0, sticky="w")
        ttk.Label(form, text="Целевое значение").grid(row=0, column=1, sticky="w", padx=8)
        ttk.Entry(form, textvariable=source_var, width=42).grid(row=1, column=0, sticky="ew")
        ttk.Entry(form, textvariable=target_var, width=42).grid(row=1, column=1, sticky="ew", padx=8)
        def select(_event=None):
            if table.selection():
                values = table.item(table.selection()[0], "values")
                source_var.set(values[0]); target_var.set(values[1])
        table.bind("<<TreeviewSelect>>", select)
        def upsert():
            source_value, target_value = source_var.get().strip(), target_var.get().strip()
            if not source_value or not target_value:
                messagebox.showwarning("Сопоставление значений", "Заполните оба значения.", parent=dialog)
                return
            for item in table.get_children():
                if table.item(item, "values")[0] == source_value:
                    table.item(item, values=(source_value, target_value))
                    return
            table.insert("", "end", values=(source_value, target_value))
        def remove():
            for item in table.selection():
                table.delete(item)
        def save():
            self.value_maps[source_row][target_col] = dict(table.item(item, "values") for item in table.get_children())
            self.status.set(f"Значения настроены: {source['label']} → {target['label']}")
            dialog.destroy()
        buttons = ttk.Frame(frame)
        buttons.pack(fill="x", pady=10)
        for label, action in (("Добавить / обновить", upsert), ("Удалить", remove), ("Готово", save), ("Отмена", dialog.destroy)):
            ttk.Button(buttons, text=label, command=action).pack(side="left", padx=3)
        install_clipboard(dialog)

    def match_names(self):
        if not self.source:
            messagebox.showwarning("Маппинг", "Сначала загрузите файлы.", parent=self)
            return
        for destination, col in zip(self.destinations, range(3)):
            index = {field["label"].casefold(): item + 1 for item, field in enumerate(destination)}
            for source, row in zip(self.source, self.combos):
                row[col].current(index.get(source["label"].casefold(), 0))
        self.status.set("Совпадающие названия сопоставлены")

    def save(self):
        if not self.source:
            messagebox.showwarning("Маппинг", "Сначала загрузите файлы.", parent=self)
            return
        try:
            for col, (title, system, project, filename) in enumerate(TARGETS):
                choices = [row[col].current() - 1 for row in self.combos]
                pairs = build_pairs(self.source, self.destinations[col], choices, system, project) if any(value >= 0 for value in choices) else []
                maps = {field["selector"]: self.value_maps[row][col] for row, field in enumerate(self.source)}
                for pair in pairs:
                    if maps[pair["selector"]]:
                        pair["value_mapping"] = dict(maps[pair["selector"]])
                used_targets = {pair["target_selector"] for pair in pairs}
                for field, variable in zip(self.destinations[col], self.default_vars[col]):
                    value = variable.get().strip()
                    if not value:
                        continue
                    if field["selector"] in used_targets:
                        for pair in pairs:
                            if pair["target_selector"] == field["selector"]:
                                pair["default_value"] = value
                                break
                        continue
                    pair = {
                        "label": field["label"], "selector": "", "target": "mapped",
                        "target_system": system, "target_selector": field["selector"],
                        "target_label": field["label"], "default_only": True,
                        "default_value": value,
                    }
                    if project:
                        pair["target_project"] = project
                    pairs.append(pair)
                write_json(PROFILE_FILE.parent / filename, pairs)
            self.status.set("Три маппинга сохранены и готовы к переносу")
        except (OSError, ValueError) as error:
            messagebox.showerror("Сохранение маппинга", str(error), parent=self)


def main():
    root = tk.Tk()
    root.withdraw()
    window = UnifiedMappingWindow(root)
    root.wait_window(window)
    root.destroy()


if __name__ == "__main__":
    main()
