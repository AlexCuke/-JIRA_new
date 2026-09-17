// Extracted from main; webpack module 28315. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    TD: () => N,
    lm: () => b
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
      this.httpClient = v, this.basePath = "https://discharge.test.hospital.solit-clouds.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), E && (this.configuration = E), "string" != typeof this.configuration.basePath && ("string" != typeof f && (f = this.basePath), this.configuration.basePath = f), this.encoder = this.configuration.encoder || new e();
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
    cancelDischargeRequestCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter cancelDischargeRequestCommand was null or undefined when calling cancelDischargeRequestCommand.");
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
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/discharge/cancel`, v, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    dischargeRequestQuery(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter careCaseId was null or undefined when calling dischargeRequestQuery.");
      let x = new t.LE({
        encoder: this.encoder
      });
      null != v && (x = this.addToHttpParams(x, v, "careCaseId"));
      let T,
        u = this.defaultHeaders;
      T = this.configuration.lookupCredential("apiKeyTenantId"), T && (u = u.set("X-Tenant-Id", T)), T = this.configuration.lookupCredential("apiKeyUserId"), T && (u = u.set("X-User-Id", T));
      let R = h && h.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (u = u.set("Accept", R));
      let B = h && h.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/discharge`, {
        context: B,
        params: x,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: f,
        reportProgress: E
      });
    }
    updateDischargeRequestCommand(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter updateDischargeRequestCommand was null or undefined when calling updateDischargeRequestCommand.");
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
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/discharge`, v, {
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
  var N = (() => ((N || (N = {})).CodeEnum = {
    Opened: "OPENED",
    Accepted: "ACCEPTED",
    Resolved: "RESOLVED"
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
