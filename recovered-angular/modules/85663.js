// Extracted from main; webpack module 85663. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(51708),
    e = i(64016);
  function a(m) {
    this.mode = e.BYTE, this.data = new t(m);
  }
  a.getBitsLength = function (d) {
    return 8 * d;
  }, a.prototype.getLength = function () {
    return this.data.length;
  }, a.prototype.getBitsLength = function () {
    return a.getBitsLength(this.data.length);
  }, a.prototype.write = function (m) {
    for (var d = 0, M = this.data.length; d < M; d++) m.put(this.data[d], 8);
  }, Ae.exports = a;
});
