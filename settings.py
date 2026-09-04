"""Настройки приложения.

Секреты по-прежнему хранятся в .env; здесь указаны только их имена и
несекретные параметры систем.
"""

import os

from dotenv import load_dotenv

load_dotenv()

DEFAULT_TIMEOUT_MS = 15_000
DEFAULT_PREFIX = "KISEMIAS2019-"
AVAILABLE_PREFIXES = ("KISEMIAS2019-", "KISEMIAS2025-", "REFACT-")
TARGET_JIRA_PROJECTS = ("КИС ЕМИАС (KIS)", "КИС 2.0 (REFACT)")
SOURCE_TO_TARGET_PROJECT = {
    "KISEMIAS2019-": "КИС ЕМИАС (KIS)",
    "KISEMIAS2025-": "КИС 2.0 (REFACT)",
    "REFACT-": "КИС 2.0 (REFACT)",
}

CONFIG = {
    "src_jira": {
        "url": "https://jira.mos.social",
        "login_url": "https://jira.mos.social/login.jsp?os_destination=%2Fsecure%2FMyJiraHome.jspa",
        "user": os.getenv("SOURCE_LOGIN"),
        "pass": os.getenv("SOURCE_PASSWORD"),
    },
    "dest_jira": {
        "url": "http://jira.oblteh:8080",
        "dashboard": "http://jira.oblteh:8080/secure/Dashboard.jspa",
        "create_issue_url": "http://jira.oblteh:8080/secure/CreateIssue!default.jspa",
        "user": os.getenv("DEST_LOGIN"),
        "pass": os.getenv("DEST_PASSWORD"),
    },
    "dest_redmine": {
        "url": "https://rm.oblteh.ru/redmine/projects/mehr/issues/new",
        "user": os.getenv("REDMINE_LOGIN", "davydovae"),
        "pass": os.getenv("REDMINE_PASSWORD"),
    },
}

AVAILABLE_FIELDS = {
    "summary": "Тема задачи (Summary)",
    "description": "Описание (Description)",
    "duedate": "Срок исполнения (Due Date)",
    "cf_15608": "Кастомное поле 15608 (Направление/Продукт)",
    "cf_22106": "Кастомное поле 22106 (Компонент/Модуль)",
}

SOURCE_OPTIONS = tuple(
    f"{prefix.rstrip('-')} — {CONFIG['src_jira']['url']}/browse/{prefix}"
    for prefix in AVAILABLE_PREFIXES
)
TARGET_OPTIONS = (
    f"Новая Jira ({CONFIG['dest_jira']['url']})",
    "Redmine (https://rm.oblteh.ru)",
)
