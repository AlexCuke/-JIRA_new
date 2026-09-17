// Extracted from main; webpack module 37875. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => m
  });
  var t = i(80953),
    e = i(40833),
    a = i(77290);
  function m(d) {
    (0, e.Z)(1, arguments);
    var M = (0, t.Z)(d),
      b = M.getUTCFullYear(),
      A = new Date(0);
    A.setUTCFullYear(b + 1, 0, 4), A.setUTCHours(0, 0, 0, 0);
    var N = (0, a.Z)(A),
      I = new Date(0);
    I.setUTCFullYear(b, 0, 4), I.setUTCHours(0, 0, 0, 0);
    var O = (0, a.Z)(I);
    return M.getTime() >= N.getTime() ? b + 1 : M.getTime() >= O.getTime() ? b : b - 1;
  }
});
