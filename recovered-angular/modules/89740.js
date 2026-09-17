// Extracted from main; webpack module 89740. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Al: () => a,
    Li: () => b,
    wq: () => O,
    yf: () => e
  });
  var t = i(94650);
  const e = new t.OlP("Context from *polymorpheusOutlet");
  class a {
    constructor(C, v) {
      this.component = C, this.injector = v;
    }
    createInjector(C, v) {
      return t.zs3.create({
        parent: this.injector || C,
        providers: [{
          provide: e,
          useValue: v
        }]
      });
    }
  }
  let m = (() => {
    class L {
      constructor(v, f) {
        this.template = v, this.changeDetectorRef = f, this.polymorpheus = "";
      }
      check() {
        this.changeDetectorRef.markForCheck();
      }
      static ngTemplateContextGuard(v, f) {
        return !0;
      }
    }
    return L.ɵfac = function (v) {
      return new (v || L)(t.Y36(t.Rgc, 2), t.Y36(t.sBO));
    }, L.ɵdir = t.lG2({
      type: L,
      selectors: [["ng-template", "polymorpheus", ""]],
      inputs: {
        polymorpheus: "polymorpheus"
      },
      exportAs: ["polymorpheus"]
    }), L;
  })();
  class M {
    constructor(C) {
      this.$implicit = C;
    }
    get polymorpheusOutlet() {
      return this.$implicit;
    }
  }
  let b = (() => {
    class L {
      constructor(v, f, E) {
        this.viewContainerRef = v, this.injector = f, this.templateRef = E, this.content = "";
      }
      get template() {
        return A(this.content) ? this.content.template : this.content instanceof t.Rgc ? this.content : this.templateRef;
      }
      ngOnChanges({
        content: v
      }) {
        const f = this.getContext();
        if (this.viewRef && (this.viewRef.context = f), this.componentRef && this.componentRef.injector.get(t.sBO).markForCheck(), v) if (this.viewContainerRef.clear(), N(this.content)) {
          const h = this.context && new Proxy(this.context, {
              get: (T, R) => {
                var B;
                return null === (B = this.context) || void 0 === B ? void 0 : B[R];
              }
            }),
            x = this.content.createInjector(this.injector, h),
            u = x.get(t._Vd).resolveComponentFactory(this.content.component);
          this.componentRef = this.viewContainerRef.createComponent(u, 0, x);
        } else null != (f instanceof M && f.$implicit) && (this.viewRef = this.viewContainerRef.createEmbeddedView(this.template, f));
      }
      ngDoCheck() {
        A(this.content) && this.content.check();
      }
      static ngTemplateContextGuard(v, f) {
        return !0;
      }
      getContext() {
        return function I(L) {
          return A(L) || L instanceof t.Rgc;
        }(this.content) || N(this.content) ? this.context : new M("function" == typeof this.content ? this.content(this.context) : this.content);
      }
    }
    return L.ɵfac = function (v) {
      return new (v || L)(t.Y36(t.s_b), t.Y36(t.zs3), t.Y36(t.Rgc));
    }, L.ɵdir = t.lG2({
      type: L,
      selectors: [["", "polymorpheusOutlet", ""]],
      inputs: {
        content: ["polymorpheusOutlet", "content"],
        context: ["polymorpheusOutletContext", "context"]
      },
      features: [t.TTD]
    }), L;
  })();
  function A(L) {
    return L instanceof m;
  }
  function N(L) {
    return L instanceof a;
  }
  let O = (() => {
    class L {}
    return L.ɵfac = function (v) {
      return new (v || L)();
    }, L.ɵmod = t.oAB({
      type: L
    }), L.ɵinj = t.cJS({}), L;
  })();
});
