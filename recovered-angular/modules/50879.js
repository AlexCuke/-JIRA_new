// Extracted from main; webpack module 50879. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    t: () => x,
    y: () => h
  });
  var t = i(97582),
    e = i(94650),
    a = i(62804),
    m = i(44348),
    d = i(26652),
    M = i(99246),
    b = i(43150),
    A = i(42522),
    N = i(13700),
    I = i(23062),
    O = i(24006),
    L = i(42730),
    C = i(36895);
  const v = ["contentEditable"];
  function f(u, T) {
    if (1 & u && (e.TgZ(0, "span", 3), e._uU(1), e.qZA()), 2 & u) {
      const R = e.oxw();
      e.xp6(1), e.Oqu(R.placeholder);
    }
  }
  var E;
  let h = E = class extends m.Fe {
    get disabled() {
      return this.computeDisabled();
    }
    set disabled(T) {
      this.setDisabledState(T);
    }
    constructor(T, R) {
      super(T, void 0, R), this.changeDetectorRef = T, this.ngControl = R, this.isDisabled = !1, this.placeholder = null, this.minRows = null, this.maxRows = null, this.wordBreak = "break-all", this.inputId = null, this.touched = new e.vpe(), this.cachedLineHeight = 0, this.cachedBorder = 0, this.cachedPadding = 0, this.onTouched = () => {};
    }
    ngOnChanges({
      minRows: T,
      maxRows: R
    }) {
      T && this.setMinHeight(), R && this.setMaxHeight();
    }
    ngAfterViewChecked() {
      !this.cachedLineHeight && !this.cachedPadding && !this.cachedBorder && (this.cacheTextareaSize(), this.setMinHeight(), this.setMaxHeight());
    }
    onAreaClick() {
      this.onTouched(), this.touched.emit();
    }
    set value(T) {
      this.contentEditable && (this.contentEditable.nativeElement.textContent = T);
    }
    get value() {
      return this.formatValue(this.contentEditable?.nativeElement.textContent || "");
    }
    caretPoint() {
      return this.contentEditable && d.Nu.caretContentEditableXY(this.contentEditable.nativeElement) || {
        x: 0,
        y: 0
      };
    }
    incomingUpdate() {
      this.refreshIfNeed();
    }
    onInput(T) {
      const R = this.formatValue(T);
      this.updateModel(R);
    }
    onPaste(T) {
      T.preventDefault();
      const R = T.clipboardData?.getData("text/plain") || "";
      document.execCommand("insertText", !1, R);
    }
    get placeholderIsVisible() {
      return !this.formatValue(this.contentEditable?.nativeElement.textContent || "");
    }
    hasFocus() {
      return document.activeElement === this.contentEditable?.nativeElement;
    }
    formatValue(T) {
      return T.replace(/^\s$/, "");
    }
    refreshIfNeed() {
      this.contentEditable && (this.innerTextBuffer !== this.model || !this.innerTextBuffer && !this.model) && (this.innerTextBuffer = this.contentEditable.nativeElement.innerText = this.model || "");
    }
    setMinHeight() {
      const T = this.minRows && this.cachedLineHeight ? `${this.minRows * this.cachedLineHeight + this.cachedPadding + this.cachedBorder}px` : null;
      T && this.contentEditable && (this.contentEditable.nativeElement.style.minHeight = T);
    }
    setMaxHeight() {
      const T = this.maxRows && this.cachedLineHeight ? `${this.maxRows * this.cachedLineHeight + this.cachedPadding + this.cachedBorder}px` : null;
      this.contentEditable && T && (this.contentEditable.nativeElement.style.maxHeight = T);
    }
    cacheTextareaSize() {
      if (this.contentEditable) {
        const T = window.getComputedStyle(this.contentEditable.nativeElement);
        this.cachedLineHeight = Number(T.lineHeight.replace("px", "")), this.cachedBorder = Number(T.borderTopWidth.replace("px", "")) + Number(T.borderBottomWidth.replace("px", "")), this.cachedPadding = Number(T.paddingTop.replace("px", "")) + Number(T.paddingBottom.replace("px", ""));
      }
    }
  };
  h.ɵfac = function (T) {
    return new (T || h)(e.Y36(e.sBO), e.Y36(O.a5, 8));
  }, h.ɵcmp = e.Xpm({
    type: h,
    selectors: [["lu-textarea"]],
    viewQuery: function (T, R) {
      if (1 & T && e.Gf(v, 7, e.SBq), 2 & T) {
        let B;
        e.iGM(B = e.CRH()) && (R.contentEditable = B.first);
      }
    },
    hostVars: 3,
    hostBindings: function (T, R) {
      2 & T && (e.uIk("data-lu-disabled", R.disabled), e.Udp("word-break", R.wordBreak));
    },
    inputs: {
      placeholder: "placeholder",
      minRows: "minRows",
      maxRows: "maxRows",
      wordBreak: "wordBreak",
      inputId: "inputId",
      disabled: "disabled"
    },
    outputs: {
      touched: "touched"
    },
    features: [e._Bn([{
      provide: M.BU,
      useExisting: E
    }]), e.qOj, e.TTD],
    decls: 4,
    vars: 9,
    consts: [["aria-readonly", "true", "data-test-role", "textInput", 1, "lu-input", "lu-textarea", 3, "input", "paste", "click"], ["contentEditable", ""], ["class", "lu-textarea-placeholder", 4, "ngIf"], [1, "lu-textarea-placeholder"]],
    template: function (T, R) {
      1 & T && (e.TgZ(0, "lu-input-wrapper")(1, "div", 0, 1), e.NdJ("input", function (y) {
        return R.onInput(y.target.innerText);
      })("paste", function (y) {
        return R.onPaste(y);
      })("click", function () {
        return R.onAreaClick();
      }), e.qZA()(), e.YNc(3, f, 2, 1, "span", 2)), 2 & T && (e.xp6(1), e.ekj("-is-empty", R.placeholderIsVisible)("disabled", R.disabled), e.uIk("id", R.inputId ? R.inputId : null)("aria-disabled", R.disabled)("contenteditable", !R.disabled)("data-lu-disabled", R.disabled), e.xp6(2), e.Q6J("ngIf", R.placeholderIsVisible));
    },
    dependencies: [C.O5, a.HY],
    styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;vertical-align:top;width:100%;--lu-input-height: auto}[_nghost-%COMP%]   .lu-wrapper-textarea[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   div.lu-textarea[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);min-height:40px;overflow:auto!important}[_nghost-%COMP%]   .lu-textarea-placeholder[_ngcontent-%COMP%]{position:absolute;display:block;top:0;left:0;color:var(--lu-black-40);pointer-events:none;padding:0 calc(var(--lu-base-gutter) * 2);width:100%;height:100%;font-size:15px;line-height:27px;overflow:hidden;padding-top:8px}.disabled[_nghost-%COMP%]   .lu-textarea[_ngcontent-%COMP%]{color:var(--lu-black-54);background-color:var(--lu-black-5)}  .lu-textarea *{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}"],
    changeDetection: 0
  }), h = E = (0, t.gn)([(0, L.c)()], h);
  let x = (() => {
    class u {}
    return u.ɵfac = function (R) {
      return new (R || u)();
    }, u.ɵmod = e.oAB({
      type: u
    }), u.ɵinj = e.cJS({
      imports: [C.ez, a.LA, b.c, A.$, N.f, I.Ki]
    }), u;
  })();
});
