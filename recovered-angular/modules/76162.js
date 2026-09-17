// Extracted from main; webpack module 76162. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.default = function i(t) {
    var e = [];
    return function a(m) {
      if (Array.isArray(m)) for (var d = 0; d < m.length; d++) a(m[d]);else m.text = m.text || "", m.data = m.data || "", e.push(m);
    }(t), e;
  };
});
