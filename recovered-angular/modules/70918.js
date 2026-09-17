// Extracted from main; webpack module 70918. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Js: () => Re,
    RB: () => st
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(6676),
    d = i(73922),
    M = i(22819),
    b = i(32643),
    A = i(76500),
    N = i(85171),
    I = i(44348),
    O = i(99246),
    L = i(52306),
    C = i(60515),
    v = i(50727),
    f = i(18505),
    E = i(63900),
    h = i(70262),
    x = i(95698),
    u = i(54004),
    T = i(39300),
    R = i(78372),
    B = i(71884),
    y = i(24280),
    j = i(89653),
    W = i(77372),
    F = i(7499),
    Le = i(36895),
    ke = i(20891);
  function J(q, mt) {
    if (1 & q && (e._UZ(0, "div", 7), e.ALo(1, "luHighlight")), 2 & q) {
      const ut = mt.$implicit;
      e.oxw(2);
      const Ct = e.MAs(2),
        Ft = e.oxw();
      e.Q6J("innerHTML", e.xi3(1, 1, Ft.displayValueFn(ut), Ct.searchText), e.oJD);
    }
  }
  function fe(q, mt) {
    if (1 & q) {
      const ut = e.EpF();
      e.TgZ(0, "lu-data-list", 5), e.NdJ("optionsScroll", function (Ft) {
        e.CHM(ut);
        const Et = e.oxw().ngIf,
          Ue = e.oxw();
        return e.KtG(Ue.onScroll(Ft, Et));
      }), e.YNc(1, J, 2, 4, "ng-template", null, 6, e.W1O), e.qZA();
    }
    if (2 & q) {
      const ut = e.MAs(2),
        Ct = e.oxw().ngIf,
        Ft = e.MAs(5),
        Et = e.oxw();
      e.Q6J("items", Et.getItems(Ct))("itemContent", ut)("emptyContent", Ft);
    }
  }
  function ye(q, mt) {
    1 & q && (e.TgZ(0, "lu-preloader", 12), e._uU(1, "Загрузка"), e.qZA());
  }
  function ae(q, mt) {
    1 & q && (e.TgZ(0, "div", 13), e._uU(1, " По вашему запросу ничего не найдено "), e.qZA());
  }
  function Y(q, mt) {
    if (1 & q) {
      const ut = e.EpF();
      e.TgZ(0, "div", 14), e._uU(1, " Произошла ошибка при загрузке списка "), e.TgZ(2, "span", 15), e.NdJ("click", function () {
        e.CHM(ut);
        const Ft = e.oxw(2).ngIf,
          Et = e.oxw();
        return e.KtG(Et.reloadData(Ft));
      }), e._uU(3, "Обновить"), e.qZA()();
    }
  }
  function G(q, mt) {
    if (1 & q && (e.ynx(0, 8), e.YNc(1, ye, 2, 0, "lu-preloader", 9), e.YNc(2, ae, 2, 0, "div", 10), e.YNc(3, Y, 4, 0, "div", 11), e.BQk()), 2 & q) {
      const ut = e.oxw().ngIf;
      e.Q6J("ngSwitch", ut.status), e.xp6(1), e.Q6J("ngSwitchCase", "PENDING"), e.xp6(1), e.Q6J("ngSwitchCase", "SUCCESS"), e.xp6(1), e.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function te(q, mt) {
    if (1 & q && (e.ynx(0), e.TgZ(1, "lu-combobox", 1, 2), e.YNc(3, fe, 3, 3, "lu-data-list", 3), e.YNc(4, G, 4, 4, "ng-template", null, 4, e.W1O), e.qZA(), e.BQk()), 2 & q) {
      const ut = mt.ngIf,
        Ct = e.oxw();
      e.xp6(1), e.Q6J("formControl", Ct.formControl)("displayValueFn", Ct.comboboxDisplayValue(ut.items))("compareFn", Ct.compareDepartmentItems);
    }
  }
  function be(q, mt) {
    return !!q && !!mt && q.id === mt.id;
  }
  function le(q, mt) {
    return mt && 0 !== mt.length ? q && 0 !== q.length ? [...q, ...mt].filter((ut, Ct, Ft) => Ft.findIndex(Et => Et.id === ut.id) === Ct) : mt : q;
  }
  const n = {
    status: "INITIAL",
    data: void 0,
    error: void 0,
    paging: {
      page: 0,
      "page-size": 20,
      sort: [{
        direction: "ASC",
        path: "fullName"
      }]
    },
    filterText: void 0
  };
  let Se = (() => {
    class q extends y.m1 {
      constructor(ut, Ct) {
        super(n), this.store = ut, this.departmentService = Ct, this.selectState = this.select(Ft => Ft), this.init = this.effect(Ft => Ft.pipe((0, f.b)(() => {
          this.initStart();
        }), (0, E.w)(() => this.loadData()))), this.load = this.effect(Ft => Ft.pipe((0, f.b)(Et => {
          this.loadStart(Et);
        }), (0, E.w)(() => this.loadData()))), this.initStart = this.updater(Ft => ({
          ...Ft,
          data: void 0,
          error: void 0,
          status: "PENDING",
          paging: {
            ...Ft.paging,
            page: 1
          },
          filterText: void 0
        })), this.loadStart = this.updater((Ft, Et) => ({
          ...Ft,
          error: void 0,
          status: "PENDING",
          data: Ft.filterText === Et.filterText ? Ft.data : [],
          paging: {
            ...Ft.paging,
            page: Et.page ? Et.page : Ft.paging?.page
          },
          filterText: Et.filterText
        })), this.responseSuccess = this.updater((Ft, Et) => ({
          ...Ft,
          status: "SUCCESS",
          error: void 0,
          data: le(Ft.data || [], Et)
        })), this.responseFailure = this.updater((Ft, Et) => ({
          ...Ft,
          data: void 0,
          error: Et,
          status: "FAILURE"
        }));
      }
      loadData() {
        return this.loadDepartments().pipe((0, f.b)({
          next: ut => {
            this.responseSuccess(ut);
          },
          error: ut => this.responseFailure(ut)
        }), (0, h.K)(() => C.E));
      }
      loadDepartments() {
        return this.selectState.pipe((0, x.q)(1), (0, E.w)(ut => this.departmentService.getDepartmentsQuery({
          paging: {
            "page-size": ut.paging["page-size"],
            page: ut.paging?.page
          },
          search: ut.filterText,
          statusFilter: "ALLACTIVE"
        }).pipe((0, u.U)(Ct => Ct.departments))));
      }
    }
    return q.ɵfac = function (ut) {
      return new (ut || q)(e.LFG(j.yh), e.LFG(W.n7));
    }, q.ɵprov = e.Yz7({
      token: q,
      factory: q.ɵfac
    }), q;
  })();
  var qe = (() => {
    return (q = qe || (qe = {})).INIT = "INIT", q.REFRESH = "REFRESH", q.LOAD = "LOAD", qe;
    var q;
  })();
  let Rt = (() => {
      class q {
        constructor(ut) {
          this.storeComponent = ut;
        }
        emit(ut, Ct) {
          switch (ut) {
            case qe.INIT:
              this.storeComponent.init();
              break;
            case qe.REFRESH:
            case qe.LOAD:
              this.storeComponent.load(Ct);
              break;
            default:
              console.error("ERROR: DepartmentComboboxControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", ut);
          }
        }
      }
      return q.ɵfac = function (ut) {
        return new (ut || q)(e.LFG(Se));
      }, q.ɵprov = e.Yz7({
        token: q,
        factory: q.ɵfac
      }), q;
    })(),
    We = (() => {
      class q extends F.cb {
        constructor(ut) {
          super(), this.storeComponent = ut;
        }
        init() {
          return this.storeComponent.selectState;
        }
      }
      return q.ɵfac = function (ut) {
        return new (ut || q)(e.LFG(Se));
      }, q.ɵprov = e.Yz7({
        token: q,
        factory: q.ɵfac
      }), q;
    })(),
    Re = (() => {
      class q extends I.Fe {
        constructor(ut, Ct, Ft, Et, Ue) {
          super(Ft, Et, Ue), this.controllerService = ut, this.modelService = Ct, this.changeDetectorRef = Ft, this.controlHost = Et, this.ngControl = Ue, this.formControl = new a.NI(null), this.displayValueFn = Me => Me.fullName || "";
        }
        ngOnInit() {
          super.ngOnInit(), this.initModel(), this.initFormChanges(), this.controlStatusChanged();
        }
        ngAfterViewInit() {
          this.initScenario(), this.comboboxInputChanges();
        }
        reloadData(ut) {
          this.controllerService.emit(qe.LOAD, {
            page: (ut.page ?? 0) + 1,
            filterText: ut.filterText
          });
        }
        incomingUpdate(ut) {
          this.formControl.setValue(ut || null);
        }
        getItems(ut) {
          return ut.items || [];
        }
        comboboxDisplayValue(ut) {
          const Ct = new Map(ut?.map(Ft => [Ft.id || "0", Ft]));
          return Ft => Ft?.fullName ? Ft.fullName || "" : this.getDisplay(Ct, Ft);
        }
        getDisplay(ut, Ct) {
          return Ct && ut.get(Ct.id || "0")?.fullName || "";
        }
        get compareDepartmentItems() {
          return be;
        }
        onScroll(ut, Ct) {
          0 === ut && "SUCCESS" === Ct.status && this.controllerService.emit(qe.LOAD, {
            page: (Ct.page ?? 0) + 1,
            filterText: Ct.filterText
          });
        }
        initScenario() {
          this.formControl?.value ? this.controllerService.emit(qe.LOAD, {
            filterText: this.formControl.value?.fullName,
            page: 1
          }) : this.controllerService.emit(qe.INIT, null);
        }
        initModel() {
          this.model$ = this.modelService.init(), this.viewModel = this.model$.pipe((0, u.U)(ut => function pe(q) {
            return {
              status: q.status,
              items: q.data || [],
              page: q.paging?.page || 0,
              filterText: q.filterText
            };
          }(ut)));
        }
        comboboxInputChanges() {
          return this.comboboxCmp.inputChange.pipe((0, T.h)(ut => !(ut === this.formControl?.value?.fullName) && (!ut || ut.length >= 3)), (0, R.b)(300)).subscribe(ut => {
            this.controllerService.emit(qe.LOAD, {
              filterText: ut,
              page: 1
            });
          });
        }
        initFormChanges() {
          return this.formControl.valueChanges.pipe((0, B.x)()).subscribe(ut => {
            this.updateModel(ut);
          });
        }
        controlStatusChanged() {
          return this.ngControl?.statusChanges?.subscribe(ut => {
            "DISABLED" === ut ? this.formControl.disable({
              emitEvent: !1
            }) : this.formControl.enable({
              emitEvent: !1
            });
          });
        }
      }
      return q.ɵfac = function (ut) {
        return new (ut || q)(e.Y36(Rt), e.Y36(We), e.Y36(e.sBO), e.Y36(O.fU, 8), e.Y36(a.a5, 10));
      }, q.ɵcmp = e.Xpm({
        type: q,
        selectors: [["hl-department-combobox"]],
        viewQuery: function (ut, Ct) {
          if (1 & ut && e.Gf(m.m, 5), 2 & ut) {
            let Ft;
            e.iGM(Ft = e.CRH()) && (Ct.comboboxCmp = Ft.first);
          }
        },
        features: [e._Bn([Se, Rt, We]), e.qOj],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["placeholder", "Введите или выберите из списка", "type", "autocomplete", 3, "formControl", "displayValueFn", "compareFn"], ["departmentCmb", ""], [3, "items", "itemContent", "emptyContent", "optionsScroll", 4, "luData"], ["emptyContent", ""], [3, "items", "itemContent", "emptyContent", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "link", 3, "click"]],
        template: function (ut, Ct) {
          1 & ut && (e.YNc(0, te, 6, 3, "ng-container", 0), e.ALo(1, "async")), 2 & ut && e.Q6J("ngIf", e.lcZ(1, 1, Ct.viewModel));
        },
        dependencies: [Le.O5, Le.RF, Le.n9, m.m, a.JJ, a.oH, ke.l, M.d, b.NZ, A.g, Le.Ov, N.e],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.info-label[_ngcontent-%COMP%]{color:var(--lu-black-54)}.link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-blue-120);padding-left:calc(var(--lu-base-gutter) * .5)}"],
        changeDetection: 0
      }), (0, t.gn)([(0, L.k)(), (0, t.w6)("design:type", Function), (0, t.w6)("design:paramtypes", []), (0, t.w6)("design:returntype", v.w0)], q.prototype, "comboboxInputChanges", null), (0, t.gn)([(0, L.k)(), (0, t.w6)("design:type", Function), (0, t.w6)("design:paramtypes", []), (0, t.w6)("design:returntype", v.w0)], q.prototype, "initFormChanges", null), (0, t.gn)([(0, L.k)(), (0, t.w6)("design:type", Function), (0, t.w6)("design:paramtypes", []), (0, t.w6)("design:returntype", Object)], q.prototype, "controlStatusChanged", null), q;
    })(),
    st = (() => {
      class q {}
      return q.ɵfac = function (ut) {
        return new (ut || q)();
      }, q.ɵmod = e.oAB({
        type: q
      }), q.ɵinj = e.cJS({
        imports: [Le.ez, m.n, a.UX, ke.X, N.j, d.h]
      }), q;
    })();
});
