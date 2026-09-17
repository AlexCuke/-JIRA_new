// Extracted from main; webpack module 80529. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    JF: () => zn,
    LE: () => x,
    TP: () => be,
    UA: () => ye,
    WM: () => I,
    eN: () => Y,
    qT: () => T
  });
  var t = i(36895),
    e = i(94650),
    a = i(39646),
    m = i(69751),
    d = i(24351),
    M = i(39300),
    b = i(54004);
  class A {}
  class N {}
  class I {
    constructor(In) {
      this.normalizedNames = new Map(), this.lazyUpdate = null, In ? this.lazyInit = "string" == typeof In ? () => {
        this.headers = new Map(), In.split("\n").forEach(ui => {
          const To = ui.indexOf(":");
          if (To > 0) {
            const bi = ui.slice(0, To),
              qn = bi.toLowerCase(),
              Xn = ui.slice(To + 1).trim();
            this.maybeSetNormalizedName(bi, qn), this.headers.has(qn) ? this.headers.get(qn).push(Xn) : this.headers.set(qn, [Xn]);
          }
        });
      } : () => {
        this.headers = new Map(), Object.keys(In).forEach(ui => {
          let To = In[ui];
          const bi = ui.toLowerCase();
          "string" == typeof To && (To = [To]), To.length > 0 && (this.headers.set(bi, To), this.maybeSetNormalizedName(ui, bi));
        });
      } : this.headers = new Map();
    }
    has(In) {
      return this.init(), this.headers.has(In.toLowerCase());
    }
    get(In) {
      this.init();
      const ui = this.headers.get(In.toLowerCase());
      return ui && ui.length > 0 ? ui[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(In) {
      return this.init(), this.headers.get(In.toLowerCase()) || null;
    }
    append(In, ui) {
      return this.clone({
        name: In,
        value: ui,
        op: "a"
      });
    }
    set(In, ui) {
      return this.clone({
        name: In,
        value: ui,
        op: "s"
      });
    }
    delete(In, ui) {
      return this.clone({
        name: In,
        value: ui,
        op: "d"
      });
    }
    maybeSetNormalizedName(In, ui) {
      this.normalizedNames.has(ui) || this.normalizedNames.set(ui, In);
    }
    init() {
      this.lazyInit && (this.lazyInit instanceof I ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(In => this.applyUpdate(In)), this.lazyUpdate = null));
    }
    copyFrom(In) {
      In.init(), Array.from(In.headers.keys()).forEach(ui => {
        this.headers.set(ui, In.headers.get(ui)), this.normalizedNames.set(ui, In.normalizedNames.get(ui));
      });
    }
    clone(In) {
      const ui = new I();
      return ui.lazyInit = this.lazyInit && this.lazyInit instanceof I ? this.lazyInit : this, ui.lazyUpdate = (this.lazyUpdate || []).concat([In]), ui;
    }
    applyUpdate(In) {
      const ui = In.name.toLowerCase();
      switch (In.op) {
        case "a":
        case "s":
          let To = In.value;
          if ("string" == typeof To && (To = [To]), 0 === To.length) return;
          this.maybeSetNormalizedName(In.name, ui);
          const bi = ("a" === In.op ? this.headers.get(ui) : void 0) || [];
          bi.push(...To), this.headers.set(ui, bi);
          break;
        case "d":
          const qn = In.value;
          if (qn) {
            let Xn = this.headers.get(ui);
            if (!Xn) return;
            Xn = Xn.filter(Yi => -1 === qn.indexOf(Yi)), 0 === Xn.length ? (this.headers.delete(ui), this.normalizedNames.delete(ui)) : this.headers.set(ui, Xn);
          } else this.headers.delete(ui), this.normalizedNames.delete(ui);
      }
    }
    forEach(In) {
      this.init(), Array.from(this.normalizedNames.keys()).forEach(ui => In(this.normalizedNames.get(ui), this.headers.get(ui)));
    }
  }
  class L {
    encodeKey(In) {
      return E(In);
    }
    encodeValue(In) {
      return E(In);
    }
    decodeKey(In) {
      return decodeURIComponent(In);
    }
    decodeValue(In) {
      return decodeURIComponent(In);
    }
  }
  const v = /%(\d[a-f0-9])/gi,
    f = {
      40: "@",
      "3A": ":",
      24: "$",
      "2C": ",",
      "3B": ";",
      "3D": "=",
      "3F": "?",
      "2F": "/"
    };
  function E(Qn) {
    return encodeURIComponent(Qn).replace(v, (In, ui) => f[ui] ?? In);
  }
  function h(Qn) {
    return `${Qn}`;
  }
  class x {
    constructor(In = {}) {
      if (this.updates = null, this.cloneFrom = null, this.encoder = In.encoder || new L(), In.fromString) {
        if (In.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
        this.map = function C(Qn, In) {
          const ui = new Map();
          return Qn.length > 0 && Qn.replace(/^\?/, "").split("&").forEach(bi => {
            const qn = bi.indexOf("="),
              [Xn, Yi] = -1 == qn ? [In.decodeKey(bi), ""] : [In.decodeKey(bi.slice(0, qn)), In.decodeValue(bi.slice(qn + 1))],
              Eo = ui.get(Xn) || [];
            Eo.push(Yi), ui.set(Xn, Eo);
          }), ui;
        }(In.fromString, this.encoder);
      } else In.fromObject ? (this.map = new Map(), Object.keys(In.fromObject).forEach(ui => {
        const To = In.fromObject[ui],
          bi = Array.isArray(To) ? To.map(h) : [h(To)];
        this.map.set(ui, bi);
      })) : this.map = null;
    }
    has(In) {
      return this.init(), this.map.has(In);
    }
    get(In) {
      this.init();
      const ui = this.map.get(In);
      return ui ? ui[0] : null;
    }
    getAll(In) {
      return this.init(), this.map.get(In) || null;
    }
    keys() {
      return this.init(), Array.from(this.map.keys());
    }
    append(In, ui) {
      return this.clone({
        param: In,
        value: ui,
        op: "a"
      });
    }
    appendAll(In) {
      const ui = [];
      return Object.keys(In).forEach(To => {
        const bi = In[To];
        Array.isArray(bi) ? bi.forEach(qn => {
          ui.push({
            param: To,
            value: qn,
            op: "a"
          });
        }) : ui.push({
          param: To,
          value: bi,
          op: "a"
        });
      }), this.clone(ui);
    }
    set(In, ui) {
      return this.clone({
        param: In,
        value: ui,
        op: "s"
      });
    }
    delete(In, ui) {
      return this.clone({
        param: In,
        value: ui,
        op: "d"
      });
    }
    toString() {
      return this.init(), this.keys().map(In => {
        const ui = this.encoder.encodeKey(In);
        return this.map.get(In).map(To => ui + "=" + this.encoder.encodeValue(To)).join("&");
      }).filter(In => "" !== In).join("&");
    }
    clone(In) {
      const ui = new x({
        encoder: this.encoder
      });
      return ui.cloneFrom = this.cloneFrom || this, ui.updates = (this.updates || []).concat(In), ui;
    }
    init() {
      null === this.map && (this.map = new Map()), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(In => this.map.set(In, this.cloneFrom.map.get(In))), this.updates.forEach(In => {
        switch (In.op) {
          case "a":
          case "s":
            const ui = ("a" === In.op ? this.map.get(In.param) : void 0) || [];
            ui.push(h(In.value)), this.map.set(In.param, ui);
            break;
          case "d":
            if (void 0 === In.value) {
              this.map.delete(In.param);
              break;
            }
            {
              let To = this.map.get(In.param) || [];
              const bi = To.indexOf(h(In.value));
              -1 !== bi && To.splice(bi, 1), To.length > 0 ? this.map.set(In.param, To) : this.map.delete(In.param);
            }
        }
      }), this.cloneFrom = this.updates = null);
    }
  }
  class T {
    constructor() {
      this.map = new Map();
    }
    set(In, ui) {
      return this.map.set(In, ui), this;
    }
    get(In) {
      return this.map.has(In) || this.map.set(In, In.defaultValue()), this.map.get(In);
    }
    delete(In) {
      return this.map.delete(In), this;
    }
    has(In) {
      return this.map.has(In);
    }
    keys() {
      return this.map.keys();
    }
  }
  function B(Qn) {
    return typeof ArrayBuffer < "u" && Qn instanceof ArrayBuffer;
  }
  function y(Qn) {
    return typeof Blob < "u" && Qn instanceof Blob;
  }
  function j(Qn) {
    return typeof FormData < "u" && Qn instanceof FormData;
  }
  class F {
    constructor(In, ui, To, bi) {
      let qn;
      if (this.url = ui, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = In.toUpperCase(), function R(Qn) {
        switch (Qn) {
          case "DELETE":
          case "GET":
          case "HEAD":
          case "OPTIONS":
          case "JSONP":
            return !1;
          default:
            return !0;
        }
      }(this.method) || bi ? (this.body = void 0 !== To ? To : null, qn = bi) : qn = To, qn && (this.reportProgress = !!qn.reportProgress, this.withCredentials = !!qn.withCredentials, qn.responseType && (this.responseType = qn.responseType), qn.headers && (this.headers = qn.headers), qn.context && (this.context = qn.context), qn.params && (this.params = qn.params)), this.headers || (this.headers = new I()), this.context || (this.context = new T()), this.params) {
        const Xn = this.params.toString();
        if (0 === Xn.length) this.urlWithParams = ui;else {
          const Yi = ui.indexOf("?");
          this.urlWithParams = ui + (-1 === Yi ? "?" : Yi < ui.length - 1 ? "&" : "") + Xn;
        }
      } else this.params = new x(), this.urlWithParams = ui;
    }
    serializeBody() {
      return null === this.body ? null : B(this.body) || y(this.body) || j(this.body) || function W(Qn) {
        return typeof URLSearchParams < "u" && Qn instanceof URLSearchParams;
      }(this.body) || "string" == typeof this.body ? this.body : this.body instanceof x ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString();
    }
    detectContentTypeHeader() {
      return null === this.body || j(this.body) ? null : y(this.body) ? this.body.type || null : B(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof x ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null;
    }
    clone(In = {}) {
      const ui = In.method || this.method,
        To = In.url || this.url,
        bi = In.responseType || this.responseType,
        qn = void 0 !== In.body ? In.body : this.body,
        Xn = void 0 !== In.withCredentials ? In.withCredentials : this.withCredentials,
        Yi = void 0 !== In.reportProgress ? In.reportProgress : this.reportProgress;
      let Eo = In.headers || this.headers,
        Fo = In.params || this.params;
      const br = In.context ?? this.context;
      return void 0 !== In.setHeaders && (Eo = Object.keys(In.setHeaders).reduce((Pr, qo) => Pr.set(qo, In.setHeaders[qo]), Eo)), In.setParams && (Fo = Object.keys(In.setParams).reduce((Pr, qo) => Pr.set(qo, In.setParams[qo]), Fo)), new F(ui, To, qn, {
        params: Fo,
        headers: Eo,
        context: br,
        reportProgress: Yi,
        responseType: bi,
        withCredentials: Xn
      });
    }
  }
  var Le = (() => ((Le = Le || {})[Le.Sent = 0] = "Sent", Le[Le.UploadProgress = 1] = "UploadProgress", Le[Le.ResponseHeader = 2] = "ResponseHeader", Le[Le.DownloadProgress = 3] = "DownloadProgress", Le[Le.Response = 4] = "Response", Le[Le.User = 5] = "User", Le))();
  class ke {
    constructor(In, ui = 200, To = "OK") {
      this.headers = In.headers || new I(), this.status = void 0 !== In.status ? In.status : ui, this.statusText = In.statusText || To, this.url = In.url || null, this.ok = this.status >= 200 && this.status < 300;
    }
  }
  class J extends ke {
    constructor(In = {}) {
      super(In), this.type = Le.ResponseHeader;
    }
    clone(In = {}) {
      return new J({
        headers: In.headers || this.headers,
        status: void 0 !== In.status ? In.status : this.status,
        statusText: In.statusText || this.statusText,
        url: In.url || this.url || void 0
      });
    }
  }
  class fe extends ke {
    constructor(In = {}) {
      super(In), this.type = Le.Response, this.body = void 0 !== In.body ? In.body : null;
    }
    clone(In = {}) {
      return new fe({
        body: void 0 !== In.body ? In.body : this.body,
        headers: In.headers || this.headers,
        status: void 0 !== In.status ? In.status : this.status,
        statusText: In.statusText || this.statusText,
        url: In.url || this.url || void 0
      });
    }
  }
  class ye extends ke {
    constructor(In) {
      super(In, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${In.url || "(unknown url)"}` : `Http failure response for ${In.url || "(unknown url)"}: ${In.status} ${In.statusText}`, this.error = In.error || null;
    }
  }
  function ae(Qn, In) {
    return {
      body: In,
      headers: Qn.headers,
      context: Qn.context,
      observe: Qn.observe,
      params: Qn.params,
      reportProgress: Qn.reportProgress,
      responseType: Qn.responseType,
      withCredentials: Qn.withCredentials
    };
  }
  let Y = (() => {
    class Qn {
      constructor(ui) {
        this.handler = ui;
      }
      request(ui, To, bi = {}) {
        let qn;
        if (ui instanceof F) qn = ui;else {
          let Eo, Fo;
          Eo = bi.headers instanceof I ? bi.headers : new I(bi.headers), bi.params && (Fo = bi.params instanceof x ? bi.params : new x({
            fromObject: bi.params
          })), qn = new F(ui, To, void 0 !== bi.body ? bi.body : null, {
            headers: Eo,
            context: bi.context,
            params: Fo,
            reportProgress: bi.reportProgress,
            responseType: bi.responseType || "json",
            withCredentials: bi.withCredentials
          });
        }
        const Xn = (0, a.of)(qn).pipe((0, d.b)(Eo => this.handler.handle(Eo)));
        if (ui instanceof F || "events" === bi.observe) return Xn;
        const Yi = Xn.pipe((0, M.h)(Eo => Eo instanceof fe));
        switch (bi.observe || "body") {
          case "body":
            switch (qn.responseType) {
              case "arraybuffer":
                return Yi.pipe((0, b.U)(Eo => {
                  if (null !== Eo.body && !(Eo.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                  return Eo.body;
                }));
              case "blob":
                return Yi.pipe((0, b.U)(Eo => {
                  if (null !== Eo.body && !(Eo.body instanceof Blob)) throw new Error("Response is not a Blob.");
                  return Eo.body;
                }));
              case "text":
                return Yi.pipe((0, b.U)(Eo => {
                  if (null !== Eo.body && "string" != typeof Eo.body) throw new Error("Response is not a string.");
                  return Eo.body;
                }));
              default:
                return Yi.pipe((0, b.U)(Eo => Eo.body));
            }
          case "response":
            return Yi;
          default:
            throw new Error(`Unreachable: unhandled observe type ${bi.observe}}`);
        }
      }
      delete(ui, To = {}) {
        return this.request("DELETE", ui, To);
      }
      get(ui, To = {}) {
        return this.request("GET", ui, To);
      }
      head(ui, To = {}) {
        return this.request("HEAD", ui, To);
      }
      jsonp(ui, To) {
        return this.request("JSONP", ui, {
          params: new x().append(To, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json"
        });
      }
      options(ui, To = {}) {
        return this.request("OPTIONS", ui, To);
      }
      patch(ui, To, bi = {}) {
        return this.request("PATCH", ui, ae(bi, To));
      }
      post(ui, To, bi = {}) {
        return this.request("POST", ui, ae(bi, To));
      }
      put(ui, To, bi = {}) {
        return this.request("PUT", ui, ae(bi, To));
      }
    }
    return Qn.ɵfac = function (ui) {
      return new (ui || Qn)(e.LFG(A));
    }, Qn.ɵprov = e.Yz7({
      token: Qn,
      factory: Qn.ɵfac
    }), Qn;
  })();
  function G(Qn, In) {
    return In(Qn);
  }
  function te(Qn, In) {
    return (ui, To) => In.intercept(ui, {
      handle: bi => Qn(bi, To)
    });
  }
  const be = new e.OlP("HTTP_INTERCEPTORS"),
    le = new e.OlP("HTTP_INTERCEPTOR_FNS");
  function n() {
    let Qn = null;
    return (In, ui) => (null === Qn && (Qn = ((0, e.f3M)(be, {
      optional: !0
    }) ?? []).reduceRight(te, G)), Qn(In, ui));
  }
  let Se = (() => {
    class Qn extends A {
      constructor(ui, To) {
        super(), this.backend = ui, this.injector = To, this.chain = null;
      }
      handle(ui) {
        if (null === this.chain) {
          const To = Array.from(new Set(this.injector.get(le)));
          this.chain = To.reduceRight((bi, qn) => function pe(Qn, In, ui) {
            return (To, bi) => ui.runInContext(() => In(To, qn => Qn(qn, bi)));
          }(bi, qn, this.injector), G);
        }
        return this.chain(ui, To => this.backend.handle(To));
      }
    }
    return Qn.ɵfac = function (ui) {
      return new (ui || Qn)(e.LFG(N), e.LFG(e.lqb));
    }, Qn.ɵprov = e.Yz7({
      token: Qn,
      factory: Qn.ɵfac
    }), Qn;
  })();
  const Ue = /^\)\]\}',?\n/;
  let Ke = (() => {
    class Qn {
      constructor(ui) {
        this.xhrFactory = ui;
      }
      handle(ui) {
        if ("JSONP" === ui.method) throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
        return new m.y(To => {
          const bi = this.xhrFactory.build();
          if (bi.open(ui.method, ui.urlWithParams), ui.withCredentials && (bi.withCredentials = !0), ui.headers.forEach((Yo, wr) => bi.setRequestHeader(Yo, wr.join(","))), ui.headers.has("Accept") || bi.setRequestHeader("Accept", "application/json, text/plain, */*"), !ui.headers.has("Content-Type")) {
            const Yo = ui.detectContentTypeHeader();
            null !== Yo && bi.setRequestHeader("Content-Type", Yo);
          }
          if (ui.responseType) {
            const Yo = ui.responseType.toLowerCase();
            bi.responseType = "json" !== Yo ? Yo : "text";
          }
          const qn = ui.serializeBody();
          let Xn = null;
          const Yi = () => {
              if (null !== Xn) return Xn;
              const Yo = bi.statusText || "OK",
                wr = new I(bi.getAllResponseHeaders()),
                oo = function Me(Qn) {
                  return "responseURL" in Qn && Qn.responseURL ? Qn.responseURL : /^X-Request-URL:/m.test(Qn.getAllResponseHeaders()) ? Qn.getResponseHeader("X-Request-URL") : null;
                }(bi) || ui.url;
              return Xn = new J({
                headers: wr,
                status: bi.status,
                statusText: Yo,
                url: oo
              }), Xn;
            },
            Eo = () => {
              let {
                  headers: Yo,
                  status: wr,
                  statusText: oo,
                  url: Di
                } = Yi(),
                Ci = null;
              204 !== wr && (Ci = typeof bi.response > "u" ? bi.responseText : bi.response), 0 === wr && (wr = Ci ? 200 : 0);
              let lo = wr >= 200 && wr < 300;
              if ("json" === ui.responseType && "string" == typeof Ci) {
                const jo = Ci;
                Ci = Ci.replace(Ue, "");
                try {
                  Ci = "" !== Ci ? JSON.parse(Ci) : null;
                } catch (Go) {
                  Ci = jo, lo && (lo = !1, Ci = {
                    error: Go,
                    text: Ci
                  });
                }
              }
              lo ? (To.next(new fe({
                body: Ci,
                headers: Yo,
                status: wr,
                statusText: oo,
                url: Di || void 0
              })), To.complete()) : To.error(new ye({
                error: Ci,
                headers: Yo,
                status: wr,
                statusText: oo,
                url: Di || void 0
              }));
            },
            Fo = Yo => {
              const {
                  url: wr
                } = Yi(),
                oo = new ye({
                  error: Yo,
                  status: bi.status || 0,
                  statusText: bi.statusText || "Unknown Error",
                  url: wr || void 0
                });
              To.error(oo);
            };
          let br = !1;
          const Pr = Yo => {
              br || (To.next(Yi()), br = !0);
              let wr = {
                type: Le.DownloadProgress,
                loaded: Yo.loaded
              };
              Yo.lengthComputable && (wr.total = Yo.total), "text" === ui.responseType && bi.responseText && (wr.partialText = bi.responseText), To.next(wr);
            },
            qo = Yo => {
              let wr = {
                type: Le.UploadProgress,
                loaded: Yo.loaded
              };
              Yo.lengthComputable && (wr.total = Yo.total), To.next(wr);
            };
          return bi.addEventListener("load", Eo), bi.addEventListener("error", Fo), bi.addEventListener("timeout", Fo), bi.addEventListener("abort", Fo), ui.reportProgress && (bi.addEventListener("progress", Pr), null !== qn && bi.upload && bi.upload.addEventListener("progress", qo)), bi.send(qn), To.next({
            type: Le.Sent
          }), () => {
            bi.removeEventListener("error", Fo), bi.removeEventListener("abort", Fo), bi.removeEventListener("load", Eo), bi.removeEventListener("timeout", Fo), ui.reportProgress && (bi.removeEventListener("progress", Pr), null !== qn && bi.upload && bi.upload.removeEventListener("progress", qo)), bi.readyState !== bi.DONE && bi.abort();
          };
        });
      }
    }
    return Qn.ɵfac = function (ui) {
      return new (ui || Qn)(e.LFG(t.JF));
    }, Qn.ɵprov = e.Yz7({
      token: Qn,
      factory: Qn.ɵfac
    }), Qn;
  })();
  const Ze = new e.OlP("XSRF_ENABLED"),
    je = new e.OlP("XSRF_COOKIE_NAME", {
      providedIn: "root",
      factory: () => "XSRF-TOKEN"
    }),
    Je = new e.OlP("XSRF_HEADER_NAME", {
      providedIn: "root",
      factory: () => "X-XSRF-TOKEN"
    });
  class Xt {}
  let Nn = (() => {
    class Qn {
      constructor(ui, To, bi) {
        this.doc = ui, this.platform = To, this.cookieName = bi, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0;
      }
      getToken() {
        if ("server" === this.platform) return null;
        const ui = this.doc.cookie || "";
        return ui !== this.lastCookieString && (this.parseCount++, this.lastToken = (0, t.Mx)(ui, this.cookieName), this.lastCookieString = ui), this.lastToken;
      }
    }
    return Qn.ɵfac = function (ui) {
      return new (ui || Qn)(e.LFG(t.K0), e.LFG(e.Lbi), e.LFG(je));
    }, Qn.ɵprov = e.Yz7({
      token: Qn,
      factory: Qn.ɵfac
    }), Qn;
  })();
  function Pi(Qn, In) {
    const ui = Qn.url.toLowerCase();
    if (!(0, e.f3M)(Ze) || "GET" === Qn.method || "HEAD" === Qn.method || ui.startsWith("http://") || ui.startsWith("https://")) return In(Qn);
    const To = (0, e.f3M)(Xt).getToken(),
      bi = (0, e.f3M)(Je);
    return null != To && !Qn.headers.has(bi) && (Qn = Qn.clone({
      headers: Qn.headers.set(bi, To)
    })), In(Qn);
  }
  var yi = (() => ((yi = yi || {})[yi.Interceptors = 0] = "Interceptors", yi[yi.LegacyInterceptors = 1] = "LegacyInterceptors", yi[yi.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", yi[yi.NoXsrfProtection = 3] = "NoXsrfProtection", yi[yi.JsonpSupport = 4] = "JsonpSupport", yi[yi.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", yi))();
  function co(Qn, In) {
    return {
      ɵkind: Qn,
      ɵproviders: In
    };
  }
  function Jo(...Qn) {
    const In = [Y, Ke, Se, {
      provide: A,
      useExisting: Se
    }, {
      provide: N,
      useExisting: Ke
    }, {
      provide: le,
      useValue: Pi,
      multi: !0
    }, {
      provide: Ze,
      useValue: !0
    }, {
      provide: Xt,
      useClass: Nn
    }];
    for (const ui of Qn) In.push(...ui.ɵproviders);
    return (0, e.MR2)(In);
  }
  const pt = new e.OlP("LEGACY_INTERCEPTOR_FN");
  let zn = (() => {
    class Qn {}
    return Qn.ɵfac = function (ui) {
      return new (ui || Qn)();
    }, Qn.ɵmod = e.oAB({
      type: Qn
    }), Qn.ɵinj = e.cJS({
      providers: [Jo(co(yi.LegacyInterceptors, [{
        provide: pt,
        useFactory: n
      }, {
        provide: le,
        useExisting: pt,
        multi: !0
      }]))]
    }), Qn;
  })();
});
