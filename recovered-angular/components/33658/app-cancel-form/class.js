// Extracted class; external identifiers resolve in modules/33658.js.
(class {
  constructor(F, Le, ke, J, fe, ye, ae) {
    this.modalRef = F, this.modalData = Le, this.messageService = ke, this.proceduresService = J, this.cdr = fe, this.userContextService = ye, this.pimCompositionService = ae, this.patientFio = "", this.procedure = "", this.cancelReason = null, this.isLoad = !1, this.isLoading = !1, this.userData = null;
    const Y = Le?.data;
    Y && (this.patientFio = [Y?.careCase?.lastName, Y?.careCase?.firstName, Y?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [Y?.procedureAssignment?.assignmentCode, Y?.procedureAssignment?.assignmentName].filter(Boolean).join(" - "));
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, I.h)(F => !!F), (0, O.q)(1), (0, N.t)(this)).subscribe(F => {
      this.userData = F, this.markAsCancelling(F);
    });
  }
  onSubmit() {
    if (this.isLoad) return;
    this.isLoad = !0;
    const F = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      description: this.cancelReason,
      updated: new Date().toISOString()
    };
    this.pimCompositionService.getCompositionForCancel(this.modalData.data, this.cancelReason).pipe((0, L.w)(() => this.proceduresService.cancelProcedure(F)), (0, N.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.messageService.info(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435`, {
          marginBottom: 44
        }), this.cdr.detectChanges(), this.modalRef.close(!0);
      },
      error: Le => {
        this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", Le), this.messageService.error("Не удалось отменить процедуру");
      }
    });
  }
  markAsCancelling(F) {
    const {
        procedureAssignment: Le
      } = this.modalData.data,
      ke = [F.lastName, F.firstName, F.secondName].filter(Boolean).join(" "),
      J = !!Le.executorName && Le.executorName === ke,
      fe = {
        assignmentCompositionUid: Le.assignmentCompositionUid,
        code: Le?.procedureCode,
        workplaceId: F?.employee?.workplace?.id.toString(),
        doctorName: `${F.lastName} ${F.firstName[0]}.${F.secondName[0]}.`,
        doctorJob: F?.jobTitle?.name,
        byExecutor: J,
        updated: new Date().toISOString()
      };
    this.isLoading = !0, this.proceduresService.markProcedureAsCancelling(fe).pipe((0, N.t)(this)).subscribe({
      next: () => {
        this.isLoading = !1, this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось начать отмену процедуры"), this.modalRef.close(!1);
      }
    });
  }
  toShortFio(F) {
    const {
      lastName: Le,
      firstName: ke,
      secondName: J
    } = F ?? {};
    return [Le, ke ? `${ke[0]}.` : "", J ? `${J[0]}.` : ""].filter(Boolean).join(" ");
  }
  onClose() {
    if (this.isLoading || this.isLoad) return;
    const F = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoad = !0, this.proceduresService.unMarkProcedureAsCancelling(F).pipe((0, N.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.modalRef.close(!1), this.cdr.detectChanges();
      },
      error: () => {
        this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отменить процедуру"), this.modalRef.close(!1);
      }
    });
  }
});
