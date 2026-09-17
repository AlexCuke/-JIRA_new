// Extracted from main; webpack module 63900. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    w: () => m
  });
  var t = i(38421),
    e = i(54482),
    a = i(25403);
  function m(d, M) {
    return (0, e.e)((b, A) => {
      let N = null,
        I = 0,
        O = !1;
      const L = () => O && !N && A.complete();
      b.subscribe(new a.Q(A, C => {
        N?.unsubscribe();
        let v = 0;
        const f = I++;
        (0, t.Xf)(d(C, f)).subscribe(N = new a.Q(A, E => A.next(M ? M(C, E, f, v++) : E), () => {
          N = null, L();
        }));
      }, () => {
        O = !0, L();
      }));
    });
  }
});
