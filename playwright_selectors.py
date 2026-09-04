"""Каталог локаторов Playwright.

Добавляйте новые элементы в секцию соответствующей системы. Значения —
любые селекторы, поддерживаемые ``page.locator()``.
"""

SOURCE_JIRA = {
    "login": "#username-field",
    "password": "#password-field",
    "login_button": "#login-button",
    "login_error": ".aui-message.error, .error, #error",
    "summary": "#summary-val",
    "description": "#description-val",
    "due_date": "#due-date",
    "due_date_by_label": "[aria-label*='Срок исполнения']",
    "custom_field_15608": "#customfield_15608-val",
    "custom_field_22106": "#customfield_22106-val",
    "issue_link": "a.issue-link",
    "issues_table": "#issuetable",
    "issue_row": ".issuerow",
    "issue_key": ".issuekey",
    "issue_summary": ".summary",
    "issue_status": ".status",
    "empty_results": ".aui-message.info, .empty-results",
    "export_button": "button.jira-aui-dropdown2-trigger",
    "export_html_all_fields": "#allHtmlFields",
}

DESTINATION_JIRA = {
    "login": "#login-form-username",
    "password": "#login-form-password",
    "login_button": "#login",
    "login_error": ".aui-message.error, .error, #error",
    "create_button": "#create_link",
    "summary": "#summary",
    "due_date": "#duedate",
    "description": "#description",
    "description_iframe": "#mce_0_ifr",
    "description_iframe_body": "#tinymce",
    "custom_field_10402": "#customfield_10402",
    "custom_field_10403": "#customfield_10403",
}

REDMINE = {
    "login": "#username",
    "password": "#password",
    "login_button": "[name='login']",
    "subject": "#issue_subject",
    "due_date": "#issue_due_date",
    "description": "#issue_description",
    "custom_field_10402": "#issue_custom_field_values_10402",
    "custom_field_10403": "#issue_custom_field_values_10403",
}

LOGIN_SELECTORS = {
    "src_jira": {"user": SOURCE_JIRA["login"], "password": SOURCE_JIRA["password"], "button": SOURCE_JIRA["login_button"]},
    "dest_jira": {"user": DESTINATION_JIRA["login"], "password": DESTINATION_JIRA["password"], "button": DESTINATION_JIRA["login_button"]},
}
