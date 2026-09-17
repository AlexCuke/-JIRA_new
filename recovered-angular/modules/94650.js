// Extracted from main; webpack module 94650. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $8M: () => Pa,
    $WT: () => us,
    $Z: () => Yg,
    AFp: () => tf,
    ALo: () => Zb,
    AaK: () => A,
    Akn: () => Xh,
    AsE: () => c4,
    B6R: () => ti,
    BQk: () => X0,
    CHM: () => mo,
    CRH: () => o2,
    CZH: () => wg,
    CqO: () => t4,
    D6c: () => L3,
    DdM: () => pC,
    Dn7: () => j_,
    EEQ: () => Bt,
    EJc: () => Oc,
    EiD: () => $s,
    EpF: () => Jv,
    F$t: () => nr,
    F4k: () => Xv,
    FYo: () => lg,
    FiY: () => Ca,
    Gf: () => t2,
    GfV: () => vf,
    GkF: () => Kv,
    Gpc: () => O,
    Gre: () => Ip,
    GuJ: () => Di,
    HOy: () => u4,
    HTZ: () => Hb,
    Hsn: () => Dr,
    IIB: () => XM,
    Ikx: () => m4,
    JOm: () => Zl,
    JVY: () => mc,
    JZr: () => E,
    Jf7: () => Kp,
    KtG: () => Xo,
    L6k: () => Ph,
    LAX: () => Oh,
    LFG: () => $t,
    LSH: () => Om,
    Lbi: () => nf,
    Lck: () => AM,
    MAs: () => zv,
    MMx: () => Ob,
    MR2: () => ud,
    NdJ: () => q0,
    O4$: () => ic,
    OlP: () => Vi,
    Oqu: () => a4,
    P3R: () => Ig,
    PXZ: () => h3,
    Q6J: () => J0,
    QGY: () => Qv,
    QbO: () => Jm,
    Qsj: () => Ng,
    R0b: () => rf,
    RDi: () => xe,
    Rgc: () => f1,
    SBq: () => Jf,
    Sil: () => q4,
    Suo: () => n2,
    TTD: () => It,
    TgZ: () => hm,
    Tol: () => jx,
    Udp: () => eC,
    VKq: () => O4,
    W1O: () => m1,
    WFA: () => ee,
    WLB: () => Nb,
    X6Q: () => x3,
    XFs: () => Ee,
    Xpm: () => ji,
    Xts: () => ff,
    Y36: () => wf,
    YKP: () => Pb,
    YNc: () => Wv,
    Yjl: () => Oi,
    Yz7: () => We,
    Z0I: () => mt,
    ZZ4: () => fx,
    _Bn: () => Db,
    _UZ: () => $v,
    _Vd: () => Rh,
    _c5: () => H2,
    _uU: () => $x,
    aQg: () => mx,
    c2e: () => Qm,
    cJS: () => st,
    cg1: () => g4,
    d8E: () => o1,
    dDg: () => c3,
    dqk: () => Pi,
    dwT: () => dD,
    eBb: () => xp,
    eFA: () => M2,
    eJc: () => Du,
    ekj: () => r4,
    eoX: () => ox,
    evT: () => lp,
    f3M: () => Qn,
    g9A: () => g2,
    gM2: () => Gb,
    h0i: () => u1,
    hGG: () => OC,
    hij: () => l4,
    i9L: () => $e,
    iGM: () => e2,
    ifc: () => Pr,
    ip1: () => m2,
    jDz: () => Ab,
    kEZ: () => Ub,
    kL8: () => rC,
    kYT: () => ki,
    kuF: () => x,
    l5B: () => A4,
    lG2: () => Wt,
    lcZ: () => Wb,
    lnq: () => iC,
    lqb: () => Au,
    lri: () => x2,
    mCW: () => df,
    n5z: () => Bi,
    n_E: () => mC,
    oAB: () => Rn,
    oJD: () => Dd,
    oxw: () => Xi,
    pB0: () => Wp,
    q3G: () => ru,
    qLn: () => Fm,
    qOj: () => Wh,
    qZA: () => fm,
    qzn: () => qa,
    rWj: () => b2,
    ryx: () => kM,
    s9C: () => ds,
    sBO: () => b3,
    s_b: () => _C,
    soG: () => Qu,
    tBr: () => Jr,
    tb: () => C1,
    tp0: () => Ta,
    uIk: () => Po,
    vHH: () => h,
    vpe: () => Bf,
    wAp: () => vl,
    xi3: () => zb,
    xp6: () => cn,
    ynx: () => Qg,
    z2F: () => Qc,
    z3N: () => gl,
    zSh: () => Sm,
    zs3: () => Sa
  });
  var t = i(77579),
    e = i(50727),
    a = i(69751),
    m = i(56451),
    d = i(13099);
  function M(w) {
    for (let P in w) if (w[P] === M) return P;
    throw Error("Could not find renamed property on target object.");
  }
  function b(w, P) {
    for (const U in P) P.hasOwnProperty(U) && !w.hasOwnProperty(U) && (w[U] = P[U]);
  }
  function A(w) {
    if ("string" == typeof w) return w;
    if (Array.isArray(w)) return "[" + w.map(A).join(", ") + "]";
    if (null == w) return "" + w;
    if (w.overriddenName) return `${w.overriddenName}`;
    if (w.name) return `${w.name}`;
    const P = w.toString();
    if (null == P) return "" + P;
    const U = P.indexOf("\n");
    return -1 === U ? P : P.substring(0, U);
  }
  function N(w, P) {
    return null == w || "" === w ? null === P ? "" : P : null == P || "" === P ? w : w + " " + P;
  }
  const I = M({
    __forward_ref__: M
  });
  function O(w) {
    return w.__forward_ref__ = O, w.toString = function () {
      return A(this());
    }, w;
  }
  function L(w) {
    return C(w) ? w() : w;
  }
  function C(w) {
    return "function" == typeof w && w.hasOwnProperty(I) && w.__forward_ref__ === O;
  }
  function v(w) {
    return w && !!w.ɵproviders;
  }
  const E = "https://g.co/ng/security#xss";
  class h extends Error {
    constructor(P, U) {
      super(x(P, U)), this.code = P;
    }
  }
  function x(w, P) {
    return `NG0${Math.abs(w)}${P ? ": " + P.trim() : ""}`;
  }
  function u(w) {
    return "string" == typeof w ? w : null == w ? "" : String(w);
  }
  function j(w, P) {
    throw new h(-201, !1);
  }
  function le(w, P) {
    null == w && function n(w, P, U, ne) {
      throw new Error(`ASSERTION ERROR: ${w}` + (null == ne ? "" : ` [Expected=> ${U} ${ne} ${P} <=Actual]`));
    }(P, w, null, "!=");
  }
  function We(w) {
    return {
      token: w.token,
      providedIn: w.providedIn || null,
      factory: w.factory,
      value: void 0
    };
  }
  function st(w) {
    return {
      providers: w.providers || [],
      imports: w.imports || []
    };
  }
  function q(w) {
    return ut(w, Ue) || ut(w, Ke);
  }
  function mt(w) {
    return null !== q(w);
  }
  function ut(w, P) {
    return w.hasOwnProperty(P) ? w[P] : null;
  }
  function Et(w) {
    return w && (w.hasOwnProperty(Me) || w.hasOwnProperty(Ze)) ? w[Me] : null;
  }
  const Ue = M({
      ɵprov: M
    }),
    Me = M({
      ɵinj: M
    }),
    Ke = M({
      ngInjectableDef: M
    }),
    Ze = M({
      ngInjectorDef: M
    });
  var Ee = (() => ((Ee = Ee || {})[Ee.Default = 0] = "Default", Ee[Ee.Host = 1] = "Host", Ee[Ee.Self = 2] = "Self", Ee[Ee.SkipSelf = 4] = "SkipSelf", Ee[Ee.Optional = 8] = "Optional", Ee))();
  let je;
  function Je(w) {
    const P = je;
    return je = w, P;
  }
  function Xt(w, P, U) {
    const ne = q(w);
    return ne && "root" == ne.providedIn ? void 0 === ne.value ? ne.value = ne.factory() : ne.value : U & Ee.Optional ? null : void 0 !== P ? P : void j(A(w));
  }
  const Pi = (() => typeof globalThis < "u" && globalThis || typeof global < "u" && global || typeof window < "u" && window || typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self)(),
    Jo = {},
    fr = "__NG_DI_FLAG__",
    pt = "ngTempTokenPath",
    Dt = "ngTokenPath",
    Ht = /\n/gm,
    Dn = "ɵ",
    vt = "__source";
  let an;
  function li(w) {
    const P = an;
    return an = w, P;
  }
  function zn(w, P = Ee.Default) {
    if (void 0 === an) throw new h(-203, !1);
    return null === an ? Xt(w, void 0, P) : an.get(w, P & Ee.Optional ? null : void 0, P);
  }
  function $t(w, P = Ee.Default) {
    return (function Mt() {
      return je;
    }() || zn)(L(w), P);
  }
  function Qn(w, P = Ee.Default) {
    return $t(w, In(P));
  }
  function In(w) {
    return typeof w > "u" || "number" == typeof w ? w : 0 | (w.optional && 8) | (w.host && 1) | (w.self && 2) | (w.skipSelf && 4);
  }
  function ui(w) {
    const P = [];
    for (let U = 0; U < w.length; U++) {
      const ne = L(w[U]);
      if (Array.isArray(ne)) {
        if (0 === ne.length) throw new h(900, !1);
        let he,
          Fe = Ee.Default;
        for (let ot = 0; ot < ne.length; ot++) {
          const Nt = ne[ot],
            qt = bi(Nt);
          "number" == typeof qt ? -1 === qt ? he = Nt.token : Fe |= qt : he = Nt;
        }
        P.push($t(he, Fe));
      } else P.push($t(ne));
    }
    return P;
  }
  function To(w, P) {
    return w[fr] = P, w.prototype[fr] = P, w;
  }
  function bi(w) {
    return w[fr];
  }
  function Yi(w) {
    return {
      toString: w
    }.toString();
  }
  var Eo = (() => ((Eo = Eo || {})[Eo.OnPush = 0] = "OnPush", Eo[Eo.Default = 1] = "Default", Eo))(),
    Pr = (() => {
      return (w = Pr || (Pr = {}))[w.Emulated = 0] = "Emulated", w[w.None = 2] = "None", w[w.ShadowDom = 3] = "ShadowDom", Pr;
      var w;
    })();
  const qo = {},
    Yo = [],
    wr = M({
      ɵcmp: M
    }),
    oo = M({
      ɵdir: M
    }),
    Di = M({
      ɵpipe: M
    }),
    Ci = M({
      ɵmod: M
    }),
    lo = M({
      ɵfac: M
    }),
    jo = M({
      __NG_ELEMENT_ID__: M
    });
  let Go = 0;
  function ji(w) {
    return Yi(() => {
      const U = !0 === w.standalone,
        ne = {},
        he = {
          type: w.type,
          providersResolver: null,
          decls: w.decls,
          vars: w.vars,
          factory: null,
          template: w.template || null,
          consts: w.consts || null,
          ngContentSelectors: w.ngContentSelectors,
          hostBindings: w.hostBindings || null,
          hostVars: w.hostVars || 0,
          hostAttrs: w.hostAttrs || null,
          contentQueries: w.contentQueries || null,
          declaredInputs: ne,
          inputs: null,
          outputs: null,
          exportAs: w.exportAs || null,
          onPush: w.changeDetection === Eo.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          standalone: U,
          dependencies: U && w.dependencies || null,
          getStandaloneInjector: null,
          selectors: w.selectors || Yo,
          viewQuery: w.viewQuery || null,
          features: w.features || null,
          data: w.data || {},
          encapsulation: w.encapsulation || Pr.Emulated,
          id: "c" + Go++,
          styles: w.styles || Yo,
          _: null,
          setInput: null,
          schemas: w.schemas || null,
          tView: null,
          findHostDirectiveDefs: null,
          hostDirectives: null
        },
        Fe = w.dependencies,
        ot = w.features;
      return he.inputs = Ei(w.inputs, ne), he.outputs = Ei(w.outputs), ot && ot.forEach(Nt => Nt(he)), he.directiveDefs = Fe ? () => ("function" == typeof Fe ? Fe() : Fe).map(fi).filter(Fi) : null, he.pipeDefs = Fe ? () => ("function" == typeof Fe ? Fe() : Fe).map(Sr).filter(Fi) : null, he;
    });
  }
  function ti(w, P, U) {
    const ne = w.ɵcmp;
    ne.directiveDefs = () => ("function" == typeof P ? P() : P).map(fi), ne.pipeDefs = () => ("function" == typeof U ? U() : U).map(Sr);
  }
  function fi(w) {
    return Ji(w) || Ao(w);
  }
  function Fi(w) {
    return null !== w;
  }
  function Rn(w) {
    return Yi(() => ({
      type: w.type,
      bootstrap: w.bootstrap || Yo,
      declarations: w.declarations || Yo,
      imports: w.imports || Yo,
      exports: w.exports || Yo,
      transitiveCompileScopes: null,
      schemas: w.schemas || null,
      id: w.id || null
    }));
  }
  function ki(w, P) {
    return Yi(() => {
      const U = Ps(w, !0);
      U.declarations = P.declarations || Yo, U.imports = P.imports || Yo, U.exports = P.exports || Yo;
    });
  }
  function Ei(w, P) {
    if (null == w) return qo;
    const U = {};
    for (const ne in w) if (w.hasOwnProperty(ne)) {
      let he = w[ne],
        Fe = he;
      Array.isArray(he) && (Fe = he[1], he = he[0]), U[he] = ne, P && (P[he] = Fe);
    }
    return U;
  }
  const Wt = ji;
  function Oi(w) {
    return {
      type: w.type,
      name: w.name,
      factory: null,
      pure: !1 !== w.pure,
      standalone: !0 === w.standalone,
      onDestroy: w.type.prototype.ngOnDestroy || null
    };
  }
  function Ji(w) {
    return w[wr] || null;
  }
  function Ao(w) {
    return w[oo] || null;
  }
  function Sr(w) {
    return w[Di] || null;
  }
  function us(w) {
    const P = Ji(w) || Ao(w) || Sr(w);
    return null !== P && P.standalone;
  }
  function Ps(w, P) {
    const U = w[Ci] || null;
    if (!U && !0 === P) throw new Error(`Type ${A(w)} does not have '\u0275mod' property.`);
    return U;
  }
  const hs = 0,
    oi = 1,
    yo = 2,
    Qi = 3,
    Qo = 4,
    Kr = 5,
    _s = 6,
    ra = 7,
    Or = 8,
    Fs = 9,
    xa = 10,
    rs = 11,
    Js = 12,
    ho = 13,
    uo = 14,
    ri = 15,
    Yt = 16,
    jt = 17,
    hn = 18,
    tn = 19,
    di = 20,
    Gn = 21,
    dn = 22,
    Ro = 1,
    _r = 2,
    qr = 7,
    Ts = 8,
    js = 9,
    ws = 10;
  function Ws(w) {
    return Array.isArray(w) && "object" == typeof w[Ro];
  }
  function sa(w) {
    return Array.isArray(w) && !0 === w[Ro];
  }
  function ha(w) {
    return 0 != (4 & w.flags);
  }
  function ua(w) {
    return w.componentOffset > -1;
  }
  function da(w) {
    return 1 == (1 & w.flags);
  }
  function na(w) {
    return null !== w.template;
  }
  function Qs(w) {
    return 0 != (256 & w[yo]);
  }
  function Ko(w, P) {
    return w.hasOwnProperty(lo) ? w[lo] : null;
  }
  class Mi {
    constructor(P, U, ne) {
      this.previousValue = P, this.currentValue = U, this.firstChange = ne;
    }
    isFirstChange() {
      return this.firstChange;
    }
  }
  function It() {
    return At;
  }
  function At(w) {
    return w.type.prototype.ngOnChanges && (w.setInput = it), _n;
  }
  function _n() {
    const w = gt(this),
      P = w?.current;
    if (P) {
      const U = w.previous;
      if (U === qo) w.previous = P;else for (let ne in P) U[ne] = P[ne];
      w.current = null, this.ngOnChanges(P);
    }
  }
  function it(w, P, U, ne) {
    const he = this.declaredInputs[U],
      Fe = gt(w) || function ni(w, P) {
        return w[_e] = P;
      }(w, {
        previous: qo,
        current: null
      }),
      ot = Fe.current || (Fe.current = {}),
      Nt = Fe.previous,
      qt = Nt[he];
    ot[he] = new Mi(qt && qt.currentValue, P, Nt === qo), w[ne] = P;
  }
  It.ngInherit = !0;
  const _e = "__ngSimpleChanges__";
  function gt(w) {
    return w[_e] || null;
  }
  const Br = function (w, P, U) {},
    vr = "svg";
  function ks(w) {
    for (; Array.isArray(w);) w = w[hs];
    return w;
  }
  function Ka(w, P) {
    return ks(P[w]);
  }
  function ja(w, P) {
    return ks(P[w.index]);
  }
  function Ln(w, P) {
    return w.data[P];
  }
  function en(w, P) {
    return w[P];
  }
  function mi(w, P) {
    const U = P[w];
    return Ws(U) ? U : U[hs];
  }
  function cr(w) {
    return 64 == (64 & w[yo]);
  }
  function as(w, P) {
    return null == P ? null : w[P];
  }
  function Da(w) {
    w[hn] = 0;
  }
  function vo(w, P) {
    w[Kr] += P;
    let U = w,
      ne = w[Qi];
    for (; null !== ne && (1 === P && 1 === U[Kr] || -1 === P && 0 === U[Kr]);) ne[Kr] += P, U = ne, ne = ne[Qi];
  }
  const As = {
    lFrame: Hr(null),
    bindingsEnabled: !0
  };
  function mn() {
    return As.bindingsEnabled;
  }
  function Zt() {
    return As.lFrame.lView;
  }
  function Li() {
    return As.lFrame.tView;
  }
  function mo(w) {
    return As.lFrame.contextLView = w, w[Or];
  }
  function Xo(w) {
    return As.lFrame.contextLView = null, w;
  }
  function Cr() {
    let w = Xr();
    for (; null !== w && 64 === w.type;) w = w.parent;
    return w;
  }
  function Xr() {
    return As.lFrame.currentTNode;
  }
  function Hs(w, P) {
    const U = As.lFrame;
    U.currentTNode = w, U.isParent = P;
  }
  function la() {
    return As.lFrame.isParent;
  }
  function St() {
    As.lFrame.isParent = !1;
  }
  function Nr() {
    const w = As.lFrame;
    let P = w.bindingRootIndex;
    return -1 === P && (P = w.bindingRootIndex = w.tView.bindingStartIndex), P;
  }
  function oa() {
    return As.lFrame.bindingIndex;
  }
  function Qr() {
    return As.lFrame.bindingIndex++;
  }
  function Il(w) {
    const P = As.lFrame,
      U = P.bindingIndex;
    return P.bindingIndex = P.bindingIndex + w, U;
  }
  function Wl(w, P) {
    const U = As.lFrame;
    U.bindingIndex = U.bindingRootIndex = w, Zc(P);
  }
  function Zc(w) {
    As.lFrame.currentDirectiveIndex = w;
  }
  function Yc(w) {
    const P = As.lFrame.currentDirectiveIndex;
    return -1 === P ? null : w[P];
  }
  function nu() {
    return As.lFrame.currentQueryIndex;
  }
  function kl(w) {
    As.lFrame.currentQueryIndex = w;
  }
  function mu(w) {
    const P = w[oi];
    return 2 === P.type ? P.declTNode : 1 === P.type ? w[_s] : null;
  }
  function Wc(w, P, U) {
    if (U & Ee.SkipSelf) {
      let he = P,
        Fe = w;
      for (; !(he = he.parent, null !== he || U & Ee.Host || (he = mu(Fe), null === he || (Fe = Fe[ri], 10 & he.type))););
      if (null === he) return !1;
      P = he, w = Fe;
    }
    const ne = As.lFrame = ir();
    return ne.currentTNode = P, ne.lView = w, !0;
  }
  function gc(w) {
    const P = ir(),
      U = w[oi];
    As.lFrame = P, P.currentTNode = U.firstChild, P.lView = w, P.tView = U, P.contextLView = w, P.bindingIndex = U.bindingStartIndex, P.inI18n = !1;
  }
  function ir() {
    const w = As.lFrame,
      P = null === w ? null : w.child;
    return null === P ? Hr(w) : P;
  }
  function Hr(w) {
    const P = {
      currentTNode: null,
      isParent: !0,
      lView: null,
      tView: null,
      selectedIndex: -1,
      contextLView: null,
      elementDepthCount: 0,
      currentNamespace: null,
      currentDirectiveIndex: -1,
      bindingRootIndex: -1,
      bindingIndex: -1,
      currentQueryIndex: 0,
      parent: w,
      child: null,
      inI18n: !1
    };
    return null !== w && (w.child = P), P;
  }
  function Ar() {
    const w = As.lFrame;
    return As.lFrame = w.parent, w.currentTNode = null, w.lView = null, w;
  }
  const Ds = Ar;
  function wa() {
    const w = Ar();
    w.isParent = !0, w.tView = null, w.selectedIndex = -1, w.contextLView = null, w.elementDepthCount = 0, w.currentDirectiveIndex = -1, w.currentNamespace = null, w.bindingRootIndex = -1, w.bindingIndex = -1, w.currentQueryIndex = 0;
  }
  function va() {
    return As.lFrame.selectedIndex;
  }
  function wc(w) {
    As.lFrame.selectedIndex = w;
  }
  function zs() {
    const w = As.lFrame;
    return Ln(w.tView, w.selectedIndex);
  }
  function ic() {
    As.lFrame.currentNamespace = vr;
  }
  function vs(w, P) {
    for (let U = P.directiveStart, ne = P.directiveEnd; U < ne; U++) {
      const Fe = w.data[U].type.prototype,
        {
          ngAfterContentInit: ot,
          ngAfterContentChecked: Nt,
          ngAfterViewInit: qt,
          ngAfterViewChecked: $n,
          ngOnDestroy: Ni
        } = Fe;
      ot && (w.contentHooks || (w.contentHooks = [])).push(-U, ot), Nt && ((w.contentHooks || (w.contentHooks = [])).push(U, Nt), (w.contentCheckHooks || (w.contentCheckHooks = [])).push(U, Nt)), qt && (w.viewHooks || (w.viewHooks = [])).push(-U, qt), $n && ((w.viewHooks || (w.viewHooks = [])).push(U, $n), (w.viewCheckHooks || (w.viewCheckHooks = [])).push(U, $n)), null != Ni && (w.destroyHooks || (w.destroyHooks = [])).push(U, Ni);
    }
  }
  function La(w, P, U) {
    Vn(w, P, 3, U);
  }
  function kc(w, P, U, ne) {
    (3 & w[yo]) === U && Vn(w, P, U, ne);
  }
  function Ut(w, P) {
    let U = w[yo];
    (3 & U) === P && (U &= 2047, U += 1, w[yo] = U);
  }
  function Vn(w, P, U, ne) {
    const Fe = ne ?? -1,
      ot = P.length - 1;
    let Nt = 0;
    for (let qt = void 0 !== ne ? 65535 & w[hn] : 0; qt < ot; qt++) if ("number" == typeof P[qt + 1]) {
      if (Nt = P[qt], null != ne && Nt >= ne) break;
    } else P[qt] < 0 && (w[hn] += 65536), (Nt < Fe || -1 == Fe) && (Gt(w, U, P, qt), w[hn] = (4294901760 & w[hn]) + qt + 2), qt++;
  }
  function Gt(w, P, U, ne) {
    const he = U[ne] < 0,
      Fe = U[ne + 1],
      Nt = w[he ? -U[ne] : U[ne]];
    if (he) {
      if (w[yo] >> 11 < w[hn] >> 16 && (3 & w[yo]) === P) {
        w[yo] += 2048, Br(4, Nt, Fe);
        try {
          Fe.call(Nt);
        } finally {
          Br(5, Nt, Fe);
        }
      }
    } else {
      Br(4, Nt, Fe);
      try {
        Fe.call(Nt);
      } finally {
        Br(5, Nt, Fe);
      }
    }
  }
  const xi = -1;
  class so {
    constructor(P, U, ne) {
      this.factory = P, this.resolving = !1, this.canSeeViewProviders = U, this.injectImpl = ne;
    }
  }
  function Za(w, P, U) {
    let ne = 0;
    for (; ne < U.length;) {
      const he = U[ne];
      if ("number" == typeof he) {
        if (0 !== he) break;
        ne++;
        const Fe = U[ne++],
          ot = U[ne++],
          Nt = U[ne++];
        w.setAttribute(P, ot, Nt, Fe);
      } else {
        const Fe = he,
          ot = U[++ne];
        pl(Fe) ? w.setProperty(P, Fe, ot) : w.setAttribute(P, Fe, ot), ne++;
      }
    }
    return ne;
  }
  function sl(w) {
    return 3 === w || 4 === w || 6 === w;
  }
  function pl(w) {
    return 64 === w.charCodeAt(0);
  }
  function ql(w, P) {
    if (null !== P && 0 !== P.length) if (null === w || 0 === w.length) w = P.slice();else {
      let U = -1;
      for (let ne = 0; ne < P.length; ne++) {
        const he = P[ne];
        "number" == typeof he ? U = he : 0 === U || vc(w, U, he, null, -1 === U || 2 === U ? P[++ne] : null);
      }
    }
    return w;
  }
  function vc(w, P, U, ne, he) {
    let Fe = 0,
      ot = w.length;
    if (-1 === P) ot = -1;else for (; Fe < w.length;) {
      const Nt = w[Fe++];
      if ("number" == typeof Nt) {
        if (Nt === P) {
          ot = -1;
          break;
        }
        if (Nt > P) {
          ot = Fe - 1;
          break;
        }
      }
    }
    for (; Fe < w.length;) {
      const Nt = w[Fe];
      if ("number" == typeof Nt) break;
      if (Nt === U) {
        if (null === ne) return void (null !== he && (w[Fe + 1] = he));
        if (ne === w[Fe + 1]) return void (w[Fe + 2] = he);
      }
      Fe++, null !== ne && Fe++, null !== he && Fe++;
    }
    -1 !== ot && (w.splice(ot, 0, P), Fe = ot + 1), w.splice(Fe++, 0, U), null !== ne && w.splice(Fe++, 0, ne), null !== he && w.splice(Fe++, 0, he);
  }
  function oc(w) {
    return w !== xi;
  }
  function pc(w) {
    return 32767 & w;
  }
  function Mc(w, P) {
    let U = function ec(w) {
        return w >> 16;
      }(w),
      ne = P;
    for (; U > 0;) ne = ne[ri], U--;
    return ne;
  }
  let rc = !0;
  function Bl(w) {
    const P = rc;
    return rc = w, P;
  }
  const Xc = 255,
    al = 5;
  let ca = 0;
  const _a = {};
  function Ja(w, P) {
    const U = Hc(w, P);
    if (-1 !== U) return U;
    const ne = P[oi];
    ne.firstCreatePass && (w.injectorIndex = P.length, ka(ne.data, w), ka(P, null), ka(ne.blueprint, null));
    const he = tc(w, P),
      Fe = w.injectorIndex;
    if (oc(he)) {
      const ot = pc(he),
        Nt = Mc(he, P),
        qt = Nt[oi].data;
      for (let $n = 0; $n < 8; $n++) P[Fe + $n] = Nt[ot + $n] | qt[ot + $n];
    }
    return P[Fe + 8] = he, Fe;
  }
  function ka(w, P) {
    w.push(0, 0, 0, 0, 0, 0, 0, 0, P);
  }
  function Hc(w, P) {
    return -1 === w.injectorIndex || w.parent && w.parent.injectorIndex === w.injectorIndex || null === P[w.injectorIndex + 8] ? -1 : w.injectorIndex;
  }
  function tc(w, P) {
    if (w.parent && -1 !== w.parent.injectorIndex) return w.parent.injectorIndex;
    let U = 0,
      ne = null,
      he = P;
    for (; null !== he;) {
      if (ne = ac(he), null === ne) return xi;
      if (U++, he = he[ri], -1 !== ne.injectorIndex) return ne.injectorIndex | U << 16;
    }
    return xi;
  }
  function zl(w, P, U) {
    !function wl(w, P, U) {
      let ne;
      "string" == typeof U ? ne = U.charCodeAt(0) || 0 : U.hasOwnProperty(jo) && (ne = U[jo]), null == ne && (ne = U[jo] = ca++);
      const he = ne & Xc;
      P.data[w + (he >> al)] |= 1 << he;
    }(w, P, U);
  }
  function Jl(w, P, U) {
    if (U & Ee.Optional || void 0 !== w) return w;
    j();
  }
  function hc(w, P, U, ne) {
    if (U & Ee.Optional && void 0 === ne && (ne = null), !(U & (Ee.Self | Ee.Host))) {
      const he = w[Fs],
        Fe = Je(void 0);
      try {
        return he ? he.get(P, ne, U & Ee.Optional) : Xt(P, ne, U & Ee.Optional);
      } finally {
        Je(Fe);
      }
    }
    return Jl(ne, 0, U);
  }
  function ll(w, P, U, ne = Ee.Default, he) {
    if (null !== w) {
      if (1024 & P[yo]) {
        const ot = function Rc(w, P, U, ne, he) {
          let Fe = w,
            ot = P;
          for (; null !== Fe && null !== ot && 1024 & ot[yo] && !(256 & ot[yo]);) {
            const Nt = Tl(Fe, ot, U, ne | Ee.Self, _a);
            if (Nt !== _a) return Nt;
            let qt = Fe.parent;
            if (!qt) {
              const $n = ot[Gn];
              if ($n) {
                const Ni = $n.get(U, _a, ne);
                if (Ni !== _a) return Ni;
              }
              qt = ac(ot), ot = ot[ri];
            }
            Fe = qt;
          }
          return he;
        }(w, P, U, ne, _a);
        if (ot !== _a) return ot;
      }
      const Fe = Tl(w, P, U, ne, _a);
      if (Fe !== _a) return Fe;
    }
    return hc(P, U, ne, he);
  }
  function Tl(w, P, U, ne, he) {
    const Fe = function Bc(w) {
      if ("string" == typeof w) return w.charCodeAt(0) || 0;
      const P = w.hasOwnProperty(jo) ? w[jo] : void 0;
      return "number" == typeof P ? P >= 0 ? P & Xc : sc : P;
    }(U);
    if ("function" == typeof Fe) {
      if (!Wc(P, w, ne)) return ne & Ee.Host ? Jl(he, 0, ne) : hc(P, U, ne, he);
      try {
        const ot = Fe(ne);
        if (null != ot || ne & Ee.Optional) return ot;
        j();
      } finally {
        Ds();
      }
    } else if ("number" == typeof Fe) {
      let ot = null,
        Nt = Hc(w, P),
        qt = xi,
        $n = ne & Ee.Host ? P[Yt][_s] : null;
      for ((-1 === Nt || ne & Ee.SkipSelf) && (qt = -1 === Nt ? tc(w, P) : P[Nt + 8], qt !== xi && Kc(ne, !1) ? (ot = P[oi], Nt = pc(qt), P = Mc(qt, P)) : Nt = -1); -1 !== Nt;) {
        const Ni = P[oi];
        if (bu(Fe, Nt, Ni.data)) {
          const go = $c(Nt, P, U, ot, ne, $n);
          if (go !== _a) return go;
        }
        qt = P[Nt + 8], qt !== xi && Kc(ne, P[oi].data[Nt + 8] === $n) && bu(Fe, Nt, P) ? (ot = Ni, Nt = pc(qt), P = Mc(qt, P)) : Nt = -1;
      }
    }
    return he;
  }
  function $c(w, P, U, ne, he, Fe) {
    const ot = P[oi],
      Nt = ot.data[w + 8],
      Ni = Ml(Nt, ot, U, null == ne ? ua(Nt) && rc : ne != ot && 0 != (3 & Nt.type), he & Ee.Host && Fe === Nt);
    return null !== Ni ? Vl(P, ot, Ni, Nt) : _a;
  }
  function Ml(w, P, U, ne, he) {
    const Fe = w.providerIndexes,
      ot = P.data,
      Nt = 1048575 & Fe,
      qt = w.directiveStart,
      Ni = Fe >> 20,
      lr = he ? Nt + Ni : w.directiveEnd;
    for (let Ir = ne ? Nt : Nt + Ni; Ir < lr; Ir++) {
      const ss = ot[Ir];
      if (Ir < qt && U === ss || Ir >= qt && ss.type === U) return Ir;
    }
    if (he) {
      const Ir = ot[qt];
      if (Ir && na(Ir) && Ir.type === U) return qt;
    }
    return null;
  }
  function Vl(w, P, U, ne) {
    let he = w[U];
    const Fe = P.data;
    if (function yr(w) {
      return w instanceof so;
    }(he)) {
      const ot = he;
      ot.resolving && function R(w, P) {
        const U = P ? `. Dependency path: ${P.join(" > ")} > ${w}` : "";
        throw new h(-200, `Circular dependency in DI detected for ${w}${U}`);
      }(function T(w) {
        return "function" == typeof w ? w.name || w.toString() : "object" == typeof w && null != w && "function" == typeof w.type ? w.type.name || w.type.toString() : u(w);
      }(Fe[U]));
      const Nt = Bl(ot.canSeeViewProviders);
      ot.resolving = !0;
      const qt = ot.injectImpl ? Je(ot.injectImpl) : null;
      Wc(w, ne, Ee.Default);
      try {
        he = w[U] = ot.factory(void 0, Fe, w, ne), P.firstCreatePass && U >= ne.directiveStart && function xu(w, P, U) {
          const {
            ngOnChanges: ne,
            ngOnInit: he,
            ngDoCheck: Fe
          } = P.type.prototype;
          if (ne) {
            const ot = At(P);
            (U.preOrderHooks || (U.preOrderHooks = [])).push(w, ot), (U.preOrderCheckHooks || (U.preOrderCheckHooks = [])).push(w, ot);
          }
          he && (U.preOrderHooks || (U.preOrderHooks = [])).push(0 - w, he), Fe && ((U.preOrderHooks || (U.preOrderHooks = [])).push(w, Fe), (U.preOrderCheckHooks || (U.preOrderCheckHooks = [])).push(w, Fe));
        }(U, Fe[U], P);
      } finally {
        null !== qt && Je(qt), Bl(Nt), ot.resolving = !1, Ds();
      }
    }
    return he;
  }
  function bu(w, P, U) {
    return !!(U[P + (w >> al)] & 1 << w);
  }
  function Kc(w, P) {
    return !(w & Ee.Self || w & Ee.Host && P);
  }
  class Al {
    constructor(P, U) {
      this._tNode = P, this._lView = U;
    }
    get(P, U, ne) {
      return ll(this._tNode, this._lView, P, In(ne), U);
    }
  }
  function sc() {
    return new Al(Cr(), Zt());
  }
  function Bi(w) {
    return Yi(() => {
      const P = w.prototype.constructor,
        U = P[lo] || lu(P),
        ne = Object.prototype;
      let he = Object.getPrototypeOf(w.prototype).constructor;
      for (; he && he !== ne;) {
        const Fe = he[lo] || lu(he);
        if (Fe && Fe !== U) return Fe;
        he = Object.getPrototypeOf(he);
      }
      return Fe => new Fe();
    });
  }
  function lu(w) {
    return C(w) ? () => {
      const P = lu(L(w));
      return P && P();
    } : Ko(w);
  }
  function ac(w) {
    const P = w[oi],
      U = P.type;
    return 2 === U ? P.declTNode : 1 === U ? w[_s] : null;
  }
  function Pa(w) {
    return function Tc(w, P) {
      if ("class" === P) return w.classes;
      if ("style" === P) return w.styles;
      const U = w.attrs;
      if (U) {
        const ne = U.length;
        let he = 0;
        for (; he < ne;) {
          const Fe = U[he];
          if (sl(Fe)) break;
          if (0 === Fe) he += 2;else if ("number" == typeof Fe) for (he++; he < ne && "string" == typeof U[he];) he++;else {
            if (Fe === P) return U[he + 1];
            he += 2;
          }
        }
      }
      return null;
    }(Cr(), w);
  }
  const iu = "__parameters__",
    Fc = "__prop__metadata__";
  function Jc(w) {
    return function (...U) {
      if (w) {
        const ne = w(...U);
        for (const he in ne) this[he] = ne[he];
      }
    };
  }
  function _t(w, P, U) {
    return Yi(() => {
      const ne = Jc(P);
      function he(...Fe) {
        if (this instanceof he) return ne.apply(this, Fe), this;
        const ot = new he(...Fe);
        return Nt.annotation = ot, Nt;
        function Nt(qt, $n, Ni) {
          const go = qt.hasOwnProperty(iu) ? qt[iu] : Object.defineProperty(qt, iu, {
            value: []
          })[iu];
          for (; go.length <= Ni;) go.push(null);
          return (go[Ni] = go[Ni] || []).push(ot), qt;
        }
      }
      return U && (he.prototype = Object.create(U.prototype)), he.prototype.ngMetadataName = w, he.annotationCls = he, he;
    });
  }
  function Tn(w, P, U, ne) {
    return Yi(() => {
      const he = Jc(P);
      function Fe(...ot) {
        if (this instanceof Fe) return he.apply(this, ot), this;
        const Nt = new Fe(...ot);
        return function qt($n, Ni) {
          const go = $n.constructor,
            lr = go.hasOwnProperty(Fc) ? go[Fc] : Object.defineProperty(go, Fc, {
              value: {}
            })[Fc];
          lr[Ni] = lr.hasOwnProperty(Ni) && lr[Ni] || [], lr[Ni].unshift(Nt), ne && ne($n, Ni, ...ot);
        };
      }
      return U && (Fe.prototype = Object.create(U.prototype)), Fe.prototype.ngMetadataName = w, Fe.annotationCls = Fe, Fe;
    });
  }
  class Vi {
    constructor(P, U) {
      this._desc = P, this.ngMetadataName = "InjectionToken", this.ɵprov = void 0, "number" == typeof U ? this.__NG_ELEMENT_ID__ = U : void 0 !== U && (this.ɵprov = We({
        token: this,
        providedIn: U.providedIn || "root",
        factory: U.factory
      }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  }
  class pa {}
  const $e = Tn("ViewChild", (w, P) => ({
    selector: w,
    first: !0,
    isViewQuery: !0,
    descendants: !0,
    ...P
  }), pa);
  function se(w, P) {
    w.forEach(U => Array.isArray(U) ? se(U, P) : P(U));
  }
  function re(w, P, U) {
    P >= w.length ? w.push(U) : w.splice(P, 0, U);
  }
  function Ce(w, P) {
    return P >= w.length - 1 ? w.pop() : w.splice(P, 1)[0];
  }
  function Be(w, P) {
    const U = [];
    for (let ne = 0; ne < w; ne++) U.push(P);
    return U;
  }
  function Ui(w, P, U) {
    let ne = Wo(w, P);
    return ne >= 0 ? w[1 | ne] = U : (ne = ~ne, function Qt(w, P, U, ne) {
      let he = w.length;
      if (he == P) w.push(U, ne);else if (1 === he) w.push(ne, w[0]), w[0] = U;else {
        for (he--, w.push(w[he - 1], w[he]); he > P;) w[he] = w[he - 2], he--;
        w[P] = U, w[P + 1] = ne;
      }
    }(w, ne, P, U)), ne;
  }
  function eo(w, P) {
    const U = Wo(w, P);
    if (U >= 0) return w[1 | U];
  }
  function Wo(w, P) {
    return function me(w, P, U) {
      let ne = 0,
        he = w.length >> U;
      for (; he !== ne;) {
        const Fe = ne + (he - ne >> 1),
          ot = w[Fe << U];
        if (P === ot) return Fe << U;
        ot > P ? he = Fe : ne = Fe + 1;
      }
      return ~(he << U);
    }(w, P, 1);
  }
  const Jr = To(_t("Inject", w => ({
      token: w
    })), -1),
    Ca = To(_t("Optional"), 8),
    Ta = To(_t("SkipSelf"), 4);
  var Zl = (() => ((Zl = Zl || {})[Zl.Important = 1] = "Important", Zl[Zl.DashCase = 2] = "DashCase", Zl))();
  const fd = new Map();
  let kn = 0;
  function Jn(w) {
    return fd.get(w) || null;
  }
  class we {
    get lView() {
      return Jn(this.lViewId);
    }
    constructor(P, U, ne) {
      this.lViewId = P, this.nodeIndex = U, this.native = ne;
    }
  }
  function Bt(w) {
    let P = tr(w);
    if (P) {
      if (Ws(P)) {
        const U = P;
        let ne, he, Fe;
        if (Vo(w)) {
          if (ne = function Gs(w, P) {
            const U = w[oi].components;
            if (U) for (let ne = 0; ne < U.length; ne++) {
              const he = U[ne];
              if (mi(he, w)[Or] === P) return he;
            } else if (mi(dn, w)[Or] === P) return dn;
            return -1;
          }(U, w), -1 == ne) throw new Error("The provided component was not found in the application");
          he = w;
        } else if (function ta(w) {
          return w && w.constructor && w.constructor.ɵdir;
        }(w)) {
          if (ne = function du(w, P) {
            let U = w[oi].firstChild;
            for (; U;) {
              const he = U.directiveEnd;
              for (let Fe = U.directiveStart; Fe < he; Fe++) if (w[Fe] === P) return U.index;
              U = cs(U);
            }
            return -1;
          }(U, w), -1 == ne) throw new Error("The provided directive was not found in the application");
          Fe = Ic(ne, U);
        } else if (ne = za(U, w), -1 == ne) return null;
        const ot = ks(U[ne]),
          Nt = tr(ot),
          qt = Nt && !Array.isArray(Nt) ? Nt : ve(U, ne, ot);
        if (he && void 0 === qt.component && (qt.component = he, Un(qt.component, qt)), Fe && void 0 === qt.directives) {
          qt.directives = Fe;
          for (let $n = 0; $n < Fe.length; $n++) Un(Fe[$n], qt);
        }
        Un(qt.native, qt), P = qt;
      }
    } else {
      const U = w;
      let ne = U;
      for (; ne = ne.parentNode;) {
        const he = tr(ne);
        if (he) {
          const Fe = Array.isArray(he) ? he : he.lView;
          if (!Fe) return null;
          const ot = za(Fe, U);
          if (ot >= 0) {
            const Nt = ks(Fe[ot]),
              qt = ve(Fe, ot, Nt);
            Un(Nt, qt), P = qt;
            break;
          }
        }
      }
    }
    return P || null;
  }
  function ve(w, P, U) {
    return new we(w[di], P, U);
  }
  const An = "__ngContext__";
  function Un(w, P) {
    Ws(P) ? (w[An] = P[di], function zt(w) {
      fd.set(w[di], w);
    }(P)) : w[An] = P;
  }
  function tr(w) {
    const P = w[An];
    return "number" == typeof P ? Jn(P) : P || null;
  }
  function Vo(w) {
    return w && w.constructor && w.constructor.ɵcmp;
  }
  function za(w, P) {
    const U = w[oi];
    for (let ne = dn; ne < U.bindingStartIndex; ne++) if (ks(w[ne]) === P) return ne;
    return -1;
  }
  function cs(w) {
    if (w.child) return w.child;
    if (w.next) return w.next;
    for (; w.parent && !w.parent.next;) w = w.parent;
    return w.parent && w.parent.next;
  }
  function Ic(w, P) {
    const U = P[oi].data[w];
    if (0 === U.directiveStart) return Yo;
    const ne = [];
    for (let he = U.directiveStart; he < U.directiveEnd; he++) {
      const Fe = P[he];
      Vo(Fe) || ne.push(Fe);
    }
    return ne;
  }
  let ou;
  function md(w, P) {
    return ou(w, P);
  }
  function gd(w) {
    const P = w[Qi];
    return sa(P) ? P[Qi] : P;
  }
  function sf(w) {
    return Mh(w[ho]);
  }
  function Vd(w) {
    return Mh(w[Qo]);
  }
  function Mh(w) {
    for (; null !== w && !sa(w);) w = w[Qo];
    return w;
  }
  function _p(w, P, U, ne, he) {
    if (null != ne) {
      let Fe,
        ot = !1;
      sa(ne) ? Fe = ne : Ws(ne) && (ot = !0, ne = ne[hs]);
      const Nt = ks(ne);
      0 === w && null !== U ? null == he ? yd(P, U, Nt) : Cd(P, U, Nt, he || null, !0) : 1 === w && null !== U ? Cd(P, U, Nt, he || null, !0) : 2 === w ? function cf(w, P, U) {
        const ne = lh(w, P);
        ne && function lf(w, P, U, ne) {
          w.removeChild(P, U, ne);
        }(w, ne, P, U);
      }(P, Nt, ot) : 3 === w && P.destroyNode(Nt), null != Fe && function Zf(w, P, U, ne, he) {
        const Fe = U[qr];
        Fe !== ks(U) && _p(P, w, ne, Fe, he);
        for (let Nt = ws; Nt < U.length; Nt++) {
          const qt = U[Nt];
          Sl(qt[oi], qt, w, P, ne, Fe);
        }
      }(P, w, Fe, U, he);
    }
  }
  function il(w, P, U) {
    return w.createElement(P, U);
  }
  function Ha(w, P) {
    const U = w[js],
      ne = U.indexOf(P),
      he = P[Qi];
    512 & P[yo] && (P[yo] &= -513, vo(he, -1)), U.splice(ne, 1);
  }
  function vu(w, P) {
    if (w.length <= ws) return;
    const U = ws + P,
      ne = w[U];
    if (ne) {
      const he = ne[jt];
      null !== he && he !== w && Ha(he, ne), P > 0 && (w[U - 1][Qo] = ne[Qo]);
      const Fe = Ce(w, ws + P);
      !function vd(w, P) {
        Sl(w, P, P[rs], 2, null, null), P[hs] = null, P[_s] = null;
      }(ne[oi], ne);
      const ot = Fe[tn];
      null !== ot && ot.detachView(Fe[oi]), ne[Qi] = null, ne[Qo] = null, ne[yo] &= -65;
    }
    return ne;
  }
  function Zd(w, P) {
    if (!(128 & P[yo])) {
      const U = P[rs];
      U.destroyNode && Sl(w, P, U, 3, null, null), function ld(w) {
        let P = w[ho];
        if (!P) return Fp(w[oi], w);
        for (; P;) {
          let U = null;
          if (Ws(P)) U = P[ho];else {
            const ne = P[ws];
            ne && (U = ne);
          }
          if (!U) {
            for (; P && !P[Qo] && P !== w;) Ws(P) && Fp(P[oi], P), P = P[Qi];
            null === P && (P = w), Ws(P) && Fp(P[oi], P), U = P && P[Qo];
          }
          P = U;
        }
      }(P);
    }
  }
  function Fp(w, P) {
    if (!(128 & P[yo])) {
      P[yo] &= -65, P[yo] |= 128, function Cc(w, P) {
        let U;
        if (null != w && null != (U = w.destroyHooks)) for (let ne = 0; ne < U.length; ne += 2) {
          const he = P[U[ne]];
          if (!(he instanceof so)) {
            const Fe = U[ne + 1];
            if (Array.isArray(Fe)) for (let ot = 0; ot < Fe.length; ot += 2) {
              const Nt = he[Fe[ot]],
                qt = Fe[ot + 1];
              Br(4, Nt, qt);
              try {
                qt.call(Nt);
              } finally {
                Br(5, Nt, qt);
              }
            } else {
              Br(4, he, Fe);
              try {
                Fe.call(he);
              } finally {
                Br(5, he, Fe);
              }
            }
          }
        }
      }(w, P), function vp(w, P) {
        const U = w.cleanup,
          ne = P[ra];
        let he = -1;
        if (null !== U) for (let Fe = 0; Fe < U.length - 1; Fe += 2) if ("string" == typeof U[Fe]) {
          const ot = U[Fe + 3];
          ot >= 0 ? ne[he = ot]() : ne[he = -ot].unsubscribe(), Fe += 2;
        } else {
          const ot = ne[he = U[Fe + 1]];
          U[Fe].call(ot);
        }
        if (null !== ne) {
          for (let Fe = he + 1; Fe < ne.length; Fe++) (0, ne[Fe])();
          P[ra] = null;
        }
      }(w, P), 1 === P[oi].type && P[rs].destroy();
      const U = P[jt];
      if (null !== U && sa(P[Qi])) {
        U !== P[Qi] && Ha(U, P);
        const ne = P[tn];
        null !== ne && ne.detachView(w);
      }
      !function Do(w) {
        fd.delete(w[di]);
      }(P);
    }
  }
  function ep(w, P, U) {
    return function Np(w, P, U) {
      let ne = P;
      for (; null !== ne && 40 & ne.type;) ne = (P = ne).parent;
      if (null === ne) return U[hs];
      {
        const {
          componentOffset: he
        } = ne;
        if (he > -1) {
          const {
            encapsulation: Fe
          } = w.data[ne.directiveStart + he];
          if (Fe === Pr.None || Fe === Pr.Emulated) return null;
        }
        return ja(ne, U);
      }
    }(w, P.parent, U);
  }
  function Cd(w, P, U, ne, he) {
    w.insertBefore(P, U, ne, he);
  }
  function yd(w, P, U) {
    w.appendChild(P, U);
  }
  function Yd(w, P, U, ne, he) {
    null !== ne ? Cd(w, P, U, ne, he) : yd(w, P, U);
  }
  function lh(w, P) {
    return w.parentNode(P);
  }
  function ch(w, P, U) {
    return tp(w, P, U);
  }
  let zd,
    Bp,
    Yp,
    z,
    tp = function Th(w, P, U) {
      return 40 & w.type ? ja(w, U) : null;
    };
  function Eh(w, P, U, ne) {
    const he = ep(w, ne, P),
      Fe = P[rs],
      Nt = ch(ne.parent || P[_s], ne, P);
    if (null != he) if (Array.isArray(U)) for (let qt = 0; qt < U.length; qt++) Yd(Fe, he, U[qt], Nt, !1);else Yd(Fe, he, U, Nt, !1);
    void 0 !== zd && zd(Fe, ne, P, U, he);
  }
  function Cp(w, P) {
    if (null !== P) {
      const U = P.type;
      if (3 & U) return ja(P, w);
      if (4 & U) return Dh(-1, w[P.index]);
      if (8 & U) {
        const ne = P.child;
        if (null !== ne) return Cp(w, ne);
        {
          const he = w[P.index];
          return sa(he) ? Dh(-1, he) : ks(he);
        }
      }
      if (32 & U) return md(P, w)() || ks(w[P.index]);
      {
        const ne = jf(w, P);
        return null !== ne ? Array.isArray(ne) ? ne[0] : Cp(gd(w[Yt]), ne) : Cp(w, P.next);
      }
    }
    return null;
  }
  function jf(w, P) {
    return null !== P ? w[Yt][_s].projection[P.projection] : null;
  }
  function Dh(w, P) {
    const U = ws + w + 1;
    if (U < P.length) {
      const ne = P[U],
        he = ne[oi].firstChild;
      if (null !== he) return Cp(ne, he);
    }
    return P[qr];
  }
  function np(w, P, U, ne, he, Fe, ot) {
    for (; null != U;) {
      const Nt = ne[U.index],
        qt = U.type;
      if (ot && 0 === P && (Nt && Un(ks(Nt), ne), U.flags |= 2), 32 != (32 & U.flags)) if (8 & qt) np(w, P, U.child, ne, he, Fe, !1), _p(P, w, he, Nt, Fe);else if (32 & qt) {
        const $n = md(U, ne);
        let Ni;
        for (; Ni = $n();) _p(P, w, he, Ni, Fe);
        _p(P, w, he, Nt, Fe);
      } else 16 & qt ? Hp(w, P, ne, U, he, Fe) : _p(P, w, he, Nt, Fe);
      U = ot ? U.projectionNext : U.next;
    }
  }
  function Sl(w, P, U, ne, he, Fe) {
    np(U, ne, w.firstChild, P, he, Fe, !1);
  }
  function Hp(w, P, U, ne, he, Fe) {
    const ot = U[Yt],
      qt = ot[_s].projection[ne.projection];
    if (Array.isArray(qt)) for (let $n = 0; $n < qt.length; $n++) _p(P, w, he, qt[$n], Fe);else np(w, P, qt, ot[Qi], he, Fe, !0);
  }
  function uh(w, P, U) {
    "" === U ? w.removeAttribute(P, "class") : w.setAttribute(P, "class", U);
  }
  function cd(w, P, U) {
    const {
      mergedAttrs: ne,
      classes: he,
      styles: Fe
    } = U;
    null !== ne && Za(w, P, ne), null !== he && uh(w, P, he), null !== Fe && function yp(w, P, U) {
      w.setAttribute(P, "style", U);
    }(w, P, Fe);
  }
  function ed(w) {
    return function Vp() {
      if (void 0 === Bp && (Bp = null, Pi.trustedTypes)) try {
        Bp = Pi.trustedTypes.createPolicy("angular", {
          createHTML: w => w,
          createScript: w => w,
          createScriptURL: w => w
        });
      } catch {}
      return Bp;
    }()?.createHTML(w) || w;
  }
  function xe(w) {
    Yp = w;
  }
  function De() {
    if (void 0 === z && (z = null, Pi.trustedTypes)) try {
      z = Pi.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: w => w,
        createScript: w => w,
        createScriptURL: w => w
      });
    } catch {}
    return z;
  }
  function rt(w) {
    return De()?.createHTML(w) || w;
  }
  function po(w) {
    return De()?.createScriptURL(w) || w;
  }
  class dr {
    constructor(P) {
      this.changingThisBreaksApplicationSecurity = P;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${E})`;
    }
  }
  class Rs extends dr {
    getTypeName() {
      return "HTML";
    }
  }
  class Aa extends dr {
    getTypeName() {
      return "Style";
    }
  }
  class ml extends dr {
    getTypeName() {
      return "Script";
    }
  }
  class Ba extends dr {
    getTypeName() {
      return "URL";
    }
  }
  class Fl extends dr {
    getTypeName() {
      return "ResourceURL";
    }
  }
  function gl(w) {
    return w instanceof dr ? w.changingThisBreaksApplicationSecurity : w;
  }
  function qa(w, P) {
    const U = function Gl(w) {
      return w instanceof dr && w.getTypeName() || null;
    }(w);
    if (null != U && U !== P) {
      if ("ResourceURL" === U && "URL" === P) return !0;
      throw new Error(`Required a safe ${P}, got a ${U} (see ${E})`);
    }
    return U === P;
  }
  function mc(w) {
    return new Rs(w);
  }
  function Ph(w) {
    return new Aa(w);
  }
  function xp(w) {
    return new ml(w);
  }
  function Oh(w) {
    return new Ba(w);
  }
  function Wp(w) {
    return new Fl(w);
  }
  class zp {
    constructor(P) {
      this.inertDocumentHelper = P;
    }
    getInertBodyElement(P) {
      P = "<body><remove></remove>" + P;
      try {
        const U = new window.DOMParser().parseFromString(ed(P), "text/html").body;
        return null === U ? this.inertDocumentHelper.getInertBodyElement(P) : (U.removeChild(U.firstChild), U);
      } catch {
        return null;
      }
    }
  }
  class Wf {
    constructor(P) {
      this.defaultDoc = P, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
    }
    getInertBodyElement(P) {
      const U = this.inertDocument.createElement("template");
      return U.innerHTML = ed(P), U;
    }
  }
  const cc = /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
  function df(w) {
    return (w = String(w)).match(cc) ? w : "unsafe:" + w;
  }
  function ip(w) {
    const P = {};
    for (const U of w.split(",")) P[U] = !0;
    return P;
  }
  function ph(...w) {
    const P = {};
    for (const U of w) for (const ne in U) U.hasOwnProperty(ne) && (P[ne] = !0);
    return P;
  }
  const Tm = ip("area,br,col,hr,img,wbr"),
    zf = ip("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    Em = ip("rp,rt"),
    El = ph(Tm, ph(zf, ip("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), ph(Em, ip("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ph(Em, zf)),
    bp = ip("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
    Gp = ph(bp, ip("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), ip("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
    Gf = ip("script,style,template");
  class Ih {
    constructor() {
      this.sanitizedSomething = !1, this.buf = [];
    }
    sanitizeChildren(P) {
      let U = P.firstChild,
        ne = !0;
      for (; U;) if (U.nodeType === Node.ELEMENT_NODE ? ne = this.startElement(U) : U.nodeType === Node.TEXT_NODE ? this.chars(U.nodeValue) : this.sanitizedSomething = !0, ne && U.firstChild) U = U.firstChild;else for (; U;) {
        U.nodeType === Node.ELEMENT_NODE && this.endElement(U);
        let he = this.checkClobberedElement(U, U.nextSibling);
        if (he) {
          U = he;
          break;
        }
        U = this.checkClobberedElement(U, U.parentNode);
      }
      return this.buf.join("");
    }
    startElement(P) {
      const U = P.nodeName.toLowerCase();
      if (!El.hasOwnProperty(U)) return this.sanitizedSomething = !0, !Gf.hasOwnProperty(U);
      this.buf.push("<"), this.buf.push(U);
      const ne = P.attributes;
      for (let he = 0; he < ne.length; he++) {
        const Fe = ne.item(he),
          ot = Fe.name,
          Nt = ot.toLowerCase();
        if (!Gp.hasOwnProperty(Nt)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let qt = Fe.value;
        bp[Nt] && (qt = df(qt)), this.buf.push(" ", ot, "=\"", ng(qt), "\"");
      }
      return this.buf.push(">"), !0;
    }
    endElement(P) {
      const U = P.nodeName.toLowerCase();
      El.hasOwnProperty(U) && !Tm.hasOwnProperty(U) && (this.buf.push("</"), this.buf.push(U), this.buf.push(">"));
    }
    chars(P) {
      this.buf.push(ng(P));
    }
    checkClobberedElement(P, U) {
      if (U && (P.compareDocumentPosition(U) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${P.outerHTML}`);
      return U;
    }
  }
  const Ag = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    pf = /([^\#-~ |!])/g;
  function ng(w) {
    return w.replace(/&/g, "&amp;").replace(Ag, function (P) {
      return "&#" + (1024 * (P.charCodeAt(0) - 55296) + (P.charCodeAt(1) - 56320) + 65536) + ";";
    }).replace(pf, function (P) {
      return "&#" + P.charCodeAt(0) + ";";
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  let Pm;
  function $s(w, P) {
    let U = null;
    try {
      Pm = Pm || function Ah(w) {
        const P = new Wf(w);
        return function Mm() {
          try {
            return !!new window.DOMParser().parseFromString(ed(""), "text/html");
          } catch {
            return !1;
          }
        }() ? new zp(P) : P;
      }(w);
      let ne = P ? String(P) : "";
      U = Pm.getInertBodyElement(ne);
      let he = 5,
        Fe = ne;
      do {
        if (0 === he) throw new Error("Failed to sanitize html because the input is unstable");
        he--, ne = Fe, Fe = U.innerHTML, U = Pm.getInertBodyElement(ne);
      } while (ne !== Fe);
      return ed(new Ih().sanitizeChildren(Eu(U) || U));
    } finally {
      if (U) {
        const ne = Eu(U) || U;
        for (; ne.firstChild;) ne.removeChild(ne.firstChild);
      }
    }
  }
  function Eu(w) {
    return "content" in w && function Nu(w) {
      return w.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === w.nodeName;
    }(w) ? w.content : null;
  }
  var ru = (() => ((ru = ru || {})[ru.NONE = 0] = "NONE", ru[ru.HTML = 1] = "HTML", ru[ru.STYLE = 2] = "STYLE", ru[ru.SCRIPT = 3] = "SCRIPT", ru[ru.URL = 4] = "URL", ru[ru.RESOURCE_URL = 5] = "RESOURCE_URL", ru))();
  function Dd(w) {
    const P = Lh();
    return P ? rt(P.sanitize(ru.HTML, w) || "") : qa(w, "HTML") ? rt(gl(w)) : $s(function et() {
      return void 0 !== Yp ? Yp : typeof document < "u" ? document : void 0;
    }(), u(w));
  }
  function Om(w) {
    const P = Lh();
    return P ? P.sanitize(ru.URL, w) || "" : qa(w, "URL") ? gl(w) : df(u(w));
  }
  function hf(w) {
    const P = Lh();
    if (P) return po(P.sanitize(ru.RESOURCE_URL, w) || "");
    if (qa(w, "ResourceURL")) return po(gl(w));
    throw new h(904, !1);
  }
  function Ig(w, P, U) {
    return function ig(w, P) {
      return "src" === P && ("embed" === w || "frame" === w || "iframe" === w || "media" === w || "script" === w) || "href" === P && ("base" === w || "link" === w) ? hf : Om;
    }(P, U)(w);
  }
  function Lh() {
    const w = Zt();
    return w && w[Js];
  }
  const ff = new Vi("ENVIRONMENT_INITIALIZER"),
    og = new Vi("INJECTOR", -1),
    rg = new Vi("INJECTOR_DEF_TYPES");
  class gs {
    get(P, U = Jo) {
      if (U === Jo) {
        const ne = new Error(`NullInjectorError: No provider for ${A(P)}!`);
        throw ne.name = "NullInjectorError", ne;
      }
      return U;
    }
  }
  function ud(w) {
    return {
      ɵproviders: w
    };
  }
  function mf(...w) {
    return {
      ɵproviders: Mp(0, w),
      ɵfromNgModule: !0
    };
  }
  function Mp(w, ...P) {
    const U = [],
      ne = new Set();
    let he;
    return se(P, Fe => {
      const ot = Fe;
      Gd(ot, U, [], ne) && (he || (he = []), he.push(ot));
    }), void 0 !== he && xd(he, U), U;
  }
  function xd(w, P) {
    for (let U = 0; U < w.length; U++) {
      const {
        providers: he
      } = w[U];
      Pd(he, Fe => {
        P.push(Fe);
      });
    }
  }
  function Gd(w, P, U, ne) {
    if (!(w = L(w))) return !1;
    let he = null,
      Fe = Et(w);
    const ot = !Fe && Ji(w);
    if (Fe || ot) {
      if (ot && !ot.standalone) return !1;
      he = w;
    } else {
      const qt = w.ngModule;
      if (Fe = Et(qt), !Fe) return !1;
      he = qt;
    }
    const Nt = ne.has(he);
    if (ot) {
      if (Nt) return !1;
      if (ne.add(he), ot.dependencies) {
        const qt = "function" == typeof ot.dependencies ? ot.dependencies() : ot.dependencies;
        for (const $n of qt) Gd($n, P, U, ne);
      }
    } else {
      if (!Fe) return !1;
      {
        if (null != Fe.imports && !Nt) {
          let $n;
          ne.add(he);
          try {
            se(Fe.imports, Ni => {
              Gd(Ni, P, U, ne) && ($n || ($n = []), $n.push(Ni));
            });
          } finally {}
          void 0 !== $n && xd($n, P);
        }
        if (!Nt) {
          const $n = Ko(he) || (() => new he());
          P.push({
            provide: he,
            useFactory: $n,
            deps: Yo
          }, {
            provide: rg,
            useValue: he,
            multi: !0
          }, {
            provide: ff,
            useValue: () => $t(he),
            multi: !0
          });
        }
        const qt = Fe.providers;
        null == qt || Nt || Pd(qt, Ni => {
          P.push(Ni);
        });
      }
    }
    return he !== w && void 0 !== w.providers;
  }
  function Pd(w, P) {
    for (let U of w) v(U) && (U = U.ɵproviders), Array.isArray(U) ? Pd(U, P) : P(U);
  }
  const ms = M({
    provide: String,
    useValue: M
  });
  function dd(w) {
    return null !== w && "object" == typeof w && ms in w;
  }
  function Tp(w) {
    return "function" == typeof w;
  }
  const Sm = new Vi("Set Injector scope."),
    $f = {},
    ag = {};
  let gf;
  function $p() {
    return void 0 === gf && (gf = new gs()), gf;
  }
  class Au {}
  class rp extends Au {
    get destroyed() {
      return this._destroyed;
    }
    constructor(P, U, ne, he) {
      super(), this.parent = U, this.source = ne, this.scopes = he, this.records = new Map(), this._ngOnDestroyHooks = new Set(), this._onDestroyHooks = [], this._destroyed = !1, Kf(P, ot => this.processProvider(ot)), this.records.set(og, Uu(void 0, this)), he.has("environment") && this.records.set(Au, Uu(void 0, this));
      const Fe = this.records.get(Sm);
      null != Fe && "string" == typeof Fe.value && this.scopes.add(Fe.value), this.injectorDefTypes = new Set(this.get(rg.multi, Yo, Ee.Self));
    }
    destroy() {
      this.assertNotDestroyed(), this._destroyed = !0;
      try {
        for (const P of this._ngOnDestroyHooks) P.ngOnDestroy();
        for (const P of this._onDestroyHooks) P();
      } finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), this._onDestroyHooks.length = 0;
      }
    }
    onDestroy(P) {
      this._onDestroyHooks.push(P);
    }
    runInContext(P) {
      this.assertNotDestroyed();
      const U = li(this),
        ne = Je(void 0);
      try {
        return P();
      } finally {
        li(U), Je(ne);
      }
    }
    get(P, U = Jo, ne = Ee.Default) {
      this.assertNotDestroyed(), ne = In(ne);
      const he = li(this),
        Fe = Je(void 0);
      try {
        if (!(ne & Ee.SkipSelf)) {
          let Nt = this.records.get(P);
          if (void 0 === Nt) {
            const qt = function kg(w) {
              return "function" == typeof w || "object" == typeof w && w instanceof Vi;
            }(P) && q(P);
            Nt = qt && this.injectableDefInScope(qt) ? Uu(Od(P), $f) : null, this.records.set(P, Nt);
          }
          if (null != Nt) return this.hydrate(P, Nt);
        }
        return (ne & Ee.Self ? $p() : this.parent).get(P, U = ne & Ee.Optional && U === Jo ? null : U);
      } catch (ot) {
        if ("NullInjectorError" === ot.name) {
          if ((ot[pt] = ot[pt] || []).unshift(A(P)), he) throw ot;
          return function qn(w, P, U, ne) {
            const he = w[pt];
            throw P[vt] && he.unshift(P[vt]), w.message = function Xn(w, P, U, ne = null) {
              w = w && "\n" === w.charAt(0) && w.charAt(1) == Dn ? w.slice(2) : w;
              let he = A(P);
              if (Array.isArray(P)) he = P.map(A).join(" -> ");else if ("object" == typeof P) {
                let Fe = [];
                for (let ot in P) if (P.hasOwnProperty(ot)) {
                  let Nt = P[ot];
                  Fe.push(ot + ":" + ("string" == typeof Nt ? JSON.stringify(Nt) : A(Nt)));
                }
                he = `{${Fe.join(", ")}}`;
              }
              return `${U}${ne ? "(" + ne + ")" : ""}[${he}]: ${w.replace(Ht, "\n  ")}`;
            }("\n" + w.message, he, U, ne), w[Dt] = he, w[pt] = null, w;
          }(ot, P, "R3InjectorError", this.source);
        }
        throw ot;
      } finally {
        Je(Fe), li(he);
      }
    }
    resolveInjectorInitializers() {
      const P = li(this),
        U = Je(void 0);
      try {
        const ne = this.get(ff.multi, Yo, Ee.Self);
        for (const he of ne) he();
      } finally {
        li(P), Je(U);
      }
    }
    toString() {
      const P = [],
        U = this.records;
      for (const ne of U.keys()) P.push(A(ne));
      return `R3Injector[${P.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new h(205, !1);
    }
    processProvider(P) {
      let U = Tp(P = L(P)) ? P : L(P && P.provide);
      const ne = function y_(w) {
        return dd(w) ? Uu(void 0, w.useValue) : Uu(Im(w), $f);
      }(P);
      if (Tp(P) || !0 !== P.multi) this.records.get(U);else {
        let he = this.records.get(U);
        he || (he = Uu(void 0, $f, !0), he.factory = () => ui(he.multi), this.records.set(U, he)), U = P, he.multi.push(P);
      }
      this.records.set(U, ne);
    }
    hydrate(P, U) {
      return U.value === $f && (U.value = ag, U.value = U.factory()), "object" == typeof U.value && U.value && function Lg(w) {
        return null !== w && "object" == typeof w && "function" == typeof w.ngOnDestroy;
      }(U.value) && this._ngOnDestroyHooks.add(U.value), U.value;
    }
    injectableDefInScope(P) {
      if (!P.providedIn) return !1;
      const U = L(P.providedIn);
      return "string" == typeof U ? "any" === U || this.scopes.has(U) : this.injectorDefTypes.has(U);
    }
  }
  function Od(w) {
    const P = q(w),
      U = null !== P ? P.factory : Ko(w);
    if (null !== U) return U;
    if (w instanceof Vi) throw new h(204, !1);
    if (w instanceof Function) return function C_(w) {
      const P = w.length;
      if (P > 0) throw Be(P, "?"), new h(204, !1);
      const U = function Ct(w) {
        const P = w && (w[Ue] || w[Ke]);
        return P ? (function Ft(w) {
          if (w.hasOwnProperty("name")) return w.name;
          ("" + w).match(/^function\s*([^\s(]+)/);
        }(w), P) : null;
      }(w);
      return null !== U ? () => U.factory(w) : () => new w();
    }(w);
    throw new h(204, !1);
  }
  function Im(w, P, U) {
    let ne;
    if (Tp(w)) {
      const he = L(w);
      return Ko(he) || Od(he);
    }
    if (dd(w)) ne = () => L(w.useValue);else if (function su(w) {
      return !(!w || !w.useFactory);
    }(w)) ne = () => w.useFactory(...ui(w.deps || []));else if (function fh(w) {
      return !(!w || !w.useExisting);
    }(w)) ne = () => $t(L(w.useExisting));else {
      const he = L(w && (w.useClass || w.provide));
      if (!function Ad(w) {
        return !!w.deps;
      }(w)) return Ko(he) || Od(he);
      ne = () => new he(...ui(w.deps));
    }
    return ne;
  }
  function Uu(w, P, U = !1) {
    return {
      factory: w,
      value: P,
      multi: U ? [] : void 0
    };
  }
  function Kf(w, P) {
    for (const U of w) Array.isArray(U) ? Kf(U, P) : U && v(U) ? Kf(U.ɵproviders, P) : P(U);
  }
  class Rg {}
  class mh {}
  class Lm {
    resolveComponentFactory(P) {
      throw function kh(w) {
        const P = Error(`No component factory found for ${A(w)}. Did you add it to @NgModule.entryComponents?`);
        return P.ngComponent = w, P;
      }(P);
    }
  }
  let Rh = (() => {
    class w {}
    return w.NULL = new Lm(), w;
  })();
  function Ep() {
    return _f(Cr(), Zt());
  }
  function _f(w, P) {
    return new Jf(ja(w, P));
  }
  let Jf = (() => {
    class w {
      constructor(U) {
        this.nativeElement = U;
      }
    }
    return w.__NG_ELEMENT_ID__ = Ep, w;
  })();
  function Fg(w) {
    return w instanceof Jf ? w.nativeElement : w;
  }
  class lg {}
  let Ng = (() => {
      class w {}
      return w.__NG_ELEMENT_ID__ = () => function km() {
        const w = Zt(),
          U = mi(Cr().index, w);
        return (Ws(U) ? U : w)[rs];
      }(), w;
    })(),
    Rm = (() => {
      class w {}
      return w.ɵprov = We({
        token: w,
        providedIn: "root",
        factory: () => null
      }), w;
    })();
  class vf {
    constructor(P) {
      this.full = P, this.major = P.split(".")[0], this.minor = P.split(".")[1], this.patch = P.split(".").slice(2).join(".");
    }
  }
  const Ug = new vf("15.2.1"),
    cg = {},
    Qf = "ngOriginalError";
  function sp(w) {
    return w[Qf];
  }
  class Fm {
    constructor() {
      this._console = console;
    }
    handleError(P) {
      const U = this._findOriginalError(P);
      this._console.error("ERROR", P), U && this._console.error("ORIGINAL ERROR", U);
    }
    _findOriginalError(P) {
      let U = P && sp(P);
      for (; U && sp(U);) U = sp(U);
      return U || null;
    }
  }
  function Kp(w) {
    return w.ownerDocument.defaultView;
  }
  function lp(w) {
    return w.ownerDocument;
  }
  function Sd(w) {
    return w instanceof Function ? w() : w;
  }
  function Vg(w, P, U) {
    let ne = w.length;
    for (;;) {
      const he = w.indexOf(P, U);
      if (-1 === he) return he;
      if (0 === he || w.charCodeAt(he - 1) <= 32) {
        const Fe = P.length;
        if (he + Fe === ne || w.charCodeAt(he + Fe) <= 32) return he;
      }
      U = he + 1;
    }
  }
  const jg = "ng-template";
  function M_(w, P, U) {
    let ne = 0;
    for (; ne < w.length;) {
      let he = w[ne++];
      if (U && "class" === he) {
        if (he = w[ne], -1 !== Vg(he.toLowerCase(), P, 0)) return !0;
      } else if (1 === he) {
        for (; ne < w.length && "string" == typeof (he = w[ne++]);) if (he.toLowerCase() === P) return !0;
        return !1;
      }
    }
    return !1;
  }
  function yf(w) {
    return 4 === w.type && w.value !== jg;
  }
  function ug(w, P, U) {
    return P === (4 !== w.type || U ? w.value : jg);
  }
  function xf(w, P, U) {
    let ne = 4;
    const he = w.attrs || [],
      Fe = function S(w) {
        for (let P = 0; P < w.length; P++) if (sl(w[P])) return P;
        return w.length;
      }(he);
    let ot = !1;
    for (let Nt = 0; Nt < P.length; Nt++) {
      const qt = P[Nt];
      if ("number" != typeof qt) {
        if (!ot) if (4 & ne) {
          if (ne = 2 | 1 & ne, "" !== qt && !ug(w, qt, U) || "" === qt && 1 === P.length) {
            if (p(ne)) return !1;
            ot = !0;
          }
        } else {
          const $n = 8 & ne ? qt : P[++Nt];
          if (8 & ne && null !== w.attrs) {
            if (!M_(w.attrs, $n, U)) {
              if (p(ne)) return !1;
              ot = !0;
            }
            continue;
          }
          const go = r(8 & ne ? "class" : qt, he, yf(w), U);
          if (-1 === go) {
            if (p(ne)) return !1;
            ot = !0;
            continue;
          }
          if ("" !== $n) {
            let lr;
            lr = go > Fe ? "" : he[go + 1].toLowerCase();
            const Ir = 8 & ne ? lr : null;
            if (Ir && -1 !== Vg(Ir, $n, 0) || 2 & ne && $n !== lr) {
              if (p(ne)) return !1;
              ot = !0;
            }
          }
        }
      } else {
        if (!ot && !p(ne) && !p(qt)) return !1;
        if (ot && p(qt)) continue;
        ot = !1, ne = qt | 1 & ne;
      }
    }
    return p(ne) || ot;
  }
  function p(w) {
    return 0 == (1 & w);
  }
  function r(w, P, U, ne) {
    if (null === P) return -1;
    let he = 0;
    if (ne || !U) {
      let Fe = !1;
      for (; he < P.length;) {
        const ot = P[he];
        if (ot === w) return he;
        if (3 === ot || 6 === ot) Fe = !0;else {
          if (1 === ot || 2 === ot) {
            let Nt = P[++he];
            for (; "string" == typeof Nt;) Nt = P[++he];
            continue;
          }
          if (4 === ot) break;
          if (0 === ot) {
            he += 4;
            continue;
          }
        }
        he += Fe ? 1 : 2;
      }
      return -1;
    }
    return function H(w, P) {
      let U = w.indexOf(4);
      if (U > -1) for (U++; U < w.length;) {
        const ne = w[U];
        if ("number" == typeof ne) return -1;
        if (ne === P) return U;
        U++;
      }
      return -1;
    }(P, w);
  }
  function l(w, P, U = !1) {
    for (let ne = 0; ne < P.length; ne++) if (xf(w, P[ne], U)) return !0;
    return !1;
  }
  function ie(w, P) {
    e: for (let U = 0; U < P.length; U++) {
      const ne = P[U];
      if (w.length === ne.length) {
        for (let he = 0; he < w.length; he++) if (w[he] !== ne[he]) continue e;
        return !0;
      }
    }
    return !1;
  }
  function de(w, P) {
    return w ? ":not(" + P.trim() + ")" : P;
  }
  function Oe(w) {
    let P = w[0],
      U = 1,
      ne = 2,
      he = "",
      Fe = !1;
    for (; U < w.length;) {
      let ot = w[U];
      if ("string" == typeof ot) {
        if (2 & ne) {
          const Nt = w[++U];
          he += "[" + ot + (Nt.length > 0 ? "=\"" + Nt + "\"" : "") + "]";
        } else 8 & ne ? he += "." + ot : 4 & ne && (he += " " + ot);
      } else "" !== he && !p(ot) && (P += de(Fe, he), he = ""), ne = ot, Fe = Fe || !p(ne);
      U++;
    }
    return "" !== he && (P += de(Fe, he)), P;
  }
  const Lt = {};
  function cn(w) {
    xn(Li(), Zt(), va() + w, !1);
  }
  function xn(w, P, U, ne) {
    if (!ne) if (3 == (3 & P[yo])) {
      const Fe = w.preOrderCheckHooks;
      null !== Fe && La(P, Fe, U);
    } else {
      const Fe = w.preOrderHooks;
      null !== Fe && kc(P, Fe, 0, U);
    }
    wc(U);
  }
  function Is(w, P = null, U = null, ne) {
    const he = Ys(w, P, U, ne);
    return he.resolveInjectorInitializers(), he;
  }
  function Ys(w, P = null, U = null, ne, he = new Set()) {
    const Fe = [U || Yo, mf(w)];
    return ne = ne || ("object" == typeof w ? void 0 : A(w)), new rp(Fe, P || $p(), ne || null, he);
  }
  let Sa = (() => {
    class w {
      static create(U, ne) {
        if (Array.isArray(U)) return Is({
          name: ""
        }, ne, U, "");
        {
          const he = U.name ?? "";
          return Is({
            name: he
          }, U.parent, U.providers, he);
        }
      }
    }
    return w.THROW_IF_NOT_FOUND = Jo, w.NULL = new gs(), w.ɵprov = We({
      token: w,
      providedIn: "any",
      factory: () => $t(og)
    }), w.__NG_ELEMENT_ID__ = -1, w;
  })();
  function wf(w, P = Ee.Default) {
    const U = Zt();
    return null === U ? $t(w, P) : ll(Cr(), U, L(w), P);
  }
  function Yg() {
    throw new Error("invalid");
  }
  function P_(w, P) {
    const U = w.contentQueries;
    if (null !== U) for (let ne = 0; ne < U.length; ne += 2) {
      const Fe = U[ne + 1];
      if (-1 !== Fe) {
        const ot = w.data[Fe];
        kl(U[ne]), ot.contentQueries(2, P[Fe], Fe);
      }
    }
  }
  function Um(w, P, U, ne, he, Fe, ot, Nt, qt, $n, Ni) {
    const go = P.blueprint.slice();
    return go[hs] = he, go[yo] = 76 | ne, (null !== Ni || w && 1024 & w[yo]) && (go[yo] |= 1024), Da(go), go[Qi] = go[ri] = w, go[Or] = U, go[xa] = ot || w && w[xa], go[rs] = Nt || w && w[rs], go[Js] = qt || w && w[Js] || null, go[Fs] = $n || w && w[Fs] || null, go[_s] = Fe, go[di] = function nn() {
      return kn++;
    }(), go[Gn] = Ni, go[Yt] = 2 == P.type ? w[Yt] : go, go;
  }
  function Mf(w, P, U, ne, he) {
    let Fe = w.data[P];
    if (null === Fe) Fe = function Tf(w, P, U, ne, he) {
      const Fe = Xr(),
        ot = la(),
        qt = w.data[P] = function Jp(w, P, U, ne, he, Fe) {
          return {
            type: U,
            index: ne,
            insertBeforeIndex: null,
            injectorIndex: P ? P.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            componentOffset: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            value: he,
            attrs: Fe,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            prev: null,
            projectionNext: null,
            child: null,
            parent: P,
            projection: null,
            styles: null,
            stylesWithoutHost: null,
            residualStyles: void 0,
            classes: null,
            classesWithoutHost: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          };
        }(0, ot ? Fe : Fe && Fe.parent, U, P, ne, he);
      return null === w.firstChild && (w.firstChild = qt), null !== Fe && (ot ? null == Fe.child && null !== qt.parent && (Fe.child = qt) : null === Fe.next && (Fe.next = qt, qt.prev = Fe)), qt;
    }(w, P, U, ne, he), function Uc() {
      return As.lFrame.inI18n;
    }() && (Fe.flags |= 32);else if (64 & Fe.type) {
      Fe.type = U, Fe.value = ne, Fe.attrs = he;
      const ot = function ys() {
        const w = As.lFrame,
          P = w.currentTNode;
        return w.isParent ? P : P.parent;
      }();
      Fe.injectorIndex = null === ot ? -1 : ot.injectorIndex;
    }
    return Hs(Fe, !0), Fe;
  }
  function Ef(w, P, U, ne) {
    if (0 === U) return -1;
    const he = P.length;
    for (let Fe = 0; Fe < U; Fe++) P.push(ne), w.blueprint.push(ne), w.data.push(null);
    return he;
  }
  function zg(w, P, U) {
    gc(P);
    try {
      const ne = w.viewQuery;
      null !== ne && Hh(1, ne, U);
      const he = w.template;
      null !== he && im(w, P, he, 1, U), w.firstCreatePass && (w.firstCreatePass = !1), w.staticContentQueries && P_(w, P), w.staticViewQueries && Hh(2, w.viewQuery, U);
      const Fe = w.components;
      null !== Fe && function B0(w, P) {
        for (let U = 0; U < P.length; U++) Of(w, P[U]);
      }(P, Fe);
    } catch (ne) {
      throw w.firstCreatePass && (w.incompleteFirstPass = !0, w.firstCreatePass = !1), ne;
    } finally {
      P[yo] &= -5, wa();
    }
  }
  function Df(w, P, U, ne) {
    const he = P[yo];
    if (128 != (128 & he)) {
      gc(P);
      try {
        Da(P), function er(w) {
          return As.lFrame.bindingIndex = w;
        }(w.bindingStartIndex), null !== U && im(w, P, U, 2, ne);
        const ot = 3 == (3 & he);
        if (ot) {
          const $n = w.preOrderCheckHooks;
          null !== $n && La(P, $n, null);
        } else {
          const $n = w.preOrderHooks;
          null !== $n && kc(P, $n, 0, null), Ut(P, 0);
        }
        if (function Mu(w) {
          for (let P = sf(w); null !== P; P = Vd(P)) {
            if (!P[_r]) continue;
            const U = P[js];
            for (let ne = 0; ne < U.length; ne++) {
              const he = U[ne];
              512 & he[yo] || vo(he[Qi], 1), he[yo] |= 512;
            }
          }
        }(P), function Nh(w) {
          for (let P = sf(w); null !== P; P = Vd(P)) for (let U = ws; U < P.length; U++) {
            const ne = P[U],
              he = ne[oi];
            cr(ne) && Df(he, ne, he.template, ne[Or]);
          }
        }(P), null !== w.contentQueries && P_(w, P), ot) {
          const $n = w.contentCheckHooks;
          null !== $n && La(P, $n);
        } else {
          const $n = w.contentHooks;
          null !== $n && kc(P, $n, 1), Ut(P, 1);
        }
        !function Wg(w, P) {
          const U = w.hostBindingOpCodes;
          if (null !== U) try {
            for (let ne = 0; ne < U.length; ne++) {
              const he = U[ne];
              if (he < 0) wc(~he);else {
                const Fe = he,
                  ot = U[++ne],
                  Nt = U[++ne];
                Wl(ot, Fe), Nt(2, P[Fe]);
              }
            }
          } finally {
            wc(-1);
          }
        }(w, P);
        const Nt = w.components;
        null !== Nt && function H0(w, P) {
          for (let U = 0; U < P.length; U++) Pc(w, P[U]);
        }(P, Nt);
        const qt = w.viewQuery;
        if (null !== qt && Hh(2, qt, ne), ot) {
          const $n = w.viewCheckHooks;
          null !== $n && La(P, $n);
        } else {
          const $n = w.viewHooks;
          null !== $n && kc(P, $n, 2), Ut(P, 2);
        }
        !0 === w.firstUpdatePass && (w.firstUpdatePass = !1), P[yo] &= -41, 512 & P[yo] && (P[yo] &= -513, vo(P[Qi], -1));
      } finally {
        wa();
      }
    }
  }
  function im(w, P, U, ne, he) {
    const Fe = va(),
      ot = 2 & ne;
    try {
      wc(-1), ot && P.length > dn && xn(w, P, dn, !1), Br(ot ? 2 : 0, he), U(ne, he);
    } finally {
      wc(Fe), Br(ot ? 3 : 1, he);
    }
  }
  function zu(w, P, U) {
    if (ha(P)) {
      const he = P.directiveEnd;
      for (let Fe = P.directiveStart; Fe < he; Fe++) {
        const ot = w.data[Fe];
        ot.contentQueries && ot.contentQueries(1, U[Fe], Fe);
      }
    }
  }
  function Fh(w, P, U) {
    mn() && (function Bv(w, P, U, ne) {
      const he = U.directiveStart,
        Fe = U.directiveEnd;
      ua(U) && function $g(w, P, U) {
        const ne = ja(P, w),
          he = O_(U),
          Fe = w[xa],
          ot = jc(w, Um(w, he, null, U.onPush ? 32 : 16, ne, P, Fe, Fe.createRenderer(ne, U), null, null, null));
        w[P.index] = ot;
      }(P, U, w.data[he + U.componentOffset]), w.firstCreatePass || Ja(U, P), Un(ne, P);
      const ot = U.initialInputs;
      for (let Nt = he; Nt < Fe; Nt++) {
        const qt = w.data[Nt],
          $n = Vl(P, w, Nt, U);
        Un($n, P), null !== ot && Vm(0, Nt - he, $n, qt, 0, ot), na(qt) && (mi(U.index, P)[Or] = Vl(P, w, Nt, U));
      }
    }(w, P, U, ja(U, P)), 64 == (64 & U.flags) && Y0(w, P, U));
  }
  function hg(w, P, U = ja) {
    const ne = P.localNames;
    if (null !== ne) {
      let he = P.index + 1;
      for (let Fe = 0; Fe < ne.length; Fe += 2) {
        const ot = ne[Fe + 1],
          Nt = -1 === ot ? U(P, w) : w[ot];
        w[he++] = Nt;
      }
    }
  }
  function O_(w) {
    const P = w.tView;
    return null === P || P.incompleteFirstPass ? w.tView = Gg(1, null, w.template, w.decls, w.vars, w.directiveDefs, w.pipeDefs, w.viewQuery, w.schemas, w.consts) : P;
  }
  function Gg(w, P, U, ne, he, Fe, ot, Nt, qt, $n) {
    const Ni = dn + ne,
      go = Ni + he,
      lr = function V0(w, P) {
        const U = [];
        for (let ne = 0; ne < P; ne++) U.push(ne < w ? null : Lt);
        return U;
      }(Ni, go),
      Ir = "function" == typeof $n ? $n() : $n;
    return lr[oi] = {
      type: w,
      blueprint: lr,
      template: U,
      queries: null,
      viewQuery: Nt,
      declTNode: P,
      data: lr.slice().fill(null, Ni),
      bindingStartIndex: Ni,
      expandoStartIndex: go,
      hostBindingOpCodes: null,
      firstCreatePass: !0,
      firstUpdatePass: !0,
      staticViewQueries: !1,
      staticContentQueries: !1,
      preOrderHooks: null,
      preOrderCheckHooks: null,
      contentHooks: null,
      contentCheckHooks: null,
      viewHooks: null,
      viewCheckHooks: null,
      destroyHooks: null,
      cleanup: null,
      contentQueries: null,
      components: null,
      directiveRegistry: "function" == typeof Fe ? Fe() : Fe,
      pipeRegistry: "function" == typeof ot ? ot() : ot,
      firstChild: null,
      schemas: qt,
      consts: Ir,
      incompleteFirstPass: !1
    };
  }
  function fg(w, P, U, ne) {
    const he = Af(P);
    null === U ? he.push(ne) : (he.push(U), w.firstCreatePass && Bh(w).push(ne, he.length - 1));
  }
  function Pl(w, P, U, ne) {
    for (let he in w) if (w.hasOwnProperty(he)) {
      U = null === U ? {} : U;
      const Fe = w[he];
      null === ne ? mg(U, P, he, Fe) : ne.hasOwnProperty(he) && mg(U, P, ne[he], Fe);
    }
    return U;
  }
  function mg(w, P, U, ne) {
    w.hasOwnProperty(U) ? w[U].push(P, ne) : w[U] = [P, ne];
  }
  function Fd(w, P, U, ne, he, Fe, ot, Nt) {
    const qt = ja(P, U);
    let Ni,
      $n = P.inputs;
    !Nt && null != $n && (Ni = $n[ne]) ? (Ch(w, U, Ni, ne, he), ua(P) && yc(U, P.index)) : 3 & P.type && (ne = function Hm(w) {
      return "class" === w ? "className" : "for" === w ? "htmlFor" : "formaction" === w ? "formAction" : "innerHtml" === w ? "innerHTML" : "readonly" === w ? "readOnly" : "tabindex" === w ? "tabIndex" : w;
    }(ne), he = null != ot ? ot(he, P.value || "", ne) : he, Fe.setProperty(qt, ne, he));
  }
  function yc(w, P) {
    const U = mi(P, w);
    16 & U[yo] || (U[yo] |= 32);
  }
  function td(w, P, U, ne) {
    if (mn()) {
      const he = null === ne ? null : {
          "": -1
        },
        Fe = function z0(w, P) {
          const U = w.directiveRegistry;
          let ne = null,
            he = null;
          if (U) for (let Fe = 0; Fe < U.length; Fe++) {
            const ot = U[Fe];
            if (l(P, ot.selectors, !1)) if (ne || (ne = []), na(ot)) {
              if (null !== ot.findHostDirectiveDefs) {
                const Nt = [];
                he = he || new Map(), ot.findHostDirectiveDefs(ot, Nt, he), ne.unshift(...Nt, ot), _g(w, P, Nt.length);
              } else ne.unshift(ot), _g(w, P, 0);
            } else he = he || new Map(), ot.findHostDirectiveDefs?.(ot, ne, he), ne.push(ot);
          }
          return null === ne ? null : [ne, he];
        }(w, U);
      let ot, Nt;
      null === Fe ? ot = Nt = null : [ot, Nt] = Fe, null !== ot && gg(w, P, U, ot, he, Nt), he && function G0(w, P, U) {
        if (P) {
          const ne = w.localNames = [];
          for (let he = 0; he < P.length; he += 2) {
            const Fe = U[P[he + 1]];
            if (null == Fe) throw new h(-301, !1);
            ne.push(P[he], Fe);
          }
        }
      }(U, ne, he);
    }
    U.mergedAttrs = ql(U.mergedAttrs, U.attrs);
  }
  function gg(w, P, U, ne, he, Fe) {
    for (let $n = 0; $n < ne.length; $n++) zl(Ja(U, P), w, ne[$n].type);
    !function jv(w, P, U) {
      w.flags |= 1, w.directiveStart = P, w.directiveEnd = P + U, w.providerIndexes = P;
    }(U, w.data.length, ne.length);
    for (let $n = 0; $n < ne.length; $n++) {
      const Ni = ne[$n];
      Ni.providersResolver && Ni.providersResolver(Ni);
    }
    let ot = !1,
      Nt = !1,
      qt = Ef(w, P, ne.length, null);
    for (let $n = 0; $n < ne.length; $n++) {
      const Ni = ne[$n];
      U.mergedAttrs = ql(U.mergedAttrs, Ni.hostAttrs), $0(w, U, P, qt, Ni), Vv(qt, Ni, he), null !== Ni.contentQueries && (U.flags |= 4), (null !== Ni.hostBindings || null !== Ni.hostAttrs || 0 !== Ni.hostVars) && (U.flags |= 64);
      const go = Ni.type.prototype;
      !ot && (go.ngOnChanges || go.ngOnInit || go.ngDoCheck) && ((w.preOrderHooks || (w.preOrderHooks = [])).push(U.index), ot = !0), !Nt && (go.ngOnChanges || go.ngDoCheck) && ((w.preOrderCheckHooks || (w.preOrderCheckHooks = [])).push(U.index), Nt = !0), qt++;
    }
    !function Rd(w, P, U) {
      const he = P.directiveEnd,
        Fe = w.data,
        ot = P.attrs,
        Nt = [];
      let qt = null,
        $n = null;
      for (let Ni = P.directiveStart; Ni < he; Ni++) {
        const go = Fe[Ni],
          lr = U ? U.get(go) : null,
          ss = lr ? lr.outputs : null;
        qt = Pl(go.inputs, Ni, qt, lr ? lr.inputs : null), $n = Pl(go.outputs, Ni, $n, ss);
        const Vs = null === qt || null === ot || yf(P) ? null : Jg(qt, Ni, ot);
        Nt.push(Vs);
      }
      null !== qt && (qt.hasOwnProperty("class") && (P.flags |= 8), qt.hasOwnProperty("style") && (P.flags |= 16)), P.initialInputs = Nt, P.inputs = qt, P.outputs = $n;
    }(w, U, Fe);
  }
  function Y0(w, P, U) {
    const ne = U.directiveStart,
      he = U.directiveEnd,
      Fe = U.index,
      ot = function nc() {
        return As.lFrame.currentDirectiveIndex;
      }();
    try {
      wc(Fe);
      for (let Nt = ne; Nt < he; Nt++) {
        const qt = w.data[Nt],
          $n = P[Nt];
        Zc(Nt), (null !== qt.hostBindings || 0 !== qt.hostVars || null !== qt.hostAttrs) && W0(qt, $n);
      }
    } finally {
      wc(-1), Zc(ot);
    }
  }
  function W0(w, P) {
    null !== w.hostBindings && w.hostBindings(1, P);
  }
  function _g(w, P, U) {
    P.componentOffset = U, (w.components || (w.components = [])).push(P.index);
  }
  function Vv(w, P, U) {
    if (U) {
      if (P.exportAs) for (let ne = 0; ne < P.exportAs.length; ne++) U[P.exportAs[ne]] = w;
      na(P) && (U[""] = w);
    }
  }
  function $0(w, P, U, ne, he) {
    w.data[ne] = he;
    const Fe = he.factory || (he.factory = Ko(he.type)),
      ot = new so(Fe, na(he), wf);
    w.blueprint[ne] = ot, U[ne] = ot, function Hv(w, P, U, ne, he) {
      const Fe = he.hostBindings;
      if (Fe) {
        let ot = w.hostBindingOpCodes;
        null === ot && (ot = w.hostBindingOpCodes = []);
        const Nt = ~P.index;
        (function Z0(w) {
          let P = w.length;
          for (; P > 0;) {
            const U = w[--P];
            if ("number" == typeof U && U < 0) return U;
          }
          return 0;
        })(ot) != Nt && ot.push(Nt), ot.push(U, ne, Fe);
      }
    }(w, P, ne, Ef(w, U, he.hostVars, Lt), he);
  }
  function Iu(w, P, U, ne, he, Fe) {
    const ot = ja(w, P);
    !function Kg(w, P, U, ne, he, Fe, ot) {
      if (null == Fe) w.removeAttribute(P, he, U);else {
        const Nt = null == ot ? u(Fe) : ot(Fe, ne || "", he);
        w.setAttribute(P, he, Nt, U);
      }
    }(P[rs], ot, Fe, w.value, U, ne, he);
  }
  function Vm(w, P, U, ne, he, Fe) {
    const ot = Fe[P];
    if (null !== ot) {
      const Nt = ne.setInput;
      for (let qt = 0; qt < ot.length;) {
        const $n = ot[qt++],
          Ni = ot[qt++],
          go = ot[qt++];
        null !== Nt ? ne.setInput(U, go, $n, Ni) : U[Ni] = go;
      }
    }
  }
  function Jg(w, P, U) {
    let ne = null,
      he = 0;
    for (; he < U.length;) {
      const Fe = U[he];
      if (0 !== Fe) {
        if (5 !== Fe) {
          if ("number" == typeof Fe) break;
          if (w.hasOwnProperty(Fe)) {
            null === ne && (ne = []);
            const ot = w[Fe];
            for (let Nt = 0; Nt < ot.length; Nt += 2) if (ot[Nt] === P) {
              ne.push(Fe, ot[Nt + 1], U[he + 1]);
              break;
            }
          }
          he += 2;
        } else he += 2;
      } else he += 4;
    }
    return ne;
  }
  function Pf(w, P, U, ne) {
    return [w, !0, !1, P, null, 0, ne, U, null, null];
  }
  function Pc(w, P) {
    const U = mi(P, w);
    if (cr(U)) {
      const ne = U[oi];
      48 & U[yo] ? Df(ne, U, ne.template, U[Or]) : U[Kr] > 0 && Qp(U);
    }
  }
  function Qp(w) {
    for (let ne = sf(w); null !== ne; ne = Vd(ne)) for (let he = ws; he < ne.length; he++) {
      const Fe = ne[he];
      if (cr(Fe)) if (512 & Fe[yo]) {
        const ot = Fe[oi];
        Df(ot, Fe, ot.template, Fe[Or]);
      } else Fe[Kr] > 0 && Qp(Fe);
    }
    const U = w[oi].components;
    if (null !== U) for (let ne = 0; ne < U.length; ne++) {
      const he = mi(U[ne], w);
      cr(he) && he[Kr] > 0 && Qp(he);
    }
  }
  function Of(w, P) {
    const U = mi(P, w),
      ne = U[oi];
    (function Uh(w, P) {
      for (let U = P.length; U < w.blueprint.length; U++) P.push(w.blueprint[U]);
    })(ne, U), zg(ne, U, U[Or]);
  }
  function jc(w, P) {
    return w[ho] ? w[uo][Qo] = P : w[ho] = P, w[uo] = P, P;
  }
  function vh(w) {
    for (; w;) {
      w[yo] |= 32;
      const P = gd(w);
      if (Qs(w) && !P) return w;
      w = P;
    }
    return null;
  }
  function Xp(w, P, U, ne = !0) {
    const he = P[xa];
    he.begin && he.begin();
    try {
      Df(w, P, w.template, U);
    } catch (ot) {
      throw ne && If(P, ot), ot;
    } finally {
      he.end && he.end();
    }
  }
  function Hh(w, P, U) {
    kl(0), P(w, U);
  }
  function Af(w) {
    return w[ra] || (w[ra] = []);
  }
  function Bh(w) {
    return w.cleanup || (w.cleanup = []);
  }
  function Sf(w, P, U) {
    return (null === w || na(w)) && (U = function aa(w) {
      for (; Array.isArray(w);) {
        if ("object" == typeof w[Ro]) return w;
        w = w[hs];
      }
      return null;
    }(U[P.index])), U[rs];
  }
  function If(w, P) {
    const U = w[Fs],
      ne = U ? U.get(Fm, null) : null;
    ne && ne.handleError(P);
  }
  function Ch(w, P, U, ne, he) {
    for (let Fe = 0; Fe < U.length;) {
      const ot = U[Fe++],
        Nt = U[Fe++],
        qt = P[ot],
        $n = w.data[ot];
      null !== $n.setInput ? $n.setInput(qt, he, ne, Nt) : qt[Nt] = he;
    }
  }
  function bd(w, P, U) {
    const ne = Ka(P, w);
    !function af(w, P, U) {
      w.setValue(P, U);
    }(w[rs], ne, U);
  }
  function Vh(w, P, U) {
    let ne = U ? w.styles : null,
      he = U ? w.classes : null,
      Fe = 0;
    if (null !== P) for (let ot = 0; ot < P.length; ot++) {
      const Nt = P[ot];
      "number" == typeof Nt ? Fe = Nt : 1 == Fe ? he = N(he, Nt) : 2 == Fe && (ne = N(ne, Nt + ": " + P[++ot] + ";"));
    }
    U ? w.styles = ne : w.stylesWithoutHost = ne, U ? w.classes = he : w.classesWithoutHost = he;
  }
  function qp(w, P, U, ne, he = !1) {
    for (; null !== U;) {
      const Fe = P[U.index];
      if (null !== Fe && ne.push(ks(Fe)), sa(Fe)) for (let Nt = ws; Nt < Fe.length; Nt++) {
        const qt = Fe[Nt],
          $n = qt[oi].firstChild;
        null !== $n && qp(qt[oi], qt, $n, ne);
      }
      const ot = U.type;
      if (8 & ot) qp(w, P, U.child, ne);else if (32 & ot) {
        const Nt = md(U, P);
        let qt;
        for (; qt = Nt();) ne.push(qt);
      } else if (16 & ot) {
        const Nt = jf(P, U);
        if (Array.isArray(Nt)) ne.push(...Nt);else {
          const qt = gd(P[Yt]);
          qp(qt[oi], qt, Nt, ne, !0);
        }
      }
      U = he ? U.projectionNext : U.next;
    }
    return ne;
  }
  class pd {
    get rootNodes() {
      const P = this._lView,
        U = P[oi];
      return qp(U, P, U.firstChild, []);
    }
    constructor(P, U) {
      this._lView = P, this._cdRefInjectingView = U, this._appRef = null, this._attachedToViewContainer = !1;
    }
    get context() {
      return this._lView[Or];
    }
    set context(P) {
      this._lView[Or] = P;
    }
    get destroyed() {
      return 128 == (128 & this._lView[yo]);
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);else if (this._attachedToViewContainer) {
        const P = this._lView[Qi];
        if (sa(P)) {
          const U = P[Ts],
            ne = U ? U.indexOf(this) : -1;
          ne > -1 && (vu(P, ne), Ce(U, ne));
        }
        this._attachedToViewContainer = !1;
      }
      Zd(this._lView[oi], this._lView);
    }
    onDestroy(P) {
      fg(this._lView[oi], this._lView, null, P);
    }
    markForCheck() {
      vh(this._cdRefInjectingView || this._lView);
    }
    detach() {
      this._lView[yo] &= -65;
    }
    reattach() {
      this._lView[yo] |= 64;
    }
    detectChanges() {
      Xp(this._lView[oi], this._lView, this.context);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new h(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null, function qd(w, P) {
        Sl(w, P, P[rs], 2, null, null);
      }(this._lView[oi], this._lView);
    }
    attachToAppRef(P) {
      if (this._attachedToViewContainer) throw new h(902, !1);
      this._appRef = P;
    }
  }
  class Lf extends pd {
    constructor(P) {
      super(P), this._view = P;
    }
    detectChanges() {
      const P = this._view;
      Xp(P[oi], P, P[Or], !1);
    }
    checkNoChanges() {}
    get context() {
      return null;
    }
  }
  class yh extends Rh {
    constructor(P) {
      super(), this.ngModule = P;
    }
    resolveComponentFactory(P) {
      const U = Ji(P);
      return new eh(U, this.ngModule);
    }
  }
  function jh(w) {
    const P = [];
    for (let U in w) w.hasOwnProperty(U) && P.push({
      propName: w[U],
      templateName: U
    });
    return P;
  }
  class jm {
    constructor(P, U) {
      this.injector = P, this.parentInjector = U;
    }
    get(P, U, ne) {
      ne = In(ne);
      const he = this.injector.get(P, cg, ne);
      return he !== cg || U === cg ? he : this.parentInjector.get(P, U, ne);
    }
  }
  class eh extends mh {
    get inputs() {
      return jh(this.componentDef.inputs);
    }
    get outputs() {
      return jh(this.componentDef.outputs);
    }
    constructor(P, U) {
      super(), this.componentDef = P, this.ngModule = U, this.componentType = P.type, this.selector = function Xe(w) {
        return w.map(Oe).join(",");
      }(P.selectors), this.ngContentSelectors = P.ngContentSelectors ? P.ngContentSelectors : [], this.isBoundToModule = !!U;
    }
    create(P, U, ne, he) {
      let Fe = (he = he || this.ngModule) instanceof Au ? he : he?.injector;
      Fe && null !== this.componentDef.getStandaloneInjector && (Fe = this.componentDef.getStandaloneInjector(Fe) || Fe);
      const ot = Fe ? new jm(P, Fe) : P,
        Nt = ot.get(lg, null);
      if (null === Nt) throw new h(407, !1);
      const qt = ot.get(Rm, null),
        $n = Nt.createRenderer(null, this.componentDef),
        Ni = this.componentDef.selectors[0][0] || "div",
        go = ne ? function A_(w, P, U) {
          return w.selectRootElement(P, U === Pr.ShadowDom);
        }($n, ne, this.componentDef.encapsulation) : il($n, Ni, function sm(w) {
          const P = w.toLowerCase();
          return "svg" === P ? vr : "math" === P ? "math" : null;
        }(Ni)),
        lr = this.componentDef.onPush ? 288 : 272,
        Ir = Gg(0, null, null, 1, 0, null, null, null, null, null),
        ss = Um(null, Ir, null, lr, null, null, Nt, $n, qt, ot, null);
      let Vs, ga;
      gc(ss);
      try {
        const Fa = this.componentDef;
        let bl,
          Es = null;
        Fa.findHostDirectiveDefs ? (bl = [], Es = new Map(), Fa.findHostDirectiveDefs(Fa, bl, Es), bl.push(Fa)) : bl = [Fa];
        const Ul = function Gu(w, P) {
            const U = w[oi],
              ne = dn;
            return w[ne] = P, Mf(U, ne, 2, "#host", null);
          }(ss, go),
          Ru = function cm(w, P, U, ne, he, Fe, ot, Nt) {
            const qt = he[oi];
            !function Zh(w, P, U, ne) {
              for (const he of w) P.mergedAttrs = ql(P.mergedAttrs, he.hostAttrs);
              null !== P.mergedAttrs && (Vh(P, P.mergedAttrs, !0), null !== U && cd(ne, U, P));
            }(ne, w, P, ot);
            const $n = Fe.createRenderer(P, U),
              Ni = Um(he, O_(U), null, U.onPush ? 32 : 16, he[w.index], w, Fe, $n, Nt || null, null, null);
            return qt.firstCreatePass && _g(qt, w, ne.length - 1), jc(he, Ni), he[w.index] = Ni;
          }(Ul, go, Fa, bl, ss, Nt, $n);
        ga = Ln(Ir, dn), go && function Zm(w, P, U, ne) {
          if (ne) Za(w, U, ["ng-version", Ug.full]);else {
            const {
              attrs: he,
              classes: Fe
            } = function wt(w) {
              const P = [],
                U = [];
              let ne = 1,
                he = 2;
              for (; ne < w.length;) {
                let Fe = w[ne];
                if ("string" == typeof Fe) 2 === he ? "" !== Fe && P.push(Fe, w[++ne]) : 8 === he && U.push(Fe);else {
                  if (!p(he)) break;
                  he = Fe;
                }
                ne++;
              }
              return {
                attrs: P,
                classes: U
              };
            }(P.selectors[0]);
            he && Za(w, U, he), Fe && Fe.length > 0 && uh(w, U, Fe.join(" "));
          }
        }($n, Fa, go, ne), void 0 !== U && function kf(w, P, U) {
          const ne = w.projection = [];
          for (let he = 0; he < P.length; he++) {
            const Fe = U[he];
            ne.push(null != Fe ? Array.from(Fe) : null);
          }
        }(ga, this.ngContentSelectors, U), Vs = function Op(w, P, U, ne, he, Fe) {
          const ot = Cr(),
            Nt = he[oi],
            qt = ja(ot, he);
          gg(Nt, he, ot, U, null, ne);
          for (let Ni = 0; Ni < U.length; Ni++) Un(Vl(he, Nt, ot.directiveStart + Ni, ot), he);
          Y0(Nt, he, ot), qt && Un(qt, he);
          const $n = Vl(he, Nt, ot.directiveStart + ot.componentOffset, ot);
          if (w[Or] = he[Or] = $n, null !== Fe) for (const Ni of Fe) Ni($n, P);
          return zu(Nt, ot, w), $n;
        }(Ru, Fa, bl, Es, ss, [Yh]), zg(Ir, ss, null);
      } finally {
        wa();
      }
      return new am(this.componentType, Vs, _f(ga, ss), ss, ga);
    }
  }
  class am extends Rg {
    constructor(P, U, ne, he, Fe) {
      super(), this.location = ne, this._rootLView = he, this._tNode = Fe, this.instance = U, this.hostView = this.changeDetectorRef = new Lf(he), this.componentType = P;
    }
    setInput(P, U) {
      const ne = this._tNode.inputs;
      let he;
      if (null !== ne && (he = ne[P])) {
        const Fe = this._rootLView;
        Ch(Fe[oi], Fe, he, P, U), yc(Fe, this._tNode.index);
      }
    }
    get injector() {
      return new Al(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(P) {
      this.hostView.onDestroy(P);
    }
  }
  function Yh() {
    const w = Cr();
    vs(Zt()[oi], w);
  }
  function Wh(w) {
    let P = function Nd(w) {
        return Object.getPrototypeOf(w.prototype).constructor;
      }(w.type),
      U = !0;
    const ne = [w];
    for (; P;) {
      let he;
      if (na(w)) he = P.ɵcmp || P.ɵdir;else {
        if (P.ɵcmp) throw new h(903, !1);
        he = P.ɵdir;
      }
      if (he) {
        if (U) {
          ne.push(he);
          const ot = w;
          ot.inputs = Ud(w.inputs), ot.declaredInputs = Ud(w.declaredInputs), ot.outputs = Ud(w.outputs);
          const Nt = he.hostBindings;
          Nt && um(w, Nt);
          const qt = he.viewQuery,
            $n = he.contentQueries;
          if (qt && xh(w, qt), $n && zh(w, $n), b(w.inputs, he.inputs), b(w.declaredInputs, he.declaredInputs), b(w.outputs, he.outputs), na(he) && he.data.animation) {
            const Ni = w.data;
            Ni.animation = (Ni.animation || []).concat(he.data.animation);
          }
        }
        const Fe = he.features;
        if (Fe) for (let ot = 0; ot < Fe.length; ot++) {
          const Nt = Fe[ot];
          Nt && Nt.ngInherit && Nt(w), Nt === Wh && (U = !1);
        }
      }
      P = Object.getPrototypeOf(P);
    }
    !function Rf(w) {
      let P = 0,
        U = null;
      for (let ne = w.length - 1; ne >= 0; ne--) {
        const he = w[ne];
        he.hostVars = P += he.hostVars, he.hostAttrs = ql(he.hostAttrs, U = ql(U, he.hostAttrs));
      }
    }(ne);
  }
  function Ud(w) {
    return w === qo ? {} : w === Yo ? [] : w;
  }
  function xh(w, P) {
    const U = w.viewQuery;
    w.viewQuery = U ? (ne, he) => {
      P(ne, he), U(ne, he);
    } : P;
  }
  function zh(w, P) {
    const U = w.contentQueries;
    w.contentQueries = U ? (ne, he, Fe) => {
      P(ne, he, Fe), U(ne, he, Fe);
    } : P;
  }
  function um(w, P) {
    const U = w.hostBindings;
    w.hostBindings = U ? (ne, he) => {
      P(ne, he), U(ne, he);
    } : P;
  }
  function cp(w) {
    return !!Te(w) && (Array.isArray(w) || !(w instanceof Map) && Symbol.iterator in w);
  }
  function Te(w) {
    return null !== w && ("function" == typeof w || "object" == typeof w);
  }
  function k(w, P, U) {
    return w[P] = U;
  }
  function ce(w, P) {
    return w[P];
  }
  function Ye(w, P, U) {
    return !Object.is(w[P], U) && (w[P] = U, !0);
  }
  function Tt(w, P, U, ne) {
    const he = Ye(w, P, U);
    return Ye(w, P + 1, ne) || he;
  }
  function ai(w, P, U, ne, he) {
    const Fe = Tt(w, P, U, ne);
    return Ye(w, P + 2, he) || Fe;
  }
  function Zi(w, P, U, ne, he, Fe) {
    const ot = Tt(w, P, U, ne);
    return Tt(w, P + 2, he, Fe) || ot;
  }
  function Po(w, P, U, ne) {
    const he = Zt();
    return Ye(he, Qr(), P) && (Li(), Iu(zs(), he, w, P, U, ne)), Po;
  }
  function Wr(w, P, U, ne) {
    return Ye(w, Qr(), U) ? P + u(U) + ne : Lt;
  }
  function Wv(w, P, U, ne, he, Fe, ot, Nt) {
    const qt = Zt(),
      $n = Li(),
      Ni = w + dn,
      go = $n.firstCreatePass ? function Fx(w, P, U, ne, he, Fe, ot, Nt, qt) {
        const $n = P.consts,
          Ni = Mf(P, w, 4, ot || null, as($n, Nt));
        td(P, U, Ni, as($n, qt)), vs(P, Ni);
        const go = Ni.tViews = Gg(2, Ni, ne, he, Fe, P.directiveRegistry, P.pipeRegistry, null, P.schemas, $n);
        return null !== P.queries && (P.queries.template(P, Ni), go.queries = P.queries.embeddedTView(Ni)), Ni;
      }(Ni, $n, qt, P, U, ne, he, Fe, ot) : $n.data[Ni];
    Hs(go, !1);
    const lr = qt[rs].createComment("");
    Eh($n, qt, lr, go), Un(lr, qt), jc(qt, qt[Ni] = Pf(lr, qt, lr, go)), da(go) && Fh($n, qt, go), null != ot && hg(qt, go, Nt);
  }
  function zv(w) {
    return en(function Wi() {
      return As.lFrame.contextLView;
    }(), dn + w);
  }
  function J0(w, P, U) {
    const ne = Zt();
    return Ye(ne, Qr(), P) && Fd(Li(), zs(), ne, w, P, ne[rs], U, !1), J0;
  }
  function Q0(w, P, U, ne, he) {
    const ot = he ? "class" : "style";
    Ch(w, U, P.inputs[ot], ot, ne);
  }
  function hm(w, P, U, ne) {
    const he = Zt(),
      Fe = Li(),
      ot = dn + w,
      Nt = he[rs],
      qt = Fe.firstCreatePass ? function Gv(w, P, U, ne, he, Fe) {
        const ot = P.consts,
          qt = Mf(P, w, 2, ne, as(ot, he));
        return td(P, U, qt, as(ot, Fe)), null !== qt.attrs && Vh(qt, qt.attrs, !1), null !== qt.mergedAttrs && Vh(qt, qt.mergedAttrs, !0), null !== P.queries && P.queries.elementStart(P, qt), qt;
      }(ot, Fe, he, P, U, ne) : Fe.data[ot],
      $n = he[ot] = il(Nt, P, function au() {
        return As.lFrame.currentNamespace;
      }()),
      Ni = da(qt);
    return Hs(qt, !0), cd(Nt, $n, qt), 32 != (32 & qt.flags) && Eh(Fe, he, $n, qt), 0 === function sn() {
      return As.lFrame.elementDepthCount;
    }() && Un($n, he), function Jt() {
      As.lFrame.elementDepthCount++;
    }(), Ni && (Fh(Fe, he, qt), zu(Fe, qt, he)), null !== ne && hg(he, qt), hm;
  }
  function fm() {
    let w = Cr();
    la() ? St() : (w = w.parent, Hs(w, !1));
    const P = w;
    !function Si() {
      As.lFrame.elementDepthCount--;
    }();
    const U = Li();
    return U.firstCreatePass && (vs(U, w), ha(w) && U.queries.elementEnd(w)), null != P.classesWithoutHost && function Ma(w) {
      return 0 != (8 & w.flags);
    }(P) && Q0(U, P, Zt(), P.classesWithoutHost, !0), null != P.stylesWithoutHost && function Ia(w) {
      return 0 != (16 & w.flags);
    }(P) && Q0(U, P, Zt(), P.stylesWithoutHost, !1), fm;
  }
  function $v(w, P, U, ne) {
    return hm(w, P, U, ne), fm(), $v;
  }
  function Qg(w, P, U) {
    const ne = Zt(),
      he = Li(),
      Fe = w + dn,
      ot = he.firstCreatePass ? function Nx(w, P, U, ne, he) {
        const Fe = P.consts,
          ot = as(Fe, ne),
          Nt = Mf(P, w, 8, "ng-container", ot);
        return null !== ot && Vh(Nt, ot, !0), td(P, U, Nt, as(Fe, he)), null !== P.queries && P.queries.elementStart(P, Nt), Nt;
      }(Fe, he, ne, P, U) : he.data[Fe];
    Hs(ot, !0);
    const Nt = ne[Fe] = ne[rs].createComment("");
    return Eh(he, ne, Nt, ot), Un(Nt, ne), da(ot) && (Fh(he, ne, ot), zu(he, ot, ne)), null != U && hg(ne, ot), Qg;
  }
  function X0() {
    let w = Cr();
    const P = Li();
    return la() ? St() : (w = w.parent, Hs(w, !1)), P.firstCreatePass && (vs(P, w), ha(w) && P.queries.elementEnd(w)), X0;
  }
  function Kv(w, P, U) {
    return Qg(w, P, U), X0(), Kv;
  }
  function Jv() {
    return Zt();
  }
  function Qv(w) {
    return !!w && "function" == typeof w.then;
  }
  function Xv(w) {
    return !!w && "function" == typeof w.subscribe;
  }
  const t4 = Xv;
  function q0(w, P, U, ne) {
    const he = Zt(),
      Fe = Li(),
      ot = Cr();
    return tt(Fe, he, he[rs], ot, w, P, ne), q0;
  }
  function ee(w, P) {
    const U = Cr(),
      ne = Zt(),
      he = Li();
    return tt(he, ne, Sf(Yc(he.data), U, ne), U, w, P), ee;
  }
  function tt(w, P, U, ne, he, Fe, ot) {
    const Nt = da(ne),
      $n = w.firstCreatePass && Bh(w),
      Ni = P[Or],
      go = Af(P);
    let lr = !0;
    if (3 & ne.type || ot) {
      const Vs = ja(ne, P),
        ga = ot ? ot(Vs) : Vs,
        Fa = go.length,
        bl = ot ? Ul => ot(ks(Ul[ne.index])) : ne.index;
      let Es = null;
      if (!ot && Nt && (Es = function ge(w, P, U, ne) {
        const he = w.cleanup;
        if (null != he) for (let Fe = 0; Fe < he.length - 1; Fe += 2) {
          const ot = he[Fe];
          if (ot === U && he[Fe + 1] === ne) {
            const Nt = P[ra],
              qt = he[Fe + 2];
            return Nt.length > qt ? Nt[qt] : null;
          }
          "string" == typeof ot && (Fe += 2);
        }
        return null;
      }(w, P, he, ne.index)), null !== Es) (Es.__ngLastListenerFn__ || Es).__ngNextListenerFn__ = Fe, Es.__ngLastListenerFn__ = Fe, lr = !1;else {
        Fe = wi(ne, P, Ni, Fe, !1);
        const Ul = U.listen(ga, he, Fe);
        go.push(Fe, Ul), $n && $n.push(he, bl, Fa, Fa + 1);
      }
    } else Fe = wi(ne, P, Ni, Fe, !1);
    const Ir = ne.outputs;
    let ss;
    if (lr && null !== Ir && (ss = Ir[he])) {
      const Vs = ss.length;
      if (Vs) for (let ga = 0; ga < Vs; ga += 2) {
        const Ru = P[ss[ga]][ss[ga + 1]].subscribe(Fe),
          od = go.length;
        go.push(Fe, Ru), $n && $n.push(he, ne.index, od, -(od + 1));
      }
    }
  }
  function ln(w, P, U, ne) {
    try {
      return Br(6, P, U), !1 !== U(ne);
    } catch (he) {
      return If(w, he), !1;
    } finally {
      Br(7, P, U);
    }
  }
  function wi(w, P, U, ne, he) {
    return function Fe(ot) {
      if (ot === Function) return ne;
      vh(w.componentOffset > -1 ? mi(w.index, P) : P);
      let qt = ln(P, U, ne, ot),
        $n = Fe.__ngNextListenerFn__;
      for (; $n;) qt = ln(P, U, $n, ot) && qt, $n = $n.__ngNextListenerFn__;
      return he && !1 === qt && (ot.preventDefault(), ot.returnValue = !1), qt;
    };
  }
  function Xi(w = 1) {
    return function Ua(w) {
      return (As.lFrame.contextLView = function hl(w, P) {
        for (; w > 0;) P = P[ri], w--;
        return P;
      }(w, As.lFrame.contextLView))[Or];
    }(w);
  }
  function ko(w, P) {
    let U = null;
    const ne = function g(w) {
      const P = w.attrs;
      if (null != P) {
        const U = P.indexOf(5);
        if (!(1 & U)) return P[U + 1];
      }
      return null;
    }(w);
    for (let he = 0; he < P.length; he++) {
      const Fe = P[he];
      if ("*" !== Fe) {
        if (null === ne ? l(w, Fe, !0) : ie(ne, Fe)) return he;
      } else U = he;
    }
    return U;
  }
  function nr(w) {
    const P = Zt()[Yt][_s];
    if (!P.projection) {
      const ne = P.projection = Be(w ? w.length : 1, null),
        he = ne.slice();
      let Fe = P.child;
      for (; null !== Fe;) {
        const ot = w ? ko(Fe, w) : 0;
        null !== ot && (he[ot] ? he[ot].projectionNext = Fe : ne[ot] = Fe, he[ot] = Fe), Fe = Fe.next;
      }
    }
  }
  function Dr(w, P = 0, U) {
    const ne = Zt(),
      he = Li(),
      Fe = Mf(he, dn + w, 16, null, U || null);
    null === Fe.projection && (Fe.projection = P), St(), 32 != (32 & Fe.flags) && function uf(w, P, U) {
      Hp(P[rs], 0, P, U, ep(w, U, P), ch(U.parent || P[_s], U, P));
    }(he, ne, Fe);
  }
  function ds(w, P, U) {
    return ps(w, "", P, "", U), ds;
  }
  function ps(w, P, U, ne, he) {
    const Fe = Zt(),
      ot = Wr(Fe, P, U, ne);
    return ot !== Lt && Fd(Li(), zs(), Fe, w, ot, Fe[rs], he, !1), ps;
  }
  function Hd(w, P) {
    return w << 17 | P << 2;
  }
  function Lu(w) {
    return w >> 17 & 32767;
  }
  function nh(w) {
    return 2 | w;
  }
  function Jd(w) {
    return (131068 & w) >> 2;
  }
  function L_(w, P) {
    return -131069 & w | P << 2;
  }
  function qv(w) {
    return 1 | w;
  }
  function Ux(w, P, U, ne, he) {
    const Fe = w[U + 1],
      ot = null === P;
    let Nt = ne ? Lu(Fe) : Jd(Fe),
      qt = !1;
    for (; 0 !== Nt && (!1 === qt || ot);) {
      const Ni = w[Nt + 1];
      xw(w[Nt], P) && (qt = !0, w[Nt + 1] = ne ? qv(Ni) : nh(Ni)), Nt = ne ? Lu(Ni) : Jd(Ni);
    }
    qt && (w[U + 1] = ne ? nh(Fe) : qv(Fe));
  }
  function xw(w, P) {
    return null === w || null == P || (Array.isArray(w) ? w[1] : w) === P || !(!Array.isArray(w) || "string" != typeof P) && Wo(w, P) >= 0;
  }
  const Bd = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0
  };
  function Hx(w) {
    return w.substring(Bd.key, Bd.keyEnd);
  }
  function bw(w) {
    return w.substring(Bd.value, Bd.valueEnd);
  }
  function Bx(w, P) {
    const U = Bd.textEnd;
    return U === P ? -1 : (P = Bd.keyEnd = function Tw(w, P, U) {
      for (; P < U && w.charCodeAt(P) > 32;) P++;
      return P;
    }(w, Bd.key = P, U), k_(w, P, U));
  }
  function n4(w, P) {
    const U = Bd.textEnd;
    let ne = Bd.key = k_(w, P, U);
    return U === ne ? -1 : (ne = Bd.keyEnd = function e1(w, P, U) {
      let ne;
      for (; P < U && (45 === (ne = w.charCodeAt(P)) || 95 === ne || (-33 & ne) >= 65 && (-33 & ne) <= 90 || ne >= 48 && ne <= 57);) P++;
      return P;
    }(w, ne, U), ne = t1(w, ne, U), ne = Bd.value = k_(w, ne, U), ne = Bd.valueEnd = function Ew(w, P, U) {
      let ne = -1,
        he = -1,
        Fe = -1,
        ot = P,
        Nt = ot;
      for (; ot < U;) {
        const qt = w.charCodeAt(ot++);
        if (59 === qt) return Nt;
        34 === qt || 39 === qt ? Nt = ot = Vx(w, qt, ot, U) : P === ot - 4 && 85 === Fe && 82 === he && 76 === ne && 40 === qt ? Nt = ot = Vx(w, 41, ot, U) : qt > 32 && (Nt = ot), Fe = he, he = ne, ne = -33 & qt;
      }
      return Nt;
    }(w, ne, U), t1(w, ne, U));
  }
  function o4(w) {
    Bd.key = 0, Bd.keyEnd = 0, Bd.value = 0, Bd.valueEnd = 0, Bd.textEnd = w.length;
  }
  function k_(w, P, U) {
    for (; P < U && w.charCodeAt(P) <= 32;) P++;
    return P;
  }
  function t1(w, P, U, ne) {
    return (P = k_(w, P, U)) < U && P++, P;
  }
  function Vx(w, P, U, ne) {
    let he = -1,
      Fe = U;
    for (; Fe < ne;) {
      const ot = w.charCodeAt(Fe++);
      if (ot == P && 92 !== he) return Fe;
      he = 92 == ot && 92 === he ? 0 : ot;
    }
    throw new Error();
  }
  function eC(w, P, U) {
    return qh(w, P, U, !1), eC;
  }
  function r4(w, P) {
    return qh(w, P, null, !0), r4;
  }
  function Xh(w) {
    Hf(Wx, rD, w, !1);
  }
  function rD(w, P) {
    for (let U = function Mw(w) {
      return o4(w), n4(w, k_(w, 0, Bd.textEnd));
    }(P); U >= 0; U = n4(P, U)) Wx(w, Hx(P), bw(P));
  }
  function jx(w) {
    Hf(Ui, mm, w, !0);
  }
  function mm(w, P) {
    for (let U = function ww(w) {
      return o4(w), Bx(w, k_(w, 0, Bd.textEnd));
    }(P); U >= 0; U = Bx(P, U)) Ui(w, Hx(P), !0);
  }
  function qh(w, P, U, ne) {
    const he = Zt(),
      Fe = Li(),
      ot = Il(2);
    Fe.firstUpdatePass && Xg(Fe, w, ot, ne), P !== Lt && Ye(he, ot, P) && zx(Fe, Fe.data[va()], he, he[rs], w, he[ot + 1] = function Pw(w, P) {
      return null == w || ("string" == typeof P ? w += P : "object" == typeof w && (w = A(gl(w)))), w;
    }(P, U), ne, ot);
  }
  function Hf(w, P, U, ne) {
    const he = Li(),
      Fe = Il(2);
    he.firstUpdatePass && Xg(he, null, Fe, ne);
    const ot = Zt();
    if (U !== Lt && Ye(ot, Fe, U)) {
      const Nt = he.data[va()];
      if (s4(Nt, ne) && !tC(he, Fe)) {
        let qt = ne ? Nt.classesWithoutHost : Nt.stylesWithoutHost;
        null !== qt && (U = N(qt, U || "")), Q0(he, Nt, ot, U, ne);
      } else !function lD(w, P, U, ne, he, Fe, ot, Nt) {
        he === Lt && (he = Yo);
        let qt = 0,
          $n = 0,
          Ni = 0 < he.length ? he[0] : null,
          go = 0 < Fe.length ? Fe[0] : null;
        for (; null !== Ni || null !== go;) {
          const lr = qt < he.length ? he[qt + 1] : void 0,
            Ir = $n < Fe.length ? Fe[$n + 1] : void 0;
          let Vs,
            ss = null;
          Ni === go ? (qt += 2, $n += 2, lr !== Ir && (ss = go, Vs = Ir)) : null === go || null !== Ni && Ni < go ? (qt += 2, ss = Ni) : ($n += 2, ss = go, Vs = Ir), null !== ss && zx(w, P, U, ne, ss, Vs, ot, Nt), Ni = qt < he.length ? he[qt] : null, go = $n < Fe.length ? Fe[$n] : null;
        }
      }(he, Nt, ot, ot[rs], ot[Fe + 1], ot[Fe + 1] = function Dw(w, P, U) {
        if (null == U || "" === U) return Yo;
        const ne = [],
          he = gl(U);
        if (Array.isArray(he)) for (let Fe = 0; Fe < he.length; Fe++) w(ne, he[Fe], !0);else if ("object" == typeof he) for (const Fe in he) he.hasOwnProperty(Fe) && w(ne, Fe, he[Fe]);else "string" == typeof he && P(ne, he);
        return ne;
      }(w, P, U), ne, Fe);
    }
  }
  function tC(w, P) {
    return P >= w.expandoStartIndex;
  }
  function Xg(w, P, U, ne) {
    const he = w.data;
    if (null === he[U + 1]) {
      const Fe = he[va()],
        ot = tC(w, U);
      s4(Fe, ne) && null === P && !ot && (P = !1), P = function R_(w, P, U, ne) {
        const he = Yc(w);
        let Fe = ne ? P.residualClasses : P.residualStyles;
        if (null === he) 0 === (ne ? P.classBindings : P.styleBindings) && (U = nC(U = Yx(null, w, P, U, ne), P.attrs, ne), Fe = null);else {
          const ot = P.directiveStylingLast;
          if (-1 === ot || w[ot] !== he) if (U = Yx(he, w, P, U, ne), null === Fe) {
            let qt = function Zx(w, P, U) {
              const ne = U ? P.classBindings : P.styleBindings;
              if (0 !== Jd(ne)) return w[Lu(ne)];
            }(w, P, ne);
            void 0 !== qt && Array.isArray(qt) && (qt = Yx(null, w, P, qt[1], ne), qt = nC(qt, P.attrs, ne), function sD(w, P, U, ne) {
              w[Lu(U ? P.classBindings : P.styleBindings)] = ne;
            }(w, P, ne, qt));
          } else Fe = function aD(w, P, U) {
            let ne;
            const he = P.directiveEnd;
            for (let Fe = 1 + P.directiveStylingLast; Fe < he; Fe++) ne = nC(ne, w[Fe].hostAttrs, U);
            return nC(ne, P.attrs, U);
          }(w, P, ne);
        }
        return void 0 !== Fe && (ne ? P.residualClasses = Fe : P.residualStyles = Fe), U;
      }(he, Fe, P, ne), function Cw(w, P, U, ne, he, Fe) {
        let ot = Fe ? P.classBindings : P.styleBindings,
          Nt = Lu(ot),
          qt = Jd(ot);
        w[ne] = U;
        let Ni,
          $n = !1;
        if (Array.isArray(U) ? (Ni = U[1], (null === Ni || Wo(U, Ni) > 0) && ($n = !0)) : Ni = U, he) {
          if (0 !== qt) {
            const lr = Lu(w[Nt + 1]);
            w[ne + 1] = Hd(lr, Nt), 0 !== lr && (w[lr + 1] = L_(w[lr + 1], ne)), w[Nt + 1] = function Hu(w, P) {
              return 131071 & w | P << 17;
            }(w[Nt + 1], ne);
          } else w[ne + 1] = Hd(Nt, 0), 0 !== Nt && (w[Nt + 1] = L_(w[Nt + 1], ne)), Nt = ne;
        } else w[ne + 1] = Hd(qt, 0), 0 === Nt ? Nt = ne : w[qt + 1] = L_(w[qt + 1], ne), qt = ne;
        $n && (w[ne + 1] = nh(w[ne + 1])), Ux(w, Ni, ne, !0), Ux(w, Ni, ne, !1), function yw(w, P, U, ne, he) {
          const Fe = he ? w.residualClasses : w.residualStyles;
          null != Fe && "string" == typeof P && Wo(Fe, P) >= 0 && (U[ne + 1] = qv(U[ne + 1]));
        }(P, Ni, w, ne, Fe), ot = Hd(Nt, qt), Fe ? P.classBindings = ot : P.styleBindings = ot;
      }(he, Fe, P, U, ot, ne);
    }
  }
  function Yx(w, P, U, ne, he) {
    let Fe = null;
    const ot = U.directiveEnd;
    let Nt = U.directiveStylingLast;
    for (-1 === Nt ? Nt = U.directiveStart : Nt++; Nt < ot && (Fe = P[Nt], ne = nC(ne, Fe.hostAttrs, he), Fe !== w);) Nt++;
    return null !== w && (U.directiveStylingLast = Nt), ne;
  }
  function nC(w, P, U) {
    const ne = U ? 1 : 2;
    let he = -1;
    if (null !== P) for (let Fe = 0; Fe < P.length; Fe++) {
      const ot = P[Fe];
      "number" == typeof ot ? he = ot : he === ne && (Array.isArray(w) || (w = void 0 === w ? [] : ["", w]), Ui(w, ot, !!U || P[++Fe]));
    }
    return void 0 === w ? null : w;
  }
  function Wx(w, P, U) {
    Ui(w, P, gl(U));
  }
  function zx(w, P, U, ne, he, Fe, ot, Nt) {
    if (!(3 & P.type)) return;
    const qt = w.data,
      $n = qt[Nt + 1],
      Ni = function vw(w) {
        return 1 == (1 & w);
      }($n) ? Gx(qt, P, U, he, Jd($n), ot) : void 0;
    n1(Ni) || (n1(Fe) || function Sp(w) {
      return 2 == (2 & w);
    }($n) && (Fe = Gx(qt, null, U, he, Nt, ot)), function Yf(w, P, U, ne, he) {
      if (P) he ? w.addClass(U, ne) : w.removeClass(U, ne);else {
        let Fe = -1 === ne.indexOf("-") ? void 0 : Zl.DashCase;
        null == he ? w.removeStyle(U, ne, Fe) : ("string" == typeof he && he.endsWith("!important") && (he = he.slice(0, -10), Fe |= Zl.Important), w.setStyle(U, ne, he, Fe));
      }
    }(ne, ot, Ka(va(), U), he, Fe));
  }
  function Gx(w, P, U, ne, he, Fe) {
    const ot = null === P;
    let Nt;
    for (; he > 0;) {
      const qt = w[he],
        $n = Array.isArray(qt),
        Ni = $n ? qt[1] : qt,
        go = null === Ni;
      let lr = U[he + 1];
      lr === Lt && (lr = go ? Yo : void 0);
      let Ir = go ? eo(lr, ne) : Ni === ne ? lr : void 0;
      if ($n && !n1(Ir) && (Ir = eo(qt, ne)), n1(Ir) && (Nt = Ir, ot)) return Nt;
      const ss = w[he + 1];
      he = ot ? Lu(ss) : Jd(ss);
    }
    if (null !== P) {
      let qt = Fe ? P.residualClasses : P.residualStyles;
      null != qt && (Nt = eo(qt, ne));
    }
    return Nt;
  }
  function n1(w) {
    return void 0 !== w;
  }
  function s4(w, P) {
    return 0 != (w.flags & (P ? 8 : 16));
  }
  function $x(w, P = "") {
    const U = Zt(),
      ne = Li(),
      he = w + dn,
      Fe = ne.firstCreatePass ? Mf(ne, he, 1, P, null) : ne.data[he],
      ot = U[he] = function qu(w, P) {
        return w.createText(P);
      }(U[rs], P);
    Eh(ne, U, ot, Fe), Hs(Fe, !1);
  }
  function a4(w) {
    return l4("", w, ""), a4;
  }
  function l4(w, P, U) {
    const ne = Zt(),
      he = Wr(ne, w, P, U);
    return he !== Lt && bd(ne, va(), he), l4;
  }
  function c4(w, P, U, ne, he) {
    const Fe = Zt(),
      ot = function Cs(w, P, U, ne, he, Fe) {
        const Nt = Tt(w, oa(), U, he);
        return Il(2), Nt ? P + u(U) + ne + u(he) + Fe : Lt;
      }(Fe, w, P, U, ne, he);
    return ot !== Lt && bd(Fe, va(), ot), c4;
  }
  function iC(w, P, U, ne, he, Fe, ot) {
    const Nt = Zt(),
      qt = function ia(w, P, U, ne, he, Fe, ot, Nt) {
        const $n = ai(w, oa(), U, he, ot);
        return Il(3), $n ? P + u(U) + ne + u(he) + Fe + u(ot) + Nt : Lt;
      }(Nt, w, P, U, ne, he, Fe, ot);
    return qt !== Lt && bd(Nt, va(), qt), iC;
  }
  function u4(w, P, U, ne, he, Fe, ot, Nt, qt) {
    const $n = Zt(),
      Ni = function Ls(w, P, U, ne, he, Fe, ot, Nt, qt, $n) {
        const go = Zi(w, oa(), U, he, ot, qt);
        return Il(4), go ? P + u(U) + ne + u(he) + Fe + u(ot) + Nt + u(qt) + $n : Lt;
      }($n, w, P, U, ne, he, Fe, ot, Nt, qt);
    return Ni !== Lt && bd($n, va(), Ni), u4;
  }
  function Ip(w, P, U) {
    Hf(Ui, mm, Wr(Zt(), w, P, U), !0);
  }
  function m4(w, P, U) {
    const ne = Zt();
    return Ye(ne, Qr(), P) && Fd(Li(), zs(), ne, w, P, ne[rs], U, !0), m4;
  }
  function o1(w, P, U) {
    const ne = Zt();
    if (Ye(ne, Qr(), P)) {
      const Fe = Li(),
        ot = zs();
      Fd(Fe, ot, ne, w, P, Sf(Yc(Fe.data), ot, ne), U, !0);
    }
    return o1;
  }
  const qg = void 0;
  var Yw = ["en", [["a", "p"], ["AM", "PM"], qg], [["AM", "PM"], qg, qg], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], qg, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], qg, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", qg, "{1} 'at' {0}", qg], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function uD(w) {
    const U = Math.floor(Math.abs(w)),
      ne = w.toString().replace(/^[^.]*\.?/, "").length;
    return 1 === U && 0 === ne ? 1 : 5;
  }];
  let N_ = {};
  function dD(w, P, U) {
    "string" != typeof P && (U = P, P = w[vl.LocaleId]), P = P.toLowerCase().replace(/_/g, "-"), N_[P] = w, U && (N_[P][vl.ExtraData] = U);
  }
  function g4(w) {
    const P = function hD(w) {
      return w.toLowerCase().replace(/_/g, "-");
    }(w);
    let U = _4(P);
    if (U) return U;
    const ne = P.split("-")[0];
    if (U = _4(ne), U) return U;
    if ("en" === ne) return Yw;
    throw new h(701, !1);
  }
  function rC(w) {
    return g4(w)[vl.PluralCase];
  }
  function _4(w) {
    return w in N_ || (N_[w] = Pi.ng && Pi.ng.common && Pi.ng.common.locales && Pi.ng.common.locales[w]), N_[w];
  }
  var vl = (() => ((vl = vl || {})[vl.LocaleId = 0] = "LocaleId", vl[vl.DayPeriodsFormat = 1] = "DayPeriodsFormat", vl[vl.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", vl[vl.DaysFormat = 3] = "DaysFormat", vl[vl.DaysStandalone = 4] = "DaysStandalone", vl[vl.MonthsFormat = 5] = "MonthsFormat", vl[vl.MonthsStandalone = 6] = "MonthsStandalone", vl[vl.Eras = 7] = "Eras", vl[vl.FirstDayOfWeek = 8] = "FirstDayOfWeek", vl[vl.WeekendRange = 9] = "WeekendRange", vl[vl.DateFormat = 10] = "DateFormat", vl[vl.TimeFormat = 11] = "TimeFormat", vl[vl.DateTimeFormat = 12] = "DateTimeFormat", vl[vl.NumberSymbols = 13] = "NumberSymbols", vl[vl.NumberFormats = 14] = "NumberFormats", vl[vl.CurrencyCode = 15] = "CurrencyCode", vl[vl.CurrencySymbol = 16] = "CurrencySymbol", vl[vl.CurrencyName = 17] = "CurrencyName", vl[vl.Currencies = 18] = "Currencies", vl[vl.Directionality = 19] = "Directionality", vl[vl.PluralCase = 20] = "PluralCase", vl[vl.ExtraData = 21] = "ExtraData", vl))();
  const H_ = "en-US";
  let v4 = H_;
  function E4(w, P, U, ne, he) {
    if (w = L(w), Array.isArray(w)) for (let Fe = 0; Fe < w.length; Fe++) E4(w[Fe], P, U, ne, he);else {
      const Fe = Li(),
        ot = Zt();
      let Nt = Tp(w) ? w : L(w.provide),
        qt = Im(w);
      const $n = Cr(),
        Ni = 1048575 & $n.providerIndexes,
        go = $n.directiveStart,
        lr = $n.providerIndexes >> 20;
      if (Tp(w) || !w.multi) {
        const Ir = new so(qt, he, wf),
          ss = Tb(Nt, P, he ? Ni : Ni + lr, go);
        -1 === ss ? (zl(Ja($n, ot), Fe, Nt), dC(Fe, w, P.length), P.push(Nt), $n.directiveStart++, $n.directiveEnd++, he && ($n.providerIndexes += 1048576), U.push(Ir), ot.push(Ir)) : (U[ss] = Ir, ot[ss] = Ir);
      } else {
        const Ir = Tb(Nt, P, Ni + lr, go),
          ss = Tb(Nt, P, Ni, Ni + lr),
          ga = ss >= 0 && U[ss];
        if (he && !ga || !he && !(Ir >= 0 && U[Ir])) {
          zl(Ja($n, ot), Fe, Nt);
          const Fa = function OM(w, P, U, ne, he) {
            const Fe = new so(w, U, wf);
            return Fe.multi = [], Fe.index = P, Fe.componentProviders = 0, Mb(Fe, he, ne && !U), Fe;
          }(he ? bD : xD, U.length, he, ne, qt);
          !he && ga && (U[ss].providerFactory = Fa), dC(Fe, w, P.length, 0), P.push(Nt), $n.directiveStart++, $n.directiveEnd++, he && ($n.providerIndexes += 1048576), U.push(Fa), ot.push(Fa);
        } else dC(Fe, w, Ir > -1 ? Ir : ss, Mb(U[he ? ss : Ir], qt, !he && ne));
        !he && ne && ga && U[ss].componentProviders++;
      }
    }
  }
  function dC(w, P, U, ne) {
    const he = Tp(P),
      Fe = function sg(w) {
        return !!w.useClass;
      }(P);
    if (he || Fe) {
      const qt = (Fe ? L(P.useClass) : P).prototype.ngOnDestroy;
      if (qt) {
        const $n = w.destroyHooks || (w.destroyHooks = []);
        if (!he && P.multi) {
          const Ni = $n.indexOf(U);
          -1 === Ni ? $n.push(U, [ne, qt]) : $n[Ni + 1].push(ne, qt);
        } else $n.push(U, qt);
      }
    }
  }
  function Mb(w, P, U) {
    return U && w.componentProviders++, w.multi.push(P) - 1;
  }
  function Tb(w, P, U, ne) {
    for (let he = U; he < ne; he++) if (P[he] === w) return he;
    return -1;
  }
  function xD(w, P, U, ne) {
    return Eb(this.multi, []);
  }
  function bD(w, P, U, ne) {
    const he = this.multi;
    let Fe;
    if (this.providerFactory) {
      const ot = this.providerFactory.componentProviders,
        Nt = Vl(U, U[oi], this.providerFactory.index, ne);
      Fe = Nt.slice(0, ot), Eb(he, Fe);
      for (let qt = ot; qt < Nt.length; qt++) Fe.push(Nt[qt]);
    } else Fe = [], Eb(he, Fe);
    return Fe;
  }
  function Eb(w, P) {
    for (let U = 0; U < w.length; U++) P.push((0, w[U])());
    return P;
  }
  function Db(w, P = []) {
    return U => {
      U.providersResolver = (ne, he) => function wb(w, P, U) {
        const ne = Li();
        if (ne.firstCreatePass) {
          const he = na(w);
          E4(U, ne.data, ne.blueprint, he, !0), E4(P, ne.data, ne.blueprint, he, !1);
        }
      }(ne, he ? he(w) : w, P);
    };
  }
  class u1 {}
  class Pb {}
  function AM(w, P) {
    return new D4(w, P ?? null);
  }
  class D4 extends u1 {
    constructor(P, U) {
      super(), this._parent = U, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new yh(this);
      const ne = Ps(P);
      this._bootstrapComponents = Sd(ne.bootstrap), this._r3Injector = Ys(P, U, [{
        provide: u1,
        useValue: this
      }, {
        provide: Rh,
        useValue: this.componentFactoryResolver
      }], A(P), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(P);
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      const P = this._r3Injector;
      !P.destroyed && P.destroy(), this.destroyCbs.forEach(U => U()), this.destroyCbs = null;
    }
    onDestroy(P) {
      this.destroyCbs.push(P);
    }
  }
  class d1 extends Pb {
    constructor(P) {
      super(), this.moduleType = P;
    }
    create(P) {
      return new D4(this.moduleType, P);
    }
  }
  class SM extends u1 {
    constructor(P, U, ne) {
      super(), this.componentFactoryResolver = new yh(this), this.instance = null;
      const he = new rp([...P, {
        provide: u1,
        useValue: this
      }, {
        provide: Rh,
        useValue: this.componentFactoryResolver
      }], U || $p(), ne, new Set(["environment"]));
      this.injector = he, he.resolveInjectorInitializers();
    }
    destroy() {
      this.injector.destroy();
    }
    onDestroy(P) {
      this.injector.onDestroy(P);
    }
  }
  function Ob(w, P, U = null) {
    return new SM(w, P, U).injector;
  }
  let IM = (() => {
    class w {
      constructor(U) {
        this._injector = U, this.cachedInjectors = new Map();
      }
      getOrCreateStandaloneInjector(U) {
        if (!U.standalone) return null;
        if (!this.cachedInjectors.has(U.id)) {
          const ne = Mp(0, U.type),
            he = ne.length > 0 ? Ob([ne], this._injector, `Standalone[${U.type.name}]`) : null;
          this.cachedInjectors.set(U.id, he);
        }
        return this.cachedInjectors.get(U.id);
      }
      ngOnDestroy() {
        try {
          for (const U of this.cachedInjectors.values()) null !== U && U.destroy();
        } finally {
          this.cachedInjectors.clear();
        }
      }
    }
    return w.ɵprov = We({
      token: w,
      providedIn: "environment",
      factory: () => new w($t(Au))
    }), w;
  })();
  function Ab(w) {
    w.getStandaloneInjector = P => P.get(IM).getOrCreateStandaloneInjector(w);
  }
  function kM(w) {
    if (w instanceof Text) return [];
    const P = Bt(w),
      U = P ? P.lView : null;
    if (null === U) return [];
    const he = P.nodeIndex;
    return U[oi]?.data[he] ? (void 0 === P.directives && (P.directives = Ic(he, U)), null === P.directives ? [] : [...P.directives]) : [];
  }
  function pC(w, P, U) {
    const ne = Nr() + w,
      he = Zt();
    return he[ne] === Lt ? k(he, ne, U ? P.call(U) : P()) : ce(he, ne);
  }
  function O4(w, P, U, ne) {
    return I4(Zt(), Nr(), w, P, U, ne);
  }
  function Nb(w, P, U, ne, he) {
    return L4(Zt(), Nr(), w, P, U, ne, he);
  }
  function Ub(w, P, U, ne, he, Fe) {
    return hC(Zt(), Nr(), w, P, U, ne, he, Fe);
  }
  function A4(w, P, U, ne, he, Fe, ot) {
    return n_(Zt(), Nr(), w, P, U, ne, he, Fe, ot);
  }
  function Hb(w, P, U, ne, he, Fe, ot, Nt, qt) {
    const $n = Nr() + w,
      Ni = Zt(),
      go = Zi(Ni, $n, U, ne, he, Fe);
    return Tt(Ni, $n + 4, ot, Nt) || go ? k(Ni, $n + 6, qt ? P.call(qt, U, ne, he, Fe, ot, Nt) : P(U, ne, he, Fe, ot, Nt)) : ce(Ni, $n + 6);
  }
  function Cg(w, P) {
    const U = w[P];
    return U === Lt ? void 0 : U;
  }
  function I4(w, P, U, ne, he, Fe) {
    const ot = P + U;
    return Ye(w, ot, he) ? k(w, ot + 1, Fe ? ne.call(Fe, he) : ne(he)) : Cg(w, ot + 1);
  }
  function L4(w, P, U, ne, he, Fe, ot) {
    const Nt = P + U;
    return Tt(w, Nt, he, Fe) ? k(w, Nt + 2, ot ? ne.call(ot, he, Fe) : ne(he, Fe)) : Cg(w, Nt + 2);
  }
  function hC(w, P, U, ne, he, Fe, ot, Nt) {
    const qt = P + U;
    return ai(w, qt, he, Fe, ot) ? k(w, qt + 3, Nt ? ne.call(Nt, he, Fe, ot) : ne(he, Fe, ot)) : Cg(w, qt + 3);
  }
  function n_(w, P, U, ne, he, Fe, ot, Nt, qt) {
    const $n = P + U;
    return Zi(w, $n, he, Fe, ot, Nt) ? k(w, $n + 4, qt ? ne.call(qt, he, Fe, ot, Nt) : ne(he, Fe, ot, Nt)) : Cg(w, $n + 4);
  }
  function Zb(w, P) {
    const U = Li();
    let ne;
    const he = w + dn;
    U.firstCreatePass ? (ne = function Yb(w, P) {
      if (P) for (let U = P.length - 1; U >= 0; U--) {
        const ne = P[U];
        if (w === ne.name) return ne;
      }
    }(P, U.pipeRegistry), U.data[he] = ne, ne.onDestroy && (U.destroyHooks || (U.destroyHooks = [])).push(he, ne.onDestroy)) : ne = U.data[he];
    const Fe = ne.factory || (ne.factory = Ko(ne.type)),
      ot = Je(wf);
    try {
      const Nt = Bl(!1),
        qt = Fe();
      return Bl(Nt), function up(w, P, U, ne) {
        U >= w.data.length && (w.data[U] = null, w.blueprint[U] = null), P[U] = ne;
      }(U, Zt(), he, qt), qt;
    } finally {
      Je(ot);
    }
  }
  function Wb(w, P, U) {
    const ne = w + dn,
      he = Zt(),
      Fe = en(he, ne);
    return h1(he, ne) ? I4(he, Nr(), P, Fe.transform, U, Fe) : Fe.transform(U);
  }
  function zb(w, P, U, ne) {
    const he = w + dn,
      Fe = Zt(),
      ot = en(Fe, he);
    return h1(Fe, he) ? L4(Fe, Nr(), P, ot.transform, U, ne, ot) : ot.transform(U, ne);
  }
  function j_(w, P, U, ne, he) {
    const Fe = w + dn,
      ot = Zt(),
      Nt = en(ot, Fe);
    return h1(ot, Fe) ? hC(ot, Nr(), P, Nt.transform, U, ne, he, Nt) : Nt.transform(U, ne, he);
  }
  function Gb(w, P, U, ne, he, Fe) {
    const ot = w + dn,
      Nt = Zt(),
      qt = en(Nt, ot);
    return h1(Nt, ot) ? n_(Nt, Nr(), P, qt.transform, U, ne, he, Fe, qt) : qt.transform(U, ne, he, Fe);
  }
  function h1(w, P) {
    return w[oi].data[P].pure;
  }
  function fC(w) {
    return P => {
      setTimeout(w, void 0, P);
    };
  }
  const Bf = class BM extends t.x {
    constructor(P = !1) {
      super(), this.__isAsync = P;
    }
    emit(P) {
      super.next(P);
    }
    subscribe(P, U, ne) {
      let he = P,
        Fe = U || (() => null),
        ot = ne;
      if (P && "object" == typeof P) {
        const qt = P;
        he = qt.next?.bind(qt), Fe = qt.error?.bind(qt), ot = qt.complete?.bind(qt);
      }
      this.__isAsync && (Fe = fC(Fe), he && (he = fC(he)), ot && (ot = fC(ot)));
      const Nt = super.subscribe({
        next: he,
        error: Fe,
        complete: ot
      });
      return P instanceof e.w0 && P.add(Nt), Nt;
    }
  };
  function $b() {
    return this._results[Symbol.iterator]();
  }
  class mC {
    get changes() {
      return this._changes || (this._changes = new Bf());
    }
    constructor(P = !1) {
      this._emitDistinctChangesOnly = P, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
      const U = mC.prototype;
      U[Symbol.iterator] || (U[Symbol.iterator] = $b);
    }
    get(P) {
      return this._results[P];
    }
    map(P) {
      return this._results.map(P);
    }
    filter(P) {
      return this._results.filter(P);
    }
    find(P) {
      return this._results.find(P);
    }
    reduce(P, U) {
      return this._results.reduce(P, U);
    }
    forEach(P) {
      this._results.forEach(P);
    }
    some(P) {
      return this._results.some(P);
    }
    toArray() {
      return this._results.slice();
    }
    toString() {
      return this._results.toString();
    }
    reset(P, U) {
      const ne = this;
      ne.dirty = !1;
      const he = function Q(w) {
        return w.flat(Number.POSITIVE_INFINITY);
      }(P);
      (this._changesDetected = !function Qe(w, P, U) {
        if (w.length !== P.length) return !1;
        for (let ne = 0; ne < w.length; ne++) {
          let he = w[ne],
            Fe = P[ne];
          if (U && (he = U(he), Fe = U(Fe)), Fe !== he) return !1;
        }
        return !0;
      }(ne._results, he, U)) && (ne._results = he, ne.length = he.length, ne.last = he[this.length - 1], ne.first = he[0]);
    }
    notifyOnChanges() {
      this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
    }
    setDirty() {
      this.dirty = !0;
    }
    destroy() {
      this.changes.complete(), this.changes.unsubscribe();
    }
  }
  let f1 = (() => {
    class w {}
    return w.__NG_ELEMENT_ID__ = Kb, w;
  })();
  const R4 = f1,
    VM = class extends R4 {
      constructor(P, U, ne) {
        super(), this._declarationLView = P, this._declarationTContainer = U, this.elementRef = ne;
      }
      createEmbeddedView(P, U) {
        const ne = this._declarationTContainer.tViews,
          he = Um(this._declarationLView, ne, P, 16, null, ne.declTNode, null, null, null, null, U || null);
        he[jt] = this._declarationLView[this._declarationTContainer.index];
        const ot = this._declarationLView[tn];
        return null !== ot && (he[tn] = ot.createEmbeddedView(ne)), zg(ne, he, P), new pd(he);
      }
    };
  function Kb() {
    return gC(Cr(), Zt());
  }
  function gC(w, P) {
    return 4 & w.type ? new VM(P, w, _f(w, P)) : null;
  }
  let _C = (() => {
    class w {}
    return w.__NG_ELEMENT_ID__ = Jb, w;
  })();
  function Jb() {
    return jM(Cr(), Zt());
  }
  const Qb = _C,
    Xb = class extends Qb {
      constructor(P, U, ne) {
        super(), this._lContainer = P, this._hostTNode = U, this._hostLView = ne;
      }
      get element() {
        return _f(this._hostTNode, this._hostLView);
      }
      get injector() {
        return new Al(this._hostTNode, this._hostLView);
      }
      get parentInjector() {
        const P = tc(this._hostTNode, this._hostLView);
        if (oc(P)) {
          const U = Mc(P, this._hostLView),
            ne = pc(P);
          return new Al(U[oi].data[ne + 8], U);
        }
        return new Al(null, this._hostLView);
      }
      clear() {
        for (; this.length > 0;) this.remove(this.length - 1);
      }
      get(P) {
        const U = qb(this._lContainer);
        return null !== U && U[P] || null;
      }
      get length() {
        return this._lContainer.length - ws;
      }
      createEmbeddedView(P, U, ne) {
        let he, Fe;
        "number" == typeof ne ? he = ne : null != ne && (he = ne.index, Fe = ne.injector);
        const ot = P.createEmbeddedView(U || {}, Fe);
        return this.insert(ot, he), ot;
      }
      createComponent(P, U, ne, he, Fe) {
        const ot = P && !function Ne(w) {
          return "function" == typeof w;
        }(P);
        let Nt;
        if (ot) Nt = U;else {
          const go = U || {};
          Nt = go.index, ne = go.injector, he = go.projectableNodes, Fe = go.environmentInjector || go.ngModuleRef;
        }
        const qt = ot ? P : new eh(Ji(P)),
          $n = ne || this.parentInjector;
        if (!Fe && null == qt.ngModule) {
          const lr = (ot ? $n : this.parentInjector).get(Au, null);
          lr && (Fe = lr);
        }
        const Ni = qt.create($n, he, void 0, Fe);
        return this.insert(Ni.hostView, Nt), Ni;
      }
      insert(P, U) {
        const ne = P._lView,
          he = ne[oi];
        if (function jr(w) {
          return sa(w[Qi]);
        }(ne)) {
          const Ni = this.indexOf(P);
          if (-1 !== Ni) this.detach(Ni);else {
            const go = ne[Qi],
              lr = new Xb(go, go[_s], go[Qi]);
            lr.detach(lr.indexOf(P));
          }
        }
        const Fe = this._adjustIndex(U),
          ot = this._lContainer;
        !function jd(w, P, U, ne) {
          const he = ws + ne,
            Fe = U.length;
          ne > 0 && (U[he - 1][Qo] = P), ne < Fe - ws ? (P[Qo] = U[he], re(U, ws + ne, P)) : (U.push(P), P[Qo] = null), P[Qi] = U;
          const ot = P[jt];
          null !== ot && U !== ot && function Pu(w, P) {
            const U = w[js];
            P[Yt] !== P[Qi][Qi][Yt] && (w[_r] = !0), null === U ? w[js] = [P] : U.push(P);
          }(ot, P);
          const Nt = P[tn];
          null !== Nt && Nt.insertView(w), P[yo] |= 64;
        }(he, ne, ot, Fe);
        const Nt = Dh(Fe, ot),
          qt = ne[rs],
          $n = lh(qt, ot[qr]);
        return null !== $n && function ad(w, P, U, ne, he, Fe) {
          ne[hs] = he, ne[_s] = P, Sl(w, ne, U, 1, he, Fe);
        }(he, ot[_s], qt, ne, $n, Nt), P.attachToViewContainerRef(), re(vC(ot), Fe, P), P;
      }
      move(P, U) {
        return this.insert(P, U);
      }
      indexOf(P) {
        const U = qb(this._lContainer);
        return null !== U ? U.indexOf(P) : -1;
      }
      remove(P) {
        const U = this._adjustIndex(P, -1),
          ne = vu(this._lContainer, U);
        ne && (Ce(vC(this._lContainer), U), Zd(ne[oi], ne));
      }
      detach(P) {
        const U = this._adjustIndex(P, -1),
          ne = vu(this._lContainer, U);
        return ne && null != Ce(vC(this._lContainer), U) ? new pd(ne) : null;
      }
      _adjustIndex(P, U = 0) {
        return P ?? this.length + U;
      }
    };
  function qb(w) {
    return w[Ts];
  }
  function vC(w) {
    return w[Ts] || (w[Ts] = []);
  }
  function jM(w, P) {
    let U;
    const ne = P[w.index];
    if (sa(ne)) U = ne;else {
      let he;
      if (8 & w.type) he = ks(ne);else {
        const Fe = P[rs];
        he = Fe.createComment("");
        const ot = ja(w, P);
        Cd(Fe, lh(Fe, ot), he, function Wd(w, P) {
          return w.nextSibling(P);
        }(Fe, ot), !1);
      }
      P[w.index] = U = Pf(ne, P, he, w), jc(P, U);
    }
    return new Xb(U, w, P);
  }
  class F4 {
    constructor(P) {
      this.queryList = P, this.matches = null;
    }
    clone() {
      return new F4(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  }
  class CC {
    constructor(P = []) {
      this.queries = P;
    }
    createEmbeddedView(P) {
      const U = P.queries;
      if (null !== U) {
        const ne = null !== P.contentQueries ? P.contentQueries[0] : U.length,
          he = [];
        for (let Fe = 0; Fe < ne; Fe++) {
          const ot = U.getByIndex(Fe);
          he.push(this.queries[ot.indexInDeclarationView].clone());
        }
        return new CC(he);
      }
      return null;
    }
    insertView(P) {
      this.dirtyQueriesWithMatches(P);
    }
    detachView(P) {
      this.dirtyQueriesWithMatches(P);
    }
    dirtyQueriesWithMatches(P) {
      for (let U = 0; U < this.queries.length; U++) null !== a2(P, U).matches && this.queries[U].setDirty();
    }
  }
  class ZM {
    constructor(P, U, ne = null) {
      this.predicate = P, this.flags = U, this.read = ne;
    }
  }
  class N4 {
    constructor(P = []) {
      this.queries = P;
    }
    elementStart(P, U) {
      for (let ne = 0; ne < this.queries.length; ne++) this.queries[ne].elementStart(P, U);
    }
    elementEnd(P) {
      for (let U = 0; U < this.queries.length; U++) this.queries[U].elementEnd(P);
    }
    embeddedTView(P) {
      let U = null;
      for (let ne = 0; ne < this.length; ne++) {
        const he = null !== U ? U.length : 0,
          Fe = this.getByIndex(ne).embeddedTView(P, he);
        Fe && (Fe.indexInDeclarationView = ne, null !== U ? U.push(Fe) : U = [Fe]);
      }
      return null !== U ? new N4(U) : null;
    }
    template(P, U) {
      for (let ne = 0; ne < this.queries.length; ne++) this.queries[ne].template(P, U);
    }
    getByIndex(P) {
      return this.queries[P];
    }
    get length() {
      return this.queries.length;
    }
    track(P) {
      this.queries.push(P);
    }
  }
  class U4 {
    constructor(P, U = -1) {
      this.metadata = P, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = U;
    }
    elementStart(P, U) {
      this.isApplyingToNode(U) && this.matchTNode(P, U);
    }
    elementEnd(P) {
      this._declarationNodeIndex === P.index && (this._appliesToNextNode = !1);
    }
    template(P, U) {
      this.elementStart(P, U);
    }
    embeddedTView(P, U) {
      return this.isApplyingToNode(P) ? (this.crossesNgTemplate = !0, this.addMatch(-P.index, U), new U4(this.metadata)) : null;
    }
    isApplyingToNode(P) {
      if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
        const U = this._declarationNodeIndex;
        let ne = P.parent;
        for (; null !== ne && 8 & ne.type && ne.index !== U;) ne = ne.parent;
        return U === (null !== ne ? ne.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(P, U) {
      const ne = this.metadata.predicate;
      if (Array.isArray(ne)) for (let he = 0; he < ne.length; he++) {
        const Fe = ne[he];
        this.matchTNodeWithReadOption(P, U, YM(U, Fe)), this.matchTNodeWithReadOption(P, U, Ml(U, P, Fe, !1, !1));
      } else ne === f1 ? 4 & U.type && this.matchTNodeWithReadOption(P, U, -1) : this.matchTNodeWithReadOption(P, U, Ml(U, P, ne, !1, !1));
    }
    matchTNodeWithReadOption(P, U, ne) {
      if (null !== ne) {
        const he = this.metadata.read;
        if (null !== he) {
          if (he === Jf || he === _C || he === f1 && 4 & U.type) this.addMatch(U.index, -2);else {
            const Fe = Ml(U, P, he, !1, !1);
            null !== Fe && this.addMatch(U.index, Fe);
          }
        } else this.addMatch(U.index, ne);
      }
    }
    addMatch(P, U) {
      null === this.matches ? this.matches = [P, U] : this.matches.push(P, U);
    }
  }
  function YM(w, P) {
    const U = w.localNames;
    if (null !== U) for (let ne = 0; ne < U.length; ne += 2) if (U[ne] === P) return U[ne + 1];
    return null;
  }
  function H4(w, P, U, ne) {
    return -1 === U ? function Lp(w, P) {
      return 11 & w.type ? _f(w, P) : 4 & w.type ? gC(w, P) : null;
    }(P, w) : -2 === U ? function Xl(w, P, U) {
      return U === Jf ? _f(P, w) : U === f1 ? gC(P, w) : U === _C ? jM(P, w) : void 0;
    }(w, P, ne) : Vl(w, w[oi], U, P);
  }
  function Oa(w, P, U, ne) {
    const he = P[tn].queries[ne];
    if (null === he.matches) {
      const Fe = w.data,
        ot = U.matches,
        Nt = [];
      for (let qt = 0; qt < ot.length; qt += 2) {
        const $n = ot[qt];
        Nt.push($n < 0 ? null : H4(P, Fe[$n], ot[qt + 1], U.metadata.read));
      }
      he.matches = Nt;
    }
    return he.matches;
  }
  function B4(w, P, U, ne) {
    const he = w.queries.getByIndex(U),
      Fe = he.matches;
    if (null !== Fe) {
      const ot = Oa(w, P, he, U);
      for (let Nt = 0; Nt < Fe.length; Nt += 2) {
        const qt = Fe[Nt];
        if (qt > 0) ne.push(ot[Nt / 2]);else {
          const $n = Fe[Nt + 1],
            Ni = P[-qt];
          for (let go = ws; go < Ni.length; go++) {
            const lr = Ni[go];
            lr[jt] === lr[Qi] && B4(lr[oi], lr, $n, ne);
          }
          if (null !== Ni[js]) {
            const go = Ni[js];
            for (let lr = 0; lr < go.length; lr++) {
              const Ir = go[lr];
              B4(Ir[oi], Ir, $n, ne);
            }
          }
        }
      }
    }
    return ne;
  }
  function e2(w) {
    const P = Zt(),
      U = Li(),
      ne = nu();
    kl(ne + 1);
    const he = a2(U, ne);
    if (w.dirty && function ro(w) {
      return 4 == (4 & w[yo]);
    }(P) === (2 == (2 & he.metadata.flags))) {
      if (null === he.matches) w.reset([]);else {
        const Fe = he.crossesNgTemplate ? B4(U, P, ne, []) : Oa(U, P, he, ne);
        w.reset(Fe, Fg), w.notifyOnChanges();
      }
      return !0;
    }
    return !1;
  }
  function t2(w, P, U) {
    const ne = Li();
    ne.firstCreatePass && (s2(ne, new ZM(w, P, U), -1), 2 == (2 & P) && (ne.staticViewQueries = !0)), r2(ne, Zt(), P);
  }
  function n2(w, P, U, ne) {
    const he = Li();
    if (he.firstCreatePass) {
      const Fe = Cr();
      s2(he, new ZM(P, U, ne), Fe.index), function zM(w, P) {
        const U = w.contentQueries || (w.contentQueries = []);
        P !== (U.length ? U[U.length - 1] : -1) && U.push(w.queries.length - 1, P);
      }(he, w), 2 == (2 & U) && (he.staticContentQueries = !0);
    }
    r2(he, Zt(), U);
  }
  function o2() {
    return function WM(w, P) {
      return w[tn].queries[P].queryList;
    }(Zt(), nu());
  }
  function r2(w, P, U) {
    const ne = new mC(4 == (4 & U));
    fg(w, P, ne, ne.destroy), null === P[tn] && (P[tn] = new CC()), P[tn].queries.push(new F4(ne));
  }
  function s2(w, P, U) {
    null === w.queries && (w.queries = new N4()), w.queries.track(new U4(P, U));
  }
  function a2(w, P) {
    return w.queries.getByIndex(P);
  }
  function m1(w, P) {
    return gC(w, P);
  }
  function Du(w) {
    return !!Ps(w);
  }
  const XM = Tn("Input", w => ({
    bindingPropertyName: w
  }));
  function wC(...w) {}
  const m2 = new Vi("Application Initializer");
  let wg = (() => {
    class w {
      constructor(U) {
        this.appInits = U, this.resolve = wC, this.reject = wC, this.initialized = !1, this.done = !1, this.donePromise = new Promise((ne, he) => {
          this.resolve = ne, this.reject = he;
        });
      }
      runInitializers() {
        if (this.initialized) return;
        const U = [],
          ne = () => {
            this.done = !0, this.resolve();
          };
        if (this.appInits) for (let he = 0; he < this.appInits.length; he++) {
          const Fe = this.appInits[he]();
          if (Qv(Fe)) U.push(Fe);else if (t4(Fe)) {
            const ot = new Promise((Nt, qt) => {
              Fe.subscribe({
                complete: Nt,
                error: qt
              });
            });
            U.push(ot);
          }
        }
        Promise.all(U).then(() => {
          ne();
        }).catch(he => {
          this.reject(he);
        }), 0 === U.length && ne(), this.initialized = !0;
      }
    }
    return w.ɵfac = function (U) {
      return new (U || w)($t(m2, 8));
    }, w.ɵprov = We({
      token: w,
      factory: w.ɵfac,
      providedIn: "root"
    }), w;
  })();
  const tf = new Vi("AppId", {
    providedIn: "root",
    factory: function xm() {
      return `${Z_()}${Z_()}${Z_()}`;
    }
  });
  function Z_() {
    return String.fromCharCode(97 + Math.floor(25 * Math.random()));
  }
  const g2 = new Vi("Platform Initializer"),
    nf = new Vi("Platform ID", {
      providedIn: "platform",
      factory: () => "unknown"
    }),
    C1 = new Vi("appBootstrapListener"),
    Jm = new Vi("AnimationModuleType");
  let Qm = (() => {
    class w {
      log(U) {
        console.log(U);
      }
      warn(U) {
        console.warn(U);
      }
    }
    return w.ɵfac = function (U) {
      return new (U || w)();
    }, w.ɵprov = We({
      token: w,
      factory: w.ɵfac,
      providedIn: "platform"
    }), w;
  })();
  const Qu = new Vi("LocaleId", {
      providedIn: "root",
      factory: () => Qn(Qu, Ee.Optional | Ee.SkipSelf) || function Xm() {
        return typeof $localize < "u" && $localize.locale || H_;
      }()
    }),
    Oc = new Vi("DefaultCurrencyCode", {
      providedIn: "root",
      factory: () => "USD"
    });
  class X4 {
    constructor(P, U) {
      this.ngModuleFactory = P, this.componentFactories = U;
    }
  }
  let q4 = (() => {
    class w {
      compileModuleSync(U) {
        return new d1(U);
      }
      compileModuleAsync(U) {
        return Promise.resolve(this.compileModuleSync(U));
      }
      compileModuleAndAllComponentsSync(U) {
        const ne = this.compileModuleSync(U),
          Fe = Sd(Ps(U).declarations).reduce((ot, Nt) => {
            const qt = Ji(Nt);
            return qt && ot.push(new eh(qt)), ot;
          }, []);
        return new X4(ne, Fe);
      }
      compileModuleAndAllComponentsAsync(U) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(U));
      }
      clearCache() {}
      clearCacheFor(U) {}
      getModuleId(U) {}
    }
    return w.ɵfac = function (U) {
      return new (U || w)();
    }, w.ɵprov = We({
      token: w,
      factory: w.ɵfac,
      providedIn: "root"
    }), w;
  })();
  const n3 = (() => Promise.resolve(0))();
  function tx(w) {
    typeof Zone > "u" ? n3.then(() => {
      w && w.apply(null, null);
    }) : Zone.current.scheduleMicroTask("scheduleMicrotask", w);
  }
  class rf {
    constructor({
      enableLongStackTrace: P = !1,
      shouldCoalesceEventChangeDetection: U = !1,
      shouldCoalesceRunChangeDetection: ne = !1
    }) {
      if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Bf(!1), this.onMicrotaskEmpty = new Bf(!1), this.onStable = new Bf(!1), this.onError = new Bf(!1), typeof Zone > "u") throw new h(908, !1);
      Zone.assertZonePatched();
      const he = this;
      he._nesting = 0, he._outer = he._inner = Zone.current, Zone.TaskTrackingZoneSpec && (he._inner = he._inner.fork(new Zone.TaskTrackingZoneSpec())), P && Zone.longStackTraceZoneSpec && (he._inner = he._inner.fork(Zone.longStackTraceZoneSpec)), he.shouldCoalesceEventChangeDetection = !ne && U, he.shouldCoalesceRunChangeDetection = ne, he.lastRequestAnimationFrameId = -1, he.nativeRequestAnimationFrame = function o3() {
        let w = Pi.requestAnimationFrame,
          P = Pi.cancelAnimationFrame;
        if (typeof Zone < "u" && w && P) {
          const U = w[Zone.__symbol__("OriginalDelegate")];
          U && (w = U);
          const ne = P[Zone.__symbol__("OriginalDelegate")];
          ne && (P = ne);
        }
        return {
          nativeRequestAnimationFrame: w,
          nativeCancelAnimationFrame: P
        };
      }().nativeRequestAnimationFrame, function a3(w) {
        const P = () => {
          !function s3(w) {
            w.isCheckStableRunning || -1 !== w.lastRequestAnimationFrameId || (w.lastRequestAnimationFrameId = w.nativeRequestAnimationFrame.call(Pi, () => {
              w.fakeTopEventTask || (w.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                w.lastRequestAnimationFrameId = -1, ix(w), w.isCheckStableRunning = !0, nx(w), w.isCheckStableRunning = !1;
              }, void 0, () => {}, () => {})), w.fakeTopEventTask.invoke();
            }), ix(w));
          }(w);
        };
        w._inner = w._inner.fork({
          name: "angular",
          properties: {
            isAngularZone: !0
          },
          onInvokeTask: (U, ne, he, Fe, ot, Nt) => {
            try {
              return C2(w), U.invokeTask(he, Fe, ot, Nt);
            } finally {
              (w.shouldCoalesceEventChangeDetection && "eventTask" === Fe.type || w.shouldCoalesceRunChangeDetection) && P(), y2(w);
            }
          },
          onInvoke: (U, ne, he, Fe, ot, Nt, qt) => {
            try {
              return C2(w), U.invoke(he, Fe, ot, Nt, qt);
            } finally {
              w.shouldCoalesceRunChangeDetection && P(), y2(w);
            }
          },
          onHasTask: (U, ne, he, Fe) => {
            U.hasTask(he, Fe), ne === he && ("microTask" == Fe.change ? (w._hasPendingMicrotasks = Fe.microTask, ix(w), nx(w)) : "macroTask" == Fe.change && (w.hasPendingMacrotasks = Fe.macroTask));
          },
          onHandleError: (U, ne, he, Fe) => (U.handleError(he, Fe), w.runOutsideAngular(() => w.onError.emit(Fe)), !1)
        });
      }(he);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
    }
    static assertInAngularZone() {
      if (!rf.isInAngularZone()) throw new h(909, !1);
    }
    static assertNotInAngularZone() {
      if (rf.isInAngularZone()) throw new h(909, !1);
    }
    run(P, U, ne) {
      return this._inner.run(P, U, ne);
    }
    runTask(P, U, ne, he) {
      const Fe = this._inner,
        ot = Fe.scheduleEventTask("NgZoneEvent: " + he, P, r3, wC, wC);
      try {
        return Fe.runTask(ot, U, ne);
      } finally {
        Fe.cancelTask(ot);
      }
    }
    runGuarded(P, U, ne) {
      return this._inner.runGuarded(P, U, ne);
    }
    runOutsideAngular(P) {
      return this._outer.run(P);
    }
  }
  const r3 = {};
  function nx(w) {
    if (0 == w._nesting && !w.hasPendingMicrotasks && !w.isStable) try {
      w._nesting++, w.onMicrotaskEmpty.emit(null);
    } finally {
      if (w._nesting--, !w.hasPendingMicrotasks) try {
        w.runOutsideAngular(() => w.onStable.emit(null));
      } finally {
        w.isStable = !0;
      }
    }
  }
  function ix(w) {
    w.hasPendingMicrotasks = !!(w._hasPendingMicrotasks || (w.shouldCoalesceEventChangeDetection || w.shouldCoalesceRunChangeDetection) && -1 !== w.lastRequestAnimationFrameId);
  }
  function C2(w) {
    w._nesting++, w.isStable && (w.isStable = !1, w.onUnstable.emit(null));
  }
  function y2(w) {
    w._nesting--, nx(w);
  }
  class l3 {
    constructor() {
      this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Bf(), this.onMicrotaskEmpty = new Bf(), this.onStable = new Bf(), this.onError = new Bf();
    }
    run(P, U, ne) {
      return P.apply(U, ne);
    }
    runGuarded(P, U, ne) {
      return P.apply(U, ne);
    }
    runOutsideAngular(P) {
      return P();
    }
    runTask(P, U, ne, he) {
      return P.apply(U, ne);
    }
  }
  const x2 = new Vi(""),
    b2 = new Vi("");
  let rx,
    c3 = (() => {
      class w {
        constructor(U, ne, he) {
          this._ngZone = U, this.registry = ne, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, rx || (function u3(w) {
            rx = w;
          }(he), he.addToWindow(ne)), this._watchAngularEvents(), U.run(() => {
            this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
          });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              this._didWork = !0, this._isZoneStable = !1;
            }
          }), this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                rf.assertNotInAngularZone(), tx(() => {
                  this._isZoneStable = !0, this._runCallbacksIfReady();
                });
              }
            });
          });
        }
        increasePendingRequestCount() {
          return this._pendingCount += 1, this._didWork = !0, this._pendingCount;
        }
        decreasePendingRequestCount() {
          if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
        }
        _runCallbacksIfReady() {
          if (this.isStable()) tx(() => {
            for (; 0 !== this._callbacks.length;) {
              let U = this._callbacks.pop();
              clearTimeout(U.timeoutId), U.doneCb(this._didWork);
            }
            this._didWork = !1;
          });else {
            let U = this.getPendingTasks();
            this._callbacks = this._callbacks.filter(ne => !ne.updateCb || !ne.updateCb(U) || (clearTimeout(ne.timeoutId), !1)), this._didWork = !0;
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(U => ({
            source: U.source,
            creationLocation: U.creationLocation,
            data: U.data
          })) : [];
        }
        addCallback(U, ne, he) {
          let Fe = -1;
          ne && ne > 0 && (Fe = setTimeout(() => {
            this._callbacks = this._callbacks.filter(ot => ot.timeoutId !== Fe), U(this._didWork, this.getPendingTasks());
          }, ne)), this._callbacks.push({
            doneCb: U,
            timeoutId: Fe,
            updateCb: he
          });
        }
        whenStable(U, ne, he) {
          if (he && !this.taskTrackingZone) throw new Error("Task tracking zone is required when passing an update callback to whenStable(). Is \"zone.js/plugins/task-tracking\" loaded?");
          this.addCallback(U, ne, he), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        registerApplication(U) {
          this.registry.registerApplication(U, this);
        }
        unregisterApplication(U) {
          this.registry.unregisterApplication(U);
        }
        findProviders(U, ne, he) {
          return [];
        }
      }
      return w.ɵfac = function (U) {
        return new (U || w)($t(rf), $t(ox), $t(b2));
      }, w.ɵprov = We({
        token: w,
        factory: w.ɵfac
      }), w;
    })(),
    ox = (() => {
      class w {
        constructor() {
          this._applications = new Map();
        }
        registerApplication(U, ne) {
          this._applications.set(U, ne);
        }
        unregisterApplication(U) {
          this._applications.delete(U);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(U) {
          return this._applications.get(U) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(U, ne = !0) {
          return rx?.findTestabilityInTree(this, U, ne) ?? null;
        }
      }
      return w.ɵfac = function (U) {
        return new (U || w)();
      }, w.ɵprov = We({
        token: w,
        factory: w.ɵfac,
        providedIn: "platform"
      }), w;
    })(),
    Mg = null;
  const w2 = new Vi("AllowMultipleToken"),
    sx = new Vi("PlatformDestroyListeners"),
    qm = !1;
  class h3 {
    constructor(P, U) {
      this.name = P, this.token = U;
    }
  }
  function M2(w, P, U = []) {
    const ne = `Platform: ${P}`,
      he = new Vi(ne);
    return (Fe = []) => {
      let ot = E2();
      if (!ot || ot.injector.get(w2, !1)) {
        const Nt = [...U, ...Fe, {
          provide: he,
          useValue: !0
        }];
        w ? w(Nt) : function f3(w) {
          if (Mg && !Mg.get(w2, !1)) throw new h(400, !1);
          Mg = w;
          const P = w.get(_3);
          (function TC(w) {
            const P = w.get(g2, null);
            P && P.forEach(U => U());
          })(w);
        }(function T2(w = [], P) {
          return Sa.create({
            name: P,
            providers: [{
              provide: Sm,
              useValue: "platform"
            }, {
              provide: sx,
              useValue: new Set([() => Mg = null])
            }, ...w]
          });
        }(Nt, ne));
      }
      return function g3(w) {
        const P = E2();
        if (!P) throw new h(401, !1);
        return P;
      }();
    };
  }
  function E2() {
    return Mg?.get(_3) ?? null;
  }
  let _3 = (() => {
    class w {
      constructor(U) {
        this._injector = U, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
      }
      bootstrapModuleFactory(U, ne) {
        const he = function Y_(w, P) {
            let U;
            return U = "noop" === w ? new l3() : ("zone.js" === w ? void 0 : w) || new rf(P), U;
          }(ne?.ngZone, function v3(w) {
            return {
              enableLongStackTrace: !1,
              shouldCoalesceEventChangeDetection: !(!w || !w.ngZoneEventCoalescing) || !1,
              shouldCoalesceRunChangeDetection: !(!w || !w.ngZoneRunCoalescing) || !1
            };
          }(ne)),
          Fe = [{
            provide: rf,
            useValue: he
          }];
        return he.run(() => {
          const ot = Sa.create({
              providers: Fe,
              parent: this.injector,
              name: U.moduleType.name
            }),
            Nt = U.create(ot),
            qt = Nt.injector.get(Fm, null);
          if (!qt) throw new h(402, !1);
          return he.runOutsideAngular(() => {
            const $n = he.onError.subscribe({
              next: Ni => {
                qt.handleError(Ni);
              }
            });
            Nt.onDestroy(() => {
              W_(this._modules, Nt), $n.unsubscribe();
            });
          }), function D2(w, P, U) {
            try {
              const ne = U();
              return Qv(ne) ? ne.catch(he => {
                throw P.runOutsideAngular(() => w.handleError(he)), he;
              }) : ne;
            } catch (ne) {
              throw P.runOutsideAngular(() => w.handleError(ne)), ne;
            }
          }(qt, he, () => {
            const $n = Nt.injector.get(wg);
            return $n.runInitializers(), $n.donePromise.then(() => (function lC(w) {
              le(w, "Expected localeId to be defined"), "string" == typeof w && (v4 = w.toLowerCase().replace(/_/g, "-"));
            }(Nt.injector.get(Qu, H_) || H_), this._moduleDoBootstrap(Nt), Nt));
          });
        });
      }
      bootstrapModule(U, ne = []) {
        const he = C3({}, ne);
        return function d3(w, P, U) {
          const ne = new d1(U);
          return Promise.resolve(ne);
        }(0, 0, U).then(Fe => this.bootstrapModuleFactory(Fe, he));
      }
      _moduleDoBootstrap(U) {
        const ne = U.injector.get(Qc);
        if (U._bootstrapComponents.length > 0) U._bootstrapComponents.forEach(he => ne.bootstrap(he));else {
          if (!U.instance.ngDoBootstrap) throw new h(-403, !1);
          U.instance.ngDoBootstrap(ne);
        }
        this._modules.push(U);
      }
      onDestroy(U) {
        this._destroyListeners.push(U);
      }
      get injector() {
        return this._injector;
      }
      destroy() {
        if (this._destroyed) throw new h(404, !1);
        this._modules.slice().forEach(ne => ne.destroy()), this._destroyListeners.forEach(ne => ne());
        const U = this._injector.get(sx, null);
        U && (U.forEach(ne => ne()), U.clear()), this._destroyed = !0;
      }
      get destroyed() {
        return this._destroyed;
      }
    }
    return w.ɵfac = function (U) {
      return new (U || w)($t(Sa));
    }, w.ɵprov = We({
      token: w,
      factory: w.ɵfac,
      providedIn: "platform"
    }), w;
  })();
  function C3(w, P) {
    return Array.isArray(P) ? P.reduce(C3, w) : {
      ...w,
      ...P
    };
  }
  let Qc = (() => {
    class w {
      get destroyed() {
        return this._destroyed;
      }
      get injector() {
        return this._injector;
      }
      constructor(U, ne, he) {
        this._zone = U, this._injector = ne, this._exceptionHandler = he, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this._destroyed = !1, this._destroyListeners = [], this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
          next: () => {
            this._zone.run(() => {
              this.tick();
            });
          }
        });
        const Fe = new a.y(Nt => {
            this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
              Nt.next(this._stable), Nt.complete();
            });
          }),
          ot = new a.y(Nt => {
            let qt;
            this._zone.runOutsideAngular(() => {
              qt = this._zone.onStable.subscribe(() => {
                rf.assertNotInAngularZone(), tx(() => {
                  !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, Nt.next(!0));
                });
              });
            });
            const $n = this._zone.onUnstable.subscribe(() => {
              rf.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                Nt.next(!1);
              }));
            });
            return () => {
              qt.unsubscribe(), $n.unsubscribe();
            };
          });
        this.isStable = (0, m.T)(Fe, ot.pipe((0, d.B)()));
      }
      bootstrap(U, ne) {
        const he = U instanceof mh;
        if (!this._injector.get(wg).done) {
          !he && us(U);
          throw new h(405, qm);
        }
        let ot;
        ot = he ? U : this._injector.get(Rh).resolveComponentFactory(U), this.componentTypes.push(ot.componentType);
        const Nt = function p3(w) {
            return w.isBoundToModule;
          }(ot) ? void 0 : this._injector.get(u1),
          $n = ot.create(Sa.NULL, [], ne || ot.selector, Nt),
          Ni = $n.location.nativeElement,
          go = $n.injector.get(x2, null);
        return go?.registerApplication(Ni), $n.onDestroy(() => {
          this.detachView($n.hostView), W_(this.components, $n), go?.unregisterApplication(Ni);
        }), this._loadComponent($n), $n;
      }
      tick() {
        if (this._runningTick) throw new h(101, !1);
        try {
          this._runningTick = !0;
          for (let U of this._views) U.detectChanges();
        } catch (U) {
          this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(U));
        } finally {
          this._runningTick = !1;
        }
      }
      attachView(U) {
        const ne = U;
        this._views.push(ne), ne.attachToAppRef(this);
      }
      detachView(U) {
        const ne = U;
        W_(this._views, ne), ne.detachFromAppRef();
      }
      _loadComponent(U) {
        this.attachView(U.hostView), this.tick(), this.components.push(U);
        const ne = this._injector.get(C1, []);
        ne.push(...this._bootstrapListeners), ne.forEach(he => he(U));
      }
      ngOnDestroy() {
        if (!this._destroyed) try {
          this._destroyListeners.forEach(U => U()), this._views.slice().forEach(U => U.destroy()), this._onMicrotaskEmptySubscription.unsubscribe();
        } finally {
          this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = [];
        }
      }
      onDestroy(U) {
        return this._destroyListeners.push(U), () => W_(this._destroyListeners, U);
      }
      destroy() {
        if (this._destroyed) throw new h(406, !1);
        const U = this._injector;
        U.destroy && !U.destroyed && U.destroy();
      }
      get viewCount() {
        return this._views.length;
      }
      warnIfDestroyed() {}
    }
    return w.ɵfac = function (U) {
      return new (U || w)($t(rf), $t(Au), $t(Fm));
    }, w.ɵprov = We({
      token: w,
      factory: w.ɵfac,
      providedIn: "root"
    }), w;
  })();
  function W_(w, P) {
    const U = w.indexOf(P);
    U > -1 && w.splice(U, 1);
  }
  function x3() {
    return !1;
  }
  let b3 = (() => {
    class w {}
    return w.__NG_ELEMENT_ID__ = w3, w;
  })();
  function w3(w) {
    return function lx(w, P, U) {
      if (ua(w) && !U) {
        const ne = mi(w.index, P);
        return new pd(ne, ne);
      }
      return 47 & w.type ? new pd(P[Yt], P) : null;
    }(Cr(), Zt(), 16 == (16 & w));
  }
  class L2 {
    constructor() {}
    supports(P) {
      return cp(P);
    }
    create(P) {
      return new P3(P);
    }
  }
  const D3 = (w, P) => P;
  class P3 {
    constructor(P) {
      this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = P || D3;
    }
    forEachItem(P) {
      let U;
      for (U = this._itHead; null !== U; U = U._next) P(U);
    }
    forEachOperation(P) {
      let U = this._itHead,
        ne = this._removalsHead,
        he = 0,
        Fe = null;
      for (; U || ne;) {
        const ot = !ne || U && U.currentIndex < R2(ne, he, Fe) ? U : ne,
          Nt = R2(ot, he, Fe),
          qt = ot.currentIndex;
        if (ot === ne) he--, ne = ne._nextRemoved;else if (U = U._next, null == ot.previousIndex) he++;else {
          Fe || (Fe = []);
          const $n = Nt - he,
            Ni = qt - he;
          if ($n != Ni) {
            for (let lr = 0; lr < $n; lr++) {
              const Ir = lr < Fe.length ? Fe[lr] : Fe[lr] = 0,
                ss = Ir + lr;
              Ni <= ss && ss < $n && (Fe[lr] = Ir + 1);
            }
            Fe[ot.previousIndex] = Ni - $n;
          }
        }
        Nt !== qt && P(ot, Nt, qt);
      }
    }
    forEachPreviousItem(P) {
      let U;
      for (U = this._previousItHead; null !== U; U = U._nextPrevious) P(U);
    }
    forEachAddedItem(P) {
      let U;
      for (U = this._additionsHead; null !== U; U = U._nextAdded) P(U);
    }
    forEachMovedItem(P) {
      let U;
      for (U = this._movesHead; null !== U; U = U._nextMoved) P(U);
    }
    forEachRemovedItem(P) {
      let U;
      for (U = this._removalsHead; null !== U; U = U._nextRemoved) P(U);
    }
    forEachIdentityChange(P) {
      let U;
      for (U = this._identityChangesHead; null !== U; U = U._nextIdentityChange) P(U);
    }
    diff(P) {
      if (null == P && (P = []), !cp(P)) throw new h(900, !1);
      return this.check(P) ? this : null;
    }
    onDestroy() {}
    check(P) {
      this._reset();
      let he,
        Fe,
        ot,
        U = this._itHead,
        ne = !1;
      if (Array.isArray(P)) {
        this.length = P.length;
        for (let Nt = 0; Nt < this.length; Nt++) Fe = P[Nt], ot = this._trackByFn(Nt, Fe), null !== U && Object.is(U.trackById, ot) ? (ne && (U = this._verifyReinsertion(U, Fe, ot, Nt)), Object.is(U.item, Fe) || this._addIdentityChange(U, Fe)) : (U = this._mismatch(U, Fe, ot, Nt), ne = !0), U = U._next;
      } else he = 0, function Jh(w, P) {
        if (Array.isArray(w)) for (let U = 0; U < w.length; U++) P(w[U]);else {
          const U = w[Symbol.iterator]();
          let ne;
          for (; !(ne = U.next()).done;) P(ne.value);
        }
      }(P, Nt => {
        ot = this._trackByFn(he, Nt), null !== U && Object.is(U.trackById, ot) ? (ne && (U = this._verifyReinsertion(U, Nt, ot, he)), Object.is(U.item, Nt) || this._addIdentityChange(U, Nt)) : (U = this._mismatch(U, Nt, ot, he), ne = !0), U = U._next, he++;
      }), this.length = he;
      return this._truncate(U), this.collection = P, this.isDirty;
    }
    get isDirty() {
      return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
    }
    _reset() {
      if (this.isDirty) {
        let P;
        for (P = this._previousItHead = this._itHead; null !== P; P = P._next) P._nextPrevious = P._next;
        for (P = this._additionsHead; null !== P; P = P._nextAdded) P.previousIndex = P.currentIndex;
        for (this._additionsHead = this._additionsTail = null, P = this._movesHead; null !== P; P = P._nextMoved) P.previousIndex = P.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
      }
    }
    _mismatch(P, U, ne, he) {
      let Fe;
      return null === P ? Fe = this._itTail : (Fe = P._prev, this._remove(P)), null !== (P = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(ne, null)) ? (Object.is(P.item, U) || this._addIdentityChange(P, U), this._reinsertAfter(P, Fe, he)) : null !== (P = null === this._linkedRecords ? null : this._linkedRecords.get(ne, he)) ? (Object.is(P.item, U) || this._addIdentityChange(P, U), this._moveAfter(P, Fe, he)) : P = this._addAfter(new hx(U, ne), Fe, he), P;
    }
    _verifyReinsertion(P, U, ne, he) {
      let Fe = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(ne, null);
      return null !== Fe ? P = this._reinsertAfter(Fe, P._prev, he) : P.currentIndex != he && (P.currentIndex = he, this._addToMoves(P, he)), P;
    }
    _truncate(P) {
      for (; null !== P;) {
        const U = P._next;
        this._addToRemovals(this._unlink(P)), P = U;
      }
      null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(P, U, ne) {
      null !== this._unlinkedRecords && this._unlinkedRecords.remove(P);
      const he = P._prevRemoved,
        Fe = P._nextRemoved;
      return null === he ? this._removalsHead = Fe : he._nextRemoved = Fe, null === Fe ? this._removalsTail = he : Fe._prevRemoved = he, this._insertAfter(P, U, ne), this._addToMoves(P, ne), P;
    }
    _moveAfter(P, U, ne) {
      return this._unlink(P), this._insertAfter(P, U, ne), this._addToMoves(P, ne), P;
    }
    _addAfter(P, U, ne) {
      return this._insertAfter(P, U, ne), this._additionsTail = null === this._additionsTail ? this._additionsHead = P : this._additionsTail._nextAdded = P, P;
    }
    _insertAfter(P, U, ne) {
      const he = null === U ? this._itHead : U._next;
      return P._next = he, P._prev = U, null === he ? this._itTail = P : he._prev = P, null === U ? this._itHead = P : U._next = P, null === this._linkedRecords && (this._linkedRecords = new k2()), this._linkedRecords.put(P), P.currentIndex = ne, P;
    }
    _remove(P) {
      return this._addToRemovals(this._unlink(P));
    }
    _unlink(P) {
      null !== this._linkedRecords && this._linkedRecords.remove(P);
      const U = P._prev,
        ne = P._next;
      return null === U ? this._itHead = ne : U._next = ne, null === ne ? this._itTail = U : ne._prev = U, P;
    }
    _addToMoves(P, U) {
      return P.previousIndex === U || (this._movesTail = null === this._movesTail ? this._movesHead = P : this._movesTail._nextMoved = P), P;
    }
    _addToRemovals(P) {
      return null === this._unlinkedRecords && (this._unlinkedRecords = new k2()), this._unlinkedRecords.put(P), P.currentIndex = null, P._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = P, P._prevRemoved = null) : (P._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = P), P;
    }
    _addIdentityChange(P, U) {
      return P.item = U, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = P : this._identityChangesTail._nextIdentityChange = P, P;
    }
  }
  class hx {
    constructor(P, U) {
      this.item = P, this.trackById = U, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null;
    }
  }
  class O3 {
    constructor() {
      this._head = null, this._tail = null;
    }
    add(P) {
      null === this._head ? (this._head = this._tail = P, P._nextDup = null, P._prevDup = null) : (this._tail._nextDup = P, P._prevDup = this._tail, P._nextDup = null, this._tail = P);
    }
    get(P, U) {
      let ne;
      for (ne = this._head; null !== ne; ne = ne._nextDup) if ((null === U || U <= ne.currentIndex) && Object.is(ne.trackById, P)) return ne;
      return null;
    }
    remove(P) {
      const U = P._prevDup,
        ne = P._nextDup;
      return null === U ? this._head = ne : U._nextDup = ne, null === ne ? this._tail = U : ne._prevDup = U, null === this._head;
    }
  }
  class k2 {
    constructor() {
      this.map = new Map();
    }
    put(P) {
      const U = P.trackById;
      let ne = this.map.get(U);
      ne || (ne = new O3(), this.map.set(U, ne)), ne.add(P);
    }
    get(P, U) {
      const he = this.map.get(P);
      return he ? he.get(P, U) : null;
    }
    remove(P) {
      const U = P.trackById;
      return this.map.get(U).remove(P) && this.map.delete(U), P;
    }
    get isEmpty() {
      return 0 === this.map.size;
    }
    clear() {
      this.map.clear();
    }
  }
  function R2(w, P, U) {
    const ne = w.previousIndex;
    if (null === ne) return ne;
    let he = 0;
    return U && ne < U.length && (he = U[ne]), ne + P + he;
  }
  class F2 {
    constructor() {}
    supports(P) {
      return P instanceof Map || Te(P);
    }
    create() {
      return new A3();
    }
  }
  class A3 {
    constructor() {
      this._records = new Map(), this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null;
    }
    get isDirty() {
      return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
    }
    forEachItem(P) {
      let U;
      for (U = this._mapHead; null !== U; U = U._next) P(U);
    }
    forEachPreviousItem(P) {
      let U;
      for (U = this._previousMapHead; null !== U; U = U._nextPrevious) P(U);
    }
    forEachChangedItem(P) {
      let U;
      for (U = this._changesHead; null !== U; U = U._nextChanged) P(U);
    }
    forEachAddedItem(P) {
      let U;
      for (U = this._additionsHead; null !== U; U = U._nextAdded) P(U);
    }
    forEachRemovedItem(P) {
      let U;
      for (U = this._removalsHead; null !== U; U = U._nextRemoved) P(U);
    }
    diff(P) {
      if (P) {
        if (!(P instanceof Map || Te(P))) throw new h(900, !1);
      } else P = new Map();
      return this.check(P) ? this : null;
    }
    onDestroy() {}
    check(P) {
      this._reset();
      let U = this._mapHead;
      if (this._appendAfter = null, this._forEach(P, (ne, he) => {
        if (U && U.key === he) this._maybeAddToChanges(U, ne), this._appendAfter = U, U = U._next;else {
          const Fe = this._getOrCreateRecordForKey(he, ne);
          U = this._insertBeforeOrAppend(U, Fe);
        }
      }), U) {
        U._prev && (U._prev._next = null), this._removalsHead = U;
        for (let ne = U; null !== ne; ne = ne._nextRemoved) ne === this._mapHead && (this._mapHead = null), this._records.delete(ne.key), ne._nextRemoved = ne._next, ne.previousValue = ne.currentValue, ne.currentValue = null, ne._prev = null, ne._next = null;
      }
      return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
    }
    _insertBeforeOrAppend(P, U) {
      if (P) {
        const ne = P._prev;
        return U._next = P, U._prev = ne, P._prev = U, ne && (ne._next = U), P === this._mapHead && (this._mapHead = U), this._appendAfter = P, P;
      }
      return this._appendAfter ? (this._appendAfter._next = U, U._prev = this._appendAfter) : this._mapHead = U, this._appendAfter = U, null;
    }
    _getOrCreateRecordForKey(P, U) {
      if (this._records.has(P)) {
        const he = this._records.get(P);
        this._maybeAddToChanges(he, U);
        const Fe = he._prev,
          ot = he._next;
        return Fe && (Fe._next = ot), ot && (ot._prev = Fe), he._next = null, he._prev = null, he;
      }
      const ne = new S3(P);
      return this._records.set(P, ne), ne.currentValue = U, this._addToAdditions(ne), ne;
    }
    _reset() {
      if (this.isDirty) {
        let P;
        for (this._previousMapHead = this._mapHead, P = this._previousMapHead; null !== P; P = P._next) P._nextPrevious = P._next;
        for (P = this._changesHead; null !== P; P = P._nextChanged) P.previousValue = P.currentValue;
        for (P = this._additionsHead; null != P; P = P._nextAdded) P.previousValue = P.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
      }
    }
    _maybeAddToChanges(P, U) {
      Object.is(U, P.currentValue) || (P.previousValue = P.currentValue, P.currentValue = U, this._addToChanges(P));
    }
    _addToAdditions(P) {
      null === this._additionsHead ? this._additionsHead = this._additionsTail = P : (this._additionsTail._nextAdded = P, this._additionsTail = P);
    }
    _addToChanges(P) {
      null === this._changesHead ? this._changesHead = this._changesTail = P : (this._changesTail._nextChanged = P, this._changesTail = P);
    }
    _forEach(P, U) {
      P instanceof Map ? P.forEach(U) : Object.keys(P).forEach(ne => U(P[ne], ne));
    }
  }
  class S3 {
    constructor(P) {
      this.key = P, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null;
    }
  }
  function N2() {
    return new fx([new L2()]);
  }
  let fx = (() => {
    class w {
      constructor(U) {
        this.factories = U;
      }
      static create(U, ne) {
        if (null != ne) {
          const he = ne.factories.slice();
          U = U.concat(he);
        }
        return new w(U);
      }
      static extend(U) {
        return {
          provide: w,
          useFactory: ne => w.create(U, ne || N2()),
          deps: [[w, new Ta(), new Ca()]]
        };
      }
      find(U) {
        const ne = this.factories.find(he => he.supports(U));
        if (null != ne) return ne;
        throw new h(901, !1);
      }
    }
    return w.ɵprov = We({
      token: w,
      providedIn: "root",
      factory: N2
    }), w;
  })();
  function U2() {
    return new mx([new F2()]);
  }
  let mx = (() => {
    class w {
      constructor(U) {
        this.factories = U;
      }
      static create(U, ne) {
        if (ne) {
          const he = ne.factories.slice();
          U = U.concat(he);
        }
        return new w(U);
      }
      static extend(U) {
        return {
          provide: w,
          useFactory: ne => w.create(U, ne || U2()),
          deps: [[w, new Ta(), new Ca()]]
        };
      }
      find(U) {
        const ne = this.factories.find(he => he.supports(U));
        if (ne) return ne;
        throw new h(901, !1);
      }
    }
    return w.ɵprov = We({
      token: w,
      providedIn: "root",
      factory: U2
    }), w;
  })();
  const H2 = M2(null, "core", []);
  let OC = (() => {
    class w {
      constructor(U) {}
    }
    return w.ɵfac = function (U) {
      return new (U || w)($t(Qc));
    }, w.ɵmod = Rn({
      type: w
    }), w.ɵinj = st({}), w;
  })();
  function L3(w) {
    return "boolean" == typeof w ? w : null != w && "false" !== w;
  }
});
