// Extracted from main; webpack module 21803. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    H: () => v,
    q: () => C
  });
  var t = i(94650),
    e = i(24006),
    a = i(44348),
    m = i(99246),
    d = i(46757),
    M = i(36895),
    b = i(26350),
    A = i(19550),
    N = i(93278),
    I = i(71273);
  function O(f, E) {
    1 & f && t._UZ(0, "lu-clear-control");
  }
  function L(f, E) {
    if (1 & f) {
      const h = t.EpF();
      t.TgZ(0, "button", 2), t.NdJ("focusout", function () {
        t.CHM(h);
        const u = t.oxw();
        return t.KtG(u.onTouched());
      })("click", function () {
        t.CHM(h);
        const u = t.oxw();
        return t.KtG(null == u.dropdown ? null : u.dropdown.toggle());
      }), t._UZ(1, "lu-svg-icon", 3), t.qZA();
    }
    if (2 & f) {
      const h = t.oxw();
      t.Q6J("tabIndex", -1)("disabled", h.disabled), t.xp6(1), t.Q6J("luChevronRotate", h.dropdown);
    }
  }
  let C = (() => {
      class f extends a.zH {
        constructor(h, x, u) {
          super(h, u, x), this.changeDetectorRef = h, this.ngControl = x, this.controlHost = u, this.clearButton = !0, this.chevronButton = !0;
        }
      }
      return f.ɵfac = function (h) {
        return new (h || f)(t.Y36(t.sBO), t.Y36(e.a5, 10), t.Y36(m.fU, 12));
      }, f.ɵcmp = t.Xpm({
        type: f,
        selectors: [["lu-combobox-controls"]],
        inputs: {
          dropdown: "dropdown",
          clearButton: "clearButton",
          chevronButton: "chevronButton"
        },
        features: [t._Bn([{
          provide: m.fU,
          useExisting: f
        }, {
          provide: m.Oc,
          useValue: d.Ls.PRIMITIVE
        }]), t.qOj],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["lu-button-icon", "", "color", "black", "class", "lu-chevron-button", "colorType", "light", 3, "tabIndex", "disabled", "focusout", "click", 4, "ngIf"], ["lu-button-icon", "", "color", "black", "colorType", "light", 1, "lu-chevron-button", 3, "tabIndex", "disabled", "focusout", "click"], ["icon", "chevron-down", 3, "luChevronRotate"]],
        template: function (h, x) {
          1 & h && (t.YNc(0, O, 1, 0, "lu-clear-control", 0), t.YNc(1, L, 2, 3, "button", 1)), 2 & h && (t.Q6J("ngIf", x.clearButton), t.xp6(1), t.Q6J("ngIf", x.chevronButton));
        },
        dependencies: [M.O5, b.T, A.k, N.q, I.c],
        styles: ["[_nghost-%COMP%]:last-child{padding-right:6px}lu-clear-control[_ngcontent-%COMP%]{--lu-clear-control-width: 28px}button[_ngcontent-%COMP%]{width:34px}"],
        changeDetection: 0
      }), f;
    })(),
    v = (() => {
      class f {}
      return f.ɵfac = function (h) {
        return new (h || f)();
      }, f.ɵmod = t.oAB({
        type: f
      }), f.ɵinj = t.cJS({
        imports: [M.ez, b.F, A.o, N.h, I.p]
      }), f;
    })();
});
