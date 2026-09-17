// Extracted from main; webpack module 30338. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    LV: () => b,
    ZC: () => A,
    _1: () => d,
    bN: () => M,
    nX: () => I,
    vB: () => m,
    x6: () => a
  });
  var t = i(94650),
    e = i(36895);
  let a = (() => {
      class O {
        constructor(C) {
          this.viewContainerRef = C;
        }
      }
      return O.ɵfac = function (C) {
        return new (C || O)(t.Y36(t.s_b));
      }, O.ɵdir = t.lG2({
        type: O,
        selectors: [["", "dpAdHost", ""]]
      }), O;
    })(),
    m = (() => {
      class O {}
      return O.ɵfac = function (C) {
        return new (C || O)();
      }, O.ɵmod = t.oAB({
        type: O
      }), O.ɵinj = t.cJS({}), O;
    })(),
    d = (() => {
      class O {
        constructor(C) {
          this.elementRef = C;
        }
        getStickyData() {
          const C = this.container;
          return {
            scrollWidth: C.scrollWidth,
            clientWidth: C.clientWidth,
            scrollLeftDistance: C.scrollLeft
          };
        }
        get container() {
          return this.dpStickyContainer ? this.elementRef.nativeElement.querySelector(this.dpStickyContainer) : this.elementRef.nativeElement;
        }
      }
      return O.ɵfac = function (C) {
        return new (C || O)(t.Y36(t.SBq));
      }, O.ɵdir = t.lG2({
        type: O,
        selectors: [["", "dpStickyContainer", ""]],
        inputs: {
          dpStickyContainer: "dpStickyContainer"
        },
        exportAs: ["dpStickyContainer"]
      }), O;
    })(),
    M = (() => {
      class O {
        get right() {
          return this.getRightElementPosition();
        }
        get left() {
          return this.getLeftElementPosition();
        }
        constructor(C) {
          this.elementRef = C, this.visible = !1, this.position = "absolute";
        }
        ngOnChanges() {
          this.setPosition(this.container.getStickyData());
        }
        setPosition(C) {
          this.stickyData = C;
        }
        getRightElementPosition() {
          return "RIGHT" === this.dpStickyElement ? this.stickyData.scrollWidth - this.stickyData.clientWidth - this.stickyData.scrollLeftDistance + "px" : this.elementRef.nativeElement.style.right;
        }
        getLeftElementPosition() {
          return "LEFT" === this.dpStickyElement ? `${this.stickyData.scrollLeftDistance}px` : this.elementRef.nativeElement.style.left;
        }
      }
      return O.ɵfac = function (C) {
        return new (C || O)(t.Y36(t.SBq));
      }, O.ɵdir = t.lG2({
        type: O,
        selectors: [["", "dpStickyElement", ""]],
        hostVars: 6,
        hostBindings: function (C, v) {
          2 & C && t.Udp("position", v.position)("right", v.right)("left", v.left);
        },
        inputs: {
          dpStickyElement: "dpStickyElement",
          container: "container",
          visible: "visible"
        },
        features: [t.TTD]
      }), O;
    })(),
    b = (() => {
      class O {}
      return O.ɵfac = function (C) {
        return new (C || O)();
      }, O.ɵmod = t.oAB({
        type: O
      }), O.ɵinj = t.cJS({
        imports: [e.ez]
      }), O;
    })(),
    A = (() => {
      class O {
        get clamp() {
          return this.maxLines ? this.maxLines : 1;
        }
        constructor(C, v) {
          this.elementRef = C, this.changeDetectorRef = v, this.display = "-webkit-box", this.boxOrient = "vertical", this.overflow = "hidden", this.break = "break-all", this.element = this.elementRef.nativeElement;
        }
        ngAfterViewInit() {
          this.checkCroppingState(), this.text = this.element.textContent || "", this.initDeferredVerificationCropping();
        }
        checkCroppingState() {
          this.isCropped = !function N(O) {
            return !(O.scrollHeight > O.clientHeight || O.scrollWidth > O.clientWidth);
          }(this.element);
        }
        initDeferredVerificationCropping() {
          this.isCropped || setTimeout(() => {
            this.checkCroppingState(), this.isCropped && this.changeDetectorRef.markForCheck();
          }, 0);
        }
      }
      return O.ɵfac = function (C) {
        return new (C || O)(t.Y36(t.SBq), t.Y36(t.sBO));
      }, O.ɵdir = t.lG2({
        type: O,
        selectors: [["", "dpTextCropping", ""]],
        hostVars: 10,
        hostBindings: function (C, v) {
          2 & C && t.Udp("display", v.display)("-webkit-box-orient", v.boxOrient)("overflow", v.overflow)("word-break", v.break)("-webkit-line-clamp", v.clamp);
        },
        inputs: {
          maxLines: "maxLines"
        },
        exportAs: ["dpTextCropping"]
      }), O;
    })(),
    I = (() => {
      class O {}
      return O.ɵfac = function (C) {
        return new (C || O)();
      }, O.ɵmod = t.oAB({
        type: O
      }), O.ɵinj = t.cJS({
        imports: [e.ez]
      }), O;
    })();
});
