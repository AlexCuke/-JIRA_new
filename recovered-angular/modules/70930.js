// Extracted from main; webpack module 70930. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Hp: () => C,
    Lv: () => L
  });
  var t = i(30576),
    e = i(50727),
    a = i(42416),
    m = i(87849),
    d = i(25032);
  const M = N("C", void 0, void 0);
  function N(x, u, T) {
    return {
      kind: x,
      value: u,
      error: T
    };
  }
  var I = i(43410),
    O = i(72806);
  class L extends e.w0 {
    constructor(u) {
      super(), this.isStopped = !1, u ? (this.destination = u, (0, e.Nn)(u) && u.add(this)) : this.destination = h;
    }
    static create(u, T, R) {
      return new C(u, T, R);
    }
    next(u) {
      this.isStopped ? E(function A(x) {
        return N("N", x, void 0);
      }(u), this) : this._next(u);
    }
    error(u) {
      this.isStopped ? E(function b(x) {
        return N("E", void 0, x);
      }(u), this) : (this.isStopped = !0, this._error(u));
    }
    complete() {
      this.isStopped ? E(M, this) : (this.isStopped = !0, this._complete());
    }
    unsubscribe() {
      this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null);
    }
    _next(u) {
      this.destination.next(u);
    }
    _error(u) {
      try {
        this.destination.error(u);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  }
  class C extends L {
    constructor(u, T, R) {
      let B;
      if (super(), (0, t.m)(u)) B = u;else if (u) {
        let y;
        ({
          next: B,
          error: T,
          complete: R
        } = u), this && a.v.useDeprecatedNextContext ? (y = Object.create(u), y.unsubscribe = () => this.unsubscribe()) : y = u, B = B?.bind(y), T = T?.bind(y), R = R?.bind(y);
      }
      this.destination = {
        next: B ? v(B) : d.Z,
        error: v(T ?? f),
        complete: R ? v(R) : d.Z
      };
    }
  }
  function v(x, u) {
    return (...T) => {
      try {
        x(...T);
      } catch (R) {
        a.v.useDeprecatedSynchronousErrorHandling ? (0, O.O)(R) : (0, m.h)(R);
      }
    };
  }
  function f(x) {
    throw x;
  }
  function E(x, u) {
    const {
      onStoppedNotification: T
    } = a.v;
    T && I.z.setTimeout(() => T(x, u));
  }
  const h = {
    closed: !0,
    next: d.Z,
    error: f,
    complete: d.Z
  };
});
