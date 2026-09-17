// Extracted from main; webpack module 46385. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    B: () => M,
    M: () => d
  });
  var t = i(94650),
    e = i(97582),
    a = i(58435),
    m = i(8391);
  let d = (() => {
      let b = class {
        constructor(N, I, O) {
          this.localeService = N, this.changeDetectorRef = I, this.ngZone = O, this.localeService.localeChanges.pipe((0, a.t)(this)).subscribe(() => this.ngZone.run(() => this.changeDetectorRef.markForCheck()));
        }
        transform(N, I, O) {
          return this.localeService.getTranslation(N, I) ?? O ?? "";
        }
      };
      return b.ɵfac = function (N) {
        return new (N || b)(t.Y36(m.oo, 16), t.Y36(t.sBO, 16), t.Y36(t.R0b, 16));
      }, b.ɵpipe = t.Yjl({
        name: "luTranslate",
        type: b,
        pure: !1
      }), b = (0, e.gn)([(0, a.c)()], b), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = t.oAB({
        type: b
      }), b.ɵinj = t.cJS({}), b;
    })();
});
