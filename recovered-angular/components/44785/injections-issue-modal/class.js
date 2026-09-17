// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs, ia) {
    this.modalRef = $, this.data = k, this.activeMedicamentsModuleService = ce, this.breakpointObserver = Ye, this.warehouseService = Tt, this.userContextService = ai, this.cdr = Zi, this.modalService = Po, this.messageService = fo, this.reserveService = Wr, this.injectionsService = Cs, this.qrScannerService = ia, this.isInjectionMode = !1, this.isTablet = !1, this.periodTranslations = {
      morning: "Утро",
      day: "День",
      evening: "Вечер",
      night: "Ночь"
    }, this.flatMedsBySlots = [], this.isSymptomatically = !1, this.isScannerVisible = !1, this.isScannerUtilizedVisible = !1, this.statuses = {
      worked: "injection__in_work",
      prepared: "prepared",
      deleted: "deleted",
      assigned: "assigned",
      utilized: "utilized",
      damaged: "damaged",
      completed: "completed",
      systematically: "systematically",
      executing: "executing"
    }, this.isUserAllowExecution = !1, this.isOtherMedExisting = !1, this.searchWidgetParams = {
      header: "Выдача ЛП",
      subHeader: "Отсканируйте qr-код инъекции",
      isSearchAllowed: !1,
      mode: "qrcode"
    }, this.searchUtilizedWidgetParams = {
      header: "Подтверждение утилизации",
      subHeader: null,
      isSearchAllowed: !1,
      mode: "qrcode"
    }, this.isActionPanelDisable = !1, this.getInjectionsStatusLabelRu = Re.jo, this.getDuration = So, this.isSymptomatically = k.slot && k.slot.status && "SYSTEMATICALLY" === k.slot.status, this.isSymptomatically ? k.injectionMedicaments = k.injectionMedicaments.filter(nl => nl.assignmentCompositionUid === k.slot.assignmentCompositionUid && nl.slots.every(({
      status: Yl
    }) => "SYSTEMATICALLY" === Yl)).map(nl => ({
      ...nl,
      slots: [nl.slots[0]]
    })) : (k.injectionMedicaments = k.injectionMedicaments.filter(Yl => !Yl.slots.every(({
      status: uc
    }) => "SYSTEMATICALLY" === uc)), this.data.medicine.medicationDispenses.find(({
      code: Yl
    }) => Yl === this.data.slot.code).status.toLowerCase() === this.statuses.assigned && (k.injectionMedicaments = k.injectionMedicaments.filter(({
      status: Yl
    }) => Yl.toLowerCase() === this.statuses.assigned))), this.isInjectionMode = "injections" === this.activeMedicamentsModuleService.activeArm && !!k.injectionMedicaments;
    const Ls = this.data.injectionMedicaments.map(({
      assignmentCompositionUid: nl
    }) => nl);
    this.assignedMedications = this.data.assignedMedications.filter(nl => Ls.includes(nl.assignmentCompositionUid));
  }
  get isDebugMode() {
    return this.injectionsService.isDebugMode;
  }
  ngOnInit() {
    this.setStatuses(), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
      this.isTablet = $.matches, this.cdr.markForCheck();
    }), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
      this.isUserAllowExecution = $.rightCodes.includes("NURSE_EXECUTION"), this.userInfo = {
        dept: $.department?.fullName,
        deptId: $.department?.id,
        empId: $.employeeId,
        postId: $.jobTitle?.id,
        position: $.jobTitle?.name,
        snils: $.employee?.identities?.snils,
        workplaceId: $.employee?.workplace.id,
        doctorJob: $.jobTitle?.name,
        doctorName: `${$.lastName} ${$.firstName} ${$.secondName}`
      }, this.warehouses$ = this._loadWarehouses();
    }), this.startScanner(), this.qrScannerService.scan$.pipe((0, Xn.t)(this)).subscribe(({
      value: $
    }) => this._handleScan($));
  }
  isAllowExecuting($) {
    return this.isUserAllowExecution && $.status.toLowerCase() !== this.statuses.completed && $.code === this.scannedDispenseCode;
  }
  _handleScan($) {
    const k = this.flatMedsBySlots.find(({
      code: ce
    }) => ce === $);
    k ? [this.statuses.prepared, this.statuses.executing].includes(k?.status.toLowerCase()) && (this.scannedDispenseCode = $, this.errorScan = null) : (this.flatMedsBySlots.some(({
      medicationDispenses: Ye
    }) => Ye.some(({
      code: Tt
    }) => Tt === $)), this.errorScan = "wrongTime"), this.cdr.detectChanges();
  }
  startScanner() {
    this.qrScannerService.start({
      maxGapMs: 80,
      maxAverageGapMs: 35,
      idleFinishMs: 120,
      ignoreEditableTargets: !0
    });
  }
  tempScan($) {
    this.scannedDispenseCode = Array.isArray($) ? $[0].code : $.code;
  }
  coerceState($) {
    return ["струйно", "капельно", "инфузомат"].some(ce => $.method.includes(ce)) && $.status.toLowerCase() !== this.statuses.executing ? "active" : "completed";
  }
  setStatuses() {
    this.preparedInjectionMedicaments$ = (this.isSymptomatically ? this.getPreparedSymptomaticInjectionMedicaments$() : this.getPreparedInjectionMedicaments$()).pipe((0, m.b)($ => {
      const k = $.periodGroup.singleMedicaments.length || $.periodGroup.compositeMedicaments.length ? $.periodGroup : $.timeGroup;
      this.selectedMedicine = k.singleMedicaments?.[0] ?? k.compositeMedicaments?.[0]?.[0], this.selectedSlot = this.selectedMedicine.slots[0], this.selectedAssignedMedicine = this.getAssignedMedicine(this.selectedMedicine), this.injectionsMode = this.flatMedsBySlots.some(ce => this.isSymptomatically ? this._symptomaticStatus(ce) : [this.statuses.prepared, this.statuses.completed].includes(ce.status.toLowerCase())) ? "issuing" : "preparation";
    }));
  }
  getCompositeStatus($) {
    return $.some(({
      status: k
    }) => k === this.statuses.worked) ? this.statuses.worked : $[0].status.toLowerCase();
  }
  setInitialDispense() {
    this.cdr.detectChanges(), this.dispensingPanel.selectAssignedMedication(this.selectedAssignedMedicine);
  }
  selectMedicine($) {
    this.selectedMedicine = $, this.cdr.detectChanges(), this.dispensingPanel && (this.selectedAssignedMedicine = this.getAssignedMedicine($), this.dispensingPanel.selectAssignedMedication(this.selectedAssignedMedicine));
  }
  isItemSelected($) {
    return this.selectedMedicine.id === $.id && this.selectedMedicine.code === $.code && this.scannedDispenseCode !== $.code && [this.statuses.assigned, "base", "base__adaptive"].includes($.status.toLowerCase());
  }
  isShowDispensingPanel($) {
    return $.some(({
      id: k,
      code: ce
    }) => k === this.selectedMedicine.id && ce === this.selectedMedicine.code) && ![this.statuses.worked, this.statuses.deleted, this.statuses.prepared, this.statuses.completed, this.statuses.executing].includes(this.selectedMedicine.status.toLowerCase()) && !this.data.injectionMedicaments.some(({
      status: k
    }) => [this.statuses.prepared, this.statuses.completed].includes(k.toLowerCase()));
  }
  isAllowCompletePreparation($) {
    const k = [...$.periodGroup.compositeMedicaments, ...$.timeGroup.compositeMedicaments],
      ce = [...$.periodGroup.singleMedicaments, ...$.timeGroup.singleMedicaments];
    return k.filter(Ye => ![this.statuses.deleted, this.statuses.damaged, this.statuses.utilized].includes(Ye[0].status.toLowerCase())).every(Ye => Ye.every(({
      status: Tt
    }) => Tt.toLowerCase() === this.statuses.worked)) && ce.filter(({
      status: Ye
    }) => ![this.statuses.deleted, this.statuses.damaged, this.statuses.utilized, "base__adaptive", "base"].includes(Ye.toLowerCase())).every(({
      status: Ye
    }) => Ye.toLowerCase() === this.statuses.worked);
  }
  getFlatMedicaments($) {
    return [...$.periodGroup.singleMedicaments, ...$.timeGroup.singleMedicaments, ...$.periodGroup.compositeMedicaments, ...$.timeGroup.compositeMedicaments].map(k => Array.isArray(k) ? k[0] : k).filter(k => [this.statuses.worked, "base", "base__adaptive"].includes(k.status.toLowerCase()));
  }
  completedPreparation($) {
    this.modalRef.close(this.getFlatMedicaments($));
  }
  _symptomaticStatus($) {
    const k = $.slots.find(ce => !!ce.code)?.code;
    return k ? $.medicationDispenses.find(({
      code: ce
    }) => ce === k)?.status?.toLowerCase() : this.statuses.systematically;
  }
  getPreparedSymptomaticInjectionMedicaments$() {
    const $ = ri.Rt.newGuid(),
      k = this.data.injectionMedicaments;
    return this.flatMedsBySlots = [...k], this.reserveService.getReservesByDispenseId(null, k[0].assignmentCompositionUid, this.data.slot.planningDate.split("T")[0]).pipe((0, q.U)(ce => k.map(Ye => {
      if (Ye.deleted) return {
        ...Ye,
        status: this.statuses.deleted,
        selectedAmount: this.getAssignedMedicine(Ye).orderedAmount
      };
      if (Ye.base) return {
        ...Ye,
        status: Ye.status.toLowerCase() === this.statuses.prepared ? this.statuses.prepared : this.isTablet ? "base__adaptive" : "base",
        selectedAmount: this.getAssignedMedicine(Ye).orderedAmount
      };
      if (!ce || !ce.length) return {
        ...Ye,
        code: $,
        status: this.statuses.assigned
      };
      const Tt = ce.find(ai => ai.medNamesId === Ye.otnUid);
      return {
        ...Ye,
        code: Tt.dispenseCode,
        status: this._symptomaticStatus(Ye) === this.statuses.prepared ? this.statuses.prepared : this.statuses.worked,
        selectedAmount: Tt.pharmaAmountRound ?? this.getAssignedMedicine(Ye).orderedAmount,
        reserveInfo: Tt
      };
    })), (0, M.h)(ce => ce && ce.length > 0), (0, q.U)(ce => {
      const Ye = ce.length > 1;
      return {
        timeGroup: {
          singleMedicaments: Ye ? [] : [...ce],
          compositeMedicaments: Ye ? [[...ce]] : []
        },
        periodGroup: {
          period: null,
          singleMedicaments: [],
          compositeMedicaments: []
        }
      };
    }));
  }
  getPreparedInjectionMedicaments$() {
    const $ = new Set();
    let k = !1;
    const ce = this.data.injectionMedicaments.flatMap(Tt => Tt.slots.map(({
      time: ai,
      code: Zi,
      status: Po
    }) => ($.add(Zi), {
      ...Tt,
      status: Po,
      time: ai,
      code: Zi
    }))).sort((Tt, ai) => (Tt.time ?? "").localeCompare(ai.time ?? ""));
    this.flatMedsBySlots = [...ce];
    const Ye = Array.from($);
    return this.reserveService.getReservesByDispenseIds(Ye).pipe((0, q.U)(Tt => Ye.map(ai => ce.filter(({
      code: Po
    }) => Po === ai).map(Po => {
      if (k || (k = [this.statuses.prepared, this.statuses.completed].includes(Po.status.toLowerCase())), Po.deleted) return {
        ...Po,
        status: this.statuses.deleted,
        selectedAmount: this.getAssignedMedicine(Po).orderedAmount
      };
      if (Po.base) return {
        ...Po,
        status: Po.status.toLowerCase() === this.statuses.prepared ? this.statuses.prepared : this.isTablet ? "base__adaptive" : "base",
        selectedAmount: this.getAssignedMedicine(Po).orderedAmount
      };
      const fo = Tt[Po.code]?.find(Wr => Wr.medNamesId === Po.otnUid);
      return fo ? {
        ...Po,
        status: [this.statuses.prepared, this.statuses.completed].includes(Po.status.toLowerCase()) ? Po.status.toLowerCase() : this.statuses.worked,
        selectedAmount: fo.pharmaAmountRound ?? this.getAssignedMedicine(Po).orderedAmount,
        reserveInfo: fo
      } : {
        ...Po,
        status: Po.status
      };
    })).map(ai => ({
      meds: ai,
      isComposite: ai.length > 1
    }))), (0, q.U)(Tt => {
      const ai = {
        timeGroup: {
          singleMedicaments: [],
          compositeMedicaments: []
        },
        periodGroup: {
          singleMedicaments: [],
          compositeMedicaments: [],
          period: null
        },
        otherTimeGroup: {
          singleMedicaments: [],
          compositeMedicaments: []
        },
        otherPeriodGroup: {
          singleMedicaments: [],
          compositeMedicaments: [],
          period: null
        }
      };
      return Tt.forEach(Zi => {
        const Po = Zi.meds[0].slots[0].dayTimePeriod;
        this.isOtherMedExisting = k && Zi.meds.some(({
          status: Wr
        }) => ![this.statuses.prepared, this.statuses.completed].includes(Wr.toLowerCase()));
        const fo = this.isOtherMedExisting ? Po ? ai.otherPeriodGroup : ai.otherTimeGroup : Po ? ai.periodGroup : ai.timeGroup;
        Zi.isComposite ? fo.compositeMedicaments.push(Zi.meds) : fo.singleMedicaments.push(Zi.meds[0]), Po && (fo.period = Po);
      }), ai.timeGroup.singleMedicaments.sort((Zi, Po) => (Zi.time ?? "").localeCompare(Po.time ?? "")), ai.timeGroup.compositeMedicaments.sort((Zi, Po) => (Zi[0].time ?? "").localeCompare(Po[0].time ?? "")), ai;
    }));
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
  getNameWithDose($) {
    const k = this.getAssignedMedicine($),
      ce = this.parseOrderedDose(k);
    return `${k.name} ${ce?.form ?? ""}  ${k.dose / k.orderedAmount} ${ce?.unit || "мг"}`;
  }
  trackByMed($, k) {
    return $;
  }
  get isPreparedExist() {
    return this.data.injectionMedicaments.some($ => $.medicationDispenses.filter(({
      dayTimePeriod: k
    }) => k === this.data.slot.dayTimePeriod).every(({
      status: k
    }) => k.toLowerCase() === this.statuses.prepared));
  }
  prepareMed($) {
    $.reservePharmaUnitCommand.dispenseCode = this.selectedMedicine.code, $.reservePharmaUnitCommand.assignmentCompositionUid = this.selectedMedicine.assignmentCompositionUid, $.reservePharmaUnitCommand.careCaseId = this.data.patient.careCaseId, $.reservePharmaUnitCommand.reservationDate = this.data.slot.planningDate.split("T")[0], this.reserveService.reservePharmaUnit($.reservePharmaUnitCommand).pipe((0, Xn.t)(this)).subscribe(k => {
      this.selectedMedicine.status = k ? this.statuses.worked : this.selectedMedicine.status, this.cdr.detectChanges(), $.print && this.printLabel([this.selectedMedicine]);
    });
  }
  printSetLabel() {
    const $ = {
      patientFio: this.data.patient.fio,
      age: this.data.patient.age,
      birthday: Gi()(this.data.patient.birthDate).format("DD.MM.YYYY"),
      medCardNumber: this.data.patient.cardNumber,
      ward: this.data.patient.palata,
      careCaseId: this.data.patient.careCaseId,
      bed: ""
    };
    this.modalService.open(new jt.X(zl), {
      data: $,
      disableClose: !0,
      panelClass: "openLabelPrintDialog"
    });
  }
  getAssignedMedicine($) {
    return this.assignedMedications.find(k => $.id === k.id);
  }
  isCompositePrepared($) {
    return $.every(({
      status: k
    }) => k === this.statuses.worked);
  }
  getDispensingQuantity($) {
    return ["base", "base__adaptive", this.statuses.worked, this.statuses.prepared, this.statuses.completed].includes($.status) ? $.selectedAmount ?? this.getAssignedMedicine($).orderedAmount : 0;
  }
  printLabel($) {
    const k = {
      patientFio: this.data.patient.fio,
      age: this.data.patient.age,
      birthday: Gi()(this.data.patient.birthDate).format("DD.MM.YYYY"),
      medCardNumber: this.data.patient.cardNumber,
      ward: this.data.patient.palata,
      careCaseId: this.data.patient.careCaseId,
      bed: "",
      medicine: $
    };
    this.modalService.open(new jt.X(Ml), {
      data: k,
      width: "648px",
      disableClose: !0,
      panelClass: "openLabelPrintDialog"
    });
  }
  patientRefuse($) {
    this.injectionsService.patientRefuse(this.data, $).pipe((0, Xn.t)(this)).subscribe(() => {
      $ = $.map(k => (k.status = "CANCELLED", k));
    });
  }
  issuingMedicament($) {
    const k = $[0].medicationDispenses.find(({
      code: ce
    }) => ce === $[0].code)?.resultCompositionUid || null;
    this.isActionPanelDisable = !0, this.injectionsService.issuingOrUtilizationMedicament(this.data, $, "", "DISPENSE", this.coerceState($[0]), k).pipe((0, Xn.t)(this), (0, Go.K)(ce => (console.error(ce), this.messageService.error(`\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u043e\u0448\u0438\u0431\u043a\u043e\u0439! ${ce?.error.message || ""}`, {
      marginBottom: 44
    }), (0, hn._)(() => ce))), (0, tn.x)(() => {
      this.isActionPanelDisable = !1, this.cdr.markForCheck();
    })).subscribe(ce => {
      const Ye = {
        active: "EXECUTING",
        completed: "COMPLETED"
      };
      $ = $.map(Tt => (Tt.status = Ye[this.coerceState(Tt)], Tt)), this.cdr.detectChanges(), Io.merge($, ce);
    });
  }
  utilizedAdaptiveMedicamentModal($) {
    this.modalService.open(new jt.X(Kc), {
      width: "512px",
      disableClose: !0
    }).afterClose().pipe((0, Xn.t)(this), (0, M.h)(k => !!k)).subscribe(k => {
      this.adaptiveUtilizedRemark = k, this.adaptiveUtilizedMedicine = [...$], this.isScannerUtilizedVisible = !0, this.cdr.markForCheck();
    });
  }
  utilizedMedicamentModal($) {
    this.isTablet ? this.utilizedAdaptiveMedicamentModal($) : (this.qrScannerService.stop(), this.modalService.open(new jt.X(Kc), {
      width: "512px",
      disableClose: !0
    }).afterClose().pipe((0, Xn.t)(this), (0, M.h)(k => !!k), (0, ut.w)(k => this.modalService.open(new jt.X(Bi), {
      width: "448px",
      data: {
        code: $[0].code
      },
      disableClose: !0
    }).afterClose().pipe((0, M.h)(ce => ce), (0, ut.w)(() => this._utilizationMedicament($, k)))), (0, tn.x)(() => this.startScanner())).subscribe(k => {}));
  }
  qrUtilizedScannerHandle($) {
    this.adaptiveUtilizedMedicine[0].code === $ ? this._utilizationMedicament(this.adaptiveUtilizedMedicine, this.adaptiveUtilizedRemark).pipe((0, Xn.t)(this)).subscribe() : this.messageService.warning("QR код не принадлежит выбранному медикаменту!");
  }
  _utilizationMedicament($, k) {
    return this.injectionsService.issuingOrUtilizationMedicament(this.data, $, k, "UTILIZATION");
  }
  _loadWarehouses() {
    return this.warehouseService.getUserWarehouses({
      deptId: this.userInfo.deptId,
      postId: this.userInfo.postId
    });
  }
  qrCodeScanned($) {
    this._handleScan($);
  }
  handleScanQRDialog($) {
    this.isScannerVisible = $, this.cdr.markForCheck();
  }
});
