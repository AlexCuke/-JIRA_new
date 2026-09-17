"""Synchronize destination status using the live source Jira status."""
import json
import re
from auth_logging import _application_dir
from settings import CONFIG

MAPPING_FILE = _application_dir() / 'status_sync_mapping.json'


def normalized(value):
    return re.sub(r'\s+', ' ', value.strip().casefold())


def load_mapping():
    data = json.loads(MAPPING_FILE.read_text(encoding='utf-8')) if MAPPING_FILE.exists() else {}
    if not isinstance(data, dict) or any(not isinstance(items, dict) or any(
            not isinstance(k, str) or not isinstance(v, str) or not k.strip() or not v.strip()
            for k, v in items.items()) for items in data.values()):
        raise ValueError('Некорректные соответствия статусов')
    return data


def target_status(source, system, mapping):
    return next((v for k, v in mapping.get(system, {}).items()
                 if normalized(k) == normalized(source)), source).strip()


def choose_transition(transitions, desired):
    choices = [t for t in transitions if normalized((t.get('to') or {}).get('name', '')) == normalized(desired)]
    if len(choices) != 1:
        raise ValueError(f'Нет единственного доступного перехода в статус «{desired}». Задача не изменена.')
    return choices[0]['id']


def sync_status_pair(page, pair, mapping, log):
    import jrf
    source, target, route = pair
    prefix, number = source.rsplit('-', 1)
    jrf.JiraSourcePage(page).open_issue(prefix + '-', number)
    response = page.context.request.get(
        CONFIG['src_jira']['url'].rstrip('/') + '/rest/api/2/issue/' + source,
        params={'fields': 'status'}, timeout=60000)
    if not response.ok:
        raise RuntimeError(f'Не удалось прочитать статус {source}: HTTP {response.status}')
    status = ((response.json().get('fields') or {}).get('status') or {}).get('name', '').strip()
    if not status:
        raise ValueError(f'Исходная Jira не вернула статус {source}')
    system = 'redmine' if route == 'redmine' else 'jira'
    desired = target_status(status, system, mapping)
    if system == 'jira':
        jrf.JiraDestPage(page).open_existing_issue(target)
        endpoint = CONFIG['dest_jira']['url'].rstrip('/') + '/rest/api/2/issue/' + target
        def current_status():
            result = page.context.request.get(endpoint, params={'fields': 'status'}, timeout=60000)
            if not result.ok:
                raise RuntimeError(f'Не удалось прочитать статус {target}: HTTP {result.status}')
            return result.json()['fields']['status']['name']
        current = current_status()
        if normalized(current) == normalized(desired):
            log(f'{source} → {target}: статус уже «{desired}»')
            return False
        transitions = page.context.request.get(endpoint + '/transitions', timeout=60000)
        if not transitions.ok:
            raise RuntimeError(f'Не удалось прочитать переходы: HTTP {transitions.status}')
        transition = choose_transition(transitions.json().get('transitions', []), desired)
        result = page.evaluate('''async ({url, id}) => {
            const r = await fetch(url, {method: 'POST', credentials: 'same-origin',
              headers: {'Content-Type': 'application/json', 'X-Atlassian-Token': 'no-check'},
              body: JSON.stringify({transition: {id}})});
            return {ok: r.ok, status: r.status};
        }''', {'url': endpoint + '/transitions', 'id': transition})
        if not result['ok']:
            raise RuntimeError(f'Jira не выполнила переход: HTTP {result["status"]}. Возможно, нужны обязательные поля.')
        actual = current_status()
    else:
        jrf.RedmineDestPage(page).open_existing_issue(target)
        control = page.locator('#issue_status_id')
        current = control.locator('option:checked').inner_text()
        if normalized(current) == normalized(desired):
            log(f'{source} → {target}: статус уже «{desired}»')
            return False
        options = control.locator('option').evaluate_all('(items) => items.filter(x => !x.disabled).map(x => ({id:x.value, name:x.textContent}))')
        choices = [o for o in options if normalized(o['name']) == normalized(desired)]
        if len(choices) != 1:
            raise ValueError(f'Redmine: недоступен статус «{desired}». Настройте соответствия статусов.')
        control.select_option(value=choices[0]['id'])
        page.locator('#issue-form input[type="submit"]').first.click()
        base = CONFIG['dest_redmine']['url'].split('/projects/', 1)[0].rstrip('/')
        page.wait_for_url(lambda url: str(url).split('?', 1)[0].split('#', 1)[0].rstrip('/') == f'{base}/issues/{target}', timeout=60000)
        jrf.RedmineDestPage(page).open_existing_issue(target)
        actual = page.locator('#issue_status_id option:checked').inner_text()
    if normalized(actual) != normalized(desired):
        raise RuntimeError(f'Статус {target} после сохранения: «{actual}», ожидался «{desired}»')
    log(f'{source} → {target}: «{current}» → «{actual}» (глобальная Jira: «{status}»)')
    return True
