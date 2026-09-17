// Extracted from main; webpack module 45361. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => A,
    d: () => N
  });
  var t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(15635),
    d = i(41742),
    M = i(56451),
    b = i(54968);
  let A = (() => {
      let I = class {
        constructor(L, C) {
          this.elementRef = L, this.ngZone = C, this.switchTo = null, this.events = [];
        }
        ngOnInit() {
          (0, M.T)(...(0, m._2)(this.events).map(L => (0, b.R)(this.elementRef.nativeElement, L))).pipe((0, d.IU)(this.ngZone), (0, a.t)(this)).subscribe(L => {
            this.switchTo && !L.defaultPrevented && L.bubbles && (L.stopPropagation(), this.makeEvent(L, (0, m.Nj)(this.switchTo)));
          });
        }
        makeEvent(L, C) {
          C.dispatchEvent(new (0, L.constructor)(L.type, L));
        }
      };
      return I.ɵfac = function (L) {
        return new (L || I)(e.Y36(e.SBq), e.Y36(e.R0b));
      }, I.ɵdir = e.lG2({
        type: I,
        selectors: [["", "luEventSwitcher", ""]],
        inputs: {
          switchTo: ["luEventSwitcher", "switchTo"],
          events: "events"
        }
      }), I = (0, t.gn)([(0, a.c)()], I), I;
    })(),
    N = (() => {
      class I {}
      return I.ɵfac = function (L) {
        return new (L || I)();
      }, I.ɵmod = e.oAB({
        type: I
      }), I.ɵinj = e.cJS({}), I;
    })();
});
