// Exact compiled component metadata; references belong to modules/56137.js
({
  type: B,
  selectors: [["lu-expansion-panel"]],
  hostVars: 3,
  hostBindings: function (j, W) {
    2 & j && t.uIk("data-lu-header-position", W.headerPosition)("data-lu-expanded", W.isExpanded)("data-lu-accordion-item", W.isAccordionItem);
  },
  inputs: {
    headerPosition: "headerPosition"
  },
  features: [t.qOj],
  ngContentSelectors: E,
  decls: 7,
  vars: 4,
  consts: [["header", ""], [4, "ngIf"], [1, "lu-expansion-panel-content", 3, "expanded", "content"], ["content", ""], [4, "ngTemplateOutlet"]],
  template: function (j, W) {
    if (1 & j && (t.F$t(f), t.YNc(0, N, 1, 0, "ng-template", null, 0, t.W1O), t.YNc(2, O, 2, 1, "ng-container", 1), t.TgZ(3, "lu-expander", 2), t.YNc(4, L, 1, 0, "ng-template", null, 3, t.W1O), t.qZA(), t.YNc(6, v, 2, 1, "ng-container", 1)), 2 & j) {
      const F = t.MAs(5);
      t.xp6(2), t.Q6J("ngIf", "top" === W.headerPosition), t.xp6(1), t.Q6J("expanded", W.expanded)("content", F), t.xp6(3), t.Q6J("ngIf", "bottom" === W.headerPosition);
    }
  },
  dependencies: [d.O5, d.tP, M.G],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden;transition:flex var(--lu-transition);min-height:32px}.lu-expansion-panel-content[_ngcontent-%COMP%]{overflow:auto}"],
  changeDetection: 0
});
