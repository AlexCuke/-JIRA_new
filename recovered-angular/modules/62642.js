// Extracted from main; webpack module 62642. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    k: () => I
  });
  var t = i(94650),
    e = i(44688),
    a = i(17504),
    m = i(39300),
    d = i(84445),
    M = i(89653),
    b = i(42437),
    A = i(73252),
    N = i(763);
  const O = class {
    constructor() {
      this.modalService = (0, t.f3M)(e.ap), this.store = (0, t.f3M)(M.yh);
    }
    openDialog(C, v = !1) {
      return b.Y.ConfirmationModalComponent = C.title, this.store.dispatch((0, A.cf)({
        modal: "ConfirmationModalComponent"
      })), this.modalService.open(new d.X(N.z), {
        disableClose: !0,
        data: C,
        size: a.m3.XS5
      }).afterClose().pipe((0, m.h)(f => v || f));
    }
  };
  let I = O;
  O.ɵfac = function (v) {
    return new (v || O)();
  }, O.ɵprov = t.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
});
