// Extracted from main; webpack module 91455. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    CM: () => x,
    MW: () => y,
    fE: () => T,
    iY: () => E,
    li: () => B,
    mP: () => j,
    mw: () => h
  });
  var t = i(69879),
    e = i(25713),
    a = i(52773);
  function m(W) {
    return `day_${W.getFullYear()}_${String(W.getMonth() + 1).padStart(2, "0")}_${String(W.getDate()).padStart(2, "0")}`;
  }
  function N(W) {
    const F = W.timeCommitted ?? W.dateTimeUpdate ?? W.startTime ?? W.date;
    if (null == F || "" === F || "Invalid Date" === F) return 0;
    const Le = new Date(String(F)).getTime();
    return Number.isFinite(Le) ? Le : 0;
  }
  function I(W) {
    if (null != W) {
      if (Array.isArray(W)) return W.length ? W.reduce((F, Le) => {
        if (!Le || "object" != typeof Le) return F;
        const ke = Le;
        return F ? N(ke) >= N(F) ? ke : F : ke;
      }, void 0) : void 0;
      if ("object" == typeof W) return I(Object.values(W).filter(Le => Le && "object" == typeof Le));
    }
  }
  function O(W, F) {
    if (null == W) return Array.isArray(W) ? [] : {};
    if (Array.isArray(W)) return W.filter(Le => !(!Le || "object" != typeof Le) && function b(W) {
      return function A(W) {
        if (null == W || "" === W) return null;
        const F = String(W).trim(),
          Le = /^(\d{4})-(\d{2})-(\d{2})/.exec(F);
        if (Le) return `day_${Le[1]}_${Le[2]}_${Le[3]}`;
        const ke = new Date(F).getTime();
        return Number.isFinite(ke) ? m(new Date(ke)) : null;
      }(W.medicalDay ?? W.date ?? W.timeCommitted ?? W.dateTimeUpdate ?? W.startTime);
    }(Le) === F);
    if ("object" == typeof W) {
      const ke = W[F];
      return ke && "object" == typeof ke ? {
        [F]: ke
      } : {};
    }
    return {};
  }
  function L(W, F) {
    if (!W || "object" != typeof W) return W;
    const Le = W,
      ke = Le.metrics_by_days;
    if (ke && "object" == typeof ke) {
      const J = ke[F];
      return {
        ...Le,
        metrics_by_days: J && "object" == typeof J ? {
          [F]: J
        } : {},
        elements: O(Le.elements, F)
      };
    }
    return {
      ...Le,
      elements: O(Le.elements, F)
    };
  }
  function v(W) {
    return W ? {
      weight: W.weight ?? W.bodyWeight ?? W.anthroWeight,
      bath: W.bath ?? W.takeBath ?? W.hasBath,
      liquid: W.liquid ?? W.liquidConsumed,
      urine: W.urine ?? W.dailyUrineOutput,
      linen: W.linen ?? W.changeLinen ?? W.linenChange,
      phlegm: W.phlegm ?? W.sputum,
      feces: W.feces ?? W.stool,
      pediculosis: W.pediculosis,
      pediculosisDetails: W.pediculosisDetails,
      pediculosisFlag: W.pediculosisFlag ?? W.pediculosis,
      transportability: W.transportability,
      temperature: W.temperature,
      temperatureMorning: W.temperatureMorning,
      temperatureEvening: W.temperatureEvening,
      compositionUid: W.compositionUid
    } : {};
  }
  function f(...W) {
    return W.reduce((F, Le) => (Object.entries(Le ?? {}).forEach(([ke, J]) => {
      null != J && "" !== J && (F[ke] = J);
    }), F), {});
  }
  function E(W) {
    const F = W?.news2 ?? {},
      {
        elements: Le,
        ...ke
      } = F,
      J = function C(W) {
        return W ? {
          temperature: W.temperature,
          grade: W.grade ?? W.sum,
          sys: W.sys ?? W.systolicPressure,
          dia: W.dia ?? W.diastolicPressure,
          rr: W.rr ?? W.respiratoryRate,
          hr: W.hr ?? W.heartRate ?? W.pulse,
          sp: W.sp ?? W.spo2,
          oxygenation: W.oxygenation ?? W.demandOxygen,
          oxygenationDevice: W.oxygenationDevice ?? W.oxygenDevice,
          consciousness: W.consciousness ?? W.consciousnessLevel,
          clinicalRisk: W.clinicalRisk ?? W.risk,
          risk: W.risk ?? W.clinicalRisk,
          timeCommitted: W.timeCommitted ?? W.startTime,
          compositionUid: W.compositionUid,
          owner: W.owner ?? W.performerName ?? W.composerName ?? W.performer ?? W.author,
          ownerId: W.ownerId ?? W.performerId ?? W.composerId ?? W.userId ?? W.employeeId
        } : {};
      }(I(Le));
    return f(ke, J);
  }
  function h(W) {
    const F = W?.form004 ?? {},
      {
        elements: Le,
        ...ke
      } = F,
      J = v(I(Le));
    return f(v(I(W?.news2?.elements)), ke, J);
  }
  function x(W) {
    if (null == W || "" === W) return;
    const F = Number(String(W).replace(/[^\d.-]/g, ""));
    return Number.isFinite(F) ? F : void 0;
  }
  function u(W) {
    if (!W) return {};
    const {
      temperature: F,
      grade: Le,
      sum: ke,
      morseSum: J,
      sys: fe,
      dia: ye,
      rr: ae,
      hr: Y,
      sp: G,
      pulse: te,
      heartRate: pe,
      systolicPressure: be,
      diastolicPressure: le,
      respiratoryRate: n,
      spo2: Se,
      oxygenation: qe,
      demandOxygen: Rt,
      clinicalRisk: We,
      risk: Re,
      timeCommitted: st,
      startTime: q,
      compositionUid: mt,
      owner: ut,
      ownerId: Ct,
      weight: Ft,
      bath: Et,
      liquid: Ue,
      urine: Me,
      linen: Ke,
      phlegm: Ze,
      feces: Ee,
      pediculosis: je,
      pediculosisDetails: Mt,
      pediculosisFlag: Je,
      transportability: Xt,
      temperatureMorning: Nn,
      temperatureEvening: Pi,
      scaleMorseTime: Ii,
      ...yi
    } = W;
    return yi;
  }
  function T(W, F) {
    if (!W?.data) return W;
    const Le = function M(W, F = new Date()) {
        const Le = function d(W) {
            if (null == W) return "today";
            if ("string" == typeof W) return W;
            if ("object" == typeof W && "code" in W) {
              const F = W.code;
              return null != F && "" !== F ? String(F) : "today";
            }
            return "today";
          }(W),
          ke = new Date(F);
        return "yesterday" === Le && ke.setDate(ke.getDate() - 1), m(ke);
      }(F),
      ke = W.data,
      J = {
        ...ke,
        news2: ke.news2 ? {
          ...u(ke.news2),
          elements: O(ke.news2.elements, Le)
        } : ke.news2,
        form004: ke.form004 ? {
          ...u(ke.form004),
          elements: O(ke.form004.elements, Le)
        } : ke.form004,
        scales: ke.scales ? {
          ...u(ke.scales),
          elements: O(ke.scales.elements, Le)
        } : ke.scales,
        anthropometricData: L(ke.anthropometricData, Le)
      },
      fe = E(J),
      ye = h(J),
      ae = B(J),
      Y = y(J);
    return {
      ...W,
      data: {
        ...J,
        news2: {
          ...J.news2,
          ...fe
        },
        form004: {
          ...J.form004,
          ...ye
        },
        scales: J.scales || Object.keys(ae).length ? {
          ...J.scales,
          ...ae,
          ...(null != Y ? {
            sum: Y,
            morseSum: Y
          } : {})
        } : J.scales,
        needsNews2Evaluation: (0, e.rj)(J),
        needsMorseEvaluation: (0, e.e$)(J),
        needsScaleEvaluation: (0, e.Jw)(J),
        hasHighTemperature: (0, a.L)(J),
        hasCriticalPressure: (0, a.y)(J)
      }
    };
  }
  function B(W) {
    const F = W?.scales ?? {},
      {
        elements: Le,
        ...ke
      } = F,
      J = function R(W) {
        return W ? {
          ...W,
          compositionUid: W.compositionUid,
          sum: W.sum ?? W.morseSum,
          scaleMorseTime: W.scaleMorseTime ?? W.timeCommitted,
          owner: W.owner ?? W.performerName ?? W.composerName ?? W.performer ?? W.author,
          ownerId: W.ownerId ?? W.performerId ?? W.composerId ?? W.userId ?? W.employeeId,
          timeCommitted: W.timeCommitted
        } : {};
      }(I(Le));
    return f(ke, J);
  }
  function y(W) {
    const F = W?.scales;
    if (!F) return;
    const Le = null != F.elements,
      ke = I(F.elements);
    if (ke) {
      if (null != ke.sum) {
        const fe = Number(ke.sum);
        if (Number.isFinite(fe)) return fe;
      }
      if (null != ke.morseSum) {
        const fe = Number(ke.morseSum);
        if (Number.isFinite(fe)) return fe;
      }
      const J = [1, 2, 3, 4, 5, 6].map(fe => ke[`question${fe}Value`]).filter(fe => null != fe && "" !== fe);
      if (J.length) {
        const fe = J.reduce((ye, ae) => ye + Number(ae), 0);
        return Number.isFinite(fe) ? fe : void 0;
      }
    } else if (!Le) {
      if (null != F.sum) {
        const J = Number(F.sum);
        return Number.isFinite(J) ? J : void 0;
      }
      if (null != F.morseSum) {
        const J = Number(F.morseSum);
        return Number.isFinite(J) ? J : void 0;
      }
    }
  }
  function j(W) {
    const F = new Set();
    return [E(W).compositionUid, h(W).compositionUid, (0, t.sc)(W)].filter(Le => null != Le && "" !== Le).forEach(Le => F.add(String(Le))), [...F];
  }
});
