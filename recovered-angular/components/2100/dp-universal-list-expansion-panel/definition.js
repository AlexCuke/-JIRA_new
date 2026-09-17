// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-expansion-panel"]],
  viewQuery: function (z, De) {
    if (1 & z && t.Gf(Le.BN, 5), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.panel = rt.first);
    }
  },
  inputs: {
    viewData: "viewData",
    formGroupBuilder: "formGroupBuilder"
  },
  outputs: {
    runAction: "runAction"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "expansion-panel"], [1, "expansion-panel-content"], [4, "ngFor", "ngForOf"], [3, "viewData", "formGroupBuilder", "runAction"]],
  template: function (z, De) {
    1 & z && t.YNc(0, ro, 3, 3, "ng-container", 0), 2 & z && t.Q6J("ngIf", De.formGroupBuilder);
  },
  dependencies: [b.sg, b.O5, Le.BN, di, aa, Ln],
  styles: [".expansion-panel[_ngcontent-%COMP%]{min-height:0}.expansion-panel[_ngcontent-%COMP%]     .lu-expansion-panel-content{overflow:visible}.expansion-panel-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid var(--lu-black-10);padding:calc(var(--lu-base-gutter) * 3);margin-bottom:calc(var(--lu-base-gutter) * 3)}.expansion-panel-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) * 12)}"],
  changeDetection: 0
});
