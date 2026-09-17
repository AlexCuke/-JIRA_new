// Extracted class; external identifiers resolve in modules/90015.js.
(class {
  constructor(je, Mt, Je, Xt) {
    this.store = je, this.modalService = Mt, this.messageService = Je, this.compositionService = Xt, this.commonData = null, this.expanded = !1, this.patientInfo = null, this.allowDeleteCard = !1, this.searchTerm$ = this.store.select(O.d4);
  }
  ngOnInit() {
    const {
        careCase: je,
        elements: Mt,
        patientMovement: Je
      } = this.data,
      Xt = Mt.reduce((Pi, Ii) => Ii.installDate && (!Pi || Ii.installDate > Pi.installDate) ? Ii : Pi, null),
      Nn = {
        patientFio: [je.lastName, je.firstName, je.secondName].join(" "),
        gender: 1 == je.genderCode ? "male2" : "female2",
        age: (0, A.Kp)(je.birthDate) || 0,
        wardName: Je.wardName ? Je.wardName : "Не размещен",
        installDate: Xt ? M()(Xt.installDate).format(N.UV) : "",
        finishDate: Xt && Xt.finishDate ? M()(Xt.finishDate).format(N.TX) : "",
        deptName: Je.departmentName
      };
    (0, a.a)({
      employees: this.store.select(O.VC),
      date: this.store.select(O.YI)
    }).pipe((0, e.t)(this)).subscribe(({
      employees: Pi,
      date: Ii
    }) => {
      if (Xt) {
        const yi = Xt.nasogastricCareMarks.find(co => M()(Ii).format(N.Hu) === M()(co.observationDate).format(N.Hu));
        if (yi && yi.nasalTreatmentTime && (Nn.nasalTreatmentTime = yi.nasalTreatmentTime.slice(0, 5)), yi && yi.nurseId) {
          const Jo = Pi.find(({
            id: fr
          }) => fr === yi.nurseId).fio.split(" ");
          Nn.nurseName = `${Jo[0]} ${Jo[1][0]}.${Jo[2][0]}.`;
        }
      }
    }), this.commonData = {
      careCaseId: je.careCaseId,
      patientId: je.actualPatientId,
      parentUid: Xt ? Xt.protocolId : ""
    }, this.patientInfo = Nn, this.allowDeleteCard = !!Xt && !Xt.nasogastricCareMarks.length;
  }
  togglePatient() {
    this.expanded = !this.expanded;
  }
  toggleMenu(je) {
    je.toggle();
  }
  onOpenCard(je) {
    this.store.dispatch((0, L.lR)(this.commonData.careCaseId)), this.modalService.open(new b.X(C.W), {
      data: {},
      panelClass: ["full-screen-modal", "tube-card-modal"],
      width: "768px",
      maxWidth: "100%",
      height: "calc(100% - (48px + 36px))"
    }).afterClose().subscribe(() => {}), je.close();
  }
  onDeleteTube(je) {
    this.modalService.open(new b.X(I.z), {
      panelClass: "delete-modal",
      data: {
        title: "Удаление карты наблюдения",
        message: "Карта наблюдения будет удалена вместе с пациентом из Списка ухода. Удалить пациента из Списка ухода?"
      }
    }).beforeClose().subscribe(Je => {
      Je && this.compositionService.getEhrByPatientId(this.commonData.patientId).pipe((0, m.w)(Xt => this.compositionService.deleteTubeDocument(Xt, this.commonData.parentUid))).subscribe(() => {
        je.close(), this.messageService.success("Карта наблюдения успешно удалена"), this.store.dispatch((0, L.Rc)(!0));
      });
    });
  }
});
