// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-expansion-panel-toggle-button-widget"]],
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
  decls: 4,
  vars: 3,
  consts: [["lu-button-link-dashed", ""], ["icon", "chevron-down", "luButtonPrefix", "", 3, "size", 4, "ngIf"], ["icon", "chevron-up", "luButtonPrefix", "", 3, "size", 4, "ngIf"], ["icon", "chevron-down", "luButtonPrefix", "", 3, "size"], ["icon", "chevron-up", "luButtonPrefix", "", 3, "size"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.TgZ(0, "button", 0), t.YNc(1, mi, 1, 1, "lu-svg-icon", 1), t.YNc(2, ro, 1, 1, "lu-svg-icon", 2), t._uU(3), t.qZA()), 2 & Pt) {
      let Nr;
      t.xp6(1), t.Q6J("ngIf", !Ki.expanded), t.xp6(1), t.Q6J("ngIf", Ki.expanded), t.xp6(1), t.hij(" ", null !== (Nr = null == Ki.widget.data || null == Ki.widget.data.btnSetting ? null : Ki.widget.data.btnSetting.text) && void 0 !== Nr ? Nr : "Все фильтры", "\n");
    }
  },
  dependencies: [qe.O5, te.mc, te.nx, ke.q],
  changeDetection: 0
});
