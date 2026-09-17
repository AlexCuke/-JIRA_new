// Extracted from main; webpack module 96428. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var e = d(i(40070)),
    m = d(i(97850));
  function d(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  V.default = function M(b) {
    var A = {};
    for (var N in m.default) m.default.hasOwnProperty(N) && (b.hasAttribute("jsbarcode-" + N.toLowerCase()) && (A[N] = b.getAttribute("jsbarcode-" + N.toLowerCase())), b.hasAttribute("data-" + N.toLowerCase()) && (A[N] = b.getAttribute("data-" + N.toLowerCase())));
    return A.value = b.getAttribute("jsbarcode-value") || b.getAttribute("data-value"), (0, e.default)(A);
  };
});
