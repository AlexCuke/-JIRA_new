// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X) {
    this.breakpointObserver = s, this.store = o, this.userContextService = D, this.cdr = Z, this.dietControllerService = X, this.dietList = [], this.patientDietData = [], this.isTablet = !1, this.title = "Порционный лист на питание больных", this.medOrgName = "", this.deptName = "", this.patients = [], this.isCare = !1, this.userContextService.getUserContext().subscribe(oe => {
      this.deptName = oe.department.fullName, this.medOrgName = oe.medicalOrganization.fullName;
    });
  }
  ngOnInit() {
    this.breakpointObserver.observe(xl.o).pipe((0, Kn.t)(this)).subscribe(s => {
      this.isTablet = s.matches, this.cdr.markForCheck();
    }), this.store.select(pl.Tb.selectTerminologyItem("dictionaries:diet", "diet_list")).subscribe(({
      status: s,
      data: o
    }) => {
      "SUCCESS" === s && (this.dietList = o);
    }), this.store.select(Ec.gH).pipe((0, Kn.t)(this), (0, vs.w)(s => {
      const o = s.map(({
        careCaseId: D
      }) => D);
      return this.patientDietData = s, this.dietControllerService.getListPatientsDietCommand({
        careCaseId: o
      });
    })).subscribe(({
      diet: s
    }) => {
      const o = s.map(D => {
        const Z = this.patientDietData.find(({
            careCaseId: oe
          }) => oe === D.careCaseId),
          X = this.dietList.find(({
            name: oe
          }) => oe === D.dietName);
        return {
          ward: Z.ward,
          fio: [Z.lastName, Z.firstName, Z.secondName].join(" "),
          birthday: ku()(Z.birthday).format("DD.MM.YYYY"),
          paymentType: Z.typeOfPaymentName,
          individual: D?.individual ?? "",
          dietName: D.dietName,
          care: D?.care ?? "",
          order: X.order
        };
      });
      this.isCare = o.some(({
        care: D
      }) => D), this.patients = (0, Fc.RP)(o, "ward", "order"), this.cdr.markForCheck();
    });
  }
  onUpload() {
    const s = this.patients.map(Z => ({
        ward: Z.ward,
        fio: Z.fio.toUpperCase(),
        birthday: Z.birthday,
        dietName: Z.dietName,
        individual: Z.individual,
        care: Z.care
      })),
      o = {
        medOrgName: this.medOrgName,
        deptName: this.deptName,
        patients: s
      },
      D = new YM().create(o);
    Vb.toBlob(D).then(Z => {
      (0, U4.saveAs)(Z, "diet.docx");
    });
  }
});
