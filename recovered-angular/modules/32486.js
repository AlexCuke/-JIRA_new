// Extracted from main; webpack module 32486. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    t: () => d,
    y: () => m
  });
  var t = i(94650),
    e = i(27243);
  const a = ["bcElement"];
  let m = (() => {
      class M {
        get options() {
          return {
            format: this.format,
            lineColor: this.lineColor,
            width: this.width,
            height: this.height,
            displayValue: this.displayValue,
            fontOptions: this.fontOptions,
            font: this.font,
            textAlign: this.textAlign,
            textPosition: this.textPosition,
            textMargin: this.textMargin,
            fontSize: this.fontSize,
            background: this.background,
            margin: this.margin,
            marginTop: this.marginTop,
            marginBottom: this.marginBottom,
            marginLeft: this.marginLeft,
            marginRight: this.marginRight,
            valid: this.valid
          };
        }
        constructor(A) {
          this.renderer = A, this.elementType = "svg", this.cssClass = "barcode", this.format = "CODE128", this.lineColor = "#000000", this.width = 2, this.height = 100, this.displayValue = !1, this.fontOptions = "", this.font = "monospace", this.textAlign = "center", this.textPosition = "bottom", this.textMargin = 2, this.fontSize = 20, this.background = "#ffffff", this.margin = 10, this.marginTop = 10, this.marginBottom = 10, this.marginLeft = 10, this.marginRight = 10, this.value = "", this.valid = () => !0;
        }
        ngAfterViewInit() {
          this.createBarcode();
        }
        ngOnChanges() {
          this.bcElement && this.createBarcode();
        }
        createBarcode() {
          if (!this.value) return;
          let A;
          switch (this.elementType) {
            case "img":
              A = this.renderer.createElement("img");
              break;
            case "canvas":
              A = this.renderer.createElement("canvas");
              break;
            default:
              A = this.renderer.createElement("svg", "svg");
          }
          e(A, this.value, this.options);
          for (const N of this.bcElement.nativeElement.childNodes) this.renderer.removeChild(this.bcElement.nativeElement, N);
          this.renderer.appendChild(this.bcElement.nativeElement, A);
        }
      }
      return M.ɵfac = function (A) {
        return new (A || M)(t.Y36(t.Qsj));
      }, M.ɵcmp = t.Xpm({
        type: M,
        selectors: [["ngx-barcode6"]],
        viewQuery: function (A, N) {
          if (1 & A && t.Gf(a, 5), 2 & A) {
            let I;
            t.iGM(I = t.CRH()) && (N.bcElement = I.first);
          }
        },
        inputs: {
          elementType: ["bc-element-type", "elementType"],
          cssClass: ["bc-class", "cssClass"],
          format: ["bc-format", "format"],
          lineColor: ["bc-line-color", "lineColor"],
          width: ["bc-width", "width"],
          height: ["bc-height", "height"],
          displayValue: ["bc-display-value", "displayValue"],
          fontOptions: ["bc-font-options", "fontOptions"],
          font: ["bc-font", "font"],
          textAlign: ["bc-text-align", "textAlign"],
          textPosition: ["bc-text-position", "textPosition"],
          textMargin: ["bc-text-margin", "textMargin"],
          fontSize: ["bc-font-size", "fontSize"],
          background: ["bc-background", "background"],
          margin: ["bc-margin", "margin"],
          marginTop: ["bc-margin-top", "marginTop"],
          marginBottom: ["bc-margin-bottom", "marginBottom"],
          marginLeft: ["bc-margin-left", "marginLeft"],
          marginRight: ["bc-margin-right", "marginRight"],
          value: ["bc-value", "value"],
          valid: ["bc-valid", "valid"]
        },
        features: [t.TTD],
        decls: 2,
        vars: 2,
        consts: [["bcElement", ""]],
        template: function (A, N) {
          1 & A && t._UZ(0, "div", null, 0), 2 & A && t.Tol(N.cssClass);
        },
        encapsulation: 2
      }), M;
    })(),
    d = (() => {
      class M {}
      return M.ɵfac = function (A) {
        return new (A || M)();
      }, M.ɵmod = t.oAB({
        type: M
      }), M.ɵinj = t.cJS({}), M;
    })();
});
