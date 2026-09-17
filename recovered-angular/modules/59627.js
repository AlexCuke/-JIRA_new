// Extracted from main; webpack module 59627. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => N,
    VK: () => M,
    IA: () => b
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
      this.httpClient = C, this.basePath = "https://operation.dev.hospital.solit-clouds.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), f && (this.configuration = f), "string" != typeof this.configuration.basePath && ("string" != typeof v && (v = this.basePath), this.configuration.basePath = v), this.encoder = this.configuration.encoder || new e();
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
    activateOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter activateOperationCommand was null or undefined when calling activateOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/activate`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    cancelOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter cancelOperationCommand was null or undefined when calling cancelOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/cancel`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    checkOperationDuplicateQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter findDuplicates was null or undefined when calling checkOperationDuplicateQuery.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/findDuplicates`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    completeOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter completeOperationCommand was null or undefined when calling completeOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/complete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    createOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter createOperationCommand was null or undefined when calling createOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deactivateOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deactivateOperationCommand was null or undefined when calling deactivateOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/deactivate`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    deleteOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter deleteOperationCommand was null or undefined when calling deleteOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/delete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getOperationBetweenQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getAssignmentsBetweenQuery was null or undefined when calling getOperationBetweenQuery.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/findBetween`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getOperationQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter find was null or undefined when calling getOperationQuery.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/find`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getOperationStatusQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter compositionUid was null or undefined when calling getOperationStatusQuery.");
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
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/operation/findByCompositionUid`, {
        context: R,
        params: h,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: v,
        reportProgress: f
      });
    }
    markOperationAsCancellingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter markOperationAsCancellingCommand was null or undefined when calling markOperationAsCancellingCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/markAssignmentAsCancelling`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    markOperationAsEditingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter markOperationAsEditingCommand was null or undefined when calling markOperationAsEditingCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/markAssignmentAsEditing`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    planOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter planOperationCommand was null or undefined when calling planOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/plan`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    rollbackCancelOperationCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter rollbackCancelOperationCommand was null or undefined when calling rollbackCancelOperationCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/rollbackCancel`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    rollbackCompleteAssignmentCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter rollbackCompleteOperationCommand was null or undefined when calling rollbackCompleteAssignmentCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/rollbackComplete`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    routeEhrdbEvent(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter ehrdbOperationDocumentPayload was null or undefined when calling routeEhrdbEvent.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/routeEhrdbEvent`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    unMarkOperationCancellingCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter unMarkOperationCancellingCommand was null or undefined when calling unMarkOperationCancellingCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/operation/unmarkAssignmentAsCancelling`, C, {
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
