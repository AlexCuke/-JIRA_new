// Extracted class; external identifiers resolve in modules/64545.js.
(class {
  constructor(B) {
    this.sharedDataService = B, this.searchVisibleChange = new e.vpe(), this.searchSuccess = new e.vpe(), this.searchFillRes = new e.vpe(), this.isSearchVisible = !1, this.searchValue = "", this.isScannerDisabled = !1, this.isManualSearch = !1, this.searchWidgetParams = {
      header: null,
      subHeader: "Отсканируйте QR-код пациента или введите его данные",
      isSearchAllowed: !0,
      mode: "patient",
      searchPlaceholder: "ФИО пациента или номер карты"
    };
  }
  ngOnInit() {}
  ngOnChanges() {
    this.searchFill && (this.searchWidgetParams.header = this.searchFill);
  }
  toggleSearchInput(B) {
    this.isSearchVisible = B, this.isManualSearch = !1, B ? this.isScannerDisabled = !1 : (this.searchValue = "", this.sharedDataService.setSearch(""), this.isScannerDisabled = !0), this.searchVisibleChange.emit(this.isSearchVisible), this.searchFillRes.emit("");
  }
  resetSearch() {
    this.isSearchVisible = !1, this.isManualSearch = !1, this.isScannerDisabled = !0, this.searchValue = "", this.sharedDataService.setSearch(""), this.searchVisibleChange.emit(!1), this.searchFillRes.emit("");
  }
  clearSearch() {
    this.isSearchVisible = !1, this.searchValue = "";
  }
  onSearchChange(B) {
    this.searchValue = B;
  }
  onSearch(B) {
    this.sharedDataService.setSearch(B), this.searchSuccess.emit(!0), this.searchFillRes.emit(B), this.isScannerDisabled = !0, this.isManualSearch = !!B;
  }
  onPatientLoaded(B) {
    if (this.patientDataObj = B, B?.patient?.name) {
      const {
        lastName: y,
        firstName: j,
        secondName: W
      } = B.patient.name;
      this.searchValue = [y, j, W].filter(Boolean).join(" "), this.sharedDataService.setSearch(this.searchValue), this.searchSuccess.emit(!0), this.isScannerDisabled = !0;
    } else this.searchValue = "";
  }
  onFioSearchFromScanner(B) {
    this.searchValue = B, this.onSearch(B);
  }
  onCloseSearch(B) {
    this.toggleSearchInput(B);
  }
});
