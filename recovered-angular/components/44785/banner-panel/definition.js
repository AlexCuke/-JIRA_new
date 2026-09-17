// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Hh,
  selectors: [["banner-panel"]],
  inputs: {
    patient: "patient",
    isTablet: "isTablet"
  },
  outputs: {
    close: "close"
  },
  decls: 9,
  vars: 4,
  consts: [[1, "dialog-header"], ["lu-text", "", 1, "patient-name"], [1, "patient-details"], [4, "ngIf"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], ["lu-text", ""], [1, "dot"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0)(1, "div")(2, "h2", 1), n._uU(3), n.qZA(), n.TgZ(4, "div", 2), n.YNc(5, la, 10, 8, "ng-container", 3), n.YNc(6, St, 10, 8, "ng-container", 3), n.qZA()(), n.TgZ(7, "button", 4), n.NdJ("click", function () {
      return ce.close.emit();
    }), n._UZ(8, "lu-svg-icon", 5), n.qZA()()), 2 & k && (n.xp6(3), n.Oqu(ce.patient.fio), n.xp6(2), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(2), n.Q6J("size", 24));
  },
  dependencies: [Di.O5, Ro.k, Ci.q, Kt.NZ, Di.uU],
  styles: [".dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background-color:#fff;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}@media (min-width: 961px){.dialog-header[_ngcontent-%COMP%]{padding:12px 24px}}.dialog-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}@media (max-width: 960px){.dialog-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]{font-size:17px}.dialog-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]    {--lu-line-height: 24px !important}}.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]{display:flex;align-items:center;--lu-font-size: 15px;height:24px}@media (max-width: 960px){.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]{gap:6px}}@media (min-width: 961px){.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]{margin-top:4px;color:#333}}@media (min-width: 961px){.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:6px}}.dialog-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:3px;height:3px;background-color:#000!important;border-radius:50%}@media (max-width: 960px){.dialog-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{opacity:.2}}"]
});
