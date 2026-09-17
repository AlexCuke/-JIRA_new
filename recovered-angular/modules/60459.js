// Extracted from main; webpack module 60459. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    h: () => _n
  });
  var t = i(24810),
    e = i(28315),
    a = i(84707),
    m = i(80953),
    d = i(40833);
  function M(it, _e) {
    (0, d.Z)(2, arguments);
    var gt = (0, m.Z)(it),
      ni = (0, m.Z)(_e);
    return gt.getTime() < ni.getTime();
  }
  var b = i(39646),
    A = i(63900),
    N = i(70262),
    I = i(18505),
    O = i(54004),
    L = i(82562),
    C = i(72757),
    v = i(48763),
    f = i(71822),
    E = i(39841),
    h = i(4128),
    x = i(46590),
    u = i(66395),
    T = i(666),
    R = i(80675),
    B = i(24441),
    y = i(21777),
    j = i(13608),
    W = i(80862),
    F = i(91487),
    Le = i(98129);
  class ke extends Le.U {
    constructor(_e) {
      super("assignment2", _e), this.sections = new F.g(_e);
    }
    getSettings(_e) {
      return this.sections.init().pipe((0, A.w)(() => super.getSettings(_e))).pipe((0, O.U)(gt => gt.map(ni => this.mapSetting(ni))));
    }
    getSetting(_e) {
      return this.sections.init().pipe((0, A.w)(() => super.getSetting(_e))).pipe((0, O.U)(gt => this.mapSetting(gt)));
    }
    mapSetting(_e) {
      if (!_e || _e.assignmentConfig) return _e;
      if (_e.executeCommandEntry || _e.executeCommandEntryCode) {
        if (_e.executeCommandEntry) {
          "string" == typeof _e.executeCommandEntry.entries && (_e.executeCommandEntry.entries = [_e.executeCommandEntry.entries]), _e.executeCommandEntry.entries = this.sections.mapEntries(_e.executeCommandEntry.entries), _e.executeCommandEntry.code || (_e.executeCommandEntry.code = `${_e.code}_execute`);
          const ni = _e.executeCommandEntry.entries;
          if (ni && ni.length > 0 && (_e.type === j.v.Consultation || _e.type === j.v.Operation || _e.type === j.v.Instrumental || _e.type === j.v.Lab) && !ni.map(So => So).find(So => So.templateId === _e.executeCommandEntry?.templateId)) {
            const So = _e.executeCommandEntry?.templateId;
            _e.executeCommandEntry.entries = [{
              code: _e.executeCommandEntry?.code ? _e.executeCommandEntry?.code : So,
              type: W.y.Action,
              name: _e.executeCommandEntry?.name,
              templateId: So,
              min: 1,
              max: 1,
              order: -1,
              autocompleteBeforeOpen: _e.executeCommandEntry?.autocompleteBeforeOpen || void 0,
              hidden: _e.hiddenAction || _e.executeCommandEntry?.hiddenAction,
              tags: _e.executeCommandEntry.tags ?? void 0
            }, ...ni];
          }
        }
        _e.assignmentConfig = {
          EXECUTING: {
            ExecuteCommand: {
              medicalEntry: _e.executeCommandEntry,
              medicalEntryCode: _e.executeCommandEntryCode
            }
          }
        };
        const gt = this.getDescribeCommandEntry(_e);
        gt && (_e.assignmentConfig = {
          ..._e.assignmentConfig,
          DESCRIBING: {
            ExecuteCommand: {
              medicalEntry: gt.medicalEntry
            }
          }
        }, _e.describeCommandEntry = void 0), _e.executeCommandEntry = void 0, _e.executeCommandEntryCode = void 0;
      }
      return _e;
    }
    getDescribeCommandEntry(_e) {
      if (_e.describeCommandEntry) {
        const gt = {
            code: _e.describeCommandEntry?.code || `${_e.code}_execute`,
            type: W.y.Action,
            name: _e.describeCommandEntry?.name,
            templateId: _e.describeCommandEntry.templateId,
            min: 1,
            max: 1,
            order: -1,
            autocompleteBeforeOpen: _e.describeCommandEntry?.autocompleteBeforeOpen || void 0,
            hidden: _e.describeCommandEntry.hiddenAction || void 0,
            tags: _e.describeCommandEntry?.tags || void 0
          },
          ni = this.sections.mapEntries(_e.describeCommandEntry.entries) || [];
        return {
          medicalEntry: {
            ..._e.describeCommandEntry,
            entries: [gt, ...ni]
          }
        };
      }
    }
  }
  var J = i(89704);
  function fe(it, _e) {
    return !(_e.visualisationFlags && !_e.visualisationFlags.includes("all")) || _e.visualisationFlags.includes(it);
  }
  var ye = (() => {
    return (it = ye || (ye = {}))[it.Business = 0] = "Business", it[it.Entry = 1] = "Entry", ye;
    var it;
  })();
  class ae {
    constructor(_e, gt, ni) {
      this.params = _e, this.runCb = gt, this.assignmentEntry = ni, this.type = ye.Business, this.behaviour = _e.behaviour, this.code = _e.code;
    }
    get hidden() {
      return !!this.params.hidden;
    }
    showInInterface(_e) {
      return fe(_e, this.params);
    }
    getIcon() {
      return this.params.to.length > 0 ? this.params.to[0] : void 0;
    }
    getName() {
      return this.params.name;
    }
    getIconSettings() {
      return this.params.iconSettings;
    }
    get entryStatus() {
      return this.assignmentEntry.getAssignmentState().code;
    }
    run() {
      return this.runCb().pipe((0, A.w)(() => this.assignmentEntry.updateBusinessState())).pipe((0, O.U)(() => this));
    }
  }
  var Y = i(71530),
    G = i(41424),
    te = i(48382),
    pe = i(98179);
  function be(it) {
    const _e = it.getMedicalEntry(),
      gt = _e.status(),
      ni = it.getMedicalEntry().getEhr().contribution();
    return (0, te.s)(() => _e.status() === y.j.SIGNED, _e.save(ni), (0, b.of)(void 0)).pipe((0, I.b)(() => _e.deleteEntity(it.getUid())), (0, A.w)(() => it.getMarks().hasMark(T.T.DELETE_ASSIGNMENT_FROM_EDITING_MODE) ? (0, b.of)(void 0) : _e.getRoot() instanceof pe.i && gt === y.j.SIGNED ? _e.sign() : _e.save()), (0, I.b)(() => {
      it.getMarks().unmark(T.T.DELETE_ASSIGNMENT_FROM_EDITING_MODE);
    }), (0, O.U)(() => it));
  }
  function le(it) {
    const _e = it.getMedicalEntry(),
      gt = it.getMedicalEntry().getEhr().contribution();
    return (0, te.s)(() => _e.status() === y.j.SIGNED, _e.save(gt), (0, b.of)(void 0)).pipe((0, A.w)(() => it.incomplete(gt))).pipe((0, A.w)(() => gt.commit())).pipe((0, O.U)(() => it));
  }
  function n(it, _e) {
    const gt = _e.EXECUTING.ExecuteCommand.medicalEntryCode ?? it.getComposition().get(_e.EXECUTING.typeAqlPath)?.getCode() ?? "",
      ni = {
        ..._e.EXECUTING.ExecuteCommand,
        medicalEntryCode: gt
      },
      So = {
        ..._e.EXECUTING.SaveCommand,
        stateValue: _e.EXECUTING.ExecuteCommand.stateValue,
        stepCode: _e.EXECUTING.ExecuteCommand.stepCode,
        medicalEntryCode: gt
      },
      Er = it.getLastAction();
    return {
      executeParams: ni,
      saveParams: So,
      isCreate: v.B.getUid(Er.uid) === v.B.getUid(Er.instructionId),
      medicalEntryCode: gt
    };
  }
  const Se = it => ({
    code: it.ASSIGNED.code,
    name: it.ASSIGNED.name,
    matchState: (_e, gt) => gt === G.DN.ASSIGNED || void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() && (_e.stateValue === f.$W[f.$W.planned] || _e.stateValue === f.$W[f.$W.initial]),
    getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.EditCommand, () => le(_e)), _e.assignmentCommand(it.ASSIGNED.DeleteCommand, () => be(_e)), _e.assignmentCommand(it.ASSIGNED.CancellingCommand, () => _e.getService().cancelling()), _e.assignmentCommand(it.ASSIGNED.StartCommand, () => _e.getService().executing())]
  });
  function qe(it, _e, gt) {
    if (gt) return gt.find(ni => Number(ni.stateCode) === it && ni.lifecycleState === _e.toLowerCase());
  }
  const Rt = it => ({
    code: it.CANCELLED.code,
    name: it.CANCELLED.name,
    matchState: (_e, gt, ni) => _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() && _e.stateValue === f.$W[f.$W.cancelled] || gt === it.CANCELLED.code || !!qe(f.$W.cancelled, L.u.COMPLETE, ni?.getAssignmentActions()),
    getNextActions: _e => [_e.assignmentCommand(it.CANCELLED.DeprecateCancelledCommand, () => {
      const gt = _e.getLastAction();
      return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.delete()), (0, O.U)(() => _e));
    })]
  });
  var We = i(9950);
  function Re(it) {
    const _e = it.getMedicalEntry();
    return it.getWorkplaceId() === _e.getUserContext().getWorkplaceId();
  }
  const st = it => ({
      code: it.CANCELLING.code,
      name: it.CANCELLING.name,
      matchState: (_e, gt) => gt === it.CANCELLING.code && _e.stateValue === f.$W[f.$W.planned],
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLING.UndoCancellingCommand, () => _e.getService().rollbackCancelling()), _e.entryCommand(it.CANCELLING.CancelCommand, gt => gt.sign().pipe((0, A.w)(() => {
        const ni = _e.getMedicalEntry();
        return ni.getRoot() instanceof We.U && Re(_e) && ni.status() === y.j.SIGNED ? ni.save().pipe((0, O.U)(() => gt)) : (0, b.of)(gt);
      })))]
    }),
    q = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt, ni) => _e.stateValue === f.$W[f.$W.completed] && void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() || gt === it.COMPLETED.code || !!qe(f.$W.completed, L.u.COMPLETE, ni?.getAssignmentActions()),
      getNextActions: _e => [_e.assignmentCommand(it.COMPLETED.EditCompletedCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.save())).pipe((0, O.U)(() => _e));
      }), _e.assignmentCommand(it.COMPLETED.DeprecateCompletedCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.save())).pipe((0, O.U)(() => _e));
      })]
    }),
    mt = it => ({
      code: it.CREATED.code,
      name: it.CREATED.name,
      matchState: (_e, gt) => gt === G.DN.CREATED || void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() && _e.stateValue === f.$W[f.$W.planned],
      getNextActions: _e => [_e.assignmentCommand(it.CREATED.EditCommand, () => (0, b.of)(_e)), _e.assignmentCommand(it.CREATED.DeleteCommand, () => be(_e)), _e.assignmentCommand(it.CREATED.CancellingCommand, () => _e.getService().cancelling())]
    }),
    ut = it => ({
      code: it.DELETED.code,
      name: it.DELETED.name,
      matchState: _e => _e.lifecycleState === L.u.DELETED,
      getNextActions: () => []
    }),
    Ct = it => ({
      code: it.EDITING.code,
      name: it.EDITING.name,
      matchState: (_e, gt) => void 0 !== gt && gt !== it.CREATED.code && void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() && _e.stateValue === f.$W[f.$W.planned],
      getNextActions: _e => [_e.assignmentCommand(it.EDITING.SaveCommand, () => _e.getMedicalEntry().save().pipe((0, O.U)(() => _e))), _e.assignmentCommand(it.EDITING.EditCommand, () => (0, b.of)(_e)), _e.assignmentCommand(it.EDITING.DeleteCommand, () => _e.getMedicalEntry().delete().pipe((0, O.U)(() => _e))), _e.assignmentCommand(it.EDITING.AssignCommand, () => _e.getMedicalEntry().sign().pipe((0, O.U)(() => _e)))]
    });
  function Ft(it, _e) {
    const ni = [..._e];
    return it.getLastAction().lifecycleState === L.u.INCOMPLETE.toLowerCase() ? ni : ni.filter(So => So.code !== G.CO.EXECUTING.DeleteResultDocumentCommand.code);
  }
  const Et = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => _e.stateValue === f.$W[f.$W.active] || _e.stateValue === f.$W[f.$W.completed] && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() || gt === it.EXECUTING.code,
      getNextActions: _e => {
        const gt = _e.getLastAction(),
          ni = v.B.getUid(gt.uid) === v.B.getUid(gt.instructionId),
          So = [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, () => ni ? _e.getService().rollbackExecuting().pipe((0, A.w)(() => _e.clearTemporaryMedicalEntries())) : (0, b.of)(void 0)), _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(Er => Er.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(it.EXECUTING.SaveCommand, Er => Er.save()), _e.entryCommand(it.EXECUTING.ExecuteCommand, Er => Er.save())].filter(Er => void 0 !== Er);
        return Ft(_e, So);
      }
    }),
    Ue = it => ({
      code: "INIT",
      name: it.INIT.name,
      getNextActions: _e => [_e.assignmentCommand(it.INIT.DeleteCommand, () => (_e.getMedicalEntry().deleteEntity(_e.getAssignmentUid()), (0, b.of)(_e))), _e.assignmentCommand(it.INIT.EditDraftCommand, () => (0, b.of)(_e))],
      matchState: () => !0
    });
  var Me = i(62843);
  var Ee = i(93947);
  class je {
    constructor(_e, gt) {
      this.cancellationEntry = _e, this.forDeletion = gt;
    }
    createContribution() {
      const _e = this.cancellationEntry.getEhr().contribution(),
        gt = this.getCompostionsForDelete(this.forDeletion || []);
      return (0, h.D)(gt.map(ni => this.createContributionItem(ni, _e))).pipe((0, O.U)(() => _e), (0, x.d)(_e));
    }
    createContributionItem(_e, gt) {
      const ni = new Ee.C(this.cancellationEntry.getRoot().getMedicalEntry());
      return ni.open(_e.uid).pipe((0, A.w)(() => ni.delete(gt)));
    }
    getCompostionsForDelete(_e) {
      return _e.reduce((ni, So) => (So.children && So.children.length ? ni.push(So, ...So.children) : ni.push(So), ni), []);
    }
  }
  var Mt = i(86134);
  const Je = {
      InitCommand: {
        name: "Создание обращения",
        stateValue: f.$W.planned,
        stepCode: "at0002",
        medicalEntryCode: "carecase_admission",
        code: "InitCommand",
        behaviour: Mt.k.PrimaryScenario,
        to: ["ADMISSION"]
      },
      ADMISSION: {
        code: "ADMISSION",
        name: "В приемном отделении",
        HospitalizeCommand: {
          name: "Госпитализировать",
          medicalEntryCode: "carecase_hospitalize",
          stateValue: f.$W.active,
          stepCode: "at0010",
          code: "HospitalizeCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["HOSPITALIZED"]
        },
        MoveToDepartmentCommand: {
          name: "Перевести в отделение",
          code: "MoveToDepartmentCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["ADMISSION"]
        },
        DeclineCommand: {
          name: "Отказать в госпитализации",
          medicalEntryCode: "carecase_decline",
          stateValue: f.$W.cancelled,
          stepCode: "at0014",
          code: "DeclineCommand",
          behaviour: Mt.k.Danger,
          to: ["DECLINED"]
        },
        CancellationCommand: {
          name: "Аннулировать",
          medicalEntryCode: "carecase_cancellation",
          stateValue: f.$W.aborted,
          stepCode: "at0015",
          code: "CancellationCommand",
          behaviour: Mt.k.Danger,
          to: ["CANCELLED"]
        }
      },
      DECLINED: {
        code: "DECLINED",
        name: "Отказано в госпитализации",
        CancelDeclineCommand: {
          name: "Отменить отказ в госпитализации",
          medicalEntryCode: "carecase_cancel_decline",
          stateValue: f.$W.planned,
          stepCode: "at0002",
          code: "CancelDeclineCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["ADMISSION"]
        }
      },
      HOSPITALIZED: {
        CancelCommand: {
          name: "Отменить госпитализацию",
          medicalEntryCode: "carecase_hospitalize_cancel",
          stateValue: f.$W.planned,
          stepCode: "at0002",
          code: "CancelCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["ADMISSION"]
        },
        DischargingCommand: {
          name: "Подготовить к выписке",
          code: "DischargingCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["DISCHARGING"]
        },
        code: "HOSPITALIZED",
        name: "Пациент госпитализирован"
      },
      DISCHARGING: {
        code: "DISCHARGING",
        name: "Подготовка к выписке",
        CancelCommand: {
          name: "Отменить госпитализацию",
          medicalEntryCode: "carecase_hospitalize_cancel",
          stateValue: f.$W.active,
          stepCode: "at0002",
          code: "CancelCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["ADMISSION"]
        },
        CancelDischargingCommand: {
          name: "Отменить выписку",
          code: "CancelDischargingCommand",
          behaviour: Mt.k.Danger,
          to: ["HOSPITALIZED"]
        },
        DischargeCommand: {
          name: "Выписать пациента",
          medicalEntryCode: "carecase_discharge",
          stateValue: f.$W.completed,
          stepCode: "at0013",
          code: "DischargeCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["DISCHARGED"]
        }
      },
      DISCHARGED: {
        code: "DISCHARGED",
        name: "Пациент выписан",
        CancelDischargeCommand: {
          name: "Отменить выписку",
          medicalEntryCode: "carecase_discharge_cancel",
          stateValue: f.$W.active,
          stepCode: "at0010",
          code: "CancelDischargeCommand",
          behaviour: Mt.k.Danger,
          to: ["HOSPITALIZED"]
        }
      },
      CANCELLED: {
        code: "CANCELLED",
        name: "Обращение аннулировано",
        ReversalCancelledCommand: {
          name: "Восстановить",
          medicalEntryCode: "t_treatment_cancellation_reversal",
          stateValue: f.$W.planned,
          stepCode: "at0002",
          code: "ReversalCancelledCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["ADMISSION"]
        }
      }
    },
    Xt = it => ({
      code: it.ADMISSION.code,
      name: it.ADMISSION.name,
      matchState: _e => void 0 !== _e.lifecycleState && _e.stateValue === f.$W[f.$W.planned] && _e.stepCode === Je.InitCommand.stepCode,
      getNextActions: _e => [_e.entryCommand(it.ADMISSION.HospitalizeCommand, gt => gt.sign()), _e.entryCommand(it.ADMISSION.DeclineCommand, gt => gt.sign()), _e.entryCommand(it.ADMISSION.CancellationCommand, gt => function Ze(it, _e) {
        const gt = it.getEhr(),
          ni = gt.getEhrId();
        return gt.view("MedicalCardCancellationView", {
          ehrId: ni,
          careCaseId: _e
        });
      }(gt.getRoot().getMedicalEntry(), gt.getContext().careCaseId.id).pipe((0, A.w)(ni => (ni.medicalEntriesBlockedCancellation || []).length > 0 ? (0, Me._)(() => new Error("Cancellation blocked")) : new je(gt, ni.medicalEntriesForDeletion).createContribution().pipe((0, A.w)(Er => gt.sign(Er).pipe((0, A.w)(() => Er.commit()), (0, O.U)(() => gt))))))), _e.assignmentCommand(it.ADMISSION.MoveToDepartmentCommand, gt => gt ? _e.moveToAdmissionDepartment(gt) : (0, b.of)(_e))]
    }),
    Nn = it => ({
      code: it.HOSPITALIZED.code,
      name: it.HOSPITALIZED.name,
      matchState: _e => void 0 !== _e.lifecycleState && _e.stepCode === Je.ADMISSION.HospitalizeCommand.stepCode && _e.stateValue === f.$W[f.$W.active] && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase(),
      getNextActions: _e => [_e.entryCommand(it.HOSPITALIZED.CancelCommand, gt => gt.sign()), _e.assignmentCommand(it.HOSPITALIZED.DischargingCommand, () => _e.startDischarging())]
    }),
    Pi = it => ({
      code: it.DISCHARGING.code,
      name: it.DISCHARGING.name,
      matchState: (_e, gt) => gt === it.DISCHARGING.code || void 0 !== _e.lifecycleState && _e.stateValue === f.$W[f.$W.completed] && _e.stepCode === Je.ADMISSION.HospitalizeCommand.stepCode && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase(),
      getNextActions: _e => [_e.assignmentCommand(it.DISCHARGING.CancelDischargingCommand, () => _e.cancelDischarging()), _e.entryCommand(it.DISCHARGING.CancelCommand, gt => gt.sign()), _e.entryCommand(it.DISCHARGING.DischargeCommand, gt => gt.sign())]
    }),
    Ii = it => ({
      code: it.DISCHARGED.code,
      name: it.DISCHARGED.name,
      matchState: _e => void 0 !== _e.lifecycleState && _e.stateValue === f.$W[f.$W.completed] && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase(),
      getNextActions: _e => [_e.entryCommand(it.DISCHARGED.CancelDischargeCommand, gt => gt.sign())]
    }),
    yi = it => ({
      code: it.DECLINED.code,
      name: it.DECLINED.name,
      matchState: _e => void 0 !== _e.lifecycleState && _e.stateValue === f.$W[f.$W.cancelled] && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase(),
      getNextActions: _e => [_e.entryCommand(it.DECLINED.CancelDeclineCommand, gt => gt.sign())]
    }),
    co = it => ({
      code: it.DECLINED.code,
      name: it.DECLINED.name,
      matchState: _e => void 0 !== _e.lifecycleState && _e.stateValue === f.$W[f.$W.aborted] && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase(),
      getNextActions: _e => [_e.entryCommand(it.CANCELLED.ReversalCancelledCommand, gt => gt.sign())]
    }),
    Jo = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stepCode: "at5555"
      },
      ASSIGNED: {
        ...G.CO.ASSIGNED,
        StartCommand: {
          ...G.CO.ASSIGNED.StartCommand,
          hidden: !0
        },
        CancellingCommand: {
          ...G.CO.ASSIGNED.CancellingCommand,
          hidden: !0
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        consultationAqlPath: "запрос_на_консультацию.запрос.назначение",
        ExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          stepCode: "at8888",
          findStepCodes: ["at7777"],
          reuseMedicalEntry: !0
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        code: "CANCELLING",
        name: "Отменяется",
        CancelCommand: {
          ...G.CO.CANCELLING.CancelCommand,
          code: "CancelCommand",
          name: "Отменить назначение",
          behaviour: Mt.k.Danger,
          stateValue: f.$W.cancelled,
          medicalEntryCode: "t_unassign_consultation",
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        }
      },
      NOT_COMPLETED: {
        code: "NOT_COMPLETED",
        name: "Не выполнено",
        DeprecateCancelledCommand: {
          code: "DeprecateCancelledCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Восстановить",
          to: [G.DN.ASSIGNED, G.DN.EDITING],
          visualisationFlags: ["list", "view"]
        }
      }
    },
    fr = it => ({
      code: it.CANCELLING.code,
      name: it.CANCELLING.name,
      matchState: (_e, gt) => _e.stateValue === f.$W[f.$W.planned] && gt === it.CANCELLING.code,
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLING.UndoCancellingCommand, () => _e.getService().rollbackCancelling()), _e.entryCommand(it.CANCELLING.CancelCommand, gt => gt.sign().pipe((0, A.w)(() => {
        const ni = _e.getMedicalEntry();
        return ni.getRoot() instanceof We.U && Re(_e) && ni.status() === y.j.SIGNED ? ni.save().pipe((0, O.U)(() => gt)) : (0, b.of)(gt);
      })))]
    }),
    pt = it => ({
      code: it.NOT_COMPLETED.code,
      name: it.NOT_COMPLETED.name,
      matchState: (_e, gt) => _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() && _e.stateValue === f.$W[f.$W.cancelled] && gt === it.NOT_COMPLETED.code,
      getNextActions: _e => [_e.assignmentCommand(it.NOT_COMPLETED.DeprecateCancelledCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.delete()), (0, O.U)(() => _e));
      })]
    }),
    Dt = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => _e.stateValue === f.$W[f.$W.active] || _e.stateValue === f.$W[f.$W.completed] && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() || gt === it.EXECUTING.code,
      getNextActions: _e => {
        const gt = _e.getComposition().get(it.EXECUTING.consultationAqlPath)?.getCode() ?? "",
          ni = {
            ...it.EXECUTING.ExecuteCommand,
            medicalEntryCode: gt
          },
          So = {
            ...it.EXECUTING.SaveCommand,
            stateValue: it.EXECUTING.ExecuteCommand.stateValue,
            stepCode: it.EXECUTING.ExecuteCommand.stepCode,
            medicalEntryCode: gt
          },
          Er = _e.getLastAction(),
          Br = [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, () => v.B.getUid(Er.uid) !== v.B.getUid(_e.getUid()) ? _e.getMedicalEntry().getEhr().getMedicalEntry(Er.uid).pipe((0, A.w)(vr => vr.delete()), (0, O.U)(() => _e)) : _e.getService().rollbackExecuting().pipe((0, A.w)(() => _e.clearTemporaryMedicalEntries()))), _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(Er.uid).pipe((0, A.w)(vr => vr.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(So, vr => vr.save()), _e.entryCommand(ni, vr => vr.getRoot().getLifecycleState() ? vr.save() : (0, b.of)(vr))];
        return Ft(_e, Br);
      }
    });
  var Ht = i(50590);
  const Dn = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt, ni) => _e.stateValue === f.$W[f.$W.completed] && void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() || gt === it.COMPLETED.code || !!qe(f.$W.completed, L.u.COMPLETE, ni?.getAssignmentActions()),
      getNextActions: _e => [_e.assignmentCommand(it.COMPLETED.EditCompletedCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.save())).pipe((0, O.U)(() => _e));
      }), _e.assignmentCommand(it.COMPLETED.DeprecateCompletedCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, Ht.P)(), (0, A.w)(ni => ni.save())).pipe((0, O.U)(() => _e));
      })]
    }),
    vt = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stateValue: f.$W.planned,
        stepCode: "at5555"
      },
      ASSIGNED: {
        ...G.CO.ASSIGNED,
        StartCommand: {
          ...G.CO.ASSIGNED.StartCommand,
          hidden: !0
        },
        CancellingCommand: {
          ...G.CO.ASSIGNED.CancellingCommand,
          hidden: !0
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        typeAqlPath: "запрос_на_инструментальное_исследование.запрос_на_инструментальное_исследование.запрос.назначение",
        stateValue: f.$W.active,
        stepCode: "at4444",
        ExecuteCommand: {
          code: "ExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Подписать и продолжить",
          stateValue: f.$W.completed,
          medicalEntry: {
            code: "t_results_instrumental",
            name: "Результат инструментального исследования",
            templateId: "openEHR-EHR-COMPOSITION.t_results_instrumental.exam.v0"
          },
          iconSettings: {
            iconType: "consent",
            iconSize: 16,
            leftSide: !0
          },
          stepCode: "at8888",
          to: [G.DN.COMPLETED],
          visualisationFlags: G.CO.EXECUTING.ExecuteCommand.visualisationFlags
        },
        ReadyToDescribeCommand: {
          code: "ReadyToDescribeCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Подписать и продолжить",
          hidden: !0,
          stateValue: f.$W.active,
          medicalEntry: {
            code: "t_results_instrumental",
            name: "Результат инструментального исследования",
            templateId: "openEHR-EHR-COMPOSITION.t_results_instrumental.exam.v0"
          },
          stepCode: "at0008",
          to: ["READY_TO_DESCRIBE"],
          visualisationFlags: ["no"]
        }
      },
      DESCRIBING: {
        code: "DESCRIBING",
        name: "Описывается",
        typeAqlPath: "запрос_на_инструментальное_исследование.запрос_на_инструментальное_исследование.запрос.назначение",
        stateValue: f.$W.active,
        stepCode: "at8888",
        ExecuteCommand: {
          code: "ExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Перейти к заполнению протокола",
          stateValue: f.$W.completed,
          medicalEntry: {
            code: "t_results_instrumental",
            name: "Результат инструментального исследования",
            templateId: "openEHR-EHR-COMPOSITION.t_results_instrumental.exam.v0"
          },
          stepCode: "at8888",
          to: [G.DN.COMPLETED],
          visualisationFlags: G.CO.EXECUTING.ExecuteCommand.visualisationFlags
        },
        SaveCommand: {
          code: "SaveCommand",
          name: "Сохранить",
          behaviour: Mt.k.AlternateScenario,
          stateValue: f.$W.active,
          to: ["DESCRIBING"],
          hidden: !0,
          stepCode: "at8888",
          medicalEntry: {
            code: "t_results_instrumental",
            name: "Результат инструментального исследования",
            templateId: "openEHR-EHR-COMPOSITION.t_results_instrumental.exam.v0"
          },
          visualisationFlags: G.CO.EXECUTING.SaveCommand.visualisationFlags
        },
        UndoExecutingCommand: {
          name: "Отменить выполнение",
          code: "UndoExecutingCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["READY_TO_DESCRIBE"],
          visualisationFlags: G.CO.EXECUTING.UndoExecutingCommand.visualisationFlags
        },
        DeleteResultDocumentCommand: {
          name: "Удалить",
          code: "DeleteResultDocumentCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["READY_TO_DESCRIBE"],
          visualisationFlags: G.CO.EXECUTING.DeleteResultDocumentCommand.visualisationFlags
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        code: "CANCELLING",
        name: "Отменяется",
        CancelCommand: {
          ...G.CO.CANCELLING.CancelCommand,
          code: "CancelCommand",
          behaviour: Mt.k.Danger,
          name: "Отменить назначение",
          stateValue: f.$W.cancelled,
          medicalEntryCode: "t_unassign_ins_research",
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        }
      },
      READY_TO_DESCRIBE: {
        code: "READY_TO_DESCRIBE",
        name: "Готово к описанию",
        StartCommand: {
          name: "Взять в работу",
          code: "StartCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["DESCRIBING"],
          visualisationFlags: ["list"]
        },
        DeleteCommand: {
          name: "Удалить",
          code: "DeleteCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.ASSIGNED],
          hidden: !0
        },
        EditCommand: {
          name: "Редактировать",
          code: "EditCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: [G.DN.EXECUTING],
          hidden: !0
        }
      },
      NOT_COMPLETED: {
        code: "NOT_COMPLETED",
        name: "Не выполнено",
        DeprecateCancelledCommand: {
          name: "Восстановить",
          code: "DeprecateCancelledCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: [G.DN.ASSIGNED],
          visualisationFlags: ["list", "view"]
        }
      }
    },
    an = it => ({
      code: it.ASSIGNED.code,
      name: it.ASSIGNED.name,
      matchState: (_e, gt) => gt === it.ASSIGNED.code || void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() && (_e.stateValue === f.$W[f.$W.planned] || _e.stateValue === f.$W[f.$W.initial]),
      getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.EditCommand, () => le(_e)), _e.assignmentCommand(it.ASSIGNED.DeleteCommand, () => be(_e)), _e.assignmentCommand(it.ASSIGNED.CancellingCommand, () => _e.getService().cancelling()), _e.assignmentCommand(it.ASSIGNED.StartCommand, () => _e.getService().activate(_e.assignment))]
    }),
    li = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt) => _e.stateValue === f.$W[f.$W.completed] && void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() || gt === it.COMPLETED.code,
      getNextActions: _e => [_e.assignmentCommand(it.COMPLETED.DeprecateCompletedCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.save())).pipe((0, O.U)(() => _e));
      }), _e.assignmentCommand(it.COMPLETED.EditCompletedCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.save())).pipe((0, O.U)(() => _e));
      })].filter(Boolean)
    }),
    zn = it => ({
      code: it.DESCRIBING.code,
      name: it.DESCRIBING.name,
      matchState: (_e, gt) => gt === it.DESCRIBING.code,
      getNextActions: _e => {
        const gt = _e.getComposition().get(it.DESCRIBING.typeAqlPath)?.getCode() ?? "",
          ni = {
            ...it.DESCRIBING.ExecuteCommand,
            medicalEntryCode: gt
          },
          So = {
            ...it.DESCRIBING.SaveCommand,
            medicalEntryCode: gt
          },
          Er = _e.getLastAction(),
          Br = Er.stateValue === f.$W[it.EXECUTING.ReadyToDescribeCommand.stateValue] && Er.stepCode === it.EXECUTING.ReadyToDescribeCommand.stepCode,
          vr = Er.stateValue === f.$W[it.DESCRIBING.ExecuteCommand.stateValue] && Er.lifecycleState === L.u.INCOMPLETE.toLowerCase();
        return [_e.assignmentCommand(it.DESCRIBING.UndoExecutingCommand, () => Br ? _e.getService().rollbackDescribing(_e.assignment) : (0, b.of)(void 0)), vr && _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(Er.uid).pipe((0, A.w)(zr => zr.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(So, zr => zr.save()), _e.entryCommand(ni, zr => (0, b.of)(zr))].filter(Boolean);
      }
    }),
    $t = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => gt === it.EXECUTING.code,
      getNextActions: _e => {
        const {
            executeParams: gt,
            saveParams: ni,
            isCreate: So,
            medicalEntryCode: Er
          } = n(_e, it),
          Br = _e.getLastAction();
        return [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, () => So ? _e.getService().rollbackExecuting().pipe((0, A.w)(() => _e.clearTemporaryMedicalEntries())) : (0, b.of)(void 0)), Br.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() && _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(Br.uid).pipe((0, A.w)(vr => vr.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(ni, vr => vr.save()), _e.entryCommand(gt, vr => vr.getRoot().getLifecycleState() ? vr.save() : (0, b.of)(vr)), _e.entryCommand({
          ...it.EXECUTING.ReadyToDescribeCommand,
          medicalEntryCode: Er
        }, vr => vr.save())].filter(Boolean);
      }
    }),
    Mn = it => ({
      code: it.NOT_COMPLETED.code,
      name: it.NOT_COMPLETED.name,
      matchState: (_e, gt) => gt === it.NOT_COMPLETED.code,
      getNextActions: _e => [_e.assignmentCommand(it.NOT_COMPLETED.DeprecateCancelledCommand, () => {
        const gt = _e.getLastAction();
        return _e.getMedicalEntry().getEhr().getMedicalEntry(gt.uid).pipe((0, A.w)(ni => ni.delete()), (0, O.U)(() => (0, b.of)(_e)));
      })]
    }),
    Qn = it => ({
      code: it.READY_TO_DESCRIBE.code,
      name: it.READY_TO_DESCRIBE.name,
      matchState: (_e, gt) => gt === it.READY_TO_DESCRIBE.code,
      getNextActions: _e => [_e.assignmentCommand(it.READY_TO_DESCRIBE.DeleteCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(_e.getLastAction().uid).pipe((0, A.w)(gt => gt.delete()))), _e.assignmentCommand(it.READY_TO_DESCRIBE.EditCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(_e.getLastAction().uid).pipe((0, A.w)(gt => (gt.getRoot().asType(C.A.IAssignmentActionEntry)?.setActionState({
        ...it.READY_TO_DESCRIBE.EditCommand,
        stateValue: f.$W.active,
        stepCode: "at4444"
      }), gt.save())))), _e.assignmentCommand(it.READY_TO_DESCRIBE.StartCommand, () => _e.getService().markAsDescribing(_e.assignment))]
    }),
    In = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stateValue: f.$W.planned,
        stepCode: "at5555"
      },
      ASSIGNED: {
        ...G.CO.ASSIGNED,
        StartCommand: {
          ...G.CO.ASSIGNED.StartCommand,
          hidden: !0
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        code: "CANCELLING",
        name: "Отмена лабораторного исследования",
        CancelCommand: {
          code: "CancelCommand",
          behaviour: Mt.k.Danger,
          name: "Отменить исследование",
          stateValue: f.$W.cancelled,
          medicalEntryCode: "t_unassign_lab_research",
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        stateValue: f.$W.active,
        typeAqlPath: "запрос_на_лабораторное_исследование.запрос_на_лабораторное_исследование.запрос.назначение",
        ExecuteCommand: {
          code: "ExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Подписать и продолжить",
          stateValue: f.$W.completed,
          medicalEntryCode: "t_results_lab",
          stepCode: "at8888",
          to: [G.DN.COMPLETED],
          reuseMedicalEntry: !0,
          hidden: !0,
          iconSettings: {
            iconType: "consent",
            iconSize: 16,
            leftSide: !0
          }
        },
        SaveCommand: {
          name: "Сохранить",
          medicalEntryCode: "medical_entry_code",
          stateValue: f.$W.completed,
          stepCode: "atXXXX",
          code: "SaveCommand",
          behaviour: Mt.k.AlternateScenario,
          to: [G.DN.EXECUTING],
          hidden: !0
        },
        UndoExecutingCommand: {
          name: "Отменить выполнение",
          code: "UndoExecutingCommand",
          behaviour: Mt.k.AlternateScenario,
          to: [G.DN.ASSIGNED],
          hidden: !0,
          visualisationFlags: ["list"]
        }
      },
      REGISTERED: {
        code: "REGISTERED",
        name: "Проба зарегистрирована"
      },
      DONE_NO_RESULTS: {
        code: "DONE_NO_RESULTS",
        name: "Выполнено / результаты ожидаются"
      }
    },
    ui = it => ({
      code: it.DONE_NO_RESULTS.code,
      name: it.DONE_NO_RESULTS.name,
      matchState: (_e, gt) => gt === it.DONE_NO_RESULTS.code,
      getNextActions: () => []
    }),
    To = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => gt === it.EXECUTING.code,
      getNextActions: _e => {
        const {
            executeParams: gt,
            saveParams: ni,
            isCreate: So
          } = n(_e, it),
          Er = _e.getLastAction(),
          Br = [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, () => So ? _e.getService().rollbackExecuting() : (0, b.of)(void 0)), _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(Er.uid).pipe((0, A.w)(vr => vr.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(ni, vr => vr.save()), _e.entryCommand(gt, vr => vr.save())];
        return Ft(_e, Br);
      }
    }),
    bi = it => ({
      code: it.REGISTERED.code,
      name: it.REGISTERED.name,
      matchState: _e => _e.lifecycleState.toLowerCase() === L.u.COMPLETE.toLowerCase() && _e.stateValue === f.$W[f.$W.scheduled],
      getNextActions: () => []
    }),
    qn = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stateValue: f.$W.planned,
        stepCode: "at5555"
      },
      ASSIGNED: {
        code: "ASSIGNED",
        name: "Назначено",
        EditCommand: G.CO.ASSIGNED.EditCommand,
        DeleteCommand: G.CO.ASSIGNED.DeleteCommand,
        CancellingCommand: G.CO.ASSIGNED.CancellingCommand,
        PartCancelCommand: {
          name: "Отменить часть курса",
          code: "PartCancelCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.CANCELLING]
        },
        PartExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          code: "PartExecuteCommand",
          hidden: !0
        }
      },
      EXECUTING: {
        code: G.CO.EXECUTING.code,
        name: G.CO.EXECUTING.name,
        PartCancelCommand: {
          name: "Отменить часть курса",
          code: "PartCancelCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.CANCELLING],
          visualisationFlags: ["lists"]
        },
        PartExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          hidden: !0,
          code: "PartExecuteCommand"
        }
      },
      ABORTED: {
        code: "ABORTED",
        name: "Курс прерван"
      },
      CANCELLING: {
        code: "CANCELLING",
        name: "Отмена медикаментозного лечения",
        CancelCommand: {
          code: "CancelCommand",
          behaviour: Mt.k.Danger,
          name: "Отменить назначение",
          stateValue: f.$W.cancelled,
          visualisationFlags: ["forms", "ruleExecuting"],
          medicalEntryCode: "t_medication_refusal",
          medicalEntry: {
            code: "t_medication_refusal",
            name: "Отмена медикаментозного лечения",
            templateId: "openEHR-EHR-COMPOSITION.t_medication_cancel.v0"
          },
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        },
        PartCancelCommand: {
          name: "Отменить часть курса",
          code: "PartCancelCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.ASSIGNED],
          visualisationFlags: ["lists"]
        },
        UndoCancellingCommand: {
          ...G.CO.CANCELLING.UndoCancellingCommand,
          name: "Прервать отмену"
        }
      },
      COMPLETED: {
        code: "COMPLETED",
        name: "Курс выполнен",
        DeleteCommand: {
          name: "Удалить",
          code: "DeleteCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.ASSIGNED]
        }
      }
    },
    Xn = it => ({
      code: it.ABORTED.code,
      name: it.ABORTED.name,
      matchState: _e => +_e.stateCode === f.$W.aborted,
      getNextActions: () => []
    });
  var Yi = i(51588);
  const Eo = {
    INIT: G.CO.INIT,
    InitCommand: G.CO.InitCommand,
    ASSIGNED: {
      code: G.CO.ASSIGNED.code,
      name: G.CO.ASSIGNED.name,
      CancellingCommand: G.CO.ASSIGNED.CancellingCommand,
      ExecuteCommand: {
        ...G.CO.EXECUTING.ExecuteCommand,
        medicalEntry: {
          code: "t_execute_single_med",
          name: "Выполнение выдачи",
          templateId: "openEHR-EHR-COMPOSITION.t_medication_pmark.v0"
        },
        stepCode: "at8888"
      },
      PostponeCommand: {
        code: "PostponeCommand",
        behaviour: Mt.k.PrimaryScenario,
        name: "Отложить",
        to: ["POSTPONED"]
      }
    },
    CANCELLED: {
      ...G.CO.CANCELLED,
      DeprecateCancelledCommand: {
        ...G.CO.CANCELLED.DeprecateCancelledCommand,
        name: "Отменить невыполнение",
        behaviour: Mt.k.Danger
      }
    },
    COMPLETED: {
      code: G.CO.COMPLETED.code,
      name: G.CO.COMPLETED.name,
      DeprecateCompletedCommand: {
        ...G.CO.COMPLETED.DeprecateCompletedCommand,
        name: "Отменить выполнение",
        behaviour: Mt.k.Danger
      }
    },
    CANCELLING: {
      ...G.CO.CANCELLING,
      CancelCommand: {
        ...G.CO.CANCELLING.CancelCommand,
        medicalEntry: {
          code: "t_execute_single_med",
          name: "Отменить выдачу",
          templateId: "openEHR-EHR-COMPOSITION.t_medication_pmark.v0"
        },
        stepCode: "at8888",
        to: [G.DN.CANCELLED]
      }
    },
    POSTPONED: {
      code: "POSTPONED",
      name: "Отложено",
      DeprecatePostponedCommand: {
        code: "DeprecatePostponedCommand",
        behaviour: Mt.k.PrimaryScenario,
        name: "Возобновить",
        to: ["ASSIGNED"]
      },
      ExecuteCommand: {
        ...G.CO.EXECUTING.ExecuteCommand,
        medicalEntry: {
          code: "t_execute_single_med",
          name: "Выполнение выдачи",
          templateId: "openEHR-EHR-COMPOSITION.t_medication_pmark.v0"
        },
        stepCode: "at8888"
      }
    }
  };
  class Fo {
    static fillComposition(_e) {
      const {
        setting: gt,
        composition: ni,
        code: So,
        assignment: Er,
        cancelReason: Br
      } = _e;
      Fo.setEntryUid(gt.singleItem.forUid, ni, So), Fo.fillMedications(gt, ni, Er), Fo.setDate(gt.singleItem.date, ni, new Date()), Br && (Fo.setDvText(gt.singleItem.cancelReason, ni, Br), Fo.setDvBoolean(gt.singleItem.isCanceled, ni, !0));
    }
    static setEntryUid(_e, gt, ni) {
      gt.get(_e, f.cB.AQL)?.getUid()?.setValue(ni);
    }
    static setDvCodedText(_e, gt, ni) {
      gt.get(_e, f.cB.AQL)?.setCodedText(ni);
    }
    static setDvText(_e, gt, ni) {
      gt.get(_e, f.cB.AQL)?.setValue(ni);
    }
    static setDvBoolean(_e, gt, ni) {
      gt.get(_e, f.cB.AQL)?.setValue(ni);
    }
    static setDate(_e, gt, ni) {
      gt.get(_e, f.cB.AQL)?.setValue(ni.toISOString());
    }
    static fillMedications(_e, gt, ni) {
      ni.medications?.forEach(So => {
        const Er = gt.get(`${_e.singleItem.medicationItemPath}[*]`);
        Er?.get(_e.singleItem.medicationItem.medication)?.setCodedText({
          code: So.otnCode,
          text: So.otnName
        }), So.applyDose && Er?.get(_e.singleItem.medicationItem.dose)?.setValue(So.applyDose.toString());
      });
    }
  }
  class br {
    constructor(_e, gt) {
      this.assignmentEntry = _e, this.assignment = gt;
    }
    createContribution(_e) {
      const gt = this.assignmentEntry.getMedicalEntry().getEhr().contribution();
      return (0, h.D)((this.assignment.medicationDispenses ?? []).filter(ni => !_e?.ids?.length || _e?.ids?.includes(ni.code)).map(ni => this.createContributionItem(ni, gt))).pipe((0, O.U)(() => gt), (0, x.d)(gt));
    }
    createContributionItem(_e, gt) {
      const ni = new Ee.C(this.assignmentEntry.getMedicalEntry());
      return ni.create((0, Yi.Z)(), Eo.ASSIGNED.ExecuteCommand.medicalEntry).pipe((0, O.U)(() => {
        const So = ni.getComposition(),
          Er = this.assignmentEntry.getAssignmentTemplateSetting();
        return Fo.fillComposition({
          setting: Er,
          composition: So,
          code: _e.code,
          assignment: this.assignment,
          medicationInfo: _e
        }), ni;
      }), (0, A.w)(So => So.load()), (0, A.w)(So => So.complete(gt)));
    }
  }
  const Pr = it => ({
    code: it.ASSIGNED.code,
    name: it.ASSIGNED.name,
    matchState: (_e, gt, ni) => "ASSIGNED" === gt || +_e.stateCode === f.$W.planned && _e.lifecycleState === L.u.COMPLETE.toLowerCase() || ni?.getLifecycleState() === L.u.COMPLETE.toLowerCase(),
    getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.EditCommand, () => le(_e)), _e.assignmentCommand(it.ASSIGNED.DeleteCommand, () => be(_e)), _e.assignmentCommand(it.ASSIGNED.CancellingCommand, () => _e.getService().cancelling()), _e.assignmentCommand(it.ASSIGNED.PartCancelCommand, () => _e.getService().cancelling()), _e.assignmentCommand(it.ASSIGNED.PartExecuteCommand, (gt, ni, So) => new br(_e, gt).createContribution(So).pipe((0, A.w)(Br => Br.commit())))]
  });
  class qo {
    constructor(_e, gt) {
      this.assignmentEntry = _e, this.assignment = gt;
    }
    createContribution(_e) {
      const gt = this.assignmentEntry.getMedicalEntry().getEhr().contribution();
      return (0, h.D)((this.assignment.medicationDispenses ?? []).filter(ni => !_e?.ids?.length || _e?.ids?.includes(ni.code)).filter(ni => !ni || "CANCELLING" === ni.status).map(ni => this.createContributionItem(ni, gt, _e?.cancelReason))).pipe((0, O.U)(() => gt), (0, x.d)(gt));
    }
    createContributionItem(_e, gt, ni) {
      return this.assignmentEntry.getMedicalEntry().getEhr().getMedicalEntry(this.assignmentEntry.getUid()).pipe((0, A.w)(Er => {
        const Br = new Ee.C(Er);
        return Br.create((0, Yi.Z)(), Eo.CANCELLING.CancelCommand.medicalEntry).pipe((0, O.U)(() => {
          const vr = Br.getComposition(),
            zr = this.assignmentEntry.getAssignmentTemplateSetting();
          return Fo.fillComposition({
            setting: zr,
            composition: vr,
            code: _e.code,
            assignment: this.assignment,
            cancelReason: ni || "Отмена выдачи",
            medicationInfo: _e
          }), Br;
        }), (0, A.w)(vr => vr.load()), (0, A.w)(vr => vr.complete(gt)));
      }));
    }
  }
  const Yo = it => ({
      code: it.CANCELLING.code,
      name: it.CANCELLING.name,
      matchState: (_e, gt) => gt === it.CANCELLING.code,
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLING.UndoCancellingCommand, () => _e.getService().rollbackCancelling()), _e.assignmentCommand(it.CANCELLING.PartCancelCommand, (gt, ni, So) => new qo(_e, gt).createContribution(So).pipe((0, A.w)(Br => Br.commit()), (0, A.w)(() => _e.getService().rollbackCancelling()))), _e.entryCommand(it.CANCELLING.CancelCommand, gt => gt.sign().pipe((0, A.w)(() => {
        const ni = _e.getMedicalEntry();
        return ni.getRoot() instanceof We.U && Re(_e) && ni.status() === y.j.SIGNED ? ni.save().pipe((0, O.U)(() => gt)) : (0, b.of)(gt);
      }), (0, O.U)(() => gt)))]
    }),
    oo = it => ({
      code: it.CANCELLED.code,
      name: it.CANCELLED.name,
      matchState: (_e, gt) => gt === it.CANCELLED.code || +_e.stateCode === f.$W.cancelled,
      getNextActions: _e => _e.getMedicalEntry().getUserContext().getCommitter().committerId === _e.getComposition().getComposer()?.getValue().id ? [_e.assignmentCommand(it.CANCELLED.DeprecateCancelledCommand, ni => {
        const So = function wr(it, _e) {
          const gt = (it.medicationDispenses || []).map(So => So.resultCompositionUid).filter(Boolean);
          return _e.filter(So => !gt.includes(v.B.getUid(So.uid)))[0];
        }(ni, _e.getAssignmentActions());
        return _e.getMedicalEntry().getEhr().getMedicalEntry(ni?.resultCompositionUid || So.uid).pipe((0, A.w)(Er => Er.delete().pipe((0, O.U)(() => Er))), (0, O.U)(() => ni));
      })] : []
    }),
    Di = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => _e.stateValue === f.$W[f.$W.active] || _e.stateValue === f.$W[f.$W.completed] && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() || gt === it.EXECUTING.code || +_e.stateCode === f.$W.active,
      getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.PartCancelCommand, () => _e.getService().cancelling()), _e.assignmentCommand(it.EXECUTING.PartExecuteCommand, (gt, ni, So) => new br(_e, gt).createContribution(So).pipe((0, A.w)(Br => Br.commit())))]
    }),
    Ci = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt) => gt === it.COMPLETED.code || +_e.stateCode === f.$W.completed,
      getNextActions: () => []
    }),
    lo = it => ({
      ...st(it),
      matchState: (_e, gt) => gt === it.CANCELLING.code
    }),
    jo = it => ({
      ...it.EDITING,
      code: it.EDITING.code,
      name: it.EDITING.name,
      matchState: (_e, gt) => gt !== it.CREATED.code && void 0 !== _e.lifecycleState && _e.lifecycleState.toLowerCase() === L.u.INCOMPLETE.toLowerCase() && _e.stateValue === f.$W[f.$W.initial],
      getNextActions: _e => [_e.assignmentCommand(it.EDITING.EditCommand, () => (0, b.of)(_e)), _e.assignmentCommand(it.EDITING.DeleteCommand, () => _e.getMedicalEntry().delete().pipe((0, O.U)(() => _e)))]
    }),
    Go = it => ({
      ...Et(it),
      matchState: (_e, gt) => gt === it.EXECUTING.code
    }),
    ji = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stateValue: f.$W.initial,
        stepCode: "at5555"
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        ExecuteCommand: {
          code: "ExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Взять в работу",
          iconSettings: {
            iconType: "consent",
            iconSize: 16,
            leftSide: !0
          },
          stateValue: f.$W.completed,
          medicalEntryCode: "t_request_surgical_treatment",
          stepCode: "at8888",
          to: [G.DN.COMPLETED],
          reuseMedicalEntry: !0
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        code: "CANCELLING",
        name: "Отмена операции",
        CancelCommand: {
          code: "CancelCommand",
          behaviour: Mt.k.Danger,
          name: "Отменить операцию",
          stateValue: f.$W.cancelled,
          medicalEntryCode: "t_unassign_operation",
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        }
      }
    },
    ti = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => gt === it.EXECUTING.code,
      getNextActions: _e => {
        const {
            executeParams: gt,
            saveParams: ni,
            isCreate: So
          } = n(_e, it),
          Er = _e.getLastAction(),
          Br = [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, () => So ? _e.getService().rollbackExecuting() : (0, b.of)(void 0)), _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(Er.uid).pipe((0, A.w)(vr => vr.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(ni, vr => vr.save()), _e.entryCommand(gt, vr => vr.save())];
        return Ft(_e, Br);
      }
    }),
    fi = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stateValue: f.$W.planned,
        stepCode: "at5555"
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        code: "CANCELLING",
        name: "Отмена лабораторного исследования",
        CancelCommand: {
          code: "CancelCommand",
          behaviour: Mt.k.Danger,
          name: "Отменить исследование",
          stateValue: f.$W.cancelled,
          medicalEntryCode: "t_unassign_lab_research",
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        stateValue: f.$W.active,
        typeAqlPath: "назначение_на_гистологическое_исследование.данные_о_назначении.данные_о_назначении.запрос.код_и_наименование_лабораторного_исследования",
        ExecuteCommand: {
          code: "ExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          name: "Подписать и продолжить",
          iconSettings: {
            iconType: "consent",
            iconSize: 16,
            leftSide: !0
          },
          stateValue: f.$W.completed,
          medicalEntry: {
            code: "t_results_lab",
            name: "Результат лабораторного исследования",
            templateId: "openEHR-EHR-COMPOSITION.t_laboratory_test_report.v0"
          },
          stepCode: "at8888",
          to: [G.DN.COMPLETED]
        }
      }
    },
    Fi = {
      ...G.CO,
      InitCommand: {
        ...G.CO.InitCommand,
        stepCode: "at5555"
      },
      CREATED: {
        ...G.CO.CREATED,
        CancellingCommand: {
          ...G.CO.CREATED.CancellingCommand,
          hidden: !0
        }
      },
      ASSIGNED: {
        code: G.CO.ASSIGNED.code,
        name: G.CO.ASSIGNED.name,
        EditCommand: G.CO.ASSIGNED.EditCommand,
        DeleteCommand: G.CO.ASSIGNED.DeleteCommand,
        CancellingCommand: {
          ...G.CO.ASSIGNED.CancellingCommand,
          hidden: !1
        },
        PartCancelCommand: {
          name: "Отменить часть курса",
          code: "PartCancelCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.CANCELLING],
          visualisationFlags: ["lists"]
        }
      },
      EDITING: {
        ...G.CO.EDITING
      },
      CANCELLED: {
        ...G.CO.CANCELLED,
        DeprecateCancelledCommand: {
          ...G.CO.CANCELLED.DeprecateCancelledCommand,
          name: "Восстановить",
          behaviour: Mt.k.PrimaryScenario
        }
      },
      COMPLETED: {
        code: G.CO.COMPLETED.code,
        name: G.CO.COMPLETED.name,
        DeprecateFinishedCommand: {
          code: "DeprecateFinishedCommand",
          name: "Отменить финализацию",
          behaviour: Mt.k.Danger,
          to: [G.DN.ASSIGNED],
          visualisationFlags: ["show"]
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        name: "Курс активен",
        FinishingCommand: {
          name: "Финализация курса",
          code: "FinishingCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["FINISHING"],
          visualisationFlags: ["lists"]
        },
        PartCancelCommand: {
          ...G.CO.CANCELLING.CancelCommand,
          name: "Отменить часть курса",
          code: "PartCancelCommand",
          behaviour: Mt.k.Danger,
          visualisationFlags: ["lists"]
        }
      },
      FINISHING: {
        code: "FINISHING",
        name: "Заполнение финального протокола",
        UndoExecutingCommand: {
          name: "Отменить финализацию",
          code: "UndoExecutingCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["DONE"],
          visualisationFlags: ["lists"]
        },
        ExecuteCommand: {
          code: "ExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          hidden: !0,
          name: "Сохранить и подписать",
          stateValue: f.$W.completed,
          medicalEntryCode: "t_finalize_procedure",
          stepCode: "at8888",
          to: [G.DN.COMPLETED],
          visualisationFlags: ["forms"]
        },
        SaveCommand: {
          code: "SaveCommand",
          behaviour: Mt.k.AlternateScenario,
          name: "Сохранить",
          hidden: !0,
          stateValue: f.$W.completed,
          medicalEntryCode: "t_finalize_procedure",
          stepCode: "at8888",
          to: ["FINISHING"],
          visualisationFlags: ["forms"]
        },
        OpenFinalDocumentCommand: {
          name: "Открыть финализирующий документ",
          code: "OpenFinalDocumentCommand",
          behaviour: Mt.k.AlternateScenario,
          to: ["FINISHING"],
          visualisationFlags: ["lists", "view"]
        },
        ContinueExecuteCommand: {
          name: "Финализация курса",
          code: "ContinueExecuteCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["FINISHING"],
          visualisationFlags: ["view"]
        },
        RestoreCommand: {
          name: "Удалить",
          hidden: !0,
          code: "RestoreCommand",
          behaviour: Mt.k.Danger,
          to: ["DONE"],
          visualisationFlags: ["forms"]
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        CancelCommand: {
          ...G.CO.CANCELLING.CancelCommand,
          medicalEntryCode: "t_unassign_procedure",
          medicalEntry: {
            name: "Отменить назначение на процедуру/манипуляцию",
            typeId: "Другие документы",
            code: "t_unassign_procedure",
            templateId: "openEHR-EHR-COMPOSITION.t_unassign_procedure.v1"
          },
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        },
        PartCancelCommand: {
          name: "Отменить часть курса",
          code: "PartCancelCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.ASSIGNED]
        }
      },
      DONE: {
        code: "DONE",
        name: "Процедуры выполнены полностью",
        FinishingCommand: {
          name: "Финализация курса",
          code: "FinishingCommand",
          behaviour: Mt.k.PrimaryScenario,
          to: ["FINISHING"]
        }
      }
    },
    Rn = it => ({
      code: it.EDITING.code,
      name: it.EDITING.name,
      matchState: (_e, gt) => "EDITING" === gt,
      getNextActions: _e => [_e.assignmentCommand(it.EDITING.SaveCommand, () => _e.getMedicalEntry().save().pipe((0, O.U)(() => _e))), _e.assignmentCommand(it.EDITING.EditCommand, () => (0, b.of)(_e)), _e.assignmentCommand(it.EDITING.DeleteCommand, () => _e.getMedicalEntry().delete().pipe((0, O.U)(() => _e))), _e.assignmentCommand(it.EDITING.AssignCommand, () => _e.getMedicalEntry().sign().pipe((0, O.U)(() => _e)))]
    }),
    ki = "openEHR-EHR-COMPOSITION.t_current_procedure.v0";
  function Ei(it) {
    if (it) return it.getAssignmentActions().filter(_e => _e.templateId !== ki)[0];
  }
  const Wt = it => ({
      code: it.ASSIGNED.code,
      name: it.ASSIGNED.name,
      matchState: (_e, gt, ni) => {
        const So = Ei(ni);
        return "ASSIGNED" === gt || +_e.stepValue === f.$W.planned && _e.lifecycleState === L.u.COMPLETE.toLowerCase() || +_e.stateCode === f.$W.initial && _e.lifecycleState === L.u.COMPLETE.toLowerCase() || (So?.stepValue === f.$W.initial.toString() || So?.stepValue === f.$W.planned.toString()) && So?.lifecycleState === L.u.COMPLETE.toLowerCase();
      },
      getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.EditCommand, () => le(_e)), _e.assignmentCommand(it.ASSIGNED.DeleteCommand, () => be(_e)), _e.assignmentCommand(it.ASSIGNED.CancellingCommand, () => _e.getService().cancelling()), _e.assignmentCommand(it.ASSIGNED.PartCancelCommand, () => (0, b.of)(_e))]
    }),
    Oi = {
      INIT: G.CO.INIT,
      InitCommand: G.CO.InitCommand,
      ASSIGNED: {
        code: G.CO.ASSIGNED.code,
        name: G.CO.ASSIGNED.name,
        CancellingCommand: G.CO.ASSIGNED.CancellingCommand,
        StartCommand: G.CO.ASSIGNED.StartCommand,
        StartCommandMark: {
          ...G.CO.ASSIGNED.StartCommand,
          code: "StartCommandMark"
        }
      },
      CANCELLED: {
        ...G.CO.CANCELLED,
        DeprecateCancelledCommand: {
          ...G.CO.CANCELLED.DeprecateCancelledCommand,
          name: "Восстановить",
          behaviour: Mt.k.Danger
        }
      },
      COMPLETED: {
        code: G.CO.COMPLETED.code,
        name: G.CO.COMPLETED.name,
        DeprecateCompletedCommand: {
          ...G.CO.COMPLETED.DeprecateCompletedCommand,
          name: "Отменить выполнение",
          behaviour: Mt.k.Danger
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        ExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          medicalEntry: {
            code: "t_execute_procedure",
            name: "Выполнение процедуры/манипуляции",
            templateId: "openEHR-EHR-COMPOSITION.t_current_procedure.v0"
          },
          stepCode: "at8888",
          stateValue: f.$W.active,
          reuseMedicalEntry: !0
        },
        SaveCommand: {
          ...G.CO.EXECUTING.SaveCommand,
          stepCode: "at8888",
          stateValue: f.$W.active
        }
      },
      EXECUTING_WITH_MARK: {
        code: G.CO.EXECUTING.code,
        name: G.CO.EXECUTING.name,
        UndoExecutingCommand: {
          ...G.CO.EXECUTING.UndoExecutingCommand
        },
        ExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          medicalEntry: {
            code: "t_execute_procedure",
            name: "Выполнение процедуры/манипуляции",
            templateId: "openEHR-EHR-COMPOSITION.t_current_procedure.v0"
          },
          stepCode: "at8888",
          stateValue: f.$W.active,
          reuseMedicalEntry: !0
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        CancelCommand: {
          ...G.CO.CANCELLING.CancelCommand,
          name: "Отменить",
          medicalEntryCode: "t_unassign_procedure",
          stepCode: "at6666",
          to: [G.DN.CANCELLED]
        }
      },
      NOT_COMPLETED: {
        code: "NOT_COMPLETED",
        name: "Не выполнено",
        DeprecateCancelledCommand: {
          name: "Восстановить",
          code: "DeprecateCancelledCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.EDITING, G.DN.ASSIGNED],
          visualisationFlags: ["all"]
        }
      }
    };
  var Ji = i(29378);
  class Ao {
    static setActionUid(_e, gt) {
      gt.find(new f.XA(f.B8.ACTION))[0].getUid()?.setValue(_e);
    }
    static setTechnicalActionField(_e) {
      const gt = _e.find(new f.XA(f.B8.ACTION))[0];
      try {
        const ni = gt.get("описание.описание");
        ni?.empty() && ni?.setValue(Ji.P);
      } catch {
        gt.find(new f.XA(f.B8.DV_TEXT))[0]?.setValue(Ji.P);
      }
    }
  }
  class Sr {
    constructor(_e, gt) {
      this.assignmentEntry = _e, this.assignment = gt;
    }
    createContribution(_e) {
      const gt = this.assignmentEntry.getMedicalEntry().getEhr().contribution();
      return (0, h.D)((this.assignment.procedures ?? [])?.filter(ni => !_e?.ids.length || _e?.ids?.includes(ni.code))?.filter(ni => ni.status === a.dL.StatusEnum.Cancelling).map(ni => this.createContributionItem(ni, gt, _e?.cancelReason))).pipe((0, O.U)(() => gt), (0, x.d)(gt));
    }
    createContributionItem(_e, gt, ni) {
      return this.assignmentEntry.getMedicalEntry().getEhr().getMedicalEntry(this.assignmentEntry.getUid()).pipe((0, A.w)(Er => {
        const Br = new Ee.C(Er);
        return Br.create((0, Yi.Z)(), Fi.CANCELLING.CancelCommand.medicalEntry).pipe((0, O.U)(() => {
          const vr = Br.getComposition().find(new f.XA(f.B8.ACTION))[0];
          if (Ao.setActionUid(_e.code, Br.getComposition()), Ao.setTechnicalActionField(Br.getComposition()), ni && Br.getComposition().get("отмена_процедуры.процедура.причина_отмены")?.setValue(ni), vr) {
            const zr = new pe.i(this.assignmentEntry.getMedicalEntry(), vr, Br, this.assignmentEntry);
            return zr.setActionState(Oi.CANCELLING.CancelCommand), zr;
          }
          return Br;
        }), (0, A.w)(vr => vr.load()), (0, A.w)(vr => vr.complete(gt)));
      }));
    }
  }
  const us = it => ({
    code: it.CANCELLING.code,
    name: it.CANCELLING.name,
    matchState: (_e, gt) => gt === it.CANCELLING.code,
    getNextActions: _e => [_e.assignmentCommand(it.CANCELLING.UndoCancellingCommand, () => _e.getService().rollbackCancelling()), _e.entryCommand(it.CANCELLING.CancelCommand, gt => gt.sign().pipe((0, A.w)(() => {
      const ni = _e.getMedicalEntry();
      return ni.getRoot() instanceof We.U && Re(_e) && ni.status() === y.j.SIGNED ? ni.save().pipe((0, O.U)(() => gt)) : (0, b.of)(gt);
    }), (0, O.U)(() => gt))), _e.assignmentCommand(it.ASSIGNED.PartCancelCommand, (gt, ni, So) => new Sr(_e, gt).createContribution(So).pipe((0, A.w)(Br => Br.commit())))]
  });
  function Ps(it, _e) {
    return _e.find(gt => gt.uid.includes(it.resultCompositionUid));
  }
  function hs(it, _e) {
    const gt = (it.procedures || []).map(So => So.resultCompositionUid).filter(Boolean);
    return _e.filter(So => !gt.includes(v.B.getUid(So.uid)))[0];
  }
  const oi = it => ({
    code: it.CANCELLED.code,
    name: it.CANCELLED.name,
    matchState: (_e, gt, ni) => {
      const So = Ei(ni);
      return gt === it.CANCELLED.code || So?.stateCode === f.$W.cancelled.toString() && So?.lifecycleState === L.u.COMPLETE.toLowerCase();
    },
    getNextActions: _e => [_e.assignmentCommand(it.CANCELLED.DeprecateCancelledCommand, gt => {
      const ni = hs(gt, _e.getAssignmentActions());
      return _e.getMedicalEntry().getEhr().getMedicalEntry(gt?.resultCompositionUid || ni.uid).pipe((0, A.w)(So => So.delete().pipe((0, O.U)(() => So))), (0, O.U)(() => _e));
    })]
  });
  function Qi(it) {
    const _e = it.getMedicalEntry().getUserContext().getWorkplaceId();
    return function yo(it, _e) {
      return _e === it.getWorkplaceId();
    }(it, _e);
  }
  const Qo = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt, ni) => gt === it.EXECUTING.code || +_e.stateCode === f.$W.active || Ei(ni)?.stateCode === f.$W.active.toString(),
      getNextActions: _e => [Qi(_e) && _e.assignmentCommand(it.DONE.FinishingCommand, () => _e.getService().finishing()), _e.assignmentCommand(it.EXECUTING.PartCancelCommand, () => (0, b.of)(_e))].filter(Boolean)
    }),
    Kr = it => ({
      code: it.DONE.code,
      name: it.DONE.name,
      matchState: (_e, gt) => gt === it.DONE.code,
      getNextActions: _e => [Qi(_e) && _e.assignmentCommand(it.DONE.FinishingCommand, () => _e.getService().finishing())].filter(Boolean)
    });
  function _s(it) {
    const _e = it.getProcedureAssignment();
    return !("FINISHING" !== _e?.status || !_e?.resultCompositionUid);
  }
  const ra = it => ({
    code: it.FINISHING.code,
    name: it.FINISHING.name,
    matchState: (_e, gt) => gt === it.FINISHING.code,
    getNextActions: _e => [Qi(_e) && _s(_e) && _e.assignmentCommand(it.FINISHING.RestoreCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(_e.getLastAction().uid).pipe((0, A.w)(gt => gt.delete()))), _e.entryCommand(it.FINISHING.SaveCommand, gt => gt.save()), Qi(_e) && _s(_e) && _e.assignmentCommand(it.FINISHING.OpenFinalDocumentCommand, () => (0, b.of)(_e)), Qi(_e) && !_s(_e) && _e.assignmentCommand(it.FINISHING.ContinueExecuteCommand, () => (0, b.of)(_e)), Qi(_e) && _e.assignmentCommand(it.FINISHING.UndoExecutingCommand, () => _s(_e) ? _e.clearTemporaryMedicalEntries() : _e.getService().rollbackFinishing().pipe((0, A.w)(() => _e.clearTemporaryMedicalEntries()))), Qi(_e) && _e.entryCommand(it.FINISHING.ExecuteCommand, (gt, ni) => new Sr(_e, ni).createContribution().pipe((0, A.w)(Er => Er.commit()), (0, A.w)(() => gt.sign())))].filter(Boolean)
  });
  function Or(it) {
    return (it.getProcedures() || []).length > 1;
  }
  const Fs = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt) => gt === it.COMPLETED.code,
      getNextActions: _e => [Or(_e) && _e.assignmentCommand(it.COMPLETED.DeprecateFinishedCommand, gt => {
        const ni = hs(gt, _e.getAssignmentActions());
        return _e.getMedicalEntry().getEhr().getMedicalEntry(ni.uid).pipe((0, A.w)(So => So.delete())).pipe((0, O.U)(() => _e));
      })].filter(Boolean)
    }),
    xa = it => ({
      code: it.ASSIGNED.code,
      name: it.ASSIGNED.name,
      matchState: (_e, gt) => "ASSIGNED" === gt,
      getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.CancellingCommand, (gt, ni) => ni ? _e.getService().cancellingProcedure(ni?.code || "") : _e.getService().cancelling()), _e.assignmentCommand(it.ASSIGNED.StartCommand, (gt, ni) => _e.getService().activateProtocolProcedure(ni?.code || "")), _e.assignmentCommand(it.ASSIGNED.StartCommandMark, (gt, ni) => _e.getService().activateMarkProcedure(ni?.code || ""))]
    });
  function rs(it) {
    return it.getAssignmentActions().find(_e => _e.actionUid === it.getProcedureItem()?.code);
  }
  function Js(it) {
    const _e = rs(it);
    return !!_e && _e.lifecycleState === L.u.INCOMPLETE.toLowerCase() && it.getProcedureItem()?.status === a.dL.StatusEnum.StartedProtocol;
  }
  const ho = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => gt === a.dL.StatusEnum.StartedProtocol,
      getNextActions: _e => [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, (gt, ni) => Js(_e) ? (0, b.of)(_e) : _e.getService().deactivateProcedure(ni?.code || "").pipe((0, A.w)(() => _e.clearTemporaryMedicalEntries()))), Js(_e) && _e.assignmentCommand(it.EXECUTING.DeleteResultDocumentCommand, () => _e.getMedicalEntry().getEhr().getMedicalEntry(rs(_e)?.uid).pipe((0, A.w)(gt => gt.delete())).pipe((0, O.U)(() => _e))), _e.entryCommand(it.EXECUTING.ExecuteCommand, gt => gt.save()), _e.entryCommand(it.EXECUTING.SaveCommand, gt => gt.save())].filter(Boolean)
    }),
    uo = it => ({
      code: it.EXECUTING.code,
      name: it.EXECUTING.name,
      matchState: (_e, gt) => gt === a.dL.StatusEnum.Started,
      getNextActions: _e => [_e.assignmentCommand(it.EXECUTING.UndoExecutingCommand, (gt, ni) => _e.getService().deactivateProcedure(ni?.code || "").pipe((0, A.w)(() => _e.clearTemporaryMedicalEntries()))), _e.entryCommand(it.EXECUTING.ExecuteCommand, gt => gt.save())].filter(Boolean)
    }),
    Yt = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt) => gt === it.COMPLETED.code,
      getNextActions: _e => [_e.assignmentCommand(it.COMPLETED.DeprecateCompletedCommand, (gt, ni) => {
        if (!ni) return (0, Me._)(() => new Error("Not found procedureItem"));
        const So = Ps(ni, _e.getAssignmentActions());
        return _e.getMedicalEntry().getEhr().getMedicalEntry(So.uid).pipe((0, A.w)(Er => function ri(it) {
          return ["STARTED_PROTOCOL", "COMPLETED_PROTOCOL"].includes(it?.status);
        }(ni) ? Er.save() : Er.save().pipe((0, A.w)(() => Er.delete())))).pipe((0, O.U)(() => _e));
      })]
    }),
    jt = it => ({
      code: it.CANCELLING.code,
      name: it.CANCELLING.name,
      matchState: (_e, gt) => gt === it.CANCELLING.code,
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLING.UndoCancellingCommand, (gt, ni) => _e.getService().rollbackCancellingProcedure(ni?.code || "")), _e.entryCommand(it.CANCELLING.CancelCommand, gt => gt.sign())]
    }),
    hn = it => ({
      code: it.CANCELLED.code,
      name: it.CANCELLED.name,
      matchState: (_e, gt) => gt === it.CANCELLED.code,
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLED.DeprecateCancelledCommand, (gt, ni) => {
        if (!ni) return (0, Me._)(() => new Error("Not found procedureItem"));
        const So = Ps(ni, _e.getAssignmentActions());
        return _e.getMedicalEntry().getEhr().getMedicalEntry(So.uid).pipe((0, A.w)(Er => Er.delete()), (0, O.U)(() => _e));
      })]
    }),
    tn = it => ({
      code: it.NOT_COMPLETED.code,
      name: it.NOT_COMPLETED.name,
      matchState: (_e, gt) => gt === it.NOT_COMPLETED.code,
      getNextActions: _e => [_e.assignmentCommand(it.NOT_COMPLETED.DeprecateCancelledCommand, (gt, ni) => {
        if (!ni) return (0, Me._)(() => new Error("Not found procedureItem"));
        const So = Ps(ni, _e.getAssignmentActions());
        return _e.getMedicalEntry().getEhr().getMedicalEntry(So.uid).pipe((0, A.w)(Er => Er.delete()), (0, O.U)(() => _e));
      })]
    }),
    di = {
      INIT: G.CO.INIT,
      InitCommand: G.CO.InitCommand,
      ASSIGNED: {
        code: G.CO.ASSIGNED.code,
        name: G.CO.ASSIGNED.name,
        CancellingCommand: G.CO.ASSIGNED.CancellingCommand,
        StartCommand: G.CO.ASSIGNED.StartCommand,
        StartCommandMark: {
          ...G.CO.ASSIGNED.StartCommand,
          code: "StartCommandMark"
        }
      },
      CANCELLED: {
        ...G.CO.CANCELLED,
        DeprecateCancelledCommand: {
          ...G.CO.CANCELLED.DeprecateCancelledCommand,
          name: "Восстановить",
          behaviour: Mt.k.Danger
        }
      },
      COMPLETED: {
        code: G.CO.COMPLETED.code,
        name: G.CO.COMPLETED.name,
        DeprecateCompletedCommand: {
          ...G.CO.COMPLETED.DeprecateCompletedCommand,
          name: "Отменить выполнение",
          stateValue: f.$W.scheduled,
          stepCode: "at0034",
          behaviour: Mt.k.Danger
        }
      },
      EXECUTING: {
        ...G.CO.EXECUTING,
        ExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          medicalEntry: {
            code: "t_execute_procedure",
            name: "Выполнение процедуры/манипуляции",
            templateId: "openEHR-EHR-COMPOSITION.t_current_procedure.v0"
          },
          stepCode: "at8888",
          stateValue: f.$W.completed,
          reuseMedicalEntry: !0
        },
        SaveCommand: {
          ...G.CO.EXECUTING.SaveCommand,
          stepCode: "at8888",
          stateValue: f.$W.active
        }
      },
      EXECUTING_WITH_MARK: {
        code: G.CO.EXECUTING.code,
        name: G.CO.EXECUTING.name,
        UndoExecutingCommand: {
          ...G.CO.EXECUTING.UndoExecutingCommand
        },
        ExecuteCommand: {
          ...G.CO.EXECUTING.ExecuteCommand,
          medicalEntry: {
            code: "t_execute_procedure",
            name: "Выполнение процедуры/манипуляции",
            templateId: "openEHR-EHR-COMPOSITION.t_current_procedure.v0"
          },
          stepCode: "at8888",
          stateValue: f.$W.completed,
          reuseMedicalEntry: !0
        }
      },
      CANCELLING: {
        ...G.CO.CANCELLING,
        CancelCommand: {
          ...G.CO.CANCELLING.CancelCommand,
          name: "Отменить",
          medicalEntryCode: "t_unassign_procedure",
          stepCode: "at8888",
          stateValue: f.$W.completed,
          to: [G.DN.CANCELLED]
        }
      },
      NOT_COMPLETED: {
        code: "NOT_COMPLETED",
        name: "Не выполнено",
        DeprecateCancelledCommand: {
          name: "Восстановить",
          code: "DeprecateCancelledCommand",
          behaviour: Mt.k.Danger,
          to: [G.DN.EDITING, G.DN.ASSIGNED],
          visualisationFlags: ["all"]
        }
      }
    },
    Gn = it => ({
      code: it.ASSIGNED.code,
      name: it.ASSIGNED.name,
      matchState: (_e, gt) => gt === it.ASSIGNED.code,
      getNextActions: _e => [_e.assignmentCommand(it.ASSIGNED.CancellingCommand, (gt, ni) => _e.getService().cancellingScheduleItem(ni?.code || "")), _e.assignmentCommand(it.ASSIGNED.PostponeCommand, (gt, ni) => _e.getService().postpone(ni?.code || "")), _e.entryCommand(it.ASSIGNED.ExecuteCommand, gt => gt.sign())]
    }),
    dn = it => ({
      code: it.COMPLETED.code,
      name: it.COMPLETED.name,
      matchState: (_e, gt) => gt === it.COMPLETED.code,
      getNextActions: _e => [_e.assignmentCommand(it.COMPLETED.DeprecateCompletedCommand, (gt, ni) => ni && ni.resultCompositionUid ? _e.getMedicalEntry().getEhr().getMedicalEntry(ni.resultCompositionUid).pipe((0, A.w)(So => So.delete())).pipe((0, O.U)(() => gt)) : (0, Me._)(() => new Error("Not found medItem")))]
    }),
    wo = it => ({
      code: it.CANCELLING.code,
      name: it.CANCELLING.name,
      matchState: (_e, gt) => gt === it.CANCELLING.code,
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLING.UndoCancellingCommand, (gt, ni) => _e.getService().rollbackCancellingScheduleItem(ni?.code || "")), _e.entryCommand(it.CANCELLING.CancelCommand, gt => gt.sign())]
    }),
    Ro = it => ({
      code: it.CANCELLED.code,
      name: it.CANCELLED.name,
      matchState: (_e, gt) => gt === it.CANCELLED.code,
      getNextActions: _e => [_e.assignmentCommand(it.CANCELLED.DeprecateCancelledCommand, (gt, ni) => ni && ni.resultCompositionUid ? _e.getMedicalEntry().getEhr().getMedicalEntry(ni.resultCompositionUid).pipe((0, A.w)(So => So.delete()), (0, O.U)(() => gt)) : (0, Me._)(() => new Error("Not found medItem")))]
    }),
    _r = it => ({
      code: it.POSTPONED.code,
      name: it.POSTPONED.name,
      matchState: (_e, gt) => gt === it.POSTPONED.code,
      getNextActions: _e => [_e.assignmentCommand(it.POSTPONED.DeprecatePostponedCommand, (gt, ni) => _e.getService().rollbackPostpone(ni?.code || "")), _e.entryCommand(it.POSTPONED.ExecuteCommand, gt => gt.sign())]
    }),
    ma = (it, _e) => {
      switch (it) {
        case j.v.CareCase:
          return (it => {
            const _e = {};
            Y(_e, Je), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                ADMISSION: Xt(gt),
                HOSPITALIZED: Nn(gt),
                DECLINED: yi(gt),
                DISCHARGING: Pi(gt),
                DISCHARGED: Ii(gt),
                CANCELLED: co(gt)
              }
            };
          })(_e);
        case j.v.Procedure:
          return (it => {
            const _e = {};
            Y(_e, Fi), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(_e),
                CREATED: mt(_e),
                EDITING: Rn(gt),
                DELETED: ut(_e),
                ASSIGNED: Wt(gt),
                CANCELLING: us(gt),
                CANCELLED: oi(gt),
                EXECUTING: Qo(gt),
                DONE: Kr(gt),
                FINISHING: ra(gt),
                COMPLETED: Fs(gt)
              }
            };
          })(_e);
        case j.v.FinalizingProcedure:
          return (() => {
            const it = di;
            return {
              workflow: it,
              states: {
                ASSIGNED: xa(it),
                EXECUTING: ho(it),
                EXECUTING_WITH_MARK: uo(it),
                COMPLETED: Yt(it),
                CANCELLING: jt(it),
                CANCELLED: hn(it),
                NOT_COMPLETED: tn(it)
              }
            };
          })();
        case j.v.SingleProcedure:
          return (() => {
            const it = Oi;
            return {
              workflow: it,
              states: {
                ASSIGNED: xa(it),
                EXECUTING: ho(it),
                EXECUTING_WITH_MARK: uo(it),
                COMPLETED: Yt(it),
                CANCELLING: jt(it),
                CANCELLED: hn(it),
                NOT_COMPLETED: tn(it)
              }
            };
          })();
        case j.v.Consultation:
          return (it => {
            const _e = {};
            Y(_e, Jo), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(gt),
                CREATED: mt(gt),
                EDITING: Ct(gt),
                DELETED: ut(gt),
                ASSIGNED: Se(gt),
                CANCELLING: fr(gt),
                CANCELLED: Rt(gt),
                NOT_COMPLETED: pt(gt),
                EXECUTING: Dt(gt),
                COMPLETED: Dn(gt)
              }
            };
          })(_e);
        case j.v.Lab:
          return (it => {
            const _e = {};
            Y(_e, In), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(gt),
                CREATED: mt(gt),
                EDITING: Ct(gt),
                DELETED: ut(gt),
                ASSIGNED: Se(gt),
                REGISTERED: bi(gt),
                CANCELLING: st(gt),
                CANCELLED: Rt(gt),
                EXECUTING: To(gt),
                COMPLETED: q(gt),
                DONE_NO_RESULTS: ui(gt)
              }
            };
          })(_e);
        case j.v.Pathologist:
          return (it => {
            const _e = {};
            Y(_e, fi), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(gt),
                CREATED: mt(gt),
                EDITING: Ct(gt),
                DELETED: ut(gt),
                ASSIGNED: Se(gt),
                CANCELLING: st(gt),
                CANCELLED: Rt(gt),
                EXECUTING: ti(gt),
                COMPLETED: q(gt)
              }
            };
          })(_e);
        case j.v.Instrumental:
          return (it => {
            const _e = {};
            Y(_e, vt), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(gt),
                CREATED: mt(gt),
                EDITING: Ct(gt),
                DELETED: ut(gt),
                ASSIGNED: an(gt),
                CANCELLING: st(gt),
                CANCELLED: Rt(gt),
                READY_TO_DESCRIBE: Qn(gt),
                DESCRIBING: zn(gt),
                EXECUTING: $t(gt),
                COMPLETED: li(gt),
                NOT_COMPLETED: Mn(gt)
              }
            };
          })(_e);
        case j.v.Med:
          return (it => {
            const _e = {};
            Y(_e, qn), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(_e),
                CREATED: mt(_e),
                EDITING: Ct(_e),
                DELETED: ut(_e),
                ABORTED: Xn(gt),
                ASSIGNED: Pr(gt),
                CANCELLING: Yo(gt),
                CANCELLED: oo(gt),
                EXECUTING: Di(gt),
                COMPLETED: Ci(gt)
              }
            };
          })(_e);
        case j.v.SingleMed:
          return (() => {
            const it = Eo;
            return {
              workflow: it,
              states: {
                ASSIGNED: Gn(it),
                COMPLETED: dn(it),
                CANCELLING: wo(it),
                CANCELLED: Ro(it),
                POSTPONED: _r(it)
              }
            };
          })();
        case j.v.Operation:
          return (it => {
            const _e = {};
            Y(_e, ji), Y(_e, it);
            const gt = _e;
            return {
              workflow: gt,
              states: {
                INIT: Ue(gt),
                CREATED: mt(gt),
                EDITING: jo(gt),
                DELETED: ut(gt),
                ASSIGNED: Se(gt),
                CANCELLING: lo(gt),
                CANCELLED: Rt(gt),
                EXECUTING: Go(gt),
                COMPLETED: q(gt)
              }
            };
          })(_e);
        default:
          return ((it, _e) => {
            const gt = {};
            Y(gt, it), Y(gt, _e);
            const ni = gt;
            return {
              workflow: ni,
              states: {
                INIT: Ue(ni),
                CREATED: mt(ni),
                EDITING: Ct(ni),
                ASSIGNED: Se(ni),
                CANCELLING: st(ni),
                CANCELLED: Rt(ni),
                EXECUTING: Et(ni),
                COMPLETED: q(ni)
              }
            };
          })(G.CO, _e);
      }
    };
  class Xs {
    constructor(_e) {
      this.params = _e;
    }
    showInInterface(_e) {
      return fe(_e, this.params);
    }
    setMedicalEntry(_e) {
      this.entry = _e;
    }
    isValid() {
      if (this.entry) {
        const _e = this.entry.getChildren().filter(gt => !gt.isEmpty());
        return _e.length ? _e.every(gt => gt.isDraft() && void 0 !== gt.isDraftValid() ? gt.isDraftValid() : gt.isValid() && !1 !== gt.getLocalValid()) : this.entry.isValid();
      }
      return !0;
    }
    isEmpty() {
      return !this.entry || this.entry.isEmpty();
    }
    getIconSettings() {
      return this.params.iconSettings;
    }
  }
  class Ks extends Xs {
    constructor(_e, gt, ni, So) {
      super(ni), this.assignment = _e, this.context = gt, this.afterRunCb = So, this.type = ye.Entry, this.behaviour = ni.behaviour, this.code = ni.code, this.hidden = ni.hidden;
    }
    getMedicalEntry() {
      return void 0 !== this.entry ? (0, b.of)(this.entry) : this.initMedicalEntry().pipe((0, I.b)(_e => {
        this.setActionState(_e), this.setMedicalEntry(_e), this.assignment.populateMedicalEntry(this.params, _e);
      }));
    }
    getName() {
      return this.params.name;
    }
    getIcon() {
      return this.params.to.length > 0 ? this.params.to[0] : void 0;
    }
    run() {
      return this.getMedicalEntry().pipe((0, A.w)(_e => this.afterRunCb(_e))).pipe((0, O.U)(() => this));
    }
    setActionState(_e) {
      _e.getRoot().asType(C.A.IAssignmentActionEntry)?.setActionState(this.params);
    }
    lastAndCurrentActionIsEqual() {
      const _e = this.assignment.getLastAction();
      return _e.stateValue === f.$W[this.params.stateValue] && _e.stepCode === this.params.stepCode;
    }
    needReuseMedicalEntry() {
      const _e = this.assignment.getLastAction();
      return !!this.params.reuseMedicalEntry && v.B.getUid(_e.uid) !== v.B.getUid(_e.instructionId);
    }
    get entryStatus() {
      return this.assignment.getAssignmentState().code;
    }
    initMedicalEntry() {
      const _e = this.assignment.getLastAction();
      return this.needReuseMedicalEntry() || this.lastAndCurrentActionIsEqual() ? this.assignment.getMedicalEntry().getEhr().getMedicalEntry(_e.uid, this.params.medicalEntry) : this.assignment.getMedicalEntry().getEhr().createMedicalEntry(this.params.medicalEntryCode || "", this.context.getContext().careCaseId?.id, this.params.medicalEntry, this.assignment);
    }
  }
  class ba extends u._ {
    constructor(_e, gt) {
      super(gt), this.actions = [], this.temporaryMedicalEntries = [], this.addHours = (ni, So) => {
        const Er = new Date(ni);
        return Er.setTime(ni.getTime() + 60 * So * 60 * 1e3), Er;
      }, this.context = _e;
    }
    isValid() {
      return this.getLifecycleState() === L.u.COMPLETE || super.isValid() && !this.getMarks().hasMark(T.T.UNSEEN);
    }
    getLocalValid() {
      return !(void 0 !== super.getLocalValid() && !super.getLocalValid() || this.getMarks().hasMark(T.T.UNSEEN));
    }
    markAsExecutor() {
      this.service.markAsExecutor();
    }
    getType() {
      return C.A.IAssignmentEntry;
    }
    updateBusinessState() {
      return this.loadBusinessState();
    }
    getBusinessState() {
      return this.state;
    }
    getNextCommands() {
      return this.getAssignmentState().getNextActions(this);
    }
    prepareTags() {
      return this.getSettings()?.tags ?? void 0;
    }
    getTitle() {
      try {
        const _e = this.getComposition().get(this.assignmentTemplate.assignmentCodePath)?.getValue() ?? "";
        if (_e) return _e;
      } catch {}
      if (this.entry.getComposition()) {
        const _e = this.entry.getComposition().find(new f.XA(f.B8.INSTRUCTION))[0];
        if (_e && _e.getNarrative() && _e.getNarrative()?.getValue()) return _e.getNarrative()?.getValue() ?? "";
      }
      return this.entry.getTitle() || this.entry.getSettings().name;
    }
    getAssignmentUid() {
      return v.B.getUid(this.getUid());
    }
    getService() {
      return this.service;
    }
    getAssignmentCode() {
      try {
        return this.getComposition().get(this.assignmentTemplate.assignmentCodePath)?.getCode();
      } catch {}
    }
    getDuplicateAssignments() {
      return (0, b.of)([]);
    }
    cito() {
      if (this.assignmentTemplate.citoPath) try {
        return this.getComposition().get(this.assignmentTemplate.citoPath)?.getValue() ?? "";
      } catch {}
    }
    getPlannedDate() {
      if (this.assignmentTemplate.planedDatePath) try {
        return this.getComposition().get(this.assignmentTemplate.planedDatePath)?.getString() ?? "";
      } catch {}
    }
    getGoal() {
      if (this.assignmentTemplate.goalPath) try {
        return this.getComposition().get(this.assignmentTemplate.goalPath)?.getValue() ?? "";
      } catch {}
    }
    getAssignmentInfo() {
      return this.assignmentInfo;
    }
    getAssignmentState() {
      const _e = this.assignmentStates.workflow.InitCommand.to[0];
      return this.getLastAction() && Object.values(this.assignmentStates.states).reverse().find(ni => ni.matchState(this.getLastAction(), this.getBusinessState(), this)) || this.assignmentStates.states[_e];
    }
    getAssignmentActions() {
      return this.actions;
    }
    getLastAction() {
      return this.actions[0];
    }
    draft(_e, gt) {
      return this.inProgress() ? (0, b.of)(this) : super.draft(_e, gt);
    }
    attach(_e) {
      this.previousMedicalEntry = this.context.getUid(), this.context = _e, super.attach(_e);
    }
    complete(_e) {
      return void 0 !== this.previousMedicalEntry && this.previousMedicalEntry !== this.context.getUid() ? this.linkCurrentActivity(_e) : (this.linkActivity(), super.complete(_e));
    }
    incomplete(_e) {
      return void 0 !== this.previousMedicalEntry && this.previousMedicalEntry !== this.context.getUid() ? this.linkCurrentActivity(_e) : this.inProgress() ? (0, b.of)(this) : (this.linkActivity(), super.incomplete(_e));
    }
    loadBusinessState() {
      return this.getLifecycleState() && this.service && !this.context.getEhr().notUseServices() ? this.service.get().pipe((0, I.b)(_e => {
        this.state = _e?.state, this.assignmentInfo = _e;
      }), (0, O.U)(() => this), (0, N.K)(() => (0, b.of)(this))) : (0, b.of)(this);
    }
    api() {
      return this.context.getApis().ehrApi.getStorage(this.getMedicalEntry().getEhr().getStorage());
    }
    loadAssignmentActions() {
      let _e = [this.assignmentTemplate.actionArchetypeId, ...(this.assignmentTemplate.actionArchetypeIds || [])].filter(ni => void 0 !== ni).map(ni => ni);
      _e = _e.filter((ni, So) => _e.indexOf(ni) === So);
      const gt = this.getMedicalEntry().getMoId();
      return 0 === _e.length ? (0, b.of)([]) : (0, b.of)(_e).pipe((0, A.w)(() => (0, E.a)(_e.map(ni => this.api().view(this.context.getEhrId(), this.getMedicalEntry().getEhr().getStorage().views?.assignmentActionView || "AssignmentActionView", {
        instructionId: v.B.getUid(this.getUid()),
        actionArchetypeId: ni,
        ...(gt ? {
          moId: gt
        } : {})
      })))), (0, O.U)(ni => ni.flat().sort(this.sort.bind(this))));
    }
    sort(_e, gt) {
      return _e.timeCommitted > gt.timeCommitted ? -1 : _e.timeCommitted < gt.timeCommitted ? 1 : 0;
    }
    linkActivity() {
      const _e = this.getComposition(),
        gt = _e.find(new f.XA(f.B8.INSTRUCTION))[0];
      gt.getId() || gt.setId(v.B.getUid(this.getUid()));
      const ni = _e.find(new f.XA(f.B8.ACTION))[0];
      ni.link(gt, !0), ni.setActionState(this.assignmentStates.workflow.InitCommand.stateValue), ni.getStep()?.setCode(this.assignmentStates.workflow.InitCommand.stepCode);
    }
    load() {
      return void 0 === this.getLifecycleState() ? super.load().pipe((0, A.w)(() => this.loadAssignment())).pipe((0, I.b)(() => {
        this.linkActivity();
      })) : super.load().pipe((0, A.w)(() => this.loadAssignment())).pipe((0, A.w)(() => this.loadAssignmentActions())).pipe((0, O.U)(_e => (this.actions = _e, this)));
    }
    entryCommand(_e, gt) {
      return new Ks(this, this.context, _e, gt);
    }
    assignmentCommand(_e, gt) {
      return new ae(_e, gt, this);
    }
    getMedicalEntries() {
      const _e = this.getMedicalEntry().getEhr();
      return (0, b.of)(this.actions.filter(gt => v.B.getUid(gt.uid) !== v.B.getUid(this.getUid())).map(gt => gt.uid)).pipe((0, A.w)(gt => 0 === gt.length ? (0, b.of)([]) : (0, E.a)(gt.map(ni => _e.getMedicalEntryByComposition(ni, this.getMedicalEntry().getMoId())))));
    }
    getAssignments() {
      return new ke(this.context.getApis().settingsApi).getSettings().pipe((0, O.U)(_e => _e.filter(gt => gt.type === this.assignmentTemplate.type)));
    }
    setAssignment(_e) {
      return this.getComposition().get(this.assignmentTemplate.assignmentCodePath)?.setCodedText({
        code: _e.code,
        text: _e.name
      }), this.assignmentSetting = _e, this.loadAssignment();
    }
    findCompositionByUid() {
      return this.service.get();
    }
    getSettingsForAction(_e) {
      if (!this.assignmentStates) return;
      const gt = (0, G.Dd)(this.assignmentStates.workflow, _e);
      return gt ? gt.medicalEntry : void 0;
    }
    getAssignmentUidPath() {
      return this.assignmentTemplate.assignmentUidPath || "";
    }
    getStateValue() {
      const _e = this.getLastAction();
      if (_e && Object.keys(f.$W).includes(_e.stateValue)) return f.$W[_e.stateValue];
    }
    getPresentation() {
      return {
        ...super.getPresentation(),
        assignmentType: this.assignmentTemplate?.type,
        cito: this.cito(),
        assignmentCode: this.getAssignmentCode(),
        state: this.getAssignmentState(),
        title: this.getTitle(),
        goal: this.getGoal(),
        plannedDate: this.getPlannedDate(),
        commands: (0, b.of)(this).pipe((0, O.U)(() => this.getNextCommands())),
        medicalEntries: this.getAssignmentEntries()
      };
    }
    inProgress() {
      const _e = this.getAssignmentState();
      return [G.CO.INIT.code, G.CO.CREATED.code, G.CO.EDITING.code, G.CO.ASSIGNED.code].indexOf(_e.code) < 0;
    }
    delete(_e) {
      return this.inProgress() ? this.detach(_e) : super.delete(_e);
    }
    getWorkplaceId() {
      return new R.mS(this.entry.getComposition().getContext()).подробности_контекста().автор_информации().идентификатор_исполнения_должности_медработника().getIdentifier().assigner;
    }
    getAssignmentType() {
      return this.assignmentTemplate.type;
    }
    populateMedicalEntry(_e, gt) {
      this.addToTemporaryMedicalEntries(gt);
    }
    addToTemporaryMedicalEntries(_e) {
      this.temporaryMedicalEntries.push(_e);
    }
    clearTemporaryMedicalEntries() {
      return (0, h.D)(this.temporaryMedicalEntries.filter(_e => _e.status() === y.j.INIT).map(_e => _e.revertChanges(!0))).pipe((0, x.d)([]), (0, I.b)(_e => {
        _e.forEach(gt => this.deleteTemporaryMedicalEntry(gt));
      }));
    }
    deleteTemporaryMedicalEntry(_e) {
      const gt = this.temporaryMedicalEntries.findIndex(ni => ni === _e);
      this.temporaryMedicalEntries.splice(gt, 1);
    }
    deleteActions() {
      const _e = this.getAssignmentActions().filter(So => v.B.getUid(So.instructionId) !== v.B.getUid(So.uid) && "at0008" !== So.stepCode),
        gt = this.getMedicalEntry().getEhr(),
        ni = _e.map(So => gt.getMedicalEntry(So.uid));
      return (0, E.a)(ni).pipe((0, A.w)(So => (0, E.a)(So.map(Er => Er.save()))), (0, A.w)(So => (0, E.a)(So.map(Er => Er.delete()))), (0, O.U)(() => !0), (0, N.K)(() => (0, b.of)(!1)));
    }
    loadAssignment() {
      return new J.s(this.context.getApis().settingsApi).getSetting(this.getTemplateId()).pipe((0, I.b)(_e => this.assignmentTemplate = _e), (0, I.b)(() => {
        this.service = this.context.getApis().assignmentApi.createService({
          userContext: this.context.getUserContext()
        }, this.assignmentTemplate.type).service(v.B.getUid(this.getUid()));
      })).pipe((0, A.w)(() => {
        const gt = this.assignmentTemplate.type !== j.v.Med && this.assignmentTemplate.assignmentCodePath ? this.getComposition().get(this.assignmentTemplate.assignmentCodePath)?.getCode() : void 0;
        return gt ? new ke(this.context.getApis().settingsApi).getSetting(gt).pipe((0, N.K)(() => (0, b.of)(void 0))).pipe((0, I.b)(ni => {
          ni ? (this.assignmentSetting = ni, this.assignmentStates = ma(ni.type, ni.assignmentConfig)) : this.assignmentStates = ma(this.assignmentTemplate.type, {});
        }), (0, A.w)(() => this.loadBusinessState()), (0, O.U)(() => this)) : (this.assignmentStates = ma(this.assignmentTemplate.type, {}), (0, b.of)(this).pipe((0, A.w)(() => this.loadBusinessState()), (0, O.U)(() => this)));
      }));
    }
    detach(_e) {
      return (this.getComposition().getLinks().filter(Er => "EHR" === Er.getValue()?.type && Er.getValue()?.target === B.S)[0] || this.entry.getComposition().addLink()).setValue({
        target: B.S,
        type: "EHR",
        meaning: "Корневая композиция"
      }), this.linkCurrentActivity(_e);
    }
    linkCurrentActivity(_e) {
      const gt = this.getComposition(),
        ni = gt.find(new f.XA(f.B8.INSTRUCTION))[0],
        So = gt.find(new f.XA(f.B8.ACTION))[0];
      So.link(ni, !0);
      const Er = this.getLastAction();
      Er && (Object.keys(f.$W).includes(Er.stateValue) ? So.setActionState(f.$W[Er.stateValue]) : console.error(`\u041d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 stateValue: ${Er.stateValue}`), So.getStep()?.setCode(Er.stepCode));
      const Br = this.getLifecycleState();
      if (Br) switch (Br) {
        case L.u.COMPLETE:
          return super.complete(_e);
        case L.u.INCOMPLETE:
          return super.incomplete(_e);
        default:
          return (0, b.of)(this);
      }
      return (0, b.of)(this);
    }
    getAssignmentEntries() {
      return (0, b.of)(this.actions.filter(_e => v.B.getUid(_e.uid) !== v.B.getUid(this.getUid()))).pipe((0, A.w)(_e => 0 === _e.length ? (0, b.of)([]) : (0, E.a)(_e.map(gt => this.getMedicalEntry().getEhr().getMedicalEntryByComposition(gt.uid, this.getMedicalEntry().getMoId()))).pipe((0, O.U)(gt => gt.filter(ni => ni.getUid() !== this.getMedicalEntry().getUid())))));
    }
  }
  class qs {
    constructor(_e, gt, ni, So, Er, Br) {
      this.runCb = gt, this.assignmentEntry = ni, this.procedureAssignment = So, this.procedureItem = Er, this.partCancelProcedures = Br, this.type = ye.Business, this.behaviour = _e.behaviour, this.code = _e.code, this.hidden = _e.hidden, this.assignmentCommand = new ae(_e, gt, ni);
    }
    showInInterface(_e) {
      return this.assignmentCommand.showInInterface(_e);
    }
    getIcon() {
      return this.assignmentCommand.getIcon();
    }
    getName() {
      return this.assignmentCommand.getName();
    }
    getIconSettings() {
      return this.assignmentCommand.getIconSettings();
    }
    getProcedureItem() {
      return this.procedureItem;
    }
    run() {
      return this.runCb(this.procedureAssignment, this.procedureItem, this.partCancelProcedures).pipe((0, A.w)(() => this.assignmentEntry.updateBusinessState())).pipe((0, I.b)(() => {
        this.procedureItem = this.assignmentEntry.getProcedureItem(), this.procedureAssignment = this.assignmentEntry.getAssignment(), this.entryStatus = this.procedureItem?.status;
      }), (0, O.U)(() => this));
    }
  }
  class Ri extends Xs {
    constructor(_e, gt, ni, So, Er, Br) {
      super(ni), this.assignment = _e, this.context = gt, this.afterRunCb = So, this.procedureAssignment = Er, this.procedureItem = Br, this.type = ye.Entry, this.code = ni.code, this.behaviour = ni.behaviour, this.hidden = ni.hidden, this.entryCommand = new Ks(_e, gt, ni, So);
    }
    getMedicalEntry() {
      return void 0 !== this.entry ? (0, b.of)(this.entry) : this.initMedicalEntry().pipe((0, I.b)(_e => {
        this.setMedicalEntry(_e), this.assignment.populateMedicalEntry(this.params, _e);
      }));
    }
    getName() {
      return this.entryCommand.getName();
    }
    getIcon() {
      return this.entryCommand.getIcon();
    }
    getProcedureItem() {
      return this.procedureItem;
    }
    isValid() {
      return this.params.code === G.CO.EXECUTING.SaveCommand.code || !this.entry || this.entry.isValid();
    }
    run() {
      return this.getMedicalEntry().pipe((0, I.b)(_e => {
        this.entryCommand.setActionState(_e);
        const gt = _e.getRoot().getComposition();
        this.procedureItem?.code && Ao.setActionUid(this.procedureItem.code, gt), Ao.setTechnicalActionField(gt);
      }), (0, A.w)(_e => this.afterRunCb(_e, this.procedureAssignment, this.procedureItem)), (0, A.w)(() => this.assignment.updateBusinessState()), (0, I.b)(() => {
        this.procedureItem = this.assignment.getProcedureItem(), this.procedureAssignment = this.assignment.getAssignment(), this.entryStatus = this.procedureItem?.status;
      })).pipe((0, O.U)(() => this));
    }
    lastProcedureActionIsDraft() {
      const _e = this.getLastProcedureAction();
      return !!_e && _e.lifecycleState === L.u.INCOMPLETE.toLowerCase() && this.params.stepCode === _e.stepCode;
    }
    getLastProcedureAction() {
      return this.assignment.getAssignmentActions().find(_e => _e.actionUid === this.procedureItem?.code);
    }
    initMedicalEntry() {
      return this.lastProcedureActionIsDraft() ? this.assignment.getMedicalEntry().getEhr().getMedicalEntry(this.getLastProcedureAction().uid, this.params.medicalEntry) : this.assignment.getMedicalEntry().getEhr().createMedicalEntry(this.params.medicalEntryCode || "", this.context.getContext().careCaseId.id, this.params.medicalEntry, this.assignment).pipe((0, I.b)(_e => {
        this.entryCommand.setActionState(_e);
      }));
    }
  }
  class $o extends ba {
    constructor(_e, gt) {
      super(_e, gt), this.cancelReason = "", this.isCourse = !1, this.isRepeater = !1, this.apiService = _e.getApis().assignmentApi.createService({
        userContext: _e.getUserContext()
      }, j.v.Procedure).service(v.B.getUid(this.getUid()));
    }
    getType() {
      return C.A.IAssignmentEntry;
    }
    getProcedures() {
      return this.assignment?.procedures;
    }
    getDoctorName() {
      return this.assignment?.doctorName || "";
    }
    setProcedureId(_e) {
      this.procedureId = _e, this.changeAssignmentStatesToSingleProcedure();
    }
    getProcedureAssignment() {
      return this.assignment;
    }
    setRoot() {
      this.procedureId = void 0, this.changeAssignmentStatesToRootAssignment();
    }
    setPartCancelProcedures(_e, gt) {
      this.cancelingProcedureIds = _e, this.cancelReason = gt;
    }
    getBusinessState() {
      const _e = this.getProcedureItem();
      return _e ? this.apiService.getStateProcedure(_e) : this.apiService.getStateAssignment(this.assignment);
    }
    entryCommand(_e, gt) {
      return new Ri(this, this.context, _e, gt, this.assignment, this.getProcedureItem());
    }
    assignmentCommand(_e, gt) {
      return new qs(_e, gt, this, this.assignment, this.getProcedureItem(), {
        ids: this.cancelingProcedureIds ?? [],
        cancelReason: this.cancelReason
      });
    }
    getPresentation() {
      return {
        ...super.getPresentation(),
        schedule: this.assignment?.procedures?.map(_e => {
          const gt = [a.MY.StatusEnum.Completed, a.MY.StatusEnum.Cancelled, a.MY.StatusEnum.CompletedProtocol],
            ni = gt.includes(_e.status),
            So = _e.statusHistory?.sort((Er, Br) => M(new Date(Er.updated), new Date(Br.updated)) ? 1 : -1)?.find(Er => gt.includes(Er.status))?.doctorName;
          return {
            ..._e,
            name: this.assignment?.assignmentName,
            executorName: ni ? So : void 0
          };
        }) || []
      };
    }
    getAssignment() {
      return this.assignment;
    }
    getExecutorName(_e) {
      const gt = this.assignment?.procedures;
      return this.assignment && gt && gt.find(ni => ni.code === _e || "")?.executorName || "";
    }
    checkRepeatedProcedures() {
      const _e = this.assignment?.procedures;
      return !(!_e || 1 === _e.length) && (this.isCourse = !0);
    }
    getAssignmentTimeByStatus() {
      return [...(this.assignment?.statusHistory || [])].filter(_e => _e.status === this.assignment?.status).sort((_e, gt) => M(new Date(_e.updated), new Date(gt.updated)) ? -1 : 1)[0]?.updated;
    }
    getCancelReason() {
      return this.cancelReason;
    }
    getProcedureItem() {
      return (this.assignment?.procedures || []).find(_e => _e.code === this.procedureId);
    }
    loadBusinessState() {
      return this.getLifecycleState() && this.apiService && !this.context.getEhr().notUseServices() ? this.service.get().pipe((0, I.b)(_e => {
        this.assignmentInfo = _e;
      }), (0, A.w)(() => this.apiService.getAssignment()), (0, I.b)(_e => {
        this.state = this.apiService.getStateAssignment(_e), this.assignment = _e;
      }), (0, N.K)(_e => (this.getLifecycleState(), (0, b.of)(this))), (0, O.U)(() => this)) : (0, b.of)(this);
    }
    changeAssignmentStatesToRootAssignment() {
      this.assignmentStates = ma(j.v.Procedure, {});
    }
    changeAssignmentStatesToSingleProcedure() {
      this.assignmentStates = ma(1 === this.assignment?.procedures?.length ? j.v.FinalizingProcedure : j.v.SingleProcedure, {});
    }
  }
  class ci extends ba {
    constructor(_e, gt, ni, So) {
      super(_e, gt), this.careCaseService = ni, this.dischargeService = So;
    }
    load() {
      return super.load().pipe((0, I.b)(() => {
        const _e = this.getMedicalEntry().getContext().careCaseId;
        this.careCaseId = _e.id;
      })).pipe((0, A.w)(() => this.getAssignmentState().code === Je.HOSPITALIZED.code ? this.dischargeService.dischargeRequestQuery(this.careCaseId).pipe((0, I.b)(_e => {
        (_e.dischargeRequest.status.code === e.TD.CodeEnum.Opened || _e.dischargeRequest.status.code === e.TD.CodeEnum.Accepted) && (this.state = Je.DISCHARGING.code);
      }), (0, N.K)(_e => 404 === _e.status ? (0, b.of)(this) : (0, Me._)(() => _e)), (0, O.U)(() => this)) : (0, b.of)(this)));
    }
    moveToAdmissionDepartment(_e) {
      const ni = this.getMedicalEntry().getContext().careCaseId.id;
      return this.careCaseService.moveToAdmissionDepartmentCommand(ni, {
        departmentId: _e,
        careCaseId: ni
      });
    }
    cancelDischarging() {
      const _e = {
        careCaseId: this.careCaseId,
        timeCommitted: new Date().toISOString()
      };
      return this.dischargeService.cancelDischargeRequestCommand(_e);
    }
    getCareCaseId() {
      return this.careCaseId;
    }
    startDischarging() {
      const _e = {
        careCaseId: this.careCaseId,
        compositionUid: "",
        dischargeDate: "",
        doctorId: 0,
        doctorName: "",
        timeCommitted: new Date().toISOString()
      };
      return this.dischargeService.updateDischargeRequestCommand(_e);
    }
  }
  var Gi = i(15439);
  class Fn extends ba {
    constructor(_e, gt) {
      super(_e, gt), this.apiService = _e.getApis().assignmentApi.createService({
        userContext: _e.getUserContext()
      }, j.v.Consultation).service(gt.getUid());
    }
    populateMedicalEntry(_e, gt) {
      if (super.populateMedicalEntry(_e, gt), _e.code === Jo.EXECUTING.ExecuteCommand.code) {
        const ni = gt.getRoot().getComposition();
        try {
          const So = ni.get("направление.дата_и_время");
          So?.empty() && So.setValue(Gi()?.format());
        } catch {}
      }
    }
    getAssignment() {
      return this.assignment;
    }
    loadBusinessState() {
      return this.getLifecycleState() ? this.context.getEhr().notUseServices() ? (0, b.of)(this) : this.service.get().pipe((0, I.b)(_e => {
        this.assignmentInfo = _e;
      }), (0, A.w)(() => this.apiService.getAssignment()), (0, I.b)(_e => {
        this.state = this.apiService.getStateAssignment(_e), this.assignment = _e;
      }), (0, N.K)(_e => (this.getLifecycleState(), (0, b.of)(this))), (0, O.U)(() => this)) : (0, b.of)(this);
    }
  }
  var zi = i(2585);
  class Io extends ba {
    constructor(_e, gt) {
      super(_e, gt), this.pathForApparatus = "запрос_на_инструментальное_исследование.запрос_на_инструментальное_исследование.запрос.аппарат.аппарат", this.apiService = _e.getApis().assignmentApi.createService({
        userContext: _e.getUserContext()
      }, j.v.Instrumental).service(gt.getUid());
    }
    getLabProtocolInfo() {
      return this.labProtocolInfo;
    }
    getAssignment() {
      return this.assignment;
    }
    getApparatus() {
      return this.getComposition().get(this.pathForApparatus)?.getValue() ?? "";
    }
    loadInstrumentalInfo() {
      return this.apiService.getAssignment().pipe((0, N.K)(() => (0, b.of)(null)), (0, I.b)(_e => {
        _e && (this.assignment = _e);
      }));
    }
    loadBusinessState() {
      if (!this.getLifecycleState()) return (0, b.of)(this);
      const _e = this.context.getEhr();
      if (this.service && !_e.notUseServices()) {
        const gt = _e.getStorage().views?.risLabProtocolByInstruction || zi.r.risLabProtocolByInstruction;
        return this.loadInstrumentalInfo().pipe((0, A.w)(ni => {
          if (!ni) return (0, b.of)(this);
          this.assignmentInfo = {
            uid: ni.assignmentCompositionUid,
            state: this.apiService.getStateAssignment(ni),
            statusHistory: ni.statusHistory
          }, this.state = this.assignmentInfo.state;
          const So = this.assignment?.labProtocolUid;
          return So ? _e.view(gt, {
            ehrId: _e.getEhrId(),
            labProtocolUid: So
          }).pipe((0, O.U)(Er => (this.labProtocolInfo = Er ? Er[0] : void 0, this)), (0, N.K)(() => (0, b.of)(this))) : (0, b.of)(this);
        }), (0, O.U)(() => this), (0, N.K)(() => (0, b.of)(this)));
      }
      return (0, b.of)(this);
    }
  }
  class gi extends ba {
    constructor(_e, gt) {
      super(_e, gt), this.apiService = _e.getApis().assignmentApi.createService({
        userContext: _e.getUserContext()
      }, j.v.Lab).service(gt.getUid());
    }
    getAssignment() {
      return this.assignment;
    }
    loadBusinessState() {
      return this.getLifecycleState() ? this.context.getEhr().notUseServices() ? (0, b.of)(this) : this.service.get().pipe((0, I.b)(_e => {
        this.assignmentInfo = _e;
      }), (0, A.w)(() => this.apiService.getAssignment()), (0, I.b)(_e => {
        this.state = this.apiService.getStateAssignment(_e), this.assignment = _e;
      }), (0, N.K)(_e => (this.getLifecycleState(), (0, b.of)(this))), (0, O.U)(() => this)) : (0, b.of)(this);
    }
  }
  var Kt = i(19104),
    Vt = i(39300);
  class Pn {
    constructor(_e, gt, ni, So, Er, Br) {
      this.params = _e, this.runCb = gt, this.assignmentEntry = ni, this.medAssignment = So, this.medicationInfoItem = Er, this.additionalData = Br, this.type = ye.Business, this.behaviour = _e.behaviour, this.code = _e.code, this.hidden = _e.hidden, this.assignmentCommand = new ae(_e, gt, ni);
    }
    showInInterface(_e) {
      return this.assignmentCommand.showInInterface(_e);
    }
    getIcon() {
      return this.assignmentCommand.getIcon();
    }
    getName() {
      return this.assignmentCommand.getName();
    }
    getIconSettings() {
      return this.params.iconSettings;
    }
    run() {
      return this.runCb(this.medAssignment, this.medicationInfoItem, this.additionalData).pipe((0, A.w)(() => this.assignmentEntry.updateBusinessState()), (0, I.b)(() => this.entryStatus = this.assignmentEntry.getAssignmentState().code)).pipe((0, O.U)(() => this));
    }
  }
  class pi extends Xs {
    constructor(_e, gt, ni, So, Er, Br) {
      super(ni), this.assignment = _e, this.context = gt, this.afterRunCb = So, this.medAssignment = Er, this.medicationInfoItem = Br, this.type = ye.Entry, this.code = ni.code, this.behaviour = ni.behaviour, this.entryCommand = new Ks(_e, gt, ni, So);
    }
    getMedicalEntry() {
      return void 0 !== this.entry ? (0, b.of)(this.entry) : this.initMedicalEntry().pipe((0, I.b)(_e => {
        try {
          this.setActionState(_e);
        } catch {}
        this.setMedicalEntry(_e);
      }));
    }
    getName() {
      return this.entryCommand.getName();
    }
    getIcon() {
      return this.entryCommand.getIcon();
    }
    get entryStatus() {
      return this.entryCommand.entryStatus;
    }
    setActionState(_e) {
      _e.getRoot().asType(C.A.IAssignmentActionEntry)?.setActionState(this.params);
    }
    run() {
      return this.getMedicalEntry().pipe((0, I.b)(_e => {
        this.entryCommand.setActionState(_e);
        const gt = _e.getRoot().getComposition();
        if (this.medicationInfoItem?.code) {
          const ni = this.assignment.getAssignmentTemplateSetting();
          Fo.fillComposition({
            setting: ni,
            composition: gt,
            code: this.medicationInfoItem.code,
            assignment: this.medAssignment,
            medicationInfo: this.medicationInfoItem
          });
        }
      }), (0, A.w)(_e => this.afterRunCb(_e, this.medAssignment, this.medicationInfoItem))).pipe((0, O.U)(() => this));
    }
    initMedicalEntry() {
      return this.assignment.getMedicalEntry().getEhr().createMedicalEntry(this.params.medicalEntryCode || "", this.context.getContext().careCaseId.id, this.params.medicalEntry, this.assignment).pipe((0, I.b)(_e => {
        this.entryCommand.setActionState(_e);
      }));
    }
  }
  class Mi extends ba {
    constructor(_e, gt) {
      super(_e, gt), this.cancelReason = "", this.apiService = _e.getApis().assignmentApi.createService({
        userContext: _e.getUserContext()
      }, j.v.Med).service(gt.getUid());
    }
    setScheduleItemId(_e) {
      this.scheduleItemId = _e, this.changeAssignmentStatesToSingle();
    }
    setPartCancelData(_e, gt) {
      this.partCodes = _e, this.cancelReason = gt;
    }
    setScheduleItemIds(_e) {
      1 === _e.length && (this.scheduleItemId = _e[0], this.changeAssignmentStatesToSingle()), this.partCodes = _e;
    }
    getMedicationDispenses() {
      return this.assignment?.medicationDispenses || [];
    }
    getMedications() {
      return this.assignment?.medications || [];
    }
    getBusinessState() {
      const _e = this.getMedicationInfoItem();
      return _e ? this.apiService.getStateMedicationInfo(_e) : this.apiService.getStateAssignment(this.assignment);
    }
    entryCommand(_e, gt) {
      return new pi(this, this.context, _e, gt, this.assignment, this.getMedicationInfoItem());
    }
    assignmentCommand(_e, gt) {
      return new Pn(_e, gt, this, this.assignment, this.getMedicationInfoItem(), {
        cancelReason: this.cancelReason,
        ids: this.partCodes
      });
    }
    getTitle() {
      const _e = this.getMedications();
      if (_e.length) return _e.map(gt => gt.otnName).join(" + ");
      try {
        return this.getComposition().get("запрос_на_медикаментозное_лечение.запрос_на_медикаментозное_лечение.current_activity").getMany("медикамент").map(ni => ni.get("наименование_медикамента")?.getValue()).filter(ni => ni).join(" + ") || this.getSettings().name;
      } catch {
        return this.getSettings().name;
      }
    }
    getAssignmentTemplateSetting() {
      return this.assignmentTemplate;
    }
    getPresentation() {
      return {
        ...super.getPresentation(),
        schedule: this.assignment?.medicationDispenses?.map(_e => {
          const gt = [Kt.dW.StatusEnum.Completed, Kt.dW.StatusEnum.Cancelled],
            ni = gt.includes(_e.status),
            So = _e.statusHistory?.sort((Er, Br) => M(new Date(Er.updated || ""), new Date(Br.updated || "")) ? 1 : -1).find(Er => !!Er.status && gt.includes(Er.status))?.doctorName;
          return {
            ..._e,
            name: this.assignment?.assignmentName ?? "",
            executorName: ni ? So : void 0
          };
        }) || []
      };
    }
    getAssignment() {
      return this.assignment;
    }
    getAssignmentTimeByStatus() {
      return [...(this.assignment?.statusHistory || [])].filter(_e => _e.status === this.assignment?.status).sort((_e, gt) => M(new Date(_e.updated), new Date(gt.updated)) ? -1 : 1)[0]?.updated;
    }
    getCancelReason() {
      return this.cancelReason;
    }
    getMnnItems() {
      return this.entry.getComposition().getMany(this.getAssigmentTemplateSetting().mnnPath).map(_e => _e?.get(this.getAssigmentTemplateSetting().subMnnPath)?.getValue() ?? "");
    }
    getDuplicateAssignments() {
      const _e = this.getLocalDuplicates(),
        gt = this.context.getEhr(),
        ni = gt.getStorage().views?.medAssignmentDuplicatesView || "DuplicateMedAssignmentEntriesView",
        So = new Date(),
        Er = this.assignmentTemplate.duplicateHours || 24;
      return gt.view(ni, {
        ehrId: gt.getEhrId(),
        from: this.addHours(So, -1 * Er).toISOString(),
        to: this.addHours(So, Er).toISOString(),
        mnn: this.getMnnItems(),
        workplaceId: this.context.getUserContext().getWorkplaceId()
      }).pipe((0, O.U)(Br => Br.filter(vr => v.B.getUid(vr.uid) !== v.B.getUid(this.getUid()))), (0, A.w)(Br => this.getAssignmentEntriesByInfo(Br, gt)), (0, O.U)(Br => [...Br, ..._e]));
    }
    loadBusinessState() {
      return this.getLifecycleState() ? this.context.getEhr().notUseServices() ? (0, b.of)(this) : this.service.get().pipe((0, I.b)(_e => {
        this.assignmentInfo = _e;
      }), (0, A.w)(() => this.apiService.getAssignment()), (0, I.b)(_e => {
        this.state = this.apiService.getStateAssignment(_e), this.assignment = _e;
      }), (0, N.K)(_e => (this.getLifecycleState(), (0, b.of)(this))), (0, O.U)(() => this)) : (0, b.of)(this);
    }
    getLocalDuplicates() {
      return this.context.getChildren().map(_e => _e.asType(C.A.IAssignmentEntry)).filter(_e => void 0 !== _e && _e.getAssignmentType() === j.v.Med).filter(_e => _e.getUid() !== this.getUid() && this.getMnnItems()?.some(gt => _e.getMnnItems()?.includes(gt)));
    }
    getAssignmentEntriesByInfo(_e, gt) {
      return 0 === _e.length ? (0, b.of)([]) : (0, E.a)(_e.map(ni => gt.getMedicalEntry(ni.uid).pipe((0, O.U)(So => So.getRoot().asType(C.A.IAssignmentEntry)), (0, Vt.h)(So => void 0 !== So), (0, O.U)(So => So))));
    }
    getAssigmentTemplateSetting() {
      return this.assignmentTemplate;
    }
    getMedicationInfoItem() {
      return (this.assignment?.medicationDispenses ?? []).find(_e => _e.code === this.scheduleItemId);
    }
    changeAssignmentStatesToSingle() {
      this.assignmentStates = ma(j.v.SingleMed, {});
    }
  }
  class It extends ba {
    constructor(_e, gt) {
      super(_e, gt), this.apiService = _e.getApis().assignmentApi.createService({
        userContext: _e.getUserContext()
      }, j.v.Operation).service(gt.getUid());
    }
    getAssignment() {
      return this.assignment;
    }
    loadBusinessState() {
      return this.getLifecycleState() ? this.context.getEhr().notUseServices() ? (0, b.of)(this) : this.service.get().pipe((0, I.b)(_e => {
        this.assignmentInfo = _e;
      }), (0, A.w)(() => this.apiService.getAssignment()), (0, I.b)(_e => {
        this.state = this.apiService.getStateAssignment(_e), this.assignment = _e;
      }), (0, N.K)(_e => (this.getLifecycleState(), (0, b.of)(this))), (0, O.U)(() => this)) : (0, b.of)(this);
    }
  }
  var At = i(94650);
  let _n = (() => {
    class it {
      constructor(gt, ni) {
        this.careCaseService = gt, this.dischargeService = ni;
      }
      create(gt, ni) {
        const So = ni.getMedicalEntry();
        return gt.type === j.v.Procedure ? new $o(So, ni) : gt.type === j.v.Med ? new Mi(So, ni) : gt.type === j.v.Instrumental ? new Io(So, ni) : gt.type === j.v.Consultation ? new Fn(So, ni) : gt.type === j.v.Lab ? new gi(So, ni) : gt.type === j.v.Operation ? new It(So, ni) : gt.type === j.v.CareCase ? new ci(So, ni, this.careCaseService, this.dischargeService) : new ba(So, ni);
      }
    }
    return it.ɵfac = function (gt) {
      return new (gt || it)(At.LFG(t.lb), At.LFG(e.lm));
    }, it.ɵprov = At.Yz7({
      token: it,
      factory: it.ɵfac,
      providedIn: "root"
    }), it;
  })();
});
