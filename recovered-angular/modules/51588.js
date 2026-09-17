// Extracted from main; webpack module 51588. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => O
  });
  const e = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  let a;
  const m = new Uint8Array(16);
  function d() {
    if (!a && (a = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !a)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return a(m);
  }
  const M = [];
  for (let L = 0; L < 256; ++L) M.push((L + 256).toString(16).slice(1));
  const O = function I(L, C, v) {
    if (e.randomUUID && !C && !L) return e.randomUUID();
    const f = (L = L || {}).random || (L.rng || d)();
    if (f[6] = 15 & f[6] | 64, f[8] = 63 & f[8] | 128, C) {
      v = v || 0;
      for (let E = 0; E < 16; ++E) C[v + E] = f[E];
      return C;
    }
    return function b(L, C = 0) {
      return M[L[C + 0]] + M[L[C + 1]] + M[L[C + 2]] + M[L[C + 3]] + "-" + M[L[C + 4]] + M[L[C + 5]] + "-" + M[L[C + 6]] + M[L[C + 7]] + "-" + M[L[C + 8]] + M[L[C + 9]] + "-" + M[L[C + 10]] + M[L[C + 11]] + M[L[C + 12]] + M[L[C + 13]] + M[L[C + 14]] + M[L[C + 15]];
    }(f);
  };
});
