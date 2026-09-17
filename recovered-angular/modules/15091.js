// Extracted from main; webpack module 15091. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    M: () => d,
    N: () => M
  });
  var t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(8391);
  let d = (() => {
      let b = class {
        constructor(N, I) {
          this.dateAdapter = N, this.changeDetectorRef = I, this.dateAdapter.localeChanges.pipe((0, a.t)(this)).subscribe(() => {
            this.changeDetectorRef.markForCheck();
          });
        }
        transform(N, I) {
          return N && this.dateAdapter.isValid(N) ? this.dateAdapter.format(N, I) : "";
        }
      };
      return b.ɵfac = function (N) {
        return new (N || b)(e.Y36(m.SW, 16), e.Y36(e.sBO, 16));
      }, b.ɵpipe = e.Yjl({
        name: "luDateFormatter",
        type: b,
        pure: !1
      }), b = (0, t.gn)([(0, a.c)()], b), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = e.oAB({
        type: b
      }), b.ɵinj = e.cJS({}), b;
    })();
});
