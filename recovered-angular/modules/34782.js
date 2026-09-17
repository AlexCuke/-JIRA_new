// Extracted from main; webpack module 34782. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    d: () => a
  });
  var t = i(4707),
    e = i(13099);
  function a(m, d, M) {
    var b, A;
    let N,
      I = !1;
    return m && "object" == typeof m ? (N = null !== (b = m.bufferSize) && void 0 !== b ? b : 1 / 0, d = null !== (A = m.windowTime) && void 0 !== A ? A : 1 / 0, I = !!m.refCount, M = m.scheduler) : N = m ?? 1 / 0, (0, e.B)({
      connector: () => new t.t(N, d, M),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: I
    });
  }
});
