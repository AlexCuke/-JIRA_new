// Exact compiled component metadata; references belong to modules/15513.js
({
  type: hy,
  selectors: [["doctor-name-cell"]],
  viewQuery: function (o, D) {
    if (1 & o && e.Gf(B6, 5), 2 & o) {
      let Z;
      e.iGM(Z = e.CRH()) && (D.text = Z.first);
    }
  },
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 4,
  vars: 3,
  consts: [[1, "doctor-name-container"], [3, "canOpen", "luTooltip"], ["text", ""]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "span", 1, 2), e._uU(3), e.qZA()()), 2 & o && (e.xp6(1), e.Q6J("canOpen", D.isShowTooltip)("luTooltip", null == D.clsData || null == D.clsData.labReferral ? null : D.clsData.labReferral.doctorName), e.xp6(2), e.hij(" ", null == D.clsData || null == D.clsData.labReferral ? null : D.clsData.labReferral.doctorName, " "));
  },
  dependencies: [vo.ez, hp.N, Oa.h, bc.i, bc.$],
  styles: [".doctor-name[_ngcontent-%COMP%]{font-size:13px}.doctor-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]
});
