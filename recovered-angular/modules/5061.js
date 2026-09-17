// Extracted from main; webpack module 5061. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    gy: () => b,
    au: () => L,
    VK: () => M,
    OX: () => A,
    iW: () => N,
    lQ: () => I
  });
  var t = i(80529);
  class e {
    encodeKey(u) {
      return encodeURIComponent(u);
    }
    encodeValue(u) {
      return encodeURIComponent(u);
    }
    decodeKey(u) {
      return decodeURIComponent(u);
    }
    decodeValue(u) {
      return decodeURIComponent(u);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(u = {}) {
      this.apiKeys = u.apiKeys, this.username = u.username, this.password = u.password, this.accessToken = u.accessToken, this.basePath = u.basePath, this.withCredentials = u.withCredentials, this.encoder = u.encoder, this.credentials = u.credentials ? u.credentials : {};
    }
    selectHeaderContentType(u) {
      if (0 === u.length) return;
      const T = u.find(R => this.isJsonMime(R));
      return void 0 === T ? u[0] : T;
    }
    selectHeaderAccept(u) {
      if (0 === u.length) return;
      const T = u.find(R => this.isJsonMime(R));
      return void 0 === T ? u[0] : T;
    }
    isJsonMime(u) {
      const T = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== u && (T.test(u) || "application/json-patch+json" === u.toLowerCase());
    }
    lookupCredential(u) {
      const T = this.credentials[u];
      return "function" == typeof T ? T() : T;
    }
  }
  const C = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://warehouse-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    cancelAccountingDocumentsByDispenseId(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter id was null or undefined when calling cancelAccountingDocumentsByDispenseId.");
      let y = this.defaultHeaders,
        j = B && B.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = B && B.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/dispense/${encodeURIComponent(String(u))}/accountingDocument/cancelWriteOff`, null, {
        context: W,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    createAccountingDocumentByDispenseId(u, T = "body", R = !1, B) {
      let y = this.defaultHeaders,
        j = B && B.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = B && B.context;
      void 0 === W && (W = new t.qT());
      const Le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Le && (y = y.set("Content-Type", Le));
      let ke = "json";
      return j && (ke = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/accountingDocument`, u, {
        context: W,
        responseType: ke,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    getAccountingDocumentByDispenseId(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter id was null or undefined when calling getAccountingDocumentByDispenseId.");
      let y = this.defaultHeaders,
        j = B && B.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = B && B.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/dispense/${encodeURIComponent(String(u))}/accountingDocument`, {
        context: W,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
  };
  let b = C;
  C.ɵfac = function (T) {
    return new (T || C)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, C.ɵprov = a.Yz7({
    token: C,
    factory: C.ɵfac,
    providedIn: "root"
  });
  const v = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://warehouse-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    getMedicamentInfo(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter assignmentCompositionUid was null or undefined when calling getMedicamentInfo.");
      let y = new t.LE({
        encoder: this.encoder
      });
      null != u && (y = this.addToHttpParams(y, u, "assignmentCompositionUid"));
      let j = this.defaultHeaders,
        W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (j = j.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      let Le = "json";
      return W && (Le = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/medicament`, {
        context: F,
        params: y,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: j,
        observe: T,
        reportProgress: R
      });
    }
  };
  let A = v;
  v.ɵfac = function (T) {
    return new (T || v)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, v.ɵprov = a.Yz7({
    token: v,
    factory: v.ɵfac,
    providedIn: "root"
  });
  const f = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://warehouse-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    cancelReserve(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter id was null or undefined when calling cancelReserve.");
      let y = this.defaultHeaders,
        j = B && B.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = B && B.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/reserve/${encodeURIComponent(String(u))}`, {
        context: W,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    getReserve(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter id was null or undefined when calling getReserve.");
      let y = this.defaultHeaders,
        j = B && B.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = B && B.context;
      void 0 === W && (W = new t.qT());
      let F = "json";
      return j && (F = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/reserve/${encodeURIComponent(String(u))}`, {
        context: W,
        responseType: F,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
    getReservesByDispenseId(u, T, R, B = "body", y = !1, j) {
      let W = new t.LE({
        encoder: this.encoder
      });
      null != u && (W = this.addToHttpParams(W, u, "dispenseId")), null != T && (W = this.addToHttpParams(W, T, "assignmentCompositionUid")), null != R && (W = this.addToHttpParams(W, R, "reservationDate"));
      let F = this.defaultHeaders,
        Le = j && j.httpHeaderAccept;
      void 0 === Le && (Le = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Le && (F = F.set("Accept", Le));
      let ke = j && j.context;
      void 0 === ke && (ke = new t.qT());
      let J = "json";
      return Le && (J = Le.startsWith("text") ? "text" : this.configuration.isJsonMime(Le) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/reserve`, {
        context: ke,
        params: W,
        responseType: J,
        withCredentials: this.configuration.withCredentials,
        headers: F,
        observe: B,
        reportProgress: y
      });
    }
    getReservesByDispenseIds(u, T = "body", R = !1, B) {
      if (null == u) throw new Error("Required parameter dispenseIds was null or undefined when calling getReservesByDispenseIds.");
      let y = new t.LE({
        encoder: this.encoder
      });
      u && u.forEach(ke => {
        y = this.addToHttpParams(y, ke, "dispenseIds");
      });
      let j = this.defaultHeaders,
        W = B && B.httpHeaderAccept;
      void 0 === W && (W = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== W && (j = j.set("Accept", W));
      let F = B && B.context;
      void 0 === F && (F = new t.qT());
      let Le = "json";
      return W && (Le = W.startsWith("text") ? "text" : this.configuration.isJsonMime(W) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/reserve/batch`, {
        context: F,
        params: y,
        responseType: Le,
        withCredentials: this.configuration.withCredentials,
        headers: j,
        observe: T,
        reportProgress: R
      });
    }
    reservePharmaUnit(u, T = "body", R = !1, B) {
      let y = this.defaultHeaders,
        j = B && B.httpHeaderAccept;
      void 0 === j && (j = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== j && (y = y.set("Accept", j));
      let W = B && B.context;
      void 0 === W && (W = new t.qT());
      const Le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Le && (y = y.set("Content-Type", Le));
      let ke = "json";
      return j && (ke = j.startsWith("text") ? "text" : this.configuration.isJsonMime(j) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/reserve`, u, {
        context: W,
        responseType: ke,
        withCredentials: this.configuration.withCredentials,
        headers: y,
        observe: T,
        reportProgress: R
      });
    }
  };
  let N = f;
  f.ɵfac = function (T) {
    return new (T || f)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, f.ɵprov = a.Yz7({
    token: f,
    factory: f.ɵfac,
    providedIn: "root"
  });
  const E = class {
    constructor(u, T, R) {
      this.httpClient = u, this.basePath = "http://warehouse-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), R && (this.configuration = R), "string" != typeof this.configuration.basePath && ("string" != typeof T && (T = this.basePath), this.configuration.basePath = T), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(u, T, R) {
      return "object" != typeof T || T instanceof Date ? this.addToHttpParamsRecursive(u, T, R) : this.addToHttpParamsRecursive(u, T);
    }
    addToHttpParamsRecursive(u, T, R) {
      if (null == T) return u;
      if ("object" == typeof T) {
        if (Array.isArray(T)) T.forEach(B => u = this.addToHttpParamsRecursive(u, B, R));else if (T instanceof Date) {
          if (null == R) throw Error("key may not be null if value is Date");
          u = u.append(R, T.toISOString().substr(0, 10));
        } else Object.keys(T).forEach(B => u = this.addToHttpParamsRecursive(u, T[B], null != R ? `${R}.${B}` : B));
      } else {
        if (null == R) throw Error("key may not be null if value is not object or array");
        u = u.append(R, T);
      }
      return u;
    }
    getWarehouse(u, T, R = "body", B = !1, y) {
      if (null == u) throw new Error("Required parameter deptId was null or undefined when calling getWarehouse.");
      if (null == T) throw new Error("Required parameter postId was null or undefined when calling getWarehouse.");
      let j = new t.LE({
        encoder: this.encoder
      });
      null != u && (j = this.addToHttpParams(j, u, "deptId")), null != T && (j = this.addToHttpParams(j, T, "postId"));
      let W = this.defaultHeaders,
        F = y && y.httpHeaderAccept;
      void 0 === F && (F = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== F && (W = W.set("Accept", F));
      let Le = y && y.context;
      void 0 === Le && (Le = new t.qT());
      let ke = "json";
      return F && (ke = F.startsWith("text") ? "text" : this.configuration.isJsonMime(F) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/warehouse`, {
        context: Le,
        params: j,
        responseType: ke,
        withCredentials: this.configuration.withCredentials,
        headers: W,
        observe: R,
        reportProgress: B
      });
    }
    getWarehouseBalance(u, T, R, B, y, j, W, F, Le, ke = "body", J = !1, fe) {
      if (null == u) throw new Error("Required parameter warehouseId was null or undefined when calling getWarehouseBalance.");
      if (null == T) throw new Error("Required parameter dt was null or undefined when calling getWarehouseBalance.");
      if (null == R) throw new Error("Required parameter ehrCaseId was null or undefined when calling getWarehouseBalance.");
      if (null == B) throw new Error("Required parameter medStarDt was null or undefined when calling getWarehouseBalance.");
      if (null == y) throw new Error("Required parameter medNamesId was null or undefined when calling getWarehouseBalance.");
      if (null == j) throw new Error("Required parameter showAlternatives was null or undefined when calling getWarehouseBalance.");
      let ye = new t.LE({
        encoder: this.encoder
      });
      null != R && (ye = this.addToHttpParams(ye, R, "ehrCaseId")), null != B && (ye = this.addToHttpParams(ye, B, "medStarDt")), null != y && (ye = this.addToHttpParams(ye, y, "medNamesId")), null != j && (ye = this.addToHttpParams(ye, j, "showAlternatives")), null != W && (ye = this.addToHttpParams(ye, W, "substanceUnitId")), null != F && (ye = this.addToHttpParams(ye, F, "concentrationUnitId")), null != Le && (ye = this.addToHttpParams(ye, Le, "isCompound"));
      let ae = this.defaultHeaders,
        Y = fe && fe.httpHeaderAccept;
      void 0 === Y && (Y = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Y && (ae = ae.set("Accept", Y));
      let G = fe && fe.context;
      void 0 === G && (G = new t.qT());
      let te = "json";
      return Y && (te = Y.startsWith("text") ? "text" : this.configuration.isJsonMime(Y) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/warehouse/${encodeURIComponent(String(u))}/balance/${encodeURIComponent(String(T))}`, {
        context: G,
        params: ye,
        responseType: te,
        withCredentials: this.configuration.withCredentials,
        headers: ae,
        observe: ke,
        reportProgress: J
      });
    }
  };
  let I = E;
  E.ɵfac = function (T) {
    return new (T || E)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, E.ɵprov = a.Yz7({
    token: E,
    factory: E.ɵfac,
    providedIn: "root"
  });
  const h = class {
    static forRoot(u) {
      return {
        ngModule: h,
        providers: [{
          provide: M,
          useFactory: u
        }]
      };
    }
    constructor(u, T) {
      if (u) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!T) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let L = h;
  h.ɵfac = function (T) {
    return new (T || h)(a.LFG(h, 12), a.LFG(t.eN, 8));
  }, h.ɵmod = a.oAB({
    type: h
  }), h.ɵinj = a.cJS({});
});
