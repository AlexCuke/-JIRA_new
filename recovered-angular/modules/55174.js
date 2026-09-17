// Extracted from main; webpack module 55174. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function C(v, f) {
        for (var E = 0; E < f.length; E++) {
          var h = f[E];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(v, h.key, h);
        }
      }
      return function (v, f, E) {
        return f && C(v.prototype, f), E && C(v, E), v;
      };
    }(),
    e = i(53819),
    m = b(i(29259));
  function b(C) {
    return C && C.__esModule ? C : {
      default: C
    };
  }
  var L = function (C) {
    function v(f, E) {
      return function A(C, v) {
        if (!(C instanceof v)) throw new TypeError("Cannot call a class as a function");
      }(this, v), function N(C, v) {
        if (!C) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !v || "object" != typeof v && "function" != typeof v ? C : v;
      }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, f, E));
    }
    return function I(C, v) {
      if ("function" != typeof v && null !== v) throw new TypeError("Super expression must either be null or a function, not " + typeof v);
      C.prototype = Object.create(v && v.prototype, {
        constructor: {
          value: C,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(C, v) : C.__proto__ = v);
    }(v, C), t(v, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{5}$/);
      }
    }, {
      key: "encode",
      value: function () {
        var E = e.EAN5_STRUCTURE[function (v) {
          return v.split("").map(function (E) {
            return +E;
          }).reduce(function (E, h, x) {
            return x % 2 ? E + 9 * h : E + 3 * h;
          }, 0) % 10;
        }(this.data)];
        return {
          data: "1011" + (0, m.default)(this.data, E, "01"),
          text: this.text
        };
      }
    }]), v;
  }(b(i(74648)).default);
  V.default = L;
});
