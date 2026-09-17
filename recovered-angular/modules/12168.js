// Extracted from main; webpack module 12168. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => a,
    _: () => e
  });
  var t = i(94650);
  let e = (() => {
      class m {
        set luChecked(M) {
          this.updateProperty("checked", M || !1), this.updateProperty("indeterminate", null === M);
        }
        constructor(M, b) {
          this.element = M, this.renderer = b, this.luCheckedChange = new t.vpe(), this.updateProperty("checked", !1);
        }
        onChange({
          checked: M
        }) {
          this.updateProperty("indeterminate", !1), this.luCheckedChange.emit(M);
        }
        updateProperty(M, b) {
          this.renderer.setProperty(this.element.nativeElement, M, b);
        }
      }
      return m.ɵfac = function (M) {
        return new (M || m)(t.Y36(t.SBq), t.Y36(t.Qsj));
      }, m.ɵdir = t.lG2({
        type: m,
        selectors: [["input", "luChecked", ""], ["input", "luCheckedChange", ""]],
        hostBindings: function (M, b) {
          1 & M && t.NdJ("change", function (N) {
            return b.onChange(N.target);
          });
        },
        inputs: {
          luChecked: "luChecked"
        },
        outputs: {
          luCheckedChange: "luCheckedChange"
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
