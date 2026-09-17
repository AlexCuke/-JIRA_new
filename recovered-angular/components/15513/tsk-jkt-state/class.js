// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.cdr = (0, e.f3M)(e.sBO), this.fb = (0, e.f3M)(pr.qu), this.showValidationErrors = !1, this.jktStateFormChanges = new e.vpe(), this.isJKTStateValid = new e.vpe(), this.nutritionTypes = [{
      id: 1,
      name: "Рот"
    }, {
      id: 2,
      name: "Оростому"
    }, {
      id: 3,
      name: "Эзофагостому"
    }, {
      id: 4,
      name: "Гастростому"
    }, {
      id: 5,
      name: "Еюностому"
    }, {
      id: 6,
      name: "НГЗ"
    }, {
      id: 7,
      name: "Назоинтестинальный зонд"
    }, {
      id: 8,
      name: "Гастроинстестинальный зонд"
    }], this.mucosaType = [{
      id: 1,
      name: "Чистая"
    }, {
      id: 2,
      name: "С изменениями"
    }], this.hasDentures = [{
      id: 2,
      name: "Есть"
    }, {
      id: 1,
      name: "Нет"
    }], this.denturesLocalizations = [{
      id: 1,
      name: "Верхние"
    }, {
      id: 2,
      name: "Нижние"
    }], this.jktFormGroup = this._initForm(), this.compositionValueMap = {
      nutrition: this.nutritionTypes,
      mucosa: this.mucosaType,
      dentures: this.hasDentures,
      denturesLocalization: this.denturesLocalizations
    };
  }
  getControl(s) {
    return (0, nf.YV)(this.jktFormGroup, s);
  }
  displayDent(s) {
    return s.name;
  }
  ngOnChanges(s) {
    if ((0, Du.up)(s.jktStateValue)) {
      const o = Object.fromEntries(Object.entries(this.jktStateValue).filter(([D, Z]) => !!Z).map(([D, Z]) => Object.keys(this.compositionValueMap).includes(D) ? (Z = "denturesLocalization" === D && Z.length ? Z.split("|") : Z) instanceof Array ? [D, Z.map(X => this.compositionValueMap[D].find(oe => oe?.name?.trim().toLowerCase() === X?.trim().toLowerCase()))] : [D, this.compositionValueMap[D].find(X => X?.name.toLowerCase() === Z.toLowerCase())] : [D, Z]));
      this.jktFormGroup.patchValue(o, {
        emitEvent: !1
      }), this.syncDependentFields(), this.cdr.detectChanges();
    }
    this.disabled ? this.jktFormGroup.disable({
      emitEvent: !1
    }) : this.jktFormGroup.enable({
      emitEvent: !1
    }), this.disabled || this.syncDependentFields(), this.emitValidationState(), (0, Du.up)(s.showValidationErrors) && this.showValidationErrors && (this.jktFormGroup.markAllAsTouched(), this.cdr.markForCheck());
  }
  showControlError(s) {
    return q4(this.getControl(s), this.showValidationErrors);
  }
  compare(s, o) {
    return s?.id === o?.id;
  }
  ngAfterViewInit() {
    this.showValidationErrors && (this.jktFormGroup.markAllAsTouched(), this.cdr.markForCheck()), this.cdr.detectChanges(), this.getControl("nutrition").valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      s && !s.length && this.getControl("nutrition").reset(null, {
        emitEvent: !1
      });
    }), this.getControl("dentures").valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.syncDenturesDependentFields(s);
    }), this.jktFormGroup.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.cdr.markForCheck(), this.jktStateFormChanges.emit((0, Oc.zb)((0, Oc.yE)(fu.Kn, s))), this.isJKTStateValid.emit(this.jktFormGroup.valid);
    }), this.syncDependentFields(), this.emitValidationState();
  }
  syncDenturesOrgPart(s) {
    const o = this.getControl("orgPart");
    2 === s?.id ? o.setValue("челюсть", {
      emitEvent: !1
    }) : o.reset(null, {
      emitEvent: !1
    });
  }
  syncDenturesLocalizationValidators(s) {
    const o = this.getControl("denturesLocalization");
    2 === s?.id ? o.setValidators([pr.kI.minLength(1)]) : (o.clearValidators(), o.reset([], {
      emitEvent: !1
    })), o.updateValueAndValidity({
      emitEvent: !1
    });
  }
  syncDenturesDependentFields(s) {
    this.syncDenturesOrgPart(s), this.syncDenturesLocalizationValidators(s);
  }
  syncDependentFields() {
    const s = this.getControl("dentures").value;
    this.syncDenturesDependentFields(s);
  }
  emitValidationState() {
    this.jktFormGroup.updateValueAndValidity({
      emitEvent: !1
    }), this.isJKTStateValid.emit(this.disabled || this.jktFormGroup.valid);
  }
  _initForm() {
    return this.fb.group({
      nutrition: [null, [pr.kI.required]],
      mucosa: [this.mucosaType[0], [pr.kI.required]],
      mucosaComment: [null],
      dentures: [this.hasDentures[1], [pr.kI.required]],
      denturesLocalization: [[]],
      orgPart: [null]
    });
  }
});
