// Extracted from main; webpack module 95017. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    A8: () => L,
    P3: () => b,
    Z9: () => M,
    eX: () => N,
    k: () => C,
    yy: () => A
  });
  var t = i(94033),
    e = i(45191),
    a = i(39646),
    m = i(94650);
  class d {}
  function M(v) {
    return v && "function" == typeof v.connect && !(v instanceof t.c);
  }
  class b extends d {
    constructor(f) {
      super(), this._data = f;
    }
    connect() {
      return (0, e.b)(this._data) ? this._data : (0, a.of)(this._data);
    }
    disconnect() {}
  }
  class A {
    applyChanges(f, E, h, x, u) {
      f.forEachOperation((T, R, B) => {
        let y, j;
        if (null == T.previousIndex) {
          const W = h(T, R, B);
          y = E.createEmbeddedView(W.templateRef, W.context, W.index), j = 1;
        } else null == B ? (E.remove(R), j = 3) : (y = E.get(R), E.move(y, B), j = 2);
        u && u({
          context: y?.context,
          operation: j,
          record: T
        });
      });
    }
    detach() {}
  }
  class N {
    constructor() {
      this.viewCacheSize = 20, this._viewCache = [];
    }
    applyChanges(f, E, h, x, u) {
      f.forEachOperation((T, R, B) => {
        let y, j;
        null == T.previousIndex ? (y = this._insertView(() => h(T, R, B), B, E, x(T)), j = y ? 1 : 0) : null == B ? (this._detachAndCacheView(R, E), j = 3) : (y = this._moveView(R, B, E, x(T)), j = 2), u && u({
          context: y?.context,
          operation: j,
          record: T
        });
      });
    }
    detach() {
      for (const f of this._viewCache) f.destroy();
      this._viewCache = [];
    }
    _insertView(f, E, h, x) {
      const u = this._insertViewFromCache(E, h);
      if (u) return void (u.context.$implicit = x);
      const T = f();
      return h.createEmbeddedView(T.templateRef, T.context, T.index);
    }
    _detachAndCacheView(f, E) {
      const h = E.detach(f);
      this._maybeCacheView(h, E);
    }
    _moveView(f, E, h, x) {
      const u = h.get(f);
      return h.move(u, E), u.context.$implicit = x, u;
    }
    _maybeCacheView(f, E) {
      if (this._viewCache.length < this.viewCacheSize) this._viewCache.push(f);else {
        const h = E.indexOf(f);
        -1 === h ? f.destroy() : E.remove(h);
      }
    }
    _insertViewFromCache(f, E) {
      const h = this._viewCache.pop();
      return h && E.insert(h, f), h || null;
    }
  }
  let L = (() => {
    class v {
      constructor() {
        this._listeners = [];
      }
      notify(E, h) {
        for (let x of this._listeners) x(E, h);
      }
      listen(E) {
        return this._listeners.push(E), () => {
          this._listeners = this._listeners.filter(h => E !== h);
        };
      }
      ngOnDestroy() {
        this._listeners = [];
      }
    }
    return v.ɵfac = function (E) {
      return new (E || v)();
    }, v.ɵprov = m.Yz7({
      token: v,
      factory: v.ɵfac,
      providedIn: "root"
    }), v;
  })();
  const C = new m.OlP("_ViewRepeater");
});
