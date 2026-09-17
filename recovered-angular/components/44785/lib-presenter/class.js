// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  handleEscape($) {
    this.onClose();
  }
  constructor($, k, ce, Ye, Tt, ai) {
    this.breakpointObserver = $, this.modalHelper = k, this.cdr = ce, this.accountingDocumentService = Ye, this.luMessageService = Tt, this.store = ai, this.cancelConfirmed = new n.vpe(), this.destroy$ = new d.x(), this.isTablet = !1, this.isLoading = !0, this.dispensedSlots$ = (0, qe.of)([]), this.periodMap = {
      night: "Ночь",
      morning: "Утро",
      day: "День",
      evening: "Вечер",
      wholeDay: "Весь день"
    };
  }
  ngOnInit() {
    this.breakpointObserver.observe(ri.ok).pipe((0, b.R)(this.destroy$)).subscribe($ => this.isTablet = $.matches), this.dispensedSlots$ = this._getDispensedSlots();
  }
  _getDispensedSlots() {
    if (!this.med.slots || 0 === this.med.slots.length) return (0, qe.of)([]);
    const k = [...this.med.slots].filter(ce => Qp.DISPENSED_STATUSES.has(ce.status?.toLowerCase())).map(ce => {
      const Ye = ce.resultCompositionUid.split(":")[0];
      return ce?.resultCompositionUid && !this.med.base ? this.accountingDocumentService.getAccountingDocumentByDispenseId(Ye).pipe((0, Go.K)(Tt => "E104" === Tt?.error.code ? (0, qe.of)({
        stateDescription: null,
        pharmaMedicines: [{
          totalAmount: 0
        }]
      }) : (this.luMessageService.error(Tt?.error?.message ?? "Ошибка запроса к сервису", {
        marginBottom: 44,
        autoClose: !0
      }), console.warn("[PresenterComponent] Не удалось загрузить учетные документы:", Tt?.status, Tt?.message), (0, hn._)(() => Tt))), (0, q.U)(Tt => Tt.stateDescription ? Tt.pharmaMedicines.map(ai => ({
        ...ce,
        amount: +ai.totalAmount || +ce.amount,
        document: Tt.documentNumber || ce.document,
        issuer: Tt.employeeFullName || ce.issuer,
        confirmation: Tt.stateDescription
      })) : [{}])) : (0, qe.of)([{}]);
    });
    return (0, di.D)(k).pipe((0, q.U)(ce => ce.flat().filter(Tt => Object.keys(Tt).length > 0).sort((Tt, ai) => Tt.dayTimePeriod && ai.dayTimePeriod ? Object.keys(this.periodMap).indexOf(Tt.dayTimePeriod) - Object.keys(this.periodMap).indexOf(ai.dayTimePeriod) : Tt.time && ai.time && Tt.time !== ai.time ? +Tt.time.split(":")[0] - +ai.time.split(":")[0] : Tt.document && ai.document ? +Tt.document - +ai.document : -1)), (0, M.h)(ce => ce && ce.length > 0), (0, tn.x)(() => {
      this.isLoading = !1, this.cdr.markForCheck();
    }));
  }
  ngOnDestroy() {
    this.destroy$.next(), this.destroy$.complete();
  }
  getStatusText($) {
    return (0, Re.dg)($);
  }
  onClose() {
    this.close && this.close();
  }
  onCancelCompleted() {
    this.close && this.close();
  }
  formatTime($) {
    return $.dayTimePeriod ? this.periodMap[$.dayTimePeriod] : $?.time ?? "-";
  }
  onClick($, k, ce) {
    $.preventDefault(), k && "function" == typeof k.open && k.open(ce.nativeElement);
  }
  onCancelCompletedMenu($, k) {
    k.close(), $.resultCompositionUid = $.resultCompositionUid.split(":")[0], this.modalHelper.openDispensingConfirmationModal("cancel", this.patient?.name || "Неизвестный пациент", this.med, $).pipe((0, b.R)(this.destroy$)).subscribe({
      next: () => {
        this.store.dispatch(R({
          patientId: this.patient.id,
          medicineId: this.med.id,
          slot: $,
          code: $.code,
          isBaseTherapy: this.med.base
        })), this.cancelConfirmed.emit({
          med: this.med,
          patient: this.patient,
          slot: $
        }), this.close && this.close();
      },
      error: Ye => {
        console.error("[PresenterComponent] Ошибка отмены списания:", Ye?.status, Ye?.message);
      }
    });
  }
  onCancel($) {
    this.close();
  }
});
