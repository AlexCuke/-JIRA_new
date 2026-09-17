// Extracted from main; webpack module 56539. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    G1: () => A
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
      this.httpClient = f, this.basePath = "http://qr-tpak.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    createQR(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter qrCreateRequest was null or undefined when calling createQR.");
      let u = this.defaultHeaders,
        T = x && x.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (u = u.set("Accept", T));
      let R = x && x.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (u = u.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/qr`, f, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getQrById(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter id was null or undefined when calling getQrById.");
      let u = this.defaultHeaders,
        T = x && x.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (u = u.set("Accept", T));
      let R = x && x.context;
      void 0 === R && (R = new t.qT());
      let B = "json";
      return T && (B = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/qr/${encodeURIComponent(String(f))}`, {
        context: R,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
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
      this.httpClient = f, this.basePath = "http://qr-tpak.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), h && (this.configuration = h), "string" != typeof this.configuration.basePath && ("string" != typeof E && (E = this.basePath), this.configuration.basePath = E), this.encoder = this.configuration.encoder || new e();
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
    generateUid(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter uidGenerateRequest was null or undefined when calling generateUid.");
      let u = this.defaultHeaders,
        T = x && x.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (u = u.set("Accept", T));
      let R = x && x.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (u = u.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/createUid`, f, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
    getUid(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter uid was null or undefined when calling getUid.");
      let u = new t.LE({
        encoder: this.encoder
      });
      null != f && (u = this.addToHttpParams(u, f, "uid"));
      let T = this.defaultHeaders,
        R = x && x.httpHeaderAccept;
      void 0 === R && (R = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== R && (T = T.set("Accept", R));
      let B = x && x.context;
      void 0 === B && (B = new t.qT());
      let y = "json";
      return R && (y = R.startsWith("text") ? "text" : this.configuration.isJsonMime(R) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/statusUid`, {
        context: B,
        params: u,
        responseType: y,
        withCredentials: this.configuration.withCredentials,
        headers: T,
        observe: E,
        reportProgress: h
      });
    }
    updateUid(f, E = "body", h = !1, x) {
      if (null == f) throw new Error("Required parameter uidUpdateRequest was null or undefined when calling updateUid.");
      let u = this.defaultHeaders,
        T = x && x.httpHeaderAccept;
      void 0 === T && (T = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== T && (u = u.set("Accept", T));
      let R = x && x.context;
      void 0 === R && (R = new t.qT());
      const y = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== y && (u = u.set("Content-Type", y));
      let j = "json";
      return T && (j = T.startsWith("text") ? "text" : this.configuration.isJsonMime(T) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/uid`, f, {
        context: R,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: u,
        observe: E,
        reportProgress: h
      });
    }
  };
  let A = L;
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
