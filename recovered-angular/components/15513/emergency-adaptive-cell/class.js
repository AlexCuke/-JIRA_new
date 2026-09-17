// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.appointmentsCodesList = ["LI", "LP", "PiM", "consultation", "II", "movement"];
  }
  ngOnInit() {
    this.indexData = (0, Oc.yE)(Q4.F6, this.data.data);
  }
  getTypeData(s) {
    return this.data = {
      ...this.data,
      type: s
    }, this.data;
  }
  get doctorName() {
    return (0, yg.f0)(this.indexData?.patientMovement?.doctorName) || "-";
  }
  get arrivalDuration() {
    const {
      h: s,
      m: o
    } = this.arrivalTime;
    let D = "";
    return s && (D += `${s}\u0447 `), o && (D += `${o}\u043c`), D;
  }
  get arrivalTime() {
    const s = Math.floor((new Date().getTime() - this.indexData?.careCase?.arrivalTime.getTime()) / 1e3 / 60);
    return {
      h: Math.floor(s / 60),
      m: s % 60
    };
  }
});
