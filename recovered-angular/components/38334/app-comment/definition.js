// Exact compiled component metadata; references belong to modules/38334.js
({
  type: G,
  selectors: [["app-comment"]],
  decls: 14,
  vars: 6,
  consts: [[1, "comment"], [1, "comment-heading"], [1, "segment"], ["lu-label", ""], [3, "ngModel", "ngModelChange"], ["lu-segment-button", "", "luSegment", "", "value", "private"], ["lu-segment-button", "", "luSegment", "", "value", "public"], [3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["lu-button-raised", "", 3, "size", "color", "click"]],
  template: function (le, n) {
    1 & le && (e.TgZ(0, "div", 0)(1, "div", 1), e._uU(2, "Комментарий"), e.qZA(), e.TgZ(3, "div", 2)(4, "label", 3)(5, "lu-radio-group", 4), e.NdJ("ngModelChange", function (qe) {
      return n.commentType = qe;
    }), e.TgZ(6, "lu-button-group")(7, "button", 5), e._uU(8, "Приватный"), e.qZA(), e.TgZ(9, "button", 6), e._uU(10, "Общедоступный"), e.qZA()()()()(), e.TgZ(11, "lu-textarea", 7), e.NdJ("ngModelChange", function (qe) {
      return n.commentText = qe;
    }), e.qZA(), e.TgZ(12, "button", 8), e.NdJ("click", function () {
      return n.save();
    }), e._uU(13, "Сохранить"), e.qZA()()), 2 & le && (e.xp6(5), e.Q6J("ngModel", n.commentType), e.xp6(6), e.Q6J("minRows", 3)("maxRows", 3)("ngModel", n.commentText), e.xp6(1), e.Q6J("size", "medium")("color", "blue"));
  },
  dependencies: [C.JJ, C.On, v.w, M.mc, h.z, f.K2, E.X, x.y],
  styles: ["[_nghost-%COMP%]{display:block;height:calc(100% - 64px)}.comment[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:24px;padding:24px;height:100%}.comment-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#000}.comment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;margin-top:auto}.segment[_ngcontent-%COMP%]{margin-top:-4px}"],
  changeDetection: 0
});
