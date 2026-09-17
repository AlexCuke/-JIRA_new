// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-label-cell"]],
  inputs: {
    data: "data"
  },
  decls: 5,
  vars: 4,
  consts: [[1, "label-cell", 3, "luTooltip", "canOpen", "ngStyle"], ["lu-text", "", "size", "small"], ["tooltipTmpl", ""], [3, "innerHtml"]],
  template: function (Je, Xt) {
    if (1 & Je && (t.TgZ(0, "div", 0)(1, "span", 1), t._uU(2), t.qZA()(), t.YNc(3, B, 1, 1, "ng-template", null, 2, t.W1O)), 2 & Je) {
      const Nn = t.MAs(4);
      t.Q6J("luTooltip", Nn)("canOpen", !!Xt.data.tooltip)("ngStyle", Xt.getStyle()), t.xp6(2), t.Oqu(Xt.data.text);
    }
  },
  dependencies: [a.PC, d.$, M.NZ],
  styles: [".label-cell[_ngcontent-%COMP%]{white-space:nowrap;padding:1px calc(var(--lu-base-gutter) * 1)}"],
  changeDetection: 0
});
