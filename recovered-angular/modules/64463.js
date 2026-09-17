// Extracted from main; webpack module 64463. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    K$: () => M,
    s: () => e
  });
  var t = i(89188);
  function e(b) {
    if (null == b || "" === b) return null;
    const A = Number(String(b).replace(",", "."));
    return Number.isFinite(A) ? A : null;
  }
  function M(b, A, N) {
    switch (b) {
      case "temperature":
        return function a(b) {
          const A = e(b);
          return null != A && A >= 38;
        }(A);
      case "sys":
      case "dia":
        return function m(b, A) {
          const N = e(b),
            I = e(A);
          return null != N && N >= 180 || null != I && I >= 110;
        }("sys" === b ? A : N?.sys, "dia" === b ? A : N?.dia);
      case "sp":
        return function d(b) {
          return null != b && "" !== b && (0, t.fW)("sp", String(b)) >= 3;
        }(A);
      default:
        return !1;
    }
  }
});
