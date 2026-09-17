// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor() {
    this.medicine = null, this.searchTerm = "", this.isShowTooltip = !1, this.cdr = (0, n.f3M)(n.sBO);
  }
  get medicineMethodItems() {
    return [this.medicine?.method ?? "—", this.medicine?.methodNotes ?? null, this.medicine?.indicationsForUse ? `\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e: ${this.medicine?.indicationsForUse}` : null, this.medicine?.comment ? `\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: ${this.medicine?.comment}` : null];
  }
  get tooltipMessage() {
    return this.medicineMethodItems.filter($ => $).join("\n");
  }
  ngAfterViewInit() {
    const $ = this.methodCell.nativeElement;
    this.isShowTooltip = $.scrollHeight > $.clientHeight, this.cdr.detectChanges();
  }
  get frequency() {
    const $ = this.medicine.frequency;
    return this.medicine?.permanently ? `${$}, \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e` : $;
  }
});
