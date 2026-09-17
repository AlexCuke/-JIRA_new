// Extracted from main; webpack module 81173. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    i: () => b,
    k: () => M
  });
  var t = i(97582),
    e = i(94650),
    a = i(44348),
    m = i(34304),
    d = i(85273);
  let M = (() => {
      class A {
        constructor(I) {
          this.displayValueHost = I;
        }
        transform(I, O, L = d.eY) {
          return this.filter(I, O, L);
        }
        filter(I, O, L) {
          return this.filterNodes(I, O, L);
        }
        filterNodes(I, O, L, C) {
          return I.reduce((v, f) => {
            f.show(), f.collapse();
            const E = L(f.data, O, this.displayValueHost?.displayValueFn || d.ll);
            E && O && f.expand(), (E || C) && v.push(f);
            const h = this.filterNodes(Array.from(f.children.values()), O, L, C || E);
            return h.length && !v.includes(f) && v.push(f), !E && !h.length && !C && f.hide(), v;
          }, []);
        }
      }
      return A.ɵfac = function (I) {
        return new (I || A)(e.Y36(a.p7, 24));
      }, A.ɵpipe = e.Yjl({
        name: "luTreeFilter",
        type: A,
        pure: !1
      }), (0, t.gn)([m.J], A.prototype, "filter", null), A;
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
