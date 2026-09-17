// Extracted from main; webpack module 9215. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(41840),
    e = i(34378),
    a = i(54981),
    m = i(67343),
    d = i(98895);
  function M(b) {
    var A = -1,
      N = null == b ? 0 : b.length;
    for (this.clear(); ++A < N;) {
      var I = b[A];
      this.set(I[0], I[1]);
    }
  }
  M.prototype.clear = t, M.prototype.delete = e, M.prototype.get = a, M.prototype.has = m, M.prototype.set = d, Ae.exports = M;
});
