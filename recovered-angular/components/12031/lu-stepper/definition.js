// Exact compiled component metadata; references belong to modules/12031.js
({
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
});
