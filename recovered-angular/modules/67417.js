// Extracted from main; webpack module 67417. Factory, not an ES module.
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
      !function A(L, C) {
        if (!(L instanceof C)) throw new TypeError("Cannot call a class as a function");
      }(this, C);
      var E = function N(L, C) {
        if (!L) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !C || "object" != typeof C && "function" != typeof C ? L : C;
      }(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, v, f));
      return E.fontSize = !f.flat && f.fontSize > 10 * f.width ? 10 * f.width : f.fontSize, E.guardHeight = f.height + E.fontSize / 2 + f.textMargin, E;
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
      key: "encode",
      value: function () {
        return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
      }
    }, {
      key: "leftText",
      value: function (f, E) {
        return this.text.substr(f, E);
      }
    }, {
      key: "leftEncode",
      value: function (f, E) {
        return (0, m.default)(f, E);
      }
    }, {
      key: "rightText",
      value: function (f, E) {
        return this.text.substr(f, E);
      }
    }, {
      key: "rightEncode",
      value: function (f, E) {
        return (0, m.default)(f, E);
      }
    }, {
      key: "encodeGuarded",
      value: function () {
        var f = {
            fontSize: this.fontSize
          },
          E = {
            height: this.guardHeight
          };
        return [{
          data: e.SIDE_BIN,
          options: E
        }, {
          data: this.leftEncode(),
          text: this.leftText(),
          options: f
        }, {
          data: e.MIDDLE_BIN,
          options: E
        }, {
          data: this.rightEncode(),
          text: this.rightText(),
          options: f
        }, {
          data: e.SIDE_BIN,
          options: E
        }];
      }
    }, {
      key: "encodeFlat",
      value: function () {
        return {
          data: [e.SIDE_BIN, this.leftEncode(), e.MIDDLE_BIN, this.rightEncode(), e.SIDE_BIN].join(""),
          text: this.text
        };
      }
    }]), C;
  }(b(i(74648)).default);
  V.default = O;
});
