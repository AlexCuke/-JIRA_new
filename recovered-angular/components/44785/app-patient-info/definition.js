// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Uf,
  selectors: [["app-patient-info"]],
  inputs: {
    patient: "patient",
    searchTerm: "searchTerm",
    compact: "compact"
  },
  decls: 7,
  vars: 10,
  consts: [[1, "patient-info"], [1, "patient-info__name", 3, "innerHTML"], ["class", "patient-info__age", 4, "ngIf"], ["lu-text", "", "class", "patient-info__meta", 4, "ngIf"], ["lu-text", "", "class", "patient-info__meta patient-info__meta--tag", 4, "ngIf"], [1, "patient-info__age"], ["class", "icon-male", "icon", "male2", 3, "size", 4, "ngIf"], ["class", "icon-female", "icon", "female2", 3, "size", 4, "ngIf"], ["icon", "male2", 1, "icon-male", 3, "size"], ["icon", "female2", 1, "icon-female", 3, "size"], ["lu-text", "", 1, "patient-info__meta"], ["lu-text", "", 1, "patient-info__meta", "patient-info__meta--tag"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0), n._UZ(1, "span", 1), n.ALo(2, "highlight"), n.YNc(3, wu, 4, 3, "span", 2), n.YNc(4, Su, 2, 1, "span", 3), n.YNc(5, wf, 2, 1, "span", 3), n.YNc(6, Yg, 2, 1, "span", 4), n.qZA()), 2 & k && (n.ekj("patient-info--compact", ce.compact), n.xp6(1), n.Q6J("innerHTML", n.xi3(2, 7, null == ce.patient ? null : ce.patient.name, ce.searchTerm), n.oJD), n.xp6(2), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.age), n.xp6(1), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.historyNumber), n.xp6(1), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.ward), n.xp6(1), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.insurance));
  },
  dependencies: [Di.O5, Ci.q, Kt.NZ, ms.S],
  styles: ["[_nghost-%COMP%]{display:block;flex-shrink:0}.patient-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px 20px;width:max-content}.patient-info--compact[_ngcontent-%COMP%]{gap:4px 12px}.patient-info[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-flex;align-items:center;white-space:nowrap}.patient-info[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child):before{content:\"\";display:inline-block;width:1px;height:15px;background-color:#ccc;margin:0 8px 0 5px}.patient-info__name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-style:normal;font-weight:600;font-size:15px;white-space:pre-wrap!important;line-height:24px}.patient-info__age[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:15px;font-weight:400;color:#333;line-height:22px}.patient-info__meta[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#333;line-height:24px}.patient-info__meta--tag[_ngcontent-%COMP%]{background-color:transparent}.icon-female[_ngcontent-%COMP%]{--lu-svg-icon-color: #FF88C1}.icon-male[_ngcontent-%COMP%]{--lu-svg-icon-color: #67BDE3}"],
  changeDetection: 0
});
