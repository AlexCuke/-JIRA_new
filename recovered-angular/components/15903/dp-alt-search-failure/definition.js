// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-alt-search-failure"]],
  outputs: {
    runEvent: "runEvent"
  },
  decls: 9,
  vars: 5,
  consts: [[1, "message-container", 3, "type", "orientation", "size", "absolute"], ["luReplacementMessageTitle", ""], ["icon", "warning_line", 3, "size"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"]],
  template: function (ve, yt) {
    1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "Ошибка!"), t.qZA(), t._UZ(3, "lu-svg-icon", 2), t.TgZ(4, "div", 3)(5, "span"), t._uU(6, "Список временно недоступен."), t.qZA(), t.TgZ(7, "button", 4), t.NdJ("click", function () {
      return yt.onRefresh();
    }), t._uU(8, "Обновить"), t.qZA()()()), 2 & ve && (t.Q6J("type", "warning")("orientation", "vertical")("size", "medium")("absolute", !0), t.xp6(3), t.Q6J("size", 48));
  },
  dependencies: [E.dj, E.UY, a.q, M.mc],
  styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
  changeDetection: 0
});
