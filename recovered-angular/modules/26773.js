// Extracted from main; webpack module 26773. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    M: () => M,
    l: () => d
  });
  var t = i(44348),
    e = i(99246),
    a = i(85273),
    m = i(94650);
  let d = (() => {
      class b extends t.zH {
        constructor(N, I) {
          super(N, I), this.changeDetectorRef = N, this.host = I, this.compareFn = a.kX;
        }
        registerControl() {}
        unregisterControl() {}
      }
      return b.ɵfac = function (N) {
        return new (N || b)(m.Y36(m.sBO), m.Y36(e.fU, 12));
      }, b.ɵdir = m.lG2({
        type: b,
        selectors: [["", "luControlSilencer", ""], ["lu-control-silencer"]],
        features: [m._Bn([{
          provide: e.fU,
          useExisting: (0, m.Gpc)(() => b)
        }, {
          provide: t.Vg,
          useExisting: b
        }]), m.qOj]
      }), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = m.oAB({
        type: b
      }), b.ɵinj = m.cJS({}), b;
    })();
});
