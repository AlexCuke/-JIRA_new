// Exact compiled component metadata; references belong to modules/10968.js
({
  type: N,
  selectors: [["gender-age-cell"]],
  inputs: {
    data: "data"
  },
  decls: 5,
  vars: 8,
  consts: [["panelClass", "gender-age-tooltip", 1, "gender-age-cell", 3, "luTooltip", "positions", "borderOffset"], [3, "icon", "size", 4, "ngIf"], [3, "icon", "size"]],
  template: function (L, C) {
    1 & L && (e.TgZ(0, "div", 0), e.ALo(1, "luDateFormatter"), e.YNc(2, b, 1, 2, "lu-svg-icon", 1), e.TgZ(3, "p"), e._uU(4), e.qZA()()), 2 & L && (e.Q6J("luTooltip", e.xi3(1, 5, C.data.data.careCase.birthDate, "dd.MM.yyyy"))("positions", "top-left")("borderOffset", -4), e.xp6(2), e.Q6J("ngIf", C.icon), e.xp6(2), e.Oqu(C.age));
  },
  dependencies: [a.O5, m.q, d.$, M.M],
  styles: [".gender-age-cell[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;align-items:center}  .gender-age-tooltip .lu-overlay-content{border-radius:4px}"]
});
