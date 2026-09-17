// Extracted from main; webpack module 21846. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    g: () => m
  });
  var t = i(61135),
    e = i(77579),
    a = i(94650);
  const d = class {
    constructor() {
      this.updateSubject$ = new t.X(null), this.actionSubject$ = new e.x(), this.updates$ = this.updateSubject$.asObservable(), this.searchSubject = new t.X(""), this.search$ = this.searchSubject.asObservable();
    }
    sendUpdate(b) {
      this.updateSubject$.next(b);
    }
    runActionSubject(b) {
      this.actionSubject$.next(b);
    }
    getActionSubjectTrigger() {
      return this.actionSubject$.asObservable();
    }
    setSearch(b) {
      this.searchSubject.next(b);
    }
    reloadList(b) {
      this.actionSubject$.next(`${b}:reload`);
    }
  };
  let m = d;
  d.ɵfac = function (A) {
    return new (A || d)();
  }, d.ɵprov = a.Yz7({
    token: d,
    factory: d.ɵfac,
    providedIn: "root"
  });
});
