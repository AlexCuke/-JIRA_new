// Extracted from main; webpack module 13207. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => E,
    k: () => f
  });
  var v,
    t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(99246),
    d = i(58435),
    M = i(44348),
    b = i(46757),
    A = i(15635),
    N = i(85273),
    I = i(41742),
    O = i(41089),
    L = i(36895);
  let f = v = class extends M.DA {
    constructor(x, u, T, R, B, y, j, W, F) {
      super(x, y, W, j, R), this.changeDetectorRef = x, this.elementRef = u, this.ngZone = T, this.multiOption = R, this.selectorBehavior = B, this.compareHost = y, this.ngControl = j, this.host = W, this.controlStateHost = F, this.selectable = !0, this.size = "medium", this.onClick = new e.vpe(), this.hover = new e.vpe(), this.blur = new e.vpe(), this.hovered = !1, this.index = -1, O.V.observeFocus((0, A.Nj)(this.elementRef)).pipe((0, I.hx)(this.ngZone), (0, d.t)(this)).subscribe(Le => Le.type === N.N4 ? this.hover.emit() : this.blur.emit()), this.elementRef?.nativeElement?.setAttribute("data-test-role", "clickableElement");
    }
    get state() {
      return this.isSelected ? this.controlStateHost?.state ?? null : null;
    }
    click(x) {
      this.disabled ? x.stopPropagation() : this.onClick.emit(this);
    }
    selectByUser() {
      this.selectable && (this.multiOption || this.selectorBehavior === b.kx.CHECKBOX ? this.toggle() : this.select());
    }
    get tabIndex() {
      return this.disabled ? -1 : 0;
    }
    get isSelected() {
      return !!this.checked;
    }
    get listItemOrigin() {
      return this.elementRef;
    }
    setActiveStyles() {
      this.hovered = !0, this.hover.emit(), this.changeDetectorRef.markForCheck();
    }
    setInactiveStyles() {
      this.hovered = !1, this.blur.emit(), this.changeDetectorRef.markForCheck();
    }
    blurEvent() {
      this.onTouched();
    }
  };
  f.ɵfac = function (x) {
    return new (x || f)(e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(e.R0b), e.Y36(m.pP, 8), e.Y36(m.od, 8), e.Y36(M.Vg, 8), e.Y36(a.a5, 10), e.Y36(m.fU, 8), e.Y36(M.Qe, 8));
  }, f.ɵcmp = e.Xpm({
    type: f,
    selectors: [["lu-option"]],
    hostVars: 5,
    hostBindings: function (x, u) {
      1 & x && e.NdJ("click", function () {
        return u.selectByUser();
      })("keydown.enter", function () {
        return u.selectByUser();
      })("blur", function () {
        return u.blurEvent();
      }), 2 & x && e.uIk("data-lu-size", u.size)("data-lu-hovered", u.hovered)("data-lu-option-state", u.state)("tabIndex", u.tabIndex)("data-lu-selected", u.isSelected);
    },
    inputs: {
      selectable: "selectable",
      size: "size",
      index: "index"
    },
    outputs: {
      onClick: "onClick",
      hover: "hover",
      blur: "blur"
    },
    features: [e._Bn([{
      provide: m.BU,
      useExisting: v
    }, {
      provide: M.qE,
      useExisting: v
    }]), e.qOj],
    ngContentSelectors: ["*"],
    decls: 1,
    vars: 0,
    template: function (x, u) {
      1 & x && (e.F$t(), e.Hsn(0));
    },
    styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:block;flex-direction:row;cursor:pointer;width:100%;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);--lu-line-height: 22px;--lu-option-hover: rgba(var(--lu-primary-rgb), .1);--lu-option-selected: rgba(var(--lu-primary-rgb), .2);--lu-option-disabled: rgba(0, 0, 0, .05);margin:var(--lu-option-margin)}[_nghost-%COMP%]:before{position:absolute;content:\"\";left:0;top:0;width:100%;height:100%;background-color:transparent;z-index:0}[_nghost-%COMP%]:hover:before, [_nghost-%COMP%]:focus:before, [data-lu-hovered=true][_nghost-%COMP%]:before{background-color:var(--lu-option-hover)}[disabled][_nghost-%COMP%]{background:var(--lu-option-disabled);pointer-events:none;--lu-text-color: rgba(51, 51, 51, .4)}[data-lu-selected=true][_nghost-%COMP%]{background-color:var(--lu-option-selected)}[data-lu-size=small][_nghost-%COMP%]{padding:5px calc(var(--lu-base-gutter) * 2)}[data-lu-option-state=error][_nghost-%COMP%]{background-color:rgba(var(--lu-red-rgb-100),.3)}[data-lu-option-state=warning][_nghost-%COMP%]{background-color:rgba(var(--lu-orange-rgb-100),.3)}"],
    changeDetection: 0
  }), f = v = (0, t.gn)([(0, d.c)()], f);
  let E = (() => {
    class h {}
    return h.ɵfac = function (u) {
      return new (u || h)();
    }, h.ɵmod = e.oAB({
      type: h
    }), h.ɵinj = e.cJS({
      imports: [L.ez]
    }), h;
  })();
});
