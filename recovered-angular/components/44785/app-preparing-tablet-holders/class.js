// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo) {
    this.store = $, this.viewContainerRef = k, this.modalHelper = ce, this.breakpointObserver = Ye, this.cdr = Tt, this.patientDataService = ai, this.pillboxService = Zi, this.messageService = Po, this.router = fo, this.isTablet = !0, this.selectedDate = new Date(), this.isTaskLoaded = !1, this.isLoading$ = this.store.select(Ke), this.searchQuery$ = this.store.select(qn), this.groupingMode$ = this.store.select(ui), this.selectedPeriod$ = this.store.select(To), this.patientDataService.refreshData(), this.navigation = this.router.getCurrentNavigation(), this.reloadTasks();
  }
  ngOnInit() {
    this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => this.isTablet = $.matches), this.store.dispatch(ti());
  }
  reloadTasks() {
    this.tasks$ = this.store.select(zn).pipe((0, m.b)($ => {
      this.isTaskLoaded = !0, this.cdr.markForCheck();
    })), this.groupedTasks$ = this.store.select(bi);
  }
  ngAfterViewInit() {
    const $ = this.preparingFilterPanel.getHeight();
    if (this.contentHeight = this.isTablet ? `calc(100% - ${$}px)` : "", this.navigation && this.navigation?.extras?.state) {
      let k = this.navigation.extras.state;
      const ce = new Date(k.slot.planningDate);
      this.preparingFilterPanel.filtersForm.get("date").patchValue(ce);
      const Ye = this.preparingFilterPanel.filtersForm.value;
      this.onFiltersChanged({
        status: [Ye.status || "all"],
        grouping: Ye.grouping,
        sorting: Ye.sorting,
        period: Ye.period,
        searchQuery: Ye.searchQuery || ""
      }), this.store.select(zn).pipe((0, Xn.t)(this), (0, M.h)(() => this.isTaskLoaded)).subscribe(Tt => {
        const Zi = {
          task: Tt.find(({
            id: Po
          }) => Po === k.patientId),
          slot: k.slot,
          action: "prepare"
        };
        this.onSlotAction(Zi), k = null;
      });
    }
    this.cdr.detectChanges();
  }
  onFiltersChanged($) {
    this.store.dispatch(Wt({
      filters: $
    }));
  }
  onDateChanged($) {
    $ ? this.selectedDate = $ : $ = this.selectedDate, this.store.dispatch(Ao({
      date: $
    }));
  }
  onHeightChanged($) {
    this.contentHeight = this.isTablet ? `calc(100% - ${$}px)` : "";
  }
  onSlotAction($) {
    const k = $.task?.id;
    if ("prepare" === $.action && k) this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, Xn.t)(this), (0, q.U)(Tt => Tt)).subscribe({
      next: Tt => {}
    });else if (!("postpone" === $.action && k || "cancel" === $.action && k || "rollback" === $.action && k)) {
      if ("utilize" !== $.action || !k) return "utilize_and_reassemble" === $.action && k ? (this.dispatchTaskStatusUpdate(k, $.slot, Re.Ae.NeedsRepackage), void this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, Xn.t)(this), (0, q.U)(Tt => Tt)).subscribe(Tt => {})) : void (("issue_medication" === $.action && k || "repack" === $.action && k) && this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, Xn.t)(this), (0, q.U)(Tt => Tt)).subscribe(Tt => {}));
      this.pillboxService.createPillboxModalData($.task, $.slot).pipe((0, Xn.t)(this), (0, ut.w)(Tt => this.pillboxService.utilizePillbox(Tt)), (0, ut.w)(Tt => (this.messageService.success("Таблетница утилизирована", {
        marginBottom: 44
      }), "utilize_and_reassemble" === Tt ? this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, q.U)(ai => ai)) : (0, qe.of)(Tt)))).subscribe();
    }
  }
  dispatchTaskStatusUpdate($, k, ce, Ye) {
    if (this.store.dispatch(Fi({
      taskId: $,
      slotId: k.id,
      newStatus: ce
    })), !k.code || !k.resultCompositionUid) return;
    const Tt = k.code,
      ai = k.resultCompositionUid;
    switch (ce) {
      case Re.Ae.Cancelled:
        this.store.dispatch(us({
          taskId: $,
          slot: k,
          code: Tt,
          resultCompositionUid: ai,
          cancelReason: Ye || "Отменено пользователем"
        }));
        break;
      case Re.Ae.Postponed:
        this.store.dispatch(Ps({
          taskId: $,
          slot: k,
          code: Tt,
          postponedReason: Ye
        }));
        break;
      case Re.Ae.Assigned:
        k.status === Re.Ae.Completed || k.status === Re.Ae.Issued ? this.store.dispatch(hs({
          taskId: $,
          slot: k,
          code: Tt
        })) : k.status === Re.Ae.Cancelled ? this.store.dispatch(oi({
          taskId: $,
          slot: k,
          code: Tt
        })) : k.status === Re.Ae.Postponed && this.store.dispatch(yo({
          taskId: $,
          slot: k,
          code: Tt
        }));
    }
    this.cdr.detectChanges();
  }
});
