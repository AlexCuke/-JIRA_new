"""Release-to-date settings and updates of the configured task spreadsheet."""
import json
import re
from datetime import datetime, date
from auth_logging import _application_dir
from task_sync import column_index

SETTINGS_FILE = _application_dir() / 'release_dates.json'


def version_key(value):
    return re.sub(r'^версия\s+', '', value.strip(), flags=re.I).strip()


def validate_mapping(mapping):
    if not isinstance(mapping, dict):
        raise ValueError('Соответствия релизов должны быть списком пар версия — дата')
    result = {}
    for version, value in mapping.items():
        key = version_key(str(version))
        if not key or any(x in key for x in (',', ';', '\n')):
            raise ValueError('Укажите одну версию в каждой строке')
        if key in result:
            raise ValueError(f'Повторная версия: {key}')
        try:
            parsed = datetime.strptime(value.strip(), '%d.%m.%Y').date()
        except (ValueError, AttributeError):
            raise ValueError(f'Версия {key}: дата должна быть в формате ДД.ММ.ГГГГ') from None
        result[key] = parsed.strftime('%d.%m.%Y')
    return result


def load_release_dates():
    if not SETTINGS_FILE.exists():
        return {'5.4.0': '18.09.2026'}
    return validate_mapping(json.loads(SETTINGS_FILE.read_text(encoding='utf-8')))


def save_release_dates(mapping):
    temporary = SETTINGS_FILE.with_suffix('.tmp')
    temporary.write_text(json.dumps(validate_mapping(mapping), ensure_ascii=False, indent=2), encoding='utf-8')
    temporary.replace(SETTINGS_FILE)


def plan_release_dates(rows, header_row, mapping):
    mapping = validate_mapping(mapping)
    if len(rows) < header_row:
        raise ValueError('В таблице отсутствует строка заголовков')
    headers = rows[header_row - 1]
    version_col, due_col, status_col = [column_index(headers, name) for name in ('Версия', 'Срок', 'Статус')]
    updates, skipped = [], 0
    for index, row in enumerate(rows[header_row:], header_row):
        def cell(col):
            return str(row[col]).strip() if col < len(row) else ''
        status = re.sub(r'\s+', ' ', cell(status_col).casefold())
        versions = [version_key(v) for v in re.split(r'[,;\n]', cell(version_col)) if v.strip()]
        # Multiple releases with different or missing dates are ambiguous.
        dates = {mapping.get(v) for v in versions}
        if status in {'закрыт', 'в релиз', 'пилот'} or len(dates) != 1 or None in dates:
            skipped += 1
            continue
        value = next(iter(dates))
        expected = datetime.strptime(value, '%d.%m.%Y').date()
        existing = None
        for fmt in ('%d.%m.%Y', '%d.%m.%y', '%Y-%m-%d'):
            try:
                existing = datetime.strptime(cell(due_col), fmt).date()
                break
            except ValueError:
                pass
        if existing != expected:
            updates.append((index, due_col, (expected - date(1899, 12, 30)).days))
    return updates, skipped


def sync_release_dates(settings, mapping):
    import gspread
    from google_sheets_export import validate_settings
    validate_settings(settings)
    client = gspread.service_account(filename=settings['credentials_file'])
    book = client.open_by_url(settings['spreadsheet_url'])
    sheet = book.worksheet(settings['worksheet_name'])
    updates, skipped = plan_release_dates(sheet.get_all_values(), max(1, int(settings.get('header_row', 2))), mapping)
    if updates:
        book.batch_update({'requests': [{'updateCells': {
            'range': {'sheetId': sheet.id, 'startRowIndex': row, 'endRowIndex': row + 1,
                      'startColumnIndex': col, 'endColumnIndex': col + 1},
            'rows': [{'values': [{'userEnteredValue': {'numberValue': serial},
                                  'userEnteredFormat': {'numberFormat': {'type': 'DATE', 'pattern': 'dd.MM.yyyy'}}}]}],
            'fields': 'userEnteredValue,userEnteredFormat.numberFormat',
        }} for row, col, serial in updates]})
    return {'updated': len(updates), 'skipped': skipped}
