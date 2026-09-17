// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.highlightOverdue = !1;
  }
  ngOnInit() {
    this.clsData = (0, Oc.yE)(w1.d, this.data.data);
    const s = this.clsData?.labReferral;
    this.highlightOverdue = DP({
      cito: s?.cito,
      status: s?.status,
      assignments: s?.assignments,
      referralAssignmentDate: s?.assignmentDate
    }).highlightOverdue;
  }
  get referralNumber() {
    const s = this.clsData?.labReferral?.referralNumber;
    return null == s || "" == `${s}` ? "—" : `${s}`;
  }
  get hasFailReason() {
    return !!this.failReason;
  }
  get failReason() {
    return (this.clsData?.labReferral?.failReason ?? "").trim();
  }
  get failReasonTooltip() {
    return this.failReason;
  }
});
