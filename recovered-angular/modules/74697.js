// Extracted from main; webpack module 74697. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = i(80953),
    e = i(40833),
    a = i(91998),
    m = i(58370);
  function d(M, b) {
    var A, N, I, O, L, C, v, f;
    (0, e.Z)(1, arguments);
    var E = (0, m.j)(),
      h = (0, a.Z)(null !== (A = null !== (N = null !== (I = null !== (O = b?.weekStartsOn) && void 0 !== O ? O : null == b || null === (L = b.locale) || void 0 === L || null === (C = L.options) || void 0 === C ? void 0 : C.weekStartsOn) && void 0 !== I ? I : E.weekStartsOn) && void 0 !== N ? N : null === (v = E.locale) || void 0 === v || null === (f = v.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== A ? A : 0);
    if (!(h >= 0 && h <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var x = (0, t.Z)(M),
      u = x.getUTCDay(),
      T = (u < h ? 7 : 0) + u - h;
    return x.setUTCDate(x.getUTCDate() - T), x.setUTCHours(0, 0, 0, 0), x;
  }
});
