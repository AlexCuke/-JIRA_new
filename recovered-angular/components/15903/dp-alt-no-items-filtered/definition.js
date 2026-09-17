// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-alt-no-items-filtered"]],
  outputs: {
    runEvent: "runEvent"
  },
  decls: 8,
  vars: 3,
  consts: [[1, "message-container", 3, "orientation", "size", "absolute"], ["luReplacementMessageTitle", "", 1, "message-title"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"]],
  template: function (ve, yt) {
    1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "Ничего не найдено"), t.qZA(), t.TgZ(3, "span", 2), t._uU(4, " Проверьте или "), t.TgZ(5, "button", 3), t.NdJ("click", function () {
      return yt.onClearFilter();
    }), t._uU(6, "сбросьте"), t.qZA(), t._uU(7, " параметры фильтрации "), t.qZA()()), 2 & ve && t.Q6J("orientation", "vertical")("size", "medium")("absolute", !0);
  },
  dependencies: [E.dj, E.UY, M.mc],
  styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
  changeDetection: 0
});
