// Extracted from main; webpack module 54500. Factory, not an ES module.
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
    e = i(53819),
    m = b(i(29259));
  function b(L) {
    return L && L.__esModule ? L : {
      default: L
    };
  }
  var O = function (L) {
    function C(v, f) {
      return function A(L, C) {
        if (!(L instanceof C)) throw new TypeError("Cannot call a class as a function");
      }(this, C), function N(L, C) {
        if (!L) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !C || "object" != typeof C && "function" != typeof C ? L : C;
      }(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, v, f));
    }
    return function I(L, C) {
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
        return -1 !== this.data.search(/^[0-9]{2}$/);
      }
    }, {
      key: "encode",
      value: function () {
        var f = e.EAN2_STRUCTURE[parseInt(this.data) % 4];
        return {
          data: "1011" + (0, m.default)(this.data, f, "01"),
          text: this.text
        };
      }
    }]), C;
  }(b(i(74648)).default);
  V.default = O;
});
