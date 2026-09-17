// Extracted from main; webpack module 12031. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => R,
    s: () => B
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(42730),
    d = i(62804),
    M = i(13700),
    b = i(49014),
    A = i(52958),
    N = i(19550),
    I = i(41089),
    O = i(44348),
    L = i(41742),
    C = i(99246),
    v = i(46757),
    f = i(54968),
    E = i(39300),
    h = i(93278),
    x = i(36895);
  const u = ["wrapper"];
  var T;
  let R = T = class extends O.zH {
    constructor(j, W, F) {
      super(W, void 0, F), this.ngZone = j, this.changeDetectorRef = W, this.ngControl = F, this.dataTestRole = "stepper", this.min = null, this.max = null, this.hasDecimal = !1, this.decimalIsRequired = !1, this.decimalSeparator = ",", this.decimalLength = 1, this.step = 1, this.shiftStep = 10, this.digitCapacity = !1, this.changeOnWheel = !0, this.placeholder = "";
    }
    ngOnInit() {
      super.ngOnInit(), this.wrapper?.nativeElement && (0, f.R)(this.wrapper.nativeElement, "wheel").pipe((0, E.h)(() => !this.disabled), (0, E.h)(() => !!this.focusCatcher?.focused), (0, E.h)(() => this.changeOnWheel), (0, L.hx)(this.ngZone), (0, m.t)(this)).subscribe(j => {
        j instanceof WheelEvent && (j.preventDefault(), j.deltaY < 0 ? this.increase() : this.decrease(), this.changeDetectorRef.markForCheck());
      });
    }
    decrease() {
      !this.disabled && this.numberEntry && this.numberEntry.add(-this.step);
    }
    increase() {
      !this.disabled && this.numberEntry && this.numberEntry.add(this.step);
    }
  };
  R.ɵfac = function (j) {
    return new (j || R)(e.Y36(e.R0b), e.Y36(e.sBO), e.Y36(a.a5, 8));
  }, R.ɵcmp = e.Xpm({
    type: R,
    selectors: [["lu-stepper"]],
    viewQuery: function (j, W) {
      if (1 & j && (e.Gf(u, 7, e.SBq), e.Gf(I.V, 7), e.Gf(b.l, 7)), 2 & j) {
        let F;
        e.iGM(F = e.CRH()) && (W.wrapper = F.first), e.iGM(F = e.CRH()) && (W.focusCatcher = F.first), e.iGM(F = e.CRH()) && (W.numberEntry = F.first);
      }
    },
    hostVars: 1,
    hostBindings: function (j, W) {
      2 & j && e.uIk("data-test-role", W.dataTestRole);
    },
    inputs: {
      min: "min",
      max: "max",
      hasDecimal: "hasDecimal",
      decimalIsRequired: "decimalIsRequired",
      decimalSeparator: "decimalSeparator",
      decimalLength: "decimalLength",
      step: "step",
      shiftStep: "shiftStep",
      digitCapacity: "digitCapacity",
      changeOnWheel: "changeOnWheel",
      placeholder: "placeholder"
    },
    features: [e._Bn([{
      provide: C.fU,
      useExisting: T
    }, {
      provide: C.Oc,
      useValue: v.Ls.PRIMITIVE
    }]), e.qOj],
    decls: 8,
    vars: 15,
    consts: [["align", "center", "luFocusCatcher", "", 3, "highlight"], ["wrapper", ""], ["lu-button-icon", "", "color", "black", "colorType", "light", "luInputWrapperBefore", "", "data-test-role", "clickableElement", 3, "disabled", "tabIndex", "click"], ["icon", "minus"], ["luInput", "", "luInputNumber", "", "luNumberEntry", "", 3, "min", "max", "canBeEmpty", "hasDecimal", "decimalIsRequired", "decimalSeparator", "decimalLength", "step", "shiftStep", "digitCapacity", "placeholder"], ["lu-button-icon", "", "color", "black", "colorType", "light", "luInputWrapperAfter", "", "data-test-role", "clickableElement", 3, "disabled", "click"], ["icon", "plus"]],
    template: function (j, W) {
      1 & j && (e.TgZ(0, "label")(1, "lu-input-wrapper", 0, 1)(3, "div", 2), e.NdJ("click", function () {
        return W.decrease();
      }), e._UZ(4, "lu-svg-icon", 3), e.qZA(), e._UZ(5, "input", 4), e.TgZ(6, "div", 5), e.NdJ("click", function () {
        return W.increase();
      }), e._UZ(7, "lu-svg-icon", 6), e.qZA()()()), 2 & j && (e.xp6(1), e.Q6J("highlight", !1), e.xp6(2), e.Q6J("disabled", W.disabled)("tabIndex", -1), e.xp6(2), e.Q6J("min", W.min)("max", W.max)("canBeEmpty", !1)("hasDecimal", W.hasDecimal)("decimalIsRequired", W.decimalIsRequired)("decimalSeparator", W.decimalSeparator)("decimalLength", W.decimalLength)("step", W.step)("shiftStep", W.shiftStep)("digitCapacity", W.digitCapacity)("placeholder", W.placeholder), e.xp6(1), e.Q6J("disabled", W.disabled));
    },
    dependencies: [d.HY, d.kH, d.Fj, M.L, b.l, A.l, N.k, h.q, I.V],
    styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;width:120px;flex-shrink:0}"],
    changeDetection: 0
  }), R = T = (0, t.gn)([(0, m.c)()], R);
  let B = (() => {
    class y {}
    return y.ɵfac = function (W) {
      return new (W || y)();
    }, y.ɵmod = e.oAB({
      type: y
    }), y.ɵinj = e.cJS({
      imports: [x.ez, d.LA, M.f, b.F, A.R, N.o, h.h, I.T]
    }), y;
  })();
});
