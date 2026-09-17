// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs) {
    this.store = $, this.viewContainerRef = k, this.modalHelper = ce, this.patientDataService = Ye, this.activeMedicamentsModuleService = Tt, this.cdr = ai, this.router = Zi, this.qrScannerService = Po, this.medicationControllerService = fo, this.userContextService = Wr, this.messageService = Cs, this.isTablet = !0, this.timeHeaderMode = "periods", this.groupingMode = "byPatient", this.hourlyHeaders = [], this.filters = null, this.breakpointObserver = (0, n.f3M)(Gn.Yg), this.cancelModalOperation$ = new d.x(), this.isModalOperationInProgress = !1, this.isLoading$ = this.store.select(le.xU), this.groupedPrescriptions$ = this.store.select(le.au).pipe((0, q.U)(ia => this.groupDataByMedicine(ia))), this.patientDataService.refreshData(), this.patients$ = this.store.select(le.NA), this.searchTerm$ = this.store.select(le.mj).pipe((0, q.U)(ia => ia?.search || ""));
  }
  ngOnInit() {
    this.store.dispatch(A()), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
      this.userInfo = {
        dept: $.department?.fullName,
        deptId: $.department?.id,
        empId: $.employeeId,
        postId: $.jobTitle?.id,
        position: $.jobTitle?.name,
        snils: $.employee?.identities?.snils,
        workplaceId: $.employee?.workplace.id,
        doctorJob: $.jobTitle?.name,
        doctorName: `${$.lastName} ${$.firstName} ${$.secondName}`
      };
    }), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => this.isTablet = $.matches);
  }
  ngAfterViewInit() {
    const $ = this.issuingFilterPanel.getHeight();
    this.contentHeight = this.isTablet ? `calc(100% - ${$}px)` : "", this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.cancelModalOperation$.next(), this.cancelModalOperation$.complete();
  }
  generateHourlyArray($, k) {
    const ce = [];
    let Ye = (0, Ha.Z)((0, vu.Z)(new Date(), $));
    for (let Tt = $; Tt <= k; Tt++) ce.push((0, Zd.Z)(Ye, "HH:mm")), Ye = (0, Fp.Z)(Ye, 1);
    return ce;
  }
  onFiltersChanged($) {
    const k = {
      ...$,
      ward: "all" === $.ward ? null : $.ward,
      period: "all" === $.period ? null : $.period
    };
    let ce;
    this.filters = k, this.groupingMode = "byMedicament" === k.grouping ? "byMedicament" : "byPatient", ce = "byHour" === k.sorting ? "byHour" : "byTimeOfDay", "byHour" === ce ? (this.timeHeaderMode = "hours", this.hourlyHeaders = this.generateHourlyArrayForPeriod(k.period)) : (this.timeHeaderMode = "periods", this.hourlyHeaders = []), this.store.dispatch(E({
      filters: {
        status: k.status ?? ["all"],
        grouping: this.groupingMode,
        sorting: ce,
        ward: k.ward ?? null,
        period: k.period ?? null,
        timeViewMode: ce,
        search: k.search ?? null
      }
    }));
  }
  onSlotAction($) {
    const k = $.patientId,
      ce = $.medicineId,
      Ye = $.slot.id;
    if ("issuing_prepare" === $.action && this.router.navigate(["pillboxes", "preparation"], {
      state: $
    }), "injections" === this.activeMedicamentsModuleService.activeArm) return this.qrScannerService.manageScanner$.next("stop"), void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openWritingOffInjectionDialogWithData({
      ...Zi,
      context: "issuing",
      assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k)
    }, this.viewContainerRef).pipe((0, M.h)(Po => Po?.length > 0), (0, ut.w)(Po => (0, di.D)(Po.map(fo => this.medicationControllerService.markMedicationDispenseAsPreparedCommand({
      assignmentCompositionUid: fo.assignmentCompositionUid,
      code: fo.code,
      doctorJob: this.userInfo.doctorJob,
      doctorName: this.userInfo.doctorName,
      workplaceId: this.userInfo.workplaceId
    })))), (0, m.b)(() => {
      const Po = Zi.patient.fio.split(" ");
      this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0434\u0435\u043d\u044c ${Po[0]} ${Po[1][0]}. ${Po[2][0]}. \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b`, {
        marginBottom: 44
      });
    }))), (0, Go.K)(Zi => (this.messageService.error("Ошибка подготовки назначения", {
      marginBottom: 44
    }), (0, hn._)(() => Zi))), (0, tn.x)(() => this.qrScannerService.manageScanner$.next("start"))), Zi => {});
    if ($.isBaseTherapy) {
      if ("issue" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("issue", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
        this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Completed);
      });
      if ("cancel" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("cancel", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
        this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Assigned);
      });
    }
    if ("prepare" === $.action) return $.slot.status === Re.vd.Systematically ? void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("issue", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
      this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.vd.Issued);
    }) : void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openWritingOffDialogWithData({
      ...Zi,
      context: "issuing",
      stockMedications: this.patientDataService.getAllStockMedications(),
      assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k)
    }, this.viewContainerRef))), Zi => {
      Zi?.success && this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.vd.Prepared);
    });
    if ("issue" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openWritingOffDialogWithData({
      ...Zi,
      context: "issuing",
      stockMedications: this.patientDataService.getAllStockMedications(),
      assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k)
    }, this.viewContainerRef))), Zi => {
      Zi?.success && this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Completed);
    });
    if ("cancel" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("cancel", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
      this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Assigned);
    });
    if ("rollback" === $.action) return void this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Assigned);
    if ("cancelDispense" === $.action) return void this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Cancelled, $.reason);
    const ai = {
      utilize: Re.vd.Utilized,
      repack: Re.vd.NeedsRepackage,
      complete: Re.Ai.Completed
    }[$.action];
    ai && this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, ai);
  }
  groupDataByMedicine($) {
    return $ ? $.sort((k, ce) => k.medicineName.localeCompare(ce.medicineName, void 0, {
      sensitivity: "base"
    })).reduce((k, ce) => {
      const Ye = ce.medicineName;
      return k[Ye] || (k[Ye] = []), k[Ye].push(ce), k;
    }, {}) : {};
  }
  generateFullDayHourlyArray() {
    const $ = [];
    for (let k = 0; k < 24; k++) {
      const ce = (0, vu.Z)((0, Ha.Z)(new Date()), k);
      $.push((0, Zd.Z)(ce, "HH:mm"));
    }
    return $;
  }
  generateHourlyArrayForPeriod($) {
    if (!$ || "all" === $) return this.generateFullDayHourlyArray();
    const ce = {
      morning: {
        start: 6,
        end: 11
      },
      day: {
        start: 12,
        end: 17
      },
      evening: {
        start: 18,
        end: 22
      },
      night: {
        start: 23,
        end: 5
      }
    }[$.toLowerCase()];
    if (!ce) return this.generateFullDayHourlyArray();
    const Ye = [];
    if ("night" === $.toLowerCase()) {
      for (let Tt = 23; Tt < 24; Tt++) {
        const ai = (0, vu.Z)((0, Ha.Z)(new Date()), Tt);
        Ye.push((0, Zd.Z)(ai, "HH:mm"));
      }
      for (let Tt = 0; Tt <= 5; Tt++) {
        const ai = (0, vu.Z)((0, Ha.Z)(new Date()), Tt);
        Ye.push((0, Zd.Z)(ai, "HH:mm"));
      }
    } else for (let Tt = ce.start; Tt <= ce.end; Tt++) {
      const ai = (0, vu.Z)((0, Ha.Z)(new Date()), Tt);
      Ye.push((0, Zd.Z)(ai, "HH:mm"));
    }
    return Ye;
  }
  getModalData($, k, ce) {
    return this.patientDataService.getModalDataForPatientAndMedicine($, k, ce).pipe((0, M.h)(Ye => !!Ye || (this.store.dispatch(G({
      message: "Не удалось загрузить данные для модального окна"
    })), !1)), (0, Go.K)(() => (this.store.dispatch(G({
      message: "Ошибка при загрузке данных"
    })), Pu.E)));
  }
  executeModalOperation($, k) {
    this.cancelModalOperation$.next(), !this.isModalOperationInProgress && (this.isModalOperationInProgress = !0, $.pipe((0, b.R)(this.cancelModalOperation$), (0, tn.x)(() => {
      this.isModalOperationInProgress = !1;
    }), (0, Xn.t)(this)).subscribe(k));
  }
  dispatchStatusUpdate($, k, ce, Ye, Tt, ai) {
    if (!ce.code || !ce.resultCompositionUid) return;
    const Zi = ce.code,
      Po = ce.resultCompositionUid;
    switch (Ye) {
      case Re.Ai.Completed:
      case Re.vd.Issued:
        this.store.dispatch(u({
          patientId: $,
          medicineId: k,
          slot: ce,
          code: Zi,
          resultCompositionUid: Po
        }));
        break;
      case Re.Ai.Cancelled:
        this.store.dispatch(T({
          patientId: $,
          medicineId: k,
          slot: ce,
          code: Zi,
          resultCompositionUid: Po,
          cancelReason: Tt || "Отменено пользователем"
        }));
        break;
      case Re.Ai.Assigned:
        ce.status === Re.Ai.Completed || ce.status === Re.vd.Issued ? this.store.dispatch(R({
          patientId: $,
          medicineId: k,
          slot: ce,
          code: Zi,
          isBaseTherapy: ai
        })) : ce.status === Re.Ai.Cancelled && this.store.dispatch(B({
          patientId: $,
          medicineId: k,
          slot: ce,
          code: Zi
        }));
    }
  }
});
