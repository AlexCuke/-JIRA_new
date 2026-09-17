// Extracted class; external identifiers resolve in modules/74645.js.
(class {
  get isAnnulWindowAvailable() {
    return !this.isViewMode && !this.isDeleted && (this.isUrinary || this.isPeripheral);
  }
  constructor(Kt = (0, e.f3M)(B.qu), Vt, Pn, pi = (0, e.f3M)(G.Jv), xo, No, Ko, Mi) {
    this.fb = Kt, this.modalRef = Vt, this.confirmationModalService = Pn, this.messageService = pi, this.breakpointObserver = xo, this.cdr = No, this.userContext = Ko, this.data = Mi, this.catTypes = x.yR, this.isTablet = !1, this.isViewMode = !1, this.installDateLabel = "—", this.deletedDateLabel = "—", this.typeLabel = "", this.isUrinary = !1, this.isPeripheral = !1, this.isCentral = !1, this.isDeleted = !1, this.isDeletedCatheter = !1, this.currentUser = null, this.installDateCtrl = new B.NI({
      value: null,
      disabled: !0
    }), this.installTimeCtrl = new B.NI({
      value: null
    }), this.deletedDateCtrl = new B.NI(null, [B.kI.required]), this.deletedTimeCtrl = new B.NI(null, [B.kI.required]), this.yesNoValues = ["Нет", "Да"], this.deletedReasons = qe.Yp, this.complicationsOptions = qe.UJ, this.venipunctureLocations = qe.Fz, this.urinaryCatheterFormField = {
      installDatetimeSet: [null],
      catheterTreatment: new B.Oe([]),
      inflammation: [null],
      userAddInflammationInfo: [null],
      discharge: [null],
      userAddDischargeInfo: [null],
      urineColor: [null],
      userAddUrineColorInfo: [null],
      complications: [null],
      additionalInformation: [null],
      addInfoTime: [null],
      userAddInfo: [null],
      deletedDatetimeSet: [null],
      deletedReason: [null],
      userDelete: [null],
      userDeleteCode: [null],
      monitoringDateTime: [null],
      monitoringDate: [null],
      currentUser: [null],
      currentUserCode: [null]
    }, this.peripheralCatheterFormField = {
      installDatetimeSet: [null],
      catheterTreatment: new B.Oe([]),
      scaleAssessment: new B.Oe([]),
      deletedDatetimeSet: [null],
      deletedReason: [null],
      venipunctureLocations: [[]],
      userDelete: [null],
      userDeleteCode: [null],
      monitoringDateTime: [null],
      monitoringDate: [null],
      currentUser: [null],
      currentUserCode: [null]
    }, this.centralCatheterFormField = {
      installDatetimeSet: [null],
      monitoringDate: [null],
      heparinMark: [null],
      userAddHeparinMark: [null],
      catheterTreatment: new B.Oe([]),
      deletedTimeSet: [null],
      deletedDatetimeSet: [null],
      deletedReason: [null],
      userDelete: [null],
      userDeleteCode: [null],
      catheterCultureTime: [null],
      userAddCatheterCultureTime: [null],
      currentUser: [null],
      currentUserCode: [null]
    }, this.urinaryCatheterForm = this.fb.group(this.urinaryCatheterFormField), this.peripheralCatheterForm = this.fb.group(this.peripheralCatheterFormField), this.centralCatheterForm = this.fb.group(this.centralCatheterFormField), this.typeLabel = this.resolveTypeLabel(Mi), this.isUrinary = (0, We.Cj)(this.typeLabel), this.isPeripheral = (0, We.gr)(this.typeLabel), this.isCentral = (0, We.V5)(this.typeLabel) || !this.isUrinary && !this.isPeripheral, this.deletedReasons = this.isUrinary ? qe.sV : this.isCentral ? qe.Dx : qe.Yp, this.isViewMode = !!Mi?.isViewMode, this.form = this.isUrinary ? this.urinaryCatheterForm : this.isPeripheral ? this.peripheralCatheterForm : this.centralCatheterForm, this.userContext.getUserContext().pipe((0, T.t)(this)).subscribe(It => {
      if (this.currentUser = It, !It) return;
      const At = new Se.I(It),
        _n = null != It?.employeeId ? `${It.employeeId}` : null,
        it = this.isUrinary ? _n : At.officialName;
      this.getControl(this.form, "userDelete")?.patchValue(it, {
        emitEvent: !1
      }), this.getControl(this.form, "userDeleteCode")?.patchValue(_n, {
        emitEvent: !1
      });
    });
  }
  ngOnInit() {
    this.ensureDefaultFormRows(), this.applyIncomingData();
  }
  ngAfterViewInit() {
    this.breakpointObserver.observe(R.ok).pipe((0, T.t)(this)).subscribe(Kt => {
      this.isTablet = Kt.matches, this.cdr.markForCheck();
    }), this.deletedDateCtrl.valueChanges.pipe((0, T.t)(this)).subscribe(Kt => {
      this.mergeDeletedDateTime(Kt, this.deletedTimeCtrl.value);
    }), this.deletedTimeCtrl.valueChanges.pipe((0, T.t)(this)).subscribe(Kt => {
      if (!Kt) return;
      const Vt = Kt.split(":")[0],
        Pn = Kt.split(":")[1];
      +Vt > 23 || +Pn > 59 ? (this.deletedTimeCtrl.reset(null, {
        emitEvent: !1
      }), this.deletedTimeCtrl.setErrors({
        invalidTime: !0
      }), this.deletedTimeCtrl.markAsTouched(), this.deletedTimeCtrl.updateValueAndValidity()) : this.mergeDeletedDateTime(this.deletedDateCtrl.value, Kt);
    }), this.cdr.detectChanges();
  }
  ensureDefaultFormRows() {
    this.catheterTreatmentFormArray.length || this.catheterTreatmentFormArray.push(this.createCatheterTreatment()), this.isPeripheral && !this.scaleAssessmentFormArray.length && this.scaleAssessmentFormArray.push(this.createScaleAssessment());
  }
  get catheterTreatmentFormArray() {
    return this.getControl(this.form, "catheterTreatment");
  }
  get scaleAssessmentFormArray() {
    return this.getControl(this.form, "scaleAssessment");
  }
  createCatheterTreatment() {
    return this.fb.group({
      catheterTreatmentTime: [null, B.kI.required],
      userAddCatheterTreatmentTime: [null]
    });
  }
  createScaleAssessment() {
    return this.fb.group({
      assessment: [null],
      userAddAssessment: [null]
    });
  }
  getFormGroup(Kt) {
    return Kt;
  }
  get viewTreatmentTimes() {
    return this.catheterTreatmentFormArray.controls.map(Kt => this.getFormGroup(Kt).get("catheterTreatmentTime")?.value).filter(Kt => !!Kt);
  }
  get viewScaleAssessments() {
    return this.isPeripheral ? this.scaleAssessmentFormArray.controls.map(Kt => this.getFormGroup(Kt).get("assessment")?.value).filter(Kt => null != Kt && "" !== Kt) : [];
  }
  getViewValue(Kt, Vt = "—") {
    const Pn = this.getControl(this.form, Kt)?.value;
    return null == Pn || "" === Pn ? Vt : `${Pn}`;
  }
  extractTimeOnly(Kt) {
    if (!Kt) return null;
    const Pn = `${Kt}`.trim().match(/^(\d{1,2}):(\d{2})/);
    return Pn ? `${Pn[1].padStart(2, "0")}:${Pn[2]}` : null;
  }
  formatViewDateTime(Kt) {
    return (0, We.S$)(Kt);
  }
  addCatheterTreatment() {
    this.catheterTreatmentFormArray.push(this.createCatheterTreatment()), this.cdr.markForCheck();
  }
  addCatheterScaleAssessment() {
    this.scaleAssessmentFormArray.push(this.createScaleAssessment()), this.cdr.markForCheck();
  }
  onDeleteCatheter() {
    this.isDeleted = !0;
    const Kt = new Date();
    this.deletedDateCtrl.setValue(Kt, {
      emitEvent: !1
    }), this.deletedDateLabel = (0, We.vi)(Kt);
    const Vt = le()(Kt).format("HH:mm");
    this.deletedTimeCtrl.setValue(Vt, {
      emitEvent: !1
    }), this.mergeDeletedDateTime(Kt, Vt), this.cdr.markForCheck();
  }
  mergeDeletedDateTime(Kt, Vt) {
    if (!Kt || !Vt) return;
    const [Pn, pi] = Vt.split(":");
    if (void 0 === Pn || void 0 === pi) return;
    const xo = this.getControl(this.form, "deletedDatetimeSet");
    if (!xo) return;
    const No = le()(Kt).hours(+Pn).minutes(+pi).seconds(0).milliseconds(0).toDate();
    xo.setValue(No);
    const Ko = this.getControl(this.form, "deletedTimeSet");
    Ko && Ko.setValue(Vt);
  }
  getControl(Kt, Vt) {
    return (0, n.YV)(Kt, Vt);
  }
  displayFn(Kt) {
    return Kt.name;
  }
  save() {
    this.validateBeforeClose() && this.modalRef.close({
      action: "save",
      type: this.typeLabel,
      ...this.form.getRawValue(),
      monitoringDate: this.getControl(this.form, "monitoringDate")?.value || (0, We.Ii)(this.data?.monitoringDate || ""),
      monitoringDateKey: this.data?.monitoringDate || ""
    });
  }
  saveAndSign() {
    this.validateBeforeClose() && this.modalRef.close({
      action: "sign",
      type: this.typeLabel,
      ...this.form.getRawValue(),
      monitoringDate: this.getControl(this.form, "monitoringDate")?.value || (0, We.Ii)(this.data?.monitoringDate || ""),
      monitoringDateKey: this.data?.monitoringDate || ""
    });
  }
  unsign() {
    this.modalRef.close({
      action: "unsign",
      type: this.typeLabel
    });
  }
  openDeletedDialog() {
    this.confirmationModalService.openDialog({
      title: "Аннулирование данных",
      message: "При аннулировании данных о катетере будут удалены все медицинские записи, созданные по данному катетеру в медкарте пациента. Подтвердить аннулирование?",
      buttonTitle: "Аннулировать",
      cancelButtonTitle: "Отмена",
      size: 512,
      panelClass: "catheter-annul-confirm-modal"
    }).pipe((0, T.t)(this), (0, Rt.h)(Vt => !!Vt)).subscribe(() => {
      this.isDeleted = !0, this.modalRef.close({
        action: "annul",
        type: this.typeLabel
      });
    });
  }
  applyIncomingData() {
    const Kt = this.data?.installDatetimeSet || this.data?.formValue?.installDatetimeSet || this.data?.source?.installDt || this.data?.source?.installDatetimeSet || null;
    if (this.installDateLabel = (0, We.vi)(Kt), Kt) {
      const No = new Date(Kt);
      if (!Number.isNaN(No.getTime())) {
        const Mi = "string" == typeof Kt && /\+03:00$/.test(Kt.trim()) ? le()(No).toDate() : le()(No).subtract(3, "hours").toDate();
        this.installDateCtrl.setValue(Mi, {
          emitEvent: !1
        }), this.installTimeCtrl.setValue(le()(Mi).format("HH:mm"), {
          emitEvent: !1
        }), this.getControl(this.form, "installDatetimeSet")?.setValue(No);
      }
    }
    const Vt = this.data?.formValue;
    Vt && "object" == typeof Vt && this.patchMonitoringFormValue(Vt);
    const Pn = this.data?.source;
    if (Pn) {
      const No = Pn,
        Ko = this.data?.monitoringDate || "",
        Mi = (0, We.n5)(No, Ko),
        At = (0, We.yP)(No).length > 0 ? this.flattenForMonitoringDate(No, Ko) : Pn;
      this.patchFormFromSource(At, Mi);
    }
    const pi = Pn?.lastMonitoringForm;
    pi && "object" == typeof pi && !(0, We.yP)(Pn).length && this.patchMonitoringFormValue(pi);
    const xo = (0, We.Ii)(this.data?.monitoringDate || "");
    xo && this.getControl(this.form, "monitoringDate")?.setValue(xo, {
      emitEvent: !1
    }), this.getControl(this.form, "monitoringDateTime")?.setValue(new Date(), {
      emitEvent: !1
    });
  }
  flattenForMonitoringDate(Kt, Vt) {
    const Pn = (0, We.n5)(Kt, Vt);
    if (!Pn.length) return {
      ...Kt,
      careRecords: Kt.careRecords
    };
    const pi = Pn.reduce((Mi, It) => this.scoreCareRecord(It) >= this.scoreCareRecord(Mi) ? It : Mi),
      xo = Pn.reduce((Mi, It) => {
        const At = {
          ...Mi
        };
        return Object.keys(It).forEach(_n => {
          const it = It[_n];
          null != it && "" !== it && (At[_n] = it);
        }), At;
      }, {
        ...pi
      }),
      No = (0, We.SY)(Pn),
      Ko = (0, We.N4)(Pn);
    return {
      ...Kt,
      ...xo,
      catheterId: Kt.catheterId,
      careCaseId: Kt.careCaseId,
      catheterType: Kt.catheterType,
      compositionUid: xo.compositionUid || pi.compositionUid || Kt.compositionUid,
      protocolId: xo.catheterProtocolId || pi.catheterProtocolId || Kt.protocolId,
      installDt: Kt.installDt,
      locus: Kt.locus,
      placeAssessment: Ko[0] ?? xo.venipunctureAssessment ?? pi.venipunctureAssessment ?? Kt.placeAssessment,
      treatmentTime: No[0] ?? xo.treatmentTime ?? pi.treatmentTime,
      treatmentVal: No[0] ?? xo.treatmentVal ?? pi.treatmentVal,
      deletionTime: xo.deletionTime || pi.deletionTime || Kt.deletionTime,
      deletionReason: xo.deletionReason || pi.deletionReason,
      comment: xo.comment || pi.comment || Kt.comment,
      status: Kt.status,
      updated: xo.updated || pi.updated || Kt.updated,
      careRecords: Kt.careRecords,
      monitoringTreatmentTimes: No,
      monitoringAssessments: Ko
    };
  }
  scoreCareRecord(Kt) {
    let Vt = 0;
    (0, We.tI)(Kt).length && (Vt += 2), (Kt.treatmentTime || Kt.treatmentVal) && (Vt += 1), null != Kt.inflammation && "" !== `${Kt.inflammation}`.trim() && (Vt += 2), null != Kt.excretion && "" !== `${Kt.excretion}`.trim() && (Vt += 2), Kt.urineColor && (Vt += 2), Kt.complication && (Vt += 1), Kt.extraInformation && (Vt += 1), null != Kt.heparinInfo && "" !== `${Kt.heparinInfo}`.trim() && (Vt += 2);
    const Pn = Kt.updated ? new Date(Kt.updated).getTime() : 0;
    return 1e6 * Vt + (Number.isFinite(Pn) ? Pn : 0);
  }
  patchFormFromSource(Kt, Vt = []) {
    if (Kt.deletionTime) {
      const It = new Date(Kt.deletionTime),
        At = this.formatViewDateTime(Kt?.sowing);
      this.isDeletedCatheter = "deleted" === Kt.status, At && this.getControl(this.form, "catheterCultureTime")?.setValue(At), Number.isNaN(It.getTime()) || (this.isDeleted = !0, this.deletedDateLabel = (0, We.vi)(It), this.deletedDateCtrl.setValue(It, {
        emitEvent: !1
      }), this.deletedTimeCtrl.setValue(le()(It).format("HH:mm"), {
        emitEvent: !1
      }), this.getControl(this.form, "deletedDatetimeSet")?.setValue(It));
    }
    if (Kt.deletionReason && this.getControl(this.form, "deletedReason")?.setValue(Kt.deletionReason, {
      emitEvent: !1
    }), !Vt.length) return void this.resetDaySpecificFormFields();
    const Pn = Kt.monitoringTreatmentTimes?.length ? Kt.monitoringTreatmentTimes : (0, We.SY)(Vt),
      pi = Kt.treatmentTime ? [(0, We.k4)(Kt.treatmentTime)] : [],
      xo = Pn.length ? Pn : pi.filter(Boolean);
    xo.length && (this.catheterTreatmentFormArray.clear(), xo.forEach(It => {
      this.catheterTreatmentFormArray.push(this.fb.group({
        catheterTreatmentTime: [It],
        userAddCatheterTreatmentTime: [null]
      }));
    }));
    const No = Kt.monitoringAssessments?.length ? Kt.monitoringAssessments : (0, We.N4)(Vt),
      Ko = null != Kt.placeAssessment && "" !== `${Kt.placeAssessment}`.trim() ? [`${Kt.placeAssessment}`] : [],
      Mi = No.length ? No : Ko;
    if (this.isPeripheral && Mi.length && (this.scaleAssessmentFormArray.clear(), Mi.forEach(It => {
      this.scaleAssessmentFormArray.push(this.fb.group({
        assessment: [It],
        userAddAssessment: [null]
      }));
    })), this.isCentral) {
      const It = this.asYesNoLabel(Kt.heparinInfo);
      It && this.getControl(this.form, "heparinMark")?.setValue(It, {
        emitEvent: !1
      });
    }
    if (this.isUrinary) {
      const It = this.asYesNoLabel(Kt.inflammation),
        At = this.asYesNoLabel(Kt.excretion);
      It && this.getControl(this.form, "inflammation")?.setValue(It, {
        emitEvent: !1
      }), At && this.getControl(this.form, "discharge")?.setValue(At, {
        emitEvent: !1
      }), Kt.urineColor && this.getControl(this.form, "urineColor")?.setValue(Kt.urineColor, {
        emitEvent: !1
      }), Kt.complication && this.getControl(this.form, "complications")?.setValue(Kt.complication, {
        emitEvent: !1
      }), Kt.extraInformation && this.getControl(this.form, "additionalInformation")?.setValue(Kt.extraInformation, {
        emitEvent: !1
      });
    }
  }
  resetDaySpecificFormFields() {
    this.catheterTreatmentFormArray.clear(), this.catheterTreatmentFormArray.push(this.createCatheterTreatment()), this.isPeripheral && (this.scaleAssessmentFormArray.clear(), this.scaleAssessmentFormArray.push(this.createScaleAssessment())), this.isCentral && this.getControl(this.form, "heparinMark")?.setValue(null, {
      emitEvent: !1
    }), this.isUrinary && ["inflammation", "discharge", "urineColor", "complications", "additionalInformation"].forEach(Kt => {
      this.getControl(this.form, Kt)?.setValue(null, {
        emitEvent: !1
      });
    });
  }
  asYesNoLabel(Kt) {
    if (null == Kt || "" === Kt) return null;
    if ("boolean" == typeof Kt) return Kt ? "Да" : "Нет";
    const Vt = `${Kt}`.trim().toLowerCase();
    return ["да", "true", "1", "y", "yes"].includes(Vt) ? "Да" : ["нет", "false", "0", "n", "no"].includes(Vt) ? "Нет" : `${Kt}`;
  }
  resolveTypeLabel(Kt) {
    return "string" == typeof Kt ? Kt : Kt?.type ? Kt.type : (0, We.XN)(Kt?.source?.catheterType || Kt?.source?.CateterType || Kt?.catheterType || Kt?.CateterType);
  }
  validateBeforeClose() {
    if (this.form.markAllAsTouched(), this.isDeleted) {
      const Kt = this.getControl(this.form, "deletedReason")?.value;
      if (!this.deletedDateCtrl.valid || !this.deletedTimeCtrl.valid || !Kt) return this.deletedDateCtrl.markAsTouched(), this.deletedTimeCtrl.markAsTouched(), this.getControl(this.form, "deletedReason")?.markAsTouched(), this.messageService.warning("Обязательные поля не заполнены!"), !1;
      if (this.getControl(this.form, "deletedDatetimeSet")?.value || this.mergeDeletedDateTime(this.deletedDateCtrl.value, this.deletedTimeCtrl.value), !this.getControl(this.form, "userDeleteCode")?.value) return this.messageService.error("Не удалось определить сотрудника для отметки об удалении"), !1;
    }
    return !(!this.validateTreatmentTimesAgainstInstall() || !this.validateCatheterTreatmentTimes());
  }
  validateTreatmentTimesAgainstInstall() {
    const Kt = this.getControl(this.form, "installDatetimeSet")?.value,
      Vt = Kt ? new Date(Kt) : null;
    if (!Vt || Number.isNaN(Vt.getTime())) return !0;
    const Pn = this.getControl(this.form, "monitoringDate")?.value || (0, We.Ii)(this.data?.monitoringDate || "");
    if (!Pn) return !0;
    let pi = !1,
      xo = !1;
    return this.catheterTreatmentFormArray.controls.forEach(No => {
      const Ko = this.getFormGroup(No).get("catheterTreatmentTime");
      if (!Ko) return;
      const Mi = `${Ko.value ?? ""}`.trim();
      if (!Mi) return;
      const [It, At] = Mi.split(":"),
        _n = Number(It),
        it = Number(At);
      void 0 === It || void 0 === At || Number.isNaN(_n) || Number.isNaN(it) || _n > 23 || it > 59 ? pi = !0 : le()(Pn).hours(_n).minutes(it).seconds(0).milliseconds(0).toDate().getTime() < Vt.getTime() && (xo = !0);
    }), pi ? (this.messageService.warning("Некорректный формат времени обработки, ожидается ЧЧ:ММ (00:00 - 23:59)"), !1) : !xo || (this.messageService.warning("Время обработки не может быть раньше времени установки катетера"), !1);
  }
  validateCatheterTreatmentTimes() {
    let Kt = !1;
    return this.catheterTreatmentFormArray.controls.forEach(Vt => {
      const Pn = this.getFormGroup(Vt).get("catheterTreatmentTime");
      Pn && (Pn.markAsTouched(), Pn.updateValueAndValidity(), Pn.invalid && (Kt = !0));
    }), !Kt || (this.messageService.warning("Не указано время обработки катетера"), !1);
  }
  patchMonitoringFormValue(Kt) {
    const {
      catheterTreatment: Vt,
      scaleAssessment: Pn,
      treatment: pi,
      ...xo
    } = Kt;
    this.form.patchValue(xo, {
      emitEvent: !1
    });
    const No = Vt || pi;
    Array.isArray(No) && No.length && (this.catheterTreatmentFormArray.clear(), No.forEach(Ko => {
      this.catheterTreatmentFormArray.push(this.fb.group({
        catheterTreatmentTime: [Ko?.catheterTreatmentTime ?? null],
        userAddCatheterTreatmentTime: [Ko?.userAddCatheterTreatmentTime ?? null]
      }));
    })), this.isPeripheral && Array.isArray(Pn) && Pn.length && (this.scaleAssessmentFormArray.clear(), Pn.forEach(Ko => {
      this.scaleAssessmentFormArray.push(this.fb.group({
        assessment: [Ko?.assessment ?? null],
        userAddAssessment: [Ko?.userAddAssessment ?? null]
      }));
    }));
  }
  onAssessmentPicked(Kt) {
    Promise.resolve().then(() => Kt.dropdown?.close());
  }
});
