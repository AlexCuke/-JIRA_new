// Exact compiled component metadata; references belong to modules/3378.js
({
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
});
