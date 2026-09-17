// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.store = s, this.isOpen = !1;
  }
  ngOnInit() {
    this.store.select(dP.fV).subscribe(s => {
      this.isOpen = s;
    });
  }
  onCloseCard() {
    this.store.dispatch((0, fp.cQ)());
  }
});
