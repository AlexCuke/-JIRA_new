import sys
import unittest
from types import SimpleNamespace
from unittest.mock import Mock, patch, create_autospec

from gspread import Worksheet

from jira_history_export import fetch_history_issues, HISTORY_JQL, enrich_sheet_values
from google_sheets_export import append_issue_rows, append_issue_row, GoogleSheetsExportError


class HistoryExportTests(unittest.TestCase):
    def test_sheet_metadata_is_read_without_form_mapping(self):
        page = Mock()
        page.context.request.get.return_value = Mock(ok=True, json=Mock(return_value={"fields": {
            "duedate": "2026-09-18", "status": {"name": "В работе"},
            "fixVersions": [{"name": "5.4.0"}]}}))
        values = enrich_sheet_values(page, 'https://jira', 'A-1', {'Название': 'Task'})
        self.assertEqual(values['Срок_Исполнения'], '2026-09-18')
        self.assertEqual(values['Статус'], 'В работе')
        self.assertEqual(values['Версия'], '5.4.0')

    def test_required_sheet_columns_are_filled_with_old_mapping(self):
        worksheet = create_autospec(Worksheet, instance=True)
        worksheet.row_values.return_value = ['Название', 'Срок', 'Версия', 'Статус', 'Jira- Внутр. /redmine']
        client = Mock()
        client.open_by_url.return_value.worksheet.return_value = worksheet
        fake = SimpleNamespace(service_account=Mock(return_value=client), WorksheetNotFound=type('Missing', (Exception,), {}))
        settings = {'credentials_file': 'unused', 'spreadsheet_url': 'unused', 'worksheet_name': 'Лист',
                    'header_row': 1, 'column_mapping': {'Название': 'Название', '__destination_url': 'Jira- Внутр. /redmine'}}
        issue = {'field_values': {'Название': 'Task', 'Срок_Исполнения': '2026-09-18', 'Версия': '5.4.0', 'Статус': 'В работе'},
                 'destination_url': 'https://jira/browse/KIS-1'}
        with patch.dict(sys.modules, {'gspread': fake}), patch('google_sheets_export.validate_settings'), patch('google_sheets_export._center_columns'):
            append_issue_rows(settings, [issue])
        worksheet.insert_rows.assert_called_once_with([['Task', '18.09.26', '5.4.0', 'В работе', 'https://jira/browse/KIS-1']], row=2, value_input_option='RAW')

    def page_with_batches(self, batches):
        page = Mock()
        page.context.request.get.side_effect = [
            Mock(ok=True, json=Mock(return_value=batch)) for batch in batches
        ]
        return page

    def test_pagination_uses_actual_server_page_size(self):
        page = self.page_with_batches([
            {"issues": [{"key": "A-3"}, {"key": "A-2"}], "total": 3, "startAt": 0},
            {"issues": [{"key": "A-1"}], "total": 3, "startAt": 2},
        ])
        self.assertEqual([x["key"] for x in fetch_history_issues(page, "https://jira.example")],
                         ["A-3", "A-2", "A-1"])
        params = page.context.request.get.call_args.kwargs["params"]
        self.assertEqual(params["startAt"], 2)
        self.assertEqual(params["jql"], HISTORY_JQL)

    def test_empty_and_incomplete_results(self):
        page = self.page_with_batches([{"issues": [], "total": 0}])
        self.assertEqual(fetch_history_issues(page, "https://jira.example"), [])
        page = self.page_with_batches([{"issues": [], "total": 2}])
        with self.assertRaises(RuntimeError):
            fetch_history_issues(page, "https://jira.example")

    def test_repeated_page_is_not_silently_exported(self):
        page = self.page_with_batches([
            {"issues": [{"key": "A-1"}], "total": 2},
            {"issues": [{"key": "A-1"}], "total": 2},
        ])
        with self.assertRaises(RuntimeError):
            fetch_history_issues(page, "https://jira.example")

    def test_sheet_batch_preserves_order_and_omits_destination(self):
        worksheet = create_autospec(Worksheet, instance=True)
        worksheet.row_values.return_value = ["Название", "Источник", "Цель", "Исполнитель"]
        client = Mock()
        client.open_by_url.return_value.worksheet.return_value = worksheet
        fake = SimpleNamespace(service_account=Mock(return_value=client), WorksheetNotFound=type("Missing", (Exception,), {}))
        settings = {"credentials_file": "unused", "spreadsheet_url": "unused", "worksheet_name": "Tasks",
                    "header_row": 2, "column_mapping": {"Название": "Название", "__source_url": "Источник", "__assignee": "Исполнитель"}}
        rows = [{"field_values": {"Название": title}, "source_url": key, "assignee": person}
                for title, key, person in [("=literal", "A-2", "Анна"), ("Вторая", "A-1", "")]]
        with patch.dict(sys.modules, {"gspread": fake}), patch("google_sheets_export.validate_settings"), patch("google_sheets_export._center_columns"):
            append_issue_rows(settings, rows)
            worksheet.insert_rows.assert_called_once_with(
                [["=literal", "A-2", "", "Анна"], ["Вторая", "A-1", "", ""]],
                row=3, value_input_option="RAW")
            worksheet.insert_rows.reset_mock()
            settings["column_mapping"]["missing"] = "Нет колонки"
            with self.assertRaises(GoogleSheetsExportError):
                append_issue_rows(settings, rows)
            worksheet.insert_rows.assert_not_called()

    def test_single_export_keeps_destination(self):
        with patch("google_sheets_export.append_issue_rows") as write:
            append_issue_row({}, "A-1", "1", "source", {}, "User", "target")
        self.assertEqual(write.call_args.args[1][0]["destination_url"], "target")
        self.assertEqual(write.call_args.kwargs["value_input_option"], "USER_ENTERED")

    def test_refact_rows_are_inserted_only_into_required_sheet(self):
        kis_sheet, refact_sheet, old_kis_sheet = [create_autospec(Worksheet, instance=True) for _ in range(3)]
        for sheet in (kis_sheet, refact_sheet, old_kis_sheet):
            sheet.row_values.return_value = ["Название"]
        spreadsheet = Mock()
        spreadsheet.worksheet.side_effect = {
            "Лист1": kis_sheet, "КИС_2_0": refact_sheet, "Лист": old_kis_sheet,
        }.__getitem__
        client = Mock()
        client.open_by_url.return_value = spreadsheet
        fake = SimpleNamespace(service_account=Mock(return_value=client),
                               WorksheetNotFound=type("Missing", (Exception,), {}))
        settings = {"credentials_file": "unused", "spreadsheet_url": "unused",
                    "worksheet_name": "Лист1", "header_row": 1,
                    "column_mapping": {"Название": "Название"}}
        rows = [
            {"issue_key": "KISEMIAS2025-1", "field_values": {"Название": "КИС"}},
            {"issue_key": "refact-2", "field_values": {"Название": "Рефакт 1"}},
            {"source_url": "https://jira.mos.social/browse/REFACT-3?x=1",
             "field_values": {"Название": "Рефакт 2"}},
            {"issue_key": "kisemias2019-4", "field_values": {"Название": "КИС 2019"}},
            {"source_url": "https://jira.mos.social/browse/KISEMIAS2019-5",
             "field_values": {"Название": "КИС 2019 ссылка"}},
        ]
        with patch.dict(sys.modules, {"gspread": fake}), patch("google_sheets_export.validate_settings"), patch("google_sheets_export._center_columns"):
            append_issue_rows(settings, rows)
        kis_sheet.insert_rows.assert_not_called()
        refact_sheet.insert_rows.assert_called_once_with(
            [["Рефакт 1"], ["Рефакт 2"]], row=2, value_input_option="RAW")
        old_kis_sheet.insert_rows.assert_called_once_with(
            [["КИС"], ["КИС 2019"], ["КИС 2019 ссылка"]], row=2, value_input_option="RAW")
        self.assertEqual(settings["worksheet_name"], "Лист1")

    def test_two_sheet_option_copies_only_kisemias2025(self):
        rows = [{"issue_key": key, "field_values": {}} for key in
                ("KISEMIAS2019-1", "KISEMIAS2025-2", "REFACT-3")]
        for enabled in (False, True):
            with self.subTest(enabled=enabled), patch("google_sheets_export._append_issue_rows_to_worksheet") as write:
                settings = {"worksheet_name": "Wrong", "kisemias2025_two_sheets": enabled}
                append_issue_rows(settings, rows, value_input_option="USER_ENTERED")
                batches = {call.args[0]["worksheet_name"]: call.args[1] for call in write.call_args_list}
                self.assertEqual(batches["Лист"], rows[:2])
                self.assertEqual(batches["КИС_2_0"], rows[1:] if enabled else rows[2:])
                self.assertEqual(len(write.call_args_list), 2)
                self.assertTrue(all(call.args[2] == "USER_ENTERED" for call in write.call_args_list))

    def test_two_sheet_option_routes_kisemias2025_from_source_url(self):
        row = {"source_url": "https://jira.mos.social/browse/kisemias2025-2", "field_values": {}}
        with patch("google_sheets_export._append_issue_rows_to_worksheet") as write:
            append_issue_rows({"worksheet_name": "Wrong", "kisemias2025_two_sheets": True}, [row])
        self.assertEqual([call.args[0]["worksheet_name"] for call in write.call_args_list], ["Лист", "КИС_2_0"])


if __name__ == "__main__":
    unittest.main()
