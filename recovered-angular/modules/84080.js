// Extracted from main; webpack module 84080. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C5: () => I,
    Pl: () => u,
    eL: () => R,
    ig: () => h,
    u0: () => f
  });
  var t = i(94650),
    e = i(36895);
  class N {
    attach(j) {
      return this._attachedHost = j, j.attach(this);
    }
    detach() {
      let j = this._attachedHost;
      null != j && (this._attachedHost = null, j.detach());
    }
    get isAttached() {
      return null != this._attachedHost;
    }
    setAttachedHost(j) {
      this._attachedHost = j;
    }
  }
  class I extends N {
    constructor(j, W, F, Le, ke) {
      super(), this.component = j, this.viewContainerRef = W, this.injector = F, this.componentFactoryResolver = Le, this.projectableNodes = ke;
    }
  }
  class O extends N {
    constructor(j, W, F, Le) {
      super(), this.templateRef = j, this.viewContainerRef = W, this.context = F, this.injector = Le;
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(j, W = this.context) {
      return this.context = W, super.attach(j);
    }
    detach() {
      return this.context = void 0, super.detach();
    }
  }
  class L extends N {
    constructor(j) {
      super(), this.element = j instanceof t.SBq ? j.nativeElement : j;
    }
  }
  class C {
    constructor() {
      this._isDisposed = !1, this.attachDomPortal = null;
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(j) {
      return j instanceof I ? (this._attachedPortal = j, this.attachComponentPortal(j)) : j instanceof O ? (this._attachedPortal = j, this.attachTemplatePortal(j)) : this.attachDomPortal && j instanceof L ? (this._attachedPortal = j, this.attachDomPortal(j)) : void 0;
    }
    detach() {
      this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0;
    }
    setDisposeFn(j) {
      this._disposeFn = j;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), this._disposeFn = null);
    }
  }
  class f extends C {
    constructor(j, W, F, Le, ke) {
      super(), this.outletElement = j, this._componentFactoryResolver = W, this._appRef = F, this._defaultInjector = Le, this.attachDomPortal = J => {
        const fe = J.element,
          ye = this._document.createComment("dom-portal");
        fe.parentNode.insertBefore(ye, fe), this.outletElement.appendChild(fe), this._attachedPortal = J, super.setDisposeFn(() => {
          ye.parentNode && ye.parentNode.replaceChild(fe, ye);
        });
      }, this._document = ke;
    }
    attachComponentPortal(j) {
      const F = (j.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(j.component);
      let Le;
      return j.viewContainerRef ? (Le = j.viewContainerRef.createComponent(F, j.viewContainerRef.length, j.injector || j.viewContainerRef.injector, j.projectableNodes || void 0), this.setDisposeFn(() => Le.destroy())) : (Le = F.create(j.injector || this._defaultInjector || t.zs3.NULL), this._appRef.attachView(Le.hostView), this.setDisposeFn(() => {
        this._appRef.viewCount > 0 && this._appRef.detachView(Le.hostView), Le.destroy();
      })), this.outletElement.appendChild(this._getComponentRootNode(Le)), this._attachedPortal = j, Le;
    }
    attachTemplatePortal(j) {
      let W = j.viewContainerRef,
        F = W.createEmbeddedView(j.templateRef, j.context, {
          injector: j.injector
        });
      return F.rootNodes.forEach(Le => this.outletElement.appendChild(Le)), F.detectChanges(), this.setDisposeFn(() => {
        let Le = W.indexOf(F);
        -1 !== Le && W.remove(Le);
      }), this._attachedPortal = j, F;
    }
    dispose() {
      super.dispose(), this.outletElement.remove();
    }
    _getComponentRootNode(j) {
      return j.hostView.rootNodes[0];
    }
  }
  let h = (() => {
      class y extends O {
        constructor(W, F) {
          super(W, F);
        }
      }
      return y.ɵfac = function (W) {
        return new (W || y)(t.Y36(t.Rgc), t.Y36(t.s_b));
      }, y.ɵdir = t.lG2({
        type: y,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [t.qOj]
      }), y;
    })(),
    u = (() => {
      class y extends C {
        constructor(W, F, Le) {
          super(), this._componentFactoryResolver = W, this._viewContainerRef = F, this._isInitialized = !1, this.attached = new t.vpe(), this.attachDomPortal = ke => {
            const J = ke.element,
              fe = this._document.createComment("dom-portal");
            ke.setAttachedHost(this), J.parentNode.insertBefore(fe, J), this._getRootNode().appendChild(J), this._attachedPortal = ke, super.setDisposeFn(() => {
              fe.parentNode && fe.parentNode.replaceChild(J, fe);
            });
          }, this._document = Le;
        }
        get portal() {
          return this._attachedPortal;
        }
        set portal(W) {
          this.hasAttached() && !W && !this._isInitialized || (this.hasAttached() && super.detach(), W && super.attach(W), this._attachedPortal = W || null);
        }
        get attachedRef() {
          return this._attachedRef;
        }
        ngOnInit() {
          this._isInitialized = !0;
        }
        ngOnDestroy() {
          super.dispose(), this._attachedRef = this._attachedPortal = null;
        }
        attachComponentPortal(W) {
          W.setAttachedHost(this);
          const F = null != W.viewContainerRef ? W.viewContainerRef : this._viewContainerRef,
            ke = (W.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(W.component),
            J = F.createComponent(ke, F.length, W.injector || F.injector, W.projectableNodes || void 0);
          return F !== this._viewContainerRef && this._getRootNode().appendChild(J.hostView.rootNodes[0]), super.setDisposeFn(() => J.destroy()), this._attachedPortal = W, this._attachedRef = J, this.attached.emit(J), J;
        }
        attachTemplatePortal(W) {
          W.setAttachedHost(this);
          const F = this._viewContainerRef.createEmbeddedView(W.templateRef, W.context, {
            injector: W.injector
          });
          return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = W, this._attachedRef = F, this.attached.emit(F), F;
        }
        _getRootNode() {
          const W = this._viewContainerRef.element.nativeElement;
          return W.nodeType === W.ELEMENT_NODE ? W : W.parentNode;
        }
      }
      return y.ɵfac = function (W) {
        return new (W || y)(t.Y36(t._Vd), t.Y36(t.s_b), t.Y36(e.K0));
      }, y.ɵdir = t.lG2({
        type: y,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [t.qOj]
      }), y;
    })(),
    R = (() => {
      class y {}
      return y.ɵfac = function (W) {
        return new (W || y)();
      }, y.ɵmod = t.oAB({
        type: y
      }), y.ɵinj = t.cJS({}), y;
    })();
});
