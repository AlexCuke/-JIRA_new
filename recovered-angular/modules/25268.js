// Extracted from main; webpack module 25268. Factory, not an ES module.
(function (Ae) {
  Ae.exports = function () {
    "use strict";

    var V = "minute",
      i = /[+-]\d\d(?::?\d\d)?/g,
      t = /([+-]|\d\d)/g;
    return function (e, a, m) {
      var d = a.prototype;
      m.utc = function (L) {
        return new a({
          date: L,
          utc: !0,
          args: arguments
        });
      }, d.utc = function (L) {
        var C = m(this.toDate(), {
          locale: this.$L,
          utc: !0
        });
        return L ? C.add(this.utcOffset(), V) : C;
      }, d.local = function () {
        return m(this.toDate(), {
          locale: this.$L,
          utc: !1
        });
      };
      var M = d.parse;
      d.parse = function (L) {
        L.utc && (this.$u = !0), this.$utils().u(L.$offset) || (this.$offset = L.$offset), M.call(this, L);
      };
      var b = d.init;
      d.init = function () {
        if (this.$u) {
          var L = this.$d;
          this.$y = L.getUTCFullYear(), this.$M = L.getUTCMonth(), this.$D = L.getUTCDate(), this.$W = L.getUTCDay(), this.$H = L.getUTCHours(), this.$m = L.getUTCMinutes(), this.$s = L.getUTCSeconds(), this.$ms = L.getUTCMilliseconds();
        } else b.call(this);
      };
      var A = d.utcOffset;
      d.utcOffset = function (L, C) {
        var v = this.$utils().u;
        if (v(L)) return this.$u ? 0 : v(this.$offset) ? A.call(this) : this.$offset;
        if ("string" == typeof L && null === (L = function (x) {
          void 0 === x && (x = "");
          var u = x.match(i);
          if (!u) return null;
          var T = ("" + u[0]).match(t) || ["-", 0, 0],
            B = 60 * +T[1] + +T[2];
          return 0 === B ? 0 : "+" === T[0] ? B : -B;
        }(L))) return this;
        var f = Math.abs(L) <= 16 ? 60 * L : L,
          E = this;
        if (C) return E.$offset = f, E.$u = 0 === L, E;
        if (0 !== L) {
          var h = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (E = this.local().add(f + h, V)).$offset = f, E.$x.$localOffset = h;
        } else E = this.utc();
        return E;
      };
      var N = d.format;
      d.format = function (L) {
        return N.call(this, L || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : ""));
      }, d.valueOf = function () {
        var L = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * L;
      }, d.isUTC = function () {
        return !!this.$u;
      }, d.toISOString = function () {
        return this.toDate().toISOString();
      }, d.toString = function () {
        return this.toDate().toUTCString();
      };
      var I = d.toDate;
      d.toDate = function (L) {
        return "s" === L && this.$offset ? m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : I.call(this);
      };
      var O = d.diff;
      d.diff = function (L, C, v) {
        if (L && this.$u === L.$u) return O.call(this, L, C, v);
        var f = this.local(),
          E = m(L).local();
        return O.call(f, E, C, v);
      };
    };
  }();
});
