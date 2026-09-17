// Extracted from main; webpack module 60649. Factory, not an ES module.
((Ae, V, i) => {
  var Ct, Ft;
  i.d(V, {
    V: () => ut
  });
  var t = i(97582),
    e = i(5264),
    a = i(17489),
    m = i(39300),
    d = i(54004),
    M = i(71884),
    b = i(4128),
    A = i(70262),
    N = i(39646),
    I = i(3977),
    O = i(35314),
    L = i(73745),
    C = i(8830),
    v = i(94650),
    f = i(44348),
    E = i(93278),
    h = i(89653),
    x = i(83034),
    u = i(36895),
    T = i(18505),
    R = i(82805),
    B = i(95698),
    y = i(66425),
    j = i(29358),
    W = i(73766);
  const F = ["направление_на_инструментальное_исследование", "направление_на_инструментальную_диагностику"],
    Le = ["запрос_на_инструментальное_исследование", "запрос_на_инструментальную_диагностику"],
    ke = {
      PLANNED: "Планово",
      EMERGENT: "Экстренно",
      CITO: "Cito"
    };
  function J(Et) {
    return Array.isArray(Et) ? Et[0] : Et;
  }
  function fe(Et, Ue) {
    const Me = (0, a.get)(Et, Ue);
    if (null != Me && "" !== Me) return Me;
    const Ke = Ue.map(Ze => 0 === Ze || "0" === Ze ? 0 : Ze);
    return (0, a.get)(Et, Ke);
  }
  function ye(Et, Ue) {
    const Me = Et?.composition;
    if (!Me) return "";
    const Ke = [Ue, Ue.map(Ze => 0 === Ze ? "0" : Ze)];
    for (const Ze of F) for (const Ee of Le) for (const je of Ke) {
      const Mt = fe(Me, [Ze, Ee, 0, ...je]);
      if (null != Mt && "" !== Mt) return String(Mt);
    }
    return "";
  }
  function ae(Et) {
    const Ue = Et?.composition;
    if (!Ue) return "";
    for (const Me of F) {
      const Ke = (0, a.get)(Ue, [Me, "context", 0, "подробности_контекста", 0, "автор_информации", 0, "наименование_должности"]) ?? J((0, a.get)(Ue, [Me, "context", "подробности_контекста", "автор_информации", "наименование_должности"]));
      if (Ke) return String(Ke);
    }
    return "";
  }
  function Y(Et) {
    return Et ? ke[Et] ?? Et : "";
  }
  var be = i(33837),
    le = i(21846),
    n = i(24006),
    Se = i(32366),
    qe = i(95737);
  const Rt = ["titleText"];
  function We(Et, Ue) {
    if (1 & Et) {
      const Me = v.EpF();
      v.TgZ(0, "span", 13), v.NdJ("click", function (Ze) {
        v.CHM(Me);
        const Ee = v.oxw();
        return v.KtG(Ee.onExpand(Ze));
      }), v._UZ(1, "app-arrow-icon"), v.qZA();
    }
  }
  function Re(Et, Ue) {
    if (1 & Et && (v.ynx(0), v._UZ(1, "span", 8), v.TgZ(2, "span"), v._uU(3), v.qZA(), v.BQk()), 2 & Et) {
      const Me = v.oxw();
      v.xp6(3), v.Oqu(Me.assignmentRoom);
    }
  }
  let st = ((Ct = class {
    constructor(Ue, Me, Ke) {
      this.cdr = Ue, this.instrumentalApiService = Me, this.sharedDataService = Ke, this.isLoadingNotified = !1, this.isLoadingPrepared = !1, this.titleExpanded = !1, this.isNotified = !1, this.isPrepared = !1, this.isShowExpander = !1;
    }
    ngOnInit() {
      this.isNotified = !!this.data.patientNotified, this.isPrepared = !!this.data.patientPrepared;
      const Ue = function pe(Et, Ue, Me) {
        const Ke = function G(Et) {
            return {
              code: Et?.assignmentCode ?? "",
              name: Et?.assignmentName ?? "",
              urgency: Y(Et?.cito),
              plannedDate: Et?.assignmentDate ?? "",
              assignmentDate: Et?.signDate ?? Et?.created ?? "",
              doctorJobTitle: Et?.doctorJob ?? "",
              doctorName: Et?.doctorName ?? ""
            };
          }(Et),
          Ze = function te(Et) {
            return {
              code: ye(Et, ["запрос", 0, "назначение", 0, "|code"]),
              name: ye(Et, ["запрос", 0, "назначение", 0, "|value"]),
              urgency: ye(Et, ["запрос", 0, "срочность", 0]),
              plannedDate: ye(Et, ["запрос", 0, "дата_выполнения", 0]),
              assignmentDate: ye(Et, ["запрос", 0, "дата_назначения", 0]),
              doctorJobTitle: ae(Et),
              doctorName: ye(Et, ["назначивший_врач", 0, "назначивший_врач", 0, "|value"])
            };
          }(Ue);
        return {
          code: Ke.code || Ze.code,
          name: Ke.name || Ze.name,
          urgency: Ke.urgency || Ze.urgency || Y(Me),
          plannedDate: Ke.plannedDate || Ze.plannedDate,
          assignmentDate: Ke.assignmentDate || Ze.assignmentDate,
          doctorJobTitle: Ke.doctorJobTitle || Ze.doctorJobTitle,
          doctorName: Ke.doctorName || Ze.doctorName
        };
      }(this.data?.instrumentalInfo, this.data?.composition, this.data?.cito);
      this.assignmentText = Ue.name || this.data?.assignmentName || "", this.assignmentRoom = this.data?.room ?? this.data?.instrumentalInfo?.room ?? "", this.assignmentPlan = this.capitalizeFirstLetter(Ue.urgency), this.assignmentPlanData = this.formatBackendDateTime(this.data?.assignmentDate ?? this.data?.instrumentalInfo?.assignmentDate), this.assignmentDoctorJobTitle = this.lowercaseFirstLetter(Ue.doctorJobTitle), this.assignmentDoctorName = this.formatFioShort(Ue.doctorName), this.assignmentAppointmentDate = this.formatAssignedDateTime(this.data?.instrumentalInfo?.signDate ?? Ue.assignmentDate ?? this.data?.instrumentalInfo?.created);
    }
    ngAfterViewInit() {
      this.updateTitleExpander();
    }
    updateTitleExpander() {
      const Ue = this.titleText?.nativeElement;
      if (!Ue) return;
      const Me = Ue.classList.contains("accordion__title-text--collapsed");
      Ue.classList.remove("accordion__title-text--collapsed");
      const Ke = Number.parseFloat(getComputedStyle(Ue).lineHeight) || 21;
      this.isShowExpander = Ue.scrollHeight > Ke + 1, Me && Ue.classList.add("accordion__title-text--collapsed"), this.cdr.markForCheck();
    }
    capitalizeFirstLetter(Ue) {
      return Ue && Ue[0].toUpperCase() + Ue.slice(1);
    }
    lowercaseFirstLetter(Ue) {
      return Ue && Ue[0].toLowerCase() + Ue.slice(1);
    }
    formatBackendDateTime(Ue) {
      if (!Ue) return "";
      const Me = Ue.replace(" ", "T").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (!Me) return (0, y.Z)(new Date(Ue), "dd MMM, HH:mm", {
        locale: W.default
      });
      const [, Ke, Ze, Ee, je, Mt] = Me,
        Je = new Date(Number(Ke), Number(Ze) - 1, Number(Ee), Number(je), Number(Mt));
      return (0, y.Z)(Je, "dd MMM, HH:mm", {
        locale: W.default
      });
    }
    formatAssignedDateTime(Ue) {
      if (!Ue) return "";
      const Me = Ue.replace(" ", "T").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (Me) {
        const [, Ke, Ze, Ee, je, Mt] = Me,
          Je = new Date(Number(Ke), Number(Ze) - 1, Number(Ee), Number(je), Number(Mt));
        return (0, y.Z)((0, j.Z)(Je, 3), "dd MMM, HH:mm", {
          locale: W.default
        });
      }
      return (0, y.Z)((0, j.Z)(new Date(Ue), 3), "dd MMM, HH:mm", {
        locale: W.default
      });
    }
    formatFioShort(Ue) {
      if (!Ue) return "";
      const Me = Ue.trim().split(/\s+/);
      if (Me.length < 2) return Ue;
      const Ze = Me[1],
        Ee = Me[2];
      return `${Me[0]} ${Ze ? Ze[0].toUpperCase() + "." : ""}${Ee ? Ee[0].toUpperCase() + "." : ""}`;
    }
    onNotifyPatient(Ue) {
      const Me = this.isNotified;
      this.runMarkRequest(() => this.markPatientNotified(Ue), Ke => {
        this.isLoadingNotified = Ke;
      }, () => {
        this.data.patientNotified = Ue ? new Date().toISOString() : null;
      }, () => {
        this.isNotified = Me;
      });
    }
    onPreparePatient(Ue) {
      const Me = this.isPrepared;
      this.runMarkRequest(() => this.markPatientPrepared(Ue), Ke => {
        this.isLoadingPrepared = Ke;
      }, () => {
        this.data.patientPrepared = Ue ? new Date().toISOString() : null;
      }, () => {
        this.isPrepared = Me;
      });
    }
    runMarkRequest(Ue, Me, Ke, Ze) {
      Me(!0), Ue().pipe((0, T.b)(() => {
        Ke(), this.cdr.markForCheck(), (0, R.H)(be.x).pipe((0, B.q)(1), (0, e.t)(this)).subscribe(() => {
          this.sharedDataService.runActionSubject("tasksPatientList");
        });
      }), (0, A.K)(Ee => (console.error("[instrumental-item] Ошибка сохранения признака", Ee), Ze(), this.cdr.markForCheck(), (0, N.of)(null))), (0, e.t)(this)).subscribe(() => {
        Me(!1);
      });
    }
    markPatientNotified(Ue) {
      return this.instrumentalApiService.markInstrumentalPatientNotifiedCommand({
        assignmentCompositionUid: this.data.assignmentCompositionUid,
        patientNotified: Ue ? new Date().toISOString() : ""
      });
    }
    markPatientPrepared(Ue) {
      return this.instrumentalApiService.markInstrumentalPatientPreparedCommand({
        assignmentCompositionUid: this.data.assignmentCompositionUid,
        patientPrepared: Ue ? new Date().toISOString() : ""
      });
    }
    onExpand(Ue) {
      Ue.stopPropagation(), this.titleExpanded = !this.titleExpanded;
    }
  }).ɵfac = function (Me) {
    return new (Me || Ct)(v.Y36(v.sBO), v.Y36(x.IE), v.Y36(le.g));
  }, Ct.ɵcmp = v.Xpm({
    type: Ct,
    selectors: [["instrumental-item"]],
    viewQuery: function (Me, Ke) {
      if (1 & Me && v.Gf(Rt, 5), 2 & Me) {
        let Ze;
        v.iGM(Ze = v.CRH()) && (Ke.titleText = Ze.first);
      }
    },
    inputs: {
      data: "data"
    },
    decls: 22,
    vars: 16,
    consts: [[1, "instrumental-item"], [1, "accordion"], [1, "accordion__item"], [1, "accordion__title"], [1, "accordion__title-text"], ["titleText", ""], ["class", "accordion__arrow-wrapper", 3, "click", 4, "ngIf"], [1, "accordion__body"], [1, "dot"], [4, "ngIf"], [1, "patient-notify"], ["label", "Пациент уведомлен", 3, "disabled", "ngModel", "ngModelChange"], ["label", "Пациент подготовлен", 3, "disabled", "ngModel", "ngModelChange"], [1, "accordion__arrow-wrapper", 3, "click"]],
    template: function (Me, Ke) {
      1 & Me && (v.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4, 5), v._uU(6), v.qZA(), v.YNc(7, We, 2, 0, "span", 6), v.qZA(), v.TgZ(8, "div", 7)(9, "p")(10, "span"), v._uU(11, "Назначено"), v.qZA(), v._UZ(12, "span", 8), v.TgZ(13, "span"), v._uU(14), v.qZA(), v.YNc(15, Re, 4, 1, "ng-container", 9), v._UZ(16, "span", 8), v.TgZ(17, "span"), v._uU(18), v.qZA()()()()(), v.TgZ(19, "div", 10)(20, "lu-toggle", 11), v.NdJ("ngModelChange", function (Ee) {
        return Ke.isNotified = Ee;
      })("ngModelChange", function (Ee) {
        return Ke.onNotifyPatient(Ee);
      }), v.qZA(), v.TgZ(21, "lu-toggle", 12), v.NdJ("ngModelChange", function (Ee) {
        return Ke.isPrepared = Ee;
      })("ngModelChange", function (Ee) {
        return Ke.onPreparePatient(Ee);
      }), v.qZA()()()), 2 & Me && (v.xp6(3), v.ekj("active", Ke.titleExpanded), v.xp6(1), v.ekj("accordion__title-text--collapsed", !Ke.titleExpanded), v.xp6(2), v.Oqu(Ke.assignmentText), v.xp6(1), v.Q6J("ngIf", Ke.isShowExpander), v.xp6(7), v.AsE("", Ke.assignmentPlan, " на ", Ke.assignmentPlanData, ""), v.xp6(1), v.Q6J("ngIf", Ke.assignmentRoom), v.xp6(3), v.lnq(" Назначил ", Ke.assignmentDoctorJobTitle, " ", Ke.assignmentDoctorName, " ", Ke.assignmentAppointmentDate, " "), v.xp6(2), v.Q6J("disabled", Ke.isLoadingNotified)("ngModel", Ke.isNotified), v.xp6(1), v.Q6J("disabled", Ke.isLoadingPrepared)("ngModel", Ke.isPrepared));
    },
    dependencies: [n.JJ, n.On, Se.M, qe.w, u.O5],
    styles: [".instrumental-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.instrumental-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px 24px}.instrumental-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]   lu-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.instrumental-item[_ngcontent-%COMP%]   .patient-notify[_ngcontent-%COMP%]   lu-toggle[data-lu-checked=false][_ngcontent-%COMP%]     .lu-toggle-wrapper{background-color:#d9d9d9}.accordion[_ngcontent-%COMP%]{position:relative;padding:6px 32px 6px 12px;background-color:#f2f2f2;border-radius:4px;font-size:13px}.accordion__title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding-right:32px;font-weight:600}.accordion__title-text[_ngcontent-%COMP%]{flex:1;min-width:0;color:#000;word-break:break-word}.accordion__title-text--collapsed[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.accordion__title[_ngcontent-%COMP%]   .accordion__arrow-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:flex-start;padding-top:6px;width:32px;min-height:100%;color:#67bde3;cursor:pointer;transition:background-color .2s}.accordion__title[_ngcontent-%COMP%]   .accordion__arrow-wrapper[_ngcontent-%COMP%]:hover{background-color:#38a1d61a}.accordion__title[_ngcontent-%COMP%]   app-arrow-icon[_ngcontent-%COMP%]{transition:transform .2s}.accordion__title.active[_ngcontent-%COMP%]   app-arrow-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.accordion__body[_ngcontent-%COMP%]{margin-top:4px;color:#757575}.accordion__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:0 6px;margin:0}.accordion__body[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:-1px;margin-right:-1px}"]
  }), Ct);
  function q(Et, Ue) {
    if (1 & Et) {
      const Me = v.EpF();
      v.TgZ(0, "div")(1, "div", 5)(2, "div", 6), v._uU(3), v.qZA(), v.TgZ(4, "lu-svg-icon", 7), v.NdJ("click", function () {
        v.CHM(Me);
        const Ze = v.oxw();
        return v.KtG(Ze.modalRef.close());
      }), v.qZA()()();
    }
    if (2 & Et) {
      const Me = v.oxw();
      v.xp6(3), v.Oqu(Me.fullName), v.xp6(1), v.Q6J("size", 24);
    }
  }
  function mt(Et, Ue) {
    1 & Et && v._UZ(0, "instrumental-item", 8), 2 & Et && v.Q6J("data", Ue.$implicit);
  }
  st = (0, t.gn)([(0, e.c)()], st);
  let ut = ((Ft = class {
    constructor(Ue, Me, Ke, Ze, Ee) {
      this.modalData = Ue, this.modalRef = Me, this.cdr = Ke, this.store = Ze, this.instrumentalApiService = Ee, this.instrumentalAssignments = [], this.isLoading = !1, this.loadedCareCaseId = null, this.modalRef && this._loadParams(this.modalData);
    }
    ngOnInit() {
      this.store.select(L.C8).pipe((0, m.h)(({
        menuName: Ue
      }) => "InstResComponent" === Ue), (0, d.U)(({
        params: Ue
      }) => Ue), (0, M.x)(), (0, e.t)(this)).subscribe(Ue => this._loadParams(Ue));
    }
    get fullName() {
      return `\n      ${this.modalData?.data?.careCase?.lastName || ""}\n      ${this.modalData?.data?.careCase?.firstName || ""}\n      ${this.modalData?.data?.careCase?.secondName || ""}\n    `;
    }
    _loadParams(Ue) {
      const Me = `${(0, a.get)(Ue, "data.careCase.careCaseId") ?? ""}`.trim() || null,
        Ke = (0, C.hh)((0, a.get)(Ue, "data.instrumentalAssignment"));
      if (0 === Ke.length) return this.instrumentalAssignments = [], this.loadedCareCaseId = Me, void this.cdr.markForCheck();
      Me && Me === this.loadedCareCaseId && (this.instrumentalAssignments.length > 0 || this.isLoading) || (this.loadedCareCaseId = Me, this.isLoading = !0, (0, b.D)(Ke.map(Ze => this.instrumentalApiService.getInstrumentalStatusQuery(Ze.assignmentCompositionUid).pipe((0, d.U)(Ee => ({
        ...Ze,
        instrumentalInfo: Ee
      })), (0, A.K)(Ee => (console.error("[instRes] Не удалось загрузить назначение ИИ", Ze.assignmentCompositionUid, Ee), (0, N.of)({
        ...Ze,
        instrumentalInfo: null
      })))))).pipe((0, e.t)(this)).subscribe(Ze => {
        this.instrumentalAssignments = Ze.filter(Ee => (0, C.Ro)(Ee)), this.isLoading = !1, 0 === this.instrumentalAssignments.length && (this.modalRef?.close(), this.modalRef || this.store.dispatch((0, O.K0)({
          menuName: null
        }))), this.cdr.markForCheck();
      }));
    }
  }).ɵfac = function (Me) {
    return new (Me || Ft)(v.Y36(I.UM, 8), v.Y36(f.Rn, 8), v.Y36(v.sBO), v.Y36(h.yh), v.Y36(x.IE));
  }, Ft.ɵcmp = v.Xpm({
    type: Ft,
    selectors: [["app-instrumental-research"]],
    decls: 6,
    vars: 2,
    consts: [[4, "ngIf"], [1, "instrumental"], [1, "instrumental-heading"], [1, "instrumental-body"], [3, "data", 4, "ngFor", "ngForOf"], [1, "border-heading"], [1, "fio"], ["icon", "close", 3, "size", "click"], [3, "data"]],
    template: function (Me, Ke) {
      1 & Me && (v.YNc(0, q, 5, 2, "div", 0), v.TgZ(1, "div", 1)(2, "div", 2), v._uU(3, "Инструментальная диагностика"), v.qZA(), v.TgZ(4, "div", 3), v.YNc(5, mt, 1, 1, "instrumental-item", 4), v.qZA()()), 2 & Me && (v.Q6J("ngIf", !!Ke.modalRef), v.xp6(5), v.Q6J("ngForOf", Ke.instrumentalAssignments));
    },
    dependencies: [u.sg, u.O5, st, E.q],
    styles: [".instrumental[_ngcontent-%COMP%]{padding:24px}.instrumental-heading[_ngcontent-%COMP%]{margin-bottom:24px;font-size:17px;font-weight:600;color:#000}.instrumental-body[_ngcontent-%COMP%]   instrumental-item[_ngcontent-%COMP%]{display:block}.instrumental-body[_ngcontent-%COMP%]   instrumental-item[_ngcontent-%COMP%]:not(:last-child){position:relative;margin-bottom:24px;padding-bottom:24px}.instrumental-body[_ngcontent-%COMP%]   instrumental-item[_ngcontent-%COMP%]:not(:last-child):after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:1px;background-color:#e6e6e6}"],
    changeDetection: 0
  }), Ft);
  ut = (0, t.gn)([(0, e.c)()], ut);
});
