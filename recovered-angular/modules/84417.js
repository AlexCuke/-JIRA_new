// Extracted from main; webpack module 84417. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function N(I, O) {
        for (var L = 0; L < O.length; L++) {
          var C = O[L];
          C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(I, C.key, C);
        }
      }
      return function (I, O, L) {
        return O && N(I.prototype, O), L && N(I, L), I;
      };
    }(),
    A = function (N) {
      function I(O, L) {
        return function d(N, I) {
          if (!(N instanceof I)) throw new TypeError("Cannot call a class as a function");
        }(this, I), function M(N, I) {
          if (!N) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !I || "object" != typeof I && "function" != typeof I ? N : I;
        }(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, O, L));
      }
      return function b(N, I) {
        if ("function" != typeof I && null !== I) throw new TypeError("Super expression must either be null or a function, not " + typeof I);
        N.prototype = Object.create(I && I.prototype, {
          constructor: {
            value: N,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), I && (Object.setPrototypeOf ? Object.setPrototypeOf(N, I) : N.__proto__ = I);
      }(I, N), t(I, [{
        key: "valid",
        value: function () {
          return /^[\x00-\x7f]+$/.test(this.data);
        }
      }]), I;
    }(function m(N) {
      return N && N.__esModule ? N : {
        default: N
      };
    }(i(69613)).default);
  V.default = A;
});
