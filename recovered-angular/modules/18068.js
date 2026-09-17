// Extracted from main; webpack module 18068. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    T: () => m
  });
  var t = i(86805),
    e = i(54482),
    a = i(25403);
  function m(M = d) {
    return (0, e.e)((b, A) => {
      let N = !1;
      b.subscribe(new a.Q(A, I => {
        N = !0, A.next(I);
      }, () => N ? A.complete() : A.error(M())));
    });
  }
  function d() {
    return new t.K();
  }
});
