// Extracted from main; webpack module 97565. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    v: () => a
  });
  var t = i(26063);
  class e {
    constructor(d, M = e.now) {
      this.schedulerActionCtor = d, this.now = M;
    }
    schedule(d, M = 0, b) {
      return new this.schedulerActionCtor(this, d).schedule(b, M);
    }
  }
  e.now = t.l.now;
  class a extends e {
    constructor(d, M = e.now) {
      super(d, M), this.actions = [], this._active = !1, this._scheduled = void 0;
    }
    flush(d) {
      const {
        actions: M
      } = this;
      if (this._active) return void M.push(d);
      let b;
      this._active = !0;
      do {
        if (b = d.execute(d.state, d.delay)) break;
      } while (d = M.shift());
      if (this._active = !1, b) {
        for (; d = M.shift();) d.unsubscribe();
        throw b;
      }
    }
  }
});
