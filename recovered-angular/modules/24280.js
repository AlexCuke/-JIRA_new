// Extracted from main; webpack module 24280. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    m1: () => ke
  });
  var t = i(69751),
    e = i(50727),
    a = i(53101),
    m = i(4707),
    d = i(45191),
    M = i(39646),
    b = i(233),
    A = i(60515),
    N = i(62843),
    I = i(17159),
    O = i(39841),
    L = i(77579),
    C = i(85363),
    v = i(18505),
    f = i(11365),
    E = i(54004),
    h = i(70262),
    x = i(82722),
    u = i(95698),
    T = i(71884),
    R = i(34782),
    B = i(94650);
  function j(G) {
    return "function" == typeof G.ngrxOnStoreInit;
  }
  function W(G) {
    return "function" == typeof G.ngrxOnStateInit;
  }
  const Le = new B.OlP("@ngrx/component-store Initial State");
  let ke = (() => {
    class G {
      constructor(pe) {
        this.destroySubject$ = new m.t(1), this.destroy$ = this.destroySubject$.asObservable(), this.stateSubject$ = new m.t(1), this.isInitialized = !1, this.state$ = this.select(be => be), this.ɵhasProvider = !1, pe && this.initState(pe), this.checkProviderForHooks();
      }
      ngOnDestroy() {
        this.stateSubject$.complete(), this.destroySubject$.next();
      }
      updater(pe) {
        return be => {
          let n,
            le = !0;
          const qe = ((0, d.b)(be) ? be : (0, M.of)(be)).pipe((0, C.Q)(b.N), (0, v.b)(() => this.assertStateIsInitialized()), (0, f.M)(this.stateSubject$), (0, E.U)(([Rt, We]) => pe(We, Rt)), (0, v.b)(Rt => this.stateSubject$.next(Rt)), (0, h.K)(Rt => le ? (n = Rt, A.E) : (0, N._)(() => Rt)), (0, x.R)(this.destroy$)).subscribe();
          if (n) throw n;
          return le = !1, qe;
        };
      }
      initState(pe) {
        (0, I.x)([pe], b.N).subscribe(be => {
          this.isInitialized = !0, this.stateSubject$.next(be);
        });
      }
      setState(pe) {
        "function" != typeof pe ? this.initState(pe) : this.updater(pe)();
      }
      patchState(pe) {
        const be = "function" == typeof pe ? pe(this.get()) : pe;
        this.updater((le, n) => ({
          ...le,
          ...n
        }))(be);
      }
      get(pe) {
        let be;
        return this.assertStateIsInitialized(), this.stateSubject$.pipe((0, u.q)(1)).subscribe(le => {
          be = pe ? pe(le) : le;
        }), be;
      }
      select(...pe) {
        const {
          observablesOrSelectorsObject: be,
          projector: le,
          config: n
        } = function J(G) {
          const te = Array.from(G);
          let pe = {
            debounce: !1
          };
          if (function fe(G) {
            return typeof G.debounce < "u";
          }(te[te.length - 1]) && (pe = {
            ...pe,
            ...te.pop()
          }), 1 === te.length && "function" != typeof te[0]) return {
            observablesOrSelectorsObject: te[0],
            projector: void 0,
            config: pe
          };
          const be = te.pop();
          return {
            observablesOrSelectorsObject: te,
            projector: be,
            config: pe
          };
        }(pe);
        return (function ye(G, te) {
          return Array.isArray(G) && 0 === G.length && te;
        }(be, le) ? this.stateSubject$ : (0, O.a)(be)).pipe(n.debounce ? function y() {
          return G => new t.y(te => {
            let pe, be;
            const le = new e.w0();
            return le.add(G.subscribe({
              complete: () => {
                pe && te.next(be), te.complete();
              },
              error: n => {
                te.error(n);
              },
              next: n => {
                be = n, pe || (pe = a.E.schedule(() => {
                  te.next(be), pe = void 0;
                }), le.add(pe));
              }
            })), le;
          });
        }() : G => G, le ? (0, E.U)(qe => be.length > 0 && Array.isArray(qe) ? le(...qe) : le(qe)) : G => G, (0, T.x)(), (0, R.d)({
          refCount: !0,
          bufferSize: 1
        }), (0, x.R)(this.destroy$));
      }
      effect(pe) {
        const be = new L.x();
        return pe(be).pipe((0, x.R)(this.destroy$)).subscribe(), le => ((0, d.b)(le) ? le : (0, M.of)(le)).pipe((0, x.R)(this.destroy$)).subscribe(Se => {
          be.next(Se);
        });
      }
      checkProviderForHooks() {
        a.E.schedule(() => {
          if ((0, B.X6Q)() && (j(this) || W(this)) && !this.ɵhasProvider) {
            const pe = [j(this) ? "OnStoreInit" : "", W(this) ? "OnStateInit" : ""].filter(be => be);
            console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${pe.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`);
          }
        });
      }
      assertStateIsInitialized() {
        if (!this.isInitialized) throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`);
      }
    }
    return G.ɵfac = function (pe) {
      return new (pe || G)(B.LFG(Le, 8));
    }, G.ɵprov = B.Yz7({
      token: G,
      factory: G.ɵfac
    }), G;
  })();
});
