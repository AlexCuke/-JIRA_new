// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-view"]],
  viewQuery: function (z, De) {
    if (1 & z && t.Gf(yl, 5), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
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
    goToPage: "goToPage",
    group: "group",
    outsideClick: "outsideClick"
  },
  decls: 6,
  vars: 3,
  consts: [[4, "ngIf"], ["panelsContent", ""], ["auxiliaryContent", ""], [3, "viewData", "panelsContent", "auxiliaryContent"], ["tableContent", "", 1, "table-content"], [3, "layout", "componentRef", "groupingChanged"], ["tableVirtual", ""], ["table", ""], [1, "table-component", 3, "viewData", "goToPage", "refresh", "scrolled", "rowsSort", "clearFilter", "outsideClick", "runActionWithItem"], [3, "layout", "component", "runAction", "widgetsValueChanges", "groupingChanged"], [3, "viewModel"], ["tableColSettings", ""]],
  template: function (z, De) {
    1 & z && (t.YNc(0, ft, 5, 6, "ng-container", 0), t.ALo(1, "universalListViewToLayouts"), t.YNc(2, rn, 2, 5, "ng-template", null, 1, t.W1O), t.YNc(4, En, 3, 3, "ng-template", null, 2, t.W1O)), 2 & z && t.Q6J("ngIf", t.lcZ(1, 1, De.viewData));
  },
  dependencies: [b.O5, Xu, Qa, Wn, ka, pa, Zu, kp, hd, Td],
  styles: [".table-content[_ngcontent-%COMP%]{height:100%}"],
  changeDetection: 0
});
