// Extracted from main; webpack module 61106. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(51708),
    e = i(45339);
  V.mul = function (m, d) {
    var M = new t(m.length + d.length - 1);
    M.fill(0);
    for (var b = 0; b < m.length; b++) for (var A = 0; A < d.length; A++) M[b + A] ^= e.mul(m[b], d[A]);
    return M;
  }, V.mod = function (m, d) {
    for (var M = new t(m); M.length - d.length >= 0;) {
      for (var b = M[0], A = 0; A < d.length; A++) M[A] ^= e.mul(d[A], b);
      for (var N = 0; N < M.length && 0 === M[N];) N++;
      M = M.slice(N);
    }
    return M;
  }, V.generateECPolynomial = function (m) {
    for (var d = new t([1]), M = 0; M < m; M++) d = V.mul(d, [1, e.exp(M)]);
    return d;
  };
});
