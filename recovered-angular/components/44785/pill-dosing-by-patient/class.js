// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  get selectedColumnIndexCss() {
    return null !== this.selectedColumnIndex ? this.selectedColumnIndex.toString() : null;
  }
  get gridColumnsCountCss() {
    return this.gridColumnsCount.toString();
  }
  constructor($, k, ce, Ye, Tt, ai, Zi) {
    this.modalHelper = $, this.viewContainerRef = k, this.patientDataService = ce, this.store = Ye, this.cdr = Tt, this.el = ai, this.activeMedicamentsModuleService = Zi, this.gridTemplateColumns = "307px 328px 188px 184px 230px 205px 362px", this.patientData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.visibleHourlyHeaders = [], this.selectedPeriod = null, this.selectedTime = null, this.selectedColumnIndex = null, this.gridColumnsCount = 6, this.searchTerm = "", this.loadingFlag = !1, this.hasMoreData = !0, this.onLoadMore = () => {}, this.slotAction = new n.vpe(), this._timeColumnWidthValue = ml.TIME_COLUMN_WIDTH_PERIODS, this.columnStyle = {}, this.activeArm = null, this.loadMoreItems = () => {
      this.onLoadMore();
    }, this.groupMedsById = gt, this.activeArm = this.activeMedicamentsModuleService.activeArm;
  }
  forwardSlotActionToParent($, k, ce) {
    this.slotAction.emit({
      patientId: $,
      medicineId: k.id,
      slot: ce.slot,
      action: ce.action,
      isBaseTherapy: k.base,
      isOnHand: k.onHand
    });
  }
  ngOnChanges($) {
    ((0, ri.up)($.patientData) || (0, ri.up)($.timeHeaderMode)) && setTimeout(() => {
      this.columnStyle = {
        width: this._timeColumnWidth,
        "min-width": this._timeColumnWidth
      }, this.cdr.markForCheck();
    }, 0);
  }
  get _timeColumnWidth() {
    if ("periods" === this.timeHeaderMode) {
      const $ = this.el?.nativeElement,
        ce = ml.TIME_COLUMN_WIDTH_PERIODS;
      return $ && $?.scrollHeight > $?.clientHeight ? ce - 14 + "px" : `${ce}px`;
    }
    return `${ml.TIME_COLUMN_WIDTH_HOURS}px`;
  }
  isGiveAllAllowed($) {
    return !$.slots.every(k => ["SYSTEMATICALLY", "COMPLETED"].includes(k.status)) && !$.base;
  }
  onLeftClick($, k, ce) {
    0 === $.button && this.modalHelper.openPresenterModal(k, ce, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
  }
  onRightClick($, k, ce, Ye) {
    $.preventDefault(), $.stopPropagation(), "injections" !== this.activeArm && 2 === $.button && ce && Ye && ce.open(Ye);
  }
  getDropdownPosition($, k) {
    return this.patientData.length === $ + 1 && k + 1 === this.patientData[$].medicines.length ? ["top-center"] : ["bottom-center"];
  }
  onGiveAllClick($, k, ce) {
    this.getModalData(k.id, $.id).pipe((0, Xn.t)(this), (0, ut.w)(Ye => {
      const Tt = {
        ...Ye,
        slots: $.slots,
        context: "issuing",
        stockMedications: this.patientDataService.getAllStockMedications(),
        assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k.id)
      };
      return this.modalHelper.openWritingOffDialogWithData(Tt, this.viewContainerRef);
    })).subscribe(), ce.close();
  }
  trackByPatient($, k) {
    return k.id;
  }
  trackByMedicine($, k) {
    return k.id;
  }
  getModalData($, k, ce = null) {
    return this.patientDataService.getModalDataForPatientAndMedicine($, k, ce).pipe((0, M.h)(Ye => !!Ye || (this.store.dispatch(G({
      message: "Не удалось загрузить данные для модального окна"
    })), !1)), (0, Go.K)(() => (this.store.dispatch(G({
      message: "Ошибка при загрузке данных"
    })), Pu.E)));
  }
});
