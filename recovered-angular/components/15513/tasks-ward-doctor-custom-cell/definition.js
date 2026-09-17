// Exact compiled component metadata; references belong to modules/15513.js
({
  type: ay,
  selectors: [["tasks-ward-doctor-custom-cell"]],
  inputs: {
    data: "data"
  },
  decls: 8,
  vars: 8,
  consts: [["panelClass", "tooltip-tasks", 3, "luTooltip", "withArrow", "canOpen", "positions"], [1, "wardAndDoctor-cell"], [1, "wardAndDoctor-cell_ward"], [1, "wardAndDoctor-cell_doctor"], ["tooltipTmpl", ""], [1, "tooltip-tasks__title", 3, "innerHtml"], [1, "tooltip-tasks__description", 3, "innerHtml"]],
  template: function (o, D) {
    if (1 & o && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "p", 2), e._uU(3), e.qZA(), e.TgZ(4, "p", 3), e._uU(5), e.qZA()()(), e.YNc(6, C6, 3, 2, "ng-template", null, 4, e.W1O)), 2 & o) {
      const Z = e.MAs(7);
      e.Q6J("luTooltip", Z)("withArrow", !1)("canOpen", !D.noWard)("positions", "top-left"), e.xp6(2), e.ekj("error", D.noWard), e.xp6(1), e.Oqu(D.getWardName), e.xp6(2), e.Oqu(D.doctorName);
    }
  },
  dependencies: [bc.$],
  styles: [".wardAndDoctor-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.wardAndDoctor-cell_ward[_ngcontent-%COMP%]{font-size:15px}.wardAndDoctor-cell_ward.error[_ngcontent-%COMP%]{color:var(--lu-red-120);font-weight:600}.wardAndDoctor-cell_doctor[_ngcontent-%COMP%]{color:var(--lu-black-54);font-size:13px}"]
});
