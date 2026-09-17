// Extracted from main; webpack module 26350. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    F: () => L,
    T: () => O
  });
  var I,
    t = i(97582),
    e = i(94650),
    a = i(37933),
    m = i(19550),
    d = i(93278),
    M = i(44348),
    b = i(99246),
    A = i(36895);
  function N(C, v) {
    if (1 & C) {
      const f = e.EpF();
      e.TgZ(0, "button", 1), e.NdJ("click", function () {
        e.CHM(f);
        const h = e.oxw();
        return e.KtG(h.clear());
      })("focusout", function () {
        e.CHM(f);
        const h = e.oxw();
        return e.KtG(h.onTouched());
      }), e._UZ(1, "lu-svg-icon", 2), e.qZA();
    }
    if (2 & C) {
      const f = e.oxw();
      e.Q6J("tabIndex", -1)("disabled", f.disabled), e.xp6(1), e.Q6J("size", 16);
    }
  }
  let O = I = class extends M.Fe {
    constructor(v, f, E) {
      super(v, f), this.changeDetectorRef = v, this.host = f, this.inputHost = E;
    }
    ngAfterContentInit() {
      this.inputHost?.inputControl && this.inputHost.inputControl.valueChange.pipe((0, a.t)(this)).subscribe(() => this.changeDetectorRef.detectChanges());
    }
    clear() {
      this.inputHost?.inputControl?.writeValueFromHost(null), this.updateModel(null);
    }
    clearIsVisible() {
      return this.inputHost?.inputControl?.hasValue || this.hasValue;
    }
    incomingUpdate() {}
  };
  O.ɵfac = function (v) {
    return new (v || O)(e.Y36(e.sBO), e.Y36(b.fU), e.Y36(M.eV, 8));
  }, O.ɵcmp = e.Xpm({
    type: O,
    selectors: [["lu-clear-control"]],
    features: [e._Bn([{
      provide: b.BU,
      useExisting: I
    }]), e.qOj],
    decls: 1,
    vars: 1,
    consts: [["lu-button-icon", "", "color", "black", "colorType", "light", "type", "button", 3, "tabIndex", "disabled", "click", "focusout", 4, "ngIf"], ["lu-button-icon", "", "color", "black", "colorType", "light", "type", "button", 3, "tabIndex", "disabled", "click", "focusout"], ["icon", "close", 3, "size"]],
    template: function (v, f) {
      1 & v && e.YNc(0, N, 2, 3, "button", 0), 2 & v && e.Q6J("ngIf", f.clearIsVisible());
    },
    dependencies: [A.O5, m.k, d.q],
    styles: ["[_nghost-%COMP%]{display:inline-block}button[_ngcontent-%COMP%]{max-width:var(--lu-clear-control-width, 100%)}"],
    changeDetection: 0
  }), O = I = (0, t.gn)([(0, a.c)()], O);
  let L = (() => {
    class C {}
    return C.ɵfac = function (f) {
      return new (f || C)();
    }, C.ɵmod = e.oAB({
      type: C
    }), C.ɵinj = e.cJS({
      imports: [A.ez, m.o, d.h]
    }), C;
  })();
});
