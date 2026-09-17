// Extracted from main; webpack module 8138. Factory, not an ES module.
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
      function a(m, d, M) {
        (function t(a, m) {
          if (!(a instanceof m)) throw new TypeError("Cannot call a class as a function");
        })(this, a), this.object = m, this.encodings = d, this.options = M;
      }
      return i(a, [{
        key: "render",
        value: function () {
          this.object.encodings = this.encodings;
        }
      }]), a;
    }();
  V.default = e;
});
