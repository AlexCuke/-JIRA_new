// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce) {
    this.modalRef = $, this.data = k, this.printService = ce, this.modalData = null, this.modalData = k;
  }
  printLabel() {
    this.printService.printCode({
      careCaseId: this.data.careCaseId
    }, "referral_marking").pipe((0, Xn.t)(this), (0, M.h)($ => $)).subscribe(() => {
      this.modalRef.close(!0);
    });
  }
  close() {
    this.modalRef.close();
  }
});
