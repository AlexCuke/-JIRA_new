// Extracted class; external identifiers resolve in modules/38334.js.
(class {
  constructor(be, le) {
    this.cdr = be, this.store = le, this.reloadTable = new e.vpe(), this.openMenu = null, this.component = null, this.appointmentListNav = !1, this.title = "";
  }
  ngOnInit() {
    this.store.select(m.C8).pipe((0, W.x)((be, le) => be.menuName === le.menuName && be.params === le.params), (0, F.t)(this)).subscribe(({
      menuName: be,
      params: le
    }) => {
      switch (be) {
        case "News2Component":
          this.appointmentListNav = !0, this.title = this.getOfficialName(le.data.careCase);
          break;
        case "ConsultationsComponent":
        case "InstResComponent":
          this.title = this.getOfficialName(le.data.careCase);
      }
      this.appointmentListNav = "News2Component" === be, this.openMenu = be, this.component = j[be], this.cdr.markForCheck();
    });
  }
  ngAfterViewInit() {
    this.injectorHeader = e.zs3.create({
      providers: [{
        provide: "headerMenu",
        useValue: this.headerMenuRef
      }],
      parent: this.injectorHeader
    });
  }
  getOfficialName(be) {
    return (0, a.join)([be.lastName, be.firstName, be.secondName], " ");
  }
  onMenuClose() {
    this.store.dispatch((0, d.K0)({
      menuName: null
    }));
  }
  onClick() {
    console.log("go to appointment list");
  }
});
