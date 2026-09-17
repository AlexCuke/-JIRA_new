// Extracted from main; webpack module 43150. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    H: () => I,
    c: () => O
  });
  var N,
    t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(58435),
    d = i(44348),
    M = i(15635),
    b = i(99246),
    A = i(28642);
  let I = N = class extends d.Fe {
    constructor(C, v, f, E, h) {
      super(C, E, f), this.changeDetectorRef = C, this.elementRef = v, this.ngControl = f, this.host = E, this.inputHandler = h, (0, A.Rx)(this.elementRef.nativeElement, h).pipe((0, m.t)(this)).subscribe(x => this.updateModel(x));
    }
    blurEvent() {
      this.onTouched();
    }
    incomingUpdate(C) {
      const v = (0, M.EN)(C) ? String(C) : "";
      (0, M.Nj)(this.elementRef).value = v, this.inputHandler?.setInputValue(v);
    }
  };
  I.ɵfac = function (C) {
    return new (C || I)(e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(a.a5, 10), e.Y36(b.fU, 8), e.Y36(d.fc, 8));
  }, I.ɵdir = e.lG2({
    type: I,
    selectors: [["input", "luInputString", ""]],
    hostBindings: function (C, v) {
      1 & C && e.NdJ("blur", function () {
        return v.blurEvent();
      });
    },
    features: [e._Bn([{
      provide: b.BU,
      useExisting: N
    }, {
      provide: b.kK,
      useExisting: N
    }]), e.qOj]
  }), I = N = (0, t.gn)([(0, m.c)()], I);
  let O = (() => {
    class L {}
    return L.ɵfac = function (v) {
      return new (v || L)();
    }, L.ɵmod = e.oAB({
      type: L
    }), L.ɵinj = e.cJS({}), L;
  })();
});
