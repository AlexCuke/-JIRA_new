// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-filter-panel"]],
  inputs: {
    hasSelectedParameters: "hasSelectedParameters",
    hasAppliedParameters: "hasAppliedParameters",
    applyDisabled: "applyDisabled",
    displayBorder: "displayBorder"
  },
  outputs: {
    applyFilter: "applyFilter",
    resetFilter: "resetFilter"
  },
  ngContentSelectors: Qs,
  decls: 9,
  vars: 2,
  consts: [[1, "header"], ["lu-text", "", "dpDataTestRole", "header", 1, "title"], ["lu-button-link-dashed", "", "size", "medium", "class", "header-reset-button", 3, "click", 4, "ngIf"], [1, "main"], ["dpFilterPanelContent", "", 1, "main-content"], ["class", "footer", 3, "ngClass", 4, "ngIf"], ["lu-button-link-dashed", "", "size", "medium", 1, "header-reset-button", 3, "click"], [1, "footer", 3, "ngClass"], ["lu-button-raised", "", "size", "medium", 3, "disabled", "click"]],
  template: function (ve, yt) {
    1 & ve && (t.F$t(), t.TgZ(0, "header", 0)(1, "h4", 1), t._uU(2, "Фильтр"), t.qZA(), t.YNc(3, ua, 2, 0, "button", 2), t.qZA(), t.TgZ(4, "main", 3)(5, "dp-scroll-container")(6, "div", 4), t.Hsn(7), t.qZA()()(), t.YNc(8, na, 3, 4, "footer", 5)), 2 & ve && (t.xp6(3), t.Q6J("ngIf", yt.isActionButtonShow), t.xp6(5), t.Q6J("ngIf", yt.isActionButtonShow));
  },
  dependencies: [C.mk, C.O5, M.mc, m.NZ, sa, L.U, ha],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}.title[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter) 0 0}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding:calc(var(--lu-base-gutter) * 3)}.header-reset-button[_ngcontent-%COMP%]{--lu-button-hover-background: transparent;--lu-button-active-background: transparent}.main[_ngcontent-%COMP%]{flex-grow:2;overflow:hidden;display:flex;padding:0 0 0 calc(var(--lu-base-gutter) * 3)}.main-content[_ngcontent-%COMP%]{padding-right:16px}.footer[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}.footer-border[_ngcontent-%COMP%]{border-top:1px solid var(--lu-black-15)}"],
  changeDetection: 0
});
