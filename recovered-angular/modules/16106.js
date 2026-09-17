// Extracted from main; webpack module 16106. Factory, not an ES module.
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
    a = function d(I) {
      return I && I.__esModule ? I : {
        default: I
      };
    }(i(74648)),
    m = i(89068),
    N = function (I) {
      function O(L, C) {
        !function M(I, O) {
          if (!(I instanceof O)) throw new TypeError("Cannot call a class as a function");
        }(this, O);
        var v = function b(I, O) {
          if (!I) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !O || "object" != typeof O && "function" != typeof O ? I : O;
        }(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, L.substring(1), C));
        return v.bytes = L.split("").map(function (f) {
          return f.charCodeAt(0);
        }), v;
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
          return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
        }
      }, {
        key: "encode",
        value: function () {
          var C = this.bytes,
            v = C.shift() - 105,
            f = m.SET_BY_CODE[v];
          if (void 0 === f) throw new RangeError("The encoding does not start with a start character.");
          !0 === this.shouldEncodeAsEan128() && C.unshift(m.FNC1);
          var E = O.next(C, 1, f);
          return {
            text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
            data: O.getBar(v) + E.result + O.getBar((E.checksum + v) % m.MODULO) + O.getBar(m.STOP)
          };
        }
      }, {
        key: "shouldEncodeAsEan128",
        value: function () {
          var C = this.options.ean128 || !1;
          return "string" == typeof C && (C = "true" === C.toLowerCase()), C;
        }
      }], [{
        key: "getBar",
        value: function (C) {
          return m.BARS[C] ? m.BARS[C].toString() : "";
        }
      }, {
        key: "correctIndex",
        value: function (C, v) {
          if (v === m.SET_A) {
            var f = C.shift();
            return f < 32 ? f + 64 : f - 32;
          }
          return v === m.SET_B ? C.shift() - 32 : 10 * (C.shift() - 48) + C.shift() - 48;
        }
      }, {
        key: "next",
        value: function (C, v, f) {
          if (!C.length) return {
            result: "",
            checksum: 0
          };
          var E = void 0,
            h = void 0;
          if (C[0] >= 200) {
            h = C.shift() - 105;
            var x = m.SWAP[h];
            void 0 !== x ? E = O.next(C, v + 1, x) : ((f === m.SET_A || f === m.SET_B) && h === m.SHIFT && (C[0] = f === m.SET_A ? C[0] > 95 ? C[0] - 96 : C[0] : C[0] < 32 ? C[0] + 96 : C[0]), E = O.next(C, v + 1, f));
          } else h = O.correctIndex(C, f), E = O.next(C, v + 1, f);
          return {
            result: O.getBar(h) + E.result,
            checksum: h * v + E.checksum
          };
        }
      }]), O;
    }(a.default);
  V.default = N;
});
