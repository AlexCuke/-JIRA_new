// Exact compiled component metadata; references belong to modules/77015.js
({
  type: $e,
  selectors: [["dp-terminology-combobox"]],
  viewQuery: function (nt, si) {
    if (1 & nt && t.Gf(Dt.m, 5), 2 & nt) {
      let Oo;
      t.iGM(Oo = t.CRH()) && (si.comboboxCmp = Oo.first);
    }
  },
  inputs: {
    featureKey: "featureKey",
    terminologyName: "terminologyName",
    placeholder: "placeholder",
    withPaging: "withPaging",
    clearButton: "clearButton",
    externalValues: "externalValues",
    otherItemCode: "otherItemCode",
    otherTitle: "otherTitle",
    groupBy: "groupBy",
    searchTextLength: "searchTextLength",
    startPageNumber: "startPageNumber",
    defaultPageSize: "defaultPageSize",
    filter: "filter",
    itemDisabledFn: "itemDisabledFn",
    displayValueFn: "displayValueFn"
  },
  features: [t._Bn([Zt, Li, {
    provide: ke.JU,
    useExisting: (0, t.Gpc)(() => $e),
    multi: !0
  }, {
    provide: ke.Cf,
    useExisting: (0, t.Gpc)(() => $e),
    multi: !0
  }]), t.TTD],
  decls: 4,
  vars: 7,
  consts: [[4, "ngIf"], ["type", "autocomplete", 3, "placeholder", "formControl", "clearButton", "displayValueFn", "compareFn", "focusin"], ["combobox", ""], [4, "ngIf", "ngIfElse"], ["default", ""], ["emptyContent", ""], [3, "items", "itemGroupFn", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll", 4, "luData"], [3, "items", "itemGroupFn", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll", 4, "luData"], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll"], [3, "ngSwitch"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["lu-text", "", 1, "message"], [1, "message-text"], ["size", "inline-dropdown"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-link", "message-link__text", 3, "click"], [1, "__other-item"], [3, "lu-label"], ["luInput", "", "luInputString", "", 1, "other-input", 3, "formControl"]],
  template: function (nt, si) {
    1 & nt && (t.YNc(0, Il, 8, 7, "ng-container", 0), t.ALo(1, "terminologyComboboxViewData"), t.ALo(2, "async"), t.YNc(3, Uc, 5, 2, "ng-container", 0)), 2 & nt && (t.Q6J("ngIf", t.xi3(1, 2, t.lcZ(2, 5, si.model$), si.externalValues)), t.xp6(3), t.Q6J("ngIf", si.isOtherValue(si.controlValue)));
  },
  dependencies: [e.O5, e.RF, e.n9, Ct.l, h.HY, x.L, u.z, T.H, R.g, Dt.m, ke.Fj, ke.JJ, ke.oH, A.d, m.NZ, Ue.d, e.Ov, B.J, y.e, Xo, Ro],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
  changeDetection: 0
});
