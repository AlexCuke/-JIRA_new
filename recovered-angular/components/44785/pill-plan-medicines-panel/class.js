// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt) {
    this.breakpointObserver = $, this.cdr = k, this.filterStateService = ce, this.store = Ye, this.activeMedicamentsModuleService = Tt, this.filtersChanged = new n.vpe(), this.slotProcessor = (0, n.f3M)(gi), this.isTablet = !1, this.isCompactMode = !1, this.statusOptions = [{
      value: "all",
      label: "Все",
      count: 0
    }, {
      value: "symptomatic",
      label: "Симптоматические",
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
    }], this.statusSelectedLabel = "Все", this.statusSelectedCount = 0, this.groupingOptions = [{
      value: "byPatient",
      label: "По пациентам"
    }, {
      value: "byMedicament",
      label: "По медикаментам"
    }], this.sortingOptions = [{
      value: "byTimeOfDay",
      label: "По времени суток"
    }, {
      value: "byHour",
      label: "По часам"
    }], this.periodOptions = [{
      value: "all",
      label: "Все"
    }, {
      value: "morning",
      label: "Утро"
    }, {
      value: "day",
      label: "День"
    }, {
      value: "evening",
      label: "Вечер"
    }, {
      value: "night",
      label: "Ночь"
    }], this.filtersForm = new vr.cw({
      status: new vr.Oe([]),
      grouping: new vr.NI("byPatient"),
      sorting: new vr.NI("byTimeOfDay"),
      ward: new vr.NI("all"),
      period: new vr.NI("all"),
      search: new vr.NI(null)
    }), this.stateFilters = {}, this.isPillbox = !1, this.isPillbox = "pillboxes" === this.activeMedicamentsModuleService.activeArm;
  }
  ngOnInit() {
    this.statusArray.push(new vr.NI("all")), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe(Tt => {
      this.isTablet = Tt.matches, this.periodOptions[0].label = this.isTablet ? "Все времена суток" : "Все", this.cdr.markForCheck();
    }), this.filterStateService.filterOpen$.pipe((0, Xn.t)(this), function Cd(Te) {
      return (0, vp.e)(($, k) => {
        let ce = !1,
          Ye = null,
          Tt = null;
        const ai = () => {
          if (Tt?.unsubscribe(), Tt = null, ce) {
            ce = !1;
            const Zi = Ye;
            Ye = null, k.next(Zi);
          }
        };
        $.subscribe(new ep.Q(k, Zi => {
          Tt?.unsubscribe(), ce = !0, Ye = Zi, Tt = new ep.Q(k, ai, Cc.Z), (0, Np.Xf)(Te(Zi)).subscribe(Tt);
        }, () => {
          ai(), k.complete();
        }, void 0, () => {
          Ye = Tt = null;
        }));
      });
    }(Tt => Tt ? (0, qe.of)(Tt) : (0, yd.H)(350))).subscribe(Tt => {
      this.isCompactMode = Tt, this.cdr.markForCheck();
    }), this.wards$ = this.store.select(le.kT), this.hasUnplacedPatients$ = this.store.select(le.NZ).pipe((0, q.U)(Tt => (Tt ?? []).some(ai => !ai.ward || "Не размещен" === String(ai.ward))));
    const $ = [Re.Ai.Assigned, Re.vd.Prepared, Re.Ai.Editing, Re.vd.Systematically],
      k = [Re.vd.MissedAssigned, Re.vd.MissedPrepared],
      Ye = Tt => {
        const ai = Tt.status;
        if ("SYSTEMATICALLY" === ai || "ASSIGNED" !== ai && "PREPARED" !== ai) return ai;
        const Zi = "ASSIGNED" === ai ? "MISSED_ASSIGNED" : "MISSED_PREPARED",
          Po = "ASSIGNED" === ai ? "FUTURE_ASSIGNED" : "FUTURE_PREPARED";
        if (this.slotProcessor.isSlotFutureLocked(Tt)) return Po;
        if (Tt.planningDate) {
          const fo = new Date(),
            Wr = (0, Ft.H)(fo),
            Cs = (0, Ft.O)(Tt.planningDate);
          if (Cs < Wr) return Zi;
          if (Cs > Wr) return ai;
          if ((0, Ct.a2)(Tt, fo)) return Zi;
        }
        return ai;
      };
    this.store.select(le.Fv).pipe((0, Xn.t)(this)).subscribe(Tt => {
      const ai = {
        symptomatic: 0,
        active: 0,
        missed: 0,
        completed: 0
      };
      let Zi = 0;
      Tt && Tt.forEach(Po => {
        Po.medicines.forEach(fo => {
          const Wr = fo.frequency?.toLowerCase().includes("симптоматически") ?? !1;
          Zi += fo.slots.length, fo.slots.forEach(Cs => {
            Wr && ai.symptomatic++;
            const ia = Ye(Cs);
            $.includes(ia) ? ai.active++ : k.includes(ia) ? ai.missed++ : "COMPLETED" === ia && ai.completed++;
          });
        });
      }), this.statusOptions = [{
        value: "all",
        label: "Все",
        count: Zi
      }, {
        value: "symptomatic",
        label: "Симптоматические",
        count: ai.symptomatic
      }, {
        value: "active",
        label: "Активные",
        count: ai.active
      }, {
        value: "missed",
        label: "Пропущенные выдачи",
        count: ai.missed
      }, {
        value: "completed",
        label: "Завершенные",
        count: ai.completed
      }], this.updateSelectedStatusLabel(), this.cdr.markForCheck();
    }), this.filtersForm.get("grouping").valueChanges.pipe((0, Xn.t)(this)).subscribe(Tt => {
      "byWard" !== Tt && this.wardControl.setValue("all", {
        emitEvent: !1
      });
    }), this.store.select(le.mj).pipe((0, Xn.t)(this)).subscribe(Tt => this.stateFilters = Tt), this.filtersForm.valueChanges.pipe((0, Yd.b)(150), (0, Xn.t)(this)).subscribe(Tt => {
      const ai = {
        status: 0 === Tt.status.length ? ["all"] : Tt.status,
        grouping: Tt.grouping ?? null,
        sorting: Tt.sorting ?? null,
        ward: "all" === Tt.ward ? null : String(Tt.ward),
        period: "all" === Tt.period ? null : Tt.period,
        search: Tt.search ?? this.stateFilters?.search ?? null
      };
      this.filtersChanged.emit(ai), this.updateSelectedStatusLabel(), this.cdr.detectChanges();
    });
  }
  get statusArray() {
    return this.filtersForm.get("status");
  }
  get wardControl() {
    return this.filtersForm.get("ward");
  }
  get periodControl() {
    return this.filtersForm.get("period");
  }
  getHeight() {
    return this.panelRef.nativeElement.clientHeight;
  }
  getWardLabel($) {
    return "all" === $ ? "Все палаты" : $;
  }
  getPeriodLabel($) {
    if (!$) return "";
    const k = this.periodOptions.find(ce => ce.value === $);
    return k ? k.label : $;
  }
  onStatusToggle($) {
    this.statusArray.clear(), this.statusArray.push(new vr.NI($));
  }
  isStatusSelected($) {
    return this.statusArray.controls.some(k => k.value === $);
  }
  trackByOptionValue($, k) {
    return k.value;
  }
  trackByWard($, k) {
    return k;
  }
  wardFilterHandler($, k) {
    this.wardControl.setValue(k);
  }
  updateSelectedStatusLabel() {
    const $ = this.filtersForm.value.status?.[0] || "all",
      k = this.statusOptions.find(ce => ce.value === $);
    k && (this.statusSelectedCount = k.count, this.statusSelectedLabel = k.label);
  }
});
