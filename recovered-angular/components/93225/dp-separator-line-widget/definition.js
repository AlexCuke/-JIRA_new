// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-separator-line-widget"]],
  inputs: {
    widget: "widget",
    renderContext: "renderContext"
  },
  decls: 4,
  vars: 3,
  consts: [[3, "ngClass"], [4, "ngIf", "ngIfElse"], ["withoutText", ""], [1, "separator-line", "separator-line--with-text"], ["lu-text", "", "size", "small", "color", "muted"], [1, "separator-line"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, Ko, 5, 1, "ng-container", 1), t.YNc(2, Mi, 1, 0, "ng-template", null, 2, t.W1O), t.qZA()), 2 & Pt) {
      const Nr = t.MAs(3);
      t.Q6J("ngClass", Ki.getRootClass), t.xp6(1), t.Q6J("ngIf", null == Ki.widget.data ? null : Ki.widget.data.text)("ngIfElse", Nr);
    }
  },
  dependencies: [qe.mk, qe.O5, W.NZ],
  styles: ["[_nghost-%COMP%]{display:block}.separator-line-vertical[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:space-between;align-items:center}.separator-line-vertical[_ngcontent-%COMP%]   .separator-line[_ngcontent-%COMP%]{display:block;height:1px;width:100%;background-color:var(--lu-black-15)}.separator-line-vertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;padding:0 var(--lu-base-gutter);white-space:nowrap}.separator-line-horizontal[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;justify-content:space-between;align-items:center}.separator-line-horizontal[_ngcontent-%COMP%]   .separator-line[_ngcontent-%COMP%]{display:block;height:calc(var(--lu-base-gutter) * 3);margin:0 calc(var(--lu-base-gutter) * 2);width:1px;background-color:var(--lu-black-15)}.separator-line-horizontal[_ngcontent-%COMP%]   .separator-line--with-text[_ngcontent-%COMP%]{height:calc(var(--lu-base-gutter) * .5)}"],
  changeDetection: 0
});
