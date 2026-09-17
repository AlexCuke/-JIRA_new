// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.showValidationErrors = !1, this.odaStateFormChanges = new e.vpe(), this.isODAStateValid = new e.vpe(), this.fb = (0, e.f3M)(pr.qu), this.cdr = (0, e.f3M)(e.sBO), this.odaStates = fu.h7, this.commonStateVariants = [{
      id: 1,
      name: "Да"
    }, {
      id: 2,
      name: "Нет"
    }], this.rehabilitationsStateVariants = [{
      id: 1,
      name: "Трость"
    }, {
      id: 2,
      name: "Ходунки"
    }, {
      id: 3,
      name: "Кресло-каталку"
    }], this.odaStateForm = this._initForm(), this.compositionsValuesList = ["forcedPosition", "peculiarities", "absenceLimbs", "fracture", "contracture", "prosthetics", "other"], this.peculiaritiesControlsNames = ["absenceLimbs", "fracture", "contracture", "prosthetics", "other"], this.odaStateForm.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.odaStateFormChanges.emit((0, Oc.zb)((0, Oc.yE)(fu.t6, s))), this.emitValidationState();
    }), this.emitValidationState(), this.formCtrlHandler();
  }
  ngOnChanges(s) {
    if ((0, Du.up)(s.odaStateValue)) {
      const o = Object.fromEntries(Object.entries(this.odaStateValue).filter(([D, Z]) => !!Z).map(([D, Z]) => "usingMeansRehabilitation" === D ? [D, this.rehabilitationsStateVariants.find(X => X.name.toLowerCase() === Z.toLowerCase())] : this.compositionsValuesList.includes(D) ? [D, this.commonStateVariants.find(X => X.name.toLowerCase() === Z.toLowerCase())] : [D, Z]));
      this.odaStateForm.patchValue(o, {
        emitEvent: !1
      }), this.syncConditionalValidators();
    }
    this.disabled ? this.odaStateForm.disable({
      emitEvent: !1
    }) : (this.odaStateForm.enable({
      emitEvent: !1
    }), this.syncConditionalValidators()), this.emitValidationState(), (0, Du.up)(s.showValidationErrors) && this.showValidationErrors && (this.odaStateForm.markAllAsTouched(), this.cdr.markForCheck());
  }
  showControlError(s) {
    return q4(this.getControl(s), this.showValidationErrors);
  }
  ngAfterViewInit() {
    this.showValidationErrors && (this.odaStateForm.markAllAsTouched(), this.cdr.markForCheck()), this.syncConditionalValidators(), this.emitValidationState();
  }
  getControl(s) {
    return (0, nf.YV)(this.odaStateForm, s);
  }
  formCtrlHandler() {
    this._odaPanelCtrlHandler();
  }
  compare(s, o) {
    return s?.id === o?.id;
  }
  _initForm() {
    return this.fb.group({
      forcedPosition: [null, [pr.kI.required]],
      forcedPositionDescription: [null],
      peculiarities: [null],
      absenceLimbs: [null],
      absenceLimbsDescription: [null],
      fracture: [null],
      fractureDescription: [null],
      contracture: [null],
      contractureLocalization: [null],
      prosthetics: [null],
      prostheticsDescription: [null],
      other: [null],
      otherComment: [null],
      usingMeansRehabilitation: [null]
    });
  }
  _handlePeculiaritiesCtrl(s) {
    const o = 1 === s?.id;
    this.peculiaritiesControlsNames.forEach(D => {
      o ? (this.getControl(D).disable({
        emitEvent: !1
      }), this.getControl(D).reset(null, {
        emitEvent: !1
      })) : this.getControl(D).enable({
        emitEvent: !1
      });
    });
  }
  _odaPanelCtrlHandler() {
    this.getControl("peculiarities").valueChanges.pipe((0, Kn.t)(this)).subscribe(s => this._handlePeculiaritiesCtrl(s)), this.peculiaritiesControlsNames.forEach(s => {
      this.getControl(s).valueChanges.pipe((0, Kn.t)(this)).subscribe(o => {
        1 === o?.id ? (this.getControl("peculiarities").disable({
          emitEvent: !1
        }), this.getControl("peculiarities").patchValue(this.commonStateVariants.find(({
          id: Z
        }) => 2 === Z), {
          emitEvent: !1
        })) : this.peculiaritiesControlsNames.every(X => {
          const oe = this.getControl(X).value;
          return 2 === oe?.id || !oe;
        }) && this.getControl("peculiarities").enable({
          emitEvent: !1
        });
      });
    }), fu.h7.filter(s => !!s.expandLabel && !!s.expandFormControlName).forEach(s => {
      this.getControl(s.headerFormControlName).valueChanges.pipe((0, Kn.t)(this)).subscribe(o => {
        const D = this.getControl(s.expandFormControlName);
        this.applyExpandFieldValidators(o, D);
      });
    });
  }
  syncConditionalValidators() {
    this.syncPeculiaritiesCrossState(), this.syncExpandFieldValidators();
  }
  syncPeculiaritiesCrossState() {
    if (this.peculiaritiesControlsNames.some(o => 1 === this.getControl(o).value?.id)) return this.getControl("peculiarities").disable({
      emitEvent: !1
    }), void this.getControl("peculiarities").patchValue(this.commonStateVariants.find(({
      id: o
    }) => 2 === o), {
      emitEvent: !1
    });
    this._handlePeculiaritiesCtrl(this.getControl("peculiarities").value);
  }
  syncExpandFieldValidators() {
    fu.h7.filter(s => !!s.expandLabel && !!s.expandFormControlName).forEach(s => {
      const o = this.getControl(s.headerFormControlName).value,
        D = this.getControl(s.expandFormControlName);
      this.applyExpandFieldValidators(o, D);
    });
  }
  applyExpandFieldValidators(s, o) {
    1 === s?.id ? o.setValidators([pr.kI.required]) : o.clearValidators(), o.updateValueAndValidity({
      emitEvent: !1
    });
  }
  emitValidationState() {
    this.odaStateForm.updateValueAndValidity({
      emitEvent: !1
    }), this.isODAStateValid.emit(this.disabled || this.odaStateForm.valid);
  }
});
