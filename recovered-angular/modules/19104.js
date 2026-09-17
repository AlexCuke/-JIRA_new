// Extracted from main; webpack module 19104. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    i8: () => b,
    dW: () => N
  });
  var t = i(80529);
  class e {
    encodeKey(v) {
      return encodeURIComponent(v);
    }
    encodeValue(v) {
      return encodeURIComponent(v);
    }
    decodeKey(v) {
      return decodeURIComponent(v);
    }
    decodeValue(v) {
      return decodeURIComponent(v);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(v = {}) {
      this.apiKeys = v.apiKeys, this.username = v.username, this.password = v.password, this.accessToken = v.accessToken, this.basePath = v.basePath, this.withCredentials = v.withCredentials, this.encoder = v.encoder, this.credentials = v.credentials ? v.credentials : {}, this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyTenantId || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.apiKeyUserId || (this.credentials.apiKeyUserId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyUserId || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(v) {
      if (0 === v.length) return;
      const f = v.find(E => this.isJsonMime(E));
      return void 0 === f ? v[0] : f;
    }
    selectHeaderAccept(v) {
      if (0 === v.length) return;
      const f = v.find(E => this.isJsonMime(E));
      return void 0 === f ? v[0] : f;
    }
    isJsonMime(v) {
      const f = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== v && (f.test(v) || "application/json-patch+json" === v.toLowerCase());
    }
    lookupCredential(v) {
      const f = this.credentials[v];
      return "function" == typeof f ? f() : f;
    }
  }
  const O = class {
    constructor(v, f, E) {
      this.httpClient = v, this.basePath = "http://medicaments-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), E && (this.configuration = E), "string" != typeof this.configuration.basePath && ("string" != typeof f && (f = this.basePath), this.configuration.basePath = f), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(v, f, E) {
      return "object" != typeof f || f instanceof Date ? this.addToHttpParamsRecursive(v, f, E) : this.addToHttpParamsRecursive(v, f);
    }
    addToHttpParamsRecursive(v, f, E) {
      if (null == f) return v;
      if ("object" == typeof f) {
        if (Array.isArray(f)) f.forEach(h => v = this.addToHttpParamsRecursive(v, h, E));else if (f instanceof Date) {
          if (null == E) throw Error("key may not be null if value is Date");
          v = v.append(E, f.toISOString().substr(0, 10));
        } else Object.keys(f).forEach(h => v = this.addToHttpParamsRecursive(v, f[h], null != E ? `${E}.${h}` : h));
      } else {
        if (null == E) throw Error("key may not be null if value is not object or array");
        v = v.append(E, f);
      }
      return v;
    }
    activateMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter activateMedicationAssignmentInstructionCommand was null or undefined when calling activateMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/activate`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    cancelMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter cancelMedicationAssignmentInstructionCommand was null or undefined when calling cancelMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/cancel`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    cancelMedicationDispenseCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter cancelMedicationDispenseCommand was null or undefined when calling cancelMedicationDispenseCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/cancelMedicationDispenseCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    checkCompletedAssignmentCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter checkCompletedAssignmentCommand was null or undefined when calling checkCompletedAssignmentCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/checkCompletedAssignmentCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    checkMedicationAssignmentInstructionDublicateQuery(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter findDuplicates was null or undefined when calling checkMedicationAssignmentInstructionDublicateQuery.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/findDuplicates`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    completeMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter completeMedicationAssignmentInstructionCommand was null or undefined when calling completeMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/completeMedicationAssignmentInstructionCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    completeMedicationDispenseCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter completeMedicationDispenseCommand was null or undefined when calling completeMedicationDispenseCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/completeMedicationDispenseCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    createMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter createMedicationsAssignmentInstructionCommand was null or undefined when calling createMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    createMedicationInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter createMedicationInstructionCommand was null or undefined when calling createMedicationInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/createMedicationInstructionCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    deactivateMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter deactivateMedicationAssignmentInstructionCommand was null or undefined when calling deactivateMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/deactivate`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    deleteMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter deleteMedicationAssignmentInstructionCommand was null or undefined when calling deleteMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/delete`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    getMedicationAssignmentInstructionQuery(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter getMedicationAssignmentInstructionQuery was null or undefined when calling getMedicationAssignmentInstructionQuery.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/getMedicationAssignmentInstructionQuery`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    getMedicationAssignmentInstructionStatusQuery(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter compositionUid was null or undefined when calling getMedicationAssignmentInstructionStatusQuery.");
      let x = new t.LE({
        encoder: this.encoder
      });
      null != v && (x = this.addToHttpParams(x, v, "compositionUid"));
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = h && h.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = h && h.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/assignment/findByCompositionUid`, {
        context: B,
        params: x,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: f,
        reportProgress: E
      });
    }
    getMedicationAssignmentsBetweenQuery(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter getAssignmentsBetweenQuery was null or undefined when calling getMedicationAssignmentsBetweenQuery.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/findBetween`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    getMedicationInstructionsQuery(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter getMedicationInstructionsQuery was null or undefined when calling getMedicationInstructionsQuery.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/getMedicationInstructionsQuery`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    markMedicationAssignmentInstructionAsCancellingCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter markMedicationAssignmentInstructionAsCancellingCommand was null or undefined when calling markMedicationAssignmentInstructionAsCancellingCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markAssignmentAsCancelling`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    markMedicationAssignmentInstructionAsEditingCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter markMedicationAssignmentInstructionAsEditingCommand was null or undefined when calling markMedicationAssignmentInstructionAsEditingCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markAssignmentAsEditing`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    markMedicationDispenseAsCancellingCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter markMedicationDispenseAsCancellingCommand was null or undefined when calling markMedicationDispenseAsCancellingCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/markMedicationDispenseAsCancellingCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    markMedicationDispenseAsPreparedCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter markMedicationDispenseAsPreparedCommand was null or undefined when calling markMedicationDispenseAsPreparedCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/markMedicationDispenseAsPreparedCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    moveMedicationDispenseToAssignedCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter moveMedicationDispenseToAssignedCommand was null or undefined when calling moveMedicationDispenseToAssignedCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/moveMedicationDispenseToAssigned`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    planMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter planMedicationsAssignmentInstructionCommand was null or undefined when calling planMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/plan`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    planMedicationInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter planMedicationInstructionCommand was null or undefined when calling planMedicationInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/planMedicationInstructionCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    postponeMedicationInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter postponeMedicationInstructionCommand was null or undefined when calling postponeMedicationInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/postponeMedicationInstructionCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    rollbackCancelMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter rollbackCancelMedicationAssignmentInstructionCommand was null or undefined when calling rollbackCancelMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/rollbackCancel`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    rollbackCompleteMedicationAssignmentInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter rollbackCompleteMedicationAssignmentInstructionCommand was null or undefined when calling rollbackCompleteMedicationAssignmentInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/rollbackComplete`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    rollbackPostponeMedicationInstructionCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter rollbackPostponeMedicationInstructionCommand was null or undefined when calling rollbackPostponeMedicationInstructionCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/rollbackPostponeMedicationInstructionCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    unMarkMedicationAssignmentInstructionAsCancellingCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter unMarkMedicationAssignmentInstructionAsCancellingCommand was null or undefined when calling unMarkMedicationAssignmentInstructionAsCancellingCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/unmarkAssignmentAsCancelling`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    unmarkMedicationDispenseAsCancellingCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter unmarkMedicationDispenseAsCancellingCommand was null or undefined when calling unmarkMedicationDispenseAsCancellingCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/unmarkMedicationDispenseAsCancellingCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    unmarkMedicationDispenseAsPreparedCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter unmarkMedicationDispenseAsPreparedCommand was null or undefined when calling unmarkMedicationDispenseAsPreparedCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medication/unmarkMedicationDispenseAsPreparedCommand`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
  };
  let b = O;
  O.ɵfac = function (f) {
    return new (f || O)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, O.ɵprov = a.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
  var N = (() => ((N || (N = {})).StatusEnum = {
    Assigned: "ASSIGNED",
    Created: "CREATED",
    Cancelling: "CANCELLING",
    Cancelled: "CANCELLED",
    Completed: "COMPLETED",
    Postponed: "POSTPONED",
    Editing: "EDITING",
    Prepared: "PREPARED",
    Executing: "EXECUTING",
    Refused: "REFUSED",
    Infused: "INFUSED"
  }, N))();
  const L = class {
    static forRoot(v) {
      return {
        ngModule: L,
        providers: [{
          provide: M,
          useFactory: v
        }]
      };
    }
    constructor(v, f) {
      if (v) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!f) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let I = L;
  L.ɵfac = function (f) {
    return new (f || L)(a.LFG(L, 12), a.LFG(t.eN, 8));
  }, L.ɵmod = a.oAB({
    type: L
  }), L.ɵinj = a.cJS({});
});
