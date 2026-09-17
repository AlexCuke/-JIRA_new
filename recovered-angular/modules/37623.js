// Extracted from main; webpack module 37623. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = i(9868),
    e = i(28115),
    a = i(40833),
    m = 864e5;
  function d(M, b) {
    (0, a.Z)(2, arguments);
    var A = (0, e.Z)(M),
      N = (0, e.Z)(b),
      I = A.getTime() - (0, t.Z)(A),
      O = N.getTime() - (0, t.Z)(N);
    return Math.round((I - O) / m);
  }
});
