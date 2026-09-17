// Extracted class; external identifiers resolve in modules/42437.js.
(class {
  constructor(Wt, Oi, Ji, Ao, Sr, us) {
    this.modalData = Wt, this.employeesServie = Oi, this.store = Ji, this.patientService = Ao, this.compositionService = Sr, this.refreshService = us, this.commaRegex = /^\d+(,)?$/, this.decimalRegex = /^\d+(,\d{1})?$/, this.destroy$ = new M.x(), this.modalRef = (0, e.f3M)(x.Rn), this.timeControl = new a.NI(d()().format("HH:mm")), this.stomaTypeControl = new a.NI(null), this.stomaNameControl = new a.NI(null), this.stomaSize = "", this.isShowDoctorAgreementField = !1, this.doctorControl = new a.NI(null), this.currentUser = null, this.isLoad = !1;
  }
  ngOnInit() {
    this.store.select(te.S8).pipe((0, L.R)(this.destroy$), (0, Xn.h)(Boolean), (0, N.b)(Wt => {
      this.currentUser = Wt;
      const Oi = Wt?.jobTitle?.name?.toLowerCase() ?? "";
      this.isShowDoctorAgreementField = Oi.includes("медицинская сестра") || Oi.includes("медицинский брат");
    }), (0, O.w)(Wt => this.employeesServie.getEmployeesList(Wt.department.id))).subscribe(Wt => {
      this.doctorList = Wt.employees.filter(Oi => {
        const Ji = Oi?.jobTitle?.name?.toLowerCase() ?? "";
        return !(Ji.includes("сестра") || Ji.includes("брат"));
      });
    }), this.store.dispatch(ae.gA.getTerminology({
      request: [{
        featureKey: "stoma_kind_list",
        terminologyName: "terminology:stomakind"
      }]
    })), this.store.select(ae.Tb.selectTerminologyItem("terminology:stomakind", "stoma_kind_list")).pipe((0, L.R)(this.destroy$)).subscribe(Wt => {
      "SUCCESS" === Wt.status && (this.stomaTypeList = Wt.data);
    });
  }
  changeStomaSize(Wt) {
    const Oi = Wt.target.value;
    "" === Oi || this.commaRegex.test(Oi) || this.decimalRegex.test(Oi) ? this.stomaSize = Oi : Wt.target.value = this.stomaSize;
  }
  displayStomaType(Wt) {
    return Wt?.display || "";
  }
  displayDoctorList(Wt) {
    return Wt ? `${Wt.fio}, ${Wt.jobTitle.name}, ${Wt.department.name}` : "";
  }
  onSubmit() {
    var Wt = this;
    return (0, t.Z)(function* () {
      Wt.isLoad = !0;
      const Oi = "Иное" === Wt.stomaTypeControl.value?.display && !Wt.stomaNameControl.value;
      if (!Wt.timeControl.value || !Wt.stomaTypeControl.value || Oi || !Wt.doctorControl.value && Wt.isShowDoctorAgreementField) return Wt.timeControl.value || Wt.timeControl.setErrors({
        required: !0
      }), Wt.stomaTypeControl.value || Wt.stomaTypeControl.setErrors({
        required: !0
      }), Oi && Wt.stomaNameControl.setErrors({
        required: !0
      }), !Wt.doctorControl.value && Wt.isShowDoctorAgreementField && Wt.doctorControl.setErrors({
        required: !0
      }), Wt.isLoad = !1, console.error("Форма невалидна.");
      const Ao = Wt.stomaTypeControl.value.display,
        Sr = {
          careStartDate: Wt.modalData.date,
          careStartTime: Wt.timeControl.value,
          stomaType: Ao,
          stomaName: Wt.stomaNameControl.value,
          stomaSize: Wt.stomaSize,
          doctor: Wt.isShowDoctorAgreementField ? Wt.doctorControl.value : {
            fio: [Wt.currentUser?.lastName, Wt.currentUser?.firstName, Wt.currentUser?.secondName].filter(Boolean).join(" "),
            id: Wt.currentUser.employeeId
          },
          currentUser: Wt.currentUser
        };
      try {
        const us = yield (0, A.z)(Wt.patientService.findPatientInfo(Wt.modalData?.patientInfo?.actualPatientId));
        if (!us?.ehrId) throw new Error("Не удалось найти ehrId для пациента.");
        const Ps = yield (0, A.z)(Wt.compositionService.getEhr(us.ehrId));
        if (!Ps) throw new Error("Не удалось получить экземпляр ЭМК (IEhr).");
        const hs = yield (0, A.z)(Wt.compositionService.createStomaObservationCardDocument(Ps, Wt.modalData?.patientInfo?.careCaseId, Sr));
        hs && (Wt.refreshService.triggerReloadList(), Wt.isLoad = !1);
        const oi = `${d()(Wt.modalData.date).format("YYYY-MM-DD")}T${Wt.timeControl.value}:00`;
        Wt.modalRef.close({
          protocolId: hs.uid,
          careCaseId: Wt.modalData.patientInfo.careCaseId,
          installDate: oi,
          stomaKind: Ao,
          stomaKindId: Wt.stomaTypeControl.value?.code,
          stomaName: Wt.stomaNameControl.value || void 0,
          stomaSize: Wt.stomaSize || void 0,
          employeeId: Wt.currentUser?.employeeId,
          updated: new Date().toISOString(),
          signed: !1,
          stomaCareMarks: []
        });
      } catch (us) {
        Wt.isLoad = !1, console.error("Ошибка при создании композиции:", us);
      }
    })();
  }
});
