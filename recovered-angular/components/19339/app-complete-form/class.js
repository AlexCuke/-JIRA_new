// Extracted class; external identifiers resolve in modules/19339.js.
(class {
  constructor(j, W, F) {
    this.modalRef = j, this.modalData = W, this.messageService = F, this.patientFio = "", this.procedure = "", this.isLoading = !1, this.isLoad = !1, this.userData = null, this.proceduresService = (0, e.f3M)(O.O), this.cdr = (0, e.f3M)(e.sBO), this.pimCompositionService = (0, e.f3M)(L.b), this.userContextService = (0, e.f3M)(f.oL);
    const Le = W?.data;
    Le && (this.patientFio = [Le?.careCase?.lastName, Le?.careCase?.firstName, Le?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [Le?.procedureAssignment?.assignmentCode, Le?.procedureAssignment?.assignmentName].filter(Boolean).join(" - "));
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, C.h)(j => !!j), (0, I.t)(this)).subscribe(j => {
      this.userData = j;
    }), this.activateProcedure();
  }
  activateProcedure() {
    const j = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoading = !0, this.proceduresService.activateProcedure(j).pipe((0, I.t)(this)).subscribe({
      next: () => {
        this.isLoading = !1, this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось активировать процедуру"), this.modalRef.close(!1);
      }
    });
  }
  onSubmit() {
    this.isLoad || (this.isLoad = !0, this.pimCompositionService.getCompositionForComplete(this.modalData.data).pipe((0, v.w)(j => {
      const W = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        resultCompositionUid: j?.getUid(),
        description: null,
        procedureDressing: this.modalData?.data?.procedureAssignment?.procedureDressing ?? null,
        updated: new Date().toISOString()
      };
      return this.proceduresService.completeProcedure(W);
    }), (0, I.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435`, {
          marginBottom: 44
        }), this.cdr.detectChanges(), this.modalRef.close(!0);
      },
      error: j => {
        this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", j), this.messageService.error("Не удалось выполнить процедуру");
      }
    }));
  }
  toShortFio(j) {
    const {
      lastName: W,
      firstName: F,
      secondName: Le
    } = j ?? {};
    return [W, F ? `${F[0]}.` : "", Le ? `${Le[0]}.` : ""].filter(Boolean).join(" ");
  }
  onClose() {
    if (this.isLoading) return;
    const j = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoad = !0, this.proceduresService.deactivateProcedure(j).pipe((0, I.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.modalRef.close(!1), this.cdr.detectChanges();
      },
      error: () => {
        this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отменить взятие в работу"), this.modalRef.close(!1);
      }
    });
  }
});
