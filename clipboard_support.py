"""Clipboard menu and Windows shortcuts for editable Tk widgets."""
import tkinter as tk
from tkinter import ttk


def install_clipboard(window):
    def editable(widget):
        if isinstance(widget, ttk.Combobox):
            return str(widget.cget('state')) == 'normal'
        return isinstance(widget, (tk.Entry, ttk.Entry, tk.Text))

    def dispatch(widget, action):
        if not editable(widget):
            return
        widget.focus_set()
        if action == 'select_all':
            if isinstance(widget, tk.Text):
                widget.tag_add('sel', '1.0', 'end-1c')
            else:
                widget.selection_range(0, 'end')
                widget.icursor('end')
        else:
            widget.event_generate(action)

    def popup(event):
        if not editable(event.widget):
            return
        menu = tk.Menu(window, tearoff=False)
        for label, action in [('Копировать', '<<Copy>>'), ('Вставить', '<<Paste>>'),
                              ('Вырезать', '<<Cut>>'), ('Выделить всё', 'select_all')]:
            menu.add_command(label=label, command=lambda a=action: dispatch(event.widget, a))
        try:
            menu.tk_popup(event.x_root, event.y_root)
        finally:
            menu.grab_release()

    # Custom bindtag precedes class bindings to avoid executing Paste twice.
    tag = f'clipboard_{window}'
    def shortcut(event):
        actions = {65: 'select_all', 67: '<<Copy>>', 86: '<<Paste>>', 88: '<<Cut>>'}
        action = actions.get(event.keycode)
        if action and editable(event.widget):
            dispatch(event.widget, action)
            return 'break'
    window.bind_class(tag, '<Control-KeyPress>', shortcut)
    window.bind_class(tag, '<Button-3>', popup)

    def attach(widget):
        if editable(widget) and tag not in widget.bindtags():
            widget.bindtags((tag,) + widget.bindtags())
        for child in widget.winfo_children():
            attach(child)
    attach(window)
    window.bind('<Map>', lambda event: attach(event.widget), add='+')
