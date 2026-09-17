// Extracted from main; webpack module 91361. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      m = {}.hasOwnProperty;
    e = i(58563), Ae.exports = function (d) {
      function M(b, A) {
        if (M.__super__.constructor.call(this, b), null == A) throw new Error("Missing CDATA text");
        this.text = this.stringify.cdata(A);
      }
      return function (d, M) {
        for (var b in M) m.call(M, b) && (d[b] = M[b]);
        function A() {
          this.constructor = d;
        }
        A.prototype = M.prototype, d.prototype = new A(), d.__super__ = M.prototype;
      }(M, d), M.prototype.clone = function () {
        return Object.create(this);
      }, M.prototype.toString = function (b) {
        return this.options.writer.set(b).cdata(this);
      }, M;
    }(e);
  }).call(this);
});
