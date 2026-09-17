// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-delta"]],
  viewQuery: function (z, De) {
    if (1 & z && (t.Gf(cr, 5), t.Gf(_d, 5)), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.expansionPanel = rt.first), t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
    }
  },
  inputs: {
    viewData: "viewData"
  },
  outputs: {
    rowsSort: "rowsSort",
    runAction: "runAction",
    changeFilter: "changeFilter",
    scrolled: "scrolled",
    reload: "reload",
    group: "group"
  },
  features: [t.TTD],
  decls: 7,
  vars: 7,
  consts: [["class", "table-section", 4, "ngIf", "ngIfElse"], ["filterInCol", ""], [1, "filter-section", 3, "options", "defaultPreset", "filterStatus", "applyFilter", "clearAll", "toDefaultFilter"], ["id", "filterPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["loading", ""], [1, "table-section"], [1, "head"], ["lu-text", ""], [3, "viewData", "formGroupBuilder", 4, "ngIf"], ["class", "__quick-filters-left", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [1, "right-section", "__right-section"], ["lu-button-icon", "", 1, "refresh-btn"], ["icon", "refresh", 3, "size", "click"], ["class", "__quick-filters-right", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "runAction"], [1, "table-component", 3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], [3, "viewData", "formGroupBuilder"], [1, "__quick-filters-left", 3, "viewData", "formGroupBuilder", "runAction"], [1, "__quick-filters-right", 3, "viewData", "formGroupBuilder", "runAction"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"], ["id", "filterPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"], [1, "preloader", "__preloader"]],
  template: function (z, De) {
    if (1 & z && (t.YNc(0, _p, 16, 14, "div", 0), t.YNc(1, af, 2, 1, "ng-template", null, 1, t.W1O), t.TgZ(3, "dp-universal-list-vertical-filter-panel", 2), t.NdJ("applyFilter", function () {
      return De.onApplyFilter();
    })("clearAll", function () {
      return De.onClearFilterByWidgets((null == De.viewData.layouts.filterPanel ? null : De.viewData.layouts.filterPanel.widgets) || []);
    })("toDefaultFilter", function (Cn) {
      return De.setWidgetControlToSelect(Cn);
    }), t.YNc(4, Lc, 1, 3, "dp-universal-list-widget-container", 3), t.qZA(), t.YNc(5, il, 1, 0, "ng-template", null, 4, t.W1O)), 2 & z) {
      const rt = t.MAs(6);
      t.Q6J("ngIf", De.formGroupBuilder)("ngIfElse", rt), t.xp6(3), t.Q6J("options", t.DdM(6, vd))("defaultPreset", De.viewData.defaultWidgetPreset)("filterStatus", De.getFilterStatus()), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder);
    }
  },
  dependencies: [b.O5, L.q, I.NZ, f.k, di, Ts, mr, h.d, cr, Wn, ka, jr, Zu],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;height:100%}.table-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:2;overflow:hidden}.filter-section[_ngcontent-%COMP%]{min-width:404px;flex-basis:404px}.right-section[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.table-component[_ngcontent-%COMP%]{overflow:auto}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:8px 24px;align-items:center}.__right-section[_ngcontent-%COMP%]{margin-left:auto}.__quick-filters-right[_ngcontent-%COMP%]{margin-left:8px}.__quick-filters-left[_ngcontent-%COMP%]{margin-left:24px}.preloader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"],
  changeDetection: 0
});
