// Exact compiled component metadata; references belong to modules/56137.js
({
  type: B,
  selectors: [["lu-expansion-panel-header"]],
  hostVars: 3,
  hostBindings: function (j, W) {
    1 & j && t.NdJ("click", function () {
      return W.toggle();
    }), 2 & j && t.uIk("data-lu-color", W.color)("data-lu-expanded", W.expanded)("data-lu-header-position", W.headerPosition);
  },
  inputs: {
    withArrow: "withArrow",
    color: "color"
  },
  ngContentSelectors: x,
  decls: 3,
  vars: 1,
  consts: [["lu-text", ""], ["icon", "chevron-right", "luTextLeft", "", 4, "ngIf"], ["icon", "chevron-right", "luTextLeft", ""]],
  template: function (j, W) {
    1 & j && (t.F$t(), t.TgZ(0, "div", 0), t.YNc(1, h, 1, 0, "lu-svg-icon", 1), t.Hsn(2), t.qZA()), 2 & j && (t.xp6(1), t.Q6J("ngIf", W.withArrow));
  },
  dependencies: [d.O5, A.q, b.NZ, b.ZZ],
  styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:flex;cursor:pointer;overflow:hidden;justify-content:flex-start;align-items:center;background-color:var(--lu-expansion-panel-background);padding:calc(var(--lu-base-gutter) / 2) 0;flex-shrink:0;--lu-text-color: var(--lu-expansion-panel-color)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{outline:none}[_nghost-%COMP%]:not([aria-disabled=true]){cursor:pointer}[_nghost-%COMP%]:not([data-lu-color=transparent]){width:100%}[_nghost-%COMP%]:hover[data-lu-expanded=true]   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{opacity:.25}[_nghost-%COMP%]:hover   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{opacity:.15}[_nghost-%COMP%]   lu-svg-icon[icon=chevron-right][_ngcontent-%COMP%]{width:16px;height:16px;transition:var(--lu-transition)}[data-lu-expanded=true][_nghost-%COMP%]   lu-svg-icon[icon=chevron-right][_ngcontent-%COMP%]{transform:rotate(90deg)}[data-lu-expanded=true][data-lu-header-position=bottom][_nghost-%COMP%]   lu-svg-icon[icon=chevron-right][_ngcontent-%COMP%]{transform:rotate(-90deg)}[data-lu-expanded=true][data-lu-color=primary][_nghost-%COMP%]   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{opacity:.2}[data-lu-color=primary][_nghost-%COMP%]   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{background-color:var(--lu-primary)}[_nghost-%COMP%]     lu-badge:not([luTextBefore]){display:inline-flex;justify-content:center;width:35px;margin-right:var(--lu-base-gutter);margin-top:2px;margin-left:calc(var(--lu-base-gutter) / 2 * -1)}"],
  changeDetection: 0
});
