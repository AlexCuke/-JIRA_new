// Extracted from main; webpack module 24441. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    S: () => Ct,
    _: () => Ft
  });
  var t = i(71822),
    e = i(89570),
    a = i(39646),
    m = i(39841),
    d = i(62843),
    M = i(63900),
    b = i(54004),
    A = i(18505),
    N = i(70262),
    I = i(51588),
    O = i(98179),
    C = (() => {
      return (Et = C || (C = {})).Multiple = "Multiple", Et.Single = "Single", C;
      var Et;
    })(),
    v = i(44947),
    f = i(34793),
    E = i(90467);
  class h {
    convertPresentationNode(Ue) {
      let Me = "";
      return Ue.title && (Me = `${Ue.title}.`), Ue.name ? (Me.length > 0 && (Me = `${Me} `), Ue.value && (Me = `${Me}${Ue.name}: ${this.printValue(Ue)}`)) : Ue.value && (Me.length > 0 && (Me = `${Me} `), Me = `${Me}${this.printValue(Ue)}`), Ue.children && Ue.children.forEach(Ke => {
        Me.length > 0 && (Me = `${Me} `), Me = `${Me}. ${this.convertPresentationNode(Ke)}`;
      }), Me;
    }
    printValue(Ue) {
      return Ue.value || "";
    }
  }
  class x extends h {
    constructor(Ue) {
      super(), this.composition = Ue;
    }
    text() {
      return this.convertPresentationNode(this.composition.getPresentation());
    }
  }
  class u extends h {
    constructor(Ue) {
      super(), this.medicalEntry = Ue;
    }
    text() {
      return this.medicalEntry.presentation().sections.map(Ue => this.convertSection(Ue)).join(". ");
    }
    convertSection(Ue) {
      return this.convertPresentationNode(Ue.content);
    }
  }
  class T {
    constructor(Ue, Me) {
      this.entry = Ue, this.items = Me, this.historyItems = [], this.placeholders = {
        $print: Ke => (0, a.of)(Ke).pipe((0, M.w)(Ze => this.ehr.getMedicalEntryByComposition(Ze))).pipe((0, b.U)(Ze => new u(Ze).text())),
        $printComposition: Ke => (0, a.of)(Ke).pipe((0, M.w)(Ze => this.ehr.getMedicalEntryByComposition(Ze))).pipe((0, b.U)(Ze => {
          const Ee = Ze.getEntry(Ke);
          return Ee ? new x(Ee).text() : "";
        }))
      }, this.ehr = Ue.getMedicalEntry().getEhr(), Me && (this.historyItems = Me);
    }
    applyAll(Ue) {
      const Me = this.historyItems.filter(Ze => !Ze.applied && Ue.find(Ee => Ee.uid === Ze.uid));
      this.addCompositionLinks(Me);
      const Ke = this.createComposition(Me, !0);
      return Ke ? this.applyTemplate(Ke).pipe((0, A.b)(() => Me.forEach(Ze => Ze.applied = !0)), (0, A.b)(() => this.sendUpdatedEvent())) : (0, a.of)(this.entry);
    }
    applyHistory(Ue) {
      return this.getHistoryItems(Ue).pipe((0, M.w)(Me => this.applyAll(Me)));
    }
    removeItem(Ue) {
      return Ue ? this.removeItems([Ue]) : (0, a.of)(this.entry);
    }
    removeItems(Ue) {
      if (!Ue || 0 === Ue.length) return (0, a.of)(this.entry);
      const Me = this.historyItems.filter(Ze => Ze.applied && Ue.find(Ee => Ee.uid === Ze.uid));
      this.removeCompositionLinks(Me);
      let Ke = this.createComposition(Me, !1);
      return Ke || (Ke = {}), this.applyTemplate(Ke).pipe((0, A.b)(() => Me.forEach(Ze => Ze.applied = !1)), (0, A.b)(() => this.sendUpdatedEvent()));
    }
    applyItem(Ue) {
      return this.applyAll([Ue]);
    }
    getHistoryItems(Ue, Me, Ke) {
      const Ze = this.entry.getSettings();
      return Ze.historyView ? this.entry.getMedicalEntry().getEhr().view(Ze.historyView, {
        careCaseId: Ue,
        from: Me,
        to: Ke
      }).pipe((0, A.b)(Ee => {
        Ee.forEach(je => je.applied = this.isApplied(je.uid)), this.careCaseId = Ue, this.historyItems = Ee;
      })) : (0, a.of)([]);
    }
    getHistoryItemsByUid(Ue) {
      return null === Ue ? this.historyItems : this.historyItems.filter(Me => Ue.includes(Me.uid));
    }
    presentation(Ue, Me, Ke) {
      return this.entry.getMedicalEntry().getEhr().createMedicalEntry(this.entry.getMedicalEntry().getSettings().code, "", Ke).pipe((0, M.w)(Ee => Ee.addEntity(Me).pipe((0, M.w)(je => {
        const Mt = this.createBaseHistoryEntityImpl(je, [{
          ...Ue
        }]);
        return Mt.applyItem(Ue).pipe((0, b.U)(() => (Ee.attachComposition(Mt.entry), Ee)));
      }))));
    }
    applyTemplate(Ue) {
      const Me = (0, I.Z)();
      return this.clear(), this.replacePlaceholders(Ue).pipe((0, M.w)(Ke => this.entry.applyTemplate({
        mode: E.m.Clean
      }, {
        name: Me,
        statistics: 0,
        uid: Me,
        code: Me,
        type: "COMPOSITION",
        common: !1,
        content: {
          designMedicalEntry: this.entry.getComposition().getTemplateId(),
          content: [{
            key: Me,
            templateId: this.entry.getComposition().getTemplateId(),
            composition: Ke
          }],
          authorName: this.entry.getComposition().getComposer()?.getValue().name ?? ""
        }
      }))).pipe((0, A.b)(() => this.entry.getComposition().save())).pipe((0, b.U)(() => this.entry));
    }
    escape(Ue) {
      return Ue.replace(/\\n/g, "\\\\n").replace(/\\"/g, "\\\"").replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
    }
    findReplacePlaceholders(Ue) {
      const Me = [];
      return Object.keys(this.placeholders).forEach(Ke => {
        let Ze = Ue.indexOf(`{${Ke}:`);
        for (; Ze >= 0;) {
          const Ee = Ue.indexOf("}", Ze);
          if (Ee > 0) {
            const je = Ue.substring(Ze + Ke.length + 2, Ee);
            Me.push({
              placeholder: Ke,
              args: je
            });
          }
          if (Ee < 0) break;
          Ze = Ue.indexOf(`{${Ke}:`, Ee);
        }
      }), Me;
    }
    replacePlaceholders(Ue) {
      const Me = JSON.stringify(Ue),
        Ke = this.findReplacePlaceholders(Me);
      if (!Ke.length) return (0, a.of)(Ue);
      const Ze = Ke.map(Ee => this.placeholders[Ee.placeholder](Ee.args).pipe((0, b.U)(je => ({
        ...Ee,
        result: je
      }))));
      return (0, a.of)(Ue).pipe((0, M.w)(() => (0, m.a)(Ze))).pipe((0, b.U)(Ee => {
        let je = Me;
        return Ee.forEach(Mt => je = je.replace(`{${Mt.placeholder}:${Mt.args}}`, this.escape(Mt.result))), JSON.parse(je);
      }));
    }
    clear() {
      const Ue = this.entry.getSettings().historyPath;
      Ue && this.entry.getComposition().getMany(Ue).forEach(Ke => {
        const Ze = [];
        new f.a().findBasicTypesRecursive(Ke, Ze), Ze.forEach(Ee => {
          Ee.clear(), Ee.delete();
        }), this.clearElement(Ke);
      });
    }
    sendUpdatedEvent() {
      this.entry.sendUpdatedEvent();
    }
    isNotEmpty(Ue, Me) {
      if (null === Ue || "object" != typeof Ue) return null != Ue;
      {
        const Ke = Object.keys(Ue).filter(Ze => !Me.includes(Ze));
        for (let Ze = 0; Ze < Ke.length; Ze++) {
          const Ee = Ue[Ke[Ze]];
          if (null != Ee) if (Array.isArray(Ee)) {
            if (this.isNotEmpty(Ee[0], Me)) return !0;
          } else {
            if ("object" != typeof Ee) return !0;
            if (this.isNotEmpty(Ee, Me)) return !0;
          }
        }
      }
      return !1;
    }
    getCompositionData() {
      const Ue = this.entry.getEhrObject().getData();
      let Me = [];
      if (this.entry.getSettings().historyPath) {
        const Ze = this.entry.getComposition().get(this.entry.getSettings().historyPath)?.getPath();
        if (Ze) {
          const Ee = Ze.getPathAsArray(Ue);
          Ee.pop(), Me = v(Ue, Ee, null);
        }
      }
      Me || (Me = []);
      const Ke = this.entry.getComposition().ignoreFields();
      return Me.filter(Boolean).filter(Ze => this.isNotEmpty(Ze, Ke));
    }
    createCompositionObject(Ue) {
      const Me = {};
      let Ke = Me;
      const Ze = this.entry.getSettings().historyPath;
      if (Ze) {
        const Ee = Ze.split(".");
        return Ee.forEach((je, Mt) => {
          const Je = {};
          Ke[je] = 0 === Mt ? Je : Mt === Ee.length - 1 ? Ue : [Je], Ke = Je;
        }), Me;
      }
      return Ue[0];
    }
  }
  class R extends T {
    constructor(Ue, Me) {
      super(Ue, Me);
    }
    addCompositionLinks() {}
    removeCompositionLinks() {}
    isApplied(Ue) {
      const Me = this.entry.getSettings().historyPath;
      if (!Me) return !1;
      const Ke = this.entry.getComposition().getMany(Me);
      for (const Ze of Ke) try {
        const Ee = Ze.get("_uid");
        if (Ee && Ee.getValue() === Ue) return !0;
      } catch {}
      return !1;
    }
    createComposition(Ue, Me) {
      const Ke = this.getCompositionData();
      return Ue.forEach(Ze => {
        const Ee = Ke.findIndex(je => je?._uid?.[0] === Ze.uid);
        Ee > -1 ? Me || Ke.splice(Ee, 1) : Ke.push(Array.isArray(Ze.data) ? Ze.data[0] : Ze.data);
      }), this.toComposition(Ke.filter(Boolean));
    }
    createBaseHistoryEntityImpl(Ue, Me) {
      return new R(Ue, Me);
    }
    clearElement() {}
    toComposition(Ue) {
      const Me = [];
      return Ue.forEach(Ke => {
        Array.isArray(Ke) ? Ke.forEach(Ze => {
          Me.push(Ze);
        }) : Me.push(Ke);
      }), this.createCompositionObject(Me);
    }
  }
  class B extends T {
    constructor(Ue, Me) {
      super(Ue, Me);
    }
    addCompositionLinks(Ue) {
      const Me = this.entry.getComposition().getLinks();
      Ue.forEach(Ke => {
        (Me.find(Ee => "history" === Ee.getValue().target && Ee.getValue().meaning === Ke.uid) || this.entry.getComposition().addLink())?.setValue({
          meaning: Ke.uid,
          target: "history",
          type: "EHR"
        });
      });
    }
    removeCompositionLinks(Ue) {
      const Me = this.entry.getComposition().getLinks();
      Ue.forEach(Ke => {
        const Ze = Me.find(Ee => "history" === Ee.getValue().target && Ee.getValue().meaning === Ke.uid);
        Ze && Ze.delete(!0);
      });
    }
    isApplied(Ue) {
      return void 0 !== this.entry.getComposition().getLinks().find(Me => "history" === Me.getValue().target && Me.getValue().meaning === Ue);
    }
    createComposition(Ue, Me) {
      let Ke = this.historyItems.filter(Ze => Ze.applied);
      return Ke = Me ? Ke.concat(Ue) : Ke.filter(Ze => !Ue.find(Ee => Ee.uid === Ze.uid)), this.toComposition(Ke.filter(Boolean).map(Ze => Ze.data));
    }
    createBaseHistoryEntityImpl(Ue, Me) {
      return new B(Ue, Me);
    }
    clearElement(Ue) {
      Ue.setValue && Ue.setValue("");
    }
    toComposition(Ue) {
      if (this.entry.getSettings().historyPath) {
        let Ke = [];
        return Ue.forEach(Ze => {
          0 === Ke.length ? Ke.push(Ze) : Ke = [`${Ke[0]}.\n ${Ze}`];
        }), this.createCompositionObject(Ke);
      }
    }
  }
  class y {
    getHistory(Ue) {
      if (Ue.getSettings().historyView) return Ue.getSettings().historyType === C.Single ? new B(Ue) : new R(Ue);
    }
  }
  var j = i(80862);
  class W {
    constructor(Ue) {
      this.entry = Ue;
    }
    getPresentation() {
      return {
        ...this.entry.getPresentation(),
        research: this.getResearches(this.entry.getComposition()),
        children: void 0
      };
    }
  }
  class F extends W {
    constructor(Ue) {
      super(Ue);
    }
    getResearches(Ue) {
      const Me = this.entry.getSettings().historyPath;
      return Me ? Ue.getMany(Me).map(Ze => Ze.get("лабораторное_исследование"))?.map(Ze => ({
        date: Ze?.get("дата_и_время_исследования")?.getString(),
        name: Ze?.get("исследование")?.getValue(),
        locus: void 0,
        material: void 0,
        tests: Ze?.getMany("тест").filter(Ee => !Ee.empty() && !Ee.isDeleted()).map(Ee => {
          const je = Ee;
          return {
            testName: (je.get("показатель")?.getValue() || je.get("другой_показатель.другой_показатель")?.getValue()) ?? "",
            normalResult: je.get("лабораторное_исследование_образца.информация_о_референсных_значениях.референсные_значения")?.getValue(),
            result: je.get("лабораторное_исследование_образца.значение_результата.text_value")?.getValue(),
            unit: je.get("лабораторное_исследование_образца.единица_измерения_результата")?.getValue(),
            deviation: !!je.get("лабораторное_исследование_образца.информация_о_референсных_значениях.отклонение_от_нормы")?.getValue() || void 0,
            comment: je.get("комментарий")?.getValue()
          };
        }),
        comment: Ze?.get("комментарий")?.getValue()
      })) : [];
    }
  }
  class Le extends W {
    constructor(Ue) {
      super(Ue);
    }
    getResearches(Ue) {
      return Ue.find(new t.RV("openEHR-EHR-OBSERVATION.lab_test.v0")).map(Ke => {
        const Ze = Ke.getMany("любое_событие.тест");
        return {
          name: Ze.length ? this.entry.getSettings().name : "",
          date: Ue.getContext().getStartTime()?.getString() || "—",
          locus: Ke.get("любое_событие.локус")?.getValue(),
          material: Ke.get("любое_событие.биоматериал")?.getValue(),
          tests: Ze.map(Ee => {
            const je = Ee;
            return {
              testName: je.get("наименование_теста")?.getValue() || "—",
              normalResult: je.get("норма")?.getValue() || "—",
              result: je.get("результат")?.getValue() || "—",
              unit: je.get("единица_измерения")?.getValue() || "—",
              deviation: je.get("флаг_уровня_отклонения")?.getValue() || "—",
              comment: je.get("примечание")?.getValue() || "—"
            };
          }),
          comment: Ke.get("любое_событие.примечание")?.getValue()
        };
      });
    }
  }
  var ke = (() => {
    return (Et = ke || (ke = {})).Labs = "Labs", Et.DischargeLabs = "DischargeLabs", ke;
    var Et;
  })();
  class J {
    getPresentation(Ue) {
      return Ue.getSettings()?.presenterId === ke.Labs || Ue.getSettings()?.type === j.y.Lab ? new Le(Ue).getPresentation() : Ue.getSettings()?.presenterId === ke.DischargeLabs ? new F(Ue).getPresentation() : Ue.getPresentation();
    }
  }
  var fe = i(89704),
    ye = i(77560),
    ae = i(48763);
  const G = "hlChangeMedicalEntryStartTime";
  class te {
    constructor() {
      this.startTime = "";
    }
    restoreStartTime(Ue, Me) {
      const Ke = localStorage.getItem(G);
      if (Ke) {
        const Ze = JSON.parse(Ke);
        Ue === Ze.medicalEntryUid && (this.startTime = Ze.startTime), Me === Ze.settingCode && (this.startTime = Ze.startTime);
      }
      return this.getStartTime();
    }
    getStartTime() {
      return this.startTime;
    }
    setStartTime(Ue, Me, Ke) {
      localStorage.setItem(G, JSON.stringify({
        medicalEntryUid: Me,
        startTime: Ue,
        settingCode: Ke
      })), this.startTime = Ue;
    }
    clearStartTime() {
      localStorage.removeItem(G), this.startTime = "";
    }
  }
  var pe = i(82562),
    be = i(666),
    le = i(80675),
    n = i(93947),
    Se = i(9950),
    qe = i(72757),
    Rt = i(68091),
    We = i(36075),
    Re = i(81290);
  class st {
    constructor(Ue, Me) {
      this.context = Ue, this.data = Me, this.modified = !1, this.deleted = !1, this.marks = new Re.z(), this.tags = [], this.apis = Ue.getApis();
    }
    getHistory() {
      return this.history;
    }
    applyTemplate(Ue, Me) {
      return this.data.applyTemplate(Ue, Me);
    }
    asType(Ue) {
      if (Ue === qe.A.ICompositionSection) return this;
    }
    attach(Ue) {}
    revertChanges() {
      return (0, a.of)(this);
    }
    complete(Ue) {
      return (0, a.of)(this);
    }
    updateCompleted(Ue) {
      return (0, a.of)(this);
    }
    create(Ue, Me) {
      return this.uid = Ue, this.modified = !0, this.setting = Me, this.history = this.context.getHistory(this), (0, a.of)(this);
    }
    createTemplate(Ue) {
      return this.data.createTemplate(Ue);
    }
    delete(Ue) {
      return (0, a.of)(this);
    }
    draft(Ue, Me) {
      return (0, a.of)(this);
    }
    example(Ue) {
      return (0, a.of)(this);
    }
    getBaseClass(Ue) {
      return this;
    }
    deleteDraft() {
      return (0, a.of)(this);
    }
    getTags() {
      return this.tags;
    }
    getCommitTime() {
      return this.data.getCommitTime();
    }
    getComposition() {
      return this.data.getComposition();
    }
    getEhrObject() {
      return this.data.getEhrObject();
    }
    getFieldHistory(Ue, Me) {
      return this.data.getFieldHistory(Ue, Me);
    }
    getFormDescription() {
      return this.setting?.formId ? this.apis.formsApi.getForm(this.setting.formId) : this.apis.formsApi.findFormDescription(this.getTemplateId(), this.setting?.name);
    }
    getId() {
      return this.setting?.code || this.uid;
    }
    getLifecycleState() {
      return this.data.getLifecycleState();
    }
    getMedicalEntry() {
      return this.data.getMedicalEntry();
    }
    getPresentation() {
      return new We.q(this.data.getEhrObject().getTemplate(), this.data.getComposition(), this.setting?.presentationFilter).getContent();
    }
    getSearchCriteria() {
      return new Rt.K(this).getSearchCriteria();
    }
    getSettings() {
      return this.setting;
    }
    getTemplateId() {
      return this.data.getTemplateId();
    }
    getTime() {
      return this.data.getTime();
    }
    getTitle() {
      return this.setting?.name || this.data.getTitle();
    }
    getType() {
      return qe.A.ICompositionSection;
    }
    getUid() {
      return this.uid;
    }
    hasDraft() {
      return !1;
    }
    incomplete(Ue) {
      return (0, a.of)(this);
    }
    isDeleted() {
      return this.deleted;
    }
    isDraft() {
      return !this.getLifecycleState();
    }
    isDraftValid() {
      return !0;
    }
    isModified() {
      return this.data.isModified();
    }
    load() {
      return (0, a.of)(this);
    }
    markDeleted() {
      this.deleted = !0;
    }
    restore() {
      this.deleted = !1;
    }
    open(Ue) {
      return (0, a.of)(this);
    }
    registerType(Ue, Me) {}
    unregisterType(Ue) {}
    validate(Ue) {
      return this.setting?.historyPath ? void 0 === this.getComposition().getMany(this.setting?.historyPath).find(Me => Me.validate(Ue).length > 0) : this.data.validate(Ue);
    }
    isEmpty() {
      return this.setting?.historyPath ? this.getComposition().getMany(this.setting?.historyPath).every(Ue => Ue.empty()) : this.data.isEmpty();
    }
    sendUpdatedEvent() {
      this.data.sendUpdatedEvent();
    }
    updatedEvent() {
      return this.data.updatedEvent();
    }
    setLocalValid(Ue) {
      this.localValid = Ue, this.localValid || this.data.setLocalValid(!1);
    }
    getLocalValid() {
      return this.localValid;
    }
    setApproved(Ue) {
      this.approved = Ue;
    }
    getApproved() {
      return this.approved;
    }
    getAppointments() {
      return this.data.getAppointments();
    }
    isValid() {
      return this.validate(!0) && (this.localValid || void 0 === this.localValid);
    }
    prepareTags(Ue) {}
    getMarks() {
      return this.marks;
    }
  }
  var q = i(40187),
    mt = i(21777);
  let ut = (() => {
    class Et {
      constructor(Me) {
        this.entry = Me;
      }
      applyTemplate(Me, Ke) {
        const Ze = [];
        return this.entriesBySettingCode = this.createEntriesMapBySettingCode(), Ke.content.content?.forEach(Ee => {
          const je = this.findSettingByCode(Ee.key);
          if (!je) return;
          const Mt = this.getDestinationEntry(je);
          Mt && Ze.push(Mt.pipe((0, A.b)(Je => {
            this.applyTemplateToEntry(Je, Ke, Me, Ee);
          })));
        }), Ze.length ? (0, m.a)(Ze) : (0, d._)(() => []);
      }
      createTemplate(Me) {
        const Ke = [...this.entry.getChildren(), this.entry.getRoot()].filter(je => je.getLifecycleState() !== pe.u.DELETED && !je.getComposition().isCleared() && !je.getComposition().isDeleted() && !je.getComposition().empty() && (!Me.codeAssignmentSection || je.isValid() && je.getSettings().code === Me.codeAssignmentSection) && (!Me.assignments || je.isValid() && je.getSettings().type === j.y.Instruction)).map(je => {
            const Mt = new Rt.K(je).createTemplate(Me);
            return Mt.content.content.forEach(Je => Je.key = je.getSettings().code), Mt;
          }),
          Ze = [];
        Ke.forEach(je => Ze.push(...je.content.content));
        const Ee = Me.modifiedCode ? Me.modifiedCode : this.entry.getSettings().code;
        return {
          content: {
            designMedicalEntry: this.entry.getSettings().code,
            content: Ze,
            assignments: Me.assignments,
            authorName: this.entry.getRoot().getComposition()?.getComposer()?.getValue()?.name ?? ""
          },
          code: Ee,
          folder: Me.folder,
          name: Me.name,
          common: Me.common,
          statistics: 0,
          uid: (0, I.Z)(),
          type: Et.ENTRY
        };
      }
      getSearchCriteria() {
        return {
          code: this.entry.getSettings().code,
          type: Et.ENTRY
        };
      }
      findSettingByCode(Me) {
        const Ke = this.entry.getSettings().entries?.map(Ee => Ee) || [];
        return [this.entry.getSettings(), ...Ke].find(Ee => Ee.code === Me);
      }
      applyTemplateToEntry(Me, Ke, Ze, Ee) {
        return new Rt.K(Me).applyTemplate({
          ...Ze
        }, {
          content: {
            designMedicalEntry: this.entry.getSettings().code,
            content: [Ee],
            authorName: this.entry.getRoot().getComposition().getComposer()?.getValue()?.name ?? ""
          },
          common: !1,
          code: Me.getSettings().code,
          name: Ke.name,
          uid: Ke.uid,
          statistics: Ke.statistics,
          type: Et.ENTRY
        });
      }
      getDestinationEntry(Me) {
        const Ke = this.entriesBySettingCode?.get(Me.code) ?? [],
          Ze = Me?.max || 1,
          Ee = Ze < 0 || Ze > 1;
        if (0 === Ke.length) return this.entry.addEntity(Me.code);
        if (1 === Ke.length && !Ee) return (0, a.of)(Ke[0]);
        if (Ke.length >= 1 && Ee) {
          const je = Ke.findIndex(Mt => Mt.isEmpty());
          if (-1 !== je) {
            const Mt = (0, a.of)(Ke[je]);
            return Ke.splice(je, 1), Mt;
          }
          return this.entry.addEntity(Me.code);
        }
      }
      createEntriesMapBySettingCode() {
        return [...this.entry.getChildren(), this.entry.getRoot()].reduce((Me, Ke) => {
          const Ze = Ke.getSettings().code;
          return (!Me.has(Ze) || !Array.isArray(Me.get(Ze))) && Me.set(Ze, []), Me.get(Ze)?.push(Ke), Me;
        }, new Map());
      }
    }
    return Et.ENTRY = "ENTRY", Et;
  })();
  const Ct = "ehr:root";
  class Ft {
    constructor(Ue, Me, Ke, Ze, Ee) {
      this.ehr = Ue, this.apis = Me, this.userContext = Ke, this.assignmentEntryFactory = Ze, this.moId = Ee, this.children = [], this.changeStartTimeClass = new te(), this.linkedChildren = void 0, this.shouldHaveReferral057Link = !1, this.linkToRoot = Ue?.getStorage().linkToRoot;
    }
    static mapStatus(Ue) {
      switch (Ue) {
        case pe.u.COMPLETE:
          return mt.j.SIGNED;
        case pe.u.DELETED:
          return mt.j.DELETED;
        default:
          return mt.j.SAVED;
      }
    }
    getSearchCriteria() {
      return new ut(this).getSearchCriteria();
    }
    applyTemplate(Ue, Me) {
      return new ut(this).applyTemplate(Ue, Me).pipe((0, M.w)(Ke => this.addMandatoryEntities().pipe((0, b.U)(() => Ke))));
    }
    createTemplate(Ue) {
      return new ut(this).createTemplate(Ue);
    }
    draftInfo(Ue) {
      this.uid = Ue;
      const Me = this.ehr?.getStorage();
      return Me ? this.apis.ehrApi.getStorage(Me).getDraft(this.uid).pipe((0, b.U)(Ke => Ke ? this.patchDraftSourceType(Ke) : void 0)) : (0, a.of)(void 0);
    }
    open(Ue, Me, Ke) {
      return this.uid = Ue, this.openEntry(Ue).pipe((0, A.b)(Ze => {
        this.root = new Se.U(this, Ze), this.rootDecorated = this.root;
      }), (0, M.w)(() => Me ? (0, a.of)(Me) : new q.y(this).loadSetting()), (0, M.w)(Ze => (this.setting = Ze, this.decorate(this.root).pipe((0, A.b)(Ee => this.rootDecorated = Ee), (0, N.K)(() => (0, a.of)(void 0))))), (0, M.w)(() => this.openChildren(Ke)), (0, A.b)(Ze => {
        this.children = Ze.filter((Ee, je) => Ze.findIndex(Mt => Mt.getUid() === Ee.getUid()) === je);
      }), (0, M.w)(() => this.getEhr().getStorage().local ? this.addMandatoryEntities() : (0, a.of)(null)), (0, M.w)(() => {
        const Ze = this.getSectionSettings().filter(Ee => Ee.type === j.y.Section);
        return 0 === Ze.length ? (0, a.of)(this) : (0, m.a)(Ze.map(Ee => this.getOrAddEntity(Ee.code)));
      }), (0, M.w)(() => this.checkMissingReferralDocuments()), (0, b.U)(() => this));
    }
    shouldHaveReferral057Document() {
      return this.shouldHaveReferral057Link;
    }
    create(Ue, Me, Ke, Ze) {
      this.uid = (0, I.Z)(), this.assignment = Ze, this.context = Me;
      const Ee = new ye.z(this.apis.settingsApi);
      return (Ke ? (0, a.of)(Ke) : Ee.getSetting(Ue)).pipe((0, A.b)(je => this.setting = je), (0, b.U)(() => new n.C(this)), (0, M.w)(je => {
        const Mt = new Se.U(this, je);
        return Mt.create(this.uid, this.setting, Me).pipe((0, M.w)(() => this.decorate(Mt))).pipe((0, A.b)(Je => {
          this.root = Mt, this.rootDecorated = Je;
        })).pipe((0, b.U)(() => this));
      }));
    }
    isModified() {
      return this.rootDecorated.isModified() || this.children.filter(Ue => Ue.isModified()).length > 0;
    }
    getEhrId() {
      return this.ehr.getEhrId();
    }
    getRoot() {
      return this.rootDecorated;
    }
    getChildren() {
      return this.children.filter(Ue => !Ue.isDeleted());
    }
    getDeletedChildren() {
      return this.children.filter(Ue => Ue.isDeleted());
    }
    getMoId() {
      return this.moId;
    }
    draft(Ue, Me) {
      const Ke = this.children.filter(Ee => Ee.getUid() !== this.rootDecorated.getUid() && Ee.getType() !== qe.A.ICompositionSection && !Ee.getComposition().empty() && (Ee.isModified() || !Ee.getLifecycleState())),
        Ze = this.ehr.contribution();
      return (0, a.of)(Ke).pipe((0, M.w)(Ee => {
        const je = Ee.filter(Mt => !Ue || Ue === Mt.getSettings().code).map(Mt => Mt.isDeleted() && Mt.getLifecycleState() !== pe.u.DELETED ? Mt.delete(Ze) : Mt.draft(Me));
        return je.length ? (0, m.a)(je) : (0, a.of)([]);
      }), (0, A.b)(() => this.root.setDraftLinks(Ke.filter(Ee => !Ee.isDeleted()).map(Ee => Ee.getUid()))), (0, M.w)(() => {
        let Ee = Ue === this.rootDecorated.getUid() ? Me : void 0;
        return this.getChildren().find(Mt => Mt.getSettings()?.code === Ue)?.getSettings().type === j.y.Section && (Ee = Me), this.rootDecorated.draft(Ee);
      }), (0, M.w)(() => Ze.commit()), (0, b.U)(() => this));
    }
    presentation() {
      const Ue = this.getChildren(),
        Me = Boolean(this.getSettings() && this.getSettings().entries?.length),
        Ke = [];
      if (Me || Ue.length > 0) Ke.push(...[this.rootDecorated, ...Ue].map(Ze => ({
        uid: Ze.getUid(),
        setting: Ze.getSettings(),
        content: new J().getPresentation(Ze)
      })));else {
        const Ze = this.rootDecorated.getPresentation();
        let Ee = Ze;
        for (; Ee?.children && 1 === Ee.children.length;) Ee = Ee.children[0];
        Ee && Ee.children ? Ee.children.forEach(je => {
          Ke.push({
            uid: this.rootDecorated.getUid(),
            setting: this.rootDecorated.getSettings(),
            content: je
          });
        }) : Ke.push({
          uid: this.rootDecorated.getUid(),
          setting: this.rootDecorated.getSettings(),
          content: Ze
        });
      }
      return {
        ...this.shortPresentation(),
        sections: Ke
      };
    }
    shortPresentation() {
      const Ue = this.rootDecorated.getComposition().getComposer(),
        Me = new le.mS(this.rootDecorated.getComposition().getContext()),
        Ke = this.contextDescription(Me);
      return {
        title: this.getRoot().getTitle(),
        commitDate: this.getCommitTime() || "",
        createdTime: this.getCreatedTime(),
        authorId: Ue?.getValue()?.id ?? "",
        authorName: Ue?.getValue()?.name ?? "",
        organisation: Ke ? Ke.автор_информации().наименование_юридического_лица().getValue() ?? "" : "",
        position: Ke ? Ke.автор_информации().наименование_должности().getValue() ?? "" : "",
        department: Ke ? Ke.автор_информации().наименование_структурного_подразделения().getValue() ?? "" : "",
        sections: []
      };
    }
    sign(Ue) {
      this.updateStartTime();
      const Me = Ue || this.ehr.contribution(),
        Ke = this.children.filter(Ze => Ze.getUid() !== this.rootDecorated.getUid()).filter(Ze => !Ze.getLifecycleState() || Ze.isModified() || Ze.getLifecycleState() !== pe.u.COMPLETE);
      return (0, a.of)(Ke).pipe((0, M.w)(Ze => Ke.length > 0 ? (0, m.a)(Ze.map(Ee => Ee.isDeleted() ? Ee.delete(Me) : Ee.complete(Me))) : (0, a.of)([])), (0, A.b)(() => this.linkNextVersions(Me)), (0, M.w)(() => this.rootDecorated.complete(Me)), (0, M.w)(() => Ue ? (0, a.of)(this) : Me.commit()), (0, b.U)(() => this));
    }
    updateSignedComposition() {
      const Ue = this.ehr.contribution();
      return (0, a.of)([]).pipe((0, M.w)(() => this.rootDecorated.updateCompleted(Ue)), (0, M.w)(() => Ue.updateCommit()));
    }
    delete(Ue) {
      const Me = Ue || this.ehr.contribution(),
        Ke = this.children.filter(Ze => !Ze.getLifecycleState() || Ze.getLifecycleState() !== pe.u.DELETED);
      return (0, a.of)(Ke).pipe((0, M.w)(Ze => Ke.length > 0 ? (0, m.a)(Ze.map(Ee => Ee.delete(Me))) : (0, a.of)([])), (0, M.w)(() => this.rootDecorated.delete(Me)), (0, M.w)(() => Ue ? (0, a.of)(this) : Me.commit()), (0, b.U)(() => this));
    }
    save(Ue) {
      this.updateStartTime();
      const Me = Ue || this.ehr.contribution();
      Ue || Me.setSkipValidation(!0);
      const Ke = this.children.filter(Ze => Ze.getUid() !== this.rootDecorated.getUid()).filter(Ze => Ze.isModified() || Ze.getMarks().hasMark(be.T.FORCE_SIGN_COMPOSITION) || !Ze.asType(qe.A.IAssignmentEntry) && Ze.getLifecycleState() === pe.u.COMPLETE && !Ze.getSettings().disableToUnsign);
      return this.rootDecorated.getLifecycleState() === pe.u.INCOMPLETE && this.getRoot().hasDraft() && this.root.linkChildCompositions([]), (0, a.of)(Ke).pipe((0, M.w)(Ze => Ke.length > 0 ? (0, m.a)(Ze.map(Ee => Ee.isDeleted() ? Ee.delete(Me) : Ee.incomplete(Me))) : (0, a.of)([])), (0, A.b)(() => this.linkNextVersions(Me)), (0, M.w)(() => this.rootDecorated.incomplete(Me)), (0, M.w)(() => Ue ? (0, a.of)(this) : Me.commit()), (0, b.U)(() => this));
    }
    isValid() {
      return this.root.isValid() && 0 === this.getChildren().filter(Ue => !Ue.isEmpty() && !Ue.isValid()).length;
    }
    isEmpty() {
      return this.root.isEmpty() && !this.getChildren().some(Ue => !Ue.isEmpty());
    }
    getChangeStartTimeClass() {
      return this.changeStartTimeClass;
    }
    updateStartTime() {
      const Ue = this.getChangeStartTimeClass().getStartTime();
      if (!Ue) return;
      const Me = this.getRoot().getComposition();
      Me.getContext().getStartTime()?.setValue(Ue), Me.save(), this.getChildren().forEach(Ke => {
        if (!Ke.asType("IAssignmentEntry")) {
          const Ee = Ke.getComposition();
          Ee.getContext().getStartTime()?.setValue(Ue), Ee.save();
        }
      });
    }
    linkNextVersions(Ue) {
      if (!this.getSettings().skipChildSectionLinks && this.getChildren().length > 0) {
        const Me = this.getChildren().map(Ke => Ue.has(Ke) ? ae.B.nextVersion(Ke.getUid()) : Ke.getUid());
        this.root.linkChildCompositions(Me);
      }
    }
    status() {
      if (this.rootDecorated?.isDeleted()) return mt.j.DELETED;
      const Ue = this.rootDecorated?.getLifecycleState();
      return Ue ? Ft.mapStatus(Ue) : mt.j.INIT;
    }
    getCommitTime() {
      return this.root.getCommitTime();
    }
    getCreatedTime() {
      return this.root.getTime();
    }
    getUid() {
      return this.uid;
    }
    getSettings() {
      return this.setting;
    }
    getEntrySections() {
      const Ue = [...(this.getSettings().entries || [])];
      return Ue.length || Ue.push(this.getRoot().getSettings()), Ue;
    }
    addEntity(Ue, Me, Ke) {
      const Ze = this.setting.entries?.map(je => je).find(je => je.code === Ue);
      if (!Ze) return (0, d._)(() => new Error(`Unable to find section with code '${Ue}' for medical entity '${this.setting.code}'`));
      const Ee = Me ?? (0, I.Z)();
      return Ze.type === j.y.Section ? new st(this, this.rootDecorated).create(Ee, Ze).pipe((0, A.b)(je => {
        this.children.push(je);
      })) : Ze.templateId === this.rootDecorated.getTemplateId() && Ze.type !== j.y.Data ? (0, a.of)(this.rootDecorated) : this.createEntityComposition(Ee, Ze, Ke).pipe((0, M.w)(je => this.decorate(je)), (0, A.b)(je => {
        this.children.push(je);
      }));
    }
    deleteEntity(Ue) {
      const Me = this.getChildren().find(Ke => this.compareUids(Ke, Ue));
      if (!Me) throw new Error(`Unable to find entity with uid ${Ue} to delete.`);
      Me.markDeleted();
    }
    getOrAddEntity(Ue) {
      if (this.root.getSettings().code === Ue) return (0, a.of)(this.root);
      const Me = this.getChildren().find(Ke => Ke.getSettings().code === Ue);
      return Me ? (0, a.of)(Me) : this.addEntity(Ue);
    }
    getApis() {
      return this.apis;
    }
    getUserContext() {
      return this.userContext;
    }
    createEntityComposition(Ue, Me, Ke) {
      return new n.C(this).create(Ue, Me, Ke);
    }
    decorate(Ue) {
      let Me = Ue;
      if (Ue.getSettings()?.type === j.y.Instruction) return new fe.s(this.getApis().settingsApi).getSetting(Ue.getTemplateId()).pipe((0, b.U)(Ze => this.assignmentEntryFactory.create(Ze, Me)), (0, M.w)(Ze => Ze.load().pipe((0, N.K)(() => (0, a.of)(Ze)))));
      const Ke = Ue.getComposition().find(new t.XA(t.B8.ACTION))[0];
      return Ke && (Me = new O.i(this, Ke, Me)), Me.load().pipe((0, b.U)(() => Me), (0, N.K)(() => (0, a.of)(Ue)));
    }
    api() {
      return this.apis.ehrApi.getStorage(this.getEhr().getStorage());
    }
    aql(Ue) {
      return this.api().aql(Ue);
    }
    openEntry(Ue) {
      return new n.C(this).open(Ue);
    }
    findLinkedChildren() {
      return this.linkToRoot ? this.getLinkedChildren(`${this.linkToRoot}/${this.uid}`).pipe((0, A.b)(Ue => {
        this.linkedChildren = Ue;
      })) : (0, a.of)([]);
    }
    getLinkedChildren(Ue) {
      const Me = `select c/uid/value as uid, c/name/value as name, c/archetype_details/template_id/value as templateId from ehr e[ehr_id/value='${this.ehr.getEhrId()}'] contains composition c where c/links/target/value = '${Ue}'`;
      return this.aql(Me).pipe((0, b.U)(Ke => (Ke?.resultSet || []).map(Ze => Ze).filter(Ze => !Ze.uid.startsWith(this.uid))));
    }
    openChildren(Ue) {
      return this.linkToRoot && !this.rootDecorated.isDraft() ? this.findLinkedChildren().pipe((0, M.w)(Me => {
        const Ke = Me.filter(Ze => !Ue || 0 === Ue.length || Ue.indexOf(ae.B.getUid(Ze.uid)) >= 0).map(Ze => this.openEntry(Ze.uid).pipe((0, M.w)(Ee => this.decorate(Ee))));
        return Ke.length > 0 ? (0, m.a)(Ke) : (0, a.of)([]);
      }), (0, b.U)(Me => this.removeReferralDocuments(Me)), (0, M.w)(Me => this.rootDecorated.hasDraft() ? this.getDraftLinks().pipe((0, b.U)(Ke => {
        const Ze = Me.filter(Ee => !Ke.some(je => this.compareUids(je.getUid(), Ee.getUid())));
        return Ke.concat(Ze);
      })) : (0, a.of)(Me))) : this.getDraftLinks();
    }
    getDraftLinks() {
      return (0, a.of)(this.root.getDraftLinks()).pipe((0, M.w)(Ue => Ue.length > 0 ? (0, m.a)(Ue.map(Me => this.openEntry(Me).pipe((0, M.w)(Ke => this.decorate(Ke)), (0, N.K)(Ke => (console.error(Ke), (0, a.of)(void 0)))))) : (0, a.of)([])), (0, b.U)(Ue => Ue.filter(Boolean)));
    }
    getInfo() {
      const Ue = new le.mS(this.rootDecorated.getComposition().getContext()),
        Me = this.contextDescription(Ue),
        Ke = this.ehr?.getStorage();
      return {
        authorId: this.rootDecorated.getComposition().getComposer()?.getValue().id ?? "",
        authorName: this.rootDecorated.getComposition().getComposer()?.getValue().name ?? "",
        name: this.rootDecorated.getTitle(),
        timeCommitted: this.rootDecorated.getCommitTime(),
        startTime: this.rootDecorated.getTime(),
        status: this.status(),
        templateId: this.rootDecorated.getTemplateId(),
        typeId: this.setting?.typeId,
        uid: this.uid,
        careCaseId: this.context?.careCaseId?.id || (Me ? Me.ид_события().getIdentifier()?.id : void 0),
        storage: {
          code: Ke?.code || "",
          local: Ke?.local
        },
        links: this.getRoot().getComposition().getLinks().map(Ze => Ze.getValue()),
        workplaceId: this.getWorkplaceId()
      };
    }
    populate(Ue) {
      const Me = Ue.map(Ke => (Ke.getSettings().code === this.getSettings().code ? (0, a.of)(this.rootDecorated) : this.addEntity(Ke.getSettings().code)).pipe((0, M.w)(Ee => Ee.applyTemplate({
        mode: E.m.Clean
      }, Ke.createTemplate({
        name: "",
        common: !1
      })).pipe((0, b.U)(je => (Ee.setLocalValid(Ke.isValid()), je))))));
      return 0 === Me.length ? (0, a.of)(this) : (0, m.a)(Me).pipe((0, b.U)(() => this));
    }
    copySections(Ue) {
      const Me = [];
      return Ue.getSettings().entries?.map(Ze => Ze).forEach(Ze => {
        Me.push(Ze);
      }), Me.push(Ue.getSettings()), {
        sections: [this.rootDecorated, ...this.getChildren().filter(Ze => !Ze.getComposition().empty())].map(Ze => Ze.getSettings()).filter(Ze => Me.filter(Ee => Ee.code === Ze.code && Ee.templateId === Ze.templateId))
      };
    }
    copy(Ue, Me, Ke = !1) {
      const Ze = [];
      return Ze.push(...[...this.getChildren(), this.root].filter(Ee => Ue.find(je => Ke ? je === Ee.getUid() : je === Ee.getSettings().code))), Me.populate(Ze);
    }
    revertChanges(Ue) {
      const Me = [...this.children, this.root].map(Ke => Ke.revertChanges());
      return (0, m.a)(Me).pipe((0, M.w)(() => this.isEmpty() && (this.root.markDeleted(), Ue) ? this.root.revertChanges(Ue) : (0, a.of)(this)), (0, b.U)(() => this));
    }
    hasDrafts() {
      return void 0 !== [...this.children, this.root].find(Ue => Ue.hasDraft());
    }
    getEhr() {
      return this.ehr;
    }
    getContext() {
      if (!this.root) return this.context;
      const Ue = new le.mS(this.root.getComposition().getContext()),
        Me = this.contextDescription(Ue),
        Ke = {
          id: void 0
        },
        Ze = Me ? Me.ид_события().getIdentifier() : Ke;
      return {
        careCaseId: Ze.id ? Ze : this.context?.careCaseId || Ke
      };
    }
    getEntry(Ue) {
      return this.uid === Ue ? this.getRoot() : this.children.find(Me => ae.B.getUid(Me.getUid()) === Ue);
    }
    attachComposition(Ue) {
      if (this.getChildren().find(Ke => this.compareUids(Ke, Ue) || Ke === Ue)) return;
      const Me = this.children.find(Ke => Ke.isDeleted() && (this.compareUids(Ke, Ue) || Ke === Ue));
      Me ? Me.restore() : (Ue.attach(this), this.children.push(Ue));
    }
    getHistory(Ue) {
      return new y().getHistory(Ue);
    }
    patchAssignment(Ue) {
      return this.openEntry(Ue).pipe((0, M.w)(Me => this.decorate(Me).pipe((0, N.K)(() => (0, a.of)(null)))), (0, b.U)(Me => !!Me && (this.children = this.children.map(Ke => this.compareUids(Ke, Me) ? Me : Ke), !0)), (0, N.K)(() => (0, a.of)(!1)));
    }
    getWorkplaceId() {
      const Ue = new le.mS(this.getRoot().getComposition().getContext()),
        Me = this.contextDescription(Ue);
      return Me ? Me.автор_информации().идентификатор_исполнения_должности_медработника().getIdentifier().assigner : "";
    }
    checkMissingReferralDocuments() {
      try {
        return this.ehr && "y057AutocompleteAfterSign" === this.setting.autocompleteAfterSign && this.getRoot().getLifecycleState() !== pe.u.INCOMPLETE ? this.ehr.view("Referral057View", {
          ehrId: this.getEhrId(),
          compositionUids: [this.uid]
        }).pipe((0, N.K)(() => (0, a.of)(null)), (0, b.U)(Ue => !(!Ue || !Object.keys(Ue).length) && function Y(Et, Ue) {
          return !!Et && (!Et.assignerWorkplaceId || !Ue || Et.assignerWorkplaceId === Ue.getWorkplaceId()) && Et.hasIndication && !Et.documents?.length;
        }(Ue[this.uid], this.userContext)), (0, A.b)(Ue => {
          this.shouldHaveReferral057Link = Ue;
        })) : (this.shouldHaveReferral057Link = !1, (0, a.of)(!1));
      } catch {
        return this.shouldHaveReferral057Link = !1, (0, a.of)(!1);
      }
    }
    compareUids(Ue, Me) {
      return ("string" == typeof Ue ? Ue : Ue.getUid()).split("::")[0] === ("string" == typeof Me ? Me : Me.getUid()).split("::")[0];
    }
    getSectionSettings() {
      return (this.setting.entries || []).map(Ue => Ue);
    }
    contextDescription(Ue) {
      let Me;
      try {
        Me = Ue.подробности_контекста();
      } catch {
        console.error("В композиции отсутствуют подробности_контекста");
      }
      return Me;
    }
    patchDraftSourceType(Ue) {
      const Me = Ue.draftComposition.info;
      return Me.links = this.getLinks(Ue), Me.sourceType || (Me.sourceType = "hospital"), Me;
    }
    removeReferralDocuments(Ue) {
      return Ue.length <= 1 ? Ue : Ue.filter(Me => {
        const Ke = !!Me.getComposition().getLinks().find(Ee => "EHR-DB" === Ee.getValue().type && Ee.getValue().target === `${this.linkToRoot}/${this.uid}`),
          Ze = !!Me.getComposition().getLinks().find(Ee => "ehr:root" === Ee.getValue().target);
        return !(Ke && Ze);
      });
    }
    getLinks(Ue) {
      try {
        const Me = (0, e.j)({
          json: Ue.draftComposition,
          path: "$.._link"
        })[0];
        return Array.isArray(Me) ? Me.reduce((Ke, Ze) => [...Ke, {
          type: Ze["|type"],
          target: Ze["|target"],
          meaning: Ze["|meaning"]
        }], []) : void 0;
      } catch (Me) {
        console.error(Me);
      }
    }
    addMandatoryEntities() {
      const Ue = this.getSectionSettings().filter(Me => Me.mandatory);
      return Ue.length ? (0, m.a)(Ue.map(Me => this.getOrAddEntity(Me.code))).pipe((0, A.b)(Me => Me.forEach(Ke => {
        const Ze = Ke.isDraftValid();
        Ke.setLocalValid(void 0 === Ze ? !Ke.isEmpty() : Ze);
      }))) : (0, a.of)([]);
    }
  }
});
