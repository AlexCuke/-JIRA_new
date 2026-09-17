// Exact compiled component metadata; references belong to modules/70918.js
({
  type: q,
  selectors: [["hl-department-combobox"]],
  viewQuery: function (ut, Ct) {
    if (1 & ut && e.Gf(m.m, 5), 2 & ut) {
      let Ft;
      e.iGM(Ft = e.CRH()) && (Ct.comboboxCmp = Ft.first);
    }
  },
  features: [e._Bn([Se, Rt, We]), e.qOj],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["placeholder", "Введите или выберите из списка", "type", "autocomplete", 3, "formControl", "displayValueFn", "compareFn"], ["departmentCmb", ""], [3, "items", "itemContent", "emptyContent", "optionsScroll", 4, "luData"], ["emptyContent", ""], [3, "items", "itemContent", "emptyContent", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "link", 3, "click"]],
  template: function (ut, Ct) {
    1 & ut && (e.YNc(0, te, 6, 3, "ng-container", 0), e.ALo(1, "async")), 2 & ut && e.Q6J("ngIf", e.lcZ(1, 1, Ct.viewModel));
  },
  dependencies: [Le.O5, Le.RF, Le.n9, m.m, a.JJ, a.oH, ke.l, M.d, b.NZ, A.g, Le.Ov, N.e],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}.info-label[_ngcontent-%COMP%]{color:var(--lu-black-54)}.link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-blue-120);padding-left:calc(var(--lu-base-gutter) * .5)}"],
  changeDetection: 0
});
