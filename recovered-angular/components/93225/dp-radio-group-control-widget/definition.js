// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-radio-group-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "clearOption", "displayValueFn", "itemsOrientation"], [3, "formControl", "clearOption", "staticTerminology", "terminologyName", "displayValueFn", "itemsOrientation"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.YNc(0, oo, 3, 8, "ng-container", 0), t.YNc(1, Ci, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, lo, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
      const Nr = t.MAs(2);
      t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
