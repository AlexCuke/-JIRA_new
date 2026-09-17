import unittest
from unittest.mock import Mock, patch
from comment_sync import copy_last_local_comment, LAST_COMMENT_FIELD, target_from_rows, sources_from_rows, find_source_issue
from settings import CONFIG
from task_sync import sync_pair


class ReverseCommentTests(unittest.TestCase):
    def test_reverse_lookup_matches_exact_local_key(self):
        source = CONFIG['src_jira']['url'].rstrip('/')
        dest = CONFIG['dest_jira']['url'].rstrip('/')
        rows = [['Jira- Москва', 'Jira- Внутр. /redmine'],
                [f'{source}/browse/KISEMIAS2025-1', f'{dest}/browse/KIS-20'],
                [f'{source}/browse/REFACT-2', f'{dest}/browse/KIS-200']]
        self.assertEqual(sources_from_rows(rows, {'header_row': 1}, 'KIS-20'), {'KISEMIAS2025-1'})

    def test_reverse_lookup_accepts_redmine_number(self):
        source = CONFIG['src_jira']['url'].rstrip('/')
        dest = CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/')
        rows = [['Jira- Москва', 'Jira- Внутр. /redmine'], [f'{source}/browse/REFACT-10', f'{dest}/issues/20']]
        self.assertEqual(sources_from_rows(rows, {'header_row': 1}, '20'), {'REFACT-10'})

    @patch('comment_sync.sources_from_rows')
    @patch('google_sheets_export.validate_settings')
    @patch('gspread.service_account')
    def test_reverse_lookup_deduplicates_and_rejects_conflicting_global_tasks(self, client, validate, lookup):
        settings = {'credentials_file': 'unused', 'spreadsheet_url': 'unused', 'worksheet_name': 'Лист'}
        lookup.side_effect = [{'REFACT-10'}, {'REFACT-10'}]
        self.assertEqual(find_source_issue(settings, 'kis-20'), ('REFACT-10', 'jira'))
        lookup.side_effect = [{'REFACT-10'}, {'KISEMIAS2025-1'}]
        with self.assertRaises(ValueError):
            find_source_issue(settings, 'KIS-20')

    def test_lookup_supports_redmine_and_deduplicates_rows(self):
        source = CONFIG['src_jira']['url'].rstrip('/') + '/browse/REFACT-10'
        destination = CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/') + '/issues/20'
        rows = [['Jira- Москва', 'Jira- Внутр. /redmine'], [source, destination], [source, destination]]
        settings = {'header_row': 1}
        self.assertEqual(target_from_rows(rows, settings, 'REFACT-10', include_redmine=True), {('20', 'redmine')})
        self.assertEqual(target_from_rows(rows, settings, 'REFACT-10'), set())

    @patch('jrf.JiraSourcePage')
    @patch('jrf.JiraDestPage')
    @patch('comment_sync.read_comments')
    def test_latest_by_date_is_copied_and_verified(self, read, dest, source):
        page = Mock()
        page.evaluate.return_value = {'ok': True, 'status': 201}
        tag = '[local-comment-sync:jira:KIS-20:2]'
        read.side_effect = [[{'id': '2', 'created': '2026-09-17T12:00:00+0300', 'body': 'Latest'},
                             {'id': '1', 'created': '2026-09-16T12:00:00+0300', 'body': 'Older'}], [], [{'body': tag}]]
        self.assertTrue(copy_last_local_comment(page, 'REFACT-10', 'KIS-20', 'jira'))
        body = page.evaluate.call_args.args[1]['body']
        self.assertIn('Latest', body)
        self.assertNotIn('Older', body)
        self.assertIn(tag, body)

    @patch('jrf.JiraSourcePage')
    @patch('jrf.JiraDestPage')
    @patch('comment_sync.read_comments')
    def test_existing_marker_prevents_duplicate(self, read, dest, source):
        page = Mock()
        read.side_effect = [[{'id': '2', 'created': '2026-09-17T12:00:00Z', 'body': 'Latest'}],
                            [{'body': '[local-comment-sync:jira:KIS-20:2]'}]]
        self.assertFalse(copy_last_local_comment(page, 'REFACT-10', 'KIS-20', 'jira'))
        page.evaluate.assert_not_called()

    @patch('jrf.JiraSourcePage')
    @patch('jrf.RedmineDestPage')
    @patch('comment_sync.read_comments')
    def test_redmine_ignores_journals_without_notes(self, read, dest, source):
        page = Mock()
        page.context.request.get.return_value = Mock(ok=True, json=Mock(return_value={'issue': {'journals': [
            {'id': 2, 'notes': 'Last note', 'created_on': '2026-09-17T12:00:00Z', 'user': {'name': 'Person'}},
            {'id': 3, 'notes': '', 'created_on': '2026-09-18T12:00:00Z'}]}}))
        read.side_effect = [[], [{'body': '[local-comment-sync:redmine:20:2]'}]]
        page.evaluate.return_value = {'ok': True, 'status': 201}
        self.assertTrue(copy_last_local_comment(page, 'REFACT-10', '20', 'redmine'))
        self.assertIn('Last note', page.evaluate.call_args.args[1]['body'])

    @patch('task_sync.available_fields', return_value=[])
    @patch('comment_sync.copy_last_local_comment', return_value=True)
    def test_reverse_checkbox_works_without_forward_fields(self, transfer, fields):
        page = Mock()
        self.assertTrue(sync_pair(page, ('REFACT-10', '20', 'redmine'), {'redmine': [LAST_COMMENT_FIELD]}, Mock()))
        transfer.assert_called_once_with(page, 'REFACT-10', '20', 'redmine')


if __name__ == '__main__':
    unittest.main()
