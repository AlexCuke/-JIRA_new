// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-universal-grid-cells"]],
  inputs: {
    grid: "grid",
    meta: "meta",
    hideIf: "hideIf"
  },
  outputs: {
    runAction: "runAction"
  },
  decls: 2,
  vars: 5,
  consts: [["class", "cell", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cell"], ["class", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row"], [3, "meta", "data", "runAction"]],
  template: function (Je, Xt) {
    1 & Je && (t.YNc(0, Ke, 2, 2, "div", 0), t.ALo(1, "gridHideIf")), 2 & Je && t.Q6J("ngForOf", t.xi3(1, 2, Xt.grid, Xt.hideIf))("ngForTrackBy", Xt.trackByIndex);
  },
  dependencies: [a.sg, ut, Ft, Ue],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row}.row[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) / 2)}.cell[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cell[_ngcontent-%COMP%]:not(:last-child){margin-right:var(--lu-base-gutter)}"],
  changeDetection: 0
});
