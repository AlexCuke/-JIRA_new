// Extracted from main; webpack module 33459. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => a,
    T: () => m
  });
  var t = i(94650),
    e = i(36895);
  let a = (() => {
      class d {
        constructor() {
          this.name = "";
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵdir = t.lG2({
        type: d,
        selectors: [["", "luChipsGroupName", ""]],
        inputs: {
          name: ["luChipsGroupName", "name"]
        }
      }), d;
    })(),
    m = (() => {
      class d {}
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵmod = t.oAB({
        type: d
      }), d.ɵinj = t.cJS({
        imports: [e.ez]
      }), d;
    })();
});
