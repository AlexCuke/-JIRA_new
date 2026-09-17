// Extracted from main; webpack module 38666. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    h: () => e,
    y: () => a
  });
  var t = i(94650);
  let e = (() => {
      class m {
        mouseDownEvent(M) {
          M.preventDefault();
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["", "luNoFocusChange", ""]],
        hostBindings: function (M, b) {
          1 & M && t.NdJ("mousedown", function (N) {
            return b.mouseDownEvent(N);
          });
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
