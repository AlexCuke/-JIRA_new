// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  get selectedColumnIndexCss() {
    return null !== this.selectedColumnIndex ? this.selectedColumnIndex.toString() : null;
  }
  get gridColumnsCountCss() {
    return this.gridColumnsCount.toString();
  }
  constructor($, k, ce) {
    this.cdr = $, this.modalHelper = k, this.viewContainerRef = ce, this.gridTemplateColumns = "320px 280px 124px 164px 184px 226px auto", this.medicamentData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.visibleHourlyHeaders = [], this.selectedPeriod = null, this.selectedTime = null, this.selectedColumnIndex = null, this.gridColumnsCount = 6, this.searchTerm = "", this.loadingFlag = !1, this.hasMoreData = !0, this.onLoadMore = () => {}, this.slotAction = new n.vpe(), this.expandedMedicines = {}, this.rotatedStates = {}, this.loadMoreItems = () => {
      this.onLoadMore();
    };
  }
  ngOnChanges() {}
  toggleMedicamentGroup($) {
    const k = this.expandedMedicines[$];
    this.expandedMedicines[$] = !k, this.rotatedStates[$] = !k, this.cdr.markForCheck();
  }
  forwardSlotActionToParent($, k) {
    this.slotAction.emit({
      patientId: $.patientId,
      medicineId: $.id,
      slot: k.slot,
      action: k.action,
      isBaseTherapy: $.base,
      isOnHand: $.onHand
    });
  }
  onLeftClick($, k, ce) {
    0 === $.button && this.modalHelper.openPresenterModal(k, ce, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
  }
  trackByGroupKey($, k) {
    return k.key;
  }
  trackByPrescription($, k) {
    return k.id;
  }
});
