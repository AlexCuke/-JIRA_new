// Extracted from main; webpack module 59264. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => b
  });
  var t = i(80953),
    e = i(77290),
    a = i(37875),
    m = i(40833),
    M = 6048e5;
  function b(A) {
    (0, m.Z)(1, arguments);
    var N = (0, t.Z)(A),
      I = (0, e.Z)(N).getTime() - function d(A) {
        (0, m.Z)(1, arguments);
        var N = (0, a.Z)(A),
          I = new Date(0);
        return I.setUTCFullYear(N, 0, 4), I.setUTCHours(0, 0, 0, 0), (0, e.Z)(I);
      }(N).getTime();
    return Math.round(I / M) + 1;
  }
});
