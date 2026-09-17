// Extracted from main; webpack module 66406. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => b
  });
  var t = i(84408),
    e = i(50727);
  const a = {
    schedule(N) {
      let I = requestAnimationFrame,
        O = cancelAnimationFrame;
      const {
        delegate: L
      } = a;
      L && (I = L.requestAnimationFrame, O = L.cancelAnimationFrame);
      const C = I(v => {
        O = void 0, N(v);
      });
      return new e.w0(() => O?.(C));
    },
    requestAnimationFrame(...N) {
      const {
        delegate: I
      } = a;
      return (I?.requestAnimationFrame || requestAnimationFrame)(...N);
    },
    cancelAnimationFrame(...N) {
      const {
        delegate: I
      } = a;
      return (I?.cancelAnimationFrame || cancelAnimationFrame)(...N);
    },
    delegate: void 0
  };
  var d = i(97565);
  const b = new class M extends d.v {
    flush(I) {
      this._active = !0;
      const O = this._scheduled;
      this._scheduled = void 0;
      const {
        actions: L
      } = this;
      let C;
      I = I || L.shift();
      do {
        if (C = I.execute(I.state, I.delay)) break;
      } while ((I = L[0]) && I.id === O && L.shift());
      if (this._active = !1, C) {
        for (; (I = L[0]) && I.id === O && L.shift();) I.unsubscribe();
        throw C;
      }
    }
  }(class m extends t.o {
    constructor(I, O) {
      super(I, O), this.scheduler = I, this.work = O;
    }
    requestAsyncId(I, O, L = 0) {
      return null !== L && L > 0 ? super.requestAsyncId(I, O, L) : (I.actions.push(this), I._scheduled || (I._scheduled = a.requestAnimationFrame(() => I.flush(void 0))));
    }
    recycleAsyncId(I, O, L = 0) {
      if (null != L && L > 0 || null == L && this.delay > 0) return super.recycleAsyncId(I, O, L);
      I.actions.some(C => C.id === O) || (a.cancelAnimationFrame(O), I._scheduled = void 0);
    }
  });
});
