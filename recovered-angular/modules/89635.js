// Extracted from main; webpack module 89635. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => a,
    z: () => e
  });
  var t = i(44671);
  function e(...m) {
    return a(m);
  }
  function a(m) {
    return 0 === m.length ? t.y : 1 === m.length ? m[0] : function (M) {
      return m.reduce((b, A) => A(b), M);
    };
  }
});
