// Exact compiled component metadata; references belong to modules/77978.js
({
  type: E,
  selectors: [["lu-expander"]],
  hostVars: 2,
  hostBindings: function (x, u) {
    2 & x && (t.uIk("lu-data-expanded", u.expanded), t.d8E("@preventInitialChild", u.preventInitialChild));
  },
  inputs: {
    expanded: "expanded",
    content: "content",
    direction: "direction",
    from: "from"
  },
  decls: 3,
  vars: 1,
  consts: [[4, "ngIf"], ["expTpl", ""], [3, "left", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "polymorpheusOutlet"]],
  template: function (x, u) {
    1 & x && (t.YNc(0, O, 3, 2, "ng-container", 0), t.YNc(1, C, 1, 1, "ng-template", null, 1, t.W1O)), 2 & x && t.Q6J("ngIf", u.expanded || u.from);
  },
  dependencies: [a.O5, a.tP, m.Li],
  styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .left[_ngcontent-%COMP%]{float:right}"],
  data: {
    animation: [e.tI, e.Qr, e.qy]
  },
  changeDetection: 0
});
