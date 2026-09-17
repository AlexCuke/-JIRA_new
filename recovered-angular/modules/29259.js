// Extracted from main; webpack module 29259. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = i(53819);
  V.default = function (m, d, M) {
    var b = m.split("").map(function (N, I) {
      return t.BINARIES[d[I]];
    }).map(function (N, I) {
      return N ? N[m[I]] : "";
    });
    if (M) {
      var A = m.length - 1;
      b = b.map(function (N, I) {
        return I < A ? N + M : N;
      });
    }
    return b.join("");
  };
});
