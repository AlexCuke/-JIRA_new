// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["cdk-table"], ["table", "cdk-table", ""]],
  contentQueries: function (ve, yt, An) {
    if (1 & ve && (t.Suo(An, an, 5), t.Suo(An, Ue, 5), t.Suo(An, pt, 5), t.Suo(An, yi, 5), t.Suo(An, fr, 5)), 2 & ve) {
      let Un;
      t.iGM(Un = t.CRH()) && (yt._noDataRow = Un.first), t.iGM(Un = t.CRH()) && (yt._contentColumnDefs = Un), t.iGM(Un = t.CRH()) && (yt._contentRowDefs = Un), t.iGM(Un = t.CRH()) && (yt._contentHeaderRowDefs = Un), t.iGM(Un = t.CRH()) && (yt._contentFooterRowDefs = Un);
    }
  },
  viewQuery: function (ve, yt) {
    if (1 & ve && (t.Gf(Eo, 7), t.Gf(Fo, 7), t.Gf(br, 7), t.Gf(Pr, 7)), 2 & ve) {
      let An;
      t.iGM(An = t.CRH()) && (yt._rowOutlet = An.first), t.iGM(An = t.CRH()) && (yt._headerRowOutlet = An.first), t.iGM(An = t.CRH()) && (yt._footerRowOutlet = An.first), t.iGM(An = t.CRH()) && (yt._noDataRowOutlet = An.first);
    }
  },
  hostAttrs: [1, "cdk-table"],
  hostVars: 2,
  hostBindings: function (ve, yt) {
    2 & ve && t.ekj("cdk-table-fixed-layout", yt.fixedLayout);
  },
  inputs: {
    trackBy: "trackBy",
    dataSource: "dataSource",
    multiTemplateDataRows: "multiTemplateDataRows",
    fixedLayout: "fixedLayout"
  },
  outputs: {
    contentChanged: "contentChanged"
  },
  exportAs: ["cdkTable"],
  features: [t._Bn([{
    provide: st,
    useExisting: we
  }, {
    provide: Y.k,
    useClass: Y.yy
  }, {
    provide: Mt,
    useClass: Je
  }, {
    provide: Xn,
    useValue: null
  }])],
  ngContentSelectors: qe,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function (ve, yt) {
    1 & ve && (t.F$t(Se), t.Hsn(0), t.Hsn(1, 1), t.GkF(2, 0)(3, 1)(4, 2)(5, 3));
  },
  dependencies: [Eo, Fo, br, Pr],
  styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
  encapsulation: 2
});
