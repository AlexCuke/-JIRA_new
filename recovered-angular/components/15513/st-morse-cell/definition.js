// Exact compiled component metadata; references belong to modules/15513.js
({
  type: E0,
  selectors: [["st-morse-cell"]],
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 5,
  vars: 3,
  consts: [[1, "st-morse-cell"], [1, "st-morse-cell__cube", "st-scale-cube", 3, "ngClass", "click"], [1, "st-morse-cell__cube-value"], ["class", "st-scale-cube__dot", 4, "ngIf"], [1, "st-scale-cube__dot"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "div", 1), e.NdJ("click", function (X) {
      return D.onCubeClick(X);
    }), e.TgZ(2, "span", 2), e._uU(3), e.qZA(), e.YNc(4, E5, 1, 0, "span", 3), e.qZA()()), 2 & o && (e.xp6(1), e.Q6J("ngClass", D.cubeColorClass), e.xp6(2), e.Oqu(D.displayValue), e.xp6(1), e.Q6J("ngIf", D.showAlertDot));
  },
  dependencies: [vo.ez, vo.mk, vo.O5],
  styles: [".st-morse-cell[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;height:100%;min-height:48px}.st-morse-cell__cube[_ngcontent-%COMP%]{cursor:pointer}.st-morse-cell__cube_default[_ngcontent-%COMP%]{background:#f3f3f3;color:#5a5a5a}.st-morse-cell__cube_green-sum-result[_ngcontent-%COMP%]{background-color:#dff0c0;color:#346b07}.st-morse-cell__cube_yellow-sum-result[_ngcontent-%COMP%]{background-color:#fff5b3;color:#bf4905}.st-morse-cell__cube_red-sum-result[_ngcontent-%COMP%]{background-color:#fcd6ce;color:#aa2115}.st-morse-cell__cube-value[_ngcontent-%COMP%]{line-height:1}", ".st-scale-cube[_ngcontent-%COMP%]{position:relative;border-radius:2px}@media (min-width: 992px){.st-scale-cube[_ngcontent-%COMP%]{position:relative;font-size:13px;font-weight:400;line-height:20px;padding:2px 8px}}.st-scale-cube__value[_ngcontent-%COMP%]{display:block;font-size:13px;font-weight:400;line-height:20px}.st-scale-cube__dot[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-4px;padding:4px;border-radius:50%;background:#f05c46;border:2px solid #fff}"],
  changeDetection: 0
});
