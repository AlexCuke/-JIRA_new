// Extracted from main; webpack module 27191. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    D: () => x,
    I: () => h
  });
  var t = i(94650),
    e = i(69022),
    a = i(93278),
    m = i(88817),
    d = i(38666),
    M = i(19550),
    b = i(20330),
    A = i(44348),
    N = i(85273),
    I = i(99246),
    O = i(36895),
    L = i(71273),
    C = i(26350);
  function v(u, T) {
    if (1 & u) {
      const R = t.EpF();
      t.TgZ(0, "lu-tag", 6, 7), t._uU(2), t.TgZ(3, "lu-svg-icon", 8), t.NdJ("click", function () {
        const j = t.CHM(R).$implicit,
          W = t.MAs(1);
        return t.oxw().itemRemove.emit(j), t.KtG(W.deselect());
      }), t.qZA()();
    }
    if (2 & u) {
      const R = T.$implicit,
        B = t.oxw();
      t.ekj("disabled", B.disabled), t.Q6J("value", R), t.xp6(2), t.hij(" ", B.displayValueFn(R), " "), t.xp6(1), t.Q6J("size", 16);
    }
  }
  function f(u, T) {
    1 & u && t._UZ(0, "lu-clear-control", 9);
  }
  function E(u, T) {
    if (1 & u) {
      const R = t.EpF();
      t.TgZ(0, "button", 10), t.NdJ("click", function () {
        t.CHM(R);
        const y = t.oxw();
        return t.KtG(null == y.dropdown ? null : y.dropdown.toggle());
      }), t._UZ(1, "lu-svg-icon", 11), t.qZA();
    }
    if (2 & u) {
      const R = t.oxw();
      t.Q6J("tabIndex", -1)("disabled", R.disabled), t.xp6(1), t.Q6J("luChevronRotate", R.dropdown);
    }
  }
  let h = (() => {
      class u extends A.HY {
        constructor(R, B, y) {
          super(R, B), this.changeDetectorRef = R, this.controlHost = B, this.displayValueHost = y, this.clearButton = !0, this.chevronButton = !0, this.itemRemove = new t.vpe();
        }
        get items() {
          return this.model || [];
        }
        displayValueFn(R) {
          return this.displayValueHost?.displayValueFn(R) ?? (0, N.BW)(R);
        }
      }
      return u.ɵfac = function (R) {
        return new (R || u)(t.Y36(t.sBO), t.Y36(I.fU, 8), t.Y36(A.p7, 8));
      }, u.ɵcmp = t.Xpm({
        type: u,
        selectors: [["lu-combobox-tags"]],
        inputs: {
          dropdown: "dropdown",
          clearButton: "clearButton",
          chevronButton: "chevronButton"
        },
        outputs: {
          itemRemove: "itemRemove"
        },
        features: [t._Bn([{
          provide: I.BU,
          useExisting: u
        }]), t.qOj],
        decls: 6,
        vars: 3,
        consts: [["luResizeObserver", "", 1, "lu-combobox-tag-container"], ["resizeObserver", "luResizeObserver"], ["class", "lu-combobox-tag", "type", "light", "luControlSelector", "", "luNoFocusChange", "", 3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "lu-combobox-controls"], ["class", "lu-clear-control", 4, "ngIf"], ["class", "lu-chevron-button", "lu-button-icon", "", "color", "black", "colorType", "light", 3, "tabIndex", "disabled", "click", 4, "ngIf"], ["type", "light", "luControlSelector", "", "luNoFocusChange", "", 1, "lu-combobox-tag", 3, "value"], ["selector", "luControlSelector"], ["icon", "close-tag", 1, "lu-combobox-tag-icon", 3, "size", "click"], [1, "lu-clear-control"], ["lu-button-icon", "", "color", "black", "colorType", "light", 1, "lu-chevron-button", 3, "tabIndex", "disabled", "click"], ["icon", "chevron-down", 3, "luChevronRotate"]],
        template: function (R, B) {
          if (1 & R && (t.TgZ(0, "div", 0, 1), t.YNc(2, v, 4, 5, "lu-tag", 2), t.qZA(), t.TgZ(3, "div", 3), t.YNc(4, f, 1, 0, "lu-clear-control", 4), t.YNc(5, E, 2, 3, "button", 5), t.qZA()), 2 & R) {
            const y = t.MAs(1);
            t.xp6(2), t.Q6J("ngForOf", B.items), t.xp6(2), t.Q6J("ngIf", B.clearButton && y.height > 40), t.xp6(1), t.Q6J("ngIf", B.chevronButton);
          }
        },
        dependencies: [O.sg, O.O5, e.l$, a.q, m.R, d.h, M.k, L.c, C.T, b.X],
        styles: ["[_nghost-%COMP%]{position:relative;display:flex;overflow-y:auto;min-height:40px;max-height:160px}[data-lu-disabled=true][_nghost-%COMP%]{background-color:var(--lu-disabled-background)}[_nghost-%COMP%]   .lu-combobox-tag[_ngcontent-%COMP%]{cursor:auto;margin:calc(var(--lu-base-gutter) / 2)}[_nghost-%COMP%]   .lu-combobox-tag[_ngcontent-%COMP%]   .lu-combobox-tag-icon[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}[_nghost-%COMP%]   .lu-combobox-tag[_ngcontent-%COMP%]   .lu-combobox-tag-icon[_ngcontent-%COMP%]:not(.disabled):hover{--lu-svg-icon-color: var(--lu-black-54)}[_nghost-%COMP%]   .lu-combobox-tag.disabled[_ngcontent-%COMP%]{pointer-events:none;--lu-tag-background: var(--lu-black-15);--lu-tag-border: var(--lu-black-15);--lu-tag-text: var(--lu-black-60);--lu-svg-icon-color: var(--lu-black-30)}.lu-combobox-tag-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:calc(var(--lu-base-gutter) / 2)}.lu-combobox-controls[_ngcontent-%COMP%]{position:sticky;right:0;top:0;width:40px;overflow:hidden;flex-shrink:0}.lu-combobox-controls[_ngcontent-%COMP%]   .lu-clear-control[_ngcontent-%COMP%]{position:absolute;top:0}.lu-combobox-controls[_ngcontent-%COMP%]   .lu-chevron-button[_ngcontent-%COMP%]{position:absolute;bottom:0}"],
        changeDetection: 0
      }), u;
    })(),
    x = (() => {
      class u {}
      return u.ɵfac = function (R) {
        return new (R || u)();
      }, u.ɵmod = t.oAB({
        type: u
      }), u.ɵinj = t.cJS({
        imports: [O.ez, e._5, a.h, m.P, d.y, M.o, L.p, C.F, b.e]
      }), u;
    })();
});
