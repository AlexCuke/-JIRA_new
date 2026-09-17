// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-button-widget"]],
  hostBindings: function (Pt, Ki) {
    1 & Pt && t.NdJ("click", function (oa) {
      return Ki.onRunEvent(oa);
    });
  },
  inputs: {
    widget: "widget"
  },
  outputs: {
    runEvent: "runEvent"
  },
  decls: 5,
  vars: 3,
  consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["btnContent", ""], ["lu-button-raised", "", 3, "size", "color", "colorType", "luTooltip", "canOpen", "isLoading", 4, "ngSwitchCase"], ["lu-button-outer", "", 3, "size", "color", "colorType", "luTooltip", "canOpen", "isLoading", 4, "ngSwitchCase"], ["lu-button", "", 3, "size", "color", "colorType", "luTooltip", "canOpen", "isLoading", 4, "ngSwitchDefault"], ["lu-button-raised", "", 3, "size", "color", "colorType", "luTooltip", "canOpen", "isLoading"], [4, "ngTemplateOutlet"], ["lu-button-outer", "", 3, "size", "color", "colorType", "luTooltip", "canOpen", "isLoading"], ["lu-button", "", 3, "size", "color", "colorType", "luTooltip", "canOpen", "isLoading"], ["lu-button-icon-raised", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading", 4, "ngSwitchCase"], ["lu-button-icon-outer", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading", 4, "ngSwitchCase"], ["lu-button-icon-bg", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading", 4, "ngSwitchCase"], ["lu-button-icon", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading", 4, "ngSwitchDefault"], ["lu-button-icon-raised", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading"], [3, "ngStyle", "icon", "size"], ["lu-button-icon-outer", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading"], ["lu-button-icon-bg", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading"], ["lu-button-icon", "", 3, "ngStyle", "size", "color", "luTooltip", "canOpen", "colorType", "rounded", "isLoading"], ["luButtonPrefix", "", 3, "icon", "size", 4, "ngIf"], ["luButtonPostfix", "", 3, "icon", "size", 4, "ngIf"], ["luButtonPrefix", "", 3, "icon", "size"], ["luButtonPostfix", "", 3, "icon", "size"]],
  template: function (Pt, Ki) {
    1 & Pt && (t.ynx(0, 0), t.YNc(1, Er, 5, 3, "ng-container", 1), t.YNc(2, aa, 6, 4, "ng-container", 1), t.BQk(), t.YNc(3, ul, 3, 3, "ng-template", null, 2, t.W1O)), 2 & Pt && (t.Q6J("ngSwitch", Ki.widget.type), t.xp6(1), t.Q6J("ngSwitchCase", "btn"), t.xp6(1), t.Q6J("ngSwitchCase", "btn.icon"));
  },
  dependencies: [qe.O5, qe.tP, qe.PC, qe.RF, qe.n9, qe.ED, te.mc, te.nx, te.zY, ke.q, pe.k, fe.$],
  styles: ["[_nghost-%COMP%]{display:block;line-height:normal}"],
  changeDetection: 0
});
