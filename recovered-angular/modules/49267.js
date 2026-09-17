// Extracted from main; webpack module 49267. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    F: () => b,
    J: () => M
  });
  var t = i(97582),
    e = i(94650),
    a = i(34304),
    m = i(85273),
    d = i(44348);
  let M = (() => {
      class A {
        constructor(I) {
          this.displayValueHost = I;
        }
        transform(I, O, L = m.eY) {
          return this.filter(I, L, O);
        }
        filter(I, O, L) {
          return I.filter(C => O(C, L, this.displayValueHost?.displayValueFn || m.ll));
        }
      }
      return A.ɵfac = function (I) {
        return new (I || A)(e.Y36(d.p7, 24));
      }, A.ɵpipe = e.Yjl({
        name: "luFilterByText",
        type: A,
        pure: !1
      }), (0, t.gn)([a.J], A.prototype, "filter", null), A;
    })(),
    b = (() => {
      class A {}
      return A.ɵfac = function (I) {
        return new (I || A)();
      }, A.ɵmod = e.oAB({
        type: A
      }), A.ɵinj = e.cJS({}), A;
    })();
});
