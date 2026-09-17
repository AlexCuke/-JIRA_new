// Extracted from main; webpack module 40070. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.default = function i(t) {
    var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
    for (var a in e) e.hasOwnProperty(a) && "string" == typeof t[a = e[a]] && (t[a] = parseInt(t[a], 10));
    return "string" == typeof t.displayValue && (t.displayValue = "false" != t.displayValue), t;
  };
});
