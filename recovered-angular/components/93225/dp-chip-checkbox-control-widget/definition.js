// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-chip-checkbox-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 5,
  vars: 7,
  consts: [["positions", "top-left", 1, "dp-ul-chip-checkbox", 3, "luTooltip", "canOpen", "formControl", "preventDeselect"], [3, "availableIcons"], ["class", "dp-ul-chip-checkbox-postfix", 4, "ngIf"], [1, "dp-ul-chip-checkbox-postfix"]],
  template: function (Pt, Ki) {
    1 & Pt && (t.TgZ(0, "lu-chip", 0)(1, "dp-icon-wrapper", 1)(2, "span"), t._uU(3), t.YNc(4, fr, 2, 1, "span", 2), t.qZA()()()), 2 & Pt && (t.Q6J("luTooltip", Ki.tooltip)("canOpen", !!Ki.tooltip)("formControl", Ki.formControl)("preventDeselect", Ki.preventDeselect()), t.xp6(1), t.Q6J("availableIcons", Ki.availableIcons), t.xp6(2), t.hij(" ", Ki.text, " "), t.xp6(1), t.Q6J("ngIf", void 0 !== Ki.postfixValue));
  },
  dependencies: [qe.O5, a.JJ, a.oH, J.r, m.ZS, fe.$],
  styles: ["[_nghost-%COMP%]{display:block}.dp-ul-chip-checkbox[_ngcontent-%COMP%]{display:flex;flex-shrink:0;font-weight:400;font-size:15px;line-height:24px}.dp-ul-chip-checkbox-postfix[_ngcontent-%COMP%]{padding-left:calc(var(--lu-base-gutter) * .5);text-align:center;color:var(--lu-black-54)}"],
  changeDetection: 0
});
