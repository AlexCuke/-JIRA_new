// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z) {
    this.cdr = s, this.hospitalizationService = o, this.userContextService = D, this.modalData = Z, this.MovementStatuses = K_, this.title = "", this.status = K_.DEFAULT, this.currentDepartment = null, this.hospitalizedPatientInfo = null;
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(s => {
      this.currentDepartment = s.department;
      const {
          data: o
        } = this.modalData,
        D = !!this.modalData?.isEmergency,
        Z = (0, hu.DF)(o.careCase);
      D ? (this.status = K_.HOSPITALIZED, this.title = `\u0413\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${Z}`, this.cdr.markForCheck()) : o?.hospitalizedPatient?.statusCode && "DISCHARGED" === o?.hospitalizedPatient?.statusCode ? (this.status = K_.DISCHARGED, this.title = `\u0412\u044b\u043f\u0438\u0441\u043a\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${Z}`, this.hospitalizationService.hospitalizedPatientStatusQuery(o.careCase.careCaseId).pipe((0, Kn.t)(this)).subscribe(X => {
        this.hospitalizedPatientInfo = X, this.cdr.markForCheck();
      })) : o.patientMovement.departmentId !== this.currentDepartment?.id && (this.status = K_.MOVED, this.title = `\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${Z}`, this.cdr.markForCheck());
    });
  }
  get getFormatDischargeDate() {
    return (0, zm.Z)(new Date(this.modalData.data.hospitalizedPatient.dischargeDate), "dd MMM, HH:mm", {
      locale: yC.default
    });
  }
  get getFormatMovementDate() {
    return this.modalData.data.patientMovement.movementDate ? (0, zm.Z)(new Date(this.modalData.data.patientMovement.movementDate), "dd MMM, HH:mm", {
      locale: yC.default
    }) : "";
  }
  get getFormatHospitalizationDate() {
    return this.modalData.data.hospitalizedPatient.hospitalizationDate ? (0, zm.Z)(new Date(this.modalData.data.hospitalizedPatient.hospitalizationDate), "dd MMM, HH:mm", {
      locale: yC.default
    }) : "";
  }
});
