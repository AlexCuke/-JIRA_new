// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.tooltipPositions = ["top-left", "top-center", "bottom-left", "bottom-center"], this.catheterItems = [];
  }
  ngOnInit() {
    this.clsData = (0, Fu.d6)((0, Oc.yE)(b1.QL, this.data?.data)), this.catheterItems = (0, Fu.EN)(this.clsData).map((s, o) => {
      const Z = (0, Fu.XN)(s.resolvedType || s.catheterType || s.CateterType || s.type);
      return {
        label: Z,
        tooltip: (0, Fu.bE)(s) || Z,
        key: `${o}_${Z}_${s.locus || ""}_${s.installDt || ""}`
      };
    });
  }
  trackByKey(s, o) {
    return o.key;
  }
});
