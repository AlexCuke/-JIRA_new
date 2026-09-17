// Extracted from main; webpack module 95698. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    q: () => m
  });
  var t = i(60515),
    e = i(54482),
    a = i(25403);
  function m(d) {
    return d <= 0 ? () => t.E : (0, e.e)((M, b) => {
      let A = 0;
      M.subscribe(new a.Q(b, N => {
        ++A <= d && (b.next(N), d <= A && b.complete());
      }));
    });
  }
});
