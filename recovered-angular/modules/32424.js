// Extracted from main; webpack module 32424. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(64016),
    e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function a(m) {
    this.mode = t.ALPHANUMERIC, this.data = m;
  }
  a.getBitsLength = function (d) {
    return 11 * Math.floor(d / 2) + d % 2 * 6;
  }, a.prototype.getLength = function () {
    return this.data.length;
  }, a.prototype.getBitsLength = function () {
    return a.getBitsLength(this.data.length);
  }, a.prototype.write = function (d) {
    var M;
    for (M = 0; M + 2 <= this.data.length; M += 2) {
      var b = 45 * e.indexOf(this.data[M]);
      b += e.indexOf(this.data[M + 1]), d.put(b, 11);
    }
    this.data.length % 2 && d.put(e.indexOf(this.data[M]), 6);
  }, Ae.exports = a;
});
