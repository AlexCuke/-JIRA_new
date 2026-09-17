// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-smart-cell"]],
  inputs: {
    data: "data",
    textSize: "textSize"
  },
  decls: 6,
  vars: 7,
  consts: [[1, "cell-body", 3, "ngClass", "ngStyle"], [3, "icon", "size", "luTooltip", "canOpen", "positions", "ngStyle", 4, "ngIf"], ["class", "prefix__text", "lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size", 4, "ngIf"], ["lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size", 4, "ngIf"], ["class", "postfix__text", "lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size", 4, "ngIf"], [3, "icon", "size", "luTooltip", "canOpen", "positions", "ngStyle"], ["lu-text", "", 1, "prefix__text", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size"], ["lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size"], ["lu-text", "", 1, "postfix__text", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size"]],
  template: function (Je, Xt) {
    1 & Je && (t.TgZ(0, "div", 0), t.YNc(1, pe, 1, 6, "lu-svg-icon", 1), t.YNc(2, be, 2, 6, "span", 2), t.YNc(3, le, 2, 6, "span", 3), t.YNc(4, n, 2, 6, "span", 4), t.YNc(5, Se, 1, 6, "lu-svg-icon", 1), t.qZA()), 2 & Je && (t.Q6J("ngClass", Xt.containerClass)("ngStyle", Xt.containerStyle), t.xp6(1), t.Q6J("ngIf", Xt.prefixIcon && Xt.prefixIcon.iconName), t.xp6(1), t.Q6J("ngIf", Xt.smartTitle && Xt.prefixText), t.xp6(1), t.Q6J("ngIf", Xt.smartTitle), t.xp6(1), t.Q6J("ngIf", Xt.smartTitle && Xt.postfixText), t.xp6(1), t.Q6J("ngIf", Xt.postfixIcon && Xt.postfixIcon.iconName));
  },
  dependencies: [a.mk, a.O5, a.PC, b.q, d.$, M.NZ],
  styles: [".cell-body[_ngcontent-%COMP%]{display:flex}.prefix__text[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) / 2)}.postfix__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2)}.rounded-field[_ngcontent-%COMP%]{text-align:center;padding:2px 4px;border-radius:4px}"],
  changeDetection: 0
});
