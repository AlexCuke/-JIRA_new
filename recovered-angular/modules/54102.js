// Extracted from main; webpack module 54102. Factory, not an ES module.
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
  }();
  V.checksum = O;
  var a = M(i(29259));
  function M(L) {
    return L && L.__esModule ? L : {
      default: L
    };
  }
  var I = function (L) {
    function C(v, f) {
      (function b(L, C) {
        if (!(L instanceof C)) throw new TypeError("Cannot call a class as a function");
      })(this, C), -1 !== v.search(/^[0-9]{11}$/) && (v += O(v));
      var E = function A(L, C) {
        if (!L) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !C || "object" != typeof C && "function" != typeof C ? L : C;
      }(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, v, f));
      return E.displayValue = f.displayValue, E.fontSize = f.fontSize > 10 * f.width ? 10 * f.width : f.fontSize, E.guardHeight = f.height + E.fontSize / 2 + f.textMargin, E;
    }
    return function N(L, C) {
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
        return -1 !== this.data.search(/^[0-9]{12}$/) && this.data[11] == O(this.data);
      }
    }, {
      key: "encode",
      value: function () {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function () {
        var f = "";
        return f += "101", f += (0, a.default)(this.data.substr(0, 6), "LLLLLL"), f += "01010", f += (0, a.default)(this.data.substr(6, 6), "RRRRRR"), {
          data: f += "101",
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function () {
        var f = [];
        return this.displayValue && f.push({
          data: "00000000",
          text: this.text.substr(0, 1),
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        }), f.push({
          data: "101" + (0, a.default)(this.data[0], "L"),
          options: {
            height: this.guardHeight
          }
        }), f.push({
          data: (0, a.default)(this.data.substr(1, 5), "LLLLL"),
          text: this.text.substr(1, 5),
          options: {
            fontSize: this.fontSize
          }
        }), f.push({
          data: "01010",
          options: {
            height: this.guardHeight
          }
        }), f.push({
          data: (0, a.default)(this.data.substr(6, 5), "RRRRR"),
          text: this.text.substr(6, 5),
          options: {
            fontSize: this.fontSize
          }
        }), f.push({
          data: (0, a.default)(this.data[11], "R") + "101",
          options: {
            height: this.guardHeight
          }
        }), this.displayValue && f.push({
          data: "00000000",
          text: this.text.substr(11, 1),
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        }), f;
      }
    }]), C;
  }(M(i(74648)).default);
  function O(L) {
    var v,
      C = 0;
    for (v = 1; v < 11; v += 2) C += parseInt(L[v]);
    for (v = 0; v < 11; v += 2) C += 3 * parseInt(L[v]);
    return (10 - C % 10) % 10;
  }
  V.default = I;
});
