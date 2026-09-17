// Extracted from main; webpack module 20330. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => N,
    e: () => I
  });
  var t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(15635),
    d = i(41742),
    M = i(39300),
    b = i(54004),
    A = i(61969);
  let N = (() => {
      let O = class {
        constructor(C, v, f, E) {
          this.changeDetectorRef = C, this.elementRef = v, this.ngZone = f, this.resizeObserver = E, this.resizeObserver.observe(this.elementRef).pipe((0, M.h)(h => h.some(x => x.target === this.elementRef.nativeElement)), (0, b.U)(h => h.find(x => x.target === this.elementRef.nativeElement)), (0, d.hx)(this.ngZone), (0, a.t)(this)).subscribe(h => {
            this.domRect = h?.contentRect, this.changeDetectorRef.markForCheck();
          });
        }
        get width() {
          return this.domRect?.width || (0, m.Nj)(this.elementRef).offsetWidth;
        }
        get height() {
          return this.domRect?.height || (0, m.Nj)(this.elementRef).offsetHeight;
        }
      };
      return O.ɵfac = function (C) {
        return new (C || O)(e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(e.R0b), e.Y36(A.d));
      }, O.ɵdir = e.lG2({
        type: O,
        selectors: [["", "luResizeObserver", ""]],
        exportAs: ["luResizeObserver"]
      }), O = (0, t.gn)([(0, a.c)()], O), O;
    })(),
    I = (() => {
      class O {}
      return O.ɵfac = function (C) {
        return new (C || O)();
      }, O.ɵmod = e.oAB({
        type: O
      }), O.ɵinj = e.cJS({}), O;
    })();
});
