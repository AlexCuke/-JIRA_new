// Extracted from main; webpack module 36927. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Fv: () => Y,
    HI: () => m.H,
    HL: () => m.O,
    Ku: () => le,
    M1: () => Rt,
    NA: () => Se,
    NZ: () => te,
    QD: () => b,
    _Z: () => We,
    au: () => q,
    cD: () => v,
    es: () => j,
    kT: () => pe,
    mj: () => A,
    rZ: () => y,
    sc: () => be,
    xU: () => I,
    xn: () => n,
    z: () => B
  });
  var t = i(89653),
    e = i(43862),
    a = i(24886),
    m = i(12111);
  const M = (0, t.ZF)("prescriptions"),
    b = (0, t.P1)(M, mt => mt.patients),
    A = (0, t.P1)(M, mt => mt.filters),
    I = ((0, t.P1)(M, mt => mt.prescriptions), (0, t.P1)(M, mt => mt.loading)),
    L = ((0, t.P1)(M, mt => mt.selectedDate), (0, t.P1)(b, mt => {
      if (!mt?.length) return 0;
      let ut = 0;
      for (const Ct of mt) for (const Ft of Ct.medicines) Ft.isNew && ut++;
      return ut;
    })),
    v = ((0, t.P1)(L, mt => mt > 0), (0, t.P1)(M, mt => mt.crossDateNewCount)),
    f = new Set([e.Ai.Assigned, e.vd.Prepared, e.Ai.Editing, e.vd.Systematically]),
    E = new Set([e.vd.MissedAssigned, e.vd.MissedPrepared]),
    h = new Set([e.Ae.Completed, e.vd.Issued, e.vd.Utilized]),
    x = {
      [e.Ae.Assigned]: e.Ae.MissedAssigned,
      [e.Ae.Prepared]: e.Ae.MissedPrepared
    };
  function B(mt) {
    const ut = mt.planningDate || mt.completedDate;
    return ut ? (0, m.O)(ut) : null;
  }
  function y(mt, ut) {
    return mt.filter(Ct => "COMPLETED" === Ct.status && B(Ct) === ut).length;
  }
  function j(mt, ut) {
    return `${mt}/max ${ut}`;
  }
  function W(mt, ut) {
    const Ct = [];
    for (const Ft of mt.slots) Ft.planningDate ? (0, m.O)(Ft.planningDate) === ut && Ct.push(Ft) : mt.assignmentDate ? (0, m.O)(mt.assignmentDate) === ut && Ct.push(Ft) : Ct.push(Ft);
    if (Ct.length > 0 && mt.maxSymptomaticAmount) {
      const Ft = y(mt.medicationDispenses || [], ut),
        Et = j(Ft, mt.maxSymptomaticAmount),
        Ue = Ft < mt.maxSymptomaticAmount ? e.vd.Systematically : e.Ae.Completed;
      for (let Me = 0; Me < Ct.length; Me++) Ct[Me] = {
        ...Ct[Me],
        label: Et,
        status: Ue,
        symptomaticCompleted: Ft
      };
    }
    return 0 === Ct.length ? null : Ct.length === mt.slots.length ? mt : {
      ...mt,
      slots: Ct
    };
  }
  function Le(mt) {
    return mt.frequency?.toLowerCase().includes("симптоматически") ?? !1;
  }
  function ke(mt, ut, Ct, Ft, Et, Ue, Me, Ke) {
    if (Ct && !(Ft || mt.name?.toLowerCase().includes(Ct) || mt.tradeName?.toLowerCase().includes(Ct)) || Ue && !mt.slots.some(Ee => Ee.period?.toLowerCase() === Ue) || ut.status && !ut.status.includes("all") && !mt.slots.some(Ee => ut.status.some(je => function R(mt, ut, Ct) {
      if (Ct) switch (mt) {
        case "symptomatic":
          return !0;
        case "active":
          return f.has(ut.status) || E.has(ut.status);
        case "completed":
          return h.has(ut.status);
        default:
          return !1;
      }
      const Ft = function T(mt) {
        if (mt.status === e.Ae.Systematically) return mt.status;
        const ut = x[mt.status];
        if (!ut) return mt.status;
        const Ct = function u(mt) {
          if (!mt.planningDate) return "today";
          const Ct = (0, m.H)(new Date()),
            Ft = (0, m.O)(mt.planningDate);
          return Ft < Ct ? "past" : Ft === Ct ? "today" : "future";
        }(mt);
        return "past" === Ct || "today" === Ct && (0, a.a2)(mt) ? ut : mt.status;
      }(ut);
      switch (mt) {
        case "symptomatic":
        default:
          return !1;
        case "active":
          return f.has(Ft) && !(0, a.VA)(ut);
        case "missed":
          return E.has(Ft);
        case "completed":
          return h.has(Ft);
      }
    }(je, Ee, Et))) || Me && !mt.method?.toLowerCase().includes(Me)) return !1;
    if (ut.reasons) {
      const {
        basicTherapy: Ze,
        onHand: Ee,
        vaccination: je
      } = ut.reasons;
      if ((Ze || Ee || je) && !(Ze && mt.base || Ee && mt.onHand || je && mt.vaccination)) return !1;
    }
    return !(Ke && !mt.doctor?.toLowerCase().includes(Ke));
  }
  function J(mt) {
    const ut = [];
    for (const Ct of mt.slots) Ct.status !== e.Ai.Cancelled && ut.push(Ct);
    return 0 === ut.length ? null : ut.length === mt.slots.length ? mt : {
      ...mt,
      slots: ut
    };
  }
  function fe(mt, ut) {
    const Ct = (ut.search || "").trim().toLowerCase(),
      Ft = function F(mt) {
        if (!mt) return {
          value: "",
          ignore: !0
        };
        const ut = String(mt).trim().toLowerCase();
        return {
          value: ut,
          ignore: "" === ut || "all" === ut
        };
      }(ut.ward),
      Et = (0, m.H)(ut.date || new Date()),
      Ue = [],
      Me = (ut.cardNumber || "").trim().toLowerCase(),
      Ke = (ut.paymentType || "").trim().toLowerCase(),
      Ze = (ut.period || "").toLowerCase(),
      Ee = (ut.administrationMethod || "").toLowerCase(),
      je = (ut.doctorName || "").toLowerCase();
    for (const Mt of mt) {
      if (!Ft.ignore && String(Mt.ward || "").trim().toLowerCase() !== Ft.value || Me && !(Mt.historyNumber || "").toLowerCase().includes(Me) || Ke && !Mt.insurance?.toLowerCase().includes(Ke)) continue;
      const Je = !Ct || (Mt.name || "").toLowerCase().includes(Ct),
        Xt = [];
      for (const Nn of Mt.medicines) {
        const Pi = W(Nn, Et);
        if (!Pi) continue;
        const Ii = "pillboxes" === Pi.typeMedicament ? J(Pi) : Pi;
        Ii && ke(Ii, ut, Ct, Je, Le(Ii), Ze, Ee, je) && Xt.push(Ii);
      }
      Xt.length > 0 && (Xt.length === Mt.medicines.length && Xt.every((Nn, Pi) => Nn === Mt.medicines[Pi]) ? Ue.push(Mt) : Ue.push({
        ...Mt,
        medicines: Xt
      }));
    }
    return Ue.sort((Mt, Je) => Mt.name.localeCompare(Je.name, void 0, {
      sensitivity: "base"
    }));
  }
  const ye = (0, t.P1)(b, A, (mt, ut) => ut && mt?.length ? fe(mt, ut) : mt || []),
    ae = (0, t.P1)(A, mt => mt ? {
      ...mt,
      status: ["all"]
    } : null),
    Y = (0, t.P1)(b, ae, (mt, ut) => ut && mt?.length ? fe(mt, ut) : mt || []),
    G = (0, t.P1)(A, mt => mt ? mt.ward ? {
      ...mt,
      ward: null
    } : mt : null),
    te = (0, t.P1)(b, G, (mt, ut) => ut && mt?.length ? fe(mt, ut) : mt || []),
    pe = (0, t.P1)(te, mt => {
      if (!mt?.length) return [];
      const ut = new Set();
      for (const Ct of mt) {
        const Ft = Ct.ward ? String(Ct.ward) : null;
        Ft && "Не размещен" !== Ft && ut.add(Ft);
      }
      return Array.from(ut);
    }),
    be = (0, t.P1)(ye, mt => {
      if (!mt?.length) return [];
      const ut = new Set();
      for (const Ct of mt) for (const Ft of Ct.medicines) Ft.doctor && ut.add(Ft.doctor);
      return Array.from(ut).sort();
    }),
    le = (0, t.P1)(ye, mt => {
      if (!mt?.length) return [];
      const ut = new Set();
      for (const Ct of mt) for (const Ft of Ct.medicines) Ft.method && ut.add(Ft.method);
      return Array.from(ut).sort();
    }),
    n = (0, t.P1)(ye, mt => {
      if (!mt?.length) return [];
      const ut = new Set();
      for (const Ct of mt) Ct.insurance && ut.add(Ct.insurance);
      return Array.from(ut).sort();
    }),
    Se = ye,
    Rt = (0, t.P1)(ye, mt => mt?.length ? mt.reduce((ut, Ct) => ut + Ct.medicines.reduce((Ft, Et) => Ft + Et.slots.length, 0), 0) : 0),
    We = (0, t.P1)(ye, mt => mt?.length ? mt.reduce((ut, Ct) => ut + Ct.medicines.reduce((Ft, Et) => Ft + Et.slots.filter(Ue => Ue.status === e.Ae.Completed).length, 0), 0) : 0),
    Re = new Map();
  function st(mt, ut) {
    const Ct = `${mt.id}:${ut.id}`,
      Ft = Re.get(Ct);
    if (Ft && Ft.slots === ut.slots && Ft.patientName === mt.name && Ft.patientWard === mt.ward) return Ft;
    const Et = {
      id: ut.id,
      sex: mt.sex,
      patient: mt,
      medicine: ut,
      patientId: mt.id,
      patientName: mt.name,
      patientWard: mt.ward,
      medicineName: ut.name,
      tradeName: ut.tradeName,
      form: ut.dosage || "",
      method: ut.method,
      doctor: ut.doctor,
      dose: String(ut.dose || ""),
      frequency: ut.frequency,
      assignmentDate: ut.assignmentDate,
      slots: ut.slots,
      base: ut.base,
      onHand: ut.onHand,
      vaccination: ut.vaccination
    };
    return Re.set(Ct, Et), Et;
  }
  const q = (0, t.P1)(Se, mt => {
    if (!mt?.length) return [];
    const ut = [];
    for (const Ct of mt) for (const Ft of Ct.medicines) ut.push(st(Ct, Ft));
    return ut;
  });
});
