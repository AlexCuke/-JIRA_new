import unittest
from unittest.mock import Mock, patch
from task_status_sync import choose_transition, target_status, sync_status_pair


class StatusSyncTests(unittest.TestCase):
    def test_mapping_or_original(self):
        self.assertEqual(target_status(' В   работе ', 'jira', {'jira': {'В работе': 'Анализ'}}), 'Анализ')
        self.assertEqual(target_status('Открыта', 'redmine', {}), 'Открыта')

    def test_select_by_destination_status_not_action_name(self):
        self.assertEqual(choose_transition([
            {'id': '1', 'name': 'Закрыт', 'to': {'name': 'В работе'}},
            {'id': '2', 'name': 'Завершить', 'to': {'name': 'Закрыт'}}], 'Закрыт'), '2')

    def test_no_arbitrary_or_ambiguous_transition(self):
        for choices in ([], [{'id': '1', 'to': {'name': 'Done'}}, {'id': '2', 'to': {'name': 'Done'}}]):
            with self.assertRaises(ValueError):
                choose_transition(choices, 'Done')

    def test_matching_status_does_not_write(self):
        page = Mock()
        response = page.context.request.get.return_value
        response.ok = True
        response.json.return_value = {'fields': {'status': {'name': 'Открыта'}}}
        with patch('jrf.JiraSourcePage'), patch('jrf.JiraDestPage'):
            self.assertFalse(sync_status_pair(page, ('AAA-1', 'KIS-1', 'jira_kis'), {}, Mock()))
        page.evaluate.assert_not_called()

    def test_unknown_transition_does_not_write(self):
        page = Mock()
        source, dest, transitions = Mock(ok=True), Mock(ok=True), Mock(ok=True)
        source.json.return_value = {'fields': {'status': {'name': 'Закрыт'}}}
        dest.json.return_value = {'fields': {'status': {'name': 'Открыта'}}}
        transitions.json.return_value = {'transitions': []}
        page.context.request.get.side_effect = [source, dest, transitions]
        with patch('jrf.JiraSourcePage'), patch('jrf.JiraDestPage'):
            with self.assertRaises(ValueError):
                sync_status_pair(page, ('AAA-1', 'KIS-1', 'jira_kis'), {}, Mock())
        page.evaluate.assert_not_called()


if __name__ == '__main__':
    unittest.main()
