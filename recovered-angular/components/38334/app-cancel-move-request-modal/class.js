// Extracted class; external identifiers resolve in modules/38334.js.
(class {
  constructor(be, le) {
    this.modalRef = be, this.store = le;
  }
  ngOnInit() {
    this.store.select(m.bg).subscribe(be => {
      this.replacement = be;
    });
  }
  ngOnDestroy() {
    this.store.dispatch((0, d.w8)({
      replacement: ""
    }));
  }
});
