// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Wh,
  selectors: [["infinity-scroll-container"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(Vg, 5), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.loadTrigger = Ye.first);
    }
  },
  inputs: {
    onEndReached: "onEndReached",
    listItems: "listItems",
    isLoading: "isLoading",
    hasMore: "hasMore"
  },
  ngContentSelectors: ["*"],
  decls: 5,
  vars: 1,
  consts: [[1, "infinity-scroll"], ["loadTrigger", ""], [4, "ngIf"]],
  template: function (k, ce) {
    1 & k && (n.F$t(), n.TgZ(0, "div", 0), n.Hsn(1), n._UZ(2, "div", null, 1), n.YNc(4, jg, 1, 0, "lu-preloader", 2), n.qZA()), 2 & k && (n.xp6(4), n.Q6J("ngIf", ce.isLoading));
  },
  dependencies: [Di.O5, qr.d],
  styles: [".infinity-scroll[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden}"]
});
