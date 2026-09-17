// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-segment-group-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "displayValueFn"], [3, "formControl", "staticTerminology", "terminologyName", "displayValueFn"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.YNc(0, Ws, 3, 6, "ng-container", 0), t.YNc(1, ha, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, ua, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
      const Nr = t.MAs(2);
      t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;width:100%}"],
  changeDetection: 0
});
