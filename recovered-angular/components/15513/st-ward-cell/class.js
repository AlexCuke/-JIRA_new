// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  get wardName() {
    return (0, OP.O)(this.data?.data) || "Не размещён";
  }
  get isEmpty() {
    return !(0, OP.O)(this.data?.data);
  }
});
