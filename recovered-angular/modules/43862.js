// Extracted from main; webpack module 43862. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Ae: () => m,
    Ai: () => e,
    E3: () => O,
    Uf: () => t,
    dg: () => b,
    jo: () => A,
    vd: () => a,
    y0: () => d
  });
  const t = "nurse_viewed_state";
  var e = (() => {
      return (L = e || (e = {})).Assigned = "ASSIGNED", L.Created = "CREATED", L.Cancelling = "CANCELLING", L.Cancelled = "CANCELLED", L.Completed = "COMPLETED", L.Postponed = "POSTPONED", L.Editing = "EDITING", L.Executing = "EXECUTING", e;
      var L;
    })(),
    a = (() => {
      return (L = a || (a = {})).Changed = "CHANGED", L.Empty = "EMPTY", L.Issued = "ISSUED", L.MissedAssigned = "MISSED_ASSIGNED", L.MissedPrepared = "MISSED_PREPARED", L.NeedsRepackage = "NEEDS_REPACKAGE", L.Prepared = "PREPARED", L.Systematically = "SYSTEMATICALLY", L.Utilized = "UTILIZED", L.Damaged = "DAMAGED", L.Delivered = "DELIVERED", a;
      var L;
    })(),
    m = (() => {
      return (L = m || (m = {})).Assigned = "ASSIGNED", L.Created = "CREATED", L.Cancelling = "CANCELLING", L.Cancelled = "CANCELLED", L.Completed = "COMPLETED", L.Postponed = "POSTPONED", L.Editing = "EDITING", L.Executing = "EXECUTING", L.Changed = "CHANGED", L.Empty = "EMPTY", L.Issued = "ISSUED", L.MissedAssigned = "MISSED_ASSIGNED", L.MissedPrepared = "MISSED_PREPARED", L.NeedsRepackage = "NEEDS_REPACKAGE", L.Prepared = "PREPARED", L.Systematically = "SYSTEMATICALLY", L.Utilized = "UTILIZED", L.Damaged = "DAMAGED", L.Delivered = "DELIVERED", m;
      var L;
    })();
  const d = {
      new: "Новое",
      assigned: "Назначено",
      active: "Назначено",
      created: "Назначено",
      cancelling: "Отменяется",
      cancelled: "Отменено",
      completed: "Выполнено",
      delivered: "Выдано",
      postponed: "Отложено",
      editing: "Редактируется",
      systematically: "Назначено",
      changed: "Изменено",
      empty: "-",
      issued: "Выдано",
      missed_assigned: "Пропущено (назначено)",
      missed_prepared: "Пропущено (подготовлено)",
      needs_repackage: "Требует пересборки",
      prepared: "Назначено",
      utilized: "Утилизировано",
      damaged: "Утилизировано",
      ready_dispense: "Готов к выдаче",
      base: "Базовая амбулаторная терапия",
      deleted: "Удалено врачом"
    },
    M = {
      assigned: "Назначено",
      prepared: "Подготовлено",
      base: "Базовая амбулаторная терапия",
      base__adaptive: "Базовая амб. тер.",
      deleted: "Удалено врачом",
      completed: "Выполнено",
      executing: "Выполняется",
      injection__in_work: "В работе",
      injection__prepared: "Подготовлено",
      injection__in_process: "Выполняется",
      injection__reject: "Отказ пациента",
      injection__deleted: "Утилизировано"
    };
  function b(L) {
    return d[L?.toLowerCase() ?? ""] ?? (L || "-");
  }
  function A(L) {
    return M[L?.toLowerCase() ?? ""] ?? (L || "-");
  }
  const O = {
    patients: [],
    prescriptions: [],
    filters: {
      status: ["all"],
      grouping: "byPatient",
      sorting: "byTimeOfDay",
      ward: null,
      period: null,
      timeViewMode: "byTimeOfDay",
      search: null,
      cardNumber: null,
      administrationMethod: null,
      paymentType: null,
      reasons: null,
      doctorName: null,
      date: null
    },
    loading: !1,
    error: null,
    selectedDate: new Date(),
    crossDateNewCount: 0
  };
});
