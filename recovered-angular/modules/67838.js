// Extracted from main; webpack module 67838. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(a) {
    e(a, "Ссылка на протокол"), e(a, "Ссылка на услугу");
  }
  function e(a, m) {
    const d = a.findIndex(M => M.getData() && M.getData()["|meaning"] === m);
    if (d > -1) {
      const M = a.splice(d, 1);
      a.unshift(M[0]);
    }
  }
  i.d(V, {
    _: () => t
  });
});
