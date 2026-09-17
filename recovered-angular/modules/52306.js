// Extracted from main; webpack module 52306. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  function e(I) {
    if (!I.ɵUnsubscriptionHasInitialized) {
      var O = I.ngOnDestroy;
      I.ɵUnsubscriptionHasInitialized = !0, I.ɵSubscriptions = new WeakMap(), I.ngOnDestroy = function () {
        var L = I.ɵSubscriptions.get(this);
        if (L?.length && (L.forEach(function (C, v) {
          C.unsubscribe(), L[v] = null;
        }), L.length = 0, I.ɵSubscriptions.delete(this)), O && "function" == typeof O) return O.apply(this);
      };
    }
  }
  function a(I, O, L) {
    L || (L = {
      get: function () {
        return this["ɵ" + O];
      },
      set: function (C) {
        A(C) ? (d.call(this, C, I), M.call(this, "pipe", C), M.call(this, "lift", C), M.call(this, "asObservable", C)) : N(C) && b.call(this, I, C), this["ɵ" + O] = C;
      },
      enumerable: !0,
      configurable: !0
    }, Object.defineProperty(I, O, L));
  }
  function m(I, O) {
    var L = O?.value;
    L && (O.value = function () {
      for (var C = [], v = 0; v < arguments.length; v++) C[v] = arguments[v];
      var f = L.apply(this, C);
      return A(f) ? (d.call(this, f, I), M.call(this, "pipe", f), M.call(this, "lift", f), M.call(this, "asObservable", f)) : N(f) && b.call(this, I, f), f;
    });
  }
  function d(I, O) {
    var L = I.subscribe,
      C = this;
    return I.subscribe = function () {
      for (var v = [], f = 0; f < arguments.length; f++) v[f] = arguments[f];
      var E = L.apply(this, v);
      return E?.closed || b.call(C, O, E), E;
    }, I;
  }
  function M(I, O) {
    var L = O[I];
    O[I] = function () {
      for (var C = [], v = 0; v < arguments.length; v++) C[v] = arguments[v];
      var f = L.apply(this, C);
      return f.subscribe = O.subscribe, f;
    };
  }
  function b(I, O) {
    var L = I.ɵSubscriptions.get(this) || [];
    L.push(O), I.ɵSubscriptions.set(this, L);
  }
  function A(I) {
    return !!I.subscribe;
  }
  function N(I) {
    return !!I.unsubscribe;
  }
  V.k = void 0, V.k = function t() {
    return function (O, L, C) {
      e.call(this, O), a.call(this, O, L, C), m.call(this, O, C);
    };
  };
});
