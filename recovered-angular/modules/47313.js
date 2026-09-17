// Extracted from main; webpack module 47313. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => v,
    X: () => C
  });
  var t = i(94650),
    e = i(44348),
    a = i(41089),
    m = i(15635),
    d = i(85273),
    M = i(41742),
    b = i(46757),
    A = i(99246),
    N = i(24006),
    I = i(59250),
    O = i(64248),
    L = i(39300);
  let C = (() => {
      class f extends e.DA {
        constructor(h, x, u, T, R, B, y) {
          super(x, T, B, R, !0), this.elementRef = h, this.changeDetectorRef = x, this.ngZone = u, this.compareHost = T, this.ngControl = R, this.controlHost = B, this.selectorBehavior = y, this.positions = ["bottom-right", "top-right"], this.borderOffset = 1, this.width = "auto";
        }
        ngAfterContentInit() {
          a.V.observeFocus((0, m.Nj)(this.origin)).pipe((0, L.h)(h => h.type === d.fJ), (0, M.hx)(this.ngZone)).subscribe(() => this.dropdown?.close());
        }
        get origin() {
          return this.elementRef.nativeElement;
        }
        get listHostOrigin() {
          return this.origin;
        }
        get closeIfInnerClick() {
          return this.selectorBehavior === b.kx.RADIO_BUTTON;
        }
        get inactive() {
          return !0 === this.value;
        }
        keydownEvent(h) {
          this.dropdown && O.i.handleKeyboard(h, this.dropdown);
        }
        clickEvent() {
          this.disabled || (this.onTouched(), this.dropdown ? this.dropdown.toggle() : !0 !== this.value && (this.selectorBehavior === b.kx.RADIO_BUTTON ? this.select() : this.toggle()));
        }
      }
      return f.ɵfac = function (h) {
        return new (h || f)(t.Y36(t.SBq), t.Y36(t.sBO), t.Y36(t.R0b), t.Y36(e.Vg, 8), t.Y36(N.a5, 10), t.Y36(A.fU, 8), t.Y36(A.od, 8));
      }, f.ɵdir = t.lG2({
        type: f,
        selectors: [["", "luSegment", ""]],
        contentQueries: function (h, x, u) {
          if (1 & h && t.Suo(u, I.$, 5), 2 & h) {
            let T;
            t.iGM(T = t.CRH()) && (x.dropdown = T.first);
          }
        },
        hostBindings: function (h, x) {
          1 & h && t.NdJ("keydown", function (T) {
            return x.keydownEvent(T);
          })("click", function () {
            return x.clickEvent();
          });
        },
        exportAs: ["luSegment"],
        features: [t._Bn([{
          provide: A.BU,
          useExisting: f
        }, {
          provide: A.N4,
          useExisting: f
        }, {
          provide: e.Mn,
          useExisting: f
        }, {
          provide: A.bD,
          useValue: !1
        }]), t.qOj]
      }), f;
    })(),
    v = (() => {
      class f {}
      return f.ɵfac = function (h) {
        return new (h || f)();
      }, f.ɵmod = t.oAB({
        type: f
      }), f.ɵinj = t.cJS({}), f;
    })();
});
