// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-beta"]],
  viewQuery: function (z, De) {
    if (1 & z && t.Gf(gp, 5), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
    }
  },
  inputs: {
    viewData: "viewData"
  },
  outputs: {
    rowsSort: "rowsSort",
    action: "action",
    changeFilter: "changeFilter",
    scrolled: "scrolled",
    reload: "reload",
    group: "group"
  },
  features: [t.TTD],
  decls: 16,
  vars: 9,
  consts: [[1, "main-container"], [1, "main-container__header", "header-container"], [1, "__before-title"], [3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], ["lu-text", ""], [1, "__after-title"], [1, "main-content"], ["class", "__panel", 4, "ngIf"], [3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], ["filterInCol", ""], [3, "viewData", "formGroupBuilder", "runAction"], [1, "__panel"], [3, "viewData", "updateFilter"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
  template: function (z, De) {
    if (1 & z && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), t.YNc(3, fd, 1, 2, "dp-universal-list-widget-container", 3), t.qZA(), t.TgZ(4, "h2", 4), t._uU(5), t.qZA(), t.TgZ(6, "div", 5), t.YNc(7, kn, 1, 2, "dp-universal-list-widget-container", 3), t.qZA()(), t.TgZ(8, "div", 6), t.YNc(9, nn, 2, 1, "div", 7), t.TgZ(10, "dp-list-table", 8), t.NdJ("refresh", function () {
      return De.onReload();
    })("scrolled", function () {
      return De.onScrolled();
    })("rowsSort", function (Cn) {
      return De.onRowsSort(Cn);
    })("clearFilter", function () {
      return De.onClear();
    })("runActionWithItem", function (Cn) {
      return De.onRunAction(Cn);
    }), t.qZA(), t._UZ(11, "dp-universal-list-table-settings", 9, 10), t.ALo(13, "universalListTableSettingsView"), t.qZA()(), t.YNc(14, Jn, 2, 1, "ng-template", null, 11, t.W1O)), 2 & z) {
      const rt = t.MAs(15);
      t.xp6(3), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(2), t.Oqu(De.viewData.title), t.xp6(2), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(2), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("viewData", De.viewData.table)("filterInColTemplate", rt), t.xp6(1), t.Q6J("viewModel", t.lcZ(13, 7, De.viewData.table));
    }
  },
  dependencies: [b.O5, I.NZ, ys, di, mr, Wn, ka, Zu],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;width:100vw;height:100%;overflow:hidden}.__before-title[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) / 2)}.__after-title[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2);margin-bottom:calc(var(--lu-base-gutter) / -4)}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.main-container__header[_ngcontent-%COMP%]{margin-top:var(--lu-base-gutter)}.main-container-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.header-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3)}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}.__panel[_ngcontent-%COMP%]{margin:0 0 var(--lu-base-gutter) calc(var(--lu-base-gutter) * 1.5)}"],
  changeDetection: 0
});
