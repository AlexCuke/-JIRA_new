// Extracted from main; webpack module 98781. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    b: () => R,
    e: () => T
  });
  var t = i(97582),
    e = i(98184),
    a = i(36895),
    m = i(94650),
    d = i(41089),
    M = i(15635),
    b = i(41742),
    A = i(26652),
    N = i(77579),
    I = i(71884),
    O = i(34304),
    L = i(89740),
    C = i(37340),
    v = i(44217),
    f = i(45361),
    E = i(3378);
  const h = ["contentContainer"];
  function x(B, y) {
    if (1 & B && (m.ynx(0), m._uU(1), m.BQk()), 2 & B) {
      const j = y.polymorpheusOutlet;
      m.xp6(1), m.Oqu(j);
    }
  }
  const u = function () {
    return ["focusin", "focusout", "keydown", "scroll"];
  };
  let T = (() => {
      class B {
        constructor(j, W, F, Le, ke) {
          this.elementRef = j, this.documentRef = W, this.changeDetectorRef = F, this.ngZone = Le, this.animationBuilder = ke, this.content = "", this.relativePosition = null, this.animationEvent$ = new N.x(), this.isOpened = !0;
        }
        ngOnInit() {
          this.runAnimation(this.config?.openAnimation || []), this.config?.positionStrategy instanceof e._G && this.config.positionStrategy.positionChanges.pipe((0, I.x)((j, W) => j.connectionPair === W.connectionPair), (0, b.hx)(this.ngZone)).subscribe(j => {
            this.currentPosition = A.Yc.getOverlayPosition(j.connectionPair), this.relativePosition = A.Yc.getRelativePosition(this.currentPosition), this.changeDetectorRef.markForCheck();
          });
        }
        get contactBorder() {
          return !!this.config?.contactBorder;
        }
        get overlayId() {
          return this.config?.overlayId || "";
        }
        get isFocused() {
          return !!this.focusCatcher?.focused;
        }
        get animationEvent() {
          return this.animationEvent$.asObservable();
        }
        get overlayAlign() {
          return this.currentPosition ? A.Yc.getPositionAlign(A.Yc.toConnectedPosition(this.currentPosition)) : null;
        }
        getContext(j) {
          return {
            $implicit: j
          };
        }
        close() {
          this.isOpened && (this.runAnimation(this.config?.closeAnimation || [], !0), this.isOpened = !1, this.changeDetectorRef.markForCheck());
        }
        focus() {
          this.contentContainer && A.Hn.focusClosestElement((0, M.Nj)(this.contentContainer), (0, M.Nj)(this.contentContainer));
        }
        markForCheck() {
          this.changeDetectorRef.markForCheck();
        }
        runAnimation(j, W = !1) {
          const F = this.animationBuilder.build(j).create(this.elementRef.nativeElement);
          F.onStart(() => this.animationEvent$.next(W ? "beforeClose" : "beforeOpen")), F.onDone(() => this.animationEvent$.next(W ? "afterClose" : "afterOpen")), F.play();
        }
        ngOnDestroy() {
          this.isFocused && this.config && this.config.viewContainerRef && !this.config.notFocusClosestElement && A.Hn.focusClosestElement(this.config.viewContainerRef.element.nativeElement, this.documentRef.body, !1);
        }
      }
      return B.ɵfac = function (j) {
        return new (j || B)(m.Y36(m.SBq), m.Y36(a.K0), m.Y36(m.sBO), m.Y36(m.R0b), m.Y36(C._j));
      }, B.ɵcmp = m.Xpm({
        type: B,
        selectors: [["lu-overlay-container"]],
        viewQuery: function (j, W) {
          if (1 & j && (m.Gf(h, 7, m.SBq), m.Gf(d.V, 5), m.Gf(L.Li, 7)), 2 & j) {
            let F;
            m.iGM(F = m.CRH()) && (W.contentContainer = F.first), m.iGM(F = m.CRH()) && (W.focusCatcher = F.first), m.iGM(F = m.CRH()) && (W.outlet = F.first);
          }
        },
        hostVars: 3,
        hostBindings: function (j, W) {
          2 & j && (m.Ikx("id", W.overlayId), m.uIk("data-lu-overlay-position", W.relativePosition)("data-lu-overlay-with-contact-border", W.contactBorder));
        },
        decls: 5,
        vars: 12,
        consts: [[3, "overlayPosition", "overlayAlign", "withPointer", "luEventSwitcher", "events"], ["data-test-role", "modal", "luFocusCatcher", "", 3, "focusHost"], [1, "lu-overlay-content", 3, "tabIndex"], ["contentContainer", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
        template: function (j, W) {
          if (1 & j && (m.TgZ(0, "lu-overlay-pointer", 0)(1, "lu-focus-control", 1)(2, "div", 2, 3), m.YNc(4, x, 2, 1, "ng-container", 4), m.qZA()()()), 2 & j) {
            let F, Le;
            m.Q6J("overlayPosition", W.relativePosition)("overlayAlign", W.overlayAlign)("withPointer", !(null == W.config || !W.config.withPointer))("luEventSwitcher", null !== (F = null == W.config || null == W.config.viewContainerRef || null == W.config.viewContainerRef.element ? null : W.config.viewContainerRef.element.nativeElement) && void 0 !== F ? F : null)("events", m.DdM(11, u)), m.xp6(1), m.Q6J("focusHost", null !== (Le = null == W.config || null == W.config.viewContainerRef || null == W.config.viewContainerRef.element ? null : W.config.viewContainerRef.element.nativeElement) && void 0 !== Le ? Le : null), m.xp6(1), m.ekj("word-break", null == W.config ? null : W.config.wordBreakAll), m.Q6J("tabIndex", -1), m.xp6(2), m.Q6J("polymorpheusOutlet", W.content)("polymorpheusOutletContext", W.getContext(W.config.context));
          }
        },
        dependencies: [L.Li, v.a, f.X, E.G, d.V],
        styles: ["[_nghost-%COMP%]{display:block;height:100%;width:100%}.lu-overlay-content[_ngcontent-%COMP%]{width:100%;height:100%;background-color:var(--lu-overlay-background);border:1px solid var(--lu-overlay-border)}.lu-overlay-content.word-break[_ngcontent-%COMP%]{word-break:break-all}[data-lu-overlay-position=top][_nghost-%COMP%]{transform-origin:bottom}[data-lu-overlay-position=top][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-bottom:none}[data-lu-overlay-position=bottom][_nghost-%COMP%]{transform-origin:top}[data-lu-overlay-position=bottom][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-top:none}[data-lu-overlay-position=left][_nghost-%COMP%]{transform-origin:right}[data-lu-overlay-position=left][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-right:none}[data-lu-overlay-position=right][_nghost-%COMP%]{transform-origin:left}[data-lu-overlay-position=right][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-left:none}"],
        changeDetection: 0
      }), (0, t.gn)([O.J], B.prototype, "getContext", null), B;
    })(),
    R = (() => {
      class B {}
      return B.ɵfac = function (j) {
        return new (j || B)();
      }, B.ɵmod = m.oAB({
        type: B
      }), B.ɵinj = m.cJS({
        imports: [a.ez, L.wq, v.L, f.d, E.v, d.T]
      }), B;
    })();
});
