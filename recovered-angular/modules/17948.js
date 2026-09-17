// Extracted from main; webpack module 17948. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M
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
      this.httpClient = f, this.basePath = "https://adapter-ris.dev-hospital.emias.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    deleteEntityCommand(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling deleteEntityCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling deleteEntityCommand.");
      if (null == h) throw new Error("Required parameter entity was null or undefined when calling deleteEntityCommand.");
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
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/${encodeURIComponent(String(E))}`, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    exportEntityCommand(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling exportEntityCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling exportEntityCommand.");
      if (null == h) throw new Error("Required parameter entity was null or undefined when calling exportEntityCommand.");
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
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/export/${encodeURIComponent(String(E))}`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    generateEntityQuery(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling generateEntityQuery.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling generateEntityQuery.");
      let R,
        T = this.defaultHeaders;
      R = this.configuration.lookupCredential("apiKeyTenantId"), R && (T = T.set("X-Tenant-Id", R)), R = this.configuration.lookupCredential("apiKeyUserId"), R && (T = T.set("X-User-Id", R));
      let B = u && u.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (T = T.set("Accept", B));
      let y = u && u.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/generate/${encodeURIComponent(String(E))}`, {
        context: y,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
      });
    }
    getEntityQuery(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling getEntityQuery.");
      if (null == E) throw new Error("Required parameter externalCode was null or undefined when calling getEntityQuery.");
      let R,
        T = this.defaultHeaders;
      R = this.configuration.lookupCredential("apiKeyTenantId"), R && (T = T.set("X-Tenant-Id", R)), R = this.configuration.lookupCredential("apiKeyUserId"), R && (T = T.set("X-User-Id", R));
      let B = u && u.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (T = T.set("Accept", B));
      let y = u && u.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/${encodeURIComponent(String(E))}`, {
        context: y,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
      });
    }
    indexEntityCommand(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling indexEntityCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling indexEntityCommand.");
      if (null == h) throw new Error("Required parameter entity was null or undefined when calling indexEntityCommand.");
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
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/index/${encodeURIComponent(String(E))}`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    searchEntityQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling searchEntityQuery.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/search`, null, {
        context: B,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    startEntitiesQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling startEntitiesQuery.");
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/start`, {
        context: B,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    upgradeEntityQuery(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling upgradeEntityQuery.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling upgradeEntityQuery.");
      if (null == h) throw new Error("Required parameter entity was null or undefined when calling upgradeEntityQuery.");
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
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/generate/${encodeURIComponent(String(E))}`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    validateEntityCommand(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter adapter was null or undefined when calling validateEntityCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling validateEntityCommand.");
      if (null == h) throw new Error("Required parameter entity was null or undefined when calling validateEntityCommand.");
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
      return y && (Le = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/adapter/${encodeURIComponent(String(f))}/validate/${encodeURIComponent(String(E))}`, h, {
        context: j,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
  };
  O.ɵfac = function (E) {
    return new (E || O)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, O.ɵprov = a.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
  const L = class {
    constructor(f, E, h) {
      this.httpClient = f, this.basePath = "https://adapter-ris.dev-hospital.emias.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    getImageURLCommand(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter getImageURLCommand was null or undefined when calling getImageURLCommand.");
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
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/risadapter`, f, {
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
