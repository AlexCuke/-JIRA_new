// Exact compiled component metadata; references belong to modules/79449.js
({
  type: je,
  selectors: [["dp-diagnosis-cell"]],
  inputs: {
    data: "data"
  },
  decls: 5,
  vars: 3,
  consts: [[1, "diagnosis-tag", 3, "luTooltip"], ["class", "diagnosis-tag__item", "type", "light", 4, "ngIf"], ["class", "diagnosis-tag__item", "type", "light", "color", "teal", 4, "ngIf"], ["tooltipTmpl", ""], ["type", "light", 1, "diagnosis-tag__item"], ["type", "light", "color", "teal", 1, "diagnosis-tag__item"], [3, "innerHtml"]],
  template: function (Je, Xt) {
    if (1 & Je && (t.TgZ(0, "div", 0), t.YNc(1, f, 2, 1, "lu-tag", 1), t.YNc(2, E, 2, 1, "lu-tag", 2), t.qZA(), t.YNc(3, h, 1, 1, "ng-template", null, 3, t.W1O)), 2 & Je) {
      const Nn = t.MAs(4);
      t.Q6J("luTooltip", Nn), t.xp6(1), t.Q6J("ngIf", Xt.hasDiagnosisCode(Xt.data.diagnosisArrival)), t.xp6(1), t.Q6J("ngIf", Xt.hasDiagnosisCode(Xt.data.diagnosisAppointment));
    }
  },
  dependencies: [a.O5, m.l$, d.$],
  styles: [".diagnosis-tag[_ngcontent-%COMP%]{white-space:nowrap}.diagnosis-tag__item[_ngcontent-%COMP%]:first-child{margin-right:calc(var(--lu-base-gutter) / 2)}"],
  changeDetection: 0
});
