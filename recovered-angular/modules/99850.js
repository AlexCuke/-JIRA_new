// Extracted from main; webpack module 99850. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(10638),
    e = i(11184),
    a = i(70866),
    m = i(43771),
    d = i(51772);
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
