// Extracted from main; webpack module 80331. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => N,
    VK: () => M,
    HN: () => b
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
      this.apiKeys = C.apiKeys, this.username = C.username, this.password = C.password, this.accessToken = C.accessToken, this.basePath = C.basePath, this.withCredentials = C.withCredentials, this.encoder = C.encoder, this.credentials = C.credentials ? C.credentials : {};
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
      this.httpClient = C, this.basePath = "http://telephonogram-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), f && (this.configuration = f), "string" != typeof this.configuration.basePath && ("string" != typeof v && (v = this.basePath), this.configuration.basePath = v), this.encoder = this.configuration.encoder || new e();
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
    getNumberTelephonogramQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getNumberTelephonogramQuery was null or undefined when calling getNumberTelephonogramQuery.");
      let h = this.defaultHeaders,
        x = E && E.httpHeaderAccept;
      void 0 === x && (x = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== x && (h = h.set("Accept", x));
      let u = E && E.context;
      void 0 === u && (u = new t.qT());
      const R = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== R && (h = h.set("Content-Type", R));
      let B = "json";
      return x && (B = x.startsWith("text") ? "text" : this.configuration.isJsonMime(x) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/telephonogram/getNumberTelephonogram`, C, {
        context: u,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    getTelephonogramsQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter getTelephonogramsQuery was null or undefined when calling getTelephonogramsQuery.");
      let h = this.defaultHeaders,
        x = E && E.httpHeaderAccept;
      void 0 === x && (x = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== x && (h = h.set("Accept", x));
      let u = E && E.context;
      void 0 === u && (u = new t.qT());
      const R = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== R && (h = h.set("Content-Type", R));
      let B = "json";
      return x && (B = x.startsWith("text") ? "text" : this.configuration.isJsonMime(x) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/telephonogram/getTelephonograms`, C, {
        context: u,
        responseType: B,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
    saveNumberTelephonogramQuery(C, v = "body", f = !1, E) {
      if (null == C) throw new Error("Required parameter saveNumberTelephonogramQuery was null or undefined when calling saveNumberTelephonogramQuery.");
      let h = this.defaultHeaders,
        x = E && E.httpHeaderAccept;
      void 0 === x && (x = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== x && (h = h.set("Accept", x));
      let u = E && E.context;
      void 0 === u && (u = new t.qT());
      const R = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== R && (h = h.set("Content-Type", R));
      let B = "json";
      return x && (B = x.startsWith("text") ? "text" : this.configuration.isJsonMime(x) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/v1/telephonogram/saveNumberTelephonogram`, C, {
        context: u,
        responseType: B,
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
