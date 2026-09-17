// Extracted from main; webpack module 53337. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => M
  });
  var t = i(86),
    e = i(80953),
    a = i(60883),
    m = i(91998),
    d = i(40833);
  function M(b, A) {
    if ((0, d.Z)(2, arguments), "object" !== (0, t.Z)(A) || null === A) throw new RangeError("values parameter must be an object");
    var N = (0, e.Z)(b);
    return isNaN(N.getTime()) ? new Date(NaN) : (null != A.year && N.setFullYear(A.year), null != A.month && (N = (0, a.Z)(N, A.month)), null != A.date && N.setDate((0, m.Z)(A.date)), null != A.hours && N.setHours((0, m.Z)(A.hours)), null != A.minutes && N.setMinutes((0, m.Z)(A.minutes)), null != A.seconds && N.setSeconds((0, m.Z)(A.seconds)), null != A.milliseconds && N.setMilliseconds((0, m.Z)(A.milliseconds)), N);
  }
});
