// Exact compiled component metadata; references belong to modules/53648.js
({
  type: qe,
  selectors: [["app-consultations"]],
  decls: 7,
  vars: 3,
  consts: [[4, "ngIf"], [1, "consultations"], [1, "consultations-heading"], [1, "consultations-list"], [3, "data", 4, "ngFor", "ngForOf"], [1, "border-heading"], [1, "fio"], ["icon", "close", 3, "size", "click"], [3, "data"], [2, "text-align", "center"]],
  template: function (Re, st) {
    1 & Re && (A.YNc(0, pe, 5, 2, "div", 0), A.TgZ(1, "div", 1)(2, "div", 2), A._uU(3, "Консультации"), A.qZA(), A.TgZ(4, "div", 3), A.YNc(5, be, 1, 1, "consultation-item", 4), A.YNc(6, le, 3, 0, "ng-container", 0), A.qZA()()), 2 & Re && (A.Q6J("ngIf", !!st.modalRef), A.xp6(5), A.Q6J("ngForOf", st.consultations), A.xp6(1), A.Q6J("ngIf", !st.isLoading && 0 === st.consultations.length));
  },
  dependencies: [v.sg, v.O5, te, I.q],
  styles: [".consultations[_ngcontent-%COMP%]{padding:24px}.consultations-heading[_ngcontent-%COMP%]{margin-bottom:24px;font-size:17px;font-weight:600;color:#000}.consultations-list[_ngcontent-%COMP%]   consultation-item[_ngcontent-%COMP%]{display:block}.consultations-list[_ngcontent-%COMP%]   consultation-item[_ngcontent-%COMP%]:not(:last-child){position:relative;margin-bottom:24px;padding-bottom:24px}.consultations-list[_ngcontent-%COMP%]   consultation-item[_ngcontent-%COMP%]:not(:last-child):after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:1px;background-color:#e6e6e6}"],
  changeDetection: 0
});
