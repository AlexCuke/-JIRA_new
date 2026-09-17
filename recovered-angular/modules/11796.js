// Extracted from operations; webpack module 11796. Factory, not an ES module.
((Et, Z, s) => {
  var _, l;
  s.r(Z), s.d(Z, {
    OperationsModule: () => w
  });
  var d = s(97582),
    a = s(5264),
    A = s(54004),
    L = s(39300),
    E = s(71884),
    F = s(90127),
    I = s(79115),
    t = s(94650),
    U = s(62289),
    y = s(97215),
    h = s(89653),
    g = s(36895),
    N = s(2100),
    r = s(24006),
    O = s(63900),
    H = s(28746);
  const K = (0, h.ZF)("operations"),
    G = (0, h.P1)(K, o => o);
  var k = s(93278),
    V = s(32619),
    q = s(62804),
    S = s(13700),
    $ = s(43150),
    Q = s(92203),
    f = s(9073),
    j = s(85623),
    B = s(23062),
    Y = s(54976),
    J = s(5416),
    R = s(72210),
    C = s(43429),
    v = s(73021);
  const W = [{
      value: "yes",
      label: "Да"
    }, {
      value: "no",
      label: "Нет"
    }, {
      value: "NB",
      label: "Неактуально"
    }],
    X = {
      PLANNED: "Планово",
      EMERGENT: "Экстренно"
    },
    tt = [{
      index: 1,
      key: "isElasticСompression",
      question: "Эластичная компрессия нижних конечностей проведена",
      required: !1
    }, {
      index: 2,
      key: "isDentalProsthesesRemoved",
      question: "Протезы (зубные/конечностей/груди) сняты",
      required: !0
    }, {
      index: 3,
      key: "isJewelryRemoved",
      question: "Ювелирные украшения сняты",
      required: !0
    }, {
      index: 4,
      key: "isGlassesRemoved",
      question: "Контактные линзы/очки сняты",
      required: !0
    }, {
      index: 5,
      key: "isHearingAidRemoved",
      question: "Слуховой аппарат снят",
      required: !0
    }, {
      index: 6,
      key: "isShaved",
      question: "Бритье операционного поля не более 2 часов назад",
      required: !0
    }, {
      index: 7,
      key: "isMarking",
      question: "Маркировка операционного поля проведена",
      required: !0
    }, {
      index: 8,
      key: "isEating",
      question: "Прием пищи не менее 6 часов назад",
      required: !0,
      commentKey: "isEatingComment",
      deviationValue: "no"
    }, {
      index: 9,
      key: "isDrinking",
      question: "Прием жидкости не менее 2 часов назад",
      required: !0,
      commentKey: "isDrinkingComment",
      deviationValue: "no"
    }, {
      index: 10,
      key: "isPremedication",
      question: "Премедикация выполнена",
      required: !0
    }, {
      index: 11,
      key: "isThromboembolicProfilactic",
      question: "Медикаментозная профилактика тромбоэмболических осложнений выполнена",
      required: !0,
      dateKey: "isThromboembolicProfilacticDate",
      dateVisibleValue: "yes"
    }, {
      index: 12,
      key: "isAntibioticProfilactic",
      question: "Антибиотикопрофилактика выполнена",
      required: !1
    }],
    et = ["notFilled", "filledWithoutDeviations", "filledWithDeviations"];
  class x {}
  (0, d.gn)([(0, C.D)(() => v.xe)], x.prototype, "careCase", void 0), (0, d.gn)([(0, C.D)(() => v.rw)], x.prototype, "hospitalCard", void 0), (0, d.gn)([(0, C.D)(() => v.ph)], x.prototype, "patientMovement", void 0), (0, d.gn)([(0, C.D)(() => v.ir)], x.prototype, "preoperativeChecklist", void 0);
  const nt = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
  var at = s(71764),
    P = s.n(at),
    _t = s(98115),
    lt = s(20166);
  class pt {
    constructor(e) {
      this.medicalEntry = e, this.options = {
        yes: "Да",
        no: "Нет",
        NB: "Неактуально"
      }, this.basePath = "чеклист_обеспечения_хирургической_безопасности", this.userContext = this.medicalEntry.getUserContext(), this.composition = this.medicalEntry.getRoot().getComposition();
    }
    setInitialValues(e, n) {
      this.setTechnicalInfo(e), this.preOperativeChecklist(n), this.clinicalStatus(n), null !== n.notification && this.composition.get(`${this.basePath}.\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435.\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435_\u0432\u0440\u0430\u0447\u0430_\u043e\u0431_\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438_\u0440\u0435\u0444\u0435\u0440\u0435\u043d\u0441\u043d\u043e\u0433\u043e_\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.\u043b\u0435\u0447\u0430\u0449\u0438\u0439_\u0432\u0440\u0430\u0447_\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d_\u043e\u0431_\u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0438_\u043e\u0442_\u0440\u0435\u0444\u0435\u0440\u0435\u043d\u0441\u043d\u043e\u0433\u043e_\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f`).setValue(n.notification ? "Да" : "Нет"), this.composition.save();
    }
    preOperativeChecklist(e) {
      const n = this.basePath + ".чек-лист_предоперационной_подготовки_пациента.любое_событие",
        i = e.isThromboembolicProfilacticDate + "T" + e.isThromboembolicProfilacticTime;
      e.isElasticСompression && this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_1.\u044d\u043b\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f_\u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u0438\u044f_\u043d\u0438\u0436\u043d\u0438\u0445_\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u0435\u0439_\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430`).setValue(this.options[e.isElasticСompression]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_2.\u043f\u0440\u043e\u0442\u0435\u0437\u044b_\u0437\u0443\u0431\u043d\u044b\u0435_\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u0435\u0439_\u0433\u0440\u0443\u0434\u0438_\u0441\u043d\u044f\u0442\u044b`).setValue(this.options[e.isDentalProsthesesRemoved]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_3.\u044e\u0432\u0435\u043b\u0438\u0440\u043d\u044b\u0435_\u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u044f_\u0441\u043d\u044f\u0442\u044b`).setValue(this.options[e.isJewelryRemoved]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_4.\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435_\u043b\u0438\u043d\u0437\u044b_\u043e\u0447\u043a\u0438_\u0441\u043d\u044f\u0442\u044b`).setValue(this.options[e.isGlassesRemoved]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_5.\u0441\u043b\u0443\u0445\u043e\u0432\u043e\u0439_\u0430\u043f\u043f\u0430\u0440\u0430\u0442_\u0441\u043d\u044f\u0442`).setValue(this.options[e.isHearingAidRemoved]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_6.\u0431\u0440\u0438\u0442\u044c\u0435_\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e_\u043f\u043e\u043b\u044f_\u043d\u0435_\u0431\u043e\u043b\u0435\u0435_2_\u0447\u0430\u0441\u043e\u0432_\u043d\u0430\u0437\u0430\u0434`).setValue(this.options[e.isShaved]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_7.\u043c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430_\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e_\u043f\u043e\u043b\u044f_\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430`).setValue(this.options[e.isMarking]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_8.\u043f\u0440\u0438\u0435\u043c_\u043f\u0438\u0449\u0438_\u043d\u0435_\u043c\u0435\u043d\u0435\u0435_6_\u0447\u0430\u0441\u043e\u0432_\u043d\u0430\u0437\u0430\u0434`).setValue(this.options[e.isEating]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_8.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue(e.isEatingComment), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_9.\u043f\u0440\u0438\u0435\u043c_\u0436\u0438\u0434\u043a\u043e\u0441\u0442\u0438_\u043d\u0435_\u043c\u0435\u043d\u0435\u0435_2_\u0447\u0430\u0441\u043e\u0432_\u043d\u0430\u0437\u0430\u0434`).setValue(this.options[e.isDrinking]), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_9.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue(e.isDrinkingComment), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_10.\u043f\u0440\u0435\u043c\u0435\u0434\u0438\u043a\u0430\u0446\u0438\u044f_\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430`).setValue(e.isPremedication), this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_11.\u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u043e\u0437\u043d\u0430\u044f_\u043f\u0440\u043e\u0444\u0438\u043b\u0430\u043a\u0442\u0438\u043a\u0430_\u0442\u0440\u043e\u043c\u0431\u043e\u044d\u043c\u0431\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445_\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u0439_\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430`).setValue(this.options[e.isThromboembolicProfilactic]), "yes" === e.isThromboembolicProfilactic && this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_11.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f`).setValue(i), e.isAntibioticProfilactic && this.composition.get(`${n}.\u0432\u043e\u043f\u0440\u043e\u0441_12.\u0430\u043d\u0442\u0438\u0431\u0438\u043e\u0442\u0438\u043a\u043e\u043f\u0440\u043e\u0444\u0438\u043b\u0430\u043a\u0442\u0438\u043a\u0430_\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430`).setValue(this.options[e.isAntibioticProfilactic]);
    }
    clinicalStatus(e) {
      const n = this.basePath + ".клинические_показатели_пациента_перед_выездом_в_операционную";
      this.composition.get(`${n}.\u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435_\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435.\u0430\u0434_\u0432\u0435\u0440\u0445\u043d\u0435\u0435`).setMagnitude(+e.systolicPressure), this.composition.get(`${n}.\u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435_\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435.\u0430\u0434_\u0432\u0435\u0440\u0445\u043d\u0435\u0435`).setUnit("mm[Hg]"), this.composition.get(`${n}.\u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435_\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435.\u0430\u0434_\u043d\u0438\u0436\u043d\u0435\u0435`).setMagnitude(+e.diastolicPressure), this.composition.get(`${n}.\u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435_\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435.\u0430\u0434_\u043d\u0438\u0436\u043d\u0435\u0435`).setUnit("mm[Hg]"), this.composition.get(`${n}.\u0447\u0441\u0441.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435.\u0447\u0441\u0441`).setMagnitude(+e.heartRate), this.composition.get(`${n}.\u0447\u0441\u0441.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435.\u0447\u0441\u0441`).setUnit("/min"), this.composition.get(`${n}.\u0447\u0434\u0434.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435.\u0447\u0434\u0434`).setMagnitude(+e.frequencyRespiratory), this.composition.get(`${n}.\u0447\u0434\u0434.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435.\u0447\u0434\u0434`).setUnit("/min");
    }
    setTechnicalInfo(e) {
      const n = this.userContext.getCommitter(),
        i = this.userContext.getWorkplaceId(),
        u = this.userContext.getOrganizationId();
      this.composition.get(`${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f_\u0447\u0435\u043a\u043b\u0438\u0441\u0442\u0430.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f_\u0447\u0435\u043a\u043b\u0438\u0441\u0442\u0430`).setValue(P()().format("YYYY-MM-DDTHH:mm:ss.SSSZ")), this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: e,
        assigner: "Operations",
        issuer: "Operations",
        type: "medical-entry"
      }), this.composition.getContext().get("подробности_контекста.автор_информации.идентификатор_исполнения_должности_медработника").setIdentifier({
        id: i,
        assigner: "assigner",
        issuer: "Issuer",
        type: "Prescription"
      }), this.composition.getContext().get("подробности_контекста.структура_медицинской_организации.ид_объекта").setIdentifier({
        id: u,
        assigner: "assigner",
        issuer: "Issuer",
        type: "Prescription"
      }), this.composition.get("composer").setValue({
        id: n.committerId,
        namespace: "Operations",
        scheme: "Operations",
        name: n.committerName
      }), this.composition.get(`${this.basePath}.\u0447\u0435\u043a-\u043b\u0438\u0441\u0442_\u043f\u0440\u0435\u0434\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439_\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435.\u0441\u0442\u0430\u0442\u0443\u0441_\u0447\u0435\u043a-\u043b\u0438\u0441\u0442\u0430`).setValue("Статус чек-листа 73");
    }
  }
  var mt = s(80529),
    dt = s(41025),
    ht = s(40891),
    gt = s(25748);
  const p = class {
    constructor(e, n, i, u, c, D) {
      this.http = e, this.keycloak = n, this.ehrService = i, this.userContext = u, this.patientService = c, this.store = D;
    }
    getEhrByPatientId(e) {
      return this.patientService.getPatientQuery(e).pipe((0, O.w)(n => this.ehrService.getEhr(n.ehrId)));
    }
    createOperaationCheckListDocument(e, n, i) {
      return e.createMedicalEntry("preoperative_checklist", n).pipe((0, O.w)(u => (new pt(u).setInitialValues(n, i), u.sign())));
    }
  };
  let M = p;
  function ft(o, e) {
    1 & o && (t.ynx(0), t._uU(1, " *"), t.BQk());
  }
  function Ct(o, e) {
    if (1 & o && (t.TgZ(0, "lu-radio", 49), t._uU(1), t.qZA()), 2 & o) {
      const n = e.$implicit;
      t.Q6J("value", n.value), t.xp6(1), t.hij(" ", n.label, " ");
    }
  }
  function vt(o, e) {
    if (1 & o && (t.ynx(0), t.TgZ(1, "div", 50), t._UZ(2, "lu-svg-icon", 51), t.TgZ(3, "span"), t._uU(4, "Выявлены отклонения"), t.qZA()(), t.TgZ(5, "div", 52)(6, "label", 53)(7, "lu-input-wrapper"), t._UZ(8, "input", 54), t.qZA()()(), t.BQk()), 2 & o) {
      const n = t.oxw().$implicit;
      t.xp6(2), t.Q6J("size", 24), t.xp6(6), t.Q6J("formControlName", n.commentKey);
    }
  }
  function xt(o, e) {
    if (1 & o && (t.ynx(0), t.TgZ(1, "div", 55)(2, "label", 56), t._UZ(3, "lu-calendar-field", 57), t.TgZ(4, "label", 58)(5, "lu-input-wrapper"), t._UZ(6, "input", 59), t.qZA()()()(), t.BQk()), 2 & o) {
      const n = t.oxw().$implicit,
        i = t.oxw(2);
      t.xp6(3), t.Q6J("formControlName", n.dateKey), t.xp6(3), t.Q6J("formControl", i.timeControl);
    }
  }
  function bt(o, e) {
    if (1 & o && (t.TgZ(0, "div", 41)(1, "span", 42), t._uU(2), t.qZA(), t.TgZ(3, "div", 43)(4, "span", 44), t._uU(5), t.YNc(6, ft, 2, 0, "ng-container", 45), t.qZA(), t.TgZ(7, "div", 46)(8, "lu-radio-group", 47), t.YNc(9, Ct, 2, 2, "lu-radio", 48), t.qZA()(), t.YNc(10, vt, 9, 2, "ng-container", 45), t.YNc(11, xt, 7, 2, "ng-container", 45), t.qZA()()), 2 & o) {
      const n = e.$implicit,
        i = t.oxw(2);
      t.ekj("formCheckList__wrapper--negative", i.isNegativeAnswer(n)), t.xp6(2), t.hij("", n.index, "."), t.xp6(3), t.hij(" ", n.question, ""), t.xp6(1), t.Q6J("ngIf", n.required), t.xp6(2), t.Q6J("itemsOrientation", "horizontal")("formControlName", n.key), t.xp6(1), t.Q6J("ngForOf", i.answerOptions), t.xp6(1), t.Q6J("ngIf", i.deviationVisibility[n.key]), t.xp6(1), t.Q6J("ngIf", i.dateFieldVisibility[n.key]);
    }
  }
  function yt(o, e) {
    if (1 & o) {
      const n = t.EpF();
      t.TgZ(0, "div", 15)(1, "div")(2, "span", 16), t._uU(3, "Предоперационный чек-лист"), t.qZA()(), t.TgZ(4, "div")(5, "span", 17), t._uU(6, "Анкета"), t.qZA()(), t.TgZ(7, "div", 18), t.YNc(8, bt, 12, 10, "div", 19), t.qZA(), t.TgZ(9, "div", 20)(10, "div", 21)(11, "span"), t._uU(12, "Отклонение"), t.qZA(), t.TgZ(13, "span"), t._uU(14), t.qZA()(), t.TgZ(15, "div", 22)(16, "span", 23), t._uU(17, "Перед транспортировкой в операционную"), t.qZA(), t.TgZ(18, "div", 24)(19, "label", 25)(20, "lu-input-wrapper"), t._UZ(21, "input", 26), t.qZA(), t.TgZ(22, "lu-input-wrapper"), t._UZ(23, "input", 27), t.qZA()()(), t.TgZ(24, "div", 28)(25, "div", 29)(26, "label", 30)(27, "lu-input-wrapper"), t._UZ(28, "input", 31), t.qZA()()(), t.TgZ(29, "div", 32)(30, "label", 33)(31, "lu-input-wrapper"), t._UZ(32, "input", 34), t.qZA()()()(), t.TgZ(33, "div", 35)(34, "span", 36), t._uU(35, "Заключение"), t.qZA(), t.TgZ(36, "label", 37)(37, "lu-radio-group", 38)(38, "lu-button-group")(39, "button", 39), t.NdJ("click", function () {
        t.CHM(n);
        const u = t.oxw();
        return t.KtG(u.setNotification(!0));
      }), t._uU(40, " Да "), t.qZA(), t.TgZ(41, "button", 39), t.NdJ("click", function () {
        t.CHM(n);
        const u = t.oxw();
        return t.KtG(u.setNotification(!1));
      }), t._uU(42, " Нет "), t.qZA()()()()(), t._UZ(43, "div", 40), t.qZA()()();
    }
    if (2 & o) {
      const n = t.oxw();
      let i, u;
      t.Q6J("formGroup", n.checklistForm), t.xp6(8), t.Q6J("ngForOf", n.checklistQuestions), t.xp6(6), t.Oqu(n.hasChecklistDeviation ? "Да" : "Нет"), t.xp6(25), t.ekj("active", !0 === (null == (i = n.checklistForm.get("notification")) ? null : i.value)), t.xp6(2), t.ekj("active", !1 === (null == (u = n.checklistForm.get("notification")) ? null : u.value));
    }
  }
  function Ot(o, e) {
    if (1 & o && (t.TgZ(0, "div", 71)(1, "span"), t._uU(2), t.qZA()()), 2 & o) {
      const n = t.oxw().$implicit,
        i = t.oxw(2);
      t.xp6(2), t.Oqu(i.getComment(n));
    }
  }
  function kt(o, e) {
    if (1 & o && (t.TgZ(0, "div", 65)(1, "div", 69)(2, "span"), t._uU(3), t.qZA()(), t.TgZ(4, "div", 66)(5, "div", 67)(6, "span"), t._uU(7), t.qZA(), t.TgZ(8, "span"), t._uU(9, "/"), t.qZA(), t.TgZ(10, "span"), t._uU(11), t.qZA()(), t.YNc(12, Ot, 3, 1, "div", 70), t.qZA()()), 2 & o) {
      const n = e.$implicit,
        i = t.oxw(2);
      t.ekj("item--negative", i.isNoAnswer(n))("item--neutral", i.isNbAnswer(n)), t.xp6(3), t.hij("", n.index, "."), t.xp6(4), t.Oqu(n.question), t.xp6(4), t.Oqu(i.getAnswerLabel(n)), t.xp6(1), t.Q6J("ngIf", n.commentKey && i.getComment(n));
    }
  }
  function Pt(o, e) {
    if (1 & o && (t.TgZ(0, "div", 60)(1, "div", 61)(2, "span", 16), t._uU(3, "Предоперационный чек-лист"), t.qZA()(), t.TgZ(4, "div", 62)(5, "span", 17), t._uU(6, "Анкета"), t.qZA()(), t.TgZ(7, "div", 63), t.YNc(8, kt, 13, 8, "div", 64), t.qZA(), t.TgZ(9, "div", 20)(10, "div", 22)(11, "span", 23), t._uU(12, "Перед транспортировкой в операционную"), t.qZA(), t.TgZ(13, "div", 63)(14, "div", 65)(15, "div", 66)(16, "div", 67)(17, "span"), t._uU(18, "АД (в/н), мм.рт.мт."), t.qZA(), t.TgZ(19, "span"), t._uU(20, "/"), t.qZA(), t.TgZ(21, "span"), t._uU(22), t.qZA()()()(), t.TgZ(23, "div", 68)(24, "div", 65)(25, "div", 66)(26, "div", 67)(27, "span"), t._uU(28, "ЧДД, движений/мин"), t.qZA(), t.TgZ(29, "span"), t._uU(30, "/"), t.qZA(), t.TgZ(31, "span"), t._uU(32), t.qZA()()()(), t.TgZ(33, "div", 65)(34, "div", 66)(35, "div", 67)(36, "span"), t._uU(37, "ЧСС, уд/мин"), t.qZA(), t.TgZ(38, "span"), t._uU(39, "/"), t.qZA(), t.TgZ(40, "span"), t._uU(41), t.qZA()()()()()(), t.TgZ(42, "div", 35)(43, "span", 36), t._uU(44, "Заключение"), t.qZA(), t.TgZ(45, "div", 63)(46, "div", 65)(47, "div", 66)(48, "div", 67)(49, "span"), t._uU(50, "Лечащий врач уведомлен об отклонении от референсного значения"), t.qZA(), t.TgZ(51, "span"), t._uU(52, "/"), t.qZA(), t.TgZ(53, "span"), t._uU(54), t.qZA()()()()()()()()()), 2 & o) {
      const n = t.oxw();
      t.xp6(8), t.Q6J("ngForOf", n.checklistQuestions), t.xp6(14), t.AsE("", null == n.menuData || null == n.menuData.preoperativeChecklist ? null : n.menuData.preoperativeChecklist.systolicPressure, "/", null == n.menuData || null == n.menuData.preoperativeChecklist ? null : n.menuData.preoperativeChecklist.diastolicPressure, ""), t.xp6(10), t.Oqu(null == n.menuData || null == n.menuData.preoperativeChecklist ? null : n.menuData.preoperativeChecklist.frequencyRespiratory), t.xp6(9), t.Oqu(null == n.menuData || null == n.menuData.preoperativeChecklist ? null : n.menuData.preoperativeChecklist.heartRate), t.xp6(13), t.Oqu(null != n.menuData && null != n.menuData.preoperativeChecklist && n.menuData.preoperativeChecklist.notification ? "Да" : "Нет");
    }
  }
  function Mt(o, e) {
    if (1 & o) {
      const n = t.EpF();
      t.TgZ(0, "button", 72), t.NdJ("click", function () {
        t.CHM(n);
        const u = t.oxw();
        return t.KtG(u.onSave());
      }), t._UZ(1, "lu-svg-icon", 73), t._uU(2, " Сохранить "), t.qZA();
    }
    2 & o && (t.xp6(1), t.Q6J("size", 24));
  }
  p.ɵfac = function (n) {
    return new (n || p)(t.LFG(mt.eN), t.LFG(dt.M), t.LFG(ht.r), t.LFG(y.oL), t.LFG(gt.e6), t.LFG(h.yh));
  }, p.ɵprov = t.Yz7({
    token: p,
    factory: p.ɵfac,
    providedIn: "root"
  });
  let b = ((_ = class {
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
  }).ɵfac = function (n) {
    return new (n || _)(t.Y36(y.oL), t.Y36(U.Yg), t.Y36(h.yh), t.Y36(t.sBO), t.Y36(r.qu), t.Y36(M));
  }, _.ɵcmp = t.Xpm({
    type: _,
    selectors: [["app-operation-side-menu"]],
    standalone: !0,
    features: [t.jDz],
    decls: 19,
    vars: 10,
    consts: [[1, "side-menu"], [1, "side-menu__content"], [1, "side-menu__content__header"], [1, "patient-info"], [1, "fio"], [1, "patientInfo"], ["icon", "close", 1, "close-icon", 3, "size", "click"], [1, "side-menu__content__body"], [1, "side-menu__content__body__operation"], [1, "wrapper"], [1, "opertitle"], [1, "operDescrip"], ["class", "side-menu__content__body__checkList", 3, "formGroup", 4, "ngIf"], ["class", "side-menu__content__body__checkList--view", 4, "ngIf"], ["lu-button-raised", "", "class", "side-menu__content__btn", 3, "click", 4, "ngIf"], [1, "side-menu__content__body__checkList", 3, "formGroup"], [1, "formTitle"], [1, "formSubTitle"], [1, "formCheckList"], ["class", "formCheckList__wrapper", 3, "formCheckList__wrapper--negative", 4, "ngFor", "ngForOf"], [1, "formConclusion"], [1, "formConclusion__title"], [1, "formConclusion__beforeTransport"], [1, "formConclusion__beforeTransport__title"], [1, "formConclusion__beforeTransport__ad"], ["lu-label", "АД (в/н), мм.рт.мт. *"], ["luInput", "", "luInputString", "", "formControlName", "systolicPressure", "placeholder", "Верхнее"], ["luInput", "", "luInputString", "", "formControlName", "diastolicPressure", "placeholder", "Нижнее"], [1, "formConclusion__beforeTransport__chss-chdd"], [1, "wrapper-chss"], ["lu-label", "ЧСС, уд/мин *"], ["luInput", "", "luInputString", "", "formControlName", "heartRate"], [1, "wrapper-chdd"], ["lu-label", "ЧДД, движений/мин *"], ["luInput", "", "luInputString", "", "formControlName", "frequencyRespiratory"], [1, "formConclusion__beforeTransport__conclusion"], [1, "title"], ["lu-label", "Лечащий врач уведомлен об отклонении от референсного значения *"], ["formControlName", "notification", 1, "notification"], ["lu-segment-button", "", "luSegment", "", "type", "button", 3, "click"], [1, "formConclusion__beforeTransport__footer"], [1, "formCheckList__wrapper"], [1, "formCheckList__wrapper__index"], [1, "formCheckList__wrapper__body"], [1, "formCheckList__wrapper__body__question"], [4, "ngIf"], [1, "formCheckList__wrapper__body__answers"], [3, "itemsOrientation", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "formCheckList__wrapper__body__warnings"], ["icon", "attention", 1, "attention-icon", 3, "size"], [1, "formCheckList__wrapper__body__comment"], ["lu-label", "Комментарий"], ["luInput", "", "luInputString", "", 3, "formControlName"], [1, "formCheckList__wrapper__body__date"], ["lu-label", "Дата и время *"], [3, "formControlName"], ["lu-label", ""], ["type", "text", "luInput", "", "luInputString", "", "luMask", "HH:MM", "placeholder", "ЧЧ:ММ", "autocomplete", "off", 3, "formControl"], [1, "side-menu__content__body__checkList--view"], [1, "__field", "title"], [1, "__field", "subTitle"], [1, "__form-wrapper"], ["class", "item", 3, "item--negative", "item--neutral", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item__content"], [1, "item__content__answer"], [1, "inline-item"], [1, "item__index"], ["class", "item__content__comment", 4, "ngIf"], [1, "item__content__comment"], ["lu-button-raised", "", 1, "side-menu__content__btn", 3, "click"], ["icon", "check-mse", "luButtonPrefix", "", 3, "size"]],
    template: function (n, i) {
      1 & n && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4), t._uU(5), t.qZA(), t.TgZ(6, "span", 5), t._uU(7), t.qZA()(), t.TgZ(8, "lu-svg-icon", 6), t.NdJ("click", function () {
        return i.onClose();
      }), t.qZA()(), t.TgZ(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "span", 10), t._uU(13), t.qZA(), t.TgZ(14, "span", 11), t._uU(15), t.qZA()()(), t.YNc(16, yt, 44, 7, "div", 12), t.YNc(17, Pt, 55, 6, "div", 13), t.qZA(), t.YNc(18, Mt, 3, 1, "button", 14), t.qZA()()), 2 & n && (t.ekj("open", i.isOpen), t.xp6(5), t.Oqu(i.patientFio), t.xp6(2), t.Oqu(i.patientShortInfo), t.xp6(1), t.Q6J("size", 24), t.xp6(5), t.Oqu(i.operationTitle), t.xp6(2), t.Oqu(i.operationSchedule), t.xp6(1), t.Q6J("ngIf", "edit" === i.mode), t.xp6(1), t.Q6J("ngIf", "view" === i.mode), t.xp6(1), t.Q6J("ngIf", "edit" === i.mode));
    },
    dependencies: [g.ez, g.sg, g.O5, r.UX, r.Fj, r.JJ, r.JL, r.oH, r.sg, r.u, k.h, k.q, Y.y8, Y.K2, V.VY, V.wH, q.LA, q.HY, S.f, S.L, $.c, $.H, Q.Y, Q.z, R.j, R.R, J.F, J.w, f.W1, f.mc, f.nx, j.c, B.Ki, B.Bf],
    styles: [".side-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0!important}.side-menu__content[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:1;width:786px;height:100%;background:#fff;transform:translate(100%);transition:.2s ease;display:flex;flex-direction:column;min-height:0}.side-menu__content__header[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;flex-direction:row;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #E6E6E6;height:78px}.side-menu__content__header[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]{padding-left:8px;display:flex;flex-direction:column}.side-menu__content__header[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .fio[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}.side-menu__content__header[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patientInfo[_ngcontent-%COMP%]{line-height:24px}.side-menu__content__header[_ngcontent-%COMP%]     .close-icon{--lu-svg-icon-color: #B3B3B3}.side-menu__content__header[_ngcontent-%COMP%]     .close-icon:hover{--lu-svg-icon-color: #999999;cursor:pointer}.side-menu__content__body[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:0 24px;display:flex;flex-direction:column;gap:24px}.side-menu__content__body__operation[_ngcontent-%COMP%]{padding-top:24px}.side-menu__content__body__operation[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding:6px 12px;background-color:#f2f2f2;display:flex;flex-direction:column}.side-menu__content__body__operation[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .opertitle[_ngcontent-%COMP%]{font-weight:600;font-size:13px;line-height:20px}.side-menu__content__body__operation[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .operDescrip[_ngcontent-%COMP%]{font-size:13px;line-height:20px;color:#757575}.side-menu__content__body__checkList[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formTitle[_ngcontent-%COMP%]{font-weight:600;font-size:17px;line-height:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formSubTitle[_ngcontent-%COMP%]{font-weight:600;line-height:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper[_ngcontent-%COMP%]{background-color:#fafafa;padding:16px;display:flex;flex-direction:row;gap:8px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper__index[_ngcontent-%COMP%]{width:22px;line-height:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;width:100%}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper__body__warnings[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;align-items:center}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper__body__date[_ngcontent-%COMP%]     .lu-content{flex-direction:row!important;gap:8px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper__body__date[_ngcontent-%COMP%]     .lu-content>*:nth-child(2){width:112px!important}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formCheckList__wrapper--negative[_ngcontent-%COMP%]{background-color:#f05c461a!important}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion[_ngcontent-%COMP%]{padding-top:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__title[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__beforeTransport[_ngcontent-%COMP%]{padding-top:32px;display:flex;flex-direction:column;gap:16px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__beforeTransport__title[_ngcontent-%COMP%]{font-weight:600;line-height:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__beforeTransport__chss-chdd[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__beforeTransport__conclusion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;line-height:24px}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__beforeTransport__conclusion[_ngcontent-%COMP%]     .notification lu-button-group .active{--lu-button-background: #fff199 !important}.side-menu__content__body__checkList[_ngcontent-%COMP%]   .formConclusion__beforeTransport__footer[_ngcontent-%COMP%]{height:40px;width:100%}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__field[_ngcontent-%COMP%]{margin-bottom:16px;font-weight:600;line-height:24px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__field[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__field[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%]{font-size:15px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-bottom:32px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .item__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .item__content__answer[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .item--negative[_ngcontent-%COMP%]{color:#cd3b2b}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .item--neutral[_ngcontent-%COMP%]{color:#333}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .formConclusion[_ngcontent-%COMP%]   .formConclusion__beforeTransport__title[_ngcontent-%COMP%]{font-weight:600;line-height:24px;margin-bottom:16px;display:block}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .formConclusion[_ngcontent-%COMP%]   .formConclusion__beforeTransport[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .formConclusion[_ngcontent-%COMP%]   .formConclusion__beforeTransport[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.side-menu__content__body__checkList--view[_ngcontent-%COMP%]   .formConclusion[_ngcontent-%COMP%]   .formConclusion__beforeTransport[_ngcontent-%COMP%]   .__form-wrapper[_ngcontent-%COMP%]   .inline-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px}.side-menu__content__btn[_ngcontent-%COMP%]{padding:16px;width:176px;min-height:72px;position:fixed;right:0;bottom:0;background:#FFF;z-index:3}.side-menu__content__btn[_ngcontent-%COMP%]     .lu-button-wrapper{padding:0!important;height:40px!important;justify-content:flex-start}.side-menu__content__btn[_ngcontent-%COMP%]     .lu-button-wrapper>*:nth-child(1){width:40px;height:40px}.side-menu__content__btn[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-text{height:40px;width:88px;font-weight:600;font-size:16px;line-height:24px}.side-menu.open[_ngcontent-%COMP%]{width:100%;position:absolute;top:48px;right:0;z-index:2;height:calc(100% - 84px);background:rgba(0,0,0,.5)}.side-menu.open[_ngcontent-%COMP%]   .side-menu__content[_ngcontent-%COMP%]{transform:translate(0)}.bold_span[_ngcontent-%COMP%]{font-weight:600}.grey_span[_ngcontent-%COMP%]{color:#757575}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],
    changeDetection: 0
  }), _);
  b = (0, d.gn)([(0, a.c)()], b);
  const Tt = ["operationsList"],
    wt = ["operationsAdaptiveList"];
  function Dt(o, e) {
    if (1 & o) {
      const n = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-list", 1, 2), t.NdJ("runAction", function (u) {
        t.CHM(n);
        const c = t.oxw();
        return t.KtG(c.onRunAction(u));
      })("runEvent", function (u) {
        t.CHM(n);
        const c = t.oxw();
        return t.KtG(c.onRunEvent(u));
      }), t.qZA(), t._UZ(3, "app-operation-side-menu"), t.BQk();
    }
    if (2 & o) {
      const n = t.oxw();
      t.xp6(1), t.Q6J("params", n.operationListParams);
    }
  }
  function Zt(o, e) {
    if (1 & o) {
      const n = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-universal-list", 3, 4), t.NdJ("runAction", function (u) {
        t.CHM(n);
        const c = t.oxw();
        return t.KtG(c.onRunAction(u));
      })("runEvent", function (u) {
        t.CHM(n);
        const c = t.oxw();
        return t.KtG(c.onRunEvent(u));
      }), t.qZA(), t.BQk();
    }
    if (2 & o) {
      const n = t.oxw();
      t.xp6(1), t.Q6J("params", n.operationAdaptiveListParams);
    }
  }
  let T = ((l = class {
    constructor(e, n, i) {
      this.breakpointObserver = e, this.userContext = n, this.store = i, this.isTablet = !1, this.operationListParams = {
        listName: "operations-list",
        initialParams: {},
        queryParams: {},
        excludeParts: {}
      }, this.operationAdaptiveListParams = {
        listName: "operations-adaptive-list",
        initialParams: {},
        queryParams: {},
        excludeParts: {}
      };
    }
    ngAfterViewInit() {
      this.breakpointObserver.observe(F.o).pipe((0, a.t)(this)).subscribe(e => {
        this.isTablet = e.matches;
      }), this.userContext.getUserContext().pipe((0, a.t)(this), (0, A.U)(e => function z(o) {
        const e = o?.department?.id;
        if (null == e) return null;
        const n = `${e}`.trim();
        return n && "undefined" !== n && "null" !== n ? n : null;
      }(e)), (0, L.h)(e => !!e), (0, E.x)()).subscribe(e => {});
    }
    onRunEvent(e) {
      console.log("EVENT", e);
    }
    onRunAction(e) {
      console.log("DATA^", e);
      const i = e?.data ?? null;
      "open_checkList" === (e?.actionName ?? "") && i && this.store.dispatch((0, I.D)({
        data: i
      }));
    }
  }).ɵfac = function (n) {
    return new (n || l)(t.Y36(U.Yg), t.Y36(y.oL), t.Y36(h.yh));
  }, l.ɵcmp = t.Xpm({
    type: l,
    selectors: [["operation-list"]],
    viewQuery: function (n, i) {
      if (1 & n && (t.Gf(Tt, 5), t.Gf(wt, 5)), 2 & n) {
        let u;
        t.iGM(u = t.CRH()) && (i.operationsList = u.first), t.iGM(u = t.CRH()) && (i.operationsAdaptiveList = u.first);
      }
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "operations-dp-list", 3, "params", "runAction", "runEvent"], ["operationsList", ""], [1, "operations-dp-tablet-list", 3, "params", "runAction", "runEvent"], ["operationsAdaptiveList", ""]],
    template: function (n, i) {
      1 & n && (t.YNc(0, Dt, 4, 1, "ng-container", 0), t.YNc(1, Zt, 3, 1, "ng-container", 0)), 2 & n && (t.Q6J("ngIf", !i.isTablet), t.xp6(1), t.Q6J("ngIf", i.isTablet));
    },
    dependencies: [g.O5, N.rs, b]
  }), l);
  T = (0, d.gn)([(0, a.c)()], T);
  var At = s(3279),
    Lt = s(90293);
  const m = class {};
  let w = m;
  m.ɵfac = function (n) {
    return new (n || m)();
  }, m.ɵmod = t.oAB({
    type: m
  }), m.ɵinj = t.cJS({
    imports: [g.ez, At.Bz.forChild([{
      path: "",
      component: T
    }]), f.W1, k.h, N.lU, Lt.OU, b]
  });
});
