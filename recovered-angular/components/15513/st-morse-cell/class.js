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
  get sum() {
    return (0, rd.MW)(this.data?.data) ?? null;
  }
  get displayValue() {
    return null == this.sum ? "_" : String(Math.round(this.sum));
  }
  get cubeColorClass() {
    return (0, Pg.e$)(this.data?.data) ? "st-morse-cell__cube_default" : `st-morse-cell__cube_${(0, nf._Y)(this.sum)}`;
  }
  get showAlertDot() {
    return (0, Pg.e$)(this.data?.data);
  }
  get hasAssessment() {
    return (0, Pg.mo)(this.data?.data);
  }
  onCubeClick(s) {
    s.stopPropagation(), this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.hasAssessment ? this.modalService.open(new Zs.X(hw), {
      panelClass: "st-morse-view-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    }) : this.modalService.open(new Zs.X(vE.Z), {
      panelClass: "st-morse-edit-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    });
  }
});
