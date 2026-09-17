import unittest
from unittest.mock import Mock, patch
import task_sync as sync


class TaskSyncTests(unittest.TestCase):
    def test_legacy_redmine_header_and_whitespace(self):
        self.assertEqual(sync.column_index([' Jira- Внутр. /redmine '], 'Jira- Внутр. /remine'), 0)
        self.assertEqual(sync.column_index([' СТАТУС\n'], 'Статус'), 0)

    def test_ambiguous_header_still_rejected(self):
        with self.assertRaises(ValueError):
            sync.column_index(['Jira- Внутр. /redmine', 'Jira- Внутр. /remine'], 'Jira- Внутр. /remine')

    def rows(self, *pairs):
        return [['title'], ['Jira- Москва', 'Jira- Внутр. /remine', 'Статус'], *pairs]

    def test_excluded_statuses_are_filtered_before_conflicts(self):
        base = sync.CONFIG['src_jira']['url'] + '/browse/'
        target = sync.CONFIG['dest_jira']['url'] + '/browse/KIS-3'
        pairs, skipped = sync.pairs_from_rows(self.rows(
            [base+'AAA-1', target, ' Закрыт '],
            [base+'AAA-2', target, 'В   РЕЛИЗ'],
            [base+'AAA-3', target, 'пилот'],
            [base+'AAA-4', target, 'В работе']), {})
        self.assertEqual(pairs, [('AAA-4', 'KIS-3', 'jira_kis')])
        self.assertEqual(len(skipped), 3)

    def test_missing_status_column_stops_sync(self):
        with self.assertRaisesRegex(ValueError, 'Статус'):
            sync.pairs_from_rows([['title'], ['Jira- Москва', 'Jira- Внутр. /remine']], {})

    def test_routes_duplicates_and_invalid_links(self):
        source = sync.CONFIG['src_jira']['url'] + '/browse/KISEMIAS2019-12'
        jira = sync.CONFIG['dest_jira']['url'] + '/browse/KIS-3'
        redmine = sync.CONFIG['dest_redmine']['url'].split('/projects/')[0] + '/issues/7'
        pairs, skipped = sync.pairs_from_rows(self.rows(
            [source, jira], [source, jira], [source, redmine], [source, ''],
            [source, 'https://unrelated.invalid/browse/KIS-3']), {})
        self.assertEqual(len(pairs), 2)
        self.assertEqual([p[2] for p in pairs], ['jira_kis', 'redmine'])
        self.assertEqual(len(skipped), 2)

    def test_conflicting_sources_stop_before_any_write(self):
        base = sync.CONFIG['src_jira']['url'] + '/browse/'
        target = sync.CONFIG['dest_jira']['url'] + '/browse/KIS-3'
        with self.assertRaisesRegex(ValueError, 'Разные исходные'):
            sync.pairs_from_rows(self.rows([base+'AAA-1', target], [base+'AAA-2', target]), {})

    def test_only_selected_nonempty_fields_are_saved(self):
        fields = [{'selector': '#source', 'target_selector': '#summary', 'label': 'Title'},
                  {'selector': '#other', 'target_selector': '#duedate', 'label': 'Due'}]
        page = Mock()
        response = page.context.request.get.return_value
        response.ok = True
        response.json.return_value = {'id': '123'}
        with patch.object(sync, 'available_fields', return_value=fields), \
             patch.object(sync, 'read_field', return_value='New title') as read, \
             patch.object(sync, 'fill_mapped_fields', return_value=True) as fill, \
             patch('jrf.JiraSourcePage'), patch('jrf.JiraDestPage'):
            result = sync.sync_pair(page, ('AAA-1', 'KIS-3', 'jira_kis'),
                                    {'jira_kis': [sync.field_id(fields[0])]}, Mock())
        self.assertTrue(result)
        read.assert_called_once()
        self.assertEqual(fill.call_args.args[1][0][1], 'New title [1]')
        page.locator.return_value.first.click.assert_called_once()

    def test_fill_failure_does_not_submit(self):
        field = {'selector': '#source', 'target_selector': '#issue_subject', 'label': 'Title'}
        page = Mock()
        with patch.object(sync, 'available_fields', return_value=[field]), \
             patch.object(sync, 'read_field', return_value='Title'), \
             patch.object(sync, 'fill_mapped_fields', return_value=False), \
             patch('jrf.JiraSourcePage'), patch('jrf.RedmineDestPage'):
            with self.assertRaises(ValueError):
                sync.sync_pair(page, ('AAA-1', '7', 'redmine'),
                               {'redmine': [sync.field_id(field)]}, Mock())
        page.locator.assert_not_called()

    def test_empty_source_does_not_open_destination(self):
        field = {'selector': '#source', 'target_selector': '#summary', 'label': 'Title'}
        with patch.object(sync, 'available_fields', return_value=[field]), \
             patch.object(sync, 'read_field', return_value=''), \
             patch('jrf.JiraSourcePage'), patch('jrf.JiraDestPage') as destination:
            self.assertFalse(sync.sync_pair(Mock(), ('AAA-1', 'KIS-3', 'jira_kis'),
                             {'jira_kis': [sync.field_id(field)]}, Mock()))
        destination.assert_not_called()


if __name__ == '__main__':
    unittest.main()
