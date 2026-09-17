// Extracted from main; webpack module 33087. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      m = {}.hasOwnProperty;
    e = i(58563), Ae.exports = function (d) {
      function M(b, A, N) {
        if (M.__super__.constructor.call(this, b), null == A) throw new Error("Missing notation name");
        if (!N.pubID && !N.sysID) throw new Error("Public or system identifiers are required for an external entity");
        this.name = this.stringify.eleName(A), null != N.pubID && (this.pubID = this.stringify.dtdPubID(N.pubID)), null != N.sysID && (this.sysID = this.stringify.dtdSysID(N.sysID));
      }
      return function (d, M) {
        for (var b in M) m.call(M, b) && (d[b] = M[b]);
        function A() {
          this.constructor = d;
        }
        A.prototype = M.prototype, d.prototype = new A(), d.__super__ = M.prototype;
      }(M, d), M.prototype.toString = function (b) {
        return this.options.writer.set(b).dtdNotation(this);
      }, M;
    }(e);
  }).call(this);
});
