// Extracted from main; webpack module 86168. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    A: () => A,
    c: () => b
  });
  var t = i(97582),
    e = i(94650),
    a = i(34304),
    m = i(15635);
  const d = ["lu-floated-content", ""],
    M = ["*"];
  let b = (() => {
      class N {
        constructor(O, L, C) {
          this.elementRef = O, this.renderer = L, this.ngZone = C, this.propertyName = "", this.align = "left";
        }
        ngAfterViewChecked() {
          this.bindTo && this.align && this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.setPadding(this.elementRef.nativeElement.offsetWidth)));
        }
        setPadding(O) {
          this.bindTo && this.propertyName && this.renderer.setStyle((0, m.Nj)(this.bindTo), this.propertyName, O ? `${O}px` : null, 2);
        }
      }
      return N.ɵfac = function (O) {
        return new (O || N)(e.Y36(e.SBq), e.Y36(e.Qsj), e.Y36(e.R0b));
      }, N.ɵcmp = e.Xpm({
        type: N,
        selectors: [["", "lu-floated-content", ""]],
        hostVars: 1,
        hostBindings: function (O, L) {
          2 & O && e.uIk("data-lu-align", L.align);
        },
        inputs: {
          bindTo: "bindTo",
          propertyName: "propertyName",
          align: "align"
        },
        attrs: d,
        ngContentSelectors: M,
        decls: 1,
        vars: 0,
        template: function (O, L) {
          1 & O && (e.F$t(), e.Hsn(0));
        },
        styles: ["[_nghost-%COMP%]{position:absolute;display:flex;top:0;align-items:center;height:100%;pointer-events:none;mix-blend-mode:darken}[data-lu-align=left][_nghost-%COMP%]{left:0}[data-lu-align=right][_nghost-%COMP%]{right:0}[_nghost-%COMP%]    >*{pointer-events:auto}"],
        changeDetection: 0
      }), (0, t.gn)([a.J], N.prototype, "setPadding", null), N;
    })(),
    A = (() => {
      class N {}
      return N.ɵfac = function (O) {
        return new (O || N)();
      }, N.ɵmod = e.oAB({
        type: N
      }), N.ɵinj = e.cJS({}), N;
    })();
});
