// Extracted class; external identifiers resolve in modules/4267.js.
(class {
  constructor(Dn, vt, an, li, zn, $t, Mn, Qn, In, ui) {
    this.modalRef = Dn, this.modalData = vt, this.messageService = an, this.fb = li, this.cdr = zn, this.proceduresService = $t, this.pimCompositionService = Mn, this.store = Qn, this.userContextService = In, this.breakpointObserver = ui, this.patientFio = "", this.procedure = "", this.procedureDisplayInfo = null, this.materialsMap = {
      patch: "Лейкопластырь гипоаллергенный на нетканной основе",
      bandage: "Бинт марлевый медицинский стерильный 5м х 10см №1х1",
      syringe: "Шприц для гепарина Heparin-Syringe, 30 ml with Luer-Lock"
    }, this.medicinesMap = {
      betadine: "Бетадин р-р д/наруж 10% фл пласт 120мл №1",
      iodine: "Йод р-р д/наруж. прим. спирт. 5 % 10 мл фл оран стек N 1x1",
      brilliantGreen: "Бриллиантовый зеленый р-р д/наруж. прим. спирт. 1 % 25 мл фл N 1x1"
    }, this.fieldLabelsMap = {
      complaints: "Жалобы",
      description: "Описание",
      conclusion: "Заключение"
    }, this.activeField = "complaints", this.isLoading = !1, this.isLoad = !1, this.isDeleteBtn = !1, this.isDelete = !1, this.isTablet = !1, this.userData = null;
    const To = vt?.data;
    To && (this.patientFio = [To?.careCase?.lastName, To?.careCase?.firstName, To?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [To?.procedureAssignment?.assignmentCode, To?.procedureAssignment?.assignmentName].filter(Boolean).join(" - ")), this.protocolForm = this.fb.group({
      complaints: [""],
      description: [""],
      conclusion: [""],
      materials: this.fb.group({
        patch: [!1],
        bandage: [!1],
        syringe: [!1]
      }),
      medicines: this.fb.group({
        betadine: [!1],
        iodine: [!1],
        brilliantGreen: [!1]
      })
    });
  }
  ngOnInit() {
    this.breakpointObserver.observe(B.o).subscribe(Dn => this.isTablet = Dn.matches), this.userContextService.getUserContext().pipe((0, f.h)(Dn => !!Dn), (0, v.t)(this)).subscribe(Dn => {
      this.userData = Dn;
    }), this.activateProcedure(), this.restoreDraft();
  }
  get selectedMaterials() {
    const Dn = this.protocolForm.get("materials")?.value ?? {};
    return Object.entries(Dn).filter(([vt, an]) => an).map(([vt]) => this.materialsMap[vt]);
  }
  get selectedMedicines() {
    const Dn = this.protocolForm.get("medicines")?.value ?? {};
    return Object.entries(Dn).filter(([vt, an]) => an).map(([vt]) => this.medicinesMap[vt]);
  }
  get activeFieldLabel() {
    return this.fieldLabelsMap[this.activeField];
  }
  onFieldFocus(Dn) {
    this.activeField !== Dn && (this.activeField = Dn, this.cdr.detectChanges());
  }
  focusComplaintsTextarea() {
    setTimeout(() => {
      this.complaintsTextarea?.contentEditable?.nativeElement?.focus();
    });
  }
  buildProtocolString() {
    const Dn = this.protocolForm.value,
      vt = [];
    Dn.complaints && vt.push(`\u0416\u0430\u043b\u043e\u0431\u044b: ${Dn.complaints}`), Dn.description && vt.push(`\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ${Dn.description}`), Dn.conclusion && vt.push(`\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: ${Dn.conclusion}`);
    const an = this.selectedMaterials;
    an.length && vt.push(`\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b: ${an.join(", ")}`);
    const li = this.selectedMedicines;
    return li.length && vt.push(`\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430: ${li.join(", ")}`), vt.join(" ");
  }
  get procedureUid() {
    return this.modalData.data.procedureAssignment.assignmentCompositionUid;
  }
  restoreDraft() {
    this.restoreFromFormData() ? this.isDeleteBtn = !0 : this.store.select((0, T.AO)(this.procedureUid)).pipe((0, E.q)(1)).subscribe(Dn => {
      Dn && this.protocolForm.patchValue(Dn);
    });
  }
  normalize(Dn) {
    return Dn.trim().toLowerCase().replace(/\s+/g, " ");
  }
  mapLabelsToKeys(Dn, vt) {
    const an = this.normalize(Dn.join(", ")),
      li = {};
    return Object.keys(vt).forEach(zn => {
      li[zn] = an.includes(this.normalize(vt[zn]));
    }), li;
  }
  restoreFromFormData() {
    const Dn = this.modalData?.formData;
    if (!Dn) return !1;
    const vt = {
      complaints: Dn.complaints ?? "",
      description: Dn.description ?? "",
      conclusion: Dn.conclusion ?? ""
    };
    return Dn.materials && (vt.materials = this.mapLabelsToKeys(Dn.materials, this.materialsMap)), Dn.medicines && (vt.medicines = this.mapLabelsToKeys(Dn.medicines, this.medicinesMap)), this.protocolForm.patchValue(vt), !0;
  }
  onSubmit(Dn) {
    if (!Dn) return this.store.dispatch((0, R.Ng)({
      uid: this.procedureUid,
      draft: this.protocolForm.value
    })), void this.onClose(!0);
    if (this.isLoad) return;
    this.isLoad = !0;
    const vt = this.buildProtocolString(),
      an = this.modalData.data,
      li = {
        time: new Date().toISOString(),
        currentStateValue: "completed",
        currentStateCode: "532",
        careflowStepValue: "Текущая процедура завершена",
        careflowStepCode: "at8888",
        comment: vt
      };
    this.pimCompositionService.getCompositionForCompleteWithProtocol(an, vt, Dn).pipe((0, h.w)(() => this.pimCompositionService.createProcedureDocument(an, li)), (0, h.w)(zn => (this.userData?.employee?.workplace?.id.toString(), zn?.getUid(), new Date().toISOString(), (0, x.of)(!0))), (0, v.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.store.dispatch((0, R.Zg)({
          uid: this.procedureUid
        })), this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(an?.careCase)} \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c`, {
          marginBottom: 44
        }), this.cdr.detectChanges(), this.modalRef.close(!0);
      },
      error: zn => {
        this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", zn), this.modalRef.close(!0), this.messageService.error("Не удалось выполнить процедуру");
      }
    });
  }
  activateProcedure() {
    const Dn = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoading = !0, this.proceduresService.activateProcedureWithProtocol(Dn).pipe((0, h.w)(() => this.proceduresService.getStatusAssignment(this.modalData.data.procedureAssignment.assignmentCompositionUid)), (0, u.U)(vt => ({
      ...vt,
      procedures: vt.procedures?.filter(an => an.code === Dn.code) ?? []
    })), (0, v.t)(this)).subscribe({
      next: vt => {
        const an = vt.procedures?.[0] ?? null;
        this.procedureDisplayInfo = {
          assignmentName: vt.assignmentName,
          completedDate: an?.completedDate ?? null,
          planningDate: an?.planningDate ?? null,
          description: an?.description ?? null,
          room: an?.room ?? null,
          executorName: an?.executorName ?? null,
          doctorName: vt.doctorName ?? null,
          assignmentDate: vt.assignmentDate ?? null,
          currentDay: new Date().toISOString(),
          currentUser: this.toShortFio(this.userData),
          currentUserJobTitle: this.userData.jobTitle.name
        }, this.isLoading = !1, this.cdr.detectChanges(), this.focusComplaintsTextarea();
      },
      error: () => {
        this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось активировать процедуру"), this.modalRef.close(!1);
      }
    });
  }
  toShortFio(Dn) {
    const {
      lastName: vt,
      firstName: an,
      secondName: li
    } = Dn ?? {};
    return [vt, an ? `${an[0]}.` : "", li ? `${li[0]}.` : ""].filter(Boolean).join(" ");
  }
  onClose(Dn) {
    if (this.isLoading) return;
    const vt = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.isLoad = !0, this.proceduresService.deactivateProcedure(vt).pipe((0, v.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, Dn ? (this.modalRef.close(!0), this.messageService.success("Черновик сохранён")) : (this.modalRef.close(!1), this.cdr.detectChanges());
      },
      error: () => {
        this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отменить взятие в работу"), this.modalRef.close(!1);
      }
    });
  }
  onDeleteProtocol() {
    if (this.isLoad) return;
    this.isLoad = !0;
    const Dn = {
      assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
      code: this.modalData.data.procedureAssignment?.procedureCode,
      workplaceId: this.userData?.employee?.workplace?.id.toString(),
      doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
      doctorJob: this.userData?.jobTitle?.name,
      updated: new Date().toISOString()
    };
    this.pimCompositionService.getCompositionForCancel(this.modalData.data, null).pipe((0, h.w)(() => this.proceduresService.cancelProcedure(Dn)), (0, v.t)(this)).subscribe({
      next: () => {
        this.isLoad = !1, this.messageService.info(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435`, {
          marginBottom: 44
        }), this.cdr.detectChanges(), this.modalRef.close(!0);
      },
      error: vt => {
        this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", vt), this.messageService.error("Не удалось отменить процедуру");
      }
    });
  }
});
