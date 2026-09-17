// Extracted from main; webpack module 54789. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      a,
      d = {}.hasOwnProperty;
    a = i(3452).isObject, e = i(58563), Ae.exports = function (M) {
      function b(A, N, I, O) {
        var L;
        b.__super__.constructor.call(this, A), a(N) && (N = (L = N).version, I = L.encoding, O = L.standalone), N || (N = "1.0"), this.version = this.stringify.xmlVersion(N), null != I && (this.encoding = this.stringify.xmlEncoding(I)), null != O && (this.standalone = this.stringify.xmlStandalone(O));
      }
      return function (M, b) {
        for (var A in b) d.call(b, A) && (M[A] = b[A]);
        function N() {
          this.constructor = M;
        }
        N.prototype = b.prototype, M.prototype = new N(), M.__super__ = b.prototype;
      }(b, M), b.prototype.toString = function (A) {
        return this.options.writer.set(A).declaration(this);
      }, b;
    }(e);
  }).call(this);
});
