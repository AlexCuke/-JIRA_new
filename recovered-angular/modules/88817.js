// Extracted from main; webpack module 88817. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => M,
    R: () => d
  });
  var t = i(94650),
    e = i(24006),
    a = i(99246),
    m = i(44348);
  let d = (() => {
      class b extends m.DA {
        constructor(N, I, O, L, C) {
          super(N, O, C, L, !0), this.changeDetectorRef = N, this.ngZone = I, this.compareHost = O, this.ngControl = L, this.controlHost = C;
        }
      }
      return b.ɵfac = function (N) {
        return new (N || b)(t.Y36(t.sBO), t.Y36(t.R0b), t.Y36(m.Vg, 8), t.Y36(e.a5, 10), t.Y36(a.fU, 8));
      }, b.ɵdir = t.lG2({
        type: b,
        selectors: [["", "luControlSelector", ""]],
        exportAs: ["luControlSelector"],
        features: [t._Bn([{
          provide: a.BU,
          useExisting: b
        }]), t.qOj]
      }), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = t.oAB({
        type: b
      }), b.ɵinj = t.cJS({}), b;
    })();
});
