// Extracted from main; webpack module 80449. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(64016),
    e = i(34792);
  function a(m) {
    this.mode = t.KANJI, this.data = m;
  }
  a.getBitsLength = function (d) {
    return 13 * d;
  }, a.prototype.getLength = function () {
    return this.data.length;
  }, a.prototype.getBitsLength = function () {
    return a.getBitsLength(this.data.length);
  }, a.prototype.write = function (m) {
    var d;
    for (d = 0; d < this.data.length; d++) {
      var M = e.toSJIS(this.data[d]);
      if (M >= 33088 && M <= 40956) M -= 33088;else {
        if (!(M >= 57408 && M <= 60351)) throw new Error("Invalid SJIS character: " + this.data[d] + "\nMake sure your charset is UTF-8");
        M -= 49472;
      }
      m.put(M = 192 * (M >>> 8 & 255) + (255 & M), 13);
    }
  }, Ae.exports = a;
});
