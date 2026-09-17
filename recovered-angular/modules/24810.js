// Extracted from main; webpack module 24810. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => N,
    lb: () => b,
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
      this.apiKeys = C.apiKeys, this.username = C.username, this.password = C.password, this.accessToken = C.accessToken, this.basePath = C.basePath, this.withCredentials = C.withCredentials, this.encoder = C.encoder, this.credentials = C.credentials ? C.credentials : {}, this.credentials["X-Department-Id"] || (this.credentials["X-Department-Id"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-Department-Id"] || this.apiKeys["X-Department-Id"];
      }), this.credentials["X-JobTitle-Id"] || (this.credentials["X-JobTitle-Id"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-JobTitle-Id"] || this.apiKeys["X-JobTitle-Id"];
      }), this.credentials["X-Profile-Id"] || (this.credentials["X-Profile-Id"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-Profile-Id"] || this.apiKeys["X-Profile-Id"];
      }), this.credentials["X-Tenant-Id"] || (this.credentials["X-Tenant-Id"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-Tenant-Id"] || this.apiKeys["X-Tenant-Id"];
      }), this.credentials["X-User-Id"] || (this.credentials["X-User-Id"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-User-Id"] || this.apiKeys["X-User-Id"];
      }), this.credentials["X-User-Name"] || (this.credentials["X-User-Name"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-User-Name"] || this.apiKeys["X-User-Name"];
      }), this.credentials["X-Workplace-Id"] || (this.credentials["X-Workplace-Id"] = () => {
        if (null != this.apiKeys) return this.apiKeys["X-Workplace-Id"] || this.apiKeys["X-Workplace-Id"];
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
      this.httpClient = C, this.basePath = "http://care-case-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), f && (this.configuration = f), "string" != typeof this.configuration.basePath && ("string" != typeof v && (v = this.basePath), this.configuration.basePath = v), this.encoder = this.configuration.encoder || new e();
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
    cancelCareCaseCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter cancelCareCaseCommand was null or undefined when calling cancelCareCaseCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept([])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase/cancel`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    createCareCaseCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter createCareCaseCommand was null or undefined when calling createCareCaseCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    findCareCaseQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter findCareCaseQuery was null or undefined when calling findCareCaseQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase/search`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    findCareCasesUpdatedQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter findCareCasesUpdatedQueryRequest was null or undefined when calling findCareCasesUpdatedQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase/findUpdated`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getCareCaseQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter careCaseId was null or undefined when calling getCareCaseQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      let R = "json";
      return u && (R = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/carecase/${encodeURIComponent(String(C))}`, {
        context: T,
        responseType: R,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getCombinedCareCaseQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter careCaseId was null or undefined when calling getCombinedCareCaseQuery.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      let R = "json";
      return u && (R = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/carecase/combinedCareCase/${encodeURIComponent(String(C))}`, {
        context: T,
        responseType: R,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    importCareCaseCommand(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter importCareCaseCommand was null or undefined when calling importCareCaseCommand.");
      let x,
        h = this.defaultHeaders;
      x = this.configuration.lookupCredential("X-Department-Id"), x && (h = h.set("X-Department-Id", x)), x = this.configuration.lookupCredential("X-JobTitle-Id"), x && (h = h.set("X-JobTitle-Id", x)), x = this.configuration.lookupCredential("X-Profile-Id"), x && (h = h.set("X-Profile-Id", x)), x = this.configuration.lookupCredential("X-Tenant-Id"), x && (h = h.set("X-Tenant-Id", x)), x = this.configuration.lookupCredential("X-User-Id"), x && (h = h.set("X-User-Id", x)), x = this.configuration.lookupCredential("X-User-Name"), x && (h = h.set("X-User-Name", x)), x = this.configuration.lookupCredential("X-Workplace-Id"), x && (h = h.set("X-Workplace-Id", x));
      let u = E && E.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (h = h.set("Accept", u));
      let T = E && E.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (h = h.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/carecase/import`, C, {
        context: T,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    moveToAdmissionDepartmentCommand(C, v, f = "body", E = !1, h) {
      if (null == C) throw new Error("Required parameter careCaseId was null or undefined when calling moveToAdmissionDepartmentCommand.");
      if (null == v) throw new Error("Required parameter moveToAdmissionDepartmentCommand was null or undefined when calling moveToAdmissionDepartmentCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("X-Department-Id"), u && (x = x.set("X-Department-Id", u)), u = this.configuration.lookupCredential("X-JobTitle-Id"), u && (x = x.set("X-JobTitle-Id", u)), u = this.configuration.lookupCredential("X-Profile-Id"), u && (x = x.set("X-Profile-Id", u)), u = this.configuration.lookupCredential("X-Tenant-Id"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("X-User-Id"), u && (x = x.set("X-User-Id", u)), u = this.configuration.lookupCredential("X-User-Name"), u && (x = x.set("X-User-Name", u)), u = this.configuration.lookupCredential("X-Workplace-Id"), u && (x = x.set("X-Workplace-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/carecase/${encodeURIComponent(String(C))}/move`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    updateCareCaseCommand(C, v, f = "body", E = !1, h) {
      if (null == C) throw new Error("Required parameter careCaseId was null or undefined when calling updateCareCaseCommand.");
      if (null == v) throw new Error("Required parameter updateCareCaseCommand was null or undefined when calling updateCareCaseCommand.");
      let u,
        x = this.defaultHeaders;
      u = this.configuration.lookupCredential("X-Department-Id"), u && (x = x.set("X-Department-Id", u)), u = this.configuration.lookupCredential("X-JobTitle-Id"), u && (x = x.set("X-JobTitle-Id", u)), u = this.configuration.lookupCredential("X-Profile-Id"), u && (x = x.set("X-Profile-Id", u)), u = this.configuration.lookupCredential("X-Tenant-Id"), u && (x = x.set("X-Tenant-Id", u)), u = this.configuration.lookupCredential("X-User-Id"), u && (x = x.set("X-User-Id", u)), u = this.configuration.lookupCredential("X-User-Name"), u && (x = x.set("X-User-Name", u)), u = this.configuration.lookupCredential("X-Workplace-Id"), u && (x = x.set("X-Workplace-Id", u));
      let T = h && h.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept([])), void 0 !== T && (x = x.set("Accept", T));
      let R = h && h.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (x = x.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/carecase/${encodeURIComponent(String(C))}`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
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
