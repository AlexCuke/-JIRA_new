// Exact compiled component metadata; references belong to modules/99691.js
({
  type: Y,
  selectors: [["lu-list"]],
  viewQuery: function (te, pe) {
    if (1 & te && m.Gf(F.V, 5), 2 & te) {
      let be;
      m.iGM(be = m.CRH()) && (pe.focusCatcher = be.first);
    }
  },
  hostVars: 1,
  hostBindings: function (te, pe) {
    2 & te && m.uIk("data-test-role", pe.dataTestRole);
  },
  inputs: {
    autofocus: "autofocus"
  },
  outputs: {
    optionsScroll: "optionsScroll"
  },
  ngContentSelectors: fe,
  decls: 2,
  vars: 0,
  consts: [["luFocusCatcher", "", 3, "focusEvent"]],
  template: function (te, pe) {
    1 & te && (m.F$t(), m.TgZ(0, "div", 0), m.NdJ("focusEvent", function () {
      return pe.focusEvent();
    }), m.Hsn(1), m.qZA());
  },
  dependencies: [F.V],
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
