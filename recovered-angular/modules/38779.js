// Extracted from main; webpack module 38779. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => a
  });
  var t = i(80953),
    e = i(40833);
  function a(m, d) {
    (0, e.Z)(2, arguments);
    var M = (0, t.Z)(m),
      b = (0, t.Z)(d),
      A = M.getTime() - b.getTime();
    return A < 0 ? -1 : A > 0 ? 1 : A;
  }
});
