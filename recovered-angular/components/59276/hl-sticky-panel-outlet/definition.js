// Exact compiled component metadata; references belong to modules/59276.js
({
  type: oi,
  selectors: [["hl-sticky-panel-outlet"]],
  hostVars: 2,
  hostBindings: function (Qi, Qo) {
    1 & Qi && t.NdJ("click", function () {
      return Qo.backDropClick();
    }), 2 & Qi && t.Udp("position", Qo.panelPosition);
  },
  decls: 3,
  vars: 3,
  consts: [[1, "content", 3, "click"], ["class", "__close-btn", 3, "click", 4, "ngIf"], [1, "__close-btn", 3, "click"], ["icon", "close", 3, "size"]],
  template: function (Qi, Qo) {
    1 & Qi && (t.TgZ(0, "div", 0), t.NdJ("click", function (_s) {
      return Qo.stopProp(_s);
    }), t._UZ(1, "router-outlet"), t.YNc(2, Ze, 2, 1, "div", 1), t.qZA()), 2 & Qi && (t.Udp("width", Qo.data.width), t.xp6(2), t.Q6J("ngIf", Qo.data.showCloseButton));
  },
  dependencies: [e.O5, a.lC, A.q],
  styles: ["[_nghost-%COMP%]{display:flex;top:48px;bottom:48px;left:0;width:100%;height:calc(100% - 84px);background:rgba(0,0,0,.5);flex-direction:row-reverse}.content[_ngcontent-%COMP%]{position:relative;background:var(--lu-white)}.__close-btn[_ngcontent-%COMP%]{position:absolute;right:calc(var(--lu-base-gutter) * 2.5);top:calc(var(--lu-base-gutter) * 2.5);cursor:pointer;z-index:1}.__close-btn[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}"],
  changeDetection: 0
});
