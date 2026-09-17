// Extracted from main; webpack module 3279. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    gz: () => ua,
    m2: () => Kr,
    F0: () => Ja,
    rH: () => Hc,
    Od: () => tc,
    yS: () => Hc,
    Bz: () => qc,
    lC: () => pi,
    bU: () => bu
  });
  var t = i(94650),
    e = i(80188),
    a = i(39646),
    m = i(61135),
    d = i(86805),
    M = i(39841),
    b = i(97272),
    A = i(49770),
    N = i(89635),
    I = i(62843),
    O = i(69751),
    L = i(60515),
    C = i(94033),
    v = i(77579),
    f = i(36895),
    E = i(54004),
    h = i(63900),
    x = i(95698),
    u = i(68675),
    T = i(39300),
    R = i(95577),
    B = i(50590),
    y = i(24351),
    j = i(18505),
    W = i(70262),
    F = i(22940),
    Le = i(13103),
    ke = i(54482),
    J = i(25403),
    ye = i(46590),
    ae = i(52035),
    Y = i(69718),
    G = i(28746),
    te = i(38343),
    pe = i(8189),
    be = i(11481);
  const le = "primary",
    n = Symbol("RouteTitle");
  class Se {
    constructor(se) {
      this.params = se || {};
    }
    has(se) {
      return Object.prototype.hasOwnProperty.call(this.params, se);
    }
    get(se) {
      if (this.has(se)) {
        const re = this.params[se];
        return Array.isArray(re) ? re[0] : re;
      }
      return null;
    }
    getAll(se) {
      if (this.has(se)) {
        const re = this.params[se];
        return Array.isArray(re) ? re : [re];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  }
  function qe(Q) {
    return new Se(Q);
  }
  function Rt(Q, se, re) {
    const Ce = re.path.split("/");
    if (Ce.length > Q.length || "full" === re.pathMatch && (se.hasChildren() || Ce.length < Q.length)) return null;
    const Be = {};
    for (let dt = 0; dt < Ce.length; dt++) {
      const Ot = Ce[dt],
        Qt = Q[dt];
      if (Ot.startsWith(":")) Be[Ot.substring(1)] = Qt;else if (Ot !== Qt.path) return null;
    }
    return {
      consumed: Q.slice(0, Ce.length),
      posParams: Be
    };
  }
  function Re(Q, se) {
    const re = Q ? Object.keys(Q) : void 0,
      Ce = se ? Object.keys(se) : void 0;
    if (!re || !Ce || re.length != Ce.length) return !1;
    let Be;
    for (let dt = 0; dt < re.length; dt++) if (Be = re[dt], !st(Q[Be], se[Be])) return !1;
    return !0;
  }
  function st(Q, se) {
    if (Array.isArray(Q) && Array.isArray(se)) {
      if (Q.length !== se.length) return !1;
      const re = [...Q].sort(),
        Ce = [...se].sort();
      return re.every((Be, dt) => Ce[dt] === Be);
    }
    return Q === se;
  }
  function q(Q) {
    return Array.prototype.concat.apply([], Q);
  }
  function mt(Q) {
    return Q.length > 0 ? Q[Q.length - 1] : null;
  }
  function Ct(Q, se) {
    for (const re in Q) Q.hasOwnProperty(re) && se(Q[re], re);
  }
  function Ft(Q) {
    return (0, t.CqO)(Q) ? Q : (0, t.QGY)(Q) ? (0, e.D)(Promise.resolve(Q)) : (0, a.of)(Q);
  }
  const Et = !1,
    Ue = {
      exact: function Ee(Q, se, re) {
        if (!co(Q.segments, se.segments) || !Xt(Q.segments, se.segments, re) || Q.numberOfChildren !== se.numberOfChildren) return !1;
        for (const Ce in se.children) if (!Q.children[Ce] || !Ee(Q.children[Ce], se.children[Ce], re)) return !1;
        return !0;
      },
      subset: Mt
    },
    Me = {
      exact: function Ze(Q, se) {
        return Re(Q, se);
      },
      subset: function je(Q, se) {
        return Object.keys(se).length <= Object.keys(Q).length && Object.keys(se).every(re => st(Q[re], se[re]));
      },
      ignored: () => !0
    };
  function Ke(Q, se, re) {
    return Ue[re.paths](Q.root, se.root, re.matrixParams) && Me[re.queryParams](Q.queryParams, se.queryParams) && !("exact" === re.fragment && Q.fragment !== se.fragment);
  }
  function Mt(Q, se, re) {
    return Je(Q, se, se.segments, re);
  }
  function Je(Q, se, re, Ce) {
    if (Q.segments.length > re.length) {
      const Be = Q.segments.slice(0, re.length);
      return !(!co(Be, re) || se.hasChildren() || !Xt(Be, re, Ce));
    }
    if (Q.segments.length === re.length) {
      if (!co(Q.segments, re) || !Xt(Q.segments, re, Ce)) return !1;
      for (const Be in se.children) if (!Q.children[Be] || !Mt(Q.children[Be], se.children[Be], Ce)) return !1;
      return !0;
    }
    {
      const Be = re.slice(0, Q.segments.length),
        dt = re.slice(Q.segments.length);
      return !!(co(Q.segments, Be) && Xt(Q.segments, Be, Ce) && Q.children[le]) && Je(Q.children[le], se, dt, Ce);
    }
  }
  function Xt(Q, se, re) {
    return se.every((Ce, Be) => Me[re](Q[Be].parameters, Ce.parameters));
  }
  class Nn {
    constructor(se = new Pi([], {}), re = {}, Ce = null) {
      this.root = se, this.queryParams = re, this.fragment = Ce;
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = qe(this.queryParams)), this._queryParamMap;
    }
    toString() {
      return Dt.serialize(this);
    }
  }
  class Pi {
    constructor(se, re) {
      this.segments = se, this.children = re, this.parent = null, Ct(re, (Ce, Be) => Ce.parent = this);
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Ht(this);
    }
  }
  class Ii {
    constructor(se, re) {
      this.path = se, this.parameters = re;
    }
    get parameterMap() {
      return this._parameterMap || (this._parameterMap = qe(this.parameters)), this._parameterMap;
    }
    toString() {
      return Qn(this);
    }
  }
  function co(Q, se) {
    return Q.length === se.length && Q.every((re, Ce) => re.path === se[Ce].path);
  }
  let fr = (() => {
    class Q {}
    return Q.ɵfac = function (re) {
      return new (re || Q)();
    }, Q.ɵprov = t.Yz7({
      token: Q,
      factory: function () {
        return new pt();
      },
      providedIn: "root"
    }), Q;
  })();
  class pt {
    parse(se) {
      const re = new Fo(se);
      return new Nn(re.parseRootSegment(), re.parseQueryParams(), re.parseFragment());
    }
    serialize(se) {
      const re = `/${Dn(se.root, !0)}`,
        Ce = function ui(Q) {
          const se = Object.keys(Q).map(re => {
            const Ce = Q[re];
            return Array.isArray(Ce) ? Ce.map(Be => `${an(re)}=${an(Be)}`).join("&") : `${an(re)}=${an(Ce)}`;
          }).filter(re => !!re);
          return se.length ? `?${se.join("&")}` : "";
        }(se.queryParams);
      return `${re}${Ce}${"string" == typeof se.fragment ? `#${function li(Q) {
        return encodeURI(Q);
      }(se.fragment)}` : ""}`;
    }
  }
  const Dt = new pt();
  function Ht(Q) {
    return Q.segments.map(se => Qn(se)).join("/");
  }
  function Dn(Q, se) {
    if (!Q.hasChildren()) return Ht(Q);
    if (se) {
      const re = Q.children[le] ? Dn(Q.children[le], !1) : "",
        Ce = [];
      return Ct(Q.children, (Be, dt) => {
        dt !== le && Ce.push(`${dt}:${Dn(Be, !1)}`);
      }), Ce.length > 0 ? `${re}(${Ce.join("//")})` : re;
    }
    {
      const re = function Jo(Q, se) {
        let re = [];
        return Ct(Q.children, (Ce, Be) => {
          Be === le && (re = re.concat(se(Ce, Be)));
        }), Ct(Q.children, (Ce, Be) => {
          Be !== le && (re = re.concat(se(Ce, Be)));
        }), re;
      }(Q, (Ce, Be) => Be === le ? [Dn(Q.children[le], !1)] : [`${Be}:${Dn(Ce, !1)}`]);
      return 1 === Object.keys(Q.children).length && null != Q.children[le] ? `${Ht(Q)}/${re[0]}` : `${Ht(Q)}/(${re.join("//")})`;
    }
  }
  function vt(Q) {
    return encodeURIComponent(Q).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
  }
  function an(Q) {
    return vt(Q).replace(/%3B/gi, ";");
  }
  function zn(Q) {
    return vt(Q).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
  }
  function $t(Q) {
    return decodeURIComponent(Q);
  }
  function Mn(Q) {
    return $t(Q.replace(/\+/g, "%20"));
  }
  function Qn(Q) {
    return `${zn(Q.path)}${function In(Q) {
      return Object.keys(Q).map(se => `;${zn(se)}=${zn(Q[se])}`).join("");
    }(Q.parameters)}`;
  }
  const To = /^[^\/()?;=#]+/;
  function bi(Q) {
    const se = Q.match(To);
    return se ? se[0] : "";
  }
  const qn = /^[^=?&#]+/,
    Yi = /^[^&#]+/;
  class Fo {
    constructor(se) {
      this.url = se, this.remaining = se;
    }
    parseRootSegment() {
      return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Pi([], {}) : new Pi([], this.parseChildren());
    }
    parseQueryParams() {
      const se = {};
      if (this.consumeOptional("?")) do {
        this.parseQueryParam(se);
      } while (this.consumeOptional("&"));
      return se;
    }
    parseFragment() {
      return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
    }
    parseChildren() {
      if ("" === this.remaining) return {};
      this.consumeOptional("/");
      const se = [];
      for (this.peekStartsWith("(") || se.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), se.push(this.parseSegment());
      let re = {};
      this.peekStartsWith("/(") && (this.capture("/"), re = this.parseParens(!0));
      let Ce = {};
      return this.peekStartsWith("(") && (Ce = this.parseParens(!1)), (se.length > 0 || Object.keys(re).length > 0) && (Ce[le] = new Pi(se, re)), Ce;
    }
    parseSegment() {
      const se = bi(this.remaining);
      if ("" === se && this.peekStartsWith(";")) throw new t.vHH(4009, Et);
      return this.capture(se), new Ii($t(se), this.parseMatrixParams());
    }
    parseMatrixParams() {
      const se = {};
      for (; this.consumeOptional(";");) this.parseParam(se);
      return se;
    }
    parseParam(se) {
      const re = bi(this.remaining);
      if (!re) return;
      this.capture(re);
      let Ce = "";
      if (this.consumeOptional("=")) {
        const Be = bi(this.remaining);
        Be && (Ce = Be, this.capture(Ce));
      }
      se[$t(re)] = $t(Ce);
    }
    parseQueryParam(se) {
      const re = function Xn(Q) {
        const se = Q.match(qn);
        return se ? se[0] : "";
      }(this.remaining);
      if (!re) return;
      this.capture(re);
      let Ce = "";
      if (this.consumeOptional("=")) {
        const Ot = function Eo(Q) {
          const se = Q.match(Yi);
          return se ? se[0] : "";
        }(this.remaining);
        Ot && (Ce = Ot, this.capture(Ce));
      }
      const Be = Mn(re),
        dt = Mn(Ce);
      if (se.hasOwnProperty(Be)) {
        let Ot = se[Be];
        Array.isArray(Ot) || (Ot = [Ot], se[Be] = Ot), Ot.push(dt);
      } else se[Be] = dt;
    }
    parseParens(se) {
      const re = {};
      for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        const Ce = bi(this.remaining),
          Be = this.remaining[Ce.length];
        if ("/" !== Be && ")" !== Be && ";" !== Be) throw new t.vHH(4010, Et);
        let dt;
        Ce.indexOf(":") > -1 ? (dt = Ce.slice(0, Ce.indexOf(":")), this.capture(dt), this.capture(":")) : se && (dt = le);
        const Ot = this.parseChildren();
        re[dt] = 1 === Object.keys(Ot).length ? Ot[le] : new Pi([], Ot), this.consumeOptional("//");
      }
      return re;
    }
    peekStartsWith(se) {
      return this.remaining.startsWith(se);
    }
    consumeOptional(se) {
      return !!this.peekStartsWith(se) && (this.remaining = this.remaining.substring(se.length), !0);
    }
    capture(se) {
      if (!this.consumeOptional(se)) throw new t.vHH(4011, Et);
    }
  }
  function br(Q) {
    return Q.segments.length > 0 ? new Pi([], {
      [le]: Q
    }) : Q;
  }
  function Pr(Q) {
    const se = {};
    for (const Ce of Object.keys(Q.children)) {
      const dt = Pr(Q.children[Ce]);
      (dt.segments.length > 0 || dt.hasChildren()) && (se[Ce] = dt);
    }
    return function qo(Q) {
      if (1 === Q.numberOfChildren && Q.children[le]) {
        const se = Q.children[le];
        return new Pi(Q.segments.concat(se.segments), se.children);
      }
      return Q;
    }(new Pi(Q.segments, se));
  }
  function Yo(Q) {
    return Q instanceof Nn;
  }
  const wr = !1;
  function lo(Q, se, re, Ce, Be) {
    if (0 === re.length) return ji(se.root, se.root, se.root, Ce, Be);
    const dt = function Fi(Q) {
      if ("string" == typeof Q[0] && 1 === Q.length && "/" === Q[0]) return new fi(!0, 0, Q);
      let se = 0,
        re = !1;
      const Ce = Q.reduce((Be, dt, Ot) => {
        if ("object" == typeof dt && null != dt) {
          if (dt.outlets) {
            const Qt = {};
            return Ct(dt.outlets, (Wn, Ui) => {
              Qt[Ui] = "string" == typeof Wn ? Wn.split("/") : Wn;
            }), [...Be, {
              outlets: Qt
            }];
          }
          if (dt.segmentPath) return [...Be, dt.segmentPath];
        }
        return "string" != typeof dt ? [...Be, dt] : 0 === Ot ? (dt.split("/").forEach((Qt, Wn) => {
          0 == Wn && "." === Qt || (0 == Wn && "" === Qt ? re = !0 : ".." === Qt ? se++ : "" != Qt && Be.push(Qt));
        }), Be) : [...Be, dt];
      }, []);
      return new fi(re, se, Ce);
    }(re);
    return dt.toRoot() ? ji(se.root, se.root, new Pi([], {}), Ce, Be) : function Ot(Wn) {
      const Ui = function Ei(Q, se, re, Ce) {
          if (Q.isAbsolute) return new Rn(se.root, !0, 0);
          if (-1 === Ce) return new Rn(re, re === se.root, 0);
          return function Wt(Q, se, re) {
            let Ce = Q,
              Be = se,
              dt = re;
            for (; dt > Be;) {
              if (dt -= Be, Ce = Ce.parent, !Ce) throw new t.vHH(4005, wr && "Invalid number of '../'");
              Be = Ce.segments.length;
            }
            return new Rn(Ce, !1, Be - dt);
          }(re, Ce + (jo(Q.commands[0]) ? 0 : 1), Q.numberOfDoubleDots);
        }(dt, se, Q.snapshot?._urlSegment, Wn),
        eo = Ui.processChildren ? Ao(Ui.segmentGroup, Ui.index, dt.commands) : Ji(Ui.segmentGroup, Ui.index, dt.commands);
      return ji(se.root, Ui.segmentGroup, eo, Ce, Be);
    }(Q.snapshot?._lastPathIndex);
  }
  function jo(Q) {
    return "object" == typeof Q && null != Q && !Q.outlets && !Q.segmentPath;
  }
  function Go(Q) {
    return "object" == typeof Q && null != Q && Q.outlets;
  }
  function ji(Q, se, re, Ce, Be) {
    let Ot,
      dt = {};
    Ce && Ct(Ce, (Wn, Ui) => {
      dt[Ui] = Array.isArray(Wn) ? Wn.map(eo => `${eo}`) : `${Wn}`;
    }), Ot = Q === se ? re : ti(Q, se, re);
    const Qt = br(Pr(Ot));
    return new Nn(Qt, dt, Be);
  }
  function ti(Q, se, re) {
    const Ce = {};
    return Ct(Q.children, (Be, dt) => {
      Ce[dt] = Be === se ? re : ti(Be, se, re);
    }), new Pi(Q.segments, Ce);
  }
  class fi {
    constructor(se, re, Ce) {
      if (this.isAbsolute = se, this.numberOfDoubleDots = re, this.commands = Ce, se && Ce.length > 0 && jo(Ce[0])) throw new t.vHH(4003, wr && "Root segment cannot have matrix parameters");
      const Be = Ce.find(Go);
      if (Be && Be !== mt(Ce)) throw new t.vHH(4004, wr && "{outlets:{}} has to be the last command");
    }
    toRoot() {
      return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0];
    }
  }
  class Rn {
    constructor(se, re, Ce) {
      this.segmentGroup = se, this.processChildren = re, this.index = Ce;
    }
  }
  function Ji(Q, se, re) {
    if (Q || (Q = new Pi([], {})), 0 === Q.segments.length && Q.hasChildren()) return Ao(Q, se, re);
    const Ce = function Sr(Q, se, re) {
        let Ce = 0,
          Be = se;
        const dt = {
          match: !1,
          pathIndex: 0,
          commandIndex: 0
        };
        for (; Be < Q.segments.length;) {
          if (Ce >= re.length) return dt;
          const Ot = Q.segments[Be],
            Qt = re[Ce];
          if (Go(Qt)) break;
          const Wn = `${Qt}`,
            Ui = Ce < re.length - 1 ? re[Ce + 1] : null;
          if (Be > 0 && void 0 === Wn) break;
          if (Wn && Ui && "object" == typeof Ui && void 0 === Ui.outlets) {
            if (!oi(Wn, Ui, Ot)) return dt;
            Ce += 2;
          } else {
            if (!oi(Wn, {}, Ot)) return dt;
            Ce++;
          }
          Be++;
        }
        return {
          match: !0,
          pathIndex: Be,
          commandIndex: Ce
        };
      }(Q, se, re),
      Be = re.slice(Ce.commandIndex);
    if (Ce.match && Ce.pathIndex < Q.segments.length) {
      const dt = new Pi(Q.segments.slice(0, Ce.pathIndex), {});
      return dt.children[le] = new Pi(Q.segments.slice(Ce.pathIndex), Q.children), Ao(dt, 0, Be);
    }
    return Ce.match && 0 === Be.length ? new Pi(Q.segments, {}) : Ce.match && !Q.hasChildren() ? us(Q, se, re) : Ce.match ? Ao(Q, 0, Be) : us(Q, se, re);
  }
  function Ao(Q, se, re) {
    if (0 === re.length) return new Pi(Q.segments, {});
    {
      const Ce = function Oi(Q) {
          return Go(Q[0]) ? Q[0].outlets : {
            [le]: Q
          };
        }(re),
        Be = {};
      return !Ce[le] && Q.children[le] && 1 === Q.numberOfChildren && 0 === Q.children[le].segments.length ? Ao(Q.children[le], se, re) : (Ct(Ce, (dt, Ot) => {
        "string" == typeof dt && (dt = [dt]), null !== dt && (Be[Ot] = Ji(Q.children[Ot], se, dt));
      }), Ct(Q.children, (dt, Ot) => {
        void 0 === Ce[Ot] && (Be[Ot] = dt);
      }), new Pi(Q.segments, Be));
    }
  }
  function us(Q, se, re) {
    const Ce = Q.segments.slice(0, se);
    let Be = 0;
    for (; Be < re.length;) {
      const dt = re[Be];
      if (Go(dt)) {
        const Wn = Ps(dt.outlets);
        return new Pi(Ce, Wn);
      }
      if (0 === Be && jo(re[0])) {
        Ce.push(new Ii(Q.segments[se].path, hs(re[0]))), Be++;
        continue;
      }
      const Ot = Go(dt) ? dt.outlets[le] : `${dt}`,
        Qt = Be < re.length - 1 ? re[Be + 1] : null;
      Ot && Qt && jo(Qt) ? (Ce.push(new Ii(Ot, hs(Qt))), Be += 2) : (Ce.push(new Ii(Ot, {})), Be++);
    }
    return new Pi(Ce, {});
  }
  function Ps(Q) {
    const se = {};
    return Ct(Q, (re, Ce) => {
      "string" == typeof re && (re = [re]), null !== re && (se[Ce] = us(new Pi([], {}), 0, re));
    }), se;
  }
  function hs(Q) {
    const se = {};
    return Ct(Q, (re, Ce) => se[Ce] = `${re}`), se;
  }
  function oi(Q, se, re) {
    return Q == re.path && Re(se, re.parameters);
  }
  const yo = "imperative";
  class Qi {
    constructor(se, re) {
      this.id = se, this.url = re;
    }
  }
  class Qo extends Qi {
    constructor(se, re, Ce = "imperative", Be = null) {
      super(se, re), this.type = 0, this.navigationTrigger = Ce, this.restoredState = Be;
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  }
  class Kr extends Qi {
    constructor(se, re, Ce) {
      super(se, re), this.urlAfterRedirects = Ce, this.type = 1;
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  }
  class _s extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.reason = Ce, this.code = Be, this.type = 2;
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  }
  class ra extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.reason = Ce, this.code = Be, this.type = 16;
    }
  }
  class Or extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.error = Ce, this.target = Be, this.type = 3;
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  }
  class Fs extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.urlAfterRedirects = Ce, this.state = Be, this.type = 4;
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  }
  class xa extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.urlAfterRedirects = Ce, this.state = Be, this.type = 7;
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  }
  class rs extends Qi {
    constructor(se, re, Ce, Be, dt) {
      super(se, re), this.urlAfterRedirects = Ce, this.state = Be, this.shouldActivate = dt, this.type = 8;
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  }
  class Js extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.urlAfterRedirects = Ce, this.state = Be, this.type = 5;
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  }
  class ho extends Qi {
    constructor(se, re, Ce, Be) {
      super(se, re), this.urlAfterRedirects = Ce, this.state = Be, this.type = 6;
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  }
  class uo {
    constructor(se) {
      this.route = se, this.type = 9;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  }
  class ri {
    constructor(se) {
      this.route = se, this.type = 10;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  }
  class Yt {
    constructor(se) {
      this.snapshot = se, this.type = 11;
    }
    toString() {
      return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
    }
  }
  class jt {
    constructor(se) {
      this.snapshot = se, this.type = 12;
    }
    toString() {
      return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
    }
  }
  class hn {
    constructor(se) {
      this.snapshot = se, this.type = 13;
    }
    toString() {
      return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
    }
  }
  class tn {
    constructor(se) {
      this.snapshot = se, this.type = 14;
    }
    toString() {
      return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`;
    }
  }
  class di {
    constructor(se, re, Ce) {
      this.routerEvent = se, this.position = re, this.anchor = Ce, this.type = 15;
    }
    toString() {
      return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
    }
  }
  let wo = (() => {
      class Q {
        createUrlTree(re, Ce, Be, dt, Ot, Qt) {
          return lo(re || Ce.root, Be, dt, Ot, Qt);
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: Q.ɵfac
      }), Q;
    })(),
    _r = (() => {
      class Q {}
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: function (se) {
          return wo.ɵfac(se);
        },
        providedIn: "root"
      }), Q;
    })();
  class qr {
    constructor(se) {
      this._root = se;
    }
    get root() {
      return this._root.value;
    }
    parent(se) {
      const re = this.pathFromRoot(se);
      return re.length > 1 ? re[re.length - 2] : null;
    }
    children(se) {
      const re = Ts(se, this._root);
      return re ? re.children.map(Ce => Ce.value) : [];
    }
    firstChild(se) {
      const re = Ts(se, this._root);
      return re && re.children.length > 0 ? re.children[0].value : null;
    }
    siblings(se) {
      const re = js(se, this._root);
      return re.length < 2 ? [] : re[re.length - 2].children.map(Be => Be.value).filter(Be => Be !== se);
    }
    pathFromRoot(se) {
      return js(se, this._root).map(re => re.value);
    }
  }
  function Ts(Q, se) {
    if (Q === se.value) return se;
    for (const re of se.children) {
      const Ce = Ts(Q, re);
      if (Ce) return Ce;
    }
    return null;
  }
  function js(Q, se) {
    if (Q === se.value) return [se];
    for (const re of se.children) {
      const Ce = js(Q, re);
      if (Ce.length) return Ce.unshift(se), Ce;
    }
    return [];
  }
  class ws {
    constructor(se, re) {
      this.value = se, this.children = re;
    }
    toString() {
      return `TreeNode(${this.value})`;
    }
  }
  function Us(Q) {
    const se = {};
    return Q && Q.children.forEach(re => se[re.value.outlet] = re), se;
  }
  class Ws extends qr {
    constructor(se, re) {
      super(se), this.snapshot = re, Xs(this, se);
    }
    toString() {
      return this.snapshot.toString();
    }
  }
  function sa(Q, se) {
    const re = function ha(Q, se) {
        const Ot = new Qs([], {}, {}, "", {}, le, se, null, Q.root, -1, {});
        return new ma("", new ws(Ot, []));
      }(Q, se),
      Ce = new m.X([new Ii("", {})]),
      Be = new m.X({}),
      dt = new m.X({}),
      Ot = new m.X({}),
      Qt = new m.X(""),
      Wn = new ua(Ce, Be, Ot, Qt, dt, le, se, re.root);
    return Wn.snapshot = re.root, new Ws(new ws(Wn, []), re);
  }
  class ua {
    constructor(se, re, Ce, Be, dt, Ot, Qt, Wn) {
      this.url = se, this.params = re, this.queryParams = Ce, this.fragment = Be, this.data = dt, this.outlet = Ot, this.component = Qt, this.title = this.data?.pipe((0, E.U)(Ui => Ui[n])) ?? (0, a.of)(void 0), this._futureSnapshot = Wn;
    }
    get routeConfig() {
      return this._futureSnapshot.routeConfig;
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = this.params.pipe((0, E.U)(se => qe(se)))), this._paramMap;
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, E.U)(se => qe(se)))), this._queryParamMap;
    }
    toString() {
      return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
    }
  }
  function da(Q, se = "emptyOnly") {
    const re = Q.pathFromRoot;
    let Ce = 0;
    if ("always" !== se) for (Ce = re.length - 1; Ce >= 1;) {
      const Be = re[Ce],
        dt = re[Ce - 1];
      if (Be.routeConfig && "" === Be.routeConfig.path) Ce--;else {
        if (dt.component) break;
        Ce--;
      }
    }
    return function na(Q) {
      return Q.reduce((se, re) => ({
        params: {
          ...se.params,
          ...re.params
        },
        data: {
          ...se.data,
          ...re.data
        },
        resolve: {
          ...re.data,
          ...se.resolve,
          ...re.routeConfig?.data,
          ...re._resolvedData
        }
      }), {
        params: {},
        data: {},
        resolve: {}
      });
    }(re.slice(Ce));
  }
  class Qs {
    get title() {
      return this.data?.[n];
    }
    constructor(se, re, Ce, Be, dt, Ot, Qt, Wn, Ui, eo, Wo) {
      this.url = se, this.params = re, this.queryParams = Ce, this.fragment = Be, this.data = dt, this.outlet = Ot, this.component = Qt, this.routeConfig = Wn, this._urlSegment = Ui, this._lastPathIndex = eo, this._resolve = Wo;
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = qe(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = qe(this.queryParams)), this._queryParamMap;
    }
    toString() {
      return `Route(url:'${this.url.map(Ce => Ce.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`;
    }
  }
  class ma extends qr {
    constructor(se, re) {
      super(re), this.url = se, Xs(this, re);
    }
    toString() {
      return Ks(this._root);
    }
  }
  function Xs(Q, se) {
    se.value._routerState = Q, se.children.forEach(re => Xs(Q, re));
  }
  function Ks(Q) {
    const se = Q.children.length > 0 ? ` { ${Q.children.map(Ks).join(", ")} } ` : "";
    return `${Q.value}${se}`;
  }
  function Va(Q) {
    if (Q.snapshot) {
      const se = Q.snapshot,
        re = Q._futureSnapshot;
      Q.snapshot = re, Re(se.queryParams, re.queryParams) || Q.queryParams.next(re.queryParams), se.fragment !== re.fragment && Q.fragment.next(re.fragment), Re(se.params, re.params) || Q.params.next(re.params), function We(Q, se) {
        if (Q.length !== se.length) return !1;
        for (let re = 0; re < Q.length; ++re) if (!Re(Q[re], se[re])) return !1;
        return !0;
      }(se.url, re.url) || Q.url.next(re.url), Re(se.data, re.data) || Q.data.next(re.data);
    } else Q.snapshot = Q._futureSnapshot, Q.data.next(Q._futureSnapshot.data);
  }
  function ba(Q, se) {
    const re = Re(Q.params, se.params) && function yi(Q, se) {
      return co(Q, se) && Q.every((re, Ce) => Re(re.parameters, se[Ce].parameters));
    }(Q.url, se.url);
    return re && !(!Q.parent != !se.parent) && (!Q.parent || ba(Q.parent, se.parent));
  }
  function Ri(Q, se, re) {
    if (re && Q.shouldReuseRoute(se.value, re.value.snapshot)) {
      const Ce = re.value;
      Ce._futureSnapshot = se.value;
      const Be = function $o(Q, se, re) {
        return se.children.map(Ce => {
          for (const Be of re.children) if (Q.shouldReuseRoute(Ce.value, Be.value.snapshot)) return Ri(Q, Ce, Be);
          return Ri(Q, Ce);
        });
      }(Q, se, re);
      return new ws(Ce, Be);
    }
    {
      if (Q.shouldAttach(se.value)) {
        const dt = Q.retrieve(se.value);
        if (null !== dt) {
          const Ot = dt.route;
          return Ot.value._futureSnapshot = se.value, Ot.children = se.children.map(Qt => Ri(Q, Qt)), Ot;
        }
      }
      const Ce = function ci(Q) {
          return new ua(new m.X(Q.url), new m.X(Q.params), new m.X(Q.queryParams), new m.X(Q.fragment), new m.X(Q.data), Q.outlet, Q.component, Q);
        }(se.value),
        Be = se.children.map(dt => Ri(Q, dt));
      return new ws(Ce, Be);
    }
  }
  const Gi = "ngNavigationCancelingError";
  function Fn(Q, se) {
    const {
        redirectTo: re,
        navigationBehaviorOptions: Ce
      } = Yo(se) ? {
        redirectTo: se,
        navigationBehaviorOptions: void 0
      } : se,
      Be = zi(!1, 0, se);
    return Be.url = re, Be.navigationBehaviorOptions = Ce, Be;
  }
  function zi(Q, se, re) {
    const Ce = new Error("NavigationCancelingError: " + (Q || ""));
    return Ce[Gi] = !0, Ce.cancellationCode = se, re && (Ce.url = re), Ce;
  }
  function Io(Q) {
    return gi(Q) && Yo(Q.url);
  }
  function gi(Q) {
    return Q && Q[Gi];
  }
  class Kt {
    constructor() {
      this.outlet = null, this.route = null, this.resolver = null, this.injector = null, this.children = new Vt(), this.attachRef = null;
    }
  }
  let Vt = (() => {
    class Q {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(re, Ce) {
        const Be = this.getOrCreateContext(re);
        Be.outlet = Ce, this.contexts.set(re, Be);
      }
      onChildOutletDestroyed(re) {
        const Ce = this.getContext(re);
        Ce && (Ce.outlet = null, Ce.attachRef = null);
      }
      onOutletDeactivated() {
        const re = this.contexts;
        return this.contexts = new Map(), re;
      }
      onOutletReAttached(re) {
        this.contexts = re;
      }
      getOrCreateContext(re) {
        let Ce = this.getContext(re);
        return Ce || (Ce = new Kt(), this.contexts.set(re, Ce)), Ce;
      }
      getContext(re) {
        return this.contexts.get(re) || null;
      }
    }
    return Q.ɵfac = function (re) {
      return new (re || Q)();
    }, Q.ɵprov = t.Yz7({
      token: Q,
      factory: Q.ɵfac,
      providedIn: "root"
    }), Q;
  })();
  const Pn = !1;
  let pi = (() => {
    class Q {
      constructor() {
        this.activated = null, this._activatedRoute = null, this.name = le, this.activateEvents = new t.vpe(), this.deactivateEvents = new t.vpe(), this.attachEvents = new t.vpe(), this.detachEvents = new t.vpe(), this.parentContexts = (0, t.f3M)(Vt), this.location = (0, t.f3M)(t.s_b), this.changeDetector = (0, t.f3M)(t.sBO), this.environmentInjector = (0, t.f3M)(t.lqb);
      }
      ngOnChanges(re) {
        if (re.name) {
          const {
            firstChange: Ce,
            previousValue: Be
          } = re.name;
          if (Ce) return;
          this.isTrackedInParentContexts(Be) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(Be)), this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name);
      }
      isTrackedInParentContexts(re) {
        return this.parentContexts.getContext(re)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
        const re = this.parentContexts.getContext(this.name);
        re?.route && (re.attachRef ? this.attach(re.attachRef, re.route) : this.activateWith(re.route, re.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new t.vHH(4012, Pn);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new t.vHH(4012, Pn);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new t.vHH(4012, Pn);
        this.location.detach();
        const re = this.activated;
        return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(re.instance), re;
      }
      attach(re, Ce) {
        this.activated = re, this._activatedRoute = Ce, this.location.insert(re.hostView), this.attachEvents.emit(re.instance);
      }
      deactivate() {
        if (this.activated) {
          const re = this.component;
          this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(re);
        }
      }
      activateWith(re, Ce) {
        if (this.isActivated) throw new t.vHH(4013, Pn);
        this._activatedRoute = re;
        const Be = this.location,
          Ot = re.snapshot.component,
          Qt = this.parentContexts.getOrCreateContext(this.name).children,
          Wn = new xo(re, Qt, Be.injector);
        if (Ce && function No(Q) {
          return !!Q.resolveComponentFactory;
        }(Ce)) {
          const Ui = Ce.resolveComponentFactory(Ot);
          this.activated = Be.createComponent(Ui, Be.length, Wn);
        } else this.activated = Be.createComponent(Ot, {
          index: Be.length,
          injector: Wn,
          environmentInjector: Ce ?? this.environmentInjector
        });
        this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
      }
    }
    return Q.ɵfac = function (re) {
      return new (re || Q)();
    }, Q.ɵdir = t.lG2({
      type: Q,
      selectors: [["router-outlet"]],
      inputs: {
        name: "name"
      },
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate",
        attachEvents: "attach",
        detachEvents: "detach"
      },
      exportAs: ["outlet"],
      standalone: !0,
      features: [t.TTD]
    }), Q;
  })();
  class xo {
    constructor(se, re, Ce) {
      this.route = se, this.childContexts = re, this.parent = Ce;
    }
    get(se, re) {
      return se === ua ? this.route : se === Vt ? this.childContexts : this.parent.get(se, re);
    }
  }
  let Ko = (() => {
    class Q {}
    return Q.ɵfac = function (re) {
      return new (re || Q)();
    }, Q.ɵcmp = t.Xpm({
      type: Q,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [t.jDz],
      decls: 1,
      vars: 0,
      template: function (re, Ce) {
        1 & re && t._UZ(0, "router-outlet");
      },
      dependencies: [pi],
      encapsulation: 2
    }), Q;
  })();
  function Mi(Q, se) {
    return Q.providers && !Q._injector && (Q._injector = (0, t.MMx)(Q.providers, se, `Route: ${Q.path}`)), Q._injector ?? se;
  }
  function Er(Q) {
    const se = Q.children && Q.children.map(Er),
      re = se ? {
        ...Q,
        children: se
      } : {
        ...Q
      };
    return !re.component && !re.loadComponent && (se || re.loadChildren) && re.outlet && re.outlet !== le && (re.component = Ko), re;
  }
  function Br(Q) {
    return Q.outlet || le;
  }
  function vr(Q, se) {
    const re = Q.filter(Ce => Br(Ce) === se);
    return re.push(...Q.filter(Ce => Br(Ce) !== se)), re;
  }
  function zr(Q) {
    if (!Q) return null;
    if (Q.routeConfig?._injector) return Q.routeConfig._injector;
    for (let se = Q.parent; se; se = se.parent) {
      const re = se.routeConfig;
      if (re?._loadedInjector) return re._loadedInjector;
      if (re?._injector) return re._injector;
    }
    return null;
  }
  class aa {
    constructor(se, re, Ce, Be) {
      this.routeReuseStrategy = se, this.futureState = re, this.currState = Ce, this.forwardEvent = Be;
    }
    activate(se) {
      const re = this.futureState._root,
        Ce = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(re, Ce, se), Va(this.futureState.root), this.activateChildRoutes(re, Ce, se);
    }
    deactivateChildRoutes(se, re, Ce) {
      const Be = Us(re);
      se.children.forEach(dt => {
        const Ot = dt.value.outlet;
        this.deactivateRoutes(dt, Be[Ot], Ce), delete Be[Ot];
      }), Ct(Be, (dt, Ot) => {
        this.deactivateRouteAndItsChildren(dt, Ce);
      });
    }
    deactivateRoutes(se, re, Ce) {
      const Be = se.value,
        dt = re ? re.value : null;
      if (Be === dt) {
        if (Be.component) {
          const Ot = Ce.getContext(Be.outlet);
          Ot && this.deactivateChildRoutes(se, re, Ot.children);
        } else this.deactivateChildRoutes(se, re, Ce);
      } else dt && this.deactivateRouteAndItsChildren(re, Ce);
    }
    deactivateRouteAndItsChildren(se, re) {
      se.value.component && this.routeReuseStrategy.shouldDetach(se.value.snapshot) ? this.detachAndStoreRouteSubtree(se, re) : this.deactivateRouteAndOutlet(se, re);
    }
    detachAndStoreRouteSubtree(se, re) {
      const Ce = re.getContext(se.value.outlet),
        Be = Ce && se.value.component ? Ce.children : re,
        dt = Us(se);
      for (const Ot of Object.keys(dt)) this.deactivateRouteAndItsChildren(dt[Ot], Be);
      if (Ce && Ce.outlet) {
        const Ot = Ce.outlet.detach(),
          Qt = Ce.children.onOutletDeactivated();
        this.routeReuseStrategy.store(se.value.snapshot, {
          componentRef: Ot,
          route: se,
          contexts: Qt
        });
      }
    }
    deactivateRouteAndOutlet(se, re) {
      const Ce = re.getContext(se.value.outlet),
        Be = Ce && se.value.component ? Ce.children : re,
        dt = Us(se);
      for (const Ot of Object.keys(dt)) this.deactivateRouteAndItsChildren(dt[Ot], Be);
      Ce && Ce.outlet && (Ce.outlet.deactivate(), Ce.children.onOutletDeactivated(), Ce.attachRef = null, Ce.resolver = null, Ce.route = null);
    }
    activateChildRoutes(se, re, Ce) {
      const Be = Us(re);
      se.children.forEach(dt => {
        this.activateRoutes(dt, Be[dt.value.outlet], Ce), this.forwardEvent(new tn(dt.value.snapshot));
      }), se.children.length && this.forwardEvent(new jt(se.value.snapshot));
    }
    activateRoutes(se, re, Ce) {
      const Be = se.value,
        dt = re ? re.value : null;
      if (Va(Be), Be === dt) {
        if (Be.component) {
          const Ot = Ce.getOrCreateContext(Be.outlet);
          this.activateChildRoutes(se, re, Ot.children);
        } else this.activateChildRoutes(se, re, Ce);
      } else if (Be.component) {
        const Ot = Ce.getOrCreateContext(Be.outlet);
        if (this.routeReuseStrategy.shouldAttach(Be.snapshot)) {
          const Qt = this.routeReuseStrategy.retrieve(Be.snapshot);
          this.routeReuseStrategy.store(Be.snapshot, null), Ot.children.onOutletReAttached(Qt.contexts), Ot.attachRef = Qt.componentRef, Ot.route = Qt.route.value, Ot.outlet && Ot.outlet.attach(Qt.componentRef, Qt.route.value), Va(Qt.route.value), this.activateChildRoutes(se, null, Ot.children);
        } else {
          const Qt = zr(Be.snapshot),
            Wn = Qt?.get(t._Vd) ?? null;
          Ot.attachRef = null, Ot.route = Be, Ot.resolver = Wn, Ot.injector = Qt, Ot.outlet && Ot.outlet.activateWith(Be, Ot.injector), this.activateChildRoutes(se, null, Ot.children);
        }
      } else this.activateChildRoutes(se, null, Ce);
    }
  }
  class Ka {
    constructor(se) {
      this.path = se, this.route = this.path[this.path.length - 1];
    }
  }
  class ja {
    constructor(se, re) {
      this.component = se, this.route = re;
    }
  }
  function ul(Q, se, re) {
    const Ce = Q._root;
    return mi(Ce, se ? se._root : null, re, [Ce.value]);
  }
  function en(Q, se) {
    const re = Symbol(),
      Ce = se.get(Q, re);
    return Ce === re ? "function" != typeof Q || (0, t.Z0I)(Q) ? se.get(Q) : Q : Ce;
  }
  function mi(Q, se, re, Ce, Be = {
    canDeactivateChecks: [],
    canActivateChecks: []
  }) {
    const dt = Us(se);
    return Q.children.forEach(Ot => {
      (function ro(Q, se, re, Ce, Be = {
        canDeactivateChecks: [],
        canActivateChecks: []
      }) {
        const dt = Q.value,
          Ot = se ? se.value : null,
          Qt = re ? re.getContext(Q.value.outlet) : null;
        if (Ot && dt.routeConfig === Ot.routeConfig) {
          const Wn = function cr(Q, se, re) {
            if ("function" == typeof re) return re(Q, se);
            switch (re) {
              case "pathParamsChange":
                return !co(Q.url, se.url);
              case "pathParamsOrQueryParamsChange":
                return !co(Q.url, se.url) || !Re(Q.queryParams, se.queryParams);
              case "always":
                return !0;
              case "paramsOrQueryParamsChange":
                return !ba(Q, se) || !Re(Q.queryParams, se.queryParams);
              default:
                return !ba(Q, se);
            }
          }(Ot, dt, dt.routeConfig.runGuardsAndResolvers);
          Wn ? Be.canActivateChecks.push(new Ka(Ce)) : (dt.data = Ot.data, dt._resolvedData = Ot._resolvedData), mi(Q, se, dt.component ? Qt ? Qt.children : null : re, Ce, Be), Wn && Qt && Qt.outlet && Qt.outlet.isActivated && Be.canDeactivateChecks.push(new ja(Qt.outlet.component, Ot));
        } else Ot && jr(se, Qt, Be), Be.canActivateChecks.push(new Ka(Ce)), mi(Q, null, dt.component ? Qt ? Qt.children : null : re, Ce, Be);
      })(Ot, dt[Ot.value.outlet], re, Ce.concat([Ot.value]), Be), delete dt[Ot.value.outlet];
    }), Ct(dt, (Ot, Qt) => jr(Ot, re.getContext(Qt), Be)), Be;
  }
  function jr(Q, se, re) {
    const Ce = Us(Q),
      Be = Q.value;
    Ct(Ce, (dt, Ot) => {
      jr(dt, Be.component ? se ? se.children.getContext(Ot) : null : se, re);
    }), re.canDeactivateChecks.push(new ja(Be.component && se && se.outlet && se.outlet.isActivated ? se.outlet.component : null, Be));
  }
  function as(Q) {
    return "function" == typeof Q;
  }
  function mn(Q) {
    return Q instanceof d.K || "EmptyError" === Q?.name;
  }
  const Pe = Symbol("INITIAL_VALUE");
  function at() {
    return (0, h.w)(Q => (0, M.a)(Q.map(se => se.pipe((0, x.q)(1), (0, u.O)(Pe)))).pipe((0, E.U)(se => {
      for (const re of se) if (!0 !== re) {
        if (re === Pe) return Pe;
        if (!1 === re || re instanceof Nn) return re;
      }
      return !0;
    }), (0, T.h)(se => se !== Pe), (0, x.q)(1)));
  }
  function St(Q) {
    return (0, N.z)((0, j.b)(se => {
      if (Yo(se)) throw Fn(0, se);
    }), (0, E.U)(se => !0 === se));
  }
  const Pt = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {}
  };
  function Ki(Q, se, re, Ce, Be) {
    const dt = Nr(Q, se, re);
    return dt.matched ? function Wi(Q, se, re, Ce) {
      const Be = se.canMatch;
      if (!Be || 0 === Be.length) return (0, a.of)(!0);
      const dt = Be.map(Ot => {
        const Qt = en(Ot, Q);
        return Ft(function sn(Q) {
          return Q && as(Q.canMatch);
        }(Qt) ? Qt.canMatch(se, re) : Q.runInContext(() => Qt(se, re)));
      });
      return (0, a.of)(dt).pipe(at(), St());
    }(Ce = Mi(se, Ce), se, re).pipe((0, E.U)(Ot => !0 === Ot ? dt : {
      ...Pt
    })) : (0, a.of)(dt);
  }
  function Nr(Q, se, re) {
    if ("" === se.path) return "full" === se.pathMatch && (Q.hasChildren() || re.length > 0) ? {
      ...Pt
    } : {
      matched: !0,
      consumedSegments: [],
      remainingSegments: re,
      parameters: {},
      positionalParamSegments: {}
    };
    const Be = (se.matcher || Rt)(re, Q, se);
    if (!Be) return {
      ...Pt
    };
    const dt = {};
    Ct(Be.posParams, (Qt, Wn) => {
      dt[Wn] = Qt.path;
    });
    const Ot = Be.consumed.length > 0 ? {
      ...dt,
      ...Be.consumed[Be.consumed.length - 1].parameters
    } : dt;
    return {
      matched: !0,
      consumedSegments: Be.consumed,
      remainingSegments: re.slice(Be.consumed.length),
      parameters: Ot,
      positionalParamSegments: Be.posParams ?? {}
    };
  }
  function oa(Q, se, re, Ce) {
    if (re.length > 0 && function Il(Q, se, re) {
      return re.some(Ce => Kl(Q, se, Ce) && Br(Ce) !== le);
    }(Q, re, Ce)) {
      const dt = new Pi(se, function Qr(Q, se, re, Ce) {
        const Be = {};
        Be[le] = Ce, Ce._sourceSegment = Q, Ce._segmentIndexShift = se.length;
        for (const dt of re) if ("" === dt.path && Br(dt) !== le) {
          const Ot = new Pi([], {});
          Ot._sourceSegment = Q, Ot._segmentIndexShift = se.length, Be[Br(dt)] = Ot;
        }
        return Be;
      }(Q, se, Ce, new Pi(re, Q.children)));
      return dt._sourceSegment = Q, dt._segmentIndexShift = se.length, {
        segmentGroup: dt,
        slicedSegments: []
      };
    }
    if (0 === re.length && function Uc(Q, se, re) {
      return re.some(Ce => Kl(Q, se, Ce));
    }(Q, re, Ce)) {
      const dt = new Pi(Q.segments, function er(Q, se, re, Ce, Be) {
        const dt = {};
        for (const Ot of Ce) if (Kl(Q, re, Ot) && !Be[Br(Ot)]) {
          const Qt = new Pi([], {});
          Qt._sourceSegment = Q, Qt._segmentIndexShift = se.length, dt[Br(Ot)] = Qt;
        }
        return {
          ...Be,
          ...dt
        };
      }(Q, se, re, Ce, Q.children));
      return dt._sourceSegment = Q, dt._segmentIndexShift = se.length, {
        segmentGroup: dt,
        slicedSegments: re
      };
    }
    const Be = new Pi(Q.segments, Q.children);
    return Be._sourceSegment = Q, Be._segmentIndexShift = se.length, {
      segmentGroup: Be,
      slicedSegments: re
    };
  }
  function Kl(Q, se, re) {
    return (!(Q.hasChildren() || se.length > 0) || "full" !== re.pathMatch) && "" === re.path;
  }
  function Wl(Q, se, re, Ce) {
    return !!(Br(Q) === Ce || Ce !== le && Kl(se, re, Q)) && ("**" === Q.path || Nr(se, Q, re).matched);
  }
  function nc(Q, se, re) {
    return 0 === se.length && !Q.children[re];
  }
  const Zc = !1;
  class Yc {
    constructor(se) {
      this.segmentGroup = se || null;
    }
  }
  class nu {
    constructor(se) {
      this.urlTree = se;
    }
  }
  function kl(Q) {
    return (0, I._)(new Yc(Q));
  }
  function mu(Q) {
    return (0, I._)(new nu(Q));
  }
  class Hr {
    constructor(se, re, Ce, Be, dt) {
      this.injector = se, this.configLoader = re, this.urlSerializer = Ce, this.urlTree = Be, this.config = dt, this.allowRedirects = !0;
    }
    apply() {
      const se = oa(this.urlTree.root, [], [], this.config).segmentGroup,
        re = new Pi(se.segments, se.children);
      return this.expandSegmentGroup(this.injector, this.config, re, le).pipe((0, E.U)(dt => this.createUrlTree(Pr(dt), this.urlTree.queryParams, this.urlTree.fragment))).pipe((0, W.K)(dt => {
        if (dt instanceof nu) return this.allowRedirects = !1, this.match(dt.urlTree);
        throw dt instanceof Yc ? this.noMatchError(dt) : dt;
      }));
    }
    match(se) {
      return this.expandSegmentGroup(this.injector, this.config, se.root, le).pipe((0, E.U)(Be => this.createUrlTree(Pr(Be), se.queryParams, se.fragment))).pipe((0, W.K)(Be => {
        throw Be instanceof Yc ? this.noMatchError(Be) : Be;
      }));
    }
    noMatchError(se) {
      return new t.vHH(4002, Zc);
    }
    createUrlTree(se, re, Ce) {
      const Be = br(se);
      return new Nn(Be, re, Ce);
    }
    expandSegmentGroup(se, re, Ce, Be) {
      return 0 === Ce.segments.length && Ce.hasChildren() ? this.expandChildren(se, re, Ce).pipe((0, E.U)(dt => new Pi([], dt))) : this.expandSegment(se, Ce, re, Ce.segments, Be, !0);
    }
    expandChildren(se, re, Ce) {
      const Be = [];
      for (const dt of Object.keys(Ce.children)) "primary" === dt ? Be.unshift(dt) : Be.push(dt);
      return (0, e.D)(Be).pipe((0, y.b)(dt => {
        const Ot = Ce.children[dt],
          Qt = vr(re, dt);
        return this.expandSegmentGroup(se, Qt, Ot, dt).pipe((0, E.U)(Wn => ({
          segment: Wn,
          outlet: dt
        })));
      }), (0, F.R)((dt, Ot) => (dt[Ot.outlet] = Ot.segment, dt), {}), (0, Le.Z)());
    }
    expandSegment(se, re, Ce, Be, dt, Ot) {
      return (0, e.D)(Ce).pipe((0, y.b)(Qt => this.expandSegmentAgainstRoute(se, re, Ce, Qt, Be, dt, Ot).pipe((0, W.K)(Ui => {
        if (Ui instanceof Yc) return (0, a.of)(null);
        throw Ui;
      }))), (0, B.P)(Qt => !!Qt), (0, W.K)((Qt, Wn) => {
        if (mn(Qt)) return nc(re, Be, dt) ? (0, a.of)(new Pi([], {})) : kl(re);
        throw Qt;
      }));
    }
    expandSegmentAgainstRoute(se, re, Ce, Be, dt, Ot, Qt) {
      return Wl(Be, re, dt, Ot) ? void 0 === Be.redirectTo ? this.matchSegmentAgainstRoute(se, re, Be, dt, Ot) : Qt && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(se, re, Ce, Be, dt, Ot) : kl(re) : kl(re);
    }
    expandSegmentAgainstRouteUsingRedirect(se, re, Ce, Be, dt, Ot) {
      return "**" === Be.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(se, Ce, Be, Ot) : this.expandRegularSegmentAgainstRouteUsingRedirect(se, re, Ce, Be, dt, Ot);
    }
    expandWildCardWithParamsAgainstRouteUsingRedirect(se, re, Ce, Be) {
      const dt = this.applyRedirectCommands([], Ce.redirectTo, {});
      return Ce.redirectTo.startsWith("/") ? mu(dt) : this.lineralizeSegments(Ce, dt).pipe((0, R.z)(Ot => {
        const Qt = new Pi(Ot, {});
        return this.expandSegment(se, Qt, re, Ot, Be, !1);
      }));
    }
    expandRegularSegmentAgainstRouteUsingRedirect(se, re, Ce, Be, dt, Ot) {
      const {
        matched: Qt,
        consumedSegments: Wn,
        remainingSegments: Ui,
        positionalParamSegments: eo
      } = Nr(re, Be, dt);
      if (!Qt) return kl(re);
      const Wo = this.applyRedirectCommands(Wn, Be.redirectTo, eo);
      return Be.redirectTo.startsWith("/") ? mu(Wo) : this.lineralizeSegments(Be, Wo).pipe((0, R.z)(Ve => this.expandSegment(se, re, Ce, Ve.concat(Ui), Ot, !1)));
    }
    matchSegmentAgainstRoute(se, re, Ce, Be, dt) {
      return "**" === Ce.path ? (se = Mi(Ce, se), Ce.loadChildren ? (Ce._loadedRoutes ? (0, a.of)({
        routes: Ce._loadedRoutes,
        injector: Ce._loadedInjector
      }) : this.configLoader.loadChildren(se, Ce)).pipe((0, E.U)(Qt => (Ce._loadedRoutes = Qt.routes, Ce._loadedInjector = Qt.injector, new Pi(Be, {})))) : (0, a.of)(new Pi(Be, {}))) : Ki(re, Ce, Be, se).pipe((0, h.w)(({
        matched: Ot,
        consumedSegments: Qt,
        remainingSegments: Wn
      }) => Ot ? this.getChildConfig(se = Ce._injector ?? se, Ce, Be).pipe((0, R.z)(eo => {
        const Wo = eo.injector ?? se,
          Ve = eo.routes,
          {
            segmentGroup: me,
            slicedSegments: ze
          } = oa(re, Qt, Wn, Ve),
          xt = new Pi(me.segments, me.children);
        if (0 === ze.length && xt.hasChildren()) return this.expandChildren(Wo, Ve, xt).pipe((0, E.U)(mr => new Pi(Qt, mr)));
        if (0 === Ve.length && 0 === ze.length) return (0, a.of)(new Pi(Qt, {}));
        const wn = Br(Ce) === dt;
        return this.expandSegment(Wo, xt, Ve, ze, wn ? le : dt, !0).pipe((0, E.U)(_o => new Pi(Qt.concat(_o.segments), _o.children)));
      })) : kl(re)));
    }
    getChildConfig(se, re, Ce) {
      return re.children ? (0, a.of)({
        routes: re.children,
        injector: se
      }) : re.loadChildren ? void 0 !== re._loadedRoutes ? (0, a.of)({
        routes: re._loadedRoutes,
        injector: re._loadedInjector
      }) : function la(Q, se, re, Ce) {
        const Be = se.canLoad;
        if (void 0 === Be || 0 === Be.length) return (0, a.of)(!0);
        const dt = Be.map(Ot => {
          const Qt = en(Ot, Q);
          return Ft(function vo(Q) {
            return Q && as(Q.canLoad);
          }(Qt) ? Qt.canLoad(se, re) : Q.runInContext(() => Qt(se, re)));
        });
        return (0, a.of)(dt).pipe(at(), St());
      }(se, re, Ce).pipe((0, R.z)(Be => Be ? this.configLoader.loadChildren(se, re).pipe((0, j.b)(dt => {
        re._loadedRoutes = dt.routes, re._loadedInjector = dt.injector;
      })) : function gc(Q) {
        return (0, I._)(zi(Zc, 3));
      }())) : (0, a.of)({
        routes: [],
        injector: se
      });
    }
    lineralizeSegments(se, re) {
      let Ce = [],
        Be = re.root;
      for (;;) {
        if (Ce = Ce.concat(Be.segments), 0 === Be.numberOfChildren) return (0, a.of)(Ce);
        if (Be.numberOfChildren > 1 || !Be.children[le]) return se.redirectTo, (0, I._)(new t.vHH(4e3, Zc));
        Be = Be.children[le];
      }
    }
    applyRedirectCommands(se, re, Ce) {
      return this.applyRedirectCreateUrlTree(re, this.urlSerializer.parse(re), se, Ce);
    }
    applyRedirectCreateUrlTree(se, re, Ce, Be) {
      const dt = this.createSegmentGroup(se, re.root, Ce, Be);
      return new Nn(dt, this.createQueryParams(re.queryParams, this.urlTree.queryParams), re.fragment);
    }
    createQueryParams(se, re) {
      const Ce = {};
      return Ct(se, (Be, dt) => {
        if ("string" == typeof Be && Be.startsWith(":")) {
          const Qt = Be.substring(1);
          Ce[dt] = re[Qt];
        } else Ce[dt] = Be;
      }), Ce;
    }
    createSegmentGroup(se, re, Ce, Be) {
      const dt = this.createSegments(se, re.segments, Ce, Be);
      let Ot = {};
      return Ct(re.children, (Qt, Wn) => {
        Ot[Wn] = this.createSegmentGroup(se, Qt, Ce, Be);
      }), new Pi(dt, Ot);
    }
    createSegments(se, re, Ce, Be) {
      return re.map(dt => dt.path.startsWith(":") ? this.findPosParam(se, dt, Be) : this.findOrReturn(dt, Ce));
    }
    findPosParam(se, re, Ce) {
      const Be = Ce[re.path.substring(1)];
      if (!Be) throw new t.vHH(4001, Zc);
      return Be;
    }
    findOrReturn(se, re) {
      let Ce = 0;
      for (const Be of re) {
        if (Be.path === se.path) return re.splice(Ce), Be;
        Ce++;
      }
      return se;
    }
  }
  class wa {}
  class va {
    constructor(se, re, Ce, Be, dt, Ot, Qt) {
      this.injector = se, this.rootComponentType = re, this.config = Ce, this.urlTree = Be, this.url = dt, this.paramsInheritanceStrategy = Ot, this.urlSerializer = Qt;
    }
    recognize() {
      const se = oa(this.urlTree.root, [], [], this.config.filter(re => void 0 === re.redirectTo)).segmentGroup;
      return this.processSegmentGroup(this.injector, this.config, se, le).pipe((0, E.U)(re => {
        if (null === re) return null;
        const Ce = new Qs([], Object.freeze({}), Object.freeze({
            ...this.urlTree.queryParams
          }), this.urlTree.fragment, {}, le, this.rootComponentType, null, this.urlTree.root, -1, {}),
          Be = new ws(Ce, re),
          dt = new ma(this.url, Be);
        return this.inheritParamsAndData(dt._root), dt;
      }));
    }
    inheritParamsAndData(se) {
      const re = se.value,
        Ce = da(re, this.paramsInheritanceStrategy);
      re.params = Object.freeze(Ce.params), re.data = Object.freeze(Ce.data), se.children.forEach(Be => this.inheritParamsAndData(Be));
    }
    processSegmentGroup(se, re, Ce, Be) {
      return 0 === Ce.segments.length && Ce.hasChildren() ? this.processChildren(se, re, Ce) : this.processSegment(se, re, Ce, Ce.segments, Be);
    }
    processChildren(se, re, Ce) {
      return (0, e.D)(Object.keys(Ce.children)).pipe((0, y.b)(Be => {
        const dt = Ce.children[Be],
          Ot = vr(re, Be);
        return this.processSegmentGroup(se, Ot, dt, Be);
      }), (0, F.R)((Be, dt) => Be && dt ? (Be.push(...dt), Be) : null), function fe(Q, se = !1) {
        return (0, ke.e)((re, Ce) => {
          let Be = 0;
          re.subscribe(new J.Q(Ce, dt => {
            const Ot = Q(dt, Be++);
            (Ot || se) && Ce.next(dt), !Ot && Ce.complete();
          }));
        });
      }(Be => null !== Be), (0, ye.d)(null), (0, Le.Z)(), (0, E.U)(Be => {
        if (null === Be) return null;
        const dt = _c(Be);
        return function wc(Q) {
          Q.sort((se, re) => se.value.outlet === le ? -1 : re.value.outlet === le ? 1 : se.value.outlet.localeCompare(re.value.outlet));
        }(dt), dt;
      }));
    }
    processSegment(se, re, Ce, Be, dt) {
      return (0, e.D)(re).pipe((0, y.b)(Ot => this.processSegmentAgainstRoute(Ot._injector ?? se, Ot, Ce, Be, dt)), (0, B.P)(Ot => !!Ot), (0, W.K)(Ot => {
        if (mn(Ot)) return nc(Ce, Be, dt) ? (0, a.of)([]) : (0, a.of)(null);
        throw Ot;
      }));
    }
    processSegmentAgainstRoute(se, re, Ce, Be, dt) {
      if (re.redirectTo || !Wl(re, Ce, Be, dt)) return (0, a.of)(null);
      let Ot;
      if ("**" === re.path) {
        const Qt = Be.length > 0 ? mt(Be).parameters : {},
          Wn = au(Ce) + Be.length,
          Ui = new Qs(Be, Qt, Object.freeze({
            ...this.urlTree.queryParams
          }), this.urlTree.fragment, vs(re), Br(re), re.component ?? re._loadedComponent ?? null, re, Gc(Ce), Wn, La(re));
        Ot = (0, a.of)({
          snapshot: Ui,
          consumedSegments: [],
          remainingSegments: []
        });
      } else Ot = Ki(Ce, re, Be, se).pipe((0, E.U)(({
        matched: Qt,
        consumedSegments: Wn,
        remainingSegments: Ui,
        parameters: eo
      }) => {
        if (!Qt) return null;
        const Wo = au(Ce) + Wn.length;
        return {
          snapshot: new Qs(Wn, eo, Object.freeze({
            ...this.urlTree.queryParams
          }), this.urlTree.fragment, vs(re), Br(re), re.component ?? re._loadedComponent ?? null, re, Gc(Ce), Wo, La(re)),
          consumedSegments: Wn,
          remainingSegments: Ui
        };
      }));
      return Ot.pipe((0, h.w)(Qt => {
        if (null === Qt) return (0, a.of)(null);
        const {
          snapshot: Wn,
          consumedSegments: Ui,
          remainingSegments: eo
        } = Qt;
        se = re._injector ?? se;
        const Wo = re._loadedInjector ?? se,
          Ve = function zs(Q) {
            return Q.children ? Q.children : Q.loadChildren ? Q._loadedRoutes : [];
          }(re),
          {
            segmentGroup: me,
            slicedSegments: ze
          } = oa(Ce, Ui, eo, Ve.filter(wn => void 0 === wn.redirectTo));
        if (0 === ze.length && me.hasChildren()) return this.processChildren(Wo, Ve, me).pipe((0, E.U)(wn => null === wn ? null : [new ws(Wn, wn)]));
        if (0 === Ve.length && 0 === ze.length) return (0, a.of)([new ws(Wn, [])]);
        const xt = Br(re) === dt;
        return this.processSegment(Wo, Ve, me, ze, xt ? le : dt).pipe((0, E.U)(wn => null === wn ? null : [new ws(Wn, wn)]));
      }));
    }
  }
  function ic(Q) {
    const se = Q.value.routeConfig;
    return se && "" === se.path && void 0 === se.redirectTo;
  }
  function _c(Q) {
    const se = [],
      re = new Set();
    for (const Ce of Q) {
      if (!ic(Ce)) {
        se.push(Ce);
        continue;
      }
      const Be = se.find(dt => Ce.value.routeConfig === dt.value.routeConfig);
      void 0 !== Be ? (Be.children.push(...Ce.children), re.add(Be)) : se.push(Ce);
    }
    for (const Ce of re) {
      const Be = _c(Ce.children);
      se.push(new ws(Ce.value, Be));
    }
    return se.filter(Ce => !re.has(Ce));
  }
  function Gc(Q) {
    let se = Q;
    for (; se._sourceSegment;) se = se._sourceSegment;
    return se;
  }
  function au(Q) {
    let se = Q,
      re = se._segmentIndexShift ?? 0;
    for (; se._sourceSegment;) se = se._sourceSegment, re += se._segmentIndexShift ?? 0;
    return re - 1;
  }
  function vs(Q) {
    return Q.data || {};
  }
  function La(Q) {
    return Q.resolve || {};
  }
  function yr(Q) {
    return "string" == typeof Q.title || null === Q.title;
  }
  function Rr(Q) {
    return (0, h.w)(se => {
      const re = Q(se);
      return re ? (0, e.D)(re).pipe((0, E.U)(() => se)) : (0, a.of)(se);
    });
  }
  const Ma = new t.OlP("ROUTES");
  let Ia = (() => {
    class Q {
      constructor(re, Ce) {
        this.injector = re, this.compiler = Ce, this.componentLoaders = new WeakMap(), this.childrenLoaders = new WeakMap();
      }
      loadComponent(re) {
        if (this.componentLoaders.get(re)) return this.componentLoaders.get(re);
        if (re._loadedComponent) return (0, a.of)(re._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(re);
        const Ce = Ft(re.loadComponent()).pipe((0, E.U)(Ll), (0, j.b)(dt => {
            this.onLoadEndListener && this.onLoadEndListener(re), re._loadedComponent = dt;
          }), (0, G.x)(() => {
            this.componentLoaders.delete(re);
          })),
          Be = new C.c(Ce, () => new v.x()).pipe((0, te.x)());
        return this.componentLoaders.set(re, Be), Be;
      }
      loadChildren(re, Ce) {
        if (this.childrenLoaders.get(Ce)) return this.childrenLoaders.get(Ce);
        if (Ce._loadedRoutes) return (0, a.of)({
          routes: Ce._loadedRoutes,
          injector: Ce._loadedInjector
        });
        this.onLoadStartListener && this.onLoadStartListener(Ce);
        const dt = this.loadModuleFactoryOrRoutes(Ce.loadChildren).pipe((0, E.U)(Qt => {
            this.onLoadEndListener && this.onLoadEndListener(Ce);
            let Wn,
              Ui,
              eo = !1;
            Array.isArray(Qt) ? Ui = Qt : (Wn = Qt.create(re).injector, Ui = q(Wn.get(Ma, [], t.XFs.Self | t.XFs.Optional)));
            return {
              routes: Ui.map(Er),
              injector: Wn
            };
          }), (0, G.x)(() => {
            this.childrenLoaders.delete(Ce);
          })),
          Ot = new C.c(dt, () => new v.x()).pipe((0, te.x)());
        return this.childrenLoaders.set(Ce, Ot), Ot;
      }
      loadModuleFactoryOrRoutes(re) {
        return Ft(re()).pipe((0, E.U)(Ll), (0, R.z)(Be => Be instanceof t.YKP || Array.isArray(Be) ? (0, a.of)(Be) : (0, e.D)(this.compiler.compileModuleAsync(Be))));
      }
    }
    return Q.ɵfac = function (re) {
      return new (re || Q)(t.LFG(t.zs3), t.LFG(t.Sil));
    }, Q.ɵprov = t.Yz7({
      token: Q,
      factory: Q.ɵfac,
      providedIn: "root"
    }), Q;
  })();
  function Ll(Q) {
    return function Ea(Q) {
      return Q && "object" == typeof Q && "default" in Q;
    }(Q) ? Q.default : Q;
  }
  let sl = (() => {
    class Q {
      get hasRequestedNavigation() {
        return 0 !== this.navigationId;
      }
      constructor() {
        this.currentNavigation = null, this.lastSuccessfulNavigation = null, this.events = new v.x(), this.configLoader = (0, t.f3M)(Ia), this.environmentInjector = (0, t.f3M)(t.lqb), this.urlSerializer = (0, t.f3M)(fr), this.rootContexts = (0, t.f3M)(Vt), this.navigationId = 0, this.afterPreactivation = () => (0, a.of)(void 0), this.rootComponentType = null, this.configLoader.onLoadEndListener = Be => this.events.next(new ri(Be)), this.configLoader.onLoadStartListener = Be => this.events.next(new uo(Be));
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(re) {
        const Ce = ++this.navigationId;
        this.transitions?.next({
          ...this.transitions.value,
          ...re,
          id: Ce
        });
      }
      setupNavigations(re) {
        return this.transitions = new m.X({
          id: 0,
          targetPageId: 0,
          currentUrlTree: re.currentUrlTree,
          currentRawUrl: re.currentUrlTree,
          extractedUrl: re.urlHandlingStrategy.extract(re.currentUrlTree),
          urlAfterRedirects: re.urlHandlingStrategy.extract(re.currentUrlTree),
          rawUrl: re.currentUrlTree,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: yo,
          restoredState: null,
          currentSnapshot: re.routerState.snapshot,
          targetSnapshot: null,
          currentRouterState: re.routerState,
          targetRouterState: null,
          guards: {
            canActivateChecks: [],
            canDeactivateChecks: []
          },
          guardsResult: null
        }), this.transitions.pipe((0, T.h)(Ce => 0 !== Ce.id), (0, E.U)(Ce => ({
          ...Ce,
          extractedUrl: re.urlHandlingStrategy.extract(Ce.rawUrl)
        })), (0, h.w)(Ce => {
          let Be = !1,
            dt = !1;
          return (0, a.of)(Ce).pipe((0, j.b)(Ot => {
            this.currentNavigation = {
              id: Ot.id,
              initialUrl: Ot.rawUrl,
              extractedUrl: Ot.extractedUrl,
              trigger: Ot.source,
              extras: Ot.extras,
              previousNavigation: this.lastSuccessfulNavigation ? {
                ...this.lastSuccessfulNavigation,
                previousNavigation: null
              } : null
            };
          }), (0, h.w)(Ot => {
            const Qt = re.browserUrlTree.toString(),
              Wn = !re.navigated || Ot.extractedUrl.toString() !== Qt || Qt !== re.currentUrlTree.toString();
            if (!Wn && "reload" !== (Ot.extras.onSameUrlNavigation ?? re.onSameUrlNavigation)) {
              const eo = "";
              return this.events.next(new ra(Ot.id, re.serializeUrl(Ce.rawUrl), eo, 0)), re.rawUrlTree = Ot.rawUrl, Ot.resolve(null), L.E;
            }
            if (re.urlHandlingStrategy.shouldProcessUrl(Ot.rawUrl)) return pl(Ot.source) && (re.browserUrlTree = Ot.extractedUrl), (0, a.of)(Ot).pipe((0, h.w)(eo => {
              const Wo = this.transitions?.getValue();
              return this.events.next(new Qo(eo.id, this.urlSerializer.serialize(eo.extractedUrl), eo.source, eo.restoredState)), Wo !== this.transitions?.getValue() ? L.E : Promise.resolve(eo);
            }), function Ar(Q, se, re, Ce) {
              return (0, h.w)(Be => function ir(Q, se, re, Ce, Be) {
                return new Hr(Q, se, re, Ce, Be).apply();
              }(Q, se, re, Be.extractedUrl, Ce).pipe((0, E.U)(dt => ({
                ...Be,
                urlAfterRedirects: dt
              }))));
            }(this.environmentInjector, this.configLoader, this.urlSerializer, re.config), (0, j.b)(eo => {
              this.currentNavigation = {
                ...this.currentNavigation,
                finalUrl: eo.urlAfterRedirects
              }, Ce.urlAfterRedirects = eo.urlAfterRedirects;
            }), function kc(Q, se, re, Ce, Be) {
              return (0, R.z)(dt => function hl(Q, se, re, Ce, Be, dt, Ot = "emptyOnly") {
                return new va(Q, se, re, Ce, Be, Ot, dt).recognize().pipe((0, h.w)(Qt => null === Qt ? function Ua(Q) {
                  return new O.y(se => se.error(Q));
                }(new wa()) : (0, a.of)(Qt)));
              }(Q, se, re, dt.urlAfterRedirects, Ce.serialize(dt.urlAfterRedirects), Ce, Be).pipe((0, E.U)(Ot => ({
                ...dt,
                targetSnapshot: Ot
              }))));
            }(this.environmentInjector, this.rootComponentType, re.config, this.urlSerializer, re.paramsInheritanceStrategy), (0, j.b)(eo => {
              if (Ce.targetSnapshot = eo.targetSnapshot, "eager" === re.urlUpdateStrategy) {
                if (!eo.extras.skipLocationChange) {
                  const Ve = re.urlHandlingStrategy.merge(eo.urlAfterRedirects, eo.rawUrl);
                  re.setBrowserUrl(Ve, eo);
                }
                re.browserUrlTree = eo.urlAfterRedirects;
              }
              const Wo = new Fs(eo.id, this.urlSerializer.serialize(eo.extractedUrl), this.urlSerializer.serialize(eo.urlAfterRedirects), eo.targetSnapshot);
              this.events.next(Wo);
            }));
            if (Wn && re.urlHandlingStrategy.shouldProcessUrl(re.rawUrlTree)) {
              const {
                  id: eo,
                  extractedUrl: Wo,
                  source: Ve,
                  restoredState: me,
                  extras: ze
                } = Ot,
                xt = new Qo(eo, this.urlSerializer.serialize(Wo), Ve, me);
              this.events.next(xt);
              const wn = sa(Wo, this.rootComponentType).snapshot;
              return Ce = {
                ...Ot,
                targetSnapshot: wn,
                urlAfterRedirects: Wo,
                extras: {
                  ...ze,
                  skipLocationChange: !1,
                  replaceUrl: !1
                }
              }, (0, a.of)(Ce);
            }
            {
              const eo = "";
              return this.events.next(new ra(Ot.id, re.serializeUrl(Ce.extractedUrl), eo, 1)), re.rawUrlTree = Ot.rawUrl, Ot.resolve(null), L.E;
            }
          }), (0, j.b)(Ot => {
            const Qt = new xa(Ot.id, this.urlSerializer.serialize(Ot.extractedUrl), this.urlSerializer.serialize(Ot.urlAfterRedirects), Ot.targetSnapshot);
            this.events.next(Qt);
          }), (0, E.U)(Ot => Ce = {
            ...Ot,
            guards: ul(Ot.targetSnapshot, Ot.currentSnapshot, this.rootContexts)
          }), function Zt(Q, se) {
            return (0, R.z)(re => {
              const {
                targetSnapshot: Ce,
                currentSnapshot: Be,
                guards: {
                  canActivateChecks: dt,
                  canDeactivateChecks: Ot
                }
              } = re;
              return 0 === Ot.length && 0 === dt.length ? (0, a.of)({
                ...re,
                guardsResult: !0
              }) : function Li(Q, se, re, Ce) {
                return (0, e.D)(Q).pipe((0, R.z)(Be => function Hs(Q, se, re, Ce, Be) {
                  const dt = se && se.routeConfig ? se.routeConfig.canDeactivate : null;
                  if (!dt || 0 === dt.length) return (0, a.of)(!0);
                  const Ot = dt.map(Qt => {
                    const Wn = zr(se) ?? Be,
                      Ui = en(Qt, Wn);
                    return Ft(function pn(Q) {
                      return Q && as(Q.canDeactivate);
                    }(Ui) ? Ui.canDeactivate(Q, se, re, Ce) : Wn.runInContext(() => Ui(Q, se, re, Ce))).pipe((0, B.P)());
                  });
                  return (0, a.of)(Ot).pipe(at());
                }(Be.component, Be.route, re, se, Ce)), (0, B.P)(Be => !0 !== Be, !0));
              }(Ot, Ce, Be, Q).pipe((0, R.z)(Qt => Qt && function Da(Q) {
                return "boolean" == typeof Q;
              }(Qt) ? function mo(Q, se, re, Ce) {
                return (0, e.D)(se).pipe((0, y.b)(Be => (0, b.z)(function Cr(Q, se) {
                  return null !== Q && se && se(new Yt(Q)), (0, a.of)(!0);
                }(Be.route.parent, Ce), function Xo(Q, se) {
                  return null !== Q && se && se(new hn(Q)), (0, a.of)(!0);
                }(Be.route, Ce), function ys(Q, se, re) {
                  const Ce = se[se.length - 1],
                    dt = se.slice(0, se.length - 1).reverse().map(Ot => function Ln(Q) {
                      const se = Q.routeConfig ? Q.routeConfig.canActivateChild : null;
                      return se && 0 !== se.length ? {
                        node: Q,
                        guards: se
                      } : null;
                    }(Ot)).filter(Ot => null !== Ot).map(Ot => (0, A.P)(() => {
                      const Qt = Ot.guards.map(Wn => {
                        const Ui = zr(Ot.node) ?? re,
                          eo = en(Wn, Ui);
                        return Ft(function dl(Q) {
                          return Q && as(Q.canActivateChild);
                        }(eo) ? eo.canActivateChild(Ce, Q) : Ui.runInContext(() => eo(Ce, Q))).pipe((0, B.P)());
                      });
                      return (0, a.of)(Qt).pipe(at());
                    }));
                  return (0, a.of)(dt).pipe(at());
                }(Q, Be.path, re), function Xr(Q, se, re) {
                  const Ce = se.routeConfig ? se.routeConfig.canActivate : null;
                  if (!Ce || 0 === Ce.length) return (0, a.of)(!0);
                  const Be = Ce.map(dt => (0, A.P)(() => {
                    const Ot = zr(se) ?? re,
                      Qt = en(dt, Ot);
                    return Ft(function As(Q) {
                      return Q && as(Q.canActivate);
                    }(Qt) ? Qt.canActivate(se, Q) : Ot.runInContext(() => Qt(se, Q))).pipe((0, B.P)());
                  }));
                  return (0, a.of)(Be).pipe(at());
                }(Q, Be.route, re))), (0, B.P)(Be => !0 !== Be, !0));
              }(Ce, dt, Q, se) : (0, a.of)(Qt)), (0, E.U)(Qt => ({
                ...re,
                guardsResult: Qt
              })));
            });
          }(this.environmentInjector, Ot => this.events.next(Ot)), (0, j.b)(Ot => {
            if (Ce.guardsResult = Ot.guardsResult, Yo(Ot.guardsResult)) throw Fn(0, Ot.guardsResult);
            const Qt = new rs(Ot.id, this.urlSerializer.serialize(Ot.extractedUrl), this.urlSerializer.serialize(Ot.urlAfterRedirects), Ot.targetSnapshot, !!Ot.guardsResult);
            this.events.next(Qt);
          }), (0, T.h)(Ot => !!Ot.guardsResult || (re.restoreHistory(Ot), this.cancelNavigationTransition(Ot, "", 3), !1)), Rr(Ot => {
            if (Ot.guards.canActivateChecks.length) return (0, a.of)(Ot).pipe((0, j.b)(Qt => {
              const Wn = new Js(Qt.id, this.urlSerializer.serialize(Qt.extractedUrl), this.urlSerializer.serialize(Qt.urlAfterRedirects), Qt.targetSnapshot);
              this.events.next(Wn);
            }), (0, h.w)(Qt => {
              let Wn = !1;
              return (0, a.of)(Qt).pipe(function Ut(Q, se) {
                return (0, R.z)(re => {
                  const {
                    targetSnapshot: Ce,
                    guards: {
                      canActivateChecks: Be
                    }
                  } = re;
                  if (!Be.length) return (0, a.of)(re);
                  let dt = 0;
                  return (0, e.D)(Be).pipe((0, y.b)(Ot => function Vn(Q, se, re, Ce) {
                    const Be = Q.routeConfig,
                      dt = Q._resolve;
                    return void 0 !== Be?.title && !yr(Be) && (dt[n] = Be.title), function Gt(Q, se, re, Ce) {
                      const Be = function xi(Q) {
                        return [...Object.keys(Q), ...Object.getOwnPropertySymbols(Q)];
                      }(Q);
                      if (0 === Be.length) return (0, a.of)({});
                      const dt = {};
                      return (0, e.D)(Be).pipe((0, R.z)(Ot => function so(Q, se, re, Ce) {
                        const Be = zr(se) ?? Ce,
                          dt = en(Q, Be);
                        return Ft(dt.resolve ? dt.resolve(se, re) : Be.runInContext(() => dt(se, re)));
                      }(Q[Ot], se, re, Ce).pipe((0, B.P)(), (0, j.b)(Qt => {
                        dt[Ot] = Qt;
                      }))), (0, ae.h)(1), (0, Y.h)(dt), (0, W.K)(Ot => mn(Ot) ? L.E : (0, I._)(Ot)));
                    }(dt, Q, se, Ce).pipe((0, E.U)(Ot => (Q._resolvedData = Ot, Q.data = da(Q, re).resolve, Be && yr(Be) && (Q.data[n] = Be.title), null)));
                  }(Ot.route, Ce, Q, se)), (0, j.b)(() => dt++), (0, ae.h)(1), (0, R.z)(Ot => dt === Be.length ? (0, a.of)(re) : L.E));
                });
              }(re.paramsInheritanceStrategy, this.environmentInjector), (0, j.b)({
                next: () => Wn = !0,
                complete: () => {
                  Wn || (re.restoreHistory(Qt), this.cancelNavigationTransition(Qt, "", 2));
                }
              }));
            }), (0, j.b)(Qt => {
              const Wn = new ho(Qt.id, this.urlSerializer.serialize(Qt.extractedUrl), this.urlSerializer.serialize(Qt.urlAfterRedirects), Qt.targetSnapshot);
              this.events.next(Wn);
            }));
          }), Rr(Ot => {
            const Qt = Wn => {
              const Ui = [];
              Wn.routeConfig?.loadComponent && !Wn.routeConfig._loadedComponent && Ui.push(this.configLoader.loadComponent(Wn.routeConfig).pipe((0, j.b)(eo => {
                Wn.component = eo;
              }), (0, E.U)(() => {})));
              for (const eo of Wn.children) Ui.push(...Qt(eo));
              return Ui;
            };
            return (0, M.a)(Qt(Ot.targetSnapshot.root)).pipe((0, ye.d)(), (0, x.q)(1));
          }), Rr(() => this.afterPreactivation()), (0, E.U)(Ot => {
            const Qt = function qs(Q, se, re) {
              const Ce = Ri(Q, se._root, re ? re._root : void 0);
              return new Ws(Ce, se);
            }(re.routeReuseStrategy, Ot.targetSnapshot, Ot.currentRouterState);
            return Ce = {
              ...Ot,
              targetRouterState: Qt
            };
          }), (0, j.b)(Ot => {
            re.currentUrlTree = Ot.urlAfterRedirects, re.rawUrlTree = re.urlHandlingStrategy.merge(Ot.urlAfterRedirects, Ot.rawUrl), re.routerState = Ot.targetRouterState, "deferred" === re.urlUpdateStrategy && (Ot.extras.skipLocationChange || re.setBrowserUrl(re.rawUrlTree, Ot), re.browserUrlTree = Ot.urlAfterRedirects);
          }), ((Q, se, re) => (0, E.U)(Ce => (new aa(se, Ce.targetRouterState, Ce.currentRouterState, re).activate(Q), Ce)))(this.rootContexts, re.routeReuseStrategy, Ot => this.events.next(Ot)), (0, j.b)({
            next: Ot => {
              Be = !0, this.lastSuccessfulNavigation = this.currentNavigation, re.navigated = !0, this.events.next(new Kr(Ot.id, this.urlSerializer.serialize(Ot.extractedUrl), this.urlSerializer.serialize(re.currentUrlTree))), re.titleStrategy?.updateTitle(Ot.targetRouterState.snapshot), Ot.resolve(!0);
            },
            complete: () => {
              Be = !0;
            }
          }), (0, G.x)(() => {
            Be || dt || this.cancelNavigationTransition(Ce, "", 1), this.currentNavigation?.id === Ce.id && (this.currentNavigation = null);
          }), (0, W.K)(Ot => {
            if (dt = !0, gi(Ot)) {
              Io(Ot) || (re.navigated = !0, re.restoreHistory(Ce, !0));
              const Qt = new _s(Ce.id, this.urlSerializer.serialize(Ce.extractedUrl), Ot.message, Ot.cancellationCode);
              if (this.events.next(Qt), Io(Ot)) {
                const Wn = re.urlHandlingStrategy.merge(Ot.url, re.rawUrlTree),
                  Ui = {
                    skipLocationChange: Ce.extras.skipLocationChange,
                    replaceUrl: "eager" === re.urlUpdateStrategy || pl(Ce.source)
                  };
                re.scheduleNavigation(Wn, yo, null, Ui, {
                  resolve: Ce.resolve,
                  reject: Ce.reject,
                  promise: Ce.promise
                });
              } else Ce.resolve(!1);
            } else {
              re.restoreHistory(Ce, !0);
              const Qt = new Or(Ce.id, this.urlSerializer.serialize(Ce.extractedUrl), Ot, Ce.targetSnapshot ?? void 0);
              this.events.next(Qt);
              try {
                Ce.resolve(re.errorHandler(Ot));
              } catch (Wn) {
                Ce.reject(Wn);
              }
            }
            return L.E;
          }));
        }));
      }
      cancelNavigationTransition(re, Ce, Be) {
        const dt = new _s(re.id, this.urlSerializer.serialize(re.extractedUrl), Ce, Be);
        this.events.next(dt), re.resolve(!1);
      }
    }
    return Q.ɵfac = function (re) {
      return new (re || Q)();
    }, Q.ɵprov = t.Yz7({
      token: Q,
      factory: Q.ɵfac,
      providedIn: "root"
    }), Q;
  })();
  function pl(Q) {
    return Q !== yo;
  }
  let ql = (() => {
      class Q {
        buildTitle(re) {
          let Ce,
            Be = re.root;
          for (; void 0 !== Be;) Ce = this.getResolvedTitleForRoute(Be) ?? Ce, Be = Be.children.find(dt => dt.outlet === le);
          return Ce;
        }
        getResolvedTitleForRoute(re) {
          return re.data[n];
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: function () {
          return (0, t.f3M)(vc);
        },
        providedIn: "root"
      }), Q;
    })(),
    vc = (() => {
      class Q extends ql {
        constructor(re) {
          super(), this.title = re;
        }
        updateTitle(re) {
          const Ce = this.buildTitle(re);
          void 0 !== Ce && this.title.setTitle(Ce);
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)(t.LFG(be.Dx));
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: Q.ɵfac,
        providedIn: "root"
      }), Q;
    })(),
    oc = (() => {
      class Q {}
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: function () {
          return (0, t.f3M)(ec);
        },
        providedIn: "root"
      }), Q;
    })();
  class pc {
    shouldDetach(se) {
      return !1;
    }
    store(se, re) {}
    shouldAttach(se) {
      return !1;
    }
    retrieve(se) {
      return null;
    }
    shouldReuseRoute(se, re) {
      return se.routeConfig === re.routeConfig;
    }
  }
  let ec = (() => {
    class Q extends pc {}
    return Q.ɵfac = function () {
      let se;
      return function (Ce) {
        return (se || (se = t.n5z(Q)))(Ce || Q);
      };
    }(), Q.ɵprov = t.Yz7({
      token: Q,
      factory: Q.ɵfac,
      providedIn: "root"
    }), Q;
  })();
  const rc = new t.OlP("", {
    providedIn: "root",
    factory: () => ({})
  });
  let Bl = (() => {
      class Q {}
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: function () {
          return (0, t.f3M)(gu);
        },
        providedIn: "root"
      }), Q;
    })(),
    gu = (() => {
      class Q {
        shouldProcessUrl(re) {
          return !0;
        }
        extract(re) {
          return re;
        }
        merge(re, Ce) {
          return re;
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: Q.ɵfac,
        providedIn: "root"
      }), Q;
    })();
  function al(Q) {
    throw Q;
  }
  function ca(Q, se, re) {
    return se.parse("/");
  }
  const _a = {
      paths: "exact",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "exact"
    },
    wl = {
      paths: "subset",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "subset"
    };
  let Ja = (() => {
      class Q {
        get navigationId() {
          return this.navigationTransitions.navigationId;
        }
        get browserPageId() {
          return this.location.getState()?.ɵrouterPageId;
        }
        get events() {
          return this.navigationTransitions.events;
        }
        constructor() {
          this.disposed = !1, this.currentPageId = 0, this.console = (0, t.f3M)(t.c2e), this.isNgZoneEnabled = !1, this.options = (0, t.f3M)(rc, {
            optional: !0
          }) || {}, this.errorHandler = this.options.errorHandler || al, this.malformedUriErrorHandler = this.options.malformedUriErrorHandler || ca, this.navigated = !1, this.lastSuccessfulId = -1, this.urlHandlingStrategy = (0, t.f3M)(Bl), this.routeReuseStrategy = (0, t.f3M)(oc), this.urlCreationStrategy = (0, t.f3M)(_r), this.titleStrategy = (0, t.f3M)(ql), this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore", this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly", this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace", this.config = q((0, t.f3M)(Ma, {
            optional: !0
          }) ?? []), this.navigationTransitions = (0, t.f3M)(sl), this.urlSerializer = (0, t.f3M)(fr), this.location = (0, t.f3M)(f.Ye), this.isNgZoneEnabled = (0, t.f3M)(t.R0b) instanceof t.R0b && t.R0b.isInAngularZone(), this.resetConfig(this.config), this.currentUrlTree = new Nn(), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.routerState = sa(this.currentUrlTree, null), this.navigationTransitions.setupNavigations(this).subscribe(re => {
            this.lastSuccessfulId = re.id, this.currentPageId = re.targetPageId;
          }, re => {
            this.console.warn(`Unhandled Navigation Error: ${re}`);
          });
        }
        resetRootComponentType(re) {
          this.routerState.root.component = re, this.navigationTransitions.rootComponentType = re;
        }
        initialNavigation() {
          if (this.setUpLocationChangeListener(), !this.navigationTransitions.hasRequestedNavigation) {
            const re = this.location.getState();
            this.navigateToSyncWithBrowser(this.location.path(!0), yo, re);
          }
        }
        setUpLocationChangeListener() {
          this.locationSubscription || (this.locationSubscription = this.location.subscribe(re => {
            const Ce = "popstate" === re.type ? "popstate" : "hashchange";
            "popstate" === Ce && setTimeout(() => {
              this.navigateToSyncWithBrowser(re.url, Ce, re.state);
            }, 0);
          }));
        }
        navigateToSyncWithBrowser(re, Ce, Be) {
          const dt = {
              replaceUrl: !0
            },
            Ot = Be?.navigationId ? Be : null;
          if (Be) {
            const Wn = {
              ...Be
            };
            delete Wn.navigationId, delete Wn.ɵrouterPageId, 0 !== Object.keys(Wn).length && (dt.state = Wn);
          }
          const Qt = this.parseUrl(re);
          this.scheduleNavigation(Qt, Ce, Ot, dt);
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.navigationTransitions.currentNavigation;
        }
        resetConfig(re) {
          this.config = re.map(Er), this.navigated = !1, this.lastSuccessfulId = -1;
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.navigationTransitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0;
        }
        createUrlTree(re, Ce = {}) {
          const {
              relativeTo: Be,
              queryParams: dt,
              fragment: Ot,
              queryParamsHandling: Qt,
              preserveFragment: Wn
            } = Ce,
            Ui = Wn ? this.currentUrlTree.fragment : Ot;
          let eo = null;
          switch (Qt) {
            case "merge":
              eo = {
                ...this.currentUrlTree.queryParams,
                ...dt
              };
              break;
            case "preserve":
              eo = this.currentUrlTree.queryParams;
              break;
            default:
              eo = dt || null;
          }
          return null !== eo && (eo = this.removeEmptyProps(eo)), this.urlCreationStrategy.createUrlTree(Be, this.routerState, this.currentUrlTree, re, eo, Ui ?? null);
        }
        navigateByUrl(re, Ce = {
          skipLocationChange: !1
        }) {
          const Be = Yo(re) ? re : this.parseUrl(re),
            dt = this.urlHandlingStrategy.merge(Be, this.rawUrlTree);
          return this.scheduleNavigation(dt, yo, null, Ce);
        }
        navigate(re, Ce = {
          skipLocationChange: !1
        }) {
          return function ka(Q) {
            for (let se = 0; se < Q.length; se++) {
              const re = Q[se];
              if (null == re) throw new t.vHH(4008, false);
            }
          }(re), this.navigateByUrl(this.createUrlTree(re, Ce), Ce);
        }
        serializeUrl(re) {
          return this.urlSerializer.serialize(re);
        }
        parseUrl(re) {
          let Ce;
          try {
            Ce = this.urlSerializer.parse(re);
          } catch (Be) {
            Ce = this.malformedUriErrorHandler(Be, this.urlSerializer, re);
          }
          return Ce;
        }
        isActive(re, Ce) {
          let Be;
          if (Be = !0 === Ce ? {
            ..._a
          } : !1 === Ce ? {
            ...wl
          } : Ce, Yo(re)) return Ke(this.currentUrlTree, re, Be);
          const dt = this.parseUrl(re);
          return Ke(this.currentUrlTree, dt, Be);
        }
        removeEmptyProps(re) {
          return Object.keys(re).reduce((Ce, Be) => {
            const dt = re[Be];
            return null != dt && (Ce[Be] = dt), Ce;
          }, {});
        }
        scheduleNavigation(re, Ce, Be, dt, Ot) {
          if (this.disposed) return Promise.resolve(!1);
          let Qt, Wn, Ui, eo;
          return Ot ? (Qt = Ot.resolve, Wn = Ot.reject, Ui = Ot.promise) : Ui = new Promise((Wo, Ve) => {
            Qt = Wo, Wn = Ve;
          }), eo = "computed" === this.canceledNavigationResolution ? Be && Be.ɵrouterPageId ? Be.ɵrouterPageId : dt.replaceUrl || dt.skipLocationChange ? this.browserPageId ?? 0 : (this.browserPageId ?? 0) + 1 : 0, this.navigationTransitions.handleNavigationRequest({
            targetPageId: eo,
            source: Ce,
            restoredState: Be,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: re,
            extras: dt,
            resolve: Qt,
            reject: Wn,
            promise: Ui,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState
          }), Ui.catch(Wo => Promise.reject(Wo));
        }
        setBrowserUrl(re, Ce) {
          const Be = this.urlSerializer.serialize(re),
            dt = {
              ...Ce.extras.state,
              ...this.generateNgRouterState(Ce.id, Ce.targetPageId)
            };
          this.location.isCurrentPathEqualTo(Be) || Ce.extras.replaceUrl ? this.location.replaceState(Be, "", dt) : this.location.go(Be, "", dt);
        }
        restoreHistory(re, Ce = !1) {
          if ("computed" === this.canceledNavigationResolution) {
            const Be = this.currentPageId - re.targetPageId;
            "popstate" !== re.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== this.getCurrentNavigation()?.finalUrl || 0 === Be ? this.currentUrlTree === this.getCurrentNavigation()?.finalUrl && 0 === Be && (this.resetState(re), this.browserUrlTree = re.currentUrlTree, this.resetUrlToCurrentUrlTree()) : this.location.historyGo(Be);
          } else "replace" === this.canceledNavigationResolution && (Ce && this.resetState(re), this.resetUrlToCurrentUrlTree());
        }
        resetState(re) {
          this.routerState = re.currentRouterState, this.currentUrlTree = re.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, re.rawUrl);
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
        }
        generateNgRouterState(re, Ce) {
          return "computed" === this.canceledNavigationResolution ? {
            navigationId: re,
            ɵrouterPageId: Ce
          } : {
            navigationId: re
          };
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)();
      }, Q.ɵprov = t.Yz7({
        token: Q,
        factory: Q.ɵfac,
        providedIn: "root"
      }), Q;
    })(),
    Hc = (() => {
      class Q {
        constructor(re, Ce, Be, dt, Ot, Qt) {
          this.router = re, this.route = Ce, this.tabIndexAttribute = Be, this.renderer = dt, this.el = Ot, this.locationStrategy = Qt, this._preserveFragment = !1, this._skipLocationChange = !1, this._replaceUrl = !1, this.href = null, this.commands = null, this.onChanges = new v.x();
          const Wn = Ot.nativeElement.tagName?.toLowerCase();
          this.isAnchorElement = "a" === Wn || "area" === Wn, this.isAnchorElement ? this.subscription = re.events.subscribe(Ui => {
            Ui instanceof Kr && this.updateHref();
          }) : this.setTabIndexIfNotOnNativeEl("0");
        }
        set preserveFragment(re) {
          this._preserveFragment = (0, t.D6c)(re);
        }
        get preserveFragment() {
          return this._preserveFragment;
        }
        set skipLocationChange(re) {
          this._skipLocationChange = (0, t.D6c)(re);
        }
        get skipLocationChange() {
          return this._skipLocationChange;
        }
        set replaceUrl(re) {
          this._replaceUrl = (0, t.D6c)(re);
        }
        get replaceUrl() {
          return this._replaceUrl;
        }
        setTabIndexIfNotOnNativeEl(re) {
          null != this.tabIndexAttribute || this.isAnchorElement || this.applyAttributeValue("tabindex", re);
        }
        ngOnChanges(re) {
          this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
        }
        set routerLink(re) {
          null != re ? (this.commands = Array.isArray(re) ? re : [re], this.setTabIndexIfNotOnNativeEl("0")) : (this.commands = null, this.setTabIndexIfNotOnNativeEl(null));
        }
        onClick(re, Ce, Be, dt, Ot) {
          return !!(null === this.urlTree || this.isAnchorElement && (0 !== re || Ce || Be || dt || Ot || "string" == typeof this.target && "_self" != this.target)) || (this.router.navigateByUrl(this.urlTree, {
            skipLocationChange: this.skipLocationChange,
            replaceUrl: this.replaceUrl,
            state: this.state
          }), !this.isAnchorElement);
        }
        ngOnDestroy() {
          this.subscription?.unsubscribe();
        }
        updateHref() {
          this.href = null !== this.urlTree && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null;
          const re = null === this.href ? null : (0, t.P3R)(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
          this.applyAttributeValue("href", re);
        }
        applyAttributeValue(re, Ce) {
          const Be = this.renderer,
            dt = this.el.nativeElement;
          null !== Ce ? Be.setAttribute(dt, re, Ce) : Be.removeAttribute(dt, re);
        }
        get urlTree() {
          return null === this.commands ? null : this.router.createUrlTree(this.commands, {
            relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: this.preserveFragment
          });
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)(t.Y36(Ja), t.Y36(ua), t.$8M("tabindex"), t.Y36(t.Qsj), t.Y36(t.SBq), t.Y36(f.S$));
      }, Q.ɵdir = t.lG2({
        type: Q,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (re, Ce) {
          1 & re && t.NdJ("click", function (dt) {
            return Ce.onClick(dt.button, dt.ctrlKey, dt.shiftKey, dt.altKey, dt.metaKey);
          }), 2 & re && t.uIk("target", Ce.target);
        },
        inputs: {
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          state: "state",
          relativeTo: "relativeTo",
          preserveFragment: "preserveFragment",
          skipLocationChange: "skipLocationChange",
          replaceUrl: "replaceUrl",
          routerLink: "routerLink"
        },
        standalone: !0,
        features: [t.TTD]
      }), Q;
    })(),
    tc = (() => {
      class Q {
        get isActive() {
          return this._isActive;
        }
        constructor(re, Ce, Be, dt, Ot) {
          this.router = re, this.element = Ce, this.renderer = Be, this.cdr = dt, this.link = Ot, this.classes = [], this._isActive = !1, this.routerLinkActiveOptions = {
            exact: !1
          }, this.isActiveChange = new t.vpe(), this.routerEventsSubscription = re.events.subscribe(Qt => {
            Qt instanceof Kr && this.update();
          });
        }
        ngAfterContentInit() {
          (0, a.of)(this.links.changes, (0, a.of)(null)).pipe((0, pe.J)()).subscribe(re => {
            this.update(), this.subscribeToEachLinkOnChanges();
          });
        }
        subscribeToEachLinkOnChanges() {
          this.linkInputChangesSubscription?.unsubscribe();
          const re = [...this.links.toArray(), this.link].filter(Ce => !!Ce).map(Ce => Ce.onChanges);
          this.linkInputChangesSubscription = (0, e.D)(re).pipe((0, pe.J)()).subscribe(Ce => {
            this._isActive !== this.isLinkActive(this.router)(Ce) && this.update();
          });
        }
        set routerLinkActive(re) {
          const Ce = Array.isArray(re) ? re : re.split(" ");
          this.classes = Ce.filter(Be => !!Be);
        }
        ngOnChanges(re) {
          this.update();
        }
        ngOnDestroy() {
          this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe();
        }
        update() {
          !this.links || !this.router.navigated || Promise.resolve().then(() => {
            const re = this.hasActiveLinks();
            this._isActive !== re && (this._isActive = re, this.cdr.markForCheck(), this.classes.forEach(Ce => {
              re ? this.renderer.addClass(this.element.nativeElement, Ce) : this.renderer.removeClass(this.element.nativeElement, Ce);
            }), re && void 0 !== this.ariaCurrentWhenActive ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this.isActiveChange.emit(re));
          });
        }
        isLinkActive(re) {
          const Ce = function zl(Q) {
            return !!Q.paths;
          }(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1;
          return Be => !!Be.urlTree && re.isActive(Be.urlTree, Ce);
        }
        hasActiveLinks() {
          const re = this.isLinkActive(this.router);
          return this.link && re(this.link) || this.links.some(re);
        }
      }
      return Q.ɵfac = function (re) {
        return new (re || Q)(t.Y36(Ja), t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(t.sBO), t.Y36(Hc, 8));
      }, Q.ɵdir = t.lG2({
        type: Q,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (re, Ce, Be) {
          if (1 & re && t.Suo(Be, Hc, 5), 2 & re) {
            let dt;
            t.iGM(dt = t.CRH()) && (Ce.links = dt);
          }
        },
        inputs: {
          routerLinkActiveOptions: "routerLinkActiveOptions",
          ariaCurrentWhenActive: "ariaCurrentWhenActive",
          routerLinkActive: "routerLinkActive"
        },
        outputs: {
          isActiveChange: "isActiveChange"
        },
        exportAs: ["routerLinkActive"],
        standalone: !0,
        features: [t.TTD]
      }), Q;
    })();
  class Tc {}
  let ll = (() => {
    class Q {
      constructor(re, Ce, Be, dt, Ot) {
        this.router = re, this.injector = Be, this.preloadingStrategy = dt, this.loader = Ot;
      }
      setUpPreloading() {
        this.subscription = this.router.events.pipe((0, T.h)(re => re instanceof Kr), (0, y.b)(() => this.preload())).subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(re, Ce) {
        const Be = [];
        for (const dt of Ce) {
          dt.providers && !dt._injector && (dt._injector = (0, t.MMx)(dt.providers, re, `Route: ${dt.path}`));
          const Ot = dt._injector ?? re,
            Qt = dt._loadedInjector ?? Ot;
          dt.loadChildren && !dt._loadedRoutes && void 0 === dt.canLoad || dt.loadComponent && !dt._loadedComponent ? Be.push(this.preloadConfig(Ot, dt)) : (dt.children || dt._loadedRoutes) && Be.push(this.processRoutes(Qt, dt.children ?? dt._loadedRoutes));
        }
        return (0, e.D)(Be).pipe((0, pe.J)());
      }
      preloadConfig(re, Ce) {
        return this.preloadingStrategy.preload(Ce, () => {
          let Be;
          Be = Ce.loadChildren && void 0 === Ce.canLoad ? this.loader.loadChildren(re, Ce) : (0, a.of)(null);
          const dt = Be.pipe((0, R.z)(Ot => null === Ot ? (0, a.of)(void 0) : (Ce._loadedRoutes = Ot.routes, Ce._loadedInjector = Ot.injector, this.processRoutes(Ot.injector ?? re, Ot.routes))));
          if (Ce.loadComponent && !Ce._loadedComponent) {
            const Ot = this.loader.loadComponent(Ce);
            return (0, e.D)([dt, Ot]).pipe((0, pe.J)());
          }
          return dt;
        });
      }
    }
    return Q.ɵfac = function (re) {
      return new (re || Q)(t.LFG(Ja), t.LFG(t.Sil), t.LFG(t.lqb), t.LFG(Tc), t.LFG(Ia));
    }, Q.ɵprov = t.Yz7({
      token: Q,
      factory: Q.ɵfac,
      providedIn: "root"
    }), Q;
  })();
  const Tl = new t.OlP("");
  let $c = (() => {
    class Q {
      constructor(re, Ce, Be, dt, Ot = {}) {
        this.urlSerializer = re, this.transitions = Ce, this.viewportScroller = Be, this.zone = dt, this.options = Ot, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, Ot.scrollPositionRestoration = Ot.scrollPositionRestoration || "disabled", Ot.anchorScrolling = Ot.anchorScrolling || "disabled";
      }
      init() {
        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents();
      }
      createScrollEvents() {
        return this.transitions.events.subscribe(re => {
          re instanceof Qo ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = re.navigationTrigger, this.restoredId = re.restoredState ? re.restoredState.navigationId : 0) : re instanceof Kr && (this.lastId = re.id, this.scheduleScrollEvent(re, this.urlSerializer.parse(re.urlAfterRedirects).fragment));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe(re => {
          re instanceof di && (re.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(re.position) : re.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(re.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(re, Ce) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(new di(re, "popstate" === this.lastSource ? this.store[this.restoredId] : null, Ce));
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe();
      }
    }
    return Q.ɵfac = function (re) {
      t.$Z();
    }, Q.ɵprov = t.Yz7({
      token: Q,
      factory: Q.ɵfac
    }), Q;
  })();
  var Ml = (() => ((Ml = Ml || {})[Ml.COMPLETE = 0] = "COMPLETE", Ml[Ml.FAILED = 1] = "FAILED", Ml[Ml.REDIRECTING = 2] = "REDIRECTING", Ml))();
  const Bc = !1;
  function bu(Q, ...se) {
    return (0, t.MR2)([{
      provide: Ma,
      multi: !0,
      useValue: Q
    }, Bc ? {
      provide: sc,
      useValue: !0
    } : [], {
      provide: ua,
      useFactory: Kc,
      deps: [Ja]
    }, {
      provide: t.tb,
      multi: !0,
      useFactory: ac
    }, se.map(re => re.ɵproviders)]);
  }
  function Kc(Q) {
    return Q.routerState.root;
  }
  function Al(Q, se) {
    return {
      ɵkind: Q,
      ɵproviders: se
    };
  }
  const sc = new t.OlP("", {
    providedIn: "root",
    factory: () => !1
  });
  function ac() {
    const Q = (0, t.f3M)(t.zs3);
    return se => {
      const re = Q.get(t.z2F);
      if (se !== re.components[0]) return;
      const Ce = Q.get(Ja),
        Be = Q.get(Pa);
      1 === Q.get(cl) && Ce.initialNavigation(), Q.get(Jc, null, t.XFs.Optional)?.setUpPreloading(), Q.get(Tl, null, t.XFs.Optional)?.init(), Ce.resetRootComponentType(re.componentTypes[0]), Be.closed || (Be.next(), Be.unsubscribe());
    };
  }
  const Pa = new t.OlP(Bc ? "bootstrap done indicator" : "", {
      factory: () => new v.x()
    }),
    cl = new t.OlP(Bc ? "initial navigation" : "", {
      providedIn: "root",
      factory: () => 1
    });
  function Rl() {
    let Q = [];
    return Q = Bc ? [{
      provide: t.Xts,
      multi: !0,
      useFactory: () => {
        const se = (0, t.f3M)(Ja);
        return () => se.events.subscribe(re => {
          console.group?.(`Router Event: ${re.constructor.name}`), console.log(function Gn(Q) {
            if (!("type" in Q)) return `Unknown Router Event: ${Q.constructor.name}`;
            switch (Q.type) {
              case 14:
                return `ActivationEnd(path: '${Q.snapshot.routeConfig?.path || ""}')`;
              case 13:
                return `ActivationStart(path: '${Q.snapshot.routeConfig?.path || ""}')`;
              case 12:
                return `ChildActivationEnd(path: '${Q.snapshot.routeConfig?.path || ""}')`;
              case 11:
                return `ChildActivationStart(path: '${Q.snapshot.routeConfig?.path || ""}')`;
              case 8:
                return `GuardsCheckEnd(id: ${Q.id}, url: '${Q.url}', urlAfterRedirects: '${Q.urlAfterRedirects}', state: ${Q.state}, shouldActivate: ${Q.shouldActivate})`;
              case 7:
                return `GuardsCheckStart(id: ${Q.id}, url: '${Q.url}', urlAfterRedirects: '${Q.urlAfterRedirects}', state: ${Q.state})`;
              case 2:
                return `NavigationCancel(id: ${Q.id}, url: '${Q.url}')`;
              case 16:
                return `NavigationSkipped(id: ${Q.id}, url: '${Q.url}')`;
              case 1:
                return `NavigationEnd(id: ${Q.id}, url: '${Q.url}', urlAfterRedirects: '${Q.urlAfterRedirects}')`;
              case 3:
                return `NavigationError(id: ${Q.id}, url: '${Q.url}', error: ${Q.error})`;
              case 0:
                return `NavigationStart(id: ${Q.id}, url: '${Q.url}')`;
              case 6:
                return `ResolveEnd(id: ${Q.id}, url: '${Q.url}', urlAfterRedirects: '${Q.urlAfterRedirects}', state: ${Q.state})`;
              case 5:
                return `ResolveStart(id: ${Q.id}, url: '${Q.url}', urlAfterRedirects: '${Q.urlAfterRedirects}', state: ${Q.state})`;
              case 10:
                return `RouteConfigLoadEnd(path: ${Q.route.path})`;
              case 9:
                return `RouteConfigLoadStart(path: ${Q.route.path})`;
              case 4:
                return `RoutesRecognized(id: ${Q.id}, url: '${Q.url}', urlAfterRedirects: '${Q.urlAfterRedirects}', state: ${Q.state})`;
              case 15:
                return `Scroll(anchor: '${Q.anchor}', position: '${Q.position ? `${Q.position[0]}, ${Q.position[1]}` : null}')`;
            }
          }(re)), console.log(re), console.groupEnd?.();
        });
      }
    }] : [], Al(1, Q);
  }
  const Jc = new t.OlP(Bc ? "router preloader" : "");
  function _t(Q) {
    return Al(0, [{
      provide: Jc,
      useExisting: ll
    }, {
      provide: Tc,
      useExisting: Q
    }]);
  }
  const Zo = !1,
    pa = new t.OlP(Zo ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD"),
    fl = [f.Ye, {
      provide: fr,
      useClass: pt
    }, Ja, Vt, {
      provide: ua,
      useFactory: Kc,
      deps: [Ja]
    }, Ia, Zo ? {
      provide: sc,
      useValue: !0
    } : []];
  function Bs() {
    return new t.PXZ("Router", Ja);
  }
  let qc = (() => {
    class Q {
      constructor(re) {}
      static forRoot(re, Ce) {
        return {
          ngModule: Q,
          providers: [fl, Zo && Ce?.enableTracing ? Rl().ɵproviders : [], {
            provide: Ma,
            multi: !0,
            useValue: re
          }, {
            provide: pa,
            useFactory: si,
            deps: [[Ja, new t.FiY(), new t.tp0()]]
          }, {
            provide: rc,
            useValue: Ce || {}
          }, Ce?.useHash ? {
            provide: f.S$,
            useClass: f.Do
          } : {
            provide: f.S$,
            useClass: f.b0
          }, {
            provide: Tl,
            useFactory: () => {
              const Q = (0, t.f3M)(f.EM),
                se = (0, t.f3M)(t.R0b),
                re = (0, t.f3M)(rc),
                Ce = (0, t.f3M)(sl),
                Be = (0, t.f3M)(fr);
              return re.scrollOffset && Q.setOffset(re.scrollOffset), new $c(Be, Ce, Q, se, re);
            }
          }, Ce?.preloadingStrategy ? _t(Ce.preloadingStrategy).ɵproviders : [], {
            provide: t.PXZ,
            multi: !0,
            useFactory: Bs
          }, Ce?.initialNavigation ? Oo(Ce) : [], [{
            provide: xs,
            useFactory: ac
          }, {
            provide: t.tb,
            multi: !0,
            useExisting: xs
          }]]
        };
      }
      static forChild(re) {
        return {
          ngModule: Q,
          providers: [{
            provide: Ma,
            multi: !0,
            useValue: re
          }]
        };
      }
    }
    return Q.ɵfac = function (re) {
      return new (re || Q)(t.LFG(pa, 8));
    }, Q.ɵmod = t.oAB({
      type: Q
    }), Q.ɵinj = t.cJS({
      imports: [Ko]
    }), Q;
  })();
  function si(Q) {
    if (Zo && Q) throw new t.vHH(4007, "The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.");
    return "guarded";
  }
  function Oo(Q) {
    return ["disabled" === Q.initialNavigation ? Al(3, [{
      provide: t.ip1,
      multi: !0,
      useFactory: () => {
        const se = (0, t.f3M)(Ja);
        return () => {
          se.setUpLocationChangeListener();
        };
      }
    }, {
      provide: cl,
      useValue: 2
    }]).ɵproviders : [], "enabledBlocking" === Q.initialNavigation ? Al(2, [{
      provide: cl,
      useValue: 0
    }, {
      provide: t.ip1,
      multi: !0,
      deps: [t.zs3],
      useFactory: se => {
        const re = se.get(f.V_, Promise.resolve());
        return () => re.then(() => new Promise(Ce => {
          const Be = se.get(Ja),
            dt = se.get(Pa);
          (function Vl(Q, se) {
            Q.events.pipe((0, T.h)(re => re instanceof Kr || re instanceof _s || re instanceof Or || re instanceof ra), (0, E.U)(re => re instanceof Kr || re instanceof ra ? Ml.COMPLETE : re instanceof _s && (0 === re.code || 1 === re.code) ? Ml.REDIRECTING : Ml.FAILED), (0, T.h)(re => re !== Ml.REDIRECTING), (0, x.q)(1)).subscribe(() => {
              se();
            });
          })(Be, () => {
            Ce(!0);
          }), se.get(sl).afterPreactivation = () => (Ce(!0), dt.closed ? (0, a.of)(void 0) : dt), Be.initialNavigation();
        }));
      }
    }]).ɵproviders : []];
  }
  const xs = new t.OlP(Zo ? "Router Initializer" : "");
});
