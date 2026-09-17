// Extracted from main; webpack module 24624. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => a,
    r: () => e
  });
  var t = i(94650);
  let e = (() => {
      class m {
        constructor(M, b) {
          this.elementRef = M, this.renderer = b, this.rotated = !1, this.from = 0, this.to = 90;
        }
        ngOnChanges({
          rotated: M
        }) {
          M && this.rotate(this.rotated ? this.to : this.from, !0);
        }
        ngOnInit() {
          this.rotate(this.rotated ? this.to : this.from);
        }
        rotate(M, b) {
          b && this.renderer.setStyle(this.elementRef.nativeElement, "transition", "var(--lu-transition)"), this.renderer.setStyle(this.elementRef.nativeElement, "transform", `rotateZ(${M}deg`);
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)(t.Y36(t.SBq), t.Y36(t.Qsj));
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["", "luRotator", ""]],
        inputs: {
          rotated: ["luRotator", "rotated"],
          from: "from",
          to: "to"
        },
        features: [t.TTD]
      }), m;
    })(),
    a = (() => {
      class m {}
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵmod = t.oAB({
        type: m
      }), m.ɵinj = t.cJS({}), m;
    })();
});
