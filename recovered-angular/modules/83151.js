// Extracted from main; webpack module 83151. Factory, not an ES module.
((Ae, V, i) => {
  var li;
  i.d(V, {
    g: () => Dt
  });
  var t = i(36895),
    e = i(24006),
    a = i(20891),
    m = i(82409),
    d = i(6676),
    M = i(56137),
    b = i(93278),
    A = i(92203),
    N = i(85623),
    I = i(15091),
    O = i(87545),
    L = i(13700),
    C = i(43150),
    v = i(52958),
    f = i(62804),
    E = i(23062),
    h = i(76500),
    x = i(49267),
    u = i(85171),
    T = i(9073),
    R = i(30229),
    B = i(36337),
    y = i(94650);
  const Ht = class {};
  let j = Ht;
  Ht.ɵfac = function (In) {
    return new (In || Ht)();
  }, Ht.ɵmod = y.oAB({
    type: Ht
  }), Ht.ɵinj = y.cJS({
    imports: [t.ez, T.W1, B.y]
  });
  var W = i(77978);
  const Dn = class {};
  let F = Dn;
  Dn.ɵfac = function (In) {
    return new (In || Dn)();
  }, Dn.ɵmod = y.oAB({
    type: Dn
  }), Dn.ɵinj = y.cJS({
    imports: [t.ez, b.h, M.e_, W.I]
  });
  var Le = i(70823);
  const vt = class {};
  let ke = vt;
  vt.ɵfac = function (In) {
    return new (In || vt)();
  }, vt.ɵmod = y.oAB({
    type: vt
  }), vt.ɵinj = y.cJS({
    imports: [t.ez, b.h, Le.i]
  });
  var J = i(21291),
    fe = i(90127),
    ye = i(62289);
  function ae(Mn, Qn) {
    1 & Mn && (y.ynx(0), y.TgZ(1, "div", 2), y._UZ(2, "lu-svg-icon", 3), y.TgZ(3, "div"), y._uU(4, "Уже было проведено сегодня"), y.qZA()(), y.BQk()), 2 & Mn && (y.xp6(2), y.Q6J("size", 16));
  }
  function Y(Mn, Qn) {
    1 & Mn && y._UZ(0, "lu-svg-icon", 4), 2 & Mn && y.Q6J("luTooltip", "Уже было проведено сегодня")("withArrow", !1)("borderOffset", -4)("positions", "top-left")("size", 16);
  }
  const an = class {
    constructor(Qn, In) {
      this.breakpointObserver = Qn, this.cdr = In, this.isTablet = !1;
    }
    ngOnInit() {
      this.breakpointObserver.observe(fe.o).subscribe(Qn => {
        this.isTablet = Qn.matches, this.cdr.markForCheck();
      });
    }
  };
  let G = an;
  an.ɵfac = function (In) {
    return new (In || an)(y.Y36(ye.Yg), y.Y36(y.sBO));
  }, an.ɵcmp = y.Xpm({
    type: an,
    selectors: [["app-tube-event-hint"]],
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["isTooltip", ""], [1, "hint-wrapper"], ["icon", "info-line", 3, "size"], ["panelClass", "tube-card-tooltip", "icon", "info-line", 3, "luTooltip", "withArrow", "borderOffset", "positions", "size"]],
    template: function (In, ui) {
      if (1 & In && (y.YNc(0, ae, 5, 1, "ng-container", 0), y.YNc(1, Y, 1, 5, "ng-template", null, 1, y.W1O)), 2 & In) {
        const To = y.MAs(2);
        y.Q6J("ngIf", ui.isTablet)("ngIfElse", To);
      }
    },
    dependencies: [t.O5, b.q, Le.$],
    styles: ["[_nghost-%COMP%]{display:flex}@media (max-width: 960px){[_nghost-%COMP%]{width:100%}}.hint-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#38a1d6}.hint-wrapper[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #38a1d6}lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #b3b3b3;cursor:pointer}lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}"],
    changeDetection: 0
  });
  var te = i(97582),
    pe = i(5264),
    be = i(71764),
    le = i.n(be),
    n = i(95698),
    Se = i(63900),
    qe = i(84445),
    Rt = i(98115),
    We = i(21028),
    Re = i(34364),
    st = i(44688),
    q = i(97215),
    mt = i(73453),
    ut = i(89653);
  function Ct(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "lu-expansion-panel-header", 12), y._uU(1), y._UZ(2, "lu-svg-icon", 2), y.qZA()), 2 & Mn) {
      const In = y.oxw().$implicit;
      y.xp6(1), y.hij(" ", In.label, " "), y.xp6(1), y.Q6J("size", 16);
    }
  }
  function Ft(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div"), y._uU(1), y.qZA()), 2 & Mn) {
      const In = y.oxw(2).$implicit;
      y.xp6(1), y.Oqu(In.desc);
    }
  }
  function Et(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div"), y._uU(1), y.qZA()), 2 & Mn) {
      const In = y.oxw(2).$implicit;
      y.xp6(1), y.hij("Причина удаления: ", In.reason, "");
    }
  }
  function Ue(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div"), y._uU(1), y.qZA()), 2 & Mn) {
      const In = y.oxw(2).$implicit;
      y.xp6(1), y.hij("Осложнение: ", In.complication, "");
    }
  }
  function Me(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div"), y._uU(1), y.qZA()), 2 & Mn) {
      const In = y.oxw(2).$implicit;
      y.xp6(1), y.hij("Комментарий: ", In.comment, "");
    }
  }
  function Ke(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div", 18), y.YNc(1, Ft, 2, 1, "div", 11), y.YNc(2, Et, 2, 1, "div", 11), y.YNc(3, Ue, 2, 1, "div", 11), y.YNc(4, Me, 2, 1, "div", 11), y.qZA()), 2 & Mn) {
      const In = y.oxw().$implicit;
      y.ekj("w-s", !In.desc), y.xp6(1), y.Q6J("ngIf", In.desc), y.xp6(1), y.Q6J("ngIf", In.reason), y.xp6(1), y.Q6J("ngIf", In.complication), y.xp6(1), y.Q6J("ngIf", In.comment);
    }
  }
  function Ze(Mn, Qn) {
    if (1 & Mn) {
      const In = y.EpF();
      y.TgZ(0, "div", 19), y.NdJ("click", function () {
        y.CHM(In);
        const To = y.oxw(),
          bi = To.$implicit,
          qn = To.index,
          Xn = y.oxw(2).$implicit,
          Yi = y.oxw(2);
        return y.KtG(Yi.deleteEvent(Xn, bi, qn));
      }), y._UZ(1, "lu-svg-icon", 20), y.qZA();
    }
    2 & Mn && (y.xp6(1), y.Q6J("size", 16));
  }
  function Ee(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div", 14)(1, "div", 15), y._uU(2), y.qZA(), y.YNc(3, Ke, 5, 6, "div", 16), y.YNc(4, Ze, 2, 1, "div", 17), y.qZA()), 2 & Mn) {
      const In = Qn.$implicit,
        ui = y.oxw(4);
      y.ekj("pr-24", ui.isDeleteBtn(In)), y.xp6(2), y.lnq("", In.time, " ", In.empFio, " ", In.size ? In.size : "", ""), y.xp6(1), y.Q6J("ngIf", ui.isEventComment(In)), y.xp6(1), y.Q6J("ngIf", ui.isDeleteBtn(In));
    }
  }
  function je(Mn, Qn) {
    if (1 & Mn && (y.ynx(0), y.YNc(1, Ee, 5, 7, "div", 13), y.BQk()), 2 & Mn) {
      const In = y.oxw().$implicit;
      y.xp6(1), y.Q6J("ngForOf", In.events);
    }
  }
  function Mt(Mn, Qn) {
    if (1 & Mn) {
      const In = y.EpF();
      y.TgZ(0, "div", 19), y.NdJ("click", function () {
        y.CHM(In);
        const To = y.oxw(),
          bi = To.$implicit,
          qn = To.index,
          Xn = y.oxw(2).$implicit,
          Yi = y.oxw(2);
        return y.KtG(Yi.deleteEvent(Xn, bi, qn, "Дробное введение"));
      }), y._UZ(1, "lu-svg-icon", 20), y.qZA();
    }
    2 & Mn && (y.xp6(1), y.Q6J("size", 16));
  }
  function Je(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div", 14)(1, "div", 15), y._uU(2), y.qZA(), y.YNc(3, Mt, 2, 1, "div", 17), y.qZA()), 2 & Mn) {
      const In = Qn.$implicit,
        ui = y.oxw(4);
      y.ekj("pr-24", ui.isDeleteBtn(In)), y.xp6(2), y.HOy(" ", In.time, " ", In.empFio, ": ", In.nutrientName, ", ", In.value, "мл "), y.xp6(1), y.Q6J("ngIf", ui.isDeleteBtn(In));
    }
  }
  function Xt(Mn, Qn) {
    if (1 & Mn && (y.ynx(0), y.TgZ(1, "div", 21), y._uU(2, "Дробное введение"), y.qZA(), y.YNc(3, Je, 4, 7, "div", 13), y.BQk()), 2 & Mn) {
      const In = y.oxw().$implicit;
      y.xp6(3), y.Q6J("ngForOf", In.fractional);
    }
  }
  function Nn(Mn, Qn) {
    if (1 & Mn) {
      const In = y.EpF();
      y.TgZ(0, "div", 19), y.NdJ("click", function () {
        y.CHM(In);
        const To = y.oxw(),
          bi = To.$implicit,
          qn = To.index,
          Xn = y.oxw(2).$implicit,
          Yi = y.oxw(2);
        return y.KtG(Yi.deleteEvent(Xn, bi, qn, "Длительное введение"));
      }), y._UZ(1, "lu-svg-icon", 20), y.qZA();
    }
    2 & Mn && (y.xp6(1), y.Q6J("size", 16));
  }
  function Pi(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div", 14)(1, "div", 15), y._uU(2), y.qZA(), y.YNc(3, Nn, 2, 1, "div", 17), y.qZA()), 2 & Mn) {
      const In = Qn.$implicit,
        ui = y.oxw(4);
      y.ekj("pr-24", ui.isDeleteBtn(In)), y.xp6(2), y.HOy(" ", In.startTime, " - ", In.endTime, " ", In.empFio, ", ", In.value, "мл "), y.xp6(1), y.Q6J("ngIf", ui.isDeleteBtn(In));
    }
  }
  function Ii(Mn, Qn) {
    if (1 & Mn && (y.ynx(0), y.TgZ(1, "div", 21), y._uU(2, "Длительное введение"), y.qZA(), y.YNc(3, Pi, 4, 7, "div", 13), y.BQk()), 2 & Mn) {
      const In = y.oxw().$implicit;
      y.xp6(3), y.Q6J("ngForOf", In.long);
    }
  }
  function yi(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "lu-expansion-panel", 8), y.YNc(1, Ct, 3, 2, "lu-expansion-panel-header", 9), y.TgZ(2, "div", 10), y.YNc(3, je, 2, 1, "ng-container", 11), y.YNc(4, Xt, 4, 1, "ng-container", 11), y.YNc(5, Ii, 4, 1, "ng-container", 11), y.qZA()()), 2 & Mn) {
      const In = Qn.$implicit;
      y.xp6(1), y.Q6J("ngIf", In.events || In.fractional || In.long), y.xp6(1), y.ekj("pt-6", In.fractional || In.long), y.xp6(1), y.Q6J("ngIf", In.events), y.xp6(1), y.Q6J("ngIf", In.fractional), y.xp6(1), y.Q6J("ngIf", In.long);
    }
  }
  function co(Mn, Qn) {
    if (1 & Mn && (y.TgZ(0, "div", 6), y.YNc(1, yi, 6, 6, "lu-expansion-panel", 7), y.qZA()), 2 & Mn) {
      const In = y.oxw();
      y.xp6(1), y.Q6J("ngForOf", In.tubeData.groupedEvents);
    }
  }
  let Jo = ((li = class {
    constructor(Qn, In, ui, To) {
      this.modalService = Qn, this.userContext = In, this.compositionService = ui, this.store = To, this.changeLoad = new y.vpe(), this.expanded = !1, this.userContext.getUserContext().pipe((0, n.q)(1), (0, pe.t)(this)).subscribe(bi => {
        this.empId = bi.employeeId.toString();
      });
    }
    ngOnInit() {
      const Qn = this.tubeData.rawCareMarks.find(In => le()(In?.observationDate).isSame(le()(this.observationDate), "day"));
      this.compositionId = Qn.compositionId;
    }
    eventsToggle() {
      this.expanded = !this.expanded;
    }
    isDeleteBtn(Qn) {
      return Qn.empId === this.empId && !this.isSign;
    }
    isEventComment(Qn) {
      return Qn.desc || Qn.reason || Qn.complication || Qn.comment;
    }
    deleteEvent(Qn, In, ui, To = null) {
      const bi = To ? `${To}. ` : "",
        qn = le()(this.observationDate).format(Rt.UV),
        Yi = {
          title: "Удаление отметки",
          message: `\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \xab${bi}${Qn.label}\xbb ${qn} ${"time" in In ? `\u0432 ${In.time}` : `\u0441 ${In.startTime} \u043f\u043e ${In.endTime}`}?`
        };
      this.modalService.open(new qe.X(We.z), {
        panelClass: "delete-modal",
        data: Yi
      }).beforeClose().subscribe(Eo => {
        if (Eo) {
          const Fo = this.tubeData.groupedEvents.reduce((br, Pr) => {
            if (Pr.group === Qn.group) {
              if (Pr?.events) {
                const qo = Pr.events.filter(({
                  time: Yo
                }) => Yo !== In.time);
                qo.length && br.push({
                  ...Pr,
                  events: qo
                });
              }
              if (Pr?.fractional && In.time) {
                const qo = Pr.fractional.filter(({
                  time: Yo
                }) => Yo !== In.time);
                qo.length && br.push({
                  ...Pr,
                  fractional: qo
                });
              }
              if (Pr?.long && In.startTime) {
                const qo = Pr.long.filter(({
                  startTime: Yo
                }) => Yo !== In.startTime);
                qo.length && br.push({
                  ...Pr,
                  long: qo
                });
              }
            } else br.push(Pr);
            return br;
          }, []);
          this.changeLoad.emit(!0), this.compositionService.getEhrByPatientId(this.patientId).pipe((0, Se.w)(br => this.compositionService.deleteEventDocument({
            ehr: br,
            uid: this.compositionId,
            group: Qn.group,
            event: In,
            eventIndex: ui,
            rootUid: this.tubeData.protocolId,
            isLastEvent: !(Fo || []).length
          }))).subscribe(br => {
            setTimeout(() => {
              this.store.dispatch((0, Re.Rc)(!0)), this.changeLoad.emit(!1);
            }, 3e3);
          });
        }
      });
    }
  }).ɵfac = function (In) {
    return new (In || li)(y.Y36(st.ap), y.Y36(q.oL), y.Y36(mt.P), y.Y36(ut.yh));
  }, li.ɵcmp = y.Xpm({
    type: li,
    selectors: [["app-tube-events"]],
    inputs: {
      isSign: "isSign",
      tubeData: "tubeData",
      observationDate: "observationDate",
      patientId: "patientId"
    },
    outputs: {
      changeLoad: "changeLoad"
    },
    decls: 8,
    vars: 5,
    consts: [[1, "tube-events"], [1, "tube-events__header", 3, "click"], ["icon", "chevron-down", 3, "size"], [1, "tube-events__body"], [3, "expanded", "content"], ["content", ""], [1, "body-container"], ["class", "event-group", 4, "ngFor", "ngForOf"], [1, "event-group"], ["class", "event-group__header", "color", "primary", 4, "ngIf"], [1, "event-group__body"], [4, "ngIf"], ["color", "primary", 1, "event-group__header"], ["class", "event", 3, "pr-24", 4, "ngFor", "ngForOf"], [1, "event"], [1, "event__label"], ["class", "event__desc", 3, "w-s", 4, "ngIf"], ["class", "event__delete", 3, "click", 4, "ngIf"], [1, "event__desc"], [1, "event__delete", 3, "click"], ["icon", "close-tag", 3, "size"], [1, "group-subtitle"]],
    template: function (In, ui) {
      if (1 & In && (y.TgZ(0, "div", 0)(1, "div", 1), y.NdJ("click", function () {
        return ui.eventsToggle();
      }), y._uU(2, " События за текущие сутки "), y._UZ(3, "lu-svg-icon", 2), y.qZA(), y.TgZ(4, "div", 3)(5, "lu-expander", 4), y.YNc(6, co, 2, 1, "ng-template", null, 5, y.W1O), y.qZA()()()), 2 & In) {
        const To = y.MAs(7);
        y.ekj("open", ui.expanded), y.xp6(3), y.Q6J("size", 16), y.xp6(2), y.Q6J("expanded", ui.expanded)("content", To);
      }
    },
    dependencies: [t.sg, t.O5, b.q, M.BN, M.JM, W.G],
    styles: [".tube-events[_ngcontent-%COMP%]{padding:11px;border:1px dashed #ccc;border-radius:4px;background-color:#fff}.tube-events.open[_ngcontent-%COMP%] > .tube-events__header[_ngcontent-%COMP%] > lu-svg-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.tube-events__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-weight:600;color:#000;cursor:pointer}.tube-events__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #67bde3;transition:.2s ease}.tube-events__body[_ngcontent-%COMP%]{overflow:hidden}.tube-events__body[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]{padding-top:8px}.tube-events[_ngcontent-%COMP%]   .event-group[_ngcontent-%COMP%]{min-height:auto}.tube-events[_ngcontent-%COMP%]   .event-group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.tube-events[_ngcontent-%COMP%]   .event-group__header[_ngcontent-%COMP%]{padding:0;width:-moz-fit-content;width:fit-content}.tube-events[_ngcontent-%COMP%]   .event-group__header[data-lu-expanded=true][_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.tube-events[_ngcontent-%COMP%]   .event-group__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #67bde3;transition:.2s ease}.tube-events[_ngcontent-%COMP%]   .event-group__header[_ngcontent-%COMP%]     .lu-text{display:flex;align-items:center;gap:8px;color:#333}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px 4px;padding-top:8px}.tube-events[_ngcontent-%COMP%]   .event-group__body.pt-6[_ngcontent-%COMP%]{padding-top:6px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .group-subtitle[_ngcontent-%COMP%]{width:100%}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]{position:relative;font-size:13px;border-radius:4px;background-color:#38a1d61a;line-height:1.539;overflow:hidden}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event.pr-24[_ngcontent-%COMP%]{padding-right:24px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__label[_ngcontent-%COMP%]{padding:2.5px 8px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:24px;padding:4.5px 4px;height:100%;cursor:pointer;transition:.2s ease}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]:hover{background-color:#fde4df}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]:hover   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #f05c46}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #b3b3b3}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__desc[_ngcontent-%COMP%]{padding:0 8px 4px;min-width:664px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__desc.w-s[_ngcontent-%COMP%]{min-width:593px}"]
  }), li);
  Jo = (0, te.gn)([(0, pe.c)()], Jo);
  var fr = i(22840);
  const zn = class {};
  let pt = zn;
  zn.ɵfac = function (In) {
    return new (In || zn)();
  }, zn.ɵmod = y.oAB({
    type: zn
  }), zn.ɵinj = y.cJS({
    imports: [t.ez, e.u5, e.UX, b.h, A.Y, m.x, N.c, I.N, O.Nu, L.f, C.c, v.R, f.LA, E.Ki, d.n, a.X, h.u, x.F, u.j, T.W1, M.e_, j, ke, F, J.q]
  }), y.B6R(R.W, [t.sg, t.O5, e.Fj, e._, e.JJ, e.JL, e.nD, e.oH, e.sg, e.u, e.x0, b.q, A.z, m.I, N.l, O.$m, L.L, C.H, v.l, f.HY, E.Bf, d.m, a.l, h.g, T.mc, M.BN, M.JM, G, Jo, fr.R], [t.uU, I.M, x.J, u.e]);
  const $t = class {};
  let Dt = $t;
  $t.ɵfac = function (In) {
    return new (In || $t)();
  }, $t.ɵmod = y.oAB({
    type: $t
  }), $t.ɵinj = y.cJS({
    imports: [t.ez, pt]
  });
});
