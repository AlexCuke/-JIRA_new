// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X) {
    this.store = s, this.modalService = o, this.sharedDataService = D, this.breakpointObserver = Z, this.stomaCardModalHelper = X, this.icons = [], this.isTablet = !1;
  }
  ngOnInit() {
    this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(Z => {
      this.isTablet = Z.matches;
    });
    const s = this.getActiveStomas(),
      o = this.getActiveCatheters(),
      D = this.getTube();
    this.icons = [{
      type: "catheters",
      component: null,
      isActive: o.length > 0,
      tooltipData: {
        title: "Установленные катетеры",
        catheters: o.map(Z => this.toCatheterTooltipItem(Z))
      }
    }, {
      type: "stoma",
      component: W2,
      isActive: s.length > 0,
      tooltipData: {
        title: "Уход за стомами",
        stomas: s
      }
    }, {
      type: "tube",
      component: z2,
      isActive: this.hasTube(),
      tooltipData: {
        title: "Уход за назогастральным зондом",
        date: D.date,
        tubeSize: D.size
      }
    }];
  }
  hasStoma() {
    return !!this.data?.data?.stomas;
  }
  hasCatheters() {
    return !!this.data?.data?.catheter;
  }
  hasTube() {
    const s = this.data?.data?.nasogastric;
    if (s) {
      const o = s.elements.filter(D => !D.finishDate);
      return !!s && o.length;
    }
    return !1;
  }
  getCatheterPayload() {
    const s = this.data?.data;
    return s?.catheter ? (0, Fu.d6)((0, Oc.yE)(b1.QL, {
      careCase: s.careCase,
      hospitalCard: s.hospitalCard,
      patientMovement: s.patientMovement,
      catheter: s.catheter
    })) : null;
  }
  getActiveCatheters() {
    const s = this.getCatheterPayload();
    return s ? (0, Fu.EN)(s).filter(o => (0, Fu.V6)(o)) : [];
  }
  toCatheterTooltipItem(s) {
    const o = (0, Fu.XN)(s.resolvedType || s.catheterType || s.CateterType),
      D = s.locus ? String(s.locus) : "",
      Z = this.resolveCatheterSize(s),
      X = (0, Fu.S$)(s.installDt || s.protocoldate);
    return {
      typeLabel: o,
      locus: D ? D.charAt(0).toUpperCase() + D.slice(1) : "",
      size: Z,
      installLabel: "—" !== X ? `\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d ${X}` : ""
    };
  }
  resolveCatheterSize(s) {
    const o = s,
      D = o.catheterSize ?? o.size,
      Z = o.catheterUnit ?? o.unit ?? "";
    if (null != D && `${D}`.trim()) return `${D}${Z ? ` ${Z}` : ""}`.trim();
    const X = s.comment || o.catheterInfo;
    return null != X && `${X}`.trim() ? String(X).trim() : "";
  }
  getActiveStomas() {
    return (this.data?.data?.stomas?.elements ?? []).filter(o => !!o.installDate && !o.finishDate).sort((o, D) => ku()(D.installDate).valueOf() - ku()(o.installDate).valueOf());
  }
  getTube() {
    const s = (this.data?.data?.nasogastric?.elements || []).filter(o => o.installDate).reduce((o, D) => o ? ku()(D.installDate).isAfter(ku()(o.installDate)) ? D : o : D, null);
    return {
      date: s ? ku()(s.installDate).format("DD MMM[, ]HH:mm") : "",
      size: s ? s.actualSize : ""
    };
  }
  onBtnClick(s) {
    if (s.isActive) switch (s.type) {
      case "catheters":
        this.openCatheterCareCard();
        break;
      case "stoma":
        const o = this.data?.data,
          D = {
            age: ku()().diff(ku()(o?.careCase?.birthDate), "year"),
            birthDate: o?.careCase?.birthDate,
            dept: o?.patientMovement?.departmentName,
            firstName: o?.careCase?.firstName,
            gender: o?.careCase?.genderName?.[0]?.toUpperCase() ?? "",
            lastName: o?.careCase?.lastName,
            medCard: o?.hospitalCard?.number,
            secondName: o?.careCase?.secondName,
            actualPatientId: o?.careCase?.actualPatientId,
            careCaseId: o?.careCase?.careCaseId
          };
        this.store.dispatch((0, RI.mR)({
          selectedPatient: D
        })), this.store.select(cl.S8).pipe((0, Ie.q)(1)).subscribe(X => {
          this.stomaCardModalHelper.openModal(this.data, new Date(), this.isTablet, X, D, "tasks-patient-list");
        });
        break;
      case "tube":
        const Z = this.data?.data?.careCase.careCaseId;
        this.store.dispatch((0, fp.xb)({
          observationDateList: new Date().toString()
        })), this.store.dispatch((0, fp.AR)({
          observationDateCard: new Date().toString()
        })), this.store.dispatch((0, fp.lR)(Z)), this.modalService.open(new Zs.X(gP.W), {
          data: {},
          panelClass: [this.isTablet ? "full-screen-modal" : void 0, "tube-card-modal"].filter(Boolean),
          width: "768px",
          maxWidth: "100%",
          height: "calc(100% - (48px + 36px))"
        }).afterClose().subscribe(() => {});
    }
  }
  openCatheterCareCard() {
    const o = {
      ...this.getCatheterPayload(),
      isListView: !0
    };
    o && this.modalService.open(new Zs.X(wP.F), {
      width: this.isTablet ? "100vw" : "calc(100vw - 10px)",
      disableClose: !0,
      data: o
    }).afterClose().pipe((0, Kn.t)(this)).subscribe(D => {
      D && (this.sharedDataService.runActionSubject("tasksPatientList"), this.sharedDataService.reloadList("tasksPatientAdaptiveList"));
    });
  }
  trackByInstallDate(s, o) {
    return o.installDate ?? s.toString();
  }
});
