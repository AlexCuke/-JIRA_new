// Extracted from main; webpack module 72468. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => h,
    VK: () => M,
    gP: () => b
  });
  var t = i(80529);
  class e {
    encodeKey(J) {
      return encodeURIComponent(J);
    }
    encodeValue(J) {
      return encodeURIComponent(J);
    }
    decodeKey(J) {
      return decodeURIComponent(J);
    }
    decodeValue(J) {
      return decodeURIComponent(J);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(J = {}) {
      this.apiKeys = J.apiKeys, this.username = J.username, this.password = J.password, this.accessToken = J.accessToken, this.basePath = J.basePath, this.withCredentials = J.withCredentials, this.encoder = J.encoder, this.credentials = J.credentials ? J.credentials : {}, this.credentials.apiKeyTenantId || (this.credentials.apiKeyTenantId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyTenantId || this.apiKeys["X-Tenant-Id"];
      }), this.credentials.apiKeyUserId || (this.credentials.apiKeyUserId = () => {
        if (null != this.apiKeys) return this.apiKeys.apiKeyUserId || this.apiKeys["X-User-Id"];
      });
    }
    selectHeaderContentType(J) {
      if (0 === J.length) return;
      const fe = J.find(ye => this.isJsonMime(ye));
      return void 0 === fe ? J[0] : fe;
    }
    selectHeaderAccept(J) {
      if (0 === J.length) return;
      const fe = J.find(ye => this.isJsonMime(ye));
      return void 0 === fe ? J[0] : fe;
    }
    isJsonMime(J) {
      const fe = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== J && (fe.test(J) || "application/json-patch+json" === J.toLowerCase());
    }
    lookupCredential(J) {
      const fe = this.credentials[J];
      return "function" == typeof fe ? fe() : fe;
    }
  }
  const x = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    activateConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter activateConsultationCommand was null or undefined when calling activateConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/activate`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    cancelConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter cancelConsultationCommand was null or undefined when calling cancelConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/cancel`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    completeConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter completeConsultationCommand was null or undefined when calling completeConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/complete`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    createConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter create was null or undefined when calling createConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    deactivateConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter deactivateConsultationCommand was null or undefined when calling deactivateConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/deactivate`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    deleteConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter deleteConsultationCommand was null or undefined when calling deleteConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/delete`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    findDuplicates(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter checkDuplicate was null or undefined when calling findDuplicates.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/findDuplicates`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getConsultationStatusQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter compositionUid was null or undefined when calling getConsultationStatusQuery.");
      let Y = new t.LE({
        encoder: this.encoder
      });
      null != J && (Y = this.addToHttpParams(Y, J, "compositionUid"));
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = ae && ae.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = ae && ae.context;
      void 0 === be && (be = new t.qT());
      let le = "json";
      return pe && (le = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/v1/consultation/findByCompositionUid`, {
        context: be,
        params: Y,
        responseType: le,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: fe,
        reportProgress: ye
      });
    }
    getConsultationsBetweenQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter getAssignmentsBetweenQuery was null or undefined when calling getConsultationsBetweenQuery.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/findBetween`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getConsultationsQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter getConsultationsQuery was null or undefined when calling getConsultationsQuery.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/find`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    markConsultationAsCancellingCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter markConsultationAsCancellingCommand was null or undefined when calling markConsultationAsCancellingCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/markAssignmentAsCancelling`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    markConsultationAsEditingCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter markConsultationAsEditingCommand was null or undefined when calling markConsultationAsEditingCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/markAssignmentAsEditing`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    markPatientNotified(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter markPatientNotifiedCommand was null or undefined when calling markPatientNotified.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/markPatientNotified`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    planConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter plan was null or undefined when calling planConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/plan`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    rollbackCancelConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter rollbackCancelConsultationCommand was null or undefined when calling rollbackCancelConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/rollbackCancel`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    rollbackCompleteConsultationCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter rollbackCompleteConsultationCommand was null or undefined when calling rollbackCompleteConsultationCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/rollbackComplete`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    routeEhrdbConsultationAssignmentEvent(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter ehrdbConsultationDocumentPayload was null or undefined when calling routeEhrdbConsultationAssignmentEvent.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/routeEhrdbConsultationAssignmentEvent`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    unMarkConsultationCancellingCommand(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter unMarkConsultationCancellingCommand was null or undefined when calling unMarkConsultationCancellingCommand.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/unmarkAssignmentAsCancelling`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
  };
  let b = x;
  x.ɵfac = function (fe) {
    return new (fe || x)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, x.ɵprov = a.Yz7({
    token: x,
    factory: x.ɵfac,
    providedIn: "root"
  });
  const u = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    consultationDomainEvent(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter abstractConsultationEventConsultationActivatedEventConsultationAssignedEventConsultationCancelledEventConsultationCancellingEventConsultationCompletedEventConsultationCreatedEventConsultationDeletedEventConsultationEditingEventConsultationNotCompletedEvent was null or undefined when calling consultationDomainEvent.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept([])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/v1/consultation/domain-events/consultationDomainEvent`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
  };
  u.ɵfac = function (fe) {
    return new (fe || u)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, u.ɵprov = a.Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "root"
  });
  const T = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    getDictionary(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter dictionaryName was null or undefined when calling getDictionary.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/dictionary/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
  };
  T.ɵfac = function (fe) {
    return new (fe || T)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, T.ɵprov = a.Yz7({
    token: T,
    factory: T.ɵfac,
    providedIn: "root"
  });
  const R = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    blockEmployee(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling blockEmployee.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}/block`, null, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    checkWorkplaceFinishDate(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling checkWorkplaceFinishDate.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}/check-workplace-finish-date`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    createEmployee(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createEmployeeCommand was null or undefined when calling createEmployee.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employee`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getEmployee(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling getEmployee.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getEmployees(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeesQuery was null or undefined when calling getEmployees.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employees`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getEmployeesWorkplaces(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeesWorkplacesQuery was null or undefined when calling getEmployeesWorkplaces.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employeesWorkplaces`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    patchEmployee(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling patchEmployee.");
      if (null == fe) throw new Error("Required parameter updateEmployeeCommand was null or undefined when calling patchEmployee.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
  };
  R.ɵfac = function (fe) {
    return new (fe || R)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, R.ɵprov = a.Yz7({
    token: R,
    factory: R.ɵfac,
    providedIn: "root"
  });
  const B = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    internalevents(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter internaleventsRequest was null or undefined when calling internalevents.");
      let Y = new t.LE({
        encoder: this.encoder
      });
      null != J && (Y = this.addToHttpParams(Y, J, "InternaleventsRequest"));
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = ae && ae.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = ae && ae.context;
      void 0 === be && (be = new t.qT());
      let le = "json";
      return pe && (le = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/events-internal`, {
        context: be,
        params: Y,
        responseType: le,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: fe,
        reportProgress: ye
      });
    }
  };
  B.ɵfac = function (fe) {
    return new (fe || B)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, B.ɵprov = a.Yz7({
    token: B,
    factory: B.ɵfac,
    providedIn: "root"
  });
  const y = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    createProfile(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createOrUpdateProfile was null or undefined when calling createProfile.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profile`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    deleteProfile(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling deleteProfile.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getProfile(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling getProfile.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getProfiles(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter profilesQuery was null or undefined when calling getProfiles.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profiles`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    profileProfileIdRightRightIdDelete(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRightRightIdDelete.");
      if (null == fe) throw new Error("Required parameter rightId was null or undefined when calling profileProfileIdRightRightIdDelete.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/right/${encodeURIComponent(String(fe))}`, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRightRightIdPatch(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRightRightIdPatch.");
      if (null == fe) throw new Error("Required parameter rightId was null or undefined when calling profileProfileIdRightRightIdPatch.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/right/${encodeURIComponent(String(fe))}`, ye, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRightRightIdPost(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRightRightIdPost.");
      if (null == fe) throw new Error("Required parameter rightId was null or undefined when calling profileProfileIdRightRightIdPost.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/right/${encodeURIComponent(String(fe))}`, ye, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRoleRoleIdDelete(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRoleRoleIdDelete.");
      if (null == fe) throw new Error("Required parameter roleId was null or undefined when calling profileProfileIdRoleRoleIdDelete.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/role/${encodeURIComponent(String(fe))}`, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRoleRoleIdPost(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRoleRoleIdPost.");
      if (null == fe) throw new Error("Required parameter roleId was null or undefined when calling profileProfileIdRoleRoleIdPost.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/role/${encodeURIComponent(String(fe))}`, ye, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    updateProfile(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling updateProfile.");
      if (null == fe) throw new Error("Required parameter createOrUpdateProfile was null or undefined when calling updateProfile.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
  };
  y.ɵfac = function (fe) {
    return new (fe || y)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, y.ɵprov = a.Yz7({
    token: y,
    factory: y.ɵfac,
    providedIn: "root"
  });
  const j = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    getRights(J = "body", fe = !1, ye) {
      let Y,
        ae = this.defaultHeaders;
      Y = this.configuration.lookupCredential("apiKeyTenantId"), Y && (ae = ae.set("X-Tenant-Id", Y)), Y = this.configuration.lookupCredential("apiKeyUserId"), Y && (ae = ae.set("X-User-Id", Y));
      let G = ye && ye.httpHeaderAccept;
      void 0 === G && (G = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== G && (ae = ae.set("Accept", G));
      let te = ye && ye.context;
      void 0 === te && (te = new t.qT());
      let pe = "json";
      return G && (pe = G.startsWith("text") ? "text" : this.configuration.isJsonMime(G) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/rights`, {
        context: te,
        responseType: pe,
        withCredentials: this.configuration.withCredentials,
        headers: ae,
        observe: J,
        reportProgress: fe
      });
    }
  };
  j.ɵfac = function (fe) {
    return new (fe || j)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, j.ɵprov = a.Yz7({
    token: j,
    factory: j.ɵfac,
    providedIn: "root"
  });
  const W = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    addProfileToRole(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling addProfileToRole.");
      if (null == fe) throw new Error("Required parameter addProfilesToRoleCommand was null or undefined when calling addProfileToRole.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/profiles`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    addRight(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling addRight.");
      if (null == fe) throw new Error("Required parameter addRightsToRoleCommand was null or undefined when calling addRight.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/rights`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    createRole(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createOrUpdateRoleCommand was null or undefined when calling createRole.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/role`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    deleteProfileFromRole(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling deleteProfileFromRole.");
      if (null == fe) throw new Error("Required parameter deleteProfilesFromRoleCommand was null or undefined when calling deleteProfileFromRole.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/profiles`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteRight(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling deleteRight.");
      if (null == fe) throw new Error("Required parameter deleteRightsFromRoleCommand was null or undefined when calling deleteRight.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/rights`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteRole(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling deleteRole.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getRoles(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter rolesQuery was null or undefined when calling getRoles.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/roles`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    roleQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling roleQuery.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    updateRole(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling updateRole.");
      if (null == fe) throw new Error("Required parameter createOrUpdateRoleCommand was null or undefined when calling updateRole.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
  };
  W.ɵfac = function (fe) {
    return new (fe || W)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, W.ɵprov = a.Yz7({
    token: W,
    factory: W.ɵfac,
    providedIn: "root"
  });
  const F = class {
    constructor(J, fe, ye) {
      this.httpClient = J, this.basePath = "http://consultation-dev.m15.dzm", this.defaultHeaders = new t.WM(), this.configuration = new M(), ye && (this.configuration = ye), "string" != typeof this.configuration.basePath && ("string" != typeof fe && (fe = this.basePath), this.configuration.basePath = fe), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(J, fe, ye) {
      return "object" != typeof fe || fe instanceof Date ? this.addToHttpParamsRecursive(J, fe, ye) : this.addToHttpParamsRecursive(J, fe);
    }
    addToHttpParamsRecursive(J, fe, ye) {
      if (null == fe) return J;
      if ("object" == typeof fe) {
        if (Array.isArray(fe)) fe.forEach(ae => J = this.addToHttpParamsRecursive(J, ae, ye));else if (fe instanceof Date) {
          if (null == ye) throw Error("key may not be null if value is Date");
          J = J.append(ye, fe.toISOString().substr(0, 10));
        } else Object.keys(fe).forEach(ae => J = this.addToHttpParamsRecursive(J, fe[ae], null != ye ? `${ye}.${ae}` : ae));
      } else {
        if (null == ye) throw Error("key may not be null if value is not object or array");
        J = J.append(ye, fe);
      }
      return J;
    }
    addCustomRightsToUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling addCustomRightsToUser.");
      if (null == fe) throw new Error("Required parameter addCustomRightToUserCommand was null or undefined when calling addCustomRightsToUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/customRights`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    addCustomRolesToUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling addCustomRolesToUser.");
      if (null == fe) throw new Error("Required parameter addCustomRoleToUserCommand was null or undefined when calling addCustomRolesToUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/customRoles`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    addProfileToRole(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling addProfileToRole.");
      if (null == fe) throw new Error("Required parameter addProfilesToRoleCommand was null or undefined when calling addProfileToRole.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/profiles`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    addProfilesToUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling addProfilesToUser.");
      if (null == fe) throw new Error("Required parameter addProfilesToUserCommand was null or undefined when calling addProfilesToUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/profiles`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    addRight(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling addRight.");
      if (null == fe) throw new Error("Required parameter addRightsToRoleCommand was null or undefined when calling addRight.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/rights`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    blockEmployee(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling blockEmployee.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}/block`, null, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    blockUser(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling blockUser.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/block`, null, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    changeUserPassCommand(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling changeUserPassCommand.");
      if (null == fe) throw new Error("Required parameter changeUserPassCommand was null or undefined when calling changeUserPassCommand.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept([])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/changePassword`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    checkWorkplaceFinishDate(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling checkWorkplaceFinishDate.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}/check-workplace-finish-date`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    createEmployee(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createEmployeeCommand was null or undefined when calling createEmployee.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employee`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    createProfile(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createOrUpdateProfile was null or undefined when calling createProfile.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profile`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    createRole(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createOrUpdateRoleCommand was null or undefined when calling createRole.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/role`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    createUser(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter createOrUpdateUserCommand was null or undefined when calling createUser.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    deleteCustomRightsFromUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling deleteCustomRightsFromUser.");
      if (null == fe) throw new Error("Required parameter deleteCustomRightToUserCommand was null or undefined when calling deleteCustomRightsFromUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/customRights`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteCustomRolesFromUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling deleteCustomRolesFromUser.");
      if (null == fe) throw new Error("Required parameter deleteCustomRoleToUserCommand was null or undefined when calling deleteCustomRolesFromUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/customRoles`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteProfile(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling deleteProfile.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    deleteProfileFromRole(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling deleteProfileFromRole.");
      if (null == fe) throw new Error("Required parameter deleteProfilesFromRoleCommand was null or undefined when calling deleteProfileFromRole.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/profiles`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteProfilesFromUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling deleteProfilesFromUser.");
      if (null == fe) throw new Error("Required parameter deleteProfilesToUserCommand was null or undefined when calling deleteProfilesFromUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/profiles`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteRight(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling deleteRight.");
      if (null == fe) throw new Error("Required parameter deleteRightsFromRoleCommand was null or undefined when calling deleteRight.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}/rights`, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    deleteRole(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling deleteRole.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getDictionary(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter dictionaryName was null or undefined when calling getDictionary.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/dictionary/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getEmployee(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling getEmployee.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getEmployees(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeesQuery was null or undefined when calling getEmployees.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employees`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getEmployeesWorkplaces(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter employeesWorkplacesQuery was null or undefined when calling getEmployeesWorkplaces.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/employeesWorkplaces`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getProfile(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling getProfile.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getProfiles(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter profilesQuery was null or undefined when calling getProfiles.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profiles`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getRights(J = "body", fe = !1, ye) {
      let Y,
        ae = this.defaultHeaders;
      Y = this.configuration.lookupCredential("apiKeyTenantId"), Y && (ae = ae.set("X-Tenant-Id", Y)), Y = this.configuration.lookupCredential("apiKeyUserId"), Y && (ae = ae.set("X-User-Id", Y));
      let G = ye && ye.httpHeaderAccept;
      void 0 === G && (G = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== G && (ae = ae.set("Accept", G));
      let te = ye && ye.context;
      void 0 === te && (te = new t.qT());
      let pe = "json";
      return G && (pe = G.startsWith("text") ? "text" : this.configuration.isJsonMime(G) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/rights`, {
        context: te,
        responseType: pe,
        withCredentials: this.configuration.withCredentials,
        headers: ae,
        observe: J,
        reportProgress: fe
      });
    }
    getRoles(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter rolesQuery was null or undefined when calling getRoles.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/roles`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getUserById(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling getUserById.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getUserBySnilsAndProfileQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter getUserBySnilsAndProfileQuery was null or undefined when calling getUserBySnilsAndProfileQuery.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/getBySnils`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    getUsers(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter usersQuery was null or undefined when calling getUsers.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/users`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    internalevents(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter internaleventsRequest was null or undefined when calling internalevents.");
      let Y = new t.LE({
        encoder: this.encoder
      });
      null != J && (Y = this.addToHttpParams(Y, J, "InternaleventsRequest"));
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = ae && ae.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = ae && ae.context;
      void 0 === be && (be = new t.qT());
      let le = "json";
      return pe && (le = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/events-internal`, {
        context: be,
        params: Y,
        responseType: le,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: fe,
        reportProgress: ye
      });
    }
    patchEmployee(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter employeeId was null or undefined when calling patchEmployee.");
      if (null == fe) throw new Error("Required parameter updateEmployeeCommand was null or undefined when calling patchEmployee.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/employee/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    profileProfileIdRightRightIdDelete(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRightRightIdDelete.");
      if (null == fe) throw new Error("Required parameter rightId was null or undefined when calling profileProfileIdRightRightIdDelete.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/right/${encodeURIComponent(String(fe))}`, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRightRightIdPatch(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRightRightIdPatch.");
      if (null == fe) throw new Error("Required parameter rightId was null or undefined when calling profileProfileIdRightRightIdPatch.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/right/${encodeURIComponent(String(fe))}`, ye, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRightRightIdPost(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRightRightIdPost.");
      if (null == fe) throw new Error("Required parameter rightId was null or undefined when calling profileProfileIdRightRightIdPost.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/right/${encodeURIComponent(String(fe))}`, ye, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRoleRoleIdDelete(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRoleRoleIdDelete.");
      if (null == fe) throw new Error("Required parameter roleId was null or undefined when calling profileProfileIdRoleRoleIdDelete.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/role/${encodeURIComponent(String(fe))}`, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    profileProfileIdRoleRoleIdPost(J, fe, ye, ae = "body", Y = !1, G) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling profileProfileIdRoleRoleIdPost.");
      if (null == fe) throw new Error("Required parameter roleId was null or undefined when calling profileProfileIdRoleRoleIdPost.");
      let pe,
        te = this.defaultHeaders;
      pe = this.configuration.lookupCredential("apiKeyTenantId"), pe && (te = te.set("X-Tenant-Id", pe)), pe = this.configuration.lookupCredential("apiKeyUserId"), pe && (te = te.set("X-User-Id", pe));
      let be = G && G.httpHeaderAccept;
      void 0 === be && (be = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== be && (te = te.set("Accept", be));
      let le = G && G.context;
      void 0 === le && (le = new t.qT());
      const Se = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== Se && (te = te.set("Content-Type", Se));
      let qe = "json";
      return be && (qe = be.startsWith("text") ? "text" : this.configuration.isJsonMime(be) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}/role/${encodeURIComponent(String(fe))}`, ye, {
        context: le,
        responseType: qe,
        withCredentials: this.configuration.withCredentials,
        headers: te,
        observe: ae,
        reportProgress: Y
      });
    }
    roleQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling roleQuery.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    unblockUser(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling unblockUser.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      let be = "json";
      return te && (be = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.delete(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}/block`, {
        context: pe,
        responseType: be,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
    updateProfile(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter profileId was null or undefined when calling updateProfile.");
      if (null == fe) throw new Error("Required parameter createOrUpdateProfile was null or undefined when calling updateProfile.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/profile/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    updateRole(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter roleId was null or undefined when calling updateRole.");
      if (null == fe) throw new Error("Required parameter createOrUpdateRoleCommand was null or undefined when calling updateRole.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/role/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    updateUser(J, fe, ye = "body", ae = !1, Y) {
      if (null == J) throw new Error("Required parameter userId was null or undefined when calling updateUser.");
      if (null == fe) throw new Error("Required parameter createOrUpdateUserCommand was null or undefined when calling updateUser.");
      let te,
        G = this.defaultHeaders;
      te = this.configuration.lookupCredential("apiKeyTenantId"), te && (G = G.set("X-Tenant-Id", te)), te = this.configuration.lookupCredential("apiKeyUserId"), te && (G = G.set("X-User-Id", te));
      let pe = Y && Y.httpHeaderAccept;
      void 0 === pe && (pe = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== pe && (G = G.set("Accept", pe));
      let be = Y && Y.context;
      void 0 === be && (be = new t.qT());
      const n = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== n && (G = G.set("Content-Type", n));
      let Se = "json";
      return pe && (Se = pe.startsWith("text") ? "text" : this.configuration.isJsonMime(pe) ? "json" : "blob"), this.httpClient.patch(`${this.configuration.basePath}/api/user/${encodeURIComponent(String(J))}`, fe, {
        context: be,
        responseType: Se,
        withCredentials: this.configuration.withCredentials,
        headers: G,
        observe: ye,
        reportProgress: ae
      });
    }
    userCredentialsQuery(J, fe = "body", ye = !1, ae) {
      if (null == J) throw new Error("Required parameter userCredentialsQuery was null or undefined when calling userCredentialsQuery.");
      let G,
        Y = this.defaultHeaders;
      G = this.configuration.lookupCredential("apiKeyTenantId"), G && (Y = Y.set("X-Tenant-Id", G)), G = this.configuration.lookupCredential("apiKeyUserId"), G && (Y = Y.set("X-User-Id", G));
      let te = ae && ae.httpHeaderAccept;
      void 0 === te && (te = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== te && (Y = Y.set("Accept", te));
      let pe = ae && ae.context;
      void 0 === pe && (pe = new t.qT());
      const le = this.configuration.selectHeaderContentType(["application/json"]);
      void 0 !== le && (Y = Y.set("Content-Type", le));
      let n = "json";
      return te && (n = te.startsWith("text") ? "text" : this.configuration.isJsonMime(te) ? "json" : "blob"), this.httpClient.post(`${this.configuration.basePath}/api/user/credentials`, J, {
        context: pe,
        responseType: n,
        withCredentials: this.configuration.withCredentials,
        headers: Y,
        observe: fe,
        reportProgress: ye
      });
    }
  };
  F.ɵfac = function (fe) {
    return new (fe || F)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, F.ɵprov = a.Yz7({
    token: F,
    factory: F.ɵfac,
    providedIn: "root"
  });
  const Le = class {
    static forRoot(J) {
      return {
        ngModule: Le,
        providers: [{
          provide: M,
          useFactory: J
        }]
      };
    }
    constructor(J, fe) {
      if (J) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
      if (!fe) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  };
  let h = Le;
  Le.ɵfac = function (fe) {
    return new (fe || Le)(a.LFG(Le, 12), a.LFG(t.eN, 8));
  }, Le.ɵmod = a.oAB({
    type: Le
  }), Le.ɵinj = a.cJS({});
});
