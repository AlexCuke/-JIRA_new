// Extracted from main; webpack module 89556. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    k: () => v
  });
  var t = i(94650),
    e = i(44688),
    a = i(17504),
    m = i(39300),
    d = i(84445),
    M = i(36895),
    b = i(9073),
    A = i(93278),
    N = i(3977),
    I = i(44348);
  function O(h, x) {
    if (1 & h) {
      const u = t.EpF();
      t.TgZ(0, "button", 9), t.NdJ("click", function () {
        t.CHM(u);
        const R = t.oxw();
        return t.KtG(R.modalRef.close());
      }), t._uU(1), t.qZA();
    }
    if (2 & h) {
      const u = t.oxw();
      t.Q6J("size", "medium")("color", "blue"), t.xp6(1), t.hij(" ", u.buttonNo ? u.buttonNo : "Нет", " ");
    }
  }
  const L = function (h) {
      return {
        "close-but-color": h
      };
    },
    f = class {
      onKeyUp() {
        this.modalRef.close(!1);
      }
      constructor(x, u) {
        this.modalRef = x, this.data = u, this.buttonNo = "Нет", this.buttonYes = "Да", this.isBlueCancelButtonColor = !1, this.hideCancelButton = !1, this.title = this.data.title, this.data.cancelButtonTitle && (this.buttonNo = this.data.cancelButtonTitle), this.data.buttonTitle && (this.buttonYes = this.data.buttonTitle), this.data.isBlueCancelButtonColor && (this.isBlueCancelButtonColor = this.data.isBlueCancelButtonColor), this.data.hideCancelButton && (this.hideCancelButton = this.data.hideCancelButton);
      }
    };
  let C = f;
  f.ɵfac = function (u) {
    return new (u || f)(t.Y36(I.Rn), t.Y36(N.UM));
  }, f.ɵcmp = t.Xpm({
    type: f,
    selectors: [["app-confirmation-modal"]],
    hostBindings: function (u, T) {
      1 & u && t.NdJ("keyup.esc", function () {
        return T.onKeyUp();
      }, !1, t.Jf7);
    },
    standalone: !0,
    features: [t.jDz],
    decls: 12,
    vars: 10,
    consts: [[1, "lu-modal", "dialog"], [1, "lu-modal-header"], [1, "lu-modal-header-title"], ["icon", "close", 3, "size", "click"], [1, "lu-modal-body"], [3, "innerHTML"], [1, "btn-wrapper"], ["lu-button-outer", "", 3, "size", "color", "click", 4, "ngIf"], ["lu-button-raised", "", 3, "size", "color", "ngClass", "click"], ["lu-button-outer", "", 3, "size", "color", "click"]],
    template: function (u, T) {
      1 & u && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span"), t._uU(4), t.qZA(), t.TgZ(5, "lu-svg-icon", 3), t.NdJ("click", function () {
        return T.modalRef.close();
      }), t.qZA()()(), t.TgZ(6, "div", 4), t._UZ(7, "p", 5), t.TgZ(8, "div", 6), t.YNc(9, O, 2, 3, "button", 7), t.TgZ(10, "button", 8), t.NdJ("click", function () {
        return T.modalRef.close(!0);
      }), t._uU(11), t.qZA()()()()), 2 & u && (t.xp6(4), t.Oqu(T.title), t.xp6(1), t.Q6J("size", 24), t.xp6(2), t.Q6J("innerHTML", T.data.message, t.oJD), t.xp6(2), t.Q6J("ngIf", !T.hideCancelButton), t.xp6(1), t.Q6J("size", "medium")("color", T.isBlueCancelButtonColor ? "blue" : "red")("ngClass", t.VKq(8, L, T.isBlueCancelButtonColor)), t.xp6(1), t.hij(" ", T.buttonYes ? T.buttonYes : "Да", " "));
    },
    dependencies: [M.ez, M.mk, M.O5, b.W1, b.mc, A.h, A.q],
    styles: ["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}[_nghost-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;justify-content:end}"]
  });
  const E = class {
    constructor() {
      this.modalService = (0, t.f3M)(e.ap);
    }
    openDialog(x, u = !1) {
      return this.modalService.open(new d.X(C), {
        disableClose: !0,
        data: x,
        size: x?.size || a.m3.XS5,
        panelClass: x?.panelClass
      }).afterClose().pipe((0, m.h)(T => u || T));
    }
  };
  let v = E;
  E.ɵfac = function (u) {
    return new (u || E)();
  }, E.ɵprov = t.Yz7({
    token: E,
    factory: E.ɵfac,
    providedIn: "root"
  });
});
