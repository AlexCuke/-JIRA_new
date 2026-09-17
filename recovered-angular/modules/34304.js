// Extracted from main; webpack module 34304. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e, a, {
    get: m,
    enumerable: d,
    value: M
  }) {
    if (m) return {
      enumerable: d,
      get() {
        const A = m.call(this);
        return Object.defineProperty(this, a, {
          enumerable: d,
          value: A
        }), A;
      }
    };
    if ("function" != typeof M) throw new Error("luPure can only be used with functions or getters");
    const b = M;
    return {
      enumerable: d,
      get() {
        let N,
          A = [];
        const I = (...O) => (A.length === O.length && O.every((L, C) => L === A[C]) || (A = O, N = b.apply(this, O)), N);
        return Object.defineProperty(this, a, {
          value: I
        }), I;
      }
    };
  }
  i.d(V, {
    J: () => t
  });
});
