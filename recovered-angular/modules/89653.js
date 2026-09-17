// Extracted from main; webpack module 89653. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    UO: () => j,
    qg: () => y,
    Y6: () => ke,
    mK: () => Ze,
    n$: () => Ke,
    Y$: () => Je,
    FR: () => Nn,
    yh: () => co,
    CK: () => Js,
    Aw: () => ho,
    cr: () => rs,
    wb: () => Ee,
    PH: () => v,
    ZF: () => Yo,
    Lq: () => ri,
    P1: () => br,
    on: () => uo,
    Ky: () => f
  });
  var t = i(94650),
    e = i(61135),
    a = i(69751),
    m = i(77579),
    d = i(233),
    M = i(85363),
    b = i(11365),
    A = i(22940),
    N = i(54004),
    O = i(71884);
  const L = {};
  function v(Yt, jt) {
    if (L[Yt] = (L[Yt] || 0) + 1, "function" == typeof jt) return h(Yt, (...tn) => ({
      ...jt(...tn),
      type: Yt
    }));
    switch (jt ? jt._as : "empty") {
      case "empty":
        return h(Yt, () => ({
          type: Yt
        }));
      case "props":
        return h(Yt, tn => ({
          ...tn,
          type: Yt
        }));
      default:
        throw new Error("Unexpected config.");
    }
  }
  function f() {
    return {
      _as: "props",
      _p: void 0
    };
  }
  function h(Yt, jt) {
    return Object.defineProperty(jt, "type", {
      value: Yt,
      writable: !1
    });
  }
  const y = "@ngrx/store/init";
  let j = (() => {
    class Yt extends e.X {
      constructor() {
        super({
          type: y
        });
      }
      next(hn) {
        if ("function" == typeof hn) throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");
        if (typeof hn > "u") throw new TypeError("Actions must be objects");
        if (typeof hn.type > "u") throw new TypeError("Actions must have a type property");
        super.next(hn);
      }
      complete() {}
      ngOnDestroy() {
        super.complete();
      }
    }
    return Yt.ɵfac = function (hn) {
      return new (hn || Yt)();
    }, Yt.ɵprov = t.Yz7({
      token: Yt,
      factory: Yt.ɵfac
    }), Yt;
  })();
  const W = [j],
    F = new t.OlP("@ngrx/store Internal Root Guard"),
    Le = new t.OlP("@ngrx/store Internal Initial State"),
    ke = new t.OlP("@ngrx/store Initial State"),
    J = new t.OlP("@ngrx/store Reducer Factory"),
    fe = new t.OlP("@ngrx/store Internal Reducer Factory Provider"),
    ye = new t.OlP("@ngrx/store Initial Reducers"),
    ae = new t.OlP("@ngrx/store Internal Initial Reducers"),
    Y = new t.OlP("@ngrx/store Store Features"),
    G = new t.OlP("@ngrx/store Internal Store Reducers"),
    te = new t.OlP("@ngrx/store Internal Feature Reducers"),
    pe = new t.OlP("@ngrx/store Internal Feature Configs"),
    be = new t.OlP("@ngrx/store Internal Store Features"),
    le = new t.OlP("@ngrx/store Internal Feature Reducers Token"),
    n = new t.OlP("@ngrx/store Feature Reducers"),
    Se = new t.OlP("@ngrx/store User Provided Meta Reducers"),
    qe = new t.OlP("@ngrx/store Meta Reducers"),
    Rt = new t.OlP("@ngrx/store Internal Resolved Meta Reducers"),
    We = new t.OlP("@ngrx/store User Runtime Checks Config"),
    Re = new t.OlP("@ngrx/store Internal User Runtime Checks Config"),
    st = new t.OlP("@ngrx/store Internal Runtime Checks"),
    q = new t.OlP("@ngrx/store Check if Action types are unique");
  function Ct(Yt, jt = {}) {
    const hn = Object.keys(Yt),
      tn = {};
    for (let Gn = 0; Gn < hn.length; Gn++) {
      const dn = hn[Gn];
      "function" == typeof Yt[dn] && (tn[dn] = Yt[dn]);
    }
    const di = Object.keys(tn);
    return function (dn, wo) {
      dn = void 0 === dn ? jt : dn;
      let Ro = !1;
      const _r = {};
      for (let qr = 0; qr < di.length; qr++) {
        const Ts = di[qr],
          ws = dn[Ts],
          Us = (0, tn[Ts])(ws, wo);
        _r[Ts] = Us, Ro = Ro || Us !== ws;
      }
      return Ro ? _r : dn;
    };
  }
  function Et(...Yt) {
    return function (jt) {
      if (0 === Yt.length) return jt;
      const hn = Yt[Yt.length - 1];
      return Yt.slice(0, -1).reduceRight((di, Gn) => Gn(di), hn(jt));
    };
  }
  function Ue(Yt, jt) {
    return Array.isArray(jt) && jt.length > 0 && (Yt = Et.apply(null, [...jt, Yt])), (hn, tn) => {
      const di = Yt(hn);
      return (Gn, dn) => di(Gn = void 0 === Gn ? tn : Gn, dn);
    };
  }
  new t.OlP("@ngrx/store Root Store Provider"), new t.OlP("@ngrx/store Feature State Provider");
  class Ke extends a.y {}
  class Ze extends j {}
  const Ee = "@ngrx/store/update-reducers";
  let je = (() => {
    class Yt extends e.X {
      constructor(hn, tn, di, Gn) {
        super(Gn(di, tn)), this.dispatcher = hn, this.initialState = tn, this.reducers = di, this.reducerFactory = Gn;
      }
      get currentReducers() {
        return this.reducers;
      }
      addFeature(hn) {
        this.addFeatures([hn]);
      }
      addFeatures(hn) {
        const tn = hn.reduce((di, {
          reducers: Gn,
          reducerFactory: dn,
          metaReducers: wo,
          initialState: Ro,
          key: _r
        }) => {
          const qr = "function" == typeof Gn ? function Me(Yt) {
            const jt = Array.isArray(Yt) && Yt.length > 0 ? Et(...Yt) : hn => hn;
            return (hn, tn) => (hn = jt(hn), (di, Gn) => hn(di = void 0 === di ? tn : di, Gn));
          }(wo)(Gn, Ro) : Ue(dn, wo)(Gn, Ro);
          return di[_r] = qr, di;
        }, {});
        this.addReducers(tn);
      }
      removeFeature(hn) {
        this.removeFeatures([hn]);
      }
      removeFeatures(hn) {
        this.removeReducers(hn.map(tn => tn.key));
      }
      addReducer(hn, tn) {
        this.addReducers({
          [hn]: tn
        });
      }
      addReducers(hn) {
        this.reducers = {
          ...this.reducers,
          ...hn
        }, this.updateReducers(Object.keys(hn));
      }
      removeReducer(hn) {
        this.removeReducers([hn]);
      }
      removeReducers(hn) {
        hn.forEach(tn => {
          this.reducers = function Ft(Yt, jt) {
            return Object.keys(Yt).filter(hn => hn !== jt).reduce((hn, tn) => Object.assign(hn, {
              [tn]: Yt[tn]
            }), {});
          }(this.reducers, tn);
        }), this.updateReducers(hn);
      }
      updateReducers(hn) {
        this.next(this.reducerFactory(this.reducers, this.initialState)), this.dispatcher.next({
          type: Ee,
          features: hn
        });
      }
      ngOnDestroy() {
        this.complete();
      }
    }
    return Yt.ɵfac = function (hn) {
      return new (hn || Yt)(t.LFG(Ze), t.LFG(ke), t.LFG(ye), t.LFG(J));
    }, Yt.ɵprov = t.Yz7({
      token: Yt,
      factory: Yt.ɵfac
    }), Yt;
  })();
  const Mt = [je, {
    provide: Ke,
    useExisting: je
  }, {
    provide: Ze,
    useExisting: j
  }];
  let Je = (() => {
    class Yt extends m.x {
      ngOnDestroy() {
        this.complete();
      }
    }
    return Yt.ɵfac = function () {
      let jt;
      return function (tn) {
        return (jt || (jt = t.n5z(Yt)))(tn || Yt);
      };
    }(), Yt.ɵprov = t.Yz7({
      token: Yt,
      factory: Yt.ɵfac
    }), Yt;
  })();
  const Xt = [Je];
  class Nn extends a.y {}
  let Pi = (() => {
    class Yt extends e.X {
      constructor(hn, tn, di, Gn) {
        super(Gn);
        const _r = hn.pipe((0, M.Q)(d.N)).pipe((0, b.M)(tn)).pipe((0, A.R)(Ii, {
          state: Gn
        }));
        this.stateSubscription = _r.subscribe(({
          state: qr,
          action: Ts
        }) => {
          this.next(qr), di.next(Ts);
        });
      }
      ngOnDestroy() {
        this.stateSubscription.unsubscribe(), this.complete();
      }
    }
    return Yt.INIT = y, Yt.ɵfac = function (hn) {
      return new (hn || Yt)(t.LFG(j), t.LFG(Ke), t.LFG(Je), t.LFG(ke));
    }, Yt.ɵprov = t.Yz7({
      token: Yt,
      factory: Yt.ɵfac
    }), Yt;
  })();
  function Ii(Yt = {
    state: void 0
  }, [jt, hn]) {
    const {
      state: tn
    } = Yt;
    return {
      state: hn(tn, jt),
      action: jt
    };
  }
  const yi = [Pi, {
    provide: Nn,
    useExisting: Pi
  }];
  let co = (() => {
    class Yt extends a.y {
      constructor(hn, tn, di) {
        super(), this.actionsObserver = tn, this.reducerManager = di, this.source = hn;
      }
      select(hn, ...tn) {
        return fr.call(null, hn, ...tn)(this);
      }
      lift(hn) {
        const tn = new Yt(this, this.actionsObserver, this.reducerManager);
        return tn.operator = hn, tn;
      }
      dispatch(hn) {
        this.actionsObserver.next(hn);
      }
      next(hn) {
        this.actionsObserver.next(hn);
      }
      error(hn) {
        this.actionsObserver.error(hn);
      }
      complete() {
        this.actionsObserver.complete();
      }
      addReducer(hn, tn) {
        this.reducerManager.addReducer(hn, tn);
      }
      removeReducer(hn) {
        this.reducerManager.removeReducer(hn);
      }
    }
    return Yt.ɵfac = function (hn) {
      return new (hn || Yt)(t.LFG(Nn), t.LFG(j), t.LFG(je));
    }, Yt.ɵprov = t.Yz7({
      token: Yt,
      factory: Yt.ɵfac
    }), Yt;
  })();
  const Jo = [co];
  function fr(Yt, jt, ...hn) {
    return function (di) {
      let Gn;
      if ("string" == typeof Yt) {
        const dn = [jt, ...hn].filter(Boolean);
        Gn = di.pipe(function I(...Yt) {
          const jt = Yt.length;
          if (0 === jt) throw new Error("list of properties cannot be empty.");
          return (0, N.U)(hn => {
            let tn = hn;
            for (let di = 0; di < jt; di++) {
              const Gn = tn?.[Yt[di]];
              if (!(typeof Gn < "u")) return;
              tn = Gn;
            }
            return tn;
          });
        }(Yt, ...dn));
      } else {
        if ("function" != typeof Yt) throw new TypeError(`Unexpected type '${typeof Yt}' in select operator, expected 'string' or 'function'`);
        Gn = di.pipe((0, N.U)(dn => Yt(dn, jt)));
      }
      return Gn.pipe((0, O.x)());
    };
  }
  const pt = "https://ngrx.io/guide/store/configuration/runtime-checks";
  function Dt(Yt) {
    return void 0 === Yt;
  }
  function Ht(Yt) {
    return null === Yt;
  }
  function Dn(Yt) {
    return Array.isArray(Yt);
  }
  function zn(Yt) {
    return "object" == typeof Yt && null !== Yt;
  }
  function Qn(Yt) {
    return "function" == typeof Yt;
  }
  let To = !1;
  function Xn(Yt, jt) {
    return Yt === jt;
  }
  function Fo(Yt, jt = Xn, hn = Xn) {
    let Gn,
      tn = null,
      di = null;
    return {
      memoized: function _r() {
        if (void 0 !== Gn) return Gn.result;
        if (!tn) return di = Yt.apply(null, arguments), tn = arguments, di;
        if (!function Yi(Yt, jt, hn) {
          for (let tn = 0; tn < Yt.length; tn++) if (!hn(Yt[tn], jt[tn])) return !0;
          return !1;
        }(arguments, tn, jt)) return di;
        const qr = Yt.apply(null, arguments);
        return tn = arguments, hn(di, qr) ? di : (di = qr, qr);
      },
      reset: function dn() {
        tn = null, di = null;
      },
      setResult: function wo(qr) {
        Gn = {
          result: qr
        };
      },
      clearResult: function Ro() {
        Gn = void 0;
      }
    };
  }
  function br(...Yt) {
    return function qo(Yt, jt = {
      stateFn: Pr
    }) {
      return function (...hn) {
        let tn = hn;
        if (Array.isArray(tn[0])) {
          const [qr, ...Ts] = tn;
          tn = [...qr, ...Ts];
        }
        const di = tn.slice(0, tn.length - 1),
          Gn = tn[tn.length - 1],
          dn = di.filter(qr => qr.release && "function" == typeof qr.release),
          wo = Yt(function (...qr) {
            return Gn.apply(null, qr);
          }),
          Ro = Fo(function (qr, Ts) {
            return jt.stateFn.apply(null, [qr, di, Ts, wo]);
          });
        return Object.assign(Ro.memoized, {
          release: function _r() {
            Ro.reset(), wo.reset(), dn.forEach(qr => qr.release());
          },
          projector: wo.memoized,
          setResult: Ro.setResult,
          clearResult: Ro.clearResult
        });
      };
    }(Fo)(...Yt);
  }
  function Pr(Yt, jt, hn, tn) {
    if (void 0 === hn) {
      const Gn = jt.map(dn => dn(Yt));
      return tn.memoized.apply(null, Gn);
    }
    const di = jt.map(Gn => Gn(Yt, hn));
    return tn.memoized.apply(null, [...di, hn]);
  }
  function Yo(Yt) {
    return br(jt => {
      const hn = jt[Yt];
      return !function qn() {
        return To;
      }() && (0, t.X6Q)() && !(Yt in jt) && console.warn(`@ngrx/store: The feature name "${Yt}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${Yt}', ...) or StoreModule.forFeature('${Yt}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`), hn;
    }, jt => jt);
  }
  function Ci(Yt) {
    return Yt instanceof t.OlP ? (0, t.f3M)(Yt) : Yt;
  }
  function lo(Yt, jt) {
    return jt.map((hn, tn) => {
      if (Yt[tn] instanceof t.OlP) {
        const di = (0, t.f3M)(Yt[tn]);
        return {
          key: hn.key,
          reducerFactory: di.reducerFactory ? di.reducerFactory : Ct,
          metaReducers: di.metaReducers ? di.metaReducers : [],
          initialState: di.initialState
        };
      }
      return hn;
    });
  }
  function jo(Yt) {
    return Yt.map(jt => jt instanceof t.OlP ? (0, t.f3M)(jt) : jt);
  }
  function Go(Yt) {
    return "function" == typeof Yt ? Yt() : Yt;
  }
  function ji(Yt, jt) {
    return Yt.concat(jt);
  }
  function ti() {
    if ((0, t.f3M)(co, {
      optional: !0,
      skipSelf: !0
    })) throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");
    return "guarded";
  }
  function Fi(Yt) {
    Object.freeze(Yt);
    const jt = Qn(Yt);
    return Object.getOwnPropertyNames(Yt).forEach(hn => {
      if (!hn.startsWith("ɵ") && function ui(Yt, jt) {
        return Object.prototype.hasOwnProperty.call(Yt, jt);
      }(Yt, hn) && (!jt || "caller" !== hn && "callee" !== hn && "arguments" !== hn)) {
        const tn = Yt[hn];
        (zn(tn) || Qn(tn)) && !Object.isFrozen(tn) && Fi(tn);
      }
    }), Yt;
  }
  function ki(Yt, jt = []) {
    return (Dt(Yt) || Ht(Yt)) && 0 === jt.length ? {
      path: ["root"],
      value: Yt
    } : Object.keys(Yt).reduce((tn, di) => {
      if (tn) return tn;
      const Gn = Yt[di];
      return function In(Yt) {
        return Qn(Yt) && Yt.hasOwnProperty("ɵcmp");
      }(Gn) ? tn : !(Dt(Gn) || Ht(Gn) || function li(Yt) {
        return "number" == typeof Yt;
      }(Gn) || function an(Yt) {
        return "boolean" == typeof Yt;
      }(Gn) || function vt(Yt) {
        return "string" == typeof Yt;
      }(Gn) || Dn(Gn)) && (function Mn(Yt) {
        if (!function $t(Yt) {
          return zn(Yt) && !Dn(Yt);
        }(Yt)) return !1;
        const jt = Object.getPrototypeOf(Yt);
        return jt === Object.prototype || null === jt;
      }(Gn) ? ki(Gn, [...jt, di]) : {
        path: [...jt, di],
        value: Gn
      });
    }, !1);
  }
  function Ei(Yt, jt) {
    if (!1 === Yt) return;
    const hn = Yt.path.join("."),
      tn = new Error(`Detected unserializable ${jt} at "${hn}". ${pt}#strict${jt}serializability`);
    throw tn.value = Yt.value, tn.unserializablePath = hn, tn;
  }
  function Oi(Yt) {
    return (0, t.X6Q)() ? {
      strictStateSerializability: !1,
      strictActionSerializability: !1,
      strictStateImmutability: !0,
      strictActionImmutability: !0,
      strictActionWithinNgZone: !1,
      strictActionTypeUniqueness: !1,
      ...Yt
    } : {
      strictStateSerializability: !1,
      strictActionSerializability: !1,
      strictStateImmutability: !1,
      strictActionImmutability: !1,
      strictActionWithinNgZone: !1,
      strictActionTypeUniqueness: !1
    };
  }
  function Ji({
    strictActionSerializability: Yt,
    strictStateSerializability: jt
  }) {
    return hn => Yt || jt ? function Rn(Yt, jt) {
      return function (hn, tn) {
        jt.action(tn) && Ei(ki(tn), "action");
        const di = Yt(hn, tn);
        return jt.state() && Ei(ki(di), "state"), di;
      };
    }(hn, {
      action: tn => Yt && !Sr(tn),
      state: () => jt
    }) : hn;
  }
  function Ao({
    strictActionImmutability: Yt,
    strictStateImmutability: jt
  }) {
    return hn => Yt || jt ? function fi(Yt, jt) {
      return function (hn, tn) {
        const di = jt.action(tn) ? Fi(tn) : tn,
          Gn = Yt(hn, di);
        return jt.state() ? Fi(Gn) : Gn;
      };
    }(hn, {
      action: tn => Yt && !Sr(tn),
      state: () => jt
    }) : hn;
  }
  function Sr(Yt) {
    return Yt.type.startsWith("@ngrx");
  }
  function us({
    strictActionWithinNgZone: Yt
  }) {
    return jt => Yt ? function Wt(Yt, jt) {
      return function (hn, tn) {
        if (jt.action(tn) && !t.R0b.isInAngularZone()) throw new Error(`Action '${tn.type}' running outside NgZone. ${pt}#strictactionwithinngzone`);
        return Yt(hn, tn);
      };
    }(jt, {
      action: hn => Yt && !Sr(hn)
    }) : jt;
  }
  function Ps(Yt) {
    return [{
      provide: Re,
      useValue: Yt
    }, {
      provide: We,
      useFactory: oi,
      deps: [Re]
    }, {
      provide: st,
      deps: [We],
      useFactory: Oi
    }, {
      provide: qe,
      multi: !0,
      deps: [st],
      useFactory: Ao
    }, {
      provide: qe,
      multi: !0,
      deps: [st],
      useFactory: Ji
    }, {
      provide: qe,
      multi: !0,
      deps: [st],
      useFactory: us
    }];
  }
  function hs() {
    return [{
      provide: q,
      multi: !0,
      deps: [st],
      useFactory: yo
    }];
  }
  function oi(Yt) {
    return Yt;
  }
  function yo(Yt) {
    if (!Yt.strictActionTypeUniqueness) return;
    const jt = Object.entries(L).filter(([, hn]) => hn > 1).map(([hn]) => hn);
    if (jt.length) throw new Error(`Action types are registered more than once, ${jt.map(hn => `"${hn}"`).join(", ")}. ${pt}#strictactiontypeuniqueness`);
  }
  function Qo(Yt = {}, jt = {}) {
    return [{
      provide: F,
      useFactory: ti
    }, {
      provide: Le,
      useValue: jt.initialState
    }, {
      provide: ke,
      useFactory: Go,
      deps: [Le]
    }, {
      provide: ae,
      useValue: Yt
    }, {
      provide: G,
      useExisting: Yt instanceof t.OlP ? Yt : ae
    }, {
      provide: ye,
      deps: [ae, [new t.tBr(G)]],
      useFactory: Ci
    }, {
      provide: Se,
      useValue: jt.metaReducers ? jt.metaReducers : []
    }, {
      provide: Rt,
      deps: [qe, Se],
      useFactory: ji
    }, {
      provide: fe,
      useValue: jt.reducerFactory ? jt.reducerFactory : Ct
    }, {
      provide: J,
      deps: [fe, Rt],
      useFactory: Ue
    }, W, Mt, Xt, yi, Jo, Ps(jt.runtimeChecks), hs()];
  }
  function xa(Yt, jt, hn = {}) {
    return [{
      provide: pe,
      multi: !0,
      useValue: Yt instanceof Object ? {} : hn
    }, {
      provide: Y,
      multi: !0,
      useValue: {
        key: Yt instanceof Object ? Yt.name : Yt,
        reducerFactory: hn instanceof t.OlP || !hn.reducerFactory ? Ct : hn.reducerFactory,
        metaReducers: hn instanceof t.OlP || !hn.metaReducers ? [] : hn.metaReducers,
        initialState: hn instanceof t.OlP || !hn.initialState ? void 0 : hn.initialState
      }
    }, {
      provide: be,
      deps: [pe, Y],
      useFactory: lo
    }, {
      provide: te,
      multi: !0,
      useValue: Yt instanceof Object ? Yt.reducer : jt
    }, {
      provide: le,
      multi: !0,
      useExisting: jt instanceof t.OlP ? jt : te
    }, {
      provide: n,
      multi: !0,
      deps: [te, [new t.tBr(le)]],
      useFactory: jo
    }, hs()];
  }
  let rs = (() => {
      class Yt {
        constructor(hn, tn, di, Gn, dn, wo) {}
      }
      return Yt.ɵfac = function (hn) {
        return new (hn || Yt)(t.LFG(j), t.LFG(Ke), t.LFG(Je), t.LFG(co), t.LFG(F, 8), t.LFG(q, 8));
      }, Yt.ɵmod = t.oAB({
        type: Yt
      }), Yt.ɵinj = t.cJS({}), Yt;
    })(),
    Js = (() => {
      class Yt {
        constructor(hn, tn, di, Gn, dn) {
          this.features = hn, this.featureReducers = tn, this.reducerManager = di;
          const wo = hn.map((Ro, _r) => {
            const Ts = tn.shift()[_r];
            return {
              ...Ro,
              reducers: Ts,
              initialState: Go(Ro.initialState)
            };
          });
          di.addFeatures(wo);
        }
        ngOnDestroy() {
          this.reducerManager.removeFeatures(this.features);
        }
      }
      return Yt.ɵfac = function (hn) {
        return new (hn || Yt)(t.LFG(be), t.LFG(n), t.LFG(je), t.LFG(rs), t.LFG(q, 8));
      }, Yt.ɵmod = t.oAB({
        type: Yt
      }), Yt.ɵinj = t.cJS({}), Yt;
    })(),
    ho = (() => {
      class Yt {
        static forRoot(hn, tn) {
          return {
            ngModule: rs,
            providers: [...Qo(hn, tn)]
          };
        }
        static forFeature(hn, tn, di = {}) {
          return {
            ngModule: Js,
            providers: [...xa(hn, tn, di)]
          };
        }
      }
      return Yt.ɵfac = function (hn) {
        return new (hn || Yt)();
      }, Yt.ɵmod = t.oAB({
        type: Yt
      }), Yt.ɵinj = t.cJS({}), Yt;
    })();
  function uo(...Yt) {
    return {
      reducer: Yt.pop(),
      types: Yt.map(tn => tn.type)
    };
  }
  function ri(Yt, ...jt) {
    const hn = new Map();
    for (const tn of jt) for (const di of tn.types) {
      const Gn = hn.get(di);
      hn.set(di, Gn ? (wo, Ro) => tn.reducer(Gn(wo, Ro), Ro) : tn.reducer);
    }
    return function (tn = Yt, di) {
      const Gn = hn.get(di.type);
      return Gn ? Gn(tn, di) : tn;
    };
  }
});
