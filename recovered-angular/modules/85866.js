// Extracted from main; webpack module 85866. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => m
  });
  var t = i(91998),
    e = i(80953),
    a = i(40833);
  function m(d, M) {
    (0, a.Z)(2, arguments);
    var b = (0, e.Z)(d),
      A = (0, t.Z)(M);
    if (isNaN(A)) return new Date(NaN);
    if (!A) return b;
    var N = b.getDate(),
      I = new Date(b.getTime());
    return I.setMonth(b.getMonth() + A + 1, 0), N >= I.getDate() ? I : (b.setFullYear(I.getFullYear(), I.getMonth(), N), b);
  }
});
