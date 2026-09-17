// Exact compiled component metadata; references belong to modules/38334.js
({
  type: ae,
  selectors: [["app-pim-modal"]],
  decls: 14,
  vars: 2,
  consts: [[1, "pim-info"], [1, "pim-notify"], ["lu-button-raised", "", 1, "pim-btn", 3, "size", "color", "click"], [2, "margin-right", "10px"]],
  template: function (le, n) {
    1 & le && (e.TgZ(0, "div")(1, "div", 0)(2, "span"), e._uU(3, "Пациент:"), e.qZA(), e._uU(4, " Иванова Лариса Михайловна "), e._UZ(5, "br"), e.TgZ(6, "span"), e._uU(7, "Процедура:"), e.qZA(), e._uU(8, " А11.01.005 - Биопсия узелков, тофусов "), e.qZA(), e.TgZ(9, "div", 1), e._uU(10, "Процедура будет подписана и отмечена выполненной."), e.qZA(), e.TgZ(11, "button", 2), e.NdJ("click", function () {
      return n.onSign();
    }), e._UZ(12, "app-sign-icon", 3), e._uU(13, " Подписать и закрыть "), e.qZA()()), 2 & le && (e.xp6(11), e.Q6J("size", "medium")("color", "blue"));
  },
  dependencies: [M.mc, b.v],
  styles: [".pim-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.pim-notify[_ngcontent-%COMP%]{margin:12px 0 32px}.pim-btn[_ngcontent-%COMP%]{display:block;margin-left:auto}"]
});
