// Extracted from main; webpack module 28369. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    B: () => m,
    b: () => a
  });
  var t = i(94650),
    e = i(36895);
  let a = (() => {
      class d {
        constructor() {
          this._type = "checkbox", this.typeChange = new t.vpe();
        }
        get type() {
          return this._type;
        }
        set type(b) {
          this._type !== b && (this._type = b, this.typeChange.emit(b));
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵdir = t.lG2({
        type: d,
        selectors: [["", "luChipsGroupType", ""]],
        inputs: {
          type: ["luChipsGroupType", "type"]
        },
        outputs: {
          typeChange: "typeChange"
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
