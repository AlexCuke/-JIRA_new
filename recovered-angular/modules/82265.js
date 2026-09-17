// Extracted from main; webpack module 82265. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C: () => a,
    n: () => e
  });
  var t = i(94650);
  let e = (() => {
      class m extends t.SBq {
        constructor({
          nativeElement: M
        }) {
          super(M);
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)(t.Y36(t.SBq));
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["", "luElementRef", ""]],
        exportAs: ["elementRef"],
        features: [t.qOj]
      }), m;
    })(),
    a = (() => {
      class m {}
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵmod = t.oAB({
        type: m
      }), m.ɵinj = t.cJS({}), m;
    })();
});
