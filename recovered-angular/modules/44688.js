// Extracted from main; webpack module 44688. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    VA: () => O,
    ap: () => N
  });
  var t = i(94650),
    e = i(3977),
    a = i(74616),
    m = i(37372),
    d = i(98781),
    M = i(15635),
    b = i(1371);
  let A = 0,
    N = (() => {
      class L {
        constructor(v, f) {
          this.overlayService = v, this.modalConfig = f, this.containers = new Map();
        }
        open(v, f) {
          const E = {
              ...new a.sw(),
              ...(this.modalConfig || {}),
              ...(f || {})
            },
            h = this.buildConfig(E),
            x = this.overlayService.open(v, h, [{
              provide: e.UM,
              useValue: E.data
            }]);
          return E?.containerId && this.containers.get(E.containerId)?.attachModal(x, h.positionStrategy, E), x;
        }
        buildConfig(v) {
          const f = v.containerId && this.containers.get(v.containerId)?.elementRef.nativeElement || null,
            E = "lu-modal-" + ++A;
          return {
            overlayId: E,
            overlayContainer: d.e,
            viewContainerRef: v.viewContainerRef,
            positionStrategy: f ? this.overlayService.connectedPositionStrategy(f, {
              originX: "center",
              originY: "center",
              overlayX: "center",
              overlayY: "center"
            }).withLockedPosition(!0).withFlexibleDimensions(!1) : this.overlayService.globalPositionStrategy().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlayService.scrollStrategy().reposition(),
            hasBackdrop: !f,
            panelClass: v.panelClass,
            backdropClass: ["lu-overlay-backdrop", ...(0, M._2)(v.backdropClass), E],
            minWidth: v.size || v.minWidth,
            minHeight: v.minHeight,
            maxWidth: f ? Math.min(f.offsetWidth, v.size || Number(v.maxWidth) || 0) : v.size || v.maxWidth,
            maxHeight: v.maxHeight,
            height: v.height,
            width: v.width,
            context: v.data,
            disposeOnNavigation: v.closeOnNavigation,
            disposeOnRouteNavigation: v.closeOnNavigation,
            openAnimation: v.disableAnimation ? void 0 : b.dV,
            closeAnimation: v.disableAnimation ? void 0 : b.dE,
            disableClose: v.disableClose
          };
        }
        registerContainer(v) {
          v.containerId && this.containers.set(v.containerId, v);
        }
        unregisterContainer(v) {
          v.containerId && this.containers.delete(v.containerId);
        }
      }
      return L.ɵfac = function (v) {
        return new (v || L)(t.LFG(m.c), t.LFG(e.nQ, 8));
      }, L.ɵprov = t.Yz7({
        token: L,
        factory: L.ɵfac,
        providedIn: "root"
      }), L;
    })(),
    O = (() => {
      class L {}
      return L.ɵfac = function (v) {
        return new (v || L)();
      }, L.ɵmod = t.oAB({
        type: L
      }), L.ɵinj = t.cJS({}), L;
    })();
});
