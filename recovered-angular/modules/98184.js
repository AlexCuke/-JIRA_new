// Extracted from main; webpack module 98184. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U8: () => Me,
    _G: () => pe,
    aV: () => q,
    xu: () => Ct
  });
  var t = i(24098),
    e = i(36895),
    a = i(94650),
    m = i(21281),
    d = i(83353),
    M = i(39300),
    b = i(95698),
    A = i(82722),
    N = i(40445),
    I = i(84080),
    O = i(77579),
    L = i(50727),
    C = i(56451);
  const v = (0, d.Mq)();
  class f {
    constructor(Ee, je) {
      this._viewportRuler = Ee, this._previousHTMLStyles = {
        top: "",
        left: ""
      }, this._isEnabled = !1, this._document = je;
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        const Ee = this._document.documentElement;
        this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = Ee.style.left || "", this._previousHTMLStyles.top = Ee.style.top || "", Ee.style.left = (0, m.HM)(-this._previousScrollPosition.left), Ee.style.top = (0, m.HM)(-this._previousScrollPosition.top), Ee.classList.add("cdk-global-scrollblock"), this._isEnabled = !0;
      }
    }
    disable() {
      if (this._isEnabled) {
        const Ee = this._document.documentElement,
          Mt = Ee.style,
          Je = this._document.body.style,
          Xt = Mt.scrollBehavior || "",
          Nn = Je.scrollBehavior || "";
        this._isEnabled = !1, Mt.left = this._previousHTMLStyles.left, Mt.top = this._previousHTMLStyles.top, Ee.classList.remove("cdk-global-scrollblock"), v && (Mt.scrollBehavior = Je.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), v && (Mt.scrollBehavior = Xt, Je.scrollBehavior = Nn);
      }
    }
    _canBeEnabled() {
      if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
      const je = this._document.body,
        Mt = this._viewportRuler.getViewportSize();
      return je.scrollHeight > Mt.height || je.scrollWidth > Mt.width;
    }
  }
  class h {
    constructor(Ee, je, Mt, Je) {
      this._scrollDispatcher = Ee, this._ngZone = je, this._viewportRuler = Mt, this._config = Je, this._scrollSubscription = null, this._detach = () => {
        this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach());
      };
    }
    attach(Ee) {
      this._overlayRef = Ee;
    }
    enable() {
      if (this._scrollSubscription) return;
      const Ee = this._scrollDispatcher.scrolled(0).pipe((0, M.h)(je => !je || !this._overlayRef.overlayElement.contains(je.getElementRef().nativeElement)));
      this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = Ee.subscribe(() => {
        const je = this._viewportRuler.getViewportScrollPosition().top;
        Math.abs(je - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition();
      })) : this._scrollSubscription = Ee.subscribe(this._detach);
    }
    disable() {
      this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null);
    }
    detach() {
      this.disable(), this._overlayRef = null;
    }
  }
  class x {
    enable() {}
    disable() {}
    attach() {}
  }
  function u(Ze, Ee) {
    return Ee.some(je => Ze.bottom < je.top || Ze.top > je.bottom || Ze.right < je.left || Ze.left > je.right);
  }
  function T(Ze, Ee) {
    return Ee.some(je => Ze.top < je.top || Ze.bottom > je.bottom || Ze.left < je.left || Ze.right > je.right);
  }
  class R {
    constructor(Ee, je, Mt, Je) {
      this._scrollDispatcher = Ee, this._viewportRuler = je, this._ngZone = Mt, this._config = Je, this._scrollSubscription = null;
    }
    attach(Ee) {
      this._overlayRef = Ee;
    }
    enable() {
      this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(() => {
        if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
          const je = this._overlayRef.overlayElement.getBoundingClientRect(),
            {
              width: Mt,
              height: Je
            } = this._viewportRuler.getViewportSize();
          u(je, [{
            width: Mt,
            height: Je,
            bottom: Je,
            right: Mt,
            top: 0,
            left: 0
          }]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
        }
      }));
    }
    disable() {
      this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null);
    }
    detach() {
      this.disable(), this._overlayRef = null;
    }
  }
  let B = (() => {
    class Ze {
      constructor(je, Mt, Je, Xt) {
        this._scrollDispatcher = je, this._viewportRuler = Mt, this._ngZone = Je, this.noop = () => new x(), this.close = Nn => new h(this._scrollDispatcher, this._ngZone, this._viewportRuler, Nn), this.block = () => new f(this._viewportRuler, this._document), this.reposition = Nn => new R(this._scrollDispatcher, this._viewportRuler, this._ngZone, Nn), this._document = Xt;
      }
    }
    return Ze.ɵfac = function (je) {
      return new (je || Ze)(a.LFG(t.mF), a.LFG(t.rL), a.LFG(a.R0b), a.LFG(e.K0));
    }, Ze.ɵprov = a.Yz7({
      token: Ze,
      factory: Ze.ɵfac,
      providedIn: "root"
    }), Ze;
  })();
  class y {
    constructor(Ee) {
      if (this.scrollStrategy = new x(), this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, Ee) {
        const je = Object.keys(Ee);
        for (const Mt of je) void 0 !== Ee[Mt] && (this[Mt] = Ee[Mt]);
      }
    }
  }
  class F {
    constructor(Ee, je) {
      this.connectionPair = Ee, this.scrollableViewProperties = je;
    }
  }
  let J = (() => {
      class Ze {
        constructor(je) {
          this._attachedOverlays = [], this._document = je;
        }
        ngOnDestroy() {
          this.detach();
        }
        add(je) {
          this.remove(je), this._attachedOverlays.push(je);
        }
        remove(je) {
          const Mt = this._attachedOverlays.indexOf(je);
          Mt > -1 && this._attachedOverlays.splice(Mt, 1), 0 === this._attachedOverlays.length && this.detach();
        }
      }
      return Ze.ɵfac = function (je) {
        return new (je || Ze)(a.LFG(e.K0));
      }, Ze.ɵprov = a.Yz7({
        token: Ze,
        factory: Ze.ɵfac,
        providedIn: "root"
      }), Ze;
    })(),
    fe = (() => {
      class Ze extends J {
        constructor(je, Mt) {
          super(je), this._ngZone = Mt, this._keydownListener = Je => {
            const Xt = this._attachedOverlays;
            for (let Nn = Xt.length - 1; Nn > -1; Nn--) if (Xt[Nn]._keydownEvents.observers.length > 0) {
              const Pi = Xt[Nn]._keydownEvents;
              this._ngZone ? this._ngZone.run(() => Pi.next(Je)) : Pi.next(Je);
              break;
            }
          };
        }
        add(je) {
          super.add(je), this._isAttached || (this._ngZone ? this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener)) : this._document.body.addEventListener("keydown", this._keydownListener), this._isAttached = !0);
        }
        detach() {
          this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), this._isAttached = !1);
        }
      }
      return Ze.ɵfac = function (je) {
        return new (je || Ze)(a.LFG(e.K0), a.LFG(a.R0b, 8));
      }, Ze.ɵprov = a.Yz7({
        token: Ze,
        factory: Ze.ɵfac,
        providedIn: "root"
      }), Ze;
    })(),
    ye = (() => {
      class Ze extends J {
        constructor(je, Mt, Je) {
          super(je), this._platform = Mt, this._ngZone = Je, this._cursorStyleIsSet = !1, this._pointerDownListener = Xt => {
            this._pointerDownEventTarget = (0, d.sA)(Xt);
          }, this._clickListener = Xt => {
            const Nn = (0, d.sA)(Xt),
              Pi = "click" === Xt.type && this._pointerDownEventTarget ? this._pointerDownEventTarget : Nn;
            this._pointerDownEventTarget = null;
            const Ii = this._attachedOverlays.slice();
            for (let yi = Ii.length - 1; yi > -1; yi--) {
              const co = Ii[yi];
              if (co._outsidePointerEvents.observers.length < 1 || !co.hasAttached()) continue;
              if (co.overlayElement.contains(Nn) || co.overlayElement.contains(Pi)) break;
              const Jo = co._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => Jo.next(Xt)) : Jo.next(Xt);
            }
          };
        }
        add(je) {
          if (super.add(je), !this._isAttached) {
            const Mt = this._document.body;
            this._ngZone ? this._ngZone.runOutsideAngular(() => this._addEventListeners(Mt)) : this._addEventListeners(Mt), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = Mt.style.cursor, Mt.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0;
          }
        }
        detach() {
          if (this._isAttached) {
            const je = this._document.body;
            je.removeEventListener("pointerdown", this._pointerDownListener, !0), je.removeEventListener("click", this._clickListener, !0), je.removeEventListener("auxclick", this._clickListener, !0), je.removeEventListener("contextmenu", this._clickListener, !0), this._platform.IOS && this._cursorStyleIsSet && (je.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1;
          }
        }
        _addEventListeners(je) {
          je.addEventListener("pointerdown", this._pointerDownListener, !0), je.addEventListener("click", this._clickListener, !0), je.addEventListener("auxclick", this._clickListener, !0), je.addEventListener("contextmenu", this._clickListener, !0);
        }
      }
      return Ze.ɵfac = function (je) {
        return new (je || Ze)(a.LFG(e.K0), a.LFG(d.t4), a.LFG(a.R0b, 8));
      }, Ze.ɵprov = a.Yz7({
        token: Ze,
        factory: Ze.ɵfac,
        providedIn: "root"
      }), Ze;
    })(),
    ae = (() => {
      class Ze {
        constructor(je, Mt) {
          this._platform = Mt, this._document = je;
        }
        ngOnDestroy() {
          this._containerElement?.remove();
        }
        getContainerElement() {
          return this._containerElement || this._createContainer(), this._containerElement;
        }
        _createContainer() {
          const je = "cdk-overlay-container";
          if (this._platform.isBrowser || (0, d.Oy)()) {
            const Je = this._document.querySelectorAll(`.${je}[platform="server"], .${je}[platform="test"]`);
            for (let Xt = 0; Xt < Je.length; Xt++) Je[Xt].remove();
          }
          const Mt = this._document.createElement("div");
          Mt.classList.add(je), (0, d.Oy)() ? Mt.setAttribute("platform", "test") : this._platform.isBrowser || Mt.setAttribute("platform", "server"), this._document.body.appendChild(Mt), this._containerElement = Mt;
        }
      }
      return Ze.ɵfac = function (je) {
        return new (je || Ze)(a.LFG(e.K0), a.LFG(d.t4));
      }, Ze.ɵprov = a.Yz7({
        token: Ze,
        factory: Ze.ɵfac,
        providedIn: "root"
      }), Ze;
    })();
  class Y {
    constructor(Ee, je, Mt, Je, Xt, Nn, Pi, Ii, yi, co = !1) {
      this._portalOutlet = Ee, this._host = je, this._pane = Mt, this._config = Je, this._ngZone = Xt, this._keyboardDispatcher = Nn, this._document = Pi, this._location = Ii, this._outsideClickDispatcher = yi, this._animationsDisabled = co, this._backdropElement = null, this._backdropClick = new O.x(), this._attachments = new O.x(), this._detachments = new O.x(), this._locationChanges = L.w0.EMPTY, this._backdropClickHandler = Jo => this._backdropClick.next(Jo), this._backdropTransitionendHandler = Jo => {
        this._disposeBackdrop(Jo.target);
      }, this._keydownEvents = new O.x(), this._outsidePointerEvents = new O.x(), Je.scrollStrategy && (this._scrollStrategy = Je.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = Je.positionStrategy;
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(Ee) {
      !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
      const je = this._portalOutlet.attach(Ee);
      return this._positionStrategy && this._positionStrategy.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._ngZone.onStable.pipe((0, b.q)(1)).subscribe(() => {
        this.hasAttached() && this.updatePosition();
      }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(() => this.dispose())), this._outsideClickDispatcher.add(this), "function" == typeof je?.onDestroy && je.onDestroy(() => {
        this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
      }), je;
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable();
      const Ee = this._portalOutlet.detach();
      return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher.remove(this), Ee;
    }
    dispose() {
      const Ee = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._disposeBackdrop(this._backdropElement), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host?.remove(), this._previousHostParent = this._pane = this._host = null, Ee && this._detachments.next(), this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(Ee) {
      Ee !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = Ee, this.hasAttached() && (Ee.attach(this), this.updatePosition()));
    }
    updateSize(Ee) {
      this._config = {
        ...this._config,
        ...Ee
      }, this._updateElementSize();
    }
    setDirection(Ee) {
      this._config = {
        ...this._config,
        direction: Ee
      }, this._updateElementDirection();
    }
    addPanelClass(Ee) {
      this._pane && this._toggleClasses(this._pane, Ee, !0);
    }
    removePanelClass(Ee) {
      this._pane && this._toggleClasses(this._pane, Ee, !1);
    }
    getDirection() {
      const Ee = this._config.direction;
      return Ee ? "string" == typeof Ee ? Ee : Ee.value : "ltr";
    }
    updateScrollStrategy(Ee) {
      Ee !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = Ee, this.hasAttached() && (Ee.attach(this), Ee.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      const Ee = this._pane.style;
      Ee.width = (0, m.HM)(this._config.width), Ee.height = (0, m.HM)(this._config.height), Ee.minWidth = (0, m.HM)(this._config.minWidth), Ee.minHeight = (0, m.HM)(this._config.minHeight), Ee.maxWidth = (0, m.HM)(this._config.maxWidth), Ee.maxHeight = (0, m.HM)(this._config.maxHeight);
    }
    _togglePointerEvents(Ee) {
      this._pane.style.pointerEvents = Ee ? "" : "none";
    }
    _attachBackdrop() {
      const Ee = "cdk-overlay-backdrop-showing";
      this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._animationsDisabled && this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", this._backdropClickHandler), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          this._backdropElement && this._backdropElement.classList.add(Ee);
        });
      }) : this._backdropElement.classList.add(Ee);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      const Ee = this._backdropElement;
      if (Ee) {
        if (this._animationsDisabled) return void this._disposeBackdrop(Ee);
        Ee.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(() => {
          Ee.addEventListener("transitionend", this._backdropTransitionendHandler);
        }), Ee.style.pointerEvents = "none", this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
          this._disposeBackdrop(Ee);
        }, 500));
      }
    }
    _toggleClasses(Ee, je, Mt) {
      const Je = (0, m.Eq)(je || []).filter(Xt => !!Xt);
      Je.length && (Mt ? Ee.classList.add(...Je) : Ee.classList.remove(...Je));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        const Ee = this._ngZone.onStable.pipe((0, A.R)((0, C.T)(this._attachments, this._detachments))).subscribe(() => {
          (!this._pane || !this._host || 0 === this._pane.children.length) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), Ee.unsubscribe());
        });
      });
    }
    _disposeScrollStrategy() {
      const Ee = this._scrollStrategy;
      Ee && (Ee.disable(), Ee.detach && Ee.detach());
    }
    _disposeBackdrop(Ee) {
      Ee && (Ee.removeEventListener("click", this._backdropClickHandler), Ee.removeEventListener("transitionend", this._backdropTransitionendHandler), Ee.remove(), this._backdropElement === Ee && (this._backdropElement = null)), this._backdropTimeout && (clearTimeout(this._backdropTimeout), this._backdropTimeout = void 0);
    }
  }
  const G = "cdk-overlay-connected-position-bounding-box",
    te = /([A-Za-z%]+)$/;
  class pe {
    get positions() {
      return this._preferredPositions;
    }
    constructor(Ee, je, Mt, Je, Xt) {
      this._viewportRuler = je, this._document = Mt, this._platform = Je, this._overlayContainer = Xt, this._lastBoundingBoxSize = {
        width: 0,
        height: 0
      }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], this._positionChanges = new O.x(), this._resizeSubscription = L.w0.EMPTY, this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges, this.setOrigin(Ee);
    }
    attach(Ee) {
      this._validatePositions(), Ee.hostElement.classList.add(G), this._overlayRef = Ee, this._boundingBox = Ee.hostElement, this._pane = Ee.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
        this._isInitialRender = !0, this.apply();
      });
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (!this._isInitialRender && this._positionLocked && this._lastPosition) return void this.reapplyLastPosition();
      this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const Ee = this._originRect,
        je = this._overlayRect,
        Mt = this._viewportRect,
        Je = this._containerRect,
        Xt = [];
      let Nn;
      for (let Pi of this._preferredPositions) {
        let Ii = this._getOriginPoint(Ee, Je, Pi),
          yi = this._getOverlayPoint(Ii, je, Pi),
          co = this._getOverlayFit(yi, je, Mt, Pi);
        if (co.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(Pi, Ii);
        this._canFitWithFlexibleDimensions(co, yi, Mt) ? Xt.push({
          position: Pi,
          origin: Ii,
          overlayRect: je,
          boundingBoxRect: this._calculateBoundingBoxRect(Ii, Pi)
        }) : (!Nn || Nn.overlayFit.visibleArea < co.visibleArea) && (Nn = {
          overlayFit: co,
          overlayPoint: yi,
          originPoint: Ii,
          position: Pi,
          overlayRect: je
        });
      }
      if (Xt.length) {
        let Pi = null,
          Ii = -1;
        for (const yi of Xt) {
          const co = yi.boundingBoxRect.width * yi.boundingBoxRect.height * (yi.position.weight || 1);
          co > Ii && (Ii = co, Pi = yi);
        }
        return this._isPushed = !1, void this._applyPosition(Pi.position, Pi.origin);
      }
      if (this._canPush) return this._isPushed = !0, void this._applyPosition(Nn.position, Nn.originPoint);
      this._applyPosition(Nn.position, Nn.originPoint);
    }
    detach() {
      this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed || (this._boundingBox && be(this._boundingBox.style, {
        top: "",
        left: "",
        right: "",
        bottom: "",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(G), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0);
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      const Ee = this._lastPosition;
      if (Ee) {
        this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        const je = this._getOriginPoint(this._originRect, this._containerRect, Ee);
        this._applyPosition(Ee, je);
      } else this.apply();
    }
    withScrollableContainers(Ee) {
      return this._scrollables = Ee, this;
    }
    withPositions(Ee) {
      return this._preferredPositions = Ee, -1 === Ee.indexOf(this._lastPosition) && (this._lastPosition = null), this._validatePositions(), this;
    }
    withViewportMargin(Ee) {
      return this._viewportMargin = Ee, this;
    }
    withFlexibleDimensions(Ee = !0) {
      return this._hasFlexibleDimensions = Ee, this;
    }
    withGrowAfterOpen(Ee = !0) {
      return this._growAfterOpen = Ee, this;
    }
    withPush(Ee = !0) {
      return this._canPush = Ee, this;
    }
    withLockedPosition(Ee = !0) {
      return this._positionLocked = Ee, this;
    }
    setOrigin(Ee) {
      return this._origin = Ee, this;
    }
    withDefaultOffsetX(Ee) {
      return this._offsetX = Ee, this;
    }
    withDefaultOffsetY(Ee) {
      return this._offsetY = Ee, this;
    }
    withTransformOriginOn(Ee) {
      return this._transformOriginSelector = Ee, this;
    }
    _getOriginPoint(Ee, je, Mt) {
      let Je, Xt;
      if ("center" == Mt.originX) Je = Ee.left + Ee.width / 2;else {
        const Nn = this._isRtl() ? Ee.right : Ee.left,
          Pi = this._isRtl() ? Ee.left : Ee.right;
        Je = "start" == Mt.originX ? Nn : Pi;
      }
      return je.left < 0 && (Je -= je.left), Xt = "center" == Mt.originY ? Ee.top + Ee.height / 2 : "top" == Mt.originY ? Ee.top : Ee.bottom, je.top < 0 && (Xt -= je.top), {
        x: Je,
        y: Xt
      };
    }
    _getOverlayPoint(Ee, je, Mt) {
      let Je, Xt;
      return Je = "center" == Mt.overlayX ? -je.width / 2 : "start" === Mt.overlayX ? this._isRtl() ? -je.width : 0 : this._isRtl() ? 0 : -je.width, Xt = "center" == Mt.overlayY ? -je.height / 2 : "top" == Mt.overlayY ? 0 : -je.height, {
        x: Ee.x + Je,
        y: Ee.y + Xt
      };
    }
    _getOverlayFit(Ee, je, Mt, Je) {
      const Xt = n(je);
      let {
          x: Nn,
          y: Pi
        } = Ee,
        Ii = this._getOffset(Je, "x"),
        yi = this._getOffset(Je, "y");
      Ii && (Nn += Ii), yi && (Pi += yi);
      let fr = 0 - Pi,
        pt = Pi + Xt.height - Mt.height,
        Dt = this._subtractOverflows(Xt.width, 0 - Nn, Nn + Xt.width - Mt.width),
        Ht = this._subtractOverflows(Xt.height, fr, pt),
        Dn = Dt * Ht;
      return {
        visibleArea: Dn,
        isCompletelyWithinViewport: Xt.width * Xt.height === Dn,
        fitsInViewportVertically: Ht === Xt.height,
        fitsInViewportHorizontally: Dt == Xt.width
      };
    }
    _canFitWithFlexibleDimensions(Ee, je, Mt) {
      if (this._hasFlexibleDimensions) {
        const Je = Mt.bottom - je.y,
          Xt = Mt.right - je.x,
          Nn = le(this._overlayRef.getConfig().minHeight),
          Pi = le(this._overlayRef.getConfig().minWidth);
        return (Ee.fitsInViewportVertically || null != Nn && Nn <= Je) && (Ee.fitsInViewportHorizontally || null != Pi && Pi <= Xt);
      }
      return !1;
    }
    _pushOverlayOnScreen(Ee, je, Mt) {
      if (this._previousPushAmount && this._positionLocked) return {
        x: Ee.x + this._previousPushAmount.x,
        y: Ee.y + this._previousPushAmount.y
      };
      const Je = n(je),
        Xt = this._viewportRect,
        Nn = Math.max(Ee.x + Je.width - Xt.width, 0),
        Pi = Math.max(Ee.y + Je.height - Xt.height, 0),
        Ii = Math.max(Xt.top - Mt.top - Ee.y, 0),
        yi = Math.max(Xt.left - Mt.left - Ee.x, 0);
      let co = 0,
        Jo = 0;
      return co = Je.width <= Xt.width ? yi || -Nn : Ee.x < this._viewportMargin ? Xt.left - Mt.left - Ee.x : 0, Jo = Je.height <= Xt.height ? Ii || -Pi : Ee.y < this._viewportMargin ? Xt.top - Mt.top - Ee.y : 0, this._previousPushAmount = {
        x: co,
        y: Jo
      }, {
        x: Ee.x + co,
        y: Ee.y + Jo
      };
    }
    _applyPosition(Ee, je) {
      if (this._setTransformOrigin(Ee), this._setOverlayElementStyles(je, Ee), this._setBoundingBoxStyles(je, Ee), Ee.panelClass && this._addPanelClasses(Ee.panelClass), this._lastPosition = Ee, this._positionChanges.observers.length) {
        const Mt = this._getScrollVisibility(),
          Je = new F(Ee, Mt);
        this._positionChanges.next(Je);
      }
      this._isInitialRender = !1;
    }
    _setTransformOrigin(Ee) {
      if (!this._transformOriginSelector) return;
      const je = this._boundingBox.querySelectorAll(this._transformOriginSelector);
      let Mt,
        Je = Ee.overlayY;
      Mt = "center" === Ee.overlayX ? "center" : this._isRtl() ? "start" === Ee.overlayX ? "right" : "left" : "start" === Ee.overlayX ? "left" : "right";
      for (let Xt = 0; Xt < je.length; Xt++) je[Xt].style.transformOrigin = `${Mt} ${Je}`;
    }
    _calculateBoundingBoxRect(Ee, je) {
      const Mt = this._viewportRect,
        Je = this._isRtl();
      let Xt, Nn, Pi, co, Jo, fr;
      if ("top" === je.overlayY) Nn = Ee.y, Xt = Mt.height - Nn + this._viewportMargin;else if ("bottom" === je.overlayY) Pi = Mt.height - Ee.y + 2 * this._viewportMargin, Xt = Mt.height - Pi + this._viewportMargin;else {
        const pt = Math.min(Mt.bottom - Ee.y + Mt.top, Ee.y),
          Dt = this._lastBoundingBoxSize.height;
        Xt = 2 * pt, Nn = Ee.y - pt, Xt > Dt && !this._isInitialRender && !this._growAfterOpen && (Nn = Ee.y - Dt / 2);
      }
      if ("end" === je.overlayX && !Je || "start" === je.overlayX && Je) fr = Mt.width - Ee.x + this._viewportMargin, co = Ee.x - this._viewportMargin;else if ("start" === je.overlayX && !Je || "end" === je.overlayX && Je) Jo = Ee.x, co = Mt.right - Ee.x;else {
        const pt = Math.min(Mt.right - Ee.x + Mt.left, Ee.x),
          Dt = this._lastBoundingBoxSize.width;
        co = 2 * pt, Jo = Ee.x - pt, co > Dt && !this._isInitialRender && !this._growAfterOpen && (Jo = Ee.x - Dt / 2);
      }
      return {
        top: Nn,
        left: Jo,
        bottom: Pi,
        right: fr,
        width: co,
        height: Xt
      };
    }
    _setBoundingBoxStyles(Ee, je) {
      const Mt = this._calculateBoundingBoxRect(Ee, je);
      !this._isInitialRender && !this._growAfterOpen && (Mt.height = Math.min(Mt.height, this._lastBoundingBoxSize.height), Mt.width = Math.min(Mt.width, this._lastBoundingBoxSize.width));
      const Je = {};
      if (this._hasExactPosition()) Je.top = Je.left = "0", Je.bottom = Je.right = Je.maxHeight = Je.maxWidth = "", Je.width = Je.height = "100%";else {
        const Xt = this._overlayRef.getConfig().maxHeight,
          Nn = this._overlayRef.getConfig().maxWidth;
        Je.height = (0, m.HM)(Mt.height), Je.top = (0, m.HM)(Mt.top), Je.bottom = (0, m.HM)(Mt.bottom), Je.width = (0, m.HM)(Mt.width), Je.left = (0, m.HM)(Mt.left), Je.right = (0, m.HM)(Mt.right), Je.alignItems = "center" === je.overlayX ? "center" : "end" === je.overlayX ? "flex-end" : "flex-start", Je.justifyContent = "center" === je.overlayY ? "center" : "bottom" === je.overlayY ? "flex-end" : "flex-start", Xt && (Je.maxHeight = (0, m.HM)(Xt)), Nn && (Je.maxWidth = (0, m.HM)(Nn));
      }
      this._lastBoundingBoxSize = Mt, be(this._boundingBox.style, Je);
    }
    _resetBoundingBoxStyles() {
      be(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      });
    }
    _resetOverlayElementStyles() {
      be(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: ""
      });
    }
    _setOverlayElementStyles(Ee, je) {
      const Mt = {},
        Je = this._hasExactPosition(),
        Xt = this._hasFlexibleDimensions,
        Nn = this._overlayRef.getConfig();
      if (Je) {
        const co = this._viewportRuler.getViewportScrollPosition();
        be(Mt, this._getExactOverlayY(je, Ee, co)), be(Mt, this._getExactOverlayX(je, Ee, co));
      } else Mt.position = "static";
      let Pi = "",
        Ii = this._getOffset(je, "x"),
        yi = this._getOffset(je, "y");
      Ii && (Pi += `translateX(${Ii}px) `), yi && (Pi += `translateY(${yi}px)`), Mt.transform = Pi.trim(), Nn.maxHeight && (Je ? Mt.maxHeight = (0, m.HM)(Nn.maxHeight) : Xt && (Mt.maxHeight = "")), Nn.maxWidth && (Je ? Mt.maxWidth = (0, m.HM)(Nn.maxWidth) : Xt && (Mt.maxWidth = "")), be(this._pane.style, Mt);
    }
    _getExactOverlayY(Ee, je, Mt) {
      let Je = {
          top: "",
          bottom: ""
        },
        Xt = this._getOverlayPoint(je, this._overlayRect, Ee);
      return this._isPushed && (Xt = this._pushOverlayOnScreen(Xt, this._overlayRect, Mt)), "bottom" === Ee.overlayY ? Je.bottom = this._document.documentElement.clientHeight - (Xt.y + this._overlayRect.height) + "px" : Je.top = (0, m.HM)(Xt.y), Je;
    }
    _getExactOverlayX(Ee, je, Mt) {
      let Nn,
        Je = {
          left: "",
          right: ""
        },
        Xt = this._getOverlayPoint(je, this._overlayRect, Ee);
      return this._isPushed && (Xt = this._pushOverlayOnScreen(Xt, this._overlayRect, Mt)), Nn = this._isRtl() ? "end" === Ee.overlayX ? "left" : "right" : "end" === Ee.overlayX ? "right" : "left", "right" === Nn ? Je.right = this._document.documentElement.clientWidth - (Xt.x + this._overlayRect.width) + "px" : Je.left = (0, m.HM)(Xt.x), Je;
    }
    _getScrollVisibility() {
      const Ee = this._getOriginRect(),
        je = this._pane.getBoundingClientRect(),
        Mt = this._scrollables.map(Je => Je.getElementRef().nativeElement.getBoundingClientRect());
      return {
        isOriginClipped: T(Ee, Mt),
        isOriginOutsideView: u(Ee, Mt),
        isOverlayClipped: T(je, Mt),
        isOverlayOutsideView: u(je, Mt)
      };
    }
    _subtractOverflows(Ee, ...je) {
      return je.reduce((Mt, Je) => Mt - Math.max(Je, 0), Ee);
    }
    _getNarrowedViewportRect() {
      const Ee = this._document.documentElement.clientWidth,
        je = this._document.documentElement.clientHeight,
        Mt = this._viewportRuler.getViewportScrollPosition();
      return {
        top: Mt.top + this._viewportMargin,
        left: Mt.left + this._viewportMargin,
        right: Mt.left + Ee - this._viewportMargin,
        bottom: Mt.top + je - this._viewportMargin,
        width: Ee - 2 * this._viewportMargin,
        height: je - 2 * this._viewportMargin
      };
    }
    _isRtl() {
      return "rtl" === this._overlayRef.getDirection();
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(Ee, je) {
      return "x" === je ? null == Ee.offsetX ? this._offsetX : Ee.offsetX : null == Ee.offsetY ? this._offsetY : Ee.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(Ee) {
      this._pane && (0, m.Eq)(Ee).forEach(je => {
        "" !== je && -1 === this._appliedPanelClasses.indexOf(je) && (this._appliedPanelClasses.push(je), this._pane.classList.add(je));
      });
    }
    _clearPanelClasses() {
      this._pane && (this._appliedPanelClasses.forEach(Ee => {
        this._pane.classList.remove(Ee);
      }), this._appliedPanelClasses = []);
    }
    _getOriginRect() {
      const Ee = this._origin;
      if (Ee instanceof a.SBq) return Ee.nativeElement.getBoundingClientRect();
      if (Ee instanceof Element) return Ee.getBoundingClientRect();
      const je = Ee.width || 0,
        Mt = Ee.height || 0;
      return {
        top: Ee.y,
        bottom: Ee.y + Mt,
        left: Ee.x,
        right: Ee.x + je,
        height: Mt,
        width: je
      };
    }
  }
  function be(Ze, Ee) {
    for (let je in Ee) Ee.hasOwnProperty(je) && (Ze[je] = Ee[je]);
    return Ze;
  }
  function le(Ze) {
    if ("number" != typeof Ze && null != Ze) {
      const [Ee, je] = Ze.split(te);
      return je && "px" !== je ? null : parseFloat(Ee);
    }
    return Ze || null;
  }
  function n(Ze) {
    return {
      top: Math.floor(Ze.top),
      right: Math.floor(Ze.right),
      bottom: Math.floor(Ze.bottom),
      left: Math.floor(Ze.left),
      width: Math.floor(Ze.width),
      height: Math.floor(Ze.height)
    };
  }
  const Rt = "cdk-global-overlay-wrapper";
  class We {
    constructor() {
      this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._alignItems = "", this._xPosition = "", this._xOffset = "", this._width = "", this._height = "", this._isDisposed = !1;
    }
    attach(Ee) {
      const je = Ee.getConfig();
      this._overlayRef = Ee, this._width && !je.width && Ee.updateSize({
        width: this._width
      }), this._height && !je.height && Ee.updateSize({
        height: this._height
      }), Ee.hostElement.classList.add(Rt), this._isDisposed = !1;
    }
    top(Ee = "") {
      return this._bottomOffset = "", this._topOffset = Ee, this._alignItems = "flex-start", this;
    }
    left(Ee = "") {
      return this._xOffset = Ee, this._xPosition = "left", this;
    }
    bottom(Ee = "") {
      return this._topOffset = "", this._bottomOffset = Ee, this._alignItems = "flex-end", this;
    }
    right(Ee = "") {
      return this._xOffset = Ee, this._xPosition = "right", this;
    }
    start(Ee = "") {
      return this._xOffset = Ee, this._xPosition = "start", this;
    }
    end(Ee = "") {
      return this._xOffset = Ee, this._xPosition = "end", this;
    }
    width(Ee = "") {
      return this._overlayRef ? this._overlayRef.updateSize({
        width: Ee
      }) : this._width = Ee, this;
    }
    height(Ee = "") {
      return this._overlayRef ? this._overlayRef.updateSize({
        height: Ee
      }) : this._height = Ee, this;
    }
    centerHorizontally(Ee = "") {
      return this.left(Ee), this._xPosition = "center", this;
    }
    centerVertically(Ee = "") {
      return this.top(Ee), this._alignItems = "center", this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      const Ee = this._overlayRef.overlayElement.style,
        je = this._overlayRef.hostElement.style,
        Mt = this._overlayRef.getConfig(),
        {
          width: Je,
          height: Xt,
          maxWidth: Nn,
          maxHeight: Pi
        } = Mt,
        Ii = !("100%" !== Je && "100vw" !== Je || Nn && "100%" !== Nn && "100vw" !== Nn),
        yi = !("100%" !== Xt && "100vh" !== Xt || Pi && "100%" !== Pi && "100vh" !== Pi),
        co = this._xPosition,
        Jo = this._xOffset,
        fr = "rtl" === this._overlayRef.getConfig().direction;
      let pt = "",
        Dt = "",
        Ht = "";
      Ii ? Ht = "flex-start" : "center" === co ? (Ht = "center", fr ? Dt = Jo : pt = Jo) : fr ? "left" === co || "end" === co ? (Ht = "flex-end", pt = Jo) : ("right" === co || "start" === co) && (Ht = "flex-start", Dt = Jo) : "left" === co || "start" === co ? (Ht = "flex-start", pt = Jo) : ("right" === co || "end" === co) && (Ht = "flex-end", Dt = Jo), Ee.position = this._cssPosition, Ee.marginLeft = Ii ? "0" : pt, Ee.marginTop = yi ? "0" : this._topOffset, Ee.marginBottom = this._bottomOffset, Ee.marginRight = Ii ? "0" : Dt, je.justifyContent = Ht, je.alignItems = yi ? "flex-start" : this._alignItems;
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      const Ee = this._overlayRef.overlayElement.style,
        je = this._overlayRef.hostElement,
        Mt = je.style;
      je.classList.remove(Rt), Mt.justifyContent = Mt.alignItems = Ee.marginTop = Ee.marginBottom = Ee.marginLeft = Ee.marginRight = Ee.position = "", this._overlayRef = null, this._isDisposed = !0;
    }
  }
  let Re = (() => {
      class Ze {
        constructor(je, Mt, Je, Xt) {
          this._viewportRuler = je, this._document = Mt, this._platform = Je, this._overlayContainer = Xt;
        }
        global() {
          return new We();
        }
        flexibleConnectedTo(je) {
          return new pe(je, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
      }
      return Ze.ɵfac = function (je) {
        return new (je || Ze)(a.LFG(t.rL), a.LFG(e.K0), a.LFG(d.t4), a.LFG(ae));
      }, Ze.ɵprov = a.Yz7({
        token: Ze,
        factory: Ze.ɵfac,
        providedIn: "root"
      }), Ze;
    })(),
    st = 0,
    q = (() => {
      class Ze {
        constructor(je, Mt, Je, Xt, Nn, Pi, Ii, yi, co, Jo, fr, pt) {
          this.scrollStrategies = je, this._overlayContainer = Mt, this._componentFactoryResolver = Je, this._positionBuilder = Xt, this._keyboardDispatcher = Nn, this._injector = Pi, this._ngZone = Ii, this._document = yi, this._directionality = co, this._location = Jo, this._outsideClickDispatcher = fr, this._animationsModuleType = pt;
        }
        create(je) {
          const Mt = this._createHostElement(),
            Je = this._createPaneElement(Mt),
            Xt = this._createPortalOutlet(Je),
            Nn = new y(je);
          return Nn.direction = Nn.direction || this._directionality.value, new Y(Xt, Mt, Je, Nn, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, "NoopAnimations" === this._animationsModuleType);
        }
        position() {
          return this._positionBuilder;
        }
        _createPaneElement(je) {
          const Mt = this._document.createElement("div");
          return Mt.id = "cdk-overlay-" + st++, Mt.classList.add("cdk-overlay-pane"), je.appendChild(Mt), Mt;
        }
        _createHostElement() {
          const je = this._document.createElement("div");
          return this._overlayContainer.getContainerElement().appendChild(je), je;
        }
        _createPortalOutlet(je) {
          return this._appRef || (this._appRef = this._injector.get(a.z2F)), new I.u0(je, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
      }
      return Ze.ɵfac = function (je) {
        return new (je || Ze)(a.LFG(B), a.LFG(ae), a.LFG(a._Vd), a.LFG(Re), a.LFG(fe), a.LFG(a.zs3), a.LFG(a.R0b), a.LFG(e.K0), a.LFG(N.Is), a.LFG(e.Ye), a.LFG(ye), a.LFG(a.QbO, 8));
      }, Ze.ɵprov = a.Yz7({
        token: Ze,
        factory: Ze.ɵfac,
        providedIn: "root"
      }), Ze;
    })();
  const ut = new a.OlP("cdk-connected-overlay-scroll-strategy");
  let Ct = (() => {
    class Ze {
      constructor(je) {
        this.elementRef = je;
      }
    }
    return Ze.ɵfac = function (je) {
      return new (je || Ze)(a.Y36(a.SBq));
    }, Ze.ɵdir = a.lG2({
      type: Ze,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"],
      standalone: !0
    }), Ze;
  })();
  const Ue = {
    provide: ut,
    deps: [q],
    useFactory: function Et(Ze) {
      return () => Ze.scrollStrategies.reposition();
    }
  };
  let Me = (() => {
    class Ze {}
    return Ze.ɵfac = function (je) {
      return new (je || Ze)();
    }, Ze.ɵmod = a.oAB({
      type: Ze
    }), Ze.ɵinj = a.cJS({
      providers: [q, Ue],
      imports: [N.vT, I.eL, t.Cl, t.Cl]
    }), Ze;
  })();
});
