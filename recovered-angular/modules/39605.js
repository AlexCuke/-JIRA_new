// Extracted from main; webpack module 39605. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O: () => A,
    Z: () => b
  });
  var t = i(94650),
    e = i(70823),
    a = i(32643),
    m = i(36895);
  const d = ["dot"],
    M = ["*"];
  let b = (() => {
      class N {
        constructor(O) {
          this.luTooltipDirective = O, this.color = "default", this.letter = "";
        }
        ngOnInit() {
          this.luTooltipDirective && this.dot && (this.luTooltipDirective.displayOrigin = this.dot);
        }
      }
      return N.ɵfac = function (O) {
        return new (O || N)(t.Y36(e.$, 10));
      }, N.ɵcmp = t.Xpm({
        type: N,
        selectors: [["lu-dot"]],
        viewQuery: function (O, L) {
          if (1 & O && t.Gf(d, 7), 2 & O) {
            let C;
            t.iGM(C = t.CRH()) && (L.dot = C.first);
          }
        },
        hostVars: 2,
        hostBindings: function (O, L) {
          2 & O && t.uIk("data-lu-color", L.color)("data-lu-letter", L.letter);
        },
        inputs: {
          color: "color",
          letter: "letter"
        },
        ngContentSelectors: M,
        decls: 6,
        vars: 1,
        consts: [["lu-text", "", "size", "small", 1, "lu-dot-wrapper"], [1, "lu-dot"], ["dot", ""], ["luTextRight", "", "data-test-role", "title", 1, "lu-dot-text"]],
        template: function (O, L) {
          1 & O && (t.F$t(), t.TgZ(0, "div", 0)(1, "div", 1, 2), t._uU(3), t.qZA(), t.TgZ(4, "span", 3), t.Hsn(5), t.qZA()()), 2 & O && (t.xp6(3), t.Oqu(L.letter));
        },
        dependencies: [a.NZ, a.YE],
        styles: ["[_nghost-%COMP%]{display:inline-flex;align-items:center}[_nghost-%COMP%]:not([data-lu-letter=\"\"])   .lu-dot[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:flex;align-items:center;justify-content:center;width:24px;height:24px;--lu-line-height: 24px;--lu-text-color: var(--lu-dot-letter);--lu-font-size: 15px;--lu-font-weight: 600}[_nghost-%COMP%]   .lu-dot-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .lu-dot[_ngcontent-%COMP%]{display:block;width:var(--lu-base-gutter);height:var(--lu-base-gutter);border-radius:50%;background-color:var(--lu-dot-background)}[_nghost-%COMP%]   .lu-dot-text[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);color:var(--lu-dot-text);opacity:.5;--lu-line-height: 24px}[data-lu-color=teal][_nghost-%COMP%]{--lu-dot-background: var(--lu-teal-100)}[data-lu-color=yellow][_nghost-%COMP%]{--lu-dot-background: var(--lu-yellow-100)}[data-lu-color=blue][_nghost-%COMP%]{--lu-dot-background: var(--lu-blue-100)}[data-lu-color=red][_nghost-%COMP%]{--lu-dot-background: var(--lu-red-100)}[data-lu-color=orange][_nghost-%COMP%]{--lu-dot-background: var(--lu-orange-100)}[data-lu-color=green][_nghost-%COMP%]{--lu-dot-background: var(--lu-green-100)}[data-lu-color=black][_nghost-%COMP%]{--lu-dot-background: var(--lu-black-80)}[data-lu-color=purple][_nghost-%COMP%]{--lu-dot-background: var(--lu-purple-100)}"],
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
        imports: [m.ez, a.aI]
      }), N;
    })();
});
