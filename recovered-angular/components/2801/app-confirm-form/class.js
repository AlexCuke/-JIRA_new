// Extracted class; external identifiers resolve in modules/2801.js.
(class {
  constructor(T, R, B, y) {
    switch (this.modalRef = T, this.modalData = R, this.messageService = B, this.proceduresReloadService = y, this.title = "", this.description = "", this.patientFio = "", this.isCancelBtn = !1, this.isLoad = !1, this.userData = null, this.proceduresService = (0, e.f3M)(A.O), this.cdr = (0, e.f3M)(e.sBO), this.userContextService = (0, e.f3M)(I.oL), this.patientFio = [this.modalData.data?.careCase?.lastName, this.modalData.data?.careCase?.firstName, this.modalData.data?.careCase?.secondName].filter(Boolean).join(" "), R.actionName) {
      case "confirm_sowing":
        this.title = "Подтверждение посева", this.description = "Подтвердить необходимость передачи информации о посеве врачу?", this.isCancelBtn = !0;
        break;
      case "cancel_sowing":
        this.title = "Снятие отметки о посеве", this.description = "Подтвердить отмену передачи информации о посеве врачу?";
    }
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, O.h)(T => !!T), (0, N.t)(this)).subscribe(T => {
      this.userData = T;
    });
  }
  onSubmit() {
    if (this.isLoad || !this.userData) return;
    this.isLoad = !0;
    const T = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment.procedureCode,
        workplaceId: this.userData.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      },
      R = "confirm_sowing" === this.modalData.actionName;
    (R ? this.proceduresService.markProcedureDressing({
      ...T,
      procedureDressing: "посев"
    }) : this.proceduresService.unmarkProcedureDressing(T)).pipe((0, N.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.modalRef.close(!0), this.messageService.success(R ? `\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0441\u0435\u0432\u0430\n            \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u0432\u0440\u0430\u0447\u0443` : `\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0441\u0435\u0432\u0430\n            \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u0441\u043d\u044f\u0442\u0430`, {
          marginBottom: 44
        }), this.proceduresReloadService.reload(), this.cdr.detectChanges();
      },
      error: () => {
        this.isLoad = !1, this.modalRef.close(!1), this.messageService.error("Ошибка при изменении отметки о посеве", {
          marginBottom: 44
        }), this.cdr.detectChanges();
      }
    });
  }
  toShortFio(T) {
    const {
      lastName: R,
      firstName: B,
      secondName: y
    } = T ?? {};
    return [R, B ? `${B[0]}.` : "", y ? `${y[0]}.` : ""].filter(Boolean).join(" ");
  }
});
