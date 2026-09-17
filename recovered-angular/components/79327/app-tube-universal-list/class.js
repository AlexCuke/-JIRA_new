// Extracted class; external identifiers resolve in modules/79327.js.
(class {
  constructor(Fi, Rn, ki, Ei) {
    this.modalService = Fi, this.store = Rn, this.breakpointObserver = ki, this.sharedDataService = Ei, this.isTablet = !1, this.tubePatientListParams = {
      listName: "tube-patient-list",
      initialParams: {},
      queryParams: {},
      groupingParams: {
        groupByWard: !1
      }
    }, this.tubePatientListAdaptiveParams = {
      listName: "tube-patient-list-adaptive",
      initialParams: {},
      queryParams: {},
      groupingParams: {
        groupByWard: !1
      }
    }, this.customSortParams = [{
      name: "installDate",
      label: "Дата установки",
      direction: "desc"
    }, {
      name: "patientFio",
      label: "ФИО пациента",
      direction: "asc"
    }, {
      name: "ward",
      label: "№ палаты",
      direction: "desc"
    }, {
      name: "nasalTreatment",
      label: "Обработка носовых ходов (время)",
      direction: "desc"
    }];
  }
  ngOnInit() {
    this.breakpointObserver.observe(u.ok).subscribe(Fi => this.isTablet = Fi.matches), this.store.select(A.QY).pipe((0, I.t)(this)).subscribe(({
      data: Fi
    }) => {
      const Rn = [{
        code: Fi.department.id.toString(),
        display: Fi.department.fullName
      }];
      this.tubePatientListParams.initialParams.department = Rn, this.tubePatientListAdaptiveParams.initialParams.department = Rn;
    }), this.store.select(ke.su).pipe((0, I.t)(this)).subscribe(Fi => {
      Fi && this.reloadList();
    });
  }
  ngAfterViewInit() {
    this.isTablet ? (this.subscribeList(this.tubePatientListAdaptive), this.sharedDataService.search$.pipe((0, I.t)(this), (0, O.b)(300), (0, L.x)()).subscribe(Fi => {
      const Rn = Fi?.trim() || null;
      this.tubePatientListAdaptive.model$.pipe((0, e.q)(1)).subscribe(ki => {
        ki.state.queryParams = {
          ...ki.state.queryParams,
          searchFio: Rn
        }, this.tubePatientListAdaptive.onReload();
      });
    })) : this.subscribeList(this.tubePatientList), this.sharedDataService.actionSubject$.pipe((0, I.t)(this)).subscribe(() => {
      this.tubePatientListAdaptive.onReload();
    }), this.store.select(ke.OZ).pipe((0, C.M)(this.currentList.model$), (0, v.h)(([Fi, Rn]) => {
      const ki = Rn.state.queryParams?.dateRange;
      return !(ki || !Fi) || !!Fi && !B()(Fi).isSame(B()(ki), "day");
    }), (0, I.t)(this)).subscribe(([Fi, Rn]) => {
      this.currentList.setFilter({
        ...Rn.state.queryParams,
        dateRange: Fi
      });
    });
  }
  get currentList() {
    return this.tubePatientListAdaptive || this.tubePatientList;
  }
  subscribeList(Fi) {
    (0, f.a)({
      model: Fi.model$,
      careCaseId: this.store.select(ke._0),
      addPatientFlag: this.store.select(ke.en)
    }).pipe((0, I.t)(this)).subscribe(({
      model: Rn,
      careCaseId: ki,
      addPatientFlag: Ei
    }) => {
      if ("SUCCESS" === Rn.state.list.status) {
        const Wt = Rn.state.list.data.items.map(Ji => Ji.data);
        this.store.dispatch((0, m.sK)({
          tubeListItems: Wt
        })), this.store.dispatch((0, m.BT)(Rn.state.queryParams.searchFio ?? ""));
        const Oi = Wt.find(({
          careCase: Ji
        }) => Ji.careCaseId === ki);
        Ei && (Oi && (this.modalService.open(new x.X(Nn.W), {
          data: {},
          panelClass: [this.isTablet ? "full-screen-modal" : void 0, "tube-card-modal"].filter(Boolean),
          width: "768px",
          maxWidth: "100%",
          height: "calc(100% - (48px + 36px))"
        }).afterClose().subscribe(() => {}), this.store.dispatch((0, m.I)(!1))), this.store.dispatch((0, m.it)(!0)));
      }
    });
  }
  reloadList() {
    this.tubePatientList.onReload(), this.store.dispatch((0, m.Rc)(!1));
  }
  onRunEvent(Fi) {
    const Rn = Fi?.queryParams?.dateRange;
    Rn && (this.store.dispatch((0, m.xb)({
      observationDateList: Rn
    })), this.store.dispatch((0, m.AR)({
      observationDateCard: Rn
    })));
  }
  onRunAction(Fi) {
    switch (Fi.actionName) {
      case "open_add_patient_modal":
        this.openAddPatientModal();
        break;
      case "open_card":
        const Rn = h()(Fi, "data.careCase.careCaseId");
        this.store.dispatch((0, m.lR)(Rn)), this.modalService.open(new x.X(Nn.W), {
          data: {},
          panelClass: "tube-card-modal",
          width: "768px",
          maxWidth: "100%",
          height: "calc(100% - (48px + 36px))"
        }).afterClose().subscribe(() => {});
    }
  }
  adaptiveRowSort(Fi) {
    this.tubePatientListAdaptive.setSort(Fi);
  }
  openAddPatientModal() {
    this.modalService.open(new x.X(Xt), {
      panelClass: "add-patient-modal"
    });
  }
});
