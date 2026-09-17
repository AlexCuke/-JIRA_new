// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-gamma"]],
  viewQuery: function (z, De) {
    if (1 & z && (t.Gf(cr, 5), t.Gf(Vo, 5)), 2 & z) {
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
  decls: 24,
  vars: 17,
  consts: [[3, "tabs"], ["dpPatientListLayoutHeader", ""], ["lu-text", ""], ["class", "title__after-panel", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], ["class", "title-expand-panel title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter", 4, "ngIf"], [1, "right-section", "__right-section"], ["lu-button-icon", ""], ["icon", "refresh", 3, "size", "click"], ["class", "__additional-information", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [1, "main-container-panel", "__panel"], [1, "main-container-panel-left"], [3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "runAction"], [3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], ["dpLayoutPortal", "filters-tab-title"], ["dpLayoutPortal", "filters-tab-content"], ["filterInCol", ""], [1, "title__after-panel", 3, "viewData", "formGroupBuilder", "runAction"], [1, "title-expand-panel", "title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter"], [1, "__additional-information", 3, "viewData", "formGroupBuilder", "runAction"], [3, "selectedFiltersCount", 4, "ngIf"], [3, "selectedFiltersCount"], [3, "viewData", "formGroupBuilder", "changeFilter", "clearFilter", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "changeFilter", "clearFilter"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
  template: function (z, De) {
    if (1 & z && (t.TgZ(0, "dp-patient-list-layout", 0), t.ynx(1, 1), t.TgZ(2, "h2", 2), t._uU(3), t.qZA(), t.YNc(4, ta, 1, 2, "dp-universal-list-widget-container", 3), t.YNc(5, za, 1, 2, "dp-universal-list-title-expand-panel", 4), t.TgZ(6, "div", 5)(7, "button", 6)(8, "lu-svg-icon", 7), t.NdJ("click", function () {
      return De.onReload();
    }), t.qZA()(), t.YNc(9, cs, 1, 2, "dp-universal-list-widget-container", 8), t.qZA(), t.BQk(), t.TgZ(10, "div", 9)(11, "div", 10), t.YNc(12, Gs, 1, 2, "dp-universal-list-widget-container", 11), t.qZA(), t.YNc(13, du, 1, 2, "dp-universal-list-widget-container", 11), t.qZA(), t.TgZ(14, "dp-universal-list-expansion-panel", 12), t.NdJ("runAction", function (Cn) {
      return De.onRunAction(Cn);
    }), t.ALo(15, "universalListExpansionPanelLayouts"), t.qZA(), t.TgZ(16, "dp-list-table", 13), t.NdJ("refresh", function () {
      return De.onReload();
    })("scrolled", function () {
      return De.onScrolled();
    })("rowsSort", function (Cn) {
      return De.onRowsSort(Cn);
    })("clearFilter", function () {
      return De.onClear();
    })("runActionWithItem", function (Cn) {
      return De.onRunAction(Cn);
    }), t.qZA(), t._UZ(17, "dp-universal-list-table-settings", 14, 15), t.ALo(19, "universalListTableSettingsView"), t.YNc(20, Yu, 1, 1, "ng-template", 16), t.YNc(21, ou, 1, 1, "ng-template", 17), t.qZA(), t.YNc(22, wh, 2, 1, "ng-template", null, 18, t.W1O)), 2 & z) {
      const rt = t.MAs(23);
      t.Q6J("tabs", De.portalTabs), t.xp6(3), t.Oqu(De.viewData.title), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder && De.viewData.layouts.search.widgets.length > 0), t.xp6(3), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(3), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("viewData", t.lcZ(15, 13, De.viewData.layouts))("formGroupBuilder", De.formGroupBuilder), t.xp6(2), t.Q6J("viewData", De.viewData.table)("filterInColTemplate", rt), t.xp6(1), t.Q6J("viewModel", t.lcZ(19, 15, De.viewData.table));
    }
  },
  dependencies: [b.O5, Un, Bt, j.S1, L.q, I.NZ, f.k, mo, wn, di, j.hO, cr, mr, Wn, ka, j.QQ, jr, Zu, Gr],
  styles: ["[_nghost-%COMP%]{display:block;position:relative;height:100%}.title-expand-panel[_ngcontent-%COMP%]{width:730px}.title-expand__panel[_ngcontent-%COMP%], .title__after-panel[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2)}.main-container-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.main-container-panel-left[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.__right-section[_ngcontent-%COMP%]{margin-left:auto}.right-section[_ngcontent-%COMP%]{display:flex}.right-section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:var(--lu-base-gutter)}.__panel[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 2)}"],
  changeDetection: 0
});
