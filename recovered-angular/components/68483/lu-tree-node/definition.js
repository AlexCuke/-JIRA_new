// Exact compiled component metadata; references belong to modules/68483.js
({
  type: We,
  selectors: [["lu-tree-node"]],
  inputs: {
    node: "node",
    nodeContent: "nodeContent",
    displayValueFn: "displayValueFn",
    indents: "indents"
  },
  decls: 2,
  vars: 3,
  consts: [[3, "node", 4, "ngIf"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "node"]],
  template: function (st, q) {
    1 & st && (e.YNc(0, y, 1, 1, "lu-tree-node-indent", 0), e.YNc(1, j, 2, 1, "ng-container", 1)), 2 & st && (e.Q6J("ngIf", q.indents), e.xp6(1), e.Q6J("polymorpheusOutlet", q.nodeContent)("polymorpheusOutletContext", q.getContext(null == q.node ? null : q.node.data)));
  },
  dependencies: [M.O5, b.Li, te],
  styles: ["[_nghost-%COMP%]{display:flex}"],
  changeDetection: 0
});
