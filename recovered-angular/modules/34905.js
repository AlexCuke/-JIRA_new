// Extracted from main; webpack module 34905. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    e: () => O,
    n: () => I
  });
  var t = i(97582),
    e = i(94650),
    a = i(85273),
    m = i(58435),
    d = i(78372),
    M = i(41742),
    b = i(44348),
    A = i(61969),
    N = i(36895);
  let I = (() => {
      let L = class {
        constructor(v, f, E, h, x, u) {
          this.elementRef = v, this.renderer = f, this.ngZone = E, this.resizeObserver = h, this.changeDetectorRef = x, this.displayValueHost = u, this.items = a.LZ, this.delimiter = ", ", this.startOfString = "Выбрано: ", this.endOfString = " еще $truncatedCount", this.truncatedString = "", this.spanElement = null, this.resizeObserver.observe(this.elementRef).pipe((0, d.b)(50), (0, M.hx)(this.ngZone), (0, m.t)(this)).subscribe(() => this.truncateString());
        }
        ngOnChanges() {
          this.truncateString();
        }
        createElement() {
          this.spanElement = this.renderer.createElement("span"), this.renderer.addClass(this.spanElement, "span-element"), this.renderer.appendChild(this.elementRef.nativeElement, this.spanElement);
        }
        destroyElement() {
          this.spanElement?.remove(), this.spanElement = null;
        }
        joinItems(v, f) {
          return this.items.slice(v, f).map(E => this.displayValueHost?.displayValueFn(E) ?? (0, a.BW)(E)).join(this.delimiter);
        }
        getEndOfString(v) {
          return this.endOfString.replace(/\$truncatedCount/g, String(v));
        }
        truncateString() {
          if (this.truncatedString = this.items ? `${this.startOfString}${this.joinItems(0, 1)}` : "", this.createElement(), this.spanElement && this.items) {
            const v = this.elementRef.nativeElement.offsetWidth;
            for (let f = 0; f < this.items.length; f++) {
              const E = f < this.items.length - 1 ? this.getEndOfString(this.items.length - f - 1) : "",
                h = `${this.startOfString}${this.joinItems(0, f + 1)}${E}`;
              if (this.spanElement.textContent = h, this.spanElement.offsetWidth > v) break;
              this.truncatedString = h;
            }
          }
          this.changeDetectorRef.markForCheck(), this.destroyElement();
        }
      };
      return L.ɵfac = function (v) {
        return new (v || L)(e.Y36(e.SBq), e.Y36(e.Qsj), e.Y36(e.R0b), e.Y36(A.d), e.Y36(e.sBO), e.Y36(b.p7, 8));
      }, L.ɵcmp = e.Xpm({
        type: L,
        selectors: [["lu-overflow-items"]],
        inputs: {
          items: "items",
          delimiter: "delimiter",
          startOfString: "startOfString",
          endOfString: "endOfString"
        },
        features: [e.TTD],
        decls: 1,
        vars: 1,
        template: function (v, f) {
          1 & v && e._uU(0), 2 & v && e.Oqu(f.truncatedString);
        },
        styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:block;width:100%;height:100%;white-space:nowrap}.span-element[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:100%;white-space:nowrap}"],
        changeDetection: 0
      }), L = (0, t.gn)([(0, m.c)()], L), L;
    })(),
    O = (() => {
      class L {}
      return L.ɵfac = function (v) {
        return new (v || L)();
      }, L.ɵmod = e.oAB({
        type: L
      }), L.ɵinj = e.cJS({
        imports: [N.ez]
      }), L;
    })();
});
