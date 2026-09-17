// Extracted class; external identifiers resolve in modules/83151.js.
(class {
  constructor(Qn, In, ui, To) {
    this.modalService = Qn, this.userContext = In, this.compositionService = ui, this.store = To, this.changeLoad = new y.vpe(), this.expanded = !1, this.userContext.getUserContext().pipe((0, n.q)(1), (0, pe.t)(this)).subscribe(bi => {
      this.empId = bi.employeeId.toString();
    });
  }
  ngOnInit() {
    const Qn = this.tubeData.rawCareMarks.find(In => le()(In?.observationDate).isSame(le()(this.observationDate), "day"));
    this.compositionId = Qn.compositionId;
  }
  eventsToggle() {
    this.expanded = !this.expanded;
  }
  isDeleteBtn(Qn) {
    return Qn.empId === this.empId && !this.isSign;
  }
  isEventComment(Qn) {
    return Qn.desc || Qn.reason || Qn.complication || Qn.comment;
  }
  deleteEvent(Qn, In, ui, To = null) {
    const bi = To ? `${To}. ` : "",
      qn = le()(this.observationDate).format(Rt.UV),
      Yi = {
        title: "Удаление отметки",
        message: `\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \xab${bi}${Qn.label}\xbb ${qn} ${"time" in In ? `\u0432 ${In.time}` : `\u0441 ${In.startTime} \u043f\u043e ${In.endTime}`}?`
      };
    this.modalService.open(new qe.X(We.z), {
      panelClass: "delete-modal",
      data: Yi
    }).beforeClose().subscribe(Eo => {
      if (Eo) {
        const Fo = this.tubeData.groupedEvents.reduce((br, Pr) => {
          if (Pr.group === Qn.group) {
            if (Pr?.events) {
              const qo = Pr.events.filter(({
                time: Yo
              }) => Yo !== In.time);
              qo.length && br.push({
                ...Pr,
                events: qo
              });
            }
            if (Pr?.fractional && In.time) {
              const qo = Pr.fractional.filter(({
                time: Yo
              }) => Yo !== In.time);
              qo.length && br.push({
                ...Pr,
                fractional: qo
              });
            }
            if (Pr?.long && In.startTime) {
              const qo = Pr.long.filter(({
                startTime: Yo
              }) => Yo !== In.startTime);
              qo.length && br.push({
                ...Pr,
                long: qo
              });
            }
          } else br.push(Pr);
          return br;
        }, []);
        this.changeLoad.emit(!0), this.compositionService.getEhrByPatientId(this.patientId).pipe((0, Se.w)(br => this.compositionService.deleteEventDocument({
          ehr: br,
          uid: this.compositionId,
          group: Qn.group,
          event: In,
          eventIndex: ui,
          rootUid: this.tubeData.protocolId,
          isLastEvent: !(Fo || []).length
        }))).subscribe(br => {
          setTimeout(() => {
            this.store.dispatch((0, Re.Rc)(!0)), this.changeLoad.emit(!1);
          }, 3e3);
        });
      }
    });
  }
});
