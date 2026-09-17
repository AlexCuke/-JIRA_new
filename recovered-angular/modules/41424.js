// Extracted from main; webpack module 41424. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    CO: () => d,
    DN: () => a,
    Dd: () => m
  });
  var t = i(71822),
    e = i(86134),
    a = (() => {
      return (M = a || (a = {})).INIT = "INIT", M.CREATED = "CREATED", M.EDITING = "EDITING", M.READY_TO_DESCRIBE = "READY_TO_DESCRIBE", M.DESCRIBING = "DESCRIBING", M.CANCELLING = "CANCELLING", M.CANCELLED = "CANCELLED", M.ACTIVE = "ACTIVE", M.ASSIGNED = "ASSIGNED", M.EXECUTING = "EXECUTING", M.COMPLETED = "COMPLETED", M.DELETED = "DELETED", a;
      var M;
    })();
  const m = (M, b) => {
      const A = [];
      return Object.values(M).forEach(N => {
        const I = Object.values(N);
        A.push(...I);
      }), A.filter(N => N.stateValue && N.stepCode).find(N => (N.stepCode === b.getStep()?.getCode() || N.findStepCodes && N.findStepCodes.includes(b.getStep()?.getCode() ?? "")) && N.stateValue === b.getActionState());
    },
    d = {
      InitCommand: {
        code: "InitCommand",
        behaviour: e.k.PrimaryScenario,
        name: "Создать назначение",
        stateValue: t.$W.planned,
        stepCode: "atXXXX",
        to: [a.INIT]
      },
      INIT: {
        code: "INIT",
        name: "Создано",
        DeleteCommand: {
          code: "DeleteCommand",
          behaviour: e.k.Danger,
          name: "Удалить",
          to: [a.DELETED]
        },
        EditDraftCommand: {
          code: "EditDraftCommand",
          behaviour: e.k.PrimaryScenario,
          name: "Редактировать",
          to: [a.INIT]
        }
      },
      CREATED: {
        code: "CREATED",
        name: "Создано",
        EditCommand: {
          name: "Редактировать",
          code: "EditCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.EDITING]
        },
        DeleteCommand: {
          name: "Удалить",
          code: "DeleteCommand",
          behaviour: e.k.Danger,
          to: [a.DELETED]
        },
        CancellingCommand: {
          name: "Отменить назначение",
          code: "CancellingCommand",
          behaviour: e.k.Danger,
          to: [a.CANCELLING],
          hidden: !0
        }
      },
      EDITING: {
        code: "EDITING",
        name: "Редактируется",
        DeleteCommand: {
          name: "Удалить",
          code: "DeleteCommand",
          behaviour: e.k.Danger,
          to: [a.DELETED]
        },
        EditCommand: {
          name: "Редактировать",
          code: "EditCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.EDITING]
        },
        SaveCommand: {
          name: "Сохранить",
          code: "SaveCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.EDITING],
          hidden: !0
        },
        AssignCommand: {
          name: "Назначить",
          code: "AssignCommand",
          behaviour: e.k.PrimaryScenario,
          to: [a.ASSIGNED],
          hidden: !0
        }
      },
      CANCELLING: {
        code: "CANCELLING",
        name: "Отменяется",
        CancelCommand: {
          name: "Отменить назначение",
          medicalEntryCode: "medical_entry_code",
          stateValue: t.$W.cancelled,
          stepCode: "atXXXX",
          code: "CancelCommand",
          behaviour: e.k.Danger,
          to: [a.CANCELLED],
          visualisationFlags: ["forms", "ruleExecuting"]
        },
        UndoCancellingCommand: {
          name: "Прервать отмену",
          code: "UndoCancellingCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.EDITING, a.ASSIGNED],
          visualisationFlags: ["list"]
        }
      },
      CANCELLED: {
        code: "CANCELLED",
        name: "Отменено",
        DeprecateCancelledCommand: {
          name: "Восстановить",
          code: "DeprecateCancelledCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.EDITING, a.ASSIGNED],
          visualisationFlags: ["all"]
        }
      },
      EXECUTING: {
        code: "EXECUTING",
        name: "В работе",
        ExecuteCommand: {
          name: "Подписать и продолжить",
          medicalEntryCode: "medical_entry_code",
          stateValue: t.$W.completed,
          stepCode: "atXXXX",
          code: "ExecuteCommand",
          behaviour: e.k.PrimaryScenario,
          to: [a.COMPLETED],
          iconSettings: {
            iconType: "consent",
            iconSize: 16,
            leftSide: !0
          },
          visualisationFlags: ["forms"]
        },
        SaveCommand: {
          name: "Сохранить",
          medicalEntryCode: "medical_entry_code",
          stateValue: t.$W.completed,
          stepCode: "atXXXX",
          code: "SaveCommand",
          hidden: !0,
          behaviour: e.k.AlternateScenario,
          to: [a.EXECUTING],
          visualisationFlags: ["forms"]
        },
        UndoExecutingCommand: {
          name: "Отменить выполнение",
          code: "UndoExecutingCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.ASSIGNED],
          visualisationFlags: ["lists"]
        },
        DeleteResultDocumentCommand: {
          name: "Удалить",
          code: "DeleteResultDocumentCommand",
          behaviour: e.k.Danger,
          to: [a.ASSIGNED],
          hidden: !0,
          visualisationFlags: ["forms"]
        }
      },
      ASSIGNED: {
        code: "ASSIGNED",
        name: "Назначено",
        EditCommand: {
          name: "Редактировать",
          code: "EditCommand",
          behaviour: e.k.AlternateScenario,
          to: [a.EDITING],
          visualisationFlags: ["list"]
        },
        DeleteCommand: {
          name: "Удалить",
          code: "DeleteCommand",
          behaviour: e.k.Danger,
          to: [a.DELETED],
          visualisationFlags: ["list"]
        },
        CancellingCommand: {
          name: "Отменить назначение",
          code: "CancellingCommand",
          behaviour: e.k.Danger,
          to: [a.CANCELLING],
          visualisationFlags: ["list"]
        },
        StartCommand: {
          name: "Взять в работу",
          code: "StartCommand",
          behaviour: e.k.PrimaryScenario,
          to: [a.EXECUTING],
          hidden: !0,
          visualisationFlags: ["forms"]
        }
      },
      COMPLETED: {
        code: "COMPLETED",
        name: "Выполнено",
        EditCompletedCommand: {
          name: "Редактировать",
          code: "EditCompletedCommand",
          hidden: !0,
          behaviour: e.k.AlternateScenario,
          to: [a.ACTIVE],
          visualisationFlags: ["view"]
        },
        DeprecateCompletedCommand: {
          name: "Отменить выполнение",
          code: "DeprecateCompletedCommand",
          behaviour: e.k.PrimaryScenario,
          to: [a.EXECUTING],
          visualisationFlags: ["list"]
        }
      },
      DELETED: {
        code: "DELETED",
        name: "Удалено"
      }
    };
});
