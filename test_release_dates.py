import unittest
from datetime import date
from release_dates import plan_release_dates, validate_mapping


class ReleaseDatesTests(unittest.TestCase):
    def test_matching_version_and_excluded_statuses(self):
        rows = [['Версия', 'Срок', 'Статус'],
                ['Версия 5.4.0', '', 'Открыта'], ['5.4.0', '', ' Закрыт '],
                ['5.4.0', '', 'В   релиз'], ['5.4.0', '', 'Пилот'],
                ['5.4.1', '', 'Открыта']]
        updates, skipped = plan_release_dates(rows, 1, {'5.4.0': '18.09.2026'})
        self.assertEqual(updates, [(1, 1, (date(2026, 9, 18)-date(1899, 12, 30)).days)])
        self.assertEqual(skipped, 4)

    def test_ambiguous_multiple_versions_are_not_written(self):
        rows = [['Версия', 'Срок', 'Статус'], ['5.4.0, 5.5.0', '', 'Открыта']]
        self.assertFalse(plan_release_dates(rows, 1, {'5.4.0': '18.09.2026'})[0])
        self.assertFalse(plan_release_dates(rows, 1, {'5.4.0': '18.09.2026', '5.5.0': '19.09.2026'})[0])
        self.assertEqual(len(plan_release_dates(rows, 1, {'5.4.0': '18.09.2026', '5.5.0': '18.09.2026'})[0]), 1)

    def test_already_matching_date_is_unchanged(self):
        rows = [['Версия', 'Срок', 'Статус'], ['5.4.0', '18.09.26', 'Открыта']]
        self.assertEqual(plan_release_dates(rows, 1, {'5.4.0': '18.09.2026'})[0], [])

    def test_invalid_calendar_date_rejected(self):
        with self.assertRaises(ValueError):
            validate_mapping({'5.4.0': '31.09.2026'})

    def test_normalized_duplicate_rejected(self):
        with self.assertRaises(ValueError):
            validate_mapping({'5.4.0': '18.09.2026', 'Версия 5.4.0': '19.09.2026'})


if __name__ == '__main__':
    unittest.main()
