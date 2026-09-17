// Extracted from main; webpack module 60883. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = i(91998),
    e = i(80953),
    a = i(23882),
    m = i(40833);
  function d(M, b) {
    (0, m.Z)(2, arguments);
    var A = (0, e.Z)(M),
      N = (0, t.Z)(b),
      I = A.getFullYear(),
      O = A.getDate(),
      L = new Date(0);
    L.setFullYear(I, N, 15), L.setHours(0, 0, 0, 0);
    var C = (0, a.Z)(L);
    return A.setMonth(N, Math.min(O, C)), A;
  }
});
