// Extracted class; external identifiers resolve in modules/60649.js.
(class {
  constructor(Ue, Me, Ke, Ze, Ee) {
    this.modalData = Ue, this.modalRef = Me, this.cdr = Ke, this.store = Ze, this.instrumentalApiService = Ee, this.instrumentalAssignments = [], this.isLoading = !1, this.loadedCareCaseId = null, this.modalRef && this._loadParams(this.modalData);
  }
  ngOnInit() {
    this.store.select(L.C8).pipe((0, m.h)(({
      menuName: Ue
    }) => "InstResComponent" === Ue), (0, d.U)(({
      params: Ue
    }) => Ue), (0, M.x)(), (0, e.t)(this)).subscribe(Ue => this._loadParams(Ue));
  }
  get fullName() {
    return `\n      ${this.modalData?.data?.careCase?.lastName || ""}\n      ${this.modalData?.data?.careCase?.firstName || ""}\n      ${this.modalData?.data?.careCase?.secondName || ""}\n    `;
  }
  _loadParams(Ue) {
    const Me = `${(0, a.get)(Ue, "data.careCase.careCaseId") ?? ""}`.trim() || null,
      Ke = (0, C.hh)((0, a.get)(Ue, "data.instrumentalAssignment"));
    if (0 === Ke.length) return this.instrumentalAssignments = [], this.loadedCareCaseId = Me, void this.cdr.markForCheck();
    Me && Me === this.loadedCareCaseId && (this.instrumentalAssignments.length > 0 || this.isLoading) || (this.loadedCareCaseId = Me, this.isLoading = !0, (0, b.D)(Ke.map(Ze => this.instrumentalApiService.getInstrumentalStatusQuery(Ze.assignmentCompositionUid).pipe((0, d.U)(Ee => ({
      ...Ze,
      instrumentalInfo: Ee
    })), (0, A.K)(Ee => (console.error("[instRes] Не удалось загрузить назначение ИИ", Ze.assignmentCompositionUid, Ee), (0, N.of)({
      ...Ze,
      instrumentalInfo: null
    })))))).pipe((0, e.t)(this)).subscribe(Ze => {
      this.instrumentalAssignments = Ze.filter(Ee => (0, C.Ro)(Ee)), this.isLoading = !1, 0 === this.instrumentalAssignments.length && (this.modalRef?.close(), this.modalRef || this.store.dispatch((0, O.K0)({
        menuName: null
      }))), this.cdr.markForCheck();
    }));
  }
});
