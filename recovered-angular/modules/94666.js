// Extracted from main; webpack module 94666. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t,
      m = {}.hasOwnProperty;
    t = i(58563), Ae.exports = function (d) {
      function M(b, A, N) {
        if (M.__super__.constructor.call(this, b), null == A) throw new Error("Missing instruction target");
        this.target = this.stringify.insTarget(A), N && (this.value = this.stringify.insValue(N));
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
        return this.options.writer.set(b).processingInstruction(this);
      }, M;
    }(t);
  }).call(this);
});
