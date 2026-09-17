// Exact compiled component metadata; references belong to modules/83431.js
({
  type: _t,
  selectors: [["hl-confirm-modal"]],
  viewQuery: function (Ge, Vi) {
    if (1 & Ge && (e.Gf(T, 5), e.Gf(R, 5)), 2 & Ge) {
      let Zo;
      e.iGM(Zo = e.CRH()) && (Vi.modal = Zo.first), e.iGM(Zo = e.CRH()) && (Vi.modalButtons = Zo.first);
    }
  },
  decls: 16,
  vars: 14,
  consts: [[1, "lu-modal", "dialog", "default-size"], ["modal", ""], [1, "lu-modal-header"], [1, "lu-modal-header-title"], ["icon", "close", 1, "button-close", 3, "size", "click"], [1, "lu-modal-body"], [1, "lu-modal-footer"], [1, "lu-modal-buttons"], ["modalButtons", ""], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"], ["luButtonPrefix", "", 3, "icon", "size", "class", 4, "ngIf"], ["luButtonPrefix", "", 3, "icon", "size"]],
  template: function (Ge, Vi) {
    1 & Ge && (e.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "div", 3), e._uU(4), e.TgZ(5, "lu-svg-icon", 4), e.NdJ("click", function () {
      return Vi.onClose();
    }), e.qZA()()(), e.TgZ(6, "div", 5), e._uU(7), e.qZA(), e.TgZ(8, "div", 6)(9, "div", 7, 8)(11, "button", 9), e.NdJ("click", function () {
      return Vi.onDecline();
    }), e._uU(12), e.qZA(), e.TgZ(13, "button", 10), e.NdJ("click", function () {
      return Vi.onConfirm();
    }), e.YNc(14, B, 1, 4, "lu-svg-icon", 11), e._uU(15), e.qZA()()()()), 2 & Ge && (e.ekj("small-size", "small-size" === Vi.sizeModal)("large-size", "large-size" === Vi.sizeModal), e.xp6(4), e.hij(" ", Vi.modalData.title, " "), e.xp6(1), e.Q6J("size", 24), e.xp6(2), e.Oqu(Vi.modalData.body), e.xp6(4), e.Q6J("size", Vi.modalData.buttons.close.size || "medium")("color", Vi.modalData.buttons.close.color || "default"), e.xp6(1), e.hij(" ", Vi.modalData.buttons.close.name, " "), e.xp6(1), e.Q6J("size", Vi.modalData.buttons.confirm.size || "medium")("color", Vi.modalData.buttons.confirm.color || "default"), e.xp6(1), e.Q6J("ngIf", Vi.modalData.buttons.confirm.icon), e.xp6(1), e.hij(" ", Vi.modalData.buttons.confirm.name, " "));
  },
  dependencies: [t.O5, M.q, b.mc, b.nx],
  styles: [".default-size[_ngcontent-%COMP%]{width:512px}.small-size[_ngcontent-%COMP%]{width:448px}.large-size[_ngcontent-%COMP%]{width:576px}.lu-modal-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.button-close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: var(--lu-primary) !important}.lu-modal-body[_ngcontent-%COMP%]{overflow-wrap:break-word}"],
  changeDetection: 0
});
