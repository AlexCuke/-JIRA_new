// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-quick-filters"]],
  inputs: {
    data: "data"
  },
  outputs: {
    widgetsValueChanges: "widgetsValueChanges",
    groupingChanged: "groupingChanged",
    runAction: "runAction"
  },
  features: [t.TTD],
  decls: 2,
  vars: 1,
  consts: [[1, "quick-filters"], [3, "viewData", "formGroupBuilder", "showLabels", "labelOrientation", "widgetsWithoutLabels", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "showLabels", "labelOrientation", "widgetsWithoutLabels", "runAction"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "div", 0), t.YNc(1, It, 2, 7, "dp-universal-list-widget-container", 1), t.qZA()), 2 & z && (t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder));
  },
  dependencies: [b.O5, xo, Ko],
  styles: ["[_nghost-%COMP%]{display:block;padding:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}.quick-filters[_ngcontent-%COMP%]{min-height:40px}"],
  changeDetection: 0
});
