// Extracted class; external identifiers resolve in modules/18674.js.
(class {
  constructor(st, q) {
    this.modalRef = st, this.data = q, this.isPrinting = !1, this.biomaterialPrintService = (0, t.f3M)(ae), this.messages = (0, t.f3M)(a.Jv), this.indexData = (0, ke.yE)(fe.d, q);
  }
  get probeNumberForBarcode() {
    return `${this.indexData?.labReferral?.probeNumber ?? ""}`.trim();
  }
  printLabel() {
    const st = (this.indexData?.labReferral?.careCaseId ?? this.indexData?.combinedCareCase?.careCaseId ?? "").trim(),
      q = `${this.indexData?.labReferral?.referralId ?? ""}`.trim();
    st && q ? (this.isPrinting = !0, this.biomaterialPrintService.printBarCode({
      careCaseId: st,
      referralId: [q]
    }).pipe((0, J.t)(this)).subscribe(mt => {
      this.isPrinting = !1, mt && this.modalRef.close(!0);
    })) : this.messages.error("Не удалось распечатать этикетку: нет referralId или обращения");
  }
});
