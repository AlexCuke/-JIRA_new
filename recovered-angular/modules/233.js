// Extracted from main; webpack module 233. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    N: () => d
  });
  var t = i(84408),
    a = i(97565);
  const d = new class m extends a.v {}(class e extends t.o {
    constructor(A, N) {
      super(A, N), this.scheduler = A, this.work = N;
    }
    schedule(A, N = 0) {
      return N > 0 ? super.schedule(A, N) : (this.delay = N, this.state = A, this.scheduler.flush(this), this);
    }
    execute(A, N) {
      return N > 0 || this.closed ? super.execute(A, N) : this._execute(A, N);
    }
    requestAsyncId(A, N, I = 0) {
      return null != I && I > 0 || null == I && this.delay > 0 ? super.requestAsyncId(A, N, I) : A.flush(this);
    }
  });
});
