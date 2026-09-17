// Exact compiled component metadata; references belong to modules/15513.js
({
  type: C0,
  selectors: [["tasks-news2-custom-cell"]],
  inputs: {
    data: "data"
  },
  decls: 10,
  vars: 13,
  consts: [[1, "news2-cell", 3, "ngClass"], [1, "point-cube"], [4, "ngIf"], ["style", "color: #757575", 4, "ngIf"], [1, "timer"], [1, "news-btn", 3, "ngClass", "click"], [2, "color", "#757575"], [3, "ngClass"], ["class", "adaptive-text", 4, "ngIf"], [1, "adaptive-text"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "div", 1), e.YNc(2, DI, 2, 1, "ng-container", 2), e.YNc(3, PI, 2, 0, "ng-container", 2), e.YNc(4, OI, 2, 0, "div", 3), e.qZA(), e.TgZ(5, "div", 4), e.YNc(6, II, 5, 5, "ng-container", 2), e.YNc(7, LI, 1, 0, "ng-container", 2), e.qZA(), e.TgZ(8, "button", 5), e.NdJ("click", function () {
      return D.onNewsClick();
    }), e._uU(9, " NEWS2 "), e.qZA()()), 2 & o && (e.Q6J("ngClass", e.VKq(11, kI, D.isTablet)), e.xp6(1), e.Udp("background-color", D.scoreBoxColorClass.bgColor)("color", D.scoreBoxColorClass.color), e.xp6(1), e.Q6J("ngIf", null !== D.grade), e.xp6(1), e.Q6J("ngIf", null === D.grade && !D.isTablet), e.xp6(1), e.Q6J("ngIf", !D.grade && D.isTablet), e.xp6(2), e.Q6J("ngIf", null !== D.grade), e.xp6(1), e.Q6J("ngIf", null === D.grade), e.xp6(1), e.Q6J("ngClass", D.newsButtonColorClass));
  },
  dependencies: [vo.mk, vo.O5],
  styles: [".news2-cell[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.news2-cell[_ngcontent-%COMP%]   .point-cube[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:4px;display:flex;justify-content:center;align-items:center;font-size:15px;font-weight:600;margin-right:12px}.news2-cell[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{width:72px;font-size:15px}@media ((min-width: 600px) and (max-width: 960px)){.news2-cell[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{width:71px;margin-right:17px}.news2-cell[_ngcontent-%COMP%]   .point-cube[_ngcontent-%COMP%]{margin-right:8px}}.news2-cell[_ngcontent-%COMP%]   .news-btn[_ngcontent-%COMP%]{width:60px;height:40px;border-radius:8px;display:flex;justify-content:center;align-items:center;border:none;cursor:pointer;font-size:13px;font-weight:600}.news2-cell[_ngcontent-%COMP%]   .news-btn.default[_ngcontent-%COMP%]{background-color:#fafafa}.news2-cell[_ngcontent-%COMP%]   .news-btn.yellow[_ngcontent-%COMP%]{background-color:var(--lu-yellow-80)}.news2-cell[_ngcontent-%COMP%]   .news-btn.red[_ngcontent-%COMP%]{background-color:var(--lu-red-100);color:var(--lu-white)}.adaptive-news2-cell[_ngcontent-%COMP%]{width:228px}.adaptive-time-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:40px;width:71px;margin-right:16px}.adaptive-text[_ngcontent-%COMP%]{font-size:13px;font-weight:400;color:#757575}"]
});
