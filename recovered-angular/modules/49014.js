// Extracted from main; webpack module 49014. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    F: () => L,
    l: () => O
  });
  var I,
    t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(77579),
    d = i(28642),
    M = i(44348),
    b = i(15635),
    A = i(24006),
    N = i(13700);
  let O = I = class {
    constructor(v, f, E, h, x) {
      this.elementRef = v, this.changeDetectorRef = f, this.renderer = E, this.ngControl = h, this.inputRef = x, this.hasDecimal = !1, this.decimalIsRequired = !1, this.decimalSeparator = ",", this.decimalLength = 2, this.step = 1, this.shiftStep = 10, this.digitCapacity = !1, this.canBeEmpty = !0, this.currentValue = "", this.inputChange$ = new m.x();
    }
    ngOnInit() {
      (0, b.Uh)(this.currentValue) || this.setInputValue(this.format(this.currentValue, this.digitCapacity));
    }
    get inputChange() {
      return this.inputChange$.asObservable();
    }
    inputEvent() {
      let v = this.elementRef.nativeElement.value.replace(/^(0)(\d.*)$/, "$2");
      this.validateInput(v) ? this.inputChange$.next(v) : (this.inputRef?.blink(), v = this.currentValue), this.updateInput(v);
    }
    keydownEvent(v) {
      "ArrowUp" === v.code && !v.ctrlKey && (this.add(Math.abs(v.shiftKey ? this.shiftStep : this.step)), v.preventDefault()), "ArrowDown" === v.code && !v.ctrlKey && (this.add(-Math.abs(v.shiftKey ? this.shiftStep : this.step)), v.preventDefault()), ["Comma", "Period"].includes(v.code) && !v.ctrlKey && !v.shiftKey && (v.preventDefault(), this.elementRef.nativeElement.value += this.decimalSeparator, this.elementRef.nativeElement.dispatchEvent(new Event("input")));
    }
    updateInputByEvents() {
      this.setInputValue(this.currentValue);
    }
    add(v) {
      this.setInputValue(String((this.toNumber(this.currentValue) || 0) + v)), this.inputChange$.next(this.currentValue);
    }
    setInputValue(v) {
      this.updateInput(this.format(v, !this.inputRef?.isFocused));
    }
    updateInput(v) {
      this.currentValue = v, this.elementRef.nativeElement.value = this.currentValue;
    }
    validateInput(v) {
      if ("" === v) return !0;
      const f = this.decimalSeparator;
      return (this.hasDecimal ? new RegExp(`^((^((^-)?\\d+)(\\${f})?\\d{0,${this.decimalLength}})|((^-)|(^\\${f}\\d{0,${this.decimalLength}})))$`) : /^((^((^-)?\d+))|(^-))$/).test(v);
    }
    clearValue(v) {
      return v.replace(/^-$/, "").replace(new RegExp(`^\\${this.decimalSeparator}$`), "");
    }
    format(v, f = !1) {
      const E = this.clearValue(v) ? this.stringToNumberStyleString(v, this.decimalIsRequired ? this.decimalLength : 0, f) : this.canBeEmpty ? "" : this.stringToNumberStyleString("0", this.decimalIsRequired ? this.decimalLength : 0, f);
      return f ? E.replace(new RegExp(`\\${this.decimalSeparator}$`), "").replace(new RegExp(`(^-)(0)(\\${this.decimalSeparator}0{${this.decimalLength}})?$`), "$2$3").replace(new RegExp(`^(\\${this.decimalSeparator})(\\d+)`), "0$1$2") : E;
    }
    stringToNumberStyleString(v, f, E) {
      let h = v.replace(/\s/g, "").replace(/\./, this.decimalSeparator);
      return h = E && this.digitCapacity ? (0, d.xj)(h, this.decimalSeparator) : h, h = f ? (0, d.fF)(h, f, this.decimalSeparator) : h, h;
    }
    toNumber(v) {
      const f = v.replace(/\s/g, "").replace(/^-$/, "").replace(new RegExp(`\\${this.decimalSeparator}$`), "").replace(new RegExp(`\\${this.decimalSeparator}`), ".");
      return (0, b.Uh)(f) ? Number(f) : null;
    }
  };
  O.ɵfac = function (v) {
    return new (v || O)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(e.Qsj), e.Y36(A.a5, 10), e.Y36(N.L, 10));
  }, O.ɵdir = e.lG2({
    type: O,
    selectors: [["input", "luNumberEntry", ""]],
    hostBindings: function (v, f) {
      1 & v && e.NdJ("input", function () {
        return f.inputEvent();
      })("keydown", function (h) {
        return f.keydownEvent(h);
      })("focus", function () {
        return f.updateInputByEvents();
      })("blur", function () {
        return f.updateInputByEvents();
      });
    },
    inputs: {
      hasDecimal: "hasDecimal",
      decimalIsRequired: "decimalIsRequired",
      decimalSeparator: "decimalSeparator",
      decimalLength: "decimalLength",
      step: "step",
      shiftStep: "shiftStep",
      digitCapacity: "digitCapacity",
      canBeEmpty: "canBeEmpty"
    },
    features: [e._Bn([{
      provide: M.fc,
      useExisting: I
    }])]
  }), O = I = (0, t.gn)([(0, a.c)()], O);
  let L = (() => {
    class C {}
    return C.ɵfac = function (f) {
      return new (f || C)();
    }, C.ɵmod = e.oAB({
      type: C
    }), C.ɵinj = e.cJS({}), C;
  })();
});
