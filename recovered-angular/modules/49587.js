// Extracted from main; webpack module 49587. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C: () => te
  });
  var t = i(15861),
    e = i(71764),
    a = i.n(e),
    m = i(27481),
    d = i(73252),
    M = i(851),
    b = i(97215),
    A = i(39841),
    N = i(95698),
    I = i(39300),
    O = i(83905),
    L = i(94650),
    C = i(89653),
    v = i(62642),
    f = i(59194),
    E = i(72948),
    h = i(13198),
    x = i(91854),
    u = i(56470),
    T = i(36895),
    R = i(19550),
    B = i(59250),
    y = i(93278),
    j = i(32643),
    W = i(77229),
    F = i(70823),
    Le = i(71298);
  function ke(be, le) {
    if (1 & be) {
      const n = L.EpF();
      L.ynx(0), L.TgZ(1, "div", 23), L.NdJ("click", function () {
        const Rt = L.CHM(n).$implicit,
          We = L.oxw(2),
          Re = L.MAs(20);
        return We.onRunAction(Rt.action), L.KtG(Re.close());
      }), L._UZ(2, "lu-svg-icon", 4), L.TgZ(3, "span"), L._uU(4), L.qZA()(), L.BQk();
    }
    if (2 & be) {
      const n = le.$implicit;
      L.xp6(2), L.Q6J("icon", n.icon)("size", 24), L.xp6(2), L.Oqu(n.label);
    }
  }
  function J(be, le) {
    if (1 & be && (L.TgZ(0, "div", 21), L.YNc(1, ke, 5, 3, "ng-container", 22), L.qZA()), 2 & be) {
      const n = L.oxw();
      L.xp6(1), L.Q6J("ngForOf", n.toolboxMap);
    }
  }
  function fe(be, le) {
    1 & be && (L.TgZ(0, "div"), L._uU(1, "Открыть меню"), L.qZA());
  }
  function ye(be, le) {
    if (1 & be && (L.TgZ(0, "div", 26)(1, "p")(2, "span", 27), L._uU(3, "Вид стомы: "), L.qZA(), L._uU(4), L.qZA(), L.TgZ(5, "div", 28)(6, "p")(7, "span", 27), L._uU(8, "Начало ухода: "), L.qZA(), L._uU(9), L.ALo(10, "date"), L.qZA(), L._UZ(11, "div", 11), L.TgZ(12, "p")(13, "span", 27), L._uU(14, "Смена повязки: "), L.qZA(), L._uU(15), L.qZA()(), L.TgZ(16, "div", 28)(17, "p")(18, "span", 27), L._uU(19, "Обработка: "), L.qZA(), L._uU(20), L.qZA(), L._UZ(21, "div", 11), L.TgZ(22, "p")(23, "span", 27), L._uU(24, "Уход завершен: "), L.qZA(), L._uU(25), L.ALo(26, "date"), L.qZA()(), L.TgZ(27, "p")(28, "span", 27), L._uU(29, "Отделение: "), L.qZA(), L._uU(30), L.qZA()()), 2 & be) {
      const n = le.$implicit,
        Se = L.oxw(2);
      L.xp6(4), L.hij(" ", n.stoma.stomaKind, ""), L.xp6(5), L.hij(" ", L.xi3(10, 6, n.stoma.installDate, "dd.MM.yyyy"), ""), L.xp6(6), L.hij(" ", (null == n.todayMark || null == n.todayMark.bandageTime ? null : n.todayMark.bandageTime.slice(0, 5)) || " ", ""), L.xp6(5), L.hij(" ", (null == n.todayMark || null == n.todayMark.treatmentTime ? null : n.todayMark.treatmentTime.slice(0, 5)) || " ", ""), L.xp6(5), L.hij(" ", L.xi3(26, 9, null == n.stoma ? null : n.stoma.finishDate, "dd.MM.yyyy"), ""), L.xp6(5), L.hij(" ", Se.departmentName, "");
    }
  }
  function ae(be, le) {
    if (1 & be && (L.TgZ(0, "div", 24), L.YNc(1, ye, 31, 12, "div", 25), L.qZA()), 2 & be) {
      const n = L.oxw();
      L.xp6(1), L.Q6J("ngForOf", n.stomas)("ngForTrackBy", n.trackByProtocolId);
    }
  }
  const Y = function (be, le, n) {
      return [be, le, n];
    },
    G = function (be) {
      return {
        "no-ward": be
      };
    },
    pe = class {
      constructor(le, n, Se, qe, Rt, We, Re) {
        this.store = le, this.confirmationModalService = n, this.patientService = Se, this.compositionService = qe, this.refreshService = Rt, this.messageService = We, this.stomaCardModalHelper = Re, this.isPanelExpand = !1, this.stomas = [], this._allToolboxMap = [{
          icon: "passport-health",
          action: "open_card",
          label: "Открыть карту наблюдения"
        }, {
          icon: "delete",
          action: "delete_card",
          label: "Удалить"
        }];
      }
      ngOnInit() {
        this.element = this.data?.data;
        const le = a()();
        this.stomas = (this.element?.stomas?.elements ?? []).map(Se => ({
          stoma: Se,
          todayMark: (Se.stomaCareMarks ?? []).find(Rt => a()(Rt.observationDate).isSame(le, "day")) ?? null
        }));
      }
      get ageYears() {
        return m.K;
      }
      get isNoWard() {
        return "не размещен" === this.element?.patientMovement?.wardName?.toLowerCase();
      }
      get patientName() {
        const le = this.element?.careCase;
        return [le?.lastName, le?.firstName, le?.secondName].filter(Boolean).join(" ");
      }
      get departmentName() {
        return this.element?.patientMovement?.departmentName ?? "";
      }
      displayToolbox(le) {
        return le?.label ?? "";
      }
      get hasAnyCareMarks() {
        return (this.element?.stomas?.elements ?? []).some(n => n.stomaCareMarks && n.stomaCareMarks.length > 0);
      }
      get toolboxMap() {
        return this.hasAnyCareMarks ? this._allToolboxMap.filter(le => "open_card" === le.action) : this._allToolboxMap;
      }
      onRunAction(le) {
        switch (le) {
          case "open_card":
            {
              const n = {
                age: a()().diff(a()(this.data?.data?.careCase?.birthDate), "year"),
                birthDate: this.data?.data.careCase.birthDate,
                dept: this.data?.data.patientMovement.departmentName,
                firstName: this.data?.data.careCase.firstName,
                gender: this.data?.data?.careCase?.genderName?.[0]?.toUpperCase() ?? "",
                lastName: this.data?.data.careCase.lastName,
                medCard: this.data?.data.hospitalCard.number,
                secondName: this.data?.data.careCase.secondName,
                actualPatientId: this.data?.data.careCase.actualPatientId,
                careCaseId: this.data?.data.careCase.careCaseId
              };
              this.store.dispatch((0, d.mR)({
                selectedPatient: n
              })), (0, A.a)([this.store.select(M.CA).pipe((0, N.q)(1)), this.store.select(b.S8).pipe((0, I.h)(Boolean), (0, N.q)(1))]).subscribe(([Se, qe]) => {
                this.stomaCardModalHelper.openModal(this.data, Se || new Date(), !0, qe, n, "stoma-patient-list");
              });
              break;
            }
          case "delete_card":
            this.deletePatientFromCareList();
        }
      }
      deletePatientFromCareList() {
        var le = this;
        return (0, t.Z)(function* () {
          if (le.hasAnyCareMarks) return;
          const n = {
            title: "Удаление пациента из Списка",
            message: `\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${le.patientName} \u0438\u0437 \u0421\u043f\u0438\u0441\u043a\u0430 \u0443\u0445\u043e\u0434\u0430?`,
            cancelButtonTitle: "Отменить",
            buttonTitle: "Удалить"
          };
          if (yield (0, O.z)(le.confirmationModalService.openDialog(n, !0))) try {
            const qe = yield (0, O.z)(le.patientService.findPatientInfo(le.data?.data?.careCase?.actualPatientId)),
              Rt = yield (0, O.z)(le.compositionService.getEhr(qe.ehrId));
            for (const We of le.data?.data?.stomas?.elements ?? []) yield (0, O.z)(le.compositionService.deleteStomaDocument(Rt, We.protocolId));
            le.refreshService.triggerReloadList(), le.messageService.success("Пациент удалён из Списка ухода", {
              marginBottom: 44
            });
          } catch (qe) {
            console.error("Ошибка удаления пациента из Списка ухода:", qe), le.messageService.error("Не удалось удалить пациента из Списка ухода", {
              marginBottom: 44
            });
          }
        })();
      }
      trackByProtocolId(le, n) {
        return n.stoma.protocolId;
      }
    };
  let te = pe;
  pe.ɵfac = function (n) {
    return new (n || pe)(L.Y36(C.yh), L.Y36(v.k), L.Y36(f.e), L.Y36(E.P), L.Y36(h.S), L.Y36(x.Jv), L.Y36(u.N));
  }, pe.ɵcmp = L.Xpm({
    type: pe,
    selectors: [["adaptive-cell"]],
    inputs: {
      data: "data"
    },
    decls: 25,
    vars: 19,
    consts: [[1, "adaptive-cell"], [1, "adaptive-cell__expandable-panel"], [1, "adaptive-cell__expandable-panel__header"], ["lu-button-icon", "", 3, "click"], [3, "icon", "size"], [1, "adaptive-cell__expandable-panel__header__patient-info"], [1, "adaptive-cell__expandable-panel__header__patient-info__name"], [1, "adaptive-cell__expandable-panel__header__patient-info__description"], [1, "age"], [1, "menu-icon", 3, "icon", "size"], [1, "lu-text"], [1, "sep"], [1, "ward", 3, "ngClass"], ["lu-button-icon", "", "luDropdownOrigin", "", "positions", "top-left", "panelClass", "custom-tool", 1, "adaptive-cell__expandable-panel__header__toolbox", 3, "luTooltip", "borderOffset", "click"], ["origin", "luDropdownOrigin"], ["icon", "kebab", 3, "size"], ["positions", "bottom-right", "panelClass", "custom-menu-dropdown", 3, "withArrow"], ["dropdown", ""], ["class", "custom-menu-container", 4, "luOverlayContent"], ["longText", ""], ["class", "adaptive-cell__expandable-panel__content", 4, "ngIf"], [1, "custom-menu-container"], [4, "ngFor", "ngForOf"], [1, "toolbox-item", 3, "click"], [1, "adaptive-cell__expandable-panel__content"], ["class", "adaptive-cell__expandable-panel__content__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "adaptive-cell__expandable-panel__content__item"], ["lu-text", "", "color", "muted"], [1, "adaptive-cell__expandable-panel__content__item__several"]],
    template: function (n, Se) {
      if (1 & n) {
        const qe = L.EpF();
        L.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3), L.NdJ("click", function () {
          return Se.isPanelExpand = !Se.isPanelExpand;
        }), L._UZ(4, "lu-svg-icon", 4), L.qZA(), L.TgZ(5, "div", 5)(6, "span", 6), L._uU(7), L.qZA(), L.TgZ(8, "div", 7)(9, "div", 8), L._UZ(10, "lu-svg-icon", 9), L.TgZ(11, "p", 10), L._uU(12), L.qZA()(), L._UZ(13, "div", 11), L.TgZ(14, "span", 12), L._uU(15), L.qZA()()(), L.TgZ(16, "button", 13, 14), L.NdJ("click", function () {
          L.CHM(qe);
          const We = L.MAs(20);
          return L.KtG(We.toggle());
        }), L._UZ(18, "lu-svg-icon", 15), L.TgZ(19, "lu-dropdown", 16, 17), L.YNc(21, J, 2, 1, "div", 18), L.qZA(), L.YNc(22, fe, 2, 0, "ng-template", null, 19, L.W1O), L.qZA()(), L.YNc(24, ae, 2, 2, "div", 20), L.qZA()();
      }
      if (2 & n) {
        const qe = L.MAs(23);
        L.xp6(4), L.Q6J("icon", Se.isPanelExpand ? "chevron-down" : "chevron-right")("size", 16), L.xp6(3), L.hij(" ", L.kEZ(13, Y, Se.element.careCase.lastName, Se.element.careCase.firstName, Se.element.careCase.secondName).join(" "), " "), L.xp6(3), L.Q6J("icon", 1 == Se.element.careCase.genderCode ? "male2" : "female2")("size", 24), L.xp6(2), L.Oqu(Se.ageYears(Se.element.careCase.birthDate)), L.xp6(2), L.Q6J("ngClass", L.VKq(17, G, Se.isNoWard)), L.xp6(1), L.Oqu(null == Se.element || null == Se.element.patientMovement ? null : Se.element.patientMovement.wardName), L.xp6(1), L.Q6J("luTooltip", qe)("borderOffset", -4), L.xp6(2), L.Q6J("size", 24), L.xp6(1), L.Q6J("withArrow", !0), L.xp6(5), L.Q6J("ngIf", Se.isPanelExpand);
      }
    },
    dependencies: [T.mk, T.sg, T.O5, R.k, B.$, y.q, j.NZ, Le.n, W.o, F.$, T.uU],
    styles: [".stoma-table-list{background-color:#f2f2f2!important}  .stoma-table-list cdk-row{background-color:#f2f2f2!important;width:100%;padding:0!important}  .stoma-table-list cdk-row:hover{background-color:#f2f2f2!important;cursor:default!important}  .stoma-table-list cdk-cell{width:100%}  .stoma-table-list cdk-cell div.cell{width:100%}  .stoma-table-list cdk-cell dp-universal-cell{width:100%}  .stoma-table-list cdk-cell dp-universal-cell div.cell.cell--left adaptive-cell{width:100%}  .stoma-table-list .dp-table-row:not(:last-child):after{height:0!important}  .stoma-table-list .h1-table-cell{padding:0!important}  .stoma-table-list .h1-table-cell__cell{margin-bottom:0!important}  .stoma-table-list cdk-header-row,   .stoma-table-list cdk-header-cell,   .stoma-table-list dp-table-header-cell{display:none!important}  .stoma-table-list cdk-row cdk-cell dp-universal-cell,   .stoma-table-list cdk-row cdk-cell dp-universal-cell adaptive-cell{width:100%}  .stoma-table-list cdk-row:after{display:none}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown){width:264px!important}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane{width:264px!important;left:100%!important}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane .lu-overlay-content{display:flex;align-items:center}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane .custom-menu-container{max-width:264px!important;width:264px!important}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane .custom-menu-container .toolbox-item{display:flex;flex-direction:row;align-items:center;gap:8px;padding:8px 16px 8px 12px;cursor:pointer;width:100%}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane .custom-menu-container .toolbox-item:hover{background-color:#f2f2f2}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane .custom-menu-container .toolbox-item span{font-size:15px;color:#333}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane .custom-menu-container .toolbox-item lu-svg-icon{--lu-svg-icon-color: #757575}  .cdk-overlay-connected-position-bounding-box:has(.custom-menu-dropdown) .cdk-overlay-pane lu-overlay-container[data-lu-overlay-position=bottom]{margin-top:4px}  .cdk-overlay-connected-position-bounding-box:has(.custom-tool){margin-right:20px}.adaptive-cell[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:0 16px;width:100%;box-sizing:border-box;min-height:56px}.adaptive-cell__expandable-panel[_ngcontent-%COMP%]{width:100%;background:#FFFFFF;border-radius:8px;display:flex;flex-direction:column}.adaptive-cell__expandable-panel__header[_ngcontent-%COMP%]{width:100%;padding:8px 16px;align-items:center;display:flex;flex-direction:row;gap:8px}.adaptive-cell__expandable-panel__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:24px;width:24px}.adaptive-cell__expandable-panel__header[_ngcontent-%COMP%]   .context-menu-items-container[_ngcontent-%COMP%]{margin:0!important;padding:8px 0;max-width:320px!important}.adaptive-cell__expandable-panel__header__patient-info[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.adaptive-cell__expandable-panel__header__patient-info__name[_ngcontent-%COMP%]{font-weight:600;color:#000;flex:1}.adaptive-cell__expandable-panel__header__patient-info__description[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:6px;align-items:center;flex-shrink:0}.adaptive-cell__expandable-panel__header__patient-info__description[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:4px}.adaptive-cell__expandable-panel__header__patient-info__description[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{width:1px;height:16px;background-color:#e6e6e6}.adaptive-cell__expandable-panel__header__patient-info__description[_ngcontent-%COMP%]   .ward[_ngcontent-%COMP%]{font-size:13px;font-weight:600}.adaptive-cell__expandable-panel__header__patient-info__description[_ngcontent-%COMP%]   .no-ward[_ngcontent-%COMP%]{color:#e04b37}.adaptive-cell__expandable-panel__header__toolbox[_ngcontent-%COMP%]{width:40px!important;height:40px!important}.adaptive-cell__expandable-panel__header__toolbox[_ngcontent-%COMP%]:hover{background-color:#ecf6fb;border-radius:1px}.adaptive-cell__expandable-panel__content[_ngcontent-%COMP%]{margin-top:8px;border-top:1px solid #e6e6e6;padding:16px 24px 16px 48px;width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:16px}.adaptive-cell__expandable-panel__content__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;line-height:22px!important;--lu-line-height: 22px !important;padding-bottom:12px;border-bottom:1px solid #E6E6E6}.adaptive-cell__expandable-panel__content__item[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.adaptive-cell__expandable-panel__content__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:0!important}.adaptive-cell__expandable-panel__content__item__several[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;flex-wrap:wrap}.adaptive-cell__expandable-panel__content__item__several[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{width:1px;height:16px;background-color:#e6e6e6;flex-shrink:0}"]
  });
});
