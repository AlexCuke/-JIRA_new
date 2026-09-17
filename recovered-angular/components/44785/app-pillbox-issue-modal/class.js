// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs) {
    this.modalRef = $, this.data = k, this.messageService = ce, this.cdr = Ye, this.modalHelper = Tt, this.userContextService = ai, this.pillboxService = Zi, this.store = Po, this.confirmationModalService = fo, this.breakpointObserver = Wr, this.warehouseService = Cs, this.state = null, this.searchWidgetParams = {
      header: "Выдача ЛП",
      subHeader: "Отсканируйте штрихкод таблетницы",
      isSearchAllowed: !1,
      mode: "barcode"
    }, this.statusRu = Re.y0, this.periodTranslations = {
      MORNING: "Утро",
      DAY: "День",
      EVENING: "Вечер",
      NIGHT: "Ночь"
    }, this.isScanning = !1, this.isLoading = !1, this.scanSuccess = !1, this.scanMismatch = !1, this.scanTimedOut = !1, this.scanValue = "", this.scanBuffer = "", this.scanDebounceTimer = null, this.scanTimeoutTimer = null, this.isTablet = !1, this.destroy$ = new d.x(), this.pillboxMedications = [], this.showedDispensingMedications = [], this.isScannerVisible = !1;
  }
  ngOnInit() {
    this.calculateState(), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
      this.userInfo = {
        dept: $.department?.fullName,
        deptId: $.department?.id,
        empId: $.employeeId,
        postId: $.jobTitle?.id,
        position: $.jobTitle?.name,
        snils: $.employee?.identities?.snils
      }, this.warehouses$ = this._loadWarehouses();
    }), this.breakpointObserver.observe(ir.o).pipe((0, b.R)(this.destroy$)).subscribe($ => {
      this.isTablet = $.matches;
    });
  }
  ngOnDestroy() {
    this.clearTimers(), this.destroy$.next(), this.destroy$.complete();
  }
  onKeyDown($) {
    if (this.isScanning && "Shift" !== $.key && "Control" !== $.key && "Alt" !== $.key && "Meta" !== $.key) {
      if ($.preventDefault(), "Enter" === $.key) return void this.finishScan();
      1 === $.key.length && (this.scanBuffer += $.key), clearTimeout(this.scanDebounceTimer), this.scanDebounceTimer = setTimeout(() => this.finishScan(), 500);
    }
  }
  calculateState() {
    const $ = this.data.pillbox.pillboxMarks.flatMap(k => ({
      ...k,
      medications: k.medications.filter(({
        reserveId: ce
      }) => !!ce)
    })).flatMap(({
      medications: k
    }) => k.flatMap(({
      assignmentCompositionUid: ce
    }) => ce));
    this.pillboxMedications = this.data.pillbox.medications.map(k => $.includes(k.assignmentCompositionUid) ? ["assigned", "active", "created", "prepared"].includes(k.status.toLowerCase()) ? {
      ...k,
      status: "ready_dispense"
    } : k : {
      ...k,
      status: "new"
    }), this.cdr.markForCheck();
  }
  startScanning() {
    this.scanSuccess = !0, this.scanMismatch = !1;
  }
  getStatusClass($) {
    return {
      [$.status.toLowerCase()]: !0
    };
  }
  get hasChanged() {
    return this.hasNewMedicaments;
  }
  get hasNewMedicaments() {
    return this.pillboxMedications.some(({
      status: $
    }) => "new" === $);
  }
  finishScan() {
    clearTimeout(this.scanDebounceTimer);
    const $ = this.scanBuffer.trim();
    this.scanBuffer = "", $ && (this.scanValue = $, this.isScanning = !1, this.isLoading = !0, this.clearTimers(), setTimeout(() => {
      this.isLoading = !1;
      const k = String(this.data.pillbox.number);
      $ === k ? (this.scanSuccess = !0, this.scanMismatch = !1) : (this.scanMismatch = !0, this.scanSuccess = !1), this.cdr.markForCheck();
    }, 1e3));
  }
  clearTimers() {
    clearTimeout(this.scanDebounceTimer), clearTimeout(this.scanTimeoutTimer);
  }
  resetToScan() {
    this.scanSuccess = !1, this.scanMismatch = !1, this.startScanning();
  }
  close() {
    this.clearTimers(), this.modalRef.close(!1);
  }
  utilize() {
    this.clearTimers(), this.pillboxService.utilizePillbox(this.data).subscribe({
      next: $ => {
        switch ($) {
          case "utilize":
          case "utilize_and_reassemble":
            this.messageService.success("Таблетница утилизирована", {
              marginBottom: 44
            }), this.modalRef.close();
            break;
          case "go_to_preparation":
            this.modalRef.close();
        }
      },
      error: () => this.messageService.error("Ошибка утилизации таблетницы!", {
        marginBottom: 44
      })
    });
  }
  clearPillbox() {
    this.confirmationModalService.openDialog({
      message: `\u041f\u043e\u0441\u043b\u0435 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b \u0432\u0441\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b \u043f\u0435\u0440\u0435\u0439\u0434\u0443\u0442 \u0432 \u0441\u0442\u0430\u0442\u0443\u0441 "\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439".\n      \u0425\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u0443 \u2116${this.data?.pillbox?.number || ""}`,
      size: 448,
      title: "Очистка таблетницы",
      buttonTitle: "Очистить таблетницу",
      cancelButtonTitle: "Отменить"
    }).pipe((0, Xn.t)(this), (0, ut.w)(() => this.pillboxService.clearPillbox(this.data.pillbox))).subscribe({
      next: () => {
        this.messageService.success("Таблетница успешно очищена!", {
          marginBottom: 44
        }), this.close();
      },
      error: () => {
        this.messageService.error("Ошибка очистки таблетницы", {
          marginBottom: 44
        });
      }
    });
  }
  issuePillbox() {
    const $ = {
      ...this.data,
      pillbox: {
        ...this.data.pillbox,
        medications: this.pillboxMedications.filter(k => "ready_dispense" === k.status)
      }
    };
    this.pillboxService.deliveryPillbox($).pipe((0, Xn.t)(this)).subscribe({
      next: () => {
        Rn({
          taskId: this.data.patient.careCaseId,
          slotId: this.data.slot.id,
          newStatus: Re.Ae.Completed,
          updatedAt: Gi()().toISOString()
        }), this.messageService.success("Таблетница выдана", {
          marginBottom: 44
        }), this.modalRef.close({
          action: "issue_pillbox"
        });
      },
      error: k => {
        ki({
          taskId: this.data.patient.careCaseId,
          slot: this.data.slot,
          previousStatus: this.data.slot.status,
          error: k
        }), console.error(k), this.messageService.error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b \n ${k?.error?.message || k.statusText}`, {
          marginBottom: 44
        });
      }
    });
  }
  scanPillbox() {
    this.startScanning();
  }
  calculateQuantityBySlot($) {
    return $.map(({
      amount: k
    }) => k).reduce((k, ce) => k + ce, 0);
  }
  isShowDispensingPanel($) {
    return this.showedDispensingMedications.includes($);
  }
  issueBaseMedication($) {
    this.modalHelper.openDispensingConfirmationModal("issue", this.data.patient.fio || "Неизвестный пациент", $, this.data.slot).pipe((0, Xn.t)(this)).subscribe(() => {
      $.slots.forEach(k => {
        $.status = "ISSUED", this.store.dispatch(u({
          patientId: this.data.patient.careCaseId,
          medicineId: $.id,
          slot: k,
          code: k.code,
          resultCompositionUid: k.resultCompositionUid,
          patient: this.data.patient,
          medicine: $
        }));
      }), this.cdr.markForCheck();
    });
  }
  issueMedication($, k) {
    this.showedDispensingMedications.push($.id), k.medicine = {
      ...$
    }, k.selectAssignedMedication({
      assignmentCompositionUid: $.assignmentCompositionUid,
      name: $.name
    });
  }
  issueMedicationCompleted($, k) {
    $.status = k ? "ISSUED" : $.status;
    const ce = this.showedDispensingMedications.findIndex(Ye => Ye === $.id);
    this.showedDispensingMedications.splice(ce, 1), this.cdr.markForCheck();
  }
  get periodLabel() {
    const $ = this.data.pillbox?.pillboxMarks?.[0]?.dayTimePeriod?.toUpperCase();
    return this.periodTranslations[$] || "";
  }
  trackByMedication($, k) {
    return k.id;
  }
  startTabletScanning() {
    this.isScannerVisible = !0, this.cdr.markForCheck();
  }
  onBarcodeScanned($) {
    const k = String(this.data.pillbox.number),
      ce = $.trim();
    this.isScannerVisible = !1, this.isLoading = !0, this.cdr.markForCheck(), setTimeout(() => {
      this.isLoading = !1, ce === k ? (this.scanSuccess = !0, this.scanMismatch = !1) : (this.scanMismatch = !0, this.scanSuccess = !1, this.scanValue = ce), this.cdr.markForCheck();
    }, 1e3);
  }
  onScannerClose($) {
    this.isScannerVisible = !1, this.cdr.markForCheck();
  }
  _loadWarehouses() {
    return this.warehouseService.getUserWarehouses({
      deptId: this.userInfo.deptId,
      postId: this.userInfo.postId
    });
  }
});
