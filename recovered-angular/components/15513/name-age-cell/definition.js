// Exact compiled component metadata; references belong to modules/15513.js
({
  type: my,
  selectors: [["name-age-cell"]],
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 5,
  vars: 7,
  consts: [[1, "name-age-cell"], [3, "size", "icon"], [3, "luTooltip"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0), e._UZ(1, "lu-svg-icon", 1), e.TgZ(2, "span", 2), e.ALo(3, "luDateFormatter"), e._uU(4), e.qZA()()), 2 & o && (e.xp6(1), e.Q6J("size", 24)("icon", D.genderIcon), e.xp6(1), e.Q6J("luTooltip", e.xi3(3, 4, D.clsData.combinedCareCase.birthDate, "dd MMMM yyyy")), e.xp6(2), e.Oqu(D.age));
  },
  dependencies: [vo.ez, Oa.h, Oa.q, bc.i, bc.$, hp.N, hp.M],
  styles: [".name-age-cell[_ngcontent-%COMP%]{width:76px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:6px}"]
});
