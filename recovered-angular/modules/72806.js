// Extracted from main; webpack module 72806. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O: () => m,
    x: () => a
  });
  var t = i(42416);
  let e = null;
  function a(d) {
    if (t.v.useDeprecatedSynchronousErrorHandling) {
      const M = !e;
      if (M && (e = {
        errorThrown: !1,
        error: null
      }), d(), M) {
        const {
          errorThrown: b,
          error: A
        } = e;
        if (e = null, b) throw A;
      }
    } else d();
  }
  function m(d) {
    t.v.useDeprecatedSynchronousErrorHandling && e && (e.errorThrown = !0, e.error = d);
  }
});
