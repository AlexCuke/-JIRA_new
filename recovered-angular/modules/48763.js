// Extracted from main; webpack module 48763. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    B: () => t
  });
  class t {
    static getUid(a) {
      const m = a || "";
      return m.indexOf("::") >= 0 ? m.substring(0, m.indexOf("::")) : m;
    }
    static getVersion(a) {
      return a.split("::").length < 3 ? 0 : a.lastIndexOf("::") >= 0 ? +a.substring(a.lastIndexOf("::") + 2) : 0;
    }
    static version(a, m, d) {
      return `${a}::${m}::${d}`;
    }
    static nextVersion(a) {
      return t.version(t.getUid(a), "default", t.getVersion(a) + 1);
    }
  }
});
