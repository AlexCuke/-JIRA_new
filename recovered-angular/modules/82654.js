// Extracted from main; webpack module 82654. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => N,
    VK: () => M,
    dn: () => b
  });
  var t = i(80529);
  class e {
    encodeKey(C) {
      return encodeURIComponent(C);
    }
    encodeValue(C) {
      return encodeURIComponent(C);
    }
    decodeKey(C) {
      return decodeURIComponent(C);
    }
    decodeValue(C) {
      return decodeURIComponent(C);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(C = {}) {
      this.apiKeys = C.apiKeys, this.username = C.username, this.password = C.password, this.accessToken = C.accessToken, this.basePath = C.basePath, this.withCredentials = C.withCredentials, this.encoder = C.encoder, this.credentials = C.credentials ? C.credentials : {}, this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyTenantId || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.apiKeyUserId || (this.credentials.apiKeyUserId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyUserId || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(C) {
      if (0 === C.length) return;
      const v = C.find(f => this.isJsonMime(f));
      return void 0 === v ? C[0] : v;
    }
    selectHeaderAccept(C) {
      if (0 === C.length) return;
      const v = C.find(f => this.isJsonMime(f));
      return void 0 === v ? C[0] : v;
    }
    isJsonMime(C) {
      const v = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== C && (v.test(C) || "application/json-patch+json" === C.toLowerCase());
    }
    lookupCredential(C) {
      const v = this.credentials[C];
      return "function" == typeof v ? v() : v;
    }
  }
  const I = class {
    constructor(C, v, f) {
      this.httpClient = C, this.basePath = "https://lab.dev-hospital.emias.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), f && (this.configuration = f), "string" != typeof this.configuration.basePath && ("string" != typeof v && (v = this.basePath), this.configuration.basePath = v), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(C, v, f) {
      return "object" != typeof v || v instanceof Date ? this.addToHttpParamsRecursive(C, v, f) : this.addToHttpParamsRecursive(C, v);
    }
    addToHttpParamsRecursive(C, v, f) {
      if (null == v) return C;
      if ("object" == typeof v) {
        if (Array.isArray(v)) v.forEach(E => C = this.addToHttpParamsRecursive(C, E, f));else if (v instanceof Date) {
          if (null == f) throw Error("key may not be null if value is Date");
          C = C.append(f, v.toISOString().substr(0, 10));
        } else Object.keys(v).forEach(E => C = this.addToHttpParamsRecursive(C, v[E], null != f ? `${f}.${E}` : E));
      } else {
        if (null == f) throw Error("key may not be null if value is not object or array");
        C = C.append(f, v);
      }
      return C;
    }
    activateLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter activateLabInstructionCommand was null or undefined when calling activateLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/activate`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    activateLabReferralCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter activateLabReferralCommand was null or undefined when calling activateLabReferralCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/activateLabReferral`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    cancelLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter cancelLabInstructionCommand was null or undefined when calling cancelLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/cancel`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    completeLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter completeLabInstructionCommand was null or undefined when calling completeLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/complete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    completeLabReferralCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter completeLabReferralCommand was null or undefined when calling completeLabReferralCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/completeLabReferral`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    completeWithoutResultsCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter completeWithoutResultsCommand was null or undefined when calling completeWithoutResultsCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/completeWithoutResults`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    createLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter createLabInstructionCommand was null or undefined when calling createLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    createLaboratoryCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter createLaboratoryCommand was null or undefined when calling createLaboratoryCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/laboratory`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    createLaboratoryRoutingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter createLaboratoryRoutingCommand was null or undefined when calling createLaboratoryRoutingCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deactivateLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deactivateLabInstructionCommand was null or undefined when calling deactivateLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/deactivate`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deactivateLabReferralCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deactivateLabReferralCommand was null or undefined when calling deactivateLabReferralCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/deactivateLabReferral`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deleteLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deleteLabInstructionCommand was null or undefined when calling deleteLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/delete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deleteLaboratoryCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deleteLaboratoryCommand was null or undefined when calling deleteLaboratoryCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/laboratory`, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deleteLaboratoryRoutingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deleteLaboratoryRoutingCommand was null or undefined when calling deleteLaboratoryRoutingCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile/delete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    failLabReferralRegistrationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter failLabReferralRegistrationCommand was null or undefined when calling failLabReferralRegistrationCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/failLabReferralRegistration`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    findDuplicates(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter findDuplicates was null or undefined when calling findDuplicates.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/findDuplicates`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getLabInstructionQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter find was null or undefined when calling getLabInstructionQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/find`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getLabInstructionStatusQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter compositionUid was null or undefined when calling getLabInstructionStatusQuery.");
      let h = new t.LE({
        encoder: this.encoder
      });
      null != C && (h = this.addToHttpParams(h, C, "compositionUid"));
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = E && E.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = E && E.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/assignment/findByCompositionUid`, {
        context: R,
        params: h,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: v,
        reportProgress: f
      });
    }
    getLabReferral(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter referralId was null or undefined when calling getLabReferral.");
      let h = new t.LE({
        encoder: this.encoder
      });
      null != C && (h = this.addToHttpParams(h, C, "referralId"));
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = E && E.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = E && E.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/lab`, {
        context: R,
        params: h,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: v,
        reportProgress: f
      });
    }
    getLabReferralByCodeQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getLabReferralByCodeQuery was null or undefined when calling getLabReferralByCodeQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/getLabReferralByCode`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getLabReferralsQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getLabReferralsQuery was null or undefined when calling getLabReferralsQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/getLabReferrals`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getLaboratoryProfileGroupsQuery(C = "body", v = !1, f) {
      let h,
        E = this.defaultHeaders;
      h = this.configuration.lookupCredential("apiKeyTenantId"), h && (E = E.set("X-Tenant-Id", h)), h = this.configuration.lookupCredential("apiKeyUserId"), h && (E = E.set("X-User-Id", h));
      let x = f && f.httpHeaderAccept;
      void 0 === x && (x = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== x && (E = E.set("Accept", x));
      let u = f && f.context;
      void 0 === u && (u = new t.qT());
      let T = "json";
      return x && (T = x.startsWith("text") ? "text" : this.configuration.isJsonMime(x) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/lab-profile/groups`, {
        context: u,
        responseType: T,
        withCredentials: this.configuration.withCredentials,
        headers: E,
        observe: C,
        reportProgress: v
      });
    }
    getLaboratoryProfileRoutingsByParamsQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getLaboratoryProfileRoutingsByParamsQuery was null or undefined when calling getLaboratoryProfileRoutingsByParamsQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile/routingsByParams`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getLaboratoryProfileRoutingsQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getLaboratoryProfileRoutingsQuery was null or undefined when calling getLaboratoryProfileRoutingsQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile/routing`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getLaboratoryQuery(C = "body", v = !1, f) {
      let h,
        E = this.defaultHeaders;
      h = this.configuration.lookupCredential("apiKeyTenantId"), h && (E = E.set("X-Tenant-Id", h)), h = this.configuration.lookupCredential("apiKeyUserId"), h && (E = E.set("X-User-Id", h));
      let x = f && f.httpHeaderAccept;
      void 0 === x && (x = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== x && (E = E.set("Accept", x));
      let u = f && f.context;
      void 0 === u && (u = new t.qT());
      let T = "json";
      return x && (T = x.startsWith("text") ? "text" : this.configuration.isJsonMime(x) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/laboratory`, {
        context: u,
        responseType: T,
        withCredentials: this.configuration.withCredentials,
        headers: E,
        observe: C,
        reportProgress: v
      });
    }
    getLabsBetweenQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getAssignmentsBetweenQuery was null or undefined when calling getLabsBetweenQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/findBetween`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    laboratoryRoutingAssignQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter laboratoryRoutingAssignQuery was null or undefined when calling laboratoryRoutingAssignQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile/routingAssign`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    markLabInstructionAsCancellingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter markLabInstructionAsCancellingCommand was null or undefined when calling markLabInstructionAsCancellingCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markAssignmentAsCancelling`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    markLabInstructionAsEditingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter markLabInstructionAsEditingCommand was null or undefined when calling markLabInstructionAsEditingCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/markAssignmentAsEditing`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    planLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter planLabInstructionCommand was null or undefined when calling planLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/plan`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    registerInpersonalLabReferralCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter registerLabReferralCommand was null or undefined when calling registerInpersonalLabReferralCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/registerImpersonalLabReferral`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    registerPersonalLabReferralCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter registerLabReferralCommand was null or undefined when calling registerPersonalLabReferralCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/registerPersonalLabReferral`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    removeInsructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter removeInstructionCommand was null or undefined when calling removeInsructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/removeInstruction`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    rollbackCancelLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter rollbackCancelLabInstructionCommand was null or undefined when calling rollbackCancelLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/rollbackCancel`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    rollbackCompleteLabInstructionCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter rollbackCompleteLabInstructionCommand was null or undefined when calling rollbackCompleteLabInstructionCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/rollbackComplete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    rollbackCompleteLabReferralCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter rollbackCompleteLabReferralCommand was null or undefined when calling rollbackCompleteLabReferralCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/rollbackCompleteLabReferral`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    searchRoutingsQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter searchRoutingsQuery was null or undefined when calling searchRoutingsQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile/search`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    startProbeRegistrationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter startProbeRegistrationCommand was null or undefined when calling startProbeRegistrationCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/startProbeRegistration`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    stopProbeRegistrationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter stopProbeRegistrationCommand was null or undefined when calling stopProbeRegistrationCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/stopProbeRegistration`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    suspendProbeRegistrationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter suspendProbeRegistrationCommand was null or undefined when calling suspendProbeRegistrationCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab/suspendProbeRegistration`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    unMarkLabInstructionAsCancellingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter unMarkLabInstructionAsCancellingCommand was null or undefined when calling unMarkLabInstructionAsCancellingCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/assignment/unmarkAssignmentAsCancelling`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    updateLaboratoryCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter updateLaboratoryCommand was null or undefined when calling updateLaboratoryCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/laboratory`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    updateLaboratoryRoutingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter updateLaboratoryRoutingCommand was null or undefined when calling updateLaboratoryRoutingCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/lab-profile/update`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
  };
  let b = I;
  I.ɵfac = function (v) {
    return new (v || I)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, I.ɵprov = a.Yz7({
    token: I,
    factory: I.ɵfac,
    providedIn: "root"
  });
  const O = class {
    static forRoot(C) {
      return {
        ngModule: O,
        providers: [{
          provide: M,
          useFactory: C
        }]
      };
    }
    constructor(C, v) {
      if (C) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!v) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let N = O;
  O.ɵfac = function (v) {
    return new (v || O)(a.LFG(O, 12), a.LFG(t.eN, 8));
  }, O.ɵmod = a.oAB({
    type: O
  }), O.ɵinj = a.cJS({});
});
