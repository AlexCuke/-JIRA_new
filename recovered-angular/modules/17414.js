// Extracted from main; webpack module 17414. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    V: () => N,
    W: () => A
  });
  var t = i(34986),
    e = i(51165),
    a = i(54482),
    m = i(38421),
    d = i(83888),
    M = i(25403),
    b = i(39672);
  const A = (0, d.d)(O => function (C = null) {
    O(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = C;
  });
  function N(O, L) {
    const {
      first: C,
      each: v,
      with: f = I,
      scheduler: E = L ?? t.z,
      meta: h = null
    } = (0, e.q)(O) ? {
      first: O
    } : "number" == typeof O ? {
      each: O
    } : O;
    if (null == C && null == v) throw new TypeError("No timeout provided.");
    return (0, a.e)((x, u) => {
      let T,
        R,
        B = null,
        y = 0;
      const j = W => {
        R = (0, b.f)(u, E, () => {
          try {
            T.unsubscribe(), (0, m.Xf)(f({
              meta: h,
              lastValue: B,
              seen: y
            })).subscribe(u);
          } catch (F) {
            u.error(F);
          }
        }, W);
      };
      T = x.subscribe(new M.Q(u, W => {
        R?.unsubscribe(), y++, u.next(B = W), v > 0 && j(v);
      }, void 0, void 0, () => {
        R?.closed || R?.unsubscribe(), B = null;
      })), j(null != C ? "number" == typeof C ? C : +C - E.now() : v);
    });
  }
  function I(O) {
    throw new A(O);
  }
});
