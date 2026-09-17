// Extracted class; external identifiers resolve in modules/31529.js.
(class {
  constructor(Gn, dn, wo, Ro, _r, qr, Ts, js, ws) {
    this.data = Gn, this.modalRef = dn, this.cdr = wo, this.compositionsBaseService = Ro, this.store = _r, this.fb = qr, this.breakpointObserver = Ts, this.messageService = js, this.sharedDataService = ws, this.isOpenFromCheckList = !1, this.checklistShowValidationErrors = !1, this.isViewMode = !1, this.headingTitle = "NEWS2", this.closeNews2PanelEvent = new e.vpe(), this.news2ViewTopRow = [], this.news2ViewDevice = null, this.news2ViewMiddleRow = [], this.news2ViewHr = null, this.news2ViewConsciousness = null, this.form004ViewTransportability = null, this.form004ViewBath = null, this.form004ViewLinen = null, this.form004ViewPediculosis = null, this.form004ViewMetricsRow = [], this.form004ViewOutputRow = [], this.displayConsciousness = "—", this.commaRegex = /^\d+(,)?$/, this.decimalRegex = /^\d+(,\d+)?$/, this.integerNews2Fields = ["rr", "sp", "oxygenation", "sys", "dia", "hr"], this.form004IntegerLimits = {
      liquid: {
        min: 0,
        max: 2e4
      },
      feces: {
        min: 0,
        max: 20
      }
    }, this.integerInputRegex = /^\d*$/, this.masks = {
      temperature: [/\d/, /\d/, ",", /\d/],
      number: /\d/,
      number_2: /\d?$/,
      number_3: /\d{0,2}$/
    }, this.isShowOxygenationDevices = !1, this.oxygenationList = ["Канюля", "Маска", "Шлем", "ВПО", "НИВЛ", "CPAP", "BiPAP", "TriPAP", "ИВЛ"], this.consciousnessList = ["Ясное", "Спутанное", "Реакция на речь", "Реакция на боль", "Отсутствие реакции"], this.menuBodyHeight = "", this.addInfo = !1, this.showValidationErrors = !1, this.points = {
      temperature: 0,
      sys: 0,
      hr: 0,
      rr: 0,
      sp: 0,
      oxygenation: 0,
      consciousness: 0
    }, this.sum = 0, this.risk = "", this.news2Form = this._initNews2Form(), this.form004Form = this._initForm004Form(), this.anthropometryForm = this._initAnthropometryForm(), this.isTablet = !1, this.isModalAlone = !1, this.requiredNews2Fields = ["rr", "sp", "oxygenation", "temperature", "sys", "hr", "consciousness"], this.anthropometryForm.valueChanges.pipe((0, E.t)(this)).subscribe(() => {
      this._syncAnthropometryWeightToForm004();
    }), ["temperature", "sys", "dia", "hr", "rr"].forEach(Us => {
      this.getNEWS2Ctrl(Us).valueChanges.pipe((0, E.t)(this)).subscribe(Ws => this.getForm004Ctrl(Us).patchValue(Ws));
    }), this.getNEWS2Ctrl("consciousness").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
      this.getNEWS2Ctrl("consciousnessCode").patchValue(this.resolveConsciousnessCode(Us), {
        emitEvent: !1
      });
    }), this.getNEWS2Ctrl("oxygenationDevice").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
      Us && Us.length > 0 && this.getNEWS2Ctrl("oxygenationDeviceCode").patchValue(this.oxygenationList.map(Ws => Ws?.toLowerCase()).indexOf(Us[0]?.toLowerCase()) + 1);
    }), this.getNEWS2Ctrl("oxygenation").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
      const Ws = Je.isPositiveOxygenDemand(Us);
      this.isShowOxygenationDevices = Ws;
      const sa = this.getNEWS2Ctrl("oxygenationDevice"),
        ha = this.getNEWS2Ctrl("oxygenationDeviceCode");
      Ws ? sa.setValidators([Je.requiredFilled]) : (sa.clearValidators(), sa.reset(null, {
        emitEvent: !1
      }), ha.reset(null, {
        emitEvent: !1
      })), sa.updateValueAndValidity({
        emitEvent: !1
      }), this.cdr.markForCheck();
    }), this.getForm004Ctrl("pediculosis").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
      Us = Us instanceof Array ? Us : [Us], this.getForm004Ctrl("pediculosisFlag").patchValue(Us.some(Ws => "не проверен" !== Ws?.toLowerCase()));
    }), this.getForm004Ctrl("transportability").valueChanges.pipe((0, E.t)(this)).subscribe(Us => Us ? this.getForm004Ctrl("transportabilityCode").patchValue("unknown", {
      emitEvent: !1
    }) : this.getForm004Ctrl("transportabilityCode").reset(null, {
      emitEvent: !1
    }));
  }
  ngOnChanges(Gn) {
    (0, B.Xy)(Gn.scalesValue?.currentValue, Gn.scalesValue?.previousValue) || (this.initScalesValue = (0, ke.sZ)(this.scalesValue), this._countPointsFromExternal(), this._parseNewsDataFromForm()), Gn.headingTitle && this.isViewMode && this.cdr.markForCheck(), Gn.indexScalesSeed?.currentValue && this._applyIndexAsOldValues(), Gn.checklistShowValidationErrors?.currentValue && this.revealValidationErrors();
  }
  ngAfterViewInit() {
    this.isViewMode && this.scalesValue && (this._parseNewsDataFromForm(), this.cdr.markForCheck()), this.checklistShowValidationErrors && this.revealValidationErrors();
  }
  get ownerInitials() {
    const Gn = this.scalesValue?.news2?.owner;
    return Gn && Gn?.split(" ").map((dn, wo) => wo ? dn[0].toUpperCase() + "." : dn).join(" ");
  }
  get assessmentTime() {
    return this.scalesValue?.news2?.time_committed ?? null;
  }
  get hasForm004ViewData() {
    return [this.form004ViewTransportability, this.form004ViewBath, this.form004ViewLinen, this.form004ViewPediculosis, ...this.form004ViewMetricsRow, ...this.form004ViewOutputRow].some(Gn => null != Gn?.value && "" !== Gn.value);
  }
  formatViewValue(Gn) {
    return (0, W.vO)(Gn);
  }
  ngOnInit() {
    this.breakpointObserver.observe(x.ok).pipe((0, E.t)(this)).subscribe(Gn => this.isTablet = Gn.matches), this.data && (this.fullNameBuilder(this.data?.payload), this.isModalAlone = !0), this.loadEhrContext$().pipe((0, E.t)(this), (0, d.w)(Gn => this._setFromCompositions(Gn)), (0, M.K)(Gn => (console.error("news2 ehr load error", Gn), b.E))).subscribe(), this.indexScalesSeed && this._applyIndexAsOldValues();
  }
  fixValues() {
    let Gn = {
      ...this.news2Form.value,
      ...this._fixCommonValues(this.news2Form.value)
    };
    Gn.sp && Gn.sp > 100 && (Gn.sp = 100), (Gn.sp || 0 === Gn.sp) && Gn.sp < 40 && (Gn.sp = 40), Gn.oxygenation && Gn.oxygenation > 70 && (Gn.oxygenation = 70), this.news2Form.patchValue(Gn, {
      emitEvent: !1
    });
    let dn = {
      ...this.form004Form.value,
      ...this._fixCommonValues(this.form004Form.value)
    };
    dn.liquid = this._clampForm004Integer(dn.liquid, "liquid"), dn.feces = this._clampForm004Integer(dn.feces, "feces"), this.form004Form.patchValue(dn, {
      emitEvent: !1
    });
  }
  get formatPointNews2() {
    return (0, f.bA)(this.sum);
  }
  get news2FormIsEmpty() {
    return !Object.keys(this.points).some(Gn => !!this.news2Form.value[Gn] || 0 === this.news2Form.value[Gn]);
  }
  _fixCommonValues(Gn) {
    let dn = {
      ...Gn
    };
    if (this.integerNews2Fields.forEach(wo => {
      const Ro = dn[wo];
      null != Ro && "" !== Ro && (dn[wo] = Math.trunc(Number(String(Ro).replace(",", "."))));
    }), dn.rr && dn.rr > 50 && (dn.rr = 50), null != dn.temperature && "" !== dn.temperature) {
      const wo = String(dn.temperature).replace(".", ",");
      if (this.commaRegex.test(wo) || this.decimalRegex.test(wo)) {
        const Ro = Number(wo.replace(",", "."));
        dn.temperature = Number.isFinite(Ro) ? Ro > 42.9 ? "42,9" : Ro < 20 ? "20,0" : wo.length < 4 ? `${wo},0` : wo : null;
      } else dn.temperature = null;
    }
    return dn.sys && dn.sys > 300 && (dn.sys = 300), dn.dia && dn.dia > 150 && (dn.dia = 150), dn.hr && dn.hr > 300 && (dn.hr = 300), dn;
  }
  _setFromCompositions(Gn) {
    console.log("loadComp");
    const wo = [{
      code: "news2",
      cls: R.u,
      oldData: "oldNews2Value",
      uid: this.fullData?.data?.news2?.compositionUid,
      api: x.hd
    }, {
      code: "form004",
      cls: R.KS,
      oldData: "oldForm004Value",
      uid: this.fullData?.data?.form004?.compositionUid,
      api: x.fh
    }, {
      code: "antropometricheskie_dannie",
      cls: R.je,
      oldData: "oldAnthropometryValue",
      uid: (0, j.sc)(this.fullData?.data) ?? this.fullData?.data?.anthropometricData?.compositionUid,
      api: x.Zr
    }].filter(Ro => Ro?.uid).map(Ro => Gn.getMedicalEntry(Ro.uid).pipe((0, A.b)(_r => {
      if (!_r.isEmpty()) {
        const qr = new Ro.cls(_r.getRoot()),
          Ts = (0, a.yE)(Ro.api, qr.parsedFromCompositionData[Ro.code]);
        "news2" === Ro.code && Ts && (this.displayConsciousness = Ts.consciousness.join(", ")), this[Ro.oldData] = Ts, "form004" === Ro.code && (this.loadedForm004FromEhr = Ts), "antropometricheskie_dannie" === Ro.code && (this.loadedAnthropometryFromEhr = Ts), this.cdr.markForCheck();
      }
    })));
    return (0, N.D)(wo).pipe((0, A.b)(() => {
      if (this._isTemperatureListContext()) return this._openAddInfoSection(), this._prefillForm004FromDayIndex(), this._applyHygieneDefaultsIfEmpty(), void this.cdr.markForCheck();
      this._hasAdditionalDataFromBackend() && (this._applyAdditionalDataPrefill({
        form004: this.loadedForm004FromEhr,
        anthropometry: this.loadedAnthropometryFromEhr
      }, {
        defaultPediculosis: !1
      }), this._openAddInfoSection());
    }));
  }
  _isTemperatureListContext() {
    return "scalesTemperaturePatientList:reload" === this.reloadListAction;
  }
  _getDayIndexHygieneFields() {
    const Gn = this.indexScalesSeed?.form004,
      dn = (0, Le.mw)(this.fullData?.data),
      wo = {},
      Ro = (0, F.pQ)(Gn?.bath ?? dn.bath);
    null != Ro && (wo.bath = Ro);
    const _r = (0, F.OP)(Gn?.linen ?? dn.linen);
    return _r && (wo.linen = _r), wo;
  }
  _prefillForm004FromDayIndex() {
    if (this.isOpenFromCheckList || this.isViewMode) return;
    const Gn = this._getDayIndexHygieneFields();
    this._hasAdditionalDataFromBackend() ? this._applyAdditionalDataPrefill({
      form004: {
        ...this.loadedForm004FromEhr,
        ...Gn
      },
      anthropometry: this.loadedAnthropometryFromEhr
    }, {
      defaultPediculosis: !1
    }) : this._applyAdditionalDataPrefill({
      form004: {
        ...this.indexScalesSeed?.form004,
        ...Gn
      },
      anthropometry: this.indexScalesSeed?.anthropometry
    }, {
      defaultPediculosis: !0
    });
  }
  _applyHygieneDefaultsIfEmpty() {
    this.isOpenFromCheckList || this.isViewMode || (this._isForm004FieldEmpty("bath") && this.getForm004Ctrl("bath").patchValue(!1, {
      emitEvent: !1
    }), this._isForm004FieldEmpty("linen") && this.getForm004Ctrl("linen").patchValue("нет", {
      emitEvent: !1
    }));
  }
  fullNameBuilder(Gn) {
    this.fullName = `${Gn?.data?.careCase?.lastName || ""} ${Gn?.data?.careCase?.firstName || ""} ${Gn?.data?.careCase?.secondName || ""}`;
  }
  isOldValueDanger(Gn, dn) {
    return (0, y.K$)(Gn, dn, {
      sys: this.oldNews2Value?.sys,
      dia: this.oldNews2Value?.dia
    });
  }
  _applyIndexAsOldValues() {
    if (!this.indexScalesSeed) return;
    const Gn = this.indexTimeCommitted ? new Date(this.indexTimeCommitted) : new Date(),
      dn = this.indexScalesSeed.news2;
    dn && Object.values(dn).some(_r => null != _r && "" !== _r) && (this.oldNews2Value = {
      ...dn,
      rrTime: Gn,
      spTime: Gn,
      oxygenationTime: Gn,
      temperatureTime: Gn,
      sysTime: Gn,
      hrTime: Gn
    });
    const wo = this.indexScalesSeed.form004;
    wo && Object.values(wo).some(_r => null != _r && "" !== _r) && (this.oldForm004Value = {
      ...wo,
      pediculosisTime: Gn,
      liquidTime: Gn,
      phlegmTime: Gn,
      urineTime: Gn,
      fecesTime: Gn
    });
    const Ro = this.indexScalesSeed.anthropometry;
    null != Ro?.weight && (this.oldAnthropometryValue = {
      ...Ro,
      weightTime: Gn
    }), this.cdr.markForCheck();
  }
  _prefillAdditionalDataFromIndexSeed() {
    this._prefillForm004FromDayIndex();
  }
  _isForm004FieldEmpty(Gn) {
    const dn = this.getForm004Ctrl(Gn).value;
    return null == dn || "" === dn;
  }
  _applyAdditionalDataPrefill(Gn, dn = {}) {
    const wo = Gn.form004?.transportability;
    wo && this._isForm004FieldEmpty("transportability") && (this.getForm004Ctrl("transportability").patchValue(wo, {
      emitEvent: !1
    }), this.getForm004Ctrl("transportabilityCode").patchValue("unknown", {
      emitEvent: !1
    }));
    const Ro = (0, F.pQ)(Gn.form004?.bath);
    null != Ro && this._isForm004FieldEmpty("bath") && this.getForm004Ctrl("bath").patchValue(Ro, {
      emitEvent: !1
    });
    const _r = (0, F.OP)(Gn.form004?.linen);
    _r && this._isForm004FieldEmpty("linen") && this.getForm004Ctrl("linen").patchValue(_r, {
      emitEvent: !1
    });
    let qr = this._normalizePediculosisForForm(Gn.form004?.pediculosis);
    !qr && dn.defaultPediculosis && (qr = "не проверен"), qr && !this.getForm004Ctrl("pediculosis").value && (this.getForm004Ctrl("pediculosis").patchValue(qr, {
      emitEvent: !1
    }), this.getForm004Ctrl("pediculosisFlag").patchValue("не проверен" !== qr.toLowerCase(), {
      emitEvent: !1
    }));
    const Ts = Gn.form004?.weight ?? Gn.anthropometry?.weight;
    null != Ts && null == this.getAnthropometryCtrl("weight").value && this.getAnthropometryCtrl("weight").patchValue(Ts, {
      emitEvent: !1
    }), this._syncAnthropometryWeightToForm004();
  }
  _syncAnthropometryWeightToForm004() {
    const Gn = this.getAnthropometryCtrl("weight").value;
    null == Gn || "" === Gn || (this.getForm004Ctrl("weight").patchValue(Gn, {
      emitEvent: !1
    }), this.getForm004Ctrl("weight").updateValueAndValidity({
      emitEvent: !1
    }));
  }
  _hasAdditionalDataFromBackend() {
    return this._hasAdditionalDataInSource({
      form004: this.loadedForm004FromEhr,
      anthropometry: this.loadedAnthropometryFromEhr
    });
  }
  _hasAdditionalDataInSource(Gn) {
    return !(!Gn.form004?.transportability && !Gn.form004?.pediculosis && null == Gn.form004?.weight && null == Gn.anthropometry?.weight);
  }
  _normalizePediculosisForForm(Gn) {
    if (null == Gn || "" === Gn) return;
    const dn = Array.isArray(Gn) ? Gn[0] : Gn,
      wo = String(dn).trim().toLowerCase();
    return jt.find(_r => _r === wo) || (wo.startsWith("не провер") ? "не проверен" : jt.find(_r => wo.includes(_r) || _r.includes(wo)));
  }
  _openAddInfoSection() {
    this.addInfo || this.isViewMode || (this.addInfo = !0, ["weight", "pediculosis", "transportability"].forEach(Gn => {
      this.getForm004Ctrl(Gn).setValidators([m.kI.required]), this.getForm004Ctrl(Gn).updateValueAndValidity({
        emitEvent: !1
      });
    }), this.getAnthropometryCtrl("weight").setValidators([m.kI.required]), this.getAnthropometryCtrl("weight").updateValueAndValidity({
      emitEvent: !1
    }), this._syncAnthropometryWeightToForm004(), this.cdr.markForCheck());
  }
  _buildNews2ViewItem(Gn, dn, wo) {
    return {
      label: Gn,
      value: dn,
      isDanger: !!wo && (0, y.K$)(wo, dn, {
        sys: this.scalesValue?.news2?.sys,
        dia: this.scalesValue?.news2?.dia
      })
    };
  }
  _formatDeviceValue(Gn) {
    if (!Gn) return;
    const dn = Array.isArray(Gn) ? Gn[0] : Gn;
    return dn ? dn.charAt(0).toUpperCase() + dn.slice(1) : void 0;
  }
  _parseNewsDataFromForm() {
    const Gn = this.scalesValue.form004,
      dn = (0, a.yE)(x.hd, this.scalesValue.news2),
      wo = this.scalesValue.anthropometry;
    dn && (this.news2Form.patchValue(dn), this.sum = dn.sum, this.risk = dn.risk), wo ? this.anthropometryForm.patchValue(wo) : Gn && Gn?.weight && this.getAnthropometryCtrl("weight").patchValue(Gn?.weight), Gn && Object.values(Gn).some(qr => !!qr) ? (this.form004Form.patchValue(Gn), this._openAddInfoSection()) : null != wo?.weight && this._openAddInfoSection(), this.viewValuesMap = {
      news2: [this._buildNews2ViewItem("ЧДД, движений/мин", this.scalesValue?.news2?.rr), this._buildNews2ViewItem("SpO2, %", this.scalesValue?.news2?.sp, "sp"), this._buildNews2ViewItem("Потребность в кислороде, л./мин", this.scalesValue?.news2?.oxygenation), this._buildNews2ViewItem("Устройство инсуффляции кислорода", this._formatDeviceValue(this.scalesValue?.news2?.oxygenationDevice)), this._buildNews2ViewItem("Температура, °C", this.scalesValue?.news2?.temperature, "temperature"), this._buildNews2ViewItem("АД (в), мм.рт.ст.", this.scalesValue?.news2?.sys, "sys"), this._buildNews2ViewItem("АД (н), мм.рт.ст.", this.scalesValue?.news2?.dia, "dia"), this._buildNews2ViewItem("ЧСС, уд/мин", this.scalesValue?.news2?.hr), this._buildNews2ViewItem("Уровень сознания", this.scalesValue?.news2?.consciousness)],
      form004: [{
        label: "Транспортабельность",
        value: this.scalesValue?.form004?.transportability
      }, {
        label: "Ванна",
        value: this.scalesValue?.form004?.bath ? "Да" : "Нет"
      }, {
        label: "Смена белья",
        value: this.scalesValue?.form004?.linen
      }, {
        label: "Педикулез",
        value: this.scalesValue?.form004?.pediculosis
      }, {
        label: "Вес, кг",
        value: this.scalesValue?.form004?.weight
      }, {
        label: "Выпито жидкости, мл",
        value: this.scalesValue?.form004?.liquid
      }, {
        label: "Суточное кол-во мочи, мл",
        value: this.scalesValue?.form004?.urine
      }, {
        label: "Стул, раз/сутки",
        value: this.scalesValue?.form004?.feces
      }, {
        label: "Мокрота, мл",
        value: this.scalesValue?.form004?.phlegm
      }]
    };
    const Ro = this.viewValuesMap.news2;
    this.news2ViewTopRow = Ro.slice(0, 3), this.news2ViewDevice = null != Ro[3]?.value && "" !== Ro[3].value ? Ro[3] : null, this.news2ViewMiddleRow = Ro.slice(4, 7), this.news2ViewHr = Ro[7] ?? null, this.news2ViewConsciousness = Ro[8] ?? null;
    const _r = this.viewValuesMap.form004;
    this.form004ViewTransportability = _r[0] ?? null, this.form004ViewBath = _r[1] ?? null, this.form004ViewLinen = _r[2] ?? null, this.form004ViewPediculosis = _r[3] ?? null, this.form004ViewMetricsRow = _r.slice(4, 7), this.form004ViewOutputRow = _r.slice(7, 9), this.cdr.markForCheck();
  }
  formatDate(Gn) {
    return Gn ? (Gn = new Date(Gn), `${new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long"
    }).format(Gn)}, ${new Intl.DateTimeFormat("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(Gn)}`) : "";
  }
  countPoints(Gn, dn) {
    this.fixValues();
    let wo = "";
    wo = "consciousness" === dn ? Gn.target.innerText.toLowerCase() : Gn.target.value, this._countPointsHandler(dn, wo), this._syncNews2RiskFields();
  }
  _countPointsFromExternal() {
    this.points = (0, W.p1)(this.scalesValue?.news2), this._syncNews2RiskFields();
  }
  _recalculateNews2RiskFromForm() {
    this.points = (0, W.p1)(this.news2Form.getRawValue()), this._syncNews2RiskFields();
  }
  _syncNews2RiskFields() {
    const {
      sum: Gn,
      risk: dn,
      riskComposition: wo
    } = (0, f.Eu)(this.points);
    this.sum = Gn, this.risk = dn, this.getNEWS2Ctrl("sum").patchValue(Gn, {
      emitEvent: !1
    }), this.getNEWS2Ctrl("risk").patchValue(wo, {
      emitEvent: !1
    }), this.getNEWS2Ctrl("riskValue").patchValue(wo, {
      emitEvent: !1
    });
  }
  _countPointsHandler(Gn, dn) {
    return this.points = {
      ...this.points,
      [Gn]: (0, f.fW)(Gn, dn)
    }, (0, f.Eu)(this.points);
  }
  setInteger(Gn, dn) {
    const wo = Gn.target,
      Ro = wo.value.replace(/\s/g, ""),
      qr = Ro.replace(/[.,].*$/, "").replace(/[^\d]/g, "");
    if ("" !== qr && !this.integerInputRegex.test(qr)) {
      const Us = this.getNEWS2Ctrl(dn).value;
      return void (wo.value = null != Us && "" !== Us ? String(Us) : "");
    }
    Ro !== qr && (wo.value = qr);
    const js = "" === qr ? null : Number(qr),
      ws = this.getNEWS2Ctrl(dn);
    ws.setValue(js), ws.updateValueAndValidity({
      emitEvent: !1
    }), this.showValidationErrors && this.cdr.markForCheck();
  }
  setForm004Integer(Gn, dn) {
    const wo = Gn.target,
      Ro = wo.value.replace(/\s/g, "");
    let qr = Ro.replace(/[.,].*$/, "").replace(/[^\d]/g, "");
    if ("" === qr || this.integerInputRegex.test(qr)) {
      if ("" !== qr) {
        const {
            min: js,
            max: ws
          } = this.form004IntegerLimits[dn],
          Us = Number(qr);
        qr = String(Math.min(ws, Math.max(js, Us)));
      }
      Ro !== qr && (wo.value = qr), this.getForm004Ctrl(dn).setValue("" === qr ? null : Number(qr));
    } else {
      const js = this.getForm004Ctrl(dn).value;
      wo.value = null != js && "" !== js ? String(js) : "";
    }
  }
  _clampForm004Integer(Gn, dn) {
    if (null == Gn) return null;
    const {
      min: wo,
      max: Ro
    } = this.form004IntegerLimits[dn];
    return Math.min(Ro, Math.max(wo, Math.trunc(Number(Gn))));
  }
  setTemperature(Gn) {
    const dn = Gn.target,
      wo = dn.value.replace(".", ",");
    if ("" === wo || this.commaRegex.test(wo) || this.decimalRegex.test(wo)) dn.value !== wo && (dn.value = wo), this.getNEWS2Ctrl("temperature").setValue("" === wo ? null : wo);else {
      const _r = this.getNEWS2Ctrl("temperature").value;
      dn.value = null != _r && "" !== _r ? String(_r).replace(".", ",") : "";
    }
  }
  setDecimal(Gn, dn) {
    const wo = Gn.target,
      Ro = wo.value;
    "" === Ro || this.commaRegex.test(Ro) || this.decimalRegex.test(Ro) ? this[dn] = Ro : wo.value = this[dn];
  }
  toggleAddInfo() {
    if (!this.addInfo) return this._openAddInfoSection(), void (this._isTemperatureListContext() ? (this._prefillForm004FromDayIndex(), this._applyHygieneDefaultsIfEmpty()) : this._hasAdditionalDataFromBackend() || this._prefillAdditionalDataFromIndexSeed());
    this.addInfo = !1, this.form004Form.clearValidators(), this.anthropometryForm.clearValidators(), ["weight", "pediculosis", "transportability"].forEach(dn => {
      this.getForm004Ctrl(dn).clearValidators(), this.getForm004Ctrl(dn).updateValueAndValidity();
    }), this.getAnthropometryCtrl("weight").clearValidators(), this.form004Form.reset(), this.anthropometryForm.reset(), this.getAnthropometryCtrl("weight").updateValueAndValidity(), this.form004Form.updateValueAndValidity(), this.anthropometryForm.updateValueAndValidity();
  }
  onClear() {
    this.showValidationErrors = !1, this.clearNews2RequiredValidators(), this.news2Form.reset(), this.form004Form.reset(), this.anthropometryForm.reset(), this.sum = null, this.risk = null, this.points = {
      temperature: 0,
      sys: 0,
      hr: 0,
      rr: 0,
      sp: 0,
      oxygenation: 0,
      consciousness: 0
    };
  }
  get getColorSchemaClass() {
    return (0, f.r5)(this.points, this.news2FormIsEmpty);
  }
  static isFilledRequiredValue(Gn) {
    return null != Gn && "" !== Gn && (!Array.isArray(Gn) || Gn.length > 0);
  }
  static isPositiveOxygenDemand(Gn) {
    if (null == Gn || "" === Gn) return !1;
    const dn = Number(Gn);
    return Number.isFinite(dn) && dn > 0;
  }
  normalizeIntegerNews2Values() {
    this.integerNews2Fields.forEach(Gn => {
      const dn = this.getNEWS2Ctrl(Gn),
        wo = dn?.value;
      if (null == wo || "" === wo) return;
      const Ro = Number(String(wo).replace(",", "."));
      Number.isFinite(Ro) && dn.value !== Ro && dn.setValue(Ro, {
        emitEvent: !1
      });
    });
  }
  applyNews2RequiredValidators() {
    this.requiredNews2Fields.forEach(Gn => {
      const dn = this.getNEWS2Ctrl(Gn);
      dn.setValidators([Je.requiredFilled]), dn.updateValueAndValidity({
        emitEvent: !1
      });
    });
  }
  clearNews2RequiredValidators() {
    this.requiredNews2Fields.forEach(Gn => {
      const dn = this.getNEWS2Ctrl(Gn);
      dn.clearValidators(), dn.updateValueAndValidity({
        emitEvent: !1
      });
    }), this.getNEWS2Ctrl("oxygenationDevice").clearValidators(), this.getNEWS2Ctrl("oxygenationDevice").updateValueAndValidity({
      emitEvent: !1
    });
  }
  validateBeforeSave() {
    return this.fixValues(), this.normalizeIntegerNews2Values(), this.addInfo && this._syncAnthropometryWeightToForm004(), this.applyNews2RequiredValidators(), this.form004Form.updateValueAndValidity({
      emitEvent: !1
    }), this.anthropometryForm.updateValueAndValidity({
      emitEvent: !1
    }), this.news2Form.invalid || this.form004Form.invalid || this.anthropometryForm.invalid ? (this.revealValidationErrors(), this.messageService.warning("Заполните все обязательные поля!"), !1) : (this.showValidationErrors = !1, !0);
  }
  revealValidationErrors() {
    this.applyNews2RequiredValidators(), this.showValidationErrors = !0, this.news2Form.markAllAsTouched(), this.form004Form.markAllAsTouched(), this.anthropometryForm.markAllAsTouched(), this.getNEWS2Ctrl("consciousness")?.markAsDirty(), this.isShowOxygenationDevices && this.getNEWS2Ctrl("oxygenationDevice")?.markAsDirty(), ["transportability", "pediculosis"].forEach(Gn => this.getForm004Ctrl(Gn)?.markAsDirty()), this.cdr.markForCheck();
  }
  resolveConsciousnessCode(Gn) {
    const dn = Array.isArray(Gn) ? Gn[0] : Gn;
    if (!dn) return null;
    const wo = this.consciousnessList.findIndex(Ro => Ro?.toLowerCase() === String(dn).toLowerCase());
    return wo >= 0 ? String(wo + 1) : null;
  }
  syncConsciousnessCode() {
    const Gn = this.resolveConsciousnessCode(this.getNEWS2Ctrl("consciousness")?.value);
    this.getNEWS2Ctrl("consciousnessCode")?.patchValue(Gn, {
      emitEvent: !1
    });
  }
  _buildForm004SaveData() {
    const Gn = {
        ...this.form004Form.getRawValue()
      },
      dn = new Date();
    return (!0 === Gn.bath || !1 === Gn.bath) && (Gn.bathTime = dn), ("да" === Gn.linen || "нет" === Gn.linen) && (Gn.linenTime = dn), (0, a.zb)((0, a.yE)(x.fh, Gn));
  }
  onSave() {
    if (!this.validateBeforeSave()) return;
    this.syncConsciousnessCode(), this._recalculateNews2RiskFromForm();
    const Gn = [{
      code: "news2",
      cls: R.u,
      data: (0, a.zb)((0, a.yE)(x.hd, this.news2Form.value))
    }, {
      code: "form004",
      cls: R.KS,
      data: this._buildForm004SaveData()
    }, {
      code: "antropometricheskie_dannie",
      cls: R.je,
      data: (0, a.zb)((0, a.yE)(x.Zr, this.anthropometryForm.value))
    }];
    this.ensureEhrReady$().pipe((0, E.t)(this), (0, d.w)(dn => {
      const wo = this.careCase?.careCaseId;
      if (!wo) return (0, I._)(() => new Error("missing careCaseId"));
      const Ro = Gn.filter(_r => !["form004", "antropometricheskie_dannie"].includes(_r.code) || this.addInfo).map(_r => dn.createMedicalEntry(_r.code, wo).pipe((0, d.w)(qr => (new _r.cls(qr.getRoot()).setValues(_r.data, _r.code), qr.sign()))));
      return (0, N.D)(Ro);
    }), (0, M.K)(dn => (this.messageService.error("Не удалось сохранить данные NEWS2"), console.error("news2 save error", dn), b.E))).subscribe(() => {
      this.sharedDataService.runActionSubject("tasksPatientList"), this.reloadListAction && this.sharedDataService.runActionSubject(this.reloadListAction), this.store.dispatch((0, T.K0)({
        menuName: null
      })), this.messageService.success("Данные NEWS2 успешно внесены"), this.modalRef ? this.modalRef.close() : this.parentOverlayRef && this.parentOverlayRef.close();
    });
  }
  resolvePatientIdFromCareCase(Gn) {
    const dn = Gn?.actualPatientId || Gn?.patientId;
    return null == dn || "" === dn ? null : `${dn}`;
  }
  resolvePatientData$() {
    return this.patientContext?.data?.careCase ? (0, O.of)(this.patientContext) : this.fullData?.data?.careCase ? (0, O.of)(this.fullData) : this.store.select(h.HJ).pipe((0, A.b)(Gn => console.log(Gn)), (0, L.h)(Boolean), (0, C.q)(1));
  }
  loadEhrContext$() {
    return this.resolvePatientData$().pipe((0, A.b)(Gn => {
      this.fullData = Gn;
    }), (0, v.U)(Gn => Gn?.data?.careCase), (0, L.h)(Boolean), (0, d.w)(Gn => {
      this.careCase = Gn;
      const dn = this.resolvePatientIdFromCareCase(Gn);
      return dn ? this.compositionsBaseService.getEhrByPatientId(dn) : (0, I._)(() => new Error("missing patientId"));
    }), (0, A.b)(Gn => {
      this.ehr = Gn;
    }));
  }
  ensureEhrReady$() {
    return this.ehr && this.careCase?.careCaseId ? (0, O.of)(this.ehr) : this.loadEhrContext$();
  }
  onCancelPanel() {
    this.closeNews2PanelEvent.emit({
      confirmed: !1,
      news2: (0, ke.sZ)(this.initScalesValue?.news2 ?? null),
      form004: (0, ke.sZ)(this.initScalesValue?.form004 ?? null),
      anthropometry: (0, ke.sZ)(this.initScalesValue?.anthropometry ?? null)
    });
  }
  approveChanges() {
    this.validateBeforeSave() && (this.syncConsciousnessCode(), this._recalculateNews2RiskFromForm(), this.closeNews2PanelEvent.emit({
      confirmed: !0,
      news2: (0, ke.sZ)(this.news2Form.getRawValue()),
      form004: this.addInfo ? (0, ke.sZ)(this.form004Form.getRawValue()) : null,
      anthropometry: this.addInfo ? (0, ke.sZ)(this.anthropometryForm.getRawValue()) : null
    }));
  }
  getNEWS2Ctrl(Gn) {
    return this.news2Form.get(Gn);
  }
  getForm004Ctrl(Gn) {
    return this.form004Form.get(Gn);
  }
  getAnthropometryCtrl(Gn) {
    return this.anthropometryForm.get(Gn);
  }
  get timeHint() {
    return {
      "Без отклонений": "Через 12 часов",
      Низкий: "Через 4-6 часов",
      Средний: "Через 1-2 часа",
      Высокий: "Через 1-2 часов",
      Критичный: "Непрерывно"
    }[this.risk];
  }
  _initNews2Form() {
    return this.fb.group({
      owner: [null],
      start_time: [null],
      temperature: [null],
      temperatureUnit: ["Cell"],
      temperatureTime: [null],
      sys: [null],
      sysUnit: ["mm[Hg]"],
      sysTime: [null],
      dia: [null],
      diaUnit: ["mm[Hg]"],
      rr: [null],
      rrUnit: ["/min"],
      rrTime: [null],
      sp: [null],
      spUnit: ["%"],
      spTime: [null],
      oxygenation: [null],
      oxygenationUnit: ["l/min"],
      oxygenationTime: [null],
      oxygenationDevice: [null],
      oxygenationDeviceCode: [null],
      oxygenationDeviceTime: [null],
      hr: [null],
      hrUnit: ["/min"],
      hrTime: [null],
      consciousness: [null],
      consciousnessCode: [null],
      sum: [null],
      risk: [null],
      riskValue: [null]
    });
  }
  _initForm004Form() {
    return this.fb.group({
      owner: [null],
      start_time: [null],
      temperature: [null],
      temperatureUnit: ["Cell"],
      temperatureTime: [null],
      sys: [null],
      sysUnit: ["mm[Hg]"],
      sysTime: [null],
      dia: [null],
      diaUnit: ["mm[Hg]"],
      hr: [null],
      hrUnit: ["/min"],
      hrTime: [null],
      rr: [null],
      rrUnit: ["/min"],
      rrTime: [null],
      weight: [null],
      weightUnit: ["kg"],
      weightTime: [null],
      bath: [null],
      bathTime: [null],
      linen: [null],
      linenTime: [null],
      pediculosis: [null],
      pediculosisFlag: [!1],
      pediculosisTime: [null],
      liquid: [null],
      liquidUnit: ["ml"],
      liquidTime: [null],
      phlegm: [null],
      phlegmUnit: ["ml"],
      phlegmTime: [null],
      urine: [null],
      urineUnit: ["ml"],
      urineTime: [null],
      feces: [null],
      fecesUnit: ["/d"],
      fecesTime: [null],
      transportability: [null],
      transportabilityCode: [null]
    });
  }
  _initAnthropometryForm() {
    return this.fb.group({
      owner: [null],
      start_time: [null],
      weight: [null],
      weightUnit: ["kg"],
      weightTime: [null]
    });
  }
  closeModalFormAlone() {
    this.modalRef.close(), this.isModalAlone = !1, this.isTablet = !1;
  }
});
