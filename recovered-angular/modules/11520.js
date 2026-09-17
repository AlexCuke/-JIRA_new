// Extracted from main; webpack module 11520. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    G: () => a
  });
  var t = i(54482),
    e = i(25403);
  function a() {
    return (0, t.e)((m, d) => {
      let M,
        b = !1;
      m.subscribe(new e.Q(d, A => {
        const N = M;
        M = A, b && d.next([N, A]), b = !0;
      }));
    });
  }
});
