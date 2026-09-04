"""Сопоставление полей и их значений между системами.

Чтобы преобразовать отдельное значение, добавьте пару
``"значение в источнике": "значение в целевой системе"`` в нужный
словарь. Если пары нет, значение передаётся без изменений.
"""

FIELD_MAPPINGS = {
    "summary": {"source_jira": "summary", "target_jira": "summary", "redmine": "subject"},
    "description": {"source_jira": "description", "target_jira": "description", "redmine": "description"},
    "duedate": {"source_jira": "due_date", "target_jira": "due_date", "redmine": "due_date"},
    "cf_15608": {"source_jira": "custom_field_15608", "target_jira": "custom_field_10402", "redmine": "custom_field_10402"},
    "cf_22106": {"source_jira": "custom_field_22106", "target_jira": "custom_field_10403", "redmine": "custom_field_10403"},
}

# Сопоставления значений для выпадающих списков и других полей.
FIELD_VALUE_MAPPINGS = {
    "target_jira": {
        "cf_15608": {
            # "Значение в Jira-источнике": "Значение в целевой Jira",
        },
        "cf_22106": {},
    },
    "redmine": {
        "cf_15608": {
            # "Значение в Jira-источнике": "Значение в Redmine",
        },
        "cf_22106": {},
    },
}

SOURCE_TO_TARGET_PROJECT = {
    "KISEMIAS2019-": "КИС ЕМИАС (KIS)",
    "KISEMIAS2025-": "КИС 2.0 (REFACT)",
    "REFACT-": "КИС 2.0 (REFACT)",
}


def map_field_value(field_name: str, target: str, source_value: str) -> str:
    """Возвращает целевое значение или исходное, если маппинг не задан."""
    mapping = FIELD_VALUE_MAPPINGS.get(target, {}).get(field_name, {})
    return mapping.get(source_value, source_value)
