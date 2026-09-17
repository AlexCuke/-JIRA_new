// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-context-menu"]],
  viewQuery: function (z, De) {
    if (1 & z && t.Gf(mu, 7), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.dropdown = rt.first);
    }
  },
  inputs: {
    closeIfInnerClick: "closeIfInnerClick",
    items: "items",
    contextMenuMaxWidth: "contextMenuMaxWidth"
  },
  outputs: {
    afterClose: "afterClose"
  },
  ngContentSelectors: ir,
  decls: 4,
  vars: 6,
  consts: [["panelClass", "context-menu", 3, "origin", "closeIfInnerClick", "notFocusClosestElement", "positions", "content", "afterClose"], ["dropdown", ""], ["content", ""], ["dpDataTestRole", "contextMenu", 1, "context-menu-items-container", "context-menu__dropdown"]],
  template: function (z, De) {
    if (1 & z && (t.F$t(), t.TgZ(0, "lu-dropdown", 0, 1), t.NdJ("afterClose", function () {
      return De.handleAfterClose();
    }), t.YNc(2, Wc, 2, 2, "ng-template", null, 2, t.W1O), t.qZA()), 2 & z) {
      const rt = t.MAs(3);
      t.Q6J("origin", De.origin)("closeIfInnerClick", De.closeIfInnerClick)("notFocusClosestElement", !0)("positions", t.DdM(5, gc))("content", rt);
    }
  },
  dependencies: [C.$, G.U],
  styles: [".context-menu .lu-overlay-content{border-color:transparent!important;border-radius:calc(var(--lu-base-gutter) / 2);box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f}.context-menu__dropdown[_ngcontent-%COMP%]{margin:var(--lu-base-gutter) 0}.context-menu-items-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],
  changeDetection: 0
});
