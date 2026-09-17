// Extracted from main; webpack module 84707. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => C,
    VK: () => M,
    U7: () => A,
    dL: () => O,
    MY: () => L
  });
  var t = i(80529);
  class e {
    encodeKey(u) {
      return encodeURIComponent(u);
    }
    encodeValue(u) {
      return encodeURIComponent(u);
    }
    decodeKey(u) {
      return decodeURIComponent(u);
    }
    decodeValue(u) {
      return decodeURIComponent(u);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(u = {}) {
      this.apiKeys = u.apiKeys, this.username = u.username, this.password = u.password, this.accessToken = u.accessToken, this.basePath = u.basePath, this.withCredentials = u.withCredentials, this.encoder = u.encoder, this.credentials = u.credentials ? u.credentials : {}, this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyTenantId || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.apiKeyUserId || (this.credentials.apiKeyUserId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyUserId || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(u) {
      if (0 === u.length) return;
      const T = u.find(R => this.isJsonMime(R));
      return void 0 === T ? u[0] : T;
    }
    selectHeaderAccept(u) {
      if (0 === u.length) return;
      const T = u.find(R => this.isJsonMime(R));
      return void 0 === T ? u[0] : T;
    }
    isJsonMime(u) {
      const T = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== u && (T.test(u) || "application/json-patch+json" === u.toLowerCase());
    }
    lookupCredential(u) {
      const T = this.credentials[u];
      return "function" == typeof T ? T() : T;
    }
  }
  const v = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://procedure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    routeEhrDbEvent(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter ehrdbProcedureAssignmentDocumentPayload was null or undefined when calling routeEhrDbEvent.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/commandEvents/routeEhrDbEvent`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
  };
  v.ɵfac = function (T) {
    return new (T || v)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, v.ɵprov = a.Yz7({
    token: v,
    factory: v.ɵfac,
    providedIn: "root"
  });
  const f = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://procedure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    activateProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter activateProcedureAssignmentCommand was null or undefined when calling activateProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/activateProcedureAssignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    activateProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter activateProcedureCommand was null or undefined when calling activateProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/activateProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    activateWithProtocolProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter activateWithProtocolProcedureCommand was null or undefined when calling activateWithProtocolProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/activateWithProtocolProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    cancelProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter cancelProcedureAssignmentCommand was null or undefined when calling cancelProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/cancelProcedureAssignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    cancelProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter cancelProcedureCommand was null or undefined when calling cancelProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/cancelProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    checkProcedureAssignmentDublicateQuery(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter findDuplicates was null or undefined when calling checkProcedureAssignmentDublicateQuery.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/findDuplicates`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    completeProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter completeProcedureAssignmentCommand was null or undefined when calling completeProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/completeProcedureAssignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    completeProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter completeProcedureCommand was null or undefined when calling completeProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/completeProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    completeWithProtocolProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter completeWithProtocolProcedureCommand was null or undefined when calling completeWithProtocolProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/completeWithProtocolProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    createProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter createProcedureAssignmentCommand was null or undefined when calling createProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    deactivateProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter deactivateProcedureAssignmentCommand was null or undefined when calling deactivateProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/deactivateProcedureAssignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    deactivateProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter deactivateProcedureCommand was null or undefined when calling deactivateProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/deactivateProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    deleteProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter deleteProcedureAssignmentCommand was null or undefined when calling deleteProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/delete`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    doneProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter doneProcedureAssignmentCommand was null or undefined when calling doneProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/doneProcedureAssignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    getProcedureAssignmentStatusQuery(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter compositionUid was null or undefined when calling getProcedureAssignmentStatusQuery.");
      let y = new t.LE({
        encoder: this.encoder
      });
      null != u && (y = this.addToHttpParams(y, u, "compositionUid"));
      let W,
        j = this.defaultHeaders;
      W = this.configuration.lookupCredential("apiKeyTenantId"), W && (j = j.set("X-Tenant-Id", W)), W = this.configuration.lookupCredential("apiKeyUserId"), W && (j = j.set("X-User-Id", W));
      let F = B && B.httpHeaderAccept;
      void 0 === F && (F = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== F && (j = j.set("Accept", F));
      let Le = B && B.context;
      void 0 === Le && (Le = new t.qT());
      let ke = "json";
      return F && (ke = F.startsWith("text") ? "text" : this.configuration.isJsonMime(F) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/assignment/findByCompositionUid`, {
        context: Le,
        params: y,
        responseType: ke,
        withCredentials: this.configuration.withCredentials,
        headers: j,
        observe: T,
        reportProgress: R
      });
    }
    getProcedureAssignmentsBetweenQuery(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter getProcedureAssignmentsBetweenQuery was null or undefined when calling getProcedureAssignmentsBetweenQuery.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/findBetween`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    getProcedureAssignmentsQuery(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter getProcedureAssignmentsQuery was null or undefined when calling getProcedureAssignmentsQuery.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/find`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    getProceduresQuery(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter getProceduresQuery was null or undefined when calling getProceduresQuery.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/getProcedures`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    markProcedureAsCancellingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter markProcedureAsCancellingCommand was null or undefined when calling markProcedureAsCancellingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/markProcedureCancelling`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    markProcedureAssignmentAsCancellingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter markProcedureAssignmentAsCancellingCommand was null or undefined when calling markProcedureAssignmentAsCancellingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markAssignmentAsCancelling`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    markProcedureAssignmentAsEditingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter markProcedureAssignmentAsEditingCommand was null or undefined when calling markProcedureAssignmentAsEditingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markAssignmentAsEditing`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    markProcedureAssignmentAsFinishingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter markProcedureAssignmentAsFinishingCommand was null or undefined when calling markProcedureAssignmentAsFinishingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markProcedureAssignmentAsFinishing`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    markProcedureDressingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter markProcedureDressingCommand was null or undefined when calling markProcedureDressingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/markProcedureDressing`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    planProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter planProcedureAssignmentCommand was null or undefined when calling planProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/plan`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    planProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter planProcedureCommand was null or undefined when calling planProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/planProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    rollbackCancelProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter rollbackCancelProcedureAssignmentCommand was null or undefined when calling rollbackCancelProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/rollbackCancelProcedureAssignment`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    rollbackCancelProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter rollbackCancelProcedureCommand was null or undefined when calling rollbackCancelProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/rollbackCancelProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    rollbackCompleteProcedureAssignmentCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter rollbackCompleteProcedureAssignmentCommand was null or undefined when calling rollbackCompleteProcedureAssignmentCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/rollbackComplete`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    rollbackCompleteProcedureCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter rollbackCompleteProcedureCommand was null or undefined when calling rollbackCompleteProcedureCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/rollbackCompleteProcedure`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    unMarkProcedureAsCancellingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter unMarkProcedureAsCancellingCommand was null or undefined when calling unMarkProcedureAsCancellingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/unmarkProcedureCancelling`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    unMarkProcedureAssignmentAsCancellingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter unMarkProcedureAssignmentAsCancellingCommand was null or undefined when calling unMarkProcedureAssignmentAsCancellingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/unmarkAssignmentAsCancelling`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    unMarkProcedureAssignmentAsFinishingCommand(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter unMarkProcedureAssignmentAsFinishingCommand was null or undefined when calling unMarkProcedureAssignmentAsFinishingCommand.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/unmarkProcedureAssignmentAsFinishing`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
  };
  let A = f;
  f.ɵfac = function (T) {
    return new (T || f)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, f.ɵprov = a.Yz7({
    token: f,
    factory: f.ɵfac,
    providedIn: "root"
  });
  const E = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://procedure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    procedureAssignmentDomainEvent(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter abstractProcedureAssignmentEventProcedureAssignmentActiveEventProcedureAssignmentAssignedEventProcedureAssignmentCanceledEventProcedureAssignmentCancellingEventProcedureAssignmentCompletedEventProcedureAssignmentCreatedEventProcedureAssignmentDeletedEventProcedureAssignmentDoneEventProcedureAssignmentEditingEventProcedureAssignmentMarkedAsFinishingEventProcedureAssignmentUpdatedEvent was null or undefined when calling procedureAssignmentDomainEvent.");
      let j,
        y = this.defaultHeaders;
      j = this.configuration.lookupCredential("apiKeyTenantId"), j && (y = y.set("X-Tenant-Id", j)), j = this.configuration.lookupCredential("apiKeyUserId"), j && (y = y.set("X-User-Id", j));
      let W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept([])), void 0 !== W && (y = y.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      const ke = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== ke && (y = y.set("Content-Type", ke));
      let J = "json";
      return W && (J = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/domain-events/procedureAssignmentDomainEvent`, u, {
        context: F,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
  };
  E.ɵfac = function (T) {
    return new (T || E)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, E.ɵprov = a.Yz7({
    token: E,
    factory: E.ɵfac,
    providedIn: "root"
  });
  var O = (() => {
      return (x = O || (O = {})).StatusEnum = {
        Planned: "PLANNED",
        Cancelling: "CANCELLING",
        Cancelled: "CANCELLED",
        Completed: "COMPLETED",
        NotCompleted: "NOT_COMPLETED",
        CompletedProtocol: "COMPLETED_PROTOCOL",
        Started: "STARTED",
        StartedProtocol: "STARTED_PROTOCOL"
      }, x.CitoEnum = {
        Cito: "CITO",
        Planned: "PLANNED",
        Emergent: "EMERGENT"
      }, O;
      var x;
    })(),
    L = (() => ((L || (L = {})).StatusEnum = {
      Planned: "PLANNED",
      Cancelling: "CANCELLING",
      Cancelled: "CANCELLED",
      Completed: "COMPLETED",
      NotCompleted: "NOT_COMPLETED",
      CompletedProtocol: "COMPLETED_PROTOCOL",
      Started: "STARTED",
      StartedProtocol: "STARTED_PROTOCOL"
    }, L))();
  const h = class {
    static forRoot(u) {
      return {
        ngModule: h,
        providers: [{
          provide: M,
          useFactory: u
        }]
      };
    }
    constructor(u, T) {
      if (u) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!T) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let C = h;
  h.ɵfac = function (T) {
    return new (T || h)(a.LFG(h, 12), a.LFG(t.eN, 8));
  }, h.ɵmod = a.oAB({
    type: h
  }), h.ɵinj = a.cJS({});
});
