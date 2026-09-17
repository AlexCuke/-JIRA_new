// Extracted from main; webpack module 44217. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    L: () => M,
    a: () => d
  });
  var t = i(94650),
    e = i(36895);
  function a(b, A) {
    1 & b && (t.TgZ(0, "div", 3), t._UZ(1, "div", 4), t.qZA());
  }
  const m = ["*"];
  let d = (() => {
      class b {
        constructor() {
          this.overlayPosition = null, this.overlayAlign = null, this.withPointer = !0;
        }
      }
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵcmp = t.Xpm({
        type: b,
        selectors: [["lu-overlay-pointer"]],
        hostVars: 2,
        hostBindings: function (N, I) {
          2 & N && t.uIk("data-lu-overlay-position", I.overlayPosition)("data-lu-overlay-align", I.overlayAlign);
        },
        inputs: {
          overlayPosition: "overlayPosition",
          overlayAlign: "overlayAlign",
          withPointer: "withPointer"
        },
        ngContentSelectors: m,
        decls: 4,
        vars: 1,
        consts: [[1, "lu-overlay-pointer-wrapper"], ["class", "lu-overlay-pointer", 4, "ngIf"], [1, "lu-overlay-pointer-content"], [1, "lu-overlay-pointer"], [1, "lu-pointer"]],
        template: function (N, I) {
          1 & N && (t.F$t(), t.TgZ(0, "div", 0), t.YNc(1, a, 2, 0, "div", 1), t.TgZ(2, "div", 2), t.Hsn(3), t.qZA()()), 2 & N && (t.xp6(1), t.Q6J("ngIf", I.withPointer));
        },
        dependencies: [e.O5],
        styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;height:100%}.lu-overlay-pointer-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.lu-overlay-pointer-wrapper[_ngcontent-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{display:flex}.lu-overlay-pointer-wrapper[_ngcontent-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{position:relative}.lu-overlay-pointer-wrapper[_ngcontent-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:before{position:relative;display:block;content:\"\";width:0;height:0;border:8px solid transparent}.lu-overlay-pointer-wrapper[_ngcontent-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:after{position:absolute;display:block;content:\"\";width:0;height:0;border:7px solid transparent}.lu-overlay-pointer-wrapper[_ngcontent-%COMP%]   .lu-overlay-pointer-content[_ngcontent-%COMP%]{display:flex;flex:1;height:100%}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer-wrapper[_ngcontent-%COMP%], [data-lu-overlay-position=bottom][_nghost-%COMP%]   .lu-overlay-pointer-wrapper[_ngcontent-%COMP%]{min-width:calc(var(--lu-base-gutter) * 4)}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%], [data-lu-overlay-position=bottom][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{justify-content:center}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%], [data-lu-overlay-position=bottom][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{top:1px}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:before, [data-lu-overlay-position=bottom][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:before{border-bottom:8px solid var(--lu-overlay-border)}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:after, [data-lu-overlay-position=bottom][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:after{top:2px;right:1px;border-bottom:7px solid var(--lu-overlay-background)}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer-wrapper[_ngcontent-%COMP%]{flex-direction:column-reverse}[data-lu-overlay-position=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{transform:rotate(180deg) scaleX(-1)}[data-lu-overlay-align=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{justify-content:flex-start}[data-lu-overlay-align=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2)}[data-lu-overlay-align=right][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{justify-content:flex-end}[data-lu-overlay-align=right][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) * 2)}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer-wrapper[_ngcontent-%COMP%], [data-lu-overlay-position=right][_nghost-%COMP%]   .lu-overlay-pointer-wrapper[_ngcontent-%COMP%]{flex-direction:row;min-height:calc(var(--lu-base-gutter) * 4)}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%], [data-lu-overlay-position=right][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{align-items:center}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%], [data-lu-overlay-position=right][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{left:1px}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:before, [data-lu-overlay-position=right][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:before{border-right:8px solid var(--lu-overlay-border)}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:after, [data-lu-overlay-position=right][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]:after{top:1px;right:0;border-right:7px solid var(--lu-overlay-background)}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer-wrapper[_ngcontent-%COMP%]{flex-direction:row-reverse}[data-lu-overlay-position=left][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{transform:rotate(180deg) scaleY(-1)}[data-lu-overlay-align=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{align-items:flex-start}[data-lu-overlay-align=top][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}[data-lu-overlay-align=bottom][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]{align-items:flex-end}[data-lu-overlay-align=bottom][_nghost-%COMP%]   .lu-overlay-pointer[_ngcontent-%COMP%]   .lu-pointer[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) * 2)}"],
        changeDetection: 0
      }), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = t.oAB({
        type: b
      }), b.ɵinj = t.cJS({
        imports: [e.ez]
      }), b;
    })();
});
