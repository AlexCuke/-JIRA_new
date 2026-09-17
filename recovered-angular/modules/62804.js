// Extracted from main; webpack module 62804. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Fj: () => fe,
    HY: () => ae,
    LA: () => Y,
    kH: () => J
  });
  var t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(13700),
    d = i(99246),
    M = i(44348),
    b = i(34304),
    A = i(41089),
    N = i(36895),
    I = i(28353),
    O = i(35650),
    L = i(86168),
    C = i(89740),
    v = i(19550),
    f = i(93278),
    E = i(38666);
  const h = ["contentEditable"];
  function x(G, te) {
    if (1 & G && (e.ynx(0), e._uU(1), e.BQk()), 2 & G) {
      const pe = te.polymorpheusOutlet;
      e.xp6(1), e.hij(" ", pe, " ");
    }
  }
  function u(G, te) {
    if (1 & G && (e.TgZ(0, "div", 11)(1, "div", 12), e.YNc(2, x, 2, 1, "ng-container", 13), e.qZA()()), 2 & G) {
      const pe = e.oxw();
      e.xp6(2), e.Q6J("polymorpheusOutlet", pe.blurContent)("polymorpheusOutletContext", pe.getBlurContext(pe.blurContext));
    }
  }
  function T(G, te) {
    if (1 & G && (e.ynx(0), e._uU(1), e.BQk()), 2 & G) {
      const pe = te.polymorpheusOutlet;
      e.xp6(1), e.Oqu(pe);
    }
  }
  function R(G, te) {
    if (1 & G && (e.TgZ(0, "span", 14), e.YNc(1, T, 2, 1, "ng-container", 15), e.Hsn(2, 1), e.qZA()), 2 & G) {
      const pe = e.oxw();
      e.xp6(1), e.Q6J("polymorpheusOutlet", pe.leftContent);
    }
  }
  function B(G, te) {
    1 & G && e._UZ(0, "span", 16);
  }
  function y(G, te) {
    1 & G && e._UZ(0, "span", 17);
  }
  function j(G, te) {
    if (1 & G) {
      const pe = e.EpF();
      e.TgZ(0, "button", 18), e.NdJ("click", function () {
        e.CHM(pe);
        const le = e.oxw();
        return e.KtG(le.clear());
      }), e._UZ(1, "lu-svg-icon", 19), e.qZA();
    }
    if (2 & G) {
      const pe = e.oxw();
      e.Q6J("tabIndex", -1)("disabled", pe.disabled);
    }
  }
  function W(G, te) {
    if (1 & G && (e.ynx(0), e._uU(1), e.BQk()), 2 & G) {
      const pe = te.polymorpheusOutlet;
      e.xp6(1), e.Oqu(pe);
    }
  }
  function F(G, te) {
    if (1 & G && (e.TgZ(0, "span", 14), e.YNc(1, W, 2, 1, "ng-container", 15), e.Hsn(2, 2), e.qZA()), 2 & G) {
      const pe = e.oxw();
      e.xp6(1), e.Q6J("polymorpheusOutlet", pe.rightContent);
    }
  }
  const Le = ["*", [["", "luInputWrapperBefore", ""]], [["", "luInputWrapperAfter", ""]]];
  let J = (() => {
      class G {}
      return G.ɵfac = function (pe) {
        return new (pe || G)();
      }, G.ɵdir = e.lG2({
        type: G,
        selectors: [["", "luInputWrapperBefore", ""]]
      }), G;
    })(),
    fe = (() => {
      class G {}
      return G.ɵfac = function (pe) {
        return new (pe || G)();
      }, G.ɵdir = e.lG2({
        type: G,
        selectors: [["", "luInputWrapperAfter", ""]]
      }), G;
    })();
  var ye;
  let ae = ye = class {
    constructor(te, pe, be) {
      this.elementRef = te, this.changeDetectorRef = pe, this.controlHost = be, this.afterClear = new e.vpe(), this.blurContent = "", this.blurContext = null, this.highlight = !0, this.clearButton = !1, this.leftContent = "", this.rightContent = "", this.align = "left", this.inputControl = null;
    }
    ngAfterContentInit() {
      if (this.controlHost && !this.inputControl) throw M.vE.error("Вы должны использовать одну из директив\n\t\t\tдля input тега которая реализует токен LU_INPUT_CONTROL к примеру luInputString, luInputNumber, luInputDate для корректной работы input поля");
      this.inputControl && this.inputControl.valueChange.pipe((0, a.t)(this)).subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
    }
    onFocusIn() {
      this.changeDetectorRef.markForCheck();
    }
    onFocusOut() {
      this.changeDetectorRef.markForCheck();
    }
    onInput() {
      this.changeDetectorRef.markForCheck();
    }
    getBlurContext(te) {
      return {
        $implicit: te
      };
    }
    get disabled() {
      return !!this.inputControl?.disabled || "true" === this.contentEditable?.nativeElement?.dataset.luDisabled;
    }
    get inputHasValue() {
      return !!this.inputControl?.hasValue;
    }
    clear() {
      this.inputControl?.writeValue(null), this.inputControl?.updateModel(null), this.afterClear.emit(), setTimeout(() => this.changeDetectorRef.detectChanges());
    }
    get blurContentIsVisible() {
      return !!this.blurContent && (!this.input?.isFocused || this.input?.isReadonly);
    }
  };
  ae.ɵfac = function (te) {
    return new (te || ae)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(d.fU, 8));
  }, ae.ɵcmp = e.Xpm({
    type: ae,
    selectors: [["lu-input-wrapper"]],
    contentQueries: function (te, pe, be) {
      if (1 & te && (e.Suo(be, m.L, 5), e.Suo(be, J, 5), e.Suo(be, fe, 5), e.Suo(be, d.kK, 5), e.Suo(be, h, 7, e.SBq)), 2 & te) {
        let le;
        e.iGM(le = e.CRH()) && (pe.input = le.first), e.iGM(le = e.CRH()) && (pe.beforeContent = le.first), e.iGM(le = e.CRH()) && (pe.afterContent = le.first), e.iGM(le = e.CRH()) && (pe.inputControl = le.first), e.iGM(le = e.CRH()) && (pe.contentEditable = le.first);
      }
    },
    viewQuery: function (te, pe) {
      if (1 & te && e.Gf(A.V, 7), 2 & te) {
        let be;
        e.iGM(be = e.CRH()) && (pe.focusCatcher = be.first);
      }
    },
    hostVars: 2,
    hostBindings: function (te, pe) {
      1 & te && e.NdJ("focusin", function () {
        return pe.onFocusIn();
      })("focusout", function () {
        return pe.onFocusOut();
      })("input", function () {
        return pe.onInput();
      }), 2 & te && e.uIk("data-lu-align", pe.align)("data-lu-input-disabled", pe.disabled);
    },
    inputs: {
      blurContent: "blurContent",
      blurContext: "blurContext",
      highlight: "highlight",
      clearButton: "clearButton",
      leftContent: "leftContent",
      rightContent: "rightContent",
      align: "align"
    },
    outputs: {
      afterClear: "afterClear"
    },
    features: [e._Bn([{
      provide: M.eV,
      useExisting: ye
    }])],
    ngContentSelectors: ["*", "[luInputWrapperBefore]", "[luInputWrapperAfter]"],
    decls: 14,
    vars: 10,
    consts: [["luFocusCatcher", ""], ["focusCatcher", "luFocusCatcher"], [1, "lu-input-container"], ["inputContainer", ""], ["class", "lu-blur-container lu-input", 4, "ngIf"], ["lu-floated-content", "", "propertyName", "--lu-input-padding-left", "align", "left", 1, "lu-floated-content", 3, "bindTo"], ["class", "lu-content", 4, "ngIf"], ["class", "lu-highlight -left", 4, "ngIf"], ["lu-floated-content", "", "propertyName", "--lu-input-padding-right", "align", "right", 1, "lu-floated-content", 3, "bindTo"], ["class", "lu-highlight -right", 4, "ngIf"], ["type", "button", "lu-button-icon", "", "color", "black", "colorType", "light", 3, "tabIndex", "disabled", "click", 4, "ngIf"], [1, "lu-blur-container", "lu-input"], [1, "lu-blur-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "lu-content"], [4, "polymorpheusOutlet"], [1, "lu-highlight", "-left"], [1, "lu-highlight", "-right"], ["type", "button", "lu-button-icon", "", "color", "black", "colorType", "light", 3, "tabIndex", "disabled", "click"], ["icon", "close", "size", "16"]],
    template: function (te, pe) {
      if (1 & te && (e.F$t(Le), e.TgZ(0, "lu-wrapper", 0, 1)(2, "lu-floated-border")(3, "div", 2, 3), e.Hsn(5), e.YNc(6, u, 3, 2, "div", 4), e.qZA(), e.TgZ(7, "div", 5), e.YNc(8, R, 3, 1, "span", 6), e.YNc(9, B, 1, 0, "span", 7), e.qZA(), e.TgZ(10, "div", 8), e.YNc(11, y, 1, 0, "span", 9), e.YNc(12, j, 2, 2, "button", 10), e.YNc(13, F, 3, 1, "span", 6), e.qZA()()()), 2 & te) {
        const be = e.MAs(1),
          le = e.MAs(4);
        e.xp6(3), e.ekj("-input-hidden", pe.blurContentIsVisible), e.xp6(3), e.Q6J("ngIf", pe.blurContentIsVisible), e.xp6(1), e.Q6J("bindTo", le), e.xp6(1), e.Q6J("ngIf", pe.beforeContent || pe.leftContent), e.xp6(1), e.Q6J("ngIf", ("right" === pe.align || "center" === pe.align) && pe.highlight && !be.focused), e.xp6(1), e.Q6J("bindTo", le), e.xp6(1), e.Q6J("ngIf", ("left" === pe.align || "center" === pe.align) && pe.highlight && !be.focused), e.xp6(1), e.Q6J("ngIf", pe.inputHasValue && pe.clearButton), e.xp6(1), e.Q6J("ngIf", pe.afterContent || pe.rightContent);
      }
    },
    dependencies: [N.O5, I.U, O.I, L.c, A.V, C.Li, v.k, f.q],
    styles: ["[_nghost-%COMP%]{position:relative;display:block;width:var(--lu-input-width);height:var(--lu-input-height)}[_nghost-%COMP%]:hover:not([data-lu-input-disabled=true]){--lu-input-border-color: var(--lu-input-border-hover-color)}[_nghost-%COMP%]:not([data-lu-input-disabled=true])     .lu-input:read-only{--lu-input-cursor: pointer}[data-lu-align=left][_nghost-%COMP%]{--lu-input-text-align: left}[data-lu-align=center][_nghost-%COMP%]{--lu-input-text-align: center}[data-lu-align=right][_nghost-%COMP%]{--lu-input-text-align: right}[data-lu-input-disabled=true][_nghost-%COMP%]{--lu-input-background-color: var(--lu-disabled-background);--lu-input-border-color: var(--lu-black-20);--lu-text-color: var(--lu-black-40)}[_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;width:var(--lu-input-width);height:var(--lu-input-height);background-color:var(--lu-input-background-color);--lu-line-height: 22px}[_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:0;top:0;z-index:2;width:100%;height:100%;border:var(--lu-input-border-size) solid var(--lu-input-border-color);pointer-events:none}[_nghost-%COMP%]   .lu-input-container.-input-hidden[_ngcontent-%COMP%]     input{opacity:0}[_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]   .lu-input[_ngcontent-%COMP%], [_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]     .lu-input{width:100%;height:100%;overflow:hidden;padding:var(--lu-base-gutter) var(--lu-input-padding-right) var(--lu-base-gutter) var(--lu-input-padding-left);box-sizing:border-box;outline:none;text-align:var(--lu-input-text-align);border:0;cursor:var(--lu-input-cursor);mix-blend-mode:darken;font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}[_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]   .lu-input[_ngcontent-%COMP%]::placeholder, [_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]     .lu-input::placeholder{color:var(--lu-black-40)}[_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]   .lu-input[_ngcontent-%COMP%]::selection, [_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]     .lu-input::selection{background:rgba(var(--lu-primary-rgb),.2)}[_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]   .lu-input.-blink[_ngcontent-%COMP%], [_nghost-%COMP%]   .lu-input-container[_ngcontent-%COMP%]     .lu-input.-blink{animation:_ngcontent-%COMP%_blink-animation .3s}@keyframes _ngcontent-%COMP%_blink-animation{0%{background-color:rgba(var(--lu-primary-rgb),.1)}to{background-color:initial}}[_nghost-%COMP%]   .lu-content[_ngcontent-%COMP%]    >lu-svg-icon{width:40px;height:40px}lu-floated-border[_ngcontent-%COMP%]{width:var(--lu-input-width);height:var(--lu-input-height)}.lu-floated-content[_ngcontent-%COMP%]{min-width:calc(var(--lu-base-gutter) * 2)}.lu-highlight[_ngcontent-%COMP%]{position:absolute;width:calc(var(--lu-base-gutter) * 2);height:calc(100% - 2px);pointer-events:none}.lu-highlight.-left[_ngcontent-%COMP%]{right:calc(var(--lu-base-gutter) * 2 * -1);background:linear-gradient(to left,rgba(255,255,255,0) 0%,var(--lu-input-background-color) 100%)}.lu-highlight.-right[_ngcontent-%COMP%]{left:calc(var(--lu-base-gutter) * 2 * -1);background:linear-gradient(to right,rgba(255,255,255,0) 0%,var(--lu-input-background-color) 100%)}.lu-button-content[_ngcontent-%COMP%]{display:flex}.lu-blur-container[_ngcontent-%COMP%]{position:absolute;left:0;top:0;pointer-events:none}.lu-blur-container[_ngcontent-%COMP%]   .lu-blur-content[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden}"],
    changeDetection: 0
  }), (0, t.gn)([b.J], ae.prototype, "getBlurContext", null), ae = ye = (0, t.gn)([(0, a.c)()], ae);
  let Y = (() => {
    class G {}
    return G.ɵfac = function (pe) {
      return new (pe || G)();
    }, G.ɵmod = e.oAB({
      type: G
    }), G.ɵinj = e.cJS({
      imports: [N.ez, I.c, O.S, L.A, A.T, E.y, C.wq, v.o, f.h]
    }), G;
  })();
});
