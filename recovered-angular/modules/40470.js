// Extracted from main; webpack module 40470. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    L: () => a
  });
  var t = i(61135),
    e = i(94650);
  const m = class {
    constructor() {
      this._counter = 0, this.notifications$ = new t.X([]);
    }
    show(M, b = "info", A = 3e3) {
      const N = ++this._counter;
      this.notifications$.next([...this.notifications$.value, {
        id: N,
        type: b,
        message: M,
        lifeTime: A
      }]), A > 0 && setTimeout(() => this.remove(N), A);
    }
    info(M, b) {
      this.show(M, "info", b);
    }
    success(M, b) {
      this.show(M, "success", b);
    }
    warning(M, b) {
      this.show(M, "warning", b);
    }
    error(M, b) {
      this.show(M, "error", b);
    }
    remove(M) {
      this.notifications$.next(this.notifications$.value.filter(b => b.id !== M));
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
