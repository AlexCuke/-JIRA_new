// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-range-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  features: [t.TTD],
  decls: 12,
  vars: 12,
  consts: [[1, "numeric-range-control", 3, "formGroup"], ["lu-text", "", "class", "numeric-range-control__divider-prefix", 3, "size", 4, "ngIf"], [1, "numeric-control-field"], ["luInput", "", "luInputString", "", "formControlName", "start", 3, "placeholder", "luMask"], ["lu-text", "", 1, "numeric-range-control__divider", 3, "size"], ["luInput", "", "luInputString", "", "formControlName", "end", 3, "placeholder", "luMask"], ["lu-text", "", "class", "numeric-range-control__divider-postfix", 3, "size", 4, "ngIf"], ["type", "error", 4, "ngIf"], ["lu-text", "", 1, "numeric-range-control__divider-prefix", 3, "size"], ["lu-text", "", 1, "numeric-range-control__divider-postfix", 3, "size"], ["type", "error"], ["icon", "warning", 3, "size"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, xa, 2, 2, "span", 1), t.TgZ(2, "lu-input-wrapper", 2), t._UZ(3, "input", 3), t.qZA(), t.TgZ(4, "span", 4), t._uU(5), t.qZA(), t.TgZ(6, "lu-input-wrapper", 2), t._UZ(7, "input", 5), t.qZA(), t.YNc(8, rs, 2, 2, "span", 6), t.qZA(), t.YNc(9, Js, 3, 1, "lu-form-message", 7), t.YNc(10, ho, 3, 1, "lu-form-message", 7), t.YNc(11, uo, 3, 1, "lu-form-message", 7)), 2 & Pt) {
      let Nr;
      t.Q6J("formGroup", Ki.formGroup), t.xp6(1), t.Q6J("ngIf", Ki.rangeDisplayOptions.prefix), t.xp6(2), t.Q6J("placeholder", Ki.placeHolderOptions.start)("luMask", Ki.mask), t.xp6(1), t.Q6J("size", "normal"), t.xp6(1), t.hij(" ", Ki.rangeDisplayOptions.divider, " "), t.xp6(2), t.Q6J("placeholder", Ki.placeHolderOptions.end)("luMask", Ki.mask), t.xp6(1), t.Q6J("ngIf", Ki.rangeDisplayOptions.postfix), t.xp6(1), t.Q6J("ngIf", (null == Ki.formGroup || null == (Nr = Ki.formGroup.get("start")) ? null : Nr.hasError("rangeFormat")) || (null == Ki.formGroup || null == (Nr = Ki.formGroup.get("end")) ? null : Nr.hasError("rangeFormat"))), t.xp6(1), t.Q6J("ngIf", null == Ki.formGroup ? null : Ki.formGroup.hasError("periodIsValid")), t.xp6(1), t.Q6J("ngIf", null == Ki.formGroup ? null : Ki.formGroup.hasError("rangeIsValid"));
    }
  },
  dependencies: [qe.O5, a.Fj, a.JJ, a.JL, a.sg, a.u, G.Bf, Y.H, F.L, R.HY, ae.l, ke.q, W.NZ],
  styles: [".numeric-range-control[_ngcontent-%COMP%]{display:flex;align-items:center}.numeric-range-control__divider[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter)}.numeric-range-control__divider-prefix[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}.numeric-range-control__divider-postfix[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.numeric-control-field[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 10)}"],
  changeDetection: 0
});
