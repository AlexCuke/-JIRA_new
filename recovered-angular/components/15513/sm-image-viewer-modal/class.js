// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  onKeyUp() {
    this.modalRef.close();
  }
  constructor(s, o, D) {
    this.data = s, this.modalRef = o, this.cdr = D, this.indexImage = 0, this.imagesUrls = [], this._setConfig(), this._prepareFilesUrls();
  }
  get imageName() {
    return this.data?.files?.[this.indexImage]?.item?.name || "";
  }
  get isLastImage() {
    return this.indexImage === this.imagesUrls.length - 1;
  }
  get isFirstImage() {
    return 0 === this.indexImage;
  }
  leftRotate() {
    this.imageViewer.rotateCounterClockwise();
  }
  rightRotate() {
    this.imageViewer.rotateClockwise();
  }
  fullScreen() {
    this.imageViewer.fullscreen = !0;
  }
  reset() {
    this.imageViewer.reset();
  }
  nextImage() {
    this.indexImage += 1, this.cdr.markForCheck();
  }
  prevImage() {
    this.indexImage -= 1, this.cdr.markForCheck();
  }
  zoomIn() {
    this.imageViewer.zoomIn();
  }
  zoomOut() {
    this.imageViewer.zoomOut();
  }
  _setConfig() {
    this.config = this.data?.config;
  }
  _prepareFilesUrls() {
    this.data.files.forEach(s => {
      const o = new FileReader();
      o.onload = D => {
        this.imagesUrls.push(D.target.result), this.cdr.markForCheck();
      }, o.readAsDataURL(s.item);
    });
  }
});
