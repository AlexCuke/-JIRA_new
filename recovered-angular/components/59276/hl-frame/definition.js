// Exact compiled component metadata; references belong to modules/59276.js
({
  type: oi,
  selectors: [["hl-frame"]],
  contentQueries: function (Qi, Qo, Kr) {
    if (1 & Qi && (t.Suo(Kr, Je, 5), t.Suo(Kr, Xt, 5), t.Suo(Kr, Mt, 5), t.Suo(Kr, je, 5)), 2 & Qi) {
      let _s;
      t.iGM(_s = t.CRH()) && (Qo.footerContent = _s.first), t.iGM(_s = t.CRH()) && (Qo.headerContent = _s.first), t.iGM(_s = t.CRH()) && (Qo.prefixContent = _s.first), t.iGM(_s = t.CRH()) && (Qo.postfixContent = _s.first);
    }
  },
  ngContentSelectors: ae,
  decls: 8,
  vars: 4,
  consts: [[1, "hl-frame"], ["class", "hl-frame-header", 4, "ngIf"], [1, "hl-frame-body"], ["class", "hl-frame-body-item", 4, "ngIf"], [1, "hl-frame-body-item", "hl-frame-body-content"], [4, "ngIf"], [1, "hl-frame-header"], [1, "hl-frame-body-item"]],
  template: function (Qi, Qo) {
    1 & Qi && (t.F$t(ye), t.TgZ(0, "div", 0), t.YNc(1, Le, 2, 0, "div", 1), t.TgZ(2, "div", 2), t.YNc(3, ke, 2, 0, "div", 3), t.TgZ(4, "div", 4), t.Hsn(5), t.qZA(), t.YNc(6, J, 2, 0, "div", 3), t.qZA(), t.YNc(7, fe, 2, 0, "div", 5), t.qZA()), 2 & Qi && (t.xp6(1), t.Q6J("ngIf", Qo.headerContent), t.xp6(2), t.Q6J("ngIf", Qo.prefixContent), t.xp6(3), t.Q6J("ngIf", Qo.postfixContent), t.xp6(1), t.Q6J("ngIf", Qo.footerContent));
  },
  dependencies: [e.O5],
  styles: [".hl-frame[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.hl-frame-body[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:row;overflow:hidden}.hl-frame-header[_ngcontent-%COMP%]{z-index:1}.hl-frame-body-item[_ngcontent-%COMP%]{overflow:hidden;flex-shrink:0}.hl-frame-body-content[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:1}"],
  changeDetection: 0
});
