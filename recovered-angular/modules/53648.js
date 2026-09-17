// Extracted from main; webpack module 53648. Factory, not an ES module.
((Ae, V, i) => {
  var Se, qe;
  i.d(V, {
    S: () => n
  });
  var t = i(97582),
    e = i(5264),
    a = i(17489),
    m = i(35314),
    d = i(73745),
    M = i(8830),
    b = i(3977),
    A = i(94650),
    N = i(44348),
    I = i(93278),
    O = i(89653),
    L = i(80529),
    C = i(41025),
    v = i(36895),
    f = i(18505),
    E = i(82805),
    h = i(95698),
    x = i(70262),
    u = i(39646),
    T = i(33837),
    R = i(66425),
    B = i(29358),
    y = i(40833),
    j = i(91998),
    F = i(73766),
    Le = i(72468),
    ke = i(21846),
    J = i(24006),
    fe = i(32366),
    ye = i(95737);
  const ae = ["titleText"];
  function Y(Rt, We) {
    if (1 & Rt && (A.TgZ(0, "span", 12), A._uU(1), A.qZA()), 2 & Rt) {
      const Re = A.oxw();
      A.xp6(1), A.Oqu(Re.consultationCode);
    }
  }
  function G(Rt, We) {
    if (1 & Rt) {
      const Re = A.EpF();
      A.TgZ(0, "span", 13), A.NdJ("click", function (q) {
        A.CHM(Re);
        const mt = A.oxw();
        return A.KtG(mt.onExpand(q));
      }), A._UZ(1, "app-arrow-icon"), A.qZA();
    }
  }
  let te = ((Se = class {
    constructor(We, Re, st, q) {
      this.cdr = We, this.store = Re, this.consultationApiService = st, this.sharedDataService = q, this.isLoading = !1, this.titleExpanded = !1, this.isNotified = !1, this.isShowExpander = !1;
    }
    ngOnInit() {
      this.isNotified = !!this.data.patientNotified;
      const We = this.data?.composition;
      We && (this.consultationCode = We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.назначение?.[0]?.["|code"], this.consultationText = We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.назначение?.[0]?.["|value"], this.consultationPlan = this.capitalizeFirstLetter(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.срочность?.[0]), this.consultationPlanData = this.formatDate(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.дата_выполнения), this.consultationDoctorJobTitle = this.lowercaseFirstLetter(We?.composition?.направление_на_консультацию?.context?.[0]?.подробности_контекста?.[0]?.автор_информации?.[0]?.наименование_должности), this.consultationDoctorName = this.formatFioShort(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.назначивший_врач?.[0]?.назначивший_врач?.[0]?.["|value"]), this.consultationAppointmentDate = this.formatDate(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.дата_назначения?.[0]));
    }
    ngAfterViewInit() {
      this.updateTitleExpander();
    }
    updateTitleExpander() {
      const We = this.titleText?.nativeElement;
      if (!We) return;
      const Re = We.classList.contains("accordion__title-text--collapsed");
      We.classList.remove("accordion__title-text--collapsed");
      const st = Number.parseFloat(getComputedStyle(We).lineHeight) || 21;
      this.isShowExpander = We.scrollHeight > st + 1, Re && We.classList.add("accordion__title-text--collapsed"), this.cdr.markForCheck();
    }
    capitalizeFirstLetter(We) {
      return We && We[0].toUpperCase() + We.slice(1);
    }
    lowercaseFirstLetter(We) {
      return We && We[0].toLowerCase() + We.slice(1);
    }
    formatDate(We) {
      return We ? (0, R.Z)(function W(Rt, We) {
        (0, y.Z)(2, arguments);
        var Re = (0, j.Z)(We);
        return (0, B.Z)(Rt, -Re);
      }(new Date(We), 3), "dd MMM, HH:mm", {
        locale: F.default
      }) : "";
    }
    formatFioShort(We) {
      if (!We) return "";
      const Re = We.trim().split(/\s+/);
      if (Re.length < 2) return We;
      const q = Re[1],
        mt = Re[2];
      return `${Re[0]} ${q ? q[0].toUpperCase() + "." : ""}${mt ? mt[0].toUpperCase() + "." : ""}`;
    }
    onNotifyPatient(We) {
      this.isLoading = !0, this.consultationApiService.markPatientNotified({
        assignmentCompositionUid: this.data.assignmentCompositionUid,
        patientNotified: We ? new Date().toISOString() : ""
      }).pipe((0, f.b)(() => {
        this.cdr.markForCheck(), (0, E.H)(T.x).pipe((0, h.q)(1), (0, e.t)(this)).subscribe(() => {
          this.sharedDataService.runActionSubject("tasksPatientList"), this.sharedDataService.runActionSubject("tasksPatientListEmergency");
        });
      }), (0, x.K)(() => (0, u.of)([])), (0, e.t)(this)).subscribe(() => {
        this.isLoading = !1;
      });
    }
    onExpand(We) {
      We.stopPropagation(), this.titleExpanded = !this.titleExpanded;
    }
  }).ɵfac = function (Re) {
    return new (Re || Se)(A.Y36(A.sBO), A.Y36(O.yh), A.Y36(Le.gP), A.Y36(ke.g));
  }, Se.ɵcmp = A.Xpm({
    type: Se,
    selectors: [["consultation-item"]],
    viewQuery: function (Re, st) {
      if (1 & Re && A.Gf(ae, 5), 2 & Re) {
        let q;
        A.iGM(q = A.CRH()) && (st.titleText = q.first);
      }
    },
    inputs: {
      data: "data"
    },
    decls: 21,
    vars: 14,
    consts: [[1, "consultation-item"], [1, "accordion"], [1, "accordion__item"], [1, "accordion__title"], [1, "accordion__title-text"], ["titleText", ""], ["class", "accordion__code", 4, "ngIf"], ["class", "accordion__arrow-wrapper", 3, "click", 4, "ngIf"], [1, "accordion__body"], [1, "dot"], [1, "patient-notify"], ["label", "Пациент уведомлен", 3, "disabled", "ngModel", "ngModelChange"], [1, "accordion__code"], [1, "accordion__arrow-wrapper", 3, "click"]],
    template: function (Re, st) {
      1 & Re && (A.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4, 5), A._uU(6), A.qZA(), A.YNc(7, Y, 2, 1, "span", 6), A.YNc(8, G, 2, 0, "span", 7), A.qZA(), A.TgZ(9, "div", 8)(10, "p")(11, "span"), A._uU(12, "Назначено"), A.qZA(), A._UZ(13, "span", 9), A.TgZ(14, "span"), A._uU(15), A.qZA(), A._UZ(16, "span", 9), A.TgZ(17, "span"), A._uU(18), A.qZA()()()()(), A.TgZ(19, "div", 10)(20, "lu-toggle", 11), A.NdJ("ngModelChange", function (mt) {
        return st.isNotified = mt;
      })("ngModelChange", function (mt) {
        return st.onNotifyPatient(mt);
      }), A.qZA()()()), 2 & Re && (A.xp6(3), A.ekj("active", st.titleExpanded), A.xp6(1), A.ekj("accordion__title-text--collapsed", !st.titleExpanded), A.xp6(2), A.Oqu(st.consultationText), A.xp6(1), A.Q6J("ngIf", st.consultationCode), A.xp6(1), A.Q6J("ngIf", st.isShowExpander), A.xp6(7), A.AsE("", st.consultationPlan, " на ", st.consultationPlanData, ""), A.xp6(3), A.lnq(" Назначил ", st.consultationDoctorJobTitle, " ", st.consultationDoctorName, " ", st.consultationAppointmentDate, " "), A.xp6(2), A.Q6J("disabled", st.isLoading)("ngModel", st.isNotified));
    },
    dependencies: [J.JJ, J.On, fe.M, ye.w, v.O5],
    styles: [".consultation-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.consultation-item[_ngcontent-%COMP%]   .move-request-form[_ngcontent-%COMP%]{position:relative;padding:16px;border-radius:4px;border:1px dashed #ccc;background-color:#fafafa}.consultation-item[_ngcontent-%COMP%]   .move-request-form__title[_ngcontent-%COMP%]{margin-bottom:16px;font-size:17px;font-weight:600}.consultation-item[_ngcontent-%COMP%]   .move-request-form[_ngcontent-%COMP%]   app-close-icon[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;color:#999;transition:color .2s ease}.consultation-item[_ngcontent-%COMP%]   .move-request-form[_ngcontent-%COMP%]   app-close-icon[_ngcontent-%COMP%]:hover{color:#757575}.consultation-item[_ngcontent-%COMP%]   .move-request-form[_ngcontent-%COMP%]   .date-wrap[_ngcontent-%COMP%]{display:flex;gap:8px}.consultation-item[_ngcontent-%COMP%]   .move-request-form[_ngcontent-%COMP%]   .date-wrap__time[_ngcontent-%COMP%]{width:112px}.consultation-item[_ngcontent-%COMP%]   .move-request-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;margin-left:auto}.consultation-item[_ngcontent-%COMP%]   .request[_ngcontent-%COMP%]{padding:8px 12px;font-size:16px;border-radius:4px;border:1px solid #e6e6e6;background-color:#fff}.consultation-item[_ngcontent-%COMP%]   .request__title[_ngcontent-%COMP%]{margin-bottom:4px;font-weight:600}.consultation-item[_ngcontent-%COMP%]   .request__body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px}.consultation-item[_ngcontent-%COMP%]   .request__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:0}.consultation-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.consultation-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]   lu-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.consultation-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]   lu-toggle[data-lu-checked=false][_ngcontent-%COMP%]     .lu-toggle-wrapper{background-color:#d9d9d9}.accordion[_ngcontent-%COMP%]{position:relative;padding:6px 32px 6px 12px;background-color:#f2f2f2;border-radius:4px;font-size:13px}.accordion__title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding-right:32px;font-weight:600}.accordion__title-text[_ngcontent-%COMP%]{flex:0 1 auto;min-width:0;color:#000;word-break:break-word}.accordion__title-text--collapsed[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.accordion__title[_ngcontent-%COMP%]   .accordion__arrow-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:flex-start;padding-top:6px;width:32px;min-height:100%;color:#67bde3;cursor:pointer;transition:background-color .2s}.accordion__title[_ngcontent-%COMP%]   .accordion__arrow-wrapper[_ngcontent-%COMP%]:hover{background-color:#38a1d61a}.accordion__title[_ngcontent-%COMP%]   app-arrow-icon[_ngcontent-%COMP%]{transition:transform .2s}.accordion__title.active[_ngcontent-%COMP%]   app-arrow-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.accordion__code[_ngcontent-%COMP%]{flex-shrink:0;color:#b3b3b3;font-weight:400;word-break:break-word}.accordion__body[_ngcontent-%COMP%]{margin-top:4px;color:#757575}.accordion__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:0 6px;margin:0}.accordion__body[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:-1px;margin-right:-1px}"]
  }), Se);
  function pe(Rt, We) {
    if (1 & Rt) {
      const Re = A.EpF();
      A.TgZ(0, "div")(1, "div", 5)(2, "div", 6), A._uU(3), A.qZA(), A.TgZ(4, "lu-svg-icon", 7), A.NdJ("click", function () {
        A.CHM(Re);
        const q = A.oxw();
        return A.KtG(q.modalRef.close());
      }), A.qZA()()();
    }
    if (2 & Rt) {
      const Re = A.oxw();
      A.xp6(3), A.Oqu(Re.fullName), A.xp6(1), A.Q6J("size", 24);
    }
  }
  function be(Rt, We) {
    1 & Rt && A._UZ(0, "consultation-item", 8), 2 & Rt && A.Q6J("data", We.$implicit);
  }
  function le(Rt, We) {
    1 & Rt && (A.ynx(0), A.TgZ(1, "div", 9), A._uU(2, "Все консультации на сегодня выполнены"), A.qZA(), A.BQk());
  }
  te = (0, t.gn)([(0, e.c)()], te);
  let n = ((qe = class {
    constructor(We, Re, st, q, mt, ut) {
      this.modalData = We, this.modalRef = Re, this.cdr = st, this.store = q, this.http = mt, this.keycloak = ut, this.consultations = [], this.isLoading = !1;
    }
    ngOnInit() {
      this.store.select(d.C8).pipe((0, e.t)(this)).subscribe(({
        menuName: We,
        params: Re
      }) => {
        "ConsultationsComponent" === We && this._loadParams(Re);
      }), this.modalRef && this.modalData && this._loadParams(this.modalData);
    }
    getCompositions(We) {
      return this.http.post("/gateway/ehr-db/api/rest/v1/composition/getByUids", {
        uids: We
      }, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`,
          "X-AUTHENTICATION-TOKEN": "YWRtaW4kJCQxMDB8MjAyNS0wNS0wNVQyMTozNzo1My44MTE4MTJ8ODNhODZjOGQ5MDY0ZDc2NDViNjc3YWI3ZTk5YjVjNTc="
        }
      });
    }
    get fullName() {
      return `\n      ${this.modalData?.data?.careCase?.lastName || ""}\n      ${this.modalData?.data?.careCase?.firstName || ""}\n      ${this.modalData?.data?.careCase?.secondName || ""}\n    `;
    }
    _loadParams(We) {
      if (!We?.data) return;
      const Re = (0, M.hj)((0, a.get)(We, "data.consultationAssignment"));
      if (0 === Re.length) return this.consultations = [], this.isLoading = !1, this.modalRef?.close(), this.modalRef || this.store.dispatch((0, m.K0)({
        menuName: null
      })), void this.cdr.markForCheck();
      const st = (0, a.map)(Re, "assignmentCompositionUid");
      this.isLoading = !0, this.getCompositions(st).pipe((0, e.t)(this)).subscribe(q => {
        this.consultations = (0, a.map)(Re, mt => ({
          ...mt,
          composition: (0, a.find)(q, ut => (0, a.includes)(ut.compositionUid, mt.assignmentCompositionUid))
        })), this.isLoading = !1, this.cdr.markForCheck();
      });
    }
  }).ɵfac = function (Re) {
    return new (Re || qe)(A.Y36(b.UM, 8), A.Y36(N.Rn, 8), A.Y36(A.sBO), A.Y36(O.yh), A.Y36(L.eN), A.Y36(C.M));
  }, qe.ɵcmp = A.Xpm({
    type: qe,
    selectors: [["app-consultations"]],
    decls: 7,
    vars: 3,
    consts: [[4, "ngIf"], [1, "consultations"], [1, "consultations-heading"], [1, "consultations-list"], [3, "data", 4, "ngFor", "ngForOf"], [1, "border-heading"], [1, "fio"], ["icon", "close", 3, "size", "click"], [3, "data"], [2, "text-align", "center"]],
    template: function (Re, st) {
      1 & Re && (A.YNc(0, pe, 5, 2, "div", 0), A.TgZ(1, "div", 1)(2, "div", 2), A._uU(3, "Консультации"), A.qZA(), A.TgZ(4, "div", 3), A.YNc(5, be, 1, 1, "consultation-item", 4), A.YNc(6, le, 3, 0, "ng-container", 0), A.qZA()()), 2 & Re && (A.Q6J("ngIf", !!st.modalRef), A.xp6(5), A.Q6J("ngForOf", st.consultations), A.xp6(1), A.Q6J("ngIf", !st.isLoading && 0 === st.consultations.length));
    },
    dependencies: [v.sg, v.O5, te, I.q],
    styles: [".consultations[_ngcontent-%COMP%]{padding:24px}.consultations-heading[_ngcontent-%COMP%]{margin-bottom:24px;font-size:17px;font-weight:600;color:#000}.consultations-list[_ngcontent-%COMP%]   consultation-item[_ngcontent-%COMP%]{display:block}.consultations-list[_ngcontent-%COMP%]   consultation-item[_ngcontent-%COMP%]:not(:last-child){position:relative;margin-bottom:24px;padding-bottom:24px}.consultations-list[_ngcontent-%COMP%]   consultation-item[_ngcontent-%COMP%]:not(:last-child):after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:1px;background-color:#e6e6e6}"],
    changeDetection: 0
  }), qe);
  n = (0, t.gn)([(0, e.c)()], n);
});
