// Exact compiled component metadata; references belong to modules/60649.js
({
  type: Ct,
  selectors: [["instrumental-item"]],
  viewQuery: function (Me, Ke) {
    if (1 & Me && v.Gf(Rt, 5), 2 & Me) {
      let Ze;
      v.iGM(Ze = v.CRH()) && (Ke.titleText = Ze.first);
    }
  },
  inputs: {
    data: "data"
  },
  decls: 22,
  vars: 16,
  consts: [[1, "instrumental-item"], [1, "accordion"], [1, "accordion__item"], [1, "accordion__title"], [1, "accordion__title-text"], ["titleText", ""], ["class", "accordion__arrow-wrapper", 3, "click", 4, "ngIf"], [1, "accordion__body"], [1, "dot"], [4, "ngIf"], [1, "patient-notify"], ["label", "Пациент уведомлен", 3, "disabled", "ngModel", "ngModelChange"], ["label", "Пациент подготовлен", 3, "disabled", "ngModel", "ngModelChange"], [1, "accordion__arrow-wrapper", 3, "click"]],
  template: function (Me, Ke) {
    1 & Me && (v.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4, 5), v._uU(6), v.qZA(), v.YNc(7, We, 2, 0, "span", 6), v.qZA(), v.TgZ(8, "div", 7)(9, "p")(10, "span"), v._uU(11, "Назначено"), v.qZA(), v._UZ(12, "span", 8), v.TgZ(13, "span"), v._uU(14), v.qZA(), v.YNc(15, Re, 4, 1, "ng-container", 9), v._UZ(16, "span", 8), v.TgZ(17, "span"), v._uU(18), v.qZA()()()()(), v.TgZ(19, "div", 10)(20, "lu-toggle", 11), v.NdJ("ngModelChange", function (Ee) {
      return Ke.isNotified = Ee;
    })("ngModelChange", function (Ee) {
      return Ke.onNotifyPatient(Ee);
    }), v.qZA(), v.TgZ(21, "lu-toggle", 12), v.NdJ("ngModelChange", function (Ee) {
      return Ke.isPrepared = Ee;
    })("ngModelChange", function (Ee) {
      return Ke.onPreparePatient(Ee);
    }), v.qZA()()()), 2 & Me && (v.xp6(3), v.ekj("active", Ke.titleExpanded), v.xp6(1), v.ekj("accordion__title-text--collapsed", !Ke.titleExpanded), v.xp6(2), v.Oqu(Ke.assignmentText), v.xp6(1), v.Q6J("ngIf", Ke.isShowExpander), v.xp6(7), v.AsE("", Ke.assignmentPlan, " на ", Ke.assignmentPlanData, ""), v.xp6(1), v.Q6J("ngIf", Ke.assignmentRoom), v.xp6(3), v.lnq(" Назначил ", Ke.assignmentDoctorJobTitle, " ", Ke.assignmentDoctorName, " ", Ke.assignmentAppointmentDate, " "), v.xp6(2), v.Q6J("disabled", Ke.isLoadingNotified)("ngModel", Ke.isNotified), v.xp6(1), v.Q6J("disabled", Ke.isLoadingPrepared)("ngModel", Ke.isPrepared));
  },
  dependencies: [n.JJ, n.On, Se.M, qe.w, u.O5],
  styles: [".instrumental-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.instrumental-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px 24px}.instrumental-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]   lu-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.instrumental-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]   lu-toggle[data-lu-checked=false][_ngcontent-%COMP%]     .lu-toggle-wrapper{background-color:#d9d9d9}.accordion[_ngcontent-%COMP%]{position:relative;padding:6px 32px 6px 12px;background-color:#f2f2f2;border-radius:4px;font-size:13px}.accordion__title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding-right:32px;font-weight:600}.accordion__title-text[_ngcontent-%COMP%]{flex:1;min-width:0;color:#000;word-break:break-word}.accordion__title-text--collapsed[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.accordion__title[_ngcontent-%COMP%]   .accordion__arrow-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:flex-start;padding-top:6px;width:32px;min-height:100%;color:#67bde3;cursor:pointer;transition:background-color .2s}.accordion__title[_ngcontent-%COMP%]   .accordion__arrow-wrapper[_ngcontent-%COMP%]:hover{background-color:#38a1d61a}.accordion__title[_ngcontent-%COMP%]   app-arrow-icon[_ngcontent-%COMP%]{transition:transform .2s}.accordion__title.active[_ngcontent-%COMP%]   app-arrow-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.accordion__body[_ngcontent-%COMP%]{margin-top:4px;color:#757575}.accordion__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:0 6px;margin:0}.accordion__body[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:-1px;margin-right:-1px}"]
});
