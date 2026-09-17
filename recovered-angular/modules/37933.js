// Extracted from main; webpack module 37933. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    c: () => R,
    t: () => fe
  });
  var t = i(77579),
    e = i(50727),
    a = i(80188),
    m = i(60515),
    d = i(94650),
    M = i(95577),
    b = i(82722);
  const A = d.GuJ,
    I = Symbol("__destroy"),
    O = Symbol("__decoratorApplied");
  function L(ae) {
    return "string" == typeof ae ? Symbol(`__destroy__${ae}`) : I;
  }
  function v(ae, Y) {
    ae[Y] || (ae[Y] = new t.x());
  }
  function f(ae, Y) {
    ae[Y] && (ae[Y].next(), ae[Y].complete(), ae[Y] = null);
  }
  function E(ae) {
    ae instanceof e.w0 && ae.unsubscribe();
  }
  function x(ae, Y) {
    return function () {
      if (ae && ae.call(this), f(this, L()), Y.arrayName && function h(ae) {
        Array.isArray(ae) && ae.forEach(E);
      }(this[Y.arrayName]), Y.checkProperties) for (const G in this) Y.blackList?.includes(G) || E(this[G]);
    };
  }
  function R(ae = {}) {
    return Y => {
      !function N(ae) {
        return !!ae[A];
      }(Y) ? function u(ae, Y) {
        ae.prototype.ngOnDestroy = x(ae.prototype.ngOnDestroy, Y);
      }(Y, ae) : function T(ae, Y) {
        const G = ae.ɵpipe;
        G.onDestroy = x(G.onDestroy, Y);
      }(Y, ae), function C(ae) {
        ae.prototype[O] = !0;
      }(Y);
    };
  }
  const B = 7,
    y = Symbol("CheckerHasBeenSet");
  function F(ae) {
    const Y = d.dqk.Zone;
    return Y && "function" == typeof Y.root?.run ? Y.root.run(ae) : ae();
  }
  const ke = !1;
  function fe(ae, Y) {
    return G => {
      const te = L(Y);
      "string" == typeof Y ? function J(ae, Y, G) {
        const te = ae[Y];
        if (ke && "function" != typeof te) throw new Error(`${ae.constructor.name} is using untilDestroyed but doesn't implement ${Y}`);
        v(ae, G), ae[Y] = function () {
          te.apply(this, arguments), f(this, G), ae[Y] = te;
        };
      }(ae, Y, te) : (ke && function ye(ae) {
        const Y = Object.getPrototypeOf(ae);
        if (!(O in Y)) throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator");
      }(ae), v(ae, te));
      const pe = ae[te];
      return ke && function j(ae, Y) {
        ae[y] || function W() {
          return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha || typeof process < "u" && "[object process]" === Object.prototype.toString.call(process);
        }() || (F(() => (0, a.D)(Promise.resolve()).pipe((0, M.z)(() => {
          let G;
          try {
            G = (0, d.EEQ)(ae);
          } catch {
            G = null;
          }
          const te = G?.lView;
          if (null == te) return m.E;
          const pe = te[B] || (te[B] = []),
            be = new t.x();
          return pe.push(function () {
            F(() => {
              be.next(), be.complete();
            });
          }), be;
        }), (0, M.z)(() => Promise.resolve())).subscribe(() => {
          (Y.observed ?? Y.observers.length > 0) && console.warn(function Le(ae) {
            return `\n  The ${ae.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `;
          }(ae));
        })), ae[y] = !0);
      }(ae, pe), G.pipe((0, b.R)(pe));
    };
  }
});
