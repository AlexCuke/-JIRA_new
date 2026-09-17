import unittest
from unittest.mock import Mock, patch

from google_sheets_export import GoogleSheetsExportError, migration_settings
from migration_gui import MigrationGUI


class MigrationGoogleExportTests(unittest.TestCase):
    def test_routes_source_projects_without_changing_settings(self):
        settings = {"worksheet_name": "Лист", "spreadsheet_url": "existing-table"}
        for prefix, sheet in (("KISEMIAS2019-", "Лист"),
                              ("kisemias2025-", "Лист"),
                              ("REFACT-", "КИС_2_0")):
            with self.subTest(prefix=prefix):
                routed = migration_settings(settings, prefix)
                self.assertEqual(routed["worksheet_name"], sheet)
                self.assertEqual(routed["spreadsheet_url"], "existing-table")
        self.assertEqual(settings["worksheet_name"], "Лист")

    @patch("migration_gui.validate_settings")
    @patch("migration_gui.load_settings", return_value={"worksheet_name": "Лист"})
    @patch("migration_gui.append_issue_row")
    def test_unsaved_form_still_creates_row_with_source_data(self, append, load, validate):
        gui = Mock()
        gui._current_page.url = "https://local-jira/secure/CreateIssue!default.jspa"
        values = {"Название": "Тестовая задача"}
        MigrationGUI.export_migrated_issue_to_google(gui, "REFACT-", "123", "jira", values, "Иван")
        append.assert_called_once()
        args, kwargs = append.call_args
        self.assertEqual(args[0]["worksheet_name"], "КИС_2_0")
        self.assertEqual(args[1:3], ("REFACT-123", "123"))
        self.assertTrue(args[3].endswith("/browse/REFACT-123"))
        self.assertEqual(args[4:], (values, "Иван"))
        self.assertEqual(kwargs["destination_url"], "")

    @patch("migration_gui.validate_settings")
    @patch("migration_gui.load_settings", return_value={"worksheet_name": "Лист"})
    @patch("migration_gui.append_issue_row")
    def test_saved_destination_link_is_preserved(self, append, load, validate):
        gui = Mock()
        gui._current_page.url = "https://redmine/issues/456"
        MigrationGUI.export_migrated_issue_to_google(gui, "KISEMIAS2019-", "123", "redmine", {}, "")
        self.assertEqual(append.call_args.args[0]["worksheet_name"], "Лист")
        self.assertEqual(append.call_args.kwargs["destination_url"], gui._current_page.url)

    @patch("migration_gui.validate_settings", side_effect=GoogleSheetsExportError("Нет настроек"))
    @patch("migration_gui.load_settings", return_value={})
    @patch("migration_gui.append_issue_row")
    def test_configuration_error_is_logged_without_interrupting_migration(self, append, load, validate):
        gui = Mock()
        MigrationGUI.export_migrated_issue_to_google(gui, "KISEMIAS2025-", "123", "jira", {}, "")
        append.assert_not_called()
        self.assertIn("Нет настроек", gui.log.call_args.args[0])


if __name__ == "__main__":
    unittest.main()
