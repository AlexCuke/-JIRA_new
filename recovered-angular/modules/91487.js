// Extracted from main; webpack module 91487. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    g: () => b
  });
  var t = i(39646),
    e = i(18505),
    a = i(54004),
    m = i(98129),
    d = i(94650),
    M = i(10885);
  let b = (() => {
    class A extends m.U {
      constructor(I) {
        super("medical-entry-section", I), this.initialized = !1, this.initializedSections = {};
      }
      getSetting(I) {
        return super.getSetting(I);
      }
      getSettings() {
        return super.getSettings();
      }
      init() {
        return this.initialized ? (0, t.of)(this) : this.getSettings().pipe((0, e.b)(I => {
          I.forEach(O => {
            this.initializedSections[O.code] = O;
          }), this.initialized = !0;
        }), (0, a.U)(() => this));
      }
      mapEntries(I) {
        return I?.map((O, L) => "string" == typeof O ? this.initializedSections[O] ? {
          order: L,
          ...this.initializedSections[O]
        } : void 0 : O).filter(O => void 0 !== O).map(O => O);
      }
    }
    return A.ɵfac = function (I) {
      return new (I || A)(d.LFG(M.p));
    }, A.ɵprov = d.Yz7({
      token: A,
      factory: A.ɵfac,
      providedIn: "root"
    }), A;
  })();
});
