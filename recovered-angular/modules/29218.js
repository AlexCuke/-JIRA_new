// Extracted from main; webpack module 29218. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => N,
    H0: () => b,
    VK: () => M
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
      this.httpClient = C, this.basePath = "http://appointment-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), f && (this.configuration = f), "string" != typeof this.configuration.basePath && ("string" != typeof v && (v = this.basePath), this.configuration.basePath = v), this.encoder = this.configuration.encoder || new e();
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
    cancelAppointmentCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter cancelAppointmentCommand was null or undefined when calling cancelAppointmentCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/appointment/cancel`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    changeAppointmentCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter changeAppointmentCommand was null or undefined when calling changeAppointmentCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/appointment/edit`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    changeAppointmentPaymentStatusCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter changeAppointmentPaymentStatusCommand was null or undefined when calling changeAppointmentPaymentStatusCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/appointment/changePaymentStatus`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    createAppointmentCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter createAppointmentCommand was null or undefined when calling createAppointmentCommand.");
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
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/appointment/create`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    findAppointmentByAssignmentCompositionQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter assignmentCompositionUid was null or undefined when calling findAppointmentByAssignmentCompositionQuery.");
      let h = new t.LE({
        encoder: this.encoder
      });
      null != C && (h = this.addToHttpParams(h, C, "assignmentCompositionUid"));
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = E && E.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = E && E.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/appointment/findByAssignmentCompositionUid`, {
        context: R,
        params: h,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: v,
        reportProgress: f
      });
    }
    findAppointmentByCareCaseQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter careCaseId was null or undefined when calling findAppointmentByCareCaseQuery.");
      let h = new t.LE({
        encoder: this.encoder
      });
      null != C && (h = this.addToHttpParams(h, C, "careCaseId"));
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("apiKeyTenantId"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("apiKeyUserId"), u && (x = x.set("X-User-Id", u));
      let T = E && E.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (x = x.set("Accept", T));
      let R = E && E.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/appointment/findByCareCaseId`, {
        context: R,
        params: h,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: v,
        reportProgress: f
      });
    }
    getAppointmentQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter appointmentId was null or undefined when calling getAppointmentQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("apiKeyTenantId"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("apiKeyUserId"), x && (h = h.set("X-User-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      let R = "json";
      return u && (R = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/appointment/${encodeURIComponent(String(C))}`, {
        context: T,
        responseType: R,
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
