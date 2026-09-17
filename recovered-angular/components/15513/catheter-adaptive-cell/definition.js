// Exact compiled component metadata; references belong to modules/15513.js
({
  type: b0,
  selectors: [["catheter-adaptive-cell"]],
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 26,
  vars: 7,
  consts: [[1, "cat-adaptive-cell", 3, "click"], [1, "cat-adaptive-cell__name-age-cell"], [1, "cat-adaptive-cell__name"], [1, "age-cell"], [3, "size", "icon"], [1, "patient-info"], [1, "dot"], [1, "cat-adaptive-cell__cat-info", 2, "height", "22px"], [1, "cat-adaptive-cell__cat-type"], [1, "cat-adaptive-cell__cat-type__cat-type-text", 2, "min-width", "306px"], [1, "cat-adaptive-cell__cat-type__cat-type-text", 2, "min-width", "100px"], [1, "cat-adaptive-cell__cat-type__cat-type-text", 2, "min-width", "130px"], ["class", "cat-adaptive-cell__cat-info", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "last-element"], [1, "cat-adaptive-cell__cat-info", 3, "ngClass"], ["positions", "top-left", "panelClass", "catheter-type-tooltip", 2, "min-width", "306px", 3, "luTooltip", "canOpen"], [1, "comment"], ["positions", "top-left", 2, "min-width", "100px", 3, "luTooltip", "canOpen"], [2, "min-width", "130px"]],
  template: function (o, D) {
    if (1 & o && (e.TgZ(0, "div", 0), e.NdJ("click", function () {
      return D.openCatheterAppointmentSheetModal();
    }), e.TgZ(1, "div", 1)(2, "span", 2), e._uU(3), e.qZA(), e.TgZ(4, "div", 3), e._UZ(5, "lu-svg-icon", 4), e.TgZ(6, "span"), e._uU(7), e.qZA()()(), e.TgZ(8, "div", 5)(9, "span"), e._uU(10), e.qZA(), e._UZ(11, "span", 6), e.TgZ(12, "span"), e._uU(13), e.qZA()(), e.TgZ(14, "div", 7)(15, "div", 8)(16, "span", 9), e._uU(17, "Тип катетера и комментарий"), e.qZA()(), e.TgZ(18, "div", 8)(19, "span", 10), e._uU(20, "Установлен"), e.qZA()(), e.TgZ(21, "div", 8)(22, "span", 11), e._uU(23, "Послед. обработка"), e.qZA()()(), e.YNc(24, s5, 12, 13, "div", 12), e._UZ(25, "div", 13), e.qZA()), 2 & o) {
      let Z;
      e.xp6(3), e.Oqu(null == D.clsData || null == D.clsData.careCase ? null : D.clsData.careCase.fullName), e.xp6(2), e.Q6J("size", 24)("icon", D.genderIcon), e.xp6(2), e.Oqu(null !== (Z = D.age) && void 0 !== Z ? Z : "—"), e.xp6(3), e.Oqu(null == D.clsData || null == D.clsData.hospitalCard ? null : D.clsData.hospitalCard.number), e.xp6(3), e.Oqu(null == D.clsData || null == D.clsData.patientMovement ? null : D.clsData.patientMovement.wardName), e.xp6(11), e.Q6J("ngForOf", D.catheterElements);
    }
  },
  dependencies: [vo.ez, vo.mk, vo.sg, Oa.h, Oa.q, hp.N, bc.i, bc.$, Rl.xt],
  styles: [".cat-adaptive-cell[_ngcontent-%COMP%]{min-height:140px;width:calc(100vw - 32px);display:flex;flex-direction:column;margin-left:-12px!important;margin-right:0!important;padding-top:4px}.cat-adaptive-cell__name[_ngcontent-%COMP%]{font-weight:600;width:480px}.cat-adaptive-cell__cat-info[_ngcontent-%COMP%]{width:calc(100vw - 32px);display:flex;flex-direction:row;gap:16px;justify-content:space-between;align-items:center;border-bottom:1px solid #E6E6E6}.cat-adaptive-cell__cat-info__no-border[_ngcontent-%COMP%]{border-bottom:unset}.cat-adaptive-cell__cat-type[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-height:38px;margin-top:0;font-size:15px}.cat-adaptive-cell__cat-type__cat-type-text[_ngcontent-%COMP%]{font-size:13px;color:#757575;height:18px;padding-top:4px}.cat-adaptive-cell__cat-type[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{color:#757575;padding-bottom:12px}.cat-adaptive-cell__cat-type[_ngcontent-%COMP%]   .cell-color[_ngcontent-%COMP%]{color:#cd3b2b;font-weight:600}.cat-adaptive-cell__name-age-cell[_ngcontent-%COMP%]{width:calc(100vw - 32px);display:flex;flex-direction:row;gap:24px;align-items:center;justify-content:space-between}.cat-adaptive-cell[_ngcontent-%COMP%]   .age-cell[_ngcontent-%COMP%]{width:56px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:6px;padding-left:2px}  catheter-adaptive-cell .cdk-row{display:flex;flex-direction:column;height:auto;min-height:140px}  catheter-adaptive-cell .cdk-table{display:flex;flex-direction:column;overflow-y:hidden}.patient-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;align-items:center;height:24px;margin-bottom:8px;font-size:13px;color:#757575}.dot[_ngcontent-%COMP%]{width:3px;height:3px;border-radius:50%;background:#000;opacity:.2}.last-element[_ngcontent-%COMP%]{width:100vw;border-bottom:1px solid #E6E6E6;margin-left:-12px;margin-bottom:-4px}"]
});
