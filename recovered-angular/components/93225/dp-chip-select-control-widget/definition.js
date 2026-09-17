// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-chip-select-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["fromStaticModule", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl"], [3, "terminologyName", "staticTerminology", "formControl"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.YNc(0, Qn, 2, 3, "ng-container", 0), t.YNc(1, ui, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, To, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
      const Nr = t.MAs(2);
      t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
    }
  },
  dependencies: [qe.O5, a.JJ, a.oH, m.E9, m.A1, f.dj, ke.q],
  encapsulation: 2,
  changeDetection: 0
});
