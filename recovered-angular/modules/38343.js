// Extracted from main; webpack module 38343. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    x: () => a
  });
  var t = i(54482),
    e = i(25403);
  function a() {
    return (0, t.e)((m, d) => {
      let M = null;
      m._refCount++;
      const b = new e.Q(d, void 0, void 0, void 0, () => {
        if (!m || m._refCount <= 0 || 0 < --m._refCount) return void (M = null);
        const A = m._connection,
          N = M;
        M = null, A && (!N || A === N) && A.unsubscribe(), d.unsubscribe();
      });
      m.subscribe(b), b.closed || (M = m.connect());
    });
  }
});
