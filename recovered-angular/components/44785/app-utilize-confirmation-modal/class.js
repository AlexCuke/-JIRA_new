// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k) {
    this.modalRef = $, this.data = k;
  }
  onCancel() {
    this.modalRef.close(null);
  }
  onUtilize() {
    this.modalRef.close("utilize");
  }
  onUtilizeAndReassemble() {
    this.modalRef.close("utilize_and_reassemble");
  }
  onGoToPreparation() {
    this.modalRef.close("go_to_preparation");
  }
});
