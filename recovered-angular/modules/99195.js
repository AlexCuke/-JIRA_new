// Extracted from main; webpack module 99195. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t,
      e,
      a,
      m,
      M,
      b,
      N = {}.hasOwnProperty;
    b = i(3452).isObject, M = i(58563), t = i(97274), a = i(8349), e = i(32068), m = i(33087), Ae.exports = function (I) {
      function O(L, C, v) {
        var f, E;
        O.__super__.constructor.call(this, L), this.documentObject = L, b(C) && (C = (f = C).pubID, v = f.sysID), null == v && (v = (E = [C, v])[0], C = E[1]), null != C && (this.pubID = this.stringify.dtdPubID(C)), null != v && (this.sysID = this.stringify.dtdSysID(v));
      }
      return function (I, O) {
        for (var L in O) N.call(O, L) && (I[L] = O[L]);
        function C() {
          this.constructor = I;
        }
        C.prototype = O.prototype, I.prototype = new C(), I.__super__ = O.prototype;
      }(O, I), O.prototype.element = function (L, C) {
        var v;
        return v = new e(this, L, C), this.children.push(v), this;
      }, O.prototype.attList = function (L, C, v, f, E) {
        var h;
        return h = new t(this, L, C, v, f, E), this.children.push(h), this;
      }, O.prototype.entity = function (L, C) {
        var v;
        return v = new a(this, !1, L, C), this.children.push(v), this;
      }, O.prototype.pEntity = function (L, C) {
        var v;
        return v = new a(this, !0, L, C), this.children.push(v), this;
      }, O.prototype.notation = function (L, C) {
        var v;
        return v = new m(this, L, C), this.children.push(v), this;
      }, O.prototype.toString = function (L) {
        return this.options.writer.set(L).docType(this);
      }, O.prototype.ele = function (L, C) {
        return this.element(L, C);
      }, O.prototype.att = function (L, C, v, f, E) {
        return this.attList(L, C, v, f, E);
      }, O.prototype.ent = function (L, C) {
        return this.entity(L, C);
      }, O.prototype.pent = function (L, C) {
        return this.pEntity(L, C);
      }, O.prototype.not = function (L, C) {
        return this.notation(L, C);
      }, O.prototype.up = function () {
        return this.root() || this.documentObject;
      }, O;
    }(M);
  }).call(this);
});
