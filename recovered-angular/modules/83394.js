// Extracted from main; webpack module 83394. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = i(80953),
    e = i(62526),
    a = i(38779),
    m = i(40833);
  function d(M, b) {
    (0, m.Z)(2, arguments);
    var A = (0, t.Z)(M),
      N = (0, t.Z)(b),
      I = (0, a.Z)(A, N),
      O = Math.abs((0, e.Z)(A, N));
    A.setFullYear(1584), N.setFullYear(1584);
    var L = (0, a.Z)(A, N) === -I,
      C = I * (O - Number(L));
    return 0 === C ? 0 : C;
  }
});
