// Extracted from main; webpack module 82722. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    R: () => d
  });
  var t = i(54482),
    e = i(25403),
    a = i(38421),
    m = i(25032);
  function d(M) {
    return (0, t.e)((b, A) => {
      (0, a.Xf)(M).subscribe(new e.Q(A, () => A.complete(), m.Z)), !A.closed && b.subscribe(A);
    });
  }
});
