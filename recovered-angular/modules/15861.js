// Extracted from main; webpack module 15861. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(a, m, d, M, b, A, N) {
    try {
      var I = a[A](N),
        O = I.value;
    } catch (L) {
      return void d(L);
    }
    I.done ? m(O) : Promise.resolve(O).then(M, b);
  }
  function e(a) {
    return function () {
      var m = this,
        d = arguments;
      return new Promise(function (M, b) {
        var A = a.apply(m, d);
        function N(O) {
          t(A, M, b, N, I, "next", O);
        }
        function I(O) {
          t(A, M, b, N, I, "throw", O);
        }
        N(void 0);
      });
    };
  }
  i.d(V, {
    Z: () => e
  });
});
