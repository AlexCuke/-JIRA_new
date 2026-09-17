// Extracted from main; webpack module 51772. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(54537);
  Ae.exports = function e(a, m) {
    var d = t(this, a),
      M = d.size;
    return d.set(a, m), this.size += d.size == M ? 0 : 1, this;
  };
});
