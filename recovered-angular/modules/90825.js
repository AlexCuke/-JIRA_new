// Extracted from main; webpack module 90825. Factory, not an ES module.
((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  "use strict";

  __webpack_require__.d(__webpack_exports__, {
    FT: () => StoreDevtoolsModule
  });
  var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94650),
    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89653),
    rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60515),
    rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69751),
    rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39646),
    rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56451),
    rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(233),
    rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4707),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13099),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39300),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54004),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24351),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17414),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78372),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70262),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95698),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82722),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63900),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35684),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85363),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11365),
    rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(22940);
  const PERFORM_ACTION = "PERFORM_ACTION",
    REFRESH = "REFRESH",
    RESET = "RESET",
    ROLLBACK = "ROLLBACK",
    COMMIT = "COMMIT",
    SWEEP = "SWEEP",
    TOGGLE_ACTION = "TOGGLE_ACTION",
    SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE",
    JUMP_TO_STATE = "JUMP_TO_STATE",
    JUMP_TO_ACTION = "JUMP_TO_ACTION",
    IMPORT_STATE = "IMPORT_STATE",
    LOCK_CHANGES = "LOCK_CHANGES",
    PAUSE_RECORDING = "PAUSE_RECORDING";
  class PerformAction {
    constructor(V, i) {
      if (this.action = V, this.timestamp = i, this.type = PERFORM_ACTION, typeof V.type > "u") throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
    }
  }
  class Refresh {
    constructor() {
      this.type = REFRESH;
    }
  }
  class Reset {
    constructor(V) {
      this.timestamp = V, this.type = RESET;
    }
  }
  class Rollback {
    constructor(V) {
      this.timestamp = V, this.type = ROLLBACK;
    }
  }
  class Commit {
    constructor(V) {
      this.timestamp = V, this.type = COMMIT;
    }
  }
  class Sweep {
    constructor() {
      this.type = SWEEP;
    }
  }
  class ToggleAction {
    constructor(V) {
      this.id = V, this.type = TOGGLE_ACTION;
    }
  }
  class SetActionsActive {
    constructor(V, i, t = !0) {
      this.start = V, this.end = i, this.active = t, this.type = SET_ACTIONS_ACTIVE;
    }
  }
  class JumpToState {
    constructor(V) {
      this.index = V, this.type = JUMP_TO_STATE;
    }
  }
  class JumpToAction {
    constructor(V) {
      this.actionId = V, this.type = JUMP_TO_ACTION;
    }
  }
  class ImportState {
    constructor(V) {
      this.nextLiftedState = V, this.type = IMPORT_STATE;
    }
  }
  class LockChanges {
    constructor(V) {
      this.status = V, this.type = LOCK_CHANGES;
    }
  }
  class PauseRecording {
    constructor(V) {
      this.status = V, this.type = PAUSE_RECORDING;
    }
  }
  class StoreDevtoolsConfig {
    constructor() {
      this.maxAge = !1;
    }
  }
  const STORE_DEVTOOLS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Options"),
    INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Initial Config");
  function noMonitor() {
    return null;
  }
  const DEFAULT_NAME = "NgRx Store DevTools";
  function createConfig(Ae) {
    const V = {
        maxAge: !1,
        monitor: noMonitor,
        actionSanitizer: void 0,
        stateSanitizer: void 0,
        name: DEFAULT_NAME,
        serialize: !1,
        logOnly: !1,
        autoPause: !1,
        trace: !1,
        traceLimit: 75,
        features: {
          pause: !0,
          lock: !0,
          persist: !0,
          export: !0,
          import: "custom",
          jump: !0,
          skip: !0,
          reorder: !0,
          dispatch: !0,
          test: !0
        }
      },
      i = "function" == typeof Ae ? Ae() : Ae,
      a = Object.assign({}, V, {
        features: i.features || !!i.logOnly && {
          pause: !0,
          export: !0,
          test: !0
        } || V.features
      }, i);
    if (a.maxAge && a.maxAge < 2) throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);
    return a;
  }
  function difference(Ae, V) {
    return Ae.filter(i => V.indexOf(i) < 0);
  }
  function unliftState(Ae) {
    const {
      computedStates: V,
      currentStateIndex: i
    } = Ae;
    if (i >= V.length) {
      const {
        state: e
      } = V[V.length - 1];
      return e;
    }
    const {
      state: t
    } = V[i];
    return t;
  }
  function unliftAction(Ae) {
    return Ae.actionsById[Ae.nextActionId - 1];
  }
  function liftAction(Ae) {
    return new PerformAction(Ae, +Date.now());
  }
  function sanitizeActions(Ae, V) {
    return Object.keys(V).reduce((i, t) => {
      const e = Number(t);
      return i[e] = sanitizeAction(Ae, V[e], e), i;
    }, {});
  }
  function sanitizeAction(Ae, V, i) {
    return {
      ...V,
      action: Ae(V.action, i)
    };
  }
  function sanitizeStates(Ae, V) {
    return V.map((i, t) => ({
      state: sanitizeState(Ae, i.state, t),
      error: i.error
    }));
  }
  function sanitizeState(Ae, V, i) {
    return Ae(V, i);
  }
  function shouldFilterActions(Ae) {
    return Ae.predicate || Ae.actionsSafelist || Ae.actionsBlocklist;
  }
  function filterLiftedState(Ae, V, i, t) {
    const e = [],
      a = {},
      m = [];
    return Ae.stagedActionIds.forEach((d, M) => {
      const b = Ae.actionsById[d];
      b && (M && isActionFiltered(Ae.computedStates[M], b, V, i, t) || (a[d] = b, e.push(d), m.push(Ae.computedStates[M])));
    }), {
      ...Ae,
      stagedActionIds: e,
      actionsById: a,
      computedStates: m
    };
  }
  function isActionFiltered(Ae, V, i, t, e) {
    const a = i && !i(Ae, V.action),
      m = t && !V.action.type.match(t.map(M => escapeRegExp(M)).join("|")),
      d = e && V.action.type.match(e.map(M => escapeRegExp(M)).join("|"));
    return a || m || d;
  }
  function escapeRegExp(Ae) {
    return Ae.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  let DevtoolsDispatcher = (() => {
    class Ae extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO {}
    return Ae.ɵfac = function () {
      let V;
      return function (t) {
        return (V || (V = _angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(Ae)))(t || Ae);
      };
    }(), Ae.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
      token: Ae,
      factory: Ae.ɵfac
    }), Ae;
  })();
  const ExtensionActionTypes = {
      START: "START",
      DISPATCH: "DISPATCH",
      STOP: "STOP",
      ACTION: "ACTION"
    },
    REDUX_DEVTOOLS_EXTENSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Redux Devtools Extension");
  let DevtoolsExtension = (() => {
    class DevtoolsExtension {
      constructor(Ae, V, i) {
        this.config = V, this.dispatcher = i, this.devtoolsExtension = Ae, this.createActionStreams();
      }
      notify(Ae, V) {
        if (this.devtoolsExtension) if (Ae.type === PERFORM_ACTION) {
          if (V.isLocked || V.isPaused) return;
          const i = unliftState(V);
          if (shouldFilterActions(this.config) && isActionFiltered(i, Ae, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) return;
          const t = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, i, V.currentStateIndex) : i,
            e = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, Ae, V.nextActionId) : Ae;
          this.sendToReduxDevtools(() => this.extensionConnection.send(e, t));
        } else {
          const i = {
            ...V,
            stagedActionIds: V.stagedActionIds,
            actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, V.actionsById) : V.actionsById,
            computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, V.computedStates) : V.computedStates
          };
          this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, i, this.getExtensionConfig(this.config)));
        }
      }
      createChangesObservable() {
        return this.devtoolsExtension ? new rxjs__WEBPACK_IMPORTED_MODULE_3__.y(Ae => {
          const V = this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
          return this.extensionConnection = V, V.init(), V.subscribe(i => Ae.next(i)), V.unsubscribe;
        }) : rxjs__WEBPACK_IMPORTED_MODULE_2__.E;
      }
      createActionStreams() {
        const Ae = this.createChangesObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()),
          V = Ae.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(d => d.type === ExtensionActionTypes.START)),
          i = Ae.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(d => d.type === ExtensionActionTypes.STOP)),
          t = Ae.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(d => d.type === ExtensionActionTypes.DISPATCH), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(d => this.unwrapAction(d.payload)), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)(d => d.type === IMPORT_STATE ? this.dispatcher.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(M => M.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(1e3), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(1e3), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(() => d), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(() => (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(d)), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)) : (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(d))),
          a = Ae.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(d => d.type === ExtensionActionTypes.ACTION), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(d => this.unwrapAction(d.payload))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(i)),
          m = t.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(i));
        this.start$ = V.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(i)), this.actions$ = this.start$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => a)), this.liftedActions$ = this.start$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => m));
      }
      unwrapAction(action) {
        return "string" == typeof action ? eval(`(${action})`) : action;
      }
      getExtensionConfig(Ae) {
        const V = {
          name: Ae.name,
          features: Ae.features,
          serialize: Ae.serialize,
          autoPause: Ae.autoPause ?? !1,
          trace: Ae.trace ?? !1,
          traceLimit: Ae.traceLimit ?? 75
        };
        return !1 !== Ae.maxAge && (V.maxAge = Ae.maxAge), V;
      }
      sendToReduxDevtools(Ae) {
        try {
          Ae();
        } catch (V) {
          console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", V);
        }
      }
    }
    return DevtoolsExtension.ɵfac = function Ae(V) {
      return new (V || DevtoolsExtension)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(REDUX_DEVTOOLS_EXTENSION), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher));
    }, DevtoolsExtension.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
      token: DevtoolsExtension,
      factory: DevtoolsExtension.ɵfac
    }), DevtoolsExtension;
  })();
  const INIT_ACTION = {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg
    },
    RECOMPUTE = "@ngrx/store-devtools/recompute",
    RECOMPUTE_ACTION = {
      type: RECOMPUTE
    };
  function computeNextEntry(Ae, V, i, t, e) {
    if (t) return {
      state: i,
      error: "Interrupted by an error up the chain"
    };
    let m,
      a = i;
    try {
      a = Ae(i, V);
    } catch (d) {
      m = d.toString(), e.handleError(d);
    }
    return {
      state: a,
      error: m
    };
  }
  function recomputeStates(Ae, V, i, t, e, a, m, d, M) {
    if (V >= Ae.length && Ae.length === a.length) return Ae;
    const b = Ae.slice(0, V),
      A = a.length - (M ? 1 : 0);
    for (let N = V; N < A; N++) {
      const I = a[N],
        O = e[I].action,
        L = b[N - 1],
        C = L ? L.state : t,
        v = L ? L.error : void 0,
        E = m.indexOf(I) > -1 ? L : computeNextEntry(i, O, C, v, d);
      b.push(E);
    }
    return M && b.push(Ae[Ae.length - 1]), b;
  }
  function liftInitialState(Ae, V) {
    return {
      monitorState: V(void 0, {}),
      nextActionId: 1,
      actionsById: {
        0: liftAction(INIT_ACTION)
      },
      stagedActionIds: [0],
      skippedActionIds: [],
      committedState: Ae,
      currentStateIndex: 0,
      computedStates: [],
      isLocked: !1,
      isPaused: !1
    };
  }
  function liftReducerWith(Ae, V, i, t, e = {}) {
    return a => (m, d) => {
      let {
        monitorState: M,
        actionsById: b,
        nextActionId: A,
        stagedActionIds: N,
        skippedActionIds: I,
        committedState: O,
        currentStateIndex: L,
        computedStates: C,
        isLocked: v,
        isPaused: f
      } = m || V;
      function E(u) {
        let T = u,
          R = N.slice(1, T + 1);
        for (let B = 0; B < R.length; B++) {
          if (C[B + 1].error) {
            T = B, R = N.slice(1, T + 1);
            break;
          }
          delete b[R[B]];
        }
        I = I.filter(B => -1 === R.indexOf(B)), N = [0, ...N.slice(T + 1)], O = C[T].state, C = C.slice(T), L = L > T ? L - T : 0;
      }
      function h() {
        b = {
          0: liftAction(INIT_ACTION)
        }, A = 1, N = [0], I = [], O = C[L].state, L = 0, C = [];
      }
      m || (b = Object.create(b));
      let x = 0;
      switch (d.type) {
        case LOCK_CHANGES:
          v = d.status, x = 1 / 0;
          break;
        case PAUSE_RECORDING:
          f = d.status, f ? (N = [...N, A], b[A] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now()), A++, x = N.length - 1, C = C.concat(C[C.length - 1]), L === N.length - 2 && L++, x = 1 / 0) : h();
          break;
        case RESET:
          b = {
            0: liftAction(INIT_ACTION)
          }, A = 1, N = [0], I = [], O = Ae, L = 0, C = [];
          break;
        case COMMIT:
          h();
          break;
        case ROLLBACK:
          b = {
            0: liftAction(INIT_ACTION)
          }, A = 1, N = [0], I = [], L = 0, C = [];
          break;
        case TOGGLE_ACTION:
          {
            const {
              id: u
            } = d;
            I = -1 === I.indexOf(u) ? [u, ...I] : I.filter(R => R !== u), x = N.indexOf(u);
            break;
          }
        case SET_ACTIONS_ACTIVE:
          {
            const {
                start: u,
                end: T,
                active: R
              } = d,
              B = [];
            for (let y = u; y < T; y++) B.push(y);
            I = R ? difference(I, B) : [...I, ...B], x = N.indexOf(u);
            break;
          }
        case JUMP_TO_STATE:
          L = d.index, x = 1 / 0;
          break;
        case JUMP_TO_ACTION:
          {
            const u = N.indexOf(d.actionId);
            -1 !== u && (L = u), x = 1 / 0;
            break;
          }
        case SWEEP:
          N = difference(N, I), I = [], L = Math.min(L, N.length - 1);
          break;
        case PERFORM_ACTION:
          {
            if (v) return m || V;
            if (f || m && isActionFiltered(m.computedStates[L], d, e.predicate, e.actionsSafelist, e.actionsBlocklist)) {
              const T = C[C.length - 1];
              C = [...C.slice(0, -1), computeNextEntry(a, d.action, T.state, T.error, i)], x = 1 / 0;
              break;
            }
            e.maxAge && N.length === e.maxAge && E(1), L === N.length - 1 && L++;
            const u = A++;
            b[u] = d, N = [...N, u], x = N.length - 1;
            break;
          }
        case IMPORT_STATE:
          ({
            monitorState: M,
            actionsById: b,
            nextActionId: A,
            stagedActionIds: N,
            skippedActionIds: I,
            committedState: O,
            currentStateIndex: L,
            computedStates: C,
            isLocked: v,
            isPaused: f
          } = d.nextLiftedState);
          break;
        case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:
          x = 0, e.maxAge && N.length > e.maxAge && (C = recomputeStates(C, x, a, O, b, N, I, i, f), E(N.length - e.maxAge), x = 1 / 0);
          break;
        case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:
          if (C.filter(T => T.error).length > 0) x = 0, e.maxAge && N.length > e.maxAge && (C = recomputeStates(C, x, a, O, b, N, I, i, f), E(N.length - e.maxAge), x = 1 / 0);else {
            if (!f && !v) {
              L === N.length - 1 && L++;
              const T = A++;
              b[T] = new PerformAction(d, +Date.now()), N = [...N, T], x = N.length - 1, C = recomputeStates(C, x, a, O, b, N, I, i, f);
            }
            C = C.map(T => ({
              ...T,
              state: a(T.state, RECOMPUTE_ACTION)
            })), L = N.length - 1, e.maxAge && N.length > e.maxAge && E(N.length - e.maxAge), x = 1 / 0;
          }
          break;
        default:
          x = 1 / 0;
      }
      return C = recomputeStates(C, x, a, O, b, N, I, i, f), M = t(M, d), {
        monitorState: M,
        actionsById: b,
        nextActionId: A,
        stagedActionIds: N,
        skippedActionIds: I,
        committedState: O,
        currentStateIndex: L,
        computedStates: C,
        isLocked: v,
        isPaused: f
      };
    };
  }
  let StoreDevtools = (() => {
    class Ae {
      constructor(i, t, e, a, m, d, M, b) {
        const A = liftInitialState(M, b.monitor),
          N = liftReducerWith(M, A, d, b.monitor, b),
          I = (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)((0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(t.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)), a.actions$).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(liftAction)), i, a.liftedActions$).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.Q)(rxjs__WEBPACK_IMPORTED_MODULE_18__.N)),
          O = e.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(N)),
          L = new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),
          C = I.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(O), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(({
            state: h
          }, [x, u]) => {
            let T = u(h, x);
            return x.type !== PERFORM_ACTION && shouldFilterActions(b) && (T = filterLiftedState(T, b.predicate, b.actionsSafelist, b.actionsBlocklist)), a.notify(x, T), {
              state: T,
              action: x
            };
          }, {
            state: A,
            action: null
          })).subscribe(({
            state: h,
            action: x
          }) => {
            L.next(h), x.type === PERFORM_ACTION && m.next(x.action);
          }),
          v = a.start$.subscribe(() => {
            this.refresh();
          }),
          f = L.asObservable(),
          E = f.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(unliftState));
        this.extensionStartSubscription = v, this.stateSubscription = C, this.dispatcher = i, this.liftedState = f, this.state = E;
      }
      dispatch(i) {
        this.dispatcher.next(i);
      }
      next(i) {
        this.dispatcher.next(i);
      }
      error(i) {}
      complete() {}
      performAction(i) {
        this.dispatch(new PerformAction(i, +Date.now()));
      }
      refresh() {
        this.dispatch(new Refresh());
      }
      reset() {
        this.dispatch(new Reset(+Date.now()));
      }
      rollback() {
        this.dispatch(new Rollback(+Date.now()));
      }
      commit() {
        this.dispatch(new Commit(+Date.now()));
      }
      sweep() {
        this.dispatch(new Sweep());
      }
      toggleAction(i) {
        this.dispatch(new ToggleAction(i));
      }
      jumpToAction(i) {
        this.dispatch(new JumpToAction(i));
      }
      jumpToState(i) {
        this.dispatch(new JumpToState(i));
      }
      importState(i) {
        this.dispatch(new ImportState(i));
      }
      lockChanges(i) {
        this.dispatch(new LockChanges(i));
      }
      pauseRecording(i) {
        this.dispatch(new PauseRecording(i));
      }
    }
    return Ae.ɵfac = function (i) {
      return new (i || Ae)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsExtension), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6), _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG));
    }, Ae.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
      token: Ae,
      factory: Ae.ɵfac
    }), Ae;
  })();
  const IS_EXTENSION_OR_MONITOR_PRESENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
  function createIsExtensionOrMonitorPresent(Ae, V) {
    return Boolean(Ae) || V.monitor !== noMonitor;
  }
  function createReduxDevtoolsExtension() {
    const Ae = "__REDUX_DEVTOOLS_EXTENSION__";
    return "object" == typeof window && typeof window[Ae] < "u" ? window[Ae] : null;
  }
  function provideStoreDevtools(Ae = {}) {
    return (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.MR2)([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
      provide: INITIAL_OPTIONS,
      useValue: Ae
    }, {
      provide: IS_EXTENSION_OR_MONITOR_PRESENT,
      deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
      useFactory: createIsExtensionOrMonitorPresent
    }, {
      provide: REDUX_DEVTOOLS_EXTENSION,
      useFactory: createReduxDevtoolsExtension
    }, {
      provide: STORE_DEVTOOLS_CONFIG,
      deps: [INITIAL_OPTIONS],
      useFactory: createConfig
    }, {
      provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,
      deps: [StoreDevtools],
      useFactory: createStateObservable
    }, {
      provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK,
      useExisting: DevtoolsDispatcher
    }]);
  }
  function createStateObservable(Ae) {
    return Ae.state;
  }
  let StoreDevtoolsModule = (() => {
    class Ae {
      static instrument(i = {}) {
        return {
          ngModule: Ae,
          providers: [provideStoreDevtools(i)]
        };
      }
    }
    return Ae.ɵfac = function (i) {
      return new (i || Ae)();
    }, Ae.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({
      type: Ae
    }), Ae.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({}), Ae;
  })();
});
