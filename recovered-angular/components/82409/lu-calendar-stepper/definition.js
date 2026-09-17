// Exact compiled component metadata; references belong to modules/82409.js
({
  type: T,
  selectors: [["lu-calendar-stepper"]],
  inputs: {
    inputId: "inputId"
  },
  features: [t._Bn([{
    provide: N.fU,
    useExisting: T
  }, {
    provide: N.Oc,
    useValue: I.Ls.PRIMITIVE
  }]), t.qOj],
  decls: 11,
  vars: 16,
  consts: [[3, "size"], ["host", ""], ["align", "center", 3, "highlight", "blurContent"], ["luInputWrapperBefore", "", 3, "minDate", "click"], ["luInput", "", 3, "id", "placeholder", "readOnly", "luMask", "luInputDate"], ["luInputWrapperAfter", "", 3, "maxDate", "click"], [3, "content"], ["content", ""], [3, "minDate", "maxDate", "dayIsDisabled", "dayClass"]],
  template: function (B, y) {
    if (1 & B && (t.TgZ(0, "lu-calendar-field-host", 0, 1)(2, "lu-input-wrapper", 2), t.ALo(3, "luDateFormatter"), t.TgZ(4, "lu-calendar-previous", 3), t.NdJ("click", function (W) {
      return y.preventOpen(W);
    }), t.qZA(), t._UZ(5, "input", 4), t.ALo(6, "luTranslate"), t.TgZ(7, "lu-calendar-next", 5), t.NdJ("click", function (W) {
      return y.preventOpen(W);
    }), t.qZA(), t.TgZ(8, "lu-dropdown", 6), t.YNc(9, h, 1, 4, "ng-template", null, 7, t.W1O), t.qZA()()()), 2 & B) {
      const j = t.MAs(1),
        W = t.MAs(10);
      let F;
      t.Q6J("size", y.size), t.xp6(2), t.Q6J("highlight", !1)("blurContent", y.formatData(t.xi3(3, 11, j.model, y.getDisplayFormatFromSize()))), t.xp6(2), t.Q6J("minDate", y.minDate), t.xp6(1), t.Q6J("id", y.inputId)("placeholder", null !== (F = y.placeholder) && void 0 !== F ? F : t.lcZ(6, 14, "LuCalendarField.placeholder"))("readOnly", y.disabledEntry)("luMask", y.dateAdapter.formats().parse.inputFormat.toLowerCase())("luInputDate", y.dateAdapter.formats().parse.inputFormat), t.xp6(2), t.Q6J("maxDate", y.maxDate), t.xp6(1), t.Q6J("content", W);
    }
  },
  dependencies: [L.D, e.HY, e.kH, e.Fj, a.L, m.Bf, d.a, M.$, C.N_, v.Z, f._, b.M, A.M],
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
