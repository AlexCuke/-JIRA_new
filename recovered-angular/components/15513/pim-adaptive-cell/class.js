// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue, He, lt, ht) {
    this.store = s, this.modalService = o, this.messageService = D, this.router = Z, this.userContextService = X, this.procedureControllerService = oe, this.pimCompositionService = ue, this.proceduresReloadService = He, this.pimRights = lt, this.cdr = ht, this.userData = null, this.assignmentDate = "", this.procedureCompletedDate = "", this.patientFio = null, this._baseToolboxItems = [{
      icon: "e-sign",
      action: "open_comment",
      label: "Внести комментарий"
    }, {
      icon: "close",
      action: "cancel",
      label: "Отменить"
    }], this.currentRoute = null, this.isLoad = !1;
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, ka.h)(s => !!s), (0, Kn.t)(this)).subscribe(s => {
      this.userData = s;
    }), this.element = this.data?.data, this.assignmentDate = (0, M1.t)(this.data?.data?.procedureAssignment?.planningDate), this.procedureCompletedDate = (0, M1.t)(this.data?.data?.procedureAssignment?.procedureCompletedDate), this.patientFio = [this.element?.careCase?.lastName, this.element?.careCase?.firstName, this.element?.careCase?.secondName].filter(Boolean).join(" "), this.updateCurrentRoute(this.router.url);
  }
  get ageYears() {
    return Fc.Kp;
  }
  get toolboxMap() {
    return ["посев" === this.element?.procedureAssignment?.procedureDressing ? {
      icon: "surveillance",
      action: "cancel_sowing",
      label: "Отменить посев"
    } : {
      icon: "surveillance",
      action: "confirm_sowing",
      label: "Посев"
    }, ...this._baseToolboxItems].filter(D => this.hasRightCode(D.action));
  }
  get isCancelledProcedure() {
    return ["CANCELLED"].includes(this.element.procedureAssignment.procedureStatus);
  }
  get isDisabledRow() {
    return ["STARTED", "STARTED_PROTOCOL"].includes(this.element.procedureAssignment.procedureStatus);
  }
  hasRightCode(s) {
    const o = gL[s];
    if (!o?.length) return !0;
    const D = this.userData?.rightCodes ?? [];
    return o.some(Z => D.includes(Z));
  }
  get canFinalize() {
    const s = this.element?.procedures ?? [],
      o = s.length ? s.map(D => D.assignmentCode) : [this.element?.procedureAssignment?.assignmentCode];
    return this.pimRights.canFinalizeAssignments(o);
  }
  onActionsClick(s) {
    this.isDisabledRow && s.stopPropagation();
  }
  updateCurrentRoute(s) {
    this.currentRoute = s.includes("/procedures-treatments/active") ? "active" : s.includes("/procedures-treatments/finish") ? "finished" : s.includes("/procedures-treatments/finaly") ? "finaly" : null;
  }
  openModal(s, o) {
    this.modalService.open(new Zs.X(s), o).afterClose().pipe((0, ka.h)(D => !!D), (0, Kn.t)(this)).subscribe(() => this.proceduresReloadService.reload());
  }
  onRunAction(s) {
    if ("final" !== s) {
      if (this.hasRightCode(s)) switch (s) {
        case "complete":
          this.openModal(W5.y, {
            data: this.data,
            width: "512px",
            disableClose: !0
          });
          break;
        case "complete-with-doc":
          this.openModal(z5.d, {
            data: this.data,
            width: "100vw",
            height: "100vh"
          });
          break;
        case "open_comment":
          this.store.dispatch((0, u_.Bq)({
            data: this.element,
            typeForm: "open_comment"
          }));
          break;
        case "confirm_sowing":
        case "cancel_sowing":
          this.openModal(G5.v, {
            data: {
              data: this.element,
              actionName: s
            },
            panelClass: "confirmForm",
            width: "456px"
          });
          break;
        case "cancel":
          this.openModal($5.i, {
            data: this.data,
            panelClass: "cancelForm",
            width: "576px"
          });
          break;
        case "restore_cancelled":
          this.onRestore(this.element);
      }
    } else {
      if (!this.canFinalize) return;
      this.openModal(K5.a, {
        data: this.data,
        panelClass: "finalForm",
        width: "512px"
      });
    }
  }
  onRowClick() {
    switch (this.currentRoute) {
      case "active":
        this.store.dispatch((0, u_.Bq)({
          data: this.element,
          typeForm: "open_details"
        }));
        break;
      case "finished":
        if (!this.hasRightCode("open_finish_details")) return;
        this.store.dispatch((0, u_.Bq)({
          data: this.element,
          typeForm: "open_finish_details"
        }));
        break;
      case "finaly":
        this.store.dispatch((0, u_.Bq)({
          data: this.element,
          typeForm: "open_finaly_details"
        }));
    }
  }
  onRestore(s) {
    if (!this.hasRightCode("restore_cancelled")) return;
    this.isLoad = !0;
    const o = {
        assignmentCompositionUid: s.procedureAssignment.assignmentCompositionUid,
        code: s.procedureAssignment.procedureCode,
        updated: new Date().toISOString(),
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`
      },
      D = `${s.procedureAssignment.assignmentCode} - ${s.procedureAssignment.assignmentName}`,
      Z = `${s.careCase.lastName} ${s.careCase.firstName[0]}.${s.careCase.secondName[0]}.`;
    let X;
    X = this.procedureControllerService.rollbackCompleteProcedureAssignmentCommand(o), this.pimCompositionService.getCompositionRollBack(s).pipe((0, vs.w)(() => X), (0, Kn.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, setTimeout(() => {
          this.proceduresReloadService.reload();
        }, 2e3), this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${D}\xbb \u0443 ${Z} \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435`, {
          marginBottom: 44
        }), this.cdr.markForCheck();
      },
      error: oe => {
        this.isLoad = !1, this.messageService.error("Произошла ошибка при восстановлении процедуры", {
          marginBottom: 44
        }), this.cdr.markForCheck();
      }
    });
  }
});
