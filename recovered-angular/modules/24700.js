// Extracted from main; webpack module 24700. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Q: () => d,
    o: () => m
  });
  var t = i(94650),
    e = i(36895);
  const a = ["*"];
  let m = (() => {
      class M {
        constructor() {
          this.dividerType = "middle";
        }
      }
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵcmp = t.Xpm({
        type: M,
        selectors: [["lu-combined-controls"]],
        hostVars: 1,
        hostBindings: function (A, N) {
          2 & A && t.uIk("data-lu-content-divider-type", N.dividerType);
        },
        inputs: {
          dividerType: "dividerType"
        },
        ngContentSelectors: a,
        decls: 2,
        vars: 0,
        consts: [[1, "lu-combined-controls-wrapper"]],
        template: function (A, N) {
          1 & A && (t.F$t(), t.TgZ(0, "div", 0), t.Hsn(1), t.qZA());
        },
        styles: ["[_nghost-%COMP%]{--lu-input-border-color: transparent;--lu-input-border-hover-color: transparent}[_nghost-%COMP%]:not([data-lu-content-divider-type=none])   .content-divider[_ngcontent-%COMP%], :not([data-lu-content-divider-type=none])[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]    >*:not(button)~*:not(button):before{position:absolute;content:\"\";left:0;top:8px;z-index:1;height:24px;width:1px;background-color:var(--lu-black-15)}[data-lu-content-divider-type=middle][_nghost-%COMP%]   .content-divider[_ngcontent-%COMP%]{height:24px}[data-lu-content-divider-type=full][_nghost-%COMP%]   .content-divider[_ngcontent-%COMP%]{height:100%;top:0;background-color:var(--lu-black-40)}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]:before{position:absolute;content:\"\";left:0;top:0;z-index:1;width:100%;height:100%;border:1px solid var(--lu-border);pointer-events:none}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]    >*{position:relative}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]    >*:not(:first-child){margin-left:-1px}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]     button{z-index:2}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]     button[lu-button-raised][data-lu-size=small]{margin:0 calc(var(--lu-base-gutter) / 2);font-weight:600!important;font-size:13px!important}[_nghost-%COMP%]   .lu-combined-controls-wrapper[_ngcontent-%COMP%]     button[lu-button-outer][data-lu-size=small]{margin:0 calc(var(--lu-base-gutter) / 2);font-weight:600!important;font-size:13px!important}"],
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
