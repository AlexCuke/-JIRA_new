// Exact compiled component metadata; references belong to modules/15513.js
({
  type: O0,
  selectors: [["chip-multi-checkbox-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  features: [e._Bn([pl.EA, pl.ER, {
    provide: pr.JU,
    useExisting: (0, e.Gpc)(() => pl.uY),
    multi: !0
  }, {
    provide: ec.pP,
    useValue: !0
  }])],
  decls: 10,
  vars: 9,
  consts: [["type", "button", "luDropdownOrigin", "", 1, "lu-custom-chip", 3, "focusin"], ["origin", "luDropdownOrigin"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-chip-multi", "positions", "bottom-left", 3, "content", "closeIfOutsideClick", "notFocusClosestElement", "origin", "borderOffset"], ["chipDropdown", ""], ["content", ""], ["class", "list-item list-item--reset", 3, "click", 4, "ngIf"], ["class", "list-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "list-item", "list-item--reset", 3, "click"], ["icon", "close-12", 3, "size"], [1, "list-item", 3, "click"]],
  template: function (o, D) {
    if (1 & o && (e.ynx(0), e.TgZ(1, "lu-chip", 0, 1), e.NdJ("focusin", function () {
      return D.onOpen();
    }), e.TgZ(3, "span"), e._uU(4), e.qZA(), e._UZ(5, "lu-combobox-controls", 2), e.qZA(), e._UZ(6, "lu-dropdown", 3, 4), e.BQk(), e.YNc(8, PL, 2, 2, "ng-template", null, 5, e.W1O)), 2 & o) {
      const Z = e.MAs(2),
        X = e.MAs(7),
        oe = e.MAs(9);
      e.xp6(4), e.Oqu(D.displayChipValue), e.xp6(1), e.Q6J("dropdown", X)("clearButton", !1)("chevronButton", !0), e.xp6(1), e.Q6J("content", oe)("closeIfOutsideClick", !0)("notFocusClosestElement", !0)("origin", Z)("borderOffset", -8);
    }
  },
  dependencies: [vo.sg, vo.O5, GP.r, vx.n, $P.q, ca.$, Oa.q],
  styles: ["[_nghost-%COMP%]{display:block;width:100%;min-width:180px}.list-item[_ngcontent-%COMP%]{padding:8px 16px;line-height:22px;cursor:pointer}.list-item.active[_ngcontent-%COMP%]{background:rgba(56,161,214,.2)!important}.list-item--reset[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 12px 7px;border-bottom:1px solid #e6e6e6;--lu-svg-icon-color: #999}@media (any-hover: hover){.list-item[_ngcontent-%COMP%]:hover{background-color:#38a1d61a}}  .lu-custom-chip .lu-chip{padding:0 0 0 12px!important}  .lu-custom-chip .lu-chip .lu-button-wrapper{height:32px!important}"],
  changeDetection: 0
});
