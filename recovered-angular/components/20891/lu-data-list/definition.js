// Exact compiled component metadata; references belong to modules/20891.js
({
  type: Se,
  selectors: [["lu-data-list"]],
  viewQuery: function (We, Re) {
    if (1 & We && e.Gf(I.qE, 5), 2 & We) {
      let st;
      e.iGM(st = e.CRH()) && (Re.listItems = st);
    }
  },
  hostVars: 1,
  hostBindings: function (We, Re) {
    2 & We && e.uIk("data-test-role", Re.dataTestRole);
  },
  inputs: {
    showPreloader: "showPreloader",
    autofocus: "autofocus",
    itemSize: "itemSize",
    items: "items",
    showSelectAll: "showSelectAll",
    showSelectAllCheckbox: "showSelectAllCheckbox",
    itemContent: "itemContent",
    emptyContent: "emptyContent",
    errorContent: "errorContent",
    showErrorContent: "showErrorContent",
    itemDisabledFn: "itemDisabledFn",
    defineValueFn: "defineValueFn",
    displayValueFn: "displayValueFn",
    trackByFn: "trackByFn"
  },
  outputs: {
    action: "action",
    optionsScroll: "optionsScroll",
    selectedAll: "selectedAll"
  },
  features: [e._Bn([{
    provide: I.Qu,
    useExisting: n
  }])],
  decls: 6,
  vars: 5,
  consts: [[3, "size", "selectable", "click", 4, "ngIf"], [3, "autofocus"], [4, "ngIf", "ngIfElse"], ["extraContent", ""], ["class", "preloader", 4, "ngIf"], [3, "size", "selectable", "click"], ["lu-text", "", 4, "ngIf", "ngIfElse"], ["textOnly", ""], ["lu-text", ""], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex"], [3, "size", "value", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "size", "value", "disabled", "click"], ["option", ""], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled", 4, "ngIf"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled"], [4, "ngIf"], ["emptyTemplate", ""], ["lu-text", "", 1, "lu-empty-message"], [4, "polymorpheusOutlet"], ["defaultMessage", ""], [1, "preloader"], ["size", "no-title"]],
  template: function (We, Re) {
    if (1 & We && (e.YNc(0, j, 4, 4, "lu-option", 0), e.TgZ(1, "lu-list", 1), e.YNc(2, ke, 2, 2, "ng-container", 2), e.YNc(3, be, 1, 1, "ng-template", null, 3, e.W1O), e.qZA(), e.YNc(5, le, 2, 0, "div", 4)), 2 & We) {
      const st = e.MAs(4);
      e.Q6J("ngIf", Re.showSelectAll && Re.items && Re.items.length), e.xp6(1), e.Q6J("autofocus", Re.autofocus), e.xp6(1), e.Q6J("ngIf", Re.items && Re.items.length && !Re.showErrorContent)("ngIfElse", st), e.xp6(3), e.Q6J("ngIf", Re.showPreloader);
    }
  },
  dependencies: [f.sg, f.O5, E.k, h.Li, x.e, a.NZ, a.ZZ, u.$m, T.JJ, T.On, m.l, d.d, M.M],
  styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;max-height:var(--lu-list-size)}[_nghost-%COMP%]   .preloader[_ngcontent-%COMP%]{padding:8px}.lu-empty-message[_ngcontent-%COMP%]{padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);--lu-font-size: 13px;--lu-line-height: 22px}lu-checkbox[_ngcontent-%COMP%]{pointer-events:none}"],
  changeDetection: 0
});
