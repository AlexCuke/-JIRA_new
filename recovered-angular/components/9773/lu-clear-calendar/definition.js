// Exact compiled component metadata; references belong to modules/9773.js
({
  type: O,
  selectors: [["lu-clear-calendar"]],
  inputs: {
    calendarIcon: "calendarIcon"
  },
  features: [t._Bn([{
    provide: a.BU,
    useExisting: O
  }]), t.qOj],
  decls: 2,
  vars: 2,
  consts: [["lu-button-icon", "", "color", "black", "colorType", "light", "type", "button", 3, "tabIndex", "disabled", "click", "focusout", 4, "ngIf"], ["icon", "calendar", 3, "size", "tabIndex", 4, "ngIf"], ["lu-button-icon", "", "color", "black", "colorType", "light", "type", "button", 3, "tabIndex", "disabled", "click", "focusout"], ["icon", "close", 3, "size"], ["icon", "calendar", 3, "size", "tabIndex"]],
  template: function (C, v) {
    1 & C && (t.YNc(0, b, 2, 3, "button", 0), t.YNc(1, A, 1, 2, "lu-svg-icon", 1)), 2 & C && (t.Q6J("ngIf", v.hasValue), t.xp6(1), t.Q6J("ngIf", !v.hasValue && v.calendarIcon));
  },
  dependencies: [m.O5, d.k, M.q],
  styles: ["[data-lu-disabled=true][_nghost-%COMP%]{pointer-events:none}[data-lu-disabled=true][_nghost-%COMP%]   lu-svg-icon[icon=calendar][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}lu-svg-icon[icon=calendar][_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer;--lu-svg-icon-color: var(--lu-black-40)}"],
  changeDetection: 0
});
