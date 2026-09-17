// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-age-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 5,
  vars: 5,
  consts: [["dividerType", "full", 1, "controls", 3, "formGroup"], [1, "input-control"], ["luInput", "", "luInputNumber", "", "luNumberEntry", "", "formControlName", "ageNumber", 3, "placeholder"], ["formControlName", "ageNumberType", 1, "combobox-control", 3, "clearButton", "displayValueFn", "compareFn"], [3, "items", "itemContent", 4, "luData"], [3, "items", "itemContent"], ["itemContent", ""], ["lu-text", ""]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.TgZ(0, "lu-combined-controls", 0)(1, "lu-input-wrapper", 1), t._UZ(2, "input", 2), t.qZA(), t.TgZ(3, "lu-combobox", 3), t.YNc(4, Me, 3, 2, "lu-data-list", 4), t.qZA()()), 2 & Pt) {
      let Nr;
      t.Q6J("formGroup", Ki.formGroup), t.xp6(2), t.Q6J("placeholder", null !== (Nr = null == Ki.widget.data ? null : Ki.widget.data.placeholder) && void 0 !== Nr ? Nr : ""), t.xp6(1), t.Q6J("clearButton", !1)("displayValueFn", Ki.terminologyDisplayValue)("compareFn", Ki.compareTerminologyItems);
    }
  },
  dependencies: [a.Fj, a.JJ, a.JL, a.sg, a.u, C.o, R.HY, B.l, y.l, v.m, Se.l, j.g, W.NZ, F.L],
  styles: ["[_nghost-%COMP%]{display:block;width:calc(var(--lu-base-gutter) * 22)}.controls[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-control[_ngcontent-%COMP%]{flex-basis:calc(var(--lu-base-gutter) * 10)}.combobox-control[_ngcontent-%COMP%]{flex-basis:calc(var(--lu-base-gutter) * 20)}"],
  changeDetection: 0
});
