import unittest
from unittest.mock import Mock, patch
from sheet_data_sync import update_sheet_data, COLUMNS
from settings import CONFIG


class SheetDataSyncTests(unittest.TestCase):
    def run_update(self, selected, rows=None):
        page, sheet = Mock(), Mock()
        source = CONFIG['src_jira']['url'].rstrip('/') + '/browse/KISEMIAS2025-1'
        sheet.get_all_values.return_value = rows or [list(COLUMNS), ['Old', '', '', '', source, '', 'Old person']]
        page.context.request.get.return_value = Mock(ok=True, json=Mock(return_value={'fields': {
            'summary': 'New title', 'duedate': '2026-09-18', 'fixVersions': [{'name': '5.4.0'}],
            'status': {'name': 'В работе'}, 'assignee': {'displayName': 'Person'}}}))
        settings = {'credentials_file': 'unused', 'spreadsheet_url': 'unused', 'worksheet_name': 'Лист', 'header_row': 1}
        with patch('gspread.service_account') as client, patch('sheet_data_sync.validate_settings'), patch('jrf.JiraSourcePage'), patch('sheet_data_sync._center_columns'):
            client.return_value.open_by_url.return_value.worksheet.return_value = sheet
            result = update_sheet_data(page, settings, selected, Mock())
        return result, sheet

    def test_only_selected_column_changes(self):
        result, sheet = self.run_update(['Наименование'])
        sheet.batch_update.assert_called_once_with([{'range': 'A2', 'values': [['New title']]}], value_input_option='RAW')
        self.assertEqual(result['updated'], 1)

    def test_versions_are_text_and_dates_are_dates(self):
        result, sheet = self.run_update(['Срок', 'Версия'])
        calls = sheet.batch_update.call_args_list
        self.assertEqual(calls[0].kwargs['value_input_option'], 'RAW')
        self.assertEqual(calls[0].args[0], [{'range': 'C2', 'values': [['5.4.0']]}])
        self.assertEqual(calls[1].kwargs['value_input_option'], 'USER_ENTERED')
        self.assertEqual(calls[1].args[0], [{'range': 'B2', 'values': [['18.09.26']]}])

    def test_empty_destination_is_not_erased_or_invented(self):
        result, sheet = self.run_update(['Jira- Внутр. /redmine'])
        sheet.batch_update.assert_not_called()
        self.assertEqual(result['unavailable_links'], 1)

    def test_rows_without_source_are_skipped(self):
        result, sheet = self.run_update(['Наименование'], [list(COLUMNS), ['Old', '', '', '', '']])
        sheet.batch_update.assert_not_called()
        self.assertEqual(result['skipped'], 1)


if __name__ == '__main__':
    unittest.main()
