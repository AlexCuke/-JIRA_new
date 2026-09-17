// Extracted from main; webpack module 83888. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    const m = e(d => {
      Error.call(d), d.stack = new Error().stack;
    });
    return m.prototype = Object.create(Error.prototype), m.prototype.constructor = m, m;
  }
  i.d(V, {
    d: () => t
  });
});
