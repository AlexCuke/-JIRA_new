// Extracted from main; webpack module 10493. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    eX: () => be,
    cL: () => yi,
    sQ: () => co,
    GW: () => J,
    l4: () => le
  });
  var t = i(56451),
    e = i(69751),
    a = i(77579),
    m = i(38502),
    d = i(60515),
    M = i(39646),
    b = i(62843),
    A = i(30576);
  class I {
    constructor(an, li, zn) {
      this.kind = an, this.value = li, this.error = zn, this.hasValue = "N" === an;
    }
    observe(an) {
      return O(this, an);
    }
    do(an, li, zn) {
      const {
        kind: $t,
        value: Mn,
        error: Qn
      } = this;
      return "N" === $t ? an?.(Mn) : "E" === $t ? li?.(Qn) : zn?.();
    }
    accept(an, li, zn) {
      var $t;
      return (0, A.m)(null === ($t = an) || void 0 === $t ? void 0 : $t.next) ? this.observe(an) : this.do(an, li, zn);
    }
    toObservable() {
      const {
          kind: an,
          value: li,
          error: zn
        } = this,
        $t = "N" === an ? (0, M.of)(li) : "E" === an ? (0, b._)(() => zn) : "C" === an ? d.E : 0;
      if (!$t) throw new TypeError(`Unexpected notification kind ${an}`);
      return $t;
    }
    static createNext(an) {
      return new I("N", an);
    }
    static createError(an) {
      return new I("E", void 0, an);
    }
    static createComplete() {
      return I.completeNotification;
    }
  }
  function O(vt, an) {
    var li, zn, $t;
    const {
      kind: Mn,
      value: Qn,
      error: In
    } = vt;
    if ("string" != typeof Mn) throw new TypeError("Invalid notification, missing \"kind\"");
    "N" === Mn ? null === (li = an.next) || void 0 === li || li.call(an, Qn) : "E" === Mn ? null === (zn = an.error) || void 0 === zn || zn.call(an, In) : null === ($t = an.complete) || void 0 === $t || $t.call(an);
  }
  I.completeNotification = new I("C");
  var L = i(54482),
    C = i(25403),
    f = i(54004),
    E = i(70262),
    h = i(39300),
    x = i(38421);
  function u(vt, an, li, zn) {
    return (0, L.e)(($t, Mn) => {
      let Qn;
      an && "function" != typeof an ? {
        duration: li,
        element: Qn,
        connector: zn
      } = an : Qn = an;
      const In = new Map(),
        ui = Xn => {
          In.forEach(Xn), Xn(Mn);
        },
        To = Xn => ui(Yi => Yi.error(Xn)),
        bi = new T(Mn, Xn => {
          try {
            const Yi = vt(Xn);
            let Eo = In.get(Yi);
            if (!Eo) {
              In.set(Yi, Eo = zn ? zn() : new a.x());
              const Fo = function qn(Xn, Yi) {
                const Eo = new e.y(Fo => {
                  bi.activeGroups++;
                  const br = Yi.subscribe(Fo);
                  return () => {
                    br.unsubscribe(), 0 == --bi.activeGroups && bi.teardownAttempted && bi.unsubscribe();
                  };
                });
                return Eo.key = Xn, Eo;
              }(Yi, Eo);
              if (Mn.next(Fo), li) {
                const br = new C.Q(Eo, () => {
                  Eo.complete(), br?.unsubscribe();
                }, void 0, void 0, () => In.delete(Yi));
                bi.add((0, x.Xf)(li(Fo)).subscribe(br));
              }
            }
            Eo.next(Qn ? Qn(Xn) : Xn);
          } catch (Yi) {
            To(Yi);
          }
        }, () => ui(Xn => Xn.complete()), To, () => In.clear());
      $t.subscribe(bi);
    });
  }
  class T extends C.Q {
    constructor() {
      super(...arguments), this.activeGroups = 0, this.teardownAttempted = !1;
    }
    unsubscribe() {
      this.teardownAttempted = !0, 0 === this.activeGroups && super.unsubscribe();
    }
  }
  var R = i(95577);
  function B(vt, an) {
    return an ? li => li.pipe(B((zn, $t) => (0, x.Xf)(vt(zn, $t)).pipe((0, f.U)((Mn, Qn) => an(zn, Mn, $t, Qn))))) : (0, L.e)((li, zn) => {
      let $t = 0,
        Mn = null,
        Qn = !1;
      li.subscribe(new C.Q(zn, In => {
        Mn || (Mn = new C.Q(zn, void 0, () => {
          Mn = null, Qn && zn.complete();
        }), (0, x.Xf)(vt(In, $t++)).subscribe(Mn));
      }, () => {
        Qn = !0, !Mn && zn.complete();
      }));
    });
  }
  var j = i(95698),
    W = i(94650),
    F = i(89653);
  const Le = {
      dispatch: !0,
      useEffectsErrorHandler: !0
    },
    ke = "__@ngrx/effects_create__";
  function J(vt, an) {
    const li = vt(),
      zn = {
        ...Le,
        ...an
      };
    return Object.defineProperty(li, ke, {
      value: zn
    }), li;
  }
  function Y(vt) {
    return Object.getPrototypeOf(vt);
  }
  function G(vt, an, li) {
    const zn = Y(vt).constructor.name,
      $t = function ae(vt) {
        return function fe(vt) {
          return Object.getOwnPropertyNames(vt).filter(zn => !(!vt[zn] || !vt[zn].hasOwnProperty(ke)) && vt[zn][ke].hasOwnProperty("dispatch")).map(zn => ({
            propertyName: zn,
            ...vt[zn][ke]
          }));
        }(vt);
      }(vt).map(({
        propertyName: Mn,
        dispatch: Qn,
        useEffectsErrorHandler: In
      }) => {
        const ui = "function" == typeof vt[Mn] ? vt[Mn]() : vt[Mn],
          To = In ? li(ui, an) : ui;
        return !1 === Qn ? To.pipe((0, m.l)()) : To.pipe(function v() {
          return (0, L.e)((vt, an) => {
            vt.subscribe(new C.Q(an, li => {
              an.next(I.createNext(li));
            }, () => {
              an.next(I.createComplete()), an.complete();
            }, li => {
              an.next(I.createError(li)), an.complete();
            }));
          });
        }()).pipe((0, f.U)(qn => ({
          effect: vt[Mn],
          notification: qn,
          propertyName: Mn,
          sourceName: zn,
          sourceInstance: vt
        })));
      });
    return (0, t.T)(...$t);
  }
  const te = 10;
  function pe(vt, an, li = te) {
    return vt.pipe((0, E.K)(zn => (an && an.handleError(zn), li <= 1 ? vt : pe(vt, an, li - 1))));
  }
  let be = (() => {
    class vt extends e.y {
      constructor(li) {
        super(), li && (this.source = li);
      }
      lift(li) {
        const zn = new vt();
        return zn.source = this, zn.operator = li, zn;
      }
    }
    return vt.ɵfac = function (li) {
      return new (li || vt)(W.LFG(F.Y$));
    }, vt.ɵprov = W.Yz7({
      token: vt,
      factory: vt.ɵfac,
      providedIn: "root"
    }), vt;
  })();
  function le(...vt) {
    return (0, h.h)(an => vt.some(li => "string" == typeof li ? li === an.type : li.type === an.type));
  }
  const n = new W.OlP("@ngrx/effects Internal Root Guard"),
    Se = new W.OlP("@ngrx/effects User Provided Effects"),
    qe = new W.OlP("@ngrx/effects Internal Root Effects"),
    Rt = new W.OlP("@ngrx/effects Root Effects"),
    We = new W.OlP("@ngrx/effects Internal Feature Effects"),
    Re = new W.OlP("@ngrx/effects Feature Effects"),
    st = new W.OlP("@ngrx/effects Effects Error Handler", {
      providedIn: "root",
      factory: () => pe
    }),
    q = "@ngrx/effects/init";
  (0, F.PH)(q);
  const Ue = "ngrxOnIdentifyEffects",
    Ee = "ngrxOnInitEffects";
  function je(vt) {
    return Mt(vt, Ee);
  }
  function Mt(vt, an) {
    return vt && an in vt && "function" == typeof vt[an];
  }
  let Je = (() => {
    class vt extends a.x {
      constructor(li, zn) {
        super(), this.errorHandler = li, this.effectsErrorHandler = zn;
      }
      addEffects(li) {
        this.next(li);
      }
      toActions() {
        return this.pipe(u(Y), (0, R.z)(li => li.pipe(u(Xt))), (0, R.z)(li => {
          const zn = li.pipe(B(Mn => function Nn(vt, an) {
              return li => {
                const zn = G(li, vt, an);
                return function Ze(vt) {
                  return Mt(vt, "ngrxOnRunEffects");
                }(li) ? li.ngrxOnRunEffects(zn) : zn;
              };
            }(this.errorHandler, this.effectsErrorHandler)(Mn)), (0, f.U)(Mn => (function ut(vt, an) {
              if ("N" === vt.notification.kind) {
                const li = vt.notification.value;
                !function Ct(vt) {
                  return "function" != typeof vt && vt && vt.type && "string" == typeof vt.type;
                }(li) && an.handleError(new Error(`Effect ${function Ft({
                  propertyName: vt,
                  sourceInstance: an,
                  sourceName: li
                }) {
                  const zn = "function" == typeof an[vt];
                  return `"${li}.${String(vt)}${zn ? "()" : ""}"`;
                }(vt)} dispatched an invalid action: ${function Et(vt) {
                  try {
                    return JSON.stringify(vt);
                  } catch {
                    return vt;
                  }
                }(li)}`));
              }
            }(Mn, this.errorHandler), Mn.notification)), (0, h.h)(Mn => "N" === Mn.kind && null != Mn.value), function y() {
              return (0, L.e)((vt, an) => {
                vt.subscribe(new C.Q(an, li => O(li, an)));
              });
            }()),
            $t = li.pipe((0, j.q)(1), (0, h.h)(je), (0, f.U)(Mn => Mn.ngrxOnInitEffects()));
          return (0, t.T)(zn, $t);
        }));
      }
    }
    return vt.ɵfac = function (li) {
      return new (li || vt)(W.LFG(W.qLn), W.LFG(st));
    }, vt.ɵprov = W.Yz7({
      token: vt,
      factory: vt.ɵfac,
      providedIn: "root"
    }), vt;
  })();
  function Xt(vt) {
    return function Me(vt) {
      return Mt(vt, Ue);
    }(vt) ? vt.ngrxOnIdentifyEffects() : "";
  }
  let Pi = (() => {
      class vt {
        constructor(li, zn) {
          this.effectSources = li, this.store = zn, this.effectsSubscription = null;
        }
        get isStarted() {
          return !!this.effectsSubscription;
        }
        start() {
          this.effectsSubscription || (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store));
        }
        ngOnDestroy() {
          this.effectsSubscription && (this.effectsSubscription.unsubscribe(), this.effectsSubscription = null);
        }
      }
      return vt.ɵfac = function (li) {
        return new (li || vt)(W.LFG(Je), W.LFG(F.yh));
      }, vt.ɵprov = W.Yz7({
        token: vt,
        factory: vt.ɵfac,
        providedIn: "root"
      }), vt;
    })(),
    Ii = (() => {
      class vt {
        constructor(li, zn, $t, Mn, Qn, In, ui) {
          this.sources = li, zn.start(), Mn.forEach(To => li.addEffects(To)), $t.dispatch({
            type: q
          });
        }
        addEffects(li) {
          this.sources.addEffects(li);
        }
      }
      return vt.ɵfac = function (li) {
        return new (li || vt)(W.LFG(Je), W.LFG(Pi), W.LFG(F.yh), W.LFG(Rt), W.LFG(F.cr, 8), W.LFG(F.CK, 8), W.LFG(n, 8));
      }, vt.ɵmod = W.oAB({
        type: vt
      }), vt.ɵinj = W.cJS({}), vt;
    })(),
    yi = (() => {
      class vt {
        constructor(li, zn, $t, Mn) {
          zn.forEach(Qn => Qn.forEach(In => li.addEffects(In)));
        }
      }
      return vt.ɵfac = function (li) {
        return new (li || vt)(W.LFG(Ii), W.LFG(Re), W.LFG(F.cr, 8), W.LFG(F.CK, 8));
      }, vt.ɵmod = W.oAB({
        type: vt
      }), vt.ɵinj = W.cJS({}), vt;
    })(),
    co = (() => {
      class vt {
        static forFeature(...li) {
          const zn = li.flat();
          return {
            ngModule: yi,
            providers: [zn, {
              provide: We,
              multi: !0,
              useValue: zn
            }, {
              provide: Se,
              multi: !0,
              useValue: []
            }, {
              provide: Re,
              multi: !0,
              useFactory: Jo,
              deps: [We, Se]
            }]
          };
        }
        static forRoot(...li) {
          const zn = li.flat();
          return {
            ngModule: Ii,
            providers: [zn, {
              provide: qe,
              useValue: [zn]
            }, {
              provide: n,
              useFactory: pt
            }, {
              provide: Se,
              multi: !0,
              useValue: []
            }, {
              provide: Rt,
              useFactory: Jo,
              deps: [qe, Se]
            }]
          };
        }
      }
      return vt.ɵfac = function (li) {
        return new (li || vt)();
      }, vt.ɵmod = W.oAB({
        type: vt
      }), vt.ɵinj = W.cJS({}), vt;
    })();
  function Jo(vt, an) {
    const li = [];
    for (const zn of vt) li.push(...zn);
    for (const zn of an) li.push(...zn);
    return function fr(vt) {
      return vt.map(an => (0, W.f3M)(an));
    }(li);
  }
  function pt() {
    const vt = (0, W.f3M)(Pi, {
        optional: !0,
        skipSelf: !0
      }),
      an = (0, W.f3M)(qe, {
        self: !0
      });
    if ((1 !== an.length || 0 !== an[0].length) && vt) throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
    return "guarded";
  }
});
