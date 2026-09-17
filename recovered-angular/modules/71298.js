// Extracted from main; webpack module 71298. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O: () => d,
    n: () => m
  });
  var t = i(98184),
    e = i(94650),
    a = i(99246);
  let m = (() => {
      class M extends t.xu {
        constructor(A) {
          super(A), this.origin = A;
        }
      }
      return M.ɵfac = function (A) {
        return new (A || M)(e.Y36(e.SBq));
      }, M.ɵdir = e.lG2({
        type: M,
        selectors: [["", "luDropdownOrigin", ""]],
        exportAs: ["luDropdownOrigin"],
        features: [e._Bn([{
          provide: a.N4,
          useExisting: (0, e.Gpc)(() => M)
        }]), e.qOj]
      }), M;
    })(),
    d = (() => {
      class M {}
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵmod = e.oAB({
        type: M
      }), M.ɵinj = e.cJS({}), M;
    })();
});
