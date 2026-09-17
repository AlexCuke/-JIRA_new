// Extracted from main; webpack module 77579. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    x: () => b
  });
  var t = i(69751),
    e = i(50727);
  const m = (0, i(83888).d)(N => function () {
    N(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  });
  var d = i(38737),
    M = i(72806);
  let b = (() => {
    class N extends t.y {
      constructor() {
        super(), this.closed = !1, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null;
      }
      lift(O) {
        const L = new A(this, this);
        return L.operator = O, L;
      }
      _throwIfClosed() {
        if (this.closed) throw new m();
      }
      next(O) {
        (0, M.x)(() => {
          if (this._throwIfClosed(), !this.isStopped) {
            const L = this.observers.slice();
            for (const C of L) C.next(O);
          }
        });
      }
      error(O) {
        (0, M.x)(() => {
          if (this._throwIfClosed(), !this.isStopped) {
            this.hasError = this.isStopped = !0, this.thrownError = O;
            const {
              observers: L
            } = this;
            for (; L.length;) L.shift().error(O);
          }
        });
      }
      complete() {
        (0, M.x)(() => {
          if (this._throwIfClosed(), !this.isStopped) {
            this.isStopped = !0;
            const {
              observers: O
            } = this;
            for (; O.length;) O.shift().complete();
          }
        });
      }
      unsubscribe() {
        this.isStopped = this.closed = !0, this.observers = null;
      }
      get observed() {
        var O;
        return (null === (O = this.observers) || void 0 === O ? void 0 : O.length) > 0;
      }
      _trySubscribe(O) {
        return this._throwIfClosed(), super._trySubscribe(O);
      }
      _subscribe(O) {
        return this._throwIfClosed(), this._checkFinalizedStatuses(O), this._innerSubscribe(O);
      }
      _innerSubscribe(O) {
        const {
          hasError: L,
          isStopped: C,
          observers: v
        } = this;
        return L || C ? e.Lc : (v.push(O), new e.w0(() => (0, d.P)(v, O)));
      }
      _checkFinalizedStatuses(O) {
        const {
          hasError: L,
          thrownError: C,
          isStopped: v
        } = this;
        L ? O.error(C) : v && O.complete();
      }
      asObservable() {
        const O = new t.y();
        return O.source = this, O;
      }
    }
    return N.create = (I, O) => new A(I, O), N;
  })();
  class A extends b {
    constructor(I, O) {
      super(), this.destination = I, this.source = O;
    }
    next(I) {
      var O, L;
      null === (L = null === (O = this.destination) || void 0 === O ? void 0 : O.next) || void 0 === L || L.call(O, I);
    }
    error(I) {
      var O, L;
      null === (L = null === (O = this.destination) || void 0 === O ? void 0 : O.error) || void 0 === L || L.call(O, I);
    }
    complete() {
      var I, O;
      null === (O = null === (I = this.destination) || void 0 === I ? void 0 : I.complete) || void 0 === O || O.call(I);
    }
    _subscribe(I) {
      var O, L;
      return null !== (L = null === (O = this.source) || void 0 === O ? void 0 : O.subscribe(I)) && void 0 !== L ? L : e.Lc;
    }
  }
});
