// Extracted from main; webpack module 941. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    return function (a) {
      var m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        d = a.match(e.matchPattern);
      if (!d) return null;
      var M = d[0],
        b = a.match(e.parsePattern);
      if (!b) return null;
      var A = e.valueCallback ? e.valueCallback(b[0]) : b[0];
      return {
        value: A = m.valueCallback ? m.valueCallback(A) : A,
        rest: a.slice(M.length)
      };
    };
  }
  i.d(V, {
    Z: () => t
  });
});
