// Extracted from main; webpack module 78381. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    K: () => y
  });
  var t = i(71822),
    e = i(63900),
    a = i(39841),
    m = i(39646),
    d = i(54004),
    M = i(18505),
    b = i(70262),
    A = i(22049),
    N = i(72757),
    I = i(48763);
  class O {
    constructor(W, F, Le) {
      this.skipValidation = !1, this.compositions = [], this.deleteCompositions = [], this.ehr = W, this.api = F, this.userContext = Le;
    }
    add(W) {
      const F = this.compositions.find(Le => Le.composition === W.composition);
      if (F) throw new Error(`Composition ${F.composition.getUid()} is already added to contribution.`);
      this.compositions.push(W);
    }
    addDelete(W) {
      const F = this.deleteCompositions.find(Le => Le.compositionUid === W.compositionUid);
      if (F) throw new Error(`Composition ${F.compositionUid} is already added to contribution.`);
      this.deleteCompositions.push(W);
    }
    setSkipValidation(W) {
      this.skipValidation = W;
    }
    commit() {
      const W = this.userContext.getCommitter();
      return 0 === this.compositions.length ? (0, m.of)(this) : this.api.commitContribution(W, [...this.deleteCompositions.map(F => ({
        action: F.type,
        templateId: F.templateId,
        ehrId: this.ehr.getEhrId(),
        compositionUid: F.compositionUid
      })), ...this.compositions.map(F => ({
        action: F.type,
        templateId: F.composition.getTemplateId(),
        ehrId: this.ehr.getEhrId(),
        format: "STRUCTURED",
        composition: F.composition.getEhrObject().getData(),
        compositionUid: F.composition.getUid(),
        lifecycleState: F.lifecycleState ? F.lifecycleState.toLowerCase() : void 0,
        tags: F.tags
      }))], this.skipValidation).pipe((0, e.w)(F => {
        const Le = [];
        return (F.commitData || []).forEach(ke => {
          const J = this.findByUid(ke.id);
          J && Le.push(J.success(ke.id));
        }), Le.length ? (0, a.a)(Le) : (0, m.of)([]);
      })).pipe((0, d.U)(() => this));
    }
    updateCommit() {
      if (0 === this.compositions.length) return (0, m.of)([]);
      const W = this.compositions[0].composition.getComposition().getComposer()?.getValue();
      return this.api.commitContribution({
        committerName: W?.name ?? "",
        committerId: W?.id ?? ""
      }, [...this.compositions.map(Le => ({
        action: Le.type,
        templateId: Le.composition.getTemplateId(),
        ehrId: this.ehr.getEhrId(),
        format: "STRUCTURED",
        composition: Le.composition.getEhrObject().getData(),
        compositionUid: Le.composition.getUid(),
        lifecycleState: Le.lifecycleState ? Le.lifecycleState.toLowerCase() : void 0
      }))], this.skipValidation).pipe((0, e.w)(Le => {
        const ke = [];
        return (Le.commitData || []).forEach(J => {
          const fe = this.findByUid(J.id);
          fe && ke.push(fe.success(J.id));
        }), ke.length ? (0, a.a)(ke).pipe((0, d.U)(() => Le.commitData ?? [])) : (0, m.of)([]);
      }));
    }
    findByUid(W) {
      return this.compositions.find(F => I.B.getUid(W) === I.B.getUid(F.composition.getUid()));
    }
    getEhr() {
      return this.ehr;
    }
    has(W) {
      return void 0 !== this.compositions.find(F => F.composition === W);
    }
  }
  var L = i(2585),
    C = i(80862),
    v = i(9950),
    f = i(24441),
    E = i(40187),
    h = i(62843),
    x = i(93947);
  class u extends x.C {
    open(W, F) {
      let Le;
      return this.uid = W, this.modified = !1, this.loadComposition(W, F).pipe((0, e.w)(ke => (ke && !ke.ehrId && (ke.ehrId = this.context.getEhrId()), ke && ke.ehrId !== this.context.getEhrId() ? (0, h._)(() => new Error("Composition from another EHR")) : (Le = ke, (0, m.of)(ke)))), (0, e.w)(() => (this.templateId = Le?.templateId || "", this.templateId ? this.loadTemplate(this.templateId) : (0, h._)(() => new Error(`TemplateId is undefined for uid = ${W}`)))), (0, M.b)(ke => {
        this.ehrObjectFactory = ke, this.ehrObject = this.ehrObjectFactory.create(Le?.composition), this.composition = this.ehrObject.get(), this.lifecycleState = Le?.lifecycleState, this.timeCommitted = Le?.timeCommitted, this.history = this.context.getHistory(this);
      }), (0, d.U)(() => this));
    }
  }
  class T extends f._ {
    constructor() {
      super(...arguments), this.linkedChildrenCache = {};
    }
    open(W, F, Le) {
      return this.moId ? this.openByComposition(W).pipe((0, e.w)(() => this.findLinkedChildren().pipe((0, e.w)(ke => {
        this.linkedChildren = ke;
        const J = ke.filter(fe => !Le || 0 === Le.length || Le.indexOf(I.B.getUid(fe.uid)) >= 0);
        return J.length ? (0, a.a)(J.map(fe => this.openChildrenByComposition(fe.uid))) : (0, m.of)([]);
      }), (0, M.b)(ke => {
        this.children = ke.filter(J => J.getUid() !== W);
      }), (0, e.w)(() => {
        const ke = this.getSectionSettings().filter(J => J.type === C.y.Section);
        return ke.length ? (0, a.a)(ke.map(J => this.getOrAddEntity(J.code))) : (0, m.of)(this);
      }), (0, d.U)(() => this)))) : (0, m.of)(this);
    }
    openByComposition(W) {
      return this.uid = W, this.openEntry(W).pipe((0, e.w)(F => (F && (this.root = new v.U(this, F), this.rootDecorated = this.root), new E.y(this).loadSetting().pipe((0, e.w)(Le => (this.setting = Le, this.decorate(this.root).pipe((0, M.b)(ke => this.rootDecorated = ke), (0, b.K)(() => (0, m.of)(void 0))))), (0, d.U)(() => this)))));
    }
    openChildrenByComposition(W) {
      return this.openEntry(W).pipe((0, e.w)(F => this.decorate(F).pipe((0, b.K)(() => (0, m.of)(F)))));
    }
    openEntry(W) {
      return new u(this).open(W, this.moId);
    }
    findLinkedChildren() {
      const W = this.ehr?.getStorage();
      if (W && this.ehr && this.moId) {
        const F = this.ehr.getEhrId(),
          Le = this.ehr.getApi().ehrApi.getStorage(W),
          ke = W.views?.medicalEntityView || L.r.medicalEntityView || "",
          J = this.getLinkedChildrenCacheKey(F, ke);
        return this.linkedChildrenCache[J]?.length ? (0, m.of)(this.linkedChildrenCache[J]) : Le.view(F, ke, {
          moId: this.moId,
          compositionId: this.uid
        }).pipe((0, d.U)(fe => (fe?.result || []).filter(ye => ye.compositionUid !== this.uid).map(ye => ({
          uid: ye.compositionUid,
          templateId: ye.templateId,
          name: ye.name
        }))), (0, M.b)(fe => {
          this.linkedChildrenCache[J] = fe;
        }));
      }
      return (0, m.of)([]);
    }
    createEntityComposition(W, F) {
      return new u(this).create(W, F);
    }
    getLinkedChildrenCacheKey(W, F) {
      return `${W}/${F}/${this.moId}/${this.uid}`;
    }
  }
  var R = i(89704),
    B = i(77560);
  class y {
    constructor(W, F, Le, ke) {
      this.storage = W, this.api = F, this.userContext = Le, this.assignmentFactory = ke, this.status = void 0, this.linkToRoot = W.linkToRoot;
    }
    getApi() {
      return this.api;
    }
    getStandaloneAssignments(W, F) {
      return new R.s(this.api.settingsApi).getSettings().pipe((0, d.U)(Le => Le.filter(ke => !W || ke.type === W)), (0, e.w)(Le => {
        const ke = Le.filter(J => void 0 !== J.instructionArchetypeId).filter((J, fe, ye) => fe === ye.findIndex(ae => ae.instructionArchetypeId === J.instructionArchetypeId)).map(J => this.getStandaloneAssignmentEntries(J.instructionArchetypeId, F));
        return ke.length ? (0, a.a)(ke) : (0, m.of)([]);
      }), (0, d.U)(Le => Le.flat()));
    }
    getEhrId() {
      return this.ehrUid;
    }
    getStorage() {
      return this.storage;
    }
    notUseServices() {
      return !1 === this.storage.useServices;
    }
    getMedicalEntry(W, F, Le, ke) {
      return this.openFactoryMedicalEntry(ke).open(I.B.getUid(W), F, Le);
    }
    getMedicalEntryByComposition(W, F) {
      let Le;
      return this.ehrStorage().getComposition(W, F).pipe((0, M.b)(ke => Le = ke)).pipe((0, e.w)(ke => this.ehrStorage().getWebTemplate(ke.templateId)), (0, e.w)(ke => {
        const J = ke.create(Le.composition).get(),
          fe = this.linkToRoot ? J.getLinks().find(ye => ye.getValue()?.target?.startsWith(this.linkToRoot ?? "") && "Ссылка на услугу" !== ye.getValue()?.meaning) : void 0;
        if (this.linkToRoot && fe) {
          const ye = fe.getValue()?.target?.replace(`${this.linkToRoot}/`, "") ?? "";
          if (!ye.startsWith("00000000")) return this.getMedicalEntry(ye, void 0, [I.B.getUid(W)], F);
        }
        return this.getMedicalEntry(W, void 0, [I.B.getUid(W)], F);
      }));
    }
    createMedicalEntry(W, F, Le, ke) {
      return new f._(this, this.api, this.userContext, this.assignmentFactory).create(W, {
        careCaseId: t.fw.create(F, "Id", "CareCaseService", "MedicalEntries")
      }, Le, ke);
    }
    createNew() {
      if (this.ehrUid) throw new Error(`Ehr already created with uid: ${this.ehrUid}`);
      return this.ehrStorage().createEhr().pipe((0, M.b)(W => {
        this.ehrUid = W.ehrId;
      }), (0, d.U)(() => this));
    }
    getEhrStatus() {
      return this.status;
    }
    open(W) {
      if (this.ehrUid) throw new Error(`Ehr already opened with uid: ${this.ehrUid}`);
      return this.ehrStorage().getEhr(W).pipe((0, b.K)(() => (0, m.of)(void 0))).pipe((0, M.b)(F => {
        F && (this.status = F.ehrStatus, this.ehrUid = F.ehrId);
      }), (0, d.U)(() => this.ehrUid ? this : void 0));
    }
    update(W) {
      if (!this.ehrUid) throw new Error("Ehr not initialized");
      return this.ehrStorage().updateEhrStatus(this.ehrUid, W).pipe((0, M.b)(F => {
        this.status = W, this.ehrUid = F.ehrId;
      }), (0, d.U)(() => this));
    }
    openByStatus(W) {
      if (this.ehrUid) throw new Error(`Ehr already opened with uid: ${this.ehrUid}`);
      return this.ehrStorage().getEhrBySubjectNamespace(W).pipe((0, b.K)(() => (0, m.of)(void 0))).pipe((0, M.b)(F => {
        F && (this.status = F.ehrStatus, this.ehrUid = F.ehrId);
      }), (0, d.U)(() => this.ehrUid ? this : void 0));
    }
    query(W) {
      if (!this.ehrUid) throw new Error("Ehr not initialized");
      return this.ehrStorage().aql(W);
    }
    view(W, F) {
      return this.ehrStorage().view(this.ehrUid, W, F);
    }
    getMedicalEntries(W) {
      const {
          careCaseId: F,
          additionalParams: Le,
          excludes: ke,
          moId: J,
          hospitalDate: fe
        } = W,
        ye = this.storage.views?.foldersView,
        ae = this.storage.views?.documentsView || "MedicalEntriesView",
        Y = ye ? F ? ae : ye : ae;
      if (!Y) return console.error("Не заданы параметры Вью для отображения дереве документов: foldersView или documentsView"), (0, m.of)([]);
      let G = [];
      const te = [],
        pe = this.userContext.getWorkplaceId();
      return new B.z(this.api.settingsApi).getSettings(void 0, !1).pipe((0, M.b)(be => {
        G = be;
      })).pipe((0, e.w)(() => this.view(Y, {
        careCaseId: F,
        workplaceId: pe,
        ...(J ? {
          moId: J
        } : {}),
        ...(fe ? {
          hospitalDate: fe
        } : {}),
        ...(Le || {})
      })), (0, d.U)(be => be.filter(le => !(ke || [])?.includes(le.uid)))).pipe((0, M.b)(be => {
        te.push(...be.map(le => ({
          uid: le.uid,
          authorId: le.authorId,
          authorName: le.authorName,
          careCaseId: le.careCaseId,
          templateId: le.templateId,
          hasNesting: le.hasNesting,
          name: le.name,
          moName: le.moName,
          moId: le.moId,
          hospitalDate: le.hospitalDate,
          status: f._.mapStatus(le.status.toString().toUpperCase()),
          timeCommitted: le.timeCommitted,
          startTime: le.startTime,
          typeId: le.typeId ? le.typeId : this.findTypeByTemplateId(le.templateId, G),
          careCaseType: le.careCaseType,
          careCaseCreated: le.careCaseCreated,
          careCaseFinished: le.careCaseFinished,
          sourceType: le.sourceType,
          links: le.links,
          workplaceId: le.workplaceId,
          autopsyDiagnosis: le.autopsyDiagnosis
        })));
      })).pipe((0, d.U)(() => te));
    }
    contribution() {
      return new O(this, this.ehrStorage(), this.userContext);
    }
    getCareCases() {
      return this.view(this.storage.views?.careCasesView || "CareCasesView", {}).pipe((0, e.w)(W => 0 === W.length ? (0, m.of)([]) : (0, a.a)(W.map(F => F.uid ? this.getMedicalEntry(F.uid).pipe((0, d.U)(Le => {
        const ke = Le.getRoot().asType(N.A.IAssignmentEntry),
          J = Le.getInfo ? Le.getInfo() : Le.getMedicalEntry ? Le.getMedicalEntry().getInfo() : {};
        return {
          ...F,
          createTime: J.timeCommitted,
          updateTime: ke?.getLastAction()?.timeCommitted,
          careCaseId: J.careCaseId || "",
          stateValue: ke?.getStateValue()
        };
      }), (0, b.K)(() => (0, m.of)({
        createTime: void 0,
        updateTime: void 0,
        careCaseId: F.careCaseId,
        name: F.name,
        stateValue: void 0,
        cardNumber: F.cardNumber
      }))) : (0, m.of)({
        createTime: void 0,
        updateTime: void 0,
        careCaseId: F.careCaseId,
        name: F.name,
        stateValue: void 0,
        cardNumber: F.cardNumber
      })))));
    }
    getAuthorDrafts(W) {
      const F = encodeURIComponent(`ehrId:${this.ehrUid}|authorId:${this.userContext.getCommitter().committerId}|root:true|new:true`);
      return this.ehrStorage().searchDrafts(F).pipe((0, e.w)(Le => Le && 0 !== Object.keys(Le).length ? (0, a.a)(Object.keys(Le).map(ke => this.draftInfo(ke).pipe((0, b.K)(() => (0, m.of)(void 0))))) : (0, m.of)([]))).pipe((0, d.U)(Le => Le.filter(Boolean).filter(ke => !W || ke.careCaseId === W)));
    }
    getCompositionVisualization(W, F) {
      return this.ehrStorage().getCompositionVisualization(W, F);
    }
    getDraft(W) {
      return this.ehrStorage().getDraft(W);
    }
    deleteDraft(W, F) {
      return this.ehrStorage().deleteDraft(W, F);
    }
    getScannedCopies(W, F) {
      return this.ehrStorage().getScannedCopies(W, F);
    }
    getLocalScannedCopies(W, F) {
      return this.ehrStorage().getLocalScannedCopies(W, F);
    }
    getStandaloneAssignmentEntries(W, F) {
      return this.view(this.storage.views?.standaloneAssignmentEntriesView || "StandaloneAssignmentEntriesView", {
        instructionArchetypeId: W,
        careCaseId: F
      }).pipe((0, e.w)(Le => 0 === Le.length ? (0, m.of)([]) : (0, a.a)(Le.map(ke => this.getMedicalEntry(ke.uid).pipe((0, d.U)(J => J.getRoot().asType(N.A.IAssignmentEntry))))).pipe((0, d.U)(ke => ke))));
    }
    draftInfo(W) {
      return new f._(this, this.api, this.userContext, this.assignmentFactory).draftInfo(W);
    }
    findTypeByTemplateId(W, F) {
      const ke = F.filter(fe => fe.templateId === W).sort((fe, ye) => this.getActiveSumm(ye) - this.getActiveSumm(fe))[0];
      let J = "Другие документы";
      return ke && ke.typeId ? J = ke.typeId : W.startsWith("openEHR-EHR-COMPOSITION.t_f_consultation") && (J = "Консультации"), J;
    }
    getActiveSumm(W) {
      return 10 * Number(W.active) + 5 * Number(W.allowCreate) + Number(W.activeInMedicalCard);
    }
    ehrStorage() {
      return this.api.ehrApi.getStorage(this.storage);
    }
    openFactoryMedicalEntry(W) {
      return this.storage.code === A.o.ERP ? new T(this, this.api, this.userContext, this.assignmentFactory, W) : new f._(this, this.api, this.userContext, this.assignmentFactory);
    }
  }
});
