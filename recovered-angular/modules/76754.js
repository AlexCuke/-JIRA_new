// Extracted from main; webpack module 76754. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    S: () => a
  });
  var t = i(94650),
    e = i(11481);
  const m = class {
    constructor(M) {
      this.sanitizer = M, this.cachedTerm = null, this.cachedRegex = null;
    }
    transform(M, b, A = 3) {
      if (!M) return "";
      if (!b || b.trim().length < A) return M;
      if (b !== this.cachedTerm) {
        const I = b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.cachedRegex = new RegExp(`(${I})`, "gi"), this.cachedTerm = b;
      }
      this.cachedRegex.lastIndex = 0;
      const N = M.replace(this.cachedRegex, "<mark class=\"search-highlight\">$1</mark>");
      return this.sanitizer.bypassSecurityTrustHtml(N);
    }
  };
  let a = m;
  m.ɵfac = function (b) {
    return new (b || m)(t.Y36(e.H7, 16));
  }, m.ɵpipe = t.Yjl({
    name: "highlight",
    type: m,
    pure: !0
  });
});
