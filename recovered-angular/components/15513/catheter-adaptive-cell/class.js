// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.modalService = s;
  }
  ngOnInit() {
    this.clsData = (0, Fu.d6)((0, Oc.yE)(b1.QL, this.data.data));
  }
  get catheterElements() {
    return (0, Fu.EN)(this.clsData);
  }
  get age() {
    return (0, Fu.cJ)(this.clsData?.careCase?.birthDate);
  }
  get genderIcon() {
    return 1 == this.clsData?.careCase?.genderCode ? "male2" : "female2";
  }
  get lastTreatmentDates() {
    return this.catheterElements.map(s => s.lastTreatment).filter(Boolean);
  }
  getDate(s) {
    const o = this.catheterElements[s]?.lastTreatment;
    if (!o) return "—";
    const D = Tg()(new Date()),
      Z = Tg()().subtract(1, "days"),
      X = new Date(o),
      oe = Tg()(X);
    return D.isSame(oe, "day") ? `\u0441\u0435\u0433\u043e\u0434\u043d\u044f, ${this.formatTime(X)}` : Z.isSame(oe, "day") ? `\u0432\u0447\u0435\u0440\u0430, ${this.formatTime(X)}` : this.formatDate(X);
  }
  formatTime(s) {
    return new vo.uU("ru-RU").transform(s, "HH:mm") || "";
  }
  formatDate(s) {
    return new vo.uU("ru-RU").transform(s, "dd MMM HH:mm") || "";
  }
  getTypeLabel(s) {
    return (0, Fu.XN)(s?.resolvedType || s?.catheterType || s?.CateterType);
  }
  getTypeTooltip(s) {
    return (0, Fu.bE)(s);
  }
  isInstallOverdue(s) {
    return (0, Fu.Sk)(s);
  }
  getInstallOverdueTooltip(s) {
    return (0, Fu.e9)(s);
  }
  openCatheterAppointmentSheetModal() {
    this.modalService.open(new Zs.X(wP.F), {
      width: "100vw",
      disableClose: !0,
      data: this.clsData
    }).afterClose().pipe((0, Kn.t)(this)).subscribe(() => {});
  }
  formatedInstallDate(s) {
    return (0, Du.CT)(s);
  }
});
