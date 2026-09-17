// Extracted from main; webpack module 35204. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    a: () => pe
  });
  var t = i(72468),
    e = i(83034),
    a = i(82654),
    m = i(19104),
    d = i(59627),
    M = i(84707),
    b = i(39646),
    A = i(13608),
    N = i(2908),
    I = i(54004),
    O = i(70262),
    L = i(41424),
    C = i(14782);
  class v {
    constructor(le, n, Se, qe, Rt) {
      this.assignmentContext = le, this.http = n, this.type = Se, this.api = qe, this.uid = Rt, this.byExecutor = !1;
    }
    cancelling() {
      return this.http.post(`${this.api}/markAssignmentAsCancelling`, {
        assignmentCompositionUid: this.uid,
        byExecutor: this.byExecutor,
        workplaceId: this.assignmentContext.userContext?.getWorkplaceId(),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      }, {
        ...(0, C.h)()
      });
    }
    executing() {
      return this.http.post(`${this.api}/activate`, this.executingParams(), {
        ...(0, C.h)()
      });
    }
    get() {
      return this.http.get(`${this.api}/findByCompositionUid?compositionUid=${this.uid}`, {
        ...(0, C.h)()
      }).pipe((0, I.U)(le => ({
        uid: le.assignmentCompositionUid,
        state: this.getState(le),
        statusHistory: le.statusHistory
      }))).pipe((0, O.K)(() => (0, b.of)(void 0)));
    }
    getState(le) {
      return "ACTIVE" === le.status ? L.DN.EXECUTING : le.status;
    }
    getType() {
      return this.type;
    }
    linkDraft(le) {
      return this.http.post(`${this.api}/linkProtocolDraft`, {
        assignmentCompositionUid: this.uid,
        draftUid: le,
        updated: new Date().toISOString(),
        workplaceId: this.assignmentContext.userContext?.getWorkplaceId(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      }, {
        ...(0, C.h)()
      });
    }
    rollbackCancelling() {
      return this.http.post(`${this.api}/unmarkAssignmentAsCancelling`, {
        assignmentCompositionUid: this.uid,
        workplaceId: this.assignmentContext.userContext?.getWorkplaceId(),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      }, {
        ...(0, C.h)()
      });
    }
    rollbackExecuting(le) {
      return le ? this.http.post(`${this.api}/deactivateIfNoProtocolDraftCommand`, {
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString()
      }, {
        ...(0, C.h)()
      }) : this.http.post(`${this.api}/deactivate`, this.rollbackExecutingParams(), {
        ...(0, C.h)()
      });
    }
    unlinkDraft() {
      return this.http.post(`${this.api}/unlinkProtocolDraft`, {
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString()
      }, {
        ...(0, C.h)()
      });
    }
    markAsExecutor() {
      this.byExecutor = !0;
    }
    executingParams() {
      const le = this.assignmentContext.userContext?.getAssignmentExecutor();
      return {
        workplaceId: le?.executorId,
        doctorName: le?.executorName,
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString()
      };
    }
    rollbackExecutingParams() {
      return {
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString(),
        workplaceId: this.assignmentContext.userContext?.getWorkplaceId(),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      };
    }
  }
  class f extends v {
    constructor(le, n, Se, qe, Rt) {
      super(le, n, A.v.Consultation, qe, Rt), this.consultationControllerService = Se;
    }
    getAssignment() {
      return this.consultationControllerService.getConsultationStatusQuery(this.uid);
    }
    getStateAssignment(le) {
      return this.getState({
        ...le,
        statusHistory: le?.statusHistory || []
      });
    }
    executingParams() {
      const le = this.assignmentContext.userContext?.getAssignmentExecutor();
      return {
        workplaceId: le?.executorId,
        doctorName: le?.executorName,
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        assignmentCompositionUid: this.uid
      };
    }
    rollbackExecutingParams() {
      return {
        assignmentCompositionUid: this.uid,
        workplaceId: this.assignmentContext.userContext?.getWorkplaceId(),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      };
    }
  }
  class E {
    constructor(le, n, Se, qe) {
      this.http = le, this.type = n, this.api = Se, this.ehrId = qe;
    }
    findBetween(le, n) {
      return this.http.post(`${this.api}/v1/assignment/findBetween`, {
        ehrId: this.ehrId,
        dateFrom: le,
        dateTo: n
      }, {
        ...(0, C.h)()
      });
    }
  }
  class h {
    constructor(le, n, Se, qe) {
      this.http = le, this.type = n, this.api = Se, this.ehrId = qe;
    }
    findBetween(le, n, Se) {
      return this.http.post(`${this.api}/findBetween`, {
        ehrId: this.ehrId,
        dateFrom: le,
        dateTo: n,
        workplaceId: Se
      }, {
        ...(0, C.h)()
      });
    }
  }
  class x {
    constructor(le, n, Se, qe) {
      this.http = le, this.type = n, this.api = Se, this.ehrId = qe;
    }
    findBetween(le, n, Se) {
      return this.http.post(`${this.api}/findBetween`, {
        ehrId: this.ehrId,
        dateFrom: le,
        dateTo: n,
        workplaceId: Se
      }, {
        ...(0, C.h)()
      });
    }
  }
  var u = i(4326),
    T = i(63900);
  const R = "m15";
  function B() {
    const be = new Date().getFullYear().toString().substring(2),
      le = Array.from({
        length: 6
      }, () => Math.floor(10 * Math.random())).join("");
    return `${R}${be}${le}`;
  }
  class F extends v {
    constructor(le, n, Se, qe, Rt) {
      super(le, n, A.v.Instrumental, qe, Rt), this.instrumentalControllerService = Se;
    }
    getAssignment() {
      return this.instrumentalControllerService.getInstrumentalStatusQuery(this.uid);
    }
    getStateAssignment(le) {
      return this.getState({
        ...le,
        statusHistory: le?.statusHistory || []
      });
    }
    markAsDescribing(le) {
      return this.instrumentalControllerService.markInstrumentalAsDescribingCommand({
        assignmentCompositionUid: le?.assignmentCompositionUid || "",
        resultCompositionUid: le?.resultCompositionUid || "",
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    rollbackDescribing(le) {
      return this.instrumentalControllerService.unMarkInstrumentalDescribingCommand({
        assignmentCompositionUid: le?.assignmentCompositionUid || "",
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    toReadyToDescribe(le) {
      return this.instrumentalControllerService.moveInstrumentalIntoReadyToDescribeCommand({
        assignmentCompositionUid: le?.assignmentCompositionUid || "",
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        workplaceId: String(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName,
        updated: new Date().toISOString()
      });
    }
    activate(le) {
      const n = function W() {
        const be = localStorage.getItem("selectedEquipment");
        if (!be) return null;
        try {
          return JSON.parse(be);
        } catch (le) {
          return console.warn("Не удалось загрузить оборудование из localStorage", le), null;
        }
      }();
      return n ? this.instrumentalControllerService.enterInstrumentalEquipmentCommand({
        assignmentCompositionUid: le?.assignmentCompositionUid || "",
        equipment: {
          type: n.type,
          data: {
            ...n.equipment,
            accessionNumber: B()
          }
        }
      }).pipe((0, u.g)(500), (0, T.w)(super.executing.bind(this))) : super.executing();
    }
  }
  class Le extends v {
    constructor(le, n, Se, qe, Rt) {
      super(le, n, A.v.Lab, Se, qe), this.labControllerService = Rt;
    }
    getAssignment() {
      return this.labControllerService.getLabInstructionStatusQuery(this.uid);
    }
    getStateAssignment(le) {
      return this.getState({
        ...le,
        statusHistory: le?.statusHistory || []
      });
    }
    getState(le) {
      if (le.referralStatus?.status) switch (le.referralStatus?.status) {
        case "ACTIVE":
          return L.DN.EXECUTING;
        case "OPEN":
          return L.DN.ASSIGNED;
        default:
          return le.referralStatus?.status;
      }
      return "ACTIVE" === le.status ? L.DN.EXECUTING : le.status;
    }
    executing() {
      const le = this.assignmentContext.userContext?.getAssignmentExecutor();
      return this.http.get(`${this.api}/findByCompositionUid`, {
        params: {
          compositionUid: this.uid
        }
      }).pipe((0, T.w)(n => this.labControllerService.activateLabReferralCommand({
        referralId: n.referralId,
        doctorName: le?.executorName,
        workplaceId: le?.executorId,
        updated: new Date().toISOString(),
        doctorJob: this.assignmentContext.userContext?.getPosition()
      })));
    }
    rollbackExecuting(le) {
      return le ? this.http.post(`${this.api}/deactivateIfNoProtocolDraftCommand`, {
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString()
      }, {
        ...(0, C.h)()
      }) : this.labControllerService.deactivateLabReferralCommand({
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
  }
  class ke extends v {
    constructor(le, n, Se, qe, Rt) {
      super(le, n, A.v.Med, qe, Rt), this.medicationControllerService = Se;
    }
    cancelling() {
      return this.medicationControllerService.markMedicationAssignmentInstructionAsCancellingCommand({
        assignmentCompositionUid: this.uid,
        byExecutor: this.byExecutor,
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    rollbackCancelling() {
      return this.medicationControllerService.unMarkMedicationAssignmentInstructionAsCancellingCommand({
        assignmentCompositionUid: this.uid,
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    getAssignment() {
      return this.medicationControllerService.getMedicationAssignmentInstructionStatusQuery(this.uid);
    }
    postpone(le) {
      return this.medicationControllerService.postponeMedicationInstructionCommand({
        code: le,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    rollbackPostpone(le) {
      return this.medicationControllerService.rollbackPostponeMedicationInstructionCommand({
        code: le,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    cancellingScheduleItem(le, n = !1) {
      return this.medicationControllerService.markMedicationInstructionAsCancellingCommand({
        code: le,
        byExecutor: n,
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    rollbackCancellingScheduleItem(le) {
      return this.medicationControllerService.unMarkMedicationInstructionAsCancellingCommand({
        code: le,
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    getStateMedicationInfo(le) {
      return le.status || "";
    }
    getStateAssignment(le) {
      return this.getState({
        ...le,
        statusHistory: le?.statusHistory || []
      });
    }
  }
  class J extends v {
    constructor(le, n, Se, qe, Rt) {
      super(le, n, A.v.Operation, Se, qe), this.operationControllerService = Rt;
    }
    getAssignment() {
      return this.operationControllerService.getOperationStatusQuery(this.uid);
    }
    getStateAssignment(le) {
      return this.getState({
        ...le,
        statusHistory: le?.statusHistory || []
      });
    }
  }
  class fe extends v {
    constructor(le, n, Se, qe) {
      super(le, n, A.v.Pathologist, Se, qe);
    }
  }
  var ye = i(62843);
  class ae extends v {
    constructor(le, n, Se, qe, Rt) {
      super(le, n, A.v.Procedure, Se, Rt), this.procedureApiService = qe;
    }
    activateMarkProcedure(le) {
      return "" === le ? (0, ye._)(() => "Invalid procedure code") : this.procedureApiService.activateProcedureCommand({
        assignmentCompositionUid: this.uid,
        code: le,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    activateProtocolProcedure(le) {
      return "" === le ? (0, ye._)(() => "Invalid procedure code") : this.procedureApiService.activateWithProtocolProcedureCommand({
        assignmentCompositionUid: this.uid,
        code: le,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    deactivateProcedure(le) {
      return "" === le ? (0, ye._)(() => "Invalid procedure code") : this.procedureApiService.deactivateProcedureCommand({
        assignmentCompositionUid: this.uid,
        code: le,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    cancellingProcedure(le) {
      return "" === le ? (0, ye._)(() => "Invalid procedure code") : this.procedureApiService.markProcedureAsCancellingCommand({
        assignmentCompositionUid: this.uid,
        code: le,
        byExecutor: this.byExecutor,
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    rollbackCancellingProcedure(le) {
      return "" === le ? (0, ye._)(() => "Invalid procedure code") : this.procedureApiService.unMarkProcedureAsCancellingCommand({
        assignmentCompositionUid: this.uid,
        code: le,
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    finishing() {
      const le = this.assignmentContext.userContext?.getAssignmentExecutor();
      return this.procedureApiService.markProcedureAssignmentAsFinishingCommand({
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString(),
        workplaceId: le?.executorId,
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    rollbackFinishing() {
      return this.procedureApiService.unMarkProcedureAssignmentAsFinishingCommand({
        assignmentCompositionUid: this.uid,
        updated: new Date().toISOString(),
        workplaceId: Number(this.assignmentContext.userContext?.getWorkplaceId()),
        doctorJob: this.assignmentContext.userContext?.getPosition(),
        doctorName: this.assignmentContext.userContext?.getCommitter().committerName
      });
    }
    getAssignment() {
      return this.procedureApiService.getProcedureAssignmentStatusQuery(this.uid);
    }
    getStateProcedure(le) {
      switch (le.status) {
        case M.dL.StatusEnum.Planned:
          return L.DN.ASSIGNED;
        case M.dL.StatusEnum.Started:
        case M.dL.StatusEnum.StartedProtocol:
          return le.status;
        case M.dL.StatusEnum.Completed:
        case M.dL.StatusEnum.CompletedProtocol:
          return L.DN.COMPLETED;
        default:
          return le.status;
      }
    }
    getStateAssignment(le) {
      return this.getState({
        ...le,
        statusHistory: le?.statusHistory || []
      });
    }
  }
  class Y {
    constructor(le, n) {
      this.type = le, this.uid = n, this.byExecutor = !1;
    }
    cancelling() {
      return this.state = {
        uid: this.uid,
        state: L.DN.CANCELLING,
        assignmentType: this.type,
        byExecutor: this.byExecutor
      }, (0, b.of)(this);
    }
    executing() {
      return this.state = {
        uid: this.uid,
        state: L.DN.EXECUTING,
        assignmentType: this.type
      }, (0, b.of)(this);
    }
    get() {
      return (0, b.of)(this.state);
    }
    getType() {
      return this.type;
    }
    linkDraft(le) {
      return (0, b.of)(this);
    }
    rollbackCancelling() {
      return this.state = void 0, (0, b.of)(this);
    }
    rollbackExecuting(le) {
      return this.state = void 0, (0, b.of)(this);
    }
    unlinkDraft(le) {
      return (0, b.of)(this);
    }
    setState(le) {
      return this.state = {
        uid: this.uid,
        state: le,
        assignmentType: this.type
      }, (0, b.of)(this);
    }
    markAsExecutor() {
      this.byExecutor = !0;
    }
  }
  var G = i(94650),
    te = i(80529);
  let pe = (() => {
    class be {
      constructor(n, Se, qe, Rt, We, Re, st) {
        this.http = n, this.labApiService = Se, this.medApiService = qe, this.procedureApiService = Rt, this.consultationApiService = We, this.instrumentalControllerService = Re, this.operationControllerService = st, this.tempServices = {};
      }
      createService(n, Se) {
        const qe = (0, N.b)(`/${Se.toLowerCase()}/api/v1/assignment`),
          Rt = {
            service: We => (this.tempServices[Se] || (this.tempServices[Se] = {}), this.tempServices[Se][We] || (this.tempServices[Se][We] = new Y(Se, We)), this.tempServices[Se][We]),
            ehrService: We => new E(this.http, Se, qe, We),
            list: () => (0, b.of)([])
          };
        switch (Se) {
          case A.v.Consultation:
            Rt.service = We => new f(n, this.http, this.consultationApiService, (0, N.b)("/consultation/api/v1/consultation"), We), Rt.list = We => this.consultationApiService.getConsultationBetweenQuery(We);
            break;
          case A.v.Operation:
            Rt.service = We => new J(n, this.http, (0, N.b)("/operation/api/v1/operation"), We, this.operationControllerService);
            break;
          case A.v.Procedure:
            Rt.service = We => new ae(n, this.http, qe, this.procedureApiService, We), Rt.ehrService = We => new x(this.http, Se, qe, We), Rt.list = We => this.procedureApiService.getProcedureAssignmentsBetweenQuery(We);
            break;
          case A.v.Instrumental:
            Rt.service = We => new F(n, this.http, this.instrumentalControllerService, (0, N.b)("/instrumental/api/v1/instrumental"), We), Rt.list = We => this.instrumentalControllerService.getInstrumentalsBetweenQuery(We);
            break;
          case A.v.Lab:
            Rt.service = We => new Le(n, this.http, qe, We, this.labApiService), Rt.list = We => this.labApiService.getLabsBetweenQuery(We);
            break;
          case A.v.Pathologist:
            Rt.service = We => new fe(n, this.http, (0, N.b)("/pathologist/api/v1/pathologist"), We);
            break;
          case A.v.Med:
            {
              const We = (0, N.b)("/medicaments/api/v1/assignment");
              Rt.service = Re => new ke(n, this.http, this.medApiService, We, Re), Rt.ehrService = Re => new h(this.http, Se, We, Re);
            }
        }
        return Rt;
      }
    }
    return be.ɵfac = function (n) {
      return new (n || be)(G.LFG(te.eN), G.LFG(a.dn), G.LFG(m.i8), G.LFG(M.U7), G.LFG(t.gP), G.LFG(e.IE), G.LFG(d.IA));
    }, be.ɵprov = G.Yz7({
      token: be,
      factory: be.ɵfac,
      providedIn: "root"
    }), be;
  })();
});
