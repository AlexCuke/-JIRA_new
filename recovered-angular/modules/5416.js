// Extracted from main; webpack module 5416. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    F: () => M,
    w: () => d
  });
  var t = i(94650),
    e = i(35650),
    a = i(36895);
  const m = ["*"];
  let d = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵcmp = t.Xpm({
        type: b,
        selectors: [["lu-button-group"]],
        ngContentSelectors: m,
        decls: 2,
        vars: 0,
        template: function (N, I) {
          1 & N && (t.F$t(), t.TgZ(0, "lu-floated-border"), t.Hsn(1), t.qZA());
        },
        dependencies: [e.I],
        styles: ["[_nghost-%COMP%]{display:inline-block;white-space:nowrap}[_nghost-%COMP%]     button+button{margin-left:-1px}[_nghost-%COMP%]     button:hover:not([data-lu-disabled=true]){z-index:1}"],
        changeDetection: 0
      }), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = t.oAB({
        type: b
      }), b.ɵinj = t.cJS({
        imports: [a.ez, e.S]
      }), b;
    })();
});
