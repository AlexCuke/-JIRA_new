// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-alpha"]],
  viewQuery: function (z, De) {
    if (1 & z && (t.Gf(cr, 5), t.Gf(ea, 5)), 2 & z) {
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
  decls: 21,
  vars: 15,
  consts: [[1, "main-container"], [1, "main-container__header", "header-container"], ["lu-text", ""], ["class", "title-expand-panel title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter", 4, "ngIf"], [1, "right-section", "__right-section"], ["lu-button-icon", ""], ["icon", "refresh", 3, "size", "click"], ["class", "__additional-information", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [1, "main-content"], [1, "main-container-panel", "__panel"], [3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "runAction"], [3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], ["filterInCol", ""], [1, "title-expand-panel", "title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter"], [1, "__additional-information", 3, "viewData", "formGroupBuilder", "runAction"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
  template: function (z, De) {
    if (1 & z && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2), t._uU(3), t.qZA(), t.YNc(4, Zs, 1, 2, "dp-universal-list-title-expand-panel", 3), t.TgZ(5, "div", 4)(6, "button", 5)(7, "lu-svg-icon", 6), t.NdJ("click", function () {
      return De.onReload();
    }), t.qZA()(), t.YNc(8, xl, 1, 2, "dp-universal-list-widget-container", 7), t.qZA()(), t.TgZ(9, "div", 8)(10, "div", 9), t.YNc(11, Ec, 1, 2, "dp-universal-list-widget-container", 10), t.YNc(12, Ya, 1, 2, "dp-universal-list-widget-container", 10), t.qZA(), t.TgZ(13, "dp-universal-list-expansion-panel", 11), t.NdJ("runAction", function (Cn) {
      return De.onRunAction(Cn);
    }), t.ALo(14, "universalListExpansionPanelLayouts"), t.qZA(), t.TgZ(15, "dp-list-table", 12), t.NdJ("refresh", function () {
      return De.onReload();
    })("scrolled", function () {
      return De.onScrolled();
    })("rowsSort", function (Cn) {
      return De.onRowsSort(Cn);
    })("clearFilter", function () {
      return De.onClear();
    })("runActionWithItem", function (Cn) {
      return De.onRunAction(Cn);
    }), t.qZA(), t._UZ(16, "dp-universal-list-table-settings", 13, 14), t.ALo(18, "universalListTableSettingsView"), t.qZA()(), t.YNc(19, ku, 2, 1, "ng-template", null, 15, t.W1O)), 2 & z) {
      const rt = t.MAs(20);
      t.xp6(3), t.Oqu(De.viewData.title), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(3), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(3), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("viewData", t.lcZ(14, 11, De.viewData.layouts))("formGroupBuilder", De.formGroupBuilder), t.xp6(2), t.Q6J("viewData", De.viewData.table)("filterInColTemplate", rt), t.xp6(1), t.Q6J("viewModel", t.lcZ(18, 13, De.viewData.table));
    }
  },
  dependencies: [b.O5, f.k, I.NZ, L.q, wn, di, cr, mr, Wn, ka, jr, Zu],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;height:100%;overflow:hidden}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.main-container-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.header-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3);border-bottom:1px solid var(--lu-black-10)}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}.title-expand-panel[_ngcontent-%COMP%]{width:730px}.title-expand__panel[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2)}.right-section[_ngcontent-%COMP%]{display:flex}.__additional-information[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.__right-section[_ngcontent-%COMP%]{margin-left:auto}.__panel[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}"],
  changeDetection: 0
});
