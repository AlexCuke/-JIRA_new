// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-link-cell"]],
  inputs: {
    data: "data",
    textSize: "textSize"
  },
  outputs: {
    runAction: "runAction"
  },
  decls: 1,
  vars: 1,
  consts: [["lu-text", "", "class", "us-link-cell", 3, "size", "click", 4, "ngIf"], ["lu-text", "", 1, "us-link-cell", 3, "size", "click"]],
  template: function (Je, Xt) {
    1 & Je && t.YNc(0, W, 2, 2, "span", 0), 2 & Je && t.Q6J("ngIf", Xt.data.text);
  },
  dependencies: [a.O5, M.NZ],
  styles: [".us-link-cell[_ngcontent-%COMP%]{position:relative;color:var(--lu-primary);cursor:pointer}.us-link-cell[_ngcontent-%COMP%]:before{position:absolute;content:\"\";width:100%;left:0;bottom:-1px;border-bottom:1px dashed var(--lu-primary)}"],
  changeDetection: 0
});
