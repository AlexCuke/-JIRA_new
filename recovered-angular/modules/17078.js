// Extracted from main; webpack module 17078. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(34792),
    m = t.getBCHDigit(1335);
  V.getEncodedBits = function (M, b) {
    for (var A = M.bit << 3 | b, N = A << 10; t.getBCHDigit(N) - m >= 0;) N ^= 1335 << t.getBCHDigit(N) - m;
    return 21522 ^ (A << 10 | N);
  };
});
