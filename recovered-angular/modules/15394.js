// Extracted from main; webpack module 15394. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    W: () => M
  });
  var t = i(94650),
    e = i(40891),
    a = i(63900),
    m = i(80529),
    d = i(41025);
  const b = class {
    constructor() {
      this.ehrService = (0, t.f3M)(e.r), this.http = (0, t.f3M)(m.eN), this.keycloakService = (0, t.f3M)(d.M);
    }
    getEhr(N) {
      return this.ehrService.getEhr(N);
    }
    getPatientById(N) {
      return this.http.get(`/gateway/patient/api/v1/patient/${N}`, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloakService.token}`
        }
      });
    }
    getEhrByPatientId(N) {
      return this.getPatientById(N).pipe((0, a.w)(I => this.getEhr(I.ehrId)));
    }
    getComposition(N, I) {
      return N.getMedicalEntry(I);
    }
    createRootCompositionDocument(N, I, O, L, C) {
      return N.createMedicalEntry(L, I).pipe((0, a.w)(v => (new C(v).setInitialValues(I, O), v.sign())));
    }
    createChildCompositionDocument(N, I, O, L, C, v) {
      return N.createMedicalEntry(L, I).pipe((0, a.w)(f => (new C(f).setValues(O, v, "create"), f.sign())));
    }
  };
  let M = b;
  b.ɵfac = function (I) {
    return new (I || b)();
  }, b.ɵprov = t.Yz7({
    token: b,
    factory: b.ɵfac,
    providedIn: "root"
  });
});
