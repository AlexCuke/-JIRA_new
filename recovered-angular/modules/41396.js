// Extracted from main; webpack module 41396. Factory, not an ES module.
((Ae, V, i) => {
  var Et;
  i.d(V, {
    V: () => Ft
  });
  var t = i(15861),
    e = i(97582),
    a = i(94650),
    m = i(36895),
    d = i(5416),
    M = i(20891),
    b = i(54976),
    A = i(47313),
    N = i(19550),
    I = i(9073),
    O = i(76500),
    L = i(49267),
    C = i(85623),
    v = i(85171),
    f = i(13700),
    E = i(52958),
    h = i(43150),
    x = i(62804),
    u = i(23062),
    T = i(93278),
    R = i(91854),
    B = i(3977),
    y = i(72210),
    j = i(6676),
    W = i(24006),
    F = i(5264),
    Le = i(15439),
    ke = i.n(Le),
    J = i(5238),
    fe = i(83905),
    ye = i(34874),
    ae = i(40600),
    Y = i(40400),
    G = i(58264),
    te = i(96474),
    pe = i(44348),
    be = i(97215),
    le = i(20107);
  function n(Ue, Me) {
    1 & Ue && (a.TgZ(0, "lu-form-message", 26), a._uU(1, " Поле обязательно для заполнения "), a.qZA());
  }
  function Se(Ue, Me) {
    1 & Ue && (a.TgZ(0, "lu-form-message", 26), a._uU(1, " Некорректный формат времени, ожидается ЧЧ:ММ (00:00 - 23:59) "), a.qZA());
  }
  function qe(Ue, Me) {
    1 & Ue && (a.TgZ(0, "lu-form-message", 26), a._uU(1, " Поле обязательно для заполнения "), a.qZA());
  }
  function Rt(Ue, Me) {
    if (1 & Ue && (a._UZ(0, "span", 32), a.ALo(1, "luHighlight")), 2 & Ue) {
      const Ke = Me.$implicit;
      a.oxw(2);
      const Ze = a.MAs(2),
        Ee = a.oxw();
      a.Q6J("innerHTML", a.xi3(1, 1, Ee.displayPatient(Ke), Ze.searchText), a.oJD);
    }
  }
  function We(Ue, Me) {
    if (1 & Ue && (a.TgZ(0, "lu-data-list", 30), a.ALo(1, "luFilterByText"), a.YNc(2, Rt, 2, 4, "ng-template", null, 31, a.W1O), a.qZA()), 2 & Ue) {
      const Ke = a.MAs(3);
      a.oxw();
      const Ze = a.MAs(2),
        Ee = a.oxw();
      a.Q6J("items", a.xi3(1, 3, Ee.patientOptions, Ze.searchText))("itemContent", Ke)("displayValueFn", Ee.displayPatient.bind(Ee));
    }
  }
  function Re(Ue, Me) {
    1 & Ue && (a.TgZ(0, "lu-form-message", 26), a._uU(1, " Поле обязательно "), a.qZA());
  }
  function st(Ue, Me) {
    if (1 & Ue && (a.ynx(0), a.TgZ(1, "lu-combobox", 27, 28), a.YNc(3, We, 4, 6, "lu-data-list", 29), a.qZA(), a.YNc(4, Re, 2, 0, "lu-form-message", 10), a.BQk()), 2 & Ue) {
      const Ke = a.oxw();
      a.xp6(1), a.Q6J("formControl", Ke.selectedPatientControl)("displayValueFn", Ke.displayPatient.bind(Ke)), a.xp6(3), a.Q6J("ngIf", Ke.selectedPatientControl.touched && Ke.selectedPatientControl.hasError("required"));
    }
  }
  function q(Ue, Me) {
    1 & Ue && a._UZ(0, "lu-combobox", 33);
  }
  function mt(Ue, Me) {
    if (1 & Ue) {
      const Ke = a.EpF();
      a.TgZ(0, "button", 34), a.NdJ("click", function () {
        const je = a.CHM(Ke).$implicit,
          Mt = a.oxw();
        return a.KtG(Mt.getControl(Mt.catheterForm, "catheterName").patchValue(je));
      }), a._uU(1), a.qZA();
    }
    if (2 & Ue) {
      const Ke = Me.$implicit;
      a.Q6J("value", Ke), a.xp6(1), a.hij(" ", Ke, " ");
    }
  }
  function ut(Ue, Me) {
    if (1 & Ue) {
      const Ke = a.EpF();
      a.TgZ(0, "div", 35)(1, "peripheral-catheter", 36), a.NdJ("peripheralFormSubmitted", function (Ee) {
        a.CHM(Ke);
        const je = a.oxw();
        return a.KtG(je.addPeripheralData(Ee));
      })("peripheralCatheterFormChanges", function (Ee) {
        a.CHM(Ke);
        const je = a.oxw();
        return a.KtG(je.setChildFormValue(Ee));
      }), a.qZA()();
    }
    if (2 & Ue) {
      const Ke = a.oxw();
      a.xp6(1), a.Q6J("isRequired", Ke.isRequired);
    }
  }
  function Ct(Ue, Me) {
    if (1 & Ue) {
      const Ke = a.EpF();
      a.TgZ(0, "div", 37)(1, "urinary-catheter", 38), a.NdJ("urinaryFormSubmitted", function (Ee) {
        a.CHM(Ke);
        const je = a.oxw();
        return a.KtG(je.addUrinaryData(Ee));
      }), a.qZA()();
    }
    if (2 & Ue) {
      const Ke = a.oxw();
      a.xp6(1), a.Q6J("isRequired", Ke.isRequired);
    }
  }
  let Ft = ((Et = class {
    constructor(Me = (0, a.f3M)(W.qu), Ke, Ze = (0, a.f3M)(R.Jv), Ee, je, Mt, Je) {
      this.fb = Me, this.modalRef = Ke, this.messageService = Ze, this.userContext = Ee, this.catheterPatientService = je, this.datePipe = Mt, this.patientData = Je, this.isFioSelectable = !1, this.patientOptions = [], this.selectedPatientControl = new W.NI(null), this.installDateCtrl = new W.NI(null, [W.kI.required]), this.installTimeCtrl = new W.NI(null, [W.kI.required]), this.isRequired = !0, this.maxDate = new Date(), this.minDate = (0, J.Z)(new Date(), -1), this.catheterNames = ["Периферический", "Мочевой"], this.availableCatheterNames = this.catheterNames, this.catheterFormField = {
        installDatetimeSet: [null, [W.kI.required]],
        dept: [null],
        fio: [null],
        catheterName: [null, [W.kI.required]],
        urinaryCatheter: [null],
        peripheralCatheter: [null],
        currentUser: [null],
        currentUserCode: [null],
        monitoringDateTime: [null],
        monitoringDate: [null],
        installDateTime: [null]
      }, this.catheterForm = this.fb.group(this.catheterFormField), this.cathetersFormList = new W.Oe([]), this.userContext.getUserContext().pipe((0, F.t)(this)).subscribe(Xt => {
        if (this.currentUser = Xt, !Xt) return;
        const Nn = new G.I(Xt);
        this.getControl(this.catheterForm, "currentUser").patchValue(Nn.officialName), this.getControl(this.catheterForm, "currentUserCode").patchValue(null != Xt?.employeeId ? `${Xt.employeeId}` : null), this.getControl(this.catheterForm, "dept").patchValue(Xt.department?.fullName), this.getControl(this.catheterForm, "dept").disable();
      });
    }
    ngAfterViewInit() {
      if (this.installDateCtrl.valueChanges.pipe((0, F.t)(this)).subscribe(Me => {
        this.mergeInstallDateTime(Me, this.installTimeCtrl.value);
      }), this.installTimeCtrl.valueChanges.pipe((0, F.t)(this)).subscribe(Me => {
        if (!Me) return;
        const Ke = Me.split(":")[0],
          Ze = Me.split(":")[1];
        +Ke > 23 || +Ze > 59 ? (this.installTimeCtrl.reset(null, {
          emitEvent: !1
        }), this.installTimeCtrl.setErrors({
          invalidTime: !0
        }), this.installTimeCtrl.markAsTouched(), this.installTimeCtrl.updateValueAndValidity()) : this.mergeInstallDateTime(this.installDateCtrl.value, Me);
      }), (0, ye.YV)(this.catheterForm, "treatmentDateTime")?.valueChanges.pipe((0, F.t)(this)).subscribe(Me => {
        Me = new Date(Me).toISOString(), this.getControl(this.catheterForm, "treatmentDate").patchValue(Me.split("T")[0]), this.getControl(this.catheterForm, "treatmentDateTime").patchValue(Me);
      }), this.patientData?.careCase?.careCaseId || this.patientData?.careCase?.fullName) {
        const Me = this.patientData.careCase.fullName || [this.patientData.careCase.lastName, this.patientData.careCase.firstName, this.patientData.careCase.secondName].filter(Boolean).join(" ");
        this.getControl(this.catheterForm, "fio").patchValue(Me), this.getControl(this.catheterForm, "fio").disable({
          emitEvent: !1
        }), this.selectedPatientControl.disable({
          emitEvent: !1
        }), this.isFioSelectable = !1;
      } else {
        this.isFioSelectable = !0, this.selectedPatientControl.setValidators([W.kI.required]);
        const Me = Array.isArray(this.patientData?.patientOptions) ? this.patientData.patientOptions : [];
        Me.length ? this.patientOptions = this.normalizePatientOptions(Me) : this.loadDepartmentPatients();
      }
      this.selectedPatientControl.valueChanges.pipe((0, F.t)(this)).subscribe(Me => {
        this.getControl(this.catheterForm, "fio").patchValue(Me?.fullName || null, {
          emitEvent: !1
        });
      }), Array.isArray(this.patientData?.allowedCatheterTypes) && this.patientData.allowedCatheterTypes.length && (this.availableCatheterNames = this.patientData.allowedCatheterTypes), this.patientData?.preferredCatheterName && this.getControl(this.catheterForm, "catheterName").patchValue(this.patientData.preferredCatheterName), this.getControl(this.catheterForm, "catheterName").valueChanges.pipe((0, F.t)(this)).subscribe(() => {
        this.getControl(this.catheterForm, "urinaryCatheter").reset(null), this.getControl(this.catheterForm, "peripheralCatheter").reset(null);
      });
    }
    loadDepartmentPatients() {
      var Me = this;
      return (0, t.Z)(function* () {
        try {
          const Ke = Me.currentUser || (yield (0, fe.z)(Me.userContext.getUserContext())),
            Ze = (0, te.pq)(Ke);
          Me.patientOptions = yield Me.catheterPatientService.getDepartmentPatients(Ze);
        } catch {
          Me.patientOptions = [], Me.messageService.warning("Не удалось загрузить список пациентов отделения");
        }
      })();
    }
    normalizePatientOptions(Me) {
      return Me.map(Ke => {
        const Ze = Ke?.careCase || Ke,
          Ee = Ke?.careCaseId || Ze?.careCaseId,
          je = Ke?.actualPatientId || Ke?.patientId || Ze?.actualPatientId || Ze?.patientId,
          Mt = Ke?.fio || Ke?.fullName || [Ze?.lastName, Ze?.firstName, Ze?.secondName].filter(Boolean).join(" ").trim();
        return Ee && Mt ? {
          careCaseId: Ee,
          actualPatientId: je,
          departmentId: Ke?.departmentId || Ke?.patientMovement?.departmentId,
          birthDate: Ke?.birthDate || Ze?.birthDate,
          cardNumber: Ke?.cardNumber || Ke?.hospitalCard?.fullNumber || Ke?.hospitalCard?.number,
          fio: Mt,
          fullName: Ke?.fullName || Mt,
          label: Ke?.label || Mt
        } : null;
      }).filter(Ke => !!Ke);
    }
    mergeInstallDateTime(Me, Ke) {
      if (!Me || !Ke) return;
      const Ze = Ke.split(":")[0],
        Ee = Ke.split(":")[1],
        je = this.getControl(this.catheterForm, "installDatetimeSet"),
        Mt = ke()(Me).startOf("day").add(+Ze, "h").add(+Ee, "m").toDate();
      je.setValue(Mt), this.getControl(this.catheterForm, "installDateTime").setValue(Mt);
    }
    isInstallDateTimeAllowed(Me) {
      if (!Me) return !1;
      const Ke = ke()(Me),
        Ze = ke()(this.minDate).startOf("day"),
        Ee = ke()();
      return !Ke.isBefore(Ze) && !Ke.isAfter(Ee);
    }
    getControl(Me, Ke) {
      return (0, ye.YV)(Me, Ke);
    }
    addUrinaryData(Me) {
      this.getControl(this.catheterForm, "urinaryCatheter").patchValue(Me.data);
    }
    addPeripheralData(Me) {
      this.getControl(this.catheterForm, "peripheralCatheter").patchValue(Me.data);
    }
    syncAndValidateChildForm(Me) {
      if ("Периферический" === Me) {
        const Ke = this.peripheralCatheterComponent?.peripheralCatheterForm;
        return !(!Ke || (Ke.markAllAsTouched(), !Ke.valid) || (this.getControl(this.catheterForm, "peripheralCatheter").patchValue(Ke.getRawValue()), 0));
      }
      if ("Мочевой" === Me) {
        const Ke = this.urinaryCatheterComponent?.urinaryCatheterForm;
        return !(!Ke || (Ke.markAllAsTouched(), !Ke.valid) || (this.getControl(this.catheterForm, "urinaryCatheter").patchValue(Ke.getRawValue()), 0));
      }
      return !1;
    }
    displayFn(Me) {
      return Me.name;
    }
    displayPatient(Me) {
      if (!Me) return "";
      const Ke = Me.birthDate ? this.datePipe.transform(Me.birthDate, "dd.MM.yyyy") : "";
      return [Me.fio, Ke, Me.cardNumber].filter(Boolean).join(", ");
    }
    comparePatients(Me, Ke) {
      return !!Me && !!Ke && Me.careCaseId === Ke.careCaseId;
    }
    checkAndApprove() {
      if (this.installDateCtrl.markAsTouched(), this.installTimeCtrl.markAsTouched(), this.catheterForm.markAllAsTouched(), this.mergeInstallDateTime(this.installDateCtrl.value, this.installTimeCtrl.value), this.isFioSelectable && (this.selectedPatientControl.markAsTouched(), !this.selectedPatientControl.value)) return void this.messageService.warning("Выберите пациента из списка");
      const Me = this.getControl(this.catheterForm, "catheterName").value,
        Ke = this.getControl(this.catheterForm, "installDatetimeSet").value;
      Me ? Ke && this.installDateCtrl.valid && this.installTimeCtrl.valid ? this.isInstallDateTimeAllowed(Ke) ? this.syncAndValidateChildForm(Me) ? this.modalRef.close({
        ...this.catheterForm.getRawValue(),
        selectedPatient: this.selectedPatientControl.value
      }) : this.messageService.warning("Заполните параметры катетера") : this.messageService.warning("Дата и время установки не могут быть в будущем. Допустимы вчера и сегодня.") : this.messageService.warning("Укажите дату и время установки") : this.messageService.warning("Выберите тип катетера");
    }
    setChildFormValue(Me) {
      this.catheterForm.patchValue({
        ...this.catheterForm.value,
        ...Me
      });
    }
  }).ɵfac = function (Ke) {
    return new (Ke || Et)(a.Y36(W.qu), a.Y36(pe.Rn), a.Y36(R.Jv), a.Y36(be.oL), a.Y36(le.O), a.Y36(m.uU), a.Y36(B.UM, 8));
  }, Et.ɵcmp = a.Xpm({
    type: Et,
    selectors: [["catheter-installation"]],
    viewQuery: function (Ke, Ze) {
      if (1 & Ke && (a.Gf(ae.j, 5), a.Gf(Y.q, 5)), 2 & Ke) {
        let Ee;
        a.iGM(Ee = a.CRH()) && (Ze.peripheralCatheterComponent = Ee.first), a.iGM(Ee = a.CRH()) && (Ze.urinaryCatheterComponent = Ee.first);
      }
    },
    standalone: !0,
    features: [a._Bn([m.uU]), a.jDz],
    decls: 44,
    vars: 14,
    consts: [[1, "expand-panel"], [1, "content-dialog-header"], [1, "header-label"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "close-icon", 3, "size"], [1, "expand-panel__content", 3, "formGroup"], [1, "content-sizes"], [1, "content-sizes__row"], [1, "content-sizes__label"], [3, "formControl", "minDate", "maxDate"], ["type", "error", 4, "ngIf"], [1, "form__group", "time-field-size"], [1, "time-field-size"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", 1, "time-field-size", 3, "formControl"], [1, "row"], ["formControlName", "dept", 2, "margin-top", "8px"], [4, "ngIf", "ngIfElse"], ["fioReadonly", ""], [1, "row", "catheter-name-content"], ["formControlName", "catheterName", 2, "margin-top", "8px", "margin-bottom", "16px"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "row", "style", "width: 496px; margin-top: 16px;", 4, "ngIf"], ["class", "row", "style", "margin-top: 16px;", 4, "ngIf"], [1, "action"], ["lu-button-outer", "", "size", "medium", 3, "click"], ["lu-button-raised", "", "color", "blue", "size", "medium", 3, "click"], ["type", "error"], ["type", "autocomplete", 2, "margin-top", "8px", 3, "formControl", "displayValueFn"], ["comboboxFio", ""], [3, "items", "itemContent", "displayValueFn", 4, "luData"], [3, "items", "itemContent", "displayValueFn"], ["patientTemplate", ""], [3, "innerHTML"], ["formControlName", "fio", 2, "margin-top", "8px"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click"], [1, "row", 2, "width", "496px", "margin-top", "16px"], [3, "isRequired", "peripheralFormSubmitted", "peripheralCatheterFormChanges"], [1, "row", 2, "margin-top", "16px"], [3, "isRequired", "urinaryFormSubmitted"]],
    template: function (Ke, Ze) {
      if (1 & Ke && (a.TgZ(0, "div", 0)(1, "div", 1)(2, "span", 2), a._uU(3, "Установка катетера пациенту"), a.qZA(), a.TgZ(4, "button", 3), a.NdJ("click", function () {
        return Ze.modalRef.close();
      }), a._UZ(5, "lu-svg-icon", 4), a.qZA()(), a.TgZ(6, "form", 5)(7, "div", 6)(8, "span"), a._uU(9, "Дата и время установки"), a.qZA(), a.TgZ(10, "div", 7)(11, "div", 8)(12, "label"), a._UZ(13, "lu-calendar-field", 9), a.YNc(14, n, 2, 0, "lu-form-message", 10), a.qZA()(), a.TgZ(15, "div", 11)(16, "label")(17, "lu-input-wrapper", 12), a._UZ(18, "input", 13), a.YNc(19, Se, 2, 0, "lu-form-message", 10), a.YNc(20, qe, 2, 0, "lu-form-message", 10), a.qZA()()()()(), a.TgZ(21, "div", 14)(22, "span"), a._uU(23, "Отделение"), a.qZA(), a._UZ(24, "lu-combobox", 15), a.qZA(), a.TgZ(25, "div", 14)(26, "span"), a._uU(27, "ФИО"), a.qZA(), a.YNc(28, st, 5, 3, "ng-container", 16), a.YNc(29, q, 1, 0, "ng-template", null, 17, a.W1O), a.qZA(), a.TgZ(31, "div", 18)(32, "span"), a._uU(33, "Выберите катетер"), a.qZA(), a.TgZ(34, "lu-radio-group", 19)(35, "lu-button-group"), a.YNc(36, mt, 2, 2, "button", 20), a.qZA()(), a.YNc(37, ut, 2, 1, "div", 21), a.YNc(38, Ct, 2, 1, "div", 22), a.qZA()(), a.TgZ(39, "div", 23)(40, "button", 24), a.NdJ("click", function () {
        return Ze.modalRef.close();
      }), a._uU(41, " Отменить "), a.qZA(), a.TgZ(42, "button", 25), a.NdJ("click", function () {
        return Ze.checkAndApprove();
      }), a._uU(43, " Установить "), a.qZA()()()), 2 & Ke) {
        const Ee = a.MAs(30);
        a.xp6(5), a.Q6J("size", 24), a.xp6(1), a.Q6J("formGroup", Ze.catheterForm), a.xp6(7), a.Q6J("formControl", Ze.installDateCtrl)("minDate", Ze.minDate)("maxDate", Ze.maxDate), a.xp6(1), a.Q6J("ngIf", Ze.installDateCtrl.touched && Ze.installDateCtrl.hasError("required")), a.xp6(4), a.Q6J("formControl", Ze.installTimeCtrl), a.xp6(1), a.Q6J("ngIf", Ze.installTimeCtrl.touched && Ze.installTimeCtrl.hasError("invalidTime")), a.xp6(1), a.Q6J("ngIf", Ze.installTimeCtrl.touched && Ze.installTimeCtrl.hasError("required")), a.xp6(8), a.Q6J("ngIf", Ze.isFioSelectable)("ngIfElse", Ee), a.xp6(8), a.Q6J("ngForOf", Ze.availableCatheterNames), a.xp6(1), a.Q6J("ngIf", "Периферический" === Ze.getControl(Ze.catheterForm, "catheterName").value), a.xp6(1), a.Q6J("ngIf", "Мочевой" === Ze.getControl(Ze.catheterForm, "catheterName").value);
      }
    },
    dependencies: [m.ez, m.sg, m.O5, d.F, d.w, N.o, N.k, I.W1, I.mc, y.j, y.R, j.n, j.m, M.X, M.l, O.u, O.g, L.F, L.J, C.c, C.l, v.j, v.e, f.f, f.L, E.R, h.c, h.H, x.LA, x.HY, u.Ki, u.Bf, b.y8, b.K2, A.P, A.X, T.h, T.q, W.UX, W._Y, W.Fj, W.JJ, W.JL, W.oH, W.sg, W.u, ae.j, Y.q],
    styles: ["@media ((min-width: 600px) and (max-width: 960px)){[_nghost-%COMP%]{display:block;height:100vh;padding-top:1px!important}}button[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #CCCCCC;margin-left:8px;margin-top:-8px}.header-label[_ngcontent-%COMP%]{font-size:20px;font-weight:600;height:28px}@media ((min-width: 600px) and (max-width: 960px)){.header-label[_ngcontent-%COMP%]{font-size:17px;height:24px}}.content-sizes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;height:72px;width:264px}.content-sizes__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:8px}.content-sizes__label[_ngcontent-%COMP%]{width:136px!important;height:40px!important}.content-sizes__label[_ngcontent-%COMP%]     lu-calendar-field-host{--lu-input-width: 136px;height:40px;display:block}.content-sizes__label[_ngcontent-%COMP%]     .lu-input-container, .content-sizes__label[_ngcontent-%COMP%]     .lu-form-field, .content-sizes__label[_ngcontent-%COMP%]     input{width:136px!important;height:40px!important;min-height:40px!important}.expand-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:24px}@media ((min-width: 600px) and (max-width: 960px)){.expand-panel[_ngcontent-%COMP%]{margin:16px 16px 0;height:calc(100vh - 16px);width:calc(100vw - 32px)}}.expand-panel__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}@media ((min-width: 600px) and (max-width: 960px)){.expand-panel__content[_ngcontent-%COMP%]{height:calc(100vh - 234px);padding-top:16px;overflow-y:auto;margin-bottom:0!important}}.content-dialog-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-bottom:24px;margin-top:24px;height:28px}@media ((min-width: 600px) and (max-width: 960px)){.content-dialog-header[_ngcontent-%COMP%]{height:56px;margin-top:-16px;margin-bottom:8px;margin-left:-16px;width:100vw;padding:16px;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}.content-dialog-header[_ngcontent-%COMP%]     .close-icon{--lu-svg-icon-color: #B3B3B3}.content-dialog-header[_ngcontent-%COMP%]     .close-icon:hover{--lu-svg-icon-color: #999999;cursor:pointer}}.catheter-name-content[_ngcontent-%COMP%]{margin-top:8px;padding:16px 256px 16px 16px;background:#F2F2F2;width:100%}@media ((min-width: 600px) and (max-width: 960px)){.catheter-name-content[_ngcontent-%COMP%]   lu-radio-group[_ngcontent-%COMP%]{margin-bottom:0!important}}.catheter-name-content__radio[_ngcontent-%COMP%]{display:block;margin-top:8px;margin-bottom:0}.action[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px;height:40px;justify-content:flex-end;align-items:center;margin-top:32px;margin-bottom:-24px}@media ((min-width: 600px) and (max-width: 960px)){.action[_ngcontent-%COMP%]{margin-bottom:0;height:72px;border-top:1px solid #E6E6E6;margin-top:unset;width:100vw;padding:16px;margin-left:-16px}}.time-field-size[_ngcontent-%COMP%]{width:112px}.catheter-type[_ngcontent-%COMP%]{height:38px;margin-top:8px;margin-bottom:16px}"]
  }), Et);
  Ft = (0, e.gn)([(0, F.c)()], Ft);
});
