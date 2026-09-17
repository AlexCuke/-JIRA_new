// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye) {
    this.patientDataService = $, this.router = k, this.filterStateService = ce, this.store = Ye, this.doctors$ = this.store.select(le.sc), this.administrationMethods$ = this.store.select(le.Ku), this.paymentTypes$ = this.store.select(le.xn), this.isPreparationTab = !1, this.filterCount = 0, this.filters$ = this.store.select(le.mj).pipe((0, m.b)(Tt => this.filterCount = this.setFilterCounter(Tt))), this.countFilterFields = ["date", "cardNumber", "administrationMethod", "paymentType", "reasons", "doctorName"], this.destroy$ = new d.x();
  }
  ngOnInit() {
    this.checkCurrentRoute(), this.router.events.pipe((0, M.h)($ => $ instanceof a.m2), (0, b.R)(this.destroy$)).subscribe(() => {
      this.checkCurrentRoute();
    });
  }
  setFilterCounter($) {
    return $ ? Object.entries($).filter(([k, ce]) => this.countFilterFields.includes(k)).map(([k, ce]) => "date" === k && ce ? new Date(ce).toLocaleDateString() !== new Date().toLocaleDateString() ? 1 : 0 : "reasons" === k && ce ? Object.values(ce).map(Ye => +Ye).reduce((Ye, Tt) => Ye + Tt) : ce ? 1 : 0).reduce((k, ce) => k + ce, 0) : 0;
  }
  ngOnDestroy() {
    this.filterStateService.setFilterOpen(!1), this.destroy$.next(), this.destroy$.complete();
  }
  get filterOpen() {
    return this.filterStateService.isFilterOpen;
  }
  toggleFilter() {
    this.filterStateService.toggleFilter();
  }
  get isInjection() {
    return "injections" === this.router.url.split("/")[1];
  }
  onFiltersUpdate($) {
    this.store.dispatch(E({
      filters: {
        cardNumber: $.cardNumber || null,
        administrationMethod: $.administrationMethod || null,
        paymentType: $.paymentType || null,
        reasons: $.reasons || null,
        doctorName: $.doctorName || null,
        date: $.date || null
      }
    }));
  }
  checkCurrentRoute() {
    this.isPreparationTab = this.router.url.includes("/preparation"), this.isPreparationTab && this.filterOpen && this.filterStateService.setFilterOpen(!1);
  }
});
