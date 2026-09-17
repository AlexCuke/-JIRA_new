// Extracted from main; webpack module 95577. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => A
  });
  var t = i(54004),
    e = i(38421),
    a = i(54482),
    m = i(39672),
    d = i(25403),
    b = i(30576);
  function A(N, I, O = 1 / 0) {
    return (0, b.m)(I) ? A((L, C) => (0, t.U)((v, f) => I(L, v, C, f))((0, e.Xf)(N(L, C))), O) : ("number" == typeof I && (O = I), (0, a.e)((L, C) => function M(N, I, O, L, C, v, f, E) {
      const h = [];
      let x = 0,
        u = 0,
        T = !1;
      const R = () => {
          T && !h.length && !x && I.complete();
        },
        B = j => x < L ? y(j) : h.push(j),
        y = j => {
          v && I.next(j), x++;
          let W = !1;
          (0, e.Xf)(O(j, u++)).subscribe(new d.Q(I, F => {
            C?.(F), v ? B(F) : I.next(F);
          }, () => {
            W = !0;
          }, void 0, () => {
            if (W) try {
              for (x--; h.length && x < L;) {
                const F = h.shift();
                f ? (0, m.f)(I, f, () => y(F)) : y(F);
              }
              R();
            } catch (F) {
              I.error(F);
            }
          }));
        };
      return N.subscribe(new d.Q(I, B, () => {
        T = !0, R();
      })), () => {
        E?.();
      };
    }(L, C, N, O)));
  }
});
