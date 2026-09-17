// Extracted from main; webpack module 7070. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => N
  });
  var t = i(80953),
    e = i(74697),
    a = i(51834),
    m = i(40833),
    d = i(91998),
    M = i(58370),
    A = 6048e5;
  function N(I, O) {
    (0, m.Z)(1, arguments);
    var L = (0, t.Z)(I),
      C = (0, e.Z)(L, O).getTime() - function b(I, O) {
        var L, C, v, f, E, h, x, u;
        (0, m.Z)(1, arguments);
        var T = (0, M.j)(),
          R = (0, d.Z)(null !== (L = null !== (C = null !== (v = null !== (f = O?.firstWeekContainsDate) && void 0 !== f ? f : null == O || null === (E = O.locale) || void 0 === E || null === (h = E.options) || void 0 === h ? void 0 : h.firstWeekContainsDate) && void 0 !== v ? v : T.firstWeekContainsDate) && void 0 !== C ? C : null === (x = T.locale) || void 0 === x || null === (u = x.options) || void 0 === u ? void 0 : u.firstWeekContainsDate) && void 0 !== L ? L : 1),
          B = (0, a.Z)(I, O),
          y = new Date(0);
        return y.setUTCFullYear(B, 0, R), y.setUTCHours(0, 0, 0, 0), (0, e.Z)(y, O);
      }(L, O).getTime();
    return Math.round(C / A) + 1;
  }
});
