// Extracted from main; webpack module 39300. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    h: () => a
  });
  var t = i(54482),
    e = i(25403);
  function a(m, d) {
    return (0, t.e)((M, b) => {
      let A = 0;
      M.subscribe(new e.Q(b, N => m.call(d, N, A++) && b.next(N)));
    });
  }
});
