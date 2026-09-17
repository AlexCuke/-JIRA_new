// Extracted from main; webpack module 22250. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.codabar = void 0;
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
        (function d(N, I) {
          if (!(N instanceof I)) throw new TypeError("Cannot call a class as a function");
        })(this, I), 0 === O.search(/^[0-9\-\$\:\.\+\/]+$/) && (O = "A" + O + "A");
        var C = function M(N, I) {
          if (!N) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !I || "object" != typeof I && "function" != typeof I ? N : I;
        }(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, O.toUpperCase(), L));
        return C.text = C.options.text || C.text.replace(/[A-D]/g, ""), C;
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
          return -1 !== this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/);
        }
      }, {
        key: "encode",
        value: function () {
          for (var L = [], C = this.getEncodings(), v = 0; v < this.data.length; v++) L.push(C[this.data.charAt(v)]), v !== this.data.length - 1 && L.push("0");
          return {
            text: this.text,
            data: L.join("")
          };
        }
      }, {
        key: "getEncodings",
        value: function () {
          return {
            0: "101010011",
            1: "101011001",
            2: "101001011",
            3: "110010101",
            4: "101101001",
            5: "110101001",
            6: "100101011",
            7: "100101101",
            8: "100110101",
            9: "110100101",
            "-": "101001101",
            $: "101100101",
            ":": "1101011011",
            "/": "1101101011",
            ".": "1101101101",
            "+": "1011011011",
            A: "1011001001",
            B: "1001001011",
            C: "1010010011",
            D: "1010011001"
          };
        }
      }]), I;
    }(function m(N) {
      return N && N.__esModule ? N : {
        default: N
      };
    }(i(74648)).default);
  V.codabar = A;
});
