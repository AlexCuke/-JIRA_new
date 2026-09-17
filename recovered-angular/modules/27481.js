// Extracted from main; webpack module 27481. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    K: () => e
  });
  const e = a => {
    const m = new Date(a),
      d = new Date();
    let M = d.getFullYear() - m.getFullYear();
    const b = d.getMonth() - m.getMonth(),
      A = d.getDate() - m.getDate();
    return (b < 0 || 0 === b && A < 0) && M--, M;
  };
});
