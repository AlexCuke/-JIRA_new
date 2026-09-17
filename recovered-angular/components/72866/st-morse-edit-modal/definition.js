// Exact compiled component metadata; references belong to modules/72866.js
({
  type: v,
  selectors: [["st-morse-edit-modal"]],
  standalone: !0,
  features: [N.jDz],
  decls: 7,
  vars: 5,
  consts: [[1, "st-morse-edit-modal"], [1, "st-morse-edit-modal__header"], [1, "title"], ["icon", "close", 3, "size", "click"], [1, "st-morse-edit-modal__content"], ["reloadListAction", "scalesTemperaturePatientList:reload", 1, "morse-view-drawer", 3, "isDrawerMode", "morseScaleValue", "parentOverlayRef"]],
  template: function (h, x) {
    1 & h && (N.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), N._uU(3), N.qZA(), N.TgZ(4, "lu-svg-icon", 3), N.NdJ("click", function () {
      return x.modalRef.close();
    }), N.qZA()(), N.TgZ(5, "div", 4), N._UZ(6, "scale-morse-form", 5), N.qZA()()), 2 & h && (N.xp6(3), N.Oqu(x.fullName), N.xp6(1), N.Q6J("size", 24), N.xp6(2), N.Q6J("isDrawerMode", !0)("morseScaleValue", x.morseScaleValue)("parentOverlayRef", x.modalRef));
  },
  dependencies: [t.ez, b.D, a.h, a.q, m.o, d.aI],
  styles: [".st-morse-edit-modal{display:flex;flex-direction:column;width:100%;height:100%;min-height:100%;background:#fff}.st-morse-edit-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:12px 16px;box-shadow:0 1px 2px #00000014,0 4px 8px #00000014;--lu-svg-icon-color: #ccc}@media (min-width: 992px){.st-morse-edit-modal__header{margin-bottom:0;padding:16px 24px}}.st-morse-edit-modal__header .title{font-size:17px;font-weight:600;line-height:24px}@media (min-width: 992px){.st-morse-edit-modal__header .title{font-size:20px;line-height:28px}}.st-morse-edit-modal__content{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden;padding-top:24px}\n"],
  encapsulation: 2
});
