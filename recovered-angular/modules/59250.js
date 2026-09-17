// Extracted from main; webpack module 59250. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => E,
    J: () => h
  });
  var t = i(97582),
    e = i(98184),
    a = i(94650),
    m = i(58435),
    d = i(99246),
    M = i(15635),
    b = i(37372),
    A = i(44348),
    N = i(26652),
    I = i(41742),
    O = i(77229),
    L = i(98781),
    C = i(1371);
  let v = 0,
    E = (() => {
      let x = class {
        constructor(T, R, B, y, j, W, F, Le, ke) {
          this.changeDetectorRef = T, this.overlayService = R, this.viewContainerRef = B, this.overlayScrollStrategy = y, this.ngZone = j, this.openAnimation = W, this.closeAnimation = F, this.overlayHost = Le, this.overrideScrollStrategy = ke, this.color = "light", this.content = "", this.origin = null, this.closeIfOutsideClick = !0, this.closeIfInnerClick = !1, this.closeOnNavigation = !0, this.notFocusClosestElement = !1, this.withArrow = !1, this.borderOffset = 0, this.panelClass = [], this.contactBorder = !0, this.positions = ["bottom-center", "top-center", "right-center", "left-center"], this.minHeight = "", this.maxHeight = "", this.height = "", this.minWidth = "", this.maxWidth = "", this.width = "", this.beforeOpen = new a.vpe(), this.afterOpen = new a.vpe(), this.beforeClose = new a.vpe(), this.afterClose = new a.vpe(), this.overlayContent = "", this.dropdownId = "lu-dropdown-" + ++v, this.overlay = null, this.overlayProperties = this.getOverlayProperties();
        }
        ngOnChanges({
          origin: T
        }) {
          if (T && T.currentValue !== T.previousValue && (T.currentValue || (this.origin = T.previousValue), this.overlay)) {
            const R = this.overlay.overlayRef.getConfig().positionStrategy;
            R instanceof e._G && this.currentOrigin && this.overlay.overlayRef.updatePositionStrategy(R.setOrigin(this.currentOrigin));
          }
          this.updateOverlayPosition();
        }
        focus() {
          this.overlay?.focus();
        }
        get isFocused() {
          return !!this.overlay?.isFocused;
        }
        open() {
          if (!this.overlay?.hasAttached) {
            const T = this.getConfig();
            this.overlay = this.overlayService.open(this.content || this.overlayContent, T), this.beforeOpen.emit(), this.overlay?.afterOpen().pipe((0, I.IU)(this.ngZone)).subscribe(() => this.afterOpen.emit()), this.overlay?.beforeClose().pipe((0, I.IU)(this.ngZone)).subscribe(() => this.beforeClose.emit()), this.overlay?.afterClose().pipe((0, I.IU)(this.ngZone)).subscribe(() => this.afterClose.emit()), this.overlay.beforeClose().subscribe(() => this.close()), this.changeDetectorRef.markForCheck();
          }
        }
        close() {
          this.isOpened && (this.overlay?.close(), this.changeDetectorRef.markForCheck());
        }
        toggle() {
          this.isOpened ? this.close() : this.open();
        }
        get isOpened() {
          return !0 === this.overlay?.isOpened;
        }
        updateOverlayPosition() {
          this.overlay && this.overlay.hasAttached && (this.overlay.overlayRef.updateSize(this.getConfig()), this.overlay.overlayRef.updatePosition());
        }
        get currentOrigin() {
          return this.origin instanceof e.xu ? this.origin.elementRef.nativeElement : this.origin || this.overlayHost?.origin || null;
        }
        getPositions(T, R) {
          const B = (0, M.Nj)(this.currentOrigin);
          return B instanceof HTMLElement ? N.Yc.getConnectedPosition(T && (0, M._2)(T).length ? T : ["bottom-center", "top-center", "right-center", "left-center"], B, -1 * R, this.withArrow) : T && (0, M._2)(T).length ? (0, M._2)(T) : ["bottom-center", "top-center", "right-center", "left-center"];
        }
        getConfig() {
          const T = (0, M.es)(this.overlayProperties, this.getOverlayProperties(), this.overlayHost);
          if (!this.currentOrigin) throw A.vE.error("В LuDropdownComponent необходимо передать origin!");
          return {
            overlayId: this.dropdownId,
            overlayContainer: L.e,
            positionStrategy: this.overlayService.connectedPositionStrategy(this.currentOrigin, this.getPositions(T.positions || [], T.borderOffset || 0)),
            scrollStrategy: this.overrideScrollStrategy || this.overlayScrollStrategy,
            viewContainerRef: this.viewContainerRef,
            openAnimation: this.openAnimation || C.ye,
            closeAnimation: this.closeAnimation,
            notFocusClosestElement: this.notFocusClosestElement,
            ...T,
            panelClass: [`lu-dropdown-color-${this.color}`, ...(0, M._2)(this.panelClass), ...(0, M._2)(this.overlayHost?.panelClass)]
          };
        }
        getOverlayProperties() {
          return {
            origin: this.currentOrigin || void 0,
            positions: this.positions,
            closeIfOutsideClick: this.closeIfOutsideClick,
            closeIfInnerClick: this.closeIfInnerClick,
            withPointer: this.withArrow,
            contactBorder: this.contactBorder,
            borderOffset: this.borderOffset,
            panelClass: this.panelClass,
            width: this.width,
            height: this.height,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
            disposeOnNavigation: this.closeOnNavigation,
            disposeOnRouteNavigation: this.closeOnNavigation
          };
        }
        ngOnDestroy() {
          this.overlay && this.overlay.overlayRef.dispose();
        }
      };
      return x.ɵfac = function (T) {
        return new (T || x)(a.Y36(a.sBO), a.Y36(b.c), a.Y36(a.s_b), a.Y36(A.Dx), a.Y36(a.R0b), a.Y36(d.hy, 8), a.Y36(d.oL, 8), a.Y36(d.N4, 8), a.Y36(A.QK, 8));
      }, x.ɵcmp = a.Xpm({
        type: x,
        selectors: [["lu-dropdown"]],
        contentQueries: function (T, R, B) {
          if (1 & T && a.Suo(B, O.o, 5, a.Rgc), 2 & T) {
            let y;
            a.iGM(y = a.CRH()) && (R.overlayContent = y.first);
          }
        },
        hostVars: 1,
        hostBindings: function (T, R) {
          1 & T && a.NdJ("focus", function () {
            return R.focus();
          }), 2 & T && a.uIk("data-lu-dropdown-id", R.dropdownId);
        },
        inputs: {
          color: "color",
          content: "content",
          origin: "origin",
          closeIfOutsideClick: "closeIfOutsideClick",
          closeIfInnerClick: "closeIfInnerClick",
          closeOnNavigation: "closeOnNavigation",
          notFocusClosestElement: "notFocusClosestElement",
          withArrow: "withArrow",
          borderOffset: "borderOffset",
          panelClass: "panelClass",
          contactBorder: "contactBorder",
          positions: "positions",
          minHeight: "minHeight",
          maxHeight: "maxHeight",
          height: "height",
          minWidth: "minWidth",
          maxWidth: "maxWidth",
          width: "width"
        },
        outputs: {
          beforeOpen: "beforeOpen",
          afterOpen: "afterOpen",
          beforeClose: "beforeClose",
          afterClose: "afterClose"
        },
        features: [a._Bn([b.c]), a.TTD],
        decls: 0,
        vars: 0,
        template: function (T, R) {},
        styles: [".lu-dropdown-color-dark{--lu-overlay-background: var(--lu-black-80);--lu-overlay-border: var(--lu-black-80);color:var(--lu-white)}"],
        changeDetection: 0
      }), x = (0, t.gn)([(0, m.c)()], x), x;
    })(),
    h = (() => {
      class x {}
      return x.ɵfac = function (T) {
        return new (T || x)();
      }, x.ɵmod = a.oAB({
        type: x
      }), x.ɵinj = a.cJS({
        imports: [b.H]
      }), x;
    })();
});
