// Extracted from main; webpack module 86. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
      return typeof a;
    } : function (a) {
      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    })(e);
  }
  i.d(V, {
    Z: () => t
  });
});
