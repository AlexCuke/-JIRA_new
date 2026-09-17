// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($) {
    this.cdr = $, this.gridTemplateColumns = "320px 280px 124px 164px 184px 226px 1fr", this.timeHeaderMode = "periods", this.selectedPeriod = null, this.allHourlyHeaders = [], this.groupingMode = "byPatient", this.selectedTime = null, this.visibleHourlyHeaders = [], this.hourlyHeaderClick = new n.vpe(), this.chunkIndexChange = new n.vpe(), this.timeHeaderSelected = new n.vpe(), this.activeIndex = 0, this.hoursPerPage = 6, this.currentChunkIndex = 0;
  }
  get isFirstPage() {
    return 0 === this.currentChunkIndex;
  }
  get isLastPage() {
    if (!this.allHourlyHeaders.length || this.hoursPerPage <= 0) return !0;
    const $ = Math.ceil(this.allHourlyHeaders.length / this.hoursPerPage) - 1;
    return this.currentChunkIndex >= $;
  }
  get periodLabel() {
    return this.selectedPeriod && "all" !== this.selectedPeriod.toLowerCase() ? {
      morning: "Утро",
      day: "День",
      evening: "Вечер",
      night: "Ночь"
    }[this.selectedPeriod.toLowerCase()] ?? null : null;
  }
  get gridColumnsCount() {
    return this.visibleHourlyHeaders?.length || 6;
  }
  ngOnChanges($) {
    ($.allHourlyHeaders || $.timeHeaderMode || $.selectedPeriod) && (this.currentChunkIndex = 0);
  }
  scrollHourlyHeaders($) {
    "left" !== $ || this.isFirstPage ? "right" === $ && !this.isLastPage && this.currentChunkIndex++ : this.currentChunkIndex--, this.activeIndex = 0, this.chunkIndexChange.emit(this.currentChunkIndex);
  }
  onHourlyHeaderClick($, k) {
    this.activeIndex = $, this.selectedTime === k ? (this.selectedTime = null, this.timeHeaderSelected.emit(null)) : (this.selectedTime = k, this.timeHeaderSelected.emit(k)), this.hourlyHeaderClick.emit($);
  }
  trackByTime($, k) {
    return k;
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
});
