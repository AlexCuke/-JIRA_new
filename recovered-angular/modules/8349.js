// Extracted from main; webpack module 8349. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      a,
      d = {}.hasOwnProperty;
    a = i(3452).isObject, e = i(58563), Ae.exports = function (M) {
      function b(A, N, I, O) {
        if (b.__super__.constructor.call(this, A), null == I) throw new Error("Missing entity name");
        if (null == O) throw new Error("Missing entity value");
        if (this.pe = !!N, this.name = this.stringify.eleName(I), a(O)) {
          if (!O.pubID && !O.sysID) throw new Error("Public and/or system identifiers are required for an external entity");
          if (O.pubID && !O.sysID) throw new Error("System identifier is required for a public external entity");
          if (null != O.pubID && (this.pubID = this.stringify.dtdPubID(O.pubID)), null != O.sysID && (this.sysID = this.stringify.dtdSysID(O.sysID)), null != O.nData && (this.nData = this.stringify.dtdNData(O.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity");
        } else this.value = this.stringify.dtdEntityValue(O);
      }
      return function (M, b) {
        for (var A in b) d.call(b, A) && (M[A] = b[A]);
        function N() {
          this.constructor = M;
        }
        N.prototype = b.prototype, M.prototype = new N(), M.__super__ = b.prototype;
      }(b, M), b.prototype.toString = function (A) {
        return this.options.writer.set(A).dtdEntity(this);
      }, b;
    }(e);
  }).call(this);
});
