// Exact compiled component metadata; references belong to modules/11796.js
({
  type: l,
  selectors: [["operation-list"]],
  viewQuery: function (n, i) {
    if (1 & n && (t.Gf(Tt, 5), t.Gf(wt, 5)), 2 & n) {
      let u;
      t.iGM(u = t.CRH()) && (i.operationsList = u.first), t.iGM(u = t.CRH()) && (i.operationsAdaptiveList = u.first);
    }
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [1, "operations-dp-list", 3, "params", "runAction", "runEvent"], ["operationsList", ""], [1, "operations-dp-tablet-list", 3, "params", "runAction", "runEvent"], ["operationsAdaptiveList", ""]],
  template: function (n, i) {
    1 & n && (t.YNc(0, Dt, 4, 1, "ng-container", 0), t.YNc(1, Zt, 3, 1, "ng-container", 0)), 2 & n && (t.Q6J("ngIf", !i.isTablet), t.xp6(1), t.Q6J("ngIf", i.isTablet));
  },
  dependencies: [g.O5, N.rs, b]
});
