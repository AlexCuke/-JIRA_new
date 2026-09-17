// Reconstructed name. Original methods retained; dependencies in imports.json/module.factory.js.
class OperationSideMenuComponent {
  constructor(e, n, i, u, c, D) {
    this.userContextService = e, this.breakpointObserver = n, this.store = i, this.cdr = u, this.fb = c, this.compositionService = D, this.isOpen = !1, this.isTablet = !1, this.userData = null, this.menuData = null, this.mode = null, this.checklistQuestions = tt, this.answerOptions = W, this.deviationVisibility = {}, this.dateFieldVisibility = {}, this.answerValues = {}, this.timeControl = new r.NI(P()().format(_t.nf), [(0, lt.YM)()]), this.checklistForm = this.buildChecklistForm();
  }
  buildChecklistForm() {
    const e = this.checklistQuestions.reduce((n, i) => (n[i.key] = [null, i.required ? r.kI.required : []], i.commentKey && (n[i.commentKey] = [null]), i.dateKey && (n[i.dateKey] = [null]), n), {});
    return e.systolicPressure = [null, r.kI.required], e.diastolicPressure = [null, r.kI.required], e.heartRate = [null, r.kI.required], e.frequencyRespiratory = [null, r.kI.required], e.notification = [null, r.kI.required], this.fb.group(e);
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, L.h)(e => !!e), (0, a.t)(this)).subscribe(e => {
      this.userData = e;
    }), this.breakpointObserver.observe(F.o).subscribe(e => this.isTablet = e.matches), this.store.select(G).pipe((0, A.U)(({
      data: e
    }) => ({
      data: e
    })), (0, E.x)((e, n) => e.data === n.data), (0, a.t)(this)).subscribe(({
      data: e
    }) => {
      e ? (this.menuData = e, this.isOpen = !0, this.mode = this.resolveMode(this.menuData)) : (this.menuData = null, this.isOpen = !1), this.cdr.markForCheck();
    }), this.checklistQuestions.filter(e => e.commentKey).forEach(e => {
      this.deviationVisibility[e.key] = !1, this.checklistForm.get(e.key)?.valueChanges.pipe((0, a.t)(this)).subscribe(n => {
        this.deviationVisibility[e.key] = n === e.deviationValue, this.cdr.markForCheck();
      });
    }), this.checklistQuestions.filter(e => e.dateKey).forEach(e => {
      this.dateFieldVisibility[e.key] = !1, this.checklistForm.get(e.key)?.valueChanges.pipe((0, a.t)(this)).subscribe(n => {
        this.dateFieldVisibility[e.key] = n === e.dateVisibleValue, this.cdr.markForCheck();
      });
    }), this.checklistQuestions.forEach(e => {
      this.answerValues[e.key] = this.checklistForm.get(e.key)?.value ?? null, this.checklistForm.get(e.key)?.valueChanges.pipe((0, a.t)(this)).subscribe(n => {
        this.answerValues[e.key] = n, this.cdr.markForCheck();
      });
    }), ["systolicPressure", "diastolicPressure", "heartRate", "frequencyRespiratory", "notification"].forEach(e => {
      this.checklistForm.get(e)?.valueChanges.pipe((0, a.t)(this)).subscribe(() => this.cdr.markForCheck());
    });
  }
  ngAfterViewInit() {}
  resolveMode(e) {
    const n = e?.preoperativeChecklist?.checklistStatus;
    return et.includes(n ?? "") ? "view" : "edit";
  }
  get patientFio() {
    return function it(o) {
      return o ? [o.lastName, o.firstName, o.secondName].filter(Boolean).join(" ") : "";
    }(this.menuData?.careCase);
  }
  get patientShortInfo() {
    return function ot(o) {
      if (!o) return "";
      const e = o.genderName?.charAt(0).toUpperCase() ?? "",
        n = o?.age,
        i = function rt(o) {
          if (!o) return "";
          const e = new Date(o);
          return isNaN(e.getTime()) ? "" : `${String(e.getDate()).padStart(2, "0")}.${String(e.getMonth() + 1).padStart(2, "0")}.${e.getFullYear()}`;
        }(o.birthDate);
      return [e, null !== n ? `${n} \u043b\u0435\u0442` : null, i].filter(Boolean).join(", ");
    }(this.menuData?.careCase);
  }
  get operationTitle() {
    return function st(o) {
      return o?.operation?.assignmentName ?? "";
    }(this.menuData);
  }
  get operationSchedule() {
    return function ut(o) {
      if (!o) return "";
      const e = X[o?.operation?.cito] ?? o?.operation?.cito,
        n = function ct(o) {
          if (!o) return "";
          const e = new Date(o);
          return isNaN(e.getTime()) ? "" : `${e.getDate()} ${nt[e.getMonth()]}`;
        }(o?.operation?.assignmentDate);
      return `\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e ${e} \u043d\u0430 ${n}`;
    }(this.menuData);
  }
  shouldShowDeviation(e) {
    return !(!e.commentKey || !e.deviationValue) && this.checklistForm.get(e.key)?.value === e.deviationValue;
  }
  isNegativeAnswer(e) {
    return "no" === this.answerValues[e.key];
  }
  getAnswerValue(e) {
    return this.menuData?.preoperativeChecklist?.[e.key] ?? null;
  }
  getAnswerLabel(e) {
    const n = this.getAnswerValue(e);
    return this.answerOptions.find(i => i.value === n)?.label ?? "";
  }
  getComment(e) {
    return e.commentKey ? this.menuData?.preoperativeChecklist?.[e.commentKey] ?? null : null;
  }
  isNoAnswer(e) {
    return "no" === this.getAnswerValue(e);
  }
  isNbAnswer(e) {
    return "NB" === this.getAnswerValue(e);
  }
  get hasChecklistDeviation() {
    return this.checklistQuestions.some(e => "no" === this.answerValues[e.key]);
  }
  setNotification(e) {
    this.checklistForm.get("notification")?.setValue(e), this.checklistForm.get("notification")?.markAsDirty();
  }
  onClose() {
    this.store.dispatch((0, I.D)({
      data: null
    }));
  }
  onSave() {
    console.log("Форма валидна:", this.checklistForm.valid), console.log("Значения формы включая disabled-поля (getRawValue):", this.checklistForm.getRawValue());
    const {
        actualPatientId: e,
        careCaseId: n
      } = this.menuData.careCase,
      i = this.checklistForm.getRawValue();
    i.isThromboembolicProfilacticDate = i.isThromboembolicProfilacticDate ? P()(i.isThromboembolicProfilacticDate).format("YYYY-MM-DD") : null, i.isThromboembolicProfilacticTime = "yes" === i.isThromboembolicProfilactic ? this.timeControl.getRawValue() : null, this.compositionService.getEhrByPatientId(e).pipe((0, O.w)(u => this.compositionService.createOperaationCheckListDocument(u, n, i)), (0, H.x)(() => {
      this.onClose();
    })).subscribe({
      next: u => {
        console.log("Создали композицию: ", u);
      }
    });
  }
}
