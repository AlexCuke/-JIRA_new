// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-vertical-filter-panel-second"]],
  inputs: {
    title: "title"
  },
  outputs: {
    clearFilter: "clearFilter",
    applyFilter: "applyFilter"
  },
  ngContentSelectors: _o,
  decls: 11,
  vars: 2,
  consts: [[1, "head"], ["lu-text", "", "id", "vfpTitle", 1, "title"], ["id", "clearAllBtn", "lu-button-link-dashed", "", 3, "click"], [1, "body"], ["id", "filterPanelSecondScrollContainer", 3, "hidden"], [1, "footer"], ["id", "applyBtn", "lu-button-raised", "", 3, "click"]],
  template: function (z, De) {
    1 & z && (t.F$t(), t.TgZ(0, "div", 0)(1, "h4", 1), t._uU(2), t.qZA(), t.TgZ(3, "button", 2), t.NdJ("click", function () {
      return De.onClear();
    }), t._uU(4, "Очистить"), t.qZA()(), t.TgZ(5, "div", 3)(6, "dp-scroll-container", 4), t.Hsn(7), t.qZA()(), t.TgZ(8, "div", 5)(9, "button", 6), t.NdJ("click", function () {
      return De.onApply();
    }), t._uU(10, "Применить"), t.qZA()()), 2 & z && (t.xp6(2), t.Oqu(De.title), t.xp6(4), t.Q6J("hidden", !0));
  },
  dependencies: [O.mc, I.NZ, j.wE],
  styles: ["[_nghost-%COMP%]{position:relative;height:100%;display:flex;flex-direction:column;padding:calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3)}.title[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter) 0 0}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding-bottom:calc(var(--lu-base-gutter) * 3)}.body[_ngcontent-%COMP%]{flex-grow:2;overflow:hidden;display:flex}.footer[_ngcontent-%COMP%]{padding-top:calc(var(--lu-base-gutter) * 1.5)}"],
  changeDetection: 0
});
