// Extracted from main; webpack module 80528. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.CODE39 = void 0;
  var t = function () {
      function E(h, x) {
        for (var u = 0; u < x.length; u++) {
          var T = x[u];
          T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(h, T.key, T);
        }
      }
      return function (h, x, u) {
        return x && E(h.prototype, x), u && E(h, u), h;
      };
    }(),
    A = function (E) {
      function h(x, u) {
        return function d(E, h) {
          if (!(E instanceof h)) throw new TypeError("Cannot call a class as a function");
        }(this, h), x = x.toUpperCase(), u.mod43 && (x += function C(E) {
          return N[E];
        }(function f(E) {
          for (var h = 0, x = 0; x < E.length; x++) h += v(E[x]);
          return h %= 43;
        }(x))), function M(E, h) {
          if (!E) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !h || "object" != typeof h && "function" != typeof h ? E : h;
        }(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, x, u));
      }
      return function b(E, h) {
        if ("function" != typeof h && null !== h) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
        E.prototype = Object.create(h && h.prototype, {
          constructor: {
            value: E,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(E, h) : E.__proto__ = h);
      }(h, E), t(h, [{
        key: "encode",
        value: function () {
          for (var u = O("*"), T = 0; T < this.data.length; T++) u += O(this.data[T]) + "0";
          return {
            data: u += O("*"),
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function () {
          return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/);
        }
      }]), h;
    }(function m(E) {
      return E && E.__esModule ? E : {
        default: E
      };
    }(i(74648)).default),
    N = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"],
    I = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
  function O(E) {
    return function L(E) {
      return I[E].toString(2);
    }(v(E));
  }
  function v(E) {
    return N.indexOf(E);
  }
  V.CODE39 = A;
});
