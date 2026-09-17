// Exact compiled component metadata; references belong to modules/763.js
({
  type: O,
  selectors: [["app-modal"]],
  decls: 7,
  vars: 3,
  consts: [[1, "lu-modal", "dialog"], [1, "lu-modal-header"], [1, "lu-modal-header-title"], ["icon", "close", 3, "size", "click"], [1, "lu-modal-body"], [4, "ngComponentOutlet"]],
  template: function (v, f) {
    1 & v && (m.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), m._uU(3), m.TgZ(4, "lu-svg-icon", 3), m.NdJ("click", function () {
      return f.onClose();
    }), m.qZA()()(), m.TgZ(5, "div", 4), m.YNc(6, N, 1, 0, "ng-container", 5), m.qZA()()), 2 & v && (m.xp6(3), m.hij(" ", f.title, " "), m.xp6(1), m.Q6J("size", 24), m.xp6(2), m.Q6J("ngComponentOutlet", f.component));
  },
  dependencies: [A.$G, M.q],
  styles: [".lu-modal.dialog[_ngcontent-%COMP%]{min-width:448px}"],
  changeDetection: 0
});
