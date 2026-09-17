"""Live integration test: python -m unittest test_migration_live -v.

Requires access to both Jira servers and credentials in .env.
Only fills the destination form; never submits an issue.
"""
import unittest

from error_logging import error_logger
from field_picker import load_fields, read_field, fill_mapped_fields
from field_mappings import map_field_value
from jrf import JiraSourcePage, JiraDestPage, get_browser_page, convert_date
from playwright_selectors import DESTINATION_JIRA as DJ
from settings import CONFIG


class LiveMigrationTest(unittest.TestCase):
    def check_value(self, locator, expected, label):
        locator.wait_for(state="visible")
        actual = locator.evaluate("el => el.tagName === 'SELECT' ? [...el.selectedOptions].map(o => o.textContent.trim()).join(', ') : ('value' in el ? el.value : el.innerText)")
        # Do not include issue contents in test output.
        self.assertTrue(actual.strip() == expected.strip(), f"Значение поля не совпало: {label}")

    def test_kisemias2019_21469(self):
        for system in ('src_jira', 'dest_jira'):
            self.assertTrue(CONFIG[system]['user'] and CONFIG[system]['pass'],
                            f"Не заданы учётные данные: {system}")
        try:
            with get_browser_page(headless=True) as page:
                data = JiraSourcePage(page).parse_issue('KISEMIAS2019-', '21469')
                self.assertTrue(data['summary'].strip(), 'Исходная тема пуста')
                self.assertIn('/browse/KISEMIAS2019-21469', page.url)
                self.assertIn('https://jira.mos.social/browse/KISEMIAS2019-21469', data['description'])
                fields = [f for f in load_fields() if f['target'] == 'mapped' and f['target_system'] == 'jira']
                pairs = [(f, read_field(page, f)) for f in fields]

                JiraDestPage(page).create_issue(data, '21469', 'КИС ЕМИАС (KIS)')
                self.check_value(page.locator(DJ['summary']),
                                 map_field_value('summary', 'target_jira', data['summary']) + ' [21469]', 'Тема')
                if data['duedate']:
                    self.check_value(page.locator(DJ['due_date']),
                                     convert_date(map_field_value('duedate', 'target_jira', data['duedate']), 'jira'), 'Срок')
                description = (page.frame_locator(DJ['description_iframe']).locator(DJ['description_iframe_body'])
                               if page.locator(DJ['description_iframe']).count() else page.locator(DJ['description']))
                self.check_value(description, map_field_value('description', 'target_jira', data['description']), 'Описание')
                for key, selector in [('cf_15608', 'custom_field_10402'), ('cf_22106', 'custom_field_10403')]:
                    if data[key]:
                        self.check_value(page.locator(DJ[selector]), map_field_value(key, 'target_jira', data[key]), key)
                fill_mapped_fields(page, pairs)
                for field, value in pairs:
                    self.check_value(page.locator(field['target_selector']), value, field['label'])
                print(f"Проверены стандартные поля и сохранённые пары: {len(pairs)}. Форма не отправлялась.")
        except Exception:
            error_logger.exception('Автотест KISEMIAS2019-21469 завершился ошибкой')
            raise


if __name__ == '__main__':
    unittest.main(verbosity=2)
