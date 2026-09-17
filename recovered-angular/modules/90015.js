// Extracted from main; webpack module 90015. Factory, not an ES module.
((Ae, V, i) => {
  var mt, Et, Ze;
  i.d(V, {
    FD: () => Y,
    kj: () => te,
    _t: () => be,
    Dg: () => le,
    X8: () => Se,
    $L: () => qe,
    B_: () => Rt,
    hb: () => We,
    In: () => q
  });
  var t = i(97582),
    e = i(5264),
    a = i(39841),
    m = i(63900),
    d = i(71764),
    M = i.n(d),
    b = i(84445),
    A = i(88062),
    N = i(98115),
    I = i(21028),
    O = i(99036),
    L = i(34364),
    C = i(30229),
    v = i(94650),
    f = i(89653),
    E = i(44688),
    h = i(91854),
    x = i(73453),
    u = i(36895),
    T = i(93278),
    R = i(77978),
    B = i(19550),
    y = i(59250),
    j = i(71298),
    W = i(76754);
  function F(Ee, je) {
    if (1 & Ee) {
      const Mt = v.EpF();
      v.TgZ(0, "div", 18), v.NdJ("click", function () {
        v.CHM(Mt), v.oxw(2);
        const Xt = v.MAs(19),
          Nn = v.oxw();
        return v.KtG(Nn.onDeleteTube(Xt));
      }), v._UZ(1, "lu-svg-icon", 21), v.TgZ(2, "span"), v._uU(3, "Удалить"), v.qZA()();
    }
    2 & Ee && (v.xp6(1), v.Q6J("size", 24));
  }
  function Le(Ee, je) {
    if (1 & Ee) {
      const Mt = v.EpF();
      v.TgZ(0, "div", 18), v.NdJ("click", function () {
        v.CHM(Mt), v.oxw();
        const Xt = v.MAs(19),
          Nn = v.oxw();
        return v.KtG(Nn.onOpenCard(Xt));
      }), v._UZ(1, "lu-svg-icon", 19), v.TgZ(2, "span"), v._uU(3, "Открыть карту наблюдения"), v.qZA()(), v.YNc(4, F, 4, 1, "div", 20);
    }
    if (2 & Ee) {
      const Mt = v.oxw(2);
      v.xp6(1), v.Q6J("size", 24), v.xp6(3), v.Q6J("ngIf", Mt.allowDeleteCard);
    }
  }
  function ke(Ee, je) {
    if (1 & Ee && (v.ynx(0), v._UZ(1, "div", 9), v.TgZ(2, "div")(3, "span", 23), v._uU(4, "Обработка носовых ходов:"), v.qZA(), v._uU(5), v.qZA(), v.BQk()), 2 & Ee) {
      const Mt = v.oxw(3);
      v.xp6(5), v.hij(" ", Mt.patientInfo.nasalTreatmentTime, " ");
    }
  }
  function J(Ee, je) {
    if (1 & Ee && (v.TgZ(0, "div", 26)(1, "span", 23), v._uU(2, "Уход завершен:"), v.qZA(), v._uU(3), v.qZA()), 2 & Ee) {
      const Mt = v.oxw(3);
      v.xp6(3), v.hij(" ", Mt.patientInfo.finishDate, " ");
    }
  }
  function fe(Ee, je) {
    if (1 & Ee && (v.TgZ(0, "div", 26)(1, "span", 23), v._uU(2, "Медсестра:"), v.qZA(), v._uU(3), v.qZA()), 2 & Ee) {
      const Mt = v.oxw(3);
      v.xp6(3), v.hij(" ", Mt.patientInfo.nurseName, " ");
    }
  }
  function ye(Ee, je) {
    if (1 & Ee && (v.TgZ(0, "div", 22)(1, "div")(2, "span", 23), v._uU(3, "Дата установки:"), v.qZA(), v._uU(4), v.qZA(), v.YNc(5, ke, 6, 1, "ng-container", 24), v.YNc(6, J, 4, 1, "div", 25), v.TgZ(7, "div", 26)(8, "span", 23), v._uU(9, "Отделение:"), v.qZA(), v._uU(10), v.qZA(), v.YNc(11, fe, 4, 1, "div", 25), v.qZA()), 2 & Ee) {
      const Mt = v.oxw(2);
      v.xp6(4), v.hij(" ", Mt.patientInfo.installDate, " "), v.xp6(1), v.Q6J("ngIf", Mt.patientInfo.nasalTreatmentTime), v.xp6(1), v.Q6J("ngIf", Mt.patientInfo.finishDate), v.xp6(4), v.hij(" ", Mt.patientInfo.deptName, " "), v.xp6(1), v.Q6J("ngIf", Mt.patientInfo.nurseName);
    }
  }
  function ae(Ee, je) {
    if (1 & Ee) {
      const Mt = v.EpF();
      v.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3), v.NdJ("click", function () {
        v.CHM(Mt);
        const Xt = v.oxw();
        return v.KtG(Xt.togglePatient());
      }), v._UZ(3, "lu-svg-icon", 4)(4, "div", 5), v.ALo(5, "highlight"), v.ALo(6, "async"), v.TgZ(7, "div", 6)(8, "div", 7), v._UZ(9, "lu-svg-icon", 8), v.TgZ(10, "span"), v._uU(11), v.qZA()(), v._UZ(12, "div", 9), v.TgZ(13, "span"), v._uU(14), v.qZA()()(), v.TgZ(15, "button", 10, 11), v.NdJ("click", function () {
        v.CHM(Mt);
        const Xt = v.MAs(19),
          Nn = v.oxw();
        return v.KtG(Nn.toggleMenu(Xt));
      }), v._UZ(17, "lu-svg-icon", 12), v.TgZ(18, "lu-dropdown", 13, 14), v.YNc(20, Le, 5, 2, "ng-template", null, 15, v.W1O), v.qZA()()(), v.TgZ(22, "lu-expander", 16), v.YNc(23, ye, 12, 5, "ng-template", null, 17, v.W1O), v.qZA()();
    }
    if (2 & Ee) {
      const Mt = v.MAs(21),
        Je = v.MAs(24),
        Xt = v.oxw();
      v.ekj("open", Xt.expanded), v.xp6(3), v.Q6J("size", 16), v.xp6(1), v.Q6J("innerHTML", v.xi3(5, 14, Xt.patientInfo.patientFio, v.lcZ(6, 17, Xt.searchTerm$)), v.oJD), v.xp6(5), v.Q6J("icon", Xt.patientInfo.gender)("size", 24), v.xp6(2), v.Oqu(Xt.patientInfo.age), v.xp6(2), v.ekj("no-ward", "Не размещен" === Xt.patientInfo.wardName), v.xp6(1), v.Oqu(Xt.patientInfo.wardName), v.xp6(3), v.Q6J("size", 24), v.xp6(1), v.Q6J("content", Mt), v.xp6(4), v.Q6J("expanded", Xt.expanded)("content", Je);
    }
  }
  let Y = ((mt = class {
    constructor(je, Mt, Je, Xt) {
      this.store = je, this.modalService = Mt, this.messageService = Je, this.compositionService = Xt, this.commonData = null, this.expanded = !1, this.patientInfo = null, this.allowDeleteCard = !1, this.searchTerm$ = this.store.select(O.d4);
    }
    ngOnInit() {
      const {
          careCase: je,
          elements: Mt,
          patientMovement: Je
        } = this.data,
        Xt = Mt.reduce((Pi, Ii) => Ii.installDate && (!Pi || Ii.installDate > Pi.installDate) ? Ii : Pi, null),
        Nn = {
          patientFio: [je.lastName, je.firstName, je.secondName].join(" "),
          gender: 1 == je.genderCode ? "male2" : "female2",
          age: (0, A.Kp)(je.birthDate) || 0,
          wardName: Je.wardName ? Je.wardName : "Не размещен",
          installDate: Xt ? M()(Xt.installDate).format(N.UV) : "",
          finishDate: Xt && Xt.finishDate ? M()(Xt.finishDate).format(N.TX) : "",
          deptName: Je.departmentName
        };
      (0, a.a)({
        employees: this.store.select(O.VC),
        date: this.store.select(O.YI)
      }).pipe((0, e.t)(this)).subscribe(({
        employees: Pi,
        date: Ii
      }) => {
        if (Xt) {
          const yi = Xt.nasogastricCareMarks.find(co => M()(Ii).format(N.Hu) === M()(co.observationDate).format(N.Hu));
          if (yi && yi.nasalTreatmentTime && (Nn.nasalTreatmentTime = yi.nasalTreatmentTime.slice(0, 5)), yi && yi.nurseId) {
            const Jo = Pi.find(({
              id: fr
            }) => fr === yi.nurseId).fio.split(" ");
            Nn.nurseName = `${Jo[0]} ${Jo[1][0]}.${Jo[2][0]}.`;
          }
        }
      }), this.commonData = {
        careCaseId: je.careCaseId,
        patientId: je.actualPatientId,
        parentUid: Xt ? Xt.protocolId : ""
      }, this.patientInfo = Nn, this.allowDeleteCard = !!Xt && !Xt.nasogastricCareMarks.length;
    }
    togglePatient() {
      this.expanded = !this.expanded;
    }
    toggleMenu(je) {
      je.toggle();
    }
    onOpenCard(je) {
      this.store.dispatch((0, L.lR)(this.commonData.careCaseId)), this.modalService.open(new b.X(C.W), {
        data: {},
        panelClass: ["full-screen-modal", "tube-card-modal"],
        width: "768px",
        maxWidth: "100%",
        height: "calc(100% - (48px + 36px))"
      }).afterClose().subscribe(() => {}), je.close();
    }
    onDeleteTube(je) {
      this.modalService.open(new b.X(I.z), {
        panelClass: "delete-modal",
        data: {
          title: "Удаление карты наблюдения",
          message: "Карта наблюдения будет удалена вместе с пациентом из Списка ухода. Удалить пациента из Списка ухода?"
        }
      }).beforeClose().subscribe(Je => {
        Je && this.compositionService.getEhrByPatientId(this.commonData.patientId).pipe((0, m.w)(Xt => this.compositionService.deleteTubeDocument(Xt, this.commonData.parentUid))).subscribe(() => {
          je.close(), this.messageService.success("Карта наблюдения успешно удалена"), this.store.dispatch((0, L.Rc)(!0));
        });
      });
    }
  }).ɵfac = function (Mt) {
    return new (Mt || mt)(v.Y36(f.yh), v.Y36(E.ap), v.Y36(h.Jv), v.Y36(x.P));
  }, mt.ɵcmp = v.Xpm({
    type: mt,
    selectors: [["app-tube-adaptive-cell"]],
    inputs: {
      data: "data"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "patient", 3, "open", 4, "ngIf"], [1, "patient"], [1, "patient__header"], [1, "header-container", 3, "click"], ["icon", "chevron-right", 1, "icon-fio", 3, "size"], [1, "fio", 3, "innerHTML"], [1, "details"], [1, "details__gander-age"], [3, "icon", "size"], [1, "sep"], ["lu-button-icon", "", "luDropdownOrigin", "", 1, "patient__header-menu", 3, "click"], ["origin", "luDropdownOrigin"], ["icon", "kebab", 3, "size"], ["positions", "bottom-right", "panelClass", "context-menu-dropdown", 3, "content"], ["dropdownContext", ""], ["contextMenu", ""], [3, "expanded", "content"], ["content", ""], [1, "menu-item", 3, "click"], ["icon", "passport-health", 3, "size"], ["class", "menu-item", 3, "click", 4, "ngIf"], ["icon", "delete", 3, "size"], [1, "patient__body"], [1, "label"], [4, "ngIf"], ["class", "w-100", 4, "ngIf"], [1, "w-100"]],
    template: function (Mt, Je) {
      1 & Mt && v.YNc(0, ae, 25, 19, "div", 0), 2 & Mt && v.Q6J("ngIf", Je.patientInfo);
    },
    dependencies: [u.O5, T.q, R.G, B.k, y.$, j.n, u.Ov, W.S],
    styles: [".patient[_ngcontent-%COMP%]{margin-bottom:8px;border-radius:8px;background:#fff}.patient.open[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] > lu-svg-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.patient__header[_ngcontent-%COMP%]{position:relative}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;padding:16px 72px 16px 16px}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{width:24px;height:24px;--lu-svg-icon-color: #67bde3;transition:.2s ease}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .fio[_ngcontent-%COMP%]{flex-grow:1;margin-right:8px;max-width:254px;font-weight:600}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;align-items:center}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .details__gander-age[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .details__gander-age[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{width:22px;height:22px}.patient__header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .no-ward[_ngcontent-%COMP%]{min-width:89px;font-size:13px;font-weight:600;color:#e04b37}.patient__header-menu[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px;display:flex}.patient__body[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;row-gap:4px;padding:16px 16px 16px 48px;border-top:1px solid #e6e6e6}.patient__body[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#757575}.patient__body[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]{width:100%}.patient[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{margin-right:11px;margin-left:12px;height:15px;width:1px;background-color:#ccc}"]
  }), mt);
  Y = (0, t.gn)([(0, e.c)()], Y);
  var G = i(8010);
  const ut = class {};
  let te = ut;
  function pe(Ee, je) {
    if (1 & Ee && v._UZ(0, "lu-svg-icon", 2), 2 & Ee) {
      const Mt = v.oxw();
      v.Q6J("icon", Mt.icon)("size", 24);
    }
  }
  ut.ɵfac = function (Mt) {
    return new (Mt || ut)();
  }, ut.ɵmod = v.oAB({
    type: ut
  }), ut.ɵinj = v.cJS({
    imports: [u.ez, T.h, R.I, B.o, y.J, j.O, G.v]
  });
  const Ct = class {
    constructor() {
      this.age = 0, this.icon = "";
    }
    ngOnInit() {
      const {
        careCase: je
      } = this.data;
      this.age = (0, A.Kp)(je?.birthDate) || 0, this.icon = 1 == je?.genderCode ? "male2" : "female2";
    }
  };
  let be = Ct;
  Ct.ɵfac = function (Mt) {
    return new (Mt || Ct)();
  }, Ct.ɵcmp = v.Xpm({
    type: Ct,
    selectors: [["tube-gender-age-cell"]],
    inputs: {
      data: "data"
    },
    decls: 4,
    vars: 2,
    consts: [[1, "gender-age-cell"], [3, "icon", "size", 4, "ngIf"], [3, "icon", "size"]],
    template: function (Mt, Je) {
      1 & Mt && (v.TgZ(0, "div", 0), v.YNc(1, pe, 1, 2, "lu-svg-icon", 1), v.TgZ(2, "p"), v._uU(3), v.qZA()()), 2 & Mt && (v.xp6(1), v.Q6J("ngIf", Je.icon), v.xp6(2), v.Oqu(Je.age));
    },
    dependencies: [u.O5, T.q],
    styles: [".gender-age-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.gender-age-cell[_ngcontent-%COMP%]     lu-svg-icon{--lu-svg-icon-height: 22px;--lu-svg-icon-width: 22px}.gender-age-cell[_ngcontent-%COMP%]     lu-svg-icon svg{width:100%;height:100%}"]
  });
  const Ft = class {};
  let le = Ft;
  function n(Ee, je) {
    if (1 & Ee && (v.TgZ(0, "span", 2), v._uU(1), v.qZA()), 2 & Ee) {
      const Mt = je.$implicit;
      v.xp6(1), v.Oqu(Mt);
    }
  }
  Ft.ɵfac = function (Mt) {
    return new (Mt || Ft)();
  }, Ft.ɵmod = v.oAB({
    type: Ft
  }), Ft.ɵinj = v.cJS({
    imports: [u.ez, T.h]
  });
  let Se = ((Et = class {
    constructor(je) {
      this.store = je, this.nurses = [];
    }
    ngOnInit() {
      const {
        elements: je,
        nurseId: Mt
      } = this.data;
      (0, a.a)({
        employees: this.store.select(O.VC),
        observationDateList: this.store.select(O.YI)
      }).pipe((0, e.t)(this)).subscribe(({
        employees: Je,
        observationDateList: Xt
      }) => {
        je.length && je.forEach(Nn => {
          const Pi = Nn.nasogastricCareMarks.find(Ii => M()(Xt).format(N.Hu) === M()(Ii.observationDate).format(N.Hu));
          if (Pi && Pi[Mt]) {
            const yi = Je.find(({
              id: co
            }) => co === Pi[Mt]).fio.split(" ");
            this.nurses.push(`${yi[0]} ${yi[1][0]}.${yi[2][0]}.`);
          } else this.nurses.push("");
        });
      });
    }
  }).ɵfac = function (Mt) {
    return new (Mt || Et)(v.Y36(f.yh));
  }, Et.ɵcmp = v.Xpm({
    type: Et,
    selectors: [["tube-nurse-cell"]],
    inputs: {
      data: "data"
    },
    decls: 2,
    vars: 1,
    consts: [[2, "display", "flex", "flex-direction", "column", "flex-wrap", "nowrap"], ["style", "min-height: 22px;", 4, "ngFor", "ngForOf"], [2, "min-height", "22px"]],
    template: function (Mt, Je) {
      1 & Mt && (v.TgZ(0, "div", 0), v.YNc(1, n, 2, 1, "span", 1), v.qZA()), 2 & Mt && (v.xp6(1), v.Q6J("ngForOf", Je.nurses));
    },
    dependencies: [u.sg]
  }), Et);
  Se = (0, t.gn)([(0, e.c)()], Se);
  const Ue = class {};
  let qe = Ue;
  Ue.ɵfac = function (Mt) {
    return new (Mt || Ue)();
  }, Ue.ɵmod = v.oAB({
    type: Ue
  }), Ue.ɵinj = v.cJS({
    imports: [u.ez]
  });
  const Me = class {
    constructor(je) {
      this.store = je, this.searchTerm$ = this.store.select(O.d4);
    }
    ngOnInit() {
      const {
        careCase: je
      } = this.data;
      this.fio = `${je.lastName} ${je.firstName} ${je?.secondName ?? ""}`;
    }
  };
  let Rt = Me;
  Me.ɵfac = function (Mt) {
    return new (Mt || Me)(v.Y36(f.yh));
  }, Me.ɵcmp = v.Xpm({
    type: Me,
    selectors: [["tube-patient-fio-cell"]],
    inputs: {
      data: "data"
    },
    decls: 3,
    vars: 6,
    consts: [[3, "innerHTML"]],
    template: function (Mt, Je) {
      1 & Mt && (v._UZ(0, "div", 0), v.ALo(1, "highlight"), v.ALo(2, "async")), 2 & Mt && v.Q6J("innerHTML", v.xi3(1, 1, Je.fio, v.lcZ(2, 4, Je.searchTerm$)), v.oJD);
    },
    dependencies: [u.Ov, W.S]
  });
  const Ke = class {};
  let We = Ke;
  Ke.ɵfac = function (Mt) {
    return new (Mt || Ke)();
  }, Ke.ɵmod = v.oAB({
    type: Ke
  }), Ke.ɵinj = v.cJS({
    imports: [u.ez, G.v]
  });
  var Re = i(95698);
  function st(Ee, je) {
    if (1 & Ee && (v.TgZ(0, "span", 2), v._uU(1), v.qZA()), 2 & Ee) {
      const Mt = je.$implicit;
      v.xp6(1), v.Oqu(Mt);
    }
  }
  let q = ((Ze = class {
    constructor(je) {
      this.store = je, this.times = [];
    }
    ngOnInit() {
      this.store.select(O.YI).pipe((0, e.t)(this), (0, Re.q)(1)).subscribe(je => {
        this.data && (this.times = this.data.careMarks.map((Mt, Je) => {
          const Xt = Mt.find(Nn => {
            if (M()(je).format(N.Hu) === M()(Nn.observationDate).format(N.Hu) && Nn[this.data.timeField]) return Nn;
          });
          return Xt ? Xt[this.data.timeField].slice(0, 5) : "   ";
        }));
      });
    }
  }).ɵfac = function (Mt) {
    return new (Mt || Ze)(v.Y36(f.yh));
  }, Ze.ɵcmp = v.Xpm({
    type: Ze,
    selectors: [["tube-time-cell"]],
    inputs: {
      data: "data"
    },
    standalone: !0,
    features: [v.jDz],
    decls: 2,
    vars: 1,
    consts: [[2, "display", "flex", "flex-direction", "column", "flex-wrap", "nowrap"], ["style", "min-height: 22px;", 4, "ngFor", "ngForOf"], [2, "min-height", "22px"]],
    template: function (Mt, Je) {
      1 & Mt && (v.TgZ(0, "div", 0), v.YNc(1, st, 2, 1, "span", 1), v.qZA()), 2 & Mt && (v.xp6(1), v.Q6J("ngForOf", Je.times));
    },
    dependencies: [u.ez, u.sg]
  }), Ze);
  q = (0, t.gn)([(0, e.c)()], q);
});
