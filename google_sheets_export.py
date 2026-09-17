"""Экспорт данных задачи в Google Таблицы через сервисный аккаунт."""

import json
import re
from datetime import datetime
from pathlib import Path

from bs4 import BeautifulSoup


SETTINGS_FILE = Path(__file__).resolve().parent / "google_sheets_settings.json"

# Колонки листа «Задачи (копия)». Их можно изменить в интерфейсе маппинга.
TASK_SHEET_COLUMNS = (
    "№", "Наименование", "Срок", "№ ", "Статус", "Jira- Москва",
    "Jira- Внутр. /remine", "Исполнитель", "Комментарии", "Что затрагивает",
)
DEFAULT_COLUMN_MAPPING = {
    "Название": "Наименование",
    "Срок_Исполнения": "Срок",
    "__issue_number": "№ ",
    "__source_url": "Jira- Москва",
    "__destination_url": "Jira- Внутр. /remine",
    "__assignee": "Исполнитель",
    "Статус": "Статус",
    "Версия": "Версия",
}


class GoogleSheetsExportError(RuntimeError):
    """Ошибка настройки или записи в Google Таблицы."""


def migration_settings(settings, prefix):
    """Выбирает лист по проекту исходной задачи, не меняя общие настройки."""
    worksheets = {
        "KISEMIAS2019": "Лист",
        "KISEMIAS2025": "Лист",
        "REFACT": "КИС_2_0",
    }
    result = dict(settings)
    project = prefix.strip().rstrip("-").upper()
    if project in worksheets:
        result["worksheet_name"] = worksheets[project]
    return result


def format_due_date(value) -> str:
    """Преобразует срок Jira в формат таблицы ДД.ММ.ГГ или возвращает «А»."""
    text = str(value or "").strip()
    if not text:
        return "А"
    # Jira REST обычно отдаёт дату в ISO-формате: 2026-03-02.
    match = re.match(r"^(\d{4})-(\d{2})-(\d{2})", text)
    if match:
        year, month, day = match.groups()
        return f"{day}.{month}.{year[2:]}"
    for pattern in ("%d.%m.%y", "%d.%m.%Y", "%d/%m/%y", "%d/%m/%Y"):
        try:
            return datetime.strptime(text, pattern).strftime("%d.%m.%y")
        except ValueError:
            continue
    return text


def load_settings():
    if not SETTINGS_FILE.exists():
        return {
            "spreadsheet_url": "", "worksheet_name": "Задачи (копия)",
            "credentials_file": "", "header_row": 2,
            "column_mapping": dict(DEFAULT_COLUMN_MAPPING),
            "kisemias2025_two_sheets": False,
        }
    try:
        settings = json.loads(SETTINGS_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise GoogleSheetsExportError("Файл google_sheets_settings.json повреждён.") from error
    mapping = {
        str(source): str(column) for source, column in
        settings.get("column_mapping", DEFAULT_COLUMN_MAPPING).items()
        if str(column).strip() and str(column) != "Не переносить"
    }
    # Existing configurations predate the destination-link field.
    mapping.setdefault("__destination_url", "Jira- Внутр. /remine")
    return {
        "spreadsheet_url": str(settings.get("spreadsheet_url", "")).strip(),
        "worksheet_name": str(settings.get("worksheet_name", "Задачи (копия)")).strip() or "Задачи (копия)",
        "credentials_file": str(settings.get("credentials_file", "")).strip(),
        "header_row": int(settings.get("header_row", 2) or 2),
        "column_mapping": mapping,
        "kisemias2025_two_sheets": bool(settings.get("kisemias2025_two_sheets", False)),
    }


def save_settings(settings):
    SETTINGS_FILE.write_text(
        json.dumps(settings, ensure_ascii=False, indent=2), encoding="utf-8"
    )


def validate_settings(settings):
    if not settings.get("spreadsheet_url"):
        raise GoogleSheetsExportError("Укажите ссылку на Google Таблицу.")
    credentials_file = Path(settings.get("credentials_file", ""))
    if not credentials_file.is_file():
        raise GoogleSheetsExportError("Выберите существующий JSON-ключ сервисного аккаунта Google.")
    try:
        credentials = json.loads(credentials_file.read_text(encoding="utf-8-sig"))
    except (OSError, UnicodeDecodeError, json.JSONDecodeError) as error:
        raise GoogleSheetsExportError(
            "Выбранный файл не является корректным JSON-ключом сервисного аккаунта Google. "
            "Скачайте ключ типа Service account key из Google Cloud и выберите этот JSON-файл."
        ) from error
    required_keys = {"type", "client_email", "private_key", "token_uri"}
    if credentials.get("type") != "service_account" or not required_keys.issubset(credentials):
        raise GoogleSheetsExportError(
            "Выбранный JSON не является ключом сервисного аккаунта Google. "
            "Нужен файл с полями type=service_account, client_email и private_key."
        )


def _permission_error(settings, action):
    """Сообщение, когда таблица не расшарена сервисному аккаунту."""
    try:
        credentials_file = Path(settings["credentials_file"])
        account = str(json.loads(credentials_file.read_text(encoding="utf-8-sig")).get("client_email", ""))
    except (KeyError, OSError, UnicodeDecodeError, json.JSONDecodeError):
        account = ""
    hint = f" Добавьте в общий доступ сервисный аккаунт {account} с ролью «Редактор»." if account else ""
    return GoogleSheetsExportError(f"Нет доступа к Google Таблице для {action}.{hint}")


def _as_cell_value(value):
    if value is None:
        return ""
    if isinstance(value, dict):
        html = value.get("html", "")
        return BeautifulSoup(html, "html.parser").get_text(" ", strip=True)
    return str(value).strip()


def _clean_issue_title(value):
    """Убирает служебный префикс проекта из названия для Google Таблицы."""
    title = _as_cell_value(value)
    # Jira sometimes adds a project/key line before the real subject, e.g.
    # "КИС ЕМИАСKIS-1388\nВ ПМУ ...". The sheet must contain only the subject.
    return re.sub(r"^\s*(?:КИС\s*ЕМИАС\s*)?KIS-\d+\s*[\r\n ]*", "", title, flags=re.IGNORECASE).strip()


def _center_columns(worksheet, headers, first_row, last_row, column_names=("Срок", "Версия")):
    """Выравнивает добавленные или обновлённые даты и версии по центру."""
    if last_row < first_row:
        return
    from gspread.utils import rowcol_to_a1

    formats = []
    for name in column_names:
        if name in headers:
            column = headers.index(name) + 1
            cell_format = {"horizontalAlignment": "CENTER"}
            if name == "Срок":
                # Keep real dates sortable while displaying them as 02.03.26.
                cell_format["numberFormat"] = {"type": "DATE", "pattern": "dd.MM.yy"}
            formats.append({
                "range": f"{rowcol_to_a1(first_row, column)}:{rowcol_to_a1(last_row, column)}",
                "format": cell_format,
            })
    if formats:
        worksheet.batch_format(formats)


def append_issue_row(
    settings, issue_key, issue_number, source_url, field_values, assignee,
    destination_url="",
):
    """Добавляет одну задачу с привычным маппингом."""
    append_issue_rows(settings, [{
        "issue_key": issue_key, "issue_number": issue_number,
        "source_url": source_url, "field_values": field_values,
        "assignee": assignee, "destination_url": destination_url,
    }], value_input_option="USER_ENTERED")


def append_issue_rows(settings, issues, value_input_option="RAW"):
    """Выбирает листы по проекту; для KISEMIAS2025 возможна копия на КИС_2_0."""
    groups = {}
    for issue in issues:
        key = str(issue.get("issue_key", "")).strip().upper()
        source_url = str(issue.get("source_url", ""))
        # Проверяем и ключ, и исходную ссылку: настройка листа не должна
        # отправить задачу REFACT на другой лист даже при пустом ключе.
        is_refact = key.startswith("REFACT-") or bool(
            re.search(r"/browse/REFACT-\d+(?:[/?#]|$)", source_url, re.IGNORECASE)
        )
        is_kisemias2019 = key.startswith("KISEMIAS2019-") or bool(
            re.search(r"/browse/KISEMIAS2019-\d+(?:[/?#]|$)", source_url, re.IGNORECASE)
        )
        is_kisemias2025 = key.startswith("KISEMIAS2025-") or bool(
            re.search(r"/browse/KISEMIAS2025-\d+(?:[/?#]|$)", source_url, re.IGNORECASE)
        )
        if is_refact:
            worksheet_names = ["КИС_2_0"]
        elif is_kisemias2019 or is_kisemias2025:
            worksheet_names = ["Лист"]
            if is_kisemias2025 and settings.get("kisemias2025_two_sheets", False):
                worksheet_names.append("КИС_2_0")
        else:
            worksheet_names = [settings.get("worksheet_name", "Задачи (копия)")]
        for worksheet_name in worksheet_names:
            groups.setdefault(worksheet_name, []).append(issue)
    for worksheet_name, rows in groups.items():
        routed_settings = dict(settings, worksheet_name=worksheet_name)
        _append_issue_rows_to_worksheet(routed_settings, rows, value_input_option)


def _append_issue_rows_to_worksheet(settings, issues, value_input_option="RAW"):
    """Вставляет список на один лист, сохраняя порядок поиска."""
    if not issues:
        return
    validate_settings(settings)
    try:
        import gspread
    except ImportError as error:
        raise GoogleSheetsExportError(
            "Не установлены библиотеки Google. Выполните: python -m pip install -r requirements.txt"
        ) from error

    try:
        client = gspread.service_account(filename=settings["credentials_file"])
        spreadsheet = client.open_by_url(settings["spreadsheet_url"])
        try:
            worksheet = spreadsheet.worksheet(settings["worksheet_name"])
        except gspread.WorksheetNotFound:
            worksheet = spreadsheet.add_worksheet(title=settings["worksheet_name"], rows=1000, cols=30)

        header_row = max(1, int(settings.get("header_row", 2)))
        headers = worksheet.row_values(header_row)
        if not headers:
            raise GoogleSheetsExportError(
                f"В строке {header_row} листа нет заголовков колонок. Проверьте настройку."
            )
        rows = []
        for issue in issues:
            values = dict(issue["field_values"])
            if "Название" in values:
                values["Название"] = _clean_issue_title(values["Название"])
            values.update({
                "__issue_key": issue.get("issue_key", ""),
                "__issue_number": issue.get("issue_number", ""),
                "__source_url": issue.get("source_url", ""),
                "__destination_url": issue.get("destination_url", ""),
                "__assignee": issue.get("assignee", ""),
            })
            mapped_columns = {}
            for source, column in settings.get("column_mapping", {}).items():
                if column not in headers:
                    raise GoogleSheetsExportError(
                        f"Колонка '{column}' из маппинга не найдена в строке {header_row}."
                    )
                mapped_columns[column] = _as_cell_value(values.get(source, ""))
            # Эти сведения читаются независимо от маппинга формы миграции.
            for source, column in (("Срок_Исполнения", "Срок"), ("Версия", "Версия"), ("Статус", "Статус")):
                if source in values and column in headers:
                    mapped_columns[column] = (format_due_date(values[source]) if column == "Срок"
                                              else _as_cell_value(values[source]))
            if not mapped_columns:
                raise GoogleSheetsExportError("Не выбрана ни одна колонка для выгрузки.")
            rows.append([mapped_columns.get(header, "") for header in headers])
        # Insert immediately below the header so the newest migrated issue is
        # always the first data row and existing rows are shifted down.
        worksheet.insert_rows(
            rows,
            row=header_row + 1,
            value_input_option=value_input_option,
        )
        _center_columns(worksheet, headers, header_row + 1, header_row + len(rows))
    except GoogleSheetsExportError:
        raise
    except PermissionError as error:
        raise _permission_error(settings, "записи данных") from error
    except Exception as error:
        raise GoogleSheetsExportError(f"Не удалось записать данные в Google Таблицу: {error}") from error


def update_issue_statuses(settings, issue_values):
    """Обновляет статус и срок существующих строк по ключу исходной Jira."""
    if not issue_values:
        return {"updated": 0, "not_found": []}
    validate_settings(settings)
    try:
        import gspread
        from gspread.utils import rowcol_to_a1
        client = gspread.service_account(filename=settings["credentials_file"])
        worksheet = client.open_by_url(settings["spreadsheet_url"]).worksheet(
            settings["worksheet_name"]
        )
        header_row = max(1, int(settings.get("header_row", 2)))
        rows = worksheet.get_all_values()
        if len(rows) < header_row:
            raise GoogleSheetsExportError(f"В строке {header_row} листа нет заголовков колонок.")
        headers = rows[header_row - 1]
        for column in ("Версия", "Статус", "Срок"):
            if column not in headers:
                raise GoogleSheetsExportError(
                    f"В строке {header_row} не найдена колонка '{column}'."
                )
        fix_versions_col = headers.index("Версия") + 1
        status_col, due_col = headers.index("Статус") + 1, headers.index("Срок") + 1
        source_column = settings.get("column_mapping", {}).get("__source_url", "Jira- Москва")
        source_col = headers.index(source_column) if source_column in headers else None
        number_columns = [index for index, name in enumerate(headers) if name.strip() in {"№", "№ "}]
        text_updates, due_date_updates, updated_rows, not_found = [], [], [], []
        for key, data in issue_values.items():
            number = key.rsplit("-", 1)[-1]
            row_number = None
            number_matches = []
            for index, row in enumerate(rows[header_row:], start=header_row + 1):
                source_match = source_col is not None and source_col < len(row) and f"/browse/{key}" in row[source_col]
                key_match = any(cell.strip().upper() == key for cell in row)
                if source_match or key_match:
                    row_number = index
                    break
                if any(col < len(row) and row[col].strip() == number for col in number_columns):
                    number_matches.append(index)
            # Older rows may contain only the numeric part. Use it only when
            # it identifies exactly one row, never when projects are ambiguous.
            if row_number is None and len(number_matches) == 1:
                row_number = number_matches[0]
            if row_number is None:
                not_found.append(key)
                continue
            text_updates.extend((
                {"range": rowcol_to_a1(row_number, fix_versions_col), "values": [[data.get("fix_versions", "")]]},
                {"range": rowcol_to_a1(row_number, status_col), "values": [[data.get("status", "")]]},
            ))
            due_date_updates.append(
                {"range": rowcol_to_a1(row_number, due_col), "values": [[format_due_date(data.get("duedate"))]]}
            )
            updated_rows.append(row_number)
        if text_updates:
            # Version names such as 5.3.0 must remain text. USER_ENTERED
            # makes Google Sheets turn them into dates (5.3.2000).
            worksheet.batch_update(text_updates, value_input_option="RAW")
        if due_date_updates:
            # USER_ENTERED makes a value such as 02.03.26 a true Google Sheets
            # date rather than a text string. The marker «А» stays text.
            worksheet.batch_update(due_date_updates, value_input_option="USER_ENTERED")
            _center_columns(worksheet, headers, min(updated_rows), max(updated_rows))
        return {"updated": len(due_date_updates), "not_found": not_found}
    except GoogleSheetsExportError:
        raise
    except PermissionError as error:
        raise _permission_error(settings, "обновления статусов") from error
    except Exception as error:
        raise GoogleSheetsExportError(f"Не удалось обновить статусы в Google Таблице: {error}") from error


def get_issue_keys_to_sync(settings):
    """Возвращает ключи исходных Jira-задач, которые ещё не в релизе и не закрыты."""
    validate_settings(settings)
    try:
        import gspread
        client = gspread.service_account(filename=settings["credentials_file"])
        worksheet = client.open_by_url(settings["spreadsheet_url"]).worksheet(
            settings["worksheet_name"]
        )
        header_row = max(1, int(settings.get("header_row", 2)))
        rows = worksheet.get_all_values()
        if len(rows) < header_row:
            raise GoogleSheetsExportError(f"В строке {header_row} листа нет заголовков колонок.")
        headers = rows[header_row - 1]
        source_column = settings.get("column_mapping", {}).get("__source_url", "Jira- Москва")
        if source_column not in headers:
            raise GoogleSheetsExportError(f"Не найдена колонка ссылок '{source_column}'.")
        if "Статус" not in headers:
            raise GoogleSheetsExportError("Не найдена колонка 'Статус'.")
        source_index, status_index = headers.index(source_column), headers.index("Статус")
        excluded = {"в релиз", "закрыт", "решенные", "решённые", "в пилот", "тираж"}
        keys, skipped = [], 0
        for row in rows[header_row:]:
            source_url = row[source_index].strip() if source_index < len(row) else ""
            status = row[status_index].strip() if status_index < len(row) else ""
            if re.sub(r"\s+", " ", status.casefold()) in excluded:
                skipped += 1
                continue
            match = re.search(r"/browse/([A-Za-z][A-Za-z0-9_]*-\d+)", source_url)
            if match:
                keys.append(match.group(1).upper())
        return {"keys": list(dict.fromkeys(keys)), "skipped": skipped}
    except GoogleSheetsExportError:
        raise
    except PermissionError as error:
        raise _permission_error(settings, "чтения списка задач") from error
    except Exception as error:
        raise GoogleSheetsExportError(f"Не удалось прочитать список задач из Google Таблицы: {error}") from error
