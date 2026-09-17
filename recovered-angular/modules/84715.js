// Extracted from main; webpack module 84715. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    i: () => I
  });
  var t = i(80529),
    e = i(71822),
    a = i(39646),
    m = i(54004),
    d = i(18505),
    M = (() => {
      return (O = M || (M = {})).EHRDB = "EHRDB", O.BETTER = "BETTER", M;
      var O;
    })(),
    b = i(48763);
  class A {
    constructor(L, C) {
      this.http = L, this.settings = C, this.compositionCache = {}, this.webTemplateCache = {};
    }
    requestHeaders() {
      return {
        headers: new t.WM({
          "Wait-For-Commit": "true",
          "Content-Type": "application/json"
        })
      };
    }
    example(L) {
      return this.http.get(`${this.settings.url}/rest/v1/template/${L}/example`, {
        ...this.requestHeaders()
      });
    }
    searchDrafts(L) {
      return this.settings.local ? this.http.get(`${this.settings.url}/rest/v1/draft/query?limit=-1&offset=0&tags=${L}`, {
        ...this.requestHeaders()
      }) : (0, a.of)({});
    }
    getDraft(L) {
      return this.settings.local ? this.http.get(`${this.settings.url}/rest/v1/draft/${L}`, {
        ...this.requestHeaders()
      }) : (0, a.of)(void 0);
    }
    hasDraft(L) {
      return this.settings.local && this.settings.type !== M.BETTER ? !1 === this.settings.useServices ? (0, a.of)(!0) : this.http.get(`${this.settings.url}/rest/v1/draft/${L}/check`, {
        ...this.requestHeaders()
      }) : (0, a.of)(!1);
    }
    getWebTemplate(L) {
      return this.webTemplateCache[L] ? (0, a.of)(this.webTemplateCache[L]) : this.http.get(`${this.settings.url}/rest/v1/template/${L}`, {
        ...this.requestHeaders()
      }).pipe((0, m.U)(C => new e.HO(C.webTemplate))).pipe((0, d.b)(C => this.webTemplateCache[L] = C));
    }
    createComposition(L, C, v) {
      return this.http.post(`${this.settings.url}/rest/v1/composition?compositionUid=${L}&${v}`, C, {
        ...this.requestHeaders()
      });
    }
    updateComposition(L, C, v) {
      return this.http.put(`${this.settings.url}/rest/v1/composition/${L}?${v}`, C, {
        ...this.requestHeaders()
      });
    }
    deleteDraft(L, C) {
      return this.http.delete(`${this.settings.url}/rest/v1/draft/${L}?version=${C}`, {
        ...this.requestHeaders()
      });
    }
    hasComposition(L) {
      return !1 === this.settings.useServices || this.settings.type === M.BETTER || this.compositionCache[L] ? (0, a.of)(!0) : this.http.get(`${this.settings.url}/rest/v1/composition/${L}/check`, {
        ...this.requestHeaders()
      });
    }
    getComposition(L, C) {
      const v = b.B.getVersion(L) > 0;
      if (v && this.compositionCache[L]) return (0, a.of)(this.compositionCache[L]);
      const f = C ? {
        moId: C
      } : void 0;
      return this.http.get(`${this.settings.url}/rest/v1/composition/${L}?format=STRUCTURED&meta=true`, {
        ...this.requestHeaders(),
        params: f
      }).pipe((0, d.b)(E => {
        v && (this.compositionCache[L] = E);
      }));
    }
    updateDraft(L, C, v, f) {
      return this.http.put(`${this.settings.url}/rest/v1/draft/${L}?${f}&version=${C}`, v, {
        ...this.requestHeaders()
      });
    }
    createDraft(L, C, v) {
      return this.http.post(`${this.settings.url}/rest/v1/draft/${L}?${v}`, C, {
        ...this.requestHeaders()
      });
    }
    aql(L) {
      return this.http.post(`${this.settings.url}/rest/v1/query`, {
        aql: L
      }, {
        ...this.requestHeaders()
      });
    }
    view(L, C, v) {
      const f = v ?? {};
      if (f.ehrId = L, this.settings.type === M.BETTER) {
        const E = Object.keys(f).map(h => `${h}=${f[h]}`).join("&");
        return this.http.get(`${this.settings.url}/rest/v1/view/${L}/${C}?${E}`, {
          ...this.requestHeaders()
        });
      }
      return this.http.post(`${this.settings.url}/rest/v1/view/${C}`, f, {
        ...this.requestHeaders()
      });
    }
    createEhr() {
      return this.http.post(`${this.settings.url}/rest/v1/ehr`, null, {
        ...this.requestHeaders()
      });
    }
    getEhr(L) {
      return this.http.get(`${this.settings.url}/rest/v1/ehr/${L}`, {
        ...this.requestHeaders()
      });
    }
    updateEhrStatus(L, C) {
      return this.http.put(`${this.settings.url}/rest/v1/ehr/${L}/status`, C, {
        ...this.requestHeaders()
      });
    }
    getEhrBySubjectNamespace(L) {
      const {
        subjectId: C,
        subjectNamespace: v
      } = L;
      return this.http.get(`${this.settings.url}/rest/v1/ehr?subjectId=${C}&subjectNamespace=${v}`, {
        ...this.requestHeaders()
      });
    }
    deleteComposition(L, C) {
      return this.http.delete(`${this.settings.url}/rest/v1/composition/${L}?${C}`, {
        ...this.requestHeaders()
      });
    }
    clearCompositionCacheByUid(L) {
      delete this.compositionCache[L];
    }
    commitContribution(L, C, v) {
      let f = new t.WM({
        "Wait-For-Commit": "true",
        "Content-Type": "application/json"
      });
      return v && (f = f.set("Skip-Validation", "true")), this.http.post(`${this.settings.url}/rest/v1/composition/contribution`, C, {
        headers: f
      });
    }
    getCompositionVisualization(L, C) {
      return this.http.get(`${this.settings.url}/rest/v1/composition/${L}/visualization`, {
        responseType: "text",
        params: new t.LE().set("print", C)
      });
    }
    getScannedCopies(L, C) {
      return this.http.get(`${this.settings.url}/rest/v1/composition/${L}/scan`, {
        responseType: "json",
        params: new t.LE().set("ehrId", C)
      });
    }
    getLocalScannedCopies(L, C) {
      return this.http.get(`${this.settings.url}/rest/v1/composition/${L}/localDocumentScan`, {
        responseType: "json",
        params: new t.LE().set("ehrId", C)
      });
    }
  }
  var N = i(94650);
  let I = (() => {
    class O {
      constructor(C) {
        this.http = C, this.storages = {};
      }
      getStorage(C) {
        if (this.storages[C.code]) return this.storages[C.code];
        const v = new A(this.http, C);
        return this.storages[C.code] = v, v;
      }
    }
    return O.ɵfac = function (C) {
      return new (C || O)(N.LFG(t.eN));
    }, O.ɵprov = N.Yz7({
      token: O,
      factory: O.ɵfac,
      providedIn: "root"
    }), O;
  })();
});
