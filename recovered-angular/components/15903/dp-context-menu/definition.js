// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-context-menu"]],
  viewQuery: function (ve, yt) {
    if (1 & ve && t.Gf(Or, 7), 2 & ve) {
      let An;
      t.iGM(An = t.CRH()) && (yt.dropdown = An.first);
    }
  },
  inputs: {
    closeIfInnerClick: "closeIfInnerClick",
    positions: "positions",
    contextMenuMaxWidth: "contextMenuMaxWidth"
  },
  outputs: {
    afterClose: "afterClose"
  },
  ngContentSelectors: xa,
  decls: 4,
  vars: 5,
  consts: [["panelClass", "context-menu", 3, "origin", "closeIfInnerClick", "notFocusClosestElement", "positions", "content", "afterClose"], ["dropdown", ""], ["content", ""], ["dpDataTestRole", "contextMenu", 1, "context-menu-items-container", "context-menu__dropdown"]],
  template: function (ve, yt) {
    if (1 & ve && (t.F$t(), t.TgZ(0, "lu-dropdown", 0, 1), t.NdJ("afterClose", function () {
      return yt.handleAfterClose();
    }), t.YNc(2, Fs, 2, 2, "ng-template", null, 2, t.W1O), t.qZA()), 2 & ve) {
      const An = t.MAs(3);
      t.Q6J("origin", yt.origin)("closeIfInnerClick", yt.closeIfInnerClick)("notFocusClosestElement", !0)("positions", yt.positions)("content", An);
    }
  },
  dependencies: [e.$, L.U],
  styles: [".context-menu .lu-overlay-content{border-color:transparent!important;border-radius:calc(var(--lu-base-gutter) / 2);box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f}.context-menu__dropdown[_ngcontent-%COMP%]{margin:var(--lu-base-gutter) 0}.context-menu-items-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],
  changeDetection: 0
});
