// Exact compiled component metadata; references belong to modules/39080.js
({
  type: I,
  selectors: [["lu-progress-bar"]],
  hostVars: 2,
  hostBindings: function (L, C) {
    2 & L && e.uIk("data-lu-color", C.color)("data-test-role", C.dataTestRole);
  },
  inputs: {
    color: "color",
    value: "value",
    maxValue: "maxValue",
    progressType: "progressType"
  },
  decls: 4,
  vars: 5,
  consts: [[1, "lu-progress-bar-wrapper"], [1, "lu-progress-bar"], [1, "lu-progress-bar-fill"], ["class", "lu-progress-status", 4, "ngIf"], [1, "lu-progress-status"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "lu-progress-status-delimiter"]],
  template: function (L, C) {
    1 & L && (e.TgZ(0, "div", 0)(1, "div", 1), e._UZ(2, "div", 2), e.qZA(), e.YNc(3, b, 4, 3, "div", 3), e.qZA()), 2 & L && (e.Tol(C.color), e.xp6(2), e.Udp("transform", C.translateX), e.xp6(1), e.Q6J("ngIf", "nothing" !== C.progressType));
  },
  dependencies: [m.O5, m.RF, m.n9],
  styles: ["[_nghost-%COMP%]{display:block;--lu-progress-bar-color: var(--lu-primary-bg);--lu-progress-bar-fill-color: var(--lu-primary-fill)}[data-lu-color=teal][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-teal-20);--lu-progress-bar-fill-color: var(--lu-teal-80)}[data-lu-color=yellow][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-yellow-20);--lu-progress-bar-fill-color: var(--lu-yellow-80)}[data-lu-color=blue][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-blue-20);--lu-progress-bar-fill-color: var(--lu-blue-80)}[data-lu-color=red][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-red-20);--lu-progress-bar-fill-color: var(--lu-red-80)}[data-lu-color=orange][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-orange-20);--lu-progress-bar-fill-color: var(--lu-orange-80)}[data-lu-color=green][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-green-20);--lu-progress-bar-fill-color: var(--lu-green-80)}[data-lu-color=black][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-black-20);--lu-progress-bar-fill-color: var(--lu-black-80)}[data-lu-color=purple][_nghost-%COMP%]{--lu-progress-bar-color: var(--lu-purple-20);--lu-progress-bar-fill-color: var(--lu-purple-80)}.lu-progress-bar-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.lu-progress-bar-wrapper[_ngcontent-%COMP%]   .lu-progress-bar[_ngcontent-%COMP%]{flex:1;height:var(--lu-progress-bar-height);border-radius:12px;background-color:var(--lu-progress-bar-color);overflow:hidden}.lu-progress-bar-wrapper[_ngcontent-%COMP%]   .lu-progress-bar[_ngcontent-%COMP%]   .lu-progress-bar-fill[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:12px;background-color:var(--lu-progress-bar-fill-color);transform:scaleX(0);transform-origin:left;transition:transform var(--lu-transition)}.lu-progress-bar-wrapper[_ngcontent-%COMP%]   .lu-progress-status[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);margin-left:var(--lu-base-gutter)}.lu-progress-bar-wrapper[_ngcontent-%COMP%]   .lu-progress-status[_ngcontent-%COMP%]   .lu-progress-status-delimiter[_ngcontent-%COMP%]{color:var(--lu-black-30)}"],
  changeDetection: 0
});
