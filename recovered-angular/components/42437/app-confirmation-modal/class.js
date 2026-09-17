// Extracted class; external identifiers resolve in modules/42437.js.
(class {
  onKeyUp() {
    this.modalRef.close(!1);
  }
  constructor(Wt, Oi) {
    this.modalRef = Wt, this.data = Oi, this.buttonNo = "Нет", this.buttonYes = "Да", this.title = this.data.title, this.data.cancelButtonTitle && (this.buttonNo = this.data.cancelButtonTitle), this.data.buttonTitle && (this.buttonYes = this.data.buttonTitle);
  }
});
