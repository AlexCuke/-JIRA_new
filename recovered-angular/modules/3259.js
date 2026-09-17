// Extracted from main; webpack module 3259. Factory, not an ES module.
((Ae, V, i) => {
  var e = i(88695),
    a = i(71465),
    m = i(23210),
    d = i(22334);
  function M(b, A, N, I, O) {
    var L = [].slice.call(arguments, 1),
      C = L.length,
      v = "function" == typeof L[C - 1];
    if (!v && !e()) throw new Error("Callback required as last argument");
    if (!v) {
      if (C < 1) throw new Error("Too few arguments provided");
      return 1 === C ? (N = A, A = I = void 0) : 2 === C && !A.getContext && (I = N, N = A, A = void 0), new Promise(function (E, h) {
        try {
          var x = a.create(N, I);
          E(b(x, A, I));
        } catch (u) {
          h(u);
        }
      });
    }
    if (C < 2) throw new Error("Too few arguments provided");
    2 === C ? (O = N, N = A, A = I = void 0) : 3 === C && (A.getContext && typeof O > "u" ? (O = I, I = void 0) : (O = I, I = N, N = A, A = void 0));
    try {
      var f = a.create(N, I);
      O(null, b(f, A, I));
    } catch (E) {
      O(E);
    }
  }
  V.rT = M.bind(null, m.render), V.hz = M.bind(null, m.renderToDataURL), V.toString = M.bind(null, function (b, A, N) {
    return d.render(b, N);
  });
});
