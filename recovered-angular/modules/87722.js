// Extracted from main; webpack module 87722. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    gb: () => b
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
      this.apiKeys = f.apiKeys, this.username = f.username, this.password = f.password, this.accessToken = f.accessToken, this.basePath = f.basePath, this.withCredentials = f.withCredentials, this.encoder = f.encoder, this.credentials = f.credentials ? f.credentials : {};
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
      this.httpClient = f, this.basePath = "https://settings.hospital.solit-clouds.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    createSettingCommand(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter type was null or undefined when calling createSettingCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling createSettingCommand.");
      if (null == h) throw new Error("Required parameter requestBody was null or undefined when calling createSettingCommand.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept([])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (R = R.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/setting/${encodeURIComponent(String(f))}/${encodeURIComponent(String(E))}`, h, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    deleteSettingCommand(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter type was null or undefined when calling deleteSettingCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling deleteSettingCommand.");
      let T = this.defaultHeaders,
        R = u && u.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept([])), void 0 !== R && (T = T.set("Accept", R));
      let B = u && u.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/setting/${encodeURIComponent(String(f))}/${encodeURIComponent(String(E))}`, {
        context: B,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
      });
    }
    getSettingQuery(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter type was null or undefined when calling getSettingQuery.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling getSettingQuery.");
      let T = this.defaultHeaders,
        R = u && u.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (T = T.set("Accept", R));
      let B = u && u.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/setting/${encodeURIComponent(String(f))}/${encodeURIComponent(String(E))}`, {
        context: B,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
      });
    }
    getSettingsQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter type was null or undefined when calling getSettingsQuery.");
      let u = this.defaultHeaders,
        T = x && x.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (u = u.set("Accept", T));
      let R = x && x.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/setting/${encodeURIComponent(String(f))}`, {
        context: R,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getTypesQuery(f = "body", E = !1, h) {
      let x = this.defaultHeaders,
        u = h && h.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (x = x.set("Accept", u));
      let T = h && h.context;
      void 0 === T && (T = new t.qT());
      let R = "json";
      return u && (R = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/types`, {
        context: T,
        responseType: R,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    searchSettingsQuery(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter type was null or undefined when calling searchSettingsQuery.");
      let T = new t.LE({
        encoder: this.encoder
      });
      E && E.forEach(W => {
        T = this.addToHttpParams(T, W, "columns");
      });
      let R = this.defaultHeaders,
        B = u && u.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = u && u.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/setting/${encodeURIComponent(String(f))}/search`, {
        context: y,
        params: T,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: h,
        reportProgress: x
      });
    }
    updateSettingCommand(f, E, h, x = "body", u = !1, T) {
      if (null == f) throw new Error("Required parameter type was null or undefined when calling updateSettingCommand.");
      if (null == E) throw new Error("Required parameter code was null or undefined when calling updateSettingCommand.");
      if (null == h) throw new Error("Required parameter requestBody was null or undefined when calling updateSettingCommand.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept([])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (R = R.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/setting/${encodeURIComponent(String(f))}/${encodeURIComponent(String(E))}`, h, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
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
      this.httpClient = f, this.basePath = "https://settings.hospital.solit-clouds.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    getTerminologiesQuery(f = "body", E = !1, h) {
      let x = this.defaultHeaders,
        u = h && h.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (x = x.set("Accept", u));
      let T = h && h.context;
      void 0 === T && (T = new t.qT());
      let R = "json";
      return u && (R = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/terminology`, {
        context: T,
        responseType: R,
        withCredentials: this.configuration.withCredentials,
        headers: x,
        observe: f,
        reportProgress: E
      });
    }
    getTerminologyMetaQuery(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter code was null or undefined when calling getTerminologyMetaQuery.");
      let u = this.defaultHeaders,
        T = x && x.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (u = u.set("Accept", T));
      let R = x && x.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/terminology/${encodeURIComponent(String(f))}/meta`, {
        context: R,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getTerminologyQuery(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter code was null or undefined when calling getTerminologyQuery.");
      let T = new t.LE({
        encoder: this.encoder
      });
      null != E && (T = this.addToHttpParams(T, E, "query"));
      let R = this.defaultHeaders,
        B = u && u.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = u && u.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/terminology/${encodeURIComponent(String(f))}`, {
        context: y,
        params: T,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: h,
        reportProgress: x
      });
    }
    terminologyQuery(f, E, h = "body", x = !1, u) {
      if (null == f) throw new Error("Required parameter code was null or undefined when calling terminologyQuery.");
      let T = this.defaultHeaders,
        R = u && u.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (T = T.set("Accept", R));
      let B = u && u.context;
      void 0 === B && (B = new t.qT());
      const j = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== j && (T = T.set("Content-Type", j));
      let W = "json";
      return R && (W = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/terminology/${encodeURIComponent(String(f))}`, E, {
        context: B,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: h,
        reportProgress: x
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
