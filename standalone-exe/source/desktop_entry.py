"""Portable Windows entry point."""
import os
import sys
from pathlib import Path

if getattr(sys, "frozen", False):
    application_dir = Path(sys.executable).resolve().parent
    os.chdir(application_dir)
    os.environ["PLAYWRIGHT_BROWSERS_PATH"] = str(application_dir / "browsers")

from main import main

if __name__ == "__main__":
    if "--self-test" in sys.argv:
        import json
        from migration_gui import MigrationGUI
        from playwright.sync_api import sync_playwright
        from developer_profiles import PROFILE_FILE
        from google_sheets_export import SETTINGS_FILE
        app = MigrationGUI()
        app.update()
        app.destroy()
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.set_content("<title>OK</title>")
            assert page.title() == "OK"
            browser.close()
        Path("self-test.json").write_text(json.dumps({
            "status": "ok", "gui": True, "chromium": True,
            "profiles": str(PROFILE_FILE), "settings": str(SETTINGS_FILE)
        }, ensure_ascii=False, indent=2), encoding="utf-8")
    else:
        main()
