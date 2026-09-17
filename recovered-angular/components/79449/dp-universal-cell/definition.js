// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-universal-cell"]],
  viewQuery: function (Je, Xt) {
    if (1 & Je && t.Gf(e.x6, 7), 2 & Je) {
      let Nn;
      t.iGM(Nn = t.CRH()) && (Xt.adHost = Nn.first);
    }
  },
  inputs: {
    meta: "meta",
    data: "data"
  },
  outputs: {
    runAction: "runAction"
  },
  features: [t.TTD],
  decls: 2,
  vars: 3,
  consts: [["dpAdHost", ""]],
  template: function (Je, Xt) {
    1 & Je && (t.TgZ(0, "div"), t.YNc(1, mt, 0, 0, "ng-template", 0), t.qZA()), 2 & Je && t.Gre("cell cell--", Xt.meta.align, "");
  },
  dependencies: [e.x6],
  styles: [".cell[_ngcontent-%COMP%]{display:flex}.cell--center[_ngcontent-%COMP%]{justify-content:center}.cell--left[_ngcontent-%COMP%]{justify-content:flex-start}.cell--right[_ngcontent-%COMP%]{justify-content:flex-end}"],
  changeDetection: 0
});
