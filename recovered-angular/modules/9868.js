// Extracted from main; webpack module 9868. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    var a = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return a.setUTCFullYear(e.getFullYear()), e.getTime() - a.getTime();
  }
  i.d(V, {
    Z: () => t
  });
});
