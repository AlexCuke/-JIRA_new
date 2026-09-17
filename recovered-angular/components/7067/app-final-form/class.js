// Extracted class; external identifiers resolve in modules/7067.js.
(class {
  constructor(y, j, W, F, Le, ke, J) {
    this.modalRef = y, this.modalData = j, this.messageService = W, this.proceduresService = F, this.pimCompositionService = Le, this.cdr = ke, this.userContextService = J, this.patientFio = "", this.procedure = "", this.userData = null, this.isLoading = !1, this.isLoad = !1;
    const fe = j?.data;
    fe && (this.patientFio = [fe?.careCase?.lastName, fe?.careCase?.firstName, fe?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [fe?.procedureAssignment?.assignmentCode, fe?.procedureAssignment?.assignmentName].filter(Boolean).join(" - "));
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, N.h)(y => !!y), (0, A.t)(this)).subscribe(y => {
      this.userData = y;
    }), this.markAssigment();
  }
  markAssigment() {
    const y = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoading = !0, this.proceduresService.markProcedureAssignmentAsFinishing(y).pipe((0, A.t)(this)).subscribe({
      next: () => {
        this.isLoading = !1, this.cdr.detectChanges();
      },
      error: j => {
        this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отметить назначение как финализируемое"), console.error("Ошибка ", j), this.modalRef.close(!1);
      }
    });
  }
  onClose() {
    if (this.isLoad) return;
    const y = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoad = !0, this.proceduresService.unMarkProcedureAssignmentAsFinishing(y).pipe((0, A.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.modalRef.close(!0), this.cdr.detectChanges();
      },
      error: () => {
        this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось cнять отметку с назначения как финализируемое"), this.modalRef.close(!1);
      }
    });
  }
  onSubmit() {
    if (this.isLoad) return;
    this.isLoad = !0;
    const y = this.modalData.data;
    this.pimCompositionService.getCompostionForFinaly(y).pipe((0, I.w)(j => {
      const W = {
        assignmentCompositionUid: y.procedureAssignment.assignmentCompositionUid,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        resultCompositionUid: j?.getUid(),
        updated: new Date().toISOString(),
        completed: new Date().toISOString()
      };
      return this.proceduresService.completeProcedureAssignment(W);
    }), (0, A.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.messageService.success(`\u041a\u0443\u0440\u0441 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(y?.careCase)} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0444\u0438\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d`, {
          marginBottom: 44
        }), this.cdr.detectChanges(), this.modalRef.close(!0);
      },
      error: j => {
        this.isLoad = !1, this.cdr.detectChanges(), console.error(j), this.modalRef.close(!0), this.messageService.error("Не удалось финализировать курс назначения", {
          marginBottom: 44
        });
      }
    });
  }
  toShortFio(y) {
    const {
      lastName: j,
      firstName: W,
      secondName: F
    } = y ?? {};
    return [j, W ? `${W[0]}.` : "", F ? `${F[0]}.` : ""].filter(Boolean).join(" ");
  }
});
