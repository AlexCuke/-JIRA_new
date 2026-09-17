// Extracted from main; webpack module 23882. Factory, not an ES module.
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
      M = d.getFullYear(),
      b = d.getMonth(),
      A = new Date(0);
    return A.setFullYear(M, b + 1, 0), A.setHours(0, 0, 0, 0), A.getDate();
  }
});
