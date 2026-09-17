// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-filters-with-submit"]],
  inputs: {
    data: "data"
  },
  outputs: {
    widgetsValueChanges: "widgetsValueChanges",
    runAction: "runAction"
  },
  features: [t.TTD],
  decls: 4,
  vars: 8,
  consts: [[1, "filters-with-submit"], [3, "options", "defaultPreset", "filterStatus", "applyFilter", "clearAll", "toDefaultFilter"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "div", 0)(1, "dp-universal-list-vertical-filter-panel", 1), t.NdJ("applyFilter", function () {
      return De.submitChanges();
    })("clearAll", function () {
      return De.resetAndSubmit();
    })("toDefaultFilter", function (Cn) {
      return De.applyWidgetAndSubmit(Cn);
    }), t.ALo(2, "filtersWithSubmitGetWidgetsForBtn"), t.YNc(3, Us, 2, 5, "dp-universal-list-widget-container", 2), t.qZA()()), 2 & z && (t.Udp("width", null == De.data.settings ? null : De.data.settings.size), t.xp6(1), t.Q6J("options", De.panelOptions)("defaultPreset", t.lcZ(2, 6, De.data)[0])("filterStatus", De.getFilterStatus()), t.xp6(2), t.Q6J("ngIf", De.formGroupBuilder));
  },
  dependencies: [b.O5, di, Ts, js, ws],
  styles: ["[_nghost-%COMP%]{display:block;height:100%}.filters-with-submit[_ngcontent-%COMP%]{height:100%}"],
  changeDetection: 0
});
