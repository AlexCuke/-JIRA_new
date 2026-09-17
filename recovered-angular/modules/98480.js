// Extracted from main; webpack module 98480. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(m) {
    return function (d) {
      var M = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        b = M.width,
        N = d.match(b && m.matchPatterns[b] || m.matchPatterns[m.defaultMatchWidth]);
      if (!N) return null;
      var C,
        I = N[0],
        O = b && m.parsePatterns[b] || m.parsePatterns[m.defaultParseWidth],
        L = Array.isArray(O) ? function a(m, d) {
          for (var M = 0; M < m.length; M++) if (d(m[M])) return M;
        }(O, function (f) {
          return f.test(I);
        }) : function e(m, d) {
          for (var M in m) if (m.hasOwnProperty(M) && d(m[M])) return M;
        }(O, function (f) {
          return f.test(I);
        });
      return C = m.valueCallback ? m.valueCallback(L) : L, {
        value: C = M.valueCallback ? M.valueCallback(C) : C,
        rest: d.slice(I.length)
      };
    };
  }
  i.d(V, {
    Z: () => t
  });
});
