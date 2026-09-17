// Extracted from main; webpack module 63873. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    w: () => m
  });
  var t = i(3279),
    e = i(39300),
    a = i(94650);
  const d = class {
    constructor(b) {
      this.router = b, this.router.events.pipe((0, e.h)(A => A instanceof t.m2)).subscribe(() => {
        this.activeArm = this.router.url.split("/")[1];
      });
    }
  };
  let m = d;
  d.ɵfac = function (A) {
    return new (A || d)(a.LFG(t.F0));
  }, d.ɵprov = a.Yz7({
    token: d,
    factory: d.ɵfac,
    providedIn: "root"
  });
});
