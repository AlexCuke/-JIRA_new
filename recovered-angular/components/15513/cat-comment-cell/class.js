// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.tooltipPositions = ["top-left", "top-center", "bottom-left", "bottom-center"], this.commentItems = [];
  }
  ngOnInit() {
    this.clsData = (0, Fu.d6)((0, Oc.yE)(b1.QL, this.data?.data)), this.commentItems = (0, Fu.EN)(this.clsData).map((s, o) => {
      const D = `${s.comment ?? ""}`.trim();
      return {
        text: D,
        key: `${o}_${s.catheterType || ""}_${s.installDt || ""}_${D}`
      };
    });
  }
  trackByKey(s, o) {
    return o.key;
  }
});
