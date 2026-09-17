// Extracted from main; webpack module 4128. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    D: () => A
  });
  var t = i(69751),
    e = i(54742),
    a = i(38421),
    m = i(63269),
    d = i(25403),
    M = i(83268),
    b = i(31810);
  function A(...N) {
    const I = (0, m.jO)(N),
      {
        args: O,
        keys: L
      } = (0, e.D)(N),
      C = new t.y(v => {
        const {
          length: f
        } = O;
        if (!f) return void v.complete();
        const E = new Array(f);
        let h = f,
          x = f;
        for (let u = 0; u < f; u++) {
          let T = !1;
          (0, a.Xf)(O[u]).subscribe(new d.Q(v, R => {
            T || (T = !0, x--), E[u] = R;
          }, () => h--, void 0, () => {
            (!h || !T) && (x || v.next(L ? (0, b.n)(L, E) : E), v.complete());
          }));
        }
      });
    return I ? C.pipe((0, M.Z)(I)) : C;
  }
});
