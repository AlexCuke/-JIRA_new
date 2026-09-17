// Extracted from main; webpack module 35650. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    I: () => m,
    S: () => d
  });
  var t = i(94650),
    e = i(36895);
  const a = ["*"];
  let m = (() => {
      class M {}
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵcmp = t.Xpm({
        type: M,
        selectors: [["lu-floated-border"]],
        ngContentSelectors: a,
        decls: 1,
        vars: 0,
        template: function (A, N) {
          1 & A && (t.F$t(), t.Hsn(0));
        },
        styles: ["[_nghost-%COMP%]{position:relative;display:block}[_nghost-%COMP%]:after{position:absolute;content:\"\";top:0;left:0;z-index:3;width:100%;height:100%;pointer-events:none;border:2px solid var(--lu-floated-border)}"],
        changeDetection: 0
      }), M;
    })(),
    d = (() => {
      class M {}
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵmod = t.oAB({
        type: M
      }), M.ɵinj = t.cJS({
        imports: [e.ez]
      }), M;
    })();
});
