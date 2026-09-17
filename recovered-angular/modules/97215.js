// Extracted from main; webpack module 97215. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    D7: () => ae,
    LU: () => te,
    QY: () => F,
    S8: () => Le,
    ao: () => B,
    oL: () => fe
  });
  var t = i(94650),
    e = i(63900),
    a = i(54004),
    m = i(70262),
    d = i(34782),
    M = i(39300),
    b = i(95698),
    A = i(89653),
    N = i(10493),
    I = i(35982),
    O = i(39646),
    L = i(71884),
    C = i(3279);
  const x = (0, A.PH)("[User Info] Load User Info"),
    u = (0, A.PH)("[User Info] Load User Info Success", (0, A.Ky)()),
    T = (0, A.PH)("[User Info] Load User Info Failure", (0, A.Ky)()),
    R = (0, A.PH)("[User Info] Reset User Info");
  var B = Object.freeze({
    __proto__: null,
    loadUserInfo: x,
    loadUserInfoFailure: T,
    loadUserInfoSuccess: u,
    resetUserInfo: R
  });
  const y = "userInfo",
    j = {
      status: "PENDING",
      data: void 0,
      error: void 0
    },
    W = (0, A.Lq)(j, (0, A.on)(x, pe => ({
      ...pe,
      status: "PENDING"
    })), (0, A.on)(u, (pe, {
      data: be
    }) => ({
      ...pe,
      status: "SUCCESS",
      data: be
    })), (0, A.on)(T, (pe, {
      error: be
    }) => ({
      ...pe,
      status: "FAILURE",
      error: be
    })), (0, A.on)(R, () => ({
      ...j
    }))),
    F = (0, A.ZF)(y),
    Le = (0, A.P1)(F, pe => pe?.data);
  let ke = (() => {
      class pe {
        constructor(le, n) {
          this.actions$ = le, this.userService = n, this.loadUserInfo$ = (0, N.GW)(() => this.actions$.pipe((0, N.l4)(x), (0, e.w)(() => this.userService.whoami().pipe((0, a.U)(Se => u({
            data: Se
          })), (0, m.K)(Se => (0, O.of)(T({
            error: Se
          })))))));
        }
      }
      return pe.ɵfac = function (le) {
        return new (le || pe)(t.LFG(N.eX), t.LFG(I.KD));
      }, pe.ɵprov = t.Yz7({
        token: pe,
        factory: pe.ɵfac
      }), pe;
    })(),
    J = (() => {
      class pe {}
      return pe.ɵfac = function (le) {
        return new (le || pe)();
      }, pe.ɵmod = t.oAB({
        type: pe
      }), pe.ɵinj = t.cJS({
        imports: [A.Aw.forFeature(y, W), N.sQ.forFeature([ke])]
      }), pe;
    })(),
    fe = (() => {
      class pe {
        constructor(le) {
          this.store = le, this.rightSet$ = this.getRightSet().pipe((0, d.d)(1));
        }
        init() {
          this.store.dispatch(x());
        }
        getRightSet() {
          return this.getUserContext().pipe((0, a.U)(le => new Set(le.rightCodes)));
        }
        getUserContext() {
          return this.store.select(Le).pipe((0, M.h)(le => !!le));
        }
        hasUserContext() {
          return this.store.select(Le).pipe((0, a.U)(le => !!le));
        }
        getDepartmentId() {
          return this.getUserContext().pipe((0, a.U)(le => function f(pe) {
            return pe.department?.id;
          }(le)));
        }
        getWorkplaceId() {
          return this.getUserContext().pipe((0, a.U)(le => function h(pe) {
            return pe.employee?.workplace.id;
          }(le)));
        }
        clear() {
          this.store.dispatch(R());
        }
        hasRight(le) {
          return this.rightSet$.pipe((0, b.q)(1), (0, a.U)(n => n.has(le)));
        }
      }
      return pe.ɵfac = function (le) {
        return new (le || pe)(t.LFG(A.yh));
      }, pe.ɵprov = t.Yz7({
        token: pe,
        factory: pe.ɵfac
      }), pe;
    })(),
    ae = (() => {
      class pe {
        constructor(le, n) {
          this.userContext = le, this.router = n;
        }
        canActivate(le, n = !1) {
          return this.userContext.rightSet$.pipe((0, a.U)(Se => {
            const qe = le.some(Rt => Se.has(Rt));
            return !qe && n && this.router.navigateByUrl("hospital/no-access").catch(Rt => console.error("ERROR: RightCanActivateGuard", Rt)), qe;
          }), (0, L.x)());
        }
      }
      return pe.ɵfac = function (le) {
        return new (le || pe)(t.LFG(fe), t.LFG(C.F0));
      }, pe.ɵprov = t.Yz7({
        token: pe,
        factory: pe.ɵfac
      }), pe;
    })(),
    te = (() => {
      class pe {}
      return pe.ɵfac = function (le) {
        return new (le || pe)();
      }, pe.ɵmod = t.oAB({
        type: pe
      }), pe.ɵinj = t.cJS({
        providers: [fe],
        imports: [J]
      }), pe;
    })();
});
