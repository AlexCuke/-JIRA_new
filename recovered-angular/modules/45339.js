// Extracted from main; webpack module 45339. Factory, not an ES module.
((Ae, V, i) => {
  var e,
    a,
    t = i(51708);
  t.alloc ? (e = t.alloc(512), a = t.alloc(256)) : (e = new t(512), a = new t(256)), function () {
    for (var d = 1, M = 0; M < 255; M++) e[M] = d, a[d] = M, 256 & (d <<= 1) && (d ^= 285);
    for (M = 255; M < 512; M++) e[M] = e[M - 255];
  }(), V.log = function (d) {
    if (d < 1) throw new Error("log(" + d + ")");
    return a[d];
  }, V.exp = function (d) {
    return e[d];
  }, V.mul = function (d, M) {
    return 0 === d || 0 === M ? 0 : e[a[d] + a[M]];
  };
});
