"""Локальный список разработчиков для выбора перед миграцией."""

import json
from pathlib import Path
from auth_logging import _application_dir

from settings import DEFAULT_ASSIGNEE


PROFILE_FILE = _application_dir() / "developers.json"


def load_developers():
    if not PROFILE_FILE.exists():
        return [DEFAULT_ASSIGNEE]
    try:
        values = json.loads(PROFILE_FILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return [DEFAULT_ASSIGNEE]
    names = [str(value).strip() for value in values if str(value).strip()]
    return list(dict.fromkeys(names)) or [DEFAULT_ASSIGNEE]


def save_developers(names):
    values = list(dict.fromkeys(name.strip() for name in names if name.strip()))
    PROFILE_FILE.write_text(json.dumps(values, ensure_ascii=False, indent=2), encoding="utf-8")
