// Extracted from main; webpack module 21281. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Eq: () => d,
    HM: () => M,
    Ig: () => e,
    fI: () => b,
    su: () => a
  });
  var t = i(94650);
  function e(N) {
    return null != N && "false" != `${N}`;
  }
  function a(N, I = 0) {
    return function m(N) {
      return !isNaN(parseFloat(N)) && !isNaN(Number(N));
    }(N) ? Number(N) : I;
  }
  function d(N) {
    return Array.isArray(N) ? N : [N];
  }
  function M(N) {
    return null == N ? "" : "string" == typeof N ? N : `${N}px`;
  }
  function b(N) {
    return N instanceof t.SBq ? N.nativeElement : N;
  }
});
