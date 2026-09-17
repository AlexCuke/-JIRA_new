// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  ngOnInit() {
    this.clsData = (0, Fu.d6)((0, Oc.yE)(b1.QL, this.data.data));
  }
  get lastTreatmentDates() {
    return (0, Fu.EN)(this.clsData).map(s => s.lastTreatment);
  }
  getDate(s) {
    if (!s) return "";
    const o = Tg()(new Date()),
      D = Tg()().subtract(1, "days");
    s = new Date(s);
    const Z = Tg()(new Date(s));
    return o.isSame(Z, "day") ? `\u0441\u0435\u0433\u043e\u0434\u043d\u044f, ${this.formatTime(s)}` : D.isSame(Z, "day") ? `\u0432\u0447\u0435\u0440\u0430, ${this.formatTime(s)}` : this.formatDate(s);
  }
  formatTime(s) {
    return new vo.uU("ru-RU").transform(s, "HH:mm") || "";
  }
  formatDate(s) {
    return new vo.uU("ru-RU").transform(s, "dd MMM HH:mm") || "";
  }
});
