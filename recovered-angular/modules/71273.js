// Extracted from main; webpack module 71273. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    c: () => O,
    p: () => L
  });
  var t = i(94650),
    e = i(26652),
    a = i(15635),
    m = i(41742),
    d = i(77579),
    M = i(11848),
    b = i(63900),
    A = i(54004),
    N = i(71884),
    I = i(82722);
  let O = (() => {
      class C {
        constructor(f, E, h) {
          this.elementRef = f, this.renderer = E, this.ngZone = h, this.dropdown = null, this.ngUnsubscribe = new d.x();
        }
        ngOnChanges(f) {
          f?.dropdown.currentValue !== f?.dropdown.previousValue && (this.unbind(), f.dropdown.currentValue && setTimeout(() => {
            this.bind();
          }));
        }
        get hostClass() {
          return "lu-transition";
        }
        bind() {
          if (this.dropdown) {
            const f = e.Yc.getRelativePosition((0, a._2)(this.dropdown.positions)[0]);
            let E = f;
            this.rotate(f, !1), this.dropdown.beforeOpen.pipe((0, b.w)(() => this.dropdown?.overlay?.positionChanges() || M.C), (0, A.U)(h => h.connectionPair), (0, N.x)(), (0, A.U)(h => e.Yc.getOverlayPosition(h)), (0, I.R)(this.ngUnsubscribe), (0, m.IU)(this.ngZone)).subscribe(h => {
              E = e.Yc.getRelativePosition(h), this.rotate(E, !!this.dropdown?.isOpened);
            }), this.dropdown.beforeClose.pipe((0, I.R)(this.ngUnsubscribe), (0, m.IU)(this.ngZone)).subscribe(() => this.rotate(E, !1));
          }
        }
        unbind() {
          this.rotate("bottom", !1), this.ngUnsubscribe.next();
        }
        rotate(f, E) {
          switch (f) {
            case "bottom":
            default:
              return this.renderer.setStyle(this.elementRef.nativeElement, "transform", E ? "rotateZ(180deg)" : "rotateZ(0)");
            case "top":
              return this.renderer.setStyle(this.elementRef.nativeElement, "transform", E ? "rotateZ(0)" : "rotateZ(180deg)");
            case "left":
              return this.renderer.setStyle(this.elementRef.nativeElement, "transform", E ? "rotateZ(-90deg)" : "rotateZ(90deg)");
            case "right":
              return this.renderer.setStyle(this.elementRef.nativeElement, "transform", E ? "rotateZ(90deg)" : "rotateZ(-90deg)");
          }
        }
        ngOnDestroy() {
          this.ngUnsubscribe.next(), this.ngUnsubscribe.complete();
        }
      }
      return C.ɵfac = function (f) {
        return new (f || C)(t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(t.R0b));
      }, C.ɵdir = t.lG2({
        type: C,
        selectors: [["lu-svg-icon", "luChevronRotate", ""]],
        hostVars: 2,
        hostBindings: function (f, E) {
          2 & f && t.Tol(E.hostClass);
        },
        inputs: {
          dropdown: ["luChevronRotate", "dropdown"]
        },
        features: [t.TTD]
      }), C;
    })(),
    L = (() => {
      class C {}
      return C.ɵfac = function (f) {
        return new (f || C)();
      }, C.ɵmod = t.oAB({
        type: C
      }), C.ɵinj = t.cJS({}), C;
    })();
});
