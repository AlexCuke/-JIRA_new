// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue, He) {
    this.breakpointObserver = s, this.store = o, this.modalService = D, this.messageService = Z, this.sharedDataService = X, this.userContextService = oe, this.uidService = ue, this.careCaseService = He, this.isTablet = !1, this.scanner = (0, e.f3M)(B2.w), this.withHospitalized = {
      start: (0, j3.Z)(new Date()),
      end: (0, ZA.Z)((0, _P.Z)(new Date(), 1), {
        hours: 6,
        minutes: 0,
        seconds: 0
      })
    }, this.tasksPatientListEmergencyParams = {
      listName: "tasks-patient-list-emergency",
      initialParams: {
        withHospitalized: this.withHospitalized,
        departmentId: null
      },
      queryParams: {},
      groupingParams: {
        groupByWard: !1
      }
    }, this.tasksPatientAdaptiveListEmergencyParams = {
      listName: "tasks-patient-adaptive-list-emergency",
      initialParams: {
        withHospitalized: this.withHospitalized,
        departmentId: null
      },
      queryParams: {},
      groupingParams: {
        groupByWard: !1
      }
    }, this.scanner.start({
      maxGapMs: 80,
      maxAverageGapMs: 35,
      idleFinishMs: 120,
      ignoreEditableTargets: !0
    }), this.scanner.scan$.pipe((0, Kn.t)(this), (0, vs.w)(({
      value: lt
    }) => this.uidService.getUid(lt).pipe((0, Ja.K)(ht => (this.messageService.error("Не удалось найти пациента."), console.error("scan error", ht?.message, ht), (0, La.of)(null))))), (0, vs.w)(lt => lt ? this.careCaseService.getCareCaseQuery(lt.data_object.ehr_case_id).pipe((0, zs.U)(ht => {
      const {
        firstName: ct,
        lastName: on
      } = ht.patient.name;
      return `${on} ${ct} ${ht.patient.name?.secondName ?? ""}`;
    }), (0, Ja.K)(ht => (this.messageService.error("Не удалось найти пациента."), console.error("search error", ht?.message, ht), (0, La.of)([])))) : (0, La.of)(null))).subscribe(lt => {
      this.tasksPatientListEmergency.model$.pipe((0, Ie.q)(1)).subscribe(ht => {
        ht.state.queryParams = {
          ...ht.state.queryParams,
          fio: lt
        }, ht.state.initialParams = {
          ...ht.state.initialParams,
          fio: lt
        }, this.tasksPatientListEmergency.onReload();
      });
    });
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(s => {
      this.currentDepartment = s.department, this.tasksPatientListEmergencyParams.initialParams.departmentId = this.currentDepartment.id, this.tasksPatientAdaptiveListEmergencyParams.initialParams.departmentId = this.currentDepartment.id;
    }), this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(s => this.isTablet = s.matches);
  }
  ngAfterViewInit() {
    this.sharedDataService.actionSubject$.pipe((0, Kn.t)(this), (0, Vr.b)(Gm.x), (0, ka.h)(s => "tasksPatientListEmergency" === s)).subscribe(() => {
      console.log("reload table"), this.tasksPatientListEmergency.onReload();
    }), this.sharedDataService.search$.pipe((0, Kn.t)(this), (0, Vr.b)(300), (0, ea.x)()).subscribe(s => {
      this.tasksPatientAdaptiveListEmergency && this.applySearch(s);
    }), this.sharedDataService.actionSubject$.pipe((0, Kn.t)(this), (0, ka.h)(s => "tasksPatientAdaptiveList:reload" === s)).subscribe(() => {
      this.tasksPatientAdaptiveListEmergency.onReload();
    });
  }
  onRunEvent(s) {}
  onRunAction(s) {
    switch (s.actionName) {
      case "open_comment":
        this.store.dispatch((0, Ya.K0)({
          menuName: "CommentComponent"
        }));
        break;
      case "place_patient":
      case "change_placement":
        this.modalService.open(new Zs.X(wg));
        break;
      case "fill_checklist":
        this.modalService.open(new Zs.X(_x), {
          width: "98%",
          disableClose: !0,
          data: {}
        }).afterClose().pipe((0, Kn.t)(this), (0, ka.h)(o => !!o)).subscribe(o => this.messageService.success("Первичный чек лист пациента успешно заполнен"));
    }
  }
  applySearch(s) {
    const o = s?.trim() || null;
    this.tasksPatientAdaptiveListEmergency.model$.pipe((0, Ie.q)(1)).subscribe(D => {
      D.state.queryParams = {
        ...D.state.queryParams,
        fio: o
      }, this.tasksPatientAdaptiveListEmergency.onReload();
    });
  }
});
