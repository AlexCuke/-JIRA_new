// Extracted from main; webpack module 16195. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function L(C, v) {
        for (var f = 0; f < v.length; f++) {
          var E = v[f];
          E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(C, E.key, E);
        }
      }
      return function (C, v, f) {
        return v && L(C.prototype, v), f && L(C, f), C;
      };
    }(),
    e = function L(C, v, f) {
      null === C && (C = Function.prototype);
      var E = Object.getOwnPropertyDescriptor(C, v);
      if (void 0 === E) {
        var h = Object.getPrototypeOf(C);
        return null === h ? void 0 : L(h, v, f);
      }
      if ("value" in E) return E.value;
      var x = E.get;
      return void 0 === x ? void 0 : x.call(f);
    },
    a = i(53819),
    d = function M(L) {
      return L && L.__esModule ? L : {
        default: L
      };
    }(i(67417)),
    I = function (C) {
      return (10 - C.substr(0, 12).split("").map(function (f) {
        return +f;
      }).reduce(function (f, E, h) {
        return h % 2 ? f + 3 * E : f + E;
      }, 0) % 10) % 10;
    },
    O = function (L) {
      function C(v, f) {
        (function b(L, C) {
          if (!(L instanceof C)) throw new TypeError("Cannot call a class as a function");
        })(this, C), -1 !== v.search(/^[0-9]{12}$/) && (v += I(v));
        var E = function A(L, C) {
          if (!L) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !C || "object" != typeof C && "function" != typeof C ? L : C;
        }(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, v, f));
        return E.lastChar = f.lastChar, E;
      }
      return function N(L, C) {
        if ("function" != typeof C && null !== C) throw new TypeError("Super expression must either be null or a function, not " + typeof C);
        L.prototype = Object.create(C && C.prototype, {
          constructor: {
            value: L,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(L, C) : L.__proto__ = C);
      }(C, L), t(C, [{
        key: "valid",
        value: function () {
          return -1 !== this.data.search(/^[0-9]{13}$/) && +this.data[12] === I(this.data);
        }
      }, {
        key: "leftText",
        value: function () {
          return e(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "leftText", this).call(this, 1, 6);
        }
      }, {
        key: "leftEncode",
        value: function () {
          var f = this.data.substr(1, 6),
            E = a.EAN13_STRUCTURE[this.data[0]];
          return e(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "leftEncode", this).call(this, f, E);
        }
      }, {
        key: "rightText",
        value: function () {
          return e(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "rightText", this).call(this, 7, 6);
        }
      }, {
        key: "rightEncode",
        value: function () {
          var f = this.data.substr(7, 6);
          return e(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "rightEncode", this).call(this, f, "RRRRRR");
        }
      }, {
        key: "encodeGuarded",
        value: function () {
          var f = e(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "encodeGuarded", this).call(this);
          return this.options.displayValue && (f.unshift({
            data: "000000000000",
            text: this.text.substr(0, 1),
            options: {
              textAlign: "left",
              fontSize: this.fontSize
            }
          }), this.options.lastChar && (f.push({
            data: "00"
          }), f.push({
            data: "00000",
            text: this.options.lastChar,
            options: {
              fontSize: this.fontSize
            }
          }))), f;
        }
      }]), C;
    }(d.default);
  V.default = O;
});
