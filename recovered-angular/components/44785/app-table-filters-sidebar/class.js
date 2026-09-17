// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($) {
    this.breakpointObserver = $, this.doctors = [], this.administrationMethods = [], this.paymentTypes = [], this.closeClicked = new n.vpe(), this.filtersChanged = new n.vpe(), this.filterCountEvent = new n.vpe(), this.isTablet = !1, this.dropdowns = {
      method: !1,
      payment: !1,
      doctor: !1
    }, this.destroy$ = new d.x(), this.doctorSearch = "";
    const k = this.getDefaultValues();
    this.filtersForm = new vr.cw({
      date: new vr.NI(k.date),
      department: new vr.NI(k.department),
      cardNumber: new vr.NI(k.cardNumber),
      administrationMethod: new vr.NI(k.administrationMethod),
      paymentType: new vr.NI(k.paymentType),
      reasons: new vr.cw({
        basicTherapy: new vr.NI(k.reasons.basicTherapy),
        onHand: new vr.NI(k.reasons.onHand),
        vaccination: new vr.NI(k.reasons.vaccination)
      }),
      doctorName: new vr.NI(k.doctorName)
    });
  }
  ngOnInit() {
    this.breakpointObserver.observe(ri.ok).pipe((0, b.R)(this.destroy$)).subscribe($ => this.isTablet = $.matches);
  }
  ngOnDestroy() {
    this.onClear(), this.destroy$.next(), this.destroy$.complete();
  }
  ngOnChanges($) {
    if ((0, ri.up)($.filters)) {
      const k = {
        ...this.filters
      };
      !k.date && this.filtersForm.get("date")?.value && (k.date = this.filtersForm.get("date")?.value), this.filtersForm.patchValue(k);
    }
  }
  get hasActiveFilters() {
    const $ = this.filtersForm.value,
      k = this.getDefaultValues(),
      ce = $.date && k.date && new Date($.date).toDateString() !== new Date(k.date).toDateString();
    return !!($.cardNumber || ce || $.administrationMethod || $.paymentType || $.doctorName || $.reasons?.basicTherapy || $.reasons?.onHand || $.reasons?.vaccination);
  }
  onCloseClick() {
    this.closeClicked.emit();
  }
  onSave() {
    this.filtersChanged.emit(this.filtersForm.value);
  }
  onClear() {
    const $ = this.getDefaultValues();
    this.filtersForm.reset($), this.filtersChanged.emit(this.filtersForm.value);
  }
  getDefaultValues() {
    return {
      date: new Date(),
      department: null,
      cardNumber: "",
      administrationMethod: null,
      paymentType: null,
      reasons: {
        basicTherapy: !1,
        onHand: !1,
        vaccination: !1
      },
      doctorName: null
    };
  }
  toggleDropdown($) {
    Object.keys(this.dropdowns).forEach(k => {
      this.dropdowns[k] = !1;
    }), this.dropdowns[$] = !this.dropdowns[$], "doctor" === $ && this.dropdowns[$] && setTimeout(() => {
      this.doctorSearchInput?.nativeElement.focus();
    });
  }
  closeDropdown($) {
    this.dropdowns[$] = !1;
  }
  selectValue($, k, ce) {
    this.filtersForm.get($)?.setValue(k), "doctor" === ce && (this.doctorSearch = ""), this.closeDropdown(ce);
  }
  get filteredDoctors() {
    const $ = this.doctorSearch.toLowerCase().trim();
    return $ ? this.doctors.filter(k => k.toLowerCase().includes($)) : this.doctors;
  }
});
