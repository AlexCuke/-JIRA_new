// Extracted from main; webpack module 36895. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $G: () => Qi,
    Do: () => u,
    ED: () => Yt,
    EM: () => At,
    HT: () => m,
    JF: () => ni,
    K0: () => M,
    Mx: () => Ps,
    NF: () => xo,
    Nd: () => ba,
    O5: () => xa,
    Ov: () => js,
    PC: () => di,
    PM: () => No,
    RF: () => uo,
    S$: () => E,
    V_: () => N,
    Ye: () => T,
    Zd: () => kl,
    b0: () => x,
    bD: () => Kt,
    ez: () => gi,
    mk: () => yo,
    n9: () => ri,
    q: () => a,
    qS: () => us,
    rS: () => Ws,
    sg: () => ra,
    tP: () => Gn,
    uU: () => na,
    w_: () => d
  });
  var t = i(94650);
  let e = null;
  function a() {
    return e;
  }
  function m(Ut) {
    e || (e = Ut);
  }
  class d {}
  const M = new t.OlP("DocumentToken");
  let b = (() => {
    class Ut {
      historyGo(Gt) {
        throw new Error("Not implemented");
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)();
    }, Ut.ɵprov = t.Yz7({
      token: Ut,
      factory: function () {
        return function A() {
          return (0, t.LFG)(I);
        }();
      },
      providedIn: "platform"
    }), Ut;
  })();
  const N = new t.OlP("Location Initialized");
  let I = (() => {
    class Ut extends b {
      constructor(Gt) {
        super(), this._doc = Gt, this._location = window.location, this._history = window.history;
      }
      getBaseHrefFromDOM() {
        return a().getBaseHref(this._doc);
      }
      onPopState(Gt) {
        const xi = a().getGlobalEventTarget(this._doc, "window");
        return xi.addEventListener("popstate", Gt, !1), () => xi.removeEventListener("popstate", Gt);
      }
      onHashChange(Gt) {
        const xi = a().getGlobalEventTarget(this._doc, "window");
        return xi.addEventListener("hashchange", Gt, !1), () => xi.removeEventListener("hashchange", Gt);
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(Gt) {
        this._location.pathname = Gt;
      }
      pushState(Gt, xi, so) {
        O() ? this._history.pushState(Gt, xi, so) : this._location.hash = so;
      }
      replaceState(Gt, xi, so) {
        O() ? this._history.replaceState(Gt, xi, so) : this._location.hash = so;
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(Gt = 0) {
        this._history.go(Gt);
      }
      getState() {
        return this._history.state;
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)(t.LFG(M));
    }, Ut.ɵprov = t.Yz7({
      token: Ut,
      factory: function () {
        return function L() {
          return new I((0, t.LFG)(M));
        }();
      },
      providedIn: "platform"
    }), Ut;
  })();
  function O() {
    return !!window.history.pushState;
  }
  function C(Ut, Vn) {
    if (0 == Ut.length) return Vn;
    if (0 == Vn.length) return Ut;
    let Gt = 0;
    return Ut.endsWith("/") && Gt++, Vn.startsWith("/") && Gt++, 2 == Gt ? Ut + Vn.substring(1) : 1 == Gt ? Ut + Vn : Ut + "/" + Vn;
  }
  function v(Ut) {
    const Vn = Ut.match(/#|\?|$/),
      Gt = Vn && Vn.index || Ut.length;
    return Ut.slice(0, Gt - ("/" === Ut[Gt - 1] ? 1 : 0)) + Ut.slice(Gt);
  }
  function f(Ut) {
    return Ut && "?" !== Ut[0] ? "?" + Ut : Ut;
  }
  let E = (() => {
    class Ut {
      historyGo(Gt) {
        throw new Error("Not implemented");
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)();
    }, Ut.ɵprov = t.Yz7({
      token: Ut,
      factory: function () {
        return (0, t.f3M)(x);
      },
      providedIn: "root"
    }), Ut;
  })();
  const h = new t.OlP("appBaseHref");
  let x = (() => {
      class Ut extends E {
        constructor(Gt, xi) {
          super(), this._platformLocation = Gt, this._removeListenerFns = [], this._baseHref = xi ?? this._platformLocation.getBaseHrefFromDOM() ?? (0, t.f3M)(M).location?.origin ?? "";
        }
        ngOnDestroy() {
          for (; this._removeListenerFns.length;) this._removeListenerFns.pop()();
        }
        onPopState(Gt) {
          this._removeListenerFns.push(this._platformLocation.onPopState(Gt), this._platformLocation.onHashChange(Gt));
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(Gt) {
          return C(this._baseHref, Gt);
        }
        path(Gt = !1) {
          const xi = this._platformLocation.pathname + f(this._platformLocation.search),
            so = this._platformLocation.hash;
          return so && Gt ? `${xi}${so}` : xi;
        }
        pushState(Gt, xi, so, yr) {
          const Rr = this.prepareExternalUrl(so + f(yr));
          this._platformLocation.pushState(Gt, xi, Rr);
        }
        replaceState(Gt, xi, so, yr) {
          const Rr = this.prepareExternalUrl(so + f(yr));
          this._platformLocation.replaceState(Gt, xi, Rr);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
        getState() {
          return this._platformLocation.getState();
        }
        historyGo(Gt = 0) {
          this._platformLocation.historyGo?.(Gt);
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.LFG(b), t.LFG(h, 8));
      }, Ut.ɵprov = t.Yz7({
        token: Ut,
        factory: Ut.ɵfac,
        providedIn: "root"
      }), Ut;
    })(),
    u = (() => {
      class Ut extends E {
        constructor(Gt, xi) {
          super(), this._platformLocation = Gt, this._baseHref = "", this._removeListenerFns = [], null != xi && (this._baseHref = xi);
        }
        ngOnDestroy() {
          for (; this._removeListenerFns.length;) this._removeListenerFns.pop()();
        }
        onPopState(Gt) {
          this._removeListenerFns.push(this._platformLocation.onPopState(Gt), this._platformLocation.onHashChange(Gt));
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(Gt = !1) {
          let xi = this._platformLocation.hash;
          return null == xi && (xi = "#"), xi.length > 0 ? xi.substring(1) : xi;
        }
        prepareExternalUrl(Gt) {
          const xi = C(this._baseHref, Gt);
          return xi.length > 0 ? "#" + xi : xi;
        }
        pushState(Gt, xi, so, yr) {
          let Rr = this.prepareExternalUrl(so + f(yr));
          0 == Rr.length && (Rr = this._platformLocation.pathname), this._platformLocation.pushState(Gt, xi, Rr);
        }
        replaceState(Gt, xi, so, yr) {
          let Rr = this.prepareExternalUrl(so + f(yr));
          0 == Rr.length && (Rr = this._platformLocation.pathname), this._platformLocation.replaceState(Gt, xi, Rr);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
        getState() {
          return this._platformLocation.getState();
        }
        historyGo(Gt = 0) {
          this._platformLocation.historyGo?.(Gt);
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.LFG(b), t.LFG(h, 8));
      }, Ut.ɵprov = t.Yz7({
        token: Ut,
        factory: Ut.ɵfac
      }), Ut;
    })(),
    T = (() => {
      class Ut {
        constructor(Gt) {
          this._subject = new t.vpe(), this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = Gt;
          const xi = this._locationStrategy.getBaseHref();
          this._basePath = function j(Ut) {
            if (new RegExp("^(https?:)?//").test(Ut)) {
              const [, Gt] = Ut.split(/\/\/[^\/]+/);
              return Gt;
            }
            return Ut;
          }(v(y(xi))), this._locationStrategy.onPopState(so => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: so.state,
              type: so.type
            });
          });
        }
        ngOnDestroy() {
          this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = [];
        }
        path(Gt = !1) {
          return this.normalize(this._locationStrategy.path(Gt));
        }
        getState() {
          return this._locationStrategy.getState();
        }
        isCurrentPathEqualTo(Gt, xi = "") {
          return this.path() == this.normalize(Gt + f(xi));
        }
        normalize(Gt) {
          return Ut.stripTrailingSlash(function B(Ut, Vn) {
            if (!Ut || !Vn.startsWith(Ut)) return Vn;
            const Gt = Vn.substring(Ut.length);
            return "" === Gt || ["/", ";", "?", "#"].includes(Gt[0]) ? Gt : Vn;
          }(this._basePath, y(Gt)));
        }
        prepareExternalUrl(Gt) {
          return Gt && "/" !== Gt[0] && (Gt = "/" + Gt), this._locationStrategy.prepareExternalUrl(Gt);
        }
        go(Gt, xi = "", so = null) {
          this._locationStrategy.pushState(so, "", Gt, xi), this._notifyUrlChangeListeners(this.prepareExternalUrl(Gt + f(xi)), so);
        }
        replaceState(Gt, xi = "", so = null) {
          this._locationStrategy.replaceState(so, "", Gt, xi), this._notifyUrlChangeListeners(this.prepareExternalUrl(Gt + f(xi)), so);
        }
        forward() {
          this._locationStrategy.forward();
        }
        back() {
          this._locationStrategy.back();
        }
        historyGo(Gt = 0) {
          this._locationStrategy.historyGo?.(Gt);
        }
        onUrlChange(Gt) {
          return this._urlChangeListeners.push(Gt), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(xi => {
            this._notifyUrlChangeListeners(xi.url, xi.state);
          })), () => {
            const xi = this._urlChangeListeners.indexOf(Gt);
            this._urlChangeListeners.splice(xi, 1), 0 === this._urlChangeListeners.length && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null);
          };
        }
        _notifyUrlChangeListeners(Gt = "", xi) {
          this._urlChangeListeners.forEach(so => so(Gt, xi));
        }
        subscribe(Gt, xi, so) {
          return this._subject.subscribe({
            next: Gt,
            error: xi,
            complete: so
          });
        }
      }
      return Ut.normalizeQueryParams = f, Ut.joinWithSlash = C, Ut.stripTrailingSlash = v, Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.LFG(E));
      }, Ut.ɵprov = t.Yz7({
        token: Ut,
        factory: function () {
          return function R() {
            return new T((0, t.LFG)(E));
          }();
        },
        providedIn: "root"
      }), Ut;
    })();
  function y(Ut) {
    return Ut.replace(/\/index.html$/, "");
  }
  var ke = (() => ((ke = ke || {})[ke.Format = 0] = "Format", ke[ke.Standalone = 1] = "Standalone", ke))(),
    J = (() => ((J = J || {})[J.Narrow = 0] = "Narrow", J[J.Abbreviated = 1] = "Abbreviated", J[J.Wide = 2] = "Wide", J[J.Short = 3] = "Short", J))(),
    fe = (() => ((fe = fe || {})[fe.Short = 0] = "Short", fe[fe.Medium = 1] = "Medium", fe[fe.Long = 2] = "Long", fe[fe.Full = 3] = "Full", fe))(),
    ye = (() => ((ye = ye || {})[ye.Decimal = 0] = "Decimal", ye[ye.Group = 1] = "Group", ye[ye.List = 2] = "List", ye[ye.PercentSign = 3] = "PercentSign", ye[ye.PlusSign = 4] = "PlusSign", ye[ye.MinusSign = 5] = "MinusSign", ye[ye.Exponential = 6] = "Exponential", ye[ye.SuperscriptingExponent = 7] = "SuperscriptingExponent", ye[ye.PerMille = 8] = "PerMille", ye[ye.Infinity = 9] = "Infinity", ye[ye.NaN = 10] = "NaN", ye[ye.TimeSeparator = 11] = "TimeSeparator", ye[ye.CurrencyDecimal = 12] = "CurrencyDecimal", ye[ye.CurrencyGroup = 13] = "CurrencyGroup", ye))();
  function Se(Ut, Vn) {
    return Ke((0, t.cg1)(Ut)[t.wAp.DateFormat], Vn);
  }
  function qe(Ut, Vn) {
    return Ke((0, t.cg1)(Ut)[t.wAp.TimeFormat], Vn);
  }
  function Rt(Ut, Vn) {
    return Ke((0, t.cg1)(Ut)[t.wAp.DateTimeFormat], Vn);
  }
  function We(Ut, Vn) {
    const Gt = (0, t.cg1)(Ut),
      xi = Gt[t.wAp.NumberSymbols][Vn];
    if (typeof xi > "u") {
      if (Vn === ye.CurrencyDecimal) return Gt[t.wAp.NumberSymbols][ye.Decimal];
      if (Vn === ye.CurrencyGroup) return Gt[t.wAp.NumberSymbols][ye.Group];
    }
    return xi;
  }
  function Ft(Ut) {
    if (!Ut[t.wAp.ExtraData]) throw new Error(`Missing extra locale data for the locale "${Ut[t.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
  }
  function Ke(Ut, Vn) {
    for (let Gt = Vn; Gt > -1; Gt--) if (typeof Ut[Gt] < "u") return Ut[Gt];
    throw new Error("Locale data API: locale data undefined");
  }
  function Ze(Ut) {
    const [Vn, Gt] = Ut.split(":");
    return {
      hours: +Vn,
      minutes: +Gt
    };
  }
  const Je = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
    Xt = {},
    Nn = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
  var Pi = (() => ((Pi = Pi || {})[Pi.Short = 0] = "Short", Pi[Pi.ShortGMT = 1] = "ShortGMT", Pi[Pi.Long = 2] = "Long", Pi[Pi.Extended = 3] = "Extended", Pi))(),
    Ii = (() => ((Ii = Ii || {})[Ii.FullYear = 0] = "FullYear", Ii[Ii.Month = 1] = "Month", Ii[Ii.Date = 2] = "Date", Ii[Ii.Hours = 3] = "Hours", Ii[Ii.Minutes = 4] = "Minutes", Ii[Ii.Seconds = 5] = "Seconds", Ii[Ii.FractionalSeconds = 6] = "FractionalSeconds", Ii[Ii.Day = 7] = "Day", Ii))(),
    yi = (() => ((yi = yi || {})[yi.DayPeriods = 0] = "DayPeriods", yi[yi.Days = 1] = "Days", yi[yi.Months = 2] = "Months", yi[yi.Eras = 3] = "Eras", yi))();
  function co(Ut, Vn, Gt, xi) {
    let so = function Fo(Ut) {
      if (Pr(Ut)) return Ut;
      if ("number" == typeof Ut && !isNaN(Ut)) return new Date(Ut);
      if ("string" == typeof Ut) {
        if (Ut = Ut.trim(), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(Ut)) {
          const [so, yr = 1, Rr = 1] = Ut.split("-").map(Ns => +Ns);
          return Jo(so, yr - 1, Rr);
        }
        const Gt = parseFloat(Ut);
        if (!isNaN(Ut - Gt)) return new Date(Gt);
        let xi;
        if (xi = Ut.match(Je)) return function br(Ut) {
          const Vn = new Date(0);
          let Gt = 0,
            xi = 0;
          const so = Ut[8] ? Vn.setUTCFullYear : Vn.setFullYear,
            yr = Ut[8] ? Vn.setUTCHours : Vn.setHours;
          Ut[9] && (Gt = Number(Ut[9] + Ut[10]), xi = Number(Ut[9] + Ut[11])), so.call(Vn, Number(Ut[1]), Number(Ut[2]) - 1, Number(Ut[3]));
          const Rr = Number(Ut[4] || 0) - Gt,
            Ns = Number(Ut[5] || 0) - xi,
            Ga = Number(Ut[6] || 0),
            Ma = Math.floor(1e3 * parseFloat("0." + (Ut[7] || 0)));
          return yr.call(Vn, Rr, Ns, Ga, Ma), Vn;
        }(xi);
      }
      const Vn = new Date(Ut);
      if (!Pr(Vn)) throw new Error(`Unable to convert "${Ut}" into a date`);
      return Vn;
    }(Ut);
    Vn = fr(Gt, Vn) || Vn;
    let Ns,
      Rr = [];
    for (; Vn;) {
      if (Ns = Nn.exec(Vn), !Ns) {
        Rr.push(Vn);
        break;
      }
      {
        Rr = Rr.concat(Ns.slice(1));
        const Ia = Rr.pop();
        if (!Ia) break;
        Vn = Ia;
      }
    }
    let Ga = so.getTimezoneOffset();
    xi && (Ga = Xn(xi, Ga), so = function Eo(Ut, Vn, Gt) {
      const xi = Gt ? -1 : 1,
        so = Ut.getTimezoneOffset();
      return function Yi(Ut, Vn) {
        return (Ut = new Date(Ut.getTime())).setMinutes(Ut.getMinutes() + Vn), Ut;
      }(Ut, xi * (Xn(Vn, so) - so));
    }(so, xi, !0));
    let Ma = "";
    return Rr.forEach(Ia => {
      const Ea = function qn(Ut) {
        if (bi[Ut]) return bi[Ut];
        let Vn;
        switch (Ut) {
          case "G":
          case "GG":
          case "GGG":
            Vn = an(yi.Eras, J.Abbreviated);
            break;
          case "GGGG":
            Vn = an(yi.Eras, J.Wide);
            break;
          case "GGGGG":
            Vn = an(yi.Eras, J.Narrow);
            break;
          case "y":
            Vn = Dn(Ii.FullYear, 1, 0, !1, !0);
            break;
          case "yy":
            Vn = Dn(Ii.FullYear, 2, 0, !0, !0);
            break;
          case "yyy":
            Vn = Dn(Ii.FullYear, 3, 0, !1, !0);
            break;
          case "yyyy":
            Vn = Dn(Ii.FullYear, 4, 0, !1, !0);
            break;
          case "Y":
            Vn = To(1);
            break;
          case "YY":
            Vn = To(2, !0);
            break;
          case "YYY":
            Vn = To(3);
            break;
          case "YYYY":
            Vn = To(4);
            break;
          case "M":
          case "L":
            Vn = Dn(Ii.Month, 1, 1);
            break;
          case "MM":
          case "LL":
            Vn = Dn(Ii.Month, 2, 1);
            break;
          case "MMM":
            Vn = an(yi.Months, J.Abbreviated);
            break;
          case "MMMM":
            Vn = an(yi.Months, J.Wide);
            break;
          case "MMMMM":
            Vn = an(yi.Months, J.Narrow);
            break;
          case "LLL":
            Vn = an(yi.Months, J.Abbreviated, ke.Standalone);
            break;
          case "LLLL":
            Vn = an(yi.Months, J.Wide, ke.Standalone);
            break;
          case "LLLLL":
            Vn = an(yi.Months, J.Narrow, ke.Standalone);
            break;
          case "w":
            Vn = ui(1);
            break;
          case "ww":
            Vn = ui(2);
            break;
          case "W":
            Vn = ui(1, !0);
            break;
          case "d":
            Vn = Dn(Ii.Date, 1);
            break;
          case "dd":
            Vn = Dn(Ii.Date, 2);
            break;
          case "c":
          case "cc":
            Vn = Dn(Ii.Day, 1);
            break;
          case "ccc":
            Vn = an(yi.Days, J.Abbreviated, ke.Standalone);
            break;
          case "cccc":
            Vn = an(yi.Days, J.Wide, ke.Standalone);
            break;
          case "ccccc":
            Vn = an(yi.Days, J.Narrow, ke.Standalone);
            break;
          case "cccccc":
            Vn = an(yi.Days, J.Short, ke.Standalone);
            break;
          case "E":
          case "EE":
          case "EEE":
            Vn = an(yi.Days, J.Abbreviated);
            break;
          case "EEEE":
            Vn = an(yi.Days, J.Wide);
            break;
          case "EEEEE":
            Vn = an(yi.Days, J.Narrow);
            break;
          case "EEEEEE":
            Vn = an(yi.Days, J.Short);
            break;
          case "a":
          case "aa":
          case "aaa":
            Vn = an(yi.DayPeriods, J.Abbreviated);
            break;
          case "aaaa":
            Vn = an(yi.DayPeriods, J.Wide);
            break;
          case "aaaaa":
            Vn = an(yi.DayPeriods, J.Narrow);
            break;
          case "b":
          case "bb":
          case "bbb":
            Vn = an(yi.DayPeriods, J.Abbreviated, ke.Standalone, !0);
            break;
          case "bbbb":
            Vn = an(yi.DayPeriods, J.Wide, ke.Standalone, !0);
            break;
          case "bbbbb":
            Vn = an(yi.DayPeriods, J.Narrow, ke.Standalone, !0);
            break;
          case "B":
          case "BB":
          case "BBB":
            Vn = an(yi.DayPeriods, J.Abbreviated, ke.Format, !0);
            break;
          case "BBBB":
            Vn = an(yi.DayPeriods, J.Wide, ke.Format, !0);
            break;
          case "BBBBB":
            Vn = an(yi.DayPeriods, J.Narrow, ke.Format, !0);
            break;
          case "h":
            Vn = Dn(Ii.Hours, 1, -12);
            break;
          case "hh":
            Vn = Dn(Ii.Hours, 2, -12);
            break;
          case "H":
            Vn = Dn(Ii.Hours, 1);
            break;
          case "HH":
            Vn = Dn(Ii.Hours, 2);
            break;
          case "m":
            Vn = Dn(Ii.Minutes, 1);
            break;
          case "mm":
            Vn = Dn(Ii.Minutes, 2);
            break;
          case "s":
            Vn = Dn(Ii.Seconds, 1);
            break;
          case "ss":
            Vn = Dn(Ii.Seconds, 2);
            break;
          case "S":
            Vn = Dn(Ii.FractionalSeconds, 1);
            break;
          case "SS":
            Vn = Dn(Ii.FractionalSeconds, 2);
            break;
          case "SSS":
            Vn = Dn(Ii.FractionalSeconds, 3);
            break;
          case "Z":
          case "ZZ":
          case "ZZZ":
            Vn = zn(Pi.Short);
            break;
          case "ZZZZZ":
            Vn = zn(Pi.Extended);
            break;
          case "O":
          case "OO":
          case "OOO":
          case "z":
          case "zz":
          case "zzz":
            Vn = zn(Pi.ShortGMT);
            break;
          case "OOOO":
          case "ZZZZ":
          case "zzzz":
            Vn = zn(Pi.Long);
            break;
          default:
            return null;
        }
        return bi[Ut] = Vn, Vn;
      }(Ia);
      Ma += Ea ? Ea(so, Gt, Ga) : "''" === Ia ? "'" : Ia.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }), Ma;
  }
  function Jo(Ut, Vn, Gt) {
    const xi = new Date(0);
    return xi.setFullYear(Ut, Vn, Gt), xi.setHours(0, 0, 0), xi;
  }
  function fr(Ut, Vn) {
    const Gt = function Y(Ut) {
      return (0, t.cg1)(Ut)[t.wAp.LocaleId];
    }(Ut);
    if (Xt[Gt] = Xt[Gt] || {}, Xt[Gt][Vn]) return Xt[Gt][Vn];
    let xi = "";
    switch (Vn) {
      case "shortDate":
        xi = Se(Ut, fe.Short);
        break;
      case "mediumDate":
        xi = Se(Ut, fe.Medium);
        break;
      case "longDate":
        xi = Se(Ut, fe.Long);
        break;
      case "fullDate":
        xi = Se(Ut, fe.Full);
        break;
      case "shortTime":
        xi = qe(Ut, fe.Short);
        break;
      case "mediumTime":
        xi = qe(Ut, fe.Medium);
        break;
      case "longTime":
        xi = qe(Ut, fe.Long);
        break;
      case "fullTime":
        xi = qe(Ut, fe.Full);
        break;
      case "short":
        const so = fr(Ut, "shortTime"),
          yr = fr(Ut, "shortDate");
        xi = pt(Rt(Ut, fe.Short), [so, yr]);
        break;
      case "medium":
        const Rr = fr(Ut, "mediumTime"),
          Ns = fr(Ut, "mediumDate");
        xi = pt(Rt(Ut, fe.Medium), [Rr, Ns]);
        break;
      case "long":
        const Ga = fr(Ut, "longTime"),
          Ma = fr(Ut, "longDate");
        xi = pt(Rt(Ut, fe.Long), [Ga, Ma]);
        break;
      case "full":
        const Ia = fr(Ut, "fullTime"),
          Ea = fr(Ut, "fullDate");
        xi = pt(Rt(Ut, fe.Full), [Ia, Ea]);
    }
    return xi && (Xt[Gt][Vn] = xi), xi;
  }
  function pt(Ut, Vn) {
    return Vn && (Ut = Ut.replace(/\{([^}]+)}/g, function (Gt, xi) {
      return null != Vn && xi in Vn ? Vn[xi] : Gt;
    })), Ut;
  }
  function Dt(Ut, Vn, Gt = "-", xi, so) {
    let yr = "";
    (Ut < 0 || so && Ut <= 0) && (so ? Ut = 1 - Ut : (Ut = -Ut, yr = Gt));
    let Rr = String(Ut);
    for (; Rr.length < Vn;) Rr = "0" + Rr;
    return xi && (Rr = Rr.slice(Rr.length - Vn)), yr + Rr;
  }
  function Dn(Ut, Vn, Gt = 0, xi = !1, so = !1) {
    return function (yr, Rr) {
      let Ns = function vt(Ut, Vn) {
        switch (Ut) {
          case Ii.FullYear:
            return Vn.getFullYear();
          case Ii.Month:
            return Vn.getMonth();
          case Ii.Date:
            return Vn.getDate();
          case Ii.Hours:
            return Vn.getHours();
          case Ii.Minutes:
            return Vn.getMinutes();
          case Ii.Seconds:
            return Vn.getSeconds();
          case Ii.FractionalSeconds:
            return Vn.getMilliseconds();
          case Ii.Day:
            return Vn.getDay();
          default:
            throw new Error(`Unknown DateType value "${Ut}".`);
        }
      }(Ut, yr);
      if ((Gt > 0 || Ns > -Gt) && (Ns += Gt), Ut === Ii.Hours) 0 === Ns && -12 === Gt && (Ns = 12);else if (Ut === Ii.FractionalSeconds) return function Ht(Ut, Vn) {
        return Dt(Ut, 3).substring(0, Vn);
      }(Ns, Vn);
      const Ga = We(Rr, ye.MinusSign);
      return Dt(Ns, Vn, Ga, xi, so);
    };
  }
  function an(Ut, Vn, Gt = ke.Format, xi = !1) {
    return function (so, yr) {
      return function li(Ut, Vn, Gt, xi, so, yr) {
        switch (Gt) {
          case yi.Months:
            return function pe(Ut, Vn, Gt) {
              const xi = (0, t.cg1)(Ut),
                yr = Ke([xi[t.wAp.MonthsFormat], xi[t.wAp.MonthsStandalone]], Vn);
              return Ke(yr, Gt);
            }(Vn, so, xi)[Ut.getMonth()];
          case yi.Days:
            return function te(Ut, Vn, Gt) {
              const xi = (0, t.cg1)(Ut),
                yr = Ke([xi[t.wAp.DaysFormat], xi[t.wAp.DaysStandalone]], Vn);
              return Ke(yr, Gt);
            }(Vn, so, xi)[Ut.getDay()];
          case yi.DayPeriods:
            const Rr = Ut.getHours(),
              Ns = Ut.getMinutes();
            if (yr) {
              const Ma = function Et(Ut) {
                  const Vn = (0, t.cg1)(Ut);
                  return Ft(Vn), (Vn[t.wAp.ExtraData][2] || []).map(xi => "string" == typeof xi ? Ze(xi) : [Ze(xi[0]), Ze(xi[1])]);
                }(Vn),
                Ia = function Ue(Ut, Vn, Gt) {
                  const xi = (0, t.cg1)(Ut);
                  Ft(xi);
                  const yr = Ke([xi[t.wAp.ExtraData][0], xi[t.wAp.ExtraData][1]], Vn) || [];
                  return Ke(yr, Gt) || [];
                }(Vn, so, xi),
                Ea = Ma.findIndex(Ll => {
                  if (Array.isArray(Ll)) {
                    const [Za, sl] = Ll,
                      pl = Rr >= Za.hours && Ns >= Za.minutes,
                      ql = Rr < sl.hours || Rr === sl.hours && Ns < sl.minutes;
                    if (Za.hours < sl.hours) {
                      if (pl && ql) return !0;
                    } else if (pl || ql) return !0;
                  } else if (Ll.hours === Rr && Ll.minutes === Ns) return !0;
                  return !1;
                });
              if (-1 !== Ea) return Ia[Ea];
            }
            return function G(Ut, Vn, Gt) {
              const xi = (0, t.cg1)(Ut),
                yr = Ke([xi[t.wAp.DayPeriodsFormat], xi[t.wAp.DayPeriodsStandalone]], Vn);
              return Ke(yr, Gt);
            }(Vn, so, xi)[Rr < 12 ? 0 : 1];
          case yi.Eras:
            return function be(Ut, Vn) {
              return Ke((0, t.cg1)(Ut)[t.wAp.Eras], Vn);
            }(Vn, xi)[Ut.getFullYear() <= 0 ? 0 : 1];
          default:
            throw new Error(`unexpected translation type ${Gt}`);
        }
      }(so, yr, Ut, Vn, Gt, xi);
    };
  }
  function zn(Ut) {
    return function (Vn, Gt, xi) {
      const so = -1 * xi,
        yr = We(Gt, ye.MinusSign),
        Rr = so > 0 ? Math.floor(so / 60) : Math.ceil(so / 60);
      switch (Ut) {
        case Pi.Short:
          return (so >= 0 ? "+" : "") + Dt(Rr, 2, yr) + Dt(Math.abs(so % 60), 2, yr);
        case Pi.ShortGMT:
          return "GMT" + (so >= 0 ? "+" : "") + Dt(Rr, 1, yr);
        case Pi.Long:
          return "GMT" + (so >= 0 ? "+" : "") + Dt(Rr, 2, yr) + ":" + Dt(Math.abs(so % 60), 2, yr);
        case Pi.Extended:
          return 0 === xi ? "Z" : (so >= 0 ? "+" : "") + Dt(Rr, 2, yr) + ":" + Dt(Math.abs(so % 60), 2, yr);
        default:
          throw new Error(`Unknown zone width "${Ut}"`);
      }
    };
  }
  const $t = 0,
    Mn = 4;
  function In(Ut) {
    return Jo(Ut.getFullYear(), Ut.getMonth(), Ut.getDate() + (Mn - Ut.getDay()));
  }
  function ui(Ut, Vn = !1) {
    return function (Gt, xi) {
      let so;
      if (Vn) {
        const yr = new Date(Gt.getFullYear(), Gt.getMonth(), 1).getDay() - 1,
          Rr = Gt.getDate();
        so = 1 + Math.floor((Rr + yr) / 7);
      } else {
        const yr = In(Gt),
          Rr = function Qn(Ut) {
            const Vn = Jo(Ut, $t, 1).getDay();
            return Jo(Ut, 0, 1 + (Vn <= Mn ? Mn : Mn + 7) - Vn);
          }(yr.getFullYear()),
          Ns = yr.getTime() - Rr.getTime();
        so = 1 + Math.round(Ns / 6048e5);
      }
      return Dt(so, Ut, We(xi, ye.MinusSign));
    };
  }
  function To(Ut, Vn = !1) {
    return function (Gt, xi) {
      return Dt(In(Gt).getFullYear(), Ut, We(xi, ye.MinusSign), Vn);
    };
  }
  const bi = {};
  function Xn(Ut, Vn) {
    Ut = Ut.replace(/:/g, "");
    const Gt = Date.parse("Jan 01, 1970 00:00:00 " + Ut) / 6e4;
    return isNaN(Gt) ? Vn : Gt;
  }
  function Pr(Ut) {
    return Ut instanceof Date && !isNaN(Ut.valueOf());
  }
  function us(Ut, Vn, Gt) {
    return (0, t.dwT)(Ut, Vn, Gt);
  }
  function Ps(Ut, Vn) {
    Vn = encodeURIComponent(Vn);
    for (const Gt of Ut.split(";")) {
      const xi = Gt.indexOf("="),
        [so, yr] = -1 == xi ? [Gt, ""] : [Gt.slice(0, xi), Gt.slice(xi + 1)];
      if (so.trim() === Vn) return decodeURIComponent(yr);
    }
    return null;
  }
  const hs = /\s+/,
    oi = [];
  let yo = (() => {
      class Ut {
        constructor(Gt, xi, so, yr) {
          this._iterableDiffers = Gt, this._keyValueDiffers = xi, this._ngEl = so, this._renderer = yr, this.initialClasses = oi, this.stateMap = new Map();
        }
        set klass(Gt) {
          this.initialClasses = null != Gt ? Gt.trim().split(hs) : oi;
        }
        set ngClass(Gt) {
          this.rawClass = "string" == typeof Gt ? Gt.trim().split(hs) : Gt;
        }
        ngDoCheck() {
          for (const xi of this.initialClasses) this._updateState(xi, !0);
          const Gt = this.rawClass;
          if (Array.isArray(Gt) || Gt instanceof Set) for (const xi of Gt) this._updateState(xi, !0);else if (null != Gt) for (const xi of Object.keys(Gt)) this._updateState(xi, Boolean(Gt[xi]));
          this._applyStateDiff();
        }
        _updateState(Gt, xi) {
          const so = this.stateMap.get(Gt);
          void 0 !== so ? (so.enabled !== xi && (so.changed = !0, so.enabled = xi), so.touched = !0) : this.stateMap.set(Gt, {
            enabled: xi,
            changed: !0,
            touched: !0
          });
        }
        _applyStateDiff() {
          for (const Gt of this.stateMap) {
            const xi = Gt[0],
              so = Gt[1];
            so.changed ? (this._toggleClass(xi, so.enabled), so.changed = !1) : so.touched || (so.enabled && this._toggleClass(xi, !1), this.stateMap.delete(xi)), so.touched = !1;
          }
        }
        _toggleClass(Gt, xi) {
          (Gt = Gt.trim()).length > 0 && Gt.split(hs).forEach(so => {
            xi ? this._renderer.addClass(this._ngEl.nativeElement, so) : this._renderer.removeClass(this._ngEl.nativeElement, so);
          });
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.ZZ4), t.Y36(t.aQg), t.Y36(t.SBq), t.Y36(t.Qsj));
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngClass", ""]],
        inputs: {
          klass: ["class", "klass"],
          ngClass: "ngClass"
        },
        standalone: !0
      }), Ut;
    })(),
    Qi = (() => {
      class Ut {
        constructor(Gt) {
          this._viewContainerRef = Gt, this.ngComponentOutlet = null;
        }
        ngOnChanges(Gt) {
          const {
            _viewContainerRef: xi,
            ngComponentOutletNgModule: so,
            ngComponentOutletNgModuleFactory: yr
          } = this;
          if (xi.clear(), this._componentRef = void 0, this.ngComponentOutlet) {
            const Rr = this.ngComponentOutletInjector || xi.parentInjector;
            (Gt.ngComponentOutletNgModule || Gt.ngComponentOutletNgModuleFactory) && (this._moduleRef && this._moduleRef.destroy(), this._moduleRef = so ? (0, t.Lck)(so, Qo(Rr)) : yr ? yr.create(Qo(Rr)) : void 0), this._componentRef = xi.createComponent(this.ngComponentOutlet, {
              index: xi.length,
              injector: Rr,
              ngModuleRef: this._moduleRef,
              projectableNodes: this.ngComponentOutletContent
            });
          }
        }
        ngOnDestroy() {
          this._moduleRef && this._moduleRef.destroy();
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.s_b));
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngComponentOutlet", ""]],
        inputs: {
          ngComponentOutlet: "ngComponentOutlet",
          ngComponentOutletInjector: "ngComponentOutletInjector",
          ngComponentOutletContent: "ngComponentOutletContent",
          ngComponentOutletNgModule: "ngComponentOutletNgModule",
          ngComponentOutletNgModuleFactory: "ngComponentOutletNgModuleFactory"
        },
        standalone: !0,
        features: [t.TTD]
      }), Ut;
    })();
  function Qo(Ut) {
    return Ut.get(t.h0i).injector;
  }
  class _s {
    constructor(Vn, Gt, xi, so) {
      this.$implicit = Vn, this.ngForOf = Gt, this.index = xi, this.count = so;
    }
    get first() {
      return 0 === this.index;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 == 0;
    }
    get odd() {
      return !this.even;
    }
  }
  let ra = (() => {
    class Ut {
      set ngForOf(Gt) {
        this._ngForOf = Gt, this._ngForOfDirty = !0;
      }
      set ngForTrackBy(Gt) {
        this._trackByFn = Gt;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      constructor(Gt, xi, so) {
        this._viewContainer = Gt, this._template = xi, this._differs = so, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null;
      }
      set ngForTemplate(Gt) {
        Gt && (this._template = Gt);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          const Gt = this._ngForOf;
          !this._differ && Gt && (this._differ = this._differs.find(Gt).create(this.ngForTrackBy));
        }
        if (this._differ) {
          const Gt = this._differ.diff(this._ngForOf);
          Gt && this._applyChanges(Gt);
        }
      }
      _applyChanges(Gt) {
        const xi = this._viewContainer;
        Gt.forEachOperation((so, yr, Rr) => {
          if (null == so.previousIndex) xi.createEmbeddedView(this._template, new _s(so.item, this._ngForOf, -1, -1), null === Rr ? void 0 : Rr);else if (null == Rr) xi.remove(null === yr ? void 0 : yr);else if (null !== yr) {
            const Ns = xi.get(yr);
            xi.move(Ns, Rr), Or(Ns, so);
          }
        });
        for (let so = 0, yr = xi.length; so < yr; so++) {
          const Ns = xi.get(so).context;
          Ns.index = so, Ns.count = yr, Ns.ngForOf = this._ngForOf;
        }
        Gt.forEachIdentityChange(so => {
          Or(xi.get(so.currentIndex), so);
        });
      }
      static ngTemplateContextGuard(Gt, xi) {
        return !0;
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)(t.Y36(t.s_b), t.Y36(t.Rgc), t.Y36(t.ZZ4));
    }, Ut.ɵdir = t.lG2({
      type: Ut,
      selectors: [["", "ngFor", "", "ngForOf", ""]],
      inputs: {
        ngForOf: "ngForOf",
        ngForTrackBy: "ngForTrackBy",
        ngForTemplate: "ngForTemplate"
      },
      standalone: !0
    }), Ut;
  })();
  function Or(Ut, Vn) {
    Ut.context.$implicit = Vn.item;
  }
  let xa = (() => {
    class Ut {
      constructor(Gt, xi) {
        this._viewContainer = Gt, this._context = new rs(), this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = xi;
      }
      set ngIf(Gt) {
        this._context.$implicit = this._context.ngIf = Gt, this._updateView();
      }
      set ngIfThen(Gt) {
        Js("ngIfThen", Gt), this._thenTemplateRef = Gt, this._thenViewRef = null, this._updateView();
      }
      set ngIfElse(Gt) {
        Js("ngIfElse", Gt), this._elseTemplateRef = Gt, this._elseViewRef = null, this._updateView();
      }
      _updateView() {
        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
      }
      static ngTemplateContextGuard(Gt, xi) {
        return !0;
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)(t.Y36(t.s_b), t.Y36(t.Rgc));
    }, Ut.ɵdir = t.lG2({
      type: Ut,
      selectors: [["", "ngIf", ""]],
      inputs: {
        ngIf: "ngIf",
        ngIfThen: "ngIfThen",
        ngIfElse: "ngIfElse"
      },
      standalone: !0
    }), Ut;
  })();
  class rs {
    constructor() {
      this.$implicit = null, this.ngIf = null;
    }
  }
  function Js(Ut, Vn) {
    if (Vn && !Vn.createEmbeddedView) throw new Error(`${Ut} must be a TemplateRef, but received '${(0, t.AaK)(Vn)}'.`);
  }
  class ho {
    constructor(Vn, Gt) {
      this._viewContainerRef = Vn, this._templateRef = Gt, this._created = !1;
    }
    create() {
      this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    destroy() {
      this._created = !1, this._viewContainerRef.clear();
    }
    enforceState(Vn) {
      Vn && !this._created ? this.create() : !Vn && this._created && this.destroy();
    }
  }
  let uo = (() => {
      class Ut {
        constructor() {
          this._defaultViews = [], this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1;
        }
        set ngSwitch(Gt) {
          this._ngSwitch = Gt, 0 === this._caseCount && this._updateDefaultCases(!0);
        }
        _addCase() {
          return this._caseCount++;
        }
        _addDefault(Gt) {
          this._defaultViews.push(Gt);
        }
        _matchCase(Gt) {
          const xi = Gt == this._ngSwitch;
          return this._lastCasesMatched = this._lastCasesMatched || xi, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), xi;
        }
        _updateDefaultCases(Gt) {
          if (this._defaultViews.length > 0 && Gt !== this._defaultUsed) {
            this._defaultUsed = Gt;
            for (const xi of this._defaultViews) xi.enforceState(Gt);
          }
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)();
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngSwitch", ""]],
        inputs: {
          ngSwitch: "ngSwitch"
        },
        standalone: !0
      }), Ut;
    })(),
    ri = (() => {
      class Ut {
        constructor(Gt, xi, so) {
          this.ngSwitch = so, so._addCase(), this._view = new ho(Gt, xi);
        }
        ngDoCheck() {
          this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.s_b), t.Y36(t.Rgc), t.Y36(uo, 9));
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngSwitchCase", ""]],
        inputs: {
          ngSwitchCase: "ngSwitchCase"
        },
        standalone: !0
      }), Ut;
    })(),
    Yt = (() => {
      class Ut {
        constructor(Gt, xi, so) {
          so._addDefault(new ho(Gt, xi));
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.s_b), t.Y36(t.Rgc), t.Y36(uo, 9));
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngSwitchDefault", ""]],
        standalone: !0
      }), Ut;
    })(),
    di = (() => {
      class Ut {
        constructor(Gt, xi, so) {
          this._ngEl = Gt, this._differs = xi, this._renderer = so, this._ngStyle = null, this._differ = null;
        }
        set ngStyle(Gt) {
          this._ngStyle = Gt, !this._differ && Gt && (this._differ = this._differs.find(Gt).create());
        }
        ngDoCheck() {
          if (this._differ) {
            const Gt = this._differ.diff(this._ngStyle);
            Gt && this._applyChanges(Gt);
          }
        }
        _setStyle(Gt, xi) {
          const [so, yr] = Gt.split("."),
            Rr = -1 === so.indexOf("-") ? void 0 : t.JOm.DashCase;
          null != xi ? this._renderer.setStyle(this._ngEl.nativeElement, so, yr ? `${xi}${yr}` : xi, Rr) : this._renderer.removeStyle(this._ngEl.nativeElement, so, Rr);
        }
        _applyChanges(Gt) {
          Gt.forEachRemovedItem(xi => this._setStyle(xi.key, null)), Gt.forEachAddedItem(xi => this._setStyle(xi.key, xi.currentValue)), Gt.forEachChangedItem(xi => this._setStyle(xi.key, xi.currentValue));
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.SBq), t.Y36(t.aQg), t.Y36(t.Qsj));
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngStyle", ""]],
        inputs: {
          ngStyle: "ngStyle"
        },
        standalone: !0
      }), Ut;
    })(),
    Gn = (() => {
      class Ut {
        constructor(Gt) {
          this._viewContainerRef = Gt, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null, this.ngTemplateOutletInjector = null;
        }
        ngOnChanges(Gt) {
          if (Gt.ngTemplateOutlet || Gt.ngTemplateOutletInjector) {
            const xi = this._viewContainerRef;
            if (this._viewRef && xi.remove(xi.indexOf(this._viewRef)), this.ngTemplateOutlet) {
              const {
                ngTemplateOutlet: so,
                ngTemplateOutletContext: yr,
                ngTemplateOutletInjector: Rr
              } = this;
              this._viewRef = xi.createEmbeddedView(so, yr, Rr ? {
                injector: Rr
              } : void 0);
            } else this._viewRef = null;
          } else this._viewRef && Gt.ngTemplateOutletContext && this.ngTemplateOutletContext && (this._viewRef.context = this.ngTemplateOutletContext);
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.s_b));
      }, Ut.ɵdir = t.lG2({
        type: Ut,
        selectors: [["", "ngTemplateOutlet", ""]],
        inputs: {
          ngTemplateOutletContext: "ngTemplateOutletContext",
          ngTemplateOutlet: "ngTemplateOutlet",
          ngTemplateOutletInjector: "ngTemplateOutletInjector"
        },
        standalone: !0,
        features: [t.TTD]
      }), Ut;
    })();
  function wo(Ut, Vn) {
    return new t.vHH(2100, !1);
  }
  class Ro {
    createSubscription(Vn, Gt) {
      return Vn.subscribe({
        next: Gt,
        error: xi => {
          throw xi;
        }
      });
    }
    dispose(Vn) {
      Vn.unsubscribe();
    }
  }
  class _r {
    createSubscription(Vn, Gt) {
      return Vn.then(Gt, xi => {
        throw xi;
      });
    }
    dispose(Vn) {}
  }
  const qr = new _r(),
    Ts = new Ro();
  let js = (() => {
    class Ut {
      constructor(Gt) {
        this._latestValue = null, this._subscription = null, this._obj = null, this._strategy = null, this._ref = Gt;
      }
      ngOnDestroy() {
        this._subscription && this._dispose(), this._ref = null;
      }
      transform(Gt) {
        return this._obj ? Gt !== this._obj ? (this._dispose(), this.transform(Gt)) : this._latestValue : (Gt && this._subscribe(Gt), this._latestValue);
      }
      _subscribe(Gt) {
        this._obj = Gt, this._strategy = this._selectStrategy(Gt), this._subscription = this._strategy.createSubscription(Gt, xi => this._updateLatestValue(Gt, xi));
      }
      _selectStrategy(Gt) {
        if ((0, t.QGY)(Gt)) return qr;
        if ((0, t.F4k)(Gt)) return Ts;
        throw wo();
      }
      _dispose() {
        this._strategy.dispose(this._subscription), this._latestValue = null, this._subscription = null, this._obj = null;
      }
      _updateLatestValue(Gt, xi) {
        Gt === this._obj && (this._latestValue = xi, this._ref.markForCheck());
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)(t.Y36(t.sBO, 16));
    }, Ut.ɵpipe = t.Yjl({
      name: "async",
      type: Ut,
      pure: !1,
      standalone: !0
    }), Ut;
  })();
  const Us = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
  let Ws = (() => {
    class Ut {
      transform(Gt) {
        if (null == Gt) return null;
        if ("string" != typeof Gt) throw wo();
        return Gt.replace(Us, xi => xi[0].toUpperCase() + xi.slice(1).toLowerCase());
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)();
    }, Ut.ɵpipe = t.Yjl({
      name: "titlecase",
      type: Ut,
      pure: !0,
      standalone: !0
    }), Ut;
  })();
  const ua = new t.OlP("DATE_PIPE_DEFAULT_TIMEZONE"),
    da = new t.OlP("DATE_PIPE_DEFAULT_OPTIONS");
  let na = (() => {
      class Ut {
        constructor(Gt, xi, so) {
          this.locale = Gt, this.defaultTimezone = xi, this.defaultOptions = so;
        }
        transform(Gt, xi, so, yr) {
          if (null == Gt || "" === Gt || Gt != Gt) return null;
          try {
            return co(Gt, xi ?? this.defaultOptions?.dateFormat ?? "mediumDate", yr || this.locale, so ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0);
          } catch (Rr) {
            throw wo();
          }
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.soG, 16), t.Y36(ua, 24), t.Y36(da, 24));
      }, Ut.ɵpipe = t.Yjl({
        name: "date",
        type: Ut,
        pure: !0,
        standalone: !0
      }), Ut;
    })(),
    ba = (() => {
      class Ut {
        constructor(Gt) {
          this.differs = Gt, this.keyValues = [], this.compareFn = qs;
        }
        transform(Gt, xi = qs) {
          if (!Gt || !(Gt instanceof Map) && "object" != typeof Gt) return null;
          this.differ || (this.differ = this.differs.find(Gt).create());
          const so = this.differ.diff(Gt),
            yr = xi !== this.compareFn;
          return so && (this.keyValues = [], so.forEachItem(Rr => {
            this.keyValues.push(function Va(Ut, Vn) {
              return {
                key: Ut,
                value: Vn
              };
            }(Rr.key, Rr.currentValue));
          })), (so || yr) && (this.keyValues.sort(xi), this.compareFn = xi), this.keyValues;
        }
      }
      return Ut.ɵfac = function (Gt) {
        return new (Gt || Ut)(t.Y36(t.aQg, 16));
      }, Ut.ɵpipe = t.Yjl({
        name: "keyvalue",
        type: Ut,
        pure: !1,
        standalone: !0
      }), Ut;
    })();
  function qs(Ut, Vn) {
    const Gt = Ut.key,
      xi = Vn.key;
    if (Gt === xi) return 0;
    if (void 0 === Gt) return 1;
    if (void 0 === xi) return -1;
    if (null === Gt) return 1;
    if (null === xi) return -1;
    if ("string" == typeof Gt && "string" == typeof xi) return Gt < xi ? -1 : 1;
    if ("number" == typeof Gt && "number" == typeof xi) return Gt - xi;
    if ("boolean" == typeof Gt && "boolean" == typeof xi) return Gt < xi ? -1 : 1;
    const so = String(Gt),
      yr = String(xi);
    return so == yr ? 0 : so < yr ? -1 : 1;
  }
  let gi = (() => {
    class Ut {}
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)();
    }, Ut.ɵmod = t.oAB({
      type: Ut
    }), Ut.ɵinj = t.cJS({}), Ut;
  })();
  const Kt = "browser",
    Vt = "server";
  function xo(Ut) {
    return Ut === Kt;
  }
  function No(Ut) {
    return Ut === Vt;
  }
  let At = (() => {
    class Ut {}
    return Ut.ɵprov = (0, t.Yz7)({
      token: Ut,
      providedIn: "root",
      factory: () => new _n((0, t.LFG)(M), window)
    }), Ut;
  })();
  class _n {
    constructor(Vn, Gt) {
      this.document = Vn, this.window = Gt, this.offset = () => [0, 0];
    }
    setOffset(Vn) {
      this.offset = Array.isArray(Vn) ? () => Vn : Vn;
    }
    getScrollPosition() {
      return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0];
    }
    scrollToPosition(Vn) {
      this.supportsScrolling() && this.window.scrollTo(Vn[0], Vn[1]);
    }
    scrollToAnchor(Vn) {
      if (!this.supportsScrolling()) return;
      const Gt = function _e(Ut, Vn) {
        const Gt = Ut.getElementById(Vn) || Ut.getElementsByName(Vn)[0];
        if (Gt) return Gt;
        if ("function" == typeof Ut.createTreeWalker && Ut.body && (Ut.body.createShadowRoot || Ut.body.attachShadow)) {
          const xi = Ut.createTreeWalker(Ut.body, NodeFilter.SHOW_ELEMENT);
          let so = xi.currentNode;
          for (; so;) {
            const yr = so.shadowRoot;
            if (yr) {
              const Rr = yr.getElementById(Vn) || yr.querySelector(`[name="${Vn}"]`);
              if (Rr) return Rr;
            }
            so = xi.nextNode();
          }
        }
        return null;
      }(this.document, Vn);
      Gt && (this.scrollToElement(Gt), Gt.focus());
    }
    setHistoryScrollRestoration(Vn) {
      if (this.supportScrollRestoration()) {
        const Gt = this.window.history;
        Gt && Gt.scrollRestoration && (Gt.scrollRestoration = Vn);
      }
    }
    scrollToElement(Vn) {
      const Gt = Vn.getBoundingClientRect(),
        xi = Gt.left + this.window.pageXOffset,
        so = Gt.top + this.window.pageYOffset,
        yr = this.offset();
      this.window.scrollTo(xi - yr[0], so - yr[1]);
    }
    supportScrollRestoration() {
      try {
        if (!this.supportsScrolling()) return !1;
        const Vn = it(this.window.history) || it(Object.getPrototypeOf(this.window.history));
        return !(!Vn || !Vn.writable && !Vn.set);
      } catch {
        return !1;
      }
    }
    supportsScrolling() {
      try {
        return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window;
      } catch {
        return !1;
      }
    }
  }
  function it(Ut) {
    return Object.getOwnPropertyDescriptor(Ut, "scrollRestoration");
  }
  class ni {}
  const aa = Ut => Ut.src,
    Ka = new t.OlP("ImageLoader", {
      providedIn: "root",
      factory: () => aa
    }),
    St = new t.OlP("NG_OPTIMIZED_PRELOADED_IMAGES", {
      providedIn: "root",
      factory: () => new Set()
    });
  let Wi = (() => {
    class Ut {
      constructor() {
        this.preloadedImages = (0, t.f3M)(St), this.document = (0, t.f3M)(M);
      }
      createPreloadLinkTag(Gt, xi, so, yr) {
        if (this.preloadedImages.has(xi)) return;
        this.preloadedImages.add(xi);
        const Rr = Gt.createElement("link");
        Gt.setAttribute(Rr, "as", "image"), Gt.setAttribute(Rr, "href", xi), Gt.setAttribute(Rr, "rel", "preload"), Gt.setAttribute(Rr, "fetchpriority", "high"), yr && Gt.setAttribute(Rr, "imageSizes", yr), so && Gt.setAttribute(Rr, "imageSrcset", so), Gt.appendChild(this.document.head, Rr);
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)();
    }, Ut.ɵprov = t.Yz7({
      token: Ut,
      factory: Ut.ɵfac,
      providedIn: "root"
    }), Ut;
  })();
  const Ki = /^((\s*\d+w\s*(,|$)){1,})$/,
    Qr = [1, 2],
    Yc = {
      breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    },
    nu = new t.OlP("ImageConfig", {
      providedIn: "root",
      factory: () => Yc
    });
  let kl = (() => {
    class Ut {
      constructor() {
        this.imageLoader = (0, t.f3M)(Ka), this.config = function gc(Ut) {
          let Vn = {};
          return Ut.breakpoints && (Vn.breakpoints = Ut.breakpoints.sort((Gt, xi) => Gt - xi)), Object.assign({}, Yc, Ut, Vn);
        }((0, t.f3M)(nu)), this.renderer = (0, t.f3M)(t.Qsj), this.imgElement = (0, t.f3M)(t.SBq).nativeElement, this.injector = (0, t.f3M)(t.zs3), this.isServer = No((0, t.f3M)(t.Lbi)), this.preloadLinkChecker = (0, t.f3M)(Wi), this.lcpObserver = null, this._renderedSrc = null, this._priority = !1, this._disableOptimizedSrcset = !1, this._fill = !1;
      }
      set width(Gt) {
        this._width = mu(Gt);
      }
      get width() {
        return this._width;
      }
      set height(Gt) {
        this._height = mu(Gt);
      }
      get height() {
        return this._height;
      }
      set priority(Gt) {
        this._priority = Wc(Gt);
      }
      get priority() {
        return this._priority;
      }
      set disableOptimizedSrcset(Gt) {
        this._disableOptimizedSrcset = Wc(Gt);
      }
      get disableOptimizedSrcset() {
        return this._disableOptimizedSrcset;
      }
      set fill(Gt) {
        this._fill = Wc(Gt);
      }
      get fill() {
        return this._fill;
      }
      ngOnInit() {
        this.setHostAttributes();
      }
      setHostAttributes() {
        this.fill ? this.sizes || (this.sizes = "100vw") : (this.setHostAttribute("width", this.width.toString()), this.setHostAttribute("height", this.height.toString())), this.setHostAttribute("loading", this.getLoadingBehavior()), this.setHostAttribute("fetchpriority", this.getFetchPriority()), this.setHostAttribute("ng-img", "true");
        const Gt = this.getRewrittenSrc();
        let xi;
        this.setHostAttribute("src", Gt), this.sizes && this.setHostAttribute("sizes", this.sizes), this.ngSrcset ? xi = this.getRewrittenSrcset() : this.shouldGenerateAutomaticSrcset() && (xi = this.getAutomaticSrcset()), xi && this.setHostAttribute("srcset", xi), this.isServer && this.priority && this.preloadLinkChecker.createPreloadLinkTag(this.renderer, Gt, xi, this.sizes);
      }
      ngOnChanges(Gt) {}
      callImageLoader(Gt) {
        let xi = Gt;
        return this.loaderParams && (xi.loaderParams = this.loaderParams), this.imageLoader(xi);
      }
      getLoadingBehavior() {
        return this.priority || void 0 === this.loading ? this.priority ? "eager" : "lazy" : this.loading;
      }
      getFetchPriority() {
        return this.priority ? "high" : "auto";
      }
      getRewrittenSrc() {
        return this._renderedSrc || (this._renderedSrc = this.callImageLoader({
          src: this.ngSrc
        })), this._renderedSrc;
      }
      getRewrittenSrcset() {
        const Gt = Ki.test(this.ngSrcset);
        return this.ngSrcset.split(",").filter(so => "" !== so).map(so => {
          so = so.trim();
          const yr = Gt ? parseFloat(so) : parseFloat(so) * this.width;
          return `${this.callImageLoader({
            src: this.ngSrc,
            width: yr
          })} ${so}`;
        }).join(", ");
      }
      getAutomaticSrcset() {
        return this.sizes ? this.getResponsiveSrcset() : this.getFixedSrcset();
      }
      getResponsiveSrcset() {
        const {
          breakpoints: Gt
        } = this.config;
        let xi = Gt;
        return "100vw" === this.sizes?.trim() && (xi = Gt.filter(yr => yr >= 640)), xi.map(yr => `${this.callImageLoader({
          src: this.ngSrc,
          width: yr
        })} ${yr}w`).join(", ");
      }
      getFixedSrcset() {
        return Qr.map(xi => `${this.callImageLoader({
          src: this.ngSrc,
          width: this.width * xi
        })} ${xi}x`).join(", ");
      }
      shouldGenerateAutomaticSrcset() {
        return !this._disableOptimizedSrcset && !this.srcset && this.imageLoader !== aa && !(this.width > 1920 || this.height > 1080);
      }
      ngOnDestroy() {}
      setHostAttribute(Gt, xi) {
        this.renderer.setAttribute(this.imgElement, Gt, xi);
      }
    }
    return Ut.ɵfac = function (Gt) {
      return new (Gt || Ut)();
    }, Ut.ɵdir = t.lG2({
      type: Ut,
      selectors: [["img", "ngSrc", ""]],
      hostVars: 8,
      hostBindings: function (Gt, xi) {
        2 & Gt && t.Udp("position", xi.fill ? "absolute" : null)("width", xi.fill ? "100%" : null)("height", xi.fill ? "100%" : null)("inset", xi.fill ? "0px" : null);
      },
      inputs: {
        ngSrc: "ngSrc",
        ngSrcset: "ngSrcset",
        sizes: "sizes",
        width: "width",
        height: "height",
        loading: "loading",
        priority: "priority",
        loaderParams: "loaderParams",
        disableOptimizedSrcset: "disableOptimizedSrcset",
        fill: "fill",
        src: "src",
        srcset: "srcset"
      },
      standalone: !0,
      features: [t.TTD]
    }), Ut;
  })();
  function mu(Ut) {
    return "string" == typeof Ut ? parseInt(Ut, 10) : Ut;
  }
  function Wc(Ut) {
    return null != Ut && "false" != `${Ut}`;
  }
});
