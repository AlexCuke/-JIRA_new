// Extracted from main; webpack module 62104. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    G: () => h,
    V: () => x
  });
  var E,
    t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(37933),
    d = i(59250),
    M = i(64248),
    b = i(44348),
    A = i(85273),
    N = i(41089),
    I = i(15635),
    O = i(41742),
    L = i(99246),
    C = i(46757),
    v = i(39300),
    f = i(9073);
  let h = E = class extends b.zH {
    constructor(T, R, B, y, j) {
      super(R, void 0, j), this.origin = T, this.changeDetectorRef = R, this.ngZone = B, this.button = y, this.ngControl = j, this.compareFn = A.kX, this.displayValueFn = W => W ? String(W) : "", this.controlChange.pipe((0, m.t)(this)).subscribe(() => {
        this.dropdown?.close(), this.updateButtonText(this.model);
      });
    }
    get listHostOrigin() {
      return this.origin;
    }
    ngAfterContentInit() {
      N.V.observeFocus((0, I.Nj)(this.origin)).pipe((0, v.h)(T => T.type === A.fJ), (0, O.hx)(this.ngZone)).subscribe(() => this.dropdown?.close());
    }
    keydownEvent(T) {
      this.dropdown && M.i.handleKeyboard(T, this.dropdown);
    }
    incomingUpdate(T) {
      super.incomingUpdate(T), this.updateButtonText(T);
    }
    updateButtonText(T) {
      this.button?.setText(this.displayValueFn(T));
    }
  };
  h.ɵfac = function (T) {
    return new (T || h)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(f.mc, 10), e.Y36(a.a5, 10));
  }, h.ɵdir = e.lG2({
    type: h,
    selectors: [["", "luDropdownButton", ""]],
    contentQueries: function (T, R, B) {
      if (1 & T && e.Suo(B, d.$, 5), 2 & T) {
        let y;
        e.iGM(y = e.CRH()) && (R.dropdown = y.first);
      }
    },
    hostBindings: function (T, R) {
      1 & T && e.NdJ("keydown", function (y) {
        return R.keydownEvent(y);
      });
    },
    inputs: {
      compareFn: "compareFn",
      displayValueFn: "displayValueFn"
    },
    exportAs: ["luDropdownButton"],
    features: [e._Bn([{
      provide: L.fU,
      useExisting: E
    }, {
      provide: L.Oc,
      useValue: C.Ls.PRIMITIVE
    }, {
      provide: L.N4,
      useExisting: E
    }, {
      provide: L.bD,
      useValue: !1
    }, {
      provide: b.Mn,
      useExisting: E
    }, {
      provide: b.Vg,
      useExisting: E
    }]), e.qOj]
  }), h = E = (0, t.gn)([(0, m.c)()], h);
  let x = (() => {
    class u {}
    return u.ɵfac = function (R) {
      return new (R || u)();
    }, u.ɵmod = e.oAB({
      type: u
    }), u.ɵinj = e.cJS({}), u;
  })();
});
