// Extracted from main; webpack module 40865. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => e,
    w: () => a
  });
  var t = i(94650);
  let e = (() => {
      class m {
        get testRole() {
          return this.dpDataTestRole;
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["", "dpDataTestRole", ""]],
        hostVars: 1,
        hostBindings: function (M, b) {
          2 & M && t.uIk("data-test-role", b.testRole);
        },
        inputs: {
          dpDataTestRole: "dpDataTestRole"
        }
      }), m;
    })(),
    a = (() => {
      class m {}
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵmod = t.oAB({
        type: m
      }), m.ɵinj = t.cJS({}), m;
    })();
});
