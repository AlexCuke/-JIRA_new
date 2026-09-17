// Extracted from main; webpack module 91998. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    if (null === e || !0 === e || !1 === e) return NaN;
    var a = Number(e);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  i.d(V, {
    Z: () => t
  });
});
