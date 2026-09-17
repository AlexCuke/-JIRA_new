// Exact compiled component metadata; references belong to modules/44785.js
({
  type: If,
  selectors: [["app-utilize-confirmation-modal"]],
  standalone: !0,
  features: [n.jDz],
  decls: 16,
  vars: 6,
  consts: [[1, "utilize-modal"], [1, "utilize-modal__header"], [1, "utilize-modal__title"], ["aria-label", "Закрыть", 1, "utilize-modal__close", 3, "click"], ["icon", "close", 3, "size"], [1, "utilize-modal__body"], [1, "utilize-modal__message"], [1, "utilize-modal__actions"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2), n._uU(3, "Утилизация таблетницы"), n.qZA(), n.TgZ(4, "button", 3), n.NdJ("click", function () {
      return ce.onCancel();
    }), n._UZ(5, "lu-svg-icon", 4), n.qZA()(), n.TgZ(6, "div", 5)(7, "p", 6), n._uU(8), n.qZA(), n.TgZ(9, "p", 6), n._uU(10, " Вы должны пересобрать таблетницу. Хотите сделать это сейчас? "), n.qZA(), n.TgZ(11, "div", 7)(12, "button", 8), n.NdJ("click", function () {
      return ce.onUtilize();
    }), n._uU(13, " Утилизировать "), n.qZA(), n.TgZ(14, "button", 9), n.NdJ("click", function () {
      return ce.onUtilizeAndReassemble();
    }), n._uU(15, " Утилизировать и пересобрать "), n.qZA()()()()), 2 & k && (n.xp6(5), n.Q6J("size", 24), n.xp6(3), n.hij(" Вы утилизируете таблетницу № ", ce.data.number, ". "), n.xp6(4), n.Q6J("size", "medium")("color", "red"), n.xp6(2), n.Q6J("size", "medium")("color", "red"));
  },
  dependencies: [Di.ez, Ks.W1, Ks.mc, Ci.h, Ci.q],
  styles: [".utilize-modal[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 4px 24px #00000026;width:648px;min-height:220px;padding:24px;display:flex;flex-direction:column;gap:24px}.utilize-modal__header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.utilize-modal__title[_ngcontent-%COMP%]{margin:0;font-family:Open Sans,sans-serif;font-weight:600;font-size:20px;line-height:28px;color:#333;padding-right:16px}.utilize-modal__close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;--lu-svg-icon-color: #ccc}.utilize-modal__close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.utilize-modal__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;flex:1}.utilize-modal__message[_ngcontent-%COMP%]{margin:0;font-size:15px;line-height:24px;color:#333}.utilize-modal__actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-top:8px;justify-content:end}"]
});
