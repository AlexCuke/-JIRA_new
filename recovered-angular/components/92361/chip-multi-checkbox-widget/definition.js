// Exact compiled component metadata; references belong to modules/92361.js
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
  }])],
  decls: 9,
  vars: 8,
  consts: [["luDropdownOrigin", "", 1, "lu-custom-chip", 3, "focusin"], ["origin", "luDropdownOrigin"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-chip-multi", "positions", "bottom-left", 1, "chip-data-list", 3, "content", "closeIfOutsideClick", "notFocusClosestElement", "origin"], ["chipDropdown", ""], ["content", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "checked", "click"]],
  template: function (j, W) {
    if (1 & j && (t.ynx(0), t.TgZ(1, "lu-chip", 0, 1), t.NdJ("focusin", function () {
      return W.onOpen();
    }), t._uU(3), t._UZ(4, "lu-combobox-controls", 2), t.qZA(), t.TgZ(5, "lu-dropdown", 3, 4), t.YNc(7, u, 1, 1, "ng-template", null, 5, t.W1O), t.qZA(), t.BQk()), 2 & j) {
      const F = t.MAs(2),
        Le = t.MAs(6),
        ke = t.MAs(8);
      t.xp6(3), t.hij(" ", W.displayChipValue, " "), t.xp6(1), t.Q6J("dropdown", Le)("clearButton", !1)("chevronButton", !0), t.xp6(1), t.Q6J("content", ke)("closeIfOutsideClick", !0)("notFocusClosestElement", !0)("origin", F);
    }
  },
  dependencies: [O.sg, L.r, E.n, h.q, C.$, v.$m, f.k],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}.chip-data-list[_ngcontent-%COMP%]{--lu-list-size: 320px}  .lu-custom-chip   lu-chip{height:32px;max-width:288px;min-width:40px}  .lu-custom-chip   label{padding:0 4px 0 12px!important}  .lu-custom-chip   label .lu-button-wrapper{height:32px!important;width:32px!important}  .dropdown-chip-multi .lu-overlay-content{max-width:500px;max-height:320px;overflow-y:auto}"],
  changeDetection: 0
});
