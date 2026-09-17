// Extracted from main; webpack module 17422. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.UPCE = V.UPC = V.EAN2 = V.EAN5 = V.EAN8 = V.EAN13 = void 0;
  var e = C(i(16195)),
    m = C(i(42523)),
    M = C(i(55174)),
    A = C(i(54500)),
    I = C(i(54102)),
    L = C(i(91285));
  function C(v) {
    return v && v.__esModule ? v : {
      default: v
    };
  }
  V.EAN13 = e.default, V.EAN8 = m.default, V.EAN5 = M.default, V.EAN2 = A.default, V.UPC = I.default, V.UPCE = L.default;
});
