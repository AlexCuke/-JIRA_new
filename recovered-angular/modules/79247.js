// Extracted from main; webpack module 79247. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    M: () => m,
    a: () => d
  });
  var t = i(94650),
    e = i(44348),
    a = i(23062);
  let m = (() => {
      class M {
        transform(A, N) {
          const I = new a.XM({
            mask: N
          });
          return I.change(new e.iH(A, A.length)), I.maskedValue;
        }
      }
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵpipe = t.Yjl({
        name: "luMask",
        type: M,
        pure: !0
      }), M;
    })(),
    d = (() => {
      class M {}
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵmod = t.oAB({
        type: M
      }), M.ɵinj = t.cJS({}), M;
    })();
});
