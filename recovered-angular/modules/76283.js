// Extracted from main; webpack module 76283. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    n: () => a,
    v: () => m
  });
  var t = i(94650),
    e = i(26652);
  let a = (() => {
      class d {
        constructor(b) {
          this.elementRef = b, this.autofocus = !0;
        }
        ngOnInit() {
          this.autofocus && e.Hn.isNativeKeyboardFocusable(this.elementRef.nativeElement) && this.elementRef.nativeElement.focus();
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)(t.Y36(t.SBq));
      }, d.ɵdir = t.lG2({
        type: d,
        selectors: [["", "luAutofocus", ""]],
        inputs: {
          autofocus: ["luAutofocus", "autofocus"]
        }
      }), d;
    })(),
    m = (() => {
      class d {}
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵmod = t.oAB({
        type: d
      }), d.ɵinj = t.cJS({}), d;
    })();
});
