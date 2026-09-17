// Extracted class; external identifiers resolve in modules/41396.js.
(class {
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
});
