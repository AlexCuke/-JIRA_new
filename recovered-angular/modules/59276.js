// Extracted from main; webpack module 59276. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    n3: () => Nn,
    CK: () => Xt,
    vv: () => Pi,
    EX: () => Ht,
    aR: () => Dn,
    hl: () => Qn,
    VU: () => In,
    Op: () => Xn,
    oq: () => bi,
    d5: () => qn,
    mj: () => Ci,
    qA: () => jo,
    E3: () => us,
    KP: () => Ji
  });
  var t = i(94650),
    e = i(36895),
    a = i(3279),
    m = i(50590),
    d = i(77579),
    M = i(62289),
    b = i(71273),
    A = i(93278),
    N = i(19550),
    I = i(32643),
    O = i(59250),
    L = i(71298),
    C = i(77229),
    v = i(9073),
    E = (i(77372), i(68675));
  let j = (() => {
    class oi {
      constructor() {
        this.value$ = new d.x();
      }
      storageData$(Qi) {
        return this.value$.asObservable().pipe((0, E.O)(this.getData(Qi)));
      }
      sendData(Qi, Qo) {
        (function R(oi, yo) {
          localStorage.setItem(oi, JSON.stringify(yo));
        })(Qi, Qo), this.emit(Qo);
      }
      dropData(Qi) {
        (function y(oi) {
          localStorage.removeItem(oi);
        })(Qi), this.emit(null);
      }
      getData(Qi) {
        return function B(oi) {
          const yo = localStorage.getItem(oi);
          return JSON.parse(yo);
        }(Qi);
      }
      emit(Qi) {
        this.value$.next(Qi);
      }
    }
    return oi.ɵfac = function (Qi) {
      return new (Qi || oi)();
    }, oi.ɵprov = t.Yz7({
      token: oi,
      factory: oi.ɵfac
    }), oi;
  })();
  function Le(oi, yo) {
    1 & oi && (t.TgZ(0, "div", 6), t.Hsn(1, 1), t.qZA());
  }
  function ke(oi, yo) {
    1 & oi && (t.TgZ(0, "div", 7), t.Hsn(1, 2), t.qZA());
  }
  function J(oi, yo) {
    1 & oi && (t.TgZ(0, "div", 7), t.Hsn(1, 3), t.qZA());
  }
  function fe(oi, yo) {
    1 & oi && (t.TgZ(0, "div"), t.Hsn(1, 4), t.qZA());
  }
  const ye = ["*", [["", "hlFrameHeader", ""]], [["", "hlFrameBodyPrefix", ""]], [["", "hlFrameBodyPostfix", ""]], [["", "hlFrameFooter", ""]]],
    ae = ["*", "[hlFrameHeader]", "[hlFrameBodyPrefix]", "[hlFrameBodyPostfix]", "[hlFrameFooter]"],
    qe = ["*", [["", "hlHeaderSuffix", ""]]],
    Rt = ["*", "[hlHeaderSuffix]"];
  function mt(oi, yo) {
    if (1 & oi && (t.ynx(0), t.TgZ(1, "h2", 3), t._uU(2), t.qZA(), t.BQk()), 2 & oi) {
      const Qi = t.oxw();
      t.xp6(2), t.Oqu(Qi.title);
    }
  }
  function ut(oi, yo) {
    1 & oi && (t.TgZ(0, "button", 4), t._UZ(1, "lu-svg-icon", 5), t.qZA()), 2 & oi && (t.xp6(1), t.Q6J("size", 24));
  }
  const Ct = ["*", [["", "header-right", ""]]],
    Ft = ["*", "[header-right]"];
  function Ze(oi, yo) {
    if (1 & oi) {
      const Qi = t.EpF();
      t.TgZ(0, "div", 2), t.NdJ("click", function () {
        t.CHM(Qi);
        const Kr = t.oxw();
        return t.KtG(Kr.close());
      }), t._UZ(1, "lu-svg-icon", 3), t.qZA();
    }
    2 & oi && (t.xp6(1), t.Q6J("size", 24));
  }
  let je = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlFrameBodyPostfix", ""]]
      }), oi;
    })(),
    Mt = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlFrameBodyPrefix", ""]]
      }), oi;
    })(),
    Je = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlFrameFooter", ""]]
      }), oi;
    })(),
    Xt = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlFrameHeader", ""]]
      }), oi;
    })(),
    Nn = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵcmp = t.Xpm({
        type: oi,
        selectors: [["hl-frame"]],
        contentQueries: function (Qi, Qo, Kr) {
          if (1 & Qi && (t.Suo(Kr, Je, 5), t.Suo(Kr, Xt, 5), t.Suo(Kr, Mt, 5), t.Suo(Kr, je, 5)), 2 & Qi) {
            let _s;
            t.iGM(_s = t.CRH()) && (Qo.footerContent = _s.first), t.iGM(_s = t.CRH()) && (Qo.headerContent = _s.first), t.iGM(_s = t.CRH()) && (Qo.prefixContent = _s.first), t.iGM(_s = t.CRH()) && (Qo.postfixContent = _s.first);
          }
        },
        ngContentSelectors: ae,
        decls: 8,
        vars: 4,
        consts: [[1, "hl-frame"], ["class", "hl-frame-header", 4, "ngIf"], [1, "hl-frame-body"], ["class", "hl-frame-body-item", 4, "ngIf"], [1, "hl-frame-body-item", "hl-frame-body-content"], [4, "ngIf"], [1, "hl-frame-header"], [1, "hl-frame-body-item"]],
        template: function (Qi, Qo) {
          1 & Qi && (t.F$t(ye), t.TgZ(0, "div", 0), t.YNc(1, Le, 2, 0, "div", 1), t.TgZ(2, "div", 2), t.YNc(3, ke, 2, 0, "div", 3), t.TgZ(4, "div", 4), t.Hsn(5), t.qZA(), t.YNc(6, J, 2, 0, "div", 3), t.qZA(), t.YNc(7, fe, 2, 0, "div", 5), t.qZA()), 2 & Qi && (t.xp6(1), t.Q6J("ngIf", Qo.headerContent), t.xp6(2), t.Q6J("ngIf", Qo.prefixContent), t.xp6(3), t.Q6J("ngIf", Qo.postfixContent), t.xp6(1), t.Q6J("ngIf", Qo.footerContent));
        },
        dependencies: [e.O5],
        styles: [".hl-frame[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.hl-frame-body[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:row;overflow:hidden}.hl-frame-header[_ngcontent-%COMP%]{z-index:1}.hl-frame-body-item[_ngcontent-%COMP%]{overflow:hidden;flex-shrink:0}.hl-frame-body-content[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:1}"],
        changeDetection: 0
      }), oi;
    })(),
    Pi = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez]
      }), oi;
    })(),
    Ht = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵcmp = t.Xpm({
        type: oi,
        selectors: [["hl-header-container"]],
        ngContentSelectors: Rt,
        decls: 2,
        vars: 0,
        template: function (Qi, Qo) {
          1 & Qi && (t.F$t(qe), t.Hsn(0), t.Hsn(1, 1));
        },
        styles: ["[_nghost-%COMP%]{display:flex;flex-shrink:0;height:calc(var(--lu-base-gutter) * 6);background-color:var(--hl-main-color-120)}"],
        changeDetection: 0
      }), oi;
    })(),
    Dn = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez]
      }), oi;
    })(),
    Qn = (() => {
      class oi {
        set isActive(Qi) {
          this._isActive = Qi, this.toggleActiveStyles(Qi);
        }
        set isSideBar(Qi) {
          this._isSideBar = Qi, this.setCssColor();
        }
        constructor(Qi) {
          this.el = Qi, this.hoverEffect = !1, this._isActive = !1, this._isSideBar = !1;
        }
        ngOnInit() {
          this.addCssStyles();
        }
        onMouseEnter() {
          this.hoverEffect && !this._isActive && this.addHoverStyles();
        }
        onMouseLeave() {
          this.hoverEffect && !this._isActive && this.resetHoverStyles();
        }
        setCssColor() {
          this.activeColor = this._isSideBar ? "var(--lu-white)" : "var(--lu-blue-160)", this.hoverColor = this._isSideBar ? "var(--lu-black-10)" : "var(--lu-blue-100)", this.backgroundColor = this._isSideBar ? "transparent" : "var(--hl-main-color-120)";
        }
        addCssStyles() {
          this.el.nativeElement.style.display = "flex", this.el.nativeElement.style.alignItems = "center", this.el.nativeElement.style.transition = "background-color 0.2s linear", this._isSideBar || (this.el.nativeElement.style.setProperty("padding", "14px 16px"), this.el.nativeElement.style.setProperty("color", "var(--lu-white)"), this.el.nativeElement.style.setProperty("background-color", this.backgroundColor), this.el.nativeElement.style.minHeight = "47px", this.el.nativeElement.style.fontSize = "14px");
        }
        addHoverStyles() {
          this.el.nativeElement.style.setProperty("background-color", this.hoverColor);
        }
        resetHoverStyles() {
          this.el.nativeElement.style.setProperty("background-color", this.backgroundColor);
        }
        toggleActiveStyles(Qi) {
          Qi ? this.addActiveStyles() : this.resetHoverStyles();
        }
        addActiveStyles() {
          this.el.nativeElement.style.setProperty("background-color", this.activeColor);
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)(t.Y36(t.SBq));
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlHeaderItem", ""]],
        hostBindings: function (Qi, Qo) {
          1 & Qi && t.NdJ("mouseenter", function () {
            return Qo.onMouseEnter();
          })("mouseleave", function () {
            return Qo.onMouseLeave();
          });
        },
        inputs: {
          hoverEffect: "hoverEffect",
          isActive: "isActive",
          isSideBar: "isSideBar"
        }
      }), oi;
    })(),
    In = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez]
      }), oi;
    })(),
    To = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez, In, A.h, b.p, O.J, L.O, C.v, M.xu]
      }), oi;
    })(),
    bi = (() => {
      class oi {
        constructor(Qi) {
          this.el = Qi;
        }
        ngOnInit() {
          this.addCssStyles();
        }
        addCssStyles() {
          this.el.nativeElement.style.marginLeft = "auto";
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)(t.Y36(t.SBq));
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlHeaderSuffix", ""]]
      }), oi;
    })(),
    qn = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez]
      }), oi;
    })(),
    Xn = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez, Dn, In, To, qn]
      }), oi;
    })();
  class Yi {
    constructor(yo) {
      this.$closed = yo;
    }
    afterClose() {
      return this.$closed.pipe((0, m.P)());
    }
  }
  let Eo = (() => {
    class oi {
      constructor() {
        this.close$ = new d.x();
      }
      emitCloseEvent() {
        this.close$.next();
      }
      generateModalRef() {
        return new Yi(this.close$);
      }
    }
    return oi.ɵfac = function (Qi) {
      return new (Qi || oi)();
    }, oi.ɵprov = t.Yz7({
      token: oi,
      factory: oi.ɵfac
    }), oi;
  })();
  const Pr = new t.OlP("HLModalsContainerConfigToken");
  let Yo = (() => {
    class oi {
      constructor() {
        this.slots = {
          topActiveSlot: 0,
          slotsCount: 1
        };
      }
      initSlots(Qi) {
        this.slots.slotsCount = Qi;
      }
      slotOccupied(Qi) {
        if (this.slots.topActiveSlot + 1 !== Qi) throw new Error("Порядок выделения слотов нарушен");
        this.slots.topActiveSlot += 1;
      }
      slotReleased(Qi) {
        if (this.slots.topActiveSlot !== Qi) throw new Error("Порядок освобождения слотов нарушен");
        this.slots.topActiveSlot -= 1;
      }
      allSlotReleased() {
        this.slots.topActiveSlot = 0;
      }
      allocateSlot() {
        if (this.slots.topActiveSlot >= this.slots.slotsCount) throw new Error(`\u0414\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u043a\u043e\u043d: ${String(this.slots.slotsCount)}`);
        return this.slots.topActiveSlot + 1;
      }
      getTopActiveSlot() {
        return this.slots.topActiveSlot;
      }
    }
    return oi.ɵfac = function (Qi) {
      return new (Qi || oi)();
    }, oi.ɵprov = t.Yz7({
      token: oi,
      factory: oi.ɵfac
    }), oi;
  })();
  const wr = "modalOutletParams";
  let oo = (() => {
      class oi {
        constructor(Qi, Qo, Kr, _s, ra, Or) {
          this.router = Qi, this.modalOutletRefService = Qo, this.modalOutletSlotService = Kr, this.activatedRoute = _s, this.simpleStorageService = ra, this.config = Or, this.modalOutletParamsMap = new Map();
        }
        open(Qi, Qo) {
          const Kr = String(this.modalOutletSlotService.allocateSlot());
          return this.modalOutletParamsMap.set(Number(Kr), this.activatedRoute.snapshot.queryParams), this.updateStorageData(Kr), this.navigate(Kr, Qi, Qo), this.modalOutletRefService.generateModalRef();
        }
        updateModal(Qi, Qo) {
          const Kr = String(this.modalOutletSlotService.getTopActiveSlot());
          this.updateStorageData(Kr), this.navigate(Kr, Qi, Qo);
        }
        close() {
          const Qi = Object.keys(this.activatedRoute.snapshot.queryParams).length ? this.activatedRoute.snapshot.queryParams : void 0,
            Qo = this.modalOutletSlotService.getTopActiveSlot();
          this.updateStorageData(Qo.toString(), "close");
          const Kr = this.modalOutletParamsMap.get(Qo) || Qi;
          return Kr && this.modalOutletParamsMap.delete(Qo), this.router.navigate(Qo <= 1 ? [{
            outlets: {
              [this.config.outlet]: []
            }
          }] : [{
            outlets: {
              [this.config.outlet]: ["modal", {
                outlets: {
                  [String(Qo)]: []
                }
              }]
            }
          }], {
            queryParams: Kr
          });
        }
        closeAll() {
          return this.close().then(Qi => Qi && 0 !== this.modalOutletSlotService.getTopActiveSlot() ? this.closeAll() : Qi);
        }
        updateStorageData(Qi, Qo = "open") {
          const Kr = this.simpleStorageService.getData(wr) || [];
          "close" === Qo ? this.simpleStorageService.sendData(wr, Kr.filter(_s => _s.slot !== Qi)) : (Kr.push({
            slot: Qi,
            queryParams: this.activatedRoute.snapshot.queryParams
          }), this.simpleStorageService.sendData(wr, Kr));
        }
        navigate(Qi, Qo, Kr) {
          this.router.navigate([{
            outlets: {
              [this.config.outlet]: ["modal", {
                outlets: {
                  [Qi]: [Qi, ...Qo]
                }
              }]
            }
          }], Kr);
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)(t.LFG(a.F0), t.LFG(Eo), t.LFG(Yo), t.LFG(a.gz), t.LFG(j), t.LFG(Pr));
      }, oi.ɵprov = t.Yz7({
        token: oi,
        factory: oi.ɵfac
      }), oi;
    })(),
    Di = (() => {
      class oi {
        constructor(Qi) {
          this.modalContainerService = Qi;
        }
        onClose() {
          this.modalContainerService.close();
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)(t.Y36(oo));
      }, oi.ɵdir = t.lG2({
        type: oi,
        selectors: [["", "hlModalOutletCloseBtnDirective", ""]],
        hostBindings: function (Qi, Qo) {
          1 & Qi && t.NdJ("click", function () {
            return Qo.onClose();
          });
        }
      }), oi;
    })(),
    Ci = (() => {
      class oi {
        constructor() {
          this.withCloseIcon = !1;
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵcmp = t.Xpm({
        type: oi,
        selectors: [["hl-modal-outlet-item-header"]],
        inputs: {
          title: "title",
          withCloseIcon: "withCloseIcon"
        },
        ngContentSelectors: Ft,
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf"], [1, "header-right-wrapper"], ["lu-button-icon", "", "size", "extra-small", "class", "__close-btn", "hlModalOutletCloseBtnDirective", "", 4, "ngIf"], ["lu-text", "", 1, "header-title"], ["lu-button-icon", "", "size", "extra-small", "hlModalOutletCloseBtnDirective", "", 1, "__close-btn"], ["icon", "close", 1, "close-icon", 3, "size"]],
        template: function (Qi, Qo) {
          1 & Qi && (t.F$t(Ct), t.YNc(0, mt, 3, 1, "ng-container", 0), t.Hsn(1), t.TgZ(2, "div", 1), t.Hsn(3, 1), t.YNc(4, ut, 2, 1, "button", 2), t.qZA()), 2 & Qi && (t.Q6J("ngIf", Qo.title), t.xp6(4), t.Q6J("ngIf", Qo.withCloseIcon));
        },
        dependencies: [e.O5, A.q, N.k, Di, I.NZ],
        styles: ["[_nghost-%COMP%]{display:flex;justify-content:flex-start;align-items:center;padding:calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3);border-bottom:1px solid var(--lu-black-10);box-shadow:0 4px 8px #00000014}.header-title[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 1.5) 0}.__open-emc-btn[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.__open-emc-btn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}.close-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}.close-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: var(--lu-black-60)}.header-right-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-left:auto}"],
        changeDetection: 0
      }), oi;
    })(),
    lo = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez]
      }), oi;
    })(),
    jo = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez, A.h, N.o, v.W1, lo, I.aI]
      }), oi;
    })();
  class fi extends Error {}
  let Ji = (() => {
      class oi {
        constructor(Qi) {
          this.router = Qi, this.outletName = "sticky";
        }
        open(Qi, Qo) {
          return this.router.navigate([{
            outlets: {
              [this.outletName]: ["panel", ...Qi]
            }
          }], Qo);
        }
        close(Qi) {
          return this.router.navigate([{
            outlets: {
              [this.outletName]: []
            }
          }], Qi);
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)(t.LFG(a.F0));
      }, oi.ɵprov = t.Yz7({
        token: oi,
        factory: oi.ɵfac
      }), oi;
    })(),
    Ao = (() => {
      class oi {
        constructor(Qi, Qo) {
          this.service = Qi, this.activatedRoute = Qo, this.panelPosition = "fixed", this.data = {
            width: "auto",
            position: "fixed",
            showCloseButton: !1
          };
        }
        ngOnInit() {
          this.data = {
            ...this.data,
            ...(this.activatedRoute.firstChild?.snapshot.data ?? {})
          }, this.panelPosition = this.data.position;
        }
        stopProp(Qi) {
          Qi.stopPropagation();
        }
        close() {
          this.service.close();
        }
        backDropClick() {
          this.data.backdropClosable && this.close();
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)(t.Y36(Ji), t.Y36(a.gz));
      }, oi.ɵcmp = t.Xpm({
        type: oi,
        selectors: [["hl-sticky-panel-outlet"]],
        hostVars: 2,
        hostBindings: function (Qi, Qo) {
          1 & Qi && t.NdJ("click", function () {
            return Qo.backDropClick();
          }), 2 & Qi && t.Udp("position", Qo.panelPosition);
        },
        decls: 3,
        vars: 3,
        consts: [[1, "content", 3, "click"], ["class", "__close-btn", 3, "click", 4, "ngIf"], [1, "__close-btn", 3, "click"], ["icon", "close", 3, "size"]],
        template: function (Qi, Qo) {
          1 & Qi && (t.TgZ(0, "div", 0), t.NdJ("click", function (_s) {
            return Qo.stopProp(_s);
          }), t._UZ(1, "router-outlet"), t.YNc(2, Ze, 2, 1, "div", 1), t.qZA()), 2 & Qi && (t.Udp("width", Qo.data.width), t.xp6(2), t.Q6J("ngIf", Qo.data.showCloseButton));
        },
        dependencies: [e.O5, a.lC, A.q],
        styles: ["[_nghost-%COMP%]{display:flex;top:48px;bottom:48px;left:0;width:100%;height:calc(100% - 84px);background:rgba(0,0,0,.5);flex-direction:row-reverse}.content[_ngcontent-%COMP%]{position:relative;background:var(--lu-white)}.__close-btn[_ngcontent-%COMP%]{position:absolute;right:calc(var(--lu-base-gutter) * 2.5);top:calc(var(--lu-base-gutter) * 2.5);cursor:pointer;z-index:1}.__close-btn[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}"],
        changeDetection: 0
      }), oi;
    })(),
    Sr = (() => {
      class oi {}
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [e.ez, a.Bz, A.h]
      }), oi;
    })(),
    us = (() => {
      class oi {
        static forRoot(Qi) {
          return {
            ngModule: oi,
            providers: [Ji, (0, a.bU)([{
              path: "panel",
              outlet: "sticky",
              component: Ao,
              canActivateChild: [],
              children: Qi
            }])]
          };
        }
      }
      return oi.ɵfac = function (Qi) {
        return new (Qi || oi)();
      }, oi.ɵmod = t.oAB({
        type: oi
      }), oi.ɵinj = t.cJS({
        imports: [Sr]
      }), oi;
    })();
});
