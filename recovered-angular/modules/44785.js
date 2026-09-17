// Extracted from main; webpack module 44785. Factory, not an ES module.
((Ae, V, i) => {
  var Nh, Uh, om, rm, Bh, Ch, bd, pd, Lf, yh, jh, lm, Gu, Op, kf, Yh, Nd, Rf, Ud, xh, zh, th, $h;
  i.r(V), i.d(V, {
    FeaturesModule: () => Jg
  });
  var t = i(89653),
    e = i(10493),
    a = i(3279),
    m = i(18505),
    d = i(77579),
    M = i(39300),
    b = i(82722);
  const A = (0, t.PH)("[Prescriptions] Load Prescriptions"),
    N = (0, t.PH)("[Prescriptions] Refresh Prescriptions"),
    I = (0, t.PH)("[Prescriptions] Load Success", (0, t.Ky)()),
    O = (0, t.PH)("[Prescriptions API] Load Prescriptions Failure", (0, t.Ky)()),
    L = (0, t.PH)("[Prescriptions] Update Status From Index", (0, t.Ky)()),
    C = (0, t.PH)("[Prescriptions] Update Status", (0, t.Ky)()),
    v = (0, t.PH)("[Prescriptions API] Update Dispense Status Success", (0, t.Ky)()),
    f = (0, t.PH)("[Prescriptions API] Update Dispense Status Failure", (0, t.Ky)()),
    E = (0, t.PH)("[Prescriptions] Set Filters", (0, t.Ky)()),
    h = (0, t.PH)("[Prescriptions] Set Date", (0, t.Ky)()),
    x = (0, t.PH)("[Prescriptions] Reload With Date", (0, t.Ky)()),
    u = (0, t.PH)("[Prescriptions API] Complete Medication Request", (0, t.Ky)()),
    T = (0, t.PH)("[Prescriptions API] Cancel Medication Request", (0, t.Ky)()),
    R = (0, t.PH)("[Prescriptions API] Rollback Complete Medication Request", (0, t.Ky)()),
    B = (0, t.PH)("[Prescriptions API] Rollback Cancel Medication Request", (0, t.Ky)()),
    y = (0, t.PH)("[Prescriptions API] Plan Medication Request", (0, t.Ky)()),
    j = (0, t.PH)("[Prescriptions API] Mark Medication As Cancelling Request", (0, t.Ky)()),
    W = (0, t.PH)("[Prescriptions API] Unmark Medication As Cancelling Request", (0, t.Ky)()),
    F = (0, t.PH)("[Prescriptions API] Activate Assignment Request", (0, t.Ky)()),
    Le = (0, t.PH)("[Prescriptions API] Deactivate Assignment Request", (0, t.Ky)()),
    ke = (0, t.PH)("[Prescriptions API] Complete Assignment Request", (0, t.Ky)()),
    J = (0, t.PH)("[Prescriptions API] Cancel Assignment Request", (0, t.Ky)()),
    fe = (0, t.PH)("[Prescriptions API] Rollback Cancel Assignment Request", (0, t.Ky)()),
    ye = (0, t.PH)("[Prescriptions API] Rollback Complete Assignment Request", (0, t.Ky)()),
    ae = (0, t.PH)("[Prescriptions API] Update Assignment Success", (0, t.Ky)()),
    Y = (0, t.PH)("[Prescriptions API] Update Assignment Failure", (0, t.Ky)()),
    G = (0, t.PH)("[Prescriptions UI] Show Error", (0, t.Ky)()),
    te = (0, t.PH)("[Prescriptions] Mark All As Viewed"),
    pe = (0, t.PH)("[Prescriptions] Recompute IsNew Complete", (0, t.Ky)()),
    be = (0, t.PH)("[Prescriptions] Set Cross Date New Count", (0, t.Ky)());
  var le = i(36927),
    n = i(94650),
    Se = i(97582),
    qe = i(39646),
    Rt = i(80188),
    We = i(34782),
    Re = i(43862),
    st = i(95698),
    q = i(54004),
    mt = i(69718),
    ut = i(63900),
    Ct = i(24886),
    Ft = i(12111);
  const Ue = (0, t.ZF)("pillboxPreparation"),
    Me = (0, t.P1)(Ue, Te => Te.tasks),
    Ke = (0, t.P1)(Ue, Te => Te.loading),
    Ze = (0, t.P1)(Ue, Te => Te.filters),
    Ee = (0, t.P1)(Ue, Te => Te.selectedDate),
    je = (0, t.P1)(Me, Te => Te?.length ? Te.filter($ => $.isNew).length : 0),
    Je = ((0, t.P1)(je, Te => Te > 0), [Re.Ae.Assigned, Re.Ae.Prepared, Re.Ae.Created, Re.Ae.Changed, Re.Ae.Editing, Re.Ae.NeedsRepackage, Re.Ae.Postponed, Re.Ae.Systematically]),
    Xt = [Re.Ae.MissedAssigned, Re.Ae.MissedPrepared],
    Nn = [Re.Ae.Issued, Re.Ae.Completed, Re.Ae.Utilized, Re.Ae.Damaged, Re.Ae.Cancelled, Re.Ae.Cancelling],
    Pi = {
      [Re.Ae.Assigned]: Re.Ae.MissedAssigned,
      [Re.Ae.Prepared]: Re.Ae.MissedPrepared
    };
  function yi(Te) {
    if (Te.status === Re.Ae.Systematically) return Te.status;
    const $ = Pi[Te.status];
    if (!$) return Te.status;
    const k = function Ii(Te) {
      if (!Te.planningDate) return "today";
      const k = (0, Ft.H)(new Date()),
        ce = (0, Ft.O)(Te.planningDate);
      return ce < k ? "past" : ce === k ? "today" : "future";
    }(Te);
    return "past" === k || "today" === k && (0, Ct.a2)(Te) ? $ : Te.status;
  }
  function co(Te) {
    return (Te.slots?.some($ => $.symptomatic) || Te.medicines?.some($ => $.symptomatic || $.frequency?.toLowerCase().includes("симптоматически"))) ?? !1;
  }
  function pt(Te, $) {
    const k = function fr(Te) {
      if (null == Te) return null;
      if ("string" == typeof Te) return Te;
      if (Array.isArray(Te) && Te.length > 0) return "string" == typeof Te[0] ? Te[0] : null;
      if ("object" == typeof Te && null !== Te && "value" in Te) {
        const $ = Te.value;
        return "string" == typeof $ ? $ : null;
      }
      return null;
    }($);
    if (!k || "ALL" === k.toUpperCase()) return !0;
    const ce = k.toUpperCase();
    return Te.slots?.some(Ye => Ye.period?.toUpperCase() === ce) ?? !1;
  }
  function Dt(Te, $) {
    if (!$ || "" === $.trim()) return !0;
    const k = $.toLowerCase().trim(),
      ce = (Te.patientName || "").toLowerCase(),
      Ye = (Te.historyNumber || "").toLowerCase();
    return ce.includes(k) || Ye.includes(k);
  }
  function Dn(Te) {
    return Te.slots?.length ? Math.min(...Te.slots.map($ => function Ht(Te) {
      return Te ? {
        MORNING: 1,
        DAY: 2,
        EVENING: 3,
        NIGHT: 4,
        HOURLY: 5
      }[Te] ?? 99 : 99;
    }($.period))) : 99;
  }
  function vt(Te) {
    if (!Te.slots?.length) return 1 / 0;
    const $ = Te.slots.filter(k => k.time).map(k => {
      const [ce, Ye] = (k.time || "00:00").split(":").map(Number);
      return 60 * ce + Ye;
    });
    return $.length > 0 ? Math.min(...$) : 1 / 0;
  }
  const zn = (0, t.P1)(Me, Ze, Ee, (Te, $, k) => {
    if (!Te?.length) return [];
    const ce = (0, Ft.H)(k || new Date()),
      Ye = Te.map(Tt => {
        const ai = $t(Tt.slots || [], ce);
        return ai.length ? ai.length === Tt.slots?.length ? Tt : {
          ...Tt,
          slots: ai
        } : null;
      }).filter(Tt => !!Tt && function Jo(Te, $) {
        if ($.includes("all")) return !0;
        const Ye = Tt => Te.slots?.some(ai => Tt.includes(yi(ai))) ?? !1;
        if (co(Te)) {
          const Tt = Te.slots?.length > 0 && Te.slots.every(ai => Nn.includes(ai.status));
          return !!($.includes("completed") && Tt || $.includes("active") && !Tt);
        }
        return !!($.includes("active") && Te.slots?.some(Tt => Je.includes(yi(Tt)) && !(0, Ct.VA)(Tt)) || $.includes("missed") && Ye(Xt) || $.includes("completed") && Ye(Nn));
      }(Tt, $.status) && pt(Tt, $.period) && Dt(Tt, $.searchQuery)).map(Tt => function an(Te) {
        const $ = ["CANCELLED"];
        return {
          ...Te,
          slots: Te.slots.filter(k => !$.includes(k.status))
        };
      }(Tt)).filter(Tt => Tt.slots && Tt.slots.length);
    return function li(Te, $) {
      return [...Te].sort((k, ce) => "byTimeOfDay" === $ ? Dn(k) - Dn(ce) : vt(k) - vt(ce));
    }(Ye, $.sorting);
  });
  function $t(Te, $) {
    return Te.filter(k => !!k.planningDate && (0, Ft.O)(k.planningDate) === $);
  }
  const Mn = (0, t.P1)(Me, Ze, Ee, (Te, $, k) => {
      const ce = {
        all: 0,
        active: 0,
        missed: 0,
        completed: 0
      };
      if (!Te?.length) return ce;
      const Ye = (0, Ft.H)(k || new Date());
      return Te.filter(ai => pt(ai, $.period) && Dt(ai, $.searchQuery)).forEach(ai => {
        if (!ai.slots?.length) return;
        const Zi = $t(ai.slots, Ye);
        if (!Zi.length) return;
        const Po = co(ai);
        let Wr = 0,
          Cs = 0;
        Zi.forEach(ia => {
          const Ls = Po ? ia.status : yi(ia),
            nl = !Po && Xt.includes(Ls);
          Je.includes(Ls) && (0, Ct.VA)(ia);
          Nn.includes(Ls) ? Cs++ : nl && Wr++;
        }), Cs > 0 && Cs === Zi.length ? ce.completed++ : Wr > 0 ? ce.missed++ : ce.active++;
      }), ce.all = ce.active + ce.missed + ce.completed, ce;
    }),
    ui = (0, t.P1)(Ze, Te => Te.grouping),
    To = (0, t.P1)(Ze, Te => Te.period),
    bi = (0, t.P1)(zn, Ze, (Te, $) => Te?.length ? "byMedicament" === $.grouping ? function Qn(Te) {
      const $ = new Map();
      return Te.forEach(k => {
        const ce = k.medicineName || "Без названия";
        $.has(ce) || $.set(ce, []), $.get(ce).push(k);
      }), Array.from($.entries()).map(([k, ce]) => ({
        groupKey: k,
        groupLabel: k,
        tasks: ce
      }));
    }(Te) : function In(Te) {
      const $ = new Map();
      return Te.forEach(k => {
        const ce = k.patientName || "Без имени";
        $.has(ce) || $.set(ce, []), $.get(ce).push(k);
      }), Array.from($.entries()).map(([k, ce]) => ({
        groupKey: k,
        groupLabel: k,
        tasks: ce
      }));
    }(Te) : []),
    qn = (0, t.P1)(Ue, Te => Te.searchQuery);
  var Xn = i(5264),
    Yi = i(55979),
    Eo = i(61135);
  const Pf = class {
    constructor() {
      this._useMockData$ = new Eo.X(!1), this.useMockData$ = this._useMockData$.asObservable(), this.mockModalPatientData = {
        fio: "Голубова Надежда Прокофьевна",
        gender: "Ж",
        age: 57,
        birthDate: new Date(1964, 3, 29),
        cardNumber: "124-С-2025",
        department: "Травматологическое отделение",
        palata: "218",
        ehrCaseId: "3f41825e-9500-4124-ae2c-7c5bbf27a58a",
        careCaseId: "3f41825e-9500-4124-ae2c-7c5bbf27a58a"
      }, this.mockModalStockMedications = [{
        id: "100101",
        name: "Ибупрофен",
        ptnCode: "45101",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH1",
        series: "SERIES1",
        expiryDate: new Date(2026, 0, 11),
        packQty: 1,
        unitQty: 10,
        packaging: "2000 МЕ: 1 табл",
        fillingUnit: ""
      }, {
        id: "100102",
        name: "Ибупрофен",
        ptnCode: "45102",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH2",
        series: "SERIES2",
        expiryDate: new Date(2026, 3, 11),
        packQty: 2,
        unitQty: 20,
        packaging: "4000 МЕ: 1 табл",
        fillingUnit: ""
      }, {
        id: "100201",
        name: "Фуросемид табл. 40 мг",
        ptnCode: "45104",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH3",
        series: "SERIES3",
        expiryDate: new Date(2026, 1, 12),
        packQty: 1,
        unitQty: 10,
        packaging: "40 мг: 1 табл",
        fillingUnit: ""
      }, {
        id: "100301",
        name: "Метронидазол табл. 250 мг",
        ptnCode: "45106",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH5",
        series: "SERIES5",
        expiryDate: new Date(2026, 2, 13),
        packQty: 2,
        unitQty: 10,
        packaging: "500 мг: 2 табл",
        fillingUnit: ""
      }, {
        id: "101201",
        name: "(Р) Бисопролол табл. 5 мг",
        ptnCode: "45201",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH6",
        series: "SERIES6",
        expiryDate: new Date(2026, 0, 11),
        packQty: 1,
        unitQty: 7,
        packaging: "5 мг: 1 табл",
        fillingUnit: ""
      }, {
        id: "103301",
        name: "Гепарин натрия",
        ptnCode: "45301",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH8",
        series: "SERIES8",
        expiryDate: new Date(2026, 0, 11),
        packQty: 1,
        unitQty: 9,
        packaging: "1000 МЕ/мл: 1 мл",
        fillingUnit: ""
      }, {
        id: "104401",
        name: "Даптетерал натрия",
        ptnCode: "45401",
        sourceCode: "ТМ-FAKE",
        financing: "ОМС",
        batch: "BATCH9",
        series: "SERIES9",
        expiryDate: new Date(2026, 0, 11),
        packQty: 1,
        unitQty: 8,
        packaging: "500 мг: 1 табл",
        fillingUnit: ""
      }], this.mockWarehouses = [{
        id: "wh-001",
        name: "Основной склад терапевтического отделения",
        pwOrd: 1
      }, {
        id: "wh-002",
        name: "Резервный склад",
        pwOrd: 2
      }, {
        id: "wh-003",
        name: "Склад хирургического отделения",
        pwOrd: 3
      }], this.mockWarehouseBalance = [{
        pharmaUnitId: "pu-001",
        amountUnit: "100",
        pharmUnitName: "Ибупрофен таб. 400мг",
        drugsId: 1001,
        prtCode: "PRT001",
        sourceFinancingId: "SF001",
        sourceFinancingCode: "SFC001",
        sourceFinancingName: "ОМС",
        deliveryCode: "DLV001",
        party: "PARTY001",
        serialNum: "SN001",
        shelfLifeDt: "2026-12-31",
        amountUnitRound: "100",
        pharmaAmountRound: "100",
        pharmaPackingDesc: "10 таб. в упаковке",
        amountPacking: "10",
        phmId: "phm-001",
        medNamesId: "mn-001",
        fillingUnit: "таб.",
        amountSubstance: "400",
        substanceUnitName: "мг",
        amountConcentration: "1",
        concentrationUnitName: "таб.",
        psfOrd: "1"
      }, {
        pharmaUnitId: "pu-002",
        amountUnit: "50",
        pharmUnitName: "Фуросемид таб. 40мг",
        drugsId: 1002,
        prtCode: "PRT002",
        sourceFinancingId: "SF002",
        sourceFinancingCode: "SFC002",
        sourceFinancingName: "ОМС",
        deliveryCode: "DLV002",
        party: "PARTY002",
        serialNum: "SN002",
        shelfLifeDt: "2026-06-30",
        amountUnitRound: "50",
        pharmaAmountRound: "50",
        pharmaPackingDesc: "20 таб. в упаковке",
        amountPacking: "20",
        phmId: "phm-002",
        medNamesId: "mn-002",
        fillingUnit: "таб.",
        amountSubstance: "40",
        substanceUnitName: "мг",
        amountConcentration: "1",
        concentrationUnitName: "таб.",
        psfOrd: "2"
      }, {
        pharmaUnitId: "pu-003",
        amountUnit: "30",
        pharmUnitName: "Метронидазол таб. 250мг",
        drugsId: 1003,
        prtCode: "PRT003",
        sourceFinancingId: "SF003",
        sourceFinancingCode: "SFC003",
        sourceFinancingName: "ОМС",
        deliveryCode: "DLV003",
        party: "PARTY003",
        serialNum: "SN003",
        shelfLifeDt: "2026-09-15",
        amountUnitRound: "30",
        pharmaAmountRound: "30",
        pharmaPackingDesc: "10 таб. в упаковке",
        amountPacking: "10",
        phmId: "phm-003",
        medNamesId: "mn-003",
        fillingUnit: "таб.",
        amountSubstance: "250",
        substanceUnitName: "мг",
        amountConcentration: "1",
        concentrationUnitName: "таб.",
        psfOrd: "3"
      }];
    }
    get useMockData() {
      return this._useMockData$.value;
    }
    setMockMode($) {
      this._useMockData$.next($);
    }
    toggleMockMode() {
      this.setMockMode(!this.useMockData);
    }
    getMockApiSuccessResponse($ = {}) {
      return {
        success: !0,
        timestamp: new Date().toISOString(),
        ...$
      };
    }
    isSameDay($, k) {
      return $.getFullYear() === k.getFullYear() && $.getMonth() === k.getMonth() && $.getDate() === k.getDate();
    }
    addDays($, k) {
      const ce = new Date($);
      return ce.setDate(ce.getDate() + k), ce;
    }
  };
  let Fo = Pf;
  Pf.ɵfac = function (k) {
    return new (k || Pf)();
  }, Pf.ɵprov = n.Yz7({
    token: Pf,
    factory: Pf.ɵfac,
    providedIn: "root"
  });
  var br = i(80529),
    Pr = i(41025),
    qo = i(97215),
    Yo = i(63873);
  let wr = ((Nh = class {
    constructor($, k, ce, Ye, Tt, ai, Zi) {
      this.dispensing = $, this.mockConfig = k, this.store = ce, this.http = Ye, this.keycloak = Tt, this.userContext = ai, this.activeMedicamentsModuleService = Zi, this.mockPatientList = [], this.prescriptions = [], this.cachedData$ = null, this.refreshData$ = new d.x(), this.currentDate = new Date(), this.pillboxTasks = [], this.pillboxSelectDate = new Date(), this.store.select(Ee).pipe((0, Xn.t)(this)).subscribe(Po => {
        this.pillboxSelectDate = new Date(Po);
      });
    }
    getDepartmentId() {
      return this.userContext.getUserContext().pipe((0, st.q)(1), (0, q.U)($ => $.department.id));
    }
    getAllStockMedications() {
      return this.mockConfig.mockModalStockMedications;
    }
    setDate($) {
      this.currentDate = $, this.refreshData();
    }
    getDate() {
      return this.currentDate;
    }
    refreshData() {
      this.cachedData$ = null, this.refreshData$.next();
    }
    getPatientList() {
      return this.getCachedIndexData("issuing").pipe((0, q.U)(() => this.mockPatientList));
    }
    getPrescriptions() {
      return this.getCachedIndexData("issuing").pipe((0, mt.h)(this.prescriptions));
    }
    getPillboxTasks() {
      return this.getCachedIndexData("pillbox").pipe((0, q.U)($ => this.dispensing.getPillboxTasksAdapter($, this.currentDate)), (0, m.b)($ => this.pillboxTasks = $));
    }
    _filterSlot($, k, ce) {
      const Ye = $.slots.filter(Tt => (0, Ft.O)(Tt.planningDate ?? $.assignmentDate) === k && Tt.status === Re.Ae.Assigned && ce.period === Tt.period);
      return Ye.length ? {
        ...$,
        slots: Ye
      } : null;
    }
    getModalData($, k) {
      const ce = this.pillboxTasks.find(Ls => Ls.id === $);
      if (!ce) return console.error("Task is not found!"), (0, qe.of)();
      const Ye = ce.sex,
        Tt = {
          fio: ce.patientName,
          department: "",
          gender: 1 === Ye ? "Ж" : 2 === Ye ? "М" : null,
          age: ce?.age ?? 0,
          birthDate: ce.birthDate ? new Date(ce.birthDate) : null,
          palata: ce.ward,
          cardNumber: ce.historyNumber,
          medicines: ce.medicines,
          ehrCaseId: ce.ehrId,
          careCaseId: ce?.careCaseId
        },
        Zi = ce.slots?.[0]?.period,
        Po = {
          ...ce.pillbox,
          timeOfDay: Zi ? {
            MORNING: "утро",
            DAY: "день",
            EVENING: "вечер",
            NIGHT: "ночь"
          }[Zi] || Zi : ""
        },
        fo = Tt?.medicines || ce.medicines,
        Wr = (0, Ft.H)(this.pillboxSelectDate),
        Cs = fo.map(Ls => this._filterSlot(Ls, Wr, k)).filter(Ls => !!Ls).map(Ls => ({
          ...Ls,
          name: Ls.name,
          orderedAmount: (Number(Ls.applyPacking) || Ls.dose) * (Ls.onHand ? Ls.duration * Ls.multiplicityScale : 1),
          orderedDose: Ls.dosage || "",
          dose: Ls.dose,
          selectedAmount: Ls.dose,
          status: Ls.status,
          mnnId: Ls.mnnId,
          financeSourceName: Ls.financeSourceName,
          assignmentCompositionUid: Ls.assignmentCompositionUid,
          duration: Ls.duration || 1,
          onHand: Ls.onHand,
          multiplicityScale: Ls.multiplicityScale,
          dosageMedicine: Ls.dosageMedicine,
          method: Ls.method
        })),
        ia = fo?.map((Ls, nl) => ({
          id: `${$}-${Ls.id}`,
          name: Ls.name,
          ptnCode: `PTN-${Ls.id}`,
          sourceCode: "ТМ-FAKE",
          financing: "ОМС",
          batch: `BATCH-${Ls.id}`,
          series: `SERIES-${Ls.id}`,
          expiryDate: null,
          packQty: null,
          unitQty: null,
          packaging: Ls.dosage || "",
          fillingUnit: ""
        }));
      return (0, qe.of)({
        patient: Tt,
        pillbox: Po,
        assigned: Cs,
        stock: ia
      });
    }
    getAssignedMedicationsForPatient($) {
      const k = this.mockPatientList.find(ce => ce.id === $);
      return k ? k.medicines.map(ce => ({
        id: ce.id,
        base: ce.base,
        otnUid: ce.otnUid,
        name: ce.name,
        orderedAmount: (Number(ce.applyPacking) || ce.dose) * (ce.onHand ? ce.duration * ce.multiplicityScale : 1),
        orderedDose: ce.dosage || "",
        dose: ce.dose,
        selectedAmount: ce.dose,
        status: ce.status,
        mnnId: ce.mnnId,
        financeSourceName: ce.financeSourceName,
        assignmentCompositionUid: ce.assignmentCompositionUid,
        duration: ce.duration || 1,
        onHand: ce.onHand,
        multiplicityScale: ce.multiplicityScale,
        isFromDifferentBatches: !1,
        isFractional: !1,
        stockId: null,
        unitOfPacking: ce.unitOfPacking,
        dosageMedicine: ce.dosageMedicine,
        method: ce.method
      })) : [];
    }
    getTotalMedicinesCount() {
      return this.mockPatientList.reduce(($, k) => $ + k.medicines.length, 0);
    }
    getCompletedMedicinesCount() {
      const $ = [Re.vd.Issued, Re.vd.Utilized];
      return this.mockPatientList.reduce((k, ce) => k + ce.medicines.filter(Tt => Tt.slots.length > 0 && Tt.slots.every(ai => $.includes(ai.status))).length, 0);
    }
    getSingleIndexRecord($, k) {
      return this.getDepartmentId().pipe((0, ut.w)(ce => (0, Rt.D)(this.dispensing.getPatients(this.currentDate, ce, $, k))), (0, q.U)(ce => this.dispensing.getPatientsAdapter(ce)));
    }
    getModalDataForPatientAndMedicine($, k, ce) {
      const Ye = "injections" === this.activeMedicamentsModuleService.activeArm,
        Tt = this.mockPatientList.find(Wr => Wr.id === $);
      if (!Tt) return (0, qe.of)(null);
      const ai = Tt.medicines.find(Wr => Wr.id === k);
      if (!ai) return (0, qe.of)(null);
      const Zi = ce ? ai.slots.find(Wr => Wr.id === ce) : null;
      if (ce && !Zi) return (0, qe.of)(null);
      const fo = {
        patient: {
          fio: Tt.name,
          gender: 1 === Tt.sex ? "М" : "Ж",
          age: Tt.age,
          birthDate: Tt.birthDate,
          cardNumber: Tt.historyNumber,
          department: Tt.ward,
          palata: Tt.ward,
          ehrCaseId: Tt.ehrId,
          careCaseId: Tt.careCaseId,
          patientId: $
        },
        medicine: ai,
        slot: Zi,
        slots: ce ? null : Tt.medicines.find(Wr => Wr.id === k).slots
      };
      if (Ye) {
        const Wr = new Date(Zi.planningDate).toLocaleDateString(),
          Cs = Zi.period;
        fo.injectionMedicaments = Tt.medicines.filter(ia => ia.slots.some(Ls => new Date(Ls.planningDate).toLocaleDateString() === Wr && Ls.period === Cs)).map(ia => {
          const Ls = ia.slots.filter(Yl => new Date(Yl.planningDate).toLocaleDateString() === Wr && Yl.period === Cs),
            nl = ia.medicationDispenses.filter(Yl => Yl.planningDate === Zi.planningDate);
          return {
            ...ia,
            slots: Ls,
            medicationDispenses: nl
          };
        });
      }
      return (0, qe.of)(fo);
    }
    getCachedIndexData($) {
      return this.cachedData$ || (this.cachedData$ = this.getDepartmentId().pipe((0, ut.w)(k => (0, Rt.D)(this.dispensing.getPatients(this.currentDate, k, null, $))), (0, m.b)(k => {
        this.mockPatientList = this.dispensing.getPatientsAdapter(k), this.prescriptions = this.dispensing.getPrescriptionsAdapter(k);
      }), (0, We.d)({
        bufferSize: 1,
        refCount: !0
      }))), this.cachedData$;
    }
  }).ɵfac = function (k) {
    return new (k || Nh)(n.LFG(Yi.r), n.LFG(Fo), n.LFG(t.yh), n.LFG(br.eN), n.LFG(Pr.M), n.LFG(qo.oL), n.LFG(Yo.w));
  }, Nh.ɵprov = n.Yz7({
    token: Nh,
    factory: Nh.ɵfac,
    providedIn: "root"
  }), Nh);
  wr = (0, Se.gn)([(0, Xn.c)()], wr);
  const Mu = class {
    constructor() {
      this.filterOpenSubject = new Eo.X(!1), this.filterOpen$ = this.filterOpenSubject.asObservable();
    }
    get isFilterOpen() {
      return this.filterOpenSubject.value;
    }
    setFilterOpen($) {
      this.filterOpenSubject.next($);
    }
    toggleFilter() {
      this.filterOpenSubject.next(!this.filterOpenSubject.value);
    }
  };
  let oo = Mu;
  Mu.ɵfac = function (k) {
    return new (k || Mu)();
  }, Mu.ɵprov = n.Yz7({
    token: Mu,
    factory: Mu.ɵfac,
    providedIn: "root"
  });
  var Di = i(36895),
    Ci = i(93278),
    lo = i(84464),
    jo = i(39841),
    Go = i(70262),
    ji = i(50494);
  const ti = (0, t.PH)("[Pillbox Preparation] Load Tasks"),
    fi = (0, t.PH)("[Pillbox Preparation] Load Tasks Success", (0, t.Ky)()),
    Fi = (0, t.PH)("[Pillbox Preparation] Update Task Status", (0, t.Ky)()),
    Rn = (0, t.PH)("[Pillbox Preparation API] Update Task Status Success", (0, t.Ky)()),
    ki = (0, t.PH)("[Pillbox Preparation API] Update Task Status Failure", (0, t.Ky)()),
    Ei = (0, t.PH)("[Pillbox Preparation] Load Tasks Failure", (0, t.Ky)()),
    Wt = (0, t.PH)("[Pillbox Preparation] Set Filters", (0, t.Ky)()),
    Oi = (0, t.PH)("[Pillbox Preparation] Set searchQuery", (0, t.Ky)()),
    Ji = (0, t.PH)("[Pillbox Preparation] Set Date", (0, t.Ky)()),
    Ao = (0, t.PH)("[Pillbox Preparation] Reload With Date", (0, t.Ky)()),
    Sr = (0, t.PH)("[Pillbox Preparation API] Complete Pillbox Task Request", (0, t.Ky)()),
    us = (0, t.PH)("[Pillbox Preparation API] Cancel Pillbox Task Request", (0, t.Ky)()),
    Ps = (0, t.PH)("[Pillbox Preparation API] Postpone Pillbox Task Request", (0, t.Ky)()),
    hs = (0, t.PH)("[Pillbox Preparation API] Rollback Complete Pillbox Task Request", (0, t.Ky)()),
    oi = (0, t.PH)("[Pillbox Preparation API] Rollback Cancel Pillbox Task Request", (0, t.Ky)()),
    yo = (0, t.PH)("[Pillbox Preparation API] Rollback Postpone Pillbox Task Request", (0, t.Ky)()),
    Qi = (0, t.PH)("[Pillbox Preparation API] Plan Pillbox Task Request", (0, t.Ky)()),
    Qo = (0, t.PH)("[Pillbox Preparation API] Mark Pillbox Task As Cancelling Request", (0, t.Ky)()),
    Kr = (0, t.PH)("[Pillbox Preparation API] Unmark Pillbox Task As Cancelling Request", (0, t.Ky)()),
    _s = (0, t.PH)("[Pillbox Preparation] Mark All As Viewed"),
    Pc = class {
      constructor() {
        this.isLocalStorageAvailable = this.checkLocalStorageAvailability(), this.state = this.loadState();
      }
      static toDateKey($) {
        return `${$.getFullYear()}-${String($.getMonth() + 1).padStart(2, "0")}-${String($.getDate()).padStart(2, "0")}`;
      }
      static isFutureDate($) {
        return $ > Pc.toDateKey(new Date());
      }
      isNewForIssuingOnDate($, k, ce) {
        return this.isNewEntityOnDate("issuing", $, k, ce);
      }
      isNewForPillboxesOnDate($, k, ce) {
        return this.isNewEntityOnDate("pillboxes", $, k, ce);
      }
      isNewForIssuing($, k) {
        return this.isNewForIssuingOnDate($, k, Pc.toDateKey(new Date()));
      }
      isNewForPillboxes($, k) {
        return this.isNewForPillboxesOnDate($, k, Pc.toDateKey(new Date()));
      }
      confirmAllIssuingViewedForDate($, k) {
        this.confirmAllViewedForDate("issuing", $, k);
      }
      confirmAllPillboxesViewedForDate($, k) {
        this.confirmAllViewedForDate("pillboxes", $, k);
      }
      confirmAllIssuingViewed($) {
        this.confirmAllIssuingViewedForDate($, Pc.toDateKey(new Date()));
      }
      confirmAllPillboxesViewed($) {
        this.confirmAllPillboxesViewedForDate($, Pc.toDateKey(new Date()));
      }
      initializeIssuingBaselineForDate($, k) {
        this.initializeBaselineForDate("issuing", $, k);
      }
      initializePillboxesBaselineForDate($, k) {
        this.initializeBaselineForDate("pillboxes", $, k);
      }
      initializeIssuingBaseline($) {
        this.initializeIssuingBaselineForDate($, Pc.toDateKey(new Date()));
      }
      initializePillboxesBaseline($) {
        this.initializePillboxesBaselineForDate($, Pc.toDateKey(new Date()));
      }
      needsIssuingBaselineForDate($) {
        return this.needsBaselineForDate("issuing", $);
      }
      needsPillboxesBaselineForDate($) {
        return this.needsBaselineForDate("pillboxes", $);
      }
      needsIssuingBaseline() {
        return this.isFirstEverUse("issuing");
      }
      needsPillboxesBaseline() {
        return this.isFirstEverUse("pillboxes");
      }
      isFirstEverUse($) {
        const k = this.state[$],
          ce = Object.keys(k.entities).length > 0,
          Ye = k.confirmedAt && Object.keys(k.confirmedAt).length > 0;
        return !ce && !Ye;
      }
      markAsViewedIssuing($, k) {
        if ($ && k) {
          const ce = Pc.toDateKey(new Date());
          this.ensureDateBucket("issuing", ce), this.state.issuing.entities[ce][$] = k, this.saveState(this.state);
        }
      }
      markAsViewedPillbox($, k) {
        if ($ && k) {
          const ce = Pc.toDateKey(new Date());
          this.ensureDateBucket("pillboxes", ce), this.state.pillboxes.entities[ce][$] = k, this.saveState(this.state);
        }
      }
      hasStoredState() {
        return !!this.isLocalStorageAvailable && null !== localStorage.getItem(Re.Uf);
      }
      isStorageAvailable() {
        return this.isLocalStorageAvailable;
      }
      resetState() {
        this.state = this.getDefaultState(), this.saveState(this.state);
      }
      getState() {
        return {
          ...this.state
        };
      }
      checkLocalStorageAvailability() {
        try {
          const $ = "__localStorage_test__";
          return localStorage.setItem($, "test"), localStorage.removeItem($), !0;
        } catch ($) {
          return console.warn("localStorage недоступен, состояние просмотров не будет сохраняться:", $), !1;
        }
      }
      loadState() {
        const $ = this.getDefaultState();
        if (!this.isLocalStorageAvailable) return $;
        try {
          const k = localStorage.getItem(Re.Uf);
          if (!k) return this.saveState($), $;
          const ce = JSON.parse(k);
          return ce && "object" == typeof ce && "number" == typeof ce.version ? ce.version < 2 ? this.migrateState(ce) : this.isValidState(ce) ? (this.cleanupOldDateKeys(ce), ce) : (console.warn("Повреждённые данные в localStorage, сброс состояния"), this.saveState($), $) : (console.warn("Повреждённые данные в localStorage, сброс состояния"), this.saveState($), $);
        } catch (k) {
          return console.error("Ошибка загрузки состояния из localStorage:", k), $;
        }
      }
      isValidState($) {
        return $ && "object" == typeof $ && "number" == typeof $.version && $.issuing && "object" == typeof $.issuing.entities && $.pillboxes && "object" == typeof $.pillboxes.entities;
      }
      migrateState($) {
        const k = Pc.toDateKey(new Date()),
          ce = Tt => {
            if (!Tt) return {
              confirmedAt: null,
              entities: {}
            };
            const ai = Tt.entities || {};
            let Po;
            Po = Object.values(ai).some(Wr => "string" == typeof Wr) ? {
              [k]: {
                ...ai
              }
            } : ai;
            let fo = null;
            return Tt.confirmedAt && (fo = "string" == typeof Tt.confirmedAt ? {
              [k]: Tt.confirmedAt
            } : Tt.confirmedAt), {
              confirmedAt: fo,
              entities: Po
            };
          },
          Ye = {
            issuing: ce($.issuing),
            pillboxes: ce($.pillboxes),
            version: 2,
            lastSaved: new Date().toISOString()
          };
        return this.saveState(Ye), Ye;
      }
      cleanupOldDateKeys($) {
        const k = new Date();
        k.setDate(k.getDate() - 30);
        const ce = Pc.toDateKey(k);
        let Ye = !1;
        const Tt = ai => {
          Object.keys(ai.entities).forEach(Zi => {
            Zi < ce && (delete ai.entities[Zi], Ye = !0);
          }), ai.confirmedAt && Object.keys(ai.confirmedAt).forEach(Zi => {
            Zi < ce && (delete ai.confirmedAt[Zi], Ye = !0);
          });
        };
        Tt($.issuing), Tt($.pillboxes), Ye && this.saveState($);
      }
      getDefaultState() {
        return {
          issuing: {
            confirmedAt: null,
            entities: {}
          },
          pillboxes: {
            confirmedAt: null,
            entities: {}
          },
          version: 2,
          lastSaved: new Date().toISOString()
        };
      }
      saveState($) {
        if (this.isLocalStorageAvailable) try {
          $.lastSaved = new Date().toISOString(), localStorage.setItem(Re.Uf, JSON.stringify($)), this.state = $;
        } catch {
          this.cleanupOldDateKeys($);
          try {
            localStorage.setItem(Re.Uf, JSON.stringify($));
          } catch (ce) {
            console.error("Ошибка сохранения в localStorage, не удалось сохранить даже после очистки:", ce);
          }
        }
      }
      ensureDateBucket($, k) {
        this.state[$].entities[k] || (this.state[$].entities[k] = {});
      }
      needsBaselineForDate($, k) {
        return !this.state[$].entities[k];
      }
      isNewEntityOnDate($, k, ce, Ye) {
        if (!k) return !1;
        const ai = this.state[$].entities[Ye];
        if (!ai) return !0;
        const Zi = ai[k];
        return !Zi || ce > Zi;
      }
      confirmAllViewedForDate($, k, ce) {
        const Ye = this.state[$];
        Ye.confirmedAt || (Ye.confirmedAt = {}), Ye.confirmedAt[ce] = new Date().toISOString(), this.ensureDateBucket($, ce), k.forEach(Tt => {
          Tt.entityId && Tt.updated && (Ye.entities[ce][Tt.entityId] = Tt.updated);
        }), this.saveState(this.state);
      }
      initializeBaselineForDate($, k, ce) {
        this.ensureDateBucket($, ce), k.forEach(Ye => {
          Ye.entityId && Ye.updated && (this.state[$].entities[ce][Ye.entityId] = Ye.updated);
        }), this.saveState(this.state);
      }
    };
  let Fs = Pc;
  Pc.ɵfac = function (k) {
    return new (k || Pc)();
  }, Pc.ɵprov = n.Yz7({
    token: Pc,
    factory: Pc.ɵfac,
    providedIn: "root"
  });
  var xa = i(33981),
    rs = i(31061);
  class ho {
    get fullName() {
      return `${this.firstName || ""} ${this.lastName || ""} ${this.secondName || ""}`;
    }
    hasRoles($) {
      return $ instanceof Array ? this.rightCodes.some(k => $.includes(k)) : this.rightCodes.includes($);
    }
  }
  (0, Se.gn)([(0, xa.o)({
    toPlainOnly: !0
  }), function Js(Te = {}) {
    return function ($, k) {
      rs.m.addExposeMetadata({
        target: $ instanceof Function ? $ : $.constructor,
        propertyName: k,
        options: Te
      });
    };
  }()], ho.prototype, "hasRoles", null);
  var uo = i(35982),
    ri = i(39453),
    Yt = i(64477),
    jt = i(84445),
    hn = i(62843),
    tn = i(28746),
    di = i(4128),
    Gn = i(62289),
    dn = i(5061),
    wo = i(91854),
    Ro = i(19550),
    _r = i(59250),
    qr = i(22819),
    Ts = i(77229),
    js = i(71298);
  const ws = ["originElem"];
  function Us(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 30)(1, "div", 31), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.MAs(36),
          ai = n.oxw(2);
        return n.KtG(ai.onCancelCompletedMenu(Ye, Tt));
      }), n._UZ(2, "lu-svg-icon", 32), n.TgZ(3, "span"), n._uU(4, "Отменить выдачу"), n.qZA()()();
    }
    2 & Te && (n.xp6(2), n.Q6J("size", 24));
  }
  const Ws = function () {
    return ["bottom-right"];
  };
  function sa(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 17)(1, "div", 18)(2, "b"), n._uU(3), n.qZA()(), n.TgZ(4, "div", 19, 20), n.NdJ("contextmenu", function (Ye) {
        n.CHM(k);
        const Tt = n.MAs(36),
          ai = n.MAs(5),
          Zi = n.oxw(2);
        return n.KtG(Zi.onClick(Ye, Tt, ai));
      })("click", function (Ye) {
        n.CHM(k);
        const Tt = n.MAs(36),
          ai = n.MAs(5),
          Zi = n.oxw(2);
        return n.KtG(Zi.onClick(Ye, Tt, ai));
      }), n.TgZ(6, "div", 21)(7, "div", 22)(8, "div", 23)(9, "b"), n._uU(10), n.qZA()(), n.TgZ(11, "div", 24)(12, "span"), n._uU(13, "Количество:"), n.qZA(), n._uU(14), n.qZA(), n.TgZ(15, "div", 24)(16, "span"), n._uU(17, "Фасовка:"), n.qZA(), n._uU(18), n.qZA(), n.TgZ(19, "div", 25)(20, "span"), n._uU(21, "Источник финансирования:"), n.qZA(), n._uU(22), n.qZA(), n.TgZ(23, "div", 24)(24, "span"), n._uU(25, "Документ:"), n.qZA(), n._uU(26), n.qZA(), n.TgZ(27, "div", 24)(28, "span"), n._uU(29, "Выдал:"), n.qZA(), n._uU(30), n.qZA(), n.TgZ(31, "div", 26)(32, "span"), n._uU(33, "Подтверждено:"), n.qZA(), n._uU(34), n.qZA()(), n.TgZ(35, "lu-dropdown", 27, 28), n.YNc(37, Us, 5, 1, "div", 29), n.qZA()()()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.MAs(5),
        Ye = n.oxw(2);
      n.xp6(3), n.Oqu(Ye.formatTime(k)), n.xp6(7), n.Oqu(Ye.med.tradeName || Ye.med.name || "нет данных"), n.xp6(4), n.hij(" ", k.amount || "нет данных", " "), n.xp6(4), n.hij(" ", k.pack || "нет данных", " "), n.xp6(4), n.hij(" ", Ye.patient.insurance || "нет данных", " "), n.xp6(4), n.hij(" ", k.document || "нет данных", " "), n.xp6(4), n.hij(" ", k.issuer || "нет данных", " "), n.xp6(4), n.hij(" ", null != Ye.med && Ye.med.base ? "нет данных" : k.confirmation || "Ожидается резервирование", " "), n.xp6(1), n.Q6J("origin", ce)("positions", n.DdM(11, Ws))("borderOffset", -8);
    }
  }
  function ha(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 13)(1, "div", 14), n._uU(2), n.qZA(), n.TgZ(3, "span", 15), n._uU(4, "Выдано"), n.qZA(), n.YNc(5, sa, 38, 12, "div", 16), n.qZA()), 2 & Te) {
      const k = $.ngIf,
        ce = n.oxw();
      n.xp6(2), n.hij(" ", ce.med.name || ce.med.tradeName || "-", " "), n.xp6(3), n.Q6J("ngForOf", k);
    }
  }
  function ua(Te, $) {
    1 & Te && n._UZ(0, "lu-preloader");
  }
  function da(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Выдачи лекарственных препаратов отсутствуют"), n.qZA());
  }
  function na(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 33), n.YNc(1, ua, 1, 0, "lu-preloader", 34), n.YNc(2, da, 2, 0, "ng-template", null, 35, n.W1O), n.qZA()), 2 & Te) {
      const k = n.MAs(3),
        ce = n.oxw();
      n.xp6(1), n.Q6J("ngIf", ce.isLoading)("ngIfElse", k);
    }
  }
  const Qp = class {
    handleEscape($) {
      this.onClose();
    }
    constructor($, k, ce, Ye, Tt, ai) {
      this.breakpointObserver = $, this.modalHelper = k, this.cdr = ce, this.accountingDocumentService = Ye, this.luMessageService = Tt, this.store = ai, this.cancelConfirmed = new n.vpe(), this.destroy$ = new d.x(), this.isTablet = !1, this.isLoading = !0, this.dispensedSlots$ = (0, qe.of)([]), this.periodMap = {
        night: "Ночь",
        morning: "Утро",
        day: "День",
        evening: "Вечер",
        wholeDay: "Весь день"
      };
    }
    ngOnInit() {
      this.breakpointObserver.observe(ri.ok).pipe((0, b.R)(this.destroy$)).subscribe($ => this.isTablet = $.matches), this.dispensedSlots$ = this._getDispensedSlots();
    }
    _getDispensedSlots() {
      if (!this.med.slots || 0 === this.med.slots.length) return (0, qe.of)([]);
      const k = [...this.med.slots].filter(ce => Qp.DISPENSED_STATUSES.has(ce.status?.toLowerCase())).map(ce => {
        const Ye = ce.resultCompositionUid.split(":")[0];
        return ce?.resultCompositionUid && !this.med.base ? this.accountingDocumentService.getAccountingDocumentByDispenseId(Ye).pipe((0, Go.K)(Tt => "E104" === Tt?.error.code ? (0, qe.of)({
          stateDescription: null,
          pharmaMedicines: [{
            totalAmount: 0
          }]
        }) : (this.luMessageService.error(Tt?.error?.message ?? "Ошибка запроса к сервису", {
          marginBottom: 44,
          autoClose: !0
        }), console.warn("[PresenterComponent] Не удалось загрузить учетные документы:", Tt?.status, Tt?.message), (0, hn._)(() => Tt))), (0, q.U)(Tt => Tt.stateDescription ? Tt.pharmaMedicines.map(ai => ({
          ...ce,
          amount: +ai.totalAmount || +ce.amount,
          document: Tt.documentNumber || ce.document,
          issuer: Tt.employeeFullName || ce.issuer,
          confirmation: Tt.stateDescription
        })) : [{}])) : (0, qe.of)([{}]);
      });
      return (0, di.D)(k).pipe((0, q.U)(ce => ce.flat().filter(Tt => Object.keys(Tt).length > 0).sort((Tt, ai) => Tt.dayTimePeriod && ai.dayTimePeriod ? Object.keys(this.periodMap).indexOf(Tt.dayTimePeriod) - Object.keys(this.periodMap).indexOf(ai.dayTimePeriod) : Tt.time && ai.time && Tt.time !== ai.time ? +Tt.time.split(":")[0] - +ai.time.split(":")[0] : Tt.document && ai.document ? +Tt.document - +ai.document : -1)), (0, M.h)(ce => ce && ce.length > 0), (0, tn.x)(() => {
        this.isLoading = !1, this.cdr.markForCheck();
      }));
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    getStatusText($) {
      return (0, Re.dg)($);
    }
    onClose() {
      this.close && this.close();
    }
    onCancelCompleted() {
      this.close && this.close();
    }
    formatTime($) {
      return $.dayTimePeriod ? this.periodMap[$.dayTimePeriod] : $?.time ?? "-";
    }
    onClick($, k, ce) {
      $.preventDefault(), k && "function" == typeof k.open && k.open(ce.nativeElement);
    }
    onCancelCompletedMenu($, k) {
      k.close(), $.resultCompositionUid = $.resultCompositionUid.split(":")[0], this.modalHelper.openDispensingConfirmationModal("cancel", this.patient?.name || "Неизвестный пациент", this.med, $).pipe((0, b.R)(this.destroy$)).subscribe({
        next: () => {
          this.store.dispatch(R({
            patientId: this.patient.id,
            medicineId: this.med.id,
            slot: $,
            code: $.code,
            isBaseTherapy: this.med.base
          })), this.cancelConfirmed.emit({
            med: this.med,
            patient: this.patient,
            slot: $
          }), this.close && this.close();
        },
        error: Ye => {
          console.error("[PresenterComponent] Ошибка отмены списания:", Ye?.status, Ye?.message);
        }
      });
    }
    onCancel($) {
      this.close();
    }
  };
  let Qs = Qp;
  Qp.DISPENSED_STATUSES = new Set(["completed", "issued", "systematically"]), Qp.ɵfac = function (k) {
    return new (k || Qp)(n.Y36(Gn.Yg), n.Y36(Ya), n.Y36(n.sBO), n.Y36(dn.gy), n.Y36(wo.Jv), n.Y36(t.yh));
  }, Qp.ɵcmp = n.Xpm({
    type: Qp,
    selectors: [["lib-presenter"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(ws, 7), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.originElem = Ye.first);
      }
    },
    hostBindings: function (k, ce) {
      1 & k && n.NdJ("keydown.escape", function (Tt) {
        return ce.handleEscape(Tt);
      }, !1, n.evT);
    },
    outputs: {
      cancelConfirmed: "cancelConfirmed"
    },
    decls: 16,
    vars: 7,
    consts: [[1, "modal-wrapper"], [1, "modal-overlay", 3, "click"], [1, "modal-panel"], [1, "modal-header-bar"], [1, "modal-header", "custom-modal-header"], [1, "modal-header-left"], [1, "modal-header-title"], ["lu-button-icon", "", 1, "modal-header-card-btn"], ["icon", "health-card", 3, "size"], ["aria-label", "Закрыть", 1, "modal-header-close", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], ["class", "modal-conteiner-body", 4, "ngIf", "ngIfElse"], ["noDispensed", ""], [1, "modal-conteiner-body"], [1, "modal-title"], [1, "modal-status"], ["class", "modal-conteiner", 4, "ngFor", "ngForOf"], [1, "modal-conteiner"], [1, "slot-time"], ["luDropdownOrigin", "", 1, "modal-content", 3, "contextmenu", "click"], ["origin", "luDropdownOrigin"], [1, "modal-row"], [1, "slot-details"], [1, "slot-title"], [1, "slot-meta"], [1, "slot-meta", "faded"], [1, "slot-meta", "gray"], ["panelClass", "custom-menu-dropdown", 3, "origin", "positions", "borderOffset"], ["slotDropdown", ""], ["class", "custom-menu-container", 4, "luOverlayContent"], [1, "custom-menu-container"], [1, "menu-item", 3, "click"], ["icon", "close", 3, "size"], [1, "empty-state"], [4, "ngIf", "ngIfElse"], ["noData", ""]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n.NdJ("click", function () {
        return ce.onClose();
      }), n.qZA(), n.TgZ(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6), n._uU(7), n.qZA(), n.TgZ(8, "button", 7), n._UZ(9, "lu-svg-icon", 8), n.qZA()(), n.TgZ(10, "button", 9), n.NdJ("click", function () {
        return ce.onClose();
      }), n._UZ(11, "lu-svg-icon", 10), n.qZA()()(), n.YNc(12, ha, 6, 2, "div", 11), n.ALo(13, "async"), n.YNc(14, na, 4, 2, "ng-template", null, 12, n.W1O), n.qZA()()), 2 & k) {
        const Ye = n.MAs(15);
        n.xp6(7), n.hij(" ", (null == ce.patient ? null : ce.patient.name) || "-", " "), n.xp6(2), n.Q6J("size", 24), n.xp6(2), n.Q6J("size", 24), n.xp6(1), n.Q6J("ngIf", n.lcZ(13, 5, ce.dispensedSlots$))("ngIfElse", Ye);
      }
    },
    dependencies: [Di.sg, Di.O5, Ro.k, _r.$, qr.d, Ci.q, js.n, Ts.o, Di.Ov],
    styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100vh;position:relative;font-family:Open Sans,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.modal-wrapper[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1300;display:flex;justify-content:flex-end;pointer-events:all}@media (min-width: 600px) and (max-width: 960px){.modal-wrapper[_ngcontent-%COMP%]{z-index:2000}}.modal-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:1;transition:background .2s ease-in-out}.modal-panel[_ngcontent-%COMP%]{position:relative;z-index:2;width:786px;height:calc(100vh - 84px);margin-top:48px;margin-bottom:36px;background:#ffffff;border-left:1px solid #ededed;box-shadow:#00000080;display:flex;flex-direction:column}@media (min-width: 600px) and (max-width: 960px){.modal-panel[_ngcontent-%COMP%]{height:100vh;margin-top:0;margin-bottom:0}}.modal-header-bar[_ngcontent-%COMP%]{position:relative;width:100%;height:64px;padding:16px 17px 16px 24px;display:flex;align-items:center;box-shadow:0 4px 8px #00000014,0 1px 1px #00000014}@media (max-width: 960px){.modal-header-bar[_ngcontent-%COMP%]{padding:16px}}.custom-modal-header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}.modal-body[_ngcontent-%COMP%]{flex:1;padding:24px 32px}.modal-header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.modal-header-title[_ngcontent-%COMP%]{font-size:20px;line-height:28px;font-weight:600;color:#22223b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.modal-header-card-btn[_ngcontent-%COMP%]{padding:0;border:none;cursor:pointer}.modal-header-card-btn[_ngcontent-%COMP%]:hover{background-color:#dbf2fa}.modal-conteiner-body[_ngcontent-%COMP%]{padding:24px;overflow-y:auto;flex:1}@media (max-width: 960px){.modal-conteiner-body[_ngcontent-%COMP%]{padding:16px}}.empty-state[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:48px 24px;font-size:15px;line-height:24px;color:#757575}.modal-header-close[_ngcontent-%COMP%]{background:transparent;border:none;cursor:pointer;transition:color .12s ease-in-out,transform .08s ease-in-out;font-weight:300;padding:0 4px;line-height:1;width:38px;height:38px}.modal-header-close[_ngcontent-%COMP%]:hover{color:#a0aec0;transform:translateY(-1px)}.modal-header-close[_ngcontent-%COMP%]:active{transform:translateY(0)}.modal-title[_ngcontent-%COMP%]{margin-bottom:32px;font-size:20px;line-height:28px;font-weight:600;color:#22223b}@media (max-width: 960px){.modal-title[_ngcontent-%COMP%]{font-size:17px;line-height:24px;margin-bottom:16px}}.modal-status[_ngcontent-%COMP%]{margin-bottom:24px;font-size:15px;line-height:20px;font-weight:600;color:#333}.modal-conteiner[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin-bottom:16px}@media (max-width: 960px){.modal-conteiner[_ngcontent-%COMP%]{margin-top:16px}}.slot-time[_ngcontent-%COMP%]{font-weight:400;margin-right:20px;font-size:13px;line-height:20px;color:#333}@media (max-width: 960px){.slot-time[_ngcontent-%COMP%]{margin-right:12px}}.modal-content[_ngcontent-%COMP%]{flex:1;background:#F2F2F2;border-radius:4px;font-size:13px;line-height:20px;color:#333;box-shadow:0 1px #fff9,0 0 0 1px #0f172a05;cursor:pointer;transition:background .15s ease-in-out}.modal-content[_ngcontent-%COMP%]:hover{background:#EEF9FD}.modal-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.slot-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:8px 12px;gap:2px}.slot-title[_ngcontent-%COMP%]{size:13px;line-height:20px;font-weight:600}.slot-meta[_ngcontent-%COMP%]{color:#111827}.slot-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;size:13px;line-height:20px;color:#999;margin-right:8px}.modal-link[_ngcontent-%COMP%]{color:#3182ce;margin-bottom:10px;display:inline-block;cursor:pointer;text-decoration:underline;font-size:13px}.modal-tip[_ngcontent-%COMP%]{color:#ab60d2;font-size:13px;margin-top:7px}.custom-menu-dropdown[_ngcontent-%COMP%]{background:#ffffff;border-radius:4px;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014;z-index:1}.custom-menu-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.custom-menu-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:hover{background:none}.menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 18px;font-size:15px;color:#333;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:4px}.menu-item[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-width: 24px;--lu-svg-icon-height: 24px;--lu-svg-icon-color: #999}.menu-item[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:focus-visible{background-color:#f7f4fd;color:#333}.icon-close[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;--lu-svg-icon-width: 24px;--lu-svg-icon-height: 24px}.modal-header-close[_ngcontent-%COMP%]:hover   .icon-close[_ngcontent-%COMP%]{--lu-svg-icon-color: #575757}  .cdk-overlay-pane{position:absolute!important}  .cdk-overlay-container{z-index:1301}  .custom-menu-dropdown{background:#ffffff;border-radius:4px;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014;z-index:1}  .header{z-index:1400}@media (max-width: 960px){  .header{z-index:1000!important}}  .main-footer{z-index:1400!important}"],
    changeDetection: 0
  });
  var ma = i(3977),
    Xs = i(44348),
    Ks = i(9073),
    Va = i(9929);
  const Of = class {
    constructor($, k, ce) {
      this.http = $, this.printFormService = k, this.luMessageService = ce, this.PRINTER_DATA_KEY = "printerData", this.PILLBOX_LABEL_TEMPLATE = "tabletboxLabel.FR3";
    }
    getPrinterData() {
      const $ = localStorage.getItem(this.PRINTER_DATA_KEY);
      if (!$) return null;
      try {
        return JSON.parse($);
      } catch {
        return null;
      }
    }
    isPrinterConfigured() {
      const $ = this.getPrinterData();
      return !(!$?.address || !$?.defaultPrinter);
    }
    formatFioShort($) {
      if (!$) return "";
      const k = $.trim().split(/\s+/);
      if (0 === k.length) return "";
      const ce = k[0],
        Ye = k.slice(1).map(Tt => Tt.charAt(0).toUpperCase() + ".").join("");
      return Ye ? `${ce} ${Ye}` : ce;
    }
    sendPrintRequest($, k) {
      return this.http.post(`${$}/api/PrintService/json`, k).pipe((0, Go.K)(ce => (console.error("Ошибка при отправке запроса на печать:", ce), (0, hn._)(() => new Error("Ошибка соединения с сервисом печати")))));
    }
    printCode($, k) {
      return this.printFormService.renderPrintFormCommand(k, {
        context: $
      }).pipe((0, st.q)(1), (0, m.b)(ce => {
        const Ye = new Blob([ce], {
            type: "application/pdf"
          }),
          Tt = URL.createObjectURL(Ye);
        window.open(Tt, "_blank");
      }), (0, q.U)(() => !0), (0, Go.K)(() => (this.luMessageService.error("Ошибка печати. Попробуйте позже"), (0, qe.of)(!1))));
    }
  };
  let ba = Of;
  Of.ɵfac = function (k) {
    return new (k || Of)(n.LFG(br.eN), n.LFG(Va.zH), n.LFG(wo.Jv));
  }, Of.ɵprov = n.Yz7({
    token: Of,
    factory: Of.ɵfac,
    providedIn: "root"
  });
  var qs = i(32486);
  function Ri(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 16), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.hij(" ", k.errorMessage, " ");
    }
  }
  let $o = ((Uh = class {
    constructor($, k, ce) {
      this.modalRef = $, this.data = k, this.printService = ce, this.isPrinting = !1, this.errorMessage = null, this.formattedFio = this.printService.formatFioShort(this.data.fio);
    }
    printLabel() {
      this.isPrinting = !0, this.errorMessage = null, this.printService.printCode({
        careCaseId: this.data.careCaseId,
        pillbox_num: this.data.barcode
      }, "pillbox_barcode").pipe((0, Xn.t)(this)).subscribe(k => {
        this.isPrinting = !1, k && this.modalRef.close(!0);
      });
    }
    close() {
      this.modalRef.close();
    }
  }).ɵfac = function (k) {
    return new (k || Uh)(n.Y36(Xs.Rn), n.Y36(ma.UM), n.Y36(ba));
  }, Uh.ɵcmp = n.Xpm({
    type: Uh,
    selectors: [["app-pillbox-label-print"]],
    decls: 25,
    vars: 15,
    consts: [[1, "barcode-label-modal"], [1, "modal-header"], [1, "modal-title"], ["lu-button-icon", "", 1, "close-btn", 3, "click"], ["icon", "close", 3, "size"], [1, "modal-body"], [1, "barcode-wrapper"], [3, "bc-height", "bc-width", "bc-value", "bc-format", "bc-display-value"], [1, "barcode-number"], [1, "patient-name"], [1, "patient-info"], [1, "dot"], ["class", "error-message", 4, "ngIf"], [1, "modal-footer"], ["lu-button-raised", "", 3, "color", "disabled", "click"], ["icon", "print", 3, "size"], [1, "error-message"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2), n._uU(3, "Печать этикетки для таблетницы"), n.qZA(), n.TgZ(4, "button", 3), n.NdJ("click", function () {
        return ce.close();
      }), n._UZ(5, "lu-svg-icon", 4), n.qZA()(), n.TgZ(6, "div", 5)(7, "div", 6), n._UZ(8, "ngx-barcode6", 7), n.qZA(), n.TgZ(9, "div", 8), n._uU(10), n.qZA(), n.TgZ(11, "div", 9), n._uU(12), n.qZA(), n.TgZ(13, "div", 10)(14, "span"), n._uU(15), n.qZA(), n.TgZ(16, "span", 11), n._uU(17, "•"), n.qZA(), n.TgZ(18, "span"), n._uU(19), n.qZA()(), n.YNc(20, Ri, 2, 1, "div", 12), n.qZA(), n.TgZ(21, "div", 13)(22, "button", 14), n.NdJ("click", function () {
        return ce.printLabel();
      }), n._UZ(23, "lu-svg-icon", 15), n._uU(24), n.qZA()()()), 2 & k && (n.xp6(5), n.Q6J("size", 24), n.xp6(3), n.Q6J("bc-height", 80)("bc-width", 2)("bc-value", ce.data.barcode)("bc-format", "CODE128")("bc-display-value", !1), n.xp6(2), n.Oqu(ce.data.barcode), n.xp6(2), n.Oqu(ce.formattedFio), n.xp6(3), n.Oqu(ce.data.card), n.xp6(4), n.hij("Палата №", ce.data.room, ""), n.xp6(1), n.Q6J("ngIf", ce.errorMessage), n.xp6(2), n.Q6J("color", "blue")("disabled", ce.isPrinting), n.xp6(1), n.Q6J("size", 16), n.xp6(1), n.hij(" ", ce.isPrinting ? "Печать..." : "Распечатать", " "));
    },
    dependencies: [Di.O5, Ks.mc, Ro.k, Ci.q, qs.y],
    styles: [".barcode-label-modal[_ngcontent-%COMP%]{width:448px;background:#fff;border-radius:8px;box-shadow:0 10px 32px #161a3c1c;display:flex;flex-direction:column}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:24px 24px 0}.modal-title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:20px;font-weight:600;line-height:28px;color:#23282c;margin:0}.close-btn[_ngcontent-%COMP%]{flex-shrink:0;margin-left:16px}.modal-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:24px}.barcode-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:4px}.barcode-wrapper[_ngcontent-%COMP%]   ngx-barcode6[_ngcontent-%COMP%]{display:block}.barcode-wrapper[_ngcontent-%COMP%]   ngx-barcode6[_ngcontent-%COMP%]     svg{width:100%;max-width:400px;height:auto}.barcode-number[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:18px;font-weight:400;line-height:24px;color:#23282c;text-align:center;margin-bottom:24px}.patient-name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:15px;font-weight:400;line-height:24px;color:#23282c;text-align:center;margin-bottom:4px}.patient-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px 8px;font-family:Open Sans,sans-serif;font-size:15px;font-weight:400;line-height:24px;color:#757575;text-align:center}.dot[_ngcontent-%COMP%]{color:#bdbdbd}.error-message[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background:#FFF3F3;border:1px solid #FFCDD2;border-radius:4px;color:#d32f2f;font-family:Open Sans,sans-serif;font-size:14px;line-height:20px;text-align:center;width:100%}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 24px 24px}"],
    changeDetection: 0
  }), Uh);
  $o = (0, Se.gn)([(0, Xn.c)()], $o);
  var ci = i(71764),
    Gi = i.n(ci),
    Fn = i(25268),
    zi = i.n(Fn),
    Io = i(17489);
  const jc = class {
    constructor() {
      this.PERIOD_ORDER = ["MORNING", "DAY", "EVENING", "NIGHT"], this.emptySlotIdCounter = -1;
    }
    processSlots($, k) {
      if (!$?.length) return {
        normalizedSlots: [],
        displayedPeriods: this.getEmptyPeriods()
      };
      const ce = this.normalizeSlots($),
        Ye = new Date().getHours(),
        Tt = this.applyTimeBasedStatuses(ce, Ye);
      return {
        normalizedSlots: Tt,
        displayedPeriods: this.groupByPeriods(Tt, k)
      };
    }
    isSlotActiveByPeriod($) {
      const k = jc.PERIOD_HOURS[$.period],
        ce = new Date();
      return this.isSlotFutureLocked($) || ce.getTime() >= k.start.getTime() && ce.getTime() <= k.end.getTime();
    }
    applyTimeBasedStatuses($, k) {
      const ce = new Date();
      return $.map(Ye => {
        if (Ye.status === Re.Ae.Systematically) return Ye;
        const Tt = jc.MISSED_STATUS_MAP[Ye.status];
        if (!Tt) return Ye;
        const ai = this._getSlotDateStatus(Ye);
        return "past" === ai || "today" === ai && (0, Ct.a2)(Ye, ce) ? {
          ...Ye,
          status: Tt
        } : Ye;
      });
    }
    get currentPeriod() {
      const $ = new Date();
      return Object.entries(jc.PERIOD_HOURS).filter(([k, ce]) => $.getTime() <= ce.end.getTime()).find(([k, ce]) => ce.start.getTime() <= $.getTime() && ce.end.getTime() >= $.getTime())[0];
    }
    isSlotFutureLocked($) {
      if ($.status === Re.Ae.Systematically) return !1;
      const k = this._getSlotDateStatus($);
      if ("past" === k) return !1;
      if ("future" === k) return !0;
      const ce = new Date();
      if ($?.dayTimePeriod) {
        const Ye = jc.PERIOD_MIN_HOUR[$.period];
        return ce.getHours() < Ye;
      }
      if ($?.startTime && $?.endTime) {
        const [Ye, Tt] = $.endTime.split(":").map(Number),
          ai = Gi()().hour(Ye).minute(Tt).toDate();
        return !("NIGHT" !== $.period && ai.getTime() < ce.getTime()) && this.currentPeriod && this.currentPeriod !== $.period;
      }
      return !1;
    }
    normalizeSlots($) {
      return $.map(k => this.normalizeSingleSlot(k));
    }
    groupByPeriods($, k) {
      return "preparation" === k && ($ = (0, Io.uniqBy)($, "period").map(ce => {
        if ("today" === this._getSlotDateStatus(ce)) {
          const Zi = Object.keys(jc.PERIOD_MIN_HOUR).findIndex(Po => Po === this.currentPeriod) > Object.keys(jc.PERIOD_MIN_HOUR).findIndex(Po => Po === ce.period) && jc.MISSED_STATUS_MAP[ce.status] || ce.status;
          return {
            ...ce,
            status: Zi
          };
        }
        return ce;
      })), this.PERIOD_ORDER.map(ce => {
        const Ye = $.filter(Tt => Tt.period === ce).sort((Tt, ai) => (Tt.time ?? "").localeCompare(ai.time ?? ""));
        return {
          period: ce,
          slots: Ye.length > 0 ? Ye : [this.createEmptySlot(ce)]
        };
      });
    }
    hasDailyRangeSlot($) {
      return !!$?.find(k => "range" === k.displayType && !k.period);
    }
    getDailyRangeSlot($) {
      return $?.find(k => "range" === k.displayType && !k.period) ?? null;
    }
    groupSlotsByTime($) {
      const k = new Map();
      for (const ce of $) ce.time && (k.has(ce.time) || k.set(ce.time, []), k.get(ce.time).push(ce));
      return Array.from(k.entries()).map(([ce, Ye]) => ({
        time: ce,
        slots: Ye
      }));
    }
    _getSlotDateStatus($) {
      if (!$.planningDate) return "today";
      const k = (0, Ft.H)(new Date()),
        ce = (0, Ft.O)($.planningDate);
      return ce < k ? "past" : ce === k ? "today" : "future";
    }
    normalizeSingleSlot($) {
      if ("range" === $.displayType && $.startTime && $.endTime) {
        const {
          period: k,
          ...ce
        } = $;
        return {
          ...ce
        };
      }
      if ($.dayTimePeriod) {
        const k = jc.DAY_TIME_PERIOD_MAP[$.dayTimePeriod.toLowerCase()];
        if (k) {
          const ce = $.time ? this.inferPeriodFromTime($.time) : null,
            Ye = $.time && ce !== k;
          return {
            ...$,
            period: k,
            ...(Ye ? {
              time: jc.PERIOD_START_TIME[k]
            } : {})
          };
        }
      }
      if (!$.period && "range" !== $.displayType) {
        const k = $.time || $.startTime;
        if (k) return {
          ...$,
          period: this.inferPeriodFromTime(k)
        };
      }
      return $;
    }
    createEmptySlot($) {
      return {
        id: this.emptySlotIdCounter--,
        period: $,
        status: Re.Ae.Empty,
        displayType: "point",
        time: this.getDefaultTimeForPeriod($)
      };
    }
    getDefaultTimeForPeriod($) {
      return {
        MORNING: "09:00",
        DAY: "14:00",
        EVENING: "20:00",
        NIGHT: "02:00",
        HOURLY: "12:00"
      }[$] ?? "00:00";
    }
    inferPeriodFromTime($) {
      const k = parseInt($.split(":")[0], 10);
      return k >= 6 && k < 12 ? "MORNING" : k >= 12 && k < 18 ? "DAY" : k >= 18 && k < 22 ? "EVENING" : "NIGHT";
    }
    getEmptyPeriods() {
      return this.PERIOD_ORDER.map($ => ({
        period: $,
        slots: [this.createEmptySlot($)]
      }));
    }
  };
  let gi = jc;
  jc.PERIOD_MIN_HOUR = {
    MORNING: 6,
    DAY: 12,
    EVENING: 18,
    NIGHT: 22
  }, jc.PERIOD_HOURS = {
    MORNING: {
      start: Gi()().hour(jc.PERIOD_MIN_HOUR.MORNING).minute(0).second(0).toDate(),
      end: Gi()().hour(11).minute(59).second(0).toDate()
    },
    DAY: {
      start: Gi()().hour(jc.PERIOD_MIN_HOUR.DAY).minute(0).second(0).toDate(),
      end: Gi()().hour(17).minute(59).second(0).toDate()
    },
    EVENING: {
      start: Gi()().hour(jc.PERIOD_MIN_HOUR.EVENING).minute(0).second(0).toDate(),
      end: Gi()().hour(21).minute(59).second(0).toDate()
    },
    NIGHT: {
      start: Gi()().hour(jc.PERIOD_MIN_HOUR.NIGHT).minute(0).second(0).toDate(),
      end: Gi()().add(1, "day").hour(5).minute(59).second(0).toDate()
    }
  }, jc.MISSED_STATUS_MAP = {
    [Re.Ae.MissedAssigned]: Re.Ae.MissedAssigned,
    [Re.Ae.Assigned]: Re.Ae.MissedAssigned,
    [Re.Ae.Prepared]: Re.Ae.MissedPrepared,
    [Re.Ae.MissedPrepared]: Re.Ae.MissedPrepared
  }, jc.DAY_TIME_PERIOD_MAP = {
    morning: "MORNING",
    day: "DAY",
    evening: "EVENING",
    night: "NIGHT"
  }, jc.PERIOD_START_TIME = {
    MORNING: "06:00",
    DAY: "12:00",
    EVENING: "18:00",
    NIGHT: "22:00"
  }, jc.ɵfac = function (k) {
    return new (k || jc)();
  }, jc.ɵprov = n.Yz7({
    token: jc,
    factory: jc.ɵfac,
    providedIn: "root"
  });
  var Kt = i(32643),
    Vt = i(61040);
  const vh = class {
    constructor($, k, ce, Ye) {
      this.warehouseApiService = $, this.medicamentApiService = k, this.messageService = ce, this.http = Ye, this.basePath = "/warehouse/warehouse";
    }
    getMedNamesId($) {
      return this.medicamentApiService.getMedicamentInfo($).pipe((0, Go.K)(k => (console.warn("[WarehouseService] Failed to get medNamesId", k), (0, hn._)(() => k))), (0, q.U)(k => k[0].medNamesId), (0, Go.K)(k => (0, hn._)(() => k)));
    }
    getUserWarehouses($) {
      return this.warehouseApiService.getWarehouse($.deptId, $.postId).pipe((0, Go.K)(k => (console.error("Failed to load warehouses", k), this.messageService.error("Не удалось загрузить список складов", {
        marginBottom: 44
      }), (0, hn._)(() => k))));
    }
    getMedicationBalanceMultiWarehouse($, k, ce = {}) {
      return (0, di.D)($.map(Ye => this.getMedicationBalance(Ye.id, k, ce).pipe((0, q.U)(Tt => ({
        warehouse: Ye,
        items: Tt
      })), (0, Go.K)(Tt => (console.warn(`[WarehouseService] Failed to load balance for warehouse ${Ye.name}`, Tt), (0, qe.of)({
        warehouse: Ye,
        items: []
      }))))));
    }
    getMedicationBalance($, k, ce) {
      return this.warehouseApiService.getWarehouseBalance($, k, ce?.ehrCaseId, ce?.medStarDt, ce?.medNamesId, ce?.showAlternatives, +ce?.substanceUnitId || void 0, +ce?.concentrationUnitId || void 0, ce?.isCompound);
    }
    preparationMedicament($) {
      return this.http.post("mock-mark-medication-dev.m15.dzm/markMedication", $);
    }
  };
  let pi = vh;
  vh.ɵfac = function (k) {
    return new (k || vh)(n.LFG(dn.lQ), n.LFG(dn.OX), n.LFG(wo.Jv), n.LFG(br.eN));
  }, vh.ɵprov = n.Yz7({
    token: vh,
    factory: vh.ɵfac,
    providedIn: "root"
  });
  var xo = i(48382),
    No = i(44671),
    Ko = i(71822),
    Mi = i(49151);
  class It {
    constructor($, k) {
      this.medicalEntry = $, this.courseState = k, this.today = new Date(), this.basePath = "выдача_медикаментов.выдача_медикаментов.медикаментозное_лечение", this.coerceParams = {
        active: {
          stateCode: "245",
          stepCode: "at7777",
          stepValue: "Доза введена"
        },
        completed: {
          stateCode: "532",
          stepCode: "at8888",
          stepValue: "Курс лекарственной терапии выполнен"
        },
        aborted: {
          stateCode: "528",
          stepCode: "at6666",
          stepValue: "Курс лекарственной терапии отменен"
        }
      }, this.composition = this.medicalEntry.getRoot().getComposition();
    }
    setMedicationValues($) {
      this.setLink($), this.setDispensing($), this.setDoctor($), this.setMedicine($), this.setAction($), "aborted" === this.courseState && this.setAborted(), this.composition.get(`${this.basePath}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438`).setValue("fake"), this.composition.save();
    }
    setLink($) {
      this.composition.addLink().setValue({
        meaning: "Ссылка на запрос на медикаментозное лечение",
        type: "EHR",
        target: `ehr:compositions/${$.assignmentCompositionUid}`
      });
    }
    setDispensing($) {
      const k = `${this.basePath}.\u0432\u044b\u0434\u0430\u0447\u0430`,
        ce = $.dispensingDate || Gi()().format("YYYY-MM-DD");
      this.composition.get(`${this.basePath}.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u0432\u044b\u0434\u0430\u0447\u0438`).setValue($.dispensingCode), this.composition.get(`${k}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f`).setValue(ce), this.composition.get(`${k}.\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435_\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0432\u044b\u0434\u0430\u0447\u0438`).setValue(this.today.toISOString()), this.composition.get(`${k}.\u0432\u044b\u0434\u0430\u0447\u0430_\u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430`).setValue("aborted" === this.courseState);
    }
    setDoctor($) {
      const k = `${this.basePath}.\u0432\u0440\u0430\u0447`;
      this.composition.get(`${k}.\u0432\u0440\u0430\u0447`).setCode($.doctor.snils), this.composition.get(`${k}.\u0432\u0440\u0430\u0447`).setValue(`${$.doctor.position} ${$.doctor.dept}`), this.composition.get(`${k}.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430`).setIdentifier({
        id: $.doctor.empId,
        assigner: "Assigner",
        issuer: "Issuer",
        type: "Prescription"
      });
    }
    setMedicine($) {
      (Array.isArray($.medication) ? $.medication : [$.medication]).forEach((ce, Ye) => {
        const Tt = `${this.basePath}.\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442[${Ye}]`;
        this.composition.get(`${Tt}.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u0441\u043a\u043b\u0430\u0434\u0430.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u0441\u043a\u043b\u0430\u0434\u0430_\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f`).setValue(ce.storageId), this.composition.get(`${Tt}.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u043f\u0430\u0440\u0442\u0438\u0438.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u043f\u0430\u0440\u0442\u0438\u0438_\u0435\u0434\u0438\u043d\u0438\u0446\u044b_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438`).setValue(ce.productId), this.composition.get(`${Tt}.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a`).setMagnitude(ce.batchCount), this.composition.get(`${Tt}.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a`).setUnit("уп"), this.composition.get(`${Tt}.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0443\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0443\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a`).setMagnitude(ce.recycledPack), this.composition.get(`${Tt}.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0443\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a.\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e_\u0443\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445_\u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a`).setUnit("уп");
        const ai = ce.dose.split(" ")[0];
        this.composition.get(`${Tt}.\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442.\u0434\u043e\u0437\u0430.\u0434\u043e\u0437\u0430`).setValue(ai), this.composition.get(`${Tt}.\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442.\u0434\u043e\u0437\u0430.\u0435\u0434\u0438\u043d\u0438\u0446\u0430_\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f`).setCode("7203"), this.composition.get(`${Tt}.\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442.\u0434\u043e\u0437\u0430.\u0435\u0434\u0438\u043d\u0438\u0446\u0430_\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f`).setValue(ce.doseUnit), this.composition.get(`${Tt}.\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u043d\u0442\u0430`).setCode(ce.medNamesId || ce.productId), this.composition.get(`${Tt}.\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u043d\u0442\u0430`).setValue(ce.name), this.composition.get(`${Tt}.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u043e\u0442\u043c\u0435\u0442\u043a\u0438_\u043e_\u0432\u044b\u0434\u0430\u0447\u0435_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430.\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440_\u043e\u0442\u043c\u0435\u0442\u043a\u0438_\u043e_\u0432\u044b\u0434\u0430\u0447\u0435_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430`).setValue(ce.markDrugId);
      });
    }
    setAborted() {
      this.composition.get(`${this.basePath}.\u0442\u0438\u043f_\u043f\u0440\u0438\u0447\u0438\u043d\u044b_\u043e\u0442\u043a\u0430\u0437\u0430[0].\u0442\u0438\u043f_\u043f\u0440\u0438\u0447\u0438\u043d\u044b_\u043e\u0442\u043a\u0430\u0437\u0430`).setCode("Отказ пациента"), this.composition.get(`${this.basePath}.\u0442\u0438\u043f_\u043f\u0440\u0438\u0447\u0438\u043d\u044b_\u043e\u0442\u043a\u0430\u0437\u0430[0].\u0442\u0438\u043f_\u043f\u0440\u0438\u0447\u0438\u043d\u044b_\u043e\u0442\u043a\u0430\u0437\u0430`).setValue(""), this.composition.get(`${this.basePath}.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u043e\u0442\u043c\u0435\u043d\u044b`).setValue("Отказ пациента");
    }
    setAction($) {
      const k = "выдача_медикаментов.лекарственная_терапия",
        ce = "выдача_медикаментов.изменение_статуса_выдачи_медикамента",
        Ye = this.coerceParams[this.courseState];
      this.composition.get(`${k}.time`).setValue(this.today.toISOString()), this.composition.get(`${k}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue("fake"), this.composition.get(`${ce}.time`).setValue(this.today.toISOString()), this.composition.get(`${ce}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue("Изменение статуса выдачи");
      const [Tt, ai] = this.composition.find(Ko.r4.rmType(Ko.B8.ACTION));
      Tt.getInstructionDetails().activityId = "activities[at0001]", Tt.getInstructionDetails().compositionUid = $.assignmentCompositionUid, Tt.getInstructionDetails().instructionUid = $.assignmentCompositionUid, Tt.getInstructionDetails().path = null, Tt.save();
      const Zi = Tt.find(Ko.r4.rmType(Ko.B8.ISM_TRANSITION))[0];
      Zi.get("current_state").setCode("245"), Zi.get("careflow_step").setCodedText({
        code: "at7777",
        text: "Доза введена"
      });
      const Po = ai.find(Ko.r4.rmType(Ko.B8.ISM_TRANSITION))[0];
      Po.get("current_state").setCodedText({
        code: Ye.stateCode,
        text: this.courseState
      }), Po.get("careflow_step").setCodedText({
        code: Ye.stepCode,
        text: Ye.stepValue
      });
    }
    showActions() {
      const $ = this.composition.find(Ko.r4.rmType(Ko.B8.ACTION));
      console.log($);
    }
  }
  class At extends Mi.I {
    constructor($) {
      super(), this.compositionEntry = $, this.basePath = "курс_медикаментозного_лечения_завершен", this._medicationCompletePathSettings = {
        statusValue: {
          path: `${this.basePath}.\u0441\u0442\u0430\u0442\u0443\u0441.\u0441\u0442\u0430\u0442\u0443\u0441_\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430[0].\u0441\u0442\u0430\u0442\u0443\u0441`,
          type: Ko.aG,
          setMethodName: "setValue"
        },
        statusCode: {
          path: `${this.basePath}.\u0441\u0442\u0430\u0442\u0443\u0441.\u0441\u0442\u0430\u0442\u0443\u0441_\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430[0].\u0441\u0442\u0430\u0442\u0443\u0441`,
          type: Ko.aG,
          setMethodName: "setCode"
        },
        owner: {
          path: `${this.basePath}.\u043a\u0443\u0440\u0441_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u043e\u0437\u043d\u043e\u0433\u043e_\u043b\u0435\u0447\u0435\u043d\u0438\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d.\u0432\u0440\u0430\u0447.\u0432\u0440\u0430\u0447`,
          type: Ko.aG,
          setMethodName: "setValue"
        },
        ownerSnils: {
          path: `${this.basePath}.\u043a\u0443\u0440\u0441_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u043e\u0437\u043d\u043e\u0433\u043e_\u043b\u0435\u0447\u0435\u043d\u0438\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d.\u0432\u0440\u0430\u0447.\u0432\u0440\u0430\u0447`,
          type: Ko.aG,
          setMethodName: "setCode"
        },
        result: {
          path: `${this.basePath}.\u043a\u0443\u0440\u0441_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u043e\u0437\u043d\u043e\u0433\u043e_\u043b\u0435\u0447\u0435\u043d\u0438\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d.\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442`,
          type: Ko.Vd,
          setMethodName: "setValue"
        },
        dateCompleted: {
          path: `${this.basePath}.\u043a\u0443\u0440\u0441_\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u043e\u0437\u043d\u043e\u0433\u043e_\u043b\u0435\u0447\u0435\u043d\u0438\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d.\u0434\u0430\u0442\u0430`,
          type: Ko._t,
          setMethodName: "setValue"
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        medicationComplete: this._medicationCompletePathSettings
      };
    }
    setAction($) {
      const [k] = this.composition.find(Ko.r4.rmType(Ko.B8.ACTION));
      k.getInstructionDetails().activityId = "activities[at0001]", k.getInstructionDetails().compositionUid = $.medicationComplete.assignmentCompositionUid, k.getInstructionDetails().instructionUid = $.medicationComplete.assignmentCompositionUid, k.getInstructionDetails().path = null, k.save();
      const ce = k.find(Ko.r4.rmType(Ko.B8.ISM_TRANSITION))[0];
      ce.get("current_state").setCode("532"), ce.get("current_state").setValue("completed"), ce.get("careflow_step").setCode("at8888"), ce.get("careflow_step").setValue("Курс лекарственной терапии выполнен");
    }
  }
  var _n = i(5238),
    it = i(34874);
  function gt(Te) {
    const $ = new Map();
    return Te.forEach(k => {
      if ($.has(k.assignmentCompositionUid)) {
        const ce = $.get(k.assignmentCompositionUid);
        Object.entries({
          name: "+",
          tradeName: ",",
          dosage: "+"
        }).forEach(([Tt, ai]) => {
          ce[Tt] = `${ce[Tt]} ${ai} ${k[Tt]}`;
        });
      } else $.set(k.assignmentCompositionUid, {
        ...k
      });
    }), Array.from($.values());
  }
  function ni(Te, $) {
    const k = Te.concentrationUnitName && Te.concentrationUnitName?.includes("/"),
      ce = k && +Te.concentrationUnitName.match(/\/\s*(\d+)?/)?.[1] || 1;
    return $.dose / ((Te.dosePerTablet || 1) * $.orderedAmount * (k ? Te.amountConcentration / ce : 1));
  }
  function So(Te) {
    if (!Te) return "-";
    const k = Te.match(/PT(?:(?<hours>\d+)H)?(?:(?<minutes>\d+)M)?/);
    let ce = "";
    if (k) {
      const Ye = +k.groups.hours || 0,
        Tt = +k.groups.minutes || 0;
      Ye && (ce += `${Ye} ${(0, it.S$)(Ye, "час")}`), Tt && (ce += ` ${Tt} \u043c\u0438\u043d.`);
    }
    return ce || "-";
  }
  var Er = i(40891);
  const Xp = class {
    constructor($, k, ce) {
      this.ehrService = $, this.userContext = k, this.accountingDocumentService = ce, this.userContext.getUserContext().subscribe(Ye => this.currentUser = Ye);
    }
    getEhr($) {
      return this.ehrService.getEhr($);
    }
    createMedicationDocument($, k, ce, Ye, Tt, ai, Zi, Po) {
      return Tt && (ce.dispensingCode = ri.Rt.newGuid()), (0, xo.s)(() => Ye, this.accountingDocumentService.createAccountingDocumentByDispenseId({
        careCaseId: k,
        dateTime: new Date().toISOString(),
        workplaceId: this.currentUser.employee?.workplace?.id,
        medications: ce.medication.map(fo => Tt ? {
          amountUnit: fo.batchCount,
          warehouseId: fo.storageId,
          assignmentCompositionUid: ce.assignmentCompositionUid,
          markDrugId: fo.markDrugId,
          pharmaUnitId: fo.productId,
          pharmaReasonExpenses: "DISPENSE",
          dispenseCode: ce.dispensingCode
        } : {
          amountUnit: fo.batchCount,
          warehouseId: fo.storageId,
          dispenseCode: ce.dispensingCode,
          markDrugId: fo.markDrugId,
          pharmaUnitId: fo.productId,
          pharmaReasonExpenses: "DISPENSE"
        })
      }), (0, qe.of)(null)).pipe((0, ut.w)(() => Po ? $.getMedicalEntry(Po) : $.createMedicalEntry("issuing_medicines", k)), (0, ut.w)(fo => (new It(fo, ai).setMedicationValues(ce), fo.sign())), Zi && function _e(Te) {
        if (!Te || Te?.medicine?.permanently) return !1;
        if (1 === Te.medicine.medicationDispenses.length || Te.medicine.onHand) return !0;
        const ce = Te.slot?.maxSymptomaticAmount && Te.slot?.maxSymptomaticAmount > 0,
          Ye = new Date(Te.medicine.assignmentDate),
          Tt = new Date((Te?.slot || Te?.slots[0])?.planningDate),
          Zi = (0, _n.Z)(Ye, Te.medicine.duration - 1);
        if (ce) return Tt.toLocaleDateString() === Zi.toLocaleDateString() && Te.slot.maxSymptomaticAmount === Te.slot.symptomaticCompleted + 1;
        {
          const Po = Te.slot ? [Te.slot] : Te.slots;
          return Te.medicine.medicationDispenses.filter(({
            code: Wr
          }) => !Po.some(Cs => Cs.code === Wr)).every(({
            status: Wr
          }) => Wr === Re.Ai.Completed) && Tt.getTime() >= Zi.getTime();
        }
      }(Zi) ? (0, ut.w)(() => this.createCompletedDocument($, k, {
        medicationComplete: {
          dateCompleted: new Date().toISOString(),
          result: "Результат",
          statusCode: "at0004",
          statusValue: "черновик",
          owner: `${this.currentUser.lastName} ${this.currentUser.firstName} ${this.currentUser.secondName}`,
          ownerSnils: this.currentUser?.employee?.identities?.snils,
          assignmentCompositionUid: ce.assignmentCompositionUid
        }
      })) : No.y);
    }
    createCompletedDocument($, k, ce) {
      return $.createMedicalEntry("medication_complete", k).pipe((0, ut.w)(Ye => {
        const Tt = new At(Ye.getRoot());
        return Tt.setInitialValues(k, ce), Tt.setValues(ce.medicationComplete, "medicationComplete"), Tt.setAction(ce), Ye.sign();
      }));
    }
    debugComposition($, k) {
      this.getEhr($).pipe((0, ut.w)(ce => ce.getMedicalEntry(k))).subscribe(ce => {
        new It(ce, "active").showActions();
      });
    }
    deleteMedicationDocument($, k) {
      return $.getMedicalEntry(k).pipe((0, ut.w)(ce => ce.delete()));
    }
  };
  let Br = Xp;
  Xp.ɵfac = function (k) {
    return new (k || Xp)(n.LFG(Er.r), n.LFG(qo.oL), n.LFG(dn.gy));
  }, Xp.ɵprov = n.Yz7({
    token: Xp,
    factory: Xp.ɵfac,
    providedIn: "root"
  });
  var vr = i(24006),
    zr = i(68983),
    ks = i(24351),
    aa = i(44688),
    Ka = i(87545),
    ja = i(85623),
    ul = i(92203),
    Ln = i(15091),
    en = i(25763),
    mi = i(72210),
    ro = i(12031);
  function cr(Te, $) {
    1 & Te && (n.TgZ(0, "lu-form-message", 25), n._UZ(1, "lu-svg-icon", 26), n._uU(2, " Обязательное поле "), n.qZA()), 2 & Te && (n.xp6(1), n.Q6J("size", 24));
  }
  function jr(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-form-message", 25), n._UZ(1, "lu-svg-icon", 26), n._uU(2), n.ALo(3, "luDateFormatter"), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("size", 24), n.xp6(1), n.hij(" Дата должна быть равна или больше ", n.xi3(3, 2, k.minDate, "dd.MM.yyyy"), " ");
    }
  }
  function as(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-form-message", 25), n._UZ(1, "lu-svg-icon", 26), n._uU(2), n.ALo(3, "luDateFormatter"), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("size", 24), n.xp6(1), n.hij(" Дата должна быть равна или меньше ", n.xi3(3, 2, k.maxDate, "dd.MM.yyyy"), " ");
    }
  }
  function Da(Te, $) {
    1 & Te && (n.TgZ(0, "lu-form-message", 25), n._UZ(1, "lu-svg-icon", 26), n._uU(2, " Не валидная дата! "), n.qZA()), 2 & Te && (n.xp6(1), n.Q6J("size", 24));
  }
  function vo(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 30), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        return n.KtG(ai.selectWarehouse(Tt));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      let Ye;
      n.ekj("active", (null == (Ye = ce.form.get("stockLocation")) || null == Ye.value ? null : Ye.value.id) === k.id), n.xp6(1), n.hij(" ", k.name, " ");
    }
  }
  function As(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 27), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.isWarehouseDropdownOpen = !1);
      }), n.qZA(), n.TgZ(2, "div", 28), n.YNc(3, vo, 2, 3, "div", 29), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(3), n.Q6J("ngForOf", k.stockLocations);
    }
  }
  function dl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "tr")(1, "td", 39)(2, "span", 42), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.selectStockMedication(Tt));
      }), n.qZA()(), n.TgZ(3, "td", 40), n._uU(4), n.qZA(), n.TgZ(5, "td"), n._uU(6), n.qZA(), n.TgZ(7, "td"), n._uU(8), n.qZA(), n.TgZ(9, "td"), n._uU(10), n.qZA(), n.TgZ(11, "td"), n._uU(12), n.qZA(), n.TgZ(13, "td")(14, "span", 43), n._uU(15), n.qZA()(), n.TgZ(16, "td"), n._uU(17), n.ALo(18, "date"), n.qZA(), n.TgZ(19, "td"), n._uU(20), n.qZA(), n.TgZ(21, "td"), n._uU(22), n.qZA(), n.TgZ(23, "td"), n._uU(24), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      let Ye, Tt;
      n.ekj("selected-row", (null == (Ye = ce.form.get("isFromDifferentBatches")) ? null : Ye.value) && (null == ce.selectedBatchIds ? null : ce.selectedBatchIds.includes(k.id)) || !(null != (Ye = ce.form.get("isFromDifferentBatches")) && Ye.value) && ce.selectedStockMedication.id === k.id), n.xp6(2), n.ekj("active", (null == (Tt = ce.form.get("isFromDifferentBatches")) ? null : Tt.value) && ce.multiCheckboxActive(k.id) || !(null != (Tt = ce.form.get("isFromDifferentBatches")) && Tt.value) && ce.selectedStockMedication.id === k.id), n.xp6(2), n.Oqu(k.name), n.xp6(2), n.Oqu(k.ptnCode), n.xp6(2), n.Oqu(k.sourceCode), n.xp6(2), n.Oqu(k.financing), n.xp6(2), n.Oqu(k.batch), n.xp6(3), n.Oqu(k.series), n.xp6(2), n.Oqu(n.xi3(18, 14, k.expiryDate, "dd.MM.yyyy")), n.xp6(3), n.Oqu(k.packQty), n.xp6(2), n.Oqu(+k.pharmaAmountRound), n.xp6(2), n.Oqu(k.packaging);
    }
  }
  function pn(Te, $) {
    if (1 & Te && (n.TgZ(0, "table", 38)(1, "thead")(2, "tr"), n._UZ(3, "th", 39), n.TgZ(4, "th", 40), n._uU(5, "Наименование назначенного препарата"), n.qZA(), n.TgZ(6, "th"), n._uU(7, "Код ПТН"), n.qZA(), n.TgZ(8, "th"), n._uU(9, "Код источника"), n.qZA(), n.TgZ(10, "th"), n._uU(11, "Финансирование"), n.qZA(), n.TgZ(12, "th"), n._uU(13, "Партия"), n.qZA(), n.TgZ(14, "th"), n._uU(15, "№ серии"), n.qZA(), n.TgZ(16, "th"), n._uU(17, "Срок годности"), n.qZA(), n.TgZ(18, "th"), n._uU(19, "Кол-во упак."), n.qZA(), n.TgZ(20, "th"), n._uU(21, "Кол-во фасовки"), n.qZA(), n.TgZ(22, "th"), n._uU(23, "Фасовка"), n.qZA()()(), n.TgZ(24, "tbody"), n.YNc(25, dl, 25, 17, "tr", 41), n.qZA()()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(25), n.Q6J("ngForOf", k.filteredStockMedications)("ngForTrackBy", k.trackByStockMed);
    }
  }
  function sn(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 46)(1, "div", 47)(2, "span", 48), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.selectStockMedication(Tt));
      }), n.qZA(), n._uU(3), n.qZA(), n.TgZ(4, "div", 49)(5, "div", 50)(6, "div", 51), n._uU(7, "Код ПТН"), n.qZA(), n.TgZ(8, "div"), n._uU(9), n.qZA()(), n.TgZ(10, "div", 50)(11, "div", 51), n._uU(12, "Код источника"), n.qZA(), n.TgZ(13, "div"), n._uU(14), n.qZA()(), n.TgZ(15, "div", 52)(16, "div", 51), n._uU(17, "Финансирование"), n.qZA(), n.TgZ(18, "div"), n._uU(19), n.qZA()(), n.TgZ(20, "div", 53)(21, "div", 51), n._uU(22, "Партия"), n.qZA(), n.TgZ(23, "div"), n._uU(24), n.qZA()(), n.TgZ(25, "div", 54)(26, "div", 51), n._uU(27, "№ серии"), n.qZA(), n.TgZ(28, "div", 55), n._uU(29), n.qZA()(), n.TgZ(30, "div", 50)(31, "div", 51), n._uU(32, "Срок годности"), n.qZA(), n.TgZ(33, "div"), n._uU(34), n.ALo(35, "date"), n.qZA()(), n.TgZ(36, "div", 50)(37, "div", 51), n._uU(38, "Кол-во упак."), n.qZA(), n.TgZ(39, "div"), n._uU(40), n.qZA()(), n.TgZ(41, "div", 52)(42, "div", 51), n._uU(43, "Кол-во фасовки"), n.qZA(), n.TgZ(44, "div"), n._uU(45), n.qZA()(), n.TgZ(46, "div", 56)(47, "div", 51), n._uU(48, "Фасовка"), n.qZA(), n.TgZ(49, "div", 57), n._uU(50), n.qZA()()()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      n.ekj("selected-row", ce.getSelectedClass(k.id)), n.xp6(2), n.ekj("active", ce.getSelectedClass(k.id)), n.xp6(1), n.hij(" ", k.name, " "), n.xp6(6), n.Oqu(k.ptnCode), n.xp6(5), n.Oqu(k.sourceCode), n.xp6(5), n.Oqu(k.financing), n.xp6(5), n.Oqu(k.batch), n.xp6(5), n.Oqu(k.series), n.xp6(5), n.Oqu(n.xi3(35, 14, k.expiryDate, "dd.MM.yyyy")), n.xp6(6), n.Oqu(k.packQty), n.xp6(5), n.Oqu(+k.pharmaAmountRound), n.xp6(5), n.Oqu(k.packaging);
    }
  }
  function Jt(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 44), n.YNc(1, sn, 51, 17, "div", 45), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngForOf", k.filteredStockMedications)("ngForTrackBy", k.trackByStockMed);
    }
  }
  function Si(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 58), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.onInjectPrepare.emit({
          reservePharmaUnitCommand: Ye.reservePharmaUnitCommand,
          print: !1
        }));
      }), n._uU(1, " Подготовить "), n.qZA();
    }
  }
  function mn(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 59), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.onInjectPrepare.emit({
          reservePharmaUnitCommand: Ye.reservePharmaUnitCommand,
          print: !0
        }));
      }), n._uU(1, " Добавить и распечатать этикетку "), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("disabled", !k.form.get("quantity").value);
    }
  }
  function Pe(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Выдать"), n.qZA());
  }
  function at(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, " Ожидайте..."), n.qZA());
  }
  function Zt(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 60), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.issueMedicament());
      }), n.YNc(1, Pe, 2, 0, "span", 11), n.YNc(2, at, 2, 0, "span", 11), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("color", "blue")("disabled", k.isIssueIsStarted), n.xp6(1), n.Q6J("ngIf", !k.isIssueIsStarted), n.xp6(1), n.Q6J("ngIf", k.isIssueIsStarted);
    }
  }
  function Li(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 60), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.addToPillbox());
      }), n._uU(1, " Добавить в таблетницу "), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("color", "blue")("disabled", !k.allowAddToPillbox);
    }
  }
  function mo(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.YNc(1, pn, 26, 2, "table", 31), n.YNc(2, Jt, 2, 2, "div", 32), n.TgZ(3, "div", 33)(4, "button", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.loadStockMedications(!0));
      }), n._uU(5), n.qZA(), n.YNc(6, Si, 2, 0, "button", 35), n.YNc(7, mn, 2, 1, "button", 36), n.YNc(8, Zt, 3, 4, "button", 37), n.YNc(9, Li, 2, 2, "button", 37), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet), n.xp6(2), n.Q6J("color", "blue")("disabled", k.isSubstitutesLoading || k.substitutesLoaded || k.isMedInPillbox), n.xp6(1), n.hij(" ", k.isSubstitutesLoading ? "Поиск замены..." : "Показать замены", " "), n.xp6(1), n.Q6J("ngIf", "issuingInjections" === k.mode && k.isComposite), n.xp6(1), n.Q6J("ngIf", "issuingInjections" === k.mode && !k.isComposite), n.xp6(1), n.Q6J("ngIf", "issuingOther" === k.mode), n.xp6(1), n.Q6J("ngIf", "preparation" === k.mode);
    }
  }
  function Xo(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.loadStockMedications(!0));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("color", "blue")("disabled", k.isSubstitutesLoading || k.substitutesLoaded), n.xp6(1), n.hij(" ", k.isSubstitutesLoading ? "Поиск замены..." : "Показать замены", " ");
    }
  }
  const Cr = function (Te) {
      return {
        "width: calc(100vw - 32px)": Te
      };
    },
    Xr = function (Te) {
      return {
        "not-alternatives": Te
      };
    };
  function ys(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 61), n._UZ(1, "lu-svg-icon", 62), n.TgZ(2, "span", 63), n._uU(3), n.qZA()(), n.TgZ(4, "div", 33), n.YNc(5, Xo, 2, 3, "button", 64), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.Q6J("ngStyle", n.VKq(5, Cr, k.isTablet))("ngClass", n.VKq(7, Xr, k.notAlternatives && !k.isStockLoading)), n.xp6(1), n.Q6J("size", 24), n.xp6(2), n.Oqu(k.stockMessage || "Нет данных для отображения"), n.xp6(2), n.Q6J("ngIf", !k.isStockLoading && !k.notAlternatives);
    }
  }
  let Hs = ((om = class {
    constructor($) {
      this.modalService = $, this.mode = "preparation", this.availableSlots = [], this.isComposite = !1, this.onComponentIsReady = new n.vpe(), this.isOnStockLoaded = new n.vpe(), this.issueCompleted = new n.vpe(), this.onSelectedStockMedication = new n.vpe(), this.onInjectPrepare = new n.vpe(), this.luValidators = (0, n.f3M)(zr.X), this.fb = (0, n.f3M)(vr.qu), this.warehouseService = (0, n.f3M)(pi), this.cdr = (0, n.f3M)(n.sBO), this.messageService = (0, n.f3M)(wo.Jv), this.breakpointObserver = (0, n.f3M)(Gn.Yg), this.compositionService = (0, n.f3M)(Br), this.store = (0, n.f3M)(t.yh), this.userContext = (0, n.f3M)(qo.oL), this.minDate = new Date(), this.maxDate = (0, _n.Z)(new Date(), 14), this.slotMultiply = 1, this.balanceDateCtrl = new vr.NI({
        value: new Date(),
        disabled: !0
      }, [vr.kI.required, this.luValidators.dateIsInvalid(), this.luValidators.dateMin(this.minDate), this.luValidators.dateMax(this.maxDate)]), this.isWarehouseDropdownOpen = !1, this.isStockLoading = !1, this.selectedAssignedMed = null, this.allStockMedications = [], this.filteredStockMedications = [], this.selectedStockMedication = null, this.multiStockMedicine = [], this.stockMessage = null, this.form = this._initForm(), this.isSubstitutesLoading = !1, this.substitutesLoaded = !1, this.selectedBatchIds = [], this.filteredByMedNamesId = !1, this.notificationMb = 44, this.preparedPillboxMedicaments = [], this.isTablet = !1, this.isIssueIsStarted = !1, this.showPrint = !1, this.warehouseAlternativesMap = {};
    }
    ngAfterViewInit() {
      this.userContext.getUserContext().subscribe($ => {
        this.currentUser = $, this.userInfo = {
          dept: $.department?.fullName,
          deptId: $.department?.id,
          empId: $.employeeId,
          postId: $.jobTitle?.id,
          position: $.jobTitle?.name,
          snils: $.employee?.identities?.snils
        }, this.onComponentIsReady.emit();
      }), this.balanceDateCtrl.valueChanges.pipe((0, Xn.t)(this)).subscribe(() => {
        this.balanceDateCtrl.valid && this.loadStockMedications();
      }), this.form.get("stockLocation")?.valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
        $ && this.loadStockMedications();
      }), this.form.get("isFractional")?.valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
        let k = this.selectedAssignedMed.selectedAmount;
        this.selectedAssignedMed?.dose && this.selectedStockMedication?.dosePerTablet && this.selectedAssignedMed.dose !== this.selectedStockMedication.dosePerTablet && (k *= ni(this.selectedStockMedication, this.selectedAssignedMed)), this.form.get("quantity").patchValue($ ? k : this.roundAmount(k)), this.selectStockMedication(this.selectedStockMedication), this.updateAvailableStockControl();
      }), this.form.get("isFromDifferentBatches")?.valueChanges.pipe((0, Xn.t)(this)).subscribe(() => this.resetSelections()), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
        this.isTablet = $.matches, this.cdr.markForCheck();
      });
    }
    ngOnChanges($) {
      (0, ri.up)($.stockLocations) && (this.warehouseAlternativesMap = Object.fromEntries(this.stockLocations.map(({
        id: k
      }) => [k, !1])), this.stockLocations.length > 0 ? (this.form.get("stockLocation")?.enable(), this.form.get("stockLocation")?.setValue(this.stockLocations[0])) : this.messageService.warning("Нет доступных складов", {
        marginBottom: this.notificationMb
      })), (0, ri.up)($.availableSlots) && (this.slotMultiply = this.availableSlots.length || 1), (0, ri.up)($.availableSlots) && this.data?.medicine && (this.medicine = {
        ...this.data.medicine
      });
    }
    get reservePharmaUnitCommand() {
      return {
        medNamesId: this.medNamesId,
        warehouseId: this.form.get("stockLocation").value.id,
        pharmaUnitId: this.selectedStockMedication.id,
        amountUnit: this.form.get("quantity").value / this.selectedStockMedication.unitQty,
        remark: ""
      };
    }
    resetSelections() {
      this.multiStockMedicine = [], this.selectedBatchIds = [], this.form.get("quantity")?.reset(), this.selectedAssignedMed && (this.selectedAssignedMed.selectedAmount = 0), this.form.get("isFromDifferentBatches").value || this.selectStockMedication(this.selectedStockMedication), this.updateAvailableStockControl();
    }
    getSelectedClass($) {
      return this.form.get("isFromDifferentBatches")?.value ? this.multiCheckboxActive($) : this.selectedStockMedication?.id === $;
    }
    get totalSelectedTablets() {
      const $ = this.multiStockMedicine.map(k => +k.pharmaAmountRound);
      return $.length ? $.reduce((k, ce) => k + ce) : 0;
    }
    get availableStock() {
      if (!this.selectedStockMedication) return 0;
      const k = (this.form.get("isFromDifferentBatches")?.value ? this.totalSelectedTablets : +this.selectedStockMedication.pharmaAmountRound) - this.form.get("quantity").value;
      return k < 0 ? 0 : k;
    }
    loadStockMedications($ = !1, k = !1) {
      if (!this.selectedAssignedMed) return;
      this.isOnStockLoaded.emit(k), this.isStockLoading = !0;
      const ce = this.form.get("stockLocation")?.value;
      ce?.id && this.balanceDateCtrl.value && (this.filteredStockMedications = [], this.allStockMedications = [], this.stockMessage = "Загрузка данных...", this.data.patient?.careCaseId || this.data.ehrCaseId || this.data.patient?.ehrCaseId ? this.updateMedicalBalance($).subscribe() : this.stockMessage = "Отсутствует идентификатор случая (ehrCaseId)");
    }
    calculateQuantityBySlot($) {
      return $.map(({
        amount: k
      }) => k).reduce((k, ce) => k + ce, 0);
    }
    selectStockMedication($) {
      if (!$?.id) return;
      const k = $?.id;
      if (this.form.get("isFromDifferentBatches")?.value) return void this._handleMultiBatchSelection($);
      this.onSelectedStockMedication.emit($), this.selectedStockMedication = $, this.form.get("selectedStockMedicationId")?.setValue(k);
      const Ye = this.filteredStockMedications.find(Tt => Tt.id === k);
      if (this.selectedAssignedMed && Ye) {
        let Tt = 1;
        switch (this.mode) {
          case "issuing":
          case "issuingOther":
          case "issuingInjections":
            Tt = this.selectedAssignedMed.orderedAmount || 1;
            break;
          case "preparation":
            Tt = this.calculateQuantityBySlot(this.selectedAssignedMed.slots);
        }
        Tt *= this.slotMultiply, Tt = this.form.get("isFractional").value ? Tt : Math.ceil(Tt), $.dosePerTablet && this.selectedAssignedMed.dose !== $.dosePerTablet && (Tt *= ni($, this.selectedAssignedMed)), this.selectedAssignedMed.selectedAmount = Tt > +this.selectedStockMedication.pharmaAmountRound ? 0 : this.isFractional ? Tt : this.roundAmount(Tt), this.form.get("quantity")?.setValue(this.selectedAssignedMed.selectedAmount);
      }
      this.updateAvailableStockControl();
    }
    roundAmount($) {
      return Math.ceil($);
    }
    get isFractional() {
      return this.form.get("isFractional")?.value;
    }
    toggleWarehouseDropdown() {
      this.form.get("stockLocation")?.disabled || (this.isWarehouseDropdownOpen = !this.isWarehouseDropdownOpen);
    }
    selectWarehouse($) {
      this.form.get("stockLocation")?.setValue($), this.isWarehouseDropdownOpen = !1;
    }
    displayWarehouseName($) {
      return $ ? $.name : "";
    }
    trackByStockMed($, k) {
      return k.id;
    }
    get isMedInPillbox() {
      return this.preparedPillboxMedicaments.map(({
        id: $
      }) => $).includes(this.selectedAssignedMed.id);
    }
    get allowAddToPillbox() {
      return !this.isMedInPillbox && this.form.get("quantity").value;
    }
    addToPillbox() {
      this.selectedAssignedMed ? (this.preparedPillboxMedicaments.push({
        id: this.selectedAssignedMed.id,
        mnnName: this.selectedAssignedMed.name,
        otnName: this.selectedAssignedMed.tradeName,
        dose: this.selectedStockMedication.dosePerTablet,
        unitOfDose: this.selectedAssignedMed.unitOfDose,
        methodOfAdministration: this.selectedAssignedMed.method,
        unitOfPacking: this.selectedAssignedMed.unitOfPacking,
        applyPacking: this.form.get("quantity").value,
        countAdditionalUnit: this.selectedAssignedMed.countAdditionalUnit,
        additionalUnit: this.selectedAssignedMed.additionalUnit,
        comment: this.selectedAssignedMed.comment,
        medicationsDispenseCode: this.selectedAssignedMed.slots[0].code,
        assignmentCompositionUid: this.selectedAssignedMed.assignmentCompositionUid,
        financeSourceCode: "",
        financeSourceName: "",
        reserveId: null,
        otnUid: this.selectedAssignedMed.otnUid,
        warehouseId: this.form.get("stockLocation")?.value?.id,
        pharmaUnitId: this.selectedStockMedication.id
      }), this.selectedAssignedMed.status = "ready_dispense", this.messageService.success(`\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f "${this.selectedAssignedMed.name}" \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d.`, {
        marginBottom: this.notificationMb
      })) : this.messageService.warning("Сначала выберите назначенный медикамент.", {
        marginBottom: this.notificationMb
      });
    }
    updateMedicalBalance($, k, ce) {
      const Ye = ce ? this.stockLocations.find(({
          id: Wr
        }) => Wr === ce) : this.form.get("stockLocation")?.value,
        Tt = this.balanceDateCtrl.value,
        ai = Gi()(Tt).format("YYYY-MM-DD"),
        Zi = this.data.patient?.careCaseId || this.data.ehrCaseId || this.data.patient?.ehrCaseId,
        Po = this.selectedAssignedMed?.dateStart ? Gi()(this.selectedAssignedMed.dateStart).format("YYYY-MM-DD") : ai;
      return this.warehouseAlternativesMap[Ye.id] = $, (k ? (0, qe.of)(k) : this.selectedAssignedMed?.otnUid ? (0, qe.of)(this.selectedAssignedMed?.otnUid) : this.warehouseService.getMedNamesId(this.selectedAssignedMed?.assignmentCompositionUid)).pipe((0, Xn.t)(this), (0, ut.w)(Wr => (this.medNamesId = Wr, this.filteredByMedNamesId = !!Wr, this.warehouseService.getMedicationBalance(Ye.id, ai, {
        ehrCaseId: Zi,
        medStarDt: Po,
        medNamesId: Wr,
        showAlternatives: $
      }))), (0, Go.K)(Wr => (console.error("Ошибка загрузки остатков", Wr), this.stockMessage = "Ошибка получения данных остатков", this.allStockMedications = [], this.filteredStockMedications = [], this.cdr.markForCheck(), (0, hn._)(() => Wr))), (0, m.b)(Wr => {
        this.isOnStockLoaded.emit(!0), Wr = Wr ?? [], ["isFromDifferentBatches", "isFractional"].forEach(Cs => {
          Wr.length ? this.form.get(Cs).enable() : this.form.get(Cs).disable();
        }), this.allStockMedications = Wr.map(Cs => ({
          id: Cs.pharmaUnitId,
          name: Cs.pharmUnitName,
          ptnCode: String(Cs.drugsId),
          sourceCode: Cs.sourceFinancingId,
          financing: Cs.sourceFinancingName,
          pharmaAmountRound: Cs.pharmaAmountRound,
          batch: Cs.party,
          series: Cs.serialNum,
          expiryDate: Cs.shelfLifeDt,
          packQty: Number(Cs.amountUnitRound),
          unitQty: Number(Cs.amountPacking),
          packaging: Cs.pharmaPackingDesc,
          dosePerTablet: Number(Cs.amountSubstance),
          amountConcentration: Number(Cs.amountConcentration) || 1,
          concentrationUnitName: Cs.concentrationUnitName,
          warehouseId: Ye.id,
          warehouseName: Ye.name,
          mnnId: Cs.medNamesId,
          fillingUnit: Cs.fillingUnit
        })), this.isStockLoading = !1, this.selectedAssignedMed ? this.selectAssignedMedication() : (this.filteredStockMedications = [], this.stockMessage = "Выберите назначение слева");
      }), (0, tn.x)(() => {
        this.isStockLoading = !1, this.cdr.markForCheck();
      }));
    }
    get notAlternatives() {
      const $ = this.form?.get("stockLocation")?.value;
      return !!$ && this.warehouseAlternativesMap[$.id];
    }
    multiCheckboxActive($) {
      return !!this.multiStockMedicine.find(k => k.id === $);
    }
    selectAssignedMedication($) {
      if (!$?.id || !this.selectedAssignedMed?.id || $?.id !== this.selectedAssignedMed?.id) {
        if ($) {
          if (this.selectedAssignedMed = $, ["isFromDifferentBatches", "isFractional"].forEach(k => {
            this.form.get(k).setValue(!!$[k]);
          }), !this.stockLocations || !this.stockLocations.length) return;
          this.form.get("stockLocation").setValue(this.stockLocations.find(({
            id: k
          }) => $.stockId === k) ?? this.stockLocations[0]), this.loadStockMedications(!1, !0);
        }
        if (this.substitutesLoaded = !1, this.filteredStockMedications = this.filteredByMedNamesId ? [...this.allStockMedications] : this.allStockMedications.filter(k => k.name === this.selectedAssignedMed.name), this.filteredStockMedications.length > 0) this.selectStockMedication(this.filteredStockMedications[0]), this.stockMessage = null;else {
          this.selectedStockMedication = null, this.form.get("selectedStockMedicationId")?.setValue(null);
          const k = this.form.get("stockLocation")?.value,
            ce = k.name ? `\u0441\u043a\u043b\u0430\u0434\u0435 ${k.name}` : "выбранном складе";
          this.stockMessage = this.isStockLoading ? "Загрузка данных..." : this.warehouseAlternativesMap[k.id] ? `\u041d\u0430 "${ce}" \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u043e\u0432. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0442\u0430\u0440\u0448\u0435\u0439 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439 \u0441\u0435\u0441\u0442\u0440\u0435` : `\u041d\u0430 "${ce}" \u043d\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430`;
        }
        this.cdr.markForCheck(), this.updateAvailableStockControl();
      }
    }
    issueMedicament() {
      this.isIssueIsStarted = !0;
      const $ = this.filteredStockMedications.find(Zi => Zi.id === this.selectedStockMedication.id),
        k = $?.unitQty ?? 1,
        ce = this.form.get("stockLocation")?.value,
        Ye = $?.warehouseId || (ce ? ce.id : null),
        ai = this.data.careCaseId || this.data.patient?.careCaseId;
      this.compositionService.getEhr(this.data.ehrCaseId || this.data.patient?.ehrCaseId).pipe((0, Xn.t)(this), (0, M.h)(Zi => (Zi || this.messageService.error("Не удалось найти электронную медкарту (EHR)", {
        marginBottom: this.notificationMb
      }), !!Zi)), (0, ut.w)(Zi => this.data.slot ? this._issueMedicament(this.data.slot, Zi, ai, Ye, k) : this.availableSlots && this.availableSlots.length ? (0, Rt.D)(this.availableSlots).pipe((0, ks.b)(Po => this._issueMedicament(Po, Zi, ai, Ye, k))) : (0, hn._)(() => new Error("Нет данных о слотах!")))).subscribe({
        next: () => {
          this.messageService.success(`\u041f\u0440\u0435\u043f\u0430\u0440\u0430\u0442 "${this.selectedAssignedMed.name}" \u0432\u044b\u0434\u0430\u043d \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0443.`, {
            marginBottom: this.notificationMb
          }), this.issueCompleted.emit(!0);
        },
        error: Zi => {
          console.error(Zi), this.messageService.error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0430 "${this.selectedAssignedMed.name}" \n${Zi?.error?.message || ""}`, {
            marginBottom: this.notificationMb
          }), this.issueCompleted.emit(!1);
        },
        complete: () => {
          this.isIssueIsStarted = !1;
        }
      });
    }
    _issueMedicament($, k, ce, Ye, Tt) {
      let Zi = "мг",
        fo = this.selectedAssignedMed.orderedDose;
      const Wr = /^(\d+(?:\.\d+)?)\s+([a-zA-Z\u0430-\u044f\u0410-\u042f.]+)(?:\s+\[(?:\d+(?:\.\d*)?|\.\d+)\s+(.+)\])?$/.exec(fo);
      if (Wr) {
        const [, Ls, nl, Yl, uc] = Wr;
        Zi = nl, fo = `${this.selectedStockMedication.dosePerTablet} ${nl} [${+this.form.get("quantity").value} ${uc}]`;
      }
      const Cs = this.form.get("isFromDifferentBatches")?.value,
        ia = {
          dispensingCode: $?.code,
          dispensingDate: $.planningDate,
          assignmentCompositionUid: this.selectedAssignedMed.assignmentCompositionUid,
          doctor: {
            dept: this.userInfo.dept,
            empId: this.userInfo.empId,
            position: this.userInfo.position,
            snils: this.userInfo.snils
          },
          medication: []
        };
      if (Cs) {
        let Ls = 0,
          nl = !1;
        const Yl = [];
        [...this.multiStockMedicine].sort((uc, $u) => $u.packQty * $u.unitQty - uc.packQty * uc.unitQty).forEach(uc => {
          nl || Yl.push(uc), Ls += Math.ceil(uc.packQty * uc.unitQty), nl = Ls >= +this.form.get("quantity").value;
        }), ia.medication = Yl.map(uc => ({
          medNamesId: this.medNamesId,
          batchCount: +this.form.get("quantity").value / uc.unitQty,
          dose: fo,
          doseUnit: Zi,
          id: this.medicine.id,
          name: uc.name,
          productId: uc.id,
          recycledPack: 0,
          storageId: uc.warehouseId,
          markDrugId: ri.Rt.newGuid()
        }));
      } else ia.medication = [{
        medNamesId: this.medNamesId,
        batchCount: +this.form.get("quantity").value / Tt,
        dose: fo,
        doseUnit: Zi,
        id: this.medicine.id,
        name: this.selectedStockMedication.name || this.medicine.name,
        productId: this.selectedStockMedication.id,
        recycledPack: 0,
        storageId: Ye,
        markDrugId: ri.Rt.newGuid()
      }];
      return this.compositionService.createMedicationDocument(k, ce, ia, !0, !!$.maxSymptomaticAmount, "completed", {
        slots: this.availableSlots,
        medicine: this.data?.medicine ?? this.data.otherMedications.find(({
          assignmentCompositionUid: Ls
        }) => this.selectedAssignedMed.assignmentCompositionUid === Ls)
      }).pipe((0, m.b)(() => {
        this.selectedAssignedMed && (this.selectedAssignedMed.status = "Выдано");
      }));
    }
    updateAvailableStockControl() {
      this.form.get("availableStock")?.setValue(this.availableStock);
    }
    _initForm() {
      return this.fb.group({
        stockLocation: [{
          value: null,
          disabled: !0
        }],
        quantity: [{
          value: 0,
          disabled: !0
        }],
        availableStock: [{
          value: 0,
          disabled: !0
        }],
        isFractional: [{
          value: !1,
          disabled: !0
        }],
        isFromDifferentBatches: [{
          value: !1,
          disabled: !0
        }],
        selectedStockMedicationId: [null]
      });
    }
    _handleMultiBatchSelection($) {
      this.selectedStockMedication = $;
      const k = this.filteredStockMedications.find(Ye => Ye.id === $.id);
      if (!k || !this.selectedAssignedMed) return;
      const ce = this.multiStockMedicine.findIndex(Ye => Ye.id === k.id);
      ce < 0 ? this.multiStockMedicine.push(k) : this.multiStockMedicine.splice(ce, 1), this.selectedAssignedMed.selectedAmount = this.totalSelectedTablets > this.selectedAssignedMed.orderedAmount * this.slotMultiply ? this.selectedAssignedMed.orderedAmount * this.slotMultiply : this.totalSelectedTablets, this.form.get("quantity").setValue(this.selectedAssignedMed.orderedAmount * this.slotMultiply > this.selectedAssignedMed.selectedAmount ? 0 : this.selectedAssignedMed.orderedAmount), this.updateAvailableStockControl();
    }
    prepareLabel() {
      this.showPrint = !0, this.addToPillbox();
    }
  }).ɵfac = function (k) {
    return new (k || om)(n.Y36(aa.ap));
  }, om.ɵcmp = n.Xpm({
    type: om,
    selectors: [["dispensing-panel"]],
    inputs: {
      data: "data",
      mode: "mode",
      availableSlots: "availableSlots",
      stockLocations: "stockLocations",
      isComposite: "isComposite"
    },
    outputs: {
      onComponentIsReady: "onComponentIsReady",
      isOnStockLoaded: "isOnStockLoaded",
      issueCompleted: "issueCompleted",
      onSelectedStockMedication: "onSelectedStockMedication",
      onInjectPrepare: "onInjectPrepare"
    },
    features: [n.TTD],
    decls: 36,
    vars: 24,
    consts: [[1, "section-table", 3, "formGroup"], [1, "controls-grid"], [1, "controls-left-group"], ["lu-label", "Остаток на дату", 1, "date-field"], [1, "form__group--date", 3, "formControl", "minDate", "maxDate"], ["type", "error", 4, "ngIf"], ["lu-label", "Склад", 1, "stock-field"], [1, "custom-select"], [1, "custom-select__trigger", 3, "click"], [1, "custom-select__value"], ["icon", "chevron-down", 1, "custom-select__arrow", 3, "size"], [4, "ngIf"], [1, "controls-right-group"], [1, "checkbox-group", 3, "itemsOrientation"], ["formControlName", "isFractional"], ["formControlName", "isFromDifferentBatches"], [1, "quantity-wrapper"], ["lu-label", "Количество", 1, "quantity-field"], [1, "input-with-unit"], ["formControlName", "quantity", 3, "step"], ["lu-text", "", "size", "small"], ["lu-label", "Остаток", 1, "balance-field", 2, "margin-right", "32px"], ["type", "text", "lu-input-generic", "", "formControlName", "availableStock", "readonly", "", 3, "step"], [4, "ngIf", "ngIfElse"], ["noMedsMessage", ""], ["type", "error"], ["icon", "warning", 3, "size"], [1, "custom-select__backdrop", 3, "click"], [1, "custom-select__options"], ["class", "custom-select__option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "custom-select__option", 3, "click"], ["class", "custom-table stock-table", 4, "ngIf"], ["class", "stock-table-mob", 4, "ngIf"], [1, "table-footer-buttons"], ["lu-button-outer", "", "size", "small", 1, "table-action-btn", 3, "color", "disabled", "click"], ["lu-button-raised", "", 3, "click", 4, "ngIf"], ["lu-button-raised", "", 3, "disabled", "click", 4, "ngIf"], ["lu-button-raised", "", "size", "small", "class", "table-action-btn", 3, "color", "disabled", "click", 4, "ngIf"], [1, "custom-table", "stock-table"], [1, "chckbox-pills"], [1, "name-pills"], [3, "selected-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "custom-radio", 3, "click"], ["lu-text", "", 1, "series-chip"], [1, "stock-table-mob"], ["class", "stock-table-mob__item", 3, "selected-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "stock-table-mob__item"], [1, "stock-table-mob__item-heading"], [1, "custom-radio", 2, "min-width", "16px", 3, "click"], [1, "stock-table-mob__item-body"], [1, "stock-table-mob__col", "w-96"], [1, "col-title"], [1, "stock-table-mob__col", "w-112"], [1, "stock-table-mob__col", "w-72"], [1, "stock-table-mob__col", "series-col"], [1, "series"], [1, "stock-table-mob__col", "packaging-col"], [1, "packaging-value"], ["lu-button-raised", "", 3, "click"], ["lu-button-raised", "", 3, "disabled", "click"], ["lu-button-raised", "", "size", "small", 1, "table-action-btn", 3, "color", "disabled", "click"], [1, "empty-stock-message", 3, "ngStyle", "ngClass"], ["icon", "warning", 1, "warning-icon", 3, "size"], ["lu-text", "", 1, "empty-stock-message__text"], ["lu-button-outer", "", "size", "small", "class", "table-action-btn", 3, "color", "disabled", "click", 4, "ngIf"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3), n._UZ(4, "lu-calendar-field", 4), n.YNc(5, cr, 3, 1, "lu-form-message", 5), n.YNc(6, jr, 4, 5, "lu-form-message", 5), n.YNc(7, as, 4, 5, "lu-form-message", 5), n.YNc(8, Da, 3, 1, "lu-form-message", 5), n.qZA(), n.TgZ(9, "label", 6)(10, "div", 7)(11, "div", 8), n.NdJ("click", function () {
        return (null == ce.stockLocations ? null : ce.stockLocations.length) > 1 ? ce.toggleWarehouseDropdown() : null;
      }), n.TgZ(12, "span", 9), n._uU(13), n.qZA(), n._UZ(14, "lu-svg-icon", 10), n.qZA(), n.YNc(15, As, 4, 1, "ng-container", 11), n.qZA()()(), n.TgZ(16, "div", 12)(17, "lu-checkbox-group", 13)(18, "lu-checkbox", 14), n._uU(19, "Дробное количество"), n.qZA(), n.TgZ(20, "lu-checkbox", 15), n._uU(21, "Списание из разных партий"), n.qZA()(), n.TgZ(22, "div", 16)(23, "label", 17)(24, "div", 18), n._UZ(25, "lu-stepper", 19), n.TgZ(26, "span", 20), n._uU(27), n.qZA()()(), n.TgZ(28, "label", 21)(29, "div", 18), n._UZ(30, "lu-stepper", 22), n.TgZ(31, "span", 20), n._uU(32), n.qZA()()()()()(), n.YNc(33, mo, 10, 9, "ng-container", 23), n.YNc(34, ys, 6, 9, "ng-template", null, 24, n.W1O), n.qZA()), 2 & k) {
        const Ye = n.MAs(35);
        let Tt, ai, Zi;
        n.Q6J("formGroup", ce.form), n.xp6(4), n.Q6J("formControl", ce.balanceDateCtrl)("minDate", ce.minDate)("maxDate", ce.maxDate), n.xp6(1), n.Q6J("ngIf", ce.balanceDateCtrl.hasError("required")), n.xp6(1), n.Q6J("ngIf", ce.balanceDateCtrl.hasError("dateMin")), n.xp6(1), n.Q6J("ngIf", ce.balanceDateCtrl.hasError("dateMax")), n.xp6(1), n.Q6J("ngIf", ce.balanceDateCtrl.hasError("dateIsInvalid")), n.xp6(1), n.ekj("stock-empty", !(null != (Tt = ce.form.get("stockLocation")) && Tt.value)), n.xp6(1), n.ekj("open", ce.isWarehouseDropdownOpen), n.xp6(2), n.ekj("placeholder", !(null != (ai = ce.form.get("stockLocation")) && ai.value)), n.xp6(1), n.hij(" ", (null == (Zi = ce.form.get("stockLocation")) || null == Zi.value ? null : Zi.value.name) || "Выберите из списка", " "), n.xp6(1), n.Q6J("size", 16), n.xp6(1), n.Q6J("ngIf", ce.isWarehouseDropdownOpen), n.xp6(2), n.Q6J("itemsOrientation", ce.isTablet ? "horizontal" : "vertical"), n.xp6(8), n.Q6J("step", .25), n.xp6(2), n.hij(" ", (null == ce.selectedStockMedication ? null : ce.selectedStockMedication.fillingUnit) || (null == ce.selectedAssignedMed ? null : ce.selectedAssignedMed.unitOfPacking) || "табл.", " "), n.xp6(3), n.Q6J("step", .25), n.xp6(2), n.hij(" ", (null == ce.selectedStockMedication ? null : ce.selectedStockMedication.fillingUnit) || (null == ce.selectedAssignedMed ? null : ce.selectedAssignedMed.unitOfPacking) || "табл.", " "), n.xp6(1), n.Q6J("ngIf", ce.filteredStockMedications.length > 0)("ngIfElse", Ye);
      }
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Di.PC, vr._Y, vr.JJ, vr.JL, vr.oH, vr.sg, vr.u, Ks.mc, Ka.$m, ja.l, ul.z, Ci.q, Kt.NZ, en.fd, mi.R, ro.Z, Di.uU, Ln.M],
    styles: ["@charset \"UTF-8\";  lu-message{margin-right:16px}.section-table[_ngcontent-%COMP%]{min-width:568px;background-color:#f2f2f2cc;border-radius:8px;margin:0 24px 24px;padding:24px}@media (min-width: 960px){.section-table[_ngcontent-%COMP%]{min-width:928px}}@media (max-width: 960px){.section-table[_ngcontent-%COMP%]{min-width:calc(100vw - 40px);margin:-24px 20px 24px 4px;padding:16px 12px;border:none;background-color:#fff}}.section-table[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.section-table[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]{width:160px}.section-table[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .stock-field[_ngcontent-%COMP%]{width:400px;margin-right:24px}@media (min-width: 600px) and (max-width: 960px){.section-table[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .stock-field[_ngcontent-%COMP%]{width:363px!important;margin-right:0!important}}.section-table[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .quantity-wrapper[_ngcontent-%COMP%]{display:flex;gap:16px}.section-table[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .quantity-field[_ngcontent-%COMP%]{margin-right:8px}.controls-left-group[_ngcontent-%COMP%]{display:flex}@media (max-width: 960px){.controls-left-group[_ngcontent-%COMP%]{gap:16px}}@media (min-width: 961px){.controls-right-group[_ngcontent-%COMP%]{min-width:auto;display:flex;justify-content:space-between;flex-direction:row-reverse}}.custom-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.title-required[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:none}.custom-table[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left;border-bottom:1px solid #e6e6e6;font-size:14px;padding:12px 28px 12px 4px}.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#757575;font-weight:400;font-size:13px;line-height:18px}.custom-table.assigned-meds-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer}.custom-table.assigned-meds-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .assigned-meds-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}@media (min-width: 961px){.assigned-meds-row.selected[_ngcontent-%COMP%]{background-color:#fff8cc}}.assigned-meds-row.selected[_ngcontent-%COMP%]:hover{background-color:#fff8cc}.title-required-count-ordered-quantity[_ngcontent-%COMP%], .title-required-ordered-dose[_ngcontent-%COMP%], .title-required-selected-quantity[_ngcontent-%COMP%], .title-required-status[_ngcontent-%COMP%]{padding-left:0!important}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{--lu-font-size: 13px;color:red!important}.custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{height:48px;border-bottom:1px solid #e6e6e6}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(2), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(2){width:602px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(3), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(3){width:104px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(4), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(4){width:128px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(5), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(5){width:144px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(6), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(6){width:104px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(7), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(7){width:62px;white-space:nowrap}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(8), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(8){width:128px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(9), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(9){width:112px}.custom-table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:nth-child(10), .custom-table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(10){width:132px}.custom-table.assigned-meds-table[_ngcontent-%COMP%]   .custom-table.assigned-meds-table[_ngcontent-%COMP%]   .status-chip.ready[_ngcontent-%COMP%]{background-color:#e8f5e9;border-color:#81c784;color:#1b5e20}.custom-table.stock-table[_ngcontent-%COMP%]{margin-top:26px;margin-left:2px}.custom-table.stock-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding:0}.chckbox-pills[_ngcontent-%COMP%]{padding-right:0}.custom-table.stock-table[_ngcontent-%COMP%]   .series-chip[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:4px;background-color:#eee}@media (max-width: 960px){.checkbox-group[_ngcontent-%COMP%]{margin-bottom:8px}}@media (min-width: 961px){.checkbox-group[_ngcontent-%COMP%]{padding-top:16px;width:235px!important}}@media (max-width: 960px){.checkbox-group[_ngcontent-%COMP%]     lu-checkbox{background-color:#38a1d61a;border-radius:16px}.checkbox-group[_ngcontent-%COMP%]     lu-checkbox[data-lu-checked=true]{background-color:#ffe766}.checkbox-group[_ngcontent-%COMP%]     .lu-checkbox{display:none}.checkbox-group[_ngcontent-%COMP%]     .lu-checkbox-text{margin-left:0;padding:4px 12px}}.checkbox-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.quantity-controls[_ngcontent-%COMP%]{display:flex}.quantity-controls[_ngcontent-%COMP%]   .input-with-unit[_ngcontent-%COMP%]{display:flex;align-items:center}.quantity-controls[_ngcontent-%COMP%]   .input-with-unit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:8px}.form-hint[_ngcontent-%COMP%]{margin-top:4px}.table-footer-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px;margin-top:32px}@media (max-width: 960px){.table-footer-buttons[_ngcontent-%COMP%]   .table-action-btn[_ngcontent-%COMP%]{min-width:141px}}.empty-stock-message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:12px 0 16px 12px;margin-top:24px;color:#616161;height:48px}@media (max-width: 960px){.empty-stock-message[_ngcontent-%COMP%]{height:max-content}}.not-alternatives[_ngcontent-%COMP%]{background-color:#fde4df}.not-alternatives__text[_ngcontent-%COMP%]{font-size:13px}@media (max-width: 600px){.empty-stock-message[_ngcontent-%COMP%]{align-items:flex-start!important}}.empty-stock-message[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%]{margin-right:12px;--lu-svg-icon-color: #f5a623}.custom-radio[_ngcontent-%COMP%]{display:inline-block;width:16px;height:16px;border:1px solid #999;border-radius:50%;background-color:#fff;cursor:pointer;vertical-align:middle;transition-property:border-color,border-width;transition-duration:.2s;transition-timing-function:ease}.custom-radio.active[_ngcontent-%COMP%]{border-color:#38a1d6;border-width:5px}.input-with-unit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.assigned-meds-wrapper[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.assigned-meds-wrapper[_ngcontent-%COMP%]   .assigned-meds-table[_ngcontent-%COMP%]{max-height:calc(100vh - 750px);overflow-y:auto}.assigned-meds-header[_ngcontent-%COMP%], .assigned-meds-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:665px 120px 108px 120px 120px;column-gap:48px}.assigned-meds-header[_ngcontent-%COMP%]{font-size:13px;color:#757575;height:50px;font-weight:400;line-height:18px}@media (max-width: 960px){.assigned-meds-header[_ngcontent-%COMP%]{display:flex;align-items:end;gap:24px;padding-left:16px;height:36px!important;margin-bottom:8px}.assigned-meds-header[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:0}}.assigned-meds-row[_ngcontent-%COMP%]{background-color:#fff}@media (max-width: 960px){.assigned-meds-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:24px;padding:12px 16px}}@media (min-width: 961px){.assigned-meds-row[_ngcontent-%COMP%]{height:56px;font-weight:400;font-size:15px;line-height:24px;cursor:pointer}}@media (max-width: 960px){.assigned-meds-row[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:0!important}}.assigned-meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;font-size:13px;line-height:18px}@media (min-width: 961px){.assigned-meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{white-space:nowrap}}.assigned-meds-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{color:#757575;font-size:13px;line-height:18px}@media (min-width: 961px){.assigned-meds-row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{font-size:14px;line-height:20px}}.col-med-name[_ngcontent-%COMP%]{padding:16px 0 16px 24px}@media (max-width: 960px){.col-med-name[_ngcontent-%COMP%]{flex-grow:0;width:320px}}.col-med-name--mob[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start!important;gap:4px}.col-med-name--mob[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}@media (max-width: 960px){.col-med-name--mob[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:24px}}.col-med-name--mob[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{height:15px;border-right:1px solid #ccc}@media (max-width: 960px){.col-selected-qty[_ngcontent-%COMP%]{flex-grow:1;width:80px}}.col-status[_ngcontent-%COMP%]{width:130px}@media (max-width: 960px){.col-status[_ngcontent-%COMP%]{flex-grow:1;width:120px}}.status-chip[_ngcontent-%COMP%]{display:inline-block;padding:0 12px;border-radius:2px;border:1px solid #ccc;background:#ffffff;color:#757575;font-weight:400;transition-property:background-color,border-color,color;transition-duration:.3s;transition-timing-function:ease;--lu-font-size: 13px !important;--lu-line-height: 20px !important}@media (max-width: 960px){.status-chip[_ngcontent-%COMP%]{height:24px;padding:2px 8px;--lu-line-height: 18px !important}}.status-chip.ready[_ngcontent-%COMP%]{background-color:#e8f5e9;border-color:#81c784;color:#1b5e20}.ng-star-inserted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:4px}@media (min-width: 961px){  .header,   .main-footer{z-index:1001}}.custom-select[_ngcontent-%COMP%]{position:relative}.custom-select__trigger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:400px;height:40px;padding:0 12px;border:1px solid #999;border-radius:4px;background:#fff;cursor:pointer;box-sizing:border-box;transition:border-color .2s}@media (min-width: 600px) and (max-width: 960px){.custom-select__trigger[_ngcontent-%COMP%]{width:363px!important}}.custom-select.open[_ngcontent-%COMP%]   .custom-select__trigger[_ngcontent-%COMP%]{border-color:#757575;border-bottom-left-radius:0;border-bottom-right-radius:0}.custom-select__value[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px;color:#333}.custom-select__value.placeholder[_ngcontent-%COMP%]{color:#999}.custom-select__arrow[_ngcontent-%COMP%]{flex-shrink:0;margin-left:8px;transition:transform .2s;--lu-svg-icon-color: #666}.custom-select.open[_ngcontent-%COMP%]   .custom-select__arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}.custom-select__backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:99}.custom-select__options[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;max-height:240px;overflow-y:auto;background:#fff;border:1px solid #757575;border-top:none;border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:100;box-shadow:0 4px 8px #0000001a}.custom-select__option[_ngcontent-%COMP%]{padding:10px 12px;font-size:15px;color:#333;cursor:pointer;line-height:1.4}.custom-select__option[_ngcontent-%COMP%]:hover, .custom-select__option.active[_ngcontent-%COMP%]{background-color:#38a1d61a}.stock-table-mob[_ngcontent-%COMP%]{margin-top:16px;border-top:1px solid #e6e6e6;width:536px}.stock-table-mob__item[_ngcontent-%COMP%]{padding:9px 0;border-bottom:1px solid #e6e6e6}.stock-table-mob__item-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:9px;font-weight:600}.stock-table-mob__item-body[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px 16px;padding-left:24px;padding-bottom:8px;line-height:1.46;box-sizing:border-box}.stock-table-mob__col[_ngcontent-%COMP%]{min-width:0;flex-shrink:1}.stock-table-mob__col.w-72[_ngcontent-%COMP%]{width:72px}.stock-table-mob__col.w-96[_ngcontent-%COMP%]{width:96px}.stock-table-mob__col.w-112[_ngcontent-%COMP%]{width:112px}.stock-table-mob__col[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;color:#757575;line-height:1.38}.stock-table-mob__col[_ngcontent-%COMP%]   .series[_ngcontent-%COMP%]{margin:-2px;padding:1px 4px;border-radius:4px;background-color:#e6e6e6}.stock-table-mob__col[_ngcontent-%COMP%]   .series-col[_ngcontent-%COMP%]{min-width:72px;max-width:100%;flex:1 1 120px}.stock-table-mob__col[_ngcontent-%COMP%]   .packaging-col[_ngcontent-%COMP%]{min-width:0}.stock-table-mob__col[_ngcontent-%COMP%]   .packaging-value[_ngcontent-%COMP%]{white-space:normal;word-break:break-word;overflow-wrap:anywhere}@media (min-width: 600px) and (max-width: 960px){.controls-grid[_ngcontent-%COMP%]{flex-direction:column;gap:24px}}"],
    changeDetection: 0
  }), om);
  function la(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "span", 6), n._uU(2), n.ALo(3, "date"), n.qZA(), n._UZ(4, "span", 7), n.TgZ(5, "span", 6), n._uU(6), n.qZA(), n._UZ(7, "span", 7), n.TgZ(8, "span", 6), n._uU(9), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(2), n.lnq(" ", k.patient.gender, ", ", k.patient.age, " лет, ", n.xi3(3, 5, k.patient.birthDate, "dd.MM.yyyy"), " "), n.xp6(4), n.hij(" ИБ № ", k.patient.cardNumber, " "), n.xp6(3), n.hij(" ", k.patient.palata, " ");
    }
  }
  function St(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "span"), n._uU(2), n.ALo(3, "date"), n.qZA(), n._UZ(4, "span", 7), n.TgZ(5, "span"), n._uU(6), n.qZA(), n._UZ(7, "span", 7), n.TgZ(8, "span"), n._uU(9), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(2), n.lnq(" ", k.patient.gender, ", ", k.patient.age, " лет, ", n.xi3(3, 5, k.patient.birthDate, "dd.MM.yyyy"), " "), n.xp6(4), n.hij("ИБ № ", k.patient.cardNumber, ""), n.xp6(3), n.Oqu(k.patient.palata);
    }
  }
  Hs = (0, Se.gn)([(0, Xn.c)()], Hs);
  const Hh = class {
    constructor() {
      this.close = new n.vpe();
    }
  };
  let Wi = Hh;
  Hh.ɵfac = function (k) {
    return new (k || Hh)();
  }, Hh.ɵcmp = n.Xpm({
    type: Hh,
    selectors: [["banner-panel"]],
    inputs: {
      patient: "patient",
      isTablet: "isTablet"
    },
    outputs: {
      close: "close"
    },
    decls: 9,
    vars: 4,
    consts: [[1, "dialog-header"], ["lu-text", "", 1, "patient-name"], [1, "patient-details"], [4, "ngIf"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], ["lu-text", ""], [1, "dot"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div")(2, "h2", 1), n._uU(3), n.qZA(), n.TgZ(4, "div", 2), n.YNc(5, la, 10, 8, "ng-container", 3), n.YNc(6, St, 10, 8, "ng-container", 3), n.qZA()(), n.TgZ(7, "button", 4), n.NdJ("click", function () {
        return ce.close.emit();
      }), n._UZ(8, "lu-svg-icon", 5), n.qZA()()), 2 & k && (n.xp6(3), n.Oqu(ce.patient.fio), n.xp6(2), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(2), n.Q6J("size", 24));
    },
    dependencies: [Di.O5, Ro.k, Ci.q, Kt.NZ, Di.uU],
    styles: [".dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background-color:#fff;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}@media (min-width: 961px){.dialog-header[_ngcontent-%COMP%]{padding:12px 24px}}.dialog-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}@media (max-width: 960px){.dialog-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]{font-size:17px}.dialog-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]    {--lu-line-height: 24px !important}}.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]{display:flex;align-items:center;--lu-font-size: 15px;height:24px}@media (max-width: 960px){.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]{gap:6px}}@media (min-width: 961px){.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]{margin-top:4px;color:#333}}@media (min-width: 961px){.dialog-header[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:6px}}.dialog-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:3px;height:3px;background-color:#000!important;border-radius:50%}@media (max-width: 960px){.dialog-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{opacity:.2}}"]
  });
  const Pt = ["dispensingPanel"];
  function Ki(Te, $) {
    if (1 & Te && (n.TgZ(0, "h3", 16), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.AsE(" Состав таблетницы №", (null == k.data.pillbox ? null : k.data.pillbox.number) || "-", " ", null != k.data.slot && k.data.slot.period ? " " + k.periodTranslations[k.data.slot.period.toLowerCase()] : null != k.data.pillbox && k.data.pillbox.timeOfDay ? " на " + k.data.pillbox.timeOfDay : "", " ");
    }
  }
  function Nr(Te, $) {
    if (1 & Te && (n.TgZ(0, "h3", 16), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      let ce;
      n.xp6(1), n.AsE(" ", k.data.medicine.name, " ", null !== (ce = k.periodTranslations[k.data.slot.dayTimePeriod]) && void 0 !== ce ? ce : "на " + k.data.slot.time, " ");
    }
  }
  function oa(Te, $) {
    1 & Te && (n.TgZ(0, "div", 17)(1, "div", 18), n._uU(2, "Назначенный медикамент"), n.qZA(), n.TgZ(3, "div", 19), n._uU(4, "Заказанное кол-во"), n.qZA(), n.TgZ(5, "div", 20), n._uU(6, "Заказанная доза"), n.qZA(), n.TgZ(7, "div", 21), n._uU(8, "Выбранное кол-во"), n.qZA(), n.TgZ(9, "div", 22), n._uU(10, "Статус"), n.qZA()());
  }
  function er(Te, $) {
    1 & Te && (n.TgZ(0, "div", 17)(1, "div", 18), n._uU(2, "Назначенный медикамент, кол-во и доза"), n.qZA(), n.TgZ(3, "div", 21), n._uU(4, "Выбранное кол-во"), n.qZA(), n.TgZ(5, "div", 22), n._uU(6, "Статус"), n.qZA()());
  }
  const Qr = function (Te) {
    return {
      ready: Te
    };
  };
  function Il(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 18), n._uU(2), n.qZA(), n.TgZ(3, "div", 19), n._uU(4), n.qZA(), n.TgZ(5, "div", 20), n._uU(6), n.qZA(), n.TgZ(7, "div", 21), n._uU(8), n.qZA(), n.TgZ(9, "div", 22)(10, "span", 26), n._uU(11), n.qZA()(), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(2);
      n.xp6(2), n.Oqu(ce.getNameTabletWithDose(k)), n.xp6(2), n.Oqu(k.orderedAmount * ce.slotMultiply), n.xp6(2), n.Oqu(k.orderedDose), n.xp6(2), n.Oqu(ce.getSelectedAmount(k)), n.xp6(2), n.Q6J("ngClass", n.VKq(6, Qr, "ready_dispense" === k.status)), n.xp6(1), n.hij(" ", ce.getStatusLabel(k.status), " ");
    }
  }
  function Uc(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 18), n._uU(2), n.qZA(), n.TgZ(3, "div", 19), n._uU(4), n.qZA(), n.TgZ(5, "div", 20), n._uU(6), n.qZA(), n.TgZ(7, "div", 21), n._uU(8), n.qZA(), n.TgZ(9, "div", 22)(10, "span", 26), n._uU(11), n.qZA()(), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(2);
      n.xp6(2), n.Oqu(ce.getNameTabletWithDose(k)), n.xp6(2), n.Oqu(ce.calculateQuantityBySlot(k.slots)), n.xp6(2), n.Oqu(k.orderedDose), n.xp6(2), n.Oqu(ce.getSelectedAmount(k)), n.xp6(2), n.Q6J("ngClass", n.VKq(6, Qr, "ready_dispense" === k.status)), n.xp6(1), n.hij(" ", ce.getStatusLabel(k.status), " ");
    }
  }
  function Kl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 25), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(2), n.MAs(13).selectAssignedMedication(ai), n.KtG(Ye.stopPropagation());
      }), n.YNc(1, Il, 12, 8, "ng-container", 9), n.YNc(2, Uc, 12, 8, "ng-container", 9), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2),
        Ye = n.MAs(13);
      n.ekj("selected", k.id === Ye.selectedAssignedMed.id), n.xp6(1), n.Q6J("ngIf", "issuing" === ce.mode), n.xp6(1), n.Q6J("ngIf", "preparation" === ce.mode);
    }
  }
  function Wl(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 23), n.YNc(1, Kl, 3, 4, "div", 24), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.assignedMedications)("ngForTrackBy", k.trackByAssignedMed);
    }
  }
  function nc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 25), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(13);
        return n.KtG(ai.selectAssignedMedication(Tt));
      }), n.TgZ(1, "div", 27)(2, "div"), n._uU(3), n.qZA(), n.TgZ(4, "div")(5, "span"), n._uU(6), n.qZA(), n._UZ(7, "span", 28), n.TgZ(8, "span"), n._uU(9), n.qZA()()(), n.TgZ(10, "div", 21), n._uU(11), n.qZA(), n.TgZ(12, "div", 22)(13, "span", 26), n._uU(14), n.qZA()()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2),
        Ye = n.MAs(13);
      n.ekj("selected", k === Ye.selectedAssignedMed), n.xp6(3), n.Oqu(ce.getNameTabletWithDose(k)), n.xp6(3), n.Oqu(k.orderedAmount || "-"), n.xp6(3), n.Oqu(k.orderedDose || "-"), n.xp6(2), n.Oqu(ce.getSelectedAmount(k)), n.xp6(2), n.Q6J("ngClass", n.VKq(8, Qr, "ready_dispense" === k.status)), n.xp6(1), n.hij(" ", ce.getStatusLabel(k.status), " ");
    }
  }
  function Zc(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, nc, 15, 10, "div", 24), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.assignedMedications)("ngForTrackBy", k.trackByAssignedMed);
    }
  }
  function Yc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 29), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.clearPillbox());
      }), n._uU(1, " Очистить таблетницу "), n.qZA();
    }
    2 & Te && n.Q6J("color", "red");
  }
  function nu(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 30), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.preparePillbox());
      }), n._uU(1, " Подготовить "), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.Q6J("disabled", !k.hasAllPreparedMedications);
    }
  }
  function kl(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Выдать"), n.qZA());
  }
  function mu(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, " Ожидайте..."), n.qZA());
  }
  function Wc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 31), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.issueMedicament());
      }), n.YNc(1, kl, 2, 0, "span", 9), n.YNc(2, mu, 2, 0, "span", 9), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.Q6J("size", "medium")("disabled", k.isDisabledIssue), n.xp6(1), n.Q6J("ngIf", !k.isIssueIsStarted), n.xp6(1), n.Q6J("ngIf", k.isIssueIsStarted);
    }
  }
  Gi().extend(zi());
  let gc = ((rm = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr) {
      this.modalRef = $, this.data = k, this.messageService = ce, this.userContextService = Ye, this.reserveService = Tt, this.breakpointObserver = ai, this.cdr = Zi, this.pillboxService = Po, this.warehouseService = fo, this.compositionService = Wr, this.getStatusLabel = Re.dg, this.isTablet = !1, this.medicine = {}, this.isIssueIsStarted = !1, this.mode = "preparation", this.isStockLoaded = !1, this.medNamesId = null, this.notificationMb = 44, this.availableSlots = [], this.slotMultiply = 1, this.periodTranslations = {
        morning: "на утро",
        day: "на день",
        evening: "на вечер",
        night: "на ночь"
      }, this.selectedStockMed = null, this.mode = "context" in this.data ? this.data.context : "preparation";
      let Cs = this.data.assignedMedications?.map(ia => ({
        ...ia
      })) || [];
      "medicine" in k && k?.medicine && (this.medicine = k.medicine, Cs = Cs.filter(k.medicine.assignmentCompositionUid ? ia => ia.assignmentCompositionUid === k.medicine.assignmentCompositionUid : ia => ia.name === k.medicine.name)), this.assignedMedications = Cs, "slots" in k && k.slots && k.slots.length && (this.availableSlots = k.slots.filter(Ls => Ls.status === Re.Ae.Assigned && new Date().getTime() >= this.planningDateWithPeriodSlot(Ls)), this.slotMultiply = this.availableSlots.length);
    }
    parseOrderedDose($) {
      if (!$.orderedDose) return null;
      const ce = /^(\d+(?:\.\d+)?)\s+([a-zA-Z\u0430-\u044f\u0410-\u042f.]+)(?:\s+\[(?:\d+(?:\.\d*)?|\.\d+)\s+(.+)\])?$/.exec($.orderedDose),
        Ye = this.dispensingPanel?.selectedStockMedication;
      if (ce) {
        let Tt = $.unitOfPacking;
        return $.otnUid === Ye?.mnnId && Tt !== Ye?.fillingUnit && (Tt = Ye?.fillingUnit), {
          dosage: ce[1],
          unit: ce[2],
          quantity: ce[3],
          form: Tt
        };
      }
      return null;
    }
    getNameTabletWithDose($) {
      const k = this.parseOrderedDose($);
      return `${$.name} ${k?.form ?? ""}  ${$.dose / $.orderedAmount} ${k?.unit || "мг"}`;
    }
    calculateQuantityBySlot($) {
      return $.map(({
        amount: k
      }) => k).reduce((k, ce) => k + ce, 0);
    }
    planningDateWithPeriodSlot($) {
      if ($.dayTimePeriod) {
        const k = $.dayTimePeriod.toUpperCase(),
          ce = +gi.PERIOD_START_TIME[k].split(":")[0];
        return new Date($.planningDate).setHours(ce);
      }
      if ($.time) {
        const k = +$.time.split(":")[0];
        return new Date($.planningDate).setHours(k);
      }
      throw new Error("Не указан период (dayTimePeriod) или время выдачи (time)!");
    }
    ngOnInit() {
      this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
        this.isTablet = $.matches, this.cdr.markForCheck();
      }), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
        this.userInfo = {
          doctorName: `${$.lastName} ${$.firstName} ${$.secondName}`,
          dept: $.department?.fullName,
          deptId: $.department?.id,
          empId: $.employeeId,
          postId: $.jobTitle?.id,
          position: $.jobTitle?.name,
          snils: $.employee?.identities?.snils
        }, this.warehouses$ = this._loadWarehouses();
      });
    }
    ngAfterViewInit() {
      this.assignedMedications.length > 0 && (this.dispensingPanel.selectedAssignedMed = this.assignedMedications[0]), ["isFromDifferentBatches", "isFractional"].forEach($ => {
        this.dispensingPanel.form.get($).valueChanges.pipe((0, Xn.t)(this)).subscribe(k => {
          const ce = this.dispensingPanel.selectedAssignedMed.id;
          this.assignedMedications = this.assignedMedications.map(Ye => (Ye.id === ce && (Ye[$] = k), Ye));
        });
      }), this.dispensingPanel.form.get("stockLocation").valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
        const k = this.dispensingPanel.selectedAssignedMed.id;
        this.assignedMedications = this.assignedMedications.map(ce => (ce.id === k && $ && (ce.stockId = $.id), ce));
      });
    }
    getSelectedAmount($) {
      if ("preparation" === this.mode) {
        const k = this.dispensingPanel.preparedPillboxMedicaments.find(({
          id: ce
        }) => $.id === ce);
        return k ? $.isFractional ? k.applyPacking : this.dispensingPanel.roundAmount(k.applyPacking) : 0;
      }
      return $.isFromDifferentBatches ? this.dispensingPanel.totalSelectedTablets > $.orderedAmount * this.slotMultiply ? $.orderedAmount * this.slotMultiply : this.dispensingPanel.totalSelectedTablets : $.stockId ? $.selectedAmount : 0;
    }
    get isDisabledIssue() {
      return 0 === this.dispensingPanel?.filteredStockMedications.length || this.isIssueIsStarted || 0 === this.dispensingPanel?.form.get("quantity")?.value;
    }
    issueMedicament() {
      this.isIssueIsStarted = !0;
      const $ = this.dispensingPanel.selectedStockMedication,
        ce = this.dispensingPanel.form.get("stockLocation")?.value;
      $?.warehouseId || ce && ce.id ? this.assignedMedications && 0 !== this.assignedMedications.length ? this.data.patient?.ehrCaseId ? this.data.patient?.careCaseId ? this.dispensingPanel.issueMedicament() : this.messageService.error("Отсутствует идентификатор обращения (careCaseId)", {
        marginBottom: this.notificationMb
      }) : this.messageService.error("Отсутствует идентификатор случая (ehrCaseId)", {
        marginBottom: this.notificationMb
      }) : this.messageService.warning("Нет назначенных медикаментов.", {
        marginBottom: this.notificationMb
      }) : this.messageService.warning("Склад не выбран.", {
        marginBottom: this.notificationMb
      });
    }
    get hasAllPreparedMedications() {
      return this.assignedMedications?.every($ => "ready_dispense" === $.status) ?? !1;
    }
    get hasAnyPreparedMedications() {
      return this.assignedMedications?.some($ => "ready_dispense" === $.status) ?? !1;
    }
    issueCompletedHandler() {
      this.isIssueIsStarted = !1, this.close();
    }
    preparePillbox() {
      if ("pillbox" in this.data && !this.data?.pillbox?.pillboxId) return void this.messageService.error("Таблетница не найдена!", {
        marginBottom: this.notificationMb
      });
      const $ = this.dispensingPanel.preparedPillboxMedicaments.map(k => (this.dispensingPanel.selectedAssignedMed = this.assignedMedications.find(ce => ce.id === k.id), this.dispensingPanel.updateMedicalBalance(!0, k.otnUid, k.warehouseId).pipe((0, q.U)(ce => {
        const Ye = ce?.find(Tt => Tt.pharmaUnitId === k.pharmaUnitId);
        if (!Ye) throw this.messageService.warning("Медикамент не найден"), new Error("Медикамент не найден");
        return Ye;
      }), (0, ut.w)(ce => {
        const Ye = k.applyPacking / +ce.amountPacking;
        if (!ce || Ye > +ce.amountUnit) {
          const Tt = `\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u0443! \u041d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430 ${ce.pharmUnitName}`;
          return this.messageService.error(Tt), (0, hn._)(() => new Error(Tt));
        }
        return this.reserveService.reservePharmaUnit({
          warehouseId: k.warehouseId,
          pharmaUnitId: ce.pharmaUnitId,
          amountUnit: Ye,
          remark: `\u0422\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u0430 \u2116${this.data.pillbox?.number}`
        });
      }), (0, q.U)(ce => (delete k.id, delete k.pharmaUnitId, k.reserveId = ce, k)))));
      (0, di.D)($).pipe((0, ut.w)(k => this.pillboxService.preparePillboxCommand(this.data.pillbox.pillboxId, {
        boxDate: (0, Ft.O)(this.data.slot.planningDate),
        dayTimePeriod: this.data.slot.period.toString().toLowerCase(),
        hasDraft: !1,
        medications: k
      }))).subscribe({
        next: () => {
          this.messageService.success("Таблетница подготовлена!", {
            marginBottom: this.notificationMb
          }), this.modalRef.close({
            success: !0
          });
        },
        error: k => {
          this.messageService.error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b: ${k.message}`, {
            marginBottom: this.notificationMb
          });
        }
      });
    }
    clearPillbox() {
      this.assignedMedications.forEach($ => {
        $.status = "Актуальное", $.selectedAmount = 0;
      }), this.dispensingPanel.preparedPillboxMedicaments = [], this.dispensingPanel.resetSelections(), this.messageService.info("Таблетница очищена. Все статусы сброшены до \"Актуальное\".", {
        marginBottom: this.notificationMb
      });
    }
    close() {
      this.modalRef.close();
    }
    trackByAssignedMed($, k) {
      return k.name;
    }
    _loadWarehouses() {
      return this.warehouseService.getUserWarehouses({
        deptId: this.userInfo.deptId,
        postId: this.userInfo.postId
      });
    }
  }).ɵfac = function (k) {
    return new (k || rm)(n.Y36(Xs.Rn), n.Y36(ma.UM), n.Y36(wo.Jv), n.Y36(qo.oL), n.Y36(dn.iW), n.Y36(Gn.Yg), n.Y36(n.sBO), n.Y36(Vt.$g), n.Y36(pi), n.Y36(Br));
  }, rm.ɵcmp = n.Xpm({
    type: rm,
    selectors: [["app-writing-off-adding-pills"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(Pt, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.dispensingPanel = Ye.first);
      }
    },
    decls: 19,
    vars: 19,
    consts: [[1, "dialog-container"], [3, "patient", "isTablet", "close"], [1, "dialog-body"], [1, "dialog-body-inner"], [1, "section"], ["class", "section-title", "lu-text", "", 4, "ngIf"], [1, "assigned-meds-wrapper"], ["class", "assigned-meds-header", 4, "ngIf"], ["class", "assigned-meds-table", 4, "ngIf"], [4, "ngIf"], [3, "data", "stockLocations", "availableSlots", "mode", "isOnStockLoaded", "issueCompleted", "onSelectedStockMedication"], ["dispensingPanel", ""], [1, "dialog-footer"], ["lu-button-outer", "", "class", "clear-pillbox-btn", 3, "color", "click", 4, "ngIf"], ["lu-button-raised", "", 3, "disabled", "click", 4, "ngIf"], ["lu-button-raised", "", 3, "size", "disabled", "click", 4, "ngIf"], ["lu-text", "", 1, "section-title"], [1, "assigned-meds-header"], [1, "cell", "col-med-name"], [1, "cell", "col-ordered-qty"], [1, "cell", "col-ordered-dose"], [1, "cell", "col-selected-qty"], [1, "cell", "col-status"], [1, "assigned-meds-table"], ["class", "assigned-meds-row", 3, "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "assigned-meds-row", 3, "click"], ["lu-text", "", 1, "status-chip", 3, "ngClass"], [1, "cell", "col-med-name", "col-med-name--mob"], [1, "sep"], ["lu-button-outer", "", 1, "clear-pillbox-btn", 3, "color", "click"], ["lu-button-raised", "", 3, "disabled", "click"], ["lu-button-raised", "", 3, "size", "disabled", "click"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "banner-panel", 1), n.NdJ("close", function () {
        return ce.close();
      }), n.qZA(), n.TgZ(2, "div", 2)(3, "div", 3)(4, "div", 4), n.YNc(5, Ki, 2, 2, "h3", 5), n.YNc(6, Nr, 2, 2, "h3", 5), n.TgZ(7, "div", 6), n.YNc(8, oa, 11, 0, "div", 7), n.YNc(9, er, 7, 0, "div", 7), n.YNc(10, Wl, 2, 2, "div", 8), n.YNc(11, Zc, 2, 2, "ng-container", 9), n.qZA()(), n.TgZ(12, "dispensing-panel", 10, 11), n.NdJ("isOnStockLoaded", function (Tt) {
        return ce.isStockLoaded = Tt;
      })("issueCompleted", function () {
        return ce.issueCompletedHandler();
      })("onSelectedStockMedication", function (Tt) {
        return ce.selectedStockMed = Tt;
      }), n.ALo(14, "async"), n.qZA()()(), n.TgZ(15, "div", 12), n.YNc(16, Yc, 2, 1, "button", 13), n.YNc(17, nu, 2, 1, "button", 14), n.YNc(18, Wc, 3, 4, "button", 15), n.qZA()()), 2 & k && (n.xp6(1), n.Q6J("patient", ce.data.patient)("isTablet", ce.isTablet), n.xp6(4), n.Q6J("ngIf", "preparation" === ce.mode), n.xp6(1), n.Q6J("ngIf", "issuing" === ce.mode && ce.data.slot && ce.data.medicine), n.xp6(2), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(1), n.Q6J("ngIf", !ce.isTablet && ce.isStockLoaded), n.xp6(1), n.Q6J("ngIf", ce.isTablet && ce.isStockLoaded), n.xp6(1), n.Q6J("data", ce.data)("stockLocations", n.lcZ(14, 17, ce.warehouses$))("availableSlots", ce.availableSlots)("mode", ce.mode), n.xp6(3), n.ekj("has-clear-button", "preparation" === ce.mode && ce.hasAnyPreparedMedications), n.xp6(1), n.Q6J("ngIf", "preparation" === ce.mode && ce.hasAnyPreparedMedications), n.xp6(1), n.Q6J("ngIf", "preparation" === ce.mode), n.xp6(1), n.Q6J("ngIf", "issuing" === ce.mode));
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Ks.mc, Kt.NZ, Hs, Wi, Di.Ov],
    styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;background:#f7f8f9;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;height:100%}  lu-message{margin-right:16px}.icon-close[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc}.icon-close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #575757}.dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fff;box-sizing:border-box;padding-bottom:0;width:100vw;height:calc(100% - 89px)}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]{width:calc(100vw - 32px);height:calc(100vh - 116px);border-radius:4px}}.required-medication-name[_ngcontent-%COMP%]{padding-left:24px!important;width:640px}.title-required-medication-name[_ngcontent-%COMP%]{width:640px;padding-left:24px}.pillbox-info[_ngcontent-%COMP%]{margin-top:8px;color:#333}.dialog-body[_ngcontent-%COMP%]{position:relative;flex:1;padding:16px 0 10px;overflow:hidden}@media (max-width: 960px){.dialog-body[_ngcontent-%COMP%]{height:100%}}@media (min-width: 961px){.dialog-body[_ngcontent-%COMP%]{padding:24px 0}}.dialog-body-inner[_ngcontent-%COMP%]{height:calc(100% - 70px);overflow:auto;overflow-x:hidden}.section[_ngcontent-%COMP%]{margin-bottom:16px}@media (min-width: 961px){.section[_ngcontent-%COMP%]{margin-bottom:24px}}.section-title[_ngcontent-%COMP%]{margin:0 16px 16px;font-size:15px}@media (min-width: 961px){.section-title[_ngcontent-%COMP%]{margin:0 0 8px 24px}}@media (max-width: 960px){.section-title[_ngcontent-%COMP%]{margin:0;padding:0 16px 16px}}.section-table[_ngcontent-%COMP%]{min-width:568px;background-color:#f2f2f2cc;border-radius:8px;margin:0 24px 24px;padding:24px;border:1px solid rgba(242,242,242,.8)}@media (min-width: 960px){.section-table[_ngcontent-%COMP%]{min-width:928px}}@media (max-width: 960px){.section-table[_ngcontent-%COMP%]{margin:0 16px 24px;padding:16px;border:none}}.custom-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.title-required[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:none}.custom-table[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left;border-bottom:1px solid #e6e6e6;font-size:14px;padding:12px 28px 12px 4px}.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#757575;font-weight:400;font-size:13px;line-height:18px}.custom-table.assigned-meds-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer}.custom-table.assigned-meds-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .assigned-meds-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}@media (min-width: 961px){.assigned-meds-row.selected[_ngcontent-%COMP%]{background-color:#fff8cc}}.assigned-meds-row.selected[_ngcontent-%COMP%]:hover{background-color:#fff8cc}.title-required-count-ordered-quantity[_ngcontent-%COMP%], .title-required-ordered-dose[_ngcontent-%COMP%], .title-required-selected-quantity[_ngcontent-%COMP%], .title-required-status[_ngcontent-%COMP%]{padding-left:0!important}.checkbox-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.quantity-controls[_ngcontent-%COMP%]{display:flex}.quantity-controls[_ngcontent-%COMP%]   .input-with-unit[_ngcontent-%COMP%]{display:flex;align-items:center}.quantity-controls[_ngcontent-%COMP%]   .input-with-unit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:8px}.form-hint[_ngcontent-%COMP%]{margin-top:4px}.table-footer-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px}@media (max-width: 960px){.table-footer-buttons[_ngcontent-%COMP%]{margin-top:32px}.table-footer-buttons[_ngcontent-%COMP%]   .table-action-btn[_ngcontent-%COMP%]{min-width:141px}}@media (min-width: 961px){.table-action-btn[_ngcontent-%COMP%]{margin:32px 24px 0 0}}.table-footer-buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.empty-stock-message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:48px 24px 48px 0;margin-top:24px;color:#616161}@media (max-width: 600px){.empty-stock-message[_ngcontent-%COMP%]{align-items:flex-start!important}}.empty-stock-message[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%]{margin-right:12px;--lu-svg-icon-color: #f5a623}.dialog-footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:16px;padding:24px}@media (max-width: 960px){.dialog-footer[_ngcontent-%COMP%]{border-top:1px solid #e6e6e6}.dialog-footer.has-clear-button[_ngcontent-%COMP%]{justify-content:space-between}}@media (min-width: 961px){.dialog-footer[_ngcontent-%COMP%]{padding-top:24px;flex-shrink:0;display:flex;justify-content:flex-end;align-items:center;gap:16px;background-color:#fff;z-index:10}}.dialog-footer[_ngcontent-%COMP%]   .footer-buttons[_ngcontent-%COMP%]{display:flex}.dialog-footer[_ngcontent-%COMP%]   .footer-buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.assigned-meds-wrapper[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.assigned-meds-wrapper[_ngcontent-%COMP%]   .assigned-meds-table[_ngcontent-%COMP%]{max-height:calc(100vh - 750px);overflow-y:auto}.assigned-meds-header[_ngcontent-%COMP%], .assigned-meds-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:665px 120px 108px 120px 120px;column-gap:48px}.assigned-meds-header[_ngcontent-%COMP%]{font-size:13px;color:#757575;height:50px;font-weight:400;line-height:18px}@media (max-width: 960px){.assigned-meds-header[_ngcontent-%COMP%]{display:flex;align-items:end;gap:24px;padding-left:16px;height:36px!important;margin-bottom:8px}.assigned-meds-header[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:0}}.assigned-meds-row[_ngcontent-%COMP%]{background-color:#fff}@media (max-width: 960px){.assigned-meds-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:24px;padding:12px 16px}}@media (min-width: 961px){.assigned-meds-row[_ngcontent-%COMP%]{height:56px;font-weight:400;font-size:15px;line-height:24px;cursor:pointer}}@media (max-width: 960px){.assigned-meds-row[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:0!important}}.assigned-meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;font-size:13px;line-height:18px}@media (min-width: 961px){.assigned-meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{white-space:nowrap}}.assigned-meds-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{color:#757575;font-size:13px;line-height:18px}@media (min-width: 961px){.assigned-meds-row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{font-size:14px;line-height:20px}}.col-med-name[_ngcontent-%COMP%]{padding:16px 0 16px 24px}@media (max-width: 960px){.col-med-name[_ngcontent-%COMP%]{flex-grow:0;width:320px}}.col-med-name--mob[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start!important;gap:4px}.col-med-name--mob[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}@media (max-width: 960px){.col-med-name--mob[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:24px}}.col-med-name--mob[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{height:15px;border-right:1px solid #ccc}@media (max-width: 960px){.col-selected-qty[_ngcontent-%COMP%]{flex-grow:1;width:80px}}.col-status[_ngcontent-%COMP%]{width:130px}@media (max-width: 960px){.col-status[_ngcontent-%COMP%]{flex-grow:1;width:120px}}.status-chip[_ngcontent-%COMP%]{display:inline-block;padding:0 12px;border-radius:2px;border:1px solid #ccc;background:#ffffff;color:#757575;font-weight:400;transition-property:background-color,border-color,color;transition-duration:.3s;transition-timing-function:ease;--lu-font-size: 13px !important;--lu-line-height: 20px !important}@media (max-width: 960px){.status-chip[_ngcontent-%COMP%]{height:24px;padding:2px 8px;--lu-line-height: 18px !important}}.status-chip.ready[_ngcontent-%COMP%]{background-color:#e8f5e9;border-color:#81c784;color:#1b5e20}.ng-star-inserted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:4px}@media (min-width: 961px){  .header,   .main-footer{z-index:1001}}.custom-select[_ngcontent-%COMP%]{position:relative}.custom-select__trigger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:400px;height:40px;padding:0 12px;border:1px solid #999;border-radius:4px;background:#fff;cursor:pointer;box-sizing:border-box;transition:border-color .2s}@media (min-width: 600px) and (max-width: 960px){.custom-select__trigger[_ngcontent-%COMP%]{width:363px!important}}.custom-select.open[_ngcontent-%COMP%]   .custom-select__trigger[_ngcontent-%COMP%]{border-color:#757575;border-bottom-left-radius:0;border-bottom-right-radius:0}.custom-select__value[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px;color:#333}.custom-select__value.placeholder[_ngcontent-%COMP%]{color:#999}.custom-select__arrow[_ngcontent-%COMP%]{flex-shrink:0;margin-left:8px;transition:transform .2s;--lu-svg-icon-color: #666}.custom-select.open[_ngcontent-%COMP%]   .custom-select__arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}.custom-select__backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:99}.custom-select__options[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;max-height:240px;overflow-y:auto;background:#fff;border:1px solid #757575;border-top:none;border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:100;box-shadow:0 4px 8px #0000001a}.custom-select__option[_ngcontent-%COMP%]{padding:10px 12px;font-size:15px;color:#333;cursor:pointer;line-height:1.4}.custom-select__option[_ngcontent-%COMP%]:hover, .custom-select__option.active[_ngcontent-%COMP%]{background-color:#38a1d61a}.stock-table-mob[_ngcontent-%COMP%]{margin-top:16px;border-top:1px solid #e6e6e6;width:536px}.stock-table-mob__item[_ngcontent-%COMP%]{padding:9px 0;border-bottom:1px solid #e6e6e6}.stock-table-mob__item-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:9px;font-weight:600}.stock-table-mob__item-body[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px 16px;padding-left:24px;padding-bottom:8px;line-height:1.46;box-sizing:border-box}.stock-table-mob__col[_ngcontent-%COMP%]{min-width:0;flex-shrink:1}.stock-table-mob__col.w-72[_ngcontent-%COMP%]{width:72px}.stock-table-mob__col.w-96[_ngcontent-%COMP%]{width:96px}.stock-table-mob__col.w-112[_ngcontent-%COMP%]{width:112px}.stock-table-mob__col[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;color:#757575;line-height:1.38}.stock-table-mob__col[_ngcontent-%COMP%]   .series[_ngcontent-%COMP%]{margin:-2px;padding:1px 4px;border-radius:4px;background-color:#e6e6e6}.stock-table-mob__col[_ngcontent-%COMP%]   .series-col[_ngcontent-%COMP%]{min-width:72px;max-width:100%;flex:1 1 120px}.stock-table-mob__col[_ngcontent-%COMP%]   .packaging-col[_ngcontent-%COMP%]{min-width:0}.stock-table-mob__col[_ngcontent-%COMP%]   .packaging-value[_ngcontent-%COMP%]{white-space:normal;word-break:break-word;overflow-wrap:anywhere}"],
    changeDetection: 0
  }), rm);
  gc = (0, Se.gn)([(0, Xn.c)()], gc);
  var ir = i(90127);
  const Af = class {
    constructor($, k, ce, Ye, Tt, ai, Zi) {
      this.pillboxApiService = $, this.modalHelper = k, this.reserveService = ce, this.warehouseService = Ye, this.userContext = Tt, this.compositionService = ai, this.accountingDocumentService = Zi, this.setCurrentUser();
    }
    setCurrentUser() {
      this.userContext.getUserContext().subscribe($ => this.currentUser = $);
    }
    createPillboxModalData($, k) {
      const ce = Tt => k.planningDate && Tt.planningDate && k.period === Tt.period && (0, Ft.O)(k.planningDate) === (0, Ft.O)(Tt.planningDate),
        Ye = $.pillbox.pillboxMarks.map(({
          id: Tt
        }) => Tt);
      return this.pillboxApiService.getPillboxByIdQuery($.pillbox?.pillboxId).pipe((0, q.U)(Tt => ({
        ...Tt,
        pillboxMarks: Tt.pillboxMarks.filter(ai => Ye.includes(ai.id) && ai.dayTimePeriod.toLowerCase() === k?.period.toLowerCase())
      })), (0, q.U)(Tt => {
        const ai = ($.medicines || []).map(fo => {
          const Wr = fo.slots.filter(Cs => ce(Cs) && "COMPLETED" !== Cs.status);
          return {
            ...fo,
            slots: Wr
          };
        }).filter(fo => fo.slots && fo.slots.length);
        return {
          otherMedications: ($.otherMedicines || []).map(fo => {
            const Wr = fo.slots.filter(Cs => ce(Cs) && "COMPLETED" !== Cs.status);
            return {
              ...fo,
              slots: Wr
            };
          }).filter(fo => fo.slots && fo.slots.length),
          patient: {
            fio: $.patientName || "",
            gender: 1 === $.sex ? "Ж" : 2 === $.sex ? "М" : "",
            age: $.age || 0,
            birthDate: $.birthDate ? new Date($.birthDate) : new Date(),
            cardNumber: $.historyNumber || "",
            palata: $.ward?.replace("Палата №", "") || "",
            ehrCaseId: $.ehrId,
            careCaseId: $.careCaseId
          },
          pillbox: {
            ...$.pillbox,
            pillboxMarks: Tt.pillboxMarks,
            medications: ai
          },
          slot: k
        };
      }));
    }
    _prepareAndCreateComposition($, k) {
      const ce = [],
        Ye = [],
        Tt = $.pillbox.medications.flatMap(ai => ai.slots.map(Zi => {
          const Po = $.pillbox.pillboxMarks.flatMap(fo => fo.medications).find(fo => fo.assignmentCompositionUid === Zi.assignmentCompositionUid);
          return this.reserveService.getReserve(Po.reserveId).pipe((0, ut.w)(fo => (ce.push({
            ...fo,
            oldID: Po.reserveId
          }), this.reserveService.cancelReserve(Po.reserveId).pipe((0, ut.w)(() => this.warehouseService.getMedNamesId(Zi.assignmentCompositionUid)), (0, m.b)(Wr => Ye.push({
            dispensingCode: Zi?.code,
            dispensingDate: Zi.planningDate,
            assignmentCompositionUid: Zi.assignmentCompositionUid,
            doctor: {
              dept: this.currentUser.department?.fullName,
              empId: this.currentUser.employeeId,
              position: this.currentUser.jobTitle?.name,
              snils: this.currentUser.employee?.identities?.snils
            },
            medication: [{
              medNamesId: Wr,
              batchCount: "issuing" === k ? fo.amountUnit : 0,
              dose: ai.dosage,
              doseUnit: Po.unitOfDose,
              id: ai.id,
              name: ai.name,
              productId: fo.pharmaUnitId,
              recycledPack: "utilization" === k ? fo.amountUnit : 0,
              storageId: fo.warehouseId,
              markDrugId: ri.Rt.newGuid()
            }]
          })), (0, q.U)(() => ({
            pillboxMedicamentId: Po.id,
            dispenseCode: Zi?.code,
            warehouseId: fo.warehouseId,
            pharmaUnitId: fo.pharmaUnitId,
            amountUnit: fo.amountUnit,
            reserveId: Po.reserveId,
            pharmaReasonExpenses: "DISPENSE",
            remark: `\u0421\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u043e\u0432 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b \u2116${$?.pillbox?.number.toString().padStart(13, "0")} (${$.pillbox.pillboxMarks[0].dayTimePeriod})`
          }))))));
        }));
      return (0, di.D)(Tt).pipe((0, ut.w)(ai => this.accountingDocumentService.createAccountingDocumentByDispenseId({
        careCaseId: $?.patient.careCaseId,
        medications: ai,
        workplaceId: this.currentUser.employee?.workplace?.id,
        dateTime: new Date().toISOString()
      })), (0, ut.w)(() => (0, di.D)(Ye.map(ai => this.compositionService.getEhr($.patient.ehrCaseId).pipe((0, ut.w)(Zi => {
        const Po = $.pillbox.medications.find(({
          assignmentCompositionUid: fo
        }) => ai.assignmentCompositionUid === fo);
        return this.compositionService.createMedicationDocument(Zi, $.patient.careCaseId, ai, !1, !1, "completed", {
          slot: $.slot,
          medicine: Po
        });
      }))))), (0, Go.K)(ai => this._repairReserveMedicaments($.pillbox.pillboxMarks[0], $.pillbox.pillboxId, ce).pipe((0, ut.w)(() => (0, hn._)(() => ai)))));
    }
    deliveryPillbox($) {
      return this._prepareAndCreateComposition($, "issuing").pipe((0, ut.w)(() => this.pillboxApiService.deliveryPillboxCommand($.pillbox.pillboxId, {
        boxDate: $.pillbox.pillboxMarks[0].boxDate,
        dayTimePeriod: $.pillbox.pillboxMarks[0].dayTimePeriod
      })));
    }
    _repairReserveMedicaments($, k, ce) {
      const Ye = ce.map(Tt => {
        const ai = Tt.oldID;
        return delete Tt.oldID, this.reserveService.reservePharmaUnit(Tt).pipe((0, q.U)(Zi => ({
          oldID: ai,
          newID: Zi
        })));
      });
      return (0, di.D)(Ye).pipe((0, q.U)(Tt => {
        const ai = $.medications.map(Zi => {
          const Po = Tt.find(fo => fo.oldID === Zi.reserveId);
          return {
            ...Zi,
            reserveId: Po.newID
          };
        });
        return delete $.id, delete $.status, delete $.statusHistory, {
          ...$,
          medications: ai
        };
      }), (0, ut.w)(Tt => this.pillboxApiService.preparePillboxCommand(k, Tt)));
    }
    utilizePillbox($) {
      return this.modalHelper.openUtilizeConfirmationModal($?.pillbox.number).pipe((0, M.h)(k => !!$?.pillbox.pillboxMarks.length && !!k), (0, ut.w)(k => this.pillboxApiService.damagePillboxCommand($.pillbox.pillboxId, {
        boxDate: $.pillbox.pillboxMarks[0].boxDate,
        dayTimePeriod: $.pillbox.pillboxMarks[0].dayTimePeriod
      }).pipe((0, mt.h)(k))));
    }
    clearPillbox($) {
      const k = [];
      return (0, di.D)($.pillboxMarks[0].medications.map(ce => this.reserveService.getReserve(ce.reserveId).pipe((0, m.b)(Ye => k.push({
        ...Ye,
        oldID: ce.reserveId
      })), (0, ut.w)(() => this.reserveService.cancelReserve(ce.reserveId)), (0, ut.w)(() => this.pillboxApiService.clearPillboxCommand($?.pillboxId, {
        boxDate: $.pillboxMarks[0].boxDate,
        dayTimePeriod: $.pillboxMarks[0].dayTimePeriod
      })), (0, Go.K)(Ye => this._repairReserveMedicaments($.pillboxMarks[0], $.pillboxId, k).pipe((0, ut.w)(() => (0, hn._)(() => Ye)))))));
    }
  };
  let Hr = Af;
  Af.ɵfac = function (k) {
    return new (k || Af)(n.LFG(Vt.$g), n.LFG(Ya), n.LFG(dn.iW), n.LFG(pi), n.LFG(qo.oL), n.LFG(Br), n.LFG(dn.gy));
  }, Af.ɵprov = n.Yz7({
    token: Af,
    factory: Af.ɵfac,
    providedIn: "root"
  });
  var Ar = i(89556),
    Ds = i(31224);
  const wa = ["dispensingPanel"];
  function Ua(Te, $) {
    1 & Te && (n.TgZ(0, "div", 15), n._UZ(1, "lu-svg-icon", 16), n.TgZ(2, "span"), n._uU(3, "Внимание! Назначены дополнительные лекарственные препараты"), n.qZA()()), 2 & Te && (n.xp6(1), n.Q6J("size", 24));
  }
  function hl(Te, $) {
    1 & Te && n.GkF(0);
  }
  function va(Te, $) {
    if (1 & Te && (n.TgZ(0, "div")(1, "div", 10)(2, "div", 11)(3, "h3", 12), n._uU(4), n.qZA()(), n.YNc(5, Ua, 4, 1, "div", 13), n.YNc(6, hl, 1, 0, "ng-container", 14), n.qZA()()), 2 & Te) {
      const k = n.oxw(),
        ce = n.MAs(11);
      n.xp6(4), n.hij("Состав таблетницы №", (null == k.data || null == k.data.pillbox ? null : k.data.pillbox.number) || "", ""), n.xp6(1), n.Q6J("ngIf", k.hasNewMedicaments), n.xp6(1), n.Q6J("ngTemplateOutlet", ce);
    }
  }
  function wc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 27), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(4);
        return n.KtG(Ye.startScanning());
      }), n._uU(1, " Сканировать таблетницу "), n.qZA();
    }
  }
  function zs(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 27), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(4);
        return n.KtG(Ye.startTabletScanning());
      }), n._uU(1, " Сканировать таблетницу "), n.qZA();
    }
  }
  function ic(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, wc, 2, 0, "button", 26), n.YNc(2, zs, 2, 0, "button", 26), n.BQk()), 2 & Te) {
      const k = n.oxw(3);
      n.xp6(1), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet && !k.isScannerVisible);
    }
  }
  function _c(Te, $) {
    1 & Te && (n.TgZ(0, "div", 28), n._UZ(1, "lu-preloader", 29), n.qZA()), 2 & Te && (n.xp6(1), n.Q6J("size", "inline"));
  }
  function zc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 20)(1, "span", 21), n._uU(2), n.qZA(), n.TgZ(3, "div", 22)(4, "button", 23), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.utilize());
      }), n._UZ(5, "lu-svg-icon", 24), n._uU(6, " Утилизировать "), n.qZA(), n.YNc(7, ic, 3, 2, "ng-container", 9), n.YNc(8, _c, 2, 1, "div", 25), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.xp6(2), n.hij(" У пациента есть подготовленная таблетница №", k.data.pillbox.number, " "), n.xp6(2), n.Q6J("color", "red"), n.xp6(1), n.Q6J("size", 16), n.xp6(2), n.Q6J("ngIf", !k.isScanning && !k.isLoading), n.xp6(1), n.Q6J("ngIf", k.isScanning || k.isLoading);
    }
  }
  function Gc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 30)(1, "div", 31), n._UZ(2, "lu-svg-icon", 16), n.TgZ(3, "span", 32), n._uU(4, " Не удалось загрузить состав таблетницы. Повторите сканирование таблетницы "), n.qZA()(), n.TgZ(5, "div", 33)(6, "div", 34)(7, "button", 23), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.utilize());
      }), n._UZ(8, "lu-svg-icon", 24), n._uU(9, " Утилизировать "), n.qZA(), n.TgZ(10, "button", 27), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.startScanning());
      }), n._uU(11, "Сканировать таблетницу"), n.qZA()()()();
    }
    2 & Te && (n.xp6(2), n.Q6J("size", 20), n.xp6(5), n.Q6J("color", "red"), n.xp6(1), n.Q6J("size", 16));
  }
  function au(Te, $) {
    1 & Te && n.GkF(0);
  }
  function xu(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 10)(1, "div", 11)(2, "h3", 12), n._uU(3), n.qZA()(), n.TgZ(4, "div", 35), n._UZ(5, "lu-svg-icon", 36), n.TgZ(6, "span"), n._uU(7, "Таблетница принадлежит пациенту и готова к выдаче"), n.qZA()(), n.YNc(8, au, 1, 0, "ng-container", 14), n.TgZ(9, "div", 37)(10, "button", 23), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.utilize());
      }), n._UZ(11, "lu-svg-icon", 24), n._uU(12, " Утилизировать "), n.qZA(), n.TgZ(13, "button", 38), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.issuePillbox());
      }), n._uU(14, "Выдать таблетницу"), n.qZA()()();
    }
    if (2 & Te) {
      const k = n.oxw(2),
        ce = n.MAs(11);
      let Ye;
      n.xp6(3), n.hij("Состав таблетницы №", null !== (Ye = null == k.data || null == k.data.pillbox ? null : k.data.pillbox.number) && void 0 !== Ye ? Ye : "", ""), n.xp6(2), n.Q6J("size", 24), n.xp6(3), n.Q6J("ngTemplateOutlet", ce), n.xp6(2), n.Q6J("color", "red"), n.xp6(1), n.Q6J("size", 16);
    }
  }
  function vs(Te, $) {
    1 & Te && n.GkF(0);
  }
  function La(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 27), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(3);
        return n.KtG(Ye.startScanning());
      }), n._uU(1, " Сканировать таблетницу "), n.qZA();
    }
  }
  function kc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 27), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(3);
        return n.KtG(Ye.startTabletScanning());
      }), n._uU(1, " Сканировать таблетницу "), n.qZA();
    }
  }
  function Ut(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 10)(1, "div", 11)(2, "h3", 12), n._uU(3), n.qZA()(), n.TgZ(4, "div", 39), n._UZ(5, "lu-svg-icon", 16), n.TgZ(6, "span"), n._uU(7, "Отсканированная таблетница не принадлежит пациенту"), n.qZA()(), n.YNc(8, vs, 1, 0, "ng-container", 14), n.TgZ(9, "div", 37)(10, "button", 23), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.utilize());
      }), n._UZ(11, "lu-svg-icon", 24), n._uU(12, " Утилизировать "), n.qZA(), n.YNc(13, La, 2, 0, "button", 26), n.YNc(14, kc, 2, 0, "button", 26), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(2),
        ce = n.MAs(11);
      n.xp6(3), n.hij("Состав таблетницы №", k.scanValue, ""), n.xp6(2), n.Q6J("size", 24), n.xp6(3), n.Q6J("ngTemplateOutlet", ce), n.xp6(2), n.Q6J("color", "red"), n.xp6(1), n.Q6J("size", 16), n.xp6(2), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet && !k.isScannerVisible);
    }
  }
  function Vn(Te, $) {
    if (1 & Te && (n.YNc(0, zc, 9, 5, "div", 17), n.YNc(1, Gc, 12, 3, "div", 18), n.YNc(2, xu, 15, 5, "div", 19), n.YNc(3, Ut, 15, 7, "div", 19)), 2 & Te) {
      const k = n.oxw();
      n.Q6J("ngIf", !k.scanSuccess && !k.scanMismatch && !k.scanTimedOut), n.xp6(1), n.Q6J("ngIf", k.scanTimedOut && !k.scanSuccess && !k.scanMismatch), n.xp6(1), n.Q6J("ngIf", k.scanSuccess), n.xp6(1), n.Q6J("ngIf", k.scanMismatch);
    }
  }
  function Gt(Te, $) {
    1 & Te && (n.TgZ(0, "div", 45)(1, "div", 46), n._uU(2, "Назначенный медикамент"), n.qZA(), n.TgZ(3, "div", 47), n._uU(4, "Заказанное кол-во"), n.qZA(), n.TgZ(5, "div", 48), n._uU(6, "Статус"), n.qZA(), n._UZ(7, "div", 49), n.qZA());
  }
  function xi(Te, $) {
    1 & Te && (n.TgZ(0, "div", 45)(1, "div", 46), n._uU(2, "Назначеный медикамент / Заказанное кол-во"), n.qZA(), n.TgZ(3, "div", 50), n._uU(4, "Статус"), n.qZA()());
  }
  function so(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 60), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(3).$implicit,
          Tt = n.MAs(6),
          ai = n.oxw(3);
        return n.KtG(Ye.base ? ai.issueBaseMedication(Ye) : ai.issueMedication(Ye, Tt));
      }), n._uU(1, " Выдать препарат "), n.qZA();
    }
  }
  function yr(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 49), n.YNc(1, so, 2, 0, "button", 59), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngIf", !ce.isShowDispensingPanel(k.id));
    }
  }
  const Rr = function (Te) {
    return {
      issued: Te
    };
  };
  function Ns(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 46), n._uU(2), n.qZA(), n.TgZ(3, "div", 47), n._uU(4), n.qZA(), n.TgZ(5, "div", 48)(6, "span", 57), n._uU(7), n.qZA()(), n.YNc(8, yr, 2, 1, "div", 58), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.xp6(2), n.Oqu(k.name), n.xp6(2), n.Oqu(+k.applyPacking || 1), n.xp6(2), n.Q6J("ngClass", n.VKq(5, Rr, "ISSUED" === k.status)), n.xp6(1), n.hij(" ", ce.statusRu[k.status.toLowerCase()] || k.status, " "), n.xp6(1), n.Q6J("ngIf", "ISSUED" !== k.status);
    }
  }
  function Ga(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 60), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2).$implicit,
          Tt = n.MAs(6),
          ai = n.oxw(3);
        return n.KtG(Ye.base ? ai.issueBaseMedication(Ye) : ai.issueMedication(Ye, Tt));
      }), n._uU(1, " Выдать "), n.qZA();
    }
  }
  function Ma(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 46)(1, "div", 61), n._uU(2), n.qZA(), n.TgZ(3, "div", 62), n._uU(4), n.qZA()(), n.TgZ(5, "div", 50)(6, "span", 57), n._uU(7), n.qZA(), n.YNc(8, Ga, 2, 0, "button", 59), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.xp6(2), n.Oqu(k.name), n.xp6(2), n.Oqu(+k.applyPacking || 1), n.xp6(2), n.Q6J("ngClass", n.VKq(5, Rr, "ISSUED" === k.status)), n.xp6(1), n.hij(" ", ce.statusRu[k.status.toLowerCase()] || k.status, " "), n.xp6(1), n.Q6J("ngIf", "ISSUED" !== k.status && !ce.isShowDispensingPanel(k.id));
    }
  }
  function Ia(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 52)(1, "div", 53), n.YNc(2, Ns, 9, 7, "ng-container", 4), n.YNc(3, Ma, 9, 7, "ng-template", null, 54, n.W1O), n.qZA(), n.TgZ(5, "dispensing-panel", 55, 56), n.NdJ("issueCompleted", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw(3);
        return n.KtG(Zi.issueMedicationCompleted(ai, Ye));
      }), n.ALo(7, "async"), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.MAs(4),
        Ye = n.oxw(3);
      n.xp6(2), n.Q6J("ngIf", !Ye.isTablet)("ngIfElse", ce), n.xp6(3), n.Q6J("stockLocations", n.lcZ(7, 6, Ye.warehouses$))("data", Ye.data)("mode", "issuingOther")("hidden", !Ye.isShowDispensingPanel(k.id));
    }
  }
  function Ea(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Ia, 8, 8, "div", 51), n.BQk()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngForOf", k.data.otherMedications)("ngForTrackBy", k.trackByMedication);
    }
  }
  function Ll(Te, $) {
    1 & Te && (n.TgZ(0, "div", 63)(1, "div", 64)(2, "span", 65), n._uU(3, "Нет других назначенных препаратов"), n.qZA()()());
  }
  function Za(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 40)(1, "h3", 41), n._uU(2, "Другие препараты"), n.qZA(), n.TgZ(3, "div", 42), n.YNc(4, Gt, 8, 0, "div", 43), n.YNc(5, xi, 5, 0, "div", 43), n.YNc(6, Ea, 2, 2, "ng-container", 4), n.YNc(7, Ll, 4, 0, "ng-template", null, 44, n.W1O), n.qZA()()), 2 & Te) {
      const k = n.MAs(8),
        ce = n.oxw();
      n.xp6(4), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(1), n.Q6J("ngIf", null == ce.data.otherMedications ? null : ce.data.otherMedications.length)("ngIfElse", k);
    }
  }
  function sl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 69), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.clearPillbox());
      }), n._uU(1, "Очистить таблетницу"), n.qZA();
    }
  }
  function pl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 38), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.issuePillbox());
      }), n._uU(1, "Выдать "), n.qZA();
    }
  }
  function ql(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 66), n.YNc(1, sl, 2, 0, "button", 67), n.YNc(2, pl, 2, 0, "button", 68), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngIf", k.hasNewMedicaments), n.xp6(1), n.Q6J("ngIf", k.hasNewMedicaments);
    }
  }
  function vc(Te, $) {
    1 & Te && (n.TgZ(0, "div", 73)(1, "div", 74), n._uU(2, "Назначенный медикамент"), n.qZA(), n.TgZ(3, "div", 75), n._uU(4, "Заказанное кол-во"), n.qZA(), n.TgZ(5, "div", 76), n._uU(6, "Заказанная доза"), n.qZA(), n.TgZ(7, "div", 77), n._uU(8, "Выбранное кол-во"), n.qZA(), n.TgZ(9, "div", 78), n._uU(10, "Статус"), n.qZA()());
  }
  function oc(Te, $) {
    1 & Te && (n.TgZ(0, "div", 73)(1, "div", 74), n._uU(2, "Назначеный медикамент, кол-во и доза"), n.qZA(), n.TgZ(3, "div", 77), n._uU(4, "Выбранное кол-во"), n.qZA(), n.TgZ(5, "div", 78), n._uU(6, "Статус"), n.qZA()());
  }
  function pc(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 74), n._uU(2), n.qZA(), n.TgZ(3, "div", 75), n._uU(4), n.qZA(), n.TgZ(5, "div", 76), n._uU(6), n.qZA(), n.TgZ(7, "div", 77), n._uU(8), n.qZA(), n.TgZ(9, "div", 78)(10, "span", 57), n._uU(11), n.qZA()(), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(2);
      n.xp6(2), n.Oqu(k.name), n.xp6(2), n.Oqu(ce.calculateQuantityBySlot(k.slots)), n.xp6(2), n.Oqu(k.orderedDose || k.dosage || ""), n.xp6(2), n.Oqu(ce.calculateQuantityBySlot(k.slots)), n.xp6(2), n.Q6J("ngClass", ce.getStatusClass(k)), n.xp6(1), n.hij(" ", ce.statusRu[k.status.toLowerCase()] ? ce.statusRu[k.status.toLowerCase()] : k.status, " ");
    }
  }
  function ec(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 74)(1, "div", 61), n._uU(2), n.qZA(), n.TgZ(3, "div", 81)(4, "span"), n._uU(5), n.qZA(), n._UZ(6, "span", 82), n.TgZ(7, "span"), n._uU(8), n.qZA()()(), n.TgZ(9, "div", 77), n._uU(10), n.qZA(), n.TgZ(11, "div", 78)(12, "span", 57), n._uU(13), n.qZA()()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(2);
      n.xp6(2), n.Oqu(k.name), n.xp6(3), n.Oqu(ce.calculateQuantityBySlot(k.slots)), n.xp6(3), n.Oqu(k.orderedDose || k.dosage || ""), n.xp6(2), n.Oqu(ce.calculateQuantityBySlot(k.slots)), n.xp6(2), n.Q6J("ngClass", ce.getStatusClass(k)), n.xp6(1), n.hij(" ", ce.statusRu[k.status.toLowerCase()] ? ce.statusRu[k.status.toLowerCase()] : k.status, " ");
    }
  }
  function Mc(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 79), n.YNc(1, pc, 12, 6, "ng-container", 4), n.YNc(2, ec, 14, 6, "ng-template", null, 80, n.W1O), n.qZA()), 2 & Te) {
      const k = n.MAs(3),
        ce = n.oxw(2);
      n.xp6(1), n.Q6J("ngIf", !ce.isTablet)("ngIfElse", k);
    }
  }
  function rc(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 70), n.YNc(1, vc, 11, 0, "div", 71), n.YNc(2, oc, 7, 0, "div", 71), n.YNc(3, Mc, 4, 2, "div", 72), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet), n.xp6(1), n.Q6J("ngForOf", k.pillboxMedications)("ngForTrackBy", k.trackByMedication);
    }
  }
  function Bl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "app-tablet-scanner-widget", 83), n.NdJ("barcodeScanned", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onBarcodeScanned(Ye));
      })("closeSearch", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onScannerClose(Ye));
      }), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("disabled", !k.isScannerVisible)("searchWidgetParams", k.searchWidgetParams);
    }
  }
  let al = ((Bh = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs) {
      this.modalRef = $, this.data = k, this.messageService = ce, this.cdr = Ye, this.modalHelper = Tt, this.userContextService = ai, this.pillboxService = Zi, this.store = Po, this.confirmationModalService = fo, this.breakpointObserver = Wr, this.warehouseService = Cs, this.state = null, this.searchWidgetParams = {
        header: "Выдача ЛП",
        subHeader: "Отсканируйте штрихкод таблетницы",
        isSearchAllowed: !1,
        mode: "barcode"
      }, this.statusRu = Re.y0, this.periodTranslations = {
        MORNING: "Утро",
        DAY: "День",
        EVENING: "Вечер",
        NIGHT: "Ночь"
      }, this.isScanning = !1, this.isLoading = !1, this.scanSuccess = !1, this.scanMismatch = !1, this.scanTimedOut = !1, this.scanValue = "", this.scanBuffer = "", this.scanDebounceTimer = null, this.scanTimeoutTimer = null, this.isTablet = !1, this.destroy$ = new d.x(), this.pillboxMedications = [], this.showedDispensingMedications = [], this.isScannerVisible = !1;
    }
    ngOnInit() {
      this.calculateState(), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
        this.userInfo = {
          dept: $.department?.fullName,
          deptId: $.department?.id,
          empId: $.employeeId,
          postId: $.jobTitle?.id,
          position: $.jobTitle?.name,
          snils: $.employee?.identities?.snils
        }, this.warehouses$ = this._loadWarehouses();
      }), this.breakpointObserver.observe(ir.o).pipe((0, b.R)(this.destroy$)).subscribe($ => {
        this.isTablet = $.matches;
      });
    }
    ngOnDestroy() {
      this.clearTimers(), this.destroy$.next(), this.destroy$.complete();
    }
    onKeyDown($) {
      if (this.isScanning && "Shift" !== $.key && "Control" !== $.key && "Alt" !== $.key && "Meta" !== $.key) {
        if ($.preventDefault(), "Enter" === $.key) return void this.finishScan();
        1 === $.key.length && (this.scanBuffer += $.key), clearTimeout(this.scanDebounceTimer), this.scanDebounceTimer = setTimeout(() => this.finishScan(), 500);
      }
    }
    calculateState() {
      const $ = this.data.pillbox.pillboxMarks.flatMap(k => ({
        ...k,
        medications: k.medications.filter(({
          reserveId: ce
        }) => !!ce)
      })).flatMap(({
        medications: k
      }) => k.flatMap(({
        assignmentCompositionUid: ce
      }) => ce));
      this.pillboxMedications = this.data.pillbox.medications.map(k => $.includes(k.assignmentCompositionUid) ? ["assigned", "active", "created", "prepared"].includes(k.status.toLowerCase()) ? {
        ...k,
        status: "ready_dispense"
      } : k : {
        ...k,
        status: "new"
      }), this.cdr.markForCheck();
    }
    startScanning() {
      this.scanSuccess = !0, this.scanMismatch = !1;
    }
    getStatusClass($) {
      return {
        [$.status.toLowerCase()]: !0
      };
    }
    get hasChanged() {
      return this.hasNewMedicaments;
    }
    get hasNewMedicaments() {
      return this.pillboxMedications.some(({
        status: $
      }) => "new" === $);
    }
    finishScan() {
      clearTimeout(this.scanDebounceTimer);
      const $ = this.scanBuffer.trim();
      this.scanBuffer = "", $ && (this.scanValue = $, this.isScanning = !1, this.isLoading = !0, this.clearTimers(), setTimeout(() => {
        this.isLoading = !1;
        const k = String(this.data.pillbox.number);
        $ === k ? (this.scanSuccess = !0, this.scanMismatch = !1) : (this.scanMismatch = !0, this.scanSuccess = !1), this.cdr.markForCheck();
      }, 1e3));
    }
    clearTimers() {
      clearTimeout(this.scanDebounceTimer), clearTimeout(this.scanTimeoutTimer);
    }
    resetToScan() {
      this.scanSuccess = !1, this.scanMismatch = !1, this.startScanning();
    }
    close() {
      this.clearTimers(), this.modalRef.close(!1);
    }
    utilize() {
      this.clearTimers(), this.pillboxService.utilizePillbox(this.data).subscribe({
        next: $ => {
          switch ($) {
            case "utilize":
            case "utilize_and_reassemble":
              this.messageService.success("Таблетница утилизирована", {
                marginBottom: 44
              }), this.modalRef.close();
              break;
            case "go_to_preparation":
              this.modalRef.close();
          }
        },
        error: () => this.messageService.error("Ошибка утилизации таблетницы!", {
          marginBottom: 44
        })
      });
    }
    clearPillbox() {
      this.confirmationModalService.openDialog({
        message: `\u041f\u043e\u0441\u043b\u0435 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b \u0432\u0441\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b \u043f\u0435\u0440\u0435\u0439\u0434\u0443\u0442 \u0432 \u0441\u0442\u0430\u0442\u0443\u0441 "\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439".\n      \u0425\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u0443 \u2116${this.data?.pillbox?.number || ""}`,
        size: 448,
        title: "Очистка таблетницы",
        buttonTitle: "Очистить таблетницу",
        cancelButtonTitle: "Отменить"
      }).pipe((0, Xn.t)(this), (0, ut.w)(() => this.pillboxService.clearPillbox(this.data.pillbox))).subscribe({
        next: () => {
          this.messageService.success("Таблетница успешно очищена!", {
            marginBottom: 44
          }), this.close();
        },
        error: () => {
          this.messageService.error("Ошибка очистки таблетницы", {
            marginBottom: 44
          });
        }
      });
    }
    issuePillbox() {
      const $ = {
        ...this.data,
        pillbox: {
          ...this.data.pillbox,
          medications: this.pillboxMedications.filter(k => "ready_dispense" === k.status)
        }
      };
      this.pillboxService.deliveryPillbox($).pipe((0, Xn.t)(this)).subscribe({
        next: () => {
          Rn({
            taskId: this.data.patient.careCaseId,
            slotId: this.data.slot.id,
            newStatus: Re.Ae.Completed,
            updatedAt: Gi()().toISOString()
          }), this.messageService.success("Таблетница выдана", {
            marginBottom: 44
          }), this.modalRef.close({
            action: "issue_pillbox"
          });
        },
        error: k => {
          ki({
            taskId: this.data.patient.careCaseId,
            slot: this.data.slot,
            previousStatus: this.data.slot.status,
            error: k
          }), console.error(k), this.messageService.error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u0438\u0446\u044b \n ${k?.error?.message || k.statusText}`, {
            marginBottom: 44
          });
        }
      });
    }
    scanPillbox() {
      this.startScanning();
    }
    calculateQuantityBySlot($) {
      return $.map(({
        amount: k
      }) => k).reduce((k, ce) => k + ce, 0);
    }
    isShowDispensingPanel($) {
      return this.showedDispensingMedications.includes($);
    }
    issueBaseMedication($) {
      this.modalHelper.openDispensingConfirmationModal("issue", this.data.patient.fio || "Неизвестный пациент", $, this.data.slot).pipe((0, Xn.t)(this)).subscribe(() => {
        $.slots.forEach(k => {
          $.status = "ISSUED", this.store.dispatch(u({
            patientId: this.data.patient.careCaseId,
            medicineId: $.id,
            slot: k,
            code: k.code,
            resultCompositionUid: k.resultCompositionUid,
            patient: this.data.patient,
            medicine: $
          }));
        }), this.cdr.markForCheck();
      });
    }
    issueMedication($, k) {
      this.showedDispensingMedications.push($.id), k.medicine = {
        ...$
      }, k.selectAssignedMedication({
        assignmentCompositionUid: $.assignmentCompositionUid,
        name: $.name
      });
    }
    issueMedicationCompleted($, k) {
      $.status = k ? "ISSUED" : $.status;
      const ce = this.showedDispensingMedications.findIndex(Ye => Ye === $.id);
      this.showedDispensingMedications.splice(ce, 1), this.cdr.markForCheck();
    }
    get periodLabel() {
      const $ = this.data.pillbox?.pillboxMarks?.[0]?.dayTimePeriod?.toUpperCase();
      return this.periodTranslations[$] || "";
    }
    trackByMedication($, k) {
      return k.id;
    }
    startTabletScanning() {
      this.isScannerVisible = !0, this.cdr.markForCheck();
    }
    onBarcodeScanned($) {
      const k = String(this.data.pillbox.number),
        ce = $.trim();
      this.isScannerVisible = !1, this.isLoading = !0, this.cdr.markForCheck(), setTimeout(() => {
        this.isLoading = !1, ce === k ? (this.scanSuccess = !0, this.scanMismatch = !1) : (this.scanMismatch = !0, this.scanSuccess = !1, this.scanValue = ce), this.cdr.markForCheck();
      }, 1e3);
    }
    onScannerClose($) {
      this.isScannerVisible = !1, this.cdr.markForCheck();
    }
    _loadWarehouses() {
      return this.warehouseService.getUserWarehouses({
        deptId: this.userInfo.deptId,
        postId: this.userInfo.postId
      });
    }
  }).ɵfac = function (k) {
    return new (k || Bh)(n.Y36(Xs.Rn), n.Y36(ma.UM), n.Y36(wo.Jv), n.Y36(n.sBO), n.Y36(Ya), n.Y36(qo.oL), n.Y36(Hr), n.Y36(t.yh), n.Y36(Ar.k), n.Y36(Gn.Yg), n.Y36(pi));
  }, Bh.ɵcmp = n.Xpm({
    type: Bh,
    selectors: [["app-pillbox-issue-modal"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(wa, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.dispensingPanels = Ye);
      }
    },
    hostBindings: function (k, ce) {
      1 & k && n.NdJ("keydown", function (Tt) {
        return ce.onKeyDown(Tt);
      }, !1, n.evT);
    },
    decls: 13,
    vars: 7,
    consts: [[1, "dialog-container"], [3, "patient", "close"], [1, "dialog-body"], [1, "period-title"], [4, "ngIf", "ngIfElse"], ["noChange", ""], ["class", "section", 4, "ngIf"], ["class", "changed-action", 4, "ngIf"], ["pillboxMedTable", ""], [4, "ngIf"], [1, "pillbox-composition"], [1, "composition-header"], ["lu-text", "", 1, "composition-title"], ["class", "scan-bar new", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "scan-bar", "new"], ["icon", "warning", 3, "size"], ["class", "pillbox-info-bar", 4, "ngIf"], ["class", "scan-timeout-bar", 4, "ngIf"], ["class", "pillbox-composition", 4, "ngIf"], [1, "pillbox-info-bar"], [1, "pillbox-info-text"], [1, "pillbox-info-actions"], ["lu-button-outer", "", 1, "btn-utilize", 3, "color", "click"], ["icon", "delete", 3, "size"], ["class", "scan-loader", 4, "ngIf"], ["lu-button-outer", "", 3, "click", 4, "ngIf"], ["lu-button-outer", "", 3, "click"], [1, "scan-loader"], [3, "size"], [1, "scan-timeout-bar"], [1, "scan-timeout-bar__left"], [1, "scan-timeout-bar__text"], [1, "scan-timeout-bar__right"], [1, "scan-timeout-bar__actions"], [1, "scan-bar", "success"], ["icon", "success", 3, "size"], [1, "composition-actions"], ["lu-button-raised", "", 1, "btn-issue-pillbox", 3, "click"], [1, "scan-bar", "warning"], [1, "section"], ["lu-text", "", 1, "section-title"], [1, "medications-wrapper"], ["class", "medications-header", 4, "ngIf"], ["noOtherMeds", ""], [1, "medications-header"], [1, "cell", "col-med-name"], [1, "cell", "col-quantity"], [1, "cell", "col-status"], [1, "cell", "col-action"], [1, "cell", "col-status-action"], ["class", "medications", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "medications"], [1, "medications-row"], ["tabletView", ""], [3, "stockLocations", "data", "mode", "hidden", "issueCompleted"], ["dispensingPanel", ""], [1, "status-chip", 3, "ngClass"], ["class", "cell col-action", 4, "ngIf"], ["lu-button-raised", "", "class", "btn-issue-med", 3, "click", 4, "ngIf"], ["lu-button-raised", "", 1, "btn-issue-med", 3, "click"], [1, "med-name"], [1, "med-qty"], [1, "medications-row", "empty-row"], [1, "cell", "empty-message"], ["lu-text", ""], [1, "changed-action"], ["lu-button-outer", "", "color", "red", 3, "click", 4, "ngIf"], ["lu-button-raised", "", "class", "btn-issue-pillbox", 3, "click", 4, "ngIf"], ["lu-button-outer", "", "color", "red", 3, "click"], [1, "pillbox-meds-wrapper"], ["class", "pillbox-meds-header", 4, "ngIf"], ["class", "pillbox-meds-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pillbox-meds-header"], [1, "cell", "col-pb-name"], [1, "cell", "col-pb-ordered-qty"], [1, "cell", "col-pb-ordered-dose"], [1, "cell", "col-pb-selected-qty"], [1, "cell", "col-pb-status"], [1, "pillbox-meds-row"], ["tabletMedRow", ""], [1, "med-details"], [1, "dot"], [3, "disabled", "searchWidgetParams", "barcodeScanned", "closeSearch"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0)(1, "banner-panel", 1), n.NdJ("close", function () {
        return ce.close();
      }), n.qZA(), n.TgZ(2, "div", 2)(3, "h3", 3), n._uU(4), n.qZA(), n.YNc(5, va, 7, 3, "div", 4), n.YNc(6, Vn, 4, 4, "ng-template", null, 5, n.W1O), n.YNc(8, Za, 9, 4, "div", 6), n.qZA(), n.YNc(9, ql, 3, 2, "div", 7), n.qZA(), n.YNc(10, rc, 4, 4, "ng-template", null, 8, n.W1O), n.YNc(12, Bl, 2, 2, "ng-container", 9)), 2 & k) {
        const Ye = n.MAs(7);
        n.xp6(1), n.Q6J("patient", ce.data.patient), n.xp6(3), n.Oqu(ce.periodLabel), n.xp6(1), n.Q6J("ngIf", ce.hasChanged)("ngIfElse", Ye), n.xp6(3), n.Q6J("ngIf", !ce.hasChanged), n.xp6(1), n.Q6J("ngIf", ce.hasChanged), n.xp6(3), n.Q6J("ngIf", ce.isTablet);
      }
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Di.tP, Ks.mc, qr.d, Ci.q, Kt.NZ, Ds.O, Hs, Wi, Di.Ov],
    styles: ["[_nghost-%COMP%]{display:block;background:#f7f8f9;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;height:100%}.icon-close[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc}.icon-close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #575757}.dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:calc(100vh - 116px);background-color:#fff;box-sizing:border-box;border-radius:4px}.dialog-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:16px 0 24px}.period-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;line-height:24px;margin:0;padding:8px 24px}.pillbox-info-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0 24px;padding:16px;gap:24px;background-color:#fafafa;border-radius:8px}.pillbox-info-text[_ngcontent-%COMP%]{font-size:14px;line-height:24px;color:#333;padding:8px 0}.pillbox-info-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.btn-utilize[_ngcontent-%COMP%]{color:#e91e63!important;border-color:#e91e63!important}.btn-utilize[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #e91e63;margin-right:4px}.scan-loader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:180px;height:36px;border:1px solid #e0e0e0;border-radius:4px;background-color:#fff;box-sizing:border-box}.scan-spinner[_ngcontent-%COMP%]{--lu-svg-icon-color: #999999;animation:_ngcontent-%COMP%_spin .8s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.pillbox-composition[_ngcontent-%COMP%]{margin:0 24px;border-radius:8px;background-color:#fafafa}.composition-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.composition-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0}.link-not-belongs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:13px;color:#00bcd4;cursor:pointer;text-decoration:none;font-style:italic}.link-not-belongs[_ngcontent-%COMP%]:hover{text-decoration:underline}.link-not-belongs[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #00bcd4}.scan-timeout-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0 24px;padding:16px;gap:24px;background-color:#fff3e0;border-radius:8px}.scan-timeout-bar__left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.scan-timeout-bar__left[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ff9800;flex-shrink:0}.scan-timeout-bar__text[_ngcontent-%COMP%]{font-size:14px;line-height:24px;color:#e65100}.scan-timeout-bar__right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;flex-shrink:0}.scan-timeout-bar__actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.scan-timeout-bar__note[_ngcontent-%COMP%]{font-size:13px;line-height:18px;color:#757575;white-space:nowrap;border-left:1px solid #e0e0e0;padding-left:16px}.scan-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:4px;margin-bottom:16px;font-size:14px}.scan-bar.success[_ngcontent-%COMP%]{background-color:#e8f5e9;color:#2e7d32}.scan-bar.success[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #4caf50}.scan-bar.warning[_ngcontent-%COMP%]{background-color:#fde4df;color:#333}.scan-bar.new[_ngcontent-%COMP%]{background-color:#ffefd3;color:#000}.scan-bar.new[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #FF941A}.pillbox-meds-wrapper[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.pillbox-meds-header[_ngcontent-%COMP%], .pillbox-meds-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:640px 145px 140px 153px 1fr;column-gap:0}.pillbox-meds-header[_ngcontent-%COMP%]{font-weight:400;font-size:13px;line-height:18px;color:#757575}.pillbox-meds-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{padding:16px 8px}.pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-name[_ngcontent-%COMP%]{padding-left:0}.pillbox-meds-row[_ngcontent-%COMP%]{cursor:default;font-weight:400;font-size:15px;line-height:24px}.pillbox-meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px;line-height:20px;padding:16px 8px}.col-pb-name[_ngcontent-%COMP%]{padding-left:0}.col-pb-ordered-qty[_ngcontent-%COMP%], .col-pb-ordered-dose[_ngcontent-%COMP%], .col-pb-selected-qty[_ngcontent-%COMP%], .col-pb-status[_ngcontent-%COMP%]{padding-left:8px}.composition-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}.btn-issue-pillbox[_ngcontent-%COMP%]{background-color:#dff0c0!important;color:#fff!important;font-size:14px!important;white-space:nowrap}.divider[_ngcontent-%COMP%]{height:1px;background-color:#e0e0e0;margin:24px}.section[_ngcontent-%COMP%]{margin-bottom:24px}.section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;line-height:20px;margin:0;padding:10px 24px}.medications-wrapper[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:0 24px}.medications-header[_ngcontent-%COMP%], .medications-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:650px 150px 170px 1fr;column-gap:0}.medications-header[_ngcontent-%COMP%]{font-weight:400;font-size:13px;line-height:18px;color:#757575;background-color:#fafafa}.medications-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{padding:16px 8px}.medications-header[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding-left:24px}.medications[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-bottom:1px solid #e0e0e0}.medications-row[_ngcontent-%COMP%]{cursor:default;background-color:#fff;font-weight:400;font-size:15px;line-height:24px}.medications-row.empty-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.medications-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px;line-height:20px;padding:16px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.col-med-name[_ngcontent-%COMP%]{padding-left:24px}.col-quantity[_ngcontent-%COMP%], .col-status[_ngcontent-%COMP%]{padding-left:8px}.col-action[_ngcontent-%COMP%]{justify-content:flex-end;padding-right:24px}.status-chip[_ngcontent-%COMP%]{display:inline-block;padding:2px 12px;border-radius:2px;border:1px solid #ccc;background:#ffffff;color:#757575;font-size:13px!important;line-height:20px!important;font-weight:400;--lu-font-size: 13px !important;--lu-line-height: 20px !important}.status-chip.issued[_ngcontent-%COMP%], .status-chip.ready_dispense[_ngcontent-%COMP%]{background-color:#dff0c0;border-color:#dff0c0;color:#346b07}.status-chip.new[_ngcontent-%COMP%]{background-color:#c9eaf7;border-color:#c9eaf7;color:#0f548c}.btn-issue-med[_ngcontent-%COMP%]{border-radius:4px;background-color:#00bcd4!important;color:#fff!important;font-size:13px!important;white-space:nowrap}.empty-message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding-left:24px;color:#616161}.warning-note[_ngcontent-%COMP%]{margin:0 24px;padding-top:16px;font-size:13px;font-style:italic;color:#e91e63;line-height:1.5}.section-table[_ngcontent-%COMP%]{padding:24px;background-color:#f2f2f2cc;border-radius:8px;border:1px solid rgba(242,242,242,.8)}.controls-grid[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.controls-grid[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]{width:160px}.controls-grid[_ngcontent-%COMP%]   .stock-field[_ngcontent-%COMP%]{width:400px;margin-right:24px}@media (min-width: 600px) and (max-width: 960px){.controls-grid[_ngcontent-%COMP%]   .stock-field[_ngcontent-%COMP%]{width:363px!important;margin-right:0!important}}.controls-grid[_ngcontent-%COMP%]   .quantity-wrapper[_ngcontent-%COMP%]{display:flex;gap:24px;width:157px}.controls-grid[_ngcontent-%COMP%]   .quantity-field[_ngcontent-%COMP%]{margin-right:24px}.controls-left-group[_ngcontent-%COMP%]{display:flex}.controls-right-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;width:592px}.checkbox-group[_ngcontent-%COMP%]{padding-top:24px}.input-with-unit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.custom-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.custom-table.stock-table[_ngcontent-%COMP%]{margin-top:32px}.custom-table.stock-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left;border-bottom:1px solid #e6e6e6;font-size:14px;padding:12px 28px 12px 4px}.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#757575;font-weight:400;font-size:13px;line-height:18px}.custom-table.stock-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding:0}.chckbox-pills[_ngcontent-%COMP%]{padding-right:0}.custom-table.stock-table[_ngcontent-%COMP%]   .series-chip[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:4px;background-color:#eee}.custom-radio[_ngcontent-%COMP%]{display:inline-block;width:16px;height:16px;border:1px solid #999;border-radius:50%;background-color:#fff;cursor:pointer;vertical-align:middle;transition-property:border-color,border-width;transition-duration:.2s;transition-timing-function:ease}.custom-radio.active[_ngcontent-%COMP%]{border-color:#38a1d6;border-width:5px}.custom-table.stock-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer}.custom-table.stock-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.table-footer-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px}.table-footer-buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.empty-stock-message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:48px 24px 48px 0;margin-top:24px;color:#616161}@media (max-width: 600px){.empty-stock-message[_ngcontent-%COMP%]{align-items:flex-start!important}}.empty-stock-message[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%]{margin-right:12px;--lu-svg-icon-color: #f5a623}.custom-select[_ngcontent-%COMP%]{position:relative}.custom-select__trigger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:400px;height:40px;padding:0 12px;border:1px solid #999;border-radius:4px;background:#fff;cursor:pointer;box-sizing:border-box;transition:border-color .2s}@media (min-width: 600px) and (max-width: 960px){.custom-select__trigger[_ngcontent-%COMP%]{width:363px}}.custom-select.open[_ngcontent-%COMP%]   .custom-select__trigger[_ngcontent-%COMP%]{border-color:#757575;border-bottom-left-radius:0;border-bottom-right-radius:0}.custom-select__value[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px;color:#333}.custom-select__value.placeholder[_ngcontent-%COMP%]{color:#999}.custom-select__arrow[_ngcontent-%COMP%]{flex-shrink:0;margin-left:8px;transition:transform .2s;--lu-svg-icon-color: #666}.custom-select.open[_ngcontent-%COMP%]   .custom-select__arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}.custom-select__backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:99}.custom-select__options[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;max-height:240px;overflow-y:auto;background:#fff;border:1px solid #757575;border-top:none;border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:100;box-shadow:0 4px 8px #0000001a}.custom-select__option[_ngcontent-%COMP%]{padding:10px 12px;font-size:15px;color:#333;cursor:pointer;line-height:1.4}.custom-select__option[_ngcontent-%COMP%]:hover, .custom-select__option.active[_ngcontent-%COMP%]{background-color:#38a1d61a}.changed-action[_ngcontent-%COMP%]{height:40px;margin:24px;display:flex;flex-direction:row;align-items:center;justify-content:end;gap:16px}@media (min-width: 600px) and (max-width: 960px){.dialog-container[_ngcontent-%COMP%]{height:100vh}.period-title[_ngcontent-%COMP%]{padding:0 16px}.pillbox-info-bar[_ngcontent-%COMP%]{flex-direction:column;align-items:baseline;padding:16px;margin:16px;width:568px}.pillbox-info-text[_ngcontent-%COMP%]{font-size:15px;font-weight:600;line-height:24px;padding:0}.pillbox-info-actions[_ngcontent-%COMP%]{width:100%;flex-direction:row;justify-content:space-between}.scan-timeout-bar[_ngcontent-%COMP%]{flex-direction:column;margin:16px}.scan-timeout-bar__actions[_ngcontent-%COMP%]{justify-content:space-between;flex-direction:row;width:100%}.pillbox-composition[_ngcontent-%COMP%]{margin:16px;padding:16px}.pillbox-composition[_ngcontent-%COMP%]   .composition-header[_ngcontent-%COMP%]{margin-bottom:16px}.pillbox-composition[_ngcontent-%COMP%]   .scan-success-bar[_ngcontent-%COMP%]{padding:12px}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 80px 120px;column-gap:24px}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{padding:12px 0;align-items:baseline}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:1px;height:15px;background-color:#ccc;flex-shrink:0}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{padding:2px 8px 2px 7px;border:none}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-ordered-qty[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-ordered-dose[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-selected-qty[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-status[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .col-pb-ordered-qty[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .col-pb-ordered-dose[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .col-pb-selected-qty[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .col-pb-status[_ngcontent-%COMP%]{padding-left:0}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-name[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .col-pb-name[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-header[_ngcontent-%COMP%]   .col-pb-name[_ngcontent-%COMP%]   .med-details[_ngcontent-%COMP%], .pillbox-composition[_ngcontent-%COMP%]   .pillbox-meds-row[_ngcontent-%COMP%]   .col-pb-name[_ngcontent-%COMP%]   .med-details[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px;align-items:center}.pillbox-composition[_ngcontent-%COMP%]   .composition-actions[_ngcontent-%COMP%]{justify-content:space-between}.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{padding:16px}.section[_ngcontent-%COMP%]   .medications-wrapper[_ngcontent-%COMP%]{padding:0 16px}.section[_ngcontent-%COMP%]   .medications-header[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]   .medications-row[_ngcontent-%COMP%]{grid-template-columns:347px 1fr}.section[_ngcontent-%COMP%]   .col-status-action[_ngcontent-%COMP%]{gap:16px}.section[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{padding:16px 0}.section[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{padding:2px 8px 2px 7px}.section[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{flex-direction:column;align-items:baseline!important;gap:4px}.medications[_ngcontent-%COMP%]     dispensing-panel .section-table{margin:0}}"],
    changeDetection: 0
  }), Bh);
  function ca(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 13), n._UZ(1, "lu-svg-icon", 14), n.TgZ(2, "span"), n._uU(3), n.qZA()()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("size", 20), n.xp6(2), n.Oqu(k.message);
    }
  }
  function _a(Te, $) {
    if (1 & Te && (n.TgZ(0, "p", 15), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Oqu(k.message);
    }
  }
  function wl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 16)(1, "button", 17), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.onCancel());
      }), n._uU(2, " Отменить "), n.qZA(), n.TgZ(3, "button", 18), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.onConfirm());
      }), n._uU(4, " Подтвердить "), n.qZA()();
    }
    2 & Te && (n.xp6(1), n.Q6J("size", "medium")("color", "blue"), n.xp6(2), n.Q6J("size", "medium")("color", "blue"));
  }
  al = (0, Se.gn)([(0, Xn.c)()], al);
  const Sf = class {
    constructor($, k) {
      this.modalRef = $, this.data = k, this.isBase = !1, this.isBase = !!k?.med?.base;
    }
    get title() {
      switch (this.data.type) {
        case "issue":
          return this.isBase ? "Выдача препарата по «Базовой терапии»" : "Выдача препарата";
        case "cancel":
          return this.isBase ? "Отмена выполнения препарата по «Базовой терапии»" : "Отмена выполнения препарата";
      }
    }
    get medicationName() {
      return this.data.med?.tradeName || this.data.med?.name || "Неизвестный препарат";
    }
    get message() {
      switch (this.data.type) {
        case "issue":
          return this.isBase ? "Для назначений по «Базовой терапии» списание с остатков не осуществляется. Подтвердить выдачу препарата?" : null;
        case "cancel":
          return this.isInfoMode ? "Для отмены выполнения препарата, списанного со склада, необходимо обратиться к старшей медсестре." : "При отмене выполнения назначение вернётся в статус «Назначено». Подтвердить отмену выполнения препарата?";
      }
    }
    get isInfoMode() {
      return "cancel" === this.data.type && !0 === this.data.isWrittenOffFromWarehouse;
    }
    onCancel() {
      this.modalRef.close(!1);
    }
    onConfirm() {
      this.modalRef.close(!0);
    }
  };
  let Ja = Sf;
  Sf.ɵfac = function (k) {
    return new (k || Sf)(n.Y36(Xs.Rn), n.Y36(ma.UM));
  }, Sf.ɵcmp = n.Xpm({
    type: Sf,
    selectors: [["app-dispensing-confirmation-modal"]],
    standalone: !0,
    features: [n.jDz],
    decls: 21,
    vars: 7,
    consts: [[1, "dispensing-modal"], [1, "dispensing-modal__header"], [1, "dispensing-modal__title"], ["aria-label", "Закрыть", 1, "dispensing-modal__close", 3, "click"], ["icon", "close", 3, "size"], [1, "dispensing-modal__body"], [1, "dispensing-modal__info"], [1, "dispensing-modal__info-row"], [1, "dispensing-modal__label"], [1, "dispensing-modal__value"], ["class", "dispensing-modal__warning", 4, "ngIf"], ["class", "dispensing-modal__message", 4, "ngIf"], ["class", "dispensing-modal__actions", 4, "ngIf"], [1, "dispensing-modal__warning"], ["icon", "warning", 1, "dispensing-modal__warning-icon", 3, "size"], [1, "dispensing-modal__message"], [1, "dispensing-modal__actions"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2), n._uU(3), n.qZA(), n.TgZ(4, "button", 3), n.NdJ("click", function () {
        return ce.onCancel();
      }), n._UZ(5, "lu-svg-icon", 4), n.qZA()(), n.TgZ(6, "div", 5)(7, "div", 6)(8, "p", 7)(9, "span", 8), n._uU(10, "Пациент:"), n.qZA(), n.TgZ(11, "span", 9), n._uU(12), n.qZA()(), n.TgZ(13, "p", 7)(14, "span", 8), n._uU(15, "Препарат:"), n.qZA(), n.TgZ(16, "span", 9), n._uU(17), n.qZA()()(), n.YNc(18, ca, 4, 2, "div", 10), n.YNc(19, _a, 2, 1, "p", 11), n.YNc(20, wl, 5, 4, "div", 12), n.qZA()()), 2 & k && (n.xp6(3), n.Oqu(ce.title), n.xp6(2), n.Q6J("size", 24), n.xp6(7), n.Oqu(ce.data.patientName), n.xp6(5), n.Oqu(ce.medicationName), n.xp6(1), n.Q6J("ngIf", ce.isInfoMode), n.xp6(1), n.Q6J("ngIf", !ce.isInfoMode), n.xp6(1), n.Q6J("ngIf", !ce.isInfoMode));
    },
    dependencies: [Di.ez, Di.O5, Ks.W1, Ks.mc, Ci.h, Ci.q],
    styles: [".dispensing-modal[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 4px 24px #00000026;width:576px;min-height:280px;padding:24px;display:flex;flex-direction:column;gap:24px}.dispensing-modal__header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.dispensing-modal__title[_ngcontent-%COMP%]{margin:0;font-family:Open Sans,sans-serif;font-weight:600;font-size:20px;line-height:28px;letter-spacing:0;color:#333;padding-right:16px}.dispensing-modal__close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;--lu-svg-icon-color: #ccc}.dispensing-modal__close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.dispensing-modal__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;flex:1}@media (min-width: 961px){.dispensing-modal__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}}.dispensing-modal__info-row[_ngcontent-%COMP%]{margin:0;font-size:15px;line-height:24px}.dispensing-modal__label[_ngcontent-%COMP%]{font-weight:600;color:#333;margin-right:4px}.dispensing-modal__value[_ngcontent-%COMP%]{color:#333}.dispensing-modal__message[_ngcontent-%COMP%]{margin:0;font-size:15px;line-height:24px;color:#333}.dispensing-modal__warning[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;padding:12px;background-color:#ffefd3;border-radius:4px;font-size:13px;line-height:20px;color:#333}.dispensing-modal__warning-icon[_ngcontent-%COMP%]{flex-shrink:0;color:#f9a825;margin-top:2px;--lu-svg-icon-color: #ccc}.dispensing-modal__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px;margin-top:auto}"]
  });
  const If = class {
    constructor($, k) {
      this.modalRef = $, this.data = k;
    }
    onCancel() {
      this.modalRef.close(null);
    }
    onUtilize() {
      this.modalRef.close("utilize");
    }
    onUtilizeAndReassemble() {
      this.modalRef.close("utilize_and_reassemble");
    }
    onGoToPreparation() {
      this.modalRef.close("go_to_preparation");
    }
  };
  let ka = If;
  If.ɵfac = function (k) {
    return new (k || If)(n.Y36(Xs.Rn), n.Y36(ma.UM));
  }, If.ɵcmp = n.Xpm({
    type: If,
    selectors: [["app-utilize-confirmation-modal"]],
    standalone: !0,
    features: [n.jDz],
    decls: 16,
    vars: 6,
    consts: [[1, "utilize-modal"], [1, "utilize-modal__header"], [1, "utilize-modal__title"], ["aria-label", "Закрыть", 1, "utilize-modal__close", 3, "click"], ["icon", "close", 3, "size"], [1, "utilize-modal__body"], [1, "utilize-modal__message"], [1, "utilize-modal__actions"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2), n._uU(3, "Утилизация таблетницы"), n.qZA(), n.TgZ(4, "button", 3), n.NdJ("click", function () {
        return ce.onCancel();
      }), n._UZ(5, "lu-svg-icon", 4), n.qZA()(), n.TgZ(6, "div", 5)(7, "p", 6), n._uU(8), n.qZA(), n.TgZ(9, "p", 6), n._uU(10, " Вы должны пересобрать таблетницу. Хотите сделать это сейчас? "), n.qZA(), n.TgZ(11, "div", 7)(12, "button", 8), n.NdJ("click", function () {
        return ce.onUtilize();
      }), n._uU(13, " Утилизировать "), n.qZA(), n.TgZ(14, "button", 9), n.NdJ("click", function () {
        return ce.onUtilizeAndReassemble();
      }), n._uU(15, " Утилизировать и пересобрать "), n.qZA()()()()), 2 & k && (n.xp6(5), n.Q6J("size", 24), n.xp6(3), n.hij(" Вы утилизируете таблетницу № ", ce.data.number, ". "), n.xp6(4), n.Q6J("size", "medium")("color", "red"), n.xp6(2), n.Q6J("size", "medium")("color", "red"));
    },
    dependencies: [Di.ez, Ks.W1, Ks.mc, Ci.h, Ci.q],
    styles: [".utilize-modal[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 4px 24px #00000026;width:648px;min-height:220px;padding:24px;display:flex;flex-direction:column;gap:24px}.utilize-modal__header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.utilize-modal__title[_ngcontent-%COMP%]{margin:0;font-family:Open Sans,sans-serif;font-weight:600;font-size:20px;line-height:28px;color:#333;padding-right:16px}.utilize-modal__close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;--lu-svg-icon-color: #ccc}.utilize-modal__close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.utilize-modal__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;flex:1}.utilize-modal__message[_ngcontent-%COMP%]{margin:0;font-size:15px;line-height:24px;color:#333}.utilize-modal__actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-top:8px;justify-content:end}"]
  });
  var Hc = i(78437);
  function tc(Te, $) {
    if (1 & Te && (n.ynx(0), n._UZ(1, "span", 5), n.TgZ(2, "span"), n._uU(3), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(3), n.Oqu(k.modalData.bed);
    }
  }
  let zl = ((Ch = class {
    constructor($, k, ce) {
      this.modalRef = $, this.data = k, this.printService = ce, this.modalData = null, this.modalData = k;
    }
    printLabel() {
      this.printService.printCode({
        careCaseId: this.data.careCaseId
      }, "referral_marking").pipe((0, Xn.t)(this), (0, M.h)($ => $)).subscribe(() => {
        this.modalRef.close(!0);
      });
    }
    close() {
      this.modalRef.close();
    }
  }).ɵfac = function (k) {
    return new (k || Ch)(n.Y36(Xs.Rn), n.Y36(ma.UM), n.Y36(ba));
  }, Ch.ɵcmp = n.Xpm({
    type: Ch,
    selectors: [["app-injections-set-print"]],
    decls: 18,
    vars: 10,
    consts: [[1, "dialog-width"], [3, "title"], [1, "patient-info"], [1, "patient-info__fio"], [1, "patient-info__details"], [1, "dot"], [4, "ngIf"], [1, "qr-footer"], ["lu-button-raised", "", 3, "size", "color", "click"], ["icon", "print", 3, "size"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "common-modal-wrapper", 1)(2, "div", 2)(3, "div", 3), n._uU(4), n.qZA(), n.TgZ(5, "div"), n._uU(6), n.qZA(), n.TgZ(7, "div", 4)(8, "span"), n._uU(9), n.qZA(), n._UZ(10, "span", 5), n.TgZ(11, "span"), n._uU(12), n.qZA(), n.YNc(13, tc, 4, 1, "ng-container", 6), n.qZA()(), n.TgZ(14, "div", 7)(15, "button", 8), n.NdJ("click", function () {
        return ce.printLabel();
      }), n._UZ(16, "lu-svg-icon", 9), n._uU(17, " Распечатать "), n.qZA()()()()), 2 & k && (n.xp6(1), n.Q6J("title", "Печать маркировки на инъекционный набор"), n.xp6(3), n.Oqu(ce.modalData.patientFio), n.xp6(2), n.AsE("", ce.modalData.age, " лет, ", ce.modalData.birthday, ""), n.xp6(3), n.Oqu(ce.modalData.medCardNumber), n.xp6(3), n.Oqu(ce.modalData.ward), n.xp6(1), n.Q6J("ngIf", ce.modalData.bed), n.xp6(2), n.Q6J("size", "medium")("color", "blue"), n.xp6(1), n.Q6J("size", 16));
    },
    dependencies: [Di.O5, Hc.$, Ks.mc, Ci.q],
    styles: [".patient-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;font-size:13px;line-height:1.539}.patient-info__fio[_ngcontent-%COMP%]{font-size:15px;font-weight:600;line-height:1.6}.patient-info__details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.qr-footer[_ngcontent-%COMP%]{margin-top:16px;text-align:right}@media (max-width: 960px){.qr-footer[_ngcontent-%COMP%]{margin-top:32px}}.qr-footer[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-content:first-child{display:none}.dialog-width[_ngcontent-%COMP%]{width:648px}@media (max-width: 960px){.dialog-width[_ngcontent-%COMP%]{width:568px}}"],
    changeDetection: 0
  }), Ch);
  zl = (0, Se.gn)([(0, Xn.c)()], zl);
  var Tc = i(3259);
  const Jl = ["qrcElement"];
  let hc = (() => {
      let Te = class {
        constructor(k, ce) {
          this.renderer = k, this.platformId = ce, this.colordark = "", this.colorlight = "", this.level = "", this.hidetitle = !1, this.size = 0, this.usesvg = !1, this.allowEmptyString = !1, this.qrdata = "", this.colorDark = "#000000ff", this.colorLight = "#ffffffff", this.cssClass = "qrcode", this.elementType = "canvas", this.errorCorrectionLevel = "M", this.margin = 4, this.scale = 4, this.width = 10, this.alt = null, this.ariaLabel = null, this.title = null, this.qrcode = null, this.isValidQrCodeText = Ye => !1 === this.allowEmptyString ? !(typeof Ye > "u" || "" === Ye || "null" === Ye || null === Ye) : !(typeof Ye > "u"), "" !== this.colordark && console.warn("[angularx-qrcode] colordark is deprecated, use colorDark."), "" !== this.colorlight && console.warn("[angularx-qrcode] colorlight is deprecated, use colorLight."), "" !== this.level && console.warn("[angularx-qrcode] level is deprecated, use errorCorrectionLevel."), !1 !== this.hidetitle && console.warn("[angularx-qrcode] hidetitle is deprecated."), 0 !== this.size && console.warn("[angularx-qrcode] size is deprecated, use `width`. Defaults to 10."), !1 !== this.usesvg && console.warn("[angularx-qrcode] usesvg is deprecated, use [elementType]=\"'img'\".");
        }
        ngAfterViewInit() {
          (0, Di.PM)(this.platformId) || this.createQRCode();
        }
        ngOnChanges() {
          this.createQRCode();
        }
        toDataURL() {
          return new Promise((k, ce) => {
            (0, Tc.hz)(this.qrdata, {
              color: {
                dark: this.colorDark,
                light: this.colorLight
              },
              errorCorrectionLevel: this.errorCorrectionLevel,
              margin: this.margin,
              scale: this.scale,
              version: this.version,
              width: this.width
            }, (Ye, Tt) => {
              Ye ? ce(Ye) : k(Tt);
            });
          });
        }
        toCanvas(k) {
          return new Promise((ce, Ye) => {
            (0, Tc.rT)(k, this.qrdata, {
              color: {
                dark: this.colorDark,
                light: this.colorLight
              },
              errorCorrectionLevel: this.errorCorrectionLevel,
              margin: this.margin,
              scale: this.scale,
              version: this.version,
              width: this.width
            }, Tt => {
              Tt ? Ye(Tt) : ce("success");
            });
          });
        }
        toSVG() {
          return new Promise((k, ce) => {
            (0, Tc.toString)(this.qrdata, {
              color: {
                dark: this.colorDark,
                light: this.colorLight
              },
              errorCorrectionLevel: this.errorCorrectionLevel,
              margin: this.margin,
              scale: this.scale,
              type: "svg",
              version: this.version,
              width: this.width
            }, (Ye, Tt) => {
              Ye ? ce(Ye) : k(Tt);
            });
          });
        }
        renderElement(k) {
          for (const ce of this.qrcElement.nativeElement.childNodes) this.renderer.removeChild(this.qrcElement.nativeElement, ce);
          this.renderer.appendChild(this.qrcElement.nativeElement, k);
        }
        createQRCode() {
          this.version && this.version > 40 ? (console.warn("[angularx-qrcode] max value for `version` is 40"), this.version = 40) : this.version && this.version < 1 ? (console.warn("[angularx-qrcode]`min value for `version` is 1"), this.version = 1) : void 0 !== this.version && isNaN(this.version) && (console.warn("[angularx-qrcode] version should be a number, defaulting to auto"), this.version = void 0);
          try {
            if (!this.isValidQrCodeText(this.qrdata)) throw new Error("[angularx-qrcode] Field `qrdata` is empty");
            let k;
            switch (this.elementType) {
              case "canvas":
                k = this.renderer.createElement("canvas"), this.toCanvas(k).then(() => {
                  this.ariaLabel && this.renderer.setAttribute(k, "aria-label", `${this.ariaLabel}`), this.title && this.renderer.setAttribute(k, "title", `${this.title}`), this.renderElement(k);
                }).catch(ce => {
                  console.error("[angularx-qrcode] canvas error: ", ce);
                });
                break;
              case "svg":
                k = this.renderer.createElement("svg", "svg"), this.toSVG().then(ce => {
                  k.innerHTML = ce, this.renderer.setAttribute(k, "height", `${this.width}`), this.renderer.setAttribute(k, "width", `${this.width}`), this.renderElement(k);
                }).catch(ce => {
                  console.error("[angularx-qrcode] svg error: ", ce);
                });
                break;
              default:
                k = this.renderer.createElement("img"), this.toDataURL().then(ce => {
                  this.alt && k.setAttribute("alt", this.alt), this.ariaLabel && k.setAttribute("aria-label", this.ariaLabel), k.setAttribute("src", ce), this.title && k.setAttribute("title", this.title), this.renderElement(k);
                }).catch(ce => {
                  console.error("[angularx-qrcode] img/url error: ", ce);
                });
            }
          } catch (k) {
            console.error("[angularx-qrcode] Error generating QR Code: ", k.message);
          }
        }
      };
      return Te.ɵfac = function (k) {
        return new (k || Te)(n.Y36(n.Qsj), n.Y36(n.Lbi));
      }, Te.ɵcmp = n.Xpm({
        type: Te,
        selectors: [["qrcode"]],
        viewQuery: function (k, ce) {
          if (1 & k && n.Gf(Jl, 7), 2 & k) {
            let Ye;
            n.iGM(Ye = n.CRH()) && (ce.qrcElement = Ye.first);
          }
        },
        inputs: {
          colordark: "colordark",
          colorlight: "colorlight",
          level: "level",
          hidetitle: "hidetitle",
          size: "size",
          usesvg: "usesvg",
          allowEmptyString: "allowEmptyString",
          qrdata: "qrdata",
          colorDark: "colorDark",
          colorLight: "colorLight",
          cssClass: "cssClass",
          elementType: "elementType",
          errorCorrectionLevel: "errorCorrectionLevel",
          margin: "margin",
          scale: "scale",
          width: "width",
          alt: "alt",
          ariaLabel: "ariaLabel",
          title: "title",
          version: "version"
        },
        features: [n.TTD],
        decls: 2,
        vars: 2,
        consts: [["qrcElement", ""]],
        template: function (k, ce) {
          1 & k && n._UZ(0, "div", null, 0), 2 & k && n.Tol(ce.cssClass);
        },
        encapsulation: 2,
        changeDetection: 0
      }), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "colordark", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "colorlight", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "level", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "hidetitle", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "size", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "usesvg", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "allowEmptyString", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "qrdata", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "colorDark", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "colorLight", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "cssClass", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "elementType", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "errorCorrectionLevel", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "margin", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "scale", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "version", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "width", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "alt", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "ariaLabel", void 0), (0, Se.gn)([(0, n.IIB)()], Te.prototype, "title", void 0), (0, Se.gn)([(0, n.i9L)("qrcElement", {
        static: !0
      })], Te.prototype, "qrcElement", void 0), Te = (0, Se.gn)([(0, Se.fM)(1, (0, n.tBr)(n.Lbi))], Te), Te;
    })(),
    ll = (() => {
      let Te = class {};
      return Te.ɵfac = function (k) {
        return new (k || Te)();
      }, Te.ɵmod = n.oAB({
        type: Te
      }), Te.ɵinj = n.cJS({}), Te;
    })();
  function Tl(Te, $) {
    if (1 & Te && (n.ynx(0), n._UZ(1, "span", 6), n.TgZ(2, "span"), n._uU(3), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(3), n.Oqu(k.modalData.bed);
    }
  }
  function $c(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 17)(1, "div", 18), n._uU(2), n.qZA(), n.TgZ(3, "div", 19), n._uU(4), n.qZA()()), 2 & Te) {
      const k = $.$implicit;
      n.xp6(2), n.Oqu(k.name), n.xp6(2), n.hij("Доза на прием: ", k.dose, " мл");
    }
  }
  let Ml = ((bd = class {
    constructor($, k, ce) {
      this.modalRef = $, this.data = k, this.printService = ce, this.modalData = null, this.getInjectionDuration = So, this.modalData = k;
    }
    printLabel() {
      this.printService.printCode({
        careCaseId: this.data.careCaseId,
        assignmentCompositionUid: this.data.medicine[0].assignmentCompositionUid,
        dispenceCode: this.data.medicine[0].code
      }, "referral_marking").pipe((0, Xn.t)(this), (0, M.h)(Ye => Ye)).subscribe(() => {
        this.close();
      });
    }
    close() {
      this.modalRef.close();
    }
  }).ɵfac = function (k) {
    return new (k || bd)(n.Y36(Xs.Rn), n.Y36(ma.UM), n.Y36(ba));
  }, bd.ɵcmp = n.Xpm({
    type: bd,
    selectors: [["app-injections-label-print"]],
    decls: 39,
    vars: 17,
    consts: [[3, "title"], [1, "qr-wrapper"], [3, "qrdata", "width"], [1, "patient-info"], [1, "patient-info__fio"], [1, "patient-info__details"], [1, "dot"], [4, "ngIf"], [1, "medicine"], ["class", "medicine__row", 4, "ngFor", "ngForOf"], [1, "sep"], [1, "medicine__info"], [1, "medicine__info__row"], ["lu-text", "", "color", "muted"], [1, "qr-footer"], ["lu-button-raised", "", 3, "size", "color", "click"], ["icon", "print", 3, "size"], [1, "medicine__row"], [1, "medicine__row__name"], [1, "medicine__row__dose"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "common-modal-wrapper", 0)(1, "div", 1), n._UZ(2, "qrcode", 2), n.TgZ(3, "div", 3)(4, "div", 4), n._uU(5), n.qZA(), n.TgZ(6, "div"), n._uU(7), n.qZA(), n.TgZ(8, "div", 5)(9, "span"), n._uU(10), n.qZA(), n._UZ(11, "span", 6), n.TgZ(12, "span"), n._uU(13), n.qZA(), n.YNc(14, Tl, 4, 1, "ng-container", 7), n.qZA()()(), n.TgZ(15, "div", 8), n.YNc(16, $c, 5, 2, "div", 9), n._UZ(17, "div", 10), n.TgZ(18, "div", 11)(19, "div", 12)(20, "span", 13), n._uU(21, "Способ введения:\xA0"), n.qZA(), n.TgZ(22, "span"), n._uU(23), n.qZA()(), n.TgZ(24, "div", 12)(25, "span", 13), n._uU(26, "Длительность:\xA0"), n.qZA(), n.TgZ(27, "span"), n._uU(28), n.qZA()(), n.TgZ(29, "div", 12)(30, "span", 13), n._uU(31, "Примечание:\xA0"), n.qZA(), n.TgZ(32, "span"), n._uU(33), n.qZA(), n._UZ(34, "span"), n.qZA()()(), n.TgZ(35, "div", 14)(36, "button", 15), n.NdJ("click", function () {
        return ce.printLabel();
      }), n._UZ(37, "lu-svg-icon", 16), n._uU(38, " Распечатать "), n.qZA()()()), 2 & k && (n.Q6J("title", "Печать маркировки на назначение"), n.xp6(2), n.Q6J("qrdata", ce.data.medicine[0].code)("width", 147), n.xp6(3), n.Oqu(ce.modalData.patientFio), n.xp6(2), n.AsE("", ce.modalData.age, " лет, ", ce.modalData.birthday, ""), n.xp6(3), n.Oqu(ce.modalData.medCardNumber), n.xp6(3), n.Oqu(ce.modalData.ward), n.xp6(1), n.Q6J("ngIf", ce.modalData.bed), n.xp6(2), n.Q6J("ngForOf", ce.data.medicine), n.xp6(7), n.AsE("", ce.data.medicine[0].method, ", ", ce.data.medicine[0].frequency, ""), n.xp6(5), n.Oqu(ce.getInjectionDuration(null == ce.data || null == ce.data.medicine[0] ? null : ce.data.medicine[0].durationInjectionSpeed)), n.xp6(5), n.Oqu(ce.data.medicine[0].comment), n.xp6(3), n.Q6J("size", "medium")("color", "blue"), n.xp6(1), n.Q6J("size", 16));
    },
    dependencies: [Di.sg, Di.O5, hc, Hc.$, Ks.mc, Ci.q, Kt.NZ],
    styles: [".qr-wrapper[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:5px;margin-bottom:8px}.qr-wrapper[_ngcontent-%COMP%]   qrcode[_ngcontent-%COMP%]{margin-left:-16px;margin-top:-16px}.qr-wrapper[_ngcontent-%COMP%]   qrcode[_ngcontent-%COMP%]     .qrcode{display:flex}.patient-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;font-size:13px;line-height:1.539}.patient-info__fio[_ngcontent-%COMP%]{font-size:15px;font-weight:600;line-height:1.6}.patient-info__details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.medicine[_ngcontent-%COMP%]{padding:16px;background-color:#f2f2f2;border-radius:4px;display:flex;flex-direction:column;gap:8px}.medicine__row[_ngcontent-%COMP%]{display:flex;flex-direction:column}.medicine__row__name[_ngcontent-%COMP%]{font-weight:600}.medicine__row__dose[_ngcontent-%COMP%]{font-size:13px;color:#757575;line-height:1.539}.medicine__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.medicine__info__row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.medicine[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{margin:12px 0;border-top:1px solid #e6e6e6}.qr-footer[_ngcontent-%COMP%]{margin-top:16px;text-align:right}.qr-footer[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-content:first-child{display:none}"],
    changeDetection: 0
  }), bd);
  Ml = (0, Se.gn)([(0, Xn.c)()], Ml);
  var Vl = i(32619),
    Bc = i(54976);
  function bu(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-radio", 10), n._uU(1), n.qZA()), 2 & Te) {
      const k = $.$implicit;
      n.Q6J("value", k), n.xp6(1), n.Oqu(k);
    }
  }
  const Vh = class {
    constructor($) {
      this.modalRef = $, this.selectedReason = "", this.reasons = ["Невозможность использования подготовленной инъекции", "Пациент отказывается от инъекции", "В подготовленную инъекцию внесены изменения", "Подготовленная инъекция отменена"];
    }
  };
  let Kc = Vh;
  Vh.ɵfac = function (k) {
    return new (k || Vh)(n.Y36(Xs.Rn));
  }, Vh.ɵcmp = n.Xpm({
    type: Vh,
    selectors: [["utilized-reason-modal"]],
    decls: 16,
    vars: 5,
    consts: [[1, "modal"], [1, "modal__inner"], [1, "modal__header"], ["icon", "close", 3, "size", "click"], [1, "modal__body"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal__action"], ["lu-button-raised", "", "color", "red", 3, "disabled", "click"], ["icon", "delete", 3, "size"], [3, "value"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span"), n._uU(4, "Утилизация инъекции"), n.qZA(), n.TgZ(5, "lu-svg-icon", 3), n.NdJ("click", function () {
        return ce.modalRef.close();
      }), n.qZA()(), n.TgZ(6, "div", 4)(7, "span"), n._uU(8, "Укажите причину утилизации"), n.qZA(), n.TgZ(9, "lu-radio-group", 5), n.NdJ("ngModelChange", function (Tt) {
        return ce.selectedReason = Tt;
      }), n.YNc(10, bu, 2, 2, "lu-radio", 6), n.qZA()(), n.TgZ(11, "div", 7)(12, "button", 8), n.NdJ("click", function () {
        return ce.modalRef.close(ce.selectedReason);
      }), n._UZ(13, "lu-svg-icon", 9), n.TgZ(14, "span"), n._uU(15, "Утилизировать"), n.qZA()()()()()), 2 & k && (n.xp6(5), n.Q6J("size", 24), n.xp6(4), n.Q6J("ngModel", ce.selectedReason), n.xp6(1), n.Q6J("ngForOf", ce.reasons), n.xp6(2), n.Q6J("disabled", !ce.selectedReason), n.xp6(1), n.Q6J("size", 24));
    },
    dependencies: [Di.sg, vr.JJ, vr.On, Ks.mc, Vl.wH, Ci.q, Bc.K2],
    styles: [".modal[_ngcontent-%COMP%]{height:324px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.modal__inner[_ngcontent-%COMP%]{height:276px;width:464px;margin:24px}.modal__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:28px}.modal__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.modal__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.modal__body[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:8px}.modal__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;font-weight:600}.modal__action[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-top:32px}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:182px;height:40px!important;display:flex;flex-direction:row;justify-content:flex-start}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .lu-button-wrapper{height:40px!important;width:182px!important;display:flex;flex-direction:row;justify-content:flex-start}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .lu-button-content{display:none}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{height:40px;width:40px}"]
  });
  var Al = i(19104);
  const qp = class {
    constructor($, k, ce, Ye, Tt) {
      this.compositionService = $, this.accountingDocumentService = k, this.userContext = ce, this.reserveService = Ye, this.medicationControllerService = Tt, this.isDebugMode = !1, this.setCurrentUser();
    }
    setCurrentUser() {
      this.userContext.getUserContext().subscribe($ => this.currentUser = $);
    }
    _getCompositionData($, k = "issuing") {
      return {
        dispensingCode: $[0].reserveInfo.dispenseCode,
        assignmentCompositionUid: $[0].assignmentCompositionUid,
        dispensingDate: $[0].medicationDispenses.find(({
          code: ce
        }) => ce === $[0].reserveInfo.dispenseCode).planningDate,
        medication: $.map(ce => ({
          medNamesId: ce?.reserveInfo?.medNamesId || "",
          markDrugId: ri.Rt.newGuid(),
          batchCount: ce?.reserveInfo?.amountUnit || 0,
          id: ce.id,
          dose: ce.dosage,
          doseUnit: ce.unitOfDose,
          name: ce.base ? ce.name.split("(Б) ")[1] : ce.name,
          productId: ce?.otnUid,
          recycledPack: "utilization" === k && ce.reserveInfo.amountUnit || 0,
          storageId: ce?.reserveInfo?.warehouseId || ""
        })),
        doctor: {
          dept: this.currentUser.department?.fullName,
          empId: this.currentUser.employeeId,
          position: this.currentUser.jobTitle?.name,
          snils: this.currentUser.employee?.identities?.snils
        }
      };
    }
    patientRefuse($, k) {
      const ce = this._getCompositionData(k);
      return this.compositionService.getEhr($.patient.ehrCaseId).pipe((0, ut.w)(Ye => this.compositionService.createMedicationDocument(Ye, $.patient.careCaseId, ce, !1, !1, "aborted", null)), (0, Go.K)(Ye => (console.log(Ye), (0, qe.of)())));
    }
    _cancelReserveAndAccountingDocument($, k, ce, Ye) {
      const Tt = k.map(ai => {
        const Zi = this._getCompositionData([ai]);
        return ai.base ? (0, qe.of)(ai) : this.reserveService.cancelReserve(ai.reserveInfo.id).pipe((0, ut.w)(() => this.accountingDocumentService.createAccountingDocumentByDispenseId({
          careCaseId: $.patient.careCaseId,
          dateTime: new Date().toISOString(),
          workplaceId: this.currentUser.employee?.workplace?.id,
          medications: Zi.medication.map(Po => ({
            amountUnit: Po.batchCount,
            warehouseId: Po.storageId,
            dispenseCode: Zi.dispensingCode,
            assignmentCompositionUid: Zi.assignmentCompositionUid,
            markDrugId: Po.markDrugId,
            pharmaUnitId: ai.reserveInfo.pharmaUnitId,
            pharmaReasonExpenses: Ye,
            reserveId: ai?.reserveInfo?.id || null,
            remark: ce
          }))
        })), (0, Go.K)(Po => this.reserveService.reservePharmaUnit({
          careCaseId: $.patient.careCaseId,
          assignmentCompositionUid: Zi.assignmentCompositionUid,
          dispenseCode: Zi.dispensingCode,
          remark: "",
          amountUnit: ai.reserveInfo.amountUnit || 0,
          pharmaUnitId: ai.reserveInfo.pharmaUnitId,
          warehouseId: ai.reserveInfo.warehouseId,
          medNamesId: ai.reserveInfo.medNamesId
        }).pipe((0, ut.w)(Wr => this.reserveService.getReserve(Wr)), (0, q.U)(Wr => ({
          ...ai,
          reserveInfo: Wr
        })), (0, ut.w)(() => (0, hn._)(() => Po)))));
      });
      return (0, di.D)(Tt);
    }
    issuingOrUtilizationMedicament($, k, ce, Ye, Tt, ai) {
      const Zi = this._getCompositionData(k),
        Po = "active" === Tt ? (0, qe.of)({}) : this._cancelReserveAndAccountingDocument($, k, ce, Ye),
        fo = {
          active: "EXECUTING",
          completed: "COMPLETED"
        };
      return Po.pipe((0, ut.w)("DISPENSE" === Ye ? () => this.compositionService.getEhr($.patient.ehrCaseId).pipe((0, ut.w)(Wr => this.compositionService.createMedicationDocument(Wr, $.patient.careCaseId, Zi, !1, k[0].symptomatic, Tt, $, ai).pipe((0, q.U)(Cs => {
        const ia = Cs?.getUid();
        return k.map(Ls => {
          const nl = Ls.medicationDispenses;
          if (ia) {
            const Yl = Ls.medicationDispenses.find(({
              code: uc
            }) => Ls.code === uc);
            nl.splice(nl.findIndex(({
              code: uc
            }) => Ls.code === uc), 1, {
              ...Yl,
              resultCompositionUid: ia,
              status: "DISPENSE" === Ye ? fo[Tt] : "CANCELLED"
            });
          }
          return {
            ...Ls,
            medicationDispenses: nl,
            status: "DISPENSE" === Ye ? fo[Tt] : "CANCELLED"
          };
        });
      })))) : () => this.medicationControllerService.unmarkMedicationDispenseAsPreparedCommand({
        assignmentCompositionUid: Zi.assignmentCompositionUid,
        code: Zi.dispensingCode,
        doctorJob: this.currentUser.jobTitle?.name,
        doctorName: `${this.currentUser.lastName} ${this.currentUser.firstName} ${this.currentUser.secondName}`,
        workplaceId: this.currentUser.employee?.workplace.id
      })));
    }
  };
  let sc = qp;
  qp.ɵfac = function (k) {
    return new (k || qp)(n.LFG(Br), n.LFG(dn.gy), n.LFG(qo.oL), n.LFG(dn.iW), n.LFG(Al.i8));
  }, qp.ɵprov = n.Yz7({
    token: qp,
    factory: qp.ɵfac,
    providedIn: "root"
  });
  let Bi = ((pd = class {
    constructor($, k, ce, Ye) {
      this.modalRef = $, this.qrScannerService = k, this.injectionsService = ce, this.data = Ye;
    }
    ngOnInit() {
      this.qrScannerService.start({
        maxGapMs: 80,
        maxAverageGapMs: 35,
        idleFinishMs: 120,
        ignoreEditableTargets: !0
      }), this.qrScannerService.scan$.pipe((0, Xn.t)(this)).subscribe(({
        value: $
      }) => {
        $ === this.data.code && this.modalRef.close(!0);
      });
    }
    get isDebugMode() {
      return this.injectionsService.isDebugMode;
    }
  }).ɵfac = function (k) {
    return new (k || pd)(n.Y36(Xs.Rn), n.Y36(Yt.w), n.Y36(sc), n.Y36(ma.UM));
  }, pd.ɵcmp = n.Xpm({
    type: pd,
    selectors: [["utilize-confirmation-scan-modal"]],
    features: [n._Bn([Yt.w])],
    decls: 14,
    vars: 2,
    consts: [[1, "modal"], [1, "modal__inner"], [1, "modal__header"], ["icon", "close", 1, "icon-close", 3, "size", "click"], [1, "modal__body"], [1, "modal__body__stick", 3, "click"], ["icon", "warning", 3, "size"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span"), n._uU(4, "Подтверждение утилизации"), n.qZA(), n.TgZ(5, "lu-svg-icon", 3), n.NdJ("click", function () {
        return ce.modalRef.close(!1);
      }), n.qZA()(), n.TgZ(6, "div", 4)(7, "div", 5), n.NdJ("click", function () {
        return ce.isDebugMode ? ce.modalRef.close(!0) : null;
      }), n.TgZ(8, "span"), n._UZ(9, "lu-svg-icon", 6), n.qZA(), n.TgZ(10, "span"), n._uU(11, "Отсканируйте этикетку лекарственного препарата "), n._UZ(12, "br"), n._uU(13, " для подтверждения утилизации"), n.qZA()()()()()), 2 & k && (n.xp6(5), n.Q6J("size", 24), n.xp6(4), n.Q6J("size", 24));
    },
    dependencies: [Ci.q],
    styles: [".modal[_ngcontent-%COMP%]{height:166px;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.modal__inner[_ngcontent-%COMP%]{height:118px;width:400px;margin:24px}.modal__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:28px}.modal__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.modal__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.modal__body[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:8px}.modal__body__stick[_ngcontent-%COMP%]{width:100%;height:66px;display:flex;flex-direction:row;background-color:#ffefd3;justify-content:flex-start;align-items:center}.modal__body__stick[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #FF941A;margin-left:12px;align-self:flex-start!important}.modal__body__stick[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:42px;font-size:13px}.modal__body__stick[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{padding-left:8px}"]
  }), pd);
  Bi = (0, Se.gn)([(0, Xn.c)()], Bi);
  const lu = ["dispensingPanel"];
  function Rc(Te, $) {
    1 & Te && n.GkF(0);
  }
  function ac(Te, $) {
    1 & Te && n.GkF(0);
  }
  function Pa(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 17), n._UZ(2, "lu-svg-icon", 18), n.TgZ(3, "span"), n._uU(4), n.qZA()(), n._UZ(5, "div"), n.BQk()), 2 & Te) {
      const k = n.oxw(3);
      n.xp6(2), n.Q6J("size", 24), n.xp6(2), n.hij("Внимание! За период «", k.periodTranslations[k.data.slot.period.toLowerCase()], "» назначены новые лекарственные препараты, которые необходимо подготовить отдельно");
    }
  }
  function cl(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 26), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit,
        ce = n.oxw(2).ngIf,
        Ye = n.oxw();
      n.xp6(1), n.hij(" Период «", Ye.periodTranslations[ce[k].period], "» ");
    }
  }
  function iu(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 27), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(5);
      n.xp6(1), n.hij(" ", k.isSymptomatically ? "Симптоматические" : "Выполнение по времени", " ");
    }
  }
  function Fc(Te, $) {
    1 & Te && (n.TgZ(0, "div", 35), n._uU(1, "Выполнение"), n.qZA());
  }
  const Rl = function (Te) {
    return {
      "time-period-table": Te
    };
  };
  function Jc(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 30)(1, "div", 31), n._uU(2, "Назначенный медикамент"), n.qZA(), n.YNc(3, Fc, 2, 0, "div", 32), n.TgZ(4, "div", 33), n._uU(5, "Заказанное кол-во"), n.qZA(), n.TgZ(6, "div", 34), n._uU(7, "Заказанная доза"), n.qZA(), n.TgZ(8, "div", 35), n._uU(9, "Выбранное кол-во"), n.qZA(), n.TgZ(10, "div", 35), n._uU(11, "Способ введения"), n.qZA(), n.TgZ(12, "div", 36), n._uU(13, "Статус"), n.qZA()()), 2 & Te) {
      const k = n.oxw(3).$implicit;
      n.Q6J("ngClass", n.VKq(2, Rl, "timeGroup" === k)), n.xp6(3), n.Q6J("ngIf", "timeGroup" === k);
    }
  }
  function _t(Te, $) {
    1 & Te && (n.TgZ(0, "div", 37)(1, "div", 31), n._uU(2, "Назначенный медикамент, кол-во, доза и способ введения"), n.qZA(), n.TgZ(3, "div", 35), n._uU(4, "Выбранное кол-во"), n.qZA(), n.TgZ(5, "div", 38), n._uU(6, "Статус"), n.qZA()());
  }
  function Tn(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Jc, 14, 4, "div", 28), n.YNc(2, _t, 7, 0, "div", 29), n.BQk()), 2 & Te) {
      const k = n.oxw(5);
      n.xp6(1), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet);
    }
  }
  function Ge(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 51), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(7);
        return n.KtG(Tt.tempScan(Ye));
      }), n._uU(1, "Scan"), n.qZA();
    }
  }
  function Vi(Te, $) {
    1 & Te && n.GkF(0);
  }
  function Zo(Te, $) {
    1 & Te && n._UZ(0, "div");
  }
  const Zr = function (Te) {
      return {
        scanned: Te
      };
    },
    pa = function (Te, $) {
      return {
        selected: Te,
        scanned: $
      };
    },
    fl = function (Te) {
      return [Te];
    },
    Bs = function (Te) {
      return {
        $implicit: Te
      };
    };
  function qc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 43)(2, "div", 44), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(7).selectMedicine(ai), n.KtG(Ye.stopPropagation());
      }), n.TgZ(3, "div", 45)(4, "div", 31), n._uU(5), n.qZA(), n.TgZ(6, "div", 46)(7, "div", 33), n._uU(8), n.qZA(), n._UZ(9, "div", 47), n.TgZ(10, "div", 34), n._uU(11), n.qZA(), n._UZ(12, "div", 47), n.TgZ(13, "div", 35), n._uU(14), n.qZA(), n.YNc(15, Ge, 2, 0, "button", 48), n.qZA()(), n.TgZ(16, "div", 35), n._uU(17), n.qZA(), n.TgZ(18, "div", 49)(19, "span", 50), n._uU(20), n.qZA()()(), n.YNc(21, Vi, 1, 0, "ng-container", 11), n.YNc(22, Zo, 1, 0, "div", 6), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(7),
        Ye = n.MAs(9);
      let Tt;
      n.xp6(1), n.Q6J("ngClass", n.VKq(13, Zr, k.code === ce.scannedDispenseCode)), n.xp6(1), n.Q6J("ngClass", n.WLB(15, pa, ce.isItemSelected(k), k.code === ce.scannedDispenseCode)), n.xp6(3), n.Oqu(k.name), n.xp6(3), n.Oqu(null == (Tt = ce.getAssignedMedicine(k)) ? null : Tt.orderedAmount), n.xp6(3), n.Oqu(k.dosage), n.xp6(3), n.Oqu(k.method), n.xp6(1), n.Q6J("ngIf", ce.isDebugMode), n.xp6(2), n.Oqu(ce.getDispensingQuantity(k)), n.xp6(2), n.Q6J("ngClass", n.VKq(18, fl, k.status.toLowerCase())), n.xp6(1), n.hij(" ", ce.getInjectionsStatusLabelRu(k.status), " "), n.xp6(1), n.Q6J("ngTemplateOutlet", ce.isAllowExecuting(k) ? Ye : null)("ngTemplateOutletContext", n.VKq(20, Bs, k)), n.xp6(1), n.Q6J("ngIf", ce.scannedDispenseCode);
    }
  }
  function $e(Te, $) {
    1 & Te && n.GkF(0);
  }
  function Hn(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 52), n.YNc(1, $e, 1, 0, "ng-container", 53), n.qZA()), 2 & Te) {
      n.oxw(6);
      const k = n.MAs(9),
        ce = n.MAs(11),
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngTemplateOutlet", Ye.selectedMedicine.base ? k : ce);
    }
  }
  function nt(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, qc, 23, 22, "ng-container", 12), n.YNc(2, Hn, 2, 1, "div", 41), n._UZ(3, "div", 42), n.BQk()), 2 & Te) {
      const k = n.oxw(3).$implicit,
        ce = n.oxw(2).ngIf,
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", ce[k].singleMedicaments), n.xp6(1), n.Q6J("ngIf", Ye.isShowDispensingPanel(ce[k].singleMedicaments));
    }
  }
  function si(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 51), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(6);
        return n.KtG(Tt.tempScan(Ye[0]));
      }), n._uU(1, "Scan"), n.qZA();
    }
  }
  function Oo(Te, $) {
    1 & Te && (n.TgZ(0, "div", 36), n._uU(1, " Статус препарата "), n.qZA());
  }
  const xs = function (Te) {
    return {
      "tablet-header-width": Te
    };
  };
  function Ne(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "span"), n._uU(4, "Назначенный медикамент, кол-во, доза и способ введения"), n.qZA()(), n.TgZ(5, "span", 35), n._uU(6, " Выбранное кол-во"), n.qZA(), n.YNc(7, Oo, 2, 0, "div", 72), n.qZA()()), 2 & Te) {
      const k = n.oxw(7);
      n.xp6(2), n.Q6J("ngClass", n.VKq(2, xs, "issuing" === k.injectionsMode)), n.xp6(5), n.Q6J("ngIf", "preparation" === k.injectionsMode);
    }
  }
  function Qe(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 79)(1, "span", 50), n._uU(2), n.qZA()()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(7);
      n.xp6(1), n.Q6J("ngClass", n.VKq(2, fl, k.status.toLowerCase())), n.xp6(1), n.hij(" ", ce.getInjectionsStatusLabelRu(k.status), " ");
    }
  }
  const Q = function (Te) {
      return {
        selected: Te
      };
    },
    se = function (Te) {
      return {
        "padding-left: 8px": Te
      };
    };
  function re(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 73)(2, "div", 74), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(7).selectMedicine(ai), n.KtG(Ye.stopPropagation());
      }), n.TgZ(3, "div", 75)(4, "div", 76), n._uU(5), n.qZA(), n.TgZ(6, "div", 46)(7, "div", 33), n._uU(8), n.qZA(), n._UZ(9, "div", 47), n.TgZ(10, "div", 34), n._uU(11), n.qZA(), n._UZ(12, "div", 47), n.TgZ(13, "div", 35), n._uU(14), n.qZA()()(), n.TgZ(15, "div", 77), n._uU(16), n.qZA(), n.YNc(17, Qe, 3, 4, "div", 78), n.qZA()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(7);
      let Ye;
      n.xp6(2), n.Q6J("ngClass", n.VKq(9, Q, ce.isItemSelected(k))), n.xp6(1), n.Q6J("ngClass", n.VKq(11, xs, "issuing" === ce.injectionsMode)), n.xp6(2), n.hij("", k.name, " "), n.xp6(3), n.hij("", null == (Ye = ce.getAssignedMedicine(k)) ? null : Ye.orderedAmount, " "), n.xp6(3), n.Oqu(k.dosage), n.xp6(3), n.hij("", k.method, " "), n.xp6(1), n.Q6J("ngStyle", n.VKq(13, se, "preparation" === ce.injectionsMode)), n.xp6(1), n.hij("", ce.getDispensingQuantity(k), " "), n.xp6(1), n.Q6J("ngIf", "preparation" === ce.injectionsMode);
    }
  }
  function Ce(Te, $) {
    1 & Te && n.GkF(0);
  }
  function Be(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 80), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(6);
        return n.KtG(Tt.printLabel(Ye));
      }), n._uU(1, " Подтвердить и распечатать этикетку "), n.qZA();
    }
  }
  function dt(Te, $) {
    1 & Te && n.GkF(0);
  }
  const Ot = function () {
    return {
      $implicit: !0
    };
  };
  function Qt(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 52), n.YNc(1, dt, 1, 0, "ng-container", 11), n.qZA()), 2 & Te) {
      n.oxw(6);
      const k = n.MAs(9),
        ce = n.MAs(11),
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngTemplateOutlet", Ye.selectedMedicine.base ? k : ce)("ngTemplateOutletContext", n.DdM(2, Ot));
    }
  }
  function Wn(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "span", 57), n._uU(5, "Составное назначение"), n.qZA(), n.TgZ(6, "div", 58)(7, "div", 59), n.YNc(8, si, 2, 0, "button", 48), n.TgZ(9, "span", 60), n._uU(10), n.qZA(), n._UZ(11, "span", 61), n.TgZ(12, "div")(13, "span", 62), n._uU(14, "Способ введения: \xA0 "), n.TgZ(15, "span"), n._uU(16), n.qZA()()(), n._UZ(17, "span", 61), n.TgZ(18, "div", 63)(19, "span", 62), n._uU(20, "Выполнение: "), n.TgZ(21, "span"), n._uU(22, "11:00"), n.qZA()()(), n._UZ(23, "span", 61), n.qZA(), n.TgZ(24, "div", 59)(25, "div")(26, "span", 62), n._uU(27, "Длительность: \xA0"), n.qZA(), n.TgZ(28, "span"), n._uU(29), n.qZA()(), n._UZ(30, "span", 61), n.qZA(), n.TgZ(31, "div", 64)(32, "span", 62), n._uU(33, "Примечание: \xA0"), n.qZA(), n.TgZ(34, "span"), n._uU(35), n.qZA()()()(), n.YNc(36, Ne, 8, 4, "div", 65), n.TgZ(37, "div", 66), n.YNc(38, re, 18, 15, "ng-container", 12), n.qZA()(), n.TgZ(39, "div", 67), n.YNc(40, Ce, 1, 0, "ng-container", 11), n.YNc(41, Be, 2, 0, "button", 68), n.qZA(), n.YNc(42, Qt, 2, 3, "div", 41), n.qZA(), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(6),
        Ye = n.MAs(11);
      n.xp6(8), n.Q6J("ngIf", ce.isDebugMode), n.xp6(1), n.Q6J("ngClass", n.VKq(12, fl, ce.getCompositeStatus(k))), n.xp6(1), n.hij(" ", ce.getInjectionsStatusLabelRu(ce.getCompositeStatus(k)), " "), n.xp6(6), n.Oqu(k[0].method), n.xp6(13), n.Oqu(ce.getDuration(k[0].durationInjectionSpeed)), n.xp6(6), n.Oqu(k[0].comment || "-"), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(2), n.Q6J("ngForOf", k), n.xp6(2), n.Q6J("ngTemplateOutlet", ce.isAllowExecuting(k[0]) ? Ye : null)("ngTemplateOutletContext", n.VKq(14, Bs, k)), n.xp6(1), n.Q6J("ngIf", ce.isCompositePrepared(k)), n.xp6(1), n.Q6J("ngIf", ce.isShowDispensingPanel(k));
    }
  }
  function Ui(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 39), n.YNc(1, nt, 4, 2, "ng-container", 6), n.YNc(2, Wn, 43, 16, "ng-container", 40), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit,
        ce = n.oxw(2).ngIf,
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngIf", ce[k].singleMedicaments.length), n.xp6(1), n.Q6J("ngForOf", ce[k].compositeMedicaments)("ngForTrackBy", Ye.trackByMed);
    }
  }
  function eo(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 35), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.Oqu(k.time);
    }
  }
  function Wo(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 51), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(7);
        return n.KtG(Tt.tempScan(Ye));
      }), n._uU(1, "Scan"), n.qZA();
    }
  }
  function Ve(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 51), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(7);
        return n.KtG(Tt.printLabel([Ye]));
      }), n._uU(1, "QR"), n.qZA();
    }
  }
  function me(Te, $) {
    1 & Te && n.GkF(0);
  }
  const ze = function (Te, $, k) {
    return {
      selected: Te,
      "time-period-table": $,
      scanned: k
    };
  };
  function xt(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 44), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(7).selectMedicine(ai), n.KtG(Ye.stopPropagation());
      }), n.TgZ(2, "div", 31), n._uU(3), n.qZA(), n.YNc(4, eo, 2, 1, "div", 32), n.TgZ(5, "div", 33), n._uU(6), n.qZA(), n.TgZ(7, "div", 34), n._uU(8), n.qZA(), n.TgZ(9, "div", 35), n._uU(10), n.qZA(), n.TgZ(11, "div", 35), n._uU(12), n.qZA(), n.TgZ(13, "div", 36)(14, "span", 60), n._uU(15), n.qZA(), n.YNc(16, Wo, 2, 0, "button", 48), n.YNc(17, Ve, 2, 0, "button", 48), n.qZA(), n.YNc(18, me, 1, 0, "ng-container", 11), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(4).$implicit,
        Ye = n.oxw(3),
        Tt = n.MAs(9);
      let ai;
      n.xp6(1), n.Q6J("ngClass", n.kEZ(13, ze, Ye.isItemSelected(k), "timeGroup" === ce, k.code === Ye.scannedDispenseCode)), n.xp6(2), n.Oqu(Ye.getNameWithDose(k)), n.xp6(1), n.Q6J("ngIf", "timeGroup" === ce), n.xp6(2), n.Oqu(null == (ai = Ye.getAssignedMedicine(k)) ? null : ai.orderedAmount), n.xp6(2), n.Oqu(k.dosage), n.xp6(2), n.Oqu(Ye.getDispensingQuantity(k)), n.xp6(2), n.Oqu(k.method), n.xp6(2), n.Q6J("ngClass", n.VKq(17, fl, k.status.toLowerCase())), n.xp6(1), n.hij(" ", Ye.getInjectionsStatusLabelRu(k.status), " "), n.xp6(1), n.Q6J("ngIf", Ye.isDebugMode), n.xp6(1), n.Q6J("ngIf", Ye.isDebugMode), n.xp6(1), n.Q6J("ngTemplateOutlet", Ye.isAllowExecuting(k) ? Tt : null)("ngTemplateOutletContext", n.VKq(19, Bs, k));
    }
  }
  function wn(Te, $) {
    1 & Te && n.GkF(0);
  }
  function Ai(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 52), n.YNc(1, wn, 1, 0, "ng-container", 53), n.qZA()), 2 & Te) {
      n.oxw(6);
      const k = n.MAs(9),
        ce = n.MAs(11),
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngTemplateOutlet", Ye.selectedMedicine.base ? k : ce);
    }
  }
  function _o(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, xt, 19, 21, "ng-container", 12), n.YNc(2, Ai, 2, 1, "div", 41), n._UZ(3, "div", 42), n.BQk()), 2 & Te) {
      const k = n.oxw(3).$implicit,
        ce = n.oxw(2).ngIf,
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", ce[k].singleMedicaments), n.xp6(1), n.Q6J("ngIf", Ye.isShowDispensingPanel(ce[k].singleMedicaments));
    }
  }
  function mr(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 85), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(6);
        return n.KtG(Tt.tempScan(Ye[0]));
      }), n._uU(1, " Scan "), n.qZA();
    }
  }
  function Yr(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 85), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(6);
        return n.KtG(Tt.printLabel(Ye));
      }), n._uU(1, " QR "), n.qZA();
    }
  }
  function es(Te, $) {
    1 & Te && (n.TgZ(0, "div", 35), n._uU(1, "Выполнение"), n.qZA());
  }
  function Jr(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 35), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.hij("", k.time, " ");
    }
  }
  const Ca = function (Te, $) {
    return {
      selected: Te,
      "time-period-table": $
    };
  };
  function Ra(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 44), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(7).selectMedicine(ai), n.KtG(Ye.stopPropagation());
      }), n.TgZ(2, "div", 31), n._uU(3), n.qZA(), n.YNc(4, Jr, 2, 1, "div", 32), n.TgZ(5, "div", 33), n._uU(6), n.qZA(), n.TgZ(7, "div", 34), n._uU(8), n.qZA(), n.TgZ(9, "div", 35), n._uU(10), n.qZA(), n.TgZ(11, "div", 36)(12, "span", 60), n._uU(13), n.qZA()()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(4).$implicit,
        Ye = n.oxw(3);
      let Tt;
      n.xp6(1), n.Q6J("ngClass", n.WLB(8, Ca, Ye.isItemSelected(k), "timeGroup" === ce)), n.xp6(2), n.Oqu(Ye.getNameWithDose(k)), n.xp6(1), n.Q6J("ngIf", "timeGroup" === ce), n.xp6(2), n.hij("", null == (Tt = Ye.getAssignedMedicine(k)) ? null : Tt.orderedAmount, " "), n.xp6(2), n.Oqu(k.dosage), n.xp6(2), n.Oqu(Ye.getDispensingQuantity(k)), n.xp6(2), n.Q6J("ngClass", n.VKq(11, fl, k.status.toLowerCase())), n.xp6(1), n.hij(" ", Ye.getInjectionsStatusLabelRu(k.status), " ");
    }
  }
  function Ta(Te, $) {
    1 & Te && n.GkF(0);
  }
  function Qa(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 80), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(6);
        return n.KtG(Tt.printLabel(Ye));
      }), n._uU(1, " Подтвердить и распечатать этикетку "), n.qZA();
    }
  }
  function Vc(Te, $) {
    1 & Te && n.GkF(0);
  }
  function fc(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 52), n.YNc(1, Vc, 1, 0, "ng-container", 11), n.qZA()), 2 & Te) {
      n.oxw(6);
      const k = n.MAs(9),
        ce = n.MAs(11),
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngTemplateOutlet", Ye.selectedMedicine.base ? k : ce)("ngTemplateOutletContext", n.DdM(2, Ot));
    }
  }
  function Ac(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "span", 57), n._uU(5, "Составное назначение"), n.qZA(), n.TgZ(6, "div", 81)(7, "span", 60), n._uU(8), n.qZA(), n._UZ(9, "span", 82), n.TgZ(10, "div")(11, "span", 62), n._uU(12, "Способ введения: \xA0"), n.qZA(), n.TgZ(13, "span"), n._uU(14), n.qZA()(), n._UZ(15, "span", 82), n.TgZ(16, "div")(17, "span", 62), n._uU(18, "Длительность: \xA0"), n.qZA(), n.TgZ(19, "span"), n._uU(20), n.qZA()(), n._UZ(21, "span", 82), n.TgZ(22, "div")(23, "span", 62), n._uU(24, "Примечание: \xA0"), n.qZA(), n.TgZ(25, "span"), n._uU(26), n.qZA()(), n.YNc(27, mr, 2, 0, "button", 83), n.YNc(28, Yr, 2, 0, "button", 83), n.qZA()(), n.TgZ(29, "div", 30)(30, "div", 31), n._uU(31, "Назначенный медикамент "), n.qZA(), n.YNc(32, es, 2, 0, "div", 32), n.TgZ(33, "div", 33), n._uU(34, "Заказанное кол-во"), n.qZA(), n.TgZ(35, "div", 34), n._uU(36, "Заказанная доза"), n.qZA(), n.TgZ(37, "div", 35), n._uU(38, "Выбранное кол-во"), n.qZA(), n.TgZ(39, "div", 36), n._uU(40, "Статус"), n.qZA()(), n.YNc(41, Ra, 14, 13, "ng-container", 12), n.qZA(), n.TgZ(42, "div", 67), n.YNc(43, Ta, 1, 0, "ng-container", 11), n.YNc(44, Qa, 2, 0, "button", 68), n.qZA(), n.YNc(45, fc, 2, 3, "div", 84), n.qZA(), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3).$implicit,
        Ye = n.oxw(3),
        Tt = n.MAs(11);
      n.xp6(7), n.Q6J("ngClass", n.VKq(14, fl, Ye.getCompositeStatus(k).toLowerCase())), n.xp6(1), n.hij(" ", Ye.getInjectionsStatusLabelRu(Ye.getCompositeStatus(k)), " "), n.xp6(6), n.Oqu(k[0].method), n.xp6(6), n.Oqu(Ye.getDuration(k[0].durationInjectionSpeed)), n.xp6(6), n.Oqu(k[0].comment || "-"), n.xp6(1), n.Q6J("ngIf", Ye.isDebugMode), n.xp6(1), n.Q6J("ngIf", Ye.isDebugMode), n.xp6(1), n.Q6J("ngClass", n.VKq(16, Rl, "timeGroup" === ce)), n.xp6(3), n.Q6J("ngIf", "timeGroup" === ce), n.xp6(9), n.Q6J("ngForOf", k), n.xp6(2), n.Q6J("ngTemplateOutlet", Ye.isAllowExecuting(k[0]) ? Tt : null)("ngTemplateOutletContext", n.VKq(18, Bs, k)), n.xp6(1), n.Q6J("ngIf", Ye.isCompositePrepared(k)), n.xp6(1), n.Q6J("ngIf", Ye.isShowDispensingPanel(k));
    }
  }
  function cu(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 39), n.YNc(1, _o, 4, 2, "ng-container", 6), n.YNc(2, Ac, 46, 20, "ng-container", 40), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit,
        ce = n.oxw(2).ngIf,
        Ye = n.oxw();
      n.xp6(1), n.Q6J("ngIf", ce[k].singleMedicaments.length), n.xp6(1), n.Q6J("ngForOf", ce[k].compositeMedicaments)("ngForTrackBy", Ye.trackByMed);
    }
  }
  function $a(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 20)(1, "h3", 21), n.YNc(2, cl, 2, 1, "span", 22), n.YNc(3, iu, 2, 1, "span", 23), n.qZA(), n.TgZ(4, "div", 24), n.YNc(5, Tn, 3, 2, "ng-container", 6), n.YNc(6, Ui, 3, 3, "div", 25), n.YNc(7, cu, 3, 3, "div", 25), n.qZA()()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(2).ngIf,
        Ye = n.oxw();
      n.xp6(2), n.Q6J("ngIf", "periodGroup" === k), n.xp6(1), n.Q6J("ngIf", "timeGroup" === k), n.xp6(2), n.Q6J("ngIf", ce[k].singleMedicaments.length), n.xp6(1), n.Q6J("ngIf", Ye.isTablet), n.xp6(1), n.Q6J("ngIf", !Ye.isTablet);
    }
  }
  function eu(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, $a, 8, 5, "div", 19), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2).ngIf;
      n.xp6(1), n.Q6J("ngIf", (null == ce[k] ? null : ce[k].singleMedicaments.length) || (null == ce[k] ? null : ce[k].compositeMedicaments.length));
    }
  }
  function uu(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Pa, 6, 2, "ng-container", 6), n.YNc(2, eu, 2, 1, "ng-container", 12), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = $.index,
        Ye = n.oxw(2);
      n.xp6(1), n.Q6J("ngIf", 1 === ce && Ye.isOtherMedExisting), n.xp6(1), n.Q6J("ngForOf", k);
    }
  }
  function jl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 86)(1, "button", 80), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.printLabel([Ye.selectedMedicine]));
      }), n._uU(2, "Добавить и распечатать этикетку"), n.qZA()();
    }
  }
  function Nc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "dispensing-panel", 87, 88), n.NdJ("onInjectPrepare", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(2);
        return n.KtG(Tt.prepareMed(Ye));
      })("onComponentIsReady", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.setInitialDispense());
      }), n.ALo(2, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      n.Q6J("stockLocations", n.lcZ(2, 5, ce.warehouses$))("isComposite", k)("data", ce.data)("availableSlots", ce.data.slots)("mode", "issuingInjections");
    }
  }
  function Cl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "button", 89), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.printSetLabel());
      }), n._UZ(2, "lu-svg-icon", 90), n.TgZ(3, "span"), n._uU(4, "Распечатать этикетку набора"), n.qZA()(), n.TgZ(5, "button", 91), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().ngIf,
          Tt = n.oxw();
        return n.KtG(Tt.completedPreparation(Ye));
      }), n.TgZ(6, "span", 92), n._uU(7, "Завершить подготовку"), n.qZA()(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw().ngIf,
        ce = n.oxw();
      n.xp6(2), n.Q6J("size", 24), n.xp6(3), n.Q6J("disabled", !ce.isAllowCompletePreparation(k));
    }
  }
  function lc(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n._UZ(1, "div"), n.TgZ(2, "button", 93), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(3);
        return n.KtG(Ye.handleScanQRDialog(!0));
      }), n.TgZ(3, "span", 92), n._uU(4, "Сканировать препарат"), n.qZA()(), n.BQk();
    }
  }
  function Bu(Te, $) {
    if (1 & Te && n.YNc(0, lc, 5, 0, "ng-container", 6), 2 & Te) {
      const k = n.oxw(2);
      n.Q6J("ngIf", k.isTablet && k.isPreparedExist);
    }
  }
  const Sc = function () {
      return ["periodGroup", "timeGroup"];
    },
    Vu = function () {
      return ["otherPeriodGroup", "otherTimeGroup"];
    },
    ah = function (Te, $) {
      return [Te, $];
    };
  function Qd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 7)(2, "banner-panel", 8), n.NdJ("close", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.modalRef.close());
      }), n.qZA(), n.TgZ(3, "div", 9)(4, "div", 10), n.YNc(5, Rc, 1, 0, "ng-container", 11), n.YNc(6, ac, 1, 0, "ng-container", 11), n.YNc(7, uu, 3, 2, "ng-container", 12), n.YNc(8, jl, 3, 0, "ng-template", null, 13, n.W1O), n.YNc(10, Nc, 3, 7, "ng-template", null, 14, n.W1O), n.qZA(), n.TgZ(12, "div", 15), n.YNc(13, Cl, 8, 2, "ng-container", 0), n.YNc(14, Bu, 1, 1, "ng-template", null, 16, n.W1O), n.qZA()()(), n.BQk();
    }
    if (2 & Te) {
      const k = n.MAs(15),
        ce = n.oxw(),
        Ye = n.MAs(5),
        Tt = n.MAs(7);
      n.xp6(2), n.Q6J("patient", ce.data.patient)("isTablet", ce.isTablet), n.xp6(3), n.Q6J("ngTemplateOutlet", Ye)("ngTemplateOutletContext", n.VKq(9, Bs, !ce.scannedDispenseCode && !ce.errorScan && ce.isPreparedExist)), n.xp6(1), n.Q6J("ngTemplateOutlet", Tt)("ngTemplateOutletContext", n.VKq(11, Bs, !!ce.errorScan)), n.xp6(1), n.Q6J("ngForOf", n.WLB(15, ah, n.DdM(13, Sc), n.DdM(14, Vu))), n.xp6(6), n.Q6J("ngIf", "preparation" === ce.injectionsMode)("ngIfElse", k);
    }
  }
  function Md(Te, $) {
    1 & Te && (n.TgZ(0, "div", 94)(1, "lu-preloader", 95), n._uU(2, "Загрузка"), n.qZA()());
  }
  function _u(Te, $) {
    1 & Te && (n.TgZ(0, "div", 97), n._UZ(1, "lu-svg-icon", 98), n.TgZ(2, "span"), n._uU(3, "Отсканируйте маркировку шприца, чтобы начать работу с назначением"), n.qZA()()), 2 & Te && (n.xp6(1), n.Q6J("size", 24));
  }
  function ju(Te, $) {
    if (1 & Te && n.YNc(0, _u, 4, 1, "div", 96), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw();
      n.Q6J("ngIf", k && "issuing" === ce.injectionsMode);
    }
  }
  function Xu(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Отсканированный препарат назначен на другой период суток"), n.qZA());
  }
  function Xd(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Отсканированный препарат назначен на другой период суток"), n.qZA());
  }
  function Zu(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 100), n._UZ(1, "lu-svg-icon", 18), n.YNc(2, Xu, 2, 0, "span", 6), n.YNc(3, Xd, 2, 0, "span", 6), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("size", 24), n.xp6(1), n.Q6J("ngIf", "wrongTime" === k.errorScan), n.xp6(1), n.Q6J("ngIf", "notFound" === k.errorScan);
    }
  }
  function kp(Te, $) {
    if (1 & Te && n.YNc(0, Zu, 4, 3, "div", 99), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw();
      n.Q6J("ngIf", k && "issuing" === ce.injectionsMode);
    }
  }
  function hd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 103), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2).$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.utilizedMedicamentModal([Ye]));
      }), n._UZ(1, "lu-svg-icon", 109), n.TgZ(2, "span"), n._uU(3, "Утилизировать"), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(3);
      n.Q6J("disabled", k.isActionPanelDisable), n.xp6(1), n.Q6J("size", 16);
    }
  }
  function Td(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Начать выполнение"), n.qZA());
  }
  function yl(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Выполнить"), n.qZA());
  }
  function sd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "button", 103), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.patientRefuse([Ye]));
      }), n._UZ(2, "lu-svg-icon", 104), n.TgZ(3, "span"), n._uU(4, "Отказ пациента"), n.qZA()(), n.YNc(5, hd, 4, 2, "button", 105), n.TgZ(6, "button", 106), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.issuingMedicament([Ye]));
      }), n.ynx(7, 107), n.YNc(8, Td, 2, 0, "span", 108), n.YNc(9, yl, 2, 0, "span", 108), n.BQk(), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw();
      n.xp6(1), n.Q6J("disabled", ce.isActionPanelDisable), n.xp6(1), n.Q6J("size", 24), n.xp6(3), n.Q6J("ngIf", !k.base), n.xp6(1), n.Q6J("disabled", ce.isActionPanelDisable), n.xp6(1), n.Q6J("ngSwitch", ce.coerceState(k)), n.xp6(1), n.Q6J("ngSwitchCase", "active"), n.xp6(1), n.Q6J("ngSwitchCase", "completed");
    }
  }
  function tl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 106), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.issuingMedicament([Ye]));
      }), n._UZ(1, "lu-svg-icon", 110), n.TgZ(2, "span"), n._uU(3, "Завершить выполнение"), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("disabled", k.isActionPanelDisable), n.xp6(1), n.Q6J("size", 16);
    }
  }
  const Ie = function (Te) {
    return {
      "issuing-action-panel-tablet": Te
    };
  };
  function ft(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 101), n.YNc(1, sd, 10, 7, "ng-container", 0), n.YNc(2, tl, 4, 2, "ng-template", null, 102, n.W1O), n.qZA()), 2 & Te) {
      const k = $.$implicit,
        ce = n.MAs(3),
        Ye = n.oxw();
      n.Q6J("ngClass", n.VKq(3, Ie, Ye.isTablet)), n.xp6(1), n.Q6J("ngIf", k.status.toLowerCase() !== Ye.statuses.executing)("ngIfElse", ce);
    }
  }
  function rn(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 111), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2).$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.utilizedMedicamentModal(Ye));
      }), n._UZ(1, "lu-svg-icon", 115), n.TgZ(2, "span"), n._uU(3, "Утилизировать"), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(3);
      n.Q6J("disabled", k.isActionPanelDisable), n.xp6(1), n.Q6J("size", 16);
    }
  }
  function En(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Начать выполнение"), n.qZA());
  }
  function Kn(Te, $) {
    1 & Te && (n.TgZ(0, "span"), n._uU(1, "Выполнить"), n.qZA());
  }
  function Uo(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "button", 111), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.patientRefuse(Ye));
      }), n._UZ(2, "lu-svg-icon", 112), n.TgZ(3, "span"), n._uU(4, "Отказ пациента"), n.qZA()(), n.YNc(5, rn, 4, 2, "button", 113), n.TgZ(6, "button", 114), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.issuingMedicament(Ye));
      }), n.ynx(7, 107), n.YNc(8, En, 2, 0, "span", 108), n.YNc(9, Kn, 2, 0, "span", 108), n.BQk(), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw();
      n.xp6(1), n.Q6J("disabled", ce.isActionPanelDisable), n.xp6(1), n.Q6J("size", 24), n.xp6(3), n.Q6J("ngIf", !k[0].base), n.xp6(1), n.Q6J("disabled", ce.isActionPanelDisable), n.xp6(1), n.Q6J("ngSwitch", ce.coerceState(k[0])), n.xp6(1), n.Q6J("ngSwitchCase", "active"), n.xp6(1), n.Q6J("ngSwitchCase", "completed");
    }
  }
  function Vr(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 114), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw();
        return n.KtG(Tt.issuingMedicament(Ye));
      }), n._UZ(1, "lu-svg-icon", 110), n.TgZ(2, "span"), n._uU(3, "Завершить выполнение"), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("disabled", k.isActionPanelDisable), n.xp6(1), n.Q6J("size", 16);
    }
  }
  const ea = function (Te) {
    return {
      "issuing-action-panel__adaptive-margin": Te
    };
  };
  function Zs(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 101), n.YNc(1, Uo, 10, 7, "ng-container", 0), n.YNc(2, Vr, 4, 2, "ng-template", null, 102, n.W1O), n.qZA()), 2 & Te) {
      const k = $.$implicit,
        ce = n.MAs(3),
        Ye = n.oxw();
      n.Q6J("ngClass", n.VKq(3, ea, Ye.isTablet)), n.xp6(1), n.Q6J("ngIf", k[0].status.toLowerCase() !== Ye.statuses.executing)("ngIfElse", ce);
    }
  }
  function xl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "app-tablet-scanner-widget", 116), n.NdJ("qrCodeScanned", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.qrCodeScanned(Ye));
      })("closeSearch", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.handleScanQRDialog(!1));
      }), n.qZA(), n.TgZ(2, "app-tablet-scanner-widget", 116), n.NdJ("qrCodeScanned", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.qrUtilizedScannerHandle(Ye));
      })("closeSearch", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.isScannerUtilizedVisible = !1);
      }), n.TgZ(3, "div", 117), n._UZ(4, "lu-svg-icon", 18), n.TgZ(5, "span"), n._uU(6, " Отсканируйте этикетку лекарственного препарата для подтверждения утилизации "), n.qZA()()(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("disabled", !k.isScannerVisible)("searchWidgetParams", k.searchWidgetParams), n.xp6(1), n.Q6J("disabled", !k.isScannerUtilizedVisible)("searchWidgetParams", k.searchUtilizedWidgetParams), n.xp6(2), n.Q6J("size", 24);
    }
  }
  let Ec = ((Lf = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs, ia) {
      this.modalRef = $, this.data = k, this.activeMedicamentsModuleService = ce, this.breakpointObserver = Ye, this.warehouseService = Tt, this.userContextService = ai, this.cdr = Zi, this.modalService = Po, this.messageService = fo, this.reserveService = Wr, this.injectionsService = Cs, this.qrScannerService = ia, this.isInjectionMode = !1, this.isTablet = !1, this.periodTranslations = {
        morning: "Утро",
        day: "День",
        evening: "Вечер",
        night: "Ночь"
      }, this.flatMedsBySlots = [], this.isSymptomatically = !1, this.isScannerVisible = !1, this.isScannerUtilizedVisible = !1, this.statuses = {
        worked: "injection__in_work",
        prepared: "prepared",
        deleted: "deleted",
        assigned: "assigned",
        utilized: "utilized",
        damaged: "damaged",
        completed: "completed",
        systematically: "systematically",
        executing: "executing"
      }, this.isUserAllowExecution = !1, this.isOtherMedExisting = !1, this.searchWidgetParams = {
        header: "Выдача ЛП",
        subHeader: "Отсканируйте qr-код инъекции",
        isSearchAllowed: !1,
        mode: "qrcode"
      }, this.searchUtilizedWidgetParams = {
        header: "Подтверждение утилизации",
        subHeader: null,
        isSearchAllowed: !1,
        mode: "qrcode"
      }, this.isActionPanelDisable = !1, this.getInjectionsStatusLabelRu = Re.jo, this.getDuration = So, this.isSymptomatically = k.slot && k.slot.status && "SYSTEMATICALLY" === k.slot.status, this.isSymptomatically ? k.injectionMedicaments = k.injectionMedicaments.filter(nl => nl.assignmentCompositionUid === k.slot.assignmentCompositionUid && nl.slots.every(({
        status: Yl
      }) => "SYSTEMATICALLY" === Yl)).map(nl => ({
        ...nl,
        slots: [nl.slots[0]]
      })) : (k.injectionMedicaments = k.injectionMedicaments.filter(Yl => !Yl.slots.every(({
        status: uc
      }) => "SYSTEMATICALLY" === uc)), this.data.medicine.medicationDispenses.find(({
        code: Yl
      }) => Yl === this.data.slot.code).status.toLowerCase() === this.statuses.assigned && (k.injectionMedicaments = k.injectionMedicaments.filter(({
        status: Yl
      }) => Yl.toLowerCase() === this.statuses.assigned))), this.isInjectionMode = "injections" === this.activeMedicamentsModuleService.activeArm && !!k.injectionMedicaments;
      const Ls = this.data.injectionMedicaments.map(({
        assignmentCompositionUid: nl
      }) => nl);
      this.assignedMedications = this.data.assignedMedications.filter(nl => Ls.includes(nl.assignmentCompositionUid));
    }
    get isDebugMode() {
      return this.injectionsService.isDebugMode;
    }
    ngOnInit() {
      this.setStatuses(), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
        this.isTablet = $.matches, this.cdr.markForCheck();
      }), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
        this.isUserAllowExecution = $.rightCodes.includes("NURSE_EXECUTION"), this.userInfo = {
          dept: $.department?.fullName,
          deptId: $.department?.id,
          empId: $.employeeId,
          postId: $.jobTitle?.id,
          position: $.jobTitle?.name,
          snils: $.employee?.identities?.snils,
          workplaceId: $.employee?.workplace.id,
          doctorJob: $.jobTitle?.name,
          doctorName: `${$.lastName} ${$.firstName} ${$.secondName}`
        }, this.warehouses$ = this._loadWarehouses();
      }), this.startScanner(), this.qrScannerService.scan$.pipe((0, Xn.t)(this)).subscribe(({
        value: $
      }) => this._handleScan($));
    }
    isAllowExecuting($) {
      return this.isUserAllowExecution && $.status.toLowerCase() !== this.statuses.completed && $.code === this.scannedDispenseCode;
    }
    _handleScan($) {
      const k = this.flatMedsBySlots.find(({
        code: ce
      }) => ce === $);
      k ? [this.statuses.prepared, this.statuses.executing].includes(k?.status.toLowerCase()) && (this.scannedDispenseCode = $, this.errorScan = null) : (this.flatMedsBySlots.some(({
        medicationDispenses: Ye
      }) => Ye.some(({
        code: Tt
      }) => Tt === $)), this.errorScan = "wrongTime"), this.cdr.detectChanges();
    }
    startScanner() {
      this.qrScannerService.start({
        maxGapMs: 80,
        maxAverageGapMs: 35,
        idleFinishMs: 120,
        ignoreEditableTargets: !0
      });
    }
    tempScan($) {
      this.scannedDispenseCode = Array.isArray($) ? $[0].code : $.code;
    }
    coerceState($) {
      return ["струйно", "капельно", "инфузомат"].some(ce => $.method.includes(ce)) && $.status.toLowerCase() !== this.statuses.executing ? "active" : "completed";
    }
    setStatuses() {
      this.preparedInjectionMedicaments$ = (this.isSymptomatically ? this.getPreparedSymptomaticInjectionMedicaments$() : this.getPreparedInjectionMedicaments$()).pipe((0, m.b)($ => {
        const k = $.periodGroup.singleMedicaments.length || $.periodGroup.compositeMedicaments.length ? $.periodGroup : $.timeGroup;
        this.selectedMedicine = k.singleMedicaments?.[0] ?? k.compositeMedicaments?.[0]?.[0], this.selectedSlot = this.selectedMedicine.slots[0], this.selectedAssignedMedicine = this.getAssignedMedicine(this.selectedMedicine), this.injectionsMode = this.flatMedsBySlots.some(ce => this.isSymptomatically ? this._symptomaticStatus(ce) : [this.statuses.prepared, this.statuses.completed].includes(ce.status.toLowerCase())) ? "issuing" : "preparation";
      }));
    }
    getCompositeStatus($) {
      return $.some(({
        status: k
      }) => k === this.statuses.worked) ? this.statuses.worked : $[0].status.toLowerCase();
    }
    setInitialDispense() {
      this.cdr.detectChanges(), this.dispensingPanel.selectAssignedMedication(this.selectedAssignedMedicine);
    }
    selectMedicine($) {
      this.selectedMedicine = $, this.cdr.detectChanges(), this.dispensingPanel && (this.selectedAssignedMedicine = this.getAssignedMedicine($), this.dispensingPanel.selectAssignedMedication(this.selectedAssignedMedicine));
    }
    isItemSelected($) {
      return this.selectedMedicine.id === $.id && this.selectedMedicine.code === $.code && this.scannedDispenseCode !== $.code && [this.statuses.assigned, "base", "base__adaptive"].includes($.status.toLowerCase());
    }
    isShowDispensingPanel($) {
      return $.some(({
        id: k,
        code: ce
      }) => k === this.selectedMedicine.id && ce === this.selectedMedicine.code) && ![this.statuses.worked, this.statuses.deleted, this.statuses.prepared, this.statuses.completed, this.statuses.executing].includes(this.selectedMedicine.status.toLowerCase()) && !this.data.injectionMedicaments.some(({
        status: k
      }) => [this.statuses.prepared, this.statuses.completed].includes(k.toLowerCase()));
    }
    isAllowCompletePreparation($) {
      const k = [...$.periodGroup.compositeMedicaments, ...$.timeGroup.compositeMedicaments],
        ce = [...$.periodGroup.singleMedicaments, ...$.timeGroup.singleMedicaments];
      return k.filter(Ye => ![this.statuses.deleted, this.statuses.damaged, this.statuses.utilized].includes(Ye[0].status.toLowerCase())).every(Ye => Ye.every(({
        status: Tt
      }) => Tt.toLowerCase() === this.statuses.worked)) && ce.filter(({
        status: Ye
      }) => ![this.statuses.deleted, this.statuses.damaged, this.statuses.utilized, "base__adaptive", "base"].includes(Ye.toLowerCase())).every(({
        status: Ye
      }) => Ye.toLowerCase() === this.statuses.worked);
    }
    getFlatMedicaments($) {
      return [...$.periodGroup.singleMedicaments, ...$.timeGroup.singleMedicaments, ...$.periodGroup.compositeMedicaments, ...$.timeGroup.compositeMedicaments].map(k => Array.isArray(k) ? k[0] : k).filter(k => [this.statuses.worked, "base", "base__adaptive"].includes(k.status.toLowerCase()));
    }
    completedPreparation($) {
      this.modalRef.close(this.getFlatMedicaments($));
    }
    _symptomaticStatus($) {
      const k = $.slots.find(ce => !!ce.code)?.code;
      return k ? $.medicationDispenses.find(({
        code: ce
      }) => ce === k)?.status?.toLowerCase() : this.statuses.systematically;
    }
    getPreparedSymptomaticInjectionMedicaments$() {
      const $ = ri.Rt.newGuid(),
        k = this.data.injectionMedicaments;
      return this.flatMedsBySlots = [...k], this.reserveService.getReservesByDispenseId(null, k[0].assignmentCompositionUid, this.data.slot.planningDate.split("T")[0]).pipe((0, q.U)(ce => k.map(Ye => {
        if (Ye.deleted) return {
          ...Ye,
          status: this.statuses.deleted,
          selectedAmount: this.getAssignedMedicine(Ye).orderedAmount
        };
        if (Ye.base) return {
          ...Ye,
          status: Ye.status.toLowerCase() === this.statuses.prepared ? this.statuses.prepared : this.isTablet ? "base__adaptive" : "base",
          selectedAmount: this.getAssignedMedicine(Ye).orderedAmount
        };
        if (!ce || !ce.length) return {
          ...Ye,
          code: $,
          status: this.statuses.assigned
        };
        const Tt = ce.find(ai => ai.medNamesId === Ye.otnUid);
        return {
          ...Ye,
          code: Tt.dispenseCode,
          status: this._symptomaticStatus(Ye) === this.statuses.prepared ? this.statuses.prepared : this.statuses.worked,
          selectedAmount: Tt.pharmaAmountRound ?? this.getAssignedMedicine(Ye).orderedAmount,
          reserveInfo: Tt
        };
      })), (0, M.h)(ce => ce && ce.length > 0), (0, q.U)(ce => {
        const Ye = ce.length > 1;
        return {
          timeGroup: {
            singleMedicaments: Ye ? [] : [...ce],
            compositeMedicaments: Ye ? [[...ce]] : []
          },
          periodGroup: {
            period: null,
            singleMedicaments: [],
            compositeMedicaments: []
          }
        };
      }));
    }
    getPreparedInjectionMedicaments$() {
      const $ = new Set();
      let k = !1;
      const ce = this.data.injectionMedicaments.flatMap(Tt => Tt.slots.map(({
        time: ai,
        code: Zi,
        status: Po
      }) => ($.add(Zi), {
        ...Tt,
        status: Po,
        time: ai,
        code: Zi
      }))).sort((Tt, ai) => (Tt.time ?? "").localeCompare(ai.time ?? ""));
      this.flatMedsBySlots = [...ce];
      const Ye = Array.from($);
      return this.reserveService.getReservesByDispenseIds(Ye).pipe((0, q.U)(Tt => Ye.map(ai => ce.filter(({
        code: Po
      }) => Po === ai).map(Po => {
        if (k || (k = [this.statuses.prepared, this.statuses.completed].includes(Po.status.toLowerCase())), Po.deleted) return {
          ...Po,
          status: this.statuses.deleted,
          selectedAmount: this.getAssignedMedicine(Po).orderedAmount
        };
        if (Po.base) return {
          ...Po,
          status: Po.status.toLowerCase() === this.statuses.prepared ? this.statuses.prepared : this.isTablet ? "base__adaptive" : "base",
          selectedAmount: this.getAssignedMedicine(Po).orderedAmount
        };
        const fo = Tt[Po.code]?.find(Wr => Wr.medNamesId === Po.otnUid);
        return fo ? {
          ...Po,
          status: [this.statuses.prepared, this.statuses.completed].includes(Po.status.toLowerCase()) ? Po.status.toLowerCase() : this.statuses.worked,
          selectedAmount: fo.pharmaAmountRound ?? this.getAssignedMedicine(Po).orderedAmount,
          reserveInfo: fo
        } : {
          ...Po,
          status: Po.status
        };
      })).map(ai => ({
        meds: ai,
        isComposite: ai.length > 1
      }))), (0, q.U)(Tt => {
        const ai = {
          timeGroup: {
            singleMedicaments: [],
            compositeMedicaments: []
          },
          periodGroup: {
            singleMedicaments: [],
            compositeMedicaments: [],
            period: null
          },
          otherTimeGroup: {
            singleMedicaments: [],
            compositeMedicaments: []
          },
          otherPeriodGroup: {
            singleMedicaments: [],
            compositeMedicaments: [],
            period: null
          }
        };
        return Tt.forEach(Zi => {
          const Po = Zi.meds[0].slots[0].dayTimePeriod;
          this.isOtherMedExisting = k && Zi.meds.some(({
            status: Wr
          }) => ![this.statuses.prepared, this.statuses.completed].includes(Wr.toLowerCase()));
          const fo = this.isOtherMedExisting ? Po ? ai.otherPeriodGroup : ai.otherTimeGroup : Po ? ai.periodGroup : ai.timeGroup;
          Zi.isComposite ? fo.compositeMedicaments.push(Zi.meds) : fo.singleMedicaments.push(Zi.meds[0]), Po && (fo.period = Po);
        }), ai.timeGroup.singleMedicaments.sort((Zi, Po) => (Zi.time ?? "").localeCompare(Po.time ?? "")), ai.timeGroup.compositeMedicaments.sort((Zi, Po) => (Zi[0].time ?? "").localeCompare(Po[0].time ?? "")), ai;
      }));
    }
    parseOrderedDose($) {
      if (!$.orderedDose) return null;
      const ce = /^(\d+(?:\.\d+)?)\s+([a-zA-Z\u0430-\u044f\u0410-\u042f.]+)(?:\s+\[(?:\d+(?:\.\d*)?|\.\d+)\s+(.+)\])?$/.exec($.orderedDose),
        Ye = this.dispensingPanel?.selectedStockMedication;
      if (ce) {
        let Tt = $.unitOfPacking;
        return $.otnUid === Ye?.mnnId && Tt !== Ye?.fillingUnit && (Tt = Ye?.fillingUnit), {
          dosage: ce[1],
          unit: ce[2],
          quantity: ce[3],
          form: Tt
        };
      }
      return null;
    }
    getNameWithDose($) {
      const k = this.getAssignedMedicine($),
        ce = this.parseOrderedDose(k);
      return `${k.name} ${ce?.form ?? ""}  ${k.dose / k.orderedAmount} ${ce?.unit || "мг"}`;
    }
    trackByMed($, k) {
      return $;
    }
    get isPreparedExist() {
      return this.data.injectionMedicaments.some($ => $.medicationDispenses.filter(({
        dayTimePeriod: k
      }) => k === this.data.slot.dayTimePeriod).every(({
        status: k
      }) => k.toLowerCase() === this.statuses.prepared));
    }
    prepareMed($) {
      $.reservePharmaUnitCommand.dispenseCode = this.selectedMedicine.code, $.reservePharmaUnitCommand.assignmentCompositionUid = this.selectedMedicine.assignmentCompositionUid, $.reservePharmaUnitCommand.careCaseId = this.data.patient.careCaseId, $.reservePharmaUnitCommand.reservationDate = this.data.slot.planningDate.split("T")[0], this.reserveService.reservePharmaUnit($.reservePharmaUnitCommand).pipe((0, Xn.t)(this)).subscribe(k => {
        this.selectedMedicine.status = k ? this.statuses.worked : this.selectedMedicine.status, this.cdr.detectChanges(), $.print && this.printLabel([this.selectedMedicine]);
      });
    }
    printSetLabel() {
      const $ = {
        patientFio: this.data.patient.fio,
        age: this.data.patient.age,
        birthday: Gi()(this.data.patient.birthDate).format("DD.MM.YYYY"),
        medCardNumber: this.data.patient.cardNumber,
        ward: this.data.patient.palata,
        careCaseId: this.data.patient.careCaseId,
        bed: ""
      };
      this.modalService.open(new jt.X(zl), {
        data: $,
        disableClose: !0,
        panelClass: "openLabelPrintDialog"
      });
    }
    getAssignedMedicine($) {
      return this.assignedMedications.find(k => $.id === k.id);
    }
    isCompositePrepared($) {
      return $.every(({
        status: k
      }) => k === this.statuses.worked);
    }
    getDispensingQuantity($) {
      return ["base", "base__adaptive", this.statuses.worked, this.statuses.prepared, this.statuses.completed].includes($.status) ? $.selectedAmount ?? this.getAssignedMedicine($).orderedAmount : 0;
    }
    printLabel($) {
      const k = {
        patientFio: this.data.patient.fio,
        age: this.data.patient.age,
        birthday: Gi()(this.data.patient.birthDate).format("DD.MM.YYYY"),
        medCardNumber: this.data.patient.cardNumber,
        ward: this.data.patient.palata,
        careCaseId: this.data.patient.careCaseId,
        bed: "",
        medicine: $
      };
      this.modalService.open(new jt.X(Ml), {
        data: k,
        width: "648px",
        disableClose: !0,
        panelClass: "openLabelPrintDialog"
      });
    }
    patientRefuse($) {
      this.injectionsService.patientRefuse(this.data, $).pipe((0, Xn.t)(this)).subscribe(() => {
        $ = $.map(k => (k.status = "CANCELLED", k));
      });
    }
    issuingMedicament($) {
      const k = $[0].medicationDispenses.find(({
        code: ce
      }) => ce === $[0].code)?.resultCompositionUid || null;
      this.isActionPanelDisable = !0, this.injectionsService.issuingOrUtilizationMedicament(this.data, $, "", "DISPENSE", this.coerceState($[0]), k).pipe((0, Xn.t)(this), (0, Go.K)(ce => (console.error(ce), this.messageService.error(`\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u043e\u0448\u0438\u0431\u043a\u043e\u0439! ${ce?.error.message || ""}`, {
        marginBottom: 44
      }), (0, hn._)(() => ce))), (0, tn.x)(() => {
        this.isActionPanelDisable = !1, this.cdr.markForCheck();
      })).subscribe(ce => {
        const Ye = {
          active: "EXECUTING",
          completed: "COMPLETED"
        };
        $ = $.map(Tt => (Tt.status = Ye[this.coerceState(Tt)], Tt)), this.cdr.detectChanges(), Io.merge($, ce);
      });
    }
    utilizedAdaptiveMedicamentModal($) {
      this.modalService.open(new jt.X(Kc), {
        width: "512px",
        disableClose: !0
      }).afterClose().pipe((0, Xn.t)(this), (0, M.h)(k => !!k)).subscribe(k => {
        this.adaptiveUtilizedRemark = k, this.adaptiveUtilizedMedicine = [...$], this.isScannerUtilizedVisible = !0, this.cdr.markForCheck();
      });
    }
    utilizedMedicamentModal($) {
      this.isTablet ? this.utilizedAdaptiveMedicamentModal($) : (this.qrScannerService.stop(), this.modalService.open(new jt.X(Kc), {
        width: "512px",
        disableClose: !0
      }).afterClose().pipe((0, Xn.t)(this), (0, M.h)(k => !!k), (0, ut.w)(k => this.modalService.open(new jt.X(Bi), {
        width: "448px",
        data: {
          code: $[0].code
        },
        disableClose: !0
      }).afterClose().pipe((0, M.h)(ce => ce), (0, ut.w)(() => this._utilizationMedicament($, k)))), (0, tn.x)(() => this.startScanner())).subscribe(k => {}));
    }
    qrUtilizedScannerHandle($) {
      this.adaptiveUtilizedMedicine[0].code === $ ? this._utilizationMedicament(this.adaptiveUtilizedMedicine, this.adaptiveUtilizedRemark).pipe((0, Xn.t)(this)).subscribe() : this.messageService.warning("QR код не принадлежит выбранному медикаменту!");
    }
    _utilizationMedicament($, k) {
      return this.injectionsService.issuingOrUtilizationMedicament(this.data, $, k, "UTILIZATION");
    }
    _loadWarehouses() {
      return this.warehouseService.getUserWarehouses({
        deptId: this.userInfo.deptId,
        postId: this.userInfo.postId
      });
    }
    qrCodeScanned($) {
      this._handleScan($);
    }
    handleScanQRDialog($) {
      this.isScannerVisible = $, this.cdr.markForCheck();
    }
  }).ɵfac = function (k) {
    return new (k || Lf)(n.Y36(Xs.Rn, 12), n.Y36(ma.UM), n.Y36(Yo.w), n.Y36(Gn.Yg), n.Y36(pi), n.Y36(qo.oL), n.Y36(n.sBO), n.Y36(aa.ap), n.Y36(wo.Jv), n.Y36(dn.iW), n.Y36(sc), n.Y36(Yt.w));
  }, Lf.ɵcmp = n.Xpm({
    type: Lf,
    selectors: [["injections-issue-modal"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(lu, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.dispensingPanel = Ye.first);
      }
    },
    features: [n._Bn([Yt.w])],
    decls: 13,
    vars: 5,
    consts: [[4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["scanMessageTemplate", ""], ["scanErrorTemplate", ""], ["singleIssuingActionPanel", ""], ["compositeIssuingActionPanel", ""], [4, "ngIf"], [1, "dialog-container"], [3, "patient", "isTablet", "close"], [1, "dialog-body"], [1, "dialog-body-inner"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], ["basePanel", ""], ["dispensingTemplate", ""], [1, "dialog-footer"], ["issuingPanel", ""], [1, "message-panel", "message-panel__other-med"], ["icon", "warning", 3, "size"], ["class", "section", 4, "ngIf"], [1, "section"], [1, "section-title"], ["lu-text", "", 4, "ngIf"], ["lu-text", "", "style", "height: 24px", 4, "ngIf"], [1, "meds-wrapper"], ["class", "meds-table", 4, "ngIf"], ["lu-text", ""], ["lu-text", "", 2, "height", "24px"], ["class", "meds-header", 3, "ngClass", 4, "ngIf"], ["class", "meds-header", 4, "ngIf"], [1, "meds-header", 3, "ngClass"], [1, "cell", "col-med-name"], ["class", "cell col-selected-qty", 4, "ngIf"], [1, "cell", "col-ordered-qty"], [1, "cell", "col-ordered-dose"], [1, "cell", "col-selected-qty"], [1, "cell", "col-status"], [1, "meds-header"], [1, "cell", "col-status", 2, "margin-left", "-8px"], [1, "meds-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "margin-top: 24px", 4, "ngIf"], [1, "line"], [1, "meds-column-tablet", 3, "ngClass"], [1, "meds-row", 3, "ngClass", "click"], [1, "adaptive-name-ship"], [1, "adaptive-name-ship__row"], [1, "vertical-border"], [3, "click", 4, "ngIf"], [1, "cell", "col-status", 2, "margin-left", "-14px"], ["lu-text", "", 1, "adaptive-status", 3, "ngClass"], [3, "click"], [2, "margin-top", "24px"], [4, "ngTemplateOutlet"], [1, "composite-panel"], [1, "composite-panel-inner"], [1, "composite-panel-inner__header"], [1, "composite-panel-inner__header__title"], [1, "composite-panel-inner__header__info", 2, "height", "max-content"], [1, "adaptive-header-info"], ["lu-text", "", 1, "status-chip", 3, "ngClass"], [1, "dot", 2, "margin-top", "12px"], ["lu-text", "", "color", "muted"], [1, "adaptive-header-info-row"], [2, "width", "100%"], ["class", "meds-header-adaptive", 4, "ngIf"], [2, "margin-top", "12px"], [1, "composite-panel__action"], ["lu-button-raised", "", 3, "click", 4, "ngIf"], [1, "meds-header-adaptive"], [1, "composite-table-adaptive-header"], [1, "cell", 2, "width", "288px", 3, "ngClass"], ["class", "cell col-status", 4, "ngIf"], [1, "meds-column-composite-adaptive"], [1, "meds-row", 2, "height", "max-content", 3, "ngClass", "click"], [1, "adaptive-name-ship", "adaptive-name", 2, "width", "288px", 3, "ngClass"], [1, "cell"], [1, "cell", "col-selected-qty", 3, "ngStyle"], ["class", "cell col-status", "style", "margin-left: -12px", 4, "ngIf"], [1, "cell", "col-status", 2, "margin-left", "-12px"], ["lu-button-raised", "", 3, "click"], [1, "composite-panel-inner__header__info"], [1, "dot"], ["style", "width: 100px", 3, "click", 4, "ngIf"], ["style", "margin-top: 24px;", 4, "ngIf"], [2, "width", "100px", 3, "click"], [1, "base-panel"], [3, "stockLocations", "isComposite", "data", "availableSlots", "mode", "onInjectPrepare", "onComponentIsReady"], ["dispensingPanel", ""], ["lu-button-outer", "", 1, "footer-button", "footer-button__width-button", 2, "padding-left", "8px", 3, "click"], ["icon", "print", 1, "footer-button__icon-margin", 3, "size"], ["lu-button-raised", "", 1, "footer-button", 3, "disabled", "click"], [2, "padding-left", "8px"], ["lu-button-raised", "", 1, "footer-button", 3, "click"], [1, "loading-panel"], ["size", "inline"], ["class", "message-panel message-panel__need-scan", 4, "ngIf"], [1, "message-panel", "message-panel__need-scan"], ["icon", "info", 3, "size"], ["class", "message-panel message-panel__error", 4, "ngIf"], [1, "message-panel", "message-panel__error"], [1, "issuing-action-panel", 3, "ngClass"], ["executingPanel", ""], ["lu-button-link", "", "color", "red", 3, "disabled", "click"], ["icon", "recent", 3, "size"], ["lu-button-link", "", "color", "red", 3, "disabled", "click", 4, "ngIf"], ["lu-button-link", "", "color", "blue", 3, "disabled", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["icon", "delete", 3, "size"], ["icon", "mark-done", 3, "size"], ["lu-button-outer", "", "color", "red", 3, "disabled", "click"], ["icon", "recent", 1, "issuing-action-panel__tablet-button-margin", 3, "size"], ["lu-button-outer", "", "color", "red", 3, "disabled", "click", 4, "ngIf"], ["lu-button-outer", "", "color", "blue", 1, "issuing-action-panel__tablet-button", 3, "disabled", "click"], ["icon", "delete", 1, "issuing-action-panel__tablet-button-margin", 3, "size"], [3, "disabled", "searchWidgetParams", "qrCodeScanned", "closeSearch"], [1, "message-panel", "message-panel__utilized-med"]],
    template: function (k, ce) {
      if (1 & k && (n.YNc(0, Qd, 16, 18, "ng-container", 0), n.ALo(1, "async"), n.YNc(2, Md, 3, 0, "ng-template", null, 1, n.W1O), n.YNc(4, ju, 1, 1, "ng-template", null, 2, n.W1O), n.YNc(6, kp, 1, 1, "ng-template", null, 3, n.W1O), n.YNc(8, ft, 4, 5, "ng-template", null, 4, n.W1O), n.YNc(10, Zs, 4, 5, "ng-template", null, 5, n.W1O), n.YNc(12, xl, 7, 5, "ng-container", 6)), 2 & k) {
        const Ye = n.MAs(3);
        n.Q6J("ngIf", n.lcZ(1, 3, ce.preparedInjectionMedicaments$))("ngIfElse", Ye), n.xp6(12), n.Q6J("ngIf", ce.isTablet);
      }
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Di.tP, Di.PC, Di.RF, Di.n9, Ks.mc, qr.d, Ci.q, Kt.NZ, Ds.O, Hs, Wi, Di.Ov],
    styles: ["@charset \"UTF-8\";.dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:calc(100vh - 116px);background-color:#fff;box-sizing:border-box;border-radius:4px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]{height:100vh}}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]{position:relative;flex:1;padding:16px 0 10px;overflow:hidden}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]{height:calc(100vh - 144px)}}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]{padding:24px 0}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]{height:calc(100% - 70px);overflow-y:auto}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{margin-bottom:16px}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{margin-bottom:24px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin:0 16px 16px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;font-weight:600}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin:0 0 8px 24px!important;height:24px}}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin:0;padding:8px 16px 18px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]{width:100%;overflow-x:auto;box-sizing:border-box;height:calc(100% - 32px)}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]{margin-bottom:-24px!important}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-table[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;gap:32px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-table[_ngcontent-%COMP%]{gap:0;margin-bottom:24px;overflow-x:hidden}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .base-panel[_ngcontent-%COMP%]{width:calc(100% - 48px);height:80px;background-color:#f2f2f2;margin:0 24px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .base-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:32px;padding-right:24px;font-size:14px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:480px 120px 108px 120px 140px 120px auto;column-gap:24px;align-items:center;align-content:center;width:100%}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:24px;align-items:center;align-content:center}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .time-period-table[_ngcontent-%COMP%]{grid-template-columns:480px 94px 120px 108px 120px 140px 120px auto}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%]{font-size:13px;color:#757575;height:50px;font-weight:400;line-height:18px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:end;gap:24px;padding-left:16px;height:36px!important;margin-bottom:8px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:0}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(100% - 48px);justify-self:center;background-color:#fafafa;border-radius:8px;border:1px dashed #cccccc;margin-left:24px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel[_ngcontent-%COMP%]{margin-left:16px;width:calc(100vw - 32px)!important;height:max-content;border:1px solid #E6E6E6}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:stretch}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header[_ngcontent-%COMP%]{padding-left:24px;padding-top:12px;display:flex;width:100%;flex-direction:column;justify-content:center;gap:12px;min-height:84px;height:max-content}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header[_ngcontent-%COMP%]{min-height:72px!important;height:max-content}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header__title[_ngcontent-%COMP%]{font-size:17px;font-weight:600}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header__title[_ngcontent-%COMP%]{font-size:15px;margin-left:-8px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header__info[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;align-items:center}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){font-size:15px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner__header__info[_ngcontent-%COMP%]{flex-direction:column;margin-left:-12px;height:max-content;margin-top:-4px;gap:0;width:100%}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{padding-left:24px;background-color:unset}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{width:calc(100vw - 32px);margin-left:12px;padding-left:12px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel-inner[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]:hover{background-color:#ecf6fb}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel__action[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin:16px 24px 24px 0}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .composite-panel__action[_ngcontent-%COMP%]{margin-right:16px!important}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]:hover{background-color:#fff8cc!important}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .scanned[_ngcontent-%COMP%]{background-color:#f2f2f2!important}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{background-color:#fff}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]:hover{background-color:#f2f2f2}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:24px;padding:12px 16px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:0!important}}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]{height:56px;font-weight:400;font-size:15px;line-height:24px;cursor:pointer}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;font-size:13px;line-height:18px}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{white-space:nowrap}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{color:#757575;font-size:13px;line-height:18px}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .meds-row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{font-size:14px;line-height:20px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{padding:16px 0;margin-left:24px;margin-right:24px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-med-name[_ngcontent-%COMP%]{flex-grow:0;width:313px;margin-left:unset;padding-left:24px;margin-right:8px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-med-name--mob[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start!important;gap:4px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-med-name--mob[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-med-name--mob[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:24px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-med-name--mob[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{height:15px;border-right:1px solid #ccc}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-selected-qty[_ngcontent-%COMP%]{min-width:80px;width:80px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-status[_ngcontent-%COMP%]{width:130px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .col-status[_ngcontent-%COMP%]{flex-grow:1;max-width:120px;padding-left:8px}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{display:flex;border-radius:2px;border:1px solid #ccc;background:#ffffff;color:#757575;font-weight:400;transition-property:background-color,border-color,color;transition-duration:.3s;transition-timing-function:ease;--lu-font-size: 13px !important;--lu-line-height: 20px !important;height:24px;width:86px;justify-content:center}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{padding:2px 8px;--lu-line-height: 18px !important;width:max-content}}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .injection__in_work[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .injection__prepared[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .injection__reject[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .prepared[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .executing[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .deleted[_ngcontent-%COMP%]{border:unset}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .injection__in_work[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .injection__prepared[_ngcontent-%COMP%]{color:#bf4905;background-color:#fff5b3}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%]{color:#346b07;background-color:#dff0c0}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .injection__reject[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .base__adaptive[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .assigned[_ngcontent-%COMP%]{color:#000;background-color:#d9d9d9}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]{width:217px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .base__adaptive[_ngcontent-%COMP%]{width:127px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .deleted[_ngcontent-%COMP%]{color:#aa2115;background-color:#fcd6ce;font-size:13px;width:121px}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .prepared[_ngcontent-%COMP%]{width:107px;background-color:#fff5b3;font-size:13px;color:#bf4905}.dialog-container[_ngcontent-%COMP%]   .dialog-body-inner[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .meds-wrapper[_ngcontent-%COMP%]   .executing[_ngcontent-%COMP%]{width:100px;background-color:#c2e8e8;color:#084d4d}.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:16px}.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1){width:296px!important}.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){width:220px}.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     div{height:40px!important;display:flex;flex-direction:row;justify-content:flex-start}.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .lu-button-wrapper{width:100%!important}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:16px;border-top:1px solid #e6e6e6;justify-content:space-between;width:100vw}.dialog-container[_ngcontent-%COMP%]   .dialog-footer.has-clear-button[_ngcontent-%COMP%]{justify-content:space-between}}@media (min-width: 961px){.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:24px;flex-shrink:0;display:flex;justify-content:flex-end;align-items:center;gap:16px;background-color:#fff;z-index:10}}.dialog-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:3px;height:3px;background-color:#000!important;border-radius:50%}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{opacity:.2}}.dialog-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{border:1px solid #e6e6e6;margin-left:24px;margin-bottom:24px;margin-top:24px}@media (max-width: 960px){.dialog-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{margin-top:unset!important;margin-bottom:unset!important}}.print[_ngcontent-%COMP%]{margin:0 24px;padding:24px;display:flex;justify-content:flex-end;background-color:#f2f2f2cc}.loading-panel[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.message-panel[_ngcontent-%COMP%]{height:48px;width:calc(100% - 48px);display:flex;flex-direction:row;gap:8px;align-items:center;justify-content:flex-start;border-radius:4px;padding-left:16px;margin:0 24px 16px}@media (max-width: 960px){.message-panel[_ngcontent-%COMP%]{width:calc(100% - 32px)!important;margin:0 16px 16px!important}}.message-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px!important;font-weight:400!important}.message-panel__need-scan[_ngcontent-%COMP%]{background-color:#dbf2fa}.message-panel__error[_ngcontent-%COMP%]{background-color:#fde4df}.message-panel__other-med[_ngcontent-%COMP%], .message-panel__utilized-med[_ngcontent-%COMP%]{background-color:#ffefd3;--lu-svg-icon-color: #ff941a}@media (max-width: 960px){.message-panel__utilized-med[_ngcontent-%COMP%]{width:100%!important;height:66px;margin:16px 0 0}}.adaptive-status[_ngcontent-%COMP%]{font-size:13px;padding-left:8px;padding-right:8px;width:max-content!important;margin-left:6px}.adaptive-name-ship[_ngcontent-%COMP%]{font-size:15px}.adaptive-name-ship[_ngcontent-%COMP%]   .adaptive-name[_ngcontent-%COMP%]{margin-left:-8px;height:max-content}.adaptive-name-ship__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;gap:12px;margin-top:4px}.vertical-border[_ngcontent-%COMP%]{border-left:1px solid #CCCCCC;width:0;height:15px;margin-top:2px}.adaptive-header-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;width:100%;flex-wrap:wrap}.adaptive-header-info-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.composite-table-adaptive-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:end;font-size:13px;line-height:18px;color:#757575;gap:24px;padding-right:16px;height:36px!important;margin-bottom:8px;margin-left:12px}.meds-row-composite-adaptive[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;gap:24px;align-items:start;align-content:center;padding-left:16px;width:calc(100vw - 32px)}.meds-column-composite-adaptive[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-left:-12px;height:max-content}.adaptive-margin[_ngcontent-%COMP%]{margin-bottom:-48px!important}.meds-header-adaptive[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:24px;margin-top:16px;padding-top:16px;padding-left:0!important;margin-bottom:-12px;height:max-content}.tablet-header-width[_ngcontent-%COMP%]{width:432px!important;max-width:432px!important}.issuing-action-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px;align-items:center;justify-content:flex-end;padding-right:24px}.issuing-action-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.issuing-action-panel__adaptive-margin[_ngcontent-%COMP%]{margin-right:0!important}.issuing-action-panel__tablet-button-margin[_ngcontent-%COMP%]{margin-left:-8px!important}.issuing-action-panel__tablet-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.footer-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:0;font-size:16px}.footer-button__width-button[_ngcontent-%COMP%]     div.lu-button-wrapper{min-width:296px!important;width:296px!important;margin-left:-8px}.footer-button__icon-margin[_ngcontent-%COMP%]{margin-left:-4px;margin-right:2px}.meds-column-tablet[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.issuing-action-panel-tablet[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px!important;margin-right:16px}"],
    changeDetection: 0
  }), Lf);
  Ec = (0, Se.gn)([(0, Xn.c)()], Ec);
  let Ya = ((yh = class {
    constructor($, k, ce, Ye, Tt) {
      this.modalService = $, this.patientDataService = k, this.breakpointObserver = ce, this.accountingDocumentService = Ye, this.luMessageService = Tt, this.isTablet = !1, this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe(ai => this.isTablet = ai.matches);
    }
    openWritingOffDialog($, k, ce) {
      return this.patientDataService.getModalData($, ce).pipe((0, st.q)(1), (0, ut.w)(Ye => {
        const Tt = this.isTablet ? "100%" : "calc(100% - 32px)",
          ai = this.isTablet ? "100%" : "calc(100% - 128px)";
        return this.modalService.open(new jt.X(gc), {
          data: {
            patient: Ye.patient,
            pillbox: Ye.pillbox,
            assignedMedications: Ye.assigned,
            stockMedications: Ye.stock,
            slot: ce
          },
          viewContainerRef: k,
          panelClass: "openWritingOffDialog",
          width: Tt,
          height: ai
        }).afterClose();
      }));
    }
    openWritingOffDialogWithData($, k) {
      return this.modalService.open(new jt.X(gc), {
        data: $,
        viewContainerRef: k,
        panelClass: "openWritingOffDialogWithData",
        width: this.isTablet ? "100vw" : "calc(100% - 32px)",
        height: this.isTablet ? "100vh" : "calc(100% - 128px)"
      }).afterClose();
    }
    openWritingOffInjectionDialogWithData($, k) {
      return this.modalService.open(new jt.X(Ec), {
        data: $,
        disableClose: !0,
        viewContainerRef: k,
        panelClass: "InjectionsIssueModalComponent",
        width: this.isTablet ? "100vw" : "calc(100% - 32px)",
        height: this.isTablet ? "100vh" : "calc(100% - 128px)"
      }).afterClose();
    }
    openLabelPrintDialog($, k) {
      return this.modalService.open(new jt.X($o), {
        data: $,
        viewContainerRef: k,
        panelClass: "openLabelPrintDialog",
        width: "auto",
        height: "auto"
      }).afterClose();
    }
    openPresenterModal($, k, ce) {
      const Ye = new d.x(),
        Tt = ce.createComponent(Qs);
      return Tt.instance.med = $, Tt.instance.patient = k, Tt.instance.close = () => {
        this.destroyComponent(Tt), Ye.next(), Ye.complete();
      }, Ye.asObservable();
    }
    openDispensingConfirmationModal($, k, ce, Ye) {
      const Tt = {
          type: $,
          patientName: k,
          med: ce,
          isWrittenOffFromWarehouse: !1
        },
        ai = Ye.resultCompositionUid.split(":")[0];
      return (Ye.resultCompositionUid && ["COMPLETED", "SYSTEMATICALLY"].includes(Ye.status) && !ce.base ? this.accountingDocumentService.getAccountingDocumentByDispenseId(ai).pipe((0, q.U)(Zi => ({
        ...Tt,
        isWrittenOffFromWarehouse: -100 !== Zi.state
      }))) : (0, qe.of)(Tt)).pipe((0, Go.K)(Zi => (this.luMessageService.error(Zi?.error?.message ?? "Ошибка запроса к сервису", {
        marginBottom: 44,
        autoClose: !0
      }), (0, hn._)(() => Zi))), (0, ut.w)(Zi => this.modalService.open(new jt.X(Ja), {
        data: Zi
      }).afterClose()), (0, M.h)(Zi => Zi));
    }
    openUtilizeConfirmationModal($) {
      const k = {
        number: $
      };
      return this.modalService.open(new jt.X(ka), {
        data: k
      }).afterClose().pipe((0, M.h)(ce => !!ce));
    }
    openPillboxIssueDialog($, k) {
      return this.modalService.open(new jt.X(al), {
        data: $,
        viewContainerRef: k,
        panelClass: "openPillboxIssueDialog",
        width: "calc(100% - 32px)",
        height: "calc(100% - 128px)"
      }).afterClose().pipe((0, M.h)(Ye => Ye));
    }
    openPillboxIssueDialogMob($, k) {
      return this.modalService.open(new jt.X(al), {
        data: $,
        viewContainerRef: k,
        panelClass: "openPillboxIssueDialog",
        width: "100vw",
        height: "100vh"
      }).afterClose().pipe((0, M.h)(Ye => Ye));
    }
    destroyComponent($) {
      $.destroy();
    }
  }).ɵfac = function (k) {
    return new (k || yh)(n.LFG(aa.ap), n.LFG(wr), n.LFG(Gn.Yg), n.LFG(dn.gy), n.LFG(wo.Jv));
  }, yh.ɵprov = n.Yz7({
    token: yh,
    factory: yh.ɵfac,
    providedIn: "root"
  }), yh);
  Ya = (0, Se.gn)([(0, Xn.c)()], Ya);
  var Zl = i(56539),
    ku = i(24810),
    mp = i(62804),
    Ed = i(13700),
    gp = i(43150),
    fd = i(70823),
    kn = i(39080),
    nn = i(32428),
    zt = i(64545);
  function Jn(Te, $) {
    if (1 & Te && n._UZ(0, "a", 21, 22), 2 & Te) {
      const k = n.MAs(1);
      n.Q6J("active", k.isActive);
    }
  }
  function Do(Te, $) {
    if (1 & Te && n._UZ(0, "a", 23, 24), 2 & Te) {
      const k = n.MAs(1);
      n.Q6J("active", k.isActive);
    }
  }
  function we(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 17)(2, "lu-tab-group", 18), n.NdJ("tabChange", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return Ye.onSearchChange(""), n.KtG(Ye.isSearchVisible = !1);
      }), n.YNc(3, Jn, 2, 1, "a", 19), n.YNc(4, Do, 2, 1, "a", 20), n.qZA()(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(3), n.Q6J("ngIf", k.currentUser.hasRoles("NURSE_PILL")), n.xp6(1), n.Q6J("ngIf", k.currentUser.hasRoles("NURSE_PILLBOXES"));
    }
  }
  function Bt(Te, $) {
    1 & Te && (n.ynx(0), n.TgZ(1, "span"), n._uU(2, "Инъекции"), n.qZA(), n.BQk());
  }
  function ve(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 28), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.toggleSearchInput(!0));
      }), n._UZ(1, "lu-svg-icon", 29), n.qZA();
    }
    2 & Te && (n.xp6(1), n.Q6J("size", 24));
  }
  function yt(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 36), 2 & Te && n.Q6J("size", 24);
  }
  function An(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 30)(1, "button", 31), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.toggleSearchInput(!1));
      }), n._UZ(2, "lu-svg-icon", 32), n.qZA(), n.TgZ(3, "lu-input-wrapper", 33), n.NdJ("afterClear", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.clearSearch());
      }), n.TgZ(4, "input", 34), n.NdJ("ngModelChange", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(2);
        return n.KtG(Tt.searchValue = Ye);
      })("ngModelChange", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(2);
        return n.KtG(Tt.onSearchChange(Ye));
      }), n.qZA(), n.YNc(5, yt, 1, 1, "lu-svg-icon", 35), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.xp6(2), n.Q6J("size", 24), n.xp6(1), n.Q6J("clearButton", !!k.searchValue), n.xp6(1), n.Q6J("ngModel", k.searchValue), n.xp6(1), n.Q6J("ngIf", !k.searchValue);
    }
  }
  function Un(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 25), n.YNc(1, ve, 2, 1, "button", 26), n.YNc(2, An, 6, 4, "div", 27), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngIf", !k.isSearchVisible), n.xp6(1), n.Q6J("ngIf", k.isSearchVisible);
    }
  }
  const tr = function () {
    return ["bottom-right"];
  };
  function Gr(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 37), n._UZ(1, "lu-progress-bar", 38), n.TgZ(2, "div", 39), n._uU(3), n.qZA()()), 2 & Te) {
      const k = n.oxw(),
        ce = n.MAs(9);
      n.Q6J("luTooltip", ce)("positions", n.DdM(9, tr))("maxWidth", 338), n.xp6(1), n.Q6J("color", "blue")("value", k.currentValue)("maxValue", k.totalValue)("progressType", "count"), n.xp6(2), n.AsE("", k.currentValue, " / ", k.totalValue, "");
    }
  }
  function Vo(Te, $) {
    1 & Te && (n.TgZ(0, "div", 40), n._uU(1, "Общее количество выдач лекарственных "), n._UZ(2, "br"), n._uU(3, " препаратов за сутки с 06:00 по 05:59 "), n.qZA());
  }
  const ta = function (Te, $, k) {
    return {
      "content-header__search-input-wrapper": Te,
      "content-header__search-input-helper": $,
      "content-header__search-input-notExist": k
    };
  };
  function za(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 25)(1, "task-tablet-search-widget", 41), n.NdJ("searchVisibleChange", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onTabletSearchToggle(Ye));
      })("searchSuccess", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onSuccesToggleSearch(Ye));
      })("searchFillRes", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onSearchWidget(Ye));
      }), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("searchFill", "Поиск пациента в медикаментах")("ngClass", n.kEZ(2, ta, k.isTabletSearchOpen, k.isTabletSearchOpen && k.isSuccessSearch, !k.isTabletSearchOpen && !k.isSuccessSearch));
    }
  }
  function cs(Te, $) {
    1 & Te && (n.TgZ(0, "div", 42), n._uU(1, "separator"), n.qZA());
  }
  function Gs(Te, $) {
    1 & Te && (n.ynx(0), n.TgZ(1, "div", 42), n._uU(2, "separator"), n.qZA(), n.TgZ(3, "div", 43), n._uU(4, "block filter"), n.qZA(), n.BQk());
  }
  function du(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 44)(1, "div", 45)(2, "div", 46), n._uU(3, "Новые назначения"), n.qZA(), n.TgZ(4, "div", 47), n._uU(5), n.qZA()(), n.TgZ(6, "button", 48), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.showNewItemsNotification = !1);
      }), n._UZ(7, "lu-svg-icon", 49), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(5), n.AsE(" У вас ", k.newItemsCount, " ", k.newItemsCountInterpretation, " на выдачу медикаментов "), n.xp6(2), n.Q6J("size", 24);
    }
  }
  let Ic = ((jh = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs) {
      this.store = $, this.router = k, this.viewContainerRef = ce, this.modalHelper = Ye, this.breakpointObserver = Tt, this.cdr = ai, this.uidService = Zi, this.messageService = Po, this.careCaseService = fo, this.dispensingService = Wr, this.activeMedicamentsModuleService = Cs, this.scanner = (0, n.f3M)(Yt.w), this.isPreparationTab = !1, this.isTablet = !1, this.currentValue = 0, this.totalValue = 0, this.searchValue = "", this.isScannerVisible = !1, this.isSearchVisible = !1, this.newItemsCount = 0, this.isFutureDate = !1, this.showNewItemsNotification = !1, this.isTabletSearchOpen = !1, this.isSuccessSearch = !1, this.activeArm = null, this.RightCode = uo.eT, this.scanner.manageScanner$.pipe((0, Xn.t)(this)).subscribe(ia => {
        "start" === ia ? this.scanner.start() : "stop" === ia && this.scanner.stop();
      });
    }
    ngOnInit() {
      this._configureScanner(), this.activeArm = this.activeMedicamentsModuleService.activeArm, this.store.select(qo.S8).pipe((0, Xn.t)(this)).subscribe(ce => {
        this.currentUser = (0, ji.yE)(ho, ce);
      }), this.patients$ = this.store.select(le.NA), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe(ce => {
        this.isTablet = ce.matches, this.cdr.markForCheck();
      }), (0, jo.a)([this.store.select(le.M1), this.store.select(le._Z)]).pipe((0, Xn.t)(this)).subscribe(([ce, Ye]) => {
        this.totalValue = ce, this.currentValue = Ye, this.cdr.markForCheck();
      });
      const k = this.router.parseUrl(this.router.url).queryParams.search;
      k && (this.searchValue = k, this.isSearchVisible = !0, this.dispatchSearch(k, !0)), (0, jo.a)([this.store.select(le.cD), this.store.select(je)]).pipe((0, Xn.t)(this)).subscribe(([ce, Ye]) => {
        this.newItemsCount = this.isOnPreparationTab() ? Ye : ce, this.cdr.markForCheck();
      }), this.isPreparationTab = this.router.url.includes("/preparation"), this.router.events.pipe((0, M.h)(ce => ce instanceof a.m2), (0, Xn.t)(this)).subscribe(() => {
        this.isPreparationTab = this.router.url.includes("/preparation");
      }), this.store.select(le.mj).pipe((0, Xn.t)(this)).subscribe(ce => {
        if (ce?.date) {
          const Ye = Fs.toDateKey(new Date(ce.date));
          this.isFutureDate = Fs.isFutureDate(Ye);
        } else this.isFutureDate = !1;
        this.cdr.markForCheck();
      });
    }
    get newItemsCountInterpretation() {
      const $ = this.newItemsCount,
        k = $ % 100,
        ce = $ % 10;
      return 1 === ce && 11 !== k ? "новое назначение" : ce >= 2 && ce <= 4 && (k < 12 || k > 14) ? "новых назначения" : "новых назначений";
    }
    onSearchChange($) {
      this.searchValue = $, this.dispatchSearch($);
    }
    dispatchSearch($, k = !1) {
      this.isOnPreparationTab() ? (this.store.dispatch(Wt({
        filters: {
          searchQuery: $ || ""
        }
      })), this.store.dispatch(Oi({
        searchQuery: $ || ""
      }))) : this.store.dispatch(E({
        filters: {
          search: $ || null
        }
      })), k || this.updateSearchQueryParam($), this.cdr.markForCheck();
    }
    updateSearchQueryParam($) {
      this.router.navigate([], {
        queryParams: $ ? {
          search: $
        } : {
          search: null
        },
        queryParamsHandling: "merge",
        replaceUrl: !0
      });
    }
    isOnPreparationTab() {
      return this.router.url.includes("/preparation");
    }
    isPillboxId($) {
      return !(!$ || $.length < 1) && /^\d+$/.test($.trim());
    }
    tryHandlePillboxScan($) {
      const k = parseInt($.trim(), 10);
      this.store.select(Me).pipe((0, st.q)(1), (0, q.U)(ce => ce.find(Ye => Ye.id === k))).subscribe(ce => {
        ce && this.findNearestAssignedSlot(ce) ? (this.searchValue = "", this.cdr.markForCheck(), this.modalHelper.openWritingOffDialog(ce.id, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe()) : this.dispatchSearch($);
      });
    }
    getCurrentPeriod() {
      const k = new Date().getHours();
      return k >= 6 && k < 12 ? "MORNING" : k >= 12 && k < 18 ? "DAY" : k >= 18 && k < 22 ? "EVENING" : "NIGHT";
    }
    findNearestAssignedSlot($) {
      if (!$.slots?.length) return null;
      const k = $.slots.filter(Zi => Zi.status === Re.Ae.Assigned);
      if (0 === k.length) return null;
      const ce = ["MORNING", "DAY", "EVENING", "NIGHT"],
        Ye = this.getCurrentPeriod(),
        Tt = ce.indexOf(Ye),
        ai = {};
      for (let Zi = 0; Zi < ce.length; Zi++) ai[ce[(Tt + Zi) % ce.length]] = Zi;
      return k.sort((Zi, Po) => (Zi.period ? ai[Zi.period] ?? 99 : 99) - (Po.period ? ai[Po.period] ?? 99 : 99)), k[0];
    }
    _configureScanner() {
      this.scanner.start({
        maxGapMs: 80,
        maxAverageGapMs: 35,
        idleFinishMs: 120,
        ignoreEditableTargets: !0
      }), this.scanner.scan$.pipe((0, Xn.t)(this), (0, ut.w)(({
        value: $
      }) => this.uidService.getUid($)), (0, Go.K)($ => (this.messageService.error("Не удалось найти пациента."), console.error("scan error", $?.message, $), (0, qe.of)(null))), (0, M.h)($ => !!$), (0, ut.w)($ => this.careCaseService.getCareCaseQuery($.data_object.ehr_case_id)), (0, q.U)($ => {
        const {
          firstName: k,
          lastName: ce
        } = $.patient.name;
        return `${ce} ${k} ${$.patient.name?.secondName ?? ""}`;
      }), (0, Go.K)($ => (this.messageService.error("Не удалось найти пациента."), console.error("search error", $?.message, $), (0, qe.of)([])))).subscribe($ => {
        this.searchValue = $, this.isSearchVisible = !0, this.dispatchSearch($, !1);
      });
    }
    clearSearch() {
      this.searchValue && (this.searchValue = "", this.onSearchChange(""));
    }
    toggleSearchInput($) {
      this.isSearchVisible = $, $ || (this.searchValue = "", this.dispatchSearch(""));
    }
    openQrScanner() {
      this.isScannerVisible = !0;
    }
    closeQrScanner() {
      this.isScannerVisible = !1;
    }
    refreshData() {
      this.isOnPreparationTab() ? this.store.dispatch(ti()) : this.store.dispatch(N());
    }
    confirmNewItems() {
      0 !== this.newItemsCount && (this.isOnPreparationTab() ? this.store.dispatch(_s()) : this.store.dispatch(te()), this.newItemsCount = 0, this.showNewItemsNotification = !1);
    }
    onTabletSearchToggle($) {
      this.isTabletSearchOpen = $, $ || (this.isSuccessSearch = !1);
    }
    onCloseSearch($) {
      this.isTabletSearchOpen = $, $ || (this.isSuccessSearch = !1);
    }
    onSuccesToggleSearch($) {
      this.isSuccessSearch = $;
    }
    onSearchWidget($) {
      this.onSearchChange($);
    }
  }).ɵfac = function (k) {
    return new (k || jh)(n.Y36(t.yh), n.Y36(a.F0), n.Y36(n.s_b), n.Y36(Ya), n.Y36(Gn.Yg), n.Y36(n.sBO), n.Y36(Zl.G1), n.Y36(wo.Jv), n.Y36(ku.lb), n.Y36(Yi.r), n.Y36(Yo.w));
  }, jh.ɵcmp = n.Xpm({
    type: jh,
    selectors: [["app-table-content-header"]],
    features: [n._Bn([Yt.w])],
    decls: 21,
    vars: 12,
    consts: [[1, "content-header"], [1, "content-header__left", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "content-header__search", 4, "ngIf"], [1, "content-header__right"], [1, "content-header__progress"], ["class", "content-header__progress-bar-wrapper", "panelClass", "progress-bar-tooltip", 3, "luTooltip", "positions", "maxWidth", 4, "ngIf"], ["progressTooltipTmpl", ""], ["class", "content-header__right-sep", 4, "ngIf"], [1, "content-header__actions"], ["lu-button", "icon", "title", "Отметить все новые назначения как прочитанные", 3, "disabled", "click"], ["icon", "success-line", 1, "icons-actions", 3, "size"], ["lu-button", "icon", "title", "Обновить", 3, "click"], ["icon", "reload", 1, "icons-actions", 3, "size"], [4, "ngIf"], ["luTabGroupOutlet", ""], ["class", "new-items-notification", 4, "ngIf"], [1, "content-header__nav-tabs"], [3, "tabChange"], ["lu-tab", "", "label", "Выдача медикаментов", "routerLink", "issuing", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["lu-tab", "", "label", "Подготовка таблетниц", "routerLink", "preparation", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["lu-tab", "", "label", "Выдача медикаментов", "routerLink", "issuing", "routerLinkActive", "", 3, "active"], ["rla1", "routerLinkActive"], ["lu-tab", "", "label", "Подготовка таблетниц", "routerLink", "preparation", "routerLinkActive", "", 3, "active"], ["rla2", "routerLinkActive"], [1, "content-header__search"], ["lu-button-icon", "", "title", "Поиск", 3, "click", 4, "ngIf"], ["class", "content-header__search-input-wrapper", 4, "ngIf"], ["lu-button-icon", "", "title", "Поиск", 3, "click"], ["icon", "search", 3, "size"], [1, "content-header__search-input-wrapper"], ["lu-button", "icon", "title", "Назад", 1, "content-header__search-back-button", 3, "click"], ["icon", "left", 3, "size"], [1, "content-header__search_input_wrapper", 3, "clearButton", "afterClear"], ["luInput", "", "luInputString", "", "placeholder", "Поиск по ФИО пациента, МНН / ОТН медикамента", 3, "ngModel", "ngModelChange"], ["icon", "search", "luInputWrapperAfter", "", 3, "size", 4, "ngIf"], ["icon", "search", "luInputWrapperAfter", "", 3, "size"], ["panelClass", "progress-bar-tooltip", 1, "content-header__progress-bar-wrapper", 3, "luTooltip", "positions", "maxWidth"], [3, "color", "value", "maxValue", "progressType"], [1, "content-header__progress-text"], [1, "progress-tooltip-content"], [3, "searchFill", "ngClass", "searchVisibleChange", "searchSuccess", "searchFillRes"], [1, "content-header__right-sep"], [1, "content-header__right-filter"], [1, "new-items-notification"], [1, "new-items-notification__content"], [1, "new-items-notification__title"], [1, "new-items-notification__text"], ["title", "Закрыть", 1, "new-items-notification__close", 3, "click"], ["icon", "close", 3, "size"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n.YNc(2, we, 5, 2, "ng-container", 2), n.YNc(3, Bt, 3, 0, "ng-container", 2), n.YNc(4, Un, 3, 2, "div", 3), n.qZA(), n.TgZ(5, "div", 4)(6, "div", 5), n.YNc(7, Gr, 4, 10, "div", 6), n.YNc(8, Vo, 4, 0, "ng-template", null, 7, n.W1O), n.YNc(10, za, 2, 6, "div", 3), n.qZA(), n.YNc(11, cs, 2, 0, "div", 8), n.TgZ(12, "div", 9)(13, "button", 10), n.NdJ("click", function () {
        return ce.confirmNewItems();
      }), n._UZ(14, "lu-svg-icon", 11), n.qZA(), n.TgZ(15, "button", 12), n.NdJ("click", function () {
        return ce.refreshData();
      }), n._UZ(16, "lu-svg-icon", 13), n.qZA()(), n.YNc(17, Gs, 5, 0, "ng-container", 14), n.qZA()(), n.ynx(18, 15), n._UZ(19, "router-outlet"), n.BQk(), n.YNc(20, du, 8, 3, "div", 16)), 2 & k && (n.xp6(1), n.Q6J("ngSwitch", ce.activeArm), n.xp6(1), n.Q6J("ngSwitchCase", "pillboxes"), n.xp6(1), n.Q6J("ngSwitchCase", "injections"), n.xp6(1), n.Q6J("ngIf", !ce.isTablet), n.xp6(3), n.Q6J("ngIf", !ce.isTablet), n.xp6(3), n.Q6J("ngIf", ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(2), n.Q6J("disabled", 0 === ce.newItemsCount || ce.isFutureDate), n.xp6(1), n.Q6J("size", 24), n.xp6(2), n.Q6J("size", 16), n.xp6(1), n.Q6J("ngIf", ce.isTablet && !ce.isPreparationTab), n.xp6(3), n.Q6J("ngIf", ce.showNewItemsNotification && ce.newItemsCount > 0 && !ce.isOnPreparationTab()));
    },
    dependencies: [Di.mk, Di.O5, Di.RF, Di.n9, vr.Fj, vr.JJ, vr.On, Ks.mc, Ro.k, mp.HY, mp.Fj, Ci.q, Ed.L, gp.H, fd.$, kn.c, nn.Y0, nn.hD, nn.Xg, a.lC, a.rH, a.Od, zt.o],
    styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.content-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch;height:56px;padding:0 16px;background-color:#fff;border-bottom:1px solid #e0e0e0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;gap:24px}@media (min-width: 992px){.content-header[_ngcontent-%COMP%]{padding:0 24px;height:64px}}@media (min-width: 600px) and (max-width: 960px){.content-header[_ngcontent-%COMP%]{gap:41px}}.content-header__left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;flex:1}@media (min-width: 992px){.content-header__left[_ngcontent-%COMP%]{height:64px}}.content-header__left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:20px;font-weight:600}.content-header__right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-shrink:0}@media (min-width: 992px){.content-header__right[_ngcontent-%COMP%]{gap:16px;flex-shrink:0}}.content-header__right-sep[_ngcontent-%COMP%]{min-width:1px;height:24px;font-size:0;background-color:#e0e0e0}@media (min-width: 992px){.content-header__right-sep[_ngcontent-%COMP%]{display:none}}.content-header__right-filter[_ngcontent-%COMP%]{width:32px;height:32px;font-size:0}.content-header__nav-tabs[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:382px}@media (min-width: 600px) and (max-width: 960px){.content-header__nav-tabs[_ngcontent-%COMP%]{width:auto}}.content-header__search[_ngcontent-%COMP%]{display:flex;align-items:center}.content-header__search[_ngcontent-%COMP%]     task-tablet-search-widget .search__container .search__container__input_wrapper{margin-top:0!important}.content-header__search-input-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}@media (max-width: 992px){.content-header__search-input-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:5000;padding:4px 16px 11px;width:100%;background:#fff;border-bottom:1px solid #e6e6e6}}.content-header__search-input-helper[_ngcontent-%COMP%]     .search__container .search__container__input_wrapper{padding:0}.content-header__search-input-helper[_ngcontent-%COMP%]     .search__container app-tablet-scanner-widget{display:none}.content-header__search-input-notExist[_ngcontent-%COMP%]     .search__container app-search-small-icon svg{margin-right:13px}.content-header__search-back-button[_ngcontent-%COMP%]{flex-shrink:0;width:32px;height:32px}@media (max-width: 992px){.content-header__search-back-button[_ngcontent-%COMP%]     .lu-button-wrapper{border:none}.content-header__search-back-button[_ngcontent-%COMP%]     .lu-button-content{display:none}}@media (min-width: 992px){.content-header__search-back-button[_ngcontent-%COMP%]{width:40px;height:40px}}.content-header__actions[_ngcontent-%COMP%], .content-header__action-button--with-text[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}[_nghost-%COMP%]     .lu-button-wrapper{--lu-button-background: transparent !important;--lu-button-hover-background: transparent !important}.content-header__nav-tabs[_ngcontent-%COMP%], lu-tab-group[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]     .lu-tab-header-wrapper{height:100%}[_nghost-%COMP%]     lu-tab-header-item{height:100%;display:flex;align-items:center}[_nghost-%COMP%]     lu-tab-header-item[data-lu-selected=false]{color:#2c8dc4}@media (max-width: 992px){[_nghost-%COMP%]     lu-tab-header-item:first-child{margin-right:16px}}.content-header__search_input_wrapper[_ngcontent-%COMP%]{position:relative;display:inline-flex;align-items:center;width:484px;height:40px}@media (max-width: 992px){.content-header__search_input_wrapper[_ngcontent-%COMP%]{flex:1}}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:100%;padding:0 48px 0 12px!important;border:1px solid #cccccc;border-radius:4px;background-color:#fff;font-size:14px;line-height:1.5;color:#333;transition:border-color .2s ease-in-out;outline:none}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-family:Open Sans,sans-serif;font-size:15px;line-height:24px;color:#999;opacity:1}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(:focus){border-color:#b3b3b3}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#54c3f3!important;border-width:2px!important;box-shadow:0 0 0 2px #54c3f31a!important}@media (max-width: 992px){.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-width:2px;box-shadow:none;transition:none}}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-decoration, .content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-cancel-button, .content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-results-button, .content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-results-decoration{display:none!important}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-clear{display:none;width:0;height:0}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-reveal{display:none;width:0;height:0}.content-header__search_input_wrapper[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;--lu-svg-icon-color: #38a1d6;z-index:1;flex-shrink:0}.content-header__search_input_wrapper[_ngcontent-%COMP%]     lu-svg-icon[data-lu-icon=close] svg{margin-left:23px;transform:scale(1.15)}.content-header__search_input_wrapper[_ngcontent-%COMP%]     lu-svg-icon[data-lu-icon=search] svg{margin-left:19px}[_nghost-%COMP%]     .lu-progress-bar-wrapper .lu-progress-bar{height:6px!important;width:188px!important}[_nghost-%COMP%]     .lu-progress-bar-wrapper .lu-progress-status{font-family:Open Sans;height:20px;display:flex;align-items:center;justify-content:flex-start;font-size:15px;line-height:20px;color:#333}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper{position:relative!important;display:inline-flex!important;align-items:center!important;width:484px!important;height:40px!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input{box-sizing:border-box!important;width:100%!important;height:100%!important;padding:0 48px 0 12px!important;border:1px solid #cccccc!important;border-radius:4px!important;background-color:#fff!important;font-size:14px!important;line-height:1.5!important;color:#333!important;transition:border-color .2s ease-in-out!important;outline:none!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::placeholder{font-family:Open Sans,sans-serif!important;font-size:15px!important;line-height:24px!important;color:#999!important;opacity:1!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input:hover:not(:focus){border-color:#b3b3b3!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input:focus{border-color:#54c3f3!important;border-width:2px!important;box-shadow:0 0 0 2px #54c3f31a!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::-webkit-search-decoration, [_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::-webkit-search-cancel-button, [_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::-webkit-search-results-button, [_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::-webkit-search-results-decoration{display:none!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::-ms-clear{display:none!important;width:0!important;height:0!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::-ms-reveal{display:none!important;width:0!important;height:0!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper lu-svg-icon{position:absolute!important;right:12px!important;top:50%!important;transform:translateY(-50%)!important;pointer-events:none!important;color:#ccc!important;z-index:1!important;flex-shrink:0!important}.content-header__progress[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}@media (min-width: 600px) and (max-width: 960px){.content-header__progress[_ngcontent-%COMP%]{width:26px;height:32px}}.content-header__progress-bar-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer}  .progress-bar-tooltip .lu-tooltip-panel-content{padding:16px!important;font-family:Open Sans,sans-serif;font-size:13px;line-height:18px}.progress-tooltip-content[_ngcontent-%COMP%]{text-align:left;white-space:normal}.content-header__progress[_ngcontent-%COMP%]   lu-progress-bar[_ngcontent-%COMP%]{width:188px;height:6px}[_nghost-%COMP%]     .lu-progress-bar-wrapper .lu-progress-status{display:none}[_nghost-%COMP%]     .lu-progress-bar-wrapper .lu-progress-bar{height:6px!important;border-radius:12px!important;background-color:#0000001a!important}[_nghost-%COMP%]     .lu-progress-bar-wrapper .lu-progress-bar__value{border-radius:12px!important;background-color:#000!important}.content-header__progress-text[_ngcontent-%COMP%]{width:57px;text-align:right;font-family:Open Sans,sans-serif;font-size:15px;line-height:20px;color:#333}@media (max-width: 768px){.content-header__search_input_wrapper[_ngcontent-%COMP%]{width:100%!important;max-width:none!important}.content-header__search_input_wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:16px!important;padding:0 52px 0 16px!important}.content-header__search_input_wrapper[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{right:16px!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper{width:100%!important;max-width:none!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input{font-size:16px!important;padding:0 52px 0 16px!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input::placeholder{font-family:Open Sans,sans-serif!important;font-size:15px!important;line-height:24px!important;color:#999!important;opacity:1!important}}.qr-scanner[_ngcontent-%COMP%]{position:fixed;inset:0;width:100vw;height:100vh;z-index:9999;background-color:#222;overflow:hidden;padding-top:env(safe-area-inset-top,0);padding-bottom:env(safe-area-inset-bottom,0)}.qr-scanner[_ngcontent-%COMP%]   zxing-scanner[_ngcontent-%COMP%], .qr-scanner[_ngcontent-%COMP%]   zxing-scanner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover!important;z-index:1}.qr-scanner__overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;z-index:2}.qr-scanner__frame[_ngcontent-%COMP%]{position:relative;width:260px;height:260px}.qr-scanner__frame-corner[_ngcontent-%COMP%]{position:absolute;width:48px;height:48px;border:4px solid #ffffff}.qr-scanner__frame-corner--tl[_ngcontent-%COMP%]{top:0;left:0;border-right:none;border-bottom:none;border-top-left-radius:28px}.qr-scanner__frame-corner--tr[_ngcontent-%COMP%]{top:0;right:0;border-left:none;border-bottom:none;border-top-right-radius:28px}.qr-scanner__frame-corner--bl[_ngcontent-%COMP%]{bottom:0;left:0;border-right:none;border-top:none;border-bottom-left-radius:28px}.qr-scanner__frame-corner--br[_ngcontent-%COMP%]{bottom:0;right:0;border-left:none;border-top:none;border-bottom-right-radius:28px}.qr-scanner__center-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:60px;height:60px;margin-top:-190px;background:rgba(255,255,255,.82);border-radius:50%;box-shadow:0 2px 12px #00000026;backdrop-filter:blur(4px);z-index:3}.qr-scanner__overlay-text[_ngcontent-%COMP%]{margin-top:16px;color:#fff;font-size:19px;font-weight:500;line-height:1.25;text-align:center;text-shadow:0 2px 8px rgba(0,0,0,.18);z-index:3}.qr-scanner__close-button[_ngcontent-%COMP%]{position:absolute;top:calc(20px + env(safe-area-inset-top,0));left:20px;z-index:4;display:flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(70,70,70,.85);border:none;border-radius:8px;color:#fff;font-family:inherit;font-size:16px;font-weight:500;cursor:pointer;backdrop-filter:blur(4px);transition:background .2s ease-in-out,transform .1s ease}.qr-scanner__close-button[_ngcontent-%COMP%]:hover{background:rgba(70,70,70,.95)}.qr-scanner__close-button[_ngcontent-%COMP%]:active{transform:scale(.98)}.qr-scanner__close-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;line-height:1}.qr-scanner__fallback-button[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:calc(32px + env(safe-area-inset-bottom,0));z-index:4;padding:14px 36px;background:#38a9fb;border:none;border-radius:8px;color:#fff;font-family:inherit;font-size:18px;font-weight:500;cursor:pointer;box-shadow:0 2px 8px #00000029;transform:translate(-50%);transition:background .2s ease-in-out,transform .1s ease;white-space:nowrap}.qr-scanner__fallback-button[_ngcontent-%COMP%]:active{transform:translate(-50%) scale(.98)}.content-header__search_input_wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper{border-radius:4px!important;--lu-floated-border: none !important;--lu-input-border-color: transparent !important;--lu-input-border-hover-color: transparent !important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper .lu-input-container{width:484px!important;height:40px!important;border-radius:4px!important;border:none!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper lu-wrapper{border-radius:4px!important;border:none!important;box-shadow:none!important;outline:none!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper lu-floated-border{border-radius:4px!important;border:none!important;box-shadow:none!important;outline:none!important;--lu-floated-border: none !important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input{width:484px!important;height:40px!important;padding-right:32px;border-radius:4px!important;border:1px solid #cccccc!important}[_nghost-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input:focus{border-color:#54c3f3!important}.content-header__search_input_wrapper[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{position:absolute;right:8px;top:50%;transform:translateY(-50%);z-index:2}.content-header__search_input_wrapper[_ngcontent-%COMP%]   lu-svg-icon.clickable-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer;pointer-events:auto}.content-header__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32px;height:32px;padding:0}.icons-actions[_ngcontent-%COMP%]{--lu-svg-icon-width: 24px;--lu-svg-icon-height: 24px;transform:scale(1.2)}[_nghost-%COMP%]     .lu-tab-header-wrapper lu-tab-header-item:nth-child(2){margin-right:0!important;padding-right:0!important}.new-items-notification[_ngcontent-%COMP%]{position:fixed;right:16px;bottom:52px;z-index:1000;display:flex;align-items:flex-start;gap:12px;padding:24px 16px 24px 24px;background-color:#ffda46;width:400px;height:136px;animation:_ngcontent-%COMP%_slideInRight .3s ease-out}@media (max-width: 961px){.new-items-notification[_ngcontent-%COMP%]{bottom:0;left:0;padding:16px;max-width:none;width:100%;border-radius:0}}.new-items-notification__content[_ngcontent-%COMP%]{flex:1}.new-items-notification__title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:8px}.new-items-notification__close[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;background-color:transparent;border:none;border-radius:4px;cursor:pointer;transition:background-color .2s ease;flex-shrink:0;opacity:.15}.new-items-notification__close[_ngcontent-%COMP%]:hover{background-color:#0000001a}.new-items-notification__close[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #333}@keyframes _ngcontent-%COMP%_slideInRight{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}"],
    changeDetection: 0
  }), jh);
  Ic = (0, Se.gn)([(0, Xn.c)()], Ic);
  var Yu = i(82409);
  const Dc = ["doctorSearchInput"];
  function ou(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 33), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.onClear());
      }), n._uU(1, "Очистить"), n.qZA();
    }
  }
  function md(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 37), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        return n.KtG(ai.selectValue("administrationMethod", Tt, "method"));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      let Ye;
      n.ekj("active", (null == (Ye = ce.filtersForm.get("administrationMethod")) ? null : Ye.value) === k), n.xp6(1), n.hij(" ", k, " ");
    }
  }
  function wh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.closeDropdown("method"));
      }), n.qZA(), n.TgZ(2, "div", 35), n.YNc(3, md, 2, 3, "div", 36), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(3), n.Q6J("ngForOf", k.administrationMethods);
    }
  }
  function gd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 37), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        return n.KtG(ai.selectValue("paymentType", Tt, "payment"));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      let Ye;
      n.ekj("active", (null == (Ye = ce.filtersForm.get("paymentType")) ? null : Ye.value) === k), n.xp6(1), n.hij(" ", k, " ");
    }
  }
  function Rp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.closeDropdown("payment"));
      }), n.qZA(), n.TgZ(2, "div", 35), n.YNc(3, gd, 2, 3, "div", 36), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(3), n.Q6J("ngForOf", k.paymentTypes);
    }
  }
  const _d = function () {
    return {
      standalone: !0
    };
  };
  function sf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "input", 38, 39), n.NdJ("ngModelChange", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.doctorSearch = Ye);
      })("click", function (Ye) {
        return Ye.stopPropagation();
      }), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngModel", k.doctorSearch)("ngModelOptions", n.DdM(2, _d));
    }
  }
  function Vd(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 17), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      let ce, Ye;
      n.ekj("placeholder", !(null != (ce = k.filtersForm.get("doctorName")) && ce.value)), n.xp6(1), n.hij(" ", (null == (Ye = k.filtersForm.get("doctorName")) ? null : Ye.value) || "Выберите значение", " ");
    }
  }
  function Mh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 37), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.selectValue("doctorName", Tt, "doctor"));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      let Ye;
      n.ekj("active", (null == (Ye = ce.filtersForm.get("doctorName")) ? null : Ye.value) === k), n.xp6(1), n.hij(" ", k, " ");
    }
  }
  function _p(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Mh, 2, 3, "div", 36), n.BQk()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngForOf", k.filteredDoctors);
    }
  }
  function qu(Te, $) {
    1 & Te && (n.TgZ(0, "div", 42), n._uU(1, " Ничего не найдено. Проверьте запрос или введите другие критерии поиска "), n.qZA());
  }
  function af(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.closeDropdown("doctor"));
      }), n.qZA(), n.TgZ(2, "div", 40), n.NdJ("click", function (Ye) {
        return Ye.stopPropagation();
      }), n.YNc(3, _p, 2, 1, "ng-container", 29), n.YNc(4, qu, 2, 0, "ng-template", null, 41, n.W1O), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = n.MAs(5),
        ce = n.oxw();
      n.xp6(3), n.Q6J("ngIf", ce.filteredDoctors.length)("ngIfElse", k);
    }
  }
  const sm = class {
    constructor($) {
      this.breakpointObserver = $, this.doctors = [], this.administrationMethods = [], this.paymentTypes = [], this.closeClicked = new n.vpe(), this.filtersChanged = new n.vpe(), this.filterCountEvent = new n.vpe(), this.isTablet = !1, this.dropdowns = {
        method: !1,
        payment: !1,
        doctor: !1
      }, this.destroy$ = new d.x(), this.doctorSearch = "";
      const k = this.getDefaultValues();
      this.filtersForm = new vr.cw({
        date: new vr.NI(k.date),
        department: new vr.NI(k.department),
        cardNumber: new vr.NI(k.cardNumber),
        administrationMethod: new vr.NI(k.administrationMethod),
        paymentType: new vr.NI(k.paymentType),
        reasons: new vr.cw({
          basicTherapy: new vr.NI(k.reasons.basicTherapy),
          onHand: new vr.NI(k.reasons.onHand),
          vaccination: new vr.NI(k.reasons.vaccination)
        }),
        doctorName: new vr.NI(k.doctorName)
      });
    }
    ngOnInit() {
      this.breakpointObserver.observe(ri.ok).pipe((0, b.R)(this.destroy$)).subscribe($ => this.isTablet = $.matches);
    }
    ngOnDestroy() {
      this.onClear(), this.destroy$.next(), this.destroy$.complete();
    }
    ngOnChanges($) {
      if ((0, ri.up)($.filters)) {
        const k = {
          ...this.filters
        };
        !k.date && this.filtersForm.get("date")?.value && (k.date = this.filtersForm.get("date")?.value), this.filtersForm.patchValue(k);
      }
    }
    get hasActiveFilters() {
      const $ = this.filtersForm.value,
        k = this.getDefaultValues(),
        ce = $.date && k.date && new Date($.date).toDateString() !== new Date(k.date).toDateString();
      return !!($.cardNumber || ce || $.administrationMethod || $.paymentType || $.doctorName || $.reasons?.basicTherapy || $.reasons?.onHand || $.reasons?.vaccination);
    }
    onCloseClick() {
      this.closeClicked.emit();
    }
    onSave() {
      this.filtersChanged.emit(this.filtersForm.value);
    }
    onClear() {
      const $ = this.getDefaultValues();
      this.filtersForm.reset($), this.filtersChanged.emit(this.filtersForm.value);
    }
    getDefaultValues() {
      return {
        date: new Date(),
        department: null,
        cardNumber: "",
        administrationMethod: null,
        paymentType: null,
        reasons: {
          basicTherapy: !1,
          onHand: !1,
          vaccination: !1
        },
        doctorName: null
      };
    }
    toggleDropdown($) {
      Object.keys(this.dropdowns).forEach(k => {
        this.dropdowns[k] = !1;
      }), this.dropdowns[$] = !this.dropdowns[$], "doctor" === $ && this.dropdowns[$] && setTimeout(() => {
        this.doctorSearchInput?.nativeElement.focus();
      });
    }
    closeDropdown($) {
      this.dropdowns[$] = !1;
    }
    selectValue($, k, ce) {
      this.filtersForm.get($)?.setValue(k), "doctor" === ce && (this.doctorSearch = ""), this.closeDropdown(ce);
    }
    get filteredDoctors() {
      const $ = this.doctorSearch.toLowerCase().trim();
      return $ ? this.doctors.filter(k => k.toLowerCase().includes($)) : this.doctors;
    }
  };
  let Lc = sm;
  sm.ɵfac = function (k) {
    return new (k || sm)(n.Y36(Gn.Yg));
  }, sm.ɵcmp = n.Xpm({
    type: sm,
    selectors: [["app-table-filters-sidebar"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(Dc, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.doctorSearchInput = Ye.first);
      }
    },
    inputs: {
      doctors: "doctors",
      filters: "filters",
      administrationMethods: "administrationMethods",
      paymentTypes: "paymentTypes"
    },
    outputs: {
      closeClicked: "closeClicked",
      filtersChanged: "filtersChanged",
      filterCountEvent: "filterCountEvent"
    },
    features: [n.TTD],
    decls: 53,
    vars: 33,
    consts: [[1, "filter-panel__header"], [1, "filter-panel__title-row"], [1, "filter-panel__title"], ["class", "filter-panel__clear", 3, "click", 4, "ngIf"], [1, "filter-panel__close", 3, "click"], ["icon", "close", 3, "size"], [1, "filter-panel__body", 3, "formGroup"], [1, "filter-group", "filter-group--date"], ["lu-label", "Дата"], ["formControlName", "date", 1, "filter-date"], [1, "filter-group", "filter-group--cardNum"], ["lu-label", "№ карты"], ["formControlName", "cardNumber", "luInput", "", "luInputString", ""], [1, "filter-group", "filter-group--method"], ["lu-label", "Способ введения", 1, "method-field"], [1, "custom-select"], [1, "custom-select__trigger", 3, "click"], [1, "custom-select__value"], ["icon", "chevron-down", 1, "custom-select__arrow", 3, "size"], [4, "ngIf"], [1, "filter-group", "filter-group--payment"], ["lu-label", "Вид оплаты", 1, "method-field"], ["formGroupName", "reasons", 1, "filter-group", "filter-group--reason"], [1, "filter-group__checkbox-list"], ["formControlName", "basicTherapy", 3, "color"], ["formControlName", "onHand", 3, "color"], ["formControlName", "vaccination", 3, "color"], [1, "filter-group", "filter-group--doctor"], ["lu-label", "ФИО назначившего врача", 1, "method-field"], [4, "ngIf", "ngIfElse"], ["selectedDoctor", ""], [1, "filter-panel__footer"], ["lu-button-raised", "", 3, "color", "click"], [1, "filter-panel__clear", 3, "click"], [1, "custom-select__backdrop", 3, "click"], [1, "custom-select__options"], ["class", "custom-select__option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "custom-select__option", 3, "click"], ["type", "text", "placeholder", "Выберите значение", 1, "custom-select__search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click"], ["doctorSearchInput", ""], [1, "custom-select__options", 3, "click"], ["noDoctors", ""], [1, "custom-select__option", "disabled"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), n._uU(3, "Фильтр"), n.qZA(), n.YNc(4, ou, 2, 0, "button", 3), n.qZA(), n.TgZ(5, "button", 4), n.NdJ("click", function () {
        return ce.onCloseClick();
      }), n._UZ(6, "lu-svg-icon", 5), n.qZA()(), n.TgZ(7, "div", 6)(8, "div", 7)(9, "label", 8), n._UZ(10, "lu-calendar-stepper", 9), n.qZA()(), n.TgZ(11, "div", 10)(12, "label", 11)(13, "lu-input-wrapper"), n._UZ(14, "input", 12), n.qZA()()(), n.TgZ(15, "div", 13)(16, "label", 14)(17, "div", 15)(18, "div", 16), n.NdJ("click", function () {
        return ce.toggleDropdown("method");
      }), n.TgZ(19, "span", 17), n._uU(20), n.qZA(), n._UZ(21, "lu-svg-icon", 18), n.qZA(), n.YNc(22, wh, 4, 1, "ng-container", 19), n.qZA()()(), n.TgZ(23, "div", 20)(24, "label", 21)(25, "div", 15)(26, "div", 16), n.NdJ("click", function () {
        return ce.toggleDropdown("payment");
      }), n.TgZ(27, "span", 17), n._uU(28), n.qZA(), n._UZ(29, "lu-svg-icon", 18), n.qZA(), n.YNc(30, Rp, 4, 1, "ng-container", 19), n.qZA()()(), n.TgZ(31, "div", 22)(32, "label"), n._uU(33, "Признак выдачи"), n.qZA(), n.TgZ(34, "div", 23)(35, "lu-checkbox", 24), n._uU(36, " Базовая амбулаторная терапия "), n.qZA(), n.TgZ(37, "lu-checkbox", 25), n._uU(38, "Выдача на руки"), n.qZA(), n.TgZ(39, "lu-checkbox", 26), n._uU(40, "Вакцинация"), n.qZA()()(), n.TgZ(41, "div", 27)(42, "label", 28)(43, "div", 15)(44, "div", 16), n.NdJ("click", function (Tt) {
        return ce.toggleDropdown("doctor"), Tt.stopPropagation();
      }), n.YNc(45, sf, 3, 3, "ng-container", 29), n.YNc(46, Vd, 2, 3, "ng-template", null, 30, n.W1O), n._UZ(48, "lu-svg-icon", 18), n.qZA(), n.YNc(49, af, 6, 2, "ng-container", 19), n.qZA()()()(), n.TgZ(50, "div", 31)(51, "button", 32), n.NdJ("click", function () {
        return ce.onSave();
      }), n._uU(52, "Применить"), n.qZA()()), 2 & k) {
        const Ye = n.MAs(47);
        let Tt, ai, Zi, Po, fo, Wr, Cs;
        n.xp6(4), n.Q6J("ngIf", ce.hasActiveFilters), n.xp6(2), n.Q6J("size", 24), n.xp6(1), n.Q6J("formGroup", ce.filtersForm), n.xp6(9), n.ekj("method-empty", !(null != (Tt = ce.filtersForm.get("administrationMethod")) && Tt.value)), n.xp6(1), n.ekj("open", ce.dropdowns.method), n.xp6(2), n.ekj("placeholder", !(null != (ai = ce.filtersForm.get("administrationMethod")) && ai.value)), n.xp6(1), n.hij(" ", (null == (Zi = ce.filtersForm.get("administrationMethod")) ? null : Zi.value) || "Выберите значение", " "), n.xp6(1), n.Q6J("size", 16), n.xp6(1), n.Q6J("ngIf", ce.dropdowns.method), n.xp6(2), n.ekj("method-empty", !(null != (Po = ce.filtersForm.get("paymentType")) && Po.value)), n.xp6(1), n.ekj("open", ce.dropdowns.payment), n.xp6(2), n.ekj("placeholder", !(null != (fo = ce.filtersForm.get("paymentType")) && fo.value)), n.xp6(1), n.hij(" ", (null == (Wr = ce.filtersForm.get("paymentType")) ? null : Wr.value) || "Выберите значение", " "), n.xp6(1), n.Q6J("size", 16), n.xp6(1), n.Q6J("ngIf", ce.dropdowns.payment), n.xp6(5), n.Q6J("color", "blue"), n.xp6(2), n.Q6J("color", "blue"), n.xp6(2), n.Q6J("color", "blue"), n.xp6(3), n.ekj("method-empty", !(null != (Cs = ce.filtersForm.get("doctorName")) && Cs.value)), n.xp6(1), n.ekj("open", ce.dropdowns.doctor), n.xp6(2), n.Q6J("ngIf", ce.dropdowns.doctor)("ngIfElse", Ye), n.xp6(3), n.Q6J("size", 16), n.xp6(1), n.Q6J("ngIf", ce.dropdowns.doctor), n.xp6(2), n.Q6J("color", "blue");
      }
    },
    dependencies: [Di.sg, Di.O5, vr.Fj, vr.JJ, vr.JL, vr.On, vr.sg, vr.u, vr.x0, Ks.mc, Ka.$m, mp.HY, ul.z, Ci.q, Ed.L, gp.H, Yu.I],
    styles: [".lu-input::placeholder{color:transparent!important}@media (min-width: 600px) and (max-width: 960px){  .lu-input::placeholder{color:var(--lu-black-40)!important}}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]     .filter-date{--lu-input-width: 298px}.filter-date[_ngcontent-%COMP%]{--lu-button-text: #757575 !important;width:220px}.filter-panel__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 24px}@media (min-width: 600px) and (max-width: 960px){.filter-panel__header[_ngcontent-%COMP%]{padding:16px 24px 0}}@media (min-width: 961px){.filter-panel__header[_ngcontent-%COMP%]{padding:16px 20px;flex-shrink:0}}.filter-panel__title-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.filter-panel__title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:600;font-size:15px;line-height:24px;letter-spacing:0;color:#333}.filter-panel__clear[_ngcontent-%COMP%]{padding:0;background:none;border:none;cursor:pointer;font-family:Open Sans,sans-serif;font-weight:400;font-size:13px;line-height:20px;color:#38a1d6;text-decoration:underline;text-decoration-style:dashed;text-underline-offset:2px}.filter-panel__close[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;background:none;border:none;cursor:pointer;font-family:Open Sans,sans-serif;font-weight:600;font-size:15px;line-height:24px;letter-spacing:0}.filter-panel__close[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc}.filter-panel__close[_ngcontent-%COMP%]:hover{color:#374151}.filter-panel__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;flex-grow:1;padding:24px;overflow-y:auto}@media (min-width: 961px){.filter-panel__body[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}}.filter-panel__footer[_ngcontent-%COMP%]{padding:16px 24px;border-top:1px solid #e6e6e6}.filter-panel__footer[_ngcontent-%COMP%]     .lu-button-wrapper{border-radius:4px}.filter-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.filter-group--date[_ngcontent-%COMP%]     .lu-button-icon lu-svg-icon svg{transform:scale(.67)!important;transform-origin:center!important}.filter-group--date[_ngcontent-%COMP%]     lu-calendar-stepper lu-calendar-field-host:nth-child(1){--lu-input-width: 220px !important;width:220px!important}@media (max-width: 960px){.filter-group--cardNum[_ngcontent-%COMP%]{order:1}.filter-group--date[_ngcontent-%COMP%]{order:2}.filter-group--method[_ngcontent-%COMP%]{order:3}.filter-group--payment[_ngcontent-%COMP%]{order:4}.filter-group--reason[_ngcontent-%COMP%]{order:5}.filter-group--doctor[_ngcontent-%COMP%]{order:6}.filter-group--dept[_ngcontent-%COMP%]{display:none}}@media (min-width: 600px) and (max-width: 960px){.filter-group[_ngcontent-%COMP%]     .filter-group lu-button-wrapper{--lu-button-text: #757575 !important}}.filter-group__checkbox-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.filter-checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:14px;color:#374151}.filter-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:16px;height:16px;accent-color:#4f46e5}lu-calendar-stepper[_ngcontent-%COMP%], lu-combobox[_ngcontent-%COMP%], lu-input-wrapper[_ngcontent-%COMP%], lu-data-list[_ngcontent-%COMP%]{width:100%}.custom-select[_ngcontent-%COMP%]{position:relative}.custom-select__trigger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:312px;height:40px;padding:0 12px;border:1px solid #999;background:#fff;cursor:pointer;box-sizing:border-box;transition:border-color .2s}.custom-select.open[_ngcontent-%COMP%]   .custom-select__trigger[_ngcontent-%COMP%]{border-color:#757575;border-bottom-left-radius:0;border-bottom-right-radius:0}.custom-select__value[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px;color:#333}.custom-select__value.placeholder[_ngcontent-%COMP%]{color:#999}.custom-select__arrow[_ngcontent-%COMP%]{flex-shrink:0;margin-left:8px;transition:transform .2s;--lu-svg-icon-color: #666}.custom-select.open[_ngcontent-%COMP%]   .custom-select__arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}.custom-select__backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:99}.custom-select__options[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;max-height:240px;overflow-y:auto;background:#fff;border:1px solid #757575;border-top:none;border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:100;box-shadow:0 4px 8px #0000001a}.custom-select__option[_ngcontent-%COMP%]{padding:10px 12px;font-size:15px;color:#333;cursor:pointer;line-height:1.4}.custom-select__option[_ngcontent-%COMP%]:hover, .custom-select__option.active[_ngcontent-%COMP%]{background-color:#38a1d61a}.custom-select__search-input[_ngcontent-%COMP%]{width:100%;border:none;outline:none;background:transparent}"]
  });
  const il = ["filterPanel"];
  function vd(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-badge", 10), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.Q6J("size", "extra-small"), n.xp6(1), n.hij(" ", k.filterCount, " ");
    }
  }
  function ad(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 6), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.toggleFilter());
      }), n.TgZ(1, "button", 7), n._UZ(2, "lu-svg-icon", 8), n.YNc(3, vd, 2, 2, "lu-badge", 9), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(2), n.Q6J("size", 24), n.xp6(1), n.Q6J("ngIf", k.filterCount && !k.filterOpen);
    }
  }
  const qd = function () {
    return [];
  };
  function ld(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 11)(1, "app-table-filters-sidebar", 12), n.NdJ("closeClicked", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.toggleFilter());
      })("filtersChanged", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onFiltersUpdate(Ye));
      }), n.ALo(2, "async"), n.ALo(3, "async"), n.ALo(4, "async"), n.ALo(5, "async"), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.ekj("is-open", k.filterOpen), n.xp6(1), n.Q6J("filters", n.lcZ(2, 6, k.filters$))("doctors", n.lcZ(3, 8, k.doctors$) || n.DdM(14, qd))("administrationMethods", n.lcZ(4, 10, k.administrationMethods$) || n.DdM(15, qd))("paymentTypes", n.lcZ(5, 12, k.paymentTypes$) || n.DdM(16, qd));
    }
  }
  const jm = class {
    constructor($, k, ce, Ye) {
      this.patientDataService = $, this.router = k, this.filterStateService = ce, this.store = Ye, this.doctors$ = this.store.select(le.sc), this.administrationMethods$ = this.store.select(le.Ku), this.paymentTypes$ = this.store.select(le.xn), this.isPreparationTab = !1, this.filterCount = 0, this.filters$ = this.store.select(le.mj).pipe((0, m.b)(Tt => this.filterCount = this.setFilterCounter(Tt))), this.countFilterFields = ["date", "cardNumber", "administrationMethod", "paymentType", "reasons", "doctorName"], this.destroy$ = new d.x();
    }
    ngOnInit() {
      this.checkCurrentRoute(), this.router.events.pipe((0, M.h)($ => $ instanceof a.m2), (0, b.R)(this.destroy$)).subscribe(() => {
        this.checkCurrentRoute();
      });
    }
    setFilterCounter($) {
      return $ ? Object.entries($).filter(([k, ce]) => this.countFilterFields.includes(k)).map(([k, ce]) => "date" === k && ce ? new Date(ce).toLocaleDateString() !== new Date().toLocaleDateString() ? 1 : 0 : "reasons" === k && ce ? Object.values(ce).map(Ye => +Ye).reduce((Ye, Tt) => Ye + Tt) : ce ? 1 : 0).reduce((k, ce) => k + ce, 0) : 0;
    }
    ngOnDestroy() {
      this.filterStateService.setFilterOpen(!1), this.destroy$.next(), this.destroy$.complete();
    }
    get filterOpen() {
      return this.filterStateService.isFilterOpen;
    }
    toggleFilter() {
      this.filterStateService.toggleFilter();
    }
    get isInjection() {
      return "injections" === this.router.url.split("/")[1];
    }
    onFiltersUpdate($) {
      this.store.dispatch(E({
        filters: {
          cardNumber: $.cardNumber || null,
          administrationMethod: $.administrationMethod || null,
          paymentType: $.paymentType || null,
          reasons: $.reasons || null,
          doctorName: $.doctorName || null,
          date: $.date || null
        }
      }));
    }
    checkCurrentRoute() {
      this.isPreparationTab = this.router.url.includes("/preparation"), this.isPreparationTab && this.filterOpen && this.filterStateService.setFilterOpen(!1);
    }
  };
  let jd = jm;
  jm.ɵfac = function (k) {
    return new (k || jm)(n.Y36(wr), n.Y36(a.F0), n.Y36(oo), n.Y36(t.yh));
  }, jm.ɵcmp = n.Xpm({
    type: jm,
    selectors: [["app-dashboard"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(il, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.filterPanel = Ye.first);
      }
    },
    decls: 6,
    vars: 8,
    consts: [[1, "dashboard"], [1, "dashboard__main"], [1, "dashboard__header"], [1, "dashboard__content-header"], ["class", "dashboard__filter-toggle", 3, "click", 4, "ngIf"], ["class", "dashboard__filter-panel", 3, "is-open", 4, "ngIf"], [1, "dashboard__filter-toggle", 3, "click"], [1, "dashboard__setting-filter-sidebar"], ["icon", "filter", 3, "size"], ["color", "yellow", 3, "size", 4, "ngIf"], ["color", "yellow", 3, "size"], [1, "dashboard__filter-panel"], [3, "filters", "doctors", "administrationMethods", "paymentTypes", "closeClicked", "filtersChanged"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), n._UZ(3, "app-table-content-header", 3), n.YNc(4, ad, 4, 2, "div", 4), n.qZA()(), n.YNc(5, ld, 6, 17, "div", 5), n.qZA()), 2 & k && (n.ekj("dashboard--filter-open", ce.filterOpen && !ce.isPreparationTab)("dashboard--no-filter", ce.isPreparationTab), n.xp6(2), n.ekj("dashboard__header--full-width", ce.isPreparationTab), n.xp6(2), n.Q6J("ngIf", !ce.isPreparationTab), n.xp6(1), n.Q6J("ngIf", !ce.isPreparationTab));
    },
    dependencies: [Di.O5, Ci.q, lo.A, Ic, Lc, Di.Ov],
    styles: ["[_nghost-%COMP%]{display:block;height:100%}.dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;background-color:#f8fafb;overflow:hidden}.dashboard__main[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column;height:100%;overflow:hidden;transition:flex .3s ease-in-out}.dashboard__header[_ngcontent-%COMP%]{position:relative;background:#fff;flex:1;display:flex;flex-direction:column;overflow:hidden}@media (min-width: 961px){.dashboard__header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 60px;align-items:stretch;border-bottom:1px solid #e5e7eb}}@media (min-width: 961px){.dashboard__header--full-width[_ngcontent-%COMP%]{grid-template-columns:1fr}}.dashboard__content-header[_ngcontent-%COMP%]{overflow:hidden;height:100%}.dashboard__filter-toggle[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-shrink:0;transition:background-color .2s ease}@media (max-width: 960px){.dashboard__filter-toggle[_ngcontent-%COMP%]{position:absolute;top:11px;right:16px}.dashboard__filter-toggle[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #38a1d6}}@media (min-width: 961px){.dashboard__filter-toggle[_ngcontent-%COMP%]{border-left:1px solid #d9d9d9;background:#f2f2f2;cursor:pointer}}.dashboard__filter-toggle[_ngcontent-%COMP%]   .dashboard__setting-filter-sidebar[_ngcontent-%COMP%]{height:32px;width:32px;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;padding:0}.dashboard__filter-toggle[_ngcontent-%COMP%]   .dashboard__setting-filter-sidebar[_ngcontent-%COMP%]   lu-badge[_ngcontent-%COMP%]{margin:-20px 0 0 -8px;--lu-badge-padding: 4.5px}@media (min-width: 961px){.dashboard__filter-toggle[_ngcontent-%COMP%]   .dashboard__setting-filter-sidebar[_ngcontent-%COMP%]{height:56px;width:60px;border-right:4px solid #ffcc00;position:relative}.dashboard__filter-toggle[_ngcontent-%COMP%]   .dashboard__setting-filter-sidebar[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;left:8px;right:8px;height:1px;background-color:#d9d9d9}}.dashboard__filter-toggle[_ngcontent-%COMP%]   .dashboard__setting-filter-sidebar[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{color:#6b7280}@media (max-width: 960px){.dashboard__filter-toggle[_ngcontent-%COMP%]   .dashboard__setting-filter-sidebar[_ngcontent-%COMP%]{padding-top:1px}}.dashboard__filter-panel[_ngcontent-%COMP%]{width:0;overflow:hidden;background:#f2f2f2;border-left:1px solid #e5e7eb;transition:width .3s ease-in-out;flex-shrink:0}.dashboard__filter-panel.is-open[_ngcontent-%COMP%]{width:360px;box-shadow:-5px 0 20px #00000012}.dashboard__filter-panel[_ngcontent-%COMP%]   app-table-filters-sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:360px}@media (max-width: 960px){.dashboard__filter-panel[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;z-index:999;width:0;border-left:none}}@media (max-width: 960px){.dashboard--filter-open[_ngcontent-%COMP%]:before{content:\"\";position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:998}}"]
  });
  var Pu = i(60515),
    Ha = i(69784),
    vu = i(33413),
    Zd = i(66425),
    Fp = i(29358),
    vp = i(54482),
    Cc = i(25032),
    ep = i(25403),
    Np = i(38421),
    yd = i(82805),
    Yd = i(78372),
    lf = i(13207),
    Up = i(71273),
    lh = i(62104);
  const eh = class {};
  let Wd = eh;
  eh.ɵfac = function (k) {
    return new (k || eh)();
  }, eh.ɵcmp = n.Xpm({
    type: eh,
    selectors: [["app-sun-moon-icon"]],
    decls: 12,
    vars: 0,
    consts: [["width", "50", "height", "20", "viewBox", "0 0 50 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C10.4602 0 10.8333 0.373096 10.8333 0.833333V3.75C10.8333 4.21024 10.4602 4.58333 10 4.58333C9.53976 4.58333 9.16667 4.21024 9.16667 3.75V0.833333C9.16667 0.373096 9.53976 0 10 0Z", "fill", "#757575"], ["d", "M5.24408 6.17936L3.18168 4.11697C2.85625 3.79153 2.85625 3.26389 3.18168 2.93846C3.50712 2.61302 4.03476 2.61302 4.36019 2.93846L6.42259 5.00085C6.74803 5.32629 6.74803 5.85393 6.42259 6.17936C6.09715 6.5048 5.56951 6.5048 5.24408 6.17936Z", "fill", "#757575"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 10C14.1667 7.69881 12.3012 5.83333 10 5.83333C7.69881 5.83333 5.83333 7.69881 5.83333 10C5.83333 12.3012 7.69881 14.1667 10 14.1667ZM10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z", "fill", "#757575"], ["d", "M15.4167 10C15.4167 9.53976 15.7898 9.16667 16.25 9.16667H19.1667C19.6269 9.16667 20 9.53976 20 10C20 10.4602 19.6269 10.8333 19.1667 10.8333H16.25C15.7898 10.8333 15.4167 10.4602 15.4167 10Z", "fill", "#757575"], ["d", "M10.8333 16.25C10.8333 15.7898 10.4602 15.4167 10 15.4167C9.53976 15.4167 9.16667 15.7898 9.16667 16.25V19.1667C9.16667 19.6269 9.53976 20 10 20C10.4602 20 10.8333 19.6269 10.8333 19.1667V16.25Z", "fill", "#757575"], ["d", "M13.8183 13.8472C14.1437 13.5217 14.6714 13.5217 14.9968 13.8472L17.0592 15.9096C17.3846 16.235 17.3846 16.7627 17.0592 17.0881C16.7338 17.4135 16.2061 17.4135 15.8807 17.0881L13.8183 15.0257C13.4929 14.7003 13.4929 14.1726 13.8183 13.8472Z", "fill", "#757575"], ["d", "M5.00329 13.8472C5.32873 13.5217 5.85637 13.5217 6.18181 13.8472C6.50724 14.1726 6.50724 14.7003 6.18181 15.0257L4.11941 17.0881C3.79397 17.4135 3.26634 17.4135 2.9409 17.0881C2.61546 16.7627 2.61546 16.235 2.9409 15.9096L5.00329 13.8472Z", "fill", "#757575"], ["d", "M14.9968 6.17936C14.6714 6.5048 14.1437 6.5048 13.8183 6.17936C13.4929 5.85393 13.4929 5.32629 13.8183 5.00085L15.8807 2.93846C16.2061 2.61302 16.7338 2.61302 17.0592 2.93846C17.3846 3.26389 17.3846 3.79153 17.0592 4.11697L14.9968 6.17936Z", "fill", "#757575"], ["d", "M0.833333 9.16667C0.373096 9.16667 0 9.53976 0 10C0 10.4602 0.373096 10.8333 0.833333 10.8333H3.75C4.21024 10.8333 4.58333 10.4602 4.58333 10C4.58333 9.53976 4.21024 9.16667 3.75 9.16667H0.833333Z", "fill", "#757575"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M24 17.6079L28.0744 2L29.5 2.39207L25.4256 18L24 17.6079Z", "fill", "#757575"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M37.1505 14.9936C39.9548 17.2919 44.1183 16.9144 46.45 14.1503C48.7817 11.3862 48.3986 7.28226 45.5944 4.98394C44.9392 4.44695 44.2113 4.05649 43.4502 3.80815C44.3561 6.24046 44.2463 8.93105 42.544 10.949C40.8418 12.967 38.1779 13.5643 35.5864 13.1302C35.973 13.8225 36.4953 14.4566 37.1505 14.9936ZM47.6217 15.1106C44.7519 18.5126 39.6276 18.9773 36.1762 16.1486C34.834 15.0485 33.9425 13.6124 33.5228 12.0678C33.3779 11.5341 33.9498 11.129 34.4803 11.3074C37.1524 12.2059 39.8557 11.7865 41.3723 9.98868C42.8889 8.19089 42.814 5.49446 41.4301 3.06879C41.1554 2.58723 41.4551 1.95898 42.0139 2.00211C43.6312 2.12693 45.2264 2.72891 46.5686 3.82898C50.02 6.65768 50.4915 11.7086 47.6217 15.1106Z", "fill", "#757575"]],
    template: function (k, ce) {
      1 & k && (n.O4$(), n.TgZ(0, "svg", 0), n._UZ(1, "path", 1)(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11), n.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
  const am = class {};
  let ch = am;
  am.ɵfac = function (k) {
    return new (k || am)();
  }, am.ɵcmp = n.Xpm({
    type: am,
    selectors: [["app-clock-icon"]],
    decls: 2,
    vars: 0,
    consts: [["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 16.1C12.9212 16.1 16.1 12.9212 16.1 9C16.1 5.07878 12.9212 1.9 9 1.9C5.07878 1.9 1.9 5.07878 1.9 9C1.9 12.9212 5.07878 16.1 9 16.1ZM9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 4C8.44772 4 8 4.44772 8 5V9C8 9.46681 8.31986 9.85892 8.75237 9.9691C8.81893 10.1309 8.93745 10.2733 9.10092 10.3677L11.1981 11.5785C11.5889 11.8041 12.0885 11.6702 12.3141 11.2794C12.5397 10.8887 12.4059 10.389 12.0151 10.1634L10 9V5C10 4.44772 9.55228 4 9 4Z", "fill", "#757575"]],
    template: function (k, ce) {
      1 & k && (n.O4$(), n.TgZ(0, "svg", 0), n._UZ(1, "path", 1), n.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
  const Th = ["panelRef"],
    tp = function (Te, $) {
      return {
        "chip--active": Te,
        "chip--disabled": $
      };
    };
  function zd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 16), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        return n.KtG(ai.onStatusToggle(Tt.value));
      }), n._uU(1), n.TgZ(2, "span", 17), n._uU(3), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      n.Q6J("ngClass", n.WLB(4, tp, ce.isStatusSelected(k.value), 0 === k.count))("disabled", 0 === k.count), n.xp6(1), n.hij(" ", k.label, " "), n.xp6(2), n.Oqu(k.count);
    }
  }
  function wm(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, zd, 4, 7, "button", 15), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.statusOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  function Eh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "lu-option", 25), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(8);
        return n.oxw().onStatusToggle(Tt.value), n.KtG(ai.close());
      }), n.TgZ(2, "div", 26)(3, "span"), n._uU(4), n.qZA(), n.TgZ(5, "span", 17), n._uU(6), n.qZA()()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.ekj("selected", ce.isStatusSelected(k.value)), n.Q6J("disabled", 0 === k.count)("value", k.label), n.xp6(3), n.Oqu(k.label), n.xp6(2), n.Oqu(k.count);
    }
  }
  function Cp(Te, $) {
    if (1 & Te && n.YNc(0, Eh, 7, 6, "ng-container", 24), 2 & Te) {
      const k = n.oxw(2);
      n.Q6J("ngForOf", k.statusOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  function jf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 18, 19), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(8);
        return n.KtG(Ye.toggle());
      }), n.TgZ(2, "span"), n._uU(3), n.qZA(), n.TgZ(4, "span"), n._uU(5), n.qZA(), n._UZ(6, "lu-svg-icon", 20), n.TgZ(7, "lu-dropdown", 21, 22), n.YNc(9, Cp, 1, 2, "ng-template", null, 23, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(8),
        ce = n.MAs(10),
        Ye = n.oxw();
      n.xp6(3), n.Oqu(Ye.statusSelectedLabel), n.xp6(2), n.Oqu(Ye.statusSelectedCount), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("panelClass", "mob-dropdown")("content", ce)("positions", "bottom-left");
    }
  }
  function Dh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 27), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        let Zi;
        return n.KtG(null == (Zi = ai.filtersForm.get("grouping")) ? null : Zi.setValue(Tt.value));
      }), n.TgZ(1, "span", 28), n._uU(2), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      let Ye;
      n.ekj("toggle--active", (null == (Ye = ce.filtersForm.get("grouping")) ? null : Ye.value) === k.value), n.xp6(2), n.Oqu(k.label);
    }
  }
  function cf(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 11), n.YNc(1, Dh, 3, 3, "button", 12), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.groupingOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  const np = function (Te) {
    return {
      selected: Te
    };
  };
  function Sl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 37, 38), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(3);
        return n.KtG(Ye.wardControl.setValue("Не размещен"));
      }), n.ALo(2, "async"), n._uU(3, " Не размещен "), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(3);
      n.Q6J("selectable", !1)("ngClass", n.VKq(5, np, "Не размещен" === k.wardControl.value))("disabled", !n.lcZ(2, 3, k.hasUnplacedPatients$));
    }
  }
  function uf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 39), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.wardControl.setValue(Tt));
      }), n.ALo(1, "async"), n._uU(2), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      let Ye;
      n.ekj("selected", ce.wardControl.value === k), n.s9C("value", k), n.Q6J("selectable", !1)("disabled", !(null != (Ye = n.lcZ(1, 6, ce.wards$)) && Ye.length)), n.xp6(2), n.hij(" ", k, " ");
    }
  }
  function Hp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.wardControl.setValue("all"));
      }), n._uU(1, " Все палаты "), n.qZA(), n.YNc(2, Sl, 4, 7, "lu-option", 35), n.ALo(3, "async"), n.YNc(4, uf, 3, 8, "lu-option", 36), n.ALo(5, "async");
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.ekj("selected", "all" === k.wardControl.value), n.Q6J("selectable", !1), n.xp6(2), n.Q6J("ngIf", n.lcZ(3, 6, k.hasUnplacedPatients$)), n.xp6(2), n.Q6J("ngForOf", n.lcZ(5, 8, k.wards$))("ngForTrackBy", k.trackByWard);
    }
  }
  function Zf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 29, 30), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(8);
        return n.KtG(Ye.toggle());
      }), n.ALo(2, "async"), n.ALo(3, "async"), n.TgZ(4, "span"), n._uU(5), n.qZA(), n._UZ(6, "lu-svg-icon", 31), n.TgZ(7, "lu-dropdown", 21, 32), n.YNc(9, Hp, 6, 10, "ng-template", null, 33, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(8),
        ce = n.MAs(10),
        Ye = n.oxw();
      let Tt;
      n.Q6J("ngClass", n.WLB(11, tp, "byWard" === (null == (Tt = Ye.filtersForm.get("grouping")) ? null : Tt.value), !(null != (Tt = n.lcZ(2, 7, Ye.wards$)) && Tt.length || n.lcZ(3, 9, Ye.hasUnplacedPatients$)))), n.xp6(5), n.Oqu(Ye.getWardLabel(Ye.wardControl.value)), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("panelClass", "mob-dropdown")("content", ce)("positions", "bottom-left");
    }
  }
  function Yf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 45), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(3);
        return n.KtG(Ye.wardControl.setValue("Не размещен"));
      }), n.ALo(1, "async"), n._uU(2, " Не размещен "), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(3);
      n.ekj("selected", "Не размещен" === k.wardControl.value), n.Q6J("selectable", !1)("disabled", !n.lcZ(1, 4, k.hasUnplacedPatients$));
    }
  }
  function yp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 39), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.wardControl.setValue(Tt));
      }), n.ALo(1, "async"), n._uU(2), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      let Ye;
      n.ekj("selected", ce.wardControl.value === k), n.s9C("value", k), n.Q6J("selectable", !1)("disabled", !(null != (Ye = n.lcZ(1, 6, ce.wards$)) && Ye.length)), n.xp6(2), n.hij(" ", k, " ");
    }
  }
  function uh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 34), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2);
        return n.KtG(Ye.wardControl.setValue("all"));
      }), n._uU(1, " Все палаты "), n.qZA(), n.YNc(2, Yf, 3, 6, "lu-option", 44), n.ALo(3, "async"), n.YNc(4, yp, 3, 8, "lu-option", 36), n.ALo(5, "async");
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.ekj("selected", "all" === k.wardControl.value), n.Q6J("selectable", !1), n.xp6(2), n.Q6J("ngIf", n.lcZ(3, 6, k.hasUnplacedPatients$)), n.xp6(2), n.Q6J("ngForOf", n.lcZ(5, 8, k.wards$))("ngForTrackBy", k.trackByWard);
    }
  }
  function cd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 40), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(5);
        return n.KtG(Ye.toggle());
      }), n.TgZ(1, "span"), n._uU(2), n.qZA(), n._UZ(3, "lu-svg-icon", 20), n.TgZ(4, "lu-dropdown", 41, 42), n.YNc(6, uh, 6, 10, "ng-template", null, 43, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(5),
        ce = n.MAs(7),
        Ye = n.oxw();
      n.xp6(2), n.Oqu(Ye.getWardLabel(Ye.wardControl.value)), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("closeIfOutsideClick", !1)("panelClass", "mob-dropdown")("content", ce)("withArrow", !1);
    }
  }
  function Bp(Te, $) {
    1 & Te && n._UZ(0, "app-sun-moon-icon", 47);
  }
  function Vp(Te, $) {
    1 & Te && n._UZ(0, "app-clock-icon", 47);
  }
  function ed(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 27), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw();
        let Zi;
        return n.KtG(null == (Zi = ai.filtersForm.get("sorting")) ? null : Zi.setValue(Tt.value));
      }), n.YNc(1, Bp, 1, 0, "app-sun-moon-icon", 46), n.YNc(2, Vp, 1, 0, "app-clock-icon", 46), n.TgZ(3, "span", 28), n._uU(4), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw();
      let Ye;
      n.ekj("toggle--active", (null == (Ye = ce.filtersForm.get("sorting")) ? null : Ye.value) === k.value), n.xp6(1), n.Q6J("ngIf", k.value === ce.sortingOptions[0].value && !ce.isTablet), n.xp6(1), n.Q6J("ngIf", k.value === ce.sortingOptions[1].value && !ce.isTablet), n.xp6(2), n.Oqu(k.label);
    }
  }
  function dh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 53), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(3);
        return n.KtG(Tt.periodControl.setValue(Ye.value));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.ekj("selected", ce.periodControl.value === k.value), n.Q6J("selectable", !1)("value", k.value), n.xp6(1), n.hij(" ", k.label, " ");
    }
  }
  function jp(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, dh, 2, 5, "lu-option", 52), n.BQk()), 2 & Te) {
      const k = $.$implicit;
      n.xp6(1), n.Q6J("ngIf", "Все времена суток" !== k.label);
    }
  }
  function Xa(Te, $) {
    if (1 & Te && n.YNc(0, jp, 2, 1, "ng-container", 24), 2 & Te) {
      const k = n.oxw(2);
      n.Q6J("ngForOf", k.periodOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  function Zp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 48, 49), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(6);
        return n.KtG(Ye.toggle());
      }), n.TgZ(2, "span"), n._uU(3), n.qZA(), n._UZ(4, "lu-svg-icon", 31), n.TgZ(5, "lu-dropdown", 21, 50), n.YNc(7, Xa, 1, 2, "ng-template", null, 51, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(6),
        ce = n.MAs(8),
        Ye = n.oxw();
      n.xp6(3), n.Oqu(Ye.getPeriodLabel(Ye.periodControl.value)), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("panelClass", "mob-dropdown")("content", ce)("positions", "bottom-left");
    }
  }
  function Yp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 59), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.periodControl.setValue(Tt.value));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      n.ekj("selected", ce.periodControl.value === k.value), n.s9C("value", k.value), n.xp6(1), n.hij(" ", k.label, " ");
    }
  }
  function xe(Te, $) {
    if (1 & Te && n.YNc(0, Yp, 2, 4, "lu-option", 58), 2 & Te) {
      const k = n.oxw(2);
      n.Q6J("ngForOf", k.periodOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  function et(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 54, 19), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(6);
        return n.KtG(Ye.toggle());
      }), n.TgZ(2, "span"), n._uU(3), n.qZA(), n._UZ(4, "lu-svg-icon", 20), n.TgZ(5, "lu-dropdown", 55, 56), n.YNc(7, xe, 1, 2, "ng-template", null, 57, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(6),
        ce = n.MAs(8),
        Ye = n.oxw();
      n.xp6(3), n.Oqu(Ye.getPeriodLabel(Ye.periodControl.value)), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("closeIfInnerClick", !0)("panelClass", "mob-dropdown")("content", ce)("withArrow", !1);
    }
  }
  let z = ((lm = class {
    constructor($, k, ce, Ye, Tt) {
      this.breakpointObserver = $, this.cdr = k, this.filterStateService = ce, this.store = Ye, this.activeMedicamentsModuleService = Tt, this.filtersChanged = new n.vpe(), this.slotProcessor = (0, n.f3M)(gi), this.isTablet = !1, this.isCompactMode = !1, this.statusOptions = [{
        value: "all",
        label: "Все",
        count: 0
      }, {
        value: "symptomatic",
        label: "Симптоматические",
        count: 0
      }, {
        value: "active",
        label: "Активные",
        count: 0
      }, {
        value: "missed",
        label: "Пропущенные выдачи",
        count: 0
      }, {
        value: "completed",
        label: "Завершенные",
        count: 0
      }], this.statusSelectedLabel = "Все", this.statusSelectedCount = 0, this.groupingOptions = [{
        value: "byPatient",
        label: "По пациентам"
      }, {
        value: "byMedicament",
        label: "По медикаментам"
      }], this.sortingOptions = [{
        value: "byTimeOfDay",
        label: "По времени суток"
      }, {
        value: "byHour",
        label: "По часам"
      }], this.periodOptions = [{
        value: "all",
        label: "Все"
      }, {
        value: "morning",
        label: "Утро"
      }, {
        value: "day",
        label: "День"
      }, {
        value: "evening",
        label: "Вечер"
      }, {
        value: "night",
        label: "Ночь"
      }], this.filtersForm = new vr.cw({
        status: new vr.Oe([]),
        grouping: new vr.NI("byPatient"),
        sorting: new vr.NI("byTimeOfDay"),
        ward: new vr.NI("all"),
        period: new vr.NI("all"),
        search: new vr.NI(null)
      }), this.stateFilters = {}, this.isPillbox = !1, this.isPillbox = "pillboxes" === this.activeMedicamentsModuleService.activeArm;
    }
    ngOnInit() {
      this.statusArray.push(new vr.NI("all")), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe(Tt => {
        this.isTablet = Tt.matches, this.periodOptions[0].label = this.isTablet ? "Все времена суток" : "Все", this.cdr.markForCheck();
      }), this.filterStateService.filterOpen$.pipe((0, Xn.t)(this), function Cd(Te) {
        return (0, vp.e)(($, k) => {
          let ce = !1,
            Ye = null,
            Tt = null;
          const ai = () => {
            if (Tt?.unsubscribe(), Tt = null, ce) {
              ce = !1;
              const Zi = Ye;
              Ye = null, k.next(Zi);
            }
          };
          $.subscribe(new ep.Q(k, Zi => {
            Tt?.unsubscribe(), ce = !0, Ye = Zi, Tt = new ep.Q(k, ai, Cc.Z), (0, Np.Xf)(Te(Zi)).subscribe(Tt);
          }, () => {
            ai(), k.complete();
          }, void 0, () => {
            Ye = Tt = null;
          }));
        });
      }(Tt => Tt ? (0, qe.of)(Tt) : (0, yd.H)(350))).subscribe(Tt => {
        this.isCompactMode = Tt, this.cdr.markForCheck();
      }), this.wards$ = this.store.select(le.kT), this.hasUnplacedPatients$ = this.store.select(le.NZ).pipe((0, q.U)(Tt => (Tt ?? []).some(ai => !ai.ward || "Не размещен" === String(ai.ward))));
      const $ = [Re.Ai.Assigned, Re.vd.Prepared, Re.Ai.Editing, Re.vd.Systematically],
        k = [Re.vd.MissedAssigned, Re.vd.MissedPrepared],
        Ye = Tt => {
          const ai = Tt.status;
          if ("SYSTEMATICALLY" === ai || "ASSIGNED" !== ai && "PREPARED" !== ai) return ai;
          const Zi = "ASSIGNED" === ai ? "MISSED_ASSIGNED" : "MISSED_PREPARED",
            Po = "ASSIGNED" === ai ? "FUTURE_ASSIGNED" : "FUTURE_PREPARED";
          if (this.slotProcessor.isSlotFutureLocked(Tt)) return Po;
          if (Tt.planningDate) {
            const fo = new Date(),
              Wr = (0, Ft.H)(fo),
              Cs = (0, Ft.O)(Tt.planningDate);
            if (Cs < Wr) return Zi;
            if (Cs > Wr) return ai;
            if ((0, Ct.a2)(Tt, fo)) return Zi;
          }
          return ai;
        };
      this.store.select(le.Fv).pipe((0, Xn.t)(this)).subscribe(Tt => {
        const ai = {
          symptomatic: 0,
          active: 0,
          missed: 0,
          completed: 0
        };
        let Zi = 0;
        Tt && Tt.forEach(Po => {
          Po.medicines.forEach(fo => {
            const Wr = fo.frequency?.toLowerCase().includes("симптоматически") ?? !1;
            Zi += fo.slots.length, fo.slots.forEach(Cs => {
              Wr && ai.symptomatic++;
              const ia = Ye(Cs);
              $.includes(ia) ? ai.active++ : k.includes(ia) ? ai.missed++ : "COMPLETED" === ia && ai.completed++;
            });
          });
        }), this.statusOptions = [{
          value: "all",
          label: "Все",
          count: Zi
        }, {
          value: "symptomatic",
          label: "Симптоматические",
          count: ai.symptomatic
        }, {
          value: "active",
          label: "Активные",
          count: ai.active
        }, {
          value: "missed",
          label: "Пропущенные выдачи",
          count: ai.missed
        }, {
          value: "completed",
          label: "Завершенные",
          count: ai.completed
        }], this.updateSelectedStatusLabel(), this.cdr.markForCheck();
      }), this.filtersForm.get("grouping").valueChanges.pipe((0, Xn.t)(this)).subscribe(Tt => {
        "byWard" !== Tt && this.wardControl.setValue("all", {
          emitEvent: !1
        });
      }), this.store.select(le.mj).pipe((0, Xn.t)(this)).subscribe(Tt => this.stateFilters = Tt), this.filtersForm.valueChanges.pipe((0, Yd.b)(150), (0, Xn.t)(this)).subscribe(Tt => {
        const ai = {
          status: 0 === Tt.status.length ? ["all"] : Tt.status,
          grouping: Tt.grouping ?? null,
          sorting: Tt.sorting ?? null,
          ward: "all" === Tt.ward ? null : String(Tt.ward),
          period: "all" === Tt.period ? null : Tt.period,
          search: Tt.search ?? this.stateFilters?.search ?? null
        };
        this.filtersChanged.emit(ai), this.updateSelectedStatusLabel(), this.cdr.detectChanges();
      });
    }
    get statusArray() {
      return this.filtersForm.get("status");
    }
    get wardControl() {
      return this.filtersForm.get("ward");
    }
    get periodControl() {
      return this.filtersForm.get("period");
    }
    getHeight() {
      return this.panelRef.nativeElement.clientHeight;
    }
    getWardLabel($) {
      return "all" === $ ? "Все палаты" : $;
    }
    getPeriodLabel($) {
      if (!$) return "";
      const k = this.periodOptions.find(ce => ce.value === $);
      return k ? k.label : $;
    }
    onStatusToggle($) {
      this.statusArray.clear(), this.statusArray.push(new vr.NI($));
    }
    isStatusSelected($) {
      return this.statusArray.controls.some(k => k.value === $);
    }
    trackByOptionValue($, k) {
      return k.value;
    }
    trackByWard($, k) {
      return k;
    }
    wardFilterHandler($, k) {
      this.wardControl.setValue(k);
    }
    updateSelectedStatusLabel() {
      const $ = this.filtersForm.value.status?.[0] || "all",
        k = this.statusOptions.find(ce => ce.value === $);
      k && (this.statusSelectedCount = k.count, this.statusSelectedLabel = k.label);
    }
  }).ɵfac = function (k) {
    return new (k || lm)(n.Y36(Gn.Yg), n.Y36(n.sBO), n.Y36(oo), n.Y36(t.yh), n.Y36(Yo.w));
  }, lm.ɵcmp = n.Xpm({
    type: lm,
    selectors: [["pill-plan-medicines-panel"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(Th, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.panelRef = Ye.first);
      }
    },
    outputs: {
      filtersChanged: "filtersChanged"
    },
    decls: 15,
    vars: 10,
    consts: [[1, "chips-toolbar", 3, "formGroup"], ["panelRef", ""], [1, "chips-row"], [1, "chips-first-section"], [4, "ngIf"], ["lu-button-raised", "", "class", "mob-dropdown-btn mob-dropdown-btn--status", "luDropdownOrigin", "", 3, "click", 4, "ngIf"], [1, "chips-select-section"], ["class", "toggle-group", 4, "ngIf"], ["type", "button", "class", "chip chip--dropdown chip--dropdown-btn", "luDropdownOrigin", "", 3, "ngClass", "click", 4, "ngIf"], ["lu-button-link", "", "luDropdownButton", "", "class", "mob-dropdown-btn", 3, "click", 4, "ngIf"], [1, "chips-select-section", "chips-select-section--day"], [1, "toggle-group"], ["type", "button", "class", "toggle", 3, "toggle--active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "class", "chip chip--dropdown chip--dropdown-btn", "luDropdownOrigin", "", 3, "click", 4, "ngIf"], ["lu-button-raised", "", "luDropdownOrigin", "", "class", "mob-dropdown-btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "chip", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "chip", 3, "ngClass", "disabled", "click"], [1, "chip__count"], ["lu-button-raised", "", "luDropdownOrigin", "", 1, "mob-dropdown-btn", "mob-dropdown-btn--status", 3, "click"], ["origin", "luDropdownOrigin"], ["icon", "chevron-down", "luButtonPostfix", "", 3, "size", "luChevronRotate"], [3, "panelClass", "content", "positions"], ["dropdownStatus", ""], ["contentStatus", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "click"], [1, "status-option"], ["type", "button", 1, "toggle", 3, "click"], [1, "toggle__label"], ["type", "button", "luDropdownOrigin", "", 1, "chip", "chip--dropdown", "chip--dropdown-btn", 3, "ngClass", "click"], ["originWardDesktop", "luDropdownOrigin"], ["icon", "chevron-down", 3, "size", "luChevronRotate"], ["dropdownWardDesktop", ""], ["contentWardDesktop", ""], ["value", "Все палаты", 3, "selectable", "click"], ["value", "Не размещен", 3, "selectable", "ngClass", "disabled", "click", 4, "ngIf"], [3, "selectable", "selected", "disabled", "value", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["value", "Не размещен", 3, "selectable", "ngClass", "disabled", "click"], ["noWard", ""], [3, "selectable", "disabled", "value", "click"], ["lu-button-link", "", "luDropdownButton", "", 1, "mob-dropdown-btn", 3, "click"], ["minWidth", "135px", "positions", "bottom-left", 3, "closeIfOutsideClick", "panelClass", "content", "withArrow"], ["dropdownWard", ""], ["contentWard", ""], ["value", "Не размещен", 3, "selectable", "selected", "disabled", "click", 4, "ngIf"], ["value", "Не размещен", 3, "selectable", "disabled", "click"], ["class", "toggle__icon", 4, "ngIf"], [1, "toggle__icon"], ["type", "button", "luDropdownOrigin", "", 1, "chip", "chip--dropdown", "chip--dropdown-btn", 3, "click"], ["originPeriodDesktop", "luDropdownOrigin"], ["dropdownPeriodDesktop", ""], ["contentPeriodDesktop", ""], [3, "selectable", "selected", "value", "click", 4, "ngIf"], [3, "selectable", "value", "click"], ["lu-button-raised", "", "luDropdownOrigin", "", 1, "mob-dropdown-btn", 3, "click"], ["minWidth", "135px", "positions", "bottom-right", 3, "closeIfInnerClick", "panelClass", "content", "withArrow"], ["dropdownPeriod", ""], ["content", ""], [3, "selected", "value", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value", "click"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "div", 3), n.YNc(4, wm, 2, 2, "ng-container", 4), n.YNc(5, jf, 11, 7, "button", 5), n.qZA(), n.TgZ(6, "div", 6), n.YNc(7, cf, 2, 2, "div", 7), n.YNc(8, Zf, 11, 14, "button", 8), n.qZA(), n.YNc(9, cd, 8, 7, "button", 9), n.TgZ(10, "div", 10)(11, "div", 11), n.YNc(12, ed, 5, 5, "button", 12), n.qZA(), n.YNc(13, Zp, 9, 6, "button", 13), n.YNc(14, et, 9, 7, "button", 14), n.qZA()()()), 2 & k && (n.Q6J("formGroup", ce.filtersForm), n.xp6(4), n.Q6J("ngIf", !ce.isTablet && !ce.isCompactMode), n.xp6(1), n.Q6J("ngIf", ce.isTablet || ce.isCompactMode), n.xp6(2), n.Q6J("ngIf", ce.isPillbox), n.xp6(1), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet), n.xp6(3), n.Q6J("ngForOf", ce.sortingOptions)("ngForTrackBy", ce.trackByOptionValue), n.xp6(1), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet));
    },
    dependencies: [Di.mk, Di.sg, Di.O5, vr.JL, vr.sg, Ks.mc, Ks.zY, _r.$, lf.k, Ci.q, js.n, Up.c, lh.G, Wd, ch, Di.Ov],
    styles: ["@charset \"UTF-8\";.chips-toolbar[_ngcontent-%COMP%]{width:100%;padding:16px;background:none}@media (min-width: 992px){.chips-toolbar[_ngcontent-%COMP%]{padding:16px 24px}}.chips-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;width:100%;position:relative;scrollbar-width:none}@media (min-width: 992px){.chips-row[_ngcontent-%COMP%]{gap:32px}}.chips-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}  lu-option:hover{background-color:#38a1d61a!important}  lu-option[data-lu-selected=true],   lu-option.selected{background-color:#38a1d633!important}  lu-option[data-lu-selected=true]:first-of-type,   lu-option.selected:first-of-type{border-radius:4px 4px 0 0}.chip[_ngcontent-%COMP%], .chip--active[_ngcontent-%COMP%]{background:rgba(56,161,214,.1019607843);border:none;border-radius:15px;padding:0 12px;min-width:76px;max-width:260px;height:32px;color:#333;font-size:15px;display:flex;align-items:center;justify-content:center;transition:font-size .16s,min-width .16s;white-space:normal;word-break:break-word;text-align:center;text-overflow:initial}.chip--active[_ngcontent-%COMP%]{background:#ffe766;color:#623700;box-shadow:0 2px 22px #fffacc72}.chip--dropdown[_ngcontent-%COMP%]{padding:0;background:rgba(56,161,214,.1)}.chip--dropdown-btn[_ngcontent-%COMP%]{cursor:pointer;padding:0 12px;gap:4px;--lu-svg-icon-color: #757575}.chip--dropdown-btn[_ngcontent-%COMP%]:hover{opacity:.85}.chip__count[_ngcontent-%COMP%], .chip-label[_ngcontent-%COMP%]{white-space:normal;word-break:break-word;text-align:center;overflow:visible;margin-left:8px;color:#757575}.chip-select[_ngcontent-%COMP%]{min-width:70px;max-width:160px;height:32px;background:inherit;border:none;border-radius:15px;color:inherit;padding:0 43px 0 16px;font-size:15px;outline:none;appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4 6L8 10L12 6' stroke='%23888' stroke-width='2' stroke-linecap='round'/></svg>\");background-repeat:no-repeat;background-position:right 12px center;white-space:normal;word-break:break-word}.chip-select-another[_ngcontent-%COMP%]{min-width:70px;max-width:160px;height:32px;background:inherit;border:none;border-radius:15px;color:inherit;padding:0 23px 0 15px;font-size:15px;outline:none;appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4 6L8 10L12 6' stroke='%23888' stroke-width='2' stroke-linecap='round'/></svg>\");background-repeat:no-repeat;background-position:right 12px center;white-space:normal;word-break:break-word}.chip-select-another[_ngcontent-%COMP%]:focus{outline:none!important;box-shadow:none!important}.chip-select[_ngcontent-%COMP%]:focus{outline:none!important;box-shadow:none!important}.chip--active[_ngcontent-%COMP%]   .chip-select[_ngcontent-%COMP%]{background:#ffe766;color:#623700}.chip-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#2d315a;font-size:17px}.toggle-group[_ngcontent-%COMP%]{display:inline-flex;background:rgba(56,161,214,.1019607843);border-radius:16px}.toggle[_ngcontent-%COMP%]{position:relative;border:none;background:transparent;padding:0 12px;min-width:80px;max-width:260px;height:32px;color:#333;font-size:15px;display:flex;align-items:center;justify-content:center;white-space:normal;word-break:break-word;text-align:center;cursor:pointer;border-radius:0;transition:background .16s,box-shadow .16s}.toggle--active[_ngcontent-%COMP%]{background:#ffe766;box-shadow:0 2px 22px #fffacc72;border-radius:16px;z-index:1}.chip--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.toggle__icon[_ngcontent-%COMP%]{margin-right:8px;flex-shrink:0}.chips-first-section[_ngcontent-%COMP%]{display:flex;gap:9px}.chips-select-section[_ngcontent-%COMP%]{display:flex;gap:8px;z-index:0}@media (min-width: 600px) and (max-width: 960px){.chips-select-section[_ngcontent-%COMP%]{gap:16px}}@media (min-width: 992px){.chips-select-section--day[_ngcontent-%COMP%]{margin-left:auto}}.mob-dropdown-btn[_ngcontent-%COMP%]{padding:0;min-width:135px}.mob-dropdown-btn[lu-button-link][_ngcontent-%COMP%]     .lu-button-wrapper{padding-top:4px;padding-bottom:4px}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper{justify-content:flex-start;padding-left:4px!important;padding-right:4px!important;border:0;border-radius:16px;font-weight:400;color:#333;background-color:#38a1d61a;--lu-svg-icon-color: #757575 !important}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text{display:flex;gap:8px;margin-right:4px;font-size:15px}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text span:not(:first-child){color:#757575}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text+.lu-button-content{margin-left:auto}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper:hover:not([data-lu-disabled=true]){--lu-button-background: transparent}  .mob-dropdown{margin-top:8px;border-radius:4px;min-width:135px}  .mob-dropdown lu-option{display:flex;justify-content:space-between;align-items:center}  .mob-dropdown lu-option:before{content:none!important}  .mob-dropdown lu-option.selected,   .mob-dropdown lu-option[data-lu-selected=true]{background:rgba(56,161,214,.2)!important}  .mob-dropdown lu-option.selected:first-of-type,   .mob-dropdown lu-option[data-lu-selected=true]:first-of-type{border-radius:4px 4px 0 0}  .mob-dropdown lu-option .status-option{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:245px}  .mob-dropdown lu-option .chip__count{margin-left:auto;color:#757575}"],
    changeDetection: 0
  }), lm);
  z = (0, Se.gn)([(0, Xn.c)()], z);
  var Cn,
    De = i(54968),
    rt = i(68675);
  const po = ["headerEl"],
    dr = ["dosingPatient"];
  function Rs(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "pill-dosing-by-patient", 8, 9), n.NdJ("scroll", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onContentScroll(Ye));
      })("slotAction", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onSlotAction(Ye));
      }), n.ALo(2, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.Udp("--time-column-width", k.timeColumnWidthCss), n.Q6J("ngStyle", n.lcZ(2, 16, k.heightChanged$))("patientData", k.visiblePatients)("gridTemplateColumns", k.gridTemplateStyle)("timeHeaderMode", k.timeHeaderMode)("allHourlyHeaders", k.allHourlyHeaders)("visibleHourlyHeaders", k.visibleHourlyHeaders)("selectedPeriod", k.selectedPeriod)("selectedTime", k.selectedTime)("selectedColumnIndex", k.selectedColumnIndex)("gridColumnsCount", k.gridColumnsCount)("searchTerm", k.searchTerm)("loadingFlag", k.loadingFlag)("hasMoreData", k.hasMoreData)("onLoadMore", k.loadMorePatients);
    }
  }
  function Aa(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "pill-dosing-by-medicament", 10), n.NdJ("scroll", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onContentScroll(Ye));
      })("slotAction", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw();
        return n.KtG(Tt.onSlotAction(Ye));
      }), n.ALo(1, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.Udp("--time-column-width", k.timeColumnWidthCss), n.Q6J("medicamentData", k.visibleMedicamentData)("ngStyle", n.lcZ(1, 16, k.heightChanged$))("gridTemplateColumns", k.gridTemplateStyle)("timeHeaderMode", k.timeHeaderMode)("allHourlyHeaders", k.allHourlyHeaders)("visibleHourlyHeaders", k.visibleHourlyHeaders)("selectedPeriod", k.selectedPeriod)("selectedTime", k.selectedTime)("selectedColumnIndex", k.selectedColumnIndex)("gridColumnsCount", k.gridColumnsCount)("searchTerm", k.searchTerm)("loadingFlag", k.loadingFlag)("hasMoreData", k.hasMoreData)("onLoadMore", k.loadMoreMedicaments);
    }
  }
  let ml = ((Gu = class {
    get timeColumnWidthCss() {
      return `${this.timeColumnWidth}px`;
    }
    constructor($, k, ce, Ye) {
      this.cdr = $, this.renderer = k, this.modalHelper = ce, this.viewContainerRef = Ye, this.groupingMode = "byPatient", this.patientData = null, this.medicamentData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.selectedPeriod = null, this.searchTerm = "", this.settingsClick = new n.vpe(), this.slotAction = new n.vpe(), this.activeIndex = 0, this.hoursPerPage = 6, this.visibleHourlyHeaders = [], this.selectedTime = null, this.loadingFlag = !1, this.hasMoreData = !0, this.visiblePatients = [], this.visibleMedicamentData = null, this.expandedMedicines = {}, this.rotatedStates = {}, this.isResizing = !1, this.lastMouseEvent = null, this.rafId = null, this.currentChunkIndex = 0, this.timeColumnWidth = Cn.TIME_COLUMN_WIDTH_PERIODS, this.unlistenMouseMove = null, this.unlistenMouseUp = null, this.loadMorePatients = () => {
        if (!this.patientData || this.loadingFlag) return;
        const Tt = this.visiblePatients.length;
        if (Tt >= this.patientData.length) return void (this.hasMoreData = !1);
        this.loadingFlag = !0;
        const ai = this.patientData.slice(Tt, Tt + Cn.CHUNK_SIZE);
        this.visiblePatients = [...this.visiblePatients, ...ai], this.hasMoreData = this.visiblePatients.length < this.patientData.length, this.loadingFlag = !1, this.cdr.markForCheck();
      }, this.loadMoreMedicaments = () => {
        if (!this.medicamentData || this.loadingFlag) return;
        const Tt = Object.keys(this.medicamentData),
          ai = this.visibleMedicamentData ? Object.keys(this.visibleMedicamentData) : [];
        if (ai.length >= Tt.length) return void (this.hasMoreData = !1);
        this.loadingFlag = !0;
        const Zi = Tt.slice(ai.length, ai.length + Cn.CHUNK_SIZE),
          Po = {
            ...(this.visibleMedicamentData || {})
          };
        for (const fo of Zi) Po[fo] = this.medicamentData[fo];
        this.visibleMedicamentData = Po, this.hasMoreData = Object.keys(this.visibleMedicamentData).length < Tt.length, this.loadingFlag = !1, this.cdr.markForCheck();
      }, this.updateGridTemplate(), this.heightChanged$ = (0, De.R)(window, "resize").pipe((0, rt.O)(window.innerWidth), (0, Yd.b)(100), (0, q.U)(() => ({
        height: window.innerWidth > 1826 ? "calc(100vh - 252px)" : "calc(100vh - 322px)"
      })));
    }
    ngOnChanges($) {
      $.allHourlyHeaders && (this.currentChunkIndex = 0, this.updateVisibleHeaders()), $.groupingMode && this.updateGridTemplate(), ($.timeHeaderMode || $.selectedPeriod) && (this.updateTimeColumnWidth(), this.updateGridTemplate(), this.currentChunkIndex = 0, this.updateVisibleHeaders()), $.patientData && this.resetChunkedPatients(), $.medicamentData && this.resetChunkedMedicaments();
    }
    ngOnDestroy() {
      this.isResizing = !1, null !== this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = null), this.unlistenMouseMove && (this.unlistenMouseMove(), this.unlistenMouseMove = null), this.unlistenMouseUp && (this.unlistenMouseUp(), this.unlistenMouseUp = null);
    }
    resetChunkedPatients() {
      if (!this.patientData?.length) return this.visiblePatients = [], void (this.hasMoreData = !1);
      this.visiblePatients = this.patientData.slice(0, Cn.CHUNK_SIZE), this.hasMoreData = this.visiblePatients.length < this.patientData.length;
    }
    resetChunkedMedicaments() {
      if (!this.medicamentData) return this.visibleMedicamentData = null, void (this.hasMoreData = !1);
      const $ = Object.keys(this.medicamentData),
        k = $.slice(0, Cn.CHUNK_SIZE),
        ce = {};
      for (const Ye of k) ce[Ye] = this.medicamentData[Ye];
      this.visibleMedicamentData = ce, this.hasMoreData = k.length < $.length;
    }
    get isFirstPage() {
      return 0 === this.currentChunkIndex;
    }
    get periodLabel() {
      return this.selectedPeriod && "all" !== this.selectedPeriod.toLowerCase() ? {
        morning: "Утро",
        day: "День",
        evening: "Вечер",
        night: "Ночь"
      }[this.selectedPeriod.toLowerCase()] ?? null : null;
    }
    get isLastPage() {
      if (!this.allHourlyHeaders.length || this.hoursPerPage <= 0) return !0;
      const $ = Math.ceil(this.allHourlyHeaders.length / this.hoursPerPage) - 1;
      return this.currentChunkIndex >= $;
    }
    get selectedColumnIndex() {
      if (!this.selectedTime || "hours" !== this.timeHeaderMode || !this.visibleHourlyHeaders.length) return null;
      const $ = Ye => {
          const Tt = Ye.trim().split(":"),
            ai = parseInt(Tt[0], 10),
            Zi = Tt[1] ? parseInt(Tt[1], 10) : 0;
          return ai.toString().padStart(2, "0") + ":" + Zi.toString().padStart(2, "0");
        },
        k = $(this.selectedTime),
        ce = this.visibleHourlyHeaders.findIndex(Ye => $(Ye) === k);
      return ce >= 0 ? ce + 1 : null;
    }
    get gridColumnsCount() {
      return this.visibleHourlyHeaders.length || this.hoursPerPage;
    }
    toggleMedicamentGroup($) {
      const k = this.expandedMedicines[$];
      this.expandedMedicines[$] = !k, this.rotatedStates[$] = !k, this.cdr.markForCheck();
    }
    onColumnResizeStart($) {
      $.preventDefault(), null !== this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = null), this.isResizing = !0;
      const k = $.clientX,
        ce = this.timeColumnWidth;
      this.unlistenMouseMove = this.renderer.listen("document", "mousemove", Ye => {
        this.lastMouseEvent = Ye;
      }), this.unlistenMouseUp = this.renderer.listen("document", "mouseup", () => {
        this.isResizing = !1, this.lastMouseEvent = null, this.unlistenMouseMove && (this.unlistenMouseMove(), this.unlistenMouseMove = null), this.unlistenMouseUp && (this.unlistenMouseUp(), this.unlistenMouseUp = null);
      }), this.processColumnResize(k, ce);
    }
    scrollHourlyHeaders($) {
      "left" !== $ || this.isFirstPage ? "right" === $ && !this.isLastPage && this.currentChunkIndex++ : this.currentChunkIndex--, this.updateVisibleHeaders();
    }
    onHourlyHeaderClick($) {
      this.activeIndex = $;
    }
    onChunkIndexChange($) {
      this.currentChunkIndex = $, this.updateVisibleHeaders(), this.visibleHourlyHeaders.length > 0 && (!this.selectedTime || !this.visibleHourlyHeaders.includes(this.selectedTime)) && (this.selectedTime = this.visibleHourlyHeaders[0], this.cdr.markForCheck());
    }
    onTimeHeaderSelected($) {
      this.selectedTime = $, this.cdr.markForCheck();
    }
    forwardSlotActionToParent($, k, ce) {
      this.slotAction.emit({
        patientId: $,
        medicineId: k.id,
        slot: ce.slot,
        action: ce.action,
        isBaseTherapy: k.base,
        isOnHand: k.onHand
      });
    }
    onContentScroll($) {
      this.headerEl && (this.headerEl.nativeElement.scrollLeft = $.target.scrollLeft);
    }
    onSlotAction($) {
      this.slotAction.emit($);
    }
    emitSettingsClickEvent() {
      this.settingsClick.emit();
    }
    trackByPatient($, k) {
      return k.id;
    }
    trackByMedicine($, k) {
      return k.id;
    }
    trackByPrescription($, k) {
      return k.id;
    }
    trackByGroupKey($, k) {
      return k.key;
    }
    trackByTime($, k) {
      return k;
    }
    onLeftClick($, k, ce) {
      0 === $.button && this.modalHelper.openPresenterModal(k, ce, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
    }
    onRightClick($, k, ce, Ye) {
      $.preventDefault(), $.stopPropagation(), 2 === $.button && ce && Ye && ce.open(Ye);
    }
    onGiveAllClick($, k) {
      k.close();
    }
    updateGridTemplate() {
      this.gridTemplateStyle = `${"byMedicament" === this.groupingMode ? Cn.LEFT_COLS_BY_MEDICAMENT : Cn.LEFT_COLS_BY_PATIENT} ${this.timeColumnWidth}px`;
    }
    updateTimeColumnWidth() {
      "hours" === this.timeHeaderMode ? (this.timeColumnWidth = Cn.TIME_COLUMN_WIDTH_HOURS, this.hoursPerPage = Math.max(Cn.MIN_HOURS_PER_PAGE, Math.floor((this.timeColumnWidth - Cn.TIME_COLUMN_UI_OVERHEAD) / Cn.SLOT_WIDTH))) : this.timeColumnWidth = this.periodLabel ? Cn.TIME_COLUMN_WIDTH_SINGLE_PERIOD : Cn.TIME_COLUMN_WIDTH_PERIODS;
    }
    processColumnResize($, k) {
      if (this.isResizing) {
        if (this.lastMouseEvent) {
          const Ye = Math.max(Cn.MIN_TIME_COLUMN_WIDTH, k - (this.lastMouseEvent.clientX - $));
          this.timeColumnWidth = Ye, this.updateGridTemplate();
          const ai = Math.max(Cn.MIN_HOURS_PER_PAGE, Math.floor((this.timeColumnWidth - Cn.TIME_COLUMN_UI_OVERHEAD) / Cn.SLOT_WIDTH));
          this.hoursPerPage !== ai && (this.hoursPerPage = ai, this.updateVisibleHeaders()), this.lastMouseEvent = null, this.cdr.detectChanges();
        }
        this.rafId = requestAnimationFrame(() => this.processColumnResize($, k));
      } else this.rafId = null;
    }
    updateVisibleHeaders() {
      if ("hours" === this.timeHeaderMode && this.allHourlyHeaders.length > 0) {
        const $ = this.currentChunkIndex * this.hoursPerPage;
        this.visibleHourlyHeaders = [...this.allHourlyHeaders.slice($, $ + this.hoursPerPage)];
      } else this.visibleHourlyHeaders = [];
      this.cdr.markForCheck();
    }
  }).CHUNK_SIZE = 20, Gu.SLOT_WIDTH = 80, Gu.MIN_TIME_COLUMN_WIDTH = 160, Gu.MIN_HOURS_PER_PAGE = 6, Gu.TIME_COLUMN_UI_OVERHEAD = 104, Gu.LEFT_COLS_BY_PATIENT = "260px 304px 164px 160px 206px minmax(200px, 1fr)", Gu.LEFT_COLS_BY_MEDICAMENT = "320px 280px 124px 164px 184px minmax(200px, 1fr)", Gu.TIME_COLUMN_WIDTH_PERIODS = 366, Gu.TIME_COLUMN_WIDTH_SINGLE_PERIOD = 126, Gu.TIME_COLUMN_WIDTH_HOURS = 600, Gu.ɵfac = function (k) {
    return new (k || Gu)(n.Y36(n.sBO), n.Y36(n.Qsj), n.Y36(Ya), n.Y36(n.s_b));
  }, Gu.ɵcmp = n.Xpm({
    type: Gu,
    selectors: [["pill-dosing-medications"]],
    viewQuery: function (k, ce) {
      if (1 & k && (n.Gf(po, 5, n.SBq), n.Gf(dr, 5, n.SBq)), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.headerEl = Ye.first), n.iGM(Ye = n.CRH()) && (ce.dosingPatientRef = Ye.first);
      }
    },
    hostVars: 4,
    hostBindings: function (k, ce) {
      2 & k && n.Udp("--grid-template-columns", ce.gridTemplateStyle)("--time-column-width", ce.timeColumnWidthCss);
    },
    inputs: {
      groupingMode: "groupingMode",
      patientData: "patientData",
      medicamentData: "medicamentData",
      timeHeaderMode: "timeHeaderMode",
      allHourlyHeaders: ["hourlyHeaders", "allHourlyHeaders"],
      selectedPeriod: "selectedPeriod",
      searchTerm: "searchTerm"
    },
    outputs: {
      settingsClick: "settingsClick",
      slotAction: "slotAction"
    },
    features: [n.TTD],
    decls: 8,
    vars: 14,
    consts: [[1, "dosing-medications"], [1, "dosing-medications__grid"], [3, "gridTemplateColumns", "timeHeaderMode", "selectedPeriod", "allHourlyHeaders", "groupingMode", "selectedTime", "visibleHourlyHeaders", "hourlyHeaderClick", "chunkIndexChange", "timeHeaderSelected"], ["headerEl", ""], [1, "dosing-medications__vertical-line"], [3, "ngSwitch"], [3, "ngStyle", "patientData", "gridTemplateColumns", "--time-column-width", "timeHeaderMode", "allHourlyHeaders", "visibleHourlyHeaders", "selectedPeriod", "selectedTime", "selectedColumnIndex", "gridColumnsCount", "searchTerm", "loadingFlag", "hasMoreData", "onLoadMore", "scroll", "slotAction", 4, "ngSwitchCase"], [3, "medicamentData", "ngStyle", "gridTemplateColumns", "--time-column-width", "timeHeaderMode", "allHourlyHeaders", "visibleHourlyHeaders", "selectedPeriod", "selectedTime", "selectedColumnIndex", "gridColumnsCount", "searchTerm", "loadingFlag", "hasMoreData", "onLoadMore", "scroll", "slotAction", 4, "ngSwitchCase"], [3, "ngStyle", "patientData", "gridTemplateColumns", "timeHeaderMode", "allHourlyHeaders", "visibleHourlyHeaders", "selectedPeriod", "selectedTime", "selectedColumnIndex", "gridColumnsCount", "searchTerm", "loadingFlag", "hasMoreData", "onLoadMore", "scroll", "slotAction"], ["dosingPatient", ""], [3, "medicamentData", "ngStyle", "gridTemplateColumns", "timeHeaderMode", "allHourlyHeaders", "visibleHourlyHeaders", "selectedPeriod", "selectedTime", "selectedColumnIndex", "gridColumnsCount", "searchTerm", "loadingFlag", "hasMoreData", "onLoadMore", "scroll", "slotAction"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "pill-issuing-table-header", 2, 3), n.NdJ("hourlyHeaderClick", function (Tt) {
        return ce.onHourlyHeaderClick(Tt);
      })("chunkIndexChange", function (Tt) {
        return ce.onChunkIndexChange(Tt);
      })("timeHeaderSelected", function (Tt) {
        return ce.onTimeHeaderSelected(Tt);
      }), n.qZA(), n._UZ(4, "div", 4), n.ynx(5, 5), n.YNc(6, Rs, 3, 18, "pill-dosing-by-patient", 6), n.YNc(7, Aa, 2, 18, "pill-dosing-by-medicament", 7), n.BQk(), n.qZA()()), 2 & k && (n.xp6(1), n.Udp("--time-column-width", ce.timeColumnWidthCss), n.xp6(1), n.Udp("--time-column-width", ce.timeColumnWidthCss), n.Q6J("gridTemplateColumns", ce.gridTemplateStyle)("timeHeaderMode", ce.timeHeaderMode)("selectedPeriod", ce.selectedPeriod)("allHourlyHeaders", ce.allHourlyHeaders)("groupingMode", ce.groupingMode)("selectedTime", ce.selectedTime)("visibleHourlyHeaders", ce.visibleHourlyHeaders), n.xp6(3), n.Q6J("ngSwitch", ce.groupingMode), n.xp6(1), n.Q6J("ngSwitchCase", "byPatient"), n.xp6(1), n.Q6J("ngSwitchCase", "byMedicament"));
    },
    styles: ["[_nghost-%COMP%]{display:block;width:100%;--dosing-medications-text-primary: #2d3748;--dosing-medications-text-muted: #718096;--dosing-medications-border-light: #e2e8f0;--dosing-medications-border-dark: #cbd5e0;--dosing-medications-patient-group-bg: #edf2f7;--dosing-medications-row-hover-bg: #ecf6fb;--dosing-medications-brand-color: #3182ce;--dosing-medications-cell-h-padding: 14px;--dosing-medications-row-height: 47px;--dosing-medications-header-height: 40px;--dosing-medications-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif}.dosing-medications[_ngcontent-%COMP%]{font-family:var(--dosing-medications-font-family);font-size:13px;color:var(--dosing-medications-text-primary);width:100%;height:100%;overflow:hidden}.dosing-medications[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{background:#F2F2F2;position:relative}.dosing-medications__grid[_ngcontent-%COMP%]{background:#F2F2F2;position:relative;height:100%}.dosing-medications__header[_ngcontent-%COMP%], .dosing-medications__patient-group[_ngcontent-%COMP%], .dosing-medications__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:var(--grid-template-columns);width:100%}.dosing-medications__header[_ngcontent-%COMP%]{height:var(--dosing-medications-header-height);background-color:#fff;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014;margin-bottom:8px;z-index:2}.dosing-medications[_ngcontent-%COMP%]   .dosing-medications__header-cell[_ngcontent-%COMP%]:first-child{margin-left:24px;display:flex;align-items:center;padding:0}.dosing-medications__header-cell[_ngcontent-%COMP%]{font-size:13px;font-weight:400;line-height:20px;color:var(--dosing-medications-text-muted);display:flex;align-items:center;white-space:nowrap}.dosing-medications__header-cell--time-slots[_ngcontent-%COMP%]{overflow:visible;padding:0 24px}.dosing-medications__header-cell--fixed-right[_ngcontent-%COMP%]{position:sticky;right:0;height:100%;min-width:var(--time-column-width, 366px);z-index:10;background-color:#fff;display:flex;align-items:center;padding:0 16px}.dosing-medications__patient-group[_ngcontent-%COMP%]{margin-left:8px;margin-top:8px;border-radius:3px;height:32px;width:-moz-fit-content;width:fit-content;padding:4px 16px;background-color:#e6e6e6;display:flex;align-items:center;gap:8px 20px}.dosing-medications__row[_ngcontent-%COMP%]{min-height:var(--dosing-medications-row-height);border-bottom:1px solid var(--dosing-medications-border-light);background-color:#fff;position:relative;z-index:1;justify-content:center}.dosing-medications__row[_ngcontent-%COMP%]:hover{background-color:var(--dosing-medications-row-hover-bg);z-index:2}.dosing-medications__row.is-new[_ngcontent-%COMP%]{background-color:#fff8cc}.dosing-medications__cell[_ngcontent-%COMP%]{padding:0 var(--dosing-medications-cell-h-padding);display:flex;flex-direction:column;justify-content:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:0px solid var(--dosing-medications-border-light)}.dosing-medications__cell--time-slots[_ngcontent-%COMP%]{overflow:visible;padding:0}.dosing-medications__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;padding:12px 16px 0;justify-content:flex-start;right:0;min-width:var(--time-column-width, 366px);z-index:10;background-color:inherit;display:flex}.dosing-medications[_ngcontent-%COMP%]   pill-dosing-by-patient[_ngcontent-%COMP%], .dosing-medications[_ngcontent-%COMP%]   pill-dosing-by-medicament[_ngcontent-%COMP%]{height:calc(100vh - 252px);max-height:calc(100vh - 252px);overflow-y:auto;overflow-x:auto}.dosing-medications__time-periods[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(4,1fr);align-items:center;gap:12px}.dosing-medications__hourly-view[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px}.dosing-medications__hourly-nav[_ngcontent-%COMP%]{flex-shrink:0;background:transparent;border:1px solid var(--dosing-medications-border-dark);border-radius:50%;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--dosing-medications-text-muted);transition:all .2s ease}.dosing-medications__hourly-nav[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--dosing-medications-brand-color);border-color:var(--dosing-medications-brand-color);color:#fff}.dosing-medications__hourly-nav[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}.dosing-medications__hourly-tabs-wrapper[_ngcontent-%COMP%]{overflow:hidden;flex-grow:1;margin:0 15px}.dosing-medications__hourly-tabs[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:20px}.dosing-medications__hourly-tab[_ngcontent-%COMP%]{flex-grow:1;flex-basis:0;text-align:center;padding:10px 5px;font-size:15px;color:#888;cursor:pointer;background-color:transparent;border-bottom:3px solid transparent;transition:color .5s ease,border-color .7s ease;font-weight:500;white-space:nowrap}.dosing-medications__hourly-tab[_ngcontent-%COMP%]:hover{color:#333}.dosing-medications__hourly-tab.active[_ngcontent-%COMP%]{color:#222;font-weight:600;border-bottom-color:#333}.ng-star-inserted[_ngcontent-%COMP%]   .infinity-scroll[_ngcontent-%COMP%], .infinity-scroll[_ngcontent-%COMP%]{max-height:inherit}.custom-menu-dropdown[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014}.custom-menu-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:10px 18px;font-size:15px;color:#333;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .12s,color .12s;border-radius:4px}.menu-item[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:focus-visible{background-color:#f7f4fd;color:#333}.menu-item[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{flex-shrink:0;display:block}.dosing-medications__patient-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.dosing-medications__patient-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child):before{content:\"\";display:inline-block;width:1px;height:15px;background-color:#ccc;margin:0 8px 0 5px}.time-period-item-night[_ngcontent-%COMP%]{margin-left:-8px}[_nghost-%COMP%]     .infinity-scroll{height:auto!important;max-height:none!important;overflow:visible!important}.icon-female2[_ngcontent-%COMP%]{--lu-svg-icon-color: #FF88C1 }.icon-male2[_ngcontent-%COMP%]{--lu-svg-icon-color: #67BDE3 }.dosing-medications__grid[_ngcontent-%COMP%]{position:relative}.dosing-medications__vertical-line[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:var(--time-column-width, 350px);width:0;border-left:2px dashed #CCCCCC;pointer-events:none;z-index:5}.dosing-medications__patient-name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-style:normal;font-weight:600;font-size:15px;line-height:24px}.dosing-medications__patient-age[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:15px;font-weight:400;color:#333;line-height:22px}.dosing-medications__patient-meta[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#333;line-height:24px}"],
    changeDetection: 0
  }), Cn = Gu);
  ml = Cn = (0, Se.gn)([(0, Xn.c)()], ml);
  var Ba = i(56137);
  const Fl = {
      [Re.Ae.Assigned]: {
        primaryAction: "prepare",
        menuItems: [{
          label: "Подготовить таблетницу",
          action: "prepare",
          icon: "pill",
          iconSize: 24
        }]
      },
      [Re.Ae.Prepared]: {
        primaryAction: "issue",
        menuItems: [{
          label: "Выдать",
          action: "issue",
          icon: "mark-done",
          iconSize: 24
        }, {
          label: "Утилизировать",
          action: "utilize",
          icon: "delete",
          iconSize: 16,
          destructive: !0
        }]
      },
      [Re.Ae.Issued]: {
        menuItems: [{
          label: "Утилизировать",
          action: "utilize",
          icon: "delete",
          iconSize: 16,
          destructive: !0
        }]
      },
      [Re.Ae.MissedAssigned]: {
        primaryAction: "repack",
        menuItems: [{
          label: "Пересобрать таблетницу",
          action: "repack",
          icon: "recovery",
          iconSize: 16
        }]
      },
      [Re.Ae.Systematically]: {
        primaryAction: "systematically",
        menuItems: [{
          label: "Выдать",
          action: "issue",
          icon: "mark-done",
          iconSize: 24
        }, {
          label: "Утилизировать",
          action: "utilize",
          icon: "delete",
          iconSize: 16,
          destructive: !0
        }]
      },
      [Re.Ae.MissedPrepared]: {
        primaryAction: "issue",
        menuItems: [{
          label: "Выдать",
          action: "issue",
          icon: "mark-done",
          iconSize: 24
        }, {
          label: "Утилизировать",
          action: "utilize",
          icon: "delete",
          iconSize: 16,
          destructive: !0
        }]
      },
      [Re.Ae.Empty]: {
        primaryAction: "prepare",
        menuItems: []
      },
      [Re.Ae.Changed]: {
        primaryAction: "issue",
        menuItems: [{
          label: "Выдать",
          action: "issue",
          icon: "mark-done",
          iconSize: 24
        }, {
          label: "Утилизировать",
          action: "utilize",
          icon: "delete",
          iconSize: 16,
          destructive: !0
        }]
      },
      [Re.Ae.NeedsRepackage]: {
        primaryAction: "repack",
        menuItems: [{
          label: "Пересобрать таблетницу",
          action: "repack",
          icon: "recovery",
          iconSize: 16
        }]
      },
      [Re.Ae.Utilized]: {
        primaryAction: "prepare",
        menuItems: [{
          label: "Пересобрать таблетницу",
          action: "repack",
          icon: "recovery",
          iconSize: 16
        }]
      },
      [Re.Ae.Damaged]: {
        primaryAction: "prepare",
        menuItems: [{
          label: "Пересобрать таблетницу",
          action: "repack",
          icon: "recovery",
          iconSize: 16
        }]
      },
      [Re.Ae.Created]: {
        primaryAction: "issue",
        menuItems: [{
          label: "Выдать",
          action: "issue",
          icon: "mark-done",
          iconSize: 24
        }]
      },
      [Re.Ae.Completed]: {
        menuItems: []
      },
      [Re.Ae.Cancelling]: {
        menuItems: []
      },
      [Re.Ae.Cancelled]: {
        menuItems: []
      },
      [Re.Ae.Editing]: {
        menuItems: []
      }
    },
    cm = class {
      constructor() {
        this.statusColors = {
          [Re.Ae.Assigned]: "#f6fbff",
          [Re.Ae.Cancelling]: "#ffe6cc",
          [Re.Ae.Cancelled]: "#f2f2f2",
          [Re.Ae.Changed]: "#fff8ed",
          [Re.Ae.Completed]: "#cee8ff",
          [Re.Ae.Delivered]: "#cee8ff",
          [Re.Ae.Created]: "#f6fbff",
          [Re.Ae.Editing]: "#d9d9d9",
          [Re.Ae.Empty]: "transparent",
          [Re.Ae.Issued]: "#cee8ff",
          [Re.Ae.MissedAssigned]: "#fde4df",
          [Re.Ae.MissedPrepared]: "#fde4df",
          [Re.Ae.NeedsRepackage]: "#fff8ed",
          [Re.Ae.Postponed]: "#f2f2f2",
          [Re.Ae.Prepared]: "#f6fbff",
          [Re.Ae.Systematically]: "#f6fbff",
          [Re.Ae.Utilized]: "#f2f2f2",
          [Re.Ae.Damaged]: "#f2f2f2",
          [Re.Ae.Executing]: "#ffe766"
        }, this.statusDescriptions = {
          [Re.Ae.Assigned]: "Назначено — слот требует подготовки.",
          [Re.Ae.Cancelling]: "Отменяется",
          [Re.Ae.Cancelled]: "Отменено",
          [Re.Ae.Changed]: "Внесены изменения",
          [Re.Ae.Completed]: "Выполнено",
          [Re.Ae.Created]: "Назначено",
          [Re.Ae.Editing]: "Редактирование",
          [Re.Ae.Empty]: "Пусто",
          [Re.Ae.Issued]: "Выдано — медикамент выдан пациенту.",
          [Re.Ae.MissedAssigned]: "Назначено (выдача пропущена)",
          [Re.Ae.MissedPrepared]: "Подготовлено (выдача пропущена)",
          [Re.Ae.NeedsRepackage]: "Необходимо пересобрать",
          [Re.Ae.Postponed]: "Отложено",
          [Re.Ae.Prepared]: "Подготовлено — слот готов к выдаче.",
          [Re.Ae.Systematically]: "Систематически",
          [Re.Ae.Utilized]: "Утилизировано — слот недоступен",
          [Re.Ae.Damaged]: "Утилизировано — слот недоступен",
          [Re.Ae.Delivered]: "Выдана",
          [Re.Ae.Executing]: "Выполняется"
        };
      }
      getColor($) {
        return this.statusColors[$] ?? "#fff";
      }
      getColorByStatusKey($) {
        return this.getColor($);
      }
      getGradientBackground($) {
        if (!$?.length) return "transparent";
        if (1 === $.length) return this.getColor($[0].status);
        const k = $.map(Tt => this.getColor(Tt.status)),
          ce = 100 / k.length;
        return `linear-gradient(to right, ${k.map((Tt, ai) => `${Tt} ${ai * ce}%, ${Tt} ${(ai + 1) * ce}%`).join(", ")})`;
      }
      getStatusColorsMap() {
        return {
          ...this.statusColors
        };
      }
      getStatusDescription($) {
        return this.statusDescriptions[$] ?? `\u0421\u0442\u0430\u0442\u0443\u0441: ${$}`;
      }
      getAllStatusInfo() {
        return Object.entries(this.statusColors).map(([$, k]) => ({
          status: $,
          color: k,
          description: this.statusDescriptions[$]
        }));
      }
    };
  let gl = cm;
  cm.ɵfac = function (k) {
    return new (k || cm)();
  }, cm.ɵprov = n.Yz7({
    token: cm,
    factory: cm.ɵfac,
    providedIn: "root"
  });
  const Zh = class {
    getTimelineStyle($, k) {
      const {
        time: ce,
        startTime: Ye,
        endTime: Tt,
        displayType: ai
      } = $;
      if ("hours" !== k.timeHeaderMode || !k.visibleHeaders?.length) return {
        display: "none"
      };
      const Zi = this.parseTimeToMinutes(k.visibleHeaders[0]);
      if ("point" === ai && ce) {
        const Po = this.parseTimeToMinutes(ce),
          fo = 60 * Math.floor(Po / 60);
        if (this.isWithinVisibleRange(Po, k.visibleHeaders)) return {
          gridColumn: `${Math.floor((fo - Zi) / 60) + 1}`
        };
      }
      if ("range" === ai && Ye && Tt) {
        const Po = this.parseTimeToMinutes(Ye),
          fo = this.parseTimeToMinutes(Tt);
        if (this.isRangeOverlappingVisible(Po, fo, k.visibleHeaders)) {
          const Wr = k.visibleHeaders.length,
            Cs = Math.max(1, Math.floor((Po - Zi) / 60) + 1),
            ia = Math.ceil((fo - Zi) / 60) + 1;
          return {
            gridColumn: `${Cs} / ${Math.min(ia, Wr + 1)}`
          };
        }
      }
      return {
        display: "none"
      };
    }
    parseTimeToMinutes($) {
      if (!$) return -1;
      const [k, ce] = $.split(":").map(Number);
      return 60 * k + ce;
    }
    isWithinVisibleRange($, k) {
      if (-1 === $ || !k.length) return !1;
      const ce = this.parseTimeToMinutes(k[0]);
      return $ >= ce && $ <= ce + 60 * k.length - 1;
    }
    isRangeOverlappingVisible($, k, ce) {
      if (!ce.length) return !1;
      const Ye = this.parseTimeToMinutes(ce[0]);
      return $ < Ye + 60 * ce.length && k > Ye;
    }
  };
  let qa = Zh;
  var Gl;
  Zh.ɵfac = function (k) {
    return new (k || Zh)();
  }, Zh.ɵprov = n.Yz7({
    token: Zh,
    factory: Zh.ɵfac,
    providedIn: "root"
  });
  const mc = ["dropdowns"],
    Ph = ["dropdownsTimeline"];
  function xp(Te, $) {
    if (1 & Te && n._UZ(0, "div", 12), 2 & Te) {
      const k = n.oxw().ngIf,
        ce = n.oxw(3);
      n.Udp("width", ce.calculateProgress(k), "%");
    }
  }
  function Oh(Te, $) {
    if (1 & Te && n._UZ(0, "lu-svg-icon", 17), 2 & Te) {
      const k = n.oxw().$implicit;
      let ce;
      n.Q6J("icon", k.icon)("size", null !== (ce = k.iconSize) && void 0 !== ce ? ce : 24);
    }
  }
  function Wp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 15), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(7),
          Zi = n.oxw(3);
        return n.KtG(Zi.onMenuItemClick(Tt, ai));
      }), n.YNc(1, Oh, 1, 2, "lu-svg-icon", 16), n.TgZ(2, "span"), n._uU(3), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit;
      n.ekj("destructive", k.destructive), n.xp6(1), n.Q6J("ngIf", k.icon), n.xp6(2), n.Oqu(k.label);
    }
  }
  function Ah(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 13), n.YNc(1, Wp, 4, 4, "div", 14), n.qZA()), 2 & Te) {
      const k = n.oxw().ngIf,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngForOf", ce.getMenuItems(k))("ngForTrackBy", ce.trackByMenuItem);
    }
  }
  const zp = function (Te, $, k) {
      return [Te, $, k];
    },
    Wf = function () {
      return ["top-right"];
    };
  function Mm(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 5, 6), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).ngIf,
          Zi = n.oxw(3);
        return n.KtG(Zi.onLeftClick(Ye, ai));
      })("contextmenu", function (Ye) {
        const ai = n.CHM(k).ngIf,
          Zi = n.MAs(7),
          Po = n.MAs(2),
          fo = n.oxw(3);
        return n.KtG(fo.onRightClick(Ye, Zi, Po, ai));
      })("mouseenter", function () {
        const Tt = n.CHM(k).ngIf,
          ai = n.oxw(3);
        return n.KtG(ai.onChipHover(null == Tt ? null : Tt.status));
      }), n.YNc(3, xp, 1, 2, "div", 7), n.TgZ(4, "span", 8), n._uU(5), n.qZA(), n.TgZ(6, "lu-dropdown", 9, 10), n.YNc(8, Ah, 2, 2, "div", 11), n.qZA()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.ngIf,
        ce = n.oxw(3),
        Ye = n.MAs(5);
      n.xp6(1), n.Udp("grid-column", "span 4"), n.Q6J("ngClass", n.kEZ(10, zp, ce.getStatusClass(null == k ? null : k.status), ce.isBaseTherapy ? "base-therapy" : "", ce.isSlotFutureLocked(k) ? "future-locked" : ""))("luTooltip", "EMPTY" !== (null == k ? null : k.status) ? Ye : null)("borderOffset", -4)("positions", n.DdM(14, Wf)), n.xp6(2), n.Q6J("ngIf", "SYSTEMATICALLY" === (null == k ? null : k.status)), n.xp6(2), n.Oqu(null == k ? null : k.label), n.xp6(1), n.Q6J("positions", ce.dropdownPosition)("borderOffset", -8);
    }
  }
  function cc(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Mm, 9, 15, "ng-container", 2), n.BQk()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngIf", k.getDailyRangeSlot());
    }
  }
  function df(Te, $) {
    1 & Te && n._UZ(0, "div", 28), 2 & Te && n.Q6J("ngClass", $.$implicit.cssClass);
  }
  function ip(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 25), n.YNc(2, df, 1, 1, "div", 26), n.qZA(), n.TgZ(3, "span", 27), n._uU(4), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Udp("--segment-count", k.slots.length), n.xp6(1), n.Q6J("ngForOf", ce.getSlotSegments(k))("ngForTrackBy", ce.trackBySegment), n.xp6(2), n.Oqu(null == k.slots[0] ? null : k.slots[0].label);
    }
  }
  function ph(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 29), 2 & Te && n.Q6J("size", 16);
  }
  function Tm(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 30), 2 & Te && n.Q6J("size", 16);
  }
  function zf(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 8), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.hij(" ", null == k.slots[0] ? null : k.slots[0].label, "");
    }
  }
  const Em = function (Te, $) {
    return [Te, $];
  };
  function Sh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 35), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw();
        const ai = n.MAs(3),
          Zi = n.oxw(5);
        return n.KtG(Zi.onSlotSelection(Tt, ai));
      }), n.TgZ(1, "span"), n._uU(2), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(6);
      n.Q6J("ngClass", n.WLB(2, Em, ce.getStatusClass(k.status), ce.isSlotFutureLocked(k) ? "future-locked" : "")), n.xp6(2), n.Oqu(k.time);
    }
  }
  function eg(Te, $) {
    if (1 & Te && n._UZ(0, "lu-svg-icon", 17), 2 & Te) {
      const k = n.oxw().$implicit;
      let ce;
      n.Q6J("icon", k.icon)("size", null !== (ce = k.iconSize) && void 0 !== ce ? ce : 24);
    }
  }
  function Dm(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 15), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(3),
          Zi = n.oxw(5);
        return n.KtG(Zi.onMenuItemClick(Tt, ai));
      }), n.YNc(1, eg, 1, 2, "lu-svg-icon", 16), n.TgZ(2, "span"), n._uU(3), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit;
      n.ekj("destructive", k.destructive), n.xp6(1), n.Q6J("ngIf", k.icon), n.xp6(2), n.Oqu(k.label);
    }
  }
  function El(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 36), n.YNc(1, Dm, 4, 4, "div", 14), n.qZA()), 2 & Te) {
      const k = n.oxw(6);
      n.xp6(1), n.Q6J("ngForOf", k.getMenuItems(k.selectedSlot))("ngForTrackBy", k.trackByMenuItem);
    }
  }
  function bp(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Sh, 3, 5, "div", 31), n.TgZ(2, "lu-dropdown", 32, 33), n.YNc(4, El, 2, 2, "div", 34), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw(5);
      n.xp6(1), n.Q6J("ngForOf", k.currentSlotsForDropdown)("ngForTrackBy", k.trackBySlot), n.xp6(1), n.Q6J("positions", k.dropdownPosition)("borderOffset", -8);
    }
  }
  function tg(Te, $) {
    if (1 & Te && n._UZ(0, "lu-svg-icon", 17), 2 & Te) {
      const k = n.oxw().$implicit;
      let ce;
      n.Q6J("icon", k.icon)("size", null !== (ce = k.iconSize) && void 0 !== ce ? ce : 24);
    }
  }
  function op(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 15), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(3);
        const ai = n.MAs(8),
          Zi = n.oxw(3);
        return n.KtG(Zi.onMenuItemClick(Tt, ai));
      }), n.YNc(1, tg, 1, 2, "lu-svg-icon", 16), n.TgZ(2, "span"), n._uU(3), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit;
      n.ekj("destructive", k.destructive), n.xp6(1), n.Q6J("ngIf", k.icon), n.xp6(2), n.Oqu(k.label);
    }
  }
  function Gp(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, op, 4, 4, "div", 14), n.BQk()), 2 & Te) {
      const k = n.oxw(5);
      n.xp6(1), n.Q6J("ngForOf", k.getMenuItems(k.currentSlotsForDropdown[0]))("ngForTrackBy", k.trackByMenuItem);
    }
  }
  function Gf(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 13), n.YNc(1, bp, 5, 4, "ng-container", 2), n.YNc(2, Gp, 2, 2, "ng-container", 2), n.qZA()), 2 & Te) {
      const k = n.oxw(4);
      n.ekj("mob-menu", k.isAdaptive && k.currentSlotsForDropdown.length > 1), n.xp6(1), n.Q6J("ngIf", k.currentSlotsForDropdown.length > 1), n.xp6(1), n.Q6J("ngIf", 1 === k.currentSlotsForDropdown.length && !k.selectedSlot);
    }
  }
  const Ih = function () {
      return ["UTILIZED", "DAMAGED"];
    },
    Ag = function () {
      return ["CANCELLED"];
    };
  function pf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 19, 6), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.MAs(8),
          Po = n.oxw(3);
        return n.KtG(Po.onLeftClickMultiple(Ye, Zi, ai.slots));
      })("contextmenu", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.MAs(8),
          Po = n.MAs(2),
          fo = n.oxw(3);
        return n.KtG(fo.onRightClickMultiple(Ye, Zi, Po, ai.slots));
      })("mouseenter", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.onChipHover(null == Tt.slots[0] ? null : Tt.slots[0].status));
      }), n.YNc(3, ip, 5, 5, "ng-container", 2), n.YNc(4, ph, 1, 1, "lu-svg-icon", 20), n.YNc(5, Tm, 1, 1, "lu-svg-icon", 21), n.YNc(6, zf, 2, 1, "span", 22), n.TgZ(7, "lu-dropdown", 9, 23), n.YNc(9, Gf, 3, 4, "div", 24), n.qZA()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3),
        Ye = n.MAs(5);
      n.xp6(1), n.Q6J("ngClass", n.kEZ(10, zp, ce.getGridSlotClass(k), ce.isBaseTherapy ? "base-therapy" : "", ce.isGroupFutureLocked(k.slots) ? "future-locked" : ""))("luTooltip", "EMPTY" !== (null == k.slots[0] ? null : k.slots[0].status) ? Ye : null)("borderOffset", -4)("positions", n.DdM(14, Wf)), n.xp6(2), n.Q6J("ngIf", ce.hasMultipleSegments(k)), n.xp6(1), n.Q6J("ngIf", n.DdM(15, Ih).includes(null == k.slots[0] ? null : k.slots[0].status) && !ce.hasMultipleSegments(k)), n.xp6(1), n.Q6J("ngIf", n.DdM(16, Ag).includes(null == k.slots[0] ? null : k.slots[0].status) && !ce.hasMultipleSegments(k)), n.xp6(1), n.Q6J("ngIf", !n.DdM(17, Ih).includes(null == k.slots[0] ? null : k.slots[0].status) && !ce.hasMultipleSegments(k)), n.xp6(1), n.Q6J("positions", ce.dropdownPosition)("borderOffset", -8);
    }
  }
  function ng(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, pf, 10, 18, "ng-container", 18), n.BQk()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngForOf", k.filteredDisplayedPeriods)("ngForTrackBy", k.trackByPeriodGroup);
    }
  }
  const Pm = function (Te) {
    return {
      "slots-wrapper-grid__adaptive-grid": Te
    };
  };
  function $s(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 4), n.YNc(1, cc, 2, 1, "ng-container", 2), n.YNc(2, ng, 2, 2, "ng-container", 2), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.Udp("grid-template-columns", k.gridColumnsStyle), n.Q6J("ngClass", n.VKq(5, Pm, k.isAdaptive)), n.xp6(1), n.Q6J("ngIf", k.hasDailyRangeSlot), n.xp6(1), n.Q6J("ngIf", !k.hasDailyRangeSlot);
    }
  }
  function Eu(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 43), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.Oqu(k.time);
    }
  }
  function Nu(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 44), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.Oqu(k.label || k.startTime + " - " + k.endTime);
    }
  }
  function ru(Te, $) {
    if (1 & Te && n._UZ(0, "lu-svg-icon", 46), 2 & Te) {
      const k = n.oxw().$implicit;
      n.Q6J("icon", k.icon);
    }
  }
  function Dd(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 15), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(5),
          Zi = n.oxw(3);
        return n.KtG(Zi.onMenuItemClick(Tt, ai));
      }), n.YNc(1, ru, 1, 1, "lu-svg-icon", 45), n.TgZ(2, "span"), n._uU(3), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit;
      n.ekj("destructive", k.destructive), n.xp6(1), n.Q6J("ngIf", k.icon), n.xp6(2), n.Oqu(k.label);
    }
  }
  function Sg(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 13), n.YNc(1, Dd, 4, 4, "div", 14), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngForOf", ce.getMenuItems(k))("ngForTrackBy", ce.trackByMenuItem);
    }
  }
  const Om = function (Te, $, k, ce) {
    return [Te, $, k, ce];
  };
  function hf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 40, 6), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw(3);
        return n.KtG(Zi.onLeftClick(Ye, ai));
      })("contextmenu", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.MAs(5),
          Po = n.MAs(1),
          fo = n.oxw(3);
        return n.KtG(fo.onRightClick(Ye, Zi, Po, ai));
      })("mouseenter", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.onChipHover(Tt.status));
      }), n.YNc(2, Eu, 2, 1, "span", 41), n.YNc(3, Nu, 2, 1, "span", 42), n.TgZ(4, "lu-dropdown", 9, 23), n.YNc(6, Sg, 2, 2, "div", 11), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3),
        Ye = n.MAs(5);
      n.Q6J("ngClass", n.l5B(9, Om, ce.getStatusClass(k.status), "type-" + k.displayType, ce.isBaseTherapy ? "base-therapy" : "", ce.isSlotFutureLocked(k) ? "future-locked" : ""))("ngStyle", ce.getTimelineStyle(k))("luTooltip", "EMPTY" !== k.status ? Ye : null)("borderOffset", -4)("positions", n.DdM(14, Wf)), n.xp6(2), n.Q6J("ngIf", "point" === k.displayType), n.xp6(1), n.Q6J("ngIf", "range" === k.displayType), n.xp6(1), n.Q6J("positions", ce.dropdownPosition)("borderOffset", -8);
    }
  }
  function Am(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 38), n.YNc(1, hf, 7, 15, "div", 39), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.Udp("grid-template-columns", "repeat(" + k.gridColumnsCount + ", 88px"), n.xp6(1), n.Q6J("ngForOf", k.slotsForTimeline)("ngForTrackBy", k.trackBySlot);
    }
  }
  function hh(Te, $) {
    1 & Te && (n.ynx(0), n.YNc(1, Am, 2, 4, "div", 37), n.BQk()), 2 & Te && (n.xp6(1), n.Q6J("ngSwitchCase", "hours"));
  }
  function wp(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit;
      n.xp6(1), n.Oqu(k.timeLineTime);
    }
  }
  function ig(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit;
      n.xp6(1), n.Oqu(k.cell.label);
    }
  }
  function Ig(Te, $) {
    if (1 & Te && n._UZ(0, "lu-svg-icon", 17), 2 & Te) {
      const k = n.oxw().$implicit;
      let ce;
      n.Q6J("icon", k.icon)("size", null !== (ce = k.iconSize) && void 0 !== ce ? ce : 24);
    }
  }
  function Ou(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 15), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(5),
          Zi = n.oxw(4);
        return n.KtG(Zi.onMenuItemClick(Tt, ai));
      }), n.YNc(1, Ig, 1, 2, "lu-svg-icon", 16), n.TgZ(2, "span"), n._uU(3), n.qZA()();
    }
    if (2 & Te) {
      const k = $.$implicit;
      n.ekj("destructive", k.destructive), n.xp6(1), n.Q6J("ngIf", k.icon), n.xp6(2), n.Oqu(k.label);
    }
  }
  function v_(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 13), n.YNc(1, Ou, 4, 4, "div", 14), n.qZA()), 2 & Te) {
      const k = n.oxw(2).$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngForOf", ce.getMenuItems(k.cell))("ngForTrackBy", ce.trackByMenuItem);
    }
  }
  const Lh = function (Te, $) {
      return {
        transform: Te,
        width: $
      };
    },
    ff = function (Te, $, k, ce) {
      return ["cell", Te, $, k, ce];
    };
  function og(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 54, 6), n.NdJ("click", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw().$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.onLeftClick(Ye, Tt.cell));
      })("contextmenu", function (Ye) {
        n.CHM(k);
        const Tt = n.MAs(5),
          ai = n.MAs(1),
          Zi = n.oxw().$implicit,
          Po = n.oxw(3);
        return n.KtG(Po.onRightClick(Ye, Tt, ai, Zi.cell));
      })("mouseenter", function () {
        n.CHM(k);
        const Ye = n.oxw().$implicit,
          Tt = n.oxw(3);
        return n.KtG(Tt.onChipHover(Ye.cell.status));
      }), n.YNc(2, wp, 2, 1, "span", 2), n.YNc(3, ig, 2, 1, "span", 2), n.TgZ(4, "lu-dropdown", 9, 23), n.YNc(6, v_, 2, 2, "div", 11), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3),
        Ye = n.MAs(5);
      n.Akn(n.WLB(10, Lh, "translateX(" + k.cellShift + ")", k.cellRangeWidth)), n.Q6J("ngClass", n.l5B(13, ff, ce.getStatusClass(k.cell.status), "type-" + k.cell.displayType, ce.isBaseTherapy ? "base-therapy" : "", ce.isSlotFutureLocked(k.cell) ? "future-locked" : ""))("luTooltip", "EMPTY" !== k.cell.status ? Ye : null)("borderOffset", -4)("positions", n.DdM(18, Wf)), n.xp6(2), n.Q6J("ngIf", "point" === k.cell.displayType), n.xp6(1), n.Q6J("ngIf", "range" === k.cell.displayType), n.xp6(1), n.Q6J("positions", ce.dropdownPosition)("borderOffset", -8);
    }
  }
  function rg(Te, $) {
    1 & Te && n._UZ(0, "div", 55);
  }
  function gs(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 50), n.NdJ("click", function () {
        const Tt = n.CHM(k).index,
          ai = n.oxw(3);
        return n.KtG(ai.onTimelineItemClick(Tt));
      }), n.TgZ(1, "div", 51), n._uU(2), n.qZA(), n.YNc(3, og, 7, 19, "div", 52), n.YNc(4, rg, 1, 0, "ng-template", null, 53, n.W1O), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = $.index,
        Ye = n.MAs(5),
        Tt = n.oxw(3);
      n.ekj("active", Tt.activeTimelineIndex === ce), n.xp6(2), n.Oqu(k.timeLineTime), n.xp6(1), n.Q6J("ngIf", k.cell)("ngIfElse", Ye);
    }
  }
  function ud(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 48), n.YNc(1, gs, 6, 5, "div", 49), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngForOf", k.timeLineMob)("ngForTrackBy", k.trackByTimelineMob);
    }
  }
  function mf(Te, $) {
    1 & Te && (n.ynx(0), n.YNc(1, ud, 2, 2, "div", 47), n.BQk()), 2 & Te && (n.xp6(1), n.Q6J("ngSwitchCase", "hours"));
  }
  function Mp(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 60), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(3);
      n.Udp("color", k.currentTooltipInfo.prefixColor), n.xp6(1), n.hij(" ", k.currentTooltipInfo.prefix, " ");
    }
  }
  function xd(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 57), n.YNc(1, Mp, 2, 3, "span", 58), n.TgZ(2, "span", 59), n._uU(3), n.qZA()()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Q6J("ngIf", k.currentTooltipInfo.prefix), n.xp6(2), n.Oqu(k.currentTooltipInfo.label);
    }
  }
  function Gd(Te, $) {
    if (1 & Te && n.YNc(0, xd, 4, 2, "div", 56), 2 & Te) {
      const k = n.oxw();
      n.Q6J("ngIf", k.currentTooltipInfo);
    }
  }
  let Wu = ((Op = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po) {
      this.cdr = $, this.router = k, this.userContextService = ce, this.slotStatusColors = Ye, this.slotProcessor = Tt, this.timelineCalculator = ai, this.el = Zi, this.activeMedicamentsModuleService = Po, this.timeHeaderMode = "periods", this.hourlyHeaders = [], this.visibleHeaders = [], this.filterPeriod = null, this.isAdaptive = !1, this.isBaseTherapy = !1, this.mode = "issuing", this.action = new n.vpe(), this.timeLineMob = [], this.displayedPeriods = [], this.currentMenuItems = [], this.TimeSlotStatus = Re.Ae, this.currentSlotsForDropdown = [], this.selectedSlot = null, this.currentTooltipInfo = null, this.activeTimelineIndex = 0, this.activeArm = null, this.activeArm = this.activeMedicamentsModuleService.activeArm, this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe(fo => this.currentUser = {
        ...fo
      });
    }
    ngOnChanges($) {
      if ($.slots) {
        const k = this.slotProcessor.processSlots(this.slots, this.mode);
        this.slots = k.normalizedSlots, this.displayedPeriods = k.displayedPeriods, this.cdr.detectChanges();
      }
      ($.visibleHeaders || $.timeHeaderMode) && this.cdr.markForCheck(), this.timeLineMob = this.isAdaptive ? this.hourlyHeaders.map(k => {
        const ce = {
            cell: null,
            cellRangeWidth: null,
            cellShift: "0%",
            timeLineTime: k
          },
          Ye = k.split(":")[0],
          Tt = this.slots.find(Zi => "point" === Zi.displayType && Zi.status !== Re.Ae.Systematically && !!Zi.time && Ye === Zi.time.split(":")[0]),
          ai = this.slots.find(Zi => "range" === Zi.displayType && Zi.status !== Re.Ae.Systematically && !!Zi.startTime && Ye === Zi.startTime.split(":")[0]);
        if (Tt?.time) {
          const Zi = 100 * +Tt.time.split(":")[1] / 60;
          ce.cell = Tt, ce.cellShift = Zi.toFixed(1) + "%";
        }
        if (ai?.startTime && ai?.endTime) {
          const Zi = 100 * +ai.startTime.split(":")[1] / 60,
            Po = +ai.endTime.split(":")[0] - +ai.startTime.split(":")[0],
            fo = 64 * Po + 16 * (Po - 1);
          ce.cell = ai, ce.cellShift = Zi.toFixed(1) + "%", ce.cellRangeWidth = fo + "px";
        }
        return ce;
      }) : [];
    }
    get timelineConfig() {
      return {
        visibleHeaders: this.visibleHeaders,
        timeHeaderMode: this.timeHeaderMode
      };
    }
    get gridColumnsCount() {
      return this.visibleHeaders?.length || 6;
    }
    get filteredDisplayedPeriods() {
      const $ = this.normalizePeriod(this.filterPeriod);
      let k = this.displayedPeriods;
      return "pillboxes" === this.activeArm && "preparation" === this.mode && (k = this.displayedPeriods.map(ce => {
        const Ye = this.pillboxMarks.find(Tt => Tt?.dayTimePeriod?.toLowerCase() === ce.period.toLowerCase());
        return {
          period: ce.period,
          slots: ce.slots.map(Tt => Tt.period.toLowerCase() === Ye?.dayTimePeriod?.toLowerCase() ? {
            ...Tt,
            status: Ye?.status && "CREATED" !== Ye?.status ? Ye?.status : Tt.status,
            id: Ye?.id ?? Tt.id
          } : Tt)
        };
      })), $ && "ALL" !== $.toUpperCase() ? k.filter(ce => ce.period.toUpperCase() === $.toUpperCase()) : k;
    }
    get gridColumnsStyle() {
      return `repeat(${this.filteredDisplayedPeriods.length}, 64px)`;
    }
    get slotsForTimeline() {
      return this.slots.filter($ => $.status !== Re.Ae.Systematically);
    }
    get hasDailyRangeSlot() {
      return this.slotProcessor.hasDailyRangeSlot(this.slots);
    }
    getDailyRangeSlot() {
      return this.slotProcessor.getDailyRangeSlot(this.slots);
    }
    getTimelineStyle($) {
      return this.timelineCalculator.getTimelineStyle($, this.timelineConfig);
    }
    onChipHover($) {
      this.currentTooltipInfo = $ !== Re.Ae.Empty ? Gl.TOOLTIP_MAP[$] || {
        label: $?.toString() || ""
      } : null;
    }
    getMenuItems($) {
      return "issuing" === this.getCurrentPage() ? this.getIssuingMenuItems($) : this.getDefaultMenuItems($);
    }
    onRightClickMultiple($, k, ce, Ye) {
      if ($.preventDefault(), $.stopPropagation(), "injections" === this.activeArm || this.isGroupFutureLocked(Ye)) return;
      const Tt = Ye.find(Zi => !this.isSlotFutureLocked(Zi)) ?? Ye[0];
      0 !== this.getMenuItems(Tt).length && (this.selectedSlot = null, this.currentSlotsForDropdown = [Tt], k.toggle());
    }
    onLeftClickMultiple($, k, ce) {
      if ($.preventDefault(), $.stopPropagation(), ce.length > 1 && "issuing" === this.mode) return this.currentSlotsForDropdown = ce, this.selectedSlot = null, void k.open();
      this.onLeftClick($, ce[0]);
    }
    onSlotSelection($, k) {
      "injections" !== this.getCurrentPage() ? this.isSlotFutureLocked($) || 0 === this.getMenuItems($).length || (this.selectedSlot = $, k.open()) : this.emitAction("issue", $);
    }
    isSlotFutureLocked($) {
      return !(!$ || !["issuing", "injections"].includes(this.getCurrentPage())) && this.slotProcessor.isSlotFutureLocked($);
    }
    isGroupFutureLocked($) {
      return !!$?.length && $.every(k => this.isSlotFutureLocked(k));
    }
    onLeftClick($, k) {
      $.preventDefault(), $.stopPropagation();
      const ce = this.getCurrentPage();
      if ("issuing" === ce) {
        if (this.isSlotFutureLocked(k)) return;
        if (this.isBaseTherapy && k.status === Re.Ae.Completed) return void this.emitAction("cancel", k);
        if ([Re.Ae.Completed, Re.Ae.Cancelled, Re.Ae.Cancelling, Re.Ae.Editing].includes(k.status)) return;
        return void this.emitAction("issue", k);
      }
      if ("injections" === ce && [Re.Ae.Completed, Re.Ae.Cancelled, Re.Ae.Executing].includes(k.status)) return void this.emitAction("issue", k);
      const Ye = Fl[k.status];
      Ye?.primaryAction && this.emitAction(Ye.primaryAction, k);
    }
    onRightClick($, k, ce, Ye) {
      $.preventDefault(), $.stopPropagation(), "injections" !== this.activeArm && !this.isSlotFutureLocked(Ye) && (this.currentMenuItems = this.getMenuItems(Ye), this.currentMenuItems.length > 0 && k.toggle());
    }
    onMenuItemClick($, k) {
      $.action(), k.close();
    }
    getStatusClass($) {
      return $.toLowerCase().replace(/_/g, "-");
    }
    calculateProgress($) {
      if (!$?.label) return 0;
      const k = $.label.match(/(\d+)\s*\/\s*max\s*(\d+)/i);
      if (!k) return 0;
      const ce = parseInt(k[1], 10),
        Ye = parseInt(k[2], 10);
      return Ye > 0 ? Math.min(ce / Ye * 100, 100) : 0;
    }
    isPartiallyCompleted($) {
      if (!$ || $.length < 2) return !1;
      const k = $.some(Ye => Ye.status === Re.Ae.Completed),
        ce = $.some(Ye => Ye.status !== Re.Ae.Completed);
      return k && ce;
    }
    allSlotsHaveSameStatus($) {
      if (!$ || 0 === $.length) return !0;
      const k = $[0].status;
      return $.every(ce => ce.status === k);
    }
    getGridSlotClass($) {
      if (!$?.slots?.length) return "";
      const k = $.slots;
      return 1 === k.length || this.allSlotsHaveSameStatus(k) ? this.getStatusClass(k[0].status) : "multi-grid-slot";
    }
    hasMultipleSegments($) {
      return !!$?.slots?.length && $.slots.length > 1 && !this.allSlotsHaveSameStatus($.slots);
    }
    getSlotSegments($) {
      return $?.slots?.length ? $.slots.map(k => ({
        status: k.status,
        cssClass: this.getStatusClass(k.status),
        slot: k
      })) : [];
    }
    toggleDropdown($, k) {
      this.currentMenuItems = $.flatMap(ce => Fl[ce.status]?.menuItems.map(Tt => ({
        label: Tt.label,
        icon: Tt.icon,
        action: () => this.emitAction(Tt.action, ce)
      })) ?? []), k.toggle();
    }
    trackBySlot($, k) {
      return k.id ?? k.code ?? $;
    }
    trackByPeriodGroup($, k) {
      return k.period;
    }
    trackByMenuItem($, k) {
      return k.label;
    }
    trackBySegment($, k) {
      return `${$}-${k.status}`;
    }
    trackByTimelineMob($, k) {
      return k.timeLineTime;
    }
    normalizePeriod($) {
      if (null == $) return null;
      if ("string" == typeof $) return $;
      if (Array.isArray($) && $.length > 0) return "string" == typeof $[0] ? $[0] : null;
      if ("object" == typeof $ && "value" in $) {
        const k = $.value;
        return "string" == typeof k ? k : null;
      }
      return null;
    }
    get dropdownPosition() {
      const $ = this.el.nativeElement.getBoundingClientRect(),
        k = window.innerHeight;
      return Math.round($.bottom) + 100 >= Math.round(k) ? ["top-left"] : ["bottom-left"];
    }
    getIssuingMenuItems($) {
      const k = !!$.maxSymptomaticAmount,
        ce = +$?.label?.split("/")[0],
        Ye = {
          label: "Выполнить",
          icon: "mark-done",
          iconSize: 24,
          action: () => this.emitAction("issue", $)
        },
        Tt = {
          label: "Отменить выполнение",
          icon: "close",
          iconSize: 24,
          action: () => this.emitAction("cancel", $)
        },
        ai = {
          label: "Подготовить таблетницу",
          icon: "pill",
          iconSize: 24,
          action: () => this.emitAction("issuing_prepare", $)
        };
      return $.status === Re.Ae.Completed ? [Tt] : Gl.NO_ACTION_STATUSES.includes($.status) ? [] : k && ce ? ce < $.maxSymptomaticAmount ? [Ye, Tt] : [Tt] : !this.currentUser.rightCodes.includes("NURSE_PILLBOXES") || k || this.isBaseTherapy ? [Ye] : [ai, Ye];
    }
    getDefaultMenuItems($) {
      const k = Fl[$.status];
      return k?.menuItems ? k.menuItems.filter(ce => ce?.label && ce.action).map(ce => ({
        label: ce.label,
        icon: ce.icon,
        iconSize: ce.iconSize,
        destructive: ce.destructive,
        action: () => this.emitAction(ce.action, $)
      })) : [];
    }
    getCurrentPage() {
      const $ = this.router.url;
      return $.includes("injections") ? "injections" : $.includes("issuing") ? "issuing" : $.includes("preparation") ? "preparation" : "other";
    }
    emitAction($, k) {
      this.action.emit({
        action: $,
        slot: k
      });
    }
    onTimelineItemClick($) {
      this.activeTimelineIndex = $;
    }
  }).TOOLTIP_MAP = {
    [Re.Ae.Assigned]: {
      label: "Назначено"
    },
    [Re.Ae.Created]: {
      label: "Назначено"
    },
    [Re.Ae.Issued]: {
      label: "Выдано"
    },
    [Re.Ae.Completed]: {
      label: "Выдано"
    },
    [Re.Ae.Executing]: {
      label: "Выполняется"
    },
    [Re.Ae.Delivered]: {
      label: "Выдано"
    },
    [Re.Ae.Prepared]: {
      label: "Подготовлено"
    },
    [Re.Ae.Utilized]: {
      label: "Утилизировано"
    },
    [Re.Ae.Damaged]: {
      label: "Утилизировано"
    },
    [Re.Ae.Changed]: {
      label: "Внесены изменения"
    },
    [Re.Ae.Editing]: {
      label: "Редактируется"
    },
    [Re.Ae.Cancelled]: {
      label: "Отказ пациента"
    },
    [Re.Ae.Cancelling]: {
      label: "Отменяется"
    },
    [Re.Ae.Postponed]: {
      label: "Отложено"
    },
    [Re.Ae.Systematically]: {
      label: "Назначено"
    },
    [Re.Ae.MissedAssigned]: {
      prefix: "Пропущенная выдача",
      prefixColor: "#F48673",
      label: "Назначено"
    },
    [Re.Ae.MissedPrepared]: {
      prefix: "Пропущенная выдача",
      prefixColor: "#F48673",
      label: "Подготовлено"
    },
    [Re.Ae.NeedsRepackage]: {
      prefix: "Необходимо пересобрать",
      prefixColor: "#FFB34B",
      label: "Утилизировано"
    }
  }, Op.NO_ACTION_STATUSES = [Re.Ae.Cancelled, Re.Ae.Cancelling, Re.Ae.Editing], Op.ɵfac = function (k) {
    return new (k || Op)(n.Y36(n.sBO), n.Y36(a.F0), n.Y36(qo.oL), n.Y36(gl), n.Y36(gi), n.Y36(qa), n.Y36(n.SBq), n.Y36(Yo.w));
  }, Op.ɵcmp = n.Xpm({
    type: Op,
    selectors: [["time-slots"]],
    viewQuery: function (k, ce) {
      if (1 & k && (n.Gf(mc, 5), n.Gf(Ph, 5)), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.dropdowns = Ye), n.iGM(Ye = n.CRH()) && (ce.dropdownsTimeline = Ye);
      }
    },
    inputs: {
      slots: "slots",
      pillboxMarks: "pillboxMarks",
      timeHeaderMode: "timeHeaderMode",
      hourlyHeaders: "hourlyHeaders",
      visibleHeaders: "visibleHeaders",
      filterPeriod: "filterPeriod",
      isAdaptive: "isAdaptive",
      isBaseTherapy: "isBaseTherapy",
      mode: "mode"
    },
    outputs: {
      action: "action"
    },
    features: [n.TTD],
    decls: 6,
    vars: 4,
    consts: [[1, "slots-container", 3, "ngSwitch"], ["class", "slots-wrapper-grid", 3, "ngClass", "grid-template-columns", 4, "ngSwitchCase"], [4, "ngIf"], ["statusTooltipTmpl", ""], [1, "slots-wrapper-grid", 3, "ngClass"], ["luDropdownOrigin", "", "panelClass", "status-chip-tooltip", 1, "grid-slot", "range-full-span", 3, "ngClass", "luTooltip", "borderOffset", "positions", "click", "contextmenu", "mouseenter"], ["origin", "luDropdownOrigin"], ["class", "progress-bar-fill", 3, "width", 4, "ngIf"], [1, "slot-label"], ["panelClass", "custom-menu-dropdown", 3, "positions", "borderOffset"], ["dailyRangeDropdown", ""], ["class", "custom-menu-container", 4, "luOverlayContent"], [1, "progress-bar-fill"], [1, "custom-menu-container"], ["class", "menu-item", 3, "destructive", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "menu-item", 3, "click"], [3, "icon", "size", 4, "ngIf"], [3, "icon", "size"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["luDropdownOrigin", "", "panelClass", "status-chip-tooltip", 1, "grid-slot", 3, "ngClass", "luTooltip", "borderOffset", "positions", "click", "contextmenu", "mouseenter"], ["class", "icon-utilized", "icon", "delete", "1", "", 3, "size", 4, "ngIf"], ["class", "icon-cancelled", "icon", "close", 3, "size", 4, "ngIf"], ["class", "slot-label", 4, "ngIf"], ["dropdown", ""], ["class", "custom-menu-container", 3, "mob-menu", 4, "luOverlayContent"], [1, "slot-segments"], ["class", "slot-segment", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "slot-label", "slot-label--overlay"], [1, "slot-segment", 3, "ngClass"], ["icon", "delete", "1", "", 1, "icon-utilized", 3, "size"], ["icon", "close", 1, "icon-cancelled", 3, "size"], ["class", "menu-slot-label", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["panelClass", "actions-menu-dropdown", 3, "positions", "borderOffset"], ["actionsDropdown", ""], ["class", "actions-menu-container", 4, "luOverlayContent"], [1, "menu-slot-label", 3, "ngClass", "click"], [1, "actions-menu-container"], ["class", "slots-wrapper-timeline", 3, "grid-template-columns", 4, "ngSwitchCase"], [1, "slots-wrapper-timeline"], ["class", "timeline-slot", "luDropdownOrigin", "", "panelClass", "status-chip-tooltip", 3, "ngClass", "ngStyle", "luTooltip", "borderOffset", "positions", "click", "contextmenu", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["luDropdownOrigin", "", "panelClass", "status-chip-tooltip", 1, "timeline-slot", 3, "ngClass", "ngStyle", "luTooltip", "borderOffset", "positions", "click", "contextmenu", "mouseenter"], ["class", "slot-label-time", 4, "ngIf"], ["class", "slot-label-range", 4, "ngIf"], [1, "slot-label-time"], [1, "slot-label-range"], [3, "icon", 4, "ngIf"], [3, "icon"], ["class", "timeline-mob", 4, "ngSwitchCase"], [1, "timeline-mob"], ["class", "timeline-mob__item", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "timeline-mob__item", 3, "click"], [1, "title"], ["luDropdownOrigin", "", "panelClass", "status-chip-tooltip", 3, "ngClass", "style", "luTooltip", "borderOffset", "positions", "click", "contextmenu", "mouseenter", 4, "ngIf", "ngIfElse"], ["emptyCell", ""], ["luDropdownOrigin", "", "panelClass", "status-chip-tooltip", 3, "ngClass", "luTooltip", "borderOffset", "positions", "click", "contextmenu", "mouseenter"], [1, "cell", "empty"], ["class", "status-tooltip-content", 4, "ngIf"], [1, "status-tooltip-content"], ["class", "status-tooltip-prefix", 3, "color", 4, "ngIf"], [1, "status-tooltip-label"], [1, "status-tooltip-prefix"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0), n.YNc(1, $s, 3, 7, "div", 1), n.YNc(2, hh, 2, 1, "ng-container", 2), n.YNc(3, mf, 2, 1, "ng-container", 2), n.qZA(), n.YNc(4, Gd, 1, 1, "ng-template", null, 3, n.W1O)), 2 & k && (n.Q6J("ngSwitch", ce.timeHeaderMode), n.xp6(1), n.Q6J("ngSwitchCase", "periods"), n.xp6(1), n.Q6J("ngIf", !ce.isAdaptive), n.xp6(1), n.Q6J("ngIf", ce.isAdaptive));
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Di.PC, Di.RF, Di.n9, _r.$, Ci.q, js.n, Ts.o, fd.$],
    styles: ["@charset \"UTF-8\";  .custom-menu-tooltip{--lu-overlay-background: white;--lu-overlay-border: #e2e8f0}  .custom-menu-tooltip .lu-tooltip-panel-content{padding:0!important;box-shadow:0 4px 12px #00000026;border-radius:4px}  .status-chip-tooltip{--lu-overlay-background: #333;--lu-overlay-border: transparent}  .status-chip-tooltip .lu-tooltip-panel-content{padding:8px 16px!important;border-radius:8px;box-shadow:0 4px 12px #0000004d}.status-tooltip-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.status-tooltip-content[_ngcontent-%COMP%]   .status-tooltip-prefix[_ngcontent-%COMP%]{font-size:13px;font-weight:600;line-height:18px}.status-tooltip-content[_ngcontent-%COMP%]   .status-tooltip-label[_ngcontent-%COMP%]{font-size:15px;font-weight:400;line-height:24px;color:#fff}@media (min-width: 600px) and (max-width: 960px){  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)){z-index:999!important;width:264px!important}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)) .cdk-overlay-pane{width:264px}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)) .cdk-overlay-pane .lu-overlay-content{display:flex;align-items:center}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)) .cdk-overlay-pane .lu-overlay-content .custom-menu-container{max-width:264px!important;width:264px!important}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)) .cdk-overlay-pane .lu-overlay-content .custom-menu-container .menu-item{padding:8px 16px 8px 12px!important;width:100%}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)) .cdk-overlay-pane lu-overlay-container[data-lu-overlay-position=bottom]{margin-top:4px}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown):not(:has(.mob-menu)) .cdk-overlay-pane lu-svg-icon[data-lu-icon=recovery] svg{transform:scaleX(-1)}}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) lu-svg-icon[data-lu-icon=recovery]{width:24px;height:24px;display:flex;align-items:center;justify-content:center}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) lu-svg-icon[data-lu-icon=recovery] svg{transform:scaleX(-1) scale(1.125);transform-origin:center}.custom-menu-container[_ngcontent-%COMP%]{min-width:80px;cursor:pointer;max-width:246px;display:flex;flex-direction:column;justify-content:center;align-items:center}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px;font-weight:600;color:#5da6e9;transition:background-color .2s ease;width:64px;height:24px;border-radius:4px;margin:2px}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label[_ngcontent-%COMP%]:not(:last-child){margin-bottom:4px}@media (max-width: 600px){.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2px!important}}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #38a1d6}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{z-index:1}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label.missed-assigned[_ngcontent-%COMP%], .custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label.missed-prepared[_ngcontent-%COMP%]{color:#e57373}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label.changed[_ngcontent-%COMP%], .custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label.needs-repackage[_ngcontent-%COMP%]{color:#ffb74d}.custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label.utilized[_ngcontent-%COMP%], .custom-menu-container[_ngcontent-%COMP%]   .menu-slot-label.cancelled[_ngcontent-%COMP%]{color:#9e9e9e}.slots-container[_ngcontent-%COMP%]{height:100%;position:relative}.slots-wrapper-grid[_ngcontent-%COMP%]{display:grid;gap:16px;height:100%;align-items:center;justify-items:center;padding:12px 0 12px 24px;box-sizing:border-box;width:100%}.slots-wrapper-grid__adaptive-grid[_ngcontent-%COMP%]{display:grid;gap:16px}@media (min-width: 600px) and (max-width: 960px){.slots-wrapper-grid[_ngcontent-%COMP%]{padding:0!important;justify-items:normal;grid-template-columns:repeat(4,112px)!important}.grid-slot[_ngcontent-%COMP%]{width:112px!important}.grid-slot.range-full-span[_ngcontent-%COMP%]{width:100%!important;margin-left:0!important}}.slot-item-container[_ngcontent-%COMP%]{position:relative}.grid-slot[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;height:32px;width:64px;min-width:64px;border-radius:5px;overflow:hidden;cursor:pointer;transition:all .2s}@media (min-width: 961px){.grid-slot[_ngcontent-%COMP%]{height:24px}}.grid-slot[_ngcontent-%COMP%]   .slot-delete[_ngcontent-%COMP%]{color:#fc9d9d;font-size:20px;line-height:20px;position:absolute;right:4px;top:4px;z-index:2;pointer-events:auto}.grid-slot[_ngcontent-%COMP%]   .icon-utilized[_ngcontent-%COMP%]{transform:scale(.7)}.grid-slot[_ngcontent-%COMP%]   .icon-cancelled[_ngcontent-%COMP%]{--lu-svg-icon-color: #F48673}.grid-slot[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;width:100%;background:#d6eeff;border-right:1px solid #b6d6fb;opacity:.5;z-index:0}.grid-slot.multi-grid-slot[_ngcontent-%COMP%]{border:none;color:#333;padding:0;overflow:hidden;border-radius:5px}.slot-segments[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;position:absolute;inset:0}.slot-segment[_ngcontent-%COMP%]{flex:1;height:100%;position:relative;box-sizing:border-box;border-top:2px solid transparent;border-bottom:2px solid transparent}.slot-segment[_ngcontent-%COMP%]:first-child{border-left:2px solid transparent;border-top-left-radius:4px;border-bottom-left-radius:4px}.slot-segment[_ngcontent-%COMP%]:last-child{border-right:2px solid transparent;border-top-right-radius:4px;border-bottom-right-radius:4px}.slot-segment.assigned[_ngcontent-%COMP%], .slot-segment.created[_ngcontent-%COMP%], .slot-segment.prepared[_ngcontent-%COMP%]{background:#f6fbff;border-color:#cee8ff}.slot-segment.prepared[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#cee8ff,#cee8ff 3px,transparent 3px,transparent 6.5px)}.slot-segment.partially-completed[_ngcontent-%COMP%]{background:#f6fbff;border-color:#cee8ff}.slot-segment.partially-completed[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#cee8ff,#cee8ff 3px,transparent 3px,transparent 6.5px)}.slot-segment.completed[_ngcontent-%COMP%], .slot-segment.issued[_ngcontent-%COMP%]{background:#cee8ff;border-color:#a6d4fa}.slot-segment.utilized[_ngcontent-%COMP%]{background:#f2f2f2;border-color:#d9d9d9}.slot-segment.cancelled[_ngcontent-%COMP%]{background:#e6e6e6}.slot-segment.cancelling[_ngcontent-%COMP%]{background:#ffe6cc;border-color:#ffb366}.slot-segment.postponed[_ngcontent-%COMP%]{background:#f2f2f2;border-color:#d9d9d9}.slot-segment.editing[_ngcontent-%COMP%]{background:#d9d9d9;border-color:#bfbfbf}.slot-segment.executing[_ngcontent-%COMP%]{background-color:#fffeed;border-color:#ffe766}.slot-segment.executing[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#ffe766,#ffe766 3px,transparent 3px,transparent 6.5px)}.slot-segment.missed-assigned[_ngcontent-%COMP%]{background:#fde4df;border-color:#fdccc2;color:#e57373!important}.slot-segment.missed-prepared[_ngcontent-%COMP%]{background:#fde4df;border-color:#fdccc2;color:#e57373}.slot-segment.missed-prepared[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#fdccc2,#fdccc2 3px,transparent 3px,transparent 6.5px)}.slot-segment.needs-repackage[_ngcontent-%COMP%], .slot-segment.changed[_ngcontent-%COMP%]{background:#fff8ed;border-color:#ffdea7}.slot-segment.changed[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#ffdea7,#ffdea7 3px,transparent 3px,transparent 6.5px)}.slot-segment.systematically[_ngcontent-%COMP%]{background:#f6fbff;border-color:#cee8ff}.slot-segment.empty[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.custom-menu-dropdown[_ngcontent-%COMP%]{background:#fff;border-radius:4px;padding:8px;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014;font-size:14px;color:#222b45}.actions-menu-dropdown[_ngcontent-%COMP%]{background:#fff;border-radius:4px;padding:0;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014;font-size:14px;color:#222b45}.actions-menu-container[_ngcontent-%COMP%]{padding:0;min-width:120px}.actions-menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{--lu-svg-icon-color: #999999;padding:0 12px;height:40px;cursor:pointer;transition:background .12s;display:flex;align-items:center;gap:8px}.actions-menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover{background:#f2f6fb;width:100%}.actions-menu-container[_ngcontent-%COMP%]   .menu-item.destructive[_ngcontent-%COMP%]{color:#e53935;--lu-svg-icon-color: #e53935}.actions-menu-container[_ngcontent-%COMP%]   .menu-item.destructive[_ngcontent-%COMP%]:hover{background:#ffebee}.actions-menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   lu-svg-icon[data-lu-icon=recovery][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:scaleX(-1)}.slots-wrapper-timeline[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-height:48px;display:grid;align-items:center;grid-template-rows:1fr;padding-left:35px;box-sizing:border-box}.timeline-column-highlight[_ngcontent-%COMP%]{grid-row:1;height:100%;min-height:48px;background-color:#0000000a;pointer-events:none;z-index:0}.timeline-slot[_ngcontent-%COMP%]{grid-row:1;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;padding:0 8px;font-size:12px;white-space:nowrap;cursor:pointer;box-shadow:0 1px 3px #0000000d;transition:all .2s ease;position:relative;z-index:1}.slot-label-time[_ngcontent-%COMP%], .slot-label-range[_ngcontent-%COMP%]{width:100%;text-align:center;overflow:hidden;text-overflow:ellipsis;color:#5da6e9;z-index:4}.missed-assigned[_ngcontent-%COMP%]   .slot-label-time[_ngcontent-%COMP%], .missed-prepared[_ngcontent-%COMP%]   .slot-label-time[_ngcontent-%COMP%], .missed-assigned[_ngcontent-%COMP%]   .slot-label-range[_ngcontent-%COMP%], .missed-prepared[_ngcontent-%COMP%]   .slot-label-range[_ngcontent-%COMP%]{color:#e57373!important}.range-slot-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.progress-bar[_ngcontent-%COMP%]{position:absolute;left:0;top:15%;height:70%;background-color:#dbeafe;border-right:1px solid #bfdbfe;border-radius:4px;opacity:.4;transition:width .3s ease;z-index:1}.slot-label[_ngcontent-%COMP%]{position:relative;z-index:2;font-size:12px;font-weight:500;color:#475569;padding-left:4px}.slot-label--overlay[_ngcontent-%COMP%]{position:absolute;z-index:10;left:50%;top:50%;transform:translate(-50%,-50%);padding:0 4px;background:rgba(255,255,255,.85);border-radius:2px;white-space:nowrap}.range-full-span[_ngcontent-%COMP%]{grid-column:1/-1;width:calc(100% - 8px);max-width:100%;min-width:unset;margin-left:8px}.lu-modal-reason-block[_ngcontent-%COMP%]{display:flex;flex-direction:column}.menu-item[_ngcontent-%COMP%]{--lu-svg-icon-color: #999999;padding:0 12px;border-radius:4px;cursor:pointer;transition:background .12s;display:flex;align-items:center;gap:8px;width:100%}.menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:8px 0}.menu-item[_ngcontent-%COMP%]:hover{background:#f2f6fb}.menu-item[_ngcontent-%COMP%] + .menu-item[_ngcontent-%COMP%]{margin-top:4px}.menu-item.destructive[_ngcontent-%COMP%]{color:#e53935;--lu-svg-icon-color: #e53935}.menu-item.destructive[_ngcontent-%COMP%]:hover{background:#ffebee}.progress-bar-fill[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;background-color:#cee8ff;border-top-left-radius:4px;border-bottom-left-radius:4px;z-index:1;transition:width .3s ease}.cell.assigned[_ngcontent-%COMP%], .grid-slot.assigned[_ngcontent-%COMP%], .timeline-slot.assigned[_ngcontent-%COMP%], .menu-slot-label.assigned[_ngcontent-%COMP%]{background:#f6fbff;border:2px solid #cee8ff}.cell.assigned[_ngcontent-%COMP%]:hover, .grid-slot.assigned[_ngcontent-%COMP%]:hover, .timeline-slot.assigned[_ngcontent-%COMP%]:hover, .menu-slot-label.assigned[_ngcontent-%COMP%]:hover{background:#e9f5ff;border:2px solid #bee1ff}.cell.cancelling[_ngcontent-%COMP%], .grid-slot.cancelling[_ngcontent-%COMP%], .timeline-slot.cancelling[_ngcontent-%COMP%], .menu-slot-label.cancelling[_ngcontent-%COMP%]{background:#ffe6cc;border:2px solid #ffb366}.cell.cancelled[_ngcontent-%COMP%], .grid-slot.cancelled[_ngcontent-%COMP%], .timeline-slot.cancelled[_ngcontent-%COMP%], .menu-slot-label.cancelled[_ngcontent-%COMP%]{background:#e6e6e6}.cell.completed[_ngcontent-%COMP%], .cell.delivered[_ngcontent-%COMP%], .grid-slot.completed[_ngcontent-%COMP%], .grid-slot.delivered[_ngcontent-%COMP%], .timeline-slot.completed[_ngcontent-%COMP%], .timeline-slot.delivered[_ngcontent-%COMP%], .menu-slot-label.completed[_ngcontent-%COMP%], .menu-slot-label.delivered[_ngcontent-%COMP%]{background:#cee8ff}.cell.completed[_ngcontent-%COMP%]:hover, .cell.delivered[_ngcontent-%COMP%]:hover, .grid-slot.completed[_ngcontent-%COMP%]:hover, .grid-slot.delivered[_ngcontent-%COMP%]:hover, .timeline-slot.completed[_ngcontent-%COMP%]:hover, .timeline-slot.delivered[_ngcontent-%COMP%]:hover, .menu-slot-label.completed[_ngcontent-%COMP%]:hover, .menu-slot-label.delivered[_ngcontent-%COMP%]:hover{background:#bee1ff}.cell.completed.base-therapy[_ngcontent-%COMP%], .cell.delivered.base-therapy[_ngcontent-%COMP%], .grid-slot.completed.base-therapy[_ngcontent-%COMP%], .grid-slot.delivered.base-therapy[_ngcontent-%COMP%], .timeline-slot.completed.base-therapy[_ngcontent-%COMP%], .timeline-slot.delivered.base-therapy[_ngcontent-%COMP%], .menu-slot-label.completed.base-therapy[_ngcontent-%COMP%], .menu-slot-label.delivered.base-therapy[_ngcontent-%COMP%]{cursor:pointer;position:relative}.cell.completed.base-therapy[_ngcontent-%COMP%]:hover, .cell.delivered.base-therapy[_ngcontent-%COMP%]:hover, .grid-slot.completed.base-therapy[_ngcontent-%COMP%]:hover, .grid-slot.delivered.base-therapy[_ngcontent-%COMP%]:hover, .timeline-slot.completed.base-therapy[_ngcontent-%COMP%]:hover, .timeline-slot.delivered.base-therapy[_ngcontent-%COMP%]:hover, .menu-slot-label.completed.base-therapy[_ngcontent-%COMP%]:hover, .menu-slot-label.delivered.base-therapy[_ngcontent-%COMP%]:hover{background:#bee1ff}.cell.executing[_ngcontent-%COMP%], .grid-slot.executing[_ngcontent-%COMP%], .timeline-slot.executing[_ngcontent-%COMP%], .menu-slot-label.executing[_ngcontent-%COMP%]{background-color:#fffded;border:2px solid #ffe766}.cell.executing[_ngcontent-%COMP%]:before, .grid-slot.executing[_ngcontent-%COMP%]:before, .timeline-slot.executing[_ngcontent-%COMP%]:before, .menu-slot-label.executing[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#ffe766,#ffe766 3px,transparent 3px,transparent 6.5px)}.cell.partially-completed[_ngcontent-%COMP%], .grid-slot.partially-completed[_ngcontent-%COMP%], .timeline-slot.partially-completed[_ngcontent-%COMP%], .menu-slot-label.partially-completed[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:#f6fbff;border:2px solid #cee8ff;border-radius:4px}.cell.partially-completed[_ngcontent-%COMP%]:before, .grid-slot.partially-completed[_ngcontent-%COMP%]:before, .timeline-slot.partially-completed[_ngcontent-%COMP%]:before, .menu-slot-label.partially-completed[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#cee8ff,#cee8ff 3px,transparent 3px,transparent 6.5px)}.cell.partially-completed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .grid-slot.partially-completed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .timeline-slot.partially-completed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .menu-slot-label.partially-completed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%]{position:relative;z-index:2}.cell.created[_ngcontent-%COMP%], .grid-slot.created[_ngcontent-%COMP%], .timeline-slot.created[_ngcontent-%COMP%], .menu-slot-label.created[_ngcontent-%COMP%]{background:#f6fbff;border:2px solid #cee8ff}.cell.created[_ngcontent-%COMP%]:hover, .grid-slot.created[_ngcontent-%COMP%]:hover, .timeline-slot.created[_ngcontent-%COMP%]:hover, .menu-slot-label.created[_ngcontent-%COMP%]:hover{background:#e9f5ff;border:2px solid #bee1ff}.cell.postponed[_ngcontent-%COMP%], .grid-slot.postponed[_ngcontent-%COMP%], .timeline-slot.postponed[_ngcontent-%COMP%], .menu-slot-label.postponed[_ngcontent-%COMP%]{background:#f2f2f2;border:2px solid #d9d9d9}.cell.issued[_ngcontent-%COMP%], .grid-slot.issued[_ngcontent-%COMP%], .timeline-slot.issued[_ngcontent-%COMP%], .menu-slot-label.issued[_ngcontent-%COMP%]{background:#cee8ff}.cell.issued[_ngcontent-%COMP%]:hover, .grid-slot.issued[_ngcontent-%COMP%]:hover, .timeline-slot.issued[_ngcontent-%COMP%]:hover, .menu-slot-label.issued[_ngcontent-%COMP%]:hover{background:#bee1ff}.cell.prepared[_ngcontent-%COMP%], .grid-slot.prepared[_ngcontent-%COMP%], .timeline-slot.prepared[_ngcontent-%COMP%], .menu-slot-label.prepared[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:#f6fbff;border:2px solid #cee8ff;border-radius:4px}.cell.prepared[_ngcontent-%COMP%]:before, .grid-slot.prepared[_ngcontent-%COMP%]:before, .timeline-slot.prepared[_ngcontent-%COMP%]:before, .menu-slot-label.prepared[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#cee8ff,#cee8ff 2px,transparent 1px,transparent 7px)}.cell.prepared[_ngcontent-%COMP%]:hover, .grid-slot.prepared[_ngcontent-%COMP%]:hover, .timeline-slot.prepared[_ngcontent-%COMP%]:hover, .menu-slot-label.prepared[_ngcontent-%COMP%]:hover{background:#e9f5ff;border:2px solid #bee1ff}.cell.prepared[_ngcontent-%COMP%]:hover:before, .grid-slot.prepared[_ngcontent-%COMP%]:hover:before, .timeline-slot.prepared[_ngcontent-%COMP%]:hover:before, .menu-slot-label.prepared[_ngcontent-%COMP%]:hover:before{background-image:repeating-linear-gradient(-45deg,#bee1ff,#bee1ff 3px,transparent 1px,transparent 7px)}.cell.missed-assigned[_ngcontent-%COMP%], .grid-slot.missed-assigned[_ngcontent-%COMP%], .timeline-slot.missed-assigned[_ngcontent-%COMP%], .menu-slot-label.missed-assigned[_ngcontent-%COMP%]{background:#fde4df;border:2px solid #fdccc2;color:#e57373!important}.cell.missed-assigned[_ngcontent-%COMP%]:hover, .grid-slot.missed-assigned[_ngcontent-%COMP%]:hover, .timeline-slot.missed-assigned[_ngcontent-%COMP%]:hover, .menu-slot-label.missed-assigned[_ngcontent-%COMP%]:hover{background:#fddad3;border:2px solid #fbb8ab}@media (min-width: 600px) and (max-width: 960px){.cell.missed-assigned[_ngcontent-%COMP%]:hover, .grid-slot.missed-assigned[_ngcontent-%COMP%]:hover, .timeline-slot.missed-assigned[_ngcontent-%COMP%]:hover, .menu-slot-label.missed-assigned[_ngcontent-%COMP%]:hover{background:#fddad3;border:2px solid #FBC7BD}}.cell.missed-prepared[_ngcontent-%COMP%], .grid-slot.missed-prepared[_ngcontent-%COMP%], .timeline-slot.missed-prepared[_ngcontent-%COMP%], .menu-slot-label.missed-prepared[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:#fde4df;border:2px solid #fdccc2;border-radius:4px;color:#e57373}.cell.missed-prepared[_ngcontent-%COMP%]:before, .grid-slot.missed-prepared[_ngcontent-%COMP%]:before, .timeline-slot.missed-prepared[_ngcontent-%COMP%]:before, .menu-slot-label.missed-prepared[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#fdccc2,#fdccc2 3px,transparent 3px,transparent 6.5px)}.cell.missed-prepared[_ngcontent-%COMP%]:hover, .grid-slot.missed-prepared[_ngcontent-%COMP%]:hover, .timeline-slot.missed-prepared[_ngcontent-%COMP%]:hover, .menu-slot-label.missed-prepared[_ngcontent-%COMP%]:hover{background:#fddad3;border:2px solid #fbb8ab}.cell.missed-prepared[_ngcontent-%COMP%]:hover:before, .grid-slot.missed-prepared[_ngcontent-%COMP%]:hover:before, .timeline-slot.missed-prepared[_ngcontent-%COMP%]:hover:before, .menu-slot-label.missed-prepared[_ngcontent-%COMP%]:hover:before{background-image:repeating-linear-gradient(-45deg,#fbb8ab,#fbb8ab 3px,transparent 3px,transparent 6.5px)}.cell.needs-repackage[_ngcontent-%COMP%], .grid-slot.needs-repackage[_ngcontent-%COMP%], .timeline-slot.needs-repackage[_ngcontent-%COMP%], .menu-slot-label.needs-repackage[_ngcontent-%COMP%]{background:#fff8ed;border:2px solid #ffdea7}.cell.needs-repackage[_ngcontent-%COMP%]:hover, .grid-slot.needs-repackage[_ngcontent-%COMP%]:hover, .timeline-slot.needs-repackage[_ngcontent-%COMP%]:hover, .menu-slot-label.needs-repackage[_ngcontent-%COMP%]:hover{background:#fff8ed;border:2px solid #ffc979}.cell.utilized[_ngcontent-%COMP%], .cell.damaged[_ngcontent-%COMP%], .grid-slot.utilized[_ngcontent-%COMP%], .grid-slot.damaged[_ngcontent-%COMP%], .timeline-slot.utilized[_ngcontent-%COMP%], .timeline-slot.damaged[_ngcontent-%COMP%], .menu-slot-label.utilized[_ngcontent-%COMP%], .menu-slot-label.damaged[_ngcontent-%COMP%]{background:#f2f2f2}.cell.utilized[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .cell.damaged[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .grid-slot.utilized[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .grid-slot.damaged[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .timeline-slot.utilized[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .timeline-slot.damaged[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .menu-slot-label.utilized[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .menu-slot-label.damaged[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%]{color:#bbb}.cell.changed[_ngcontent-%COMP%], .grid-slot.changed[_ngcontent-%COMP%], .timeline-slot.changed[_ngcontent-%COMP%], .menu-slot-label.changed[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:#fff8ed;border:2px solid #ffdea7;border-radius:4px}.cell.changed[_ngcontent-%COMP%]:before, .grid-slot.changed[_ngcontent-%COMP%]:before, .timeline-slot.changed[_ngcontent-%COMP%]:before, .menu-slot-label.changed[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background-image:repeating-linear-gradient(-45deg,#ffdea7,#ffdea7 3px,transparent 3px,transparent 6.5px)}.cell.changed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .grid-slot.changed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .timeline-slot.changed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .menu-slot-label.changed[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%]{position:relative;z-index:2}.cell.changed[_ngcontent-%COMP%]:hover, .grid-slot.changed[_ngcontent-%COMP%]:hover, .timeline-slot.changed[_ngcontent-%COMP%]:hover, .menu-slot-label.changed[_ngcontent-%COMP%]:hover{background:#fff8ed;border:2px solid #ffc979}.cell.changed[_ngcontent-%COMP%]:hover:before, .grid-slot.changed[_ngcontent-%COMP%]:hover:before, .timeline-slot.changed[_ngcontent-%COMP%]:hover:before, .menu-slot-label.changed[_ngcontent-%COMP%]:hover:before{background-image:repeating-linear-gradient(-45deg,#ffc979,#ffc979 3px,transparent 3px,transparent 6.5px)}.cell.editing[_ngcontent-%COMP%], .grid-slot.editing[_ngcontent-%COMP%], .timeline-slot.editing[_ngcontent-%COMP%], .menu-slot-label.editing[_ngcontent-%COMP%]{background:#d9d9d9}.cell.empty[_ngcontent-%COMP%], .grid-slot.empty[_ngcontent-%COMP%], .timeline-slot.empty[_ngcontent-%COMP%], .menu-slot-label.empty[_ngcontent-%COMP%]{visibility:hidden;background:none;border:none}@media (max-width: 960px){.cell.empty[_ngcontent-%COMP%], .grid-slot.empty[_ngcontent-%COMP%], .timeline-slot.empty[_ngcontent-%COMP%], .menu-slot-label.empty[_ngcontent-%COMP%]{visibility:hidden;background:none;border:none;display:none}}.cell.future-locked[_ngcontent-%COMP%], .grid-slot.future-locked[_ngcontent-%COMP%], .timeline-slot.future-locked[_ngcontent-%COMP%], .menu-slot-label.future-locked[_ngcontent-%COMP%]{opacity:.4;cursor:not-allowed!important}.cell.future-locked[_ngcontent-%COMP%]:hover, .grid-slot.future-locked[_ngcontent-%COMP%]:hover, .timeline-slot.future-locked[_ngcontent-%COMP%]:hover, .menu-slot-label.future-locked[_ngcontent-%COMP%]:hover{opacity:.4}.cell.hatched[_ngcontent-%COMP%], .grid-slot.hatched[_ngcontent-%COMP%], .timeline-slot.hatched[_ngcontent-%COMP%], .menu-slot-label.hatched[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(45deg,#e6f7fa,#e6f7fa 10px,#7fe3eb 10px,#7fe3eb 20px);border:2px solid #7fe3eb}.cell.systematically[_ngcontent-%COMP%], .grid-slot.systematically[_ngcontent-%COMP%], .timeline-slot.systematically[_ngcontent-%COMP%], .menu-slot-label.systematically[_ngcontent-%COMP%]{border:none!important;background:#f6fbff;position:relative}.cell.systematically[_ngcontent-%COMP%]:before, .grid-slot.systematically[_ngcontent-%COMP%]:before, .timeline-slot.systematically[_ngcontent-%COMP%]:before, .menu-slot-label.systematically[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;border:2px dashed #cee8ff;border-radius:4px;pointer-events:none;z-index:0}.cell.systematically[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .grid-slot.systematically[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .timeline-slot.systematically[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%], .menu-slot-label.systematically[_ngcontent-%COMP%]   .slot-label[_ngcontent-%COMP%]{color:#5da6e9;position:relative;z-index:2}.cell.systematically[_ngcontent-%COMP%]:hover, .grid-slot.systematically[_ngcontent-%COMP%]:hover, .timeline-slot.systematically[_ngcontent-%COMP%]:hover, .menu-slot-label.systematically[_ngcontent-%COMP%]:hover{background:#e9f5ff;border:2px dashed #bee1ff}.timeline-mob[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:16px;overflow-x:auto}.timeline-mob[_ngcontent-%COMP%]::-webkit-scrollbar{height:12px!important}.timeline-mob__item[_ngcontent-%COMP%]{margin-bottom:2px;display:flex;flex-direction:column;gap:8px;min-width:64px;cursor:pointer}.timeline-mob__item.active[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;border-bottom:2px solid #333333;padding-bottom:4px}.timeline-mob__item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:6px 0;font-size:13px;color:#757575;text-align:center}.timeline-mob__item[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:32px;color:#5da6e9;font-size:13px;font-weight:600;border-radius:4px}.timeline-mob__item[_ngcontent-%COMP%]   .cell.empty[_ngcontent-%COMP%]{visibility:hidden;background:none;border:none}.timeline-mob__item[_ngcontent-%COMP%]   .cell.type-range[_ngcontent-%COMP%]{border-style:dashed}.timeline-mob__item[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{z-index:1}.timeline-mob__item[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .missed-assigned[_ngcontent-%COMP%]{color:#e57373!important;border:2px solid #fdccc2}"],
    changeDetection: 0
  }), Gl = Op);
  Wu = Gl = (0, Se.gn)([(0, Xn.c)()], Wu);
  const Zm = class {};
  let Pd = Zm;
  Zm.ɵfac = function (k) {
    return new (k || Zm)();
  }, Zm.ɵcmp = n.Xpm({
    type: Zm,
    selectors: [["app-info-icon"]],
    decls: 4,
    vars: 0,
    consts: [["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 10C12.5523 10 13 10.4478 13 11V16C13 16.5522 12.5523 17 12 17C11.4477 17 11 16.5522 11 16V11C11 10.4478 11.4477 10 12 10Z", "fill", "#38A1D6"], ["d", "M12 9C12.5523 9 13 8.55225 13 8C13 7.44775 12.5523 7 12 7C11.4477 7 11 7.44775 11 8C11 8.55225 11.4477 9 12 9Z", "fill", "#38A1D6"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 21C16.9706 21 21 16.9705 21 12C21 7.02954 16.9706 3 12 3C7.02943 3 3 7.02954 3 12C3 16.9705 7.02943 21 12 21ZM12 19C15.866 19 19 15.866 19 12C19 8.13403 15.866 5 12 5C8.13401 5 5 8.13403 5 12C5 15.866 8.13401 19 12 19Z", "fill", "#38A1D6"]],
    template: function (k, ce) {
      1 & k && (n.O4$(), n.TgZ(0, "svg", 0), n._UZ(1, "path", 1)(2, "path", 2)(3, "path", 3), n.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
  var ms = i(76754);
  function dd(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 15), 2 & Te && n.Q6J("size", 24);
  }
  function fh(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 16), 2 & Te && n.Q6J("size", 24);
  }
  function su(Te, $) {
    if (1 & Te && (n._UZ(0, "div", 32), n.ALo(1, "highlight")), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.Q6J("innerHTML", n.xi3(1, 1, null == k ? null : k.name, ce.searchTerm), n.oJD);
    }
  }
  function Tp(Te, $) {
    1 & Te && (n.TgZ(0, "div", 33), n._uU(1, "—"), n.qZA());
  }
  function sg(Te, $) {
    if (1 & Te && (n._UZ(0, "div", 34), n.ALo(1, "highlight")), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.Q6J("innerHTML", n.xi3(1, 1, null == k ? null : k.tradeName, ce.searchTerm), n.oJD);
    }
  }
  function Sm(Te, $) {
    1 & Te && (n.TgZ(0, "div", 35), n._uU(1, "—"), n.qZA());
  }
  function $f(Te, $) {
    if (1 & Te && (n.TgZ(0, "div"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.Oqu(null == k ? null : k.method);
    }
  }
  function ag(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 36), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.hij(" ", null == k ? null : k.methodNotes, " ");
    }
  }
  function gf(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(5);
      n.xp6(1), n.Oqu(k.periodLabel);
    }
  }
  function $p(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "span"), n._uU(2), n.qZA(), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(6);
      n.xp6(2), n.Oqu(ce.periodLabels[null == k.period ? null : k.period.toLowerCase()]);
    }
  }
  function Au(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, $p, 3, 1, "ng-container", 38), n.BQk()), 2 & Te) {
      const k = n.oxw(2).$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngForOf", ce.getUniquePeriods(k.slots));
    }
  }
  function rp(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 37), n.YNc(1, gf, 2, 1, "span", 2), n.YNc(2, Au, 2, 1, "ng-container", 2), n.qZA()), 2 & Te) {
      const k = n.oxw(4);
      n.xp6(1), n.Q6J("ngIf", k.selectedPeriod), n.xp6(1), n.Q6J("ngIf", !k.selectedPeriod);
    }
  }
  function Od(Te, $) {
    1 & Te && n._uU(0, "—");
  }
  function C_(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 17)(2, "div", 18)(3, "div", 19), n.YNc(4, su, 2, 4, "div", 20), n.YNc(5, Tp, 2, 0, "ng-template", null, 21, n.W1O), n.YNc(7, sg, 2, 4, "div", 22), n.YNc(8, Sm, 2, 0, "ng-template", null, 23, n.W1O), n.TgZ(10, "app-info-icon", 24), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw().$implicit,
          Zi = n.oxw(2);
        return n.KtG(Zi.openPresenter(Tt, ai));
      }), n.qZA()(), n.TgZ(11, "div", 25), n._uU(12), n.TgZ(13, "div"), n.YNc(14, $f, 2, 1, "div", 26), n.YNc(15, ag, 2, 1, "div", 27), n.qZA()()(), n.TgZ(16, "div", 28), n.YNc(17, rp, 3, 2, "div", 29), n.TgZ(18, "time-slots", 30), n.NdJ("action", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw().$implicit,
          Po = n.oxw(2);
        return n.KtG(Po.forwardSlotActionToParent(Zi.id, ai, Ye));
      }), n.qZA()()(), n.YNc(19, Od, 1, 0, "ng-template", null, 31, n.W1O), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.MAs(6),
        Ye = n.MAs(9),
        Tt = n.MAs(20),
        ai = n.oxw(3);
      n.xp6(1), n.ekj("is-new", k.isNew), n.xp6(3), n.Q6J("ngIf", null == k ? null : k.name)("ngIfElse", ce), n.xp6(3), n.Q6J("ngIf", null == k ? null : k.tradeName)("ngIfElse", Ye), n.xp6(5), n.hij(" ", (null == k ? null : k.dosage) || "—", " "), n.xp6(2), n.Q6J("ngIf", null == k ? null : k.method)("ngIfElse", Tt), n.xp6(1), n.Q6J("ngIf", null == k ? null : k.methodNotes), n.xp6(2), n.Q6J("ngIf", "hours" !== ai.timeHeaderMode), n.xp6(1), n.Q6J("isAdaptive", !0)("mode", "issuing")("slots", k.slots)("timeHeaderMode", ai.timeHeaderMode)("hourlyHeaders", ai.allHourlyHeaders)("filterPeriod", ai.selectedPeriod)("isBaseTherapy", k.base);
    }
  }
  function y_(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-expansion-panel", 4)(1, "lu-expansion-panel-header", 5)(2, "span", 6)(3, "span", 7), n._uU(4), n.qZA(), n.TgZ(5, "span", 8)(6, "span", 9), n.YNc(7, dd, 1, 1, "lu-svg-icon", 10), n.YNc(8, fh, 1, 1, "lu-svg-icon", 11), n._uU(9), n.qZA(), n._UZ(10, "span", 12), n._uU(11), n._UZ(12, "span", 12), n._uU(13), n.qZA()()(), n.TgZ(14, "div", 13), n.YNc(15, C_, 21, 18, "ng-container", 14), n.qZA()()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      n.xp6(1), n.Q6J("withArrow", !0), n.xp6(3), n.Oqu(k.name), n.xp6(3), n.Q6J("ngIf", 1 === k.sex), n.xp6(1), n.Q6J("ngIf", 2 === k.sex), n.xp6(1), n.hij(" ", k.age, " "), n.xp6(2), n.hij(" ", k.ward, " "), n.xp6(2), n.hij(" ", k.insurance, " "), n.xp6(2), n.Q6J("ngForOf", ce.groupMedsById(k.medicines))("ngForTrackBy", ce.trackByMedicine);
    }
  }
  function Im(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, y_, 16, 9, "lu-expansion-panel", 3), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.patientData)("ngForTrackBy", k.trackByPatient);
    }
  }
  function Uu(Te, $) {
    if (1 & Te && (n._UZ(0, "div", 32), n.ALo(1, "highlight")), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.Q6J("innerHTML", n.xi3(1, 1, null == k ? null : k.patientName, ce.searchTerm), n.oJD);
    }
  }
  function Ad(Te, $) {
    1 & Te && (n.TgZ(0, "div", 33), n._uU(1, "—"), n.qZA());
  }
  function Lg(Te, $) {
    if (1 & Te && (n._UZ(0, "div", 34), n.ALo(1, "highlight")), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.Q6J("innerHTML", n.xi3(1, 1, null == k ? null : k.tradeName, ce.searchTerm), n.oJD);
    }
  }
  function kg(Te, $) {
    1 & Te && (n.TgZ(0, "div", 35), n._uU(1, "—"), n.qZA());
  }
  function Kf(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(3).$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Oqu(ce.getSelectedPeriod(k.slots));
    }
  }
  function Rg(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "span"), n._uU(2), n.qZA(), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(7);
      n.xp6(2), n.Oqu(ce.periodLabels[null == k.period ? null : k.period.toLowerCase()]);
    }
  }
  function mh(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Rg, 3, 1, "ng-container", 38), n.BQk()), 2 & Te) {
      const k = n.oxw(3).$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngForOf", ce.getUniquePeriods(k.slots));
    }
  }
  function kh(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 37), n.YNc(1, Kf, 2, 1, "span", 2), n.YNc(2, mh, 2, 1, "ng-container", 2), n.qZA()), 2 & Te) {
      const k = n.oxw(5);
      n.xp6(1), n.Q6J("ngIf", k.selectedPeriod), n.xp6(1), n.Q6J("ngIf", !k.selectedPeriod);
    }
  }
  function Nl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 28), n.YNc(1, kh, 3, 2, "div", 29), n.TgZ(2, "time-slots", 43), n.NdJ("action", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw().$implicit,
          ai = n.oxw(3);
        return n.KtG(ai.forwardSlotActionToParent(Tt.patientId, Tt, Ye));
      }), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(3);
      n.xp6(1), n.Q6J("ngIf", "hours" !== ce.timeHeaderMode), n.xp6(1), n.Q6J("isAdaptive", !0)("slots", null == k ? null : k.slots)("mode", "issuing")("timeHeaderMode", ce.timeHeaderMode)("hourlyHeaders", ce.allHourlyHeaders)("filterPeriod", ce.selectedPeriod)("isBaseTherapy", k.base);
    }
  }
  function Cu(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 17)(2, "div", 18)(3, "div", 19), n.YNc(4, Uu, 2, 4, "div", 20), n.YNc(5, Ad, 2, 0, "ng-template", null, 40, n.W1O), n.YNc(7, Lg, 2, 4, "div", 22), n.YNc(8, kg, 2, 0, "ng-template", null, 41, n.W1O), n.qZA(), n.TgZ(10, "div", 25), n._uU(11), n.TgZ(12, "div"), n._uU(13), n.qZA()()(), n.YNc(14, Nl, 3, 8, "div", 42), n.qZA(), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.MAs(6),
        Ye = n.MAs(9),
        Tt = n.oxw(3);
      n.xp6(4), n.Q6J("ngIf", null == k ? null : k.patientName)("ngIfElse", ce), n.xp6(3), n.Q6J("ngIf", null == k ? null : k.tradeName)("ngIfElse", Ye), n.xp6(4), n.hij(" ", (null == k ? null : k.dose) || "—", " "), n.xp6(2), n.AsE("", null == k ? null : k.method, ", ", null == k ? null : k.frequency, ""), n.xp6(1), n.Q6J("ngIf", !(Tt.selectedPeriod && !Tt.getSelectedPeriod(k.slots)));
    }
  }
  function Lm(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-expansion-panel", 4)(1, "lu-expansion-panel-header", 5)(2, "span", 39), n._uU(3), n.qZA()(), n.TgZ(4, "div", 13), n.YNc(5, Cu, 15, 8, "ng-container", 14), n.qZA()()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      n.xp6(1), n.Q6J("withArrow", !0), n.xp6(2), n.hij(" ", k.key, " "), n.xp6(2), n.Q6J("ngForOf", k.value)("ngForTrackBy", ce.trackByPrescription);
    }
  }
  function Rh(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Lm, 6, 4, "lu-expansion-panel", 3), n.ALo(2, "keyvalue"), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", n.lcZ(2, 2, k.medicamentData))("ngForTrackBy", k.trackByGroupKey);
    }
  }
  let Ep = ((kf = class {
    constructor($, k) {
      this.modalHelper = $, this.viewContainerRef = k, this.groupingMode = "byPatient", this.patientData = [], this.medicamentData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.selectedPeriod = null, this.searchTerm = "", this.slotAction = new n.vpe(), this.periodLabels = {
        morning: "Утро",
        day: "День",
        evening: "Вечер",
        night: "Ночь"
      }, this.PERIOD_ORDER = ["MORNING", "DAY", "EVENING", "NIGHT"], this.groupMedsById = gt;
    }
    getPeriodLabel($) {
      return $ && this.periodLabels[$.toLowerCase()] || "";
    }
    get periodLabel() {
      return this.selectedPeriod && "all" !== this.selectedPeriod ? this.periodLabels[this.selectedPeriod] ?? null : null;
    }
    getSelectedPeriod($) {
      return $.some(ce => ce.period.toLowerCase() === this.selectedPeriod) && this.periodLabels[this.selectedPeriod] || "";
    }
    getUniquePeriods($) {
      return (0, Io.uniqBy)($, "period").sort((k, ce) => this.PERIOD_ORDER.indexOf(k.period) - this.PERIOD_ORDER.indexOf(ce.period));
    }
    trackByPatient($, k) {
      return k.id;
    }
    trackByMedicine($, k) {
      return k.id;
    }
    trackByGroupKey($, k) {
      return k.key;
    }
    trackByPrescription($, k) {
      return k.id;
    }
    forwardSlotActionToParent($, k, ce) {
      this.slotAction.emit({
        patientId: $,
        medicineId: k.id,
        slot: ce.slot,
        action: ce.action,
        isBaseTherapy: k.base,
        isOnHand: k.onHand
      });
    }
    openPresenter($, k) {
      this.modalHelper.openPresenterModal($, k, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe(ce => {});
    }
  }).ɵfac = function (k) {
    return new (k || kf)(n.Y36(Ya), n.Y36(n.s_b));
  }, kf.ɵcmp = n.Xpm({
    type: kf,
    selectors: [["pill-dosing-medications-adaptive"]],
    inputs: {
      groupingMode: "groupingMode",
      patientData: "patientData",
      medicamentData: "medicamentData",
      timeHeaderMode: "timeHeaderMode",
      allHourlyHeaders: ["hourlyHeaders", "allHourlyHeaders"],
      selectedPeriod: "selectedPeriod",
      searchTerm: "searchTerm"
    },
    outputs: {
      slotAction: "slotAction"
    },
    decls: 4,
    vars: 2,
    consts: [[1, "plan-tablet-list-wrapper"], [1, "plan-tablet-list"], [4, "ngIf"], ["class", "plan-tablet-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "plan-tablet-list__item"], ["color", "primary", 1, "plan-tablet-list__item-header", 3, "withArrow"], [1, "medicine-heading"], [1, "medicine-heading__name"], [1, "medicine-heading__details"], [1, "medicine-heading__age"], ["icon", "male2", 3, "size", 4, "ngIf"], ["icon", "female2", 3, "size", 4, "ngIf"], [1, "medicine-heading__separator"], [1, "medicine-details"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["icon", "male2", 3, "size"], ["icon", "female2", 3, "size"], [1, "medicine-details__item"], [1, "medicine-details__medicine"], [1, "medicine-details__medicine-name"], ["class", "name", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["emptyName", ""], ["class", "trade-name", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["emptyTradeName", ""], [1, "info", 3, "click"], [1, "medicine-details__medicine-dose"], [4, "ngIf", "ngIfElse"], ["class", "medicine-details__sub-line", 4, "ngIf"], [1, "medicine-details__period"], ["class", "medicine-details__period-items", 4, "ngIf"], [3, "isAdaptive", "mode", "slots", "timeHeaderMode", "hourlyHeaders", "filterPeriod", "isBaseTherapy", "action"], ["emptyCell", ""], [1, "name", 3, "innerHTML"], [1, "name"], [1, "trade-name", 3, "innerHTML"], [1, "trade-name"], [1, "medicine-details__sub-line"], [1, "medicine-details__period-items"], [4, "ngFor", "ngForOf"], [1, "medicine-name"], ["emptyPatientName", ""], ["emptyPrescriptionTradeName", ""], ["class", "medicine-details__period", 4, "ngIf"], [3, "isAdaptive", "slots", "mode", "timeHeaderMode", "hourlyHeaders", "filterPeriod", "isBaseTherapy", "action"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n.YNc(2, Im, 2, 2, "ng-container", 2), n.YNc(3, Rh, 3, 4, "ng-container", 2), n.qZA()()), 2 & k && (n.xp6(2), n.Q6J("ngIf", "byPatient" === ce.groupingMode), n.xp6(1), n.Q6J("ngIf", "byMedicament" == ce.groupingMode));
    },
    dependencies: [Di.sg, Di.O5, Ci.q, Ba.BN, Ba.JM, Wu, Pd, Di.Nd, ms.S],
    styles: ["[_nghost-%COMP%]{display:block;height:100%}.plan-tablet-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:0 16px;height:100%;overflow:hidden auto}@media (min-width: 600px) and (max-width: 960px){.plan-tablet-list[_ngcontent-%COMP%]{gap:11px!important;height:100%}}.plan-tablet-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.plan-tablet-list-wrapper[_ngcontent-%COMP%]{padding:8px 0;height:70vh;background-color:#f2f2f2}.plan-tablet-list[_ngcontent-%COMP%]     .lu-text-left{--lu-svg-icon-color: #38a1d6;display:flex;justify-content:center;align-items:center;width:24px!important;height:24px!important}.plan-tablet-list__item[_ngcontent-%COMP%]{width:calc(100vw - 32px);min-height:-moz-fit-content;min-height:fit-content;border-radius:8px;background-color:#fff;transition:background-color .15s ease}.plan-tablet-list__item[_ngcontent-%COMP%]:hover{background-color:#ecf6fb}@media (min-width: 600px) and (max-width: 960px){.plan-tablet-list__item[_ngcontent-%COMP%]:hover{background-color:#fff}}.plan-tablet-list__item-header[_ngcontent-%COMP%]{padding:16px 24px 16px 16px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-name[_ngcontent-%COMP%]{font-weight:600;color:#333}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading[_ngcontent-%COMP%]{display:flex;align-items:start;gap:16px;color:#333;width:100%}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading__name[_ngcontent-%COMP%]{flex:1;min-width:0;font-weight:600;word-break:break-word}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading__details[_ngcontent-%COMP%], .plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading__age[_ngcontent-%COMP%]{display:flex;align-items:center}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading__details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;white-space:nowrap;flex-shrink:0;margin-left:auto}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading__age[_ngcontent-%COMP%]{gap:8px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-heading__separator[_ngcontent-%COMP%]{display:block;height:15px;border-left:1px solid #ccc}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details[_ngcontent-%COMP%]{border-top:1px solid #e6e6e6}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding:16px 24px 16px 48px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__item[_ngcontent-%COMP%]:has(.timeline-mob){padding:16px 24px 2px 48px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #e6e6e6}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__item.is-new[_ngcontent-%COMP%]{background-color:#fff8cc}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__medicine[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__medicine-name[_ngcontent-%COMP%]{position:relative}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__medicine-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__medicine-name[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{position:absolute;top:-1px;right:0;cursor:pointer}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__medicine-name[_ngcontent-%COMP%]   .trade-name[_ngcontent-%COMP%], .plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__medicine-dose[_ngcontent-%COMP%]{line-height:22px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__period[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.plan-tablet-list[_ngcontent-%COMP%]   .medicine-details__period-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,112px);gap:16px;font-size:13px;color:#757575}.plan-tablet-list[_ngcontent-%COMP%]     .plan-tablet-list__item-header>div:nth-child(1){width:100%}[_nghost-%COMP%]     .search-highlight, [_nghost-%COMP%]     mark.search-highlight{background-color:#ffda46;color:inherit;padding:0;border-radius:2px}"],
    changeDetection: 0
  }), kf);
  Ep = (0, Se.gn)([(0, Xn.c)()], Ep);
  const _f = ["issuingFilterPanel"];
  function Jf(Te, $) {
    1 & Te && (n.TgZ(0, "div", 5), n._UZ(1, "lu-preloader"), n.qZA());
  }
  function Fg(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "pill-dosing-medications", 9), n.NdJ("slotAction", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(3);
        return n.KtG(Tt.onSlotAction(Ye));
      }), n.ALo(1, "async"), n.ALo(2, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw().ngIf,
        ce = n.oxw(2);
      n.Q6J("groupingMode", ce.groupingMode)("patientData", k)("medicamentData", n.lcZ(1, 7, ce.groupedPrescriptions$))("timeHeaderMode", ce.timeHeaderMode)("hourlyHeaders", ce.hourlyHeaders)("selectedPeriod", null == ce.filters ? null : ce.filters.period)("searchTerm", n.lcZ(2, 9, ce.searchTerm$));
    }
  }
  function lg(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "pill-dosing-medications-adaptive", 9), n.NdJ("slotAction", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(3);
        return n.KtG(Tt.onSlotAction(Ye));
      }), n.ALo(1, "async"), n.ALo(2, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw().ngIf,
        ce = n.oxw(2);
      n.Q6J("groupingMode", ce.groupingMode)("patientData", k)("medicamentData", n.lcZ(1, 7, ce.groupedPrescriptions$))("timeHeaderMode", ce.timeHeaderMode)("hourlyHeaders", ce.hourlyHeaders)("selectedPeriod", null == ce.filters ? null : ce.filters.period)("searchTerm", n.lcZ(2, 9, ce.searchTerm$));
    }
  }
  const Ng = function (Te) {
    return {
      "max-height": Te
    };
  };
  function km(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 7), n.YNc(1, Fg, 3, 11, "pill-dosing-medications", 8), n.YNc(2, lg, 3, 11, "pill-dosing-medications-adaptive", 8), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.Q6J("ngStyle", n.VKq(3, Ng, k.contentHeight)), n.xp6(1), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet);
    }
  }
  function Rm(Te, $) {
    if (1 & Te && (n.YNc(0, km, 3, 5, "div", 6), n.ALo(1, "async")), 2 & Te) {
      const k = n.oxw();
      n.Q6J("ngIf", n.lcZ(1, 1, k.patients$));
    }
  }
  let vf = ((Yh = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo, Wr, Cs) {
      this.store = $, this.viewContainerRef = k, this.modalHelper = ce, this.patientDataService = Ye, this.activeMedicamentsModuleService = Tt, this.cdr = ai, this.router = Zi, this.qrScannerService = Po, this.medicationControllerService = fo, this.userContextService = Wr, this.messageService = Cs, this.isTablet = !0, this.timeHeaderMode = "periods", this.groupingMode = "byPatient", this.hourlyHeaders = [], this.filters = null, this.breakpointObserver = (0, n.f3M)(Gn.Yg), this.cancelModalOperation$ = new d.x(), this.isModalOperationInProgress = !1, this.isLoading$ = this.store.select(le.xU), this.groupedPrescriptions$ = this.store.select(le.au).pipe((0, q.U)(ia => this.groupDataByMedicine(ia))), this.patientDataService.refreshData(), this.patients$ = this.store.select(le.NA), this.searchTerm$ = this.store.select(le.mj).pipe((0, q.U)(ia => ia?.search || ""));
    }
    ngOnInit() {
      this.store.dispatch(A()), this.userContextService.getUserContext().pipe((0, Xn.t)(this)).subscribe($ => {
        this.userInfo = {
          dept: $.department?.fullName,
          deptId: $.department?.id,
          empId: $.employeeId,
          postId: $.jobTitle?.id,
          position: $.jobTitle?.name,
          snils: $.employee?.identities?.snils,
          workplaceId: $.employee?.workplace.id,
          doctorJob: $.jobTitle?.name,
          doctorName: `${$.lastName} ${$.firstName} ${$.secondName}`
        };
      }), this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => this.isTablet = $.matches);
    }
    ngAfterViewInit() {
      const $ = this.issuingFilterPanel.getHeight();
      this.contentHeight = this.isTablet ? `calc(100% - ${$}px)` : "", this.cdr.detectChanges();
    }
    ngOnDestroy() {
      this.cancelModalOperation$.next(), this.cancelModalOperation$.complete();
    }
    generateHourlyArray($, k) {
      const ce = [];
      let Ye = (0, Ha.Z)((0, vu.Z)(new Date(), $));
      for (let Tt = $; Tt <= k; Tt++) ce.push((0, Zd.Z)(Ye, "HH:mm")), Ye = (0, Fp.Z)(Ye, 1);
      return ce;
    }
    onFiltersChanged($) {
      const k = {
        ...$,
        ward: "all" === $.ward ? null : $.ward,
        period: "all" === $.period ? null : $.period
      };
      let ce;
      this.filters = k, this.groupingMode = "byMedicament" === k.grouping ? "byMedicament" : "byPatient", ce = "byHour" === k.sorting ? "byHour" : "byTimeOfDay", "byHour" === ce ? (this.timeHeaderMode = "hours", this.hourlyHeaders = this.generateHourlyArrayForPeriod(k.period)) : (this.timeHeaderMode = "periods", this.hourlyHeaders = []), this.store.dispatch(E({
        filters: {
          status: k.status ?? ["all"],
          grouping: this.groupingMode,
          sorting: ce,
          ward: k.ward ?? null,
          period: k.period ?? null,
          timeViewMode: ce,
          search: k.search ?? null
        }
      }));
    }
    onSlotAction($) {
      const k = $.patientId,
        ce = $.medicineId,
        Ye = $.slot.id;
      if ("issuing_prepare" === $.action && this.router.navigate(["pillboxes", "preparation"], {
        state: $
      }), "injections" === this.activeMedicamentsModuleService.activeArm) return this.qrScannerService.manageScanner$.next("stop"), void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openWritingOffInjectionDialogWithData({
        ...Zi,
        context: "issuing",
        assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k)
      }, this.viewContainerRef).pipe((0, M.h)(Po => Po?.length > 0), (0, ut.w)(Po => (0, di.D)(Po.map(fo => this.medicationControllerService.markMedicationDispenseAsPreparedCommand({
        assignmentCompositionUid: fo.assignmentCompositionUid,
        code: fo.code,
        doctorJob: this.userInfo.doctorJob,
        doctorName: this.userInfo.doctorName,
        workplaceId: this.userInfo.workplaceId
      })))), (0, m.b)(() => {
        const Po = Zi.patient.fio.split(" ");
        this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0434\u0435\u043d\u044c ${Po[0]} ${Po[1][0]}. ${Po[2][0]}. \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b`, {
          marginBottom: 44
        });
      }))), (0, Go.K)(Zi => (this.messageService.error("Ошибка подготовки назначения", {
        marginBottom: 44
      }), (0, hn._)(() => Zi))), (0, tn.x)(() => this.qrScannerService.manageScanner$.next("start"))), Zi => {});
      if ($.isBaseTherapy) {
        if ("issue" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("issue", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
          this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Completed);
        });
        if ("cancel" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("cancel", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
          this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Assigned);
        });
      }
      if ("prepare" === $.action) return $.slot.status === Re.vd.Systematically ? void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("issue", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
        this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.vd.Issued);
      }) : void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openWritingOffDialogWithData({
        ...Zi,
        context: "issuing",
        stockMedications: this.patientDataService.getAllStockMedications(),
        assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k)
      }, this.viewContainerRef))), Zi => {
        Zi?.success && this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.vd.Prepared);
      });
      if ("issue" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openWritingOffDialogWithData({
        ...Zi,
        context: "issuing",
        stockMedications: this.patientDataService.getAllStockMedications(),
        assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k)
      }, this.viewContainerRef))), Zi => {
        Zi?.success && this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Completed);
      });
      if ("cancel" === $.action) return void this.executeModalOperation(this.getModalData(k, ce, Ye).pipe((0, ut.w)(Zi => this.modalHelper.openDispensingConfirmationModal("cancel", Zi.patient?.fio || "Неизвестный пациент", Zi.medicine, $.slot))), () => {
        this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Assigned);
      });
      if ("rollback" === $.action) return void this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Assigned);
      if ("cancelDispense" === $.action) return void this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, Re.Ai.Cancelled, $.reason);
      const ai = {
        utilize: Re.vd.Utilized,
        repack: Re.vd.NeedsRepackage,
        complete: Re.Ai.Completed
      }[$.action];
      ai && this.dispatchStatusUpdate($.patientId, $.medicineId, $.slot, ai);
    }
    groupDataByMedicine($) {
      return $ ? $.sort((k, ce) => k.medicineName.localeCompare(ce.medicineName, void 0, {
        sensitivity: "base"
      })).reduce((k, ce) => {
        const Ye = ce.medicineName;
        return k[Ye] || (k[Ye] = []), k[Ye].push(ce), k;
      }, {}) : {};
    }
    generateFullDayHourlyArray() {
      const $ = [];
      for (let k = 0; k < 24; k++) {
        const ce = (0, vu.Z)((0, Ha.Z)(new Date()), k);
        $.push((0, Zd.Z)(ce, "HH:mm"));
      }
      return $;
    }
    generateHourlyArrayForPeriod($) {
      if (!$ || "all" === $) return this.generateFullDayHourlyArray();
      const ce = {
        morning: {
          start: 6,
          end: 11
        },
        day: {
          start: 12,
          end: 17
        },
        evening: {
          start: 18,
          end: 22
        },
        night: {
          start: 23,
          end: 5
        }
      }[$.toLowerCase()];
      if (!ce) return this.generateFullDayHourlyArray();
      const Ye = [];
      if ("night" === $.toLowerCase()) {
        for (let Tt = 23; Tt < 24; Tt++) {
          const ai = (0, vu.Z)((0, Ha.Z)(new Date()), Tt);
          Ye.push((0, Zd.Z)(ai, "HH:mm"));
        }
        for (let Tt = 0; Tt <= 5; Tt++) {
          const ai = (0, vu.Z)((0, Ha.Z)(new Date()), Tt);
          Ye.push((0, Zd.Z)(ai, "HH:mm"));
        }
      } else for (let Tt = ce.start; Tt <= ce.end; Tt++) {
        const ai = (0, vu.Z)((0, Ha.Z)(new Date()), Tt);
        Ye.push((0, Zd.Z)(ai, "HH:mm"));
      }
      return Ye;
    }
    getModalData($, k, ce) {
      return this.patientDataService.getModalDataForPatientAndMedicine($, k, ce).pipe((0, M.h)(Ye => !!Ye || (this.store.dispatch(G({
        message: "Не удалось загрузить данные для модального окна"
      })), !1)), (0, Go.K)(() => (this.store.dispatch(G({
        message: "Ошибка при загрузке данных"
      })), Pu.E)));
    }
    executeModalOperation($, k) {
      this.cancelModalOperation$.next(), !this.isModalOperationInProgress && (this.isModalOperationInProgress = !0, $.pipe((0, b.R)(this.cancelModalOperation$), (0, tn.x)(() => {
        this.isModalOperationInProgress = !1;
      }), (0, Xn.t)(this)).subscribe(k));
    }
    dispatchStatusUpdate($, k, ce, Ye, Tt, ai) {
      if (!ce.code || !ce.resultCompositionUid) return;
      const Zi = ce.code,
        Po = ce.resultCompositionUid;
      switch (Ye) {
        case Re.Ai.Completed:
        case Re.vd.Issued:
          this.store.dispatch(u({
            patientId: $,
            medicineId: k,
            slot: ce,
            code: Zi,
            resultCompositionUid: Po
          }));
          break;
        case Re.Ai.Cancelled:
          this.store.dispatch(T({
            patientId: $,
            medicineId: k,
            slot: ce,
            code: Zi,
            resultCompositionUid: Po,
            cancelReason: Tt || "Отменено пользователем"
          }));
          break;
        case Re.Ai.Assigned:
          ce.status === Re.Ai.Completed || ce.status === Re.vd.Issued ? this.store.dispatch(R({
            patientId: $,
            medicineId: k,
            slot: ce,
            code: Zi,
            isBaseTherapy: ai
          })) : ce.status === Re.Ai.Cancelled && this.store.dispatch(B({
            patientId: $,
            medicineId: k,
            slot: ce,
            code: Zi
          }));
      }
    }
  }).ɵfac = function (k) {
    return new (k || Yh)(n.Y36(t.yh), n.Y36(n.s_b), n.Y36(Ya), n.Y36(wr), n.Y36(Yo.w), n.Y36(n.sBO), n.Y36(a.F0), n.Y36(Yt.w), n.Y36(Al.i8), n.Y36(qo.oL), n.Y36(wo.Jv));
  }, Yh.ɵcmp = n.Xpm({
    type: Yh,
    selectors: [["app-issuing-medicines"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(_f, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.issuingFilterPanel = Ye.first);
      }
    },
    decls: 7,
    vars: 4,
    consts: [[1, "issuing-medicines-container"], [3, "filtersChanged"], ["issuingFilterPanel", ""], ["class", "loader", 4, "ngIf", "ngIfElse"], ["tableContainer", ""], [1, "loader"], ["class", "issuing-medicines-content", 3, "ngStyle", 4, "ngIf"], [1, "issuing-medicines-content", 3, "ngStyle"], [3, "groupingMode", "patientData", "medicamentData", "timeHeaderMode", "hourlyHeaders", "selectedPeriod", "searchTerm", "slotAction", 4, "ngIf"], [3, "groupingMode", "patientData", "medicamentData", "timeHeaderMode", "hourlyHeaders", "selectedPeriod", "searchTerm", "slotAction"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0)(1, "pill-plan-medicines-panel", 1, 2), n.NdJ("filtersChanged", function (Tt) {
        return ce.onFiltersChanged(Tt);
      }), n.qZA(), n.YNc(3, Jf, 2, 0, "div", 3), n.ALo(4, "async"), n.YNc(5, Rm, 2, 3, "ng-template", null, 4, n.W1O), n.qZA()), 2 & k) {
        const Ye = n.MAs(6);
        n.xp6(3), n.Q6J("ngIf", n.lcZ(4, 2, ce.isLoading$))("ngIfElse", Ye);
      }
    },
    dependencies: [Di.O5, Di.PC, qr.d, z, ml, Ep, Di.Ov],
    styles: ["@media (max-width: 960px){[_nghost-%COMP%]{display:block;height:calc(100% - 56px)}}@media (max-width: 960px){.issuing-medicines-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}}@media (max-width: 960px){.issuing-medicines-content[_ngcontent-%COMP%]{height:100%}}"],
    changeDetection: 0
  }), Yh);
  vf = (0, Se.gn)([(0, Xn.c)()], vf);
  var Ug = i(71884),
    cg = i(18200),
    Qf = i(24676),
    x_ = i(28369);
  const sp = ["panelRef"];
  function Fm(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 12), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.Oqu(k.count);
    }
  }
  const ap = function (Te) {
    return {
      "chip--active": Te
    };
  };
  function b_(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 10), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        return n.KtG(ai.onStatusToggle(Tt.value));
      }), n._uU(1), n.YNc(2, Fm, 2, 1, "span", 11), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      n.Q6J("ngClass", n.VKq(3, ap, ce.isStatusSelected(k.value))), n.xp6(1), n.hij(" ", k.label, " "), n.xp6(1), n.Q6J("ngIf", void 0 !== k.count);
    }
  }
  function Hg(Te, $) {
    if (1 & Te && (n.TgZ(0, "lu-chip", 13)(1, "span", 14), n._uU(2), n.qZA()()), 2 & Te) {
      const k = $.$implicit;
      n.Q6J("value", k.value), n.xp6(2), n.Oqu(k.label);
    }
  }
  function Cf(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 3), n._UZ(2, "lu-calendar-stepper", 4), n.TgZ(3, "div", 5), n.YNc(4, b_, 3, 5, "button", 6), n.qZA()(), n.TgZ(5, "div", 7)(6, "lu-chips-group", 8), n.YNc(7, Hg, 3, 2, "lu-chip", 9), n.qZA()(), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(4), n.Q6J("ngForOf", k.statusOptions)("ngForTrackBy", k.trackByOptionValue), n.xp6(3), n.Q6J("ngForOf", k.periodOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  function Kp(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(3);
      n.xp6(1), n.Oqu(k.statusSelectedCount);
    }
  }
  function lp(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 12), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.Oqu(k.count);
    }
  }
  function $d(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "lu-option", 25), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit;
        n.oxw(2);
        const ai = n.MAs(7),
          Zi = n.oxw(2);
        return n.KtG(Zi.onStatusToggle(Tt.value, ai));
      }), n.TgZ(2, "span"), n._uU(3), n.qZA(), n.YNc(4, lp, 2, 1, "span", 11), n.qZA(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(4);
      n.xp6(1), n.ekj("selected", ce.isStatusSelected(k.value)), n.Q6J("value", k.label), n.xp6(2), n.Oqu(k.label), n.xp6(1), n.Q6J("ngIf", void 0 !== k.count);
    }
  }
  function Dp(Te, $) {
    if (1 & Te && n.YNc(0, $d, 5, 5, "ng-container", 24), 2 & Te) {
      const k = n.oxw(3);
      n.Q6J("ngForOf", k.statusOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  const Sd = function () {
    return ["mob-dropdown", "mob-dropdown-w245"];
  };
  function Xf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 18, 19), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(7);
        return n.KtG(Ye.toggle());
      }), n.TgZ(2, "span"), n._uU(3), n.qZA(), n.YNc(4, Kp, 2, 1, "span", 2), n._UZ(5, "lu-svg-icon", 20), n.TgZ(6, "lu-dropdown", 21, 22), n.YNc(8, Dp, 1, 2, "ng-template", null, 23, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(7),
        ce = n.MAs(9),
        Ye = n.oxw(2);
      n.xp6(3), n.Oqu(Ye.statusSelectedLabel), n.xp6(1), n.Q6J("ngIf", void 0 !== Ye.statusSelectedCount), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("panelClass", n.DdM(7, Sd))("content", ce)("positions", "bottom-left");
    }
  }
  function w_(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-option", 25), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(4);
        return n.KtG(ai.periodControl.setValue(Tt.value));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(4);
      n.ekj("selected", ce.periodControl.value === k.value), n.s9C("value", k.value), n.xp6(1), n.hij(" ", k.label, " ");
    }
  }
  function I0(Te, $) {
    if (1 & Te && n.YNc(0, w_, 2, 4, "lu-option", 29), 2 & Te) {
      const k = n.oxw(3);
      n.Q6J("ngForOf", k.periodOptions)("ngForTrackBy", k.trackByOptionValue);
    }
  }
  function L0(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "button", 18, 19), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.MAs(6);
        return n.KtG(Ye.toggle());
      }), n.TgZ(2, "span"), n._uU(3), n.qZA(), n._UZ(4, "lu-svg-icon", 20), n.TgZ(5, "lu-dropdown", 26, 27), n.YNc(7, I0, 1, 2, "ng-template", null, 28, n.W1O), n.qZA()();
    }
    if (2 & Te) {
      const k = n.MAs(6),
        ce = n.MAs(8),
        Ye = n.oxw(2);
      n.xp6(3), n.Oqu(Ye.getPeriodLabel(Ye.periodControl.value)), n.xp6(1), n.Q6J("size", 16)("luChevronRotate", k), n.xp6(1), n.Q6J("closeIfInnerClick", !0)("panelClass", "mob-dropdown")("content", ce)("withArrow", !1);
    }
  }
  function Bg(Te, $) {
    if (1 & Te && (n.ynx(0), n._UZ(1, "lu-calendar-stepper", 15), n.YNc(2, Xf, 10, 8, "button", 16), n.YNc(3, L0, 9, 7, "button", 17), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(2), n.Q6J("ngIf", k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet);
    }
  }
  let qf = ((Nd = class {
    constructor($, k, ce) {
      this.store = $, this.breakpointObserver = k, this.cdr = ce, this.filtersChanged = new n.vpe(), this.dateChanged = new n.vpe(), this.heightChanged = new n.vpe(), this.isTablet = !1, this.statusSelectedLabel = "Все", this.statusSelectedCount = 0, this.statusOptions = [{
        value: "all",
        label: "Все",
        count: 0
      }, {
        value: "active",
        label: "Активные",
        count: 0
      }, {
        value: "missed",
        label: "Пропущенные выдачи",
        count: 0
      }, {
        value: "completed",
        label: "Завершенные",
        count: 0
      }], this.periodOptions = [{
        value: "all",
        label: "Все"
      }, {
        value: "MORNING",
        label: "Утро"
      }, {
        value: "DAY",
        label: "День"
      }, {
        value: "EVENING",
        label: "Вечер"
      }, {
        value: "NIGHT",
        label: "Ночь"
      }], this.groupingOptions = [{
        value: "byPatient",
        label: "По пациентам"
      }, {
        value: "byMedicament",
        label: "По медикаментам"
      }], this.filtersForm = new vr.cw({
        date: new vr.NI(new Date()),
        status: new vr.NI("all"),
        grouping: new vr.NI("byPatient"),
        sorting: new vr.NI("byTimeOfDay"),
        period: new vr.NI("all"),
        searchQuery: new vr.NI("")
      }), this.statusCounts$ = this.store.select(Mn), this.selectedDate$ = this.store.select(Ee);
    }
    ngOnInit() {
      this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => {
        this.isTablet = $.matches, this.periodOptions[0].label = this.isTablet ? "Все времена суток" : "Все", this.cdr.markForCheck();
      }), this.selectedDate$.pipe((0, Xn.t)(this)).subscribe($ => {
        $ && this.filtersForm.get("date")?.value?.getTime() !== $.getTime() && this.filtersForm.patchValue({
          date: $
        }, {
          emitEvent: !1
        });
      }), this.statusCounts$.pipe((0, Xn.t)(this)).subscribe($ => {
        this.statusOptions = [{
          value: "all",
          label: "Все",
          count: $.all
        }, {
          value: "active",
          label: "Активные",
          count: $.active
        }, {
          value: "missed",
          label: "Пропущенные выдачи",
          count: $.missed
        }, {
          value: "completed",
          label: "Завершенные",
          count: $.completed
        }], this.updateSelectedStatusLabel(), this.cdr.markForCheck();
      }), this.filtersForm.get("date")?.valueChanges.pipe((0, Xn.t)(this), (0, Ug.x)(($, k) => $?.getTime() === k?.getTime())).subscribe($ => {
        $ && this.dateChanged.emit($);
      }), this.filtersForm.valueChanges.pipe((0, Xn.t)(this)).subscribe($ => {
        this.filtersChanged.emit({
          status: [$.status || "all"],
          grouping: $.grouping,
          sorting: $.sorting,
          period: $.period,
          searchQuery: $.searchQuery || ""
        }), setTimeout(() => {
          this.heightChanged.emit(this.getHeight());
        }), this.updateSelectedStatusLabel(), this.cdr.markForCheck();
      });
    }
    get periodControl() {
      return this.filtersForm.get("period");
    }
    getHeight() {
      return this.panelRef.nativeElement.clientHeight;
    }
    trackByOptionValue($, k) {
      return k.value;
    }
    isStatusSelected($) {
      return this.filtersForm.value.status === $;
    }
    onStatusToggle($, k) {
      this.filtersForm.patchValue({
        status: $
      }), k && k.close();
    }
    getPeriodLabel($) {
      if (!$) return "";
      const k = this.periodOptions.find(ce => ce.value === $);
      return k ? k.label : $;
    }
    updateSelectedStatusLabel() {
      const $ = this.filtersForm.value.status || "all",
        k = this.statusOptions.find(ce => ce.value === $);
      k && (this.statusSelectedCount = k.count, this.statusSelectedLabel = k.label);
    }
  }).ɵfac = function (k) {
    return new (k || Nd)(n.Y36(t.yh), n.Y36(Gn.Yg), n.Y36(n.sBO));
  }, Nd.ɵcmp = n.Xpm({
    type: Nd,
    selectors: [["app-preparing-filters"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(sp, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.panelRef = Ye.first);
      }
    },
    outputs: {
      filtersChanged: "filtersChanged",
      dateChanged: "dateChanged",
      heightChanged: "heightChanged"
    },
    decls: 4,
    vars: 3,
    consts: [[1, "filters-toolbar", 3, "formGroup"], ["panelRef", ""], [4, "ngIf"], [1, "filters-left"], ["formControlName", "date", 1, "form__group--date__extra"], [1, "status-group"], ["type", "button", "class", "chip", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filters-right"], ["formControlName", "period", "luChipsGroupType", "radio", 1, "filter-group", "period-group"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "chip", 3, "ngClass", "click"], ["class", "chip__count", 4, "ngIf"], [1, "chip__count"], [3, "value"], ["lu-text", ""], ["formControlName", "date", 1, "mob-calendar-stepper"], ["lu-button-raised", "", "class", "mob-dropdown-btn", "luDropdownOrigin", "", 3, "click", 4, "ngIf"], ["lu-button-raised", "", "luDropdownOrigin", "", "class", "mob-dropdown-btn", 3, "click", 4, "ngIf"], ["lu-button-raised", "", "luDropdownOrigin", "", 1, "mob-dropdown-btn", 3, "click"], ["origin", "luDropdownOrigin"], ["icon", "chevron-down", "luButtonPostfix", "", 3, "size", "luChevronRotate"], [3, "panelClass", "content", "positions"], ["dropdownStatus", ""], ["contentStatus", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value", "click"], ["positions", "bottom-right", "minWidth", "188px", 3, "closeIfInnerClick", "panelClass", "content", "withArrow"], ["dropdownPeriod", ""], ["content", ""], [3, "selected", "value", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0, 1), n.YNc(2, Cf, 8, 4, "ng-container", 2), n.YNc(3, Bg, 4, 2, "ng-container", 2), n.qZA()), 2 & k && (n.Q6J("formGroup", ce.filtersForm), n.xp6(2), n.Q6J("ngIf", !ce.isTablet), n.xp6(1), n.Q6J("ngIf", ce.isTablet));
    },
    dependencies: [Di.mk, Di.sg, Di.O5, vr.JJ, vr.JL, vr.sg, vr.u, Ks.mc, Ks.zY, cg.r, Qf.P, x_.b, _r.$, lf.k, Ci.q, Kt.NZ, js.n, Up.c, Yu.I],
    styles: ["@charset \"UTF-8\";.filters-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:16px;padding:16px;background-color:#fff}@media (min-width: 600px) and (max-width: 960px){.filters-toolbar[_ngcontent-%COMP%]{padding:12px 16px}}@media (min-width: 961px){.filters-toolbar[_ngcontent-%COMP%]{justify-content:space-between;padding:12px 24px}}.filters-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.filters-right[_ngcontent-%COMP%]{display:flex;align-items:center}.filters-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}  .filters-right .filter-group{display:flex!important;flex-direction:row!important;align-items:center!important;gap:8px!important}  lu-chips-group{display:flex!important;flex-direction:row!important;flex-wrap:wrap;align-items:center}.status-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.chip[_ngcontent-%COMP%], .chip--active[_ngcontent-%COMP%]{background:rgba(56,161,214,.1019607843);border:none;border-radius:15px;padding:0 12px;min-width:76px;max-width:260px;height:32px;color:#333;font-size:15px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:font-size .16s,min-width .16s;white-space:normal;word-break:break-word;text-align:center}.chip--active[_ngcontent-%COMP%]{background:#ffe766;color:#623700;box-shadow:0 2px 22px #fffacc72}.period-group[_ngcontent-%COMP%]{gap:9px}lu-chip[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{color:#8f8f8f;margin-left:8px}lu-chip[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{display:flex;align-items:center}.mob-dropdown-btn[_ngcontent-%COMP%]{padding:0}.mob-dropdown-btn[lu-button-link][_ngcontent-%COMP%]     .lu-button-wrapper{padding-top:4px;padding-bottom:4px}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper{justify-content:flex-start;padding-left:4px!important;padding-right:4px!important;border:0;border-radius:16px;font-weight:400;color:#333;background-color:#38a1d61a;transition:background-color .2s ease;--lu-svg-icon-color: #757575 !important}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text{display:flex;gap:8px;margin-right:4px;font-size:15px}@media (max-width: 960px){.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text{margin-right:5px}}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text span:not(:first-child){color:#757575}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text+.lu-button-content{margin-left:auto}.mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper:hover:not([data-lu-disabled=true]){background-color:#38a1d633!important}[_ngcontent-%COMP%]:has(lu-svg-icon[style*=\"rotateZ(180deg)\"])   .mob-dropdown-btn[_ngcontent-%COMP%]     .lu-button-wrapper:hover{background-color:#38a1d64d!important}.mob-dropdown-btn[_ngcontent-%COMP%]:has(lu-svg-icon[style*=\"rotateZ(180deg)\"])     .lu-button-wrapper{background-color:#38a1d64d!important}  .cdk-overlay-connected-position-bounding-box:has(.mob-dropdown-w245) .cdk-overlay-pane{width:245px!important}.mob-calendar-stepper[_ngcontent-%COMP%]{z-index:0}.mob-calendar-stepper[_ngcontent-%COMP%]     lu-calendar-field-host{--lu-input-width: 220px}.mob-calendar-stepper[_ngcontent-%COMP%]     .lu-button-icon lu-svg-icon svg{transform:scale(.67)!important;transform-origin:center!important}  .mob-dropdown lu-option:before{content:none!important}  .mob-dropdown lu-option:hover{background-color:#38a1d633!important}  .mob-dropdown lu-option.selected{background:#d7ecf7}  .mob-dropdown [data-lu-selected=true]{background:transparent!important}.chip__count[_ngcontent-%COMP%]{white-space:normal;word-break:break-word;text-align:center;overflow:visible;margin-left:8px;color:#757575}"]
  }), Nd);
  qf = (0, Se.gn)([(0, Xn.c)()], qf);
  const Vg = ["loadTrigger"];
  function jg(Te, $) {
    1 & Te && n._UZ(0, "lu-preloader");
  }
  const Wh = class {
    constructor() {
      this.onEndReached = ($, k) => {}, this.listItems = [], this.isLoading = !1, this.hasMore = !0;
    }
    ngAfterViewInit() {
      this.observer = new IntersectionObserver($ => {
        $.forEach(k => {
          k.isIntersecting && !this.isLoading && this.hasMore && this.onEndReached();
        });
      }, {
        threshold: .5
      }), this.observer.observe(this.loadTrigger.nativeElement);
    }
    ngOnDestroy() {
      this.observer && this.observer.disconnect();
    }
  };
  let yf = Wh;
  function ug(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 9), n._uU(2), n.qZA(), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(2), n.Oqu(k.periodLabel);
    }
  }
  function xf(Te, $) {
    1 & Te && (n.ynx(0), n.TgZ(1, "div", 9), n._uU(2, "Утро"), n.qZA(), n.TgZ(3, "div", 9), n._uU(4, "День"), n.qZA(), n.TgZ(5, "div", 9), n._uU(6, "Вечер"), n.qZA(), n.TgZ(7, "div", 9), n._uU(8, "Ночь"), n.qZA(), n.BQk());
  }
  function p(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 11)(2, "div", 12), n._uU(3), n.qZA(), n.TgZ(4, "div", 13), n._uU(5), n.qZA(), n.TgZ(6, "div", 13), n._uU(7), n.qZA(), n.TgZ(8, "div", 13), n._uU(9), n.qZA(), n.TgZ(10, "div", 14), n._uU(11), n.TgZ(12, "button", 15), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(2).openLabelModal(ai), n.KtG(Ye.stopPropagation());
      }), n._UZ(13, "lu-svg-icon", 16), n.qZA()(), n.TgZ(14, "div", 17)(15, "time-slots", 18), n.NdJ("action", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw(2);
        return n.KtG(Zi.onSlotAction(ai, Ye));
      }), n.qZA()()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      let Ye, Tt;
      n.xp6(1), n.uIk("data-pillbox-number", null !== (Ye = null == k || null == k.pillbox ? null : k.pillbox.number) && void 0 !== Ye ? Ye : "-"), n.xp6(2), n.hij(" ", k.patientName, " "), n.xp6(2), n.hij(" ", k.historyNumber, " "), n.xp6(2), n.hij(" ", k.paymentType, " "), n.xp6(2), n.hij(" ", k.ward, " "), n.xp6(2), n.hij(" ", null !== (Tt = null == k || null == k.pillbox ? null : k.pillbox.number) && void 0 !== Tt ? Tt : "-", " "), n.xp6(2), n.Q6J("size", 16), n.xp6(2), n.Q6J("mode", "preparation")("slots", k.slots)("pillboxMarks", null == k.pillbox ? null : k.pillbox.pillboxMarks)("filterPeriod", ce.selectedPeriod);
    }
  }
  function r(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, p, 16, 11, "ng-container", 10), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.visibleTasks)("ngForTrackBy", k.trackByTask);
    }
  }
  function l(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 24)(1, "div", 12), n._uU(2), n.qZA(), n.TgZ(3, "div", 13), n._uU(4), n.qZA(), n.TgZ(5, "div", 13), n._uU(6), n.qZA(), n.TgZ(7, "div", 13), n._uU(8), n.qZA(), n.TgZ(9, "div", 25), n._uU(10), n.TgZ(11, "button", 26), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit;
        return n.oxw(4).openLabelModal(ai), n.KtG(Ye.stopPropagation());
      }), n._UZ(12, "lu-svg-icon", 16), n.qZA()(), n.TgZ(13, "div", 17)(14, "time-slots", 27), n.NdJ("action", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw(4);
        return n.KtG(Zi.onSlotAction(ai, Ye));
      }), n.qZA()()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(4);
      let Ye, Tt;
      n.uIk("data-pillbox-number", null !== (Ye = null == k || null == k.pillbox ? null : k.pillbox.number) && void 0 !== Ye ? Ye : "-"), n.xp6(2), n.hij(" ", k.patientName, " "), n.xp6(2), n.hij(" ", k.historyNumber, " "), n.xp6(2), n.hij(" ", k.paymentType, " "), n.xp6(2), n.hij(" ", k.ward, " "), n.xp6(2), n.hij(" ", null !== (Tt = null == k || null == k.pillbox ? null : k.pillbox.number) && void 0 !== Tt ? Tt : "-", " "), n.xp6(2), n.Q6J("size", 16), n.xp6(2), n.Q6J("slots", k.slots)("pillboxMarks", null == k.pillbox ? null : k.pillbox.pillboxMarks)("mode", "preparation")("filterPeriod", ce.selectedPeriod);
    }
  }
  function g(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, l, 15, 11, "div", 23), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw(2);
      n.xp6(1), n.Q6J("ngForOf", k.tasks)("ngForTrackBy", ce.trackByTask);
    }
  }
  function S(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 19), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw(2);
        return n.KtG(ai.toggleGroup(Tt.groupKey));
      }), n._UZ(2, "lu-svg-icon", 20), n.TgZ(3, "span", 21), n._uU(4), n.qZA(), n.TgZ(5, "span", 22), n._uU(6), n.qZA()(), n.YNc(7, g, 2, 2, "ng-container", 8), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(2);
      n.xp6(2), n.ekj("rotated", ce.isGroupExpanded(k.groupKey)), n.Q6J("size", 16), n.xp6(2), n.Oqu(k.groupLabel), n.xp6(2), n.hij("(", k.tasks.length, ")"), n.xp6(1), n.Q6J("ngIf", ce.isGroupExpanded(k.groupKey));
    }
  }
  function H(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, S, 8, 6, "ng-container", 10), n.BQk()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.groupedTasks)("ngForTrackBy", k.trackByGroup);
    }
  }
  Wh.ɵfac = function (k) {
    return new (k || Wh)();
  }, Wh.ɵcmp = n.Xpm({
    type: Wh,
    selectors: [["infinity-scroll-container"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(Vg, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.loadTrigger = Ye.first);
      }
    },
    inputs: {
      onEndReached: "onEndReached",
      listItems: "listItems",
      isLoading: "isLoading",
      hasMore: "hasMore"
    },
    ngContentSelectors: ["*"],
    decls: 5,
    vars: 1,
    consts: [[1, "infinity-scroll"], ["loadTrigger", ""], [4, "ngIf"]],
    template: function (k, ce) {
      1 & k && (n.F$t(), n.TgZ(0, "div", 0), n.Hsn(1), n._UZ(2, "div", null, 1), n.YNc(4, jg, 1, 0, "lu-preloader", 2), n.qZA()), 2 & k && (n.xp6(4), n.Q6J("ngIf", ce.isLoading));
    },
    dependencies: [Di.O5, qr.d],
    styles: [".infinity-scroll[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden}"]
  });
  let ie = ((Rf = class {
    get timeColumnWidthCss() {
      return this.periodLabel ? "126px" : "362px";
    }
    constructor($, k, ce) {
      this.viewContainerRef = $, this.modalHelper = k, this.pillboxService = ce, this.tasks = null, this.groupedTasks = null, this.groupingMode = "byPatient", this.timeHeaderMode = "periods", this.hourlyHeaders = [], this.selectedPeriod = null, this.slotAction = new n.vpe(), this.cdr = (0, n.f3M)(n.sBO), this.loadingFlag = !1, this.hasMoreData = !0, this.visibleTasks = [], this.expandedGroups = {}, this.onLoadMoreTasks = () => {
        if (!this.tasks || this.loadingFlag) return;
        const Ye = this.visibleTasks.length;
        if (Ye >= this.tasks.length) return void (this.hasMoreData = !1);
        this.loadingFlag = !0;
        const Tt = this.tasks.slice(Ye, Ye + 15);
        this.visibleTasks = [...this.visibleTasks, ...Tt], this.hasMoreData = this.visibleTasks.length < this.tasks.length, this.loadingFlag = !1, this.cdr.markForCheck();
      }, this.heightChanged$ = (0, De.R)(window, "resize").pipe((0, rt.O)(window.innerWidth), (0, Yd.b)(200), (0, q.U)(() => ({
        height: window.innerWidth > 1250 ? "calc(100vh - 220px)" : "calc(100vh - 270px)"
      })));
    }
    ngOnChanges($) {
      (0, ri.up)($.tasks) && (this.visibleTasks = [], this.onLoadMoreTasks(), this.reloadVisibleTaskStatus());
    }
    get periodLabel() {
      const $ = this.normalizePeriod(this.selectedPeriod);
      return $ && "ALL" !== $.toUpperCase() ? {
        MORNING: "Утро",
        DAY: "День",
        EVENING: "Вечер",
        NIGHT: "Ночь"
      }[$.toUpperCase()] ?? null : null;
    }
    toggleGroup($) {
      this.expandedGroups[$] = !this.expandedGroups[$];
    }
    isGroupExpanded($) {
      return !1 !== this.expandedGroups[$];
    }
    onSlotAction($, k) {
      "issue" === k.action ? this.openPillboxIssueModal($, k.slot) : this.slotAction.emit({
        task: $,
        slot: k.slot,
        action: k.action
      });
    }
    openPillboxIssueModal($, k) {
      this.pillboxService.createPillboxModalData($, k).pipe((0, Xn.t)(this), (0, ut.w)(ce => this.modalHelper.openPillboxIssueDialog(ce, this.viewContainerRef))).subscribe(ce => {
        this.slotAction.emit({
          task: $,
          slot: k,
          action: "issued"
        });
      });
    }
    openLabelModal($) {
      this.modalHelper.openLabelPrintDialog({
        barcode: String($?.pillbox?.number),
        careCaseId: $?.careCaseId,
        fio: $.patientName,
        card: $.historyNumber,
        room: $.ward
      }, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
    }
    trackByGroup($, k) {
      return k.groupKey;
    }
    trackByTask($, k) {
      return k.id;
    }
    reloadVisibleTaskStatus() {
      this.visibleTasks = this.visibleTasks.map($ => {
        const k = this.tasks.find(ce => ce.id === $.id)?.slots;
        return {
          ...$,
          slots: k
        };
      }), this.cdr.markForCheck();
    }
    normalizePeriod($) {
      if (null == $) return null;
      if ("string" == typeof $) return $;
      if (Array.isArray($) && $.length > 0) return "string" == typeof $[0] ? $[0] : null;
      if ("object" == typeof $ && $ && "value" in $) {
        const k = $.value;
        return "string" == typeof k ? k : null;
      }
      return null;
    }
  }).ɵfac = function (k) {
    return new (k || Rf)(n.Y36(n.s_b), n.Y36(Ya), n.Y36(Hr));
  }, Rf.ɵcmp = n.Xpm({
    type: Rf,
    selectors: [["app-preparing-table"]],
    hostVars: 2,
    hostBindings: function (k, ce) {
      2 & k && n.Udp("--time-column-width", ce.timeColumnWidthCss);
    },
    inputs: {
      tasks: "tasks",
      groupedTasks: "groupedTasks",
      groupingMode: "groupingMode",
      timeHeaderMode: "timeHeaderMode",
      hourlyHeaders: "hourlyHeaders",
      selectedPeriod: "selectedPeriod"
    },
    outputs: {
      slotAction: "slotAction"
    },
    features: [n.TTD],
    decls: 22,
    vars: 11,
    consts: [[1, "preparing-medications"], [1, "preparing-medications__grid"], [1, "preparing-medications__table", 3, "ngStyle"], [3, "onEndReached", "listItems", "isLoading", "hasMore"], [1, "preparing-medications__header"], [1, "preparing-medications__header-cell"], [1, "preparing-medications__header-cell", "preparing-medications__header-cell--time-slots", "preparing-medications__header-cell--fixed-right"], [1, "preparing-medications__time-periods"], [4, "ngIf"], [1, "preparing-medications__time-period-item"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "preparing-medications__row"], [1, "preparing-medications__cell", "preparing-medications__cell--name"], [1, "preparing-medications__cell"], [1, "preparing-medications__cell", "preparing-medications__cell--pillbox", "preparing-medications__label-modal"], ["lu-button-icon", "", 2, "margin-right", "28px", 3, "click"], ["icon", "bar", 3, "size"], [1, "preparing-medications__cell", "preparing-medications__cell--time-slots", "preparing-medications__cell--fixed-right"], [1, "preparing-medications__time-slots", 3, "mode", "slots", "pillboxMarks", "filterPeriod", "action"], [1, "preparing-medications__group-header", 3, "click"], ["icon", "chevron-right", 3, "size"], [1, "preparing-medications__group-label"], [1, "preparing-medications__group-count"], ["class", "preparing-medications__row preparing-medications__row--grouped", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "preparing-medications__row", "preparing-medications__row--grouped"], [1, "preparing-medications__cell", "preparing-medications__cell--pillbox"], ["lu-button-icon", "", 3, "click"], [1, "preparing-medications__time-slots", 3, "slots", "pillboxMarks", "mode", "filterPeriod", "action"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), n.ALo(3, "async"), n.TgZ(4, "infinity-scroll-container", 3)(5, "div", 4)(6, "div", 5), n._uU(7, "ФИО"), n.qZA(), n.TgZ(8, "div", 5), n._uU(9, "Номер ИБ"), n.qZA(), n.TgZ(10, "div", 5), n._uU(11, "Оплата"), n.qZA(), n.TgZ(12, "div", 5), n._uU(13, "Палата"), n.qZA(), n.TgZ(14, "div", 5), n._uU(15, "Номер таблетницы"), n.qZA(), n.TgZ(16, "div", 6)(17, "div", 7), n.YNc(18, ug, 3, 1, "ng-container", 8), n.YNc(19, xf, 9, 0, "ng-container", 8), n.qZA()()(), n.YNc(20, r, 2, 2, "ng-container", 8), n.YNc(21, H, 2, 2, "ng-container", 8), n.qZA()()()()), 2 & k && (n.xp6(2), n.Q6J("ngStyle", n.lcZ(3, 9, ce.heightChanged$)), n.xp6(2), n.Q6J("onEndReached", ce.onLoadMoreTasks)("listItems", ce.visibleTasks)("isLoading", ce.loadingFlag)("hasMore", ce.hasMoreData), n.xp6(14), n.Q6J("ngIf", ce.periodLabel), n.xp6(1), n.Q6J("ngIf", !ce.periodLabel), n.xp6(1), n.Q6J("ngIf", "byPatient" === ce.groupingMode), n.xp6(1), n.Q6J("ngIf", "byMedicament" === ce.groupingMode && (null == ce.groupedTasks ? null : ce.groupedTasks.length)));
    },
    dependencies: [Di.sg, Di.O5, Di.PC, Ro.k, Ci.q, yf, Wu, Di.Ov],
    styles: ["[_nghost-%COMP%]{display:block;--preparing-medications-text-primary: #2d3748;--preparing-medications-text-muted: #718096;--preparing-medications-border-light: #e2e8f0;--preparing-medications-border-dark: #cbd5e0;--preparing-medications-row-hover-bg: #ECF6FB;--preparing-medications-cell-h-padding: 14px;--preparing-medications-row-height: 47px;--preparing-medications-header-height: 40px;--preparing-medications-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;--grid-template-columns: 324px 120px 140px 164px minmax(100px, 668px) var(--time-column-width, 352px)}[_nghost-%COMP%]     .infinity-scroll{height:auto!important;max-height:none!important;overflow:visible!important}.preparing-medications[_ngcontent-%COMP%]{font-family:var(--preparing-medications-font-family);font-size:13px;color:var(--preparing-medications-text-primary)}.preparing-medications__grid[_ngcontent-%COMP%]{position:relative}.preparing-medications__table[_ngcontent-%COMP%]{height:calc(100vh - 220px);overflow:auto}.preparing-medications__header[_ngcontent-%COMP%], .preparing-medications__row[_ngcontent-%COMP%]{display:grid;gap:24px;grid-template-columns:var(--grid-template-columns)}.preparing-medications__header[_ngcontent-%COMP%]{height:var(--preparing-medications-header-height);background-color:#fff;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014;position:sticky;top:0;margin-bottom:8px;z-index:2}.preparing-medications[_ngcontent-%COMP%]   .preparing-medications__header-cell[_ngcontent-%COMP%]:first-child{margin-left:24px;display:flex;align-items:center;padding:0}.preparing-medications__header-cell[_ngcontent-%COMP%]{font-size:13px;font-weight:400;line-height:20px;color:var(--preparing-medications-text-muted);display:flex;align-items:center;white-space:nowrap}.preparing-medications__header-cell--time-slots[_ngcontent-%COMP%]{overflow:visible;padding:0 24px}.preparing-medications__header-cell--fixed-right[_ngcontent-%COMP%]{position:sticky;right:0;height:40px;max-width:var(--time-column-width, 362px);z-index:1;background:inherit;display:flex;padding:0 24px}.preparing-medications__header-cell--fixed-right[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:0;width:0;height:100vh;border-left:2px dashed #CCCCCC;pointer-events:none;z-index:500}.preparing-medications__row[_ngcontent-%COMP%]{min-height:var(--preparing-medications-row-height);background-color:#fff;position:relative;z-index:1;transition:background-color .3s ease,box-shadow .3s ease}.preparing-medications__row[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:24px;right:0;bottom:0;height:1px;background-color:var(--preparing-medications-border-light);pointer-events:none}.preparing-medications__row[_ngcontent-%COMP%]:hover{background-color:var(--preparing-medications-row-hover-bg);z-index:1}.preparing-medications__row--grouped[_ngcontent-%COMP%]   .preparing-medications__cell[_ngcontent-%COMP%]:first-child{padding-left:48px}.preparing-medications__row--highlighted[_ngcontent-%COMP%]{background-color:#e8f5e9!important;box-shadow:0 0 0 2px #4caf50 inset;animation:_ngcontent-%COMP%_highlight-pulse 1s ease-in-out 3}.preparing-medications__row--highlighted[_ngcontent-%COMP%]   .preparing-medications__cell--pillbox[_ngcontent-%COMP%]   button[lu-button-icon][_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.preparing-medications__row.is-new[_ngcontent-%COMP%]{background-color:#fff8cc}@keyframes _ngcontent-%COMP%_highlight-pulse{0%,to{background-color:#e8f5e9}50%{background-color:#c8e6c9}}.preparing-medications__group-header[_ngcontent-%COMP%]{grid-column:1/-1;display:flex;align-items:center;gap:8px;padding:12px 24px;background-color:#f9fafb;border-bottom:1px solid var(--preparing-medications-border-light);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color .15s}.preparing-medications__group-header[_ngcontent-%COMP%]:hover{background-color:#f3f4f6}.preparing-medications__group-header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{transition:transform .2s ease;color:#6b7280}.preparing-medications__group-header[_ngcontent-%COMP%]   lu-svg-icon.rotated[_ngcontent-%COMP%]{transform:rotate(90deg)}.preparing-medications__cell[_ngcontent-%COMP%]{display:grid;gap:24px;grid-template-columns:var(--grid-template-columns);align-items:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.preparing-medications__cell--name[_ngcontent-%COMP%]{padding-left:24px}.preparing-medications__cell--pillbox[_ngcontent-%COMP%]   button[lu-button-icon][_ngcontent-%COMP%]{opacity:0;pointer-events:none;margin-left:auto;transition:opacity .18s;min-width:32px;min-height:32px;border-radius:8px;background:transparent;box-shadow:none;z-index:1}.preparing-medications__cell--time-slots[_ngcontent-%COMP%]{overflow:visible;padding:0}.preparing-medications__cell--fixed-right[_ngcontent-%COMP%]{border-bottom:1px solid var(--preparing-medications-border-light);position:sticky;padding-right:24px;right:0;min-width:var(--time-column-width, 362px);z-index:1;background:inherit;display:flex;align-items:flex-start}.preparing-medications__row[_ngcontent-%COMP%]:hover   .preparing-medications__cell--pillbox[_ngcontent-%COMP%]   button[lu-button-icon][_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.preparing-medications__time-periods[_ngcontent-%COMP%]{width:100%;text-align:center;gap:49px;display:flex;margin-left:-2px}.preparing-medications__time-period-item[_ngcontent-%COMP%]{text-align:center;color:var(--preparing-medications-text-muted);font-weight:400;font-size:13px}.preparing-medications__group-label[_ngcontent-%COMP%]{font-weight:600;font-size:14px;color:#111827}.preparing-medications__group-count[_ngcontent-%COMP%]{font-size:13px;color:#6b7280}.preparing-medications__time-slots[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:flex-start}.preparing-medications__label-modal[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}"],
    changeDetection: 0
  }), Rf);
  function de(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(1), n.Oqu(k.periodLabel);
    }
  }
  function Oe(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "span"), n._uU(2), n.qZA(), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      n.xp6(2), n.Oqu(ce.getPeriodLabel(k.period));
    }
  }
  function Xe(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Oe, 3, 1, "ng-container", 16), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", ce.getUniquePeriods(k.slots));
    }
  }
  function wt(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "lu-expansion-panel", 3)(1, "lu-expansion-panel-header", 4)(2, "span", 5)(3, "span", 6), n._UZ(4, "span", 7), n.ALo(5, "highlight"), n.TgZ(6, "span", 8)(7, "span"), n._uU(8, "Номер таблетницы: "), n.qZA(), n.TgZ(9, "span"), n._uU(10), n.qZA()()(), n.TgZ(11, "span", 9), n._uU(12), n._UZ(13, "span", 10), n._uU(14), n.qZA()()(), n.TgZ(15, "div", 11)(16, "div", 12)(17, "div", 13), n.YNc(18, de, 2, 1, "span", 14), n.YNc(19, Xe, 2, 1, "ng-container", 14), n.qZA(), n.TgZ(20, "time-slots", 15), n.NdJ("action", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw();
        return n.KtG(Zi.onSlotAction(ai, Ye));
      }), n.qZA()()()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw();
      let Ye;
      n.xp6(1), n.Q6J("withArrow", !0), n.xp6(3), n.Q6J("innerHTML", n.xi3(5, 11, k.patientName, ce.searchQuery), n.oJD), n.xp6(6), n.Oqu(null !== (Ye = null == k || null == k.pillbox ? null : k.pillbox.number) && void 0 !== Ye ? Ye : "-"), n.xp6(2), n.hij(" ", k.ward, " "), n.xp6(2), n.hij(" ", k.paymentType, " "), n.xp6(4), n.Q6J("ngIf", "all" !== ce.selectedPeriod), n.xp6(1), n.Q6J("ngIf", "all" === ce.selectedPeriod), n.xp6(1), n.Q6J("slots", k.slots)("mode", "preparation")("pillboxMarks", null == k.pillbox ? null : k.pillbox.pillboxMarks)("filterPeriod", ce.selectedPeriod);
    }
  }
  ie = (0, Se.gn)([(0, Xn.c)()], ie);
  let Lt = ((Ud = class {
    constructor($, k, ce) {
      this.viewContainerRef = $, this.modalHelper = k, this.pillboxService = ce, this.tasks = null, this.selectedPeriod = null, this.searchQuery = null, this.slotAction = new n.vpe(), this.periodObj = {
        morning: "Утро",
        day: "День",
        evening: "Вечер",
        night: "Ночь"
      }, this.PERIOD_ORDER = ["MORNING", "DAY", "EVENING", "NIGHT"];
    }
    get periodLabel() {
      return this.selectedPeriod && "all" !== this.selectedPeriod ? this.periodObj[this.selectedPeriod.toLowerCase()] ?? null : null;
    }
    getPeriodLabel($) {
      return $ ? this.periodObj[$.toLowerCase()] : "";
    }
    getUniquePeriods($) {
      return (0, Io.uniqBy)($, "period").sort((k, ce) => this.PERIOD_ORDER.indexOf(k.period) - this.PERIOD_ORDER.indexOf(ce.period));
    }
    onSlotAction($, k) {
      "issue" === k.action ? this.openPillboxIssueModal($, k.slot) : this.slotAction.emit({
        task: $,
        slot: k.slot,
        action: k.action
      });
    }
    openPillboxIssueModal($, k) {
      const ce = Zi => k.planningDate && Zi.planningDate && k.period === Zi.period && (0, Ft.O)(k.planningDate) === (0, Ft.O)(Zi.planningDate);
      ($.medicines || []).map(Zi => {
        const Po = Zi.slots.filter(fo => ce(fo) && "COMPLETED" !== fo.status);
        return {
          ...Zi,
          slots: Po
        };
      }).filter(Zi => Zi.slots && Zi.slots.length);
      ($.otherMedicines || []).map(Zi => {
        const Po = Zi.slots.filter(fo => ce(fo) && "COMPLETED" !== fo.status);
        return {
          ...Zi,
          slots: Po
        };
      }).filter(Zi => Zi.slots && Zi.slots.length), $.birthDate && new Date($.birthDate), $.pillbox.pillboxMarks.filter(Zi => Zi.dayTimePeriod.toLowerCase() === k?.period.toLowerCase()), this.pillboxService.createPillboxModalData($, k).pipe((0, Xn.t)(this), (0, ut.w)(Zi => this.modalHelper.openPillboxIssueDialogMob(Zi, this.viewContainerRef))).subscribe(Zi => {
        this.slotAction.emit({
          task: $,
          slot: k,
          action: "issued"
        });
      });
    }
    trackByTask($, k) {
      return k.id;
    }
  }).ɵfac = function (k) {
    return new (k || Ud)(n.Y36(n.s_b), n.Y36(Ya), n.Y36(Hr));
  }, Ud.ɵcmp = n.Xpm({
    type: Ud,
    selectors: [["app-preparing-table-mob"]],
    inputs: {
      tasks: "tasks",
      selectedPeriod: "selectedPeriod",
      searchQuery: "searchQuery"
    },
    outputs: {
      slotAction: "slotAction"
    },
    decls: 3,
    vars: 2,
    consts: [[1, "preparing-medications-wrapper"], [1, "preparing-medications-list"], ["class", "preparing-medications-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "preparing-medications-list__item"], ["color", "primary", 1, "preparing-medications-list__item-header", 3, "withArrow"], [1, "medicine-heading"], [1, "medicine-heading__fio"], [1, "name", 3, "innerHTML"], [1, "pillbox-number"], [1, "medicine-heading__details"], [1, "medicine-heading__separator"], [1, "medicine-details"], [1, "medicine-details__period"], [1, "medicine-details__period-items"], [4, "ngIf"], [3, "slots", "mode", "pillboxMarks", "filterPeriod", "action"], [4, "ngFor", "ngForOf"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n.YNc(2, wt, 21, 14, "lu-expansion-panel", 2), n.qZA()()), 2 & k && (n.xp6(2), n.Q6J("ngForOf", ce.tasks)("ngForTrackBy", ce.trackByTask));
    },
    dependencies: [Di.sg, Di.O5, Ba.BN, Ba.JM, Wu, ms.S],
    styles: ["[_nghost-%COMP%]{display:block;height:100%}.preparing-medications-wrapper[_ngcontent-%COMP%]{padding:8px 0;height:100%;background-color:#f2f2f2}.preparing-medications-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:0 16px;height:100%;overflow:hidden auto}.preparing-medications-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.preparing-medications-list[_ngcontent-%COMP%]     .lu-text-left{--lu-svg-icon-color: #38a1d6}.preparing-medications-list__item[_ngcontent-%COMP%]{width:calc(100vw - 32px);min-height:-moz-fit-content;min-height:fit-content;border-radius:8px;background-color:#fff;transition:background-color .15s ease}@media (min-width: 961px){.preparing-medications-list__item[_ngcontent-%COMP%]:hover{background-color:#ecf6fb}}.preparing-medications-list__item-header[_ngcontent-%COMP%]{display:block;padding:16px 24px 16px 16px}@media (min-width: 600px) and (max-width: 960px){.preparing-medications-list[_ngcontent-%COMP%]     .preparing-medications-list__item-header .lu-text-left{width:24px!important}}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-name[_ngcontent-%COMP%]{font-weight:600;color:#333}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:space-between;gap:16px;color:#333}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]{display:flex;flex-direction:column}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]     mark.search-highlight{background-color:#fff199!important}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]   .pillbox-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:13px;color:#757575}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__details[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0;gap:12px}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__separator[_ngcontent-%COMP%]{display:block;height:15px;border-right:1px solid #ccc}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-details[_ngcontent-%COMP%]{padding:0 24px 24px 48px}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-details__period[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-details__period-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,112px);gap:16px;font-size:13px;color:#757575}"],
    changeDetection: 0
  }), Ud);
  Lt = (0, Se.gn)([(0, Xn.c)()], Lt);
  const cn = ["preparingFilterPanel"];
  function xn(Te, $) {
    1 & Te && (n.TgZ(0, "div", 5), n._UZ(1, "lu-preloader"), n.qZA());
  }
  function Hi(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "app-preparing-table", 9), n.NdJ("slotAction", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(2);
        return n.KtG(Tt.onSlotAction(Ye));
      }), n.ALo(1, "async"), n.ALo(2, "async"), n.ALo(3, "async"), n.ALo(4, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("tasks", n.lcZ(1, 4, k.tasks$))("groupedTasks", n.lcZ(2, 6, k.groupedTasks$))("groupingMode", n.lcZ(3, 8, k.groupingMode$))("selectedPeriod", n.lcZ(4, 10, k.selectedPeriod$));
    }
  }
  function no(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "app-preparing-table-mob", 10), n.NdJ("slotAction", function (Ye) {
        n.CHM(k);
        const Tt = n.oxw(2);
        return n.KtG(Tt.onSlotAction(Ye));
      }), n.ALo(1, "async"), n.ALo(2, "async"), n.ALo(3, "async"), n.qZA();
    }
    if (2 & Te) {
      const k = n.oxw(2);
      n.Q6J("tasks", n.lcZ(1, 3, k.tasks$))("selectedPeriod", n.lcZ(2, 5, k.selectedPeriod$))("searchQuery", n.lcZ(3, 7, k.searchQuery$));
    }
  }
  const Ho = function (Te) {
    return {
      "max-height": Te
    };
  };
  function zo(Te, $) {
    if (1 & Te && (n.TgZ(0, "div", 6), n.YNc(1, Hi, 5, 12, "app-preparing-table", 7), n.YNc(2, no, 4, 9, "app-preparing-table-mob", 8), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.Q6J("ngStyle", n.VKq(3, Ho, k.contentHeight)), n.xp6(1), n.Q6J("ngIf", !k.isTablet), n.xp6(1), n.Q6J("ngIf", k.isTablet);
    }
  }
  let Bo = ((xh = class {
    constructor($, k, ce, Ye, Tt, ai, Zi, Po, fo) {
      this.store = $, this.viewContainerRef = k, this.modalHelper = ce, this.breakpointObserver = Ye, this.cdr = Tt, this.patientDataService = ai, this.pillboxService = Zi, this.messageService = Po, this.router = fo, this.isTablet = !0, this.selectedDate = new Date(), this.isTaskLoaded = !1, this.isLoading$ = this.store.select(Ke), this.searchQuery$ = this.store.select(qn), this.groupingMode$ = this.store.select(ui), this.selectedPeriod$ = this.store.select(To), this.patientDataService.refreshData(), this.navigation = this.router.getCurrentNavigation(), this.reloadTasks();
    }
    ngOnInit() {
      this.breakpointObserver.observe(ri.ok).pipe((0, Xn.t)(this)).subscribe($ => this.isTablet = $.matches), this.store.dispatch(ti());
    }
    reloadTasks() {
      this.tasks$ = this.store.select(zn).pipe((0, m.b)($ => {
        this.isTaskLoaded = !0, this.cdr.markForCheck();
      })), this.groupedTasks$ = this.store.select(bi);
    }
    ngAfterViewInit() {
      const $ = this.preparingFilterPanel.getHeight();
      if (this.contentHeight = this.isTablet ? `calc(100% - ${$}px)` : "", this.navigation && this.navigation?.extras?.state) {
        let k = this.navigation.extras.state;
        const ce = new Date(k.slot.planningDate);
        this.preparingFilterPanel.filtersForm.get("date").patchValue(ce);
        const Ye = this.preparingFilterPanel.filtersForm.value;
        this.onFiltersChanged({
          status: [Ye.status || "all"],
          grouping: Ye.grouping,
          sorting: Ye.sorting,
          period: Ye.period,
          searchQuery: Ye.searchQuery || ""
        }), this.store.select(zn).pipe((0, Xn.t)(this), (0, M.h)(() => this.isTaskLoaded)).subscribe(Tt => {
          const Zi = {
            task: Tt.find(({
              id: Po
            }) => Po === k.patientId),
            slot: k.slot,
            action: "prepare"
          };
          this.onSlotAction(Zi), k = null;
        });
      }
      this.cdr.detectChanges();
    }
    onFiltersChanged($) {
      this.store.dispatch(Wt({
        filters: $
      }));
    }
    onDateChanged($) {
      $ ? this.selectedDate = $ : $ = this.selectedDate, this.store.dispatch(Ao({
        date: $
      }));
    }
    onHeightChanged($) {
      this.contentHeight = this.isTablet ? `calc(100% - ${$}px)` : "";
    }
    onSlotAction($) {
      const k = $.task?.id;
      if ("prepare" === $.action && k) this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, Xn.t)(this), (0, q.U)(Tt => Tt)).subscribe({
        next: Tt => {}
      });else if (!("postpone" === $.action && k || "cancel" === $.action && k || "rollback" === $.action && k)) {
        if ("utilize" !== $.action || !k) return "utilize_and_reassemble" === $.action && k ? (this.dispatchTaskStatusUpdate(k, $.slot, Re.Ae.NeedsRepackage), void this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, Xn.t)(this), (0, q.U)(Tt => Tt)).subscribe(Tt => {})) : void (("issue_medication" === $.action && k || "repack" === $.action && k) && this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, Xn.t)(this), (0, q.U)(Tt => Tt)).subscribe(Tt => {}));
        this.pillboxService.createPillboxModalData($.task, $.slot).pipe((0, Xn.t)(this), (0, ut.w)(Tt => this.pillboxService.utilizePillbox(Tt)), (0, ut.w)(Tt => (this.messageService.success("Таблетница утилизирована", {
          marginBottom: 44
        }), "utilize_and_reassemble" === Tt ? this.modalHelper.openWritingOffDialog(k, this.viewContainerRef, $.slot).pipe((0, q.U)(ai => ai)) : (0, qe.of)(Tt)))).subscribe();
      }
    }
    dispatchTaskStatusUpdate($, k, ce, Ye) {
      if (this.store.dispatch(Fi({
        taskId: $,
        slotId: k.id,
        newStatus: ce
      })), !k.code || !k.resultCompositionUid) return;
      const Tt = k.code,
        ai = k.resultCompositionUid;
      switch (ce) {
        case Re.Ae.Cancelled:
          this.store.dispatch(us({
            taskId: $,
            slot: k,
            code: Tt,
            resultCompositionUid: ai,
            cancelReason: Ye || "Отменено пользователем"
          }));
          break;
        case Re.Ae.Postponed:
          this.store.dispatch(Ps({
            taskId: $,
            slot: k,
            code: Tt,
            postponedReason: Ye
          }));
          break;
        case Re.Ae.Assigned:
          k.status === Re.Ae.Completed || k.status === Re.Ae.Issued ? this.store.dispatch(hs({
            taskId: $,
            slot: k,
            code: Tt
          })) : k.status === Re.Ae.Cancelled ? this.store.dispatch(oi({
            taskId: $,
            slot: k,
            code: Tt
          })) : k.status === Re.Ae.Postponed && this.store.dispatch(yo({
            taskId: $,
            slot: k,
            code: Tt
          }));
      }
      this.cdr.detectChanges();
    }
  }).ɵfac = function (k) {
    return new (k || xh)(n.Y36(t.yh), n.Y36(n.s_b), n.Y36(Ya), n.Y36(Gn.Yg), n.Y36(n.sBO), n.Y36(wr), n.Y36(Hr), n.Y36(wo.Jv), n.Y36(a.F0));
  }, xh.ɵcmp = n.Xpm({
    type: xh,
    selectors: [["app-preparing-tablet-holders"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(cn, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.preparingFilterPanel = Ye.first);
      }
    },
    decls: 7,
    vars: 4,
    consts: [[1, "preparation-container"], [3, "filtersChanged", "dateChanged", "heightChanged"], ["preparingFilterPanel", ""], ["class", "loader", 4, "ngIf", "ngIfElse"], ["tableContainer", ""], [1, "loader"], [1, "preparation-content", 3, "ngStyle"], [3, "tasks", "groupedTasks", "groupingMode", "selectedPeriod", "slotAction", 4, "ngIf"], [3, "tasks", "selectedPeriod", "searchQuery", "slotAction", 4, "ngIf"], [3, "tasks", "groupedTasks", "groupingMode", "selectedPeriod", "slotAction"], [3, "tasks", "selectedPeriod", "searchQuery", "slotAction"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0)(1, "app-preparing-filters", 1, 2), n.NdJ("filtersChanged", function (Tt) {
        return ce.onFiltersChanged(Tt);
      })("dateChanged", function (Tt) {
        return ce.onDateChanged(Tt);
      })("heightChanged", function (Tt) {
        return ce.onHeightChanged(Tt);
      }), n.qZA(), n.YNc(3, xn, 2, 0, "div", 3), n.ALo(4, "async"), n.YNc(5, zo, 3, 5, "ng-template", null, 4, n.W1O), n.qZA()), 2 & k) {
        const Ye = n.MAs(6);
        n.xp6(3), n.Q6J("ngIf", n.lcZ(4, 2, ce.isLoading$))("ngIfElse", Ye);
      }
    },
    dependencies: [Di.O5, Di.PC, qr.d, qf, ie, Lt, Di.Ov],
    styles: ["@media (max-width: 960px){[_nghost-%COMP%]{display:block;height:calc(100% - 56px)}}.loader[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:48px}.preparation-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background-color:#fff}@media (max-width: 960px){.preparation-content[_ngcontent-%COMP%]{height:100%}}"],
    changeDetection: 0
  }), xh);
  Bo = (0, Se.gn)([(0, Xn.c)()], Bo);
  let Mr = ((zh = class {
    constructor($, k) {
      this.router = $, this.store = k, this.currentUser = null, this.store.select(qo.S8).pipe((0, Xn.t)(this)).subscribe(ce => {
        this.currentUser = (0, ji.yE)(ho, ce);
      });
    }
    canActivate($, k) {
      switch (k.url.split("/"), k.url.split("/")[2]) {
        case "issuing":
          return this.currentUser.hasRoles("NURSE_PILL");
        case "preparation":
          return this.currentUser.hasRoles("NURSE_PILLBOXES");
        default:
          return !0;
      }
    }
    canActivateChild($, k) {
      return this.canActivate($, k);
    }
  }).ɵfac = function (k) {
    return new (k || zh)(n.LFG(a.F0), n.LFG(t.yh));
  }, zh.ɵprov = n.Yz7({
    token: zh,
    factory: zh.ɵfac,
    providedIn: "root"
  }), zh);
  Mr = (0, Se.gn)([(0, Xn.c)()], Mr);
  const Ur = [{
      path: "",
      component: jd,
      canActivateChild: [Mr],
      children: [{
        path: "",
        redirectTo: "issuing",
        pathMatch: "full"
      }, {
        path: "issuing",
        component: vf
      }, {
        path: "preparation",
        component: Bo
      }]
    }],
    um = class {};
  let ls = um;
  um.ɵfac = function (k) {
    return new (k || um)();
  }, um.ɵmod = n.oAB({
    type: um
  }), um.ɵinj = n.cJS({
    imports: [a.Bz.forChild(Ur), a.Bz]
  });
  const Ss = (0, t.Lq)(Re.E3, (0, t.on)(A, Te => ({
    ...Te,
    loading: !0
  })), (0, t.on)(N, Te => ({
    ...Te,
    loading: !0
  })), (0, t.on)(I, (Te, {
    patients: $,
    prescriptions: k
  }) => ({
    ...Te,
    patients: $,
    prescriptions: k,
    loading: !1,
    error: null
  })), (0, t.on)(O, (Te, {
    error: $
  }) => ({
    ...Te,
    loading: !1,
    error: $
  })), (0, t.on)(E, (Te, {
    filters: $
  }) => ({
    ...Te,
    filters: {
      ...Te.filters,
      ...$
    }
  })), (0, t.on)(L, (Te, {
    careCaseId: $
  }) => ({
    ...Te,
    careCaseId: $
  })), (0, t.on)(C, (Te, {
    patientId: $,
    medicineId: k,
    slot: ce,
    newStatus: Ye
  }) => ({
    ...Te,
    patients: Te.patients.map(Tt => Tt.id === $ ? {
      ...Tt,
      medicines: Tt.medicines.map(ai => {
        if (ai.id === k) {
          const Zi = ai.symptomatic && ai.maxSymptomaticAmount && "COMPLETED" === Ye && ai.medicationDispenses.filter(fo => "COMPLETED" === fo.status).length < ai.maxSymptomaticAmount ? "SYSTEMATICALLY" : Ye,
            Po = [...ai.medicationDispenses];
          return Po.push({
            id: null,
            dayTimePeriod: null,
            financeSourceCode: null,
            financeSourceName: null,
            planningDate: null,
            status: Ye,
            symptomatic: !0,
            byExecutor: !1,
            code: null
          }), {
            ...ai,
            medicationDispenses: Po,
            slots: ai.slots.map(fo => fo.id === ce.id ? {
              ...fo,
              status: Zi
            } : fo)
          };
        }
        return ai;
      })
    } : Tt),
    prescriptions: Te.prescriptions.map(Tt => Tt.patientId === $ && Tt.id === k ? {
      ...Tt,
      slots: Tt.slots.map(ai => ai.id === ce.id ? {
        ...ai,
        status: Ye
      } : ai)
    } : Tt)
  })), (0, t.on)(f, (Te, {
    patientId: $,
    medicineId: k,
    slot: ce,
    previousStatus: Ye
  }) => ({
    ...Te,
    error: "Failed to update dispense status",
    patients: Te.patients.map(Tt => Tt.id === $ ? {
      ...Tt,
      medicines: Tt.medicines.map(ai => ai.id === k ? {
        ...ai,
        slots: ai.slots.map(Zi => Zi.id === ce.id ? {
          ...Zi,
          status: Ye
        } : Zi)
      } : ai)
    } : Tt),
    prescriptions: Te.prescriptions.map(Tt => Tt.patientId === $ && Tt.id === k ? {
      ...Tt,
      slots: Tt.slots.map(ai => ai.id === ce.id ? {
        ...ai,
        status: Ye
      } : ai)
    } : Tt)
  })), (0, t.on)(v, Te => ({
    ...Te,
    error: null
  })), (0, t.on)(h, (Te, {
    date: $
  }) => ({
    ...Te,
    selectedDate: $
  })), (0, t.on)(x, (Te, {
    date: $
  }) => ({
    ...Te,
    selectedDate: $,
    loading: !0
  })), (0, t.on)(ae, (Te, {
    patientId: $,
    assignmentCompositionUid: k,
    newStatus: ce
  }) => ({
    ...Te,
    error: null,
    patients: Te.patients.map(Ye => Ye.id === $ ? {
      ...Ye,
      medicationAssignmentInstructions: Ye.medicationAssignmentInstructions?.map(Tt => Tt.assignmentCompositionUid === k ? {
        ...Tt,
        status: ce
      } : Tt)
    } : Ye)
  })), (0, t.on)(Y, (Te, {
    error: $
  }) => ({
    ...Te,
    error: $
  })), (0, t.on)(te, Te => ({
    ...Te,
    patients: Te.patients.map($ => ({
      ...$,
      medicines: $.medicines.map(k => ({
        ...k,
        isNew: !1
      }))
    }))
  })), (0, t.on)(pe, (Te, {
    patients: $
  }) => ({
    ...Te,
    patients: $
  })), (0, t.on)(be, (Te, {
    count: $
  }) => ({
    ...Te,
    crossDateNewCount: $
  })));
  var Is = i(11365);
  function Ys(Te = 1 / 0) {
    let $;
    $ = Te && "object" == typeof Te ? Te : {
      count: Te
    };
    const {
      count: k = 1 / 0,
      delay: ce,
      resetOnSuccess: Ye = !1
    } = $;
    return k <= 0 ? No.y : (0, vp.e)((Tt, ai) => {
      let Po,
        Zi = 0;
      const fo = () => {
        let Wr = !1;
        Po = Tt.subscribe(new ep.Q(ai, Cs => {
          Ye && (Zi = 0), ai.next(Cs);
        }, void 0, Cs => {
          if (Zi++ < k) {
            const ia = () => {
              Po ? (Po.unsubscribe(), Po = null, fo()) : Wr = !0;
            };
            if (null != ce) {
              const Ls = "number" == typeof ce ? (0, yd.H)(ce) : (0, Np.Xf)(ce(Cs, Zi)),
                nl = new ep.Q(ai, () => {
                  nl.unsubscribe(), ia();
                }, () => {
                  ai.complete();
                });
              Ls.subscribe(nl);
            } else ia();
          } else ai.error(Cs);
        })), Wr && (Po.unsubscribe(), Po = null, fo());
      };
      fo();
    });
  }
  const Sa = {
      count: 2,
      delay: 1e3
    },
    el = "1970-01-01T00:00:00.000Z",
    Ff = class {
      constructor($, k, ce, Ye, Tt, ai, Zi, Po) {
        this.actions$ = $, this.store = k, this.patientDataService = ce, this.dispensingService = Ye, this.compositionService = Tt, this.viewedStateService = ai, this.accountingDocumentService = Zi, this.warehouseService = Po, this.loadPrescriptions$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(A), (0, Is.M)(this.store.select(le.mj)), (0, ut.w)(([fo, Wr]) => {
          const Cs = Fs.toDateKey(Wr?.date ? new Date(Wr.date) : new Date());
          return (0, di.D)({
            patients: this.patientDataService.getPatientList(),
            prescriptions: this.patientDataService.getPrescriptions()
          }).pipe((0, ut.w)(({
            patients: ia,
            prescriptions: Ls
          }) => {
            const nl = this.mapPatientsWithIsNew(ia, Cs),
              Yl = this.computeCrossOrMarkAll(ia);
            return [I({
              patients: nl,
              prescriptions: Ls
            }), be({
              count: Yl
            })];
          }), (0, Go.K)(ia => (0, qe.of)(O({
            error: ia
          }))));
        }))), this.refreshPrescriptions$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(N), (0, m.b)(() => {
          this.patientDataService.refreshData();
        }), (0, Is.M)(this.store.select(le.mj)), (0, ut.w)(([fo, Wr]) => {
          const Cs = Fs.toDateKey(Wr?.date ? new Date(Wr.date) : new Date());
          return (0, di.D)({
            patients: this.patientDataService.getPatientList(),
            prescriptions: this.patientDataService.getPrescriptions()
          }).pipe((0, ut.w)(({
            patients: ia,
            prescriptions: Ls
          }) => {
            const nl = this.mapPatientsWithIsNew(ia, Cs),
              Yl = this.computeCrossOrMarkAll(ia);
            return [I({
              patients: nl,
              prescriptions: Ls
            }), be({
              count: Yl
            })];
          }), (0, Go.K)(ia => (0, qe.of)(O({
            error: ia
          }))));
        }))), this.markAllAsViewed$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(te), (0, Is.M)(this.store.select(le.QD), this.store.select(le.mj)), (0, q.U)(([fo, Wr, Cs]) => {
          const ia = Fs.toDateKey(Cs?.date ? new Date(Cs.date) : new Date()),
            Ls = [];
          Wr.forEach(Yl => {
            Yl.medicines.forEach(uc => {
              const $u = uc.assignmentCompositionUid || String(uc.id);
              Ls.push({
                entityId: $u,
                updated: uc.updated || el
              });
            });
          }), this.viewedStateService.confirmAllIssuingViewedForDate(Ls, ia), this.computeCrossOrMarkAll(Wr, "mark");
          const nl = this.computeCrossOrMarkAll(Wr);
          return be({
            count: nl
          });
        }))), this.logUpdateError$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(f), (0, m.b)(fo => {
          console.error("Failed to update dispense status:", fo.error);
        })), {
          dispatch: !1
        }), this.reloadWithDate$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(x), (0, m.b)(fo => {
          this.patientDataService.setDate(fo.date);
        }), (0, q.U)(fo => Fs.toDateKey(fo.date)), (0, ut.w)(fo => (0, di.D)({
          patients: this.patientDataService.getPatientList(),
          prescriptions: this.patientDataService.getPrescriptions()
        }).pipe((0, ut.w)(({
          patients: Wr,
          prescriptions: Cs
        }) => {
          const ia = this.mapPatientsWithIsNew(Wr, fo),
            Ls = this.computeCrossOrMarkAll(Wr);
          return [I({
            patients: ia,
            prescriptions: Cs
          }), be({
            count: Ls
          })];
        }), (0, Go.K)(Wr => (0, qe.of)(O({
          error: Wr
        }))))))), this.recomputeIsNewOnDateChange$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(E), (0, M.h)(fo => void 0 !== fo.filters.date), (0, Is.M)(this.store.select(le.QD)), (0, q.U)(([fo, Wr]) => {
          const Cs = Fs.toDateKey(fo.filters.date ? new Date(fo.filters.date) : new Date()),
            ia = this.mapPatientsWithIsNew(Wr, Cs);
          return pe({
            patients: ia
          });
        }))), this.completeMedication$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(u), (0, Is.M)(this.store.select(le.QD), this.store.select(qo.S8)), (0, ks.b)(([fo, Wr, Cs]) => {
          const ia = fo.patient ?? Wr.find($u => $u.id === fo.patientId),
            Ls = ia?.medicines?.find($u => $u.id === fo.medicineId) ?? fo.medicine,
            nl = ia?.ehrId ?? ia?.ehrCaseId,
            Yl = ia?.careCaseId ?? ia?.careCaseId;
          if (!nl || !Yl) return (0, qe.of)(f({
            patientId: fo.patientId,
            medicineId: fo.medicineId,
            slot: fo.slot,
            previousStatus: fo.slot.status,
            error: "Отсутствуют ehrId или careCaseId у пациента"
          }));
          const uc = {
            dispensingCode: String(fo.code),
            assignmentCompositionUid: Ls.assignmentCompositionUid,
            dispensingDate: Gi()().format(),
            doctor: {
              dept: Cs?.department?.fullName || "",
              empId: Cs?.employeeId || "",
              position: Cs?.jobTitle?.name || "",
              snils: Cs?.employee?.identities?.snils || ""
            },
            medication: [{
              batchCount: fo.completedDose || 1,
              id: String(Ls?.id || fo.medicineId),
              name: Ls?.tradeName || Ls?.name || "",
              productId: Ls?.otnUid || Ls?.otnId || "",
              recycledPack: 0,
              storageId: "",
              dose: String(Ls?.dose || ""),
              doseUnit: Ls?.dosage || "",
              markDrugId: ri.Rt.newGuid(),
              medNamesId: null
            }]
          };
          return this.warehouseService.getMedNamesId(Ls.assignmentCompositionUid).pipe((0, ut.w)($u => this.compositionService.getEhr(nl).pipe((0, ut.w)(Wm => this.compositionService.createMedicationDocument(Wm, Yl, {
            ...uc,
            medication: uc.medication.map(S_ => ({
              ...S_,
              medNamesId: $u
            }))
          }, !Ls.base, !!fo.slot.maxSymptomaticAmount, "completed", null)), (0, q.U)(() => v({
            patientId: fo.patientId,
            medicineId: fo.medicineId,
            slotId: fo.slot.id,
            newStatus: Re.Ai.Completed,
            updatedAt: Gi()().toISOString()
          })), (0, Go.K)(Wm => (0, qe.of)(f({
            patientId: fo.patientId,
            medicineId: fo.medicineId,
            slot: fo.slot,
            previousStatus: fo.slot.status,
            error: Wm
          }))))));
        }))), this.cancelMedication$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(T), (0, ks.b)(fo => this.dispensingService.cancelMedication({
          code: fo.code,
          resultCompositionUid: fo.resultCompositionUid,
          cancelReason: fo.cancelReason
        }).pipe(Ys(Sa), (0, q.U)(() => v({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slotId: fo.slot.id,
          newStatus: Re.Ai.Cancelled,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(Wr => (0, qe.of)(f({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slot: fo.slot,
          previousStatus: fo.slot.status,
          error: Wr
        }))))))), this.planMedication$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(y), (0, ks.b)(fo => this.dispensingService.planMedicationInstruction({
          code: fo.code,
          planningDate: fo.planningDate,
          comment: fo.comment,
          symptomatic: fo.symptomatic,
          dayTimePeriod: fo.dayTimePeriod,
          assignmentCompositionUid: fo.assignmentCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => v({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slotId: fo.slot.id,
          newStatus: Re.Ai.Assigned,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(Wr => (0, qe.of)(f({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slot: fo.slot,
          previousStatus: fo.slot.status,
          error: Wr
        }))))))), this.markMedicationAsCancelling$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(j), (0, ks.b)(fo => this.dispensingService.markMedicationAsCancelling(fo.code, fo.byExecutor ?? !0).pipe(Ys(Sa), (0, q.U)(() => v({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slotId: fo.slot.id,
          newStatus: Re.Ai.Cancelling,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(Wr => (0, qe.of)(f({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slot: fo.slot,
          previousStatus: fo.slot.status,
          error: Wr
        }))))))), this.unmarkMedicationAsCancelling$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(W), (0, ks.b)(fo => this.dispensingService.unmarkMedicationAsCancelling(fo.code).pipe(Ys(Sa), (0, q.U)(() => v({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slotId: fo.slot.id,
          newStatus: Re.Ai.Assigned,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(Wr => (0, qe.of)(f({
          patientId: fo.patientId,
          medicineId: fo.medicineId,
          slot: fo.slot,
          previousStatus: fo.slot.status,
          error: Wr
        }))))))), this.activateAssignment$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(F), (0, ks.b)(fo => this.dispensingService.activateAssignment({
          assignmentCompositionUid: fo.assignmentCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => ae({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          newStatus: "ACTIVE"
        })), (0, Go.K)(Wr => (0, qe.of)(Y({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          error: Wr
        }))))))), this.deactivateAssignment$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Le), (0, ks.b)(fo => this.dispensingService.deactivateAssignment({
          assignmentCompositionUid: fo.assignmentCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => ae({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          newStatus: "CREATED"
        })), (0, Go.K)(Wr => (0, qe.of)(Y({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          error: Wr
        }))))))), this.completeAssignment$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(ke), (0, ks.b)(fo => this.dispensingService.completeAssignment({
          assignmentCompositionUid: fo.assignmentCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => ae({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          newStatus: "COMPLETED"
        })), (0, Go.K)(Wr => (0, qe.of)(Y({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          error: Wr
        }))))))), this.cancelAssignment$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(J), (0, ks.b)(fo => this.dispensingService.cancelAssignment({
          assignmentCompositionUid: fo.assignmentCompositionUid,
          resultCompositionUid: fo.resultCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => ae({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          newStatus: "CANCELLED"
        })), (0, Go.K)(Wr => (0, qe.of)(Y({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          error: Wr
        }))))))), this.rollbackCancelAssignment$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(fe), (0, ks.b)(fo => this.dispensingService.rollbackCancelAssignment({
          assignmentCompositionUid: fo.assignmentCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => ae({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          newStatus: "ACTIVE"
        })), (0, Go.K)(Wr => (0, qe.of)(Y({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          error: Wr
        }))))))), this.rollbackCompleteAssignment$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(ye), (0, ks.b)(fo => this.dispensingService.rollbackCompleteAssignment({
          assignmentCompositionUid: fo.assignmentCompositionUid
        }).pipe(Ys(Sa), (0, q.U)(() => ae({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          newStatus: "ACTIVE"
        })), (0, Go.K)(Wr => (0, qe.of)(Y({
          patientId: fo.patientId,
          assignmentCompositionUid: fo.assignmentCompositionUid,
          error: Wr
        }))))))), this.logAssignmentError$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Y), (0, m.b)(fo => {
          console.error("Failed to update assignment:", fo.error);
        })), {
          dispatch: !1
        });
      }
      _getDateKeys($) {
        const k = Fs.toDateKey(new Date()),
          ce = new Set();
        for (const Ye of $) for (const Tt of Ye.medicines) {
          for (const ai of Tt.slots) {
            const Zi = ai.planningDate || Tt.assignmentDate;
            if (!Zi) continue;
            const Po = this.toUtcDateKey(Zi);
            Po <= k && ce.add(Po);
          }
          if (0 === Tt.slots.length && Tt.assignmentDate) {
            const ai = this.toUtcDateKey(Tt.assignmentDate);
            ai <= k && ce.add(ai);
          }
        }
        return ce;
      }
      _markAllAsViewed($, k) {
        const ce = localStorage.getItem(Re.Uf),
          Ye = JSON.parse(ce);
        Ye.issuing.entities[k][$] = new Date().toISOString(), Ye.lastSaved = new Date().toISOString(), localStorage.setItem(Re.Uf, JSON.stringify(Ye));
      }
      computeCrossOrMarkAll($, k = "cross") {
        let ce = 0;
        const Ye = this._getDateKeys($);
        for (const Tt of Ye) {
          if (this.viewedStateService.needsIssuingBaselineForDate(Tt)) {
            const ai = $.flatMap(Zi => Zi.medicines.map(Po => ({
              entityId: Po.assignmentCompositionUid || String(Po.id),
              updated: Po.updated || el
            })));
            this.viewedStateService.initializeIssuingBaselineForDate(ai, Tt);
          }
          for (const ai of $) for (const Zi of ai.medicines) {
            if (!(Zi.slots.some(Cs => {
              const ia = Cs.planningDate || Zi.assignmentDate;
              return ia && this.toUtcDateKey(ia) === Tt;
            }) || 0 === Zi.slots.length && Zi.assignmentDate && this.toUtcDateKey(Zi.assignmentDate) === Tt)) continue;
            const fo = Zi.assignmentCompositionUid || String(Zi.id);
            this.viewedStateService.isNewForIssuingOnDate(fo, Zi.updated || el, Tt) && ("cross" === k ? ce++ : this._markAllAsViewed(fo, Tt));
          }
        }
        return ce;
      }
      toUtcDateKey($) {
        const k = new Date($);
        return `${k.getUTCFullYear()}-${String(k.getUTCMonth() + 1).padStart(2, "0")}-${String(k.getUTCDate()).padStart(2, "0")}`;
      }
      mapPatientsWithIsNew($, k) {
        if (!Fs.isFutureDate(k) && this.viewedStateService.needsIssuingBaselineForDate(k)) {
          const ai = $.flatMap(Zi => Zi.medicines.map(Po => ({
            entityId: Po.assignmentCompositionUid || String(Po.id),
            updated: Po.updated || el
          })));
          this.viewedStateService.initializeIssuingBaselineForDate(ai, k);
        }
        let Ye = !1;
        const Tt = $.map(ai => {
          let Zi = !1;
          const Po = ai.medicines.map(fo => !1 !== fo.isNew ? (Zi = !0, {
            ...fo,
            isNew: !1
          }) : fo);
          return Zi ? (Ye = !0, {
            ...ai,
            medicines: Po
          }) : ai;
        });
        return Ye ? Tt : $;
      }
    };
  let tu = Ff;
  Ff.ɵfac = function (k) {
    return new (k || Ff)(n.LFG(e.eX), n.LFG(t.yh), n.LFG(wr), n.LFG(Yi.r), n.LFG(Br), n.LFG(Fs), n.LFG(dn.gy), n.LFG(pi));
  }, Ff.ɵprov = n.Yz7({
    token: Ff,
    factory: Ff.ɵfac
  });
  var Ql = i(76549);
  const pu = (0, t.Lq)(Ql.E3, (0, t.on)(ti, Te => ({
      ...Te,
      loading: !0
    })), (0, t.on)(fi, (Te, {
      tasks: $
    }) => ({
      ...Te,
      tasks: $,
      loading: !1,
      error: null
    })), (0, t.on)(Ei, (Te, {
      error: $
    }) => ({
      ...Te,
      loading: !1,
      error: $
    })), (0, t.on)(Wt, (Te, {
      filters: $
    }) => ({
      ...Te,
      filters: {
        ...Te.filters,
        ...$
      }
    })), (0, t.on)(Fi, (Te, {
      taskId: $,
      slotId: k,
      newStatus: ce
    }) => (Te.tasks.map(Tt => Tt.id === $ ? {
      ...Tt,
      slots: Tt.slots?.map(ai => ai.id === k ? {
        ...ai,
        status: ce
      } : ai)
    } : Tt), {
      ...Te,
      tasks: Te.tasks.map(Tt => Tt.id === $ ? {
        ...Tt,
        slots: Tt.slots?.map(ai => ai.id === k ? {
          ...ai,
          status: ce
        } : ai)
      } : Tt)
    })), (0, t.on)(ki, (Te, {
      taskId: $,
      slot: k,
      previousStatus: ce
    }) => ({
      ...Te,
      error: "Failed to update task status",
      tasks: Te.tasks.map(Ye => Ye.id === $ ? {
        ...Ye,
        slots: Ye.slots?.map(Tt => Tt.id === k.id ? {
          ...Tt,
          status: ce
        } : Tt)
      } : Ye)
    })), (0, t.on)(Rn, Te => ({
      ...Te,
      error: null
    })), (0, t.on)(Ji, (Te, {
      date: $
    }) => ({
      ...Te,
      selectedDate: $
    })), (0, t.on)(Ao, (Te, {
      date: $
    }) => ({
      ...Te,
      selectedDate: $,
      loading: !0
    })), (0, t.on)(_s, Te => ({
      ...Te,
      tasks: Te.tasks.map($ => ({
        ...$,
        isNew: !1
      }))
    })), (0, t.on)(Oi, (Te, {
      searchQuery: $
    }) => ({
      ...Te,
      searchQuery: $
    }))),
    Id = "1970-01-01T00:00:00.000Z",
    Ld = {
      count: 2,
      delay: 1e3
    },
    Nf = class {
      constructor($, k, ce, Ye, Tt, ai, Zi) {
        this.actions$ = $, this.store = k, this.patientDataService = ce, this.dispensingService = Ye, this.compositionService = Tt, this.viewedStateService = ai, this.warehouseService = Zi, this.loadTasks$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(ti), (0, Is.M)(this.store.select(Ee)), (0, ut.w)(([Po, fo]) => {
          this.patientDataService.refreshData();
          const Wr = Fs.toDateKey(fo || new Date());
          return this.patientDataService.refreshData(), this.patientDataService.getPillboxTasks().pipe((0, q.U)(Cs => fi({
            tasks: this.mapTasksWithIsNew(Cs, Wr)
          })), (0, Go.K)(Cs => (0, qe.of)(Ei({
            error: Cs
          }))));
        }))), this.markAllAsViewed$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(_s), (0, Is.M)(this.store.select(Me), this.store.select(Ee)), (0, m.b)(([Po, fo, Wr]) => {
          const Cs = Fs.toDateKey(Wr || new Date()),
            ia = fo.map(Ls => ({
              entityId: Ls.entityId || Ls.careCaseId || String(Ls.id),
              updated: Ls.updated || Id
            }));
          this.viewedStateService.confirmAllPillboxesViewedForDate(ia, Cs);
        })), {
          dispatch: !1
        }), this.logUpdateError$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(ki), (0, m.b)(Po => {
          console.error("Failed to update pillbox task status:", Po.error);
        })), {
          dispatch: !1
        }), this.reloadWithDate$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Ao), (0, m.b)(Po => {
          this.patientDataService.setDate(Po.date);
        }), (0, ut.w)(Po => {
          const fo = Fs.toDateKey(Po.date);
          return this.patientDataService.getPillboxTasks().pipe((0, q.U)(Wr => fi({
            tasks: this.mapTasksWithIsNew(Wr, fo)
          })), (0, Go.K)(Wr => (0, qe.of)(Ei({
            error: Wr
          }))));
        }))), this.completePillboxTask$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Sr), (0, Is.M)(this.store.select(Me), this.store.select(qo.S8)), (0, ks.b)(([Po, fo, Wr]) => {
          const Cs = fo.find(uc => uc.id === Po.taskId),
            ia = Cs?.ehrId,
            Ls = Cs?.careCaseId;
          if (!ia || !Ls) return (0, qe.of)(ki({
            taskId: Po.taskId,
            slot: Po.slot,
            previousStatus: Po.slot.status,
            error: "Отсутствуют ehrId или careCaseId у задачи"
          }));
          const nl = Cs?.medicines?.[0],
            Yl = {
              dispensingCode: String(Cs.id),
              dispensingDate: Gi()().format(),
              assignmentCompositionUid: nl.assignmentCompositionUid,
              doctor: {
                dept: Wr?.department?.fullName || "",
                empId: Wr?.employeeId || "",
                position: Wr?.jobTitle?.name || "",
                snils: Wr?.employee?.identities?.snils || ""
              },
              medication: [{
                batchCount: Po.completedDose || 1,
                id: String(nl?.id || Cs.id),
                name: nl?.tradeName || nl?.name || Cs.medicineName || "",
                productId: nl?.otnUid || nl?.otnId || "",
                recycledPack: 0,
                storageId: "",
                dose: String(nl?.dose || ""),
                doseUnit: nl?.dosage || "",
                markDrugId: ri.Rt.newGuid(),
                medNamesId: null
              }]
            };
          return this.warehouseService.getMedNamesId(nl.assignmentCompositionUid).pipe((0, ut.w)(uc => this.compositionService.getEhr(ia).pipe((0, ut.w)($u => this.compositionService.createMedicationDocument($u, Ls, {
            ...Yl,
            medication: Yl.medication.map(Wm => ({
              ...Wm,
              medNamesId: uc
            }))
          }, !0, !1, "completed", null)), (0, q.U)(() => Rn({
            taskId: Po.taskId,
            slotId: Po.slot.id,
            newStatus: Re.Ae.Completed,
            updatedAt: Gi()().toISOString()
          })), (0, Go.K)($u => (0, qe.of)(ki({
            taskId: Po.taskId,
            slot: Po.slot,
            previousStatus: Po.slot.status,
            error: $u
          }))))));
        }))), this.cancelPillboxTask$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(us), (0, ks.b)(Po => this.dispensingService.cancelMedication({
          code: Po.code,
          resultCompositionUid: Po.resultCompositionUid,
          cancelReason: Po.cancelReason
        }).pipe(Ys(Ld), (0, q.U)(() => Rn({
          taskId: Po.taskId,
          slotId: Po.slot.id,
          newStatus: Re.Ae.Cancelled,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(fo => (0, qe.of)(ki({
          taskId: Po.taskId,
          slot: Po.slot,
          previousStatus: Po.slot.status,
          error: fo
        }))))))), this.postponePillboxTask$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Ps), (0, ks.b)(Po => this.dispensingService.postponeMedication({
          code: Po.code,
          postponedReason: Po.postponedReason
        }).pipe(Ys(Ld), (0, q.U)(() => Rn({
          taskId: Po.taskId,
          slotId: Po.slot.id,
          newStatus: Re.Ae.Postponed,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(fo => (0, qe.of)(ki({
          taskId: Po.taskId,
          slot: Po.slot,
          previousStatus: Po.slot.status,
          error: fo
        }))))))), this.rollbackPostponePillboxTask$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(yo), (0, ks.b)(Po => this.dispensingService.rollbackPostponeMedication({
          code: Po.code
        }).pipe(Ys(Ld), (0, q.U)(() => Rn({
          taskId: Po.taskId,
          slotId: Po.slot.id,
          newStatus: Re.Ae.Assigned,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(fo => (0, qe.of)(ki({
          taskId: Po.taskId,
          slot: Po.slot,
          previousStatus: Po.slot.status,
          error: fo
        }))))))), this.planPillboxTask$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Qi), (0, ks.b)(Po => this.dispensingService.planMedicationInstruction({
          code: Po.code,
          planningDate: Po.planningDate,
          comment: Po.comment,
          symptomatic: Po.symptomatic,
          dayTimePeriod: Po.dayTimePeriod,
          assignmentCompositionUid: Po.assignmentCompositionUid
        }).pipe(Ys(Ld), (0, q.U)(() => Rn({
          taskId: Po.taskId,
          slotId: Po.slot.id,
          newStatus: Re.Ae.Assigned,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(fo => (0, qe.of)(ki({
          taskId: Po.taskId,
          slot: Po.slot,
          previousStatus: Po.slot.status,
          error: fo
        }))))))), this.markPillboxTaskAsCancelling$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Qo), (0, ks.b)(Po => this.dispensingService.markMedicationAsCancelling(Po.code, Po.byExecutor ?? !0).pipe(Ys(Ld), (0, q.U)(() => Rn({
          taskId: Po.taskId,
          slotId: Po.slot.id,
          newStatus: Re.Ae.Cancelling,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(fo => (0, qe.of)(ki({
          taskId: Po.taskId,
          slot: Po.slot,
          previousStatus: Po.slot.status,
          error: fo
        }))))))), this.unmarkPillboxTaskAsCancelling$ = (0, e.GW)(() => this.actions$.pipe((0, e.l4)(Kr), (0, ks.b)(Po => this.dispensingService.unmarkMedicationAsCancelling(Po.code).pipe(Ys(Ld), (0, q.U)(() => Rn({
          taskId: Po.taskId,
          slotId: Po.slot.id,
          newStatus: Re.Ae.Assigned,
          updatedAt: Gi()().toISOString()
        })), (0, Go.K)(fo => (0, qe.of)(ki({
          taskId: Po.taskId,
          slot: Po.slot,
          previousStatus: Po.slot.status,
          error: fo
        })))))));
      }
      mapTasksWithIsNew($, k) {
        if (!Fs.isFutureDate(k) && this.viewedStateService.needsPillboxesBaselineForDate(k)) {
          const Ye = $.map(Tt => ({
            entityId: Tt.entityId || Tt.careCaseId || String(Tt.id),
            updated: Tt.updated || Id
          }));
          this.viewedStateService.initializePillboxesBaselineForDate(Ye, k);
        }
        return $.map(Ye => ({
          ...Ye,
          isNew: !1
        }));
      }
    };
  let em = Nf;
  function Nm(Te, $) {
    1 & Te && (n.ynx(0), n.TgZ(1, "div", 1), n._uU(2, "Фасовка"), n.qZA(), n.BQk());
  }
  function bf(Te, $) {
    1 & Te && (n.ynx(0), n.TgZ(1, "div", 1), n._uU(2, "Назначивший врач"), n.qZA(), n.BQk());
  }
  function Pp(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 8)(2, "div", 9), n._uU(3), n.qZA()(), n.BQk()), 2 & Te) {
      const k = n.oxw(2);
      n.xp6(3), n.Oqu(k.periodLabel);
    }
  }
  function k0(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, Pp, 4, 1, "ng-container", 5), n.BQk()), 2 & Te) {
      const k = n.oxw(),
        ce = n.MAs(17);
      n.xp6(1), n.Q6J("ngIf", k.periodLabel)("ngIfElse", ce);
    }
  }
  function tm(Te, $) {
    1 & Te && (n.TgZ(0, "div", 10)(1, "div", 9), n._uU(2, "Утро"), n.qZA(), n.TgZ(3, "div", 9), n._uU(4, "День"), n.qZA(), n.TgZ(5, "div", 9), n._uU(6, "Вечер"), n.qZA(), n.TgZ(7, "div", 11), n._uU(8, "Ночь"), n.qZA()());
  }
  function gh(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 18), n.NdJ("click", function () {
        const Ye = n.CHM(k),
          Tt = Ye.index,
          ai = Ye.$implicit,
          Zi = n.oxw(2);
        return n.KtG(Zi.onHourlyHeaderClick(Tt, ai));
      }), n._uU(1), n.qZA();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = $.index,
        Ye = n.oxw(2);
      n.ekj("active", Ye.activeIndex === ce)("selected", Ye.selectedTime === k), n.Q6J("id", "hour-" + ce), n.xp6(1), n.hij(" ", k, " ");
    }
  }
  function Dl(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 12)(1, "button", 13), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.scrollHourlyHeaders("left"));
      }), n._uU(2, "< "), n.qZA(), n.TgZ(3, "div", 14)(4, "div", 15), n.YNc(5, gh, 2, 6, "div", 16), n.qZA()(), n.TgZ(6, "button", 17), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw();
        return n.KtG(Ye.scrollHourlyHeaders("right"));
      }), n._uU(7, "> "), n.qZA()();
    }
    if (2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("disabled", k.isFirstPage), n.xp6(3), n.Udp("grid-template-columns", "repeat(" + k.gridColumnsCount + ", 1fr)"), n.xp6(1), n.Q6J("ngForOf", k.visibleHourlyHeaders)("ngForTrackBy", k.trackByTime), n.xp6(1), n.Q6J("disabled", k.isLastPage);
    }
  }
  Nf.ɵfac = function (k) {
    return new (k || Nf)(n.LFG(e.eX), n.LFG(t.yh), n.LFG(wr), n.LFG(Yi.r), n.LFG(Br), n.LFG(Fs), n.LFG(pi));
  }, Nf.ɵprov = n.Yz7({
    token: Nf,
    factory: Nf.ɵfac
  });
  const dg = function (Te, $) {
      return {
        "table-header-by-patient": Te,
        "table-header-by-medicament": $
      };
    },
    kd = function (Te) {
      return {
        "table-header__cell--time-slots--single": Te
      };
    },
    Gh = class {
      constructor($) {
        this.cdr = $, this.gridTemplateColumns = "320px 280px 124px 164px 184px 226px 1fr", this.timeHeaderMode = "periods", this.selectedPeriod = null, this.allHourlyHeaders = [], this.groupingMode = "byPatient", this.selectedTime = null, this.visibleHourlyHeaders = [], this.hourlyHeaderClick = new n.vpe(), this.chunkIndexChange = new n.vpe(), this.timeHeaderSelected = new n.vpe(), this.activeIndex = 0, this.hoursPerPage = 6, this.currentChunkIndex = 0;
      }
      get isFirstPage() {
        return 0 === this.currentChunkIndex;
      }
      get isLastPage() {
        if (!this.allHourlyHeaders.length || this.hoursPerPage <= 0) return !0;
        const $ = Math.ceil(this.allHourlyHeaders.length / this.hoursPerPage) - 1;
        return this.currentChunkIndex >= $;
      }
      get periodLabel() {
        return this.selectedPeriod && "all" !== this.selectedPeriod.toLowerCase() ? {
          morning: "Утро",
          day: "День",
          evening: "Вечер",
          night: "Ночь"
        }[this.selectedPeriod.toLowerCase()] ?? null : null;
      }
      get gridColumnsCount() {
        return this.visibleHourlyHeaders?.length || 6;
      }
      ngOnChanges($) {
        ($.allHourlyHeaders || $.timeHeaderMode || $.selectedPeriod) && (this.currentChunkIndex = 0);
      }
      scrollHourlyHeaders($) {
        "left" !== $ || this.isFirstPage ? "right" === $ && !this.isLastPage && this.currentChunkIndex++ : this.currentChunkIndex--, this.activeIndex = 0, this.chunkIndexChange.emit(this.currentChunkIndex);
      }
      onHourlyHeaderClick($, k) {
        this.activeIndex = $, this.selectedTime === k ? (this.selectedTime = null, this.timeHeaderSelected.emit(null)) : (this.selectedTime = k, this.timeHeaderSelected.emit(k)), this.hourlyHeaderClick.emit($);
      }
      trackByTime($, k) {
        return k;
      }
      get selectedColumnIndex() {
        if (!this.selectedTime || "hours" !== this.timeHeaderMode || !this.visibleHourlyHeaders.length) return null;
        const $ = Ye => {
            const Tt = Ye.trim().split(":"),
              ai = parseInt(Tt[0], 10),
              Zi = Tt[1] ? parseInt(Tt[1], 10) : 0;
            return ai.toString().padStart(2, "0") + ":" + Zi.toString().padStart(2, "0");
          },
          k = $(this.selectedTime),
          ce = this.visibleHourlyHeaders.findIndex(Ye => $(Ye) === k);
        return ce >= 0 ? ce + 1 : null;
      }
    };
  let yu = Gh;
  Gh.ɵfac = function (k) {
    return new (k || Gh)(n.Y36(n.sBO));
  }, Gh.ɵcmp = n.Xpm({
    type: Gh,
    selectors: [["pill-issuing-table-header"]],
    hostVars: 2,
    hostBindings: function (k, ce) {
      2 & k && n.Udp("--grid-template-columns", ce.gridTemplateColumns);
    },
    inputs: {
      gridTemplateColumns: "gridTemplateColumns",
      timeHeaderMode: "timeHeaderMode",
      selectedPeriod: "selectedPeriod",
      allHourlyHeaders: "allHourlyHeaders",
      groupingMode: "groupingMode",
      selectedTime: "selectedTime",
      visibleHourlyHeaders: "visibleHourlyHeaders"
    },
    outputs: {
      hourlyHeaderClick: "hourlyHeaderClick",
      chunkIndexChange: "chunkIndexChange",
      timeHeaderSelected: "timeHeaderSelected"
    },
    features: [n.TTD],
    decls: 20,
    vars: 11,
    consts: [[1, "table-header", 3, "ngClass"], [1, "table-header__cell"], [4, "ngIf"], [1, "table-header__cell", "table-header__cell--time-slots", "table-header__cell--fixed-right", 3, "ngClass"], [1, "table-header__resize-handle"], [4, "ngIf", "ngIfElse"], ["showAllPeriods", ""], ["hourlyView", ""], [1, "table-header__time-periods", "table-header__time-periods--single"], [1, "table-header__time-period-item"], [1, "table-header__time-periods"], [1, "table-header__time-period-item", "table-header__time-period-item--night"], [1, "table-header__hourly-view"], [1, "table-header__hourly-nav", "table-header__hourly-nav--left", 3, "disabled", "click"], [1, "table-header__hourly-tabs-wrapper"], [1, "table-header__hourly-tabs"], ["class", "table-header__hourly-tab", 3, "id", "active", "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-header__hourly-nav", "table-header__hourly-nav--right", 3, "disabled", "click"], [1, "table-header__hourly-tab", 3, "id", "click"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n._uU(2, "Признак / Наименование"), n.qZA(), n.TgZ(3, "div", 1), n._uU(4, "Торговое наименование"), n.qZA(), n.YNc(5, Nm, 3, 0, "ng-container", 2), n.TgZ(6, "div", 1), n._uU(7, "Доза приема"), n.qZA(), n.TgZ(8, "div", 1), n._uU(9, "Способ введения"), n.qZA(), n.TgZ(10, "div", 1), n._uU(11, "Кратность"), n.qZA(), n.YNc(12, bf, 3, 0, "ng-container", 2), n.TgZ(13, "div", 3), n._UZ(14, "div", 4), n.YNc(15, k0, 2, 2, "ng-container", 5), n.YNc(16, tm, 9, 0, "ng-template", null, 6, n.W1O), n.YNc(18, Dl, 8, 6, "ng-template", null, 7, n.W1O), n.qZA()()), 2 & k) {
        const Ye = n.MAs(19);
        n.Q6J("ngClass", n.WLB(6, dg, "byPatient" === ce.groupingMode, "byMedicament" === ce.groupingMode)), n.xp6(5), n.Q6J("ngIf", "byMedicament" === ce.groupingMode), n.xp6(7), n.Q6J("ngIf", "byPatient" === ce.groupingMode), n.xp6(1), n.Q6J("ngClass", n.VKq(9, kd, !!ce.periodLabel)), n.xp6(2), n.Q6J("ngIf", "periods" === ce.timeHeaderMode)("ngIfElse", Ye);
      }
    },
    dependencies: [Di.mk, Di.sg, Di.O5],
    styles: ["[_nghost-%COMP%]{display:block;width:100%;overflow:hidden;--table-header-text-muted: #999999;--table-header-border-dark: #cbd5e0;--table-header-brand-color: #3182ce;--table-header-height: 40px}.table-header-by-patient[_ngcontent-%COMP%]{grid-template-columns:272px 304px 164px 196px 206px 164px auto}.table-header-by-medicament[_ngcontent-%COMP%]{grid-template-columns:344px 280px 124px 164px 184px 226px auto}.table-header[_ngcontent-%COMP%]{display:grid;column-gap:24px;width:100%;height:var(--table-header-height);background-color:#fff;border-bottom:1px solid #E5E5E5;z-index:2}.table-header__cell[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:var(--table-header-text-muted);display:flex;align-items:center;white-space:nowrap;padding:0}.table-header__cell[_ngcontent-%COMP%]:first-child{padding-left:24px}.table-header__cell[_ngcontent-%COMP%]:last-child{width:var(--time-column-width, 366px)}.table-header__cell--time-slots[_ngcontent-%COMP%]{overflow:visible;padding:0}.table-header__cell--time-slots--single[_ngcontent-%COMP%]{width:126px;justify-self:end!important}.table-header__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;right:0;min-width:var(--time-column-width, 366px);z-index:10;background-color:#fff;display:flex;align-items:center;overflow:visible;border-bottom:1px solid #E5E5E5;justify-self:end}.table-header__time-periods[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(4,66px);align-content:center;justify-content:center;gap:16px;height:100%;max-width:var(--time-column-width)}.table-header__time-periods[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{text-align:start}.table-header__time-periods--single[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:center;justify-content:end;width:126px}.table-header__time-period-item[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:var(--table-header-text-muted);text-align:center;white-space:nowrap;width:64px;min-width:64px}.table-header__hourly-view[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;max-width:var(--time-column-width)}.table-header__hourly-nav[_ngcontent-%COMP%]{flex-shrink:0;background:transparent;border:1px solid var(--table-header-border-dark);border-radius:50%;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--table-header-text-muted);transition:all .2s ease}.table-header__hourly-nav[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--table-header-brand-color);border-color:var(--table-header-brand-color);color:#fff}.table-header__hourly-nav[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}.table-header__hourly-tabs-wrapper[_ngcontent-%COMP%]{overflow:hidden;flex-grow:1}.table-header__hourly-tabs[_ngcontent-%COMP%]{display:grid;width:100%;height:100%}.table-header__hourly-tab[_ngcontent-%COMP%]{text-align:center;padding:10px 5px;font-size:15px;color:#888;cursor:pointer;background-color:transparent;border-bottom:3px solid transparent;transition:color .5s ease,border-color .7s ease;font-weight:500;white-space:nowrap}.table-header__hourly-tab[_ngcontent-%COMP%]:hover{color:#333}.table-header__hourly-tab.active[_ngcontent-%COMP%]{color:#222;font-weight:600;border-bottom-color:#333}.table-header__hourly-tab.selected[_ngcontent-%COMP%]{color:#333;font-weight:600;border-radius:4px 4px 0 0}"],
    changeDetection: 0
  });
  const R0 = ["methodCell"];
  function _h(Te, $) {
    if (1 & Te && (n._UZ(0, "span", 15), n.ALo(1, "highlight")), 2 & Te) {
      const k = n.oxw();
      n.Q6J("innerHTML", n.xi3(1, 1, null == k.medicine ? null : k.medicine.name, k.searchTerm), n.oJD);
    }
  }
  function T_(Te, $) {
    1 & Te && n._uU(0, "—");
  }
  function Zg(Te, $) {
    if (1 & Te && (n._UZ(0, "span", 15), n.ALo(1, "highlight")), 2 & Te) {
      const k = n.oxw();
      n.Q6J("innerHTML", n.xi3(1, 1, null == k.medicine ? null : k.medicine.tradeName, k.searchTerm), n.oJD);
    }
  }
  function F0(Te, $) {
    1 & Te && n._uU(0, "—");
  }
  function E_(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = $.$implicit;
      n.xp6(1), n.Oqu(k);
    }
  }
  function N0(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 16), n._uU(1, "..."), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.Q6J("luTooltip", k.tooltipMessage);
    }
  }
  function pg(Te, $) {
    if (1 & Te && (n.TgZ(0, "div"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Oqu(k.frequency);
    }
  }
  function D_(Te, $) {
    1 & Te && n._uU(0, "—");
  }
  const dm = class {
    constructor() {
      this.medicine = null, this.searchTerm = "", this.isShowTooltip = !1, this.cdr = (0, n.f3M)(n.sBO);
    }
    get medicineMethodItems() {
      return [this.medicine?.method ?? "—", this.medicine?.methodNotes ?? null, this.medicine?.indicationsForUse ? `\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e: ${this.medicine?.indicationsForUse}` : null, this.medicine?.comment ? `\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: ${this.medicine?.comment}` : null];
    }
    get tooltipMessage() {
      return this.medicineMethodItems.filter($ => $).join("\n");
    }
    ngAfterViewInit() {
      const $ = this.methodCell.nativeElement;
      this.isShowTooltip = $.scrollHeight > $.clientHeight, this.cdr.detectChanges();
    }
    get frequency() {
      const $ = this.medicine.frequency;
      return this.medicine?.permanently ? `${$}, \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e` : $;
    }
  };
  let Kd = dm;
  function U0(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 8), 2 & Te && n.Q6J("size", 24);
  }
  function nm(Te, $) {
    1 & Te && n._UZ(0, "lu-svg-icon", 9), 2 & Te && n.Q6J("size", 24);
  }
  function wu(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 5), n.YNc(1, U0, 1, 1, "lu-svg-icon", 6), n.YNc(2, nm, 1, 1, "lu-svg-icon", 7), n._uU(3), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Q6J("ngIf", 1 === (null == k.patient ? null : k.patient.sex)), n.xp6(1), n.Q6J("ngIf", 2 === (null == k.patient ? null : k.patient.sex)), n.xp6(1), n.hij(" ", null == k.patient ? null : k.patient.age, " ");
    }
  }
  function Su(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 10), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Oqu(null == k.patient ? null : k.patient.historyNumber);
    }
  }
  function wf(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 10), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Oqu(null == k.patient ? null : k.patient.ward);
    }
  }
  function Yg(Te, $) {
    if (1 & Te && (n.TgZ(0, "span", 11), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw();
      n.xp6(1), n.Oqu(null == k.patient ? null : k.patient.insurance);
    }
  }
  dm.ɵfac = function (k) {
    return new (k || dm)();
  }, dm.ɵcmp = n.Xpm({
    type: dm,
    selectors: [["app-list-ptient"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(R0, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.methodCell = Ye.first);
      }
    },
    inputs: {
      medicine: "medicine",
      searchTerm: "searchTerm"
    },
    decls: 21,
    vars: 10,
    consts: [[1, "medicine-details__cell", "medicine-details__cell--name"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["emptyName", ""], [1, "medicine-details__cell", "medicine-details__cell--trade-name"], ["emptyTradeName", ""], [1, "medicine-details__cell", "medicine-details__dosage"], [1, "medicine-details__cell", "medicine-details__method"], [1, "method-panel"], ["methodCell", ""], [4, "ngFor", "ngForOf"], [3, "luTooltip", 4, "ngIf"], [1, "medicine-details__cell", "medicine-details__frequency"], [4, "ngIf", "ngIfElse"], [1, "medicine-details__cell", "medicine-details__doctor"], ["emptyCell", ""], [3, "innerHTML"], [3, "luTooltip"]],
    template: function (k, ce) {
      if (1 & k && (n.TgZ(0, "div", 0), n.YNc(1, _h, 2, 4, "span", 1), n.YNc(2, T_, 1, 0, "ng-template", null, 2, n.W1O), n.qZA(), n.TgZ(4, "div", 3), n.YNc(5, Zg, 2, 4, "span", 1), n.YNc(6, F0, 1, 0, "ng-template", null, 4, n.W1O), n.qZA(), n.TgZ(8, "div", 5), n._uU(9), n.qZA(), n.TgZ(10, "div", 6)(11, "div", 7, 8), n.YNc(13, E_, 2, 1, "span", 9), n.qZA(), n.YNc(14, N0, 2, 1, "span", 10), n.qZA(), n.TgZ(15, "div", 11), n.YNc(16, pg, 2, 1, "div", 12), n.qZA(), n.TgZ(17, "div", 13), n._uU(18), n.qZA(), n.YNc(19, D_, 1, 0, "ng-template", null, 14, n.W1O)), 2 & k) {
        const Ye = n.MAs(3),
          Tt = n.MAs(7),
          ai = n.MAs(20);
        n.xp6(1), n.Q6J("ngIf", null == ce.medicine ? null : ce.medicine.name)("ngIfElse", Ye), n.xp6(4), n.Q6J("ngIf", null == ce.medicine ? null : ce.medicine.tradeName)("ngIfElse", Tt), n.xp6(4), n.hij(" ", (null == ce.medicine ? null : ce.medicine.dosage) || "—", "\n"), n.xp6(4), n.Q6J("ngForOf", ce.medicineMethodItems), n.xp6(1), n.Q6J("ngIf", ce.isShowTooltip), n.xp6(2), n.Q6J("ngIf", null == ce.medicine ? null : ce.medicine.frequency)("ngIfElse", ai), n.xp6(2), n.hij(" ", (null == ce.medicine ? null : ce.medicine.doctor) || "—", "\n");
      }
    },
    dependencies: [Di.sg, Di.O5, fd.$, ms.S],
    styles: ["[_nghost-%COMP%]{display:contents}.medicine-details__cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:12px 0;min-height:var(--dosing-medications-row-height, 64px);white-space:normal;overflow-wrap:break-word;line-height:1.5;font-size:15px}.medicine-details__cell[_ngcontent-%COMP%]:first-child{padding-left:24px}.medicine-details__cell__sub-line[_ngcontent-%COMP%]{font-size:12px;color:var(--dosing-medications-text-muted, #718096);margin-top:4px}.medicine-details__method[_ngcontent-%COMP%]   .method-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:90px;overflow:hidden}@media (max-width: 992px){.medicine-details__cell[_ngcontent-%COMP%]{padding:10px 8px;font-size:13px}}[_nghost-%COMP%]     .search-highlight, [_nghost-%COMP%]     mark.search-highlight{background-color:#fff199;color:inherit;padding:0;border-radius:2px}"],
    changeDetection: 0
  });
  const Uf = class {
    constructor() {
      this.patient = null, this.searchTerm = "", this.compact = !1;
    }
  };
  let Wg = Uf;
  function P_(Te, $) {
    if (1 & Te && n._UZ(0, "div", 7), 2 & Te) {
      const k = n.oxw(2);
      n.Udp("left", "calc(39px + (100% - 72px) / " + k.gridColumnsCount + " * " + (k.selectedColumnIndex - 1) + ")")("width", "calc((100% - 126px) / " + k.gridColumnsCount + ")");
    }
  }
  function H0(Te, $) {
    if (1 & Te && n._UZ(0, "div", 17), 2 & Te) {
      const k = n.oxw(3);
      n.Udp("left", "calc(39px + (100% - 72px) / " + k.gridColumnsCount + " * " + (k.selectedColumnIndex - 1) + ")")("width", "calc((100% - 126px) / " + k.gridColumnsCount + ")");
    }
  }
  function B0(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 19)(1, "div", 20), n.NdJ("click", function () {
        n.CHM(k);
        const Ye = n.oxw(2).$implicit,
          Tt = n.MAs(8),
          ai = n.oxw().$implicit,
          Zi = n.oxw();
        return n.KtG(Zi.onGiveAllClick(Ye, ai, Tt));
      }), n._UZ(2, "lu-svg-icon", 21), n.TgZ(3, "span"), n._uU(4, "Выдать все медикаменты"), n.qZA()()();
    }
    2 & Te && (n.xp6(2), n.Q6J("size", 24));
  }
  function Um(Te, $) {
    1 & Te && (n.ynx(0), n.YNc(1, B0, 5, 1, "div", 18), n.BQk());
  }
  Uf.ɵfac = function (k) {
    return new (k || Uf)();
  }, Uf.ɵcmp = n.Xpm({
    type: Uf,
    selectors: [["app-patient-info"]],
    inputs: {
      patient: "patient",
      searchTerm: "searchTerm",
      compact: "compact"
    },
    decls: 7,
    vars: 10,
    consts: [[1, "patient-info"], [1, "patient-info__name", 3, "innerHTML"], ["class", "patient-info__age", 4, "ngIf"], ["lu-text", "", "class", "patient-info__meta", 4, "ngIf"], ["lu-text", "", "class", "patient-info__meta patient-info__meta--tag", 4, "ngIf"], [1, "patient-info__age"], ["class", "icon-male", "icon", "male2", 3, "size", 4, "ngIf"], ["class", "icon-female", "icon", "female2", 3, "size", 4, "ngIf"], ["icon", "male2", 1, "icon-male", 3, "size"], ["icon", "female2", 1, "icon-female", 3, "size"], ["lu-text", "", 1, "patient-info__meta"], ["lu-text", "", 1, "patient-info__meta", "patient-info__meta--tag"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0), n._UZ(1, "span", 1), n.ALo(2, "highlight"), n.YNc(3, wu, 4, 3, "span", 2), n.YNc(4, Su, 2, 1, "span", 3), n.YNc(5, wf, 2, 1, "span", 3), n.YNc(6, Yg, 2, 1, "span", 4), n.qZA()), 2 & k && (n.ekj("patient-info--compact", ce.compact), n.xp6(1), n.Q6J("innerHTML", n.xi3(2, 7, null == ce.patient ? null : ce.patient.name, ce.searchTerm), n.oJD), n.xp6(2), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.age), n.xp6(1), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.historyNumber), n.xp6(1), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.ward), n.xp6(1), n.Q6J("ngIf", null == ce.patient ? null : ce.patient.insurance));
    },
    dependencies: [Di.O5, Ci.q, Kt.NZ, ms.S],
    styles: ["[_nghost-%COMP%]{display:block;flex-shrink:0}.patient-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px 20px;width:max-content}.patient-info--compact[_ngcontent-%COMP%]{gap:4px 12px}.patient-info[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-flex;align-items:center;white-space:nowrap}.patient-info[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child):before{content:\"\";display:inline-block;width:1px;height:15px;background-color:#ccc;margin:0 8px 0 5px}.patient-info__name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-style:normal;font-weight:600;font-size:15px;white-space:pre-wrap!important;line-height:24px}.patient-info__age[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:15px;font-weight:400;color:#333;line-height:22px}.patient-info__meta[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#333;line-height:24px}.patient-info__meta--tag[_ngcontent-%COMP%]{background-color:transparent}.icon-female[_ngcontent-%COMP%]{--lu-svg-icon-color: #FF88C1}.icon-male[_ngcontent-%COMP%]{--lu-svg-icon-color: #67BDE3}"],
    changeDetection: 0
  });
  const Mf = function (Te) {
    return {
      "dosing-by-patient__cell--time-slots--single": Te
    };
  };
  function Tf(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 8, 9)(3, "app-list-ptient", 10), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw().$implicit,
          Po = n.oxw();
        return n.KtG(Po.onLeftClick(Ye, ai, Zi));
      })("contextmenu", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.MAs(8),
          Po = n.MAs(2),
          fo = n.oxw(2);
        return n.KtG(fo.onRightClick(Ye, ai, Zi, Po));
      }), n.qZA(), n.TgZ(4, "div", 11), n.YNc(5, H0, 1, 4, "div", 12), n.TgZ(6, "time-slots", 13), n.NdJ("action", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw().$implicit,
          Po = n.oxw();
        return n.KtG(Po.forwardSlotActionToParent(Zi.id, ai, Ye));
      }), n.qZA()(), n.TgZ(7, "lu-dropdown", 14, 15), n.YNc(9, Um, 2, 0, "ng-container", 16), n.qZA()(), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = $.index,
        Ye = n.oxw().index,
        Tt = n.oxw();
      n.xp6(1), n.ekj("is-new", k.isNew), n.xp6(2), n.Q6J("medicine", k)("searchTerm", Tt.searchTerm), n.xp6(1), n.Q6J("ngClass", n.VKq(16, Mf, !!Tt.selectedPeriod)), n.xp6(1), n.Q6J("ngIf", null !== Tt.selectedColumnIndex && "hours" === Tt.timeHeaderMode), n.xp6(1), n.Q6J("ngStyle", Tt.columnStyle)("slots", k.slots)("mode", "issuing")("timeHeaderMode", Tt.timeHeaderMode)("hourlyHeaders", Tt.allHourlyHeaders)("visibleHeaders", Tt.visibleHourlyHeaders)("filterPeriod", Tt.selectedPeriod)("isBaseTherapy", k.base), n.xp6(1), n.Q6J("positions", Tt.getDropdownPosition(Ye, ce)), n.xp6(2), n.Q6J("ngIf", Tt.isGiveAllAllowed(k));
    }
  }
  const Ef = function (Te, $, k, ce, Ye, Tt) {
    return {
      name: Te,
      sex: $,
      age: k,
      historyNumber: ce,
      ward: Ye,
      insurance: Tt
    };
  };
  function zg(Te, $) {
    if (1 & Te && (n.ynx(0), n.TgZ(1, "div", 2)(2, "div", 3), n._UZ(3, "app-patient-info", 4), n.qZA(), n.TgZ(4, "div", 5), n.YNc(5, P_, 1, 4, "div", 6), n.qZA()(), n.YNc(6, Tf, 10, 18, "ng-container", 1), n.BQk()), 2 & Te) {
      const k = $.$implicit,
        ce = n.oxw();
      n.xp6(3), n.Q6J("patient", n.HTZ(7, Ef, k.name, k.sex, k.age, k.historyNumber, k.ward, k.insurance))("searchTerm", ce.searchTerm), n.xp6(1), n.ekj("dosing-by-patient__patient-group-sticky--hours", "hours" === ce.timeHeaderMode), n.xp6(1), n.Q6J("ngIf", null !== ce.selectedColumnIndex && "hours" === ce.timeHeaderMode), n.xp6(1), n.Q6J("ngForOf", ce.groupMedsById(k.medicines))("ngForTrackBy", ce.trackByMedicine);
    }
  }
  let Df = ((th = class {
    get selectedColumnIndexCss() {
      return null !== this.selectedColumnIndex ? this.selectedColumnIndex.toString() : null;
    }
    get gridColumnsCountCss() {
      return this.gridColumnsCount.toString();
    }
    constructor($, k, ce, Ye, Tt, ai, Zi) {
      this.modalHelper = $, this.viewContainerRef = k, this.patientDataService = ce, this.store = Ye, this.cdr = Tt, this.el = ai, this.activeMedicamentsModuleService = Zi, this.gridTemplateColumns = "307px 328px 188px 184px 230px 205px 362px", this.patientData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.visibleHourlyHeaders = [], this.selectedPeriod = null, this.selectedTime = null, this.selectedColumnIndex = null, this.gridColumnsCount = 6, this.searchTerm = "", this.loadingFlag = !1, this.hasMoreData = !0, this.onLoadMore = () => {}, this.slotAction = new n.vpe(), this._timeColumnWidthValue = ml.TIME_COLUMN_WIDTH_PERIODS, this.columnStyle = {}, this.activeArm = null, this.loadMoreItems = () => {
        this.onLoadMore();
      }, this.groupMedsById = gt, this.activeArm = this.activeMedicamentsModuleService.activeArm;
    }
    forwardSlotActionToParent($, k, ce) {
      this.slotAction.emit({
        patientId: $,
        medicineId: k.id,
        slot: ce.slot,
        action: ce.action,
        isBaseTherapy: k.base,
        isOnHand: k.onHand
      });
    }
    ngOnChanges($) {
      ((0, ri.up)($.patientData) || (0, ri.up)($.timeHeaderMode)) && setTimeout(() => {
        this.columnStyle = {
          width: this._timeColumnWidth,
          "min-width": this._timeColumnWidth
        }, this.cdr.markForCheck();
      }, 0);
    }
    get _timeColumnWidth() {
      if ("periods" === this.timeHeaderMode) {
        const $ = this.el?.nativeElement,
          ce = ml.TIME_COLUMN_WIDTH_PERIODS;
        return $ && $?.scrollHeight > $?.clientHeight ? ce - 14 + "px" : `${ce}px`;
      }
      return `${ml.TIME_COLUMN_WIDTH_HOURS}px`;
    }
    isGiveAllAllowed($) {
      return !$.slots.every(k => ["SYSTEMATICALLY", "COMPLETED"].includes(k.status)) && !$.base;
    }
    onLeftClick($, k, ce) {
      0 === $.button && this.modalHelper.openPresenterModal(k, ce, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
    }
    onRightClick($, k, ce, Ye) {
      $.preventDefault(), $.stopPropagation(), "injections" !== this.activeArm && 2 === $.button && ce && Ye && ce.open(Ye);
    }
    getDropdownPosition($, k) {
      return this.patientData.length === $ + 1 && k + 1 === this.patientData[$].medicines.length ? ["top-center"] : ["bottom-center"];
    }
    onGiveAllClick($, k, ce) {
      this.getModalData(k.id, $.id).pipe((0, Xn.t)(this), (0, ut.w)(Ye => {
        const Tt = {
          ...Ye,
          slots: $.slots,
          context: "issuing",
          stockMedications: this.patientDataService.getAllStockMedications(),
          assignedMedications: this.patientDataService.getAssignedMedicationsForPatient(k.id)
        };
        return this.modalHelper.openWritingOffDialogWithData(Tt, this.viewContainerRef);
      })).subscribe(), ce.close();
    }
    trackByPatient($, k) {
      return k.id;
    }
    trackByMedicine($, k) {
      return k.id;
    }
    getModalData($, k, ce = null) {
      return this.patientDataService.getModalDataForPatientAndMedicine($, k, ce).pipe((0, M.h)(Ye => !!Ye || (this.store.dispatch(G({
        message: "Не удалось загрузить данные для модального окна"
      })), !1)), (0, Go.K)(() => (this.store.dispatch(G({
        message: "Ошибка при загрузке данных"
      })), Pu.E)));
    }
  }).ɵfac = function (k) {
    return new (k || th)(n.Y36(Ya), n.Y36(n.s_b), n.Y36(wr), n.Y36(t.yh), n.Y36(n.sBO), n.Y36(n.SBq), n.Y36(Yo.w));
  }, th.ɵcmp = n.Xpm({
    type: th,
    selectors: [["pill-dosing-by-patient"]],
    hostVars: 6,
    hostBindings: function (k, ce) {
      2 & k && n.Udp("--grid-template-columns", ce.gridTemplateColumns)("--selected-column-index", ce.selectedColumnIndexCss)("--grid-columns-count", ce.gridColumnsCountCss);
    },
    inputs: {
      gridTemplateColumns: "gridTemplateColumns",
      patientData: "patientData",
      timeHeaderMode: "timeHeaderMode",
      allHourlyHeaders: "allHourlyHeaders",
      visibleHourlyHeaders: "visibleHourlyHeaders",
      selectedPeriod: "selectedPeriod",
      selectedTime: "selectedTime",
      selectedColumnIndex: "selectedColumnIndex",
      gridColumnsCount: "gridColumnsCount",
      searchTerm: "searchTerm",
      loadingFlag: "loadingFlag",
      hasMoreData: "hasMoreData",
      onLoadMore: "onLoadMore"
    },
    outputs: {
      slotAction: "slotAction"
    },
    features: [n.TTD],
    decls: 2,
    vars: 6,
    consts: [[3, "onEndReached", "listItems", "isLoading", "hasMore"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dosing-by-patient__patient-group-wrapper"], [1, "dosing-by-patient__patient-group"], [3, "patient", "searchTerm"], [1, "dosing-by-patient__patient-group-sticky"], ["class", "dosing-by-patient__patient-group-highlight", 3, "left", "width", 4, "ngIf"], [1, "dosing-by-patient__patient-group-highlight"], ["luDropdownOrigin", "", 1, "dosing-by-patient__row"], ["origin", "luDropdownOrigin"], [3, "medicine", "searchTerm", "click", "contextmenu"], [1, "dosing-by-patient__cell", "dosing-by-patient__cell--time-slots", "dosing-by-patient__cell--fixed-right", 3, "ngClass"], ["class", "dosing-by-patient__column-highlight", 3, "left", "width", 4, "ngIf"], [1, "dosing-by-patient__cell--time-slots", 3, "ngStyle", "slots", "mode", "timeHeaderMode", "hourlyHeaders", "visibleHeaders", "filterPeriod", "isBaseTherapy", "action"], ["panelClass", "custom-menu-dropdown", 3, "positions"], ["rowDropdown", ""], [4, "ngIf"], [1, "dosing-by-patient__column-highlight"], ["class", "custom-menu-container", 4, "luOverlayContent"], [1, "custom-menu-container"], [1, "menu-item", 3, "click"], ["icon", "mark-done", 3, "size"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "infinity-scroll-container", 0), n.YNc(1, zg, 7, 14, "ng-container", 1), n.qZA()), 2 & k && (n.Q6J("onEndReached", ce.loadMoreItems)("listItems", ce.patientData)("isLoading", ce.loadingFlag)("hasMore", ce.hasMoreData), n.xp6(1), n.Q6J("ngForOf", ce.patientData)("ngForTrackBy", ce.trackByPatient));
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Di.PC, _r.$, Ci.q, js.n, Ts.o, yf, Wu, Kd, Wg],
    styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;--dosing-text-primary: #2d3748;--dosing-border-light: #e2e8f0;--dosing-row-hover-bg: #ECF6FB;--dosing-row-height: 47px}.dosing-by-patient__patient-group[_ngcontent-%COMP%]{grid-column:1/-2;margin-left:8px;margin-top:8px;border-radius:3px;height:32px;width:-moz-fit-content;width:fit-content;padding:4px 16px;background-color:#e6e6e6;display:flex;align-items:center;gap:8px 20px;position:sticky;left:0;z-index:11}.dosing-by-patient__patient-group-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:var(--grid-template-columns);column-gap:24px;width:100%;position:relative;z-index:10}.dosing-by-patient__patient-group-sticky[_ngcontent-%COMP%]{grid-column:-2/-1;position:sticky;right:0;width:-moz-fit-content!important;width:fit-content!important;min-width:auto!important;max-width:none!important;padding:0;z-index:20;background-color:#f2f2f2!important;box-sizing:border-box;overflow:hidden!important}.dosing-by-patient__patient-group-highlight[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;background-color:#0000000a;pointer-events:none;z-index:0;width:88px!important}.dosing-by-patient__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:272px 304px 164px 196px 206px 164px auto;column-gap:24px;width:100%;min-height:var(--dosing-row-height);border-bottom:1px solid var(--dosing-border-light);background-color:#fff;position:relative;z-index:1}.dosing-by-patient__row[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--dosing-row-hover-bg);z-index:2}.dosing-by-patient__row[_ngcontent-%COMP%]:hover   .dosing-by-patient__cell--fixed-right[_ngcontent-%COMP%]{background-color:var(--dosing-row-hover-bg)}.dosing-by-patient__row.is-new[_ngcontent-%COMP%], .dosing-by-patient__row.is-new[_ngcontent-%COMP%]   .dosing-by-patient__cell--fixed-right[_ngcontent-%COMP%]{background-color:#fff8cc}.dosing-by-patient__cell[_ngcontent-%COMP%]{padding:0 0 0 24px;display:flex;flex-direction:column;justify-content:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dosing-by-patient__cell--time-slots[_ngcontent-%COMP%]{max-width:var(--time-column-width);overflow:visible;padding:0;justify-self:end}.dosing-by-patient__cell--time-slots--single[_ngcontent-%COMP%]{width:126px;justify-self:end!important}.dosing-by-patient__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;padding:0;justify-content:flex-start;right:0;width:100%;z-index:10;background-color:#fff;display:flex;justify-self:flex-end}.dosing-by-patient__column-highlight[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;background-color:#0000000a;pointer-events:none;z-index:0;width:88px!important}[_nghost-%COMP%]     .infinity-scroll{height:auto!important;max-height:none!important;overflow:visible!important}.custom-menu-dropdown[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014}.custom-menu-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:10px 18px;font-size:15px;color:#333;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .12s,color .12s;border-radius:4px}.menu-item[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:focus-visible{background-color:#f7f4fd;color:#333}.menu-item[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{flex-shrink:0;display:block}"],
    changeDetection: 0
  }), th);
  Df = (0, Se.gn)([(0, Xn.c)()], Df);
  var im = i(24624);
  function zu(Te, $) {
    if (1 & Te && n._UZ(0, "div", 9), 2 & Te) {
      const k = n.oxw(2);
      n.Udp("left", "calc(39px + (100% - 72px) / " + k.gridColumnsCount + " * " + (k.selectedColumnIndex - 1) + ")")("width", "calc((100% - 102px) / " + k.gridColumnsCount + ")");
    }
  }
  function Fh(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.hij(" ", k.methodNotes, " ");
    }
  }
  function hg(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.hij(" Показания к применению: ", k.indicationsForUse, " ");
    }
  }
  function O_(Te, $) {
    if (1 & Te && (n.TgZ(0, "span"), n._uU(1), n.qZA()), 2 & Te) {
      const k = n.oxw().$implicit;
      n.xp6(1), n.hij(" Примечание: ", k.comment, " ");
    }
  }
  function Gg(Te, $) {
    if (1 & Te && n._UZ(0, "div", 9), 2 & Te) {
      const k = n.oxw(4);
      n.Udp("left", "calc(39px + (100% - 72px) / " + k.gridColumnsCount + " * " + (k.selectedColumnIndex - 1) + ")")("width", "calc((100% - 102px) / " + k.gridColumnsCount + ")");
    }
  }
  const V0 = function (Te) {
    return {
      "dosing-by-medicament__cell--time-slots--single": Te
    };
  };
  function A_(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.TgZ(0, "div", 11), n.NdJ("click", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw(3);
        return n.KtG(Zi.onLeftClick(Ye, null == ai ? null : ai.medicine, ai.patient));
      }), n.TgZ(1, "div", 12), n._UZ(2, "span", 13), n.ALo(3, "highlight"), n.qZA(), n.TgZ(4, "div", 14), n._UZ(5, "span", 15), n.ALo(6, "highlight"), n.qZA(), n.TgZ(7, "div", 16), n._uU(8), n.qZA(), n.TgZ(9, "div", 16), n._uU(10), n.qZA(), n.TgZ(11, "div", 16)(12, "span"), n._uU(13), n.qZA(), n.YNc(14, Fh, 2, 1, "span", 8), n.YNc(15, hg, 2, 1, "span", 8), n.YNc(16, O_, 2, 1, "span", 8), n.qZA(), n.TgZ(17, "div", 16), n._uU(18), n.qZA(), n.TgZ(19, "div", 17), n.YNc(20, Gg, 1, 4, "div", 7), n.TgZ(21, "time-slots", 18), n.NdJ("action", function (Ye) {
        const ai = n.CHM(k).$implicit,
          Zi = n.oxw(3);
        return n.KtG(Zi.forwardSlotActionToParent(ai, Ye));
      }), n.qZA()()();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw(3);
      n.xp6(2), n.Q6J("innerHTML", n.xi3(3, 18, k.patientName, ce.searchTerm), n.oJD), n.xp6(3), n.Q6J("innerHTML", n.xi3(6, 21, k.tradeName, ce.searchTerm), n.oJD), n.xp6(3), n.Oqu(k.form || "—"), n.xp6(2), n.Oqu(k.dose), n.xp6(3), n.Oqu(k.method), n.xp6(1), n.Q6J("ngIf", k.methodNotes), n.xp6(1), n.Q6J("ngIf", k.indicationsForUse), n.xp6(1), n.Q6J("ngIf", k.comment), n.xp6(2), n.hij("", k.frequency || "—", " "), n.xp6(1), n.Q6J("ngClass", n.VKq(24, V0, !!ce.selectedPeriod)), n.xp6(1), n.Q6J("ngIf", null !== ce.selectedColumnIndex && "hours" === ce.timeHeaderMode), n.xp6(1), n.Q6J("slots", k.slots)("mode", "issuing")("timeHeaderMode", ce.timeHeaderMode)("hourlyHeaders", ce.allHourlyHeaders)("visibleHeaders", ce.visibleHourlyHeaders)("filterPeriod", ce.selectedPeriod)("isBaseTherapy", k.base);
    }
  }
  function fg(Te, $) {
    if (1 & Te && (n.ynx(0), n.YNc(1, A_, 22, 26, "div", 10), n.BQk()), 2 & Te) {
      const k = n.oxw().$implicit,
        ce = n.oxw();
      n.xp6(1), n.Q6J("ngForOf", k.value)("ngForTrackBy", ce.trackByPrescription);
    }
  }
  function Jp(Te, $) {
    if (1 & Te) {
      const k = n.EpF();
      n.ynx(0), n.TgZ(1, "div", 2), n.NdJ("click", function () {
        const Tt = n.CHM(k).$implicit,
          ai = n.oxw();
        return n.KtG(ai.toggleMedicamentGroup(Tt.key));
      }), n.TgZ(2, "div", 3), n._UZ(3, "lu-svg-icon", 4)(4, "span", 5), n.ALo(5, "highlight"), n.qZA(), n.TgZ(6, "div", 6), n.YNc(7, zu, 1, 4, "div", 7), n.qZA()(), n.YNc(8, fg, 2, 2, "ng-container", 8), n.BQk();
    }
    if (2 & Te) {
      const k = $.$implicit,
        ce = n.oxw();
      n.xp6(1), n.ekj("dosing-by-medicament__row--expanded", ce.expandedMedicines[k.key]), n.xp6(2), n.Q6J("luRotator", ce.rotatedStates[k.key]), n.xp6(1), n.ekj("dosing-by-medicament__group-name--expanded", ce.expandedMedicines[k.key]), n.Q6J("innerHTML", n.xi3(5, 8, k.key, ce.searchTerm), n.oJD), n.xp6(3), n.Q6J("ngIf", null !== ce.selectedColumnIndex && "hours" === ce.timeHeaderMode && ce.rotatedStates[k.key]), n.xp6(1), n.Q6J("ngIf", ce.expandedMedicines[k.key]);
    }
  }
  let Pl = (($h = class {
    get selectedColumnIndexCss() {
      return null !== this.selectedColumnIndex ? this.selectedColumnIndex.toString() : null;
    }
    get gridColumnsCountCss() {
      return this.gridColumnsCount.toString();
    }
    constructor($, k, ce) {
      this.cdr = $, this.modalHelper = k, this.viewContainerRef = ce, this.gridTemplateColumns = "320px 280px 124px 164px 184px 226px auto", this.medicamentData = null, this.timeHeaderMode = "periods", this.allHourlyHeaders = [], this.visibleHourlyHeaders = [], this.selectedPeriod = null, this.selectedTime = null, this.selectedColumnIndex = null, this.gridColumnsCount = 6, this.searchTerm = "", this.loadingFlag = !1, this.hasMoreData = !0, this.onLoadMore = () => {}, this.slotAction = new n.vpe(), this.expandedMedicines = {}, this.rotatedStates = {}, this.loadMoreItems = () => {
        this.onLoadMore();
      };
    }
    ngOnChanges() {}
    toggleMedicamentGroup($) {
      const k = this.expandedMedicines[$];
      this.expandedMedicines[$] = !k, this.rotatedStates[$] = !k, this.cdr.markForCheck();
    }
    forwardSlotActionToParent($, k) {
      this.slotAction.emit({
        patientId: $.patientId,
        medicineId: $.id,
        slot: k.slot,
        action: k.action,
        isBaseTherapy: $.base,
        isOnHand: $.onHand
      });
    }
    onLeftClick($, k, ce) {
      0 === $.button && this.modalHelper.openPresenterModal(k, ce, this.viewContainerRef).pipe((0, Xn.t)(this)).subscribe();
    }
    trackByGroupKey($, k) {
      return k.key;
    }
    trackByPrescription($, k) {
      return k.id;
    }
  }).ɵfac = function (k) {
    return new (k || $h)(n.Y36(n.sBO), n.Y36(Ya), n.Y36(n.s_b));
  }, $h.ɵcmp = n.Xpm({
    type: $h,
    selectors: [["pill-dosing-by-medicament"]],
    hostVars: 6,
    hostBindings: function (k, ce) {
      2 & k && n.Udp("--grid-template-columns", ce.gridTemplateColumns)("--selected-column-index", ce.selectedColumnIndexCss)("--grid-columns-count", ce.gridColumnsCountCss);
    },
    inputs: {
      gridTemplateColumns: "gridTemplateColumns",
      medicamentData: "medicamentData",
      timeHeaderMode: "timeHeaderMode",
      allHourlyHeaders: "allHourlyHeaders",
      visibleHourlyHeaders: "visibleHourlyHeaders",
      selectedPeriod: "selectedPeriod",
      selectedTime: "selectedTime",
      selectedColumnIndex: "selectedColumnIndex",
      gridColumnsCount: "gridColumnsCount",
      searchTerm: "searchTerm",
      loadingFlag: "loadingFlag",
      hasMoreData: "hasMoreData",
      onLoadMore: "onLoadMore"
    },
    outputs: {
      slotAction: "slotAction"
    },
    features: [n.TTD],
    decls: 4,
    vars: 10,
    consts: [[3, "onEndReached", "listItems", "isLoading", "hasMore"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dosing-by-medicament__row", "dosing-by-medicament__row--group", 3, "click"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--group-name"], ["icon", "chevron-right", 1, "dosing-by-medicament__chevron", 3, "luRotator"], [1, "dosing-by-medicament__group-name", 3, "innerHTML"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--fixed-right", "dosing-by-medicament__cell--hideable"], ["class", "dosing-by-medicament__column-highlight", 3, "left", "width", 4, "ngIf"], [4, "ngIf"], [1, "dosing-by-medicament__column-highlight"], ["class", "dosing-by-medicament__row dosing-by-medicament__row--patient", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dosing-by-medicament__row", "dosing-by-medicament__row--patient", 3, "click"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--patient"], [1, "dosing-by-medicament__patient-name", 3, "innerHTML"], [1, "dosing-by-medicament__cell"], [1, "dosing-by-medicament__text-size", 3, "innerHTML"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__text-size"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--time-slots", "dosing-by-medicament__cell--fixed-right", 3, "ngClass"], [1, "dosing-by-medicament__cell--time-slots", 3, "slots", "mode", "timeHeaderMode", "hourlyHeaders", "visibleHeaders", "filterPeriod", "isBaseTherapy", "action"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "infinity-scroll-container", 0), n.ALo(1, "keyvalue"), n.YNc(2, Jp, 9, 11, "ng-container", 1), n.ALo(3, "keyvalue"), n.qZA()), 2 & k && (n.Q6J("onEndReached", ce.loadMoreItems)("listItems", n.lcZ(1, 6, ce.medicamentData))("isLoading", ce.loadingFlag)("hasMore", ce.hasMoreData), n.xp6(2), n.Q6J("ngForOf", n.lcZ(3, 8, ce.medicamentData))("ngForTrackBy", ce.trackByGroupKey));
    },
    dependencies: [Di.mk, Di.sg, Di.O5, Ci.q, im.r, yf, Wu, Di.Nd, ms.S],
    styles: ["[_nghost-%COMP%]{display:block;width:100%;--dosing-text-primary: #333333;--dosing-text-secondary: #666666;--dosing-text-muted: #999999;--dosing-border-light: #e5e5e5;--dosing-row-hover-bg: #ecf6fb;--dosing-row-height: 48px;--dosing-chevron-color: #38A1D6}.dosing-by-medicament__text-size[_ngcontent-%COMP%]{font-size:15px!important}.dosing-by-medicament__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:344px 280px 124px 164px 184px 226px auto;column-gap:24px;width:100%;min-height:38px;border-bottom:1px solid var(--dosing-border-light);background-color:#fff;position:relative;z-index:1;align-items:center}.dosing-by-medicament__row[_ngcontent-%COMP%]:hover{background-color:var(--dosing-row-hover-bg);z-index:2}.dosing-by-medicament__row[_ngcontent-%COMP%]:hover     .slots-wrapper-grid{background-color:var(--dosing-row-hover-bg)}.dosing-by-medicament__row--group[_ngcontent-%COMP%]{cursor:pointer;background-color:#fff;border-bottom:none}.dosing-by-medicament__row--group[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:24px;right:var(--time-column-width, 366px);bottom:0;height:1px;background-color:var(--dosing-border-light);z-index:11;pointer-events:none}.dosing-by-medicament__row--group[_ngcontent-%COMP%]:hover{background-color:#fff}.dosing-by-medicament__row--group.dosing-by-medicament__row--expanded[_ngcontent-%COMP%]:after{display:none}.dosing-by-medicament__row--group.dosing-by-medicament__row--expanded[_ngcontent-%COMP%]   .dosing-by-medicament__cell--hideable[_ngcontent-%COMP%]:not(.dosing-by-medicament__cell--fixed-right){display:none}.dosing-by-medicament__row--group.dosing-by-medicament__row--expanded[_ngcontent-%COMP%]   .dosing-by-medicament__cell--fixed-right[_ngcontent-%COMP%]{grid-column:-2/-1;width:126px;justify-self:end!important}.dosing-by-medicament__row--patient[_ngcontent-%COMP%]{background-color:#fff;border-bottom:none}.dosing-by-medicament__row--patient[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:42px;right:0;bottom:0;height:1px;background-color:var(--dosing-border-light);z-index:11;pointer-events:none}.dosing-by-medicament__cell[_ngcontent-%COMP%]{padding:0;display:flex;overflow:hidden;text-overflow:ellipsis;font-family:Open Sans,sans-serif;font-size:13px;line-height:18px;color:var(--dosing-text-primary);height:100%;align-items:center}.dosing-by-medicament__cell[_ngcontent-%COMP%]:first-child{padding-left:24px}.dosing-by-medicament__cell--group-name[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:8px}.dosing-by-medicament__cell--patient[_ngcontent-%COMP%], .dosing-by-medicament__cell--patient[_ngcontent-%COMP%]:first-child{padding-left:72px}.dosing-by-medicament__cell--time-slots[_ngcontent-%COMP%]{width:100%;overflow:visible;padding:0}.dosing-by-medicament__cell--time-slots--single[_ngcontent-%COMP%]{width:126px;justify-self:end!important}.dosing-by-medicament__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;padding:0;justify-content:center;right:0;min-width:var(--time-column-width, 366px);z-index:10;background-color:#fff;display:flex;flex-direction:row;align-items:center;border-bottom:1px solid var(--dosing-border-light)}.dosing-by-medicament__column-highlight[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;background-color:#0000000a;pointer-events:none;z-index:0}.dosing-by-medicament__chevron[_ngcontent-%COMP%]{flex-shrink:0;width:16px;height:16px;--lu-svg-icon-color: var(--dosing-chevron-color);transition:transform .2s ease;cursor:pointer}.dosing-by-medicament__chevron[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #2C8DC4}.dosing-by-medicament__group-name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;font-size:15px;line-height:18px;color:var(--dosing-text-primary);padding:8px 0}.dosing-by-medicament__group-name--expanded[_ngcontent-%COMP%]{font-weight:600}.dosing-by-medicament__group-count[_ngcontent-%COMP%]{font-size:13px;color:var(--dosing-text-muted);margin-left:4px}.dosing-by-medicament__patient-name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;font-size:15px;line-height:18px;color:var(--dosing-text-primary)}.dosing-by-medicament__method-notes[_ngcontent-%COMP%]{display:block;font-size:12px;line-height:16px;color:var(--dosing-text-muted);white-space:normal;margin-top:2px}[_nghost-%COMP%]     .infinity-scroll{height:auto!important;max-height:none!important;overflow:visible!important}"],
    changeDetection: 0
  }), $h);
  Pl = (0, Se.gn)([(0, Xn.c)()], Pl);
  var mg = i(73922),
    Rd = i(9036);
  const Ym = class {};
  let Hm = Ym;
  Ym.ɵfac = function (k) {
    return new (k || Ym)();
  }, Ym.ɵmod = n.oAB({
    type: Ym
  }), Ym.ɵinj = n.cJS({
    imports: [Di.ez, vr.u5, vr.UX, mg.h.forRoot({
      assetsPath: "assets"
    }), Rd.W, qs.t, Di.ez, vr.u5, vr.UX, mg.h, qs.t, Rd.W]
  });
  var Fd = i(36337);
  const Ap = class {};
  let yc = Ap;
  Ap.ɵfac = function (k) {
    return new (k || Ap)();
  }, Ap.ɵmod = n.oAB({
    type: Ap
  }), Ap.ɵinj = n.cJS({
    imports: [Di.ez, Fd.y, Ks.W1, Ci.h]
  });
  const pm = class {};
  let Bm = pm;
  pm.ɵfac = function (k) {
    return new (k || pm)();
  }, pm.ɵmod = n.oAB({
    type: pm
  }), pm.ɵinj = n.cJS({
    imports: [Di.ez, ll, Fd.y, Ks.W1, Ci.h, Kt.aI]
  });
  var j0 = i(15861),
    td = i(90896),
    gg = i(15199);
  const Hv = ["BarcodeScanner"],
    Bv = {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: null,
        constraints: {
          width: {
            min: 640
          },
          height: {
            min: 480
          },
          aspectRatio: {
            min: 1,
            max: 2
          },
          facingMode: "environment"
        },
        singleChannel: !1
      },
      locator: {
        patchSize: "medium",
        halfSample: !0
      },
      locate: !0,
      numOfWorkers: 4,
      decoder: {
        readers: ["code_128_reader"]
      }
    },
    Y0 = ["code_128", "code_39", "code_39_vin", "ean", "ean_extended", "ean_8", "upc", "upc_e", "codabar", "i2of5", "2of5", "code_93"];
  function z0(Te) {
    if (!Y0.some($ => $ === Te)) throw new Error(`This barcode type '${Te}' is not valid.`);
  }
  function _g(Te) {
    return `${Te}_reader`;
  }
  let G0 = (() => {
      class Te {
        constructor() {
          this.maxWidth = "100%", this._valueChanges = new d.x(), this.valueChanges = new n.vpe(), this.started = new n.vpe(), this._started = !1, this._destroyed = new d.x(), this._valueChanges.pipe((0, b.R)(this._destroyed), (0, M.h)(k => {
            const ce = k.codeResult.decodedCodes.filter(Tt => void 0 !== Tt.error).map(Tt => Tt.error),
              Ye = this._getMedian(ce);
            return !this.errorFilter || !(this.errorFilter.median && Ye > this.errorFilter.median || this.errorFilter.threshold && ce.some(Tt => Tt > this.errorFilter.threshold));
          })).subscribe(k => {
            td.ImageDebug.drawPath(k.line, {
              x: "x",
              y: "y"
            }, td.canvas.ctx.overlay, {
              color: "red",
              lineWidth: 3
            }), this.valueChanges.next(k);
          });
        }
        set torch(k) {
          const ce = td.CameraAccess.getActiveTrack();
          ce && ce.applyConstraints({
            advanced: [{
              torch: k
            }]
          });
        }
        get _maxWidth() {
          return this.maxWidth ? `${this.maxWidth}` : "auto";
        }
        get _maxHeight() {
          return this.maxHeight ? `${this.maxHeight}` : "auto";
        }
        get isStarted() {
          return this._started;
        }
        ngOnDestroy() {
          this.stop(), this._destroyed.next(!0), this._destroyed.complete();
        }
        ngOnChanges() {
          this.restart();
        }
        _init() {
          return new Promise((k, ce) => {
            td.onProcessed(Ye => this.onProcessed(Ye)), td.onDetected(Ye => this.onDetected(Ye)), this.configQuagga = gg({}, this.config, Bv), this.configQuagga.inputStream.target = this.barcodeScanner.nativeElement, this.type && (this.configQuagga.decoder.readers = function W0(Te) {
              return "string" == typeof Te ? (z0(Te), [_g(Te)]) : Te.map($ => (z0($), _g($)));
            }(this.type)), this.deviceId && (this.configQuagga.inputStream.constraints.deviceId = this.deviceId), td.init(this.configQuagga, Ye => {
              if (Ye) return console.log(Ye), ce(Ye);
              k();
            });
          });
        }
        _getMedian(k) {
          k.sort((Ye, Tt) => Ye - Tt);
          const ce = Math.floor(k.length / 2);
          return k.length % 2 == 1 ? k[ce] : (k[ce - 1] + k[ce]) / 2;
        }
        start() {
          var k = this;
          return (0, j0.Z)(function* () {
            k._started || (yield k._init(), td.start(), k._started = !0, k.started.next(!0));
          })();
        }
        stop() {
          this._started && (td.stop(), this._started = !1, this.started.next(!1));
        }
        restart() {
          this._started && (this.stop(), this.start());
        }
        onProcessed(k) {
          const ce = td.canvas.ctx.overlay,
            Ye = td.canvas.dom.overlay;
          k && (k.boxes && (ce.clearRect(0, 0, parseInt(Ye.getAttribute("width"), 10), parseInt(Ye.getAttribute("height"), 10)), k.boxes.filter(Tt => Tt !== k.box).forEach(Tt => {
            td.ImageDebug.drawPath(Tt, {
              x: 0,
              y: 1
            }, ce, {
              color: "green",
              lineWidth: 2
            });
          })), k.box && td.ImageDebug.drawPath(k.box, {
            x: 0,
            y: 1
          }, ce, {
            color: "#00F",
            lineWidth: 2
          }));
        }
        onDetected(k) {
          this._valueChanges.next(k);
        }
      }
      return Te.ɵfac = function (k) {
        return new (k || Te)();
      }, Te.ɵcmp = n.Xpm({
        type: Te,
        selectors: [["barcode-scanner-livestream"]],
        viewQuery: function (k, ce) {
          if (1 & k && n.Gf(Hv, 5), 2 & k) {
            let Ye;
            n.iGM(Ye = n.CRH()) && (ce.barcodeScanner = Ye.first);
          }
        },
        inputs: {
          type: "type",
          deviceId: "deviceId",
          maxWidth: "maxWidth",
          maxHeight: "maxHeight",
          config: "config",
          errorFilter: "errorFilter",
          torch: "torch"
        },
        outputs: {
          valueChanges: "valueChanges",
          started: "started"
        },
        features: [n.TTD],
        decls: 4,
        vars: 13,
        consts: [[1, "scanner", 3, "hidden"], ["BarcodeScanner", ""], [1, "drawingBuffer"]],
        template: function (k, ce) {
          1 & k && (n.TgZ(0, "div", 0, 1), n._UZ(2, "video")(3, "canvas", 2), n.qZA()), 2 & k && (n.Udp("max-height", ce._maxHeight)("max-width", ce._maxWidth), n.Q6J("hidden", !ce.isStarted), n.xp6(2), n.Udp("max-height", ce._maxHeight)("max-width", ce._maxWidth), n.xp6(1), n.Udp("max-height", ce._maxHeight)("max-width", ce._maxWidth));
        },
        styles: [".scanner{position:relative}.scanner video,.scanner canvas{width:100%;height:100%}.scanner canvas.drawingBuffer{position:absolute;left:0;top:0}\n"],
        encapsulation: 2
      }), Te;
    })(),
    Vv = (() => {
      class Te {}
      return Te.ɵfac = function (k) {
        return new (k || Te)();
      }, Te.ɵmod = n.oAB({
        type: Te
      }), Te.ɵinj = n.cJS({
        imports: [Di.ez]
      }), Te;
    })();
  const cp = class {
    constructor() {
      this.barcodeValueEvent = new n.vpe();
    }
    ngAfterViewInit() {
      this.barcodeScanner.start();
    }
    onValueChanges($) {
      const k = +$.codeResult.code;
      k && this.barcodeValueEvent.emit(k);
    }
    onStarted($) {
      console.log($);
    }
  };
  let $g = cp;
  cp.ɵfac = function (k) {
    return new (k || cp)();
  }, cp.ɵcmp = n.Xpm({
    type: cp,
    selectors: [["barcode-scanner"]],
    viewQuery: function (k, ce) {
      if (1 & k && n.Gf(G0, 5), 2 & k) {
        let Ye;
        n.iGM(Ye = n.CRH()) && (ce.barcodeScanner = Ye.first);
      }
    },
    outputs: {
      barcodeValueEvent: "barcodeValueEvent"
    },
    standalone: !0,
    features: [n.jDz],
    decls: 2,
    vars: 0,
    consts: [[1, "barcode-scanner"], ["type", "code_128", 3, "valueChanges", "started"]],
    template: function (k, ce) {
      1 & k && (n.TgZ(0, "div", 0)(1, "barcode-scanner-livestream", 1), n.NdJ("valueChanges", function (Tt) {
        return ce.onValueChanges(Tt);
      })("started", function () {
        return null;
      }), n.qZA()());
    },
    dependencies: [Di.ez, Vv, G0],
    styles: [".barcode-scanner[_ngcontent-%COMP%]{width:640px;height:480px;display:flex;align-items:center;justify-content:center}"]
  });
  const Kh = class {};
  let Iu = Kh;
  Kh.ɵfac = function (k) {
    return new (k || Kh)();
  }, Kh.ɵmod = n.oAB({
    type: Kh
  }), Kh.ɵinj = n.cJS({
    imports: [Hm, vr.UX, Ed.f, Ci.h, lf.X, mp.LA, _r.J, $g, Ds.O, Bm, yc]
  });
  var Kg = i(82875),
    Vm = i(8010);
  const Jh = class {};
  let Jg = Jh;
  Jh.ɵfac = function (k) {
    return new (k || Jh)();
  }, Jh.ɵmod = n.oAB({
    type: Jh
  }), Jh.ɵinj = n.cJS({
    imports: [Hm, ls, Iu, t.Aw.forFeature("pillboxPreparation", pu), t.Aw.forFeature("prescriptions", Ss), e.sQ.forFeature([tu, em]), Kg.R, Vm.v, Ed.f, gp.c, fd.i, zt.o, Ds.O]
  }), n.B6R(ml, function () {
    return [Di.PC, Di.RF, Di.n9, yu, Df, Pl];
  }, function () {
    return [Di.Ov];
  });
});
