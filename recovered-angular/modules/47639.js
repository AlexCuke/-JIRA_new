// Extracted from main; webpack module 47639. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    OP: () => L,
    eP: () => b,
    hE: () => u,
    mK: () => h,
    pQ: () => C,
    sn: () => x
  });
  var t = i(94253),
    e = i(69879),
    a = i(91455),
    m = i(628);
  const d = ["isFall", "hasConcomitantDiseases", "independenceWalking", "hasIntravenousTherapy", "gait", "mentalState"];
  function b(T) {
    const R = (0, a.li)(T?.data),
      B = (0, a.MW)(T?.data),
      y = d.some((W, F) => {
        const Le = R[`question${F + 1}`];
        return null != Le && "" !== Le;
      });
    if (null == B && !y) return;
    const j = {
      compositionUid: R.compositionUid,
      sum: B ?? R.sum,
      scaleMorseTime: R.scaleMorseTime,
      owner: R.owner
    };
    return d.forEach((W, F) => {
      const Le = R[`question${F + 1}`];
      null != Le && "" !== Le && (j[W] = Le);
    }), null != j.sum && (j.interpretation = function M(T) {
      return null == T ? "—" : T >= 0 && T <= 24 ? "Нет риска падений" : T >= 25 && T <= 50 ? "Низкий риск падений" : "Высокий риск падений";
    }(j.sum)), j;
  }
  function A(T) {
    if (null != T && "" !== T) return String(T).replace(".", ",");
  }
  function N(T) {
    if (null == T || "" === T) return;
    const R = String(T);
    return R.charAt(0).toUpperCase() + R.slice(1);
  }
  function I(T) {
    if (!T) return;
    const R = T.pediculosis;
    return Array.isArray(R) && R[0] ? String(R[0]).trim().toLowerCase() : "string" == typeof R && R ? R.trim().toLowerCase() : !1 === T.pediculosisFlag ? "не проверен" : T?.pediculosisDetails ? T.pediculosisDetails : void 0;
  }
  function L(T) {
    if (null == T || "" === T) return;
    if ("boolean" == typeof T) return T ? "да" : "нет";
    const R = String(T).trim().toLowerCase();
    return ["да", "true", "1"].includes(R) ? "да" : ["нет", "false", "0"].includes(R) ? "нет" : void 0;
  }
  function C(T) {
    if (null == T || "" === T) return;
    if ("boolean" == typeof T) return T;
    const R = String(T).trim().toLowerCase();
    return !!["да", "true", "1"].includes(R) || !["нет", "false", "0"].includes(R) && void 0;
  }
  function v(T) {
    if (null == T || "" === T) return;
    const R = {
        "может идти": "Может идти",
        стоя: "Может идти",
        сидя: "Сидя",
        лежа: "Лежа"
      },
      B = String(T).trim().toLowerCase();
    return R[B] ? R[B] : N(T);
  }
  function h(T) {
    const R = (0, a.mw)(T),
      B = (0, e.vt)(T),
      y = R.weight ?? B ?? void 0,
      j = {},
      W = v(R.transportability);
    if (W) {
      j.transportability = W;
      const ke = function f(T) {
        const R = v(T);
        if (!R) return;
        const B = t.G_.find(y => y.name.toLowerCase() === R.toLowerCase());
        return B ? String(B.id) : void 0;
      }(W);
      ke && (j.transportabilityCode = ke);
    }
    const F = function E(T) {
      const R = T.pediculosis;
      return Array.isArray(R) ? R[0] : "string" == typeof R && R ? R : void 0;
    }(R);
    F && (j.pediculosis = F), null != R.bath && (j.bath = Boolean(R.bath));
    const Le = L(R.linen);
    return Le && (j.linen = Le), null != y && (j.weight = y), ["liquid", "urine", "feces", "phlegm"].forEach(ke => {
      const J = R[ke];
      null != J && "" !== J && (j[ke] = J);
    }), j;
  }
  function x(T) {
    const R = T?.data,
      B = (0, a.iY)(R),
      y = (0, a.mw)(R),
      j = {
        time_committed: B.timeCommitted ?? B.startTime,
        owner: B.owner,
        rr: B.rr,
        sp: B.sp,
        oxygenation: B.oxygenation,
        oxygenationDevice: B.oxygenationDevice,
        temperature: A(B.temperature),
        sys: B.sys,
        dia: B.dia,
        hr: B.hr ?? B.pulse ?? B.heartRate,
        consciousness: B.consciousness,
        sum: (0, a.CM)(B.grade) ?? B.sum,
        risk: void 0
      };
    j.risk = (0, m.No)(j);
    const W = (0, e.vt)(R),
      F = y.weight ?? W ?? void 0;
    return {
      news2: j,
      form004: {
        transportability: N(y.transportability),
        pediculosis: I(y),
        bath: C(y.bath),
        linen: L(y.linen),
        weight: F,
        liquid: y.liquid,
        urine: y.urine,
        feces: y.feces,
        phlegm: y.phlegm
      },
      anthropometry: {
        weight: F
      }
    };
  }
  function u(T) {
    const R = T?.data?.careCase;
    return `${R?.lastName || ""} ${R?.firstName || ""} ${R?.secondName || ""}`.trim();
  }
});
