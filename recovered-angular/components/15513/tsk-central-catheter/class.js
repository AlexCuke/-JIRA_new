// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.closePanelEvent = new e.vpe(), this.fb = (0, e.f3M)(pr.qu), this.confirmationModalService = (0, e.f3M)(MC.k), this.messageService = (0, e.f3M)(tf.Jv), this.dialogData = (0, e.f3M)(rc.UM), this.dateCtrl = new pr.NI(null), this.timeCtrl = new pr.NI(null), this.vesselTypes = fu.rX, this.localizationTypes = fu.wj, this.namesCathetersTypes = fu.rx, this.centralCatheterFormField = {
      datetimeSet: [null, [pr.kI.required]],
      catheterName: [null],
      vesselType: [null],
      localization: [null],
      catheterSize: [null],
      catheterUnit: [null]
    }, this.centralCatheterForm = this.fb.group(this.centralCatheterFormField), this.centralCathetersFormList = new pr.Oe([]);
  }
  ngAfterViewInit() {
    this.centralCathetersFormList = this.getControl(this.patientSetForm, "centralCatheters"), this.patient = (0, Oc.yE)(sP.xe, this.dialogData?.careCase), this.dateCtrl.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.mergeDateTime(s, this.timeCtrl.value);
    }), this.timeCtrl.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      const o = s.split(":")[0],
        D = s.split(":")[1];
      +o > 23 || +D > 59 ? (this.timeCtrl.reset(null, {
        emitEvent: !1
      }), this.timeCtrl.setErrors({
        invalidTime: !0
      }), this.timeCtrl.markAsTouched(), this.timeCtrl.updateValueAndValidity()) : this.mergeDateTime(this.dateCtrl.value, s);
    });
  }
  mergeDateTime(s, o) {
    if (!s || !o) return;
    let D = o.split(":")[0],
      Z = o.split(":")[1];
    const X = this.getControl(this.centralCatheterForm, "datetimeSet"),
      oe = Tg()(s).add(+D, "h").add(+Z, "m").toDate();
    X.setValue(oe);
  }
  getControl(s, o) {
    return (0, nf.YV)(s, o);
  }
  addCentralCatheter() {
    this.centralCathetersFormList.push(this.centralCatheterForm), this.centralCatheterForm = this.fb.group(this.centralCatheterFormField);
  }
  get isCatName() {
    return !this.centralCathetersFormList.controls.length;
  }
  displayFn(s) {
    return s.name;
  }
  checkAndApprove() {
    if (this.centralCatheterForm.invalid) return this.centralCatheterForm.get("catheterSize").value || this.centralCatheterForm.get("catheterSize").setErrors({
      required: !0
    }), this.centralCatheterForm.get("catheterUnit").value || this.centralCatheterForm.get("catheterUnit").setErrors({
      required: !0
    }), this.centralCatheterForm.get("localization").value || this.centralCatheterForm.get("localization").setErrors({
      required: !0
    }), this.centralCatheterForm.get("vesselType").value || this.centralCatheterForm.get("vesselType").setErrors({
      required: !0
    }), this.centralCatheterForm.get("catheterName").value || this.centralCatheterForm.get("catheterName").setErrors({
      required: !0
    }), this.dateCtrl.value || this.dateCtrl.setErrors({
      required: !0
    }), this.timeCtrl.value || this.timeCtrl.setErrors({
      required: !0
    }), this.messageService.error("Обязательные поля не заполнены!"), void this.centralCatheterForm.markAsDirty();
    this.approveCatheterModal();
  }
  approveCatheterModal() {
    this.confirmationModalService.openDialog({
      title: "Установка катетера",
      message: `\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0443 ${this.patient.dativeCaseShortName}?`,
      buttonTitle: "Подтвердить",
      cancelButtonTitle: "Отменить",
      isBlueCancelButtonColor: !0
    }).pipe((0, Kn.t)(this)).subscribe(() => {
      this.addCentralCatheter(), this.closePanelEvent.emit();
    });
  }
});
