// Exact compiled component metadata; references belong to modules/15513.js
({
  type: M0,
  selectors: [["st-news2-cell"]],
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 6,
  vars: 4,
  consts: [[1, "st-news2-cell"], [1, "st-news2-cell__cube", "st-scale-cube", 3, "ngClass", "click"], [1, "st-news2-cell__cube-value"], ["class", "st-scale-cube__dot", 4, "ngIf"], ["class", "st-news2-cell__time", 4, "ngIf"], [1, "st-scale-cube__dot"], [1, "st-news2-cell__time"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "div", 1), e.NdJ("click", function (X) {
      return D.onBadgeClick(X);
    }), e.TgZ(2, "span", 2), e._uU(3), e.qZA(), e.YNc(4, d5, 1, 0, "span", 3), e.qZA(), e.YNc(5, p5, 2, 1, "div", 4), e.qZA()), 2 & o && (e.xp6(1), e.Q6J("ngClass", D.cubeColorClass), e.xp6(2), e.Oqu(D.displayValue), e.xp6(1), e.Q6J("ngIf", D.showAlertDot), e.xp6(1), e.Q6J("ngIf", D.hasAssessment));
  },
  dependencies: [vo.ez, vo.mk, vo.O5],
  styles: [".st-news2-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:48px}.st-news2-cell__cube[_ngcontent-%COMP%]{cursor:pointer}.st-news2-cell__cube_default[_ngcontent-%COMP%]{background:#f3f3f3;color:#5a5a5a}.st-news2-cell__time[_ngcontent-%COMP%]{font-size:13px;line-height:20px;color:#757575}", ".st-scale-cube[_ngcontent-%COMP%]{position:relative;border-radius:2px}@media (min-width: 992px){.st-scale-cube[_ngcontent-%COMP%]{position:relative;font-size:13px;font-weight:400;line-height:20px;padding:2px 8px}}.st-scale-cube__value[_ngcontent-%COMP%]{display:block;font-size:13px;font-weight:400;line-height:20px}.st-scale-cube__dot[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-4px;padding:4px;border-radius:50%;background:#f05c46;border:2px solid #fff}"],
  changeDetection: 0
});
