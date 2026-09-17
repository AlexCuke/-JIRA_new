// Extracted from main; webpack module 80953. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => a
  });
  var t = i(86),
    e = i(40833);
  function a(m) {
    (0, e.Z)(1, arguments);
    var d = Object.prototype.toString.call(m);
    return m instanceof Date || "object" === (0, t.Z)(m) && "[object Date]" === d ? new Date(m.getTime()) : "number" == typeof m || "[object Number]" === d ? new Date(m) : (("string" == typeof m || "[object String]" === d) && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
  }
});
