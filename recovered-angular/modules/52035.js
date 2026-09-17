// Extracted from main; webpack module 52035. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    h: () => m
  });
  var t = i(60515),
    e = i(54482),
    a = i(25403);
  function m(d) {
    return d <= 0 ? () => t.E : (0, e.e)((M, b) => {
      let A = [];
      M.subscribe(new a.Q(b, N => {
        A.push(N), d < A.length && A.shift();
      }, () => {
        for (const N of A) b.next(N);
        b.complete();
      }, void 0, () => {
        A = null;
      }));
    });
  }
});
