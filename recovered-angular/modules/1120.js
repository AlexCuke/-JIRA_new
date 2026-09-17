// Extracted from main; webpack module 1120. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    _: () => b,
    m: () => M
  });
  var t = i(94650),
    e = i(44348),
    a = i(99246),
    m = i(85273),
    d = i(46757);
  let M = (() => {
      class A extends e.Jd {
        constructor(I, O, L) {
          super(I, C => this.displayValueHost?.displayValueFn(C) || (0, m.BW)(C), () => null, O), this.changeDetectorRef = I, this.controlHost = O, this.displayValueHost = L;
        }
      }
      return A.ɵfac = function (I) {
        return new (I || A)(t.Y36(t.sBO), t.Y36(a.fU, 12), t.Y36(e.p7, 8));
      }, A.ɵdir = t.lG2({
        type: A,
        selectors: [["input", "luComboboxInput", ""]],
        features: [t._Bn([{
          provide: a.fU,
          useExisting: A
        }, {
          provide: a.Oc,
          useValue: d.Ls.PRIMITIVE
        }]), t.qOj]
      }), A;
    })(),
    b = (() => {
      class A {}
      return A.ɵfac = function (I) {
        return new (I || A)();
      }, A.ɵmod = t.oAB({
        type: A
      }), A.ɵinj = t.cJS({}), A;
    })();
});
