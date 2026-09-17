// Exact compiled component metadata; references belong to modules/27191.js
({
  type: u,
  selectors: [["lu-combobox-tags"]],
  inputs: {
    dropdown: "dropdown",
    clearButton: "clearButton",
    chevronButton: "chevronButton"
  },
  outputs: {
    itemRemove: "itemRemove"
  },
  features: [t._Bn([{
    provide: I.BU,
    useExisting: u
  }]), t.qOj],
  decls: 6,
  vars: 3,
  consts: [["luResizeObserver", "", 1, "lu-combobox-tag-container"], ["resizeObserver", "luResizeObserver"], ["class", "lu-combobox-tag", "type", "light", "luControlSelector", "", "luNoFocusChange", "", 3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "lu-combobox-controls"], ["class", "lu-clear-control", 4, "ngIf"], ["class", "lu-chevron-button", "lu-button-icon", "", "color", "black", "colorType", "light", 3, "tabIndex", "disabled", "click", 4, "ngIf"], ["type", "light", "luControlSelector", "", "luNoFocusChange", "", 1, "lu-combobox-tag", 3, "value"], ["selector", "luControlSelector"], ["icon", "close-tag", 1, "lu-combobox-tag-icon", 3, "size", "click"], [1, "lu-clear-control"], ["lu-button-icon", "", "color", "black", "colorType", "light", 1, "lu-chevron-button", 3, "tabIndex", "disabled", "click"], ["icon", "chevron-down", 3, "luChevronRotate"]],
  template: function (R, B) {
    if (1 & R && (t.TgZ(0, "div", 0, 1), t.YNc(2, v, 4, 5, "lu-tag", 2), t.qZA(), t.TgZ(3, "div", 3), t.YNc(4, f, 1, 0, "lu-clear-control", 4), t.YNc(5, E, 2, 3, "button", 5), t.qZA()), 2 & R) {
      const y = t.MAs(1);
      t.xp6(2), t.Q6J("ngForOf", B.items), t.xp6(2), t.Q6J("ngIf", B.clearButton && y.height > 40), t.xp6(1), t.Q6J("ngIf", B.chevronButton);
    }
  },
  dependencies: [O.sg, O.O5, e.l$, a.q, m.R, d.h, M.k, L.c, C.T, b.X],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;overflow-y:auto;min-height:40px;max-height:160px}[data-lu-disabled=true][_nghost-%COMP%]{background-color:var(--lu-disabled-background)}[_nghost-%COMP%]   .lu-combobox-tag[_ngcontent-%COMP%]{cursor:auto;margin:calc(var(--lu-base-gutter) / 2)}[_nghost-%COMP%]   .lu-combobox-tag[_ngcontent-%COMP%]   .lu-combobox-tag-icon[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}[_nghost-%COMP%]   .lu-combobox-tag[_ngcontent-%COMP%]   .lu-combobox-tag-icon[_ngcontent-%COMP%]:not(.disabled):hover{--lu-svg-icon-color: var(--lu-black-54)}[_nghost-%COMP%]   .lu-combobox-tag.disabled[_ngcontent-%COMP%]{pointer-events:none;--lu-tag-background: var(--lu-black-15);--lu-tag-border: var(--lu-black-15);--lu-tag-text: var(--lu-black-60);--lu-svg-icon-color: var(--lu-black-30)}.lu-combobox-tag-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:calc(var(--lu-base-gutter) / 2)}.lu-combobox-controls[_ngcontent-%COMP%]{position:sticky;right:0;top:0;width:40px;overflow:hidden;flex-shrink:0}.lu-combobox-controls[_ngcontent-%COMP%]   .lu-clear-control[_ngcontent-%COMP%]{position:absolute;top:0}.lu-combobox-controls[_ngcontent-%COMP%]   .lu-chevron-button[_ngcontent-%COMP%]{position:absolute;bottom:0}"],
  changeDetection: 0
});
