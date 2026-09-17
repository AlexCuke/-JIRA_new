// Extracted from main; webpack module 15472. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    DH: () => m,
    zh: () => a
  });
  var t = i(94650);
  class e {
    constructor(M) {
      this.internalDirectiveInstance = M;
    }
    get $implicit() {
      return this.internalDirectiveInstance.luLet;
    }
    get luLet() {
      return this.internalDirectiveInstance.luLet;
    }
  }
  let a = (() => {
      class d {
        constructor(b, A) {
          b.createEmbeddedView(A, new e(this));
        }
        static ngTemplateContextGuard(b, A) {
          return !0;
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)(t.Y36(t.s_b), t.Y36(t.Rgc));
      }, d.ɵdir = t.lG2({
        type: d,
        selectors: [["", "luLet", ""]],
        inputs: {
          luLet: "luLet"
        }
      }), d;
    })(),
    m = (() => {
      class d {}
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵmod = t.oAB({
        type: d
      }), d.ɵinj = t.cJS({}), d;
    })();
});
