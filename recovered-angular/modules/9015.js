// Extracted from main; webpack module 9015. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => a
  });
  var t = i(4707),
    e = i(94650);
  const m = class {
    constructor() {
      this.currentSelectedData$ = new t.t(1), this.reloadListFn = null, this.listIndexFilterParams = {};
    }
    setListRefreshContext(M, b) {
      this.reloadListFn = M, this.listIndexFilterParams = b;
    }
    getReloadList() {
      return this.reloadListFn;
    }
    getIndexFilterParams() {
      return this.listIndexFilterParams;
    }
  };
  let a = m;
  m.ɵfac = function (b) {
    return new (b || m)();
  }, m.ɵprov = e.Yz7({
    token: m,
    factory: m.ɵfac,
    providedIn: "root"
  });
});
