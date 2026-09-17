// Extracted from main; webpack module 54004. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => a
  });
  var t = i(54482),
    e = i(25403);
  function a(m, d) {
    return (0, t.e)((M, b) => {
      let A = 0;
      M.subscribe(new e.Q(b, N => {
        b.next(m.call(d, N, A++));
      }));
    });
  }
});
