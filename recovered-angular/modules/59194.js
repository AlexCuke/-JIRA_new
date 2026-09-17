// Extracted from main; webpack module 59194. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    e: () => m
  });
  var t = i(80529),
    e = i(94650),
    a = i(41025);
  const d = class {
    constructor(b, A) {
      this.http = b, this.keycloak = A;
    }
    getHeaders() {
      return new t.WM({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.keycloak.token}`
      });
    }
    findPatientByGlobalSearch(b) {
      return this.http.post("/gateway/api/v1/index/profile-global-search", b, {
        headers: this.getHeaders()
      });
    }
    updateCareCaseInfo(b, A) {
      return this.http.put(`/gateway/care-case/api/v1/carecase/${b}`, A, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    findPatientInfo(b) {
      return this.http.get(`/gateway/patient/api/v1/patient/${b}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    updatePatientInfo(b, A) {
      return this.http.put(`/gateway/patient/api/v1/patient/${b}`, A, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
  };
  let m = d;
  d.ɵfac = function (A) {
    return new (A || d)(e.LFG(t.eN), e.LFG(a.M));
  }, d.ɵprov = e.Yz7({
    token: d,
    factory: d.ɵfac,
    providedIn: "root"
  });
});
