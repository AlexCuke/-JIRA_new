// Extracted from main; webpack module 59468. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    p: () => A
  });
  var t = i(34986),
    e = i(54482),
    a = i(25403),
    m = i(38421);
  const d = {
    leading: !0,
    trailing: !1
  };
  var b = i(82805);
  function A(N, I = t.z, O = d) {
    const L = (0, b.H)(N, I);
    return function M(N, I = d) {
      return (0, e.e)((O, L) => {
        const {
          leading: C,
          trailing: v
        } = I;
        let f = !1,
          E = null,
          h = null,
          x = !1;
        const u = () => {
            h?.unsubscribe(), h = null, v && (B(), x && L.complete());
          },
          T = () => {
            h = null, x && L.complete();
          },
          R = y => h = (0, m.Xf)(N(y)).subscribe(new a.Q(L, u, T)),
          B = () => {
            if (f) {
              f = !1;
              const y = E;
              E = null, L.next(y), !x && R(y);
            }
          };
        O.subscribe(new a.Q(L, y => {
          f = !0, E = y, (!h || h.closed) && (C ? B() : R(y));
        }, () => {
          x = !0, (!(v && f && h) || h.closed) && L.complete();
        }));
      });
    }(() => L, O);
  }
});
