// Extracted from main; webpack module 97396. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    D: () => u,
    o: () => T
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(37933),
    d = i(36454),
    M = i(59250),
    b = i(41089),
    A = i(44348),
    N = i(99246),
    I = i(46757),
    O = i(11848),
    L = i(54968),
    C = i(63900),
    v = i(64248),
    f = i(36895);
  const E = ["origin"];
  var x;
  let u = x = class extends A.zH {
    constructor(B, y, j, W) {
      super(B, j, W), this.changeDetectorRef = B, this.ngZone = y, this.controlHost = j, this.ngControl = W, this.size = "small", this.positions = ["bottom-left", "top-left", "left-top", "right-top"], this.borderOffset = 1;
    }
    ngAfterContentInit() {
      this.dropdown?.afterOpen.pipe((0, C.w)(() => this.calendar?.valueChange || O.C), (0, m.t)(this)).subscribe(() => this.dropdown?.close());
      const B = this.origin?.nativeElement.querySelector("input");
      B && (0, L.R)(B, "click").pipe((0, m.t)(this)).subscribe(() => {
        this.open();
      });
    }
    open() {
      this.disabled || this.dropdown?.open();
    }
    onBlur() {
      this.dropdown?.close(), this.onTouched();
    }
  };
  u.ɵfac = function (B) {
    return new (B || u)(e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(N.fU, 12), e.Y36(a.a5, 10));
  }, u.ɵcmp = e.Xpm({
    type: u,
    selectors: [["lu-calendar-field-host"]],
    contentQueries: function (B, y, j) {
      if (1 & B && (e.Suo(j, M.$, 5), e.Suo(j, d.N_, 5)), 2 & B) {
        let W;
        e.iGM(W = e.CRH()) && (y.dropdown = W.first), e.iGM(W = e.CRH()) && (y.calendar = W.first);
      }
    },
    viewQuery: function (B, y) {
      if (1 & B && e.Gf(E, 7, e.SBq), 2 & B) {
        let j;
        e.iGM(j = e.CRH()) && (y.origin = j.first);
      }
    },
    hostVars: 1,
    hostBindings: function (B, y) {
      2 & B && e.uIk("data-lu-size", y.size);
    },
    inputs: {
      size: "size"
    },
    features: [e._Bn([{
      provide: N.fU,
      useExisting: x
    }, {
      provide: N.Oc,
      useValue: I.Ls.PRIMITIVE
    }, {
      provide: N.N4,
      useExisting: x
    }]), e.qOj],
    ngContentSelectors: ["*"],
    decls: 3,
    vars: 1,
    consts: [["luFocusCatcher", "", 1, "lu-calendar-field-host", 3, "luDropdownHandler", "blurEvent"], ["origin", ""]],
    template: function (B, y) {
      1 & B && (e.F$t(), e.TgZ(0, "label", 0, 1), e.NdJ("blurEvent", function () {
        return y.onBlur();
      }), e.Hsn(2), e.qZA()), 2 & B && e.Q6J("luDropdownHandler", y.dropdown);
    },
    dependencies: [b.V, v.i],
    styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;flex-shrink:0}[data-lu-size=small][_nghost-%COMP%]{--lu-input-width: 144px}[data-lu-size=medium][_nghost-%COMP%]{--lu-input-width: 168px}[data-lu-size=large][_nghost-%COMP%]{--lu-input-width: 200px}[data-lu-size=extra-large][_nghost-%COMP%]{--lu-input-width: 232px}.lu-calendar-field-host[_ngcontent-%COMP%]{display:inline-block}"],
    changeDetection: 0
  }), u = x = (0, t.gn)([(0, m.c)()], u);
  let T = (() => {
    class R {}
    return R.ɵfac = function (y) {
      return new (y || R)();
    }, R.ɵmod = e.oAB({
      type: R
    }), R.ɵinj = e.cJS({
      imports: [f.ez, b.T, v.Y]
    }), R;
  })();
});
