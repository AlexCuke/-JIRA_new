// Extracted from main; webpack module 3930. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var i = function () {
      function a(m, d) {
        for (var M = 0; M < d.length; M++) {
          var b = d[M];
          b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(m, b.key, b);
        }
      }
      return function (m, d, M) {
        return d && a(m.prototype, d), M && a(m, M), m;
      };
    }(),
    e = function () {
      function a(m) {
        (function t(a, m) {
          if (!(a instanceof m)) throw new TypeError("Cannot call a class as a function");
        })(this, a), this.api = m;
      }
      return i(a, [{
        key: "handleCatch",
        value: function (d) {
          if ("InvalidInputException" !== d.name) throw d;
          if (this.api._options.valid === this.api._defaults.valid) throw d.message;
          this.api._options.valid(!1), this.api.render = function () {};
        }
      }, {
        key: "wrapBarcodeCall",
        value: function (d) {
          try {
            var M = d.apply(void 0, arguments);
            return this.api._options.valid(!0), M;
          } catch (b) {
            return this.handleCatch(b), this.api;
          }
        }
      }]), a;
    }();
  V.default = e;
});
