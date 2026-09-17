// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue, He, lt, ht, ct, on, yn) {
    this.store = s, this.modalService = o, this.messageService = D, this.schedulerService = Z, this.breakpointObserver = X, this.sharedDataService = oe, this.nurseTasksService = ue, this.userContextService = He, this.uidService = lt, this.careCaseService = ht, this.stickyPanelOutletService = ct, this.stomaCardModalHelper = on, this.cdr = yn, this.destroy$ = new Uo.x(), this.isTablet = !1, this.scanner = (0, e.f3M)(B2.w), this.toMovementDate = (0, uP.PH)(), this.tasksPatientListParams = {
      listName: "tasks-patient-list",
      initialParams: {
        toMovementDate: this.toMovementDate,
        departmentId: null
      },
      queryParams: {},
      groupingParams: {
        groupByWard: !1
      }
    }, this.tasksPatientAdaptiveListParams = {
      listName: "tasks-patient-adaptive-list",
      initialParams: {
        toMovementDate: this.toMovementDate,
        departmentId: null
      },
      queryParams: {},
      groupingParams: {
        groupByWard: !1
      }
    };
  }
  ngOnInit() {
    this.breakpointObserver.observe(xl.o).pipe((0, Kn.t)(this)).subscribe(s => {
      this.isTablet = s.matches;
    }), this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(s => {
      this.currentDepartment = s.department, this.tasksPatientListParams.initialParams.departmentId = this.currentDepartment.id, this.tasksPatientAdaptiveListParams.initialParams.departmentId = this.currentDepartment.id;
    }), this.scanner.start({
      maxGapMs: 80,
      maxAverageGapMs: 35,
      idleFinishMs: 120,
      ignoreEditableTargets: !0
    }), this.scanner.scan$.pipe((0, Kn.t)(this), (0, vs.w)(({
      value: s
    }) => this.uidService.getUid(s).pipe((0, Ja.K)(o => (this.messageService.error("Не удалось найти пациента."), console.error("scan error", o?.message, o), (0, La.of)(null))))), (0, vs.w)(s => s ? this.careCaseService.getCareCaseQuery(s.data_object.ehr_case_id).pipe((0, zs.U)(o => {
      const {
        firstName: D,
        lastName: Z
      } = o.patient.name;
      return `${Z} ${D} ${o.patient.name?.secondName ?? ""}`;
    }), (0, Ja.K)(o => (this.messageService.error("Не удалось найти пациента."), console.error("search error", o?.message, o), (0, La.of)([])))) : (0, La.of)(null))).subscribe(s => {
      this.tasksPatientList.model$.pipe((0, Ie.q)(1)).subscribe(o => {
        o.state.queryParams = {
          ...o.state.queryParams,
          fio: s
        }, o.state.initialParams = {
          ...o.state.initialParams,
          fio: s
        }, this.tasksPatientList.onReload();
      });
    }), this.store.dispatch(pl.gA.getTerminology({
      request: [{
        featureKey: "diet_list",
        terminologyName: "dictionaries:diet"
      }]
    }));
  }
  ngAfterViewInit() {
    this.stomaCardModalHelper.registry({
      list: "tasks-patient-list",
      getListComponent: () => this.tasksPatientList || this.tasksPatientAdaptiveList || void 0,
      destroy$: this.destroy$.asObservable(),
      customReloadListFn: () => {
        this.reloadTasksList();
      }
    }), this.schedulerService.scheduleJob(() => this.reloadTasksList(), !0), this.sharedDataService.actionSubject$.pipe((0, Kn.t)(this), (0, ka.h)(s => s.includes("tasksPatientList") || s.includes("tasksPatientAdaptiveList"))).subscribe(() => {
      this.reloadTasksList();
    }), this.store.select(dP.su).pipe((0, Kn.t)(this)).subscribe(s => {
      s && this.reloadTasksList();
    }), this.sharedDataService.search$.pipe((0, Kn.t)(this), (0, Vr.b)(300), (0, ea.x)()).subscribe(s => {
      this.tasksPatientAdaptiveList && this.applySearch(s);
    }), (0, Ia.a)({
      model: (this.tasksPatientList || this.tasksPatientAdaptiveList).model$,
      patientDietData: this.store.select(Ec.gH)
    }).pipe((0, Kn.t)(this), (0, vs.w)(({
      model: s,
      patientDietData: o
    }) => {
      const D = window.location.pathname.split("/")[1];
      if ("SUCCESS" === s.state.list.status && !o.length && "tasks" === D) {
        const Z = s.state.list.data.items.map(X => ({
          careCaseId: X.data.careCase.careCaseId,
          ward: X.data.patientMovement?.wardName ?? "Не размещен",
          firstName: X.data.careCase.firstName,
          lastName: X.data.careCase.lastName,
          secondName: X.data.careCase?.secondName ?? "",
          birthday: X.data.careCase.birthDate,
          typeOfPaymentName: X.data.careCase?.typeOfPaymentName ?? ""
        }));
        this.store.dispatch((0, Ya.q3)(Z));
      }
      return (0, La.of)(s);
    })).subscribe(s => {
      if (this.store.dispatch((0, Ya.qP)({
        search: s.state.queryParams.fio ?? null
      })), "SUCCESS" === s.state.list.status) {
        const o = s.state.list.data.items.reduce((D, Z) => {
          const X = Z.data?.nasogastric;
          return X && X.elements.filter(ue => !ue.finishDate).length && D.push(Z.data), D;
        }, []);
        this.store.dispatch((0, fp.sK)({
          tubeListItems: o
        }));
      }
    });
  }
  adaptiveRowSort(s) {
    this.tasksPatientAdaptiveList.setSort(s);
  }
  syncMovementDateParams() {
    const s = (0, uP.PH)();
    return this.toMovementDate = s, this.tasksPatientListParams.initialParams.toMovementDate = s, this.tasksPatientAdaptiveListParams.initialParams.toMovementDate = s, s;
  }
  reloadTasksList() {
    this.store.dispatch((0, fp.Rc)(!1));
    const s = this.syncMovementDateParams(),
      o = this.tasksPatientList ?? this.tasksPatientAdaptiveList;
    o && o.model$.pipe((0, Ie.q)(1)).subscribe(D => {
      D.state.initialParams = {
        ...D.state.initialParams,
        toMovementDate: s
      }, o.onReload(), this.cdr.markForCheck();
    });
  }
  applySearch(s) {
    const o = s?.trim() || null;
    this.tasksPatientAdaptiveList.model$.pipe((0, Ie.q)(1)).subscribe(D => {
      D.state.queryParams = {
        ...D.state.queryParams,
        fio: o
      }, this.tasksPatientAdaptiveList?.onReload();
    });
  }
  onRunEvent(s) {}
  onRunAction(s) {
    switch (s.actionName) {
      case "open_config_diet_modal":
        this.modalService.open(new Zs.X(m1), {
          panelClass: "diet-modal"
        });
        break;
      case "open_comment":
        this.stickyPanelOutletService.open(["add-patient-comment", s?.data?.careCase?.careCaseId ?? ""]);
        break;
      case "place_patient":
      case "change_placement":
        s.data.patientMovement?.departmentId !== this.currentDepartment.id || "DISCHARGED" === s.data?.hospitalizedPatient?.statusCode ? this.messageService.error("Пациент был переведен или выписан из отделения") : this.modalService.open(new Zs.X(wg), {
          panelClass: "place-patient-modal",
          data: s
        }).afterClose().pipe((0, Ie.q)(1), (0, Vr.b)(Gm.x)).subscribe(() => this.reloadTasksList());
        break;
      case "fill_checklist":
        if (s.data.patientMovement?.departmentId !== this.currentDepartment.id || "DISCHARGED" === s.data?.hospitalizedPatient?.statusCode) this.messageService.error("Пациент был переведен или выписан из отделения");else {
          const D = s?.data?.careCase?.careCaseId;
          this.store.dispatch((0, Ya.v_)({
            patientData: s
          })), this.modalService.open(new Zs.X(_x), {
            width: "calc(100vw - 16px)",
            disableClose: !0,
            data: s?.data
          }).afterClose().pipe((0, Kn.t)(this), (0, ka.h)(Z => !!Z), (0, vs.w)(Z => this.nurseTasksService.savePhotos(Z)), (0, vs.w)(Z => this.nurseTasksService.signCheckList(Z, D)), (0, Vr.b)(Gm.x)).subscribe(() => {
            this.messageService.success("Первичный чек лист пациента успешно заполнен"), this.reloadTasksList();
          });
        }
    }
  }
  ngOnDestroy() {
    this.scanner.stop(), this.store.dispatch((0, Ya.q3)([])), this.destroy$.next(), this.destroy$.complete();
  }
});
