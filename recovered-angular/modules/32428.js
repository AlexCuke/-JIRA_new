// Extracted from main; webpack module 32428. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    hD: () => qe,
    Y0: () => ut,
    Hu: () => Ft,
    Xg: () => q,
    Ld: () => Se
  });
  var t = i(94650),
    e = i(77579),
    a = i(56451),
    m = i(3279),
    d = i(37340),
    M = i(15635),
    b = i(85273),
    A = i(41742),
    N = i(17504),
    I = i(36895),
    O = i(89740),
    L = i(97582),
    C = i(42730),
    v = i(39300),
    f = i(35684),
    E = i(82722),
    h = i(78372),
    x = i(68675),
    u = i(63900),
    T = i(69718),
    R = i(21281),
    B = i(69751);
  let y = (() => {
      class Et {
        create(Me) {
          return typeof MutationObserver > "u" ? null : new MutationObserver(Me);
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵprov = t.Yz7({
        token: Et,
        factory: Et.ɵfac,
        providedIn: "root"
      }), Et;
    })(),
    j = (() => {
      class Et {
        constructor(Me) {
          this._mutationObserverFactory = Me, this._observedElements = new Map();
        }
        ngOnDestroy() {
          this._observedElements.forEach((Me, Ke) => this._cleanupObserver(Ke));
        }
        observe(Me) {
          const Ke = (0, R.fI)(Me);
          return new B.y(Ze => {
            const je = this._observeElement(Ke).subscribe(Ze);
            return () => {
              je.unsubscribe(), this._unobserveElement(Ke);
            };
          });
        }
        _observeElement(Me) {
          if (this._observedElements.has(Me)) this._observedElements.get(Me).count++;else {
            const Ke = new e.x(),
              Ze = this._mutationObserverFactory.create(Ee => Ke.next(Ee));
            Ze && Ze.observe(Me, {
              characterData: !0,
              childList: !0,
              subtree: !0
            }), this._observedElements.set(Me, {
              observer: Ze,
              stream: Ke,
              count: 1
            });
          }
          return this._observedElements.get(Me).stream;
        }
        _unobserveElement(Me) {
          this._observedElements.has(Me) && (this._observedElements.get(Me).count--, this._observedElements.get(Me).count || this._cleanupObserver(Me));
        }
        _cleanupObserver(Me) {
          if (this._observedElements.has(Me)) {
            const {
              observer: Ke,
              stream: Ze
            } = this._observedElements.get(Me);
            Ke && Ke.disconnect(), Ze.complete(), this._observedElements.delete(Me);
          }
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(t.LFG(y));
      }, Et.ɵprov = t.Yz7({
        token: Et,
        factory: Et.ɵfac,
        providedIn: "root"
      }), Et;
    })();
  function Le(Et, Ue) {
    1 & Et && t.Hsn(0);
  }
  const ke = ["*"];
  function J(Et, Ue) {
    if (1 & Et && (t.ynx(0), t._uU(1), t.BQk()), 2 & Et) {
      const Me = Ue.polymorpheusOutlet;
      t.xp6(1), t.Oqu(Me);
    }
  }
  function fe(Et, Ue) {
    if (1 & Et && t.YNc(0, J, 2, 1, "ng-container", 3), 2 & Et) {
      const Me = t.oxw(2);
      t.Q6J("polymorpheusOutlet", Me.content);
    }
  }
  function ye(Et, Ue) {
    if (1 & Et) {
      const Me = t.EpF();
      t.TgZ(0, "div", 1), t.NdJ("@bodyAnimation.start", function (Ze) {
        t.CHM(Me);
        const Ee = t.oxw();
        return t.KtG(Ee.animationChange.next(Ze));
      })("@bodyAnimation.done", function (Ze) {
        t.CHM(Me);
        const Ee = t.oxw();
        return t.KtG(Ee.animationChange.next(Ze));
      }), t.YNc(1, fe, 1, 1, "ng-template", 2), t.qZA();
    }
    if (2 & Et) {
      const Me = t.oxw();
      t.Q6J("@bodyAnimation", Me.state);
    }
  }
  function ae(Et, Ue) {
    1 & Et && (t.TgZ(0, "div", 1), t.Hsn(1), t.qZA());
  }
  function Y(Et, Ue) {
    if (1 & Et && (t.ynx(0), t._uU(1), t.BQk()), 2 & Et) {
      const Me = Ue.polymorpheusOutlet;
      t.xp6(1), t.Oqu(Me);
    }
  }
  function G(Et, Ue) {
    if (1 & Et) {
      const Me = t.EpF();
      t.TgZ(0, "lu-tab-header-item", 5), t.NdJ("selectedIndexChange", function (Ze) {
        t.CHM(Me);
        const Ee = t.oxw();
        return t.KtG(Ee.selectedIndex = Ze);
      })("selectedIndexChange", function (Ze) {
        t.CHM(Me);
        const Ee = t.oxw();
        return t.KtG(Ee.tabChangeEvent(Ze));
      })("changeContent", function () {
        t.CHM(Me);
        const Ze = t.oxw();
        return t.KtG(Ze.tabHeaderChangeEvent());
      }), t.qZA();
    }
    if (2 & Et) {
      const Me = Ue.$implicit,
        Ke = Ue.index,
        Ze = t.oxw();
      t.Q6J("index", Ke)("tab", Me)("selectedIndex", Ze.selectedIndex)("content", Me.label || Me.title);
    }
  }
  function te(Et, Ue) {
    if (1 & Et && t._UZ(0, "lu-tab-body", 7), 2 & Et) {
      const Me = Ue.$implicit,
        Ke = Ue.index,
        Ze = t.oxw(2);
      t.Q6J("content", Me.content)("selectedIndex", Ze.selectedIndex)("index", Ke);
    }
  }
  function pe(Et, Ue) {
    if (1 & Et && (t.ynx(0), t.YNc(1, te, 1, 3, "lu-tab-body", 6), t.BQk()), 2 & Et) {
      const Me = t.oxw();
      t.xp6(1), t.Q6J("ngForOf", Me.tabs);
    }
  }
  function be(Et, Ue) {
    if (1 & Et && (t.ynx(0), t.TgZ(1, "lu-tab-body", 8), t.Hsn(2), t.qZA(), t.BQk()), 2 & Et) {
      const Me = t.oxw();
      t.xp6(1), t.Q6J("withPortal", !1)("index", Me.selectedIndex)("selectedIndex", Me.selectedIndex);
    }
  }
  const le = [[["", "luTabGroupOutlet", ""]]],
    n = ["[luTabGroupOutlet]"];
  let Se = (() => {
      class Et {}
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵdir = t.lG2({
        type: Et,
        selectors: [["", "luTabTitle", ""]]
      }), Et;
    })(),
    qe = (() => {
      class Et {
        constructor(Me) {
          this.routerLink = Me, this.label = "", this.id = null, this.active = !1, this.activeChange$ = new e.x();
        }
        ngOnChanges({
          active: Me
        }) {
          Me && this.activeChange$.next(Me.currentValue);
        }
        get activeChange() {
          return this.activeChange$.asObservable();
        }
        clickEvent(Me) {
          this.routerLink && this.routerLink.onClick(Me.button, Me.ctrlKey, Me.metaKey, Me.shiftKey, Me.metaKey);
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(t.Y36(m.yS, 9));
      }, Et.ɵcmp = t.Xpm({
        type: Et,
        selectors: [["lu-tab"], ["a", "lu-tab", ""]],
        contentQueries: function (Me, Ke, Ze) {
          if (1 & Me && t.Suo(Ze, Se, 5, t.Rgc), 2 & Me) {
            let Ee;
            t.iGM(Ee = t.CRH()) && (Ke.title = Ee.first);
          }
        },
        viewQuery: function (Me, Ke) {
          if (1 & Me && t.Gf(t.Rgc, 7), 2 & Me) {
            let Ze;
            t.iGM(Ze = t.CRH()) && (Ke.content = Ze.first);
          }
        },
        inputs: {
          label: "label",
          id: "id",
          active: "active"
        },
        features: [t.TTD],
        ngContentSelectors: ke,
        decls: 1,
        vars: 0,
        template: function (Me, Ke) {
          1 & Me && (t.F$t(), t.YNc(0, Le, 1, 0, "ng-template"));
        },
        changeDetection: 0
      }), Et;
    })();
  const Rt = new t.OlP("LU_TAB_BODY");
  let We = (() => {
      let Et = class {
        constructor(Me, Ke, Ze) {
          this.templateRef = Me, this.viewContainerRef = Ke, this.host = Ze, this.embeddedView = null, this.host.animationChange.pipe((0, v.h)(Ee => !this.hasAttached && "start" === Ee.phaseName && [N.Rd.SHOW_FROM_LEFT, N.Rd.SHOW_FROM_RIGHT].includes(Ee.toState)), (0, C.t)(this)).subscribe(() => this.attach()), this.host.animationChange.pipe((0, v.h)(Ee => "done" === Ee.phaseName && [N.Rd.HIDE_TO_LEFT, N.Rd.HIDE_TO_RIGHT].includes(Ee.toState)), (0, C.t)(this)).subscribe(() => this.detach());
        }
        attach() {
          this.embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        detach() {
          this.embeddedView && (this.embeddedView.destroy(), this.embeddedView = null);
        }
        get hasAttached() {
          return !!this.embeddedView;
        }
      };
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(t.Y36(t.Rgc), t.Y36(t.s_b), t.Y36(Rt));
      }, Et.ɵdir = t.lG2({
        type: Et,
        selectors: [["", "luTabBodyPortal", ""]]
      }), Et = (0, L.gn)([(0, C.c)()], Et), Et;
    })(),
    Re = (() => {
      class Et {
        constructor() {
          this.content = "", this.index = null, this.selectedIndex = null, this.withPortal = !0, this.state = null, this.animationChange = new e.x();
        }
        ngOnChanges({
          selectedIndex: Me
        }) {
          (0, M.EN)(this.index) && (this.state = Me?.currentValue > Me?.previousValue ? this.isVisible ? N.Rd.SHOW_FROM_RIGHT : N.Rd.HIDE_TO_LEFT : this.isVisible ? N.Rd.SHOW_FROM_LEFT : N.Rd.HIDE_TO_RIGHT);
        }
        get isVisible() {
          return this.selectedIndex === this.index;
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵcmp = t.Xpm({
        type: Et,
        selectors: [["lu-tab-body"]],
        hostVars: 1,
        hostBindings: function (Me, Ke) {
          2 & Me && t.uIk("data-lu-visible", Ke.isVisible);
        },
        inputs: {
          content: "content",
          index: "index",
          selectedIndex: "selectedIndex",
          withPortal: "withPortal"
        },
        features: [t._Bn([{
          provide: Rt,
          useExisting: Et
        }]), t.TTD],
        ngContentSelectors: ke,
        decls: 2,
        vars: 2,
        consts: [["class", "lu-tab-body-content", 4, "ngIf"], [1, "lu-tab-body-content"], ["luTabBodyPortal", ""], [4, "polymorpheusOutlet"]],
        template: function (Me, Ke) {
          1 & Me && (t.F$t(), t.YNc(0, ye, 2, 1, "div", 0), t.YNc(1, ae, 2, 0, "div", 0)), 2 & Me && (t.Q6J("ngIf", Ke.withPortal), t.xp6(1), t.Q6J("ngIf", !Ke.withPortal));
        },
        dependencies: [I.O5, O.Li, We],
        styles: ["[_nghost-%COMP%]{position:absolute;display:flex;top:0;left:0;right:0;bottom:0;overflow:hidden}[data-lu-visible=true][_nghost-%COMP%]{position:relative;z-index:1;overflow-x:hidden;overflow-y:auto;flex-grow:1}.lu-tab-body-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:auto;width:100%}"],
        data: {
          animation: [(0, d.X$)("bodyAnimation", [(0, d.SB)("void", (0, d.oB)({
            transform: "none"
          })), (0, d.SB)(N.Rd.SHOW_FROM_LEFT, (0, d.oB)({
            transform: "translateX(0%)"
          })), (0, d.SB)(N.Rd.SHOW_FROM_RIGHT, (0, d.oB)({
            transform: "translateX(0%)"
          })), (0, d.SB)(N.Rd.HIDE_TO_LEFT, (0, d.oB)({
            transform: "translateX(-100%)"
          })), (0, d.SB)(N.Rd.HIDE_TO_RIGHT, (0, d.oB)({
            transform: "translateX(100%)"
          })), (0, d.eR)(`${N.Rd.HIDE_TO_RIGHT} =>  ${N.Rd.SHOW_FROM_LEFT},\n                                ${N.Rd.HIDE_TO_LEFT} =>  ${N.Rd.SHOW_FROM_LEFT}`, [(0, d.oB)({
            transform: "translateX(-100%)"
          }), (0, d.jt)("0.3s cubic-bezier(0.35, 0, 0.25, 1)")]), (0, d.eR)(`${N.Rd.HIDE_TO_RIGHT} =>  ${N.Rd.SHOW_FROM_RIGHT},\n                                ${N.Rd.HIDE_TO_LEFT} =>  ${N.Rd.SHOW_FROM_RIGHT}`, [(0, d.oB)({
            transform: "translateX(100%)"
          }), (0, d.jt)("0.3s cubic-bezier(0.35, 0, 0.25, 1)")]), (0, d.eR)("* => " + N.Rd.HIDE_TO_RIGHT + ", * => " + N.Rd.HIDE_TO_LEFT, [(0, d.oB)({
            transform: "translateX(0%)"
          }), (0, d.jt)("0.3s cubic-bezier(0.35, 0, 0.25, 1)")])])]
        },
        changeDetection: 0
      }), Et;
    })(),
    st = (() => {
      class Et {
        get isSelected() {
          return this.index === this.selectedIndex;
        }
        clickEvent(Me) {
          this.selectedIndexChange.next(this.index), this.tab?.clickEvent(Me);
        }
        constructor(Me, Ke) {
          this.elementRef = Me, this.contentObserver = Ke, this.ngUnsubscribe = new e.x(), this.index = 0, this.selectedIndex = null, this.content = "", this.tab = null, this.selectedIndexChange = new t.vpe(), this.changeContent = new t.vpe(), this.contentObserver.observe(this.elementRef).pipe((0, f.T)(1), (0, E.R)(this.ngUnsubscribe)).subscribe(() => {
            this.changeContent.emit();
          });
        }
        ngOnDestroy() {
          this.ngUnsubscribe.next(), this.ngUnsubscribe.complete();
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(t.Y36(t.SBq), t.Y36(j));
      }, Et.ɵcmp = t.Xpm({
        type: Et,
        selectors: [["lu-tab-header-item"]],
        hostVars: 1,
        hostBindings: function (Me, Ke) {
          1 & Me && t.NdJ("click", function (Ee) {
            return Ke.clickEvent(Ee);
          }), 2 & Me && t.uIk("data-lu-selected", Ke.isSelected);
        },
        inputs: {
          index: "index",
          selectedIndex: "selectedIndex",
          content: "content",
          tab: "tab"
        },
        outputs: {
          selectedIndexChange: "selectedIndexChange",
          changeContent: "changeContent"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "polymorpheusOutlet"]],
        template: function (Me, Ke) {
          1 & Me && t.YNc(0, Y, 2, 1, "ng-container", 0), 2 & Me && t.Q6J("polymorpheusOutlet", Ke.content);
        },
        dependencies: [O.Li],
        styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;margin-right:calc(var(--lu-base-gutter) * 4);white-space:nowrap;--lu-font-weight: 600;--lu-line-height: 48px;--lu-text-color: var(--lu-primary-hover)}[_nghost-%COMP%]:hover:not([data-lu-selected=true]){--lu-text-color: var(--lu-primary-active)}[data-lu-selected=true][_nghost-%COMP%]{--lu-text-color: var(--lu-black-80);--lu-badge-background: var(--lu-black-10);--lu-badge-text: var(--lu-black-54)}"],
        changeDetection: 0
      }), Et;
    })(),
    q = (() => {
      class Et {}
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵdir = t.lG2({
        type: Et,
        selectors: [["", "luTabGroupOutlet", ""]]
      }), Et;
    })(),
    mt = (() => {
      class Et {
        constructor(Me, Ke, Ze) {
          this.elementRef = Me, this.contentObserver = Ke, this.ngZone = Ze, this.bindTo = null, this.isBackground = !1, this.isVertical = !1, this.position = "", this.ngUnsubscribe = new e.x(), this.resizeObserver = null, this.updatePosition$ = new e.x(), this.animationFrameId = null, this.updatePosition$.pipe((0, h.b)(10), (0, E.R)(this.ngUnsubscribe)).subscribe(() => {
            this.bindTo && this.updateStyles((0, M.Nj)(this.bindTo));
          });
        }
        ngOnChanges({
          bindTo: Me
        }) {
          Me && (this.alignToElement((0, M.Nj)(Me.currentValue) || null), this.tabHeaderChange.pipe((0, h.b)(10), (0, E.R)(this.ngUnsubscribe)).subscribe(() => {
            this.updatePosition$.next();
          }));
        }
        alignToElement(Me) {
          this.ngUnsubscribe.next(), this.cleanupResizeObserver(), (0, M.EN)(Me) && (this.show(), this.updateStyles(Me), this.contentObserver.observe(Me).pipe((0, h.b)(10), (0, E.R)(this.ngUnsubscribe)).subscribe(() => this.updatePosition$.next()), this.ngZone.runOutsideAngular(() => {
            this.resizeObserver = new ResizeObserver(() => {
              this.updatePosition$.next();
            }), this.resizeObserver.observe(Me), Me.parentElement && this.resizeObserver.observe(Me.parentElement);
          }));
        }
        show() {
          this.elementRef.nativeElement.style.visibility = "visible";
        }
        hide() {
          this.elementRef.nativeElement.style.visibility = "hidden";
        }
        updateStyles(Me) {
          null !== this.animationFrameId && cancelAnimationFrame(this.animationFrameId), this.ngZone.runOutsideAngular(() => {
            this.animationFrameId = requestAnimationFrame(() => {
              const Ke = this.getStyle(Me),
                Ze = this.elementRef.nativeElement;
              this.isVertical ? (Ze.style.top = Ke.top, Ze.style.height = Ke.height, Ze.style.width = this.isBackground ? Ke.width : "3px", Ze.style.left = "0", "right" === this.position && (Ze.style.top = Ke.top, Ze.style.height = Ke.height, Ze.style.width = "4px", Ze.style.left = "auto", Ze.style.right = "0")) : (Ze.style.left = Ke.left, Ze.style.width = Ke.width, Ze.style.height = this.isBackground ? Ke.height : "3px", Ze.style.bottom = "0"), this.animationFrameId = null;
            });
          });
        }
        getStyle(Me) {
          return {
            top: Me ? `${Me.offsetTop || 0}px` : "0",
            left: Me ? `${Me.offsetLeft || 0}px` : "0",
            width: Me ? `${Me.offsetWidth || 0}px` : "0",
            height: Me ? `${Me.offsetHeight || 0}px` : "0"
          };
        }
        cleanupResizeObserver() {
          this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), null !== this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
        }
        ngOnDestroy() {
          this.ngUnsubscribe.next(), this.ngUnsubscribe.complete(), this.updatePosition$.complete(), this.cleanupResizeObserver();
        }
      }
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(t.Y36(t.SBq), t.Y36(j), t.Y36(t.R0b));
      }, Et.ɵdir = t.lG2({
        type: Et,
        selectors: [["lu-tab-select"]],
        hostVars: 1,
        hostBindings: function (Me, Ke) {
          2 & Me && t.uIk("data-lu-has-background", Ke.isBackground);
        },
        inputs: {
          tabHeaderChange: "tabHeaderChange",
          bindTo: "bindTo",
          isBackground: "isBackground",
          isVertical: "isVertical",
          position: "position"
        },
        features: [t.TTD]
      }), Et;
    })(),
    ut = (() => {
      let Et = class {
        get direction() {
          return "vertical" === this.orientation;
        }
        constructor(Me, Ke) {
          this.changeDetectorRef = Me, this.ngZone = Ke, this.hasDivider = !1, this.hasItemDivider = !1, this.initType = "default", this.openedTab = null, this.tabChange = new t.vpe(), this.tabHeaderChange = new e.x(), this.orientation = "horizontal", this.headerItems = b.Mm, this.tabs = b.Mm, this.tabBodies = b.Mm, this.selectedIndex = 0, this.isVertical = !1, this.tabsCount = 0;
        }
        ngOnChanges({
          openedTab: Me
        }) {
          Me && this.openedTab && this.openTab(this.openedTab);
        }
        ngAfterContentInit() {
          this.tabsCount = this.tabs.length, this.openedTab ? this.openTab(this.openedTab) : this.selectedIndex = 0, this.tabs.changes.pipe((0, x.O)(this.tabs), (0, u.w)(Me => (this.tabs.length !== this.tabsCount && (this.tabsCount = this.tabs.length, this.changeDetectorRef.markForCheck()), (0, a.T)(...Me.map(Ke => Ke.activeChange.pipe((0, T.h)(Ke)))))), (0, v.h)(Me => Me.active), (0, A.hx)(this.ngZone)).subscribe(Me => {
            this.selectedIndex = this.tabs.toArray().indexOf(Me), this.changeDetectorRef.markForCheck();
          });
        }
        openTab(Me) {
          this.selectedIndex = this.tabs.toArray().findIndex(Ke => Ke.id === Me) ?? 0, this.changeDetectorRef.markForCheck();
        }
        get selectedHeaderItem() {
          return this.headerItems.get(this.selectedIndex) || null;
        }
        tabChangeEvent(Me) {
          this.tabChange.emit(this.tabs.get(Me)?.id ?? Me);
        }
        tabHeaderChangeEvent() {
          this.tabHeaderChange.next();
        }
      };
      return Et.ɵfac = function (Me) {
        return new (Me || Et)(t.Y36(t.sBO), t.Y36(t.R0b));
      }, Et.ɵcmp = t.Xpm({
        type: Et,
        selectors: [["lu-tab-group"]],
        contentQueries: function (Me, Ke, Ze) {
          if (1 & Me && (t.Suo(Ze, q, 5), t.Suo(Ze, qe, 4)), 2 & Me) {
            let Ee;
            t.iGM(Ee = t.CRH()) && (Ke.tabGroupOutlet = Ee.first), t.iGM(Ee = t.CRH()) && (Ke.tabs = Ee);
          }
        },
        viewQuery: function (Me, Ke) {
          if (1 & Me && (t.Gf(st, 5, t.SBq), t.Gf(Re, 5)), 2 & Me) {
            let Ze;
            t.iGM(Ze = t.CRH()) && (Ke.headerItems = Ze), t.iGM(Ze = t.CRH()) && (Ke.tabBodies = Ze);
          }
        },
        hostVars: 2,
        hostBindings: function (Me, Ke) {
          2 & Me && t.ekj("-is-vertical", Ke.direction);
        },
        inputs: {
          hasDivider: "hasDivider",
          hasItemDivider: "hasItemDivider",
          initType: "initType",
          openedTab: "openedTab",
          orientation: "orientation"
        },
        outputs: {
          tabChange: "tabChange"
        },
        features: [t.TTD],
        ngContentSelectors: n,
        decls: 6,
        vars: 12,
        consts: [[1, "lu-tab-header-wrapper"], ["data-test-role", "tab", 3, "index", "tab", "selectedIndex", "content", "selectedIndexChange", "changeContent", 4, "ngFor", "ngForOf"], [3, "tabHeaderChange", "position", "isVertical", "bindTo", "isBackground"], [1, "lu-tab-body-wrapper"], [4, "ngIf"], ["data-test-role", "tab", 3, "index", "tab", "selectedIndex", "content", "selectedIndexChange", "changeContent"], [3, "content", "selectedIndex", "index", 4, "ngFor", "ngForOf"], [3, "content", "selectedIndex", "index"], [3, "withPortal", "index", "selectedIndex"]],
        template: function (Me, Ke) {
          1 & Me && (t.F$t(le), t.TgZ(0, "div", 0), t.YNc(1, G, 1, 4, "lu-tab-header-item", 1), t._UZ(2, "lu-tab-select", 2), t.qZA(), t.TgZ(3, "div", 3), t.YNc(4, pe, 2, 1, "ng-container", 4), t.YNc(5, be, 3, 3, "ng-container", 4), t.qZA()), 2 & Me && (t.ekj("-has-divider", Ke.hasDivider)("-has-item-divider", Ke.hasItemDivider), t.xp6(1), t.Q6J("ngForOf", Ke.tabs), t.xp6(1), t.Q6J("tabHeaderChange", Ke.tabHeaderChange.asObservable())("position", "vertical" === Ke.orientation ? "right" : "")("isVertical", "vertical" === Ke.orientation)("bindTo", Ke.selectedHeaderItem)("isBackground", !0), t.xp6(2), t.Q6J("ngIf", !Ke.tabGroupOutlet), t.xp6(1), t.Q6J("ngIf", Ke.tabGroupOutlet));
        },
        dependencies: [I.sg, I.O5, Re, mt, st],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1;height:100%}.-is-vertical[_nghost-%COMP%]{flex-direction:row}.-is-vertical[_nghost-%COMP%]   lu-tab-select[_ngcontent-%COMP%]{position:absolute;display:block;bottom:0;background-color:var(--lu-yellow-100);transition:225ms cubic-bezier(.4,0,.2,1)}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper[_ngcontent-%COMP%]{flex-direction:column;border-bottom:none}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-divider[_ngcontent-%COMP%]{border-bottom:none;box-shadow:-1px 0 0 0 var(--lu-black-15) inset}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-item-divider[_ngcontent-%COMP%]   lu-tab-header-item[_ngcontent-%COMP%]{position:relative}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-item-divider[_ngcontent-%COMP%]   lu-tab-header-item[_ngcontent-%COMP%] + lu-tab-header-item[_ngcontent-%COMP%]:before{content:\"\";height:1px;left:12px;top:0;right:12px;position:absolute;background:#D9D9D9}.-is-vertical[_nghost-%COMP%]   .lu-tab-header-wrapper[_ngcontent-%COMP%]   lu-tab-header-item[_ngcontent-%COMP%]{box-sizing:border-box;margin-right:0}[_nghost-%COMP%]   .lu-tab-body-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-grow:1;overflow:hidden}[_nghost-%COMP%]   .lu-tab-header-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row}[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-divider[_ngcontent-%COMP%]{border-bottom:1px solid var(--lu-black-15)}[_nghost-%COMP%]   .lu-tab-header-wrapper.-has-divider[_ngcontent-%COMP%]   lu-tab-select[_ngcontent-%COMP%]{bottom:-1px!important}[_nghost-%COMP%]:not(.-is-vertical)   lu-tab-select[_ngcontent-%COMP%]{position:absolute;display:block;bottom:0;height:2px!important;background-color:var(--lu-yellow-100);transition:225ms cubic-bezier(.4,0,.2,1)}"],
        changeDetection: 0
      }), Et = (0, L.gn)([(0, C.c)()], Et), Et;
    })(),
    Ft = (() => {
      class Et {}
      return Et.ɵfac = function (Me) {
        return new (Me || Et)();
      }, Et.ɵmod = t.oAB({
        type: Et
      }), Et.ɵinj = t.cJS({
        imports: [I.ez, O.wq]
      }), Et;
    })();
});
