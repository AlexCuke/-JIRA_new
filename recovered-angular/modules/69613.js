// Extracted from main; webpack module 69613. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function I(O, L) {
        for (var C = 0; C < L.length; C++) {
          var v = L[C];
          v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(O, v.key, v);
        }
      }
      return function (O, L, C) {
        return L && I(O.prototype, L), C && I(O, C), O;
      };
    }(),
    e = i(33912),
    N = function (I) {
      function O(L, C) {
        return function M(I, O) {
          if (!(I instanceof O)) throw new TypeError("Cannot call a class as a function");
        }(this, O), function b(I, O) {
          if (!I) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !O || "object" != typeof O && "function" != typeof O ? I : O;
        }(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, L, C));
      }
      return function A(I, O) {
        if ("function" != typeof O && null !== O) throw new TypeError("Super expression must either be null or a function, not " + typeof O);
        I.prototype = Object.create(O && O.prototype, {
          constructor: {
            value: I,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(I, O) : I.__proto__ = O);
      }(O, I), t(O, [{
        key: "valid",
        value: function () {
          return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
        }
      }, {
        key: "encode",
        value: function () {
          var C = this.data.split("").flatMap(function (h) {
              return e.MULTI_SYMBOLS[h] || h;
            }),
            v = C.map(function (h) {
              return O.getEncoding(h);
            }).join(""),
            f = O.checksum(C, 20),
            E = O.checksum(C.concat(f), 15);
          return {
            text: this.text,
            data: O.getEncoding("ÿ") + v + O.getEncoding(f) + O.getEncoding(E) + O.getEncoding("ÿ") + "1"
          };
        }
      }], [{
        key: "getEncoding",
        value: function (C) {
          return e.BINARIES[O.symbolValue(C)];
        }
      }, {
        key: "getSymbol",
        value: function (C) {
          return e.SYMBOLS[C];
        }
      }, {
        key: "symbolValue",
        value: function (C) {
          return e.SYMBOLS.indexOf(C);
        }
      }, {
        key: "checksum",
        value: function (C, v) {
          var f = C.slice().reverse().reduce(function (E, h, x) {
            var u = x % v + 1;
            return E + O.symbolValue(h) * u;
          }, 0);
          return O.getSymbol(f % 47);
        }
      }]), O;
    }(function d(I) {
      return I && I.__esModule ? I : {
        default: I
      };
    }(i(74648)).default);
  V.default = N;
});
