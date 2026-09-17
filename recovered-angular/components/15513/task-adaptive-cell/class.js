// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.stickyPanelOutletService = s, this.store = (0, e.f3M)(Qr.yh), this.modalService = (0, e.f3M)(rh.ap), this.messageService = (0, e.f3M)(tf.Jv), this.nurseTasksService = (0, e.f3M)(V2), this.sharedDataService = (0, e.f3M)(vm.g), this.userContextService = (0, e.f3M)(cl.oL), this.appointmentsCodesList = ["TL", "LI", "LP", "injection", "PiM", "bedsores", "consultation", "II", "procedure", "movement"], this.appointmentScore = {
      overdue: 0,
      appointed: 0
    }, this._allToolboxMap = [{
      icon: "document-edit",
      action: "fill_checklist",
      label: "Заполнить первичный чек-лист"
    }, {
      icon: "hospital_bed",
      action: "place_patient",
      label: "Разместить пациента"
    }, {
      icon: "hospital_bed",
      action: "change_placement",
      label: "Изменить размещение пациента"
    }], this.isPanelExpand = !1;
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(s => {
      this.currentDepartment = s.department, this.indexData = (0, Oc.yE)(Q4.F6, this.data.data), this.countAssignments(), this.indexData?.initialChecklist && this.indexData?.initialChecklist?.compositionUid && (this._allToolboxMap[0].label = "Открыть первичный чек-лист");
    });
  }
  get currentMedicalDate() {
    return Tg()().set({
      day: new Date().getDay(),
      hour: 6,
      minute: 0,
      second: 0
    }).toDate();
  }
  get showCheckListButton() {
    const s = this.indexData?.initialChecklist?.timeCommitted.getTime();
    return this.noChecklist || s + 864e5 >= this.currentMedicalDate.getTime();
  }
  get noChecklist() {
    return !this.indexData?.initialChecklist?.compositionUid;
  }
  get isEmergency() {
    return this.currentDepartment?.emergencyRoom;
  }
  get isNoWard() {
    return !this.indexData?.patientMovement?.wardName;
  }
  get doctorName() {
    return (0, yg.f0)(this.indexData?.patientMovement?.doctorName) || "-";
  }
  get toolboxMap() {
    return this._allToolboxMap.filter(s => {
      switch (s?.action) {
        case "change_placement":
          return !this.isNoWard;
        case "place_patient":
          return this.isNoWard;
        case "fill_checklist":
          return this.showCheckListButton;
        default:
          return !0;
      }
    });
  }
  getTypeData(s) {
    return this.data = {
      ...this.data,
      type: s
    }, this.data;
  }
  displayToolbox(s) {
    return s ? s.label : "";
  }
  countAssignments() {
    [(0, hu.yl)(this.data.data), (0, hu.Ys)(this.data.data.laboratoryAssignment, this.isEmergency), (0, hu.L5)(this.data.data.medicationAssignment, "pillboxes"), (0, hu.L5)(this.data.data.medicationAssignment, "injections"), (0, hu.C$)(this.data.data.consultationAssignment), {
      class: this.data.data.patientMovement?.departmentId !== this.currentDepartment.id || "DISCHARGED" === this.data.data?.hospitalizedPatient?.statusCode ? "appointed" : "no-appointment"
    }].forEach(He => {
      He && He.class && this.appointmentScore.hasOwnProperty(He.class) && this.appointmentScore[He.class]++;
    });
  }
  get highlighted() {
    const s = new Date().setHours(6, 0, 0, 0),
      o = new Date(ow()(this.data, "data.hospitalizedPatient.hospitalizationDate", new Date())),
      D = new Date(o.setDate(o.getDate() + 1)).setHours(6, 0, 0, 0);
    return ow()(this.data, "initialChecklist.compositionUid", !1) || D <= s ? "" : "highlighted";
  }
  onRunAction(s) {
    switch (s) {
      case "open_comment":
        this.store.dispatch((0, Ya.K0)({
          menuName: "CommentComponent"
        }));
        break;
      case "place_patient":
      case "change_placement":
        this.modalService.open(new Zs.X(wg), {
          panelClass: "full-screen-modal",
          width: "100vw",
          height: "100vh",
          data: {
            data: this.data?.data,
            actionName: s
          }
        });
        break;
      case "fill_checklist":
        if (this.indexData.patientMovement?.departmentId !== this.currentDepartment.id || "DISCHARGED" === this.indexData?.hospitalizedPatient?.statusCode) this.messageService.error("Пациент был переведен или выписан из отделения");else {
          const D = this.indexData?.careCase?.careCaseId;
          this.modalService.open(new Zs.X(_x), {
            width: "100vw",
            height: "100vh",
            disableClose: !0,
            data: this.indexData
          }).afterClose().pipe((0, Kn.t)(this), (0, ka.h)(Z => !!Z), (0, vs.w)(Z => this.nurseTasksService.savePhotos(Z)), (0, vs.w)(Z => this.nurseTasksService.signCheckList(Z, D)), (0, GM.g)(Gm.x)).subscribe(() => {
            this.messageService.success("Первичный чек лист пациента успешно заполнен"), this.sharedDataService.runActionSubject("tasksPatientList");
          });
        }
    }
  }
  openComments() {
    this.stickyPanelOutletService.open(["add-patient-comment", this.data?.data?.careCase?.careCaseId ?? ""]);
  }
});
