// Extracted class; external identifiers resolve in modules/21028.js.
(class {
  constructor(N, I) {
    this.modalRef = N, this.data = I, this.title = I.title, this.message = I.message;
  }
  onCancel() {
    this.modalRef.close();
  }
  onDelete() {
    this.modalRef.close(!0);
  }
});
