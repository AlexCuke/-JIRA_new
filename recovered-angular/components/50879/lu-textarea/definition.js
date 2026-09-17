// Exact compiled component metadata; references belong to modules/50879.js
({
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
});
