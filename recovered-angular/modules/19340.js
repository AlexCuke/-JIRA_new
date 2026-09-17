// Extracted from main; webpack module 19340. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    GP: () => b,
    _2: () => N
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
      this.apiKeys = v.apiKeys, this.username = v.username, this.password = v.password, this.accessToken = v.accessToken, this.basePath = v.basePath, this.withCredentials = v.withCredentials, this.encoder = v.encoder, this.credentials = v.credentials ? v.credentials : {};
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
      this.httpClient = v, this.basePath = "http://localhost", this.defaultHeaders = new t.WM(), this.configuration = new M(), E && (this.configuration = E), "string" != typeof this.configuration.basePath && ("string" != typeof f && (f = this.basePath), this.configuration.basePath = f), this.encoder = this.configuration.encoder || new e();
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
    getEmployees(v, f = "body", E = !1, h) {
      if (null == v) throw new Error("Required parameter employeesQuery was null or undefined when calling getEmployees.");
      let x = this.defaultHeaders,
        u = h && h.httpHeaderAccept;
      void 0 === u && (u = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== u && (x = x.set("Accept", u));
      let T = h && h.context;
      void 0 === T && (T = new t.qT());
      const B = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== B && (x = x.set("Content-Type", B));
      let y = "json";
      return u && (y = u.startsWith("text") ? "text" : this.configuration.isJsonMime(u) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/employees`, v, {
        context: T,
        responseType: y,
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
    Allactive: "ALLACTIVE",
    Activeusers: "ACTIVEUSERS",
    Nouser: "NOUSER",
    Blockeduser: "BLOCKEDUSER",
    Dismissed: "DISMISSED"
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
