// Extracted from main; webpack module 83034. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    IE: () => b
  });
  var t = i(80529);
  class e {
    encodeKey(f) {
      return encodeURIComponent(f);
    }
    encodeValue(f) {
      return encodeURIComponent(f);
    }
    decodeKey(f) {
      return decodeURIComponent(f);
    }
    decodeValue(f) {
      return decodeURIComponent(f);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(f = {}) {
      this.apiKeys = f.apiKeys, this.username = f.username, this.password = f.password, this.accessToken = f.accessToken, this.basePath = f.basePath, this.withCredentials = f.withCredentials, this.encoder = f.encoder, this.credentials = f.credentials ? f.credentials : {}, this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyTenantId || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.apiKeyUserId || (this.credentials.apiKeyUserId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyUserId || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(f) {
      if (0 === f.length) return;
      const E = f.find(h => this.isJsonMime(h));
      return void 0 === E ? f[0] : E;
    }
    selectHeaderAccept(f) {
      if (0 === f.length) return;
      const E = f.find(h => this.isJsonMime(h));
      return void 0 === E ? f[0] : E;
    }
    isJsonMime(f) {
      const E = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== f && (E.test(f) || "application/json-patch+json" === f.toLowerCase());
    }
    lookupCredential(f) {
      const E = this.credentials[f];
      return "function" == typeof E ? E() : E;
    }
  }
  const O = class {
    constructor(f, E, h) {
      this.httpClient = f, this.basePath = "https://instrumental.dev-hospital.emias.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(f, E, h) {
      return "object" != typeof E || E instanceof Date ? this.addToHttpParamsRecursive(f, E, h) : this.addToHttpParamsRecursive(f, E);
    }
    addToHttpParamsRecursive(f, E, h) {
      if (null == E) return f;
      if ("object" == typeof E) {
        if (Array.isArray(E)) E.forEach(x => f = this.addToHttpParamsRecursive(f, x, h));else if (E instanceof Date) {
          if (null == h) throw Error("key may not be null if value is Date");
          f = f.append(h, E.toISOString().substr(0, 10));
        } else Object.keys(E).forEach(x => f = this.addToHttpParamsRecursive(f, E[x], null != h ? `${h}.${x}` : x));
      } else {
        if (null == h) throw Error("key may not be null if value is not object or array");
        f = f.append(h, E);
      }
      return f;
    }
    activateInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter activateInstrumentalCommand was null or undefined when calling activateInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/activate`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    cancelInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter cancelInstrumentalCommand was null or undefined when calling cancelInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/cancel`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    checkInstrumentalDublicateQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter findDuplicates was null or undefined when calling checkInstrumentalDublicateQuery.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/findDuplicates`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    completeInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter completeInstrumentalCommand was null or undefined when calling completeInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/complete`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    createInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter createInstrumentalCommand was null or undefined when calling createInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    deactivateInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter deactivateInstrumentalCommand was null or undefined when calling deactivateInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/deactivate`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    deleteInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter deleteInstrumentalCommand was null or undefined when calling deleteInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/delete`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    enterInstrumentalDataCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter enterInstrumentalDataCommand was null or undefined when calling enterInstrumentalDataCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/enter`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getInstrumentalQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter getInstrumentalQuery was null or undefined when calling getInstrumentalQuery.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/find`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getInstrumentalStatusQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter compositionUid was null or undefined when calling getInstrumentalStatusQuery.");
      let u = new t.LE({
        encoder: this.encoder
      });
      null != f && (u = this.addToHttpParams(u, f, "compositionUid"));
      let R,
        T = this.defaultHeaders;
      R = this.configuration.lookupCredential("apiKeyTenantId"), R && (T = T.set("X-Tenant-Id", R)), R = this.configuration.lookupCredential("apiKeyUserId"), R && (T = T.set("X-User-Id", R));
      let B = x && x.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (T = T.set("Accept", B));
      let y = x && x.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/instrumental/findByCompositionUid`, {
        context: y,
        params: u,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: E,
        reportProgress: h
      });
    }
    getInstrumentalsBetweenQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter getAssignmentsBetweenQuery was null or undefined when calling getInstrumentalsBetweenQuery.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/findBetween`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    markInstrumentalAsCancellingCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter markInstrumentalAsCancellingCommand was null or undefined when calling markInstrumentalAsCancellingCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/markAssignmentAsCancelling`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    markInstrumentalAsDescribingCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter markInstrumentalAsDescribingCommand was null or undefined when calling markInstrumentalAsDescribingCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/markAsDescribing`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    markInstrumentalAsEditingCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter markInstrumentalAsEditingCommand was null or undefined when calling markInstrumentalAsEditingCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/markAssignmentAsEditing`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    markInstrumentalPatientNotifiedCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter markInstrumentalPatientNotifiedCommand was null or undefined when calling markInstrumentalPatientNotifiedCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/markInstrumentalPatientNotifiedCommand`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    markInstrumentalPatientPreparedCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter markInstrumentalPatientPreparedCommand was null or undefined when calling markInstrumentalPatientPreparedCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/markInstrumentalPatientPreparedCommand`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    planInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter planInstrumentalCommand was null or undefined when calling planInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/plan`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    removeInstrumentalDataCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter removeInstrumentalDataCommand was null or undefined when calling removeInstrumentalDataCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/remove`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    rollbackCancelInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter rollbackCancelInstrumentalCommand was null or undefined when calling rollbackCancelInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/rollbackCancel`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    rollbackCompleteInstrumentalCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter rollbackCompleteInstrumentalCommand was null or undefined when calling rollbackCompleteInstrumentalCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/rollback`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    unMarkInstrumentalCancellingCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter unMarkInstrumentalCancellingCommand was null or undefined when calling unMarkInstrumentalCancellingCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/unmarkAssignmentAsCancelling`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    unMarkInstrumentalDescribingCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter unMarkInstrumentalDescribingCommand was null or undefined when calling unMarkInstrumentalDescribingCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/instrumental/unmarkAsDescribing`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
  };
  let b = O;
  O.ɵfac = function (E) {
    return new (E || O)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, O.ɵprov = a.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
  const L = class {
    constructor(f, E, h) {
      this.httpClient = f, this.basePath = "https://instrumental.dev-hospital.emias.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(f, E, h) {
      return "object" != typeof E || E instanceof Date ? this.addToHttpParamsRecursive(f, E, h) : this.addToHttpParamsRecursive(f, E);
    }
    addToHttpParamsRecursive(f, E, h) {
      if (null == E) return f;
      if ("object" == typeof E) {
        if (Array.isArray(E)) E.forEach(x => f = this.addToHttpParamsRecursive(f, x, h));else if (E instanceof Date) {
          if (null == h) throw Error("key may not be null if value is Date");
          f = f.append(h, E.toISOString().substr(0, 10));
        } else Object.keys(E).forEach(x => f = this.addToHttpParamsRecursive(f, E[x], null != h ? `${h}.${x}` : x));
      } else {
        if (null == h) throw Error("key may not be null if value is not object or array");
        f = f.append(h, E);
      }
      return f;
    }
    procedureAssignmentDomainEvent(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter abstractInstrumentalEventInstrumentalActivatedEventInstrumentalAssignedEventInstrumentalCancelledEventInstrumentalCancellingEventInstrumentalCompletedEventInstrumentalCreatedEventInstrumentalDeletedEventInstrumentalEditingEventInstrumentalNotCompletedEventInstrumentalReadyToDescribeEvent was null or undefined when calling procedureAssignmentDomainEvent.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/procedure/domain-events/procedureAssignmentDomainEvent`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
  };
  L.ɵfac = function (E) {
    return new (E || L)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, L.ɵprov = a.Yz7({
    token: L,
    factory: L.ɵfac,
    providedIn: "root"
  });
  const C = class {
    static forRoot(f) {
      return {
        ngModule: C,
        providers: [{
          provide: M,
          useFactory: f
        }]
      };
    }
    constructor(f, E) {
      if (f) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!E) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let I = C;
  C.ɵfac = function (E) {
    return new (E || C)(a.LFG(C, 12), a.LFG(t.eN, 8));
  }, C.ɵmod = a.oAB({
    type: C
  }), C.ɵinj = a.cJS({});
});
