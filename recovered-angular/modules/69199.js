// Extracted from main; webpack module 69199. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    k: () => A,
    p: () => b
  });
  var t = i(94650),
    e = i(44348),
    a = i(99246),
    m = i(46757),
    d = i(36895);
  const M = ["*"];
  let b = (() => {
      class N extends e.zH {
        constructor(O, L) {
          super(O, L), this.changeDetectorRef = O, this.host = L;
        }
        incomingUpdate() {}
        registerControl(O) {
          Promise.resolve().then(() => {
            "string" == typeof this.model && O.writeValueFromHost(this.model);
          }), O.registerRequestUpdate(() => {
            "string" == typeof this.model && O.writeValueFromHost(this.model);
          });
        }
      }
      return N.ɵfac = function (O) {
        return new (O || N)(t.Y36(t.sBO), t.Y36(a.fU, 12));
      }, N.ɵcmp = t.Xpm({
        type: N,
        selectors: [["lu-combobox-search-input"]],
        features: [t._Bn([{
          provide: a.fU,
          useExisting: N
        }, {
          provide: a.Oc,
          useValue: m.Ls.PRIMITIVE
        }]), t.qOj],
        ngContentSelectors: M,
        decls: 1,
        vars: 0,
        template: function (O, L) {
          1 & O && (t.F$t(), t.Hsn(0));
        },
        encapsulation: 2,
        changeDetection: 0
      }), N;
    })(),
    A = (() => {
      class N {}
      return N.ɵfac = function (O) {
        return new (O || N)();
      }, N.ɵmod = t.oAB({
        type: N
      }), N.ɵinj = t.cJS({
        imports: [d.ez]
      }), N;
    })();
});
