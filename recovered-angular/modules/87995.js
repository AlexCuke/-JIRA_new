// Extracted from main; webpack module 87995. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C: () => I,
    n: () => N
  });
  var t = i(94650),
    e = i(62804),
    a = i(92203),
    m = i(23062),
    d = i(44348),
    M = i(99246),
    b = i(46757);
  const A = ["*"];
  let N = (() => {
      class O extends d.Jd {
        constructor(C, v) {
          super(C, f => f?.start ?? null, (f, E) => ({
            end: null,
            ...f,
            start: E
          }), v), this.changeDetectorRef = C, this.controlHost = v;
        }
      }
      return O.ɵfac = function (C) {
        return new (C || O)(t.Y36(t.sBO), t.Y36(M.fU, 12));
      }, O.ɵcmp = t.Xpm({
        type: O,
        selectors: [["lu-calendar-period-from"]],
        contentQueries: function (C, v, f) {
          if (1 & C && (t.Suo(f, a.z, 5), t.Suo(f, e.HY, 5), t.Suo(f, m.Bf, 5)), 2 & C) {
            let E;
            t.iGM(E = t.CRH()) && (v.label = E.first), t.iGM(E = t.CRH()) && (v.inputWrapper = E.first), t.iGM(E = t.CRH()) && (v.mask = E.first);
          }
        },
        features: [t._Bn([{
          provide: M.fU,
          useExisting: O
        }, {
          provide: M.Oc,
          useValue: b.Ls.PRIMITIVE
        }]), t.qOj],
        ngContentSelectors: A,
        decls: 1,
        vars: 0,
        template: function (C, v) {
          1 & C && (t.F$t(), t.Hsn(0));
        },
        styles: ["[_nghost-%COMP%]{--lu-floated-border: var(--lu-calendar-period-from-border)}"],
        changeDetection: 0
      }), O;
    })(),
    I = (() => {
      class O {}
      return O.ɵfac = function (C) {
        return new (C || O)();
      }, O.ɵmod = t.oAB({
        type: O
      }), O.ɵinj = t.cJS({}), O;
    })();
});
