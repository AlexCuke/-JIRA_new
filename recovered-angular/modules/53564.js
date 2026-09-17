// Extracted from main; webpack module 53564. Factory, not an ES module.
((Ae, V, i) => {
  var je;
  i.d(V, {
    D: () => Ee
  });
  var t = i(97582),
    e = i(94650),
    a = i(36895),
    m = i(24006),
    d = i(9073),
    M = i(19550),
    b = i(93278),
    A = i(76500),
    N = i(32643),
    I = i(15091),
    O = i(91854),
    L = i(6676),
    C = i(5264),
    v = i(5416),
    f = i(54976),
    E = i(47313),
    h = i(20891),
    x = i(89653),
    u = i(39300),
    T = i(54004),
    R = i(63900),
    B = i(39646),
    y = i(18505),
    j = i(95698),
    W = i(50494),
    F = i(97215),
    Le = i(39453),
    ke = i(15394),
    J = i(21846),
    fe = i(34874),
    ye = i(73745),
    ae = i(4760),
    Y = i(91455),
    G = i(95450);
  function te(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 14), e.NdJ("click", function (Pi) {
        e.CHM(Xt);
        const Ii = e.oxw();
        return Ii.closeMorsePanelEvent.emit(Ii.initMorseScaleValue), e.KtG(Pi.stopPropagation());
      }), e._UZ(1, "lu-svg-icon", 15), e.qZA();
    }
    2 & Mt && (e.xp6(1), e.Q6J("size", 16));
  }
  function pe(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "span", 16)(1, "span"), e._uU(2, "Оценена в"), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.ALo(5, "luDateFormatter"), e.qZA(), e._UZ(6, "span", 17), e.TgZ(7, "span"), e._uU(8), e.qZA()()), 2 & Mt) {
      const Xt = e.oxw();
      e.xp6(4), e.Oqu(e.xi3(5, 2, Xt.morseValue.scaleMorseTime, "HH:mm")), e.xp6(4), e.hij("", null == Xt.morseValue ? null : Xt.morseValue.ownerInitials, " — Медсестра");
    }
  }
  function be(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 30), e.NdJ("click", function () {
        const Ii = e.CHM(Xt).$implicit,
          yi = e.oxw(2);
        return e.KtG(yi.getControl("isFall").patchValue(Ii));
      }), e._uU(1), e.qZA();
    }
    if (2 & Mt) {
      const Xt = Je.$implicit;
      e.ekj("morse-form__segment-no", 2 === Xt.id), e.Q6J("value", Xt), e.xp6(1), e.hij(" ", Xt.name, " ");
    }
  }
  function le(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 30), e.NdJ("click", function () {
        const Ii = e.CHM(Xt).$implicit,
          yi = e.oxw(2);
        return e.KtG(yi.getControl("hasConcomitantDiseases").patchValue(Ii));
      }), e._uU(1), e.qZA();
    }
    if (2 & Mt) {
      const Xt = Je.$implicit;
      e.ekj("morse-form__segment-no", 2 === Xt.id), e.Q6J("value", Xt), e.xp6(1), e.hij(" ", Xt.name, " ");
    }
  }
  function n(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 30), e.NdJ("click", function () {
        const Ii = e.CHM(Xt).$implicit,
          yi = e.oxw(2);
        return e.KtG(yi.getControl("hasIntravenousTherapy").patchValue(Ii));
      }), e._uU(1), e.qZA();
    }
    if (2 & Mt) {
      const Xt = Je.$implicit;
      e.ekj("morse-form__segment-no", 2 === Xt.id), e.Q6J("value", Xt), e.xp6(1), e.hij(" ", Xt.name, " ");
    }
  }
  function Se(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & Mt) {
      const Xt = Je.$implicit,
        Nn = e.oxw(3);
      e.xp6(1), e.Oqu(Nn.displayFn(Xt));
    }
  }
  function qe(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "lu-data-list", 31), e.YNc(1, Se, 2, 1, "ng-template", null, 32, e.W1O), e.qZA()), 2 & Mt) {
      const Xt = e.MAs(2),
        Nn = e.oxw(2);
      e.Q6J("items", Nn.independenceWalkingItems)("itemContent", Xt)("displayValueFn", Nn.displayFn.bind(Nn));
    }
  }
  function Rt(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & Mt) {
      const Xt = Je.$implicit,
        Nn = e.oxw(3);
      e.xp6(1), e.Oqu(Nn.displayFn(Xt));
    }
  }
  function We(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "lu-data-list", 31), e.YNc(1, Rt, 2, 1, "ng-template", null, 33, e.W1O), e.qZA()), 2 & Mt) {
      const Xt = e.MAs(2),
        Nn = e.oxw(2);
      e.Q6J("items", Nn.gaitItems)("itemContent", Xt)("displayValueFn", Nn.displayFn.bind(Nn));
    }
  }
  function Re(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & Mt) {
      const Xt = Je.$implicit,
        Nn = e.oxw(3);
      e.xp6(1), e.Oqu(Nn.displayFn(Xt));
    }
  }
  function st(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "lu-data-list", 31), e.YNc(1, Re, 2, 1, "ng-template", null, 34, e.W1O), e.qZA()), 2 & Mt) {
      const Xt = e.MAs(2),
        Nn = e.oxw(2);
      e.Q6J("items", Nn.mentalStateItems)("itemContent", Xt)("displayValueFn", Nn.displayFn.bind(Nn));
    }
  }
  function q(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "span"), e._uU(4, "Падал ли пациент в последние 3 мес?"), e.qZA(), e.TgZ(5, "lu-radio-group", 21)(6, "lu-button-group"), e.YNc(7, be, 2, 4, "button", 22), e.qZA()()(), e.TgZ(8, "div", 20)(9, "span"), e._uU(10, "Есть ли сопутствующее заболевание?"), e.qZA(), e.TgZ(11, "lu-radio-group", 23)(12, "lu-button-group"), e.YNc(13, le, 2, 4, "button", 22), e.qZA()()(), e.TgZ(14, "div", 20)(15, "span"), e._uU(16, "Принимает внутривенное вливание/принимает гепарин, фраксипарин"), e.qZA(), e.TgZ(17, "lu-radio-group", 24)(18, "lu-button-group"), e.YNc(19, n, 2, 4, "button", 22), e.qZA()()(), e.TgZ(20, "div", 25)(21, "span"), e._uU(22, "Самостоятельность при ходьбе"), e.qZA(), e.TgZ(23, "lu-combobox", 26), e.YNc(24, qe, 3, 3, "lu-data-list", 27), e.qZA()(), e.TgZ(25, "div", 25)(26, "span"), e._uU(27, "Походка"), e.qZA(), e.TgZ(28, "lu-combobox", 28), e.YNc(29, We, 3, 3, "lu-data-list", 27), e.qZA()(), e.TgZ(30, "div", 25)(31, "span"), e._uU(32, "Психическое состояние"), e.qZA(), e.TgZ(33, "lu-combobox", 29), e.YNc(34, st, 3, 3, "lu-data-list", 27), e.qZA()()()()), 2 & Mt) {
      const Xt = e.oxw();
      e.xp6(5), e.Q6J("compareFn", Xt.compare), e.xp6(2), e.Q6J("ngForOf", Xt.yesNoItems), e.xp6(4), e.Q6J("compareFn", Xt.compare), e.xp6(2), e.Q6J("ngForOf", Xt.yesNoItems), e.xp6(4), e.Q6J("compareFn", Xt.compare), e.xp6(2), e.Q6J("ngForOf", Xt.yesNoItems), e.xp6(4), e.Q6J("compareFn", Xt.compare)("displayValueFn", Xt.displayFn), e.xp6(5), e.Q6J("compareFn", Xt.compare)("displayValueFn", Xt.displayFn), e.xp6(5), e.Q6J("compareFn", Xt.compare)("displayValueFn", Xt.displayFn);
    }
  }
  function mt(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 39), e.NdJ("click", function (Pi) {
        return e.CHM(Xt), e.oxw(2).onClear(), e.KtG(Pi.stopPropagation());
      }), e._uU(1, " Очистить "), e.qZA();
    }
  }
  function ut(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 40), e.NdJ("click", function (Pi) {
        return e.CHM(Xt), e.oxw(2).onSave(), e.KtG(Pi.stopPropagation());
      }), e._uU(1, " Сохранить "), e.qZA();
    }
  }
  function Ct(Mt, Je) {
    if (1 & Mt) {
      const Xt = e.EpF();
      e.TgZ(0, "button", 41), e.NdJ("click", function (Pi) {
        return e.CHM(Xt), e.oxw(2).checkAndApprove(), e.KtG(Pi.stopPropagation());
      }), e._uU(1, " Подтвердить "), e.qZA();
    }
  }
  function Ft(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "div", 35), e.YNc(1, mt, 2, 0, "button", 36), e.YNc(2, ut, 2, 0, "button", 37), e.YNc(3, Ct, 2, 0, "button", 38), e.qZA()), 2 & Mt) {
      const Xt = e.oxw();
      e.xp6(1), e.Q6J("ngIf", Xt.isDrawerMode), e.xp6(1), e.Q6J("ngIf", Xt.isDrawerMode), e.xp6(1), e.Q6J("ngIf", !Xt.isDrawerMode);
    }
  }
  function Et(Mt, Je) {
    1 & Mt && (e.TgZ(0, "div", 35), e.Hsn(1), e.qZA());
  }
  function Ue(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "div", 44)(1, "span", 45), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & Mt) {
      const Xt = Je.$implicit;
      e.xp6(2), e.Oqu(Xt.label), e.xp6(2), e.Oqu(Xt.value);
    }
  }
  function Me(Mt, Je) {
    if (1 & Mt && (e.TgZ(0, "div", 42), e.YNc(1, Ue, 5, 2, "div", 43), e.qZA()), 2 & Mt) {
      const Xt = e.oxw();
      e.xp6(1), e.Q6J("ngForOf", Xt.viewValuesMap);
    }
  }
  const Ke = [[["", "morseViewActions", ""]]];
  let Ee = ((je = class {
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
  }).ɵfac = function (Xt) {
    return new (Xt || je)();
  }, je.ɵcmp = e.Xpm({
    type: je,
    selectors: [["scale-morse-form"]],
    inputs: {
      morseScaleValue: "morseScaleValue",
      isViewMode: "isViewMode",
      isDrawerMode: "isDrawerMode",
      parentOverlayRef: "parentOverlayRef",
      reloadListAction: "reloadListAction"
    },
    outputs: {
      closeMorsePanelEvent: "closeMorsePanelEvent"
    },
    standalone: !0,
    features: [e.TTD, e.jDz],
    ngContentSelectors: ["[morseViewActions]"],
    decls: 22,
    vars: 15,
    consts: [[1, "morse-form", 3, "formGroup"], [1, "morse-form__header"], [1, "title"], ["lu-button-icon", "", "class", "morse-form-close-icon", 3, "click", 4, "ngIf"], ["class", "morse-form__sign-info", 4, "ngIf"], ["class", "morse-form__body", 4, "ngIf", "ngIfElse"], [1, "morse-form__action"], [1, "morse-form__sum-result"], [1, "morse-form__sum-result__sum"], ["lu-text", "", "color", "muted"], ["lu-text", "", 1, "color-sum-result", 3, "ngClass"], ["lu-text", "", "color", "normal"], ["class", "morse-form__action-buttons", 4, "ngIf"], ["onlyView", ""], ["lu-button-icon", "", 1, "morse-form-close-icon", 3, "click"], ["icon", "close", 3, "size"], [1, "morse-form__sign-info"], [1, "dot"], [1, "morse-form__body"], [1, "morse-form__content"], [1, "morse-form__content__row", "morse-form__content__row_yes-no"], ["formControlName", "isFall", 3, "compareFn"], ["lu-segment-button", "", "luSegment", "", 3, "value", "morse-form__segment-no", "click", 4, "ngFor", "ngForOf"], ["formControlName", "hasConcomitantDiseases", 3, "compareFn"], ["formControlName", "hasIntravenousTherapy", 3, "compareFn"], [1, "morse-form__content__row"], ["formControlName", "independenceWalking", 3, "compareFn", "displayValueFn"], [3, "items", "itemContent", "displayValueFn", 4, "luData"], ["formControlName", "gait", 3, "compareFn", "displayValueFn"], ["formControlName", "mentalState", 3, "compareFn", "displayValueFn"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click"], [3, "items", "itemContent", "displayValueFn"], ["templateWalking", ""], ["templateGait", ""], ["templateMentalState", ""], [1, "morse-form__action-buttons"], ["lu-button-outer", "", "size", "medium", "color", "red", 3, "click", 4, "ngIf"], ["lu-button-raised", "", "size", "medium", "color", "blue", 3, "click", 4, "ngIf"], ["lu-button-outer", "", "size", "medium", 3, "click", 4, "ngIf"], ["lu-button-outer", "", "size", "medium", "color", "red", 3, "click"], ["lu-button-raised", "", "size", "medium", "color", "blue", 3, "click"], ["lu-button-outer", "", "size", "medium", 3, "click"], [1, "morse-form__view"], ["class", "morse-form__view__row", 4, "ngFor", "ngForOf"], [1, "morse-form__view__row"], ["lu-text", "", "color", "muted", 1, "morse-form__view__row__label"]],
    template: function (Xt, Nn) {
      if (1 & Xt && (e.F$t(Ke), e.TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2), e._uU(3, "Шкала Морсе"), e.qZA(), e.YNc(4, te, 2, 1, "button", 3), e.qZA(), e.YNc(5, pe, 9, 5, "span", 4), e.YNc(6, q, 35, 12, "div", 5), e.TgZ(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "span", 9), e._uU(11, "Сумма:"), e.qZA(), e.TgZ(12, "span", 10), e._uU(13), e.qZA()(), e.TgZ(14, "span", 9), e._uU(15, " Риск: "), e.TgZ(16, "span", 11), e._uU(17), e.qZA()()(), e.YNc(18, Ft, 4, 3, "div", 12), e.YNc(19, Et, 2, 0, "div", 12), e.qZA(), e.YNc(20, Me, 2, 1, "ng-template", null, 13, e.W1O), e.qZA()), 2 & Xt) {
        const Pi = e.MAs(21);
        e.ekj("morse-form_drawer", Nn.isDrawerMode), e.Q6J("formGroup", Nn.morseForm), e.xp6(4), e.Q6J("ngIf", !Nn.isDrawerMode), e.xp6(1), e.Q6J("ngIf", (null == Nn.morseValue ? null : Nn.morseValue.scaleMorseTime) && Nn.isViewMode), e.xp6(1), e.Q6J("ngIf", !Nn.isViewMode)("ngIfElse", Pi), e.xp6(1), e.ekj("morse-form__action_drawer", Nn.isDrawerMode), e.xp6(5), e.Q6J("ngClass", Nn.displayMorseSumResultColor(Nn.sumResult)), e.xp6(1), e.AsE("", Nn.sumResult, "\xA0", Nn.displayDeclension(Nn.sumResult), ""), e.xp6(4), e.Oqu(Nn.interpretationSumResult), e.xp6(1), e.Q6J("ngIf", !Nn.isViewMode), e.xp6(1), e.Q6J("ngIf", Nn.isViewMode);
      }
    },
    dependencies: [a.ez, a.mk, a.sg, a.O5, d.W1, d.mc, v.F, v.w, f.y8, f.K2, E.P, E.X, m.UX, m._Y, m.JJ, m.JL, m.sg, m.u, m.u5, M.o, M.k, b.h, b.q, L.n, L.m, h.X, h.l, A.u, A.g, N.aI, N.NZ, I.N, I.M],
    styles: [".morse-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;font-weight:400}.morse-form_drawer[_ngcontent-%COMP%]{min-height:0}.morse-form__header[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;align-items:center;padding:0 16px}@media (min-width: 992px){.morse-form__header[_ngcontent-%COMP%]{padding-left:24px;padding-right:24px}}.morse-form__header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px;font-weight:600;line-height:24px}.morse-form__sign-info[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:8px;margin-top:8px;padding-left:16px;padding-right:16px;width:100%;font-size:13px;line-height:20px}@media (min-width: 992px){.morse-form__sign-info[_ngcontent-%COMP%]{padding-left:24px;padding-right:24px}}.morse-form__sign-info[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{color:#757575}.morse-form__body[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:0 16px}@media (min-width: 992px){.morse-form__body[_ngcontent-%COMP%]{padding-left:24px;padding-right:24px}}.morse-form__content[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:16px}@media (min-width: 992px){.morse-form__content[_ngcontent-%COMP%]{gap:24px}}.morse-form__content__row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.morse-form__content__row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.morse-form__content__row[_ngcontent-%COMP%]   lu-radio-group[_ngcontent-%COMP%]{height:38px}.morse-form__content__row_yes-no[_ngcontent-%COMP%]   button.morse-form__segment-no[data-lu-checked=true][_ngcontent-%COMP%]   .lu-button-wrapper[_ngcontent-%COMP%]{background-color:#fff5b3!important;color:#bf4905}.morse-form__view[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:16px;padding-right:16px;padding-left:16px}@media (min-width: 992px){.morse-form__view[_ngcontent-%COMP%]{padding-right:24px;padding-left:24px}}.morse-form__view__row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.morse-form__view__row__label[_ngcontent-%COMP%]{font-size:15px}.morse-form__sum-result[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.morse-form__sum-result__sum[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}.morse-form__sum-result[_ngcontent-%COMP%]   span[color=normal][_ngcontent-%COMP%]{font-weight:400;font-size:15px;padding-left:6px}.morse-form__action[_ngcontent-%COMP%]{padding:15px 16px 16px;display:flex;justify-content:space-between;align-items:center;background:#fafafa}@media (min-width: 992px){.morse-form__action[_ngcontent-%COMP%]{padding-right:24px;padding-left:24px}}.morse-form__action_drawer[_ngcontent-%COMP%]{flex-shrink:0;margin-top:auto;border-top:1px solid #ccc}.morse-form__action-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.morse-view-drawer[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;min-height:0}.morse-view-drawer[_nghost-%COMP%]   .morse-form[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}@media (max-width: 960px){.morse-view-drawer[_nghost-%COMP%]   .morse-form__header[_ngcontent-%COMP%]{height:auto}.morse-view-drawer[_nghost-%COMP%]   .morse-form__body[_ngcontent-%COMP%]{padding-bottom:8px}.morse-view-drawer[_nghost-%COMP%]   .morse-form__content[_ngcontent-%COMP%]{margin-top:16px}.morse-view-drawer[_nghost-%COMP%]   .morse-form__content__row[_ngcontent-%COMP%]{gap:8px}.morse-view-drawer[_nghost-%COMP%]   .morse-form__content__row[_ngcontent-%COMP%]   lu-combobox[_ngcontent-%COMP%]{width:100%}.morse-view-drawer[_nghost-%COMP%]   .morse-form__content__row[_ngcontent-%COMP%]   lu-radio-group[_ngcontent-%COMP%], .morse-view-drawer[_nghost-%COMP%]   .morse-form__content__row[_ngcontent-%COMP%]   lu-button-group[_ngcontent-%COMP%]{width:auto}.morse-view-drawer[_nghost-%COMP%]   .morse-form__action_drawer[_ngcontent-%COMP%]{gap:12px;flex-wrap:wrap}}.morse-form-close-icon[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.morse-form-close-icon[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.color-sum-result[_ngcontent-%COMP%]{font-size:13px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding-left:8px;padding-right:8px;max-height:24px}.green-sum-result[_ngcontent-%COMP%]{background-color:#dff0c0;color:#346b07}.yellow-sum-result[_ngcontent-%COMP%]{background-color:#fff5b3;color:#bf4905}.red-sum-result[_ngcontent-%COMP%]{background-color:#fcd6ce;color:#aa2115}"],
    changeDetection: 0
  }), je);
  Ee = (0, t.gn)([(0, C.c)()], Ee);
});
