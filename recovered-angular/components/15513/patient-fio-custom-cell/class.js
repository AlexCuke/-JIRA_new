// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.store = s, this.searchTerm$ = this.store.select(Ec.yn);
  }
  get fio() {
    return `${this.data.data.careCase.lastName} ${this.data.data.careCase.firstName} ${this.data.data.careCase?.secondName ?? ""}`;
  }
  get gender() {
    return 1 == this.data.data.careCase.genderCode ? "М" : "Ж";
  }
  get age() {
    return this.data.data.careCase.birthDate ? (0, tw.HZ)(this.data.data.careCase.birthDate) : null;
  }
});
