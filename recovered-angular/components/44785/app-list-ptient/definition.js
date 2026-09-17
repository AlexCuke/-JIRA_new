// Exact compiled component metadata; references belong to modules/44785.js
({
  type: dm,
  selectors: [["app-list-ptient"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(R0, 5), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.methodCell = Ye.first);
    }
  },
  inputs: {
    medicine: "medicine",
    searchTerm: "searchTerm"
  },
  decls: 21,
  vars: 10,
  consts: [[1, "medicine-details__cell", "medicine-details__cell--name"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["emptyName", ""], [1, "medicine-details__cell", "medicine-details__cell--trade-name"], ["emptyTradeName", ""], [1, "medicine-details__cell", "medicine-details__dosage"], [1, "medicine-details__cell", "medicine-details__method"], [1, "method-panel"], ["methodCell", ""], [4, "ngFor", "ngForOf"], [3, "luTooltip", 4, "ngIf"], [1, "medicine-details__cell", "medicine-details__frequency"], [4, "ngIf", "ngIfElse"], [1, "medicine-details__cell", "medicine-details__doctor"], ["emptyCell", ""], [3, "innerHTML"], [3, "luTooltip"]],
  template: function (k, ce) {
    if (1 & k && (n.TgZ(0, "div", 0), n.YNc(1, _h, 2, 4, "span", 1), n.YNc(2, T_, 1, 0, "ng-template", null, 2, n.W1O), n.qZA(), n.TgZ(4, "div", 3), n.YNc(5, Zg, 2, 4, "span", 1), n.YNc(6, F0, 1, 0, "ng-template", null, 4, n.W1O), n.qZA(), n.TgZ(8, "div", 5), n._uU(9), n.qZA(), n.TgZ(10, "div", 6)(11, "div", 7, 8), n.YNc(13, E_, 2, 1, "span", 9), n.qZA(), n.YNc(14, N0, 2, 1, "span", 10), n.qZA(), n.TgZ(15, "div", 11), n.YNc(16, pg, 2, 1, "div", 12), n.qZA(), n.TgZ(17, "div", 13), n._uU(18), n.qZA(), n.YNc(19, D_, 1, 0, "ng-template", null, 14, n.W1O)), 2 & k) {
      const Ye = n.MAs(3),
        Tt = n.MAs(7),
        ai = n.MAs(20);
      n.xp6(1), n.Q6J("ngIf", null == ce.medicine ? null : ce.medicine.name)("ngIfElse", Ye), n.xp6(4), n.Q6J("ngIf", null == ce.medicine ? null : ce.medicine.tradeName)("ngIfElse", Tt), n.xp6(4), n.hij(" ", (null == ce.medicine ? null : ce.medicine.dosage) || "—", "\n"), n.xp6(4), n.Q6J("ngForOf", ce.medicineMethodItems), n.xp6(1), n.Q6J("ngIf", ce.isShowTooltip), n.xp6(2), n.Q6J("ngIf", null == ce.medicine ? null : ce.medicine.frequency)("ngIfElse", ai), n.xp6(2), n.hij(" ", (null == ce.medicine ? null : ce.medicine.doctor) || "—", "\n");
    }
  },
  dependencies: [Di.sg, Di.O5, fd.$, ms.S],
  styles: ["[_nghost-%COMP%]{display:contents}.medicine-details__cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:12px 0;min-height:var(--dosing-medications-row-height, 64px);white-space:normal;overflow-wrap:break-word;line-height:1.5;font-size:15px}.medicine-details__cell[_ngcontent-%COMP%]:first-child{padding-left:24px}.medicine-details__cell__sub-line[_ngcontent-%COMP%]{font-size:12px;color:var(--dosing-medications-text-muted, #718096);margin-top:4px}.medicine-details__method[_ngcontent-%COMP%]   .method-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:90px;overflow:hidden}@media (max-width: 992px){.medicine-details__cell[_ngcontent-%COMP%]{padding:10px 8px;font-size:13px}}[_nghost-%COMP%]     .search-highlight, [_nghost-%COMP%]     mark.search-highlight{background-color:#fff199;color:inherit;padding:0;border-radius:2px}"],
  changeDetection: 0
});
