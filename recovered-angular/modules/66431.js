// Extracted from main; webpack module 66431. Factory, not an ES module.
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
    A = function (I) {
      function O(L, C) {
        return function d(I, O) {
          if (!(I instanceof O)) throw new TypeError("Cannot call a class as a function");
        }(this, O), function M(I, O) {
          if (!I) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !O || "object" != typeof O && "function" != typeof O ? I : O;
        }(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, L, C));
      }
      return function b(I, O) {
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
        key: "encode",
        value: function () {
          for (var C = "110", v = 0; v < this.data.length; v++) {
            var E = parseInt(this.data[v]).toString(2);
            E = N(E, 4 - E.length);
            for (var h = 0; h < E.length; h++) C += "0" == E[h] ? "100" : "110";
          }
          return {
            data: C += "1001",
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function () {
          return -1 !== this.data.search(/^[0-9]+$/);
        }
      }]), O;
    }(function m(I) {
      return I && I.__esModule ? I : {
        default: I
      };
    }(i(74648)).default);
  function N(I, O) {
    for (var L = 0; L < O; L++) I = "0" + I;
    return I;
  }
  V.default = A;
});
