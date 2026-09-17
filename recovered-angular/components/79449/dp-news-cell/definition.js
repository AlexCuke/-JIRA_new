// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-news-cell"]],
  inputs: {
    data: "data"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "cell", 4, "ngIf"], [1, "cell"], [3, "score", "rate"], [1, "cell__time", 3, "ngStyle"]],
  template: function (Je, Xt) {
    1 & Je && t.YNc(0, ae, 4, 4, "div", 0), 2 & Je && t.Q6J("ngIf", Xt.score && Xt.time);
  },
  dependencies: [a.O5, a.PC, ye],
  styles: [".cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.cell__time[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) / 2)}"],
  changeDetection: 0
});
