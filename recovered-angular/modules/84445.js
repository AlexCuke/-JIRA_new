// Extracted from main; webpack module 84445. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => a
  });
  var t = i(89740),
    e = i(94650);
  class a extends t.Al {
    constructor(d, M) {
      super(d), this.component = d, this.injectorRef = M;
    }
    createInjector(d, M, b = []) {
      return e.zs3.create({
        parent: this.injectorRef || d,
        providers: [{
          provide: t.yf,
          useValue: M
        }, ...b]
      });
    }
  }
});
