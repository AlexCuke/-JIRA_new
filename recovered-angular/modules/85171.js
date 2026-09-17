// Extracted from main; webpack module 85171. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    e: () => a,
    j: () => m
  });
  var t = i(94650),
    e = i(15635);
  let a = (() => {
      class d {
        transform(b, A) {
          if (b && A) {
            const N = A.split("").map(C => ["е", "ё"].includes(C.toLowerCase()) ? "(е|ё)" : (0, e.hr)(C)).join("\\s*"),
              I = String(b),
              O = new RegExp(`${N}`, "gi"),
              L = new RegExp(`(\\s+)?${N}(\\s+)?`, "gi");
            return `<span class="lu-mark">${I.replace(L, "$&").replace(O, "<span>$&</span>")}</span>`;
          }
          return b;
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵpipe = t.Yjl({
        name: "luHighlight",
        type: d,
        pure: !0
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
