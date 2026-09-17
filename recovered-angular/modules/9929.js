// Extracted from main; webpack module 9929. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    zH: () => b
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
      this.apiKeys = f.apiKeys, this.username = f.username, this.password = f.password, this.accessToken = f.accessToken, this.basePath = f.basePath, this.withCredentials = f.withCredentials, this.encoder = f.encoder, this.credentials = f.credentials ? f.credentials : {}, this.credentials.JWTToken || (this.credentials.JWTToken = () => {
        if (null != this.apiKeys) return this.apiKeys.JWTToken || this.apiKeys.authorization;
      }), this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
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
      this.httpClient = f, this.basePath = "http://printservice-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    createPrintFormCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter createPrintFormCommand was null or undefined when calling createPrintFormCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/printform`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    deletePrintFormCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter printFormCode was null or undefined when calling deletePrintFormCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/printform/${encodeURIComponent(String(f))}`, {
        context: B,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getPrintFormCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter printFormCode was null or undefined when calling getPrintFormCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/printform/${encodeURIComponent(String(f))}`, {
        context: B,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getPrintFormsQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter getPrintFormsQuery was null or undefined when calling getPrintFormsQuery.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/printform/find`, f, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    printMedicalEntry(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter printMedicalEntry was null or undefined when calling printMedicalEntry.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/octet-stream"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      return void 0 !== j && (u = u.set("Content-Type", j)), this.httpClient.post(`${this.configuration.basePath}/api/v1/printform/printMedicalEntry`, f, {
        context: B,
        responseType: "blob",
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    renderPrintFormCommand(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter printFormCode was null or undefined when calling renderPrintFormCommand.");
      if (null == E) throw new Error("Required parameter renderPrintFormCommand was null or undefined when calling renderPrintFormCommand.");
      let R,
        T = this.defaultHeaders;
      R = this.configuration.lookupCredential("JWTToken"), R && (T = T.set("authorization", R)), R = this.configuration.lookupCredential("apiKeyTenantId"), R && (T = T.set("X-Tenant-Id", R)), R = this.configuration.lookupCredential("apiKeyUserId"), R && (T = T.set("X-User-Id", R));
      let B = u && u.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/octet-stream"])), void 0 !== B && (T = T.set("Accept", B));
      let y = u && u.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      return void 0 !== W && (T = T.set("Content-Type", W)), this.httpClient.post(`${this.configuration.basePath}/api/v1/printform/render/${encodeURIComponent(String(f))}`, E, {
        context: y,
        responseType: "blob",
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
      });
    }
    testPrintFormCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter testPrintFormCommand was null or undefined when calling testPrintFormCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/octet-stream"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      return void 0 !== j && (u = u.set("Content-Type", j)), this.httpClient.post(`${this.configuration.basePath}/api/v1/printform/test`, f, {
        context: B,
        responseType: "blob",
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    updatePrintFormCommand(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter printFormCode was null or undefined when calling updatePrintFormCommand.");
      if (null == E) throw new Error("Required parameter updatePrintFormCommand was null or undefined when calling updatePrintFormCommand.");
      let R,
        T = this.defaultHeaders;
      R = this.configuration.lookupCredential("JWTToken"), R && (T = T.set("authorization", R)), R = this.configuration.lookupCredential("apiKeyTenantId"), R && (T = T.set("X-Tenant-Id", R)), R = this.configuration.lookupCredential("apiKeyUserId"), R && (T = T.set("X-User-Id", R));
      let B = u && u.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (T = T.set("Accept", B));
      let y = u && u.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (T = T.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/printform/${encodeURIComponent(String(f))}`, E, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
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
      this.httpClient = f, this.basePath = "http://printservice-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    deletePrintGroupCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter deletePrintGroupCommand was null or undefined when calling deletePrintGroupCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/printgroup`, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    updatePrintGroupCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter updatePrintGroupCommand was null or undefined when calling updatePrintGroupCommand.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("JWTToken"), T && (u = u.set("authorization", T)), T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (u = u.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/printgroup`, f, {
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
