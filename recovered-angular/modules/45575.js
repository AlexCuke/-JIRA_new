// Extracted from main; webpack module 45575. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    L: () => b
  });
  var t = i(29218),
    e = i(94650),
    a = i(84715),
    m = i(10885),
    d = i(97989),
    M = i(35204);
  let b = (() => {
    class A {
      constructor(I, O, L, C, v) {
        this.ehrApi = I, this.settingsApi = O, this.formsApi = L, this.assignmentApi = C, this.appointmentApi = v;
      }
    }
    return A.ɵfac = function (I) {
      return new (I || A)(e.LFG(a.i), e.LFG(m.p), e.LFG(d.C0), e.LFG(M.a), e.LFG(t.H0));
    }, A.ɵprov = e.Yz7({
      token: A,
      factory: A.ɵfac,
      providedIn: "root"
    }), A;
  })();
});
