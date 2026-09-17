// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.installDateItems = [];
  }
  ngOnInit() {
    this.clsData = (0, Fu.d6)((0, Oc.yE)(b1.QL, this.data.data)), this.installDateItems = (0, Fu.EN)(this.clsData).map((s, o) => ({
      date: s.installDt || null,
      key: `${o}_${s.installDt || ""}_${s.catheterType || ""}`
    }));
  }
  trackByKey(s, o) {
    return o.key;
  }
  isRed(s) {
    return (0, Fu.Sk)(s);
  }
  getOverdueTooltip(s) {
    return (0, Fu.e9)(s);
  }
  formatedInstallDate(s) {
    return (0, Du.dG)(s);
  }
});
