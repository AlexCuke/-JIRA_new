// Extracted class; external identifiers resolve in modules/74645.js.
(class {
  constructor(Kt, Vt, Pn, pi, xo, No, Ko, Mi) {
    this._data = Kt, this.modalService = Vt, this.breakpointObserver = Pn, this.sanitizer = pi, this.messageService = xo, this.cdr = No, this.cathetersCompositionService = Ko, this.catheterController = Mi, this.modalRef = (0, e.f3M)(m.Rn), this.catTypes = x.yR, this.isTablet = !1, this.changed = !1, this.dates = [], this.blocks = [], this.allRows = [], this.filteredElements = [], this.totalContentWidth = "100%", this.leftColumnWidth = 180, this.highlightedDates = [], this.apiCatheters = [], this.tableContentWidth = 0, this.isSyncingScroll = !1, this.catheterType = x.yR, this.cathetersStatus = [{
      value: "all",
      label: "Все"
    }, {
      value: "active",
      label: "Активные"
    }, {
      value: "completed",
      label: "Завершенные"
    }], this.filtersForm = new B.cw({
      status: new B.NI(["all"])
    }), this.data = (0, u.yE)(x.QL, Kt);
  }
  ngOnInit() {
    this.breakpointObserver.observe(R.ok).pipe((0, T.t)(this)).subscribe(Kt => {
      this.isTablet = Kt.matches, this.cdr.markForCheck();
    }), this.calculateHighlightDates(), this.loadObservationData(), this.filtersForm.get("status")?.valueChanges.pipe((0, T.t)(this)).subscribe(() => {
      this.applyStatusFilter(), this.cdr.markForCheck();
    });
  }
  ngAfterViewChecked() {
    if (this.tableContent?.nativeElement) {
      const Kt = this.tableContent.nativeElement.scrollWidth;
      this.tableContentWidth !== Kt && setTimeout(() => this.tableContentWidth = Kt, 0);
    }
  }
  onTableScroll(Kt) {
    this.isSyncingScroll || (this.isSyncingScroll = !0, this.topScrollbar?.nativeElement && (this.topScrollbar.nativeElement.scrollLeft = Kt.target.scrollLeft), this.isSyncingScroll = !1);
  }
  onTopScrollbarScroll(Kt) {
    this.isSyncingScroll || (this.isSyncingScroll = !0, this.tableScrollContainer?.nativeElement && (this.tableScrollContainer.nativeElement.scrollLeft = Kt.target.scrollLeft), this.isSyncingScroll = !1);
  }
  resolveSheetCareCaseId() {
    return this.cathetersCompositionService.resolveCareCaseId(this.data) || this.cathetersCompositionService.resolveCareCaseId({
      careCase: this.data?.careCase
    }) || this.cathetersCompositionService.resolveCareCaseId(this._data);
  }
  fetchCathetersByCareCaseId() {
    const Kt = this.resolveSheetCareCaseId();
    return Kt ? this.catheterController.findCathetersByCareCaseId(Kt).pipe((0, oi.q)(1), (0, yo.U)(Vt => Array.isArray(Vt) ? Vt : null), (0, yo.U)(Vt => Vt && Vt.filter(Pn => !this.isFutureInstall(Pn.installDt))), (0, Qi.K)(Vt => (console.warn("[Catheters] FindCathetersByCareCaseId failed, fallback to index", Vt), (0, hs.of)(null)))) : (console.warn("[Catheters] FindCathetersByCareCaseId skipped: careCaseId is empty"), (0, hs.of)(null));
  }
  applyFindItems(Kt) {
    const Vt = () => {
      this.apiCatheters = [];
      const Pn = (0, We.EN)(this.data).filter(pi => !this.isFutureInstall(pi?.installDt));
      this.setRows((0, We.F1)(Pn));
    };
    if (Array.isArray(Kt)) {
      this.apiCatheters = Kt;
      try {
        this.setRows((0, We.AS)(Kt));
      } catch (Pn) {
        return console.error("[Catheters] buildObservationRowsFromApi failed", Pn), void Vt();
      }
      this.cdr.detectChanges();
    } else Vt();
  }
  loadObservationData() {
    this.fetchCathetersByCareCaseId().pipe((0, T.t)(this)).subscribe(Kt => this.applyFindItems(Kt));
  }
  resolveApiSource(Kt) {
    const Vt = Kt.source;
    if (!this.apiCatheters.length) return Kt.source;
    if (Vt?.catheterId) {
      const It = this.apiCatheters.find(At => At.catheterId === Vt.catheterId);
      if (It) return It;
    }
    const Pn = Vt?.protocolId || Vt?.compositionUid || Vt.CompositionUid || Vt.cuid;
    if (Pn) {
      const It = this.apiCatheters.find(At => At.protocolId === Pn || At.compositionUid === Pn);
      if (It) return It;
    }
    const pi = Vt?.installDt || Vt.installDatetimeSet || Vt.protocoldate,
      xo = pi ? new Date(pi).getTime() : NaN,
      No = `${Vt?.locus || ""}`.trim().toLowerCase(),
      Ko = (0, We.jj)(Vt?.catheterType || Vt.CateterType || Kt.typeLabel);
    return this.apiCatheters.find(It => {
      const At = (0, We.jj)(It.catheterType) === Ko,
        _n = `${It.locus || ""}`.trim().toLowerCase() === No,
        it = It.installDt ? new Date(It.installDt).getTime() : NaN,
        _e = Number.isFinite(xo) && Number.isFinite(it) && xo === it;
      return At && _n && _e;
    }) || Kt.source;
  }
  setRows(Kt) {
    this.allRows = Kt, this.applyStatusFilter(), this.cdr.markForCheck();
  }
  resolveStatusFilter() {
    const Kt = this.filtersForm.get("status")?.value,
      Vt = Array.isArray(Kt) ? Kt[0] : Kt;
    return "active" === Vt || "completed" === Vt ? Vt : "all";
  }
  applyStatusFilter() {
    const Kt = this.resolveStatusFilter();
    this.filteredElements = this.allRows.filter(xo => "active" === Kt ? xo.active : "completed" !== Kt || !xo.active);
    const Vt = new Set();
    this.filteredElements.forEach(xo => {
      xo.values.forEach(No => {
        No?.date && Vt.add(No.date);
      }), this.addInstallToEndDateRange(xo, Vt);
    }), this.filteredElements.some(xo => xo.active) && this.highlightedDates.forEach(xo => Vt.add(xo));
    const Pn = new Date().getFullYear(),
      pi = xo => {
        const [No, Ko] = xo.split(".").map(Number);
        return new Date(Pn, Ko - 1, No).getTime();
      };
    this.dates = Array.from(Vt).sort((xo, No) => pi(No) - pi(xo)), this.normalizeTableCells(this.filteredElements);
  }
  addInstallToEndDateRange(Kt, Vt) {
    const Pn = Kt.source,
      pi = Pn?.installDt;
    if (!pi) return;
    const xo = new Date(pi);
    if (Number.isNaN(xo.getTime())) return;
    const No = Kt.active ? new Date() : Pn?.deletionTime || Pn?.lastTreatment || xo,
      Ko = No instanceof Date ? No : new Date(No);
    if (Number.isNaN(Ko.getTime())) return;
    const Mi = new Date(xo.getFullYear(), xo.getMonth(), xo.getDate()),
      It = new Date(Ko.getFullYear(), Ko.getMonth(), Ko.getDate());
    for (; Mi.getTime() <= It.getTime();) {
      const At = String(Mi.getDate()).padStart(2, "0"),
        _n = String(Mi.getMonth() + 1).padStart(2, "0");
      Vt.add(`${At}.${_n}`), Mi.setDate(Mi.getDate() + 1);
    }
  }
  calculateHighlightDates() {
    const Kt = new Date(),
      Vt = new Date();
    Vt.setDate(Kt.getDate() - 1);
    const Pn = pi => `${String(pi.getDate()).padStart(2, "0")}.${String(pi.getMonth() + 1).padStart(2, "0")}`;
    this.highlightedDates = [Pn(Kt), Pn(Vt)];
  }
  isHighlighted(Kt) {
    return this.highlightedDates.includes(Kt);
  }
  normalizeTableCells(Kt) {
    const Vt = new Map();
    Kt.forEach(Pn => {
      const pi = Pn.catheterName || "Неизвестный катетер";
      let xo = Pn.locus || "";
      xo && (xo = xo.charAt(0).toUpperCase() + xo.slice(1));
      const It = [pi, xo, Pn.source.catheterSize ? `${Pn.source.catheterSize}` : ""].filter(gt => !!gt).join(" <span class=\"table-title-dot\">&bull;</span> "),
        At = this.sanitizer.bypassSecurityTrustHtml(It),
        _n = `${pi}_${xo}_${Pn.source?.catheterId || Pn.source?.protocolId || Pn.source?.compositionUid || Pn.source?.cuid || ""}`;
      Vt.has(_n) || Vt.set(_n, {
        title: At,
        typeLabel: pi,
        source: this.resolveSowingForSource(Pn.source),
        active: Pn.active,
        rows: []
      });
      const it = new Map();
      Pn.values.forEach(gt => {
        if (!gt?.date) return;
        it.has(gt.date) || it.set(gt.date, []);
        const ni = (0, We.k4)(gt.value);
        "" === ni || null == ni || it.get(gt.date).push(ni);
      });
      const _e = this.dates.map(gt => it.has(gt) ? it.get(gt) : []);
      Vt.get(_n).rows.push({
        parameterName: Pn.parameterName,
        values: _e
      });
    }), this.blocks = Array.from(Vt.values());
  }
  syncAllScrolls(Kt) {
    const Vt = Kt.target,
      Pn = Vt.scrollLeft;
    this.topScroll?.nativeElement !== Vt && this.topScroll?.nativeElement.scrollLeft !== Pn && (this.topScroll.nativeElement.scrollLeft = Pn), this.datesScroll?.nativeElement !== Vt && this.datesScroll?.nativeElement.scrollLeft !== Pn && (this.datesScroll.nativeElement.scrollLeft = Pn), this.valuesScrollRows.forEach(pi => {
      pi.nativeElement !== Vt && pi.nativeElement.scrollLeft !== Pn && (pi.nativeElement.scrollLeft = Pn);
    });
  }
  get patientDescription() {
    return (0, We.ez)(this.data);
  }
  get desktopBlocks() {
    return this.blocks;
  }
  resolveSowingForSource(Kt) {
    const Vt = Kt;
    if (Vt?.sowing) return Kt;
    const pi = (Array.isArray(Vt?.careRecords) ? Vt.careRecords : []).filter(Ko => !!Ko?.sowing);
    if (!pi.length) return Kt;
    const xo = pi.reduce((Ko, Mi) => {
      const It = Ko.updated ? new Date(Ko.updated).getTime() : 0;
      return (Mi.updated ? new Date(Mi.updated).getTime() : 0) >= It ? Mi : Ko;
    });
    return {
      ...Kt,
      sowing: xo.sowing
    };
  }
  trackByOptionValue(Kt, Vt) {
    return Vt.value;
  }
  formatInstallDate(Kt) {
    return (0, We.zE)(Kt);
  }
  isInstallOverdue(Kt) {
    return (0, We.Sk)(Kt);
  }
  getInstallOverdueTooltip(Kt) {
    return (0, We.e9)(Kt);
  }
  formatCellValue(Kt, Vt) {
    return (0, We.Wu)(Kt, Vt);
  }
  isUrineColorDeviation(Kt, Vt) {
    return "Цвет мочи" === Vt && "Откл" === (0, We.Wu)(Kt, Vt);
  }
  parseHeaderDate(Kt) {
    return (0, We.Ii)(Kt);
  }
  isWeekend(Kt) {
    if (!Kt) return !1;
    const Vt = Kt instanceof Date ? Kt : new Date(Kt);
    if (Number.isNaN(Vt.getTime())) return !1;
    const Pn = Vt.getDay();
    return 0 === Pn || 6 === Pn;
  }
  isWeekendDateStr(Kt) {
    const Vt = this.parseHeaderDate(Kt);
    return !!Vt && this.isWeekend(Vt);
  }
  openMonitoringFromSheet(Kt, Vt, Pn = []) {
    const pi = Kt || this.highlightedDates[0],
      xo = Pn.some(Ko => "" !== Ko && null != Ko),
      No = !!Kt && this.isHighlighted(Kt) && Vt.active && !this.isMonitoringDateBeforeInstall(Kt, Vt);
    !xo && !No || this.openMonitoringWithApiSource(Vt, pi, !No);
  }
  isMonitoringDateBeforeInstall(Kt, Vt) {
    const Pn = Vt?.source,
      pi = Pn?.installDt || Pn?.installDatetimeSet;
    if (!pi || !Kt) return !1;
    const xo = new Date(pi),
      No = (0, We.Ii)(Kt);
    return !(!No || Number.isNaN(xo.getTime())) && new Date(No.getFullYear(), No.getMonth(), No.getDate()).getTime() < new Date(xo.getFullYear(), xo.getMonth(), xo.getDate()).getTime();
  }
  openMonitoringWithApiSource(Kt, Vt, Pn) {
    const pi = No => {
        const Ko = !Pn && Kt.active && !(0, We.I_)(No),
          Mi = (0, We.PL)(No, Vt, {
            allowSourceFallback: (0, We.gr)(Kt.typeLabel)
          });
        this.openCatheterMonitoringDialog({
          type: Kt.typeLabel,
          source: No,
          installDatetimeSet: No?.installDt || No?.installDatetimeSet,
          compositionUid: Mi,
          protocolId: No?.protocolId,
          careCase: this.data?.careCase,
          patientMovement: this.data?.patientMovement,
          monitoringDate: Vt,
          isViewMode: !Ko
        });
      },
      xo = this.resolveApiSource(Kt);
    Array.isArray(xo?.careRecords) ? pi(xo) : this.fetchCathetersByCareCaseId().pipe((0, T.t)(this)).subscribe(No => {
      Array.isArray(No) && (this.apiCatheters = No), pi(this.resolveApiSource(Kt));
    });
  }
  openCatheterDialog(Kt) {
    const Vt = "peripheral" === Kt ? "Периферический" : "Мочевой";
    this.modalService.open(new d.X(_s.V), {
      width: this.isTablet ? "100vw" : "576px",
      disableClose: !0,
      data: {
        ...this.data,
        preferredCatheterName: Vt,
        allowedCatheterTypes: [Vt]
      }
    }).afterClose().pipe((0, T.t)(this)).subscribe(Pn => {
      if (!Pn) return;
      const pi = this.resolveSheetCareCaseId(),
        xo = this.cathetersCompositionService.resolvePatientId({
          careCase: this.data?.careCase
        }) || this.cathetersCompositionService.resolvePatientId(this.data);
      pi && xo ? this.cathetersCompositionService.installCatheter(Pn, pi, xo).pipe((0, Qi.K)(No => (this.messageService.error(this.cathetersCompositionService.formatError(No, "Не удалось сохранить установку катетера")), console.error("catheter install error", No), Qo.E)), (0, Kr.b)(() => this.messageService.success(`\u041a\u0430\u0442\u0435\u0442\u0435\u0440 \xab${Pn.catheterName}\xbb \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d`))).subscribe(() => {
        this.changed = !0, this.loadObservationData();
      }) : this.messageService.error("Не удалось определить пациента для сохранения установки катетера");
    });
  }
  openCatheterMonitoringDialog(Kt) {
    this.modalService.open(new d.X(Ps), {
      width: this.isTablet ? "100vw" : "1252px",
      disableClose: !0,
      data: Kt
    }).afterClose().pipe((0, T.t)(this)).subscribe(Vt => {
      Vt && this.handleMonitoringResult(Vt, Kt);
    });
  }
  handleMonitoringResult(Kt, Vt) {
    const Pn = this.cathetersCompositionService.resolvePatientId(Vt);
    Pn ? this.cathetersCompositionService.handleMonitoringAction(Kt, Vt, Pn).pipe((0, Qi.K)(pi => (this.messageService.error(this.cathetersCompositionService.formatError(pi, {
      save: "Не удалось сохранить данные наблюдения",
      sign: "Не удалось подписать данные наблюдения",
      unsign: "Не удалось снять подпись",
      annul: "Не удалось аннулировать катетер"
    }[Kt?.action || "save"] || "Не удалось выполнить операцию")), console.error("catheter monitoring error", pi), Qo.E)), (0, Kr.b)(() => {
      this.messageService.success({
        save: "Данные наблюдения сохранены",
        sign: "Данные наблюдения подписаны",
        unsign: "Подпись снята",
        annul: "Катетер аннулирован"
      }[Kt?.action || "save"] || "Операция выполнена"), this.data.isListView && (this.changed = !0, this.close());
    })).subscribe(pi => {
      this.applyMonitoringResultLocally(Kt, Vt, pi), this.changed = !0;
    }) : this.messageService.error("Не удалось определить пациента для сохранения данных");
  }
  applyMonitoringResultLocally(Kt, Vt, Pn) {
    const pi = (0, We.pn)(Pn && "function" == typeof Pn.getUid ? Pn.getUid() : Vt?.compositionUid),
      xo = `${Vt?.monitoringDate || Kt?.monitoringDateKey || ""}`.trim() || (0, We.k7)(Kt?.monitoringDate);
    if (pi && xo) {
      const It = Vt?.source || Vt,
        At = (0, We.CV)(It) || `${Vt?.protocolId || Vt?.compositionUid || ""}`.trim();
      (0, We.Em)(At, xo, pi), this.patchApiCatheterCareRecord(It, xo, pi, Kt), Vt.compositionUid = pi;
    }
    const No = (0, We.EN)(this.data),
      Ko = (0, We.Fz)(No, Vt, Kt);
    if (!this.data) return;
    const Mi = this.data.catheter;
    this.data.catheter = Array.isArray(Mi) ? Ko : {
      ...(Mi || {}),
      elements: Ko
    }, this.loadObservationData(), this.cdr.markForCheck();
  }
  patchApiCatheterCareRecord(Kt, Vt, Pn, pi) {
    if (!this.apiCatheters.length || !Kt || !Pn) return;
    const xo = `${Kt.catheterId || ""}`.trim(),
      No = `${Kt.protocolId || Kt.compositionUid || ""}`.trim(),
      Ko = this.apiCatheters.find(ni => !!(xo && ni.catheterId === xo || No && (ni.protocolId === No || ni.compositionUid === No)));
    if (!Ko) return;
    const Mi = (0, We.DM)(Vt) || (0, We.DM)(pi?.monitoringDate) || void 0,
      At = (Array.isArray(pi?.catheterTreatment) ? pi.catheterTreatment : []).map(ni => ni?.catheterTreatmentTime).find(ni => null != ni && "" !== `${ni}`.trim()),
      _n = Array.isArray(pi?.scaleAssessment) ? pi.scaleAssessment.map(ni => ni?.assessment).filter(ni => null != ni && "" !== `${ni}`.trim()).map(ni => `${ni}`) : [],
      it = {
        compositionUid: Pn,
        careDate: Mi,
        treatmentTime: At ? `${At}` : void 0,
        treatmentVal: At ? `${At}` : void 0,
        venipunctureAssessment: _n[0],
        venipunctureAssessments: _n.length ? _n : void 0,
        updated: new Date().toISOString()
      },
      _e = Array.isArray(Ko.careRecords) ? [...Ko.careRecords] : [],
      gt = _e.findIndex(ni => {
        const So = (0, We.pn)(ni.compositionUid),
          Er = (0, We.k7)(ni.careDate);
        return So === Pn || !!Vt && Er === Vt;
      });
    gt >= 0 ? _e[gt] = {
      ..._e[gt],
      ...it
    } : _e.push(it), Ko.careRecords = _e;
  }
  openAdaptiveCatheterMonitoringDialog(Kt, Vt, Pn = []) {
    this.openMonitoringFromSheet(Kt, Vt, Pn);
  }
  close() {
    this.modalRef.close(this.changed);
  }
  isFutureInstall(Kt) {
    if (!Kt) return !1;
    const Vt = Kt instanceof Date ? Kt : new Date(Kt);
    return !Number.isNaN(Vt.getTime()) && Vt.getTime() > Date.now();
  }
});
