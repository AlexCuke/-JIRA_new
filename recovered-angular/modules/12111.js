// Extracted from main; webpack module 12111. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    H: () => e,
    O: () => a
  });
  const t = new Map();
  function e(m) {
    return `${m.getFullYear()}-${String(m.getMonth() + 1).padStart(2, "0")}-${String(m.getDate()).padStart(2, "0")}`;
  }
  function a(m) {
    let d = t.get(m);
    if (void 0 !== d) return d;
    const M = /^(\d{4}-\d{2}-\d{2})/.exec(String(m).trim());
    if (M) d = M[1];else {
      const b = new Date(m);
      d = `${b.getUTCFullYear()}-${String(b.getUTCMonth() + 1).padStart(2, "0")}-${String(b.getUTCDate()).padStart(2, "0")}`;
    }
    return t.size > 1e4 && t.clear(), t.set(m, d), d;
  }
});
