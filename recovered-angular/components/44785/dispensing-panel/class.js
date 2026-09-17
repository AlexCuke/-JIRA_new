// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($) {
    this.modalService = $, this.mode = "preparation", this.availableSlots = [], this.isComposite = !1, this.onComponentIsReady = new n.vpe(), this.isOnStockLoaded = new n.vpe(), this.issueCompleted = new n.vpe(), this.onSelectedStockMedication = new n.vpe(), this.onInjectPrepare = new n.vpe(), this.luValidators = (0, n.f3M)(zr.X), this.fb = (0, n.f3M)(vr.qu), this.warehouseService = (0, n.f3M)(pi), this.cdr = (0, n.f3M)(n.sBO), this.messageService = (0, n.f3M)(wo.Jv), this.breakpointObserver = (0, n.f3M)(Gn.Yg), this.compositionService = (0, n.f3M)(Br), this.store = (0, n.f3M)(t.yh), this.userContext = (0, n.f3M)(qo.oL), this.minDate = new Date(), this.maxDate = (0, _n.Z)(new Date(), 14), this.slotMultiply = 1, this.balanceDateCtrl = new vr.NI({
      value: new Date(),
      disabled: !0
    }, [vr.kI.required, this.luValidators.dateIsInvalid(), this.luValidators.dateMin(this.minDate), this.luValidators.dateMax(this.maxDate)]), this.isWarehouseDropdownOpen = !1, this.isStockLoading = !1, this.selectedAssignedMed = null, this.allStockMedications = [], this.filteredStockMedications = [], this.selectedStockMedication = null, this.multiStockMedicine = [], this.stockMessage = null, this.form = this._initForm(), this.isSubstitutesLoading = !1, this.substitutesLoaded = !1, this.selectedBatchIds = [], this.filteredByMedNamesId = !1, this.notificationMb = 44, this.preparedPillboxMedicaments = [], this.isTablet = !1, this.isIssueIsStarted = !1, this.showPrint = !1, this.warehouseAlternativesMap = {};
  }
  ngAfterViewInit() {
    this.userContext.getUserContext().subscribe($ => {
      this.currentUser = $, this.userInfo = {
        dept: $.department?.fullName,
        deptId: $.department?.id,
        empId: $.employeeId,
        postId: $.jobTitle?.id,
        position: $.jobTitle?.name,
        snils: $.employee?.identities?.snils
      }, this.onComponentIsReady.emit();
    }), this.balanceDateCtrl.valueChanges.pipe((0, Xn.t)(this)).subscribe(() => {
      this.balanceDateCtrl.valid && this.loadStockMedications();
    }), this.form.get("stockLocation")?.valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
      $ && this.loadStockMedications();
    }), this.form.get("isFractional")?.valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
      let k = this.selectedAssignedMed.selectedAmount;
      this.selectedAssignedMed?.dose && this.selectedStockMedication?.dosePerTablet && this.selectedAssignedMed.dose !== this.selectedStockMedication.dosePerTablet && (k *= ni(this.selectedStockMedication, this.selectedAssignedMed)), this.form.get("quantity").patchValue($ ? k : this.roundAmount(k)), this.selectStockMedication(this.selectedStockMedication), this.updateAvailableStockControl();
    }), this.form.get("isFromDifferentBatches")?.valueChanges.pipe((0, Xn.t)(this)).subscribe(() => this.resetSelections()), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
      this.isTablet = $.matches, this.cdr.markForCheck();
    });
  }
  ngOnChanges($) {
    (0, ri.up)($.stockLocations) && (this.warehouseAlternativesMap = Object.fromEntries(this.stockLocations.map(({
      id: k
    }) => [k, !1])), this.stockLocations.length > 0 ? (this.form.get("stockLocation")?.enable(), this.form.get("stockLocation")?.setValue(this.stockLocations[0])) : this.messageService.warning("Нет доступных складов", {
      marginBottom: this.notificationMb
    })), (0, ri.up)($.availableSlots) && (this.slotMultiply = this.availableSlots.length || 1), (0, ri.up)($.availableSlots) && this.data?.medicine && (this.medicine = {
      ...this.data.medicine
    });
  }
  get reservePharmaUnitCommand() {
    return {
      medNamesId: this.medNamesId,
      warehouseId: this.form.get("stockLocation").value.id,
      pharmaUnitId: this.selectedStockMedication.id,
      amountUnit: this.form.get("quantity").value / this.selectedStockMedication.unitQty,
      remark: ""
    };
  }
  resetSelections() {
    this.multiStockMedicine = [], this.selectedBatchIds = [], this.form.get("quantity")?.reset(), this.selectedAssignedMed && (this.selectedAssignedMed.selectedAmount = 0), this.form.get("isFromDifferentBatches").value || this.selectStockMedication(this.selectedStockMedication), this.updateAvailableStockControl();
  }
  getSelectedClass($) {
    return this.form.get("isFromDifferentBatches")?.value ? this.multiCheckboxActive($) : this.selectedStockMedication?.id === $;
  }
  get totalSelectedTablets() {
    const $ = this.multiStockMedicine.map(k => +k.pharmaAmountRound);
    return $.length ? $.reduce((k, ce) => k + ce) : 0;
  }
  get availableStock() {
    if (!this.selectedStockMedication) return 0;
    const k = (this.form.get("isFromDifferentBatches")?.value ? this.totalSelectedTablets : +this.selectedStockMedication.pharmaAmountRound) - this.form.get("quantity").value;
    return k < 0 ? 0 : k;
  }
  loadStockMedications($ = !1, k = !1) {
    if (!this.selectedAssignedMed) return;
    this.isOnStockLoaded.emit(k), this.isStockLoading = !0;
    const ce = this.form.get("stockLocation")?.value;
    ce?.id && this.balanceDateCtrl.value && (this.filteredStockMedications = [], this.allStockMedications = [], this.stockMessage = "Загрузка данных...", this.data.patient?.careCaseId || this.data.ehrCaseId || this.data.patient?.ehrCaseId ? this.updateMedicalBalance($).subscribe() : this.stockMessage = "Отсутствует идентификатор случая (ehrCaseId)");
  }
  calculateQuantityBySlot($) {
    return $.map(({
      amount: k
    }) => k).reduce((k, ce) => k + ce, 0);
  }
  selectStockMedication($) {
    if (!$?.id) return;
    const k = $?.id;
    if (this.form.get("isFromDifferentBatches")?.value) return void this._handleMultiBatchSelection($);
    this.onSelectedStockMedication.emit($), this.selectedStockMedication = $, this.form.get("selectedStockMedicationId")?.setValue(k);
    const Ye = this.filteredStockMedications.find(Tt => Tt.id === k);
    if (this.selectedAssignedMed && Ye) {
      let Tt = 1;
      switch (this.mode) {
        case "issuing":
        case "issuingOther":
        case "issuingInjections":
          Tt = this.selectedAssignedMed.orderedAmount || 1;
          break;
        case "preparation":
          Tt = this.calculateQuantityBySlot(this.selectedAssignedMed.slots);
      }
      Tt *= this.slotMultiply, Tt = this.form.get("isFractional").value ? Tt : Math.ceil(Tt), $.dosePerTablet && this.selectedAssignedMed.dose !== $.dosePerTablet && (Tt *= ni($, this.selectedAssignedMed)), this.selectedAssignedMed.selectedAmount = Tt > +this.selectedStockMedication.pharmaAmountRound ? 0 : this.isFractional ? Tt : this.roundAmount(Tt), this.form.get("quantity")?.setValue(this.selectedAssignedMed.selectedAmount);
    }
    this.updateAvailableStockControl();
  }
  roundAmount($) {
    return Math.ceil($);
  }
  get isFractional() {
    return this.form.get("isFractional")?.value;
  }
  toggleWarehouseDropdown() {
    this.form.get("stockLocation")?.disabled || (this.isWarehouseDropdownOpen = !this.isWarehouseDropdownOpen);
  }
  selectWarehouse($) {
    this.form.get("stockLocation")?.setValue($), this.isWarehouseDropdownOpen = !1;
  }
  displayWarehouseName($) {
    return $ ? $.name : "";
  }
  trackByStockMed($, k) {
    return k.id;
  }
  get isMedInPillbox() {
    return this.preparedPillboxMedicaments.map(({
      id: $
    }) => $).includes(this.selectedAssignedMed.id);
  }
  get allowAddToPillbox() {
    return !this.isMedInPillbox && this.form.get("quantity").value;
  }
  addToPillbox() {
    this.selectedAssignedMed ? (this.preparedPillboxMedicaments.push({
      id: this.selectedAssignedMed.id,
      mnnName: this.selectedAssignedMed.name,
      otnName: this.selectedAssignedMed.tradeName,
      dose: this.selectedStockMedication.dosePerTablet,
      unitOfDose: this.selectedAssignedMed.unitOfDose,
      methodOfAdministration: this.selectedAssignedMed.method,
      unitOfPacking: this.selectedAssignedMed.unitOfPacking,
      applyPacking: this.form.get("quantity").value,
      countAdditionalUnit: this.selectedAssignedMed.countAdditionalUnit,
      additionalUnit: this.selectedAssignedMed.additionalUnit,
      comment: this.selectedAssignedMed.comment,
      medicationsDispenseCode: this.selectedAssignedMed.slots[0].code,
      assignmentCompositionUid: this.selectedAssignedMed.assignmentCompositionUid,
      financeSourceCode: "",
      financeSourceName: "",
      reserveId: null,
      otnUid: this.selectedAssignedMed.otnUid,
      warehouseId: this.form.get("stockLocation")?.value?.id,
      pharmaUnitId: this.selectedStockMedication.id
    }), this.selectedAssignedMed.status = "ready_dispense", this.messageService.success(`\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f "${this.selectedAssignedMed.name}" \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d.`, {
      marginBottom: this.notificationMb
    })) : this.messageService.warning("Сначала выберите назначенный медикамент.", {
      marginBottom: this.notificationMb
    });
  }
  updateMedicalBalance($, k, ce) {
    const Ye = ce ? this.stockLocations.find(({
        id: Wr
      }) => Wr === ce) : this.form.get("stockLocation")?.value,
      Tt = this.balanceDateCtrl.value,
      ai = Gi()(Tt).format("YYYY-MM-DD"),
      Zi = this.data.patient?.careCaseId || this.data.ehrCaseId || this.data.patient?.ehrCaseId,
      Po = this.selectedAssignedMed?.dateStart ? Gi()(this.selectedAssignedMed.dateStart).format("YYYY-MM-DD") : ai;
    return this.warehouseAlternativesMap[Ye.id] = $, (k ? (0, qe.of)(k) : this.selectedAssignedMed?.otnUid ? (0, qe.of)(this.selectedAssignedMed?.otnUid) : this.warehouseService.getMedNamesId(this.selectedAssignedMed?.assignmentCompositionUid)).pipe((0, Xn.t)(this), (0, ut.w)(Wr => (this.medNamesId = Wr, this.filteredByMedNamesId = !!Wr, this.warehouseService.getMedicationBalance(Ye.id, ai, {
      ehrCaseId: Zi,
      medStarDt: Po,
      medNamesId: Wr,
      showAlternatives: $
    }))), (0, Go.K)(Wr => (console.error("Ошибка загрузки остатков", Wr), this.stockMessage = "Ошибка получения данных остатков", this.allStockMedications = [], this.filteredStockMedications = [], this.cdr.markForCheck(), (0, hn._)(() => Wr))), (0, m.b)(Wr => {
      this.isOnStockLoaded.emit(!0), Wr = Wr ?? [], ["isFromDifferentBatches", "isFractional"].forEach(Cs => {
        Wr.length ? this.form.get(Cs).enable() : this.form.get(Cs).disable();
      }), this.allStockMedications = Wr.map(Cs => ({
        id: Cs.pharmaUnitId,
        name: Cs.pharmUnitName,
        ptnCode: String(Cs.drugsId),
        sourceCode: Cs.sourceFinancingId,
        financing: Cs.sourceFinancingName,
        pharmaAmountRound: Cs.pharmaAmountRound,
        batch: Cs.party,
        series: Cs.serialNum,
        expiryDate: Cs.shelfLifeDt,
        packQty: Number(Cs.amountUnitRound),
        unitQty: Number(Cs.amountPacking),
        packaging: Cs.pharmaPackingDesc,
        dosePerTablet: Number(Cs.amountSubstance),
        amountConcentration: Number(Cs.amountConcentration) || 1,
        concentrationUnitName: Cs.concentrationUnitName,
        warehouseId: Ye.id,
        warehouseName: Ye.name,
        mnnId: Cs.medNamesId,
        fillingUnit: Cs.fillingUnit
      })), this.isStockLoading = !1, this.selectedAssignedMed ? this.selectAssignedMedication() : (this.filteredStockMedications = [], this.stockMessage = "Выберите назначение слева");
    }), (0, tn.x)(() => {
      this.isStockLoading = !1, this.cdr.markForCheck();
    }));
  }
  get notAlternatives() {
    const $ = this.form?.get("stockLocation")?.value;
    return !!$ && this.warehouseAlternativesMap[$.id];
  }
  multiCheckboxActive($) {
    return !!this.multiStockMedicine.find(k => k.id === $);
  }
  selectAssignedMedication($) {
    if (!$?.id || !this.selectedAssignedMed?.id || $?.id !== this.selectedAssignedMed?.id) {
      if ($) {
        if (this.selectedAssignedMed = $, ["isFromDifferentBatches", "isFractional"].forEach(k => {
          this.form.get(k).setValue(!!$[k]);
        }), !this.stockLocations || !this.stockLocations.length) return;
        this.form.get("stockLocation").setValue(this.stockLocations.find(({
          id: k
        }) => $.stockId === k) ?? this.stockLocations[0]), this.loadStockMedications(!1, !0);
      }
      if (this.substitutesLoaded = !1, this.filteredStockMedications = this.filteredByMedNamesId ? [...this.allStockMedications] : this.allStockMedications.filter(k => k.name === this.selectedAssignedMed.name), this.filteredStockMedications.length > 0) this.selectStockMedication(this.filteredStockMedications[0]), this.stockMessage = null;else {
        this.selectedStockMedication = null, this.form.get("selectedStockMedicationId")?.setValue(null);
        const k = this.form.get("stockLocation")?.value,
          ce = k.name ? `\u0441\u043a\u043b\u0430\u0434\u0435 ${k.name}` : "выбранном складе";
        this.stockMessage = this.isStockLoading ? "Загрузка данных..." : this.warehouseAlternativesMap[k.id] ? `\u041d\u0430 "${ce}" \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u043e\u0432. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0442\u0430\u0440\u0448\u0435\u0439 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439 \u0441\u0435\u0441\u0442\u0440\u0435` : `\u041d\u0430 "${ce}" \u043d\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430`;
      }
      this.cdr.markForCheck(), this.updateAvailableStockControl();
    }
  }
  issueMedicament() {
    this.isIssueIsStarted = !0;
    const $ = this.filteredStockMedications.find(Zi => Zi.id === this.selectedStockMedication.id),
      k = $?.unitQty ?? 1,
      ce = this.form.get("stockLocation")?.value,
      Ye = $?.warehouseId || (ce ? ce.id : null),
      ai = this.data.careCaseId || this.data.patient?.careCaseId;
    this.compositionService.getEhr(this.data.ehrCaseId || this.data.patient?.ehrCaseId).pipe((0, Xn.t)(this), (0, M.h)(Zi => (Zi || this.messageService.error("Не удалось найти электронную медкарту (EHR)", {
      marginBottom: this.notificationMb
    }), !!Zi)), (0, ut.w)(Zi => this.data.slot ? this._issueMedicament(this.data.slot, Zi, ai, Ye, k) : this.availableSlots && this.availableSlots.length ? (0, Rt.D)(this.availableSlots).pipe((0, ks.b)(Po => this._issueMedicament(Po, Zi, ai, Ye, k))) : (0, hn._)(() => new Error("Нет данных о слотах!")))).subscribe({
      next: () => {
        this.messageService.success(`\u041f\u0440\u0435\u043f\u0430\u0440\u0430\u0442 "${this.selectedAssignedMed.name}" \u0432\u044b\u0434\u0430\u043d \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0443.`, {
          marginBottom: this.notificationMb
        }), this.issueCompleted.emit(!0);
      },
      error: Zi => {
        console.error(Zi), this.messageService.error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0430 "${this.selectedAssignedMed.name}" \n${Zi?.error?.message || ""}`, {
          marginBottom: this.notificationMb
        }), this.issueCompleted.emit(!1);
      },
      complete: () => {
        this.isIssueIsStarted = !1;
      }
    });
  }
  _issueMedicament($, k, ce, Ye, Tt) {
    let Zi = "мг",
      fo = this.selectedAssignedMed.orderedDose;
    const Wr = /^(\d+(?:\.\d+)?)\s+([a-zA-Z\u0430-\u044f\u0410-\u042f.]+)(?:\s+\[(?:\d+(?:\.\d*)?|\.\d+)\s+(.+)\])?$/.exec(fo);
    if (Wr) {
      const [, Ls, nl, Yl, uc] = Wr;
      Zi = nl, fo = `${this.selectedStockMedication.dosePerTablet} ${nl} [${+this.form.get("quantity").value} ${uc}]`;
    }
    const Cs = this.form.get("isFromDifferentBatches")?.value,
      ia = {
        dispensingCode: $?.code,
        dispensingDate: $.planningDate,
        assignmentCompositionUid: this.selectedAssignedMed.assignmentCompositionUid,
        doctor: {
          dept: this.userInfo.dept,
          empId: this.userInfo.empId,
          position: this.userInfo.position,
          snils: this.userInfo.snils
        },
        medication: []
      };
    if (Cs) {
      let Ls = 0,
        nl = !1;
      const Yl = [];
      [...this.multiStockMedicine].sort((uc, $u) => $u.packQty * $u.unitQty - uc.packQty * uc.unitQty).forEach(uc => {
        nl || Yl.push(uc), Ls += Math.ceil(uc.packQty * uc.unitQty), nl = Ls >= +this.form.get("quantity").value;
      }), ia.medication = Yl.map(uc => ({
        medNamesId: this.medNamesId,
        batchCount: +this.form.get("quantity").value / uc.unitQty,
        dose: fo,
        doseUnit: Zi,
        id: this.medicine.id,
        name: uc.name,
        productId: uc.id,
        recycledPack: 0,
        storageId: uc.warehouseId,
        markDrugId: ri.Rt.newGuid()
      }));
    } else ia.medication = [{
      medNamesId: this.medNamesId,
      batchCount: +this.form.get("quantity").value / Tt,
      dose: fo,
      doseUnit: Zi,
      id: this.medicine.id,
      name: this.selectedStockMedication.name || this.medicine.name,
      productId: this.selectedStockMedication.id,
      recycledPack: 0,
      storageId: Ye,
      markDrugId: ri.Rt.newGuid()
    }];
    return this.compositionService.createMedicationDocument(k, ce, ia, !0, !!$.maxSymptomaticAmount, "completed", {
      slots: this.availableSlots,
      medicine: this.data?.medicine ?? this.data.otherMedications.find(({
        assignmentCompositionUid: Ls
      }) => this.selectedAssignedMed.assignmentCompositionUid === Ls)
    }).pipe((0, m.b)(() => {
      this.selectedAssignedMed && (this.selectedAssignedMed.status = "Выдано");
    }));
  }
  updateAvailableStockControl() {
    this.form.get("availableStock")?.setValue(this.availableStock);
  }
  _initForm() {
    return this.fb.group({
      stockLocation: [{
        value: null,
        disabled: !0
      }],
      quantity: [{
        value: 0,
        disabled: !0
      }],
      availableStock: [{
        value: 0,
        disabled: !0
      }],
      isFractional: [{
        value: !1,
        disabled: !0
      }],
      isFromDifferentBatches: [{
        value: !1,
        disabled: !0
      }],
      selectedStockMedicationId: [null]
    });
  }
  _handleMultiBatchSelection($) {
    this.selectedStockMedication = $;
    const k = this.filteredStockMedications.find(Ye => Ye.id === $.id);
    if (!k || !this.selectedAssignedMed) return;
    const ce = this.multiStockMedicine.findIndex(Ye => Ye.id === k.id);
    ce < 0 ? this.multiStockMedicine.push(k) : this.multiStockMedicine.splice(ce, 1), this.selectedAssignedMed.selectedAmount = this.totalSelectedTablets > this.selectedAssignedMed.orderedAmount * this.slotMultiply ? this.selectedAssignedMed.orderedAmount * this.slotMultiply : this.totalSelectedTablets, this.form.get("quantity").setValue(this.selectedAssignedMed.orderedAmount * this.slotMultiply > this.selectedAssignedMed.selectedAmount ? 0 : this.selectedAssignedMed.orderedAmount), this.updateAvailableStockControl();
  }
  prepareLabel() {
    this.showPrint = !0, this.addToPillbox();
  }
});
