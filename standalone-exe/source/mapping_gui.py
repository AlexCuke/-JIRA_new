"""Map exported source and destination field files without opening a browser."""
import json
import tkinter as tk
from pathlib import Path
from tkinter import ttk, filedialog, messagebox
from clipboard_support import install_clipboard

from field_picker import PROFILE_FILE, load_fields, save_fields

ROUTES = {
    'Jira → Redmine': ('redmine', None, 'jira_to_redmine_mapping.json'),
    'Jira → Jira OBL KIS': ('jira', 'КИС ЕМИАС (KIS)', 'jira_to_jira_obl_KIS_mapping.json'),
    'Jira → Jira OBL KIS 2.0': ('jira', 'КИС 2.0 (REFACT)', 'jira_to_jira_obl_KIS_2_0_mapping.json'),
}


def read_export(path):
    data = json.loads(Path(path).read_text(encoding='utf-8-sig'))
    fields = data.get('fields') if isinstance(data, dict) else None
    if not isinstance(fields, list) or not fields:
        raise ValueError('В файле должен быть непустой список fields.')
    for field in fields:
        if not isinstance(field, dict) or any(not isinstance(field.get(k), str) or not field[k].strip() for k in ('label', 'selector')):
            raise ValueError('У каждого поля должны быть название label и selector.')
    if len({f['selector'] for f in fields}) != len(fields):
        raise ValueError('В файле повторяются селекторы. Удалите дубли перед сопоставлением.')
    return fields


def build_pairs(source, destination, choices, system='redmine', project=None, defaults=None):
    pairs = []
    used = set()
    for row, (field, index) in enumerate(zip(source, choices)):
        if index < 0:
            continue
        target = destination[index]
        if target['selector'] in used:
            raise ValueError('Одно целевое поле выбрано несколько раз.')
        used.add(target['selector'])
        pairs.append(dict(label=field['label'], selector=field['selector'],
                          target='mapped', target_system=system,
                          target_selector=target['selector'], target_label=target['label']))
        if project:
            pairs[-1]['target_project'] = project
        if defaults is not None and defaults[row].strip():
            pairs[-1]['default_value'] = defaults[row].strip()
    if not pairs:
        raise ValueError('Выберите хотя бы одну пару.')
    return pairs


class MappingWindow(tk.Toplevel):
    def __init__(self, parent):
        super().__init__(parent)
        self.title('Сопоставление полей Jira с целевой системой')
        self.geometry('1250x650')
        self.source = []
        self.destination = []
        self.choices = []
        self.paths = [tk.StringVar(value=str(PROFILE_FILE.parent / name)) for name in ('selected_fields.json', 'selected_fields_to.json')]
        top = ttk.Frame(self, padding=12)
        top.pack(fill='x')
        self.route = tk.StringVar(value=next(iter(ROUTES)))
        ttk.Label(top, text='Направление').grid(row=5, column=0, sticky='w')
        ttk.Combobox(top, textvariable=self.route, values=list(ROUTES), state='readonly', width=45).grid(row=5, column=1, sticky='w', pady=8)
        for i, label in enumerate(('Файл исходной Jira', 'Файл целевой системы')):
            ttk.Label(top, text=label).grid(row=i, column=0, sticky='w')
            ttk.Entry(top, textvariable=self.paths[i], width=85).grid(row=i, column=1, padx=8, pady=5)
            ttk.Button(top, text='Обзор', command=lambda i=i: self.browse(i)).grid(row=i, column=2)
        ttk.Button(top, text='Загрузить поля', command=self.load).grid(row=2, column=1, sticky='w', pady=8)
        actions = ttk.Frame(top)
        actions.grid(row=4, column=0, columnspan=3, sticky='w', pady=8)
        ttk.Button(actions, text='💾 Сохранить названия полей', command=self.save_names).pack(side='left', padx=4)
        ttk.Button(actions, text='Сопоставить одинаковые названия', command=self.match_names).pack(side='left', padx=4)
        ttk.Button(actions, text='Загрузить сохранённый маппинг', command=self.import_mapping).pack(side='left', padx=4)
        ttk.Label(top, text='Для каждого исходного поля выберите целевое поле. «Не переносить» исключает поле.').grid(row=3, column=0, columnspan=3)
        container = ttk.Frame(self)
        container.pack(fill='both', expand=True)
        canvas = tk.Canvas(container, highlightthickness=0)
        scrollbar = ttk.Scrollbar(container, orient='vertical', command=canvas.yview)
        canvas.configure(yscrollcommand=scrollbar.set)
        scrollbar.pack(side='right', fill='y')
        canvas.pack(side='left', fill='both', expand=True)
        self.rows = ttk.Frame(canvas, padding=12)
        canvas.create_window((0, 0), window=self.rows, anchor='nw')
        self.rows.bind('<Configure>', lambda e: canvas.configure(scrollregion=canvas.bbox('all')))
        bottom = ttk.Frame(self, padding=12)
        bottom.pack(fill='x')
        ttk.Button(bottom, text='Сохранить маппинг в файл', command=self.export).pack(side='left', padx=4)
        ttk.Button(bottom, text='Применить для выбранного направления', command=self.apply).pack(side='left', padx=4)
        self.status = tk.StringVar()
        ttk.Label(bottom, textvariable=self.status).pack(side='left', padx=8)
        if all(Path(p.get()).exists() for p in self.paths):
            self.load()
        install_clipboard(self)

    def browse(self, i):
        path = filedialog.askopenfilename(parent=self, filetypes=[('JSON / JS с JSON-содержимым', '*.json *.js'), ('Все файлы', '*.*')])
        if path:
            self.paths[i].set(path)

    def load(self):
        try:
            source, destination = [read_export(p.get()) for p in self.paths]
        except (OSError, ValueError) as error:
            messagebox.showerror('Ошибка файла', str(error), parent=self)
            return
        self.source, self.destination = source, destination
        self.default_vars = [tk.StringVar() for _ in destination]
        self.value_maps = [{} for _ in source]
        self.loaded_paths = [Path(p.get()).resolve() for p in self.paths]
        self.name_vars = [[tk.StringVar(value=f['label']) for f in fields] for fields in (source, destination)]
        self.choices = []
        for widget in self.rows.winfo_children():
            widget.destroy()
        values = ['Не переносить'] + [f['label'] for f in destination]
        ttk.Label(self.rows, text='Название поля Jira (можно изменить)').grid(row=0, column=0, sticky='w')
        ttk.Label(self.rows, text='Соответствующее целевое поле').grid(row=0, column=1, sticky='w')
        for i, field in enumerate(source):
            cell = ttk.Frame(self.rows)
            cell.grid(row=i+1, column=0, sticky='w', pady=6)
            ttk.Entry(cell, textvariable=self.name_vars[0][i], width=43).pack(anchor='w')
            ttk.Label(cell, text=field['selector']).pack(anchor='w')
            combo = ttk.Combobox(self.rows, values=values, state='readonly', width=65)
            combo.current(0)
            combo.grid(row=i+1, column=1, padx=8)
            self.choices.append(combo)
            ttk.Button(self.rows, text='Сопоставить значения…', command=lambda row=i: self.edit_values(row)).grid(row=i+1, column=2, padx=8)
        offset = len(source) + 2
        ttk.Label(self.rows, text='Названия целевых полей (можно изменить)').grid(row=offset, column=0, columnspan=2, sticky='w', pady=12)
        ttk.Label(self.rows, text='По умолчанию (без источника / если пуст)').grid(row=offset, column=2, sticky='w')
        for i, field in enumerate(destination):
            ttk.Entry(self.rows, textvariable=self.name_vars[1][i], width=43).grid(row=offset+i+1, column=0, sticky='w', pady=5)
            ttk.Label(self.rows, text=field['selector']).grid(row=offset+i+1, column=1, sticky='w', padx=8)
            self.name_vars[1][i].trace_add('write', self.refresh_names)
            ttk.Entry(self.rows, textvariable=self.default_vars[i], width=28).grid(row=offset+i+1, column=2, padx=8)
        self.status.set('Поля загружены')

    def refresh_names(self, *_):
        indices = [c.current() for c in self.choices]
        # Indices keep existing pairs intact while the display names change.
        values = ['Не переносить'] + [v.get() for v in self.name_vars[1]]
        for combo, index in zip(self.choices, indices):
            combo.configure(values=values)
            combo.current(max(0, index))

    def edit_values(self, row):
        if self.choices[row].current() <= 0:
            messagebox.showwarning('Значения', 'Сначала выберите целевое поле.', parent=self)
            return
        dialog = tk.Toplevel(self)
        dialog.title('Значения: ' + self.name_vars[0][row].get())
        dialog.geometry('700x420')
        dialog.transient(self)
        dialog.grab_set()
        frame = ttk.Frame(dialog, padding=12)
        frame.pack(fill='both', expand=True)
        table = ttk.Treeview(frame, columns=('source', 'target'), show='headings', selectmode='browse')
        table.heading('source', text='Значение в исходной Jira')
        table.heading('target', text='Значение в целевой системе')
        table.pack(fill='both', expand=True)
        for source, target in self.value_maps[row].items():
            table.insert('', 'end', values=(source, target))
        source_var, target_var = tk.StringVar(), tk.StringVar()
        ttk.Label(frame, text='Исходное значение').pack(anchor='w')
        ttk.Entry(frame, textvariable=source_var).pack(fill='x')
        ttk.Label(frame, text='Целевое значение').pack(anchor='w')
        ttk.Entry(frame, textvariable=target_var).pack(fill='x')
        def select(_):
            if table.selection():
                values = table.item(table.selection()[0], 'values')
                source_var.set(values[0]); target_var.set(values[1])
        table.bind('<<TreeviewSelect>>', select)
        def add():
            source, target = source_var.get().strip(), target_var.get().strip()
            if not source or not target:
                messagebox.showwarning('Значения', 'Заполните оба значения.', parent=dialog)
                return
            for item in table.get_children():
                if table.item(item, 'values')[0] == source:
                    table.item(item, values=(source, target))
                    return
            table.insert('', 'end', values=(source, target))
        def remove():
            for item in table.selection():
                table.delete(item)
        def save():
            self.value_maps[row] = dict(table.item(item, 'values') for item in table.get_children())
            self.status.set('Пары значений изменены. Сохраните или примените маппинг.')
            dialog.destroy()
        buttons = ttk.Frame(frame)
        buttons.pack(fill='x', pady=8)
        for label, command in [('Добавить / обновить', add), ('Удалить', remove), ('Готово', save), ('Отмена', dialog.destroy)]:
            ttk.Button(buttons, text=label, command=command).pack(side='left', padx=3)
        install_clipboard(dialog)

    def sync_names(self):
        if not self.source or not self.destination:
            raise ValueError('Сначала загрузите оба файла.')
        names = [[v.get().strip() for v in group] for group in self.name_vars]
        for group in names:
            if any(not name for name in group):
                raise ValueError('Названия полей не должны быть пустыми.')
            if len({name.casefold() for name in group}) != len(group):
                raise ValueError('Названия внутри каждого файла должны быть уникальными.')
        for fields, group in zip((self.source, self.destination), names):
            for field, name in zip(fields, group):
                field['label'] = name

    def match_names(self):
        try:
            self.sync_names()
            targets = {f['label'].casefold(): i+1 for i, f in enumerate(self.destination)}
            for field, combo in zip(self.source, self.choices):
                combo.current(targets.get(field['label'].casefold(), 0))
            self.status.set('Совпадающие названия сопоставлены')
        except ValueError as error:
            messagebox.showerror('Названия', str(error), parent=self)

    def save_names(self):
        try:
            self.sync_names()
            if self.loaded_paths[0] == self.loaded_paths[1]:
                raise ValueError('Выберите два разных файла.')
            documents = []
            for path, fields in zip(self.loaded_paths, (self.source, self.destination)):
                document = json.loads(path.read_text(encoding='utf-8-sig'))
                if [f['selector'] for f in document['fields']] != [f['selector'] for f in fields]:
                    raise ValueError('Состав файла изменился. Загрузите поля заново.')
                for stored, edited in zip(document['fields'], fields):
                    stored['label'] = edited['label']
                documents.append(document)
            for path, document in zip(self.loaded_paths, documents):
                temporary = path.with_suffix(path.suffix + '.tmp')
                temporary.write_text(json.dumps(document, ensure_ascii=False, indent=2), encoding='utf-8')
                temporary.replace(path)
            self.status.set('Названия сохранены в оба файла')
        except (OSError, ValueError, KeyError, TypeError) as error:
            messagebox.showerror('Сохранение названий', str(error), parent=self)

    def pairs(self):
        self.sync_names()
        system, project, _ = ROUTES[self.route.get()]
        choices = [c.current() - 1 for c in self.choices]
        pairs = build_pairs(self.source, self.destination, choices, system, project) if any(i >= 0 for i in choices) else []
        maps = {f['selector']: values for f, values in zip(self.source, self.value_maps)}
        for pair in pairs:
            if maps[pair['selector']]:
                pair['value_mapping'] = dict(maps[pair['selector']])
        by_target = {p['target_selector']: p for p in pairs}
        for field, variable in zip(self.destination, self.default_vars):
            value = variable.get().strip()
            if not value:
                continue
            pair = by_target.get(field['selector'])
            if pair is None:
                pair = dict(label=field['label'], selector='', target='mapped',
                            target_system=system, target_selector=field['selector'],
                            target_label=field['label'], default_only=True)
                if project:
                    pair['target_project'] = project
                pairs.append(pair)
            pair['default_value'] = value
        if not pairs:
            raise ValueError('Выберите пару или задайте значение целевого поля по умолчанию.')
        return pairs

    def import_mapping(self):
        try:
            if not self.source or not self.destination:
                raise ValueError('Сначала загрузите файлы полей.')
            filename = filedialog.askopenfilename(parent=self, filetypes=[('JSON', '*.json')])
            if not filename:
                return
            pairs = json.loads(Path(filename).read_text(encoding='utf-8-sig'))
            system, project, _ = ROUTES[self.route.get()]
            if not isinstance(pairs, list) or any(not isinstance(p, dict) or p.get('target_system') != system or p.get('target_project') != project for p in pairs):
                raise ValueError('Файл не соответствует выбранному направлению.')
            destinations = {f['selector']: i+1 for i, f in enumerate(self.destination)}
            sources = {f['selector']: i for i, f in enumerate(self.source)}
            for pair in pairs:
                mapping = pair.get('value_mapping', {})
                if not isinstance(mapping, dict) or any(not isinstance(k, str) or not isinstance(v, str) for k, v in mapping.items()):
                    raise ValueError('Некорректное сопоставление значений.')
                if (not pair.get('default_only') and pair.get('selector') not in sources) or pair.get('target_selector') not in destinations or not isinstance(pair.get('default_value', ''), str):
                    raise ValueError('Поля маппинга отсутствуют в загруженных файлах либо значение по умолчанию некорректно.')
            for combo in self.choices:
                combo.current(0)
            for var in self.default_vars:
                var.set('')
            self.value_maps = [{} for _ in self.source]
            for pair in pairs:
                target_index = destinations[pair['target_selector']]
                if not pair.get('default_only'):
                    i = sources[pair['selector']]
                    self.choices[i].current(target_index)
                    self.value_maps[i] = dict(pair.get('value_mapping', {}))
                self.default_vars[target_index-1].set(pair.get('default_value', ''))
            self.status.set('Маппинг и значения по умолчанию загружены')
        except (OSError, ValueError) as error:
            messagebox.showerror('Загрузка маппинга', str(error), parent=self)

    def export(self):
        try:
            pairs = self.pairs()
            filename = filedialog.asksaveasfilename(parent=self, initialfile=ROUTES[self.route.get()][2], defaultextension='.json', filetypes=[('JSON', '*.json')])
            if filename:
                path = Path(filename)
                temporary = path.with_suffix(path.suffix + '.tmp')
                temporary.write_text(json.dumps(pairs, ensure_ascii=False, indent=2), encoding='utf-8')
                temporary.replace(path)
                self.status.set(f'Сохранено пар: {len(pairs)}')
        except (OSError, ValueError) as error:
            messagebox.showerror('Сохранение', str(error), parent=self)

    def apply(self):
        try:
            pairs = self.pairs()
            existing = load_fields()
            system, project, _ = ROUTES[self.route.get()]
            matches = lambda f: f.get('target_system') == system and f.get('target_project') == project
            if any(matches(f) for f in existing):
                if not messagebox.askyesno('Замена сопоставлений', 'Заменить ранее настроенные пары выбранного направления?', parent=self):
                    return
            save_fields([f for f in existing if not matches(f)] + pairs)
            self.status.set('Применено. Перезапустите мигратор.')
        except (OSError, ValueError) as error:
            messagebox.showerror('Применение', str(error), parent=self)


def main():
    root = tk.Tk()
    root.withdraw()
    window = MappingWindow(root)
    root.wait_window(window)
    root.destroy()


if __name__ == '__main__':
    main()
