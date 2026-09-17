// Extracted class; external identifiers resolve in modules/53564.js.
(class {
  constructor() {
    this.isDrawerMode = !1, this.closeMorsePanelEvent = new e.vpe(), this.fb = (0, e.f3M)(m.qu), this.messageService = (0, e.f3M)(O.Jv), this.cdr = (0, e.f3M)(e.sBO), this.store = (0, e.f3M)(x.yh), this.compositionsBaseService = (0, e.f3M)(ke.W), this.sharedDataService = (0, e.f3M)(J.g), this.sumResult = 0, this.initMorseScaleValue = null, this.yesNoItems = [{
      id: 1,
      name: "Да"
    }, {
      id: 2,
      name: "Нет"
    }], this.yesNoDefault = this.yesNoItems[1], this.independenceWalkingItems = [{
      id: 1,
      name: "(0)Ходит сам (даже если при помощи кого-то), или строгий постельный режим, неподвижно лежит"
    }, {
      id: 2,
      name: "(15)Костыли/ходунки/трость"
    }, {
      id: 3,
      name: "(30)Опирается о мебель или стены для поддержки"
    }], this.gaitItems = [{
      id: 1,
      name: "(0)Нормальная (ходит свободно)"
    }, {
      id: 2,
      name: "(10)Слегка несвободная (ходит с остановками, шаги короткие, иногда с задержкой)"
    }, {
      id: 3,
      name: "(20)Нарушения (не может встать, ходит опираясь, смотрит вниз)"
    }], this.mentalStateItems = [{
      id: 1,
      name: "(0)Знает о своей способности двигаться"
    }, {
      id: 2,
      name: "(15)Не знает или забывает, что нужна помощь при движении"
    }], this.independenceWalkingDefault = this.independenceWalkingItems[0], this.gaitDefault = this.gaitItems[0], this.mentalStateDefault = this.mentalStateItems[0], this.compositionValueMap = {
      isFall: this.yesNoItems,
      hasConcomitantDiseases: this.yesNoItems,
      hasIntravenousTherapy: this.yesNoItems,
      independenceWalking: this.independenceWalkingItems,
      gait: this.gaitItems,
      mentalState: this.mentalStateItems
    }, this.morseForm = this._initForm(), this.calculateMorse(this.morseForm.getRawValue()), this.morseForm.valueChanges.pipe((0, C.t)(this)).subscribe(Je => {
      this.calculateMorse(Je), this.getControl("interpretation").patchValue(this.interpretationSumResult, {
        emitEvent: !1
      });
    });
  }
  ngOnInit() {
    this.isDrawerMode && (this.morseScaleValue && this.applyMorseScaleValue(this.morseScaleValue), !this.isViewMode && this.store.select(ye.HJ).pipe((0, C.t)(this), (0, u.h)(Boolean), (0, T.U)(Je => (this.fullData = Je, Je?.data?.careCase)), (0, u.h)(Boolean), (0, R.w)(Je => (this.careCase = Je, this.compositionsBaseService.getPatientById(Je.actualPatientId))), (0, R.w)(Je => this.compositionsBaseService.getEhr(Je.ehrId)), (0, R.w)(Je => (this.ehr = Je, this._loadMorseFromComposition(Je)))).subscribe());
  }
  ngOnChanges(Je) {
    (0, Le.up)(Je.morseScaleValue) && this.applyMorseScaleValue(this.morseScaleValue);
  }
  applyMorseScaleValue(Je) {
    if (!Je) return void this.applyYesNoDefaults();
    const Xt = Object.fromEntries(Object.entries(Je).filter(([Nn, Pi]) => !!Pi).map(([Nn, Pi]) => {
      if (Object.keys(this.compositionValueMap).includes(Nn)) {
        const Ii = "string" == typeof Pi ? Pi : Pi?.name;
        return Ii ? [Nn, this.compositionValueMap[Nn].find(yi => yi?.name.toLowerCase() === String(Ii).toLowerCase()) ?? Pi] : [Nn, Pi];
      }
      return [Nn, Pi];
    }));
    this.morseForm.patchValue(Xt, {
      emitEvent: !1
    }), this.calculateMorse(this.morseForm.getRawValue()), this.initMorseScaleValue = Xt, this.morseValue = (0, W.yE)(Le.iQ, Xt), this.viewValuesMap = [{
      label: "Падал ли пациент в последние 3 мес?",
      value: this.displayFn(Xt?.isFall)
    }, {
      label: "Есть ли сопутствующее заболевание?",
      value: this.displayFn(Xt?.hasConcomitantDiseases)
    }, {
      label: "Принимает внутривенное вливание/принимает гепарин, фраксипарин",
      value: this.displayFn(Xt?.hasIntravenousTherapy)
    }, {
      label: "Самостоятельность при ходьбе",
      value: this.displayFn(Xt?.independenceWalking)
    }, {
      label: "Походка",
      value: this.displayFn(Xt?.gait)
    }, {
      label: "Психическое состояние",
      value: this.displayFn(Xt?.mentalState)
    }], this.cdr.markForCheck();
  }
  _loadMorseFromComposition(Je) {
    const Xt = (0, Y.li)(this.fullData?.data),
      Nn = String(Xt.compositionUid ?? this.fullData?.data?.scales?.compositionUid ?? "");
    return Nn ? Je.getMedicalEntry(Nn).pipe((0, y.b)(Pi => {
      if (Pi.isEmpty()) return void (this.morseScaleValue || this.applyYesNoDefaults());
      const yi = new ae.CE(Pi.getRoot()).parsedFromCompositionData?.morse;
      yi ? this.applyMorseScaleValue(yi) : this.morseScaleValue || this.applyYesNoDefaults();
    })) : (this.morseScaleValue || this.applyYesNoDefaults(), (0, B.of)(null));
  }
  applyYesNoDefaults() {
    this.morseForm.patchValue({
      isFall: this.yesNoDefault,
      hasConcomitantDiseases: this.yesNoDefault,
      hasIntravenousTherapy: this.yesNoDefault,
      independenceWalking: this.independenceWalkingDefault,
      gait: this.gaitDefault,
      mentalState: this.mentalStateDefault
    }), this.calculateMorse(this.morseForm.getRawValue()), this.cdr.markForCheck();
  }
  compare(Je, Xt) {
    return Je?.id === Xt?.id;
  }
  displayFn(Je) {
    return Je?.name.replace(")", ") ");
  }
  displayMorseSumResultColor(Je) {
    return (0, fe._Y)(Je);
  }
  displayDeclension(Je) {
    return (0, fe.S$)(Je, "балл");
  }
  calculateMorse(Je) {
    let Xt = 0;
    const Nn = 1 === Je.isFall?.id ? 25 : 0,
      Pi = 1 === Je.hasConcomitantDiseases?.id ? 15 : 0,
      Ii = 1 === Je.hasIntravenousTherapy?.id ? 20 : 0;
    switch (Xt = Nn + Pi + Ii, this.getControl("isFallBall").patchValue(Nn, {
      emitEvent: !1
    }), this.getControl("hasConcomitantDiseasesBall").patchValue(Pi, {
      emitEvent: !1
    }), this.getControl("hasIntravenousTherapyBall").patchValue(Ii, {
      emitEvent: !1
    }), Je.independenceWalking?.id) {
      case 2:
        this.getControl("independenceWalkingBall").patchValue(15, {
          emitEvent: !1
        }), Xt += 15;
        break;
      case 3:
        this.getControl("independenceWalkingBall").patchValue(30, {
          emitEvent: !1
        }), Xt += 30;
        break;
      default:
        this.getControl("independenceWalkingBall").patchValue(0, {
          emitEvent: !1
        });
    }
    switch (Je.gait?.id) {
      case 2:
        this.getControl("gaitBall").patchValue(10, {
          emitEvent: !1
        }), Xt += 10;
        break;
      case 3:
        this.getControl("gaitBall").patchValue(20, {
          emitEvent: !1
        }), Xt += 20;
        break;
      default:
        this.getControl("gaitBall").patchValue(0, {
          emitEvent: !1
        });
    }
    const yi = 2 === Je.mentalState?.id ? 15 : 0;
    Xt += yi, this.getControl("mentalStateBall").patchValue(yi, {
      emitEvent: !1
    }), this.sumResult = Xt, this.getControl("sum").setValue(this.sumResult, {
      emitEvent: !1
    });
  }
  getControl(Je) {
    return (0, Le.YV)(this.morseForm, Je);
  }
  checkAndApprove() {
    this.morseForm.invalid ? this.messageService.warning("Обязательные поля не заполнены!") : (this.calculateMorse(this.morseForm.getRawValue()), this.closeMorsePanelEvent.emit(this.morseForm.getRawValue()));
  }
  onClear() {
    this.morseForm.reset({
      isFall: this.yesNoDefault,
      hasConcomitantDiseases: this.yesNoDefault,
      hasIntravenousTherapy: this.yesNoDefault,
      independenceWalking: this.independenceWalkingDefault,
      gait: this.gaitDefault,
      mentalState: this.mentalStateDefault
    }), this.calculateMorse(this.morseForm.getRawValue()), this.cdr.markForCheck();
  }
  onSave() {
    if (this.morseForm.invalid) return this.messageService.warning("Обязательные поля не заполнены!"), this.morseForm.markAllAsTouched(), void this.cdr.markForCheck();
    this.store.select(F.S8).pipe((0, C.t)(this), (0, u.h)(Boolean), (0, j.q)(1), (0, R.w)(Je => {
      this.calculateMorse(this.morseForm.getRawValue());
      const Xt = (0, W.yE)(Le.iQ, {
        ...this.morseForm.getRawValue(),
        sum: this.sumResult,
        interpretation: this.interpretationSumResult,
        scaleMorseTime: new Date(),
        owner: (0, G.Kd)(Je)
      });
      return this.ehr && this.careCase?.careCaseId ? this.ehr.createMedicalEntry("shkaly", this.careCase.careCaseId).pipe((0, R.w)(Nn => {
        const Pi = new ae.CE(Nn.getRoot());
        return Pi.setInitialValues(this.careCase.careCaseId, {
          owner: Xt.owner
        }), Pi.setValues((0, W.zb)((0, W.yE)(Le.iQ, Xt)), "morse"), Nn.sign();
      }), (0, y.b)(() => {
        this.reloadListAction && this.sharedDataService.runActionSubject(this.reloadListAction), this.messageService.success("Данные Морсе успешно внесены"), this.parentOverlayRef?.close();
      })) : (this.closeMorsePanelEvent.emit(Xt), this.parentOverlayRef?.close(), (0, B.of)(null));
    })).subscribe();
  }
  get interpretationSumResult() {
    return this.sumResult >= 0 && this.sumResult <= 24 ? "Нет риска падений" : this.sumResult >= 25 && this.sumResult <= 50 ? "Низкий риск падений" : "Высокий риск падений";
  }
  _initForm() {
    return this.fb.group({
      isFall: [this.yesNoDefault],
      isFallBall: [null],
      hasConcomitantDiseases: [this.yesNoDefault, [m.kI.required]],
      hasConcomitantDiseasesBall: [null],
      hasIntravenousTherapy: [this.yesNoDefault, [m.kI.required]],
      hasIntravenousTherapyBall: [null],
      independenceWalking: [this.independenceWalkingDefault],
      independenceWalkingBall: [null],
      gait: [this.gaitDefault],
      gaitBall: [null],
      mentalState: [this.mentalStateDefault],
      mentalStateBall: [null],
      sum: [null],
      interpretation: [null],
      owner: [null],
      scaleMorseTime: [null]
    });
  }
});
