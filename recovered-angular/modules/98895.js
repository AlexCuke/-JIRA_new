// Extracted from main; webpack module 98895. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(43503);
  Ae.exports = function e(a, m) {
    var d = this.__data__,
      M = t(d, a);
    return M < 0 ? (++this.size, d.push([a, m])) : d[M][1] = m, this;
  };
});
