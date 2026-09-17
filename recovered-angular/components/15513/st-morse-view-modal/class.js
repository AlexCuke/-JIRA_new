// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue, He, lt, ht) {
    this.modalRef = s, this.patientData = o, this.store = D, this.messageService = Z, this.modalService = X, this.compositionsBaseService = oe, this.confirmationModalService = ue, this.sharedDataService = He, this.cdr = lt, this.breakpointObserver = ht, this.canModifyAssessment = !1, this.isTablet = !1, this.morseScaleValue = (0, cw.eP)(o), this.fullName = (0, cw.hE)(o), this.store.dispatch((0, Ya.v_)({
      patientData: o
    })), this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(yn => {
      this.isTablet = yn.matches;
    });
    const ct = (0, rd.li)(o?.data),
      on = ct.scaleMorseTime ?? ct.timeCommitted ?? this.morseScaleValue?.scaleMorseTime;
    (0, Ia.a)([this.store.select(cl.S8).pipe((0, ka.h)(yn => !!yn), (0, Ie.q)(1)), this.store.select(aP).pipe((0, Ie.q)(1))]).pipe((0, vs.w)(([yn, un]) => {
      const bn = HP(un);
      if (BP(on, ct.owner ?? this.morseScaleValue?.owner, yn, bn, ct.ownerId)) return (0, La.of)(!0);
      const ei = ct.compositionUid,
        Bn = o?.data?.careCase;
      return ei && Bn?.actualPatientId ? this.compositionsBaseService.getPatientById(Bn.actualPatientId).pipe((0, vs.w)(Ti => this.compositionsBaseService.getEhr(Ti.ehrId)), (0, vs.w)(Ti => Ti.getMedicalEntry(ei)), (0, zs.U)(Ti => {
        const Sn = function b5(c) {
          if (!c) return;
          const s = c.name ?? c["|name"],
            o = c["|id"] ?? c.id;
          return null != s && "" !== s || null != o ? {
            owner: s,
            ownerId: o
          } : void 0;
        }(new bm.CE(Ti.getRoot()).composerData);
        return BP(on, Sn?.owner, yn, bn, Sn?.ownerId);
      }), (0, Ja.K)(() => (0, La.of)(!1))) : (0, La.of)(!1);
    })).subscribe(yn => {
      this.canModifyAssessment = yn, this.cdr.markForCheck();
    });
  }
  onEdit() {
    this.canModifyAssessment && (this.modalRef.close(), this.store.dispatch((0, Ya.v_)({
      patientData: this.patientData
    })), this.modalService.open(new Zs.X(vE.Z), {
      panelClass: "st-morse-edit-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.patientData
    }));
  }
  onDelete() {
    if (!this.canModifyAssessment) return;
    const s = (0, rd.li)(this.patientData?.data),
      o = String(s.compositionUid ?? this.morseScaleValue?.compositionUid ?? ""),
      D = this.patientData?.data?.careCase?.actualPatientId;
    o && D ? this.confirmationModalService.openDialog({
      title: "Удаление оценки",
      message: `\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443 \u043f\u043e \u0448\u043a\u0430\u043b\u0435 \u041c\u043e\u0440\u0441\u0435 \u0443 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${this.fullName}?`,
      buttonTitle: "Удалить",
      cancelButtonTitle: "Отменить"
    }).pipe((0, vs.w)(() => this.deleteMorseComposition(o, D)), (0, Ie.q)(1)).subscribe({
      next: () => {
        this.sharedDataService.runActionSubject("scalesTemperaturePatientList:reload"), this.messageService.info("Оценка по шкале Морсе удалена"), this.modalRef.close();
      },
      error: () => {
        this.messageService.error("Не удалось удалить оценку по шкале Морсе");
      }
    }) : this.messageService.warning("Не удалось найти оценку для удаления");
  }
  deleteMorseComposition(s, o) {
    return this.compositionsBaseService.getPatientById(o).pipe((0, vs.w)(D => this.compositionsBaseService.getEhr(D.ehrId)), (0, vs.w)(D => D.getMedicalEntry(s)), (0, vs.w)(D => D.delete()));
  }
});
