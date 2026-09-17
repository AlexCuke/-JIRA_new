// Extracted from main; webpack module 72210. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    R: () => u,
    j: () => T
  });
  var t = i(94650),
    e = i(24006),
    a = i(8391),
    m = i(13700),
    d = i(62804),
    M = i(23062),
    b = i(42522),
    A = i(59250),
    N = i(15091),
    I = i(46385),
    O = i(44348),
    L = i(99246),
    C = i(46757),
    v = i(9773),
    f = i(36454),
    E = i(97396),
    h = i(36895);
  function x(R, B) {
    if (1 & R && t._UZ(0, "lu-calendar", 7), 2 & R) {
      const y = t.oxw();
      t.Q6J("minDate", y.minDate)("maxDate", y.maxDate)("dayIsDisabled", y.dayIsDisabled)("dayClass", y.dayClass);
    }
  }
  let u = (() => {
      class R extends O.zH {
        constructor(y, j, W) {
          super(j, void 0, W), this.dateAdapter = y, this.changeDetectorRef = j, this.ngControl = W, this.size = "small", this.minDate = this.dateAdapter.addYears(this.dateAdapter.today(), -100), this.maxDate = this.dateAdapter.addYears(this.dateAdapter.today(), 100), this.disabledEntry = !1, this.dayIsDisabled = () => !1, this.dayClass = () => "", this.placeholder = null, this.calendarIcon = !0, this.inputId = null, this.dataTestRole = "calendarField";
        }
        getDisplayFormatFromSize() {
          const y = this.dateAdapter.formats();
          switch (this.size) {
            case "small":
            default:
              return y.display.inputFormat;
            case "medium":
              return y.display.medium;
            case "large":
              return y.display.large;
            case "extra-large":
              return y.display.extraLarge;
          }
        }
        formatWithSeparator(y) {
          return this.separatorChar ? y.replace(/\./g, this.separatorChar) : y;
        }
      }
      return R.ɵfac = function (y) {
        return new (y || R)(t.Y36(a.SW), t.Y36(t.sBO), t.Y36(e.a5, 10));
      }, R.ɵcmp = t.Xpm({
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
      }), R;
    })(),
    T = (() => {
      class R {}
      return R.ɵfac = function (y) {
        return new (y || R)();
      }, R.ɵmod = t.oAB({
        type: R
      }), R.ɵinj = t.cJS({
        imports: [h.ez, m.f, d.LA, v.c, M.Ki, b.$, A.J, f.CT, E.o, N.N, I.B]
      }), R;
    })();
});
