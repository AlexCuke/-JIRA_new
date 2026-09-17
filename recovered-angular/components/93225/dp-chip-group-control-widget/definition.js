// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-chip-group-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["fromStaticModule", ""], ["noTerminologyError", ""], [4, "ngIf"], [3, "featureKey", "terminologyName", "formControl", "displayValueFn"], [3, "terminologyName", "staticTerminology", "formControl", "displayValueFn"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.YNc(0, Dn, 2, 1, "ng-container", 0), t.YNc(1, li, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, zn, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
      const Nr = t.MAs(2);
      t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .dp-ul-chip-checkbox-postfix{padding-left:calc(var(--lu-base-gutter) * .5);text-align:center;color:var(--lu-black-54)}"],
  changeDetection: 0
});
