// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Ch,
  selectors: [["app-injections-set-print"]],
  decls: 18,
  vars: 10,
  consts: [[1, "dialog-width"], [3, "title"], [1, "patient-info"], [1, "patient-info__fio"], [1, "patient-info__details"], [1, "dot"], [4, "ngIf"], [1, "qr-footer"], ["lu-button-raised", "", 3, "size", "color", "click"], ["icon", "print", 3, "size"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0)(1, "common-modal-wrapper", 1)(2, "div", 2)(3, "div", 3), n._uU(4), n.qZA(), n.TgZ(5, "div"), n._uU(6), n.qZA(), n.TgZ(7, "div", 4)(8, "span"), n._uU(9), n.qZA(), n._UZ(10, "span", 5), n.TgZ(11, "span"), n._uU(12), n.qZA(), n.YNc(13, tc, 4, 1, "ng-container", 6), n.qZA()(), n.TgZ(14, "div", 7)(15, "button", 8), n.NdJ("click", function () {
      return ce.printLabel();
    }), n._UZ(16, "lu-svg-icon", 9), n._uU(17, " Распечатать "), n.qZA()()()()), 2 & k && (n.xp6(1), n.Q6J("title", "Печать маркировки на инъекционный набор"), n.xp6(3), n.Oqu(ce.modalData.patientFio), n.xp6(2), n.AsE("", ce.modalData.age, " лет, ", ce.modalData.birthday, ""), n.xp6(3), n.Oqu(ce.modalData.medCardNumber), n.xp6(3), n.Oqu(ce.modalData.ward), n.xp6(1), n.Q6J("ngIf", ce.modalData.bed), n.xp6(2), n.Q6J("size", "medium")("color", "blue"), n.xp6(1), n.Q6J("size", 16));
  },
  dependencies: [Di.O5, Hc.$, Ks.mc, Ci.q],
  styles: [".patient-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;font-size:13px;line-height:1.539}.patient-info__fio[_ngcontent-%COMP%]{font-size:15px;font-weight:600;line-height:1.6}.patient-info__details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.qr-footer[_ngcontent-%COMP%]{margin-top:16px;text-align:right}@media (max-width: 960px){.qr-footer[_ngcontent-%COMP%]{margin-top:32px}}.qr-footer[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-content:first-child{display:none}.dialog-width[_ngcontent-%COMP%]{width:648px}@media (max-width: 960px){.dialog-width[_ngcontent-%COMP%]{width:568px}}"],
  changeDetection: 0
});
