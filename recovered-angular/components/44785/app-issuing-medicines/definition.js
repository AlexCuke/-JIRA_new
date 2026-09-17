// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Yh,
  selectors: [["app-issuing-medicines"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(_f, 5), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.issuingFilterPanel = Ye.first);
    }
  },
  decls: 7,
  vars: 4,
  consts: [[1, "issuing-medicines-container"], [3, "filtersChanged"], ["issuingFilterPanel", ""], ["class", "loader", 4, "ngIf", "ngIfElse"], ["tableContainer", ""], [1, "loader"], ["class", "issuing-medicines-content", 3, "ngStyle", 4, "ngIf"], [1, "issuing-medicines-content", 3, "ngStyle"], [3, "groupingMode", "patientData", "medicamentData", "timeHeaderMode", "hourlyHeaders", "selectedPeriod", "searchTerm", "slotAction", 4, "ngIf"], [3, "groupingMode", "patientData", "medicamentData", "timeHeaderMode", "hourlyHeaders", "selectedPeriod", "searchTerm", "slotAction"]],
  template: function (k, ce) {
    if (1 & k && (n.TgZ(0, "div", 0)(1, "pill-plan-medicines-panel", 1, 2), n.NdJ("filtersChanged", function (Tt) {
      return ce.onFiltersChanged(Tt);
    }), n.qZA(), n.YNc(3, Jf, 2, 0, "div", 3), n.ALo(4, "async"), n.YNc(5, Rm, 2, 3, "ng-template", null, 4, n.W1O), n.qZA()), 2 & k) {
      const Ye = n.MAs(6);
      n.xp6(3), n.Q6J("ngIf", n.lcZ(4, 2, ce.isLoading$))("ngIfElse", Ye);
    }
  },
  dependencies: [Di.O5, Di.PC, qr.d, z, ml, Ep, Di.Ov],
  styles: ["@media (max-width: 960px){[_nghost-%COMP%]{display:block;height:calc(100% - 56px)}}@media (max-width: 960px){.issuing-medicines-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}}@media (max-width: 960px){.issuing-medicines-content[_ngcontent-%COMP%]{height:100%}}"],
  changeDetection: 0
});
