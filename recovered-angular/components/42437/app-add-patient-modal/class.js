// Extracted class; external identifiers resolve in modules/42437.js.
(class {
  constructor(Wt, Oi, Ji, Ao, Sr, us, Ps) {
    this.store = Wt, this.depts = Oi, this.employeesService = Ji, this.refreshService = Ao, this.cdr = Sr, this.terminologyService = us, this.userComposite = Ps, this.destroy$ = new M.x(), this.commaRegex = /^\d+(,)?$/, this.decimalRegex = /^\d+(,\d{1})?$/, this.compositionService = (0, e.f3M)(u.P), this.patientService = (0, e.f3M)(T.e), this.careCaseBuilderService = (0, e.f3M)(y), this.modalRef = (0, e.f3M)(x.Rn), this.currentUser = {
      id: 101,
      name: "Медсестра Постовая",
      department: {
        id: 1,
        name: "Травматологическое отделение"
      },
      isBedDepartmentUser: !0,
      isNurse: !0
    }, this.currentUserr = null, this.userDept = null, this.deptList = [], this.deptControl = new a.NI(null), this.doctorList = [], this.stomaList = [], this.displayStomaKind = hs => hs?.display ?? "", this.filteredPatientList = [], this.filteredDoctorList = [], this.patientControl = new a.NI(null, [a.kI.required]), this.doctorControl = new a.NI(null, [a.kI.required]), this.selectedDepartment = null, this.selectedPatient = null, this.selectedDoctor = null, this.stomaTypeControl = new a.NI(null, [a.kI.required]), this.stomaNameControl = new a.NI(""), this.maxDate = new Date(), this.minDate = (0, E.Z)(new Date(), -1), this.dateControl = new a.NI(new Date(), [a.kI.required]), this.timeControl = new a.NI(d()().format("HH:mm"), [a.kI.required, h()]), this.stomaSize = "", this.isBedFund = !1, this.isShowDoctorAgreementField = !1, this.isLoad = !1, this.patientSearchText$ = new M.x(), this.DEFAULT_PATIENT_LIMIT = 20, this.PATIENT_SEARCH_DEBOUNCE_MS = 350, this.suppressNextPatientSearch = !1, this.isSyncingDepartmentFromPatient = !1, this.departmentByIdCache = new Map(), this.isPatientsLoading = !1, this.isDepartmentAutoFilledFromPatient = !1;
  }
  ngOnInit() {
    var Wt = this;
    return (0, t.Z)(function* () {
      Wt.initializeLists(), Wt.store.select(te.S8).pipe((0, N.b)(Ji => {
        Wt.currentUserr = Ji, Wt.userDept = Ji?.department;
      }), (0, I.U)(Ji => {
        const Ao = Ji?.jobTitle?.name?.toLowerCase() ?? "";
        return Ao.includes("медицинская сестра") || Ao.includes("медицинский брат");
      }), (0, N.b)(Ji => {
        Wt.isShowDoctorAgreementField = Ji;
      }), (0, O.w)(Ji => Ji ? Wt.loadEmployeeWithJobTitles() : b.E)).subscribe(Ji => {
        Ji && (Wt.doctorList = Ji.employees);
      }), Wt.store.dispatch(ae.gA.getTerminology({
        request: [{
          featureKey: "stoma_kind_list",
          terminologyName: "terminology:stomakind"
        }]
      })), Wt.store.select(ae.Tb.selectTerminologyItem("terminology:stomakind", "stoma_kind_list")).subscribe(Ji => {
        "SUCCESS" === Ji.status && (Wt.stomaList = Ji.data);
      }), Wt.store.select(Y.gM).pipe((0, L.R)(Wt.destroy$)).subscribe(Ji => {
        Wt.stomaPatientListItems = Ji.map(Ao => {
          const Sr = Ao.data?.careCase;
          return {
            fio: [Sr?.lastName, Sr?.firstName, Sr?.secondName].filter(Boolean).join(" "),
            careCaseId: Sr?.careCaseId,
            actualPatientId: Sr?.actualPatientId,
            departmentId: Ao?.data?.patientMovement?.departmentId,
            ...Ao?.data
          };
        });
      }), yield Wt.depts.getDepts(), Wt.deptList = yield Wt.depts.getDeptList(), Wt.isBedFund = yield Wt.depts.getBedFund(), Wt.isBedFund ? (Wt.deptControl.setValue(Wt.userDept.fullName), Wt.deptControl.disable(), yield Wt.loadPatients(Wt.currentUserr?.department?.id, Wt.isBedFund)) : (Wt.filteredDoctorList = [...(Wt.doctorList ?? [])], yield Wt.loadPatients(void 0, Wt.isBedFund, void 0, Wt.DEFAULT_PATIENT_LIMIT)), Wt.setupSubscriptions();
    })();
  }
  loadPatients(Wt) {
    var Oi = this;
    return (0, t.Z)(function* (Ji, Ao = !1, Sr, us) {
      Oi.isPatientsLoading = !0, Oi.cdr.markForCheck();
      try {
        Oi.filteredPatientList = yield Oi.employeesService.getPatients(Ji, Ao, Sr, us);
      } finally {
        Oi.isPatientsLoading = !1, Oi.cdr.markForCheck();
      }
    }).apply(this, arguments);
  }
  loadEmployeeWithJobTitles() {
    return this.terminologyService.getTerminologyQuery("specialitylist", (0, pe.rP)({
      comparison: "not",
      items: [{
        value: null,
        field: "code",
        comparison: "eq"
      }]
    })).pipe((0, I.U)(Wt => (0, be.Cu)(Wt).items?.map(Oi => Oi.code)), (0, O.w)(Wt => this.userComposite.getEmployees((0, le.v)([], this.userDept?.id)).pipe((0, I.U)(Oi => {
      const Ji = {
        ...Oi
      };
      return Ji.employees = Oi.employees.filter(Ao => Wt.includes(Ao.speciality.id)), Ji.totalEmployees = Ji.employees.length, Ji.total = Ji.employees.length, Ji;
    }))), (0, N.b)({
      next: Wt => {
        console.log(Wt, Wt);
      },
      error: Wt => console.log(Wt)
    }), (0, C.K)(() => b.E));
  }
  onPatientSearchTextChange(Wt) {
    this.suppressNextPatientSearch ? this.suppressNextPatientSearch = !1 : this.patientSearchText$.next(Wt ?? "");
  }
  onPatientComboboxBeforeClose() {
    this.suppressNextPatientSearch = !0;
  }
  onPatientClear() {
    this.patientSearchText$.next("");
  }
  ngOnDestroy() {
    this.destroy$.next(), this.destroy$.complete();
  }
  initializeLists() {
    this.isBedFund && (this.selectedDepartment = this.currentUserr.department.fullName, this.deptControl.disable());
  }
  setupSubscriptions() {
    var Wt = this;
    this.deptControl.valueChanges.pipe((0, L.R)(this.destroy$)).subscribe(function () {
      var Oi = (0, t.Z)(function* (Ji) {
        if (Wt.isSyncingDepartmentFromPatient) return void (Wt.isSyncingDepartmentFromPatient = !1);
        if (Wt.isDepartmentAutoFilledFromPatient = !1, Wt.selectedPatient = null, Wt.patientControl.setValue(null, {
          emitEvent: !1
        }), Wt.selectedDoctor = null, Wt.doctorControl.setValue(null, {
          emitEvent: !1
        }), Wt.isBedFund) return;
        Wt.selectedDepartment = Ji ?? null;
        const Ao = Ji?.id;
        Ao ? yield Wt.loadPatients(Ao, Wt.isBedFund) : yield Wt.loadPatients(void 0, Wt.isBedFund, void 0, Wt.DEFAULT_PATIENT_LIMIT);
      });
      return function (Ji) {
        return Oi.apply(this, arguments);
      };
    }()), this.patientControl.valueChanges.pipe((0, L.R)(this.destroy$)).subscribe(function () {
      var Oi = (0, t.Z)(function* (Ji) {
        if (Ji) {
          if ("string" == typeof Ji) {
            const Ao = Wt.filteredPatientList.find(Sr => Sr.name === Ji);
            Ao ? (Wt.patientControl.setValue(Ao, {
              emitEvent: !1
            }), Wt.selectedPatient = Ao, Wt.suppressNextPatientSearch = !0) : Wt.selectedPatient = null;
          } else Wt.selectedPatient = Ji, Wt.suppressNextPatientSearch = !0;
          if (Wt.selectedPatient?.departmentId && Wt.deptControl.enabled) {
            const Ao = yield Wt.resolveDepartmentById(Wt.selectedPatient.departmentId);
            Ao && (Wt.isSyncingDepartmentFromPatient = !0, Wt.isDepartmentAutoFilledFromPatient = !0, Wt.selectedDepartment = Ao, Wt.deptControl.setValue(Ao, {
              emitEvent: !1
            }));
          }
        } else if (Wt.selectedPatient = null, !Wt.isBedFund) if (Wt.isDepartmentAutoFilledFromPatient) Wt.isDepartmentAutoFilledFromPatient = !1, Wt.selectedDepartment = null, Wt.isSyncingDepartmentFromPatient = !0, Wt.deptControl.setValue(null, {
          emitEvent: !1
        }), yield Wt.loadPatients(void 0, Wt.isBedFund, void 0, Wt.DEFAULT_PATIENT_LIMIT);else {
          const Ao = Wt.selectedDepartment?.id;
          yield Wt.loadPatients(Ao, Wt.isBedFund, void 0, Ao ? void 0 : Wt.DEFAULT_PATIENT_LIMIT);
        }
      });
      return function (Ji) {
        return Oi.apply(this, arguments);
      };
    }()), this.patientSearchText$.pipe((0, v.b)(this.PATIENT_SEARCH_DEBOUNCE_MS), (0, f.x)(), (0, L.R)(this.destroy$)).subscribe(function () {
      var Oi = (0, t.Z)(function* (Ji) {
        if (Wt.isBedFund || Wt.selectedDepartment?.id) return;
        const Ao = Ji?.trim();
        Ao ? yield Wt.loadPatients(void 0, Wt.isBedFund, Ao) : yield Wt.loadPatients(void 0, Wt.isBedFund, void 0, Wt.DEFAULT_PATIENT_LIMIT);
      });
      return function (Ji) {
        return Oi.apply(this, arguments);
      };
    }()), this.doctorControl.valueChanges.pipe((0, L.R)(this.destroy$)).subscribe(Oi => {
      this.selectedDoctor = Oi;
    });
  }
  changeStomaSize(Wt) {
    const Oi = Wt.target,
      Ji = Oi.value;
    "" === Ji || this.commaRegex.test(Ji) || this.decimalRegex.test(Ji) ? this.stomaSize = Ji : Oi.value = this.stomaSize;
  }
  displayDept(Wt) {
    return Wt.name;
  }
  displayPatient(Wt) {
    return Wt ? Wt.name : "";
  }
  displayPatientt(Wt) {
    return Wt ? `${Wt.fio}, ${d()(Wt.birthDate).format("DD.MM.YYYY")}, ${Wt.cardNumber}` : "";
  }
  displayDoctor(Wt) {
    if (!Wt) return "";
    const Oi = Wt?.fio,
      Ji = Wt?.jobTitle?.name,
      Ao = Wt?.department?.name;
    return [Oi, Ji, Ao].filter(Boolean).join(", ");
  }
  resolveDepartmentById(Wt) {
    var Oi = this;
    return (0, t.Z)(function* () {
      if (!Wt) return null;
      const Ji = Oi.deptList.find(({
        id: us
      }) => us === Wt);
      if (Ji) return Ji;
      const Ao = Oi.departmentByIdCache.get(Wt);
      if (Ao) return Ao;
      const Sr = yield Oi.depts.getDepartmentById(Wt);
      return Sr && Oi.departmentByIdCache.set(Wt, Sr), Sr;
    })();
  }
  resolveSelectedPatientIds(Wt) {
    const Oi = Wt?.careCase;
    return {
      patientId: Wt?.actualPatientId || Wt?.patientId || Oi?.actualPatientId || Oi?.patientId,
      careCaseId: Wt?.careCaseId || Oi?.careCaseId
    };
  }
  onSubmit() {
    var Wt = this;
    return (0, t.Z)(function* () {
      Wt.deptControl.value || Wt.deptControl.setErrors({
        required: !0
      }), "Иное" === Wt.stomaTypeControl.value?.display ? Wt.stomaNameControl.setValidators([a.kI.required]) : Wt.stomaNameControl.clearValidators(), Wt.stomaNameControl.updateValueAndValidity();
      const Ji = [Wt.patientControl, Wt.dateControl, Wt.timeControl, Wt.stomaTypeControl];
      if (Wt.isShowDoctorAgreementField && Ji.push(Wt.doctorControl), "Иное" === Wt.stomaTypeControl.value?.display && Ji.push(Wt.stomaNameControl), Ji.forEach(oi => oi.markAsTouched()), Ji.some(oi => oi.invalid)) return console.error("Форма невалидна.", Ji);
      const Ao = Wt.patientControl.value,
        {
          patientId: Sr,
          careCaseId: us
        } = Wt.resolveSelectedPatientIds(Ao);
      if (!Sr || !us) return Wt.patientControl.setErrors({
        ...Wt.patientControl.errors,
        missingIdentifiers: !0
      }), Wt.patientControl.markAsTouched(), console.error("У выбранного пациента отсутствует идентификатор пациента или обращения.", Ao);
      Wt.isLoad = !0;
      const hs = {
        careStartDate: Wt.dateControl.value,
        careStartTime: Wt.timeControl.value,
        stomaType: Wt.stomaTypeControl.value.display,
        stomaName: Wt.stomaNameControl.value,
        stomaSize: Wt.stomaSize,
        doctor: Wt.isShowDoctorAgreementField ? Wt.doctorControl.value : {
          fio: [Wt.currentUserr?.lastName, Wt.currentUserr?.firstName, Wt.currentUserr?.secondName].filter(Boolean).join(" "),
          id: Wt.currentUserr.employeeId
        },
        currentUser: Wt.currentUserr
      };
      console.log("ОБъект: ", hs);
      try {
        const oi = yield (0, A.z)(Wt.patientService.findPatientInfo(Sr));
        if (!oi?.ehrId) throw new Error("Не удалось найти ehrId для пациента.");
        const yo = yield (0, A.z)(Wt.compositionService.getEhr(oi.ehrId));
        if (!yo) throw new Error("Не удалось получить экземпляр ЭМК (IEhr).");
        const Qi = yield (0, A.z)(Wt.compositionService.createStomaObservationCardDocument(yo, us, hs));
        Qi && (Wt.store.dispatch((0, G.Wn)({
          careCaseId: us
        })), setTimeout(() => {
          Wt.refreshService.triggerReloadList(), Wt.isLoad = !1;
        }, 1e3)), Wt.modalRef.close(!0), Wt.store.dispatch((0, ye.Gs)({
          watchMenu: {
            isOpen: !0,
            compositionId: Qi.uid
          }
        }));
      } catch (oi) {
        console.error("Ошибка при создании композиции:", oi), Wt.isLoad = !1;
      }
    })();
  }
});
