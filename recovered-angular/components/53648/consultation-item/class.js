// Extracted class; external identifiers resolve in modules/53648.js.
(class {
  constructor(We, Re, st, q) {
    this.cdr = We, this.store = Re, this.consultationApiService = st, this.sharedDataService = q, this.isLoading = !1, this.titleExpanded = !1, this.isNotified = !1, this.isShowExpander = !1;
  }
  ngOnInit() {
    this.isNotified = !!this.data.patientNotified;
    const We = this.data?.composition;
    We && (this.consultationCode = We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.назначение?.[0]?.["|code"], this.consultationText = We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.назначение?.[0]?.["|value"], this.consultationPlan = this.capitalizeFirstLetter(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.срочность?.[0]), this.consultationPlanData = this.formatDate(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.дата_выполнения), this.consultationDoctorJobTitle = this.lowercaseFirstLetter(We?.composition?.направление_на_консультацию?.context?.[0]?.подробности_контекста?.[0]?.автор_информации?.[0]?.наименование_должности), this.consultationDoctorName = this.formatFioShort(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.назначивший_врач?.[0]?.назначивший_врач?.[0]?.["|value"]), this.consultationAppointmentDate = this.formatDate(We?.composition?.направление_на_консультацию?.запрос_на_консультацию?.[0]?.запрос?.[0]?.дата_назначения?.[0]));
  }
  ngAfterViewInit() {
    this.updateTitleExpander();
  }
  updateTitleExpander() {
    const We = this.titleText?.nativeElement;
    if (!We) return;
    const Re = We.classList.contains("accordion__title-text--collapsed");
    We.classList.remove("accordion__title-text--collapsed");
    const st = Number.parseFloat(getComputedStyle(We).lineHeight) || 21;
    this.isShowExpander = We.scrollHeight > st + 1, Re && We.classList.add("accordion__title-text--collapsed"), this.cdr.markForCheck();
  }
  capitalizeFirstLetter(We) {
    return We && We[0].toUpperCase() + We.slice(1);
  }
  lowercaseFirstLetter(We) {
    return We && We[0].toLowerCase() + We.slice(1);
  }
  formatDate(We) {
    return We ? (0, R.Z)(function W(Rt, We) {
      (0, y.Z)(2, arguments);
      var Re = (0, j.Z)(We);
      return (0, B.Z)(Rt, -Re);
    }(new Date(We), 3), "dd MMM, HH:mm", {
      locale: F.default
    }) : "";
  }
  formatFioShort(We) {
    if (!We) return "";
    const Re = We.trim().split(/\s+/);
    if (Re.length < 2) return We;
    const q = Re[1],
      mt = Re[2];
    return `${Re[0]} ${q ? q[0].toUpperCase() + "." : ""}${mt ? mt[0].toUpperCase() + "." : ""}`;
  }
  onNotifyPatient(We) {
    this.isLoading = !0, this.consultationApiService.markPatientNotified({
      assignmentCompositionUid: this.data.assignmentCompositionUid,
      patientNotified: We ? new Date().toISOString() : ""
    }).pipe((0, f.b)(() => {
      this.cdr.markForCheck(), (0, E.H)(T.x).pipe((0, h.q)(1), (0, e.t)(this)).subscribe(() => {
        this.sharedDataService.runActionSubject("tasksPatientList"), this.sharedDataService.runActionSubject("tasksPatientListEmergency");
      });
    }), (0, x.K)(() => (0, u.of)([])), (0, e.t)(this)).subscribe(() => {
      this.isLoading = !1;
    });
  }
  onExpand(We) {
    We.stopPropagation(), this.titleExpanded = !this.titleExpanded;
  }
});
