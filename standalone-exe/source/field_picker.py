"""Visual source-field configuration stored independently of issue values."""
import json
from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
from auth_logging import LOG_FILE

PROFILE_FILE = LOG_FILE.parent.parent / "source_fields.json"
FIELD_FILL_TIMEOUT_MS = 1_000


def load_route_mapping(system, project):
    filenames = {
        ('redmine', None): 'jira_to_redmine_mapping.json',
        ('jira', 'КИС ЕМИАС (KIS)'): 'jira_to_jira_obl_KIS_mapping.json',
        ('jira', 'КИС 2.0 (REFACT)'): 'jira_to_jira_obl_KIS_2_0_mapping.json',
    }
    filename = filenames.get((system, project if system == 'jira' else None))
    path = PROFILE_FILE.parent / filename if filename else None
    if path and path.exists():
        fields = json.loads(path.read_text(encoding='utf-8-sig'))
    else:
        fields = [f for f in load_fields() if f.get('target') == 'mapped'
                  and f.get('target_system') == system
                  and (not f.get('target_project') or f['target_project'] == project)]
    if not isinstance(fields, list):
        raise ValueError('Маппинг должен содержать список пар полей.')
    targets = set()
    for field in fields:
        if not isinstance(field, dict) or any(not isinstance(field.get(k), str) or not field[k].strip()
                                             for k in (('label', 'target_selector', 'default_value') if field.get('default_only') else ('label', 'selector', 'target_selector'))):
            raise ValueError('Некорректная пара в файле маппинга.')
        if field.get('target_system') != system or (field.get('target_project') and field['target_project'] != project):
            raise ValueError('Маппинг относится к другому направлению.')
        if field['target_selector'] in targets:
            raise ValueError('Маппинг содержит повторное назначение целевого поля.')
        targets.add(field['target_selector'])
        mapping = field.get('value_mapping', {})
        if not isinstance(mapping, dict) or any(not isinstance(k, str) or not isinstance(v, str) for k, v in mapping.items()):
            raise ValueError('Некорректный маппинг значений поля.')
    return fields


def mapped_value(field, value):
    """Defaults are already destination values; explicit maps use exact matches."""
    if not value or not value.strip():
        return field.get('default_value', '')
    # Titles, descriptions, dates and tag text are free-form values. Applying
    # option mappings to them can accidentally suppress the actual text.
    if field.get('target_selector') in {
        '#summary', '#issue_subject', '#description', '#mce_0',
        '#issue_description', '#duedate', '#issue_due_date',
        '#labels-textarea', '#issue_tags', '#fixVersions-textarea',
    }:
        return value
    mapping = field.get('value_mapping', {})
    return mapping.get(value.strip()) if mapping else value


def load_fields():
    if not PROFILE_FILE.exists():
        return []
    fields = json.loads(PROFILE_FILE.read_text(encoding="utf-8"))
    if not isinstance(fields, list) or any(
        not isinstance(item, dict) or
        not all(isinstance(item.get(key), str) and item[key] for key in (("default_value", "label", "target") if item.get('default_only') else ("selector", "label", "target")))
        or item["target"] not in ("summary", "description", "duedate", "cf_15608", "cf_22106", "mapped")
        or (item["target"] == "mapped" and (
            not isinstance(item.get("target_selector"), str) or not item["target_selector"]
            or item.get("target_system") not in ("jira", "redmine")))
        for item in fields
    ):
        raise ValueError("Некорректный файл source_fields.json")
    return fields


def save_fields(fields):
    temporary = PROFILE_FILE.with_suffix(".tmp")
    temporary.write_text(json.dumps(fields, ensure_ascii=False, indent=2), encoding="utf-8")
    temporary.replace(PROFILE_FILE)


PICKER_SCRIPT = r"""(initial) => {
 const panel = document.createElement('div');
 panel.id = 'migration-field-picker';
 panel.style.cssText = 'position:fixed;right:16px;top:16px;width:360px;padding:18px;background:white;color:#222;z-index:2147483647;border:3px solid #2879be;font:14px Arial;box-shadow:0 4px 24px #555;max-height:85vh;overflow:auto';
 panel.innerHTML = `<b>Настройка полей переноса</b><p>Нажмите на значение поля в задаче. Затем задайте название и куда его переносить.</p>
 <label>Название <input data-name style="width:95%"></label><p><label>Куда переносить <select data-target>
 <option value="description">Добавить в описание</option><option value="summary">Тема (заменить)</option>
 <option value="duedate">Срок исполнения (заменить)</option><option value="cf_15608">Направление / продукт (заменить)</option>
 <option value="cf_22106">Компонент / модуль (заменить)</option></select></label></p>
 <pre data-preview style="white-space:pre-wrap;max-height:90px;overflow:auto"></pre>
 <button data-add>Добавить поле</button><div data-list></div><hr><button data-save>Сохранить</button> <button data-cancel>Отмена</button><p data-status></p>`;
 document.body.append(panel);
 const state = window.__migrationPicker = {fields: initial, done:false, cancelled:false};
 let selected = null, highlighted = null, oldOutline = '';
 const clearHighlight = () => {if(highlighted) highlighted.style.outline = oldOutline; highlighted = null;};
 const selectorFor = el => {
   const anchor = el.closest('[id]');
   if(anchor && anchor !== document.body && anchor !== document.documentElement &&
      !/^(aui|react|ember|jira-issue-header)/.test(anchor.id)) return '#' + CSS.escape(anchor.id);
   const path=[];
   while(el && el !== document.body) {
     const siblings=[...el.parentElement.children].filter(x=>x.tagName===el.tagName);
     path.unshift(el.tagName.toLowerCase()+':nth-of-type('+(siblings.indexOf(el)+1)+')');
     el=el.parentElement;
   }
   return 'body > '+path.join(' > ');
 };
 const render = () => {
   const list=panel.querySelector('[data-list]'); list.replaceChildren();
   state.fields.forEach((f,i)=>{const row=document.createElement('p'); row.textContent=f.label+' → '+f.target+' ';
     const remove=document.createElement('button');remove.textContent='Удалить';remove.onclick=()=>{state.fields.splice(i,1);render();};row.append(remove);list.append(row);});
 };
 const click = e => {
   if(panel.contains(e.target)) return;
   e.preventDefault();e.stopImmediatePropagation();
   if(e.target.closest('input[type=password]')) return;
   clearHighlight();
   const selector=selectorFor(e.target); const el=document.querySelector(selector);
   if(!el || ['BODY','HTML'].includes(el.tagName)) return;
   selected={selector}; highlighted=el; oldOutline=el.style.outline; el.style.outline='3px solid #2879be';
   panel.querySelector('[data-name]').value=el.getAttribute('aria-label') || el.id || 'Новое поле';
   panel.querySelector('[data-preview]').textContent=(el.innerText || el.value || '').trim().slice(0,350);
 };
 document.addEventListener('click',click,true);
 panel.querySelector('[data-add]').onclick=()=>{
   const label=panel.querySelector('[data-name]').value.trim();
   if(!selected || !label){panel.querySelector('[data-status]').textContent='Выберите значение на странице и введите название.';return;}
   const target=panel.querySelector('[data-target]').value;
   if(target!=='description' && state.fields.some(f=>f.target===target)){panel.querySelector('[data-status]').textContent='Для этого назначения уже выбрано поле. Удалите его перед заменой.';return;}
   state.fields.push({...selected,label,target}); selected=null;clearHighlight();render();panel.querySelector('[data-status]').textContent='Поле добавлено.';
 };
 const finish=cancelled=>{state.cancelled=cancelled;state.done=true;clearHighlight();document.removeEventListener('click',click,true);panel.remove();};
 panel.querySelector('[data-save]').onclick=()=>finish(false);
 panel.querySelector('[data-cancel]').onclick=()=>finish(true);
 render();
}"""


def pick_fields(page, initial):
    page.evaluate(PICKER_SCRIPT, initial)
    while not page.is_closed():
        state = page.evaluate("window.__migrationPicker && ({done:window.__migrationPicker.done, cancelled:window.__migrationPicker.cancelled})")
        if not state:
            raise RuntimeError("Страница обновилась. Запустите настройку полей повторно.")
        if state["done"]:
            return None if state["cancelled"] else page.evaluate("window.__migrationPicker.fields")
        page.wait_for_timeout(200)
    return None


SOURCE_STAGE = r"""() => {
 const p=document.querySelector('#migration-field-picker');
 p.querySelector('b').textContent='Шаг 1. Выберите исходные поля';
 p.querySelector('p').textContent='Кликните по значению на странице, задайте название и нажмите «Добавить поле». Повторите для всех полей.';
 p.querySelector('[data-target]').closest('p').style.display='none';
 p.querySelector('[data-save]').textContent='Перейти к сопоставлению';
}"""

TARGET_STAGE = r"""(fields) => {
 const panel=document.createElement('div');panel.id='migration-target-picker';
 panel.style.cssText='position:fixed;right:16px;top:16px;width:380px;background:white;color:#222;padding:18px;border:3px solid #2879be;z-index:2147483647;font:14px Arial;max-height:85vh;overflow:auto';
 panel.innerHTML='<b>Шаг 2. Сопоставьте целевые поля</b><p>Выберите исходное поле в списке, затем кликните по полю ввода на этой странице.</p><select data-source style="width:100%"></select><div data-list></div><p data-status></p><button data-save>Сохранить пары</button> <button data-cancel>Отмена</button>';
 document.body.append(panel);
 const state=window.__migrationPicker={fields,done:false,cancelled:false};
 const select=panel.querySelector('[data-source]');
 fields.forEach((f,i)=>{const o=document.createElement('option');o.value=i;o.textContent=f.label;select.append(o);});
 const render=()=>{const list=panel.querySelector('[data-list]');list.replaceChildren();fields.forEach(f=>{const row=document.createElement('p');row.textContent=f.label+' → '+(f.target_selector || 'не выбрано');list.append(row);});};
 const click=e=>{
   if(panel.contains(e.target))return;
   e.preventDefault();e.stopImmediatePropagation();
   const el=e.target.closest('input,textarea,select,[contenteditable=true]');
   if(!el || ['password','hidden','submit','button','checkbox','radio','file'].includes(el.type)){
     panel.querySelector('[data-status]').textContent='Выберите текстовое поле или выпадающий список.';return;
   }
   let selector=el.id ? '#'+CSS.escape(el.id) : el.name ? el.tagName.toLowerCase()+'[name='+JSON.stringify(el.name)+']' : null;
   if(!selector || document.querySelectorAll(selector).length!==1){panel.querySelector('[data-status]').textContent='Поле не имеет уникального ID или имени. Выберите другое поле.';return;}
   const i=Number(select.value);
   if(fields.some((f,j)=>j!==i && f.target_selector===selector)){panel.querySelector('[data-status]').textContent='Это поле уже сопоставлено. Выберите другое.';return;}
   fields[i].target_selector=selector;fields[i].target='mapped';
   panel.querySelector('[data-status]').textContent='Сопоставлено: '+fields[i].label;
   const next=fields.findIndex(f=>!f.target_selector);if(next>=0)select.value=next;
   render();
 };
 document.addEventListener('click',click,true);
 const finish=cancelled=>{state.cancelled=cancelled;state.done=true;document.removeEventListener('click',click,true);panel.remove();};
 panel.querySelector('[data-save]').onclick=()=>{if(fields.some(f=>!f.target_selector)){panel.querySelector('[data-status]').textContent='Сопоставьте каждое исходное поле.';return;}finish(false);};
 panel.querySelector('[data-cancel]').onclick=()=>finish(true);
 render();
}"""


def wait_picker(page):
    while not page.is_closed():
        state = page.evaluate("window.__migrationPicker")
        if state is None:
            raise RuntimeError("Страница обновилась. Повторите настройку.")
        if state['done']:
            return None if state['cancelled'] else state['fields']
        page.wait_for_timeout(200)
    return None


def pick_source_fields(page, initial):
    # На первом этапе назначения ещё не выбираются.
    page.evaluate(PICKER_SCRIPT, [dict(f, target='description') for f in initial])
    page.evaluate(SOURCE_STAGE)
    return wait_picker(page)


def pick_target_fields(page, fields, system):
    fields = [dict(f, target='mapped', target_system=system, target_selector='') for f in fields]
    page.evaluate(TARGET_STAGE, fields)
    return wait_picker(page)


def fill_mapped_fields(page, pairs):
    for field, value in pairs:
        selector = field['target_selector']
        if field.get('copy_html'):
            if selector in ('#mce_0', '#description') and page.locator('#mce_0_ifr').count():
                body = page.frame_locator('#mce_0_ifr').locator('#tinymce')
                html = value["html"] if isinstance(value, dict) else value
                body.evaluate("(element, html) => { element.innerHTML = html; element.dispatchEvent(new InputEvent('input', {bubbles: true})); element.dispatchEvent(new Event('change', {bubbles: true})); }", html)
                continue
            # Fallback for a plain textarea: retaining readable text is preferable
            # to placing raw markup in the user-visible description.
            page.locator(selector).fill(value["text"] if isinstance(value, dict) else value, timeout=FIELD_FILL_TIMEOUT_MS)
            continue
        if selector in ('#mce_0', '#description') and page.locator('#mce_0_ifr').count():
            page.frame_locator('#mce_0_ifr').locator('#tinymce').fill(value)
            continue
        locator = page.locator(selector)
        locator.wait_for(state='visible', timeout=FIELD_FILL_TIMEOUT_MS)
        tag = locator.evaluate('el => el.tagName.toLowerCase()')
        if selector in ('#labels-textarea', '#issue_tags'):
            locator.fill(value, timeout=FIELD_FILL_TIMEOUT_MS)
        elif tag == 'select':
            try:
                locator.select_option(label=value, timeout=FIELD_FILL_TIMEOUT_MS)
            except Exception:
                return False
        elif locator.get_attribute('role') == 'combobox':
            previous = locator.input_value()
            try:
                locator.fill(value, timeout=FIELD_FILL_TIMEOUT_MS)
                page.get_by_role('option', name=value, exact=True).filter(visible=True).first.click(timeout=FIELD_FILL_TIMEOUT_MS)
            except Exception:
                # Не оставляем в поле поиска текст, которому нет соответствия.
                locator.fill(previous, timeout=FIELD_FILL_TIMEOUT_MS)
                locator.press('Escape')
                return False
        else:
            locator.fill(value, timeout=FIELD_FILL_TIMEOUT_MS)
    return True


def read_field(page, field):
    if field.get('default_only'):
        return None
    locator = page.locator(field["selector"])
    try:
        locator.wait_for(state="visible", timeout=5000)
    except PlaywrightTimeoutError:
        if field['selector'] == '#due-date':
            return None
        raise
    if field.get('copy_html'):
        return locator.evaluate("""el => ({
            html: el.innerHTML.trim(),
            text: el.innerText.trim()
        })""")
    return locator.evaluate("el => ('value' in el ? el.value : el.innerText).trim()")


def add_source_reference(page, system, issue_number, source_url):
    """Append provenance to the final form values after applying all mappings."""
    title_selector = '#summary' if system == 'jira' else '#issue_subject'
    title = page.locator(title_selector)
    value = title.input_value().rstrip()
    suffix = f' [{issue_number}]'
    if value and not value.endswith(suffix):
        title.fill(value + suffix)
    if system == 'jira' and page.locator('#mce_0_ifr').count():
        description = page.frame_locator('#mce_0_ifr').locator('#tinymce')
        line = f'Ссылка на глобальную JIRA - {source_url}'
        if not description.inner_text().rstrip().endswith(line):
            # Append plain text without replacing the editor's existing markup.
            description.press('Control+End')
            description.press('Enter')
            description.press('Enter')
            description.press_sequentially(line)
    else:
        description = page.locator('#description' if system == 'jira' else '#issue_description')
        value = description.input_value().rstrip()
        line = f'Ссылка на глобальную JIRA - {source_url}'
        if not value.endswith(line):
            description.fill((value + '\n\n' + line).lstrip('\n'))
