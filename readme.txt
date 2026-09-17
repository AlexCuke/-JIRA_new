Установка
==========

1. Установите Python 3.11 или новее.
2. Установите зависимости:

   pip install -r requirements.txt

3. Один раз установите Chromium для Playwright:

playwright install chromium
python main.py

4. Заполните .env и запустите:

   python migration_gui.py

Приложение только заполняет форму в целевой Jira или Redmine. Отправка задачи остаётся ручной.

Журнал входа сохраняется в logs/login.log. Пароли и логины в журнал не записываются.
