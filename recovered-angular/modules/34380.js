// Extracted from main; webpack module 34380. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    return function (a, m) {
      var M;
      if ("formatting" === (null != m && m.context ? String(m.context) : "standalone") && e.formattingValues) {
        var b = e.defaultFormattingWidth || e.defaultWidth,
          A = null != m && m.width ? String(m.width) : b;
        M = e.formattingValues[A] || e.formattingValues[b];
      } else {
        var N = e.defaultWidth,
          I = null != m && m.width ? String(m.width) : e.defaultWidth;
        M = e.values[I] || e.values[N];
      }
      return M[e.argumentCallback ? e.argumentCallback(a) : a];
    };
  }
  i.d(V, {
    Z: () => t
  });
});
