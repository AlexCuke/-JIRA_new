// Extracted class; external identifiers resolve in modules/89556.js.
(class {
  onKeyUp() {
    this.modalRef.close(!1);
  }
  constructor(x, u) {
    this.modalRef = x, this.data = u, this.buttonNo = "Нет", this.buttonYes = "Да", this.isBlueCancelButtonColor = !1, this.hideCancelButton = !1, this.title = this.data.title, this.data.cancelButtonTitle && (this.buttonNo = this.data.cancelButtonTitle), this.data.buttonTitle && (this.buttonYes = this.data.buttonTitle), this.data.isBlueCancelButtonColor && (this.isBlueCancelButtonColor = this.data.isBlueCancelButtonColor), this.data.hideCancelButton && (this.hideCancelButton = this.data.hideCancelButton);
  }
});
