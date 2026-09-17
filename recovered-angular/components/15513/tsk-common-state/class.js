// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.fb = (0, e.f3M)(pr.qu), this.cdr = (0, e.f3M)(e.sBO), this.disabled = !1, this.isTablet = !1, this.showValidationErrors = !1, this.commonStateFormChanges = new e.vpe(), this.isCommonStateValid = new e.vpe(), this.isNews2Expanded = !0, this.isMorseExpanded = !1, this.news2Confirmed = !1, this.commonStateForm = this._initCommonStateForm(), this.isProductiveContactsItems = [{
      id: 1,
      name: "Есть"
    }, {
      id: 2,
      name: "Нет"
    }], this.isOrientedTimeSpaceItems = [{
      id: 1,
      name: "Да"
    }, {
      id: 2,
      name: "Нет"
    }], this.isExaminationPainItems = [{
      id: 1,
      name: "Нет"
    }, {
      id: 2,
      name: "Есть"
    }], this.isVisibleBleedingItems = [{
      id: 1,
      name: "Есть"
    }, {
      id: 2,
      name: "Нет"
    }], this.isPsychomotorAgitationItems = [{
      id: 1,
      name: "Есть"
    }, {
      id: 2,
      name: "Нет"
    }], this.isBreathItems = [{
      id: 1,
      name: "Свободное"
    }, {
      id: 2,
      name: "Затрудненное"
    }], this.isDyspneaItems = [{
      id: 1,
      name: "Есть"
    }, {
      id: 2,
      name: "Нет"
    }], this.compositionValueMap = {
      productiveContact: this.isProductiveContactsItems,
      orientedTimeSpace: this.isOrientedTimeSpaceItems,
      examinationPain: this.isExaminationPainItems,
      visibleBleeding: this.isVisibleBleedingItems,
      psychomotorAgitation: this.isPsychomotorAgitationItems,
      breath: this.isBreathItems,
      dyspnea: this.isDyspneaItems
    };
  }
  getControl(s) {
    return (0, nf.YV)(this.commonStateForm, s);
  }
  ngOnChanges(s) {
    if ((0, Du.up)(s.commonStateValue)) {
      const o = Object.fromEntries(Object.entries(this.commonStateValue).filter(([D, Z]) => !!Z).map(([D, Z]) => Object.keys(this.compositionValueMap).includes(D) ? [D, this.compositionValueMap[D].find(X => X?.name.toLowerCase() === Z.toLowerCase())] : [D, Z]));
      this.commonStateForm.patchValue(o, {
        emitEvent: !1,
        onlySelf: !0
      }), this.morseValue = o.morse, this.news2Confirmed = (0, r_.Rc)(o.news2), this.syncConditionalValidators();
    }
    this.disabled ? this.commonStateForm.disable({
      emitEvent: !1,
      onlySelf: !0
    }) : this.commonStateForm.enable({
      emitEvent: !1,
      onlySelf: !0
    }), this.disabled || this.syncConditionalValidators(), this.emitValidationState(), (0, Du.up)(s.showValidationErrors) && this.showValidationErrors && (this.commonStateForm.markAllAsTouched(), this.cdr.markForCheck());
  }
  showControlError(s) {
    return q4(this.getControl(s), this.showValidationErrors);
  }
  ngAfterViewInit() {
    this.showValidationErrors && (this.commonStateForm.markAllAsTouched(), this.cdr.markForCheck()), this.commonStateForm.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.cdr.markForCheck(), this.commonStateFormChanges.emit((0, Oc.zb)((0, Oc.yE)(fu.dK, s))), this.isCommonStateValid.emit(this.commonStateForm.valid);
    }), this.syncConditionalValidators(), this.emitValidationState(), this.getControl("visibleBleeding").valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.syncVisibleBleedingValidators(s);
    }), this.getControl("examinationPain").valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.syncExaminationPainCode(s);
    });
  }
  syncConditionalValidators() {
    this.syncExaminationPainCode(this.getControl("examinationPain").value), this.syncVisibleBleedingValidators(this.getControl("visibleBleeding").value);
  }
  syncExaminationPainCode(s) {
    s?.id && this.getControl("examinationPainCode").patchValue({
      1: "at0.0.163",
      2: "at0.0.164"
    }[s.id], {
      emitEvent: !1
    });
  }
  syncVisibleBleedingValidators(s) {
    ["bleedingDescription", "bleedingLocalization"].forEach(o => {
      const D = this.getControl(o);
      1 === s?.id ? D.setValidators([pr.kI.required]) : D.clearValidators(), D.updateValueAndValidity({
        emitEvent: !1
      });
    });
  }
  emitValidationState() {
    this.commonStateForm.updateValueAndValidity({
      emitEvent: !1
    });
    const s = this.disabled || this.news2Confirmed && (0, r_.Rc)(this.getControl("news2").value);
    this.isCommonStateValid.emit(this.disabled || this.commonStateForm.valid && s);
  }
  openNews2Panel() {
    this.isNews2Expanded = !0, this.isNews2ViewMode || (this.news2Confirmed = !1, this.emitValidationState());
  }
  get isNews2SectionValid() {
    return this.news2Confirmed && (0, r_.Rc)(this.getControl("news2").value);
  }
  get isNews2ViewMode() {
    const s = new Date(),
      o = new Date(this.indexData?.initialChecklist?.timeCommitted),
      D = s > new Date(o.setMinutes(o.getMinutes() + 5));
    return !!this.commonStateValue?.news2?.compositionUid && this.indexData?.news2?.compositionUid !== this.commonStateValue?.news2?.compositionUid || D || this.commonStateForm.disabled;
  }
  get isMorseViewMode() {
    const s = this.indexData?.initialChecklist?.timeCommitted,
      o = this.indexData?.scales?.scaleMorseTime,
      D = this.commonStateValue?.morse?.scaleMorseTime;
    return s && (!o || o.getTime() > D.getTime()) || this.commonStateForm.disabled;
  }
  get formatPointNews2() {
    return (0, yg.bA)(this.news2Form004Values?.news2?.sum);
  }
  compare(s, o) {
    return s?.id === o?.id;
  }
  morseFormHandler(s) {
    this.isMorseExpanded = !1, s = (0, Oc.zb)((0, Oc.yE)(Du.iQ, s)), this.getControl("morse").patchValue(s), this.morseValue = s;
  }
  news2FormHandler(s) {
    this.isNews2Expanded = !1;
    const o = "confirmed" in s ? s : {
      confirmed: !0,
      news2: s?.news2 ?? null,
      form004: s?.form004 ?? null,
      anthropometry: s?.anthropometry ?? null
    };
    this.getControl("news2").patchValue((0, r_.sZ)(o.news2)), this.getControl("form004").patchValue((0, r_.sZ)(o.form004)), this.getControl("anthropometry").patchValue((0, r_.sZ)(o.anthropometry ?? null)), this.news2Confirmed = (0, r_.Rc)(o.news2), this.emitValidationState(), this.cdr.markForCheck();
  }
  get news2Form004Values() {
    return {
      news2: this.getControl("news2").value,
      form004: this.getControl("form004").value,
      anthropometry: this.getControl("anthropometry").value
    };
  }
  _initCommonStateForm() {
    return this.fb.group({
      productiveContact: [null, [pr.kI.required]],
      orientedTimeSpace: [null, [pr.kI.required]],
      examinationPain: [null, [pr.kI.required]],
      examinationPainCode: [null, [pr.kI.required]],
      visibleBleeding: [null, [pr.kI.required]],
      bleedingDescription: [null],
      bleedingLocalization: [null],
      psychomotorAgitation: [null, [pr.kI.required]],
      breath: [null, [pr.kI.required]],
      dyspnea: [null, [pr.kI.required]],
      morse: [null],
      news2: [null],
      form004: [null],
      anthropometry: [null]
    });
  }
  get news2ColorSchemaClass() {
    let s = {
      temperature: 0,
      sys: 0,
      hr: 0,
      rr: 0,
      sp: 0,
      oxygenation: 0,
      consciousness: 0
    };
    return Object.keys(s).forEach(D => {
      s = {
        ...s,
        [D]: (0, yg.fW)(D, this.news2Form004Values.news2[D])
      };
    }), (0, yg.r5)(s, !1);
  }
  displayMorseSumResultColor(s) {
    return (0, nf._Y)(s);
  }
  displayDeclension(s) {
    return (0, nf.S$)(s, "балл");
  }
});
