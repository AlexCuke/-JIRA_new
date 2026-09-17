// Extracted from main; webpack module 33116. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    j: () => a
  });
  var t = i(77579),
    e = i(94650);
  const m = class {
    constructor() {
      this.reload$ = new t.x(), this.reload$$ = this.reload$.asObservable();
    }
    reload() {
      this.reload$.next();
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
