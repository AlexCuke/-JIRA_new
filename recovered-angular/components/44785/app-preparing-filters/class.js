// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce) {
    this.store = $, this.breakpointObserver = k, this.cdr = ce, this.filtersChanged = new n.vpe(), this.dateChanged = new n.vpe(), this.heightChanged = new n.vpe(), this.isTablet = !1, this.statusSelectedLabel = "Все", this.statusSelectedCount = 0, this.statusOptions = [{
      value: "all",
      label: "Все",
      count: 0
    }, {
      value: "active",
      label: "Активные",
      count: 0
    }, {
      value: "missed",
      label: "Пропущенные выдачи",
      count: 0
    }, {
      value: "completed",
      label: "Завершенные",
      count: 0
    }], this.periodOptions = [{
      value: "all",
      label: "Все"
    }, {
      value: "MORNING",
      label: "Утро"
    }, {
      value: "DAY",
      label: "День"
    }, {
      value: "EVENING",
      label: "Вечер"
    }, {
      value: "NIGHT",
      label: "Ночь"
    }], this.groupingOptions = [{
      value: "byPatient",
      label: "По пациентам"
    }, {
      value: "byMedicament",
      label: "По медикаментам"
    }], this.filtersForm = new vr.cw({
      date: new vr.NI(new Date()),
      status: new vr.NI("all"),
      grouping: new vr.NI("byPatient"),
      sorting: new vr.NI("byTimeOfDay"),
      period: new vr.NI("all"),
      searchQuery: new vr.NI("")
    }), this.statusCounts$ = this.store.select(Mn), this.selectedDate$ = this.store.select(Ee);
  }
  ngOnInit() {
    this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
      this.isTablet = $.matches, this.periodOptions[0].label = this.isTablet ? "Все времена суток" : "Все", this.cdr.markForCheck();
    }), this.selectedDate$.pipe((0, Xn.t)(this)).subscribe($ => {
      $ && this.filtersForm.get("date")?.value?.getTime() !== $.getTime() && this.filtersForm.patchValue({
        date: $
      }, {
        emitEvent: !1
      });
    }), this.statusCounts$.pipe((0, Xn.t)(this)).subscribe($ => {
      this.statusOptions = [{
        value: "all",
        label: "Все",
        count: $.all
      }, {
        value: "active",
        label: "Активные",
        count: $.active
      }, {
        value: "missed",
        label: "Пропущенные выдачи",
        count: $.missed
      }, {
        value: "completed",
        label: "Завершенные",
        count: $.completed
      }], this.updateSelectedStatusLabel(), this.cdr.markForCheck();
    }), this.filtersForm.get("date")?.valueChanges.pipe((0, Xn.t)(this), (0, Ug.x)(($, k) => $?.getTime() === k?.getTime())).subscribe($ => {
      $ && this.dateChanged.emit($);
    }), this.filtersForm.valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
      this.filtersChanged.emit({
        status: [$.status || "all"],
        grouping: $.grouping,
        sorting: $.sorting,
        period: $.period,
        searchQuery: $.searchQuery || ""
      }), setTimeout(() => {
        this.heightChanged.emit(this.getHeight());
      }), this.updateSelectedStatusLabel(), this.cdr.markForCheck();
    });
  }
  get periodControl() {
    return this.filtersForm.get("period");
  }
  getHeight() {
    return this.panelRef.nativeElement.clientHeight;
  }
  trackByOptionValue($, k) {
    return k.value;
  }
  isStatusSelected($) {
    return this.filtersForm.value.status === $;
  }
  onStatusToggle($, k) {
    this.filtersForm.patchValue({
      status: $
    }), k && k.close();
  }
  getPeriodLabel($) {
    if (!$) return "";
    const k = this.periodOptions.find(ce => ce.value === $);
    return k ? k.label : $;
  }
  updateSelectedStatusLabel() {
    const $ = this.filtersForm.value.status || "all",
      k = this.statusOptions.find(ce => ce.value === $);
    k && (this.statusSelectedCount = k.count, this.statusSelectedLabel = k.label);
  }
});
