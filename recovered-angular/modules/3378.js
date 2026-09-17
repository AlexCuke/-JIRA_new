// Extracted from main; webpack module 3378. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    G: () => d,
    v: () => M
  });
  var t = i(36895),
    e = i(94650),
    a = i(26652);
  const m = ["*"];
  let d = (() => {
      class b {
        constructor(N) {
          this.documentRef = N, this.focusHost = null;
        }
        focusPrev() {
          this.focusHost && a.Hn.focusClosestElement(this.focusHost, this.documentRef.body, !1);
        }
        focusNext() {
          this.focusHost && a.Hn.focusClosestElement(this.focusHost, this.documentRef.body);
        }
      }
      return b.ɵfac = function (N) {
        return new (N || b)(e.Y36(t.K0));
      }, b.ɵcmp = e.Xpm({
        type: b,
        selectors: [["lu-focus-control"]],
        inputs: {
          focusHost: "focusHost"
        },
        ngContentSelectors: m,
        decls: 3,
        vars: 2,
        consts: [["data-lu-focus-trap", "true", 3, "tabIndex", "focus"]],
        template: function (N, I) {
          1 & N && (e.F$t(), e.TgZ(0, "div", 0), e.NdJ("focus", function () {
            return I.focusPrev();
          }), e.qZA(), e.Hsn(1), e.TgZ(2, "div", 0), e.NdJ("focus", function () {
            return I.focusNext();
          }), e.qZA()), 2 & N && (e.Q6J("tabIndex", 0), e.xp6(2), e.Q6J("tabIndex", 0));
        },
        styles: ["[_nghost-%COMP%]{width:100%}"],
        changeDetection: 0
      }), b;
    })(),
    M = (() => {
      class b {}
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵmod = e.oAB({
        type: b
      }), b.ɵinj = e.cJS({}), b;
    })();
});
