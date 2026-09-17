// Extracted from main; webpack module 85363. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Q: () => m
  });
  var t = i(39672),
    e = i(54482),
    a = i(25403);
  function m(d, M = 0) {
    return (0, e.e)((b, A) => {
      b.subscribe(new a.Q(A, N => (0, t.f)(A, d, () => A.next(N), M), () => (0, t.f)(A, d, () => A.complete(), M), N => (0, t.f)(A, d, () => A.error(N), M)));
    });
  }
});
