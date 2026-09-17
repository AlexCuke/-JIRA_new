// Exact compiled component metadata; references belong to modules/92688.js
({
  type: Le,
  selectors: [["lu-calendar-period"]],
  contentQueries: function (J, fe, ye) {
    if (1 & J && t.Suo(ye, j, 5), 2 & J) {
      let ae;
      t.iGM(ae = t.CRH()) && (fe.fieldsDelimiter = ae.first);
    }
  },
  viewQuery: function (J, fe) {
    if (1 & J && (t.Gf(O.$, 7), t.Gf(a.R, 7)), 2 & J) {
      let ye;
      t.iGM(ye = t.CRH()) && (fe.dropdown = ye.first), t.iGM(ye = t.CRH()) && (fe.periodHost = ye.first);
    }
  },
  hostVars: 1,
  hostBindings: function (J, fe) {
    2 & J && t.uIk("data-test-role", fe.dataTestRole);
  },
  inputs: {
    size: "size",
    _disabled: "_disabled",
    startMinDate: "startMinDate",
    startMaxDate: "startMaxDate",
    endMinDate: "endMinDate",
    endMaxDate: "endMaxDate",
    calendarIcon: "calendarIcon",
    periodMin: "periodMin",
    periodMax: "periodMax",
    inputId: "inputId",
    dayIsDisabled: "dayIsDisabled",
    dayClass: "dayClass",
    placeholder: "placeholder"
  },
  features: [t._Bn([{
    provide: x.fU,
    useExisting: Le
  }, {
    provide: x.Oc,
    useValue: u.Ls.PRIMITIVE
  }]), t.qOj],
  ngContentSelectors: y,
  decls: 21,
  vars: 27,
  consts: [[3, "size"], ["host", ""], ["data-test-role", "calendarField"], ["orientation", "horizontal", 3, "lu-label"], [3, "highlight", "blurContent"], ["luInput", "", 3, "luMask", "luInputDate", "placeholder"], ["luInputWrapperAfter", "", 3, "calendarIcon"], [1, "lu-custom-delimiter"], [3, "content"], ["content", ""], [3, "selectionState", "multiselect", "dayClass", "dayIsDisabled", "minDate", "maxDate", "periodMin", "periodMax"]],
  template: function (J, fe) {
    if (1 & J && (t.F$t(B), t.TgZ(0, "lu-calendar-period-host", 0, 1)(2, "lu-calendar-period-from", 2)(3, "label", 3)(4, "lu-input-wrapper", 4), t.ALo(5, "luDateFormatter"), t._UZ(6, "input", 5), t.ALo(7, "luTranslate"), t._UZ(8, "lu-clear-calendar", 6), t.qZA()()(), t.TgZ(9, "span", 7), t.Hsn(10), t.qZA(), t.TgZ(11, "lu-calendar-period-to", 2)(12, "label", 3)(13, "lu-input-wrapper", 4), t.ALo(14, "luDateFormatter"), t._UZ(15, "input", 5), t.ALo(16, "luTranslate"), t._UZ(17, "lu-clear-calendar", 6), t.qZA()()(), t.TgZ(18, "lu-dropdown", 8), t.YNc(19, R, 1, 8, "ng-template", null, 9, t.W1O), t.qZA()()), 2 & J) {
      const ye = t.MAs(1),
        ae = t.MAs(20);
      let Y, G;
      t.Q6J("size", fe.size), t.xp6(3), t.Q6J("lu-label", fe.fieldsDelimiter ? null : "с"), t.xp6(1), t.Q6J("highlight", !1)("blurContent", t.xi3(5, 17, null == ye.model ? null : ye.model.start, fe.getDisplayFormatFromSize())), t.xp6(2), t.Q6J("luMask", fe.dateAdapter.formats().parse.inputFormat.toLowerCase())("luInputDate", fe.dateAdapter.formats().parse.inputFormat)("placeholder", null !== (Y = fe.placeholder) && void 0 !== Y ? Y : t.lcZ(7, 20, "LuCalendarPeriod.placeholder")), t.uIk("id", fe.inputId ? fe.inputId : null), t.xp6(2), t.Q6J("calendarIcon", fe.calendarIcon), t.xp6(4), t.Q6J("lu-label", fe.fieldsDelimiter ? null : "по"), t.xp6(1), t.Q6J("highlight", !1)("blurContent", t.xi3(14, 22, null == ye.model ? null : ye.model.end, fe.getDisplayFormatFromSize())), t.xp6(2), t.Q6J("luMask", fe.dateAdapter.formats().parse.inputFormat.toLowerCase())("luInputDate", fe.dateAdapter.formats().parse.inputFormat)("placeholder", null !== (G = fe.placeholder) && void 0 !== G ? G : t.lcZ(16, 25, "LuCalendarPeriod.placeholder")), t.xp6(2), t.Q6J("calendarIcon", fe.calendarIcon), t.xp6(1), t.Q6J("content", ae);
    }
  },
  dependencies: [N.HY, N.Fj, I.L, a.R, m.N_, O.$, L.Bf, C.a, d.n, M.W, b.C, v.z, f.M, E.M],
  styles: ["[_nghost-%COMP%]{display:inline-block}.lu-custom-delimiter[_ngcontent-%COMP%]{display:flex;align-items:center}"],
  changeDetection: 0
});
