// Extracted from main; webpack module 11313. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    R: () => B,
    b: () => y
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(37933),
    d = i(36454),
    M = i(87995),
    b = i(26979),
    A = i(59250),
    N = i(41089),
    I = i(44348),
    O = i(99246),
    L = i(46757),
    C = i(11848),
    v = i(56451),
    f = i(63900),
    E = i(69718),
    h = i(64248),
    x = i(36895);
  const u = ["origin"];
  var R;
  let B = R = class extends I.zH {
    constructor(W, F, Le, ke) {
      super(W, Le, ke), this.changeDetectorRef = W, this.ngZone = F, this.controlHost = Le, this.ngControl = ke, this.size = "small", this.selectionState = null, this.borderOffset = 1;
    }
    ngAfterContentInit() {
      this.dropdown?.afterOpen.pipe((0, f.w)(() => this.calendar?.endDateChange || C.C), (0, m.t)(this)).subscribe(() => this.dropdown?.close()), (0, v.T)((this.from?.inputWrapper?.focusCatcher?.focusEvent.asObservable() || C.C).pipe((0, E.h)("start-editing")), (this.to?.inputWrapper?.focusCatcher?.focusEvent.asObservable() || C.C).pipe((0, E.h)("end-editing")), (this.dropdown?.afterOpen.asObservable() || C.C).pipe((0, f.w)(() => this.calendar?.startDateChange || C.C), (0, E.h)("end-editing")), (this.focusCatcher?.blurEvent.asObservable() || C.C).pipe((0, E.h)(null))).pipe((0, m.t)(this)).subscribe(W => this.selectionState = W), (0, v.T)(this.from?.mask?.focusNext?.asObservable() || C.C, this.from?.mask?.completed?.asObservable() || C.C).pipe((0, m.t)(this)).subscribe(() => {
        this.to?.mask?.focus({
          start: 0,
          end: 0
        });
      }), this.to?.mask?.focusPrevious.pipe((0, m.t)(this)).subscribe(() => {
        const W = this.from?.mask?.inputValue.length || 0;
        this.from?.mask?.focus({
          start: W,
          end: W
        });
      });
    }
    open() {
      this.disabled || this.dropdown?.open();
    }
    get positions() {
      return [{
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top",
        offsetX: this.offsetX
      }, {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom",
        offsetX: this.offsetX
      }];
    }
    get width() {
      return (this.origin?.nativeElement.offsetWidth || 0) - this.offsetX;
    }
    get offsetX() {
      return "horizontal" === this.from?.label?.orientation && this.from?.label?.labelElement?.nativeElement.offsetWidth || 0;
    }
  };
  B.ɵfac = function (W) {
    return new (W || B)(e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(O.fU, 12), e.Y36(a.a5, 10));
  }, B.ɵcmp = e.Xpm({
    type: B,
    selectors: [["lu-calendar-period-host"]],
    contentQueries: function (W, F, Le) {
      if (1 & W && (e.Suo(Le, A.$, 5), e.Suo(Le, d.N_, 5), e.Suo(Le, M.n, 5), e.Suo(Le, b.W, 5)), 2 & W) {
        let ke;
        e.iGM(ke = e.CRH()) && (F.dropdown = ke.first), e.iGM(ke = e.CRH()) && (F.calendar = ke.first), e.iGM(ke = e.CRH()) && (F.from = ke.first), e.iGM(ke = e.CRH()) && (F.to = ke.first);
      }
    },
    viewQuery: function (W, F) {
      if (1 & W && (e.Gf(u, 7, e.SBq), e.Gf(N.V, 7)), 2 & W) {
        let Le;
        e.iGM(Le = e.CRH()) && (F.origin = Le.first), e.iGM(Le = e.CRH()) && (F.focusCatcher = Le.first);
      }
    },
    hostVars: 2,
    hostBindings: function (W, F) {
      2 & W && e.uIk("data-lu-size", F.size)("data-lu-selection-state", F.selectionState);
    },
    inputs: {
      size: "size"
    },
    features: [e._Bn([{
      provide: O.fU,
      useExisting: R
    }, {
      provide: O.Oc,
      useValue: L.Ls.PRIMITIVE
    }, {
      provide: O.N4,
      useExisting: R
    }]), e.qOj],
    ngContentSelectors: ["*"],
    decls: 3,
    vars: 1,
    consts: [["luFocusCatcher", "", 1, "lu-calendar-period", 3, "luDropdownHandler", "focusEvent", "click", "blurEvent"], ["origin", ""]],
    template: function (W, F) {
      1 & W && (e.F$t(), e.TgZ(0, "div", 0, 1), e.NdJ("focusEvent", function () {
        return F.open();
      })("click", function () {
        return F.open();
      })("blurEvent", function () {
        return null == F.dropdown ? null : F.dropdown.close();
      }), e.Hsn(2), e.qZA()), 2 & W && e.Q6J("luDropdownHandler", F.dropdown);
    },
    dependencies: [N.V, h.i],
    styles: ["[_nghost-%COMP%]{display:inline-block;flex-shrink:0;--lu-calendar-period-from-border: var(--lu-floated-border);--lu-calendar-period-to-border: var(--lu-floated-border)}[data-lu-selection-state=start-editing][_nghost-%COMP%]{--lu-calendar-period-from-border: var(--lu-focus)}[data-lu-selection-state=end-editing][_nghost-%COMP%]{--lu-calendar-period-to-border: var(--lu-focus)}[data-lu-size=small][_nghost-%COMP%]{--lu-input-width: 144px}[data-lu-size=medium][_nghost-%COMP%]{--lu-input-width: 168px}.lu-calendar-period[_ngcontent-%COMP%]{display:inline-flex}.lu-calendar-period[_ngcontent-%COMP%]     lu-calendar-period-to .lu-label{padding-left:var(--lu-base-gutter)}.lu-calendar-period[_ngcontent-%COMP%]     .lu-label{padding-right:var(--lu-base-gutter)!important}"],
    changeDetection: 0
  }), B = R = (0, t.gn)([(0, m.c)()], B);
  let y = (() => {
    class j {}
    return j.ɵfac = function (F) {
      return new (F || j)();
    }, j.ɵmod = e.oAB({
      type: j
    }), j.ɵinj = e.cJS({
      imports: [x.ez, N.T, h.Y]
    }), j;
  })();
});
