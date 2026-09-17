// Extracted from main; webpack module 58990. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    return function () {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        m = a.width ? String(a.width) : e.defaultWidth;
      return e.formats[m] || e.formats[e.defaultWidth];
    };
  }
  i.d(V, {
    Z: () => t
  });
});
