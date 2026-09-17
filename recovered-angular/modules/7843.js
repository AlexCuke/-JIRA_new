// Extracted from main; webpack module 7843. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    PH: () => d
  });
  var t = i(28115),
    e = i(53337),
    a = i(5238);
  const m = 6;
  function d(N = new Date()) {
    return {
      start: (0, t.Z)(N),
      end: (0, e.Z)((0, a.Z)((0, t.Z)(N), 1), {
        hours: m,
        minutes: 0,
        seconds: 0
      })
    };
  }
});
