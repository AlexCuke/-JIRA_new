// Extracted from main; webpack module 13099. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    B: () => M
  });
  var t = i(80188),
    e = i(95698),
    a = i(77579),
    m = i(70930),
    d = i(54482);
  function M(A = {}) {
    const {
      connector: N = () => new a.x(),
      resetOnError: I = !0,
      resetOnComplete: O = !0,
      resetOnRefCountZero: L = !0
    } = A;
    return C => {
      let v = null,
        f = null,
        E = null,
        h = 0,
        x = !1,
        u = !1;
      const T = () => {
          f?.unsubscribe(), f = null;
        },
        R = () => {
          T(), v = E = null, x = u = !1;
        },
        B = () => {
          const y = v;
          R(), y?.unsubscribe();
        };
      return (0, d.e)((y, j) => {
        h++, !u && !x && T();
        const W = E = E ?? N();
        j.add(() => {
          h--, 0 === h && !u && !x && (f = b(B, L));
        }), W.subscribe(j), v || (v = new m.Hp({
          next: F => W.next(F),
          error: F => {
            u = !0, T(), f = b(R, I, F), W.error(F);
          },
          complete: () => {
            x = !0, T(), f = b(R, O), W.complete();
          }
        }), (0, t.D)(y).subscribe(v));
      })(C);
    };
  }
  function b(A, N, ...I) {
    return !0 === N ? (A(), null) : !1 === N ? null : N(...I).pipe((0, e.q)(1)).subscribe(() => A());
  }
});
