// Extracted from main; webpack module 97783. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(64016);
  function e(a) {
    this.mode = t.NUMERIC, this.data = a.toString();
  }
  e.getBitsLength = function (m) {
    return 10 * Math.floor(m / 3) + (m % 3 ? m % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function () {
    return this.data.length;
  }, e.prototype.getBitsLength = function () {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function (m) {
    var d, M, b;
    for (d = 0; d + 3 <= this.data.length; d += 3) M = this.data.substr(d, 3), b = parseInt(M, 10), m.put(b, 10);
    var A = this.data.length - d;
    A > 0 && (M = this.data.substr(d), b = parseInt(M, 10), m.put(b, 3 * A + 1));
  }, Ae.exports = e;
});
