// Extracted from main; webpack module 53101. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    E: () => v
  });
  var t = i(84408);
  let a,
    e = 1;
  const m = {};
  function d(E) {
    return E in m && (delete m[E], !0);
  }
  const M = {
      setImmediate(E) {
        const h = e++;
        return m[h] = !0, a || (a = Promise.resolve()), a.then(() => d(h) && E()), h;
      },
      clearImmediate(E) {
        d(E);
      }
    },
    {
      setImmediate: A,
      clearImmediate: N
    } = M,
    I = {
      setImmediate(...E) {
        const {
          delegate: h
        } = I;
        return (h?.setImmediate || A)(...E);
      },
      clearImmediate(E) {
        const {
          delegate: h
        } = I;
        return (h?.clearImmediate || N)(E);
      },
      delegate: void 0
    };
  var L = i(97565);
  const v = new class C extends L.v {
    flush(h) {
      this._active = !0;
      const x = this._scheduled;
      this._scheduled = void 0;
      const {
        actions: u
      } = this;
      let T;
      h = h || u.shift();
      do {
        if (T = h.execute(h.state, h.delay)) break;
      } while ((h = u[0]) && h.id === x && u.shift());
      if (this._active = !1, T) {
        for (; (h = u[0]) && h.id === x && u.shift();) h.unsubscribe();
        throw T;
      }
    }
  }(class O extends t.o {
    constructor(h, x) {
      super(h, x), this.scheduler = h, this.work = x;
    }
    requestAsyncId(h, x, u = 0) {
      return null !== u && u > 0 ? super.requestAsyncId(h, x, u) : (h.actions.push(this), h._scheduled || (h._scheduled = I.setImmediate(h.flush.bind(h, void 0))));
    }
    recycleAsyncId(h, x, u = 0) {
      if (null != u && u > 0 || null == u && this.delay > 0) return super.recycleAsyncId(h, x, u);
      h.actions.some(T => T.id === x) || (I.clearImmediate(x), h._scheduled = void 0);
    }
  });
});
