// Extracted from main; webpack module 84464. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    A: () => m,
    T: () => d
  });
  var t = i(94650),
    e = i(36895);
  const a = ["*"];
  let m = (() => {
      class M {
        constructor(A) {
          this.elementRef = A, this.size = "small", this.color = "default", this.colorType = "default", this.elementRef?.nativeElement?.setAttribute("data-test-role", "title");
        }
      }
      return M.ɵfac = function (A) {
        return new (A || M)(t.Y36(t.SBq));
      }, M.ɵcmp = t.Xpm({
        type: M,
        selectors: [["lu-badge"]],
        hostVars: 3,
        hostBindings: function (A, N) {
          2 & A && t.uIk("data-lu-size", N.size)("data-lu-color", N.color)("data-lu-color-type", N.colorType);
        },
        inputs: {
          size: "size",
          color: "color",
          colorType: "colorType"
        },
        ngContentSelectors: a,
        decls: 1,
        vars: 0,
        template: function (A, N) {
          1 & A && (t.F$t(), t.Hsn(0));
        },
        styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:inline-flex;border-radius:20px;font-weight:600;min-width:25px;--lu-badge-background: var(--lu-primary);background-color:var(--lu-badge-background);color:var(--lu-badge-text);padding:0 var(--lu-badge-padding)}[data-lu-size=small][_nghost-%COMP%]{font-size:13px;line-height:20px;min-width:20px;--lu-badge-padding: 6px}[data-lu-size=extra-small][_nghost-%COMP%]{font-size:11px;line-height:16px;min-width:16px;--lu-badge-padding: 4px}[data-lu-color=teal][_nghost-%COMP%]{--lu-badge-background: var(--lu-teal-100)}[data-lu-color=yellow][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-80);--lu-badge-background: var(--lu-yellow-100)}[data-lu-color=blue][_nghost-%COMP%]{--lu-badge-background: var(--lu-blue-100)}[data-lu-color=red][_nghost-%COMP%]{--lu-badge-background: var(--lu-red-100)}[data-lu-color=orange][_nghost-%COMP%]{--lu-badge-background: var(--lu-orange-100)}[data-lu-color=green][_nghost-%COMP%]{--lu-badge-background: var(--lu-green-100)}[data-lu-color=purple][_nghost-%COMP%]{--lu-badge-background: var(--lu-purple-100)}[data-lu-color=black][_nghost-%COMP%]{--lu-badge-background: var(--lu-black-80)}[data-lu-color-type=light][data-lu-color=teal][_nghost-%COMP%]{--lu-badge-text: var(--lu-teal-140);--lu-badge-background: var(--lu-teal-30)}[data-lu-color-type=light][data-lu-color=black][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-54);--lu-badge-background: var(--lu-black-10)}[data-lu-color-type=light][data-lu-color=yellow][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-70);--lu-badge-background: var(--lu-yellow-40)}[data-lu-color-type=light][data-lu-color=blue][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-70);--lu-badge-background: var(--lu-blue-40)}[data-lu-color-type=light][data-lu-color=red][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-70);--lu-badge-background: var(--lu-red-40)}[data-lu-color-type=light][data-lu-color=orange][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-70);--lu-badge-background: var(--lu-orange-40)}[data-lu-color-type=light][data-lu-color=green][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-70);--lu-badge-background: var(--lu-green-40)}[data-lu-color-type=light][data-lu-color=purple][_nghost-%COMP%]{--lu-badge-text: var(--lu-black-70);--lu-badge-background: var(--lu-purple-40)}"],
        changeDetection: 0
      }), M;
    })(),
    d = (() => {
      class M {}
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵmod = t.oAB({
        type: M
      }), M.ɵinj = t.cJS({
        imports: [e.ez]
      }), M;
    })();
});
