// Exact compiled component metadata; references belong to modules/32428.js
({
  type: Et,
  selectors: [["lu-tab-group"]],
  contentQueries: function (Me, Ke, Ze) {
    if (1 & Me && (t.Suo(Ze, q, 5), t.Suo(Ze, qe, 4)), 2 & Me) {
      let Ee;
      t.iGM(Ee = t.CRH()) && (Ke.tabGroupOutlet = Ee.first), t.iGM(Ee = t.CRH()) && (Ke.tabs = Ee);
    }
  },
  viewQuery: function (Me, Ke) {
    if (1 & Me && (t.Gf(st, 5, t.SBq), t.Gf(Re, 5)), 2 & Me) {
      let Ze;
      t.iGM(Ze = t.CRH()) && (Ke.headerItems = Ze), t.iGM(Ze = t.CRH()) && (Ke.tabBodies = Ze);
    }
  },
  hostVars: 2,
  hostBindings: function (Me, Ke) {
    2 & Me && t.ekj("-is-vertical", Ke.direction);
  },
  inputs: {
    hasDivider: "hasDivider",
    hasItemDivider: "hasItemDivider",
    initType: "initType",
    openedTab: "openedTab",
    orientation: "orientation"
  },
  outputs: {
    tabChange: "tabChange"
  },
  features: [t.TTD],
  ngContentSelectors: n,
  decls: 6,
  vars: 12,
  consts: [[1, "lu-tab-header-wrapper"], ["data-test-role", "tab", 3, "index", "tab", "selectedIndex", "content", "selectedIndexChange", "changeContent", 4, "ngFor", "ngForOf"], [3, "tabHeaderChange", "position", "isVertical", "bindTo", "isBackground"], [1, "lu-tab-body-wrapper"], [4, "ngIf"], ["data-test-role", "tab", 3, "index", "tab", "selectedIndex", "content", "selectedIndexChange", "changeContent"], [3, "content", "selectedIndex", "index", 4, "ngFor", "ngForOf"], [3, "content", "selectedIndex", "index"], [3, "withPortal", "index", "selectedIndex"]],
  template: function (Me, Ke) {
    1 & Me && (t.F$t(le), t.TgZ(0, "div", 0), t.YNc(1, G, 1, 4, "lu-tab-header-item", 1), t._UZ(2, "lu-tab-select", 2), t.qZA(), t.TgZ(3, "div", 3), t.YNc(4, pe, 2, 1, "ng-container", 4), t.YNc(5, be, 3, 3, "ng-container", 4), t.qZA()), 2 & Me && (t.ekj("-has-divider", Ke.hasDivider)("-has-item-divider", Ke.hasItemDivider), t.xp6(1), t.Q6J("ngForOf", Ke.tabs), t.xp6(1), t.Q6J("tabHeaderChange", Ke.tabHeaderChange.asObservable())("position", "vertical" === Ke.orientation ? "right" : "")("isVertical", "vertical" === Ke.orientation)("bindTo", Ke.selectedHeaderItem)("isBackground", !0), t.xp6(2), t.Q6J("ngIf", !Ke.tabGroupOutlet), t.xp6(1), t.Q6J("ngIf", Ke.tabGroupOutlet));
  },
  dependencies: [I.sg, I.O5, Re, mt, st],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1;height:100%}.-is-vertical[_nghost-%COMP%]{flex-direction:row}.-is-vertical[_nghost-%COMP%]   lu-tab-select[_ngcontent-%COMP%]{position:absolute;display:block;bottom:0;background-color:var(--lu-yellow-100);transition:225ms cubic-bezier(.4,0,.2,1)}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper[_ngcontent-%COMP%]{flex-direction:column;border-bottom:none}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-divider[_ngcontent-%COMP%]{border-bottom:none;box-shadow:-1px 0 0 0 var(--lu-black-15) inset}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-item-divider[_ngcontent-%COMP%]   lu-tab-header-item[_ngcontent-%COMP%]{position:relative}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-item-divider[_ngcontent-%COMP%]   lu-tab-header-item[_ngcontent-%COMP%] + lu-tab-header-item[_ngcontent-%COMP%]:before{content:\"\";height:1px;left:12px;top:0;right:12px;position:absolute;background:#D9D9D9}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper[_ngcontent-%COMP%]   lu-tab-header-item[_ngcontent-%COMP%]{box-sizing:border-box;margin-right:0}[_nghost-%COMP%]   .lu-tab-body-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-grow:1;overflow:hidden}[_nghost-%COMP%]   .lu-tab-header-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row}[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-divider[_ngcontent-%COMP%]{border-bottom:1px solid var(--lu-black-15)}[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-divider[_ngcontent-%COMP%]   lu-tab-select[_ngcontent-%COMP%]{bottom:-1px!important}[_nghost-%COMP%]:not(.-is-vertical)   lu-tab-select[_ngcontent-%COMP%]{position:absolute;display:block;bottom:0;height:2px!important;background-color:var(--lu-yellow-100);transition:225ms cubic-bezier(.4,0,.2,1)}"],
  changeDetection: 0
});
