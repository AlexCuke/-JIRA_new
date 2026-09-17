// Extracted from main; webpack module 11365. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    M: () => b
  });
  var t = i(54482),
    e = i(25403),
    a = i(38421),
    m = i(44671),
    d = i(25032),
    M = i(63269);
  function b(...A) {
    const N = (0, M.jO)(A);
    return (0, t.e)((I, O) => {
      const L = A.length,
        C = new Array(L);
      let v = A.map(() => !1),
        f = !1;
      for (let E = 0; E < L; E++) (0, a.Xf)(A[E]).subscribe(new e.Q(O, h => {
        C[E] = h, !f && !v[E] && (v[E] = !0, (f = v.every(m.y)) && (v = null));
      }, d.Z));
      I.subscribe(new e.Q(O, E => {
        if (f) {
          const h = [E, ...C];
          O.next(N ? N(...h) : h);
        }
      }));
    });
  }
});
