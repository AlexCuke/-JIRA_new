// Extracted from main; webpack module 5238. Factory, not an ES module.
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
    return isNaN(A) ? new Date(NaN) : (A && b.setDate(b.getDate() + A), b);
  }
});
