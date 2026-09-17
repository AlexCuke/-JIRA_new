// Extracted from main; webpack module 54994. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(64312),
    e = i(46421),
    a = i(15764),
    m = i(18685),
    d = i(26676);
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
