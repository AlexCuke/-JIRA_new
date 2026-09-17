// Extracted from main; webpack module 11958. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => O,
    VK: () => M
  });
  var t = i(80529);
  class e {
    encodeKey(h) {
      return encodeURIComponent(h);
    }
    encodeValue(h) {
      return encodeURIComponent(h);
    }
    decodeKey(h) {
      return decodeURIComponent(h);
    }
    decodeValue(h) {
      return decodeURIComponent(h);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(h = {}) {
      this.apiKeys = h.apiKeys, this.username = h.username, this.password = h.password, this.accessToken = h.accessToken, this.basePath = h.basePath, this.withCredentials = h.withCredentials, this.encoder = h.encoder, this.credentials = h.credentials ? h.credentials : {}, this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyTenantId || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.apiKeyUserId || (this.credentials.apiKeyUserId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyUserId || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(h) {
      if (0 === h.length) return;
      const x = h.find(u => this.isJsonMime(u));
      return void 0 === x ? h[0] : x;
    }
    selectHeaderAccept(h) {
      if (0 === h.length) return;
      const x = h.find(u => this.isJsonMime(u));
      return void 0 === x ? h[0] : x;
    }
    isJsonMime(h) {
      const x = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== h && (x.test(h) || "application/json-patch+json" === h.toLowerCase());
    }
    lookupCredential(h) {
      const x = this.credentials[h];
      return "function" == typeof x ? x() : x;
    }
  }
  const L = class {
    constructor(h, x, u) {
      this.httpClient = h, this.basePath = "https://care-case-kdo-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), u && (this.configuration = u), "string" != typeof this.configuration.basePath && ("string" != typeof x && (x = this.basePath), this.configuration.basePath = x), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(h, x, u) {
      return "object" != typeof x || x instanceof Date ? this.addToHttpParamsRecursive(h, x, u) : this.addToHttpParamsRecursive(h, x);
    }
    addToHttpParamsRecursive(h, x, u) {
      if (null == x) return h;
      if ("object" == typeof x) {
        if (Array.isArray(x)) x.forEach(T => h = this.addToHttpParamsRecursive(h, T, u));else if (x instanceof Date) {
          if (null == u) throw Error("key may not be null if value is Date");
          h = h.append(u, x.toISOString().substr(0, 10));
        } else Object.keys(x).forEach(T => h = this.addToHttpParamsRecursive(h, x[T], null != u ? `${u}.${T}` : T));
      } else {
        if (null == u) throw Error("key may not be null if value is not object or array");
        h = h.append(u, x);
      }
      return h;
    }
    findAssignmentPaymentQuery(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter findAssignmentPaymentQuery was null or undefined when calling findAssignmentPaymentQuery.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignmentpayment/find`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    updateAssignmentPaymentCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter updateAssignmentPaymentCommand was null or undefined when calling updateAssignmentPaymentCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignmentpayment`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
  };
  L.ɵfac = function (x) {
    return new (x || L)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, L.ɵprov = a.Yz7({
    token: L,
    factory: L.ɵfac,
    providedIn: "root"
  });
  const C = class {
    constructor(h, x, u) {
      this.httpClient = h, this.basePath = "https://care-case-kdo-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), u && (this.configuration = u), "string" != typeof this.configuration.basePath && ("string" != typeof x && (x = this.basePath), this.configuration.basePath = x), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(h, x, u) {
      return "object" != typeof x || x instanceof Date ? this.addToHttpParamsRecursive(h, x, u) : this.addToHttpParamsRecursive(h, x);
    }
    addToHttpParamsRecursive(h, x, u) {
      if (null == x) return h;
      if ("object" == typeof x) {
        if (Array.isArray(x)) x.forEach(T => h = this.addToHttpParamsRecursive(h, T, u));else if (x instanceof Date) {
          if (null == u) throw Error("key may not be null if value is Date");
          h = h.append(u, x.toISOString().substr(0, 10));
        } else Object.keys(x).forEach(T => h = this.addToHttpParamsRecursive(h, x[T], null != u ? `${u}.${T}` : T));
      } else {
        if (null == u) throw Error("key may not be null if value is not object or array");
        h = h.append(u, x);
      }
      return h;
    }
    cancelCareCaseKdoCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter cancelCareCaseKdoCommand was null or undefined when calling cancelCareCaseKdoCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept([])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/cancel`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    closeCareCaseKdoCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter closeCareCaseKdoCommand was null or undefined when calling closeCareCaseKdoCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept([])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/close`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    createAssignmentCareCaseCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter createAssignmentCareCaseCommand was null or undefined when calling createAssignmentCareCaseCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/createAssignmentCareCase`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    createCareCaseKdoCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter createCareCaseKdoCommand was null or undefined when calling createCareCaseKdoCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    deleteAssignmentCareCasesCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter deleteAssignmentCareCasesCommand was null or undefined when calling deleteAssignmentCareCasesCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept([])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/deleteAssignmentCareCases`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    findCareCaseKdoQuery(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter findCareCaseKdoQuery was null or undefined when calling findCareCaseKdoQuery.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/search`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    findCareCasesUpdatedQuery(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter findCareCasesUpdatedQueryRequest was null or undefined when calling findCareCasesUpdatedQuery.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/findUpdated`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    getCareCaseKdoQuery(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter careCaseId was null or undefined when calling getCareCaseKdoQuery.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      let W = "json";
      return y && (W = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/carecase_kdo/${encodeURIComponent(String(h))}`, {
        context: j,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    importCareCaseKdoCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter importCareCaseKdoCommand was null or undefined when calling importCareCaseKdoCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/import`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    reopenCareCaseKdoCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter reopenCareCaseKdoCommand was null or undefined when calling reopenCareCaseKdoCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept([])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/reopen`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    updateAssignmentCareCaseCommand(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter updateAssignmentCareCaseCommand was null or undefined when calling updateAssignmentCareCaseCommand.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase_kdo/updateAssignmentCareCase`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    updateCareCaseKdoCommand(h, x, u = "body", T = !1, R) {
      if (null == h) throw new Error("Required parameter careCaseId was null or undefined when calling updateCareCaseKdoCommand.");
      if (null == x) throw new Error("Required parameter updateCareCaseKdoCommand was null or undefined when calling updateCareCaseKdoCommand.");
      let y,
        B = this.defaultHeaders;
      y = this.configuration.lookupCredential("apiKeyTenantId"), y && (B = B.set("X-Tenant-Id", y)), y = this.configuration.lookupCredential("apiKeyUserId"), y && (B = B.set("X-User-Id", y));
      let j = R && R.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept([])), void 0 !== j && (B = B.set("Accept", j));
      let W = R && R.context;
      void 0 === W && (W = new t.qT());
      const Le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Le && (B = B.set("Content-Type", Le));
      let ke = "json";
      return j && (ke = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/carecase_kdo/${encodeURIComponent(String(h))}`, x, {
        context: W,
        responseType: ke,
        withCredentials: this.configuration.withCredentials,
        headers: B,
        observe: u,
        reportProgress: T
      });
    }
  };
  C.ɵfac = function (x) {
    return new (x || C)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, C.ɵprov = a.Yz7({
    token: C,
    factory: C.ɵfac,
    providedIn: "root"
  });
  const v = class {
    constructor(h, x, u) {
      this.httpClient = h, this.basePath = "https://care-case-kdo-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), u && (this.configuration = u), "string" != typeof this.configuration.basePath && ("string" != typeof x && (x = this.basePath), this.configuration.basePath = x), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(h, x, u) {
      return "object" != typeof x || x instanceof Date ? this.addToHttpParamsRecursive(h, x, u) : this.addToHttpParamsRecursive(h, x);
    }
    addToHttpParamsRecursive(h, x, u) {
      if (null == x) return h;
      if ("object" == typeof x) {
        if (Array.isArray(x)) x.forEach(T => h = this.addToHttpParamsRecursive(h, T, u));else if (x instanceof Date) {
          if (null == u) throw Error("key may not be null if value is Date");
          h = h.append(u, x.toISOString().substr(0, 10));
        } else Object.keys(x).forEach(T => h = this.addToHttpParamsRecursive(h, x[T], null != u ? `${u}.${T}` : T));
      } else {
        if (null == u) throw Error("key may not be null if value is not object or array");
        h = h.append(u, x);
      }
      return h;
    }
    routeHospitalizationDocumentEvent(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter ehrdbAssignmentCompositionPayload was null or undefined when calling routeHospitalizationDocumentEvent.");
      let B,
        R = this.defaultHeaders;
      B = this.configuration.lookupCredential("apiKeyTenantId"), B && (R = R.set("X-Tenant-Id", B)), B = this.configuration.lookupCredential("apiKeyUserId"), B && (R = R.set("X-User-Id", B));
      let y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept([])), void 0 !== y && (R = R.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      const F = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== F && (R = R.set("Content-Type", F));
      let Le = "json";
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignmentpayment/command-events/ehrdb/route-assignment-composition-document-event`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
  };
  v.ɵfac = function (x) {
    return new (x || v)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, v.ɵprov = a.Yz7({
    token: v,
    factory: v.ɵfac,
    providedIn: "root"
  });
  const f = class {
    static forRoot(h) {
      return {
        ngModule: f,
        providers: [{
          provide: M,
          useFactory: h
        }]
      };
    }
    constructor(h, x) {
      if (h) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!x) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let O = f;
  f.ɵfac = function (x) {
    return new (x || f)(a.LFG(f, 12), a.LFG(t.eN, 8));
  }, f.ɵmod = a.oAB({
    type: f
  }), f.ɵinj = a.cJS({});
});
