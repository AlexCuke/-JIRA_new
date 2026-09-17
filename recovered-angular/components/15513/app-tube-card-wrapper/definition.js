// Exact compiled component metadata; references belong to modules/15513.js
({
  type: FC,
  selectors: [["app-tube-card-wrapper"]],
  decls: 4,
  vars: 3,
  consts: [[1, "tube-card-wrapper"], [1, "backdrop", 3, "click"], [1, "tube-card-content"], [4, "ngIf"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "div", 1), e.NdJ("click", function () {
      return D.onCloseCard();
    }), e.qZA(), e.TgZ(2, "div", 2), e.YNc(3, NA, 1, 0, "app-tube-card", 3), e.qZA()()), 2 & o && (e.ekj("open", D.isOpen), e.xp6(3), e.Q6J("ngIf", D.isOpen));
  },
  dependencies: [vo.O5, gP.W],
  styles: ["@media (max-width: 600px){  .app-tube-card-wrapper-tasks-list .tube-card{margin-top:28px;height:calc(100% - 104px)!important}}.tube-card-wrapper.open[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:2;width:100%;height:100%}@media (max-width: 960px){.tube-card-wrapper.open[_ngcontent-%COMP%]{height:calc(100% + 148px)}}@media (min-width: 992px){.tube-card-wrapper.open[_ngcontent-%COMP%]{width:calc(100% + 57px)}}.tube-card-wrapper.open[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.5)}.tube-card-wrapper.open[_ngcontent-%COMP%]   .tube-card-content[_ngcontent-%COMP%]{transform:translate(0)}@media (max-width: 960px){.tube-card-wrapper.open[_ngcontent-%COMP%]   .tube-card-content[_ngcontent-%COMP%]{transform:translateY(-148px);margin-top:16px}}.tube-card-wrapper[_ngcontent-%COMP%]   .tube-card-content[_ngcontent-%COMP%]{transform:translate(100%);position:absolute;top:0;right:0;z-index:1;width:100%;height:100%;background:#fff;transition:.3s ease;overflow:hidden}@media (max-width: 960px){.tube-card-wrapper[_ngcontent-%COMP%]   .tube-card-content[_ngcontent-%COMP%]{transform:translate(100%,-148px)}}@media (min-width: 992px){.tube-card-wrapper[_ngcontent-%COMP%]   .tube-card-content[_ngcontent-%COMP%]{width:786px}}"]
});
