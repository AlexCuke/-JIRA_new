// Extracted from main; webpack module 43429. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    D: () => e
  });
  var t = i(31061);
  function e(a, m = {}) {
    return function (d, M) {
      const b = Reflect.getMetadata("design:type", d, M);
      t.m.addTypeMetadata({
        target: d.constructor,
        propertyName: M,
        reflectedType: b,
        typeFunction: a,
        options: m
      });
    };
  }
});
