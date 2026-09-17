// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-layout"]],
  inputs: {
    viewData: "viewData",
    panelsContent: "panelsContent",
    auxiliaryContent: "auxiliaryContent"
  },
  ngContentSelectors: ju,
  decls: 5,
  vars: 5,
  consts: [[1, "table-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "main-content"], [4, "ngIf"], [1, "vertical-panel"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "horizontal-panel", 3, "order", 4, "ngSwitchCase"], ["class", "horizontal-panel horizontal-panel--table", 3, "order", 4, "ngSwitchCase"], [1, "horizontal-panel"], [1, "horizontal-panel", "horizontal-panel--table"]],
  template: function (z, De) {
    1 & z && (t.F$t(_u), t.TgZ(0, "div", 0), t.YNc(1, lc, 3, 6, "ng-container", 1), t.TgZ(2, "div", 2), t.YNc(3, ah, 4, 3, "ng-container", 1), t.qZA()(), t.YNc(4, Md, 2, 4, "ng-container", 3)), 2 & z && (t.xp6(1), t.Q6J("ngForOf", De.verticalVisiblePanels)("ngForTrackBy", De.trackByLayoutIdOrderCode), t.xp6(2), t.Q6J("ngForOf", De.horizontalVisiblePanels)("ngForTrackBy", De.trackByLayoutIdOrderCode), t.xp6(1), t.Q6J("ngIf", De.viewData.auxiliaryPanel));
  },
  dependencies: [b.sg, b.O5, b.tP, b.RF, b.n9],
  styles: [".table-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.horizontal-panel--table[_ngcontent-%COMP%]{z-index:0;flex:1;overflow:auto}.vertical-panel[_ngcontent-%COMP%]{overflow:hidden}"],
  changeDetection: 0
});
