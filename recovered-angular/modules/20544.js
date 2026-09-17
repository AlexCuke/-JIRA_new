// Extracted from main; webpack module 20544. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => x
  });
  var t = i(38779),
    e = i(86),
    a = i(5238),
    m = i(85866),
    d = i(80953),
    M = i(40833),
    b = i(91998);
  function A(u, T) {
    if ((0, M.Z)(2, arguments), !T || "object" !== (0, e.Z)(T)) return new Date(NaN);
    var R = T.years ? (0, b.Z)(T.years) : 0,
      B = T.months ? (0, b.Z)(T.months) : 0,
      y = T.weeks ? (0, b.Z)(T.weeks) : 0,
      j = T.days ? (0, b.Z)(T.days) : 0,
      W = T.hours ? (0, b.Z)(T.hours) : 0,
      F = T.minutes ? (0, b.Z)(T.minutes) : 0,
      Le = T.seconds ? (0, b.Z)(T.seconds) : 0,
      ke = (0, d.Z)(u),
      J = B || R ? (0, m.Z)(ke, B + 12 * R) : ke,
      fe = j || y ? (0, a.Z)(J, j + 7 * y) : J,
      Y = 1e3 * (Le + 60 * (F + 60 * W));
    return new Date(fe.getTime() + Y);
  }
  var N = i(35882),
    I = i(24185),
    O = i(45566),
    L = i(12194),
    C = i(83958),
    f = i(16153),
    h = i(83394);
  function x(u) {
    (0, M.Z)(1, arguments);
    var T = (0, d.Z)(u.start),
      R = (0, d.Z)(u.end);
    if (isNaN(T.getTime())) throw new RangeError("Start Date is invalid");
    if (isNaN(R.getTime())) throw new RangeError("End Date is invalid");
    var B = {};
    B.years = Math.abs((0, h.Z)(R, T));
    var y = (0, t.Z)(R, T),
      j = A(T, {
        years: y * B.years
      });
    B.months = Math.abs((0, f.Z)(R, j));
    var W = A(j, {
      months: y * B.months
    });
    B.days = Math.abs((0, N.Z)(R, W));
    var F = A(W, {
      days: y * B.days
    });
    B.hours = Math.abs((0, I.Z)(R, F));
    var Le = A(F, {
      hours: y * B.hours
    });
    B.minutes = Math.abs(function v(u, T, R) {
      (0, M.Z)(2, arguments);
      var B = (0, L.Z)(u, T) / O.yJ;
      return (0, C.u)(R?.roundingMethod)(B);
    }(R, Le));
    var ke = A(Le, {
      minutes: y * B.minutes
    });
    return B.seconds = Math.abs(function E(u, T, R) {
      (0, M.Z)(2, arguments);
      var B = (0, L.Z)(u, T) / 1e3;
      return (0, C.u)(R?.roundingMethod)(B);
    }(R, ke)), B;
  }
});
