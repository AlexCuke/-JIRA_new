// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr) {
    this.modalRef = $, this.data = k, this.messageService = ce, this.userContextService = Ye, this.reserveService = Tt, this.breakpointObserver = ai, this.cdr = Zi, this.pillboxService = Po, this.warehouseService = fo, this.compositionService = Wr, this.getStatusLabel = Re.dg, this.isTablet = !1, this.medicine = {}, this.isIssueIsStarted = !1, this.mode = "preparation", this.isStockLoaded = !1, this.medNamesId = null, this.notificationMb = 44, this.availableSlots = [], this.slotMultiply = 1, this.periodTranslations = {
      morning: "на утро",
      day: "на день",
      evening: "на вечер",
      night: "на ночь"
    }, this.selectedStockMed = null, this.mode = "context" in this.data ? this.data.context : "preparation";
    let Cs = this.data.assignedMedications?.map(ia => ({
      ...ia
    })) || [];
    "medicine" in k && k?.medicine && (this.medicine = k.medicine, Cs = Cs.filter(k.medicine.assignmentCompositionUid ? ia => ia.assignmentCompositionUid === k.medicine.assignmentCompositionUid : ia => ia.name === k.medicine.name)), this.assignedMedications = Cs, "slots" in k && k.slots && k.slots.length && (this.availableSlots = k.slots.filter(Ls => Ls.status === Re.Ae.Assigned && new Date().getTime() >= this.planningDateWithPeriodSlot(Ls)), this.slotMultiply = this.availableSlots.length);
  }
  parseOrderedDose($) {
    if (!$.orderedDose) return null;
    const ce = /^(\d+(?:\.\d+)?)\s+([a-zA-Z\u0430-\u044f\u0410-\u042f.]+)(?:\s+\[(?:\d+(?:\.\d*)?|\.\d+)\s+(.+)\])?$/.exec($.orderedDose),
      Ye = this.dispensingPanel?.selectedStockMedication;
    if (ce) {
      let Tt = $.unitOfPacking;
      return $.otnUid === Ye?.mnnId && Tt !== Ye?.fillingUnit && (Tt = Ye?.fillingUnit), {
        dosage: ce[1],
        unit: ce[2],
        quantity: ce[3],
        form: Tt
      };
    }
    return null;
  }
  getNameTabletWithDose($) {
    const k = this.parseOrderedDose($);
    return `${$.name} ${k?.form ?? ""}  ${$.dose / $.orderedAmount} ${k?.unit || "мг"}`;
  }
  calculateQuantityBySlot($) {
    return $.map(({
      amount: k
    }) => k).reduce((k, ce) => k + ce, 0);
  }
  planningDateWithPeriodSlot($) {
    if ($.dayTimePeriod) {
      const k = $.dayTimePeriod.toUpperCase(),
        ce = +gi.PERIOD_START_TIME[k].split(":")[0];
      return new Date($.planningDate).setHours(ce);
    }
    if ($.time) {
      const k = +$.time.split(":")[0];
      return new Date($.planningDate).setHours(k);
    }
    throw new Error("Не указан период (dayTimePeriod) или время выдачи (time)!");
  }
  ngOnInit() {
    this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
      this.isTablet = $.matches, this.cdr.markForCheck();
    }), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
      this.userInfo = {
        doctorName: `${$.lastName} ${$.firstName} ${$.secondName}`,
        dept: $.department?.fullName,
        deptId: $.department?.id,
        empId: $.employeeId,
        postId: $.jobTitle?.id,
        position: $.jobTitle?.name,
        snils: $.employee?.identities?.snils
      }, this.warehouses$ = this._loadWarehouses();
    });
  }
  ngAfterViewInit() {
    this.assignedMedications.length > 0 && (this.dispensingPanel.selectedAssignedMed = this.assignedMedications[0]), ["isFromDifferentBatches", "isFractional"].forEach($ => {
      this.dispensingPanel.form.get($).valueChanges.pipe((0, Xn.t)(this)).subscribe(k => {
        const ce = this.dispensingPanel.selectedAssignedMed.id;
        this.assignedMedications = this.assignedMedications.map(Ye => (Ye.id === ce && (Ye[$] = k), Ye));
      });
    }), this.dispensingPanel.form.get("stockLocation").valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
      const k = this.dispensingPanel.selectedAssignedMed.id;
      this.assignedMedications = this.assignedMedications.map(ce => (ce.id === k && $ && (ce.stockId = $.id), ce));
    });
  }
  getSelectedAmount($) {
    if ("preparation" === this.mode) {
      const k = this.dispensingPanel.preparedPillboxMedicaments.find(({
        id: ce
      }) => $.id === ce);
      return k ? $.isFractional ? k.applyPacking : this.dispensingPanel.roundAmount(k.applyPacking) : 0;
    }
    return $.isFromDifferentBatches ? this.dispensingPanel.totalSelectedTablets > $.orderedAmount * this.slotMultiply ? $.orderedAmount * this.slotMultiply : this.dispensingPanel.totalSelectedTablets : $.stockId ? $.selectedAmount : 0;
  }
  get isDisabledIssue() {
    return 0 === this.dispensingPanel?.filteredStockMedications.length || this.isIssueIsStarted || 0 === this.dispensingPanel?.form.get("quantity")?.value;
  }
  issueMedicament() {
    this.isIssueIsStarted = !0;
    const $ = this.dispensingPanel.selectedStockMedication,
      ce = this.dispensingPanel.form.get("stockLocation")?.value;
    $?.warehouseId || ce && ce.id ? this.assignedMedications && 0 !== this.assignedMedications.length ? this.data.patient?.ehrCaseId ? this.data.patient?.careCaseId ? this.dispensingPanel.issueMedicament() : this.messageService.error("Отсутствует идентификатор обращения (careCaseId)", {
      marginBottom: this.notificationMb
    }) : this.messageService.error("Отсутствует идентификатор случая (ehrCaseId)", {
      marginBottom: this.notificationMb
    }) : this.messageService.warning("Нет назначенных медикаментов.", {
      marginBottom: this.notificationMb
    }) : this.messageService.warning("Склад не выбран.", {
      marginBottom: this.notificationMb
    });
  }
  get hasAllPreparedMedications() {
    return this.assignedMedications?.every($ => "ready_dispense" === $.status) ?? !1;
  }
  get hasAnyPreparedMedications() {
    return this.assignedMedications?.some($ => "ready_dispense" === $.status) ?? !1;
  }
  issueCompletedHandler() {
    this.isIssueIsStarted = !1, this.close();
  }
  preparePillbox() {
    if ("pillbox" in this.data && !this.data?.pillbox?.pillboxId) return void this.messageService.error("Таблетница не найдена!", {
      marginBottom: this.notificationMb
    });
    const $ = this.dispensingPanel.preparedPillboxMedicaments.map(k => (this.dispensingPanel.selectedAssignedMed = this.assignedMedications.find(ce => ce.id === k.id), this.dispensingPanel.updateMedicalBalance(!0, k.otnUid, k.warehouseId).pipe((0, q.U)(ce => {
      const Ye = ce?.find(Tt => Tt.pharmaUnitId === k.pharmaUnitId);
      if (!Ye) throw this.messageService.warning("Медикамент не найден"), new Error("Медикамент не найден");
      return Ye;
    }), (0, ut.w)(ce => {
      const Ye = k.applyPacking / +ce.amountPacking;
      if (!ce || Ye > +ce.amountUnit) {
        const Tt = `\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u0443! \u041d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430 ${ce.pharmUnitName}`;
        return this.messageService.error(Tt), (0, hn._)(() => new Error(Tt));
      }
      return this.reserveService.reservePharmaUnit({
        warehouseId: k.warehouseId,
        pharmaUnitId: ce.pharmaUnitId,
        amountUnit: Ye,
        remark: `\u0422\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u0430 \u2116${this.data.pillbox?.number}`
      });
    }), (0, q.U)(ce => (delete k.id, delete k.pharmaUnitId, k.reserveId = ce, k)))));
    (0, di.D)($).pipe((0, ut.w)(k => this.pillboxService.preparePillboxCommand(this.data.pillbox.pillboxId, {
      boxDate: (0, Ft.O)(this.data.slot.planningDate),
      dayTimePeriod: this.data.slot.period.toString().toLowerCase(),
      hasDraft: !1,
      medications: k
    }))).subscribe({
      next: () => {
        this.messageService.success("Таблетница подготовлена!", {
          marginBottom: this.notificationMb
        }), this.modalRef.close({
          success: !0
        });
      },
      error: k => {
        this.messageService.error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b: ${k.message}`, {
          marginBottom: this.notificationMb
        });
      }
    });
  }
  clearPillbox() {
    this.assignedMedications.forEach($ => {
      $.status = "Актуальное", $.selectedAmount = 0;
    }), this.dispensingPanel.preparedPillboxMedicaments = [], this.dispensingPanel.resetSelections(), this.messageService.info("Таблетница очищена. Все статусы сброшены до \"Актуальное\".", {
      marginBottom: this.notificationMb
    });
  }
  close() {
    this.modalRef.close();
  }
  trackByAssignedMed($, k) {
    return k.name;
  }
  _loadWarehouses() {
    return this.warehouseService.getUserWarehouses({
      deptId: this.userInfo.deptId,
      postId: this.userInfo.postId
    });
  }
});
