// Exact compiled component metadata; references belong to modules/77015.js
({
  type: $e,
  selectors: [["dp-terminology-multiple-combobox"]],
  viewQuery: function (nt, si) {
    if (1 & nt && t.Gf(Ht.v, 5), 2 & nt) {
      let Oo;
      t.iGM(Oo = t.CRH()) && (si.comboboxCmp = Oo.first);
    }
  },
  inputs: {
    featureKey: "featureKey",
    terminologyName: "terminologyName",
    placeholder: "placeholder",
    withPaging: "withPaging",
    externalValues: "externalValues",
    otherItemCode: "otherItemCode",
    otherTitle: "otherTitle",
    searchTextLength: "searchTextLength",
    startPageNumber: "startPageNumber",
    defaultPageSize: "defaultPageSize",
    filter: "filter",
    itemDisabledFn: "itemDisabledFn",
    displayValueFn: "displayValueFn"
  },
  features: [t._Bn([ic, _c, {
    provide: ke.JU,
    useExisting: (0, t.Gpc)(() => $e),
    multi: !0
  }]), t.TTD],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["type", "autocomplete", 3, "placeholder", "formControl", "displayValueFn", "compareFn", "focusin"], ["combobox", ""], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "optionsScroll", 4, "luData"], ["emptyContent", ""], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
  template: function (nt, si) {
    1 & nt && (t.YNc(0, Ut, 6, 4, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.viewData$));
  },
  dependencies: [e.O5, e.RF, e.n9, Ct.l, R.g, Ht.v, ke.JJ, ke.oH, A.d, m.NZ, e.Ov, B.J, y.e, Ro],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
  changeDetection: 0
});
