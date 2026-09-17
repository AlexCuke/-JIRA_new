// Exact compiled component metadata; references belong to modules/69082.js
({
  type: J,
  selectors: [["lu-data-list-group"]],
  inputs: {
    itemGroupFn: "itemGroupFn",
    groupContent: "groupContent"
  },
  features: [e._Bn([{
    provide: A.Qu,
    useExisting: J
  }]), e.qOj, e.TTD],
  decls: 4,
  vars: 3,
  consts: [[3, "autofocus"], [4, "ngIf", "ngIfElse"], ["emptyTemplate", ""], [4, "ngFor", "ngForOf"], ["luOptionGroupHeader", "", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "size", "value", "disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["luOptionGroupHeader", ""], [3, "size", "value", "disabled"], ["option", ""], ["lu-text", ""], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled", 4, "ngIf"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled"], ["lu-text", "", 1, "lu-empty-message"], ["defaultMessage", ""], [4, "polymorpheusOutlet"]],
  template: function (ye, ae) {
    if (1 & ye && (e.TgZ(0, "lu-list", 0), e.YNc(1, B, 2, 1, "ng-container", 1), e.YNc(2, F, 4, 2, "ng-template", null, 2, e.W1O), e.qZA()), 2 & ye) {
      const Y = e.MAs(3);
      e.Q6J("autofocus", ae.autofocus), e.xp6(1), e.Q6J("ngIf", ae.items && ae.items.length)("ngIfElse", Y);
    }
  },
  dependencies: [I.sg, I.O5, O.k, L.Li, C.e, v.rh, m.NZ, m.ZZ, f.$m, E.JJ, E.On, d.l, M.M],
  styles: ["[_nghost-%COMP%]{display:block;overflow:auto;max-height:var(--lu-list-size)}.lu-empty-message[_ngcontent-%COMP%]{padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);--lu-font-size: 13px;--lu-line-height: 22px}lu-checkbox[_ngcontent-%COMP%]{pointer-events:none}"],
  changeDetection: 0
});
