// Extracted from main; webpack module 32068. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      m = {}.hasOwnProperty;
    e = i(58563), Ae.exports = function (d) {
      function M(b, A, N) {
        if (M.__super__.constructor.call(this, b), null == A) throw new Error("Missing DTD element name");
        N || (N = "(#PCDATA)"), Array.isArray(N) && (N = "(" + N.join(",") + ")"), this.name = this.stringify.eleName(A), this.value = this.stringify.dtdElementValue(N);
      }
      return function (d, M) {
        for (var b in M) m.call(M, b) && (d[b] = M[b]);
        function A() {
          this.constructor = d;
        }
        A.prototype = M.prototype, d.prototype = new A(), d.__super__ = M.prototype;
      }(M, d), M.prototype.toString = function (b) {
        return this.options.writer.set(b).dtdElement(this);
      }, M;
    }(e);
  }).call(this);
});
