// Extracted from main; webpack module 80564. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => a
  });
  var t = i(54004),
    e = i(98129);
  class a extends e.U {
    constructor(d) {
      super("ehr-storage", d);
    }
    getLocalStorage() {
      return this.getSettings().pipe((0, t.U)(d => {
        const M = d.find(b => b.local);
        if (!M) throw new Error("Локальное хранилище не найдено");
        return M;
      }));
    }
  }
});
