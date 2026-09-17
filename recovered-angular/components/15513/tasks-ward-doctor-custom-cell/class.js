// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.noWard = !1, this.doctorName = "";
  }
  ngOnInit() {
    this.noWard = !this.data.data?.patientMovement?.wardName;
    const s = ow()(this.data.data, "patientMovement.doctorName", "");
    this.doctorName = s && (0, yg.f0)(s);
  }
  get getWardName() {
    return this.data.data?.patientMovement?.wardName ? this.data.data.patientMovement.wardName : "Не размещен";
  }
});
