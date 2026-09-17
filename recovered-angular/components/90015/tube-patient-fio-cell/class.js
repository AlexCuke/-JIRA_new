// Extracted class; external identifiers resolve in modules/90015.js.
(class {
  constructor(je) {
    this.store = je, this.searchTerm$ = this.store.select(O.d4);
  }
  ngOnInit() {
    const {
      careCase: je
    } = this.data;
    this.fio = `${je.lastName} ${je.firstName} ${je?.secondName ?? ""}`;
  }
});
