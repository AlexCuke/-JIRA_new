import unittest
from unittest.mock import Mock, patch

from comment_sync import copy_new_comments, marker, read_comments, target_from_rows, find_target_issue
from settings import CONFIG


class CommentSyncTests(unittest.TestCase):
    def test_table_lookup_matches_exact_source_and_ignores_empty_links(self):
        source = CONFIG['src_jira']['url'].rstrip('/')
        dest = CONFIG['dest_jira']['url'].rstrip('/')
        rows = [['Источник', 'Цель'],
                [f'{source}/browse/REFACT-100', f'{dest}/browse/KIS-9'],
                [f'{source}/browse/REFACT-10', ''],
                [f'{source}/browse/REFACT-10', f'{dest}/browse/KIS-20'],
                [f'{source}/browse/REFACT-10', f'{dest}/browse/KIS-20']]
        settings = {'header_row': 1, 'column_mapping': {'__source_url': 'Источник', '__destination_url': 'Цель'}}
        self.assertEqual(target_from_rows(rows, settings, 'REFACT-10'), {'KIS-20'})

    @patch('comment_sync.target_from_rows')
    @patch('google_sheets_export.validate_settings')
    @patch('gspread.service_account')
    def test_lookup_searches_both_kisemias2025_sheets_and_deduplicates(self, client, validate, lookup):
        lookup.side_effect = [{'KIS-20'}, {'KIS-20'}]
        spreadsheet = client.return_value.open_by_url.return_value
        settings = {'credentials_file': 'unused', 'spreadsheet_url': 'unused'}
        self.assertEqual(find_target_issue(settings, 'KISEMIAS2025-10'), 'KIS-20')
        self.assertEqual([c.args[0] for c in spreadsheet.worksheet.call_args_list], ['Лист', 'КИС_2_0'])

    @patch('comment_sync.target_from_rows')
    @patch('google_sheets_export.validate_settings')
    @patch('gspread.service_account')
    def test_lookup_rejects_missing_or_ambiguous_target(self, client, validate, lookup):
        settings = {'credentials_file': 'unused', 'spreadsheet_url': 'unused'}
        for results in ([set(), set()], [{'KIS-20'}, {'REFACT-30'}]):
            lookup.side_effect = results
            with self.assertRaises(ValueError):
                find_target_issue(settings, 'KISEMIAS2025-10')

    def test_reads_all_pages(self):
        page = Mock()
        page.context.request.get.side_effect = [
            Mock(ok=True, json=Mock(return_value={"comments": [{"id": "1"}], "startAt": 0, "total": 2})),
            Mock(ok=True, json=Mock(return_value={"comments": [{"id": "2"}], "startAt": 1, "total": 2})),
        ]
        self.assertEqual([c["id"] for c in read_comments(page, "https://jira", "A-1")], ["1", "2"])
        self.assertEqual(page.context.request.get.call_args.kwargs["params"]["startAt"], 1)

    def test_empty_incomplete_page_fails(self):
        page = Mock()
        page.context.request.get.return_value = Mock(ok=True, json=Mock(return_value={"comments": [], "total": 2}))
        with self.assertRaisesRegex(RuntimeError, "неполный"):
            read_comments(page, "https://jira", "A-1")

    @patch("jrf.JiraSourcePage")
    @patch("jrf.JiraDestPage")
    @patch("comment_sync.read_comments")
    def test_copies_only_new_comments_in_one_saved_comment(self, read, dest, source):
        page = Mock()
        page.evaluate.return_value = {"ok": True, "status": 201}
        comments = [{"id": "1", "body": "Old"},
                    {"id": "2", "body": "New", "author": {"displayName": "Иван"}, "created": "2026-09-17"}]
        read.side_effect = [comments, [{"body": marker("REFACT-10", "1")}],
                            [{"body": marker("REFACT-10", "2")}]]
        self.assertEqual(copy_new_comments(page, "REFACT-10", "KIS-20"), 1)
        page.evaluate.assert_called_once()
        body = page.evaluate.call_args.args[1]["body"]
        self.assertIn("New", body)
        self.assertNotIn("Old", body)
        self.assertIn("Иван — 2026-09-17", body)
        self.assertIn(marker("REFACT-10", "2"), body)
        dest.return_value.open_existing_issue.assert_called_once_with("KIS-20")

    @patch("jrf.JiraSourcePage")
    @patch("jrf.JiraDestPage")
    @patch("comment_sync.read_comments")
    def test_repeat_creates_no_comment(self, read, dest, source):
        page = Mock()
        read.side_effect = [[{"id": "1", "body": "Text"}], [{"body": marker("REFACT-10", "1")}]]
        self.assertEqual(copy_new_comments(page, "REFACT-10", "KIS-20"), 0)
        page.evaluate.assert_not_called()

    @patch("jrf.JiraSourcePage")
    @patch("jrf.JiraDestPage")
    @patch("comment_sync.read_comments")
    def test_failed_post_is_reported(self, read, dest, source):
        page = Mock()
        page.evaluate.return_value = {"ok": False, "status": 403}
        read.side_effect = [[{"id": "1", "body": "Text"}], []]
        with self.assertRaisesRegex(RuntimeError, "403"):
            copy_new_comments(page, "REFACT-10", "KIS-20")

    @patch("jrf.JiraSourcePage")
    @patch("jrf.JiraDestPage")
    @patch("comment_sync.read_comments")
    def test_unconfirmed_save_is_reported(self, read, dest, source):
        page = Mock()
        page.evaluate.return_value = {"ok": True, "status": 201}
        read.side_effect = [[{"id": "1", "body": "Text"}], [], []]
        with self.assertRaisesRegex(RuntimeError, "не подтверждено"):
            copy_new_comments(page, "REFACT-10", "KIS-20")


if __name__ == "__main__":
    unittest.main()
