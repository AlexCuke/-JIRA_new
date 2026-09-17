// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.store = s, this.searchTerm$ = this.store.select(_L.Aq);
  }
  get fio() {
    return `${this.data.data.careCase.lastName} ${this.data.data.careCase.firstName} ${this.data.data.careCase?.secondName ?? ""}`;
  }
});
