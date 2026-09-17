// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.isOperation = !1;
  }
  ngOnInit() {
    this.isOperation = !!this.data?.data?.operation?.elements;
  }
});
