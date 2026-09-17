// Exact compiled component metadata; references belong to modules/15513.js
({
  type: v0,
  selectors: [["tasks-appointment-custom-cell"]],
  inputs: {
    data: "data"
  },
  features: [e.TTD],
  decls: 4,
  vars: 5,
  consts: [[3, "ngClass", "click"], ["alt", "Badge icon", "width", "9", "height", "16", "class", "cell-badge", 3, "ngSrc", 4, "ngIf"], [2, "height", "24px", "width", "24px"], ["alt", "Badge icon", "width", "9", "height", "16", 1, "cell-badge", 3, "ngSrc"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "button", 0), e.NdJ("click", function () {
      return D.cellSettings.action();
    }), e.YNc(1, qS, 1, 1, "img", 1), e.O4$(), e.TgZ(2, "svg", 2), e._UZ(3, "use"), e.qZA()()), 2 & o && (e.Q6J("ngClass", e.VKq(3, eI, D.cellSettings.class)), e.xp6(1), e.Q6J("ngIf", D.cellSettings.showBadge), e.xp6(2), e.uIk("href", "assets/svg/sprite.svg#" + D.cellSettings.icon, null, "xlink"));
  },
  dependencies: [vo.mk, vo.O5, vo.Zd],
  styles: [".appointment-btn[_ngcontent-%COMP%]{position:relative;width:60px;height:40px;border-radius:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center}.appointment-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--lu-black-80)}.cell-badge[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px}.no-appointment[_ngcontent-%COMP%]{background-color:#fafafa;cursor:unset}.no-appointment[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--lu-black-20)}.has-appointment[_ngcontent-%COMP%]{background-color:#fafafa}.has-appointment[_ngcontent-%COMP%]:hover{background-color:#ebeaea}.appointed[_ngcontent-%COMP%]{background-color:var(--lu-yellow-80)}.appointed[_ngcontent-%COMP%]:hover{background-color:var(--lu-yellow-100)}.overdue[_ngcontent-%COMP%]{background-color:var(--lu-red-100)}.overdue[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff}.overdue[_ngcontent-%COMP%]:hover{background-color:var(--lu-red-120)}.done[_ngcontent-%COMP%]{background-color:var(--lu-green-100)}.done[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff}.done[_ngcontent-%COMP%]:hover{background-color:var(--lu-green-120)}"]
});
