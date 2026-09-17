// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-filter"]],
  inputs: {
    viewData: "viewData",
    formGroupBuilder: "formGroupBuilder"
  },
  outputs: {
    changeFilter: "changeFilter",
    clearFilter: "clearFilter",
    runAction: "runAction"
  },
  decls: 4,
  vars: 14,
  consts: [[3, "formGroup", "hasSelectedParameters", "hasAppliedParameters", "applyDisabled", "applyFilter", "resetFilter"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "dp-filter-panel", 0), t.NdJ("applyFilter", function () {
      return De.onApply();
    })("resetFilter", function () {
      return De.onReset();
    }), t.ALo(1, "hasFilterParameters"), t.ALo(2, "hasFilterParameters"), t.TgZ(3, "dp-universal-list-widget-container", 1), t.NdJ("runAction", function (Cn) {
      return De.onRunAction(Cn);
    }), t.qZA()()), 2 & z && (t.Q6J("formGroup", De.formGroupBuilder.getFormGroupByType("filter"))("hasSelectedParameters", t.xi3(1, 7, De.formGroupBuilder.getFormValueByTypes(t.DdM(13, Li)), De.viewData.initialFilterParams))("hasAppliedParameters", t.xi3(2, 10, De.viewData.currentFilterParams, De.viewData.initialFilterParams))("applyDisabled", De.formGroupBuilder.getFormGroupByType("filter").invalid), t.xp6(3), t.Q6J("viewData", De.viewData.widgets)("showLabels", !0)("formGroupBuilder", De.formGroupBuilder));
  },
  dependencies: [A.JL, A.sg, j.nD, di, j.C3],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-shrink:0;width:100%;overflow:hidden}.numeric-range-control[_ngcontent-%COMP%]{display:flex;align-items:flex-end}.numeric-range-control__divider[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * 1.5) var(--lu-base-gutter)}.numeric-control-field[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 10)}"],
  changeDetection: 0
});
