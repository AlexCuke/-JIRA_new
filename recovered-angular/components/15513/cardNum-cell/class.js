// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.cardNum = null;
  }
  ngOnInit() {
    this.cardNum = this.data?.data?.hospitalCard?.number;
  }
});
