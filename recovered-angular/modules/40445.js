// Extracted from main; webpack module 40445. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Is: () => b,
    vT: () => N
  });
  var t = i(94650),
    e = i(36895);
  const a = new t.OlP("cdk-dir-doc", {
      providedIn: "root",
      factory: function m() {
        return (0, t.f3M)(e.K0);
      }
    }),
    d = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
  let b = (() => {
      class I {
        constructor(L) {
          this.value = "ltr", this.change = new t.vpe(), L && (this.value = function M(I) {
            const O = I?.toLowerCase() || "";
            return "auto" === O && typeof navigator < "u" && navigator?.language ? d.test(navigator.language) ? "rtl" : "ltr" : "rtl" === O ? "rtl" : "ltr";
          }((L.body ? L.body.dir : null) || (L.documentElement ? L.documentElement.dir : null) || "ltr"));
        }
        ngOnDestroy() {
          this.change.complete();
        }
      }
      return I.ɵfac = function (L) {
        return new (L || I)(t.LFG(a, 8));
      }, I.ɵprov = t.Yz7({
        token: I,
        factory: I.ɵfac,
        providedIn: "root"
      }), I;
    })(),
    N = (() => {
      class I {}
      return I.ɵfac = function (L) {
        return new (L || I)();
      }, I.ɵmod = t.oAB({
        type: I
      }), I.ɵinj = t.cJS({}), I;
    })();
});
