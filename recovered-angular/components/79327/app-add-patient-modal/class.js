// Extracted class; external identifiers resolve in modules/79327.js.
(class {
  constructor(Fi, Rn, ki, Ei, Wt, Oi) {
    this.modalRef = Fi, this.store = Rn, this.compositionService = ki, this.cdr = Ei, this.tubePatientService = Wt, this.patientService = Oi, this.isLoading = !1, this.tubes = Le.fW, this.empFio = "", this.empId = "", this.isBedFundDept = !1, this.deptId = "", this.deptList = [], this.deptControl = new T.NI(null), this.patientList = [], this.patientControl = new T.NI(null), this.filteredPatientList = [], this.maxDate = new Date(), this.minDate = (0, y.Z)(new Date(), -1), this.dateControl = new T.NI(new Date()), this.timeControl = new T.NI(B()().format(Le.nf), [(0, F.YM)()]), this.tubeSizeControl = new T.NI(null);
  }
  ngOnInit() {
    this.store.select(a.Tb.selectTerminologyItem("orgstructure:department", "departments_list")).subscribe(({
      data: Fi
    }) => {
      this.deptList = Fi.map(({
        code: Rn,
        display: ki
      }) => ({
        id: Rn,
        name: ki
      })), this.cdr.markForCheck();
    }), this.store.select(A.QY).subscribe(({
      data: Fi
    }) => {
      const Rn = this.deptList.find(({
        id: ki
      }) => ki === Fi.department.id.toString());
      this.isBedFundDept = !!Rn, this.empFio = [Fi.lastName, Fi.firstName, Fi.secondName].join(" "), this.empId = Fi.employeeId.toString(), Rn && (this.deptId = Rn.id, this.deptControl.setValue(Rn.name), this.deptControl.disable());
    }), this.store.select(ke.Um).subscribe(Fi => {
      Fi && this.store.dispatch((0, m.it)(!1));
    }), this.tubePatientService.getPatients(this.deptId).subscribe(({
      hits: Fi
    }) => {
      this.patientList = Fi.hits.map(({
        _source: Rn
      }) => Rn.data), !this.isBedFundDept && this.deptControl.value && (this.patientList = this.patientList.filter(Rn => Rn.patientMovement.departmentId === this.deptControl.value.id)), this.filteredPatientList = this.tubePatientService.mappedPatients(this.patientList), this.cdr.markForCheck();
    }), this.deptControl.valueChanges.pipe((0, I.t)(this)).subscribe(Fi => {
      if (this.patientList.length) {
        let Rn = this.patientList;
        Fi && (Rn = this.patientList.filter(({
          patientMovement: ki
        }) => ki.departmentId === Fi.id || ki.departmentName === Fi)), this.filteredPatientList = this.tubePatientService.mappedPatients(Rn), this.cdr.markForCheck();
      }
    }), this.patientControl.valueChanges.pipe((0, I.t)(this)).subscribe(Fi => {
      if (Fi) {
        const ki = this.patientList.find(Wt => Wt.careCase.careCaseId === Fi.careCaseId).nasogastric.elements.filter(Wt => Wt.finishDate).reduce((Wt, Oi) => Wt ? B()(Oi.finishDate).isAfter(B()(Wt.finishDate)) ? Oi : Wt : Oi, null),
          Ei = B()(ki.finishDate);
        B()(this.minDate).isBefore(Ei) && (this.minDate = Ei.toDate(), B()(this.dateControl.value).isBefore(Ei) && this.dateControl.patchValue(Ei.toDate()));
      }
      if (!this.isBedFundDept) if (Fi) {
        const Rn = this.deptList.find(({
          id: ki
        }) => ki === Fi.departmentId);
        this.deptControl.setValue(Rn.name), this.deptControl.disable();
      } else this.deptControl.enable();
    });
  }
  displayDept(Fi) {
    return Fi.name;
  }
  displayPatient(Fi) {
    const Rn = Fi?.patientFio;
    let Wt = [Rn, B()(Fi?.patientBirthDate).format(Le.UV)];
    return Fi?.hospitalCardNumber && Wt.push(`\u2116 ${Fi?.hospitalCardNumber}`), Fi ? Wt.join(", ") : "";
  }
  onSubmit() {
    if (!(this.patientControl.value && this.dateControl.value && this.timeControl.value && this.tubeSizeControl.value)) return this.patientControl.value || this.patientControl.setErrors({
      required: !0
    }), this.dateControl.value || this.dateControl.setErrors({
      required: !0
    }), this.timeControl.value || this.timeControl.setErrors({
      required: !0
    }), this.tubeSizeControl.value || this.tubeSizeControl.setErrors({
      required: !0
    }), !1;
    this.isLoading = !0;
    const Rn = {
      date: B()(this.dateControl.value).format(Le.nC),
      time: this.timeControl.value,
      tubeSize: this.tubeSizeControl.value,
      empFio: this.empFio,
      empId: this.empId
    };
    this.compositionService.getEhrByPatientId(this.patientControl.value.patientId).pipe((0, j.w)(ki => this.compositionService.createTubeDocument(ki, this.patientControl.value.careCaseId, Rn)), (0, W.x)(() => {
      this.isLoading = !1;
    })).subscribe({
      next: () => {
        this.store.dispatch((0, m.lR)(this.patientControl.value.careCaseId)), this.store.dispatch((0, m.AR)({
          observationDateCard: new Date().toISOString()
        })), this.store.dispatch((0, m.I)(!0)), this.modalRef.close(!0), setTimeout(() => {
          this.store.dispatch((0, m.Rc)(!0));
        }, 5e3);
      },
      error: ki => {
        console.error(ki);
      }
    });
  }
});
