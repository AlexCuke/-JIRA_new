// Extracted from main; webpack module 39841. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    a: () => I
  });
  var t = i(69751),
    e = i(54742),
    a = i(80188),
    m = i(44671),
    d = i(83268),
    M = i(63269),
    b = i(31810),
    A = i(25403),
    N = i(39672);
  function I(...C) {
    const v = (0, M.yG)(C),
      f = (0, M.jO)(C),
      {
        args: E,
        keys: h
      } = (0, e.D)(C);
    if (0 === E.length) return (0, a.D)([], v);
    const x = new t.y(function O(C, v, f = m.y) {
      return E => {
        L(v, () => {
          const {
              length: h
            } = C,
            x = new Array(h);
          let u = h,
            T = h;
          for (let R = 0; R < h; R++) L(v, () => {
            const B = (0, a.D)(C[R], v);
            let y = !1;
            B.subscribe(new A.Q(E, j => {
              x[R] = j, y || (y = !0, T--), T || E.next(f(x.slice()));
            }, () => {
              --u || E.complete();
            }));
          }, E);
        }, E);
      };
    }(E, v, h ? u => (0, b.n)(h, u) : m.y));
    return f ? x.pipe((0, d.Z)(f)) : x;
  }
  function L(C, v, f) {
    C ? (0, N.f)(f, C, v) : v();
  }
});
