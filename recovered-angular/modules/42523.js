// Extracted from main; webpack module 42523. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function O(L, C) {
        for (var v = 0; v < C.length; v++) {
          var f = C[v];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(L, f.key, f);
        }
      }
      return function (L, C, v) {
        return C && O(L.prototype, C), v && O(L, v), L;
      };
    }(),
    e = function O(L, C, v) {
      null === L && (L = Function.prototype);
      var f = Object.getOwnPropertyDescriptor(L, C);
      if (void 0 === f) {
        var E = Object.getPrototypeOf(L);
        return null === E ? void 0 : O(E, C, v);
      }
      if ("value" in f) return f.value;
      var h = f.get;
      return void 0 === h ? void 0 : h.call(v);
    },
    m = function d(O) {
      return O && O.__esModule ? O : {
        default: O
      };
    }(i(67417)),
    N = function (L) {
      return (10 - L.substr(0, 7).split("").map(function (v) {
        return +v;
      }).reduce(function (v, f, E) {
        return E % 2 ? v + f : v + 3 * f;
      }, 0) % 10) % 10;
    },
    I = function (O) {
      function L(C, v) {
        return function M(O, L) {
          if (!(O instanceof L)) throw new TypeError("Cannot call a class as a function");
        }(this, L), -1 !== C.search(/^[0-9]{7}$/) && (C += N(C)), function b(O, L) {
          if (!O) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !L || "object" != typeof L && "function" != typeof L ? O : L;
        }(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, C, v));
      }
      return function A(O, L) {
        if ("function" != typeof L && null !== L) throw new TypeError("Super expression must either be null or a function, not " + typeof L);
        O.prototype = Object.create(L && L.prototype, {
          constructor: {
            value: O,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), L && (Object.setPrototypeOf ? Object.setPrototypeOf(O, L) : O.__proto__ = L);
      }(L, O), t(L, [{
        key: "valid",
        value: function () {
          return -1 !== this.data.search(/^[0-9]{8}$/) && +this.data[7] === N(this.data);
        }
      }, {
        key: "leftText",
        value: function () {
          return e(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "leftText", this).call(this, 0, 4);
        }
      }, {
        key: "leftEncode",
        value: function () {
          var v = this.data.substr(0, 4);
          return e(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "leftEncode", this).call(this, v, "LLLL");
        }
      }, {
        key: "rightText",
        value: function () {
          return e(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "rightText", this).call(this, 4, 4);
        }
      }, {
        key: "rightEncode",
        value: function () {
          var v = this.data.substr(4, 4);
          return e(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "rightEncode", this).call(this, v, "RRRR");
        }
      }]), L;
    }(m.default);
  V.default = I;
});
