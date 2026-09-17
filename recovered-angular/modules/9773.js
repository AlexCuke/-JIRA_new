// Extracted from main; webpack module 9773. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C: () => N,
    c: () => I
  });
  var t = i(94650),
    e = i(44348),
    a = i(99246),
    m = i(36895),
    d = i(19550),
    M = i(93278);
  function b(O, L) {
    if (1 & O) {
      const C = t.EpF();
      t.TgZ(0, "button", 2), t.NdJ("click", function () {
        t.CHM(C);
        const f = t.oxw();
        return t.KtG(f.clear());
      })("focusout", function () {
        t.CHM(C);
        const f = t.oxw();
        return t.KtG(f.onTouched());
      }), t._UZ(1, "lu-svg-icon", 3), t.qZA();
    }
    if (2 & O) {
      const C = t.oxw();
      t.Q6J("tabIndex", -1)("disabled", C.disabled), t.xp6(1), t.Q6J("size", 16);
    }
  }
  function A(O, L) {
    1 & O && t._UZ(0, "lu-svg-icon", 4), 2 & O && t.Q6J("size", 16)("tabIndex", -1);
  }
  let N = (() => {
      class O extends e.Fe {
        constructor(C, v) {
          super(C, v), this.changeDetectorRef = C, this.host = v, this.calendarIcon = !0;
        }
        clear() {
          return this.updateModel(null), !0;
        }
        incomingUpdate() {}
      }
      return O.ɵfac = function (C) {
        return new (C || O)(t.Y36(t.sBO), t.Y36(a.fU, 8));
      }, O.ɵcmp = t.Xpm({
        type: O,
        selectors: [["lu-clear-calendar"]],
        inputs: {
          calendarIcon: "calendarIcon"
        },
        features: [t._Bn([{
          provide: a.BU,
          useExisting: O
        }]), t.qOj],
        decls: 2,
        vars: 2,
        consts: [["lu-button-icon", "", "color", "black", "colorType", "light", "type", "button", 3, "tabIndex", "disabled", "click", "focusout", 4, "ngIf"], ["icon", "calendar", 3, "size", "tabIndex", 4, "ngIf"], ["lu-button-icon", "", "color", "black", "colorType", "light", "type", "button", 3, "tabIndex", "disabled", "click", "focusout"], ["icon", "close", 3, "size"], ["icon", "calendar", 3, "size", "tabIndex"]],
        template: function (C, v) {
          1 & C && (t.YNc(0, b, 2, 3, "button", 0), t.YNc(1, A, 1, 2, "lu-svg-icon", 1)), 2 & C && (t.Q6J("ngIf", v.hasValue), t.xp6(1), t.Q6J("ngIf", !v.hasValue && v.calendarIcon));
        },
        dependencies: [m.O5, d.k, M.q],
        styles: ["[data-lu-disabled=true][_nghost-%COMP%]{pointer-events:none}[data-lu-disabled=true][_nghost-%COMP%]   lu-svg-icon[icon=calendar][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}lu-svg-icon[icon=calendar][_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer;--lu-svg-icon-color: var(--lu-black-40)}"],
        changeDetection: 0
      }), O;
    })(),
    I = (() => {
      class O {}
      return O.ɵfac = function (C) {
        return new (C || O)();
      }, O.ɵmod = t.oAB({
        type: O
      }), O.ɵinj = t.cJS({
        imports: [m.ez, d.o, M.h]
      }), O;
    })();
});
