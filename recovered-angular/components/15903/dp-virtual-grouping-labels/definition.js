// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-virtual-grouping-labels"]],
  hostVars: 4,
  hostBindings: function (ve, yt) {
    2 & ve && t.Udp("top", yt.hostTop)("bottom", yt.hostBottom);
  },
  inputs: {
    topOffset: "topOffset",
    bottomOffset: "bottomOffset",
    displayType: "displayType",
    labels: "labels"
  },
  outputs: {
    selectLabel: "selectLabel"
  },
  decls: 4,
  vars: 8,
  consts: [["id", "groupingLabelsTopContainer", 1, "group-container", 3, "ngClass"], [3, "ngClass", "viewData", "click", 4, "ngFor", "ngForOf"], ["id", "groupingLabelsBottomContainer", 1, "group-container", 3, "ngClass"], [3, "ngClass", "viewData", "click"]],
  template: function (ve, yt) {
    1 & ve && (t.TgZ(0, "div", 0), t.YNc(1, kl, 1, 2, "dp-grouping-label", 1), t.qZA(), t.TgZ(2, "div", 2), t.YNc(3, mu, 1, 2, "dp-grouping-label", 1), t.qZA()), 2 & ve && (t.Q6J("ngClass", t.VKq(4, Wc, "row" === yt.displayType && yt.topLabels.length)), t.xp6(1), t.Q6J("ngForOf", yt.topLabels), t.xp6(1), t.Q6J("ngClass", t.VKq(6, Wc, "row" === yt.displayType && yt.bottomLabels.length)), t.xp6(1), t.Q6J("ngForOf", yt.bottomLabels));
  },
  dependencies: [C.mk, C.sg, nu],
  styles: ["[_nghost-%COMP%]{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between;width:calc(100% - 16px)}.group-container[_ngcontent-%COMP%]{z-index:9}.__label[_ngcontent-%COMP%]{margin-top:8px;margin-left:8px}.__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;padding-left:8px;padding-top:4px;padding-bottom:4px;pointer-events:auto;background-color:var(--lu-white)}.__row-label[_ngcontent-%COMP%]{flex-shrink:0;cursor:pointer}.__row-label[_ngcontent-%COMP%] + .__row-label[_ngcontent-%COMP%]{margin-left:8px}"],
  changeDetection: 0
});
