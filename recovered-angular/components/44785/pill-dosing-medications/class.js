// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  get timeColumnWidthCss() {
    return `${this.timeColumnWidth}px`;
  }
  constructor($, k, ce, Ye) {
    this.cdr = $, this.renderer = k, this.modalHelper = ce, this.viewContainerRef = Ye, this.groupingMode = "byPatient", this.patientData = null, this.medicamentData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.selectedPeriod = null, this.searchTerm = "", this.settingsClick = new n.vpe(), this.slotAction = new n.vpe(), this.activeIndex = 0, this.hoursPerPage = 6, this.visibleHourlyHeaders = [], this.selectedTime = null, this.loadingFlag = !1, this.hasMoreData = !0, this.visiblePatients = [], this.visibleMedicamentData = null, this.expandedMedicines = {}, this.rotatedStates = {}, this.isResizing = !1, this.lastMouseEvent = null, this.rafId = null, this.currentChunkIndex = 0, this.timeColumnWidth = Cn.TIME_COLUMN_WIDTH_PERIODS, this.unlistenMouseMove = null, this.unlistenMouseUp = null, this.loadMorePatients = () => {
      if (!this.patientData || this.loadingFlag) return;
      const Tt = this.visiblePatients.length;
      if (Tt >= this.patientData.length) return void (this.hasMoreData = !1);
      this.loadingFlag = !0;
      const ai = this.patientData.slice(Tt, Tt + Cn.CHUNK_SIZE);
      this.visiblePatients = [...this.visiblePatients, ...ai], this.hasMoreData = this.visiblePatients.length < this.patientData.length, this.loadingFlag = !1, this.cdr.markForCheck();
    }, this.loadMoreMedicaments = () => {
      if (!this.medicamentData || this.loadingFlag) return;
      const Tt = Object.keys(this.medicamentData),
        ai = this.visibleMedicamentData ? Object.keys(this.visibleMedicamentData) : [];
      if (ai.length >= Tt.length) return void (this.hasMoreData = !1);
      this.loadingFlag = !0;
      const Zi = Tt.slice(ai.length, ai.length + Cn.CHUNK_SIZE),
        Po = {
          ...(this.visibleMedicamentData || {})
        };
      for (const fo of Zi) Po[fo] = this.medicamentData[fo];
      this.visibleMedicamentData = Po, this.hasMoreData = Object.keys(this.visibleMedicamentData).length < Tt.length, this.loadingFlag = !1, this.cdr.markForCheck();
    }, this.updateGridTemplate(), this.heightChanged$ = (0, De.R)(window, "resize").pipe((0, rt.O)(window.innerWidth), (0, Yd.b)(100), (0, q.U)(() => ({
      height: window.innerWidth > 1826 ? "calc(100vh - 252px)" : "calc(100vh - 322px)"
    })));
  }
  ngOnChanges($) {
    $.allHourlyHeaders && (this.currentChunkIndex = 0, this.updateVisibleHeaders()), $.groupingMode && this.updateGridTemplate(), ($.timeHeaderMode || $.selectedPeriod) && (this.updateTimeColumnWidth(), this.updateGridTemplate(), this.currentChunkIndex = 0, this.updateVisibleHeaders()), $.patientData && this.resetChunkedPatients(), $.medicamentData && this.resetChunkedMedicaments();
  }
  ngOnDestroy() {
    this.isResizing = !1, null !== this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = null), this.unlistenMouseMove && (this.unlistenMouseMove(), this.unlistenMouseMove = null), this.unlistenMouseUp && (this.unlistenMouseUp(), this.unlistenMouseUp = null);
  }
  resetChunkedPatients() {
    if (!this.patientData?.length) return this.visiblePatients = [], void (this.hasMoreData = !1);
    this.visiblePatients = this.patientData.slice(0, Cn.CHUNK_SIZE), this.hasMoreData = this.visiblePatients.length < this.patientData.length;
  }
  resetChunkedMedicaments() {
    if (!this.medicamentData) return this.visibleMedicamentData = null, void (this.hasMoreData = !1);
    const $ = Object.keys(this.medicamentData),
      k = $.slice(0, Cn.CHUNK_SIZE),
      ce = {};
    for (const Ye of k) ce[Ye] = this.medicamentData[Ye];
    this.visibleMedicamentData = ce, this.hasMoreData = k.length < $.length;
  }
  get isFirstPage() {
    return 0 === this.currentChunkIndex;
  }
  get periodLabel() {
    return this.selectedPeriod && "all" !== this.selectedPeriod.toLowerCase() ? {
      morning: "Утро",
      day: "День",
      evening: "Вечер",
      night: "Ночь"
    }[this.selectedPeriod.toLowerCase()] ?? null : null;
  }
  get isLastPage() {
    if (!this.allHourlyHeaders.length || this.hoursPerPage <= 0) return !0;
    const $ = Math.ceil(this.allHourlyHeaders.length / this.hoursPerPage) - 1;
    return this.currentChunkIndex >= $;
  }
  get selectedColumnIndex() {
    if (!this.selectedTime || "hours" !== this.timeHeaderMode || !this.visibleHourlyHeaders.length) return null;
    const $ = Ye => {
        const Tt = Ye.trim().split(":"),
          ai = parseInt(Tt[0], 10),
          Zi = Tt[1] ? parseInt(Tt[1], 10) : 0;
        return ai.toString().padStart(2, "0") + ":" + Zi.toString().padStart(2, "0");
      },
      k = $(this.selectedTime),
      ce = this.visibleHourlyHeaders.findIndex(Ye => $(Ye) === k);
    return ce >= 0 ? ce + 1 : null;
  }
  get gridColumnsCount() {
    return this.visibleHourlyHeaders.length || this.hoursPerPage;
  }
  toggleMedicamentGroup($) {
    const k = this.expandedMedicines[$];
    this.expandedMedicines[$] = !k, this.rotatedStates[$] = !k, this.cdr.markForCheck();
  }
  onColumnResizeStart($) {
    $.preventDefault(), null !== this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = null), this.isResizing = !0;
    const k = $.clientX,
      ce = this.timeColumnWidth;
    this.unlistenMouseMove = this.renderer.listen("document", "mousemove", Ye => {
      this.lastMouseEvent = Ye;
    }), this.unlistenMouseUp = this.renderer.listen("document", "mouseup", () => {
      this.isResizing = !1, this.lastMouseEvent = null, this.unlistenMouseMove && (this.unlistenMouseMove(), this.unlistenMouseMove = null), this.unlistenMouseUp && (this.unlistenMouseUp(), this.unlistenMouseUp = null);
    }), this.processColumnResize(k, ce);
  }
  scrollHourlyHeaders($) {
    "left" !== $ || this.isFirstPage ? "right" === $ && !this.isLastPage && this.currentChunkIndex++ : this.currentChunkIndex--, this.updateVisibleHeaders();
  }
  onHourlyHeaderClick($) {
    this.activeIndex = $;
  }
  onChunkIndexChange($) {
    this.currentChunkIndex = $, this.updateVisibleHeaders(), this.visibleHourlyHeaders.length > 0 && (!this.selectedTime || !this.visibleHourlyHeaders.includes(this.selectedTime)) && (this.selectedTime = this.visibleHourlyHeaders[0], this.cdr.markForCheck());
  }
  onTimeHeaderSelected($) {
    this.selectedTime = $, this.cdr.markForCheck();
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
  onContentScroll($) {
    this.headerEl && (this.headerEl.nativeElement.scrollLeft = $.target.scrollLeft);
  }
  onSlotAction($) {
    this.slotAction.emit($);
  }
  emitSettingsClickEvent() {
    this.settingsClick.emit();
  }
  trackByPatient($, k) {
    return k.id;
  }
  trackByMedicine($, k) {
    return k.id;
  }
  trackByPrescription($, k) {
    return k.id;
  }
  trackByGroupKey($, k) {
    return k.key;
  }
  trackByTime($, k) {
    return k;
  }
  onLeftClick($, k, ce) {
    0 === $.button && this.modalHelper.openPresenterModal(k, ce, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
  }
  onRightClick($, k, ce, Ye) {
    $.preventDefault(), $.stopPropagation(), 2 === $.button && ce && Ye && ce.open(Ye);
  }
  onGiveAllClick($, k) {
    k.close();
  }
  updateGridTemplate() {
    this.gridTemplateStyle = `${"byMedicament" === this.groupingMode ? Cn.LEFT_COLS_BY_MEDICAMENT : Cn.LEFT_COLS_BY_PATIENT} ${this.timeColumnWidth}px`;
  }
  updateTimeColumnWidth() {
    "hours" === this.timeHeaderMode ? (this.timeColumnWidth = Cn.TIME_COLUMN_WIDTH_HOURS, this.hoursPerPage = Math.max(Cn.MIN_HOURS_PER_PAGE, Math.floor((this.timeColumnWidth - Cn.TIME_COLUMN_UI_OVERHEAD) / Cn.SLOT_WIDTH))) : this.timeColumnWidth = this.periodLabel ? Cn.TIME_COLUMN_WIDTH_SINGLE_PERIOD : Cn.TIME_COLUMN_WIDTH_PERIODS;
  }
  processColumnResize($, k) {
    if (this.isResizing) {
      if (this.lastMouseEvent) {
        const Ye = Math.max(Cn.MIN_TIME_COLUMN_WIDTH, k - (this.lastMouseEvent.clientX - $));
        this.timeColumnWidth = Ye, this.updateGridTemplate();
        const ai = Math.max(Cn.MIN_HOURS_PER_PAGE, Math.floor((this.timeColumnWidth - Cn.TIME_COLUMN_UI_OVERHEAD) / Cn.SLOT_WIDTH));
        this.hoursPerPage !== ai && (this.hoursPerPage = ai, this.updateVisibleHeaders()), this.lastMouseEvent = null, this.cdr.detectChanges();
      }
      this.rafId = requestAnimationFrame(() => this.processColumnResize($, k));
    } else this.rafId = null;
  }
  updateVisibleHeaders() {
    if ("hours" === this.timeHeaderMode && this.allHourlyHeaders.length > 0) {
      const $ = this.currentChunkIndex * this.hoursPerPage;
      this.visibleHourlyHeaders = [...this.allHourlyHeaders.slice($, $ + this.hoursPerPage)];
    } else this.visibleHourlyHeaders = [];
    this.cdr.markForCheck();
  }
});
