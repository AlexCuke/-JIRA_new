// Extracted from main; webpack module 44348. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    DA: () => fe,
    Dx: () => F,
    Fe: () => ke,
    H2: () => Ft,
    HY: () => We,
    Jd: () => Rt,
    Mn: () => mt,
    Q2: () => Y,
    QK: () => W,
    Qe: () => pe,
    Qu: () => ut,
    RP: () => Ct,
    Rn: () => q,
    VV: () => st,
    Vg: () => J,
    eV: () => G,
    fc: () => Re,
    iH: () => ae,
    p7: () => ye,
    pc: () => Et,
    qE: () => be,
    vE: () => qe,
    zH: () => te
  });
  var t = i(94650),
    e = i(77579),
    a = i(54968),
    m = i(56451),
    d = i(45191),
    M = i(11848),
    b = i(41742),
    A = i(59468),
    N = i(39300),
    I = i(95698),
    O = i(82722),
    L = i(54004),
    C = i(63900),
    v = i(78372),
    f = i(11520),
    E = i(36895),
    h = i(15635),
    x = i(85273),
    u = i(24006),
    T = i(97582),
    R = i(34304),
    B = i(46757),
    y = i(98184),
    j = i(3279);
  const W = new t.OlP("LU_SCROLL_STRATEGY");
  let F = (() => {
      class Ke {
        constructor(Ee, je) {
          this.documentRef = Ee, this.ngZone = je, this.overlayRef = null, this.ngUnsubscribe = new e.x();
        }
        attach(Ee) {
          this.overlayRef = Ee;
        }
        enable() {
          (0, a.R)(this.documentRef, "scroll", {
            capture: !0
          }).pipe((0, b.IU)(this.ngZone), (0, A.p)(10), (0, N.h)(Ee => Ee.target instanceof HTMLElement && (Ee.target.contains(this.origin) || !this.origin)), (0, I.q)(1), (0, O.R)(this.ngUnsubscribe)).subscribe(() => this.detach());
        }
        get origin() {
          const Ee = this.overlayRef?.getConfig();
          return Ee?.viewContainerRef ? (0, h.Nj)(Ee.viewContainerRef.element) : null;
        }
        disable() {
          this.ngUnsubscribe.next();
        }
        detach() {
          this.disable(), this.overlayRef?.hasAttached() && this.ngZone.run(() => {
            this.overlayRef?.detach();
          });
        }
      }
      return Ke.ɵfac = function (Ee) {
        return new (Ee || Ke)(t.LFG(E.K0), t.LFG(t.R0b));
      }, Ke.ɵprov = t.Yz7({
        token: Ke,
        factory: Ke.ɵfac,
        providedIn: "root"
      }), Ke;
    })(),
    Le = (() => {
      class Ke {
        constructor(Ee, je) {
          this.changeDetectorRef = Ee, this.ngControl = je, this.model = null, this.isDisabled = !1, this.onTouched = x.iD, this.onChange = x.iD, this.ngControl && (this.ngControl.valueAccessor = this);
        }
        get hasValue() {
          return (0, h.Uh)(this.model);
        }
        get disabled() {
          return this.computeDisabled();
        }
        set disabled(Ee) {
          this.setDisabledState(Ee);
        }
        get nativeDisabled() {
          return !!this.disabled || null;
        }
        computeDisabled() {
          return this.isDisabled;
        }
        registerOnChange(Ee) {
          this.onChange = Ee;
        }
        registerOnTouched(Ee) {
          this.onTouched = Ee;
        }
        writeValue(Ee) {
          this.model !== Ee && this.update(Ee);
        }
        writeValueFromHost(Ee) {
          this.model !== Ee && (this.update(Ee), this.onChange(Ee));
        }
        updateModel(Ee) {
          this.disabled || (this.model = Ee, this.onChange(this.model), this.changeDetectorRef.markForCheck());
        }
        setDisabledState(Ee) {
          this.isDisabled = Ee, this.changeDetectorRef.markForCheck();
        }
        update(Ee) {
          this.model = Ee, this.incomingUpdate && this.incomingUpdate(Ee), this.changeDetectorRef.markForCheck();
        }
      }
      return Ke.ɵfac = function (Ee) {
        return new (Ee || Ke)(t.Y36(t.sBO), t.Y36(u.a5));
      }, Ke.ɵdir = t.lG2({
        type: Ke,
        hostVars: 2,
        hostBindings: function (Ee, je) {
          2 & Ee && t.uIk("data-lu-disabled", je.disabled)("disabled", je.nativeDisabled);
        },
        inputs: {
          disabled: "disabled"
        }
      }), Ke;
    })(),
    ke = (() => {
      class Ke extends Le {
        constructor(Ee, je, Mt) {
          super(Ee, Mt), this.changeDetectorRef = Ee, this.host = je, this.ngControl = Mt, this.requestUpdate = () => {}, this.onControlChange = Je => {
            this.valueChange$.next(Je);
          }, this.valueChange$ = new e.x();
        }
        ngOnInit() {
          Promise.resolve().then(() => this.host?.registerControl(this));
        }
        computeDisabled() {
          return super.computeDisabled() || !!this.host?.disabled;
        }
        registerOnControlChange(Ee) {
          this.onControlChange = je => {
            Ee(je), this.valueChange$.next(je);
          };
        }
        registerRequestUpdate(Ee) {
          this.requestUpdate = Ee;
        }
        get valueChange() {
          return this.valueChange$.asObservable();
        }
        updateModel(Ee) {
          this.disabled || (super.updateModel(Ee), this.onControlChange(Ee));
        }
        writeValue(Ee) {
          this.model !== Ee && (super.writeValue(Ee), this.onControlChange(Ee));
        }
        ngOnDestroy() {
          this.host?.unregisterControl(this);
        }
      }
      return Ke.ɵfac = function (Ee) {
        t.$Z();
      }, Ke.ɵdir = t.lG2({
        type: Ke,
        features: [t.qOj]
      }), Ke;
    })();
  class J {}
  let fe = (() => {
    class Ke extends ke {
      constructor(Ee, je, Mt, Je, Xt) {
        super(Ee, Mt, Je), this.changeDetectorRef = Ee, this.compareHost = je, this.host = Mt, this.ngControl = Je, this.hasIntermediate = Xt, this.value = !0;
      }
      ngOnChanges({
        value: Ee
      }) {
        Ee && this.requestUpdate();
      }
      select() {
        this.updateModel(this.value);
      }
      deselect() {
        this.updateModel(!1);
      }
      intermediate() {
        this.updateModel(null);
      }
      toggle() {
        this.updateModel(!1 === this.checked && this.value);
      }
      get isIntermediate() {
        return null === this.model && !!this.hasIntermediate;
      }
      get checked() {
        return !!this.compare(this.value, this.model) || !!this.isIntermediate && null;
      }
      compare(Ee, je) {
        return this.compareHost?.compareFn(Ee, je) ?? (0, x.kX)(Ee, je);
      }
      incomingUpdate() {}
    }
    return Ke.ɵfac = function (Ee) {
      t.$Z();
    }, Ke.ɵdir = t.lG2({
      type: Ke,
      hostVars: 2,
      hostBindings: function (Ee, je) {
        2 & Ee && t.uIk("data-lu-intermediate", je.isIntermediate)("data-lu-checked", je.checked);
      },
      inputs: {
        value: "value"
      },
      features: [t.qOj, t.TTD]
    }), (0, T.gn)([R.J], Ke.prototype, "compare", null), Ke;
  })();
  class ye {}
  class ae {
    constructor(Ze, Ee = 0, je = "", Mt = {
      start: 0,
      end: 0
    }) {
      for (this.value = Ze, this.cursorPos = Ee, this.oldValue = je, this.oldSelection = Mt; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start;
    }
    get startChangePos() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    get insertedCount() {
      return this.cursorPos - this.startChangePos;
    }
    get inserted() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    get removedCount() {
      return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
    }
    get removed() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    get head() {
      return this.value.substring(0, this.startChangePos);
    }
    get removeDirection() {
      return !this.removedCount || this.insertedCount ? B.uw.NONE : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? B.uw.RIGHT : B.uw.LEFT;
    }
  }
  class Y {
    constructor(Ze, Ee) {
      this.values = new Set(), this.compareFn = Ze || x.kX, this.values = new Set(Ee || []);
    }
    get size() {
      return this.values.size;
    }
    *[Symbol.iterator]() {
      for (const Ze of this.values) yield Ze;
    }
    add(Ze) {
      !this.find(Ze) && this.values.add(Ze);
    }
    delete(Ze) {
      const Ee = this.find(Ze);
      Ee && this.values.delete(Ee);
    }
    has(Ze) {
      return this.values.has(Ze) || !!this.find(Ze);
    }
    clear() {
      this.values = new Set();
    }
    toArray() {
      return Array.from(this.values);
    }
    find(Ze) {
      if (this.values.has(Ze)) return Ze;
      for (const Ee of this.values) if (this.compareFn(Ze, Ee)) return Ee;
      return null;
    }
  }
  class G {}
  let te = (() => {
    class Ke extends ke {
      constructor(Ee, je, Mt) {
        super(Ee, je, Mt), this.changeDetectorRef = Ee, this.host = je, this.ngControl = Mt, this.controls = new Set(), this.updatesFrom = null, this.controlChange$ = new e.x();
      }
      registerControl(Ee) {
        this.controls.add(Ee), Promise.resolve().then(() => {
          Ee.writeValueFromHost(this.model);
        }), Ee.registerOnControlChange(je => {
          this.model !== je && (this.updatesFrom = Ee, this.updateModel(je), this.incomingUpdate(je), this.controlChange$.next([Ee, je]));
        }), Ee.registerRequestUpdate(() => {
          Ee.writeValueFromHost(this.model);
        });
      }
      unregisterControl(Ee) {
        this.controls.delete(Ee);
      }
      get controlChange() {
        return this.controlChange$.pipe((0, L.U)(([, Ee]) => Ee));
      }
      typedControlChange(Ee) {
        return this.controlChange$.pipe((0, N.h)(([je]) => je instanceof Ee), (0, L.U)(([, je]) => je));
      }
      updateModel(Ee) {
        super.updateModel(Ee), this.updateControls(this.model);
      }
      incomingUpdate(Ee) {
        this.updateControls(Ee);
      }
      updateControls(Ee) {
        this.controls.forEach(je => {
          je !== this.updatesFrom && je.writeValueFromHost(Ee);
        }), this.updatesFrom = null;
      }
    }
    return Ke.ɵfac = function (Ee) {
      t.$Z();
    }, Ke.ɵdir = t.lG2({
      type: Ke,
      features: [t.qOj]
    }), Ke;
  })();
  class pe {}
  class be {}
  const le = "Ui-Kit Lucidus: ";
  function n(Ke) {
    return `${le}${Ke}`;
  }
  function Se(Ke) {
    return Ke.join("\n");
  }
  class qe {
    static error(...Ze) {
      return new Error(n(Se(Ze)));
    }
    static warn(...Ze) {
      console.warn(n(Se(Ze)));
    }
  }
  let Rt = (() => {
      class Ke extends ke {
        constructor(Ee, je, Mt, Je, Xt) {
          super(Ee, Je, Xt), this.changeDetectorRef = Ee, this.getValue = je, this.setValue = Mt, this.host = Je, this.ngControl = Xt, this.controls = new Set(), this.updatesFrom = null, this.controlChange$ = new e.x();
        }
        registerControl(Ee) {
          this.controls.add(Ee), Promise.resolve().then(() => Ee.writeValueFromHost(this.getValue(this.model))), Ee.registerOnControlChange(je => {
            this.updatesFrom = Ee, this.updateModel(this.setValue(this.model, je)), this.controlChange$.next([Ee, je]);
          }), Ee.registerRequestUpdate(() => {
            Ee.writeValueFromHost(this.getValue(this.model));
          });
        }
        unregisterControl(Ee) {
          this.controls.delete(Ee);
        }
        get controlChange() {
          return this.controlChange$.pipe((0, L.U)(([, Ee]) => Ee));
        }
        typedControlChange(Ee) {
          return this.controlChange$.pipe((0, N.h)(([je]) => je instanceof Ee), (0, L.U)(([, je]) => je));
        }
        updateModel(Ee) {
          super.updateModel(Ee), this.updateControls(this.model);
        }
        incomingUpdate(Ee) {
          this.updateControls(Ee);
        }
        updateControls(Ee) {
          this.controls.forEach(je => {
            je !== this.updatesFrom && je.writeValueFromHost(this.getValue(Ee));
          }), this.updatesFrom = null;
        }
      }
      return Ke.ɵfac = function (Ee) {
        t.$Z();
      }, Ke.ɵdir = t.lG2({
        type: Ke,
        features: [t.qOj]
      }), Ke;
    })(),
    We = (() => {
      class Ke extends ke {
        constructor(Ee, je, Mt) {
          super(Ee, je, Mt), this.changeDetectorRef = Ee, this.host = je, this.ngControl = Mt, this.compareFn = x.kX, this.controls = new Set(), this.updatesFrom = null, this.proxyModel = new Y(), this.controlChange$ = new e.x();
        }
        registerControl(Ee) {
          Ee instanceof fe && !0 === Ee.value || (this.controls.add(Ee), Promise.resolve().then(() => this.updateControl(Ee)), Ee.registerOnControlChange(je => {
            this.updatesFrom = Ee, this.updateModel(this.getNewModel(Ee, je)), this.incomingUpdate(this.model), this.controlChange$.next([Ee, je]);
          }), Ee.registerRequestUpdate(() => {
            this.updateControl(Ee);
          }));
        }
        unregisterControl(Ee) {
          this.controls.delete(Ee);
        }
        get controlChange() {
          return this.controlChange$.pipe((0, L.U)(([, Ee]) => Ee));
        }
        typedControlChange(Ee) {
          return this.controlChange$.pipe((0, N.h)(([je]) => je instanceof Ee), (0, L.U)(([, je]) => je));
        }
        updateModel(Ee) {
          super.updateModel(Ee), this.updateControls();
        }
        incomingUpdate(Ee) {
          this.proxyModel = new Y(this.compareFn, Ee), this.updateControls();
        }
        updateControls() {
          this.controls.forEach(Ee => {
            Ee !== this.updatesFrom && this.updateControl(Ee);
          }), this.updatesFrom = null;
        }
        getNewModel(Ee, je) {
          if (Ee instanceof fe) Ee.checked ? this.proxyModel.add(Ee.value) : this.proxyModel.delete(Ee.value);else {
            if (!Array.isArray(je)) return this.proxyModel = new Y(this.compareFn), null;
            this.proxyModel = new Y(this.compareFn, je);
          }
          return this.proxyModel.toArray();
        }
        updateControl(Ee) {
          Ee.writeValueFromHost(Ee instanceof fe ? !!this.proxyModel.has(Ee.value) && Ee.value : this.model);
        }
      }
      return Ke.ɵfac = function (Ee) {
        t.$Z();
      }, Ke.ɵdir = t.lG2({
        type: Ke,
        inputs: {
          compareFn: "compareFn"
        },
        features: [t.qOj]
      }), Ke;
    })();
  class Re {}
  class st {}
  class q {
    constructor(Ze, Ee, je, Mt, Je, Xt) {
      this.overlayRef = Ze, this.overlayConfig = Ee, this.overlayContainer = je, this.ngZone = Mt, this.router = Je, this.location = Xt, this.overlayResult = null, this.opened = !0, this.afterOpen().pipe((0, C.w)(() => this.ngZone.runOutsideAngular(() => this.overlayRef.outsidePointerEvents())), (0, N.h)(Pi => !!this.overlayConfig.closeIfOutsideClick && this.outsideClickChecker(Pi)), (0, b.hx)(this.ngZone)).subscribe(() => this.close()), (0, a.R)(this.overlayRef.overlayElement, "click").pipe((0, N.h)(() => !!this.overlayConfig.closeIfInnerClick), (0, O.R)(this.overlayRef.detachments()), (0, b.hx)(this.ngZone)).subscribe(() => this.close()), this.router && this.overlayConfig.disposeOnRouteNavigation && this.router.events.pipe((0, N.h)(Pi => Pi instanceof j.m2), (0, b.hx)(this.ngZone), (0, O.R)(this.overlayRef.detachments())).subscribe(() => this.close()), this.location && this.overlayConfig.disposeOnNavigation && (0, b.mN)(this.location).pipe((0, O.R)(this.overlayRef.detachments())).subscribe(() => this.close()), this.overlayConfig.disableClose || (0, m.T)(this.overlayRef.backdropClick(), this.overlayRef.keydownEvents().pipe((0, N.h)(Pi => "Escape" === Pi.code))).pipe((0, O.R)(this.overlayRef.detachments())).subscribe(() => this.close());
      const Nn = (0, h.Nj)(this.overlayConfig.origin);
      Nn instanceof HTMLElement && this.ngZone.onStable.pipe((0, v.b)(10), (0, L.U)(() => Nn.getBoundingClientRect()), (0, f.G)(), (0, N.h)(([Pi, Ii]) => (0, h.EN)(Pi) && (0, h.EN)(Ii) && (Pi.x !== Ii.x || Pi.y !== Ii.y || Pi.width !== Ii.width || Pi.height !== Ii.height)), (0, b.IU)(this.ngZone), (0, O.R)(this.overlayRef.detachments())).subscribe(() => this.overlayRef.updatePosition());
    }
    focus() {
      this.overlayContainer.focus();
    }
    get isFocused() {
      return this.overlayContainer.isFocused;
    }
    get isOpened() {
      return this.opened;
    }
    get hasAttached() {
      return this.overlayRef.hasAttached();
    }
    close(Ze) {
      if (this.checkIfCanClose) {
        const Ee = this.checkIfCanClose();
        (0, d.b)(Ee) ? Ee.subscribe(je => {
          je && this.closeImmediately(Ze);
        }) : Ee && this.closeImmediately(Ze);
      } else this.closeImmediately(Ze);
    }
    beforeOpen() {
      return this.overlayContainer.animationEvent.pipe((0, N.h)(Ze => "beforeOpen" === Ze), (0, I.q)(1), (0, C.w)(() => x.iP));
    }
    afterOpen() {
      return this.overlayContainer.animationEvent.pipe((0, N.h)(Ze => "afterOpen" === Ze), (0, I.q)(1), (0, C.w)(() => x.iP));
    }
    beforeClose(Ze) {
      return Ze && (this.checkIfCanClose = Ze), (0, m.T)(this.overlayContainer.animationEvent.pipe((0, N.h)(Ee => "beforeClose" === Ee)), this.overlayRef.detachments()).pipe((0, I.q)(1), (0, L.U)(() => this.overlayResult));
    }
    afterClose() {
      return (0, m.T)(this.overlayContainer.animationEvent.pipe((0, N.h)(Ze => "afterClose" === Ze)), this.overlayRef.detachments()).pipe((0, I.q)(1), (0, L.U)(() => this.overlayResult));
    }
    positionChanges() {
      return this.overlayConfig.positionStrategy instanceof y._G ? this.overlayConfig.positionStrategy.positionChanges : M.C;
    }
    get componentInstance() {
      return this.overlayContainer.outlet.componentRef?.instance;
    }
    outsideClickChecker(Ze) {
      const Ee = Ze.target;
      if (Ee instanceof Element) {
        const je = (0, h.Nj)(this.overlayConfig.origin);
        if (je instanceof HTMLElement) return !je.contains(Ee);
      }
      return !0;
    }
    closeImmediately(Ze) {
      this.overlayResult = (0, h.EN)(Ze) ? Ze : null, this.afterClose().subscribe(() => {
        this.overlayRef.detach();
      }), this.overlayContainer.close(), this.overlayRef.detachBackdrop(), this.opened = !1;
    }
  }
  class mt {}
  class ut {}
  class Ct {}
  class Ft {
    constructor(Ze, Ee, je) {
      this.data = Ze, this.parent = Ee, this.children = new Set(), this.expanded = !1, this.hidden = !1, this.hovered = !1, this.hoverCallbacks = new Set(), je ? this.parent?.insertChildBefore(this) : this.parent?.registerChild(this);
    }
    registerChild(Ze) {
      this.children.add(Ze);
    }
    insertChildBefore(Ze) {
      const Ee = new Map([...this.children.entries()]);
      this.children.clear(), this.children.add(Ze), Ee.forEach(je => {
        this.children.add(je);
      });
    }
    get parents() {
      return [...(0, h._2)(this.parent), ...(0, h._2)(this.parent?.parents)];
    }
    get level() {
      return this.parent ? this.parent?.level + 1 : 0;
    }
    get topNode() {
      return this.parent ? this.parent.topNode : this;
    }
    unregisterChild(Ze) {
      this.children.delete(Ze);
    }
    destroy() {
      this.parent?.unregisterChild(this);
    }
    get isExpanded() {
      return this.expanded;
    }
    expand() {
      this.expanded = !0, this.parent?.expand();
    }
    expandAll() {
      this.expand(), this.children.forEach(Ze => Ze.expandAll());
    }
    collapse() {
      this.expanded = !1;
    }
    collapseAll() {
      this.collapse(), this.children.forEach(Ze => Ze.collapseAll());
    }
    toggle() {
      this.isExpanded ? this.collapse() : this.expand();
    }
    get isHidden() {
      return this.hidden;
    }
    hide() {
      this.hidden = !0;
    }
    show() {
      this.hidden = !1, this.parent?.show();
    }
    registerHoverChanged(Ze) {
      this.hoverCallbacks.add(Ze);
    }
    get isHovered() {
      return this.hovered;
    }
    hover() {
      this.hovered = !0, this.runHoverCallbacks();
    }
    blur() {
      this.hovered = !1, this.runHoverCallbacks();
    }
    unregisterHoverChanged(Ze) {
      this.hoverCallbacks.delete(Ze);
    }
    sortNode(Ze) {
      const Ee = new Map([...this.children.entries()].sort(Ze));
      this.children.clear(), Ee.forEach(je => {
        this.children.add(je);
      });
    }
    runHoverCallbacks() {
      this.hoverCallbacks.forEach(Ze => Ze());
    }
  }
  class Et {}
});
