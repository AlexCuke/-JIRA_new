// Extracted from main; webpack module 13435. Factory, not an ES module.
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
    e = i(5306),
    N = function (I) {
      function O() {
        return function M(I, O) {
          if (!(I instanceof O)) throw new TypeError("Cannot call a class as a function");
        }(this, O), function b(I, O) {
          if (!I) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !O || "object" != typeof O && "function" != typeof O ? I : O;
        }(this, (O.__proto__ || Object.getPrototypeOf(O)).apply(this, arguments));
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
          return -1 !== this.data.search(/^([0-9]{2})+$/);
        }
      }, {
        key: "encode",
        value: function () {
          var C = this,
            v = this.data.match(/.{2}/g).map(function (f) {
              return C.encodePair(f);
            }).join("");
          return {
            data: e.START_BIN + v + e.END_BIN,
            text: this.text
          };
        }
      }, {
        key: "encodePair",
        value: function (C) {
          var v = e.BINARIES[C[1]];
          return e.BINARIES[C[0]].split("").map(function (f, E) {
            return ("1" === f ? "111" : "1") + ("1" === v[E] ? "000" : "0");
          }).join("");
        }
      }]), O;
    }(function d(I) {
      return I && I.__esModule ? I : {
        default: I
      };
    }(i(74648)).default);
  V.default = N;
});
