// Extracted from main; webpack module 42522. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => L,
    a: () => O
  });
  var I,
    t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(58435),
    d = i(44348),
    M = i(99246),
    b = i(15635),
    A = i(28642),
    N = i(8391);
  let O = I = class extends d.Fe {
    constructor(v, f, E, h, x, u) {
      super(v, x, h), this.changeDetectorRef = v, this.elementRef = f, this.dateAdapter = E, this.ngControl = h, this.host = x, this.inputHandler = u, this.format = this.dateAdapter.formats().parse.inputFormat, (0, A.Rx)(this.elementRef.nativeElement, u).pipe((0, m.t)(this)).subscribe(T => {
        let R = null;
        T && (R = this.dateAdapter.parse(T, this.format), (!this.dateAdapter.isValid(R) || this.dateAdapter.format(R, this.format) !== T) && (R = this.dateAdapter.invalid())), this.updateModel(R);
      });
    }
    ngOnChanges({
      format: v
    }) {
      v && this.updateInput(this.model);
    }
    blurEvent() {
      this.onTouched();
    }
    incomingUpdate(v) {
      this.updateInput(v);
    }
    updateInput(v) {
      if (!v || this.dateAdapter.isValid(v)) {
        const f = (0, b.EN)(v) ? this.dateAdapter.format(v, this.format) : "";
        (0, b.Nj)(this.elementRef).value = f, this.inputHandler?.setInputValue(f);
      }
    }
  };
  O.ɵfac = function (v) {
    return new (v || O)(e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(N.SW), e.Y36(a.a5, 10), e.Y36(M.fU, 8), e.Y36(d.fc, 8));
  }, O.ɵdir = e.lG2({
    type: O,
    selectors: [["input", "luInputDate", ""]],
    hostBindings: function (v, f) {
      1 & v && e.NdJ("blur", function () {
        return f.blurEvent();
      });
    },
    inputs: {
      format: ["luInputDate", "format"]
    },
    features: [e._Bn([{
      provide: M.BU,
      useExisting: I
    }, {
      provide: M.kK,
      useExisting: I
    }]), e.qOj, e.TTD]
  }), O = I = (0, t.gn)([(0, m.c)()], O);
  let L = (() => {
    class C {}
    return C.ɵfac = function (f) {
      return new (f || C)();
    }, C.ɵmod = e.oAB({
      type: C
    }), C.ɵinj = e.cJS({}), C;
  })();
});
