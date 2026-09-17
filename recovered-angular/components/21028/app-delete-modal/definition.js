// Exact compiled component metadata; references belong to modules/21028.js
({
  type: b,
  selectors: [["app-delete-modal"]],
  decls: 8,
  vars: 6,
  consts: [[3, "title"], [1, "btn-wrapper"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
  template: function (I, O) {
    1 & I && (e.TgZ(0, "common-modal-wrapper", 0)(1, "p"), e._uU(2), e.qZA(), e.TgZ(3, "div", 1)(4, "button", 2), e.NdJ("click", function () {
      return O.onCancel();
    }), e._uU(5, "Отменить"), e.qZA(), e.TgZ(6, "button", 3), e.NdJ("click", function () {
      return O.onDelete();
    }), e._uU(7, "Удалить"), e.qZA()()()), 2 & I && (e.Q6J("title", O.title), e.xp6(2), e.Oqu(O.message), e.xp6(2), e.Q6J("size", "medium")("color", "blue"), e.xp6(2), e.Q6J("size", "medium")("color", "red"));
  },
  dependencies: [m.mc, d.$],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:end;gap:16px}"]
});
