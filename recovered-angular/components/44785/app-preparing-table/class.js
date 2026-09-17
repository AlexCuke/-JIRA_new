// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  get timeColumnWidthCss() {
    return this.periodLabel ? "126px" : "362px";
  }
  constructor($, k, ce) {
    this.viewContainerRef = $, this.modalHelper = k, this.pillboxService = ce, this.tasks = null, this.groupedTasks = null, this.groupingMode = "byPatient", this.timeHeaderMode = "periods", this.hourlyHeaders = [], this.selectedPeriod = null, this.slotAction = new n.vpe(), this.cdr = (0, n.f3M)(n.sBO), this.loadingFlag = !1, this.hasMoreData = !0, this.visibleTasks = [], this.expandedGroups = {}, this.onLoadMoreTasks = () => {
      if (!this.tasks || this.loadingFlag) return;
      const Ye = this.visibleTasks.length;
      if (Ye >= this.tasks.length) return void (this.hasMoreData = !1);
      this.loadingFlag = !0;
      const Tt = this.tasks.slice(Ye, Ye + 15);
      this.visibleTasks = [...this.visibleTasks, ...Tt], this.hasMoreData = this.visibleTasks.length < this.tasks.length, this.loadingFlag = !1, this.cdr.markForCheck();
    }, this.heightChanged$ = (0, De.R)(window, "resize").pipe((0, rt.O)(window.innerWidth), (0, Yd.b)(200), (0, q.U)(() => ({
      height: window.innerWidth > 1250 ? "calc(100vh - 220px)" : "calc(100vh - 270px)"
    })));
  }
  ngOnChanges($) {
    (0, ri.up)($.tasks) && (this.visibleTasks = [], this.onLoadMoreTasks(), this.reloadVisibleTaskStatus());
  }
  get periodLabel() {
    const $ = this.normalizePeriod(this.selectedPeriod);
    return $ && "ALL" !== $.toUpperCase() ? {
      MORNING: "Утро",
      DAY: "День",
      EVENING: "Вечер",
      NIGHT: "Ночь"
    }[$.toUpperCase()] ?? null : null;
  }
  toggleGroup($) {
    this.expandedGroups[$] = !this.expandedGroups[$];
  }
  isGroupExpanded($) {
    return !1 !== this.expandedGroups[$];
  }
  onSlotAction($, k) {
    "issue" === k.action ? this.openPillboxIssueModal($, k.slot) : this.slotAction.emit({
      task: $,
      slot: k.slot,
      action: k.action
    });
  }
  openPillboxIssueModal($, k) {
    this.pillboxService.createPillboxModalData($, k).pipe((0, Xn.t)(this), (0, ut.w)(ce => this.modalHelper.openPillboxIssueDialog(ce, this.viewContainerRef))).subscribe(ce => {
      this.slotAction.emit({
        task: $,
        slot: k,
        action: "issued"
      });
    });
  }
  openLabelModal($) {
    this.modalHelper.openLabelPrintDialog({
      barcode: String($?.pillbox?.number),
      careCaseId: $?.careCaseId,
      fio: $.patientName,
      card: $.historyNumber,
      room: $.ward
    }, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
  }
  trackByGroup($, k) {
    return k.groupKey;
  }
  trackByTask($, k) {
    return k.id;
  }
  reloadVisibleTaskStatus() {
    this.visibleTasks = this.visibleTasks.map($ => {
      const k = this.tasks.find(ce => ce.id === $.id)?.slots;
      return {
        ...$,
        slots: k
      };
    }), this.cdr.markForCheck();
  }
  normalizePeriod($) {
    if (null == $) return null;
    if ("string" == typeof $) return $;
    if (Array.isArray($) && $.length > 0) return "string" == typeof $[0] ? $[0] : null;
    if ("object" == typeof $ && $ && "value" in $) {
      const k = $.value;
      return "string" == typeof k ? k : null;
    }
    return null;
  }
});
