// Extracted from main; webpack module 30948. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => a
  });
  var t = i(80953),
    e = i(40833);
  function a(m) {
    (0, e.Z)(1, arguments);
    var d = (0, t.Z)(m),
      M = d.getFullYear();
    return d.setFullYear(M + 1, 0, 0), d.setHours(23, 59, 59, 999), d;
  }
});
