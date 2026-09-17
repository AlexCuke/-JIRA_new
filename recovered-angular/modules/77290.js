// Extracted from main; webpack module 77290. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => a
  });
  var t = i(80953),
    e = i(40833);
  function a(m) {
    (0, e.Z)(1, arguments);
    var M = (0, t.Z)(m),
      b = M.getUTCDay(),
      A = (b < 1 ? 7 : 0) + b - 1;
    return M.setUTCDate(M.getUTCDate() - A), M.setUTCHours(0, 0, 0, 0), M;
  }
});
