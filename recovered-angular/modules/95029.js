// Extracted from main; webpack module 95029. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    A: () => e,
    a: () => a
  });
  var t = i(94650);
  let e = (() => {
      class m {
        constructor() {
          this.theme = "white";
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["", "luBackgroundTheme", ""]],
        inputs: {
          theme: ["luBackgroundTheme", "theme"]
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
