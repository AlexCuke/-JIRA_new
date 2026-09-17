// Extracted from main; webpack module 18505. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    b: () => d
  });
  var t = i(30576),
    e = i(54482),
    a = i(25403),
    m = i(44671);
  function d(M, b, A) {
    const N = (0, t.m)(M) || b || A ? {
      next: M,
      error: b,
      complete: A
    } : M;
    return N ? (0, e.e)((I, O) => {
      var L;
      null === (L = N.subscribe) || void 0 === L || L.call(N);
      let C = !0;
      I.subscribe(new a.Q(O, v => {
        var f;
        null === (f = N.next) || void 0 === f || f.call(N, v), O.next(v);
      }, () => {
        var v;
        C = !1, null === (v = N.complete) || void 0 === v || v.call(N), O.complete();
      }, v => {
        var f;
        C = !1, null === (f = N.error) || void 0 === f || f.call(N, v), O.error(v);
      }, () => {
        var v, f;
        C && (null === (v = N.unsubscribe) || void 0 === v || v.call(N)), null === (f = N.finalize) || void 0 === f || f.call(N);
      }));
    }) : m.y;
  }
});
