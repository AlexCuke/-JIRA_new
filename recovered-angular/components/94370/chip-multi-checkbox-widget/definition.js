// Exact compiled component metadata; references belong to modules/94370.js
({
  type: R,
  selectors: [["chip-multi-checkbox-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  features: [t._Bn([a.EA, a.ER, {
    provide: e.JU,
    useExisting: (0, t.Gpc)(() => a.uY),
    multi: !0
  }, {
    provide: m.pP,
    useValue: !0
  }]), t.TTD],
  decls: 10,
  vars: 8,
  consts: [["type", "button", "luDropdownOrigin", "", 1, "lu-custom-chip", 3, "focusin", "click"], ["origin", "luDropdownOrigin"], [1, "chip-label"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-chip-multi", "positions", "bottom-left", 1, "chip-data-list", 3, "content", "closeIfOutsideClick", "notFocusClosestElement", "origin"], ["chipDropdown", ""], ["content", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "checked", "click"]],
  template: function (j, W) {
    if (1 & j) {
      const F = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-chip", 0, 1), t.NdJ("focusin", function () {
        return W.onOpen();
      })("click", function () {
        t.CHM(F);
        const ke = t.MAs(7);
        return t.KtG(W.openDropdown(ke));
      }), t.TgZ(3, "span", 2), t._uU(4), t.qZA(), t._UZ(5, "lu-combobox-controls", 3), t.qZA(), t.TgZ(6, "lu-dropdown", 4, 5), t.YNc(8, u, 1, 1, "ng-template", null, 6, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & j) {
      const F = t.MAs(2),
        Le = t.MAs(7),
        ke = t.MAs(9);
      t.xp6(4), t.Oqu(W.displayChipValue), t.xp6(1), t.Q6J("dropdown", Le)("clearButton", !1)("chevronButton", !0), t.xp6(1), t.Q6J("content", ke)("closeIfOutsideClick", !0)("notFocusClosestElement", !0)("origin", F);
    }
  },
  dependencies: [O.sg, L.r, E.n, h.q, C.$, v.$m, f.k],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}.chip-data-list[_ngcontent-%COMP%]{--lu-list-size: 320px}  .lu-custom-chip   .lu-chip{height:32px!important;min-width:40px}  .lu-custom-chip   .lu-chip:hover{background:rgba(56,161,214,.2)!important}  .lu-custom-chip   label{padding:0 4px 0 12px!important;display:flex;align-items:center;width:100%;box-sizing:border-box}  .lu-custom-chip   label .chip-label{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .lu-custom-chip   label lu-combobox-controls{display:flex;align-items:center;margin-left:auto;flex-shrink:0}  .lu-custom-chip   label .lu-chevron-button .lu-button-wrapper{height:32px!important;width:32px!important}  .lu-custom-chip:has(lu-combobox-controls .lu-chevron-button lu-svg-icon[style=\"transform: rotateZ(180deg);\"]) .lu-chip{background:rgba(56,161,214,.3019607843)!important}  .dropdown-chip-multi .lu-overlay-content{max-width:500px;max-height:320px;overflow-y:auto}  .dropdown-chip-multi .lu-overlay-content lu-option:has(lu-checkbox[data-lu-checked=true]){background:rgba(56,161,214,.2)!important}"],
  changeDetection: 0
});
