// Extracted from main; webpack module 43352. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t,
      a,
      m,
      d,
      M,
      A = {}.hasOwnProperty;
    M = i(3452), d = M.isObject, m = M.isFunction, a = i(58563), t = i(25968), Ae.exports = function (N) {
      function I(O, L, C) {
        if (I.__super__.constructor.call(this, O), null == L) throw new Error("Missing element name");
        this.name = this.stringify.eleName(L), this.attributes = {}, null != C && this.attribute(C), O.isDocument && (this.isRoot = !0, this.documentObject = O, O.rootObject = this);
      }
      return function (N, I) {
        for (var O in I) A.call(I, O) && (N[O] = I[O]);
        function L() {
          this.constructor = N;
        }
        L.prototype = I.prototype, N.prototype = new L(), N.__super__ = I.prototype;
      }(I, N), I.prototype.clone = function () {
        var L, C, v;
        for (L in (C = Object.create(this)).isRoot && (C.documentObject = null), C.attributes = {}, v = this.attributes) A.call(v, L) && (C.attributes[L] = v[L].clone());
        return C.children = [], this.children.forEach(function (f) {
          var E;
          return (E = f.clone()).parent = C, C.children.push(E);
        }), C;
      }, I.prototype.attribute = function (O, L) {
        var C;
        if (null != O && (O = O.valueOf()), d(O)) for (C in O) A.call(O, C) && this.attribute(C, O[C]);else m(L) && (L = L.apply()), (!this.options.skipNullAttributes || null != L) && (this.attributes[O] = new t(this, O, L));
        return this;
      }, I.prototype.removeAttribute = function (O) {
        var C, v;
        if (null == O) throw new Error("Missing attribute name");
        if (O = O.valueOf(), Array.isArray(O)) for (C = 0, v = O.length; C < v; C++) delete this.attributes[O[C]];else delete this.attributes[O];
        return this;
      }, I.prototype.toString = function (O) {
        return this.options.writer.set(O).element(this);
      }, I.prototype.att = function (O, L) {
        return this.attribute(O, L);
      }, I.prototype.a = function (O, L) {
        return this.attribute(O, L);
      }, I;
    }(a);
  }).call(this);
});
