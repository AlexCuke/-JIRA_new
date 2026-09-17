// Extracted from main; webpack module 986. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    b: () => N
  });
  var t = i(63900),
    e = i(54004),
    a = i(71822),
    m = i(49151);
  class d extends m.I {
    constructor(L) {
      super(), this.medicalEntry = L, this.basePath = "текущая_процедура_манипуляция.текущая_поцедура", this._procedurePathSettings = {
        time: {
          path: `${this.basePath}.time`,
          type: a._t,
          setMethodName: "setValue"
        },
        dataDate: {
          path: `${this.basePath}.\u0434\u0430\u0442\u0430.\u0434\u0430\u0442\u0430`,
          type: a._t,
          setMethodName: "setValue"
        },
        currentStateValue: {
          path: `${this.basePath}.ism_transition.current_state`,
          type: a.aG,
          setMethodName: "setValue"
        },
        currentStateCode: {
          path: `${this.basePath}.ism_transition.current_state`,
          type: a.aG,
          setMethodName: "setCode"
        },
        careflowStepValue: {
          path: `${this.basePath}.ism_transition.careflow_step`,
          type: a.aG,
          setMethodName: "setValue"
        },
        careflowStepCode: {
          path: `${this.basePath}.ism_transition.careflow_step`,
          type: a.aG,
          setMethodName: "setCode"
        },
        description: {
          path: `${this.basePath}.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435`,
          type: a.Vd,
          setMethodName: "setValue"
        }
      }, this.composition = this.medicalEntry.getRoot().getComposition(), this.pathsSettingsMap = {
        procedure: this._procedurePathSettings
      };
    }
    readProcedureBlock() {
      return this.parsedFromCompositionData.procedure;
    }
    markAsCompleted() {
      const C = {
        ...this.readProcedureBlock(),
        currentStateValue: "completed",
        currentStateCode: "532",
        careflowStepValue: "Текущая процедура завершена",
        careflowStepCode: "at8888"
      };
      this.clearComposition(), this.setValues(C, "procedure");
    }
    markAsCompletedWithProtocol(L) {
      const v = {
        ...this.readProcedureBlock(),
        currentStateValue: "completed",
        currentStateCode: "532",
        careflowStepValue: "Текущая процедура завершена",
        careflowStepCode: "at8888",
        description: L
      };
      this.clearComposition(), this.setValues(v, "procedure");
    }
    markAsCanceled(L) {
      const v = {
        ...this.readProcedureBlock(),
        time: new Date().toISOString(),
        currentStateValue: "cancelled",
        currentStateCode: "528",
        careflowStepValue: "Текущая процедура отменена",
        careflowStepCode: "at6666",
        description: L
      };
      this.clearComposition(), this.setValues(v, "procedure");
    }
    rollBackProcedure() {
      const C = {
        ...this.readProcedureBlock(),
        currentStateValue: "initial",
        currentStateCode: "524",
        careflowStepValue: "Отправлен запрос на текущуюю процедуру",
        careflowStepCode: "at5555"
      };
      this.clearComposition(), this.setValues(C, "procedure");
    }
  }
  class M extends m.I {
    constructor(L, C) {
      super(), this.compositionEntry = L, this.isTemplateWithAnd = C, this.notModifiedNodes = ["_uid", "_link", "language", "territory", "category", "composer", "context", "статус", "запрос_на_процедуру"], this.basePath = C ? "процедуры_и_манипуляции.процедура" : "процедуры_манипуляции.процедура", this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        procedure: this._procedurePathSettings
      };
    }
    get _procedurePathSettings() {
      return {
        time: {
          path: `${this.basePath}.time`,
          type: a._t,
          setMethodName: "setValue"
        },
        comment: {
          path: `${this.basePath}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`,
          type: a.Vd,
          setMethodName: "setValue"
        },
        currentStateValue: {
          path: `${this.basePath}.ism_transition.current_state`,
          type: a.aG,
          setMethodName: "setValue"
        },
        currentStateCode: {
          path: `${this.basePath}.ism_transition.current_state`,
          type: a.aG,
          setMethodName: "setCode"
        },
        careflowStepValue: {
          path: `${this.basePath}.ism_transition.careflow_step`,
          type: a.aG,
          setMethodName: "setValue"
        },
        careflowStepCode: {
          path: `${this.basePath}.ism_transition.careflow_step`,
          type: a.aG,
          setMethodName: "setCode"
        }
      };
    }
    readProcedureBlock() {
      return this.parsedFromCompositionData.procedure;
    }
    fillCompleted(L, C) {
      this.setInitialValues(L, {
        procedure: C
      }), this.setValues(C, "procedure");
    }
    fillFinaly() {
      const C = {
        ...this.readProcedureBlock(),
        currentStateValue: "completed",
        currentStateCode: "532",
        careflowStepValue: "Текущая процедура завершена",
        careflowStepCode: "at8888"
      };
      this.clearComposition(), this.setValues(C, "procedure");
    }
  }
  var b = i(94650),
    A = i(15394);
  const I = class {
    constructor(L) {
      this.compositionsBaseService = L, this.procedureEntryCode = "t_procedure", this.currentProcedureEntryCode = "t_current_procedure";
    }
    getCompositionForComplete(L) {
      const v = L.procedureAssignment.procedureCode;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(f => f.getMedicalEntry(v)), (0, t.w)(f => (new d(f).markAsCompleted(), f.sign())));
    }
    getCompositionForCompleteWithProtocol(L, C, v) {
      const E = L.procedureAssignment.procedureCode;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(h => h.getMedicalEntry(E)), (0, t.w)(h => (new d(h).markAsCompletedWithProtocol(C), h.sign())));
    }
    getCompositionForCancel(L, C) {
      const f = L.procedureAssignment.procedureCode;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(E => E.getMedicalEntry(f)), (0, t.w)(E => (new d(E).markAsCanceled(C), E.save())));
    }
    getCompostionForFinaly(L) {
      const v = L.procedureAssignment.assignmentCompositionUid;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(f => f.getMedicalEntry(v)), (0, t.w)(f => (new M(f.getRoot(), !0).fillFinaly(), f.sign())));
    }
    createProcedureDocument(L, C) {
      const f = L.careCase.careCaseId;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(E => E.createMedicalEntry(this.procedureEntryCode, f)), (0, e.U)(E => (new M(E.getRoot(), !1).fillCompleted(f, C), E)), (0, t.w)(E => E.sign()));
    }
    getCompositionRollBack(L) {
      const v = L.procedureAssignment.procedureCode;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(f => f.getMedicalEntry(v)), (0, t.w)(f => (new d(f).rollBackProcedure(), f.save())));
    }
    getCompositionUnSignAndRead(L) {
      const v = L.procedureAssignment.procedureCode;
      return this.compositionsBaseService.getEhrByPatientId(L.careCase.actualPatientId).pipe((0, t.w)(f => f.getMedicalEntry(v)), (0, t.w)(f => {
        const h = new d(f).readProcedureBlock();
        return f.save().pipe((0, e.U)(() => h));
      }));
    }
  };
  let N = I;
  I.ɵfac = function (C) {
    return new (C || I)(b.LFG(A.W));
  }, I.ɵprov = b.Yz7({
    token: I,
    factory: I.ɵfac,
    providedIn: "root"
  });
});
