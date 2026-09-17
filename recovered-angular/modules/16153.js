// Extracted from main; webpack module 16153. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => A
  });
  var t = i(80953),
    e = i(40833),
    m = i(38779),
    d = i(32722),
    M = i(81664);
  function A(N, I) {
    (0, e.Z)(2, arguments);
    var f,
      O = (0, t.Z)(N),
      L = (0, t.Z)(I),
      C = (0, m.Z)(O, L),
      v = Math.abs(function a(N, I) {
        (0, e.Z)(2, arguments);
        var O = (0, t.Z)(N),
          L = (0, t.Z)(I);
        return 12 * (O.getFullYear() - L.getFullYear()) + (O.getMonth() - L.getMonth());
      }(O, L));
    if (v < 1) f = 0;else {
      1 === O.getMonth() && O.getDate() > 27 && O.setDate(30), O.setMonth(O.getMonth() - C * v);
      var E = (0, m.Z)(O, L) === -C;
      (function b(N) {
        (0, e.Z)(1, arguments);
        var I = (0, t.Z)(N);
        return (0, d.Z)(I).getTime() === (0, M.Z)(I).getTime();
      })((0, t.Z)(N)) && 1 === v && 1 === (0, m.Z)(N, L) && (E = !1), f = C * (v - Number(E));
    }
    return 0 === f ? 0 : f;
  }
});
