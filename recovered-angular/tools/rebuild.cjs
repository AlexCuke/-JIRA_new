const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const root = path.resolve(__dirname, '..');
function walk(n, fn) {
  if (!n || typeof n !== 'object') return;
  if (n.type) fn(n);
  for (const [k,v] of Object.entries(n)) {
    if (['loc','extra','comments','tokens'].includes(k)) continue;
    if (Array.isArray(v)) v.forEach(x => walk(x,fn));
    else if (v && typeof v === 'object') walk(v,fn);
  }
}
function canonical(n) {
  return JSON.stringify(n, (k,v) => {
    if (['start','end','loc','extra','leadingComments','trailingComments','innerComments','comments','tokens'].includes(k)) return undefined;
    // Babel adds braces around nested if statements to make dangling-else binding explicit.
    if (k === 'consequent' && v?.type === 'BlockStatement' && !v.directives?.length && v.body.length === 1 && v.body[0].type === 'IfStatement') return v.body[0];
    if (v?.type === 'LogicalExpression') {
      const operands = [];
      const flatten = x => { if (x.type === 'LogicalExpression' && x.operator === v.operator) { flatten(x.left); flatten(x.right); } else operands.push(x); };
      flatten(v);
      return {type:'NormalizedLogicalExpression', operator:v.operator, operands};
    }
    return v;
  });
}
fs.mkdirSync(path.join(root,'rebuilt'),{recursive:true});
const report = [];
for (const name of ['runtime','polyfills','main','operations']) {
  const ast = parser.parse(fs.readFileSync(path.join(root,'original',name+'.js'),'utf8'));
  // Apply the same printer to the original so printer-only AST changes are symmetric.
  const before = canonical(parser.parse(generate(ast,{jsescOption:{minimal:true}}).code).program);
  let table;
  walk(ast,n => {
    if (!table && n.type === 'CallExpression' && n.callee.type === 'MemberExpression' && n.callee.property.name === 'push' && n.arguments[0]?.type === 'ArrayExpression' && n.arguments[0].elements[1]?.type === 'ObjectExpression') table = n.arguments[0].elements[1];
  });
  let count = 0;
  for (const p of table?.properties ?? []) {
    const id = p.key.value ?? p.key.name;
    const recovered = parser.parse(fs.readFileSync(path.join(root,'modules',id+'.js'),'utf8'));
    p.value = recovered.program.body[0].expression;
    count++;
  }
  const result = generate(ast,{jsescOption:{minimal:true}}).code;
  const reparsed = parser.parse(result);
  const equal = before === canonical(reparsed.program);
  fs.writeFileSync(path.join(root,'rebuilt',name+'.js'),result);
  report.push({bundle:name,modules:count,astEquivalentToOriginal:equal});
}
fs.writeFileSync(path.join(root,'rebuild-verification.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
if (report.some(r => !r.astEquivalentToOriginal)) process.exitCode = 1;
