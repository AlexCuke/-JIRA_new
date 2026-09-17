// Extracted from main; webpack module 70823. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => B,
    i: () => y
  });
  var t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(77579),
    d = i(54968),
    M = i(82805),
    b = i(56451),
    A = i(60515),
    N = i(39300),
    I = i(63900),
    O = i(82722),
    L = i(15635),
    C = i(37372),
    v = i(26652),
    f = i(41742),
    E = i(1371),
    h = i(85273),
    x = i(98781),
    u = i(99246),
    T = i(44348);
  let R = 0,
    B = (() => {
      let j = class {
        constructor(F, Le, ke, J, fe, ye, ae, Y, G) {
          this.elementRef = F, this.changeDetectorRef = Le, this.viewContainerRef = ke, this.overlayService = J, this.ngZone = fe, this.overlayScrollStrategy = ye, this.config = ae, this.tooltipHost = Y, this.overrideScrollStrategy = G, this.content = "", this.wordBreakAll = !1, this.delay = 100, this.withArrow = !0, this.borderOffset = 0, this.positions = ["top-center", "bottom-center", "right-center", "left-center"], this.customElementRef = null, this.canOpen = !0, this.panelClass = "", this.minHeight = "", this.maxHeight = "", this.height = "", this.minWidth = "", this.maxWidth = "", this.width = "", this.beforeOpen = new e.vpe(), this.afterOpen = new e.vpe(), this.beforeClose = new e.vpe(), this.afterClose = new e.vpe(), this.tooltipId = "lu-tooltip-" + ++R, this.overlay = null, this.test = new m.x();
        }
        ngAfterViewInit() {
          (0, d.R)(this.pointerOriginElement, "mouseenter").pipe((0, N.h)(() => this.canOpen && !this.isOpened), (0, I.w)(() => (0, M.H)(this.config?.delay || this.delay).pipe((0, O.R)((0, d.R)(this.pointerOriginElement, "mouseleave")))), (0, f.hx)(this.ngZone), (0, a.t)(this)).subscribe(() => this.show()), (0, b.T)((0, d.R)(this.pointerOriginElement, "mouseleave"), this.beforeOpen.pipe((0, I.w)(() => (0, L.EN)(this.overlay) ? (0, d.R)(this.overlay.overlayRef.overlayElement, "mouseleave") : A.E))).pipe((0, N.h)(() => this.isOpened), (0, I.w)(() => (0, M.H)(50).pipe((0, O.R)((0, d.R)(this.pointerOriginElement, "mouseenter")), (0, O.R)((0, L.EN)(this.overlay) ? (0, d.R)(this.overlay.overlayRef.overlayElement, "mouseenter") : A.E))), (0, a.t)(this), (0, f.hx)(this.ngZone)).subscribe(() => this.hide()), (0, d.R)(this.displayOriginElement, "click").pipe((0, N.h)(() => this.isOpened), (0, f.hx)(this.ngZone), (0, a.t)(this)).subscribe(() => this.hide());
        }
        show() {
          this.isOpened || (this.overlay = this.overlayService.open(this.content, {
            overlayId: this.tooltipId,
            origin: this.displayOriginElement,
            overlayContainer: x.e,
            positionStrategy: this.overlayService.connectedPositionStrategy(this.displayOriginElement, this.getPositions(this.positions, this.borderOffset || 0)),
            viewContainerRef: this.viewContainerRef,
            withPointer: this.config?.withArrow || this.withArrow,
            borderOffset: this.config?.borderOffset || this.borderOffset,
            contactBorder: !0,
            panelClass: [h.RK, ...(0, L._2)(this.panelClass || this.config?.panelClass)],
            height: this.config?.height || this.height,
            width: this.config?.width || this.width,
            minHeight: this.config?.minHeight || this.minHeight,
            minWidth: this.config?.minWidth || this.minWidth,
            maxHeight: this.config?.maxHeight || this.maxHeight,
            maxWidth: this.config?.maxWidth || this.maxWidth,
            scrollStrategy: this.overrideScrollStrategy || this.overlayScrollStrategy,
            disposeOnRouteNavigation: !0,
            openAnimation: E.YN,
            closeAnimation: E.ni,
            wordBreakAll: this.wordBreakAll
          }), this.beforeOpen.emit(), this.overlay?.afterOpen().pipe((0, f.IU)(this.ngZone)).subscribe(() => this.afterOpen.emit()), this.overlay?.beforeClose().pipe((0, f.IU)(this.ngZone)).subscribe(() => this.beforeClose.emit()), this.overlay?.afterClose().pipe((0, f.IU)(this.ngZone)).subscribe(() => this.afterClose.emit()), this.overlay?.beforeClose().subscribe(() => this.hide()), this.changeDetectorRef.markForCheck());
        }
        hide() {
          this.isOpened && (this.overlay?.close(), this.overlay = null, this.changeDetectorRef.markForCheck());
        }
        get isOpened() {
          return !!this.overlay;
        }
        ngOnDestroy() {
          this.overlay && this.overlay.overlayRef.dispose();
        }
        get pointerOriginElement() {
          return (0, L.EN)(this.customElementRef) ? (0, L.Nj)(this.customElementRef) : (0, L.EN)(this.pointerOrigin) ? (0, L.Nj)(this.pointerOrigin) : (0, L.EN)(this.tooltipHost) && (0, L.EN)(this.tooltipHost?.pointerOrigin) ? (0, L.Nj)(this.tooltipHost.pointerOrigin) : (0, L.Nj)(this.elementRef);
        }
        get displayOriginElement() {
          return (0, L.EN)(this.customElementRef) ? (0, L.Nj)(this.customElementRef) : (0, L.EN)(this.displayOrigin) ? (0, L.Nj)(this.displayOrigin) : (0, L.EN)(this.tooltipHost) && (0, L.EN)(this.tooltipHost?.displayOrigin) ? (0, L.Nj)(this.tooltipHost.displayOrigin) : (0, L.Nj)(this.elementRef);
        }
        getPositions(F, Le) {
          const ke = (0, L.Nj)(this.displayOriginElement);
          return ke instanceof HTMLElement ? v.Yc.getConnectedPosition(F && (0, L._2)(F).length ? F : ["bottom-center", "top-center", "right-center", "left-center"], ke, -1 * Le, this.withArrow) : F && (0, L._2)(F).length ? (0, L._2)(F) : ["bottom-center", "top-center", "right-center", "left-center"];
        }
      };
      return j.ɵfac = function (F) {
        return new (F || j)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(e.s_b), e.Y36(C.c), e.Y36(e.R0b), e.Y36(T.Dx), e.Y36(u.Ic, 8), e.Y36(u.Fx, 10), e.Y36(T.QK, 8));
      }, j.ɵdir = e.lG2({
        type: j,
        selectors: [["", "luTooltip", ""]],
        hostVars: 1,
        hostBindings: function (F, Le) {
          2 & F && e.uIk("data-lu-tooltip-id", Le.tooltipId);
        },
        inputs: {
          content: ["luTooltip", "content"],
          wordBreakAll: "wordBreakAll",
          delay: "delay",
          displayOrigin: "displayOrigin",
          pointerOrigin: "pointerOrigin",
          withArrow: "withArrow",
          borderOffset: "borderOffset",
          positions: "positions",
          customElementRef: "customElementRef",
          canOpen: "canOpen",
          panelClass: "panelClass",
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
        exportAs: ["luTooltip"],
        features: [e._Bn([C.c])]
      }), j = (0, t.gn)([(0, a.c)()], j), j;
    })(),
    y = (() => {
      class j {}
      return j.ɵfac = function (F) {
        return new (F || j)();
      }, j.ɵmod = e.oAB({
        type: j
      }), j.ɵinj = e.cJS({
        imports: [C.H]
      }), j;
    })();
});
