// Extracted from main; webpack module 69879. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function e(M) {
    const b = function t(M) {
        return Object.keys(M ?? {}).filter(b => b.startsWith("day_")).sort();
      }(M),
      A = b[b.length - 1];
    return A ? M?.[A] : void 0;
  }
  function a(M) {
    const b = M?.anthropometricData;
    if (!b) return;
    if (b.metrics_by_days) return b.metrics_by_days;
    const {
      elements: A
    } = b;
    return A ? Array.isArray(A) ? A.reduce((N, I, O) => {
      const L = I.date?.replace(/-/g, "_");
      return N[L ? `day_${L}` : `day_${O}`] = I, N;
    }, {}) : A : void 0;
  }
  function m(M) {
    const A = e(a(M))?.anthroWeight;
    if (null == A) return null;
    const N = Number(A);
    return Number.isFinite(N) ? N : null;
  }
  function d(M) {
    const b = M?.anthropometricData;
    return b?.compositionUid ? b.compositionUid : e(a(M))?.compositionUid;
  }
  i.d(V, {
    sc: () => d,
    vt: () => m
  });
});
