// Extracted from main; webpack module 57359. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => e
  });
  var t = i(25403);
  function e(a, m, d, M, b) {
    return (A, N) => {
      let I = d,
        O = m,
        L = 0;
      A.subscribe(new t.Q(N, C => {
        const v = L++;
        O = I ? a(O, C, v) : (I = !0, C), M && N.next(O);
      }, b && (() => {
        I && N.next(O), N.complete();
      })));
    };
  }
});
