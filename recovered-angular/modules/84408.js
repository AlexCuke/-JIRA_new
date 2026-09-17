// Extracted from main; webpack module 84408. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    o: () => d
  });
  var t = i(50727);
  class e extends t.w0 {
    constructor(b, A) {
      super();
    }
    schedule(b, A = 0) {
      return this;
    }
  }
  const a = {
    setInterval(...M) {
      const {
        delegate: b
      } = a;
      return (b?.setInterval || setInterval)(...M);
    },
    clearInterval(M) {
      const {
        delegate: b
      } = a;
      return (b?.clearInterval || clearInterval)(M);
    },
    delegate: void 0
  };
  var m = i(38737);
  class d extends e {
    constructor(b, A) {
      super(b, A), this.scheduler = b, this.work = A, this.pending = !1;
    }
    schedule(b, A = 0) {
      if (this.closed) return this;
      this.state = b;
      const N = this.id,
        I = this.scheduler;
      return null != N && (this.id = this.recycleAsyncId(I, N, A)), this.pending = !0, this.delay = A, this.id = this.id || this.requestAsyncId(I, this.id, A), this;
    }
    requestAsyncId(b, A, N = 0) {
      return a.setInterval(b.flush.bind(b, this), N);
    }
    recycleAsyncId(b, A, N = 0) {
      if (null != N && this.delay === N && !1 === this.pending) return A;
      a.clearInterval(A);
    }
    execute(b, A) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = !1;
      const N = this._execute(b, A);
      if (N) return N;
      !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(b, A) {
      let I,
        N = !1;
      try {
        this.work(b);
      } catch (O) {
        N = !0, I = O || new Error("Scheduled action threw falsy error");
      }
      if (N) return this.unsubscribe(), I;
    }
    unsubscribe() {
      if (!this.closed) {
        const {
            id: b,
            scheduler: A
          } = this,
          {
            actions: N
          } = A;
        this.work = this.state = this.scheduler = null, this.pending = !1, (0, m.P)(N, this), null != b && (this.id = this.recycleAsyncId(A, b, null)), this.delay = null, super.unsubscribe();
      }
    }
  }
});
