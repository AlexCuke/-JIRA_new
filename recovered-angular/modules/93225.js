// Extracted from main; webpack module 93225. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    NP: () => Hs,
    Pe: () => Xr,
    Rf: () => vo,
    SZ: () => mo,
    T$: () => Cr,
    cG: () => mt,
    eR: () => wo,
    gr: () => q,
    ol: () => Zt,
    qe: () => Da,
    uE: () => dn,
    zA: () => la
  });
  var t = i(94650),
    e = i(97582),
    a = i(24006),
    m = i(77015),
    d = i(52306),
    M = i(50727),
    b = i(77579),
    A = i(82722),
    N = i(39300),
    I = i(78372),
    O = i(71884),
    L = i(54004),
    C = i(24700),
    v = i(6676),
    f = i(80668),
    E = i(72210),
    h = i(92688),
    x = i(52470),
    u = i(82409),
    T = i(84464),
    R = i(62804),
    B = i(52958),
    y = i(49014),
    j = i(76500),
    W = i(32643),
    F = i(13700),
    Le = i(87545),
    ke = i(93278),
    J = i(18200),
    fe = i(70823),
    ye = i(68983),
    ae = i(85623),
    Y = i(43150),
    G = i(23062),
    te = i(9073),
    pe = i(19550),
    be = i(92203),
    le = i(44348),
    n = i(99246),
    Se = i(20891),
    qe = i(36895),
    Rt = i(20733),
    We = i(37340),
    Re = i(15903),
    st = i(30338);
  const q = new t.OlP("COMPONENTS_WIDGETS_SERVICE_TOKEN"),
    mt = new t.OlP("EVENTS_WIDGETS_SERVICE_TOKEN"),
    ut = {
      code: "years",
      display: "лет"
    },
    Ct = {
      code: "months",
      display: "месяцев"
    },
    Ft = {
      code: "days",
      display: "дней"
    };
  class Et {
    convertFieldsValueToDurationString(Wi) {
      if ("number" == typeof Wi.ageNumber) switch (Wi.ageNumberType.code) {
        case ut.code:
          return `${Wi.ageNumber}Y`;
        case Ct.code:
          return `${Wi.ageNumber}M`;
        case Ft.code:
          return `${Wi.ageNumber}D`;
        default:
          return "";
      }
      return "";
    }
    convertDurationStringToFieldsValue(Wi) {
      if (Wi) {
        const Pt = Wi.slice(-1),
          Ki = Wi.slice(0, -1),
          Nr = /[-\d]+/g.test(Ki) ? Number(Ki) : null;
        if (null !== Nr) switch (Pt) {
          case "Y":
            return {
              ageNumber: Nr,
              ageNumberType: ut
            };
          case "M":
            return {
              ageNumber: Nr,
              ageNumberType: Ct
            };
          case "D":
            return {
              ageNumber: Nr,
              ageNumberType: Ft
            };
        }
      }
      return {
        ageNumber: null,
        ageNumberType: ut
      };
    }
  }
  function Ue(St, Wi) {
    if (1 & St && (t.TgZ(0, "div", 7), t._uU(1), t.qZA()), 2 & St) {
      const Pt = Wi.$implicit;
      t.xp6(1), t.Oqu(Pt.display);
    }
  }
  function Me(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-data-list", 5), t.YNc(1, Ue, 2, 1, "ng-template", null, 6, t.W1O), t.qZA()), 2 & St) {
      const Pt = t.MAs(2),
        Ki = t.oxw();
      t.Q6J("items", Ki.ageNumberTypes)("itemContent", Pt);
    }
  }
  function Ke(St, Wi) {
    return St.ageNumber === Wi.ageNumber && St.ageNumberType.code === Wi.ageNumberType.code;
  }
  let Ze = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI(), this.formGroup = new a.cw({
            ageNumber: new a.NI(),
            ageNumberType: new a.NI(ut)
          }), this.ageNumberTypes = [ut, Ct, Ft], this.converter = new Et();
        }
        get terminologyDisplayValue() {
          return Pt => Pt ? Pt.display : "";
        }
        get compareTerminologyItems() {
          return m.XU;
        }
        ngOnInit() {
          this.initFormGroupValueChanges(), this.initFormControlValueChanges(), this.presetFormGroup();
        }
        presetFormGroup() {
          this.formControl.value && this.setDurationInFormGroup(this.formControl.value);
        }
        initFormGroupValueChanges() {
          return this.formGroup.valueChanges.pipe((0, O.x)(Ke), (0, L.U)(Pt => this.updateValueIfNumberInvalid(Pt))).subscribe(Pt => {
            this.formGroup.setValue(Pt), this.formControl.setValue(this.converter.convertFieldsValueToDurationString(Pt));
          });
        }
        setDurationInFormGroup(Pt) {
          const Ki = this.converter.convertDurationStringToFieldsValue(Pt);
          this.formGroup.setValue(null === Pt ? {
            ageNumberType: ut,
            ageNumber: null
          } : null === Ki.ageNumber ? {
            ...this.formGroup.value,
            ageNumber: null
          } : Ki, {
            emitEvent: !1
          });
        }
        initFormControlValueChanges() {
          return this.formControl.valueChanges.subscribe(Pt => {
            this.setDurationInFormGroup(Pt);
          });
        }
        updateValueIfNumberInvalid({
          ageNumber: Pt,
          ageNumberType: Ki
        }) {
          if ("number" == typeof Pt) {
            if (Pt < 0) return {
              ageNumber: 0,
              ageNumberType: Ki
            };
            switch (Ki.code) {
              case ut.code:
                if (Pt > 125) return {
                  ageNumber: 125,
                  ageNumberType: Ki
                };
                break;
              case Ct.code:
                if (Pt > 12) return {
                  ageNumber: 12,
                  ageNumberType: Ki
                };
                break;
              case Ft.code:
                if (Pt > 31) return {
                  ageNumber: 31,
                  ageNumberType: Ki
                };
            }
          }
          return {
            ageNumber: Pt,
            ageNumberType: Ki
          };
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-age-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 5,
        consts: [["dividerType", "full", 1, "controls", 3, "formGroup"], [1, "input-control"], ["luInput", "", "luInputNumber", "", "luNumberEntry", "", "formControlName", "ageNumber", 3, "placeholder"], ["formControlName", "ageNumberType", 1, "combobox-control", 3, "clearButton", "displayValueFn", "compareFn"], [3, "items", "itemContent", 4, "luData"], [3, "items", "itemContent"], ["itemContent", ""], ["lu-text", ""]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.TgZ(0, "lu-combined-controls", 0)(1, "lu-input-wrapper", 1), t._UZ(2, "input", 2), t.qZA(), t.TgZ(3, "lu-combobox", 3), t.YNc(4, Me, 3, 2, "lu-data-list", 4), t.qZA()()), 2 & Pt) {
            let Nr;
            t.Q6J("formGroup", Ki.formGroup), t.xp6(2), t.Q6J("placeholder", null !== (Nr = null == Ki.widget.data ? null : Ki.widget.data.placeholder) && void 0 !== Nr ? Nr : ""), t.xp6(1), t.Q6J("clearButton", !1)("displayValueFn", Ki.terminologyDisplayValue)("compareFn", Ki.compareTerminologyItems);
          }
        },
        dependencies: [a.Fj, a.JJ, a.JL, a.sg, a.u, C.o, R.HY, B.l, y.l, v.m, Se.l, j.g, W.NZ, F.L],
        styles: ["[_nghost-%COMP%]{display:block;width:calc(var(--lu-base-gutter) * 22)}.controls[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-control[_ngcontent-%COMP%]{flex-basis:calc(var(--lu-base-gutter) * 10)}.combobox-control[_ngcontent-%COMP%]{flex-basis:calc(var(--lu-base-gutter) * 20)}"],
        changeDetection: 0
      }), (0, e.gn)([(0, d.k)(), (0, e.w6)("design:type", Function), (0, e.w6)("design:paramtypes", []), (0, e.w6)("design:returntype", M.w0)], St.prototype, "initFormGroupValueChanges", null), (0, e.gn)([(0, d.k)(), (0, e.w6)("design:type", Function), (0, e.w6)("design:paramtypes", []), (0, e.w6)("design:returntype", M.w0)], St.prototype, "initFormControlValueChanges", null), St;
    })(),
    Ee = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, C.Q, R.LA, B.R, y.F, v.n, Se.X, j.u, W.aI, F.f]
      }), St;
    })(),
    je = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get availableIcons() {
          const Pt = this.widget.data?.iconData;
          return Pt ? Array.isArray(Pt) ? Pt : [Pt] : [];
        }
        get text() {
          return this.widget.data?.text || "";
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-checkbox-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "formControl"], [3, "availableIcons"]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "lu-checkbox", 0)(1, "dp-icon-wrapper", 1), t._uU(2), t.qZA()()), 2 & Pt && (t.Q6J("formControl", Ki.formControl), t.xp6(1), t.Q6J("availableIcons", Ki.availableIcons), t.xp6(1), t.hij(" ", Ki.text, " "));
        },
        dependencies: [a.JJ, a.oH, Le.$m, m.ZS],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    Mt = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, Le.Nu, m.v2]
      }), St;
    })();
  function Je(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-checkbox-group", 3), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function Xt(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-checkbox-group", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("formControl", Pt.formControl)("staticTerminology", Pt.staticModule.items)("terminologyName", Pt.staticModule.name)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function Nn(St, Wi) {
    if (1 & St && t.YNc(0, Xt, 3, 6, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", null == Pt.widget.data || null == Pt.widget.data.terminology ? null : Pt.widget.data.terminology.fromStatic)("ngIfElse", Ki);
    }
  }
  function Pi(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let Ii = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get fromModule() {
          return this.widget.data?.terminology?.fromModule;
        }
        get staticModule() {
          return this.widget.data?.terminology?.fromStatic;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-checkbox-group-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "displayValueFn"], [3, "formControl", "staticTerminology", "terminologyName", "displayValueFn"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.YNc(0, Je, 3, 6, "ng-container", 0), t.YNc(1, Nn, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, Pi, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
            const Nr = t.MAs(2);
            t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
          }
        },
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    yi = (() => {
      class St {
        transform(Pt) {
          const Ki = Pt.data?.terminology?.howDisplayTerminologyItem ? (0, Rt.Xu)(Pt.data.terminology.howDisplayTerminologyItem) : void 0,
            Nr = Pt.data?.widgetTotals;
          return oa => {
            const er = Ki ? Ki(oa) : oa.display,
              Qr = Nr?.[oa.code];
            return void 0 !== Qr ? `${er} <span class="dp-ul-chip-checkbox-postfix">${Qr}</span>` : er;
          };
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵpipe = t.Yjl({
        name: "widgetControlDisplayValueFn",
        type: St,
        pure: !0
      }), St;
    })(),
    co = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({}), St;
    })(),
    Jo = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, m.IM, f.M0, ke.h, m.Yi, m.Ak, m._L, co]
      }), St;
    })();
  function fr(St, Wi) {
    if (1 & St && (t.TgZ(0, "span", 3), t._uU(1), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.hij(" ", Pt.postfixValue, " ");
    }
  }
  t.B6R(Ii, [qe.O5, a.JJ, a.oH, m.CE, f.dj, ke.q, m.c8], [yi]);
  let pt = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get text() {
          return this.widget.data?.text || "";
        }
        get tooltip() {
          return this.widget.data?.tooltip ?? "";
        }
        get availableIcons() {
          const Pt = this.widget.data?.iconData;
          return Pt ? Array.isArray(Pt) ? Pt : [Pt] : [];
        }
        get postfixValue() {
          const Pt = this.widget.data?.widgetTotals;
          return Pt ? Object.values(Pt)[0] : this.widget.data?.postfixText;
        }
        preventDeselect() {
          return !1 === this.widget.data?.uncheckable;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-chip-checkbox-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 7,
        consts: [["positions", "top-left", 1, "dp-ul-chip-checkbox", 3, "luTooltip", "canOpen", "formControl", "preventDeselect"], [3, "availableIcons"], ["class", "dp-ul-chip-checkbox-postfix", 4, "ngIf"], [1, "dp-ul-chip-checkbox-postfix"]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "lu-chip", 0)(1, "dp-icon-wrapper", 1)(2, "span"), t._uU(3), t.YNc(4, fr, 2, 1, "span", 2), t.qZA()()()), 2 & Pt && (t.Q6J("luTooltip", Ki.tooltip)("canOpen", !!Ki.tooltip)("formControl", Ki.formControl)("preventDeselect", Ki.preventDeselect()), t.xp6(1), t.Q6J("availableIcons", Ki.availableIcons), t.xp6(2), t.hij(" ", Ki.text, " "), t.xp6(1), t.Q6J("ngIf", void 0 !== Ki.postfixValue));
        },
        dependencies: [qe.O5, a.JJ, a.oH, J.r, m.ZS, fe.$],
        styles: ["[_nghost-%COMP%]{display:block}.dp-ul-chip-checkbox[_ngcontent-%COMP%]{display:flex;flex-shrink:0;font-weight:400;font-size:15px;line-height:24px}.dp-ul-chip-checkbox-postfix[_ngcontent-%COMP%]{padding-left:calc(var(--lu-base-gutter) * .5);text-align:center;color:var(--lu-black-54)}"],
        changeDetection: 0
      }), St;
    })(),
    Dt = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, J.U, m.v2, fe.i]
      }), St;
    })();
  function Ht(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-chips-group", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function Dn(St, Wi) {
    if (1 & St && (t.ynx(0), t.YNc(1, Ht, 3, 6, "ng-container", 3), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("ngIf", "chip.radio" === Pt.widget.type);
    }
  }
  function vt(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-chips-group", 5), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(3);
      t.xp6(1), t.Q6J("terminologyName", Pt.fromStatic.name)("staticTerminology", Pt.fromStatic.items)("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function an(St, Wi) {
    if (1 & St && (t.ynx(0), t.YNc(1, vt, 3, 6, "ng-container", 3), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("ngIf", "chip.radio" === Pt.widget.type);
    }
  }
  function li(St, Wi) {
    if (1 & St && t.YNc(0, an, 2, 1, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", null == Pt.widget.data || null == Pt.widget.data.terminology ? null : Pt.widget.data.terminology.fromStatic)("ngIfElse", Ki);
    }
  }
  function zn(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 6), t._UZ(1, "lu-svg-icon", 7), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let $t = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get fromModule() {
          return this.widget.data?.terminology?.fromModule;
        }
        get fromStatic() {
          return this.widget.data?.terminology?.fromStatic;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-chip-group-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["fromStaticModule", ""], ["noTerminologyError", ""], [4, "ngIf"], [3, "featureKey", "terminologyName", "formControl", "displayValueFn"], [3, "terminologyName", "staticTerminology", "formControl", "displayValueFn"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.YNc(0, Dn, 2, 1, "ng-container", 0), t.YNc(1, li, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, zn, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
            const Nr = t.MAs(2);
            t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
          }
        },
        styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .dp-ul-chip-checkbox-postfix{padding-left:calc(var(--lu-base-gutter) * .5);text-align:center;color:var(--lu-black-54)}"],
        changeDetection: 0
      }), St;
    })(),
    Mn = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, f.M0, ke.h, m.N6, m.fc, m._L, m.Su, co]
      }), St;
    })();
  function Qn(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-chip-select", 3), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl);
    }
  }
  function In(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-chip-select", 4), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("terminologyName", Pt.fromStatic.name)("staticTerminology", Pt.fromStatic.items)("formControl", Pt.formControl);
    }
  }
  function ui(St, Wi) {
    if (1 & St && t.YNc(0, In, 2, 3, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", null == Pt.widget.data || null == Pt.widget.data.terminology ? null : Pt.widget.data.terminology.fromStatic)("ngIfElse", Ki);
    }
  }
  function To(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  t.B6R($t, [qe.O5, a.JJ, a.oH, f.dj, ke.q, m.r$, m.mZ], [yi]);
  let bi = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get fromModule() {
          return this.widget.data?.terminology?.fromModule;
        }
        get fromStatic() {
          return this.widget.data?.terminology?.fromStatic;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-chip-select-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["fromStaticModule", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl"], [3, "terminologyName", "staticTerminology", "formControl"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.YNc(0, Qn, 2, 3, "ng-container", 0), t.YNc(1, ui, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, To, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
            const Nr = t.MAs(2);
            t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
          }
        },
        dependencies: [qe.O5, a.JJ, a.oH, m.E9, m.A1, f.dj, ke.q],
        encapsulation: 2,
        changeDetection: 0
      }), St;
    })(),
    qn = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, m.xb, m.my, f.M0, ke.h]
      }), St;
    })(),
    Xn = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI(), this.minDate = new Date("01.01.1910"), this.maxDate = new Date();
        }
        getMinDate() {
          return this.options?.minDate ? new Date(this.options.minDate) : this.minDate;
        }
        getMaxDate() {
          return this.options?.maxDate ? new Date(this.options.maxDate) : this.maxDate;
        }
        get options() {
          return this.widget.formGroupField.options?.validation;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-date-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 1,
        vars: 3,
        consts: [[3, "maxDate", "minDate", "formControl"]],
        template: function (Pt, Ki) {
          1 & Pt && t._UZ(0, "lu-calendar-field", 0), 2 & Pt && t.Q6J("maxDate", Ki.getMaxDate())("minDate", Ki.getMinDate())("formControl", Ki.formControl);
        },
        dependencies: [a.JJ, a.oH, E.R],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    Yi = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, E.j]
      }), St;
    })();
  function Eo(St, Wi) {
    1 & St && (t.TgZ(0, "lu-form-message", 3), t._UZ(1, "lu-svg-icon", 4), t._uU(2, " Дата окончания не может быть раньше даты начала "), t.qZA()), 2 & St && (t.xp6(1), t.Q6J("size", 24));
  }
  function Fo(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-form-message", 3), t._UZ(1, "lu-svg-icon", 4), t._uU(2), t.ALo(3, "date"), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Дата начала не должна быть меньше ", t.xi3(3, 2, Pt.getStartMinDate(), "dd.MM.yyyy"), " ");
    }
  }
  function br(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-form-message", 3), t._UZ(1, "lu-svg-icon", 4), t._uU(2), t.ALo(3, "date"), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Дата окончания не должна быть меньше ", t.xi3(3, 2, Pt.getEndMinDate(), "dd.MM.yyyy"), " ");
    }
  }
  let Pr = (() => {
      class St {
        constructor(Pt) {
          this.luValidators = Pt, this.formControl = new a.NI();
        }
        ngOnInit() {
          this.formControl?.setValidators(this.getValidators());
        }
        getStartMinDate() {
          return this.options?.startMinDate ? new Date(this.options.startMinDate) : void 0;
        }
        getStartMaxDate() {
          return this.options?.startMaxDate ? new Date(this.options.startMaxDate) : void 0;
        }
        getEndMinDate() {
          return this.options?.endMinDate ? new Date(this.options.endMinDate) : void 0;
        }
        getEndMaxDate() {
          return this.options?.endMaxDate ? new Date(this.options.endMaxDate) : void 0;
        }
        get options() {
          return this.widget.formGroupField.options?.validation;
        }
        getValidators() {
          const Pt = [this.luValidators.periodIsValid()];
          return void 0 !== this.getStartMinDate() && Pt.push(this.luValidators.periodStartMin(this.getStartMinDate())), Pt;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)(t.Y36(ye.X));
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-date-period-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 7,
        vars: 8,
        consts: [[3, "formControl", "startMinDate", "endMinDate", "startMaxDate", "endMaxDate"], ["luCalendarPeriodFieldsDelimiter", "", 2, "margin", "0 var(--lu-base-gutter)"], ["type", "error", 4, "ngIf"], ["type", "error"], ["icon", "warning", 3, "size"]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "lu-form-field")(1, "lu-calendar-period", 0)(2, "span", 1), t._uU(3, "—"), t.qZA()(), t.YNc(4, Eo, 3, 1, "lu-form-message", 2), t.YNc(5, Fo, 4, 5, "lu-form-message", 2), t.YNc(6, br, 4, 5, "lu-form-message", 2), t.qZA()), 2 & Pt && (t.xp6(1), t.Q6J("formControl", Ki.formControl)("startMinDate", Ki.getStartMinDate())("endMinDate", Ki.getEndMinDate())("startMaxDate", Ki.getStartMaxDate())("endMaxDate", Ki.getEndMaxDate()), t.xp6(3), t.Q6J("ngIf", null == Ki.formControl ? null : Ki.formControl.hasError("periodIsValid")), t.xp6(1), t.Q6J("ngIf", null == Ki.formControl ? null : Ki.formControl.hasError("periodStartMin")), t.xp6(1), t.Q6J("ngIf", null == Ki.formControl ? null : Ki.formControl.hasError("periodEndMin")));
        },
        dependencies: [qe.O5, a.JJ, a.oH, h.Hz, h.lD, ae.l, ke.q, x.F, qe.uU],
        styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     [data-lu-size=small]{--lu-input-width: 128px !important}"],
        changeDetection: 0
      }), St;
    })(),
    qo = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, h.SH, ae.c, ke.h, x.f]
      }), St;
    })(),
    Yo = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI(), this.minDate = new Date("01.01.1910"), this.maxDate = new Date();
        }
        getMinDate() {
          return this.options?.minDate ? new Date(this.options.minDate) : this.minDate;
        }
        getMaxDate() {
          return this.options?.maxDate ? new Date(this.options.maxDate) : this.maxDate;
        }
        get options() {
          return this.widget.formGroupField.options?.validation;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-date-stepper-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "formControl"]],
        template: function (Pt, Ki) {
          1 & Pt && t._UZ(0, "lu-calendar-stepper", 0), 2 & Pt && t.Q6J("formControl", Ki.formControl);
        },
        dependencies: [a.JJ, a.oH, u.I],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    wr = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, u.x]
      }), St;
    })();
  function oo(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-radio-group", 3), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("clearOption", Pt.clearOption)("displayValueFn", t.lcZ(2, 6, Pt.widget))("itemsOrientation", Pt.itemsOrientation);
    }
  }
  function Di(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-radio-group", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("formControl", Pt.formControl)("clearOption", Pt.clearOption)("staticTerminology", Pt.staticModule.items)("terminologyName", Pt.staticModule.name)("displayValueFn", t.lcZ(2, 6, Pt.widget))("itemsOrientation", Pt.itemsOrientation);
    }
  }
  function Ci(St, Wi) {
    if (1 & St && t.YNc(0, Di, 3, 8, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", null == Pt.widget.data || null == Pt.widget.data.terminology ? null : Pt.widget.data.terminology.fromStatic)("ngIfElse", Ki);
    }
  }
  function lo(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let jo = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get fromModule() {
          return this.widget.data?.terminology?.fromModule;
        }
        get staticModule() {
          return this.widget.data?.terminology?.fromStatic;
        }
        get clearOption() {
          return this.widget.data?.clearOption ?? !1;
        }
        get itemsOrientation() {
          return this.widget.data?.itemsOrientation ?? "vertical";
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-radio-group-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "clearOption", "displayValueFn", "itemsOrientation"], [3, "formControl", "clearOption", "staticTerminology", "terminologyName", "displayValueFn", "itemsOrientation"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.YNc(0, oo, 3, 8, "ng-container", 0), t.YNc(1, Ci, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, lo, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
            const Nr = t.MAs(2);
            t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
          }
        },
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    Go = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, m._L, f.M0, ke.h, m.Yi, m.Su, co]
      }), St;
    })();
  t.B6R(jo, [qe.O5, a.JJ, a.oH, m.yS, f.dj, ke.q, m.XD], [yi]);
  const ji = function () {
    return [];
  };
  function ti(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-combobox", 3), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      let Ki, Nr;
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("withPaging", Pt.fromModule.withPaging)("clearButton", Pt.clearButton)("displayValueFn", t.lcZ(2, 8, Pt.widget))("externalValues", null !== (Ki = null == Pt.staticModule ? null : Pt.staticModule.items) && void 0 !== Ki ? Ki : t.DdM(10, ji))("placeholder", null !== (Nr = null == Pt.widget.data ? null : Pt.widget.data.placeholder) && void 0 !== Nr ? Nr : "Введите или выберите из списка");
    }
  }
  function fi(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-combobox", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      let Ki;
      t.xp6(1), t.Q6J("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 6, Pt.widget))("staticTerminology", Pt.staticModule.items)("terminologyName", Pt.staticModule.name)("clearButton", Pt.clearButton)("placeholder", null !== (Ki = null == Pt.widget.data ? null : Pt.widget.data.placeholder) && void 0 !== Ki ? Ki : "Введите или выберите из списка");
    }
  }
  function Fi(St, Wi) {
    if (1 & St && t.YNc(0, fi, 3, 8, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", Pt.staticModule)("ngIfElse", Ki);
    }
  }
  function Rn(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let ki = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
        get fromModule() {
          return this.widget.data?.terminology?.fromModule;
        }
        get staticModule() {
          return this.widget.data?.terminology?.fromStatic;
        }
        get clearButton() {
          return this.widget.data?.canDeselect ?? !0;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-select-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "withPaging", "clearButton", "displayValueFn", "externalValues", "placeholder"], [3, "formControl", "displayValueFn", "staticTerminology", "terminologyName", "clearButton", "placeholder"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.YNc(0, ti, 3, 11, "ng-container", 0), t.YNc(1, Fi, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, Rn, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
            const Nr = t.MAs(2);
            t.Q6J("ngIf", Ki.fromModule)("ngIfElse", Nr);
          }
        },
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    Ei = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, m.tH, m.Su, f.M0, ke.h, co]
      }), St;
    })();
  t.B6R(ki, [qe.O5, a.JJ, a.oH, m.m2, m.El, f.dj, ke.q], [yi]);
  const Wt = function () {
    return [];
  };
  function Oi(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-multiple-combobox", 3), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      let Ki, Nr;
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("withPaging", Pt.fromModule.withPaging)("displayValueFn", t.lcZ(2, 7, Pt.widget))("externalValues", null !== (Ki = null == Pt.staticModule ? null : Pt.staticModule.items) && void 0 !== Ki ? Ki : t.DdM(9, Wt))("placeholder", null !== (Nr = null == Pt.widget.data ? null : Pt.widget.data.placeholder) && void 0 !== Nr ? Nr : "Введите или выберите из списка");
    }
  }
  function Ji(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-multiple-combobox", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      let Ki;
      t.xp6(1), t.Q6J("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 5, Pt.widget))("staticTerminology", Pt.staticModule.items)("terminologyName", Pt.staticModule.name)("placeholder", null !== (Ki = null == Pt.widget.data ? null : Pt.widget.data.placeholder) && void 0 !== Ki ? Ki : "Введите или выберите из списка");
    }
  }
  function Ao(St, Wi) {
    if (1 & St && t.YNc(0, Ji, 3, 7, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", Pt.staticModule)("ngIfElse", Ki);
    }
  }
  function Sr(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let us = (() => {
    class St {
      constructor() {
        this.formControl = new a.NI();
      }
      get fromModule() {
        return this.widget.data?.terminology?.fromModule;
      }
      get staticModule() {
        return this.widget.data?.terminology?.fromStatic;
      }
    }
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-multiple-select-control-widget"]],
      inputs: {
        widget: "widget",
        formControl: "formControl"
      },
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "withPaging", "displayValueFn", "externalValues", "placeholder"], [3, "formControl", "displayValueFn", "staticTerminology", "terminologyName", "placeholder"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
      template: function (Pt, Ki) {
        if (1 & Pt && (t.YNc(0, Oi, 3, 10, "ng-container", 0), t.YNc(1, Ao, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, Sr, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
          const Nr = t.MAs(2);
          t.Q6J("ngIf", Ki.fromModule)("ngIfElse", Nr);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    }), St;
  })();
  t.B6R(us, [qe.O5, a.JJ, a.oH, f.dj, ke.q, m.LX, m.wj], [yi]);
  let hs = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI();
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
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
      }), St;
    })(),
    oi = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, R.LA, Y.c, F.f]
      }), St;
    })();
  function yo(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-toggle", 3), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl);
    }
  }
  function Qi(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-toggle", 4), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("terminologyName", Pt.fromStatic.name)("staticTerminology", Pt.fromStatic.items)("formControl", Pt.formControl);
    }
  }
  function Qo(St, Wi) {
    if (1 & St && t.YNc(0, Qi, 2, 3, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", null == Pt.widget.data || null == Pt.widget.data.terminology ? null : Pt.widget.data.terminology.fromStatic)("ngIfElse", Ki);
    }
  }
  function Kr(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let _s = (() => {
    class St {
      constructor() {
        this.formControl = new a.NI();
      }
      get fromModule() {
        return this.widget.data?.terminology?.fromModule;
      }
      get fromStatic() {
        return this.widget.data?.terminology?.fromStatic;
      }
    }
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-chip-toggle-control-widget"]],
      inputs: {
        widget: "widget",
        formControl: "formControl"
      },
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["fromStaticModule", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl"], [3, "terminologyName", "staticTerminology", "formControl"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
      template: function (Pt, Ki) {
        if (1 & Pt && (t.YNc(0, yo, 2, 3, "ng-container", 0), t.YNc(1, Qo, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, Kr, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
          const Nr = t.MAs(2);
          t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
        }
      },
      dependencies: [qe.O5, a.JJ, a.oH, f.dj, ke.q, m.hG, m.Ox],
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    }), St;
  })();
  function xa(St, Wi) {
    if (1 & St && (t.TgZ(0, "span", 8), t._uU(1), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("size", "normal"), t.xp6(1), t.hij(" ", Pt.rangeDisplayOptions.prefix, " ");
    }
  }
  function rs(St, Wi) {
    if (1 & St && (t.TgZ(0, "span", 9), t._uU(1), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("size", "normal"), t.xp6(1), t.hij(" ", Pt.rangeDisplayOptions.postfix, " ");
    }
  }
  function Js(St, Wi) {
    1 & St && (t.TgZ(0, "lu-form-message", 10), t._UZ(1, "lu-svg-icon", 11), t._uU(2, " Дата не соответствует формату ЧЧ:ММ\n"), t.qZA()), 2 & St && (t.xp6(1), t.Q6J("size", 24));
  }
  function ho(St, Wi) {
    1 & St && (t.TgZ(0, "lu-form-message", 10), t._UZ(1, "lu-svg-icon", 11), t._uU(2, " Дата окончания не может быть раньше даты начала\n"), t.qZA()), 2 & St && (t.xp6(1), t.Q6J("size", 24));
  }
  function uo(St, Wi) {
    1 & St && (t.TgZ(0, "lu-form-message", 10), t._UZ(1, "lu-svg-icon", 11), t._uU(2, " Дата окончания не может быть раньше даты начала\n"), t.qZA()), 2 & St && (t.xp6(1), t.Q6J("size", 24));
  }
  let ri = (() => {
      class St {
        constructor(Pt) {
          this.luValidators = Pt, this.formControl = new a.NI(), this.formGroup = new a.cw({
            start: new a.NI(null),
            end: new a.NI(null)
          }), this.destroy$ = new b.x();
        }
        ngOnInit() {
          this.formGroup.setValidators(this.getValidators()), this.setControlValidators(), this.writeValue(this.formControl.value), this.subscribeToFormChanges(), this.setRangeDisplayOptions(), this.setPlaceholderOptions(), this.watchUpdateControl();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        ngOnChanges() {
          this.setRangeDisplayOptions(), this.setPlaceholderOptions();
        }
        get mask() {
          return this.getOptions()?.mask ?? "";
        }
        writeValue(Pt) {
          this.formGroup.patchValue({
            start: Pt?.start ?? null,
            end: Pt?.end ?? null
          }, {
            emitEvent: !1
          });
        }
        subscribeToFormChanges() {
          this.formGroup.valueChanges.pipe((0, A.R)(this.destroy$)).subscribe(Pt => {
            this.formControl.setValue({
              start: this.convertValue(Pt.start),
              end: this.convertValue(Pt.end)
            });
          });
        }
        setRangeDisplayOptions() {
          const Pt = this.widget.data?.rangeDisplayOptions ?? "{{start}} — {{end}}",
            Ki = "{{start}}",
            Nr = "{{end}}",
            oa = Pt.indexOf(Ki),
            er = Pt.indexOf(Nr);
          if (-1 === oa || -1 === er || er < oa) throw new Error("Строка должна содержать {{start}} и {{end}} в правильном порядке.");
          const Qr = Pt.slice(0, oa),
            Il = Pt.slice(oa + Ki.length, er),
            Uc = Pt.slice(er + Nr.length);
          this.rangeDisplayOptions = {
            prefix: Qr,
            divider: Il,
            postfix: Uc
          };
        }
        setPlaceholderOptions() {
          const Ki = (this.widget.data?.placeholder ?? "").split(":");
          this.placeHolderOptions = 2 === Ki.length ? {
            start: Ki[0] || "",
            end: Ki[1] || ""
          } : {
            start: "",
            end: ""
          };
        }
        getOptions() {
          return this.widget.formGroupField?.options;
        }
        get validatorOptions() {
          return this.getOptions()?.validation;
        }
        getValidators() {
          const Pt = [];
          return this.validatorOptions?.periodIsValid && Pt.push(this.luValidators.periodIsValid()), this.validatorOptions?.rangeIsValid && Pt.push(function Or() {
            return St => {
              const Wi = St.value;
              if (!Wi?.start || !Wi?.end) return null;
              const Pt = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
              return Pt.test(Wi.start) && Pt.test(Wi.end) && new Date(`2000-01-01T${Wi.start}`) >= new Date(`2000-01-01T${Wi.end}`) ? {
                rangeIsValid: !0
              } : null;
            };
          }()), Pt;
        }
        setControlValidators() {
          this.validatorOptions?.rangeFormat && (this.formGroup.get("start")?.setValidators(St => {
            const Wi = St.value;
            return Wi ? /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(Wi) ? null : {
              rangeFormat: !0
            } : null;
          }), this.formGroup.get("end")?.setValidators(St => {
            const Wi = St.value;
            return Wi ? /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(Wi) ? null : {
              rangeFormat: !0
            } : null;
          }));
        }
        watchUpdateControl() {
          this.formControl.valueChanges.pipe((0, A.R)(this.destroy$)).subscribe(Pt => {
            this.writeValue(Pt);
          });
        }
        convertValue(Pt) {
          return "" === Pt ? null : Pt ?? null;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)(t.Y36(ye.X));
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-range-control-widget"]],
        inputs: {
          widget: "widget",
          formControl: "formControl"
        },
        features: [t.TTD],
        decls: 12,
        vars: 12,
        consts: [[1, "numeric-range-control", 3, "formGroup"], ["lu-text", "", "class", "numeric-range-control__divider-prefix", 3, "size", 4, "ngIf"], [1, "numeric-control-field"], ["luInput", "", "luInputString", "", "formControlName", "start", 3, "placeholder", "luMask"], ["lu-text", "", 1, "numeric-range-control__divider", 3, "size"], ["luInput", "", "luInputString", "", "formControlName", "end", 3, "placeholder", "luMask"], ["lu-text", "", "class", "numeric-range-control__divider-postfix", 3, "size", 4, "ngIf"], ["type", "error", 4, "ngIf"], ["lu-text", "", 1, "numeric-range-control__divider-prefix", 3, "size"], ["lu-text", "", 1, "numeric-range-control__divider-postfix", 3, "size"], ["type", "error"], ["icon", "warning", 3, "size"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, xa, 2, 2, "span", 1), t.TgZ(2, "lu-input-wrapper", 2), t._UZ(3, "input", 3), t.qZA(), t.TgZ(4, "span", 4), t._uU(5), t.qZA(), t.TgZ(6, "lu-input-wrapper", 2), t._UZ(7, "input", 5), t.qZA(), t.YNc(8, rs, 2, 2, "span", 6), t.qZA(), t.YNc(9, Js, 3, 1, "lu-form-message", 7), t.YNc(10, ho, 3, 1, "lu-form-message", 7), t.YNc(11, uo, 3, 1, "lu-form-message", 7)), 2 & Pt) {
            let Nr;
            t.Q6J("formGroup", Ki.formGroup), t.xp6(1), t.Q6J("ngIf", Ki.rangeDisplayOptions.prefix), t.xp6(2), t.Q6J("placeholder", Ki.placeHolderOptions.start)("luMask", Ki.mask), t.xp6(1), t.Q6J("size", "normal"), t.xp6(1), t.hij(" ", Ki.rangeDisplayOptions.divider, " "), t.xp6(2), t.Q6J("placeholder", Ki.placeHolderOptions.end)("luMask", Ki.mask), t.xp6(1), t.Q6J("ngIf", Ki.rangeDisplayOptions.postfix), t.xp6(1), t.Q6J("ngIf", (null == Ki.formGroup || null == (Nr = Ki.formGroup.get("start")) ? null : Nr.hasError("rangeFormat")) || (null == Ki.formGroup || null == (Nr = Ki.formGroup.get("end")) ? null : Nr.hasError("rangeFormat"))), t.xp6(1), t.Q6J("ngIf", null == Ki.formGroup ? null : Ki.formGroup.hasError("periodIsValid")), t.xp6(1), t.Q6J("ngIf", null == Ki.formGroup ? null : Ki.formGroup.hasError("rangeIsValid"));
          }
        },
        dependencies: [qe.O5, a.Fj, a.JJ, a.JL, a.sg, a.u, G.Bf, Y.H, F.L, R.HY, ae.l, ke.q, W.NZ],
        styles: [".numeric-range-control[_ngcontent-%COMP%]{display:flex;align-items:center}.numeric-range-control__divider[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter)}.numeric-range-control__divider-prefix[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}.numeric-range-control__divider-postfix[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.numeric-control-field[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 10)}"],
        changeDetection: 0
      }), St;
    })(),
    Yt = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, a.UX, G.Ki, Y.c, F.f, be.Y, R.LA, ae.c, ke.h, W.aI]
      }), St;
    })();
  const jt = ["searchInput"];
  function hn(St, Wi) {
    1 & St && t.GkF(0);
  }
  function tn(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "div", 10), t.YNc(2, hn, 1, 0, "ng-container", 11), t.qZA(), t.BQk()), 2 & St) {
      t.oxw();
      const Pt = t.MAs(1),
        Ki = t.oxw();
      t.xp6(1), t.Udp("top", Ki.getTopForDropdown(Pt)), t.xp6(1), t.Q6J("ngTemplateOutlet", Ki.dropdownContent);
    }
  }
  const di = function (St) {
    return {
      "reset-icon": St
    };
  };
  function Gn(St, Wi) {
    if (1 & St) {
      const Pt = t.EpF();
      t.TgZ(0, "div", 4, 5)(2, "lu-input-wrapper"), t._UZ(3, "input", 6, 7), t.TgZ(5, "lu-svg-icon", 8), t.NdJ("click", function () {
        t.CHM(Pt);
        const Nr = t.oxw();
        return t.KtG(Nr.onReset());
      }), t.qZA()(), t.YNc(6, tn, 3, 3, "ng-container", 9), t.qZA();
    }
    if (2 & St) {
      const Pt = t.oxw();
      t.Q6J("@fadeInOut", Pt.animationParams)("ngStyle", Pt.ngSearchFieldStyle), t.xp6(2), t.Udp("width", "100%"), t.xp6(1), t.Q6J("placeholder", Pt.searchPlaceholder)("formControl", Pt.searchControl), t.xp6(2), t.Q6J("ngClass", t.VKq(10, di, Pt.searchControl.value))("icon", Pt.getFieldIcon)("size", 24), t.xp6(1), t.Q6J("ngIf", Pt.dropdownContent);
    }
  }
  let dn = (() => {
      class St {
        constructor() {
          this.formControl = new a.NI(), this.showInputField = !1, this.searchControl = new a.NI(""), this.searchInput = void 0;
        }
        ngOnInit() {
          this.formControl.value && (this.searchControl.setValue(this.formControl.value), this.showInputField = !0), this.initSearchControlValueChanges();
        }
        getTopForDropdown(Pt) {
          return Pt.offsetHeight - 1 + "px";
        }
        onClickToggleShowField() {
          this.showInputField = !this.showInputField, this.showInputField ? this.searchInput?.nativeElement?.focus() : this.onReset();
        }
        get ngSearchFieldStyle() {
          return {
            width: `${this.widget.data?.width ?? 550}px`
          };
        }
        get animationParams() {
          return {
            value: "",
            params: {
              width: `${this.widget.data?.width ?? 550}px`
            }
          };
        }
        onReset() {
          this.searchControl.value && (this.formControl.reset(null), this.searchControl.reset(null, {
            emitEvent: !1
          }));
        }
        get searchPlaceholder() {
          return this.widget.data?.placeholder || "";
        }
        get getIcon() {
          return this.showInputField ? "left" : "search";
        }
        get getFieldIcon() {
          return this.searchControl.value ? "close-12" : "search";
        }
        initSearchControlValueChanges() {
          return this.searchControl.valueChanges.pipe((0, N.h)(Pt => !Pt || Pt.length >= 3), (0, I.b)(this.widget.data?.debounce ?? 300)).subscribe(Pt => {
            this.formControl.setValue(Pt);
          });
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-rollable-search-control"]],
        viewQuery: function (Pt, Ki) {
          if (1 & Pt && t.Gf(jt, 5), 2 & Pt) {
            let Nr;
            t.iGM(Nr = t.CRH()) && (Ki.searchInput = Nr.first);
          }
        },
        inputs: {
          widget: "widget",
          dropdownContent: "dropdownContent",
          formControl: "formControl"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "search-content"], [1, "search-content-icon"], ["luInputWrapperBefore", "", 1, "search-icon", 3, "icon", "size", "click"], ["class", "search-field", 3, "ngStyle", 4, "ngIf"], [1, "search-field", 3, "ngStyle"], ["searchField", ""], ["luInput", "", "luInputString", "", 3, "placeholder", "formControl"], ["searchInput", ""], ["luInputWrapperAfter", "", 1, "search-icon", 3, "ngClass", "icon", "size", "click"], [4, "ngIf"], [1, "search-field-dropdown"], [4, "ngTemplateOutlet"]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "lu-svg-icon", 2), t.NdJ("click", function () {
            return Ki.onClickToggleShowField();
          }), t.qZA()(), t.YNc(3, Gn, 7, 12, "div", 3), t.qZA()), 2 & Pt && (t.xp6(2), t.Q6J("icon", Ki.getIcon)("size", 24), t.xp6(1), t.Q6J("ngIf", Ki.showInputField));
        },
        dependencies: [qe.mk, qe.O5, qe.tP, qe.PC, ke.q, R.HY, R.kH, R.Fj, F.L, Y.H, a.Fj, a.JJ, a.oH],
        styles: [".search-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;z-index:1}.search-content-icon[_ngcontent-%COMP%]{height:24px;--lu-svg-icon-color: var(--lu-primary)}.search-field[_ngcontent-%COMP%]{position:absolute;left:calc(var(--lu-base-gutter) * 4.5);z-index:1;background-color:#fff}.search-field[_ngcontent-%COMP%]:after{position:absolute;right:-70px;top:0;content:\"\";display:block;height:100%;width:70px;background:linear-gradient(to right,white 20%,transparent)}.search-field-dropdown[_ngcontent-%COMP%]{position:absolute;width:100%;border:1px solid var(--lu-overlay-border);background:var(--lu-white)}.search-icon[_ngcontent-%COMP%]{cursor:pointer;--lu-svg-icon-color: var(--lu-primary)}.reset-icon[_ngcontent-%COMP%]{cursor:pointer;--lu-svg-icon-color: var(--lu-black-30)}  .search-input .lu-input-container:after,   lu-floated-border:after{border-radius:calc(var(--lu-base-gutter) * .5)}"],
        data: {
          animation: [(0, We.X$)("fadeInOut", [(0, We.eR)(":enter", [(0, We.oB)({
            width: 0,
            opacity: 0
          }), (0, We.jt)("200ms ease-in", (0, We.oB)({
            width: "{{ width }}",
            opacity: 1
          }))], {
            params: {
              width: "550px"
            }
          }), (0, We.eR)(":leave", [(0, We.jt)("200ms ease-out", (0, We.oB)({
            width: 0,
            opacity: 0
          }))])])]
        },
        changeDetection: 0
      }), (0, e.gn)([(0, d.k)(), (0, e.w6)("design:type", Function), (0, e.w6)("design:paramtypes", []), (0, e.w6)("design:returntype", M.w0)], St.prototype, "initSearchControlValueChanges", null), St;
    })(),
    wo = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, ke.h, R.LA, F.f, Y.c, a.UX, pe.o]
      }), St;
    })();
  const Ro = function () {
    return [];
  };
  function _r(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-chip-multiple-combobox", 3), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      let Ki, Nr;
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("withPaging", Pt.fromModule.withPaging)("displayValueFn", t.lcZ(2, 7, Pt.widget))("externalValues", null !== (Ki = null == Pt.staticModule ? null : Pt.staticModule.items) && void 0 !== Ki ? Ki : t.DdM(9, Ro))("placeholder", null !== (Nr = null == Pt.widget.data ? null : Pt.widget.data.placeholder) && void 0 !== Nr ? Nr : "Выберите из списка");
    }
  }
  function qr(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-chip-multiple-combobox", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("terminologyName", Pt.staticModule.name)("staticTerminology", Pt.staticModule.items)("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function Ts(St, Wi) {
    if (1 & St && t.YNc(0, qr, 3, 6, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", Pt.staticModule)("ngIfElse", Ki);
    }
  }
  function js(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  let ws = (() => {
    class St {
      constructor() {
        this.formControl = new a.NI();
      }
      get fromModule() {
        return this.widget.data?.terminology?.fromModule;
      }
      get staticModule() {
        return this.widget.data?.terminology?.fromStatic;
      }
    }
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-chip-multi-control-widget"]],
      inputs: {
        widget: "widget",
        formControl: "formControl"
      },
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["staticTermModule", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "withPaging", "displayValueFn", "externalValues", "placeholder"], [3, "terminologyName", "staticTerminology", "formControl", "displayValueFn"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
      template: function (Pt, Ki) {
        if (1 & Pt && (t.YNc(0, _r, 3, 10, "ng-container", 0), t.YNc(1, Ts, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, js, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
          const Nr = t.MAs(2);
          t.Q6J("ngIf", Ki.fromModule)("ngIfElse", Nr);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block}.dp-ul-chip-checkbox[_ngcontent-%COMP%]{display:flex;flex-shrink:0;font-weight:400;font-size:15px;line-height:24px}.dp-ul-chip-checkbox-postfix[_ngcontent-%COMP%]{padding-left:calc(var(--lu-base-gutter) * .5);text-align:center;color:var(--lu-black-54)}"],
      changeDetection: 0
    }), St;
  })();
  function Ws(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-terminology-segment-group", 3), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("featureKey", Pt.fromModule.uniqueId)("terminologyName", Pt.fromModule.name)("formControl", Pt.formControl)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function sa(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "dp-static-terminology-segment-group", 4), t.ALo(2, "widgetControlDisplayValueFn"), t.BQk()), 2 & St) {
      const Pt = t.oxw(2);
      t.xp6(1), t.Q6J("formControl", Pt.formControl)("staticTerminology", Pt.staticModule.items)("terminologyName", Pt.staticModule.name)("displayValueFn", t.lcZ(2, 4, Pt.widget));
    }
  }
  function ha(St, Wi) {
    if (1 & St && t.YNc(0, sa, 3, 6, "ng-container", 0), 2 & St) {
      const Pt = t.oxw(),
        Ki = t.MAs(4);
      t.Q6J("ngIf", null == Pt.widget.data || null == Pt.widget.data.terminology ? null : Pt.widget.data.terminology.fromStatic)("ngIfElse", Ki);
    }
  }
  function ua(St, Wi) {
    if (1 & St && (t.TgZ(0, "lu-replacement-message", 5), t._UZ(1, "lu-svg-icon", 6), t._uU(2), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("type", "warning")("highlight", !0), t.xp6(1), t.Q6J("size", 24), t.xp6(1), t.hij(" Для поля ", Pt.widget.label, " нет доступной терминологии ");
    }
  }
  t.B6R(ws, [qe.O5, a.JJ, a.oH, m.uY, f.dj, ke.q, m.YG], [yi]);
  let da = (() => {
    class St {
      constructor() {
        this.formControl = new a.NI();
      }
      get fromModule() {
        return this.widget.data?.terminology?.fromModule;
      }
      get staticModule() {
        return this.widget.data?.terminology?.fromStatic;
      }
    }
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-segment-group-control-widget"]],
      inputs: {
        widget: "widget",
        formControl: "formControl"
      },
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["fromStatic", ""], ["noTerminologyError", ""], [3, "featureKey", "terminologyName", "formControl", "displayValueFn"], [3, "formControl", "staticTerminology", "terminologyName", "displayValueFn"], [3, "type", "highlight"], ["icon", "attention", 3, "size"]],
      template: function (Pt, Ki) {
        if (1 & Pt && (t.YNc(0, Ws, 3, 6, "ng-container", 0), t.YNc(1, ha, 1, 2, "ng-template", null, 1, t.W1O), t.YNc(3, ua, 3, 4, "ng-template", null, 2, t.W1O)), 2 & Pt) {
          const Nr = t.MAs(2);
          t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.terminology ? null : Ki.widget.data.terminology.fromModule)("ngIfElse", Nr);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;width:100%}"],
      changeDetection: 0
    }), St;
  })();
  function Qs(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "lu-badge", 1), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = Wi.ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color)("colorType", Pt.type), t.xp6(1), t.hij(" ", null == Ki.widget.data ? null : Ki.widget.data.text, " ");
    }
  }
  t.B6R(da, [qe.O5, a.JJ, a.oH, m.RO, m.YE, f.dj, ke.q], [yi]);
  let ma = (() => {
    class St {}
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-budge-counter-widget"]],
      inputs: {
        widget: "widget"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "__budge-container", 3, "size", "color", "colorType"]],
      template: function (Pt, Ki) {
        1 & Pt && (t.YNc(0, Qs, 3, 4, "ng-container", 0), t.ALo(1, "budgeOptions")), 2 & Pt && t.Q6J("ngIf", t.lcZ(1, 1, Ki.widget));
      },
      styles: [".__budge-container[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}"],
      changeDetection: 0
    }), St;
  })();
  const Xs = {
    size: "medium",
    color: "black",
    type: "light"
  };
  let Ks = (() => {
      class St {
        transform(Pt) {
          const Ki = Pt?.options?.componentOptions;
          return Ki ? {
            size: this.budgeSize(Ki),
            color: this.budgeColor(Ki),
            type: this.budgeType(Ki)
          } : Xs;
        }
        budgeSize(Pt) {
          return Pt.size ?? Xs.size;
        }
        budgeColor(Pt) {
          return Pt.color ?? Xs.color;
        }
        budgeType(Pt) {
          return Pt.type ?? Xs.type;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵpipe = t.Yjl({
        name: "budgeOptions",
        type: St,
        pure: !0
      }), St;
    })(),
    Va = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, T.T]
      }), St;
    })();
  function ba(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "h1", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function qs(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "h2", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function Ri(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "h3", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function $o(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "h4", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function ci(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "h5", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function Gi(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "h6", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function Fn(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "p", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function zi(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "span", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function Io(St, Wi) {
    if (1 & St && (t.ynx(0), t.TgZ(1, "div", 3), t._uU(2), t.qZA(), t.BQk()), 2 & St) {
      const Pt = t.oxw().ngIf,
        Ki = t.oxw();
      t.xp6(1), t.Q6J("size", Pt.size)("color", Pt.color), t.xp6(1), t.Oqu(null == Ki.widget.data ? null : Ki.widget.data.text);
    }
  }
  function gi(St, Wi) {
    if (1 & St && (t.ynx(0)(1, 1), t.YNc(2, ba, 3, 3, "ng-container", 2), t.YNc(3, qs, 3, 3, "ng-container", 2), t.YNc(4, Ri, 3, 3, "ng-container", 2), t.YNc(5, $o, 3, 3, "ng-container", 2), t.YNc(6, ci, 3, 3, "ng-container", 2), t.YNc(7, Gi, 3, 3, "ng-container", 2), t.YNc(8, Fn, 3, 3, "ng-container", 2), t.YNc(9, zi, 3, 3, "ng-container", 2), t.YNc(10, Io, 3, 3, "ng-container", 2), t.BQk()()), 2 & St) {
      const Pt = Wi.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", Pt.content), t.xp6(1), t.Q6J("ngSwitchCase", "h1"), t.xp6(1), t.Q6J("ngSwitchCase", "h2"), t.xp6(1), t.Q6J("ngSwitchCase", "h3"), t.xp6(1), t.Q6J("ngSwitchCase", "h4"), t.xp6(1), t.Q6J("ngSwitchCase", "h5"), t.xp6(1), t.Q6J("ngSwitchCase", "h6"), t.xp6(1), t.Q6J("ngSwitchCase", "p"), t.xp6(1), t.Q6J("ngSwitchCase", "span"), t.xp6(1), t.Q6J("ngSwitchCase", "div");
    }
  }
  t.B6R(ma, [qe.O5, T.A], [Ks]);
  let Kt = (() => {
    class St {}
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-label-text-widget"]],
      inputs: {
        widget: "widget"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["lu-text", "", 3, "size", "color"]],
      template: function (Pt, Ki) {
        1 & Pt && (t.YNc(0, gi, 11, 10, "ng-container", 0), t.ALo(1, "labelTextOptions")), 2 & Pt && t.Q6J("ngIf", t.lcZ(1, 1, Ki.widget));
      },
      changeDetection: 0
    }), St;
  })();
  const Vt = {
    content: "div",
    color: "normal",
    size: "normal"
  };
  let Pn = (() => {
      class St {
        transform(Pt) {
          const Ki = Pt?.options?.componentOptions;
          return Ki ? {
            size: this.size(Ki),
            color: this.color(Ki),
            content: this.content(Ki)
          } : Vt;
        }
        size(Pt) {
          return Pt.size ?? Vt.size;
        }
        color(Pt) {
          return Pt.color ?? Vt.color;
        }
        content(Pt) {
          return Pt.content ?? Vt.content;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵpipe = t.Yjl({
        name: "labelTextOptions",
        type: St,
        pure: !0
      }), St;
    })(),
    pi = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, W.aI]
      }), St;
    })();
  t.B6R(Kt, [qe.O5, qe.RF, qe.n9, W.NZ], [Pn]);
  let xo = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-portal-slot-widget"]],
        inputs: {
          widget: "widget"
        },
        decls: 1,
        vars: 1,
        consts: [[1, "portal-slot", 3, "name"]],
        template: function (Pt, Ki) {
          if (1 & Pt && t._UZ(0, "dp-portal-host", 0), 2 & Pt) {
            let Nr;
            t.Q6J("name", null !== (Nr = null == Ki.widget.data ? null : Ki.widget.data.text) && void 0 !== Nr ? Nr : "");
          }
        },
        dependencies: [Re.N9],
        changeDetection: 0
      }), St;
    })(),
    No = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, Re.Ej]
      }), St;
    })();
  function Ko(St, Wi) {
    if (1 & St && (t.ynx(0), t._UZ(1, "div", 3), t.TgZ(2, "span", 4), t._uU(3), t.qZA(), t._UZ(4, "div", 3), t.BQk()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(3), t.Oqu(null == Pt.widget.data ? null : Pt.widget.data.text);
    }
  }
  function Mi(St, Wi) {
    1 & St && t._UZ(0, "div", 5);
  }
  let It = (() => {
      class St {
        get getRootClass() {
          return this.isHorizontal() ? "separator-line-horizontal" : "separator-line-vertical";
        }
        isHorizontal() {
          return "horizontal" === (this.renderContext?.renderOrientation ?? "horizontal");
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-separator-line-widget"]],
        inputs: {
          widget: "widget",
          renderContext: "renderContext"
        },
        decls: 4,
        vars: 3,
        consts: [[3, "ngClass"], [4, "ngIf", "ngIfElse"], ["withoutText", ""], [1, "separator-line", "separator-line--with-text"], ["lu-text", "", "size", "small", "color", "muted"], [1, "separator-line"]],
        template: function (Pt, Ki) {
          if (1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, Ko, 5, 1, "ng-container", 1), t.YNc(2, Mi, 1, 0, "ng-template", null, 2, t.W1O), t.qZA()), 2 & Pt) {
            const Nr = t.MAs(3);
            t.Q6J("ngClass", Ki.getRootClass), t.xp6(1), t.Q6J("ngIf", null == Ki.widget.data ? null : Ki.widget.data.text)("ngIfElse", Nr);
          }
        },
        dependencies: [qe.mk, qe.O5, W.NZ],
        styles: ["[_nghost-%COMP%]{display:block}.separator-line-vertical[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:space-between;align-items:center}.separator-line-vertical[_ngcontent-%COMP%]   .separator-line[_ngcontent-%COMP%]{display:block;height:1px;width:100%;background-color:var(--lu-black-15)}.separator-line-vertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;padding:0 var(--lu-base-gutter);white-space:nowrap}.separator-line-horizontal[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;justify-content:space-between;align-items:center}.separator-line-horizontal[_ngcontent-%COMP%]   .separator-line[_ngcontent-%COMP%]{display:block;height:calc(var(--lu-base-gutter) * 3);margin:0 calc(var(--lu-base-gutter) * 2);width:1px;background-color:var(--lu-black-15)}.separator-line-horizontal[_ngcontent-%COMP%]   .separator-line--with-text[_ngcontent-%COMP%]{height:calc(var(--lu-base-gutter) * .5)}"],
        changeDetection: 0
      }), St;
    })(),
    At = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, W.aI]
      }), St;
    })();
  function _n(St, Wi) {
    1 & St && t.GkF(0);
  }
  function it(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 6), t.YNc(1, _n, 1, 0, "ng-container", 7), t.qZA()), 2 & St) {
      const Pt = t.oxw(2),
        Ki = t.MAs(4);
      t.Q6J("size", Pt.size)("color", Pt.color)("colorType", Pt.colorType)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngTemplateOutlet", Ki);
    }
  }
  function _e(St, Wi) {
    1 & St && t.GkF(0);
  }
  function gt(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 8), t.YNc(1, _e, 1, 0, "ng-container", 7), t.qZA()), 2 & St) {
      const Pt = t.oxw(2),
        Ki = t.MAs(4);
      t.Q6J("size", Pt.size)("color", Pt.color)("colorType", Pt.colorType)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngTemplateOutlet", Ki);
    }
  }
  function ni(St, Wi) {
    1 & St && t.GkF(0);
  }
  function So(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 9), t.YNc(1, ni, 1, 0, "ng-container", 7), t.qZA()), 2 & St) {
      const Pt = t.oxw(2),
        Ki = t.MAs(4);
      t.Q6J("size", Pt.size)("color", Pt.color)("colorType", Pt.colorType)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngTemplateOutlet", Ki);
    }
  }
  function Er(St, Wi) {
    if (1 & St && (t.ynx(0)(1, 0), t.YNc(2, it, 2, 7, "button", 3), t.YNc(3, gt, 2, 7, "button", 4), t.YNc(4, So, 2, 7, "button", 5), t.BQk()()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("ngSwitch", Pt.btnType), t.xp6(1), t.Q6J("ngSwitchCase", "raised"), t.xp6(1), t.Q6J("ngSwitchCase", "outer");
    }
  }
  function Br(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 14), t._UZ(1, "lu-svg-icon", 15), t.qZA()), 2 & St) {
      const Pt = t.oxw(2);
      t.Q6J("ngStyle", Pt.iconMargin)("size", Pt.size)("color", Pt.color)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("colorType", Pt.colorType)("rounded", Pt.rounded)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngStyle", Pt.iconColor)("icon", Pt.iconForBtnIcon)("size", Pt.iconSizeForBtnIcon);
    }
  }
  function vr(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 16), t._UZ(1, "lu-svg-icon", 15), t.qZA()), 2 & St) {
      const Pt = t.oxw(2);
      t.Q6J("ngStyle", Pt.iconMargin)("size", Pt.size)("color", Pt.color)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("colorType", Pt.colorType)("rounded", Pt.rounded)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngStyle", Pt.iconColor)("icon", Pt.iconForBtnIcon)("size", Pt.iconSizeForBtnIcon);
    }
  }
  function zr(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 17), t._UZ(1, "lu-svg-icon", 15), t.qZA()), 2 & St) {
      const Pt = t.oxw(2);
      t.Q6J("ngStyle", Pt.iconMargin)("size", Pt.size)("color", Pt.color)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("colorType", Pt.colorType)("rounded", Pt.rounded)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngStyle", Pt.iconColor)("icon", Pt.iconForBtnIcon)("size", Pt.iconSizeForBtnIcon);
    }
  }
  function ks(St, Wi) {
    if (1 & St && (t.TgZ(0, "button", 18), t._UZ(1, "lu-svg-icon", 15), t.qZA()), 2 & St) {
      const Pt = t.oxw(2);
      t.Q6J("ngStyle", Pt.iconMargin)("size", Pt.size)("color", Pt.color)("luTooltip", Pt.tooltip)("canOpen", Pt.canOpenTooltip)("colorType", Pt.colorType)("rounded", Pt.rounded)("isLoading", Pt.loading), t.xp6(1), t.Q6J("ngStyle", Pt.iconColor)("icon", Pt.iconForBtnIcon)("size", Pt.iconSizeForBtnIcon);
    }
  }
  function aa(St, Wi) {
    if (1 & St && (t.ynx(0)(1, 0), t.YNc(2, Br, 2, 11, "button", 10), t.YNc(3, vr, 2, 11, "button", 11), t.YNc(4, zr, 2, 11, "button", 12), t.YNc(5, ks, 2, 11, "button", 13), t.BQk()()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("ngSwitch", Pt.btnType), t.xp6(1), t.Q6J("ngSwitchCase", "raised"), t.xp6(1), t.Q6J("ngSwitchCase", "outer"), t.xp6(1), t.Q6J("ngSwitchCase", "bg");
    }
  }
  function Ka(St, Wi) {
    if (1 & St && t._UZ(0, "lu-svg-icon", 21), 2 & St) {
      const Pt = t.oxw(2);
      t.Q6J("icon", Pt.leftIcon)("size", Pt.leftIconSize);
    }
  }
  function ja(St, Wi) {
    if (1 & St && t._UZ(0, "lu-svg-icon", 22), 2 & St) {
      const Pt = t.oxw(2);
      t.Q6J("icon", Pt.rightIcon)("size", Pt.rightIconSize);
    }
  }
  function ul(St, Wi) {
    if (1 & St && (t.YNc(0, Ka, 1, 2, "lu-svg-icon", 19), t._uU(1), t.YNc(2, ja, 1, 2, "lu-svg-icon", 20)), 2 & St) {
      const Pt = t.oxw();
      t.Q6J("ngIf", Pt.leftIcon && Pt.leftIconSize), t.xp6(1), t.hij(" ", Pt.text, " "), t.xp6(1), t.Q6J("ngIf", Pt.rightIcon && Pt.rightIconSize);
    }
  }
  let Ln = (() => {
      class St {
        constructor() {
          this.runEvent = new t.vpe(), this.loading = !1;
        }
        onRunEvent(Pt) {
          this.runEvent.emit(Pt), this.setLoading();
        }
        get btnType() {
          return this.widget.data?.btnSetting?.type ?? "default";
        }
        get iconColor() {
          return this.leftIconColor ? {
            "--lu-svg-icon-color": this.leftIconColor
          } : this.rightIconColor ? {
            "--lu-svg-icon-color": this.rightIconColor
          } : null;
        }
        get iconMargin() {
          const Pt = this.widget.data?.btnSetting;
          return Pt?.leftIconMargin || Pt?.iconMargin ? {
            marginRight: Pt?.leftIconMargin || Pt?.iconMargin
          } : Pt?.rightIconMargin ? {
            marginLeft: Pt?.rightIconMargin
          } : null;
        }
        get tooltip() {
          const Pt = this.widget.data;
          return Pt?.tooltip ? Pt?.tooltip : "";
        }
        get canOpenTooltip() {
          return Boolean(this.tooltip);
        }
        get size() {
          return this.widget.data?.btnSetting?.size ?? "medium";
        }
        get rightIconColor() {
          return this.widget.data?.btnSetting?.rightIconColor;
        }
        get leftIconColor() {
          return this.widget.data?.btnSetting?.leftIconColor ?? this.widget.data?.btnSetting?.iconColor;
        }
        get color() {
          return this.widget.data?.btnSetting?.color ?? "default";
        }
        get colorType() {
          return this.widget.data?.btnSetting?.colorType ?? "default";
        }
        get leftIcon() {
          return this.widget.data?.btnSetting?.leftIcon ?? this.widget.data?.btnSetting?.icon;
        }
        get leftIconSize() {
          return this.widget.data?.btnSetting?.leftIconSize ?? this.widget.data?.btnSetting?.iconSize;
        }
        get rightIcon() {
          return this.widget.data?.btnSetting?.rightIcon;
        }
        get rightIconSize() {
          return this.widget.data?.btnSetting?.rightIconSize;
        }
        get iconForBtnIcon() {
          return this.leftIcon ?? this.rightIcon ?? "cannabis";
        }
        get iconSizeForBtnIcon() {
          return this.leftIconSize ?? this.rightIconSize ?? 16;
        }
        get text() {
          return this.widget.data?.btnSetting?.text ?? "Кнопка";
        }
        get rounded() {
          return this.widget.data?.btnSetting?.rounded ?? !1;
        }
        setLoading() {
          this.widget.data?.btnSetting?.setLoadingOnClick && (this.loading = !0);
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
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
      }), St;
    })(),
    en = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, te.W1, ke.h, pe.o, fe.i]
      }), St;
    })();
  function mi(St, Wi) {
    1 & St && t._UZ(0, "lu-svg-icon", 3), 2 & St && t.Q6J("size", 16);
  }
  function ro(St, Wi) {
    1 & St && t._UZ(0, "lu-svg-icon", 4), 2 & St && t.Q6J("size", 16);
  }
  let cr = (() => {
      class St {
        constructor() {
          this.runEvent = new t.vpe(), this.expanded = !1;
        }
        onRunEvent(Pt) {
          this.runEvent.emit(Pt), this.expanded = !this.expanded;
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
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
      }), St;
    })(),
    jr = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, te.W1, ke.h]
      }), St;
    })();
  function Da(St) {
    return function as(St) {
      return St.filter(Wi => "formGroupField" in Wi);
    }(St).map(Wi => Wi.formGroupField.field);
  }
  function vo(St, Wi) {
    return (0, Rt.Ht)(St, Wi.filter(Pt => "formGroupField" in Pt).map(Pt => Pt.formGroupField.field));
  }
  function As(St, Wi) {
    let Pt = {
      ...St
    };
    return Wi?.length && Wi.forEach(Ki => {
      if (function dl(St, Wi) {
        const Pt = [...Object.keys(St), ...Object.keys(Wi)];
        return Pt.filter((Ki, Nr) => Pt.indexOf(Ki) !== Nr).length > 0;
      }(Ki.widgetMap, Pt)) throw new Error("Has duplicates widgets");
      Pt = {
        ...Pt,
        ...Ki.widgetMap
      };
    }), Pt;
  }
  let pn = (() => {
    class St {
      constructor() {
        this._type = "unknown";
      }
    }
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-unknown-widget"]],
      decls: 2,
      vars: 1,
      consts: [[3, "tooltip"]],
      template: function (Pt, Ki) {
        1 & Pt && (t.TgZ(0, "dp-unknown-component", 0), t._uU(1, " нтв "), t.qZA()), 2 & Pt && t.Q6J("tooltip", "Не известный тип виджета: " + Ki._type);
      },
      dependencies: [Re.bk],
      encapsulation: 2,
      changeDetection: 0
    }), St;
  })();
  function Jt(St, Wi) {
    if (1 & St) {
      const Pt = t.EpF();
      t.TgZ(0, "span", 1), t.NdJ("click", function (Nr) {
        t.CHM(Pt);
        const oa = t.oxw();
        return t.KtG(oa.passTemplateDataToComponent(Nr));
      }), t._uU(1), t.qZA();
    }
    if (2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.hij(" ", Pt.templateData.title, "\n");
    }
  }
  let Si = (() => {
    class St {
      constructor() {
        this.setTemplate = new t.vpe();
      }
      passTemplateDataToComponent(Pt) {
        Pt.preventDefault(), this.templateData && this.setTemplate.emit(this.templateData.value);
      }
    }
    return St.ɵfac = function (Pt) {
      return new (Pt || St)();
    }, St.ɵcmp = t.Xpm({
      type: St,
      selectors: [["dp-templates-for-widget"]],
      inputs: {
        templateData: "templateData"
      },
      outputs: {
        setTemplate: "setTemplate"
      },
      decls: 1,
      vars: 1,
      consts: [["lu-text", "", "class", "button-dashed button-dashed__template", 3, "click", 4, "ngIf"], ["lu-text", "", 1, "button-dashed", "button-dashed__template", 3, "click"]],
      template: function (Pt, Ki) {
        1 & Pt && t.YNc(0, Jt, 2, 1, "span", 0), 2 & Pt && t.Q6J("ngIf", Ki.templateData);
      },
      dependencies: [qe.O5, W.NZ],
      styles: [".button-dashed[_ngcontent-%COMP%]{position:relative;cursor:pointer;color:var(--lu-button-text)}.button-dashed[_ngcontent-%COMP%]     .lu-button-content{display:none}.button-dashed__template[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}.button-dashed[_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:0;bottom:1px;width:100%;border-bottom:1px dashed var(--lu-button-text)}"],
      changeDetection: 0
    }), St;
  })();
  function mn(St, Wi) {
    if (1 & St) {
      const Pt = t.EpF();
      t.TgZ(0, "dp-templates-for-widget", 5), t.NdJ("setTemplate", function (Nr) {
        t.CHM(Pt);
        const oa = t.oxw(2);
        return t.KtG(oa.setValueFromTemplateToControl(Nr));
      }), t.qZA();
    }
    2 & St && t.Q6J("templateData", Wi.$implicit);
  }
  function Pe(St, Wi) {
    if (1 & St && (t.TgZ(0, "div", 3), t.YNc(1, mn, 1, 1, "dp-templates-for-widget", 4), t.qZA()), 2 & St) {
      const Pt = t.oxw();
      t.xp6(1), t.Q6J("ngForOf", null == Pt.widget.data ? null : Pt.widget.data.templates);
    }
  }
  function at(St, Wi) {}
  let Zt = (() => {
      class St extends le.Fe {
        constructor(Pt, Ki, Nr, oa) {
          super(Pt, Ki, Nr), this.componentsMap = {}, this.universalMap = {
            "input.text": hs,
            "input.rollable-search": dn,
            "input.select": ki,
            "input.multiple-select": us,
            "input.checkbox": je,
            "input.checkbox-group": Ii,
            "input.date": Xn,
            "input.date-stepper": Yo,
            "input.date-period": Pr,
            "input.age": Ze,
            "input.radio": jo,
            "input.segment": da,
            "chip.checkbox": pt,
            "chip.select": bi,
            "chip.radio": $t,
            "chip.single-radio": pt,
            "chip.multi": ws,
            "chip.toggle": _s,
            "input.range": ri
          }, this.formControl = new a.NI(), this.componentsMap = As(this.universalMap, oa);
        }
        ngOnInit() {
          super.ngOnInit(), this.loadComponent(), this.initUpdateModelEvent();
        }
        ngOnChanges(Pt) {
          Pt.widget.firstChange || this.needRecreate(Pt) && (this.componentRef.destroy(), this.loadComponent());
        }
        setValueFromTemplateToControl(Pt) {
          this.formControl.setValue(Pt);
        }
        incomingUpdate(Pt) {
          this.formControl.setValue(Pt);
        }
        needRecreate(Pt) {
          return !(0, Rt.vZ)(this.getValuesForRecreate(Pt.widget.currentValue), this.getValuesForRecreate(Pt.widget.previousValue));
        }
        getValuesForRecreate(Pt) {
          const {
            type: Ki,
            formGroupField: Nr,
            label: oa,
            data: er
          } = Pt;
          return {
            type: Ki,
            formGroupField: {
              ...Nr,
              disabled: !1,
              value: null
            },
            label: oa,
            data: er
          };
        }
        loadComponent() {
          try {
            if (!this.widget?.type) throw new Error("Widget type is not defined");
            if (!this.componentsMap[this.widget.type]) throw new Error(`Component for widget type ${this.widget.type} not found in components map`);
            const Pt = this.adHost.viewContainerRef;
            Pt.clear(), this.componentRef = Pt.createComponent(this.componentsMap[this.widget.type] ?? pn), this.componentRef.instance.widget = this.widget, this.componentRef.instance.formControl = this.formControl, this.componentRef.instance.parentFormGroup = this.ngControl?.control?.parent, this.componentRef.instance._type = this.widget.type;
          } catch (Pt) {
            const Ki = Pt instanceof Error ? Pt.message : "Unknown error";
            console.error(Ki, {
              widgetType: this.widget?.type,
              widgetData: this.widget
            });
          }
        }
        initUpdateModelEvent() {
          return this.formControl.valueChanges.pipe((0, N.h)(Pt => Pt !== this.ngControl?.control?.value)).subscribe(Pt => this.updateModel(this.resetIfEmpty(Pt)));
        }
        resetIfEmpty(Pt) {
          return "string" == typeof Pt && "" === Pt ? null : Pt;
        }
        setDisabledState(Pt) {
          super.setDisabledState(Pt), Pt ? this.formControl.enabled && this.formControl.disable({
            emitEvent: !1
          }) : this.formControl.disabled && this.formControl.enable({
            emitEvent: !1
          });
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)(t.Y36(t.sBO), t.Y36(n.fU, 8), t.Y36(a.a5, 10), t.Y36(q, 8));
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-universal-control-widget"]],
        viewQuery: function (Pt, Ki) {
          if (1 & Pt && t.Gf(st.x6, 7), 2 & Pt) {
            let Nr;
            t.iGM(Nr = t.CRH()) && (Ki.adHost = Nr.first);
          }
        },
        inputs: {
          widget: "widget"
        },
        features: [t.qOj, t.TTD],
        decls: 3,
        vars: 1,
        consts: [[1, "widget"], ["class", "widget-template widget-template__wrapper", 4, "ngIf"], ["dpAdHost", ""], [1, "widget-template", "widget-template__wrapper"], [3, "templateData", "setTemplate", 4, "ngFor", "ngForOf"], [3, "templateData", "setTemplate"]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, Pe, 2, 1, "div", 1), t.YNc(2, at, 0, 0, "ng-template", 2), t.qZA()), 2 & Pt && (t.xp6(1), t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.templates ? null : Ki.widget.data.templates.length));
        },
        dependencies: [qe.sg, qe.O5, st.x6, Si],
        styles: ["[_nghost-%COMP%]{display:block}.widget-template[_ngcontent-%COMP%]{display:flex;flex-direction:row}.widget-template__wrapper[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), (0, e.gn)([(0, d.k)(), (0, e.w6)("design:type", Function), (0, e.w6)("design:paramtypes", []), (0, e.w6)("design:returntype", M.w0)], St.prototype, "initUpdateModelEvent", null), St;
    })(),
    Li = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, te.W1, W.aI]
      }), St;
    })(),
    mo = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, st.vB, oi, wo, Ei, Mt, Dt, qn, Jo, Yi, Mn, Ee, qo, wr, Go, Li, Yt]
      }), St;
    })();
  function Xo(St, Wi) {}
  let Cr = (() => {
      class St {
        constructor() {
          this.renderContext = {}, this.map = {
            "budge.counter": ma,
            "label.text": Kt,
            "separator.line": It,
            "portal-slot": xo
          };
        }
        ngOnInit() {
          this.loadComponent();
        }
        ngOnChanges(Pt) {
          Pt.widget && !(0, Rt.vZ)(Pt.widget.currentValue, Pt.widget.previousValue) && this.componentRef && (this.componentRef.destroy(), this.loadComponent());
        }
        loadComponent() {
          const Pt = this.adHost.viewContainerRef;
          Pt.clear(), this.componentRef = Pt.createComponent(this.map[this.widget.type] ?? pn), this.componentRef.instance.widget = this.widget, this.componentRef.instance.renderContext = this.renderContext, this.componentRef.instance._type = this.widget.type;
        }
        updateInputFields() {
          this.componentRef && (this.componentRef.instance.widget = this.widget, this.componentRef.instance.renderContext = this.renderContext);
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-universal-static-widget"]],
        viewQuery: function (Pt, Ki) {
          if (1 & Pt && t.Gf(st.x6, 7), 2 & Pt) {
            let Nr;
            t.iGM(Nr = t.CRH()) && (Ki.adHost = Nr.first);
          }
        },
        inputs: {
          widget: "widget",
          renderContext: "renderContext"
        },
        features: [t.TTD],
        decls: 2,
        vars: 0,
        consts: [[1, "widget"], ["dpAdHost", ""]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, Xo, 0, 0, "ng-template", 1), t.qZA());
        },
        dependencies: [st.x6],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), St;
    })(),
    Xr = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, st.vB, Va, pi, At, No]
      }), St;
    })();
  function ys(St, Wi) {}
  let Hs = (() => {
      class St {
        constructor(Pt) {
          this.runEvent = new t.vpe(), this.componentsMap = {}, this.map = {
            btn: Ln,
            "btn.icon": Ln,
            "btn.expansion": cr
          }, this.componentsMap = As(this.map, Pt);
        }
        ngOnInit() {
          this.loadComponent();
        }
        ngOnChanges(Pt) {
          Pt.widget && !(0, Rt.vZ)(Pt.widget.currentValue, Pt.widget.previousValue) && this.createdComponentRef && (this.createdComponentRef.destroy(), this.loadComponent());
        }
        onRunEvent(Pt) {
          this.runEvent.emit(Pt);
        }
        loadComponent() {
          const Pt = this.adHost.viewContainerRef;
          Pt.clear(), this.createdComponentRef = Pt.createComponent(this.componentsMap[this.widget.type] ?? pn), this.createdComponentRef.instance.widget = this.widget, this.createdComponentRef.instance._type = this.widget.type, this.initRunEvent(this.createdComponentRef.instance);
        }
        initRunEvent(Pt) {
          return Pt.runEvent.subscribe(Ki => this.onRunEvent(Ki));
        }
      }
      return St.ɵfac = function (Pt) {
        return new (Pt || St)(t.Y36(mt, 8));
      }, St.ɵcmp = t.Xpm({
        type: St,
        selectors: [["dp-universal-widget"]],
        viewQuery: function (Pt, Ki) {
          if (1 & Pt && t.Gf(st.x6, 7), 2 & Pt) {
            let Nr;
            t.iGM(Nr = t.CRH()) && (Ki.adHost = Nr.first);
          }
        },
        inputs: {
          widget: "widget"
        },
        outputs: {
          runEvent: "runEvent"
        },
        features: [t.TTD],
        decls: 2,
        vars: 0,
        consts: [[1, "widget"], ["dpAdHost", ""]],
        template: function (Pt, Ki) {
          1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, ys, 0, 0, "ng-template", 1), t.qZA());
        },
        dependencies: [st.x6],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), (0, e.gn)([(0, d.k)(), (0, e.w6)("design:type", Function), (0, e.w6)("design:paramtypes", [Object]), (0, e.w6)("design:returntype", M.w0)], St.prototype, "initRunEvent", null), St;
    })(),
    la = (() => {
      class St {}
      return St.ɵfac = function (Pt) {
        return new (Pt || St)();
      }, St.ɵmod = t.oAB({
        type: St
      }), St.ɵinj = t.cJS({
        imports: [qe.ez, st.vB, en, jr]
      }), St;
    })();
});
