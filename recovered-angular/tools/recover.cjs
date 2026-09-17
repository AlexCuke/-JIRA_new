const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const root = path.resolve(__dirname, '..');
const attachment = path.join(process.env.USERPROFILE, '.codex', 'attachments');
const inputs = [
  ['runtime', 'f38b3025-c74b-4177-b67c-10bbd69f997c'],
  ['polyfills', '19a7f638-9504-436c-af92-7c2663f22bd5'],
  ['main', '8007513d-9437-4299-9353-4c0d222a9c88'],
  ['operations', '24279cdb-4a60-4f8f-a66c-536a8620b22e'],
];
function write(name, data) {
  const dest = path.join(root, name);
  fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.writeFileSync(dest, data);
}
function walk(node, fn, parent) {
  if (!node || typeof node !== 'object') return;
  if (node.type) fn(node, parent);
  for (const [k, v] of Object.entries(node)) {
    if (['loc', 'extra', 'tokens', 'comments'].includes(k)) continue;
    if (Array.isArray(v)) v.forEach(n => walk(n, fn, node));
    else if (v && typeof v === 'object') walk(v, fn, node);
  }
}
function code(node) { return generate(node, {comments: true, jsescOption: {minimal: true}}).code; }
function key(p) { return p.key?.name ?? p.key?.value; }
function prop(n, name) { return n?.properties?.find(p => key(p) === name)?.value; }
const index = {angular: '15.2.1', inputs: [], modules: [], components: []};
let checked = 0;
for (const [name, id] of inputs) {
  const original = fs.readFileSync(path.join(attachment, id, 'pasted-text.txt'), 'utf8');
  write(`original/${name}.js`, original);
  index.inputs.push({name, bytes: Buffer.byteLength(original), sha256: crypto.createHash('sha256').update(original).digest('hex')});
  const ast = parser.parse(original, {sourceType: 'unambiguous'});
  walk(ast, n => { if (n.type === 'StringLiteral') delete n.extra; });
  let table;
  walk(ast, n => {
    if (!table && n.type === 'CallExpression' && n.callee.type === 'MemberExpression' && n.callee.property.name === 'push' && n.arguments[0]?.type === 'ArrayExpression' && n.arguments[0].elements[1]?.type === 'ObjectExpression') table = n.arguments[0].elements[1];
  });
  if (!table) continue;
  for (const entry of table.properties) {
    const moduleId = key(entry), factory = entry.value;
    const modulePath = `modules/${moduleId}.js`;
    const output = `// Extracted from ${name}; webpack module ${moduleId}. Factory, not an ES module.\n(${code(factory)});\n`;
    parser.parse(output); checked++;
    write(modulePath, output);
    const deps = new Set(), aliases = {}, exports = {};
    const req = factory.params[2]?.name;
    walk(factory.body, (n, parent) => {
      if (req && n.type === 'CallExpression' && n.callee.name === req && n.arguments[0]?.type === 'NumericLiteral') {
        deps.add(n.arguments[0].value);
        if (parent?.type === 'VariableDeclarator') aliases[parent.id.name] = n.arguments[0].value;
      }
      if (req && n.type === 'CallExpression' && n.callee.type === 'MemberExpression' && n.callee.object.name === req && n.callee.property.name === 'd') {
        for (const p of n.arguments[1]?.properties ?? []) exports[key(p)] = code(p.value);
      }
    });
    index.modules.push({id: moduleId, bundle: name, file: modulePath, dependencies: [...deps], aliases, exports});
    walk(factory.body, n => {
      if (n.type !== 'AssignmentExpression' || n.left.type !== 'MemberExpression' || n.left.property.name !== 'ɵcmp') return;
      const meta = n.right.arguments?.[0];
      if (meta?.type !== 'ObjectExpression') return;
      const selectors = prop(meta, 'selectors');
      const selector = selectors?.elements?.[0]?.elements?.[0]?.value || `component-${index.components.length}`;
      const dir = `components/${moduleId}/${selector.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
      write(`${dir}/definition.js`, `// Exact compiled component metadata; references belong to modules/${moduleId}.js\n(${code(meta)});\n`);
      const styles = prop(meta, 'styles');
      if (styles?.type === 'ArrayExpression') {
        const css = styles.elements.filter(e => e?.type === 'StringLiteral').map(e => e.value).join('\n');
        if (css) write(`${dir}/styles.compiled.css`, css);
      }
      const clsName = n.left.object.name;
      let cls;
      walk(factory.body, (v, p) => {
        if (v.type === 'ClassDeclaration' && v.id?.name === clsName || v.type === 'ClassExpression' && (p?.type === 'AssignmentExpression' && p.left.name === clsName || p?.type === 'VariableDeclarator' && p.id.name === clsName)) cls = v;
      });
      if (cls) write(`${dir}/class.js`, `// Extracted class; external identifiers resolve in modules/${moduleId}.js.\n(${code(cls)});\n`);
      index.components.push({selector, moduleId, directory: dir, classIdentifier: clsName, standalone: prop(meta, 'standalone') ? code(prop(meta, 'standalone')) : 'false'});
    });
    if (name === 'operations') {
      write('operations/module.factory.js', output);
      write('operations/imports.json', JSON.stringify(aliases, null, 2));
      for (const stmt of factory.body.body) {
        if (stmt.type === 'FunctionDeclaration') write(`operations/ivy/${stmt.id.name}.js`, code(stmt) + '\n');
      }
      for (const [alias, label] of Object.entries({_: 'OperationSideMenuComponent', l: 'OperationListComponent', p: 'CompositionService', pt: 'ChecklistComposition', x: 'OperationData'})) {
        let cls;
        walk(factory.body, (n, p) => {
          if (n.type === 'ClassDeclaration' && n.id?.name === alias || n.type === 'ClassExpression' && (p?.type === 'AssignmentExpression' && p.left.name === alias || p?.type === 'VariableDeclarator' && p.id.name === alias)) cls = n;
        });
        if (cls) {
          const copy = structuredClone(cls); copy.type = 'ClassDeclaration'; copy.id = {type: 'Identifier', name: label};
          write(`operations/${label}.js`, `// Reconstructed name. Original methods retained; dependencies in imports.json/module.factory.js.\n${code(copy)}\n`);
        }
      }
      for (const alias of ['W', 'X', 'tt', 'et', 'nt']) walk(factory.body, n => {
        if (n.type === 'VariableDeclarator' && n.id.name === alias) write(`operations/data/${alias}.js`, `export const ${alias} = ${code(n.init)};\n`);
      });
    }
  }
}
const ids = new Set(index.modules.map(m => m.id));
index.missingModuleIds = [...new Set(index.modules.flatMap(m => m.dependencies).filter(id => !ids.has(id)))].sort((a,b) => a-b);
write('index.json', JSON.stringify(index, null, 2));
write('components.csv', '\uFEFFselector,moduleId,directory\n' + index.components.map(c => `${c.selector},${c.moduleId},${c.directory}`).join('\n'));
write('verification.json', JSON.stringify({parsedFactories: checked, components: index.components.length, missingModuleIds: index.missingModuleIds, originalHashes: index.inputs}, null, 2));
console.log(JSON.stringify({modules: checked, components: index.components.length, missing: index.missingModuleIds.length}));
