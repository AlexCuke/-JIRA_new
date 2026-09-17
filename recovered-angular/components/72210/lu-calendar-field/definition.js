// Exact compiled component metadata; references belong to modules/72210.js
({
  type: R,
  selectors: [["lu-calendar-field"]],
  viewQuery: function (y, j) {
    if (1 & y && t.Gf(A.$, 5), 2 & y) {
      let W;
      t.iGM(W = t.CRH()) && (j.dropdown = W.first);
    }
  },
  hostVars: 1,
  hostBindings: function (y, j) {
    2 & y && t.uIk("data-test-role", j.dataTestRole);
  },
  inputs: {
    size: "size",
    separatorChar: "separatorChar",
    minDate: "minDate",
    maxDate: "maxDate",
    disabledEntry: "disabledEntry",
    dayIsDisabled: "dayIsDisabled",
    dayClass: "dayClass",
    placeholder: "placeholder",
    calendarIcon: "calendarIcon",
    inputId: "inputId"
  },
  features: [t._Bn([{
    provide: L.fU,
    useExisting: R
  }, {
    provide: L.Oc,
    useValue: C.Ls.PRIMITIVE
  }]), t.qOj],
  decls: 10,
  vars: 15,
  consts: [[3, "size"], ["host", ""], [3, "highlight", "blurContent"], ["luInput", "", 3, "placeholder", "readOnly", "luMask", "luInputDate"], ["luInputWrapperAfter", "", 3, "calendarIcon"], [3, "content"], ["content", ""], [3, "minDate", "maxDate", "dayIsDisabled", "dayClass"]],
  template: function (y, j) {
    if (1 & y && (t.TgZ(0, "lu-calendar-field-host", 0, 1)(2, "lu-input-wrapper", 2), t.ALo(3, "luDateFormatter"), t._UZ(4, "input", 3), t.ALo(5, "luTranslate"), t._UZ(6, "lu-clear-calendar", 4), t.TgZ(7, "lu-dropdown", 5), t.YNc(8, x, 1, 4, "ng-template", null, 6, t.W1O), t.qZA()()()), 2 & y) {
      const W = t.MAs(1),
        F = t.MAs(9);
      let Le;
      t.Q6J("size", j.size), t.xp6(2), t.Q6J("highlight", !1)("blurContent", j.formatWithSeparator(t.xi3(3, 10, W.model, j.getDisplayFormatFromSize()))), t.xp6(2), t.Q6J("placeholder", null !== (Le = j.placeholder) && void 0 !== Le ? Le : t.lcZ(5, 13, "LuCalendarField.placeholder"))("readOnly", j.disabledEntry)("luMask", j.formatWithSeparator(j.dateAdapter.formats().parse.inputFormat.toLowerCase()))("luInputDate", j.formatWithSeparator(j.dateAdapter.formats().parse.inputFormat)), t.uIk("id", j.inputId ? j.inputId : null), t.xp6(2), t.Q6J("calendarIcon", j.calendarIcon), t.xp6(1), t.Q6J("content", F);
    }
  },
  dependencies: [m.L, d.HY, d.Fj, v.C, M.Bf, b.a, A.$, f.N_, E.D, N.M, I.M],
  styles: ["[_nghost-%COMP%]{display:inline-block}"],
  changeDetection: 0
});
