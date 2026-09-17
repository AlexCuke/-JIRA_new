// Extracted from main; webpack module 56697. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(a, m) {
    return a <= m && a >= 0 && m >= 0 && Number.isInteger(a) && a !== 1 / 0 && (Number.isInteger(m) || m === 1 / 0);
  }
  function e(a, m) {
    return [...new Set([...a, ...m])];
  }
  i.d(V, {
    G: () => e,
    x: () => t
  });
});
