// Extracted from main; webpack module 33981. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    o: () => e
  });
  var t = i(31061);
  function e(a = {}) {
    return function (m, d) {
      t.m.addExcludeMetadata({
        target: m instanceof Function ? m : m.constructor,
        propertyName: d,
        options: a
      });
    };
  }
});
