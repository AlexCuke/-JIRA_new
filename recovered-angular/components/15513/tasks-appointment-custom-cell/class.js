// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue) {
    this.store = s, this.router = o, this.modalService = D, this.messageService = Z, this.breakpointObserver = X, this.userContextService = oe, this.confirmationModalService = ue, this.isTablet = !1, this.isMobileAdaptive = !1, this.cellSettings = {
      icon: "",
      showBadge: !1,
      class: "no-appointment",
      action: () => {},
      procedureStatus: ""
    }, this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(He => this.isTablet = He.matches), this.breakpointObserver.observe(tI).pipe((0, Kn.t)(this)).subscribe(He => this.isMobileAdaptive = He.matches);
  }
  ngOnInit() {
    this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(s => {
      this.currentDepartment = s.department, this.updateCellSettings();
    });
  }
  ngOnChanges(s) {
    s.data && this.currentDepartment && this.updateCellSettings();
  }
  updateCellSettings() {
    if (!this.data?.type) return;
    const s = this.data.type;
    switch (this.cellSettings = {
      ...this.cellSettings,
      ...JS[s]
    }, s) {
      case "TL":
        this.store.dispatch((0, Ya.v_)({
          patientData: this.data
        })), this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.yl)(this.data.data)
        }, this.cellSettings.action = this.onCallAction(this.isTablet ? () => this.modalService.open(new Zs.X(ex.z), {
          panelClass: "news2",
          width: "100vw",
          height: "100vh",
          data: {
            payload: this.data,
            isModalAlone: !0
          }
        }) : () => this.store.dispatch((0, Ya.K0)({
          menuName: "News2Component",
          params: this.data
        })), () => this.isMovedOrDischarged);
        break;
      case "LI":
        this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.Ys)(this.data.data.laboratoryAssignment, this.isEmergency)
        }, "no-appointment" !== this.cellSettings.class && (this.cellSettings.action = this.onCallAction(() => {
          this.isMobileAdaptive ? this.confirmationModalService.openDialog({
            title: "Раздел лабораторные исследования недоступен в мобильной версии",
            message: "",
            buttonTitle: "Закрыть",
            cancelButtonTitle: "",
            hideCancelButton: !0,
            size: 512,
            panelClass: "li-mobile-unavailable-modal"
          }, !0) : this.router.navigate(["/laboratory-research", "unregistered"], {
            queryParams: {
              search: (0, hu.XE)(this.data.data.careCase)
            }
          });
        }, () => this.isMovedOrDischarged));
        break;
      case "LP":
        this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.L5)(this.data.data.medicationAssignment, "pillboxes")
        }, "no-appointment" !== this.cellSettings.class && (this.cellSettings.action = this.onCallAction(() => this.router.navigate(["pillboxes/issuing"], {
          queryParams: {
            search: (0, hu.XE)(this.data.data.careCase)
          }
        }), () => this.isMovedOrDischarged));
        break;
      case "injection":
        this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.L5)(this.data.data.medicationAssignment, "injections")
        }, "no-appointment" !== this.cellSettings.class && (this.cellSettings.action = this.onCallAction(() => this.router.navigate(["injections/issuing"], {
          queryParams: {
            search: (0, hu.XE)(this.data.data.careCase)
          }
        }), () => this.isMovedOrDischarged));
        break;
      case "PiM":
        this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.xQ)(this.data.data.procedureAssignment)
        };
        const o = (0, hu.xv)(this.cellSettings.procedureStatus);
        o && "no-appointment" !== this.cellSettings.class && (this.cellSettings.action = this.onCallAction(() => this.router.navigate([`procedures-treatments/${o}`], {
          queryParams: {
            search: (0, hu.XE)(this.data.data.careCase)
          }
        }), () => this.isMovedOrDischarged));
        break;
      case "bedsores":
      case "procedure":
      default:
        break;
      case "consultation":
        this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.C$)(this.data.data.consultationAssignment, this.isEmergency, "Регистра" === this.data.data.careCase.lastName)
        }, this.cellSettings.action = this.onCallAction(() => {
          const D = (0, hu.hj)(this.data.data.consultationAssignment).length > 0;
          "no-appointment" !== this.cellSettings.class && D && (this.isTablet ? this.modalService.open(new Zs.X(QS.S), {
            width: "100vw",
            height: "100vh",
            data: this.data
          }) : this.store.dispatch((0, Ya.K0)({
            menuName: "ConsultationsComponent",
            params: this.data
          })));
        }, () => this.isMovementBlocked);
        break;
      case "II":
        this.cellSettings = {
          ...this.cellSettings,
          ...(0, hu.gK)(this.data.data.instrumentalAssignment, this.isEmergency)
        }, this.cellSettings.action = this.onCallAction(() => {
          const D = (0, hu.hh)(this.data.data.instrumentalAssignment).length > 0;
          "no-appointment" !== this.cellSettings.class && D && (this.isTablet ? this.modalService.open(new Zs.X(XS.V), {
            width: "100vw",
            height: "100vh",
            data: this.data
          }) : this.store.dispatch((0, Ya.K0)({
            menuName: "InstResComponent",
            params: this.data
          })));
        }, () => this.isMovementBlocked);
        break;
      case "movement":
        this.isEmergency ? "HOSPITALIZED" === this.data.data?.hospitalizedPatient?.statusCode && (this.cellSettings.class = "appointed", this.cellSettings.action = () => {
          this.modalService.open(new Zs.X(nw), {
            panelClass: "appointment-modal",
            data: {
              ...this.data,
              isEmergency: !0
            }
          });
        }) : (this.cellSettings.class = this.isMovedOrDischarged ? "appointed" : "no-appointment", this.cellSettings.action = () => {
          this.isMovedOrDischarged && this.modalService.open(new Zs.X(nw), {
            panelClass: "appointment-modal",
            data: this.data
          });
        });
    }
  }
  get isEmergency() {
    return this.currentDepartment.emergencyRoom;
  }
  get isMovedOrDischarged() {
    return !!this.currentDepartment && (this.currentDepartment.emergencyRoom ? "HOSPITALIZED" === this.data.data?.hospitalizedPatient?.statusCode : this.data.data.patientMovement?.departmentId !== this.currentDepartment.id || "DISCHARGED" === this.data.data?.hospitalizedPatient?.statusCode);
  }
  get isMovementBlocked() {
    return !this.isEmergency && this.isMovedOrDischarged;
  }
  onCallAction(s, o) {
    return () => {
      o() ? this.messageService.error("Пациент был переведен или выписан из отделения") : s();
    };
  }
});
