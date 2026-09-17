// Extracted from main; webpack module 96855. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.mod10 = function i(e) {
    for (var a = 0, m = 0; m < e.length; m++) {
      var d = parseInt(e[m]);
      a += (m + e.length) % 2 == 0 ? d : 2 * d % 10 + Math.floor(2 * d / 10);
    }
    return (10 - a % 10) % 10;
  }, V.mod11 = function t(e) {
    for (var a = 0, m = [2, 3, 4, 5, 6, 7], d = 0; d < e.length; d++) {
      var M = parseInt(e[e.length - 1 - d]);
      a += m[d % m.length] * M;
    }
    return (11 - a % 11) % 11;
  };
});
