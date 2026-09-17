// Exact compiled component metadata; references belong to modules/9340.js
({
  type: f,
  selectors: [["st-news2-edit-modal"]],
  standalone: !0,
  features: [N.jDz],
  decls: 7,
  vars: 6,
  consts: [[1, "st-news2-edit-modal"], [1, "st-news2-edit-modal__header"], [1, "title"], ["icon", "close", 3, "size", "click"], [1, "st-news2-edit-modal__content"], ["reloadListAction", "scalesTemperaturePatientList:reload", 1, "news2-view-drawer", 3, "parentOverlayRef", "patientContext", "indexScalesSeed", "indexTimeCommitted"]],
  template: function (x, u) {
    1 & x && (N.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), N._uU(3), N.qZA(), N.TgZ(4, "lu-svg-icon", 3), N.NdJ("click", function () {
      return u.modalRef.close();
    }), N.qZA()(), N.TgZ(5, "div", 4), N._UZ(6, "scale-news2-form", 5), N.qZA()()), 2 & x && (N.xp6(3), N.Oqu(u.fullName), N.xp6(1), N.Q6J("size", 24), N.xp6(2), N.Q6J("parentOverlayRef", u.modalRef)("patientContext", u.patientData)("indexScalesSeed", u.indexScalesSeed)("indexTimeCommitted", u.indexTimeCommitted));
  },
  dependencies: [t.ez, M.I, L.z, a.h, a.q, m.o],
  styles: [".st-news2-edit-modal{display:flex;flex-direction:column;width:100%;height:100%;min-height:100%;background:#fff}.st-news2-edit-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding:12px 16px;box-shadow:0 1px 2px #00000014,0 4px 8px #00000014;--lu-svg-icon-color: #ccc}@media (min-width: 992px){.st-news2-edit-modal__header{padding:16px 24px}}.st-news2-edit-modal__header .title{font-size:17px;font-weight:600;line-height:24px}@media (min-width: 992px){.st-news2-edit-modal__header .title{font-size:20px;line-height:28px}}.st-news2-edit-modal__content{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}\n"],
  encapsulation: 2
});
