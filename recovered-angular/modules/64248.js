// Extracted from main; webpack module 64248. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Y: () => a,
    i: () => e
  });
  var t = i(94650);
  let e = (() => {
      class m {
        keyboardEvent(M) {
          this.dropdown && m.handleKeyboard(M, this.dropdown);
        }
        static handleKeyboard(M, b) {
          ["ArrowDown", "Enter"].includes(M.key) && !b.isOpened && (M.preventDefault(), b.open()), "Escape" === M.key && b.isOpened && (M.preventDefault(), b.close());
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)();
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["", "luDropdownHandler", ""]],
        hostBindings: function (M, b) {
          1 & M && t.NdJ("keydown", function (N) {
            return b.keyboardEvent(N);
          });
        },
        inputs: {
          dropdown: ["luDropdownHandler", "dropdown"]
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
