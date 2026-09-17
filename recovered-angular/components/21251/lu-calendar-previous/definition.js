// Exact compiled component metadata; references belong to modules/21251.js
({
  type: L,
  selectors: [["lu-calendar-previous"]],
  inputs: {
    stepUnit: "stepUnit",
    step: "step",
    minDate: "minDate",
    icon: "icon",
    iconSize: "iconSize"
  },
  features: [t._Bn([{
    provide: M.BU,
    useExisting: L
  }]), t.qOj],
  decls: 2,
  vars: 4,
  consts: [["lu-button-icon", "", "color", "black", "colorType", "light", 3, "tabIndex", "disabled", "click"], [3, "icon", "size"]],
  template: function (v, f) {
    1 & v && (t.TgZ(0, "button", 0), t.NdJ("click", function () {
      return f.previous(), f.onTouched();
    }), t._UZ(1, "lu-svg-icon", 1), t.qZA()), 2 & v && (t.Q6J("tabIndex", -1)("disabled", f.disabled), t.xp6(1), t.Q6J("icon", f.icon)("size", f.iconSize));
  },
  dependencies: [b.k, A.q],
  styles: ["[_nghost-%COMP%]{display:inline-block}[disabled=true][_nghost-%COMP%]{pointer-events:none!important}"],
  changeDetection: 0
});
