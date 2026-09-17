// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs) {
    this.store = $, this.router = k, this.viewContainerRef = ce, this.modalHelper = Ye, this.breakpointObserver = Tt, this.cdr = ai, this.uidService = Zi, this.messageService = Po, this.careCaseService = fo, this.dispensingService = Wr, this.activeMedicamentsModuleService = Cs, this.scanner = (0, n.f3M)(Yt.w), this.isPreparationTab = !1, this.isTablet = !1, this.currentValue = 0, this.totalValue = 0, this.searchValue = "", this.isScannerVisible = !1, this.isSearchVisible = !1, this.newItemsCount = 0, this.isFutureDate = !1, this.showNewItemsNotification = !1, this.isTabletSearchOpen = !1, this.isSuccessSearch = !1, this.activeArm = null, this.RightCode = uo.eT, this.scanner.manageScanner$.pipe((0, Xn.t)(this)).subscribe(ia => {
      "start" === ia ? this.scanner.start() : "stop" === ia && this.scanner.stop();
    });
  }
  ngOnInit() {
    this._configureScanner(), this.activeArm = this.activeMedicamentsModuleService.activeArm, this.store.select(qo.S8).pipe((0, Xn.t)(this)).subscribe(ce => {
      this.currentUser = (0, ji.yE)(ho, ce);
    }), this.patients$ = this.store.select(le.NA), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe(ce => {
      this.isTablet = ce.matches, this.cdr.markForCheck();
    }), (0, jo.a)([this.store.select(le.M1), this.store.select(le._Z)]).pipe((0, Xn.t)(this)).subscribe(([ce, Ye]) => {
      this.totalValue = ce, this.currentValue = Ye, this.cdr.markForCheck();
    });
    const k = this.router.parseUrl(this.router.url).queryParams.search;
    k && (this.searchValue = k, this.isSearchVisible = !0, this.dispatchSearch(k, !0)), (0, jo.a)([this.store.select(le.cD), this.store.select(je)]).pipe((0, Xn.t)(this)).subscribe(([ce, Ye]) => {
      this.newItemsCount = this.isOnPreparationTab() ? Ye : ce, this.cdr.markForCheck();
    }), this.isPreparationTab = this.router.url.includes("/preparation"), this.router.events.pipe((0, M.h)(ce => ce instanceof a.m2), (0, Xn.t)(this)).subscribe(() => {
      this.isPreparationTab = this.router.url.includes("/preparation");
    }), this.store.select(le.mj).pipe((0, Xn.t)(this)).subscribe(ce => {
      if (ce?.date) {
        const Ye = Fs.toDateKey(new Date(ce.date));
        this.isFutureDate = Fs.isFutureDate(Ye);
      } else this.isFutureDate = !1;
      this.cdr.markForCheck();
    });
  }
  get newItemsCountInterpretation() {
    const $ = this.newItemsCount,
      k = $ % 100,
      ce = $ % 10;
    return 1 === ce && 11 !== k ? "новое назначение" : ce >= 2 && ce <= 4 && (k < 12 || k > 14) ? "новых назначения" : "новых назначений";
  }
  onSearchChange($) {
    this.searchValue = $, this.dispatchSearch($);
  }
  dispatchSearch($, k = !1) {
    this.isOnPreparationTab() ? (this.store.dispatch(Wt({
      filters: {
        searchQuery: $ || ""
      }
    })), this.store.dispatch(Oi({
      searchQuery: $ || ""
    }))) : this.store.dispatch(E({
      filters: {
        search: $ || null
      }
    })), k || this.updateSearchQueryParam($), this.cdr.markForCheck();
  }
  updateSearchQueryParam($) {
    this.router.navigate([], {
      queryParams: $ ? {
        search: $
      } : {
        search: null
      },
      queryParamsHandling: "merge",
      replaceUrl: !0
    });
  }
  isOnPreparationTab() {
    return this.router.url.includes("/preparation");
  }
  isPillboxId($) {
    return !(!$ || $.length < 1) && /^\d+$/.test($.trim());
  }
  tryHandlePillboxScan($) {
    const k = parseInt($.trim(), 10);
    this.store.select(Me).pipe((0, st.q)(1), (0, q.U)(ce => ce.find(Ye => Ye.id === k))).subscribe(ce => {
      ce && this.findNearestAssignedSlot(ce) ? (this.searchValue = "", this.cdr.markForCheck(), this.modalHelper.openWritingOffDialog(ce.id, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe()) : this.dispatchSearch($);
    });
  }
  getCurrentPeriod() {
    const k = new Date().getHours();
    return k >= 6 && k < 12 ? "MORNING" : k >= 12 && k < 18 ? "DAY" : k >= 18 && k < 22 ? "EVENING" : "NIGHT";
  }
  findNearestAssignedSlot($) {
    if (!$.slots?.length) return null;
    const k = $.slots.filter(Zi => Zi.status === Re.Ae.Assigned);
    if (0 === k.length) return null;
    const ce = ["MORNING", "DAY", "EVENING", "NIGHT"],
      Ye = this.getCurrentPeriod(),
      Tt = ce.indexOf(Ye),
      ai = {};
    for (let Zi = 0; Zi < ce.length; Zi++) ai[ce[(Tt + Zi) % ce.length]] = Zi;
    return k.sort((Zi, Po) => (Zi.period ? ai[Zi.period] ?? 99 : 99) - (Po.period ? ai[Po.period] ?? 99 : 99)), k[0];
  }
  _configureScanner() {
    this.scanner.start({
      maxGapMs: 80,
      maxAverageGapMs: 35,
      idleFinishMs: 120,
      ignoreEditableTargets: !0
    }), this.scanner.scan$.pipe((0, Xn.t)(this), (0, ut.w)(({
      value: $
    }) => this.uidService.getUid($)), (0, Go.K)($ => (this.messageService.error("Не удалось найти пациента."), console.error("scan error", $?.message, $), (0, qe.of)(null))), (0, M.h)($ => !!$), (0, ut.w)($ => this.careCaseService.getCareCaseQuery($.data_object.ehr_case_id)), (0, q.U)($ => {
      const {
        firstName: k,
        lastName: ce
      } = $.patient.name;
      return `${ce} ${k} ${$.patient.name?.secondName ?? ""}`;
    }), (0, Go.K)($ => (this.messageService.error("Не удалось найти пациента."), console.error("search error", $?.message, $), (0, qe.of)([])))).subscribe($ => {
      this.searchValue = $, this.isSearchVisible = !0, this.dispatchSearch($, !1);
    });
  }
  clearSearch() {
    this.searchValue && (this.searchValue = "", this.onSearchChange(""));
  }
  toggleSearchInput($) {
    this.isSearchVisible = $, $ || (this.searchValue = "", this.dispatchSearch(""));
  }
  openQrScanner() {
    this.isScannerVisible = !0;
  }
  closeQrScanner() {
    this.isScannerVisible = !1;
  }
  refreshData() {
    this.isOnPreparationTab() ? this.store.dispatch(ti()) : this.store.dispatch(N());
  }
  confirmNewItems() {
    0 !== this.newItemsCount && (this.isOnPreparationTab() ? this.store.dispatch(_s()) : this.store.dispatch(te()), this.newItemsCount = 0, this.showNewItemsNotification = !1);
  }
  onTabletSearchToggle($) {
    this.isTabletSearchOpen = $, $ || (this.isSuccessSearch = !1);
  }
  onCloseSearch($) {
    this.isTabletSearchOpen = $, $ || (this.isSuccessSearch = !1);
  }
  onSuccesToggleSearch($) {
    this.isSuccessSearch = $;
  }
  onSearchWidget($) {
    this.onSearchChange($);
  }
});
