// Extracted from main; webpack module 41742. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    mN: () => T,
    IU: () => x,
    hx: () => u,
    M3: () => B
  });
  var t = i(69751),
    e = i(89635),
    a = i(56451),
    m = i(11848),
    d = i(17445),
    M = i(69718),
    b = i(68675),
    A = i(63900),
    N = i(18505),
    I = i(54482),
    O = i(25403),
    C = i(50590);
  class v {
    constructor(j) {
      this.ngZone = j;
    }
    call(j, W) {
      return this.ngZone.runOutsideAngular(() => W.subscribe(j));
    }
  }
  function f(y) {
    return j => j.lift(new v(y));
  }
  function E(y) {
    return j => new t.y(W => j.subscribe({
      next: F => y.runOutsideAngular(() => W.next(F)),
      error: F => y.runOutsideAngular(() => W.error(F)),
      complete: () => y.runOutsideAngular(() => W.complete())
    }));
  }
  function x(y) {
    return (0, e.z)(E(y), f(y));
  }
  function u(y) {
    return (0, e.z)(E(y), f(y), function h(y) {
      return j => new t.y(W => j.subscribe({
        next: F => y.run(() => W.next(F)),
        error: F => y.run(() => W.error(F)),
        complete: () => y.run(() => W.complete())
      }));
    }(y));
  }
  function T(y) {
    return new t.y(j => {
      const W = y.subscribe(F => j.next(F), F => j.error(F), () => j.complete());
      return () => W.unsubscribe();
    });
  }
  const R = 50;
  function B(y, j, W) {
    let F = 0;
    return (0, a.T)(j.pipe((0, M.h)(!0)), W.pipe((0, M.h)(!1))).pipe((0, b.O)(!1), (0, A.w)(Le => Le ? m.C : (0, d.F)(R)), (0, N.b)(() => F += R), function L(y) {
      return (0, I.e)((j, W) => {
        let F = !1,
          Le = 0;
        j.subscribe(new O.Q(W, ke => (F || (F = !y(ke, Le++))) && W.next(ke)));
      });
    }(() => F < y), (0, C.P)(), (0, M.h)(void 0));
  }
});
