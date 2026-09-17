// Extracted from main; webpack module 81207. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    B: () => m,
    E: () => a
  });
  var t = i(94650),
    e = i(15635);
  let a = (() => {
      class d {
        constructor() {
          this.noAnimation = !0;
        }
        get animationDisabled() {
          return !(0, e.EN)(this.noAnimation) || this.noAnimation;
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵdir = t.lG2({
        type: d,
        selectors: [["", "luNoAnimation", ""]],
        hostVars: 1,
        hostBindings: function (b, A) {
          2 & b && t.d8E("@.disabled", A.animationDisabled);
        },
        inputs: {
          noAnimation: ["luNoAnimation", "noAnimation"]
        }
      }), d;
    })(),
    m = (() => {
      class d {}
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵmod = t.oAB({
        type: d
      }), d.ɵinj = t.cJS({}), d;
    })();
});
