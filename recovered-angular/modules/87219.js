// Extracted from main; webpack module 87219. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Rc: () => m,
    sZ: () => d
  });
  const t = ["rr", "sp", "oxygenation", "temperature", "sys", "hr", "consciousness"];
  function e(M) {
    return null != M && "" !== M && (!Array.isArray(M) || M.length > 0);
  }
  function m(M) {
    if (!M) return !1;
    for (const b of t) if (!e(M[b])) return !1;
    return !(function a(M) {
      const b = Number(M);
      return Number.isFinite(b) && b > 0;
    }(M.oxygenation) && !e(M.oxygenationDevice));
  }
  function d(M) {
    return null == M ? M : structuredClone(M);
  }
});
