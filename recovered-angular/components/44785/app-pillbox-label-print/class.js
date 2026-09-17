// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce) {
    this.modalRef = $, this.data = k, this.printService = ce, this.isPrinting = !1, this.errorMessage = null, this.formattedFio = this.printService.formatFioShort(this.data.fio);
  }
  printLabel() {
    this.isPrinting = !0, this.errorMessage = null, this.printService.printCode({
      careCaseId: this.data.careCaseId,
      pillbox_num: this.data.barcode
    }, "pillbox_barcode").pipe((0, Xn.t)(this)).subscribe(k => {
      this.isPrinting = !1, k && this.modalRef.close(!0);
    });
  }
  close() {
    this.modalRef.close();
  }
});
