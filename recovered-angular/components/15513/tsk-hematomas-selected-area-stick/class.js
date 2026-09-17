// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.hemaAreaChange = new e.vpe(), this.editArea = new e.vpe(), this.removeArea = new e.vpe(), this.cdr = (0, e.f3M)(e.sBO), this.modalService = (0, e.f3M)(rh.ap), this.hemaArea = null, this.isShowFileUploadPanel = !1, this.files = [], this.isEdit = !1, this.isCompleted = !1;
  }
  ngOnChanges(s) {
    this.hemaAreaCtrl.value && (this.hemaArea = {
      ...this.hemaAreaCtrl.value
    }, this.isCompleted = this.hemaArea.isCompleted, this.isEdit = !this.isCompleted && !this.isDisabled, this.hemaArea.photos && this.hemaArea.photos.length && (this.files = this.hemaArea.photos.map(o => ({
      status: "success",
      item: o
    }))));
  }
  showPanel() {
    this.isShowFileUploadPanel = !this.isShowFileUploadPanel, this.cdr.detectChanges();
  }
  fileHandler(s) {
    this.files = s?.length ? s : [], this.files.length || (this.isShowFileUploadPanel = !1), this.hemaArea.photos = s?.length ? s.map(o => o.item) : [], this.hemaAreaCtrl.setValue({
      ...this.hemaArea
    }), this.cdr.markForCheck();
  }
  removeStick(s) {
    this.removeArea.emit(s);
  }
  saveStick(s) {
    this.hemaArea.isCompleted = !0, this.hemaAreaCtrl.setValue({
      ...this.hemaArea
    }), this.isEdit = !1, this.cdr.markForCheck(), this.isCompleted = !0, this.hemaAreaChange.emit({
      ...this.hemaArea
    });
  }
  editStick(s) {
    this.isEdit = !0, this.isCompleted = !1, this.hemaArea.isCompleted = !1, this.hemaAreaCtrl.setValue({
      ...this.hemaArea
    }), this.cdr.markForCheck(), this.hemaAreaChange.emit({
      ...this.hemaArea
    });
  }
  get isPhotoLoading() {
    return !!this.hemaAreaCtrl.value?.photos?.length;
  }
  viewFiles() {
    const o = {
      data: {
        files: this.files
      },
      width: this.isTablet ? "100%" : "80%",
      height: this.isTablet ? "100%" : "80%"
    };
    this.modalService.open(new Zs.X(hx), o);
  }
});
