// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po) {
    this.cdr = $, this.router = k, this.userContextService = ce, this.slotStatusColors = Ye, this.slotProcessor = Tt, this.timelineCalculator = ai, this.el = Zi, this.activeMedicamentsModuleService = Po, this.timeHeaderMode = "periods", this.hourlyHeaders = [], this.visibleHeaders = [], this.filterPeriod = null, this.isAdaptive = !1, this.isBaseTherapy = !1, this.mode = "issuing", this.action = new n.vpe(), this.timeLineMob = [], this.displayedPeriods = [], this.currentMenuItems = [], this.TimeSlotStatus = Re.Ae, this.currentSlotsForDropdown = [], this.selectedSlot = null, this.currentTooltipInfo = null, this.activeTimelineIndex = 0, this.activeArm = null, this.activeArm = this.activeMedicamentsModuleService.activeArm, this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe(fo => this.currentUser = {
      ...fo
    });
  }
  ngOnChanges($) {
    if ($.slots) {
      const k = this.slotProcessor.processSlots(this.slots, this.mode);
      this.slots = k.normalizedSlots, this.displayedPeriods = k.displayedPeriods, this.cdr.detectChanges();
    }
    ($.visibleHeaders || $.timeHeaderMode) && this.cdr.markForCheck(), this.timeLineMob = this.isAdaptive ? this.hourlyHeaders.map(k => {
      const ce = {
          cell: null,
          cellRangeWidth: null,
          cellShift: "0%",
          timeLineTime: k
        },
        Ye = k.split(":")[0],
        Tt = this.slots.find(Zi => "point" === Zi.displayType && Zi.status !== Re.Ae.Systematically && !!Zi.time && Ye === Zi.time.split(":")[0]),
        ai = this.slots.find(Zi => "range" === Zi.displayType && Zi.status !== Re.Ae.Systematically && !!Zi.startTime && Ye === Zi.startTime.split(":")[0]);
      if (Tt?.time) {
        const Zi = 100 * +Tt.time.split(":")[1] / 60;
        ce.cell = Tt, ce.cellShift = Zi.toFixed(1) + "%";
      }
      if (ai?.startTime && ai?.endTime) {
        const Zi = 100 * +ai.startTime.split(":")[1] / 60,
          Po = +ai.endTime.split(":")[0] - +ai.startTime.split(":")[0],
          fo = 64 * Po + 16 * (Po - 1);
        ce.cell = ai, ce.cellShift = Zi.toFixed(1) + "%", ce.cellRangeWidth = fo + "px";
      }
      return ce;
    }) : [];
  }
  get timelineConfig() {
    return {
      visibleHeaders: this.visibleHeaders,
      timeHeaderMode: this.timeHeaderMode
    };
  }
  get gridColumnsCount() {
    return this.visibleHeaders?.length || 6;
  }
  get filteredDisplayedPeriods() {
    const $ = this.normalizePeriod(this.filterPeriod);
    let k = this.displayedPeriods;
    return "pillboxes" === this.activeArm && "preparation" === this.mode && (k = this.displayedPeriods.map(ce => {
      const Ye = this.pillboxMarks.find(Tt => Tt?.dayTimePeriod?.toLowerCase() === ce.period.toLowerCase());
      return {
        period: ce.period,
        slots: ce.slots.map(Tt => Tt.period.toLowerCase() === Ye?.dayTimePeriod?.toLowerCase() ? {
          ...Tt,
          status: Ye?.status && "CREATED" !== Ye?.status ? Ye?.status : Tt.status,
          id: Ye?.id ?? Tt.id
        } : Tt)
      };
    })), $ && "ALL" !== $.toUpperCase() ? k.filter(ce => ce.period.toUpperCase() === $.toUpperCase()) : k;
  }
  get gridColumnsStyle() {
    return `repeat(${this.filteredDisplayedPeriods.length}, 64px)`;
  }
  get slotsForTimeline() {
    return this.slots.filter($ => $.status !== Re.Ae.Systematically);
  }
  get hasDailyRangeSlot() {
    return this.slotProcessor.hasDailyRangeSlot(this.slots);
  }
  getDailyRangeSlot() {
    return this.slotProcessor.getDailyRangeSlot(this.slots);
  }
  getTimelineStyle($) {
    return this.timelineCalculator.getTimelineStyle($, this.timelineConfig);
  }
  onChipHover($) {
    this.currentTooltipInfo = $ !== Re.Ae.Empty ? Gl.TOOLTIP_MAP[$] || {
      label: $?.toString() || ""
    } : null;
  }
  getMenuItems($) {
    return "issuing" === this.getCurrentPage() ? this.getIssuingMenuItems($) : this.getDefaultMenuItems($);
  }
  onRightClickMultiple($, k, ce, Ye) {
    if ($.preventDefault(), $.stopPropagation(), "injections" === this.activeArm || this.isGroupFutureLocked(Ye)) return;
    const Tt = Ye.find(Zi => !this.isSlotFutureLocked(Zi)) ?? Ye[0];
    0 !== this.getMenuItems(Tt).length && (this.selectedSlot = null, this.currentSlotsForDropdown = [Tt], k.toggle());
  }
  onLeftClickMultiple($, k, ce) {
    if ($.preventDefault(), $.stopPropagation(), ce.length > 1 && "issuing" === this.mode) return this.currentSlotsForDropdown = ce, this.selectedSlot = null, void k.open();
    this.onLeftClick($, ce[0]);
  }
  onSlotSelection($, k) {
    "injections" !== this.getCurrentPage() ? this.isSlotFutureLocked($) || 0 === this.getMenuItems($).length || (this.selectedSlot = $, k.open()) : this.emitAction("issue", $);
  }
  isSlotFutureLocked($) {
    return !(!$ || !["issuing", "injections"].includes(this.getCurrentPage())) && this.slotProcessor.isSlotFutureLocked($);
  }
  isGroupFutureLocked($) {
    return !!$?.length && $.every(k => this.isSlotFutureLocked(k));
  }
  onLeftClick($, k) {
    $.preventDefault(), $.stopPropagation();
    const ce = this.getCurrentPage();
    if ("issuing" === ce) {
      if (this.isSlotFutureLocked(k)) return;
      if (this.isBaseTherapy && k.status === Re.Ae.Completed) return void this.emitAction("cancel", k);
      if ([Re.Ae.Completed, Re.Ae.Cancelled, Re.Ae.Cancelling, Re.Ae.Editing].includes(k.status)) return;
      return void this.emitAction("issue", k);
    }
    if ("injections" === ce && [Re.Ae.Completed, Re.Ae.Cancelled, Re.Ae.Executing].includes(k.status)) return void this.emitAction("issue", k);
    const Ye = Fl[k.status];
    Ye?.primaryAction && this.emitAction(Ye.primaryAction, k);
  }
  onRightClick($, k, ce, Ye) {
    $.preventDefault(), $.stopPropagation(), "injections" !== this.activeArm && !this.isSlotFutureLocked(Ye) && (this.currentMenuItems = this.getMenuItems(Ye), this.currentMenuItems.length > 0 && k.toggle());
  }
  onMenuItemClick($, k) {
    $.action(), k.close();
  }
  getStatusClass($) {
    return $.toLowerCase().replace(/_/g, "-");
  }
  calculateProgress($) {
    if (!$?.label) return 0;
    const k = $.label.match(/(\d+)\s*\/\s*max\s*(\d+)/i);
    if (!k) return 0;
    const ce = parseInt(k[1], 10),
      Ye = parseInt(k[2], 10);
    return Ye > 0 ? Math.min(ce / Ye * 100, 100) : 0;
  }
  isPartiallyCompleted($) {
    if (!$ || $.length < 2) return !1;
    const k = $.some(Ye => Ye.status === Re.Ae.Completed),
      ce = $.some(Ye => Ye.status !== Re.Ae.Completed);
    return k && ce;
  }
  allSlotsHaveSameStatus($) {
    if (!$ || 0 === $.length) return !0;
    const k = $[0].status;
    return $.every(ce => ce.status === k);
  }
  getGridSlotClass($) {
    if (!$?.slots?.length) return "";
    const k = $.slots;
    return 1 === k.length || this.allSlotsHaveSameStatus(k) ? this.getStatusClass(k[0].status) : "multi-grid-slot";
  }
  hasMultipleSegments($) {
    return !!$?.slots?.length && $.slots.length > 1 && !this.allSlotsHaveSameStatus($.slots);
  }
  getSlotSegments($) {
    return $?.slots?.length ? $.slots.map(k => ({
      status: k.status,
      cssClass: this.getStatusClass(k.status),
      slot: k
    })) : [];
  }
  toggleDropdown($, k) {
    this.currentMenuItems = $.flatMap(ce => Fl[ce.status]?.menuItems.map(Tt => ({
      label: Tt.label,
      icon: Tt.icon,
      action: () => this.emitAction(Tt.action, ce)
    })) ?? []), k.toggle();
  }
  trackBySlot($, k) {
    return k.id ?? k.code ?? $;
  }
  trackByPeriodGroup($, k) {
    return k.period;
  }
  trackByMenuItem($, k) {
    return k.label;
  }
  trackBySegment($, k) {
    return `${$}-${k.status}`;
  }
  trackByTimelineMob($, k) {
    return k.timeLineTime;
  }
  normalizePeriod($) {
    if (null == $) return null;
    if ("string" == typeof $) return $;
    if (Array.isArray($) && $.length > 0) return "string" == typeof $[0] ? $[0] : null;
    if ("object" == typeof $ && "value" in $) {
      const k = $.value;
      return "string" == typeof k ? k : null;
    }
    return null;
  }
  get dropdownPosition() {
    const $ = this.el.nativeElement.getBoundingClientRect(),
      k = window.innerHeight;
    return Math.round($.bottom) + 100 >= Math.round(k) ? ["top-left"] : ["bottom-left"];
  }
  getIssuingMenuItems($) {
    const k = !!$.maxSymptomaticAmount,
      ce = +$?.label?.split("/")[0],
      Ye = {
        label: "Выполнить",
        icon: "mark-done",
        iconSize: 24,
        action: () => this.emitAction("issue", $)
      },
      Tt = {
        label: "Отменить выполнение",
        icon: "close",
        iconSize: 24,
        action: () => this.emitAction("cancel", $)
      },
      ai = {
        label: "Подготовить таблетницу",
        icon: "pill",
        iconSize: 24,
        action: () => this.emitAction("issuing_prepare", $)
      };
    return $.status === Re.Ae.Completed ? [Tt] : Gl.NO_ACTION_STATUSES.includes($.status) ? [] : k && ce ? ce < $.maxSymptomaticAmount ? [Ye, Tt] : [Tt] : !this.currentUser.rightCodes.includes("NURSE_PILLBOXES") || k || this.isBaseTherapy ? [Ye] : [ai, Ye];
  }
  getDefaultMenuItems($) {
    const k = Fl[$.status];
    return k?.menuItems ? k.menuItems.filter(ce => ce?.label && ce.action).map(ce => ({
      label: ce.label,
      icon: ce.icon,
      iconSize: ce.iconSize,
      destructive: ce.destructive,
      action: () => this.emitAction(ce.action, $)
    })) : [];
  }
  getCurrentPage() {
    const $ = this.router.url;
    return $.includes("injections") ? "injections" : $.includes("issuing") ? "issuing" : $.includes("preparation") ? "preparation" : "other";
  }
  emitAction($, k) {
    this.action.emit({
      action: $,
      slot: k
    });
  }
  onTimelineItemClick($) {
    this.activeTimelineIndex = $;
  }
});
