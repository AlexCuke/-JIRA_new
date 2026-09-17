// Extracted from main; webpack module 42437. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    x: () => ji,
    Y: () => ti
  });
  var t = i(15861),
    e = i(94650),
    a = i(24006),
    m = i(71764),
    d = i.n(m),
    M = i(77579),
    b = i(60515),
    A = i(83905),
    N = i(18505),
    I = i(54004),
    O = i(63900),
    L = i(82722),
    C = i(70262),
    v = i(78372),
    f = i(71884),
    E = i(5238);
  function h() {
    const Ei = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return Wt => {
      const Oi = Wt.value;
      return Oi ? Ei.test(Oi) ? null : {
        invalidTime: !0
      } : null;
    };
  }
  var x = i(44348),
    u = i(72948),
    T = i(59194);
  const R = "YYYY-MM-DD",
    B = {
      21: 1,
      14: 2,
      22: 3,
      9: 4,
      1: 5,
      2: 6,
      27: 7,
      26: 8,
      4: 9,
      7: 10,
      10: 11,
      12: 12,
      11: 13,
      13: 14,
      15: 15,
      5: 16,
      55: 17,
      101: 19
    },
    fi = class {
      createBuilder(Wt) {
        return new j(Wt);
      }
    };
  let y = fi;
  fi.ɵfac = function (Oi) {
    return new (Oi || fi)();
  }, fi.ɵprov = e.Yz7({
    token: fi,
    factory: fi.ɵfac,
    providedIn: "root"
  });
  class j {
    constructor(Wt) {
      this.medregData = Wt, this.reset();
    }
    reset() {
      this.patient = {
        name: {
          lastName: null,
          firstName: null,
          secondName: null
        },
        birthDate: null,
        genderCode: null,
        socialStatusCode: null,
        workInfo: null,
        disabilityBenefit: null,
        benefitDocuments: [],
        policies: [],
        identities: [],
        citizenshipCode: null,
        attachments: [],
        identityDocument: null,
        registrationAddress: null,
        residentialAddress: null,
        temporaryAddress: null,
        contact: null,
        contactPerson: null
      }, this.careCase = {
        medicalOrganizationId: this.medregData.medOrgId.toString(),
        employeeId: this.medregData.empId,
        workPlaceId: this.medregData.empWorkplaceId,
        departmentId: this.medregData.deptId,
        departmentName: this.medregData.deptName,
        patient: this.patient,
        unidentified: !1,
        severityCode: null,
        typeOfPaymentCode: "1",
        channelCode: "6",
        digitalCode: null,
        noDocument: !1,
        admissionDetails: null,
        fieldIdentitySource: [],
        profileData: null
      };
    }
    setAdmissionParams(Wt, Oi) {
      return this.careCase.unidentified = "unknown" === Oi, this.careCase.noDocument = "word" === Oi, this.careCase.channelCode = Wt ? "4" : "6", this;
    }
    withDigitalCode(Wt) {
      return this.careCase.digitalCode = Wt, this;
    }
    withPatientDataFromVerification(Wt) {
      const {
        kis: Oi,
        erzl: Ji,
        erp: Ao,
        local: Sr
      } = Wt;
      if (Oi.length > 0 && Ji.length > 0 && Ao.length > 0) this.mergeData(Ji[0], Oi[0], Ao[0]);else if (0 === Oi.length && Ji.length > 0 && Ao.length > 0) this.mergeData(Ji[0], Ao[0], {});else if (Oi.length > 0 && Ji.length > 0 && 0 === Ao.length) this.mergeData(Ji[0], Oi[0], {});else if (0 === Oi.length && Ji.length > 0 && 0 === Ao.length) this.mergeData(Ji[0], {}, {});else if (Oi.length > 0 && 0 === Ji.length && Ao.length > 0) this.mergeData({}, Oi[0], Ao[0]);else if (Oi.length > 0 && 0 === Ji.length && 0 === Ao.length) this.mergeData({}, Oi[0], {});else {
        if (!(0 === Oi.length && 0 === Ji.length && Ao.length > 0)) return this;
        this.mergeData({}, Ao[0], {});
      }
      return this.patient.identities = this.unifyIdentities(Oi, Ji, Ao, Sr), this.careCase.admissionDetails = 1 === Ji.length ? {
        patientType: Ji[0].type
      } : {
        patientType: "-1"
      }, this;
    }
    withPatientDataFromForm(Wt, Oi) {
      return "unknown" === Oi ? (this.patient.name = {
        lastName: "неизвестный",
        firstName: "неизвестный",
        secondName: "неизвестный"
      }, this.patient.birthDate = d()().subtract(parseInt(Wt.ageVal || "0", 10), "year").format(R), this.patient.genderCode = "1") : (this.patient.name = {
        lastName: Wt.lastName,
        firstName: Wt.firstName,
        secondName: Wt.secondName
      }, this.patient.birthDate = Wt.birthDate ? d()(Wt.birthDate.value).format(R) : null, this.patient.genderCode = Wt.gender || null, this.patient.citizenshipCode = "Паспорт гражданина РФ" === Wt.selectedDocumentType ? "171" : null, Wt.snils && this.patient.identities.push({
        type: "snils",
        identity: Wt.snils.replace(/\D/g, "")
      }), Wt.numberPass && (this.patient.identityDocument = {
        typeCode: "Паспорт гражданина РФ" === Wt.selectedDocumentType ? "21" : "10",
        series: Wt.seriesPass.replace(/\s/g, ""),
        number: Wt.numberPass,
        issueDate: Wt.issuedDate,
        issuer: Wt.whoIssuedPass
      })), this;
    }
    getPatient() {
      return this.patient;
    }
    build() {
      const Wt = JSON.parse(JSON.stringify(this.careCase));
      return this.reset(), Wt;
    }
    mergeData(Wt, Oi, Ji) {
      const Ao = Wt || {},
        Sr = Oi || {},
        us = Ji || {};
      this.patient.name = Ao.name || Sr.name || us.name, this.patient.birthDate = Ao.birthDate || Sr.birthDate || us.birthDate, this.patient.genderCode = Ao.genderCode || Sr.genderCode || us.genderCode, this.patient.identityDocument = this.getPriorityDocument(Ao.identityDocuments) || this.getPriorityDocument(Sr.identityDocuments) || this.getPriorityDocument(us.identityDocuments), this.patient.policies = this.getSortedPolicies(Ao.policies) || this.getSortedPolicies(Sr.policies) || this.getSortedPolicies(us.policies) || [], this.patient.socialStatusCode = Sr.socialStatusCode || us.socialStatusCode || Ao.socialStatusCode, this.patient.workInfo = Sr.workInfo || us.workInfo || Ao.workInfo, this.patient.disabilityBenefit = Sr.disabilityBenefit || us.disabilityBenefit || Ao.disabilityBenefit, this.patient.benefitDocuments = Sr.benefitDocuments || us.benefitDocuments || Ao.benefitDocuments || [], this.patient.citizenshipCode = Sr.citizenshipCode || us.citizenshipCode || Ao.citizenshipCode, this.patient.attachments = Sr.attachments || us.attachments || Ao.attachments || [], this.patient.registrationAddress = Sr.registrationAddress || us.registrationAddress || Ao.registrationAddress, this.patient.residentialAddress = Sr.residentialAddress || us.residentialAddress || Ao.residentialAddress, this.patient.temporaryAddress = Sr.temporaryAddress || us.temporaryAddress || Ao.temporaryAddress, this.patient.contact = Sr.contact || us.contact || Ao.contact, this.patient.contactPerson = Sr.contactPerson || us.contactPerson || Ao.contactPerson;
    }
    getPriorityDocument(Wt) {
      return Wt && 0 !== Wt.length ? Wt.sort((Oi, Ji) => (B[Oi.typeCode] ?? 999) - (B[Ji.typeCode] ?? 999))[0] : null;
    }
    getSortedPolicies(Wt) {
      return Wt && 0 !== Wt.length ? Wt.sort((Oi, Ji) => {
        const Ao = Oi.unlimited || null === Oi.expireDate,
          Sr = Ji.unlimited || null === Ji.expireDate;
        if (Ao && !Sr) return -1;
        if (!Ao && Sr) return 1;
        const us = Oi.expireDate ? new Date(Oi.expireDate).getTime() : 0;
        return (Ji.expireDate ? new Date(Ji.expireDate).getTime() : 0) - us;
      }) : null;
    }
    unifyIdentities(...Wt) {
      const Oi = Wt.flatMap(Ao => Ao[0]?.parameters?.identities || []),
        Ji = new Map();
      return Oi.forEach(Ao => {
        Ji.has(Ao.type) || Ji.set(Ao.type, Ao);
      }), Array.from(Ji.values());
    }
  }
  var ye = i(49664),
    ae = i(77015),
    Y = i(851),
    G = i(73252),
    te = i(97215),
    pe = i(29293),
    be = i(89188),
    le = i(86563),
    n = i(89653),
    Se = i(77069),
    qe = i(97710),
    Rt = i(13198),
    We = i(18552),
    Re = i(19340),
    st = i(36895),
    q = i(92203),
    mt = i(76500),
    ut = i(85623),
    Ct = i(93278),
    Ft = i(62804),
    Et = i(13700),
    Ue = i(43150),
    Me = i(23062),
    Ke = i(9073),
    Ze = i(22819),
    Ee = i(49267),
    je = i(85171),
    Mt = i(6676),
    Je = i(72210),
    Xt = i(20891),
    Nn = i(70918);
  function Pi(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "div", 25), e._UZ(1, "span", 26), e.qZA());
  }
  function Ii(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function yi(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-preloader", 32), e._uU(1, "Загрузка"), e.qZA());
  }
  const co = function (Ei, Wt, Oi) {
    return [Ei, Wt, Oi];
  };
  function Jo(Ei, Wt) {
    if (1 & Ei && (e._UZ(0, "span", 33), e.ALo(1, "luHighlight"), e.ALo(2, "date")), 2 & Ei) {
      const Oi = Wt.$implicit;
      e.oxw(2);
      const Ji = e.MAs(17);
      e.Q6J("innerHTML", e.xi3(1, 1, e.kEZ(7, co, Oi.fio, e.xi3(2, 4, null == Oi ? null : Oi.birthDate, "dd.MM.YYYY"), null == Oi ? null : Oi.cardNumber).join(", "), Ji.searchText), e.oJD);
    }
  }
  function fr(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "lu-data-list", 29), e.ALo(1, "luFilterByText"), e.YNc(2, yi, 2, 0, "ng-template", null, 30, e.W1O), e.YNc(4, Jo, 3, 11, "ng-template", null, 31, e.W1O), e.qZA()), 2 & Ei) {
      const Oi = e.MAs(3),
        Ji = e.MAs(5),
        Ao = e.oxw(),
        Sr = e.MAs(17);
      e.Q6J("items", e.xi3(1, 4, Ao.filteredPatientList, Sr.searchText))("itemContent", Ji)("showPreloader", Ao.isPatientsLoading)("emptyContent", 0 === Ao.filteredPatientList.length ? Oi : null);
    }
  }
  function pt(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function Dt(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Не удалось определить данные выбранного пациента. Выберите пациента повторно "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function Ht(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Поле обязательно для заполнения "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function Dn(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 34), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Некорректный формат времени, ожидается ЧЧ:ММ (00:00 - 23:59) "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function vt(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 34), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Поле обязательно для заполнения "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function an(Ei, Wt) {
    if (1 & Ei && (e._UZ(0, "span", 33), e.ALo(1, "luHighlight")), 2 & Ei) {
      const Oi = Wt.$implicit;
      e.oxw(2);
      const Ji = e.MAs(44);
      e.Q6J("innerHTML", e.xi3(1, 1, Oi.display, Ji.searchText), e.oJD);
    }
  }
  function li(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "lu-data-list", 35), e.ALo(1, "luFilterByText"), e.YNc(2, an, 2, 4, "ng-template", null, 36, e.W1O), e.qZA()), 2 & Ei) {
      const Oi = e.MAs(3),
        Ji = e.oxw(),
        Ao = e.MAs(44);
      e.Q6J("items", e.xi3(1, 2, Ji.stomaList, Ao.searchText))("itemContent", Oi);
    }
  }
  function zn(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Поле обязательно для заполнения "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function $t(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "span"), e._uU(1, "*"), e.qZA());
  }
  function Mn(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Поле обязательно для заполнения "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function Qn(Ei, Wt) {
    if (1 & Ei && (e._UZ(0, "span", 33), e.ALo(1, "luHighlight")), 2 & Ei) {
      const Oi = Wt.$implicit;
      e.oxw(2);
      const Ji = e.MAs(7);
      e.Q6J("innerHTML", e.xi3(1, 1, e.kEZ(4, co, Oi.fio || (null == Oi.selectDoctor ? null : Oi.selectDoctor.name), null == Oi.jobTitle ? null : Oi.jobTitle.name, null == Oi.department ? null : Oi.department.name).join(", "), Ji.searchText), e.oJD);
    }
  }
  function In(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "lu-data-list", 35), e.ALo(1, "luFilterByText"), e.YNc(2, Qn, 2, 8, "ng-template", null, 39, e.W1O), e.qZA()), 2 & Ei) {
      const Oi = e.MAs(3);
      e.oxw();
      const Ji = e.MAs(7),
        Ao = e.oxw();
      e.Q6J("items", e.xi3(1, 2, Ao.doctorList, Ji.searchText))("itemContent", Oi);
    }
  }
  function ui(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 27), e._UZ(1, "lu-svg-icon", 28), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function To(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "div", 1)(1, "span", 2), e._uU(2, "Согласовано с врачом "), e.TgZ(3, "span"), e._uU(4, "*"), e.qZA()(), e.TgZ(5, "label", 3)(6, "lu-combobox", 37, 38), e.YNc(8, In, 4, 5, "lu-data-list", 16), e.qZA(), e.YNc(9, ui, 3, 1, "lu-form-message", 5), e.qZA()()), 2 & Ei) {
      const Oi = e.oxw();
      e.xp6(6), e.Q6J("formControl", Oi.doctorControl)("displayValueFn", Oi.displayDoctor.bind(Oi)), e.xp6(3), e.Q6J("ngIf", Oi.doctorControl.touched && Oi.doctorControl.hasError("required"));
    }
  }
  const Fi = class {
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
  };
  let bi = Fi;
  Fi.ɵfac = function (Oi) {
    return new (Oi || Fi)(e.Y36(n.yh), e.Y36(Se.b), e.Y36(qe.M), e.Y36(Rt.S), e.Y36(e.sBO), e.Y36(We.ae), e.Y36(Re.GP));
  }, Fi.ɵcmp = e.Xpm({
    type: Fi,
    selectors: [["app-add-patient-modal"]],
    decls: 65,
    vars: 25,
    consts: [["class", "loader-wrapper", 4, "ngIf"], [1, "form__group"], [1, "form__group-label"], ["lu-label", ""], [3, "formControl"], ["type", "error", 4, "ngIf"], ["type", "autocomplete", 3, "formControl", "displayValueFn", "inputChange", "beforeClose"], ["comboboxFio", ""], [3, "items", "itemContent", "showPreloader", "emptyContent", 4, "luData"], [1, "wrap"], [3, "formControl", "minDate", "maxDate"], [1, "form__group", "form__group--time"], ["type", "text", "luInput", "", "luInputString", "", "luMask", "HH:MM", "placeholder", "ЧЧ:ММ", "autocomplete", "off", 3, "formControl"], ["type", "error", "class", "modal_error", 4, "ngIf"], ["type", "autocomplete", 3, "clearButton", "formControl", "displayValueFn"], ["combobox", ""], [3, "items", "itemContent", 4, "luData"], [1, "form__group", "form__group--stoma-name"], [4, "ngIf"], ["luInput", "", "luInputString", "", 3, "formControl"], [1, "form__group", "form__group--size"], ["luInput", "", "luInputString", "", 3, "value", "input"], ["class", "form__group", 4, "ngIf"], [1, "btn-wrapper"], ["lu-button-raised", "", 3, "size", "color", "click"], [1, "loader-wrapper"], [1, "loader"], ["type", "error"], ["icon", "warning", 3, "size"], [3, "items", "itemContent", "showPreloader", "emptyContent"], ["loadingTemplate", ""], ["patientTemplate", ""], ["size", "inline-dropdown"], [3, "innerHTML"], ["type", "error", 1, "modal_error"], [3, "items", "itemContent"], ["stomaTypeTemplate", ""], ["type", "autocomplete", 3, "formControl", "displayValueFn"], ["comboboxDoc", ""], ["doctorTemplate", ""]],
    template: function (Oi, Ji) {
      1 & Oi && (e.YNc(0, Pi, 2, 0, "div", 0), e.TgZ(1, "form")(2, "div", 1)(3, "span", 2), e._uU(4, "Отделение "), e.TgZ(5, "span"), e._uU(6, "*"), e.qZA()(), e.TgZ(7, "label", 3), e._UZ(8, "hl-department-combobox", 4), e.YNc(9, Ii, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(10, "div", 1)(11, "span", 2), e._uU(12, "ФИО пациента "), e.TgZ(13, "span"), e._uU(14, "*"), e.qZA()(), e.TgZ(15, "label", 3)(16, "lu-combobox", 6, 7), e.NdJ("inputChange", function (Sr) {
        return Ji.onPatientSearchTextChange(Sr);
      })("beforeClose", function () {
        return Ji.onPatientComboboxBeforeClose();
      }), e.YNc(18, fr, 6, 7, "lu-data-list", 8), e.qZA(), e.YNc(19, pt, 3, 1, "lu-form-message", 5), e.YNc(20, Dt, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(21, "div")(22, "span", 2), e._uU(23, "Начало ухода "), e.TgZ(24, "span"), e._uU(25, "*"), e.qZA()(), e.TgZ(26, "div", 9)(27, "div", 1)(28, "label", 3), e._UZ(29, "lu-calendar-field", 10), e.YNc(30, Ht, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(31, "div", 11)(32, "label", 3)(33, "lu-input-wrapper"), e._UZ(34, "input", 12), e.YNc(35, Dn, 3, 1, "lu-form-message", 13), e.YNc(36, vt, 3, 1, "lu-form-message", 13), e.qZA()()()()(), e.TgZ(37, "div", 1)(38, "span", 2), e._uU(39, "Вид стомы "), e.TgZ(40, "span"), e._uU(41, "*"), e.qZA()(), e.TgZ(42, "label", 3)(43, "lu-combobox", 14, 15), e.YNc(45, li, 4, 5, "lu-data-list", 16), e.qZA(), e.YNc(46, zn, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(47, "div", 9)(48, "div", 17)(49, "span", 2), e._uU(50, "Название "), e.YNc(51, $t, 2, 0, "span", 18), e.qZA(), e.TgZ(52, "label", 3)(53, "lu-input-wrapper"), e._UZ(54, "input", 19), e.qZA(), e.YNc(55, Mn, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(56, "div", 20)(57, "span", 2), e._uU(58, "Размер"), e.qZA(), e.TgZ(59, "lu-input-wrapper")(60, "input", 21), e.NdJ("input", function (Sr) {
        return Ji.changeStomaSize(Sr);
      }), e.qZA()()()(), e.YNc(61, To, 10, 3, "div", 22), e.TgZ(62, "div", 23)(63, "button", 24), e.NdJ("click", function () {
        return Ji.onSubmit();
      }), e._uU(64, "Добавить"), e.qZA()()()), 2 & Oi && (e.Q6J("ngIf", Ji.isLoad), e.xp6(8), e.Q6J("formControl", Ji.deptControl), e.xp6(1), e.Q6J("ngIf", Ji.deptControl.hasError("required")), e.xp6(7), e.Q6J("formControl", Ji.patientControl)("displayValueFn", Ji.displayPatientt.bind(Ji)), e.xp6(3), e.Q6J("ngIf", Ji.patientControl.touched && !Ji.selectedPatient), e.xp6(1), e.Q6J("ngIf", Ji.patientControl.touched && Ji.patientControl.hasError("missingIdentifiers")), e.xp6(9), e.Q6J("formControl", Ji.dateControl)("minDate", Ji.minDate)("maxDate", Ji.maxDate), e.xp6(1), e.Q6J("ngIf", Ji.dateControl.touched && Ji.dateControl.hasError("required")), e.xp6(4), e.Q6J("formControl", Ji.timeControl), e.xp6(1), e.Q6J("ngIf", Ji.timeControl.touched && Ji.timeControl.hasError("invalidTime")), e.xp6(1), e.Q6J("ngIf", Ji.timeControl.touched && Ji.timeControl.hasError("required")), e.xp6(7), e.Q6J("clearButton", !1)("formControl", Ji.stomaTypeControl)("displayValueFn", Ji.displayStomaKind), e.xp6(3), e.Q6J("ngIf", Ji.stomaTypeControl.touched && Ji.stomaTypeControl.hasError("required")), e.xp6(5), e.Q6J("ngIf", "Иное" === (null == Ji.stomaTypeControl.value ? null : Ji.stomaTypeControl.value.display)), e.xp6(3), e.Q6J("formControl", Ji.stomaNameControl), e.xp6(1), e.Q6J("ngIf", Ji.stomaNameControl.hasError("required")), e.xp6(5), e.Q6J("value", Ji.stomaSize), e.xp6(1), e.Q6J("ngIf", Ji.isShowDoctorAgreementField), e.xp6(2), e.Q6J("size", "medium")("color", "blue"));
    },
    dependencies: [st.O5, a._Y, a.Fj, a.JJ, a.JL, a.F, a.oH, q.z, Mt.m, Xt.l, mt.g, ut.l, Ct.q, Je.R, Ft.HY, Et.L, Ue.H, Me.Bf, Ke.mc, Nn.Js, Ze.d, st.uU, Ee.J, je.e],
    styles: ["[_nghost-%COMP%]{display:block;width:528px}.form__group--time[_ngcontent-%COMP%], .form__group--size[_ngcontent-%COMP%]{max-width:112px}.wrap[_ngcontent-%COMP%]{display:flex;gap:16px}.wrap[_ngcontent-%COMP%]   .form__group--time[_ngcontent-%COMP%]   .form__group-label[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.wrap[_ngcontent-%COMP%]   label[data-lu-control-state=error][_ngcontent-%COMP%]{padding-bottom:24px}.wrap[_ngcontent-%COMP%]   lu-form-message[_ngcontent-%COMP%]{width:max-content}.modal_error[_ngcontent-%COMP%]{margin-top:var(--lu-base-gutter)}.form__group--stoma-name[_ngcontent-%COMP%]{flex-grow:1}  .form__group lu-calendar-field lu-calendar-field-host{--lu-input-width: 136px !important}@media (max-width: 960px){.btn-wrapper[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;padding:16px;background-color:#fff;z-index:100}}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
  });
  var qn = i(3977),
    Xn = i(39300);
  function Yi(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "div", 19), e._UZ(1, "span", 20), e.qZA());
  }
  function Eo(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 21), e._UZ(1, "lu-svg-icon", 22), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function Fo(Ei, Wt) {
    if (1 & Ei && (e._UZ(0, "span", 25), e.ALo(1, "luHighlight")), 2 & Ei) {
      const Oi = Wt.$implicit;
      e.oxw(2);
      const Ji = e.MAs(17);
      e.Q6J("innerHTML", e.xi3(1, 1, Oi.display, Ji.searchText), e.oJD);
    }
  }
  function br(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "lu-data-list", 23), e.ALo(1, "luFilterByText"), e.YNc(2, Fo, 2, 4, "ng-template", null, 24, e.W1O), e.qZA()), 2 & Ei) {
      const Oi = e.MAs(3),
        Ji = e.oxw(),
        Ao = e.MAs(17);
      e.Q6J("items", e.xi3(1, 2, Ji.stomaTypeList, Ao.searchText))("itemContent", Oi);
    }
  }
  function Pr(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 21), e._UZ(1, "lu-svg-icon", 22), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function qo(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "span"), e._uU(1, "*"), e.qZA());
  }
  function Yo(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 21), e._UZ(1, "lu-svg-icon", 22), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  const wr = function (Ei, Wt, Oi) {
    return [Ei, Wt, Oi];
  };
  function oo(Ei, Wt) {
    if (1 & Ei && (e._UZ(0, "span", 25), e.ALo(1, "luHighlight")), 2 & Ei) {
      const Oi = Wt.$implicit;
      e.oxw(2);
      const Ji = e.MAs(7);
      e.Q6J("innerHTML", e.xi3(1, 1, e.kEZ(4, wr, Oi.fio, null == Oi.jobTitle ? null : Oi.jobTitle.name, null == Oi.department ? null : Oi.department.name).join(", "), Ji.searchText), e.oJD);
    }
  }
  function Di(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "lu-data-list", 23), e.ALo(1, "luFilterByText"), e.YNc(2, oo, 2, 8, "ng-template", null, 28, e.W1O), e.qZA()), 2 & Ei) {
      const Oi = e.MAs(3);
      e.oxw();
      const Ji = e.MAs(7),
        Ao = e.oxw();
      e.Q6J("items", e.xi3(1, 2, Ao.doctorList, Ji.searchText))("itemContent", Oi);
    }
  }
  function Ci(Ei, Wt) {
    1 & Ei && (e.TgZ(0, "lu-form-message", 21), e._UZ(1, "lu-svg-icon", 22), e._uU(2, " Обязательное поле "), e.qZA()), 2 & Ei && (e.xp6(1), e.Q6J("size", 24));
  }
  function lo(Ei, Wt) {
    if (1 & Ei && (e.TgZ(0, "div", 6)(1, "span", 2), e._uU(2, "Согласовано с врачом "), e.TgZ(3, "span"), e._uU(4, "*"), e.qZA()(), e.TgZ(5, "label", 3)(6, "lu-combobox", 26, 27), e.YNc(8, Di, 4, 5, "lu-data-list", 9), e.qZA(), e.YNc(9, Ci, 3, 1, "lu-form-message", 5), e.qZA()()), 2 & Ei) {
      const Oi = e.oxw();
      e.xp6(6), e.Q6J("formControl", Oi.doctorControl)("displayValueFn", Oi.displayDoctorList), e.xp6(3), e.Q6J("ngIf", Oi.doctorControl.hasError("required"));
    }
  }
  const Rn = class {
    constructor(Wt, Oi, Ji, Ao, Sr, us) {
      this.modalData = Wt, this.employeesServie = Oi, this.store = Ji, this.patientService = Ao, this.compositionService = Sr, this.refreshService = us, this.commaRegex = /^\d+(,)?$/, this.decimalRegex = /^\d+(,\d{1})?$/, this.destroy$ = new M.x(), this.modalRef = (0, e.f3M)(x.Rn), this.timeControl = new a.NI(d()().format("HH:mm")), this.stomaTypeControl = new a.NI(null), this.stomaNameControl = new a.NI(null), this.stomaSize = "", this.isShowDoctorAgreementField = !1, this.doctorControl = new a.NI(null), this.currentUser = null, this.isLoad = !1;
    }
    ngOnInit() {
      this.store.select(te.S8).pipe((0, L.R)(this.destroy$), (0, Xn.h)(Boolean), (0, N.b)(Wt => {
        this.currentUser = Wt;
        const Oi = Wt?.jobTitle?.name?.toLowerCase() ?? "";
        this.isShowDoctorAgreementField = Oi.includes("медицинская сестра") || Oi.includes("медицинский брат");
      }), (0, O.w)(Wt => this.employeesServie.getEmployeesList(Wt.department.id))).subscribe(Wt => {
        this.doctorList = Wt.employees.filter(Oi => {
          const Ji = Oi?.jobTitle?.name?.toLowerCase() ?? "";
          return !(Ji.includes("сестра") || Ji.includes("брат"));
        });
      }), this.store.dispatch(ae.gA.getTerminology({
        request: [{
          featureKey: "stoma_kind_list",
          terminologyName: "terminology:stomakind"
        }]
      })), this.store.select(ae.Tb.selectTerminologyItem("terminology:stomakind", "stoma_kind_list")).pipe((0, L.R)(this.destroy$)).subscribe(Wt => {
        "SUCCESS" === Wt.status && (this.stomaTypeList = Wt.data);
      });
    }
    changeStomaSize(Wt) {
      const Oi = Wt.target.value;
      "" === Oi || this.commaRegex.test(Oi) || this.decimalRegex.test(Oi) ? this.stomaSize = Oi : Wt.target.value = this.stomaSize;
    }
    displayStomaType(Wt) {
      return Wt?.display || "";
    }
    displayDoctorList(Wt) {
      return Wt ? `${Wt.fio}, ${Wt.jobTitle.name}, ${Wt.department.name}` : "";
    }
    onSubmit() {
      var Wt = this;
      return (0, t.Z)(function* () {
        Wt.isLoad = !0;
        const Oi = "Иное" === Wt.stomaTypeControl.value?.display && !Wt.stomaNameControl.value;
        if (!Wt.timeControl.value || !Wt.stomaTypeControl.value || Oi || !Wt.doctorControl.value && Wt.isShowDoctorAgreementField) return Wt.timeControl.value || Wt.timeControl.setErrors({
          required: !0
        }), Wt.stomaTypeControl.value || Wt.stomaTypeControl.setErrors({
          required: !0
        }), Oi && Wt.stomaNameControl.setErrors({
          required: !0
        }), !Wt.doctorControl.value && Wt.isShowDoctorAgreementField && Wt.doctorControl.setErrors({
          required: !0
        }), Wt.isLoad = !1, console.error("Форма невалидна.");
        const Ao = Wt.stomaTypeControl.value.display,
          Sr = {
            careStartDate: Wt.modalData.date,
            careStartTime: Wt.timeControl.value,
            stomaType: Ao,
            stomaName: Wt.stomaNameControl.value,
            stomaSize: Wt.stomaSize,
            doctor: Wt.isShowDoctorAgreementField ? Wt.doctorControl.value : {
              fio: [Wt.currentUser?.lastName, Wt.currentUser?.firstName, Wt.currentUser?.secondName].filter(Boolean).join(" "),
              id: Wt.currentUser.employeeId
            },
            currentUser: Wt.currentUser
          };
        try {
          const us = yield (0, A.z)(Wt.patientService.findPatientInfo(Wt.modalData?.patientInfo?.actualPatientId));
          if (!us?.ehrId) throw new Error("Не удалось найти ehrId для пациента.");
          const Ps = yield (0, A.z)(Wt.compositionService.getEhr(us.ehrId));
          if (!Ps) throw new Error("Не удалось получить экземпляр ЭМК (IEhr).");
          const hs = yield (0, A.z)(Wt.compositionService.createStomaObservationCardDocument(Ps, Wt.modalData?.patientInfo?.careCaseId, Sr));
          hs && (Wt.refreshService.triggerReloadList(), Wt.isLoad = !1);
          const oi = `${d()(Wt.modalData.date).format("YYYY-MM-DD")}T${Wt.timeControl.value}:00`;
          Wt.modalRef.close({
            protocolId: hs.uid,
            careCaseId: Wt.modalData.patientInfo.careCaseId,
            installDate: oi,
            stomaKind: Ao,
            stomaKindId: Wt.stomaTypeControl.value?.code,
            stomaName: Wt.stomaNameControl.value || void 0,
            stomaSize: Wt.stomaSize || void 0,
            employeeId: Wt.currentUser?.employeeId,
            updated: new Date().toISOString(),
            signed: !1,
            stomaCareMarks: []
          });
        } catch (us) {
          Wt.isLoad = !1, console.error("Ошибка при создании композиции:", us);
        }
      })();
    }
  };
  let jo = Rn;
  Rn.ɵfac = function (Oi) {
    return new (Oi || Rn)(e.Y36(qn.UM), e.Y36(qe.M), e.Y36(n.yh), e.Y36(T.e), e.Y36(u.P), e.Y36(Rt.S));
  }, Rn.ɵcmp = e.Xpm({
    type: Rn,
    selectors: [["app-add-stoma-modal"]],
    decls: 38,
    vars: 14,
    consts: [["class", "loader-wrapper", 4, "ngIf"], [1, "form__group", "form__group--time"], [1, "form__group-label"], ["lu-label", ""], ["luInput", "", "luInputString", "", "luMask", "HH:MM", 3, "formControl"], ["type", "error", 4, "ngIf"], [1, "form__group"], ["type", "autocomplete", 3, "clearButton", "formControl", "displayValueFn"], ["combobox_stomaType", ""], [3, "items", "itemContent", 4, "luData"], [1, "wrap"], [1, "form__group", "form__group--stoma-name"], [4, "ngIf"], ["luInput", "", "luInputString", "", 3, "formControl"], [1, "form__group", "form__group--size"], ["luInput", "", "luInputString", "", 3, "value", "input"], ["class", "form__group", 4, "ngIf"], [1, "btn-wrapper"], ["lu-button-raised", "", 3, "size", "color", "click"], [1, "loader-wrapper"], [1, "loader"], ["type", "error"], ["icon", "warning", 3, "size"], [3, "items", "itemContent"], ["itemContent_stomaType", ""], [3, "innerHTML"], ["type", "autocomplete", 3, "formControl", "displayValueFn"], ["combobox", ""], ["itemContent", ""]],
    template: function (Oi, Ji) {
      1 & Oi && (e.YNc(0, Yi, 2, 0, "div", 0), e.TgZ(1, "div", 1)(2, "span", 2), e._uU(3, "Время "), e.TgZ(4, "span"), e._uU(5, "*"), e.qZA()(), e.TgZ(6, "label", 3)(7, "lu-input-wrapper"), e._UZ(8, "input", 4), e.qZA(), e.YNc(9, Eo, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(10, "div", 6)(11, "span", 2), e._uU(12, "Вид стомы "), e.TgZ(13, "span"), e._uU(14, "*"), e.qZA()(), e.TgZ(15, "label", 3)(16, "lu-combobox", 7, 8), e.YNc(18, br, 4, 5, "lu-data-list", 9), e.qZA(), e.YNc(19, Pr, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(20, "div", 10)(21, "div", 11)(22, "span", 2), e._uU(23, "Название "), e.YNc(24, qo, 2, 0, "span", 12), e.qZA(), e.TgZ(25, "label", 3)(26, "lu-input-wrapper"), e._UZ(27, "input", 13), e.qZA(), e.YNc(28, Yo, 3, 1, "lu-form-message", 5), e.qZA()(), e.TgZ(29, "div", 14)(30, "span", 2), e._uU(31, "Размер"), e.qZA(), e.TgZ(32, "lu-input-wrapper")(33, "input", 15), e.NdJ("input", function (Sr) {
        return Ji.changeStomaSize(Sr);
      }), e.qZA()()()(), e.YNc(34, lo, 10, 3, "div", 16), e.TgZ(35, "div", 17)(36, "button", 18), e.NdJ("click", function () {
        return Ji.onSubmit();
      }), e._uU(37, "Сохранить"), e.qZA()()), 2 & Oi && (e.Q6J("ngIf", Ji.isLoad), e.xp6(8), e.Q6J("formControl", Ji.timeControl), e.xp6(1), e.Q6J("ngIf", Ji.timeControl.hasError("required")), e.xp6(7), e.Q6J("clearButton", !1)("formControl", Ji.stomaTypeControl)("displayValueFn", Ji.displayStomaType), e.xp6(3), e.Q6J("ngIf", Ji.stomaTypeControl.hasError("required")), e.xp6(5), e.Q6J("ngIf", "Иное" === (null == Ji.stomaTypeControl.value ? null : Ji.stomaTypeControl.value.display)), e.xp6(3), e.Q6J("formControl", Ji.stomaNameControl), e.xp6(1), e.Q6J("ngIf", Ji.stomaNameControl.hasError("required")), e.xp6(5), e.Q6J("value", Ji.stomaSize), e.xp6(1), e.Q6J("ngIf", Ji.isShowDoctorAgreementField), e.xp6(2), e.Q6J("size", "medium")("color", "blue"));
    },
    dependencies: [st.O5, a.Fj, a.JJ, a.oH, Ft.HY, Et.L, Ue.H, Me.Bf, Mt.m, Xt.l, mt.g, q.z, ut.l, Ct.q, Ke.mc, Ee.J, je.e],
    styles: ["[_nghost-%COMP%]{display:block;width:528px}.form__group--time[_ngcontent-%COMP%]   lu-input-wrapper[_ngcontent-%COMP%], .form__group--size[_ngcontent-%COMP%]{max-width:112px}.wrap[_ngcontent-%COMP%]{display:flex;gap:16px}.form__group--stoma-name[_ngcontent-%COMP%]{flex-grow:1}@media (max-width: 960px){[_nghost-%COMP%]{width:100%!important}.btn-wrapper[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;padding:16px;background-color:#fff;z-index:100}}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
  });
  const ki = class {
    onKeyUp() {
      this.modalRef.close(!1);
    }
    constructor(Wt, Oi) {
      this.modalRef = Wt, this.data = Oi, this.buttonNo = "Нет", this.buttonYes = "Да", this.title = this.data.title, this.data.cancelButtonTitle && (this.buttonNo = this.data.cancelButtonTitle), this.data.buttonTitle && (this.buttonYes = this.data.buttonTitle);
    }
  };
  let Go = ki;
  ki.ɵfac = function (Oi) {
    return new (Oi || ki)(e.Y36(x.Rn), e.Y36(qn.UM));
  }, ki.ɵcmp = e.Xpm({
    type: ki,
    selectors: [["app-confirmation-modal"]],
    hostBindings: function (Oi, Ji) {
      1 & Oi && e.NdJ("keyup.esc", function () {
        return Ji.onKeyUp();
      }, !1, e.Jf7);
    },
    standalone: !0,
    features: [e.jDz],
    decls: 8,
    vars: 7,
    consts: [[1, "btn-wrapper"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (Oi, Ji) {
      1 & Oi && (e.ynx(0), e.TgZ(1, "p"), e._uU(2), e.qZA(), e.TgZ(3, "div", 0)(4, "button", 1), e.NdJ("click", function () {
        return Ji.modalRef.close();
      }), e._uU(5), e.qZA(), e.TgZ(6, "button", 2), e.NdJ("click", function () {
        return Ji.modalRef.close(!0);
      }), e._uU(7), e.qZA()(), e.BQk()), 2 & Oi && (e.xp6(2), e.hij(" ", Ji.data.message, ""), e.xp6(2), e.Q6J("size", "medium")("color", "blue"), e.xp6(1), e.hij(" ", Ji.buttonNo ? Ji.buttonNo : "Нет", " "), e.xp6(1), e.Q6J("size", "medium")("color", "red"), e.xp6(1), e.hij(" ", Ji.buttonYes ? Ji.buttonYes : "Да", " "));
    },
    dependencies: [st.ez, Ke.W1, Ke.mc],
    styles: ["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}[_nghost-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;justify-content:end}"]
  });
  const ji = {
      AddPatientModalComponent: bi,
      AddStomaModalComponent: jo,
      ConfirmationModalComponent: Go
    },
    ti = {
      AddPatientModalComponent: "Добавление нового пациента",
      AddStomaModalComponent: "Добавление стомы",
      ConfirmationModalComponent: ""
    };
});
