// Extracted from main; webpack module 2100. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    rs: () => Zp,
    lU: () => Yp
  });
  var t = i(94650),
    e = i(20733),
    a = i(2711),
    m = i(44726),
    d = i(77579),
    M = i(50727),
    b = i(36895),
    A = i(24006),
    N = i(92203),
    I = i(32643),
    O = i(9073),
    L = i(93278),
    C = i(59250),
    v = i(71298),
    f = i(19550),
    E = i(70823),
    h = i(22819),
    x = i(13207),
    u = i(62804),
    T = i(13700),
    R = i(43150),
    B = i(77978),
    y = i(93225),
    j = i(15903),
    W = i(82722),
    F = i(78372),
    Le = i(56137),
    ke = i(80668),
    J = i(71273),
    fe = i(62104),
    ye = i(66425),
    ae = i(79449),
    Y = i(30338),
    G = i(40865),
    te = i(68675);
  let n = (() => {
    class xe {
      constructor() {
        this.value$ = new d.x();
      }
      storageData$(z) {
        return this.value$.asObservable().pipe((0, te.O)(this.getData(z)));
      }
      sendData(z, De) {
        (function pe(xe, et) {
          localStorage.setItem(xe, JSON.stringify(et));
        })(z, De), this.emit(De);
      }
      dropData(z) {
        (function le(xe) {
          localStorage.removeItem(xe);
        })(z), this.emit(null);
      }
      getData(z) {
        return function be(xe) {
          const et = localStorage.getItem(xe);
          return JSON.parse(et);
        }(z);
      }
      emit(z) {
        this.value$.next(z);
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)();
    }, xe.ɵprov = t.Yz7({
      token: xe,
      factory: xe.ɵfac
    }), xe;
  })();
  var qe = i(24098),
    Rt = i(83353),
    We = i(21281),
    Re = i(12687),
    st = i(17445),
    q = i(66406),
    mt = i(69751),
    ut = i(56451),
    Ct = i(54004),
    Ft = i(95698),
    Et = i(18505),
    Ue = i(63900),
    Me = i(40445);
  function Ke(xe, et, z) {
    for (let De in et) if (et.hasOwnProperty(De)) {
      const rt = et[De];
      rt ? xe.setProperty(De, rt, z?.has(De) ? "important" : "") : xe.removeProperty(De);
    }
    return xe;
  }
  function Ze(xe, et) {
    const z = et ? "" : "none";
    Ke(xe.style, {
      "touch-action": et ? "" : "none",
      "-webkit-user-drag": et ? "" : "none",
      "-webkit-tap-highlight-color": et ? "" : "transparent",
      "user-select": z,
      "-ms-user-select": z,
      "-webkit-user-select": z,
      "-moz-user-select": z
    });
  }
  function Ee(xe, et, z) {
    Ke(xe.style, {
      position: et ? "" : "fixed",
      top: et ? "" : "0",
      opacity: et ? "" : "0",
      left: et ? "" : "-999em"
    }, z);
  }
  function je(xe, et) {
    return et && "none" != et ? xe + " " + et : xe;
  }
  function Mt(xe) {
    const et = xe.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
    return parseFloat(xe) * et;
  }
  function Xt(xe, et) {
    return xe.getPropertyValue(et).split(",").map(De => De.trim());
  }
  function Nn(xe) {
    const et = xe.getBoundingClientRect();
    return {
      top: et.top,
      right: et.right,
      bottom: et.bottom,
      left: et.left,
      width: et.width,
      height: et.height,
      x: et.x,
      y: et.y
    };
  }
  function Pi(xe, et, z) {
    const {
      top: De,
      bottom: rt,
      left: Cn,
      right: po
    } = xe;
    return z >= De && z <= rt && et >= Cn && et <= po;
  }
  function Ii(xe, et, z) {
    xe.top += et, xe.bottom = xe.top + xe.height, xe.left += z, xe.right = xe.left + xe.width;
  }
  function yi(xe, et, z, De) {
    const {
        top: rt,
        right: Cn,
        bottom: po,
        left: dr,
        width: Rs,
        height: Aa
      } = xe,
      ml = Rs * et,
      Ba = Aa * et;
    return De > rt - Ba && De < po + Ba && z > dr - ml && z < Cn + ml;
  }
  class co {
    constructor(et) {
      this._document = et, this.positions = new Map();
    }
    clear() {
      this.positions.clear();
    }
    cache(et) {
      this.clear(), this.positions.set(this._document, {
        scrollPosition: this.getViewportScrollPosition()
      }), et.forEach(z => {
        this.positions.set(z, {
          scrollPosition: {
            top: z.scrollTop,
            left: z.scrollLeft
          },
          clientRect: Nn(z)
        });
      });
    }
    handleScroll(et) {
      const z = (0, Rt.sA)(et),
        De = this.positions.get(z);
      if (!De) return null;
      const rt = De.scrollPosition;
      let Cn, po;
      if (z === this._document) {
        const Aa = this.getViewportScrollPosition();
        Cn = Aa.top, po = Aa.left;
      } else Cn = z.scrollTop, po = z.scrollLeft;
      const dr = rt.top - Cn,
        Rs = rt.left - po;
      return this.positions.forEach((Aa, ml) => {
        Aa.clientRect && z !== ml && z.contains(ml) && Ii(Aa.clientRect, dr, Rs);
      }), rt.top = Cn, rt.left = po, {
        top: dr,
        left: Rs
      };
    }
    getViewportScrollPosition() {
      return {
        top: window.scrollY,
        left: window.scrollX
      };
    }
  }
  function Jo(xe) {
    const et = xe.cloneNode(!0),
      z = et.querySelectorAll("[id]"),
      De = xe.nodeName.toLowerCase();
    et.removeAttribute("id");
    for (let rt = 0; rt < z.length; rt++) z[rt].removeAttribute("id");
    return "canvas" === De ? Ht(xe, et) : ("input" === De || "select" === De || "textarea" === De) && Dt(xe, et), fr("canvas", xe, et, Ht), fr("input, textarea, select", xe, et, Dt), et;
  }
  function fr(xe, et, z, De) {
    const rt = et.querySelectorAll(xe);
    if (rt.length) {
      const Cn = z.querySelectorAll(xe);
      for (let po = 0; po < rt.length; po++) De(rt[po], Cn[po]);
    }
  }
  let pt = 0;
  function Dt(xe, et) {
    "file" !== et.type && (et.value = xe.value), "radio" === et.type && et.name && (et.name = `mat-clone-${et.name}-${pt++}`);
  }
  function Ht(xe, et) {
    const z = et.getContext("2d");
    if (z) try {
      z.drawImage(xe, 0, 0);
    } catch {}
  }
  const Dn = (0, Rt.i$)({
      passive: !0
    }),
    vt = (0, Rt.i$)({
      passive: !1
    }),
    li = new Set(["position"]);
  class zn {
    get disabled() {
      return this._disabled || !(!this._dropContainer || !this._dropContainer.disabled);
    }
    set disabled(et) {
      const z = (0, We.Ig)(et);
      z !== this._disabled && (this._disabled = z, this._toggleNativeDragInteractions(), this._handles.forEach(De => Ze(De, z)));
    }
    constructor(et, z, De, rt, Cn, po) {
      this._config = z, this._document = De, this._ngZone = rt, this._viewportRuler = Cn, this._dragDropRegistry = po, this._passiveTransform = {
        x: 0,
        y: 0
      }, this._activeTransform = {
        x: 0,
        y: 0
      }, this._hasStartedDragging = !1, this._moveEvents = new d.x(), this._pointerMoveSubscription = M.w0.EMPTY, this._pointerUpSubscription = M.w0.EMPTY, this._scrollSubscription = M.w0.EMPTY, this._resizeSubscription = M.w0.EMPTY, this._boundaryElement = null, this._nativeInteractionsEnabled = !0, this._handles = [], this._disabledHandles = new Set(), this._direction = "ltr", this.dragStartDelay = 0, this._disabled = !1, this.beforeStarted = new d.x(), this.started = new d.x(), this.released = new d.x(), this.ended = new d.x(), this.entered = new d.x(), this.exited = new d.x(), this.dropped = new d.x(), this.moved = this._moveEvents, this._pointerDown = dr => {
        if (this.beforeStarted.next(), this._handles.length) {
          const Rs = this._getTargetHandle(dr);
          Rs && !this._disabledHandles.has(Rs) && !this.disabled && this._initializeDragSequence(Rs, dr);
        } else this.disabled || this._initializeDragSequence(this._rootElement, dr);
      }, this._pointerMove = dr => {
        const Rs = this._getPointerPositionOnPage(dr);
        if (!this._hasStartedDragging) {
          if (Math.abs(Rs.x - this._pickupPositionOnPage.x) + Math.abs(Rs.y - this._pickupPositionOnPage.y) >= this._config.dragStartThreshold) {
            const gl = Date.now() >= this._dragStartTime + this._getDragStartDelay(dr),
              qa = this._dropContainer;
            if (!gl) return void this._endDragSequence(dr);
            (!qa || !qa.isDragging() && !qa.isReceiving()) && (dr.preventDefault(), this._hasStartedDragging = !0, this._ngZone.run(() => this._startDragSequence(dr)));
          }
          return;
        }
        dr.preventDefault();
        const Aa = this._getConstrainedPointerPosition(Rs);
        if (this._hasMoved = !0, this._lastKnownPointerPosition = Rs, this._updatePointerDirectionDelta(Aa), this._dropContainer) this._updateActiveDropContainer(Aa, Rs);else {
          const ml = this.constrainPosition ? this._initialClientRect : this._pickupPositionOnPage,
            Ba = this._activeTransform;
          Ba.x = Aa.x - ml.x + this._passiveTransform.x, Ba.y = Aa.y - ml.y + this._passiveTransform.y, this._applyRootElementTransform(Ba.x, Ba.y);
        }
        this._moveEvents.observers.length && this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: Aa,
            event: dr,
            distance: this._getDragDistance(Aa),
            delta: this._pointerDirectionDelta
          });
        });
      }, this._pointerUp = dr => {
        this._endDragSequence(dr);
      }, this._nativeDragStart = dr => {
        if (this._handles.length) {
          const Rs = this._getTargetHandle(dr);
          Rs && !this._disabledHandles.has(Rs) && !this.disabled && dr.preventDefault();
        } else this.disabled || dr.preventDefault();
      }, this.withRootElement(et).withParent(z.parentDragRef || null), this._parentPositions = new co(De), po.registerDragItem(this);
    }
    getPlaceholderElement() {
      return this._placeholder;
    }
    getRootElement() {
      return this._rootElement;
    }
    getVisibleElement() {
      return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    withHandles(et) {
      this._handles = et.map(De => (0, We.fI)(De)), this._handles.forEach(De => Ze(De, this.disabled)), this._toggleNativeDragInteractions();
      const z = new Set();
      return this._disabledHandles.forEach(De => {
        this._handles.indexOf(De) > -1 && z.add(De);
      }), this._disabledHandles = z, this;
    }
    withPreviewTemplate(et) {
      return this._previewTemplate = et, this;
    }
    withPlaceholderTemplate(et) {
      return this._placeholderTemplate = et, this;
    }
    withRootElement(et) {
      const z = (0, We.fI)(et);
      return z !== this._rootElement && (this._rootElement && this._removeRootElementListeners(this._rootElement), this._ngZone.runOutsideAngular(() => {
        z.addEventListener("mousedown", this._pointerDown, vt), z.addEventListener("touchstart", this._pointerDown, Dn), z.addEventListener("dragstart", this._nativeDragStart, vt);
      }), this._initialTransform = void 0, this._rootElement = z), typeof SVGElement < "u" && this._rootElement instanceof SVGElement && (this._ownerSVGElement = this._rootElement.ownerSVGElement), this;
    }
    withBoundaryElement(et) {
      return this._boundaryElement = et ? (0, We.fI)(et) : null, this._resizeSubscription.unsubscribe(), et && (this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize())), this;
    }
    withParent(et) {
      return this._parentDragRef = et, this;
    }
    dispose() {
      this._removeRootElementListeners(this._rootElement), this.isDragging() && this._rootElement?.remove(), this._anchor?.remove(), this._destroyPreview(), this._destroyPlaceholder(), this._dragDropRegistry.removeDragItem(this), this._removeSubscriptions(), this.beforeStarted.complete(), this.started.complete(), this.released.complete(), this.ended.complete(), this.entered.complete(), this.exited.complete(), this.dropped.complete(), this._moveEvents.complete(), this._handles = [], this._disabledHandles.clear(), this._dropContainer = void 0, this._resizeSubscription.unsubscribe(), this._parentPositions.clear(), this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
    }
    isDragging() {
      return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    reset() {
      this._rootElement.style.transform = this._initialTransform || "", this._activeTransform = {
        x: 0,
        y: 0
      }, this._passiveTransform = {
        x: 0,
        y: 0
      };
    }
    disableHandle(et) {
      !this._disabledHandles.has(et) && this._handles.indexOf(et) > -1 && (this._disabledHandles.add(et), Ze(et, !0));
    }
    enableHandle(et) {
      this._disabledHandles.has(et) && (this._disabledHandles.delete(et), Ze(et, this.disabled));
    }
    withDirection(et) {
      return this._direction = et, this;
    }
    _withDropContainer(et) {
      this._dropContainer = et;
    }
    getFreeDragPosition() {
      const et = this.isDragging() ? this._activeTransform : this._passiveTransform;
      return {
        x: et.x,
        y: et.y
      };
    }
    setFreeDragPosition(et) {
      return this._activeTransform = {
        x: 0,
        y: 0
      }, this._passiveTransform.x = et.x, this._passiveTransform.y = et.y, this._dropContainer || this._applyRootElementTransform(et.x, et.y), this;
    }
    withPreviewContainer(et) {
      return this._previewContainer = et, this;
    }
    _sortFromLastPointerPosition() {
      const et = this._lastKnownPointerPosition;
      et && this._dropContainer && this._updateActiveDropContainer(this._getConstrainedPointerPosition(et), et);
    }
    _removeSubscriptions() {
      this._pointerMoveSubscription.unsubscribe(), this._pointerUpSubscription.unsubscribe(), this._scrollSubscription.unsubscribe();
    }
    _destroyPreview() {
      this._preview?.remove(), this._previewRef?.destroy(), this._preview = this._previewRef = null;
    }
    _destroyPlaceholder() {
      this._placeholder?.remove(), this._placeholderRef?.destroy(), this._placeholder = this._placeholderRef = null;
    }
    _endDragSequence(et) {
      if (this._dragDropRegistry.isDragging(this) && (this._removeSubscriptions(), this._dragDropRegistry.stopDragging(this), this._toggleNativeDragInteractions(), this._handles && (this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight), this._hasStartedDragging)) if (this.released.next({
        source: this,
        event: et
      }), this._dropContainer) this._dropContainer._stopScrolling(), this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(et), this._cleanupCachedDimensions(), this._dragDropRegistry.stopDragging(this);
      });else {
        this._passiveTransform.x = this._activeTransform.x;
        const z = this._getPointerPositionOnPage(et);
        this._passiveTransform.y = this._activeTransform.y, this._ngZone.run(() => {
          this.ended.next({
            source: this,
            distance: this._getDragDistance(z),
            dropPoint: z,
            event: et
          });
        }), this._cleanupCachedDimensions(), this._dragDropRegistry.stopDragging(this);
      }
    }
    _startDragSequence(et) {
      Qn(et) && (this._lastTouchEventTime = Date.now()), this._toggleNativeDragInteractions();
      const z = this._dropContainer;
      if (z) {
        const De = this._rootElement,
          rt = De.parentNode,
          Cn = this._placeholder = this._createPlaceholderElement(),
          po = this._anchor = this._anchor || this._document.createComment(""),
          dr = this._getShadowRoot();
        rt.insertBefore(po, De), this._initialTransform = De.style.transform || "", this._preview = this._createPreviewElement(), Ee(De, !1, li), this._document.body.appendChild(rt.replaceChild(Cn, De)), this._getPreviewInsertionPoint(rt, dr).appendChild(this._preview), this.started.next({
          source: this,
          event: et
        }), z.start(), this._initialContainer = z, this._initialIndex = z.getItemIndex(this);
      } else this.started.next({
        source: this,
        event: et
      }), this._initialContainer = this._initialIndex = void 0;
      this._parentPositions.cache(z ? z.getScrollableParents() : []);
    }
    _initializeDragSequence(et, z) {
      this._parentDragRef && z.stopPropagation();
      const De = this.isDragging(),
        rt = Qn(z),
        Cn = !rt && 0 !== z.button,
        po = this._rootElement,
        dr = (0, Rt.sA)(z),
        Rs = !rt && this._lastTouchEventTime && this._lastTouchEventTime + 800 > Date.now(),
        Aa = rt ? (0, Re.yG)(z) : (0, Re.X6)(z);
      if (dr && dr.draggable && "mousedown" === z.type && z.preventDefault(), De || Cn || Rs || Aa) return;
      if (this._handles.length) {
        const Fl = po.style;
        this._rootElementTapHighlight = Fl.webkitTapHighlightColor || "", Fl.webkitTapHighlightColor = "transparent";
      }
      this._hasStartedDragging = this._hasMoved = !1, this._removeSubscriptions(), this._initialClientRect = this._rootElement.getBoundingClientRect(), this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove), this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp), this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(Fl => this._updateOnScroll(Fl)), this._boundaryElement && (this._boundaryRect = Nn(this._boundaryElement));
      const ml = this._previewTemplate;
      this._pickupPositionInElement = ml && ml.template && !ml.matchSize ? {
        x: 0,
        y: 0
      } : this._getPointerPositionInElement(this._initialClientRect, et, z);
      const Ba = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(z);
      this._pointerDirectionDelta = {
        x: 0,
        y: 0
      }, this._pointerPositionAtLastDirectionChange = {
        x: Ba.x,
        y: Ba.y
      }, this._dragStartTime = Date.now(), this._dragDropRegistry.startDragging(this, z);
    }
    _cleanupDragArtifacts(et) {
      Ee(this._rootElement, !0, li), this._anchor.parentNode.replaceChild(this._rootElement, this._anchor), this._destroyPreview(), this._destroyPlaceholder(), this._initialClientRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0, this._ngZone.run(() => {
        const z = this._dropContainer,
          De = z.getItemIndex(this),
          rt = this._getPointerPositionOnPage(et),
          Cn = this._getDragDistance(rt),
          po = z._isOverContainer(rt.x, rt.y);
        this.ended.next({
          source: this,
          distance: Cn,
          dropPoint: rt,
          event: et
        }), this.dropped.next({
          item: this,
          currentIndex: De,
          previousIndex: this._initialIndex,
          container: z,
          previousContainer: this._initialContainer,
          isPointerOverContainer: po,
          distance: Cn,
          dropPoint: rt,
          event: et
        }), z.drop(this, De, this._initialIndex, this._initialContainer, po, Cn, rt, et), this._dropContainer = this._initialContainer;
      });
    }
    _updateActiveDropContainer({
      x: et,
      y: z
    }, {
      x: De,
      y: rt
    }) {
      let Cn = this._initialContainer._getSiblingContainerFromPosition(this, et, z);
      !Cn && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(et, z) && (Cn = this._initialContainer), Cn && Cn !== this._dropContainer && this._ngZone.run(() => {
        this.exited.next({
          item: this,
          container: this._dropContainer
        }), this._dropContainer.exit(this), this._dropContainer = Cn, this._dropContainer.enter(this, et, z, Cn === this._initialContainer && Cn.sortingDisabled ? this._initialIndex : void 0), this.entered.next({
          item: this,
          container: Cn,
          currentIndex: Cn.getItemIndex(this)
        });
      }), this.isDragging() && (this._dropContainer._startScrollingIfNecessary(De, rt), this._dropContainer._sortItem(this, et, z, this._pointerDirectionDelta), this.constrainPosition ? this._applyPreviewTransform(et, z) : this._applyPreviewTransform(et - this._pickupPositionInElement.x, z - this._pickupPositionInElement.y));
    }
    _createPreviewElement() {
      const et = this._previewTemplate,
        z = this.previewClass,
        De = et ? et.template : null;
      let rt;
      if (De && et) {
        const Cn = et.matchSize ? this._initialClientRect : null,
          po = et.viewContainer.createEmbeddedView(De, et.context);
        po.detectChanges(), rt = In(po, this._document), this._previewRef = po, et.matchSize ? ui(rt, Cn) : rt.style.transform = $t(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      } else rt = Jo(this._rootElement), ui(rt, this._initialClientRect), this._initialTransform && (rt.style.transform = this._initialTransform);
      return Ke(rt.style, {
        "pointer-events": "none",
        margin: "0",
        position: "fixed",
        top: "0",
        left: "0",
        "z-index": `${this._config.zIndex || 1e3}`
      }, li), Ze(rt, !1), rt.classList.add("cdk-drag-preview"), rt.setAttribute("dir", this._direction), z && (Array.isArray(z) ? z.forEach(Cn => rt.classList.add(Cn)) : rt.classList.add(z)), rt;
    }
    _animatePreviewToPlaceholder() {
      if (!this._hasMoved) return Promise.resolve();
      const et = this._placeholder.getBoundingClientRect();
      this._preview.classList.add("cdk-drag-animating"), this._applyPreviewTransform(et.left, et.top);
      const z = function Je(xe) {
        const et = getComputedStyle(xe),
          z = Xt(et, "transition-property"),
          De = z.find(dr => "transform" === dr || "all" === dr);
        if (!De) return 0;
        const rt = z.indexOf(De),
          Cn = Xt(et, "transition-duration"),
          po = Xt(et, "transition-delay");
        return Mt(Cn[rt]) + Mt(po[rt]);
      }(this._preview);
      return 0 === z ? Promise.resolve() : this._ngZone.runOutsideAngular(() => new Promise(De => {
        const rt = po => {
            (!po || (0, Rt.sA)(po) === this._preview && "transform" === po.propertyName) && (this._preview?.removeEventListener("transitionend", rt), De(), clearTimeout(Cn));
          },
          Cn = setTimeout(rt, 1.5 * z);
        this._preview.addEventListener("transitionend", rt);
      }));
    }
    _createPlaceholderElement() {
      const et = this._placeholderTemplate,
        z = et ? et.template : null;
      let De;
      return z ? (this._placeholderRef = et.viewContainer.createEmbeddedView(z, et.context), this._placeholderRef.detectChanges(), De = In(this._placeholderRef, this._document)) : De = Jo(this._rootElement), De.style.pointerEvents = "none", De.classList.add("cdk-drag-placeholder"), De;
    }
    _getPointerPositionInElement(et, z, De) {
      const rt = z === this._rootElement ? null : z,
        Cn = rt ? rt.getBoundingClientRect() : et,
        po = Qn(De) ? De.targetTouches[0] : De,
        dr = this._getViewportScrollPosition();
      return {
        x: Cn.left - et.left + (po.pageX - Cn.left - dr.left),
        y: Cn.top - et.top + (po.pageY - Cn.top - dr.top)
      };
    }
    _getPointerPositionOnPage(et) {
      const z = this._getViewportScrollPosition(),
        De = Qn(et) ? et.touches[0] || et.changedTouches[0] || {
          pageX: 0,
          pageY: 0
        } : et,
        rt = De.pageX - z.left,
        Cn = De.pageY - z.top;
      if (this._ownerSVGElement) {
        const po = this._ownerSVGElement.getScreenCTM();
        if (po) {
          const dr = this._ownerSVGElement.createSVGPoint();
          return dr.x = rt, dr.y = Cn, dr.matrixTransform(po.inverse());
        }
      }
      return {
        x: rt,
        y: Cn
      };
    }
    _getConstrainedPointerPosition(et) {
      const z = this._dropContainer ? this._dropContainer.lockAxis : null;
      let {
        x: De,
        y: rt
      } = this.constrainPosition ? this.constrainPosition(et, this, this._initialClientRect, this._pickupPositionInElement) : et;
      if ("x" === this.lockAxis || "x" === z ? rt = this._pickupPositionOnPage.y : ("y" === this.lockAxis || "y" === z) && (De = this._pickupPositionOnPage.x), this._boundaryRect) {
        const {
            x: Cn,
            y: po
          } = this._pickupPositionInElement,
          dr = this._boundaryRect,
          {
            width: Rs,
            height: Aa
          } = this._getPreviewRect(),
          ml = dr.top + po,
          Ba = dr.bottom - (Aa - po);
        De = Mn(De, dr.left + Cn, dr.right - (Rs - Cn)), rt = Mn(rt, ml, Ba);
      }
      return {
        x: De,
        y: rt
      };
    }
    _updatePointerDirectionDelta(et) {
      const {
          x: z,
          y: De
        } = et,
        rt = this._pointerDirectionDelta,
        Cn = this._pointerPositionAtLastDirectionChange,
        po = Math.abs(z - Cn.x),
        dr = Math.abs(De - Cn.y);
      return po > this._config.pointerDirectionChangeThreshold && (rt.x = z > Cn.x ? 1 : -1, Cn.x = z), dr > this._config.pointerDirectionChangeThreshold && (rt.y = De > Cn.y ? 1 : -1, Cn.y = De), rt;
    }
    _toggleNativeDragInteractions() {
      if (!this._rootElement || !this._handles) return;
      const et = this._handles.length > 0 || !this.isDragging();
      et !== this._nativeInteractionsEnabled && (this._nativeInteractionsEnabled = et, Ze(this._rootElement, et));
    }
    _removeRootElementListeners(et) {
      et.removeEventListener("mousedown", this._pointerDown, vt), et.removeEventListener("touchstart", this._pointerDown, Dn), et.removeEventListener("dragstart", this._nativeDragStart, vt);
    }
    _applyRootElementTransform(et, z) {
      const De = $t(et, z),
        rt = this._rootElement.style;
      null == this._initialTransform && (this._initialTransform = rt.transform && "none" != rt.transform ? rt.transform : ""), rt.transform = je(De, this._initialTransform);
    }
    _applyPreviewTransform(et, z) {
      const De = this._previewTemplate?.template ? void 0 : this._initialTransform,
        rt = $t(et, z);
      this._preview.style.transform = je(rt, De);
    }
    _getDragDistance(et) {
      const z = this._pickupPositionOnPage;
      return z ? {
        x: et.x - z.x,
        y: et.y - z.y
      } : {
        x: 0,
        y: 0
      };
    }
    _cleanupCachedDimensions() {
      this._boundaryRect = this._previewRect = void 0, this._parentPositions.clear();
    }
    _containInsideBoundaryOnResize() {
      let {
        x: et,
        y: z
      } = this._passiveTransform;
      if (0 === et && 0 === z || this.isDragging() || !this._boundaryElement) return;
      const De = this._rootElement.getBoundingClientRect(),
        rt = this._boundaryElement.getBoundingClientRect();
      if (0 === rt.width && 0 === rt.height || 0 === De.width && 0 === De.height) return;
      const Cn = rt.left - De.left,
        po = De.right - rt.right,
        dr = rt.top - De.top,
        Rs = De.bottom - rt.bottom;
      rt.width > De.width ? (Cn > 0 && (et += Cn), po > 0 && (et -= po)) : et = 0, rt.height > De.height ? (dr > 0 && (z += dr), Rs > 0 && (z -= Rs)) : z = 0, (et !== this._passiveTransform.x || z !== this._passiveTransform.y) && this.setFreeDragPosition({
        y: z,
        x: et
      });
    }
    _getDragStartDelay(et) {
      const z = this.dragStartDelay;
      return "number" == typeof z ? z : Qn(et) ? z.touch : z ? z.mouse : 0;
    }
    _updateOnScroll(et) {
      const z = this._parentPositions.handleScroll(et);
      if (z) {
        const De = (0, Rt.sA)(et);
        this._boundaryRect && De !== this._boundaryElement && De.contains(this._boundaryElement) && Ii(this._boundaryRect, z.top, z.left), this._pickupPositionOnPage.x += z.left, this._pickupPositionOnPage.y += z.top, this._dropContainer || (this._activeTransform.x -= z.left, this._activeTransform.y -= z.top, this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y));
      }
    }
    _getViewportScrollPosition() {
      return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
    }
    _getShadowRoot() {
      return void 0 === this._cachedShadowRoot && (this._cachedShadowRoot = (0, Rt.kV)(this._rootElement)), this._cachedShadowRoot;
    }
    _getPreviewInsertionPoint(et, z) {
      const De = this._previewContainer || "global";
      if ("parent" === De) return et;
      if ("global" === De) {
        const rt = this._document;
        return z || rt.fullscreenElement || rt.webkitFullscreenElement || rt.mozFullScreenElement || rt.msFullscreenElement || rt.body;
      }
      return (0, We.fI)(De);
    }
    _getPreviewRect() {
      return (!this._previewRect || !this._previewRect.width && !this._previewRect.height) && (this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialClientRect), this._previewRect;
    }
    _getTargetHandle(et) {
      return this._handles.find(z => et.target && (et.target === z || z.contains(et.target)));
    }
  }
  function $t(xe, et) {
    return `translate3d(${Math.round(xe)}px, ${Math.round(et)}px, 0)`;
  }
  function Mn(xe, et, z) {
    return Math.max(et, Math.min(z, xe));
  }
  function Qn(xe) {
    return "t" === xe.type[0];
  }
  function In(xe, et) {
    const z = xe.rootNodes;
    if (1 === z.length && z[0].nodeType === et.ELEMENT_NODE) return z[0];
    const De = et.createElement("div");
    return z.forEach(rt => De.appendChild(rt)), De;
  }
  function ui(xe, et) {
    xe.style.width = `${et.width}px`, xe.style.height = `${et.height}px`, xe.style.transform = $t(et.left, et.top);
  }
  function To(xe, et, z) {
    const De = Xn(et, xe.length - 1),
      rt = Xn(z, xe.length - 1);
    if (De === rt) return;
    const Cn = xe[De],
      po = rt < De ? -1 : 1;
    for (let dr = De; dr !== rt; dr += po) xe[dr] = xe[dr + po];
    xe[rt] = Cn;
  }
  function Xn(xe, et) {
    return Math.max(0, Math.min(et, xe));
  }
  class Yi {
    constructor(et, z) {
      this._element = et, this._dragDropRegistry = z, this._itemPositions = [], this.orientation = "vertical", this._previousSwap = {
        drag: null,
        delta: 0,
        overlaps: !1
      };
    }
    start(et) {
      this.withItems(et);
    }
    sort(et, z, De, rt) {
      const Cn = this._itemPositions,
        po = this._getItemIndexFromPointerPosition(et, z, De, rt);
      if (-1 === po && Cn.length > 0) return null;
      const dr = "horizontal" === this.orientation,
        Rs = Cn.findIndex(mc => mc.drag === et),
        Aa = Cn[po],
        Ba = Aa.clientRect,
        Fl = Rs > po ? 1 : -1,
        gl = this._getItemOffsetPx(Cn[Rs].clientRect, Ba, Fl),
        qa = this._getSiblingOffsetPx(Rs, Cn, Fl),
        Gl = Cn.slice();
      return To(Cn, Rs, po), Cn.forEach((mc, Ph) => {
        if (Gl[Ph] === mc) return;
        const xp = mc.drag === et,
          Oh = xp ? gl : qa,
          Wp = xp ? et.getPlaceholderElement() : mc.drag.getRootElement();
        mc.offset += Oh, dr ? (Wp.style.transform = je(`translate3d(${Math.round(mc.offset)}px, 0, 0)`, mc.initialTransform), Ii(mc.clientRect, 0, Oh)) : (Wp.style.transform = je(`translate3d(0, ${Math.round(mc.offset)}px, 0)`, mc.initialTransform), Ii(mc.clientRect, Oh, 0));
      }), this._previousSwap.overlaps = Pi(Ba, z, De), this._previousSwap.drag = Aa.drag, this._previousSwap.delta = dr ? rt.x : rt.y, {
        previousIndex: Rs,
        currentIndex: po
      };
    }
    enter(et, z, De, rt) {
      const Cn = null == rt || rt < 0 ? this._getItemIndexFromPointerPosition(et, z, De) : rt,
        po = this._activeDraggables,
        dr = po.indexOf(et),
        Rs = et.getPlaceholderElement();
      let Aa = po[Cn];
      if (Aa === et && (Aa = po[Cn + 1]), !Aa && (null == Cn || -1 === Cn || Cn < po.length - 1) && this._shouldEnterAsFirstChild(z, De) && (Aa = po[0]), dr > -1 && po.splice(dr, 1), Aa && !this._dragDropRegistry.isDragging(Aa)) {
        const ml = Aa.getRootElement();
        ml.parentElement.insertBefore(Rs, ml), po.splice(Cn, 0, et);
      } else (0, We.fI)(this._element).appendChild(Rs), po.push(et);
      Rs.style.transform = "", this._cacheItemPositions();
    }
    withItems(et) {
      this._activeDraggables = et.slice(), this._cacheItemPositions();
    }
    withSortPredicate(et) {
      this._sortPredicate = et;
    }
    reset() {
      this._activeDraggables.forEach(et => {
        const z = et.getRootElement();
        if (z) {
          const De = this._itemPositions.find(rt => rt.drag === et)?.initialTransform;
          z.style.transform = De || "";
        }
      }), this._itemPositions = [], this._activeDraggables = [], this._previousSwap.drag = null, this._previousSwap.delta = 0, this._previousSwap.overlaps = !1;
    }
    getActiveItemsSnapshot() {
      return this._activeDraggables;
    }
    getItemIndex(et) {
      return ("horizontal" === this.orientation && "rtl" === this.direction ? this._itemPositions.slice().reverse() : this._itemPositions).findIndex(De => De.drag === et);
    }
    updateOnScroll(et, z) {
      this._itemPositions.forEach(({
        clientRect: De
      }) => {
        Ii(De, et, z);
      }), this._itemPositions.forEach(({
        drag: De
      }) => {
        this._dragDropRegistry.isDragging(De) && De._sortFromLastPointerPosition();
      });
    }
    _cacheItemPositions() {
      const et = "horizontal" === this.orientation;
      this._itemPositions = this._activeDraggables.map(z => {
        const De = z.getVisibleElement();
        return {
          drag: z,
          offset: 0,
          initialTransform: De.style.transform || "",
          clientRect: Nn(De)
        };
      }).sort((z, De) => et ? z.clientRect.left - De.clientRect.left : z.clientRect.top - De.clientRect.top);
    }
    _getItemOffsetPx(et, z, De) {
      const rt = "horizontal" === this.orientation;
      let Cn = rt ? z.left - et.left : z.top - et.top;
      return -1 === De && (Cn += rt ? z.width - et.width : z.height - et.height), Cn;
    }
    _getSiblingOffsetPx(et, z, De) {
      const rt = "horizontal" === this.orientation,
        Cn = z[et].clientRect,
        po = z[et + -1 * De];
      let dr = Cn[rt ? "width" : "height"] * De;
      if (po) {
        const Rs = rt ? "left" : "top",
          Aa = rt ? "right" : "bottom";
        -1 === De ? dr -= po.clientRect[Rs] - Cn[Aa] : dr += Cn[Rs] - po.clientRect[Aa];
      }
      return dr;
    }
    _shouldEnterAsFirstChild(et, z) {
      if (!this._activeDraggables.length) return !1;
      const De = this._itemPositions,
        rt = "horizontal" === this.orientation;
      if (De[0].drag !== this._activeDraggables[0]) {
        const po = De[De.length - 1].clientRect;
        return rt ? et >= po.right : z >= po.bottom;
      }
      {
        const po = De[0].clientRect;
        return rt ? et <= po.left : z <= po.top;
      }
    }
    _getItemIndexFromPointerPosition(et, z, De, rt) {
      const Cn = "horizontal" === this.orientation,
        po = this._itemPositions.findIndex(({
          drag: dr,
          clientRect: Rs
        }) => dr !== et && (!rt || dr !== this._previousSwap.drag || !this._previousSwap.overlaps || (Cn ? rt.x : rt.y) !== this._previousSwap.delta) && (Cn ? z >= Math.floor(Rs.left) && z < Math.floor(Rs.right) : De >= Math.floor(Rs.top) && De < Math.floor(Rs.bottom)));
      return -1 !== po && this._sortPredicate(po, et) ? po : -1;
    }
  }
  const Fo = .05;
  class br {
    constructor(et, z, De, rt, Cn) {
      this._dragDropRegistry = z, this._ngZone = rt, this._viewportRuler = Cn, this.disabled = !1, this.sortingDisabled = !1, this.autoScrollDisabled = !1, this.autoScrollStep = 2, this.enterPredicate = () => !0, this.sortPredicate = () => !0, this.beforeStarted = new d.x(), this.entered = new d.x(), this.exited = new d.x(), this.dropped = new d.x(), this.sorted = new d.x(), this.receivingStarted = new d.x(), this.receivingStopped = new d.x(), this._isDragging = !1, this._draggables = [], this._siblings = [], this._activeSiblings = new Set(), this._viewportScrollSubscription = M.w0.EMPTY, this._verticalScrollDirection = 0, this._horizontalScrollDirection = 0, this._stopScrollTimers = new d.x(), this._cachedShadowRoot = null, this._startScrollInterval = () => {
        this._stopScrolling(), (0, st.F)(0, q.Z).pipe((0, W.R)(this._stopScrollTimers)).subscribe(() => {
          const po = this._scrollNode,
            dr = this.autoScrollStep;
          1 === this._verticalScrollDirection ? po.scrollBy(0, -dr) : 2 === this._verticalScrollDirection && po.scrollBy(0, dr), 1 === this._horizontalScrollDirection ? po.scrollBy(-dr, 0) : 2 === this._horizontalScrollDirection && po.scrollBy(dr, 0);
        });
      }, this.element = (0, We.fI)(et), this._document = De, this.withScrollableParents([this.element]), z.registerDropContainer(this), this._parentPositions = new co(De), this._sortStrategy = new Yi(this.element, z), this._sortStrategy.withSortPredicate((po, dr) => this.sortPredicate(po, dr, this));
    }
    dispose() {
      this._stopScrolling(), this._stopScrollTimers.complete(), this._viewportScrollSubscription.unsubscribe(), this.beforeStarted.complete(), this.entered.complete(), this.exited.complete(), this.dropped.complete(), this.sorted.complete(), this.receivingStarted.complete(), this.receivingStopped.complete(), this._activeSiblings.clear(), this._scrollNode = null, this._parentPositions.clear(), this._dragDropRegistry.removeDropContainer(this);
    }
    isDragging() {
      return this._isDragging;
    }
    start() {
      this._draggingStarted(), this._notifyReceivingSiblings();
    }
    enter(et, z, De, rt) {
      this._draggingStarted(), null == rt && this.sortingDisabled && (rt = this._draggables.indexOf(et)), this._sortStrategy.enter(et, z, De, rt), this._cacheParentPositions(), this._notifyReceivingSiblings(), this.entered.next({
        item: et,
        container: this,
        currentIndex: this.getItemIndex(et)
      });
    }
    exit(et) {
      this._reset(), this.exited.next({
        item: et,
        container: this
      });
    }
    drop(et, z, De, rt, Cn, po, dr, Rs = {}) {
      this._reset(), this.dropped.next({
        item: et,
        currentIndex: z,
        previousIndex: De,
        container: this,
        previousContainer: rt,
        isPointerOverContainer: Cn,
        distance: po,
        dropPoint: dr,
        event: Rs
      });
    }
    withItems(et) {
      const z = this._draggables;
      return this._draggables = et, et.forEach(De => De._withDropContainer(this)), this.isDragging() && (z.filter(rt => rt.isDragging()).every(rt => -1 === et.indexOf(rt)) ? this._reset() : this._sortStrategy.withItems(this._draggables)), this;
    }
    withDirection(et) {
      return this._sortStrategy.direction = et, this;
    }
    connectedTo(et) {
      return this._siblings = et.slice(), this;
    }
    withOrientation(et) {
      return this._sortStrategy.orientation = et, this;
    }
    withScrollableParents(et) {
      const z = (0, We.fI)(this.element);
      return this._scrollableElements = -1 === et.indexOf(z) ? [z, ...et] : et.slice(), this;
    }
    getScrollableParents() {
      return this._scrollableElements;
    }
    getItemIndex(et) {
      return this._isDragging ? this._sortStrategy.getItemIndex(et) : this._draggables.indexOf(et);
    }
    isReceiving() {
      return this._activeSiblings.size > 0;
    }
    _sortItem(et, z, De, rt) {
      if (this.sortingDisabled || !this._clientRect || !yi(this._clientRect, .05, z, De)) return;
      const Cn = this._sortStrategy.sort(et, z, De, rt);
      Cn && this.sorted.next({
        previousIndex: Cn.previousIndex,
        currentIndex: Cn.currentIndex,
        container: this,
        item: et
      });
    }
    _startScrollingIfNecessary(et, z) {
      if (this.autoScrollDisabled) return;
      let De,
        rt = 0,
        Cn = 0;
      if (this._parentPositions.positions.forEach((po, dr) => {
        dr === this._document || !po.clientRect || De || yi(po.clientRect, .05, et, z) && ([rt, Cn] = function Yo(xe, et, z, De) {
          const rt = Pr(et, De),
            Cn = qo(et, z);
          let po = 0,
            dr = 0;
          if (rt) {
            const Rs = xe.scrollTop;
            1 === rt ? Rs > 0 && (po = 1) : xe.scrollHeight - Rs > xe.clientHeight && (po = 2);
          }
          if (Cn) {
            const Rs = xe.scrollLeft;
            1 === Cn ? Rs > 0 && (dr = 1) : xe.scrollWidth - Rs > xe.clientWidth && (dr = 2);
          }
          return [po, dr];
        }(dr, po.clientRect, et, z), (rt || Cn) && (De = dr));
      }), !rt && !Cn) {
        const {
            width: po,
            height: dr
          } = this._viewportRuler.getViewportSize(),
          Rs = {
            width: po,
            height: dr,
            top: 0,
            right: po,
            bottom: dr,
            left: 0
          };
        rt = Pr(Rs, z), Cn = qo(Rs, et), De = window;
      }
      De && (rt !== this._verticalScrollDirection || Cn !== this._horizontalScrollDirection || De !== this._scrollNode) && (this._verticalScrollDirection = rt, this._horizontalScrollDirection = Cn, this._scrollNode = De, (rt || Cn) && De ? this._ngZone.runOutsideAngular(this._startScrollInterval) : this._stopScrolling());
    }
    _stopScrolling() {
      this._stopScrollTimers.next();
    }
    _draggingStarted() {
      const et = (0, We.fI)(this.element).style;
      this.beforeStarted.next(), this._isDragging = !0, this._initialScrollSnap = et.msScrollSnapType || et.scrollSnapType || "", et.scrollSnapType = et.msScrollSnapType = "none", this._sortStrategy.start(this._draggables), this._cacheParentPositions(), this._viewportScrollSubscription.unsubscribe(), this._listenToScrollEvents();
    }
    _cacheParentPositions() {
      const et = (0, We.fI)(this.element);
      this._parentPositions.cache(this._scrollableElements), this._clientRect = this._parentPositions.positions.get(et).clientRect;
    }
    _reset() {
      this._isDragging = !1;
      const et = (0, We.fI)(this.element).style;
      et.scrollSnapType = et.msScrollSnapType = this._initialScrollSnap, this._siblings.forEach(z => z._stopReceiving(this)), this._sortStrategy.reset(), this._stopScrolling(), this._viewportScrollSubscription.unsubscribe(), this._parentPositions.clear();
    }
    _isOverContainer(et, z) {
      return null != this._clientRect && Pi(this._clientRect, et, z);
    }
    _getSiblingContainerFromPosition(et, z, De) {
      return this._siblings.find(rt => rt._canReceive(et, z, De));
    }
    _canReceive(et, z, De) {
      if (!this._clientRect || !Pi(this._clientRect, z, De) || !this.enterPredicate(et, this)) return !1;
      const rt = this._getShadowRoot().elementFromPoint(z, De);
      if (!rt) return !1;
      const Cn = (0, We.fI)(this.element);
      return rt === Cn || Cn.contains(rt);
    }
    _startReceiving(et, z) {
      const De = this._activeSiblings;
      !De.has(et) && z.every(rt => this.enterPredicate(rt, this) || this._draggables.indexOf(rt) > -1) && (De.add(et), this._cacheParentPositions(), this._listenToScrollEvents(), this.receivingStarted.next({
        initiator: et,
        receiver: this,
        items: z
      }));
    }
    _stopReceiving(et) {
      this._activeSiblings.delete(et), this._viewportScrollSubscription.unsubscribe(), this.receivingStopped.next({
        initiator: et,
        receiver: this
      });
    }
    _listenToScrollEvents() {
      this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(et => {
        if (this.isDragging()) {
          const z = this._parentPositions.handleScroll(et);
          z && this._sortStrategy.updateOnScroll(z.top, z.left);
        } else this.isReceiving() && this._cacheParentPositions();
      });
    }
    _getShadowRoot() {
      if (!this._cachedShadowRoot) {
        const et = (0, Rt.kV)((0, We.fI)(this.element));
        this._cachedShadowRoot = et || this._document;
      }
      return this._cachedShadowRoot;
    }
    _notifyReceivingSiblings() {
      const et = this._sortStrategy.getActiveItemsSnapshot().filter(z => z.isDragging());
      this._siblings.forEach(z => z._startReceiving(this, et));
    }
  }
  function Pr(xe, et) {
    const {
        top: z,
        bottom: De,
        height: rt
      } = xe,
      Cn = rt * Fo;
    return et >= z - Cn && et <= z + Cn ? 1 : et >= De - Cn && et <= De + Cn ? 2 : 0;
  }
  function qo(xe, et) {
    const {
        left: z,
        right: De,
        width: rt
      } = xe,
      Cn = rt * Fo;
    return et >= z - Cn && et <= z + Cn ? 1 : et >= De - Cn && et <= De + Cn ? 2 : 0;
  }
  const wr = (0, Rt.i$)({
    passive: !1,
    capture: !0
  });
  let oo = (() => {
    class xe {
      constructor(z, De) {
        this._ngZone = z, this._dropInstances = new Set(), this._dragInstances = new Set(), this._activeDragInstances = [], this._globalListeners = new Map(), this._draggingPredicate = rt => rt.isDragging(), this.pointerMove = new d.x(), this.pointerUp = new d.x(), this.scroll = new d.x(), this._preventDefaultWhileDragging = rt => {
          this._activeDragInstances.length > 0 && rt.preventDefault();
        }, this._persistentTouchmoveListener = rt => {
          this._activeDragInstances.length > 0 && (this._activeDragInstances.some(this._draggingPredicate) && rt.preventDefault(), this.pointerMove.next(rt));
        }, this._document = De;
      }
      registerDropContainer(z) {
        this._dropInstances.has(z) || this._dropInstances.add(z);
      }
      registerDragItem(z) {
        this._dragInstances.add(z), 1 === this._dragInstances.size && this._ngZone.runOutsideAngular(() => {
          this._document.addEventListener("touchmove", this._persistentTouchmoveListener, wr);
        });
      }
      removeDropContainer(z) {
        this._dropInstances.delete(z);
      }
      removeDragItem(z) {
        this._dragInstances.delete(z), this.stopDragging(z), 0 === this._dragInstances.size && this._document.removeEventListener("touchmove", this._persistentTouchmoveListener, wr);
      }
      startDragging(z, De) {
        if (!(this._activeDragInstances.indexOf(z) > -1) && (this._activeDragInstances.push(z), 1 === this._activeDragInstances.length)) {
          const rt = De.type.startsWith("touch");
          this._globalListeners.set(rt ? "touchend" : "mouseup", {
            handler: Cn => this.pointerUp.next(Cn),
            options: !0
          }).set("scroll", {
            handler: Cn => this.scroll.next(Cn),
            options: !0
          }).set("selectstart", {
            handler: this._preventDefaultWhileDragging,
            options: wr
          }), rt || this._globalListeners.set("mousemove", {
            handler: Cn => this.pointerMove.next(Cn),
            options: wr
          }), this._ngZone.runOutsideAngular(() => {
            this._globalListeners.forEach((Cn, po) => {
              this._document.addEventListener(po, Cn.handler, Cn.options);
            });
          });
        }
      }
      stopDragging(z) {
        const De = this._activeDragInstances.indexOf(z);
        De > -1 && (this._activeDragInstances.splice(De, 1), 0 === this._activeDragInstances.length && this._clearGlobalListeners());
      }
      isDragging(z) {
        return this._activeDragInstances.indexOf(z) > -1;
      }
      scrolled(z) {
        const De = [this.scroll];
        return z && z !== this._document && De.push(new mt.y(rt => this._ngZone.runOutsideAngular(() => {
          const po = dr => {
            this._activeDragInstances.length && rt.next(dr);
          };
          return z.addEventListener("scroll", po, !0), () => {
            z.removeEventListener("scroll", po, !0);
          };
        }))), (0, ut.T)(...De);
      }
      ngOnDestroy() {
        this._dragInstances.forEach(z => this.removeDragItem(z)), this._dropInstances.forEach(z => this.removeDropContainer(z)), this._clearGlobalListeners(), this.pointerMove.complete(), this.pointerUp.complete();
      }
      _clearGlobalListeners() {
        this._globalListeners.forEach((z, De) => {
          this._document.removeEventListener(De, z.handler, z.options);
        }), this._globalListeners.clear();
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)(t.LFG(t.R0b), t.LFG(b.K0));
    }, xe.ɵprov = t.Yz7({
      token: xe,
      factory: xe.ɵfac,
      providedIn: "root"
    }), xe;
  })();
  const Di = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
  };
  let Ci = (() => {
    class xe {
      constructor(z, De, rt, Cn) {
        this._document = z, this._ngZone = De, this._viewportRuler = rt, this._dragDropRegistry = Cn;
      }
      createDrag(z, De = Di) {
        return new zn(z, De, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
      }
      createDropList(z) {
        return new br(z, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)(t.LFG(b.K0), t.LFG(t.R0b), t.LFG(qe.rL), t.LFG(oo));
    }, xe.ɵprov = t.Yz7({
      token: xe,
      factory: xe.ɵfac,
      providedIn: "root"
    }), xe;
  })();
  const lo = new t.OlP("CDK_DRAG_PARENT"),
    jo = new t.OlP("CdkDropListGroup"),
    ji = new t.OlP("CDK_DRAG_CONFIG");
  let fi = 0;
  const Fi = new t.OlP("CdkDropList");
  let Rn = (() => {
    class xe {
      get disabled() {
        return this._disabled || !!this._group && this._group.disabled;
      }
      set disabled(z) {
        this._dropListRef.disabled = this._disabled = (0, We.Ig)(z);
      }
      constructor(z, De, rt, Cn, po, dr, Rs) {
        this.element = z, this._changeDetectorRef = rt, this._scrollDispatcher = Cn, this._dir = po, this._group = dr, this._destroyed = new d.x(), this.connectedTo = [], this.id = "cdk-drop-list-" + fi++, this.enterPredicate = () => !0, this.sortPredicate = () => !0, this.dropped = new t.vpe(), this.entered = new t.vpe(), this.exited = new t.vpe(), this.sorted = new t.vpe(), this._unsortedItems = new Set(), this._dropListRef = De.createDropList(z), this._dropListRef.data = this, Rs && this._assignDefaults(Rs), this._dropListRef.enterPredicate = (Aa, ml) => this.enterPredicate(Aa.data, ml.data), this._dropListRef.sortPredicate = (Aa, ml, Ba) => this.sortPredicate(Aa, ml.data, Ba.data), this._setupInputSyncSubscription(this._dropListRef), this._handleEvents(this._dropListRef), xe._dropLists.push(this), dr && dr._items.add(this);
      }
      addItem(z) {
        this._unsortedItems.add(z), this._dropListRef.isDragging() && this._syncItemsWithRef();
      }
      removeItem(z) {
        this._unsortedItems.delete(z), this._dropListRef.isDragging() && this._syncItemsWithRef();
      }
      getSortedItems() {
        return Array.from(this._unsortedItems).sort((z, De) => z._dragRef.getVisibleElement().compareDocumentPosition(De._dragRef.getVisibleElement()) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
      }
      ngOnDestroy() {
        const z = xe._dropLists.indexOf(this);
        z > -1 && xe._dropLists.splice(z, 1), this._group && this._group._items.delete(this), this._unsortedItems.clear(), this._dropListRef.dispose(), this._destroyed.next(), this._destroyed.complete();
      }
      _setupInputSyncSubscription(z) {
        this._dir && this._dir.change.pipe((0, te.O)(this._dir.value), (0, W.R)(this._destroyed)).subscribe(De => z.withDirection(De)), z.beforeStarted.subscribe(() => {
          const De = (0, We.Eq)(this.connectedTo).map(rt => "string" == typeof rt ? xe._dropLists.find(po => po.id === rt) : rt);
          if (this._group && this._group._items.forEach(rt => {
            -1 === De.indexOf(rt) && De.push(rt);
          }), !this._scrollableParentsResolved) {
            const rt = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(Cn => Cn.getElementRef().nativeElement);
            this._dropListRef.withScrollableParents(rt), this._scrollableParentsResolved = !0;
          }
          z.disabled = this.disabled, z.lockAxis = this.lockAxis, z.sortingDisabled = (0, We.Ig)(this.sortingDisabled), z.autoScrollDisabled = (0, We.Ig)(this.autoScrollDisabled), z.autoScrollStep = (0, We.su)(this.autoScrollStep, 2), z.connectedTo(De.filter(rt => rt && rt !== this).map(rt => rt._dropListRef)).withOrientation(this.orientation);
        });
      }
      _handleEvents(z) {
        z.beforeStarted.subscribe(() => {
          this._syncItemsWithRef(), this._changeDetectorRef.markForCheck();
        }), z.entered.subscribe(De => {
          this.entered.emit({
            container: this,
            item: De.item.data,
            currentIndex: De.currentIndex
          });
        }), z.exited.subscribe(De => {
          this.exited.emit({
            container: this,
            item: De.item.data
          }), this._changeDetectorRef.markForCheck();
        }), z.sorted.subscribe(De => {
          this.sorted.emit({
            previousIndex: De.previousIndex,
            currentIndex: De.currentIndex,
            container: this,
            item: De.item.data
          });
        }), z.dropped.subscribe(De => {
          this.dropped.emit({
            previousIndex: De.previousIndex,
            currentIndex: De.currentIndex,
            previousContainer: De.previousContainer.data,
            container: De.container.data,
            item: De.item.data,
            isPointerOverContainer: De.isPointerOverContainer,
            distance: De.distance,
            dropPoint: De.dropPoint,
            event: De.event
          }), this._changeDetectorRef.markForCheck();
        }), (0, ut.T)(z.receivingStarted, z.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
      }
      _assignDefaults(z) {
        const {
          lockAxis: De,
          draggingDisabled: rt,
          sortingDisabled: Cn,
          listAutoScrollDisabled: po,
          listOrientation: dr
        } = z;
        this.disabled = rt ?? !1, this.sortingDisabled = Cn ?? !1, this.autoScrollDisabled = po ?? !1, this.orientation = dr || "vertical", De && (this.lockAxis = De);
      }
      _syncItemsWithRef() {
        this._dropListRef.withItems(this.getSortedItems().map(z => z._dragRef));
      }
    }
    return xe._dropLists = [], xe.ɵfac = function (z) {
      return new (z || xe)(t.Y36(t.SBq), t.Y36(Ci), t.Y36(t.sBO), t.Y36(qe.mF), t.Y36(Me.Is, 8), t.Y36(jo, 12), t.Y36(ji, 8));
    }, xe.ɵdir = t.lG2({
      type: xe,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function (z, De) {
        2 & z && (t.uIk("id", De.id), t.ekj("cdk-drop-list-disabled", De.disabled)("cdk-drop-list-dragging", De._dropListRef.isDragging())("cdk-drop-list-receiving", De._dropListRef.isReceiving()));
      },
      inputs: {
        connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
        data: ["cdkDropListData", "data"],
        orientation: ["cdkDropListOrientation", "orientation"],
        id: "id",
        lockAxis: ["cdkDropListLockAxis", "lockAxis"],
        disabled: ["cdkDropListDisabled", "disabled"],
        sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
        enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
        sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
        autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
        autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      standalone: !0,
      features: [t._Bn([{
        provide: jo,
        useValue: void 0
      }, {
        provide: Fi,
        useExisting: xe
      }])]
    }), xe;
  })();
  const ki = new t.OlP("CdkDragHandle");
  let Ei = (() => {
    class xe {
      get disabled() {
        return this._disabled;
      }
      set disabled(z) {
        this._disabled = (0, We.Ig)(z), this._stateChanges.next(this);
      }
      constructor(z, De) {
        this.element = z, this._stateChanges = new d.x(), this._disabled = !1, this._parentDrag = De;
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)(t.Y36(t.SBq), t.Y36(lo, 12));
    }, xe.ɵdir = t.lG2({
      type: xe,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: ["cdkDragHandleDisabled", "disabled"]
      },
      standalone: !0,
      features: [t._Bn([{
        provide: ki,
        useExisting: xe
      }])]
    }), xe;
  })();
  const Wt = new t.OlP("CdkDragPlaceholder"),
    Ji = new t.OlP("CdkDragPreview");
  let us = (() => {
    class xe {
      get disabled() {
        return this._disabled || this.dropContainer && this.dropContainer.disabled;
      }
      set disabled(z) {
        this._disabled = (0, We.Ig)(z), this._dragRef.disabled = this._disabled;
      }
      constructor(z, De, rt, Cn, po, dr, Rs, Aa, ml, Ba, Fl) {
        this.element = z, this.dropContainer = De, this._ngZone = Cn, this._viewContainerRef = po, this._dir = Rs, this._changeDetectorRef = ml, this._selfHandle = Ba, this._parentDrag = Fl, this._destroyed = new d.x(), this.started = new t.vpe(), this.released = new t.vpe(), this.ended = new t.vpe(), this.entered = new t.vpe(), this.exited = new t.vpe(), this.dropped = new t.vpe(), this.moved = new mt.y(gl => {
          const qa = this._dragRef.moved.pipe((0, Ct.U)(Gl => ({
            source: this,
            pointerPosition: Gl.pointerPosition,
            event: Gl.event,
            delta: Gl.delta,
            distance: Gl.distance
          }))).subscribe(gl);
          return () => {
            qa.unsubscribe();
          };
        }), this._dragRef = Aa.createDrag(z, {
          dragStartThreshold: dr && null != dr.dragStartThreshold ? dr.dragStartThreshold : 5,
          pointerDirectionChangeThreshold: dr && null != dr.pointerDirectionChangeThreshold ? dr.pointerDirectionChangeThreshold : 5,
          zIndex: dr?.zIndex
        }), this._dragRef.data = this, xe._dragInstances.push(this), dr && this._assignDefaults(dr), De && (this._dragRef._withDropContainer(De._dropListRef), De.addItem(this)), this._syncInputs(this._dragRef), this._handleEvents(this._dragRef);
      }
      getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
      }
      getRootElement() {
        return this._dragRef.getRootElement();
      }
      reset() {
        this._dragRef.reset();
      }
      getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
      }
      setFreeDragPosition(z) {
        this._dragRef.setFreeDragPosition(z);
      }
      ngAfterViewInit() {
        this._ngZone.runOutsideAngular(() => {
          this._ngZone.onStable.pipe((0, Ft.q)(1), (0, W.R)(this._destroyed)).subscribe(() => {
            this._updateRootElement(), this._setupHandlesListener(), this.freeDragPosition && this._dragRef.setFreeDragPosition(this.freeDragPosition);
          });
        });
      }
      ngOnChanges(z) {
        const De = z.rootElementSelector,
          rt = z.freeDragPosition;
        De && !De.firstChange && this._updateRootElement(), rt && !rt.firstChange && this.freeDragPosition && this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
      ngOnDestroy() {
        this.dropContainer && this.dropContainer.removeItem(this);
        const z = xe._dragInstances.indexOf(this);
        z > -1 && xe._dragInstances.splice(z, 1), this._ngZone.runOutsideAngular(() => {
          this._destroyed.next(), this._destroyed.complete(), this._dragRef.dispose();
        });
      }
      _updateRootElement() {
        const z = this.element.nativeElement;
        let De = z;
        this.rootElementSelector && (De = void 0 !== z.closest ? z.closest(this.rootElementSelector) : z.parentElement?.closest(this.rootElementSelector)), this._dragRef.withRootElement(De || z);
      }
      _getBoundaryElement() {
        const z = this.boundaryElement;
        return z ? "string" == typeof z ? this.element.nativeElement.closest(z) : (0, We.fI)(z) : null;
      }
      _syncInputs(z) {
        z.beforeStarted.subscribe(() => {
          if (!z.isDragging()) {
            const De = this._dir,
              rt = this.dragStartDelay,
              Cn = this._placeholderTemplate ? {
                template: this._placeholderTemplate.templateRef,
                context: this._placeholderTemplate.data,
                viewContainer: this._viewContainerRef
              } : null,
              po = this._previewTemplate ? {
                template: this._previewTemplate.templateRef,
                context: this._previewTemplate.data,
                matchSize: this._previewTemplate.matchSize,
                viewContainer: this._viewContainerRef
              } : null;
            z.disabled = this.disabled, z.lockAxis = this.lockAxis, z.dragStartDelay = "object" == typeof rt && rt ? rt : (0, We.su)(rt), z.constrainPosition = this.constrainPosition, z.previewClass = this.previewClass, z.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(Cn).withPreviewTemplate(po).withPreviewContainer(this.previewContainer || "global"), De && z.withDirection(De.value);
          }
        }), z.beforeStarted.pipe((0, Ft.q)(1)).subscribe(() => {
          if (this._parentDrag) return void z.withParent(this._parentDrag._dragRef);
          let De = this.element.nativeElement.parentElement;
          for (; De;) {
            if (De.classList.contains("cdk-drag")) {
              z.withParent(xe._dragInstances.find(rt => rt.element.nativeElement === De)?._dragRef || null);
              break;
            }
            De = De.parentElement;
          }
        });
      }
      _handleEvents(z) {
        z.started.subscribe(De => {
          this.started.emit({
            source: this,
            event: De.event
          }), this._changeDetectorRef.markForCheck();
        }), z.released.subscribe(De => {
          this.released.emit({
            source: this,
            event: De.event
          });
        }), z.ended.subscribe(De => {
          this.ended.emit({
            source: this,
            distance: De.distance,
            dropPoint: De.dropPoint,
            event: De.event
          }), this._changeDetectorRef.markForCheck();
        }), z.entered.subscribe(De => {
          this.entered.emit({
            container: De.container.data,
            item: this,
            currentIndex: De.currentIndex
          });
        }), z.exited.subscribe(De => {
          this.exited.emit({
            container: De.container.data,
            item: this
          });
        }), z.dropped.subscribe(De => {
          this.dropped.emit({
            previousIndex: De.previousIndex,
            currentIndex: De.currentIndex,
            previousContainer: De.previousContainer.data,
            container: De.container.data,
            isPointerOverContainer: De.isPointerOverContainer,
            item: this,
            distance: De.distance,
            dropPoint: De.dropPoint,
            event: De.event
          });
        });
      }
      _assignDefaults(z) {
        const {
          lockAxis: De,
          dragStartDelay: rt,
          constrainPosition: Cn,
          previewClass: po,
          boundaryElement: dr,
          draggingDisabled: Rs,
          rootElementSelector: Aa,
          previewContainer: ml
        } = z;
        this.disabled = Rs ?? !1, this.dragStartDelay = rt || 0, De && (this.lockAxis = De), Cn && (this.constrainPosition = Cn), po && (this.previewClass = po), dr && (this.boundaryElement = dr), Aa && (this.rootElementSelector = Aa), ml && (this.previewContainer = ml);
      }
      _setupHandlesListener() {
        this._handles.changes.pipe((0, te.O)(this._handles), (0, Et.b)(z => {
          const De = z.filter(rt => rt._parentDrag === this).map(rt => rt.element);
          this._selfHandle && this.rootElementSelector && De.push(this.element), this._dragRef.withHandles(De);
        }), (0, Ue.w)(z => (0, ut.T)(...z.map(De => De._stateChanges.pipe((0, te.O)(De))))), (0, W.R)(this._destroyed)).subscribe(z => {
          const De = this._dragRef,
            rt = z.element.nativeElement;
          z.disabled ? De.disableHandle(rt) : De.enableHandle(rt);
        });
      }
    }
    return xe._dragInstances = [], xe.ɵfac = function (z) {
      return new (z || xe)(t.Y36(t.SBq), t.Y36(Fi, 12), t.Y36(b.K0), t.Y36(t.R0b), t.Y36(t.s_b), t.Y36(ji, 8), t.Y36(Me.Is, 8), t.Y36(Ci), t.Y36(t.sBO), t.Y36(ki, 10), t.Y36(lo, 12));
    }, xe.ɵdir = t.lG2({
      type: xe,
      selectors: [["", "cdkDrag", ""]],
      contentQueries: function (z, De, rt) {
        if (1 & z && (t.Suo(rt, Ji, 5), t.Suo(rt, Wt, 5), t.Suo(rt, ki, 5)), 2 & z) {
          let Cn;
          t.iGM(Cn = t.CRH()) && (De._previewTemplate = Cn.first), t.iGM(Cn = t.CRH()) && (De._placeholderTemplate = Cn.first), t.iGM(Cn = t.CRH()) && (De._handles = Cn);
        }
      },
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function (z, De) {
        2 & z && t.ekj("cdk-drag-disabled", De.disabled)("cdk-drag-dragging", De._dragRef.isDragging());
      },
      inputs: {
        data: ["cdkDragData", "data"],
        lockAxis: ["cdkDragLockAxis", "lockAxis"],
        rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
        boundaryElement: ["cdkDragBoundary", "boundaryElement"],
        dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
        freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
        disabled: ["cdkDragDisabled", "disabled"],
        constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
        previewClass: ["cdkDragPreviewClass", "previewClass"],
        previewContainer: ["cdkDragPreviewContainer", "previewContainer"]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      standalone: !0,
      features: [t._Bn([{
        provide: lo,
        useExisting: xe
      }]), t.TTD]
    }), xe;
  })();
  var oi = i(97582),
    yo = i(52306);
  function Qi(xe) {
    return xe.filter(et => !!et.formGroupField).map(et => et.formGroupField);
  }
  function Qo(xe) {
    return Qi(Object.keys(xe).map(et => xe[et].widgets).reduce((et, z) => [...et, ...z], []));
  }
  const Kr = function (xe) {
    return {
      widget: xe
    };
  };
  function _s(xe, et) {
    if (1 & xe && t.GkF(0, 14), 2 & xe) {
      const z = t.oxw(4).$implicit,
        De = t.oxw(2);
      t.Q6J("ngTemplateOutlet", De.labelTemplate)("ngTemplateOutletContext", t.VKq(2, Kr, z));
    }
  }
  function ra(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 15), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw(4).$implicit,
        De = t.oxw(2);
      t.xp6(1), t.hij(" ", De.getLabel(z), " ");
    }
  }
  function Or(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 10), t.YNc(2, _s, 1, 4, "ng-container", 11), t.YNc(3, ra, 2, 1, "ng-template", null, 12, t.W1O), t.qZA(), t._UZ(5, "dp-universal-control-widget", 13), t.BQk()), 2 & xe) {
      const z = t.MAs(4),
        De = t.oxw(3).$implicit,
        rt = t.oxw(2);
      t.xp6(2), t.Q6J("ngIf", rt.labelTemplate)("ngIfElse", z), t.xp6(3), t.Q6J("id", De.formGroupField.field)("widget", rt.toControl(De))("formControl", rt.getControlByField(rt.toControl(De)));
    }
  }
  function Fs(xe, et) {
    if (1 & xe && t.GkF(0, 14), 2 & xe) {
      const z = t.oxw(5).$implicit,
        De = t.oxw(2);
      t.Q6J("ngTemplateOutlet", De.labelTemplate)("ngTemplateOutletContext", t.VKq(2, Kr, z));
    }
  }
  function xa(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 15), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw(5).$implicit,
        De = t.oxw(2);
      t.xp6(1), t.hij(" ", De.getLabel(z), " ");
    }
  }
  function rs(xe, et) {
    if (1 & xe && (t.YNc(0, Fs, 1, 4, "ng-container", 11), t.YNc(1, xa, 2, 1, "ng-template", null, 12, t.W1O)), 2 & xe) {
      const z = t.MAs(2),
        De = t.oxw(6);
      t.Q6J("ngIf", De.labelTemplate)("ngIfElse", z);
    }
  }
  function Js(xe, et) {
    if (1 & xe && (t.TgZ(0, "label", 16), t.YNc(1, rs, 3, 2, "ng-template", null, 17, t.W1O), t._UZ(3, "dp-universal-control-widget", 13), t.qZA()), 2 & xe) {
      const z = t.MAs(2),
        De = t.oxw(3).$implicit,
        rt = t.oxw(2);
      t.Q6J("lu-label", z), t.xp6(3), t.Q6J("id", De.formGroupField.field)("widget", rt.toControl(De))("formControl", rt.getControlByField(rt.toControl(De)));
    }
  }
  function ho(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Or, 6, 5, "ng-container", 7), t.YNc(2, Js, 4, 4, "ng-template", null, 9, t.W1O), t.BQk()), 2 & xe) {
      const z = t.MAs(3),
        De = t.oxw(2).$implicit,
        rt = t.oxw(2);
      t.xp6(1), t.Q6J("ngIf", rt.isWidgetWithTitle(De))("ngIfElse", z);
    }
  }
  function uo(xe, et) {
    if (1 & xe && t._UZ(0, "dp-universal-control-widget", 13), 2 & xe) {
      const z = t.oxw(2).$implicit,
        De = t.oxw(2);
      t.Q6J("id", z.formGroupField.field)("widget", De.toControl(z))("formControl", De.getControlByField(De.toControl(z)));
    }
  }
  function ri(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, ho, 4, 2, "ng-container", 7), t.YNc(2, uo, 1, 3, "ng-template", null, 8, t.W1O), t.BQk()), 2 & xe) {
      const z = t.MAs(3),
        De = t.oxw().$implicit,
        rt = t.oxw(2);
      t.xp6(1), t.Q6J("ngIf", rt.hasLabel(De))("ngIfElse", z);
    }
  }
  function Yt(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-widget", 18), t.NdJ("runEvent", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().$implicit,
          po = t.oxw(2);
        return t.KtG(po.onRunAction(Cn.event, rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw(2);
      t.Q6J("widget", De.toEvent(z));
    }
  }
  function jt(xe, et) {
    if (1 & xe && t._UZ(0, "dp-universal-static-widget", 19), 2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw(2);
      t.Q6J("widget", De.toStatic(z))("renderContext", De.renderContextForStaticWidget);
    }
  }
  function hn(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 3), t.YNc(2, ri, 4, 2, "ng-container", 4), t.YNc(3, Yt, 1, 1, "dp-universal-widget", 5), t.YNc(4, jt, 1, 2, "dp-universal-static-widget", 6), t.qZA(), t.BQk()), 2 & xe) {
      const z = et.$implicit,
        De = t.oxw(2);
      t.xp6(1), t.Q6J("ngStyle", De.itemStyle), t.xp6(1), t.Q6J("ngIf", De.isControl(z)), t.xp6(1), t.Q6J("ngIf", De.isEvent(z)), t.xp6(1), t.Q6J("ngIf", De.isStatic(z));
    }
  }
  function tn(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 1), t.YNc(1, hn, 5, 4, "ng-container", 2), t.qZA()), 2 & xe) {
      const z = t.oxw();
      t.Q6J("ngClass", z.viewData.direction), t.xp6(1), t.Q6J("ngForOf", z.viewData.widgets)("ngForTrackBy", z.identify);
    }
  }
  let di = class {
    constructor() {
      this.showLabels = !1, this.labelTemplate = null, this.runAction = new t.vpe();
    }
    hasLabel(et) {
      return !!this.labelTemplate || !!this.getLabel(et);
    }
    get formIsReady() {
      return !!this.formGroupBuilder;
    }
    getControlByField(et) {
      return this.formGroupBuilder.getControlByField(et.formGroupField.field, et.formGroupField.type);
    }
    identify(et, z) {
      const De = z?.data,
        rt = De?.widgetTotals ? JSON.stringify(De.widgetTotals) : "";
      return `${et}-${z.type}-${rt}-${De?.postfixText ?? ""}`;
    }
    isControl(et) {
      return void 0 !== et.formGroupField;
    }
    isWidgetWithTitle(et) {
      return ["input.checkbox-group", "input.radio"].includes(et.type);
    }
    isEvent(et) {
      return void 0 !== et.event;
    }
    isStatic(et) {
      return !this.isEvent(et) && !this.isControl(et);
    }
    getLabel(et) {
      return this.showLabels && this.toControl(et).label || "";
    }
    toControl(et) {
      return et;
    }
    toEvent(et) {
      return et;
    }
    toStatic(et) {
      return et;
    }
    onRunAction(et, z) {
      this.runAction.emit({
        actionName: et,
        event: z
      });
    }
    get itemStyle() {
      return "vertical" === this.viewData.direction ? {
        marginBottom: `${this.viewData.basePadding}px`
      } : "horizontal" === this.viewData.direction ? {
        marginRight: `${this.viewData.basePadding}px`
      } : null;
    }
    get renderContextForStaticWidget() {
      return {
        renderOrientation: this.viewData.direction
      };
    }
  };
  di.ɵfac = function (et) {
    return new (et || di)();
  }, di.ɵcmp = t.Xpm({
    type: di,
    selectors: [["dp-universal-list-widget-container"]],
    inputs: {
      viewData: "viewData",
      formGroupBuilder: "formGroupBuilder",
      showLabels: "showLabels",
      labelTemplate: "labelTemplate"
    },
    outputs: {
      runAction: "runAction"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "widget-container", 3, "ngClass", 4, "ngIf"], [1, "widget-container", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "widget-container-item", 3, "ngStyle"], [4, "ngIf"], [3, "widget", "runEvent", 4, "ngIf"], [3, "widget", "renderContext", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noLabelControl", ""], ["controlWithLabel", ""], [1, "title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["defaultLabel", ""], [3, "id", "widget", "formControl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["lu-text", ""], [3, "lu-label"], ["label", ""], [3, "widget", "runEvent"], [3, "widget", "renderContext"]],
    template: function (et, z) {
      1 & et && t.YNc(0, tn, 2, 3, "div", 0), 2 & et && t.Q6J("ngIf", z.formIsReady);
    },
    dependencies: [b.mk, b.sg, b.O5, b.tP, b.PC, A.JJ, A.oH, N.z, I.NZ, y.ol, y.NP, y.T$],
    styles: [".widget-container[_ngcontent-%COMP%]{display:flex}.widget-container.vertical[_ngcontent-%COMP%]{flex-direction:column}.widget-container.horizontal[_ngcontent-%COMP%]{flex-direction:row;align-items:center}  .lu-content{align-items:stretch!important}.title[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter);cursor:default}"],
    changeDetection: 0
  });
  let Gn = class {};
  function dn(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "button", 7), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearAll());
      }), t._uU(1, "Очистить все"), t.qZA();
    }
  }
  function wo(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "button", 8), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onToDefault());
      }), t._uU(1, "По умолчанию"), t.qZA();
    }
  }
  Gn.ɵfac = function (et) {
    return new (et || Gn)();
  }, Gn.ɵmod = t.oAB({
    type: Gn
  }), Gn.ɵinj = t.cJS({
    imports: [b.ez, A.UX, N.Y, I.aI, y.SZ, y.zA, y.Pe]
  });
  const Ro = function (xe) {
    return {
      "footer-border": xe
    };
  };
  function _r(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 9)(1, "button", 10), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onApply());
      }), t._uU(2, "Применить"), t.qZA()();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("ngClass", t.VKq(1, Ro, z.filterHasValue() && z.options.displayBorder));
    }
  }
  const qr = ["*"];
  let Ts = (() => {
      class xe {
        constructor() {
          this.options = {
            title: "",
            displayBorder: !1
          }, this.bgColor = "#F2F2F2", this.clearAll = new t.vpe(), this.toDefaultFilter = new t.vpe(), this.applyFilter = new t.vpe();
        }
        get background() {
          return this.bgColor;
        }
        onApply() {
          this.applyFilter.emit();
        }
        onClearAll() {
          this.clearAll.emit();
        }
        onToDefault() {
          this.toDefaultFilter.emit(this.defaultPreset);
        }
        filterHasValue() {
          return "pristine" !== this.filterStatus;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-vertical-filter-panel"]],
        hostVars: 2,
        hostBindings: function (z, De) {
          2 & z && t.Udp("background", De.background);
        },
        inputs: {
          options: "options",
          bgColor: "bgColor",
          defaultPreset: "defaultPreset",
          filterStatus: "filterStatus"
        },
        outputs: {
          clearAll: "clearAll",
          toDefaultFilter: "toDefaultFilter",
          applyFilter: "applyFilter"
        },
        ngContentSelectors: qr,
        decls: 10,
        vars: 4,
        consts: [[1, "head"], ["lu-text", "", "id", "vfpTitle", 1, "title"], ["id", "clearAllBtn", "lu-button-link-dashed", "", 3, "click", 4, "ngIf"], ["id", "toDefaultBtn", "lu-button-link-dashed", "", 3, "click", 4, "ngIf"], [1, "body"], ["dpFilterPanelContent", "", 1, "body-content"], ["class", "footer", 3, "ngClass", 4, "ngIf"], ["id", "clearAllBtn", "lu-button-link-dashed", "", 3, "click"], ["id", "toDefaultBtn", "lu-button-link-dashed", "", 3, "click"], [1, "footer", 3, "ngClass"], ["id", "applyBtn", "lu-button-raised", "", 3, "click"]],
        template: function (z, De) {
          1 & z && (t.F$t(), t.TgZ(0, "div", 0)(1, "h4", 1), t._uU(2), t.qZA(), t.YNc(3, dn, 2, 0, "button", 2), t.YNc(4, wo, 2, 0, "button", 3), t.qZA(), t.TgZ(5, "div", 4)(6, "dp-scroll-container")(7, "div", 5), t.Hsn(8), t.qZA()()(), t.YNc(9, _r, 3, 3, "div", 6)), 2 & z && (t.xp6(2), t.Oqu(De.options.title), t.xp6(1), t.Q6J("ngIf", De.filterHasValue()), t.xp6(1), t.Q6J("ngIf", De.defaultPreset), t.xp6(5), t.Q6J("ngIf", De.filterHasValue()));
        },
        dependencies: [b.mk, b.O5, O.mc, I.NZ, j.wE],
        styles: ["[_nghost-%COMP%]{position:relative;height:100%;display:flex;flex-direction:column;box-shadow:1px 0 0 0 var(--lu-black-15) inset}.title[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter) 0 0}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding:calc(var(--lu-base-gutter) * 3)}.body[_ngcontent-%COMP%]{flex-grow:2;overflow:hidden;display:flex;padding:0 0 0 calc(var(--lu-base-gutter) * 3)}.body-content[_ngcontent-%COMP%]{padding-right:16px}.footer[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}.footer-border[_ngcontent-%COMP%]{border-top:1px solid var(--lu-black-15)}"],
        changeDetection: 0
      }), xe;
    })(),
    js = (() => {
      class xe {
        transform(z) {
          return {
            status: "SUCCESS",
            basePadding: z.settings?.basePadding ?? 8,
            direction: z.settings?.direction ?? "vertical",
            widgets: z.widgets
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "filtersWithSubmitViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    ws = (() => {
      class xe {
        transform(z) {
          const De = (z.settings?.widgetsToBtn ?? []).map(rt => rt.code);
          return z.widgets.filter(rt => "formGroupField" in rt && De.includes(rt.formGroupField.field));
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "filtersWithSubmitGetWidgetsForBtn",
        type: xe,
        pure: !0
      }), xe;
    })();
  function Us(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 3), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.ALo(1, "filtersWithSubmitViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", t.lcZ(1, 3, z.data))("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  let Ws = (() => {
      class xe {
        constructor() {
          this.widgetsValueChanges = new t.vpe(), this.runAction = new t.vpe(), this.destroy$ = new d.x();
        }
        get panelOptions() {
          return {
            title: this.data.settings?.panelTitle ?? "Фильтр",
            displayBorder: this.data.settings?.displayBorder ?? !1
          };
        }
        ngOnInit() {
          this.formGroupBuilder = new e.OZ(Qi(this.data.widgets));
        }
        ngOnChanges() {
          this.formGroupBuilder && this.formGroupBuilder.updateControlsStatus(Qi(this.data.widgets));
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete(), this.formGroupBuilder?.destroy();
        }
        onRunAction(z) {
          this.runAction.emit(z);
        }
        getFilterStatus() {
          return this.formGroupBuilder?.dirtyFilterValue ? "dirty" : Qi(this.data.widgets).some(z => !(0, m.Xy)(z.value, z.initialValue)) ? "changed" : "pristine";
        }
        submitChanges() {
          this.widgetsValueChanges.emit({
            ...this.formGroupBuilder?.getValue()
          });
        }
        resetAndSubmit() {
          this.formGroupBuilder?.resetFilterToInitial(), this.submitChanges();
        }
        applyWidgetAndSubmit(z) {
          z && this.formGroupBuilder && "formGroupField" in z && (this.formGroupBuilder.getControlByField(z.formGroupField.field, z.formGroupField.type).setValue(!0), this.submitChanges());
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-filters-with-submit"]],
        inputs: {
          data: "data"
        },
        outputs: {
          widgetsValueChanges: "widgetsValueChanges",
          runAction: "runAction"
        },
        features: [t.TTD],
        decls: 4,
        vars: 8,
        consts: [[1, "filters-with-submit"], [3, "options", "defaultPreset", "filterStatus", "applyFilter", "clearAll", "toDefaultFilter"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          1 & z && (t.TgZ(0, "div", 0)(1, "dp-universal-list-vertical-filter-panel", 1), t.NdJ("applyFilter", function () {
            return De.submitChanges();
          })("clearAll", function () {
            return De.resetAndSubmit();
          })("toDefaultFilter", function (Cn) {
            return De.applyWidgetAndSubmit(Cn);
          }), t.ALo(2, "filtersWithSubmitGetWidgetsForBtn"), t.YNc(3, Us, 2, 5, "dp-universal-list-widget-container", 2), t.qZA()()), 2 & z && (t.Udp("width", null == De.data.settings ? null : De.data.settings.size), t.xp6(1), t.Q6J("options", De.panelOptions)("defaultPreset", t.lcZ(2, 6, De.data)[0])("filterStatus", De.getFilterStatus()), t.xp6(2), t.Q6J("ngIf", De.formGroupBuilder));
        },
        dependencies: [b.O5, di, Ts, js, ws],
        styles: ["[_nghost-%COMP%]{display:block;height:100%}.filters-with-submit[_ngcontent-%COMP%]{height:100%}"],
        changeDetection: 0
      }), xe;
    })(),
    sa = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, O.W1, I.aI, j.Nl]
      }), xe;
    })(),
    ha = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, Gn, sa]
      }), xe;
    })();
  function ua(xe) {
    return xe.reduce((et, z) => [...et, ...("widgets" in z ? z.widgets : [z])], []).filter(et => !!et.formGroupField).map(et => et.formGroupField);
  }
  function da(xe, et) {
    1 & xe && t.GkF(0);
  }
  const na = function (xe, et) {
    return {
      $implicit: xe,
      isFirst: et
    };
  };
  function Qs(xe, et) {
    if (1 & xe && (t.TgZ(0, "div"), t.YNc(1, da, 1, 0, "ng-container", 5), t.qZA()), 2 & xe) {
      const z = et.$implicit,
        De = et.first;
      t.oxw(3);
      const rt = t.MAs(2);
      t.xp6(1), t.Q6J("ngTemplateOutlet", rt)("ngTemplateOutletContext", t.WLB(2, na, z, De));
    }
  }
  function ma(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 4), t.YNc(2, Qs, 2, 5, "div", 3), t.qZA(), t.BQk()), 2 & xe) {
      const z = et.$implicit,
        De = t.oxw(2);
      t.xp6(1), t.Q6J("ngStyle", De.getContainerStyle(z)), t.xp6(1), t.Q6J("ngForOf", z.widgets)("ngForTrackBy", De.identify);
    }
  }
  function Xs(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 2), t.YNc(1, ma, 3, 3, "ng-container", 3), t.qZA()), 2 & xe) {
      const z = t.oxw();
      t.Q6J("ngClass", z.viewData.direction), t.xp6(1), t.Q6J("ngForOf", z.viewData.widgets)("ngForTrackBy", z.trackByIndex);
    }
  }
  const Ks = function (xe) {
    return {
      widget: xe
    };
  };
  function Va(xe, et) {
    if (1 & xe && t.GkF(0, 17), 2 & xe) {
      const z = t.oxw(4).$implicit,
        De = t.oxw();
      t.Q6J("ngTemplateOutlet", De.labelTemplate)("ngTemplateOutletContext", t.VKq(2, Ks, z));
    }
  }
  function ba(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 18), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw(4).$implicit,
        De = t.oxw();
      t.xp6(1), t.hij(" ", De.getLabel(z), " ");
    }
  }
  function qs(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 13), t.YNc(2, Va, 1, 4, "ng-container", 14), t.YNc(3, ba, 2, 1, "ng-template", null, 15, t.W1O), t.qZA(), t._UZ(5, "dp-universal-control-widget", 16), t.BQk()), 2 & xe) {
      const z = t.MAs(4),
        De = t.oxw(3).$implicit,
        rt = t.oxw();
      t.xp6(2), t.Q6J("ngIf", rt.labelTemplate)("ngIfElse", z), t.xp6(3), t.Q6J("id", De.formGroupField.field)("widget", rt.toControl(De))("formControl", rt.getControlByField(rt.toControl(De)));
    }
  }
  function Ri(xe, et) {
    if (1 & xe && t.GkF(0, 17), 2 & xe) {
      const z = t.oxw(5).$implicit,
        De = t.oxw();
      t.Q6J("ngTemplateOutlet", De.labelTemplate)("ngTemplateOutletContext", t.VKq(2, Ks, z));
    }
  }
  const $o = function (xe) {
    return {
      nowrap: xe
    };
  };
  function ci(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 21), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw(5).$implicit,
        De = t.oxw();
      t.Q6J("ngClass", t.VKq(2, $o, "horizontal" === De.labelOrientation)), t.xp6(1), t.hij(" ", De.getLabel(z), " ");
    }
  }
  function Gi(xe, et) {
    if (1 & xe && (t.YNc(0, Ri, 1, 4, "ng-container", 14), t.YNc(1, ci, 2, 4, "ng-template", null, 15, t.W1O)), 2 & xe) {
      const z = t.MAs(2),
        De = t.oxw(5);
      t.Q6J("ngIf", De.labelTemplate)("ngIfElse", z);
    }
  }
  function Fn(xe, et) {
    if (1 & xe && (t.TgZ(0, "label", 19), t.YNc(1, Gi, 3, 2, "ng-template", null, 20, t.W1O), t._UZ(3, "dp-universal-control-widget", 16), t.qZA()), 2 & xe) {
      const z = t.MAs(2),
        De = t.oxw(3).$implicit,
        rt = t.oxw();
      t.Q6J("lu-label", z)("orientation", rt.labelOrientation), t.xp6(3), t.Q6J("id", De.formGroupField.field)("widget", rt.toControl(De))("formControl", rt.getControlByField(rt.toControl(De)));
    }
  }
  function zi(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, qs, 6, 5, "ng-container", 10), t.YNc(2, Fn, 4, 5, "ng-template", null, 12, t.W1O), t.BQk()), 2 & xe) {
      const z = t.MAs(3),
        De = t.oxw(2).$implicit,
        rt = t.oxw();
      t.xp6(1), t.Q6J("ngIf", rt.isWidgetWithTitle(De))("ngIfElse", z);
    }
  }
  function Io(xe, et) {
    if (1 & xe && t._UZ(0, "dp-universal-control-widget", 16), 2 & xe) {
      const z = t.oxw(2).$implicit,
        De = t.oxw();
      t.Q6J("id", z.formGroupField.field)("widget", De.toControl(z))("formControl", De.getControlByField(De.toControl(z)));
    }
  }
  function gi(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, zi, 4, 2, "ng-container", 10), t.YNc(2, Io, 1, 3, "ng-template", null, 11, t.W1O), t.BQk()), 2 & xe) {
      const z = t.MAs(3),
        De = t.oxw().$implicit,
        rt = t.oxw();
      t.xp6(1), t.Q6J("ngIf", rt.hasLabel(De))("ngIfElse", z);
    }
  }
  function Kt(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-widget", 22), t.NdJ("runEvent", function () {
        t.CHM(z);
        const rt = t.oxw().$implicit,
          Cn = t.oxw();
        return t.KtG(Cn.onRunAction(Cn.transformWidgetToEventAction(rt)));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw();
      t.Q6J("widget", De.toEvent(z));
    }
  }
  function Vt(xe, et) {
    if (1 & xe && t._UZ(0, "dp-universal-static-widget", 23), 2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw();
      t.Q6J("widget", De.toStatic(z))("renderContext", De.renderContextForStaticWidget);
    }
  }
  const Pn = function (xe) {
    return {
      "widget-container-item--row-label": xe
    };
  };
  function pi(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 6), t.YNc(1, gi, 4, 2, "ng-container", 7), t.YNc(2, Kt, 1, 1, "dp-universal-widget", 8), t.YNc(3, Vt, 1, 2, "dp-universal-static-widget", 9), t.qZA()), 2 & xe) {
      const z = et.$implicit,
        De = et.isFirst,
        rt = t.oxw();
      t.Q6J("ngClass", t.VKq(5, Pn, rt.hasTitleLabel(z)))("ngStyle", rt.getItemStyle(De)), t.xp6(1), t.Q6J("ngIf", rt.isControl(z) && !rt.toControl(z).isHidden), t.xp6(1), t.Q6J("ngIf", rt.isEvent(z) && !rt.toEvent(z).isHidden), t.xp6(1), t.Q6J("ngIf", rt.isStatic(z) && !rt.toStatic(z).isHidden);
    }
  }
  let xo = (() => {
      class xe {
        constructor() {
          this.showLabels = !1, this.labelTemplate = null, this.labelOrientation = "vertical", this.widgetsWithoutLabels = [], this.runAction = new t.vpe();
        }
        getContainerStyle(z) {
          return z.style;
        }
        hasLabel(z) {
          return !(this.widgetsWithoutLabels?.includes(z.formGroupField.field) || !this.labelTemplate && !this.getLabel(z));
        }
        hasTitleLabel(z) {
          return this.hasLabel(z) && "horizontal" === this.labelOrientation;
        }
        get formIsReady() {
          return !!this.formGroupBuilder;
        }
        getControlByField(z) {
          return this.formGroupBuilder.getControlByField(z.formGroupField.field, z.formGroupField.type);
        }
        identify(z, De) {
          const rt = De?.data,
            Cn = rt?.widgetTotals ? JSON.stringify(rt.widgetTotals) : "";
          return `${z}-${De.type}-${Cn}-${rt?.postfixText ?? ""}`;
        }
        trackByIndex(z) {
          return String(z);
        }
        isControl(z) {
          return void 0 !== z.formGroupField;
        }
        isWidgetWithTitle(z) {
          return ["input.checkbox-group", "input.radio"].includes(z.type);
        }
        isEvent(z) {
          return void 0 !== z.event;
        }
        isStatic(z) {
          return !this.isEvent(z) && !this.isControl(z);
        }
        getLabel(z) {
          return this.showLabels && this.toControl(z).label || "";
        }
        toControl(z) {
          return z;
        }
        toEvent(z) {
          return z;
        }
        toStatic(z) {
          return z;
        }
        onRunAction(z) {
          this.runAction.emit(z);
        }
        transformWidgetToEventAction(z) {
          return {
            actionName: z.event,
            event: z.dataForAction
          };
        }
        getItemStyle(z) {
          return z ? null : "vertical" === this.viewData.direction ? {
            marginTop: `${this.viewData.basePadding}px`
          } : "horizontal" === this.viewData.direction ? {
            marginLeft: `${this.viewData.basePadding}px`
          } : null;
        }
        get renderContextForStaticWidget() {
          return {
            renderOrientation: this.viewData.direction
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-widget-container"]],
        inputs: {
          viewData: "viewData",
          formGroupBuilder: "formGroupBuilder",
          showLabels: "showLabels",
          labelTemplate: "labelTemplate",
          labelOrientation: "labelOrientation",
          widgetsWithoutLabels: "widgetsWithoutLabels"
        },
        outputs: {
          runAction: "runAction"
        },
        decls: 3,
        vars: 1,
        consts: [["class", "widget-container", 3, "ngClass", 4, "ngIf"], ["widgetTmpl", ""], [1, "widget-container", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "widgets", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "widget-container-item", 3, "ngClass", "ngStyle"], [4, "ngIf"], [3, "widget", "runEvent", 4, "ngIf"], [3, "widget", "renderContext", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noLabelControl", ""], ["controlWithLabel", ""], [1, "title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["defaultLabel", ""], [3, "id", "widget", "formControl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["lu-text", ""], [3, "lu-label", "orientation"], ["label", ""], ["lu-text", "", 3, "ngClass"], [3, "widget", "runEvent"], [3, "widget", "renderContext"]],
        template: function (z, De) {
          1 & z && (t.YNc(0, Xs, 2, 3, "div", 0), t.YNc(1, pi, 4, 7, "ng-template", null, 1, t.W1O)), 2 & z && t.Q6J("ngIf", De.formIsReady);
        },
        dependencies: [b.mk, b.sg, b.O5, b.tP, b.PC, A.JJ, A.oH, N.z, I.NZ, y.ol, y.NP, y.T$],
        styles: [".widget-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.widget-container.vertical[_ngcontent-%COMP%]{flex-direction:column}.widget-container.horizontal[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.widget-container-item--row-label[_ngcontent-%COMP%]{display:flex;flex-direction:row}.widget-container-item--row-label[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{margin-bottom:0;padding-right:calc(var(--lu-base-gutter) * 2)}.widget-container-item--row-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{align-items:center}.widgets[_ngcontent-%COMP%]{display:flex}  .lu-content{align-items:stretch!important}.title[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter);cursor:default}label[_ngcontent-%COMP%]     .lu-label{padding-top:0!important}.nowrap[_ngcontent-%COMP%]{text-wrap:nowrap}"],
        changeDetection: 0
      }), xe;
    })(),
    No = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, A.UX, N.Y, I.aI, y.SZ, y.zA, y.Pe]
      }), xe;
    })(),
    Ko = (() => {
      class xe {
        transform(z) {
          return {
            status: "SUCCESS",
            basePadding: z.settings?.basePadding ?? 8,
            direction: z.settings?.direction ?? "horizontal",
            widgets: this.updateWidgets(z)
          };
        }
        updateWidgets(z) {
          return z.settings?.breakAfterWidget ? function Mi(xe, et) {
            if (et < 0) throw new Error("Split index must be greater than 0");
            if (et > xe.length) throw new Error(`Split index must be less than ${xe.length}`);
            return [xe.slice(0, et), xe.slice(et)];
          }(z.widgets, z.settings.breakAfterWidget).map(rt => ({
            widgets: rt,
            style: {
              alignItems: "center",
              justifyContent: "space-between"
            }
          })) : [{
            widgets: z.widgets,
            style: {
              alignItems: "center",
              justifyContent: "space-between"
            }
          }];
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "quickFiltersViewData",
        type: xe,
        pure: !0
      }), xe;
    })();
  function It(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 2), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.ALo(1, "quickFiltersViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", t.lcZ(1, 5, z.data))("formGroupBuilder", z.formGroupBuilder)("showLabels", z.showLabels())("labelOrientation", z.getLabelOrientation())("widgetsWithoutLabels", null == z.data.settings ? null : z.data.settings.widgetsWithoutLabels);
    }
  }
  let At = (() => {
      class xe {
        constructor() {
          this.widgetsValueChanges = new t.vpe(), this.groupingChanged = new t.vpe(), this.runAction = new t.vpe(), this.destroy$ = new d.x();
        }
        ngOnInit() {
          this.formGroupBuilder = new e.OZ(ua(this.data.widgets)), this.initValueChangesEvent(this.formGroupBuilder), this.initGroupByChangesEvent(this.formGroupBuilder);
        }
        ngOnChanges() {
          this.formGroupBuilder && this.formGroupBuilder.updateControlsStatus(ua(this.data.widgets));
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete(), this.formGroupBuilder?.destroy();
        }
        onRunAction(z) {
          this.runAction.emit(z);
        }
        showLabels() {
          return this.data.settings?.showLabels ?? !1;
        }
        getLabelOrientation() {
          return this.data.settings?.labelOrientation ? this.data.settings?.labelOrientation : "horizontal";
        }
        initValueChangesEvent(z) {
          z.filterValueChanges().pipe((0, W.R)(this.destroy$)).subscribe(De => {
            this.widgetsValueChanges.emit(De);
          });
        }
        initGroupByChangesEvent(z) {
          z.groupByValueChanges().pipe((0, W.R)(this.destroy$)).subscribe(De => {
            this.groupingChanged.emit(De);
          });
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-quick-filters"]],
        inputs: {
          data: "data"
        },
        outputs: {
          widgetsValueChanges: "widgetsValueChanges",
          groupingChanged: "groupingChanged",
          runAction: "runAction"
        },
        features: [t.TTD],
        decls: 2,
        vars: 1,
        consts: [[1, "quick-filters"], [3, "viewData", "formGroupBuilder", "showLabels", "labelOrientation", "widgetsWithoutLabels", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "showLabels", "labelOrientation", "widgetsWithoutLabels", "runAction"]],
        template: function (z, De) {
          1 & z && (t.TgZ(0, "div", 0), t.YNc(1, It, 2, 7, "dp-universal-list-widget-container", 1), t.qZA()), 2 & z && (t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder));
        },
        dependencies: [b.O5, xo, Ko],
        styles: ["[_nghost-%COMP%]{display:block;padding:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}.quick-filters[_ngcontent-%COMP%]{min-height:40px}"],
        changeDetection: 0
      }), xe;
    })(),
    _n = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, No]
      }), xe;
    })(),
    it = (() => {
      class xe {
        transform(z) {
          return {
            status: "SUCCESS",
            basePadding: z.settings?.basePadding ?? 8,
            direction: z.settings?.direction ?? "vertical",
            widgets: z.widgets
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "slidingFiltersWithSubmitViewData",
        type: xe,
        pure: !0
      }), xe;
    })();
  function _e(xe) {
    return "formGroupField" in xe && !(0, e.vZ)(xe.formGroupField.value, xe.formGroupField.initialValue);
  }
  let gt = (() => {
      class xe {
        transform(z) {
          return z.widgets.some(_e);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "slidingFiltersWithSubmitHasApplied",
        type: xe,
        pure: !0
      }), xe;
    })(),
    ni = (() => {
      class xe {
        transform(z) {
          return z.widgets.filter(_e).length;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "slidingFiltersWithSubmitHasAppliedTotal",
        type: xe,
        pure: !0
      }), xe;
    })(),
    So = (() => {
      class xe {
        transform(z) {
          return z.settings?.isOpen ?? !0;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "slidingFiltersIsOpenPipe",
        type: xe,
        pure: !0
      }), xe;
    })();
  function Er(xe, et) {
    if (1 & xe && (t._UZ(0, "dp-filter-icon-counter", 4), t.ALo(1, "slidingFiltersWithSubmitHasAppliedTotal")), 2 & xe) {
      const z = t.oxw();
      t.Q6J("selectedFiltersCount", t.lcZ(1, 1, z.data));
    }
  }
  function Br(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 7), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.ALo(1, "slidingFiltersWithSubmitViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", t.lcZ(1, 3, z.data))("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function vr(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-filter-panel", 5), t.NdJ("applyFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.submitChanges());
      })("resetFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.resetAndSubmit());
      }), t.ALo(1, "slidingFiltersWithSubmitHasApplied"), t.YNc(2, Br, 2, 5, "dp-universal-list-widget-container", 6), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      let De, rt, Cn;
      t.Q6J("hasSelectedParameters", null !== (De = null == z.formGroupBuilder ? null : z.formGroupBuilder.dirtyFilterValue) && void 0 !== De && De)("hasAppliedParameters", t.lcZ(1, 5, z.data))("applyDisabled", null === (rt = null == z.formGroupBuilder ? null : z.formGroupBuilder.invalidFilters) || void 0 === rt || rt)("displayBorder", null !== (Cn = null == z.data.settings ? null : z.data.settings.displayBorder) && void 0 !== Cn && Cn), t.xp6(2), t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  let zr = (() => {
      class xe {
        constructor() {
          this.widgetsValueChanges = new t.vpe(), this.runAction = new t.vpe(), this.destroy$ = new d.x();
        }
        ngOnInit() {
          this.formGroupBuilder = new e.OZ(Qi(this.data.widgets));
        }
        ngOnChanges() {
          this.formGroupBuilder && this.formGroupBuilder.updateControlsStatus(Qi(this.data.widgets));
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete(), this.formGroupBuilder?.destroy();
        }
        onRunAction(z) {
          this.runAction.emit(z);
        }
        submitChanges() {
          this.widgetsValueChanges.emit({
            ...this.formGroupBuilder?.getValue()
          });
        }
        resetAndSubmit() {
          this.formGroupBuilder?.resetFilterToInitial(), this.submitChanges();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-sliding-filters-with-submit"]],
        inputs: {
          data: "data"
        },
        outputs: {
          widgetsValueChanges: "widgetsValueChanges",
          runAction: "runAction"
        },
        features: [t.TTD],
        decls: 5,
        vars: 3,
        consts: [[1, "sliding-filters-with-submit"], [3, "isOpen"], ["dpLayoutPortal", "filters-tab-title"], ["dpLayoutPortal", "filters-tab-content"], [3, "selectedFiltersCount"], [3, "hasSelectedParameters", "hasAppliedParameters", "applyDisabled", "displayBorder", "applyFilter", "resetFilter"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          1 & z && (t.TgZ(0, "div", 0), t._UZ(1, "dp-filter-sidebar", 1), t.ALo(2, "slidingFiltersIsOpenPipe"), t.qZA(), t.YNc(3, Er, 2, 3, "ng-template", 2), t.YNc(4, vr, 3, 7, "ng-template", 3)), 2 & z && (t.xp6(1), t.Q6J("isOpen", t.lcZ(2, 1, De.data)));
        },
        dependencies: [b.O5, di, j.nD, j.eX, j.hO, j.S1, it, gt, ni, So],
        styles: ["[_nghost-%COMP%]{display:block;height:100%}.sliding-filters-with-submit[_ngcontent-%COMP%]{height:100%}.sliding-filters-with-submit[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%}"],
        changeDetection: 0
      }), xe;
    })(),
    ks = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, Gn, j.yS, j.EC, j.Ej, j.Pl]
      }), xe;
    })(),
    aa = (() => {
      class xe {
        transform(z) {
          return Object.keys(z).some(De => z[De].widgets.length > 0);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListExpansionPanelHasWidgets",
        type: xe,
        pure: !0
      }), xe;
    })();
  const Ka = "expansionPanel.";
  function ja(xe) {
    return xe.includes(Ka);
  }
  function ul(xe) {
    return Number(xe.replace(Ka, ""));
  }
  let Ln = (() => {
    class xe {
      transform(z) {
        return Object.keys(z).filter(De => z[De].widgets.length > 0).sort((De, rt) => ul(De) - ul(rt) > 0 ? 1 : -1).map(De => ({
          layoutName: De
        }));
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)();
    }, xe.ɵpipe = t.Yjl({
      name: "universalListExpansionPanelCols",
      type: xe,
      pure: !0
    }), xe;
  })();
  function en(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-list-widget-container", 4), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = et.$implicit,
        De = t.oxw(3);
      t.xp6(1), t.Q6J("viewData", De.viewData[z.layoutName])("formGroupBuilder", De.formGroupBuilder);
    }
  }
  function mi(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "lu-expansion-panel", 1)(2, "div", 2), t.YNc(3, en, 2, 2, "ng-container", 3), t.ALo(4, "universalListExpansionPanelCols"), t.qZA()(), t.BQk()), 2 & xe) {
      const z = t.oxw(2);
      t.xp6(3), t.Q6J("ngForOf", t.lcZ(4, 1, z.viewData));
    }
  }
  function ro(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, mi, 5, 3, "ng-container", 0), t.ALo(2, "universalListExpansionPanelHasWidgets"), t.BQk()), 2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngIf", t.lcZ(2, 1, z.viewData));
    }
  }
  let cr = (() => {
      class xe {
        constructor() {
          this.runAction = new t.vpe();
        }
        toggle() {
          this.panel && this.panel.toggle();
        }
        onRunAction(z) {
          this.runAction.emit(z);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-expansion-panel"]],
        viewQuery: function (z, De) {
          if (1 & z && t.Gf(Le.BN, 5), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.panel = rt.first);
          }
        },
        inputs: {
          viewData: "viewData",
          formGroupBuilder: "formGroupBuilder"
        },
        outputs: {
          runAction: "runAction"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "expansion-panel"], [1, "expansion-panel-content"], [4, "ngFor", "ngForOf"], [3, "viewData", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          1 & z && t.YNc(0, ro, 3, 3, "ng-container", 0), 2 & z && t.Q6J("ngIf", De.formGroupBuilder);
        },
        dependencies: [b.sg, b.O5, Le.BN, di, aa, Ln],
        styles: [".expansion-panel[_ngcontent-%COMP%]{min-height:0}.expansion-panel[_ngcontent-%COMP%]     .lu-expansion-panel-content{overflow:visible}.expansion-panel-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid var(--lu-black-10);padding:calc(var(--lu-base-gutter) * 3);margin-bottom:calc(var(--lu-base-gutter) * 3)}.expansion-panel-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) * 12)}"],
        changeDetection: 0
      }), xe;
    })(),
    jr = (() => {
      class xe {
        transform(z) {
          return Object.keys(z).filter(De => ja(De)).reduce((De, rt) => ({
            ...De,
            [rt]: z[rt]
          }), {});
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListExpansionPanelLayouts",
        type: xe,
        pure: !0
      }), xe;
    })(),
    as = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, Le.e_, Gn]
      }), xe;
    })();
  const Da = "tableColFilterPanel";
  let dl = (() => {
    class xe {
      transform(z) {
        return z.widget?.data?.btnSetting ? {
          icon: z.widget.data.btnSetting.leftIcon ?? z.widget.data.btnSetting.rightIcon ?? "advanced_search",
          size: z.widget.data.btnSetting.leftIconSize ?? z.widget.data.btnSetting.rightIconSize ?? 24,
          color: z.widget.data.btnSetting.leftIconColor ?? z.widget.data.btnSetting.rightIconColor,
          text: z.widget.data.btnSetting.text,
          isMark: z.isMark
        } : {
          icon: "advanced_search",
          size: 24,
          isMark: z.isMark
        };
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)();
    }, xe.ɵpipe = t.Yjl({
      name: "dropdownPanelInColAnchorButton",
      type: xe,
      pure: !0
    }), xe;
  })();
  const pn = ["dropdown"];
  function sn(xe, et) {
    1 & xe && t._UZ(0, "div", 11);
  }
  function Jt(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 12), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw().ngIf;
      t.xp6(1), t.Oqu(z.text);
    }
  }
  function Si(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 7), t._UZ(2, "lu-svg-icon", 8), t.YNc(3, sn, 1, 0, "div", 9), t.qZA(), t.YNc(4, Jt, 2, 1, "span", 10), t.BQk()), 2 & xe) {
      const z = et.ngIf;
      t.xp6(2), t.Q6J("icon", z.icon)("size", z.size), t.xp6(1), t.Q6J("ngIf", z.isMark), t.xp6(1), t.Q6J("ngIf", z.text);
    }
  }
  function mn(xe, et) {
    1 & xe && (t.TgZ(0, "div", 13), t.Hsn(1), t.qZA());
  }
  const Pe = ["*"];
  let at = (() => {
      class xe {
        ngOnChanges() {
          this.dropdownEl?.isOpened && this.dropdownEl?.close();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-dropdown-panel-in-col"]],
        viewQuery: function (z, De) {
          if (1 & z && t.Gf(pn, 5), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.dropdownEl = rt.first);
          }
        },
        inputs: {
          viewData: "viewData"
        },
        features: [t.TTD],
        ngContentSelectors: Pe,
        decls: 9,
        vars: 8,
        consts: [["luDropdownOrigin", "", 1, "dropdown-panel-toggle-control", 3, "click"], ["origin", "luDropdownOrigin"], [4, "ngIf"], ["icon", "chevron-down", "luButtonPostfix", "", 3, "size", "luChevronRotate"], ["positions", "bottom-right", "panelClass", "dropdown-panel-content", 3, "origin", "content", "withArrow"], ["dropdown", ""], ["content", ""], [1, "dropdown-panel-toggle-control-icon-container"], ["luButtonPrefix", "", 3, "icon", "size"], ["class", "dropdown-panel-toggle-control-marker", 4, "ngIf"], ["class", "dropdown-panel-toggle-control__text", 4, "ngIf"], [1, "dropdown-panel-toggle-control-marker"], [1, "dropdown-panel-toggle-control__text"], [1, "dropdown-content"]],
        template: function (z, De) {
          if (1 & z) {
            const rt = t.EpF();
            t.F$t(), t.TgZ(0, "div", 0, 1), t.NdJ("click", function () {
              t.CHM(rt);
              const po = t.MAs(6);
              return t.KtG(po.toggle());
            }), t.YNc(2, Si, 5, 4, "ng-container", 2), t.ALo(3, "dropdownPanelInColAnchorButton"), t._UZ(4, "lu-svg-icon", 3), t.qZA(), t.TgZ(5, "lu-dropdown", 4, 5), t.YNc(7, mn, 2, 0, "ng-template", null, 6, t.W1O), t.qZA();
          }
          if (2 & z) {
            const rt = t.MAs(1),
              Cn = t.MAs(6),
              po = t.MAs(8);
            t.xp6(2), t.Q6J("ngIf", t.lcZ(3, 6, De.viewData)), t.xp6(2), t.Q6J("size", 16)("luChevronRotate", Cn), t.xp6(1), t.Q6J("origin", rt)("content", po)("withArrow", !0);
          }
        },
        dependencies: [b.O5, L.q, C.$, J.c, O.nx, O.zY, v.n, dl],
        styles: ["[_nghost-%COMP%]{display:flex;align-items:flex-end;height:100%}  .dropdown-panel-content{--lu-overlay-border: var(--lu-black-5)}  .dropdown-panel-content .lu-overlay-pointer-content{box-shadow:0 15px 35px -14px var(--lu-black-40)}.dropdown-panel-toggle-control[_ngcontent-%COMP%]{--marker-size: 6px;display:flex;flex-direction:row;align-items:center;color:var(--lu-primary);font-weight:var(--lu-font-weight-bold);--lu-svg-icon-color: var(--lu-primary);cursor:pointer}.dropdown-panel-toggle-control[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child){margin-left:calc(var(--lu-base-gutter) * .5)}.dropdown-panel-toggle-control[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-right:calc(var(--lu-base-gutter) * .5)}.dropdown-panel-toggle-control__text[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) * .5)}.dropdown-panel-toggle-control-icon-container[_ngcontent-%COMP%]{position:relative;display:flex}.dropdown-panel-toggle-control-marker[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:var(--marker-size);height:var(--marker-size);border-radius:var(--marker-size);border:2px solid white;box-sizing:content-box;background-color:var(--lu-yellow-100)}.dropdown-content[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 48);height:calc(var(--lu-base-gutter) * 63.375)}"],
        changeDetection: 0
      }), xe;
    })(),
    Zt = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, A.UX, j.yS, j.Ep, Gn, sa, f.o, L.h, fe.V, C.J, J.p, O.W1, v.O]
      }), xe;
    })();
  const Li = function () {
    return ["filter"];
  };
  let mo = (() => {
      class xe {
        constructor() {
          this.changeFilter = new t.vpe(), this.clearFilter = new t.vpe(), this.runAction = new t.vpe();
        }
        onApply() {
          this.emitFormValue();
        }
        onReset() {
          this.clearFilter.emit();
        }
        onRunAction(z) {
          this.runAction.emit(z);
        }
        emitFormValue() {
          this.changeFilter.emit(this.formGroupBuilder?.getFormValueByTypes(["filter"]));
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-filter"]],
        inputs: {
          viewData: "viewData",
          formGroupBuilder: "formGroupBuilder"
        },
        outputs: {
          changeFilter: "changeFilter",
          clearFilter: "clearFilter",
          runAction: "runAction"
        },
        decls: 4,
        vars: 14,
        consts: [[3, "formGroup", "hasSelectedParameters", "hasAppliedParameters", "applyDisabled", "applyFilter", "resetFilter"], [3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          1 & z && (t.TgZ(0, "dp-filter-panel", 0), t.NdJ("applyFilter", function () {
            return De.onApply();
          })("resetFilter", function () {
            return De.onReset();
          }), t.ALo(1, "hasFilterParameters"), t.ALo(2, "hasFilterParameters"), t.TgZ(3, "dp-universal-list-widget-container", 1), t.NdJ("runAction", function (Cn) {
            return De.onRunAction(Cn);
          }), t.qZA()()), 2 & z && (t.Q6J("formGroup", De.formGroupBuilder.getFormGroupByType("filter"))("hasSelectedParameters", t.xi3(1, 7, De.formGroupBuilder.getFormValueByTypes(t.DdM(13, Li)), De.viewData.initialFilterParams))("hasAppliedParameters", t.xi3(2, 10, De.viewData.currentFilterParams, De.viewData.initialFilterParams))("applyDisabled", De.formGroupBuilder.getFormGroupByType("filter").invalid), t.xp6(3), t.Q6J("viewData", De.viewData.widgets)("showLabels", !0)("formGroupBuilder", De.formGroupBuilder));
        },
        dependencies: [A.JL, A.sg, j.nD, di, j.C3],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-shrink:0;width:100%;overflow:hidden}.numeric-range-control[_ngcontent-%COMP%]{display:flex;align-items:flex-end}.numeric-range-control__divider[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * 1.5) var(--lu-base-gutter)}.numeric-control-field[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 10)}"],
        changeDetection: 0
      }), xe;
    })(),
    Xo = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, A.UX, j.yS, j.Ep, Gn]
      }), xe;
    })();
  function Xr(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "div", 2)(2, "span", 3), t._uU(3), t.qZA(), t.TgZ(4, "span", 4), t._uU(5), t.qZA(), t.TgZ(6, "button", 5), t.NdJ("click", function () {
        const Cn = t.CHM(z).$implicit,
          po = t.oxw();
        return t.KtG(po.onClearFilter(Cn));
      }), t._UZ(7, "lu-svg-icon", 6), t.qZA()(), t.BQk();
    }
    if (2 & xe) {
      const z = et.$implicit,
        De = t.oxw();
      t.xp6(2), t.Q6J("color", "muted"), t.xp6(1), t.hij("", z.label, ":"), t.xp6(2), t.Oqu(De.getValue(z.value)), t.xp6(2), t.Q6J("size", 16);
    }
  }
  let ys = (() => {
      class xe {
        constructor() {
          this.updateFilter = new t.vpe();
        }
        onClearFilter(z) {
          this.updateFilter.emit({
            [z.formGroupField.field]: z.initialValue
          });
        }
        getValue(z) {
          return this.valueIsTerminology(z) ? this.convertTerminologyItemToValue(z) : this.valueIsTerminologyArray(z) ? this.convertTerminologyItemsArrayToValue(z) : this.valueIsDate(z) ? this.convertDateToValue(z) : this.valueIsDuration(z) ? this.convertDurationToValue(z) : this.valueIsPeriod(z) ? this.convertPeriodToValue(z) : String(z);
        }
        identify(z) {
          return String(z);
        }
        valueIsDate(z) {
          return (0, e.p$)(z);
        }
        valueIsTerminologyArray(z) {
          return Array.isArray(z) && z.every(De => this.valueIsTerminology(De));
        }
        valueIsTerminology(z) {
          return !!z?.display;
        }
        valueIsDuration(z) {
          return (0, e.YF)(String(z));
        }
        valueIsPeriod(z) {
          return !!z.start && !!z.end;
        }
        convertDurationToValue(z) {
          return function Cr(xe) {
            const et = xe.slice(-1),
              z = Number(xe.slice(0, -1));
            switch (et) {
              case "Y":
                return (0, m.gY)(z, ["год", "года", "лет"]);
              case "M":
                return (0, m.gY)(z, ["мес.", "мес.", "мес."]);
              case "D":
                return (0, m.gY)(z, ["день", "дня", "дней"]);
            }
            return "";
          }(z);
        }
        convertTerminologyItemToValue(z) {
          return z.display;
        }
        convertDateToValue(z) {
          return (0, ye.Z)(new Date(z), "dd.MM.yyyy");
        }
        convertTerminologyItemsArrayToValue(z) {
          return z.map(De => this.convertTerminologyItemToValue(De)).join(", ");
        }
        convertPeriodToValue(z) {
          return this.valueIsDate(z.start) && this.valueIsDate(z.end) ? `${this.convertDateToValue(z.start)} \u2013 ${this.convertDateToValue(z.end)}` : "";
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-filter-tags"]],
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          updateFilter: "updateFilter"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "filter-tags-container", "__tags"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-tag", "__tag"], ["lu-text", "", 1, "__text-title", 3, "color"], ["lu-text", "", 1, "__text"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "close-icon", 3, "size"]],
        template: function (z, De) {
          1 & z && (t.TgZ(0, "div", 0), t.YNc(1, Xr, 8, 4, "ng-container", 1), t.qZA()), 2 & z && (t.xp6(1), t.Q6J("ngForOf", De.viewData)("ngForTrackBy", De.identify));
        },
        dependencies: [b.sg, I.NZ, L.q, f.k],
        styles: [".filter-tags-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.filter-tag[_ngcontent-%COMP%]{background:var(--lu-yellow-60);border-radius:var(--lu-base-gutter);display:flex;align-items:center;height:calc(var(--lu-base-gutter) * 4)}.__tag[_ngcontent-%COMP%]{margin-top:var(--lu-base-gutter);margin-right:var(--lu-base-gutter)}.__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * .5)}.__text-title[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 1.5)}.close-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-100);opacity:.3}.close-icon[_ngcontent-%COMP%]:hover{opacity:.5}.__tags[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * -1) calc(var(--lu-base-gutter) * 1.5) 0}"],
        changeDetection: 0
      }), xe;
    })(),
    Hs = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, A.UX, I.aI, L.h, f.o, y.SZ, y.zA]
      }), xe;
    })();
  function la(xe, et, z) {
    return xe.map(De => {
      if (function St(xe, et, z) {
        return !et || !xe[et._techId] || "boolean" != typeof xe[et._techId][Wi(z)] || xe[et._techId] && xe[et._techId][Wi(z)];
      }(et, z, De)) return De.children?.length ? {
        ...De,
        children: la(De.children, et, z)
      } : De;
    }).filter(Boolean);
  }
  function Wi(xe) {
    return xe.action + xe.iconName + xe.title;
  }
  function Pt(xe) {
    const et = new Map();
    return xe.forEach(z => {
      et.set(z.id, {
        thTitleGroups: z.head.map(De => De.header.map(rt => ({
          key: rt.sortKey ?? "",
          name: rt.caption,
          nameType: "string" == typeof rt.headerType && "text" !== rt.headerType ? rt.headerType : "text",
          type: rt.sortKey ? "SORT" : "SIMPLE",
          tooltip: rt.tooltip || ""
        }))),
        thStyle: `${Nr(z.width)}${oa(z.head[0].alignContent)}`,
        tdStyle: `${Nr(z.width)}${oa(z.alignContent)}`
      });
    }), et;
  }
  function Ki(xe, et) {
    return Object.keys(et.widgets ?? {}).some(De => et.widgetsKeysInColFilterPanel.includes(De)) && xe.set("filterInCol", {
      thTitleGroups: [],
      thStyle: "",
      tdStyle: "",
      columnType: ["custom", "stickyEnd", "sticky"]
    }), xe;
  }
  function Nr(xe) {
    return "remaining" === xe.unit ? "flex-grow: 2;" : `width: ${xe.value}${xe.unit};`;
  }
  function oa(xe) {
    switch (xe) {
      case "right":
        return "display: flex; justify-content: flex-end;";
      case "center":
        return "display: flex; justify-content: center;";
      default:
        return "";
    }
  }
  function er(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-table-row-control-panel-button", 9), t.NdJ("click", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().$implicit;
        t.oxw();
        const po = t.MAs(1),
          dr = t.oxw(),
          Rs = t.MAs(2);
        return t.KtG(dr.onClick(rt, Cn, 0, po, Rs));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw(2);
      t.Q6J("luTooltip", De.getButtonTooltipText(z))("canOpen", De.getCanOpenButtonTooltip(z))("positions", "top-right")("iconName", z.iconName)("text", z.titleInTooltip ? "" : z.title)("type", De.getTypeButton(z));
    }
  }
  function Qr(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, er, 1, 6, "dp-table-row-control-panel-button", 8), t.BQk()), 2 & xe) {
      const z = et.$implicit,
        De = t.oxw(2);
      t.xp6(1), t.Q6J("ngIf", De.shouldShowMenuItem(z));
    }
  }
  function Il(xe, et) {
    if (1 & xe && (t.TgZ(0, "dp-table-row-control-panel", 5, 6), t.YNc(2, Qr, 2, 1, "ng-container", 7), t.qZA()), 2 & xe) {
      const z = t.oxw();
      t.xp6(2), t.Q6J("ngForOf", z.buttons)("ngForTrackBy", z.trackByAction);
    }
  }
  function Uc(xe, et) {
    1 & xe && t._UZ(0, "dp-context-menu-divider");
  }
  function Kl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-context-menu-item", 11), t.NdJ("data", function (rt) {
        const po = t.CHM(z).$implicit,
          dr = t.oxw(2);
        return t.KtG(dr.onClick(rt, po, 0));
      }), t.qZA(), t.YNc(2, Uc, 1, 0, "dp-context-menu-divider", 12), t.BQk();
    }
    if (2 & xe) {
      const z = et.$implicit;
      let De;
      t.xp6(1), t.Q6J("itemText", z.title || "")("iconName", z.iconName)("type", null !== (De = z.iconType) && void 0 !== De ? De : "default"), t.xp6(1), t.Q6J("ngIf", z.haveDivider);
    }
  }
  function Wl(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Kl, 3, 4, "ng-container", 10), t.BQk()), 2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngForOf", z.childButtons);
    }
  }
  function nc(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 18), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit;
      t.xp6(1), t.Oqu(z.subText);
    }
  }
  function Zc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 15), t.NdJ("click", function (rt) {
        const po = t.CHM(z).index,
          dr = t.oxw(3);
        return t.KtG(dr.onClick(rt, dr.selectedItemWithoutSubItems, po));
      }), t.TgZ(1, "h4", 16), t._uU(2), t.qZA(), t.YNc(3, nc, 2, 1, "span", 17), t.qZA();
    }
    if (2 & xe) {
      const z = et.$implicit,
        De = t.oxw(3);
      t.Q6J("ngClass", De.disabledItem(z.disabled)), t.xp6(2), t.Oqu(z.text), t.xp6(1), t.Q6J("ngIf", z.subText);
    }
  }
  function Yc(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 13), t.YNc(2, Zc, 4, 3, "div", 14), t.qZA(), t.BQk()), 2 & xe) {
      const z = t.oxw(2);
      t.xp6(2), t.Q6J("ngForOf", z.selectedContext);
    }
  }
  function nu(xe, et) {
    if (1 & xe && t.YNc(0, Yc, 3, 1, "ng-container", 12), 2 & xe) {
      const z = t.oxw();
      t.Q6J("ngIf", z.selectedContext.length > 1);
    }
  }
  let kl = (() => {
    class xe {
      constructor(z) {
        this.changeDetectorRef = z, this.visible = !1, this.buttons = [], this.data = new t.vpe(), this.childButtons = [], this.childContexts = {};
      }
      ngOnInit() {
        this.initChildContexts();
      }
      ngOnChanges(z) {
        z.buttons && !z.buttons.isFirstChange() && this.initChildContexts();
      }
      initChildContexts() {
        this.buttons.forEach(z => {
          this.childContexts[z.action] = z.subItemsMapper ? z.subItemsMapper(this.element) : [];
        });
      }
      get selectedContext() {
        return this.childContexts[this.selectedButton?.action] ?? [];
      }
      getTypeButton(z) {
        return z.iconType ?? "default";
      }
      get selectedItemWithoutSubItems() {
        return {
          ...this.selectedButton,
          subItemsMapper: void 0
        };
      }
      getCanOpenButtonTooltip(z) {
        return !!z.title && !!z.titleInTooltip || !!z.tooltip;
      }
      getButtonTooltipText(z) {
        return z.titleInTooltip ? z.title || "" : z.tooltip || "";
      }
      onClick(z, De, rt, Cn, po) {
        z?.stopPropagation(), Cn && po && this.hasChildren(De) ? (this.changeDetectorRef.markForCheck(), this.childButtons = De.children ?? [], this.selectedButton = De, po.open(Cn)) : this.selectedContext[rt]?.disabled || this.data.emit({
          item: De,
          index: rt
        });
      }
      hasChildren(z) {
        return z.children && z.children.length > 0 || this.childContexts[z.action].length > 1;
      }
      disabledItem(z) {
        return z ? "content--disabled" : "";
      }
      trackByAction(z, De) {
        return De.action;
      }
      shouldShowMenuItem(z) {
        return void 0 === z.children || this.hasChildren(z);
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)(t.Y36(t.sBO));
    }, xe.ɵcmp = t.Xpm({
      type: xe,
      selectors: [["dp-universal-toolbox"]],
      inputs: {
        visible: "visible",
        buttons: "buttons",
        element: "element",
        contextMenuMaxWidth: "contextMenuMaxWidth"
      },
      outputs: {
        data: "data"
      },
      features: [t.TTD],
      decls: 6,
      vars: 4,
      consts: [["luDropdownOrigin", "", 4, "ngIf"], [3, "contextMenuMaxWidth"], ["dropdownCmp", ""], [4, "ngIf", "ngIfElse"], ["content", ""], ["luDropdownOrigin", ""], ["origin", "luDropdownOrigin"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "luTooltip", "canOpen", "positions", "iconName", "text", "type", "click", 4, "ngIf"], [3, "luTooltip", "canOpen", "positions", "iconName", "text", "type", "click"], [4, "ngFor", "ngForOf"], [3, "itemText", "iconName", "type", "data"], [4, "ngIf"], [1, "container"], ["class", "content", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content", 3, "ngClass", "click"], ["lu-text", ""], ["lu-text", "", "color", "muted", "size", "normal", 4, "ngIf"], ["lu-text", "", "color", "muted", "size", "normal"]],
      template: function (z, De) {
        if (1 & z && (t.YNc(0, Il, 3, 2, "dp-table-row-control-panel", 0), t.TgZ(1, "dp-context-menu", 1, 2), t.YNc(3, Wl, 2, 1, "ng-container", 3), t.YNc(4, nu, 1, 1, "ng-template", null, 4, t.W1O), t.qZA()), 2 & z) {
          const rt = t.MAs(2),
            Cn = t.MAs(5);
          t.Q6J("ngIf", De.visible || (null == rt.dropdown ? null : rt.dropdown.isOpened)), t.xp6(1), t.Q6J("contextMenuMaxWidth", De.contextMenuMaxWidth), t.xp6(2), t.Q6J("ngIf", De.childButtons.length > 0)("ngIfElse", Cn);
        }
      },
      dependencies: [E.$, v.n, b.mk, b.sg, b.O5, j.GI, j.qX, j.uh, j.LC, j.Xx],
      styles: [".hidden[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:calc(var(--lu-base-gutter) * 1.125) 0 var(--lu-base-gutter)}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);cursor:pointer}.content--disabled[_ngcontent-%COMP%]{opacity:.4}.content[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}"],
      changeDetection: 0
    }), xe;
  })();
  const mu = ["dropdown"];
  function Wc(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 3), t.Hsn(1), t.qZA()), 2 & xe) {
      const z = t.oxw();
      t.Udp("max-width", z.contextMenuMaxWidth);
    }
  }
  const gc = function () {
      return ["bottom-left"];
    },
    ir = ["*"],
    Hr = "calc(var(--lu-base-gutter) * 33)";
  let Ar = (() => {
    class xe {
      constructor() {
        this.closeIfInnerClick = !0, this.afterClose = new t.vpe(), this.origin = {
          x: 0,
          y: 0
        }, this._contextMenuMaxWidth = Hr;
      }
      set contextMenuMaxWidth(z) {
        this._contextMenuMaxWidth = z || Hr;
      }
      get contextMenuMaxWidth() {
        return this._contextMenuMaxWidth;
      }
      open(z, De) {
        this.selectedRow = De, this.origin = z, setTimeout(() => this.dropdown.open(), 50);
      }
      handleAfterClose() {
        this.afterClose.emit();
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)();
    }, xe.ɵcmp = t.Xpm({
      type: xe,
      selectors: [["dp-universal-list-context-menu"]],
      viewQuery: function (z, De) {
        if (1 & z && t.Gf(mu, 7), 2 & z) {
          let rt;
          t.iGM(rt = t.CRH()) && (De.dropdown = rt.first);
        }
      },
      inputs: {
        closeIfInnerClick: "closeIfInnerClick",
        items: "items",
        contextMenuMaxWidth: "contextMenuMaxWidth"
      },
      outputs: {
        afterClose: "afterClose"
      },
      ngContentSelectors: ir,
      decls: 4,
      vars: 6,
      consts: [["panelClass", "context-menu", 3, "origin", "closeIfInnerClick", "notFocusClosestElement", "positions", "content", "afterClose"], ["dropdown", ""], ["content", ""], ["dpDataTestRole", "contextMenu", 1, "context-menu-items-container", "context-menu__dropdown"]],
      template: function (z, De) {
        if (1 & z && (t.F$t(), t.TgZ(0, "lu-dropdown", 0, 1), t.NdJ("afterClose", function () {
          return De.handleAfterClose();
        }), t.YNc(2, Wc, 2, 2, "ng-template", null, 2, t.W1O), t.qZA()), 2 & z) {
          const rt = t.MAs(3);
          t.Q6J("origin", De.origin)("closeIfInnerClick", De.closeIfInnerClick)("notFocusClosestElement", !0)("positions", t.DdM(5, gc))("content", rt);
        }
      },
      dependencies: [C.$, G.U],
      styles: [".context-menu .lu-overlay-content{border-color:transparent!important;border-radius:calc(var(--lu-base-gutter) / 2);box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f}.context-menu__dropdown[_ngcontent-%COMP%]{margin:var(--lu-base-gutter) 0}.context-menu-items-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],
      changeDetection: 0
    }), xe;
  })();
  function Ds(xe, et) {
    1 & xe && t._UZ(0, "lu-svg-icon", 5), 2 & xe && t.Q6J("size", 16);
  }
  const wa = function (xe) {
      return {
        "context-menu-item--danger": xe
      };
    },
    Ua = function (xe) {
      return {
        "context-menu-item-icon--danger": xe
      };
    },
    hl = function (xe) {
      return {
        "context-menu-item-text--danger": xe
      };
    };
  let va = (() => {
    class xe {
      constructor(z) {
        this.contextMenu = z, this.isShowArrowIcon = !1, this.type = "default", this.data = new t.vpe();
      }
      onItemClick(z) {
        this.contextMenu && (z.preventDefault(), this.data.emit(this.contextMenu.selectedRow));
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)(t.Y36(Ar, 8));
    }, xe.ɵcmp = t.Xpm({
      type: xe,
      selectors: [["dp-universal-list-context-menu-item"]],
      inputs: {
        itemText: "itemText",
        iconName: "iconName",
        isShowArrowIcon: "isShowArrowIcon",
        type: "type"
      },
      outputs: {
        data: "data"
      },
      decls: 6,
      vars: 13,
      consts: [[1, "context-menu-item", 3, "ngClass", "click"], [1, "context-menu-item-content"], [1, "context-menu-item-icon", 3, "ngClass", "icon", "size"], ["lu-text", "", 1, "context-menu-item__text", "context-menu-item-text", 3, "ngClass"], ["class", "context-menu-item-icon", "icon", "chevron-right", 3, "size", 4, "ngIf"], ["icon", "chevron-right", 1, "context-menu-item-icon", 3, "size"]],
      template: function (z, De) {
        1 & z && (t.TgZ(0, "div", 0), t.NdJ("click", function (Cn) {
          return De.onItemClick(Cn);
        }), t.TgZ(1, "div", 1), t._UZ(2, "lu-svg-icon", 2), t.TgZ(3, "div", 3), t._uU(4), t.qZA()(), t.YNc(5, Ds, 1, 1, "lu-svg-icon", 4), t.qZA()), 2 & z && (t.Q6J("ngClass", t.VKq(7, wa, "danger" === De.type)), t.xp6(2), t.Q6J("ngClass", t.VKq(9, Ua, "danger" === De.type))("icon", De.iconName)("size", 24), t.xp6(1), t.Q6J("ngClass", t.VKq(11, hl, "danger" === De.type)), t.xp6(1), t.hij(" ", De.itemText, " "), t.xp6(1), t.Q6J("ngIf", De.isShowArrowIcon));
      },
      dependencies: [b.mk, b.O5, L.q, I.NZ],
      styles: [".context-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 1.5);cursor:pointer}.context-menu-item[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}.context-menu-item--danger[_ngcontent-%COMP%]:hover{background-color:var(--lu-red-10)}.context-menu-item-content[_ngcontent-%COMP%]{display:flex}.context-menu-item__text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.context-menu-item-text[_ngcontent-%COMP%]{color:var(--lu-text-color)}.context-menu-item-text--danger[_ngcontent-%COMP%]{color:var(--lu-red-120)}.context-menu-item-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}.context-menu-item-icon--danger[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-120)}"],
      changeDetection: 0
    }), xe;
  })();
  function wc(xe, et) {
    if (1 & xe && (t.TgZ(0, "span", 11), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit;
      t.xp6(1), t.hij(" ", z.subText, " ");
    }
  }
  function zs(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 8), t.NdJ("click", function (rt) {
        const Cn = t.CHM(z),
          po = Cn.index,
          dr = Cn.$implicit,
          Rs = t.oxw(3);
        return t.KtG(Rs.onItemClick(rt, po, dr.disabled));
      }), t.TgZ(1, "h4", 9), t._uU(2), t.qZA(), t.YNc(3, wc, 2, 1, "span", 10), t.qZA();
    }
    if (2 & xe) {
      const z = et.$implicit,
        De = t.oxw(3);
      t.Q6J("ngClass", De.disabledItem(z.disabled)), t.xp6(2), t.Oqu(z.text), t.xp6(1), t.Q6J("ngIf", z.subText);
    }
  }
  function ic(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 6), t.YNc(1, zs, 4, 3, "div", 7), t.qZA()), 2 & xe) {
      const z = t.oxw(2);
      t.xp6(1), t.Q6J("ngForOf", z.dropdown)("ngForTrackBy", z.trackByIndex);
    }
  }
  function _c(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-context-menu-item", 1, 2), t.NdJ("click", function (rt) {
        t.CHM(z);
        const Cn = t.MAs(3),
          po = t.oxw();
        return t.KtG(po.onClick(rt, Cn));
      }), t.TgZ(2, "lu-dropdown", 3, 4), t.YNc(4, ic, 2, 2, "ng-template", null, 5, t.W1O), t.qZA()();
    }
    if (2 & xe) {
      const z = t.MAs(1),
        De = t.MAs(5),
        rt = t.oxw();
      t.Q6J("itemText", rt.itemText)("iconName", rt.iconName)("isShowArrowIcon", rt.dropdown.length > 1)("type", rt.type), t.xp6(2), t.Q6J("origin", z)("closeIfInnerClick", !0)("positions", "right-center")("borderOffset", -5)("content", De);
    }
  }
  let zc = (() => {
    class xe {
      constructor(z) {
        this.contextMenu = z, this.isShowArrowIcon = !1, this.type = "default", this.data = new t.vpe();
      }
      disabledItem(z) {
        return z ? "content--disabled" : "";
      }
      onClick(z, De) {
        this.dropdown.length > 1 ? this.openDropdown(z, De) : this.onItemClick(z, 0);
      }
      onItemClick(z, De, rt) {
        this.contextMenu?.selectedRow && !rt && (z.preventDefault(), this.closeContextMenu(), this.data.emit({
          item: this.contextMenu.selectedRow,
          index: De
        }));
      }
      openDropdown(z, De) {
        z.stopPropagation(), De.toggle();
      }
      closeContextMenu() {
        this.contextMenu.dropdown.close();
      }
      trackByIndex(z) {
        return `${z}`;
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)(t.Y36(Ar, 8));
    }, xe.ɵcmp = t.Xpm({
      type: xe,
      selectors: [["dp-universal-list-context-menu-item-with-dropdown"]],
      inputs: {
        itemText: "itemText",
        iconName: "iconName",
        isShowArrowIcon: "isShowArrowIcon",
        type: "type",
        dropdown: "dropdown"
      },
      outputs: {
        data: "data"
      },
      decls: 1,
      vars: 1,
      consts: [["dpDataTestRole", "contextMenuItem", "luDropdownOrigin", "", 3, "itemText", "iconName", "isShowArrowIcon", "type", "click", 4, "ngIf"], ["dpDataTestRole", "contextMenuItem", "luDropdownOrigin", "", 3, "itemText", "iconName", "isShowArrowIcon", "type", "click"], ["origin", "luDropdownOrigin"], [3, "origin", "closeIfInnerClick", "positions", "borderOffset", "content"], ["dropdownCmp", ""], ["content", ""], [1, "container"], ["class", "content", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "content", 3, "ngClass", "click"], ["lu-text", ""], ["lu-text", "", "color", "muted", "size", "normal", 4, "ngIf"], ["lu-text", "", "color", "muted", "size", "normal"]],
      template: function (z, De) {
        1 & z && t.YNc(0, _c, 6, 9, "dp-universal-list-context-menu-item", 0), 2 & z && t.Q6J("ngIf", De.dropdown);
      },
      dependencies: [b.mk, b.sg, b.O5, C.$, v.n, I.NZ, G.U, va],
      styles: ["lu-focus-control>.lu-overlay-content{box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f;border-radius:calc(var(--lu-base-gutter) / 2);border-color:transparent!important}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:calc(var(--lu-base-gutter) * 1.125) 0 var(--lu-base-gutter)}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);cursor:pointer}.content--disabled[_ngcontent-%COMP%]{opacity:.4}.content[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}"],
      changeDetection: 0
    }), xe;
  })();
  function vs(xe, et) {
    1 & xe && (t.TgZ(0, "span", 9), t._uU(1, "..."), t.qZA());
  }
  function La(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "span", 10), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw().$implicit,
          Cn = t.oxw();
        return t.KtG(Cn.onClickItem(rt));
      }), t._uU(1), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw();
      t.ekj("active", z === De.currentPage), t.xp6(1), t.Oqu(z);
    }
  }
  function kc(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, vs, 2, 0, "span", 7), t.YNc(2, La, 2, 3, "span", 8), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngIf", "ellipsis" === z), t.xp6(1), t.Q6J("ngIf", "ellipsis" !== z);
    }
  }
  let Ut = (() => {
      class xe {
        constructor() {
          this.goToPage = new t.vpe();
        }
        get maxPage() {
          const {
            total: z,
            paging: De
          } = this.viewData;
          return function au(xe, et, z) {
            const De = Math.ceil(et / xe) ?? 0;
            return Math.max(De, z);
          }(De.size, z, this.currentPage);
        }
        get items() {
          return function xu(xe, et) {
            if (et <= 0) return ["ellipsis"];
            if (et <= 3) return Array.from({
              length: et
            }, (z, De) => De + 1);
            if (xe <= 2) {
              const z = [1, 2];
              return et >= 3 && z.push(3), et > 3 && z.push("ellipsis", et), z;
            }
            return xe >= et - 1 ? [1, "ellipsis", et - 2, et - 1, et] : [1, "ellipsis", xe - 1, xe, xe + 1, "ellipsis", et];
          }(this.currentPage, this.maxPage);
        }
        get currentPage() {
          return this.viewData.paging.pageIndex + 1;
        }
        get isPrevDisabled() {
          return this.viewData.paging.pageIndex <= 0 || this.viewData.paging.pageIndex - 1 > this.maxPage;
        }
        get isNextDisabled() {
          return this.viewData.paging.pageIndex >= this.maxPage - 1;
        }
        onGoToPage(z) {
          z !== this.currentPage && this.goToPage.emit(z - 1);
        }
        navigateToPage(z) {
          if ("prev" === z && this.isPrevDisabled || "next" === z && this.isNextDisabled) return;
          const De = this.viewData.paging.pageIndex;
          this.goToPage.emit("prev" === z ? De - 1 : De + 1);
        }
        onClickItem(z) {
          this.onGoToPage(z);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-table-paginator"]],
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          goToPage: "goToPage"
        },
        decls: 7,
        vars: 7,
        consts: [[1, "paginator"], [1, "nav", "prev", 3, "click"], ["icon", "chevron-left", 3, "size"], [1, "pages"], [4, "ngFor", "ngForOf"], [1, "nav", "next", 3, "click"], ["icon", "chevron-right", 3, "size"], ["class", "ellipsis", 4, "ngIf"], ["class", "page", 3, "active", "click", 4, "ngIf"], [1, "ellipsis"], [1, "page", 3, "click"]],
        template: function (z, De) {
          1 & z && (t.TgZ(0, "div", 0)(1, "div", 1), t.NdJ("click", function () {
            return De.navigateToPage("prev");
          }), t._UZ(2, "lu-svg-icon", 2), t.qZA(), t.TgZ(3, "div", 3), t.YNc(4, kc, 3, 2, "ng-container", 4), t.qZA(), t.TgZ(5, "div", 5), t.NdJ("click", function () {
            return De.navigateToPage("next");
          }), t._UZ(6, "lu-svg-icon", 6), t.qZA()()), 2 & z && (t.xp6(1), t.ekj("disabled", De.isPrevDisabled), t.xp6(1), t.Q6J("size", 24), t.xp6(2), t.Q6J("ngForOf", De.items), t.xp6(1), t.ekj("disabled", De.isNextDisabled), t.xp6(1), t.Q6J("size", 24));
        },
        dependencies: [b.sg, b.O5, L.q],
        styles: [".paginator[_ngcontent-%COMP%]{display:flex;align-items:center}.paginator[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:8px}.pages[_ngcontent-%COMP%]{display:flex;align-items:center}.pages[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:8px}.page[_ngcontent-%COMP%], .ellipsis[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--lu-base-gutter) * 5);height:calc(var(--lu-base-gutter) * 5);border-radius:9999px;-webkit-user-select:none;user-select:none}.page[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]{cursor:pointer}.ellipsis[_ngcontent-%COMP%], .nav.disabled[_ngcontent-%COMP%]{cursor:default}.page[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]:not(.disabled){color:var(--lu-primary);--lu-svg-icon-color: var(--lu-primary)}.page[_ngcontent-%COMP%]:hover{background:var(--us-table-row-hover-color, var(--lu-teal-10))}.nav[_ngcontent-%COMP%]:not(.disabled):hover{background:var(--us-table-row-hover-color, var(--lu-teal-10))}.ellipsis[_ngcontent-%COMP%]:hover{background:transparent}.nav.disabled[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20);background:transparent;pointer-events:none}.page.active[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:2px}"],
        changeDetection: 0
      }), xe;
    })(),
    Vn = (() => {
      class xe {
        transform(z) {
          return void 0 === z ? [] : z;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListContextMenuDropdown",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Gt = (() => {
      class xe {
        transform(z, De, rt, Cn) {
          const po = rt ? rt(De) : void 0,
            dr = Cn ? this.getWidgetData(Cn, De) : void 0;
          if (dr) return this.getWidget(dr.key, dr.data, z.widgets);
          if (po && "string" == typeof po) return this.getWidget(po, void 0, z.widgets);
          throw new Error(`GetWidgetInColumnPipe: Invalid widget key ${po || ""}`);
        }
        getWidgetData(z, De) {
          return {
            key: "string" == typeof z.key ? z.key : z.key(De),
            data: z.data(De)
          };
        }
        getWidget(z, De, rt) {
          if (rt) return {
            ...rt[z],
            data: {
              ...rt[z].data,
              ...(De ?? [])
            }
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "getWidgetInColumn",
        type: xe,
        pure: !0
      }), xe;
    })(),
    xi = (() => {
      class xe {
        transform(z, De, rt) {
          return la(z, De, rt);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListTableFilterMenuActions",
        type: xe,
        pure: !0
      }), xe;
    })(),
    so = (() => {
      class xe {
        transform(z) {
          if (Array.isArray(z)) return z;
          throw new Error("PipeResultToGridCellPipe: Pipe result is not the array");
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "pipeResultToGridCell",
        type: xe,
        pure: !0
      }), xe;
    })(),
    yr = (() => {
      class xe {
        transform(z) {
          return {
            widget: Object.values(z.widgets ?? {}).find(De => "event" in De && "toggleTableColFilterPanel" === De.event),
            isMark: (z.widgetsKeysInColFilterPanel ?? []).some(De => {
              if (z.widgets && "formGroupField" in z.widgets[De]) {
                const rt = z.widgets[De].formGroupField.value;
                return "boolean" == typeof rt ? rt : !(0, e.O2)(rt);
              }
              return !1;
            })
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListDropdownPanelInCol",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Rr = (() => {
      class xe {
        transform(z) {
          return {
            type: z.type,
            align: z.alignContent,
            textSize: z.textSize
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "cellMetaByElement",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Ns = (() => {
      class xe {
        transform(z) {
          return {
            status: z.status,
            isApplyFilter: z.isApplyFilter,
            isPaging: z.usePaginator && z.total > 0
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "tableNoItemsViewData",
        type: xe,
        pure: !0
      }), xe;
    })();
  function Ga(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-table-no-items-view", 12), t.NdJ("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearFilter());
      })("refresh", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onRefresh());
      }), t.ALo(1, "tableNoItemsViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", t.lcZ(1, 1, z.viewData));
    }
  }
  function Ma(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-context-menu-item", 15), t.NdJ("data", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().$implicit,
          po = t.oxw();
        return t.KtG(po.onRunAction(po.mapToZeroIndex(rt), Cn));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit;
      let De;
      t.Q6J("itemText", z.title || "")("iconName", z.iconName)("type", null !== (De = z.iconType) && void 0 !== De ? De : "default");
    }
  }
  const Ia = function () {
    return [];
  };
  function Ea(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-context-menu-item-with-dropdown", 16), t.NdJ("data", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().$implicit,
          po = t.oxw();
        return t.KtG(po.onRunAction(rt, Cn));
      }), t.ALo(1, "universalListContextMenuDropdown"), t.ALo(2, "pipeMapper"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit;
      t.oxw();
      const De = t.MAs(5);
      let rt;
      t.Q6J("itemText", z.title || "")("iconName", z.iconName)("type", null !== (rt = z.iconType) && void 0 !== rt ? rt : "default")("dropdown", z.subItemsMapper ? t.lcZ(1, 4, t.xi3(2, 6, De.selectedRow, z.subItemsMapper)) : t.DdM(9, Ia));
    }
  }
  function Ll(xe, et) {
    1 & xe && t._UZ(0, "dp-context-menu-divider");
  }
  function Za(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Ma, 1, 3, "dp-universal-list-context-menu-item", 13), t.YNc(2, Ea, 3, 10, "dp-universal-list-context-menu-item-with-dropdown", 14), t.YNc(3, Ll, 1, 0, "dp-context-menu-divider", 10), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngIf", !z.subItemsMapper), t.xp6(1), t.Q6J("ngIf", z.subItemsMapper), t.xp6(1), t.Q6J("ngIf", z.haveDivider);
    }
  }
  function sl(xe, et) {
    1 & xe && (t.TgZ(0, "lu-preloader", 17), t._uU(1, " Загрузка списка пациентов... "), t.qZA()), 2 & xe && t.Q6J("absolute", !0);
  }
  function pl(xe, et) {
    1 & xe && t.GkF(0);
  }
  const ql = function (xe) {
    return {
      columnDef: xe
    };
  };
  function vc(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "dp-universal-list-dropdown-panel-in-col", 20), t.ALo(2, "universalListDropdownPanelInCol"), t.YNc(3, pl, 1, 0, "ng-container", 21), t.qZA(), t.BQk()), 2 & xe) {
      const z = t.oxw(2).columnDef,
        De = t.oxw();
      t.xp6(1), t.Q6J("viewData", t.lcZ(2, 3, De.viewData)), t.xp6(2), t.Q6J("ngTemplateOutlet", De.filterInColTemplate)("ngTemplateOutletContext", t.VKq(5, ql, z));
    }
  }
  function oc(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, vc, 4, 7, "ng-container", 10), t.BQk()), 2 & xe) {
      const z = t.oxw(2);
      t.xp6(1), t.Q6J("ngIf", z.filterInColTemplate);
    }
  }
  function pc(xe, et) {
    1 & xe && (t.ynx(0, 18), t.YNc(1, oc, 2, 1, "ng-container", 19), t.BQk()), 2 & xe && (t.Q6J("ngSwitch", et.columnDef), t.xp6(1), t.Q6J("ngSwitchCase", "filterInCol"));
  }
  function ec(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-widget", 27), t.NdJ("runEvent", function (rt) {
        const po = t.CHM(z).ngIf,
          dr = t.oxw(3).element,
          Rs = t.oxw();
        return t.KtG(Rs.onRunAction(Rs.mapToZeroIndex(dr), Rs.transformWidgetData(po), rt));
      }), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = et.ngIf;
      t.xp6(1), t.Q6J("widget", z);
    }
  }
  function Mc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-grid-cells", 28), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(4);
        return t.KtG(Cn.onSendAction(rt));
      }), t.ALo(1, "pipeResultToGridCell"), t.ALo(2, "pipeMapper"), t.ALo(3, "cellMetaByElement"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2).$implicit,
        De = t.oxw().element;
      t.Q6J("grid", t.lcZ(1, 3, t.xi3(2, 5, De, z.cellMapper)))("meta", t.lcZ(3, 8, z))("hideIf", z.hideIf);
    }
  }
  function rc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-cell", 29), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(4);
        return t.KtG(Cn.onSendAction(rt));
      }), t.ALo(1, "cellMetaByElement"), t.ALo(2, "pipeMapper"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2).$implicit,
        De = t.oxw().element;
      t.Q6J("meta", t.lcZ(1, 2, z))("data", t.xi3(2, 4, De, z.cellMapper));
    }
  }
  function Bl(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 24), t.YNc(1, ec, 2, 1, "ng-container", 10), t.ALo(2, "getWidgetInColumn"), t.ynx(3, 18), t.YNc(4, Mc, 4, 10, "dp-universal-grid-cells", 25), t.YNc(5, rc, 3, 7, "dp-universal-cell", 26), t.BQk(), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw().element,
        rt = t.oxw();
      t.xp6(1), t.Q6J("ngIf", (z.widgetMapper || z.widgetDataMapper) && t.gM2(2, 3, rt.viewData, De, z.widgetMapper, z.widgetDataMapper)), t.xp6(2), t.Q6J("ngSwitch", z.type), t.xp6(1), t.Q6J("ngSwitchCase", "grid");
    }
  }
  function gu(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Bl, 6, 8, "div", 23), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngSwitchCase", z.id);
    }
  }
  function Xc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-toolbox", 30), t.NdJ("data", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().element,
          po = t.oxw();
        return t.KtG(po.onRunAction(po.mapToolboxToRunActionParam(rt, Cn), po.mapToolboxToWidget(rt)));
      }), t.ALo(2, "universalListTableFilterMenuActions"), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = t.oxw(),
        De = z.isHovered,
        rt = z.element,
        Cn = t.oxw(),
        po = t.MAs(2);
      t.xp6(1), t.Q6J("visible", (Cn.viewData.nonHiddenToolbox || De) && !(Cn.viewData.rowDisableFn && Cn.viewData.rowDisableFn(rt)))("container", po)("buttons", t.Dn7(2, 5, Cn.viewData.toolbox, Cn.viewData.individualRulesDisplayingActions, rt))("element", rt)("contextMenuMaxWidth", null == Cn.viewData.tableOptions ? null : Cn.viewData.tableOptions.contextMenuMaxWidth);
    }
  }
  function al(xe, et) {
    if (1 & xe && (t.ynx(0, 18), t.YNc(1, gu, 2, 1, "ng-container", 22), t.YNc(2, Xc, 3, 9, "ng-container", 19), t.BQk()), 2 & xe) {
      const z = et.columnDef,
        De = t.oxw();
      t.Q6J("ngSwitch", z), t.xp6(1), t.Q6J("ngForOf", De.viewData.columns)("ngForTrackBy", De.trackById), t.xp6(1), t.Q6J("ngSwitchCase", "toolbox");
    }
  }
  function ca(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "div", 31)(2, "div", 32), t._uU(3, " Элементов в списке: "), t.TgZ(4, "span", 33), t._uU(5), t.qZA()(), t.TgZ(6, "div", 34)(7, "dp-universal-list-table-paginator", 35), t.NdJ("goToPage", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onGoToPage(rt));
      }), t.qZA()()(), t.BQk();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(5), t.Oqu(z.viewData.items.length), t.xp6(2), t.Q6J("viewData", z.viewData.pageData);
    }
  }
  function _a(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 36), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.hij("Найдено: ", z.viewData.total, "");
    }
  }
  function wl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-widget", 27), t.NdJ("runEvent", function () {
        const Cn = t.CHM(z).$implicit,
          po = t.oxw(2);
        return t.KtG(po.onRunSelectionAction(po.transformWidgetData(Cn)));
      }), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("widget", z);
    }
  }
  function Ja(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 37)(2, "div")(3, "h3", 38), t._uU(4), t.qZA()(), t.YNc(5, wl, 2, 1, "ng-container", 6), t.qZA(), t.BQk()), 2 & xe) {
      const z = t.oxw();
      t.xp6(3), t.Q6J("size", "normal")("color", "normal"), t.xp6(1), t.hij(" Выбрано: ", (null == z.currentSelectedState || null == z.currentSelectedState.markedRows ? null : z.currentSelectedState.markedRows.length) || 0, " "), t.xp6(1), t.Q6J("ngForOf", null == z.viewData.selectionOptions ? null : z.viewData.selectionOptions.eventWidgets);
    }
  }
  let ka = (() => {
      class xe {
        get hasActiveSelection() {
          if (!this.currentSelectedState) return !1;
          const {
            allMarked: z,
            markedRows: De,
            unmarkedRows: rt
          } = this.currentSelectedState;
          return z || De.length > 0 || rt.length > 0;
        }
        get showTotalInQuery() {
          return !this.viewData.usePaginator && this.viewData.showTotalInQuery && this.viewData.total > 0 && (!this.viewData.selectionOptions || !this.hasActiveSelection);
        }
        getColumnsName(z) {
          return Array.from(z.keys());
        }
        constructor(z) {
          this.cdr = z, this.columnsMetaMap = new Map(), this.rowsSort = new t.vpe(), this.refresh = new t.vpe(), this.clearFilter = new t.vpe(), this.scrolled = new t.vpe(), this.goToPage = new t.vpe(), this.range = new t.vpe(), this.runActionWithItem = new t.vpe(), this.outsideClick = new t.vpe();
        }
        ngOnInit() {
          this.columnsMetaMap = Ki(Pt(this.viewData.columns), this.viewData), this.columnName = this.getColumnsName(this.columnsMetaMap), this.trackByFn = this.trackBy.bind(this);
        }
        ngOnChanges() {
          this.columnsMetaMap = Ki(Pt(this.viewData.columns), this.viewData), this.columnName = this.getColumnsName(this.columnsMetaMap);
        }
        openRowContextMenu(z, De) {
          De.items = this.getFilteredMenuActions(z.row), De.items.length && De.open(z.coordinates, z.row);
        }
        onClickSettingsMenu() {
          this.runActionWithItem.emit({
            actionName: "openTableColSettings",
            data: void 0
          });
        }
        onSelectedItems(z) {
          this.currentSelectedState = z, this.cdr.markForCheck();
        }
        onRowsSort({
          field: z
        }, De) {
          this.rowsSort.emit({
            field: z,
            direction: "asc" === De.direction && z === De.field ? "desc" : "asc"
          });
        }
        onRefresh() {
          this.refresh.emit();
        }
        onClearFilter() {
          this.clearFilter.emit();
        }
        onScrollEndY() {
          this.viewData.usePaginator || this.scrolled.emit();
        }
        onRangeChanges(z) {
          this.range.emit(z);
        }
        onGoToPage(z) {
          this.goToPage.emit(z);
        }
        trackBy() {
          return (z, De) => (0, j.Jv)(De.rowData);
        }
        onRunAction({
          item: z,
          index: De
        }, rt, Cn) {
          if (rt) {
            const po = this.replaceIndexInConfig(rt, De),
              dr = z._techId;
            this.onSendAction({
              data: rt.data ? {
                ...this.convertItemToActionData(z, po)
              } : this.getData(z, dr),
              actionName: rt.action,
              techId: dr
            });
          }
          Cn?.stopPropagation();
        }
        onRunClickAction(z, De, rt) {
          if (De) {
            const Cn = z?.techId;
            this.onSendAction({
              data: De.data ?? this.getData(z?.rowData, Cn),
              actionName: De.action,
              techId: Cn
            });
          }
          rt?.stopPropagation();
        }
        onOutsideClick() {
          this.outsideClick.emit();
        }
        onRunSelectionAction(z) {
          this.runActionWithItem.emit({
            actionName: z?.action,
            data: {
              markedItems: this.convertItemsToActionData(this.currentSelectedState?.markedRows || [], z),
              unmarkedItems: this.convertItemsToActionData(this.currentSelectedState?.unmarkedRows || [], z),
              allMarkedRows: this.currentSelectedState?.allMarked
            }
          });
        }
        onSendAction(z) {
          this.runActionWithItem.emit(z);
        }
        replaceIndexInConfig(z, De) {
          return Object.keys(z.data ?? {}).reduce((rt, Cn) => ({
            ...rt,
            [Cn]: (z.data ?? {})[Cn].replace("[{index}]", `[${De}]`)
          }), {});
        }
        mapToZeroIndex(z) {
          return {
            item: z,
            index: 0
          };
        }
        mapToolboxToWidget(z) {
          return z.item;
        }
        mapItemToRowSelectEvent(z, De) {
          return De ? De(z?.rowData) : void 0;
        }
        mapToolboxToRunActionParam(z, De) {
          return {
            item: De,
            index: z.index
          };
        }
        trackById(z, De) {
          return De.id;
        }
        transformWidgetData(z) {
          return {
            action: z.event,
            data: z.dataForAction
          };
        }
        convertItemsToActionData(z, De) {
          return z.map(rt => De?.data ? this.convertItemToActionData(rt, De?.data) : rt);
        }
        convertItemToActionData(z, De) {
          const rt = Object.keys(De);
          return (0, e.FB)(rt)(rt.map(Cn => {
            const po = (0, e.YS)(De[Cn])(z);
            return po.length > 1 ? po : po[0];
          }));
        }
        getFilteredMenuActions(z) {
          return la(this.viewData.contextMenuItems, this.viewData.individualRulesDisplayingActions, z);
        }
        getData(z, De) {
          return z && "object" == typeof z ? {
            ...z,
            techId: De
          } : z;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(t.sBO));
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-list-table"]],
        viewQuery: function (z, De) {
          if (1 & z && t.Gf(kl, 5), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.toolboxCmp = rt.first);
          }
        },
        inputs: {
          viewData: "viewData",
          filterInColTemplate: "filterInColTemplate"
        },
        outputs: {
          rowsSort: "rowsSort",
          refresh: "refresh",
          clearFilter: "clearFilter",
          scrolled: "scrolled",
          goToPage: "goToPage",
          range: "range",
          runActionWithItem: "runActionWithItem",
          outsideClick: "outsideClick"
        },
        features: [t.TTD],
        decls: 15,
        vars: 28,
        consts: [[1, "table-container"], ["dpStickyContainer", "dp-scroll-container > div", 3, "displayType", "dataSource", "dataSourceGrouped", "virtualLabels", "groupingType", "columns", "metaMap", "tdCellsTemplate", "tdHeaderCellsTemplate", "rowBackgroundColorFunction", "rowDisabledConditionFunction", "rowDisabledTooltipTextFunction", "rowSelectItemFunction", "sortParams", "markRowsAllowed", "markAllRowsAllowed", "showSettings", "trackByFnCreator", "usePaginator", "pageIndex", "tableCellPaddingY", "rowsSort", "rowDbClick", "rowClick", "scrollEnd", "rowContextMenu", "openSettingsMenu", "selectedItems", "outside"], ["stickyContainer", "dpStickyContainer"], [3, "viewData", "clearFilter", "refresh", 4, "ngIf"], [3, "contextMenuMaxWidth"], ["contextMenu", ""], [4, "ngFor", "ngForOf"], ["class", "preloader __preloader", 3, "absolute", 4, "ngIf"], ["tdHeaderCellsTemplate", ""], ["tdCellsTemplate", ""], [4, "ngIf"], ["class", "total-in-query", 4, "ngIf"], [3, "viewData", "clearFilter", "refresh"], [3, "itemText", "iconName", "type", "data", 4, "ngIf"], [3, "itemText", "iconName", "type", "dropdown", "data", 4, "ngIf"], [3, "itemText", "iconName", "type", "data"], [3, "itemText", "iconName", "type", "dropdown", "data"], [1, "preloader", "__preloader", 3, "absolute"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "viewData"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cell", 4, "ngSwitchCase"], [1, "cell"], [3, "grid", "meta", "hideIf", "runAction", 4, "ngSwitchCase"], [3, "meta", "data", "runAction", 4, "ngSwitchDefault"], [1, "__widget-in-cell", 3, "widget", "runEvent"], [3, "grid", "meta", "hideIf", "runAction"], [3, "meta", "data", "runAction"], ["dpStickyElement", "RIGHT", 1, "__control-panel", 3, "visible", "container", "buttons", "element", "contextMenuMaxWidth", "data"], [1, "navigation-container"], [1, "navigation__total"], [1, "total-in-paginator"], [1, "navigation__paginator"], [3, "viewData", "goToPage"], [1, "total-in-query"], [1, "selection-container"], ["lu-text", "", 3, "size", "color"]],
        template: function (z, De) {
          if (1 & z) {
            const rt = t.EpF();
            t.TgZ(0, "div", 0)(1, "dp-table", 1, 2), t.NdJ("rowsSort", function (po) {
              return De.onRowsSort(po, De.viewData.sort);
            })("rowDbClick", function (po) {
              return De.onRunClickAction(po, De.mapItemToRowSelectEvent(po, De.viewData.rowDblClickEventFn));
            })("rowClick", function (po) {
              return De.onRunClickAction(po, De.mapItemToRowSelectEvent(po, De.viewData.rowClickEventFn));
            })("scrollEnd", function () {
              return De.onScrollEndY();
            })("rowContextMenu", function (po) {
              t.CHM(rt);
              const dr = t.MAs(5);
              return t.KtG(De.openRowContextMenu(po, dr));
            })("openSettingsMenu", function () {
              return De.onClickSettingsMenu();
            })("selectedItems", function (po) {
              return De.onSelectedItems(po);
            })("outside", function () {
              return De.onOutsideClick();
            }), t.qZA(), t.YNc(3, Ga, 2, 3, "dp-table-no-items-view", 3), t.TgZ(4, "dp-universal-list-context-menu", 4, 5), t.YNc(6, Za, 4, 3, "ng-container", 6), t.qZA(), t.YNc(7, sl, 2, 1, "lu-preloader", 7), t.YNc(8, pc, 2, 2, "ng-template", null, 8, t.W1O), t.YNc(10, al, 3, 4, "ng-template", null, 9, t.W1O), t.qZA(), t.YNc(12, ca, 8, 2, "ng-container", 10), t.YNc(13, _a, 2, 1, "div", 11), t.YNc(14, Ja, 6, 4, "ng-container", 10);
          }
          if (2 & z) {
            const rt = t.MAs(5),
              Cn = t.MAs(9),
              po = t.MAs(11);
            let dr;
            t.xp6(1), t.Q6J("displayType", "basic")("dataSource", De.viewData.items)("dataSourceGrouped", De.viewData.groupingItems)("virtualLabels", De.viewData.virtualLabels)("groupingType", De.viewData.groupingType)("columns", De.columnName)("metaMap", De.columnsMetaMap)("tdCellsTemplate", po)("tdHeaderCellsTemplate", Cn)("rowBackgroundColorFunction", De.viewData.rowBackgroundColorFn)("rowDisabledConditionFunction", De.viewData.rowDisableFn)("rowDisabledTooltipTextFunction", De.viewData.rowDisableReasonFn)("rowSelectItemFunction", null !== (dr = De.viewData.rowClickEventFn) && void 0 !== dr ? dr : De.viewData.rowDblClickEventFn)("sortParams", De.viewData.sort)("markRowsAllowed", !!De.viewData.selectionOptions)("markAllRowsAllowed", !!De.viewData.selectionOptions && De.viewData.selectionOptions.canCheckAll)("showSettings", !De.viewData.disableColsSettings)("trackByFnCreator", De.trackByFn)("usePaginator", De.viewData.usePaginator)("pageIndex", De.viewData.pageData.paging.pageIndex)("tableCellPaddingY", De.viewData.tableCellPaddingY), t.xp6(2), t.Q6J("ngIf", De.viewData.isEmptyList), t.xp6(1), t.Q6J("contextMenuMaxWidth", null == De.viewData.tableOptions ? null : De.viewData.tableOptions.contextMenuMaxWidth), t.xp6(2), t.Q6J("ngForOf", rt.items), t.xp6(1), t.Q6J("ngIf", "PENDING" === De.viewData.status), t.xp6(5), t.Q6J("ngIf", De.viewData.usePaginator && !De.viewData.showTotalInQuery && De.viewData.total > 0), t.xp6(1), t.Q6J("ngIf", De.showTotalInQuery), t.xp6(1), t.Q6J("ngIf", De.viewData.selectionOptions && De.hasActiveSelection);
          }
        },
        dependencies: [ae.SJ, b.sg, b.O5, b.tP, b.RF, b.n9, b.ED, j.ac, Y.bN, Y._1, Ar, va, zc, j.uh, h.d, kl, I.NZ, j.nP, y.NP, ae.AL, at, Ut, e.BX, Vn, Gt, xi, so, yr, Rr, Ns],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative}.table-container[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}.selection-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.selection-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){padding-right:calc(var(--lu-base-gutter) * 2)}.selection-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{padding-left:calc(var(--lu-base-gutter) * 3)}.navigation-container[_ngcontent-%COMP%]{flex:0 0 auto;border-top:1px solid var(--lu-black-10);background:var(--lu-white, #fff);display:flex;align-items:center;justify-content:center;position:relative;padding:calc(var(--lu-base-gutter) * 1) calc(var(--lu-base-gutter) * 1)}.navigation__total[_ngcontent-%COMP%]{position:absolute;left:var(--lu-base-gutter);color:var(--lu-black-60)}.navigation__paginator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.__control-panel[_ngcontent-%COMP%]{opacity:1;position:absolute;top:0;bottom:0;right:0}.__widget-in-cell[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}.visible[_ngcontent-%COMP%]{opacity:1}.preloader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.__preloader[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.1)}.message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}.cell[_ngcontent-%COMP%]{display:flex;align-items:baseline}.total-in-query[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;background:var(--lu-black-5);color:var(--lu-black-60);padding:var(--lu-base-gutter) var(--lu-base-gutter)}.total-in-paginator[_ngcontent-%COMP%]{font-weight:700}"],
        changeDetection: 0
      }), xe;
    })(),
    Hc = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, C.J, v.O, L.h, I.aI, G.w]
      }), xe;
    })(),
    tc = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, L.h]
      }), xe;
    })(),
    zl = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({}), xe;
    })(),
    Jl = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [L.h, E.i, v.O, b.ez, j.vI, j.yr]
      }), xe;
    })(),
    hc = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [ae.mF, b.ez, j.U$, Y.LV, Hc, j.vI, j.yr, h.c, Jl, O.W1, E.i, ke.M0, O.W1, I.aI, L.h, j.LD, y.zA, ae.Cl, Zt, tc, zl]
      }), xe;
    })();
  function ll(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-table-no-items-view", 12), t.NdJ("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearFilter());
      })("refresh", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onRefresh());
      }), t.ALo(1, "tableNoItemsViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", t.lcZ(1, 1, z.viewData));
    }
  }
  function Tl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-context-menu-item", 15), t.NdJ("data", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().$implicit,
          po = t.oxw();
        return t.KtG(po.onRunAction(po.mapToZeroIndex(rt), Cn));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit;
      let De;
      t.Q6J("itemText", z.title || "")("iconName", z.iconName)("type", null !== (De = z.iconType) && void 0 !== De ? De : "default");
    }
  }
  const $c = function () {
    return [];
  };
  function Ml(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-context-menu-item-with-dropdown", 16), t.NdJ("data", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().$implicit,
          po = t.oxw();
        return t.KtG(po.onRunAction(rt, Cn));
      }), t.ALo(1, "universalListContextMenuDropdown"), t.ALo(2, "pipeMapper"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit;
      t.oxw();
      const De = t.MAs(5);
      let rt;
      t.Q6J("itemText", z.title || "")("iconName", z.iconName)("type", null !== (rt = z.iconType) && void 0 !== rt ? rt : "default")("dropdown", z.subItemsMapper ? t.lcZ(1, 4, t.xi3(2, 6, De.selectedRow, z.subItemsMapper)) : t.DdM(9, $c));
    }
  }
  function Vl(xe, et) {
    1 & xe && t._UZ(0, "dp-context-menu-divider");
  }
  function Bc(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Tl, 1, 3, "dp-universal-list-context-menu-item", 13), t.YNc(2, Ml, 3, 10, "dp-universal-list-context-menu-item-with-dropdown", 14), t.YNc(3, Vl, 1, 0, "dp-context-menu-divider", 10), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngIf", !z.subItemsMapper), t.xp6(1), t.Q6J("ngIf", z.subItemsMapper), t.xp6(1), t.Q6J("ngIf", z.haveDivider);
    }
  }
  function bu(xe, et) {
    1 & xe && (t.TgZ(0, "lu-preloader", 17), t._uU(1, " Загрузка списка пациентов... "), t.qZA()), 2 & xe && t.Q6J("absolute", !0);
  }
  function Kc(xe, et) {
    1 & xe && t.GkF(0);
  }
  const Al = function (xe) {
    return {
      columnDef: xe
    };
  };
  function sc(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "dp-universal-list-dropdown-panel-in-col", 20), t.ALo(2, "universalListDropdownPanelInCol"), t.YNc(3, Kc, 1, 0, "ng-container", 21), t.qZA(), t.BQk()), 2 & xe) {
      const z = t.oxw(2).columnDef,
        De = t.oxw();
      t.xp6(1), t.Q6J("viewData", t.lcZ(2, 3, De.viewData)), t.xp6(2), t.Q6J("ngTemplateOutlet", De.filterInColTemplate)("ngTemplateOutletContext", t.VKq(5, Al, z));
    }
  }
  function Bi(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, sc, 4, 7, "ng-container", 10), t.BQk()), 2 & xe) {
      const z = t.oxw(2);
      t.xp6(1), t.Q6J("ngIf", z.filterInColTemplate);
    }
  }
  function lu(xe, et) {
    1 & xe && (t.ynx(0, 18), t.YNc(1, Bi, 2, 1, "ng-container", 19), t.BQk()), 2 & xe && (t.Q6J("ngSwitch", et.columnDef), t.xp6(1), t.Q6J("ngSwitchCase", "filterInCol"));
  }
  function Rc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-widget", 25), t.NdJ("runEvent", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw(3).element,
          dr = t.oxw();
        return t.KtG(dr.onRunAction(dr.mapToZeroIndex(po), dr.transformWidgetData(Cn), rt));
      }), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = t.oxw().ngIf;
      t.xp6(1), t.Q6J("widget", z);
    }
  }
  function ac(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Rc, 2, 1, "ng-container", 10), t.BQk()), 2 & xe) {
      const z = t.oxw(3).isLoading;
      t.xp6(1), t.Q6J("ngIf", !z);
    }
  }
  function Pa(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-grid-cells", 28), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(5);
        return t.KtG(Cn.onSendAction(rt));
      }), t.ALo(1, "pipeResultToGridCell"), t.ALo(2, "pipeMapper"), t.ALo(3, "cellMetaByElement"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(3).$implicit,
        De = t.oxw().element;
      t.Q6J("grid", t.lcZ(1, 2, t.xi3(2, 4, De, z.cellMapper)))("meta", t.lcZ(3, 7, z));
    }
  }
  function cl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-cell", 29), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(5);
        return t.KtG(Cn.onSendAction(rt));
      }), t.ALo(1, "cellMetaByElement"), t.ALo(2, "pipeMapper"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(3).$implicit,
        De = t.oxw().element;
      t.Q6J("meta", t.lcZ(1, 2, z))("data", t.xi3(2, 4, De, z.cellMapper));
    }
  }
  function iu(xe, et) {
    1 & xe && (t.ynx(0), t.YNc(1, Pa, 4, 9, "dp-universal-grid-cells", 26), t.YNc(2, cl, 3, 7, "dp-universal-cell", 27), t.BQk()), 2 & xe && (t.xp6(1), t.Q6J("ngSwitchCase", "grid"));
  }
  function Fc(xe, et) {
    1 & xe && (t.ynx(0), t.TgZ(1, "div", 30), t._uU(2, "\xA0"), t.qZA(), t.BQk());
  }
  function Rl(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 24), t.YNc(1, ac, 2, 1, "ng-container", 10), t.ALo(2, "getWidgetInColumn"), t.ynx(3, 18), t.YNc(4, iu, 3, 1, "ng-container", 10), t.YNc(5, Fc, 3, 0, "ng-container", 10), t.BQk(), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw(),
        rt = De.element,
        Cn = De.isLoading,
        po = t.oxw();
      t.xp6(1), t.Q6J("ngIf", (z.widgetMapper || z.widgetDataMapper) && t.gM2(2, 4, po.viewData, rt, z.widgetMapper, z.widgetDataMapper)), t.xp6(2), t.Q6J("ngSwitch", z.type), t.xp6(1), t.Q6J("ngIf", !Cn), t.xp6(1), t.Q6J("ngIf", Cn);
    }
  }
  function Jc(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Rl, 6, 9, "div", 23), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngSwitchCase", z.id);
    }
  }
  function _t(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-toolbox", 31), t.NdJ("data", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().element,
          po = t.oxw();
        return t.KtG(po.onRunAction(po.mapToolboxToRunActionParam(rt, Cn), po.mapToolboxToWidget(rt)));
      }), t.ALo(2, "universalListTableFilterMenuActions"), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = t.oxw(),
        De = z.isHovered,
        rt = z.element,
        Cn = t.oxw(),
        po = t.MAs(2);
      t.xp6(1), t.Q6J("visible", (Cn.viewData.nonHiddenToolbox || De) && !(Cn.viewData.rowDisableFn && Cn.viewData.rowDisableFn(rt)))("container", po)("buttons", t.Dn7(2, 5, Cn.viewData.toolbox, Cn.viewData.individualRulesDisplayingActions, rt))("element", rt)("contextMenuMaxWidth", null == Cn.viewData.tableOptions ? null : Cn.viewData.tableOptions.contextMenuMaxWidth);
    }
  }
  function Tn(xe, et) {
    if (1 & xe && (t.ynx(0, 18), t.YNc(1, Jc, 2, 1, "ng-container", 22), t.YNc(2, _t, 3, 9, "ng-container", 19), t.BQk()), 2 & xe) {
      const z = et.columnDef,
        De = t.oxw();
      t.Q6J("ngSwitch", z), t.xp6(1), t.Q6J("ngForOf", De.viewData.columns)("ngForTrackBy", De.trackById), t.xp6(1), t.Q6J("ngSwitchCase", "toolbox");
    }
  }
  function Ge(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "div", 32)(2, "div", 33), t._uU(3, " Элементов в списке: "), t.TgZ(4, "span", 34), t._uU(5), t.qZA()(), t.TgZ(6, "div", 35)(7, "dp-universal-list-table-paginator", 36), t.NdJ("goToPage", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onGoToPage(rt));
      }), t.qZA()()(), t.BQk();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(5), t.Oqu(z.viewData.items.length), t.xp6(2), t.Q6J("viewData", z.viewData.pageData);
    }
  }
  function Vi(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 37), t._uU(1), t.qZA()), 2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.hij("Найдено: ", z.viewData.total, "");
    }
  }
  function Zo(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-widget", 25), t.NdJ("runEvent", function () {
        const Cn = t.CHM(z).$implicit,
          po = t.oxw(2);
        return t.KtG(po.onRunSelectionAction(po.transformWidgetData(Cn)));
      }), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("widget", z);
    }
  }
  function Zr(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 38)(2, "div")(3, "h3", 39), t._uU(4), t.qZA()(), t.YNc(5, Zo, 2, 1, "ng-container", 6), t.qZA(), t.BQk()), 2 & xe) {
      const z = t.oxw();
      t.xp6(3), t.Q6J("size", "normal")("color", "normal"), t.xp6(1), t.hij(" Выбрано: ", (null == z.currentSelectedState || null == z.currentSelectedState.markedRows ? null : z.currentSelectedState.markedRows.length) || 0, " "), t.xp6(1), t.Q6J("ngForOf", null == z.viewData.selectionOptions ? null : z.viewData.selectionOptions.eventWidgets);
    }
  }
  let pa = (() => {
      class xe {
        constructor(z) {
          this.cdr = z, this.columnsMetaMap = new Map(), this.rowsSort = new t.vpe(), this.refresh = new t.vpe(), this.clearFilter = new t.vpe(), this.scrolled = new t.vpe(), this.goToPage = new t.vpe(), this.outsideClick = new t.vpe(), this.range = new t.vpe(), this.runActionWithItem = new t.vpe();
        }
        getColumnsName(z) {
          return Array.from(z.keys());
        }
        ngOnInit() {
          this.columnsMetaMap = Ki(Pt(this.viewData.columns), this.viewData), this.columnName = this.getColumnsName(this.columnsMetaMap), this.trackByFn = this.trackBy.bind(this);
        }
        ngOnChanges() {
          this.columnsMetaMap = Ki(Pt(this.viewData.columns), this.viewData), this.columnName = this.getColumnsName(this.columnsMetaMap);
        }
        openRowContextMenu(z, De) {
          De.items = this.getFilteredMenuActions(z.row), De.items.length && De.open(z.coordinates, z.row);
        }
        onClickSettingsMenu() {
          this.runActionWithItem.emit({
            actionName: "openTableColSettings",
            data: void 0
          });
        }
        onSelectedItems(z) {
          this.currentSelectedState = z, this.cdr.markForCheck();
        }
        onOutsideClick() {
          this.outsideClick.emit();
        }
        onRowsSort({
          field: z
        }, De) {
          this.rowsSort.emit({
            field: z,
            direction: "asc" === De.direction && z === De.field ? "desc" : "asc"
          });
        }
        onRefresh() {
          this.refresh.emit();
        }
        onClearFilter() {
          this.clearFilter.emit();
        }
        onScrollEndY() {
          this.viewData.usePaginator || this.scrolled.emit();
        }
        onRangeChanges(z) {
          this.range.emit(z);
        }
        onGoToPage(z) {
          this.goToPage.emit(z);
        }
        trackBy() {
          return (z, De) => (0, j.Jv)(De.rowData);
        }
        onRunAction({
          item: z,
          index: De
        }, rt, Cn) {
          if (rt) {
            const po = this.replaceIndexInConfig(rt, De),
              dr = z._techId;
            this.onSendAction({
              data: rt.data ? {
                ...(0, e.Df)(z, po)
              } : this.getData(z, dr),
              actionName: rt.action,
              techId: dr
            });
          }
          Cn?.stopPropagation();
        }
        onRunClickAction(z, De, rt) {
          if (De) {
            const Cn = z?.techId;
            this.onSendAction({
              data: De.data ?? this.getData(z?.rowData, Cn),
              actionName: De.action,
              techId: Cn
            });
          }
          rt?.stopPropagation();
        }
        onRunSelectionAction(z) {
          this.runActionWithItem.emit({
            actionName: z?.action,
            data: {
              markedItems: this.convertItemsToActionData(this.currentSelectedState?.markedRows || [], z),
              unmarkedItems: this.convertItemsToActionData(this.currentSelectedState?.unmarkedRows || [], z),
              allMarkedRows: this.currentSelectedState?.allMarked
            }
          });
        }
        onSendAction(z) {
          this.runActionWithItem.emit(z);
        }
        replaceIndexInConfig(z, De) {
          return Object.keys(z.data ?? {}).reduce((rt, Cn) => ({
            ...rt,
            [Cn]: (z.data ?? {})[Cn].replace("[{index}]", `[${De}]`)
          }), {});
        }
        mapToZeroIndex(z) {
          return {
            item: z,
            index: 0
          };
        }
        mapToolboxToWidget(z) {
          return z.item;
        }
        mapItemToRowSelectEvent(z, De) {
          return De ? De(z?.rowData) : void 0;
        }
        mapToolboxToRunActionParam(z, De) {
          return {
            item: De,
            index: z.index
          };
        }
        trackById(z, De) {
          return De.id;
        }
        transformWidgetData(z) {
          return {
            action: z.event,
            data: z.dataForAction
          };
        }
        get showTotalInQuery() {
          return !this.viewData.usePaginator && this.viewData.showTotalInQuery && this.viewData.total > 0 && (!this.viewData.selectionOptions || !this.hasActiveSelection);
        }
        get hasActiveSelection() {
          if (!this.currentSelectedState) return !1;
          const {
            allMarked: z,
            markedRows: De,
            unmarkedRows: rt
          } = this.currentSelectedState;
          return z || De.length > 0 || rt.length > 0;
        }
        getFilteredMenuActions(z) {
          return la(this.viewData.contextMenuItems, this.viewData.individualRulesDisplayingActions, z);
        }
        getData(z, De) {
          return z && "object" == typeof z ? {
            ...z,
            techId: De
          } : z;
        }
        convertItemsToActionData(z, De) {
          return z.map(rt => De?.data ? (0, e.Df)(rt, De?.data) : rt);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(t.sBO));
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-list-table-virtual"]],
        viewQuery: function (z, De) {
          if (1 & z && t.Gf(kl, 5), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.toolboxCmp = rt.first);
          }
        },
        inputs: {
          viewData: "viewData",
          filterInColTemplate: "filterInColTemplate"
        },
        outputs: {
          rowsSort: "rowsSort",
          refresh: "refresh",
          clearFilter: "clearFilter",
          scrolled: "scrolled",
          goToPage: "goToPage",
          outsideClick: "outsideClick",
          range: "range",
          runActionWithItem: "runActionWithItem"
        },
        features: [t.TTD],
        decls: 15,
        vars: 30,
        consts: [[1, "table-container"], ["dpStickyContainer", "cdk-virtual-scroll-viewport", 3, "displayType", "dataSource", "dataSourceGrouped", "virtualLabels", "groupingType", "columns", "metaMap", "tdCellsTemplate", "tdHeaderCellsTemplate", "rowBackgroundColorFunction", "rowDisabledConditionFunction", "rowDisabledTooltipTextFunction", "rowSelectItemFunction", "sortParams", "markRowsAllowed", "markAllRowsAllowed", "showSettings", "trackByFnCreator", "usePaginator", "pageIndex", "tableOptions", "selectedRowTechId", "tableCellPaddingY", "rowsSort", "rowDbClick", "rowClick", "scrollEnd", "rowContextMenu", "openSettingsMenu", "selectedItems", "outside"], ["stickyContainer", "dpStickyContainer"], [3, "viewData", "clearFilter", "refresh", 4, "ngIf"], [3, "contextMenuMaxWidth"], ["contextMenu", ""], [4, "ngFor", "ngForOf"], ["class", "preloader __preloader", 3, "absolute", 4, "ngIf"], ["tdHeaderCellsTemplate", ""], ["tdCellsTemplate", ""], [4, "ngIf"], ["class", "total-in-query", 4, "ngIf"], [3, "viewData", "clearFilter", "refresh"], [3, "itemText", "iconName", "type", "data", 4, "ngIf"], [3, "itemText", "iconName", "type", "dropdown", "data", 4, "ngIf"], [3, "itemText", "iconName", "type", "data"], [3, "itemText", "iconName", "type", "dropdown", "data"], [1, "preloader", "__preloader", 3, "absolute"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "viewData"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cell", 4, "ngSwitchCase"], [1, "cell"], [1, "__widget-in-cell", 3, "widget", "runEvent"], [3, "grid", "meta", "runAction", 4, "ngSwitchCase"], [3, "meta", "data", "runAction", 4, "ngSwitchDefault"], [3, "grid", "meta", "runAction"], [3, "meta", "data", "runAction"], [1, "loading-cell"], ["dpStickyElement", "RIGHT", 1, "__control-panel", 3, "visible", "container", "buttons", "element", "contextMenuMaxWidth", "data"], [1, "navigation-container"], [1, "navigation__total"], [1, "total-in-paginator"], [1, "navigation__paginator"], [3, "viewData", "goToPage"], [1, "total-in-query"], [1, "selection-container"], ["lu-text", "", 3, "size", "color"]],
        template: function (z, De) {
          if (1 & z) {
            const rt = t.EpF();
            t.TgZ(0, "div", 0)(1, "dp-virtual-table", 1, 2), t.NdJ("rowsSort", function (po) {
              return De.onRowsSort(po, De.viewData.sort);
            })("rowDbClick", function (po) {
              return De.onRunClickAction(po, De.mapItemToRowSelectEvent(po, De.viewData.rowDblClickEventFn));
            })("rowClick", function (po) {
              return De.onRunClickAction(po, De.mapItemToRowSelectEvent(po, De.viewData.rowClickEventFn));
            })("scrollEnd", function () {
              return De.onScrollEndY();
            })("rowContextMenu", function (po) {
              t.CHM(rt);
              const dr = t.MAs(5);
              return t.KtG(De.openRowContextMenu(po, dr));
            })("openSettingsMenu", function () {
              return De.onClickSettingsMenu();
            })("selectedItems", function (po) {
              return De.onSelectedItems(po);
            })("outside", function () {
              return De.onOutsideClick();
            }), t.qZA(), t.YNc(3, ll, 2, 3, "dp-table-no-items-view", 3), t.TgZ(4, "dp-universal-list-context-menu", 4, 5), t.YNc(6, Bc, 4, 3, "ng-container", 6), t.qZA(), t.YNc(7, bu, 2, 1, "lu-preloader", 7), t.YNc(8, lu, 2, 2, "ng-template", null, 8, t.W1O), t.YNc(10, Tn, 3, 4, "ng-template", null, 9, t.W1O), t.qZA(), t.YNc(12, Ge, 8, 2, "ng-container", 10), t.YNc(13, Vi, 2, 1, "div", 11), t.YNc(14, Zr, 6, 4, "ng-container", 10);
          }
          if (2 & z) {
            const rt = t.MAs(5),
              Cn = t.MAs(9),
              po = t.MAs(11);
            let dr;
            t.xp6(1), t.Q6J("displayType", "basic")("dataSource", De.viewData.items)("dataSourceGrouped", De.viewData.groupingItems)("virtualLabels", De.viewData.virtualLabels)("groupingType", De.viewData.groupingType)("columns", De.columnName)("metaMap", De.columnsMetaMap)("tdCellsTemplate", po)("tdHeaderCellsTemplate", Cn)("rowBackgroundColorFunction", De.viewData.rowBackgroundColorFn)("rowDisabledConditionFunction", De.viewData.rowDisableFn)("rowDisabledTooltipTextFunction", De.viewData.rowDisableReasonFn)("rowSelectItemFunction", null !== (dr = De.viewData.rowClickEventFn) && void 0 !== dr ? dr : De.viewData.rowDblClickEventFn)("sortParams", De.viewData.sort)("markRowsAllowed", !!De.viewData.selectionOptions)("markAllRowsAllowed", !!De.viewData.selectionOptions && De.viewData.selectionOptions.canCheckAll)("showSettings", !De.viewData.disableColsSettings)("trackByFnCreator", De.trackByFn)("usePaginator", De.viewData.usePaginator)("pageIndex", De.viewData.pageData.paging.pageIndex)("tableOptions", De.viewData.tableOptions)("selectedRowTechId", De.viewData.selectedRowTechId)("tableCellPaddingY", De.viewData.tableCellPaddingY), t.xp6(2), t.Q6J("ngIf", De.viewData.isEmptyList), t.xp6(1), t.Q6J("contextMenuMaxWidth", null == De.viewData.tableOptions ? null : De.viewData.tableOptions.contextMenuMaxWidth), t.xp6(2), t.Q6J("ngForOf", rt.items), t.xp6(1), t.Q6J("ngIf", "PENDING" === De.viewData.status), t.xp6(5), t.Q6J("ngIf", De.viewData.usePaginator && !De.viewData.showTotalInQuery && De.viewData.total > 0), t.xp6(1), t.Q6J("ngIf", De.showTotalInQuery), t.xp6(1), t.Q6J("ngIf", De.viewData.selectionOptions && De.hasActiveSelection);
          }
        },
        dependencies: [ae.SJ, b.sg, b.O5, b.tP, b.RF, b.n9, b.ED, Y.bN, Y._1, Ar, va, zc, j.uh, h.d, kl, I.NZ, j.nP, y.NP, ae.AL, at, Ut, j.Xo, e.BX, Vn, Gt, xi, so, yr, Rr, Ns],
        styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative}.table-container[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}.navigation-container[_ngcontent-%COMP%]{flex:0 0 auto;border-top:1px solid var(--lu-black-10);background:var(--lu-white, #fff);display:flex;align-items:center;justify-content:center;position:relative;padding:calc(var(--lu-base-gutter) * 1) calc(var(--lu-base-gutter) * 1)}.navigation__total[_ngcontent-%COMP%]{position:absolute;left:var(--lu-base-gutter);color:var(--lu-black-60)}.navigation__paginator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.__control-panel[_ngcontent-%COMP%]{opacity:1;position:absolute;top:0;bottom:0;right:0}.__widget-in-cell[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}.visible[_ngcontent-%COMP%]{opacity:1}.preloader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.__preloader[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.1)}.message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}.cell[_ngcontent-%COMP%]{display:flex;align-items:baseline}.loading-cell[_ngcontent-%COMP%]{border-radius:6px;background-color:var(--lu-black-5);width:100%;min-height:var(--lu-font-size);animation:_ngcontent-%COMP%_pulse 2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:.6}50%{opacity:1}to{opacity:.6}}.total-in-query[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;background:var(--lu-black-5);color:var(--lu-black-60);padding:var(--lu-base-gutter) var(--lu-base-gutter)}.total-in-paginator[_ngcontent-%COMP%]{font-weight:700}"],
        changeDetection: 0
      }), xe;
    })(),
    fl = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [ae.mF, b.ez, j.U$, Y.LV, Hc, j.vI, j.yr, h.c, Jl, O.W1, E.i, ke.M0, O.W1, I.aI, L.h, j.LD, y.zA, ae.Cl, Zt, tc, zl, j.W8]
      }), xe;
    })();
  function Bs(xe, et) {
    1 & xe && t.GkF(0);
  }
  const qc = function (xe) {
    return {
      $implicit: xe
    };
  };
  function $e(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 5)(1, "div", 6)(2, "div", 7), t._UZ(3, "span", 8), t.YNc(4, Bs, 1, 0, "ng-container", 9), t.qZA()()()), 2 & xe) {
      const z = t.oxw().$implicit;
      t.oxw();
      const De = t.MAs(4);
      t.xp6(3), t.Q6J("innerHtml", z.columnName, t.oJD), t.xp6(1), t.Q6J("ngTemplateOutlet", De)("ngTemplateOutletContext", t.VKq(3, qc, z));
    }
  }
  function Hn(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, $e, 5, 5, "div", 4), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngIf", z.columnName);
    }
  }
  function nt(xe, et) {
    1 & xe && t.GkF(0);
  }
  const si = function (xe, et) {
      return {
        "drop-icon--hide": xe,
        "drop-icon--display": et
      };
    },
    Oo = function (xe) {
      return {
        "column-text--hide": xe
      };
    };
  function xs(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 12), t.NdJ("mouseenter", function () {
        t.CHM(z);
        const rt = t.oxw().$implicit,
          Cn = t.oxw(2);
        return t.KtG(Cn.onRowHoverStart(rt));
      })("mouseleave", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onRowHoverEnd());
      }), t.TgZ(1, "div", 13)(2, "div", 14), t._UZ(3, "lu-svg-icon", 15), t.qZA(), t.TgZ(4, "div", 16)(5, "div", 17), t._UZ(6, "span", 18), t.qZA(), t.YNc(7, nt, 1, 0, "ng-container", 9), t.qZA()()();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw(2),
        rt = t.MAs(4);
      t.xp6(3), t.Q6J("ngClass", t.WLB(6, si, !De.isRowHovered(z), De.isRowHovered(z)))("size", 24), t.xp6(2), t.Q6J("ngClass", t.VKq(9, Oo, !z.isVisible)), t.xp6(1), t.Q6J("innerHTML", z.columnName, t.oJD), t.xp6(1), t.Q6J("ngTemplateOutlet", rt)("ngTemplateOutletContext", t.VKq(11, qc, z));
    }
  }
  function Ne(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, xs, 8, 13, "div", 11), t.BQk()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngIf", z.columnName);
    }
  }
  function Qe(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "div", 10), t.NdJ("cdkDropListDropped", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.drop(rt));
      }), t.YNc(2, Ne, 2, 1, "ng-container", 1), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(2), t.Q6J("ngForOf", z.dynamicColumns)("ngForTrackBy", z.trackByIndex);
    }
  }
  function Q(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "lu-svg-icon", 23), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw(2).$implicit,
          Cn = t.oxw();
        return t.KtG(Cn.toggleColumnVision(rt));
      }), t.qZA();
    }
    2 & xe && t.Q6J("size", 24);
  }
  function se(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "lu-svg-icon", 24), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw(2).$implicit,
          Cn = t.oxw();
        return t.KtG(Cn.toggleColumnVision(rt));
      }), t.qZA();
    }
    2 & xe && t.Q6J("size", 32);
  }
  function re(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 20), t.YNc(1, Q, 1, 1, "lu-svg-icon", 21), t.YNc(2, se, 1, 1, "lu-svg-icon", 22), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit;
      t.xp6(1), t.Q6J("ngIf", z.isVisible), t.xp6(1), t.Q6J("ngIf", !z.isVisible);
    }
  }
  function Ce(xe, et) {
    1 & xe && t.YNc(0, re, 3, 2, "div", 19), 2 & xe && t.Q6J("ngIf", et.$implicit.canHide);
  }
  let Be = (() => {
    class xe {
      constructor() {
        this.listChanges = new t.vpe(), this.hoveredRow = null;
      }
      isRowHovered(z) {
        return this.hoveredRow === z;
      }
      onRowHoverStart(z) {
        this.updateHoveredRow(z);
      }
      onRowHoverEnd() {
        this.updateHoveredRow(null);
      }
      trackByIndex(z) {
        return `${z}`;
      }
      drop(z) {
        z.previousIndex !== z.currentIndex && (To(this.dynamicColumns, z.previousIndex, z.currentIndex), this.listChanges.emit([...this.staticColumns, ...this.dynamicColumns]));
      }
      toggleColumnVision(z) {
        const De = [...this.staticColumns, ...this.dynamicColumns],
          rt = De.find(Cn => Cn.columnId === z.columnId);
        if (!rt) throw Error(`Unable to find column ${z.columnId}`);
        rt.isVisible = !rt.isVisible, this.listChanges.emit(De);
      }
      updateHoveredRow(z) {
        this.hoveredRow = this.hoveredRow === z ? null : z;
      }
    }
    return xe.ɵfac = function (z) {
      return new (z || xe)();
    }, xe.ɵcmp = t.Xpm({
      type: xe,
      selectors: [["dp-universal-list-table-settings-menu"]],
      inputs: {
        staticColumns: "staticColumns",
        dynamicColumns: "dynamicColumns"
      },
      outputs: {
        listChanges: "listChanges"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "column-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["hideOptions", ""], ["class", "column-box", 4, "ngIf"], [1, "column-box"], [1, "column", "column-static"], [1, "column-title", "column-title--static"], [1, "column-title-text", 3, "innerHtml"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkDropList", "", 1, "column-list", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "column-box column-box--drag", 3, "mouseenter", "mouseleave", 4, "ngIf"], ["cdkDrag", "", 1, "column-box", "column-box--drag", 3, "mouseenter", "mouseleave"], [1, "column", "column-drag"], ["cdkDragHandle", "", 1, "drag-button"], ["icon", "drag-and-drop", 1, "drop-icon", 3, "ngClass", "size"], [1, "column-title"], [1, "column-text", 3, "ngClass"], [1, "column-title-text", 3, "innerHTML"], ["class", "column-icon-section", 4, "ngIf"], [1, "column-icon-section"], ["class", "visible-icon visible-icon--show", "icon", "eye", 3, "size", "click", 4, "ngIf"], ["class", "visible-icon visible-icon--hide", "icon", "eye_off", 3, "size", "click", 4, "ngIf"], ["icon", "eye", 1, "visible-icon", "visible-icon--show", 3, "size", "click"], ["icon", "eye_off", 1, "visible-icon", "visible-icon--hide", 3, "size", "click"]],
      template: function (z, De) {
        1 & z && (t.TgZ(0, "div", 0), t.YNc(1, Hn, 2, 1, "ng-container", 1), t.qZA(), t.YNc(2, Qe, 3, 2, "ng-container", 2), t.YNc(3, Ce, 1, 1, "ng-template", null, 3, t.W1O)), 2 & z && (t.xp6(1), t.Q6J("ngForOf", De.staticColumns)("ngForTrackBy", De.trackByIndex), t.xp6(1), t.Q6J("ngIf", De.dynamicColumns.length));
      },
      dependencies: [b.mk, b.sg, b.O5, b.tP, Rn, us, L.q, Ei],
      styles: [".column[_ngcontent-%COMP%]{width:100%;padding:0 calc(var(--lu-base-gutter) * 2) 0 calc(var(--lu-base-gutter) * 3)}.column-drag[_ngcontent-%COMP%]{position:relative;padding:0 calc(var(--lu-base-gutter) * 2) 0 calc(var(--lu-base-gutter) * 3);width:100%}.column-box[_ngcontent-%COMP%]{background-color:var(--lu-white);display:flex;align-items:center}.drag-button[_ngcontent-%COMP%]{position:absolute;left:0;bottom:var(--lu-base-gutter);width:calc(var(--lu-base-gutter) * 5);height:calc(var(--lu-base-gutter) * 3)}.column-title[_ngcontent-%COMP%]{height:calc(var(--lu-base-gutter) * 4);display:flex;justify-content:space-between;align-items:center;width:100%;border-bottom:1px solid var(--lu-black-5);padding:calc(var(--lu-base-gutter) * 2.4) 0}.column-title-text[_ngcontent-%COMP%]{font-size:calc(var(--lu-base-gutter) * 1.875);line-height:calc(var(--lu-base-gutter) * 2.75);font-weight:400;font-family:system-ui,sans-serif}.column-icon-section[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 4);display:flex;justify-content:space-around}.drop-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-50)}.drop-icon--display[_ngcontent-%COMP%]{cursor:move;display:block}.drop-icon--hide[_ngcontent-%COMP%]{display:none}.visible-icon[_ngcontent-%COMP%]{cursor:pointer}.visible-icon--show[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}.visible-icon--hide[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}.column-text--hide[_ngcontent-%COMP%]{color:var(--lu-black-30)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .column-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],
      changeDetection: 0
    }), xe;
  })();
  function dt(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "lu-option", 18), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw(2);
        return t.KtG(rt.dropSettings());
      }), t._uU(1, "Сбросить настройки"), t.qZA();
    }
  }
  const Ot = function (xe) {
    return {
      "settings-button--active": xe
    };
  };
  function Qt(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClose());
      }), t.qZA(), t.TgZ(3, "div", 4)(4, "div", 5)(5, "h4", 6), t._uU(6, "Настройка столбцов"), t.qZA(), t.TgZ(7, "div", 7)(8, "div", 8), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.MAs(11);
        return t.KtG(rt.toggle());
      }), t.TgZ(9, "lu-svg-icon", 9)(10, "lu-dropdown", 10, 11), t.YNc(12, dt, 2, 0, "ng-template", null, 12, t.W1O), t.qZA()()(), t._UZ(14, "div", 13, 14), t.TgZ(16, "div", 15)(17, "lu-svg-icon", 16), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClose());
      }), t.qZA()()()(), t.TgZ(18, "dp-universal-list-table-settings-menu", 17), t.NdJ("listChanges", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onListChanges(rt));
      }), t.qZA()()()();
    }
    if (2 & xe) {
      const z = t.MAs(11),
        De = t.MAs(13),
        rt = t.MAs(15),
        Cn = t.oxw();
      t.xp6(9), t.Q6J("ngClass", t.VKq(8, Ot, z.isOpened))("size", 24), t.xp6(1), t.Q6J("closeIfInnerClick", !0)("content", De)("origin", rt), t.xp6(7), t.Q6J("size", 24), t.xp6(1), t.Q6J("dynamicColumns", Cn.viewModel.dynamicColumns)("staticColumns", Cn.viewModel.staticColumns);
    }
  }
  let Wn = (() => {
      class xe {
        constructor(z, De) {
          this.universalListStorageContext = z, this.cd = De, this.visible = !1;
        }
        dropSettings() {
          this.universalListStorageContext.dropData(this.viewModel.listName);
        }
        onListChanges(z) {
          this.universalListStorageContext.sendData(this.viewModel.listName, z);
        }
        onClose() {
          this.visible = !1;
        }
        onOpen() {
          this.visible = !0, this.cd.detectChanges();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(n), t.Y36(t.sBO));
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-table-settings"]],
        inputs: {
          viewModel: "viewModel"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "settings-container-wrapper", 4, "ngIf"], [1, "settings-container-wrapper"], [1, "settings-container"], [1, "overlap", 3, "click"], [1, "settings-menu"], [1, "settings-menu-header"], ["lu-text", "", 1, "settings-menu-header__title"], [1, "settings-menu-button-section"], [1, "settings-menu-button-item", 3, "click"], ["icon", "kebab", 1, "settings-button", "settings-button--reset", 3, "ngClass", "size"], ["panelClass", "dropdown-settings-menu", "positions", "bottom-right", 3, "closeIfInnerClick", "content", "origin"], ["settingsOriginDropdown", ""], ["content", ""], ["luDropdownOrigin", "", 1, "settings-line-divider"], ["origin", "luDropdownOrigin"], [1, "settings-menu-button-item"], ["icon", "close", 1, "settings-button", 3, "size", "click"], [3, "dynamicColumns", "staticColumns", "listChanges"], [1, "dropdown-settings-menu-option", 3, "click"]],
        template: function (z, De) {
          1 & z && t.YNc(0, Qt, 19, 10, "div", 0), 2 & z && t.Q6J("ngIf", De.visible);
        },
        dependencies: [b.mk, b.O5, Be, L.q, I.NZ, C.$, x.k, v.n],
        styles: [".settings-container-wrapper[_ngcontent-%COMP%]{position:fixed;z-index:1;top:calc(var(--lu-base-gutter) * 6);right:0;width:100%;height:100%}.settings-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:100%;box-shadow:0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) 0 #0000001f,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) 0 #00000014,0 0 calc(var(--lu-base-gutter) / 8) 0 #00000047}.overlap[_ngcontent-%COMP%]{width:80%;background:rgba(0,0,0,.5)}.settings-menu[_ngcontent-%COMP%]{width:20%;background-color:var(--lu-white)}.settings-menu-header[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 3);display:flex;justify-content:space-between}.settings-menu-header__title[_ngcontent-%COMP%]{margin:0}.settings-menu-button-section[_ngcontent-%COMP%]{display:flex}.settings-line-divider[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) / 8);background-color:var(--lu-black-10);margin:0 calc(var(--lu-base-gutter) * 2)}.settings-button[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20);cursor:pointer}.settings-button[_ngcontent-%COMP%]:hover, .settings-button--active[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-primary)}  .dropdown-settings-menu{margin-top:calc(var(--lu-base-gutter) * 3)}  .dropdown-settings-menu .lu-overlay-content{padding:var(--lu-base-gutter) 0;border-color:transparent!important;border-radius:calc(var(--lu-base-gutter) / 2);box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f}.dropdown-settings-menu-option[_ngcontent-%COMP%]{text-wrap:nowrap}"],
        changeDetection: 0
      }), xe;
    })(),
    Ui = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, L.h]
      }), xe;
    })(),
    eo = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, Ui, L.h, I.aI, C.J, x.X, v.O]
      }), xe;
    })();
  const Wo = function (xe) {
    return {
      "reset-form-control": xe
    };
  };
  function Ve(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "lu-input-wrapper", 8), t._UZ(1, "input", 9), t.TgZ(2, "lu-svg-icon", 10), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw(4);
        return t.KtG(rt.onReset());
      }), t.qZA()();
    }
    if (2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw(3);
      let rt;
      t.xp6(1), t.Q6J("placeholder", null !== (rt = null == z.data ? null : z.data.placeholder) && void 0 !== rt ? rt : "")("formControlName", z.formGroupField.field), t.xp6(1), t.Q6J("ngClass", t.VKq(5, Wo, De.getControl(z.formGroupField.field).value))("icon", De.getFieldIcon(De.getControl(z.formGroupField.field).value))("size", 24);
    }
  }
  function me(xe, et) {
    if (1 & xe && (t.ynx(0)(1, 6), t.YNc(2, Ve, 3, 7, "lu-input-wrapper", 7), t.BQk()()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngSwitch", z.type), t.xp6(1), t.Q6J("ngSwitchCase", "input.text");
    }
  }
  function ze(xe, et) {
    if (1 & xe && t.YNc(0, me, 3, 2, "ng-container", 5), 2 & xe) {
      const z = t.oxw(2);
      t.Q6J("ngForOf", z.toControls(z.viewData.widgets))("ngForTrackBy", z.trackForField);
    }
  }
  function xt(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "div", 1)(2, "lu-svg-icon", 2), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.toggleExpander());
      }), t.qZA()(), t.TgZ(3, "lu-expander", 3), t.YNc(4, ze, 1, 2, "ng-template", null, 4, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & xe) {
      const z = t.MAs(5),
        De = t.oxw();
      t.xp6(2), t.Q6J("icon", De.getIcon)("size", 24), t.xp6(1), t.Q6J("expanded", De.expanded)("content", z)("formGroup", De.formGroup);
    }
  }
  let wn = (() => {
      class xe {
        constructor() {
          this.changeFilter = new t.vpe(), this.expanded = !1, this._fields = [];
        }
        ngOnInit() {
          this._fields = this.getFormFieldsFromWidgets(this.viewData.widgets), this.filterForm = new e.SI(this.formGroupBuilder.filterFieldsByType(this._fields, "filter")), this.expanded = !this.fieldsIsEmpty(), this._fields.length > 0 && this.changeValueEvent();
        }
        get formGroup() {
          return this.filterForm.getFormGroup();
        }
        getControl(z) {
          return this.formGroup.get(z);
        }
        onApply() {
          this.emitFormValue();
        }
        onReset() {
          this.filterForm.resetToInitial();
        }
        toggleExpander() {
          this.expanded = !this.expanded, !this.expanded && !this.fieldsIsEmpty() && this.onReset();
        }
        trackForField(z, De) {
          return `${De.formGroupField.field}:${De.type}`;
        }
        toControls(z) {
          return z;
        }
        get getIcon() {
          return this.expanded ? "left" : "search";
        }
        getFieldIcon(z) {
          return z ? "close-12" : "search";
        }
        fieldsIsEmpty() {
          return this.formGroupBuilder.isEmpty(this._fields);
        }
        emitFormValue() {
          this.changeFilter.emit({
            ...this.formGroupBuilder?.getFormValueByTypes(["filter"]),
            ...this.formGroup.value
          });
        }
        getFormFieldsFromWidgets(z) {
          return z.filter(De => !!De.formGroupField).map(De => De.formGroupField);
        }
        changeValueEvent() {
          return this.formGroup.valueChanges.pipe((0, F.b)(300)).subscribe(() => {
            this.onApply();
          });
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-title-expand-panel"]],
        inputs: {
          viewData: "viewData",
          formGroupBuilder: "formGroupBuilder"
        },
        outputs: {
          changeFilter: "changeFilter"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "expand-panel-toggle"], ["luInputWrapperBefore", "", 1, "expand-panel-toggle-icon", 3, "icon", "size", "click"], [1, "expand-panel__content", "expand-panel-content", 3, "expanded", "content", "formGroup"], ["content", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], ["class", "expand-panel-text-control", 4, "ngSwitchCase"], [1, "expand-panel-text-control"], ["luInput", "", "luInputString", "", 3, "placeholder", "formControlName"], ["luInputWrapperAfter", "", 1, "empty-form-control-icon", 3, "ngClass", "icon", "size", "click"]],
        template: function (z, De) {
          1 & z && t.YNc(0, xt, 6, 5, "ng-container", 0), 2 & z && t.Q6J("ngIf", De.formGroup && De.viewData.widgets.length > 0);
        },
        dependencies: [b.mk, b.sg, b.O5, b.RF, b.n9, L.q, u.HY, u.kH, u.Fj, T.L, R.H, A.Fj, A.JJ, A.JL, A.sg, A.u, B.G],
        styles: ["[_nghost-%COMP%]{display:flex;align-items:center}.expand-panel-content[_ngcontent-%COMP%]{width:100%}.expand-panel__content[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.expand-panel-toggle[_ngcontent-%COMP%]{width:40px;display:flex;justify-content:center}.empty-form-control-icon[_ngcontent-%COMP%], .expand-panel-toggle-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-blue-100)}.reset-form-control[_ngcontent-%COMP%]{cursor:pointer;--lu-svg-icon-color: var(--lu-black-40)}.reset-form-control[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: var(--lu-black-80)}.search-input[_ngcontent-%COMP%]{width:500px}  .expand-panel-text-control .lu-input-container:after,   lu-floated-border:after{border-radius:calc(var(--lu-base-gutter) * .5)}"],
        changeDetection: 0
      }), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", []), (0, oi.w6)("design:returntype", M.w0)], xe.prototype, "changeValueEvent", null), xe;
    })(),
    Ai = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, L.h, u.LA, T.f, R.c, A.UX, f.o, B.I]
      }), xe;
    })();
  const _o = ["*"];
  let mr = (() => {
      class xe {
        constructor() {
          this.title = "", this.clearFilter = new t.vpe(), this.applyFilter = new t.vpe();
        }
        onApply() {
          this.applyFilter.emit();
        }
        onClear() {
          this.clearFilter.emit();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-vertical-filter-panel-second"]],
        inputs: {
          title: "title"
        },
        outputs: {
          clearFilter: "clearFilter",
          applyFilter: "applyFilter"
        },
        ngContentSelectors: _o,
        decls: 11,
        vars: 2,
        consts: [[1, "head"], ["lu-text", "", "id", "vfpTitle", 1, "title"], ["id", "clearAllBtn", "lu-button-link-dashed", "", 3, "click"], [1, "body"], ["id", "filterPanelSecondScrollContainer", 3, "hidden"], [1, "footer"], ["id", "applyBtn", "lu-button-raised", "", 3, "click"]],
        template: function (z, De) {
          1 & z && (t.F$t(), t.TgZ(0, "div", 0)(1, "h4", 1), t._uU(2), t.qZA(), t.TgZ(3, "button", 2), t.NdJ("click", function () {
            return De.onClear();
          }), t._uU(4, "Очистить"), t.qZA()(), t.TgZ(5, "div", 3)(6, "dp-scroll-container", 4), t.Hsn(7), t.qZA()(), t.TgZ(8, "div", 5)(9, "button", 6), t.NdJ("click", function () {
            return De.onApply();
          }), t._uU(10, "Применить"), t.qZA()()), 2 & z && (t.xp6(2), t.Oqu(De.title), t.xp6(4), t.Q6J("hidden", !0));
        },
        dependencies: [O.mc, I.NZ, j.wE],
        styles: ["[_nghost-%COMP%]{position:relative;height:100%;display:flex;flex-direction:column;padding:calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3)}.title[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter) 0 0}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding-bottom:calc(var(--lu-base-gutter) * 3)}.body[_ngcontent-%COMP%]{flex-grow:2;overflow:hidden;display:flex}.footer[_ngcontent-%COMP%]{padding-top:calc(var(--lu-base-gutter) * 1.5)}"],
        changeDetection: 0
      }), xe;
    })(),
    Yr = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, O.W1, I.aI, j.Nl]
      }), xe;
    })();
  const es = new t.OlP("CUSTOM_REFILLABLE_COMPONENTS_SERVICE_TOKEN"),
    Jr = new t.OlP("WRAP_REFILLABLE_COMPONENTS_SERVICE_TOKEN"),
    Ca = ["errorLoadComponent"];
  function Ra(xe, et) {}
  function Ta(xe, et) {
    1 & xe && t._uU(0, " Invalid component ");
  }
  let Qa = (() => {
      class xe {
        constructor(z, De) {
          this.wrapComponent = De, this.runAction = new t.vpe(), this.widgetsValueChanges = new t.vpe(), this.groupingChanged = new t.vpe(), this.componentsMap = {
            quickFilters: At,
            filters: Ws,
            slidingFilters: zr
          }, this.componentsMap = this.compareComponentsMap(z);
        }
        ngOnInit() {
          this.layout && this.initViewContainerRef(), this.component ? this.loadComponent() : this.componentRef && this.loadComponentRef();
        }
        ngOnChanges(z) {
          if (this.createdComponentRef && z.component && !z.component.firstChange) {
            const De = z.component.currentValue,
              rt = z.component.previousValue;
            De.componentId !== rt.componentId ? this.loadComponent() : (0, e.vZ)(De.widgets, rt.widgets) || (this.createdComponentRef.setInput("data", De), this.createdComponentRef.changeDetectorRef.detectChanges());
          }
        }
        initViewContainerRef() {
          if (this.viewContainerRef = this.adHost.viewContainerRef, this.wrapComponent) {
            const z = this.adHost.viewContainerRef.createComponent(this.wrapComponent);
            z.instance.data = this.layout, this.viewContainerRef = z.instance.viewContainerRef;
          }
        }
        loadComponent() {
          this.viewContainerRef.clear();
          try {
            if (!this.component) throw new Error("Component not found.");
            const z = this.viewContainerRef.createComponent(this.componentsMap[this.component.componentId]);
            z.instance.data = this.component, "runAction" in z.instance && (z.instance.runAction = this.runAction), "widgetsValueChanges" in z.instance && (z.instance.widgetsValueChanges = this.widgetsValueChanges), "groupingChanged" in z.instance && (z.instance.groupingChanged = this.groupingChanged), this.createdComponentRef = z;
          } catch {
            this.viewContainerRef.createEmbeddedView(this.error);
          }
        }
        loadComponentRef() {
          this.viewContainerRef.clear();
          try {
            if (!this.componentRef) throw new Error("ComponentRef not found.");
            this.viewContainerRef.createEmbeddedView(this.componentRef);
          } catch {
            this.viewContainerRef.createEmbeddedView(this.error);
          }
        }
        compareComponentsMap(z) {
          let De = {
            ...this.componentsMap
          };
          return z?.length && z.forEach(rt => {
            if (this.hasDuplicates(rt, De)) throw new Error("Has duplicates refillable components");
            De = {
              ...De,
              ...rt
            };
          }), De;
        }
        hasDuplicates(z, De) {
          const rt = [...Object.keys(z), ...Object.keys(De)];
          return rt.filter((Cn, po) => rt.indexOf(Cn) !== po).length > 0;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(es, 8), t.Y36(Jr, 8));
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-refillable-component"]],
        viewQuery: function (z, De) {
          if (1 & z && (t.Gf(Y.x6, 7), t.Gf(Ca, 7)), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.adHost = rt.first), t.iGM(rt = t.CRH()) && (De.error = rt.first);
          }
        },
        inputs: {
          layout: "layout",
          component: "component",
          componentRef: "componentRef"
        },
        outputs: {
          runAction: "runAction",
          widgetsValueChanges: "widgetsValueChanges",
          groupingChanged: "groupingChanged"
        },
        features: [t.TTD],
        decls: 3,
        vars: 0,
        consts: [["dpAdHost", ""], ["errorLoadComponent", ""]],
        template: function (z, De) {
          1 & z && (t.YNc(0, Ra, 0, 0, "ng-template", 0), t.YNc(1, Ta, 1, 0, "ng-template", null, 1, t.W1O));
        },
        dependencies: [Y.x6],
        changeDetection: 0
      }), xe;
    })(),
    Vc = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, Y.vB, _n, ha, ks]
      }), xe;
    })();
  function Ac(xe, et) {
    const z = new Blob([et], {
        type: "application/json"
      }),
      De = URL.createObjectURL(z),
      rt = document.createElement("a");
    rt.href = De, rt.download = xe, document.body.appendChild(rt), rt.click(), document.body.removeChild(rt), URL.revokeObjectURL(De);
  }
  var cu = i(34782),
    $a = i(50590),
    eu = i(39841),
    uu = i(39646),
    jl = i(19700);
  function Nc(xe, et) {
    1 & xe && t.GkF(0);
  }
  const Cl = function (xe) {
    return {
      $implicit: xe
    };
  };
  function lc(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "div", 4), t.YNc(2, Nc, 1, 0, "ng-container", 5), t.qZA(), t.BQk()), 2 & xe) {
      const z = et.$implicit,
        De = t.oxw();
      t.xp6(1), t.Udp("order", z.order), t.xp6(1), t.Q6J("ngTemplateOutlet", De.panelsContent)("ngTemplateOutletContext", t.VKq(4, Cl, z));
    }
  }
  function Bu(xe, et) {
    1 & xe && t.GkF(0);
  }
  function Sc(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 9), t.YNc(1, Bu, 1, 0, "ng-container", 5), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit,
        De = t.oxw();
      t.Udp("order", z.order), t.xp6(1), t.Q6J("ngTemplateOutlet", De.panelsContent)("ngTemplateOutletContext", t.VKq(4, Cl, z));
    }
  }
  function Vu(xe, et) {
    if (1 & xe && (t.TgZ(0, "div", 10), t.Hsn(1), t.qZA()), 2 & xe) {
      const z = t.oxw().$implicit;
      t.Udp("order", z.order);
    }
  }
  function ah(xe, et) {
    if (1 & xe && (t.ynx(0)(1, 6), t.YNc(2, Sc, 2, 6, "div", 7), t.YNc(3, Vu, 2, 2, "div", 8), t.BQk()()), 2 & xe) {
      const z = et.$implicit;
      t.xp6(1), t.Q6J("ngSwitch", z.type), t.xp6(1), t.Q6J("ngSwitchCase", "panel"), t.xp6(1), t.Q6J("ngSwitchCase", "table");
    }
  }
  function Qd(xe, et) {
    1 & xe && t.GkF(0);
  }
  function Md(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Qd, 1, 0, "ng-container", 5), t.BQk()), 2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngTemplateOutlet", z.auxiliaryContent)("ngTemplateOutletContext", t.VKq(2, Cl, z.viewData.auxiliaryPanel));
    }
  }
  const _u = [[["", "tableContent", ""]]],
    ju = ["[tableContent]"];
  let Xu = (() => {
      class xe {
        get horizontalVisiblePanels() {
          return this.viewData.horizontalPanels.sort((z, De) => z.order - De.order);
        }
        get verticalVisiblePanels() {
          return this.viewData.verticalPanels.sort((z, De) => z.order - De.order);
        }
        trackByLayoutIdOrderCode(z, De) {
          return `${De.layoutId}:${De.order}:${De.type}`;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-layout"]],
        inputs: {
          viewData: "viewData",
          panelsContent: "panelsContent",
          auxiliaryContent: "auxiliaryContent"
        },
        ngContentSelectors: ju,
        decls: 5,
        vars: 5,
        consts: [[1, "table-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "main-content"], [4, "ngIf"], [1, "vertical-panel"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "horizontal-panel", 3, "order", 4, "ngSwitchCase"], ["class", "horizontal-panel horizontal-panel--table", 3, "order", 4, "ngSwitchCase"], [1, "horizontal-panel"], [1, "horizontal-panel", "horizontal-panel--table"]],
        template: function (z, De) {
          1 & z && (t.F$t(_u), t.TgZ(0, "div", 0), t.YNc(1, lc, 3, 6, "ng-container", 1), t.TgZ(2, "div", 2), t.YNc(3, ah, 4, 3, "ng-container", 1), t.qZA()(), t.YNc(4, Md, 2, 4, "ng-container", 3)), 2 & z && (t.xp6(1), t.Q6J("ngForOf", De.verticalVisiblePanels)("ngForTrackBy", De.trackByLayoutIdOrderCode), t.xp6(2), t.Q6J("ngForOf", De.horizontalVisiblePanels)("ngForTrackBy", De.trackByLayoutIdOrderCode), t.xp6(1), t.Q6J("ngIf", De.viewData.auxiliaryPanel));
        },
        dependencies: [b.sg, b.O5, b.tP, b.RF, b.n9],
        styles: [".table-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.horizontal-panel--table[_ngcontent-%COMP%]{z-index:0;flex:1;overflow:auto}.vertical-panel[_ngcontent-%COMP%]{overflow:hidden}"],
        changeDetection: 0
      }), xe;
    })(),
    Xd = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez]
      }), xe;
    })(),
    Zu = (() => {
      class xe {
        transform(z) {
          const De = [],
            rt = [];
          return z.settingsColumns.forEach(Cn => {
            Cn.canMove ? rt.push(Cn) : De.push(Cn);
          }), {
            listName: z.listName,
            staticColumns: De,
            dynamicColumns: rt
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListTableSettingsView",
        type: xe,
        pure: !0
      }), xe;
    })(),
    kp = (() => {
      class xe {
        transform(z) {
          const De = [],
            rt = [];
          let Cn;
          return z.layouts.forEach(po => {
            const Rs = {
              type: this.determineLayoutType(po),
              positionType: po.isVertical ? "vertical" : "horizontal",
              layoutId: po.layoutId,
              order: po.order
            };
            "auxiliary" !== po.layoutId ? po.isVertical ? rt.push(Rs) : De.push(Rs) : Cn = Cn || Rs;
          }), {
            horizontalPanels: De.sort((po, dr) => po.order - dr.order),
            verticalPanels: rt.sort((po, dr) => po.order - dr.order),
            auxiliaryPanel: Cn
          };
        }
        determineLayoutType(z) {
          return ["table", "auxiliary"].includes(z.layoutId) ? z.layoutId : "panel";
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListViewToLayouts",
        type: xe,
        pure: !0
      }), xe;
    })(),
    hd = (() => {
      class xe {
        transform(z, De) {
          const rt = De.layouts.find(Cn => Cn.layoutId === z.layoutId);
          if (!rt) throw new Error(`Layout with id ${z.layoutId} not found in viewData`);
          return {
            componentId: rt.refillableComponentId,
            widgets: [...rt.widgets],
            settings: rt.settings
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListLayoutToRefillableComponent",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Td = (() => {
      class xe {
        transform(z) {
          return z.horizontalPanels.find(De => "table" === De.type);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListLayoutsToTableLayout",
        type: xe,
        pure: !0
      }), xe;
    })();
  const yl = ["tableColSettings"];
  function sd(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-list-table-virtual", 8), t.NdJ("goToPage", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onGoToPage(rt));
      })("refresh", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onReload());
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onScrolled());
      })("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onRowsSort(rt));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onClear());
      })("outsideClick", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onOutsideClick());
      })("runActionWithItem", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(3);
      t.Q6J("viewData", z.viewData.table);
    }
  }
  function tl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-list-table", 8), t.NdJ("goToPage", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onGoToPage(rt));
      })("refresh", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onReload());
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onScrolled());
      })("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onRowsSort(rt));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onClear());
      })("outsideClick", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onOutsideClick());
      })("runActionWithItem", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(3);
      t.Q6J("viewData", z.viewData.table);
    }
  }
  function Ie(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-refillable-component", 5), t.NdJ("groupingChanged", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onGroupingChanged(rt));
      }), t.qZA(), t.YNc(2, sd, 1, 1, "ng-template", null, 6, t.W1O), t.YNc(4, tl, 1, 1, "ng-template", null, 7, t.W1O), t.BQk();
    }
    if (2 & xe) {
      const z = et.ngIf,
        De = t.MAs(3),
        rt = t.MAs(5),
        Cn = t.oxw(2);
      t.xp6(1), t.Q6J("layout", z)("componentRef", null != Cn.viewData.table.tableOptions && Cn.viewData.table.tableOptions.useVirtualTable ? De : rt);
    }
  }
  function ft(xe, et) {
    if (1 & xe && (t.ynx(0), t.TgZ(1, "dp-universal-list-layout", 3)(2, "div", 4), t.YNc(3, Ie, 6, 2, "ng-container", 0), t.ALo(4, "universalListLayoutsToTableLayout"), t.qZA()(), t.BQk()), 2 & xe) {
      const z = et.ngIf;
      t.oxw();
      const De = t.MAs(3),
        rt = t.MAs(5);
      t.xp6(1), t.Q6J("viewData", z)("panelsContent", De)("auxiliaryContent", rt), t.xp6(2), t.Q6J("ngIf", t.lcZ(4, 4, z));
    }
  }
  function rn(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-refillable-component", 9), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      })("widgetsValueChanges", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onApplyFilterChanges(rt));
      })("groupingChanged", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onGroupingChanged(rt));
      }), t.ALo(1, "universalListLayoutToRefillableComponent"), t.qZA();
    }
    if (2 & xe) {
      const z = et.$implicit,
        De = t.oxw();
      t.Q6J("layout", z)("component", t.xi3(1, 2, z, De.viewData));
    }
  }
  function En(xe, et) {
    if (1 & xe && (t._UZ(0, "dp-universal-list-table-settings", 10, 11), t.ALo(2, "universalListTableSettingsView")), 2 & xe) {
      const z = t.oxw();
      t.Q6J("viewModel", t.lcZ(2, 1, z.viewData.table));
    }
  }
  let Kn = (() => {
      class xe {
        constructor() {
          this.rowsSort = new t.vpe(), this.runAction = new t.vpe(), this.changeFilter = new t.vpe(), this.scrolled = new t.vpe(), this.reload = new t.vpe(), this.goToPage = new t.vpe(), this.group = new t.vpe(), this.outsideClick = new t.vpe();
        }
        onReload() {
          this.reload.emit();
        }
        onGoToPage(z) {
          this.goToPage.emit(z);
        }
        onScrolled() {
          "SUCCESS" === this.viewData.table.status && this.viewData.table.total > this.viewData.table.items.length && this.scrolled.emit();
        }
        onRowsSort(z) {
          this.rowsSort.emit(z);
        }
        onOutsideClick() {
          this.outsideClick.emit();
        }
        onClear() {
          this.changeFilter.emit(this.viewData.initialFilterParams);
        }
        onGroupingChanged(z) {
          this.group.emit(z);
        }
        onRunAction(z) {
          "openTableColSettings" === z.actionName && this.tableColSettings && this.tableColSettings.onOpen(), "reloadTable" === z.actionName && this.onReload(), z.actionName.includes(jl.wZ) && this.onApplyFilterChanges(z.event), this.runAction.emit(z);
        }
        onApplyFilterChanges(z) {
          this.changeFilter.emit({
            ...this.viewData.initialFilterParams,
            ...this.viewData.currentFilterParams,
            ...z
          });
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-view"]],
        viewQuery: function (z, De) {
          if (1 & z && t.Gf(yl, 5), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
          }
        },
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          rowsSort: "rowsSort",
          runAction: "runAction",
          changeFilter: "changeFilter",
          scrolled: "scrolled",
          reload: "reload",
          goToPage: "goToPage",
          group: "group",
          outsideClick: "outsideClick"
        },
        decls: 6,
        vars: 3,
        consts: [[4, "ngIf"], ["panelsContent", ""], ["auxiliaryContent", ""], [3, "viewData", "panelsContent", "auxiliaryContent"], ["tableContent", "", 1, "table-content"], [3, "layout", "componentRef", "groupingChanged"], ["tableVirtual", ""], ["table", ""], [1, "table-component", 3, "viewData", "goToPage", "refresh", "scrolled", "rowsSort", "clearFilter", "outsideClick", "runActionWithItem"], [3, "layout", "component", "runAction", "widgetsValueChanges", "groupingChanged"], [3, "viewModel"], ["tableColSettings", ""]],
        template: function (z, De) {
          1 & z && (t.YNc(0, ft, 5, 6, "ng-container", 0), t.ALo(1, "universalListViewToLayouts"), t.YNc(2, rn, 2, 5, "ng-template", null, 1, t.W1O), t.YNc(4, En, 3, 3, "ng-template", null, 2, t.W1O)), 2 & z && t.Q6J("ngIf", t.lcZ(1, 1, De.viewData));
        },
        dependencies: [b.O5, Xu, Qa, Wn, ka, pa, Zu, kp, hd, Td],
        styles: [".table-content[_ngcontent-%COMP%]{height:100%}"],
        changeDetection: 0
      }), xe;
    })(),
    Uo = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({}), xe;
    })(),
    Vr = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, Xd, Vc, eo, Uo, hc, fl]
      }), xe;
    })();
  const ea = ["tableColSettings"];
  function Zs(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-title-expand-panel", 16), t.NdJ("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onChangeFilter(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.search)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function xl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 17), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.additionalInformation)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Ec(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 11), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.quickFilterLeft)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Ya(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 11), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.groupingRight)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Zl(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 20), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts[z.colFilterLayoutName])("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function ku(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-vertical-filter-panel-second", 18), t.NdJ("applyFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onApplyFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      }), t.YNc(1, Zl, 1, 3, "dp-universal-list-widget-container", 19), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  let mp = (() => {
      class xe {
        constructor() {
          this.rowsSort = new t.vpe(), this.runAction = new t.vpe(), this.changeFilter = new t.vpe(), this.scrolled = new t.vpe(), this.reload = new t.vpe(), this.group = new t.vpe(), this.colFilterLayoutName = Da;
        }
        ngOnChanges() {
          const z = Qo(this.viewData.layouts);
          z.length > 0 && (this.formGroupBuilder ? this.formGroupBuilder.updateControlsStatus(z) : (this.formGroupBuilder = new e.dC(z), this.initImmediatelyChanges(this.formGroupBuilder), this.initGroupChangesEvent()));
        }
        onRowsSort(z) {
          this.rowsSort.emit(z);
        }
        onRunAction(z) {
          "toggleExpansionPanel" === z.actionName && this.expansionPanel?.toggle(), "openTableColSettings" === z.actionName && this.tableColSettings && this.tableColSettings.onOpen(), this.runAction.emit(z);
        }
        onClear() {
          this.resetFormGroup();
        }
        onScrolled() {
          "SUCCESS" === this.viewData.table.status && this.viewData.table.total > this.viewData.table.items.length && this.scrolled.emit();
        }
        onChangeFilter(z) {
          this.changeFilter.emit({
            ...this.viewData.initialFilterParams,
            ...z
          }), this.formGroupBuilder?.apply();
        }
        onApplyFilterByWidgets(z) {
          this.formGroupBuilder && this.onChangeFilter({
            ...this.viewData.currentFilterParams,
            ...(0, y.Rf)(this.formGroupBuilder.getFormValueByTypes(["filter"]), z)
          });
        }
        onClearFilterByWidgets(z) {
          this.formGroupBuilder && this.formGroupBuilder.resetOnlyFieldsToInitial((0, y.qe)(z));
        }
        onReload() {
          this.reload.emit();
        }
        initImmediatelyChanges(z) {
          return z.getImmediatelyChanges().subscribe(De => {
            this.onChangeFilter(De);
          });
        }
        initGroupChangesEvent() {
          return this.formGroupBuilder?.groupByValueChanges().subscribe(z => {
            this.group.emit(z);
          });
        }
        resetFormGroup() {
          this.formGroupBuilder && this.formGroupBuilder.resetToInitial();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-alpha"]],
        viewQuery: function (z, De) {
          if (1 & z && (t.Gf(cr, 5), t.Gf(ea, 5)), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.expansionPanel = rt.first), t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
          }
        },
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          rowsSort: "rowsSort",
          runAction: "runAction",
          changeFilter: "changeFilter",
          scrolled: "scrolled",
          reload: "reload",
          group: "group"
        },
        features: [t.TTD],
        decls: 21,
        vars: 15,
        consts: [[1, "main-container"], [1, "main-container__header", "header-container"], ["lu-text", ""], ["class", "title-expand-panel title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter", 4, "ngIf"], [1, "right-section", "__right-section"], ["lu-button-icon", ""], ["icon", "refresh", 3, "size", "click"], ["class", "__additional-information", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [1, "main-content"], [1, "main-container-panel", "__panel"], [3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "runAction"], [3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], ["filterInCol", ""], [1, "title-expand-panel", "title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter"], [1, "__additional-information", 3, "viewData", "formGroupBuilder", "runAction"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          if (1 & z && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2), t._uU(3), t.qZA(), t.YNc(4, Zs, 1, 2, "dp-universal-list-title-expand-panel", 3), t.TgZ(5, "div", 4)(6, "button", 5)(7, "lu-svg-icon", 6), t.NdJ("click", function () {
            return De.onReload();
          }), t.qZA()(), t.YNc(8, xl, 1, 2, "dp-universal-list-widget-container", 7), t.qZA()(), t.TgZ(9, "div", 8)(10, "div", 9), t.YNc(11, Ec, 1, 2, "dp-universal-list-widget-container", 10), t.YNc(12, Ya, 1, 2, "dp-universal-list-widget-container", 10), t.qZA(), t.TgZ(13, "dp-universal-list-expansion-panel", 11), t.NdJ("runAction", function (Cn) {
            return De.onRunAction(Cn);
          }), t.ALo(14, "universalListExpansionPanelLayouts"), t.qZA(), t.TgZ(15, "dp-list-table", 12), t.NdJ("refresh", function () {
            return De.onReload();
          })("scrolled", function () {
            return De.onScrolled();
          })("rowsSort", function (Cn) {
            return De.onRowsSort(Cn);
          })("clearFilter", function () {
            return De.onClear();
          })("runActionWithItem", function (Cn) {
            return De.onRunAction(Cn);
          }), t.qZA(), t._UZ(16, "dp-universal-list-table-settings", 13, 14), t.ALo(18, "universalListTableSettingsView"), t.qZA()(), t.YNc(19, ku, 2, 1, "ng-template", null, 15, t.W1O)), 2 & z) {
            const rt = t.MAs(20);
            t.xp6(3), t.Oqu(De.viewData.title), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(3), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(3), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("viewData", t.lcZ(14, 11, De.viewData.layouts))("formGroupBuilder", De.formGroupBuilder), t.xp6(2), t.Q6J("viewData", De.viewData.table)("filterInColTemplate", rt), t.xp6(1), t.Q6J("viewModel", t.lcZ(18, 13, De.viewData.table));
          }
        },
        dependencies: [b.O5, f.k, I.NZ, L.q, wn, di, cr, mr, Wn, ka, jr, Zu],
        styles: ["[_nghost-%COMP%]{position:relative;display:flex;height:100%;overflow:hidden}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.main-container-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.header-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3);border-bottom:1px solid var(--lu-black-10)}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}.title-expand-panel[_ngcontent-%COMP%]{width:730px}.title-expand__panel[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2)}.right-section[_ngcontent-%COMP%]{display:flex}.__additional-information[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.__right-section[_ngcontent-%COMP%]{margin-left:auto}.__panel[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}"],
        changeDetection: 0
      }), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", [e.dC]), (0, oi.w6)("design:returntype", M.w0)], xe.prototype, "initImmediatelyChanges", null), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", []), (0, oi.w6)("design:returntype", Object)], xe.prototype, "initGroupChangesEvent", null), xe;
    })(),
    Ed = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, O.W1, f.o, I.aI, L.h, Ai, Gn, as, Yr, Uo, eo, hc]
      }), xe;
    })();
  const gp = ["tableColSettings"];
  function fd(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 12), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.beforeTitle)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function kn(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 12), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.afterTitle)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function nn(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 13)(1, "dp-universal-list-filter-tags", 14), t.NdJ("updateFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onSetFilter(rt));
      }), t.qZA()();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("viewData", z.viewData.quickFilter);
    }
  }
  function zt(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 17), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts[z.colFilterLayoutName])("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Jn(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-vertical-filter-panel-second", 15), t.NdJ("applyFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onApplyFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      }), t.YNc(1, zt, 1, 3, "dp-universal-list-widget-container", 16), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  let Do = (() => {
      class xe {
        constructor() {
          this.rowsSort = new t.vpe(), this.action = new t.vpe(), this.changeFilter = new t.vpe(), this.scrolled = new t.vpe(), this.reload = new t.vpe(), this.group = new t.vpe(), this.colFilterLayoutName = Da;
        }
        ngOnChanges() {
          const z = [...Qo(this.viewData.layouts), ...this.viewData.quickFilter.map(De => De.formGroupField)];
          z.length > 0 && (this.formGroupBuilder ? this.formGroupBuilder.updateControlsStatus(z) : (this.formGroupBuilder = new e.dC(z), this.initImmediatelyChanges(this.formGroupBuilder), this.initGroupChangesEvent()));
        }
        onSetFilter(z) {
          this.changeFilter.emit({
            ...this.viewData.currentFilterParams,
            ...z
          });
        }
        onApplyFilterByWidgets(z) {
          this.formGroupBuilder && this.onChangeFilter({
            ...this.viewData.currentFilterParams,
            ...(0, y.Rf)(this.formGroupBuilder.getFormValueByTypes(["filter"]), z)
          });
        }
        onClearFilterByWidgets(z) {
          this.formGroupBuilder && this.formGroupBuilder.resetOnlyFieldsToInitial((0, y.qe)(z));
        }
        onRowsSort(z) {
          this.rowsSort.emit(z);
        }
        onRunAction(z) {
          "openTableColSettings" === z.actionName && this.tableColSettings && this.tableColSettings.onOpen(), this.action.emit(z);
        }
        onClear() {
          this.resetFormGroup();
        }
        onScrolled() {
          "SUCCESS" === this.viewData.table.status && this.viewData.table.total > this.viewData.table.items.length && this.scrolled.emit();
        }
        onChangeFilter(z) {
          this.changeFilter.emit({
            ...this.viewData.initialFilterParams,
            ...z
          }), this.formGroupBuilder?.apply();
        }
        onReload() {
          this.reload.emit();
        }
        initImmediatelyChanges(z) {
          return z.getImmediatelyChanges().subscribe(De => {
            this.onChangeFilter(De);
          });
        }
        initGroupChangesEvent() {
          return this.formGroupBuilder?.groupByValueChanges().subscribe(z => {
            this.group.emit(z);
          });
        }
        resetFormGroup() {
          this.formGroupBuilder && this.formGroupBuilder.resetToInitial();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list-beta"]],
        viewQuery: function (z, De) {
          if (1 & z && t.Gf(gp, 5), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
          }
        },
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          rowsSort: "rowsSort",
          action: "action",
          changeFilter: "changeFilter",
          scrolled: "scrolled",
          reload: "reload",
          group: "group"
        },
        features: [t.TTD],
        decls: 16,
        vars: 9,
        consts: [[1, "main-container"], [1, "main-container__header", "header-container"], [1, "__before-title"], [3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], ["lu-text", ""], [1, "__after-title"], [1, "main-content"], ["class", "__panel", 4, "ngIf"], [3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], ["filterInCol", ""], [3, "viewData", "formGroupBuilder", "runAction"], [1, "__panel"], [3, "viewData", "updateFilter"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          if (1 & z && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), t.YNc(3, fd, 1, 2, "dp-universal-list-widget-container", 3), t.qZA(), t.TgZ(4, "h2", 4), t._uU(5), t.qZA(), t.TgZ(6, "div", 5), t.YNc(7, kn, 1, 2, "dp-universal-list-widget-container", 3), t.qZA()(), t.TgZ(8, "div", 6), t.YNc(9, nn, 2, 1, "div", 7), t.TgZ(10, "dp-list-table", 8), t.NdJ("refresh", function () {
            return De.onReload();
          })("scrolled", function () {
            return De.onScrolled();
          })("rowsSort", function (Cn) {
            return De.onRowsSort(Cn);
          })("clearFilter", function () {
            return De.onClear();
          })("runActionWithItem", function (Cn) {
            return De.onRunAction(Cn);
          }), t.qZA(), t._UZ(11, "dp-universal-list-table-settings", 9, 10), t.ALo(13, "universalListTableSettingsView"), t.qZA()(), t.YNc(14, Jn, 2, 1, "ng-template", null, 11, t.W1O)), 2 & z) {
            const rt = t.MAs(15);
            t.xp6(3), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(2), t.Oqu(De.viewData.title), t.xp6(2), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(2), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("viewData", De.viewData.table)("filterInColTemplate", rt), t.xp6(1), t.Q6J("viewModel", t.lcZ(13, 7, De.viewData.table));
          }
        },
        dependencies: [b.O5, I.NZ, ys, di, mr, Wn, ka, Zu],
        styles: ["[_nghost-%COMP%]{position:relative;display:flex;width:100vw;height:100%;overflow:hidden}.__before-title[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) / 2)}.__after-title[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2);margin-bottom:calc(var(--lu-base-gutter) / -4)}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.main-container__header[_ngcontent-%COMP%]{margin-top:var(--lu-base-gutter)}.main-container-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.header-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3)}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}.__panel[_ngcontent-%COMP%]{margin:0 0 var(--lu-base-gutter) calc(var(--lu-base-gutter) * 1.5)}"],
        changeDetection: 0
      }), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", [e.dC]), (0, oi.w6)("design:returntype", M.w0)], xe.prototype, "initImmediatelyChanges", null), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", []), (0, oi.w6)("design:returntype", Object)], xe.prototype, "initGroupChangesEvent", null), xe;
    })(),
    we = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, I.aI, Hs, Ai, Gn, Yr, Uo, eo, hc]
      }), xe;
    })(),
    Bt = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵdir = t.lG2({
        type: xe,
        selectors: [["", "dpPatientListLayoutHeader", ""]]
      }), xe;
    })();
  function ve(xe, et) {
    1 & xe && (t.TgZ(0, "div", 4), t.Hsn(1, 1), t.qZA());
  }
  const yt = ["*", [["", "dpPatientListLayoutHeader", ""]]],
    An = ["*", "[dpPatientListLayoutHeader]"];
  let Un = (() => {
      class xe {
        constructor() {
          this.tabs = [], this.isOpen = !0, this.toggleSideBarEmitter = new t.vpe();
        }
        onToggleSideBar(z) {
          this.toggleSideBarEmitter.emit(z);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-patient-list-layout"]],
        contentQueries: function (z, De, rt) {
          if (1 & z && t.Suo(rt, Bt, 5), 2 & z) {
            let Cn;
            t.iGM(Cn = t.CRH()) && (De.headerContent = Cn.first);
          }
        },
        inputs: {
          tabs: "tabs",
          isOpen: "isOpen"
        },
        outputs: {
          toggleSideBarEmitter: "toggleSideBarEmitter"
        },
        ngContentSelectors: An,
        decls: 5,
        vars: 3,
        consts: [[1, "main-container"], ["class", "main-container__header header-container", 4, "ngIf"], [1, "main-content"], [3, "tabs", "isOpen", "toggleSideBarEmitter"], [1, "main-container__header", "header-container"]],
        template: function (z, De) {
          1 & z && (t.F$t(yt), t.TgZ(0, "div", 0), t.YNc(1, ve, 2, 0, "div", 1), t.TgZ(2, "div", 2), t.Hsn(3), t.qZA()(), t.TgZ(4, "dp-filter-sidebar", 3), t.NdJ("toggleSideBarEmitter", function (Cn) {
            return De.onToggleSideBar(Cn);
          }), t.qZA()), 2 & z && (t.xp6(1), t.Q6J("ngIf", De.headerContent), t.xp6(3), t.Q6J("tabs", De.tabs)("isOpen", De.isOpen));
        },
        dependencies: [b.O5, j.eX],
        styles: ["[_nghost-%COMP%]{position:relative;display:flex;height:100%;overflow:hidden}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}.main-container__header[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * 2) 0}.main-container__panel[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) * 2)}.header-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:0 calc(var(--lu-base-gutter) * 3)}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}"],
        changeDetection: 0
      }), xe;
    })(),
    tr = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, j.EC]
      }), xe;
    })(),
    Gr = (() => {
      class xe {
        transform(z) {
          return {
            currentFilterParams: z.currentFilterParams,
            initialFilterParams: z.initialFilterParams,
            widgets: z.layouts.filterPanel
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListFilterPanelViewData",
        type: xe,
        pure: !0
      }), xe;
    })();
  const Vo = ["tableColSettings"];
  function ta(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 19), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.afterTitle)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function za(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-title-expand-panel", 20), t.NdJ("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onChangeFilter(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.search)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function cs(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 21), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.additionalInformation)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Gs(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 12), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.quickFilterLeft)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function du(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 12), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.groupingRight)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Ic(xe, et) {
    if (1 & xe && (t._UZ(0, "dp-filter-icon-counter", 23), t.ALo(1, "filterParamsCount")), 2 & xe) {
      const z = t.oxw(2);
      t.Q6J("selectedFiltersCount", t.xi3(1, 1, z.viewData.currentFilterParams, z.viewData.initialFilterParams));
    }
  }
  function Yu(xe, et) {
    if (1 & xe && t.YNc(0, Ic, 2, 4, "dp-filter-icon-counter", 22), 2 & xe) {
      const z = t.oxw();
      t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  function Dc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-filter", 25), t.NdJ("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onChangeFilter(rt));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw(2);
        return t.KtG(rt.onClearFilterByWidgets((null == rt.viewData.layouts.filterPanel ? null : rt.viewData.layouts.filterPanel.widgets) || []));
      }), t.ALo(1, "universalListFilterPanelViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", t.lcZ(1, 2, z.viewData))("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function ou(xe, et) {
    if (1 & xe && t.YNc(0, Dc, 2, 4, "dp-universal-list-filter", 24), 2 & xe) {
      const z = t.oxw();
      t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  function md(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 28), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts[z.colFilterLayoutName])("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function wh(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-vertical-filter-panel-second", 26), t.NdJ("applyFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onApplyFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      }), t.YNc(1, md, 1, 3, "dp-universal-list-widget-container", 27), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  let gd = (() => {
      class xe {
        constructor() {
          this.rowsSort = new t.vpe(), this.runAction = new t.vpe(), this.changeFilter = new t.vpe(), this.scrolled = new t.vpe(), this.reload = new t.vpe(), this.group = new t.vpe(), this.colFilterLayoutName = Da, this.tabs = [{
            id: "filters",
            titlePortalName: "filters-tab-title",
            contentPortalName: "filters-tab-content",
            dataTestRoleAttr: "filterTab"
          }];
        }
        ngOnChanges() {
          const z = Qo(this.viewData.layouts);
          z.length > 0 && (this.formGroupBuilder ? this.formGroupBuilder.updateControlsStatus(z) : (this.formGroupBuilder = new e.dC(z), this.initImmediatelyChanges(this.formGroupBuilder), this.initGroupChangesEvent()));
        }
        onRowsSort(z) {
          this.rowsSort.emit(z);
        }
        onRunAction(z) {
          "toggleExpansionPanel" === z.actionName && this.expansionPanel?.toggle(), "openTableColSettings" === z.actionName && this.tableColSettings && this.tableColSettings.onOpen(), this.runAction.emit(z);
        }
        onClear() {
          this.resetFormGroup();
        }
        onScrolled() {
          "SUCCESS" === this.viewData.table.status && this.viewData.table.total > this.viewData.table.items.length && this.scrolled.emit();
        }
        onChangeFilter(z) {
          this.changeFilter.emit({
            ...this.viewData.initialFilterParams,
            ...z
          }), this.formGroupBuilder?.apply();
        }
        onApplyFilterByWidgets(z) {
          this.formGroupBuilder && this.onChangeFilter({
            ...this.viewData.currentFilterParams,
            ...(0, y.Rf)(this.formGroupBuilder.getFormValueByTypes(["filter"]), z)
          });
        }
        onClearFilterByWidgets(z) {
          this.formGroupBuilder && this.formGroupBuilder.resetOnlyFieldsToInitial((0, y.qe)(z));
        }
        onReload() {
          this.reload.emit();
        }
        get portalTabs() {
          return [...this.tabs, ...(this.viewData.portalItems?.filter || [])];
        }
        initImmediatelyChanges(z) {
          return z.getImmediatelyChanges().subscribe(De => {
            this.onChangeFilter(De);
          });
        }
        initGroupChangesEvent() {
          return this.formGroupBuilder?.groupByValueChanges().subscribe(z => {
            this.group.emit(z);
          });
        }
        resetFormGroup() {
          this.formGroupBuilder && this.formGroupBuilder.resetToInitial();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-gamma"]],
        viewQuery: function (z, De) {
          if (1 & z && (t.Gf(cr, 5), t.Gf(Vo, 5)), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.expansionPanel = rt.first), t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
          }
        },
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          rowsSort: "rowsSort",
          runAction: "runAction",
          changeFilter: "changeFilter",
          scrolled: "scrolled",
          reload: "reload",
          group: "group"
        },
        features: [t.TTD],
        decls: 24,
        vars: 17,
        consts: [[3, "tabs"], ["dpPatientListLayoutHeader", ""], ["lu-text", ""], ["class", "title__after-panel", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], ["class", "title-expand-panel title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter", 4, "ngIf"], [1, "right-section", "__right-section"], ["lu-button-icon", ""], ["icon", "refresh", 3, "size", "click"], ["class", "__additional-information", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [1, "main-container-panel", "__panel"], [1, "main-container-panel-left"], [3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "runAction"], [3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], ["dpLayoutPortal", "filters-tab-title"], ["dpLayoutPortal", "filters-tab-content"], ["filterInCol", ""], [1, "title__after-panel", 3, "viewData", "formGroupBuilder", "runAction"], [1, "title-expand-panel", "title-expand__panel", 3, "viewData", "formGroupBuilder", "changeFilter"], [1, "__additional-information", 3, "viewData", "formGroupBuilder", "runAction"], [3, "selectedFiltersCount", 4, "ngIf"], [3, "selectedFiltersCount"], [3, "viewData", "formGroupBuilder", "changeFilter", "clearFilter", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "changeFilter", "clearFilter"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"]],
        template: function (z, De) {
          if (1 & z && (t.TgZ(0, "dp-patient-list-layout", 0), t.ynx(1, 1), t.TgZ(2, "h2", 2), t._uU(3), t.qZA(), t.YNc(4, ta, 1, 2, "dp-universal-list-widget-container", 3), t.YNc(5, za, 1, 2, "dp-universal-list-title-expand-panel", 4), t.TgZ(6, "div", 5)(7, "button", 6)(8, "lu-svg-icon", 7), t.NdJ("click", function () {
            return De.onReload();
          }), t.qZA()(), t.YNc(9, cs, 1, 2, "dp-universal-list-widget-container", 8), t.qZA(), t.BQk(), t.TgZ(10, "div", 9)(11, "div", 10), t.YNc(12, Gs, 1, 2, "dp-universal-list-widget-container", 11), t.qZA(), t.YNc(13, du, 1, 2, "dp-universal-list-widget-container", 11), t.qZA(), t.TgZ(14, "dp-universal-list-expansion-panel", 12), t.NdJ("runAction", function (Cn) {
            return De.onRunAction(Cn);
          }), t.ALo(15, "universalListExpansionPanelLayouts"), t.qZA(), t.TgZ(16, "dp-list-table", 13), t.NdJ("refresh", function () {
            return De.onReload();
          })("scrolled", function () {
            return De.onScrolled();
          })("rowsSort", function (Cn) {
            return De.onRowsSort(Cn);
          })("clearFilter", function () {
            return De.onClear();
          })("runActionWithItem", function (Cn) {
            return De.onRunAction(Cn);
          }), t.qZA(), t._UZ(17, "dp-universal-list-table-settings", 14, 15), t.ALo(19, "universalListTableSettingsView"), t.YNc(20, Yu, 1, 1, "ng-template", 16), t.YNc(21, ou, 1, 1, "ng-template", 17), t.qZA(), t.YNc(22, wh, 2, 1, "ng-template", null, 18, t.W1O)), 2 & z) {
            const rt = t.MAs(23);
            t.Q6J("tabs", De.portalTabs), t.xp6(3), t.Oqu(De.viewData.title), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder && De.viewData.layouts.search.widgets.length > 0), t.xp6(3), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(3), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder), t.xp6(1), t.Q6J("viewData", t.lcZ(15, 13, De.viewData.layouts))("formGroupBuilder", De.formGroupBuilder), t.xp6(2), t.Q6J("viewData", De.viewData.table)("filterInColTemplate", rt), t.xp6(1), t.Q6J("viewModel", t.lcZ(19, 15, De.viewData.table));
          }
        },
        dependencies: [b.O5, Un, Bt, j.S1, L.q, I.NZ, f.k, mo, wn, di, j.hO, cr, mr, Wn, ka, j.QQ, jr, Zu, Gr],
        styles: ["[_nghost-%COMP%]{display:block;position:relative;height:100%}.title-expand-panel[_ngcontent-%COMP%]{width:730px}.title-expand__panel[_ngcontent-%COMP%], .title__after-panel[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2)}.main-container-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.main-container-panel-left[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.__right-section[_ngcontent-%COMP%]{margin-left:auto}.right-section[_ngcontent-%COMP%]{display:flex}.right-section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:var(--lu-base-gutter)}.__panel[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) * 3) calc(var(--lu-base-gutter) * 2)}"],
        changeDetection: 0
      }), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", [e.dC]), (0, oi.w6)("design:returntype", M.w0)], xe.prototype, "initImmediatelyChanges", null), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", []), (0, oi.w6)("design:returntype", Object)], xe.prototype, "initGroupChangesEvent", null), xe;
    })(),
    Rp = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, tr, j.Pl, L.h, I.aI, O.W1, f.o, Xo, Ai, Gn, j.Ep, j.Ej, J.p, as, Yr, eo, Uo, hc]
      }), xe;
    })();
  const _d = ["tableColSettings"];
  function sf(xe, et) {
    if (1 & xe && t._UZ(0, "dp-universal-list-widget-container", 18), 2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts.afterTitle)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Vd(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 19), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts.quickFilterLeft)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function Mh(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 20), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts.quickFilterRight)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function _p(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 5)(1, "div", 6)(2, "h2", 7), t._uU(3), t.qZA(), t.YNc(4, sf, 1, 2, "dp-universal-list-widget-container", 8), t.YNc(5, Vd, 1, 2, "dp-universal-list-widget-container", 9), t.TgZ(6, "div", 10)(7, "button", 11)(8, "lu-svg-icon", 12), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onReload());
      }), t.qZA()(), t.YNc(9, Mh, 1, 2, "dp-universal-list-widget-container", 13), t.qZA()(), t.TgZ(10, "dp-universal-list-expansion-panel", 14), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.ALo(11, "universalListExpansionPanelLayouts"), t.qZA(), t.TgZ(12, "dp-list-table", 15), t.NdJ("refresh", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onReload());
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onScrolled());
      })("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRowsSort(rt));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClear());
      })("runActionWithItem", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA(), t._UZ(13, "dp-universal-list-table-settings", 16, 17), t.ALo(15, "universalListTableSettingsView"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(),
        De = t.MAs(2);
      t.xp6(3), t.Oqu(z.viewData.title), t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder), t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder), t.xp6(3), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder), t.xp6(1), t.Q6J("viewData", t.lcZ(11, 10, z.viewData.layouts))("formGroupBuilder", z.formGroupBuilder), t.xp6(2), t.Q6J("viewData", z.viewData.table)("filterInColTemplate", De), t.xp6(1), t.Q6J("viewModel", t.lcZ(15, 12, z.viewData.table));
    }
  }
  function qu(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 23), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2);
      t.Q6J("viewData", z.viewData.layouts[z.colFilterLayoutName])("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function af(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-vertical-filter-panel-second", 21), t.NdJ("applyFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onApplyFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      })("clearFilter", function () {
        t.CHM(z);
        const rt = t.oxw();
        return t.KtG(rt.onClearFilterByWidgets(rt.viewData.layouts[rt.colFilterLayoutName] ? rt.viewData.layouts[rt.colFilterLayoutName].widgets : []));
      }), t.YNc(1, qu, 1, 3, "dp-universal-list-widget-container", 22), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.xp6(1), t.Q6J("ngIf", z.formGroupBuilder);
    }
  }
  function Lc(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-widget-container", 24), t.NdJ("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw();
        return t.KtG(Cn.onRunAction(rt));
      }), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw();
      t.Q6J("viewData", z.viewData.layouts.filterPanel)("showLabels", !0)("formGroupBuilder", z.formGroupBuilder);
    }
  }
  function il(xe, et) {
    1 & xe && t._UZ(0, "lu-preloader", 25);
  }
  const vd = function () {
    return {
      title: "Фильтр",
      displayBorder: !1
    };
  };
  let ad = (() => {
      class xe {
        constructor() {
          this.rowsSort = new t.vpe(), this.runAction = new t.vpe(), this.changeFilter = new t.vpe(), this.scrolled = new t.vpe(), this.reload = new t.vpe(), this.group = new t.vpe(), this.colFilterLayoutName = Da;
        }
        ngOnChanges() {
          const z = Qo(this.viewData.layouts);
          z.length > 0 && (this.formGroupBuilder ? this.formGroupBuilder.updateControlsStatus(z) : (this.formGroupBuilder = new e.dC(z), this.initImmediatelyChanges(this.formGroupBuilder), this.initGroupChangesEvent()));
        }
        getFilterStatus() {
          return this.formGroupBuilder?.dirtyFilterValue ? "dirty" : Qi(this.viewData.layouts.filterPanel.widgets).some(z => !(0, m.Xy)(z.value, z.initialValue)) ? "changed" : "pristine";
        }
        onRowsSort(z) {
          this.rowsSort.emit(z);
        }
        onRunAction(z) {
          "toggleExpansionPanel" === z.actionName && this.expansionPanel?.toggle(), "openTableColSettings" === z.actionName && this.tableColSettings && this.tableColSettings.onOpen(), this.runAction.emit(z);
        }
        onClear() {
          this.resetFormGroup();
        }
        onScrolled() {
          "SUCCESS" === this.viewData.table.status && this.viewData.table.total > this.viewData.table.items.length && this.scrolled.emit();
        }
        onApplyFilter() {
          this.formGroupBuilder && this.onChangeFilter(this.formGroupBuilder.getFormValueByTypes(["filter"]));
        }
        onApplyFilterByWidgets(z) {
          this.formGroupBuilder && this.onChangeFilter({
            ...this.viewData.currentFilterParams,
            ...(0, y.Rf)(this.formGroupBuilder.getFormValueByTypes(["filter"]), z)
          });
        }
        onClearFilterByWidgets(z) {
          this.formGroupBuilder && this.formGroupBuilder.resetOnlyFieldsToInitial((0, y.qe)(z));
        }
        setWidgetControlToSelect(z) {
          z && this.formGroupBuilder && "formGroupField" in z && this.formGroupBuilder.getControlByField(z.formGroupField.field, z.formGroupField.type).setValue(!0);
        }
        onChangeFilter(z) {
          this.changeFilter.emit({
            ...this.viewData.initialFilterParams,
            ...z
          }), this.formGroupBuilder?.apply();
        }
        onReload() {
          this.reload.emit();
        }
        initImmediatelyChanges(z) {
          return z.getImmediatelyChanges().subscribe(De => {
            this.onChangeFilter(De);
          });
        }
        initGroupChangesEvent() {
          return this.formGroupBuilder?.groupByValueChanges().subscribe(z => {
            this.group.emit(z);
          });
        }
        resetFormGroup() {
          this.formGroupBuilder && this.formGroupBuilder.resetToInitial();
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-delta"]],
        viewQuery: function (z, De) {
          if (1 & z && (t.Gf(cr, 5), t.Gf(_d, 5)), 2 & z) {
            let rt;
            t.iGM(rt = t.CRH()) && (De.expansionPanel = rt.first), t.iGM(rt = t.CRH()) && (De.tableColSettings = rt.first);
          }
        },
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          rowsSort: "rowsSort",
          runAction: "runAction",
          changeFilter: "changeFilter",
          scrolled: "scrolled",
          reload: "reload",
          group: "group"
        },
        features: [t.TTD],
        decls: 7,
        vars: 7,
        consts: [["class", "table-section", 4, "ngIf", "ngIfElse"], ["filterInCol", ""], [1, "filter-section", 3, "options", "defaultPreset", "filterStatus", "applyFilter", "clearAll", "toDefaultFilter"], ["id", "filterPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["loading", ""], [1, "table-section"], [1, "head"], ["lu-text", ""], [3, "viewData", "formGroupBuilder", 4, "ngIf"], ["class", "__quick-filters-left", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [1, "right-section", "__right-section"], ["lu-button-icon", "", 1, "refresh-btn"], ["icon", "refresh", 3, "size", "click"], ["class", "__quick-filters-right", 3, "viewData", "formGroupBuilder", "runAction", 4, "ngIf"], [3, "viewData", "formGroupBuilder", "runAction"], [1, "table-component", 3, "viewData", "filterInColTemplate", "refresh", "scrolled", "rowsSort", "clearFilter", "runActionWithItem"], [3, "viewModel"], ["tableColSettings", ""], [3, "viewData", "formGroupBuilder"], [1, "__quick-filters-left", 3, "viewData", "formGroupBuilder", "runAction"], [1, "__quick-filters-right", 3, "viewData", "formGroupBuilder", "runAction"], ["title", "Отображение данных", 3, "applyFilter", "clearFilter"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction", 4, "ngIf"], ["id", "filterInColPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"], ["id", "filterPanelWidgets", 3, "viewData", "showLabels", "formGroupBuilder", "runAction"], [1, "preloader", "__preloader"]],
        template: function (z, De) {
          if (1 & z && (t.YNc(0, _p, 16, 14, "div", 0), t.YNc(1, af, 2, 1, "ng-template", null, 1, t.W1O), t.TgZ(3, "dp-universal-list-vertical-filter-panel", 2), t.NdJ("applyFilter", function () {
            return De.onApplyFilter();
          })("clearAll", function () {
            return De.onClearFilterByWidgets((null == De.viewData.layouts.filterPanel ? null : De.viewData.layouts.filterPanel.widgets) || []);
          })("toDefaultFilter", function (Cn) {
            return De.setWidgetControlToSelect(Cn);
          }), t.YNc(4, Lc, 1, 3, "dp-universal-list-widget-container", 3), t.qZA(), t.YNc(5, il, 1, 0, "ng-template", null, 4, t.W1O)), 2 & z) {
            const rt = t.MAs(6);
            t.Q6J("ngIf", De.formGroupBuilder)("ngIfElse", rt), t.xp6(3), t.Q6J("options", t.DdM(6, vd))("defaultPreset", De.viewData.defaultWidgetPreset)("filterStatus", De.getFilterStatus()), t.xp6(1), t.Q6J("ngIf", De.formGroupBuilder);
          }
        },
        dependencies: [b.O5, L.q, I.NZ, f.k, di, Ts, mr, h.d, cr, Wn, ka, jr, Zu],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;height:100%}.table-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:2;overflow:hidden}.filter-section[_ngcontent-%COMP%]{min-width:404px;flex-basis:404px}.right-section[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.table-component[_ngcontent-%COMP%]{overflow:auto}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:8px 24px;align-items:center}.__right-section[_ngcontent-%COMP%]{margin-left:auto}.__quick-filters-right[_ngcontent-%COMP%]{margin-left:8px}.__quick-filters-left[_ngcontent-%COMP%]{margin-left:24px}.preloader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"],
        changeDetection: 0
      }), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", [e.dC]), (0, oi.w6)("design:returntype", M.w0)], xe.prototype, "initImmediatelyChanges", null), (0, oi.gn)([(0, yo.k)(), (0, oi.w6)("design:type", Function), (0, oi.w6)("design:paramtypes", []), (0, oi.w6)("design:returntype", Object)], xe.prototype, "initGroupChangesEvent", null), xe;
    })(),
    ld = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        imports: [b.ez, L.h, I.aI, O.W1, f.o, Xo, Gn, sa, Yr, h.c, as, eo, Uo, hc]
      }), xe;
    })();
  var jd = i(8699);
  function Pu(xe, et) {
    return "table" === xe.type ? "table" : `widgetPanel:${et}`;
  }
  function Ha(xe, et) {
    return (0, e.YS)(et)(xe)[0];
  }
  function vu(xe, et) {
    return (0, e.Xu)(et)(xe);
  }
  function ep(xe, et) {
    const z = {};
    if (!xe.styles) return z;
    const De = xe.styles;
    return Object.keys(De).forEach(rt => {
      const Cn = vu(et, De[rt]);
      "" !== Cn && (z[rt] = Cn);
    }), z;
  }
  function Cd(xe, et) {
    return (xe.config.data?.layouts ?? []).filter(De => ja(De.layout)).map(De => ({
      [De.layout]: et.transform(xe, {
        layout: De.layout,
        basePadding: 8,
        direction: "vertical"
      })
    })).reduce((De, rt) => ({
      ...De,
      ...rt
    }), {});
  }
  function yd(xe, et) {
    const De = (xe.config.data?.layouts ?? []).find(rt => function As(xe) {
      return xe === Da;
    }(rt.layout));
    return De ? {
      [De.layout]: et.transform(xe, {
        layout: De.layout,
        basePadding: 8,
        direction: "vertical"
      })
    } : {};
  }
  function Yd(xe, et) {
    return function ch(xe) {
      return Boolean(xe);
    }(et?.rowDisabledInfo) || !function lh(xe) {
      return !!xe.context?.rowIdsWithRunningActions?.length && function Wd(xe) {
        return xe.historyRunningActions.some(et => (xe.context?.rowIdsWithRunningActions ?? []).includes(et.id));
      }(xe);
    }(xe) ? {
      rowDisableFn: et?.rowDisabledInfo?.disableFn,
      rowDisableReasonFn: et?.rowDisabledInfo?.disableReasonFn
    } : {
      rowDisableFn: z => function lf(xe, et) {
        return !!(et && xe.context && Array.isArray(xe.context.rowIdsWithRunningActions)) && xe.context.rowIdsWithRunningActions.includes(et) && Boolean(Up(xe.historyRunningActions, et));
      }(xe, (0, j.lF)(xe.config.data?.datasource.uniqueKeyPipe)(z)),
      rowDisableReasonFn: z => function Th(xe, et) {
        return xe && et && [...(xe?.toolbox ?? []), ...(xe?.contextMenu ?? [])].find(z => z.action === et)?.tooltipHint || "";
      }(et, Up(xe.historyRunningActions, (0, j.lF)(xe.config.data?.datasource.uniqueKeyPipe)(z))?.actionName)
    };
  }
  function Up(xe, et) {
    return xe.find(z => et && z.id === et);
  }
  let tp = (() => {
      class xe {
        constructor(z, De) {
          this.pipeMapperService = z, this.postProcessingMapperService = De;
        }
        transform(z) {
          const {
              state: De,
              storageData: rt
            } = z,
            Cn = new a.RO(De),
            po = De.config?.data ? new e.jC({
              configJson: De.config.data,
              items: De.list.data?.items ?? [],
              pipeMapperService: this.pipeMapperService,
              postProcessingMapperService: this.postProcessingMapperService,
              excludeParts: {
                ...De.excludeParts,
                excludeActions: [...(De.excludeParts.excludeActions || []), ...De.excludeActions]
              },
              queryParams: De.queryParams,
              context: De.context || {}
            }) : void 0,
            dr = this.getStorageColumnSettings(rt, po),
            Rs = po?.items ?? [],
            Aa = function Np(xe, et) {
              const De = new a.RO(et).getGroupingInfo();
              if (De?.rule && xe.length > 0) return function Zd(xe) {
                const et = function Cc(xe) {
                    const {
                      items: et,
                      options: z,
                      terminology: De
                    } = xe;
                    if (z.groupingOptions.terminologyDataSource) {
                      if (!De || 0 === De.length) throw new Error(`Terminology ${z.groupingOptions.terminologyDataSource} is empty`);
                      return function vp(xe, et, z) {
                        const De = new Map();
                        return z.forEach(rt => {
                          const Cn = {
                            displayName: vu(rt, et.groupingOptions.display || ""),
                            groupByKey: vu(rt, et.groupingOptions.groupByUniqKeyTemplate || et.groupingOptions.itemUniqKeyTemplate),
                            styles: ep(et, rt),
                            sortingValue: Ha(rt, et.groupingOptions?.sortPath || "")
                          };
                          De.set(Cn, []);
                        }), xe.forEach(rt => {
                          for (const Cn of De.keys()) if (vu(rt, et.groupingOptions.itemUniqKeyTemplate) === Cn.groupByKey) {
                            const dr = De.get(Cn) || [];
                            dr.push(rt), De.set(Cn, dr);
                            break;
                          }
                        }), De;
                      }(et, z, De);
                    }
                    return function Fp(xe, et) {
                      const z = new Map();
                      return xe.forEach(De => {
                        let rt;
                        for (const Cn of z.keys()) if (vu(De, et.groupingOptions.itemUniqKeyTemplate) === Cn.groupByKey) {
                          rt = Cn;
                          break;
                        }
                        if (rt) {
                          const Cn = z.get(rt) || [];
                          Cn.push(De), z.set(rt, Cn);
                        } else {
                          const Cn = {
                            displayName: vu(De, et.groupingOptions.display || ""),
                            groupByKey: vu(De, et.groupingOptions.groupByUniqKeyTemplate || et.groupingOptions.itemUniqKeyTemplate),
                            styles: ep(et, De),
                            sortingValue: Ha(De, et.groupingOptions?.sortPath || "")
                          };
                          z.set(Cn, [De]);
                        }
                      }), z;
                    }(et, z);
                  }(xe),
                  z = Array.from(et.entries()).map(([Cn, po]) => ({
                    key: Cn,
                    items: po
                  })),
                  {
                    options: De
                  } = xe,
                  rt = De.sortingOptions;
                if (rt) {
                  const Cn = "desc" === rt.direction ? -1 : 1,
                    po = Rs => "total" === rt.sortBy ? Rs.items.length : Rs.key.sortingValue,
                    dr = Rs => {
                      const Aa = String(Rs.key.groupByKey ?? "");
                      return rt.firstGroups?.includes(Aa) ? -1 : rt.lastGroups?.includes(Aa) ? 1 : 0;
                    };
                  z.sort((Rs, Aa) => {
                    const ml = dr(Rs),
                      Ba = dr(Aa);
                    if (ml !== Ba) return ml - Ba;
                    const Fl = po(Rs),
                      gl = po(Aa);
                    if (Fl === gl) return 0;
                    if (null === Fl) return 1;
                    if (null === gl) return -1;
                    if ("number" == typeof Fl) {
                      const Gl = gl ?? 0;
                      return Fl === Gl ? 0 : Fl < Gl ? -1 * Cn : 1 * Cn;
                    }
                    if ("string" == typeof Fl) {
                      const qa = Fl,
                        Gl = String(gl),
                        mc = qa.localeCompare(Gl);
                      return 0 === mc ? 0 : mc * Cn;
                    }
                    return 0;
                  });
                }
                return z.map(Cn => ({
                  labelId: `${Cn.key.groupByKey}_${Cn.items.length}`,
                  totalCounts: Cn.items.length,
                  children: Cn.items,
                  groupingLabel: {
                    chunks: [{
                      text: `${Cn.key.displayName} ${De.displayOptions?.hideCount ? "" : Cn.items.length}`.trim()
                    }],
                    cssStyle: Cn.key.styles
                  }
                }));
              }({
                items: xe,
                options: De.rule,
                terminology: De.terminology
              });
            }(Rs, De);
          return {
            status: De.list.status,
            items: Rs,
            groupingItems: Aa,
            isEmptyList: Aa ? !Aa.some(ml => ml.children.length > 0) : 0 === Rs.length,
            groupingType: this.getGroupingType(Cn),
            virtualLabels: this.getVirtualLabelsConfig(De.config.data?.view ?? []),
            disableColsSettings: this.disableColsSettings(De.config.data?.view ?? []),
            columns: this.compareColumnsWithSettings(dr, po?.columns),
            settingsColumns: dr,
            contextMenuItems: po?.contextMenu ?? [],
            toolbox: po?.toolbox ?? [],
            nonHiddenToolbox: this.hasNonHiddenToolbox(De.config.data?.view ?? []),
            individualRulesDisplayingActions: po?.individualRulesDisplayingActions ?? {},
            rowDblClickEventFn: po?.rowDblClickEventFn,
            rowClickEventFn: po?.rowClickEventFn,
            rowBackgroundColorFn: po?.rowBackgroundColorFn,
            ...Yd(De, po),
            sort: De.sort,
            total: De.list.data?.total ?? 0,
            listName: De.listName || "",
            widgets: Cn.getAllWidgetsMap(),
            widgetsKeysInColFilterPanel: Cn.getWidgetsKeysByLayout(Da),
            showTotalInQuery: po?.showTotalInQuery ?? !1,
            usePaginator: po?.usePaginator ?? !1,
            selectionOptions: this.getTableSelectedEvents(po?.selectionOptions, Cn.getAllWidgetsMap(), [...(De.excludeParts.excludeActions || []), ...De.excludeActions]),
            isApplyFilter: Cn.isApplyFilter,
            pageData: {
              total: De.list.data?.total ?? 0,
              paging: De.paging
            },
            tableOptions: po?.tableOptions,
            tableCellPaddingY: po?.tableCellPaddingY,
            selectedRowTechId: De.tableContext.selectedRowTechId
          };
        }
        getGroupingType(z) {
          const De = z.getGroupingInfo();
          return De ? De.rule.type : void 0;
        }
        getViewItem(z, De) {
          return z.find(rt => rt.type === De);
        }
        hasNonHiddenToolbox(z) {
          const De = this.getViewItem(z, "table");
          return !!De && (De.settings?.nonHiddenToolbox ?? !1);
        }
        getVirtualLabelsConfig(z) {
          const De = this.getViewItem(z, "table");
          return De?.settings?.virtualLabels?.enabled ? {
            direction: De.settings.virtualLabels.direction ?? "column",
            offsets: {
              top: De.settings.virtualLabels.offsets?.top ?? 40,
              bottom: De.settings.virtualLabels.offsets?.bottom ?? (De.settings.useVirtualTable ? 10 : 50)
            }
          } : null;
        }
        disableColsSettings(z) {
          const De = this.getViewItem(z, "table");
          return !De || !De.settings?.useTableColsSettings;
        }
        getStorageColumnSettings(z, De) {
          if (z && De) {
            const rt = z.map(dr => dr.columnId),
              Cn = De?.columns.map(dr => dr.id);
            if ((0, m.Xy)(rt.sort(), Cn.sort())) return z;
          }
          return De?.columns.map(rt => this.mapColumnToSettingsColumn(rt)) || [];
        }
        mapColumnToSettingsColumn(z) {
          return {
            columnId: z.id,
            columnName: this.getColumnName(z.head),
            isVisible: !z.hiddenByDefault,
            canMove: z.canMove,
            canHide: z.canHide
          };
        }
        getColumnName(z) {
          const De = [];
          return z.forEach(rt => {
            rt.header.forEach(Cn => {
              "icon" === Cn.headerType ? (Cn.tooltip || console.error(`Tooltip must be in icon header ${Cn.caption}`), De.push(Cn.tooltip)) : De.push(Cn.caption);
            });
          }), De.filter(Boolean).join("/ ");
        }
        compareColumnsWithSettings(z, De) {
          const rt = [];
          return z.forEach(Cn => {
            const po = De?.find(dr => dr.id === Cn.columnId);
            po && Cn.isVisible && rt.push(po);
          }), rt;
        }
        getTableSelectedEvents(z, De, rt) {
          if (z) return {
            ...z,
            eventWidgets: this.filterSelectedItemsEvents(z, De, rt)
          };
        }
        filterSelectedItemsEvents(z, De, rt) {
          if (!z) return;
          const Cn = [];
          return Object.entries(De).forEach(([po, dr]) => {
            "event" in dr && z.widgets.includes(po) && !rt?.includes(dr.event) && Cn.push(dr);
          }), Cn;
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(e.$x, 16), t.Y36(e.Tj, 16));
      }, xe.ɵpipe = t.Yjl({
        name: "universalListTableView",
        type: xe,
        pure: !0
      }), xe;
    })(),
    zd = (() => {
      class xe {
        transform(z, {
          layout: De,
          basePadding: rt,
          direction: Cn
        }) {
          const po = new a.RO(z);
          return {
            status: z.list.status,
            basePadding: rt,
            direction: Cn,
            widgets: po.getWidgetsByLayout(De)
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListWidgetContainerViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    wm = (() => {
      class xe {
        constructor(z, De) {
          this.table = new tp(z, De), this.widgetContainer = new zd();
        }
        transform(z) {
          const {
            state: De
          } = z;
          return {
            title: De.config.data?.title ?? "",
            initialFilterParams: De.initialParams,
            currentFilterParams: De.queryParams,
            table: this.table.transform(z),
            layouts: {
              afterTitle: this.widgetContainer.transform(De, {
                layout: "afterTitle",
                basePadding: 0,
                direction: "horizontal"
              }),
              search: this.widgetContainer.transform(De, {
                layout: "search",
                basePadding: 0,
                direction: "horizontal"
              }),
              additionalInformation: this.widgetContainer.transform(De, {
                layout: "additionalInformation",
                basePadding: 8,
                direction: "horizontal"
              }),
              quickFilterLeft: this.widgetContainer.transform(De, {
                layout: "quickFilter.left",
                basePadding: 8,
                direction: "horizontal"
              }),
              groupingRight: this.widgetContainer.transform(De, {
                layout: "grouping.right",
                basePadding: 8,
                direction: "horizontal"
              }),
              initial: this.widgetContainer.transform(De, {
                layout: "initial",
                basePadding: 0,
                direction: "horizontal"
              }),
              ...Cd(De, this.widgetContainer),
              ...yd(De, this.widgetContainer)
            }
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(e.$x, 16), t.Y36(e.Tj, 16));
      }, xe.ɵpipe = t.Yjl({
        name: "universalListAlphaViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Eh = (() => {
      class xe {
        transform(z) {
          const De = new a.RO(z),
            rt = De.getAvailableWidgets(),
            Cn = z.queryParams,
            po = De.getSettingByRenderInLayout("initial").map(dr => "field" in dr ? dr.field : void 0).filter(dr => void 0 !== dr);
          return Object.keys(rt)?.filter(dr => this.hasValue(Cn[dr]) && "query" === rt[dr].action && !po.includes(dr)).map(dr => ({
            label: rt[dr].label,
            formGroupField: De.getFormGroupFieldForWidgetSetting(rt[dr]),
            value: Cn[dr] ?? "",
            initialValue: z.initialParams[dr]
          }));
        }
        hasValue(z) {
          return (0, e.Fo)(z);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListFilterTagsViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Cp = (() => {
      class xe {
        constructor(z, De) {
          this.table = new tp(z, De), this.filterTags = new Eh(), this.widgetContainer = new zd();
        }
        transform(z) {
          const {
            state: De
          } = z;
          return {
            title: De.config.data?.title ?? "",
            initialFilterParams: De.initialParams,
            currentFilterParams: De.queryParams,
            table: this.table.transform(z),
            layouts: {
              beforeTitle: this.widgetContainer.transform(De, {
                layout: "beforeTitle",
                basePadding: 0,
                direction: "horizontal"
              }),
              afterTitle: this.widgetContainer.transform(De, {
                layout: "afterTitle",
                basePadding: 0,
                direction: "horizontal"
              }),
              ...yd(De, this.widgetContainer)
            },
            quickFilter: this.filterTags.transform(De)
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(e.$x, 16), t.Y36(e.Tj, 16));
      }, xe.ɵpipe = t.Yjl({
        name: "universalListBetaViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    jf = (() => {
      class xe {
        transform(z) {
          return new a.RO(z.state).getAllWidgets().find(rt => "formGroupField" in rt && !!rt.formGroupField.options?.defaultPreset);
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵpipe = t.Yjl({
        name: "universalListGetDefaultWidgetPreset",
        type: xe,
        pure: !0
      }), xe;
    })(),
    Dh = (() => {
      class xe {
        constructor(z, De) {
          this.table = new tp(z, De), this.widgetContainer = new zd(), this.getDefaultPresetWidget = new jf();
        }
        transform(z) {
          const {
            state: De
          } = z;
          return {
            title: De.config?.data?.title ?? "",
            initialFilterParams: De.initialParams,
            currentFilterParams: De.queryParams,
            defaultWidgetPreset: this.getDefaultPresetWidget.transform(z),
            table: this.table.transform(z),
            layouts: {
              afterTitle: this.widgetContainer.transform(De, {
                layout: "afterTitle",
                basePadding: 0,
                direction: "horizontal"
              }),
              initial: this.widgetContainer.transform(De, {
                layout: "initial",
                basePadding: 0,
                direction: "horizontal"
              }),
              quickFilterLeft: this.widgetContainer.transform(De, {
                layout: "quickFilter.left",
                basePadding: 8,
                direction: "horizontal"
              }),
              quickFilterRight: this.widgetContainer.transform(De, {
                layout: "quickFilter.right",
                basePadding: 8,
                direction: "horizontal"
              }),
              filterPanel: this.widgetContainer.transform(De, {
                layout: "filterPanel",
                basePadding: 24,
                direction: "vertical"
              }),
              ...Cd(De, this.widgetContainer),
              ...yd(De, this.widgetContainer)
            }
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(e.$x, 16), t.Y36(e.Tj, 16));
      }, xe.ɵpipe = t.Yjl({
        name: "universalListDeltaViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    cf = (() => {
      class xe {
        constructor(z, De, rt) {
          this.portalService = rt, this.table = new tp(z, De), this.widgetContainer = new zd();
        }
        transform(z) {
          const {
            state: De
          } = z;
          return {
            title: De.config?.data?.title ?? "",
            portalItems: this.portalService.getPortalItem(De.listName),
            initialFilterParams: De.initialParams,
            currentFilterParams: De.queryParams,
            table: this.table.transform(z),
            layouts: {
              afterTitle: this.widgetContainer.transform(De, {
                layout: "afterTitle",
                basePadding: 0,
                direction: "horizontal"
              }),
              initial: this.widgetContainer.transform(De, {
                layout: "initial",
                basePadding: 0,
                direction: "horizontal"
              }),
              search: this.widgetContainer.transform(De, {
                layout: "search",
                basePadding: 0,
                direction: "horizontal"
              }),
              quickFilterLeft: this.widgetContainer.transform(De, {
                layout: "quickFilter.left",
                basePadding: 8,
                direction: "horizontal"
              }),
              groupingRight: this.widgetContainer.transform(De, {
                layout: "grouping.right",
                basePadding: 8,
                direction: "horizontal"
              }),
              filterPanel: this.widgetContainer.transform(De, {
                layout: "filterPanel",
                basePadding: 24,
                direction: "vertical"
              }),
              additionalInformation: this.widgetContainer.transform(De, {
                layout: "additionalInformation",
                basePadding: 8,
                direction: "horizontal"
              }),
              ...Cd(De, this.widgetContainer),
              ...yd(De, this.widgetContainer)
            }
          };
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(e.$x, 16), t.Y36(e.Tj, 16), t.Y36(j.x_, 16));
      }, xe.ɵpipe = t.Yjl({
        name: "universalListGammaViewData",
        type: xe,
        pure: !0
      }), xe;
    })(),
    np = (() => {
      class xe {
        constructor(z, De) {
          this.table = new tp(z, De);
        }
        transform(z) {
          const {
            state: De
          } = z;
          return {
            initialFilterParams: De.initialParams,
            currentFilterParams: De.queryParams,
            table: this.table.transform(z),
            layouts: this.getLayouts(z.state)
          };
        }
        getLayouts(z) {
          const rt = new a.RO(z).getAllWidgetsMap();
          return [...this.getWidgetsPanels(z.config.data?.view ?? [], z.excludeParts, rt), ...this.getTable(z.config.data?.view ?? [])];
        }
        getWidgetsPanels(z, De, rt) {
          return z.filter(Cn => "table" !== Cn.type).map((Cn, po) => ({
            layoutId: Pu(Cn, po),
            refillableComponentId: Cn.type,
            isVertical: "quickFilters" !== Cn.type,
            widgets: Cn.widgets.filter(dr => !(De.excludeWidgets ?? []).includes(dr)).map(dr => rt[dr]),
            settings: Cn.settings,
            order: Number(Cn.position)
          }));
        }
        getTable(z) {
          const De = z.find(rt => "table" === rt.type);
          return De ? [{
            layoutId: Pu(De, 0),
            refillableComponentId: De.type,
            isVertical: !1,
            widgets: [],
            order: Number(De.position)
          }, De.settings?.useTableColsSettings ? {
            layoutId: "auxiliary",
            refillableComponentId: "tableColsSettings",
            isVertical: !1,
            widgets: [],
            order: 0
          } : void 0].filter(Boolean) : [];
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(e.$x, 16), t.Y36(e.Tj, 16));
      }, xe.ɵpipe = t.Yjl({
        name: "universalListViewViewData",
        type: xe,
        pure: !0
      }), xe;
    })();
  var Sl = (() => {
    return (xe = Sl || (Sl = {})).INIT = "INIT", xe.CHANGE_CONTEXT = "CHANGE_CONTEXT", xe.LOAD_LIST = "LOAD_LIST", xe.RELOAD = "RELOAD", xe.SILENT_RELOAD = "SILENT_RELOAD", xe.GROUP = "GROUP", xe.RUN_ACTION = "RUN_ACTION", xe.CLEAR_SELECTED_ROW = "CLEAR_SELECTED_ROW", Sl;
    var xe;
  })();
  let uf = (() => {
      class xe {
        constructor(z) {
          this.componentStore = z;
        }
        emit(z, De) {
          switch (z) {
            case Sl.INIT:
              this.componentStore.init({
                ...De
              });
              break;
            case Sl.CHANGE_CONTEXT:
              this.componentStore.updateContext({
                ...De
              });
              break;
            case Sl.LOAD_LIST:
              this.componentStore.load({
                ...De
              });
              break;
            case Sl.RUN_ACTION:
              this.componentStore.runAction({
                ...De
              });
              break;
            case Sl.RELOAD:
              this.componentStore.reload();
              break;
            case Sl.SILENT_RELOAD:
              this.componentStore.silentReload();
              break;
            case Sl.CLEAR_SELECTED_ROW:
              this.componentStore.clearSelectedRow();
              break;
            case Sl.GROUP:
              this.componentStore.group({
                ...De
              });
              break;
            default:
              console.error("ERROR: UniversalListControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", z);
          }
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.LFG(a.u1));
      }, xe.ɵprov = t.Yz7({
        token: xe,
        factory: xe.ɵfac
      }), xe;
    })(),
    Hp = (() => {
      class xe {
        constructor(z, De) {
          this.componentStore = z, this.universalListStorageContext = De;
        }
        init() {
          return this.componentStore.selectState.pipe((0, Ue.w)(z => (0, eu.a)([(0, uu.of)(z), this.universalListStorageContext.storageData$(z.listName || "")]).pipe((0, Ct.U)(([De, rt]) => ({
            state: De,
            storageData: rt
          })))));
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.LFG(a.u1), t.LFG(n));
      }, xe.ɵprov = t.Yz7({
        token: xe,
        factory: xe.ɵfac
      }), xe;
    })();
  function Zf(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-alpha", 6), t.NdJ("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.rowsSort(rt, Cn.state));
      })("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      })("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.onChangeQuery(rt, Cn.state));
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw().ngIf,
          Cn = t.oxw();
        return t.KtG(Cn.onScrolled(rt.state));
      })("reload", function () {
        t.CHM(z);
        const rt = t.oxw(2);
        return t.KtG(rt.onReload());
      })("group", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onGroup(rt));
      }), t.ALo(1, "universalListAlphaViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().ngIf;
      t.Q6J("viewData", t.lcZ(1, 1, z));
    }
  }
  function Yf(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-beta", 7), t.NdJ("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.rowsSort(rt, Cn.state));
      })("action", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      })("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.onChangeQuery(rt, Cn.state));
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw().ngIf,
          Cn = t.oxw();
        return t.KtG(Cn.onScrolled(rt.state));
      })("reload", function () {
        t.CHM(z);
        const rt = t.oxw(2);
        return t.KtG(rt.onReload());
      })("group", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onGroup(rt));
      }), t.ALo(1, "universalListBetaViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().ngIf;
      t.Q6J("viewData", t.lcZ(1, 1, z));
    }
  }
  function yp(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-gamma", 6), t.NdJ("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.rowsSort(rt, Cn.state));
      })("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      })("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.onChangeQuery(rt, Cn.state));
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw().ngIf,
          Cn = t.oxw();
        return t.KtG(Cn.onScrolled(rt.state));
      })("reload", function () {
        t.CHM(z);
        const rt = t.oxw(2);
        return t.KtG(rt.onReload());
      })("group", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onGroup(rt));
      }), t.ALo(1, "universalListGammaViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().ngIf;
      t.Q6J("viewData", t.lcZ(1, 1, z));
    }
  }
  function uh(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-delta", 6), t.NdJ("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.rowsSort(rt, Cn.state));
      })("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onRunAction(rt));
      })("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw().ngIf,
          po = t.oxw();
        return t.KtG(po.onChangeQuery(rt, Cn.state));
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw().ngIf,
          Cn = t.oxw();
        return t.KtG(Cn.onScrolled(rt.state));
      })("reload", function () {
        t.CHM(z);
        const rt = t.oxw(2);
        return t.KtG(rt.onReload());
      })("group", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2);
        return t.KtG(Cn.onGroup(rt));
      }), t.ALo(1, "universalListDeltaViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw().ngIf;
      t.Q6J("viewData", t.lcZ(1, 1, z));
    }
  }
  function cd(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "dp-universal-list-view", 11), t.NdJ("goToPage", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2).ngIf,
          po = t.oxw();
        return t.KtG(po.onGoToPage(rt, Cn.state));
      })("rowsSort", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2).ngIf,
          po = t.oxw();
        return t.KtG(po.rowsSort(rt, Cn.state));
      })("runAction", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onRunAction(rt));
      })("changeFilter", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(2).ngIf,
          po = t.oxw();
        return t.KtG(po.onChangeQuery(rt, Cn.state));
      })("scrolled", function () {
        t.CHM(z);
        const rt = t.oxw(2).ngIf,
          Cn = t.oxw();
        return t.KtG(Cn.onScrolled(rt.state));
      })("reload", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onReload());
      })("group", function (rt) {
        t.CHM(z);
        const Cn = t.oxw(3);
        return t.KtG(Cn.onGroup(rt));
      })("outsideClick", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onClearTableRow());
      }), t.ALo(1, "universalListViewViewData"), t.qZA();
    }
    if (2 & xe) {
      const z = t.oxw(2).ngIf;
      t.Q6J("viewData", t.lcZ(1, 1, z));
    }
  }
  function Bp(xe, et) {
    if (1 & xe) {
      const z = t.EpF();
      t.TgZ(0, "div", 12)(1, "lu-replacement-message", 13), t._UZ(2, "lu-svg-icon", 14), t.TgZ(3, "span", 15), t._uU(4, " Ошибка! Список временно недоступен. "), t.TgZ(5, "button", 16), t.NdJ("click", function () {
        t.CHM(z);
        const rt = t.oxw(3);
        return t.KtG(rt.onInit());
      }), t._uU(6, "Обновить"), t.qZA()()()();
    }
    2 & xe && (t.xp6(1), t.Q6J("type", "warning"), t.xp6(1), t.Q6J("size", 48));
  }
  function Vp(xe, et) {
    1 & xe && t.GkF(0);
  }
  function ed(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, Vp, 1, 0, "ng-container", 17), t.BQk()), 2 & xe) {
      t.oxw(3);
      const z = t.MAs(3);
      t.xp6(1), t.Q6J("ngTemplateOutlet", z);
    }
  }
  function dh(xe, et) {
    if (1 & xe && (t.ynx(0), t.YNc(1, cd, 2, 3, "dp-universal-list-view", 8), t.YNc(2, Bp, 7, 2, "div", 9), t.YNc(3, ed, 2, 1, "ng-container", 10), t.BQk()), 2 & xe) {
      const z = t.oxw().ngIf;
      t.xp6(1), t.Q6J("ngIf", "SUCCESS" === z.state.config.status), t.xp6(1), t.Q6J("ngIf", "FAILURE" === z.state.config.status), t.xp6(1), t.Q6J("ngIf", "PENDING" === z.state.list.status);
    }
  }
  function jp(xe, et) {
    if (1 & xe && (t.ynx(0)(1, 2), t.YNc(2, Zf, 2, 3, "dp-universal-list-alpha", 3), t.YNc(3, Yf, 2, 3, "dp-universal-list-beta", 4), t.YNc(4, yp, 2, 3, "dp-universal-gamma", 3), t.YNc(5, uh, 2, 3, "dp-universal-delta", 3), t.YNc(6, dh, 4, 3, "ng-container", 5), t.BQk()()), 2 & xe) {
      const z = et.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", null == z.state.config.data ? null : z.state.config.data.viewName), t.xp6(1), t.Q6J("ngSwitchCase", "alpha"), t.xp6(1), t.Q6J("ngSwitchCase", "beta"), t.xp6(1), t.Q6J("ngSwitchCase", "gamma"), t.xp6(1), t.Q6J("ngSwitchCase", "delta");
    }
  }
  function Xa(xe, et) {
    1 & xe && (t.TgZ(0, "div", 12)(1, "lu-preloader"), t._uU(2, "Подождите"), t.qZA()());
  }
  let Zp = (() => {
      class xe {
        constructor(z, De, rt) {
          this.modelService = z, this.controllerService = De, this.config = rt, this.runAction = new t.vpe(), this.runEvent = new t.vpe(), this.model$ = this.modelService.init().pipe((0, cu.d)(1));
        }
        ngOnInit() {
          this.onInit();
        }
        ngOnChanges(z) {
          if (!z.params.firstChange) if (this.config?.reinitListIfChangedParams) (0, e.vZ)(z.params.currentValue, z.params.previousValue) || this.onInit();else if (this.hasChanges(z.params.previousValue, z.params.currentValue)) {
            const De = z.params.currentValue,
              rt = {
                ...De.context,
                rowIdsWithRunningActions: De.rowIdsWithRunningActions ?? []
              };
            this.onContextChange(rt);
          }
        }
        hasChanges(z, De) {
          return !(0, m.Xy)(z?.context, De?.context) || !(0, m.Xy)(z?.rowIdsWithRunningActions, De?.rowIdsWithRunningActions);
        }
        rowsSort(z, De) {
          const rt = {
            queryParams: De.queryParams,
            pageIndex: 0,
            sort: z
          };
          this.controllerService.emit(Sl.LOAD_LIST, rt), this.runEvent.emit({
            event: "sort",
            ...rt
          });
        }
        onRunAction(z) {
          this.controllerService.emit(Sl.RUN_ACTION, z), this.runAction.emit(z);
        }
        onScrolled(z) {
          const De = {
            queryParams: z.queryParams,
            pageIndex: z.paging.pageIndex + 1,
            sort: z.sort
          };
          this.controllerService.emit(Sl.LOAD_LIST, De), this.runEvent.emit({
            event: "paging",
            ...De
          });
        }
        onGoToPage(z, De) {
          const rt = {
            queryParams: De.queryParams,
            pageIndex: z,
            sort: De.sort
          };
          this.controllerService.emit(Sl.LOAD_LIST, rt), this.runEvent.emit({
            event: "paging",
            ...rt
          });
        }
        setSort(z) {
          this.model$.pipe((0, $a.P)()).subscribe(De => {
            this.rowsSort(z, De.state);
          });
        }
        setFilter(z) {
          this.model$.pipe((0, $a.P)()).subscribe(De => {
            this.onChangeQuery(z, De.state);
          });
        }
        patchFilter(z) {
          this.model$.pipe((0, $a.P)()).subscribe(De => {
            this.onChangeQuery({
              ...De.state.initialParams,
              ...De.state.queryParams,
              ...z
            }, De.state);
          });
        }
        onChangeQuery(z, De) {
          const rt = {
            queryParams: z,
            pageIndex: 0,
            sort: De.sort
          };
          this.controllerService.emit(Sl.LOAD_LIST, rt), this.runEvent.emit({
            event: "load",
            ...rt
          });
        }
        onReload() {
          this.controllerService.emit(Sl.RELOAD, void 0), this.runEvent.emit({
            event: "reload"
          });
        }
        onSilentReload() {
          this.controllerService.emit(Sl.SILENT_RELOAD, void 0), this.runEvent.emit({
            event: "reload"
          });
        }
        onInit() {
          this.controllerService.emit(Sl.INIT, {
            ...this.params
          });
        }
        onGroup(z) {
          this.controllerService.emit(Sl.GROUP, z), this.runEvent.emit({
            event: "group",
            groupParams: z
          });
        }
        onContextChange(z) {
          this.controllerService.emit(Sl.CHANGE_CONTEXT, z);
        }
        onClearTableRow() {
          this.controllerService.emit(Sl.CLEAR_SELECTED_ROW, void 0);
        }
        download() {
          this.model$.pipe((0, Ft.q)(1)).subscribe(z => function fc(xe) {
            Ac("config.json", JSON.stringify(xe.config.data, null, 2)), Ac("list.json", JSON.stringify(xe.list.data, null, 2));
          }(z.state));
        }
      }
      return xe.ɵfac = function (z) {
        return new (z || xe)(t.Y36(Hp), t.Y36(uf), t.Y36(e.Cc, 8));
      }, xe.ɵcmp = t.Xpm({
        type: xe,
        selectors: [["dp-universal-list"]],
        inputs: {
          params: "params"
        },
        outputs: {
          runAction: "runAction",
          runEvent: "runEvent"
        },
        features: [t._Bn([uf, Hp, a.u1, e.$x, e.Tj]), t.TTD],
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "ngSwitch"], [3, "viewData", "rowsSort", "runAction", "changeFilter", "scrolled", "reload", "group", 4, "ngSwitchCase"], [3, "viewData", "rowsSort", "action", "changeFilter", "scrolled", "reload", "group", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "viewData", "rowsSort", "runAction", "changeFilter", "scrolled", "reload", "group"], [3, "viewData", "rowsSort", "action", "changeFilter", "scrolled", "reload", "group"], [3, "viewData", "goToPage", "rowsSort", "runAction", "changeFilter", "scrolled", "reload", "group", "outsideClick", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [4, "ngIf"], [3, "viewData", "goToPage", "rowsSort", "runAction", "changeFilter", "scrolled", "reload", "group", "outsideClick"], [1, "empty"], ["orientation", "vertical", 3, "type"], ["icon", "warning_line", 3, "size"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"], [4, "ngTemplateOutlet"]],
        template: function (z, De) {
          if (1 & z && (t.YNc(0, jp, 7, 5, "ng-container", 0), t.ALo(1, "async"), t.YNc(2, Xa, 3, 0, "ng-template", null, 1, t.W1O)), 2 & z) {
            const rt = t.MAs(3);
            t.Q6J("ngIf", t.lcZ(1, 2, De.model$))("ngIfElse", rt);
          }
        },
        dependencies: [b.O5, b.tP, b.RF, b.n9, b.ED, L.q, ke.dj, h.d, O.mc, mp, Do, gd, ad, Kn, b.Ov, wm, Cp, Dh, cf, np],
        styles: ["[_nghost-%COMP%]{display:block;position:relative;height:100%}.empty[_ngcontent-%COMP%]{display:flex;height:100%;justify-content:center;align-items:center;overflow:hidden}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), xe;
    })(),
    Yp = (() => {
      class xe {}
      return xe.ɵfac = function (z) {
        return new (z || xe)();
      }, xe.ɵmod = t.oAB({
        type: xe
      }), xe.ɵinj = t.cJS({
        providers: [{
          provide: jd.xI,
          useClass: jd.TF
        }, n],
        imports: [b.ez, L.h, ke.M0, h.c, O.W1, Ed, we, Rp, ld, a.ht, Vr, j.Ej]
      }), xe;
    })();
});
