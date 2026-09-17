// Extracted class; external identifiers resolve in modules/60649.js.
(class {
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
});
