// Extracted from main; webpack module 28353. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => m,
    c: () => d
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
        selectors: [["lu-wrapper"]],
        ngContentSelectors: a,
        decls: 1,
        vars: 0,
        template: function (A, N) {
          1 & A && (t.F$t(), t.Hsn(0));
        },
        styles: ["[data-lu-focused=true][_nghost-%COMP%]{--lu-floated-border: var(--lu-focus)}"],
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
