// Extracted class; external identifiers resolve in modules/49587.js.
(class {
  constructor(le, n, Se, qe, Rt, We, Re) {
    this.store = le, this.confirmationModalService = n, this.patientService = Se, this.compositionService = qe, this.refreshService = Rt, this.messageService = We, this.stomaCardModalHelper = Re, this.isPanelExpand = !1, this.stomas = [], this._allToolboxMap = [{
      icon: "passport-health",
      action: "open_card",
      label: "Открыть карту наблюдения"
    }, {
      icon: "delete",
      action: "delete_card",
      label: "Удалить"
    }];
  }
  ngOnInit() {
    this.element = this.data?.data;
    const le = a()();
    this.stomas = (this.element?.stomas?.elements ?? []).map(Se => ({
      stoma: Se,
      todayMark: (Se.stomaCareMarks ?? []).find(Rt => a()(Rt.observationDate).isSame(le, "day")) ?? null
    }));
  }
  get ageYears() {
    return m.K;
  }
  get isNoWard() {
    return "не размещен" === this.element?.patientMovement?.wardName?.toLowerCase();
  }
  get patientName() {
    const le = this.element?.careCase;
    return [le?.lastName, le?.firstName, le?.secondName].filter(Boolean).join(" ");
  }
  get departmentName() {
    return this.element?.patientMovement?.departmentName ?? "";
  }
  displayToolbox(le) {
    return le?.label ?? "";
  }
  get hasAnyCareMarks() {
    return (this.element?.stomas?.elements ?? []).some(n => n.stomaCareMarks && n.stomaCareMarks.length > 0);
  }
  get toolboxMap() {
    return this.hasAnyCareMarks ? this._allToolboxMap.filter(le => "open_card" === le.action) : this._allToolboxMap;
  }
  onRunAction(le) {
    switch (le) {
      case "open_card":
        {
          const n = {
            age: a()().diff(a()(this.data?.data?.careCase?.birthDate), "year"),
            birthDate: this.data?.data.careCase.birthDate,
            dept: this.data?.data.patientMovement.departmentName,
            firstName: this.data?.data.careCase.firstName,
            gender: this.data?.data?.careCase?.genderName?.[0]?.toUpperCase() ?? "",
            lastName: this.data?.data.careCase.lastName,
            medCard: this.data?.data.hospitalCard.number,
            secondName: this.data?.data.careCase.secondName,
            actualPatientId: this.data?.data.careCase.actualPatientId,
            careCaseId: this.data?.data.careCase.careCaseId
          };
          this.store.dispatch((0, d.mR)({
            selectedPatient: n
          })), (0, A.a)([this.store.select(M.CA).pipe((0, N.q)(1)), this.store.select(b.S8).pipe((0, I.h)(Boolean), (0, N.q)(1))]).subscribe(([Se, qe]) => {
            this.stomaCardModalHelper.openModal(this.data, Se || new Date(), !0, qe, n, "stoma-patient-list");
          });
          break;
        }
      case "delete_card":
        this.deletePatientFromCareList();
    }
  }
  deletePatientFromCareList() {
    var le = this;
    return (0, t.Z)(function* () {
      if (le.hasAnyCareMarks) return;
      const n = {
        title: "Удаление пациента из Списка",
        message: `\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${le.patientName} \u0438\u0437 \u0421\u043f\u0438\u0441\u043a\u0430 \u0443\u0445\u043e\u0434\u0430?`,
        cancelButtonTitle: "Отменить",
        buttonTitle: "Удалить"
      };
      if (yield (0, O.z)(le.confirmationModalService.openDialog(n, !0))) try {
        const qe = yield (0, O.z)(le.patientService.findPatientInfo(le.data?.data?.careCase?.actualPatientId)),
          Rt = yield (0, O.z)(le.compositionService.getEhr(qe.ehrId));
        for (const We of le.data?.data?.stomas?.elements ?? []) yield (0, O.z)(le.compositionService.deleteStomaDocument(Rt, We.protocolId));
        le.refreshService.triggerReloadList(), le.messageService.success("Пациент удалён из Списка ухода", {
          marginBottom: 44
        });
      } catch (qe) {
        console.error("Ошибка удаления пациента из Списка ухода:", qe), le.messageService.error("Не удалось удалить пациента из Списка ухода", {
          marginBottom: 44
        });
      }
    })();
  }
  trackByProtocolId(le, n) {
    return n.stoma.protocolId;
  }
});
