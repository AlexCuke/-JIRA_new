// Exact compiled component metadata; references belong to modules/15513.js
({
  type: T0,
  selectors: [["st-morse-view-modal"]],
  standalone: !0,
  features: [e.jDz],
  decls: 8,
  vars: 7,
  consts: [[1, "st-morse-view-modal"], [1, "st-morse-view-modal__header"], [1, "title"], ["icon", "close", 3, "size", "click"], [1, "st-morse-view-modal__content"], [1, "morse-view-drawer", 3, "isViewMode", "isDrawerMode", "morseScaleValue", "parentOverlayRef"], ["morseViewActions", "", "class", "st-morse-view-modal__footer-actions", 4, "ngIf"], ["morseViewActions", "", 1, "st-morse-view-modal__footer-actions"], ["lu-button-outer", "", "size", "medium", "color", "red", 3, "click"], ["lu-button-raised", "", "size", "medium", "color", "blue", 3, "click"], ["icon", "edit", "luButtonPrefix", "", 3, "size"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._uU(3), e.qZA(), e.TgZ(4, "lu-svg-icon", 3), e.NdJ("click", function () {
      return D.modalRef.close();
    }), e.qZA()(), e.TgZ(5, "div", 4)(6, "scale-morse-form", 5), e.YNc(7, T5, 6, 1, "div", 6), e.qZA()()()), 2 & o && (e.xp6(3), e.Oqu(D.fullName), e.xp6(1), e.Q6J("size", 24), e.xp6(2), e.Q6J("isViewMode", !0)("isDrawerMode", !0)("morseScaleValue", D.morseScaleValue)("parentOverlayRef", D.modalRef), e.xp6(1), e.Q6J("ngIf", D.canModifyAssessment));
  },
  dependencies: [vo.ez, vo.O5, X4.D, Oa.h, Oa.q, Qc.o, Xl.W1, Xl.mc, Xl.nx, Qu.aI],
  styles: [".st-morse-view-modal{display:flex;flex-direction:column;width:100%;height:100%;min-height:100%;background:#fff}.st-morse-view-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:12px 16px;box-shadow:0 1px 2px #00000014,0 4px 8px #00000014;--lu-svg-icon-color: #ccc}@media (min-width: 992px){.st-morse-view-modal__header{margin-bottom:0;padding:16px 24px}}.st-morse-view-modal__header .title{font-size:17px;font-weight:600;line-height:24px}@media (min-width: 992px){.st-morse-view-modal__header .title{font-size:20px;line-height:28px}}.st-morse-view-modal__content{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden;padding-top:24px}.st-morse-view-modal__footer-actions{display:flex;align-items:center;gap:16px;flex-shrink:0}.st-morse-view-modal__footer-actions button[lu-button-raised]{display:inline-flex;align-items:center;gap:8px}\n"],
  encapsulation: 2
});
