// Extracted from main; webpack module 37372. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    H: () => O,
    c: () => I
  });
  var t = i(94650),
    e = i(98184),
    a = i(44348),
    m = i(84080),
    d = i(95698),
    M = i(84445),
    b = i(26652),
    A = i(15635),
    N = i(3279);
  let I = (() => {
      class L {
        constructor(v, f, E, h) {
          this.overlay = v, this.ngZone = f, this.injector = E, this.router = h;
        }
        open(v, f, E = []) {
          const h = this.createOverlay(f);
          return this.attachTooltipContainer(v, h, f, E);
        }
        attachTooltipContainer(v, f, E, h) {
          const x = new m.C5(E.overlayContainer, E.viewContainerRef, E.viewContainerRef?.injector),
            u = f.attach(x),
            T = new a.Rn(f, E, u.instance, this.ngZone, this.router);
          return v instanceof M.X && (v = new M.X(v.component, this.createInjector(T, h, v.injectorRef ?? E.viewContainerRef?.injector))), u.instance.config = E, u.instance.content = v, u.instance.markForCheck(), T;
        }
        createOverlay(v) {
          const f = this.overlay.create(v);
          return f.detachments().pipe((0, d.q)(1)).subscribe(() => {
            f.hasAttached() && f.detach();
          }), f;
        }
        connectedPositionStrategy(v, f) {
          return this.overlay.position().flexibleConnectedTo(v).withPositions(b.Yc.toConnectedPositions((0, A._2)(f))).withPush(!0);
        }
        globalPositionStrategy() {
          return this.overlay.position().global();
        }
        scrollStrategy() {
          return this.overlay.scrollStrategies;
        }
        createInjector(v, f, E) {
          return t.zs3.create({
            providers: [...f, {
              provide: a.Rn,
              useValue: v
            }],
            parent: E || this.injector
          });
        }
      }
      return L.ɵfac = function (v) {
        return new (v || L)(t.LFG(e.aV), t.LFG(t.R0b), t.LFG(t.zs3), t.LFG(N.F0, 8));
      }, L.ɵprov = t.Yz7({
        token: L,
        factory: L.ɵfac,
        providedIn: "root"
      }), L;
    })(),
    O = (() => {
      class L {}
      return L.ɵfac = function (v) {
        return new (v || L)();
      }, L.ɵmod = t.oAB({
        type: L
      }), L.ɵinj = t.cJS({
        providers: [I],
        imports: [e.U8]
      }), L;
    })();
});
