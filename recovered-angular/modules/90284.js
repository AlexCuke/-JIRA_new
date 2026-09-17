// Extracted from main; webpack module 90284. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => O,
    VK: () => M
  });
  var t = i(80529);
  class e {
    encodeKey(h) {
      return encodeURIComponent(h);
    }
    encodeValue(h) {
      return encodeURIComponent(h);
    }
    decodeKey(h) {
      return decodeURIComponent(h);
    }
    decodeValue(h) {
      return decodeURIComponent(h);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(h = {}) {
      this.apiKeys = h.apiKeys, this.username = h.username, this.password = h.password, this.accessToken = h.accessToken, this.basePath = h.basePath, this.withCredentials = h.withCredentials, this.encoder = h.encoder, this.credentials = h.credentials ? h.credentials : {};
    }
    selectHeaderContentType(h) {
      if (0 === h.length) return;
      const x = h.find(u => this.isJsonMime(u));
      return void 0 === x ? h[0] : x;
    }
    selectHeaderAccept(h) {
      if (0 === h.length) return;
      const x = h.find(u => this.isJsonMime(u));
      return void 0 === x ? h[0] : x;
    }
    isJsonMime(h) {
      const x = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== h && (x.test(h) || "application/json-patch+json" === h.toLowerCase());
    }
    lookupCredential(h) {
      const x = this.credentials[h];
      return "function" == typeof x ? x() : x;
    }
  }
  const L = class {
    constructor(h, x, u) {
      this.httpClient = h, this.basePath = "https://laboratory-tpak.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), u && (this.configuration = u), "string" != typeof this.configuration.basePath && ("string" != typeof x && (x = this.basePath), this.configuration.basePath = x), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(h, x, u) {
      return "object" != typeof x || x instanceof Date ? this.addToHttpParamsRecursive(h, x, u) : this.addToHttpParamsRecursive(h, x);
    }
    addToHttpParamsRecursive(h, x, u) {
      if (null == x) return h;
      if ("object" == typeof x) {
        if (Array.isArray(x)) x.forEach(T => h = this.addToHttpParamsRecursive(h, T, u));else if (x instanceof Date) {
          if (null == u) throw Error("key may not be null if value is Date");
          h = h.append(u, x.toISOString().substr(0, 10));
        } else Object.keys(x).forEach(T => h = this.addToHttpParamsRecursive(h, x[T], null != u ? `${u}.${T}` : T));
      } else {
        if (null == u) throw Error("key may not be null if value is not object or array");
        h = h.append(u, x);
      }
      return h;
    }
    histologyOrderCancel(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter nazId was null or undefined when calling histologyOrderCancel.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/histology/orderCancel/${encodeURIComponent(String(h))}`, null, {
        context: y,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    histologyOrderReSend(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter nazId was null or undefined when calling histologyOrderReSend.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/histology/reSend/${encodeURIComponent(String(h))}`, null, {
        context: y,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    histologyOrderStatus(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter nazId was null or undefined when calling histologyOrderStatus.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      let j = "json";
      return B && (j = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/histology/orderStatus/${encodeURIComponent(String(h))}`, {
        context: y,
        responseType: j,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
  };
  L.ɵfac = function (x) {
    return new (x || L)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, L.ɵprov = a.Yz7({
    token: L,
    factory: L.ɵfac,
    providedIn: "root"
  });
  const C = class {
    constructor(h, x, u) {
      this.httpClient = h, this.basePath = "https://laboratory-tpak.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), u && (this.configuration = u), "string" != typeof this.configuration.basePath && ("string" != typeof x && (x = this.basePath), this.configuration.basePath = x), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(h, x, u) {
      return "object" != typeof x || x instanceof Date ? this.addToHttpParamsRecursive(h, x, u) : this.addToHttpParamsRecursive(h, x);
    }
    addToHttpParamsRecursive(h, x, u) {
      if (null == x) return h;
      if ("object" == typeof x) {
        if (Array.isArray(x)) x.forEach(T => h = this.addToHttpParamsRecursive(h, T, u));else if (x instanceof Date) {
          if (null == u) throw Error("key may not be null if value is Date");
          h = h.append(u, x.toISOString().substr(0, 10));
        } else Object.keys(x).forEach(T => h = this.addToHttpParamsRecursive(h, x[T], null != u ? `${u}.${T}` : T));
      } else {
        if (null == u) throw Error("key may not be null if value is not object or array");
        h = h.append(u, x);
      }
      return h;
    }
    canSave(h, x, u, T, R = "body", B = !1, y) {
      if (null == h) throw new Error("Required parameter liCode was null or undefined when calling canSave.");
      let j = new t.LE({
        encoder: this.encoder
      });
      null != h && (j = this.addToHttpParams(j, h, "liCode")), null != x && (j = this.addToHttpParams(j, x, "locusCode")), null != u && (j = this.addToHttpParams(j, u, "biomatherialCode")), null != T && (j = this.addToHttpParams(j, T, "laboratoryCode"));
      let W = this.defaultHeaders,
        F = y && y.httpHeaderAccept;
      void 0 === F && (F = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== F && (W = W.set("Accept", F));
      let Le = y && y.context;
      void 0 === Le && (Le = new t.qT());
      let ke = "json";
      return F && (ke = F.startsWith("text") ? "text" : this.configuration.isJsonMime(F) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/canSave`, {
        context: Le,
        params: j,
        responseType: ke,
        withCredentials: this.configuration.withCredentials,
        headers: W,
        observe: R,
        reportProgress: B
      });
    }
    dataByEhrCaseId(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter ehrCaseId was null or undefined when calling dataByEhrCaseId.");
      let R = new t.LE({
        encoder: this.encoder
      });
      null != h && (R = this.addToHttpParams(R, h, "ehrCaseId"));
      let B = this.defaultHeaders,
        y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (B = B.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      let W = "json";
      return y && (W = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/dataByEhrCaseId`, {
        context: j,
        params: R,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: B,
        observe: x,
        reportProgress: u
      });
    }
    isOutLab(h, x, u = "body", T = !1, R) {
      if (null == h) throw new Error("Required parameter ehrCaseId was null or undefined when calling isOutLab.");
      if (null == x) throw new Error("Required parameter referralNum was null or undefined when calling isOutLab.");
      let B = new t.LE({
        encoder: this.encoder
      });
      null != h && (B = this.addToHttpParams(B, h, "ehrCaseId")), null != x && (B = this.addToHttpParams(B, x, "referralNum"));
      let y = this.defaultHeaders,
        j = R && R.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = R && R.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/laboratory/isOutLab`, null, {
        context: W,
        params: B,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: u,
        reportProgress: T
      });
    }
    kdlOrderReSend(h, x, u = "body", T = !1, R) {
      if (null == h) throw new Error("Required parameter ehrCaseId was null or undefined when calling kdlOrderReSend.");
      if (null == x) throw new Error("Required parameter referralNum was null or undefined when calling kdlOrderReSend.");
      let B = this.defaultHeaders,
        y = R && R.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (B = B.set("Accept", y));
      let j = R && R.context;
      void 0 === j && (j = new t.qT());
      let W = "json";
      return y && (W = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/kdl/reSend/${encodeURIComponent(String(h))}/${encodeURIComponent(String(x))}`, null, {
        context: j,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: B,
        observe: u,
        reportProgress: T
      });
    }
    labDependence(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter liCode was null or undefined when calling labDependence.");
      let R = new t.LE({
        encoder: this.encoder
      });
      null != h && (R = this.addToHttpParams(R, h, "liCode"));
      let B = this.defaultHeaders,
        y = T && T.httpHeaderAccept;
      void 0 === y && (y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== y && (B = B.set("Accept", y));
      let j = T && T.context;
      void 0 === j && (j = new t.qT());
      let W = "json";
      return y && (W = y.startsWith("text") ? "text" : this.configuration.isJsonMime(y) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/labDependency`, {
        context: j,
        params: R,
        responseType: W,
        withCredentials: this.configuration.withCredentials,
        headers: B,
        observe: x,
        reportProgress: u
      });
    }
    sendDataBeforeSaveRequest(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter beforeSaveLabRequest was null or undefined when calling sendDataBeforeSaveRequest.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept([])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (R = R.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/beforeSaveRequest/sendData`, h, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    updateLabProbeNumber(h, x, u = "body", T = !1, R) {
      if (null == h) throw new Error("Required parameter ehrCaseId was null or undefined when calling updateLabProbeNumber.");
      if (null == x) throw new Error("Required parameter referralNum was null or undefined when calling updateLabProbeNumber.");
      let B = new t.LE({
        encoder: this.encoder
      });
      null != h && (B = this.addToHttpParams(B, h, "ehrCaseId")), null != x && (B = this.addToHttpParams(B, x, "referralNum"));
      let y = this.defaultHeaders,
        j = R && R.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept([])), void 0 !== j && (y = y.set("Accept", j));
      let W = R && R.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/laboratory/updateLabProbeNumber`, null, {
        context: W,
        params: B,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: u,
        reportProgress: T
      });
    }
  };
  C.ɵfac = function (x) {
    return new (x || C)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, C.ɵprov = a.Yz7({
    token: C,
    factory: C.ɵfac,
    providedIn: "root"
  });
  const v = class {
    constructor(h, x, u) {
      this.httpClient = h, this.basePath = "https://laboratory-tpak.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), u && (this.configuration = u), "string" != typeof this.configuration.basePath && ("string" != typeof x && (x = this.basePath), this.configuration.basePath = x), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(h, x, u) {
      return "object" != typeof x || x instanceof Date ? this.addToHttpParamsRecursive(h, x, u) : this.addToHttpParamsRecursive(h, x);
    }
    addToHttpParamsRecursive(h, x, u) {
      if (null == x) return h;
      if ("object" == typeof x) {
        if (Array.isArray(x)) x.forEach(T => h = this.addToHttpParamsRecursive(h, T, u));else if (x instanceof Date) {
          if (null == u) throw Error("key may not be null if value is Date");
          h = h.append(u, x.toISOString().substr(0, 10));
        } else Object.keys(x).forEach(T => h = this.addToHttpParamsRecursive(h, x[T], null != u ? `${u}.${T}` : T));
      } else {
        if (null == u) throw Error("key may not be null if value is not object or array");
        h = h.append(u, x);
      }
      return h;
    }
    addLiResult(h, x, u = "body", T = !1, R) {
      if (null == h) throw new Error("Required parameter ehrId was null or undefined when calling addLiResult.");
      if (null == x) throw new Error("Required parameter nazId was null or undefined when calling addLiResult.");
      let B = new t.LE({
        encoder: this.encoder
      });
      null != h && (B = this.addToHttpParams(B, h, "ehrId")), null != x && (B = this.addToHttpParams(B, x, "nazId"));
      let y = this.defaultHeaders,
        j = R && R.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept([])), void 0 !== j && (y = y.set("Accept", j));
      let W = R && R.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/addLiResult`, null, {
        context: W,
        params: B,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: u,
        reportProgress: T
      });
    }
    findLiDuplicate(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter findLiDuplicate was null or undefined when calling findLiDuplicate.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (R = R.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/findLiDuplicate`, h, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    isActualSynchronizeCS(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter liSynchronize was null or undefined when calling isActualSynchronizeCS.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (R = R.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/isActualSynchronizeCS`, h, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
    liSynchronize(h, x = "body", u = !1, T) {
      if (null == h) throw new Error("Required parameter liSynchronize was null or undefined when calling liSynchronize.");
      let R = this.defaultHeaders,
        B = T && T.httpHeaderAccept;
      void 0 === B && (B = this.configuration.selectHeaderAccept([])), void 0 !== B && (R = R.set("Accept", B));
      let y = T && T.context;
      void 0 === y && (y = new t.qT());
      const W = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== W && (R = R.set("Content-Type", W));
      let F = "json";
      return B && (F = B.startsWith("text") ? "text" : this.configuration.isJsonMime(B) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/liSynchronizeCS`, h, {
        context: y,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: R,
        observe: x,
        reportProgress: u
      });
    }
  };
  v.ɵfac = function (x) {
    return new (x || v)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, v.ɵprov = a.Yz7({
    token: v,
    factory: v.ɵfac,
    providedIn: "root"
  });
  const f = class {
    static forRoot(h) {
      return {
        ngModule: f,
        providers: [{
          provide: M,
          useFactory: h
        }]
      };
    }
    constructor(h, x) {
      if (h) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!x) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let O = f;
  f.ɵfac = function (x) {
    return new (x || f)(a.LFG(f, 12), a.LFG(t.eN, 8));
  }, f.ɵmod = a.oAB({
    type: f
  }), f.ɵinj = a.cJS({});
});
