"""Application errors, including tracebacks, without configured credentials."""

import logging
import os
from logging.handlers import RotatingFileHandler

from auth_logging import LOG_FILE


ERROR_LOG_FILE = LOG_FILE.with_name("errors.log")


class SecretSafeFormatter(logging.Formatter):
    def format(self, record):
        text = super().format(record)
        for name in (
            "SOURCE_LOGIN", "SOURCE_PASSWORD", "DEST_LOGIN", "DEST_PASSWORD",
            "REDMINE_LOGIN", "REDMINE_PASSWORD",
        ):
            secret = os.getenv(name)
            if secret:
                text = text.replace(secret, "[REDACTED]")
        return text


error_logger = logging.getLogger("jira_migrator.errors")
if not error_logger.handlers:
    ERROR_LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    handler = RotatingFileHandler(
        ERROR_LOG_FILE, maxBytes=1_000_000, backupCount=3, encoding="utf-8",
    )
    handler.setFormatter(SecretSafeFormatter("%(asctime)s | %(levelname)s | %(message)s"))
    error_logger.addHandler(handler)
    error_logger.setLevel(logging.ERROR)
    error_logger.propagate = False
