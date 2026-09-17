// Extracted from main; webpack module 51834. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => M
  });
  var t = i(80953),
    e = i(40833),
    a = i(74697),
    m = i(91998),
    d = i(58370);
  function M(b, A) {
    var N, I, O, L, C, v, f, E;
    (0, e.Z)(1, arguments);
    var h = (0, t.Z)(b),
      x = h.getUTCFullYear(),
      u = (0, d.j)(),
      T = (0, m.Z)(null !== (N = null !== (I = null !== (O = null !== (L = A?.firstWeekContainsDate) && void 0 !== L ? L : null == A || null === (C = A.locale) || void 0 === C || null === (v = C.options) || void 0 === v ? void 0 : v.firstWeekContainsDate) && void 0 !== O ? O : u.firstWeekContainsDate) && void 0 !== I ? I : null === (f = u.locale) || void 0 === f || null === (E = f.options) || void 0 === E ? void 0 : E.firstWeekContainsDate) && void 0 !== N ? N : 1);
    if (!(T >= 1 && T <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var R = new Date(0);
    R.setUTCFullYear(x + 1, 0, T), R.setUTCHours(0, 0, 0, 0);
    var B = (0, a.Z)(R, A),
      y = new Date(0);
    y.setUTCFullYear(x, 0, T), y.setUTCHours(0, 0, 0, 0);
    var j = (0, a.Z)(y, A);
    return h.getTime() >= B.getTime() ? x + 1 : h.getTime() >= j.getTime() ? x : x - 1;
  }
});
