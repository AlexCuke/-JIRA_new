// Extracted from main; webpack module 39672. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e, a, m, d = 0, M = !1) {
    const b = a.schedule(function () {
      m(), M ? e.add(this.schedule(null, d)) : this.unsubscribe();
    }, d);
    if (e.add(b), !M) return b;
  }
  i.d(V, {
    f: () => t
  });
});
