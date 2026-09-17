// Exact compiled component metadata; references belong to modules/68483.js
({
  type: We,
  selectors: [["lu-node-indent"]],
  hostVars: 2,
  hostBindings: function (st, q) {
    2 & st && e.uIk("data-lu-lines", q.line)("data-lu-hovered", q.isHovered);
  },
  inputs: {
    node: "node",
    line: "line"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "lu-indent-line", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "lu-indent-line", 3, "mouseenter", "mouseleave", "click"], ["width", "100%", "height", "100%", "xmlns", "http://www.w3.org/2000/svg"], ["width", "100%", "height", "100%", 2, "fill", "none", "stroke", "var(--lu-tree-indent-color)", "stroke-width", "4", "stroke-dasharray", "3 3"]],
  template: function (st, q) {
    1 & st && e.YNc(0, T, 3, 0, "div", 0), 2 & st && e.Q6J("ngIf", q.line);
  },
  dependencies: [M.O5],
  styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;flex-shrink:0;width:var(--lu-tree-node-indent)}[data-lu-lines=true][_nghost-%COMP%]{cursor:pointer}[data-lu-lines=true][_nghost-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;content:\"\";top:0;right:calc(var(--lu-tree-node-indent) / 2);bottom:0;width:1px}[data-lu-hovered=true][_nghost-%COMP%]{--lu-tree-indent-color: var(--lu-tree-indent-hover-color)}.lu-indent-line[_ngcontent-%COMP%]{width:100%;height:100%}"],
  changeDetection: 0
});
