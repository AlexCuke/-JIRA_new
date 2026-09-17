// Extracted from main; webpack module 97274. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var e,
      m = {}.hasOwnProperty;
    e = i(58563), Ae.exports = function (d) {
      function M(b, A, N, I, O, L) {
        if (M.__super__.constructor.call(this, b), null == A) throw new Error("Missing DTD element name");
        if (null == N) throw new Error("Missing DTD attribute name");
        if (!I) throw new Error("Missing DTD attribute type");
        if (!O) throw new Error("Missing DTD attribute default");
        if (0 !== O.indexOf("#") && (O = "#" + O), !O.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
        if (L && !O.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT");
        this.elementName = this.stringify.eleName(A), this.attributeName = this.stringify.attName(N), this.attributeType = this.stringify.dtdAttType(I), this.defaultValue = this.stringify.dtdAttDefault(L), this.defaultValueType = O;
      }
      return function (d, M) {
        for (var b in M) m.call(M, b) && (d[b] = M[b]);
        function A() {
          this.constructor = d;
        }
        A.prototype = M.prototype, d.prototype = new A(), d.__super__ = M.prototype;
      }(M, d), M.prototype.toString = function (b) {
        return this.options.writer.set(b).dtdAttList(this);
      }, M;
    }(e);
  }).call(this);
});
