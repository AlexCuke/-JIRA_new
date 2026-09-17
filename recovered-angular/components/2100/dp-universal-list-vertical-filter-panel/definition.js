// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-vertical-filter-panel"]],
  hostVars: 2,
  hostBindings: function (z, De) {
    2 & z && t.Udp("background", De.background);
  },
  inputs: {
    options: "options",
    bgColor: "bgColor",
    defaultPreset: "defaultPreset",
    filterStatus: "filterStatus"
  },
  outputs: {
    clearAll: "clearAll",
    toDefaultFilter: "toDefaultFilter",
    applyFilter: "applyFilter"
  },
  ngContentSelectors: qr,
  decls: 10,
  vars: 4,
  consts: [[1, "head"], ["lu-text", "", "id", "vfpTitle", 1, "title"], ["id", "clearAllBtn", "lu-button-link-dashed", "", 3, "click", 4, "ngIf"], ["id", "toDefaultBtn", "lu-button-link-dashed", "", 3, "click", 4, "ngIf"], [1, "body"], ["dpFilterPanelContent", "", 1, "body-content"], ["class", "footer", 3, "ngClass", 4, "ngIf"], ["id", "clearAllBtn", "lu-button-link-dashed", "", 3, "click"], ["id", "toDefaultBtn", "lu-button-link-dashed", "", 3, "click"], [1, "footer", 3, "ngClass"], ["id", "applyBtn", "lu-button-raised", "", 3, "click"]],
  template: function (z, De) {
    1 & z && (t.F$t(), t.TgZ(0, "div", 0)(1, "h4", 1), t._uU(2), t.qZA(), t.YNc(3, dn, 2, 0, "button", 2), t.YNc(4, wo, 2, 0, "button", 3), t.qZA(), t.TgZ(5, "div", 4)(6, "dp-scroll-container")(7, "div", 5), t.Hsn(8), t.qZA()()(), t.YNc(9, _r, 3, 3, "div", 6)), 2 & z && (t.xp6(2), t.Oqu(De.options.title), t.xp6(1), t.Q6J("ngIf", De.filterHasValue()), t.xp6(1), t.Q6J("ngIf", De.defaultPreset), t.xp6(5), t.Q6J("ngIf", De.filterHasValue()));
  },
  dependencies: [b.mk, b.O5, O.mc, I.NZ, j.wE],
  styles: ["[_nghost-%COMP%]{position:relative;height:100%;display:flex;flex-direction:column;box-shadow:1px 0 0 0 var(--lu-black-15) inset}.title[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter) 0 0}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding:calc(var(--lu-base-gutter) * 3)}.body[_ngcontent-%COMP%]{flex-grow:2;overflow:hidden;display:flex;padding:0 0 0 calc(var(--lu-base-gutter) * 3)}.body-content[_ngcontent-%COMP%]{padding-right:16px}.footer[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}.footer-border[_ngcontent-%COMP%]{border-top:1px solid var(--lu-black-15)}"],
  changeDetection: 0
});
