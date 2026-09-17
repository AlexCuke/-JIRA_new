// Exact compiled component metadata; references belong to modules/40600.js
({
  type: F,
  selectors: [["peripheral-catheter"]],
  inputs: {
    isRequired: "isRequired"
  },
  outputs: {
    peripheralFormSubmitted: "peripheralFormSubmitted",
    peripheralCatheterFormChanges: "peripheralCatheterFormChanges"
  },
  standalone: !0,
  features: [e.TTD, e.jDz],
  decls: 19,
  vars: 4,
  consts: [[3, "formGroup"], [1, "locus_desc"], [4, "ngIf"], ["type", "autocomplete", "formControlName", "catheterLocus", "panelClass", "locus-custom-combobox", 1, "locus", 3, "positions"], [3, "items", "itemContent", 4, "luData"], [1, "row"], [1, "row_desc"], [1, "cat-parameters"], [1, "field-size"], ["luInput", "", "luInputNumber", "", "formControlName", "peripheralCatheterSize"], ["readonly", "", "type", "text", "luInput", "", "luInputString", "", "formControlName", "peripheralCatheterUnit"], [3, "items", "itemContent"], ["templateCatheter", ""]],
  template: function (J, fe) {
    1 & J && (e.TgZ(0, "form", 0)(1, "span", 1), e._uU(2, "Локус "), e.YNc(3, R, 2, 0, "span", 2), e.qZA(), e.TgZ(4, "lu-combobox", 3), e.YNc(5, y, 3, 2, "lu-data-list", 4), e.qZA(), e.TgZ(6, "div", 5)(7, "span", 6), e._uU(8, "Параметры катетера"), e.YNc(9, j, 2, 0, "span", 2), e.qZA(), e.TgZ(10, "div", 7)(11, "div", 8)(12, "label")(13, "lu-input-wrapper"), e._UZ(14, "input", 9), e.qZA()()(), e.TgZ(15, "div", 8)(16, "label")(17, "lu-input-wrapper"), e._UZ(18, "input", 10), e.qZA()()()()()()), 2 & J && (e.Q6J("formGroup", fe.peripheralCatheterForm), e.xp6(3), e.Q6J("ngIf", fe.isRequired), e.xp6(1), e.Q6J("positions", "bottom-center"), e.xp6(5), e.Q6J("ngIf", fe.isRequired));
  },
  dependencies: [a.ez, a.O5, m.W1, d.c, C.n, C.m, M.f, M.L, b.R, b.l, A.c, A.H, N.LA, N.HY, I.Ki, O.h, v.UX, v._Y, v.Fj, v.JJ, v.JL, v.sg, v.u, E.X, E.l, L.u, L.g],
  styles: [".locus[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:16px;width:100%}.row_desc[_ngcontent-%COMP%], .locus_desc[_ngcontent-%COMP%]{display:block;line-height:24px}  lu-data-list[data-test-role=optionList]{height:158px!important}  lu-data-list[data-test-role=optionList]::-webkit-scrollbar-thumb{border:4px solid #B3B3B3!important}  lu-data-list[data-test-role=optionList]::-webkit-scrollbar-track{background-color:#b3b3b3!important}.cat-parameters[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-top:8px;width:168px}.field-size[_ngcontent-%COMP%]{width:80px}"]
});
