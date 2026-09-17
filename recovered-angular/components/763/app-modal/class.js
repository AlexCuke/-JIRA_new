// Extracted class; external identifiers resolve in modules/763.js.
(class {
  constructor(C, v) {
    this.modalRef = C, this.store = v, this.component = null;
  }
  ngOnInit() {
    this.store.select(t.rF).subscribe(C => {
      this.name = C, this.updateContent();
    });
  }
  ngOnDestroy() {
    this.store.dispatch((0, a.cf)({
      modal: null
    }));
  }
  updateContent() {
    this.title = e.Y[this.name], this.component = e.x[this.name];
  }
  onClose() {
    this.modalRef.close();
  }
});
