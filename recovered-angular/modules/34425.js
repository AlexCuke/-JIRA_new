// Extracted from main; webpack module 34425. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(51708);
  function e(a) {
    if (!a || a < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = a, this.data = new t(a * a), this.data.fill(0), this.reservedBit = new t(a * a), this.reservedBit.fill(0);
  }
  e.prototype.set = function (a, m, d, M) {
    var b = a * this.size + m;
    this.data[b] = d, M && (this.reservedBit[b] = !0);
  }, e.prototype.get = function (a, m) {
    return this.data[a * this.size + m];
  }, e.prototype.xor = function (a, m, d) {
    this.data[a * this.size + m] ^= d;
  }, e.prototype.isReserved = function (a, m) {
    return this.reservedBit[a * this.size + m];
  }, Ae.exports = e;
});
