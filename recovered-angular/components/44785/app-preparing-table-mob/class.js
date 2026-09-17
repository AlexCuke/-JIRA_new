// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce) {
    this.viewContainerRef = $, this.modalHelper = k, this.pillboxService = ce, this.tasks = null, this.selectedPeriod = null, this.searchQuery = null, this.slotAction = new n.vpe(), this.periodObj = {
      morning: "Утро",
      day: "День",
      evening: "Вечер",
      night: "Ночь"
    }, this.PERIOD_ORDER = ["MORNING", "DAY", "EVENING", "NIGHT"];
  }
  get periodLabel() {
    return this.selectedPeriod && "all" !== this.selectedPeriod ? this.periodObj[this.selectedPeriod.toLowerCase()] ?? null : null;
  }
  getPeriodLabel($) {
    return $ ? this.periodObj[$.toLowerCase()] : "";
  }
  getUniquePeriods($) {
    return (0, Io.uniqBy)($, "period").sort((k, ce) => this.PERIOD_ORDER.indexOf(k.period) - this.PERIOD_ORDER.indexOf(ce.period));
  }
  onSlotAction($, k) {
    "issue" === k.action ? this.openPillboxIssueModal($, k.slot) : this.slotAction.emit({
      task: $,
      slot: k.slot,
      action: k.action
    });
  }
  openPillboxIssueModal($, k) {
    const ce = Zi => k.planningDate && Zi.planningDate && k.period === Zi.period && (0, Ft.O)(k.planningDate) === (0, Ft.O)(Zi.planningDate);
    ($.medicines || []).map(Zi => {
      const Po = Zi.slots.filter(fo => ce(fo) && "COMPLETED" !== fo.status);
      return {
        ...Zi,
        slots: Po
      };
    }).filter(Zi => Zi.slots && Zi.slots.length);
    ($.otherMedicines || []).map(Zi => {
      const Po = Zi.slots.filter(fo => ce(fo) && "COMPLETED" !== fo.status);
      return {
        ...Zi,
        slots: Po
      };
    }).filter(Zi => Zi.slots && Zi.slots.length), $.birthDate && new Date($.birthDate), $.pillbox.pillboxMarks.filter(Zi => Zi.dayTimePeriod.toLowerCase() === k?.period.toLowerCase()), this.pillboxService.createPillboxModalData($, k).pipe((0, Xn.t)(this), (0, ut.w)(Zi => this.modalHelper.openPillboxIssueDialogMob(Zi, this.viewContainerRef))).subscribe(Zi => {
      this.slotAction.emit({
        task: $,
        slot: k,
        action: "issued"
      });
    });
  }
  trackByTask($, k) {
    return k.id;
  }
});
