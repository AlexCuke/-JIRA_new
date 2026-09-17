// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-alt-no-items-on-page"]],
  outputs: {
    runEvent: "runEvent"
  },
  decls: 8,
  vars: 3,
  consts: [[1, "message-container", 3, "orientation", "size", "absolute"], ["luReplacementMessageTitle", "", 1, "message-title"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"]],
  template: function (ve, yt) {
    1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "На текущей странице не осталось элементов."), t.qZA(), t.TgZ(3, "div", 2)(4, "span"), t._uU(5, "Выберите другую или"), t.qZA(), t.TgZ(6, "button", 3), t.NdJ("click", function () {
      return yt.onRefresh();
    }), t._uU(7, "обновите"), t.qZA()()()), 2 & ve && t.Q6J("orientation", "vertical")("size", "medium")("absolute", !0);
  },
  dependencies: [E.dj, E.UY, M.mc],
  styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
  changeDetection: 0
});
