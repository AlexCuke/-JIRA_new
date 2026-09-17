// Extracted from main; webpack module 78372. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    b: () => m
  });
  var t = i(34986),
    e = i(54482),
    a = i(25403);
  function m(d, M = t.z) {
    return (0, e.e)((b, A) => {
      let N = null,
        I = null,
        O = null;
      const L = () => {
        if (N) {
          N.unsubscribe(), N = null;
          const v = I;
          I = null, A.next(v);
        }
      };
      function C() {
        const v = O + d,
          f = M.now();
        if (f < v) return N = this.schedule(void 0, v - f), void A.add(N);
        L();
      }
      b.subscribe(new a.Q(A, v => {
        I = v, O = M.now(), N || (N = M.schedule(C, d), A.add(N));
      }, () => {
        L(), A.complete();
      }, void 0, () => {
        I = N = null;
      }));
    });
  }
});
