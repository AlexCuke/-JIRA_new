// Extracted from main; webpack module 12636. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(51708),
    e = i(61106);
  function a(m) {
    this.genPoly = void 0, this.degree = m, this.degree && this.initialize(this.degree);
  }
  a.prototype.initialize = function (d) {
    this.degree = d, this.genPoly = e.generateECPolynomial(this.degree);
  }, a.prototype.encode = function (d) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    var M = new t(this.degree);
    M.fill(0);
    var b = t.concat([d, M], d.length + this.degree),
      A = e.mod(b, this.genPoly),
      N = this.degree - A.length;
    if (N > 0) {
      var I = new t(this.degree);
      return I.fill(0), A.copy(I, N), I;
    }
    return A;
  }, Ae.exports = a;
});
