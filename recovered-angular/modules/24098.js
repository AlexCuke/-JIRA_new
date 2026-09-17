// Extracted from main; webpack module 24098. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    xd: () => G,
    x0: () => q,
    N7: () => Re,
    mF: () => pe,
    Cl: () => Ft,
    yU: () => ye,
    rL: () => n
  });
  var t = i(21281),
    e = i(94650),
    a = i(77579),
    m = i(39646),
    d = i(69751),
    M = i(54968),
    b = i(66406),
    A = i(53101),
    N = i(50727),
    I = i(45191),
    O = i(71884),
    L = i(34986),
    C = i(54482),
    v = i(38421),
    f = i(25403),
    h = i(82805);
  function x(Et, Ue = L.P) {
    return function E(Et) {
      return (0, C.e)((Ue, Me) => {
        let Ke = !1,
          Ze = null,
          Ee = null,
          je = !1;
        const Mt = () => {
            if (Ee?.unsubscribe(), Ee = null, Ke) {
              Ke = !1;
              const Xt = Ze;
              Ze = null, Me.next(Xt);
            }
            je && Me.complete();
          },
          Je = () => {
            Ee = null, je && Me.complete();
          };
        Ue.subscribe(new f.Q(Me, Xt => {
          Ke = !0, Ze = Xt, Ee || (0, v.Xf)(Et(Xt)).subscribe(Ee = new f.Q(Me, Mt, Je));
        }, () => {
          je = !0, (!Ke || !Ee || Ee.closed) && Me.complete();
        }));
      });
    }(() => (0, h.H)(Et, Ue));
  }
  var u = i(39300),
    T = i(82722),
    R = i(68675),
    B = i(11520),
    y = i(63900),
    j = i(34782),
    W = i(83353),
    F = i(36895),
    Le = i(40445),
    ke = i(95017);
  const J = ["contentWrapper"],
    fe = ["*"],
    ye = new e.OlP("VIRTUAL_SCROLL_STRATEGY");
  class ae {
    constructor(Ue, Me, Ke) {
      this._scrolledIndexChange = new a.x(), this.scrolledIndexChange = this._scrolledIndexChange.pipe((0, O.x)()), this._viewport = null, this._itemSize = Ue, this._minBufferPx = Me, this._maxBufferPx = Ke;
    }
    attach(Ue) {
      this._viewport = Ue, this._updateTotalContentSize(), this._updateRenderedRange();
    }
    detach() {
      this._scrolledIndexChange.complete(), this._viewport = null;
    }
    updateItemAndBufferSize(Ue, Me, Ke) {
      this._itemSize = Ue, this._minBufferPx = Me, this._maxBufferPx = Ke, this._updateTotalContentSize(), this._updateRenderedRange();
    }
    onContentScrolled() {
      this._updateRenderedRange();
    }
    onDataLengthChanged() {
      this._updateTotalContentSize(), this._updateRenderedRange();
    }
    onContentRendered() {}
    onRenderedOffsetChanged() {}
    scrollToIndex(Ue, Me) {
      this._viewport && this._viewport.scrollToOffset(Ue * this._itemSize, Me);
    }
    _updateTotalContentSize() {
      this._viewport && this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    _updateRenderedRange() {
      if (!this._viewport) return;
      const Ue = this._viewport.getRenderedRange(),
        Me = {
          start: Ue.start,
          end: Ue.end
        },
        Ke = this._viewport.getViewportSize(),
        Ze = this._viewport.getDataLength();
      let Ee = this._viewport.measureScrollOffset(),
        je = this._itemSize > 0 ? Ee / this._itemSize : 0;
      if (Me.end > Ze) {
        const Je = Math.ceil(Ke / this._itemSize),
          Xt = Math.max(0, Math.min(je, Ze - Je));
        je != Xt && (je = Xt, Ee = Xt * this._itemSize, Me.start = Math.floor(je)), Me.end = Math.max(0, Math.min(Ze, Me.start + Je));
      }
      const Mt = Ee - Me.start * this._itemSize;
      if (Mt < this._minBufferPx && 0 != Me.start) {
        const Je = Math.ceil((this._maxBufferPx - Mt) / this._itemSize);
        Me.start = Math.max(0, Me.start - Je), Me.end = Math.min(Ze, Math.ceil(je + (Ke + this._minBufferPx) / this._itemSize));
      } else {
        const Je = Me.end * this._itemSize - (Ee + Ke);
        if (Je < this._minBufferPx && Me.end != Ze) {
          const Xt = Math.ceil((this._maxBufferPx - Je) / this._itemSize);
          Xt > 0 && (Me.end = Math.min(Ze, Me.end + Xt), Me.start = Math.max(0, Math.floor(je - this._minBufferPx / this._itemSize)));
        }
      }
      this._viewport.setRenderedRange(Me), this._viewport.setRenderedContentOffset(this._itemSize * Me.start), this._scrolledIndexChange.next(Math.floor(je));
    }
  }
  function Y(Et) {
    return Et._scrollStrategy;
  }
  let G = (() => {
      class Et {
        constructor() {
          this._itemSize = 20, this._minBufferPx = 100, this._maxBufferPx = 200, this._scrollStrategy = new ae(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        get itemSize() {
          return this._itemSize;
        }
        set itemSize(Me) {
          this._itemSize = (0, t.su)(Me);
        }
        get minBufferPx() {
          return this._minBufferPx;
        }
        set minBufferPx(Me) {
          this._minBufferPx = (0, t.su)(Me);
        }
        get maxBufferPx() {
          return this._maxBufferPx;
        }
        set maxBufferPx(Me) {
          this._maxBufferPx = (0, t.su)(Me);
        }
        ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵdir = e.lG2({
        type: Et,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        standalone: !0,
        features: [e._Bn([{
          provide: ye,
          useFactory: Y,
          deps: [(0, e.Gpc)(() => Et)]
        }]), e.TTD]
      }), Et;
    })(),
    pe = (() => {
      class Et {
        constructor(Me, Ke, Ze) {
          this._ngZone = Me, this._platform = Ke, this._scrolled = new a.x(), this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map(), this._document = Ze;
        }
        register(Me) {
          this.scrollContainers.has(Me) || this.scrollContainers.set(Me, Me.elementScrolled().subscribe(() => this._scrolled.next(Me)));
        }
        deregister(Me) {
          const Ke = this.scrollContainers.get(Me);
          Ke && (Ke.unsubscribe(), this.scrollContainers.delete(Me));
        }
        scrolled(Me = 20) {
          return this._platform.isBrowser ? new d.y(Ke => {
            this._globalSubscription || this._addGlobalListener();
            const Ze = Me > 0 ? this._scrolled.pipe(x(Me)).subscribe(Ke) : this._scrolled.subscribe(Ke);
            return this._scrolledCount++, () => {
              Ze.unsubscribe(), this._scrolledCount--, this._scrolledCount || this._removeGlobalListener();
            };
          }) : (0, m.of)();
        }
        ngOnDestroy() {
          this._removeGlobalListener(), this.scrollContainers.forEach((Me, Ke) => this.deregister(Ke)), this._scrolled.complete();
        }
        ancestorScrolled(Me, Ke) {
          const Ze = this.getAncestorScrollContainers(Me);
          return this.scrolled(Ke).pipe((0, u.h)(Ee => !Ee || Ze.indexOf(Ee) > -1));
        }
        getAncestorScrollContainers(Me) {
          const Ke = [];
          return this.scrollContainers.forEach((Ze, Ee) => {
            this._scrollableContainsElement(Ee, Me) && Ke.push(Ee);
          }), Ke;
        }
        _getWindow() {
          return this._document.defaultView || window;
        }
        _scrollableContainsElement(Me, Ke) {
          let Ze = (0, t.fI)(Ke),
            Ee = Me.getElementRef().nativeElement;
          do {
            if (Ze == Ee) return !0;
          } while (Ze = Ze.parentElement);
          return !1;
        }
        _addGlobalListener() {
          this._globalSubscription = this._ngZone.runOutsideAngular(() => {
            const Me = this._getWindow();
            return (0, M.R)(Me.document, "scroll").subscribe(() => this._scrolled.next());
          });
        }
        _removeGlobalListener() {
          this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null);
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(e.LFG(e.R0b), e.LFG(W.t4), e.LFG(F.K0, 8));
      }, Et.ɵprov = e.Yz7({
        token: Et,
        factory: Et.ɵfac,
        providedIn: "root"
      }), Et;
    })(),
    be = (() => {
      class Et {
        constructor(Me, Ke, Ze, Ee) {
          this.elementRef = Me, this.scrollDispatcher = Ke, this.ngZone = Ze, this.dir = Ee, this._destroyed = new a.x(), this._elementScrolled = new d.y(je => this.ngZone.runOutsideAngular(() => (0, M.R)(this.elementRef.nativeElement, "scroll").pipe((0, T.R)(this._destroyed)).subscribe(je)));
        }
        ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        ngOnDestroy() {
          this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete();
        }
        elementScrolled() {
          return this._elementScrolled;
        }
        getElementRef() {
          return this.elementRef;
        }
        scrollTo(Me) {
          const Ke = this.elementRef.nativeElement,
            Ze = this.dir && "rtl" == this.dir.value;
          null == Me.left && (Me.left = Ze ? Me.end : Me.start), null == Me.right && (Me.right = Ze ? Me.start : Me.end), null != Me.bottom && (Me.top = Ke.scrollHeight - Ke.clientHeight - Me.bottom), Ze && 0 != (0, W._i)() ? (null != Me.left && (Me.right = Ke.scrollWidth - Ke.clientWidth - Me.left), 2 == (0, W._i)() ? Me.left = Me.right : 1 == (0, W._i)() && (Me.left = Me.right ? -Me.right : Me.right)) : null != Me.right && (Me.left = Ke.scrollWidth - Ke.clientWidth - Me.right), this._applyScrollToOptions(Me);
        }
        _applyScrollToOptions(Me) {
          const Ke = this.elementRef.nativeElement;
          (0, W.Mq)() ? Ke.scrollTo(Me) : (null != Me.top && (Ke.scrollTop = Me.top), null != Me.left && (Ke.scrollLeft = Me.left));
        }
        measureScrollOffset(Me) {
          const Ke = "left",
            Ee = this.elementRef.nativeElement;
          if ("top" == Me) return Ee.scrollTop;
          if ("bottom" == Me) return Ee.scrollHeight - Ee.clientHeight - Ee.scrollTop;
          const je = this.dir && "rtl" == this.dir.value;
          return "start" == Me ? Me = je ? "right" : Ke : "end" == Me && (Me = je ? Ke : "right"), je && 2 == (0, W._i)() ? Me == Ke ? Ee.scrollWidth - Ee.clientWidth - Ee.scrollLeft : Ee.scrollLeft : je && 1 == (0, W._i)() ? Me == Ke ? Ee.scrollLeft + Ee.scrollWidth - Ee.clientWidth : -Ee.scrollLeft : Me == Ke ? Ee.scrollLeft : Ee.scrollWidth - Ee.clientWidth - Ee.scrollLeft;
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(e.Y36(e.SBq), e.Y36(pe), e.Y36(e.R0b), e.Y36(Le.Is, 8));
      }, Et.ɵdir = e.lG2({
        type: Et,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
        standalone: !0
      }), Et;
    })(),
    n = (() => {
      class Et {
        constructor(Me, Ke, Ze) {
          this._platform = Me, this._change = new a.x(), this._changeListener = Ee => {
            this._change.next(Ee);
          }, this._document = Ze, Ke.runOutsideAngular(() => {
            if (Me.isBrowser) {
              const Ee = this._getWindow();
              Ee.addEventListener("resize", this._changeListener), Ee.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => this._viewportSize = null);
          });
        }
        ngOnDestroy() {
          if (this._platform.isBrowser) {
            const Me = this._getWindow();
            Me.removeEventListener("resize", this._changeListener), Me.removeEventListener("orientationchange", this._changeListener);
          }
          this._change.complete();
        }
        getViewportSize() {
          this._viewportSize || this._updateViewportSize();
          const Me = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          };
          return this._platform.isBrowser || (this._viewportSize = null), Me;
        }
        getViewportRect() {
          const Me = this.getViewportScrollPosition(),
            {
              width: Ke,
              height: Ze
            } = this.getViewportSize();
          return {
            top: Me.top,
            left: Me.left,
            bottom: Me.top + Ze,
            right: Me.left + Ke,
            height: Ze,
            width: Ke
          };
        }
        getViewportScrollPosition() {
          if (!this._platform.isBrowser) return {
            top: 0,
            left: 0
          };
          const Me = this._document,
            Ke = this._getWindow(),
            Ze = Me.documentElement,
            Ee = Ze.getBoundingClientRect();
          return {
            top: -Ee.top || Me.body.scrollTop || Ke.scrollY || Ze.scrollTop || 0,
            left: -Ee.left || Me.body.scrollLeft || Ke.scrollX || Ze.scrollLeft || 0
          };
        }
        change(Me = 20) {
          return Me > 0 ? this._change.pipe(x(Me)) : this._change;
        }
        _getWindow() {
          return this._document.defaultView || window;
        }
        _updateViewportSize() {
          const Me = this._getWindow();
          this._viewportSize = this._platform.isBrowser ? {
            width: Me.innerWidth,
            height: Me.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(e.LFG(W.t4), e.LFG(e.R0b), e.LFG(F.K0, 8));
      }, Et.ɵprov = e.Yz7({
        token: Et,
        factory: Et.ɵfac,
        providedIn: "root"
      }), Et;
    })();
  const Se = new e.OlP("VIRTUAL_SCROLLABLE");
  let qe = (() => {
    class Et extends be {
      constructor(Me, Ke, Ze, Ee) {
        super(Me, Ke, Ze, Ee);
      }
      measureViewportSize(Me) {
        const Ke = this.elementRef.nativeElement;
        return "horizontal" === Me ? Ke.clientWidth : Ke.clientHeight;
      }
    }
    return Et.ɵfac = function (Me) {
      return new (Me || Et)(e.Y36(e.SBq), e.Y36(pe), e.Y36(e.R0b), e.Y36(Le.Is, 8));
    }, Et.ɵdir = e.lG2({
      type: Et,
      features: [e.qOj]
    }), Et;
  })();
  const We = typeof requestAnimationFrame < "u" ? b.Z : A.E;
  let Re = (() => {
    class Et extends qe {
      get orientation() {
        return this._orientation;
      }
      set orientation(Me) {
        this._orientation !== Me && (this._orientation = Me, this._calculateSpacerSize());
      }
      get appendOnly() {
        return this._appendOnly;
      }
      set appendOnly(Me) {
        this._appendOnly = (0, t.Ig)(Me);
      }
      constructor(Me, Ke, Ze, Ee, je, Mt, Je, Xt) {
        super(Me, Mt, Ze, je), this.elementRef = Me, this._changeDetectorRef = Ke, this._scrollStrategy = Ee, this.scrollable = Xt, this._platform = (0, e.f3M)(W.t4), this._detachedSubject = new a.x(), this._renderedRangeSubject = new a.x(), this._orientation = "vertical", this._appendOnly = !1, this.scrolledIndexChange = new d.y(Nn => this._scrollStrategy.scrolledIndexChange.subscribe(Pi => Promise.resolve().then(() => this.ngZone.run(() => Nn.next(Pi))))), this.renderedRangeStream = this._renderedRangeSubject, this._totalContentSize = 0, this._totalContentWidth = "", this._totalContentHeight = "", this._renderedRange = {
          start: 0,
          end: 0
        }, this._dataLength = 0, this._viewportSize = 0, this._renderedContentOffset = 0, this._renderedContentOffsetNeedsRewrite = !1, this._isChangeDetectionPending = !1, this._runAfterChangeDetection = [], this._viewportChanges = N.w0.EMPTY, this._viewportChanges = Je.change().subscribe(() => {
          this.checkViewportSize();
        }), this.scrollable || (this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"), this.scrollable = this);
      }
      ngOnInit() {
        this._platform.isBrowser && (this.scrollable === this && super.ngOnInit(), this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._measureViewportSize(), this._scrollStrategy.attach(this), this.scrollable.elementScrolled().pipe((0, R.O)(null), x(0, We)).subscribe(() => this._scrollStrategy.onContentScrolled()), this._markChangeDetectionNeeded();
        })));
      }
      ngOnDestroy() {
        this.detach(), this._scrollStrategy.detach(), this._renderedRangeSubject.complete(), this._detachedSubject.complete(), this._viewportChanges.unsubscribe(), super.ngOnDestroy();
      }
      attach(Me) {
        this.ngZone.runOutsideAngular(() => {
          this._forOf = Me, this._forOf.dataStream.pipe((0, T.R)(this._detachedSubject)).subscribe(Ke => {
            const Ze = Ke.length;
            Ze !== this._dataLength && (this._dataLength = Ze, this._scrollStrategy.onDataLengthChanged()), this._doChangeDetection();
          });
        });
      }
      detach() {
        this._forOf = null, this._detachedSubject.next();
      }
      getDataLength() {
        return this._dataLength;
      }
      getViewportSize() {
        return this._viewportSize;
      }
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(Me) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[Me];
      }
      setTotalContentSize(Me) {
        this._totalContentSize !== Me && (this._totalContentSize = Me, this._calculateSpacerSize(), this._markChangeDetectionNeeded());
      }
      setRenderedRange(Me) {
        (function Rt(Et, Ue) {
          return Et.start == Ue.start && Et.end == Ue.end;
        })(this._renderedRange, Me) || (this.appendOnly && (Me = {
          start: 0,
          end: Math.max(this._renderedRange.end, Me.end)
        }), this._renderedRangeSubject.next(this._renderedRange = Me), this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered()));
      }
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      setRenderedContentOffset(Me, Ke = "to-start") {
        Me = this.appendOnly && "to-start" === Ke ? 0 : Me;
        const Ee = "horizontal" == this.orientation,
          je = Ee ? "X" : "Y";
        let Je = `translate${je}(${Number((Ee && this.dir && "rtl" == this.dir.value ? -1 : 1) * Me)}px)`;
        this._renderedContentOffset = Me, "to-end" === Ke && (Je += ` translate${je}(-100%)`, this._renderedContentOffsetNeedsRewrite = !0), this._renderedContentTransform != Je && (this._renderedContentTransform = Je, this._markChangeDetectionNeeded(() => {
          this._renderedContentOffsetNeedsRewrite ? (this._renderedContentOffset -= this.measureRenderedContentSize(), this._renderedContentOffsetNeedsRewrite = !1, this.setRenderedContentOffset(this._renderedContentOffset)) : this._scrollStrategy.onRenderedOffsetChanged();
        }));
      }
      scrollToOffset(Me, Ke = "auto") {
        const Ze = {
          behavior: Ke
        };
        "horizontal" === this.orientation ? Ze.start = Me : Ze.top = Me, this.scrollable.scrollTo(Ze);
      }
      scrollToIndex(Me, Ke = "auto") {
        this._scrollStrategy.scrollToIndex(Me, Ke);
      }
      measureScrollOffset(Me) {
        let Ke;
        return Ke = this.scrollable == this ? Ze => super.measureScrollOffset(Ze) : Ze => this.scrollable.measureScrollOffset(Ze), Math.max(0, Ke(Me ?? ("horizontal" === this.orientation ? "start" : "top")) - this.measureViewportOffset());
      }
      measureViewportOffset(Me) {
        let Ke;
        const je = "rtl" == this.dir?.value;
        Ke = "start" == Me ? je ? "right" : "left" : "end" == Me ? je ? "left" : "right" : Me || ("horizontal" === this.orientation ? "left" : "top");
        const Mt = this.scrollable.measureBoundingClientRectWithScrollOffset(Ke);
        return this.elementRef.nativeElement.getBoundingClientRect()[Ke] - Mt;
      }
      measureRenderedContentSize() {
        const Me = this._contentWrapper.nativeElement;
        return "horizontal" === this.orientation ? Me.offsetWidth : Me.offsetHeight;
      }
      measureRangeSize(Me) {
        return this._forOf ? this._forOf.measureRangeSize(Me, this.orientation) : 0;
      }
      checkViewportSize() {
        this._measureViewportSize(), this._scrollStrategy.onDataLengthChanged();
      }
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
      }
      _markChangeDetectionNeeded(Me) {
        Me && this._runAfterChangeDetection.push(Me), this._isChangeDetectionPending || (this._isChangeDetectionPending = !0, this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._doChangeDetection();
        })));
      }
      _doChangeDetection() {
        this._isChangeDetectionPending = !1, this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform, this.ngZone.run(() => this._changeDetectorRef.markForCheck());
        const Me = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const Ke of Me) Ke();
      }
      _calculateSpacerSize() {
        this._totalContentHeight = "horizontal" === this.orientation ? "" : `${this._totalContentSize}px`, this._totalContentWidth = "horizontal" === this.orientation ? `${this._totalContentSize}px` : "";
      }
    }
    return Et.ɵfac = function (Me) {
      return new (Me || Et)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(ye, 8), e.Y36(Le.Is, 8), e.Y36(pe), e.Y36(n), e.Y36(Se, 8));
    }, Et.ɵcmp = e.Xpm({
      type: Et,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function (Me, Ke) {
        if (1 & Me && e.Gf(J, 7), 2 & Me) {
          let Ze;
          e.iGM(Ze = e.CRH()) && (Ke._contentWrapper = Ze.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function (Me, Ke) {
        2 & Me && e.ekj("cdk-virtual-scroll-orientation-horizontal", "horizontal" === Ke.orientation)("cdk-virtual-scroll-orientation-vertical", "horizontal" !== Ke.orientation);
      },
      inputs: {
        orientation: "orientation",
        appendOnly: "appendOnly"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      standalone: !0,
      features: [e._Bn([{
        provide: be,
        useFactory: (Ue, Me) => Ue || Me,
        deps: [[new e.FiY(), new e.tBr(Se)], Et]
      }]), e.qOj, e.jDz],
      ngContentSelectors: fe,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function (Me, Ke) {
        1 & Me && (e.F$t(), e.TgZ(0, "div", 0, 1), e.Hsn(2), e.qZA(), e._UZ(3, "div", 2)), 2 & Me && (e.xp6(3), e.Udp("width", Ke._totalContentWidth)("height", Ke._totalContentHeight));
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
      encapsulation: 2,
      changeDetection: 0
    }), Et;
  })();
  function st(Et, Ue, Me) {
    if (!Me.getBoundingClientRect) return 0;
    const Ze = Me.getBoundingClientRect();
    return "horizontal" === Et ? "start" === Ue ? Ze.left : Ze.right : "start" === Ue ? Ze.top : Ze.bottom;
  }
  let q = (() => {
      class Et {
        get cdkVirtualForOf() {
          return this._cdkVirtualForOf;
        }
        set cdkVirtualForOf(Me) {
          this._cdkVirtualForOf = Me, (0, ke.Z9)(Me) ? this._dataSourceChanges.next(Me) : this._dataSourceChanges.next(new ke.P3((0, I.b)(Me) ? Me : Array.from(Me || [])));
        }
        get cdkVirtualForTrackBy() {
          return this._cdkVirtualForTrackBy;
        }
        set cdkVirtualForTrackBy(Me) {
          this._needsUpdate = !0, this._cdkVirtualForTrackBy = Me ? (Ke, Ze) => Me(Ke + (this._renderedRange ? this._renderedRange.start : 0), Ze) : void 0;
        }
        set cdkVirtualForTemplate(Me) {
          Me && (this._needsUpdate = !0, this._template = Me);
        }
        get cdkVirtualForTemplateCacheSize() {
          return this._viewRepeater.viewCacheSize;
        }
        set cdkVirtualForTemplateCacheSize(Me) {
          this._viewRepeater.viewCacheSize = (0, t.su)(Me);
        }
        constructor(Me, Ke, Ze, Ee, je, Mt) {
          this._viewContainerRef = Me, this._template = Ke, this._differs = Ze, this._viewRepeater = Ee, this._viewport = je, this.viewChange = new a.x(), this._dataSourceChanges = new a.x(), this.dataStream = this._dataSourceChanges.pipe((0, R.O)(null), (0, B.G)(), (0, y.w)(([Je, Xt]) => this._changeDataSource(Je, Xt)), (0, j.d)(1)), this._differ = null, this._needsUpdate = !1, this._destroyed = new a.x(), this.dataStream.subscribe(Je => {
            this._data = Je, this._onRenderedDataChange();
          }), this._viewport.renderedRangeStream.pipe((0, T.R)(this._destroyed)).subscribe(Je => {
            this._renderedRange = Je, this.viewChange.observers.length && Mt.run(() => this.viewChange.next(this._renderedRange)), this._onRenderedDataChange();
          }), this._viewport.attach(this);
        }
        measureRangeSize(Me, Ke) {
          if (Me.start >= Me.end) return 0;
          const Ze = Me.start - this._renderedRange.start,
            Ee = Me.end - Me.start;
          let je, Mt;
          for (let Je = 0; Je < Ee; Je++) {
            const Xt = this._viewContainerRef.get(Je + Ze);
            if (Xt && Xt.rootNodes.length) {
              je = Mt = Xt.rootNodes[0];
              break;
            }
          }
          for (let Je = Ee - 1; Je > -1; Je--) {
            const Xt = this._viewContainerRef.get(Je + Ze);
            if (Xt && Xt.rootNodes.length) {
              Mt = Xt.rootNodes[Xt.rootNodes.length - 1];
              break;
            }
          }
          return je && Mt ? st(Ke, "end", Mt) - st(Ke, "start", je) : 0;
        }
        ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            const Me = this._differ.diff(this._renderedItems);
            Me ? this._applyChanges(Me) : this._updateContext(), this._needsUpdate = !1;
          }
        }
        ngOnDestroy() {
          this._viewport.detach(), this._dataSourceChanges.next(void 0), this._dataSourceChanges.complete(), this.viewChange.complete(), this._destroyed.next(), this._destroyed.complete(), this._viewRepeater.detach();
        }
        _onRenderedDataChange() {
          this._renderedRange && (this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end), this._differ || (this._differ = this._differs.find(this._renderedItems).create((Me, Ke) => this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(Me, Ke) : Ke)), this._needsUpdate = !0);
        }
        _changeDataSource(Me, Ke) {
          return Me && Me.disconnect(this), this._needsUpdate = !0, Ke ? Ke.connect(this) : (0, m.of)();
        }
        _updateContext() {
          const Me = this._data.length;
          let Ke = this._viewContainerRef.length;
          for (; Ke--;) {
            const Ze = this._viewContainerRef.get(Ke);
            Ze.context.index = this._renderedRange.start + Ke, Ze.context.count = Me, this._updateComputedContextProperties(Ze.context), Ze.detectChanges();
          }
        }
        _applyChanges(Me) {
          this._viewRepeater.applyChanges(Me, this._viewContainerRef, (Ee, je, Mt) => this._getEmbeddedViewArgs(Ee, Mt), Ee => Ee.item), Me.forEachIdentityChange(Ee => {
            this._viewContainerRef.get(Ee.currentIndex).context.$implicit = Ee.item;
          });
          const Ke = this._data.length;
          let Ze = this._viewContainerRef.length;
          for (; Ze--;) {
            const Ee = this._viewContainerRef.get(Ze);
            Ee.context.index = this._renderedRange.start + Ze, Ee.context.count = Ke, this._updateComputedContextProperties(Ee.context);
          }
        }
        _updateComputedContextProperties(Me) {
          Me.first = 0 === Me.index, Me.last = Me.index === Me.count - 1, Me.even = Me.index % 2 == 0, Me.odd = !Me.even;
        }
        _getEmbeddedViewArgs(Me, Ke) {
          return {
            templateRef: this._template,
            context: {
              $implicit: Me.item,
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: !1,
              last: !1,
              odd: !1,
              even: !1
            },
            index: Ke
          };
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(e.Y36(e.s_b), e.Y36(e.Rgc), e.Y36(e.ZZ4), e.Y36(ke.k), e.Y36(Re, 4), e.Y36(e.R0b));
      }, Et.ɵdir = e.lG2({
        type: Et,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate",
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
        },
        standalone: !0,
        features: [e._Bn([{
          provide: ke.k,
          useClass: ke.eX
        }])]
      }), Et;
    })(),
    Ct = (() => {
      class Et {}
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵmod = e.oAB({
        type: Et
      }), Et.ɵinj = e.cJS({}), Et;
    })(),
    Ft = (() => {
      class Et {}
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵmod = e.oAB({
        type: Et
      }), Et.ɵinj = e.cJS({
        imports: [Le.vT, Ct, Re, Le.vT, Ct]
      }), Et;
    })();
});
