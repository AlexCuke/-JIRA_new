// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-text-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 2,
  vars: 2,
  consts: [["luInput", "", "luInputString", "", 3, "formControl", "placeholder"]],
  template: function (Pt, Ki) {
    if (1 & Pt && (t.TgZ(0, "lu-input-wrapper"), t._UZ(1, "input", 0), t.qZA()), 2 & Pt) {
      let Nr;
      t.xp6(1), t.Q6J("formControl", Ki.formControl)("placeholder", null !== (Nr = null == Ki.widget.data ? null : Ki.widget.data.placeholder) && void 0 !== Nr ? Nr : "");
    }
  },
  dependencies: [a.Fj, a.JJ, a.oH, R.HY, Y.H, F.L],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}"],
  changeDetection: 0
});
