// Exact compiled component metadata; references belong to modules/73922.js
({
  type: wo,
  selectors: [["lu-month-stepper"]],
  viewQuery: function (Vt, Pn) {
    if (1 & Vt && t.Gf(C.$, 7), 2 & Vt) {
      let pi;
      t.iGM(pi = t.CRH()) && (Pn.dropdown = pi.first);
    }
  },
  inputs: {
    minDate: "minDate",
    maxDate: "maxDate"
  },
  features: [t._Bn([{
    provide: vt.fU,
    useExisting: dn
  }, {
    provide: vt.Oc,
    useValue: Kr.Ls.PRIMITIVE
  }]), t.qOj],
  decls: 10,
  vars: 9,
  consts: [["host", ""], ["align", "center", 3, "blurContent", "highlight"], ["stepUnit", "month", "luInputWrapperBefore", "", 3, "minDate"], ["luInput", "", "luInputString", "", "readonly", "true"], ["stepUnit", "month", "luInputWrapperAfter", "", 3, "maxDate"], [3, "minDate", "maxDate", 4, "luOverlayContent"], [3, "minDate", "maxDate"]],
  template: function (Vt, Pn) {
    if (1 & Vt && (t.TgZ(0, "lu-month-stepper-host", null, 0)(2, "lu-input-wrapper", 1), t.ALo(3, "titlecase"), t.ALo(4, "luDateFormatter"), t._UZ(5, "lu-calendar-previous", 2)(6, "input", 3)(7, "lu-calendar-next", 4), t.TgZ(8, "lu-dropdown"), t.YNc(9, Gn, 1, 2, "lu-month-stepper-chooser", 5), t.qZA()()()), 2 & Vt) {
      const pi = t.MAs(1);
      t.xp6(2), t.Q6J("blurContent", t.lcZ(3, 4, t.xi3(4, 6, pi.model, "MMMM yyyy")))("highlight", !1), t.xp6(3), t.Q6J("minDate", Pn.minDate), t.xp6(2), t.Q6J("maxDate", Pn.maxDate);
    }
  },
  dependencies: [Or, Le.HY, Le.kH, Le.Fj, Ke.L, je.H, xa.Z, rs._, C.$, yi.o, tn, f.rS, qn.M],
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
