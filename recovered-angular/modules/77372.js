// Extracted from main; webpack module 77372. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => u,
    oc: () => A,
    VK: () => M,
    n7: () => I,
    LR: () => L,
    _7: () => h
  });
  var t = i(80529);
  class e {
    encodeKey(Y) {
      return encodeURIComponent(Y);
    }
    encodeValue(Y) {
      return encodeURIComponent(Y);
    }
    decodeKey(Y) {
      return decodeURIComponent(Y);
    }
    decodeValue(Y) {
      return decodeURIComponent(Y);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(Y = {}) {
      this.apiKeys = Y.apiKeys, this.username = Y.username, this.password = Y.password, this.accessToken = Y.accessToken, this.basePath = Y.basePath, this.withCredentials = Y.withCredentials, this.encoder = Y.encoder, this.credentials = Y.credentials ? Y.credentials : {}, this.credentials.TenantIdHeader || (this.credentials.TenantIdHeader = () => {
        if (null != this.apiKeys) return this.apiKeys.TenantIdHeader || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.UserIdHeader || (this.credentials.UserIdHeader = () => {
        if (null != this.apiKeys) return this.apiKeys.UserIdHeader || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(Y) {
      if (0 === Y.length) return;
      const G = Y.find(te => this.isJsonMime(te));
      return void 0 === G ? Y[0] : G;
    }
    selectHeaderAccept(Y) {
      if (0 === Y.length) return;
      const G = Y.find(te => this.isJsonMime(te));
      return void 0 === G ? Y[0] : G;
    }
    isJsonMime(Y) {
      const G = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== Y && (G.test(Y) || "application/json-patch+json" === Y.toLowerCase());
    }
    lookupCredential(Y) {
      const G = this.credentials[Y];
      return "function" == typeof G ? G() : G;
    }
  }
  const T = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    blockBedPlacementCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling blockBedPlacementCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/bed/${encodeURIComponent(String(Y))}/block-placement`, null, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    createBedCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateBed was null or undefined when calling createBedCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/bed`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getBedQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getBedQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/bed/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getBedsQuery(Y, G = "body", te = !1, pe) {
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/beds`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    unblockBedPlacementCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling unblockBedPlacementCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/bed/${encodeURIComponent(String(Y))}/unblock-placement`, null, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateBedCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateBedCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateBed was null or undefined when calling updateBedCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/bed/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  T.ɵfac = function (G) {
    return new (G || T)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, T.ɵprov = a.Yz7({
    token: T,
    factory: T.ɵfac,
    providedIn: "root"
  });
  const R = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createBedFundCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateBedFund was null or undefined when calling createBedFundCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/bedfund`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getBedFundQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getBedFundQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/bedfund/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getBedFundsQuery(Y = "body", G = !1, te) {
      let be,
        pe = this.defaultHeaders;
      be = this.configuration.lookupCredential("TenantIdHeader"), be && (pe = pe.set("X-Tenant-Id", be)), be = this.configuration.lookupCredential("UserIdHeader"), be && (pe = pe.set("X-User-Id", be));
      let le = te && te.httpHeaderAccept;
      void 0 === le && (le = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== le && (pe = pe.set("Accept", le));
      let n = te && te.context;
      void 0 === n && (n = new t.qT());
      let Se = "json";
      return le && (Se = le.startsWith("text") ? "text" : this.configuration.isJsonMime(le) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/bedfunds`, null, {
        context: n,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: pe,
        observe: Y,
        reportProgress: G
      });
    }
    getBedProfilesQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter getBedProfilesQuery was null or undefined when calling getBedProfilesQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/bedprofiles`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    importBedProfiles(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter importBedProfilesInner was null or undefined when calling importBedProfiles.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept([])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/vi/v1/bedfund/profiles`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateBedFundCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateBedFundCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateBedFund was null or undefined when calling updateBedFundCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.put(`${this.configuration.basePath}/api/v1/bedfund/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  let A = R;
  R.ɵfac = function (G) {
    return new (G || R)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, R.ɵprov = a.Yz7({
    token: R,
    factory: R.ɵfac,
    providedIn: "root"
  });
  const B = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createCabinetCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateCabinet was null or undefined when calling createCabinetCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/cabinet`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    deleteCabinetCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling deleteCabinetCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/cabinet/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getCabinetQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getCabinetQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/cabinet/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getCabinetsByUserIdQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getCabinetsByUserIdQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/cabinetsByUserId/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getCabinetsQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter cabinetsQuery was null or undefined when calling getCabinetsQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/cabinets`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateCabinetCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateCabinetCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateCabinet was null or undefined when calling updateCabinetCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/cabinet/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  B.ɵfac = function (G) {
    return new (G || B)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, B.ɵprov = a.Yz7({
    token: B,
    factory: B.ɵfac,
    providedIn: "root"
  });
  const y = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createDepartmentCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateDepartment was null or undefined when calling createDepartmentCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/department`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getDepartmentQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getDepartmentQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/department/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getDepartmentsQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter getDepartmentsQuery was null or undefined when calling getDepartmentsQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/departments`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    importDepartmentCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter importDepartmentCommand was null or undefined when calling importDepartmentCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/department/import`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateDepartmentCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateDepartmentCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateDepartment was null or undefined when calling updateDepartmentCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/department/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  let I = y;
  y.ɵfac = function (G) {
    return new (G || y)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, y.ɵprov = a.Yz7({
    token: y,
    factory: y.ɵfac,
    providedIn: "root"
  });
  const j = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createHeadOrganizationCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateHeadOrganization was null or undefined when calling createHeadOrganizationCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/headorganization`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    deprecateHeadOrganizationCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling deprecateHeadOrganizationCommand.");
      if (null == G) throw new Error("Required parameter deprecateHeadOrganization was null or undefined when calling deprecateHeadOrganizationCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/headorganization/${encodeURIComponent(String(Y))}/deprecate`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
    getHeadOrganizationCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getHeadOrganizationCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/headorganization/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    importHeadOrganizationCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter importHeadOrganizationCommand was null or undefined when calling importHeadOrganizationCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/headorganization/import`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateHeadOrganizationCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateHeadOrganizationCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateHeadOrganization was null or undefined when calling updateHeadOrganizationCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/headorganization/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  j.ɵfac = function (G) {
    return new (G || j)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, j.ɵprov = a.Yz7({
    token: j,
    factory: j.ɵfac,
    providedIn: "root"
  });
  const W = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createMedicalOrganizationCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateMedicalOrganization was null or undefined when calling createMedicalOrganizationCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medorganization`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getMedicalOrganizationQuery(Y = "body", G = !1, te) {
      let be,
        pe = this.defaultHeaders;
      be = this.configuration.lookupCredential("TenantIdHeader"), be && (pe = pe.set("X-Tenant-Id", be)), be = this.configuration.lookupCredential("UserIdHeader"), be && (pe = pe.set("X-User-Id", be));
      let le = te && te.httpHeaderAccept;
      void 0 === le && (le = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== le && (pe = pe.set("Accept", le));
      let n = te && te.context;
      void 0 === n && (n = new t.qT());
      let Se = "json";
      return le && (Se = le.startsWith("text") ? "text" : this.configuration.isJsonMime(le) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/medorganization`, {
        context: n,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: pe,
        observe: Y,
        reportProgress: G
      });
    }
    getMedicalOrganizationTreeQuery(Y = "body", G = !1, te) {
      let be,
        pe = this.defaultHeaders;
      be = this.configuration.lookupCredential("TenantIdHeader"), be && (pe = pe.set("X-Tenant-Id", be)), be = this.configuration.lookupCredential("UserIdHeader"), be && (pe = pe.set("X-User-Id", be));
      let le = te && te.httpHeaderAccept;
      void 0 === le && (le = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== le && (pe = pe.set("Accept", le));
      let n = te && te.context;
      void 0 === n && (n = new t.qT());
      let Se = "json";
      return le && (Se = le.startsWith("text") ? "text" : this.configuration.isJsonMime(le) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/medorganization/tree`, {
        context: n,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: pe,
        observe: Y,
        reportProgress: G
      });
    }
    importMedicalOrganizationCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter importMedicalOrganizationCommand was null or undefined when calling importMedicalOrganizationCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/medorganization/import`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateMedicalOrganizationCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateMedicalOrganizationCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateMedicalOrganization was null or undefined when calling updateMedicalOrganizationCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/medorganization/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  let L = W;
  W.ɵfac = function (G) {
    return new (G || W)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, W.ɵprov = a.Yz7({
    token: W,
    factory: W.ɵfac,
    providedIn: "root"
  });
  const F = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createSubdivisionCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateSubdivision was null or undefined when calling createSubdivisionCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/subdivision`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    deleteMedicalSubdivisionCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling deleteMedicalSubdivisionCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/subdivision/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getMedicalSubdivisionQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getMedicalSubdivisionQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/subdivision/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getMedicalSubdivisionsQuery(Y = "body", G = !1, te) {
      let be,
        pe = this.defaultHeaders;
      be = this.configuration.lookupCredential("TenantIdHeader"), be && (pe = pe.set("X-Tenant-Id", be)), be = this.configuration.lookupCredential("UserIdHeader"), be && (pe = pe.set("X-User-Id", be));
      let le = te && te.httpHeaderAccept;
      void 0 === le && (le = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== le && (pe = pe.set("Accept", le));
      let n = te && te.context;
      void 0 === n && (n = new t.qT());
      let Se = "json";
      return le && (Se = le.startsWith("text") ? "text" : this.configuration.isJsonMime(le) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/subdivisions`, null, {
        context: n,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: pe,
        observe: Y,
        reportProgress: G
      });
    }
    importSubdivisionCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter importSubdivisionCommand was null or undefined when calling importSubdivisionCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/subdivision/import`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateMedicalSubdivisionCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateMedicalSubdivisionCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateSubdivision was null or undefined when calling updateMedicalSubdivisionCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/subdivision/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  F.ɵfac = function (G) {
    return new (G || F)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, F.ɵprov = a.Yz7({
    token: F,
    factory: F.ɵfac,
    providedIn: "root"
  });
  const Le = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    importOrganizationStructureDictionaryCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter importOrganizationStructureDictionaryCommand was null or undefined when calling importOrganizationStructureDictionaryCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept([])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/dictionary/importOrganizationStructure`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
  };
  Le.ɵfac = function (G) {
    return new (G || Le)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, Le.ɵprov = a.Yz7({
    token: Le,
    factory: Le.ɵfac,
    providedIn: "root"
  });
  const ke = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    internalevents(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter internaleventsRequest was null or undefined when calling internalevents.");
      let be = new t.LE({
        encoder: this.encoder
      });
      null != Y && (be = this.addToHttpParams(be, Y, "InternaleventsRequest"));
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = pe && pe.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = pe && pe.context;
      void 0 === qe && (qe = new t.qT());
      let Rt = "json";
      return Se && (Rt = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/events-internal`, {
        context: qe,
        params: be,
        responseType: Rt,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: G,
        reportProgress: te
      });
    }
  };
  ke.ɵfac = function (G) {
    return new (G || ke)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, ke.ɵprov = a.Yz7({
    token: ke,
    factory: ke.ɵfac,
    providedIn: "root"
  });
  const J = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    createStorageCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateStorageCommand was null or undefined when calling createStorageCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/storage`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    deleteStorageCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling deleteStorageCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/storage/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getStorageQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getStorageQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/storage/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getStoragesQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter getStoragesQuery was null or undefined when calling getStoragesQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/storages`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateStorageCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateStorageCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateStorageCommand was null or undefined when calling updateStorageCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/storage/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  J.ɵfac = function (G) {
    return new (G || J)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, J.ɵprov = a.Yz7({
    token: J,
    factory: J.ɵfac,
    providedIn: "root"
  });
  const fe = class {
    constructor(Y, G, te) {
      this.httpClient = Y, this.basePath = "http://orgstructure-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), te && (this.configuration = te), "string" != typeof this.configuration.basePath && ("string" != typeof G && (G = this.basePath), this.configuration.basePath = G), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(Y, G, te) {
      return "object" != typeof G || G instanceof Date ? this.addToHttpParamsRecursive(Y, G, te) : this.addToHttpParamsRecursive(Y, G);
    }
    addToHttpParamsRecursive(Y, G, te) {
      if (null == G) return Y;
      if ("object" == typeof G) {
        if (Array.isArray(G)) G.forEach(pe => Y = this.addToHttpParamsRecursive(Y, pe, te));else if (G instanceof Date) {
          if (null == te) throw Error("key may not be null if value is Date");
          Y = Y.append(te, G.toISOString().substr(0, 10));
        } else Object.keys(G).forEach(pe => Y = this.addToHttpParamsRecursive(Y, G[pe], null != te ? `${te}.${pe}` : pe));
      } else {
        if (null == te) throw Error("key may not be null if value is not object or array");
        Y = Y.append(te, G);
      }
      return Y;
    }
    blockWardPlacementCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling blockWardPlacementCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/ward/${encodeURIComponent(String(Y))}/block-placement`, null, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    createWardCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter createOrUpdateWard was null or undefined when calling createWardCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      const Rt = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Rt && (be = be.set("Content-Type", Rt));
      let We = "json";
      return n && (We = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/ward`, Y, {
        context: Se,
        responseType: We,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    deleteWardCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling deleteWardCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/v1/ward/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getWardQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling getWardQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/ward/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    getWardsAndBedsQuery(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter departmentId was null or undefined when calling getWardsAndBedsQuery.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/wards-and-beds/${encodeURIComponent(String(Y))}`, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    unblockWardPlacementCommand(Y, G = "body", te = !1, pe) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling unblockWardPlacementCommand.");
      let le,
        be = this.defaultHeaders;
      le = this.configuration.lookupCredential("TenantIdHeader"), le && (be = be.set("X-Tenant-Id", le)), le = this.configuration.lookupCredential("UserIdHeader"), le && (be = be.set("X-User-Id", le));
      let n = pe && pe.httpHeaderAccept;
      void 0 === n && (n = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== n && (be = be.set("Accept", n));
      let Se = pe && pe.context;
      void 0 === Se && (Se = new t.qT());
      let qe = "json";
      return n && (qe = n.startsWith("text") ? "text" : this.configuration.isJsonMime(n) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/ward/${encodeURIComponent(String(Y))}/unblock-placement`, null, {
        context: Se,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: be,
        observe: G,
        reportProgress: te
      });
    }
    updateWardCommand(Y, G, te = "body", pe = !1, be) {
      if (null == Y) throw new Error("Required parameter id was null or undefined when calling updateWardCommand.");
      if (null == G) throw new Error("Required parameter createOrUpdateWard was null or undefined when calling updateWardCommand.");
      let n,
        le = this.defaultHeaders;
      n = this.configuration.lookupCredential("TenantIdHeader"), n && (le = le.set("X-Tenant-Id", n)), n = this.configuration.lookupCredential("UserIdHeader"), n && (le = le.set("X-User-Id", n));
      let Se = be && be.httpHeaderAccept;
      void 0 === Se && (Se = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== Se && (le = le.set("Accept", Se));
      let qe = be && be.context;
      void 0 === qe && (qe = new t.qT());
      const We = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== We && (le = le.set("Content-Type", We));
      let Re = "json";
      return Se && (Re = Se.startsWith("text") ? "text" : this.configuration.isJsonMime(Se) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/v1/ward/${encodeURIComponent(String(Y))}`, G, {
        context: qe,
        responseType: Re,
        withCredentials: this.configuration.withCredentials,
        headers: le,
        observe: te,
        reportProgress: pe
      });
    }
  };
  let h = fe;
  fe.ɵfac = function (G) {
    return new (G || fe)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, fe.ɵprov = a.Yz7({
    token: fe,
    factory: fe.ɵfac,
    providedIn: "root"
  });
  const ye = class {
    static forRoot(Y) {
      return {
        ngModule: ye,
        providers: [{
          provide: M,
          useFactory: Y
        }]
      };
    }
    constructor(Y, G) {
      if (Y) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!G) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let u = ye;
  ye.ɵfac = function (G) {
    return new (G || ye)(a.LFG(ye, 12), a.LFG(t.eN, 8));
  }, ye.ɵmod = a.oAB({
    type: ye
  }), ye.ɵinj = a.cJS({});
});
