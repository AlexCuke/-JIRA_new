// Extracted from main; webpack module 40891. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    r: () => N
  });
  var t = i(63900),
    e = i(54004),
    a = i(80564),
    m = i(78381),
    d = i(94650),
    M = i(45575),
    b = i(50138),
    A = i(60459);
  let N = (() => {
    class I {
      constructor(L, C, v) {
        this.api = L, this.userContext = C, this.assignmentFactory = v, this.settings = new a.z(this.api.settingsApi);
      }
      getEhr(L) {
        return this.newEhr().pipe((0, t.w)(C => C.open(L)));
      }
      createEhr() {
        return this.newEhr().pipe((0, t.w)(L => L.createNew()));
      }
      getEhrByStatus(L) {
        return this.newEhr().pipe((0, t.w)(C => C.openByStatus(L)));
      }
      newEhr() {
        return this.settings.getLocalStorage().pipe((0, e.U)(L => new m.K(L, this.api, this.userContext.getContext(), this.assignmentFactory)));
      }
    }
    return I.ɵfac = function (L) {
      return new (L || I)(d.LFG(M.L), d.LFG(b.o), d.LFG(A.h));
    }, I.ɵprov = d.Yz7({
      token: I,
      factory: I.ɵfac,
      providedIn: "root"
    }), I;
  })();
});
