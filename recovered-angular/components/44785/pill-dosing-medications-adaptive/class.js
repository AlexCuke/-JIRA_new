// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k) {
    this.modalHelper = $, this.viewContainerRef = k, this.groupingMode = "byPatient", this.patientData = [], this.medicamentData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.selectedPeriod = null, this.searchTerm = "", this.slotAction = new n.vpe(), this.periodLabels = {
      morning: "Утро",
      day: "День",
      evening: "Вечер",
      night: "Ночь"
    }, this.PERIOD_ORDER = ["MORNING", "DAY", "EVENING", "NIGHT"], this.groupMedsById = gt;
  }
  getPeriodLabel($) {
    return $ && this.periodLabels[$.toLowerCase()] || "";
  }
  get periodLabel() {
    return this.selectedPeriod && "all" !== this.selectedPeriod ? this.periodLabels[this.selectedPeriod] ?? null : null;
  }
  getSelectedPeriod($) {
    return $.some(ce => ce.period.toLowerCase() === this.selectedPeriod) && this.periodLabels[this.selectedPeriod] || "";
  }
  getUniquePeriods($) {
    return (0, Io.uniqBy)($, "period").sort((k, ce) => this.PERIOD_ORDER.indexOf(k.period) - this.PERIOD_ORDER.indexOf(ce.period));
  }
  trackByPatient($, k) {
    return k.id;
  }
  trackByMedicine($, k) {
    return k.id;
  }
  trackByGroupKey($, k) {
    return k.key;
  }
  trackByPrescription($, k) {
    return k.id;
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
  openPresenter($, k) {
    this.modalHelper.openPresenterModal($, k, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe(ce => {});
  }
});
