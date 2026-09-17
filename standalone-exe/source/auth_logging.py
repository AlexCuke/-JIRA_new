import logging
import sys
from logging.handlers import RotatingFileHandler
from pathlib import Path


def _application_dir() -> Path:
    if getattr(sys, "frozen", False):
        return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent


LOG_FILE = _application_dir() / "logs" / "login.log"


def get_login_logger() -> logging.Logger:
    """Return the dedicated authentication logger without exposing credentials."""
    logger = logging.getLogger("jira_migrator.authentication")
    if logger.handlers:
        return logger

    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    handler = RotatingFileHandler(
        LOG_FILE,
        maxBytes=1_000_000,
        backupCount=3,
        encoding="utf-8",
    )
    handler.setFormatter(logging.Formatter("%(asctime)s | %(levelname)s | %(message)s"))
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)
    logger.propagate = False
    return logger


login_logger = get_login_logger()
