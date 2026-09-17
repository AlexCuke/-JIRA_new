// Exact compiled component metadata; references belong to modules/44785.js
({
  type: xh,
  selectors: [["app-preparing-tablet-holders"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(cn, 5), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.preparingFilterPanel = Ye.first);
    }
  },
  decls: 7,
  vars: 4,
  consts: [[1, "preparation-container"], [3, "filtersChanged", "dateChanged", "heightChanged"], ["preparingFilterPanel", ""], ["class", "loader", 4, "ngIf", "ngIfElse"], ["tableContainer", ""], [1, "loader"], [1, "preparation-content", 3, "ngStyle"], [3, "tasks", "groupedTasks", "groupingMode", "selectedPeriod", "slotAction", 4, "ngIf"], [3, "tasks", "selectedPeriod", "searchQuery", "slotAction", 4, "ngIf"], [3, "tasks", "groupedTasks", "groupingMode", "selectedPeriod", "slotAction"], [3, "tasks", "selectedPeriod", "searchQuery", "slotAction"]],
  template: function (k, ce) {
    if (1 & k && (n.TgZ(0, "div", 0)(1, "app-preparing-filters", 1, 2), n.NdJ("filtersChanged", function (Tt) {
      return ce.onFiltersChanged(Tt);
    })("dateChanged", function (Tt) {
      return ce.onDateChanged(Tt);
    })("heightChanged", function (Tt) {
      return ce.onHeightChanged(Tt);
    }), n.qZA(), n.YNc(3, xn, 2, 0, "div", 3), n.ALo(4, "async"), n.YNc(5, zo, 3, 5, "ng-template", null, 4, n.W1O), n.qZA()), 2 & k) {
      const Ye = n.MAs(6);
      n.xp6(3), n.Q6J("ngIf", n.lcZ(4, 2, ce.isLoading$))("ngIfElse", Ye);
    }
  },
  dependencies: [Di.O5, Di.PC, qr.d, qf, ie, Lt, Di.Ov],
  styles: ["@media (max-width: 960px){[_nghost-%COMP%]{display:block;height:calc(100% - 56px)}}.loader[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:48px}.preparation-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background-color:#fff}@media (max-width: 960px){.preparation-content[_ngcontent-%COMP%]{height:100%}}"],
  changeDetection: 0
});
