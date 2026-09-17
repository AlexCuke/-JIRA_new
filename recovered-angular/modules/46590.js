// Extracted from main; webpack module 46590. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    d: () => a
  });
  var t = i(54482),
    e = i(25403);
  function a(m) {
    return (0, t.e)((d, M) => {
      let b = !1;
      d.subscribe(new e.Q(M, A => {
        b = !0, M.next(A);
      }, () => {
        b || M.next(m), M.complete();
      }));
    });
  }
});
