// Extracted from main; webpack module 21251. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => O,
    Z: () => I
  });
  var t = i(94650),
    e = i(24006),
    a = i(44348),
    m = i(15635),
    d = i(8391),
    M = i(99246),
    b = i(19550),
    A = i(93278),
    N = i(36895);
  let I = (() => {
      class L extends a.Fe {
        constructor(v, f, E, h, x) {
          super(v, h, E), this.changeDetectorRef = v, this.dateAdapter = f, this.ngControl = E, this.controlHost = h, this.elementRef = x, this.stepUnit = "day", this.step = 1, this.minDate = null, this.icon = "chevron-left", this.iconSize = 24;
        }
        ngAfterContentInit() {
          this.elementRef?.nativeElement?.setAttribute("data-test-role", "clickableElement");
        }
        previous() {
          (0, m.EN)(this.model) && !this.disabled && !this.isMinDate() && this.updateModel(this.dateAdapter.addUnit(this.model, this.stepUnit, -Math.abs(this.step)));
        }
        isMinDate() {
          return (0, m.EN)(this.model) && this.dateAdapter.isValid(this.model) && (0, m.EN)(this.minDate) ? this.dateAdapter.isSameDay(this.model, this.minDate) || this.dateAdapter.isBefore(this.model, this.minDate) : !(0, m.EN)(this.model) || !this.dateAdapter.isValid(this.model);
        }
        get disabled() {
          return this.isDisabled || this.host?.disabled || this.isMinDate();
        }
        incomingUpdate() {}
      }
      return L.ɵfac = function (v) {
        return new (v || L)(t.Y36(t.sBO), t.Y36(d.SW), t.Y36(e.a5, 10), t.Y36(M.fU, 8), t.Y36(t.SBq));
      }, L.ɵcmp = t.Xpm({
        type: L,
        selectors: [["lu-calendar-previous"]],
        inputs: {
          stepUnit: "stepUnit",
          step: "step",
          minDate: "minDate",
          icon: "icon",
          iconSize: "iconSize"
        },
        features: [t._Bn([{
          provide: M.BU,
          useExisting: L
        }]), t.qOj],
        decls: 2,
        vars: 4,
        consts: [["lu-button-icon", "", "color", "black", "colorType", "light", 3, "tabIndex", "disabled", "click"], [3, "icon", "size"]],
        template: function (v, f) {
          1 & v && (t.TgZ(0, "button", 0), t.NdJ("click", function () {
            return f.previous(), f.onTouched();
          }), t._UZ(1, "lu-svg-icon", 1), t.qZA()), 2 & v && (t.Q6J("tabIndex", -1)("disabled", f.disabled), t.xp6(1), t.Q6J("icon", f.icon)("size", f.iconSize));
        },
        dependencies: [b.k, A.q],
        styles: ["[_nghost-%COMP%]{display:inline-block}[disabled=true][_nghost-%COMP%]{pointer-events:none!important}"],
        changeDetection: 0
      }), L;
    })(),
    O = (() => {
      class L {}
      return L.ɵfac = function (v) {
        return new (v || L)();
      }, L.ɵmod = t.oAB({
        type: L
      }), L.ɵinj = t.cJS({
        imports: [N.ez, b.o, A.h]
      }), L;
    })();
});
