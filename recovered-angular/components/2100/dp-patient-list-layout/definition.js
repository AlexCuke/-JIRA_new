// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-patient-list-layout"]],
  contentQueries: function (z, De, rt) {
    if (1 & z && t.Suo(rt, Bt, 5), 2 & z) {
      let Cn;
      t.iGM(Cn = t.CRH()) && (De.headerContent = Cn.first);
    }
  },
  inputs: {
    tabs: "tabs",
    isOpen: "isOpen"
  },
  outputs: {
    toggleSideBarEmitter: "toggleSideBarEmitter"
  },
  ngContentSelectors: An,
  decls: 5,
  vars: 3,
  consts: [[1, "main-container"], ["class", "main-container__header header-container", 4, "ngIf"], [1, "main-content"], [3, "tabs", "isOpen", "toggleSideBarEmitter"], [1, "main-container__header", "header-container"]],
  template: function (z, De) {
    1 & z && (t.F$t(yt), t.TgZ(0, "div", 0), t.YNc(1, ve, 2, 0, "div", 1), t.TgZ(2, "div", 2), t.Hsn(3), t.qZA()(), t.TgZ(4, "dp-filter-sidebar", 3), t.NdJ("toggleSideBarEmitter", function (Cn) {
      return De.onToggleSideBar(Cn);
    }), t.qZA()), 2 & z && (t.xp6(1), t.Q6J("ngIf", De.headerContent), t.xp6(3), t.Q6J("tabs", De.tabs)("isOpen", De.isOpen));
  },
  dependencies: [b.O5, j.eX],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;height:100%;overflow:hidden}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.main-container__header[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * 2) 0}.main-container__panel[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) * 2)}.header-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:0 calc(var(--lu-base-gutter) * 3)}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}"],
  changeDetection: 0
});
