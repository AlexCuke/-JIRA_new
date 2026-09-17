import unittest
from unittest.mock import Mock, patch
from jrf import JiraSourcePage, PlaywrightTimeoutError


class IssueErrorTests(unittest.TestCase):
    def diagnose(self, status, url='https://jira.mos.social/browse/KISEMIAS2025-21657'):
        page = Mock()
        page.url = url
        page.context.request.get.return_value.status = status
        source = JiraSourcePage(page)
        source.text_or_empty = Mock(return_value='')
        return source.issue_load_error()

    def test_unavailable_issue_is_not_password_error(self):
        for status in (403, 404):
            text = self.diagnose(status)
            self.assertIn('KISEMIAS2025-21657', text)
            self.assertIn('права', text)
            self.assertNotIn('не приняла логин', text)

    def test_accessible_issue_reports_page_loading(self):
        self.assertIn('доступна через API', self.diagnose(200))

    def test_login_page_reports_authentication(self):
        self.assertIn('CAPTCHA', self.diagnose(401, 'https://jira.mos.social/login.jsp'))

    def test_api_failure_does_not_mask_original_timeout(self):
        page = Mock()
        page.url = 'https://jira.mos.social/browse/AAA-1'
        page.context.request.get.side_effect = PlaywrightTimeoutError('offline')
        source = JiraSourcePage(page)
        source.text_or_empty = Mock(return_value='')
        self.assertIn('Проверьте доступность', source.issue_load_error())

    def test_closed_browser_remains_distinct(self):
        page = Mock()
        page.goto.side_effect = PlaywrightTimeoutError('closed')
        page.is_closed.return_value = True
        with self.assertRaisesRegex(RuntimeError, 'Окно Playwright было закрыто'):
            JiraSourcePage(page).open_issue('AAA-', '1')


if __name__ == '__main__':
    unittest.main()
