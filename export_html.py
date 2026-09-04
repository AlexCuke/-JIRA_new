import os
import csv
from bs4 import BeautifulSoup
from playwright.sync_api import Page, TimeoutError as PlaywrightTimeoutError

# Импортируем менеджер драйвера, функцию авторизации и конфиг из auth_script.py
from settings import CONFIG
from playwright_selectors import LOGIN_SELECTORS, SOURCE_JIRA as SJ
from jira_auth import login_to_jira
from jrf import get_browser_page
# Импортируем JQL-путь из fetch_tasks.py
from fetch_tasks import JQL_MY_TASKS

# Список столбцов, которые ОСТАЮТСЯ в файле. Все остальные будут проигнорированы.
REQUIRED_COLUMNS = [
    "Проект", "Код", "Тема", "Тип задачи", "Статус", "Приоритет", 
    "Решение", "Исполнитель", "Автор", "Создатель", "Создано", 
    "Последний просмотр", "Обновлено", "Обновленo", "Затронуты версии", 
    "Исправить в версиях", "Срок исполнения", "Окружение", "Описание", 
    "Метки", "Comment store", "Epic Link", "Rainbow", 
    "Включить в описание релиза", "Требуется 520", "Требуется инструкция"
]


def convert_html_to_csv(html_file_path):
    """
    Парсит HTML-таблицу, фильтрует колонки и сохраняет результат в CSV.
    Возвращает путь к созданному CSV-файлу или None.
    """
    print(f"[ОБРАБОТКА] Конвертируем HTML в CSV: {html_file_path}")
    
    with open(html_file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    table = soup.find('table', id='issuetable')
    if not table:
        print("[ОШИБКА] Таблица #issuetable не найдена в HTML. Конвертация невозможна.")
        return None

    thead = table.find('tr', class_='rowHeader') or table.find('thead')
    headers = [th.text.strip() for th in thead.find_all(['th', 'td'])] if thead else []
    rows = table.find_all('tr', class_='issuerow')

    if not headers:
        print("[ОШИБКА] Не удалось распарсить заголовки таблицы.")
        return None

    # Определяем индексы колонок, которые нам нужны
    valid_indices = [idx for idx, h in enumerate(headers) if h in REQUIRED_COLUMNS]
    # Формируем заголовок для CSV из разрешенных колонок
    csv_headers = [headers[idx] for idx in valid_indices]

    # Путь для нового CSV-файла (меняем расширение .html на .csv)
    csv_file_path = os.path.splitext(html_file_path)[0] + '.csv'

    try:
        # excel-tab использует табуляцию (\t) в качестве разделителя, 
        # чтобы Excel в русской локали корректно открывал файл без кракозябр и каши в одну строку
        with open(csv_file_path, 'w', encoding='utf-8-sig', newline='') as f:
            writer = csv.writer(f, dialect='excel-tab')
            
            # Пишем заголовки
            writer.writerow(csv_headers)
            
            # Пишем строки
            for row in rows:
                cells = row.find_all('td')
                # Собираем данные только для нужных индексов колонок
                csv_row = [cells[idx].text.strip() if idx < len(cells) else "" for idx in valid_indices]
                writer.writerow(csv_row)
                
        print(f"[УСПЕХ] Данные успешно сохранены в CSV: {csv_file_path}")
        
        # Опционально: удаляем исходный HTML-файл, чтобы не засорять папку
        try:
            os.remove(html_file_path)
            print("[ОЧИСТКА] Исходный HTML-файл удален.")
        except Exception as e:
            print(f"[ВНИМАНИЕ] Не удалось удалить исходный HTML: {e}")
            
        return csv_file_path

    except Exception as e:
        print(f"[ОШИБКА] Не удалось записать CSV-файл: {e}")
        return None


def export_and_process_tasks(page: Page, base_url: str, wait_timeout: int = 20) -> bool:
    """
    Организует переход, скачивание, ожидание файла, его обработку и открытие.
    """
    domain = base_url.split("/login.jsp")[0].split("/secure/")[0]
    tasks_url = f"{domain}{JQL_MY_TASKS}"

    print(f"\n[ПЕРЕХОД] Открываем список задач для экспорта: {tasks_url}")
    page.goto(tasks_url, wait_until="domcontentloaded")

    try:
        if page.locator(SJ["empty_results"]).count():
            print("[ИНФО] Нет задач для экспорта.")
            return False

        print("[СИНХРОНИЗАЦИЯ] Ожидаем загрузку интерфейса задач...")
        print("[ЭКСПОРТ] Открываем меню экспорта...")
        page.locator(SJ["export_button"], has_text="Экспорт").click(timeout=wait_timeout * 1_000)

        print("[ЭКСПОРТ] Ожидаем пункт меню 'HTML (все поля)'...")
        print("[ЭКСПОРТ] Нажимаем кнопку экспорта...")
        with page.expect_download(timeout=wait_timeout * 1_000) as download_info:
            page.locator(SJ["export_html_all_fields"]).click()
        download = download_info.value
        download_dir = os.path.join(os.path.expanduser("~"), "Downloads")
        downloaded_file = os.path.join(download_dir, download.suggested_filename)
        download.save_as(downloaded_file)

        print(f"[УСПЕХ] Файл обнаружен: {downloaded_file}")
        
        # Конвертируем HTML в CSV и фильтруем колонки
        csv_file = convert_html_to_csv(downloaded_file)
        
        if csv_file:
            # Открываем итоговый CSV-файл
            print("[ОТКРЫТИЕ] Открываем созданный CSV-файл...")
            os.startfile(csv_file) if hasattr(os, 'startfile') else os.system(f'open "{csv_file}"')
            return True
        else:
            return False

    except (PlaywrightTimeoutError, OSError) as e:
        print(f"[ОШИБКА] Что-то пошло не так: {e}")
        return False


def main():
    target_env = "src_jira" 
    credentials = CONFIG[target_env]

    if not credentials["user"] or not credentials["pass"]:
        print("[ОШИБКА] Не найдены логин или пароль в .env файле!")
        return

    print(f"=== ЗАПУСК ПОЛНОГО ЦИКЛА ЭКСПОРТА ИЗ {target_env.upper()} ===")
    
    with get_browser_page() as page:
        success_login = login_to_jira(
            page=page,
            target_url=credentials["login_url"],
            username=credentials["user"],
            password=credentials["pass"],
            selectors=LOGIN_SELECTORS["src_jira"]
        )
        
        if not success_login:
            print("[ОШИБКА] Остановка скрипта из-за неудачной авторизации.")
            return

        success_process = export_and_process_tasks(page, base_url=credentials["url"])
        
        if success_process:
            print("\n Всё готово! CSV-файл с нужными столбцами создан и открыт.")
        else:
            print("\n Процесс завершился с ошибкой.")
            
        input("\nНажмите Enter, чтобы закрыть браузер...")


if __name__ == "__main__":
    main()
