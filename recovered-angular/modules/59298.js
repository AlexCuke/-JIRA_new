// Extracted from main; webpack module 59298. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O: () => d
  });
  var t = i(94650),
    e = i(80529),
    a = i(41025),
    m = i(89653);
  const M = class {
    constructor(A, N, I) {
      this.http = A, this.keycloak = N, this.store = I;
    }
    activateProcedure(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/activateProcedure", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    activateProcedureWithProtocol(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/activateWithProtocolProcedure", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    deactivateProcedure(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/deactivateProcedure", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    completeProcedure(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/completeProcedure", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    completeWithProtocolProcedure(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/completeWithProtocolProcedure", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    getdDiagnosisInfo(A, N) {
      return this.http.post("/gateway/diagnosis/api/v1/diagnosis/findById", {
        careCaseId: A,
        ehrId: N
      }, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    getStatusAssignment(A) {
      return this.http.get("/gateway/procedure/api/v1/assignment/findByCompositionUid", {
        params: {
          compositionUid: A
        },
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    findPatientInfo(A) {
      return this.http.get(`/gateway/patient/api/v1/patient/${A}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    markProcedureAsCancelling(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/markProcedureCancelling", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    unMarkProcedureAsCancelling(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/unmarkProcedureCancelling", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    cancelProcedure(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/cancelProcedure", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    markProcedureAssignmentAsFinishing(A) {
      return this.http.post("/gateway/procedure/api/v1/assignment/markProcedureAssignmentAsFinishing", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    unMarkProcedureAssignmentAsFinishing(A) {
      return this.http.post("/gateway/procedure/api/v1/assignment/unmarkProcedureAssignmentAsFinishing", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    completeProcedureAssignment(A) {
      return this.http.post("/gateway/procedure/api/v1/assignment/completeProcedureAssignment", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    markProcedureDressing(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/markProcedureDressing", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    unmarkProcedureDressing(A) {
      return this.http.post("/gateway/procedure/api/v1/procedure/unmarkProcedureDressing", A, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
  };
  let d = M;
  M.ɵfac = function (N) {
    return new (N || M)(t.LFG(e.eN), t.LFG(a.M), t.LFG(m.yh));
  }, M.ɵprov = t.Yz7({
    token: M,
    factory: M.ɵfac,
    providedIn: "root"
  });
});
