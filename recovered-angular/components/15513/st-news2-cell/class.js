// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z) {
    this.modalService = s, this.store = o, this.breakpointObserver = D, this.cdr = Z, this.isTablet = !1;
  }
  ngOnInit() {
    this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(s => {
      this.isTablet = s.matches, this.cdr.markForCheck();
    });
  }
  get grade() {
    const s = (0, rd.iY)(this.data?.data).grade;
    if (null == s || "" === s) return null;
    const o = (0, rd.CM)(s);
    return String(null != o ? o : s);
  }
  get cubeColorClass() {
    return AP(this.data);
  }
  get showAlertDot() {
    return SP(this.data);
  }
  get displayValue() {
    return this.grade ?? "—";
  }
  get hasAssessment() {
    return !(0, Pg.rj)(this.data?.data);
  }
  get timeCommittedText() {
    const s = (0, rd.iY)(this.data?.data).timeCommitted;
    if (!s) return "—";
    try {
      const o = new Date(String(s));
      return Number.isNaN(o.getTime()) ? "—" : o.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      });
    } catch {
      return "—";
    }
  }
  onBadgeClick(s) {
    s.stopPropagation(), this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.hasAssessment ? this.modalService.open(new Zs.X(uw), {
      panelClass: "st-news2-view-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    }) : this.modalService.open(new Zs.X(aE.O), {
      panelClass: "st-news2-edit-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    });
  }
});
