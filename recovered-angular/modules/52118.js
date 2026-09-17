// Extracted from main; webpack module 52118. Factory, not an ES module.
(Ae => {
  function V() {
    this.buffer = [], this.length = 0;
  }
  V.prototype = {
    get: function (i) {
      var t = Math.floor(i / 8);
      return 1 == (this.buffer[t] >>> 7 - i % 8 & 1);
    },
    put: function (i, t) {
      for (var e = 0; e < t; e++) this.putBit(1 == (i >>> t - e - 1 & 1));
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (i) {
      var t = Math.floor(this.length / 8);
      this.buffer.length <= t && this.buffer.push(0), i && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
    }
  }, Ae.exports = V;
});
