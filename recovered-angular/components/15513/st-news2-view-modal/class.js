// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue, He, lt, ht) {
    this.modalRef = s, this.patientData = o, this.store = D, this.messageService = Z, this.modalService = X, this.compositionsBaseService = oe, this.confirmationModalService = ue, this.sharedDataService = He, this.cdr = lt, this.breakpointObserver = ht, this.canModifyAssessment = !1, this.isTablet = !1, this.scalesValue = (0, cw.sn)(o), this.fullName = (0, cw.hE)(o), this.store.dispatch((0, Ya.v_)({
      patientData: o
    })), this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(un => {
      this.isTablet = un.matches;
    });
    const ct = (0, rd.iY)(o?.data),
      on = ct.timeCommitted ?? this.scalesValue?.news2?.time_committed,
      yn = ct.owner ?? this.scalesValue?.news2?.owner;
    this.store.select(cl.S8).pipe((0, ka.h)(un => !!un), (0, Ie.q)(1), (0, vs.w)(un => {
      if ((0, Ix.zv)(on, yn, un, ct.ownerId)) return (0, La.of)(!0);
      const jn = ct.compositionUid,
        ei = o?.data?.careCase;
      return jn && ei?.actualPatientId ? this.compositionsBaseService.getPatientById(ei.actualPatientId).pipe((0, vs.w)(Bn => this.compositionsBaseService.getEhr(Bn.ehrId)), (0, vs.w)(Bn => Bn.getMedicalEntry(jn)), (0, zs.U)(Bn => {
        const Ti = new bm.u(Bn.getRoot()),
          hi = (0, Ix.IH)(Ti.composerData);
        return (0, Ix.zv)(on, hi?.owner, un, hi?.ownerId);
      }), (0, Ja.K)(() => (0, La.of)(!1))) : (0, La.of)(!1);
    })).subscribe(un => {
      this.canModifyAssessment = un, this.cdr.markForCheck();
    });
  }
  onEdit() {
    this.canModifyAssessment && (this.modalRef.close(), this.store.dispatch((0, Ya.v_)({
      patientData: this.patientData
    })), this.modalService.open(new Zs.X(aE.O), {
      panelClass: "st-news2-edit-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.patientData
    }));
  }
  onDelete() {
    if (!this.canModifyAssessment) return;
    const s = (0, rd.mP)(this.patientData?.data),
      o = this.patientData?.data?.careCase?.actualPatientId;
    s.length && o ? this.confirmationModalService.openDialog({
      title: "Удаление оценки",
      message: `\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443 \u043f\u043e \u0448\u043a\u0430\u043b\u0435 NEWS2 \u0443 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${this.fullName}?`,
      buttonTitle: "Удалить",
      cancelButtonTitle: "Отменить"
    }).pipe((0, vs.w)(() => this.deleteNews2Compositions(s, o)), (0, Ie.q)(1)).subscribe({
      next: () => {
        this.sharedDataService.runActionSubject("scalesTemperaturePatientList:reload"), this.messageService.info("Оценка по шкале NEWS2 удалена"), this.modalRef.close();
      },
      error: () => {
        this.messageService.error("Не удалось удалить оценку по шкале NEWS2");
      }
    }) : this.messageService.warning("Не удалось найти оценку для удаления");
  }
  deleteNews2Compositions(s, o) {
    return this.compositionsBaseService.getPatientById(o).pipe((0, vs.w)(D => this.compositionsBaseService.getEhr(D.ehrId)), (0, vs.w)(D => (0, y1.D)(s.map(Z => D.getMedicalEntry(Z).pipe((0, vs.w)(X => X.delete()), (0, Ja.K)(() => (0, La.of)(void 0)))))));
  }
});
