// Extracted from main; webpack module 10519. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      a,
      m,
      d,
      b = {}.hasOwnProperty;
    d = i(3452).isPlainObject, e = i(58563), m = i(85041), a = i(34354), Ae.exports = function (A) {
      function N(I) {
        N.__super__.constructor.call(this, null), I || (I = {}), I.writer || (I.writer = new a()), this.options = I, this.stringify = new m(I), this.isDocument = !0;
      }
      return function (A, N) {
        for (var I in N) b.call(N, I) && (A[I] = N[I]);
        function O() {
          this.constructor = A;
        }
        O.prototype = N.prototype, A.prototype = new O(), A.__super__ = N.prototype;
      }(N, A), N.prototype.end = function (I) {
        return I ? d(I) && (I = this.options.writer.set(I)) : I = this.options.writer, I.document(this);
      }, N.prototype.toString = function (I) {
        return this.options.writer.set(I).document(this);
      }, N;
    }(e);
  }).call(this);
});
