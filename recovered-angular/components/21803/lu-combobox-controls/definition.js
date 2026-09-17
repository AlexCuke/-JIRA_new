// Exact compiled component metadata; references belong to modules/21803.js
({
  type: f,
  selectors: [["lu-combobox-controls"]],
  inputs: {
    dropdown: "dropdown",
    clearButton: "clearButton",
    chevronButton: "chevronButton"
  },
  features: [t._Bn([{
    provide: m.fU,
    useExisting: f
  }, {
    provide: m.Oc,
    useValue: d.Ls.PRIMITIVE
  }]), t.qOj],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["lu-button-icon", "", "color", "black", "class", "lu-chevron-button", "colorType", "light", 3, "tabIndex", "disabled", "focusout", "click", 4, "ngIf"], ["lu-button-icon", "", "color", "black", "colorType", "light", 1, "lu-chevron-button", 3, "tabIndex", "disabled", "focusout", "click"], ["icon", "chevron-down", 3, "luChevronRotate"]],
  template: function (h, x) {
    1 & h && (t.YNc(0, O, 1, 0, "lu-clear-control", 0), t.YNc(1, L, 2, 3, "button", 1)), 2 & h && (t.Q6J("ngIf", x.clearButton), t.xp6(1), t.Q6J("ngIf", x.chevronButton));
  },
  dependencies: [M.O5, b.T, A.k, N.q, I.c],
  styles: ["[_nghost-%COMP%]:last-child{padding-right:6px}lu-clear-control[_ngcontent-%COMP%]{--lu-clear-control-width: 28px}button[_ngcontent-%COMP%]{width:34px}"],
  changeDetection: 0
});
