// Extracted from main; webpack module 15635. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Bn: () => C,
    EN: () => e,
    HD: () => m,
    Nj: () => u,
    Sk: () => E,
    Uh: () => f,
    _2: () => O,
    es: () => T,
    hj: () => d,
    hr: () => x,
    jn: () => a,
    kJ: () => A,
    qy: () => h
  });
  var t = i(94650);
  function e(R) {
    return null != R && ("string" != typeof R || "" !== R);
  }
  function a(R) {
    return "boolean" == typeof R;
  }
  function m(R) {
    return "string" == typeof R;
  }
  function d(R) {
    return "number" == typeof R;
  }
  function A(R) {
    return Array.isArray(R);
  }
  function O(R) {
    return e(R) ? Array.isArray(R) ? R : function I(R) {
      return null !== R && "function" == typeof R[Symbol.iterator] && "string" != typeof R;
    }(R) ? Array.from(R) : [R] : [];
  }
  function C(R) {
    return function N(R) {
      return R.some(B => A(B));
    }(R) ? R.reduce((B, y) => B.concat(A(y) ? C(y) : y), []) : R;
  }
  function f(R) {
    return e(R) && (Array.isArray(R) && !!R.length || "string" == typeof R && !!R.length || !["string"].includes(typeof R) && !Array.isArray(R));
  }
  function E(R, B, y) {
    let j = String(y ?? " "),
      W = B;
    return j = String(j ?? " "), R.length >= W ? String(R) : (W -= R.length, W > j.length && (j += j.repeat(B / j.length)), j.slice(0, B) + String(R));
  }
  function h(R, B, y) {
    let j = String(y ?? " "),
      W = B;
    return R.length >= W ? String(R) : (W -= R.length, W > j.length && (j += j.repeat(W / j.length)), String(R) + j.slice(0, W));
  }
  function x(R) {
    return R.replace(/[[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
  function u(R) {
    return R instanceof t.SBq ? R.nativeElement : R;
  }
  function T(R, B, y = {}) {
    const j = Object.keys({
        ...R,
        ...B
      }),
      W = {};
    for (const F of j) W[F] = R[F] !== B[F] && e(B[F]) ? B[F] : (y && y[F]) ?? R[F];
    return W;
  }
});
