// Exact compiled component metadata; references belong to modules/38334.js
({
  type: Y,
  selectors: [["app-cancel-move-request-modal"]],
  decls: 8,
  vars: 6,
  consts: [[1, "wrapper"], [1, "btn-wrap"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
  template: function (le, n) {
    1 & le && (e.TgZ(0, "div", 0)(1, "p"), e._uU(2), e.qZA(), e.TgZ(3, "div", 1)(4, "button", 2), e.NdJ("click", function () {
      return n.modalRef.close();
    }), e._uU(5, "Не отменять"), e.qZA(), e.TgZ(6, "button", 3), e.NdJ("click", function () {
      return n.modalRef.close(!0);
    }), e._uU(7, "Отменить заявку"), e.qZA()()()), 2 & le && (e.xp6(2), e.AsE("Вы уверены, что хотите отменить заявку на перемещение ", "Иванова А. И.", " в ", n.replacement, "?"), e.xp6(2), e.Q6J("size", "medium")("color", "blue"), e.xp6(2), e.Q6J("size", "medium")("color", "blue"));
  },
  dependencies: [M.mc],
  styles: [".wrapper[_ngcontent-%COMP%]{max-width:410px}.btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px;margin-top:24px}"]
});
