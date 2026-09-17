// Extracted from main; webpack module 54742. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    D: () => d
  });
  const {
      isArray: t
    } = Array,
    {
      getPrototypeOf: e,
      prototype: a,
      keys: m
    } = Object;
  function d(b) {
    if (1 === b.length) {
      const A = b[0];
      if (t(A)) return {
        args: A,
        keys: null
      };
      if (function M(b) {
        return b && "object" == typeof b && e(b) === a;
      }(A)) {
        const N = m(A);
        return {
          args: N.map(I => A[I]),
          keys: N
        };
      }
    }
    return {
      args: b,
      keys: null
    };
  }
});
