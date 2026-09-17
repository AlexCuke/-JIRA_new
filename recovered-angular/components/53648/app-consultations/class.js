// Extracted class; external identifiers resolve in modules/53648.js.
(class {
  constructor(We, Re, st, q, mt, ut) {
    this.modalData = We, this.modalRef = Re, this.cdr = st, this.store = q, this.http = mt, this.keycloak = ut, this.consultations = [], this.isLoading = !1;
  }
  ngOnInit() {
    this.store.select(d.C8).pipe((0, e.t)(this)).subscribe(({
      menuName: We,
      params: Re
    }) => {
      "ConsultationsComponent" === We && this._loadParams(Re);
    }), this.modalRef && this.modalData && this._loadParams(this.modalData);
  }
  getCompositions(We) {
    return this.http.post("/gateway/ehr-db/api/rest/v1/composition/getByUids", {
      uids: We
    }, {
      headers: {
        accept: "application/json",
        authorization: `Bearer ${this.keycloak.token}`,
        "X-AUTHENTICATION-TOKEN": "YWRtaW4kJCQxMDB8MjAyNS0wNS0wNVQyMTozNzo1My44MTE4MTJ8ODNhODZjOGQ5MDY0ZDc2NDViNjc3YWI3ZTk5YjVjNTc="
      }
    });
  }
  get fullName() {
    return `\n      ${this.modalData?.data?.careCase?.lastName || ""}\n      ${this.modalData?.data?.careCase?.firstName || ""}\n      ${this.modalData?.data?.careCase?.secondName || ""}\n    `;
  }
  _loadParams(We) {
    if (!We?.data) return;
    const Re = (0, M.hj)((0, a.get)(We, "data.consultationAssignment"));
    if (0 === Re.length) return this.consultations = [], this.isLoading = !1, this.modalRef?.close(), this.modalRef || this.store.dispatch((0, m.K0)({
      menuName: null
    })), void this.cdr.markForCheck();
    const st = (0, a.map)(Re, "assignmentCompositionUid");
    this.isLoading = !0, this.getCompositions(st).pipe((0, e.t)(this)).subscribe(q => {
      this.consultations = (0, a.map)(Re, mt => ({
        ...mt,
        composition: (0, a.find)(q, ut => (0, a.includes)(ut.compositionUid, mt.assignmentCompositionUid))
      })), this.isLoading = !1, this.cdr.markForCheck();
    });
  }
});
