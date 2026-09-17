// Exact compiled component metadata; references belong to modules/89556.js
({
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
