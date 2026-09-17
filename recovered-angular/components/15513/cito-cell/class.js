// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.plannedView = {
      displayDate: null,
      highlightOverdue: !1
    };
  }
  ngOnInit() {
    this.clsData = (0, Oc.yE)(w1.d, this.data.data);
    const s = this.clsData?.labReferral;
    this.plannedView = DP({
      cito: s?.cito,
      status: s?.status,
      assignments: s?.assignments,
      referralAssignmentDate: s?.assignmentDate
    });
  }
});
