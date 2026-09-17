// Extracted from main; webpack module 45399. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    N: () => v,
    k: () => C
  });
  var t = i(97582),
    e = i(94650),
    a = i(68675),
    m = i(54004),
    d = i(17445),
    M = i(42730),
    b = i(8391),
    A = i(32643),
    N = i(15091),
    I = i(41742),
    O = i(34304),
    L = i(36895);
  let C = (() => {
      let f = class {
        constructor(h, x) {
          this.ngZone = h, this.dateAdapter = x, this.formatClock = "dd MMMM, HH:mm", this.refreshInterval = 1e3;
        }
        clock(h) {
          return (0, d.F)(h).pipe((0, a.O)(0), (0, m.U)(() => this.dateAdapter.today()), (0, M.t)(this), (0, I.hx)(this.ngZone));
        }
      };
      return f.ɵfac = function (h) {
        return new (h || f)(e.Y36(e.R0b), e.Y36(b.SW));
      }, f.ɵcmp = e.Xpm({
        type: f,
        selectors: [["lu-clock"]],
        inputs: {
          formatClock: "formatClock",
          refreshInterval: "refreshInterval"
        },
        decls: 4,
        vars: 6,
        consts: [["lu-text", "", "size", "small"]],
        template: function (h, x) {
          1 & h && (e.TgZ(0, "span", 0), e._uU(1), e.ALo(2, "luDateFormatter"), e.ALo(3, "async"), e.qZA()), 2 & h && (e.xp6(1), e.Oqu(e.xi3(2, 1, e.lcZ(3, 4, x.clock(x.refreshInterval)), x.formatClock)));
        },
        dependencies: [A.NZ, L.Ov, N.M],
        styles: ["[_nghost-%COMP%]{display:inline-flex}"],
        changeDetection: 0
      }), (0, t.gn)([O.J], f.prototype, "clock", null), f = (0, t.gn)([(0, M.c)()], f), f;
    })(),
    v = (() => {
      class f {}
      return f.ɵfac = function (h) {
        return new (h || f)();
      }, f.ɵmod = e.oAB({
        type: f
      }), f.ɵinj = e.cJS({
        imports: [L.ez, N.N, A.aI]
      }), f;
    })();
});
