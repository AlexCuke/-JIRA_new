// Extracted from main; webpack module 13198. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    S: () => a
  });
  var t = i(77579),
    e = i(94650);
  const m = class {
    constructor() {
      this.reloadListSubject = new t.x(), this.reloadList$ = this.reloadListSubject.asObservable(), this.listUpdatedSubject = new t.x(), this.listUpdated$ = this.listUpdatedSubject.asObservable();
    }
    triggerReloadList() {
      this.reloadListSubject.next();
    }
    notifyListUpdated() {
      this.listUpdatedSubject.next();
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
