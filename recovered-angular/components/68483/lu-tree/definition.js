// Exact compiled component metadata; references belong to modules/68483.js
({
  type: Se,
  selectors: [["lu-tree"]],
  contentQueries: function (Re, st, q) {
    if (1 & Re && e.Suo(q, N.qE, 5), 2 & Re) {
      let mt;
      e.iGM(mt = e.CRH()) && (st.listItems = mt);
    }
  },
  hostVars: 2,
  hostBindings: function (Re, st) {
    2 & Re && (e.uIk("data-test-role", st.dataTestRole), e.d8E("@preventInitialChild", st.preventInitialChild));
  },
  inputs: {
    nodes: "nodes",
    searchText: "searchText",
    filterBySearchTxt: "filterBySearchTxt",
    filterMinSymbols: "filterMinSymbols",
    searchThrottleTime: "searchThrottleTime",
    displayValueFn: "displayValueFn",
    trackByFn: "trackByFn",
    nodeContent: "nodeContent",
    indents: "indents",
    expanded: "expanded",
    collapsible: "collapsible",
    indentLines: "indentLines",
    defineValueFn: "defineValueFn",
    virtualScroll: "virtualScroll",
    itemSize: "itemSize",
    emptyContent: "emptyContent"
  },
  outputs: {
    treeScroll: "treeScroll"
  },
  features: [e._Bn([{
    provide: N.Qu,
    useExisting: n
  }, {
    provide: N.pc,
    useExisting: n
  }, {
    provide: Y,
    useExisting: n
  }]), e.TTD],
  decls: 8,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["defaultContent", ""], ["treeSimple", ""], ["treeVirtual", ""], [4, "polymorpheusOutlet"], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-test-role", "treeNode", 3, "nodeContent", "node", "indents", "displayValueFn"], ["autosize", "", 2, "height", "100%", 3, "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize", "cdkVirtualForTrackBy"]],
  template: function (Re, st) {
    if (1 & Re && (e.TgZ(0, "lu-list"), e.YNc(1, F, 2, 1, "ng-container", 0), e.qZA(), e.YNc(2, ke, 1, 3, "ng-template", null, 1, e.W1O), e.YNc(4, fe, 1, 2, "ng-template", null, 2, e.W1O), e.YNc(6, ae, 2, 4, "ng-template", null, 3, e.W1O)), 2 & Re) {
      const q = e.MAs(3);
      e.xp6(1), e.Q6J("ngIf", !st.flatNodes.length && st.emptyContent)("ngIfElse", q);
    }
  },
  dependencies: [M.sg, M.O5, b.Li, x.e, u.xd, u.x0, u.N7, pe],
  styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;max-height:var(--lu-list-size)}[virtualscroll=true][_nghost-%COMP%]   lu-list[_ngcontent-%COMP%]{height:100%}[virtualscroll=true][_nghost-%COMP%]   lu-list[_ngcontent-%COMP%]    >div{height:100%}"],
  data: {
    animation: [I.tI, I.E_]
  },
  changeDetection: 0
});
