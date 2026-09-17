// Extracted from main; webpack module 93947. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C: () => J
  });
  var t = i(71822),
    e = i(80953),
    a = i(23331),
    m = i(40833),
    M = i(9893),
    b = i(77579),
    A = i(39646),
    N = i(18505),
    I = i(63900),
    O = i(62843),
    L = i(54004),
    C = i(49770),
    v = i(34782),
    f = i(70262),
    E = i(39841),
    h = i(22049),
    x = i(48763),
    u = i(72757),
    T = (() => {
      return (fe = T || (T = {})).CREATE = "CREATE", fe.UPDATE = "UPDATE", fe.DELETE = "DELETE", T;
      var fe;
    })(),
    R = i(21777),
    B = i(68091),
    y = i(82562),
    j = i(36075),
    W = i(19336),
    F = i(87717),
    Le = i(81290),
    ke = i(67838);
  class J {
    constructor(ye) {
      this.context = ye, this.updated$ = new b.x(), this.modified = !1, this.deleted = !1, this.tags = [], this.draftTail$ = (0, A.of)(void 0), this.typesStack = [], this.marks = new Le.z(), this.apis = this.context.getApis(), this.linkToRoot = ye.getEhr().getStorage().linkToRoot, this.registerType(u.A.ICompositionEntry, this);
    }
    static linkToRoot(ye, ae, Y) {
      const te = ye.getLinks().filter(le => le.getValue()?.target?.startsWith(ae))[0] || ye.addLink(),
        {
          linkPath: pe,
          linkMeaning: be
        } = Y.getSettings();
      te.setValue({
        target: `${pe ?? ae}/${Y.getUid()}`,
        type: "EHR",
        meaning: be ?? "Ссылка на протокол"
      });
    }
    getMedicalEntry() {
      return this.context;
    }
    getSettings() {
      if (this.setting) return this.setting;
      if (this.getMedicalEntry() && this.getMedicalEntry().getSettings() && (this.uid === this.getMedicalEntry().getUid() || this.uid.split("::")[0] === this.getMedicalEntry().getUid())) return this.getMedicalEntry().getSettings();
      const ye = (this.medicalEntrySettingLink?.getValue()?.target || "").split("/")[0],
        ae = this.getMedicalEntry().getSettings();
      if (ye) {
        const G = ae?.entries?.map(te => te).find(te => te.code === ye);
        if (G) return this.setting = G, G;
      }
      const Y = ae?.entries?.map(G => G).find(G => G.templateId === this.templateId);
      return Y ? (this.setting = Y, Y) : {
        code: this.templateId,
        name: this.composition.getTemplate()?.tree?.getName() ?? "",
        templateId: this.composition.getTemplateId()
      };
    }
    getCommitTime() {
      return this.timeCommitted;
    }
    open(ye) {
      let ae, Y;
      return this.uid = ye, this.modified = !1, this.loadComposition(ye).pipe((0, N.b)(G => {
        this.tags = G?.tags ?? [];
      }), (0, I.w)(G => (G && !G.ehrId && this.context.getEhr().getStorage().code === h.o.ERP && (G.ehrId = this.context.getEhrId()), G && G.ehrId !== this.context.getEhrId() ? (0, O._)(() => new Error("Composition from another EHR")) : (ae = G, (0, A.of)(G)))), (0, I.w)(() => this.loadDraft()), (0, N.b)(G => {
        Y = G;
      }), (0, I.w)(() => (this.templateId = ae ? ae.templateId : Y?.draftComposition?.templateId, this.templateId ? this.loadTemplate(this.templateId) : (0, O._)(() => new Error(`TemplateId is undefined for uid = ${ye}`)))), (0, N.b)(G => {
        this.ehrObjectFactory = G, this.currentDraft = Y, this.currentDraft && this.currentDraft.draftComposition.deleted && (this.deleted = this.currentDraft.draftComposition.deleted || !1), this.ehrObject = this.ehrObjectFactory.create(Y ? Y.draftComposition : ae?.composition), this.openedDraft = M(this.currentDraft), this.composition = this.ehrObject.get(), this.lifecycleState = ae?.lifecycleState, this.timeCommitted = ae?.timeCommitted, this.history = this.context.getHistory(this), this.sendUpdatedEvent();
      }), (0, L.U)(() => this));
    }
    getHistory() {
      return this.history;
    }
    create(ye, ae, Y) {
      return this.uid = ye, this.templateId = ae.templateId, this.debug("create"), this.loadTemplate(ae.templateId).pipe((0, N.b)(G => {
        this.ehrObjectFactory = G, this.modified = !0, this.setting = ae, this.ehrObject = this.ehrObjectFactory.create(Y || {}), this.composition = this.ehrObject.get(), this.history = this.context.getHistory(this);
      }), (0, L.U)(() => this));
    }
    attach(ye) {
      this.context = ye, this.debug("attach"), this.linkToRoot && this.getUid() !== ye.getUid() && J.linkToRoot(this.composition, this.linkToRoot, ye);
    }
    api() {
      return this.apis.ehrApi.getStorage(this.getMedicalEntry().getEhr().getStorage());
    }
    example() {
      return this.api().example(this.templateId).pipe((0, N.b)(ye => {
        const ae = this.context.getContext();
        this.modified = !0, this.ehrObject = this.ehrObjectFactory.create(ye), this.composition = this.ehrObject.get(), this.history = this.context.getHistory(this), this.context.getUserContext().prepareCompositionContext(this, ae);
      }), (0, L.U)(() => this));
    }
    getComposition() {
      return this.composition;
    }
    getTemplateId() {
      return this.templateId;
    }
    getUid() {
      return this.uid;
    }
    getId() {
      return this.setting?.code || this.uid;
    }
    validate(ye) {
      return !((this.setting && this.setting.min || 0) > 0 && this.isEmpty()) && 0 === this.composition.validate(ye || !1).length;
    }
    isValid() {
      return this.isDraftValid() || this.localValid || this.validate(!0) && (this.localValid || void 0 === this.localValid) && void 0 === this.isDraftValid();
    }
    hasContent() {
      const ye = this.ehrObject.getTemplate(),
        ae = ye.tree?.getChildren()?.filter(Boolean).filter(Y => Y.aqlPath && Y.aqlPath.startsWith("/content"));
      for (const Y of ae) if (Y.getMax() > 1) {
        const G = this.composition.getMany(`${ye?.tree?.id}.${Y.id}`);
        if (G.length && G.some(te => !te.empty())) return !0;
      } else {
        const G = this.composition.get(`${ye?.tree?.id}.${Y.id}`);
        if (G instanceof t.Rh) return !!this.getSettings().checkActionForEmptiness && !G.empty();
        if (!G?.empty()) return !0;
      }
      return !1;
    }
    isEmpty() {
      const ye = this.clearPrefill(),
        ae = !this.hasContent();
      return this.setPrefill(ye), ae;
    }
    incomplete(ye) {
      return this.debug("incomplete"), this.saveComposition(ye, y.u.INCOMPLETE);
    }
    complete(ye) {
      return this.debug("complete"), this.saveComposition(ye, y.u.COMPLETE);
    }
    updateCompleted(ye) {
      return this.updateComposition(ye, y.u.COMPLETE);
    }
    delete(ye) {
      return y.u.DELETED !== this.lifecycleState || this.isModified() ? (this.debug("delete"), this.lifecycleState ? (ye.add({
        type: T.DELETE,
        composition: this,
        success: ae => (0, A.of)(ae).pipe((0, I.w)(() => this.deleteDraft()), (0, I.w)(() => this.loadComposition(ae)), (0, N.b)(Y => {
          this.uid = ae, this.markDeleted(), this.lifecycleState = Y?.lifecycleState, this.timeCommitted = Y?.timeCommitted, this.modified = !1;
        }), (0, L.U)(() => this))
      }), (0, A.of)(this)) : this.currentDraft ? this.deleteDraft().pipe((0, N.b)(() => {
        this.markDeleted(), this.lifecycleState = y.u.DELETED, this.modified = !1;
      }), (0, L.U)(() => this)) : (0, A.of)(this)) : (0, A.of)(this);
    }
    draft(ye, ae, Y) {
      if (this.debug("draft"), !Y && !this.isModified()) return (0, A.of)(this);
      const G = (0, C.P)(() => {
          const pe = encodeURIComponent(`ehrId:${this.context.getEhrId()}|authorId:${this.context.getUserContext().getCommitter().committerId}${ae || ""}`);
          this.prepareLinks();
          const be = `expiryDuration=1&expiryDurationUnit=DAYS&tags=${pe}`,
            le = this.currentDraft ? this.currentDraft?.version || 0 : -1;
          this.context.getUserContext().prepareCompositionContext(this, this.context.getContext()), this.composition.save();
          const n = this.ehrObject.getData() || {},
            Se = ye || this.localValid;
          return n.templateId = this.templateId, n.valid = void 0 === Se ? n.valid : Se, n.startTime = function d(fe, ye) {
            var ae, Y;
            (0, m.Z)(1, arguments);
            var G = (0, e.Z)(fe);
            if (isNaN(G.getTime())) throw new RangeError("Invalid time value");
            var te = String(null !== (ae = ye?.format) && void 0 !== ae ? ae : "extended"),
              pe = String(null !== (Y = ye?.representation) && void 0 !== Y ? Y : "complete");
            if ("extended" !== te && "basic" !== te) throw new RangeError("format must be 'extended' or 'basic'");
            if ("date" !== pe && "time" !== pe && "complete" !== pe) throw new RangeError("representation must be 'date', 'time', or 'complete'");
            var be = "",
              le = "",
              n = "extended" === te ? "-" : "",
              Se = "extended" === te ? ":" : "";
            if ("time" !== pe) {
              var qe = (0, a.Z)(G.getDate(), 2),
                Rt = (0, a.Z)(G.getMonth() + 1, 2),
                We = (0, a.Z)(G.getFullYear(), 4);
              be = "".concat(We).concat(n).concat(Rt).concat(n).concat(qe);
            }
            if ("date" !== pe) {
              var Re = G.getTimezoneOffset();
              if (0 !== Re) {
                var st = Math.abs(Re),
                  q = (0, a.Z)(Math.floor(st / 60), 2),
                  mt = (0, a.Z)(st % 60, 2);
                le = "".concat(Re < 0 ? "+" : "-").concat(q, ":").concat(mt);
              } else le = "Z";
              var Ue = "" === be ? "" : "T",
                Me = [(0, a.Z)(G.getHours(), 2), (0, a.Z)(G.getMinutes(), 2), (0, a.Z)(G.getSeconds(), 2)].join(Se);
              be = "".concat(be).concat(Ue).concat(Me).concat(le);
            }
            return be;
          }(new Date()), this.uid === this.getMedicalEntry().getUid() && (n.info = this.getMedicalEntry().getInfo()), (le >= 0 ? this.api().updateDraft(this.uid, le, n, be) : this.api().createDraft(this.uid, n, be)).pipe((0, N.b)(Rt => {
            this.currentDraft = {
              draftComposition: n,
              version: Rt.version
            }, this.ehrObject = this.ehrObjectFactory.create(n), this.composition = this.ehrObject.get(), this.history = this.context.getHistory(this), this.modified = !0, this.sendUpdatedEvent();
          }), (0, L.U)(() => this));
        }).pipe((0, v.d)(1)),
        te = this.draftTail$.pipe((0, I.w)(() => G), (0, v.d)(1));
      return this.draftTail$ = te.pipe((0, L.U)(() => {}), (0, f.K)(() => (0, A.of)(void 0))), te;
    }
    isDraft() {
      return !this.lifecycleState;
    }
    getLifecycleState() {
      return this.lifecycleState;
    }
    isModified() {
      return this.modified || this.composition.checkModified() || this.deleted;
    }
    getEhrObject() {
      return this.ehrObject;
    }
    getPresentation() {
      return new j.q(this.ehrObject.getTemplate(), this.composition, this.typesStack[this.typesStack.length - 1].getSettings()?.presentationFilter).getContent();
    }
    getFormDescription() {
      return this.setting?.formId ? this.apis.formsApi.getForm(this.setting.formId) : this.apis.formsApi.findFormDescription(this.templateId, this.setting?.name);
    }
    hasDraft() {
      return void 0 !== this.currentDraft;
    }
    setLocalValid(ye) {
      this.localValid = ye;
    }
    getLocalValid() {
      return this.localValid;
    }
    setApproved(ye) {
      this.approved = ye;
    }
    getApproved() {
      return this.approved;
    }
    revertChanges(ye) {
      this.debug("revertChanges");
      let ae = (0, A.of)(this);
      if (!this.isModified()) return (0, A.of)(this);
      if (this.deleted && (this.deleted = !1), !this.lifecycleState && !this.openedDraft) return this.deleted = !0, this.currentDraft = void 0, this.ehrObject = this.ehrObjectFactory.create({}), this.composition = this.ehrObject.get(), this.history = this.context.getHistory(this), ye ? this.deleteEmptyHandle() : this.deleteDraft();
      if (this.openedDraft) {
        if (this.getSettings()?.removeDraftByCancel && void 0 !== this.openedDraft?.version) return this.api().deleteDraft(this.uid, this.openedDraft.version).pipe((0, L.U)(() => this));
        if (this.currentDraft && (this.currentDraft.version || -1) > 0 && this.openedDraft.version !== this.currentDraft.version) ae = ae.pipe((0, I.w)(() => this.currentDraft?.version ? this.api().deleteDraft(this.uid, this.currentDraft.version) : (0, A.of)(null)), (0, N.b)(() => {
          this.api().clearCompositionCacheByUid(this.uid);
        }), (0, L.U)(() => this)), ae = ae.pipe((0, I.w)(() => (this.localValid = void 0, this.currentDraft = M(this.openedDraft), this.currentDraft && (this.currentDraft.version = -1), this.modified = !1, this.ehrObject = this.ehrObjectFactory.create(this.currentDraft?.draftComposition || {}), this.draft())));else if (ye) return this.deleteEmptyHandle();
      } else this.currentDraft ? ae = ae.pipe((0, I.w)(() => this.deleteDraft()), (0, N.b)(() => {
        this.api().clearCompositionCacheByUid(this.uid);
      }), (0, L.U)(() => this)) : this.lifecycleState && (ae = ae.pipe((0, I.w)(() => this.open(this.uid))));
      return ae;
    }
    applyTemplate(ye, ae) {
      return this.debug("applyTemplate"), new B.K(this).applyTemplate(ye, ae).pipe((0, N.b)(() => this.sendUpdatedEvent()));
    }
    createTemplate(ye) {
      return new B.K(this).createTemplate({
        ...ye,
        valid: this.localValid
      });
    }
    getSearchCriteria() {
      return new B.K(this).getSearchCriteria();
    }
    prepareLinks() {
      this.linkToRoot && x.B.getUid(this.getMedicalEntry().getUid()) !== x.B.getUid(this.getUid()) && J.linkToRoot(this.composition, this.linkToRoot, this.context);
      const ye = this.medicalEntrySettingLink || this.composition.getContext().addLink(),
        ae = this.getSettings();
      if (ae.code) {
        const Y = this.getMedicalEntry().getRoot().getUid();
        ye?.setValue({
          target: `${ae.code}/${Y}`,
          type: "MedicalEntrySetting",
          meaning: "Ссылка на код медицинской записи или код секции медицинской записи"
        });
      }
      (0, ke._)(this.composition.getLinks());
    }
    prepareTags(ye) {
      if (ye !== y.u.COMPLETE && !this.getSettings().preventUseRootTagsForIncomplete) return this.getSettings().tags ?? void 0;
      const ae = this.getMedicalEntry().getUserContext(),
        Y = this.typesStack[this.typesStack.length - 1];
      return 0 === this.typesStack.indexOf(Y) ? [...(this.getSettings().tags || []), ...(0, F.L)({
        uid: x.B.getUid(this.getUid()),
        marks: this.getMarks(),
        tags: this.getTags(),
        context: ae,
        lifecycleState: ye
      })] : Y !== this ? this.isEntryCompositeItem(Y) ? this.getSettings().tags ?? [] : Y.prepareTags(ye) : this.getSettings().tags ?? void 0;
    }
    deleteDraft() {
      if (!this.currentDraft) return (0, A.of)(this);
      const ye = this.currentDraft.version;
      return void 0 === ye || ye <= -1 ? (0, A.of)(this).pipe((0, N.b)(this.currentDraft = void 0)) : this.deleteDraftApi(ye);
    }
    saveComposition(ye, ae) {
      if (ae === this.lifecycleState && !this.isModified()) return (0, A.of)(this);
      const Y = this.context.getRoot().getUid() === this.getUid();
      if (!Y && !this.lifecycleState && this.isEmpty()) return (0, A.of)(this);
      this.prepareLinks(), this.context.getUserContext().prepareCompositionContext(this, this.context.getContext()), this.composition.save();
      const G = this.lifecycleState ? !Y && this.isEmpty() ? T.DELETE : T.UPDATE : T.CREATE;
      return ye.add({
        type: G,
        composition: this,
        lifecycleState: ae,
        tags: this.prepareTags(ae),
        success: te => (0, A.of)(te).pipe((0, I.w)(() => this.deleteDraft()), (0, I.w)(() => this.loadComposition(te)), (0, N.b)(pe => {
          this.uid = te, this.ehrObject = this.ehrObjectFactory.create(pe?.composition), this.composition = this.ehrObject.get(), this.lifecycleState = pe?.lifecycleState, this.timeCommitted = pe?.timeCommitted, this.modified = !1, this.tags = pe?.tags ?? [], this.sendUpdatedEvent();
        }), (0, L.U)(() => this))
      }), (0, A.of)(this);
    }
    updateComposition(ye, ae) {
      return this.composition.save(), ye.add({
        type: T.UPDATE,
        composition: this,
        lifecycleState: ae,
        success: () => (this.modified = !1, (0, A.of)(this))
      }), (0, A.of)(this);
    }
    deleteDraftApi(ye) {
      return this.api().deleteDraft(this.uid, ye).pipe((0, N.b)(this.currentDraft = void 0), (0, L.U)(() => this));
    }
    loadDraft() {
      const ye = this.context.status();
      return ye === R.j.SAVED || ye === R.j.INIT ? this.loadDraftApi() : (0, A.of)(void 0);
    }
    loadDraftApi() {
      return this.api().hasDraft(this.uid).pipe((0, I.w)(ye => ye ? this.api().getDraft(this.uid).pipe((0, f.K)(() => (0, A.of)(void 0))) : (0, A.of)(void 0)));
    }
    isEntryCompositeItem(ye) {
      const ae = ye.getComposition().getLinks(),
        Y = ae.some(te => te.getValue().meaning?.startsWith("Ссылка на протокол")),
        G = ae.some(te => "Корневая композиция" === te.getValue().meaning);
      return Y && !G && ye.getType() === u.A.ICompositionEntryRoot;
    }
    deleteEmptyHandle() {
      return this.loadDraftApi().pipe((0, I.w)(ye => void 0 !== ye?.version ? this.deleteDraftApi(ye.version) : (0, A.of)(this)));
    }
    loadComposition(ye, ae) {
      return this.api().hasComposition(ye).pipe((0, I.w)(Y => Y ? this.api().getComposition(ye, ae).pipe((0, f.K)(() => (0, A.of)(void 0))) : (0, A.of)(void 0)), (0, f.K)(() => (0, A.of)(void 0)));
    }
    loadTemplate(ye) {
      return this.api().getWebTemplate(ye);
    }
    getFieldHistory(ye, ae) {
      const Y = ye.getNode().aqlPath ?? "";
      return this.api().view(this.context.getEhrId(), this.getMedicalEntry().getEhr().getStorage().views?.fieldHistoryView || "FieldHistoryView", {
        aqlPath: Y,
        templateId: this.templateId,
        limit: ae || 10
      }).pipe((0, I.w)(G => 0 === G.length ? (0, A.of)([]) : (0, E.a)(G.map(te => this.compositionFieldValue(te.uid, Y))))).pipe((0, L.U)(G => G.filter(te => te).map(te => te)));
    }
    compositionFieldValue(ye, ae) {
      return this.api().getComposition(ye).pipe((0, L.U)(Y => {
        try {
          const te = this.ehrObjectFactory.create(Y.composition).get(ae, t.cB.AQL);
          return te.getIsNew() || te.empty() ? void 0 : te;
        } catch {
          return;
        }
      }));
    }
    markDeleted() {
      this.setDeleteValue(!0);
    }
    prepareCompositionContext() {
      this.context.getUserContext().prepareCompositionContext(this, this.context.getContext()), this.composition.save();
    }
    restore() {
      this.setDeleteValue(!1);
    }
    isDeleted() {
      return this.deleted;
    }
    load() {
      return (0, A.of)(this);
    }
    updatedEvent() {
      return this.updated$;
    }
    getTime() {
      return this.composition.getContext()?.getStartTime()?.getString() || (this.currentDraft ? this.currentDraft.draftComposition.startTime : void 0) || new Date().toJSON();
    }
    getTitle() {
      return this.setting?.name || this.composition.getNode().name || "";
    }
    isDraftValid() {
      return this.currentDraft ? this.currentDraft.draftComposition.valid : void 0;
    }
    registerType(ye, ae) {
      if (ye === u.A.ICompositionSection) return;
      this.types || (this.types = {});
      const Y = this.types[ye];
      if (Y) {
        const G = this.typesStack.indexOf(Y);
        G > -1 && this.typesStack.splice(G, 1);
      }
      this.types[ye] = ae, this.typesStack.push(ae);
    }
    unregisterType(ye) {
      const ae = this.types ? this.types[ye] : void 0;
      ae && (this.types[ye] = void 0), this.typesStack = this.typesStack.filter(Y => Y !== ae);
    }
    getType() {
      return u.A.ICompositionEntry;
    }
    getBaseClass(ye) {
      const ae = this.types[ye];
      if (!ae) return this;
      const Y = this.typesStack.indexOf(ae);
      return Y > 0 ? this.typesStack[Y - 1] : this;
    }
    getAppointments() {
      return this.apis.appointmentApi.findAppointmentByAssignmentCompositionQuery(this.getUid()).pipe((0, f.K)(() => (0, A.of)([])));
    }
    asType(ye) {
      return this.types[ye] ? this.types[ye] : void 0;
    }
    sendUpdatedEvent() {
      this.updated$.next(this);
    }
    createComposition(ye) {
      return this.ehrObjectFactory.create(ye).get();
    }
    getMarks() {
      return this.marks;
    }
    getTags() {
      return this.tags ?? [];
    }
    setDeleteValue(ye) {
      this.deleted = ye, this.currentDraft && (this.currentDraft.draftComposition.deleted = ye), this.sendUpdatedEvent();
    }
    debug(ye) {
      return ye;
    }
    clearPrefill() {
      return this.basePrefill((ye, ae, Y, G) => {
        ye.getType() === t.B8.DV_TEXT && (G.push(ye.getData()), ye.clear()), ye.getType() === t.B8.DV_CODED_TEXT && (G.push(ye.getCodedText()), ye.clear()), ye.getType() === t.B8.DV_DATE_TIME && (G.push(ye.getData()), ye.clear());
      }, []);
    }
    setPrefill(ye) {
      this.basePrefill((ae, Y, G) => {
        ae.getType() === t.B8.DV_TEXT && ae.setValue(Y[G]), ae.getType() === t.B8.DV_CODED_TEXT && ae.setCodedText(Y[G]), ae.getType() === t.B8.DV_DATE_TIME && ae.setString(Y[G]);
      }, ye);
    }
    basePrefill(ye, ae) {
      const Y = [],
        G = this.getSettings();
      if (G.autocompleteBeforeSave && G.formSettings) {
        const te = G.formSettings;
        Object.keys(te).forEach((pe, be) => {
          try {
            const le = this.composition.get(te[pe]);
            ye(le, ae, be, Y), le.save();
          } catch {}
        });
      }
      return Y;
    }
    get medicalEntrySettingLink() {
      return (0, W.V)(this.composition);
    }
  }
});
