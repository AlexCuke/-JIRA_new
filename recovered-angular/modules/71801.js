// Extracted from main; webpack module 71801. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    c: () => M,
    r: () => d
  });
  var t = i(94650),
    e = i(48580),
    a = i(36895);
  const m = ["*"];
  let d = (() => {
      class b extends e.xI {}
      return b.ɵfac = function () {
        let A;
        return function (I) {
          return (A || (A = t.n5z(b)))(I || b);
        };
      }(), b.ɵcmp = t.Xpm({
        type: b,
        selectors: [["lu-accordion"]],
        features: [t.qOj],
        ngContentSelectors: m,
        decls: 1,
        vars: 0,
        template: function (N, I) {
          1 & N && (t.F$t(), t.Hsn(0));
        },
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}"],
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
        imports: [a.ez]
      }), b;
    })();
});
