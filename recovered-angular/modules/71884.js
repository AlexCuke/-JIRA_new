// Extracted from main; webpack module 71884. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    x: () => m
  });
  var t = i(44671),
    e = i(54482),
    a = i(25403);
  function m(M, b = t.y) {
    return M = M ?? d, (0, e.e)((A, N) => {
      let I,
        O = !0;
      A.subscribe(new a.Q(N, L => {
        const C = b(L);
        (O || !M(I, C)) && (O = !1, I = C, N.next(L));
      }));
    });
  }
  function d(M, b) {
    return M === b;
  }
});
