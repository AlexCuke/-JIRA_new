// Exact compiled component metadata; references belong to modules/83151.js
({
  type: an,
  selectors: [["app-tube-event-hint"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["isTooltip", ""], [1, "hint-wrapper"], ["icon", "info-line", 3, "size"], ["panelClass", "tube-card-tooltip", "icon", "info-line", 3, "luTooltip", "withArrow", "borderOffset", "positions", "size"]],
  template: function (In, ui) {
    if (1 & In && (y.YNc(0, ae, 5, 1, "ng-container", 0), y.YNc(1, Y, 1, 5, "ng-template", null, 1, y.W1O)), 2 & In) {
      const To = y.MAs(2);
      y.Q6J("ngIf", ui.isTablet)("ngIfElse", To);
    }
  },
  dependencies: [t.O5, b.q, Le.$],
  styles: ["[_nghost-%COMP%]{display:flex}@media (max-width: 960px){[_nghost-%COMP%]{width:100%}}.hint-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#38a1d6}.hint-wrapper[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #38a1d6}lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #b3b3b3;cursor:pointer}lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}"],
  changeDetection: 0
});
