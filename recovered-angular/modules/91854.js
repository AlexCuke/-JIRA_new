// Extracted from main; webpack module 91854. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Jv: () => pe,
    MI: () => be
  });
  var t = i(94650),
    e = i(36895),
    a = i(93278),
    m = i(9073),
    d = i(6998),
    M = i(37372),
    b = i(44348),
    A = i(41742),
    N = i(89740),
    I = i(37340),
    O = i(84080),
    L = i(17504),
    C = i(77579),
    v = i(54968),
    f = i(11848),
    E = i(63900),
    h = i(69718),
    x = i(95698),
    u = i(82722),
    T = i(39300),
    R = i(74616),
    B = i(3977);
  function y(le, n) {
    if (1 & le && (t.TgZ(0, "div", 9), t._uU(1), t.qZA()), 2 & le) {
      const Se = t.oxw(2);
      t.xp6(1), t.Oqu(null == Se.config ? null : Se.config.title);
    }
  }
  function j(le, n) {
    if (1 & le && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & le) {
      const Se = n.$implicit;
      t.Q6J("id", Se.action), t.xp6(1), t.hij(" ", Se.text, " ");
    }
  }
  function W(le, n) {
    if (1 & le) {
      const Se = t.EpF();
      t.TgZ(0, "button", 13), t.NdJ("click", function () {
        const We = t.CHM(Se).$implicit,
          Re = t.oxw(3);
        return t.KtG(Re.event.emit(We.action));
      }), t._uU(1), t.qZA();
    }
    if (2 & le) {
      const Se = n.$implicit;
      t.xp6(1), t.Oqu(Se.title);
    }
  }
  function F(le, n) {
    if (1 & le && (t.TgZ(0, "div", 11), t.YNc(1, W, 2, 1, "button", 12), t.qZA()), 2 & le) {
      const Se = t.oxw(2);
      t.xp6(1), t.Q6J("ngForOf", null == Se.config ? null : Se.config.buttons);
    }
  }
  function Le(le, n) {
    if (1 & le) {
      const Se = t.EpF();
      t.TgZ(0, "div", 2)(1, "div", 3), t.NdJ("mousedown", function () {
        t.CHM(Se);
        const Rt = t.oxw();
        return Rt.event.emit("close"), t.KtG(Rt.close());
      }), t._UZ(2, "lu-svg-icon", 4), t.qZA(), t.YNc(3, y, 2, 1, "div", 5), t.TgZ(4, "p", 6), t.NdJ("action", function (Rt) {
        t.CHM(Se);
        const We = t.oxw();
        return t.KtG(We.event.emit(Rt));
      }), t.YNc(5, j, 2, 2, "ng-template", null, 7, t.W1O), t.qZA(), t.YNc(7, F, 2, 1, "div", 8), t.qZA();
    }
    if (2 & le) {
      const Se = t.MAs(6),
        qe = t.oxw();
      t.xp6(3), t.Q6J("ngIf", null == qe.config ? null : qe.config.title), t.xp6(1), t.Q6J("lu-action-message", qe.message)("linkContent", Se), t.xp6(3), t.Q6J("ngIf", null == qe.config || null == qe.config.buttons ? null : qe.config.buttons.length);
    }
  }
  function ke(le, n) {
    if (1 & le && (t.ynx(0), t._uU(1), t.BQk()), 2 & le) {
      const Se = n.polymorpheusOutlet;
      t.xp6(1), t.Oqu(Se);
    }
  }
  const J = function () {
    return {};
  };
  function fe(le, n) {
    if (1 & le && (t.ynx(0), t.YNc(1, ke, 2, 1, "ng-container", 14), t.BQk()), 2 & le) {
      const Se = t.oxw();
      t.xp6(1), t.Q6J("polymorpheusOutlet", Se.message)("polymorpheusOutletContext", t.DdM(2, J));
    }
  }
  const ye = ["wrapper"],
    ae = ["wrapperErrors"];
  let Y = (() => {
      class le {
        constructor(Se, qe) {
          this.elementRef = Se, this.changeDetectorRef = qe, this.state = "enter", this.config = null, this.dataTestRole = "toast", this.message = "", this.animationStateChanged = new t.vpe(), this.event = new t.vpe();
        }
        get type() {
          return this.config?.type || "";
        }
        animationEventChange(Se) {
          this.animationStateChanged.next(Se);
        }
        attachContent(Se) {
          this.message = Se;
        }
        get isMessageString() {
          return "string" == typeof this.message;
        }
        close() {
          this.state = "exit", this.changeDetectorRef.markForCheck();
        }
        ngOnDestroy() {
          this.event.complete();
        }
      }
      return le.ɵfac = function (Se) {
        return new (Se || le)(t.Y36(t.SBq), t.Y36(t.sBO));
      }, le.ɵcmp = t.Xpm({
        type: le,
        selectors: [["lu-message"]],
        hostVars: 4,
        hostBindings: function (Se, qe) {
          1 & Se && t.WFA("@messageAnimation.start", function (We) {
            return qe.animationEventChange(We);
          })("@messageAnimation.done", function (We) {
            return qe.animationEventChange(We);
          }), 2 & Se && (t.uIk("data-test-role", qe.dataTestRole)("data-test-role-type", qe.type)("data-lu-message-type", qe.type), t.d8E("@messageAnimation", qe.state));
        },
        decls: 2,
        vars: 2,
        consts: [["class", "lu-message-wrapper", 4, "ngIf"], [4, "ngIf"], [1, "lu-message-wrapper"], [1, "lu-message-close", 3, "mousedown"], ["icon", "close", "size", "24"], ["class", "lu-message-title", 4, "ngIf"], [1, "lu-message-text", 3, "lu-action-message", "linkContent", "action"], ["linkContent", ""], ["class", "lu-message-buttons", 4, "ngIf"], [1, "lu-message-title"], [1, "lu-message-link", 3, "id"], [1, "lu-message-buttons"], ["lu-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["lu-button", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
        template: function (Se, qe) {
          1 & Se && (t.YNc(0, Le, 8, 4, "div", 0), t.YNc(1, fe, 2, 3, "ng-container", 1)), 2 & Se && (t.Q6J("ngIf", qe.isMessageString), t.xp6(1), t.Q6J("ngIf", !qe.isMessageString));
        },
        dependencies: [e.sg, e.O5, a.q, N.Li, m.mc, d.xY],
        styles: ["[_nghost-%COMP%]{--lu-text-color: var(--lu-white);--lu-button-background: transparent;--lu-button-text: var(--lu-white);--lu-button-border: var(--lu-white);--lu-button-hover-background: var(--lu-white);--lu-button-hover-text: var(--lu-black-80);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text);position:relative;display:flex;width:400px;margin-bottom:var(--lu-base-gutter);align-items:center;font-size:15px;line-height:24px}[_nghost-%COMP%]:before{background-color:var(--lu-black-80)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.8}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.3;--lu-svg-icon-color: var(--lu-white)}[_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-yellow-100);text-decoration:underline}[_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-yellow-140)}[_nghost-%COMP%]:before{position:absolute;content:\"\";width:100%;height:100%;z-index:-1;opacity:.92}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 3);padding-right:48px}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-title[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);font-weight:600;margin-bottom:var(--lu-base-gutter)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-text[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-buttons[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--lu-base-gutter) * 2)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;cursor:pointer}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{width:40px;height:40px;margin-right:var(--lu-base-gutter);margin-top:var(--lu-base-gutter)}[data-lu-message-type=success][_nghost-%COMP%]{--lu-text-color: var(--lu-white);--lu-button-background: transparent;--lu-button-text: var(--lu-white);--lu-button-border: var(--lu-white);--lu-button-hover-background: var(--lu-white);--lu-button-hover-text: var(--lu-green-120);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text)}[data-lu-message-type=success][_nghost-%COMP%]:before{background-color:var(--lu-green-120)}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.8}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.3;--lu-svg-icon-color: var(--lu-white)}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-yellow-100);text-decoration:underline}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-yellow-140)}[data-lu-message-type=warning][_nghost-%COMP%]{--lu-text-color: var(--lu-black-80);--lu-button-background: transparent;--lu-button-text: var(--lu-black-80);--lu-button-border: var(--lu-black-80);--lu-button-hover-background: var(--lu-black-80);--lu-button-hover-text: var(--lu-white);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text)}[data-lu-message-type=warning][_nghost-%COMP%]:before{background-color:var(--lu-yellow-120)}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.4}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.15;--lu-svg-icon-color: var(--lu-black-80)}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-teal-100);text-decoration:underline}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-teal-140)}[data-lu-message-type=error][_nghost-%COMP%]{--lu-text-color: var(--lu-white);--lu-button-background: transparent;--lu-button-text: var(--lu-white);--lu-button-border: var(--lu-white);--lu-button-hover-background: var(--lu-white);--lu-button-hover-text: var(--lu-red-120);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text)}[data-lu-message-type=error][_nghost-%COMP%]:before{background-color:var(--lu-red-120)}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.8}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.3;--lu-svg-icon-color: var(--lu-white)}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-yellow-100);text-decoration:underline}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-yellow-140)}"],
        data: {
          animation: [(0, I.X$)("messageAnimation", [(0, I.eR)("* => enter", [(0, I.oB)({
            transform: "translateX(100%)",
            height: "0px",
            "margin-bottom": "0",
            opacity: 0
          }), (0, I.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, I.oB)({
            transform: "translateX(0%)",
            height: "*",
            "margin-bottom": "*",
            opacity: 1
          }))]), (0, I.eR)("* => exit", [(0, I.oB)({
            transform: "translateX(0%)",
            height: "*",
            "margin-bottom": "*",
            opacity: 1
          }), (0, I.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, I.oB)({
            transform: "translateX(100%)",
            height: "0px",
            "margin-bottom": "0",
            opacity: 0
          }))])])]
        },
        changeDetection: 0
      }), le;
    })(),
    G = (() => {
      class le {
        constructor(Se, qe, Rt, We) {
          this.changeDetectorRef = Se, this.componentFactoryResolver = qe, this.applicationRef = Rt, this.injector = We, this.messages = [], this.content = "", this.marginBottom = "", this.animationEvent$ = new C.x();
        }
        ngOnInit() {
          this.animationEvent$.next("beforeOpen"), this.animationEvent$.next("afterOpen");
        }
        attachMessage(Se, qe) {
          if (!this.wrapperErrors || !this.wrapper) throw b.vE.error("Не найдены контейнеры для создания LuMessage!");
          const We = new O.u0(qe.type === L.ak.ERROR ? this.wrapperErrors.nativeElement : this.wrapper.nativeElement, this.componentFactoryResolver, this.applicationRef, this.injector).attachComponentPortal(new O.C5(Y));
          return We.instance.config = qe, We.instance.attachContent(Se), this.messages.push(We), this.changeDetectorRef.detectChanges(), qe.marginBottom && (this.marginBottom = `${qe.marginBottom}px`), We;
        }
        detachMessage(Se) {
          const qe = this.messages.findIndex(Rt => Rt.instance === Se);
          this.messages[qe].destroy(), this.messages.splice(qe, 1);
        }
        getNormalMessages() {
          return this.messages.filter(Se => Se.instance.config?.type !== L.ak.ERROR);
        }
        get isFocused() {
          return !1;
        }
        focus() {}
        get animationEvent() {
          return this.animationEvent$.asObservable();
        }
        close() {
          this.animationEvent$.next("beforeClose"), this.animationEvent$.next("afterClose");
        }
        markForCheck() {
          this.changeDetectorRef.markForCheck();
        }
      }
      return le.ɵfac = function (Se) {
        return new (Se || le)(t.Y36(t.sBO), t.Y36(t._Vd), t.Y36(t.z2F), t.Y36(t.zs3));
      }, le.ɵcmp = t.Xpm({
        type: le,
        selectors: [["lu-message-container"]],
        viewQuery: function (Se, qe) {
          if (1 & Se && (t.Gf(ye, 7), t.Gf(ae, 7)), 2 & Se) {
            let Rt;
            t.iGM(Rt = t.CRH()) && (qe.wrapper = Rt.first), t.iGM(Rt = t.CRH()) && (qe.wrapperErrors = Rt.first);
          }
        },
        hostVars: 2,
        hostBindings: function (Se, qe) {
          2 & Se && t.Udp("padding-bottom", qe.marginBottom);
        },
        decls: 4,
        vars: 0,
        consts: [[1, "lu-message-container-wrapper"], ["wrapper", ""], ["wrapperErrors", ""]],
        template: function (Se, qe) {
          1 & Se && t._UZ(0, "div", 0, 1)(2, "div", 0, 2);
        },
        styles: ["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%]   .lu-message-container-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;padding-right:var(--lu-base-gutter);white-space:pre-line}"],
        changeDetection: 0
      }), le;
    })();
  class te {
    constructor(n, Se, qe, Rt, We) {
      this.overlayRef = n, this.config = Se, this.containerInstance = qe, this.ngZone = Rt, this.messageComponent = We, this.beforeOpen().pipe((0, E.w)(() => this.config.lifeTime && this.config.autoClose ? (0, A.M3)(this.config.lifeTime, (0, v.R)(We.elementRef.nativeElement, "mouseenter").pipe((0, h.h)(void 0)), (0, v.R)(We.elementRef.nativeElement, "mouseleave").pipe((0, h.h)(void 0))).pipe(this.config.forcedClose ? (0, h.h)(void 0) : (0, A.hx)(this.ngZone)) : f.C), (0, x.q)(1), (0, u.R)(this.overlayRef.overlayRef.detachments())).subscribe(() => this.close()), this.afterClose().pipe((0, u.R)(this.overlayRef.overlayRef.detachments())).subscribe(() => {
        this.containerInstance.detachMessage(this.messageComponent), this.checkCountAndDestroy();
      });
    }
    close() {
      this.messageComponent.close();
    }
    afterOpen() {
      return this.messageComponent.animationStateChanged.pipe((0, T.h)(n => "done" === n.phaseName && "enter" === n.toState), (0, x.q)(1), (0, h.h)(this));
    }
    beforeOpen() {
      return this.messageComponent.animationStateChanged.pipe((0, T.h)(n => "start" === n.phaseName && "enter" === n.toState), (0, x.q)(1), (0, h.h)(this));
    }
    afterClose() {
      return this.messageComponent.animationStateChanged.pipe((0, T.h)(n => "done" === n.phaseName && "exit" === n.toState), (0, x.q)(1), (0, h.h)(void 0));
    }
    beforeClose() {
      return this.messageComponent.animationStateChanged.pipe((0, T.h)(n => "start" === n.phaseName), (0, x.q)(1), (0, h.h)(void 0));
    }
    event() {
      return this.messageComponent.event.asObservable();
    }
    checkCountAndDestroy() {
      0 === this.containerInstance.messages.length && this.overlayRef.overlayRef.dispose();
    }
  }
  let pe = (() => {
      class le {
        constructor(Se, qe, Rt) {
          this.overlayService = Se, this.ngZone = qe, this.globalConfig = Rt, this.overlayRef = null, this.messageContainer = null;
        }
        success(Se, qe) {
          return this.open(Se, {
            lifeTime: 3e3,
            ...qe,
            type: L.ak.SUCCESS
          });
        }
        info(Se, qe) {
          return this.open(Se, {
            lifeTime: 9e3,
            ...qe,
            type: L.ak.INFO
          });
        }
        warning(Se, qe) {
          return this.open(Se, {
            lifeTime: 12e3,
            ...qe,
            type: L.ak.WARNING
          });
        }
        error(Se, qe) {
          return this.open(Se, {
            lifeTime: 12e3,
            ...qe,
            type: L.ak.ERROR
          });
        }
        open(Se, qe) {
          return qe = {
            ...new R.Rs(),
            ...qe
          }, !this.overlayRef && !this.messageContainer && (this.overlayRef = this.overlayService.open(Se, this.buildConfig()), this.messageContainer = this.overlayRef?.overlayContainer ?? null, this.overlayRef?.overlayRef.detachments().pipe((0, x.q)(1)).subscribe(() => {
            this.overlayRef = null, this.messageContainer = null;
          })), this.attachMessage(Se, qe);
        }
        attachMessage(Se, qe) {
          if (!this.messageContainer || !this.overlayRef) throw b.vE.error("Произошло непредвиденная ошибка, окружение для LuMessage не было создано корректно!");
          const Rt = this.messageContainer.attachMessage(Se, qe);
          return new te(this.overlayRef, qe, this.messageContainer, this.ngZone, Rt.instance);
        }
        buildConfig() {
          return {
            positionStrategy: this.overlayService.globalPositionStrategy().right("0").bottom(this.globalConfig && this.globalConfig.bottomMargin),
            hasBackdrop: !1,
            panelClass: "lu-message-overlay",
            overlayContainer: G
          };
        }
      }
      return le.ɵfac = function (Se) {
        return new (Se || le)(t.LFG(M.c), t.LFG(t.R0b), t.LFG(B.XA, 8));
      }, le.ɵprov = t.Yz7({
        token: le,
        factory: le.ɵfac,
        providedIn: "root"
      }), le;
    })(),
    be = (() => {
      class le {}
      return le.ɵfac = function (Se) {
        return new (Se || le)();
      }, le.ɵmod = t.oAB({
        type: le
      }), le.ɵinj = t.cJS({
        providers: [pe],
        imports: [e.ez, M.H, a.h, N.wq, m.W1, d.GV]
      }), le;
    })();
});
