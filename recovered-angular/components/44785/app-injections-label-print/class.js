// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce) {
    this.modalRef = $, this.data = k, this.printService = ce, this.modalData = null, this.getInjectionDuration = So, this.modalData = k;
  }
  printLabel() {
    this.printService.printCode({
      careCaseId: this.data.careCaseId,
      assignmentCompositionUid: this.data.medicine[0].assignmentCompositionUid,
      dispenceCode: this.data.medicine[0].code
    }, "referral_marking").pipe((0, Xn.t)(this), (0, M.h)(Ye => Ye)).subscribe(() => {
      this.close();
    });
  }
  close() {
    this.modalRef.close();
  }
});
