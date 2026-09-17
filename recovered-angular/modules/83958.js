// Extracted from main; webpack module 83958. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    u: () => a
  });
  var t = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function (d) {
        return d < 0 ? Math.ceil(d) : Math.floor(d);
      }
    },
    e = "trunc";
  function a(m) {
    return m ? t[m] : t[e];
  }
});
