// Extracted from main; webpack module 44070. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var i = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var m in a) Object.prototype.hasOwnProperty.call(a, m) && (t[m] = a[m]);
    }
    return t;
  };
  V.default = function (t, e) {
    return i({}, t, e);
  };
});
