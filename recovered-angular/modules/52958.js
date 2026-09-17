// Extracted from main; webpack module 52958. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    R: () => T,
    l: () => u
  });
  var h,
    t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(58435),
    d = i(15635),
    M = i(44348),
    b = i(37372),
    A = i(8391),
    N = i(99246),
    I = i(34304),
    O = i(28642),
    L = i(1371),
    C = i(85273),
    v = i(98781),
    f = i(4326),
    E = i(95698);
  let x = 0,
    u = h = class extends M.Fe {
      constructor(B, y, j, W, F, Le, ke, J, fe, ye) {
        super(y, fe, J), this.elementRef = B, this.changeDetectorRef = y, this.overlayService = j, this.viewContainerRef = W, this.overlayScrollStrategy = F, this.locale = Le, this.renderer = ke, this.ngControl = J, this.host = fe, this.inputHandler = ye, this.min = null, this.max = null, this.overlayId = "lu-overlay-" + ++x, this.tooltipRef = null, this.regExp = /^([-]?)?([0-9]+)?([.,]?)?([0-9]+)?$/, this.value = "", (0, O.Rx)(this.elementRef.nativeElement, ye).pipe((0, m.t)(this)).subscribe(ae => {
          if (this.validateInput(ae)) {
            this.value = ae.replace(",", ".");
            const Y = this.convert(this.value);
            this.validate(Y), this.updateModel(Y);
          } else this.blink(), this.elementRef.nativeElement.value = this.value.replace(/\s/g, "");
        });
      }
      validateInput(B) {
        const y = B.replace(/\s/g, "");
        return !B || this.regExp.test(y);
      }
      incomingUpdate(B) {
        const y = (0, d.EN)(B) ? String(B) : "";
        (0, d.Nj)(this.elementRef).value = y, this.inputHandler?.setInputValue(y), this.ngControl?.control?.valueChanges.pipe((0, f.g)(1), (0, E.q)(1)).subscribe(j => {
          const W = null === j ? "" : String(j);
          (0, d.Nj)(this.elementRef).value = W, this.inputHandler?.setInputValue(W);
        });
      }
      blurEvent() {
        this.onTouched(), this.showTooltip(null);
      }
      convert(B) {
        return (0, d.Uh)(B) ? this.inputHandler?.toNumber ? this.inputHandler?.toNumber(B) : Number(B) : null;
      }
      validate(B) {
        (0, d.EN)(B) && ((0, d.EN)(this.min) && this.min > B ? this.showTooltip(this.locale.getTranslation("LuInputNumber.minMessage", {
          value: this.min
        }) || "") : (0, d.EN)(this.max) && this.max < B ? this.showTooltip(this.locale.getTranslation("LuInputNumber.maxMessage", {
          value: this.max
        }) || "") : this.showTooltip(null));
      }
      showTooltip(B) {
        this.tooltipRef?.close(), (0, d.EN)(B) && (this.tooltipRef = this.overlayService.open(B, {
          overlayId: this.overlayId,
          origin: this.elementRef,
          overlayContainer: v.e,
          viewContainerRef: this.viewContainerRef,
          positionStrategy: this.overlayService.connectedPositionStrategy(this.elementRef, ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right", "right-center", "left-center"]),
          panelClass: C.RK,
          withPointer: !0,
          contactBorder: !0,
          disposeOnRouteNavigation: !0,
          scrollStrategy: this.overlayScrollStrategy,
          openAnimation: L.YN,
          closeAnimation: L.ni
        }));
      }
      blink() {
        this.renderer.removeClass(this.elementRef.nativeElement, "-blink"), this.renderer.addClass(this.elementRef.nativeElement, "-blink");
      }
    };
  u.ɵfac = function (B) {
    return new (B || u)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(b.c), e.Y36(e.s_b), e.Y36(M.Dx), e.Y36(A.oo), e.Y36(e.Qsj), e.Y36(a.a5, 10), e.Y36(N.fU, 8), e.Y36(M.fc, 8));
  }, u.ɵdir = e.lG2({
    type: u,
    selectors: [["input", "luInputNumber", ""]],
    hostVars: 1,
    hostBindings: function (B, y) {
      1 & B && e.NdJ("blur", function () {
        return y.blurEvent();
      }), 2 & B && e.uIk("data-lu-overlay-id", y.overlayId);
    },
    inputs: {
      min: "min",
      max: "max"
    },
    features: [e._Bn([{
      provide: N.BU,
      useExisting: h
    }, {
      provide: N.kK,
      useExisting: h
    }, b.c]), e.qOj]
  }), (0, t.gn)([I.J], u.prototype, "showTooltip", null), u = h = (0, t.gn)([(0, m.c)()], u);
  let T = (() => {
    class R {}
    return R.ɵfac = function (y) {
      return new (y || R)();
    }, R.ɵmod = e.oAB({
      type: R
    }), R.ɵinj = e.cJS({
      imports: [b.H]
    }), R;
  })();
});
