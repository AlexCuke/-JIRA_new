// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-filter-sidebar"]],
  inputs: {
    tabs: "tabs",
    isOpen: "isOpen",
    openedTabId: "openedTabId"
  },
  outputs: {
    toggleSideBarEmitter: "toggleSideBarEmitter"
  },
  decls: 4,
  vars: 8,
  consts: [[1, "sidebar", 3, "ngClass"], [3, "openedTab", "orientation", "hasDivider", "hasItemDivider", "luNoAnimation", "tabChange"], [4, "dpRegisteredPortalsFor"], ["icon", "close-12", "dpDataTestRole", "closeButton", 1, "sidebar-close-btn", 3, "size", "click"], ["luTabTitle", ""], [3, "name"], [1, "sidebar-tab", 3, "name"]],
  template: function (ve, yt) {
    1 & ve && (t.TgZ(0, "div", 0)(1, "lu-tab-group", 1), t.NdJ("tabChange", function (Un) {
      return yt.onTabChange(Un);
    }), t.YNc(2, pi, 3, 1, "lu-tab", 2), t.qZA(), t.TgZ(3, "lu-svg-icon", 3), t.NdJ("click", function () {
      return yt.onClose();
    }), t.qZA()()), 2 & ve && (t.Q6J("ngClass", yt.isContentOpen ? "sidebar_state_opened" : "sidebar_state_closed"), t.xp6(1), t.Q6J("openedTab", yt.openedTab)("orientation", "vertical")("hasDivider", !0)("hasItemDivider", !0)("luNoAnimation", !0), t.xp6(1), t.Q6J("dpRegisteredPortalsFor", yt.regForTab), t.xp6(1), t.Q6J("size", 24));
  },
  dependencies: [C.mk, Kt, Vt, f.Y0, f.hD, f.Ld, a.q, b.E, L.U],
  styles: ["[_nghost-%COMP%]{display:flex;flex-shrink:0}.sidebar[_ngcontent-%COMP%]{position:relative;display:flex;flex-shrink:0;width:calc(var(--lu-base-gutter) * 52);box-shadow:1px 0 0 0 var(--lu-black-15) inset;background-color:var(--lu-black-5);overflow:hidden}.sidebar_state_opened[_ngcontent-%COMP%]{margin-right:0;transition:margin-right .2s linear}.sidebar_state_closed[_ngcontent-%COMP%]{margin-right:calc(-1 * (calc(var(--lu-base-gutter) * 52) - calc(var(--lu-base-gutter) * 7)));transition:margin-right .1s linear}.sidebar[_ngcontent-%COMP%]   lu-tab-group[_ngcontent-%COMP%]{z-index:0}.sidebar-tab[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:calc(var(--lu-base-gutter) * 7)!important;height:calc(var(--lu-base-gutter) * 7)!important}.sidebar-close-btn[_ngcontent-%COMP%]{position:absolute;top:calc(var(--lu-base-gutter) * 2);right:calc(var(--lu-base-gutter) * 2);cursor:pointer;--lu-svg-icon-color: var(--lu-black-30)}"],
  changeDetection: 0
});
