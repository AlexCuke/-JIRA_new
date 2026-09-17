// Extracted class; external identifiers resolve in modules/71397.js.
(class {
  constructor() {
    this.rowsSort = new t.vpe(), this.sortMap = [{
      name: "patientFio",
      label: "ФИО пациента",
      direction: "asc"
    }, {
      name: "wardSort",
      label: "Палата",
      direction: "desc"
    }, {
      name: "news2",
      label: "NEWS2",
      direction: "desc"
    }], this.sortValue = this.sortMap[1];
  }
  ngOnInit() {
    this.sortValue = this.activeSortMap[0];
  }
  sortHandler() {
    this.rowsSort.emit({
      field: this.sortValue.name,
      direction: this.sortValue.direction
    });
  }
  compareSort(f, E) {
    return f?.name === E?.name;
  }
  displaySort(f) {
    return f ? f.label : "";
  }
  get activeSortMap() {
    return this.customSortParams?.length ? this.customSortParams : this.sortMap;
  }
});
