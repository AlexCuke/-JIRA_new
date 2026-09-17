// Extracted from main; webpack module 91285. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function f(E, h) {
        for (var x = 0; x < h.length; x++) {
          var u = h[x];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(E, u.key, u);
        }
      }
      return function (E, h, x) {
        return h && f(E.prototype, h), x && f(E, x), E;
      };
    }(),
    a = b(i(29259)),
    d = b(i(74648)),
    M = i(54102);
  function b(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  function N(f, E) {
    if (!f) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !E || "object" != typeof E && "function" != typeof E ? f : E;
  }
  var O = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"],
    L = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]],
    C = function (f) {
      function E(h, x) {
        !function A(f, E) {
          if (!(f instanceof E)) throw new TypeError("Cannot call a class as a function");
        }(this, E);
        var u = N(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, h, x));
        if (u.isValid = !1, -1 !== h.search(/^[0-9]{6}$/)) u.middleDigits = h, u.upcA = v(h, "0"), u.text = x.text || "" + u.upcA[0] + h + u.upcA[u.upcA.length - 1], u.isValid = !0;else {
          if (-1 === h.search(/^[01][0-9]{7}$/)) return N(u);
          if (u.middleDigits = h.substring(1, h.length - 1), u.upcA = v(u.middleDigits, h[0]), u.upcA[u.upcA.length - 1] !== h[h.length - 1]) return N(u);
          u.isValid = !0;
        }
        return u.displayValue = x.displayValue, u.fontSize = x.fontSize > 10 * x.width ? 10 * x.width : x.fontSize, u.guardHeight = x.height + u.fontSize / 2 + x.textMargin, u;
      }
      return function I(f, E) {
        if ("function" != typeof E && null !== E) throw new TypeError("Super expression must either be null or a function, not " + typeof E);
        f.prototype = Object.create(E && E.prototype, {
          constructor: {
            value: f,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(f, E) : f.__proto__ = E);
      }(E, f), t(E, [{
        key: "valid",
        value: function () {
          return this.isValid;
        }
      }, {
        key: "encode",
        value: function () {
          return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
        }
      }, {
        key: "flatEncoding",
        value: function () {
          var x = "";
          return x += "101", x += this.encodeMiddleDigits(), {
            data: x += "010101",
            text: this.text
          };
        }
      }, {
        key: "guardedEncoding",
        value: function () {
          var x = [];
          return this.displayValue && x.push({
            data: "00000000",
            text: this.text[0],
            options: {
              textAlign: "left",
              fontSize: this.fontSize
            }
          }), x.push({
            data: "101",
            options: {
              height: this.guardHeight
            }
          }), x.push({
            data: this.encodeMiddleDigits(),
            text: this.text.substring(1, 7),
            options: {
              fontSize: this.fontSize
            }
          }), x.push({
            data: "010101",
            options: {
              height: this.guardHeight
            }
          }), this.displayValue && x.push({
            data: "00000000",
            text: this.text[7],
            options: {
              textAlign: "right",
              fontSize: this.fontSize
            }
          }), x;
        }
      }, {
        key: "encodeMiddleDigits",
        value: function () {
          var x = this.upcA[0],
            T = L[parseInt(this.upcA[this.upcA.length - 1])][parseInt(x)];
          return (0, a.default)(this.middleDigits, T);
        }
      }]), E;
    }(d.default);
  function v(f, E) {
    for (var h = parseInt(f[f.length - 1]), x = O[h], u = "", T = 0, R = 0; R < x.length; R++) {
      var B = x[R];
      u += "X" === B ? f[T++] : B;
    }
    return (u = "" + E + u) + (0, M.checksum)(u);
  }
  V.default = C;
});
