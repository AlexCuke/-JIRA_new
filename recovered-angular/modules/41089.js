// Extracted from main; webpack module 41089. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    T: () => C,
    V: () => L
  });
  var O,
    t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(85273),
    d = i(15635),
    M = i(41742),
    b = i(56451),
    A = i(54968),
    N = i(78372),
    I = i(71884);
  let L = O = class {
    constructor(f, E, h) {
      this.elementRef = f, this.ngZone = E, this.changeDetectorRef = h, this.focusEvent = new e.vpe(), this.blurEvent = new e.vpe(), this.focused = !1, O.observeFocus((0, d.Nj)(this.elementRef)).pipe((0, M.hx)(this.ngZone), (0, a.t)(this)).subscribe(x => {
        this.focused = x.type === m.N4, this.focused ? this.focusEvent.emit(x) : this.blurEvent.emit(x), this.changeDetectorRef.markForCheck();
      });
    }
    static observeFocus(f) {
      return (0, b.T)((0, A.R)(f, m.N4), (0, A.R)(f, m.fJ)).pipe((0, N.b)(0), (0, I.x)((E, h) => E.type === h.type));
    }
  };
  L.ɵfac = function (f) {
    return new (f || L)(e.Y36(e.SBq), e.Y36(e.R0b), e.Y36(e.sBO));
  }, L.ɵdir = e.lG2({
    type: L,
    selectors: [["", "luFocusCatcher", ""]],
    hostVars: 1,
    hostBindings: function (f, E) {
      2 & f && e.uIk("data-lu-focused", E.focused);
    },
    outputs: {
      focusEvent: "focusEvent",
      blurEvent: "blurEvent"
    },
    exportAs: ["luFocusCatcher"]
  }), L = O = (0, t.gn)([(0, a.c)()], L);
  let C = (() => {
    class v {}
    return v.ɵfac = function (E) {
      return new (E || v)();
    }, v.ɵmod = e.oAB({
      type: v
    }), v.ɵinj = e.cJS({}), v;
  })();
});
