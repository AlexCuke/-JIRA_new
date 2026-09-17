// Exact compiled component metadata; references belong to modules/73922.js
({
  type: Kt,
  selectors: [["lu-month-stepper-host"]],
  contentQueries: function (Pn, pi, xo) {
    if (1 & Pn && (t.Suo(xo, C.$, 5), t.Suo(xo, vt.kK, 5)), 2 & Pn) {
      let No;
      t.iGM(No = t.CRH()) && (pi.dropdown = No.first), t.iGM(No = t.CRH()) && (pi.inputControl = No.first);
    }
  },
  viewQuery: function (Pn, pi) {
    if (1 & Pn && t.Gf(_s, 7, t.SBq), 2 & Pn) {
      let xo;
      t.iGM(xo = t.CRH()) && (pi.origin = xo.first);
    }
  },
  features: [t._Bn([{
    provide: vt.fU,
    useExisting: Kt
  }, {
    provide: vt.Oc,
    useValue: Kr.Ls.PRIMITIVE
  }, {
    provide: vt.N4,
    useExisting: Kt
  }, {
    provide: an.eV,
    useExisting: Kt
  }]), t.qOj],
  ngContentSelectors: ra,
  decls: 3,
  vars: 1,
  consts: [["luFocusCatcher", "", 1, "lu-month-stepper-host", 3, "luDropdownHandler", "click", "blurEvent"], ["origin", ""]],
  template: function (Pn, pi) {
    1 & Pn && (t.F$t(), t.TgZ(0, "label", 0, 1), t.NdJ("click", function () {
      return pi.clickEvent();
    })("blurEvent", function () {
      return null == pi.dropdown ? null : pi.dropdown.close();
    }), t.Hsn(2), t.qZA()), 2 & Pn && t.Q6J("luDropdownHandler", pi.dropdown);
  },
  dependencies: [Ct.V, q.i],
  styles: ["[_nghost-%COMP%]{position:relative;display:block;width:192px;flex-shrink:0}.lu-month-stepper-host[_ngcontent-%COMP%]{display:block}  .lu-month-stepper-host-panel lu-month-stepper-chooser{margin:calc(var(--lu-base-gutter) * 2);margin-top:var(--lu-base-gutter)}"],
  changeDetection: 0
});
